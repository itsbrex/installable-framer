// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project  "ApiFlow (copy)", do not edit manually */
'use client';
import { className, css, fonts, } from '../chunk-AAIGJDIS.js';
import '../chunk-MLKGABMK.js';

// virtual:buttons/sign-up-button
import { Fragment as Fragment2, } from 'react';
import { ContextProviders, } from 'unframer';

// https :https://framerusercontent.com/modules/q2WWbMl6IvN86b61e028/WrKQU6xBnJBNgHiziHgx/ye4VQiBUG.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
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
var cycleOrder = ['JOn8gzR30', 'pwQe2A20s', 'yXEyLi9JB',];
var serializationHash = 'framer-d19fJ';
var variantClassNames = { JOn8gzR30: 'framer-v-12r4m0t', pwQe2A20s: 'framer-v-1oqaklv', yXEyLi9JB: 'framer-v-nm1fv7', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var humanReadableVariantMap = { 'Variant 1': 'JOn8gzR30', 'Variant 2': 'pwQe2A20s', 'Variant 3': 'yXEyLi9JB', };
var getProps = ({ buttonText, height, id, link, width, ...props },) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1;
  return {
    ...props,
    aLzckSHOC: link !== null && link !== void 0 ? link : props.aLzckSHOC,
    TJIuLmRdX: (_ref = buttonText !== null && buttonText !== void 0 ? buttonText : props.TJIuLmRdX) !== null && _ref !== void 0
      ? _ref
      : 'Sign in',
    variant:
      (_ref1 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref1 !== void 0
        ? _ref1
        : 'JOn8gzR30',
  };
};
var createLayoutDependency = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, TJIuLmRdX, aLzckSHOC, ...restProps } = getProps(props,);
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
  } = useVariantState({ cycleOrder, defaultVariant: 'JOn8gzR30', variant, variantClassNames, },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className,];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsx(Link, {
          href: aLzckSHOC,
          children: /* @__PURE__ */ _jsx(motion.a, {
            ...restProps,
            ...gestureHandlers,
            className: `${cx(serializationHash, ...sharedStyleClassNames, 'framer-12r4m0t', className2, classNames,)} framer-1n76t2u`,
            'data-border': true,
            'data-framer-name': 'Variant 1',
            layoutDependency,
            layoutId: 'JOn8gzR30',
            ref: ref !== null && ref !== void 0 ? ref : ref1,
            style: {
              '--border-bottom-width': '2px',
              '--border-color': 'var(--token-816b9f7c-e26f-4679-8e8e-d7b2281f3c6d, rgb(252, 62, 19))',
              '--border-left-width': '2px',
              '--border-right-width': '2px',
              '--border-style': 'solid',
              '--border-top-width': '2px',
              backgroundColor: 'var(--token-f5909a4b-54e7-4c08-b63f-44713b4eba16, rgb(237, 36, 9))',
              borderBottomLeftRadius: 99,
              borderBottomRightRadius: 99,
              borderTopLeftRadius: 99,
              borderTopRightRadius: 99,
              ...style,
            },
            variants: {
              pwQe2A20s: {
                '--border-bottom-width': '0px',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-top-width': '0px',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
              yXEyLi9JB: {
                '--border-color': 'var(--token-36bb1a2d-632b-41b6-8e08-ee48dcf29873, rgb(16, 16, 16))',
                backgroundColor: 'var(--token-36bb1a2d-632b-41b6-8e08-ee48dcf29873, rgb(16, 16, 16))',
              },
            },
            ...addPropertyOverrides(
              { pwQe2A20s: { 'data-framer-name': 'Variant 2', }, yXEyLi9JB: { 'data-framer-name': 'Variant 3', }, },
              baseVariant,
              gestureVariant,
            ),
            children: /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.p, {
                  className: 'framer-styles-preset-1aj6jmn',
                  'data-styles-preset': 'TeHXylmO7',
                  style: { '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))', },
                  children: 'Sign in',
                },),
              },),
              className: 'framer-bygn9j',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'JOn8gzR30sz0TWsWnJ',
              style: {
                '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
              },
              text: TJIuLmRdX,
              variants: { yXEyLi9JB: { '--extracted-r6o4lv': 'var(--token-f1edbbf0-4dde-4043-88fc-e447b2e4f208, rgb(255, 255, 255))', }, },
              verticalAlignment: 'top',
              withExternalLayout: true,
              ...addPropertyOverrides(
                {
                  pwQe2A20s: {
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        className: 'framer-styles-preset-1aj6jmn',
                        'data-styles-preset': 'TeHXylmO7',
                        children: 'Sign in',
                      },),
                    },),
                  },
                  yXEyLi9JB: {
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        className: 'framer-styles-preset-1aj6jmn',
                        'data-styles-preset': 'TeHXylmO7',
                        style: {
                          '--framer-text-color':
                            'var(--extracted-r6o4lv, var(--token-f1edbbf0-4dde-4043-88fc-e447b2e4f208, rgb(255, 255, 255)))',
                        },
                        children: 'Sign in',
                      },),
                    },),
                  },
                },
                baseVariant,
                gestureVariant,
              ),
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css2 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-d19fJ.framer-1n76t2u, .framer-d19fJ .framer-1n76t2u { display: block; }',
  '.framer-d19fJ.framer-12r4m0t { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: 36px; justify-content: center; overflow: hidden; padding: 0px 16px 0px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-d19fJ .framer-bygn9j { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-d19fJ.framer-12r4m0t { gap: 0px; } .framer-d19fJ.framer-12r4m0t > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-d19fJ.framer-12r4m0t > :first-child { margin-top: 0px; } .framer-d19fJ.framer-12r4m0t > :last-child { margin-bottom: 0px; } }',
  '.framer-d19fJ.framer-v-1oqaklv.framer-12r4m0t { padding: 0px; }',
  ...css,
  '.framer-d19fJ[data-border="true"]::after, .framer-d19fJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var Framerye4VQiBUG = withCSS(Component, css2, 'framer-d19fJ',);
