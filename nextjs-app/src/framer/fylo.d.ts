/* This file was generated by Unframer, do not edit manually */
import * as React from "react"

import { UnframerBreakpoint } from "unframer"

type Locale = string
export interface Props {
    children?: React.ReactNode
    locale?: Locale
    style?: React.CSSProperties
    className?: string
    id?: string
    width?: any
    height?: any
    layoutId?: string
    "variant"?: 'Variant 6' | 'Variant 1' | 'Variant 2' | 'Variant 3' | 'Variant 4' | 'Variant 5' | 'Variant 7' | 'Variant 8' | 'Variant 9' | 'Variant 12' | 'Variant 13' | 'Variant 14' | 'Variant 15' | 'Variant 16' | 'Variant 17' | 'Variant 21' | 'Variant 22' | 'Variant 23' | 'Variant 24' | 'Variant 25' | 'Variant 26' | 'Variant 26' | 'Variant 12' | 'Variant 17' | 'Variant 17' | 'Variant 17' | 'Variant 17' | 'Variant 17' | 'Variant 17' | 'Variant 21' | 'Variant 21' | 'Variant 21' | 'Variant 26' | 'Variant 21'
}

const FyloFramerComponent = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

FyloFramerComponent.Responsive = (props: Omit<Props, 'variant'> & {variants?: VariantsMap}) => any

export default FyloFramerComponent

