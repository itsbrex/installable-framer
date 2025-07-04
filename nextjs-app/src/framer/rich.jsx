// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project  "undefined", do not edit manually */
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
 * content?: undefined // content
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
import {
	className,
	className2,
	css,
	css2,
	fonts,
	fonts2,
} from "./chunks/chunk-F3HLMXIZ.js";
import { routes } from "./chunks/chunk-VG7AXKTA.js";
import "./chunks/chunk-WSFCRVEQ.js";

// virtual:rich
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/2eMbojq9S0Nc1TgktUQd/up4ztOG6JDG0ytgfaNzT/inWBH4dIK.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
	addFonts,
	addPropertyControls,
	ComponentPresetsProvider,
	ControlType,
	cx,
	getFontsFromComponentPreset,
	getFontsFromSharedStyle,
	RichText,
	useComponentViewport,
	useLocaleInfo,
	useVariantState,
	withCSS,
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";

// /:https://framerusercontent.com/modules/wi21TArjvX6nkzQEaAmf/Y5NZWwXVsjJSElcszTtu/componentPresets.js
var props = {
	dPCM_W_tA: {
		borderRadius: 15,
		bottomLeftRadius: 15,
		bottomRightRadius: 15,
		darkTheme: "framerDark",
		font: {
			fontFamily: '"Fragment Mono", monospace',
			fontSize: "14px",
			fontStyle: "normal",
			fontWeight: 400,
			letterSpacing: "0em",
			lineHeight: "1.5em",
		},
		isMixedBorderRadius: false,
		lightTheme: "framerLight",
		padding: 30,
		paddingBottom: 30,
		paddingLeft: 30,
		paddingPerSide: false,
		paddingRight: 30,
		paddingTop: 30,
		theme: "framerDark",
		themeMode: "Static",
		topLeftRadius: 15,
		topRightRadius: 15,
	},
};
var fonts3 = {
	dPCM_W_tA: [
		{
			explicitInter: true,
			fonts: [
				{
					family: "Fragment Mono",
					source: "google",
					style: "normal",
					url: "https://fonts.gstatic.com/s/fragmentmono/v4/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2",
					weight: "400",
				},
			],
		},
	],
};

