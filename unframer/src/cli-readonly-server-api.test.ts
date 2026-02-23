// Read-only integration checks for server-api CLI commands and reconnect latency.
import childProcess from 'node:child_process'
import process from 'node:process'
import util from 'node:util'
import { expect, test } from 'vitest'

const execFile = util.promisify(childProcess.execFile)

const defaultProjectUrl =
    'https://framer.com/projects/Framer-MCP-project-Designor-Framer-Template-copy--lfAw10qcrLpLLEznmZmo-irrP1?node=CpFAHygNJ'

const hasApiKey = Boolean(process.env.FRAMER_API_KEY)

type RunCliResult = {
    stdout: string
    stderr: string
    durationMs: number
}

function sleep({ ms }: { ms: number }): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

async function runServerApiCliReadOnly({
    args,
    timeoutMs = 180_000,
}: {
    args: string[]
    timeoutMs?: number
}): Promise<RunCliResult> {
    const projectUrl = process.env.FRAMER_PROJECT_URL || defaultProjectUrl
    const startMs = performance.now()
    const { stdout, stderr } = await execFile(
        'pnpm',
        ['tsx', 'src/bin.ts', ...args, '--project', projectUrl],
        {
            cwd: process.cwd(),
            env: process.env,
            timeout: timeoutMs,
            maxBuffer: 8 * 1024 * 1024,
        },
    )
    return {
        stdout,
        stderr,
        durationMs: performance.now() - startMs,
    }
}

async function runServerApiCliReadOnlyWithRetry({
    args,
    timeoutMs = 180_000,
    attempt = 1,
    maxAttempts = 3,
}: {
    args: string[]
    timeoutMs?: number
    attempt?: number
    maxAttempts?: number
}): Promise<RunCliResult> {
    try {
        return await runServerApiCliReadOnly({ args, timeoutMs })
    } catch (error) {
        if (attempt >= maxAttempts) {
            throw error
        }
        await sleep({ ms: 1_000 * attempt })
        return runServerApiCliReadOnlyWithRetry({
            args,
            timeoutMs,
            attempt: attempt + 1,
            maxAttempts,
        })
    }
}

function extractJsonFromCliOutput({ output }: { output: string }): unknown {
    const jsonStart = output.indexOf('{')
    if (jsonStart < 0) {
        throw new Error(`Could not find JSON in CLI output:\n${output}`)
    }
    return JSON.parse(output.slice(jsonStart))
}

test.skipIf(!hasApiKey)(
    'server-api read-only cli commands return expected output',
    async () => {
        const websiteRun = await runServerApiCliReadOnly({
            args: ['mcp', 'getProjectWebsiteUrl'],
        })
        const website = extractJsonFromCliOutput({ output: websiteRun.stdout }) as Record<
            string,
            unknown
        >

        expect(Object.keys(website).length).toBeGreaterThan(0)
        const websiteJson = JSON.stringify(website)
        expect(websiteJson.includes('https://')).toBe(true)
        expect(websiteRun.stderr.includes('Running getProjectWebsiteUrl')).toBe(true)

        const xmlRun = await runServerApiCliReadOnly({
            args: ['mcp', 'getProjectXml'],
        })
        expect(xmlRun.stdout.includes('# Project structure:')).toBe(true)
        expect(xmlRun.stdout.includes('<Project>')).toBe(true)
        expect(xmlRun.stderr.includes('Running getProjectXml')).toBe(true)

        const selectedNodesRun = await runServerApiCliReadOnly({
            args: ['mcp', 'getSelectedNodesXml'],
        })
        expect(selectedNodesRun.stdout.includes('No nodes are currently selected.')).toBe(true)

        const focusedNodeMatch = xmlRun.stdout.match(
            /currently focused [^`]* ID is: `([^`]+)`/,
        )
        const focusedNodeId = focusedNodeMatch?.[1]
        expect(Boolean(focusedNodeId)).toBe(true)

        const zoomRun = await runServerApiCliReadOnly({
            args: ['mcp', 'zoomIntoView', '--nodeId', focusedNodeId || ''],
        })
        expect(zoomRun.stdout.includes('Zoomed into view for node')).toBe(true)
    },
    180_000,
)

test.skipIf(!hasApiKey)(
    'server-api reconnects cleanly for repeated read-only calls',
    async () => {
        const firstRun = await runServerApiCliReadOnly({
            args: ['mcp', 'getProjectWebsiteUrl'],
        })
        const secondRun = await runServerApiCliReadOnlyWithRetry({
            args: ['mcp', 'getProjectWebsiteUrl'],
        })

        expect(firstRun.durationMs).toBeGreaterThan(0)
        expect(secondRun.durationMs).toBeGreaterThan(0)
        expect(firstRun.durationMs).toBeLessThan(120_000)
        expect(secondRun.durationMs).toBeLessThan(120_000)

        const reconnectDeltaMs = secondRun.durationMs - firstRun.durationMs
        console.info(
            `getProjectWebsiteUrl latency ms: first=${firstRun.durationMs.toFixed(0)}, second=${secondRun.durationMs.toFixed(0)}, delta=${reconnectDeltaMs.toFixed(0)}`,
        )
    },
    240_000,
)
