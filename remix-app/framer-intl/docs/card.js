// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project f667fc580d8d9346 "ApiFlow (copy)", do not edit manually */
'use client';
import { className as className2, css as css2, fonts as fonts2, } from '../chunk-RNBCJQLS.js';
import { SVGDisplay, } from '../chunk-IQPTB4C4.js';
import { className, css, fonts, } from '../chunk-S5OKBSDU.js';
import '../chunk-MLKGABMK.js';

// virtual:docs/card
import { Fragment as Fragment2, } from 'react';
import { ContextProviders, } from 'unframer';

// https :https://framerusercontent.com/modules/2aB0YkIxSGRY7QjiJEB4/OvIJALwZnw5aiMQvPwR5/iNgYt8PIo.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ComponentViewportProvider,
  ControlType,
  cx,
  getFonts,
  getFontsFromSharedStyle,
  Link,
  RichText,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var SVGDisplayFonts = getFonts(SVGDisplay,);
var enabledGestures = { BDi7dP4jJ: { hover: true, }, KyMhylhxM: { hover: true, }, };
var cycleOrder = ['KyMhylhxM', 'BDi7dP4jJ',];
var serializationHash = 'framer-z0fmc';
var variantClassNames = { BDi7dP4jJ: 'framer-v-1d1frtn', KyMhylhxM: 'framer-v-p085eo', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { damping: 43, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var humanReadableVariantMap = { 'Variant 1': 'KyMhylhxM', 'Variant 2': 'BDi7dP4jJ', };
var getProps = ({ description, height, id, link, sVGCode, title, width, ...props },) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1, _ref2, _ref3;
  return {
    ...props,
    fBduhNBs8: link !== null && link !== void 0 ? link : props.fBduhNBs8,
    muSJDuVtN: (_ref = title !== null && title !== void 0 ? title : props.muSJDuVtN) !== null && _ref !== void 0 ? _ref : 'Just beginning?',
    variant:
      (_ref1 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref1 !== void 0
        ? _ref1
        : 'KyMhylhxM',
    xd6IqC5Dy: (_ref2 = description !== null && description !== void 0 ? description : props.xd6IqC5Dy) !== null && _ref2 !== void 0
      ? _ref2
      : 'Start with a step by step walk through getting started guide.',
    ZBnLvuwfQ: (_ref3 = sVGCode !== null && sVGCode !== void 0 ? sVGCode : props.ZBnLvuwfQ) !== null && _ref3 !== void 0
      ? _ref3
      : '<path d="M9 21h6v-1H9v1zm3-19C6.48 2 2 6.48 2 12c0 2.85 1.2 5.41 3.11 7.24.38.36.61.88.61 1.42V21c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-.34c0-.54.23-1.06.61-1.42C20.8 17.41 22 14.85 22 12c0-5.52-4.48-10-10-10zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>',
  };
};
var createLayoutDependency = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className3, layoutId, variant, ZBnLvuwfQ, muSJDuVtN, xd6IqC5Dy, fBduhNBs8, ...restProps } = getProps(props,);
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
  } = useVariantState({ cycleOrder, defaultVariant: 'KyMhylhxM', enabledGestures, variant, variantClassNames, },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className, className2,];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsx(Link, {
          href: fBduhNBs8,
          openInNewTab: false,
          children: /* @__PURE__ */ _jsxs(motion.a, {
            ...restProps,
            ...gestureHandlers,
            className: `${cx(serializationHash, ...sharedStyleClassNames, 'framer-p085eo', className3, classNames,)} framer-z92tw2`,
            'data-border': true,
            'data-framer-name': 'Variant 1',
            layoutDependency,
            layoutId: 'KyMhylhxM',
            ref: ref !== null && ref !== void 0 ? ref : ref1,
            style: {
              '--border-bottom-width': '1px',
              '--border-color': 'var(--token-1691cb44-c002-4542-9545-8a0801f91af2, rgb(231, 231, 231))',
              '--border-left-width': '1px',
              '--border-right-width': '1px',
              '--border-style': 'solid',
              '--border-top-width': '1px',
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 6,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              boxShadow: 'none',
              ...style,
            },
            variants: {
              'BDi7dP4jJ-hover': {
                '--border-color': 'var(--token-4a18edb7-e149-464f-8c02-aa015661ab43, rgb(255, 160, 122))',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
              'KyMhylhxM-hover': { boxShadow: '0px 4px 12px 0px rgba(0, 0, 1, 0.06)', },
              BDi7dP4jJ: {
                '--border-style': 'dotted',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
            },
            ...addPropertyOverrides(
              {
                'BDi7dP4jJ-hover': { 'data-framer-name': void 0, },
                'KyMhylhxM-hover': { 'data-framer-name': void 0, },
                BDi7dP4jJ: { 'data-framer-name': 'Variant 2', },
              },
              baseVariant,
              gestureVariant,
            ),
            children: [
              /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                children: /* @__PURE__ */ _jsx(motion.div, {
                  className: 'framer-52jqh7-container',
                  layoutDependency,
                  layoutId: 'E0l9AYUaG-container',
                  children: /* @__PURE__ */ _jsx(SVGDisplay, {
                    color: 'var(--token-36bb1a2d-632b-41b6-8e08-ee48dcf29873, rgb(16, 16, 16))',
                    height: '100%',
                    id: 'E0l9AYUaG',
                    layoutId: 'E0l9AYUaG',
                    strokeWidth: 0,
                    style: { height: '100%', width: '100%', },
                    svgCode: ZBnLvuwfQ,
                    width: '100%',
                    ...addPropertyOverrides(
                      { 'BDi7dP4jJ-hover': { color: 'var(--token-f5909a4b-54e7-4c08-b63f-44713b4eba16, rgb(237, 36, 9))', }, },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
              /* @__PURE__ */ _jsxs(motion.div, {
                className: 'framer-lqo8y4',
                layoutDependency,
                layoutId: 'EGkXZujRe',
                children: [
                  /* @__PURE__ */ _jsx(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        className: 'framer-styles-preset-17qeria',
                        'data-styles-preset': 'vSuRg5Prj',
                        children: 'Just beginning?',
                      },),
                    },),
                    className: 'framer-qluz7v',
                    fonts: ['Inter',],
                    layoutDependency,
                    layoutId: 's0lG5QL03',
                    style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                    text: muSJDuVtN,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                  /* @__PURE__ */ _jsx(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        className: 'framer-styles-preset-1k8riq',
                        'data-styles-preset': 'n4VV4jzz6',
                        children: 'Start with a step by step walk through getting started guide.',
                      },),
                    },),
                    className: 'framer-fv5aca',
                    fonts: ['Inter',],
                    layoutDependency,
                    layoutId: 'Lpw6V0XjY',
                    style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                    text: xd6IqC5Dy,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                ],
              },),
            ],
          },),
        },),
      },),
    },),
  },);
},);
var css3 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-z0fmc.framer-z92tw2, .framer-z0fmc .framer-z92tw2 { display: block; }',
  '.framer-z0fmc.framer-p085eo { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 24px; position: relative; text-decoration: none; width: 272px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-z0fmc .framer-52jqh7-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }',
  '.framer-z0fmc .framer-lqo8y4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }',
  '.framer-z0fmc .framer-qluz7v, .framer-z0fmc .framer-fv5aca { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-z0fmc.framer-p085eo, .framer-z0fmc .framer-lqo8y4 { gap: 0px; } .framer-z0fmc.framer-p085eo > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-z0fmc.framer-p085eo > :first-child, .framer-z0fmc .framer-lqo8y4 > :first-child { margin-top: 0px; } .framer-z0fmc.framer-p085eo > :last-child, .framer-z0fmc .framer-lqo8y4 > :last-child { margin-bottom: 0px; } .framer-z0fmc .framer-lqo8y4 > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } }',
  '.framer-z0fmc.framer-v-1d1frtn.framer-p085eo { justify-content: flex-start; }',
  ...css,
  ...css2,
  '.framer-z0fmc[data-border="true"]::after, .framer-z0fmc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var FrameriNgYt8PIo = withCSS(Component, css3, 'framer-z0fmc',);
