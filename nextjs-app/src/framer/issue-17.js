// @ts-nocheck
/* eslint-disable */
'use client';
import { Et, } from './chunk-L3YLG65X.js';
import { defaultEvents, NullState, useIconSelection, } from './chunk-KA64PIU2.js';
import { __export, } from './chunk-MLKGABMK.js';

// https :https://framerusercontent.com/modules/VI2Y7Tu6FqocuVZxMcMX/TOIKCNpdKF03XIWPSvks/TIYDx3GRA.js
import { jsx as _jsx9, jsxs as _jsxs6, } from 'react/jsx-runtime';
import {
  addFonts as addFonts6,
  addPropertyControls as addPropertyControls8,
  ComponentViewportProvider as ComponentViewportProvider4,
  ControlType as ControlType8,
  cx as cx6,
  getFonts as getFonts4,
  getFontsFromSharedStyle as getFontsFromSharedStyle4,
  getLoadingLazyAtYPosition as getLoadingLazyAtYPosition4,
  Image as Image4,
  Link as Link2,
  ResolveLinks,
  RichText as RichText5,
  SVG,
  useComponentViewport as useComponentViewport6,
  useLocaleInfo as useLocaleInfo6,
  useRouter,
  useVariantState as useVariantState6,
  withCSS as withCSS6,
  withMappedReactProps as withMappedReactProps2,
} from 'unframer';
import { LayoutGroup as LayoutGroup7, motion as motion8, MotionConfigContext as MotionConfigContext6, } from 'unframer';
import * as React7 from 'react';

// https :https://framerusercontent.com/modules/B2xAlJLcN0gOnt11mSPw/XVUmpmPn1EPL0dzocT35/Ticker.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import { Children, cloneElement, createRef, useCallback, useEffect, useMemo, useRef, useState, } from 'react';
import { addPropertyControls, ControlType, RenderTarget, } from 'unframer';
import { frame, LayoutGroup, motion, useAnimationFrame, useInView, useMotionValue, useReducedMotion, useTransform, wrap, } from 'unframer';
var MAX_DUPLICATED_ITEMS = 100;
var directionTransformers = {
  left: (offset,) => `translateX(-${offset}px)`,
  right: (offset,) => `translateX(${offset}px)`,
  top: (offset,) => `translateY(-${offset}px)`,
  bottom: (offset,) => `translateY(${offset}px)`,
};
var supportsAcceleratedAnimations = typeof Animation !== 'undefined' && typeof Animation.prototype.updatePlaybackRate === 'function';
function Ticker(props,) {
  let {
    slots,
    gap,
    padding,
    paddingPerSide,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    speed,
    hoverFactor,
    direction,
    alignment,
    sizingOptions,
    fadeOptions,
    style,
  } = props;
  const { fadeContent, overflow, fadeWidth, fadeInset, fadeAlpha, } = fadeOptions;
  const { widthType, heightType, } = sizingOptions;
  const paddingValue = paddingPerSide ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` : `${padding}px`;
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const filteredSlots = slots.filter(Boolean,);
  const numChildren = Children.count(filteredSlots,);
  const hasChildren = numChildren > 0;
  if (direction === true) {
    direction = 'left';
  }
  const isHorizontal = direction === 'left' || direction === 'right';
  const offset = useMotionValue(0,);
  const transformer = directionTransformers[direction];
  const transform = useTransform(offset, transformer,);
  const parentRef = useRef(null,);
  const childrenRef = useMemo(() => {
    return [/* @__PURE__ */ createRef(), /* @__PURE__ */ createRef(),];
  }, [],);
  const [size, setSize,] = useState({ parent: null, children: null, },);
  let clonedChildren = [];
  let dupedChildren = [];
  let duplicateBy = 0;
  let opacity = 0;
  if (isCanvas) {
    duplicateBy = numChildren ? Math.floor(10 / numChildren,) : 0;
    opacity = 1;
  }
  if (!isCanvas && hasChildren && size.parent) {
    duplicateBy = Math.round(size.parent / size.children * 2,) + 1;
    duplicateBy = Math.min(duplicateBy, MAX_DUPLICATED_ITEMS,);
    opacity = 1;
  }
  const measure = useCallback(() => {
    if (hasChildren && parentRef.current) {
      const parentLength = isHorizontal ? parentRef.current.offsetWidth : parentRef.current.offsetHeight;
      const start = childrenRef[0].current ? isHorizontal ? childrenRef[0].current.offsetLeft : childrenRef[0].current.offsetTop : 0;
      const end = childrenRef[1].current
        ? isHorizontal
          ? childrenRef[1].current.offsetLeft + childrenRef[1].current.offsetWidth
          : childrenRef[1].current.offsetTop + childrenRef[1].current.offsetHeight
        : 0;
      const childrenLength = end - start + gap;
      setSize({ parent: parentLength, children: childrenLength, },);
    }
  }, [],);
  const childrenStyles = isCanvas ? { contentVisibility: 'auto', } : {};
  if (hasChildren) {
    if (!isCanvas) {
      let initialResize = useRef(true,);
      useEffect(() => {
        frame.read(measure,);
        return Et(parentRef.current, ({ contentSize, },) => {
          if (!initialResize.current && (contentSize.width || contentSize.height)) {
            frame.read(measure,);
          }
          initialResize.current = false;
        },);
      }, [],);
    }
    clonedChildren = Children.map(filteredSlots, (child, index,) => {
      var _child_props, _child_props1, _child_props2, _child_props3;
      let ref;
      if (index === 0) {
        ref = childrenRef[0];
      }
      if (index === filteredSlots.length - 1) {
        ref = childrenRef[1];
      }
      const size2 = {
        width: widthType ? (_child_props = child.props) === null || _child_props === void 0 ? void 0 : _child_props.width : '100%',
        height: heightType ? (_child_props1 = child.props) === null || _child_props1 === void 0 ? void 0 : _child_props1.height : '100%',
      };
      return /* @__PURE__ */ _jsx(LayoutGroup, {
        inherit: 'id',
        children: /* @__PURE__ */ _jsx('li', {
          ref,
          style: size2,
          children: /* @__PURE__ */ cloneElement(child, {
            style: {
              ...(_child_props2 = child.props) === null || _child_props2 === void 0 ? void 0 : _child_props2.style,
              ...size2,
              flexShrink: 0,
              ...childrenStyles,
            },
            layoutId: child.props.layoutId ? child.props.layoutId + '-original-' + index : void 0,
          }, (_child_props3 = child.props) === null || _child_props3 === void 0 ? void 0 : _child_props3.children,),
        },),
      },);
    },);
  }
  if (!isCanvas) {
    for (let i = 0; i < duplicateBy; i++) {
      dupedChildren = [
        ...dupedChildren,
        ...Children.map(filteredSlots, (child, childIndex,) => {
          var _child_props, _child_props1, _child_props2, _child_props3, _child_props4, _child_props5;
          const size2 = {
            width: widthType ? (_child_props = child.props) === null || _child_props === void 0 ? void 0 : _child_props.width : '100%',
            height: heightType
              ? (_child_props1 = child.props) === null || _child_props1 === void 0 ? void 0 : _child_props1.height
              : '100%',
            willChange: 'transform',
          };
          return /* @__PURE__ */ _jsx(LayoutGroup, {
            inherit: 'id',
            children: /* @__PURE__ */ _jsx('li', {
              style: size2,
              'aria-hidden': true,
              children: /* @__PURE__ */ cloneElement(child, {
                key: i + ' ' + childIndex,
                style: {
                  ...(_child_props2 = child.props) === null || _child_props2 === void 0 ? void 0 : _child_props2.style,
                  width: widthType
                    ? (_child_props3 = child.props) === null || _child_props3 === void 0 ? void 0 : _child_props3.width
                    : '100%',
                  height: heightType
                    ? (_child_props4 = child.props) === null || _child_props4 === void 0 ? void 0 : _child_props4.height
                    : '100%',
                  flexShrink: 0,
                  ...childrenStyles,
                },
                layoutId: child.props.layoutId ? child.props.layoutId + '-dupe-' + i : void 0,
              }, (_child_props5 = child.props) === null || _child_props5 === void 0 ? void 0 : _child_props5.children,),
            }, i + 'li' + childIndex,),
          }, i + 'lg' + childIndex,);
        },),
      ];
    }
  }
  const animateToValue = size.children + size.children * Math.round(size.parent / size.children,);
  const initialTime = useRef(null,);
  const prevTime = useRef(null,);
  const xOrY = useRef(0,);
  const isHover = useRef(false,);
  const isReducedMotion = useReducedMotion();
  const listRef = useRef(null,);
  const animationRef = useRef(null,);
  if (!isCanvas) {
    const isInView = useInView(parentRef,);
    if (supportsAcceleratedAnimations) {
      useEffect(() => {
        if (isReducedMotion || !animateToValue || !speed) {
          return;
        }
        animationRef.current = listRef.current.animate({ transform: [transformer(0,), transformer(animateToValue,),], }, {
          duration: Math.abs(animateToValue,) / speed * 1e3,
          iterations: Infinity,
          easing: 'linear',
        },);
        return () => animationRef.current.cancel();
      }, [hoverFactor, animateToValue, speed,],);
      useEffect(() => {
        if (!animationRef.current) return;
        if (isInView && animationRef.current.playState === 'paused') {
          animationRef.current.play();
        } else if (!isInView && animationRef.current.playState === 'running') {
          animationRef.current.pause();
        }
      }, [isInView,],);
    } else {
      useAnimationFrame((t,) => {
        if (!animateToValue || isReducedMotion || supportsAcceleratedAnimations) {
          return;
        }
        if (initialTime.current === null) {
          initialTime.current = t;
        }
        t = t - initialTime.current;
        const timeSince = prevTime.current === null ? 0 : t - prevTime.current;
        let delta = timeSince * (speed / 1e3);
        if (isHover.current) {
          delta *= hoverFactor;
        }
        xOrY.current += delta;
        xOrY.current = wrap(0, animateToValue, xOrY.current,);
        prevTime.current = t;
        if (!isInView) return;
        offset.set(xOrY.current,);
      },);
    }
  }
  const fadeDirection = isHorizontal ? 'to right' : 'to bottom';
  const fadeWidthStart = fadeWidth / 2;
  const fadeWidthEnd = 100 - fadeWidth / 2;
  const fadeInsetStart = clamp(fadeInset, 0, fadeWidthStart,);
  const fadeInsetEnd = 100 - fadeInset;
  const fadeMask =
    `linear-gradient(${fadeDirection}, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetStart}%, rgba(0, 0, 0, 1) ${fadeWidthStart}%, rgba(0, 0, 0, 1) ${fadeWidthEnd}%, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetEnd}%)`;
  if (!hasChildren) {
    return /* @__PURE__ */ _jsxs('section', {
      style: placeholderStyles,
      children: [
        /* @__PURE__ */ _jsx('div', { style: emojiStyles, children: '\u2728', },),
        /* @__PURE__ */ _jsx('p', { style: titleStyles, children: 'Connect to Content', },),
        /* @__PURE__ */ _jsx('p', { style: subtitleStyles, children: 'Add layers or components to infinitely loop on your page.', },),
      ],
    },);
  }
  return /* @__PURE__ */ _jsx('section', {
    style: {
      ...containerStyle,
      opacity,
      WebkitMaskImage: fadeContent ? fadeMask : void 0,
      MozMaskImage: fadeContent ? fadeMask : void 0,
      maskImage: fadeContent ? fadeMask : void 0,
      overflow: overflow ? 'visible' : 'hidden',
      padding: paddingValue,
    },
    ref: parentRef,
    children: /* @__PURE__ */ _jsxs(motion.ul, {
      ref: listRef,
      style: {
        ...containerStyle,
        gap,
        top: direction === 'bottom' && isValidNumber(animateToValue,) ? -animateToValue : void 0,
        left: direction === 'right' && isValidNumber(animateToValue,) ? -animateToValue : void 0,
        placeItems: alignment,
        position: 'relative',
        flexDirection: isHorizontal ? 'row' : 'column',
        ...style,
        willChange: isCanvas ? 'auto' : 'transform',
        transform: supportsAcceleratedAnimations ? transformer(0,) : transform,
      },
      onMouseEnter: () => {
        isHover.current = true;
        if (animationRef.current) {
          animationRef.current.playbackRate = hoverFactor;
        }
      },
      onMouseLeave: () => {
        isHover.current = false;
        if (animationRef.current) {
          animationRef.current.playbackRate = 1;
        }
      },
      children: [clonedChildren, dupedChildren,],
    },),
  },);
}
Ticker.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: true, heightType: true, },
  fadeOptions: { fadeContent: true, overflow: false, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0, },
  direction: true,
};
addPropertyControls(Ticker, {
  slots: { type: ControlType.Array, title: 'Children', control: { type: ControlType.ComponentInstance, }, },
  speed: { type: ControlType.Number, title: 'Speed', min: 0, max: 1e3, defaultValue: 100, unit: '%', displayStepper: true, step: 5, },
  direction: {
    type: ControlType.Enum,
    title: 'Direction',
    options: ['left', 'right', 'top', 'bottom',],
    optionIcons: ['direction-left', 'direction-right', 'direction-up', 'direction-down',],
    optionTitles: ['Left', 'Right', 'Top', 'Bottom',],
    defaultValue: 'left',
    displaySegmentedControl: true,
  },
  alignment: {
    type: ControlType.Enum,
    title: 'Align',
    options: ['flex-start', 'center', 'flex-end',],
    optionIcons: {
      direction: {
        right: ['align-top', 'align-middle', 'align-bottom',],
        left: ['align-top', 'align-middle', 'align-bottom',],
        top: ['align-left', 'align-center', 'align-right',],
        bottom: ['align-left', 'align-center', 'align-right',],
      },
    },
    defaultValue: 'center',
    displaySegmentedControl: true,
  },
  gap: { type: ControlType.Number, title: 'Gap', },
  padding: {
    title: 'Padding',
    type: ControlType.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: ['Padding', 'Padding per side',],
    valueKeys: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',],
    valueLabels: ['T', 'R', 'B', 'L',],
    min: 0,
  },
  sizingOptions: {
    type: ControlType.Object,
    title: 'Sizing',
    controls: {
      widthType: { type: ControlType.Boolean, title: 'Width', enabledTitle: 'Auto', disabledTitle: 'Stretch', defaultValue: true, },
      heightType: { type: ControlType.Boolean, title: 'Height', enabledTitle: 'Auto', disabledTitle: 'Stretch', defaultValue: true, },
    },
  },
  fadeOptions: {
    type: ControlType.Object,
    title: 'Clipping',
    controls: {
      fadeContent: { type: ControlType.Boolean, title: 'Fade', defaultValue: true, },
      overflow: {
        type: ControlType.Boolean,
        title: 'Overflow',
        enabledTitle: 'Show',
        disabledTitle: 'Hide',
        defaultValue: false,
        hidden(props,) {
          return props.fadeContent === true;
        },
      },
      fadeWidth: {
        type: ControlType.Number,
        title: 'Width',
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: '%',
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
      fadeInset: {
        type: ControlType.Number,
        title: 'Inset',
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: '%',
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
      fadeAlpha: {
        type: ControlType.Number,
        title: 'Opacity',
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
    },
  },
  hoverFactor: {
    type: ControlType.Number,
    title: 'Hover',
    min: 0,
    max: 1,
    unit: 'x',
    defaultValue: 1,
    step: 0.1,
    displayStepper: true,
    description: 'Slows down the speed while you are hovering.',
  },
},);
var containerStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  placeItems: 'center',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  textIndent: 'none',
};
var placeholderStyles = {
  display: 'flex',
  width: '100%',
  height: '100%',
  placeContent: 'center',
  placeItems: 'center',
  flexDirection: 'column',
  color: '#96F',
  background: 'rgba(136, 85, 255, 0.1)',
  fontSize: 11,
  overflow: 'hidden',
  padding: '20px 20px 30px 20px',
};
var emojiStyles = { fontSize: 32, marginBottom: 10, };
var titleStyles = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: 'center', };
var subtitleStyles = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: 'center', };
var clamp = (num, min, max,) => Math.min(Math.max(num, min,), max,);
var isValidNumber = (value,) => typeof value === 'number' && !isNaN(value,);

// https :https://framerusercontent.com/modules/hINGlPO8bTElmCQj88Cm/JugGqEQxTJsYkMjY0oG0/ConversionEvent.js
import { jsx as _jsx2, } from 'react/jsx-runtime';

// https :https://framer.com/m/framer/store.js@^1.0.0
import { useEffect as useEffect2, useState as useState2, } from 'react';
import { Data, useObserveData, } from 'unframer';
function createStore(state1,) {
  const dataStore = Data({ state: Object.freeze({ ...state1, },), },);
  const setDataStore = (newState,) => {
    if (typeof newState === 'function') {
      newState = newState(dataStore.state,);
    }
    dataStore.state = Object.freeze({ ...dataStore.state, ...newState, },);
  };
  let storeState = typeof state1 === 'object' ? Object.freeze({ ...state1, },) : state1;
  const storeSetters = /* @__PURE__ */ new Set();
  const setStoreState = (newState,) => {
    if (typeof newState === 'function') {
      newState = newState(storeState,);
    }
    storeState = typeof newState === 'object' ? Object.freeze({ ...storeState, ...newState, },) : newState;
    storeSetters.forEach((setter,) => setter(storeState,));
  };
  function useStore2() {
    const [state, setState,] = useState2(storeState,);
    useEffect2(() => {
      storeSetters.add(setState,);
      return () => storeSetters.delete(setState,);
    }, [],);
    if (useObserveData() === true) {
      useObserveData();
      return [dataStore.state, setDataStore,];
    } else {
      return [state, setStoreState,];
    }
  }
  return useStore2;
}

// https :https://framerusercontent.com/modules/hINGlPO8bTElmCQj88Cm/JugGqEQxTJsYkMjY0oG0/ConversionEvent.js
import { useEffect as useEffect3, useState as useState3, } from 'react';
var useStore = createStore({ background: '#0099FF', },);
function withCTAClassname(Component8,) {
  return (props,) => {
    return /* @__PURE__ */ _jsx2(Component8, { ...props, className: 'cta', },);
  };
}

// https :https://framerusercontent.com/modules/43EmfvHH62m3lOy74mVg/zGg3MMFAUCpGbz8MxyUM/C4qLxw6HR.js
import { fontStore, } from 'unframer';
fontStore.loadFonts(['Inter-SemiBold',],);
var fonts = [{
  explicitInter: true,
  fonts: [{
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2',
    weight: '600',
  },],
},];
var css = [
  '.framer-caaIJ .framer-styles-preset-18cx44m:not(.rich-text-wrapper), .framer-caaIJ .framer-styles-preset-18cx44m.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-weight: 600; --framer-letter-spacing: -0.04em; --framer-line-height: 110%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }',
  '@media (max-width: 1078px) and (min-width: 810px) { .framer-caaIJ .framer-styles-preset-18cx44m:not(.rich-text-wrapper), .framer-caaIJ .framer-styles-preset-18cx44m.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 42px; --framer-font-style: normal; --framer-font-weight: 600; --framer-letter-spacing: -0.04em; --framer-line-height: 110%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }',
  '@media (max-width: 809px) and (min-width: 0px) { .framer-caaIJ .framer-styles-preset-18cx44m:not(.rich-text-wrapper), .framer-caaIJ .framer-styles-preset-18cx44m.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-weight: 600; --framer-letter-spacing: -0.04em; --framer-line-height: 110%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }',
];
var className = 'framer-caaIJ';

// https :https://framerusercontent.com/modules/p06q8NLZ0RePOqSxQ1GN/cdpQcYJb0b1wCveI9qK5/D9zAP56xH.js
import { fontStore as fontStore2, } from 'unframer';
fontStore2.loadFonts(['Inter',],);
var fonts2 = [{
  explicitInter: true,
  fonts: [{
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
  },],
},];
var css2 = [
  '.framer-3P3Jr .framer-styles-preset-enusn7:not(.rich-text-wrapper), .framer-3P3Jr .framer-styles-preset-enusn7.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 145%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-55167357-4330-40dd-8923-5849e5e24067, #424242); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }',
  '@media (max-width: 1078px) and (min-width: 810px) { .framer-3P3Jr .framer-styles-preset-enusn7:not(.rich-text-wrapper), .framer-3P3Jr .framer-styles-preset-enusn7.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 145%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-55167357-4330-40dd-8923-5849e5e24067, #424242); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }',
  '@media (max-width: 809px) and (min-width: 0px) { .framer-3P3Jr .framer-styles-preset-enusn7:not(.rich-text-wrapper), .framer-3P3Jr .framer-styles-preset-enusn7.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 145%; --framer-paragraph-spacing: 16px; --framer-text-alignment: start; --framer-text-color: var(--token-55167357-4330-40dd-8923-5849e5e24067, #424242); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }',
];
var className2 = 'framer-3P3Jr';

// https :https://framerusercontent.com/modules/215PQYBT2gfBzVYVILbI/J1Uyre2wsoMTfQJy7nl5/KvesxXs63.js
import { fontStore as fontStore3, } from 'unframer';
fontStore3.loadFonts(['Inter-SemiBold', 'Inter-Bold', 'Inter-BoldItalic', 'Inter-SemiBoldItalic',],);
var fonts3 = [{
  explicitInter: true,
  fonts: [{
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/vxBnBhH8768IFAXAb4Qf6wQHKs.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/zSsEuoJdh8mcFVk976C05ZfQr8.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/b8ezwLrN7h2AUoPEENcsTMVJ0.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/mvNEIBLyHbscgHtwfsByjXUz3XY.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/6FI2EneKzM3qBy5foOZXey7coCA.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/qrVgiXNd6RuQjETYQiVQ9nqCk.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/NHHeAKJVP0ZWHk5YZnQQChIsBM.woff2',
    weight: '600',
  },],
},];
var css3 = [
  '.framer-cGE6L .framer-styles-preset-nhj6yu:not(.rich-text-wrapper), .framer-cGE6L .framer-styles-preset-nhj6yu.rich-text-wrapper h2 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.02em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }',
  '@media (max-width: 1078px) and (min-width: 810px) { .framer-cGE6L .framer-styles-preset-nhj6yu:not(.rich-text-wrapper), .framer-cGE6L .framer-styles-preset-nhj6yu.rich-text-wrapper h2 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.02em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }',
  '@media (max-width: 809px) and (min-width: 0px) { .framer-cGE6L .framer-styles-preset-nhj6yu:not(.rich-text-wrapper), .framer-cGE6L .framer-styles-preset-nhj6yu.rich-text-wrapper h2 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.02em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }',
];
var className3 = 'framer-cGE6L';

// https :https://framerusercontent.com/modules/pSmvJELnKkrF5WSbpZIa/LXvfSP0h5noyZVQ13o7W/n0u86onJX.js
import { fontStore as fontStore4, } from 'unframer';
fontStore4.loadFonts(['Inter',],);
var fonts4 = [{
  explicitInter: true,
  fonts: [{
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
  },],
},];
var css4 = [
  '.framer-jYZnJ .framer-styles-preset-14y9vvi:not(.rich-text-wrapper), .framer-jYZnJ .framer-styles-preset-14y9vvi.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 145%; --framer-paragraph-spacing: 16px; --framer-text-alignment: start; --framer-text-color: var(--token-55167357-4330-40dd-8923-5849e5e24067, #424242); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }',
  '@media (max-width: 1078px) and (min-width: 810px) { .framer-jYZnJ .framer-styles-preset-14y9vvi:not(.rich-text-wrapper), .framer-jYZnJ .framer-styles-preset-14y9vvi.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 145%; --framer-paragraph-spacing: 16px; --framer-text-alignment: start; --framer-text-color: var(--token-55167357-4330-40dd-8923-5849e5e24067, #424242); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }',
  '@media (max-width: 809px) and (min-width: 0px) { .framer-jYZnJ .framer-styles-preset-14y9vvi:not(.rich-text-wrapper), .framer-jYZnJ .framer-styles-preset-14y9vvi.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 145%; --framer-paragraph-spacing: 16px; --framer-text-alignment: start; --framer-text-color: var(--token-55167357-4330-40dd-8923-5849e5e24067, #424242); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }',
];
var className4 = 'framer-jYZnJ';

// https :https://framerusercontent.com/modules/fSjr0qJHpUe5CdsI6Lg2/QO655dd1q8kNTGTH75xT/NM8opoDhC.js
import { fontStore as fontStore5, } from 'unframer';
fontStore5.loadFonts(['Inter',],);
var fonts5 = [{
  explicitInter: true,
  fonts: [{
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
  },],
},];
var css5 = [
  '.framer-HAROT .framer-styles-preset-hjr3u4:not(.rich-text-wrapper), .framer-HAROT .framer-styles-preset-hjr3u4.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 145%; --framer-paragraph-spacing: 16px; --framer-text-alignment: start; --framer-text-color: var(--token-55167357-4330-40dd-8923-5849e5e24067, #424242); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }',
  '@media (max-width: 1078px) and (min-width: 810px) { .framer-HAROT .framer-styles-preset-hjr3u4:not(.rich-text-wrapper), .framer-HAROT .framer-styles-preset-hjr3u4.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 145%; --framer-paragraph-spacing: 16px; --framer-text-alignment: start; --framer-text-color: var(--token-55167357-4330-40dd-8923-5849e5e24067, #424242); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }',
  '@media (max-width: 809px) and (min-width: 0px) { .framer-HAROT .framer-styles-preset-hjr3u4:not(.rich-text-wrapper), .framer-HAROT .framer-styles-preset-hjr3u4.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 145%; --framer-paragraph-spacing: 16px; --framer-text-alignment: start; --framer-text-color: var(--token-55167357-4330-40dd-8923-5849e5e24067, #424242); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }',
];
var className5 = 'framer-HAROT';

// https :https://framerusercontent.com/modules/oW4xUsDvku8XpWeUG8ff/KL8MPBgsBn0O2eWaKGDl/ob0AYC2e3.js
import { fontStore as fontStore6, } from 'unframer';
fontStore6.loadFonts(['Inter-SemiBold', 'Inter-Bold', 'Inter-BoldItalic', 'Inter-SemiBoldItalic',],);
var fonts6 = [{
  explicitInter: true,
  fonts: [{
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/vxBnBhH8768IFAXAb4Qf6wQHKs.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/zSsEuoJdh8mcFVk976C05ZfQr8.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/b8ezwLrN7h2AUoPEENcsTMVJ0.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/mvNEIBLyHbscgHtwfsByjXUz3XY.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/6FI2EneKzM3qBy5foOZXey7coCA.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/qrVgiXNd6RuQjETYQiVQ9nqCk.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/NHHeAKJVP0ZWHk5YZnQQChIsBM.woff2',
    weight: '600',
  },],
},];
var css6 = [
  '.framer-BWpaR .framer-styles-preset-1vijcsh:not(.rich-text-wrapper), .framer-BWpaR .framer-styles-preset-1vijcsh.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0.03em; --framer-line-height: 145%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-cd33d90a-ec6a-4a56-8bbb-7b9028284170, #f5c35a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; --framer-text-wrap: balance; }',
  '@media (max-width: 1078px) and (min-width: 810px) { .framer-BWpaR .framer-styles-preset-1vijcsh:not(.rich-text-wrapper), .framer-BWpaR .framer-styles-preset-1vijcsh.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0.03em; --framer-line-height: 145%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-cd33d90a-ec6a-4a56-8bbb-7b9028284170, #f5c35a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; --framer-text-wrap: balance; } }',
  '@media (max-width: 809px) and (min-width: 0px) { .framer-BWpaR .framer-styles-preset-1vijcsh:not(.rich-text-wrapper), .framer-BWpaR .framer-styles-preset-1vijcsh.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0.03em; --framer-line-height: 145%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-cd33d90a-ec6a-4a56-8bbb-7b9028284170, #f5c35a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; --framer-text-wrap: balance; } }',
];
var className6 = 'framer-BWpaR';

// https :https://framerusercontent.com/modules/kFp95mNYELgEVqKkw1Dv/CwOS425h2HXmoJUMcYjF/Otvos4bwu.js
import { fontStore as fontStore7, } from 'unframer';
fontStore7.loadFonts(['Inter-Medium', 'Inter-Bold', 'Inter-BoldItalic', 'Inter-MediumItalic',],);
var fonts7 = [{
  explicitInter: true,
  fonts: [{
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
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/khkJkwSL66WFg8SX6Wa726c.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/0E7IMbDzcGABpBwwqNEt60wU0w.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/JEXmejW8mXOYMtt0hyRg811kHac.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/ksvR4VsLksjpSwnC2fPgHRNMw.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2',
    weight: '500',
  },],
},];
var css7 = [
  '.framer-CuGY4 .framer-styles-preset-11ld60o:not(.rich-text-wrapper), .framer-CuGY4 .framer-styles-preset-11ld60o.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 145%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-55167357-4330-40dd-8923-5849e5e24067, #424242); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }',
  '@media (max-width: 1078px) and (min-width: 810px) { .framer-CuGY4 .framer-styles-preset-11ld60o:not(.rich-text-wrapper), .framer-CuGY4 .framer-styles-preset-11ld60o.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 145%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-55167357-4330-40dd-8923-5849e5e24067, #424242); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }',
  '@media (max-width: 809px) and (min-width: 0px) { .framer-CuGY4 .framer-styles-preset-11ld60o:not(.rich-text-wrapper), .framer-CuGY4 .framer-styles-preset-11ld60o.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 145%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-55167357-4330-40dd-8923-5849e5e24067, #424242); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }',
];
var className7 = 'framer-CuGY4';

// https :https://framerusercontent.com/modules/xkXIRppwC3dqPoVD9iB9/CdSZMVq76shfRAIta3Ao/uR_FUI8ZK.js
import { fontStore as fontStore8, } from 'unframer';
fontStore8.loadFonts([],);
var fonts8 = [{ explicitInter: true, fonts: [], },];
var css8 = [
  '.framer-C5MEE .framer-styles-preset-5c8bei:not(.rich-text-wrapper), .framer-C5MEE .framer-styles-preset-5c8bei.rich-text-wrapper a { --framer-link-current-text-color: var(--token-cd33d90a-ec6a-4a56-8bbb-7b9028284170, #f5c35a) /* {"name":"Secondary"} */; --framer-link-current-text-decoration: none; --framer-link-hover-text-color: var(--token-cd33d90a-ec6a-4a56-8bbb-7b9028284170, #f5c35a) /* {"name":"Secondary"} */; --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, #ffffff); --framer-link-text-decoration: none; }',
];
var className8 = 'framer-C5MEE';

// https :https://framerusercontent.com/modules/oP5kmsHlQbFfgjnbmAKR/STmC6fU0ZoEgVFZgLoTk/vS6MrDfuH.js
import { fontStore as fontStore9, } from 'unframer';
fontStore9.loadFonts(['Inter-Medium', 'Inter-Bold', 'Inter-BoldItalic', 'Inter-MediumItalic',],);
var fonts9 = [{
  explicitInter: true,
  fonts: [{
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
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/khkJkwSL66WFg8SX6Wa726c.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/0E7IMbDzcGABpBwwqNEt60wU0w.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/JEXmejW8mXOYMtt0hyRg811kHac.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/ksvR4VsLksjpSwnC2fPgHRNMw.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'italic',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2',
    weight: '500',
  },],
},];
var css9 = [
  '.framer-cZnRN .framer-styles-preset-1063jmz:not(.rich-text-wrapper), .framer-cZnRN .framer-styles-preset-1063jmz.rich-text-wrapper h3 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 130%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
  '@media (max-width: 1078px) and (min-width: 810px) { .framer-cZnRN .framer-styles-preset-1063jmz:not(.rich-text-wrapper), .framer-cZnRN .framer-styles-preset-1063jmz.rich-text-wrapper h3 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 130%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  '@media (max-width: 809px) and (min-width: 0px) { .framer-cZnRN .framer-styles-preset-1063jmz:not(.rich-text-wrapper), .framer-cZnRN .framer-styles-preset-1063jmz.rich-text-wrapper h3 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 130%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
];
var className9 = 'framer-cZnRN';

// https :https://framerusercontent.com/modules/9mGnKOZ7G7r9HueAPUgw/qTHe9va2asvhgq5kPXkp/Dfod75fml.js
import { jsx as _jsx3, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType2,
  cx,
  getLoadingLazyAtYPosition,
  Image,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var cycleOrder = ['OlzSNPhAj', 'B_4IiMThi',];
var serializationHash = 'framer-jSoTG';
var variantClassNames = { B_4IiMThi: 'framer-v-15daazc', OlzSNPhAj: 'framer-v-1nqw8p9', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: 'spring', };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion2.create(React.Fragment,);
var humanReadableVariantMap = { dark: 'OlzSNPhAj', light: 'B_4IiMThi', };
var getProps = ({ height, id, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'OlzSNPhAj',
  };
};
var createLayoutDependency = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className10, layoutId, variant, ...restProps } = getProps(props,);
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
  } = useVariantState({ cycleOrder, defaultVariant: 'OlzSNPhAj', variant, variantClassNames, },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx3(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx3(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx3(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsx3(motion2.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1nqw8p9', className10, classNames,),
          'data-framer-name': 'dark',
          layoutDependency,
          layoutId: 'OlzSNPhAj',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides({ B_4IiMThi: { 'data-framer-name': 'light', }, }, baseVariant, gestureVariant,),
          children: /* @__PURE__ */ _jsx3(Image, {
            as: 'figure',
            background: {
              alt: 'Wrike',
              fit: 'fit',
              intrinsicHeight: 100,
              intrinsicWidth: 146,
              loading: getLoadingLazyAtYPosition(
                ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                  (0 +
                    (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 40) - 0 -
                        (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 40) - 0) *
                          1) / 2),
              ),
              pixelHeight: 222,
              pixelWidth: 900,
              positionX: 'center',
              positionY: 'center',
              src: 'https://framerusercontent.com/images/sC7sqtoEgAiXaxC1U8ESXTHY.png',
            },
            className: 'framer-1r8cu6h',
            'data-framer-name': 'Logo',
            layoutDependency,
            layoutId: 'KuhlzHOzO',
            ...addPropertyOverrides(
              {
                B_4IiMThi: {
                  background: {
                    alt: 'Wrike',
                    fit: 'fit',
                    intrinsicHeight: 100,
                    intrinsicWidth: 146,
                    loading: getLoadingLazyAtYPosition(
                      ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                        (0 +
                          (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 40) - 0 -
                              (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 40) -
                                  0) * 1) / 2),
                    ),
                    pixelHeight: 74,
                    pixelWidth: 300,
                    positionX: 'center',
                    positionY: 'center',
                    src: 'https://framerusercontent.com/images/ETXas23kwB2pxkdG6E42Kk6ut8.png',
                  },
                },
              },
              baseVariant,
              gestureVariant,
            ),
          },),
        },),
      },),
    },),
  },);
},);
var css10 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-jSoTG.framer-1a7yb1r, .framer-jSoTG .framer-1a7yb1r { display: block; }',
  '.framer-jSoTG.framer-1nqw8p9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 162px; }',
  '.framer-jSoTG .framer-1r8cu6h { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-jSoTG.framer-1nqw8p9 { gap: 0px; } .framer-jSoTG.framer-1nqw8p9 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-jSoTG.framer-1nqw8p9 > :first-child { margin-left: 0px; } .framer-jSoTG.framer-1nqw8p9 > :last-child { margin-right: 0px; } }',
];
var FramerDfod75fml = withCSS(Component, css10, 'framer-jSoTG',);
var stdin_default = FramerDfod75fml;
FramerDfod75fml.displayName = 'Logo';
FramerDfod75fml.defaultProps = { height: 40, width: 162, };
addPropertyControls2(FramerDfod75fml, {
  variant: { options: ['OlzSNPhAj', 'B_4IiMThi',], optionTitles: ['dark', 'light',], title: 'Variant', type: ControlType2.Enum, },
},);
addFonts(FramerDfod75fml, [{ explicitInter: true, fonts: [], },], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/25VHiYFb6kH7eGYZ5C4T/K9gBezzy7DbOB05tuo32/DgNoyF9cS.js
import { jsx as _jsx6, jsxs as _jsxs3, } from 'react/jsx-runtime';
import {
  addFonts as addFonts3,
  addPropertyControls as addPropertyControls5,
  ComponentViewportProvider as ComponentViewportProvider2,
  ControlType as ControlType5,
  cx as cx3,
  getFonts as getFonts2,
  getFontsFromSharedStyle,
  getLoadingLazyAtYPosition as getLoadingLazyAtYPosition2,
  Image as Image2,
  RichText as RichText2,
  useComponentViewport as useComponentViewport3,
  useLocaleInfo as useLocaleInfo3,
  useVariantState as useVariantState3,
  withCSS as withCSS3,
  withMappedReactProps,
} from 'unframer';
import { LayoutGroup as LayoutGroup4, motion as motion5, MotionConfigContext as MotionConfigContext3, } from 'unframer';
import * as React4 from 'react';

// https :https://framerusercontent.com/modules/scY2fc6SlmvxLBxWYpSm/IdJRu7l6cEpLDdf78tPv/peihCD8_0.js
var peihCD8_0_exports = {};
__export(peihCD8_0_exports, {
  __FramerMetadata__: () => __FramerMetadata__,
  default: () => stdin_default2,
},);
import { jsx as _jsx5, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls4,
  ComponentViewportProvider,
  ControlType as ControlType4,
  cx as cx2,
  getFonts,
  Link,
  RichText,
  useComponentViewport as useComponentViewport2,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'unframer';
import { LayoutGroup as LayoutGroup3, motion as motion4, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React3 from 'react';

// https :https://framerusercontent.com/modules/tYScH7LTqUtz5KUaUAYP/p8dptk4UIND8hbFWz9V7/Phosphor.js
import { jsx as _jsx4, } from 'react/jsx-runtime';
import * as React2 from 'react';
import { useEffect as useEffect4, useRef as useRef3, useState as useState4, } from 'react';
import { addPropertyControls as addPropertyControls3, ControlType as ControlType3, RenderTarget as RenderTarget2, } from 'unframer';
import { motion as motion3, } from 'unframer';

// https :https://framer.com/m/phosphor-icons/House.js@0.0.57
var Component2;
var IconInner;
var Icon = (React8,) => {
  if (!Component2) {
    Component2 = /* @__PURE__ */ new Map([
      [
        'bold',
        /* @__PURE__ */ React8.createElement(
          React8.Fragment,
          null,
          /* @__PURE__ */ React8.createElement('path', {
            d: 'M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z',
          },),
        ),
      ],
      [
        'duotone',
        /* @__PURE__ */ React8.createElement(
          React8.Fragment,
          null,
          /* @__PURE__ */ React8.createElement(
            'path',
            {
              d: 'M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z',
              opacity: '0.2',
            },
          ),
          /* @__PURE__ */ React8.createElement('path', {
            d: 'M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z',
          },),
        ),
      ],
      [
        'fill',
        /* @__PURE__ */ React8.createElement(
          React8.Fragment,
          null,
          /* @__PURE__ */ React8.createElement('path', {
            d: 'M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z',
          },),
        ),
      ],
      [
        'light',
        /* @__PURE__ */ React8.createElement(
          React8.Fragment,
          null,
          /* @__PURE__ */ React8.createElement('path', {
            d: 'M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z',
          },),
        ),
      ],
      [
        'regular',
        /* @__PURE__ */ React8.createElement(
          React8.Fragment,
          null,
          /* @__PURE__ */ React8.createElement('path', {
            d: 'M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z',
          },),
        ),
      ],
      [
        'thin',
        /* @__PURE__ */ React8.createElement(
          React8.Fragment,
          null,
          /* @__PURE__ */ React8.createElement('path', {
            d: 'M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z',
          },),
        ),
      ],
    ],);
    IconInner = React8.forwardRef((props, ref,) =>
      /* @__PURE__ */ React8.createElement('g', { ref, ...props, }, Component2.get(props.weight,),)
    );
  }
  return IconInner;
};
var House_default = Icon;

// https :https://framerusercontent.com/modules/tYScH7LTqUtz5KUaUAYP/p8dptk4UIND8hbFWz9V7/Phosphor.js
var iconKeys = [
  'Acorn',
  'AddressBook',
  'AddressBookTabs',
  'AirTrafficControl',
  'Airplane',
  'AirplaneInFlight',
  'AirplaneLanding',
  'AirplaneTakeoff',
  'AirplaneTaxiing',
  'AirplaneTilt',
  'Airplay',
  'Alarm',
  'Alien',
  'AlignBottom',
  'AlignBottomSimple',
  'AlignCenterVertical',
  'AlignLeft',
  'AlignLeftSimple',
  'AlignRight',
  'AlignRightSimple',
  'AlignTop',
  'AlignTopSimple',
  'AmazonLogo',
  'Ambulance',
  'Anchor',
  'AnchorSimple',
  'AndroidLogo',
  'Angle',
  'AngularLogo',
  'Aperture',
  'AppStoreLogo',
  'AppWindow',
  'AppleLogo',
  'ApplePodcastsLogo',
  'ApproximateEquals',
  'Archive',
  'ArchiveBox',
  'ArchiveTray',
  'Armchair',
  'ArrowArcLeft',
  'ArrowArcRight',
  'ArrowBendDownLeft',
  'ArrowBendDownRight',
  'ArrowBendLeftDown',
  'ArrowBendLeftUp',
  'ArrowBendRightDown',
  'ArrowBendRightUp',
  'ArrowBendUpLeft',
  'ArrowBendUpRight',
  'ArrowCircleDown',
  'ArrowCircleDownLeft',
  'ArrowCircleDownRight',
  'ArrowCircleLeft',
  'ArrowCircleRight',
  'ArrowCircleUp',
  'ArrowCircleUpLeft',
  'ArrowCircleUpRight',
  'ArrowClockwise',
  'ArrowDown',
  'ArrowDownLeft',
  'ArrowDownRight',
  'ArrowElbowDownLeft',
  'ArrowElbowDownRight',
  'ArrowElbowLeft',
  'ArrowElbowLeftDown',
  'ArrowElbowLeftUp',
  'ArrowElbowRight',
  'ArrowElbowRightDown',
  'ArrowElbowRightUp',
  'ArrowElbowUpLeft',
  'ArrowElbowUpRight',
  'ArrowFatDown',
  'ArrowFatLeft',
  'ArrowFatLineDown',
  'ArrowFatLineLeft',
  'ArrowFatLineRight',
  'ArrowFatLineUp',
  'ArrowFatLinesDown',
  'ArrowFatLinesLeft',
  'ArrowFatLinesRight',
  'ArrowFatLinesUp',
  'ArrowFatRight',
  'ArrowFatUp',
  'ArrowLeft',
  'ArrowLineDown',
  'ArrowLineDownLeft',
  'ArrowLineDownRight',
  'ArrowLineLeft',
  'ArrowLineRight',
  'ArrowLineUp',
  'ArrowLineUpLeft',
  'ArrowLineUpRight',
  'ArrowRight',
  'ArrowSquareDown',
  'ArrowSquareDownLeft',
  'ArrowSquareDownRight',
  'ArrowSquareIn',
  'ArrowSquareLeft',
  'ArrowSquareOut',
  'ArrowSquareRight',
  'ArrowSquareUp',
  'ArrowSquareUpLeft',
  'ArrowSquareUpRight',
  'ArrowUDownLeft',
  'ArrowUDownRight',
  'ArrowULeftDown',
  'ArrowULeftUp',
  'ArrowURightDown',
  'ArrowURightUp',
  'ArrowUUpLeft',
  'ArrowUUpRight',
  'ArrowUp',
  'ArrowUpLeft',
  'ArrowUpRight',
  'ArrowsClockwise',
  'ArrowsDownUp',
  'ArrowsHorizontal',
  'ArrowsIn',
  'ArrowsInCardinal',
  'ArrowsInLineVertical',
  'ArrowsInSimple',
  'ArrowsLeftRight',
  'ArrowsMerge',
  'ArrowsOut',
  'ArrowsOutCardinal',
  'ArrowsOutSimple',
  'ArrowsSplit',
  'ArrowsVertical',
  'Article',
  'ArticleMedium',
  'ArticleNyTimes',
  'Asclepius',
  'Asterisk',
  'AsteriskSimple',
  'At',
  'Atom',
  'Avocado',
  'Axe',
  'Baby',
  'BabyCarriage',
  'Backpack',
  'Backspace',
  'Bag',
  'BagSimple',
  'Balloon',
  'Bandaids',
  'Bank',
  'Barbell',
  'Barcode',
  'Barn',
  'Barricade',
  'Baseball',
  'BaseballCap',
  'BaseballHelmet',
  'Basket',
  'Basketball',
  'Bathtub',
  'BatteryCharging',
  'BatteryEmpty',
  'BatteryFull',
  'BatteryHigh',
  'BatteryLow',
  'BatteryMedium',
  'BatteryPlus',
  'BatteryPlusVertical',
  'BatteryVerticalEmpty',
  'BatteryVerticalFull',
  'BatteryVerticalHigh',
  'BatteryVerticalLow',
  'BatteryWarning',
  'BeachBall',
  'Beanie',
  'Bed',
  'BeerBottle',
  'BeerStein',
  'BehanceLogo',
  'Bell',
  'BellRinging',
  'BellSimple',
  'BellSimpleRinging',
  'BellSimpleSlash',
  'BellSimpleZ',
  'BellSlash',
  'BellZ',
  'Belt',
  'BezierCurve',
  'Bicycle',
  'Binary',
  'Binoculars',
  'Biohazard',
  'Bird',
  'Blueprint',
  'Bluetooth',
  'BluetoothConnected',
  'BluetoothSlash',
  'BluetoothX',
  'Boat',
  'Bomb',
  'Bone',
  'Book',
  'BookBookmark',
  'BookOpen',
  'BookOpenText',
  'BookOpenUser',
  'BookUser',
  'Bookmark',
  'BookmarkSimple',
  'Bookmarks',
  'BookmarksSimple',
  'Books',
  'Boot',
  'Boules',
  'BoundingBox',
  'BowlFood',
  'BowlSteam',
  'BowlingBall',
  'BoxArrowDown',
  'BoxArrowUp',
  'BoxingGlove',
  'BracketsAngle',
  'BracketsCurly',
  'BracketsRound',
  'BracketsSquare',
  'Brain',
  'Brandy',
  'Bread',
  'Bridge',
  'Briefcase',
  'BriefcaseMetal',
  'Broadcast',
  'Broom',
  'Browser',
  'Browsers',
  'Bug',
  'BugBeetle',
  'BugDroid',
  'Building',
  'BuildingApartment',
  'BuildingOffice',
  'Buildings',
  'Bulldozer',
  'Bus',
  'Butterfly',
  'CableCar',
  'Cactus',
  'Cake',
  'Calculator',
  'Calendar',
  'CalendarBlank',
  'CalendarCheck',
  'CalendarDot',
  'CalendarDots',
  'CalendarHeart',
  'CalendarMinus',
  'CalendarPlus',
  'CalendarSlash',
  'CalendarStar',
  'CalendarX',
  'CallBell',
  'Camera',
  'CameraPlus',
  'CameraRotate',
  'CameraSlash',
  'Campfire',
  'Car',
  'CarBattery',
  'CarProfile',
  'CarSimple',
  'Cardholder',
  'Cards',
  'CardsThree',
  'CaretCircleDoubleUp',
  'CaretCircleDown',
  'CaretCircleLeft',
  'CaretCircleRight',
  'CaretCircleUp',
  'CaretCircleUpDown',
  'CaretDoubleDown',
  'CaretDoubleLeft',
  'CaretDoubleRight',
  'CaretDoubleUp',
  'CaretDown',
  'CaretLeft',
  'CaretLineDown',
  'CaretLineLeft',
  'CaretLineRight',
  'CaretLineUp',
  'CaretRight',
  'CaretUp',
  'CaretUpDown',
  'Carrot',
  'CashRegister',
  'CassetteTape',
  'CastleTurret',
  'Cat',
  'CellSignalFull',
  'CellSignalHigh',
  'CellSignalLow',
  'CellSignalMedium',
  'CellSignalNone',
  'CellSignalSlash',
  'CellSignalX',
  'CellTower',
  'Certificate',
  'Chair',
  'Chalkboard',
  'ChalkboardSimple',
  'ChalkboardTeacher',
  'Champagne',
  'ChargingStation',
  'ChartBar',
  'ChartBarHorizontal',
  'ChartDonut',
  'ChartLine',
  'ChartLineDown',
  'ChartLineUp',
  'ChartPie',
  'ChartPieSlice',
  'ChartPolar',
  'ChartScatter',
  'Chat',
  'ChatCentered',
  'ChatCenteredDots',
  'ChatCenteredSlash',
  'ChatCenteredText',
  'ChatCircle',
  'ChatCircleDots',
  'ChatCircleSlash',
  'ChatCircleText',
  'ChatDots',
  'ChatSlash',
  'ChatTeardrop',
  'ChatTeardropDots',
  'ChatTeardropSlash',
  'ChatTeardropText',
  'ChatText',
  'Chats',
  'ChatsCircle',
  'ChatsTeardrop',
  'Check',
  'CheckCircle',
  'CheckFat',
  'CheckSquare',
  'CheckSquareOffset',
  'Checkerboard',
  'Checks',
  'Cheers',
  'Cheese',
  'ChefHat',
  'Cherries',
  'Church',
  'Cigarette',
  'CigaretteSlash',
  'Circle',
  'CircleDashed',
  'CircleHalf',
  'CircleHalfTilt',
  'CircleNotch',
  'CirclesFour',
  'CirclesThree',
  'CirclesThreePlus',
  'Circuitry',
  'City',
  'Clipboard',
  'ClipboardText',
  'Clock',
  'ClockAfternoon',
  'ClockClockwise',
  'ClockCountdown',
  'ClockUser',
  'ClosedCaptioning',
  'Cloud',
  'CloudArrowDown',
  'CloudArrowUp',
  'CloudCheck',
  'CloudFog',
  'CloudLightning',
  'CloudMoon',
  'CloudRain',
  'CloudSlash',
  'CloudSnow',
  'CloudSun',
  'CloudWarning',
  'CloudX',
  'Clover',
  'Club',
  'CoatHanger',
  'CodaLogo',
  'Code',
  'CodeBlock',
  'CodeSimple',
  'CodepenLogo',
  'CodesandboxLogo',
  'Coffee',
  'CoffeeBean',
  'Coin',
  'CoinVertical',
  'Coins',
  'Columns',
  'ColumnsPlusLeft',
  'ColumnsPlusRight',
  'Command',
  'Compass',
  'CompassRose',
  'CompassTool',
  'ComputerTower',
  'Confetti',
  'ContactlessPayment',
  'Control',
  'Cookie',
  'CookingPot',
  'Copy',
  'CopySimple',
  'Copyleft',
  'Copyright',
  'CornersIn',
  'CornersOut',
  'Couch',
  'CourtBasketball',
  'Cow',
  'CowboyHat',
  'Cpu',
  'Crane',
  'CraneTower',
  'CreditCard',
  'Cricket',
  'Crop',
  'Cross',
  'Crosshair',
  'CrosshairSimple',
  'Crown',
  'CrownCross',
  'CrownSimple',
  'Cube',
  'CubeFocus',
  'CubeTransparent',
  'CurrencyBtc',
  'CurrencyCircleDollar',
  'CurrencyCny',
  'CurrencyDollar',
  'CurrencyDollarSimple',
  'CurrencyEth',
  'CurrencyEur',
  'CurrencyGbp',
  'CurrencyInr',
  'CurrencyJpy',
  'CurrencyKrw',
  'CurrencyKzt',
  'CurrencyNgn',
  'CurrencyRub',
  'Cursor',
  'CursorClick',
  'CursorText',
  'Cylinder',
  'Database',
  'Desk',
  'Desktop',
  'DesktopTower',
  'Detective',
  'DevToLogo',
  'DeviceMobile',
  'DeviceMobileCamera',
  'DeviceMobileSlash',
  'DeviceMobileSpeaker',
  'DeviceRotate',
  'DeviceTablet',
  'DeviceTabletCamera',
  'DeviceTabletSpeaker',
  'Devices',
  'Diamond',
  'DiamondsFour',
  'DiceFive',
  'DiceFour',
  'DiceOne',
  'DiceSix',
  'DiceThree',
  'DiceTwo',
  'Disc',
  'DiscoBall',
  'DiscordLogo',
  'Divide',
  'Dna',
  'Dog',
  'Door',
  'DoorOpen',
  'Dot',
  'DotOutline',
  'DotsNine',
  'DotsSix',
  'DotsSixVertical',
  'DotsThree',
  'DotsThreeCircle',
  'DotsThreeOutline',
  'DotsThreeVertical',
  'Download',
  'DownloadSimple',
  'Dress',
  'Dresser',
  'DribbbleLogo',
  'Drone',
  'Drop',
  'DropHalf',
  'DropHalfBottom',
  'DropSimple',
  'DropSlash',
  'DropboxLogo',
  'Ear',
  'EarSlash',
  'Egg',
  'EggCrack',
  'Eject',
  'EjectSimple',
  'Elevator',
  'Empty',
  'Engine',
  'Envelope',
  'EnvelopeOpen',
  'EnvelopeSimple',
  'EnvelopeSimpleOpen',
  'Equalizer',
  'Equals',
  'Eraser',
  'EscalatorDown',
  'EscalatorUp',
  'Exam',
  'ExclamationMark',
  'Exclude',
  'ExcludeSquare',
  'Export',
  'Eye',
  'EyeClosed',
  'EyeSlash',
  'Eyedropper',
  'EyedropperSample',
  'Eyeglasses',
  'Eyes',
  'FaceMask',
  'FacebookLogo',
  'Factory',
  'Faders',
  'FadersHorizontal',
  'FalloutShelter',
  'Fan',
  'Farm',
  'FastForward',
  'FastForwardCircle',
  'Feather',
  'FediverseLogo',
  'FigmaLogo',
  'File',
  'FileArchive',
  'FileArrowDown',
  'FileArrowUp',
  'FileAudio',
  'FileC',
  'FileCloud',
  'FileCode',
  'FileCpp',
  'FileCss',
  'FileCsv',
  'FileDashed',
  'FileDoc',
  'FileHtml',
  'FileImage',
  'FileIni',
  'FileJpg',
  'FileJs',
  'FileJsx',
  'FileLock',
  'FileMagnifyingGlass',
  'FileMd',
  'FileMinus',
  'FilePdf',
  'FilePlus',
  'FilePng',
  'FilePpt',
  'FilePy',
  'FileRs',
  'FileSql',
  'FileSvg',
  'FileText',
  'FileTs',
  'FileTsx',
  'FileTxt',
  'FileVideo',
  'FileVue',
  'FileX',
  'FileXls',
  'FileZip',
  'Files',
  'FilmReel',
  'FilmScript',
  'FilmSlate',
  'FilmStrip',
  'Fingerprint',
  'FingerprintSimple',
  'FinnTheHuman',
  'Fire',
  'FireExtinguisher',
  'FireSimple',
  'FireTruck',
  'FirstAid',
  'FirstAidKit',
  'Fish',
  'FishSimple',
  'Flag',
  'FlagBanner',
  'FlagBannerFold',
  'FlagCheckered',
  'FlagPennant',
  'Flame',
  'Flashlight',
  'Flask',
  'FlipHorizontal',
  'FlipVertical',
  'FloppyDisk',
  'FloppyDiskBack',
  'FlowArrow',
  'Flower',
  'FlowerLotus',
  'FlowerTulip',
  'FlyingSaucer',
  'Folder',
  'FolderDashed',
  'FolderLock',
  'FolderMinus',
  'FolderNotch',
  'FolderNotchMinus',
  'FolderNotchOpen',
  'FolderNotchPlus',
  'FolderOpen',
  'FolderPlus',
  'FolderSimple',
  'FolderSimpleDashed',
  'FolderSimpleLock',
  'FolderSimpleMinus',
  'FolderSimplePlus',
  'FolderSimpleStar',
  'FolderSimpleUser',
  'FolderStar',
  'FolderUser',
  'Folders',
  'Football',
  'FootballHelmet',
  'Footprints',
  'ForkKnife',
  'FourK',
  'FrameCorners',
  'FramerLogo',
  'Function',
  'Funnel',
  'FunnelSimple',
  'FunnelSimpleX',
  'FunnelX',
  'GameController',
  'Garage',
  'GasCan',
  'GasPump',
  'Gauge',
  'Gavel',
  'Gear',
  'GearFine',
  'GearSix',
  'GenderFemale',
  'GenderIntersex',
  'GenderMale',
  'GenderNeuter',
  'GenderNonbinary',
  'GenderTransgender',
  'Ghost',
  'Gif',
  'Gift',
  'GitBranch',
  'GitCommit',
  'GitDiff',
  'GitFork',
  'GitMerge',
  'GitPullRequest',
  'GithubLogo',
  'GitlabLogo',
  'GitlabLogoSimple',
  'Globe',
  'GlobeHemisphereEast',
  'GlobeHemisphereWest',
  'GlobeSimple',
  'GlobeSimpleX',
  'GlobeStand',
  'GlobeX',
  'Goggles',
  'Golf',
  'GoodreadsLogo',
  'GoogleCardboardLogo',
  'GoogleChromeLogo',
  'GoogleDriveLogo',
  'GoogleLogo',
  'GooglePhotosLogo',
  'GooglePlayLogo',
  'GooglePodcastsLogo',
  'Gps',
  'GpsFix',
  'GpsSlash',
  'Gradient',
  'GraduationCap',
  'Grains',
  'GrainsSlash',
  'Graph',
  'GraphicsCard',
  'GreaterThan',
  'GreaterThanOrEqual',
  'GridFour',
  'GridNine',
  'Guitar',
  'HairDryer',
  'Hamburger',
  'Hammer',
  'Hand',
  'HandArrowDown',
  'HandArrowUp',
  'HandCoins',
  'HandDeposit',
  'HandEye',
  'HandFist',
  'HandGrabbing',
  'HandHeart',
  'HandPalm',
  'HandPeace',
  'HandPointing',
  'HandSoap',
  'HandSwipeLeft',
  'HandSwipeRight',
  'HandTap',
  'HandWaving',
  'HandWithdraw',
  'Handbag',
  'HandbagSimple',
  'HandsClapping',
  'HandsPraying',
  'Handshake',
  'HardDrive',
  'HardDrives',
  'HardHat',
  'Hash',
  'HashStraight',
  'HeadCircuit',
  'Headlights',
  'Headphones',
  'Headset',
  'Heart',
  'HeartBreak',
  'HeartHalf',
  'HeartStraight',
  'HeartStraightBreak',
  'Heartbeat',
  'Hexagon',
  'HighDefinition',
  'HighHeel',
  'Highlighter',
  'HighlighterCircle',
  'Hockey',
  'Hoodie',
  'Horse',
  'Hospital',
  'Hourglass',
  'HourglassHigh',
  'HourglassLow',
  'HourglassMedium',
  'HourglassSimple',
  'HourglassSimpleHigh',
  'HourglassSimpleLow',
  'House',
  'HouseLine',
  'HouseSimple',
  'Hurricane',
  'IceCream',
  'IdentificationBadge',
  'IdentificationCard',
  'Image',
  'ImageBroken',
  'ImageSquare',
  'Images',
  'ImagesSquare',
  'Infinity',
  'Info',
  'InstagramLogo',
  'Intersect',
  'IntersectSquare',
  'IntersectThree',
  'Intersection',
  'Invoice',
  'Island',
  'Jar',
  'JarLabel',
  'Jeep',
  'Joystick',
  'Kanban',
  'Key',
  'KeyReturn',
  'Keyboard',
  'Keyhole',
  'Knife',
  'Ladder',
  'LadderSimple',
  'Lamp',
  'LampPendant',
  'Laptop',
  'Lasso',
  'LastfmLogo',
  'Layout',
  'Leaf',
  'Lectern',
  'Lego',
  'LegoSmiley',
  'LessThan',
  'LessThanOrEqual',
  'LetterCircleH',
  'LetterCircleP',
  'LetterCircleV',
  'Lifebuoy',
  'Lightbulb',
  'LightbulbFilament',
  'Lighthouse',
  'Lightning',
  'LightningA',
  'LightningSlash',
  'LineSegment',
  'LineSegments',
  'LineVertical',
  'Link',
  'LinkBreak',
  'LinkSimple',
  'LinkSimpleBreak',
  'LinkSimpleHorizontal',
  'LinkedinLogo',
  'LinktreeLogo',
  'LinuxLogo',
  'List',
  'ListBullets',
  'ListChecks',
  'ListDashes',
  'ListHeart',
  'ListMagnifyingGlass',
  'ListNumbers',
  'ListPlus',
  'ListStar',
  'Lock',
  'LockKey',
  'LockKeyOpen',
  'LockLaminated',
  'LockLaminatedOpen',
  'LockOpen',
  'LockSimple',
  'LockSimpleOpen',
  'Lockers',
  'Log',
  'MagicWand',
  'Magnet',
  'MagnetStraight',
  'MagnifyingGlass',
  'MagnifyingGlassMinus',
  'MagnifyingGlassPlus',
  'Mailbox',
  'MapPin',
  'MapPinArea',
  'MapPinLine',
  'MapPinPlus',
  'MapPinSimple',
  'MapPinSimpleArea',
  'MapPinSimpleLine',
  'MapTrifold',
  'MarkdownLogo',
  'MarkerCircle',
  'Martini',
  'MaskHappy',
  'MaskSad',
  'MastodonLogo',
  'MathOperations',
  'MatrixLogo',
  'Medal',
  'MedalMilitary',
  'MediumLogo',
  'Megaphone',
  'MegaphoneSimple',
  'MemberOf',
  'Memory',
  'MessengerLogo',
  'MetaLogo',
  'Meteor',
  'Metronome',
  'Microphone',
  'MicrophoneSlash',
  'MicrophoneStage',
  'Microscope',
  'MicrosoftExcelLogo',
  'MicrosoftOutlookLogo',
  'MicrosoftTeamsLogo',
  'MicrosoftWordLogo',
  'Minus',
  'MinusCircle',
  'MinusSquare',
  'Money',
  'MoneyWavy',
  'Monitor',
  'MonitorArrowUp',
  'MonitorPlay',
  'Moon',
  'MoonStars',
  'Moped',
  'MopedFront',
  'Mosque',
  'Motorcycle',
  'Mountains',
  'Mouse',
  'MouseLeftClick',
  'MouseMiddleClick',
  'MouseRightClick',
  'MouseScroll',
  'MouseSimple',
  'MusicNote',
  'MusicNoteSimple',
  'MusicNotes',
  'MusicNotesMinus',
  'MusicNotesPlus',
  'MusicNotesSimple',
  'NavigationArrow',
  'Needle',
  'Network',
  'NetworkSlash',
  'NetworkX',
  'Newspaper',
  'NewspaperClipping',
  'NotEquals',
  'NotMemberOf',
  'NotSubsetOf',
  'NotSupersetOf',
  'Notches',
  'Note',
  'NoteBlank',
  'NotePencil',
  'Notebook',
  'Notepad',
  'Notification',
  'NotionLogo',
  'NuclearPlant',
  'NumberCircleEight',
  'NumberCircleFive',
  'NumberCircleFour',
  'NumberCircleNine',
  'NumberCircleOne',
  'NumberCircleSeven',
  'NumberCircleSix',
  'NumberCircleThree',
  'NumberCircleTwo',
  'NumberCircleZero',
  'NumberEight',
  'NumberFive',
  'NumberFour',
  'NumberNine',
  'NumberOne',
  'NumberSeven',
  'NumberSix',
  'NumberSquareEight',
  'NumberSquareFive',
  'NumberSquareFour',
  'NumberSquareNine',
  'NumberSquareOne',
  'NumberSquareSeven',
  'NumberSquareSix',
  'NumberSquareThree',
  'NumberSquareTwo',
  'NumberSquareZero',
  'NumberThree',
  'NumberTwo',
  'NumberZero',
  'Numpad',
  'Nut',
  'NyTimesLogo',
  'Octagon',
  'OfficeChair',
  'Onigiri',
  'OpenAiLogo',
  'Option',
  'Orange',
  'OrangeSlice',
  'Oven',
  'Package',
  'PaintBrush',
  'PaintBrushBroad',
  'PaintBrushHousehold',
  'PaintBucket',
  'PaintRoller',
  'Palette',
  'Panorama',
  'Pants',
  'PaperPlane',
  'PaperPlaneRight',
  'PaperPlaneTilt',
  'Paperclip',
  'PaperclipHorizontal',
  'Parachute',
  'Paragraph',
  'Parallelogram',
  'Park',
  'Password',
  'Path',
  'PatreonLogo',
  'Pause',
  'PauseCircle',
  'PawPrint',
  'PaypalLogo',
  'Peace',
  'Pen',
  'PenNib',
  'PenNibStraight',
  'Pencil',
  'PencilCircle',
  'PencilLine',
  'PencilRuler',
  'PencilSimple',
  'PencilSimpleLine',
  'PencilSimpleSlash',
  'PencilSlash',
  'Pentagon',
  'Pentagram',
  'Pepper',
  'Percent',
  'Person',
  'PersonArmsSpread',
  'PersonSimple',
  'PersonSimpleBike',
  'PersonSimpleCircle',
  'PersonSimpleHike',
  'PersonSimpleRun',
  'PersonSimpleSki',
  'PersonSimpleSwim',
  'PersonSimpleTaiChi',
  'PersonSimpleThrow',
  'PersonSimpleWalk',
  'Perspective',
  'Phone',
  'PhoneCall',
  'PhoneDisconnect',
  'PhoneIncoming',
  'PhoneList',
  'PhoneOutgoing',
  'PhonePause',
  'PhonePlus',
  'PhoneSlash',
  'PhoneTransfer',
  'PhoneX',
  'PhosphorLogo',
  'Pi',
  'PianoKeys',
  'PicnicTable',
  'PictureInPicture',
  'PiggyBank',
  'Pill',
  'PingPong',
  'PintGlass',
  'PinterestLogo',
  'Pinwheel',
  'Pipe',
  'PipeWrench',
  'PixLogo',
  'Pizza',
  'Placeholder',
  'Planet',
  'Plant',
  'Play',
  'PlayCircle',
  'PlayPause',
  'Playlist',
  'Plug',
  'PlugCharging',
  'Plugs',
  'PlugsConnected',
  'Plus',
  'PlusCircle',
  'PlusMinus',
  'PlusSquare',
  'PokerChip',
  'PoliceCar',
  'Polygon',
  'Popcorn',
  'Popsicle',
  'PottedPlant',
  'Power',
  'Prescription',
  'Presentation',
  'PresentationChart',
  'Printer',
  'Prohibit',
  'ProhibitInset',
  'ProjectorScreen',
  'ProjectorScreenChart',
  'Pulse',
  'PushPin',
  'PushPinSimple',
  'PushPinSimpleSlash',
  'PushPinSlash',
  'PuzzlePiece',
  'QrCode',
  'Question',
  'QuestionMark',
  'Queue',
  'Quotes',
  'Rabbit',
  'Racquet',
  'Radical',
  'Radio',
  'RadioButton',
  'Radioactive',
  'Rainbow',
  'RainbowCloud',
  'Ranking',
  'ReadCvLogo',
  'Receipt',
  'ReceiptX',
  'Record',
  'Rectangle',
  'RectangleDashed',
  'Recycle',
  'RedditLogo',
  'Repeat',
  'RepeatOnce',
  'ReplitLogo',
  'Resize',
  'Rewind',
  'RewindCircle',
  'RoadHorizon',
  'Robot',
  'Rocket',
  'RocketLaunch',
  'Rows',
  'RowsPlusBottom',
  'RowsPlusTop',
  'Rss',
  'RssSimple',
  'Rug',
  'Ruler',
  'Sailboat',
  'Scales',
  'Scan',
  'ScanSmiley',
  'Scissors',
  'Scooter',
  'Screencast',
  'Screwdriver',
  'Scribble',
  'ScribbleLoop',
  'Scroll',
  'Seal',
  'SealCheck',
  'SealPercent',
  'SealQuestion',
  'SealWarning',
  'Seat',
  'Seatbelt',
  'SecurityCamera',
  'Selection',
  'SelectionAll',
  'SelectionBackground',
  'SelectionForeground',
  'SelectionInverse',
  'SelectionPlus',
  'SelectionSlash',
  'Shapes',
  'Share',
  'ShareFat',
  'ShareNetwork',
  'Shield',
  'ShieldCheck',
  'ShieldCheckered',
  'ShieldChevron',
  'ShieldPlus',
  'ShieldSlash',
  'ShieldStar',
  'ShieldWarning',
  'ShippingContainer',
  'ShirtFolded',
  'ShootingStar',
  'ShoppingBag',
  'ShoppingBagOpen',
  'ShoppingCart',
  'ShoppingCartSimple',
  'Shovel',
  'Shower',
  'Shrimp',
  'Shuffle',
  'ShuffleAngular',
  'ShuffleSimple',
  'Sidebar',
  'SidebarSimple',
  'Sigma',
  'SignIn',
  'SignOut',
  'Signature',
  'Signpost',
  'SimCard',
  'Siren',
  'SketchLogo',
  'SkipBack',
  'SkipBackCircle',
  'SkipForward',
  'SkipForwardCircle',
  'Skull',
  'SkypeLogo',
  'SlackLogo',
  'Sliders',
  'SlidersHorizontal',
  'Slideshow',
  'Smiley',
  'SmileyAngry',
  'SmileyBlank',
  'SmileyMeh',
  'SmileyMelting',
  'SmileyNervous',
  'SmileySad',
  'SmileySticker',
  'SmileyWink',
  'SmileyXEyes',
  'SnapchatLogo',
  'Sneaker',
  'SneakerMove',
  'Snowflake',
  'SoccerBall',
  'Sock',
  'SolarPanel',
  'SolarRoof',
  'SortAscending',
  'SortDescending',
  'SoundcloudLogo',
  'Spade',
  'Sparkle',
  'SpeakerHifi',
  'SpeakerHigh',
  'SpeakerLow',
  'SpeakerNone',
  'SpeakerSimpleHigh',
  'SpeakerSimpleLow',
  'SpeakerSimpleNone',
  'SpeakerSimpleSlash',
  'SpeakerSimpleX',
  'SpeakerSlash',
  'SpeakerX',
  'Speedometer',
  'Sphere',
  'Spinner',
  'SpinnerBall',
  'SpinnerGap',
  'Spiral',
  'SplitHorizontal',
  'SplitVertical',
  'SpotifyLogo',
  'SprayBottle',
  'Square',
  'SquareHalf',
  'SquareHalfBottom',
  'SquareLogo',
  'SquareSplitVertical',
  'SquaresFour',
  'Stack',
  'StackMinus',
  'StackOverflowLogo',
  'StackPlus',
  'StackSimple',
  'Stairs',
  'Stamp',
  'StandardDefinition',
  'Star',
  'StarAndCrescent',
  'StarFour',
  'StarHalf',
  'StarOfDavid',
  'SteamLogo',
  'SteeringWheel',
  'Steps',
  'Stethoscope',
  'Sticker',
  'Stool',
  'Stop',
  'StopCircle',
  'Storefront',
  'Strategy',
  'StripeLogo',
  'Student',
  'SubsetOf',
  'SubsetProperOf',
  'Subtitles',
  'SubtitlesSlash',
  'Subtract',
  'SubtractSquare',
  'Subway',
  'Suitcase',
  'SuitcaseRolling',
  'SuitcaseSimple',
  'Sun',
  'SunDim',
  'SunHorizon',
  'Sunglasses',
  'SupersetOf',
  'SupersetProperOf',
  'Swap',
  'Swatches',
  'SwimmingPool',
  'Sword',
  'Synagogue',
  'Syringe',
  'TShirt',
  'Table',
  'Tabs',
  'Tag',
  'TagChevron',
  'TagSimple',
  'Target',
  'Taxi',
  'TeaBag',
  'TelegramLogo',
  'Television',
  'TelevisionSimple',
  'TennisBall',
  'Tent',
  'Terminal',
  'TerminalWindow',
  'TestTube',
  'TextAUnderline',
  'TextAa',
  'TextAlignCenter',
  'TextAlignJustify',
  'TextAlignLeft',
  'TextAlignRight',
  'TextB',
  'TextColumns',
  'TextH',
  'TextHFive',
  'TextHFour',
  'TextHOne',
  'TextHSix',
  'TextHThree',
  'TextHTwo',
  'TextIndent',
  'TextItalic',
  'TextOutdent',
  'TextStrikethrough',
  'TextSubscript',
  'TextSuperscript',
  'TextT',
  'TextTSlash',
  'TextUnderline',
  'Textbox',
  'Thermometer',
  'ThermometerCold',
  'ThermometerHot',
  'ThermometerSimple',
  'ThreadsLogo',
  'ThreeD',
  'ThumbsDown',
  'ThumbsUp',
  'Ticket',
  'TidalLogo',
  'TiktokLogo',
  'Tilde',
  'Timer',
  'TipJar',
  'Tipi',
  'Tire',
  'ToggleLeft',
  'ToggleRight',
  'Toilet',
  'ToiletPaper',
  'Toolbox',
  'Tooth',
  'Tornado',
  'Tote',
  'ToteSimple',
  'Towel',
  'Tractor',
  'Trademark',
  'TrademarkRegistered',
  'TrafficCone',
  'TrafficSign',
  'TrafficSignal',
  'Train',
  'TrainRegional',
  'TrainSimple',
  'Tram',
  'Translate',
  'Trash',
  'TrashSimple',
  'Tray',
  'TrayArrowDown',
  'TrayArrowUp',
  'TreasureChest',
  'Tree',
  'TreeEvergreen',
  'TreePalm',
  'TreeStructure',
  'TreeView',
  'TrendDown',
  'TrendUp',
  'Triangle',
  'TriangleDashed',
  'Trolley',
  'TrolleySuitcase',
  'Trophy',
  'Truck',
  'TruckTrailer',
  'TumblrLogo',
  'TwitchLogo',
  'TwitterLogo',
  'Umbrella',
  'UmbrellaSimple',
  'Union',
  'Unite',
  'UniteSquare',
  'Upload',
  'UploadSimple',
  'Usb',
  'User',
  'UserCheck',
  'UserCircle',
  'UserCircleCheck',
  'UserCircleDashed',
  'UserCircleGear',
  'UserCircleMinus',
  'UserCirclePlus',
  'UserFocus',
  'UserGear',
  'UserList',
  'UserMinus',
  'UserPlus',
  'UserRectangle',
  'UserSound',
  'UserSquare',
  'UserSwitch',
  'Users',
  'UsersFour',
  'UsersThree',
  'Van',
  'Vault',
  'VectorThree',
  'VectorTwo',
  'Vibrate',
  'Video',
  'VideoCamera',
  'VideoCameraSlash',
  'VideoConference',
  'Vignette',
  'VinylRecord',
  'VirtualReality',
  'Virus',
  'Visor',
  'Voicemail',
  'Volleyball',
  'Wall',
  'Wallet',
  'Warehouse',
  'Warning',
  'WarningCircle',
  'WarningDiamond',
  'WarningOctagon',
  'WashingMachine',
  'Watch',
  'WaveSawtooth',
  'WaveSine',
  'WaveSquare',
  'WaveTriangle',
  'Waveform',
  'WaveformSlash',
  'Waves',
  'Webcam',
  'WebcamSlash',
  'WebhooksLogo',
  'WechatLogo',
  'WhatsappLogo',
  'Wheelchair',
  'WheelchairMotion',
  'WifiHigh',
  'WifiLow',
  'WifiMedium',
  'WifiNone',
  'WifiSlash',
  'WifiX',
  'Wind',
  'Windmill',
  'WindowsLogo',
  'Wine',
  'Wrench',
  'X',
  'XCircle',
  'XLogo',
  'XSquare',
  'Yarn',
  'YinYang',
  'YoutubeLogo',
];
var moduleBaseUrl = 'https://framer.com/m/phosphor-icons/';
var weightOptions = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone',];
var lowercaseIconKeyPairs = iconKeys.reduce((res, key,) => {
  res[key.toLowerCase()] = key;
  return res;
}, {},);
function Icon2(props,) {
  const { color, selectByList, iconSearch, iconSelection, onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave, weight, mirrored, } =
    props;
  const isMounted = useRef3(false,);
  const iconKey = useIconSelection(iconKeys, selectByList, iconSearch, iconSelection, lowercaseIconKeyPairs,);
  const [SelectedIcon, setSelectedIcon,] = useState4(iconKey === 'Home' ? House_default(React2,) : null,);
  async function importModule() {
    try {
      const version = '0.0.57';
      const iconModuleUrl = `${moduleBaseUrl}${iconKey}.js@${version}`;
      const module = await import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        iconModuleUrl
      );
      if (isMounted.current) setSelectedIcon(module.default(React2,),);
    } catch (err) {
      if (isMounted.current) setSelectedIcon(null,);
    }
  }
  useEffect4(() => {
    isMounted.current = true;
    importModule();
    return () => {
      isMounted.current = false;
    };
  }, [iconKey,],);
  const isOnCanvas = RenderTarget2.current() === RenderTarget2.canvas;
  const emptyState = isOnCanvas ? /* @__PURE__ */ _jsx4(NullState, {},) : null;
  return /* @__PURE__ */ _jsx4(motion3.div, {
    style: { display: 'contents', },
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    children: SelectedIcon
      ? /* @__PURE__ */ _jsx4('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 256 256',
        style: {
          userSelect: 'none',
          width: '100%',
          height: '100%',
          display: 'inline-block',
          fill: color,
          color,
          flexShrink: 0,
          transform: mirrored ? 'scale(-1, 1)' : void 0,
        },
        focusable: 'false',
        color,
        children: /* @__PURE__ */ _jsx4(SelectedIcon, { color, weight, },),
      },)
      : emptyState,
  },);
}
Icon2.displayName = 'Phosphor';
Icon2.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: 'House',
  iconSearch: 'House',
  color: '#66F',
  selectByList: true,
  weight: 'regular',
  mirrored: false,
};
addPropertyControls3(Icon2, {
  selectByList: {
    type: ControlType3.Boolean,
    title: 'Select',
    enabledTitle: 'List',
    disabledTitle: 'Search',
    defaultValue: Icon2.defaultProps.selectByList,
  },
  iconSelection: {
    type: ControlType3.Enum,
    options: iconKeys,
    defaultValue: Icon2.defaultProps.iconSelection,
    title: 'Name',
    hidden: ({ selectByList, },) => !selectByList,
    description: 'Find every icon name on the [Phosphor site](https://phosphoricons.com/)',
  },
  iconSearch: {
    type: ControlType3.String,
    title: 'Name',
    placeholder: 'Menu, Wifi, Box\u2026',
    hidden: ({ selectByList, },) => selectByList,
  },
  color: { type: ControlType3.Color, title: 'Color', defaultValue: Icon2.defaultProps.color, },
  weight: {
    type: ControlType3.Enum,
    title: 'Weight',
    optionTitles: weightOptions.map((piece,) => piece.charAt(0,).toUpperCase() + piece.slice(1,)),
    options: weightOptions,
    defaultValue: Icon2.defaultProps.weight,
  },
  mirrored: { type: ControlType3.Boolean, enabledTitle: 'Yes', disabledTitle: 'No', defaultValue: Icon2.defaultProps.mirrored, },
  ...defaultEvents,
},);

// https :https://framerusercontent.com/modules/scY2fc6SlmvxLBxWYpSm/IdJRu7l6cEpLDdf78tPv/peihCD8_0.js
var PhosphorFonts = getFonts(Icon2,);
var enabledGestures = { oXdM1j_Wq: { hover: true, }, ypSdI0dLV: { hover: true, }, };
var cycleOrder2 = ['ypSdI0dLV', 'oXdM1j_Wq', 'XkFTv1bcF',];
var serializationHash2 = 'framer-HmhMK';
var variantClassNames2 = { oXdM1j_Wq: 'framer-v-e9zpjw', XkFTv1bcF: 'framer-v-12al652', ypSdI0dLV: 'framer-v-16lqwot', };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var numberToPixelString = (value,) => {
  if (typeof value !== 'number') return value;
  if (!Number.isFinite(value,)) return void 0;
  return Math.max(0, value,) + 'px';
};
var radiusForCorner = (value, cornerIndex,) => {
  if (typeof value === 'number' && Number.isFinite(value,)) return Math.max(0, value,) + 'px';
  if (typeof value !== 'string' || typeof cornerIndex !== 'number') return void 0;
  const segments = value.split(' ',);
  return segments[cornerIndex] || segments[cornerIndex - 2] || segments[0];
};
var transition12 = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var Transition2 = ({ value, children, },) => {
  const config = React3.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx5(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var Variants2 = motion4.create(React3.Fragment,);
var humanReadableVariantMap2 = { 'Text Button': 'oXdM1j_Wq', blank: 'XkFTv1bcF', Button: 'ypSdI0dLV', };
var getProps2 = (
  { backgroundColor, border, fontSize, height, id, link, newTab, padding, radius, smoothScroll, text, textColor, width, ...props },
) => {
  var _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _humanReadableVariantMap_props_variant, _ref7, _ref8;
  return {
    ...props,
    hoe0QDrl5: (_ref = text !== null && text !== void 0 ? text : props.hoe0QDrl5) !== null && _ref !== void 0 ? _ref : 'Button text',
    I0Sz0dr2v: (_ref1 = fontSize !== null && fontSize !== void 0 ? fontSize : props.I0Sz0dr2v) !== null && _ref1 !== void 0 ? _ref1 : 16,
    i8nKkVReT: (_ref2 = padding !== null && padding !== void 0 ? padding : props.i8nKkVReT) !== null && _ref2 !== void 0
      ? _ref2
      : '16px 32px 16px 32px',
    Iyt7vRlRL: (_ref3 = radius !== null && radius !== void 0 ? radius : props.Iyt7vRlRL) !== null && _ref3 !== void 0 ? _ref3 : '100px',
    KPs74ZNM1: (_ref4 = border !== null && border !== void 0 ? border : props.KPs74ZNM1) !== null && _ref4 !== void 0
      ? _ref4
      : {
        borderColor: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(156, 79, 255)) /* {"name":"Primary"} */',
        borderStyle: 'solid',
        borderWidth: 1,
      },
    n8jmDbiSM: (_ref5 = textColor !== null && textColor !== void 0 ? textColor : props.n8jmDbiSM) !== null && _ref5 !== void 0
      ? _ref5
      : 'var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255))',
    od7wtCL7T: link !== null && link !== void 0 ? link : props.od7wtCL7T,
    OGI9WGJ1a: newTab !== null && newTab !== void 0 ? newTab : props.OGI9WGJ1a,
    uBsjwgvnU: (_ref6 = smoothScroll !== null && smoothScroll !== void 0 ? smoothScroll : props.uBsjwgvnU) !== null && _ref6 !== void 0
      ? _ref6
      : true,
    variant:
      (_ref7 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap2[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref7 !== void 0
        ? _ref7
        : 'ypSdI0dLV',
    y4hb9lsDX:
      (_ref8 = backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : props.y4hb9lsDX) !== null && _ref8 !== void 0
        ? _ref8
        : 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(156, 79, 255))',
  };
};
var createLayoutDependency2 = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo2();
  const {
    style,
    className: className10,
    layoutId,
    variant,
    hoe0QDrl5,
    od7wtCL7T,
    I0Sz0dr2v,
    i8nKkVReT,
    n8jmDbiSM,
    y4hb9lsDX,
    KPs74ZNM1,
    Iyt7vRlRL,
    OGI9WGJ1a,
    uBsjwgvnU,
    ...restProps
  } = getProps2(props,);
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
  } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'ypSdI0dLV',
    enabledGestures,
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const ref1 = React3.useRef(null,);
  const isDisplayed = () => {
    if (gestureVariant === 'oXdM1j_Wq-hover') return false;
    if (['oXdM1j_Wq', 'XkFTv1bcF',].includes(baseVariant,)) return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (gestureVariant === 'oXdM1j_Wq-hover') return true;
    if (baseVariant === 'oXdM1j_Wq') return true;
    return false;
  };
  const isDisplayed2 = () => {
    if (baseVariant === 'XkFTv1bcF') return false;
    return true;
  };
  const defaultLayoutId = React3.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport2();
  var _KPs74ZNM1_borderBottomWidth, _KPs74ZNM1_borderLeftWidth, _KPs74ZNM1_borderRightWidth, _KPs74ZNM1_borderTopWidth;
  return /* @__PURE__ */ _jsx5(LayoutGroup3, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx5(Variants2, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx5(Transition2, {
        value: transition12,
        children: /* @__PURE__ */ _jsx5(Link, {
          href: od7wtCL7T,
          openInNewTab: OGI9WGJ1a,
          smoothScroll: uBsjwgvnU,
          children: /* @__PURE__ */ _jsxs2(motion4.a, {
            ...restProps,
            ...gestureHandlers,
            className: `${cx2(serializationHash2, ...sharedStyleClassNames, 'framer-16lqwot', className10, classNames,)} framer-19ljw5d`,
            'data-border': true,
            'data-framer-name': 'Button',
            'data-reset': 'button',
            layoutDependency,
            layoutId: 'ypSdI0dLV',
            ref: ref !== null && ref !== void 0 ? ref : ref1,
            style: {
              '--16wr2mp': numberToPixelString(i8nKkVReT,),
              '--border-bottom-width': `${
                (_KPs74ZNM1_borderBottomWidth = KPs74ZNM1.borderBottomWidth) !== null && _KPs74ZNM1_borderBottomWidth !== void 0
                  ? _KPs74ZNM1_borderBottomWidth
                  : KPs74ZNM1.borderWidth
              }px`,
              '--border-color': KPs74ZNM1.borderColor,
              '--border-left-width': `${
                (_KPs74ZNM1_borderLeftWidth = KPs74ZNM1.borderLeftWidth) !== null && _KPs74ZNM1_borderLeftWidth !== void 0
                  ? _KPs74ZNM1_borderLeftWidth
                  : KPs74ZNM1.borderWidth
              }px`,
              '--border-right-width': `${
                (_KPs74ZNM1_borderRightWidth = KPs74ZNM1.borderRightWidth) !== null && _KPs74ZNM1_borderRightWidth !== void 0
                  ? _KPs74ZNM1_borderRightWidth
                  : KPs74ZNM1.borderWidth
              }px`,
              '--border-style': KPs74ZNM1.borderStyle,
              '--border-top-width': `${
                (_KPs74ZNM1_borderTopWidth = KPs74ZNM1.borderTopWidth) !== null && _KPs74ZNM1_borderTopWidth !== void 0
                  ? _KPs74ZNM1_borderTopWidth
                  : KPs74ZNM1.borderWidth
              }px`,
              backgroundColor: y4hb9lsDX,
              borderBottomLeftRadius: radiusForCorner(Iyt7vRlRL, 3,),
              borderBottomRightRadius: radiusForCorner(Iyt7vRlRL, 2,),
              borderTopLeftRadius: radiusForCorner(Iyt7vRlRL, 0,),
              borderTopRightRadius: radiusForCorner(Iyt7vRlRL, 1,),
              opacity: 1,
              ...style,
            },
            variants: {
              'oXdM1j_Wq-hover': {
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
              oXdM1j_Wq: {
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
              XkFTv1bcF: {
                '--border-bottom-width': '0px',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-top-width': '0px',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                opacity: 0,
              },
            },
            ...addPropertyOverrides2(
              {
                'oXdM1j_Wq-hover': { 'data-framer-name': void 0, },
                'ypSdI0dLV-hover': { 'data-framer-name': void 0, },
                oXdM1j_Wq: { 'data-framer-name': 'Text Button', },
                XkFTv1bcF: { 'data-framer-name': 'blank', },
              },
              baseVariant,
              gestureVariant,
            ),
            children: [
              isDisplayed() && /* @__PURE__ */
              _jsx5(motion4.div, {
                className: 'framer-1apvkr5',
                'data-framer-name': 'button-overlay',
                layoutDependency,
                layoutId: 'ozqo80qC2',
                style: { backgroundColor: 'rgba(0, 0, 0, 0.15)', opacity: 0, },
                variants: { 'ypSdI0dLV-hover': { opacity: 1, }, },
              },),
              isDisplayed1() && /* @__PURE__ */ _jsx5(motion4.div, {
                className: 'framer-1e8ubjj',
                'data-framer-name': 'Icon',
                layoutDependency,
                layoutId: 'NX7J_mY_aNOzJ9XmA6',
                children: /* @__PURE__ */ _jsx5(ComponentViewportProvider, {
                  children: /* @__PURE__ */ _jsx5(motion4.div, {
                    className: 'framer-1onotez-container',
                    layoutDependency,
                    layoutId: 'NX7J_mY_aOIYJrx9y2-container',
                    children: /* @__PURE__ */ _jsx5(Icon2, {
                      color: n8jmDbiSM,
                      height: '100%',
                      iconSearch: 'House',
                      iconSelection: 'ArrowRight',
                      id: 'NX7J_mY_aOIYJrx9y2',
                      layoutId: 'NX7J_mY_aOIYJrx9y2',
                      mirrored: false,
                      selectByList: true,
                      style: { height: '100%', width: '100%', },
                      weight: 'bold',
                      width: '100%',
                    },),
                  },),
                },),
              },),
              isDisplayed2() && /* @__PURE__ */ _jsx5(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx5(React3.Fragment, {
                  children: /* @__PURE__ */ _jsx5(motion4.p, {
                    style: {
                      '--font-selector': 'SW50ZXItTWVkaXVt',
                      '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                      '--framer-font-size': 'calc(var(--variable-reference-I0Sz0dr2v-peihCD8_0) * 1px)',
                      '--framer-font-weight': '500',
                      '--framer-letter-spacing': '0px',
                      '--framer-line-height': '120%',
                      '--framer-text-alignment': 'center',
                      '--framer-text-color': 'var(--extracted-r6o4lv, var(--variable-reference-n8jmDbiSM-peihCD8_0))',
                    },
                    children: 'Button text',
                  },),
                },),
                className: 'framer-14f7c2w',
                'data-framer-name': 'button-text',
                fonts: ['Inter-Medium',],
                layoutDependency,
                layoutId: 'kIoAVS9of',
                style: {
                  '--extracted-r6o4lv': 'var(--variable-reference-n8jmDbiSM-peihCD8_0)',
                  '--variable-reference-I0Sz0dr2v-peihCD8_0': I0Sz0dr2v,
                  '--variable-reference-n8jmDbiSM-peihCD8_0': n8jmDbiSM,
                },
                text: hoe0QDrl5,
                verticalAlignment: 'top',
                withExternalLayout: true,
                ...addPropertyOverrides2(
                  {
                    oXdM1j_Wq: {
                      children: /* @__PURE__ */ _jsx5(React3.Fragment, {
                        children: /* @__PURE__ */ _jsx5(motion4.p, {
                          style: {
                            '--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
                            '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                            '--framer-font-size': 'calc(var(--variable-reference-I0Sz0dr2v-peihCD8_0) * 1px)',
                            '--framer-font-weight': '600',
                            '--framer-letter-spacing': '0px',
                            '--framer-line-height': '120%',
                            '--framer-text-alignment': 'center',
                            '--framer-text-color': 'var(--extracted-r6o4lv, var(--variable-reference-n8jmDbiSM-peihCD8_0))',
                          },
                          children: 'Button text',
                        },),
                      },),
                      fonts: ['Inter-SemiBold',],
                    },
                  },
                  baseVariant,
                  gestureVariant,
                ),
              },),
              isDisplayed1() && /* @__PURE__ */
              _jsx5(motion4.div, {
                className: 'framer-exv38q',
                'data-framer-name': 'underline',
                layoutDependency,
                layoutId: 'IbTopT_vS',
                style: { backgroundColor: n8jmDbiSM, },
              },),
            ],
          },),
        },),
      },),
    },),
  },);
},);
var css11 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-HmhMK.framer-19ljw5d, .framer-HmhMK .framer-19ljw5d { display: block; }',
  '.framer-HmhMK.framer-16lqwot { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: var(--16wr2mp); position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-HmhMK .framer-1apvkr5 { flex: none; height: 111%; left: calc(50.34013605442179% - 110.20408163265304% / 2); overflow: hidden; position: absolute; top: calc(49.01960784313727% - 110.78431372549021% / 2); width: 110%; z-index: 1; }',
  '.framer-HmhMK .framer-1e8ubjj { flex: none; height: 20px; overflow: visible; position: relative; width: 20px; }',
  '.framer-HmhMK .framer-1onotez-container { bottom: 0px; flex: none; left: -1px; position: absolute; top: 0px; width: 15px; }',
  '.framer-HmhMK .framer-14f7c2w { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 9; }',
  '.framer-HmhMK .framer-exv38q { bottom: 0px; flex: none; height: 1px; left: 0px; overflow: hidden; position: absolute; width: 0%; z-index: 1; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-HmhMK.framer-16lqwot { gap: 0px; } .framer-HmhMK.framer-16lqwot > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-HmhMK.framer-16lqwot > :first-child { margin-left: 0px; } .framer-HmhMK.framer-16lqwot > :last-child { margin-right: 0px; } }',
  '.framer-HmhMK.framer-v-e9zpjw.framer-16lqwot { gap: 5px; padding: 2px 0px 2px 0px; }',
  '.framer-HmhMK.framer-v-e9zpjw .framer-1e8ubjj { order: 2; }',
  '.framer-HmhMK.framer-v-e9zpjw .framer-14f7c2w { order: 1; }',
  '.framer-HmhMK.framer-v-e9zpjw .framer-exv38q { order: 3; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-HmhMK.framer-v-e9zpjw.framer-16lqwot { gap: 0px; } .framer-HmhMK.framer-v-e9zpjw.framer-16lqwot > * { margin: 0px; margin-left: calc(5px / 2); margin-right: calc(5px / 2); } .framer-HmhMK.framer-v-e9zpjw.framer-16lqwot > :first-child { margin-left: 0px; } .framer-HmhMK.framer-v-e9zpjw.framer-16lqwot > :last-child { margin-right: 0px; } }',
  '.framer-HmhMK.framer-v-12al652.framer-16lqwot { gap: 0px; height: 1px; padding: 0px; width: 1px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-HmhMK.framer-v-12al652.framer-16lqwot { gap: 0px; } .framer-HmhMK.framer-v-12al652.framer-16lqwot > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-HmhMK.framer-v-12al652.framer-16lqwot > :first-child { margin-left: 0px; } .framer-HmhMK.framer-v-12al652.framer-16lqwot > :last-child { margin-right: 0px; } }',
  '.framer-HmhMK.framer-v-e9zpjw.hover .framer-1onotez-container { left: calc(54.54545454545456% - 15px / 2); }',
  '.framer-HmhMK.framer-v-e9zpjw.hover .framer-exv38q { width: 77%; }',
  '.framer-HmhMK[data-border="true"]::after, .framer-HmhMK [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var FramerpeihCD8_0 = withCSS2(Component3, css11, 'framer-HmhMK',);
var stdin_default2 = FramerpeihCD8_0;
FramerpeihCD8_0.displayName = 'button';
FramerpeihCD8_0.defaultProps = { height: 51, width: 147, };
addPropertyControls4(FramerpeihCD8_0, {
  variant: {
    options: ['ypSdI0dLV', 'oXdM1j_Wq', 'XkFTv1bcF',],
    optionTitles: ['Button', 'Text Button', 'blank',],
    title: 'Variant',
    type: ControlType4.Enum,
  },
  hoe0QDrl5: { defaultValue: 'Button text', displayTextArea: false, title: 'Text', type: ControlType4.String, },
  od7wtCL7T: { title: 'Link', type: ControlType4.Link, },
  I0Sz0dr2v: { defaultValue: 16, displayStepper: true, title: 'Font Size', type: ControlType4.Number, },
  i8nKkVReT: { defaultValue: '16px 32px 16px 32px', title: 'Padding', type: ControlType4.Padding, },
  n8jmDbiSM: {
    defaultValue: 'var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255)) /* {"name":"White"} */',
    title: 'Text color',
    type: ControlType4.Color,
  },
  y4hb9lsDX: {
    defaultValue: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(156, 79, 255)) /* {"name":"Primary"} */',
    title: 'Background color',
    type: ControlType4.Color,
  },
  KPs74ZNM1: {
    defaultValue: {
      borderColor: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(156, 79, 255)) /* {"name":"Primary"} */',
      borderStyle: 'solid',
      borderWidth: 1,
    },
    title: 'Border',
    type: ControlType4.Border,
  },
  Iyt7vRlRL: { defaultValue: '100px', title: 'Radius', type: ControlType4.BorderRadius, },
  OGI9WGJ1a: { defaultValue: false, title: 'New Tab', type: ControlType4.Boolean, },
  uBsjwgvnU: { defaultValue: true, title: 'Smooth Scroll', type: ControlType4.Boolean, },
},);
addFonts2(FramerpeihCD8_0, [{
  explicitInter: true,
  fonts: [{
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
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2',
    weight: '600',
  },],
}, ...PhosphorFonts,], { supportsExplicitInterCodegen: true, },);
var __FramerMetadata__ = {
  'exports': {
    'Props': { 'type': 'tsType', 'annotations': { 'framerContractVersion': '1', }, },
    'default': {
      'type': 'reactComponent',
      'name': 'FramerpeihCD8_0',
      'slots': [],
      'annotations': {
        'framerIntrinsicHeight': '51',
        'framerIntrinsicWidth': '147',
        'framerComponentViewportWidth': 'true',
        'framerContractVersion': '1',
        'framerCanvasComponentVariantDetails':
          '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"oXdM1j_Wq":{"layout":["auto","auto"]},"XkFTv1bcF":{"layout":["fixed","fixed"]},"azdeYLEmc":{"layout":["auto","auto"]},"YJ2PsnBtv":{"layout":["auto","auto"]}}}',
        'framerVariables':
          '{"hoe0QDrl5":"text","od7wtCL7T":"link","I0Sz0dr2v":"fontSize","i8nKkVReT":"padding","n8jmDbiSM":"textColor","y4hb9lsDX":"backgroundColor","KPs74ZNM1":"border","Iyt7vRlRL":"radius","OGI9WGJ1a":"newTab","uBsjwgvnU":"smoothScroll"}',
        'framerImmutableVariables': 'true',
        'framerDisplayContentsDiv': 'false',
      },
    },
    '__FramerMetadata__': { 'type': 'variable', },
  },
};

// https :https://framerusercontent.com/modules/25VHiYFb6kH7eGYZ5C4T/K9gBezzy7DbOB05tuo32/DgNoyF9cS.js
var ButtonFonts = getFonts2(stdin_default2,);
var ButtonWithCTAClassnameWithMappedReactProps1v1ipky = withMappedReactProps(withCTAClassname(stdin_default2,), peihCD8_0_exports,);
var cycleOrder3 = ['akvCPg2A6', 'J807S8pmY', 'je6uY1FbU', 'iOUZ3XEmj', 'Cowh8Nfws', 'MWD37BAqY',];
var serializationHash3 = 'framer-Lqpch';
var variantClassNames3 = {
  akvCPg2A6: 'framer-v-n8ci9a',
  Cowh8Nfws: 'framer-v-awy7ih',
  iOUZ3XEmj: 'framer-v-1axqi2g',
  J807S8pmY: 'framer-v-n4ayf3',
  je6uY1FbU: 'framer-v-1w10psg',
  MWD37BAqY: 'framer-v-1iahtap',
};
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition13 = { bounce: 0.2, delay: 0, duration: 0.4, type: 'spring', };
var numberToPixelString2 = (value,) => {
  if (typeof value !== 'number') return value;
  if (!Number.isFinite(value,)) return void 0;
  return Math.max(0, value,) + 'px';
};
var radiusForCorner2 = (value, cornerIndex,) => {
  if (typeof value === 'number' && Number.isFinite(value,)) return Math.max(0, value,) + 'px';
  if (typeof value !== 'string' || typeof cornerIndex !== 'number') return void 0;
  const segments = value.split(' ',);
  return segments[cornerIndex] || segments[cornerIndex - 2] || segments[0];
};
var toResponsiveImage = (value,) => {
  if (typeof value === 'object' && value !== null && typeof value.src === 'string') {
    return value;
  }
  return typeof value === 'string' ? { src: value, } : void 0;
};
var Transition3 = ({ value, children, },) => {
  const config = React4.useContext(MotionConfigContext3,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx6(MotionConfigContext3.Provider, { value: contextValue, children, },);
};
var Variants3 = motion5.create(React4.Fragment,);
var humanReadableVariantMap3 = {
  'box desktop': 'iOUZ3XEmj',
  'box mobile': 'Cowh8Nfws',
  'img left': 'J807S8pmY',
  'img right': 'akvCPg2A6',
  'mobile image middle': 'je6uY1FbU',
  'mobile image top': 'MWD37BAqY',
};
var getProps3 = (
  {
    background,
    ctaLink,
    ctaText,
    ctaVisible,
    description,
    gap,
    height,
    id,
    image,
    padding,
    preHeadingText,
    radius,
    title,
    width,
    ...props
  },
) => {
  var _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _humanReadableVariantMap_props_variant, _ref7, _ref8, _ref9, _ref10;
  return {
    ...props,
    bb0d7Zsk2: (_ref = background !== null && background !== void 0 ? background : props.bb0d7Zsk2) !== null && _ref !== void 0
      ? _ref
      : 'rgb(255, 255, 255)',
    dVvnNuXFk: (_ref1 = radius !== null && radius !== void 0 ? radius : props.dVvnNuXFk) !== null && _ref1 !== void 0 ? _ref1 : '40px',
    Ec9Q3zdMx: (_ref2 = ctaVisible !== null && ctaVisible !== void 0 ? ctaVisible : props.Ec9Q3zdMx) !== null && _ref2 !== void 0
      ? _ref2
      : true,
    EenABtjhr: (_ref3 = image !== null && image !== void 0 ? image : props.EenABtjhr) !== null && _ref3 !== void 0 ? _ref3 : {
      src: 'https://framerusercontent.com/images/XBaNXcLkLfIfJtiznircmL3ai4.png?scale-down-to=2048',
      srcSet:
        'https://framerusercontent.com/images/XBaNXcLkLfIfJtiznircmL3ai4.png?scale-down-to=512 512w,https://framerusercontent.com/images/XBaNXcLkLfIfJtiznircmL3ai4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/XBaNXcLkLfIfJtiznircmL3ai4.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/XBaNXcLkLfIfJtiznircmL3ai4.png 2400w',
    },
    ffFqlap6N:
      (_ref4 = preHeadingText !== null && preHeadingText !== void 0 ? preHeadingText : props.ffFqlap6N) !== null && _ref4 !== void 0
        ? _ref4
        : 'UNIFied platform',
    kLSUfV79S: (_ref5 = title !== null && title !== void 0 ? title : props.kLSUfV79S) !== null && _ref5 !== void 0
      ? _ref5
      : 'Integrating all your engagement tools in one platform.',
    S5lpOxdRw: ctaLink !== null && ctaLink !== void 0 ? ctaLink : props.S5lpOxdRw,
    Vai8Fm96Y: (_ref6 = padding !== null && padding !== void 0 ? padding : props.Vai8Fm96Y) !== null && _ref6 !== void 0 ? _ref6 : '80px',
    variant:
      (_ref7 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap3[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref7 !== void 0
        ? _ref7
        : 'akvCPg2A6',
    Wl6u7Nr5l: (_ref8 = ctaText !== null && ctaText !== void 0 ? ctaText : props.Wl6u7Nr5l) !== null && _ref8 !== void 0
      ? _ref8
      : 'Learn more',
    wwuq8jfNR: (_ref9 = description !== null && description !== void 0 ? description : props.wwuq8jfNR) !== null && _ref9 !== void 0
      ? _ref9
      : 'Eliminate the hassle of multiple subscriptions and save on costs. Experience seamless workflows with HubEngage\'s unified platform. Simplify your operations and focus more on your team. Discover how HubEngage consolidates your tools for maximum efficiency.',
    yDCnIBg4Y: (_ref10 = gap !== null && gap !== void 0 ? gap : props.yDCnIBg4Y) !== null && _ref10 !== void 0 ? _ref10 : 80,
  };
};
var createLayoutDependency3 = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component4 = /* @__PURE__ */ React4.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo3();
  const {
    style,
    className: className10,
    layoutId,
    variant,
    ffFqlap6N,
    kLSUfV79S,
    wwuq8jfNR,
    EenABtjhr,
    Wl6u7Nr5l,
    S5lpOxdRw,
    Ec9Q3zdMx,
    bb0d7Zsk2,
    dVvnNuXFk,
    yDCnIBg4Y,
    Vai8Fm96Y,
    ...restProps
  } = getProps3(props,);
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
  } = useVariantState3({ cycleOrder: cycleOrder3, defaultVariant: 'akvCPg2A6', variant, variantClassNames: variantClassNames3, },);
  const layoutDependency = createLayoutDependency3(props, variants,);
  const ref1 = React4.useRef(null,);
  const isDisplayed = () => {
    if (['je6uY1FbU', 'Cowh8Nfws',].includes(baseVariant,)) return true;
    return false;
  };
  const isDisplayed1 = () => {
    if (['je6uY1FbU', 'Cowh8Nfws',].includes(baseVariant,)) return false;
    return true;
  };
  const defaultLayoutId = React4.useId();
  const sharedStyleClassNames = [className3, className5,];
  const componentViewport = useComponentViewport3();
  return /* @__PURE__ */ _jsx6(LayoutGroup4, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx6(Variants3, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx6(Transition3, {
        value: transition13,
        children: /* @__PURE__ */ _jsxs3(motion5.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx3(serializationHash3, ...sharedStyleClassNames, 'framer-n8ci9a', className10, classNames,),
          'data-framer-name': 'img right',
          layoutDependency,
          layoutId: 'akvCPg2A6',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            '--fznmfs': numberToPixelString2(Vai8Fm96Y,),
            '--oat1qo': yDCnIBg4Y,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            ...style,
          },
          variants: {
            Cowh8Nfws: {
              backgroundColor: bb0d7Zsk2,
              borderBottomLeftRadius: radiusForCorner2(dVvnNuXFk, 3,),
              borderBottomRightRadius: radiusForCorner2(dVvnNuXFk, 2,),
              borderTopLeftRadius: radiusForCorner2(dVvnNuXFk, 0,),
              borderTopRightRadius: radiusForCorner2(dVvnNuXFk, 1,),
            },
            iOUZ3XEmj: {
              backgroundColor: bb0d7Zsk2,
              borderBottomLeftRadius: radiusForCorner2(dVvnNuXFk, 3,),
              borderBottomRightRadius: radiusForCorner2(dVvnNuXFk, 2,),
              borderTopLeftRadius: radiusForCorner2(dVvnNuXFk, 0,),
              borderTopRightRadius: radiusForCorner2(dVvnNuXFk, 1,),
            },
          },
          ...addPropertyOverrides3(
            {
              Cowh8Nfws: { 'data-framer-name': 'box mobile', },
              iOUZ3XEmj: { 'data-framer-name': 'box desktop', },
              J807S8pmY: { 'data-framer-name': 'img left', },
              je6uY1FbU: { 'data-framer-name': 'mobile image middle', },
              MWD37BAqY: { 'data-framer-name': 'mobile image top', },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /* @__PURE__ */ _jsxs3(motion5.div, {
              className: 'framer-1dssq18',
              'data-framer-name': 'feature-content',
              layoutDependency,
              layoutId: 'ImlXKKtbX',
              children: [
                /* @__PURE__ */ _jsx6(RichText2, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx6(React4.Fragment, {
                    children: /* @__PURE__ */ _jsx6(motion5.p, {
                      style: {
                        '--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
                        '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                        '--framer-font-size': '14px',
                        '--framer-font-weight': '600',
                        '--framer-letter-spacing': '0.1em',
                        '--framer-line-height': '145%',
                        '--framer-text-color':
                          'var(--extracted-r6o4lv, var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76)))',
                        '--framer-text-transform': 'uppercase',
                      },
                      children: 'UNIFied platform',
                    },),
                  },),
                  className: 'framer-1rxjarv',
                  'data-framer-name': 'feature overline',
                  fonts: ['Inter-SemiBold',],
                  layoutDependency,
                  layoutId: 'dBbXx92kI',
                  style: { '--extracted-r6o4lv': 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76))', },
                  text: ffFqlap6N,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ _jsx6(RichText2, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx6(React4.Fragment, {
                    children: /* @__PURE__ */ _jsx6(motion5.h2, {
                      className: 'framer-styles-preset-nhj6yu',
                      'data-styles-preset': 'KvesxXs63',
                      style: {
                        '--framer-text-color': 'var(--extracted-1of0zx5, var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0)))',
                      },
                      children: 'Integrating all your engagement tools in one platform.',
                    },),
                  },),
                  className: 'framer-7kcsc5',
                  'data-framer-name': 'feature title',
                  fonts: ['Inter',],
                  layoutDependency,
                  layoutId: 'w_VrxZGZm',
                  style: { '--extracted-1of0zx5': 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))', },
                  text: kLSUfV79S,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
                isDisplayed() && /* @__PURE__ */ _jsx6(motion5.div, {
                  className: 'framer-ycjm4d',
                  'data-framer-name': 'feature image-wrapper',
                  layoutDependency,
                  layoutId: 'Urk9trfwe',
                  style: {
                    backgroundColor: 'rgb(242, 242, 242)',
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  },
                  variants: {
                    je6uY1FbU: {
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                  },
                  children: /* @__PURE__ */ _jsx6(Image2, {
                    as: 'figure',
                    background: {
                      alt: '',
                      fit: 'fill',
                      intrinsicHeight: 480,
                      intrinsicWidth: 394,
                      pixelHeight: 2160,
                      pixelWidth: 2160,
                      ...toResponsiveImage(EenABtjhr,),
                    },
                    className: 'framer-o512w0',
                    'data-framer-name': 'feature-image',
                    layoutDependency,
                    layoutId: 'LSqsE7joS',
                    style: { borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16, },
                    variants: {
                      je6uY1FbU: {
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      },
                    },
                    ...addPropertyOverrides3(
                      {
                        Cowh8Nfws: {
                          background: {
                            alt: '',
                            fit: 'fill',
                            intrinsicHeight: 480,
                            intrinsicWidth: 394,
                            pixelHeight: 2160,
                            pixelWidth: 2160,
                            sizes: `max((${
                              (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                            } - ${Vai8Fm96Y * 2}px) - ${yDCnIBg4Y * 0}px, 1px)`,
                            ...toResponsiveImage(EenABtjhr,),
                          },
                        },
                        je6uY1FbU: {
                          background: {
                            alt: '',
                            fit: 'fill',
                            intrinsicHeight: 480,
                            intrinsicWidth: 394,
                            loading: getLoadingLazyAtYPosition2(
                              ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                                (0 +
                                  (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) ||
                                      648) - 0 - 883.7) / 2) +
                                0 + 176.7 + 0,
                            ),
                            pixelHeight: 2160,
                            pixelWidth: 2160,
                            sizes: `max(${
                              (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                            } - ${yDCnIBg4Y * 0}px, 1px)`,
                            ...toResponsiveImage(EenABtjhr,),
                          },
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
                /* @__PURE__ */ _jsx6(RichText2, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx6(React4.Fragment, {
                    children: /* @__PURE__ */ _jsx6(motion5.p, {
                      className: 'framer-styles-preset-hjr3u4',
                      'data-styles-preset': 'NM8opoDhC',
                      style: {
                        '--framer-text-color':
                          'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(66, 66, 66)))',
                      },
                      children:
                        'Eliminate the hassle of multiple subscriptions and save on costs. Experience seamless workflows with HubEngage\'s unified platform. Simplify your operations and focus more on your team. Discover how HubEngage consolidates your tools for maximum efficiency.',
                    },),
                  },),
                  className: 'framer-1cfonrh',
                  'data-framer-name': 'feature overview',
                  fonts: ['Inter',],
                  layoutDependency,
                  layoutId: 'mMkoCJFz0',
                  style: { '--extracted-r6o4lv': 'var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(66, 66, 66))', },
                  text: wwuq8jfNR,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
                Ec9Q3zdMx && /* @__PURE__ */ _jsx6(motion5.div, {
                  className: 'framer-1a0sakg',
                  'data-framer-name': 'feature button-wrapper',
                  layoutDependency,
                  layoutId: 'PuFXGslTW',
                  children: /* @__PURE__ */ _jsx6(ComponentViewportProvider2, {
                    height: 51,
                    y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                      (0 +
                        (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 500) - 0 -
                            367.7) / 2) +
                      0 + 308.7 + 8,
                    ...addPropertyOverrides3(
                      {
                        Cowh8Nfws: { y: void 0, },
                        iOUZ3XEmj: { y: void 0, },
                        je6uY1FbU: {
                          y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                            (0 +
                              (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 648) -
                                  0 - 883.7) / 2) +
                            0 + 824.7 + 8,
                        },
                        MWD37BAqY: {
                          y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 500 +
                            0 + 308.7 + 8,
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-zc5x1k-container',
                      layoutDependency,
                      layoutId: 'P85TAREPg-container',
                      children: /* @__PURE__ */ _jsx6(ButtonWithCTAClassnameWithMappedReactProps1v1ipky, {
                        height: '100%',
                        hoe0QDrl5: Wl6u7Nr5l,
                        I0Sz0dr2v: 16,
                        i8nKkVReT: '12px 28px 12px 28px',
                        id: 'P85TAREPg',
                        Iyt7vRlRL: '100px',
                        KPs74ZNM1: { borderColor: 'rgba(0, 0, 0, 0.15)', borderStyle: 'solid', borderWidth: 1, },
                        layoutId: 'P85TAREPg',
                        n8jmDbiSM: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76))',
                        od7wtCL7T: S5lpOxdRw,
                        OGI9WGJ1a: false,
                        uBsjwgvnU: true,
                        variant: 'ypSdI0dLV',
                        width: '100%',
                        y4hb9lsDX: 'var(--token-97834521-815d-4999-a146-7853838f95e3, rgba(0, 0, 0, 0))',
                      },),
                    },),
                  },),
                },),
              ],
            },),
            isDisplayed1() && /* @__PURE__ */ _jsx6(motion5.div, {
              className: 'framer-h5n4z8',
              'data-framer-name': 'feature image-wrapper',
              layoutDependency,
              layoutId: 'XaDuGnEnq',
              style: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, },
              children: /* @__PURE__ */ _jsx6(Image2, {
                as: 'figure',
                background: {
                  alt: '',
                  fit: 'fit',
                  intrinsicHeight: 480,
                  intrinsicWidth: 394,
                  loading: getLoadingLazyAtYPosition2(
                    ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                      (0 +
                        (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 500) - 0 -
                            (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 500) -
                                0) * 1) / 2) +
                      (0 +
                        ((((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 500) - 0) *
                              1 - 0 - 500) / 2),
                  ),
                  pixelHeight: 3648,
                  pixelWidth: 5472,
                  sizes: `max((${
                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                  } - ${yDCnIBg4Y * 1}px) / 2, 1px)`,
                  ...toResponsiveImage(EenABtjhr,),
                  ...{ positionX: 'center', positionY: 'center', },
                },
                className: 'framer-1n5svwo',
                'data-framer-name': 'feature-image',
                layoutDependency,
                layoutId: 'NvEO1qs2z',
                style: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, },
                ...addPropertyOverrides3(
                  {
                    iOUZ3XEmj: {
                      background: {
                        alt: '',
                        fit: 'fit',
                        intrinsicHeight: 480,
                        intrinsicWidth: 394,
                        pixelHeight: 3648,
                        pixelWidth: 5472,
                        sizes: `max(((${
                          (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                        } - ${Vai8Fm96Y * 2}px) - ${yDCnIBg4Y * 1}px) / 2, 1px)`,
                        ...toResponsiveImage(EenABtjhr,),
                        ...{ positionX: 'center', positionY: 'center', },
                      },
                    },
                    MWD37BAqY: {
                      background: {
                        alt: '',
                        fit: 'fit',
                        intrinsicHeight: 480,
                        intrinsicWidth: 394,
                        loading: getLoadingLazyAtYPosition2(
                          ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 0 + 0,
                        ),
                        pixelHeight: 3648,
                        pixelWidth: 5472,
                        sizes: `max(${
                          (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                        }, 1px)`,
                        ...toResponsiveImage(EenABtjhr,),
                        ...{ positionX: 'center', positionY: 'center', },
                      },
                    },
                  },
                  baseVariant,
                  gestureVariant,
                ),
              },),
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css12 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-Lqpch.framer-57bc2s, .framer-Lqpch .framer-57bc2s { display: block; }',
  '.framer-Lqpch.framer-n8ci9a { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: calc(max(0, var(--oat1qo)) * 1px); height: min-content; justify-content: flex-start; max-width: 1280px; overflow: hidden; padding: 0px; position: relative; width: 1280px; }',
  '.framer-Lqpch .framer-1dssq18 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }',
  '.framer-Lqpch .framer-1rxjarv { --framer-text-wrap: balance; -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; width: 100%; }',
  '.framer-Lqpch .framer-7kcsc5, .framer-Lqpch .framer-1cfonrh { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-Lqpch .framer-ycjm4d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }',
  '.framer-Lqpch .framer-o512w0 { aspect-ratio: 1.6 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 125px); position: relative; width: 1px; }',
  '.framer-Lqpch .framer-1a0sakg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 8px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-Lqpch .framer-zc5x1k-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-Lqpch .framer-h5n4z8 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }',
  '.framer-Lqpch .framer-1n5svwo { aspect-ratio: 1.2 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 500px); position: relative; width: 1px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Lqpch.framer-n8ci9a, .framer-Lqpch .framer-1dssq18, .framer-Lqpch .framer-ycjm4d, .framer-Lqpch .framer-1a0sakg, .framer-Lqpch .framer-h5n4z8 { gap: 0px; } .framer-Lqpch.framer-n8ci9a > * { margin: 0px; margin-left: calc(calc(max(0, var(--oat1qo)) * 1px) / 2); margin-right: calc(calc(max(0, var(--oat1qo)) * 1px) / 2); } .framer-Lqpch.framer-n8ci9a > :first-child, .framer-Lqpch .framer-ycjm4d > :first-child, .framer-Lqpch .framer-1a0sakg > :first-child, .framer-Lqpch .framer-h5n4z8 > :first-child { margin-left: 0px; } .framer-Lqpch.framer-n8ci9a > :last-child, .framer-Lqpch .framer-ycjm4d > :last-child, .framer-Lqpch .framer-1a0sakg > :last-child, .framer-Lqpch .framer-h5n4z8 > :last-child { margin-right: 0px; } .framer-Lqpch .framer-1dssq18 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-Lqpch .framer-1dssq18 > :first-child { margin-top: 0px; } .framer-Lqpch .framer-1dssq18 > :last-child { margin-bottom: 0px; } .framer-Lqpch .framer-ycjm4d > *, .framer-Lqpch .framer-1a0sakg > *, .framer-Lqpch .framer-h5n4z8 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }',
  '.framer-Lqpch.framer-v-n4ayf3 .framer-1dssq18 { order: 1; }',
  '.framer-Lqpch.framer-v-n4ayf3 .framer-h5n4z8 { order: 0; }',
  '.framer-Lqpch.framer-v-1w10psg.framer-n8ci9a { max-width: unset; width: 390px; }',
  '.framer-Lqpch.framer-v-1w10psg .framer-1rxjarv, .framer-Lqpch.framer-v-awy7ih .framer-1rxjarv, .framer-Lqpch.framer-v-1iahtap .framer-1rxjarv { --framer-text-wrap: unset; }',
  '.framer-Lqpch.framer-v-1w10psg .framer-7kcsc5, .framer-Lqpch.framer-v-1w10psg .framer-1cfonrh, .framer-Lqpch.framer-v-awy7ih .framer-7kcsc5, .framer-Lqpch.framer-v-awy7ih .framer-1cfonrh, .framer-Lqpch.framer-v-1iahtap .framer-7kcsc5, .framer-Lqpch.framer-v-1iahtap .framer-1cfonrh { --framer-text-wrap-override: none; }',
  '.framer-Lqpch.framer-v-1w10psg .framer-o512w0 { height: var(--framer-aspect-ratio-supported, 244px); }',
  '.framer-Lqpch.framer-v-1axqi2g.framer-n8ci9a { padding: var(--fznmfs); will-change: var(--framer-will-change-override, transform); }',
  '.framer-Lqpch.framer-v-1axqi2g .framer-1n5svwo { height: var(--framer-aspect-ratio-supported, 434px); }',
  '.framer-Lqpch.framer-v-awy7ih.framer-n8ci9a { padding: var(--fznmfs); width: 551px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-Lqpch.framer-v-awy7ih .framer-o512w0 { height: var(--framer-aspect-ratio-supported, 245px); }',
  '.framer-Lqpch.framer-v-1iahtap.framer-n8ci9a { flex-direction: column; max-width: unset; width: 390px; }',
  '.framer-Lqpch.framer-v-1iahtap .framer-1dssq18 { flex: none; order: 1; width: 100%; }',
  '.framer-Lqpch.framer-v-1iahtap .framer-h5n4z8 { align-self: unset; flex: none; height: min-content; order: 0; width: 100%; }',
  '.framer-Lqpch.framer-v-1iahtap .framer-1n5svwo { height: var(--framer-aspect-ratio-supported, 325px); }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Lqpch.framer-v-1iahtap.framer-n8ci9a { gap: 0px; } .framer-Lqpch.framer-v-1iahtap.framer-n8ci9a > * { margin: 0px; margin-bottom: calc(calc(max(0, var(--oat1qo)) * 1px) / 2); margin-top: calc(calc(max(0, var(--oat1qo)) * 1px) / 2); } .framer-Lqpch.framer-v-1iahtap.framer-n8ci9a > :first-child { margin-top: 0px; } .framer-Lqpch.framer-v-1iahtap.framer-n8ci9a > :last-child { margin-bottom: 0px; } }',
  ...css3,
  ...css5,
];
var FramerDgNoyF9cS = withCSS3(Component4, css12, 'framer-Lqpch',);
var stdin_default3 = FramerDgNoyF9cS;
FramerDgNoyF9cS.displayName = 'sections/feature';
FramerDgNoyF9cS.defaultProps = { height: 500, width: 1280, };
addPropertyControls5(FramerDgNoyF9cS, {
  variant: {
    options: ['akvCPg2A6', 'J807S8pmY', 'je6uY1FbU', 'iOUZ3XEmj', 'Cowh8Nfws', 'MWD37BAqY',],
    optionTitles: ['img right', 'img left', 'mobile image middle', 'box desktop', 'box mobile', 'mobile image top',],
    title: 'Variant',
    type: ControlType5.Enum,
  },
  ffFqlap6N: { defaultValue: 'UNIFied platform', displayTextArea: false, title: 'preHeadingText', type: ControlType5.String, },
  kLSUfV79S: {
    defaultValue: 'Integrating all your engagement tools in one platform.',
    displayTextArea: false,
    title: 'Title',
    type: ControlType5.String,
  },
  wwuq8jfNR: {
    defaultValue:
      'Eliminate the hassle of multiple subscriptions and save on costs. Experience seamless workflows with HubEngage\'s unified platform. Simplify your operations and focus more on your team. Discover how HubEngage consolidates your tools for maximum efficiency.',
    displayTextArea: false,
    title: 'Description',
    type: ControlType5.String,
  },
  EenABtjhr: {
    __defaultAssetReference: 'data:framer/asset-reference,XBaNXcLkLfIfJtiznircmL3ai4.png?originalFilename=16_9.png&preferredSize=auto',
    description: '',
    title: 'Image',
    type: ControlType5.ResponsiveImage,
  },
  Wl6u7Nr5l: { defaultValue: 'Learn more', displayTextArea: false, title: 'cta text', type: ControlType5.String, },
  S5lpOxdRw: { title: 'cta link', type: ControlType5.Link, },
  Ec9Q3zdMx: { defaultValue: true, title: 'cta visible', type: ControlType5.Boolean, },
  bb0d7Zsk2: { defaultValue: 'rgb(255, 255, 255)', title: 'Background', type: ControlType5.Color, },
  dVvnNuXFk: { defaultValue: '40px', title: 'Radius', type: ControlType5.BorderRadius, },
  yDCnIBg4Y: { defaultValue: 80, min: 0, title: 'Gap', type: ControlType5.Number, },
  Vai8Fm96Y: { defaultValue: '80px', title: 'Padding', type: ControlType5.Padding, },
},);
addFonts3(FramerDgNoyF9cS, [
  {
    explicitInter: true,
    fonts: [{
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      url: 'https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2',
      weight: '600',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      url: 'https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2',
      weight: '600',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+1F00-1FFF',
      url: 'https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2',
      weight: '600',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0370-03FF',
      url: 'https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2',
      weight: '600',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      url: 'https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2',
      weight: '600',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      url: 'https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2',
      weight: '600',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
      url: 'https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2',
      weight: '600',
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
    },],
  },
  ...ButtonFonts,
  ...getFontsFromSharedStyle(fonts3,),
  ...getFontsFromSharedStyle(fonts5,),
], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/QTfzFG5Ts2y5bqrHMzZM/aTuekoDcel91KUGxmNoa/dJKGcPX7V.js
import { jsx as _jsx7, jsxs as _jsxs4, } from 'react/jsx-runtime';
import {
  addFonts as addFonts4,
  addPropertyControls as addPropertyControls6,
  ControlType as ControlType6,
  cx as cx4,
  getFontsFromSharedStyle as getFontsFromSharedStyle2,
  RichText as RichText3,
  useActiveVariantCallback,
  useComponentViewport as useComponentViewport4,
  useLocaleInfo as useLocaleInfo4,
  useVariantState as useVariantState4,
  withCSS as withCSS4,
} from 'unframer';
import { LayoutGroup as LayoutGroup5, motion as motion6, MotionConfigContext as MotionConfigContext4, } from 'unframer';
import * as React5 from 'react';
var cycleOrder4 = ['uEzvttwN2', 'MzilS4QII',];
var serializationHash4 = 'framer-FmO03';
var variantClassNames4 = { MzilS4QII: 'framer-v-fgvbg2', uEzvttwN2: 'framer-v-1l3xd5k', };
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition14 = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: 'spring', };
var Transition4 = ({ value, children, },) => {
  const config = React5.useContext(MotionConfigContext4,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx7(MotionConfigContext4.Provider, { value: contextValue, children, },);
};
var Variants4 = motion6.create(React5.Fragment,);
var humanReadableVariantMap4 = { Closed: 'uEzvttwN2', Open: 'MzilS4QII', };
var getProps4 = ({ answer, height, id, question, width, ...props },) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1, _ref2;
  return {
    ...props,
    T8rQFvSBR: (_ref = answer !== null && answer !== void 0 ? answer : props.T8rQFvSBR) !== null && _ref !== void 0
      ? _ref
      : 'Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.',
    variant:
      (_ref1 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap4[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref1 !== void 0
        ? _ref1
        : 'uEzvttwN2',
    W88zB8mIG: (_ref2 = question !== null && question !== void 0 ? question : props.W88zB8mIG) !== null && _ref2 !== void 0
      ? _ref2
      : 'Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.',
  };
};
var createLayoutDependency4 = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component5 = /* @__PURE__ */ React5.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo4();
  const { style, className: className10, layoutId, variant, W88zB8mIG, T8rQFvSBR, ...restProps } = getProps4(props,);
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
  } = useVariantState4({ cycleOrder: cycleOrder4, defaultVariant: 'uEzvttwN2', variant, variantClassNames: variantClassNames4, },);
  const layoutDependency = createLayoutDependency4(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTap170us00 = activeVariantCallback(async (...args) => {
    setVariant('MzilS4QII',);
  },);
  const onTap110fl6n = activeVariantCallback(async (...args) => {
    setVariant('uEzvttwN2',);
  },);
  const ref1 = React5.useRef(null,);
  const isDisplayed = () => {
    if (baseVariant === 'MzilS4QII') return true;
    return false;
  };
  const defaultLayoutId = React5.useId();
  const sharedStyleClassNames = [className9, className5,];
  const componentViewport = useComponentViewport4();
  return /* @__PURE__ */ _jsx7(LayoutGroup5, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx7(Variants4, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx7(Transition4, {
        value: transition14,
        children: /* @__PURE__ */ _jsxs4(motion6.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx4(serializationHash4, ...sharedStyleClassNames, 'framer-1l3xd5k', className10, classNames,),
          'data-framer-name': 'Closed',
          layoutDependency,
          layoutId: 'uEzvttwN2',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides4({ MzilS4QII: { 'data-framer-name': 'Open', }, }, baseVariant, gestureVariant,),
          children: [
            /* @__PURE__ */ _jsxs4(motion6.div, {
              className: 'framer-9bxgkt',
              'data-framer-name': 'Question',
              'data-highlight': true,
              layoutDependency,
              layoutId: 'P5KW3RRD5',
              onTap: onTap170us00,
              ...addPropertyOverrides4({ MzilS4QII: { onTap: onTap110fl6n, }, }, baseVariant, gestureVariant,),
              children: [
                /* @__PURE__ */ _jsx7(RichText3, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx7(React5.Fragment, {
                    children: /* @__PURE__ */ _jsx7(motion6.h3, {
                      className: 'framer-styles-preset-1063jmz',
                      'data-styles-preset': 'vS6MrDfuH',
                      style: {
                        '--framer-text-color': 'var(--extracted-a0htzi, var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0)))',
                      },
                      children: 'Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.',
                    },),
                  },),
                  className: 'framer-1rluqri',
                  fonts: ['Inter',],
                  layoutDependency,
                  layoutId: 'uUWQ0tEle',
                  style: {
                    '--extracted-a0htzi': 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))',
                    '--framer-link-text-color': 'rgb(0, 153, 255)',
                    '--framer-link-text-decoration': 'underline',
                    '--framer-paragraph-spacing': '0px',
                  },
                  text: W88zB8mIG,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ _jsx7(motion6.div, {
                  className: 'framer-nozf5r',
                  layoutDependency,
                  layoutId: 'fqMlMZyqL',
                  children: /* @__PURE__ */ _jsxs4(motion6.div, {
                    className: 'framer-h020j5',
                    'data-framer-name': 'Plus',
                    layoutDependency,
                    layoutId: 'fIPNPxlgo',
                    style: { rotate: 0, },
                    variants: { MzilS4QII: { rotate: 45, }, },
                    children: [
                      /* @__PURE__ */ _jsx7(motion6.div, {
                        className: 'framer-1jnkgfl',
                        layoutDependency,
                        layoutId: 'ef2gda4Lw',
                        style: {
                          backgroundColor: 'rgb(0, 0, 0)',
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                      },),
                      /* @__PURE__ */ _jsx7(motion6.div, {
                        className: 'framer-df4k0a',
                        layoutDependency,
                        layoutId: 'gY0jGdRIj',
                        style: {
                          backgroundColor: 'rgb(0, 0, 0)',
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                      },),
                    ],
                  },),
                },),
              ],
            },),
            isDisplayed() && /* @__PURE__ */ _jsx7(motion6.div, {
              className: 'framer-c2ik6z',
              'data-framer-name': 'Answer',
              layoutDependency,
              layoutId: 't5rqWdps7',
              style: { opacity: 0, },
              variants: { MzilS4QII: { opacity: 1, }, },
              children: /* @__PURE__ */ _jsx7(RichText3, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx7(React5.Fragment, {
                  children: /* @__PURE__ */ _jsx7(motion6.p, {
                    className: 'framer-styles-preset-hjr3u4',
                    'data-styles-preset': 'NM8opoDhC',
                    style: {
                      '--framer-text-color':
                        'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102)))',
                    },
                    children: 'Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.',
                  },),
                },),
                className: 'framer-cyak7k',
                fonts: ['Inter',],
                layoutDependency,
                layoutId: 'IT4sx8DJ5',
                style: {
                  '--extracted-r6o4lv': 'var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102))',
                  '--framer-paragraph-spacing': '0px',
                  opacity: 0.6,
                },
                text: T8rQFvSBR,
                variants: { MzilS4QII: { opacity: 1, }, },
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css13 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-FmO03.framer-1tgyk4f, .framer-FmO03 .framer-1tgyk4f { display: block; }',
  '.framer-FmO03.framer-1l3xd5k { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 400px; }',
  '.framer-FmO03 .framer-9bxgkt { -webkit-user-select: none; align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px 0px 20px 0px; position: relative; user-select: none; width: 100%; }',
  '.framer-FmO03 .framer-1rluqri { --framer-text-wrap-override: none; flex: 1 0 0px; height: auto; position: relative; width: 1px; }',
  '.framer-FmO03 .framer-nozf5r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 4px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-FmO03 .framer-h020j5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 16px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 16px; z-index: 1; }',
  '.framer-FmO03 .framer-1jnkgfl { bottom: 0px; flex: none; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: 0px; width: 2px; z-index: 1; }',
  '.framer-FmO03 .framer-df4k0a { flex: none; height: 2px; left: 0px; overflow: visible; position: absolute; right: 0px; top: calc(50.00000000000002% - 2px / 2); z-index: 1; }',
  '.framer-FmO03 .framer-c2ik6z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 20px 0px; position: relative; width: 100%; }',
  '.framer-FmO03 .framer-cyak7k { --framer-text-wrap-override: none; -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; width: 100%; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-FmO03.framer-1l3xd5k, .framer-FmO03 .framer-9bxgkt, .framer-FmO03 .framer-nozf5r, .framer-FmO03 .framer-h020j5, .framer-FmO03 .framer-c2ik6z { gap: 0px; } .framer-FmO03.framer-1l3xd5k > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-FmO03.framer-1l3xd5k > :first-child, .framer-FmO03 .framer-h020j5 > :first-child, .framer-FmO03 .framer-c2ik6z > :first-child { margin-top: 0px; } .framer-FmO03.framer-1l3xd5k > :last-child, .framer-FmO03 .framer-h020j5 > :last-child, .framer-FmO03 .framer-c2ik6z > :last-child { margin-bottom: 0px; } .framer-FmO03 .framer-9bxgkt > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-FmO03 .framer-9bxgkt > :first-child, .framer-FmO03 .framer-nozf5r > :first-child { margin-left: 0px; } .framer-FmO03 .framer-9bxgkt > :last-child, .framer-FmO03 .framer-nozf5r > :last-child { margin-right: 0px; } .framer-FmO03 .framer-nozf5r > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-FmO03 .framer-h020j5 > *, .framer-FmO03 .framer-c2ik6z > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }',
  ...css9,
  ...css5,
];
var FramerdJKGcPX7V = withCSS4(Component5, css13, 'framer-FmO03',);
var stdin_default4 = FramerdJKGcPX7V;
FramerdJKGcPX7V.displayName = 'accordion';
FramerdJKGcPX7V.defaultProps = { height: 118, width: 400, };
addPropertyControls6(FramerdJKGcPX7V, {
  variant: { options: ['uEzvttwN2', 'MzilS4QII',], optionTitles: ['Closed', 'Open',], title: 'Variant', type: ControlType6.Enum, },
  W88zB8mIG: {
    defaultValue: 'Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.',
    displayTextArea: true,
    title: 'Question',
    type: ControlType6.String,
  },
  T8rQFvSBR: {
    defaultValue: 'Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.',
    displayTextArea: true,
    title: 'Answer',
    type: ControlType6.String,
  },
},);
addFonts4(FramerdJKGcPX7V, [
  {
    explicitInter: true,
    fonts: [{
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
    },],
  },
  ...getFontsFromSharedStyle2(fonts9,),
  ...getFontsFromSharedStyle2(fonts5,),
], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/ymf53fLxcd2My2TRmM1D/dAYHePdALqRHRqrWhxnx/g4XOQYV2T.js
import { jsx as _jsx8, jsxs as _jsxs5, } from 'react/jsx-runtime';
import {
  addFonts as addFonts5,
  addPropertyControls as addPropertyControls7,
  ComponentViewportProvider as ComponentViewportProvider3,
  ControlType as ControlType7,
  cx as cx5,
  getFonts as getFonts3,
  getFontsFromSharedStyle as getFontsFromSharedStyle3,
  getLoadingLazyAtYPosition as getLoadingLazyAtYPosition3,
  Image as Image3,
  RichText as RichText4,
  useComponentViewport as useComponentViewport5,
  useLocaleInfo as useLocaleInfo5,
  useVariantState as useVariantState5,
  withCSS as withCSS5,
} from 'unframer';
import { LayoutGroup as LayoutGroup6, motion as motion7, MotionConfigContext as MotionConfigContext5, } from 'unframer';
import * as React6 from 'react';
var PhosphorFonts2 = getFonts3(Icon2,);
var ButtonFonts2 = getFonts3(stdin_default2,);
var cycleOrder5 = ['q_3z7MkSN', 'WLamphkzv', 't0OU6QHlv', 'yk6yeE9Jy',];
var serializationHash5 = 'framer-5HOJp';
var variantClassNames5 = {
  q_3z7MkSN: 'framer-v-6do3ka',
  t0OU6QHlv: 'framer-v-1ko3cs6',
  WLamphkzv: 'framer-v-rd1igr',
  yk6yeE9Jy: 'framer-v-1k60ygf',
};
function addPropertyOverrides5(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition15 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var toResponsiveImage2 = (value,) => {
  if (typeof value === 'object' && value !== null && typeof value.src === 'string') {
    return value;
  }
  return typeof value === 'string' ? { src: value, } : void 0;
};
var Transition5 = ({ value, children, },) => {
  const config = React6.useContext(MotionConfigContext5,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx8(MotionConfigContext5.Provider, { value: contextValue, children, },);
};
var Variants5 = motion7.create(React6.Fragment,);
var humanReadableVariantMap5 = {
  'box  middle': 'q_3z7MkSN',
  'box left': 'WLamphkzv',
  'default centre': 't0OU6QHlv',
  'default left': 'yk6yeE9Jy',
};
var getProps5 = (
  { cTA, description, height, icon, iconBackground, iconColor, iconVisible, id, image, image1, link, showCta, text, width, ...props },
) => {
  var _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _humanReadableVariantMap_props_variant, _ref7, _ref8;
  return {
    ...props,
    BFuTBK47u: (_ref = text !== null && text !== void 0 ? text : props.BFuTBK47u) !== null && _ref !== void 0
      ? _ref
      : 'Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.',
    cX1P9xQse: link !== null && link !== void 0 ? link : props.cX1P9xQse,
    jFgwazo_q: (_ref1 = iconColor !== null && iconColor !== void 0 ? iconColor : props.jFgwazo_q) !== null && _ref1 !== void 0
      ? _ref1
      : 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76))',
    M49ZkDl5Y: (_ref2 = icon !== null && icon !== void 0 ? icon : props.M49ZkDl5Y) !== null && _ref2 !== void 0 ? _ref2 : 'House',
    oc_8kOa9a: (_ref3 = description !== null && description !== void 0 ? description : props.oc_8kOa9a) !== null && _ref3 !== void 0
      ? _ref3
      : 'Integration ecosystem',
    OLqpcuIeL: image !== null && image !== void 0 ? image : props.OLqpcuIeL,
    PFec_i8Ff: (_ref4 = image1 !== null && image1 !== void 0 ? image1 : props.PFec_i8Ff) !== null && _ref4 !== void 0 ? _ref4 : {
      src: 'https://framerusercontent.com/images/WwuSEtN77IMXeoOP6vheQadgDRA.jpg?scale-down-to=512',
      srcSet:
        'https://framerusercontent.com/images/WwuSEtN77IMXeoOP6vheQadgDRA.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/WwuSEtN77IMXeoOP6vheQadgDRA.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/WwuSEtN77IMXeoOP6vheQadgDRA.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/WwuSEtN77IMXeoOP6vheQadgDRA.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/WwuSEtN77IMXeoOP6vheQadgDRA.jpg 9600w',
    },
    qkbS0bCx8: (_ref5 = cTA !== null && cTA !== void 0 ? cTA : props.qkbS0bCx8) !== null && _ref5 !== void 0 ? _ref5 : 'Learn more',
    UaS05r1yh:
      (_ref6 = iconBackground !== null && iconBackground !== void 0 ? iconBackground : props.UaS05r1yh) !== null && _ref6 !== void 0
        ? _ref6
        : 'var(--token-cd33d90a-ec6a-4a56-8bbb-7b9028284170, rgb(245, 195, 90))',
    variant:
      (_ref7 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap5[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref7 !== void 0
        ? _ref7
        : 'q_3z7MkSN',
    Y3X4CKI40: (_ref8 = iconVisible !== null && iconVisible !== void 0 ? iconVisible : props.Y3X4CKI40) !== null && _ref8 !== void 0
      ? _ref8
      : true,
    ZA2T3dGW4: showCta !== null && showCta !== void 0 ? showCta : props.ZA2T3dGW4,
  };
};
var createLayoutDependency5 = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component6 = /* @__PURE__ */ React6.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo5();
  const {
    style,
    className: className10,
    layoutId,
    variant,
    oc_8kOa9a,
    BFuTBK47u,
    OLqpcuIeL,
    PFec_i8Ff,
    Y3X4CKI40,
    UaS05r1yh,
    jFgwazo_q,
    M49ZkDl5Y,
    ZA2T3dGW4,
    qkbS0bCx8,
    cX1P9xQse,
    ...restProps
  } = getProps5(props,);
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
  } = useVariantState5({ cycleOrder: cycleOrder5, defaultVariant: 'q_3z7MkSN', variant, variantClassNames: variantClassNames5, },);
  const layoutDependency = createLayoutDependency5(props, variants,);
  const ref1 = React6.useRef(null,);
  const defaultLayoutId = React6.useId();
  const sharedStyleClassNames = [className9, className5,];
  const componentViewport = useComponentViewport5();
  return /* @__PURE__ */ _jsx8(LayoutGroup6, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx8(Variants5, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx8(Transition5, {
        value: transition15,
        children: /* @__PURE__ */ _jsxs5(motion7.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx5(serializationHash5, ...sharedStyleClassNames, 'framer-6do3ka', className10, classNames,),
          'data-border': true,
          'data-framer-name': 'box  middle',
          layoutDependency,
          layoutId: 'q_3z7MkSN',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            '--border-bottom-width': '1px',
            '--border-color': 'var(--token-700a1961-c2b8-4f37-ad37-e3c28ea0fc93, rgba(34, 34, 34, 0.1))',
            '--border-left-width': '1px',
            '--border-right-width': '1px',
            '--border-style': 'solid',
            '--border-top-width': '1px',
            backgroundColor: 'var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255))',
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.05)',
            ...style,
          },
          variants: {
            t0OU6QHlv: {
              '--border-bottom-width': '0px',
              '--border-left-width': '0px',
              '--border-right-width': '0px',
              '--border-top-width': '0px',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              boxShadow: 'none',
            },
            yk6yeE9Jy: {
              '--border-bottom-width': '0px',
              '--border-left-width': '0px',
              '--border-right-width': '0px',
              '--border-top-width': '0px',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              boxShadow: 'none',
            },
          },
          ...addPropertyOverrides5(
            {
              t0OU6QHlv: { 'data-framer-name': 'default centre', },
              WLamphkzv: { 'data-framer-name': 'box left', },
              yk6yeE9Jy: { 'data-framer-name': 'default left', },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            OLqpcuIeL && /* @__PURE__ */ _jsx8(Image3, {
              background: {
                alt: '',
                fit: 'fill',
                intrinsicHeight: 5400,
                intrinsicWidth: 9600,
                loading: getLoadingLazyAtYPosition3(
                  ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 32 + 0,
                ),
                pixelHeight: 5400,
                pixelWidth: 9600,
                sizes: `calc(${
                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                } - 64px)`,
                ...toResponsiveImage2(PFec_i8Ff,),
              },
              className: 'framer-19i6z41',
              'data-border': true,
              layoutDependency,
              layoutId: 'JAsmkVpv0',
              style: {
                '--border-bottom-width': '1px',
                '--border-color': 'var(--token-700a1961-c2b8-4f37-ad37-e3c28ea0fc93, rgba(34, 34, 34, 0.1))',
                '--border-left-width': '1px',
                '--border-right-width': '1px',
                '--border-style': 'solid',
                '--border-top-width': '1px',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              },
              ...addPropertyOverrides5(
                {
                  t0OU6QHlv: {
                    background: {
                      alt: '',
                      fit: 'fill',
                      intrinsicHeight: 5400,
                      intrinsicWidth: 9600,
                      loading: getLoadingLazyAtYPosition3(
                        ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 0,
                      ),
                      pixelHeight: 5400,
                      pixelWidth: 9600,
                      sizes: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw',
                      ...toResponsiveImage2(PFec_i8Ff,),
                    },
                  },
                  yk6yeE9Jy: {
                    background: {
                      alt: '',
                      fit: 'fill',
                      intrinsicHeight: 5400,
                      intrinsicWidth: 9600,
                      loading: getLoadingLazyAtYPosition3(
                        ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 0,
                      ),
                      pixelHeight: 5400,
                      pixelWidth: 9600,
                      sizes: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw',
                      ...toResponsiveImage2(PFec_i8Ff,),
                    },
                  },
                },
                baseVariant,
                gestureVariant,
              ),
            },),
            Y3X4CKI40 && /* @__PURE__ */ _jsx8(motion7.div, {
              className: 'framer-18pn0b3',
              'data-framer-name': 'Icon',
              layoutDependency,
              layoutId: 'CSO_stHIs',
              style: {
                backgroundColor: UaS05r1yh,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              },
              children: /* @__PURE__ */ _jsx8(ComponentViewportProvider3, {
                children: /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-bn5lg8-container',
                  layoutDependency,
                  layoutId: 'qW_W25vJS-container',
                  children: /* @__PURE__ */ _jsx8(Icon2, {
                    color: jFgwazo_q,
                    height: '100%',
                    iconSearch: M49ZkDl5Y,
                    iconSelection: 'Leaf',
                    id: 'qW_W25vJS',
                    layoutId: 'qW_W25vJS',
                    mirrored: false,
                    selectByList: false,
                    style: { height: '100%', width: '100%', },
                    weight: 'regular',
                    width: '100%',
                  },),
                },),
              },),
            },),
            /* @__PURE__ */ _jsxs5(motion7.div, {
              className: 'framer-1vlzcu2',
              layoutDependency,
              layoutId: 'b0RUfqyD6',
              children: [
                /* @__PURE__ */ _jsx8(RichText4, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx8(React6.Fragment, {
                    children: /* @__PURE__ */ _jsx8(motion7.h3, {
                      className: 'framer-styles-preset-1063jmz',
                      'data-styles-preset': 'vS6MrDfuH',
                      style: {
                        '--framer-text-alignment': 'center',
                        '--framer-text-color': 'var(--extracted-a0htzi, var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0)))',
                      },
                      children: 'Integration ecosystem',
                    },),
                  },),
                  className: 'framer-1ixtdu9',
                  fonts: ['Inter',],
                  layoutDependency,
                  layoutId: 'ZjKPLk0gq',
                  style: {
                    '--extracted-a0htzi': 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))',
                    '--framer-link-text-color': 'rgb(0, 153, 255)',
                    '--framer-link-text-decoration': 'underline',
                  },
                  text: oc_8kOa9a,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                  ...addPropertyOverrides5(
                    {
                      WLamphkzv: {
                        children: /* @__PURE__ */ _jsx8(React6.Fragment, {
                          children: /* @__PURE__ */ _jsx8(motion7.h3, {
                            className: 'framer-styles-preset-1063jmz',
                            'data-styles-preset': 'vS6MrDfuH',
                            style: {
                              '--framer-text-alignment': 'left',
                              '--framer-text-color':
                                'var(--extracted-a0htzi, var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0)))',
                            },
                            children: 'Integration ecosystem',
                          },),
                        },),
                      },
                      yk6yeE9Jy: {
                        children: /* @__PURE__ */ _jsx8(React6.Fragment, {
                          children: /* @__PURE__ */ _jsx8(motion7.h3, {
                            className: 'framer-styles-preset-1063jmz',
                            'data-styles-preset': 'vS6MrDfuH',
                            style: {
                              '--framer-text-alignment': 'left',
                              '--framer-text-color':
                                'var(--extracted-a0htzi, var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0)))',
                            },
                            children: 'Integration ecosystem',
                          },),
                        },),
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                /* @__PURE__ */ _jsx8(RichText4, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx8(React6.Fragment, {
                    children: /* @__PURE__ */ _jsx8(motion7.p, {
                      className: 'framer-styles-preset-hjr3u4',
                      'data-styles-preset': 'NM8opoDhC',
                      style: {
                        '--framer-text-alignment': 'center',
                        '--framer-text-color':
                          'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(66, 66, 66)))',
                      },
                      children:
                        'Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.',
                    },),
                  },),
                  className: 'framer-1ryuf4c',
                  fonts: ['Inter',],
                  layoutDependency,
                  layoutId: 'vl8EmGKgJ',
                  style: {
                    '--extracted-r6o4lv': 'var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(66, 66, 66))',
                    '--framer-link-text-color': 'rgb(0, 153, 255)',
                    '--framer-link-text-decoration': 'underline',
                    opacity: 0.8,
                  },
                  text: BFuTBK47u,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                  ...addPropertyOverrides5(
                    {
                      WLamphkzv: {
                        children: /* @__PURE__ */ _jsx8(React6.Fragment, {
                          children: /* @__PURE__ */ _jsx8(motion7.p, {
                            className: 'framer-styles-preset-hjr3u4',
                            'data-styles-preset': 'NM8opoDhC',
                            style: {
                              '--framer-text-alignment': 'left',
                              '--framer-text-color':
                                'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(66, 66, 66)))',
                            },
                            children:
                              'Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.',
                          },),
                        },),
                      },
                      yk6yeE9Jy: {
                        children: /* @__PURE__ */ _jsx8(React6.Fragment, {
                          children: /* @__PURE__ */ _jsx8(motion7.p, {
                            className: 'framer-styles-preset-hjr3u4',
                            'data-styles-preset': 'NM8opoDhC',
                            style: {
                              '--framer-text-alignment': 'left',
                              '--framer-text-color':
                                'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(66, 66, 66)))',
                            },
                            children:
                              'Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.',
                          },),
                        },),
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                ZA2T3dGW4 && /* @__PURE__ */ _jsx8(ComponentViewportProvider3, {
                  height: 51,
                  y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 32 + 288 + 0 +
                    131.5,
                  ...addPropertyOverrides5(
                    {
                      t0OU6QHlv: {
                        y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 288 +
                          0 + 131.5,
                      },
                      yk6yeE9Jy: {
                        y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 288 +
                          0 + 131.5,
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-1trkuny-container',
                    layoutDependency,
                    layoutId: 'YYcnLs_Z3-container',
                    children: /* @__PURE__ */ _jsx8(stdin_default2, {
                      height: '100%',
                      hoe0QDrl5: qkbS0bCx8,
                      I0Sz0dr2v: 16,
                      i8nKkVReT: '16px 32px 16px 32px',
                      id: 'YYcnLs_Z3',
                      Iyt7vRlRL: '100px',
                      KPs74ZNM1: {
                        borderColor: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(156, 79, 255)) /* {"name":"Primary"} */',
                        borderStyle: 'solid',
                        borderWidth: 1,
                      },
                      layoutId: 'YYcnLs_Z3',
                      n8jmDbiSM: 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))',
                      od7wtCL7T: cX1P9xQse,
                      OGI9WGJ1a: false,
                      uBsjwgvnU: true,
                      variant: 'oXdM1j_Wq',
                      width: '100%',
                      y4hb9lsDX: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(156, 79, 255))',
                    },),
                  },),
                },),
              ],
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css14 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-5HOJp.framer-7p01g5, .framer-5HOJp .framer-7p01g5 { display: block; }',
  '.framer-5HOJp.framer-6do3ka { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 400px; overflow: hidden; padding: 32px; position: relative; width: 360px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-5HOJp .framer-19i6z41 { aspect-ratio: 1.48 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 135px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
  '.framer-5HOJp .framer-18pn0b3 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 48px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 48px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-5HOJp .framer-bn5lg8-container { flex: none; height: 28px; position: relative; width: 28px; }',
  '.framer-5HOJp .framer-1vlzcu2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
  '.framer-5HOJp .framer-1ixtdu9 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-5HOJp .framer-1ryuf4c { flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-5HOJp .framer-1trkuny-container { flex: none; height: auto; position: relative; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5HOJp.framer-6do3ka, .framer-5HOJp .framer-18pn0b3, .framer-5HOJp .framer-1vlzcu2 { gap: 0px; } .framer-5HOJp.framer-6do3ka > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-5HOJp.framer-6do3ka > :first-child, .framer-5HOJp .framer-1vlzcu2 > :first-child { margin-top: 0px; } .framer-5HOJp.framer-6do3ka > :last-child, .framer-5HOJp .framer-1vlzcu2 > :last-child { margin-bottom: 0px; } .framer-5HOJp .framer-18pn0b3 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-5HOJp .framer-18pn0b3 > :first-child { margin-left: 0px; } .framer-5HOJp .framer-18pn0b3 > :last-child { margin-right: 0px; } .framer-5HOJp .framer-1vlzcu2 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }',
  '.framer-5HOJp.framer-v-rd1igr.framer-6do3ka { align-content: flex-start; align-items: flex-start; max-width: unset; }',
  '.framer-5HOJp.framer-v-rd1igr .framer-1vlzcu2, .framer-5HOJp.framer-v-1k60ygf .framer-1vlzcu2 { align-content: flex-start; align-items: flex-start; }',
  '.framer-5HOJp.framer-v-1ko3cs6.framer-6do3ka { max-width: unset; padding: 0px; }',
  '.framer-5HOJp.framer-v-1k60ygf.framer-6do3ka { align-content: flex-start; align-items: flex-start; max-width: unset; padding: 0px; }',
  ...css9,
  ...css5,
  '.framer-5HOJp[data-border="true"]::after, .framer-5HOJp [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var Framerg4XOQYV2T = withCSS5(Component6, css14, 'framer-5HOJp',);
var stdin_default5 = Framerg4XOQYV2T;
Framerg4XOQYV2T.displayName = 'fancy card';
Framerg4XOQYV2T.defaultProps = { height: 261, width: 360, };
addPropertyControls7(Framerg4XOQYV2T, {
  variant: {
    options: ['q_3z7MkSN', 'WLamphkzv', 't0OU6QHlv', 'yk6yeE9Jy',],
    optionTitles: ['box  middle', 'box left', 'default centre', 'default left',],
    title: 'Variant',
    type: ControlType7.Enum,
  },
  oc_8kOa9a: { defaultValue: 'Integration ecosystem', displayTextArea: true, title: 'Description', type: ControlType7.String, },
  BFuTBK47u: {
    defaultValue: 'Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.',
    displayTextArea: true,
    title: 'Text',
    type: ControlType7.String,
  },
  OLqpcuIeL: { defaultValue: false, title: 'Image', type: ControlType7.Boolean, },
  PFec_i8Ff: {
    __defaultAssetReference:
      'data:framer/asset-reference,WwuSEtN77IMXeoOP6vheQadgDRA.jpg?originalFilename=photo-1709274296402-f6e96caaa1eb%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwOTI4OTA5OXw%26ixlib%3Drb-4.0.jpg&preferredSize=auto',
    title: 'Image',
    type: ControlType7.ResponsiveImage,
  },
  Y3X4CKI40: { defaultValue: true, title: 'Icon visible', type: ControlType7.Boolean, },
  UaS05r1yh: {
    defaultValue: 'var(--token-cd33d90a-ec6a-4a56-8bbb-7b9028284170, rgb(245, 195, 90)) /* {"name":"Secondary"} */',
    title: 'Icon Background',
    type: ControlType7.Color,
  },
  jFgwazo_q: {
    defaultValue: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76)) /* {"name":"Primary"} */',
    title: 'Icon color',
    type: ControlType7.Color,
  },
  M49ZkDl5Y: { defaultValue: 'House', placeholder: 'Menu, Wifi, Box\u2026', title: 'Icon', type: ControlType7.String, },
  ZA2T3dGW4: { defaultValue: false, title: 'showCta', type: ControlType7.Boolean, },
  qkbS0bCx8: { defaultValue: 'Learn more', displayTextArea: false, title: 'CTA', type: ControlType7.String, },
  cX1P9xQse: { title: 'Link', type: ControlType7.Link, },
},);
addFonts5(Framerg4XOQYV2T, [
  {
    explicitInter: true,
    fonts: [{
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
    },],
  },
  ...PhosphorFonts2,
  ...ButtonFonts2,
  ...getFontsFromSharedStyle3(fonts9,),
  ...getFontsFromSharedStyle3(fonts5,),
], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/VI2Y7Tu6FqocuVZxMcMX/TOIKCNpdKF03XIWPSvks/TIYDx3GRA.js
var LogoFonts = getFonts4(stdin_default,);
var ButtonFonts3 = getFonts4(stdin_default2,);
var ButtonWithCTAClassnameWithMappedReactProps1v1ipky2 = withMappedReactProps2(withCTAClassname(stdin_default2,), peihCD8_0_exports,);
var TickerFonts = getFonts4(Ticker,);
var FancyCardFonts = getFonts4(stdin_default5,);
var SectionsFeatureFonts = getFonts4(stdin_default3,);
var AccordionFonts = getFonts4(stdin_default4,);
var cycleOrder6 = ['I0hDn97hh', 'EXnsHQuPy', 'CHNKXuCA4',];
var serializationHash6 = 'framer-C2dQY';
var variantClassNames6 = { CHNKXuCA4: 'framer-v-1t28m4z', EXnsHQuPy: 'framer-v-9soqnk', I0hDn97hh: 'framer-v-1xgjg1j', };
function addPropertyOverrides6(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition16 = { bounce: 0.2, delay: 0, duration: 0.4, type: 'spring', };
var addImageAlt = (image, alt,) => {
  if (!image || typeof image !== 'object') {
    return;
  }
  return { ...image, alt, };
};
var Transition6 = ({ value, children, },) => {
  const config = React7.useContext(MotionConfigContext6,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React7.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx9(MotionConfigContext6.Provider, { value: contextValue, children, },);
};
var Variants6 = motion8.create(React7.Fragment,);
var humanReadableVariantMap6 = { Desktop: 'I0hDn97hh', Mobile: 'CHNKXuCA4', Tablet: 'EXnsHQuPy', };
var getProps6 = ({
  ctaSectionDescription,
  ctaSectionTitle,
  faqAnswer1,
  faqAnswer2,
  faqAnswer3,
  faqAnswer4,
  faqAnswer5,
  faqQuestion1,
  faqQuestion2,
  faqQuestion3,
  faqQuestion4,
  faqQuestion5,
  height,
  heroDescription,
  heroPreHeadingText,
  heroSocialProof,
  heroTitle,
  howItWorks1Description,
  howItWorks1PhosphorIcon,
  howItWorks1Title,
  howItWorks2Description,
  howItWorks2PhosphorIcon,
  howItWorks2Title,
  howItWorks3Description,
  howItWorks3PhosphorIcon,
  howItWorks3Title,
  howItWorksIntroTitle,
  id,
  logosSocialProofText,
  primaryCTALInk,
  primaryCTATExt,
  valueProp1Description,
  valueProp1PreHeadingText,
  valueProp1Title,
  valueProp2Description,
  valueProp2PreHeadingText,
  valueProp2Title,
  valueProp3Description,
  valueProp3PreHeadingText,
  valueProp3Title,
  valuePropIntroDescription,
  valuePropIntroPreHeadingText,
  valuePropIntroTitle,
  width,
  ...props
},) => {
  var _ref,
    _ref1,
    _ref2,
    _ref3,
    _ref4,
    _ref5,
    _ref6,
    _ref7,
    _ref8,
    _ref9,
    _ref10,
    _ref11,
    _ref12,
    _ref13,
    _ref14,
    _ref15,
    _ref16,
    _ref17,
    _ref18,
    _ref19,
    _ref20,
    _ref21,
    _ref22,
    _ref23,
    _ref24,
    _ref25,
    _ref26,
    _ref27,
    _ref28,
    _ref29,
    _ref30,
    _ref31,
    _ref32,
    _humanReadableVariantMap_props_variant,
    _ref33,
    _ref34,
    _ref35,
    _ref36,
    _ref37,
    _ref38,
    _ref39,
    _ref40;
  return {
    ...props,
    aTZRj4iwX: (_ref = heroTitle !== null && heroTitle !== void 0 ? heroTitle : props.aTZRj4iwX) !== null && _ref !== void 0
      ? _ref
      : 'Free CRM Software That Grows With Your Business',
    AXRXqMhvE: (_ref1 = faqQuestion3 !== null && faqQuestion3 !== void 0 ? faqQuestion3 : props.AXRXqMhvE) !== null && _ref1 !== void 0
      ? _ref1
      : 'What is Medicai and how does it work?',
    b4IZufMwi:
      (_ref2 = howItWorks3Title !== null && howItWorks3Title !== void 0 ? howItWorks3Title : props.b4IZufMwi) !== null && _ref2 !== void 0
        ? _ref2
        : 'Title 3',
    BhDfTwf19:
      (_ref3 = valueProp2PreHeadingText !== null && valueProp2PreHeadingText !== void 0 ? valueProp2PreHeadingText : props.BhDfTwf19) !==
          null && _ref3 !== void 0
        ? _ref3
        : 'Secure Storage & Compliance',
    BqOznQvRV:
      (_ref4 = heroDescription !== null && heroDescription !== void 0 ? heroDescription : props.BqOznQvRV) !== null && _ref4 !== void 0
        ? _ref4
        : 'HubSpot Smart CRM has free tools to connect your data, teams, and customers all on one platform. Seamlessly unify your marketing, sales, and service teams with our AI-powered solution',
    bT9gV0fXC:
      (_ref5 = howItWorksIntroTitle !== null && howItWorksIntroTitle !== void 0 ? howItWorksIntroTitle : props.bT9gV0fXC) !== null &&
        _ref5 !== void 0
        ? _ref5
        : 'Boost interaction by over 20% while reducing expenses by 80%',
    CpX8vbmAI:
      (_ref6 = howItWorks2Description !== null && howItWorks2Description !== void 0 ? howItWorks2Description : props.CpX8vbmAI) !== null &&
        _ref6 !== void 0
        ? _ref6
        : 'Text 2',
    d1_ZjZxmZ:
      (_ref7 = valueProp1Title !== null && valueProp1Title !== void 0 ? valueProp1Title : props.d1_ZjZxmZ) !== null && _ref7 !== void 0
        ? _ref7
        : 'Automatic Data Retrieval',
    dLMTCwuSP:
      (_ref8 = valueProp1PreHeadingText !== null && valueProp1PreHeadingText !== void 0 ? valueProp1PreHeadingText : props.dLMTCwuSP) !==
          null && _ref8 !== void 0
        ? _ref8
        : 'Automatic Data Retrieval',
    dO17ppjru:
      (_ref9 = logosSocialProofText !== null && logosSocialProofText !== void 0 ? logosSocialProofText : props.dO17ppjru) !== null &&
        _ref9 !== void 0
        ? _ref9
        : 'Trusted by leading brands for effective outreach',
    DOlVhCAwB: (_ref10 = faqAnswer5 !== null && faqAnswer5 !== void 0 ? faqAnswer5 : props.DOlVhCAwB) !== null && _ref10 !== void 0
      ? _ref10
      : 'Medicai is a secure, interoperable cloud PACS solution that connects all locations and imaging partners, retrieving and managing medical imaging data seamlessly. It integrates DICOM Node with on-prem PACS and modalities, and allows patients to upload their previous imaging studies directly.',
    eOZEo3DcY: (_ref11 = faqAnswer3 !== null && faqAnswer3 !== void 0 ? faqAnswer3 : props.eOZEo3DcY) !== null && _ref11 !== void 0
      ? _ref11
      : 'Medicai is a secure, interoperable cloud PACS solution that connects all locations and imaging partners, retrieving and managing medical imaging data seamlessly. It integrates DICOM Node with on-prem PACS and modalities, and allows patients to upload their previous imaging studies directly.',
    F7e3N5cCJ:
      (_ref12 = howItWorks1Title !== null && howItWorks1Title !== void 0 ? howItWorks1Title : props.F7e3N5cCJ) !== null && _ref12 !== void 0
        ? _ref12
        : 'Title 1',
    FGWzctchw:
      (_ref13 = howItWorks2Title !== null && howItWorks2Title !== void 0 ? howItWorks2Title : props.FGWzctchw) !== null && _ref13 !== void 0
        ? _ref13
        : ' Title 2',
    IJu_6P5Hk: (_ref14 = faqQuestion4 !== null && faqQuestion4 !== void 0 ? faqQuestion4 : props.IJu_6P5Hk) !== null && _ref14 !== void 0
      ? _ref14
      : 'What is Medicai and how does it work?',
    iwHVpnvTO: (_ref15 = faqAnswer1 !== null && faqAnswer1 !== void 0 ? faqAnswer1 : props.iwHVpnvTO) !== null && _ref15 !== void 0
      ? _ref15
      : 'Medicai is a secure, interoperable cloud PACS solution that connects all locations and imaging partners, retrieving and managing medical imaging data seamlessly. It integrates DICOM Node with on-prem PACS and modalities, and allows patients to upload their previous imaging studies directly.',
    JbCtMVnl6:
      (_ref16 = valueProp2Description !== null && valueProp2Description !== void 0 ? valueProp2Description : props.JbCtMVnl6) !== null &&
        _ref16 !== void 0
        ? _ref16
        : 'Our HIPAA and GDPR-compliant cloud PACS system ensures your medical imaging data is securely stored and easily accessible when needed.',
    kQbJJgkIw:
      (_ref17 = howItWorks1Description !== null && howItWorks1Description !== void 0 ? howItWorks1Description : props.kQbJJgkIw) !== null &&
        _ref17 !== void 0
        ? _ref17
        : 'Text 1',
    l5_wpVL3v: (_ref18 = faqQuestion5 !== null && faqQuestion5 !== void 0 ? faqQuestion5 : props.l5_wpVL3v) !== null && _ref18 !== void 0
      ? _ref18
      : 'What is Medicai and how does it work?',
    leEGfkobb:
      (_ref19 = ctaSectionDescription !== null && ctaSectionDescription !== void 0 ? ctaSectionDescription : props.leEGfkobb) !== null &&
        _ref19 !== void 0
        ? _ref19
        : 'Seamlessly connect your data, teams, and customers.',
    lr08BlkFf: primaryCTALInk !== null && primaryCTALInk !== void 0 ? primaryCTALInk : props.lr08BlkFf,
    M2pYHfVER:
      (_ref20 = valueProp2Title !== null && valueProp2Title !== void 0 ? valueProp2Title : props.M2pYHfVER) !== null && _ref20 !== void 0
        ? _ref20
        : 'Protect Your Medical Data',
    mNY4ObPCg:
      (_ref21 = howItWorks3Description !== null && howItWorks3Description !== void 0 ? howItWorks3Description : props.mNY4ObPCg) !== null &&
        _ref21 !== void 0
        ? _ref21
        : 'Text 3',
    O5vXsQDjx:
      (_ref22 = valuePropIntroPreHeadingText !== null && valuePropIntroPreHeadingText !== void 0
            ? valuePropIntroPreHeadingText
            : props.O5vXsQDjx) !== null && _ref22 !== void 0
        ? _ref22
        : 'UNIFied platform',
    OWrXQBE4D:
      (_ref23 = heroSocialProof !== null && heroSocialProof !== void 0 ? heroSocialProof : props.OWrXQBE4D) !== null && _ref23 !== void 0
        ? _ref23
        : 'Get started with free tools, or get a demo of our premium software.',
    p80Z9Cu19: (_ref24 = faqAnswer4 !== null && faqAnswer4 !== void 0 ? faqAnswer4 : props.p80Z9Cu19) !== null && _ref24 !== void 0
      ? _ref24
      : 'Medicai is a secure, interoperable cloud PACS solution that connects all locations and imaging partners, retrieving and managing medical imaging data seamlessly. It integrates DICOM Node with on-prem PACS and modalities, and allows patients to upload their previous imaging studies directly.',
    PpsmqsqKn:
      (_ref25 = howItWorks1PhosphorIcon !== null && howItWorks1PhosphorIcon !== void 0 ? howItWorks1PhosphorIcon : props.PpsmqsqKn) !==
          null && _ref25 !== void 0
        ? _ref25
        : 'House',
    QavYa01Q9:
      (_ref26 = valueProp3Description !== null && valueProp3Description !== void 0 ? valueProp3Description : props.QavYa01Q9) !== null &&
        _ref26 !== void 0
        ? _ref26
        : 'Integrate effortlessly with your existing healthcare systems, enhancing data sharing and collaboration across your organization.',
    rUY346aa_: (_ref27 = faqQuestion2 !== null && faqQuestion2 !== void 0 ? faqQuestion2 : props.rUY346aa_) !== null && _ref27 !== void 0
      ? _ref27
      : 'What is Medicai and how does it work?',
    RWcxsqQ0U:
      (_ref28 = primaryCTATExt !== null && primaryCTATExt !== void 0 ? primaryCTATExt : props.RWcxsqQ0U) !== null && _ref28 !== void 0
        ? _ref28
        : 'Get Started',
    saOvCDi2C: (_ref29 = faqQuestion1 !== null && faqQuestion1 !== void 0 ? faqQuestion1 : props.saOvCDi2C) !== null && _ref29 !== void 0
      ? _ref29
      : 'What is Medicai and how does it work?',
    srU2NgPEq:
      (_ref30 = howItWorks3PhosphorIcon !== null && howItWorks3PhosphorIcon !== void 0 ? howItWorks3PhosphorIcon : props.srU2NgPEq) !==
          null && _ref30 !== void 0
        ? _ref30
        : 'House',
    ST7cFuW5e:
      (_ref31 = valueProp1Description !== null && valueProp1Description !== void 0 ? valueProp1Description : props.ST7cFuW5e) !== null &&
        _ref31 !== void 0
        ? _ref31
        : 'Seamlessly connect and retrieve imaging data from all your locations and partners with our automated PACS radiology system.',
    UuJpI7Jww:
      (_ref32 = valueProp3PreHeadingText !== null && valueProp3PreHeadingText !== void 0 ? valueProp3PreHeadingText : props.UuJpI7Jww) !==
          null && _ref32 !== void 0
        ? _ref32
        : 'Interoperable Integration',
    variant:
      (_ref33 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap6[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref33 !== void 0
        ? _ref33
        : 'I0hDn97hh',
    Ve8016aQC:
      (_ref34 = valueProp3Title !== null && valueProp3Title !== void 0 ? valueProp3Title : props.Ve8016aQC) !== null && _ref34 !== void 0
        ? _ref34
        : 'Unified Medical Workflows',
    vlqFhLtz4:
      (_ref35 = howItWorks2PhosphorIcon !== null && howItWorks2PhosphorIcon !== void 0 ? howItWorks2PhosphorIcon : props.vlqFhLtz4) !==
          null && _ref35 !== void 0
        ? _ref35
        : 'House',
    wVBe4WY8l:
      (_ref36 = valuePropIntroDescription !== null && valuePropIntroDescription !== void 0
            ? valuePropIntroDescription
            : props.wVBe4WY8l) !== null && _ref36 !== void 0
        ? _ref36
        : 'Hubengage helps your workforce feel more connected and excited through gamification.',
    XkFMNwv8y:
      (_ref37 = ctaSectionTitle !== null && ctaSectionTitle !== void 0 ? ctaSectionTitle : props.XkFMNwv8y) !== null && _ref37 !== void 0
        ? _ref37
        : 'Simplify pipeline management with HubSpot\u2019s free Smart CRM',
    XW9eQBAs4:
      (_ref38 = valuePropIntroTitle !== null && valuePropIntroTitle !== void 0 ? valuePropIntroTitle : props.XW9eQBAs4) !== null &&
        _ref38 !== void 0
        ? _ref38
        : 'Automate your lead generation on Twitter with Drippi.',
    YHWMcHENa:
      (_ref39 = heroPreHeadingText !== null && heroPreHeadingText !== void 0 ? heroPreHeadingText : props.YHWMcHENa) !== null &&
        _ref39 !== void 0
        ? _ref39
        : 'OUTLINE',
    zYmH_frXJ: (_ref40 = faqAnswer2 !== null && faqAnswer2 !== void 0 ? faqAnswer2 : props.zYmH_frXJ) !== null && _ref40 !== void 0
      ? _ref40
      : 'Medicai is a secure, interoperable cloud PACS solution that connects all locations and imaging partners, retrieving and managing medical imaging data seamlessly. It integrates DICOM Node with on-prem PACS and modalities, and allows patients to upload their previous imaging studies directly.',
  };
};
var createLayoutDependency6 = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component7 = /* @__PURE__ */ React7.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo6();
  const {
    style,
    className: className10,
    layoutId,
    variant,
    RWcxsqQ0U,
    lr08BlkFf,
    YHWMcHENa,
    aTZRj4iwX,
    BqOznQvRV,
    OWrXQBE4D,
    dO17ppjru,
    O5vXsQDjx,
    XW9eQBAs4,
    wVBe4WY8l,
    dLMTCwuSP,
    d1_ZjZxmZ,
    ST7cFuW5e,
    BhDfTwf19,
    M2pYHfVER,
    JbCtMVnl6,
    UuJpI7Jww,
    Ve8016aQC,
    QavYa01Q9,
    bT9gV0fXC,
    PpsmqsqKn,
    F7e3N5cCJ,
    kQbJJgkIw,
    vlqFhLtz4,
    FGWzctchw,
    CpX8vbmAI,
    srU2NgPEq,
    b4IZufMwi,
    mNY4ObPCg,
    XkFMNwv8y,
    leEGfkobb,
    saOvCDi2C,
    iwHVpnvTO,
    rUY346aa_,
    zYmH_frXJ,
    AXRXqMhvE,
    eOZEo3DcY,
    IJu_6P5Hk,
    p80Z9Cu19,
    l5_wpVL3v,
    DOlVhCAwB,
    rHBegoWHYmAYFMnPFA,
    DU_acMOIdiwv54Acbi,
    OhGSopBCDiwv54Acbi,
    ...restProps
  } = getProps6(props,);
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
  } = useVariantState6({ cycleOrder: cycleOrder6, defaultVariant: 'I0hDn97hh', variant, variantClassNames: variantClassNames6, },);
  const layoutDependency = createLayoutDependency6(props, variants,);
  const ref1 = React7.useRef(null,);
  const isDisplayed = () => {
    if (baseVariant === 'CHNKXuCA4') return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (['EXnsHQuPy', 'CHNKXuCA4',].includes(baseVariant,)) return false;
    return true;
  };
  const router = useRouter();
  const defaultLayoutId = React7.useId();
  const sharedStyleClassNames = [
    className6,
    className,
    className4,
    className2,
    className9,
    className3,
    className7,
    className5,
    className8,
  ];
  const componentViewport = useComponentViewport6();
  return /* @__PURE__ */ _jsx9(LayoutGroup7, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx9(Variants6, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx9(Transition6, {
        value: transition16,
        children: /* @__PURE__ */ _jsxs6(motion8.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx6(serializationHash6, ...sharedStyleClassNames, 'framer-1xgjg1j', className10, classNames,),
          'data-framer-name': 'Desktop',
          layoutDependency,
          layoutId: 'I0hDn97hh',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          ...addPropertyOverrides6(
            { CHNKXuCA4: { 'data-framer-name': 'Mobile', }, EXnsHQuPy: { 'data-framer-name': 'Tablet', }, },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /* @__PURE__ */ _jsx9(motion8.nav, {
              className: 'framer-1sjrjns',
              'data-framer-name': 'navbar',
              'data-hide-scrollbars': true,
              layoutDependency,
              layoutId: 'ARWTeqcE3',
              style: { backgroundColor: 'var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255))', },
              children: /* @__PURE__ */ _jsxs6(motion8.div, {
                className: 'framer-17vvjn1',
                'data-framer-name': 'container',
                'data-hide-scrollbars': true,
                layoutDependency,
                layoutId: 'yblxCa81Q',
                children: [
                  /* @__PURE__ */ _jsx9(motion8.div, {
                    className: 'framer-1rvcjlk',
                    'data-framer-name': 'brand logo',
                    layoutDependency,
                    layoutId: 'Lh59eZSj1',
                    children: /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                      height: 20,
                      width: '81px',
                      y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 0 + 10 +
                        15.5 + 0,
                      children: /* @__PURE__ */ _jsx9(motion8.div, {
                        className: 'framer-zwejgj-container',
                        layoutDependency,
                        layoutId: 'qaJYfnvr3-container',
                        children: /* @__PURE__ */ _jsx9(stdin_default, {
                          height: '100%',
                          id: 'qaJYfnvr3',
                          layoutId: 'qaJYfnvr3',
                          style: { height: '100%', width: '100%', },
                          variant: 'OlzSNPhAj',
                          width: '100%',
                        },),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx9(motion8.div, {
                    className: 'framer-12ru6pb',
                    'data-framer-name': 'Links',
                    layoutDependency,
                    layoutId: 'OVfvpzrc5',
                    children: /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                      height: 51,
                      y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 0 + 10 +
                        0 + 0,
                      children: /* @__PURE__ */ _jsx9(motion8.div, {
                        className: 'framer-1m42xjy-container',
                        layoutDependency,
                        layoutId: 'SrM_Tdwax-container',
                        children: /* @__PURE__ */ _jsx9(ButtonWithCTAClassnameWithMappedReactProps1v1ipky2, {
                          height: '100%',
                          hoe0QDrl5: RWcxsqQ0U,
                          I0Sz0dr2v: 16,
                          i8nKkVReT: '10px 22px 10px 22px',
                          id: 'SrM_Tdwax',
                          Iyt7vRlRL: '100px',
                          KPs74ZNM1: {
                            borderColor: 'var(--token-cd33d90a-ec6a-4a56-8bbb-7b9028284170, rgb(245, 195, 90)) /* {"name":"Secondary"} */',
                            borderStyle: 'solid',
                            borderWidth: 1,
                          },
                          layoutId: 'SrM_Tdwax',
                          n8jmDbiSM: 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))',
                          od7wtCL7T: lr08BlkFf,
                          OGI9WGJ1a: false,
                          uBsjwgvnU: true,
                          variant: 'ypSdI0dLV',
                          width: '100%',
                          y4hb9lsDX: 'var(--token-cd33d90a-ec6a-4a56-8bbb-7b9028284170, rgb(245, 195, 90))',
                        },),
                      },),
                    },),
                  },),
                ],
              },),
            },),
            /* @__PURE__ */ _jsxs6(motion8.main, {
              className: 'framer-1l5ru0s',
              'data-framer-name': 'main wrapper',
              layoutDependency,
              layoutId: 'SVhrT3N3D',
              children: [
                /* @__PURE__ */ _jsx9(motion8.section, {
                  className: 'framer-1as9mnp',
                  'data-framer-name': 'sections/Hero',
                  layoutDependency,
                  layoutId: 'uca2yoLZv',
                  style: { backgroundColor: 'rgb(255, 255, 255)', },
                  children: /* @__PURE__ */ _jsxs6(motion8.div, {
                    className: 'framer-1imp2ys',
                    'data-framer-name': 'container',
                    layoutDependency,
                    layoutId: 'GrxoCHT5l',
                    children: [
                      /* @__PURE__ */ _jsxs6(motion8.div, {
                        className: 'framer-92jigg',
                        'data-framer-name': 'hero-content',
                        layoutDependency,
                        layoutId: 'emjLmyJjE',
                        children: [
                          /* @__PURE__ */ _jsx9(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                              children: /* @__PURE__ */ _jsx9(motion8.p, {
                                className: 'framer-styles-preset-1vijcsh',
                                'data-styles-preset': 'ob0AYC2e3',
                                style: {
                                  '--framer-text-color':
                                    'var(--extracted-r6o4lv, var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76)))',
                                },
                                children: 'OUTLINE',
                              },),
                            },),
                            className: 'framer-c9raz5',
                            'data-framer-name': 'overline',
                            fonts: ['Inter',],
                            layoutDependency,
                            layoutId: 'K0LF2_NKD',
                            style: { '--extracted-r6o4lv': 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76))', },
                            text: YHWMcHENa,
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                            ...addPropertyOverrides6(
                              {
                                CHNKXuCA4: {
                                  children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                    children: /* @__PURE__ */ _jsx9(motion8.p, {
                                      className: 'framer-styles-preset-1vijcsh',
                                      'data-styles-preset': 'ob0AYC2e3',
                                      style: {
                                        '--framer-text-alignment': 'center',
                                        '--framer-text-color':
                                          'var(--extracted-r6o4lv, var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76)))',
                                      },
                                      children: 'OUTLINE',
                                    },),
                                  },),
                                },
                                EXnsHQuPy: {
                                  children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                    children: /* @__PURE__ */ _jsx9(motion8.p, {
                                      className: 'framer-styles-preset-1vijcsh',
                                      'data-styles-preset': 'ob0AYC2e3',
                                      style: {
                                        '--framer-text-alignment': 'center',
                                        '--framer-text-color':
                                          'var(--extracted-r6o4lv, var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76)))',
                                      },
                                      children: 'OUTLINE',
                                    },),
                                  },),
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                          },),
                          /* @__PURE__ */ _jsx9(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                              children: /* @__PURE__ */ _jsx9(motion8.h1, {
                                className: 'framer-styles-preset-18cx44m',
                                'data-styles-preset': 'C4qLxw6HR',
                                style: { '--framer-text-alignment': 'left', },
                                children: 'Free CRM Software That Grows With Your Business',
                              },),
                            },),
                            className: 'framer-dql5f5',
                            'data-framer-name': 'Title',
                            fonts: ['Inter',],
                            layoutDependency,
                            layoutId: 'K6LVwjHtV',
                            text: aTZRj4iwX,
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                            ...addPropertyOverrides6(
                              {
                                CHNKXuCA4: {
                                  children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                    children: /* @__PURE__ */ _jsx9(motion8.h1, {
                                      className: 'framer-styles-preset-18cx44m',
                                      'data-styles-preset': 'C4qLxw6HR',
                                      style: { '--framer-text-alignment': 'center', },
                                      children: 'Free CRM Software That Grows With Your Business',
                                    },),
                                  },),
                                },
                                EXnsHQuPy: {
                                  children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                    children: /* @__PURE__ */ _jsx9(motion8.h1, {
                                      className: 'framer-styles-preset-18cx44m',
                                      'data-styles-preset': 'C4qLxw6HR',
                                      style: { '--framer-text-alignment': 'center', },
                                      children: 'Free CRM Software That Grows With Your Business',
                                    },),
                                  },),
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                          },),
                          /* @__PURE__ */ _jsx9(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                              children: /* @__PURE__ */ _jsx9(motion8.p, {
                                className: 'framer-styles-preset-14y9vvi',
                                'data-styles-preset': 'n0u86onJX',
                                style: {
                                  '--framer-text-color':
                                    'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102)))',
                                },
                                children:
                                  'HubSpot Smart CRM has free tools to connect your data, teams, and customers all on one platform. Seamlessly unify your marketing, sales, and service teams with our AI-powered solution',
                              },),
                            },),
                            className: 'framer-1vew22o',
                            'data-framer-name': 'Overview',
                            fonts: ['Inter',],
                            layoutDependency,
                            layoutId: 'eJwG2V43N',
                            style: { '--extracted-r6o4lv': 'var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102))', },
                            text: BqOznQvRV,
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                            ...addPropertyOverrides6(
                              {
                                CHNKXuCA4: {
                                  children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                    children: /* @__PURE__ */ _jsx9(motion8.p, {
                                      className: 'framer-styles-preset-14y9vvi',
                                      'data-styles-preset': 'n0u86onJX',
                                      style: {
                                        '--framer-text-alignment': 'center',
                                        '--framer-text-color':
                                          'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102)))',
                                      },
                                      children:
                                        'HubSpot Smart CRM has free tools to connect your data, teams, and customers all on one platform. Seamlessly unify your marketing, sales, and service teams with our AI-powered solution',
                                    },),
                                  },),
                                },
                                EXnsHQuPy: {
                                  children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                    children: /* @__PURE__ */ _jsx9(motion8.p, {
                                      className: 'framer-styles-preset-14y9vvi',
                                      'data-styles-preset': 'n0u86onJX',
                                      style: {
                                        '--framer-text-alignment': 'center',
                                        '--framer-text-color':
                                          'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102)))',
                                      },
                                      children:
                                        'HubSpot Smart CRM has free tools to connect your data, teams, and customers all on one platform. Seamlessly unify your marketing, sales, and service teams with our AI-powered solution',
                                    },),
                                  },),
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                          },),
                          /* @__PURE__ */ _jsx9(motion8.div, {
                            className: 'framer-1s0k5vy',
                            'data-framer-name': 'button-wrapper',
                            layoutDependency,
                            layoutId: 'cyKTrgbUz',
                            children: /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                              height: 51,
                              y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                71 + 0 + 0 + 64 + 0 + 0 + 0 + 337.54999999999995 + 8,
                              ...addPropertyOverrides6(
                                {
                                  CHNKXuCA4: {
                                    width: `min(min(${
                                      (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                      '100vw'
                                    } - 40px, 1280px), 400px)`,
                                    y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                                      0 + 71 + 0 + 0 + 16 + 0 + 0 + 0 + 0 + 325.54999999999995 + 6 + 0,
                                  },
                                  EXnsHQuPy: {
                                    width: `min(min(${
                                      (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                      '100vw'
                                    } - 40px, 1280px), 400px)`,
                                    y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                                      0 + 71 + 0 + 0 + 36 + 0 + 0 + 0 + 0 + 325.54999999999995 + 6 + 0,
                                  },
                                },
                                baseVariant,
                                gestureVariant,
                              ),
                              children: /* @__PURE__ */ _jsx9(motion8.div, {
                                className: 'framer-yp3amk-container',
                                layoutDependency,
                                layoutId: 'lYB5gYrSy-container',
                                children: /* @__PURE__ */ _jsx9(ButtonWithCTAClassnameWithMappedReactProps1v1ipky2, {
                                  height: '100%',
                                  hoe0QDrl5: RWcxsqQ0U,
                                  I0Sz0dr2v: 16,
                                  i8nKkVReT: '16px 30px 16px 30px',
                                  id: 'lYB5gYrSy',
                                  Iyt7vRlRL: '100px',
                                  KPs74ZNM1: {
                                    borderColor:
                                      'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(156, 79, 255)) /* {"name":"Primary"} */',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                  },
                                  layoutId: 'lYB5gYrSy',
                                  n8jmDbiSM: 'var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255))',
                                  od7wtCL7T: lr08BlkFf,
                                  OGI9WGJ1a: false,
                                  uBsjwgvnU: true,
                                  variant: 'ypSdI0dLV',
                                  width: '100%',
                                  y4hb9lsDX: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(156, 79, 255))',
                                  ...addPropertyOverrides6(
                                    {
                                      CHNKXuCA4: { i8nKkVReT: '16px 28px 16px 28px', style: { width: '100%', }, },
                                      EXnsHQuPy: { i8nKkVReT: '16px 28px 16px 28px', style: { width: '100%', }, },
                                    },
                                    baseVariant,
                                    gestureVariant,
                                  ),
                                },),
                              },),
                            },),
                          },),
                          /* @__PURE__ */ _jsx9(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                              children: /* @__PURE__ */ _jsx9(motion8.p, {
                                className: 'framer-styles-preset-enusn7',
                                'data-styles-preset': 'D9zAP56xH',
                                style: {
                                  '--framer-text-color':
                                    'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102)))',
                                },
                                children: 'Get started with free tools, or get a demo of our premium software.',
                              },),
                            },),
                            className: 'framer-7ihmbb',
                            'data-framer-name': 'Social proof',
                            fonts: ['Inter',],
                            layoutDependency,
                            layoutId: 'IUc5354tK',
                            style: { '--extracted-r6o4lv': 'var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102))', },
                            text: OWrXQBE4D,
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                            ...addPropertyOverrides6(
                              {
                                CHNKXuCA4: {
                                  children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                    children: /* @__PURE__ */ _jsx9(motion8.p, {
                                      className: 'framer-styles-preset-enusn7',
                                      'data-styles-preset': 'D9zAP56xH',
                                      style: {
                                        '--framer-text-alignment': 'center',
                                        '--framer-text-color':
                                          'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102)))',
                                      },
                                      children: 'Get started with free tools, or get a demo of our premium software.',
                                    },),
                                  },),
                                },
                                EXnsHQuPy: {
                                  children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                    children: /* @__PURE__ */ _jsx9(motion8.p, {
                                      className: 'framer-styles-preset-enusn7',
                                      'data-styles-preset': 'D9zAP56xH',
                                      style: {
                                        '--framer-text-alignment': 'center',
                                        '--framer-text-color':
                                          'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102)))',
                                      },
                                      children: 'Get started with free tools, or get a demo of our premium software.',
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
                      /* @__PURE__ */ _jsx9(motion8.div, {
                        className: 'framer-1o5tzjp',
                        'data-framer-name': 'hero-img-wrapper',
                        layoutDependency,
                        layoutId: 'S4cbw9m9Z',
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        children: /* @__PURE__ */ _jsx9(Image4, {
                          as: 'figure',
                          background: {
                            alt: '',
                            fit: 'fit',
                            loading: getLoadingLazyAtYPosition4(
                              ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 71 +
                                0 + 0 + 64 + 0 + 13.024999999999977 + 0,
                            ),
                            pixelHeight: 2e3,
                            pixelWidth: 2400,
                            positionX: 'center',
                            positionY: 'center',
                            sizes: `max((min(${
                              (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                            } - 96px, 1280px) - 80px) / 2, 1px)`,
                            src: 'https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png',
                            srcSet:
                              'https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png?scale-down-to=512 512w,https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png 2400w',
                          },
                          className: 'framer-nhlil4',
                          'data-framer-name': 'hero-image',
                          layoutDependency,
                          layoutId: 'wtc2qH43N',
                          style: {
                            borderBottomLeftRadius: 12,
                            borderBottomRightRadius: 12,
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                          },
                          ...addPropertyOverrides6(
                            {
                              CHNKXuCA4: {
                                background: {
                                  alt: '',
                                  fit: 'fit',
                                  loading: getLoadingLazyAtYPosition4(
                                    ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                      71 + 0 + 0 + 16 + 0 + 0 + 536.05 + 0,
                                  ),
                                  pixelHeight: 2e3,
                                  pixelWidth: 2400,
                                  positionX: 'center',
                                  positionY: 'center',
                                  sizes: `max(min(min(${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 40px, 1280px), 720px), 1px)`,
                                  src: 'https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png',
                                  srcSet:
                                    'https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png?scale-down-to=512 512w,https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png 2400w',
                                },
                              },
                              EXnsHQuPy: {
                                background: {
                                  alt: '',
                                  fit: 'fit',
                                  loading: getLoadingLazyAtYPosition4(
                                    ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                      71 + 0 + 0 + 36 + 0 + 0 + 536.05 + 0,
                                  ),
                                  pixelHeight: 2e3,
                                  pixelWidth: 2400,
                                  positionX: 'center',
                                  positionY: 'center',
                                  sizes: `max(min(min(${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 40px, 1280px), 720px), 1px)`,
                                  src: 'https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png',
                                  srcSet:
                                    'https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png?scale-down-to=512 512w,https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/vBBntvxio9AzKSWx7gY2wXijU.png 2400w',
                                },
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                      },),
                    ],
                  },),
                },),
                /* @__PURE__ */ _jsxs6(motion8.section, {
                  className: 'framer-diqspt',
                  'data-framer-name': 'Logos',
                  layoutDependency,
                  layoutId: 'vakonAUmN',
                  style: { backgroundColor: 'rgb(255, 255, 255)', },
                  children: [
                    /* @__PURE__ */ _jsx9(RichText5, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                        children: /* @__PURE__ */ _jsx9(motion8.h3, {
                          className: 'framer-styles-preset-1063jmz',
                          'data-styles-preset': 'vS6MrDfuH',
                          style: { '--framer-text-alignment': 'center', },
                          children: 'Trusted by leading brands for effective outreach',
                        },),
                      },),
                      className: 'framer-1ipce73',
                      'data-framer-name': 'logo-title',
                      fonts: ['Inter',],
                      layoutDependency,
                      layoutId: 'DFjwBCAkG',
                      style: {
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                        '--framer-paragraph-spacing': '0px',
                      },
                      text: dO17ppjru,
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                      children: /* @__PURE__ */ _jsx9(motion8.div, {
                        className: 'framer-141fexe-container',
                        layoutDependency,
                        layoutId: 'zy295ciwI-container',
                        children: /* @__PURE__ */ _jsx9(Ticker, {
                          alignment: 'center',
                          direction: 'left',
                          fadeOptions: { fadeAlpha: 0, fadeContent: true, fadeInset: 0, fadeWidth: 10, overflow: false, },
                          gap: 32,
                          height: '100%',
                          hoverFactor: 1,
                          id: 'zy295ciwI',
                          layoutId: 'zy295ciwI',
                          padding: 10,
                          paddingBottom: 10,
                          paddingLeft: 10,
                          paddingPerSide: false,
                          paddingRight: 10,
                          paddingTop: 10,
                          sizingOptions: { heightType: true, widthType: true, },
                          slots: [
                            /* @__PURE__ */ _jsx9(Image4, {
                              as: 'figure',
                              background: {
                                alt: '',
                                fit: 'fit',
                                intrinsicHeight: 92,
                                intrinsicWidth: 272,
                                pixelHeight: 400,
                                pixelWidth: 1200,
                                positionX: 'center',
                                positionY: 'center',
                                sizes: '120px',
                                src: 'https://framerusercontent.com/images/Pb76VcFCECERVJk1iujzbUVR84.png?scale-down-to=512',
                                srcSet:
                                  'https://framerusercontent.com/images/Pb76VcFCECERVJk1iujzbUVR84.png?scale-down-to=512 512w,https://framerusercontent.com/images/Pb76VcFCECERVJk1iujzbUVR84.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Pb76VcFCECERVJk1iujzbUVR84.png 1200w',
                              },
                              className: 'framer-c9tm1e',
                              'data-framer-name': 'Logo',
                              layoutDependency,
                              layoutId: 'FnW72UXip',
                            },),
                            /* @__PURE__ */ _jsx9(Image4, {
                              as: 'figure',
                              background: {
                                alt: '',
                                fit: 'fit',
                                intrinsicHeight: 92,
                                intrinsicWidth: 272,
                                pixelHeight: 400,
                                pixelWidth: 1200,
                                positionX: 'center',
                                positionY: 'center',
                                sizes: '120px',
                                src: 'https://framerusercontent.com/images/Pb76VcFCECERVJk1iujzbUVR84.png?scale-down-to=512',
                                srcSet:
                                  'https://framerusercontent.com/images/Pb76VcFCECERVJk1iujzbUVR84.png?scale-down-to=512 512w,https://framerusercontent.com/images/Pb76VcFCECERVJk1iujzbUVR84.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Pb76VcFCECERVJk1iujzbUVR84.png 1200w',
                              },
                              className: 'framer-1gys2sf',
                              'data-framer-name': 'Logo',
                              layoutDependency,
                              layoutId: 'fdWgDpYWR',
                            },),
                            /* @__PURE__ */ _jsx9(Image4, {
                              as: 'figure',
                              background: {
                                alt: '',
                                fit: 'fit',
                                intrinsicHeight: 92,
                                intrinsicWidth: 272,
                                pixelHeight: 400,
                                pixelWidth: 1200,
                                positionX: 'center',
                                positionY: 'center',
                                sizes: '120px',
                                src: 'https://framerusercontent.com/images/Pb76VcFCECERVJk1iujzbUVR84.png?scale-down-to=512',
                                srcSet:
                                  'https://framerusercontent.com/images/Pb76VcFCECERVJk1iujzbUVR84.png?scale-down-to=512 512w,https://framerusercontent.com/images/Pb76VcFCECERVJk1iujzbUVR84.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Pb76VcFCECERVJk1iujzbUVR84.png 1200w',
                              },
                              className: 'framer-5ab2op',
                              'data-framer-name': 'Logo',
                              layoutDependency,
                              layoutId: 'O7kmAXOt3',
                            },),
                          ],
                          speed: 60,
                          style: { height: '100%', width: '100%', },
                          width: '100%',
                          ...addPropertyOverrides6({ CHNKXuCA4: { gap: 24, }, }, baseVariant, gestureVariant,),
                        },),
                      },),
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsxs6(motion8.section, {
                  className: 'framer-cqpm6f',
                  'data-framer-name': 'how it works',
                  layoutDependency,
                  layoutId: 'FUIknJOl8',
                  style: { backgroundColor: 'rgba(0, 0, 0, 0.03)', },
                  children: [
                    /* @__PURE__ */ _jsxs6(motion8.div, {
                      className: 'framer-cpf1z6',
                      'data-framer-name': 'section-title-wrapper',
                      layoutDependency,
                      layoutId: 'P6vgHaD2i',
                      children: [
                        /* @__PURE__ */ _jsx9(RichText5, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                            children: /* @__PURE__ */ _jsx9(motion8.p, {
                              className: 'framer-styles-preset-1vijcsh',
                              'data-styles-preset': 'ob0AYC2e3',
                              style: {
                                '--framer-text-alignment': 'center',
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(132, 0, 168)))',
                              },
                              children: 'How it works',
                            },),
                          },),
                          className: 'framer-1pioxon',
                          'data-framer-name': 'section overline',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'CYkIuTs5A',
                          style: { '--extracted-r6o4lv': 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(132, 0, 168))', },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx9(RichText5, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                            children: /* @__PURE__ */ _jsx9(motion8.h2, {
                              className: 'framer-styles-preset-nhj6yu',
                              'data-styles-preset': 'KvesxXs63',
                              style: {
                                '--framer-text-alignment': 'center',
                                '--framer-text-color':
                                  'var(--extracted-1of0zx5, var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0)))',
                              },
                              children: 'Boost interaction by over 20% while reducing expenses by 80%',
                            },),
                          },),
                          className: 'framer-lj11i1',
                          'data-framer-name': 'section title',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'HXIpIrmaz',
                          style: { '--extracted-1of0zx5': 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))', },
                          text: bT9gV0fXC,
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs6(motion8.div, {
                      className: 'framer-fl5k4f',
                      'data-framer-name': 'container',
                      layoutDependency,
                      layoutId: 'XwcctSTtS',
                      children: [
                        /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                          height: 261,
                          width: `max((min(${
                            (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                          } - 96px, 1280px) - 64px) / 3, 1px)`,
                          y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 71 +
                            0 + 824.05 + 64 + 201.45 + 0,
                          ...addPropertyOverrides6(
                            {
                              CHNKXuCA4: {
                                width: `min(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 1280px)`,
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 1212.05 + 32 + 185.45 + 0 + 0,
                              },
                              EXnsHQuPy: {
                                width: `min(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 1280px)`,
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 1258.05 + 48 + 185.45 + 0 + 0,
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                          children: /* @__PURE__ */ _jsx9(motion8.div, {
                            className: 'framer-ohkhaf-container',
                            layoutDependency,
                            layoutId: 'kXt7xxfX5-container',
                            children: /* @__PURE__ */ _jsx9(stdin_default5, {
                              BFuTBK47u: kQbJJgkIw,
                              height: '100%',
                              id: 'kXt7xxfX5',
                              jFgwazo_q: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76))',
                              layoutId: 'kXt7xxfX5',
                              M49ZkDl5Y: PpsmqsqKn,
                              oc_8kOa9a: F7e3N5cCJ,
                              OLqpcuIeL: false,
                              PFec_i8Ff: addImageAlt({
                                src: 'https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png',
                                srcSet:
                                  'https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png?scale-down-to=512 512w,https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png 3840w',
                              }, '',),
                              qkbS0bCx8: 'Learn more',
                              style: { width: '100%', },
                              UaS05r1yh: 'rgba(245, 196, 91, 0.24)',
                              variant: 't0OU6QHlv',
                              width: '100%',
                              Y3X4CKI40: true,
                              ZA2T3dGW4: false,
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                          height: 261,
                          width: `max((min(${
                            (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                          } - 96px, 1280px) - 64px) / 3, 1px)`,
                          y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 71 +
                            0 + 824.05 + 64 + 201.45 + 0,
                          ...addPropertyOverrides6(
                            {
                              CHNKXuCA4: {
                                width: `min(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 1280px)`,
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 1212.05 + 32 + 185.45 + 0 + 285,
                              },
                              EXnsHQuPy: {
                                width: `min(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 1280px)`,
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 1258.05 + 48 + 185.45 + 0 + 293,
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                          children: /* @__PURE__ */ _jsx9(motion8.div, {
                            className: 'framer-q6gtac-container',
                            layoutDependency,
                            layoutId: 'ItJC_lYbi-container',
                            children: /* @__PURE__ */ _jsx9(stdin_default5, {
                              BFuTBK47u: CpX8vbmAI,
                              height: '100%',
                              id: 'ItJC_lYbi',
                              jFgwazo_q: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76))',
                              layoutId: 'ItJC_lYbi',
                              M49ZkDl5Y: vlqFhLtz4,
                              oc_8kOa9a: FGWzctchw,
                              OLqpcuIeL: false,
                              PFec_i8Ff: addImageAlt({
                                src: 'https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png',
                                srcSet:
                                  'https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png?scale-down-to=512 512w,https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png 3840w',
                              }, '',),
                              qkbS0bCx8: 'Learn more',
                              style: { width: '100%', },
                              UaS05r1yh: 'rgba(245, 196, 91, 0.24)',
                              variant: 't0OU6QHlv',
                              width: '100%',
                              Y3X4CKI40: true,
                              ZA2T3dGW4: false,
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                          height: 261,
                          width: `max((min(${
                            (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                          } - 96px, 1280px) - 64px) / 3, 1px)`,
                          y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 71 +
                            0 + 824.05 + 64 + 201.45 + 0,
                          ...addPropertyOverrides6(
                            {
                              CHNKXuCA4: {
                                width: `min(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 1280px)`,
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 1212.05 + 32 + 185.45 + 0 + 570,
                              },
                              EXnsHQuPy: {
                                width: `min(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 1280px)`,
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 1258.05 + 48 + 185.45 + 0 + 586,
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                          children: /* @__PURE__ */ _jsx9(motion8.div, {
                            className: 'framer-1ryb76h-container',
                            layoutDependency,
                            layoutId: 'g9a9UHy2A-container',
                            children: /* @__PURE__ */ _jsx9(stdin_default5, {
                              BFuTBK47u: mNY4ObPCg,
                              height: '100%',
                              id: 'g9a9UHy2A',
                              jFgwazo_q: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76))',
                              layoutId: 'g9a9UHy2A',
                              M49ZkDl5Y: srU2NgPEq,
                              oc_8kOa9a: b4IZufMwi,
                              OLqpcuIeL: false,
                              PFec_i8Ff: addImageAlt({
                                src: 'https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png',
                                srcSet:
                                  'https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png?scale-down-to=512 512w,https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/f6yTY2WTE9yV3taRh3AIXAvCh9U.png 3840w',
                              }, '',),
                              qkbS0bCx8: 'Learn more',
                              style: { width: '100%', },
                              UaS05r1yh: 'rgba(245, 196, 91, 0.24)',
                              variant: 't0OU6QHlv',
                              width: '100%',
                              Y3X4CKI40: true,
                              ZA2T3dGW4: false,
                            },),
                          },),
                        },),
                      ],
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsxs6(motion8.section, {
                  className: 'framer-1lqtymj',
                  'data-framer-name': 'Features',
                  layoutDependency,
                  layoutId: 'ZkvNoa3Rw',
                  children: [
                    /* @__PURE__ */ _jsxs6(motion8.div, {
                      className: 'framer-1jdc9ue',
                      'data-framer-name': 'section-title-wrapper',
                      layoutDependency,
                      layoutId: 'U1NXU3mIR',
                      children: [
                        /* @__PURE__ */ _jsx9(RichText5, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                            children: /* @__PURE__ */ _jsx9(motion8.p, {
                              className: 'framer-styles-preset-1vijcsh',
                              'data-styles-preset': 'ob0AYC2e3',
                              style: {
                                '--framer-text-alignment': 'center',
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(132, 0, 168)))',
                              },
                              children: 'UNIFied platform',
                            },),
                          },),
                          className: 'framer-ltbr0t',
                          'data-framer-name': 'section overline',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'AnYiXFspA',
                          style: { '--extracted-r6o4lv': 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(132, 0, 168))', },
                          text: O5vXsQDjx,
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx9(RichText5, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                            children: /* @__PURE__ */ _jsx9(motion8.h1, {
                              className: 'framer-styles-preset-18cx44m',
                              'data-styles-preset': 'C4qLxw6HR',
                              style: {
                                '--framer-text-alignment': 'center',
                                '--framer-text-color':
                                  'var(--extracted-gdpscs, var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0)))',
                              },
                              children: 'Automate your lead generation on Twitter with Drippi.',
                            },),
                          },),
                          className: 'framer-1w5436c',
                          'data-framer-name': 'section title',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'NlTDHUxSk',
                          style: { '--extracted-gdpscs': 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))', },
                          text: XW9eQBAs4,
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx9(RichText5, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                            children: /* @__PURE__ */ _jsx9(motion8.p, {
                              className: 'framer-styles-preset-14y9vvi',
                              'data-styles-preset': 'n0u86onJX',
                              style: {
                                '--framer-text-alignment': 'center',
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102)))',
                              },
                              children: 'Hubengage helps your workforce feel more connected and excited through gamification.',
                            },),
                          },),
                          className: 'framer-1u4lyl7',
                          'data-framer-name': 'section overview',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'YZ1Enhfc8',
                          style: { '--extracted-r6o4lv': 'var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102))', },
                          text: wVBe4WY8l,
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs6(motion8.div, {
                      className: 'framer-e4a9rj',
                      'data-framer-name': 'container',
                      layoutDependency,
                      layoutId: 'HA3nMyHlY',
                      children: [
                        /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                          height: 500,
                          width: `min(${
                            (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                          } - 96px, 1280px)`,
                          y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 71 +
                            0 + 1414.5 + 64 + 389.54999999999995 + 0 + 0,
                          ...addPropertyOverrides6(
                            {
                              CHNKXuCA4: {
                                width: `min(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 1280px)`,
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 2292.5 + 32 + 349.54999999999995 + 0 + 0,
                              },
                              EXnsHQuPy: {
                                width: `min(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 1280px)`,
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 2386.5 + 48 + 357.54999999999995 + 0 + 0,
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                          children: /* @__PURE__ */ _jsx9(motion8.div, {
                            className: 'framer-18eglsx-container',
                            layoutDependency,
                            layoutId: 'Js_B3_rML-container',
                            children: /* @__PURE__ */ _jsx9(stdin_default3, {
                              bb0d7Zsk2: 'rgb(255, 255, 255)',
                              dVvnNuXFk: '40px',
                              Ec9Q3zdMx: true,
                              ffFqlap6N: dLMTCwuSP,
                              height: '100%',
                              id: 'Js_B3_rML',
                              kLSUfV79S: d1_ZjZxmZ,
                              layoutId: 'Js_B3_rML',
                              S5lpOxdRw: lr08BlkFf,
                              style: { width: '100%', },
                              Vai8Fm96Y: '80px',
                              variant: 'akvCPg2A6',
                              width: '100%',
                              Wl6u7Nr5l: 'Get Started',
                              wwuq8jfNR: ST7cFuW5e,
                              yDCnIBg4Y: 80,
                              ...addPropertyOverrides6(
                                {
                                  CHNKXuCA4: { variant: 'MWD37BAqY', yDCnIBg4Y: 24, },
                                  EXnsHQuPy: { variant: 'MWD37BAqY', yDCnIBg4Y: 24, },
                                },
                                baseVariant,
                                gestureVariant,
                              ),
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                          height: 500,
                          width: `min(${
                            (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                          } - 96px, 1280px)`,
                          y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 71 +
                            0 + 1414.5 + 64 + 389.54999999999995 + 0 + 580,
                          ...addPropertyOverrides6(
                            {
                              CHNKXuCA4: {
                                width: `min(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 1280px)`,
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 2292.5 + 32 + 349.54999999999995 + 0 + 532,
                              },
                              EXnsHQuPy: {
                                width: `min(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 1280px)`,
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 2386.5 + 48 + 357.54999999999995 + 0 + 548,
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                          children: /* @__PURE__ */ _jsx9(motion8.div, {
                            className: 'framer-q0jylp-container',
                            layoutDependency,
                            layoutId: 'WAwlijMz6-container',
                            children: /* @__PURE__ */ _jsx9(stdin_default3, {
                              bb0d7Zsk2: 'rgb(255, 255, 255)',
                              dVvnNuXFk: '40px',
                              Ec9Q3zdMx: true,
                              ffFqlap6N: BhDfTwf19,
                              height: '100%',
                              id: 'WAwlijMz6',
                              kLSUfV79S: M2pYHfVER,
                              layoutId: 'WAwlijMz6',
                              S5lpOxdRw: lr08BlkFf,
                              style: { width: '100%', },
                              Vai8Fm96Y: '80px',
                              variant: 'J807S8pmY',
                              width: '100%',
                              Wl6u7Nr5l: 'Get Started',
                              wwuq8jfNR: JbCtMVnl6,
                              yDCnIBg4Y: 80,
                              ...addPropertyOverrides6(
                                {
                                  CHNKXuCA4: { variant: 'MWD37BAqY', yDCnIBg4Y: 24, },
                                  EXnsHQuPy: { variant: 'MWD37BAqY', yDCnIBg4Y: 24, },
                                },
                                baseVariant,
                                gestureVariant,
                              ),
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                          height: 500,
                          width: `min(${
                            (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                          } - 96px, 1280px)`,
                          y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 71 +
                            0 + 1414.5 + 64 + 389.54999999999995 + 0 + 1160,
                          ...addPropertyOverrides6(
                            {
                              CHNKXuCA4: {
                                width: `min(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 1280px)`,
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 2292.5 + 32 + 349.54999999999995 + 0 + 1064,
                              },
                              EXnsHQuPy: {
                                width: `min(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 1280px)`,
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 2386.5 + 48 + 357.54999999999995 + 0 + 1096,
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                          children: /* @__PURE__ */ _jsx9(motion8.div, {
                            className: 'framer-18w7331-container',
                            layoutDependency,
                            layoutId: 'snmQA7avR-container',
                            children: /* @__PURE__ */ _jsx9(stdin_default3, {
                              bb0d7Zsk2: 'rgb(255, 255, 255)',
                              dVvnNuXFk: '40px',
                              Ec9Q3zdMx: true,
                              ffFqlap6N: UuJpI7Jww,
                              height: '100%',
                              id: 'snmQA7avR',
                              kLSUfV79S: Ve8016aQC,
                              layoutId: 'snmQA7avR',
                              S5lpOxdRw: lr08BlkFf,
                              style: { width: '100%', },
                              Vai8Fm96Y: '80px',
                              variant: 'akvCPg2A6',
                              width: '100%',
                              Wl6u7Nr5l: 'Get Started',
                              wwuq8jfNR: QavYa01Q9,
                              yDCnIBg4Y: 80,
                              ...addPropertyOverrides6(
                                {
                                  CHNKXuCA4: { variant: 'MWD37BAqY', yDCnIBg4Y: 24, },
                                  EXnsHQuPy: { variant: 'MWD37BAqY', yDCnIBg4Y: 24, },
                                },
                                baseVariant,
                                gestureVariant,
                              ),
                            },),
                          },),
                        },),
                      ],
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsx9(motion8.section, {
                  className: 'framer-1ezibxe',
                  'data-framer-name': 'testimonial',
                  layoutDependency,
                  layoutId: 'eTTPyxzks',
                  style: { backgroundColor: 'var(--token-ef0665f2-3e75-43fa-a50d-d804bc56197a, rgba(0, 0, 0, 0.03))', },
                  children: /* @__PURE__ */ _jsxs6(motion8.div, {
                    className: 'framer-11svx9z',
                    'data-framer-name': 'container',
                    layoutDependency,
                    layoutId: 'MuUmbvvko',
                    children: [
                      /* @__PURE__ */ _jsx9(motion8.div, {
                        className: 'framer-18gpqrh',
                        'data-framer-name': 'section-title-wrapper',
                        layoutDependency,
                        layoutId: 'M1PWHloqB',
                        children: /* @__PURE__ */ _jsx9(RichText5, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                            children: /* @__PURE__ */ _jsx9(motion8.h2, {
                              className: 'framer-styles-preset-nhj6yu',
                              'data-styles-preset': 'KvesxXs63',
                              style: { '--framer-text-alignment': 'center', },
                              children: 'Hear from our customers',
                            },),
                          },),
                          className: 'framer-1l9jdk1',
                          'data-framer-name': 'section title',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'GamQKfwHz',
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                      },),
                      /* @__PURE__ */ _jsx9(motion8.div, {
                        className: 'framer-3jtaly',
                        'data-framer-name': 'testimonials wrapper',
                        layoutDependency,
                        layoutId: 'yYm_2OSyU',
                        children: /* @__PURE__ */ _jsxs6(motion8.div, {
                          className: 'framer-ss1p57',
                          layoutDependency,
                          layoutId: 'e1pNtXRYk',
                          children: [
                            /* @__PURE__ */ _jsxs6(motion8.div, {
                              className: 'framer-orwsta',
                              layoutDependency,
                              layoutId: 'cAqlHq4VT',
                              children: [
                                /* @__PURE__ */ _jsxs6(motion8.div, {
                                  className: 'framer-1ejpa0l',
                                  'data-framer-name': 'Card',
                                  layoutDependency,
                                  layoutId: 'gPN70YaTw',
                                  style: {
                                    backgroundColor: 'rgb(255, 255, 255)',
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    boxShadow:
                                      '0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.05), 0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.05), 0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)',
                                  },
                                  children: [
                                    /* @__PURE__ */ _jsxs6(motion8.div, {
                                      className: 'framer-ywpgp1',
                                      layoutDependency,
                                      layoutId: 'nEA2kaABB',
                                      children: [
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-1g26rom',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'LDFcoG218-shape',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-tlbcpk',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'u5keLqdtC',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-1f8jkmc',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'pXetYUUQR',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-1k9yr7m',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'FOgZf5sxP',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-ro5qu2',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'c0IyoDFDu',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                      ],
                                    },),
                                    /* @__PURE__ */ _jsx9(RichText5, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                        children: /* @__PURE__ */ _jsx9(motion8.p, {
                                          className: 'framer-styles-preset-11ld60o',
                                          'data-styles-preset': 'Otvos4bwu',
                                          children:
                                            'This software let\'s you connect with 100% of your workforce employees through different platforms. The real time analytics gives us how it engages with employees.',
                                        },),
                                      },),
                                      className: 'framer-fghhpg',
                                      fonts: ['Inter',],
                                      layoutDependency,
                                      layoutId: 'Z6AXhSk0W',
                                      style: { '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                    /* @__PURE__ */ _jsxs6(motion8.div, {
                                      className: 'framer-1uquv6l',
                                      layoutDependency,
                                      layoutId: 'm6Y8mnOLV',
                                      children: [
                                        /* @__PURE__ */ _jsx9(Image4, {
                                          background: {
                                            alt: '',
                                            fit: 'fill',
                                            intrinsicHeight: 100,
                                            intrinsicWidth: 100,
                                            loading: getLoadingLazyAtYPosition4(
                                              ((componentViewport === null || componentViewport === void 0
                                                ? void 0
                                                : componentViewport.y) || 0) +
                                                0 + 71 + 0 + 3592.05 + 64 + 0 + 0 + 91.19999999999999 + 0 + 0 + 0 + 0 + 30 + 172 + 0,
                                            ),
                                            pixelHeight: 96,
                                            pixelWidth: 96,
                                            src: 'https://framerusercontent.com/images/OlQFW7Rwic7Qtkx2y7pm6vdI1c.png',
                                          },
                                          className: 'framer-1d67xsu',
                                          layoutDependency,
                                          layoutId: 'Tj17XfULh',
                                          style: {
                                            borderBottomLeftRadius: '50%',
                                            borderBottomRightRadius: '50%',
                                            borderTopLeftRadius: '50%',
                                            borderTopRightRadius: '50%',
                                          },
                                          ...addPropertyOverrides6(
                                            {
                                              CHNKXuCA4: {
                                                background: {
                                                  alt: '',
                                                  fit: 'fill',
                                                  intrinsicHeight: 100,
                                                  intrinsicWidth: 100,
                                                  loading: getLoadingLazyAtYPosition4(
                                                    ((componentViewport === null || componentViewport === void 0
                                                      ? void 0
                                                      : componentViewport.y) || 0) +
                                                      0 + 71 + 0 + 4270.05 + 32 + 0 + 0 + 67.19999999999999 + 0 + 0 + 0 + 0 + 30 + 172 + 0,
                                                  ),
                                                  pixelHeight: 96,
                                                  pixelWidth: 96,
                                                  src: 'https://framerusercontent.com/images/OlQFW7Rwic7Qtkx2y7pm6vdI1c.png',
                                                },
                                              },
                                              EXnsHQuPy: {
                                                background: {
                                                  alt: '',
                                                  fit: 'fill',
                                                  intrinsicHeight: 100,
                                                  intrinsicWidth: 100,
                                                  loading: getLoadingLazyAtYPosition4(
                                                    ((componentViewport === null || componentViewport === void 0
                                                      ? void 0
                                                      : componentViewport.y) || 0) +
                                                      0 + 71 + 0 + 4436.05 + 48 + 0 + 0 + 75.19999999999999 + 0 + 0 + 0 + 0 + 30 + 172 + 0,
                                                  ),
                                                  pixelHeight: 96,
                                                  pixelWidth: 96,
                                                  src: 'https://framerusercontent.com/images/OlQFW7Rwic7Qtkx2y7pm6vdI1c.png',
                                                },
                                              },
                                            },
                                            baseVariant,
                                            gestureVariant,
                                          ),
                                        },),
                                        /* @__PURE__ */ _jsxs6(motion8.div, {
                                          className: 'framer-1d3wfao',
                                          layoutDependency,
                                          layoutId: 'mPLCngf8M',
                                          children: [
                                            /* @__PURE__ */ _jsx9(RichText5, {
                                              __fromCanvasComponent: true,
                                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                                  className: 'framer-styles-preset-11ld60o',
                                                  'data-styles-preset': 'Otvos4bwu',
                                                  style: {
                                                    '--framer-text-color':
                                                      'var(--extracted-r6o4lv, var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0)))',
                                                  },
                                                  children: 'Client name',
                                                },),
                                              },),
                                              className: 'framer-xci5ta',
                                              fonts: ['Inter',],
                                              layoutDependency,
                                              layoutId: 'UfoRmx5Om',
                                              style: {
                                                '--extracted-r6o4lv': 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))',
                                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                                '--framer-link-text-decoration': 'underline',
                                                '--framer-paragraph-spacing': '0px',
                                              },
                                              verticalAlignment: 'top',
                                              withExternalLayout: true,
                                            },),
                                            /* @__PURE__ */ _jsx9(RichText5, {
                                              __fromCanvasComponent: true,
                                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                                  className: 'framer-styles-preset-enusn7',
                                                  'data-styles-preset': 'D9zAP56xH',
                                                  style: {
                                                    '--framer-text-color':
                                                      'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102)))',
                                                  },
                                                  children: 'Job title',
                                                },),
                                              },),
                                              className: 'framer-hlllfy',
                                              fonts: ['Inter',],
                                              layoutDependency,
                                              layoutId: 'ue2W072kl',
                                              style: {
                                                '--extracted-r6o4lv':
                                                  'var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102))',
                                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                                '--framer-link-text-decoration': 'underline',
                                                '--framer-paragraph-spacing': '0px',
                                              },
                                              verticalAlignment: 'top',
                                              withExternalLayout: true,
                                            },),
                                          ],
                                        },),
                                      ],
                                    },),
                                  ],
                                },),
                                /* @__PURE__ */ _jsxs6(motion8.div, {
                                  className: 'framer-zowldx',
                                  'data-framer-name': 'Card',
                                  layoutDependency,
                                  layoutId: 'bZOg44Jh6',
                                  style: {
                                    backgroundColor: 'rgb(255, 255, 255)',
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    boxShadow:
                                      '0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.05), 0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.05), 0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)',
                                  },
                                  children: [
                                    /* @__PURE__ */ _jsxs6(motion8.div, {
                                      className: 'framer-1gcdzm9',
                                      layoutDependency,
                                      layoutId: 'yLQ09L4vN',
                                      children: [
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-jiti00',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'iTQFhPpgi',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-njuhau',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'ZjJJapI7T',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-1mzup86',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'kGbVwpQrk',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-4giy9s',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'W1lnMe_z2',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-159xsdu',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'T64FhXyCO',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                      ],
                                    },),
                                    /* @__PURE__ */ _jsx9(RichText5, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                        children: /* @__PURE__ */ _jsx9(motion8.p, {
                                          className: 'framer-styles-preset-11ld60o',
                                          'data-styles-preset': 'Otvos4bwu',
                                          children:
                                            'We have been utilizing HubEngage\'s employee recognition module for the past 10 months and our staff have been really engaged. The site promotes peer to peer recognition, which has been a huge success.',
                                        },),
                                      },),
                                      className: 'framer-1watc8l',
                                      fonts: ['Inter',],
                                      layoutDependency,
                                      layoutId: 'xDJJ3JQ3U',
                                      style: { '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                    /* @__PURE__ */ _jsxs6(motion8.div, {
                                      className: 'framer-1u1xuti',
                                      layoutDependency,
                                      layoutId: 'a4E0ddKxm',
                                      children: [
                                        /* @__PURE__ */ _jsx9(Image4, {
                                          background: {
                                            alt: '',
                                            fit: 'fill',
                                            intrinsicHeight: 100,
                                            intrinsicWidth: 100,
                                            loading: getLoadingLazyAtYPosition4(
                                              ((componentViewport === null || componentViewport === void 0
                                                ? void 0
                                                : componentViewport.y) || 0) +
                                                0 + 71 + 0 + 3592.05 + 64 + 0 + 0 + 91.19999999999999 + 0 + 0 + 0 + 304 + 30 + 172 + 0,
                                            ),
                                            pixelHeight: 96,
                                            pixelWidth: 96,
                                            src: 'https://framerusercontent.com/images/OlQFW7Rwic7Qtkx2y7pm6vdI1c.png',
                                          },
                                          className: 'framer-7z0aal',
                                          layoutDependency,
                                          layoutId: 'z7MWGc4E5',
                                          style: {
                                            borderBottomLeftRadius: '50%',
                                            borderBottomRightRadius: '50%',
                                            borderTopLeftRadius: '50%',
                                            borderTopRightRadius: '50%',
                                          },
                                          ...addPropertyOverrides6(
                                            {
                                              CHNKXuCA4: {
                                                background: {
                                                  alt: '',
                                                  fit: 'fill',
                                                  intrinsicHeight: 100,
                                                  intrinsicWidth: 100,
                                                  loading: getLoadingLazyAtYPosition4(
                                                    ((componentViewport === null || componentViewport === void 0
                                                      ? void 0
                                                      : componentViewport.y) || 0) +
                                                      0 + 71 + 0 + 4270.05 + 32 + 0 + 0 + 67.19999999999999 + 0 + 0 + 0 + 296 + 30 + 172 +
                                                      0,
                                                  ),
                                                  pixelHeight: 96,
                                                  pixelWidth: 96,
                                                  src: 'https://framerusercontent.com/images/OlQFW7Rwic7Qtkx2y7pm6vdI1c.png',
                                                },
                                              },
                                              EXnsHQuPy: {
                                                background: {
                                                  alt: '',
                                                  fit: 'fill',
                                                  intrinsicHeight: 100,
                                                  intrinsicWidth: 100,
                                                  loading: getLoadingLazyAtYPosition4(
                                                    ((componentViewport === null || componentViewport === void 0
                                                      ? void 0
                                                      : componentViewport.y) || 0) +
                                                      0 + 71 + 0 + 4436.05 + 48 + 0 + 0 + 75.19999999999999 + 0 + 0 + 0 + 304 + 30 + 172 +
                                                      0,
                                                  ),
                                                  pixelHeight: 96,
                                                  pixelWidth: 96,
                                                  src: 'https://framerusercontent.com/images/OlQFW7Rwic7Qtkx2y7pm6vdI1c.png',
                                                },
                                              },
                                            },
                                            baseVariant,
                                            gestureVariant,
                                          ),
                                        },),
                                        /* @__PURE__ */ _jsxs6(motion8.div, {
                                          className: 'framer-1lsh6cj',
                                          layoutDependency,
                                          layoutId: 'vZWueZVx1',
                                          children: [
                                            /* @__PURE__ */ _jsx9(RichText5, {
                                              __fromCanvasComponent: true,
                                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                                  className: 'framer-styles-preset-11ld60o',
                                                  'data-styles-preset': 'Otvos4bwu',
                                                  style: {
                                                    '--framer-text-color':
                                                      'var(--extracted-r6o4lv, var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0)))',
                                                  },
                                                  children: 'Client name',
                                                },),
                                              },),
                                              className: 'framer-19rlg2d',
                                              fonts: ['Inter',],
                                              layoutDependency,
                                              layoutId: 'dA9J3shYu',
                                              style: {
                                                '--extracted-r6o4lv': 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))',
                                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                                '--framer-link-text-decoration': 'underline',
                                                '--framer-paragraph-spacing': '0px',
                                              },
                                              verticalAlignment: 'top',
                                              withExternalLayout: true,
                                            },),
                                            /* @__PURE__ */ _jsx9(RichText5, {
                                              __fromCanvasComponent: true,
                                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                                  className: 'framer-styles-preset-enusn7',
                                                  'data-styles-preset': 'D9zAP56xH',
                                                  style: {
                                                    '--framer-text-color':
                                                      'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102)))',
                                                  },
                                                  children: 'Job title',
                                                },),
                                              },),
                                              className: 'framer-11x8yqs',
                                              fonts: ['Inter',],
                                              layoutDependency,
                                              layoutId: 'PPdAQOZxU',
                                              style: {
                                                '--extracted-r6o4lv':
                                                  'var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102))',
                                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                                '--framer-link-text-decoration': 'underline',
                                                '--framer-paragraph-spacing': '0px',
                                              },
                                              verticalAlignment: 'top',
                                              withExternalLayout: true,
                                            },),
                                          ],
                                        },),
                                      ],
                                    },),
                                  ],
                                },),
                              ],
                            },),
                            isDisplayed() && /* @__PURE__ */ _jsxs6(motion8.div, {
                              className: 'framer-1twsr8p',
                              layoutDependency,
                              layoutId: 'Hy7FBHdEu',
                              children: [
                                /* @__PURE__ */ _jsxs6(motion8.div, {
                                  className: 'framer-1lfha0g',
                                  'data-framer-name': 'Card',
                                  layoutDependency,
                                  layoutId: 'ig7XWvVVp',
                                  style: {
                                    backgroundColor: 'rgb(255, 255, 255)',
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    boxShadow:
                                      '0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.05), 0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.05), 0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)',
                                  },
                                  children: [
                                    /* @__PURE__ */ _jsxs6(motion8.div, {
                                      className: 'framer-n0z1a7',
                                      layoutDependency,
                                      layoutId: 'aeexcMDMs',
                                      children: [
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-1scm1bb',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'ldShxh_FT',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-qjtiyc',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'DmjuzYZHB',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-10xvp4v',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'PJ555uMgr',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-1gpjt43',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'haoIt1Il4',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-mfahub',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'xg3Jyh1C9',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                      ],
                                    },),
                                    /* @__PURE__ */ _jsx9(RichText5, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                        children: /* @__PURE__ */ _jsx9(motion8.p, {
                                          className: 'framer-styles-preset-11ld60o',
                                          'data-styles-preset': 'Otvos4bwu',
                                          children:
                                            'Best thing that i like about HubEngage Tool: 1. Easy to use and even HR interns can work on it which increases efficiency',
                                        },),
                                      },),
                                      className: 'framer-1l5c0vs',
                                      fonts: ['Inter',],
                                      layoutDependency,
                                      layoutId: 'YTTG1zPTR',
                                      style: { '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                    /* @__PURE__ */ _jsxs6(motion8.div, {
                                      className: 'framer-1hyj2fo',
                                      layoutDependency,
                                      layoutId: 'IqWuMcuvH',
                                      children: [
                                        /* @__PURE__ */ _jsx9(Image4, {
                                          background: {
                                            alt: '',
                                            fit: 'fill',
                                            intrinsicHeight: 100,
                                            intrinsicWidth: 100,
                                            loading: getLoadingLazyAtYPosition4(
                                              ((componentViewport === null || componentViewport === void 0
                                                ? void 0
                                                : componentViewport.y) || 0) +
                                                0 + 71 + 0 + 3592.05 + 64 + 0 + 0 + 91.19999999999999 + 0 + 0 + 0 + 0 + 30 + 172 + 0,
                                            ),
                                            pixelHeight: 96,
                                            pixelWidth: 96,
                                            src: 'https://framerusercontent.com/images/OlQFW7Rwic7Qtkx2y7pm6vdI1c.png',
                                          },
                                          className: 'framer-16szhyr',
                                          layoutDependency,
                                          layoutId: 'O7xtQL7T8',
                                          style: {
                                            borderBottomLeftRadius: '50%',
                                            borderBottomRightRadius: '50%',
                                            borderTopLeftRadius: '50%',
                                            borderTopRightRadius: '50%',
                                          },
                                          ...addPropertyOverrides6(
                                            {
                                              EXnsHQuPy: {
                                                background: {
                                                  alt: '',
                                                  fit: 'fill',
                                                  intrinsicHeight: 100,
                                                  intrinsicWidth: 100,
                                                  loading: getLoadingLazyAtYPosition4(
                                                    ((componentViewport === null || componentViewport === void 0
                                                      ? void 0
                                                      : componentViewport.y) || 0) +
                                                      0 + 71 + 0 + 4436.05 + 48 + 0 + 0 + 75.19999999999999 + 0 + 0 + 0 + 0 + 30 + 172 + 0,
                                                  ),
                                                  pixelHeight: 96,
                                                  pixelWidth: 96,
                                                  src: 'https://framerusercontent.com/images/OlQFW7Rwic7Qtkx2y7pm6vdI1c.png',
                                                },
                                              },
                                            },
                                            baseVariant,
                                            gestureVariant,
                                          ),
                                        },),
                                        /* @__PURE__ */ _jsxs6(motion8.div, {
                                          className: 'framer-jg2reo',
                                          layoutDependency,
                                          layoutId: 'tKxX6vC6L',
                                          children: [
                                            /* @__PURE__ */ _jsx9(RichText5, {
                                              __fromCanvasComponent: true,
                                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                                  className: 'framer-styles-preset-11ld60o',
                                                  'data-styles-preset': 'Otvos4bwu',
                                                  style: {
                                                    '--framer-text-color':
                                                      'var(--extracted-r6o4lv, var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0)))',
                                                  },
                                                  children: 'Client name',
                                                },),
                                              },),
                                              className: 'framer-xf2fn',
                                              fonts: ['Inter',],
                                              layoutDependency,
                                              layoutId: 'C3xqu6oGW',
                                              style: {
                                                '--extracted-r6o4lv': 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))',
                                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                                '--framer-link-text-decoration': 'underline',
                                                '--framer-paragraph-spacing': '0px',
                                              },
                                              verticalAlignment: 'top',
                                              withExternalLayout: true,
                                            },),
                                            /* @__PURE__ */ _jsx9(RichText5, {
                                              __fromCanvasComponent: true,
                                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                                  className: 'framer-styles-preset-enusn7',
                                                  'data-styles-preset': 'D9zAP56xH',
                                                  style: {
                                                    '--framer-text-color':
                                                      'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102)))',
                                                  },
                                                  children: 'Job title',
                                                },),
                                              },),
                                              className: 'framer-vdnr29',
                                              fonts: ['Inter',],
                                              layoutDependency,
                                              layoutId: 'nrBtLhLIo',
                                              style: {
                                                '--extracted-r6o4lv':
                                                  'var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102))',
                                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                                '--framer-link-text-decoration': 'underline',
                                                '--framer-paragraph-spacing': '0px',
                                              },
                                              verticalAlignment: 'top',
                                              withExternalLayout: true,
                                            },),
                                          ],
                                        },),
                                      ],
                                    },),
                                  ],
                                },),
                                /* @__PURE__ */ _jsxs6(motion8.div, {
                                  className: 'framer-18yjwji',
                                  'data-framer-name': 'Card',
                                  layoutDependency,
                                  layoutId: 'T9u6KURpi',
                                  style: {
                                    backgroundColor: 'rgb(255, 255, 255)',
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    boxShadow:
                                      '0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.05), 0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.05), 0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)',
                                  },
                                  children: [
                                    /* @__PURE__ */ _jsxs6(motion8.div, {
                                      className: 'framer-s8nnv',
                                      layoutDependency,
                                      layoutId: 'XFGeunsMz',
                                      children: [
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-n9p3zr',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'iVng4mtLC',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-w0iuw3',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'nqipGHP9h',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-1u3g0g7',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'jXwbbG69C',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-10pqg3q',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'VvdIK7cvH',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-ja6ys',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'RukHgmHsu',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                      ],
                                    },),
                                    /* @__PURE__ */ _jsx9(RichText5, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                        children: /* @__PURE__ */ _jsx9(motion8.p, {
                                          className: 'framer-styles-preset-11ld60o',
                                          'data-styles-preset': 'Otvos4bwu',
                                          children:
                                            'You can arrange giving feedback, providing gift cards or get creative with AI powered content. It leads to team building, community building, leadership, satisfaction survey. You can obtain news, use video, image, storytelling, and so on. You have variety of channels to communicate, not just sharing docs through HubEngage.',
                                        },),
                                      },),
                                      className: 'framer-13csq07',
                                      fonts: ['Inter',],
                                      layoutDependency,
                                      layoutId: 'p5dWMgL51',
                                      style: { '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                    /* @__PURE__ */ _jsxs6(motion8.div, {
                                      className: 'framer-pj9trf',
                                      layoutDependency,
                                      layoutId: 'tRZxM9U7b',
                                      children: [
                                        /* @__PURE__ */ _jsx9(Image4, {
                                          background: {
                                            alt: '',
                                            fit: 'fill',
                                            intrinsicHeight: 100,
                                            intrinsicWidth: 100,
                                            loading: getLoadingLazyAtYPosition4(
                                              ((componentViewport === null || componentViewport === void 0
                                                ? void 0
                                                : componentViewport.y) || 0) +
                                                0 + 71 + 0 + 3592.05 + 64 + 0 + 0 + 91.19999999999999 + 0 + 0 + 0 + 304 + 30 + 172 + 0,
                                            ),
                                            pixelHeight: 96,
                                            pixelWidth: 96,
                                            src: 'https://framerusercontent.com/images/OlQFW7Rwic7Qtkx2y7pm6vdI1c.png',
                                          },
                                          className: 'framer-14jxjn5',
                                          layoutDependency,
                                          layoutId: 'GeW1QEdse',
                                          style: {
                                            borderBottomLeftRadius: '50%',
                                            borderBottomRightRadius: '50%',
                                            borderTopLeftRadius: '50%',
                                            borderTopRightRadius: '50%',
                                          },
                                          ...addPropertyOverrides6(
                                            {
                                              EXnsHQuPy: {
                                                background: {
                                                  alt: '',
                                                  fit: 'fill',
                                                  intrinsicHeight: 100,
                                                  intrinsicWidth: 100,
                                                  loading: getLoadingLazyAtYPosition4(
                                                    ((componentViewport === null || componentViewport === void 0
                                                      ? void 0
                                                      : componentViewport.y) || 0) +
                                                      0 + 71 + 0 + 4436.05 + 48 + 0 + 0 + 75.19999999999999 + 0 + 0 + 0 + 304 + 30 + 172 +
                                                      0,
                                                  ),
                                                  pixelHeight: 96,
                                                  pixelWidth: 96,
                                                  src: 'https://framerusercontent.com/images/OlQFW7Rwic7Qtkx2y7pm6vdI1c.png',
                                                },
                                              },
                                            },
                                            baseVariant,
                                            gestureVariant,
                                          ),
                                        },),
                                        /* @__PURE__ */ _jsxs6(motion8.div, {
                                          className: 'framer-1dl5up9',
                                          layoutDependency,
                                          layoutId: 'UGP1Aep5b',
                                          children: [
                                            /* @__PURE__ */ _jsx9(RichText5, {
                                              __fromCanvasComponent: true,
                                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                                  className: 'framer-styles-preset-11ld60o',
                                                  'data-styles-preset': 'Otvos4bwu',
                                                  style: {
                                                    '--framer-text-color':
                                                      'var(--extracted-r6o4lv, var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0)))',
                                                  },
                                                  children: 'Client name',
                                                },),
                                              },),
                                              className: 'framer-1sfl8wj',
                                              fonts: ['Inter',],
                                              layoutDependency,
                                              layoutId: 's9M8EdyTj',
                                              style: {
                                                '--extracted-r6o4lv': 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))',
                                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                                '--framer-link-text-decoration': 'underline',
                                                '--framer-paragraph-spacing': '0px',
                                              },
                                              verticalAlignment: 'top',
                                              withExternalLayout: true,
                                            },),
                                            /* @__PURE__ */ _jsx9(RichText5, {
                                              __fromCanvasComponent: true,
                                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                                  className: 'framer-styles-preset-enusn7',
                                                  'data-styles-preset': 'D9zAP56xH',
                                                  style: {
                                                    '--framer-text-color':
                                                      'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102)))',
                                                  },
                                                  children: 'Job title',
                                                },),
                                              },),
                                              className: 'framer-sapu8e',
                                              fonts: ['Inter',],
                                              layoutDependency,
                                              layoutId: 'bXt6aTqDk',
                                              style: {
                                                '--extracted-r6o4lv':
                                                  'var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102))',
                                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                                '--framer-link-text-decoration': 'underline',
                                                '--framer-paragraph-spacing': '0px',
                                              },
                                              verticalAlignment: 'top',
                                              withExternalLayout: true,
                                            },),
                                          ],
                                        },),
                                      ],
                                    },),
                                  ],
                                },),
                              ],
                            },),
                            isDisplayed1() && /* @__PURE__ */ _jsxs6(motion8.div, {
                              className: 'framer-tzdmte',
                              layoutDependency,
                              layoutId: 'pRNbxttjB',
                              children: [
                                /* @__PURE__ */ _jsxs6(motion8.div, {
                                  className: 'framer-smcli0',
                                  'data-framer-name': 'Card',
                                  layoutDependency,
                                  layoutId: 'AZotxvGnx',
                                  style: {
                                    backgroundColor: 'rgb(255, 255, 255)',
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    boxShadow:
                                      '0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.05), 0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.05), 0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)',
                                  },
                                  children: [
                                    /* @__PURE__ */ _jsxs6(motion8.div, {
                                      className: 'framer-1mj99a5',
                                      layoutDependency,
                                      layoutId: 'XhotxevXM',
                                      children: [
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-4g9upb',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'jLP36gweN',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-wp7n1k',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'bJuejb33a',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-13p26dj',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'k8_3Bqq9i',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-13z9b7r',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'NDJfs3pYZ',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-1fdop1h',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'QWfx7l5gn',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                      ],
                                    },),
                                    /* @__PURE__ */ _jsx9(RichText5, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                        children: /* @__PURE__ */ _jsx9(motion8.p, {
                                          className: 'framer-styles-preset-11ld60o',
                                          'data-styles-preset': 'Otvos4bwu',
                                          children:
                                            'Hubengage is very helpful for us especially if you are working in sales as you get handle all customers in different platforms including hubengage.',
                                        },),
                                      },),
                                      className: 'framer-n7qv6g',
                                      fonts: ['Inter',],
                                      layoutDependency,
                                      layoutId: 'OPit6WcFX',
                                      style: { '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                    /* @__PURE__ */ _jsxs6(motion8.div, {
                                      className: 'framer-19rijyf',
                                      layoutDependency,
                                      layoutId: 'MUzmKqJz6',
                                      children: [
                                        /* @__PURE__ */ _jsx9(Image4, {
                                          background: {
                                            alt: '',
                                            fit: 'fill',
                                            intrinsicHeight: 100,
                                            intrinsicWidth: 100,
                                            loading: getLoadingLazyAtYPosition4(
                                              ((componentViewport === null || componentViewport === void 0
                                                ? void 0
                                                : componentViewport.y) || 0) +
                                                0 + 71 + 0 + 3592.05 + 64 + 0 + 0 + 91.19999999999999 + 0 + 0 + 0 + 0 + 30 + 172 + 0,
                                            ),
                                            pixelHeight: 96,
                                            pixelWidth: 96,
                                            src: 'https://framerusercontent.com/images/OlQFW7Rwic7Qtkx2y7pm6vdI1c.png',
                                          },
                                          className: 'framer-11txn9j',
                                          layoutDependency,
                                          layoutId: 'oaqZH08ds',
                                          style: {
                                            borderBottomLeftRadius: '50%',
                                            borderBottomRightRadius: '50%',
                                            borderTopLeftRadius: '50%',
                                            borderTopRightRadius: '50%',
                                          },
                                        },),
                                        /* @__PURE__ */ _jsxs6(motion8.div, {
                                          className: 'framer-mmg4c6',
                                          layoutDependency,
                                          layoutId: 'mTe5wgPn2',
                                          children: [
                                            /* @__PURE__ */ _jsx9(RichText5, {
                                              __fromCanvasComponent: true,
                                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                                  className: 'framer-styles-preset-11ld60o',
                                                  'data-styles-preset': 'Otvos4bwu',
                                                  style: {
                                                    '--framer-text-color':
                                                      'var(--extracted-r6o4lv, var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0)))',
                                                  },
                                                  children: 'Client name',
                                                },),
                                              },),
                                              className: 'framer-mwcgdj',
                                              fonts: ['Inter',],
                                              layoutDependency,
                                              layoutId: 'AeAYulE0a',
                                              style: {
                                                '--extracted-r6o4lv': 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))',
                                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                                '--framer-link-text-decoration': 'underline',
                                                '--framer-paragraph-spacing': '0px',
                                              },
                                              verticalAlignment: 'top',
                                              withExternalLayout: true,
                                            },),
                                            /* @__PURE__ */ _jsx9(RichText5, {
                                              __fromCanvasComponent: true,
                                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                                  className: 'framer-styles-preset-enusn7',
                                                  'data-styles-preset': 'D9zAP56xH',
                                                  style: {
                                                    '--framer-text-color':
                                                      'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102)))',
                                                  },
                                                  children: 'Job title',
                                                },),
                                              },),
                                              className: 'framer-ofkhlo',
                                              fonts: ['Inter',],
                                              layoutDependency,
                                              layoutId: 'WsWexw388',
                                              style: {
                                                '--extracted-r6o4lv':
                                                  'var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102))',
                                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                                '--framer-link-text-decoration': 'underline',
                                                '--framer-paragraph-spacing': '0px',
                                              },
                                              verticalAlignment: 'top',
                                              withExternalLayout: true,
                                            },),
                                          ],
                                        },),
                                      ],
                                    },),
                                  ],
                                },),
                                /* @__PURE__ */ _jsxs6(motion8.div, {
                                  className: 'framer-1feabib',
                                  'data-framer-name': 'Card',
                                  layoutDependency,
                                  layoutId: 'ZFgmlm5cG',
                                  style: {
                                    backgroundColor: 'rgb(255, 255, 255)',
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    boxShadow:
                                      '0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.05), 0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.05), 0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)',
                                  },
                                  children: [
                                    /* @__PURE__ */ _jsxs6(motion8.div, {
                                      className: 'framer-1t5hgvb',
                                      layoutDependency,
                                      layoutId: 'T5FBvGWCY',
                                      children: [
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-l5neya',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'wpvgDgYMC',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-nauclz',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'GcaNaGB1k',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-lb8dsj',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'cnPywJKhR',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-1dtvd0i',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'od_hw4WOU',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                        /* @__PURE__ */ _jsx9(SVG, {
                                          className: 'framer-ui6m8i',
                                          'data-framer-name': 'star',
                                          layout: 'position',
                                          layoutDependency,
                                          layoutId: 'RM56FA0hU',
                                          opacity: 1,
                                          radius: 0,
                                          svg:
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.256 2.463 C 9.56 1.846 10.44 1.846 10.744 2.463 L 12.746 6.519 C 12.867 6.764 13.1 6.933 13.371 6.973 L 17.846 7.623 C 18.527 7.722 18.799 8.558 18.306 9.039 L 15.068 12.195 C 14.872 12.386 14.783 12.661 14.829 12.93 L 15.594 17.388 C 15.71 18.066 14.998 18.583 14.389 18.262 L 10.386 16.158 C 10.144 16.031 9.856 16.031 9.614 16.158 L 5.611 18.262 C 5.002 18.583 4.29 18.066 4.406 17.388 L 5.171 12.93 C 5.217 12.661 5.128 12.386 4.932 12.195 L 1.694 9.039 C 1.201 8.558 1.473 7.722 2.154 7.623 L 6.629 6.973 C 6.9 6.933 7.133 6.764 7.254 6.519 Z" fill="rgb(255, 195, 0)"></path></svg>',
                                          svgContentId: 11753698771,
                                          withExternalLayout: true,
                                        },),
                                      ],
                                    },),
                                    /* @__PURE__ */ _jsx9(RichText5, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                        children: /* @__PURE__ */ _jsx9(motion8.p, {
                                          className: 'framer-styles-preset-11ld60o',
                                          'data-styles-preset': 'Otvos4bwu',
                                          children:
                                            'We have used HubEngage for employee engagement and it is a very reosurceful tools.Employees are able to communicate effectively which promotes teamwork and we have realized enhanced productivity.',
                                        },),
                                      },),
                                      className: 'framer-xmo9du',
                                      fonts: ['Inter',],
                                      layoutDependency,
                                      layoutId: 'Hcbme0x2R',
                                      style: { '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                    /* @__PURE__ */ _jsxs6(motion8.div, {
                                      className: 'framer-5rlbyz',
                                      layoutDependency,
                                      layoutId: 'pegI0SsIN',
                                      children: [
                                        /* @__PURE__ */ _jsx9(Image4, {
                                          background: {
                                            alt: '',
                                            fit: 'fill',
                                            intrinsicHeight: 100,
                                            intrinsicWidth: 100,
                                            loading: getLoadingLazyAtYPosition4(
                                              ((componentViewport === null || componentViewport === void 0
                                                ? void 0
                                                : componentViewport.y) || 0) +
                                                0 + 71 + 0 + 3592.05 + 64 + 0 + 0 + 91.19999999999999 + 0 + 0 + 0 + 304 + 30 + 172 + 0,
                                            ),
                                            pixelHeight: 96,
                                            pixelWidth: 96,
                                            positionX: 'center',
                                            positionY: 'top',
                                            src: 'https://framerusercontent.com/images/OlQFW7Rwic7Qtkx2y7pm6vdI1c.png',
                                          },
                                          className: 'framer-1szfbc0',
                                          layoutDependency,
                                          layoutId: 'qd8OdpwEd',
                                          style: {
                                            borderBottomLeftRadius: '50%',
                                            borderBottomRightRadius: '50%',
                                            borderTopLeftRadius: '50%',
                                            borderTopRightRadius: '50%',
                                          },
                                        },),
                                        /* @__PURE__ */ _jsxs6(motion8.div, {
                                          className: 'framer-hcjevl',
                                          layoutDependency,
                                          layoutId: 'wdBaMZoDI',
                                          children: [
                                            /* @__PURE__ */ _jsx9(RichText5, {
                                              __fromCanvasComponent: true,
                                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                                  className: 'framer-styles-preset-11ld60o',
                                                  'data-styles-preset': 'Otvos4bwu',
                                                  style: {
                                                    '--framer-text-color':
                                                      'var(--extracted-r6o4lv, var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0)))',
                                                  },
                                                  children: 'Client name',
                                                },),
                                              },),
                                              className: 'framer-1etn75j',
                                              fonts: ['Inter',],
                                              layoutDependency,
                                              layoutId: 'ovWiYqFco',
                                              style: {
                                                '--extracted-r6o4lv': 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))',
                                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                                '--framer-link-text-decoration': 'underline',
                                                '--framer-paragraph-spacing': '0px',
                                              },
                                              verticalAlignment: 'top',
                                              withExternalLayout: true,
                                            },),
                                            /* @__PURE__ */ _jsx9(RichText5, {
                                              __fromCanvasComponent: true,
                                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                                  className: 'framer-styles-preset-enusn7',
                                                  'data-styles-preset': 'D9zAP56xH',
                                                  style: {
                                                    '--framer-text-color':
                                                      'var(--extracted-r6o4lv, var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102)))',
                                                  },
                                                  children: 'Job title',
                                                },),
                                              },),
                                              className: 'framer-cv8zlu',
                                              fonts: ['Inter',],
                                              layoutDependency,
                                              layoutId: 'x8xGvs4WH',
                                              style: {
                                                '--extracted-r6o4lv':
                                                  'var(--token-55167357-4330-40dd-8923-5849e5e24067, rgb(102, 102, 102))',
                                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                                '--framer-link-text-decoration': 'underline',
                                                '--framer-paragraph-spacing': '0px',
                                              },
                                              verticalAlignment: 'top',
                                              withExternalLayout: true,
                                            },),
                                          ],
                                        },),
                                      ],
                                    },),
                                  ],
                                },),
                              ],
                            },),
                          ],
                        },),
                      },),
                    ],
                  },),
                },),
                /* @__PURE__ */ _jsx9(motion8.section, {
                  className: 'framer-korz7o',
                  'data-framer-name': 'cta',
                  layoutDependency,
                  layoutId: 'cLl2fJw81',
                  style: { backgroundColor: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(5, 31, 49))', },
                  children: /* @__PURE__ */ _jsxs6(motion8.div, {
                    className: 'framer-d9vvnq',
                    'data-framer-name': 'container',
                    layoutDependency,
                    layoutId: 'jWecyYgQZ',
                    children: [
                      /* @__PURE__ */ _jsx9(RichText5, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                          children: /* @__PURE__ */ _jsx9(motion8.h2, {
                            className: 'framer-styles-preset-nhj6yu',
                            'data-styles-preset': 'KvesxXs63',
                            style: {
                              '--framer-text-alignment': 'center',
                              '--framer-text-color':
                                'var(--extracted-1of0zx5, var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255)))',
                            },
                            children: 'Simplify pipeline management with HubSpot\u2019s free Smart CRM',
                          },),
                        },),
                        className: 'framer-exsqp3',
                        'data-framer-name': 'Title',
                        fonts: ['Inter',],
                        layoutDependency,
                        layoutId: 'RJUfqw7W_',
                        style: { '--extracted-1of0zx5': 'var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255))', },
                        text: XkFMNwv8y,
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                      /* @__PURE__ */ _jsx9(RichText5, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                          children: /* @__PURE__ */ _jsx9(motion8.p, {
                            className: 'framer-styles-preset-hjr3u4',
                            'data-styles-preset': 'NM8opoDhC',
                            style: {
                              '--framer-text-alignment': 'center',
                              '--framer-text-color':
                                'var(--extracted-r6o4lv, var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255)))',
                            },
                            children: 'Seamlessly connect your data, teams, and customers.',
                          },),
                        },),
                        className: 'framer-1f4ejfh',
                        'data-framer-name': 'Overview',
                        fonts: ['Inter',],
                        layoutDependency,
                        layoutId: 'zL8AfDelD',
                        style: { '--extracted-r6o4lv': 'var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255))', },
                        text: leEGfkobb,
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                      /* @__PURE__ */ _jsx9(motion8.div, {
                        className: 'framer-10qhkkj',
                        'data-framer-name': 'button-wrapper',
                        layoutDependency,
                        layoutId: 'RhsH3tNAd',
                        children: /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                          height: 51,
                          y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 71 +
                            0 + 4411.25 + 64 + 0 + 0 + 191.2 + 8,
                          ...addPropertyOverrides6(
                            {
                              CHNKXuCA4: {
                                width: `max(min(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 1240px), 1px)`,
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 4977.25 + 32 + 0 + 0 + 183.2 + 8,
                              },
                              EXnsHQuPy: {
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 5191.25 + 48 + 0 + 0 + 191.2 + 8,
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                          children: /* @__PURE__ */ _jsx9(motion8.div, {
                            className: 'framer-8aqtb0-container',
                            layoutDependency,
                            layoutId: 'HP2gY9_ML-container',
                            children: /* @__PURE__ */ _jsx9(ButtonWithCTAClassnameWithMappedReactProps1v1ipky2, {
                              height: '100%',
                              hoe0QDrl5: RWcxsqQ0U,
                              I0Sz0dr2v: 16,
                              i8nKkVReT: '16px 30px 16px 30px',
                              id: 'HP2gY9_ML',
                              Iyt7vRlRL: '100px',
                              KPs74ZNM1: {
                                borderColor:
                                  'var(--token-cd33d90a-ec6a-4a56-8bbb-7b9028284170, rgb(245, 195, 90)) /* {"name":"Secondary"} */',
                                borderStyle: 'solid',
                                borderWidth: 1,
                              },
                              layoutId: 'HP2gY9_ML',
                              n8jmDbiSM: 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))',
                              od7wtCL7T: lr08BlkFf,
                              OGI9WGJ1a: false,
                              uBsjwgvnU: true,
                              variant: 'ypSdI0dLV',
                              width: '100%',
                              y4hb9lsDX: 'var(--token-cd33d90a-ec6a-4a56-8bbb-7b9028284170, rgb(245, 195, 90))',
                              ...addPropertyOverrides6({ CHNKXuCA4: { style: { width: '100%', }, }, }, baseVariant, gestureVariant,),
                            },),
                          },),
                        },),
                      },),
                    ],
                  },),
                },),
                /* @__PURE__ */ _jsx9(motion8.section, {
                  className: 'framer-tusx40',
                  'data-framer-name': 'faqs',
                  layoutDependency,
                  layoutId: 'K4gLsL9y8',
                  children: /* @__PURE__ */ _jsxs6(motion8.div, {
                    className: 'framer-1h6aff8',
                    'data-framer-name': 'container',
                    layoutDependency,
                    layoutId: 'xFB1Og0Ti',
                    children: [
                      /* @__PURE__ */ _jsxs6(motion8.div, {
                        className: 'framer-167wrmx',
                        layoutDependency,
                        layoutId: 'Q4b6h7ds_',
                        children: [
                          /* @__PURE__ */ _jsx9(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                              children: /* @__PURE__ */ _jsx9(motion8.p, {
                                className: 'framer-styles-preset-1vijcsh',
                                'data-styles-preset': 'ob0AYC2e3',
                                style: {
                                  '--framer-text-color':
                                    'var(--extracted-r6o4lv, var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(132, 0, 168)))',
                                },
                                children: 'FAQs',
                              },),
                            },),
                            className: 'framer-g29cl8',
                            'data-framer-name': 'Text',
                            fonts: ['Inter',],
                            layoutDependency,
                            layoutId: 'T4QH8Gymq',
                            style: { '--extracted-r6o4lv': 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(132, 0, 168))', },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                          },),
                          /* @__PURE__ */ _jsx9(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                              children: /* @__PURE__ */ _jsx9(motion8.h2, {
                                className: 'framer-styles-preset-nhj6yu',
                                'data-styles-preset': 'KvesxXs63',
                                children: 'Find answers to common questions.',
                              },),
                            },),
                            className: 'framer-2a80jp',
                            'data-framer-name': 'Title',
                            fonts: ['Inter',],
                            layoutDependency,
                            layoutId: 'os4oJLOsO',
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                          },),
                          isDisplayed1() && /* @__PURE__ */ _jsx9(ResolveLinks, {
                            links: [{ href: rHBegoWHYmAYFMnPFA, implicitPathVariables: void 0, },],
                            children: (resolvedLinks,) =>
                              /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                                height: 51,
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  71 + 0 + 4789.45 + 64 + 0 + 0 + 20 + 169.45,
                                children: /* @__PURE__ */ _jsx9(motion8.div, {
                                  className: 'framer-281efh-container',
                                  layoutDependency,
                                  layoutId: 'fh1xdrYmq-container',
                                  children: /* @__PURE__ */ _jsx9(ButtonWithCTAClassnameWithMappedReactProps1v1ipky2, {
                                    height: '100%',
                                    hoe0QDrl5: 'Contact us',
                                    I0Sz0dr2v: 16,
                                    i8nKkVReT: '10px 20px 10px 20px',
                                    id: 'fh1xdrYmq',
                                    Iyt7vRlRL: '100px',
                                    KPs74ZNM1: {
                                      borderColor:
                                        'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(156, 79, 255)) /* {"name":"Primary"} */',
                                      borderStyle: 'solid',
                                      borderWidth: 1,
                                    },
                                    layoutId: 'fh1xdrYmq',
                                    n8jmDbiSM: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76))',
                                    od7wtCL7T: resolvedLinks[0],
                                    OGI9WGJ1a: false,
                                    uBsjwgvnU: true,
                                    variant: 'ypSdI0dLV',
                                    width: '100%',
                                    y4hb9lsDX: 'var(--token-97834521-815d-4999-a146-7853838f95e3, rgba(0, 0, 0, 0))',
                                  },),
                                },),
                              },),
                          },),
                        ],
                      },),
                      /* @__PURE__ */ _jsxs6(motion8.div, {
                        className: 'framer-1c7k48u',
                        'data-border': true,
                        layoutDependency,
                        layoutId: 'pZyTk02zQ',
                        style: {
                          '--border-bottom-width': '1px',
                          '--border-color': 'rgb(235, 235, 235)',
                          '--border-left-width': '0px',
                          '--border-right-width': '0px',
                          '--border-style': 'solid',
                          '--border-top-width': '1px',
                        },
                        children: [
                          /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                            height: 118,
                            width: `max((min(${
                              (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                            } - 96px, 1280px) - 80px) * 0.6, 1px)`,
                            y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 71 +
                              0 + 4789.45 + 64 + 0 + 0 + 0 + 0,
                            ...addPropertyOverrides6(
                              {
                                CHNKXuCA4: {
                                  width: `min(${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 40px, 1280px)`,
                                  y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                                    0 + 71 + 0 + 5283.45 + 32 + 0 + 0 + 197.45 + 0 + 0,
                                },
                                EXnsHQuPy: {
                                  width: `min(${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 40px, 1280px)`,
                                  y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                                    0 + 71 + 0 + 5537.45 + 48 + 0 + 0 + 197.45 + 0 + 0,
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                            children: /* @__PURE__ */ _jsx9(motion8.div, {
                              className: 'framer-1q556ko-container',
                              layoutDependency,
                              layoutId: 'u9eOuaq3Y-container',
                              children: /* @__PURE__ */ _jsx9(stdin_default4, {
                                height: '100%',
                                id: 'u9eOuaq3Y',
                                layoutId: 'u9eOuaq3Y',
                                style: { width: '100%', },
                                T8rQFvSBR: iwHVpnvTO,
                                variant: 'MzilS4QII',
                                W88zB8mIG: saOvCDi2C,
                                width: '100%',
                              },),
                            },),
                          },),
                          /* @__PURE__ */ _jsx9(motion8.div, {
                            className: 'framer-1u0krqg',
                            'data-framer-name': 'Line',
                            layoutDependency,
                            layoutId: 'fzketi_6p',
                            style: { backgroundColor: 'rgba(0, 0, 0, 0.08)', },
                          },),
                          /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                            height: 118,
                            width: `max((min(${
                              (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                            } - 96px, 1280px) - 80px) * 0.6, 1px)`,
                            y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 71 +
                              0 + 4789.45 + 64 + 0 + 0 + 0 + 119,
                            ...addPropertyOverrides6(
                              {
                                CHNKXuCA4: {
                                  width: `min(${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 40px, 1280px)`,
                                  y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                                    0 + 71 + 0 + 5283.45 + 32 + 0 + 0 + 197.45 + 0 + 119,
                                },
                                EXnsHQuPy: {
                                  width: `min(${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 40px, 1280px)`,
                                  y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                                    0 + 71 + 0 + 5537.45 + 48 + 0 + 0 + 197.45 + 0 + 119,
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                            children: /* @__PURE__ */ _jsx9(motion8.div, {
                              className: 'framer-1nurddx-container',
                              layoutDependency,
                              layoutId: 'uuSBQilDq-container',
                              children: /* @__PURE__ */ _jsx9(stdin_default4, {
                                height: '100%',
                                id: 'uuSBQilDq',
                                layoutId: 'uuSBQilDq',
                                style: { width: '100%', },
                                T8rQFvSBR: zYmH_frXJ,
                                variant: 'MzilS4QII',
                                W88zB8mIG: rUY346aa_,
                                width: '100%',
                              },),
                            },),
                          },),
                          /* @__PURE__ */ _jsx9(motion8.div, {
                            className: 'framer-1gkgsfx',
                            'data-framer-name': 'Line',
                            layoutDependency,
                            layoutId: 'MAoNjJUeO',
                            style: { backgroundColor: 'rgba(0, 0, 0, 0.08)', },
                          },),
                          /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                            height: 118,
                            width: `max((min(${
                              (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                            } - 96px, 1280px) - 80px) * 0.6, 1px)`,
                            y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 71 +
                              0 + 4789.45 + 64 + 0 + 0 + 0 + 238,
                            ...addPropertyOverrides6(
                              {
                                CHNKXuCA4: {
                                  width: `min(${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 40px, 1280px)`,
                                  y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                                    0 + 71 + 0 + 5283.45 + 32 + 0 + 0 + 197.45 + 0 + 238,
                                },
                                EXnsHQuPy: {
                                  width: `min(${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 40px, 1280px)`,
                                  y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                                    0 + 71 + 0 + 5537.45 + 48 + 0 + 0 + 197.45 + 0 + 238,
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                            children: /* @__PURE__ */ _jsx9(motion8.div, {
                              className: 'framer-6rdbd-container',
                              layoutDependency,
                              layoutId: 'hsE9DBZ_s-container',
                              children: /* @__PURE__ */ _jsx9(stdin_default4, {
                                height: '100%',
                                id: 'hsE9DBZ_s',
                                layoutId: 'hsE9DBZ_s',
                                style: { width: '100%', },
                                T8rQFvSBR: eOZEo3DcY,
                                variant: 'MzilS4QII',
                                W88zB8mIG: AXRXqMhvE,
                                width: '100%',
                              },),
                            },),
                          },),
                          /* @__PURE__ */ _jsx9(motion8.div, {
                            className: 'framer-1lxtya2',
                            'data-framer-name': 'Line',
                            layoutDependency,
                            layoutId: 'RODPpwBm_',
                            style: { backgroundColor: 'rgba(0, 0, 0, 0.08)', },
                          },),
                          /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                            height: 118,
                            width: `max((min(${
                              (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                            } - 96px, 1280px) - 80px) * 0.6, 1px)`,
                            y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 71 +
                              0 + 4789.45 + 64 + 0 + 0 + 0 + 357,
                            ...addPropertyOverrides6(
                              {
                                CHNKXuCA4: {
                                  width: `min(${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 40px, 1280px)`,
                                  y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                                    0 + 71 + 0 + 5283.45 + 32 + 0 + 0 + 197.45 + 0 + 357,
                                },
                                EXnsHQuPy: {
                                  width: `min(${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 40px, 1280px)`,
                                  y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                                    0 + 71 + 0 + 5537.45 + 48 + 0 + 0 + 197.45 + 0 + 357,
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                            children: /* @__PURE__ */ _jsx9(motion8.div, {
                              className: 'framer-19xrt4c-container',
                              layoutDependency,
                              layoutId: 'Xia8lzgOm-container',
                              children: /* @__PURE__ */ _jsx9(stdin_default4, {
                                height: '100%',
                                id: 'Xia8lzgOm',
                                layoutId: 'Xia8lzgOm',
                                style: { width: '100%', },
                                T8rQFvSBR: p80Z9Cu19,
                                variant: 'MzilS4QII',
                                W88zB8mIG: IJu_6P5Hk,
                                width: '100%',
                              },),
                            },),
                          },),
                          /* @__PURE__ */ _jsx9(motion8.div, {
                            className: 'framer-kzjwbq',
                            'data-framer-name': 'Line',
                            layoutDependency,
                            layoutId: 'E6DGnqZ1y',
                            style: { backgroundColor: 'rgba(0, 0, 0, 0.08)', },
                          },),
                          /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                            height: 118,
                            width: `max((min(${
                              (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                            } - 96px, 1280px) - 80px) * 0.6, 1px)`,
                            y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 71 +
                              0 + 4789.45 + 64 + 0 + 0 + 0 + 476,
                            ...addPropertyOverrides6(
                              {
                                CHNKXuCA4: {
                                  width: `min(${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 40px, 1280px)`,
                                  y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                                    0 + 71 + 0 + 5283.45 + 32 + 0 + 0 + 197.45 + 0 + 476,
                                },
                                EXnsHQuPy: {
                                  width: `min(${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 40px, 1280px)`,
                                  y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) +
                                    0 + 71 + 0 + 5537.45 + 48 + 0 + 0 + 197.45 + 0 + 476,
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                            children: /* @__PURE__ */ _jsx9(motion8.div, {
                              className: 'framer-1tffjlo-container',
                              layoutDependency,
                              layoutId: 'cjqyWR9lg-container',
                              children: /* @__PURE__ */ _jsx9(stdin_default4, {
                                height: '100%',
                                id: 'cjqyWR9lg',
                                layoutId: 'cjqyWR9lg',
                                style: { width: '100%', },
                                T8rQFvSBR: DOlVhCAwB,
                                variant: 'MzilS4QII',
                                W88zB8mIG: l5_wpVL3v,
                                width: '100%',
                              },),
                            },),
                          },),
                        ],
                      },),
                    ],
                  },),
                },),
                /* @__PURE__ */ _jsx9(motion8.section, {
                  className: 'framer-xwb5zq',
                  'data-framer-name': 'cta',
                  layoutDependency,
                  layoutId: 'jmiNtBhbK',
                  style: { backgroundColor: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76))', },
                  children: /* @__PURE__ */ _jsxs6(motion8.div, {
                    className: 'framer-1fvj1qn',
                    'data-framer-name': 'container',
                    layoutDependency,
                    layoutId: 'FwW4AWIAu',
                    children: [
                      /* @__PURE__ */ _jsx9(RichText5, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                          children: /* @__PURE__ */ _jsx9(motion8.h2, {
                            className: 'framer-styles-preset-nhj6yu',
                            'data-styles-preset': 'KvesxXs63',
                            style: {
                              '--framer-text-color':
                                'var(--extracted-1of0zx5, var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255)))',
                            },
                            children: ' Ready to get\xA0started?',
                          },),
                        },),
                        className: 'framer-goktaq',
                        'data-framer-name': 'Title',
                        fonts: ['Inter',],
                        layoutDependency,
                        layoutId: 'RAXlyJxJP',
                        style: { '--extracted-1of0zx5': 'var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255))', },
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                        ...addPropertyOverrides6(
                          {
                            CHNKXuCA4: {
                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                children: /* @__PURE__ */ _jsx9(motion8.h2, {
                                  className: 'framer-styles-preset-nhj6yu',
                                  'data-styles-preset': 'KvesxXs63',
                                  style: {
                                    '--framer-text-alignment': 'center',
                                    '--framer-text-color':
                                      'var(--extracted-1of0zx5, var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255)))',
                                  },
                                  children: 'Ready to get\xA0started?',
                                },),
                              },),
                            },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                      /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                        height: 51,
                        y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + 71 + 0 +
                          5511.45 + 32 + 0 + 0,
                        ...addPropertyOverrides6(
                          {
                            CHNKXuCA4: {
                              width: `min(${
                                (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                              } - 40px, 1240px)`,
                              y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                71 + 0 + 6138.9 + 32 + 0 + 0 + 59.199999999999996,
                            },
                            EXnsHQuPy: {
                              y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                71 + 0 + 6424.9 + 32 + 0 + 0,
                            },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                        children: /* @__PURE__ */ _jsx9(motion8.div, {
                          className: 'framer-e1mzzd-container',
                          layoutDependency,
                          layoutId: 'N8oIZl0gt-container',
                          children: /* @__PURE__ */ _jsx9(ButtonWithCTAClassnameWithMappedReactProps1v1ipky2, {
                            height: '100%',
                            hoe0QDrl5: RWcxsqQ0U,
                            I0Sz0dr2v: 16,
                            i8nKkVReT: '14px 24px 14px 24px',
                            id: 'N8oIZl0gt',
                            Iyt7vRlRL: '100px',
                            KPs74ZNM1: {
                              borderColor:
                                'var(--token-cd33d90a-ec6a-4a56-8bbb-7b9028284170, rgb(245, 195, 90)) /* {"name":"Secondary"} */',
                              borderStyle: 'solid',
                              borderWidth: 1,
                            },
                            layoutId: 'N8oIZl0gt',
                            n8jmDbiSM: 'var(--token-e68649a6-bfbe-4d86-91db-68e6c7c52a9a, rgb(0, 0, 0))',
                            od7wtCL7T: lr08BlkFf,
                            OGI9WGJ1a: false,
                            uBsjwgvnU: true,
                            variant: 'ypSdI0dLV',
                            width: '100%',
                            y4hb9lsDX: 'var(--token-cd33d90a-ec6a-4a56-8bbb-7b9028284170, rgb(245, 195, 90))',
                            ...addPropertyOverrides6({ CHNKXuCA4: { style: { width: '100%', }, }, }, baseVariant, gestureVariant,),
                          },),
                        },),
                      },),
                    ],
                  },),
                },),
              ],
            },),
            /* @__PURE__ */ _jsxs6(motion8.footer, {
              className: 'framer-9noq8x',
              'data-framer-name': 'sections/footer',
              layoutDependency,
              layoutId: 'Rb33JA1FA',
              style: { backgroundColor: 'var(--token-845a8081-357a-4814-8f95-f39736f28da8, rgb(24, 41, 76))', },
              children: [
                /* @__PURE__ */ _jsx9(motion8.div, {
                  className: 'framer-qsm5ch',
                  'data-framer-name': 'container',
                  layoutDependency,
                  layoutId: 'Qeprw3ei9',
                  children: /* @__PURE__ */ _jsxs6(motion8.div, {
                    className: 'framer-1ecv6yf',
                    'data-framer-name': 'footer-wrapper',
                    layoutDependency,
                    layoutId: 'hsSNlnX1D',
                    children: [
                      /* @__PURE__ */ _jsx9(motion8.div, {
                        className: 'framer-uwt9c6',
                        'data-framer-name': 'logo-wrapper',
                        layoutDependency,
                        layoutId: 'C6g1Cz5Ol',
                        children: /* @__PURE__ */ _jsx9(ComponentViewportProvider4, {
                          height: 22,
                          width: '89.1px',
                          y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                            5697.45 + 20 + 0 + 0 + 0 + 0 + 0,
                          ...addPropertyOverrides6(
                            {
                              CHNKXuCA4: {
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  6384.099999999999 + 20 + 0 + 0 + 0 + 0 + 0 + 0,
                              },
                              EXnsHQuPy: {
                                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 +
                                  6610.9 + 20 + 0 + 0 + 0 + 0 + 0,
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                          children: /* @__PURE__ */ _jsx9(motion8.div, {
                            className: 'framer-81uwbm-container',
                            layoutDependency,
                            layoutId: 'hBdlIB99N-container',
                            children: /* @__PURE__ */ _jsx9(stdin_default, {
                              height: '100%',
                              id: 'hBdlIB99N',
                              layoutId: 'hBdlIB99N',
                              style: { height: '100%', width: '100%', },
                              variant: 'B_4IiMThi',
                              width: '100%',
                            },),
                          },),
                        },),
                      },),
                      /* @__PURE__ */ _jsx9(motion8.div, {
                        className: 'framer-vm7x1m',
                        'data-framer-name': 'Frame',
                        layoutDependency,
                        layoutId: 'tXUYesZm2',
                        children: /* @__PURE__ */ _jsxs6(motion8.div, {
                          className: 'framer-8tux9j',
                          'data-framer-name': 'Frame 63',
                          layoutDependency,
                          layoutId: 'AS2n65zzi',
                          children: [
                            /* @__PURE__ */ _jsx9(RichText5, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                  className: 'framer-styles-preset-enusn7',
                                  'data-styles-preset': 'D9zAP56xH',
                                  style: {
                                    '--framer-text-color':
                                      'var(--extracted-r6o4lv, var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255)))',
                                  },
                                  children: /* @__PURE__ */ _jsx9(Link2, {
                                    href: DU_acMOIdiwv54Acbi,
                                    openInNewTab: true,
                                    smoothScroll: false,
                                    children: /* @__PURE__ */ _jsx9(motion8.a, {
                                      className: 'framer-styles-preset-5c8bei',
                                      'data-styles-preset': 'uR_FUI8ZK',
                                      children: 'Privacy policy',
                                    },),
                                  },),
                                },),
                              },),
                              className: 'framer-l81xbu',
                              'data-framer-name': 'footer link',
                              fonts: ['Inter',],
                              layoutDependency,
                              layoutId: 'lzlbRZZGA',
                              style: {
                                '--extracted-r6o4lv': 'var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255))',
                                '--framer-paragraph-spacing': '0px',
                              },
                              verticalAlignment: 'center',
                              withExternalLayout: true,
                            },),
                            /* @__PURE__ */ _jsx9(RichText5, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                  className: 'framer-styles-preset-enusn7',
                                  'data-styles-preset': 'D9zAP56xH',
                                  style: {
                                    '--framer-text-color':
                                      'var(--extracted-r6o4lv, var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255)))',
                                  },
                                  children: /* @__PURE__ */ _jsx9(Link2, {
                                    href: OhGSopBCDiwv54Acbi,
                                    openInNewTab: true,
                                    smoothScroll: false,
                                    children: /* @__PURE__ */ _jsx9(motion8.a, {
                                      className: 'framer-styles-preset-5c8bei',
                                      'data-styles-preset': 'uR_FUI8ZK',
                                      children: 'Terms & conditions',
                                    },),
                                  },),
                                },),
                              },),
                              className: 'framer-1i5xrg5',
                              'data-framer-name': 'footer link',
                              fonts: ['Inter',],
                              layoutDependency,
                              layoutId: 'YZz1t2Be7',
                              style: {
                                '--extracted-r6o4lv': 'var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255))',
                                '--framer-paragraph-spacing': '0px',
                              },
                              verticalAlignment: 'center',
                              withExternalLayout: true,
                            },),
                            /* @__PURE__ */ _jsx9(RichText5, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                  className: 'framer-styles-preset-enusn7',
                                  'data-styles-preset': 'D9zAP56xH',
                                  style: {
                                    '--framer-text-color':
                                      'var(--extracted-r6o4lv, var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255)))',
                                  },
                                  children: '\xA92024\xA0',
                                },),
                              },),
                              className: 'framer-1wsg7eg',
                              'data-framer-name': '\xA9 2024 Dittto Inc\xA0',
                              fonts: ['Inter',],
                              layoutDependency,
                              layoutId: 'pXRHXZsam',
                              style: {
                                '--extracted-r6o4lv': 'var(--token-9aaf8cd8-e234-4d47-941a-cd001db31de6, rgb(255, 255, 255))',
                                '--framer-paragraph-spacing': '0px',
                              },
                              verticalAlignment: 'center',
                              withExternalLayout: true,
                            },),
                            /* @__PURE__ */ _jsx9(RichText5, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx9(React7.Fragment, {
                                children: /* @__PURE__ */ _jsx9(motion8.p, {
                                  className: 'framer-styles-preset-enusn7',
                                  'data-styles-preset': 'D9zAP56xH',
                                  style: { '--framer-text-color': 'var(--extracted-r6o4lv, rgba(255, 255, 255, 0.5))', },
                                  children: 'Powered by Dittto',
                                },),
                              },),
                              className: 'framer-1boz4h8',
                              'data-framer-name': 'footer link',
                              fonts: ['Inter',],
                              layoutDependency,
                              layoutId: 'R110Q8oHd',
                              style: { '--extracted-r6o4lv': 'rgba(255, 255, 255, 0.5)', '--framer-paragraph-spacing': '0px', },
                              verticalAlignment: 'center',
                              withExternalLayout: true,
                            },),
                          ],
                        },),
                      },),
                    ],
                  },),
                },),
                /* @__PURE__ */ _jsx9(motion8.div, {
                  className: 'framer-1yzcl9t',
                  'data-framer-name': 'overlay',
                  layoutDependency,
                  layoutId: 'lyrfPgn2G',
                  style: { backgroundColor: 'rgba(0, 0, 0, 0.45)', },
                },),
              ],
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css15 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-C2dQY.framer-7o5s13, .framer-C2dQY .framer-7o5s13 { display: block; }',
  '.framer-C2dQY.framer-1xgjg1j { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1400px; }',
  '.framer-C2dQY .framer-1sjrjns { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 10px 48px 10px 48px; position: relative; width: 100%; z-index: 10; }',
  '.framer-C2dQY .framer-17vvjn1 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 1px; }',
  '.framer-C2dQY .framer-1rvcjlk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-C2dQY .framer-zwejgj-container { flex: none; height: 20px; position: relative; width: 81px; }',
  '.framer-C2dQY .framer-12ru6pb { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 1px; }',
  '.framer-C2dQY .framer-1m42xjy-container, .framer-C2dQY .framer-yp3amk-container, .framer-C2dQY .framer-8aqtb0-container, .framer-C2dQY .framer-281efh-container, .framer-C2dQY .framer-e1mzzd-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-C2dQY .framer-1l5ru0s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-1as9mnp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 64px 48px 64px 48px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-1imp2ys { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-92jigg { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }',
  '.framer-C2dQY .framer-c9raz5, .framer-C2dQY .framer-1pioxon, .framer-C2dQY .framer-ltbr0t, .framer-C2dQY .framer-g29cl8 { --framer-text-wrap-override: balance; -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; width: 100%; }',
  '.framer-C2dQY .framer-dql5f5 { -webkit-user-select: none; flex: none; height: auto; max-width: 920px; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-C2dQY .framer-1vew22o, .framer-C2dQY .framer-1u4lyl7 { -webkit-user-select: none; flex: none; height: auto; max-width: 780px; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-C2dQY .framer-1s0k5vy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px 0px 8px 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-7ihmbb, .framer-C2dQY .framer-1l9jdk1, .framer-C2dQY .framer-2a80jp { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-C2dQY .framer-1o5tzjp { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }',
  '.framer-C2dQY .framer-nhlil4 { aspect-ratio: 1.2 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 500px); overflow: visible; position: relative; width: 1px; }',
  '.framer-C2dQY .framer-diqspt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 26px 48px 40px 48px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-1ipce73, .framer-C2dQY .framer-fghhpg, .framer-C2dQY .framer-1watc8l, .framer-C2dQY .framer-1l5c0vs, .framer-C2dQY .framer-13csq07, .framer-C2dQY .framer-n7qv6g, .framer-C2dQY .framer-xmo9du { flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-C2dQY .framer-141fexe-container { flex: none; height: 46px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-c9tm1e, .framer-C2dQY .framer-1gys2sf, .framer-C2dQY .framer-5ab2op { height: 40px; overflow: hidden; position: relative; width: 120px; }',
  '.framer-C2dQY .framer-cqpm6f, .framer-C2dQY .framer-tusx40 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 64px 48px 64px 48px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-cpf1z6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: hidden; padding: 0px 0px 48px 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-lj11i1, .framer-C2dQY .framer-1w5436c, .framer-C2dQY .framer-exsqp3 { -webkit-user-select: none; flex: none; height: auto; max-width: 820px; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-C2dQY .framer-fl5k4f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-ohkhaf-container, .framer-C2dQY .framer-q6gtac-container, .framer-C2dQY .framer-1ryb76h-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }',
  '.framer-C2dQY .framer-1lqtymj, .framer-C2dQY .framer-korz7o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 64px 48px 64px 48px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-1jdc9ue { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: hidden; padding: 0px 0px 80px 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-e4a9rj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-18eglsx-container, .framer-C2dQY .framer-q0jylp-container, .framer-C2dQY .framer-18w7331-container, .framer-C2dQY .framer-1q556ko-container, .framer-C2dQY .framer-1nurddx-container, .framer-C2dQY .framer-6rdbd-container, .framer-C2dQY .framer-19xrt4c-container, .framer-C2dQY .framer-1tffjlo-container { flex: none; height: auto; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-1ezibxe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 64px 48px 80px 48px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-11svx9z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-18gpqrh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 48px 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-3jtaly { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-ss1p57 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 100%; overflow: visible; padding: 0px; position: relative; width: 1px; }',
  '.framer-C2dQY .framer-orwsta, .framer-C2dQY .framer-1twsr8p, .framer-C2dQY .framer-tzdmte { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }',
  '.framer-C2dQY .framer-1ejpa0l, .framer-C2dQY .framer-zowldx, .framer-C2dQY .framer-1lfha0g, .framer-C2dQY .framer-18yjwji, .framer-C2dQY .framer-smcli0, .framer-C2dQY .framer-1feabib { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; padding: 30px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-ywpgp1, .framer-C2dQY .framer-1gcdzm9, .framer-C2dQY .framer-n0z1a7, .framer-C2dQY .framer-s8nnv, .framer-C2dQY .framer-1mj99a5, .framer-C2dQY .framer-1t5hgvb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-1g26rom, .framer-C2dQY .framer-tlbcpk, .framer-C2dQY .framer-1f8jkmc, .framer-C2dQY .framer-1k9yr7m, .framer-C2dQY .framer-ro5qu2, .framer-C2dQY .framer-jiti00, .framer-C2dQY .framer-njuhau, .framer-C2dQY .framer-1mzup86, .framer-C2dQY .framer-4giy9s, .framer-C2dQY .framer-159xsdu, .framer-C2dQY .framer-1scm1bb, .framer-C2dQY .framer-qjtiyc, .framer-C2dQY .framer-10xvp4v, .framer-C2dQY .framer-1gpjt43, .framer-C2dQY .framer-mfahub, .framer-C2dQY .framer-n9p3zr, .framer-C2dQY .framer-w0iuw3, .framer-C2dQY .framer-1u3g0g7, .framer-C2dQY .framer-10pqg3q, .framer-C2dQY .framer-ja6ys, .framer-C2dQY .framer-4g9upb, .framer-C2dQY .framer-wp7n1k, .framer-C2dQY .framer-13p26dj, .framer-C2dQY .framer-13z9b7r, .framer-C2dQY .framer-1fdop1h, .framer-C2dQY .framer-l5neya, .framer-C2dQY .framer-nauclz, .framer-C2dQY .framer-lb8dsj, .framer-C2dQY .framer-1dtvd0i, .framer-C2dQY .framer-ui6m8i { flex: none; height: 20px; position: relative; width: 20px; }',
  '.framer-C2dQY .framer-1uquv6l, .framer-C2dQY .framer-1u1xuti, .framer-C2dQY .framer-1hyj2fo, .framer-C2dQY .framer-pj9trf, .framer-C2dQY .framer-19rijyf, .framer-C2dQY .framer-5rlbyz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-1d67xsu, .framer-C2dQY .framer-7z0aal, .framer-C2dQY .framer-16szhyr, .framer-C2dQY .framer-14jxjn5, .framer-C2dQY .framer-11txn9j, .framer-C2dQY .framer-1szfbc0 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 48px); overflow: hidden; position: relative; width: 48px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-C2dQY .framer-1d3wfao, .framer-C2dQY .framer-1lsh6cj, .framer-C2dQY .framer-jg2reo, .framer-C2dQY .framer-1dl5up9, .framer-C2dQY .framer-mmg4c6, .framer-C2dQY .framer-hcjevl { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }',
  '.framer-C2dQY .framer-xci5ta, .framer-C2dQY .framer-hlllfy, .framer-C2dQY .framer-19rlg2d, .framer-C2dQY .framer-11x8yqs, .framer-C2dQY .framer-xf2fn, .framer-C2dQY .framer-vdnr29, .framer-C2dQY .framer-1sfl8wj, .framer-C2dQY .framer-sapu8e, .framer-C2dQY .framer-mwcgdj, .framer-C2dQY .framer-ofkhlo, .framer-C2dQY .framer-1etn75j, .framer-C2dQY .framer-cv8zlu { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }',
  '.framer-C2dQY .framer-d9vvnq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 1240px; overflow: visible; padding: 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-1f4ejfh { -webkit-user-select: none; flex: none; height: auto; max-width: 600px; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-C2dQY .framer-10qhkkj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 8px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-1h6aff8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-167wrmx { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 0px 0px 0px; position: sticky; top: 48px; width: 1px; will-change: transform; z-index: 1; }',
  '.framer-C2dQY .framer-1c7k48u { align-content: flex-start; align-items: flex-start; display: flex; flex: 1.5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }',
  '.framer-C2dQY .framer-1u0krqg, .framer-C2dQY .framer-1gkgsfx, .framer-C2dQY .framer-1lxtya2, .framer-C2dQY .framer-kzjwbq { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-xwb5zq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 32px 48px 32px 48px; position: relative; width: 100%; }',
  '.framer-C2dQY .framer-1fvj1qn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1240px; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 9; }',
  '.framer-C2dQY .framer-goktaq { -webkit-user-select: none; flex: none; height: auto; max-width: 820px; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }',
  '.framer-C2dQY .framer-9noq8x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px 48px 20px 48px; position: relative; width: 100%; z-index: 1; }',
  '.framer-C2dQY .framer-qsm5ch { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 9; }',
  '.framer-C2dQY .framer-1ecv6yf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }',
  '.framer-C2dQY .framer-uwt9c6 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }',
  '.framer-C2dQY .framer-81uwbm-container { aspect-ratio: 4.05 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 22px); position: relative; width: 89px; }',
  '.framer-C2dQY .framer-vm7x1m { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 51px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }',
  '.framer-C2dQY .framer-8tux9j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-C2dQY .framer-l81xbu, .framer-C2dQY .framer-1i5xrg5, .framer-C2dQY .framer-1wsg7eg, .framer-C2dQY .framer-1boz4h8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-C2dQY .framer-1yzcl9t { flex: none; height: 110%; left: calc(50.00000000000002% - 102% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 110.00000000000001% / 2); width: 102%; z-index: 1; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-C2dQY.framer-1xgjg1j, .framer-C2dQY .framer-1sjrjns, .framer-C2dQY .framer-17vvjn1, .framer-C2dQY .framer-1rvcjlk, .framer-C2dQY .framer-12ru6pb, .framer-C2dQY .framer-1l5ru0s, .framer-C2dQY .framer-1as9mnp, .framer-C2dQY .framer-1imp2ys, .framer-C2dQY .framer-92jigg, .framer-C2dQY .framer-1s0k5vy, .framer-C2dQY .framer-1o5tzjp, .framer-C2dQY .framer-diqspt, .framer-C2dQY .framer-cqpm6f, .framer-C2dQY .framer-cpf1z6, .framer-C2dQY .framer-fl5k4f, .framer-C2dQY .framer-1lqtymj, .framer-C2dQY .framer-1jdc9ue, .framer-C2dQY .framer-e4a9rj, .framer-C2dQY .framer-1ezibxe, .framer-C2dQY .framer-11svx9z, .framer-C2dQY .framer-18gpqrh, .framer-C2dQY .framer-3jtaly, .framer-C2dQY .framer-ss1p57, .framer-C2dQY .framer-orwsta, .framer-C2dQY .framer-1ejpa0l, .framer-C2dQY .framer-ywpgp1, .framer-C2dQY .framer-1uquv6l, .framer-C2dQY .framer-1d3wfao, .framer-C2dQY .framer-zowldx, .framer-C2dQY .framer-1gcdzm9, .framer-C2dQY .framer-1u1xuti, .framer-C2dQY .framer-1lsh6cj, .framer-C2dQY .framer-1twsr8p, .framer-C2dQY .framer-1lfha0g, .framer-C2dQY .framer-n0z1a7, .framer-C2dQY .framer-1hyj2fo, .framer-C2dQY .framer-jg2reo, .framer-C2dQY .framer-18yjwji, .framer-C2dQY .framer-s8nnv, .framer-C2dQY .framer-pj9trf, .framer-C2dQY .framer-1dl5up9, .framer-C2dQY .framer-tzdmte, .framer-C2dQY .framer-smcli0, .framer-C2dQY .framer-1mj99a5, .framer-C2dQY .framer-19rijyf, .framer-C2dQY .framer-mmg4c6, .framer-C2dQY .framer-1feabib, .framer-C2dQY .framer-1t5hgvb, .framer-C2dQY .framer-5rlbyz, .framer-C2dQY .framer-hcjevl, .framer-C2dQY .framer-korz7o, .framer-C2dQY .framer-d9vvnq, .framer-C2dQY .framer-10qhkkj, .framer-C2dQY .framer-tusx40, .framer-C2dQY .framer-1h6aff8, .framer-C2dQY .framer-167wrmx, .framer-C2dQY .framer-1c7k48u, .framer-C2dQY .framer-xwb5zq, .framer-C2dQY .framer-1fvj1qn, .framer-C2dQY .framer-9noq8x, .framer-C2dQY .framer-qsm5ch, .framer-C2dQY .framer-1ecv6yf, .framer-C2dQY .framer-uwt9c6, .framer-C2dQY .framer-vm7x1m, .framer-C2dQY .framer-8tux9j { gap: 0px; } .framer-C2dQY.framer-1xgjg1j > *, .framer-C2dQY .framer-1l5ru0s > *, .framer-C2dQY .framer-1as9mnp > *, .framer-C2dQY .framer-cqpm6f > *, .framer-C2dQY .framer-1lqtymj > *, .framer-C2dQY .framer-1ezibxe > *, .framer-C2dQY .framer-11svx9z > *, .framer-C2dQY .framer-1d3wfao > *, .framer-C2dQY .framer-1lsh6cj > *, .framer-C2dQY .framer-jg2reo > *, .framer-C2dQY .framer-1dl5up9 > *, .framer-C2dQY .framer-mmg4c6 > *, .framer-C2dQY .framer-hcjevl > *, .framer-C2dQY .framer-korz7o > *, .framer-C2dQY .framer-tusx40 > *, .framer-C2dQY .framer-1c7k48u > *, .framer-C2dQY .framer-xwb5zq > *, .framer-C2dQY .framer-9noq8x > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-C2dQY.framer-1xgjg1j > :first-child, .framer-C2dQY .framer-1l5ru0s > :first-child, .framer-C2dQY .framer-1as9mnp > :first-child, .framer-C2dQY .framer-92jigg > :first-child, .framer-C2dQY .framer-diqspt > :first-child, .framer-C2dQY .framer-cqpm6f > :first-child, .framer-C2dQY .framer-cpf1z6 > :first-child, .framer-C2dQY .framer-1lqtymj > :first-child, .framer-C2dQY .framer-1jdc9ue > :first-child, .framer-C2dQY .framer-e4a9rj > :first-child, .framer-C2dQY .framer-1ezibxe > :first-child, .framer-C2dQY .framer-11svx9z > :first-child, .framer-C2dQY .framer-18gpqrh > :first-child, .framer-C2dQY .framer-orwsta > :first-child, .framer-C2dQY .framer-1ejpa0l > :first-child, .framer-C2dQY .framer-1d3wfao > :first-child, .framer-C2dQY .framer-zowldx > :first-child, .framer-C2dQY .framer-1lsh6cj > :first-child, .framer-C2dQY .framer-1twsr8p > :first-child, .framer-C2dQY .framer-1lfha0g > :first-child, .framer-C2dQY .framer-jg2reo > :first-child, .framer-C2dQY .framer-18yjwji > :first-child, .framer-C2dQY .framer-1dl5up9 > :first-child, .framer-C2dQY .framer-tzdmte > :first-child, .framer-C2dQY .framer-smcli0 > :first-child, .framer-C2dQY .framer-mmg4c6 > :first-child, .framer-C2dQY .framer-1feabib > :first-child, .framer-C2dQY .framer-hcjevl > :first-child, .framer-C2dQY .framer-korz7o > :first-child, .framer-C2dQY .framer-d9vvnq > :first-child, .framer-C2dQY .framer-tusx40 > :first-child, .framer-C2dQY .framer-167wrmx > :first-child, .framer-C2dQY .framer-1c7k48u > :first-child, .framer-C2dQY .framer-xwb5zq > :first-child, .framer-C2dQY .framer-9noq8x > :first-child, .framer-C2dQY .framer-uwt9c6 > :first-child { margin-top: 0px; } .framer-C2dQY.framer-1xgjg1j > :last-child, .framer-C2dQY .framer-1l5ru0s > :last-child, .framer-C2dQY .framer-1as9mnp > :last-child, .framer-C2dQY .framer-92jigg > :last-child, .framer-C2dQY .framer-diqspt > :last-child, .framer-C2dQY .framer-cqpm6f > :last-child, .framer-C2dQY .framer-cpf1z6 > :last-child, .framer-C2dQY .framer-1lqtymj > :last-child, .framer-C2dQY .framer-1jdc9ue > :last-child, .framer-C2dQY .framer-e4a9rj > :last-child, .framer-C2dQY .framer-1ezibxe > :last-child, .framer-C2dQY .framer-11svx9z > :last-child, .framer-C2dQY .framer-18gpqrh > :last-child, .framer-C2dQY .framer-orwsta > :last-child, .framer-C2dQY .framer-1ejpa0l > :last-child, .framer-C2dQY .framer-1d3wfao > :last-child, .framer-C2dQY .framer-zowldx > :last-child, .framer-C2dQY .framer-1lsh6cj > :last-child, .framer-C2dQY .framer-1twsr8p > :last-child, .framer-C2dQY .framer-1lfha0g > :last-child, .framer-C2dQY .framer-jg2reo > :last-child, .framer-C2dQY .framer-18yjwji > :last-child, .framer-C2dQY .framer-1dl5up9 > :last-child, .framer-C2dQY .framer-tzdmte > :last-child, .framer-C2dQY .framer-smcli0 > :last-child, .framer-C2dQY .framer-mmg4c6 > :last-child, .framer-C2dQY .framer-1feabib > :last-child, .framer-C2dQY .framer-hcjevl > :last-child, .framer-C2dQY .framer-korz7o > :last-child, .framer-C2dQY .framer-d9vvnq > :last-child, .framer-C2dQY .framer-tusx40 > :last-child, .framer-C2dQY .framer-167wrmx > :last-child, .framer-C2dQY .framer-1c7k48u > :last-child, .framer-C2dQY .framer-xwb5zq > :last-child, .framer-C2dQY .framer-9noq8x > :last-child, .framer-C2dQY .framer-uwt9c6 > :last-child { margin-bottom: 0px; } .framer-C2dQY .framer-1sjrjns > *, .framer-C2dQY .framer-17vvjn1 > *, .framer-C2dQY .framer-1rvcjlk > *, .framer-C2dQY .framer-3jtaly > *, .framer-C2dQY .framer-ss1p57 > *, .framer-C2dQY .framer-1fvj1qn > *, .framer-C2dQY .framer-8tux9j > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-C2dQY .framer-1sjrjns > :first-child, .framer-C2dQY .framer-17vvjn1 > :first-child, .framer-C2dQY .framer-1rvcjlk > :first-child, .framer-C2dQY .framer-12ru6pb > :first-child, .framer-C2dQY .framer-1imp2ys > :first-child, .framer-C2dQY .framer-1s0k5vy > :first-child, .framer-C2dQY .framer-1o5tzjp > :first-child, .framer-C2dQY .framer-fl5k4f > :first-child, .framer-C2dQY .framer-3jtaly > :first-child, .framer-C2dQY .framer-ss1p57 > :first-child, .framer-C2dQY .framer-ywpgp1 > :first-child, .framer-C2dQY .framer-1uquv6l > :first-child, .framer-C2dQY .framer-1gcdzm9 > :first-child, .framer-C2dQY .framer-1u1xuti > :first-child, .framer-C2dQY .framer-n0z1a7 > :first-child, .framer-C2dQY .framer-1hyj2fo > :first-child, .framer-C2dQY .framer-s8nnv > :first-child, .framer-C2dQY .framer-pj9trf > :first-child, .framer-C2dQY .framer-1mj99a5 > :first-child, .framer-C2dQY .framer-19rijyf > :first-child, .framer-C2dQY .framer-1t5hgvb > :first-child, .framer-C2dQY .framer-5rlbyz > :first-child, .framer-C2dQY .framer-10qhkkj > :first-child, .framer-C2dQY .framer-1h6aff8 > :first-child, .framer-C2dQY .framer-1fvj1qn > :first-child, .framer-C2dQY .framer-qsm5ch > :first-child, .framer-C2dQY .framer-1ecv6yf > :first-child, .framer-C2dQY .framer-vm7x1m > :first-child, .framer-C2dQY .framer-8tux9j > :first-child { margin-left: 0px; } .framer-C2dQY .framer-1sjrjns > :last-child, .framer-C2dQY .framer-17vvjn1 > :last-child, .framer-C2dQY .framer-1rvcjlk > :last-child, .framer-C2dQY .framer-12ru6pb > :last-child, .framer-C2dQY .framer-1imp2ys > :last-child, .framer-C2dQY .framer-1s0k5vy > :last-child, .framer-C2dQY .framer-1o5tzjp > :last-child, .framer-C2dQY .framer-fl5k4f > :last-child, .framer-C2dQY .framer-3jtaly > :last-child, .framer-C2dQY .framer-ss1p57 > :last-child, .framer-C2dQY .framer-ywpgp1 > :last-child, .framer-C2dQY .framer-1uquv6l > :last-child, .framer-C2dQY .framer-1gcdzm9 > :last-child, .framer-C2dQY .framer-1u1xuti > :last-child, .framer-C2dQY .framer-n0z1a7 > :last-child, .framer-C2dQY .framer-1hyj2fo > :last-child, .framer-C2dQY .framer-s8nnv > :last-child, .framer-C2dQY .framer-pj9trf > :last-child, .framer-C2dQY .framer-1mj99a5 > :last-child, .framer-C2dQY .framer-19rijyf > :last-child, .framer-C2dQY .framer-1t5hgvb > :last-child, .framer-C2dQY .framer-5rlbyz > :last-child, .framer-C2dQY .framer-10qhkkj > :last-child, .framer-C2dQY .framer-1h6aff8 > :last-child, .framer-C2dQY .framer-1fvj1qn > :last-child, .framer-C2dQY .framer-qsm5ch > :last-child, .framer-C2dQY .framer-1ecv6yf > :last-child, .framer-C2dQY .framer-vm7x1m > :last-child, .framer-C2dQY .framer-8tux9j > :last-child { margin-right: 0px; } .framer-C2dQY .framer-12ru6pb > *, .framer-C2dQY .framer-fl5k4f > *, .framer-C2dQY .framer-1ecv6yf > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-C2dQY .framer-1imp2ys > *, .framer-C2dQY .framer-1h6aff8 > *, .framer-C2dQY .framer-qsm5ch > * { margin: 0px; margin-left: calc(80px / 2); margin-right: calc(80px / 2); } .framer-C2dQY .framer-92jigg > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-C2dQY .framer-1s0k5vy > *, .framer-C2dQY .framer-10qhkkj > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-C2dQY .framer-1o5tzjp > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-C2dQY .framer-diqspt > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-C2dQY .framer-cpf1z6 > *, .framer-C2dQY .framer-1jdc9ue > *, .framer-C2dQY .framer-18gpqrh > *, .framer-C2dQY .framer-d9vvnq > *, .framer-C2dQY .framer-167wrmx > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-C2dQY .framer-e4a9rj > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-C2dQY .framer-orwsta > *, .framer-C2dQY .framer-1twsr8p > *, .framer-C2dQY .framer-tzdmte > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-C2dQY .framer-1ejpa0l > *, .framer-C2dQY .framer-zowldx > *, .framer-C2dQY .framer-1lfha0g > *, .framer-C2dQY .framer-18yjwji > *, .framer-C2dQY .framer-smcli0 > *, .framer-C2dQY .framer-1feabib > *, .framer-C2dQY .framer-uwt9c6 > * { margin: 0px; margin-bottom: calc(18px / 2); margin-top: calc(18px / 2); } .framer-C2dQY .framer-ywpgp1 > *, .framer-C2dQY .framer-1gcdzm9 > *, .framer-C2dQY .framer-n0z1a7 > *, .framer-C2dQY .framer-s8nnv > *, .framer-C2dQY .framer-1mj99a5 > *, .framer-C2dQY .framer-1t5hgvb > * { margin: 0px; margin-left: calc(3px / 2); margin-right: calc(3px / 2); } .framer-C2dQY .framer-1uquv6l > *, .framer-C2dQY .framer-1u1xuti > *, .framer-C2dQY .framer-1hyj2fo > *, .framer-C2dQY .framer-pj9trf > *, .framer-C2dQY .framer-19rijyf > *, .framer-C2dQY .framer-5rlbyz > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-C2dQY .framer-vm7x1m > * { margin: 0px; margin-left: calc(51px / 2); margin-right: calc(51px / 2); } }',
  '.framer-C2dQY.framer-v-9soqnk.framer-1xgjg1j { width: 810px; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-1sjrjns, .framer-C2dQY.framer-v-1t28m4z .framer-1sjrjns { padding: 10px 20px 10px 20px; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-1as9mnp { padding: 36px 20px 24px 20px; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-1imp2ys, .framer-C2dQY.framer-v-1t28m4z .framer-1imp2ys { flex-direction: column; gap: 30px; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-92jigg, .framer-C2dQY.framer-v-1t28m4z .framer-92jigg { align-content: center; align-items: center; flex: none; gap: 16px; width: 100%; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-1s0k5vy, .framer-C2dQY.framer-v-1t28m4z .framer-1s0k5vy { flex-direction: column; gap: 12px; justify-content: center; max-width: 400px; padding: 6px 0px 6px 0px; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-yp3amk-container, .framer-C2dQY.framer-v-1t28m4z .framer-yp3amk-container, .framer-C2dQY.framer-v-1t28m4z .framer-e1mzzd-container { width: 100%; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-1o5tzjp, .framer-C2dQY.framer-v-1t28m4z .framer-1o5tzjp { flex: none; max-width: 720px; width: 100%; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-nhlil4 { height: var(--framer-aspect-ratio-supported, 600px); }',
  '.framer-C2dQY.framer-v-9soqnk .framer-diqspt { padding: 26px 20px 32px 20px; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-cqpm6f, .framer-C2dQY.framer-v-9soqnk .framer-1lqtymj, .framer-C2dQY.framer-v-9soqnk .framer-1ezibxe, .framer-C2dQY.framer-v-9soqnk .framer-korz7o, .framer-C2dQY.framer-v-9soqnk .framer-tusx40 { padding: 48px 20px 48px 20px; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-cpf1z6, .framer-C2dQY.framer-v-9soqnk .framer-18gpqrh, .framer-C2dQY.framer-v-1t28m4z .framer-cpf1z6 { padding: 0px 0px 32px 0px; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-fl5k4f { flex-direction: column; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-ohkhaf-container, .framer-C2dQY.framer-v-9soqnk .framer-q6gtac-container, .framer-C2dQY.framer-v-9soqnk .framer-1ryb76h-container, .framer-C2dQY.framer-v-9soqnk .framer-1c7k48u, .framer-C2dQY.framer-v-1t28m4z .framer-ohkhaf-container, .framer-C2dQY.framer-v-1t28m4z .framer-q6gtac-container, .framer-C2dQY.framer-v-1t28m4z .framer-1ryb76h-container, .framer-C2dQY.framer-v-1t28m4z .framer-1c7k48u { flex: none; width: 100%; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-1jdc9ue { padding: 0px 0px 48px 0px; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-e4a9rj { gap: 48px; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-1h6aff8, .framer-C2dQY.framer-v-1t28m4z .framer-fl5k4f, .framer-C2dQY.framer-v-1t28m4z .framer-1h6aff8, .framer-C2dQY.framer-v-1t28m4z .framer-1ecv6yf { flex-direction: column; gap: 24px; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-167wrmx, .framer-C2dQY.framer-v-1t28m4z .framer-167wrmx { flex: none; position: relative; top: unset; width: 100%; }',
  '.framer-C2dQY.framer-v-9soqnk .framer-xwb5zq, .framer-C2dQY.framer-v-1t28m4z .framer-cqpm6f, .framer-C2dQY.framer-v-1t28m4z .framer-1lqtymj, .framer-C2dQY.framer-v-1t28m4z .framer-1ezibxe, .framer-C2dQY.framer-v-1t28m4z .framer-korz7o, .framer-C2dQY.framer-v-1t28m4z .framer-tusx40, .framer-C2dQY.framer-v-1t28m4z .framer-xwb5zq { padding: 32px 20px 32px 20px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-C2dQY.framer-v-9soqnk .framer-1imp2ys, .framer-C2dQY.framer-v-9soqnk .framer-92jigg, .framer-C2dQY.framer-v-9soqnk .framer-1s0k5vy, .framer-C2dQY.framer-v-9soqnk .framer-fl5k4f, .framer-C2dQY.framer-v-9soqnk .framer-e4a9rj, .framer-C2dQY.framer-v-9soqnk .framer-1h6aff8 { gap: 0px; } .framer-C2dQY.framer-v-9soqnk .framer-1imp2ys > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-C2dQY.framer-v-9soqnk .framer-1imp2ys > :first-child, .framer-C2dQY.framer-v-9soqnk .framer-92jigg > :first-child, .framer-C2dQY.framer-v-9soqnk .framer-1s0k5vy > :first-child, .framer-C2dQY.framer-v-9soqnk .framer-fl5k4f > :first-child, .framer-C2dQY.framer-v-9soqnk .framer-e4a9rj > :first-child, .framer-C2dQY.framer-v-9soqnk .framer-1h6aff8 > :first-child { margin-top: 0px; } .framer-C2dQY.framer-v-9soqnk .framer-1imp2ys > :last-child, .framer-C2dQY.framer-v-9soqnk .framer-92jigg > :last-child, .framer-C2dQY.framer-v-9soqnk .framer-1s0k5vy > :last-child, .framer-C2dQY.framer-v-9soqnk .framer-fl5k4f > :last-child, .framer-C2dQY.framer-v-9soqnk .framer-e4a9rj > :last-child, .framer-C2dQY.framer-v-9soqnk .framer-1h6aff8 > :last-child { margin-bottom: 0px; } .framer-C2dQY.framer-v-9soqnk .framer-92jigg > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-C2dQY.framer-v-9soqnk .framer-1s0k5vy > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-C2dQY.framer-v-9soqnk .framer-fl5k4f > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-C2dQY.framer-v-9soqnk .framer-e4a9rj > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-C2dQY.framer-v-9soqnk .framer-1h6aff8 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }',
  '.framer-C2dQY.framer-v-1t28m4z.framer-1xgjg1j { width: 390px; }',
  '.framer-C2dQY.framer-v-1t28m4z .framer-1as9mnp { padding: 16px 20px 24px 20px; }',
  '.framer-C2dQY.framer-v-1t28m4z .framer-nhlil4 { height: var(--framer-aspect-ratio-supported, 167px); }',
  '.framer-C2dQY.framer-v-1t28m4z .framer-diqspt { gap: 24px; padding: 8px 20px 32px 20px; }',
  '.framer-C2dQY.framer-v-1t28m4z .framer-1jdc9ue { padding: 0px 0px 40px 0px; }',
  '.framer-C2dQY.framer-v-1t28m4z .framer-e4a9rj { gap: 32px; }',
  '.framer-C2dQY.framer-v-1t28m4z .framer-18gpqrh { padding: 0px 0px 24px 0px; }',
  '.framer-C2dQY.framer-v-1t28m4z .framer-orwsta { gap: 16px; }',
  '.framer-C2dQY.framer-v-1t28m4z .framer-d9vvnq { gap: 12px; }',
  '.framer-C2dQY.framer-v-1t28m4z .framer-8aqtb0-container { flex: 1 0 0px; width: 1px; }',
  '.framer-C2dQY.framer-v-1t28m4z .framer-1fvj1qn { flex-direction: column; gap: 16px; }',
  '.framer-C2dQY.framer-v-1t28m4z .framer-uwt9c6 { align-content: center; align-items: center; flex: none; width: 100%; }',
  '.framer-C2dQY.framer-v-1t28m4z .framer-vm7x1m { flex: none; justify-content: center; width: 100%; }',
  '.framer-C2dQY.framer-v-1t28m4z .framer-8tux9j { flex: 1 0 0px; flex-direction: column; gap: 16px; justify-content: flex-start; width: 1px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-C2dQY.framer-v-1t28m4z .framer-1imp2ys, .framer-C2dQY.framer-v-1t28m4z .framer-92jigg, .framer-C2dQY.framer-v-1t28m4z .framer-1s0k5vy, .framer-C2dQY.framer-v-1t28m4z .framer-diqspt, .framer-C2dQY.framer-v-1t28m4z .framer-fl5k4f, .framer-C2dQY.framer-v-1t28m4z .framer-e4a9rj, .framer-C2dQY.framer-v-1t28m4z .framer-orwsta, .framer-C2dQY.framer-v-1t28m4z .framer-d9vvnq, .framer-C2dQY.framer-v-1t28m4z .framer-1h6aff8, .framer-C2dQY.framer-v-1t28m4z .framer-1fvj1qn, .framer-C2dQY.framer-v-1t28m4z .framer-1ecv6yf, .framer-C2dQY.framer-v-1t28m4z .framer-8tux9j { gap: 0px; } .framer-C2dQY.framer-v-1t28m4z .framer-1imp2ys > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-C2dQY.framer-v-1t28m4z .framer-1imp2ys > :first-child, .framer-C2dQY.framer-v-1t28m4z .framer-92jigg > :first-child, .framer-C2dQY.framer-v-1t28m4z .framer-1s0k5vy > :first-child, .framer-C2dQY.framer-v-1t28m4z .framer-diqspt > :first-child, .framer-C2dQY.framer-v-1t28m4z .framer-fl5k4f > :first-child, .framer-C2dQY.framer-v-1t28m4z .framer-e4a9rj > :first-child, .framer-C2dQY.framer-v-1t28m4z .framer-orwsta > :first-child, .framer-C2dQY.framer-v-1t28m4z .framer-d9vvnq > :first-child, .framer-C2dQY.framer-v-1t28m4z .framer-1h6aff8 > :first-child, .framer-C2dQY.framer-v-1t28m4z .framer-1fvj1qn > :first-child, .framer-C2dQY.framer-v-1t28m4z .framer-1ecv6yf > :first-child, .framer-C2dQY.framer-v-1t28m4z .framer-8tux9j > :first-child { margin-top: 0px; } .framer-C2dQY.framer-v-1t28m4z .framer-1imp2ys > :last-child, .framer-C2dQY.framer-v-1t28m4z .framer-92jigg > :last-child, .framer-C2dQY.framer-v-1t28m4z .framer-1s0k5vy > :last-child, .framer-C2dQY.framer-v-1t28m4z .framer-diqspt > :last-child, .framer-C2dQY.framer-v-1t28m4z .framer-fl5k4f > :last-child, .framer-C2dQY.framer-v-1t28m4z .framer-e4a9rj > :last-child, .framer-C2dQY.framer-v-1t28m4z .framer-orwsta > :last-child, .framer-C2dQY.framer-v-1t28m4z .framer-d9vvnq > :last-child, .framer-C2dQY.framer-v-1t28m4z .framer-1h6aff8 > :last-child, .framer-C2dQY.framer-v-1t28m4z .framer-1fvj1qn > :last-child, .framer-C2dQY.framer-v-1t28m4z .framer-1ecv6yf > :last-child, .framer-C2dQY.framer-v-1t28m4z .framer-8tux9j > :last-child { margin-bottom: 0px; } .framer-C2dQY.framer-v-1t28m4z .framer-92jigg > *, .framer-C2dQY.framer-v-1t28m4z .framer-orwsta > *, .framer-C2dQY.framer-v-1t28m4z .framer-1fvj1qn > *, .framer-C2dQY.framer-v-1t28m4z .framer-8tux9j > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-C2dQY.framer-v-1t28m4z .framer-1s0k5vy > *, .framer-C2dQY.framer-v-1t28m4z .framer-d9vvnq > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-C2dQY.framer-v-1t28m4z .framer-diqspt > *, .framer-C2dQY.framer-v-1t28m4z .framer-fl5k4f > *, .framer-C2dQY.framer-v-1t28m4z .framer-1h6aff8 > *, .framer-C2dQY.framer-v-1t28m4z .framer-1ecv6yf > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-C2dQY.framer-v-1t28m4z .framer-e4a9rj > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } }',
  ...css6,
  ...css,
  ...css4,
  ...css2,
  ...css9,
  ...css3,
  ...css7,
  ...css5,
  ...css8,
  '.framer-C2dQY[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-C2dQY [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
  '.framer-C2dQY[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-C2dQY [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  '.framer-C2dQY[data-border="true"]::after, .framer-C2dQY [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var FramerTIYDx3GRA = withCSS6(Component7, css15, 'framer-C2dQY',);
var stdin_default6 = FramerTIYDx3GRA;
FramerTIYDx3GRA.displayName = 'LandingPage';
FramerTIYDx3GRA.defaultProps = { height: 5703, width: 1400, };
addPropertyControls8(FramerTIYDx3GRA, {
  variant: {
    options: ['I0hDn97hh', 'EXnsHQuPy', 'CHNKXuCA4',],
    optionTitles: ['Desktop', 'Tablet', 'Mobile',],
    title: 'Variant',
    type: ControlType8.Enum,
  },
  RWcxsqQ0U: { defaultValue: 'Get Started', description: '', title: 'primaryCTAText', type: ControlType8.String, },
  lr08BlkFf: { title: 'primaryCTALink', type: ControlType8.Link, },
  YHWMcHENa: { defaultValue: 'OUTLINE', title: 'heroPreHeadingText', type: ControlType8.String, },
  aTZRj4iwX: { defaultValue: 'Free CRM Software That Grows With Your Business', title: 'heroTitle', type: ControlType8.String, },
  BqOznQvRV: {
    defaultValue:
      'HubSpot Smart CRM has free tools to connect your data, teams, and customers all on one platform. Seamlessly unify your marketing, sales, and service teams with our AI-powered solution',
    title: 'heroDescription',
    type: ControlType8.String,
  },
  OWrXQBE4D: {
    defaultValue: 'Get started with free tools, or get a demo of our premium software.',
    title: 'heroSocialProof',
    type: ControlType8.String,
  },
  dO17ppjru: {
    defaultValue: 'Trusted by leading brands for effective outreach',
    title: 'logosSocialProofText',
    type: ControlType8.String,
  },
  O5vXsQDjx: { defaultValue: 'UNIFied platform', title: 'valuePropIntroPreHeadingText', type: ControlType8.String, },
  XW9eQBAs4: {
    defaultValue: 'Automate your lead generation on Twitter with Drippi.',
    title: 'valuePropIntroTitle',
    type: ControlType8.String,
  },
  wVBe4WY8l: {
    defaultValue: 'Hubengage helps your workforce feel more connected and excited through gamification.',
    title: 'valuePropIntroDescription',
    type: ControlType8.String,
  },
  dLMTCwuSP: { defaultValue: 'Automatic Data Retrieval', title: 'valueProp1PreHeadingText', type: ControlType8.String, },
  d1_ZjZxmZ: { defaultValue: 'Automatic Data Retrieval', title: 'valueProp1Title', type: ControlType8.String, },
  ST7cFuW5e: {
    defaultValue:
      'Seamlessly connect and retrieve imaging data from all your locations and partners with our automated PACS radiology system.',
    description: '',
    title: 'valueProp1Description',
    type: ControlType8.String,
  },
  BhDfTwf19: { defaultValue: 'Secure Storage & Compliance', title: 'valueProp2PreHeadingText', type: ControlType8.String, },
  M2pYHfVER: { defaultValue: 'Protect Your Medical Data', title: 'valueProp2Title', type: ControlType8.String, },
  JbCtMVnl6: {
    defaultValue:
      'Our HIPAA and GDPR-compliant cloud PACS system ensures your medical imaging data is securely stored and easily accessible when needed.',
    title: 'valueProp2Description',
    type: ControlType8.String,
  },
  UuJpI7Jww: { defaultValue: 'Interoperable Integration', title: 'valueProp3PreHeadingText', type: ControlType8.String, },
  Ve8016aQC: { defaultValue: 'Unified Medical Workflows', title: 'valueProp3Title', type: ControlType8.String, },
  QavYa01Q9: {
    defaultValue:
      'Integrate effortlessly with your existing healthcare systems, enhancing data sharing and collaboration across your organization.',
    title: 'valueProp3Description',
    type: ControlType8.String,
  },
  bT9gV0fXC: {
    defaultValue: 'Boost interaction by over 20% while reducing expenses by 80%',
    title: 'howItWorksIntroTitle',
    type: ControlType8.String,
  },
  PpsmqsqKn: { defaultValue: 'House', description: '', title: 'howItWorks1PhosphorIcon', type: ControlType8.String, },
  F7e3N5cCJ: { defaultValue: 'Title 1', title: 'howItWorks1Title', type: ControlType8.String, },
  kQbJJgkIw: { defaultValue: 'Text 1', title: 'howItWorks1Description', type: ControlType8.String, },
  vlqFhLtz4: { defaultValue: 'House', title: 'howItWorks2PhosphorIcon', type: ControlType8.String, },
  FGWzctchw: { defaultValue: ' Title 2', title: 'howItWorks2Title', type: ControlType8.String, },
  CpX8vbmAI: { defaultValue: 'Text 2', title: 'howItWorks2Description', type: ControlType8.String, },
  srU2NgPEq: { defaultValue: 'House', title: 'howItWorks3PhosphorIcon', type: ControlType8.String, },
  b4IZufMwi: { defaultValue: 'Title 3', title: 'howItWorks3Title', type: ControlType8.String, },
  mNY4ObPCg: { defaultValue: 'Text 3', title: 'howItWorks3Description', type: ControlType8.String, },
  XkFMNwv8y: {
    defaultValue: 'Simplify pipeline management with HubSpot\u2019s free Smart CRM',
    title: 'ctaSectionTitle',
    type: ControlType8.String,
  },
  leEGfkobb: {
    defaultValue: 'Seamlessly connect your data, teams, and customers.',
    title: 'ctaSectionDescription',
    type: ControlType8.String,
  },
  saOvCDi2C: { defaultValue: 'What is Medicai and how does it work?', title: 'faqQuestion1', type: ControlType8.String, },
  iwHVpnvTO: {
    defaultValue:
      'Medicai is a secure, interoperable cloud PACS solution that connects all locations and imaging partners, retrieving and managing medical imaging data seamlessly. It integrates DICOM Node with on-prem PACS and modalities, and allows patients to upload their previous imaging studies directly.',
    title: 'faqAnswer1',
    type: ControlType8.String,
  },
  rUY346aa_: { defaultValue: 'What is Medicai and how does it work?', title: 'faqQuestion2', type: ControlType8.String, },
  zYmH_frXJ: {
    defaultValue:
      'Medicai is a secure, interoperable cloud PACS solution that connects all locations and imaging partners, retrieving and managing medical imaging data seamlessly. It integrates DICOM Node with on-prem PACS and modalities, and allows patients to upload their previous imaging studies directly.',
    title: 'faqAnswer2',
    type: ControlType8.String,
  },
  AXRXqMhvE: { defaultValue: 'What is Medicai and how does it work?', title: 'faqQuestion3', type: ControlType8.String, },
  eOZEo3DcY: {
    defaultValue:
      'Medicai is a secure, interoperable cloud PACS solution that connects all locations and imaging partners, retrieving and managing medical imaging data seamlessly. It integrates DICOM Node with on-prem PACS and modalities, and allows patients to upload their previous imaging studies directly.',
    title: 'faqAnswer3',
    type: ControlType8.String,
  },
  IJu_6P5Hk: { defaultValue: 'What is Medicai and how does it work?', title: 'faqQuestion4', type: ControlType8.String, },
  p80Z9Cu19: {
    defaultValue:
      'Medicai is a secure, interoperable cloud PACS solution that connects all locations and imaging partners, retrieving and managing medical imaging data seamlessly. It integrates DICOM Node with on-prem PACS and modalities, and allows patients to upload their previous imaging studies directly.',
    title: 'faqAnswer4',
    type: ControlType8.String,
  },
  l5_wpVL3v: { defaultValue: 'What is Medicai and how does it work?', title: 'faqQuestion5', type: ControlType8.String, },
  DOlVhCAwB: {
    defaultValue:
      'Medicai is a secure, interoperable cloud PACS solution that connects all locations and imaging partners, retrieving and managing medical imaging data seamlessly. It integrates DICOM Node with on-prem PACS and modalities, and allows patients to upload their previous imaging studies directly.',
    title: 'faqAnswer5',
    type: ControlType8.String,
  },
},);
addFonts6(FramerTIYDx3GRA, [
  {
    explicitInter: true,
    fonts: [{
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
    },],
  },
  ...LogoFonts,
  ...ButtonFonts3,
  ...TickerFonts,
  ...FancyCardFonts,
  ...SectionsFeatureFonts,
  ...AccordionFonts,
  ...getFontsFromSharedStyle4(fonts6,),
  ...getFontsFromSharedStyle4(fonts,),
  ...getFontsFromSharedStyle4(fonts4,),
  ...getFontsFromSharedStyle4(fonts2,),
  ...getFontsFromSharedStyle4(fonts9,),
  ...getFontsFromSharedStyle4(fonts3,),
  ...getFontsFromSharedStyle4(fonts7,),
  ...getFontsFromSharedStyle4(fonts5,),
  ...getFontsFromSharedStyle4(fonts8,),
], { supportsExplicitInterCodegen: true, },);

// virtual:issue-17
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default6.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default6, ...props, },);
};
var issue_17_default = stdin_default6;
export { issue_17_default as default, };