// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project f667fc580d8d9346 "ApiFlow (copy)", do not edit manually */
"use client";

/**
 * @typedef Locale
 * string
 */

/**
 * @typedef {{
 * children?: React.ReactNode
 * locale?: Locale
 * style?: React.CSSProperties
 * className?: string
 * id?: string
 * ref?: any
 * width?: any
 * height?: any
 * layoutId?: string
 * variant?: 'Answers' | 'Question' // Variant
 * question?: string // Question
 * answer?: string // Answer
}} Props

 */

/**
 * @type {import("unframer").UnframerBreakpoint}
 * Represents a responsive breakpoint for unframer.
 */

/**
 * @typedef VariantsMap
 * Partial record of UnframerBreakpoint to Props.variant, with a mandatory 'base' key.
 * { [key in UnframerBreakpoint]?: Props['variant'] } & { base: Props['variant'] }
 */
import { stdin_default } from "../chunks/chunk-IQFP5WTW.js";
import "../chunks/chunk-DOAYAVFF.js";
import "../chunks/chunk-3IMWMF2U.js";
import { routes } from "../chunks/chunk-6OPQGIC3.js";
import "../chunks/chunk-WSFCRVEQ.js";

// virtual:cards/faq-card
import { Fragment } from "react";
import { ContextProviders } from "unframer";
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
	base: "Gb01L_14E",
};
/** @type {function(Props): any} */
function ComponentWithRoot({ locale, ...rest }) {
	return (
		<ContextProviders
			routes={routes}
			framerSiteId={
				"f667fc580d8d9346cf49d633d75940b95292fa43c24dd7765c9a175ec73f7405"
			}
			locale={locale}
			locales={locales}
		>
			{jsx(stdin_default, {
				...rest,
			})}
		</ContextProviders>
	);
}
/**
 * Renders FaqCardFramerComponent for all breakpoints with a variants map. Variant prop is inferred per breakpoint.
 * @function
 * @param {Omit<Props, 'variant'> & {variants?: VariantsMap}} props
 * @returns {any}
 */
ComponentWithRoot.Responsive = ({ locale, ...rest }) => {
	return (
		<ContextProviders
			routes={routes}
			framerSiteId={
				"f667fc580d8d9346cf49d633d75940b95292fa43c24dd7765c9a175ec73f7405"
			}
			locale={locale}
			locales={locales}
		>
			<WithFramerBreakpoints
				Component={stdin_default}
				variants={defaultResponsiveVariants}
				{...rest}
			/>
		</ContextProviders>
	);
};
Object.assign(ComponentWithRoot, stdin_default);
var faq_card_default = ComponentWithRoot;
export { faq_card_default as default };
