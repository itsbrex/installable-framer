// @ts-nocheck
/* eslint-disable */
'use client';
import './chunk-MLKGABMK.js';

// https :https://framerusercontent.com/modules/nIcBXu5ePDUqJReWJpHL/gT7CjPYpquni8UJ6Wpcv/S9kYpxRJ7.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  RichText,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var cycleOrder = ['d8oVoE6lz', 'EH70jfau6', 'lyHQDXDIb', 'BrtrytM8i', 'jb_nEpI35',];
var serializationHash = 'framer-ZiWnh';
var variantClassNames = {
  BrtrytM8i: 'framer-v-30e5jn',
  d8oVoE6lz: 'framer-v-13her7v',
  EH70jfau6: 'framer-v-t39myc',
  jb_nEpI35: 'framer-v-8v483q',
  lyHQDXDIb: 'framer-v-nd16mq',
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { delay: 0, duration: 0.2, ease: [0.5, 0, 0.88, 0.77,], type: 'tween', };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var humanReadableVariantMap = { '1': 'd8oVoE6lz', '2': 'EH70jfau6', '3': 'jb_nEpI35', Rani: 'lyHQDXDIb', RaniHistory: 'BrtrytM8i', };
var getProps = ({ height, id, on1, on2, on3, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    QjJ_BHFuP: on1 !== null && on1 !== void 0 ? on1 : props.QjJ_BHFuP,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'd8oVoE6lz',
    YbiQRVlj5: on2 !== null && on2 !== void 0 ? on2 : props.YbiQRVlj5,
    ZeMiZXX7_: on3 !== null && on3 !== void 0 ? on3 : props.ZeMiZXX7_,
  };
};
var createLayoutDependency = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, YbiQRVlj5, QjJ_BHFuP, ZeMiZXX7_, ...restProps } = getProps(props,);
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
  } = useVariantState({ cycleOrder, defaultVariant: 'd8oVoE6lz', variant, variantClassNames, },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTapiz977i = activeVariantCallback(async (...args) => {
    if (QjJ_BHFuP) {
      const res = await QjJ_BHFuP(...args,);
      if (res === false) return false;
    }
    setVariant('d8oVoE6lz',);
  },);
  const onTap9iz4zg = activeVariantCallback(async (...args) => {
    if (YbiQRVlj5) {
      const res = await YbiQRVlj5(...args,);
      if (res === false) return false;
    }
    setVariant('EH70jfau6',);
  },);
  const onTap8ryoal = activeVariantCallback(async (...args) => {
    if (ZeMiZXX7_) {
      const res = await ZeMiZXX7_(...args,);
      if (res === false) return false;
    }
    setVariant('jb_nEpI35',);
  },);
  const onTap1u9ins0 = activeVariantCallback(async (...args) => {
    if (ZeMiZXX7_) {
      const res = await ZeMiZXX7_(...args,);
      if (res === false) return false;
    }
  },);
  const ref1 = React.useRef(null,);
  const isDisplayed = () => {
    if (['lyHQDXDIb', 'BrtrytM8i',].includes(baseVariant,)) return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (['lyHQDXDIb', 'BrtrytM8i',].includes(baseVariant,)) return true;
    return false;
  };
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-13her7v', className, classNames,),
          'data-framer-name': '1',
          layoutDependency,
          layoutId: 'd8oVoE6lz',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides(
            {
              BrtrytM8i: { 'data-framer-name': 'RaniHistory', },
              EH70jfau6: { 'data-framer-name': '2', },
              jb_nEpI35: { 'data-framer-name': '3', },
              lyHQDXDIb: { 'data-framer-name': 'Rani', },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.p, {
                  style: {
                    '--font-selector': 'Q1VTVE9NO1NlcXVlbCBTYW5zIEJvb2s=',
                    '--framer-font-family': '"Sequel Sans Book", "Sequel Sans Book Placeholder", sans-serif',
                    '--framer-font-size': '12px',
                    '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23)))',
                  },
                  children: 'GROWTH SPACE',
                },),
              },),
              className: 'framer-a9obb7',
              fonts: ['CUSTOM;Sequel Sans Book',],
              layoutDependency,
              layoutId: 'zb7D6_teO',
              style: {
                '--extracted-r6o4lv': ' var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
              },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            isDisplayed() && /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-74t85e',
              'data-framer-name': 'businessWrapper',
              'data-highlight': true,
              layoutDependency,
              layoutId: 'TiomEyRJG',
              onTap: onTapiz977i,
              children: /* @__PURE__ */ _jsxs(motion.div, {
                className: 'framer-17bapam',
                'data-border': true,
                'data-framer-name': 'MainButton',
                layoutDependency,
                layoutId: 'neQtjpKSW',
                style: {
                  '--border-bottom-width': '2px',
                  '--border-color': 'rgba(24, 23, 23, 0.5)',
                  '--border-left-width': '2px',
                  '--border-right-width': '2px',
                  '--border-style': 'solid',
                  '--border-top-width': '2px',
                  backgroundColor: 'var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))',
                  borderBottomLeftRadius: 16,
                  borderBottomRightRadius: 16,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  opacity: 1,
                },
                variants: {
                  EH70jfau6: { backgroundColor: 'var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240))', opacity: 0.5, },
                  jb_nEpI35: { backgroundColor: 'var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240))', opacity: 0.5, },
                },
                children: [
                  /* @__PURE__ */ _jsx(motion.div, {
                    className: 'framer-1rxvd86',
                    'data-border': true,
                    layoutDependency,
                    layoutId: 'yrAydU6kt',
                    style: {
                      '--border-bottom-width': '1px',
                      '--border-color': 'var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240))',
                      '--border-left-width': '1px',
                      '--border-right-width': '1px',
                      '--border-style': 'solid',
                      '--border-top-width': '1px',
                      borderBottomLeftRadius: 60,
                      borderBottomRightRadius: 60,
                      borderTopLeftRadius: 60,
                      borderTopRightRadius: 60,
                    },
                    variants: {
                      EH70jfau6: { '--border-color': 'var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))', },
                      jb_nEpI35: { '--border-color': 'var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))', },
                    },
                    children: /* @__PURE__ */ _jsx(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                        children: /* @__PURE__ */ _jsx(motion.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1NlcXVlbCBTYW5zIE1lZGl1bQ==',
                            '--framer-font-family': '"Sequel Sans Medium", "Sequel Sans Medium Placeholder", sans-serif',
                            '--framer-font-size': '14px',
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)))',
                          },
                          children: '1',
                        },),
                      },),
                      className: 'framer-75erm5',
                      fonts: ['CUSTOM;Sequel Sans Medium',],
                      layoutDependency,
                      layoutId: 'PDaqtetRd',
                      style: {
                        '--extracted-r6o4lv': ' var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240))',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                      },
                      variants: {
                        EH70jfau6: { '--extracted-r6o4lv': ' var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))', },
                        jb_nEpI35: { '--extracted-r6o4lv': ' var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))', },
                      },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                      ...addPropertyOverrides(
                        {
                          EH70jfau6: {
                            children: /* @__PURE__ */ _jsx(React.Fragment, {
                              children: /* @__PURE__ */ _jsx(motion.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1NlcXVlbCBTYW5zIE1lZGl1bQ==',
                                  '--framer-font-family': '"Sequel Sans Medium", "Sequel Sans Medium Placeholder", sans-serif',
                                  '--framer-font-size': '14px',
                                  '--framer-text-color':
                                    'var(--extracted-r6o4lv, var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23)))',
                                },
                                children: '1',
                              },),
                            },),
                          },
                          jb_nEpI35: {
                            children: /* @__PURE__ */ _jsx(React.Fragment, {
                              children: /* @__PURE__ */ _jsx(motion.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1NlcXVlbCBTYW5zIE1lZGl1bQ==',
                                  '--framer-font-family': '"Sequel Sans Medium", "Sequel Sans Medium Placeholder", sans-serif',
                                  '--framer-font-size': '14px',
                                  '--framer-text-color':
                                    'var(--extracted-r6o4lv, var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23)))',
                                },
                                children: '1',
                              },),
                            },),
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  /* @__PURE__ */ _jsx(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        style: {
                          '--framer-text-color':
                            'var(--extracted-r6o4lv, var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)))',
                        },
                        children: 'ROOTS REINVENTED',
                      },),
                    },),
                    className: 'framer-19z786w',
                    fonts: ['Inter',],
                    layoutDependency,
                    layoutId: 'jTqiRdjEU',
                    style: {
                      '--extracted-r6o4lv': ' var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240))',
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                    },
                    variants: {
                      EH70jfau6: { '--extracted-r6o4lv': ' var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))', },
                      jb_nEpI35: { '--extracted-r6o4lv': ' var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))', },
                    },
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                    ...addPropertyOverrides(
                      {
                        EH70jfau6: {
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.p, {
                              style: {
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23)))',
                              },
                              children: 'ROOTS REINVENTED',
                            },),
                          },),
                        },
                        jb_nEpI35: {
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.p, {
                              style: {
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23)))',
                              },
                              children: 'ROOTS REINVENTED',
                            },),
                          },),
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                ],
              },),
            },),
            isDisplayed() && /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-13fa8tc',
              'data-framer-name': 'consumerWrapper',
              'data-highlight': true,
              layoutDependency,
              layoutId: 'BjGGbdrkS',
              onTap: onTap9iz4zg,
              ...addPropertyOverrides({ EH70jfau6: { 'data-highlight': void 0, onTap: void 0, }, }, baseVariant, gestureVariant,),
              children: /* @__PURE__ */ _jsxs(motion.div, {
                className: 'framer-1qqjrz3',
                'data-border': true,
                'data-framer-name': 'MainButton',
                layoutDependency,
                layoutId: 'X8K2exVzT',
                style: {
                  '--border-bottom-width': '2px',
                  '--border-color': 'rgb(24, 23, 23)',
                  '--border-left-width': '2px',
                  '--border-right-width': '2px',
                  '--border-style': 'solid',
                  '--border-top-width': '2px',
                  backgroundColor: 'var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240))',
                  borderBottomLeftRadius: 16,
                  borderBottomRightRadius: 16,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  opacity: 0.5,
                },
                variants: {
                  EH70jfau6: {
                    '--border-color': 'rgba(24, 23, 23, 0.5)',
                    backgroundColor: 'var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))',
                    opacity: 1,
                  },
                  jb_nEpI35: { '--border-color': 'rgba(24, 23, 23, 0.5)', opacity: 1, },
                },
                children: [
                  /* @__PURE__ */ _jsx(motion.div, {
                    className: 'framer-cbelsd',
                    'data-border': true,
                    layoutDependency,
                    layoutId: 'uErmGV0pN',
                    style: {
                      '--border-bottom-width': '1px',
                      '--border-color': 'var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))',
                      '--border-left-width': '1px',
                      '--border-right-width': '1px',
                      '--border-style': 'solid',
                      '--border-top-width': '1px',
                      borderBottomLeftRadius: 60,
                      borderBottomRightRadius: 60,
                      borderTopLeftRadius: 60,
                      borderTopRightRadius: 60,
                    },
                    variants: {
                      EH70jfau6: { '--border-color': 'var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240))', },
                    },
                    children: /* @__PURE__ */ _jsx(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                        children: /* @__PURE__ */ _jsx(motion.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1NlcXVlbCBTYW5zIE1lZGl1bQ==',
                            '--framer-font-family': '"Sequel Sans Medium", "Sequel Sans Medium Placeholder", sans-serif',
                            '--framer-font-size': '14px',
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23)))',
                          },
                          children: '2',
                        },),
                      },),
                      className: 'framer-1gihfm7',
                      fonts: ['CUSTOM;Sequel Sans Medium',],
                      layoutDependency,
                      layoutId: 'SIAgQF8Xg',
                      style: {
                        '--extracted-r6o4lv': ' var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                      },
                      variants: {
                        EH70jfau6: { '--extracted-r6o4lv': ' var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240))', },
                        jb_nEpI35: { '--extracted-r6o4lv': 'var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23)) ', },
                      },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                      ...addPropertyOverrides(
                        {
                          EH70jfau6: {
                            children: /* @__PURE__ */ _jsx(React.Fragment, {
                              children: /* @__PURE__ */ _jsx(motion.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1NlcXVlbCBTYW5zIE1lZGl1bQ==',
                                  '--framer-font-family': '"Sequel Sans Medium", "Sequel Sans Medium Placeholder", sans-serif',
                                  '--framer-font-size': '14px',
                                  '--framer-text-color':
                                    'var(--extracted-r6o4lv, var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)))',
                                },
                                children: '2',
                              },),
                            },),
                          },
                          jb_nEpI35: {
                            children: /* @__PURE__ */ _jsx(React.Fragment, {
                              children: /* @__PURE__ */ _jsx(motion.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1NlcXVlbCBTYW5zIE1lZGl1bQ==',
                                  '--framer-font-family': '"Sequel Sans Medium", "Sequel Sans Medium Placeholder", sans-serif',
                                  '--framer-font-size': '14px',
                                  '--framer-text-color':
                                    'var(--extracted-r6o4lv, var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23)) )',
                                },
                                children: '2',
                              },),
                            },),
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  /* @__PURE__ */ _jsx(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        style: {
                          '--framer-text-color':
                            'var(--extracted-r6o4lv, var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23)))',
                        },
                        children: 'AWE AWAKEN',
                      },),
                    },),
                    className: 'framer-1tz0sas',
                    fonts: ['Inter',],
                    layoutDependency,
                    layoutId: 'Vq_HG_jFT',
                    style: {
                      '--extracted-r6o4lv': ' var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))',
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                    },
                    variants: {
                      EH70jfau6: { '--extracted-r6o4lv': ' var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240))', },
                      jb_nEpI35: { '--extracted-r6o4lv': 'var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23)) ', },
                    },
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                    ...addPropertyOverrides(
                      {
                        EH70jfau6: {
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.p, {
                              style: {
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)))',
                              },
                              children: 'AWE AWAKEN',
                            },),
                          },),
                        },
                        jb_nEpI35: {
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.p, {
                              style: {
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23)) )',
                              },
                              children: 'AWE AWAKEN',
                            },),
                          },),
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                ],
              },),
            },),
            /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-1gf1vv5',
              'data-framer-name': 'brandWrapper',
              'data-highlight': true,
              layoutDependency,
              layoutId: 'E4JltuhRK',
              onTap: onTap8ryoal,
              ...addPropertyOverrides(
                {
                  BrtrytM8i: { 'data-highlight': void 0, onTap: void 0, },
                  jb_nEpI35: { onTap: onTap1u9ins0, },
                  lyHQDXDIb: { 'data-highlight': void 0, onTap: void 0, },
                },
                baseVariant,
                gestureVariant,
              ),
              children: /* @__PURE__ */ _jsxs(motion.div, {
                className: 'framer-16kfk89',
                'data-border': true,
                'data-framer-name': 'MainButton',
                layoutDependency,
                layoutId: 'AYAHtj1WJ',
                style: {
                  '--border-bottom-width': '2px',
                  '--border-color': 'rgba(24, 23, 23, 0.5)',
                  '--border-left-width': '2px',
                  '--border-right-width': '2px',
                  '--border-style': 'solid',
                  '--border-top-width': '2px',
                  backgroundColor: 'var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240))',
                  borderBottomLeftRadius: 16,
                  borderBottomRightRadius: 16,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  opacity: 0.5,
                },
                variants: {
                  BrtrytM8i: {
                    '--border-bottom-width': '0px',
                    '--border-left-width': '0px',
                    '--border-right-width': '0px',
                    '--border-top-width': '0px',
                    backgroundColor: 'rgba(24, 23, 23, 0.2)',
                    borderBottomLeftRadius: 2,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    opacity: 1,
                  },
                  jb_nEpI35: { backgroundColor: 'var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))', opacity: 1, },
                  lyHQDXDIb: {
                    '--border-bottom-width': '0px',
                    '--border-left-width': '0px',
                    '--border-right-width': '0px',
                    '--border-top-width': '0px',
                    backgroundColor: 'rgba(24, 23, 23, 0.2)',
                    borderBottomLeftRadius: 2,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    opacity: 1,
                  },
                },
                children: [
                  /* @__PURE__ */ _jsxs(motion.div, {
                    className: 'framer-z5hq79',
                    'data-framer-name': 'RaniLock',
                    layoutDependency,
                    layoutId: 'a8Z9YV773',
                    children: [
                      isDisplayed1() && /* @__PURE__ */ _jsx(RichText, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO01hdGVyaWFsIFN5bWJvbHMgUm91bmRlZCBSZWd1bGFy',
                              '--framer-font-family':
                                '"Material Symbols Rounded Regular", "Material Symbols Rounded Regular Placeholder", sans-serif',
                              '--framer-text-color':
                                'var(--extracted-r6o4lv, var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)))',
                            },
                            children: 'lock',
                          },),
                        },),
                        className: 'framer-beo6qa',
                        fonts: ['CUSTOM;Material Symbols Rounded Regular',],
                        layoutDependency,
                        layoutId: 'Cyt0lJJs8',
                        style: {
                          '--extracted-r6o4lv': 'var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240))',
                          '--framer-link-text-color': 'rgb(0, 153, 255)',
                          '--framer-link-text-decoration': 'underline',
                        },
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                      /* @__PURE__ */ _jsx(motion.div, {
                        className: 'framer-nr0vv6',
                        'data-border': true,
                        layoutDependency,
                        layoutId: 'th8D2Ft4W',
                        style: {
                          '--border-bottom-width': '1px',
                          '--border-color': 'var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))',
                          '--border-left-width': '1px',
                          '--border-right-width': '1px',
                          '--border-style': 'solid',
                          '--border-top-width': '1px',
                          borderBottomLeftRadius: 60,
                          borderBottomRightRadius: 60,
                          borderTopLeftRadius: 60,
                          borderTopRightRadius: 60,
                        },
                        variants: {
                          jb_nEpI35: { '--border-color': 'var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240))', },
                        },
                        children: /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1NlcXVlbCBTYW5zIE1lZGl1bQ==',
                                '--framer-font-family': '"Sequel Sans Medium", "Sequel Sans Medium Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23)))',
                              },
                              children: '3',
                            },),
                          },),
                          className: 'framer-zpepy1',
                          fonts: ['CUSTOM;Sequel Sans Medium',],
                          layoutDependency,
                          layoutId: 'Qzy1m4B6u',
                          style: {
                            '--extracted-r6o4lv': ' var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          variants: {
                            BrtrytM8i: { '--extracted-r6o4lv': 'var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)) ', },
                            jb_nEpI35: { '--extracted-r6o4lv': 'var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)) ', },
                            lyHQDXDIb: { '--extracted-r6o4lv': 'var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)) ', },
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                          ...addPropertyOverrides(
                            {
                              BrtrytM8i: {
                                children: /* @__PURE__ */ _jsx(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx(motion.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO01hdGVyaWFsIFN5bWJvbHMgUm91bmRlZCBSZWd1bGFy',
                                      '--framer-font-family':
                                        '"Material Symbols Rounded Regular", "Material Symbols Rounded Regular Placeholder", sans-serif',
                                      '--framer-font-size': '26px',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)) )',
                                    },
                                    children: 'auto_stories',
                                  },),
                                },),
                                fonts: ['CUSTOM;Material Symbols Rounded Regular',],
                              },
                              jb_nEpI35: {
                                children: /* @__PURE__ */ _jsx(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx(motion.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1NlcXVlbCBTYW5zIE1lZGl1bQ==',
                                      '--framer-font-family': '"Sequel Sans Medium", "Sequel Sans Medium Placeholder", sans-serif',
                                      '--framer-font-size': '14px',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)) )',
                                    },
                                    children: '3',
                                  },),
                                },),
                              },
                              lyHQDXDIb: {
                                children: /* @__PURE__ */ _jsx(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx(motion.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO01hdGVyaWFsIFN5bWJvbHMgUm91bmRlZCBSZWd1bGFy',
                                      '--framer-font-family':
                                        '"Material Symbols Rounded Regular", "Material Symbols Rounded Regular Placeholder", sans-serif',
                                      '--framer-font-size': '26px',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)) )',
                                    },
                                    children: 'groups_2',
                                  },),
                                },),
                                fonts: ['CUSTOM;Material Symbols Rounded Regular',],
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                      },),
                    ],
                  },),
                  /* @__PURE__ */ _jsx(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        style: {
                          '--framer-text-color':
                            'var(--extracted-r6o4lv, var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23)))',
                        },
                        children: 'VIBRANT VITALITY',
                      },),
                    },),
                    className: 'framer-d6mrch',
                    fonts: ['Inter',],
                    layoutDependency,
                    layoutId: 'iGRaXtAP4',
                    style: {
                      '--extracted-r6o4lv': ' var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))',
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                    },
                    variants: {
                      BrtrytM8i: { '--extracted-r6o4lv': 'var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240))', },
                      jb_nEpI35: { '--extracted-r6o4lv': 'var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)) ', },
                      lyHQDXDIb: { '--extracted-r6o4lv': 'var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240))', },
                    },
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                    ...addPropertyOverrides(
                      {
                        BrtrytM8i: {
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.p, {
                              style: {
                                '--font-selector': 'SW50ZXItTWVkaXVt',
                                '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                                '--framer-font-weight': '500',
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)))',
                              },
                              children: 'RANI STORY',
                            },),
                          },),
                          fonts: ['Inter-Medium',],
                        },
                        jb_nEpI35: {
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.p, {
                              style: {
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)) )',
                              },
                              children: 'VIBRANT VITALITY',
                            },),
                          },),
                        },
                        lyHQDXDIb: {
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.p, {
                              style: {
                                '--font-selector': 'SW50ZXItTWVkaXVt',
                                '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                                '--framer-font-weight': '500',
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-aa36031d-f65f-4636-8896-254cc08330fb, rgb(245, 243, 240)))',
                              },
                              children: 'RANI CONSUMER',
                            },),
                          },),
                          fonts: ['Inter-Medium',],
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                ],
              },),
            },),
            /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.p, {
                  style: {
                    '--font-selector': 'Q1VTVE9NO1NlcXVlbCBTYW5zIEJvb2s=',
                    '--framer-font-family': '"Sequel Sans Book", "Sequel Sans Book Placeholder", sans-serif',
                    '--framer-font-size': '12px',
                    '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23)))',
                  },
                  children: 'GROWTH SPACE',
                },),
              },),
              className: 'framer-1ujk38j',
              fonts: ['CUSTOM;Sequel Sans Book',],
              layoutDependency,
              layoutId: 'oaXsWtgmK',
              style: {
                '--extracted-r6o4lv': ' var(--token-1ad6363d-c005-48a9-9ce6-23ed24e0178e, rgb(24, 23, 23))',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
                opacity: 0,
              },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-ZiWnh.framer-jn2e9i, .framer-ZiWnh .framer-jn2e9i { display: block; }',
  '.framer-ZiWnh.framer-13her7v { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
  '.framer-ZiWnh .framer-a9obb7, .framer-ZiWnh .framer-19z786w, .framer-ZiWnh .framer-1tz0sas, .framer-ZiWnh .framer-d6mrch, .framer-ZiWnh .framer-1ujk38j { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-ZiWnh .framer-74t85e, .framer-ZiWnh .framer-13fa8tc, .framer-ZiWnh .framer-1gf1vv5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-ZiWnh .framer-17bapam { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: 38px; justify-content: center; overflow: hidden; padding: 0px 12px 0px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-ZiWnh .framer-1rxvd86, .framer-ZiWnh .framer-cbelsd, .framer-ZiWnh .framer-nr0vv6 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 21px); justify-content: center; overflow: visible; padding: 0px 0px 1px 0px; position: relative; width: 21px; }',
  '.framer-ZiWnh .framer-75erm5, .framer-ZiWnh .framer-1gihfm7, .framer-ZiWnh .framer-beo6qa, .framer-ZiWnh .framer-zpepy1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }',
  '.framer-ZiWnh .framer-1qqjrz3, .framer-ZiWnh .framer-16kfk89 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: 38px; justify-content: center; overflow: hidden; padding: 0px 12px 0px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-ZiWnh .framer-z5hq79 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 23px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ZiWnh.framer-13her7v, .framer-ZiWnh .framer-74t85e, .framer-ZiWnh .framer-17bapam, .framer-ZiWnh .framer-1rxvd86, .framer-ZiWnh .framer-13fa8tc, .framer-ZiWnh .framer-1qqjrz3, .framer-ZiWnh .framer-cbelsd, .framer-ZiWnh .framer-1gf1vv5, .framer-ZiWnh .framer-16kfk89, .framer-ZiWnh .framer-z5hq79, .framer-ZiWnh .framer-nr0vv6 { gap: 0px; } .framer-ZiWnh.framer-13her7v > *, .framer-ZiWnh .framer-74t85e > *, .framer-ZiWnh .framer-1rxvd86 > *, .framer-ZiWnh .framer-13fa8tc > *, .framer-ZiWnh .framer-cbelsd > *, .framer-ZiWnh .framer-1gf1vv5 > *, .framer-ZiWnh .framer-z5hq79 > *, .framer-ZiWnh .framer-nr0vv6 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-ZiWnh.framer-13her7v > :first-child, .framer-ZiWnh .framer-74t85e > :first-child, .framer-ZiWnh .framer-17bapam > :first-child, .framer-ZiWnh .framer-1rxvd86 > :first-child, .framer-ZiWnh .framer-13fa8tc > :first-child, .framer-ZiWnh .framer-1qqjrz3 > :first-child, .framer-ZiWnh .framer-cbelsd > :first-child, .framer-ZiWnh .framer-1gf1vv5 > :first-child, .framer-ZiWnh .framer-16kfk89 > :first-child, .framer-ZiWnh .framer-z5hq79 > :first-child, .framer-ZiWnh .framer-nr0vv6 > :first-child { margin-left: 0px; } .framer-ZiWnh.framer-13her7v > :last-child, .framer-ZiWnh .framer-74t85e > :last-child, .framer-ZiWnh .framer-17bapam > :last-child, .framer-ZiWnh .framer-1rxvd86 > :last-child, .framer-ZiWnh .framer-13fa8tc > :last-child, .framer-ZiWnh .framer-1qqjrz3 > :last-child, .framer-ZiWnh .framer-cbelsd > :last-child, .framer-ZiWnh .framer-1gf1vv5 > :last-child, .framer-ZiWnh .framer-16kfk89 > :last-child, .framer-ZiWnh .framer-z5hq79 > :last-child, .framer-ZiWnh .framer-nr0vv6 > :last-child { margin-right: 0px; } .framer-ZiWnh .framer-17bapam > *, .framer-ZiWnh .framer-1qqjrz3 > *, .framer-ZiWnh .framer-16kfk89 > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } }',
  '.framer-ZiWnh.framer-v-t39myc .framer-13fa8tc, .framer-ZiWnh.framer-v-nd16mq .framer-1gf1vv5, .framer-ZiWnh.framer-v-30e5jn .framer-1gf1vv5 { cursor: unset; }',
  '.framer-ZiWnh.framer-v-nd16mq .framer-16kfk89, .framer-ZiWnh.framer-v-30e5jn .framer-16kfk89 { cursor: unset; gap: 10px; padding: 0px 10px 0px 10px; }',
  '.framer-ZiWnh.framer-v-nd16mq .framer-z5hq79, .framer-ZiWnh.framer-v-30e5jn .framer-z5hq79 { gap: 4px; height: min-content; }',
  '.framer-ZiWnh.framer-v-nd16mq .framer-nr0vv6, .framer-ZiWnh.framer-v-30e5jn .framer-nr0vv6 { height: var(--framer-aspect-ratio-supported, 32px); }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ZiWnh.framer-v-nd16mq .framer-16kfk89, .framer-ZiWnh.framer-v-nd16mq .framer-z5hq79 { gap: 0px; } .framer-ZiWnh.framer-v-nd16mq .framer-16kfk89 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-ZiWnh.framer-v-nd16mq .framer-16kfk89 > :first-child, .framer-ZiWnh.framer-v-nd16mq .framer-z5hq79 > :first-child { margin-left: 0px; } .framer-ZiWnh.framer-v-nd16mq .framer-16kfk89 > :last-child, .framer-ZiWnh.framer-v-nd16mq .framer-z5hq79 > :last-child { margin-right: 0px; } .framer-ZiWnh.framer-v-nd16mq .framer-z5hq79 > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ZiWnh.framer-v-30e5jn .framer-16kfk89, .framer-ZiWnh.framer-v-30e5jn .framer-z5hq79 { gap: 0px; } .framer-ZiWnh.framer-v-30e5jn .framer-16kfk89 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-ZiWnh.framer-v-30e5jn .framer-16kfk89 > :first-child, .framer-ZiWnh.framer-v-30e5jn .framer-z5hq79 > :first-child { margin-left: 0px; } .framer-ZiWnh.framer-v-30e5jn .framer-16kfk89 > :last-child, .framer-ZiWnh.framer-v-30e5jn .framer-z5hq79 > :last-child { margin-right: 0px; } .framer-ZiWnh.framer-v-30e5jn .framer-z5hq79 > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } }',
  '.framer-ZiWnh[data-border="true"]::after, .framer-ZiWnh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var FramerS9kYpxRJ7 = withCSS(Component, css, 'framer-ZiWnh',);
