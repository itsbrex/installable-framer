import { setMaxListeners } from 'events'
import { fetch } from 'undici'
import './sentry.js'

import { bundle, StyleToken, createExampleComponentCode } from './exporter.js'
import { createClient } from './generated/api-client.js'
import { generateStackblitzFiles } from './stackblitz.js'

import { cac } from 'cac'
import { exec } from 'child_process'
import { promisify } from 'util'

import fs from 'fs'
import path, { basename } from 'path'
import { BreakpointSizes, defaultBreakpointSizes } from './css.js'
import {
    componentNameToPath,
    dedent,
    isTruthy,
    logger,
    sleep,
    spinner,
} from './utils.js'
import { getPackageManager } from './package-manager.js'
import { notifyError } from './sentry.js'
import { dispatcher } from './undici-dispatcher.js'
const configNames = ['unframer.config.json', 'unframer.json']

export const cli = cac('unframer')

let defaultOutDir = 'framer'

cli.command('[projectId]', 'Run unframer with optional project ID')
    .option('--outDir <dir>', 'Output directory', { default: defaultOutDir })
    .option(
        '--external [package]',
        'Make some package external, do not pass a package name to make all packages external',
        {
            default: true,
        },
    )
    .option('--watch', 'Watch for changes and rebuild', { default: false })
    .option('--jsx', 'Output jsx code instead of minified .js code', {
        default: true,
    })
    .option('--debug', 'Enable debug logging', { default: false })
    .option('--metafile', 'Generate meta.json file with build metadata', {
        default: false,
    })
    .action(async function main(projectId, options) {
        const external_ = options.external
        const allExternal = external_ === true
        const externalPackages: string[] = Array.isArray(external_)
            ? external_.filter((x) => x.trim())
            : typeof external_ === 'string'
              ? [external_]
              : []
        try {
            if (options.debug) {
                logger.debug = true
            }
            const outDir = options.outDir
            const controller = new AbortController()
            const signal = controller.signal
            const watch = options.watch
            if (projectId) {
                const { config, cwd, websiteUrl } = await configFromFetch({
                    allExternal,
                    externalPackages,
                    outDir,
                    projectId,
                })
                let jsx = options.jsx
                const { rebuild, buildContext } = await bundle({
                    config: {
                        jsx,
                        ...config,
                    },
                    watch,
                    cwd,
                    signal,
                    metafile: options.metafile,
                })
                // console.log('buildContext', buildContext)
                if (!websiteUrl || !options.watch) {
                    await buildContext?.dispose?.()
                    return
                }
                spinner.start(
                    `Waiting for changes, try editing a component in Framer and click publish...`,
                )
                let lastEtag: string | null = null
                const startTime = Date.now()
                while (Date.now() - startTime < 30 * 60 * 1000) {
                    const etag = await fetch(websiteUrl, {
                        method: 'HEAD',
                        dispatcher,
                    })
                        .then((response) => response.headers.get('etag'))
                        .catch((error) => {
                            logger.error('Error fetching etag:', error)
                            return null
                        })
                    logger.log('etag', etag)
                    if (etag && lastEtag && etag !== lastEtag) {
                        spinner.start(
                            `Detected Framer website change, rebuilding...`,
                        )
                        lastEtag = etag
                        await rebuild()
                    }
                    if (etag) {
                        lastEtag = etag
                    }

                    await sleep(1000 * 2)
                }
            }

            // legacy behavior without Framer plugin
            fixOldUnframerPath()
            const cwd = process.cwd()
            logger.log(`Looking for ${configNames.join(', ')} in ${cwd}`)

            const configPath = findUp(configNames, { cwd })
            if (!configPath) {
                logger.log(`No ${configNames.join(', ')} found`)
                return
            }
            const configBasename = basename(configPath!)
            const configContent = fs.readFileSync(configPath, 'utf8')
            if (!configContent) {
                logger.log(`No ${configBasename} contents found`)
                return
            }
            const configContentWithoutComments = configContent.replace(
                /^\s*\/\/.*$/gm,
                '',
            )

            const config = JSON.parse(configContentWithoutComments)
            if (outDir !== defaultOutDir) {
                config.outDir = outDir
            }

            setMaxListeners(0, controller.signal)
            const { buildContext } = await bundle({
                config: { ...config, externalPackages, allExternal },
                watch,
                signal: controller.signal,
                cwd: path.resolve(process.cwd(), config.outDir || 'framer'),
                metafile: options.metafile,
            })
            await buildContext.dispose?.()
        } catch (error) {
            notifyError(error)

            throw error
        }
    })

