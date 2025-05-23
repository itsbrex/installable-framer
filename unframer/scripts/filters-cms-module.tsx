// Generated by Framer (b993cbf)

import {
    addFonts,
    addPropertyControls,
    ControlType,
    cx,
    CycleVariantState,
    Link,
    RichText,
    SVG,
    useVariantState,
    withCSS,
} from 'framer'
import { LayoutGroup, motion } from 'framer-motion'
import * as React from 'react'
import { animate } from 'real-framer-motion'
import { text } from 'stream/consumers'

const enabledGestures = {
    CLlJuYFnH: { hover: true },
    f6ook9Uik: { hover: true },
}

const cycleOrder = ['CLlJuYFnH', 'f6ook9Uik']

const variantClassNames = {
    CLlJuYFnH: 'framer-v-1vtg8k1',
    f6ook9Uik: 'framer-v-1wj5ctp',
}

function addPropertyOverrides(overrides, ...variants) {
    const nextOverrides = {}
    variants?.forEach(
        (variant) =>
            variant && Object.assign(nextOverrides, overrides[variant]),
    )
    return nextOverrides
}

const humanReadableVariantMap = {
    'With Arrow': 'f6ook9Uik',
    Normal: 'CLlJuYFnH',
}

const transitions = {
    default: {
        damping: 40,
        delay: 0,
        duration: 0.15,
        ease: [0.44, 0, 0.56, 1],
        mass: 1,
        stiffness: 400,
        type: 'tween',
    },
}

const transformTemplate = (_, t) => `translateX(-50%) ${t}`

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    layoutId?: string | null
    width?: number
    height?: number
    layoutDependency?: string | number
    variant?: keyof typeof humanReadableVariantMap
    emoji?: string
    title?: string
    link?: string
}