var stdin_default = FrameriNgYt8PIo;
FrameriNgYt8PIo.displayName = 'Docs/card';
FrameriNgYt8PIo.defaultProps = { height: 179, width: 272, };
addPropertyControls(FrameriNgYt8PIo, {
  variant: { options: ['KyMhylhxM', 'BDi7dP4jJ',], optionTitles: ['Variant 1', 'Variant 2',], title: 'Variant', type: ControlType.Enum, },
  ZBnLvuwfQ: {
    defaultValue:
      '<path d="M9 21h6v-1H9v1zm3-19C6.48 2 2 6.48 2 12c0 2.85 1.2 5.41 3.11 7.24.38.36.61.88.61 1.42V21c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-.34c0-.54.23-1.06.61-1.42C20.8 17.41 22 14.85 22 12c0-5.52-4.48-10-10-10zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>',
    placeholder: 'Enter your SVG code here...',
    title: 'SVG Code',
    type: ControlType.String,
  },
  muSJDuVtN: { defaultValue: 'Just beginning?', displayTextArea: false, title: 'Title', type: ControlType.String, },
  xd6IqC5Dy: {
    defaultValue: 'Start with a step by step walk through getting started guide.',
    displayTextArea: false,
    title: 'Description',
    type: ControlType.String,
  },
  fBduhNBs8: { title: 'Link', type: ControlType.Link, },
},);
addFonts(FrameriNgYt8PIo, [
  {
    explicitInter: true,
    fonts: [{
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      url: 'https://framerusercontent.com/assets/5vvr9Vy74if2I6bQ bJvbw7SY1pQ.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      url: 'https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+1F00-1FFF',
      url: 'https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0370-03FF',
      url: 'https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      url: 'https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      url: 'https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
      url: 'https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2',
      weight: '400',
    },],
  },
  ...SVGDisplayFonts,
  ...getFontsFromSharedStyle(fonts,),
  ...getFontsFromSharedStyle(fonts2,),
], { supportsExplicitInterCodegen: true, },);

// virtual:docs/card
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
var locales = [{ 'id': 'M_lnJlsvf', 'name': 'Italian (Italy)', 'slug': 'it', 'code': 'it-IT', },];
stdin_default.Responsive = ({ locale, ...props },) => {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routeId: 'x',
      routes: {
        x: {
          elements: {},
          page: /* @__PURE__ */ jsx(
            WithFramerBreakpoints,
            {
              Component: stdin_default,
              ...props,
            },
          ),
          path: '/',
        },
      },
      framerSiteId: 'f667fc580d8d9346cf49d633d75940b95292fa43c24dd7765c9a175ec73f7405',
      locale,
      locales,
    },
  );
};
function ComponentWithRoot({ locale, ...rest },) {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routeId: 'x',
      routes: {
        x: {
          elements: {},
          page: /* @__PURE__ */ jsx(stdin_default, { ...rest, },),
          path: '/',
        },
      },
      framerSiteId: 'f667fc580d8d9346cf49d633d75940b95292fa43c24dd7765c9a175ec73f7405',
      locale,
      locales,
    },
  );
}
Object.assign(ComponentWithRoot, stdin_default,);
export { ComponentWithRoot as default, };