function fixOldUnframerPath() {
    // if unframer.json exists, rename it to unframer.config.json

    const oldConfigPath = fs.existsSync('unframer.json')
    if (oldConfigPath) {
        fs.renameSync('unframer.json', 'unframer.config.json')
        logger.green(
            'legacy unframer.json config renamed to unframer.config.json',
        )
        return true
    }
    return false
}
import pkg from '../package.json'
const version = pkg.version

cli.version(version).help()

cli.command(
    'example-app <projectId>',
    'Create an example app with Framer components',
)
    .option('--outDir <dir>', 'Output directory', {
        default: 'example-unframer-app',
    })
    .action(async (projectId, options) => {
        if (!projectId?.trim()) {
            console.log(
                `unframer example-app requires a project id positional param`,
            )
            process.exit(1)
        }
        try {
            const outDir = options.outDir
            console.log(`Creating example app in ${outDir}`)

            // Create the output directory
            const absoluteOutDir = path.resolve(process.cwd(), outDir)
            if (!fs.existsSync(absoluteOutDir)) {
                fs.mkdirSync(absoluteOutDir, { recursive: true })
            }

            // Fetch the project configuration
            spinner.start('Fetching project configuration...')
            const { config, websiteUrl } = await configFromFetch({
                projectId,
                allExternal: true,
                externalPackages: [],
                outDir: 'src/framer',
            })
            spinner.stop('Project configuration fetched')

            // Generate example component code
            spinner.start('Generating example component code...')
            const { exampleCode } = await createExampleComponentCode({
                outDir: './framer',
                config,
            })

            // Generate all the files needed for the example app
            const files = generateStackblitzFiles({
                projectId,
                appComponentCode: exampleCode,
                title: config.projectName || 'Unframer Example App',
            })

            // Write all files to the output directory
            for (const file of files) {
                const filePath = path.join(absoluteOutDir, file.relativePath)
                const fileDir = path.dirname(filePath)

                // Ensure directory exists
                if (!fs.existsSync(fileDir)) {
                    fs.mkdirSync(fileDir, { recursive: true })
                }

                fs.writeFileSync(filePath, file.contents)
                console.log(`Created ${file.relativePath}`)
            }
            spinner.stop('Example files created')

            // Bundle the Framer components
            spinner.start('Downloading Framer components...')
            const componentsOutDir = path.join(absoluteOutDir, 'src/framer')
            const { buildContext } = await bundle({
                config: {
                    ...config,
                    jsx: true,
                    outDir: componentsOutDir,
                    allExternal: true,
                    externalPackages: [],
                },
                watch: false,
                cwd: componentsOutDir,
                signal: new AbortController().signal,
                metafile: false,
            })
            await buildContext?.dispose?.()
            spinner.stop('Framer components downloaded')

            // Install dependencies using detected package manager
            spinner.stop('Framer components downloaded')

            const packageManager = await getPackageManager()
            const installCommand =
                packageManager === 'yarn' ? 'yarn' : `${packageManager} install`

            console.log(`Installing dependencies with ${packageManager}...`)
            spinner.start(`Running ${installCommand}...`)

            const execAsync = promisify(exec)
            try {
                await execAsync(installCommand, {
                    cwd: absoluteOutDir,
                    // Can't use 'inherit' with async exec, so we'll capture output
                    encoding: 'utf8',
                })
                spinner.stop('Dependencies installed successfully')
            } catch (error) {
                spinner.stop('Failed to install dependencies')
                console.error(
                    `${packageManager} install failed:`,
                    error?.message || error,
                )
                console.log(
                    `You can manually run "${installCommand}" in the created directory`,
                )
            }

            console.info(dedent`

            Example app created successfully in ${outDir}!

            Next steps:
              cd ${outDir}
              ${packageManager} run dev

            Quick guide:
            ▪︎ Read and edit src/App.tsx to add or customize your rendered Framer components
            ▪︎ Your components are in src/framer/ directory. Run npm run framer to sync changes from Framer
            ▪︎ The app uses Vite + React + TypeScript + Tailwind CSS

            `)
        } catch (error) {
            notifyError(error)
            spinner.error('Failed to create example app')
            throw error
        }
    })