const Component = React.forwardRef<HTMLDivElement, Props>(function (
    {
        id,
        style,
        className,
        width,
        height,
        layoutId,
        variant: outerVariant = 'CLlJuYFnH',
        emoji: mUC7kTFpM = '💎',
        title: PYwdVc_ws = 'Title',
        link: D5b3p9lV8,
        ...restProps
    },
    ref,
) {
    const outerVariantId = humanReadableVariantMap[outerVariant]

    const variant = outerVariantId || outerVariant

    const {
        baseVariant,
        classNames,
        gestureVariant,
        setGestureState,
        setVariant,
        transition,
        variants,
    } = useVariantState({
        cycleOrder,
        defaultVariant: 'CLlJuYFnH',
        enabledGestures,
        transitions,
        variant,
        variantClassNames,
    })
    const layoutDependency = variants.join('-') + restProps.layoutDependency

    const defaultLayoutId = React.useId()

    return (
        <LayoutGroup id={layoutId ?? defaultLayoutId}>
            <motion.div
                initial={variant}
                animate={variants}
                onHoverStart={() => setGestureState({ isHovered: true })}
                onHoverEnd={() => setGestureState({ isHovered: false })}
                onTapStart={() => setGestureState({ isPressed: true })}
                onTap={() => setGestureState({ isPressed: false })}
                onTapCancel={() => setGestureState({ isPressed: false })}
                className={cx('framer-wyhXB', classNames)}
                style={{ display: 'contents' }}
            >
                <Link href={D5b3p9lV8}>
                    <motion.a
                        {...restProps}
                        className={`${cx('framer-1vtg8k1', className)} framer-g51udh`}
                        data-framer-name={'Normal'}
                        layoutDependency={layoutDependency}
                        layoutId={'CLlJuYFnH'}
                        ref={ref}
                        style={{
                            backgroundColor: 'rgb(255, 255, 255)',
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            ...style,
                        }}
                        transition={transition}
                        variants={{
                            'CLlJuYFnH-hover': {
                                backgroundColor: 'rgb(245, 245, 245)',
                            },
                            'f6ook9Uik-hover': {
                                backgroundColor: 'rgb(245, 245, 245)',
                            },
                        }}
                        {...addPropertyOverrides(
                            {
                                'CLlJuYFnH-hover': {
                                    'data-framer-name': undefined,
                                },
                                'f6ook9Uik-hover': {
                                    'data-framer-name': undefined,
                                },
                                f6ook9Uik: { 'data-framer-name': 'With Arrow' },
                            },
                            baseVariant,
                            gestureVariant,
                        )}
                    >
                        <motion.div
                            className={'framer-1h3m9mc'}
                            data-framer-name={'Emoji Offset'}
                            layoutDependency={layoutDependency}
                            layoutId={'kpJsBNvXO'}
                            transition={transition}
                        >
                            <RichText
                                __fromCanvasComponent
                                children={
                                    <React.Fragment>
                                        <motion.h2
                                            style={{
                                                '--framer-line-height': '20px',
                                                '--framer-text-alignment':
                                                    'center',
                                            }}
                                        >
                                            <motion.span
                                                style={{
                                                    '--font-selector':
                                                        'R0Y7U3luZS03MDA=',
                                                    '--framer-font-family':
                                                        '"Syne", serif',
                                                    '--framer-font-size':
                                                        '20px',
                                                    '--framer-font-style':
                                                        'normal',
                                                    '--framer-font-weight':
                                                        '700',
                                                }}
                                            >
                                                💎
                                            </motion.span>
                                        </motion.h2>
                                    </React.Fragment>
                                }
                                className={'framer-7i6jwd'}
                                data-framer-name={'Emoji'}
                                fonts={['GF;Syne-700']}
                                layoutDependency={layoutDependency}
                                layoutId={'mGajfJS8d'}
                                style={{ '--framer-paragraph-spacing': '0px' }}
                                text={mUC7kTFpM}
                                transformTemplate={transformTemplate}
                                transition={transition}
                                verticalAlignment={'center'}
                                withExternalLayout
                            />
                        </motion.div>
                        <RichText
                            __fromCanvasComponent
                            children={
                                <React.Fragment>
                                    <motion.p
                                        style={{
                                            '--framer-text-alignment': 'left',
                                        }}
                                    >
                                        <motion.span
                                            style={{
                                                '--font-selector':
                                                    'R0Y7TWFucm9wZS01MDA=',
                                                '--framer-font-family':
                                                    '"Manrope", serif',
                                                '--framer-font-style': 'normal',
                                                '--framer-font-weight': '500',
                                                '--framer-text-color':
                                                    'var(--extracted-1w3ko1f)',
                                            }}
                                        >
                                            Title
                                        </motion.span>
                                    </motion.p>
                                </React.Fragment>
                            }
                            className={'framer-ort1gi'}
                            data-framer-name={'Title'}
                            fonts={['GF;Manrope-500']}
                            layoutDependency={layoutDependency}
                            layoutId={'rKvXOdLYi'}
                            style={{
                                '--extracted-1w3ko1f': 'rgb(102, 102, 102)',
                                '--framer-paragraph-spacing': '0px',
                            }}
                            text={PYwdVc_ws}
                            transition={transition}
                            variants={{
                                'CLlJuYFnH-hover': {
                                    '--extracted-1w3ko1f': 'rgb(51, 51, 51)',
                                },
                            }}
                            verticalAlignment={'top'}
                            withExternalLayout
                        />
                        <SVG
                            className={'framer-yo4dgw'}
                            data-framer-name={'Arrow'}
                            layout={'position'}
                            layoutDependency={layoutDependency}
                            layoutId={'xSl3mWwyo'}
                            opacity={0}
                            style={{ opacity: 0 }}
                            svg={
                                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 3.5 4 L 10 4 L 10 10.5 M 9 5 L 3 11" fill="transparent" stroke-width="2" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
                            }
                            svgContentId={1555909042}
                            transition={transition}
                            variants={{ 'f6ook9Uik-hover': { opacity: 1 } }}
                            withExternalLayout
                            {...addPropertyOverrides(
                                {
                                    'f6ook9Uik-hover': {
                                        opacity: 1,
                                        svgContentId: 3396794083,
                                    },
                                },
                                baseVariant,
                                gestureVariant,
                            )}
                        />
                    </motion.a>
                </Link>
            </motion.div>
        </LayoutGroup>
    )
})