var stdin_default = FramerS9kYpxRJ7;
FramerS9kYpxRJ7.displayName = 'GrowthSpaceMenu';
FramerS9kYpxRJ7.defaultProps = { height: 38, width: 809.5, };
addPropertyControls(FramerS9kYpxRJ7, {
  variant: {
    options: ['d8oVoE6lz', 'EH70jfau6', 'lyHQDXDIb', 'BrtrytM8i', 'jb_nEpI35',],
    optionTitles: ['1', '2', 'Rani', 'RaniHistory', '3',],
    title: 'Variant',
    type: ControlType.Enum,
  },
  YbiQRVlj5: { title: 'on2', type: ControlType.EventHandler, },
  QjJ_BHFuP: { title: 'on1', type: ControlType.EventHandler, },
  ZeMiZXX7_: { title: 'on3', type: ControlType.EventHandler, },
},);
addFonts(FramerS9kYpxRJ7, [{
  explicitInter: true,
  fonts: [{ family: 'Sequel Sans Book', source: 'custom', url: 'https://framerusercontent.com/assets/nB31XIwdticbdnTo1mMBWHZbXg.woff2', }, {
    family: 'Sequel Sans Medium',
    source: 'custom',
    url: 'https://framerusercontent.com/assets/Lv0ruuEbFzy4VlWpSXhlKHClSIA.woff',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2',
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
  }, {
    family: 'Material Symbols Rounded Regular',
    source: 'custom',
    url: 'https://framerusercontent.com/assets/ppdtUSrqevhaAFKwJg4aPYHwdM.woff2',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2',
    weight: '500',
  },],
},], { supportsExplicitInterCodegen: true, },);

// virtual:GrowthSpaceMenu
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var GrowthSpaceMenu_default = stdin_default;
export { GrowthSpaceMenu_default as default, };