export type Config = {
    jsx?: boolean
    components: {
        [name: string]: string
    }
    componentBreakpoints?: {
        variantId: string
        componentId: string
        componentName: string
        breakpointName: string
        width: number
    }[]
    externalPackages?: string[]
    allExternal?: boolean
    projectId?: string
    fullFramerProjectId?: string
    projectName?: string
    framerWebPages?: {
        webPageId: string
        components?: string[]
        path: string
    }[]

    locales?: {
        code: string
        id: string
        name: string
        slug: string
    }[]
    breakpoints?: BreakpointSizes
    tokens?: StyleToken[]
    outDir?: string
    componentInstancesInIndexPage: ComponentInstanceInPage[]
    pageBackgroundColor?: string
    // [key: string]: any
}

type ComponentInstanceInPage = {
    pageOrdering: number
    componentId: string
    componentPathSlug: string
    controls: Record<string, any>
    nodeDepth: number
    // pagePath: string
    webPageId: string
}

export async function configFromFetch({
    projectId,
    externalPackages = [] as string[],
    allExternal = false,
    outDir = undefined as undefined | string,
}) {
    logger.log(`Fetching config for project ${projectId}`)

    const url = process.env.UNFRAMER_SERVER_URL
    if (url) {
        console.log(`using server url ${url}`)
    }
    const client = await createClient({
        url: url || 'https://unframer.co',
    })

    spinner.start(`Fetching config for project ${projectId}`)
    const { data, error } = await client.api.plugins.reactExportPlugin
        .project({ projectId })
        .get()
    if (error) {
        if (error.status === 402) {
            const rawValue = error.value
            const buyUrl = rawValue?.buyUrl

            const message = (() => {
                if (typeof rawValue === 'object' && rawValue?.message) {
                    return String(rawValue.message)
                }
                return 'A React Export subscription is required to download components.'
            })()
            const details = buyUrl
                ? `${message}\nPurchase subscription: ${buyUrl}`
                : message
            // spinner.error(details)
            throw new Error(details, { cause: error })
        }
        spinner.error('Error fetching project data:')
        console.error(error)
        throw error
    }
    spinner.info(`Got Framer project data`)
    const websiteUrl = data?.project?.websiteUrl

    const projectName = data?.project?.projectName || ''
    if (projectName) {
        spinner.info(`Using project: ${projectName}`)
    }
    let cwd = path.resolve(process.cwd(), outDir || 'framer')

    const indexPage = data?.framerWebPages?.find((x) => x.path === '/')
    const componentInstancesInIndexPage =
        data.componentInstances
            ?.filter((x) => x.webPageId === indexPage?.webPageId)
            .map((x) => {
                const component = data.components.find((c) => {
                    return x.componentId === c.id
                })
                if (!component) {
                    console.error(
                        new Error(
                            `cannot find component for instance ${x.componentId}`,
                        ),
                    )
                }
                const componentPathSlug = componentNameToPath(
                    component?.name || '',
                )
                const res: ComponentInstanceInPage = {
                    ...x,
                    controls: x.controls as any,
                    componentPathSlug,
                }
                return res
            })
            .sort((a, b) => {
                return a.pageOrdering - b.pageOrdering
            }) || []
    const config: Config = {
        ...data,
        pageBackgroundColor: data.project?.pageBackgroundColor || '',
        breakpoints: defaultBreakpointSizes,
        outDir,
        externalPackages,
        allExternal,
        projectId: data?.project?.projectId,
        projectName,
        fullFramerProjectId: data?.project?.fullFramerProjectId!,
        locales: data?.locales,

        components: Object.fromEntries(
            data.components.map((c) => [componentNameToPath(c.name), c.url]),
        ),
        componentBreakpoints:
            data.breakpoints
                ?.map((b) => {
                    const c = data.components.find(
                        (c) => c.id === b.componentId,
                    )
                    if (!c) {
                        return
                    }
                    return {
                        ...b,
                        componentName: componentNameToPath(c.name),
                    }
                })
                .filter(isTruthy) || [],
        tokens: data.colorStyles,
        componentInstancesInIndexPage,
        framerWebPages: data.framerWebPages || [],
    }
    return { websiteUrl, cwd, config }
}

function findUp(
    configNames: string[],
    { cwd }: { cwd: string },
): string | null {
    let currentDir = cwd

    while (true) {
        for (const configName of configNames) {
            const configPath = path.join(currentDir, configName)
            if (fs.existsSync(configPath)) {
                return configPath
            }
        }

        const parentDir = path.dirname(currentDir)
        if (parentDir === currentDir) {
            // Reached the root directory
            break
        }
        currentDir = parentDir
    }

    return null
}