const css = [
    '.framer-wyhXB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-wyhXB .framer-g51udh { display: block; }',
    '.framer-wyhXB .framer-1vtg8k1 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 8px 8px 8px 8px; position: relative; text-decoration: none; width: 300px; }',
    '.framer-wyhXB .framer-1h3m9mc { flex: none; height: 20px; overflow: visible; position: relative; width: 20px; }',
    '.framer-wyhXB .framer-7i6jwd { bottom: -1px; flex: none; height: 20px; left: 50%; position: absolute; white-space: pre; width: auto; }',
    '.framer-wyhXB .framer-ort1gi { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
    '.framer-wyhXB .framer-yo4dgw { flex: none; height: 16px; position: relative; width: 16px; }',
    '.framer-wyhXB .framer-v-1vtg8k1 .framer-1vtg8k1, .framer-wyhXB .framer-v-1wj5ctp .framer-1vtg8k1 { cursor: pointer; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-wyhXB .framer-1vtg8k1 { gap: 0px; } .framer-wyhXB .framer-1vtg8k1 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-wyhXB .framer-1vtg8k1 > :first-child { margin-left: 0px; } .framer-wyhXB .framer-1vtg8k1 > :last-child { margin-right: 0px; } }',
]

/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 36
 * @framerIntrinsicWidth 300
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"f6ook9Uik":{"layout":["fixed","auto"]},"YMZYmRPk6":{"layout":["fixed","auto"]},"QYSWPJbkD":{"layout":["fixed","auto"]}}}
 * @framerVariables {"mUC7kTFpM":"emoji","PYwdVc_ws":"title","D5b3p9lV8":"link"}
 */
const FramerdNTrkrbrf: React.ComponentType<Props> = withCSS(
    Component,
    css,
    'framer-wyhXB',
) as typeof Component
export default FramerdNTrkrbrf

FramerdNTrkrbrf.displayName = 'Post Link'

FramerdNTrkrbrf.defaultProps = { height: 36, width: 300 }

addPropertyControls(FramerdNTrkrbrf, {
    variant: {
        options: ['CLlJuYFnH', 'f6ook9Uik'],
        optionTitles: ['Normal', 'With Arrow'],
        title: 'Variant',
        type: ControlType.Enum,
    },
    mUC7kTFpM: {
        defaultValue: '💎',
        displayTextArea: false,
        placeholder: 'Emoji',
        title: 'Emoji',
        type: ControlType.String,
    },
    PYwdVc_ws: {
        defaultValue: 'Title',
        title: 'Title',
        type: ControlType.String,
    },
    D5b3p9lV8: { title: 'Link', type: ControlType.Link },
} as any)

addFonts(FramerdNTrkrbrf, [
    {
        family: 'Syne',
        moduleAsset: {
            localModuleIdentifier:
                'local-module:canvasComponent/dNTrkrbrf:default',
            url: 'https://fonts.gstatic.com/s/syne/v16/8vIS7w4qzmVxsWxjBZRjr0FKM_3fvj6kR47NCV5Z.ttf',
        },
        style: 'normal',
        url: 'https://fonts.gstatic.com/s/syne/v16/8vIS7w4qzmVxsWxjBZRjr0FKM_3fvj6kR47NCV5Z.ttf',
        weight: '700',
    },
    {
        family: 'Manrope',
        moduleAsset: {
            localModuleIdentifier:
                'local-module:canvasComponent/dNTrkrbrf:default',
            url: 'https://fonts.gstatic.com/s/manrope/v14/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_F87jxeN7B.ttf',
        },
        style: 'normal',
        url: 'https://fonts.gstatic.com/s/manrope/v14/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_F87jxeN7B.ttf',
        weight: '500',
    },
])
