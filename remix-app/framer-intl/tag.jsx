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
 * variant?: 'Variant 1' | 'Variant 2' | 'Variant 3' // Variant
 * title?: string // Title
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
import { className, css, fonts } from "./chunks/chunk-3IMWMF2U.js";
import { routes } from "./chunks/chunk-6OPQGIC3.js";
import "./chunks/chunk-WSFCRVEQ.js";

// virtual:tag
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/xm0mRXui1tr1B9VL3CmQ/sNW2gn1d6ZNs7NvIJsgK/on7AAz7Qe.js
import { jsx as _jsx } from "react/jsx-runtime";
import {
	addFonts,
	addPropertyControls,
	ControlType,
	cx,
	getFontsFromSharedStyle,
	RichText,
	useComponentViewport,
	useLocaleInfo,
	useVariantState,
	withCSS,
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var cycleOrder = ["HgnGA8QKl", "JIihADejD", "unFUZQtMb"];
var serializationHash = "framer-s88yJ";
var variantClassNames = {
	HgnGA8QKl: "framer-v-13bqdc3",
	JIihADejD: "framer-v-3gi7qf",
	unFUZQtMb: "framer-v-120k2f2",
};
function addPropertyOverrides(overrides, ...variants) {
	const nextOverrides = {};
	variants === null || variants === void 0
		? void 0
		: variants.forEach(
				(variant) =>
					variant && Object.assign(nextOverrides, overrides[variant]),
			);
	return nextOverrides;
}
var transition1 = {
	damping: 60,
	delay: 0,
	mass: 1,
	stiffness: 500,
	type: "spring",
};
var Transition = ({ value, children }) => {
	const config = React.useContext(MotionConfigContext);
	const transition =
		value !== null && value !== void 0 ? value : config.transition;
	const contextValue = React.useMemo(
		() => ({
			...config,
			transition,
		}),
		[JSON.stringify(transition)],
	);
	return (
		<MotionConfigContext.Provider value={contextValue}>
			{children}
		</MotionConfigContext.Provider>
	);
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = {
	"Variant 1": "HgnGA8QKl",
	"Variant 2": "JIihADejD",
	"Variant 3": "unFUZQtMb",
};
var getProps = ({ height, id, title, width, ...props }) => {
	var _ref, _humanReadableVariantMap_props_variant, _ref1;
	return {
		...props,
		uTXaAf4vS:
			(_ref = title !== null && title !== void 0 ? title : props.uTXaAf4vS) !==
				null && _ref !== void 0
				? _ref
				: "Voice cloning",
		variant:
			(_ref1 =
				(_humanReadableVariantMap_props_variant =
					humanReadableVariantMap[props.variant]) !== null &&
				_humanReadableVariantMap_props_variant !== void 0
					? _humanReadableVariantMap_props_variant
					: props.variant) !== null && _ref1 !== void 0
				? _ref1
				: "HgnGA8QKl",
	};
};
var createLayoutDependency = (props, variants) => {
	if (props.layoutDependency)
		return variants.join("-") + props.layoutDependency;
	return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref) {
	const { activeLocale, setLocale } = useLocaleInfo();
	const {
		style,
		className: className2,
		layoutId,
		variant,
		uTXaAf4vS,
		...restProps
	} = getProps(props);
	const {
		baseVariant,
		classNames,
		clearLoadingGesture,
		gestureHandlers,
		gestureVariant,
		isLoading,
		setGestureState,
		setVariant,
		variants,
	} = useVariantState({
		cycleOrder,
		defaultVariant: "HgnGA8QKl",
		variant,
		variantClassNames,
	});
	const layoutDependency = createLayoutDependency(props, variants);
	const ref1 = React.useRef(null);
	const defaultLayoutId = React.useId();
	const sharedStyleClassNames = [className];
	const componentViewport = useComponentViewport();
	return (
		<LayoutGroup
			id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}
		>
			<Variants animate={variants} initial={false}>
				<Transition value={transition1}>
					<motion.div
						{...restProps}
						{...gestureHandlers}
						className={cx(
							serializationHash,
							...sharedStyleClassNames,
							"framer-13bqdc3",
							className2,
							classNames,
						)}
						data-framer-name={"Variant 1"}
						layoutDependency={layoutDependency}
						layoutId={"HgnGA8QKl"}
						ref={ref !== null && ref !== void 0 ? ref : ref1}
						style={{
							backgroundColor:
								"var(--token-1691cb44-c002-4542-9545-8a0801f91af2, rgb(231, 231, 231))",
							borderBottomLeftRadius: 99,
							borderBottomRightRadius: 99,
							borderTopLeftRadius: 99,
							borderTopRightRadius: 99,
							...style,
						}}
						variants={{
							JIihADejD: {
								backgroundColor:
									"var(--token-98bc5b6f-7a2c-4386-9864-434ca3560bb1, rgb(254, 102, 57))",
							},
							unFUZQtMb: {
								backgroundColor:
									"var(--token-816b9f7c-e26f-4679-8e8e-d7b2281f3c6d, rgb(252, 62, 19))",
							},
						}}
						{...addPropertyOverrides(
							{
								JIihADejD: {
									"data-framer-name": "Variant 2",
								},
								unFUZQtMb: {
									"data-framer-name": "Variant 3",
								},
							},
							baseVariant,
							gestureVariant,
						)}
					>
						<RichText
							__fromCanvasComponent={true}
							className={"framer-i9gova"}
							fonts={["Inter"]}
							layoutDependency={layoutDependency}
							layoutId={"gHBqvdFgM"}
							style={{
								"--framer-link-text-color": "rgb(0, 153, 255)",
								"--framer-link-text-decoration": "underline",
							}}
							text={uTXaAf4vS}
							variants={{
								JIihADejD: {
									"--extracted-r6o4lv": "rgb(255, 255, 255)",
								},
								unFUZQtMb: {
									"--extracted-r6o4lv":
										"var(--token-f1edbbf0-4dde-4043-88fc-e447b2e4f208, rgb(255, 255, 255))",
								},
							}}
							verticalAlignment={"top"}
							withExternalLayout={true}
							{...addPropertyOverrides(
								{
									JIihADejD: {
										children: (
											<React.Fragment>
												<motion.p
													className={"framer-styles-preset-1aj6jmn"}
													data-styles-preset={"TeHXylmO7"}
													style={{
														"--framer-text-color":
															"var(--extracted-r6o4lv, rgb(255, 255, 255))",
													}}
												>
													{"Markdown Editor"}
												</motion.p>
											</React.Fragment>
										),
									},
									unFUZQtMb: {
										children: (
											<React.Fragment>
												<motion.p
													className={"framer-styles-preset-1aj6jmn"}
													data-styles-preset={"TeHXylmO7"}
													style={{
														"--framer-text-color":
															"var(--extracted-r6o4lv, var(--token-f1edbbf0-4dde-4043-88fc-e447b2e4f208, rgb(255, 255, 255)))",
													}}
												>
													{"Markdown Editor"}
												</motion.p>
											</React.Fragment>
										),
									},
								},
								baseVariant,
								gestureVariant,
							)}
						>
							<React.Fragment>
								<motion.p
									className={"framer-styles-preset-1aj6jmn"}
									data-styles-preset={"TeHXylmO7"}
								>
									{"Markdown Editor"}
								</motion.p>
							</React.Fragment>
						</RichText>
					</motion.div>
				</Transition>
			</Variants>
		</LayoutGroup>
	);
});
var css2 = [
	"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
	".framer-s88yJ.framer-1ikoehg, .framer-s88yJ .framer-1ikoehg { display: block; }",
	".framer-s88yJ.framer-13bqdc3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: 32px; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
	".framer-s88yJ .framer-i9gova { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
	"@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-s88yJ.framer-13bqdc3 { gap: 0px; } .framer-s88yJ.framer-13bqdc3 > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-s88yJ.framer-13bqdc3 > :first-child { margin-left: 0px; } .framer-s88yJ.framer-13bqdc3 > :last-child { margin-right: 0px; } }",
	".framer-s88yJ.framer-v-3gi7qf.framer-13bqdc3 { padding: 3px 20px 0px 20px; }",
	...css,
];
var Frameron7AAz7Qe = withCSS(Component, css2, "framer-s88yJ");
var stdin_default = Frameron7AAz7Qe;
Frameron7AAz7Qe.displayName = "Tag";
Frameron7AAz7Qe.defaultProps = {
	height: 32,
	width: 129,
};
addPropertyControls(Frameron7AAz7Qe, {
	variant: {
		options: ["HgnGA8QKl", "JIihADejD", "unFUZQtMb"],
		optionTitles: ["Variant 1", "Variant 2", "Variant 3"],
		title: "Variant",
		type: ControlType.Enum,
	},
	uTXaAf4vS: {
		defaultValue: "Voice cloning",
		displayTextArea: false,
		title: "Title",
		type: ControlType.String,
	},
});
addFonts(
	Frameron7AAz7Qe,
	[
		{
			explicitInter: true,
			fonts: [
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
					url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
					url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange: "U+1F00-1FFF",
					url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange: "U+0370-03FF",
					url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
					url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
					url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
					url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
					weight: "400",
				},
			],
		},
		...getFontsFromSharedStyle(fonts),
	],
	{
		supportsExplicitInterCodegen: true,
	},
);

// virtual:tag
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
	base: "HgnGA8QKl",
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
 * Renders TagFramerComponent for all breakpoints with a variants map. Variant prop is inferred per breakpoint.
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
var tag_default = ComponentWithRoot;
export { tag_default as default };