var stdin_default = Framerye4VQiBUG;
Framerye4VQiBUG.displayName = 'Buttons/Sign up button';
Framerye4VQiBUG.defaultProps = { height: 36, width: 76, };
addPropertyControls(Framerye4VQiBUG, {
  variant: {
    options: ['JOn8gzR30', 'pwQe2A20s', 'yXEyLi9JB',],
    optionTitles: ['Variant 1', 'Variant 2', 'Variant 3',],
    title: 'Variant',
    type: ControlType.Enum,
  },
  TJIuLmRdX: { defaultValue: 'Sign in', displayTextArea: false, title: 'Button text', type: ControlType.String, },
  aLzckSHOC: { title: 'Link', type: ControlType.Link, },
},);
addFonts(Framerye4VQiBUG, [{
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
}, ...getFontsFromSharedStyle(fonts,),], { supportsExplicitInterCodegen: true, },);

// virtual:buttons/sign-up-button
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
function WithRoot({ children, locale, },) {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routeId: 'x',
      routes: {
        x: {
          elements: {},
          page: children,
          path: '/',
        },
      },
      framerSiteId: 'f667fc580d8d9346cf49d633d75940b95292fa43c24dd7765c9a175ec73f7405',
      locale,
      locales,
      children,
    },
  );
}
var locales = [{ 'id': 'M_lnJlsvf', 'name': 'Italian (Italy)', 'slug': 'it', 'code': 'it-IT', },];
stdin_default.Responsive = ({ locale, ...props },) => {
  return /* @__PURE__ */ jsx(WithRoot, {
    locale,
    children: /* @__PURE__ */ jsx(
      WithFramerBreakpoints,
      {
        Component: stdin_default,
        ...props,
      },
    ),
  },);
};
function ComponentWithRoot({ locale, ...rest },) {
  return /* @__PURE__ */ jsx(WithRoot, { locale, children: /* @__PURE__ */ jsx(stdin_default, { ...rest, },), },);
}
Object.assign(ComponentWithRoot, stdin_default,);
export { ComponentWithRoot as default, };