// Server shim: exposes a runtime framer proxy backed by globalThis.framer.
import type { Framer } from 'framer-api'

export {
    isComponentInstanceNode,
    isComponentNode,
    isFrameNode,
    isTextNode,
    isWebPageNode,
    isDesignPageNode,
    isColorStyle,
    isImageAsset,
    isFileAsset,
    supportsAspectRatio,
    supportsBackgroundColor,
    supportsBackgroundImage,
    supportsBorder,
    supportsBorderRadius,
    supportsFont,
    supportsImageRendering,
    supportsInlineTextStyle,
    supportsLayout,
    supportsLink,
    supportsLocked,
    supportsName,
    supportsOpacity,
    supportsOverflow,
    supportsPins,
    supportsPosition,
    supportsRotation,
    supportsSize,
    supportsSizeConstraints,
    supportsSVG,
    supportsTextTruncation,
    supportsVisible,
    supportsZIndex,
} from 'framer-api'

type IsAllowedToFn = (...methods: string[]) => boolean
type NotifyFn = (message: string, options?: unknown) => Promise<void>
type GetSelectionFn = () => Promise<unknown[]>
type ZoomIntoViewFn = (nodeId: string, options?: unknown) => Promise<void>

const allowAllPermissions: IsAllowedToFn = () => {
    return true
}

const noOpNotify: NotifyFn = async (message, options) => {
    console.warn('[framer-api server shim notify]', message, options)
}

const emptySelection: GetSelectionFn = async () => {
    return []
}

const noOpZoomIntoView: ZoomIntoViewFn = async () => {
    return
}

type GlobalWithFramer = typeof globalThis & {
    framer?: Framer
}

function getRuntimeFramer(): Framer {
    const globalWithFramer = globalThis as GlobalWithFramer
    if (!globalWithFramer.framer) {
        throw new Error(
            'Server runtime framer client is not initialized. Connect first and assign globalThis.framer.',
        )
    }
    return globalWithFramer.framer
}

export const framer: Framer = new Proxy({} as Framer, {
    get(_target, property, receiver) {
        const runtimeFramer = getRuntimeFramer()
        const value = Reflect.get(runtimeFramer as object, property, receiver)
        if (value === undefined) {
            if (property === 'isAllowedTo') {
                return allowAllPermissions
            }
            if (property === 'notify') {
                return noOpNotify
            }
            if (property === 'getSelection') {
                return emptySelection
            }
            if (property === 'zoomIntoView') {
                return noOpZoomIntoView
            }
        }
        if (typeof value === 'function') {
            return value.bind(runtimeFramer)
        }
        return value
    },
})