// /:https://framerusercontent.com/modules/n1EjexoroiRcSGDufAiT/Ttu4BpFjUW7CyDA8u2eH/AUU0Jib9Q.js
import { fontStore } from "unframer";
fontStore.loadFonts([
	"Inter-Bold",
	"Inter-Black",
	"Inter-BlackItalic",
	"Inter-BoldItalic",
]);
var fonts4 = [];
var css3 = [
	'.framer-ufZwl .framer-styles-preset-1z0saw4:not(.rich-text-wrapper), .framer-ufZwl .framer-styles-preset-1z0saw4.rich-text-wrapper h1 { --framer-font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter-Black", "Inter", sans-serif; --framer-font-family-bold-italic: "Inter-BlackItalic", "Inter", sans-serif; --framer-font-family-italic: "Inter-BoldItalic", "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.04em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #333333; --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className3 = "framer-ufZwl";

// /:https://framerusercontent.com/modules/pmCNWk02kBSFqYDoAcuS/zew4HsX3PJlNJQ8MIXMH/bEBzAVPVC.js
import { fontStore as fontStore2 } from "unframer";
fontStore2.loadFonts([]);
var fonts5 = [];
var css4 = [
	".framer-zNzA5 .framer-styles-preset-ik1i3u:not(.rich-text-wrapper), .framer-zNzA5 .framer-styles-preset-ik1i3u.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: #0088ff; --framer-link-hover-text-decoration: underline; --framer-link-text-color: #0099ff; --framer-link-text-decoration: none; }",
];
var className4 = "framer-zNzA5";

// /:https://framerusercontent.com/modules/ocbgsYtfVWyZS17mEUPC/5jdPjc5Q3wqYVWnCQ5SG/ItPlz8w6C.js
import { fontStore as fontStore3 } from "unframer";
fontStore3.loadFonts(["GF;Fragment Mono-regular"]);
var fonts6 = [
	{
		family: "Fragment Mono",
		source: "google",
		style: "normal",
		url: "https://fonts.gstatic.com/s/fragmentmono/v4/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2",
		weight: "400",
	},
];
var css5 = [
	'.framer-2yfsT .framer-styles-preset-1ju30c1 { --framer-code-font-family: "Fragment Mono", monospace; --framer-code-font-style: normal; --framer-code-font-weight: 400; --framer-code-text-color: #800000; --framer-font-size-scale: 1; background-color: rgba(0, 0, 0, 0.1); border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; padding-bottom: 0.1em; padding-left: 0.2em; padding-right: 0.2em; padding-top: 0.1em; }',
];
var className5 = "framer-2yfsT";

// /:https://framerusercontent.com/modules/TmvBe3ERT2Bi6kDXXr4e/jSMrrcO8AmL0LZPUvsLB/XFgI73CRg.js
import { fontStore as fontStore4 } from "unframer";
fontStore4.loadFonts([
	"Inter-Bold",
	"Inter-Black",
	"Inter-BlackItalic",
	"Inter-BoldItalic",
]);
var fonts7 = [];
var css6 = [
	'.framer-FeewW .framer-styles-preset-1ukj4w5:not(.rich-text-wrapper), .framer-FeewW .framer-styles-preset-1ukj4w5.rich-text-wrapper h3 { --framer-font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter-Black", "Inter", sans-serif; --framer-font-family-bold-italic: "Inter-BlackItalic", "Inter", sans-serif; --framer-font-family-italic: "Inter-BoldItalic", "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #333333; --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className6 = "framer-FeewW";

// /:https://framerusercontent.com/modules/BOiZ9PHgH0ptXwEl9DVh/6VfL7xjVPXpQgbV9fFyB/ZpET7_TPl.js
import { fontStore as fontStore5 } from "unframer";
fontStore5.loadFonts([]);
var fonts8 = [
	{
		explicitInter: true,
		fonts: [],
	},
];
var css7 = [".framer-TBaFf .framer-styles-preset-17jvnxz {  }"];
var className7 = "framer-TBaFf";

// /:https://framerusercontent.com/modules/2eMbojq9S0Nc1TgktUQd/up4ztOG6JDG0ytgfaNzT/inWBH4dIK.js
var _componentPresets_fonts;
var _componentPresets_fonts1;
var cycleOrder = ["d2jfXgaaM"];
var serializationHash = "framer-yjKQB";
var variantClassNames = {
	d2jfXgaaM: "framer-v-byvhuo",
};
var transition1 = {
	damping: 60,
	delay: 0,
	mass: 1,
	stiffness: 500,
	type: "spring",
};
var transformTemplate1 = (_, t) => `translate(-50%, -50%) ${t}`;
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
var Variants = motion(React.Fragment);
var getProps = ({ content, height, id, width, ...props2 }) => {
	var _ref;
	return {
		...props2,
		Pzr5atV98:
			(_ref =
				content !== null && content !== void 0 ? content : props2.Pzr5atV98) !==
				null && _ref !== void 0 ? (
				_ref
			) : (
				<React.Fragment>
					<motion.p>{"some text in her"}</motion.p>
					<motion.p>
						<motion.br className={"trailing-break"} />
					</motion.p>
					<motion.h3>{"a title"}</motion.h3>
				</React.Fragment>
			),
	};
};
var createLayoutDependency = (props2, variants) => {
	if (props2.layoutDependency)
		return variants.join("-") + props2.layoutDependency;
	return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function (props2, ref) {
	const { activeLocale, setLocale } = useLocaleInfo();
	const {
		style,
		className: className8,
		layoutId,
		variant,
		Pzr5atV98,
		...restProps
	} = getProps(props2);
	const {
		baseVariant,
		classNames,
		gestureHandlers,
		gestureVariant,
		setGestureState,
		setVariant,
		variants,
	} = useVariantState({
		cycleOrder,
		defaultVariant: "d2jfXgaaM",
		variant,
		variantClassNames,
	});
	const layoutDependency = createLayoutDependency(props2, variants);
	const ref1 = React.useRef(null);
	const defaultLayoutId = React.useId();
	const sharedStyleClassNames = [
		className3,
		className2,
		className6,
		className,
		className4,
		className5,
		className7,
	];
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
							"framer-byvhuo",
							className8,
							classNames,
						)}
						data-framer-name={"Variant 1"}
						layoutDependency={layoutDependency}
						layoutId={"d2jfXgaaM"}
						ref={ref !== null && ref !== void 0 ? ref : ref1}
						style={{
							backgroundColor: "rgb(255, 255, 255)",
							...style,
						}}
					>
						<ComponentPresetsProvider
							presets={{
								"module:pVk4QsoHxASnVtUBp6jr/TbhpORLndv1iOkZzyo83/CodeBlock.js:default":
									props["dPCM_W_tA"],
							}}
						>
							<RichText
								__fromCanvasComponent={true}
								className={"framer-1wi97rn"}
								fonts={["Inter"]}
								layoutDependency={layoutDependency}
								layoutId={"xVISXz2cl"}
								style={{
									"--framer-link-text-color": "rgb(0, 153, 255)",
									"--framer-link-text-decoration": "underline",
								}}
								stylesPresetsClassNames={{
									a: "framer-styles-preset-ik1i3u",
									code: "framer-styles-preset-1ju30c1",
									h1: "framer-styles-preset-1z0saw4",
									h2: "framer-styles-preset-qtkdi4",
									h3: "framer-styles-preset-1ukj4w5",
									img: "framer-styles-preset-17jvnxz",
									p: "framer-styles-preset-8yqxw",
								}}
								transformTemplate={transformTemplate1}
								verticalAlignment={"top"}
								withExternalLayout={true}
							>
								{Pzr5atV98}
							</RichText>
						</ComponentPresetsProvider>
					</motion.div>
				</Transition>
			</Variants>
		</LayoutGroup>
	);
});
var css8 = [
	"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
	".framer-yjKQB.framer-b3fmqx, .framer-yjKQB .framer-b3fmqx { display: block; }",
	".framer-yjKQB.framer-byvhuo { height: 200px; position: relative; width: 200px; }",
	".framer-yjKQB .framer-1wi97rn { flex: none; height: auto; left: 53%; position: absolute; top: 53%; white-space: pre; width: auto; }",
	...css3,
	...css2,
	...css6,
	...css,
	...css4,
	...css5,
	...css7,
];
var FramerinWBH4dIK = withCSS(Component, css8, "framer-yjKQB");
var stdin_default = FramerinWBH4dIK;
FramerinWBH4dIK.displayName = "RichText";
FramerinWBH4dIK.defaultProps = {
	height: 200,
	width: 200,
};
addPropertyControls(FramerinWBH4dIK, {
	Pzr5atV98: {
		defaultValue:
			'<p>some text in her</p><p><br class="trailing-break"></p><h3>a title</h3>',
		title: "content",
		type: ControlType.RichText,
	},
});
addFonts(
	FramerinWBH4dIK,
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
					url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
					url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange: "U+1F00-1FFF",
					url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange: "U+0370-03FF",
					url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
					url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
					url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
					url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
					weight: "400",
				},
			],
		},
		...getFontsFromSharedStyle(fonts4),
		...getFontsFromSharedStyle(fonts2),
		...getFontsFromSharedStyle(fonts7),
		...getFontsFromSharedStyle(fonts),
		...getFontsFromSharedStyle(fonts5),
		...getFontsFromSharedStyle(fonts6),
		...getFontsFromSharedStyle(fonts8),
		...((
			(_componentPresets_fonts = fonts3) === null ||
			_componentPresets_fonts === void 0
				? void 0
				: _componentPresets_fonts["dPCM_W_tA"]
		)
			? getFontsFromComponentPreset(
					(_componentPresets_fonts1 = fonts3) === null ||
						_componentPresets_fonts1 === void 0
						? void 0
						: _componentPresets_fonts1["dPCM_W_tA"],
				)
			: []),
	],
	{
		supportsExplicitInterCodegen: true,
	},
);

// virtual:rich
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {};
/** @type {function(Props): any} */
function ComponentWithRoot({ locale, ...rest }) {
	return (
		<ContextProviders
			routes={routes}
			framerSiteId={void 0}
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
 * Renders RichFramerComponent for all breakpoints with a variants map. Variant prop is inferred per breakpoint.
 * @function
 * @param {Omit<Props, 'variant'> & {variants?: VariantsMap}} props
 * @returns {any}
 */
ComponentWithRoot.Responsive = ({ locale, ...rest }) => {
	return (
		<ContextProviders
			routes={routes}
			framerSiteId={void 0}
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
var rich_default = ComponentWithRoot;
export { rich_default as default };
