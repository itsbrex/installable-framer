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
 * variant?: 'Variant 1' | 'Loading' | 'Success' // Variant
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
	className2 as className3,
	css,
	css2 as css3,
	fonts,
	fonts2 as fonts3,
	stdin_default,
} from "../chunks/chunk-UVS3W5EU.js";
import {
	className as className2,
	css as css2,
	fonts as fonts2,
} from "../chunks/chunk-VMS457YC.js";
import { routes } from "../chunks/chunk-6OPQGIC3.js";
import "../chunks/chunk-WSFCRVEQ.js";

// virtual:forms/sign-in
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/3SpzSsgouKI4HCPIntXg/u3LwVyssk9bGQz51sXlz/M4qYARdEB.js
import {
	jsx as _jsx,
	jsxs as _jsxs,
	Fragment as _Fragment,
} from "react/jsx-runtime";
import {
	addFonts,
	addPropertyControls,
	ComponentViewportProvider,
	ControlType,
	cx,
	FormContainer,
	FormPlainTextInput,
	getFonts,
	getFontsFromSharedStyle,
	optimizeAppear,
	RichText,
	SVG,
	useActiveVariantCallback,
	useComponentViewport,
	useLocaleInfo,
	useVariantState,
	withCSS,
	withFX,
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var ButtonsSubmitButtonFonts = getFonts(stdin_default);
var MotionDivWithFX = withFX(motion.div);
var RichTextWithFX = withFX(RichText);
var cycleOrder = ["DFX4NM0kF", "ZsrCWHO_c", "KevRZF7cn"];
var serializationHash = "framer-poTPC";
var variantClassNames = {
	DFX4NM0kF: "framer-v-82k6qr",
	KevRZF7cn: "framer-v-5refmd",
	ZsrCWHO_c: "framer-v-zikz9s",
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
var formVariants = (form, variants, currentVariant) => {
	switch (form.state) {
		case "success":
			var _variants_success;
			return (_variants_success = variants.success) !== null &&
				_variants_success !== void 0
				? _variants_success
				: currentVariant;
		case "pending":
			var _variants_pending;
			return (_variants_pending = variants.pending) !== null &&
				_variants_pending !== void 0
				? _variants_pending
				: currentVariant;
		case "error":
			var _variants_error;
			return (_variants_error = variants.error) !== null &&
				_variants_error !== void 0
				? _variants_error
				: currentVariant;
		case "incomplete":
			var _variants_incomplete;
			return (_variants_incomplete = variants.incomplete) !== null &&
				_variants_incomplete !== void 0
				? _variants_incomplete
				: currentVariant;
	}
};
var transition2 = {
	damping: 30,
	delay: 0,
	mass: 1,
	stiffness: 500,
	type: "spring",
};
var animation = {
	opacity: 1,
	rotate: 0,
	rotateX: 0,
	rotateY: 0,
	scale: 1,
	skewX: 0,
	skewY: 0,
	transition: transition2,
	x: 0,
	y: 0,
};
var animation1 = {
	opacity: 1e-3,
	rotate: 0,
	rotateX: 0,
	rotateY: 0,
	scale: 1,
	skewX: 0,
	skewY: 0,
	x: 0,
	y: 200,
};
var transition3 = {
	damping: 30,
	delay: 0.1,
	mass: 1,
	stiffness: 500,
	type: "spring",
};
var animation2 = {
	opacity: 1,
	rotate: 0,
	rotateX: 0,
	rotateY: 0,
	scale: 1,
	skewX: 0,
	skewY: 0,
	transition: transition3,
	x: 0,
	y: 0,
};
var transition4 = {
	damping: 30,
	delay: 0.2,
	mass: 1,
	stiffness: 500,
	type: "spring",
};
var animation3 = {
	opacity: 1,
	rotate: 0,
	rotateX: 0,
	rotateY: 0,
	scale: 1,
	skewX: 0,
	skewY: 0,
	transition: transition4,
	x: 0,
	y: 0,
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
var Variants = motion(React.Fragment);
var humanReadableVariantMap = {
	"Variant 1": "DFX4NM0kF",
	Loading: "ZsrCWHO_c",
	Success: "KevRZF7cn",
};
var getProps = ({ height, id, width, ...props }) => {
	var _humanReadableVariantMap_props_variant, _ref;
	return {
		...props,
		variant:
			(_ref =
				(_humanReadableVariantMap_props_variant =
					humanReadableVariantMap[props.variant]) !== null &&
				_humanReadableVariantMap_props_variant !== void 0
					? _humanReadableVariantMap_props_variant
					: props.variant) !== null && _ref !== void 0
				? _ref
				: "DFX4NM0kF",
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
		className: className4,
		layoutId,
		variant,
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
		defaultVariant: "DFX4NM0kF",
		variant,
		variantClassNames,
	});
	const layoutDependency = createLayoutDependency(props, variants);
	const { activeVariantCallback, delay } =
		useActiveVariantCallback(baseVariant);
	const onLoadingyyjg20 = activeVariantCallback(async (...args) => {
		setVariant("ZsrCWHO_c");
	});
	const onSuccess10521vk = activeVariantCallback(async (...args) => {
		setVariant("KevRZF7cn");
	});
	const ref1 = React.useRef(null);
	const isDisplayed = () => {
		if (baseVariant === "KevRZF7cn") return true;
		return false;
	};
	const defaultLayoutId = React.useId();
	const sharedStyleClassNames = [className, className3, className2];
	const componentViewport = useComponentViewport();
	return (
		<LayoutGroup
			id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}
		>
			<Variants animate={variants} initial={false}>
				<Transition value={transition1}>
					<FormContainer
						{...restProps}
						{...gestureHandlers}
						action={
							"https://api.framer.com/forms/v1/forms/52bddac8-f567-4e11-9080-b96cbcc26802/submit"
						}
						className={cx(
							serializationHash,
							...sharedStyleClassNames,
							"framer-82k6qr",
							className4,
							classNames,
						)}
						data-border={true}
						data-framer-name={"Variant 1"}
						data-highlight={true}
						layoutDependency={layoutDependency}
						layoutId={"DFX4NM0kF"}
						onLoading={onLoadingyyjg20}
						onSuccess={onSuccess10521vk}
						redirectUrl={{
							webPageId: "augiA20Il",
						}}
						ref={ref !== null && ref !== void 0 ? ref : ref1}
						style={{
							"--border-bottom-width": "1px",
							"--border-color":
								"var(--token-1691cb44-c002-4542-9545-8a0801f91af2, rgb(231, 231, 231))",
							"--border-left-width": "1px",
							"--border-right-width": "1px",
							"--border-style": "solid",
							"--border-top-width": "1px",
							...style,
						}}
						{...addPropertyOverrides(
							{
								KevRZF7cn: {
									"data-framer-name": "Success",
								},
								ZsrCWHO_c: {
									"data-framer-name": "Loading",
								},
							},
							baseVariant,
							gestureVariant,
						)}
					>
						{(formState) => (
							<_Fragment>
								<motion.label
									className={"framer-1grcb95"}
									layoutDependency={layoutDependency}
									layoutId={"BAGjNNxcG"}
									style={{
										opacity: 1,
									}}
									variants={{
										ZsrCWHO_c: {
											opacity: 0.4,
										},
									}}
								>
									<RichText
										__fromCanvasComponent={true}
										className={"framer-1ubiyc4"}
										fonts={["Inter"]}
										layoutDependency={layoutDependency}
										layoutId={"HSD4H8tme"}
										verticalAlignment={"top"}
										withExternalLayout={true}
									>
										<React.Fragment>
											<motion.p
												className={"framer-styles-preset-1dbggqt"}
												data-styles-preset={"gj4zreqLr"}
											>
												{"Email"}
											</motion.p>
										</React.Fragment>
									</RichText>
									<FormPlainTextInput
										className={"framer-1vtdut"}
										inputName={"Email"}
										layoutDependency={layoutDependency}
										layoutId={"irIA0GOhu"}
										placeholder={"jane@framer.com"}
										required={true}
										style={{
											"--framer-input-background":
												"var(--token-f1edbbf0-4dde-4043-88fc-e447b2e4f208, rgb(255, 255, 255))",
											"--framer-input-border-bottom-width": "1px",
											"--framer-input-border-color":
												"var(--token-1691cb44-c002-4542-9545-8a0801f91af2, rgb(231, 231, 231))",
											"--framer-input-border-left-width": "1px",
											"--framer-input-border-radius-bottom-left": "6px",
											"--framer-input-border-radius-bottom-right": "6px",
											"--framer-input-border-radius-top-left": "6px",
											"--framer-input-border-radius-top-right": "6px",
											"--framer-input-border-right-width": "1px",
											"--framer-input-border-style": "solid",
											"--framer-input-border-top-width": "1px",
											"--framer-input-font-color":
												"var(--token-36bb1a2d-632b-41b6-8e08-ee48dcf29873, rgb(16, 16, 16))",
											"--framer-input-icon-color": "rgb(153, 153, 153)",
											"--framer-input-placeholder-color":
												"var(--token-944d416b-60ec-406a-99c8-94ca89212156, rgb(169, 169, 169))",
										}}
										type={"email"}
									/>
								</motion.label>
								<motion.label
									className={"framer-xpfw2y"}
									layoutDependency={layoutDependency}
									layoutId={"kzlMZMGv3"}
									style={{
										opacity: 1,
									}}
									variants={{
										ZsrCWHO_c: {
											opacity: 0.4,
										},
									}}
								>
									<RichText
										__fromCanvasComponent={true}
										className={"framer-1gp62fu"}
										fonts={["Inter"]}
										layoutDependency={layoutDependency}
										layoutId={"v5dkPvzbr"}
										verticalAlignment={"top"}
										withExternalLayout={true}
									>
										<React.Fragment>
											<motion.p
												className={"framer-styles-preset-1dbggqt"}
												data-styles-preset={"gj4zreqLr"}
											>
												{"Password"}
											</motion.p>
										</React.Fragment>
									</RichText>
									<FormPlainTextInput
										className={"framer-wh5g3b"}
										inputName={"Password"}
										layoutDependency={layoutDependency}
										layoutId={"OVqCQBR8V"}
										placeholder={"Your password"}
										required={true}
										style={{
											"--framer-input-background":
												"var(--token-f1edbbf0-4dde-4043-88fc-e447b2e4f208, rgb(255, 255, 255))",
											"--framer-input-border-bottom-width": "1px",
											"--framer-input-border-color":
												"var(--token-1691cb44-c002-4542-9545-8a0801f91af2, rgb(231, 231, 231))",
											"--framer-input-border-left-width": "1px",
											"--framer-input-border-radius-bottom-left": "6px",
											"--framer-input-border-radius-bottom-right": "6px",
											"--framer-input-border-radius-top-left": "6px",
											"--framer-input-border-radius-top-right": "6px",
											"--framer-input-border-right-width": "1px",
											"--framer-input-border-style": "solid",
											"--framer-input-border-top-width": "1px",
											"--framer-input-font-color":
												"var(--token-36bb1a2d-632b-41b6-8e08-ee48dcf29873, rgb(16, 16, 16))",
											"--framer-input-icon-color": "rgb(153, 153, 153)",
											"--framer-input-placeholder-color":
												"var(--token-944d416b-60ec-406a-99c8-94ca89212156, rgb(169, 169, 169))",
										}}
										type={"text"}
									/>
								</motion.label>
								<ComponentViewportProvider
									width={`calc(${(componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || "100vw"} - 64px)`}
								>
									<motion.div
										className={"framer-ti4l0z-container"}
										layoutDependency={layoutDependency}
										layoutId={"rYEFuhQNX-container"}
									>
										{_jsx(stdin_default, {
											height: "100%",
											id: "rYEFuhQNX",
											layoutId: "rYEFuhQNX",
											style: {
												height: "100%",
												width: "100%",
											},
											type: "submit",
											variant: formVariants(
												formState,
												{
													incomplete: "olHnyKRpu",
													pending: "v9ww8TY_e",
													success: "Qo5bjy5GS",
												},
												"Yeuipk5Te",
											),
											width: "100%",
											yU_zUVX0e: "Log in",
											...addPropertyOverrides(
												{
													KevRZF7cn: {
														variant: formVariants(
															formState,
															{
																incomplete: "olHnyKRpu",
																pending: "v9ww8TY_e",
																success: "Qo5bjy5GS",
															},
															"v9ww8TY_e",
														),
													},
													ZsrCWHO_c: {
														variant: formVariants(
															formState,
															{
																incomplete: "olHnyKRpu",
																pending: "v9ww8TY_e",
																success: "Qo5bjy5GS",
															},
															"v9ww8TY_e",
														),
													},
												},
												baseVariant,
												gestureVariant,
											),
										})}
									</motion.div>
								</ComponentViewportProvider>
								{isDisplayed() && (
									<motion.div
										className={"framer-y98a49"}
										data-framer-name={"Success message"}
										layoutDependency={layoutDependency}
										layoutId={"eSQ4267NS"}
										style={{
											backgroundColor:
												"var(--token-d1a3e0f4-6e17-46f5-80ee-40f13ad38ea2, rgb(255, 252, 250))",
										}}
									>
										<MotionDivWithFX
											__perspectiveFX={false}
											__smartComponentFX={true}
											__targetOpacity={1}
											animate={optimizeAppear(
												"animate",
												"1fgk054",
												animation,
												"82k6qr",
											)}
											className={"framer-1fgk054"}
											data-framer-appear-id={"1fgk054"}
											data-framer-name={"Checkmark"}
											initial={optimizeAppear(
												"initial",
												"1fgk054",
												animation1,
												"82k6qr",
											)}
											layoutDependency={layoutDependency}
											layoutId={"Q5Xm5tp26"}
											style={{
												backgroundColor:
													"var(--token-f5909a4b-54e7-4c08-b63f-44713b4eba16, rgb(237, 36, 9))",
												borderBottomLeftRadius: 99,
												borderBottomRightRadius: 99,
												borderTopLeftRadius: 99,
												borderTopRightRadius: 99,
											}}
											{...addPropertyOverrides(
												{
													KevRZF7cn: {
														"data-framer-appear-id": "mee2w9",
														animate: optimizeAppear(
															"animate",
															"mee2w9",
															animation,
															"5refmd",
														),
														initial: optimizeAppear(
															"initial",
															"mee2w9",
															animation1,
															"5refmd",
														),
													},
												},
												baseVariant,
												gestureVariant,
											)}
										>
											<SVG
												className={"framer-2ouv4j"}
												data-framer-name={"graphic"}
												fill={
													"var(--token-f1edbbf0-4dde-4043-88fc-e447b2e4f208, rgb(255, 255, 255))"
												}
												intrinsicHeight={24}
												intrinsicWidth={24}
												layoutDependency={layoutDependency}
												layoutId={"aGfPYYqBh"}
												svg={
													'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"/></svg>'
												}
												withExternalLayout={true}
											/>
										</MotionDivWithFX>
										<motion.div
											className={"framer-s88tvp"}
											layoutDependency={layoutDependency}
											layoutId={"wwWLdRLwZ"}
										>
											<RichTextWithFX
												__fromCanvasComponent={true}
												__perspectiveFX={false}
												__smartComponentFX={true}
												__targetOpacity={1}
												animate={optimizeAppear(
													"animate",
													"1vbbzi3",
													animation2,
													"82k6qr",
												)}
												className={"framer-1vbbzi3"}
												data-framer-appear-id={"1vbbzi3"}
												fonts={["Inter"]}
												initial={optimizeAppear(
													"initial",
													"1vbbzi3",
													animation1,
													"82k6qr",
												)}
												layoutDependency={layoutDependency}
												layoutId={"K2dBHnkj8"}
												style={{
													"--framer-link-text-color": "rgb(0, 153, 255)",
													"--framer-link-text-decoration": "underline",
												}}
												verticalAlignment={"top"}
												withExternalLayout={true}
												{...addPropertyOverrides(
													{
														KevRZF7cn: {
															"data-framer-appear-id": "1qz5uo1",
															animate: optimizeAppear(
																"animate",
																"1qz5uo1",
																animation2,
																"5refmd",
															),
															initial: optimizeAppear(
																"initial",
																"1qz5uo1",
																animation1,
																"5refmd",
															),
														},
													},
													baseVariant,
													gestureVariant,
												)}
											>
												<React.Fragment>
													<motion.p
														className={"framer-styles-preset-1o7aipf"}
														data-styles-preset={"x1n9RoGI8"}
														style={{
															"--framer-text-alignment": "center",
														}}
													>
														{"Sign in successful"}
													</motion.p>
												</React.Fragment>
											</RichTextWithFX>
											<RichTextWithFX
												__fromCanvasComponent={true}
												__perspectiveFX={false}
												__smartComponentFX={true}
												__targetOpacity={1}
												animate={optimizeAppear(
													"animate",
													"1j497b8",
													animation3,
													"82k6qr",
												)}
												className={"framer-1j497b8"}
												data-framer-appear-id={"1j497b8"}
												fonts={["Inter"]}
												initial={optimizeAppear(
													"initial",
													"1j497b8",
													animation1,
													"82k6qr",
												)}
												layoutDependency={layoutDependency}
												layoutId={"A1pFbpZlc"}
												style={{
													"--framer-link-text-color": "rgb(0, 153, 255)",
													"--framer-link-text-decoration": "underline",
												}}
												verticalAlignment={"top"}
												withExternalLayout={true}
												{...addPropertyOverrides(
													{
														KevRZF7cn: {
															"data-framer-appear-id": "cn9ko2",
															animate: optimizeAppear(
																"animate",
																"cn9ko2",
																animation3,
																"5refmd",
															),
															initial: optimizeAppear(
																"initial",
																"cn9ko2",
																animation1,
																"5refmd",
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
														style={{
															"--framer-text-alignment": "center",
														}}
													>
														{"We will redirect you in a moment"}
													</motion.p>
												</React.Fragment>
											</RichTextWithFX>
										</motion.div>
									</motion.div>
								)}
							</_Fragment>
						)}
					</FormContainer>
				</Transition>
			</Variants>
		</LayoutGroup>
	);
});
var css4 = [
	"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
	".framer-poTPC.framer-17g5gz3, .framer-poTPC .framer-17g5gz3 { display: block; }",
	".framer-poTPC.framer-82k6qr { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 32px; position: relative; width: 400px; }",
	".framer-poTPC .framer-1grcb95 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-width: 200px; padding: 0px; position: relative; width: 100%; }",
	".framer-poTPC .framer-1ubiyc4, .framer-poTPC .framer-1gp62fu, .framer-poTPC .framer-1vbbzi3, .framer-poTPC .framer-1j497b8 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
	'.framer-poTPC .framer-1vtdut { --framer-input-focused-border-color: var(--token-0b0f3c36-e8dc-44cb-9980-3edcd9f78cf2, #485696); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Figtree"; --framer-input-font-letter-spacing: -0.04px; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400px; --framer-input-padding: 12px; flex: none; height: 40px; position: relative; width: 100%; }',
	".framer-poTPC .framer-xpfw2y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }",
	'.framer-poTPC .framer-wh5g3b { --framer-input-focused-border-color: var(--token-0b0f3c36-e8dc-44cb-9980-3edcd9f78cf2, #485696); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Figtree"; --framer-input-font-letter-spacing: -0.04px; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400px; --framer-input-padding: 12px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }',
	".framer-poTPC .framer-ti4l0z-container { flex: none; height: 40px; position: relative; width: 100%; }",
	".framer-poTPC .framer-y98a49 { align-content: center; align-items: center; bottom: 1px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; justify-content: center; left: 1px; overflow: visible; padding: 32px; position: absolute; right: 1px; top: 1px; z-index: 1; }",
	".framer-poTPC .framer-1fgk054 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: var(--framer-aspect-ratio-supported, 20px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 20px; will-change: var(--framer-will-change-override, transform); }",
	".framer-poTPC .framer-2ouv4j { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); position: relative; width: 12px; }",
	".framer-poTPC .framer-s88tvp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
	"@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-poTPC.framer-82k6qr, .framer-poTPC .framer-1grcb95, .framer-poTPC .framer-xpfw2y, .framer-poTPC .framer-y98a49, .framer-poTPC .framer-1fgk054, .framer-poTPC .framer-s88tvp { gap: 0px; } .framer-poTPC.framer-82k6qr > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-poTPC.framer-82k6qr > :first-child, .framer-poTPC .framer-1grcb95 > :first-child, .framer-poTPC .framer-xpfw2y > :first-child, .framer-poTPC .framer-y98a49 > :first-child, .framer-poTPC .framer-s88tvp > :first-child { margin-top: 0px; } .framer-poTPC.framer-82k6qr > :last-child, .framer-poTPC .framer-1grcb95 > :last-child, .framer-poTPC .framer-xpfw2y > :last-child, .framer-poTPC .framer-y98a49 > :last-child, .framer-poTPC .framer-s88tvp > :last-child { margin-bottom: 0px; } .framer-poTPC .framer-1grcb95 > *, .framer-poTPC .framer-xpfw2y > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-poTPC .framer-y98a49 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-poTPC .framer-1fgk054 > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-poTPC .framer-1fgk054 > :first-child { margin-left: 0px; } .framer-poTPC .framer-1fgk054 > :last-child { margin-right: 0px; } .framer-poTPC .framer-s88tvp > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }",
	...css,
	...css3,
	...css2,
	'.framer-poTPC[data-border="true"]::after, .framer-poTPC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var FramerM4qYARdEB = withCSS(Component, css4, "framer-poTPC");
var stdin_default2 = FramerM4qYARdEB;
FramerM4qYARdEB.displayName = "Forms/Sign in";
FramerM4qYARdEB.defaultProps = {
	height: 289,
	width: 400,
};
addPropertyControls(FramerM4qYARdEB, {
	variant: {
		options: ["DFX4NM0kF", "ZsrCWHO_c", "KevRZF7cn"],
		optionTitles: ["Variant 1", "Loading", "Success"],
		title: "Variant",
		type: ControlType.Enum,
	},
});
addFonts(
	FramerM4qYARdEB,
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
					url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQ bJvbw7SY1pQ.woff2",
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
				{
					family: "Figtree",
					source: "google",
					style: "normal",
					url: "https://fonts.gstatic.com/s/figtree/v5/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_d_QF5bwkEU4HTy.woff2",
					weight: "400",
				},
			],
		},
		...ButtonsSubmitButtonFonts,
		...getFontsFromSharedStyle(fonts),
		...getFontsFromSharedStyle(fonts3),
		...getFontsFromSharedStyle(fonts2),
	],
	{
		supportsExplicitInterCodegen: true,
	},
);

// virtual:forms/sign-in
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
	base: "DFX4NM0kF",
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
			{jsx(stdin_default2, {
				...rest,
			})}
		</ContextProviders>
	);
}
/**
 * Renders SignInFramerComponent for all breakpoints with a variants map. Variant prop is inferred per breakpoint.
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
				Component={stdin_default2}
				variants={defaultResponsiveVariants}
				{...rest}
			/>
		</ContextProviders>
	);
};
Object.assign(ComponentWithRoot, stdin_default2);
var sign_in_default = ComponentWithRoot;
export { sign_in_default as default };
