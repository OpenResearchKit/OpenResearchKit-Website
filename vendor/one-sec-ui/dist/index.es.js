var Z0 = Object.defineProperty;
var g0 = (t, c, e) => c in t ? Z0(t, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[c] = e;
var f = (t, c, e) => g0(t, typeof c != "symbol" ? c + "" : c, e);
import { jsx as I, jsxs as Hc, Fragment as Ad } from "react/jsx-runtime";
import { withEmotionCache as h0, ThemeContext as W0, keyframes as Xt, useTheme as kc, css as Lc, jsx as j, Global as Is, ThemeProvider as Fs } from "@emotion/react";
import * as tc from "react";
import vc, { useState as Ic, useRef as pc, useLayoutEffect as Dd, useCallback as hc, useEffect as Yc, createContext as Qd, useContext as Td, useMemo as Cc, forwardRef as $l, Component as Vs, Fragment as _n } from "react";
import { NavLink as vs, useLocation as p0 } from "react-router-dom";
import { Trans as y0 } from "react-i18next";
import { createPortal as I0 } from "react-dom";
function M() {
  return M = Object.assign ? Object.assign.bind() : function(t) {
    for (var c = 1; c < arguments.length; c++) {
      var e = arguments[c];
      for (var l in e) ({}).hasOwnProperty.call(e, l) && (t[l] = e[l]);
    }
    return t;
  }, M.apply(null, arguments);
}
function F0(t) {
  for (var c = 0, e, l = 0, n = t.length; n >= 4; ++l, n -= 4)
    e = t.charCodeAt(l) & 255 | (t.charCodeAt(++l) & 255) << 8 | (t.charCodeAt(++l) & 255) << 16 | (t.charCodeAt(++l) & 255) << 24, e = /* Math.imul(k, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), e ^= /* k >>> r: */
    e >>> 24, c = /* Math.imul(k, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16);
  switch (n) {
    case 3:
      c ^= (t.charCodeAt(l + 2) & 255) << 16;
    case 2:
      c ^= (t.charCodeAt(l + 1) & 255) << 8;
    case 1:
      c ^= t.charCodeAt(l) & 255, c = /* Math.imul(h, m): */
      (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16);
  }
  return c ^= c >>> 13, c = /* Math.imul(h, m): */
  (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16), ((c ^ c >>> 15) >>> 0).toString(36);
}
var V0 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Bs(t) {
  var c = /* @__PURE__ */ Object.create(null);
  return function(e) {
    return c[e] === void 0 && (c[e] = t(e)), c[e];
  };
}
var v0 = /[A-Z]|^ms/g, B0 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, fs = function(c) {
  return c.charCodeAt(1) === 45;
}, Yb = function(c) {
  return c != null && typeof c != "boolean";
}, Gn = /* @__PURE__ */ Bs(function(t) {
  return fs(t) ? t : t.replace(v0, "-$&").toLowerCase();
}), Nb = function(c, e) {
  switch (c) {
    case "animation":
    case "animationName":
      if (typeof e == "string")
        return e.replace(B0, function(l, n, d) {
          return Pc = {
            name: n,
            styles: d,
            next: Pc
          }, n;
        });
  }
  return V0[c] !== 1 && !fs(c) && typeof e == "number" && e !== 0 ? e + "px" : e;
};
function Ce(t, c, e) {
  if (e == null)
    return "";
  var l = e;
  if (l.__emotion_styles !== void 0)
    return l;
  switch (typeof e) {
    case "boolean":
      return "";
    case "object": {
      var n = e;
      if (n.anim === 1)
        return Pc = {
          name: n.name,
          styles: n.styles,
          next: Pc
        }, n.name;
      var d = e;
      if (d.styles !== void 0) {
        var b = d.next;
        if (b !== void 0)
          for (; b !== void 0; )
            Pc = {
              name: b.name,
              styles: b.styles,
              next: Pc
            }, b = b.next;
        var i = d.styles + ";";
        return i;
      }
      return f0(t, c, e);
    }
    case "function": {
      if (t !== void 0) {
        var a = Pc, s = e(t);
        return Pc = a, Ce(t, c, s);
      }
      break;
    }
  }
  var o = e;
  if (c == null)
    return o;
  var u = c[o];
  return u !== void 0 ? u : o;
}
function f0(t, c, e) {
  var l = "";
  if (Array.isArray(e))
    for (var n = 0; n < e.length; n++)
      l += Ce(t, c, e[n]) + ";";
  else
    for (var d in e) {
      var b = e[d];
      if (typeof b != "object") {
        var i = b;
        c != null && c[i] !== void 0 ? l += d + "{" + c[i] + "}" : Yb(i) && (l += Gn(d) + ":" + Nb(d, i) + ";");
      } else if (Array.isArray(b) && typeof b[0] == "string" && (c == null || c[b[0]] === void 0))
        for (var a = 0; a < b.length; a++)
          Yb(b[a]) && (l += Gn(d) + ":" + Nb(d, b[a]) + ";");
      else {
        var s = Ce(t, c, b);
        switch (d) {
          case "animation":
          case "animationName": {
            l += Gn(d) + ":" + s + ";";
            break;
          }
          default:
            l += d + "{" + s + "}";
        }
      }
    }
  return l;
}
var Cb = /label:\s*([^\s;{]+)\s*(;|$)/g, Pc;
function J0(t, c, e) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var l = !0, n = "";
  Pc = void 0;
  var d = t[0];
  if (d == null || d.raw === void 0)
    l = !1, n += Ce(e, c, d);
  else {
    var b = d;
    n += b[0];
  }
  for (var i = 1; i < t.length; i++)
    if (n += Ce(e, c, t[i]), l) {
      var a = d;
      n += a[i];
    }
  Cb.lastIndex = 0;
  for (var s = "", o; (o = Cb.exec(n)) !== null; )
    s += "-" + o[1];
  var u = F0(n) + s;
  return {
    name: u,
    styles: n,
    next: Pc
  };
}
var Y0 = function(c) {
  return c();
}, N0 = tc.useInsertionEffect ? tc.useInsertionEffect : !1, C0 = N0 || Y0, z0 = !0;
function w0(t, c, e) {
  var l = "";
  return e.split(" ").forEach(function(n) {
    t[n] !== void 0 ? c.push(t[n] + ";") : n && (l += n + " ");
  }), l;
}
var Js = function(c, e, l) {
  var n = c.key + "-" + e.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (l === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  z0 === !1) && c.registered[n] === void 0 && (c.registered[n] = e.styles);
}, S0 = function(c, e, l) {
  Js(c, e, l);
  var n = c.key + "-" + e.name;
  if (c.inserted[e.name] === void 0) {
    var d = e;
    do
      c.insert(e === d ? "." + n : "", d, c.sheet, !0), d = d.next;
    while (d !== void 0);
  }
}, L0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, k0 = /* @__PURE__ */ Bs(
  function(t) {
    return L0.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
), O0 = k0, A0 = function(c) {
  return c !== "theme";
}, zb = function(c) {
  return typeof c == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  c.charCodeAt(0) > 96 ? O0 : A0;
}, wb = function(c, e, l) {
  var n;
  if (e) {
    var d = e.shouldForwardProp;
    n = c.__emotion_forwardProp && d ? function(b) {
      return c.__emotion_forwardProp(b) && d(b);
    } : d;
  }
  return typeof n != "function" && l && (n = c.__emotion_forwardProp), n;
}, D0 = function(c) {
  var e = c.cache, l = c.serialized, n = c.isStringTag;
  return Js(e, l, n), C0(function() {
    return S0(e, l, n);
  }), null;
}, B = function t(c, e) {
  var l = c.__emotion_real === c, n = l && c.__emotion_base || c, d, b;
  e !== void 0 && (d = e.label, b = e.target);
  var i = wb(c, e, l), a = i || zb(n), s = !a("as");
  return function() {
    var o = arguments, u = l && c.__emotion_styles !== void 0 ? c.__emotion_styles.slice(0) : [];
    if (d !== void 0 && u.push("label:" + d + ";"), o[0] == null || o[0].raw === void 0)
      u.push.apply(u, o);
    else {
      var X = o[0];
      u.push(X[0]);
      for (var x = o.length, H = 1; H < x; H++)
        u.push(o[H], X[H]);
    }
    var r = h0(function(G, m, Z) {
      var h = s && G.as || n, g = "", R = [], W = G;
      if (G.theme == null) {
        W = {};
        for (var p in G)
          W[p] = G[p];
        W.theme = tc.useContext(W0);
      }
      typeof G.className == "string" ? g = w0(m.registered, R, G.className) : G.className != null && (g = G.className + " ");
      var y = J0(u.concat(R), m.registered, W);
      g += m.key + "-" + y.name, b !== void 0 && (g += " " + b);
      var V = s && i === void 0 ? zb(h) : a, C = {};
      for (var J in G)
        s && J === "as" || V(J) && (C[J] = G[J]);
      return C.className = g, Z && (C.ref = Z), /* @__PURE__ */ tc.createElement(tc.Fragment, null, /* @__PURE__ */ tc.createElement(D0, {
        cache: m,
        serialized: y,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ tc.createElement(h, C));
    });
    return r.displayName = d !== void 0 ? d : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", r.defaultProps = c.defaultProps, r.__emotion_real = r, r.__emotion_base = n, r.__emotion_styles = u, r.__emotion_forwardProp = i, Object.defineProperty(r, "toString", {
      value: function() {
        return "." + b;
      }
    }), r.withComponent = function(G, m) {
      var Z = t(G, M({}, e, m, {
        shouldForwardProp: wb(r, m, !0)
      }));
      return Z.apply(void 0, u);
    }, r;
  };
};
function Q0() {
  return /* @__PURE__ */ I("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "filled", children: /* @__PURE__ */ I("path", { d: "M12 0.499968C12 0.223825 11.776 -0.00111961 11.5001 0.010376C8.69302 0.127342 6.0097 1.22644 3.92388 3.1244C1.71453 5.13475 0.334393 7.89683 0.0532823 10.8707C-0.227828 13.8445 0.610299 16.8163 2.40381 19.205C4.19732 21.5937 6.81727 23.2277 9.75145 23.7874C12.6856 24.3471 15.7231 23.7924 18.27 22.2316C20.8169 20.6709 22.6902 18.2163 23.5236 15.3479C24.3569 12.4794 24.0905 9.40319 22.7764 6.7207C21.5357 4.18818 19.4454 2.17847 16.8785 1.03636C16.6262 0.924103 16.3351 1.05079 16.2335 1.30754L13.8627 7.2953C13.7611 7.55205 13.8885 7.84021 14.1326 7.96935C14.9804 8.41789 15.6693 9.12488 16.095 9.99384C16.5944 11.0132 16.6956 12.1821 16.379 13.2722C16.0623 14.3622 15.3504 15.2949 14.3826 15.888C13.4148 16.4811 12.2606 16.6919 11.1456 16.4792C10.0306 16.2665 9.035 15.6456 8.35346 14.7379C7.67193 13.8302 7.35344 12.7009 7.46026 11.5708C7.56709 10.4408 8.09154 9.39118 8.93109 8.62725C9.64678 7.97602 10.5476 7.57229 11.501 7.46734C11.7755 7.43713 12 7.21611 12 6.93997V0.499968Z" }) });
}
function T0() {
  return /* @__PURE__ */ Hc("svg", { width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "filled", children: [
    /* @__PURE__ */ I("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.5 2H5.5C4.94772 2 4.5 2.44772 4.5 3V21C4.5 21.5523 4.94772 22 5.5 22H18.5C19.0523 22 19.5 21.5523 19.5 21V3C19.5 2.44772 19.0523 2 18.5 2ZM5.5 0C3.84315 0 2.5 1.34315 2.5 3V21C2.5 22.6569 3.84315 24 5.5 24H18.5C20.1569 24 21.5 22.6569 21.5 21V3C21.5 1.34315 20.1569 0 18.5 0H5.5Z" }),
    /* @__PURE__ */ I("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.25 5C7.25 4.58579 7.58579 4.25 8 4.25H16.5C16.9142 4.25 17.25 4.58579 17.25 5C17.25 5.41421 16.9142 5.75 16.5 5.75H8C7.58579 5.75 7.25 5.41421 7.25 5Z" }),
    /* @__PURE__ */ I("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.25 8.25C7.25 7.83579 7.58579 7.5 8 7.5H13C13.4142 7.5 13.75 7.83579 13.75 8.25C13.75 8.66421 13.4142 9 13 9H8C7.58579 9 7.25 8.66421 7.25 8.25Z" }),
    /* @__PURE__ */ I("path", { d: "M6.5 12C6.5 11.4477 6.94772 11 7.5 11H16.5C17.0523 11 17.5 11.4477 17.5 12V19C17.5 19.5523 17.0523 20 16.5 20H7.5C6.94771 20 6.5 19.5523 6.5 19V12Z" })
  ] });
}
function j0() {
  return /* @__PURE__ */ Hc("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "filled", children: [
    /* @__PURE__ */ I("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 13C3.23858 13 1 15.2386 1 18C1 20.7614 3.23858 23 6 23H18C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13H6ZM18 20.75C19.5188 20.75 20.75 19.5188 20.75 18C20.75 16.4812 19.5188 15.25 18 15.25C16.4812 15.25 15.25 16.4812 15.25 18C15.25 19.5188 16.4812 20.75 18 20.75Z" }),
    /* @__PURE__ */ I("path", { d: "M6.25 8.5C7.49264 8.5 8.5 7.49264 8.5 6.25C8.5 5.00736 7.49264 4 6.25 4C5.00736 4 4 5.00736 4 6.25C4 7.49264 5.00736 8.5 6.25 8.5Z" }),
    /* @__PURE__ */ I("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1 6.25C1 3.35051 3.23858 1 6 1H18C20.7614 1 23 3.35051 23 6.25C23 9.14949 20.7614 11.5 18 11.5H6C3.23858 11.5 1 9.14949 1 6.25ZM6 3.1H18C19.6569 3.1 21 4.5103 21 6.25C21 7.9897 19.6569 9.4 18 9.4H6C4.34315 9.4 3 7.9897 3 6.25C3 4.5103 4.34315 3.1 6 3.1Z" })
  ] });
}
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function M0(t, c, e) {
  return (c = P0(c)) in t ? Object.defineProperty(t, c, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[c] = e, t;
}
function Sb(t, c) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    c && (l = l.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), e.push.apply(e, l);
  }
  return e;
}
function v(t) {
  for (var c = 1; c < arguments.length; c++) {
    var e = arguments[c] != null ? arguments[c] : {};
    c % 2 ? Sb(Object(e), !0).forEach(function(l) {
      M0(t, l, e[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Sb(Object(e)).forEach(function(l) {
      Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(e, l));
    });
  }
  return t;
}
function U0(t, c) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var l = e.call(t, c);
    if (typeof l != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (c === "string" ? String : Number)(t);
}
function P0(t) {
  var c = U0(t, "string");
  return typeof c == "symbol" ? c : c + "";
}
const Lb = () => {
};
let jd = {}, Ys = {}, Ns = null, Cs = {
  mark: Lb,
  measure: Lb
};
try {
  typeof window < "u" && (jd = window), typeof document < "u" && (Ys = document), typeof MutationObserver < "u" && (Ns = MutationObserver), typeof performance < "u" && (Cs = performance);
} catch {
}
const {
  userAgent: kb = ""
} = jd.navigator || {}, pt = jd, Xc = Ys, Ob = Ns, Ke = Cs;
pt.document;
const xt = !!Xc.documentElement && !!Xc.head && typeof Xc.addEventListener == "function" && typeof Xc.createElement == "function", zs = ~kb.indexOf("MSIE") || ~kb.indexOf("Trident/");
var E0 = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, K0 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, ws = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, _0 = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ss = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], fc = "classic", ql = "duotone", $0 = "sharp", q0 = "sharp-duotone", Ls = [fc, ql, $0, q0], cX = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, tX = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, eX = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), lX = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, nX = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Ab = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, dX = ["kit"], bX = {
  kit: {
    "fa-kit": "fak"
  }
}, iX = ["fak", "fakd"], aX = {
  kit: {
    fak: "fa-kit"
  }
}, Db = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, _e = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, sX = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], oX = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], uX = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, XX = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, xX = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, $n = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, rX = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], qn = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...sX, ...rX], GX = ["solid", "regular", "light", "thin", "duotone", "brands"], ks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], HX = ks.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), mX = [...Object.keys(xX), ...GX, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", _e.GROUP, _e.SWAP_OPACITY, _e.PRIMARY, _e.SECONDARY].concat(ks.map((t) => "".concat(t, "x"))).concat(HX.map((t) => "w-".concat(t))), RX = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const st = "___FONT_AWESOME___", cd = 16, Os = "fa", As = "svg-inline--fa", At = "data-fa-i2svg", td = "data-fa-pseudo-element", ZX = "data-fa-pseudo-element-pending", Md = "data-prefix", Ud = "data-icon", Qb = "fontawesome-i2svg", gX = "async", hX = ["HTML", "HEAD", "STYLE", "SCRIPT"], Ds = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function je(t) {
  return new Proxy(t, {
    get(c, e) {
      return e in c ? c[e] : c[fc];
    }
  });
}
const Qs = v({}, ws);
Qs[fc] = v(v(v(v({}, {
  "fa-duotone": "duotone"
}), ws[fc]), Ab.kit), Ab["kit-duotone"]);
const WX = je(Qs), ed = v({}, lX);
ed[fc] = v(v(v(v({}, {
  duotone: "fad"
}), ed[fc]), Db.kit), Db["kit-duotone"]);
const Tb = je(ed), ld = v({}, $n);
ld[fc] = v(v({}, ld[fc]), aX.kit);
const Pd = je(ld), nd = v({}, XX);
nd[fc] = v(v({}, nd[fc]), bX.kit);
je(nd);
const pX = E0, Ts = "fa-layers-text", yX = K0, IX = v({}, cX);
je(IX);
const FX = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Hn = _0, VX = [...dX, ...mX], Ie = pt.FontAwesomeConfig || {};
function vX(t) {
  var c = Xc.querySelector("script[" + t + "]");
  if (c)
    return c.getAttribute(t);
}
function BX(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
Xc && typeof Xc.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((c) => {
  let [e, l] = c;
  const n = BX(vX(e));
  n != null && (Ie[l] = n);
});
const js = {
  styleDefault: "solid",
  familyDefault: fc,
  cssPrefix: Os,
  replacementClass: As,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Ie.familyPrefix && (Ie.cssPrefix = Ie.familyPrefix);
const te = v(v({}, js), Ie);
te.autoReplaceSvg || (te.observeMutations = !1);
const Q = {};
Object.keys(js).forEach((t) => {
  Object.defineProperty(Q, t, {
    enumerable: !0,
    set: function(c) {
      te[t] = c, Fe.forEach((e) => e(Q));
    },
    get: function() {
      return te[t];
    }
  });
});
Object.defineProperty(Q, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    te.cssPrefix = t, Fe.forEach((c) => c(Q));
  },
  get: function() {
    return te.cssPrefix;
  }
});
pt.FontAwesomeConfig = Q;
const Fe = [];
function fX(t) {
  return Fe.push(t), () => {
    Fe.splice(Fe.indexOf(t), 1);
  };
}
const Ht = cd, Kc = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function JX(t) {
  if (!t || !xt)
    return;
  const c = Xc.createElement("style");
  c.setAttribute("type", "text/css"), c.innerHTML = t;
  const e = Xc.head.childNodes;
  let l = null;
  for (let n = e.length - 1; n > -1; n--) {
    const d = e[n], b = (d.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(b) > -1 && (l = d);
  }
  return Xc.head.insertBefore(c, l), t;
}
const YX = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ze() {
  let t = 12, c = "";
  for (; t-- > 0; )
    c += YX[Math.random() * 62 | 0];
  return c;
}
function be(t) {
  const c = [];
  for (let e = (t || []).length >>> 0; e--; )
    c[e] = t[e];
  return c;
}
function Ed(t) {
  return t.classList ? be(t.classList) : (t.getAttribute("class") || "").split(" ").filter((c) => c);
}
function Ms(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function NX(t) {
  return Object.keys(t || {}).reduce((c, e) => c + "".concat(e, '="').concat(Ms(t[e]), '" '), "").trim();
}
function cn(t) {
  return Object.keys(t || {}).reduce((c, e) => c + "".concat(e, ": ").concat(t[e].trim(), ";"), "");
}
function Kd(t) {
  return t.size !== Kc.size || t.x !== Kc.x || t.y !== Kc.y || t.rotate !== Kc.rotate || t.flipX || t.flipY;
}
function CX(t) {
  let {
    transform: c,
    containerWidth: e,
    iconWidth: l
  } = t;
  const n = {
    transform: "translate(".concat(e / 2, " 256)")
  }, d = "translate(".concat(c.x * 32, ", ").concat(c.y * 32, ") "), b = "scale(".concat(c.size / 16 * (c.flipX ? -1 : 1), ", ").concat(c.size / 16 * (c.flipY ? -1 : 1), ") "), i = "rotate(".concat(c.rotate, " 0 0)"), a = {
    transform: "".concat(d, " ").concat(b, " ").concat(i)
  }, s = {
    transform: "translate(".concat(l / 2 * -1, " -256)")
  };
  return {
    outer: n,
    inner: a,
    path: s
  };
}
function zX(t) {
  let {
    transform: c,
    width: e = cd,
    height: l = cd,
    startCentered: n = !1
  } = t, d = "";
  return n && zs ? d += "translate(".concat(c.x / Ht - e / 2, "em, ").concat(c.y / Ht - l / 2, "em) ") : n ? d += "translate(calc(-50% + ".concat(c.x / Ht, "em), calc(-50% + ").concat(c.y / Ht, "em)) ") : d += "translate(".concat(c.x / Ht, "em, ").concat(c.y / Ht, "em) "), d += "scale(".concat(c.size / Ht * (c.flipX ? -1 : 1), ", ").concat(c.size / Ht * (c.flipY ? -1 : 1), ") "), d += "rotate(".concat(c.rotate, "deg) "), d;
}
var wX = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function Us() {
  const t = Os, c = As, e = Q.cssPrefix, l = Q.replacementClass;
  let n = wX;
  if (e !== t || l !== c) {
    const d = new RegExp("\\.".concat(t, "\\-"), "g"), b = new RegExp("\\--".concat(t, "\\-"), "g"), i = new RegExp("\\.".concat(c), "g");
    n = n.replace(d, ".".concat(e, "-")).replace(b, "--".concat(e, "-")).replace(i, ".".concat(l));
  }
  return n;
}
let jb = !1;
function mn() {
  Q.autoAddCss && !jb && (JX(Us()), jb = !0);
}
var SX = {
  mixout() {
    return {
      dom: {
        css: Us,
        insertCss: mn
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        mn();
      },
      beforeI2svg() {
        mn();
      }
    };
  }
};
const ot = pt || {};
ot[st] || (ot[st] = {});
ot[st].styles || (ot[st].styles = {});
ot[st].hooks || (ot[st].hooks = {});
ot[st].shims || (ot[st].shims = []);
var _c = ot[st];
const Ps = [], Es = function() {
  Xc.removeEventListener("DOMContentLoaded", Es), Jl = 1, Ps.map((t) => t());
};
let Jl = !1;
xt && (Jl = (Xc.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Xc.readyState), Jl || Xc.addEventListener("DOMContentLoaded", Es));
function LX(t) {
  xt && (Jl ? setTimeout(t, 0) : Ps.push(t));
}
function Me(t) {
  const {
    tag: c,
    attributes: e = {},
    children: l = []
  } = t;
  return typeof t == "string" ? Ms(t) : "<".concat(c, " ").concat(NX(e), ">").concat(l.map(Me).join(""), "</").concat(c, ">");
}
function Mb(t, c, e) {
  if (t && t[c] && t[c][e])
    return {
      prefix: c,
      iconName: e,
      icon: t[c][e]
    };
}
var Rn = function(c, e, l, n) {
  var d = Object.keys(c), b = d.length, i = e, a, s, o;
  for (l === void 0 ? (a = 1, o = c[d[0]]) : (a = 0, o = l); a < b; a++)
    s = d[a], o = i(o, c[s], s, c);
  return o;
};
function kX(t) {
  const c = [];
  let e = 0;
  const l = t.length;
  for (; e < l; ) {
    const n = t.charCodeAt(e++);
    if (n >= 55296 && n <= 56319 && e < l) {
      const d = t.charCodeAt(e++);
      (d & 64512) == 56320 ? c.push(((n & 1023) << 10) + (d & 1023) + 65536) : (c.push(n), e--);
    } else
      c.push(n);
  }
  return c;
}
function dd(t) {
  const c = kX(t);
  return c.length === 1 ? c[0].toString(16) : null;
}
function OX(t, c) {
  const e = t.length;
  let l = t.charCodeAt(c), n;
  return l >= 55296 && l <= 56319 && e > c + 1 && (n = t.charCodeAt(c + 1), n >= 56320 && n <= 57343) ? (l - 55296) * 1024 + n - 56320 + 65536 : l;
}
function Ub(t) {
  return Object.keys(t).reduce((c, e) => {
    const l = t[e];
    return !!l.icon ? c[l.iconName] = l.icon : c[e] = l, c;
  }, {});
}
function bd(t, c) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: l = !1
  } = e, n = Ub(c);
  typeof _c.hooks.addPack == "function" && !l ? _c.hooks.addPack(t, Ub(c)) : _c.styles[t] = v(v({}, _c.styles[t] || {}), n), t === "fas" && bd("fa", c);
}
const {
  styles: we,
  shims: AX
} = _c, Ks = Object.keys(Pd), DX = Ks.reduce((t, c) => (t[c] = Object.keys(Pd[c]), t), {});
let _d = null, _s = {}, $s = {}, qs = {}, co = {}, to = {};
function QX(t) {
  return ~VX.indexOf(t);
}
function TX(t, c) {
  const e = c.split("-"), l = e[0], n = e.slice(1).join("-");
  return l === t && n !== "" && !QX(n) ? n : null;
}
const eo = () => {
  const t = (l) => Rn(we, (n, d, b) => (n[b] = Rn(d, l, {}), n), {});
  _s = t((l, n, d) => (n[3] && (l[n[3]] = d), n[2] && n[2].filter((i) => typeof i == "number").forEach((i) => {
    l[i.toString(16)] = d;
  }), l)), $s = t((l, n, d) => (l[d] = d, n[2] && n[2].filter((i) => typeof i == "string").forEach((i) => {
    l[i] = d;
  }), l)), to = t((l, n, d) => {
    const b = n[2];
    return l[d] = d, b.forEach((i) => {
      l[i] = d;
    }), l;
  });
  const c = "far" in we || Q.autoFetchSvg, e = Rn(AX, (l, n) => {
    const d = n[0];
    let b = n[1];
    const i = n[2];
    return b === "far" && !c && (b = "fas"), typeof d == "string" && (l.names[d] = {
      prefix: b,
      iconName: i
    }), typeof d == "number" && (l.unicodes[d.toString(16)] = {
      prefix: b,
      iconName: i
    }), l;
  }, {
    names: {},
    unicodes: {}
  });
  qs = e.names, co = e.unicodes, _d = tn(Q.styleDefault, {
    family: Q.familyDefault
  });
};
fX((t) => {
  _d = tn(t.styleDefault, {
    family: Q.familyDefault
  });
});
eo();
function $d(t, c) {
  return (_s[t] || {})[c];
}
function jX(t, c) {
  return ($s[t] || {})[c];
}
function St(t, c) {
  return (to[t] || {})[c];
}
function lo(t) {
  return qs[t] || {
    prefix: null,
    iconName: null
  };
}
function MX(t) {
  const c = co[t], e = $d("fas", t);
  return c || (e ? {
    prefix: "fas",
    iconName: e
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function yt() {
  return _d;
}
const no = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function UX(t) {
  let c = fc;
  const e = Ks.reduce((l, n) => (l[n] = "".concat(Q.cssPrefix, "-").concat(n), l), {});
  return Ls.forEach((l) => {
    (t.includes(e[l]) || t.some((n) => DX[l].includes(n))) && (c = l);
  }), c;
}
function tn(t) {
  let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: e = fc
  } = c, l = WX[e][t];
  if (e === ql && !t)
    return "fad";
  const n = Tb[e][t] || Tb[e][l], d = t in _c.styles ? t : null;
  return n || d || null;
}
function PX(t) {
  let c = [], e = null;
  return t.forEach((l) => {
    const n = TX(Q.cssPrefix, l);
    n ? e = n : l && c.push(l);
  }), {
    iconName: e,
    rest: c
  };
}
function Pb(t) {
  return t.sort().filter((c, e, l) => l.indexOf(c) === e);
}
function en(t) {
  let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: e = !1
  } = c;
  let l = null;
  const n = qn.concat(oX), d = Pb(t.filter((u) => n.includes(u))), b = Pb(t.filter((u) => !qn.includes(u))), i = d.filter((u) => (l = u, !Ss.includes(u))), [a = null] = i, s = UX(d), o = v(v({}, PX(b)), {}, {
    prefix: tn(a, {
      family: s
    })
  });
  return v(v(v({}, o), $X({
    values: t,
    family: s,
    styles: we,
    config: Q,
    canonical: o,
    givenPrefix: l
  })), EX(e, l, o));
}
function EX(t, c, e) {
  let {
    prefix: l,
    iconName: n
  } = e;
  if (t || !l || !n)
    return {
      prefix: l,
      iconName: n
    };
  const d = c === "fa" ? lo(n) : {}, b = St(l, n);
  return n = d.iconName || b || n, l = d.prefix || l, l === "far" && !we.far && we.fas && !Q.autoFetchSvg && (l = "fas"), {
    prefix: l,
    iconName: n
  };
}
const KX = Ls.filter((t) => t !== fc || t !== ql), _X = Object.keys($n).filter((t) => t !== fc).map((t) => Object.keys($n[t])).flat();
function $X(t) {
  const {
    values: c,
    family: e,
    canonical: l,
    givenPrefix: n = "",
    styles: d = {},
    config: b = {}
  } = t, i = e === ql, a = c.includes("fa-duotone") || c.includes("fad"), s = b.familyDefault === "duotone", o = l.prefix === "fad" || l.prefix === "fa-duotone";
  if (!i && (a || s || o) && (l.prefix = "fad"), (c.includes("fa-brands") || c.includes("fab")) && (l.prefix = "fab"), !l.prefix && KX.includes(e) && (Object.keys(d).find((X) => _X.includes(X)) || b.autoFetchSvg)) {
    const X = eX.get(e).defaultShortPrefixId;
    l.prefix = X, l.iconName = St(l.prefix, l.iconName) || l.iconName;
  }
  return (l.prefix === "fa" || n === "fa") && (l.prefix = yt() || "fas"), l;
}
class qX {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var c = arguments.length, e = new Array(c), l = 0; l < c; l++)
      e[l] = arguments[l];
    const n = e.reduce(this._pullDefinitions, {});
    Object.keys(n).forEach((d) => {
      this.definitions[d] = v(v({}, this.definitions[d] || {}), n[d]), bd(d, n[d]);
      const b = Pd[fc][d];
      b && bd(b, n[d]), eo();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(c, e) {
    const l = e.prefix && e.iconName && e.icon ? {
      0: e
    } : e;
    return Object.keys(l).map((n) => {
      const {
        prefix: d,
        iconName: b,
        icon: i
      } = l[n], a = i[2];
      c[d] || (c[d] = {}), a.length > 0 && a.forEach((s) => {
        typeof s == "string" && (c[d][s] = i);
      }), c[d][b] = i;
    }), c;
  }
}
let Eb = [], Kt = {};
const $t = {}, cx = Object.keys($t);
function tx(t, c) {
  let {
    mixoutsTo: e
  } = c;
  return Eb = t, Kt = {}, Object.keys($t).forEach((l) => {
    cx.indexOf(l) === -1 && delete $t[l];
  }), Eb.forEach((l) => {
    const n = l.mixout ? l.mixout() : {};
    if (Object.keys(n).forEach((d) => {
      typeof n[d] == "function" && (e[d] = n[d]), typeof n[d] == "object" && Object.keys(n[d]).forEach((b) => {
        e[d] || (e[d] = {}), e[d][b] = n[d][b];
      });
    }), l.hooks) {
      const d = l.hooks();
      Object.keys(d).forEach((b) => {
        Kt[b] || (Kt[b] = []), Kt[b].push(d[b]);
      });
    }
    l.provides && l.provides($t);
  }), e;
}
function id(t, c) {
  for (var e = arguments.length, l = new Array(e > 2 ? e - 2 : 0), n = 2; n < e; n++)
    l[n - 2] = arguments[n];
  return (Kt[t] || []).forEach((b) => {
    c = b.apply(null, [c, ...l]);
  }), c;
}
function Dt(t) {
  for (var c = arguments.length, e = new Array(c > 1 ? c - 1 : 0), l = 1; l < c; l++)
    e[l - 1] = arguments[l];
  (Kt[t] || []).forEach((d) => {
    d.apply(null, e);
  });
}
function It() {
  const t = arguments[0], c = Array.prototype.slice.call(arguments, 1);
  return $t[t] ? $t[t].apply(null, c) : void 0;
}
function ad(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  let {
    iconName: c
  } = t;
  const e = t.prefix || yt();
  if (c)
    return c = St(e, c) || c, Mb(bo.definitions, e, c) || Mb(_c.styles, e, c);
}
const bo = new qX(), ex = () => {
  Q.autoReplaceSvg = !1, Q.observeMutations = !1, Dt("noAuto");
}, lx = {
  i2svg: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return xt ? (Dt("beforeI2svg", t), It("pseudoElements2svg", t), It("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: c
    } = t;
    Q.autoReplaceSvg === !1 && (Q.autoReplaceSvg = !0), Q.observeMutations = !0, LX(() => {
      dx({
        autoReplaceSvgRoot: c
      }), Dt("watch", t);
    });
  }
}, nx = {
  icon: (t) => {
    if (t === null)
      return null;
    if (typeof t == "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: St(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      const c = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], e = tn(t[0]);
      return {
        prefix: e,
        iconName: St(e, c) || c
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(Q.cssPrefix, "-")) > -1 || t.match(pX))) {
      const c = en(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: c.prefix || yt(),
        iconName: St(c.prefix, c.iconName) || c.iconName
      };
    }
    if (typeof t == "string") {
      const c = yt();
      return {
        prefix: c,
        iconName: St(c, t) || t
      };
    }
  }
}, Oc = {
  noAuto: ex,
  config: Q,
  dom: lx,
  parse: nx,
  library: bo,
  findIconDefinition: ad,
  toHtml: Me
}, dx = function() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: c = Xc
  } = t;
  (Object.keys(_c.styles).length > 0 || Q.autoFetchSvg) && xt && Q.autoReplaceSvg && Oc.dom.i2svg({
    node: c
  });
};
function ln(t, c) {
  return Object.defineProperty(t, "abstract", {
    get: c
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map((e) => Me(e));
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (!xt) return;
      const e = Xc.createElement("div");
      return e.innerHTML = t.html, e.children;
    }
  }), t;
}
function bx(t) {
  let {
    children: c,
    main: e,
    mask: l,
    attributes: n,
    styles: d,
    transform: b
  } = t;
  if (Kd(b) && e.found && !l.found) {
    const {
      width: i,
      height: a
    } = e, s = {
      x: i / a / 2,
      y: 0.5
    };
    n.style = cn(v(v({}, d), {}, {
      "transform-origin": "".concat(s.x + b.x / 16, "em ").concat(s.y + b.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: n,
    children: c
  }];
}
function ix(t) {
  let {
    prefix: c,
    iconName: e,
    children: l,
    attributes: n,
    symbol: d
  } = t;
  const b = d === !0 ? "".concat(c, "-").concat(Q.cssPrefix, "-").concat(e) : d;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: v(v({}, n), {}, {
        id: b
      }),
      children: l
    }]
  }];
}
function qd(t) {
  const {
    icons: {
      main: c,
      mask: e
    },
    prefix: l,
    iconName: n,
    transform: d,
    symbol: b,
    title: i,
    maskId: a,
    titleId: s,
    extra: o,
    watchable: u = !1
  } = t, {
    width: X,
    height: x
  } = e.found ? e : c, H = iX.includes(l), r = [Q.replacementClass, n ? "".concat(Q.cssPrefix, "-").concat(n) : ""].filter((R) => o.classes.indexOf(R) === -1).filter((R) => R !== "" || !!R).concat(o.classes).join(" ");
  let G = {
    children: [],
    attributes: v(v({}, o.attributes), {}, {
      "data-prefix": l,
      "data-icon": n,
      class: r,
      role: o.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(X, " ").concat(x)
    })
  };
  const m = H && !~o.classes.indexOf("fa-fw") ? {
    width: "".concat(X / x * 16 * 0.0625, "em")
  } : {};
  u && (G.attributes[At] = ""), i && (G.children.push({
    tag: "title",
    attributes: {
      id: G.attributes["aria-labelledby"] || "title-".concat(s || ze())
    },
    children: [i]
  }), delete G.attributes.title);
  const Z = v(v({}, G), {}, {
    prefix: l,
    iconName: n,
    main: c,
    mask: e,
    maskId: a,
    transform: d,
    symbol: b,
    styles: v(v({}, m), o.styles)
  }), {
    children: h,
    attributes: g
  } = e.found && c.found ? It("generateAbstractMask", Z) || {
    children: [],
    attributes: {}
  } : It("generateAbstractIcon", Z) || {
    children: [],
    attributes: {}
  };
  return Z.children = h, Z.attributes = g, b ? ix(Z) : bx(Z);
}
function Kb(t) {
  const {
    content: c,
    width: e,
    height: l,
    transform: n,
    title: d,
    extra: b,
    watchable: i = !1
  } = t, a = v(v(v({}, b.attributes), d ? {
    title: d
  } : {}), {}, {
    class: b.classes.join(" ")
  });
  i && (a[At] = "");
  const s = v({}, b.styles);
  Kd(n) && (s.transform = zX({
    transform: n,
    startCentered: !0,
    width: e,
    height: l
  }), s["-webkit-transform"] = s.transform);
  const o = cn(s);
  o.length > 0 && (a.style = o);
  const u = [];
  return u.push({
    tag: "span",
    attributes: a,
    children: [c]
  }), d && u.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [d]
  }), u;
}
function ax(t) {
  const {
    content: c,
    title: e,
    extra: l
  } = t, n = v(v(v({}, l.attributes), e ? {
    title: e
  } : {}), {}, {
    class: l.classes.join(" ")
  }), d = cn(l.styles);
  d.length > 0 && (n.style = d);
  const b = [];
  return b.push({
    tag: "span",
    attributes: n,
    children: [c]
  }), e && b.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [e]
  }), b;
}
const {
  styles: Zn
} = _c;
function sd(t) {
  const c = t[0], e = t[1], [l] = t.slice(4);
  let n = null;
  return Array.isArray(l) ? n = {
    tag: "g",
    attributes: {
      class: "".concat(Q.cssPrefix, "-").concat(Hn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Q.cssPrefix, "-").concat(Hn.SECONDARY),
        fill: "currentColor",
        d: l[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Q.cssPrefix, "-").concat(Hn.PRIMARY),
        fill: "currentColor",
        d: l[1]
      }
    }]
  } : n = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: l
    }
  }, {
    found: !0,
    width: c,
    height: e,
    icon: n
  };
}
const sx = {
  found: !1,
  width: 512,
  height: 512
};
function ox(t, c) {
  !Ds && !Q.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(c, '" is missing.'));
}
function od(t, c) {
  let e = c;
  return c === "fa" && Q.styleDefault !== null && (c = yt()), new Promise((l, n) => {
    if (e === "fa") {
      const d = lo(t) || {};
      t = d.iconName || t, c = d.prefix || c;
    }
    if (t && c && Zn[c] && Zn[c][t]) {
      const d = Zn[c][t];
      return l(sd(d));
    }
    ox(t, c), l(v(v({}, sx), {}, {
      icon: Q.showMissingIcons && t ? It("missingIconAbstract") || {} : {}
    }));
  });
}
const _b = () => {
}, ud = Q.measurePerformance && Ke && Ke.mark && Ke.measure ? Ke : {
  mark: _b,
  measure: _b
}, xe = 'FA "6.7.2"', ux = (t) => (ud.mark("".concat(xe, " ").concat(t, " begins")), () => io(t)), io = (t) => {
  ud.mark("".concat(xe, " ").concat(t, " ends")), ud.measure("".concat(xe, " ").concat(t), "".concat(xe, " ").concat(t, " begins"), "".concat(xe, " ").concat(t, " ends"));
};
var cb = {
  begin: ux,
  end: io
};
const gl = () => {
};
function $b(t) {
  return typeof (t.getAttribute ? t.getAttribute(At) : null) == "string";
}
function Xx(t) {
  const c = t.getAttribute ? t.getAttribute(Md) : null, e = t.getAttribute ? t.getAttribute(Ud) : null;
  return c && e;
}
function xx(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(Q.replacementClass);
}
function rx() {
  return Q.autoReplaceSvg === !0 ? hl.replace : hl[Q.autoReplaceSvg] || hl.replace;
}
function Gx(t) {
  return Xc.createElementNS("http://www.w3.org/2000/svg", t);
}
function Hx(t) {
  return Xc.createElement(t);
}
function ao(t) {
  let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: e = t.tag === "svg" ? Gx : Hx
  } = c;
  if (typeof t == "string")
    return Xc.createTextNode(t);
  const l = e(t.tag);
  return Object.keys(t.attributes || []).forEach(function(d) {
    l.setAttribute(d, t.attributes[d]);
  }), (t.children || []).forEach(function(d) {
    l.appendChild(ao(d, {
      ceFn: e
    }));
  }), l;
}
function mx(t) {
  let c = " ".concat(t.outerHTML, " ");
  return c = "".concat(c, "Font Awesome fontawesome.com "), c;
}
const hl = {
  replace: function(t) {
    const c = t[0];
    if (c.parentNode)
      if (t[1].forEach((e) => {
        c.parentNode.insertBefore(ao(e), c);
      }), c.getAttribute(At) === null && Q.keepOriginalSource) {
        let e = Xc.createComment(mx(c));
        c.parentNode.replaceChild(e, c);
      } else
        c.remove();
  },
  nest: function(t) {
    const c = t[0], e = t[1];
    if (~Ed(c).indexOf(Q.replacementClass))
      return hl.replace(t);
    const l = new RegExp("".concat(Q.cssPrefix, "-.*"));
    if (delete e[0].attributes.id, e[0].attributes.class) {
      const d = e[0].attributes.class.split(" ").reduce((b, i) => (i === Q.replacementClass || i.match(l) ? b.toSvg.push(i) : b.toNode.push(i), b), {
        toNode: [],
        toSvg: []
      });
      e[0].attributes.class = d.toSvg.join(" "), d.toNode.length === 0 ? c.removeAttribute("class") : c.setAttribute("class", d.toNode.join(" "));
    }
    const n = e.map((d) => Me(d)).join(`
`);
    c.setAttribute(At, ""), c.innerHTML = n;
  }
};
function qb(t) {
  t();
}
function so(t, c) {
  const e = typeof c == "function" ? c : gl;
  if (t.length === 0)
    e();
  else {
    let l = qb;
    Q.mutateApproach === gX && (l = pt.requestAnimationFrame || qb), l(() => {
      const n = rx(), d = cb.begin("mutate");
      t.map(n), d(), e();
    });
  }
}
let tb = !1;
function oo() {
  tb = !0;
}
function Xd() {
  tb = !1;
}
let Yl = null;
function ci(t) {
  if (!Ob || !Q.observeMutations)
    return;
  const {
    treeCallback: c = gl,
    nodeCallback: e = gl,
    pseudoElementsCallback: l = gl,
    observeMutationsRoot: n = Xc
  } = t;
  Yl = new Ob((d) => {
    if (tb) return;
    const b = yt();
    be(d).forEach((i) => {
      if (i.type === "childList" && i.addedNodes.length > 0 && !$b(i.addedNodes[0]) && (Q.searchPseudoElements && l(i.target), c(i.target)), i.type === "attributes" && i.target.parentNode && Q.searchPseudoElements && l(i.target.parentNode), i.type === "attributes" && $b(i.target) && ~FX.indexOf(i.attributeName))
        if (i.attributeName === "class" && Xx(i.target)) {
          const {
            prefix: a,
            iconName: s
          } = en(Ed(i.target));
          i.target.setAttribute(Md, a || b), s && i.target.setAttribute(Ud, s);
        } else xx(i.target) && e(i.target);
    });
  }), xt && Yl.observe(n, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Rx() {
  Yl && Yl.disconnect();
}
function Zx(t) {
  const c = t.getAttribute("style");
  let e = [];
  return c && (e = c.split(";").reduce((l, n) => {
    const d = n.split(":"), b = d[0], i = d.slice(1);
    return b && i.length > 0 && (l[b] = i.join(":").trim()), l;
  }, {})), e;
}
function gx(t) {
  const c = t.getAttribute("data-prefix"), e = t.getAttribute("data-icon"), l = t.innerText !== void 0 ? t.innerText.trim() : "";
  let n = en(Ed(t));
  return n.prefix || (n.prefix = yt()), c && e && (n.prefix = c, n.iconName = e), n.iconName && n.prefix || (n.prefix && l.length > 0 && (n.iconName = jX(n.prefix, t.innerText) || $d(n.prefix, dd(t.innerText))), !n.iconName && Q.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (n.iconName = t.firstChild.data)), n;
}
function hx(t) {
  const c = be(t.attributes).reduce((n, d) => (n.name !== "class" && n.name !== "style" && (n[d.name] = d.value), n), {}), e = t.getAttribute("title"), l = t.getAttribute("data-fa-title-id");
  return Q.autoA11y && (e ? c["aria-labelledby"] = "".concat(Q.replacementClass, "-title-").concat(l || ze()) : (c["aria-hidden"] = "true", c.focusable = "false")), c;
}
function Wx() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Kc,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function ti(t) {
  let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: e,
    prefix: l,
    rest: n
  } = gx(t), d = hx(t), b = id("parseNodeAttributes", {}, t);
  let i = c.styleParser ? Zx(t) : [];
  return v({
    iconName: e,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: l,
    transform: Kc,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: n,
      styles: i,
      attributes: d
    }
  }, b);
}
const {
  styles: px
} = _c;
function uo(t) {
  const c = Q.autoReplaceSvg === "nest" ? ti(t, {
    styleParser: !1
  }) : ti(t);
  return ~c.extra.classes.indexOf(Ts) ? It("generateLayersText", t, c) : It("generateSvgReplacementMutation", t, c);
}
function yx() {
  return [...nX, ...qn];
}
function ei(t) {
  let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!xt) return Promise.resolve();
  const e = Xc.documentElement.classList, l = (o) => e.add("".concat(Qb, "-").concat(o)), n = (o) => e.remove("".concat(Qb, "-").concat(o)), d = Q.autoFetchSvg ? yx() : Ss.concat(Object.keys(px));
  d.includes("fa") || d.push("fa");
  const b = [".".concat(Ts, ":not([").concat(At, "])")].concat(d.map((o) => ".".concat(o, ":not([").concat(At, "])"))).join(", ");
  if (b.length === 0)
    return Promise.resolve();
  let i = [];
  try {
    i = be(t.querySelectorAll(b));
  } catch {
  }
  if (i.length > 0)
    l("pending"), n("complete");
  else
    return Promise.resolve();
  const a = cb.begin("onTree"), s = i.reduce((o, u) => {
    try {
      const X = uo(u);
      X && o.push(X);
    } catch (X) {
      Ds || X.name === "MissingIcon" && console.error(X);
    }
    return o;
  }, []);
  return new Promise((o, u) => {
    Promise.all(s).then((X) => {
      so(X, () => {
        l("active"), l("complete"), n("pending"), typeof c == "function" && c(), a(), o();
      });
    }).catch((X) => {
      a(), u(X);
    });
  });
}
function Ix(t) {
  let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  uo(t).then((e) => {
    e && so([e], c);
  });
}
function Fx(t) {
  return function(c) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const l = (c || {}).icon ? c : ad(c || {});
    let {
      mask: n
    } = e;
    return n && (n = (n || {}).icon ? n : ad(n || {})), t(l, v(v({}, e), {}, {
      mask: n
    }));
  };
}
const Vx = function(t) {
  let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: e = Kc,
    symbol: l = !1,
    mask: n = null,
    maskId: d = null,
    title: b = null,
    titleId: i = null,
    classes: a = [],
    attributes: s = {},
    styles: o = {}
  } = c;
  if (!t) return;
  const {
    prefix: u,
    iconName: X,
    icon: x
  } = t;
  return ln(v({
    type: "icon"
  }, t), () => (Dt("beforeDOMElementCreation", {
    iconDefinition: t,
    params: c
  }), Q.autoA11y && (b ? s["aria-labelledby"] = "".concat(Q.replacementClass, "-title-").concat(i || ze()) : (s["aria-hidden"] = "true", s.focusable = "false")), qd({
    icons: {
      main: sd(x),
      mask: n ? sd(n.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: u,
    iconName: X,
    transform: v(v({}, Kc), e),
    symbol: l,
    title: b,
    maskId: d,
    titleId: i,
    extra: {
      attributes: s,
      styles: o,
      classes: a
    }
  })));
};
var vx = {
  mixout() {
    return {
      icon: Fx(Vx)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.treeCallback = ei, t.nodeCallback = Ix, t;
      }
    };
  },
  provides(t) {
    t.i2svg = function(c) {
      const {
        node: e = Xc,
        callback: l = () => {
        }
      } = c;
      return ei(e, l);
    }, t.generateSvgReplacementMutation = function(c, e) {
      const {
        iconName: l,
        title: n,
        titleId: d,
        prefix: b,
        transform: i,
        symbol: a,
        mask: s,
        maskId: o,
        extra: u
      } = e;
      return new Promise((X, x) => {
        Promise.all([od(l, b), s.iconName ? od(s.iconName, s.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((H) => {
          let [r, G] = H;
          X([c, qd({
            icons: {
              main: r,
              mask: G
            },
            prefix: b,
            iconName: l,
            transform: i,
            symbol: a,
            maskId: o,
            title: n,
            titleId: d,
            extra: u,
            watchable: !0
          })]);
        }).catch(x);
      });
    }, t.generateAbstractIcon = function(c) {
      let {
        children: e,
        attributes: l,
        main: n,
        transform: d,
        styles: b
      } = c;
      const i = cn(b);
      i.length > 0 && (l.style = i);
      let a;
      return Kd(d) && (a = It("generateAbstractTransformGrouping", {
        main: n,
        transform: d,
        containerWidth: n.width,
        iconWidth: n.width
      })), e.push(a || n.icon), {
        children: e,
        attributes: l
      };
    };
  }
}, Bx = {
  mixout() {
    return {
      layer(t) {
        let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: e = []
        } = c;
        return ln({
          type: "layer"
        }, () => {
          Dt("beforeDOMElementCreation", {
            assembler: t,
            params: c
          });
          let l = [];
          return t((n) => {
            Array.isArray(n) ? n.map((d) => {
              l = l.concat(d.abstract);
            }) : l = l.concat(n.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(Q.cssPrefix, "-layers"), ...e].join(" ")
            },
            children: l
          }];
        });
      }
    };
  }
}, fx = {
  mixout() {
    return {
      counter(t) {
        let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: e = null,
          classes: l = [],
          attributes: n = {},
          styles: d = {}
        } = c;
        return ln({
          type: "counter",
          content: t
        }, () => (Dt("beforeDOMElementCreation", {
          content: t,
          params: c
        }), ax({
          content: t.toString(),
          title: e,
          extra: {
            attributes: n,
            styles: d,
            classes: ["".concat(Q.cssPrefix, "-layers-counter"), ...l]
          }
        })));
      }
    };
  }
}, Jx = {
  mixout() {
    return {
      text(t) {
        let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: e = Kc,
          title: l = null,
          classes: n = [],
          attributes: d = {},
          styles: b = {}
        } = c;
        return ln({
          type: "text",
          content: t
        }, () => (Dt("beforeDOMElementCreation", {
          content: t,
          params: c
        }), Kb({
          content: t,
          transform: v(v({}, Kc), e),
          title: l,
          extra: {
            attributes: d,
            styles: b,
            classes: ["".concat(Q.cssPrefix, "-layers-text"), ...n]
          }
        })));
      }
    };
  },
  provides(t) {
    t.generateLayersText = function(c, e) {
      const {
        title: l,
        transform: n,
        extra: d
      } = e;
      let b = null, i = null;
      if (zs) {
        const a = parseInt(getComputedStyle(c).fontSize, 10), s = c.getBoundingClientRect();
        b = s.width / a, i = s.height / a;
      }
      return Q.autoA11y && !l && (d.attributes["aria-hidden"] = "true"), Promise.resolve([c, Kb({
        content: c.innerHTML,
        width: b,
        height: i,
        transform: n,
        title: l,
        extra: d,
        watchable: !0
      })]);
    };
  }
};
const Yx = new RegExp('"', "ug"), li = [1105920, 1112319], ni = v(v(v(v({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), tX), RX), uX), xd = Object.keys(ni).reduce((t, c) => (t[c.toLowerCase()] = ni[c], t), {}), Nx = Object.keys(xd).reduce((t, c) => {
  const e = xd[c];
  return t[c] = e[900] || [...Object.entries(e)][0][1], t;
}, {});
function Cx(t) {
  const c = t.replace(Yx, ""), e = OX(c, 0), l = e >= li[0] && e <= li[1], n = c.length === 2 ? c[0] === c[1] : !1;
  return {
    value: dd(n ? c[0] : c),
    isSecondary: l || n
  };
}
function zx(t, c) {
  const e = t.replace(/^['"]|['"]$/g, "").toLowerCase(), l = parseInt(c), n = isNaN(l) ? "normal" : l;
  return (xd[e] || {})[n] || Nx[e];
}
function di(t, c) {
  const e = "".concat(ZX).concat(c.replace(":", "-"));
  return new Promise((l, n) => {
    if (t.getAttribute(e) !== null)
      return l();
    const b = be(t.children).filter((X) => X.getAttribute(td) === c)[0], i = pt.getComputedStyle(t, c), a = i.getPropertyValue("font-family"), s = a.match(yX), o = i.getPropertyValue("font-weight"), u = i.getPropertyValue("content");
    if (b && !s)
      return t.removeChild(b), l();
    if (s && u !== "none" && u !== "") {
      const X = i.getPropertyValue("content");
      let x = zx(a, o);
      const {
        value: H,
        isSecondary: r
      } = Cx(X), G = s[0].startsWith("FontAwesome");
      let m = $d(x, H), Z = m;
      if (G) {
        const h = MX(H);
        h.iconName && h.prefix && (m = h.iconName, x = h.prefix);
      }
      if (m && !r && (!b || b.getAttribute(Md) !== x || b.getAttribute(Ud) !== Z)) {
        t.setAttribute(e, Z), b && t.removeChild(b);
        const h = Wx(), {
          extra: g
        } = h;
        g.attributes[td] = c, od(m, x).then((R) => {
          const W = qd(v(v({}, h), {}, {
            icons: {
              main: R,
              mask: no()
            },
            prefix: x,
            iconName: Z,
            extra: g,
            watchable: !0
          })), p = Xc.createElementNS("http://www.w3.org/2000/svg", "svg");
          c === "::before" ? t.insertBefore(p, t.firstChild) : t.appendChild(p), p.outerHTML = W.map((y) => Me(y)).join(`
`), t.removeAttribute(e), l();
        }).catch(n);
      } else
        l();
    } else
      l();
  });
}
function wx(t) {
  return Promise.all([di(t, "::before"), di(t, "::after")]);
}
function Sx(t) {
  return t.parentNode !== document.head && !~hX.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(td) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function bi(t) {
  if (xt)
    return new Promise((c, e) => {
      const l = be(t.querySelectorAll("*")).filter(Sx).map(wx), n = cb.begin("searchPseudoElements");
      oo(), Promise.all(l).then(() => {
        n(), Xd(), c();
      }).catch(() => {
        n(), Xd(), e();
      });
    });
}
var Lx = {
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.pseudoElementsCallback = bi, t;
      }
    };
  },
  provides(t) {
    t.pseudoElements2svg = function(c) {
      const {
        node: e = Xc
      } = c;
      Q.searchPseudoElements && bi(e);
    };
  }
};
let ii = !1;
var kx = {
  mixout() {
    return {
      dom: {
        unwatch() {
          oo(), ii = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        ci(id("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Rx();
      },
      watch(t) {
        const {
          observeMutationsRoot: c
        } = t;
        ii ? Xd() : ci(id("mutationObserverCallbacks", {
          observeMutationsRoot: c
        }));
      }
    };
  }
};
const ai = (t) => {
  let c = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce((e, l) => {
    const n = l.toLowerCase().split("-"), d = n[0];
    let b = n.slice(1).join("-");
    if (d && b === "h")
      return e.flipX = !0, e;
    if (d && b === "v")
      return e.flipY = !0, e;
    if (b = parseFloat(b), isNaN(b))
      return e;
    switch (d) {
      case "grow":
        e.size = e.size + b;
        break;
      case "shrink":
        e.size = e.size - b;
        break;
      case "left":
        e.x = e.x - b;
        break;
      case "right":
        e.x = e.x + b;
        break;
      case "up":
        e.y = e.y - b;
        break;
      case "down":
        e.y = e.y + b;
        break;
      case "rotate":
        e.rotate = e.rotate + b;
        break;
    }
    return e;
  }, c);
};
var Ox = {
  mixout() {
    return {
      parse: {
        transform: (t) => ai(t)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(t, c) {
        const e = c.getAttribute("data-fa-transform");
        return e && (t.transform = ai(e)), t;
      }
    };
  },
  provides(t) {
    t.generateAbstractTransformGrouping = function(c) {
      let {
        main: e,
        transform: l,
        containerWidth: n,
        iconWidth: d
      } = c;
      const b = {
        transform: "translate(".concat(n / 2, " 256)")
      }, i = "translate(".concat(l.x * 32, ", ").concat(l.y * 32, ") "), a = "scale(".concat(l.size / 16 * (l.flipX ? -1 : 1), ", ").concat(l.size / 16 * (l.flipY ? -1 : 1), ") "), s = "rotate(".concat(l.rotate, " 0 0)"), o = {
        transform: "".concat(i, " ").concat(a, " ").concat(s)
      }, u = {
        transform: "translate(".concat(d / 2 * -1, " -256)")
      }, X = {
        outer: b,
        inner: o,
        path: u
      };
      return {
        tag: "g",
        attributes: v({}, X.outer),
        children: [{
          tag: "g",
          attributes: v({}, X.inner),
          children: [{
            tag: e.icon.tag,
            children: e.icon.children,
            attributes: v(v({}, e.icon.attributes), X.path)
          }]
        }]
      };
    };
  }
};
const gn = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function si(t) {
  let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || c) && (t.attributes.fill = "black"), t;
}
function Ax(t) {
  return t.tag === "g" ? t.children : [t];
}
var Dx = {
  hooks() {
    return {
      parseNodeAttributes(t, c) {
        const e = c.getAttribute("data-fa-mask"), l = e ? en(e.split(" ").map((n) => n.trim())) : no();
        return l.prefix || (l.prefix = yt()), t.mask = l, t.maskId = c.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides(t) {
    t.generateAbstractMask = function(c) {
      let {
        children: e,
        attributes: l,
        main: n,
        mask: d,
        maskId: b,
        transform: i
      } = c;
      const {
        width: a,
        icon: s
      } = n, {
        width: o,
        icon: u
      } = d, X = CX({
        transform: i,
        containerWidth: o,
        iconWidth: a
      }), x = {
        tag: "rect",
        attributes: v(v({}, gn), {}, {
          fill: "white"
        })
      }, H = s.children ? {
        children: s.children.map(si)
      } : {}, r = {
        tag: "g",
        attributes: v({}, X.inner),
        children: [si(v({
          tag: s.tag,
          attributes: v(v({}, s.attributes), X.path)
        }, H))]
      }, G = {
        tag: "g",
        attributes: v({}, X.outer),
        children: [r]
      }, m = "mask-".concat(b || ze()), Z = "clip-".concat(b || ze()), h = {
        tag: "mask",
        attributes: v(v({}, gn), {}, {
          id: m,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [x, G]
      }, g = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: Z
          },
          children: Ax(u)
        }, h]
      };
      return e.push(g, {
        tag: "rect",
        attributes: v({
          fill: "currentColor",
          "clip-path": "url(#".concat(Z, ")"),
          mask: "url(#".concat(m, ")")
        }, gn)
      }), {
        children: e,
        attributes: l
      };
    };
  }
}, Qx = {
  provides(t) {
    let c = !1;
    pt.matchMedia && (c = pt.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      const e = [], l = {
        fill: "currentColor"
      }, n = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      e.push({
        tag: "path",
        attributes: v(v({}, l), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const d = v(v({}, n), {}, {
        attributeName: "opacity"
      }), b = {
        tag: "circle",
        attributes: v(v({}, l), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return c || b.children.push({
        tag: "animate",
        attributes: v(v({}, n), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: v(v({}, d), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), e.push(b), e.push({
        tag: "path",
        attributes: v(v({}, l), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: c ? [] : [{
          tag: "animate",
          attributes: v(v({}, d), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), c || e.push({
        tag: "path",
        attributes: v(v({}, l), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: v(v({}, d), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: e
      };
    };
  }
}, Tx = {
  hooks() {
    return {
      parseNodeAttributes(t, c) {
        const e = c.getAttribute("data-fa-symbol"), l = e === null ? !1 : e === "" ? !0 : e;
        return t.symbol = l, t;
      }
    };
  }
}, jx = [SX, vx, Bx, fx, Jx, Lx, kx, Ox, Dx, Qx, Tx];
tx(jx, {
  mixoutsTo: Oc
});
Oc.noAuto;
Oc.config;
Oc.library;
Oc.dom;
const rd = Oc.parse;
Oc.findIconDefinition;
Oc.toHtml;
const Mx = Oc.icon;
Oc.layer;
Oc.text;
Oc.counter;
var $e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ux(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var qe = { exports: {} }, cl = { exports: {} }, ac = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oi;
function Px() {
  if (oi) return ac;
  oi = 1;
  var t = typeof Symbol == "function" && Symbol.for, c = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, n = t ? Symbol.for("react.strict_mode") : 60108, d = t ? Symbol.for("react.profiler") : 60114, b = t ? Symbol.for("react.provider") : 60109, i = t ? Symbol.for("react.context") : 60110, a = t ? Symbol.for("react.async_mode") : 60111, s = t ? Symbol.for("react.concurrent_mode") : 60111, o = t ? Symbol.for("react.forward_ref") : 60112, u = t ? Symbol.for("react.suspense") : 60113, X = t ? Symbol.for("react.suspense_list") : 60120, x = t ? Symbol.for("react.memo") : 60115, H = t ? Symbol.for("react.lazy") : 60116, r = t ? Symbol.for("react.block") : 60121, G = t ? Symbol.for("react.fundamental") : 60117, m = t ? Symbol.for("react.responder") : 60118, Z = t ? Symbol.for("react.scope") : 60119;
  function h(R) {
    if (typeof R == "object" && R !== null) {
      var W = R.$$typeof;
      switch (W) {
        case c:
          switch (R = R.type, R) {
            case a:
            case s:
            case l:
            case d:
            case n:
            case u:
              return R;
            default:
              switch (R = R && R.$$typeof, R) {
                case i:
                case o:
                case H:
                case x:
                case b:
                  return R;
                default:
                  return W;
              }
          }
        case e:
          return W;
      }
    }
  }
  function g(R) {
    return h(R) === s;
  }
  return ac.AsyncMode = a, ac.ConcurrentMode = s, ac.ContextConsumer = i, ac.ContextProvider = b, ac.Element = c, ac.ForwardRef = o, ac.Fragment = l, ac.Lazy = H, ac.Memo = x, ac.Portal = e, ac.Profiler = d, ac.StrictMode = n, ac.Suspense = u, ac.isAsyncMode = function(R) {
    return g(R) || h(R) === a;
  }, ac.isConcurrentMode = g, ac.isContextConsumer = function(R) {
    return h(R) === i;
  }, ac.isContextProvider = function(R) {
    return h(R) === b;
  }, ac.isElement = function(R) {
    return typeof R == "object" && R !== null && R.$$typeof === c;
  }, ac.isForwardRef = function(R) {
    return h(R) === o;
  }, ac.isFragment = function(R) {
    return h(R) === l;
  }, ac.isLazy = function(R) {
    return h(R) === H;
  }, ac.isMemo = function(R) {
    return h(R) === x;
  }, ac.isPortal = function(R) {
    return h(R) === e;
  }, ac.isProfiler = function(R) {
    return h(R) === d;
  }, ac.isStrictMode = function(R) {
    return h(R) === n;
  }, ac.isSuspense = function(R) {
    return h(R) === u;
  }, ac.isValidElementType = function(R) {
    return typeof R == "string" || typeof R == "function" || R === l || R === s || R === d || R === n || R === u || R === X || typeof R == "object" && R !== null && (R.$$typeof === H || R.$$typeof === x || R.$$typeof === b || R.$$typeof === i || R.$$typeof === o || R.$$typeof === G || R.$$typeof === m || R.$$typeof === Z || R.$$typeof === r);
  }, ac.typeOf = h, ac;
}
var sc = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ui;
function Ex() {
  return ui || (ui = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, c = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, n = t ? Symbol.for("react.strict_mode") : 60108, d = t ? Symbol.for("react.profiler") : 60114, b = t ? Symbol.for("react.provider") : 60109, i = t ? Symbol.for("react.context") : 60110, a = t ? Symbol.for("react.async_mode") : 60111, s = t ? Symbol.for("react.concurrent_mode") : 60111, o = t ? Symbol.for("react.forward_ref") : 60112, u = t ? Symbol.for("react.suspense") : 60113, X = t ? Symbol.for("react.suspense_list") : 60120, x = t ? Symbol.for("react.memo") : 60115, H = t ? Symbol.for("react.lazy") : 60116, r = t ? Symbol.for("react.block") : 60121, G = t ? Symbol.for("react.fundamental") : 60117, m = t ? Symbol.for("react.responder") : 60118, Z = t ? Symbol.for("react.scope") : 60119;
    function h(z) {
      return typeof z == "string" || typeof z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      z === l || z === s || z === d || z === n || z === u || z === X || typeof z == "object" && z !== null && (z.$$typeof === H || z.$$typeof === x || z.$$typeof === b || z.$$typeof === i || z.$$typeof === o || z.$$typeof === G || z.$$typeof === m || z.$$typeof === Z || z.$$typeof === r);
    }
    function g(z) {
      if (typeof z == "object" && z !== null) {
        var Ac = z.$$typeof;
        switch (Ac) {
          case c:
            var ft = z.type;
            switch (ft) {
              case a:
              case s:
              case l:
              case d:
              case n:
              case u:
                return ft;
              default:
                var Ee = ft && ft.$$typeof;
                switch (Ee) {
                  case i:
                  case o:
                  case H:
                  case x:
                  case b:
                    return Ee;
                  default:
                    return Ac;
                }
            }
          case e:
            return Ac;
        }
      }
    }
    var R = a, W = s, p = i, y = b, V = c, C = o, J = l, Y = H, K = x, $ = e, S = d, L = n, E = u, cc = !1;
    function ic(z) {
      return cc || (cc = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), F(z) || g(z) === a;
    }
    function F(z) {
      return g(z) === s;
    }
    function N(z) {
      return g(z) === i;
    }
    function w(z) {
      return g(z) === b;
    }
    function D(z) {
      return typeof z == "object" && z !== null && z.$$typeof === c;
    }
    function A(z) {
      return g(z) === o;
    }
    function P(z) {
      return g(z) === l;
    }
    function O(z) {
      return g(z) === H;
    }
    function k(z) {
      return g(z) === x;
    }
    function U(z) {
      return g(z) === e;
    }
    function q(z) {
      return g(z) === d;
    }
    function ec(z) {
      return g(z) === n;
    }
    function Fc(z) {
      return g(z) === u;
    }
    sc.AsyncMode = R, sc.ConcurrentMode = W, sc.ContextConsumer = p, sc.ContextProvider = y, sc.Element = V, sc.ForwardRef = C, sc.Fragment = J, sc.Lazy = Y, sc.Memo = K, sc.Portal = $, sc.Profiler = S, sc.StrictMode = L, sc.Suspense = E, sc.isAsyncMode = ic, sc.isConcurrentMode = F, sc.isContextConsumer = N, sc.isContextProvider = w, sc.isElement = D, sc.isForwardRef = A, sc.isFragment = P, sc.isLazy = O, sc.isMemo = k, sc.isPortal = U, sc.isProfiler = q, sc.isStrictMode = ec, sc.isSuspense = Fc, sc.isValidElementType = h, sc.typeOf = g;
  }()), sc;
}
var Xi;
function Xo() {
  return Xi || (Xi = 1, process.env.NODE_ENV === "production" ? cl.exports = Px() : cl.exports = Ex()), cl.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var hn, xi;
function Kx() {
  if (xi) return hn;
  xi = 1;
  var t = Object.getOwnPropertySymbols, c = Object.prototype.hasOwnProperty, e = Object.prototype.propertyIsEnumerable;
  function l(d) {
    if (d == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(d);
  }
  function n() {
    try {
      if (!Object.assign)
        return !1;
      var d = new String("abc");
      if (d[5] = "de", Object.getOwnPropertyNames(d)[0] === "5")
        return !1;
      for (var b = {}, i = 0; i < 10; i++)
        b["_" + String.fromCharCode(i)] = i;
      var a = Object.getOwnPropertyNames(b).map(function(o) {
        return b[o];
      });
      if (a.join("") !== "0123456789")
        return !1;
      var s = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(o) {
        s[o] = o;
      }), Object.keys(Object.assign({}, s)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return hn = n() ? Object.assign : function(d, b) {
    for (var i, a = l(d), s, o = 1; o < arguments.length; o++) {
      i = Object(arguments[o]);
      for (var u in i)
        c.call(i, u) && (a[u] = i[u]);
      if (t) {
        s = t(i);
        for (var X = 0; X < s.length; X++)
          e.call(i, s[X]) && (a[s[X]] = i[s[X]]);
      }
    }
    return a;
  }, hn;
}
var Wn, ri;
function eb() {
  if (ri) return Wn;
  ri = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wn = t, Wn;
}
var pn, Gi;
function xo() {
  return Gi || (Gi = 1, pn = Function.call.bind(Object.prototype.hasOwnProperty)), pn;
}
var yn, Hi;
function _x() {
  if (Hi) return yn;
  Hi = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var c = /* @__PURE__ */ eb(), e = {}, l = /* @__PURE__ */ xo();
    t = function(d) {
      var b = "Warning: " + d;
      typeof console < "u" && console.error(b);
      try {
        throw new Error(b);
      } catch {
      }
    };
  }
  function n(d, b, i, a, s) {
    if (process.env.NODE_ENV !== "production") {
      for (var o in d)
        if (l(d, o)) {
          var u;
          try {
            if (typeof d[o] != "function") {
              var X = Error(
                (a || "React class") + ": " + i + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw X.name = "Invariant Violation", X;
            }
            u = d[o](b, o, a, i, null, c);
          } catch (H) {
            u = H;
          }
          if (u && !(u instanceof Error) && t(
            (a || "React class") + ": type specification of " + i + " `" + o + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in e)) {
            e[u.message] = !0;
            var x = s ? s() : "";
            t(
              "Failed " + i + " type: " + u.message + (x ?? "")
            );
          }
        }
    }
  }
  return n.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (e = {});
  }, yn = n, yn;
}
var In, mi;
function $x() {
  if (mi) return In;
  mi = 1;
  var t = Xo(), c = Kx(), e = /* @__PURE__ */ eb(), l = /* @__PURE__ */ xo(), n = /* @__PURE__ */ _x(), d = function() {
  };
  process.env.NODE_ENV !== "production" && (d = function(i) {
    var a = "Warning: " + i;
    typeof console < "u" && console.error(a);
    try {
      throw new Error(a);
    } catch {
    }
  });
  function b() {
    return null;
  }
  return In = function(i, a) {
    var s = typeof Symbol == "function" && Symbol.iterator, o = "@@iterator";
    function u(F) {
      var N = F && (s && F[s] || F[o]);
      if (typeof N == "function")
        return N;
    }
    var X = "<<anonymous>>", x = {
      array: m("array"),
      bigint: m("bigint"),
      bool: m("boolean"),
      func: m("function"),
      number: m("number"),
      object: m("object"),
      string: m("string"),
      symbol: m("symbol"),
      any: Z(),
      arrayOf: h,
      element: g(),
      elementType: R(),
      instanceOf: W,
      node: C(),
      objectOf: y,
      oneOf: p,
      oneOfType: V,
      shape: Y,
      exact: K
    };
    function H(F, N) {
      return F === N ? F !== 0 || 1 / F === 1 / N : F !== F && N !== N;
    }
    function r(F, N) {
      this.message = F, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    r.prototype = Error.prototype;
    function G(F) {
      if (process.env.NODE_ENV !== "production")
        var N = {}, w = 0;
      function D(P, O, k, U, q, ec, Fc) {
        if (U = U || X, ec = ec || k, Fc !== e) {
          if (a) {
            var z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw z.name = "Invariant Violation", z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ac = U + ":" + k;
            !N[Ac] && // Avoid spamming the console because they are often not actionable except for lib authors
            w < 3 && (d(
              "You are manually calling a React.PropTypes validation function for the `" + ec + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[Ac] = !0, w++);
          }
        }
        return O[k] == null ? P ? O[k] === null ? new r("The " + q + " `" + ec + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new r("The " + q + " `" + ec + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : F(O, k, U, q, ec);
      }
      var A = D.bind(null, !1);
      return A.isRequired = D.bind(null, !0), A;
    }
    function m(F) {
      function N(w, D, A, P, O, k) {
        var U = w[D], q = L(U);
        if (q !== F) {
          var ec = E(U);
          return new r(
            "Invalid " + P + " `" + O + "` of type " + ("`" + ec + "` supplied to `" + A + "`, expected ") + ("`" + F + "`."),
            { expectedType: F }
          );
        }
        return null;
      }
      return G(N);
    }
    function Z() {
      return G(b);
    }
    function h(F) {
      function N(w, D, A, P, O) {
        if (typeof F != "function")
          return new r("Property `" + O + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var k = w[D];
        if (!Array.isArray(k)) {
          var U = L(k);
          return new r("Invalid " + P + " `" + O + "` of type " + ("`" + U + "` supplied to `" + A + "`, expected an array."));
        }
        for (var q = 0; q < k.length; q++) {
          var ec = F(k, q, A, P, O + "[" + q + "]", e);
          if (ec instanceof Error)
            return ec;
        }
        return null;
      }
      return G(N);
    }
    function g() {
      function F(N, w, D, A, P) {
        var O = N[w];
        if (!i(O)) {
          var k = L(O);
          return new r("Invalid " + A + " `" + P + "` of type " + ("`" + k + "` supplied to `" + D + "`, expected a single ReactElement."));
        }
        return null;
      }
      return G(F);
    }
    function R() {
      function F(N, w, D, A, P) {
        var O = N[w];
        if (!t.isValidElementType(O)) {
          var k = L(O);
          return new r("Invalid " + A + " `" + P + "` of type " + ("`" + k + "` supplied to `" + D + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return G(F);
    }
    function W(F) {
      function N(w, D, A, P, O) {
        if (!(w[D] instanceof F)) {
          var k = F.name || X, U = ic(w[D]);
          return new r("Invalid " + P + " `" + O + "` of type " + ("`" + U + "` supplied to `" + A + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return G(N);
    }
    function p(F) {
      if (!Array.isArray(F))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? d(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : d("Invalid argument supplied to oneOf, expected an array.")), b;
      function N(w, D, A, P, O) {
        for (var k = w[D], U = 0; U < F.length; U++)
          if (H(k, F[U]))
            return null;
        var q = JSON.stringify(F, function(Fc, z) {
          var Ac = E(z);
          return Ac === "symbol" ? String(z) : z;
        });
        return new r("Invalid " + P + " `" + O + "` of value `" + String(k) + "` " + ("supplied to `" + A + "`, expected one of " + q + "."));
      }
      return G(N);
    }
    function y(F) {
      function N(w, D, A, P, O) {
        if (typeof F != "function")
          return new r("Property `" + O + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var k = w[D], U = L(k);
        if (U !== "object")
          return new r("Invalid " + P + " `" + O + "` of type " + ("`" + U + "` supplied to `" + A + "`, expected an object."));
        for (var q in k)
          if (l(k, q)) {
            var ec = F(k, q, A, P, O + "." + q, e);
            if (ec instanceof Error)
              return ec;
          }
        return null;
      }
      return G(N);
    }
    function V(F) {
      if (!Array.isArray(F))
        return process.env.NODE_ENV !== "production" && d("Invalid argument supplied to oneOfType, expected an instance of array."), b;
      for (var N = 0; N < F.length; N++) {
        var w = F[N];
        if (typeof w != "function")
          return d(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + cc(w) + " at index " + N + "."
          ), b;
      }
      function D(A, P, O, k, U) {
        for (var q = [], ec = 0; ec < F.length; ec++) {
          var Fc = F[ec], z = Fc(A, P, O, k, U, e);
          if (z == null)
            return null;
          z.data && l(z.data, "expectedType") && q.push(z.data.expectedType);
        }
        var Ac = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new r("Invalid " + k + " `" + U + "` supplied to " + ("`" + O + "`" + Ac + "."));
      }
      return G(D);
    }
    function C() {
      function F(N, w, D, A, P) {
        return $(N[w]) ? null : new r("Invalid " + A + " `" + P + "` supplied to " + ("`" + D + "`, expected a ReactNode."));
      }
      return G(F);
    }
    function J(F, N, w, D, A) {
      return new r(
        (F || "React class") + ": " + N + " type `" + w + "." + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function Y(F) {
      function N(w, D, A, P, O) {
        var k = w[D], U = L(k);
        if (U !== "object")
          return new r("Invalid " + P + " `" + O + "` of type `" + U + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var q in F) {
          var ec = F[q];
          if (typeof ec != "function")
            return J(A, P, O, q, E(ec));
          var Fc = ec(k, q, A, P, O + "." + q, e);
          if (Fc)
            return Fc;
        }
        return null;
      }
      return G(N);
    }
    function K(F) {
      function N(w, D, A, P, O) {
        var k = w[D], U = L(k);
        if (U !== "object")
          return new r("Invalid " + P + " `" + O + "` of type `" + U + "` " + ("supplied to `" + A + "`, expected `object`."));
        var q = c({}, w[D], F);
        for (var ec in q) {
          var Fc = F[ec];
          if (l(F, ec) && typeof Fc != "function")
            return J(A, P, O, ec, E(Fc));
          if (!Fc)
            return new r(
              "Invalid " + P + " `" + O + "` key `" + ec + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(w[D], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(F), null, "  ")
            );
          var z = Fc(k, ec, A, P, O + "." + ec, e);
          if (z)
            return z;
        }
        return null;
      }
      return G(N);
    }
    function $(F) {
      switch (typeof F) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !F;
        case "object":
          if (Array.isArray(F))
            return F.every($);
          if (F === null || i(F))
            return !0;
          var N = u(F);
          if (N) {
            var w = N.call(F), D;
            if (N !== F.entries) {
              for (; !(D = w.next()).done; )
                if (!$(D.value))
                  return !1;
            } else
              for (; !(D = w.next()).done; ) {
                var A = D.value;
                if (A && !$(A[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function S(F, N) {
      return F === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function L(F) {
      var N = typeof F;
      return Array.isArray(F) ? "array" : F instanceof RegExp ? "object" : S(N, F) ? "symbol" : N;
    }
    function E(F) {
      if (typeof F > "u" || F === null)
        return "" + F;
      var N = L(F);
      if (N === "object") {
        if (F instanceof Date)
          return "date";
        if (F instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function cc(F) {
      var N = E(F);
      switch (N) {
        case "array":
        case "object":
          return "an " + N;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + N;
        default:
          return N;
      }
    }
    function ic(F) {
      return !F.constructor || !F.constructor.name ? X : F.constructor.name;
    }
    return x.checkPropTypes = n, x.resetWarningCache = n.resetWarningCache, x.PropTypes = x, x;
  }, In;
}
var Fn, Ri;
function qx() {
  if (Ri) return Fn;
  Ri = 1;
  var t = /* @__PURE__ */ eb();
  function c() {
  }
  function e() {
  }
  return e.resetWarningCache = c, Fn = function() {
    function l(b, i, a, s, o, u) {
      if (u !== t) {
        var X = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw X.name = "Invariant Violation", X;
      }
    }
    l.isRequired = l;
    function n() {
      return l;
    }
    var d = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: n,
      element: l,
      elementType: l,
      instanceOf: n,
      node: l,
      objectOf: n,
      oneOf: n,
      oneOfType: n,
      shape: n,
      exact: n,
      checkPropTypes: e,
      resetWarningCache: c
    };
    return d.PropTypes = d, d;
  }, Fn;
}
var Zi;
function cr() {
  if (Zi) return qe.exports;
  if (Zi = 1, process.env.NODE_ENV !== "production") {
    var t = Xo(), c = !0;
    qe.exports = /* @__PURE__ */ $x()(t.isElement, c);
  } else
    qe.exports = /* @__PURE__ */ qx()();
  return qe.exports;
}
var tr = /* @__PURE__ */ cr();
const lc = /* @__PURE__ */ Ux(tr);
function gi(t, c) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    c && (l = l.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), e.push.apply(e, l);
  }
  return e;
}
function Ec(t) {
  for (var c = 1; c < arguments.length; c++) {
    var e = arguments[c] != null ? arguments[c] : {};
    c % 2 ? gi(Object(e), !0).forEach(function(l) {
      _t(t, l, e[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : gi(Object(e)).forEach(function(l) {
      Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(e, l));
    });
  }
  return t;
}
function Nl(t) {
  "@babel/helpers - typeof";
  return Nl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
    return typeof c;
  } : function(c) {
    return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
  }, Nl(t);
}
function _t(t, c, e) {
  return c in t ? Object.defineProperty(t, c, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[c] = e, t;
}
function er(t, c) {
  if (t == null) return {};
  var e = {}, l = Object.keys(t), n, d;
  for (d = 0; d < l.length; d++)
    n = l[d], !(c.indexOf(n) >= 0) && (e[n] = t[n]);
  return e;
}
function lr(t, c) {
  if (t == null) return {};
  var e = er(t, c), l, n;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(t);
    for (n = 0; n < d.length; n++)
      l = d[n], !(c.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(t, l) && (e[l] = t[l]);
  }
  return e;
}
function Gd(t) {
  return nr(t) || dr(t) || br(t) || ir();
}
function nr(t) {
  if (Array.isArray(t)) return Hd(t);
}
function dr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function br(t, c) {
  if (t) {
    if (typeof t == "string") return Hd(t, c);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Hd(t, c);
  }
}
function Hd(t, c) {
  (c == null || c > t.length) && (c = t.length);
  for (var e = 0, l = new Array(c); e < c; e++) l[e] = t[e];
  return l;
}
function ir() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ar(t) {
  var c, e = t.beat, l = t.fade, n = t.beatFade, d = t.bounce, b = t.shake, i = t.flash, a = t.spin, s = t.spinPulse, o = t.spinReverse, u = t.pulse, X = t.fixedWidth, x = t.inverse, H = t.border, r = t.listItem, G = t.flip, m = t.size, Z = t.rotation, h = t.pull, g = (c = {
    "fa-beat": e,
    "fa-fade": l,
    "fa-beat-fade": n,
    "fa-bounce": d,
    "fa-shake": b,
    "fa-flash": i,
    "fa-spin": a,
    "fa-spin-reverse": o,
    "fa-spin-pulse": s,
    "fa-pulse": u,
    "fa-fw": X,
    "fa-inverse": x,
    "fa-border": H,
    "fa-li": r,
    "fa-flip": G === !0,
    "fa-flip-horizontal": G === "horizontal" || G === "both",
    "fa-flip-vertical": G === "vertical" || G === "both"
  }, _t(c, "fa-".concat(m), typeof m < "u" && m !== null), _t(c, "fa-rotate-".concat(Z), typeof Z < "u" && Z !== null && Z !== 0), _t(c, "fa-pull-".concat(h), typeof h < "u" && h !== null), _t(c, "fa-swap-opacity", t.swapOpacity), c);
  return Object.keys(g).map(function(R) {
    return g[R] ? R : null;
  }).filter(function(R) {
    return R;
  });
}
function sr(t) {
  return t = t - 0, t === t;
}
function ro(t) {
  return sr(t) ? t : (t = t.replace(/[\-_\s]+(.)?/g, function(c, e) {
    return e ? e.toUpperCase() : "";
  }), t.substr(0, 1).toLowerCase() + t.substr(1));
}
var or = ["style"];
function ur(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function Xr(t) {
  return t.split(";").map(function(c) {
    return c.trim();
  }).filter(function(c) {
    return c;
  }).reduce(function(c, e) {
    var l = e.indexOf(":"), n = ro(e.slice(0, l)), d = e.slice(l + 1).trim();
    return n.startsWith("webkit") ? c[ur(n)] = d : c[n] = d, c;
  }, {});
}
function Go(t, c) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof c == "string")
    return c;
  var l = (c.children || []).map(function(a) {
    return Go(t, a);
  }), n = Object.keys(c.attributes || {}).reduce(function(a, s) {
    var o = c.attributes[s];
    switch (s) {
      case "class":
        a.attrs.className = o, delete c.attributes.class;
        break;
      case "style":
        a.attrs.style = Xr(o);
        break;
      default:
        s.indexOf("aria-") === 0 || s.indexOf("data-") === 0 ? a.attrs[s.toLowerCase()] = o : a.attrs[ro(s)] = o;
    }
    return a;
  }, {
    attrs: {}
  }), d = e.style, b = d === void 0 ? {} : d, i = lr(e, or);
  return n.attrs.style = Ec(Ec({}, n.attrs.style), b), t.apply(void 0, [c.tag, Ec(Ec({}, n.attrs), i)].concat(Gd(l)));
}
var Ho = !1;
try {
  Ho = process.env.NODE_ENV === "production";
} catch {
}
function xr() {
  if (!Ho && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function hi(t) {
  if (t && Nl(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (rd.icon)
    return rd.icon(t);
  if (t === null)
    return null;
  if (t && Nl(t) === "object" && t.prefix && t.iconName)
    return t;
  if (Array.isArray(t) && t.length === 2)
    return {
      prefix: t[0],
      iconName: t[1]
    };
  if (typeof t == "string")
    return {
      prefix: "fas",
      iconName: t
    };
}
function Vn(t, c) {
  return Array.isArray(c) && c.length > 0 || !Array.isArray(c) && c ? _t({}, t, c) : {};
}
var Wi = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, nc = /* @__PURE__ */ vc.forwardRef(function(t, c) {
  var e = Ec(Ec({}, Wi), t), l = e.icon, n = e.mask, d = e.symbol, b = e.className, i = e.title, a = e.titleId, s = e.maskId, o = hi(l), u = Vn("classes", [].concat(Gd(ar(e)), Gd((b || "").split(" ")))), X = Vn("transform", typeof e.transform == "string" ? rd.transform(e.transform) : e.transform), x = Vn("mask", hi(n)), H = Mx(o, Ec(Ec(Ec(Ec({}, u), X), x), {}, {
    symbol: d,
    title: i,
    titleId: a,
    maskId: s
  }));
  if (!H)
    return xr("Could not find icon", o), null;
  var r = H.abstract, G = {
    ref: c
  };
  return Object.keys(e).forEach(function(m) {
    Wi.hasOwnProperty(m) || (G[m] = e[m]);
  }), rr(r[0], G);
});
nc.displayName = "FontAwesomeIcon";
nc.propTypes = {
  beat: lc.bool,
  border: lc.bool,
  beatFade: lc.bool,
  bounce: lc.bool,
  className: lc.string,
  fade: lc.bool,
  flash: lc.bool,
  mask: lc.oneOfType([lc.object, lc.array, lc.string]),
  maskId: lc.string,
  fixedWidth: lc.bool,
  inverse: lc.bool,
  flip: lc.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: lc.oneOfType([lc.object, lc.array, lc.string]),
  listItem: lc.bool,
  pull: lc.oneOf(["right", "left"]),
  pulse: lc.bool,
  rotation: lc.oneOf([0, 90, 180, 270]),
  shake: lc.bool,
  size: lc.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: lc.bool,
  spinPulse: lc.bool,
  spinReverse: lc.bool,
  symbol: lc.oneOfType([lc.bool, lc.string]),
  title: lc.string,
  titleId: lc.string,
  transform: lc.oneOfType([lc.string, lc.object]),
  swapOpacity: lc.bool
};
var rr = Go.bind(null, vc.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Gr = {
  prefix: "fas",
  iconName: "right-from-bracket",
  icon: [512, 512, ["sign-out-alt"], "f2f5", "M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]
}, Hr = {
  prefix: "fas",
  iconName: "reply",
  icon: [512, 512, [61714, "mail-reply"], "f3e5", "M205 34.8c11.5 5.1 19 16.6 19 29.2l0 64 112 0c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96l-96 0 0 64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"]
}, mr = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
}, Rr = {
  prefix: "fas",
  iconName: "hand",
  icon: [512, 512, [129306, 9995, "hand-paper"], "f256", "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 272c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208z"]
}, Zr = {
  prefix: "fas",
  iconName: "arrow-up-from-bracket",
  icon: [448, 512, [], "e09a", "M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"]
}, gr = {
  prefix: "fas",
  iconName: "chart-simple",
  icon: [448, 512, [], "e473", "M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"]
}, hr = {
  prefix: "fas",
  iconName: "user",
  icon: [448, 512, [128100, 62144], "f007", "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]
}, Wr = {
  prefix: "fas",
  iconName: "globe",
  icon: [512, 512, [127760], "f0ac", "M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"]
}, pr = {
  prefix: "fas",
  iconName: "computer-mouse",
  icon: [384, 512, [128433, "mouse"], "f8cc", "M0 192l176 0L176 0 160 0C71.6 0 0 71.6 0 160l0 32zm0 32L0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160l0-128-192 0L0 224zm384-32l0-32C384 71.6 312.4 0 224 0L208 0l0 192 176 0z"]
}, yr = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Ir = {
  prefix: "fas",
  iconName: "question",
  icon: [320, 512, [10067, 10068, 61736], "3f", "M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]
}, Fr = {
  prefix: "fas",
  iconName: "wallet",
  icon: [512, 512, [], "f555", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Vr = {
  prefix: "fas",
  iconName: "pen",
  icon: [512, 512, [128394], "f304", "M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]
}, vr = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, Br = {
  prefix: "fas",
  iconName: "paperclip",
  icon: [448, 512, [128206], "f0c6", "M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"]
}, fr = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Jr = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, Yr = {
  prefix: "fas",
  iconName: "caret-down",
  icon: [320, 512, [], "f0d7", "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]
}, Nr = {
  prefix: "fas",
  iconName: "ellipsis",
  icon: [448, 512, ["ellipsis-h"], "f141", "M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]
}, Cr = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, zr = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, wr = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, Sr = wr, Lr = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, kr = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, Or = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, Ar = {
  prefix: "fas",
  iconName: "face-smile",
  icon: [512, 512, [128578, "smile"], "f118", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Dr = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, Qr = {
  prefix: "fas",
  iconName: "vial-circle-check",
  icon: [512, 512, [], "e596", "M0 64C0 46.3 14.3 32 32 32l64 0 64 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 170.8c-20.2 28.6-32 63.5-32 101.2c0 25.2 5.3 49.1 14.8 70.8C189.5 463.7 160.6 480 128 480c-53 0-96-43-96-96L32 96C14.3 96 0 81.7 0 64zM96 96l0 96 64 0 0-96L96 96zM224 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L352 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z"]
}, Tr = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, jr = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "ev6v9wi0"
} : {
  target: "ev6v9wi0",
  label: "PlayCircle"
})("background-color:", (t) => t.theme.colors.background.overlay, ";width:95%;height:100%;padding-left:5%;border-radius:50%;display:flex;font-size:45%;align-items:center;justify-content:center;" + (process.env.NODE_ENV === "production" ? "" : ""));
function Mr() {
  return /* @__PURE__ */ I(jr, { children: /* @__PURE__ */ I(nc, { icon: Cr }) });
}
const Ur = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1duvvli0"
} : {
  target: "e1duvvli0",
  label: "AddCircle"
})("background-color:", (t) => t.theme.colors.tint.purple, ";width:100%;height:100%;border-radius:50%;display:flex;font-size:75%;align-items:center;justify-content:center;" + (process.env.NODE_ENV === "production" ? "" : ""));
function Pr() {
  return /* @__PURE__ */ I(Ur, { children: /* @__PURE__ */ I(nc, { icon: Sr }) });
}
function Er() {
  return /* @__PURE__ */ I("svg", { width: "24", height: "26", viewBox: "-2 0 24 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "filled", children: /* @__PURE__ */ I("path", { d: "M1.29127 16.6837C1.29127 21.7315 4.60747 24.8421 9.27364 24.8421C12.9567 24.8421 15.1137 23.3895 16.6691 20.6456C17.6375 18.9727 18.3566 16.8745 19.1195 14.3947C19.4717 13.2795 20 11.8415 20 11.1959C20 10.5649 19.5305 10.1247 18.8408 10.1247C18.0336 10.1247 17.5935 10.6383 16.9919 11.8415L15.3631 15.1577C15.2163 15.4805 15.0549 15.6273 14.8789 15.6273C14.6882 15.6273 14.5561 15.5098 14.5561 15.1431V2.84666C14.5561 2.12766 13.9839 1.55539 13.2649 1.55539C12.5604 1.55539 11.9736 2.12766 11.9736 2.84666V11.6801C11.6801 11.5774 11.3573 11.4893 11.0051 11.4306V1.29127C11.0051 0.586939 10.4182 0 9.71384 0C8.99484 0 8.42257 0.586939 8.42257 1.29127V11.3133C8.08508 11.3426 7.76227 11.3866 7.42478 11.4453V2.20102C7.42478 1.48202 6.85252 0.909755 6.13352 0.909755C5.42919 0.909755 4.84225 1.48202 4.84225 2.20102V12.2524C4.50476 12.4284 4.18194 12.6192 3.85912 12.81V5.81069C3.85912 5.10636 3.28686 4.51944 2.58253 4.51944C1.86353 4.51944 1.29127 5.10636 1.29127 5.81069V16.6837Z" }) });
}
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Kr = {
  prefix: "far",
  iconName: "calendar-days",
  icon: [448, 512, ["calendar-alt"], "f073", "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z"]
}, _r = {
  prefix: "far",
  iconName: "user",
  icon: [448, 512, [128100, 62144], "f007", "M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"]
}, $r = {
  prefix: "far",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"]
}, qr = {
  prefix: "far",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const cG = {
  prefix: "fab",
  iconName: "app-store-ios",
  icon: [448, 512, [], "f370", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"]
}, tG = {
  prefix: "fab",
  iconName: "google-play",
  icon: [512, 512, [], "f3ab", "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"]
}, eG = Xt`
	from {
		transform: scale(1) rotate(0deg);
	}

	to {
		transform: scale(1) rotate(360deg);
	}
`, lG = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e17ja1h0"
} : {
  target: "e17ja1h0",
  label: "SpinnerContainer"
})("animation:", eG, " 1s infinite linear;" + (process.env.NODE_ENV === "production" ? "" : ""));
function nG() {
  return /* @__PURE__ */ I(lG, { children: /* @__PURE__ */ I(nc, { icon: Dr }) });
}
function dG() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const bG = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e9jpb7a0"
} : {
  target: "e9jpb7a0",
  label: "AccountContainer"
})(process.env.NODE_ENV === "production" ? {
  name: "1ryhyzg",
  styles: "width:24px;height:24px;display:flex;justify-content:center;align-items:center;>svg{transform:scale(115%);}"
} : {
  name: "1ryhyzg",
  styles: "width:24px;height:24px;display:flex;justify-content:center;align-items:center;>svg{transform:scale(115%);}",
  toString: dG
});
function iG() {
  return /* @__PURE__ */ I(bG, { children: /* @__PURE__ */ I(nc, { icon: hr }) });
}
const aG = {
  OneSec: /* @__PURE__ */ I(Q0, {}),
  Suggestions: /* @__PURE__ */ I(T0, {}),
  Settings: /* @__PURE__ */ I(j0, {}),
  Play: /* @__PURE__ */ I(Mr, {}),
  Add: /* @__PURE__ */ I(Pr, {}),
  Spinner: /* @__PURE__ */ I(nG, {}),
  CaretDown: /* @__PURE__ */ I(nc, { icon: Yr }),
  XMark: /* @__PURE__ */ I(nc, { icon: Lr }),
  Check: /* @__PURE__ */ I(nc, { icon: Tr }),
  CircleCheck: /* @__PURE__ */ I(nc, { icon: yr }),
  CircleCheckRegular: /* @__PURE__ */ I(nc, { icon: $r }),
  CircleXmarkRegular: /* @__PURE__ */ I(nc, { icon: qr }),
  CircleInfo: /* @__PURE__ */ I(nc, { icon: fr }),
  Share: /* @__PURE__ */ I(nc, { icon: Zr }),
  Clock: /* @__PURE__ */ I(nc, { icon: Jr }),
  Calendar: /* @__PURE__ */ I(nc, { icon: Kr }),
  Hand: /* @__PURE__ */ I(nc, { icon: Rr }),
  Search: /* @__PURE__ */ I(nc, { icon: zr }),
  ChevronRight: /* @__PURE__ */ I(nc, { icon: Or }),
  ChevronLeft: /* @__PURE__ */ I(nc, { icon: kr }),
  // Alternative could be faArrowPointer?
  Click: /* @__PURE__ */ I(nc, { icon: pr }),
  Ellipsis: /* @__PURE__ */ I(nc, { icon: Nr }),
  Edit: /* @__PURE__ */ I(nc, { icon: Vr }),
  Trash: /* @__PURE__ */ I(nc, { icon: vr }),
  BarChart: /* @__PURE__ */ I(nc, { icon: gr }),
  Smiley: /* @__PURE__ */ I(nc, { icon: Ar }),
  Science: /* @__PURE__ */ I(nc, { icon: Qr }),
  Paperclip: /* @__PURE__ */ I(nc, { icon: Br }),
  Account: /* @__PURE__ */ I(iG, {}),
  SignOut: /* @__PURE__ */ I(nc, { icon: Gr }),
  ReIntervention: /* @__PURE__ */ I(nc, { icon: Hr }),
  Wallet: /* @__PURE__ */ I(nc, { icon: Fr }),
  UserRegular: /* @__PURE__ */ I(nc, { icon: _r }),
  Globe: /* @__PURE__ */ I(nc, { icon: Wr }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AppStore: /* @__PURE__ */ I(nc, { icon: cG }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  GooglePlay: /* @__PURE__ */ I(nc, { icon: tG }),
  Question: /* @__PURE__ */ I(nc, { icon: Ir }),
  Bars: /* @__PURE__ */ I(nc, { icon: mr }),
  Block: /* @__PURE__ */ I(Er, {})
}, sG = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e90d5ib0"
} : {
  target: "e90d5ib0",
  label: "IconContainer"
})("display:flex;justify-content:center;align-items:center;width:", (t) => t.size ?? 24, "px;height:", (t) => t.size ?? 24, "px;font-size:", (t) => t.size ? t.size / 1.2 : 20, "px;color:", (t) => t.color ?? t.theme.colors.text.primary, ";opacity:85%;transition:0.1s linear color;svg.filled{fill:", (t) => t.color ?? t.theme.colors.text.primary, ";}" + (process.env.NODE_ENV === "production" ? "" : ""));
function rt(t) {
  const {
    name: c,
    ...e
  } = t;
  return /* @__PURE__ */ I(sG, { ...e, children: c ? aG[c] : t.children });
}
const Wl = (t) => t.theme.colors.text.primary, md = (t) => t.theme.colors.text.secondary, oG = (t) => t.theme.colors.text.tertiary, lb = {
  Huge: /* @__PURE__ */ B("h1", process.env.NODE_ENV === "production" ? {
    target: "e18c3aox12"
  } : {
    target: "e18c3aox12",
    label: "Huge"
  })("color:", Wl, ";font-weight:700;font-size:30px;line-height:115%;" + (process.env.NODE_ENV === "production" ? "" : "")),
  Large: /* @__PURE__ */ B("h2", process.env.NODE_ENV === "production" ? {
    target: "e18c3aox11"
  } : {
    target: "e18c3aox11",
    label: "Large"
  })("color:", Wl, ";font-weight:600;font-size:21px;line-height:115%;padding:0px ", (t) => t.inset ? t.theme.spaces.standard : "0px", ";" + (process.env.NODE_ENV === "production" ? "" : "")),
  Regular: /* @__PURE__ */ B("h3", process.env.NODE_ENV === "production" ? {
    target: "e18c3aox10"
  } : {
    target: "e18c3aox10",
    label: "Regular"
  })("color:", Wl, ";font-weight:600;font-size:17px;line-height:115%;" + (process.env.NODE_ENV === "production" ? "" : ""))
}, jc = {
  Regular: /* @__PURE__ */ B("p", process.env.NODE_ENV === "production" ? {
    target: "e18c3aox9"
  } : {
    target: "e18c3aox9",
    label: "Regular"
  })("color:", md, ";font-weight:400;font-size:17px;line-height:150%;" + (process.env.NODE_ENV === "production" ? "" : "")),
  Small: /* @__PURE__ */ B("p", process.env.NODE_ENV === "production" ? {
    target: "e18c3aox8"
  } : {
    target: "e18c3aox8",
    label: "Small"
  })("color:", md, ";font-weight:400;font-size:15px;line-height:150%;" + (process.env.NODE_ENV === "production" ? "" : ""))
}, nb = /* @__PURE__ */ B("a", process.env.NODE_ENV === "production" ? {
  target: "e18c3aox7"
} : {
  target: "e18c3aox7",
  label: "Anchor"
})("color:", (t) => t.theme.colors.text.tint.purple, ";text-decoration:underline;" + (process.env.NODE_ENV === "production" ? "" : "")), mo = {
  Regular: /* @__PURE__ */ B("span", process.env.NODE_ENV === "production" ? {
    target: "e18c3aox6"
  } : {
    target: "e18c3aox6",
    label: "Regular"
  })("color:", md, ";font-weight:500;font-size:14px;letter-spacing:0.02em;text-transform:uppercase;padding:0px ", (t) => t.inset ? t.theme.spaces.standard : "0px", ";" + (process.env.NODE_ENV === "production" ? "" : "")),
  Small: /* @__PURE__ */ B("span", process.env.NODE_ENV === "production" ? {
    target: "e18c3aox5"
  } : {
    target: "e18c3aox5",
    label: "Small"
  })("color:", oG, ";font-weight:500;font-size:12px;letter-spacing:0.02em;text-transform:uppercase;" + (process.env.NODE_ENV === "production" ? "" : ""))
}, Ro = "'SF Pro Rounded', ui-rounded, 'one sec Open Runde', sans-serif", Zo = 700, go = 1.15, re = /* @__PURE__ */ B("span", process.env.NODE_ENV === "production" ? {
  target: "e18c3aox4"
} : {
  target: "e18c3aox4",
  label: "BaseRound"
})("font-family:", Ro, ";color:", Wl, ";font-weight:", Zo, ";line-height:", go, ";" + (process.env.NODE_ENV === "production" ? "" : ""));
let vn;
const uG = "-apple-system, BlinkMacSystemFont, 'one sec Inter', sans-serif", XG = 400;
function xG(t, c, e = XG, l = uG) {
  vn || (vn = document.createElement("canvas"));
  const n = vn.getContext("2d");
  return n.font = `${e} ${c}px ${l}`, n.measureText(t).width;
}
function rG(t, c) {
  return xG(t, c, Zo, Ro);
}
function GG(t) {
  const c = t.children, e = Ge[t.baseSize], [l, n] = Ic(null), d = pc(null);
  Dd(() => {
    const u = d.current;
    if (!u) return;
    const X = rG(c, e), x = new ResizeObserver((H) => {
      for (const r of H) {
        const G = r.contentRect.width / X, m = Math.floor(e * G);
        n(Math.min(m, e));
      }
    });
    return x.observe(u), () => {
      x.unobserve(u);
    };
  }, [c, d.current]);
  const b = go * e, i = l ?? e, a = (b - e) / 2, s = b - i - a, o = `${i}px`;
  return /* @__PURE__ */ I(re, { ref: d, style: {
    fontSize: i,
    paddingTop: s,
    paddingBottom: a,
    lineHeight: o
  }, children: l !== null ? c : " " });
}
const Ge = {
  Huge: 88,
  Large: 39,
  Regular: 28,
  Small: 21
}, F1 = {
  Huge: /* @__PURE__ */ B(re, process.env.NODE_ENV === "production" ? {
    target: "e18c3aox3"
  } : {
    target: "e18c3aox3",
    label: "Huge"
  })("font-size:", Ge.Huge, "px;" + (process.env.NODE_ENV === "production" ? "" : "")),
  Large: /* @__PURE__ */ B(re, process.env.NODE_ENV === "production" ? {
    target: "e18c3aox2"
  } : {
    target: "e18c3aox2",
    label: "Large"
  })("font-size:", Ge.Large, "px;" + (process.env.NODE_ENV === "production" ? "" : "")),
  Regular: /* @__PURE__ */ B(re, process.env.NODE_ENV === "production" ? {
    target: "e18c3aox1"
  } : {
    target: "e18c3aox1",
    label: "Regular"
  })("font-size:", Ge.Regular, "px;" + (process.env.NODE_ENV === "production" ? "" : "")),
  Small: /* @__PURE__ */ B(re, process.env.NODE_ENV === "production" ? {
    target: "e18c3aox0"
  } : {
    target: "e18c3aox0",
    label: "Small"
  })("font-size:", Ge.Small, "px;" + (process.env.NODE_ENV === "production" ? "" : "")),
  FitLine: GG
};
function HG() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const tl = 0.2, mG = Xt`
    from {
        opacity: 0;
        transform: translate(-50%, 10px);
    }

    to {
        opacity: 1;
        transform: translateX(-50%);
    }
`, RG = Xt`
    from {
        opacity: 1;
        transform: translateX(-50%);
    }

    to {
        opacity: 0;
        transform: translate(-50%, 10px);
    }
`, ZG = Xt`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`, gG = Xt`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
`, He = "closing", hG = /* @__PURE__ */ B("dialog", process.env.NODE_ENV === "production" ? {
  target: "ecozupg2"
} : {
  target: "ecozupg2",
  label: "Dialog"
})("position:fixed;top:10%;left:50%;max-height:calc(100vh - 20%);box-sizing:border-box;width:600px;padding:30px;background-color:", (t) => t.theme.colors.background.main, ";border-radius:", (t) => t.theme.sizes.cardRadius, ";outline:none;border:none;box-shadow:", (t) => t.theme.modalShadow, ";&::backdrop{background:", (t) => t.theme.modalBackdrop, ";backdrop-filter:grayscale(40%);animation:", ZG, " ", tl, "s;animation-fill-mode:both;cursor:pointer;}animation:", mG, " ", tl, "s;animation-fill-mode:both;animation-timing-function:ease-out;&.", He, "{animation:", RG, " ", tl, "s forwards;&::backdrop{animation:", gG, " ", tl, "s forwards;}}" + (process.env.NODE_ENV === "production" ? "" : "")), WG = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "ecozupg1"
} : {
  target: "ecozupg1",
  label: "HeaderRow"
})(process.env.NODE_ENV === "production" ? {
  name: "1w6rj69",
  styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-bottom:30px"
} : {
  name: "1w6rj69",
  styles: "display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-bottom:30px",
  toString: HG
}), pG = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "ecozupg0"
} : {
  target: "ecozupg0",
  label: "IconButton"
})("cursor:pointer;transition:0.1s linear opacity;border-radius:99px;background-color:", (t) => t.theme.colors.background.overlay, ";padding:10px;margin:-10px;&:hover{opacity:0.5;}" + (process.env.NODE_ENV === "production" ? "" : ""));
function ho(t) {
  const c = kc(), e = pc(null), l = hc(() => {
    var d, b, i;
    (d = e.current) == null || d.classList.remove(He), (b = e.current) == null || b.close(), (i = e.current) == null || i.removeEventListener("animationend", l);
  }, []);
  return Yc(() => {
    const d = e.current;
    if (d)
      if (t.open)
        d.showModal(), d.classList.remove(He), d.removeEventListener("animationend", l);
      else {
        if (d.classList.contains(He)) return;
        d.classList.add(He), d.addEventListener("animationend", l, {
          once: !0
        });
      }
  }, [t.open]), /* @__PURE__ */ Hc(hG, { ref: e, onMouseDown: (d) => {
    const b = e.current.getBoundingClientRect();
    if (!(b.top <= d.clientY && d.clientY <= b.top + b.height && b.left <= d.clientX && d.clientX <= b.left + b.width))
      return t.onClose();
  }, style: t.style, onCancel: () => t.onClose(), children: [
    /* @__PURE__ */ Hc(WG, { children: [
      t.title ? typeof t.title == "string" ? /* @__PURE__ */ I(lb.Large, { children: t.title }) : t.title : /* @__PURE__ */ I("div", {}),
      !t.disableCloseIcon && /* @__PURE__ */ I(pG, { onClick: t.onClose, children: /* @__PURE__ */ I(rt, { name: "XMark", size: 24, color: c.colors.text.secondary }) })
    ] }),
    t.children
  ] });
}
function yG() {
  const [t, c] = Ic(!1);
  return {
    modalProps: {
      open: t,
      onClose: () => c(!1)
    },
    open: () => c(!0)
  };
}
function IG() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
function FG({
  reloadDocument: t,
  replace: c,
  state: e,
  preventScrollReset: l,
  relative: n,
  to: d,
  viewTransition: b,
  children: i,
  caseSensitive: a,
  className: s,
  end: o,
  style: u
}) {
  return /* @__PURE__ */ I(vs, { ...{
    reloadDocument: t,
    replace: c,
    state: e,
    preventScrollReset: l,
    relative: n,
    to: d,
    viewTransition: b,
    children: i,
    caseSensitive: a,
    className: s,
    end: o,
    style: u
  } });
}
const Wo = /* @__PURE__ */ B(FG, process.env.NODE_ENV === "production" ? {
  target: "e33cq7v0"
} : {
  target: "e33cq7v0",
  label: "PlainLink"
})(process.env.NODE_ENV === "production" ? {
  name: "g65o95",
  styles: "text-decoration:none"
} : {
  name: "g65o95",
  styles: "text-decoration:none",
  toString: IG
}), V1 = nb.withComponent(vs, process.env.NODE_ENV === "production" ? {
  target: "e33cq7v1"
} : {
  target: "e33cq7v1",
  label: "AnchorLink"
});
function db() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var VG = process.env.NODE_ENV === "production" ? {
  name: "1pxl9ke",
  styles: "font-size:15px"
} : {
  name: "izpapq-BaseStyled",
  styles: "font-size:15px;label:BaseStyled;",
  toString: db
};
const bb = /* @__PURE__ */ B(jc.Regular, process.env.NODE_ENV === "production" ? {
  target: "e1b31is65"
} : {
  target: "e1b31is65",
  label: "BaseStyled"
})("display:block;font-weight:500;text-align:center;transition:0.1s linear opacity;cursor:", (t) => t.disabled ? "unset" : "pointer", ";opacity:", (t) => t.disabled ? 0.5 : 1, ";&:hover{opacity:", (t) => t.disabled ? 0.5 : 0.7, ";}", (t) => t.small && VG, ";&:focus-visible{outline:2px solid ", (t) => t.theme.colors.tint.purple, ";}" + (process.env.NODE_ENV === "production" ? "" : "")), vG = /* @__PURE__ */ B(bb, process.env.NODE_ENV === "production" ? {
  target: "e1b31is64"
} : {
  target: "e1b31is64",
  label: "PrimaryStyled"
})("padding:", (t) => t.small ? "10px 15px" : "15px 20px", ";background-color:", (t) => t.action === "destructive" ? t.theme.colors.tint.red : t.theme.colors.tint.purple, ";border-radius:99px;color:white;" + (process.env.NODE_ENV === "production" ? "" : "")), BG = /* @__PURE__ */ B(bb, process.env.NODE_ENV === "production" ? {
  target: "e1b31is63"
} : {
  target: "e1b31is63",
  label: "SecondaryStyled"
})("color:", (t) => t.theme.colors.text.primary, ";border-radius:2px;&:focus-visible{outline-offset:5px;}" + (process.env.NODE_ENV === "production" ? "" : "")), fG = /* @__PURE__ */ B(bb, process.env.NODE_ENV === "production" ? {
  target: "e1b31is62"
} : {
  target: "e1b31is62",
  label: "TertiaryStyled"
})("padding:", (t) => t.small ? "5px 10px" : "10px 15px", ";font-size:", (t) => t.small ? "12px" : "15px", ";text-transform:", (t) => t.small ? "uppercase" : "none", ";letter-spacing:", (t) => t.small ? "0.02em" : "0", ";font-weight:", (t) => t.small ? "600" : "500", ";background-color:", (t) => t.theme.colors.background.overlay, ";color:", (t) => t.theme.colors.text.primary, ";border-radius:99px;" + (process.env.NODE_ENV === "production" ? "" : "")), JG = /* @__PURE__ */ B("button", process.env.NODE_ENV === "production" ? {
  target: "e1b31is61"
} : {
  target: "e1b31is61",
  label: "NormalizedButton"
})(process.env.NODE_ENV === "production" ? {
  name: "10m8v90",
  styles: "background:none;color:inherit;border:none;padding:0;margin:0;font:inherit;cursor:pointer;outline:inherit"
} : {
  name: "10m8v90",
  styles: "background:none;color:inherit;border:none;padding:0;margin:0;font:inherit;cursor:pointer;outline:inherit",
  toString: db
}), YG = /* @__PURE__ */ B(nb, process.env.NODE_ENV === "production" ? {
  target: "e1b31is60"
} : {
  target: "e1b31is60",
  label: "NormalizedAnchor"
})(process.env.NODE_ENV === "production" ? {
  name: "g65o95",
  styles: "text-decoration:none"
} : {
  name: "g65o95",
  styles: "text-decoration:none",
  toString: db
}), NG = {
  button: JG,
  anchor: YG,
  link: Wo
};
function Bn(t) {
  function c(e) {
    const {
      asComponent: l,
      ...n
    } = e, d = NG[l ?? "button"];
    return /* @__PURE__ */ I(t, { as: d, ...n });
  }
  return c;
}
const ee = {
  Primary: Bn(vG),
  Secondary: Bn(BG),
  Tertiary: Bn(fG)
}, v1 = (t) => ({
  label: t,
  type: "secondary"
  /* Secondary */
}), po = Qd({
  showAlert: () => {
  }
}), CG = {
  width: "400px"
}, zG = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "eyllx4e0"
} : {
  target: "eyllx4e0",
  label: "ButtonGroup"
})("display:flex;flex-direction:row;justify-content:flex-end;gap:", (t) => t.theme.spaces.standard, ";margin-top:", (t) => t.theme.spaces.standard, ";align-items:center;" + (process.env.NODE_ENV === "production" ? "" : "")), wG = {
  primary: ee.Primary,
  secondary: ee.Secondary
};
function B1(t) {
  const {
    open: c,
    modalProps: e
  } = yG(), [l, n] = Ic(null), d = hc((b) => {
    n(b), c();
  }, [n]);
  return /* @__PURE__ */ Hc(po.Provider, { value: {
    showAlert: d
  }, children: [
    t.children,
    /* @__PURE__ */ Hc(ho, { title: /* @__PURE__ */ I(lb.Regular, { children: l == null ? void 0 : l.title }), disableCloseIcon: !0, style: CG, ...e, children: [
      /* @__PURE__ */ I(jc.Small, { style: {
        marginTop: "-20px",
        whiteSpace: "pre-wrap"
      }, children: l == null ? void 0 : l.message }),
      /* @__PURE__ */ I(zG, { children: l == null ? void 0 : l.actions.map((b, i) => {
        const a = wG[
          b.type ?? "primary"
          /* Primary */
        ];
        return /* @__PURE__ */ I(a, { small: !0, onClick: () => {
          var s;
          (s = b.onClick) == null || s.call(b), e.onClose();
        }, children: b.label }, i);
      }) })
    ] })
  ] });
}
function f1() {
  return Td(po);
}
const J1 = /* @__PURE__ */ B("img", process.env.NODE_ENV === "production" ? {
  target: "e1j1nj940"
} : {
  target: "e1j1nj940",
  label: "Avatar"
})("user-select:none;pointer-events:none;width:", (t) => t.size ?? 40, "px;height:", (t) => t.size ?? 40, "px;border-radius:50%;background:", (t) => t.color ?? t.theme.colors.background.overlay, ";" + (process.env.NODE_ENV === "production" ? "" : ""));
function yo() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var SG = process.env.NODE_ENV === "production" ? {
  name: "eivff4",
  styles: "display:none"
} : {
  name: "1yijq2c-HideUntil",
  styles: "display:none;label:HideUntil;",
  toString: yo
};
const pi = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1q1enbr1"
} : {
  target: "e1q1enbr1",
  label: "HideUntil"
})("display:contents;", (t) => t.theme.breakpoints[t.breakpoint].whenActive(SG), ";" + (process.env.NODE_ENV === "production" ? "" : ""));
var LG = process.env.NODE_ENV === "production" ? {
  name: "eivff4",
  styles: "display:none"
} : {
  name: "1vu8paa-ShowUntil",
  styles: "display:none;label:ShowUntil;",
  toString: yo
};
const kG = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1q1enbr0"
} : {
  target: "e1q1enbr0",
  label: "ShowUntil"
})("display:contents;", (t) => t.theme.breakpoints[t.breakpoint].whenInactive(LG), ";" + (process.env.NODE_ENV === "production" ? "" : ""));
function OG(t) {
  const c = kc(), [e, l] = Ic(!1), n = hc(() => {
    l(window.innerWidth <= c.breakpoints[t].pixelValue);
  }, [l, c, t]);
  return Yc(() => (n(), window.addEventListener("resize", n, {
    passive: !0
  }), () => {
    window.removeEventListener("resize", n);
  }), [n]), e;
}
const Io = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "es7favd0"
} : {
  target: "es7favd0",
  label: "Card"
})("display:flex;flex-direction:column;border-radius:", (t) => t.theme.sizes.cardRadius, ";background-color:", (t) => t.theme.colors.background.card, ";transition:0.1s linear outline;outline:", (t) => t.focus ? `2px solid ${t.theme.colors.tint.purple}` : `0px solid ${t.theme.colors.tint.purple}`, ";box-shadow:", (t) => t.theme.cardShadow, ";padding:", (t) => t.theme.spaces.standard, ";", (t) => t.glossBorder && t.theme.mixins.glossBorder, ";" + (process.env.NODE_ENV === "production" ? "" : ""));
function AG() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var DG = process.env.NODE_ENV === "production" ? {
  name: "e0dnmk",
  styles: "cursor:pointer"
} : {
  name: "1242ox-CellContainer",
  styles: "cursor:pointer;label:CellContainer;",
  toString: AG
};
const QG = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "eq2l6x1"
} : {
  target: "eq2l6x1",
  label: "CellContainer"
})("display:flex;flex-direction:row;gap:", (t) => t.theme.spaces.standard, ";align-items:center;position:relative;padding:", (t) => t.theme.spaces.standard, ";overflow:hidden;", (t) => t.selectable && DG, ";&::before{content:'';display:block;position:absolute;top:3px;right:3px;bottom:3px;left:3px;border-radius:", (t) => t.theme.sizes.cardRadius, ";opacity:0%;transition:0.1s linear opacity;", (t) => t.focus === "selected" ? `
					transition: none;
					background-color: ${t.theme.colors.tint.purple};
					opacity: 20%;
				` : "", ";}>div{z-index:1;}&:hover::before{", (t) => t.focus !== "selected" && t.selectable ? `
					background-color: ${t.theme.colors.text.primary};
					opacity: 5%;
				` : "", ";}" + (process.env.NODE_ENV === "production" ? "" : "")), Fo = (t) => {
  switch (t.focus) {
    case "active":
      return t.theme.colors.text.primary;
    case "blurred":
      return t.theme.colors.text.tertiary;
    case "selected":
      return t.theme.colors.text.highlight;
  }
}, TG = /* @__PURE__ */ B(jc.Regular, process.env.NODE_ENV === "production" ? {
  target: "eq2l6x0"
} : {
  target: "eq2l6x0",
  label: "Title"
})("font-weight:500;color:", Fo, ";flex-grow:1;" + (process.env.NODE_ENV === "production" ? "" : ""));
function Y1(t) {
  const c = t.focus ?? "active", e = kc();
  return /* @__PURE__ */ Hc(QG, { focus: c, selectable: t.selectable, onClick: t.onClick, children: [
    t.leftIcon && /* @__PURE__ */ I(rt, { color: Fo({
      theme: e,
      focus: c
    }), name: t.leftIcon }),
    /* @__PURE__ */ I(TG, { focus: c, children: t.title }),
    t.children
  ] });
}
function jG() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const MG = /* @__PURE__ */ B("input", process.env.NODE_ENV === "production" ? {
  target: "e1vunznc2"
} : {
  target: "e1vunznc2",
  label: "HiddenInput"
})(process.env.NODE_ENV === "production" ? {
  name: "6q7uuv",
  styles: "position:absolute;opacity:0;height:0;width:0;margin:0"
} : {
  name: "6q7uuv",
  styles: "position:absolute;opacity:0;height:0;width:0;margin:0",
  toString: jG
}), UG = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1vunznc1"
} : {
  target: "e1vunznc1",
  label: "CheckboxContainer"
})("position:relative;display:inline-flex;align-items:center;gap:8px;cursor:", (t) => t.disabled ? "not-allowed" : "pointer", ";opacity:", (t) => t.disabled ? 0.5 : 1, ";" + (process.env.NODE_ENV === "production" ? "" : "")), PG = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1vunznc0"
} : {
  target: "e1vunznc0",
  label: "CheckboxVisual"
})("height:20px;width:20px;border-radius:7px;display:flex;align-items:center;justify-content:center;transition:0.1s linear background-color,0.1s linear outline,0.1s linear border;box-sizing:border-box;overflow:hidden;background-color:", (t) => t.checked ? t.theme.colors.tint.purple : t.theme.colors.background.overlay, ";border:", (t) => t.checked ? "none" : t.theme.transparentHairlineBorder, ";&:hover{outline:", (t) => t.disabled ? "none" : `2px solid ${t.theme.colors.tint.purple}`, ";}" + (process.env.NODE_ENV === "production" ? "" : "")), EG = jc.Small.withComponent("label", process.env.NODE_ENV === "production" ? {
  target: "e1vunznc3"
} : {
  target: "e1vunznc3",
  label: "Label"
});
function N1({
  checked: t,
  onChange: c,
  disabled: e,
  label: l,
  id: n,
  name: d,
  className: b
}) {
  return /* @__PURE__ */ Hc(UG, { checked: t, disabled: e, className: b, onClick: () => !e && c(!t), children: [
    /* @__PURE__ */ I(PG, { checked: t, disabled: e, children: t && /* @__PURE__ */ I(rt, { name: "Check", color: "white", size: 18 }) }),
    /* @__PURE__ */ I(MG, { type: "checkbox", checked: t, onChange: (a) => {
      e || c(a.target.checked);
    }, disabled: e, id: n, name: d }),
    l && /* @__PURE__ */ I(EG, { htmlFor: n, children: l })
  ] });
}
function Vo() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const KG = /* @__PURE__ */ B(jc.Small, process.env.NODE_ENV === "production" ? {
  target: "e1y9yis16"
} : {
  target: "e1y9yis16",
  label: "Description"
})("white-space:pre-line;margin-bottom:", (t) => t.theme.spaces.double, ";" + (process.env.NODE_ENV === "production" ? "" : "")), _G = /* @__PURE__ */ B(Io, process.env.NODE_ENV === "production" ? {
  target: "e1y9yis15"
} : {
  target: "e1y9yis15",
  label: "OptionCard"
})("margin-top:", (t) => t.theme.spaces.standard, ";display:flex;flex-direction:row;align-items:center;gap:", (t) => t.theme.spaces.standard, ";height:120px;cursor:pointer;outline:0px solid ", (t) => t.theme.colors.tint.purple, ";transition:0.1s linear outline;&:hover{outline:2px solid ", (t) => t.theme.colors.tint.purple, ";}", (t) => t.theme.breakpoints.compact.whenActive(/* @__PURE__ */ Lc("flex-direction:column;height:auto;gap:", t.theme.spaces.double, ";" + (process.env.NODE_ENV === "production" ? "" : ";label:OptionCard;"), process.env.NODE_ENV === "production" ? "" : "")), ";" + (process.env.NODE_ENV === "production" ? "" : "")), $G = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1y9yis14"
} : {
  target: "e1y9yis14",
  label: "OptionText"
})(process.env.NODE_ENV === "production" ? {
  name: "1f9wyqy",
  styles: "display:flex;flex-direction:column;gap:5px;flex-grow:1"
} : {
  name: "1f9wyqy",
  styles: "display:flex;flex-direction:column;gap:5px;flex-grow:1",
  toString: Vo
}), qG = /* @__PURE__ */ B(jc.Regular, process.env.NODE_ENV === "production" ? {
  target: "e1y9yis13"
} : {
  target: "e1y9yis13",
  label: "OptionTitle"
})("font-weight:500;color:", (t) => t.theme.colors.text.primary, ";" + (process.env.NODE_ENV === "production" ? "" : "")), cH = /* @__PURE__ */ B(nb, process.env.NODE_ENV === "production" ? {
  target: "e1y9yis12"
} : {
  target: "e1y9yis12",
  label: "UnstyledAnchor"
})(process.env.NODE_ENV === "production" ? {
  name: "lxf3qw",
  styles: "text-decoration:none;outline:none!important"
} : {
  name: "lxf3qw",
  styles: "text-decoration:none;outline:none!important",
  toString: Vo
}), tH = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1y9yis11"
} : {
  target: "e1y9yis11",
  label: "LinkRow"
})("display:flex;flex-direction:row;align-items:center;gap:", (t) => t.theme.spaces.standard, ";flex-grow:1;align-self:stretch;" + (process.env.NODE_ENV === "production" ? "" : "")), eH = /* @__PURE__ */ B(jc.Small, process.env.NODE_ENV === "production" ? {
  target: "e1y9yis10"
} : {
  target: "e1y9yis10",
  label: "PressLink"
})("color:", (t) => t.theme.colors.text.tertiary, ";margin-top:", (t) => t.theme.spaces.standard, ";" + (process.env.NODE_ENV === "production" ? "" : ""));
function yi({
  type: t,
  t: c
}) {
  const e = kc(), l = Cc(() => t === "help" ? "https://tutorials.one-sec.app" : "https://feedback.one-sec.app", [t]);
  return /* @__PURE__ */ I(cH, { href: l, target: "_blank", children: /* @__PURE__ */ Hc(_G, { children: [
    /* @__PURE__ */ I("img", { src: `/images/${t}-${e.name}.png`, width: 100, style: {
      flexShrink: 0
    } }),
    /* @__PURE__ */ Hc(tH, { children: [
      /* @__PURE__ */ Hc($G, { children: [
        /* @__PURE__ */ I(qG, { children: c(`${t}.title`) }),
        /* @__PURE__ */ I(jc.Small, { children: c(`${t}.description`) })
      ] }),
      /* @__PURE__ */ I("div", { style: {
        flexShrink: 0
      }, children: /* @__PURE__ */ I(rt, { name: "ChevronRight", size: 20, color: e.colors.text.tertiary }) })
    ] })
  ] }) });
}
function lH({
  t,
  pressLink: c,
  showDescription: e
}) {
  return /* @__PURE__ */ Hc(Ad, { children: [
    e && /* @__PURE__ */ I(KG, { children: t("description") }),
    /* @__PURE__ */ I(yi, { type: "help", t }),
    /* @__PURE__ */ I(yi, { type: "feedback", t }),
    /* @__PURE__ */ I(eH, { children: /* @__PURE__ */ I(y0, { t, i18nKey: "pressLink", components: {
      "press-link": c
    } }) })
  ] });
}
function C1({
  t,
  pressLink: c,
  ...e
}) {
  return /* @__PURE__ */ I(ho, { ...e, title: t("title"), children: /* @__PURE__ */ I(lH, { t, pressLink: c, showDescription: !0 }) });
}
const nH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", dH = /* @__PURE__ */ B("img", process.env.NODE_ENV === "production" ? {
  target: "e19e3tws0"
} : {
  target: "e19e3tws0",
  label: "FavIconImage"
})("user-select:none;pointer-events:none;", (t) => (t.isLoading || t.offline) && /* @__PURE__ */ Lc("border-radius:10px;background:", t.theme.colors.background.overlay, ";" + (process.env.NODE_ENV === "production" ? "" : ";label:FavIconImage;"), process.env.NODE_ENV === "production" ? "" : ""), ";" + (process.env.NODE_ENV === "production" ? "" : ""));
function z1(t) {
  const c = t.size ?? 24, e = window.devicePixelRatio * c, l = 48, n = Math.ceil(e / l) * l, d = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${t.host}&size=${n}`, [b, i] = Ic(!1), [a, s] = Ic(!0);
  return /* @__PURE__ */ I(dH, { src: b ? nH : d, width: c, height: c, offline: b, isLoading: a, onError: () => !b && i(!0), onLoadStart: () => s(!0), onLoad: () => s(!1) });
}
const w1 = /* @__PURE__ */ B(jc.Small.withComponent(/* @__PURE__ */ B("input", process.env.NODE_ENV === "production" ? {
  target: "e16us9mt2"
} : {
  target: "e16us9mt2",
  label: "Input"
})(process.env.NODE_ENV === "production" ? "" : ""), process.env.NODE_ENV === "production" ? {
  target: "e16us9mt4"
} : {
  target: "e16us9mt4",
  label: "Input"
}), process.env.NODE_ENV === "production" ? {
  target: "e16us9mt3"
} : {
  target: "e16us9mt3",
  label: "Input"
})("border-radius:10px;background-color:", (t) => t.theme.colors.background.overlay, ";outline:0px solid ", (t) => t.theme.colors.tint.purple, ";transition:0.1s linear outline;border:none;padding:12.75px 15px;&:focus{outline:2px solid ", (t) => t.theme.colors.tint.purple, ";}&::placeholder{color:", (t) => t.theme.colors.text.tertiary, ";opacity:50%;}" + (process.env.NODE_ENV === "production" ? "" : "")), S1 = /* @__PURE__ */ B(jc.Regular.withComponent(/* @__PURE__ */ B("input", process.env.NODE_ENV === "production" ? {
  target: "e16us9mt0"
} : {
  target: "e16us9mt0",
  label: "TransparentInput"
})(process.env.NODE_ENV === "production" ? "" : ""), process.env.NODE_ENV === "production" ? {
  target: "e16us9mt5"
} : {
  target: "e16us9mt5",
  label: "TransparentInput"
}), process.env.NODE_ENV === "production" ? {
  target: "e16us9mt1"
} : {
  target: "e16us9mt1",
  label: "TransparentInput"
})("padding:0;background:transparent;outline:none;border:none;&::placeholder{", (t) => t.theme.colors.text.tertiary, ";}" + (process.env.NODE_ENV === "production" ? "" : ""));
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function Ue(t) {
  return t + 0.5 | 0;
}
const Zt = (t, c, e) => Math.max(Math.min(t, e), c);
function me(t) {
  return Zt(Ue(t * 2.55), 0, 255);
}
function Wt(t) {
  return Zt(Ue(t * 255), 0, 255);
}
function lt(t) {
  return Zt(Ue(t / 2.55) / 100, 0, 1);
}
function Ii(t) {
  return Zt(Ue(t * 100), 0, 100);
}
const Dc = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Rd = [..."0123456789ABCDEF"], bH = (t) => Rd[t & 15], iH = (t) => Rd[(t & 240) >> 4] + Rd[t & 15], el = (t) => (t & 240) >> 4 === (t & 15), aH = (t) => el(t.r) && el(t.g) && el(t.b) && el(t.a);
function sH(t) {
  var c = t.length, e;
  return t[0] === "#" && (c === 4 || c === 5 ? e = {
    r: 255 & Dc[t[1]] * 17,
    g: 255 & Dc[t[2]] * 17,
    b: 255 & Dc[t[3]] * 17,
    a: c === 5 ? Dc[t[4]] * 17 : 255
  } : (c === 7 || c === 9) && (e = {
    r: Dc[t[1]] << 4 | Dc[t[2]],
    g: Dc[t[3]] << 4 | Dc[t[4]],
    b: Dc[t[5]] << 4 | Dc[t[6]],
    a: c === 9 ? Dc[t[7]] << 4 | Dc[t[8]] : 255
  })), e;
}
const oH = (t, c) => t < 255 ? c(t) : "";
function uH(t) {
  var c = aH(t) ? bH : iH;
  return t ? "#" + c(t.r) + c(t.g) + c(t.b) + oH(t.a, c) : void 0;
}
const XH = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function vo(t, c, e) {
  const l = c * Math.min(e, 1 - e), n = (d, b = (d + t / 30) % 12) => e - l * Math.max(Math.min(b - 3, 9 - b, 1), -1);
  return [n(0), n(8), n(4)];
}
function xH(t, c, e) {
  const l = (n, d = (n + t / 60) % 6) => e - e * c * Math.max(Math.min(d, 4 - d, 1), 0);
  return [l(5), l(3), l(1)];
}
function rH(t, c, e) {
  const l = vo(t, 1, 0.5);
  let n;
  for (c + e > 1 && (n = 1 / (c + e), c *= n, e *= n), n = 0; n < 3; n++)
    l[n] *= 1 - c - e, l[n] += c;
  return l;
}
function GH(t, c, e, l, n) {
  return t === n ? (c - e) / l + (c < e ? 6 : 0) : c === n ? (e - t) / l + 2 : (t - c) / l + 4;
}
function ib(t) {
  const e = t.r / 255, l = t.g / 255, n = t.b / 255, d = Math.max(e, l, n), b = Math.min(e, l, n), i = (d + b) / 2;
  let a, s, o;
  return d !== b && (o = d - b, s = i > 0.5 ? o / (2 - d - b) : o / (d + b), a = GH(e, l, n, o, d), a = a * 60 + 0.5), [a | 0, s || 0, i];
}
function ab(t, c, e, l) {
  return (Array.isArray(c) ? t(c[0], c[1], c[2]) : t(c, e, l)).map(Wt);
}
function sb(t, c, e) {
  return ab(vo, t, c, e);
}
function HH(t, c, e) {
  return ab(rH, t, c, e);
}
function mH(t, c, e) {
  return ab(xH, t, c, e);
}
function Bo(t) {
  return (t % 360 + 360) % 360;
}
function RH(t) {
  const c = XH.exec(t);
  let e = 255, l;
  if (!c)
    return;
  c[5] !== l && (e = c[6] ? me(+c[5]) : Wt(+c[5]));
  const n = Bo(+c[2]), d = +c[3] / 100, b = +c[4] / 100;
  return c[1] === "hwb" ? l = HH(n, d, b) : c[1] === "hsv" ? l = mH(n, d, b) : l = sb(n, d, b), {
    r: l[0],
    g: l[1],
    b: l[2],
    a: e
  };
}
function ZH(t, c) {
  var e = ib(t);
  e[0] = Bo(e[0] + c), e = sb(e), t.r = e[0], t.g = e[1], t.b = e[2];
}
function gH(t) {
  if (!t)
    return;
  const c = ib(t), e = c[0], l = Ii(c[1]), n = Ii(c[2]);
  return t.a < 255 ? `hsla(${e}, ${l}%, ${n}%, ${lt(t.a)})` : `hsl(${e}, ${l}%, ${n}%)`;
}
const Fi = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, Vi = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function hH() {
  const t = {}, c = Object.keys(Vi), e = Object.keys(Fi);
  let l, n, d, b, i;
  for (l = 0; l < c.length; l++) {
    for (b = i = c[l], n = 0; n < e.length; n++)
      d = e[n], i = i.replace(d, Fi[d]);
    d = parseInt(Vi[b], 16), t[i] = [d >> 16 & 255, d >> 8 & 255, d & 255];
  }
  return t;
}
let ll;
function WH(t) {
  ll || (ll = hH(), ll.transparent = [0, 0, 0, 0]);
  const c = ll[t.toLowerCase()];
  return c && {
    r: c[0],
    g: c[1],
    b: c[2],
    a: c.length === 4 ? c[3] : 255
  };
}
const pH = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function yH(t) {
  const c = pH.exec(t);
  let e = 255, l, n, d;
  if (c) {
    if (c[7] !== l) {
      const b = +c[7];
      e = c[8] ? me(b) : Zt(b * 255, 0, 255);
    }
    return l = +c[1], n = +c[3], d = +c[5], l = 255 & (c[2] ? me(l) : Zt(l, 0, 255)), n = 255 & (c[4] ? me(n) : Zt(n, 0, 255)), d = 255 & (c[6] ? me(d) : Zt(d, 0, 255)), {
      r: l,
      g: n,
      b: d,
      a: e
    };
  }
}
function IH(t) {
  return t && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${lt(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`);
}
const fn = (t) => t <= 31308e-7 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055, Ut = (t) => t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
function FH(t, c, e) {
  const l = Ut(lt(t.r)), n = Ut(lt(t.g)), d = Ut(lt(t.b));
  return {
    r: Wt(fn(l + e * (Ut(lt(c.r)) - l))),
    g: Wt(fn(n + e * (Ut(lt(c.g)) - n))),
    b: Wt(fn(d + e * (Ut(lt(c.b)) - d))),
    a: t.a + e * (c.a - t.a)
  };
}
function nl(t, c, e) {
  if (t) {
    let l = ib(t);
    l[c] = Math.max(0, Math.min(l[c] + l[c] * e, c === 0 ? 360 : 1)), l = sb(l), t.r = l[0], t.g = l[1], t.b = l[2];
  }
}
function fo(t, c) {
  return t && Object.assign(c || {}, t);
}
function vi(t) {
  var c = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(t) ? t.length >= 3 && (c = { r: t[0], g: t[1], b: t[2], a: 255 }, t.length > 3 && (c.a = Wt(t[3]))) : (c = fo(t, { r: 0, g: 0, b: 0, a: 1 }), c.a = Wt(c.a)), c;
}
function VH(t) {
  return t.charAt(0) === "r" ? yH(t) : RH(t);
}
class Se {
  constructor(c) {
    if (c instanceof Se)
      return c;
    const e = typeof c;
    let l;
    e === "object" ? l = vi(c) : e === "string" && (l = sH(c) || WH(c) || VH(c)), this._rgb = l, this._valid = !!l;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var c = fo(this._rgb);
    return c && (c.a = lt(c.a)), c;
  }
  set rgb(c) {
    this._rgb = vi(c);
  }
  rgbString() {
    return this._valid ? IH(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? uH(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? gH(this._rgb) : void 0;
  }
  mix(c, e) {
    if (c) {
      const l = this.rgb, n = c.rgb;
      let d;
      const b = e === d ? 0.5 : e, i = 2 * b - 1, a = l.a - n.a, s = ((i * a === -1 ? i : (i + a) / (1 + i * a)) + 1) / 2;
      d = 1 - s, l.r = 255 & s * l.r + d * n.r + 0.5, l.g = 255 & s * l.g + d * n.g + 0.5, l.b = 255 & s * l.b + d * n.b + 0.5, l.a = b * l.a + (1 - b) * n.a, this.rgb = l;
    }
    return this;
  }
  interpolate(c, e) {
    return c && (this._rgb = FH(this._rgb, c._rgb, e)), this;
  }
  clone() {
    return new Se(this.rgb);
  }
  alpha(c) {
    return this._rgb.a = Wt(c), this;
  }
  clearer(c) {
    const e = this._rgb;
    return e.a *= 1 - c, this;
  }
  greyscale() {
    const c = this._rgb, e = Ue(c.r * 0.3 + c.g * 0.59 + c.b * 0.11);
    return c.r = c.g = c.b = e, this;
  }
  opaquer(c) {
    const e = this._rgb;
    return e.a *= 1 + c, this;
  }
  negate() {
    const c = this._rgb;
    return c.r = 255 - c.r, c.g = 255 - c.g, c.b = 255 - c.b, this;
  }
  lighten(c) {
    return nl(this._rgb, 2, c), this;
  }
  darken(c) {
    return nl(this._rgb, 2, -c), this;
  }
  saturate(c) {
    return nl(this._rgb, 1, c), this;
  }
  desaturate(c) {
    return nl(this._rgb, 1, -c), this;
  }
  rotate(c) {
    return ZH(this._rgb, c), this;
  }
}
/*!
 * Chart.js v4.4.9
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function ct() {
}
const vH = /* @__PURE__ */ (() => {
  let t = 0;
  return () => t++;
})();
function dc(t) {
  return t == null;
}
function Gc(t) {
  if (Array.isArray && Array.isArray(t))
    return !0;
  const c = Object.prototype.toString.call(t);
  return c.slice(0, 7) === "[object" && c.slice(-6) === "Array]";
}
function bc(t) {
  return t !== null && Object.prototype.toString.call(t) === "[object Object]";
}
function Rc(t) {
  return (typeof t == "number" || t instanceof Number) && isFinite(+t);
}
function wc(t, c) {
  return Rc(t) ? t : c;
}
function _(t, c) {
  return typeof t > "u" ? c : t;
}
const BH = (t, c) => typeof t == "string" && t.endsWith("%") ? parseFloat(t) / 100 : +t / c, Jo = (t, c) => typeof t == "string" && t.endsWith("%") ? parseFloat(t) / 100 * c : +t;
function uc(t, c, e) {
  if (t && typeof t.call == "function")
    return t.apply(e, c);
}
function oc(t, c, e, l) {
  let n, d, b;
  if (Gc(t))
    for (d = t.length, n = 0; n < d; n++)
      c.call(e, t[n], n);
  else if (bc(t))
    for (b = Object.keys(t), d = b.length, n = 0; n < d; n++)
      c.call(e, t[b[n]], b[n]);
}
function Cl(t, c) {
  let e, l, n, d;
  if (!t || !c || t.length !== c.length)
    return !1;
  for (e = 0, l = t.length; e < l; ++e)
    if (n = t[e], d = c[e], n.datasetIndex !== d.datasetIndex || n.index !== d.index)
      return !1;
  return !0;
}
function zl(t) {
  if (Gc(t))
    return t.map(zl);
  if (bc(t)) {
    const c = /* @__PURE__ */ Object.create(null), e = Object.keys(t), l = e.length;
    let n = 0;
    for (; n < l; ++n)
      c[e[n]] = zl(t[e[n]]);
    return c;
  }
  return t;
}
function Yo(t) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(t) === -1;
}
function fH(t, c, e, l) {
  if (!Yo(t))
    return;
  const n = c[t], d = e[t];
  bc(n) && bc(d) ? Le(n, d, l) : c[t] = zl(d);
}
function Le(t, c, e) {
  const l = Gc(c) ? c : [
    c
  ], n = l.length;
  if (!bc(t))
    return t;
  e = e || {};
  const d = e.merger || fH;
  let b;
  for (let i = 0; i < n; ++i) {
    if (b = l[i], !bc(b))
      continue;
    const a = Object.keys(b);
    for (let s = 0, o = a.length; s < o; ++s)
      d(a[s], t, b, e);
  }
  return t;
}
function Ve(t, c) {
  return Le(t, c, {
    merger: JH
  });
}
function JH(t, c, e) {
  if (!Yo(t))
    return;
  const l = c[t], n = e[t];
  bc(l) && bc(n) ? Ve(l, n) : Object.prototype.hasOwnProperty.call(c, t) || (c[t] = zl(n));
}
const Bi = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (t) => t,
  // default resolvers
  x: (t) => t.x,
  y: (t) => t.y
};
function YH(t) {
  const c = t.split("."), e = [];
  let l = "";
  for (const n of c)
    l += n, l.endsWith("\\") ? l = l.slice(0, -1) + "." : (e.push(l), l = "");
  return e;
}
function NH(t) {
  const c = YH(t);
  return (e) => {
    for (const l of c) {
      if (l === "")
        break;
      e = e && e[l];
    }
    return e;
  };
}
function Ft(t, c) {
  return (Bi[c] || (Bi[c] = NH(c)))(t);
}
function ob(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const ke = (t) => typeof t < "u", Vt = (t) => typeof t == "function", fi = (t, c) => {
  if (t.size !== c.size)
    return !1;
  for (const e of t)
    if (!c.has(e))
      return !1;
  return !0;
};
function CH(t) {
  return t.type === "mouseup" || t.type === "click" || t.type === "contextmenu";
}
const rc = Math.PI, xc = 2 * rc, zH = xc + rc, wl = Number.POSITIVE_INFINITY, wH = rc / 180, gc = rc / 2, Jt = rc / 4, Ji = rc * 2 / 3, gt = Math.log10, $c = Math.sign;
function ve(t, c, e) {
  return Math.abs(t - c) < e;
}
function Yi(t) {
  const c = Math.round(t);
  t = ve(t, c, t / 1e3) ? c : t;
  const e = Math.pow(10, Math.floor(gt(t))), l = t / e;
  return (l <= 1 ? 1 : l <= 2 ? 2 : l <= 5 ? 5 : 10) * e;
}
function SH(t) {
  const c = [], e = Math.sqrt(t);
  let l;
  for (l = 1; l < e; l++)
    t % l === 0 && (c.push(l), c.push(t / l));
  return e === (e | 0) && c.push(e), c.sort((n, d) => n - d).pop(), c;
}
function LH(t) {
  return typeof t == "symbol" || typeof t == "object" && t !== null && !(Symbol.toPrimitive in t || "toString" in t || "valueOf" in t);
}
function le(t) {
  return !LH(t) && !isNaN(parseFloat(t)) && isFinite(t);
}
function kH(t, c) {
  const e = Math.round(t);
  return e - c <= t && e + c >= t;
}
function No(t, c, e) {
  let l, n, d;
  for (l = 0, n = t.length; l < n; l++)
    d = t[l][e], isNaN(d) || (c.min = Math.min(c.min, d), c.max = Math.max(c.max, d));
}
function Qc(t) {
  return t * (rc / 180);
}
function ub(t) {
  return t * (180 / rc);
}
function Ni(t) {
  if (!Rc(t))
    return;
  let c = 1, e = 0;
  for (; Math.round(t * c) / c !== t; )
    c *= 10, e++;
  return e;
}
function Co(t, c) {
  const e = c.x - t.x, l = c.y - t.y, n = Math.sqrt(e * e + l * l);
  let d = Math.atan2(l, e);
  return d < -0.5 * rc && (d += xc), {
    angle: d,
    distance: n
  };
}
function Zd(t, c) {
  return Math.sqrt(Math.pow(c.x - t.x, 2) + Math.pow(c.y - t.y, 2));
}
function OH(t, c) {
  return (t - c + zH) % xc - rc;
}
function Sc(t) {
  return (t % xc + xc) % xc;
}
function Oe(t, c, e, l) {
  const n = Sc(t), d = Sc(c), b = Sc(e), i = Sc(d - n), a = Sc(b - n), s = Sc(n - d), o = Sc(n - b);
  return n === d || n === b || l && d === b || i > a && s < o;
}
function yc(t, c, e) {
  return Math.max(c, Math.min(e, t));
}
function AH(t) {
  return yc(t, -32768, 32767);
}
function nt(t, c, e, l = 1e-6) {
  return t >= Math.min(c, e) - l && t <= Math.max(c, e) + l;
}
function Xb(t, c, e) {
  e = e || ((b) => t[b] < c);
  let l = t.length - 1, n = 0, d;
  for (; l - n > 1; )
    d = n + l >> 1, e(d) ? n = d : l = d;
  return {
    lo: n,
    hi: l
  };
}
const dt = (t, c, e, l) => Xb(t, e, l ? (n) => {
  const d = t[n][c];
  return d < e || d === e && t[n + 1][c] === e;
} : (n) => t[n][c] < e), DH = (t, c, e) => Xb(t, e, (l) => t[l][c] >= e);
function QH(t, c, e) {
  let l = 0, n = t.length;
  for (; l < n && t[l] < c; )
    l++;
  for (; n > l && t[n - 1] > e; )
    n--;
  return l > 0 || n < t.length ? t.slice(l, n) : t;
}
const zo = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function TH(t, c) {
  if (t._chartjs) {
    t._chartjs.listeners.push(c);
    return;
  }
  Object.defineProperty(t, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        c
      ]
    }
  }), zo.forEach((e) => {
    const l = "_onData" + ob(e), n = t[e];
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      value(...d) {
        const b = n.apply(this, d);
        return t._chartjs.listeners.forEach((i) => {
          typeof i[l] == "function" && i[l](...d);
        }), b;
      }
    });
  });
}
function Ci(t, c) {
  const e = t._chartjs;
  if (!e)
    return;
  const l = e.listeners, n = l.indexOf(c);
  n !== -1 && l.splice(n, 1), !(l.length > 0) && (zo.forEach((d) => {
    delete t[d];
  }), delete t._chartjs);
}
function wo(t) {
  const c = new Set(t);
  return c.size === t.length ? t : Array.from(c);
}
const So = function() {
  return typeof window > "u" ? function(t) {
    return t();
  } : window.requestAnimationFrame;
}();
function Lo(t, c) {
  let e = [], l = !1;
  return function(...n) {
    e = n, l || (l = !0, So.call(window, () => {
      l = !1, t.apply(c, e);
    }));
  };
}
function jH(t, c) {
  let e;
  return function(...l) {
    return c ? (clearTimeout(e), e = setTimeout(t, c, l)) : t.apply(this, l), c;
  };
}
const xb = (t) => t === "start" ? "left" : t === "end" ? "right" : "center", Vc = (t, c, e) => t === "start" ? c : t === "end" ? e : (c + e) / 2, MH = (t, c, e, l) => t === (l ? "left" : "right") ? e : t === "center" ? (c + e) / 2 : c;
function ko(t, c, e) {
  const l = c.length;
  let n = 0, d = l;
  if (t._sorted) {
    const { iScale: b, vScale: i, _parsed: a } = t, s = t.dataset && t.dataset.options ? t.dataset.options.spanGaps : null, o = b.axis, { min: u, max: X, minDefined: x, maxDefined: H } = b.getUserBounds();
    if (x) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        dt(a, o, u).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? l : dt(c, o, b.getPixelForValue(u)).lo
      ), s) {
        const r = a.slice(0, n + 1).reverse().findIndex((G) => !dc(G[i.axis]));
        n -= Math.max(0, r);
      }
      n = yc(n, 0, l - 1);
    }
    if (H) {
      let r = Math.max(
        // @ts-expect-error Need to type _parsed
        dt(a, b.axis, X, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : dt(c, o, b.getPixelForValue(X), !0).hi + 1
      );
      if (s) {
        const G = a.slice(r - 1).findIndex((m) => !dc(m[i.axis]));
        r += Math.max(0, G);
      }
      d = yc(r, n, l) - n;
    } else
      d = l - n;
  }
  return {
    start: n,
    count: d
  };
}
function Oo(t) {
  const { xScale: c, yScale: e, _scaleRanges: l } = t, n = {
    xmin: c.min,
    xmax: c.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!l)
    return t._scaleRanges = n, !0;
  const d = l.xmin !== c.min || l.xmax !== c.max || l.ymin !== e.min || l.ymax !== e.max;
  return Object.assign(l, n), d;
}
const dl = (t) => t === 0 || t === 1, zi = (t, c, e) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - c) * xc / e)), wi = (t, c, e) => Math.pow(2, -10 * t) * Math.sin((t - c) * xc / e) + 1, Be = {
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => -t * (t - 2),
  easeInOutQuad: (t) => (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => (t -= 1) * t * t + 1,
  easeInOutCubic: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
  easeInQuart: (t) => t * t * t * t,
  easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
  easeInOutQuart: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
  easeInQuint: (t) => t * t * t * t * t,
  easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
  easeInOutQuint: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
  easeInSine: (t) => -Math.cos(t * gc) + 1,
  easeOutSine: (t) => Math.sin(t * gc),
  easeInOutSine: (t) => -0.5 * (Math.cos(rc * t) - 1),
  easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: (t) => t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
  easeInOutExpo: (t) => dl(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
  easeInCirc: (t) => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
  easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
  easeInOutCirc: (t) => (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
  easeInElastic: (t) => dl(t) ? t : zi(t, 0.075, 0.3),
  easeOutElastic: (t) => dl(t) ? t : wi(t, 0.075, 0.3),
  easeInOutElastic(t) {
    return dl(t) ? t : t < 0.5 ? 0.5 * zi(t * 2, 0.1125, 0.45) : 0.5 + 0.5 * wi(t * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(t) {
    return t * t * ((1.70158 + 1) * t - 1.70158);
  },
  easeOutBack(t) {
    return (t -= 1) * t * ((1.70158 + 1) * t + 1.70158) + 1;
  },
  easeInOutBack(t) {
    let c = 1.70158;
    return (t /= 0.5) < 1 ? 0.5 * (t * t * (((c *= 1.525) + 1) * t - c)) : 0.5 * ((t -= 2) * t * (((c *= 1.525) + 1) * t + c) + 2);
  },
  easeInBounce: (t) => 1 - Be.easeOutBounce(1 - t),
  easeOutBounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  easeInOutBounce: (t) => t < 0.5 ? Be.easeInBounce(t * 2) * 0.5 : Be.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};
function rb(t) {
  if (t && typeof t == "object") {
    const c = t.toString();
    return c === "[object CanvasPattern]" || c === "[object CanvasGradient]";
  }
  return !1;
}
function Si(t) {
  return rb(t) ? t : new Se(t);
}
function Jn(t) {
  return rb(t) ? t : new Se(t).saturate(0.5).darken(0.1).hexString();
}
const UH = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], PH = [
  "color",
  "borderColor",
  "backgroundColor"
];
function EH(t) {
  t.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), t.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (c) => c !== "onProgress" && c !== "onComplete" && c !== "fn"
  }), t.set("animations", {
    colors: {
      type: "color",
      properties: PH
    },
    numbers: {
      type: "number",
      properties: UH
    }
  }), t.describe("animations", {
    _fallback: "animation"
  }), t.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (c) => c | 0
        }
      }
    }
  });
}
function KH(t) {
  t.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const Li = /* @__PURE__ */ new Map();
function _H(t, c) {
  c = c || {};
  const e = t + JSON.stringify(c);
  let l = Li.get(e);
  return l || (l = new Intl.NumberFormat(t, c), Li.set(e, l)), l;
}
function Pe(t, c, e) {
  return _H(c, e).format(t);
}
const Ao = {
  values(t) {
    return Gc(t) ? t : "" + t;
  },
  numeric(t, c, e) {
    if (t === 0)
      return "0";
    const l = this.chart.options.locale;
    let n, d = t;
    if (e.length > 1) {
      const s = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (s < 1e-4 || s > 1e15) && (n = "scientific"), d = $H(t, e);
    }
    const b = gt(Math.abs(d)), i = isNaN(b) ? 1 : Math.max(Math.min(-1 * Math.floor(b), 20), 0), a = {
      notation: n,
      minimumFractionDigits: i,
      maximumFractionDigits: i
    };
    return Object.assign(a, this.options.ticks.format), Pe(t, l, a);
  },
  logarithmic(t, c, e) {
    if (t === 0)
      return "0";
    const l = e[c].significand || t / Math.pow(10, Math.floor(gt(t)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(l) || c > 0.8 * e.length ? Ao.numeric.call(this, t, c, e) : "";
  }
};
function $H(t, c) {
  let e = c.length > 3 ? c[2].value - c[1].value : c[1].value - c[0].value;
  return Math.abs(e) >= 1 && t !== Math.floor(t) && (e = t - Math.floor(t)), e;
}
var nn = {
  formatters: Ao
};
function qH(t) {
  t.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (c, e) => e.lineWidth,
      tickColor: (c, e) => e.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: nn.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), t.describe("scale", {
    _fallback: !1,
    _scriptable: (c) => !c.startsWith("before") && !c.startsWith("after") && c !== "callback" && c !== "parser",
    _indexable: (c) => c !== "borderDash" && c !== "tickBorderDash" && c !== "dash"
  }), t.describe("scales", {
    _fallback: "scale"
  }), t.describe("scale.ticks", {
    _scriptable: (c) => c !== "backdropPadding" && c !== "callback",
    _indexable: (c) => c !== "backdropPadding"
  });
}
const Qt = /* @__PURE__ */ Object.create(null), gd = /* @__PURE__ */ Object.create(null);
function fe(t, c) {
  if (!c)
    return t;
  const e = c.split(".");
  for (let l = 0, n = e.length; l < n; ++l) {
    const d = e[l];
    t = t[d] || (t[d] = /* @__PURE__ */ Object.create(null));
  }
  return t;
}
function Yn(t, c, e) {
  return typeof c == "string" ? Le(fe(t, c), e) : Le(fe(t, ""), c);
}
class cm {
  constructor(c, e) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (l) => l.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (l, n) => Jn(n.backgroundColor), this.hoverBorderColor = (l, n) => Jn(n.borderColor), this.hoverColor = (l, n) => Jn(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(c), this.apply(e);
  }
  set(c, e) {
    return Yn(this, c, e);
  }
  get(c) {
    return fe(this, c);
  }
  describe(c, e) {
    return Yn(gd, c, e);
  }
  override(c, e) {
    return Yn(Qt, c, e);
  }
  route(c, e, l, n) {
    const d = fe(this, c), b = fe(this, l), i = "_" + e;
    Object.defineProperties(d, {
      [i]: {
        value: d[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const a = this[i], s = b[n];
          return bc(a) ? Object.assign({}, s, a) : _(a, s);
        },
        set(a) {
          this[i] = a;
        }
      }
    });
  }
  apply(c) {
    c.forEach((e) => e(this));
  }
}
var mc = /* @__PURE__ */ new cm({
  _scriptable: (t) => !t.startsWith("on"),
  _indexable: (t) => t !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  EH,
  KH,
  qH
]);
function tm(t) {
  return !t || dc(t.size) || dc(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
}
function Sl(t, c, e, l, n) {
  let d = c[n];
  return d || (d = c[n] = t.measureText(n).width, e.push(n)), d > l && (l = d), l;
}
function em(t, c, e, l) {
  l = l || {};
  let n = l.data = l.data || {}, d = l.garbageCollect = l.garbageCollect || [];
  l.font !== c && (n = l.data = {}, d = l.garbageCollect = [], l.font = c), t.save(), t.font = c;
  let b = 0;
  const i = e.length;
  let a, s, o, u, X;
  for (a = 0; a < i; a++)
    if (u = e[a], u != null && !Gc(u))
      b = Sl(t, n, d, b, u);
    else if (Gc(u))
      for (s = 0, o = u.length; s < o; s++)
        X = u[s], X != null && !Gc(X) && (b = Sl(t, n, d, b, X));
  t.restore();
  const x = d.length / 2;
  if (x > e.length) {
    for (a = 0; a < x; a++)
      delete n[d[a]];
    d.splice(0, x);
  }
  return b;
}
function Yt(t, c, e) {
  const l = t.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((c - n) * l) / l + n;
}
function ki(t, c) {
  !c && !t || (c = c || t.getContext("2d"), c.save(), c.resetTransform(), c.clearRect(0, 0, t.width, t.height), c.restore());
}
function hd(t, c, e, l) {
  Do(t, c, e, l, null);
}
function Do(t, c, e, l, n) {
  let d, b, i, a, s, o, u, X;
  const x = c.pointStyle, H = c.rotation, r = c.radius;
  let G = (H || 0) * wH;
  if (x && typeof x == "object" && (d = x.toString(), d === "[object HTMLImageElement]" || d === "[object HTMLCanvasElement]")) {
    t.save(), t.translate(e, l), t.rotate(G), t.drawImage(x, -x.width / 2, -x.height / 2, x.width, x.height), t.restore();
    return;
  }
  if (!(isNaN(r) || r <= 0)) {
    switch (t.beginPath(), x) {
      // Default includes circle
      default:
        n ? t.ellipse(e, l, n / 2, r, 0, 0, xc) : t.arc(e, l, r, 0, xc), t.closePath();
        break;
      case "triangle":
        o = n ? n / 2 : r, t.moveTo(e + Math.sin(G) * o, l - Math.cos(G) * r), G += Ji, t.lineTo(e + Math.sin(G) * o, l - Math.cos(G) * r), G += Ji, t.lineTo(e + Math.sin(G) * o, l - Math.cos(G) * r), t.closePath();
        break;
      case "rectRounded":
        s = r * 0.516, a = r - s, b = Math.cos(G + Jt) * a, u = Math.cos(G + Jt) * (n ? n / 2 - s : a), i = Math.sin(G + Jt) * a, X = Math.sin(G + Jt) * (n ? n / 2 - s : a), t.arc(e - u, l - i, s, G - rc, G - gc), t.arc(e + X, l - b, s, G - gc, G), t.arc(e + u, l + i, s, G, G + gc), t.arc(e - X, l + b, s, G + gc, G + rc), t.closePath();
        break;
      case "rect":
        if (!H) {
          a = Math.SQRT1_2 * r, o = n ? n / 2 : a, t.rect(e - o, l - a, 2 * o, 2 * a);
          break;
        }
        G += Jt;
      /* falls through */
      case "rectRot":
        u = Math.cos(G) * (n ? n / 2 : r), b = Math.cos(G) * r, i = Math.sin(G) * r, X = Math.sin(G) * (n ? n / 2 : r), t.moveTo(e - u, l - i), t.lineTo(e + X, l - b), t.lineTo(e + u, l + i), t.lineTo(e - X, l + b), t.closePath();
        break;
      case "crossRot":
        G += Jt;
      /* falls through */
      case "cross":
        u = Math.cos(G) * (n ? n / 2 : r), b = Math.cos(G) * r, i = Math.sin(G) * r, X = Math.sin(G) * (n ? n / 2 : r), t.moveTo(e - u, l - i), t.lineTo(e + u, l + i), t.moveTo(e + X, l - b), t.lineTo(e - X, l + b);
        break;
      case "star":
        u = Math.cos(G) * (n ? n / 2 : r), b = Math.cos(G) * r, i = Math.sin(G) * r, X = Math.sin(G) * (n ? n / 2 : r), t.moveTo(e - u, l - i), t.lineTo(e + u, l + i), t.moveTo(e + X, l - b), t.lineTo(e - X, l + b), G += Jt, u = Math.cos(G) * (n ? n / 2 : r), b = Math.cos(G) * r, i = Math.sin(G) * r, X = Math.sin(G) * (n ? n / 2 : r), t.moveTo(e - u, l - i), t.lineTo(e + u, l + i), t.moveTo(e + X, l - b), t.lineTo(e - X, l + b);
        break;
      case "line":
        b = n ? n / 2 : Math.cos(G) * r, i = Math.sin(G) * r, t.moveTo(e - b, l - i), t.lineTo(e + b, l + i);
        break;
      case "dash":
        t.moveTo(e, l), t.lineTo(e + Math.cos(G) * (n ? n / 2 : r), l + Math.sin(G) * r);
        break;
      case !1:
        t.closePath();
        break;
    }
    t.fill(), c.borderWidth > 0 && t.stroke();
  }
}
function bt(t, c, e) {
  return e = e || 0.5, !c || t && t.x > c.left - e && t.x < c.right + e && t.y > c.top - e && t.y < c.bottom + e;
}
function dn(t, c) {
  t.save(), t.beginPath(), t.rect(c.left, c.top, c.right - c.left, c.bottom - c.top), t.clip();
}
function bn(t) {
  t.restore();
}
function lm(t, c, e, l, n) {
  if (!c)
    return t.lineTo(e.x, e.y);
  if (n === "middle") {
    const d = (c.x + e.x) / 2;
    t.lineTo(d, c.y), t.lineTo(d, e.y);
  } else n === "after" != !!l ? t.lineTo(c.x, e.y) : t.lineTo(e.x, c.y);
  t.lineTo(e.x, e.y);
}
function nm(t, c, e, l) {
  if (!c)
    return t.lineTo(e.x, e.y);
  t.bezierCurveTo(l ? c.cp1x : c.cp2x, l ? c.cp1y : c.cp2y, l ? e.cp2x : e.cp1x, l ? e.cp2y : e.cp1y, e.x, e.y);
}
function dm(t, c) {
  c.translation && t.translate(c.translation[0], c.translation[1]), dc(c.rotation) || t.rotate(c.rotation), c.color && (t.fillStyle = c.color), c.textAlign && (t.textAlign = c.textAlign), c.textBaseline && (t.textBaseline = c.textBaseline);
}
function bm(t, c, e, l, n) {
  if (n.strikethrough || n.underline) {
    const d = t.measureText(l), b = c - d.actualBoundingBoxLeft, i = c + d.actualBoundingBoxRight, a = e - d.actualBoundingBoxAscent, s = e + d.actualBoundingBoxDescent, o = n.strikethrough ? (a + s) / 2 : s;
    t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(b, o), t.lineTo(i, o), t.stroke();
  }
}
function im(t, c) {
  const e = t.fillStyle;
  t.fillStyle = c.color, t.fillRect(c.left, c.top, c.width, c.height), t.fillStyle = e;
}
function Tt(t, c, e, l, n, d = {}) {
  const b = Gc(c) ? c : [
    c
  ], i = d.strokeWidth > 0 && d.strokeColor !== "";
  let a, s;
  for (t.save(), t.font = n.string, dm(t, d), a = 0; a < b.length; ++a)
    s = b[a], d.backdrop && im(t, d.backdrop), i && (d.strokeColor && (t.strokeStyle = d.strokeColor), dc(d.strokeWidth) || (t.lineWidth = d.strokeWidth), t.strokeText(s, e, l, d.maxWidth)), t.fillText(s, e, l, d.maxWidth), bm(t, e, l, s, d), l += Number(n.lineHeight);
  t.restore();
}
function Ae(t, c) {
  const { x: e, y: l, w: n, h: d, radius: b } = c;
  t.arc(e + b.topLeft, l + b.topLeft, b.topLeft, 1.5 * rc, rc, !0), t.lineTo(e, l + d - b.bottomLeft), t.arc(e + b.bottomLeft, l + d - b.bottomLeft, b.bottomLeft, rc, gc, !0), t.lineTo(e + n - b.bottomRight, l + d), t.arc(e + n - b.bottomRight, l + d - b.bottomRight, b.bottomRight, gc, 0, !0), t.lineTo(e + n, l + b.topRight), t.arc(e + n - b.topRight, l + b.topRight, b.topRight, 0, -gc, !0), t.lineTo(e + b.topLeft, l);
}
const am = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, sm = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function om(t, c) {
  const e = ("" + t).match(am);
  if (!e || e[1] === "normal")
    return c * 1.2;
  switch (t = +e[2], e[3]) {
    case "px":
      return t;
    case "%":
      t /= 100;
      break;
  }
  return c * t;
}
const um = (t) => +t || 0;
function Gb(t, c) {
  const e = {}, l = bc(c), n = l ? Object.keys(c) : c, d = bc(t) ? l ? (b) => _(t[b], t[c[b]]) : (b) => t[b] : () => t;
  for (const b of n)
    e[b] = um(d(b));
  return e;
}
function Qo(t) {
  return Gb(t, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function kt(t) {
  return Gb(t, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Jc(t) {
  const c = Qo(t);
  return c.width = c.left + c.right, c.height = c.top + c.bottom, c;
}
function Wc(t, c) {
  t = t || {}, c = c || mc.font;
  let e = _(t.size, c.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let l = _(t.style, c.style);
  l && !("" + l).match(sm) && (console.warn('Invalid font style specified: "' + l + '"'), l = void 0);
  const n = {
    family: _(t.family, c.family),
    lineHeight: om(_(t.lineHeight, c.lineHeight), e),
    size: e,
    style: l,
    weight: _(t.weight, c.weight),
    string: ""
  };
  return n.string = tm(n), n;
}
function Re(t, c, e, l) {
  let n, d, b;
  for (n = 0, d = t.length; n < d; ++n)
    if (b = t[n], b !== void 0 && b !== void 0)
      return b;
}
function Xm(t, c, e) {
  const { min: l, max: n } = t, d = Jo(c, (n - l) / 2), b = (i, a) => e && i === 0 ? 0 : i + a;
  return {
    min: b(l, -Math.abs(d)),
    max: b(n, d)
  };
}
function vt(t, c) {
  return Object.assign(Object.create(t), c);
}
function Hb(t, c = [
  ""
], e, l, n = () => t[0]) {
  const d = e || t;
  typeof l > "u" && (l = Uo("_fallback", t));
  const b = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: t,
    _rootScopes: d,
    _fallback: l,
    _getTarget: n,
    override: (i) => Hb([
      i,
      ...t
    ], c, d, l)
  };
  return new Proxy(b, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(i, a) {
      return delete i[a], delete i._keys, delete t[0][a], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(i, a) {
      return jo(i, a, () => gm(a, c, t, i));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(i, a) {
      return Reflect.getOwnPropertyDescriptor(i._scopes[0], a);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(i, a) {
      return Ai(i).includes(a);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(i) {
      return Ai(i);
    },
    /**
    * A trap for setting property values.
    */
    set(i, a, s) {
      const o = i._storage || (i._storage = n());
      return i[a] = o[a] = s, delete i._keys, !0;
    }
  });
}
function ne(t, c, e, l) {
  const n = {
    _cacheable: !1,
    _proxy: t,
    _context: c,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: To(t, l),
    setContext: (d) => ne(t, d, e, l),
    override: (d) => ne(t.override(d), c, e, l)
  };
  return new Proxy(n, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(d, b) {
      return delete d[b], delete t[b], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(d, b, i) {
      return jo(d, b, () => rm(d, b, i));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(d, b) {
      return d._descriptors.allKeys ? Reflect.has(t, b) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(t, b);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t);
    },
    /**
    * A trap for the in operator.
    */
    has(d, b) {
      return Reflect.has(t, b);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(t);
    },
    /**
    * A trap for setting property values.
    */
    set(d, b, i) {
      return t[b] = i, delete d[b], !0;
    }
  });
}
function To(t, c = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = c.scriptable, _indexable: l = c.indexable, _allKeys: n = c.allKeys } = t;
  return {
    allKeys: n,
    scriptable: e,
    indexable: l,
    isScriptable: Vt(e) ? e : () => e,
    isIndexable: Vt(l) ? l : () => l
  };
}
const xm = (t, c) => t ? t + ob(c) : c, mb = (t, c) => bc(c) && t !== "adapters" && (Object.getPrototypeOf(c) === null || c.constructor === Object);
function jo(t, c, e) {
  if (Object.prototype.hasOwnProperty.call(t, c) || c === "constructor")
    return t[c];
  const l = e();
  return t[c] = l, l;
}
function rm(t, c, e) {
  const { _proxy: l, _context: n, _subProxy: d, _descriptors: b } = t;
  let i = l[c];
  return Vt(i) && b.isScriptable(c) && (i = Gm(c, i, t, e)), Gc(i) && i.length && (i = Hm(c, i, t, b.isIndexable)), mb(c, i) && (i = ne(i, n, d && d[c], b)), i;
}
function Gm(t, c, e, l) {
  const { _proxy: n, _context: d, _subProxy: b, _stack: i } = e;
  if (i.has(t))
    throw new Error("Recursion detected: " + Array.from(i).join("->") + "->" + t);
  i.add(t);
  let a = c(d, b || l);
  return i.delete(t), mb(t, a) && (a = Rb(n._scopes, n, t, a)), a;
}
function Hm(t, c, e, l) {
  const { _proxy: n, _context: d, _subProxy: b, _descriptors: i } = e;
  if (typeof d.index < "u" && l(t))
    return c[d.index % c.length];
  if (bc(c[0])) {
    const a = c, s = n._scopes.filter((o) => o !== a);
    c = [];
    for (const o of a) {
      const u = Rb(s, n, t, o);
      c.push(ne(u, d, b && b[t], i));
    }
  }
  return c;
}
function Mo(t, c, e) {
  return Vt(t) ? t(c, e) : t;
}
const mm = (t, c) => t === !0 ? c : typeof t == "string" ? Ft(c, t) : void 0;
function Rm(t, c, e, l, n) {
  for (const d of c) {
    const b = mm(e, d);
    if (b) {
      t.add(b);
      const i = Mo(b._fallback, e, n);
      if (typeof i < "u" && i !== e && i !== l)
        return i;
    } else if (b === !1 && typeof l < "u" && e !== l)
      return null;
  }
  return !1;
}
function Rb(t, c, e, l) {
  const n = c._rootScopes, d = Mo(c._fallback, e, l), b = [
    ...t,
    ...n
  ], i = /* @__PURE__ */ new Set();
  i.add(l);
  let a = Oi(i, b, e, d || e, l);
  return a === null || typeof d < "u" && d !== e && (a = Oi(i, b, d, a, l), a === null) ? !1 : Hb(Array.from(i), [
    ""
  ], n, d, () => Zm(c, e, l));
}
function Oi(t, c, e, l, n) {
  for (; e; )
    e = Rm(t, c, e, l, n);
  return e;
}
function Zm(t, c, e) {
  const l = t._getTarget();
  c in l || (l[c] = {});
  const n = l[c];
  return Gc(n) && bc(e) ? e : n || {};
}
function gm(t, c, e, l) {
  let n;
  for (const d of c)
    if (n = Uo(xm(d, t), e), typeof n < "u")
      return mb(t, n) ? Rb(e, l, t, n) : n;
}
function Uo(t, c) {
  for (const e of c) {
    if (!e)
      continue;
    const l = e[t];
    if (typeof l < "u")
      return l;
  }
}
function Ai(t) {
  let c = t._keys;
  return c || (c = t._keys = hm(t._scopes)), c;
}
function hm(t) {
  const c = /* @__PURE__ */ new Set();
  for (const e of t)
    for (const l of Object.keys(e).filter((n) => !n.startsWith("_")))
      c.add(l);
  return Array.from(c);
}
function Po(t, c, e, l) {
  const { iScale: n } = t, { key: d = "r" } = this._parsing, b = new Array(l);
  let i, a, s, o;
  for (i = 0, a = l; i < a; ++i)
    s = i + e, o = c[s], b[i] = {
      r: n.parse(Ft(o, d), s)
    };
  return b;
}
const Wm = Number.EPSILON || 1e-14, de = (t, c) => c < t.length && !t[c].skip && t[c], Eo = (t) => t === "x" ? "y" : "x";
function pm(t, c, e, l) {
  const n = t.skip ? c : t, d = c, b = e.skip ? c : e, i = Zd(d, n), a = Zd(b, d);
  let s = i / (i + a), o = a / (i + a);
  s = isNaN(s) ? 0 : s, o = isNaN(o) ? 0 : o;
  const u = l * s, X = l * o;
  return {
    previous: {
      x: d.x - u * (b.x - n.x),
      y: d.y - u * (b.y - n.y)
    },
    next: {
      x: d.x + X * (b.x - n.x),
      y: d.y + X * (b.y - n.y)
    }
  };
}
function ym(t, c, e) {
  const l = t.length;
  let n, d, b, i, a, s = de(t, 0);
  for (let o = 0; o < l - 1; ++o)
    if (a = s, s = de(t, o + 1), !(!a || !s)) {
      if (ve(c[o], 0, Wm)) {
        e[o] = e[o + 1] = 0;
        continue;
      }
      n = e[o] / c[o], d = e[o + 1] / c[o], i = Math.pow(n, 2) + Math.pow(d, 2), !(i <= 9) && (b = 3 / Math.sqrt(i), e[o] = n * b * c[o], e[o + 1] = d * b * c[o]);
    }
}
function Im(t, c, e = "x") {
  const l = Eo(e), n = t.length;
  let d, b, i, a = de(t, 0);
  for (let s = 0; s < n; ++s) {
    if (b = i, i = a, a = de(t, s + 1), !i)
      continue;
    const o = i[e], u = i[l];
    b && (d = (o - b[e]) / 3, i[`cp1${e}`] = o - d, i[`cp1${l}`] = u - d * c[s]), a && (d = (a[e] - o) / 3, i[`cp2${e}`] = o + d, i[`cp2${l}`] = u + d * c[s]);
  }
}
function Fm(t, c = "x") {
  const e = Eo(c), l = t.length, n = Array(l).fill(0), d = Array(l);
  let b, i, a, s = de(t, 0);
  for (b = 0; b < l; ++b)
    if (i = a, a = s, s = de(t, b + 1), !!a) {
      if (s) {
        const o = s[c] - a[c];
        n[b] = o !== 0 ? (s[e] - a[e]) / o : 0;
      }
      d[b] = i ? s ? $c(n[b - 1]) !== $c(n[b]) ? 0 : (n[b - 1] + n[b]) / 2 : n[b - 1] : n[b];
    }
  ym(t, n, d), Im(t, d, c);
}
function bl(t, c, e) {
  return Math.max(Math.min(t, e), c);
}
function Vm(t, c) {
  let e, l, n, d, b, i = bt(t[0], c);
  for (e = 0, l = t.length; e < l; ++e)
    b = d, d = i, i = e < l - 1 && bt(t[e + 1], c), d && (n = t[e], b && (n.cp1x = bl(n.cp1x, c.left, c.right), n.cp1y = bl(n.cp1y, c.top, c.bottom)), i && (n.cp2x = bl(n.cp2x, c.left, c.right), n.cp2y = bl(n.cp2y, c.top, c.bottom)));
}
function vm(t, c, e, l, n) {
  let d, b, i, a;
  if (c.spanGaps && (t = t.filter((s) => !s.skip)), c.cubicInterpolationMode === "monotone")
    Fm(t, n);
  else {
    let s = l ? t[t.length - 1] : t[0];
    for (d = 0, b = t.length; d < b; ++d)
      i = t[d], a = pm(s, i, t[Math.min(d + 1, b - (l ? 0 : 1)) % b], c.tension), i.cp1x = a.previous.x, i.cp1y = a.previous.y, i.cp2x = a.next.x, i.cp2y = a.next.y, s = i;
  }
  c.capBezierPoints && Vm(t, e);
}
function Zb() {
  return typeof window < "u" && typeof document < "u";
}
function gb(t) {
  let c = t.parentNode;
  return c && c.toString() === "[object ShadowRoot]" && (c = c.host), c;
}
function Ll(t, c, e) {
  let l;
  return typeof t == "string" ? (l = parseInt(t, 10), t.indexOf("%") !== -1 && (l = l / 100 * c.parentNode[e])) : l = t, l;
}
const an = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
function Bm(t, c) {
  return an(t).getPropertyValue(c);
}
const fm = [
  "top",
  "right",
  "bottom",
  "left"
];
function Ot(t, c, e) {
  const l = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const d = fm[n];
    l[d] = parseFloat(t[c + "-" + d + e]) || 0;
  }
  return l.width = l.left + l.right, l.height = l.top + l.bottom, l;
}
const Jm = (t, c, e) => (t > 0 || c > 0) && (!e || !e.shadowRoot);
function Ym(t, c) {
  const e = t.touches, l = e && e.length ? e[0] : t, { offsetX: n, offsetY: d } = l;
  let b = !1, i, a;
  if (Jm(n, d, t.target))
    i = n, a = d;
  else {
    const s = c.getBoundingClientRect();
    i = l.clientX - s.left, a = l.clientY - s.top, b = !0;
  }
  return {
    x: i,
    y: a,
    box: b
  };
}
function zt(t, c) {
  if ("native" in t)
    return t;
  const { canvas: e, currentDevicePixelRatio: l } = c, n = an(e), d = n.boxSizing === "border-box", b = Ot(n, "padding"), i = Ot(n, "border", "width"), { x: a, y: s, box: o } = Ym(t, e), u = b.left + (o && i.left), X = b.top + (o && i.top);
  let { width: x, height: H } = c;
  return d && (x -= b.width + i.width, H -= b.height + i.height), {
    x: Math.round((a - u) / x * e.width / l),
    y: Math.round((s - X) / H * e.height / l)
  };
}
function Nm(t, c, e) {
  let l, n;
  if (c === void 0 || e === void 0) {
    const d = t && gb(t);
    if (!d)
      c = t.clientWidth, e = t.clientHeight;
    else {
      const b = d.getBoundingClientRect(), i = an(d), a = Ot(i, "border", "width"), s = Ot(i, "padding");
      c = b.width - s.width - a.width, e = b.height - s.height - a.height, l = Ll(i.maxWidth, d, "clientWidth"), n = Ll(i.maxHeight, d, "clientHeight");
    }
  }
  return {
    width: c,
    height: e,
    maxWidth: l || wl,
    maxHeight: n || wl
  };
}
const il = (t) => Math.round(t * 10) / 10;
function Cm(t, c, e, l) {
  const n = an(t), d = Ot(n, "margin"), b = Ll(n.maxWidth, t, "clientWidth") || wl, i = Ll(n.maxHeight, t, "clientHeight") || wl, a = Nm(t, c, e);
  let { width: s, height: o } = a;
  if (n.boxSizing === "content-box") {
    const X = Ot(n, "border", "width"), x = Ot(n, "padding");
    s -= x.width + X.width, o -= x.height + X.height;
  }
  return s = Math.max(0, s - d.width), o = Math.max(0, l ? s / l : o - d.height), s = il(Math.min(s, b, a.maxWidth)), o = il(Math.min(o, i, a.maxHeight)), s && !o && (o = il(s / 2)), (c !== void 0 || e !== void 0) && l && a.height && o > a.height && (o = a.height, s = il(Math.floor(o * l))), {
    width: s,
    height: o
  };
}
function Di(t, c, e) {
  const l = c || 1, n = Math.floor(t.height * l), d = Math.floor(t.width * l);
  t.height = Math.floor(t.height), t.width = Math.floor(t.width);
  const b = t.canvas;
  return b.style && (e || !b.style.height && !b.style.width) && (b.style.height = `${t.height}px`, b.style.width = `${t.width}px`), t.currentDevicePixelRatio !== l || b.height !== n || b.width !== d ? (t.currentDevicePixelRatio = l, b.height = n, b.width = d, t.ctx.setTransform(l, 0, 0, l, 0, 0), !0) : !1;
}
const zm = function() {
  let t = !1;
  try {
    const c = {
      get passive() {
        return t = !0, !1;
      }
    };
    Zb() && (window.addEventListener("test", null, c), window.removeEventListener("test", null, c));
  } catch {
  }
  return t;
}();
function Qi(t, c) {
  const e = Bm(t, c), l = e && e.match(/^(\d+)(\.\d+)?px$/);
  return l ? +l[1] : void 0;
}
function wt(t, c, e, l) {
  return {
    x: t.x + e * (c.x - t.x),
    y: t.y + e * (c.y - t.y)
  };
}
function wm(t, c, e, l) {
  return {
    x: t.x + e * (c.x - t.x),
    y: l === "middle" ? e < 0.5 ? t.y : c.y : l === "after" ? e < 1 ? t.y : c.y : e > 0 ? c.y : t.y
  };
}
function Sm(t, c, e, l) {
  const n = {
    x: t.cp2x,
    y: t.cp2y
  }, d = {
    x: c.cp1x,
    y: c.cp1y
  }, b = wt(t, n, e), i = wt(n, d, e), a = wt(d, c, e), s = wt(b, i, e), o = wt(i, a, e);
  return wt(s, o, e);
}
const Lm = function(t, c) {
  return {
    x(e) {
      return t + t + c - e;
    },
    setWidth(e) {
      c = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, l) {
      return e - l;
    },
    leftForLtr(e, l) {
      return e - l;
    }
  };
}, km = function() {
  return {
    x(t) {
      return t;
    },
    setWidth(t) {
    },
    textAlign(t) {
      return t;
    },
    xPlus(t, c) {
      return t + c;
    },
    leftForLtr(t, c) {
      return t;
    }
  };
};
function qt(t, c, e) {
  return t ? Lm(c, e) : km();
}
function Ko(t, c) {
  let e, l;
  (c === "ltr" || c === "rtl") && (e = t.canvas.style, l = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", c, "important"), t.prevTextDirection = l);
}
function _o(t, c) {
  c !== void 0 && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", c[0], c[1]));
}
function $o(t) {
  return t === "angle" ? {
    between: Oe,
    compare: OH,
    normalize: Sc
  } : {
    between: nt,
    compare: (c, e) => c - e,
    normalize: (c) => c
  };
}
function Ti({ start: t, end: c, count: e, loop: l, style: n }) {
  return {
    start: t % e,
    end: c % e,
    loop: l && (c - t + 1) % e === 0,
    style: n
  };
}
function Om(t, c, e) {
  const { property: l, start: n, end: d } = e, { between: b, normalize: i } = $o(l), a = c.length;
  let { start: s, end: o, loop: u } = t, X, x;
  if (u) {
    for (s += a, o += a, X = 0, x = a; X < x && b(i(c[s % a][l]), n, d); ++X)
      s--, o--;
    s %= a, o %= a;
  }
  return o < s && (o += a), {
    start: s,
    end: o,
    loop: u,
    style: t.style
  };
}
function qo(t, c, e) {
  if (!e)
    return [
      t
    ];
  const { property: l, start: n, end: d } = e, b = c.length, { compare: i, between: a, normalize: s } = $o(l), { start: o, end: u, loop: X, style: x } = Om(t, c, e), H = [];
  let r = !1, G = null, m, Z, h;
  const g = () => a(n, h, m) && i(n, h) !== 0, R = () => i(d, m) === 0 || a(d, h, m), W = () => r || g(), p = () => !r || R();
  for (let y = o, V = o; y <= u; ++y)
    Z = c[y % b], !Z.skip && (m = s(Z[l]), m !== h && (r = a(m, n, d), G === null && W() && (G = i(m, n) === 0 ? y : V), G !== null && p() && (H.push(Ti({
      start: G,
      end: y,
      loop: X,
      count: b,
      style: x
    })), G = null), V = y, h = m));
  return G !== null && H.push(Ti({
    start: G,
    end: u,
    loop: X,
    count: b,
    style: x
  })), H;
}
function cu(t, c) {
  const e = [], l = t.segments;
  for (let n = 0; n < l.length; n++) {
    const d = qo(l[n], t.points, c);
    d.length && e.push(...d);
  }
  return e;
}
function Am(t, c, e, l) {
  let n = 0, d = c - 1;
  if (e && !l)
    for (; n < c && !t[n].skip; )
      n++;
  for (; n < c && t[n].skip; )
    n++;
  for (n %= c, e && (d += n); d > n && t[d % c].skip; )
    d--;
  return d %= c, {
    start: n,
    end: d
  };
}
function Dm(t, c, e, l) {
  const n = t.length, d = [];
  let b = c, i = t[c], a;
  for (a = c + 1; a <= e; ++a) {
    const s = t[a % n];
    s.skip || s.stop ? i.skip || (l = !1, d.push({
      start: c % n,
      end: (a - 1) % n,
      loop: l
    }), c = b = s.stop ? a : null) : (b = a, i.skip && (c = a)), i = s;
  }
  return b !== null && d.push({
    start: c % n,
    end: b % n,
    loop: l
  }), d;
}
function Qm(t, c) {
  const e = t.points, l = t.options.spanGaps, n = e.length;
  if (!n)
    return [];
  const d = !!t._loop, { start: b, end: i } = Am(e, n, d, l);
  if (l === !0)
    return ji(t, [
      {
        start: b,
        end: i,
        loop: d
      }
    ], e, c);
  const a = i < b ? i + n : i, s = !!t._fullLoop && b === 0 && i === n - 1;
  return ji(t, Dm(e, b, a, s), e, c);
}
function ji(t, c, e, l) {
  return !l || !l.setContext || !e ? c : Tm(t, c, e, l);
}
function Tm(t, c, e, l) {
  const n = t._chart.getContext(), d = Mi(t.options), { _datasetIndex: b, options: { spanGaps: i } } = t, a = e.length, s = [];
  let o = d, u = c[0].start, X = u;
  function x(H, r, G, m) {
    const Z = i ? -1 : 1;
    if (H !== r) {
      for (H += a; e[H % a].skip; )
        H -= Z;
      for (; e[r % a].skip; )
        r += Z;
      H % a !== r % a && (s.push({
        start: H % a,
        end: r % a,
        loop: G,
        style: m
      }), o = m, u = r % a);
    }
  }
  for (const H of c) {
    u = i ? u : H.start;
    let r = e[u % a], G;
    for (X = u + 1; X <= H.end; X++) {
      const m = e[X % a];
      G = Mi(l.setContext(vt(n, {
        type: "segment",
        p0: r,
        p1: m,
        p0DataIndex: (X - 1) % a,
        p1DataIndex: X % a,
        datasetIndex: b
      }))), jm(G, o) && x(u, X - 1, H.loop, o), r = m, o = G;
    }
    u < X - 1 && x(u, X - 1, H.loop, o);
  }
  return s;
}
function Mi(t) {
  return {
    backgroundColor: t.backgroundColor,
    borderCapStyle: t.borderCapStyle,
    borderDash: t.borderDash,
    borderDashOffset: t.borderDashOffset,
    borderJoinStyle: t.borderJoinStyle,
    borderWidth: t.borderWidth,
    borderColor: t.borderColor
  };
}
function jm(t, c) {
  if (!c)
    return !1;
  const e = [], l = function(n, d) {
    return rb(d) ? (e.includes(d) || e.push(d), e.indexOf(d)) : d;
  };
  return JSON.stringify(t, l) !== JSON.stringify(c, l);
}
function al(t, c, e) {
  return t.options.clip ? t[e] : c[e];
}
function Mm(t, c) {
  const { xScale: e, yScale: l } = t;
  return e && l ? {
    left: al(e, c, "left"),
    right: al(e, c, "right"),
    top: al(l, c, "top"),
    bottom: al(l, c, "bottom")
  } : c;
}
function tu(t, c) {
  const e = c._clip;
  if (e.disabled)
    return !1;
  const l = Mm(c, t.chartArea);
  return {
    left: e.left === !1 ? 0 : l.left - (e.left === !0 ? 0 : e.left),
    right: e.right === !1 ? t.width : l.right + (e.right === !0 ? 0 : e.right),
    top: e.top === !1 ? 0 : l.top - (e.top === !0 ? 0 : e.top),
    bottom: e.bottom === !1 ? t.height : l.bottom + (e.bottom === !0 ? 0 : e.bottom)
  };
}
/*!
 * Chart.js v4.4.9
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class Um {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(c, e, l, n) {
    const d = e.listeners[n], b = e.duration;
    d.forEach((i) => i({
      chart: c,
      initial: e.initial,
      numSteps: b,
      currentStep: Math.min(l - e.start, b)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = So.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(c = Date.now()) {
    let e = 0;
    this._charts.forEach((l, n) => {
      if (!l.running || !l.items.length)
        return;
      const d = l.items;
      let b = d.length - 1, i = !1, a;
      for (; b >= 0; --b)
        a = d[b], a._active ? (a._total > l.duration && (l.duration = a._total), a.tick(c), i = !0) : (d[b] = d[d.length - 1], d.pop());
      i && (n.draw(), this._notify(n, l, c, "progress")), d.length || (l.running = !1, this._notify(n, l, c, "complete"), l.initial = !1), e += d.length;
    }), this._lastDate = c, e === 0 && (this._running = !1);
  }
  _getAnims(c) {
    const e = this._charts;
    let l = e.get(c);
    return l || (l = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(c, l)), l;
  }
  listen(c, e, l) {
    this._getAnims(c).listeners[e].push(l);
  }
  add(c, e) {
    !e || !e.length || this._getAnims(c).items.push(...e);
  }
  has(c) {
    return this._getAnims(c).items.length > 0;
  }
  start(c) {
    const e = this._charts.get(c);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((l, n) => Math.max(l, n._duration), 0), this._refresh());
  }
  running(c) {
    if (!this._running)
      return !1;
    const e = this._charts.get(c);
    return !(!e || !e.running || !e.items.length);
  }
  stop(c) {
    const e = this._charts.get(c);
    if (!e || !e.items.length)
      return;
    const l = e.items;
    let n = l.length - 1;
    for (; n >= 0; --n)
      l[n].cancel();
    e.items = [], this._notify(c, e, Date.now(), "complete");
  }
  remove(c) {
    return this._charts.delete(c);
  }
}
var tt = /* @__PURE__ */ new Um();
const Ui = "transparent", Pm = {
  boolean(t, c, e) {
    return e > 0.5 ? c : t;
  },
  color(t, c, e) {
    const l = Si(t || Ui), n = l.valid && Si(c || Ui);
    return n && n.valid ? n.mix(l, e).hexString() : c;
  },
  number(t, c, e) {
    return t + (c - t) * e;
  }
};
class Em {
  constructor(c, e, l, n) {
    const d = e[l];
    n = Re([
      c.to,
      n,
      d,
      c.from
    ]);
    const b = Re([
      c.from,
      d,
      n
    ]);
    this._active = !0, this._fn = c.fn || Pm[c.type || typeof b], this._easing = Be[c.easing] || Be.linear, this._start = Math.floor(Date.now() + (c.delay || 0)), this._duration = this._total = Math.floor(c.duration), this._loop = !!c.loop, this._target = e, this._prop = l, this._from = b, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(c, e, l) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], d = l - this._start, b = this._duration - d;
      this._start = l, this._duration = Math.floor(Math.max(b, c.duration)), this._total += d, this._loop = !!c.loop, this._to = Re([
        c.to,
        e,
        n,
        c.from
      ]), this._from = Re([
        c.from,
        n,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(c) {
    const e = c - this._start, l = this._duration, n = this._prop, d = this._from, b = this._loop, i = this._to;
    let a;
    if (this._active = d !== i && (b || e < l), !this._active) {
      this._target[n] = i, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[n] = d;
      return;
    }
    a = e / l % 2, a = b && a > 1 ? 2 - a : a, a = this._easing(Math.min(1, Math.max(0, a))), this._target[n] = this._fn(d, i, a);
  }
  wait() {
    const c = this._promises || (this._promises = []);
    return new Promise((e, l) => {
      c.push({
        res: e,
        rej: l
      });
    });
  }
  _notify(c) {
    const e = c ? "res" : "rej", l = this._promises || [];
    for (let n = 0; n < l.length; n++)
      l[n][e]();
  }
}
class eu {
  constructor(c, e) {
    this._chart = c, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(c) {
    if (!bc(c))
      return;
    const e = Object.keys(mc.animation), l = this._properties;
    Object.getOwnPropertyNames(c).forEach((n) => {
      const d = c[n];
      if (!bc(d))
        return;
      const b = {};
      for (const i of e)
        b[i] = d[i];
      (Gc(d.properties) && d.properties || [
        n
      ]).forEach((i) => {
        (i === n || !l.has(i)) && l.set(i, b);
      });
    });
  }
  _animateOptions(c, e) {
    const l = e.options, n = _m(c, l);
    if (!n)
      return [];
    const d = this._createAnimations(n, l);
    return l.$shared && Km(c.options.$animations, l).then(() => {
      c.options = l;
    }, () => {
    }), d;
  }
  _createAnimations(c, e) {
    const l = this._properties, n = [], d = c.$animations || (c.$animations = {}), b = Object.keys(e), i = Date.now();
    let a;
    for (a = b.length - 1; a >= 0; --a) {
      const s = b[a];
      if (s.charAt(0) === "$")
        continue;
      if (s === "options") {
        n.push(...this._animateOptions(c, e));
        continue;
      }
      const o = e[s];
      let u = d[s];
      const X = l.get(s);
      if (u)
        if (X && u.active()) {
          u.update(X, o, i);
          continue;
        } else
          u.cancel();
      if (!X || !X.duration) {
        c[s] = o;
        continue;
      }
      d[s] = u = new Em(X, c, s, o), n.push(u);
    }
    return n;
  }
  update(c, e) {
    if (this._properties.size === 0) {
      Object.assign(c, e);
      return;
    }
    const l = this._createAnimations(c, e);
    if (l.length)
      return tt.add(this._chart, l), !0;
  }
}
function Km(t, c) {
  const e = [], l = Object.keys(c);
  for (let n = 0; n < l.length; n++) {
    const d = t[l[n]];
    d && d.active() && e.push(d.wait());
  }
  return Promise.all(e);
}
function _m(t, c) {
  if (!c)
    return;
  let e = t.options;
  if (!e) {
    t.options = c;
    return;
  }
  return e.$shared && (t.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function Pi(t, c) {
  const e = t && t.options || {}, l = e.reverse, n = e.min === void 0 ? c : 0, d = e.max === void 0 ? c : 0;
  return {
    start: l ? d : n,
    end: l ? n : d
  };
}
function $m(t, c, e) {
  if (e === !1)
    return !1;
  const l = Pi(t, e), n = Pi(c, e);
  return {
    top: n.end,
    right: l.end,
    bottom: n.start,
    left: l.start
  };
}
function qm(t) {
  let c, e, l, n;
  return bc(t) ? (c = t.top, e = t.right, l = t.bottom, n = t.left) : c = e = l = n = t, {
    top: c,
    right: e,
    bottom: l,
    left: n,
    disabled: t === !1
  };
}
function lu(t, c) {
  const e = [], l = t._getSortedDatasetMetas(c);
  let n, d;
  for (n = 0, d = l.length; n < d; ++n)
    e.push(l[n].index);
  return e;
}
function Ei(t, c, e, l = {}) {
  const n = t.keys, d = l.mode === "single";
  let b, i, a, s;
  if (c === null)
    return;
  let o = !1;
  for (b = 0, i = n.length; b < i; ++b) {
    if (a = +n[b], a === e) {
      if (o = !0, l.all)
        continue;
      break;
    }
    s = t.values[a], Rc(s) && (d || c === 0 || $c(c) === $c(s)) && (c += s);
  }
  return !o && !l.all ? 0 : c;
}
function cR(t, c) {
  const { iScale: e, vScale: l } = c, n = e.axis === "x" ? "x" : "y", d = l.axis === "x" ? "x" : "y", b = Object.keys(t), i = new Array(b.length);
  let a, s, o;
  for (a = 0, s = b.length; a < s; ++a)
    o = b[a], i[a] = {
      [n]: o,
      [d]: t[o]
    };
  return i;
}
function Nn(t, c) {
  const e = t && t.options.stacked;
  return e || e === void 0 && c.stack !== void 0;
}
function tR(t, c, e) {
  return `${t.id}.${c.id}.${e.stack || e.type}`;
}
function eR(t) {
  const { min: c, max: e, minDefined: l, maxDefined: n } = t.getUserBounds();
  return {
    min: l ? c : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function lR(t, c, e) {
  const l = t[c] || (t[c] = {});
  return l[e] || (l[e] = {});
}
function Ki(t, c, e, l) {
  for (const n of c.getMatchingVisibleMetas(l).reverse()) {
    const d = t[n.index];
    if (e && d > 0 || !e && d < 0)
      return n.index;
  }
  return null;
}
function _i(t, c) {
  const { chart: e, _cachedMeta: l } = t, n = e._stacks || (e._stacks = {}), { iScale: d, vScale: b, index: i } = l, a = d.axis, s = b.axis, o = tR(d, b, l), u = c.length;
  let X;
  for (let x = 0; x < u; ++x) {
    const H = c[x], { [a]: r, [s]: G } = H, m = H._stacks || (H._stacks = {});
    X = m[s] = lR(n, o, r), X[i] = G, X._top = Ki(X, b, !0, l.type), X._bottom = Ki(X, b, !1, l.type);
    const Z = X._visualValues || (X._visualValues = {});
    Z[i] = G;
  }
}
function Cn(t, c) {
  const e = t.scales;
  return Object.keys(e).filter((l) => e[l].axis === c).shift();
}
function nR(t, c) {
  return vt(t, {
    active: !1,
    dataset: void 0,
    datasetIndex: c,
    index: c,
    mode: "default",
    type: "dataset"
  });
}
function dR(t, c, e) {
  return vt(t, {
    active: !1,
    dataIndex: c,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: c,
    mode: "default",
    type: "data"
  });
}
function ie(t, c) {
  const e = t.controller.index, l = t.vScale && t.vScale.axis;
  if (l) {
    c = c || t._parsed;
    for (const n of c) {
      const d = n._stacks;
      if (!d || d[l] === void 0 || d[l][e] === void 0)
        return;
      delete d[l][e], d[l]._visualValues !== void 0 && d[l]._visualValues[e] !== void 0 && delete d[l]._visualValues[e];
    }
  }
}
const zn = (t) => t === "reset" || t === "none", $i = (t, c) => c ? t : Object.assign({}, t), bR = (t, c, e) => t && !c.hidden && c._stacked && {
  keys: lu(e, !0),
  values: null
};
class Tc {
  constructor(c, e) {
    this.chart = c, this._ctx = c.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const c = this._cachedMeta;
    this.configure(), this.linkScales(), c._stacked = Nn(c.vScale, c), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(c) {
    this.index !== c && ie(this._cachedMeta), this.index = c;
  }
  linkScales() {
    const c = this.chart, e = this._cachedMeta, l = this.getDataset(), n = (u, X, x, H) => u === "x" ? X : u === "r" ? H : x, d = e.xAxisID = _(l.xAxisID, Cn(c, "x")), b = e.yAxisID = _(l.yAxisID, Cn(c, "y")), i = e.rAxisID = _(l.rAxisID, Cn(c, "r")), a = e.indexAxis, s = e.iAxisID = n(a, d, b, i), o = e.vAxisID = n(a, b, d, i);
    e.xScale = this.getScaleForId(d), e.yScale = this.getScaleForId(b), e.rScale = this.getScaleForId(i), e.iScale = this.getScaleForId(s), e.vScale = this.getScaleForId(o);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(c) {
    return this.chart.scales[c];
  }
  _getOtherScale(c) {
    const e = this._cachedMeta;
    return c === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const c = this._cachedMeta;
    this._data && Ci(this._data, this), c._stacked && ie(c);
  }
  _dataCheck() {
    const c = this.getDataset(), e = c.data || (c.data = []), l = this._data;
    if (bc(e)) {
      const n = this._cachedMeta;
      this._data = cR(e, n);
    } else if (l !== e) {
      if (l) {
        Ci(l, this);
        const n = this._cachedMeta;
        ie(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && TH(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const c = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (c.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(c) {
    const e = this._cachedMeta, l = this.getDataset();
    let n = !1;
    this._dataCheck();
    const d = e._stacked;
    e._stacked = Nn(e.vScale, e), e.stack !== l.stack && (n = !0, ie(e), e.stack = l.stack), this._resyncElements(c), (n || d !== e._stacked) && (_i(this, e._parsed), e._stacked = Nn(e.vScale, e));
  }
  configure() {
    const c = this.chart.config, e = c.datasetScopeKeys(this._type), l = c.getOptionScopes(this.getDataset(), e, !0);
    this.options = c.createResolver(l, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(c, e) {
    const { _cachedMeta: l, _data: n } = this, { iScale: d, _stacked: b } = l, i = d.axis;
    let a = c === 0 && e === n.length ? !0 : l._sorted, s = c > 0 && l._parsed[c - 1], o, u, X;
    if (this._parsing === !1)
      l._parsed = n, l._sorted = !0, X = n;
    else {
      Gc(n[c]) ? X = this.parseArrayData(l, n, c, e) : bc(n[c]) ? X = this.parseObjectData(l, n, c, e) : X = this.parsePrimitiveData(l, n, c, e);
      const x = () => u[i] === null || s && u[i] < s[i];
      for (o = 0; o < e; ++o)
        l._parsed[o + c] = u = X[o], a && (x() && (a = !1), s = u);
      l._sorted = a;
    }
    b && _i(this, X);
  }
  parsePrimitiveData(c, e, l, n) {
    const { iScale: d, vScale: b } = c, i = d.axis, a = b.axis, s = d.getLabels(), o = d === b, u = new Array(n);
    let X, x, H;
    for (X = 0, x = n; X < x; ++X)
      H = X + l, u[X] = {
        [i]: o || d.parse(s[H], H),
        [a]: b.parse(e[H], H)
      };
    return u;
  }
  parseArrayData(c, e, l, n) {
    const { xScale: d, yScale: b } = c, i = new Array(n);
    let a, s, o, u;
    for (a = 0, s = n; a < s; ++a)
      o = a + l, u = e[o], i[a] = {
        x: d.parse(u[0], o),
        y: b.parse(u[1], o)
      };
    return i;
  }
  parseObjectData(c, e, l, n) {
    const { xScale: d, yScale: b } = c, { xAxisKey: i = "x", yAxisKey: a = "y" } = this._parsing, s = new Array(n);
    let o, u, X, x;
    for (o = 0, u = n; o < u; ++o)
      X = o + l, x = e[X], s[o] = {
        x: d.parse(Ft(x, i), X),
        y: b.parse(Ft(x, a), X)
      };
    return s;
  }
  getParsed(c) {
    return this._cachedMeta._parsed[c];
  }
  getDataElement(c) {
    return this._cachedMeta.data[c];
  }
  applyStack(c, e, l) {
    const n = this.chart, d = this._cachedMeta, b = e[c.axis], i = {
      keys: lu(n, !0),
      values: e._stacks[c.axis]._visualValues
    };
    return Ei(i, b, d.index, {
      mode: l
    });
  }
  updateRangeFromParsed(c, e, l, n) {
    const d = l[e.axis];
    let b = d === null ? NaN : d;
    const i = n && l._stacks[e.axis];
    n && i && (n.values = i, b = Ei(n, d, this._cachedMeta.index)), c.min = Math.min(c.min, b), c.max = Math.max(c.max, b);
  }
  getMinMax(c, e) {
    const l = this._cachedMeta, n = l._parsed, d = l._sorted && c === l.iScale, b = n.length, i = this._getOtherScale(c), a = bR(e, l, this.chart), s = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: o, max: u } = eR(i);
    let X, x;
    function H() {
      x = n[X];
      const r = x[i.axis];
      return !Rc(x[c.axis]) || o > r || u < r;
    }
    for (X = 0; X < b && !(!H() && (this.updateRangeFromParsed(s, c, x, a), d)); ++X)
      ;
    if (d) {
      for (X = b - 1; X >= 0; --X)
        if (!H()) {
          this.updateRangeFromParsed(s, c, x, a);
          break;
        }
    }
    return s;
  }
  getAllParsedValues(c) {
    const e = this._cachedMeta._parsed, l = [];
    let n, d, b;
    for (n = 0, d = e.length; n < d; ++n)
      b = e[n][c.axis], Rc(b) && l.push(b);
    return l;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(c) {
    const e = this._cachedMeta, l = e.iScale, n = e.vScale, d = this.getParsed(c);
    return {
      label: l ? "" + l.getLabelForValue(d[l.axis]) : "",
      value: n ? "" + n.getLabelForValue(d[n.axis]) : ""
    };
  }
  _update(c) {
    const e = this._cachedMeta;
    this.update(c || "default"), e._clip = qm(_(this.options.clip, $m(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(c) {
  }
  draw() {
    const c = this._ctx, e = this.chart, l = this._cachedMeta, n = l.data || [], d = e.chartArea, b = [], i = this._drawStart || 0, a = this._drawCount || n.length - i, s = this.options.drawActiveElementsOnTop;
    let o;
    for (l.dataset && l.dataset.draw(c, d, i, a), o = i; o < i + a; ++o) {
      const u = n[o];
      u.hidden || (u.active && s ? b.push(u) : u.draw(c, d));
    }
    for (o = 0; o < b.length; ++o)
      b[o].draw(c, d);
  }
  getStyle(c, e) {
    const l = e ? "active" : "default";
    return c === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(l) : this.resolveDataElementOptions(c || 0, l);
  }
  getContext(c, e, l) {
    const n = this.getDataset();
    let d;
    if (c >= 0 && c < this._cachedMeta.data.length) {
      const b = this._cachedMeta.data[c];
      d = b.$context || (b.$context = dR(this.getContext(), c, b)), d.parsed = this.getParsed(c), d.raw = n.data[c], d.index = d.dataIndex = c;
    } else
      d = this.$context || (this.$context = nR(this.chart.getContext(), this.index)), d.dataset = n, d.index = d.datasetIndex = this.index;
    return d.active = !!e, d.mode = l, d;
  }
  resolveDatasetElementOptions(c) {
    return this._resolveElementOptions(this.datasetElementType.id, c);
  }
  resolveDataElementOptions(c, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, c);
  }
  _resolveElementOptions(c, e = "default", l) {
    const n = e === "active", d = this._cachedDataOpts, b = c + "-" + e, i = d[b], a = this.enableOptionSharing && ke(l);
    if (i)
      return $i(i, a);
    const s = this.chart.config, o = s.datasetElementScopeKeys(this._type, c), u = n ? [
      `${c}Hover`,
      "hover",
      c,
      ""
    ] : [
      c,
      ""
    ], X = s.getOptionScopes(this.getDataset(), o), x = Object.keys(mc.elements[c]), H = () => this.getContext(l, n, e), r = s.resolveNamedOptions(X, x, H, u);
    return r.$shared && (r.$shared = a, d[b] = Object.freeze($i(r, a))), r;
  }
  _resolveAnimations(c, e, l) {
    const n = this.chart, d = this._cachedDataOpts, b = `animation-${e}`, i = d[b];
    if (i)
      return i;
    let a;
    if (n.options.animation !== !1) {
      const o = this.chart.config, u = o.datasetAnimationScopeKeys(this._type, e), X = o.getOptionScopes(this.getDataset(), u);
      a = o.createResolver(X, this.getContext(c, l, e));
    }
    const s = new eu(n, a && a.animations);
    return a && a._cacheable && (d[b] = Object.freeze(s)), s;
  }
  getSharedOptions(c) {
    if (c.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, c));
  }
  includeOptions(c, e) {
    return !e || zn(c) || this.chart._animationsDisabled;
  }
  _getSharedOptions(c, e) {
    const l = this.resolveDataElementOptions(c, e), n = this._sharedOptions, d = this.getSharedOptions(l), b = this.includeOptions(e, d) || d !== n;
    return this.updateSharedOptions(d, e, l), {
      sharedOptions: d,
      includeOptions: b
    };
  }
  updateElement(c, e, l, n) {
    zn(n) ? Object.assign(c, l) : this._resolveAnimations(e, n).update(c, l);
  }
  updateSharedOptions(c, e, l) {
    c && !zn(e) && this._resolveAnimations(void 0, e).update(c, l);
  }
  _setStyle(c, e, l, n) {
    c.active = n;
    const d = this.getStyle(e, n);
    this._resolveAnimations(e, l, n).update(c, {
      options: !n && this.getSharedOptions(d) || d
    });
  }
  removeHoverStyle(c, e, l) {
    this._setStyle(c, l, "active", !1);
  }
  setHoverStyle(c, e, l) {
    this._setStyle(c, l, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const c = this._cachedMeta.dataset;
    c && this._setStyle(c, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const c = this._cachedMeta.dataset;
    c && this._setStyle(c, void 0, "active", !0);
  }
  _resyncElements(c) {
    const e = this._data, l = this._cachedMeta.data;
    for (const [i, a, s] of this._syncList)
      this[i](a, s);
    this._syncList = [];
    const n = l.length, d = e.length, b = Math.min(d, n);
    b && this.parse(0, b), d > n ? this._insertElements(n, d - n, c) : d < n && this._removeElements(d, n - d);
  }
  _insertElements(c, e, l = !0) {
    const n = this._cachedMeta, d = n.data, b = c + e;
    let i;
    const a = (s) => {
      for (s.length += e, i = s.length - 1; i >= b; i--)
        s[i] = s[i - e];
    };
    for (a(d), i = c; i < b; ++i)
      d[i] = new this.dataElementType();
    this._parsing && a(n._parsed), this.parse(c, e), l && this.updateElements(d, c, e, "reset");
  }
  updateElements(c, e, l, n) {
  }
  _removeElements(c, e) {
    const l = this._cachedMeta;
    if (this._parsing) {
      const n = l._parsed.splice(c, e);
      l._stacked && ie(l, n);
    }
    l.data.splice(c, e);
  }
  _sync(c) {
    if (this._parsing)
      this._syncList.push(c);
    else {
      const [e, l, n] = c;
      this[e](l, n);
    }
    this.chart._dataChanges.push([
      this.index,
      ...c
    ]);
  }
  _onDataPush() {
    const c = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - c,
      c
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(c, e) {
    e && this._sync([
      "_removeElements",
      c,
      e
    ]);
    const l = arguments.length - 2;
    l && this._sync([
      "_insertElements",
      c,
      l
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
f(Tc, "defaults", {}), f(Tc, "datasetElementType", null), f(Tc, "dataElementType", null);
function iR(t, c) {
  if (!t._cache.$bar) {
    const e = t.getMatchingVisibleMetas(c);
    let l = [];
    for (let n = 0, d = e.length; n < d; n++)
      l = l.concat(e[n].controller.getAllParsedValues(t));
    t._cache.$bar = wo(l.sort((n, d) => n - d));
  }
  return t._cache.$bar;
}
function aR(t) {
  const c = t.iScale, e = iR(c, t.type);
  let l = c._length, n, d, b, i;
  const a = () => {
    b === 32767 || b === -32768 || (ke(i) && (l = Math.min(l, Math.abs(b - i) || l)), i = b);
  };
  for (n = 0, d = e.length; n < d; ++n)
    b = c.getPixelForValue(e[n]), a();
  for (i = void 0, n = 0, d = c.ticks.length; n < d; ++n)
    b = c.getPixelForTick(n), a();
  return l;
}
function sR(t, c, e, l) {
  const n = e.barThickness;
  let d, b;
  return dc(n) ? (d = c.min * e.categoryPercentage, b = e.barPercentage) : (d = n * l, b = 1), {
    chunk: d / l,
    ratio: b,
    start: c.pixels[t] - d / 2
  };
}
function oR(t, c, e, l) {
  const n = c.pixels, d = n[t];
  let b = t > 0 ? n[t - 1] : null, i = t < n.length - 1 ? n[t + 1] : null;
  const a = e.categoryPercentage;
  b === null && (b = d - (i === null ? c.end - c.start : i - d)), i === null && (i = d + d - b);
  const s = d - (d - Math.min(b, i)) / 2 * a;
  return {
    chunk: Math.abs(i - b) / 2 * a / l,
    ratio: e.barPercentage,
    start: s
  };
}
function uR(t, c, e, l) {
  const n = e.parse(t[0], l), d = e.parse(t[1], l), b = Math.min(n, d), i = Math.max(n, d);
  let a = b, s = i;
  Math.abs(b) > Math.abs(i) && (a = i, s = b), c[e.axis] = s, c._custom = {
    barStart: a,
    barEnd: s,
    start: n,
    end: d,
    min: b,
    max: i
  };
}
function nu(t, c, e, l) {
  return Gc(t) ? uR(t, c, e, l) : c[e.axis] = e.parse(t, l), c;
}
function qi(t, c, e, l) {
  const n = t.iScale, d = t.vScale, b = n.getLabels(), i = n === d, a = [];
  let s, o, u, X;
  for (s = e, o = e + l; s < o; ++s)
    X = c[s], u = {}, u[n.axis] = i || n.parse(b[s], s), a.push(nu(X, u, d, s));
  return a;
}
function wn(t) {
  return t && t.barStart !== void 0 && t.barEnd !== void 0;
}
function XR(t, c, e) {
  return t !== 0 ? $c(t) : (c.isHorizontal() ? 1 : -1) * (c.min >= e ? 1 : -1);
}
function xR(t) {
  let c, e, l, n, d;
  return t.horizontal ? (c = t.base > t.x, e = "left", l = "right") : (c = t.base < t.y, e = "bottom", l = "top"), c ? (n = "end", d = "start") : (n = "start", d = "end"), {
    start: e,
    end: l,
    reverse: c,
    top: n,
    bottom: d
  };
}
function rR(t, c, e, l) {
  let n = c.borderSkipped;
  const d = {};
  if (!n) {
    t.borderSkipped = d;
    return;
  }
  if (n === !0) {
    t.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: b, end: i, reverse: a, top: s, bottom: o } = xR(t);
  n === "middle" && e && (t.enableBorderRadius = !0, (e._top || 0) === l ? n = s : (e._bottom || 0) === l ? n = o : (d[ca(o, b, i, a)] = !0, n = s)), d[ca(n, b, i, a)] = !0, t.borderSkipped = d;
}
function ca(t, c, e, l) {
  return l ? (t = GR(t, c, e), t = ta(t, e, c)) : t = ta(t, c, e), t;
}
function GR(t, c, e) {
  return t === c ? e : t === e ? c : t;
}
function ta(t, c, e) {
  return t === "start" ? c : t === "end" ? e : t;
}
function HR(t, { inflateAmount: c }, e) {
  t.inflateAmount = c === "auto" ? e === 1 ? 0.33 : 0 : c;
}
class pl extends Tc {
  parsePrimitiveData(c, e, l, n) {
    return qi(c, e, l, n);
  }
  parseArrayData(c, e, l, n) {
    return qi(c, e, l, n);
  }
  parseObjectData(c, e, l, n) {
    const { iScale: d, vScale: b } = c, { xAxisKey: i = "x", yAxisKey: a = "y" } = this._parsing, s = d.axis === "x" ? i : a, o = b.axis === "x" ? i : a, u = [];
    let X, x, H, r;
    for (X = l, x = l + n; X < x; ++X)
      r = e[X], H = {}, H[d.axis] = d.parse(Ft(r, s), X), u.push(nu(Ft(r, o), H, b, X));
    return u;
  }
  updateRangeFromParsed(c, e, l, n) {
    super.updateRangeFromParsed(c, e, l, n);
    const d = l._custom;
    d && e === this._cachedMeta.vScale && (c.min = Math.min(c.min, d.min), c.max = Math.max(c.max, d.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(c) {
    const e = this._cachedMeta, { iScale: l, vScale: n } = e, d = this.getParsed(c), b = d._custom, i = wn(b) ? "[" + b.start + ", " + b.end + "]" : "" + n.getLabelForValue(d[n.axis]);
    return {
      label: "" + l.getLabelForValue(d[l.axis]),
      value: i
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const c = this._cachedMeta;
    c.stack = this.getDataset().stack;
  }
  update(c) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, c);
  }
  updateElements(c, e, l, n) {
    const d = n === "reset", { index: b, _cachedMeta: { vScale: i } } = this, a = i.getBasePixel(), s = i.isHorizontal(), o = this._getRuler(), { sharedOptions: u, includeOptions: X } = this._getSharedOptions(e, n);
    for (let x = e; x < e + l; x++) {
      const H = this.getParsed(x), r = d || dc(H[i.axis]) ? {
        base: a,
        head: a
      } : this._calculateBarValuePixels(x), G = this._calculateBarIndexPixels(x, o), m = (H._stacks || {})[i.axis], Z = {
        horizontal: s,
        base: r.base,
        enableBorderRadius: !m || wn(H._custom) || b === m._top || b === m._bottom,
        x: s ? r.head : G.center,
        y: s ? G.center : r.head,
        height: s ? G.size : Math.abs(r.size),
        width: s ? Math.abs(r.size) : G.size
      };
      X && (Z.options = u || this.resolveDataElementOptions(x, c[x].active ? "active" : n));
      const h = Z.options || c[x].options;
      rR(Z, h, m, b), HR(Z, h, o.ratio), this.updateElement(c[x], x, Z, n);
    }
  }
  _getStacks(c, e) {
    const { iScale: l } = this._cachedMeta, n = l.getMatchingVisibleMetas(this._type).filter((o) => o.controller.options.grouped), d = l.options.stacked, b = [], i = this._cachedMeta.controller.getParsed(e), a = i && i[l.axis], s = (o) => {
      const u = o._parsed.find((x) => x[l.axis] === a), X = u && u[o.vScale.axis];
      if (dc(X) || isNaN(X))
        return !0;
    };
    for (const o of n)
      if (!(e !== void 0 && s(o)) && ((d === !1 || b.indexOf(o.stack) === -1 || d === void 0 && o.stack === void 0) && b.push(o.stack), o.index === c))
        break;
    return b.length || b.push(void 0), b;
  }
  _getStackCount(c) {
    return this._getStacks(void 0, c).length;
  }
  _getStackIndex(c, e, l) {
    const n = this._getStacks(c, l), d = e !== void 0 ? n.indexOf(e) : -1;
    return d === -1 ? n.length - 1 : d;
  }
  _getRuler() {
    const c = this.options, e = this._cachedMeta, l = e.iScale, n = [];
    let d, b;
    for (d = 0, b = e.data.length; d < b; ++d)
      n.push(l.getPixelForValue(this.getParsed(d)[l.axis], d));
    const i = c.barThickness;
    return {
      min: i || aR(e),
      pixels: n,
      start: l._startPixel,
      end: l._endPixel,
      stackCount: this._getStackCount(),
      scale: l,
      grouped: c.grouped,
      ratio: i ? 1 : c.categoryPercentage * c.barPercentage
    };
  }
  _calculateBarValuePixels(c) {
    const { _cachedMeta: { vScale: e, _stacked: l, index: n }, options: { base: d, minBarLength: b } } = this, i = d || 0, a = this.getParsed(c), s = a._custom, o = wn(s);
    let u = a[e.axis], X = 0, x = l ? this.applyStack(e, a, l) : u, H, r;
    x !== u && (X = x - u, x = u), o && (u = s.barStart, x = s.barEnd - s.barStart, u !== 0 && $c(u) !== $c(s.barEnd) && (X = 0), X += u);
    const G = !dc(d) && !o ? d : X;
    let m = e.getPixelForValue(G);
    if (this.chart.getDataVisibility(c) ? H = e.getPixelForValue(X + x) : H = m, r = H - m, Math.abs(r) < b) {
      r = XR(r, e, i) * b, u === i && (m -= r / 2);
      const Z = e.getPixelForDecimal(0), h = e.getPixelForDecimal(1), g = Math.min(Z, h), R = Math.max(Z, h);
      m = Math.max(Math.min(m, R), g), H = m + r, l && !o && (a._stacks[e.axis]._visualValues[n] = e.getValueForPixel(H) - e.getValueForPixel(m));
    }
    if (m === e.getPixelForValue(i)) {
      const Z = $c(r) * e.getLineWidthForValue(i) / 2;
      m += Z, r -= Z;
    }
    return {
      size: r,
      base: m,
      head: H,
      center: H + r / 2
    };
  }
  _calculateBarIndexPixels(c, e) {
    const l = e.scale, n = this.options, d = n.skipNull, b = _(n.maxBarThickness, 1 / 0);
    let i, a;
    if (e.grouped) {
      const s = d ? this._getStackCount(c) : e.stackCount, o = n.barThickness === "flex" ? oR(c, e, n, s) : sR(c, e, n, s), u = this._getStackIndex(this.index, this._cachedMeta.stack, d ? c : void 0);
      i = o.start + o.chunk * u + o.chunk / 2, a = Math.min(b, o.chunk * o.ratio);
    } else
      i = l.getPixelForValue(this.getParsed(c)[l.axis], c), a = Math.min(b, e.min * e.ratio);
    return {
      base: i - a / 2,
      head: i + a / 2,
      center: i,
      size: a
    };
  }
  draw() {
    const c = this._cachedMeta, e = c.vScale, l = c.data, n = l.length;
    let d = 0;
    for (; d < n; ++d)
      this.getParsed(d)[e.axis] !== null && !l[d].hidden && l[d].draw(this._ctx);
  }
}
f(pl, "id", "bar"), f(pl, "defaults", {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "base",
        "width",
        "height"
      ]
    }
  }
}), f(pl, "overrides", {
  scales: {
    _index_: {
      type: "category",
      offset: !0,
      grid: {
        offset: !0
      }
    },
    _value_: {
      type: "linear",
      beginAtZero: !0
    }
  }
});
class yl extends Tc {
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
  }
  parsePrimitiveData(c, e, l, n) {
    const d = super.parsePrimitiveData(c, e, l, n);
    for (let b = 0; b < d.length; b++)
      d[b]._custom = this.resolveDataElementOptions(b + l).radius;
    return d;
  }
  parseArrayData(c, e, l, n) {
    const d = super.parseArrayData(c, e, l, n);
    for (let b = 0; b < d.length; b++) {
      const i = e[l + b];
      d[b]._custom = _(i[2], this.resolveDataElementOptions(b + l).radius);
    }
    return d;
  }
  parseObjectData(c, e, l, n) {
    const d = super.parseObjectData(c, e, l, n);
    for (let b = 0; b < d.length; b++) {
      const i = e[l + b];
      d[b]._custom = _(i && i.r && +i.r, this.resolveDataElementOptions(b + l).radius);
    }
    return d;
  }
  getMaxOverflow() {
    const c = this._cachedMeta.data;
    let e = 0;
    for (let l = c.length - 1; l >= 0; --l)
      e = Math.max(e, c[l].size(this.resolveDataElementOptions(l)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(c) {
    const e = this._cachedMeta, l = this.chart.data.labels || [], { xScale: n, yScale: d } = e, b = this.getParsed(c), i = n.getLabelForValue(b.x), a = d.getLabelForValue(b.y), s = b._custom;
    return {
      label: l[c] || "",
      value: "(" + i + ", " + a + (s ? ", " + s : "") + ")"
    };
  }
  update(c) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, c);
  }
  updateElements(c, e, l, n) {
    const d = n === "reset", { iScale: b, vScale: i } = this._cachedMeta, { sharedOptions: a, includeOptions: s } = this._getSharedOptions(e, n), o = b.axis, u = i.axis;
    for (let X = e; X < e + l; X++) {
      const x = c[X], H = !d && this.getParsed(X), r = {}, G = r[o] = d ? b.getPixelForDecimal(0.5) : b.getPixelForValue(H[o]), m = r[u] = d ? i.getBasePixel() : i.getPixelForValue(H[u]);
      r.skip = isNaN(G) || isNaN(m), s && (r.options = a || this.resolveDataElementOptions(X, x.active ? "active" : n), d && (r.options.radius = 0)), this.updateElement(x, X, r, n);
    }
  }
  resolveDataElementOptions(c, e) {
    const l = this.getParsed(c);
    let n = super.resolveDataElementOptions(c, e);
    n.$shared && (n = Object.assign({}, n, {
      $shared: !1
    }));
    const d = n.radius;
    return e !== "active" && (n.radius = 0), n.radius += _(l && l._custom, d), n;
  }
}
f(yl, "id", "bubble"), f(yl, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "borderWidth",
        "radius"
      ]
    }
  }
}), f(yl, "overrides", {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
function mR(t, c, e) {
  let l = 1, n = 1, d = 0, b = 0;
  if (c < xc) {
    const i = t, a = i + c, s = Math.cos(i), o = Math.sin(i), u = Math.cos(a), X = Math.sin(a), x = (h, g, R) => Oe(h, i, a, !0) ? 1 : Math.max(g, g * e, R, R * e), H = (h, g, R) => Oe(h, i, a, !0) ? -1 : Math.min(g, g * e, R, R * e), r = x(0, s, u), G = x(gc, o, X), m = H(rc, s, u), Z = H(rc + gc, o, X);
    l = (r - m) / 2, n = (G - Z) / 2, d = -(r + m) / 2, b = -(G + Z) / 2;
  }
  return {
    ratioX: l,
    ratioY: n,
    offsetX: d,
    offsetY: b
  };
}
class Lt extends Tc {
  constructor(c, e) {
    super(c, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(c, e) {
    const l = this.getDataset().data, n = this._cachedMeta;
    if (this._parsing === !1)
      n._parsed = l;
    else {
      let d = (a) => +l[a];
      if (bc(l[c])) {
        const { key: a = "value" } = this._parsing;
        d = (s) => +Ft(l[s], a);
      }
      let b, i;
      for (b = c, i = c + e; b < i; ++b)
        n._parsed[b] = d(b);
    }
  }
  _getRotation() {
    return Qc(this.options.rotation - 90);
  }
  _getCircumference() {
    return Qc(this.options.circumference);
  }
  _getRotationExtents() {
    let c = xc, e = -xc;
    for (let l = 0; l < this.chart.data.datasets.length; ++l)
      if (this.chart.isDatasetVisible(l) && this.chart.getDatasetMeta(l).type === this._type) {
        const n = this.chart.getDatasetMeta(l).controller, d = n._getRotation(), b = n._getCircumference();
        c = Math.min(c, d), e = Math.max(e, d + b);
      }
    return {
      rotation: c,
      circumference: e - c
    };
  }
  update(c) {
    const e = this.chart, { chartArea: l } = e, n = this._cachedMeta, d = n.data, b = this.getMaxBorderWidth() + this.getMaxOffset(d) + this.options.spacing, i = Math.max((Math.min(l.width, l.height) - b) / 2, 0), a = Math.min(BH(this.options.cutout, i), 1), s = this._getRingWeight(this.index), { circumference: o, rotation: u } = this._getRotationExtents(), { ratioX: X, ratioY: x, offsetX: H, offsetY: r } = mR(u, o, a), G = (l.width - b) / X, m = (l.height - b) / x, Z = Math.max(Math.min(G, m) / 2, 0), h = Jo(this.options.radius, Z), g = Math.max(h * a, 0), R = (h - g) / this._getVisibleDatasetWeightTotal();
    this.offsetX = H * h, this.offsetY = r * h, n.total = this.calculateTotal(), this.outerRadius = h - R * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - R * s, 0), this.updateElements(d, 0, d.length, c);
  }
  _circumference(c, e) {
    const l = this.options, n = this._cachedMeta, d = this._getCircumference();
    return e && l.animation.animateRotate || !this.chart.getDataVisibility(c) || n._parsed[c] === null || n.data[c].hidden ? 0 : this.calculateCircumference(n._parsed[c] * d / xc);
  }
  updateElements(c, e, l, n) {
    const d = n === "reset", b = this.chart, i = b.chartArea, s = b.options.animation, o = (i.left + i.right) / 2, u = (i.top + i.bottom) / 2, X = d && s.animateScale, x = X ? 0 : this.innerRadius, H = X ? 0 : this.outerRadius, { sharedOptions: r, includeOptions: G } = this._getSharedOptions(e, n);
    let m = this._getRotation(), Z;
    for (Z = 0; Z < e; ++Z)
      m += this._circumference(Z, d);
    for (Z = e; Z < e + l; ++Z) {
      const h = this._circumference(Z, d), g = c[Z], R = {
        x: o + this.offsetX,
        y: u + this.offsetY,
        startAngle: m,
        endAngle: m + h,
        circumference: h,
        outerRadius: H,
        innerRadius: x
      };
      G && (R.options = r || this.resolveDataElementOptions(Z, g.active ? "active" : n)), m += h, this.updateElement(g, Z, R, n);
    }
  }
  calculateTotal() {
    const c = this._cachedMeta, e = c.data;
    let l = 0, n;
    for (n = 0; n < e.length; n++) {
      const d = c._parsed[n];
      d !== null && !isNaN(d) && this.chart.getDataVisibility(n) && !e[n].hidden && (l += Math.abs(d));
    }
    return l;
  }
  calculateCircumference(c) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(c) ? xc * (Math.abs(c) / e) : 0;
  }
  getLabelAndValue(c) {
    const e = this._cachedMeta, l = this.chart, n = l.data.labels || [], d = Pe(e._parsed[c], l.options.locale);
    return {
      label: n[c] || "",
      value: d
    };
  }
  getMaxBorderWidth(c) {
    let e = 0;
    const l = this.chart;
    let n, d, b, i, a;
    if (!c) {
      for (n = 0, d = l.data.datasets.length; n < d; ++n)
        if (l.isDatasetVisible(n)) {
          b = l.getDatasetMeta(n), c = b.data, i = b.controller;
          break;
        }
    }
    if (!c)
      return 0;
    for (n = 0, d = c.length; n < d; ++n)
      a = i.resolveDataElementOptions(n), a.borderAlign !== "inner" && (e = Math.max(e, a.borderWidth || 0, a.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(c) {
    let e = 0;
    for (let l = 0, n = c.length; l < n; ++l) {
      const d = this.resolveDataElementOptions(l);
      e = Math.max(e, d.offset || 0, d.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(c) {
    let e = 0;
    for (let l = 0; l < c; ++l)
      this.chart.isDatasetVisible(l) && (e += this._getRingWeight(l));
    return e;
  }
  _getRingWeight(c) {
    return Math.max(_(this.chart.data.datasets[c].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
f(Lt, "id", "doughnut"), f(Lt, "defaults", {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !1
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing"
      ]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
}), f(Lt, "descriptors", {
  _scriptable: (c) => c !== "spacing",
  _indexable: (c) => c !== "spacing" && !c.startsWith("borderDash") && !c.startsWith("hoverBorderDash")
}), f(Lt, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(c) {
          const e = c.data;
          if (e.labels.length && e.datasets.length) {
            const { labels: { pointStyle: l, color: n } } = c.legend.options;
            return e.labels.map((d, b) => {
              const a = c.getDatasetMeta(0).controller.getStyle(b);
              return {
                text: d,
                fillStyle: a.backgroundColor,
                strokeStyle: a.borderColor,
                fontColor: n,
                lineWidth: a.borderWidth,
                pointStyle: l,
                hidden: !c.getDataVisibility(b),
                index: b
              };
            });
          }
          return [];
        }
      },
      onClick(c, e, l) {
        l.chart.toggleDataVisibility(e.index), l.chart.update();
      }
    }
  }
});
class Je extends Tc {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(c) {
    const e = this._cachedMeta, { dataset: l, data: n = [], _dataset: d } = e, b = this.chart._animationsDisabled;
    let { start: i, count: a } = ko(e, n, b);
    this._drawStart = i, this._drawCount = a, Oo(e) && (i = 0, a = n.length), l._chart = this.chart, l._datasetIndex = this.index, l._decimated = !!d._decimated, l.points = n;
    const s = this.resolveDatasetElementOptions(c);
    this.options.showLine || (s.borderWidth = 0), s.segment = this.options.segment, this.updateElement(l, void 0, {
      animated: !b,
      options: s
    }, c), this.updateElements(n, i, a, c);
  }
  updateElements(c, e, l, n) {
    const d = n === "reset", { iScale: b, vScale: i, _stacked: a, _dataset: s } = this._cachedMeta, { sharedOptions: o, includeOptions: u } = this._getSharedOptions(e, n), X = b.axis, x = i.axis, { spanGaps: H, segment: r } = this.options, G = le(H) ? H : Number.POSITIVE_INFINITY, m = this.chart._animationsDisabled || d || n === "none", Z = e + l, h = c.length;
    let g = e > 0 && this.getParsed(e - 1);
    for (let R = 0; R < h; ++R) {
      const W = c[R], p = m ? W : {};
      if (R < e || R >= Z) {
        p.skip = !0;
        continue;
      }
      const y = this.getParsed(R), V = dc(y[x]), C = p[X] = b.getPixelForValue(y[X], R), J = p[x] = d || V ? i.getBasePixel() : i.getPixelForValue(a ? this.applyStack(i, y, a) : y[x], R);
      p.skip = isNaN(C) || isNaN(J) || V, p.stop = R > 0 && Math.abs(y[X] - g[X]) > G, r && (p.parsed = y, p.raw = s.data[R]), u && (p.options = o || this.resolveDataElementOptions(R, W.active ? "active" : n)), m || this.updateElement(W, R, p, n), g = y;
    }
  }
  getMaxOverflow() {
    const c = this._cachedMeta, e = c.dataset, l = e.options && e.options.borderWidth || 0, n = c.data || [];
    if (!n.length)
      return l;
    const d = n[0].size(this.resolveDataElementOptions(0)), b = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(l, d, b) / 2;
  }
  draw() {
    const c = this._cachedMeta;
    c.dataset.updateControlPoints(this.chart.chartArea, c.iScale.axis), super.draw();
  }
}
f(Je, "id", "line"), f(Je, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), f(Je, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class Ye extends Tc {
  constructor(c, e) {
    super(c, e), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(c) {
    const e = this._cachedMeta, l = this.chart, n = l.data.labels || [], d = Pe(e._parsed[c].r, l.options.locale);
    return {
      label: n[c] || "",
      value: d
    };
  }
  parseObjectData(c, e, l, n) {
    return Po.bind(this)(c, e, l, n);
  }
  update(c) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, c);
  }
  getMinMax() {
    const c = this._cachedMeta, e = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    return c.data.forEach((l, n) => {
      const d = this.getParsed(n).r;
      !isNaN(d) && this.chart.getDataVisibility(n) && (d < e.min && (e.min = d), d > e.max && (e.max = d));
    }), e;
  }
  _updateRadius() {
    const c = this.chart, e = c.chartArea, l = c.options, n = Math.min(e.right - e.left, e.bottom - e.top), d = Math.max(n / 2, 0), b = Math.max(l.cutoutPercentage ? d / 100 * l.cutoutPercentage : 1, 0), i = (d - b) / c.getVisibleDatasetCount();
    this.outerRadius = d - i * this.index, this.innerRadius = this.outerRadius - i;
  }
  updateElements(c, e, l, n) {
    const d = n === "reset", b = this.chart, a = b.options.animation, s = this._cachedMeta.rScale, o = s.xCenter, u = s.yCenter, X = s.getIndexAngle(0) - 0.5 * rc;
    let x = X, H;
    const r = 360 / this.countVisibleElements();
    for (H = 0; H < e; ++H)
      x += this._computeAngle(H, n, r);
    for (H = e; H < e + l; H++) {
      const G = c[H];
      let m = x, Z = x + this._computeAngle(H, n, r), h = b.getDataVisibility(H) ? s.getDistanceFromCenterForValue(this.getParsed(H).r) : 0;
      x = Z, d && (a.animateScale && (h = 0), a.animateRotate && (m = Z = X));
      const g = {
        x: o,
        y: u,
        innerRadius: 0,
        outerRadius: h,
        startAngle: m,
        endAngle: Z,
        options: this.resolveDataElementOptions(H, G.active ? "active" : n)
      };
      this.updateElement(G, H, g, n);
    }
  }
  countVisibleElements() {
    const c = this._cachedMeta;
    let e = 0;
    return c.data.forEach((l, n) => {
      !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++;
    }), e;
  }
  _computeAngle(c, e, l) {
    return this.chart.getDataVisibility(c) ? Qc(this.resolveDataElementOptions(c, e).angle || l) : 0;
  }
}
f(Ye, "id", "polarArea"), f(Ye, "defaults", {
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !0
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius"
      ]
    }
  },
  indexAxis: "r",
  startAngle: 0
}), f(Ye, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(c) {
          const e = c.data;
          if (e.labels.length && e.datasets.length) {
            const { labels: { pointStyle: l, color: n } } = c.legend.options;
            return e.labels.map((d, b) => {
              const a = c.getDatasetMeta(0).controller.getStyle(b);
              return {
                text: d,
                fillStyle: a.backgroundColor,
                strokeStyle: a.borderColor,
                fontColor: n,
                lineWidth: a.borderWidth,
                pointStyle: l,
                hidden: !c.getDataVisibility(b),
                index: b
              };
            });
          }
          return [];
        }
      },
      onClick(c, e, l) {
        l.chart.toggleDataVisibility(e.index), l.chart.update();
      }
    }
  },
  scales: {
    r: {
      type: "radialLinear",
      angleLines: {
        display: !1
      },
      beginAtZero: !0,
      grid: {
        circular: !0
      },
      pointLabels: {
        display: !1
      },
      startAngle: 0
    }
  }
});
class Wd extends Lt {
}
f(Wd, "id", "pie"), f(Wd, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
class Il extends Tc {
  getLabelAndValue(c) {
    const e = this._cachedMeta.vScale, l = this.getParsed(c);
    return {
      label: e.getLabels()[c],
      value: "" + e.getLabelForValue(l[e.axis])
    };
  }
  parseObjectData(c, e, l, n) {
    return Po.bind(this)(c, e, l, n);
  }
  update(c) {
    const e = this._cachedMeta, l = e.dataset, n = e.data || [], d = e.iScale.getLabels();
    if (l.points = n, c !== "resize") {
      const b = this.resolveDatasetElementOptions(c);
      this.options.showLine || (b.borderWidth = 0);
      const i = {
        _loop: !0,
        _fullLoop: d.length === n.length,
        options: b
      };
      this.updateElement(l, void 0, i, c);
    }
    this.updateElements(n, 0, n.length, c);
  }
  updateElements(c, e, l, n) {
    const d = this._cachedMeta.rScale, b = n === "reset";
    for (let i = e; i < e + l; i++) {
      const a = c[i], s = this.resolveDataElementOptions(i, a.active ? "active" : n), o = d.getPointPositionForValue(i, this.getParsed(i).r), u = b ? d.xCenter : o.x, X = b ? d.yCenter : o.y, x = {
        x: u,
        y: X,
        angle: o.angle,
        skip: isNaN(u) || isNaN(X),
        options: s
      };
      this.updateElement(a, i, x, n);
    }
  }
}
f(Il, "id", "radar"), f(Il, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), f(Il, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
class Fl extends Tc {
  getLabelAndValue(c) {
    const e = this._cachedMeta, l = this.chart.data.labels || [], { xScale: n, yScale: d } = e, b = this.getParsed(c), i = n.getLabelForValue(b.x), a = d.getLabelForValue(b.y);
    return {
      label: l[c] || "",
      value: "(" + i + ", " + a + ")"
    };
  }
  update(c) {
    const e = this._cachedMeta, { data: l = [] } = e, n = this.chart._animationsDisabled;
    let { start: d, count: b } = ko(e, l, n);
    if (this._drawStart = d, this._drawCount = b, Oo(e) && (d = 0, b = l.length), this.options.showLine) {
      this.datasetElementType || this.addElements();
      const { dataset: i, _dataset: a } = e;
      i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!a._decimated, i.points = l;
      const s = this.resolveDatasetElementOptions(c);
      s.segment = this.options.segment, this.updateElement(i, void 0, {
        animated: !n,
        options: s
      }, c);
    } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
    this.updateElements(l, d, b, c);
  }
  addElements() {
    const { showLine: c } = this.options;
    !this.datasetElementType && c && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
  }
  updateElements(c, e, l, n) {
    const d = n === "reset", { iScale: b, vScale: i, _stacked: a, _dataset: s } = this._cachedMeta, o = this.resolveDataElementOptions(e, n), u = this.getSharedOptions(o), X = this.includeOptions(n, u), x = b.axis, H = i.axis, { spanGaps: r, segment: G } = this.options, m = le(r) ? r : Number.POSITIVE_INFINITY, Z = this.chart._animationsDisabled || d || n === "none";
    let h = e > 0 && this.getParsed(e - 1);
    for (let g = e; g < e + l; ++g) {
      const R = c[g], W = this.getParsed(g), p = Z ? R : {}, y = dc(W[H]), V = p[x] = b.getPixelForValue(W[x], g), C = p[H] = d || y ? i.getBasePixel() : i.getPixelForValue(a ? this.applyStack(i, W, a) : W[H], g);
      p.skip = isNaN(V) || isNaN(C) || y, p.stop = g > 0 && Math.abs(W[x] - h[x]) > m, G && (p.parsed = W, p.raw = s.data[g]), X && (p.options = u || this.resolveDataElementOptions(g, R.active ? "active" : n)), Z || this.updateElement(R, g, p, n), h = W;
    }
    this.updateSharedOptions(u, n, o);
  }
  getMaxOverflow() {
    const c = this._cachedMeta, e = c.data || [];
    if (!this.options.showLine) {
      let i = 0;
      for (let a = e.length - 1; a >= 0; --a)
        i = Math.max(i, e[a].size(this.resolveDataElementOptions(a)) / 2);
      return i > 0 && i;
    }
    const l = c.dataset, n = l.options && l.options.borderWidth || 0;
    if (!e.length)
      return n;
    const d = e[0].size(this.resolveDataElementOptions(0)), b = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(n, d, b) / 2;
  }
}
f(Fl, "id", "scatter"), f(Fl, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
}), f(Fl, "overrides", {
  interaction: {
    mode: "point"
  },
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
var RR = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BarController: pl,
  BubbleController: yl,
  DoughnutController: Lt,
  LineController: Je,
  PieController: Wd,
  PolarAreaController: Ye,
  RadarController: Il,
  ScatterController: Fl
});
function Nt() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class hb {
  constructor(c) {
    f(this, "options");
    this.options = c || {};
  }
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(c) {
    Object.assign(hb.prototype, c);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return Nt();
  }
  parse() {
    return Nt();
  }
  format() {
    return Nt();
  }
  add() {
    return Nt();
  }
  diff() {
    return Nt();
  }
  startOf() {
    return Nt();
  }
  endOf() {
    return Nt();
  }
}
var ZR = {
  _date: hb
};
function gR(t, c, e, l) {
  const { controller: n, data: d, _sorted: b } = t, i = n._cachedMeta.iScale, a = t.dataset && t.dataset.options ? t.dataset.options.spanGaps : null;
  if (i && c === i.axis && c !== "r" && b && d.length) {
    const s = i._reversePixels ? DH : dt;
    if (l) {
      if (n._sharedOptions) {
        const o = d[0], u = typeof o.getRange == "function" && o.getRange(c);
        if (u) {
          const X = s(d, c, e - u), x = s(d, c, e + u);
          return {
            lo: X.lo,
            hi: x.hi
          };
        }
      }
    } else {
      const o = s(d, c, e);
      if (a) {
        const { vScale: u } = n._cachedMeta, { _parsed: X } = t, x = X.slice(0, o.lo + 1).reverse().findIndex((r) => !dc(r[u.axis]));
        o.lo -= Math.max(0, x);
        const H = X.slice(o.hi).findIndex((r) => !dc(r[u.axis]));
        o.hi += Math.max(0, H);
      }
      return o;
    }
  }
  return {
    lo: 0,
    hi: d.length - 1
  };
}
function sn(t, c, e, l, n) {
  const d = t.getSortedVisibleDatasetMetas(), b = e[c];
  for (let i = 0, a = d.length; i < a; ++i) {
    const { index: s, data: o } = d[i], { lo: u, hi: X } = gR(d[i], c, b, n);
    for (let x = u; x <= X; ++x) {
      const H = o[x];
      H.skip || l(H, s, x);
    }
  }
}
function hR(t) {
  const c = t.indexOf("x") !== -1, e = t.indexOf("y") !== -1;
  return function(l, n) {
    const d = c ? Math.abs(l.x - n.x) : 0, b = e ? Math.abs(l.y - n.y) : 0;
    return Math.sqrt(Math.pow(d, 2) + Math.pow(b, 2));
  };
}
function Sn(t, c, e, l, n) {
  const d = [];
  return !n && !t.isPointInArea(c) || sn(t, e, c, function(i, a, s) {
    !n && !bt(i, t.chartArea, 0) || i.inRange(c.x, c.y, l) && d.push({
      element: i,
      datasetIndex: a,
      index: s
    });
  }, !0), d;
}
function WR(t, c, e, l) {
  let n = [];
  function d(b, i, a) {
    const { startAngle: s, endAngle: o } = b.getProps([
      "startAngle",
      "endAngle"
    ], l), { angle: u } = Co(b, {
      x: c.x,
      y: c.y
    });
    Oe(u, s, o) && n.push({
      element: b,
      datasetIndex: i,
      index: a
    });
  }
  return sn(t, e, c, d), n;
}
function pR(t, c, e, l, n, d) {
  let b = [];
  const i = hR(e);
  let a = Number.POSITIVE_INFINITY;
  function s(o, u, X) {
    const x = o.inRange(c.x, c.y, n);
    if (l && !x)
      return;
    const H = o.getCenterPoint(n);
    if (!(!!d || t.isPointInArea(H)) && !x)
      return;
    const G = i(c, H);
    G < a ? (b = [
      {
        element: o,
        datasetIndex: u,
        index: X
      }
    ], a = G) : G === a && b.push({
      element: o,
      datasetIndex: u,
      index: X
    });
  }
  return sn(t, e, c, s), b;
}
function Ln(t, c, e, l, n, d) {
  return !d && !t.isPointInArea(c) ? [] : e === "r" && !l ? WR(t, c, e, n) : pR(t, c, e, l, n, d);
}
function ea(t, c, e, l, n) {
  const d = [], b = e === "x" ? "inXRange" : "inYRange";
  let i = !1;
  return sn(t, e, c, (a, s, o) => {
    a[b] && a[b](c[e], n) && (d.push({
      element: a,
      datasetIndex: s,
      index: o
    }), i = i || a.inRange(c.x, c.y, n));
  }), l && !i ? [] : d;
}
var yR = {
  modes: {
    index(t, c, e, l) {
      const n = zt(c, t), d = e.axis || "x", b = e.includeInvisible || !1, i = e.intersect ? Sn(t, n, d, l, b) : Ln(t, n, d, !1, l, b), a = [];
      return i.length ? (t.getSortedVisibleDatasetMetas().forEach((s) => {
        const o = i[0].index, u = s.data[o];
        u && !u.skip && a.push({
          element: u,
          datasetIndex: s.index,
          index: o
        });
      }), a) : [];
    },
    dataset(t, c, e, l) {
      const n = zt(c, t), d = e.axis || "xy", b = e.includeInvisible || !1;
      let i = e.intersect ? Sn(t, n, d, l, b) : Ln(t, n, d, !1, l, b);
      if (i.length > 0) {
        const a = i[0].datasetIndex, s = t.getDatasetMeta(a).data;
        i = [];
        for (let o = 0; o < s.length; ++o)
          i.push({
            element: s[o],
            datasetIndex: a,
            index: o
          });
      }
      return i;
    },
    point(t, c, e, l) {
      const n = zt(c, t), d = e.axis || "xy", b = e.includeInvisible || !1;
      return Sn(t, n, d, l, b);
    },
    nearest(t, c, e, l) {
      const n = zt(c, t), d = e.axis || "xy", b = e.includeInvisible || !1;
      return Ln(t, n, d, e.intersect, l, b);
    },
    x(t, c, e, l) {
      const n = zt(c, t);
      return ea(t, n, "x", e.intersect, l);
    },
    y(t, c, e, l) {
      const n = zt(c, t);
      return ea(t, n, "y", e.intersect, l);
    }
  }
};
const du = [
  "left",
  "top",
  "right",
  "bottom"
];
function ae(t, c) {
  return t.filter((e) => e.pos === c);
}
function la(t, c) {
  return t.filter((e) => du.indexOf(e.pos) === -1 && e.box.axis === c);
}
function se(t, c) {
  return t.sort((e, l) => {
    const n = c ? l : e, d = c ? e : l;
    return n.weight === d.weight ? n.index - d.index : n.weight - d.weight;
  });
}
function IR(t) {
  const c = [];
  let e, l, n, d, b, i;
  for (e = 0, l = (t || []).length; e < l; ++e)
    n = t[e], { position: d, options: { stack: b, stackWeight: i = 1 } } = n, c.push({
      index: e,
      box: n,
      pos: d,
      horizontal: n.isHorizontal(),
      weight: n.weight,
      stack: b && d + b,
      stackWeight: i
    });
  return c;
}
function FR(t) {
  const c = {};
  for (const e of t) {
    const { stack: l, pos: n, stackWeight: d } = e;
    if (!l || !du.includes(n))
      continue;
    const b = c[l] || (c[l] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    b.count++, b.weight += d;
  }
  return c;
}
function VR(t, c) {
  const e = FR(t), { vBoxMaxWidth: l, hBoxMaxHeight: n } = c;
  let d, b, i;
  for (d = 0, b = t.length; d < b; ++d) {
    i = t[d];
    const { fullSize: a } = i.box, s = e[i.stack], o = s && i.stackWeight / s.weight;
    i.horizontal ? (i.width = o ? o * l : a && c.availableWidth, i.height = n) : (i.width = l, i.height = o ? o * n : a && c.availableHeight);
  }
  return e;
}
function vR(t) {
  const c = IR(t), e = se(c.filter((s) => s.box.fullSize), !0), l = se(ae(c, "left"), !0), n = se(ae(c, "right")), d = se(ae(c, "top"), !0), b = se(ae(c, "bottom")), i = la(c, "x"), a = la(c, "y");
  return {
    fullSize: e,
    leftAndTop: l.concat(d),
    rightAndBottom: n.concat(a).concat(b).concat(i),
    chartArea: ae(c, "chartArea"),
    vertical: l.concat(n).concat(a),
    horizontal: d.concat(b).concat(i)
  };
}
function na(t, c, e, l) {
  return Math.max(t[e], c[e]) + Math.max(t[l], c[l]);
}
function bu(t, c) {
  t.top = Math.max(t.top, c.top), t.left = Math.max(t.left, c.left), t.bottom = Math.max(t.bottom, c.bottom), t.right = Math.max(t.right, c.right);
}
function BR(t, c, e, l) {
  const { pos: n, box: d } = e, b = t.maxPadding;
  if (!bc(n)) {
    e.size && (t[n] -= e.size);
    const u = l[e.stack] || {
      size: 0,
      count: 1
    };
    u.size = Math.max(u.size, e.horizontal ? d.height : d.width), e.size = u.size / u.count, t[n] += e.size;
  }
  d.getPadding && bu(b, d.getPadding());
  const i = Math.max(0, c.outerWidth - na(b, t, "left", "right")), a = Math.max(0, c.outerHeight - na(b, t, "top", "bottom")), s = i !== t.w, o = a !== t.h;
  return t.w = i, t.h = a, e.horizontal ? {
    same: s,
    other: o
  } : {
    same: o,
    other: s
  };
}
function fR(t) {
  const c = t.maxPadding;
  function e(l) {
    const n = Math.max(c[l] - t[l], 0);
    return t[l] += n, n;
  }
  t.y += e("top"), t.x += e("left"), e("right"), e("bottom");
}
function JR(t, c) {
  const e = c.maxPadding;
  function l(n) {
    const d = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return n.forEach((b) => {
      d[b] = Math.max(c[b], e[b]);
    }), d;
  }
  return l(t ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Ze(t, c, e, l) {
  const n = [];
  let d, b, i, a, s, o;
  for (d = 0, b = t.length, s = 0; d < b; ++d) {
    i = t[d], a = i.box, a.update(i.width || c.w, i.height || c.h, JR(i.horizontal, c));
    const { same: u, other: X } = BR(c, e, i, l);
    s |= u && n.length, o = o || X, a.fullSize || n.push(i);
  }
  return s && Ze(n, c, e, l) || o;
}
function sl(t, c, e, l, n) {
  t.top = e, t.left = c, t.right = c + l, t.bottom = e + n, t.width = l, t.height = n;
}
function da(t, c, e, l) {
  const n = e.padding;
  let { x: d, y: b } = c;
  for (const i of t) {
    const a = i.box, s = l[i.stack] || {
      placed: 0,
      weight: 1
    }, o = i.stackWeight / s.weight || 1;
    if (i.horizontal) {
      const u = c.w * o, X = s.size || a.height;
      ke(s.start) && (b = s.start), a.fullSize ? sl(a, n.left, b, e.outerWidth - n.right - n.left, X) : sl(a, c.left + s.placed, b, u, X), s.start = b, s.placed += u, b = a.bottom;
    } else {
      const u = c.h * o, X = s.size || a.width;
      ke(s.start) && (d = s.start), a.fullSize ? sl(a, d, n.top, X, e.outerHeight - n.bottom - n.top) : sl(a, d, c.top + s.placed, X, u), s.start = d, s.placed += u, d = a.right;
    }
  }
  c.x = d, c.y = b;
}
var Bc = {
  addBox(t, c) {
    t.boxes || (t.boxes = []), c.fullSize = c.fullSize || !1, c.position = c.position || "top", c.weight = c.weight || 0, c._layers = c._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            c.draw(e);
          }
        }
      ];
    }, t.boxes.push(c);
  },
  removeBox(t, c) {
    const e = t.boxes ? t.boxes.indexOf(c) : -1;
    e !== -1 && t.boxes.splice(e, 1);
  },
  configure(t, c, e) {
    c.fullSize = e.fullSize, c.position = e.position, c.weight = e.weight;
  },
  update(t, c, e, l) {
    if (!t)
      return;
    const n = Jc(t.options.layout.padding), d = Math.max(c - n.width, 0), b = Math.max(e - n.height, 0), i = vR(t.boxes), a = i.vertical, s = i.horizontal;
    oc(t.boxes, (r) => {
      typeof r.beforeLayout == "function" && r.beforeLayout();
    });
    const o = a.reduce((r, G) => G.box.options && G.box.options.display === !1 ? r : r + 1, 0) || 1, u = Object.freeze({
      outerWidth: c,
      outerHeight: e,
      padding: n,
      availableWidth: d,
      availableHeight: b,
      vBoxMaxWidth: d / 2 / o,
      hBoxMaxHeight: b / 2
    }), X = Object.assign({}, n);
    bu(X, Jc(l));
    const x = Object.assign({
      maxPadding: X,
      w: d,
      h: b,
      x: n.left,
      y: n.top
    }, n), H = VR(a.concat(s), u);
    Ze(i.fullSize, x, u, H), Ze(a, x, u, H), Ze(s, x, u, H) && Ze(a, x, u, H), fR(x), da(i.leftAndTop, x, u, H), x.x += x.w, x.y += x.h, da(i.rightAndBottom, x, u, H), t.chartArea = {
      left: x.left,
      top: x.top,
      right: x.left + x.w,
      bottom: x.top + x.h,
      height: x.h,
      width: x.w
    }, oc(i.chartArea, (r) => {
      const G = r.box;
      Object.assign(G, t.chartArea), G.update(x.w, x.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class iu {
  acquireContext(c, e) {
  }
  releaseContext(c) {
    return !1;
  }
  addEventListener(c, e, l) {
  }
  removeEventListener(c, e, l) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(c, e, l, n) {
    return e = Math.max(0, e || c.width), l = l || c.height, {
      width: e,
      height: Math.max(0, n ? Math.floor(e / n) : l)
    };
  }
  isAttached(c) {
    return !0;
  }
  updateConfig(c) {
  }
}
class YR extends iu {
  acquireContext(c) {
    return c && c.getContext && c.getContext("2d") || null;
  }
  updateConfig(c) {
    c.options.animation = !1;
  }
}
const Vl = "$chartjs", NR = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, ba = (t) => t === null || t === "";
function CR(t, c) {
  const e = t.style, l = t.getAttribute("height"), n = t.getAttribute("width");
  if (t[Vl] = {
    initial: {
      height: l,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", ba(n)) {
    const d = Qi(t, "width");
    d !== void 0 && (t.width = d);
  }
  if (ba(l))
    if (t.style.height === "")
      t.height = t.width / (c || 2);
    else {
      const d = Qi(t, "height");
      d !== void 0 && (t.height = d);
    }
  return t;
}
const au = zm ? {
  passive: !0
} : !1;
function zR(t, c, e) {
  t && t.addEventListener(c, e, au);
}
function wR(t, c, e) {
  t && t.canvas && t.canvas.removeEventListener(c, e, au);
}
function SR(t, c) {
  const e = NR[t.type] || t.type, { x: l, y: n } = zt(t, c);
  return {
    type: e,
    chart: c,
    native: t,
    x: l !== void 0 ? l : null,
    y: n !== void 0 ? n : null
  };
}
function kl(t, c) {
  for (const e of t)
    if (e === c || e.contains(c))
      return !0;
}
function LR(t, c, e) {
  const l = t.canvas, n = new MutationObserver((d) => {
    let b = !1;
    for (const i of d)
      b = b || kl(i.addedNodes, l), b = b && !kl(i.removedNodes, l);
    b && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function kR(t, c, e) {
  const l = t.canvas, n = new MutationObserver((d) => {
    let b = !1;
    for (const i of d)
      b = b || kl(i.removedNodes, l), b = b && !kl(i.addedNodes, l);
    b && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const De = /* @__PURE__ */ new Map();
let ia = 0;
function su() {
  const t = window.devicePixelRatio;
  t !== ia && (ia = t, De.forEach((c, e) => {
    e.currentDevicePixelRatio !== t && c();
  }));
}
function OR(t, c) {
  De.size || window.addEventListener("resize", su), De.set(t, c);
}
function AR(t) {
  De.delete(t), De.size || window.removeEventListener("resize", su);
}
function DR(t, c, e) {
  const l = t.canvas, n = l && gb(l);
  if (!n)
    return;
  const d = Lo((i, a) => {
    const s = n.clientWidth;
    e(i, a), s < n.clientWidth && e();
  }, window), b = new ResizeObserver((i) => {
    const a = i[0], s = a.contentRect.width, o = a.contentRect.height;
    s === 0 && o === 0 || d(s, o);
  });
  return b.observe(n), OR(t, d), b;
}
function kn(t, c, e) {
  e && e.disconnect(), c === "resize" && AR(t);
}
function QR(t, c, e) {
  const l = t.canvas, n = Lo((d) => {
    t.ctx !== null && e(SR(d, t));
  }, t);
  return zR(l, c, n), n;
}
class TR extends iu {
  acquireContext(c, e) {
    const l = c && c.getContext && c.getContext("2d");
    return l && l.canvas === c ? (CR(c, e), l) : null;
  }
  releaseContext(c) {
    const e = c.canvas;
    if (!e[Vl])
      return !1;
    const l = e[Vl].initial;
    [
      "height",
      "width"
    ].forEach((d) => {
      const b = l[d];
      dc(b) ? e.removeAttribute(d) : e.setAttribute(d, b);
    });
    const n = l.style || {};
    return Object.keys(n).forEach((d) => {
      e.style[d] = n[d];
    }), e.width = e.width, delete e[Vl], !0;
  }
  addEventListener(c, e, l) {
    this.removeEventListener(c, e);
    const n = c.$proxies || (c.$proxies = {}), b = {
      attach: LR,
      detach: kR,
      resize: DR
    }[e] || QR;
    n[e] = b(c, e, l);
  }
  removeEventListener(c, e) {
    const l = c.$proxies || (c.$proxies = {}), n = l[e];
    if (!n)
      return;
    ({
      attach: kn,
      detach: kn,
      resize: kn
    }[e] || wR)(c, e, n), l[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(c, e, l, n) {
    return Cm(c, e, l, n);
  }
  isAttached(c) {
    const e = c && gb(c);
    return !!(e && e.isConnected);
  }
}
function jR(t) {
  return !Zb() || typeof OffscreenCanvas < "u" && t instanceof OffscreenCanvas ? YR : TR;
}
var Zl;
let Gt = (Zl = class {
  constructor() {
    f(this, "x");
    f(this, "y");
    f(this, "active", !1);
    f(this, "options");
    f(this, "$animations");
  }
  tooltipPosition(c) {
    const { x: e, y: l } = this.getProps([
      "x",
      "y"
    ], c);
    return {
      x: e,
      y: l
    };
  }
  hasValue() {
    return le(this.x) && le(this.y);
  }
  getProps(c, e) {
    const l = this.$animations;
    if (!e || !l)
      return this;
    const n = {};
    return c.forEach((d) => {
      n[d] = l[d] && l[d].active() ? l[d]._to : this[d];
    }), n;
  }
}, f(Zl, "defaults", {}), f(Zl, "defaultRoutes"), Zl);
function MR(t, c) {
  const e = t.options.ticks, l = UR(t), n = Math.min(e.maxTicksLimit || l, l), d = e.major.enabled ? ER(c) : [], b = d.length, i = d[0], a = d[b - 1], s = [];
  if (b > n)
    return KR(c, s, d, b / n), s;
  const o = PR(d, c, n);
  if (b > 0) {
    let u, X;
    const x = b > 1 ? Math.round((a - i) / (b - 1)) : null;
    for (ol(c, s, o, dc(x) ? 0 : i - x, i), u = 0, X = b - 1; u < X; u++)
      ol(c, s, o, d[u], d[u + 1]);
    return ol(c, s, o, a, dc(x) ? c.length : a + x), s;
  }
  return ol(c, s, o), s;
}
function UR(t) {
  const c = t.options.offset, e = t._tickSize(), l = t._length / e + (c ? 0 : 1), n = t._maxLength / e;
  return Math.floor(Math.min(l, n));
}
function PR(t, c, e) {
  const l = _R(t), n = c.length / e;
  if (!l)
    return Math.max(n, 1);
  const d = SH(l);
  for (let b = 0, i = d.length - 1; b < i; b++) {
    const a = d[b];
    if (a > n)
      return a;
  }
  return Math.max(n, 1);
}
function ER(t) {
  const c = [];
  let e, l;
  for (e = 0, l = t.length; e < l; e++)
    t[e].major && c.push(e);
  return c;
}
function KR(t, c, e, l) {
  let n = 0, d = e[0], b;
  for (l = Math.ceil(l), b = 0; b < t.length; b++)
    b === d && (c.push(t[b]), n++, d = e[n * l]);
}
function ol(t, c, e, l, n) {
  const d = _(l, 0), b = Math.min(_(n, t.length), t.length);
  let i = 0, a, s, o;
  for (e = Math.ceil(e), n && (a = n - l, e = a / Math.floor(a / e)), o = d; o < 0; )
    i++, o = Math.round(d + i * e);
  for (s = Math.max(d, 0); s < b; s++)
    s === o && (c.push(t[s]), i++, o = Math.round(d + i * e));
}
function _R(t) {
  const c = t.length;
  let e, l;
  if (c < 2)
    return !1;
  for (l = t[0], e = 1; e < c; ++e)
    if (t[e] - t[e - 1] !== l)
      return !1;
  return l;
}
const $R = (t) => t === "left" ? "right" : t === "right" ? "left" : t, aa = (t, c, e) => c === "top" || c === "left" ? t[c] + e : t[c] - e, sa = (t, c) => Math.min(c || t, t);
function oa(t, c) {
  const e = [], l = t.length / c, n = t.length;
  let d = 0;
  for (; d < n; d += l)
    e.push(t[Math.floor(d)]);
  return e;
}
function qR(t, c, e) {
  const l = t.ticks.length, n = Math.min(c, l - 1), d = t._startPixel, b = t._endPixel, i = 1e-6;
  let a = t.getPixelForTick(n), s;
  if (!(e && (l === 1 ? s = Math.max(a - d, b - a) : c === 0 ? s = (t.getPixelForTick(1) - a) / 2 : s = (a - t.getPixelForTick(n - 1)) / 2, a += n < c ? s : -s, a < d - i || a > b + i)))
    return a;
}
function c5(t, c) {
  oc(t, (e) => {
    const l = e.gc, n = l.length / 2;
    let d;
    if (n > c) {
      for (d = 0; d < n; ++d)
        delete e.data[l[d]];
      l.splice(0, n);
    }
  });
}
function oe(t) {
  return t.drawTicks ? t.tickLength : 0;
}
function ua(t, c) {
  if (!t.display)
    return 0;
  const e = Wc(t.font, c), l = Jc(t.padding);
  return (Gc(t.text) ? t.text.length : 1) * e.lineHeight + l.height;
}
function t5(t, c) {
  return vt(t, {
    scale: c,
    type: "scale"
  });
}
function e5(t, c, e) {
  return vt(t, {
    tick: e,
    index: c,
    type: "tick"
  });
}
function l5(t, c, e) {
  let l = xb(t);
  return (e && c !== "right" || !e && c === "right") && (l = $R(l)), l;
}
function n5(t, c, e, l) {
  const { top: n, left: d, bottom: b, right: i, chart: a } = t, { chartArea: s, scales: o } = a;
  let u = 0, X, x, H;
  const r = b - n, G = i - d;
  if (t.isHorizontal()) {
    if (x = Vc(l, d, i), bc(e)) {
      const m = Object.keys(e)[0], Z = e[m];
      H = o[m].getPixelForValue(Z) + r - c;
    } else e === "center" ? H = (s.bottom + s.top) / 2 + r - c : H = aa(t, e, c);
    X = i - d;
  } else {
    if (bc(e)) {
      const m = Object.keys(e)[0], Z = e[m];
      x = o[m].getPixelForValue(Z) - G + c;
    } else e === "center" ? x = (s.left + s.right) / 2 - G + c : x = aa(t, e, c);
    H = Vc(l, b, n), u = e === "left" ? -gc : gc;
  }
  return {
    titleX: x,
    titleY: H,
    maxWidth: X,
    rotation: u
  };
}
class Mt extends Gt {
  constructor(c) {
    super(), this.id = c.id, this.type = c.type, this.options = void 0, this.ctx = c.ctx, this.chart = c.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(c) {
    this.options = c.setContext(this.getContext()), this.axis = c.axis, this._userMin = this.parse(c.min), this._userMax = this.parse(c.max), this._suggestedMin = this.parse(c.suggestedMin), this._suggestedMax = this.parse(c.suggestedMax);
  }
  parse(c, e) {
    return c;
  }
  getUserBounds() {
    let { _userMin: c, _userMax: e, _suggestedMin: l, _suggestedMax: n } = this;
    return c = wc(c, Number.POSITIVE_INFINITY), e = wc(e, Number.NEGATIVE_INFINITY), l = wc(l, Number.POSITIVE_INFINITY), n = wc(n, Number.NEGATIVE_INFINITY), {
      min: wc(c, l),
      max: wc(e, n),
      minDefined: Rc(c),
      maxDefined: Rc(e)
    };
  }
  getMinMax(c) {
    let { min: e, max: l, minDefined: n, maxDefined: d } = this.getUserBounds(), b;
    if (n && d)
      return {
        min: e,
        max: l
      };
    const i = this.getMatchingVisibleMetas();
    for (let a = 0, s = i.length; a < s; ++a)
      b = i[a].controller.getMinMax(this, c), n || (e = Math.min(e, b.min)), d || (l = Math.max(l, b.max));
    return e = d && e > l ? l : e, l = n && e > l ? e : l, {
      min: wc(e, wc(l, e)),
      max: wc(l, wc(e, l))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const c = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? c.xLabels : c.yLabels) || c.labels || [];
  }
  getLabelItems(c = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(c));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    uc(this.options.beforeUpdate, [
      this
    ]);
  }
  update(c, e, l) {
    const { beginAtZero: n, grace: d, ticks: b } = this.options, i = b.sampleSize;
    this.beforeUpdate(), this.maxWidth = c, this.maxHeight = e, this._margins = l = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, l), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + l.left + l.right : this.height + l.top + l.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Xm(this, d, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const a = i < this.ticks.length;
    this._convertTicksToLabels(a ? oa(this.ticks, i) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), b.display && (b.autoSkip || b.source === "auto") && (this.ticks = MR(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), a && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let c = this.options.reverse, e, l;
    this.isHorizontal() ? (e = this.left, l = this.right) : (e = this.top, l = this.bottom, c = !c), this._startPixel = e, this._endPixel = l, this._reversePixels = c, this._length = l - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    uc(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    uc(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    uc(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(c) {
    this.chart.notifyPlugins(c, this.getContext()), uc(this.options[c], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    uc(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(c) {
    const e = this.options.ticks;
    let l, n, d;
    for (l = 0, n = c.length; l < n; l++)
      d = c[l], d.label = uc(e.callback, [
        d.value,
        l,
        c
      ], this);
  }
  afterTickToLabelConversion() {
    uc(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    uc(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const c = this.options, e = c.ticks, l = sa(this.ticks.length, c.ticks.maxTicksLimit), n = e.minRotation || 0, d = e.maxRotation;
    let b = n, i, a, s;
    if (!this._isVisible() || !e.display || n >= d || l <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const o = this._getLabelSizes(), u = o.widest.width, X = o.highest.height, x = yc(this.chart.width - u, 0, this.maxWidth);
    i = c.offset ? this.maxWidth / l : x / (l - 1), u + 6 > i && (i = x / (l - (c.offset ? 0.5 : 1)), a = this.maxHeight - oe(c.grid) - e.padding - ua(c.title, this.chart.options.font), s = Math.sqrt(u * u + X * X), b = ub(Math.min(Math.asin(yc((o.highest.height + 6) / i, -1, 1)), Math.asin(yc(a / s, -1, 1)) - Math.asin(yc(X / s, -1, 1)))), b = Math.max(n, Math.min(d, b))), this.labelRotation = b;
  }
  afterCalculateLabelRotation() {
    uc(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    uc(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const c = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: l, title: n, grid: d } } = this, b = this._isVisible(), i = this.isHorizontal();
    if (b) {
      const a = ua(n, e.options.font);
      if (i ? (c.width = this.maxWidth, c.height = oe(d) + a) : (c.height = this.maxHeight, c.width = oe(d) + a), l.display && this.ticks.length) {
        const { first: s, last: o, widest: u, highest: X } = this._getLabelSizes(), x = l.padding * 2, H = Qc(this.labelRotation), r = Math.cos(H), G = Math.sin(H);
        if (i) {
          const m = l.mirror ? 0 : G * u.width + r * X.height;
          c.height = Math.min(this.maxHeight, c.height + m + x);
        } else {
          const m = l.mirror ? 0 : r * u.width + G * X.height;
          c.width = Math.min(this.maxWidth, c.width + m + x);
        }
        this._calculatePadding(s, o, G, r);
      }
    }
    this._handleMargins(), i ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = c.height) : (this.width = c.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(c, e, l, n) {
    const { ticks: { align: d, padding: b }, position: i } = this.options, a = this.labelRotation !== 0, s = i !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const o = this.getPixelForTick(0) - this.left, u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let X = 0, x = 0;
      a ? s ? (X = n * c.width, x = l * e.height) : (X = l * c.height, x = n * e.width) : d === "start" ? x = e.width : d === "end" ? X = c.width : d !== "inner" && (X = c.width / 2, x = e.width / 2), this.paddingLeft = Math.max((X - o + b) * this.width / (this.width - o), 0), this.paddingRight = Math.max((x - u + b) * this.width / (this.width - u), 0);
    } else {
      let o = e.height / 2, u = c.height / 2;
      d === "start" ? (o = 0, u = c.height) : d === "end" && (o = e.height, u = 0), this.paddingTop = o + b, this.paddingBottom = u + b;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    uc(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: c, position: e } = this.options;
    return e === "top" || e === "bottom" || c === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(c) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(c);
    let e, l;
    for (e = 0, l = c.length; e < l; e++)
      dc(c[e].label) && (c.splice(e, 1), l--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let c = this._labelSizes;
    if (!c) {
      const e = this.options.ticks.sampleSize;
      let l = this.ticks;
      e < l.length && (l = oa(l, e)), this._labelSizes = c = this._computeLabelSizes(l, l.length, this.options.ticks.maxTicksLimit);
    }
    return c;
  }
  _computeLabelSizes(c, e, l) {
    const { ctx: n, _longestTextCache: d } = this, b = [], i = [], a = Math.floor(e / sa(e, l));
    let s = 0, o = 0, u, X, x, H, r, G, m, Z, h, g, R;
    for (u = 0; u < e; u += a) {
      if (H = c[u].label, r = this._resolveTickFontOptions(u), n.font = G = r.string, m = d[G] = d[G] || {
        data: {},
        gc: []
      }, Z = r.lineHeight, h = g = 0, !dc(H) && !Gc(H))
        h = Sl(n, m.data, m.gc, h, H), g = Z;
      else if (Gc(H))
        for (X = 0, x = H.length; X < x; ++X)
          R = H[X], !dc(R) && !Gc(R) && (h = Sl(n, m.data, m.gc, h, R), g += Z);
      b.push(h), i.push(g), s = Math.max(h, s), o = Math.max(g, o);
    }
    c5(d, e);
    const W = b.indexOf(s), p = i.indexOf(o), y = (V) => ({
      width: b[V] || 0,
      height: i[V] || 0
    });
    return {
      first: y(0),
      last: y(e - 1),
      widest: y(W),
      highest: y(p),
      widths: b,
      heights: i
    };
  }
  getLabelForValue(c) {
    return c;
  }
  getPixelForValue(c, e) {
    return NaN;
  }
  getValueForPixel(c) {
  }
  getPixelForTick(c) {
    const e = this.ticks;
    return c < 0 || c > e.length - 1 ? null : this.getPixelForValue(e[c].value);
  }
  getPixelForDecimal(c) {
    this._reversePixels && (c = 1 - c);
    const e = this._startPixel + c * this._length;
    return AH(this._alignToPixels ? Yt(this.chart, e, 0) : e);
  }
  getDecimalForPixel(c) {
    const e = (c - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: c, max: e } = this;
    return c < 0 && e < 0 ? e : c > 0 && e > 0 ? c : 0;
  }
  getContext(c) {
    const e = this.ticks || [];
    if (c >= 0 && c < e.length) {
      const l = e[c];
      return l.$context || (l.$context = e5(this.getContext(), c, l));
    }
    return this.$context || (this.$context = t5(this.chart.getContext(), this));
  }
  _tickSize() {
    const c = this.options.ticks, e = Qc(this.labelRotation), l = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), d = this._getLabelSizes(), b = c.autoSkipPadding || 0, i = d ? d.widest.width + b : 0, a = d ? d.highest.height + b : 0;
    return this.isHorizontal() ? a * l > i * n ? i / l : a / n : a * n < i * l ? a / l : i / n;
  }
  _isVisible() {
    const c = this.options.display;
    return c !== "auto" ? !!c : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(c) {
    const e = this.axis, l = this.chart, n = this.options, { grid: d, position: b, border: i } = n, a = d.offset, s = this.isHorizontal(), u = this.ticks.length + (a ? 1 : 0), X = oe(d), x = [], H = i.setContext(this.getContext()), r = H.display ? H.width : 0, G = r / 2, m = function(L) {
      return Yt(l, L, r);
    };
    let Z, h, g, R, W, p, y, V, C, J, Y, K;
    if (b === "top")
      Z = m(this.bottom), p = this.bottom - X, V = Z - G, J = m(c.top) + G, K = c.bottom;
    else if (b === "bottom")
      Z = m(this.top), J = c.top, K = m(c.bottom) - G, p = Z + G, V = this.top + X;
    else if (b === "left")
      Z = m(this.right), W = this.right - X, y = Z - G, C = m(c.left) + G, Y = c.right;
    else if (b === "right")
      Z = m(this.left), C = c.left, Y = m(c.right) - G, W = Z + G, y = this.left + X;
    else if (e === "x") {
      if (b === "center")
        Z = m((c.top + c.bottom) / 2 + 0.5);
      else if (bc(b)) {
        const L = Object.keys(b)[0], E = b[L];
        Z = m(this.chart.scales[L].getPixelForValue(E));
      }
      J = c.top, K = c.bottom, p = Z + G, V = p + X;
    } else if (e === "y") {
      if (b === "center")
        Z = m((c.left + c.right) / 2);
      else if (bc(b)) {
        const L = Object.keys(b)[0], E = b[L];
        Z = m(this.chart.scales[L].getPixelForValue(E));
      }
      W = Z - G, y = W - X, C = c.left, Y = c.right;
    }
    const $ = _(n.ticks.maxTicksLimit, u), S = Math.max(1, Math.ceil(u / $));
    for (h = 0; h < u; h += S) {
      const L = this.getContext(h), E = d.setContext(L), cc = i.setContext(L), ic = E.lineWidth, F = E.color, N = cc.dash || [], w = cc.dashOffset, D = E.tickWidth, A = E.tickColor, P = E.tickBorderDash || [], O = E.tickBorderDashOffset;
      g = qR(this, h, a), g !== void 0 && (R = Yt(l, g, ic), s ? W = y = C = Y = R : p = V = J = K = R, x.push({
        tx1: W,
        ty1: p,
        tx2: y,
        ty2: V,
        x1: C,
        y1: J,
        x2: Y,
        y2: K,
        width: ic,
        color: F,
        borderDash: N,
        borderDashOffset: w,
        tickWidth: D,
        tickColor: A,
        tickBorderDash: P,
        tickBorderDashOffset: O
      }));
    }
    return this._ticksLength = u, this._borderValue = Z, x;
  }
  _computeLabelItems(c) {
    const e = this.axis, l = this.options, { position: n, ticks: d } = l, b = this.isHorizontal(), i = this.ticks, { align: a, crossAlign: s, padding: o, mirror: u } = d, X = oe(l.grid), x = X + o, H = u ? -o : x, r = -Qc(this.labelRotation), G = [];
    let m, Z, h, g, R, W, p, y, V, C, J, Y, K = "middle";
    if (n === "top")
      W = this.bottom - H, p = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      W = this.top + H, p = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const S = this._getYAxisLabelAlignment(X);
      p = S.textAlign, R = S.x;
    } else if (n === "right") {
      const S = this._getYAxisLabelAlignment(X);
      p = S.textAlign, R = S.x;
    } else if (e === "x") {
      if (n === "center")
        W = (c.top + c.bottom) / 2 + x;
      else if (bc(n)) {
        const S = Object.keys(n)[0], L = n[S];
        W = this.chart.scales[S].getPixelForValue(L) + x;
      }
      p = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        R = (c.left + c.right) / 2 - x;
      else if (bc(n)) {
        const S = Object.keys(n)[0], L = n[S];
        R = this.chart.scales[S].getPixelForValue(L);
      }
      p = this._getYAxisLabelAlignment(X).textAlign;
    }
    e === "y" && (a === "start" ? K = "top" : a === "end" && (K = "bottom"));
    const $ = this._getLabelSizes();
    for (m = 0, Z = i.length; m < Z; ++m) {
      h = i[m], g = h.label;
      const S = d.setContext(this.getContext(m));
      y = this.getPixelForTick(m) + d.labelOffset, V = this._resolveTickFontOptions(m), C = V.lineHeight, J = Gc(g) ? g.length : 1;
      const L = J / 2, E = S.color, cc = S.textStrokeColor, ic = S.textStrokeWidth;
      let F = p;
      b ? (R = y, p === "inner" && (m === Z - 1 ? F = this.options.reverse ? "left" : "right" : m === 0 ? F = this.options.reverse ? "right" : "left" : F = "center"), n === "top" ? s === "near" || r !== 0 ? Y = -J * C + C / 2 : s === "center" ? Y = -$.highest.height / 2 - L * C + C : Y = -$.highest.height + C / 2 : s === "near" || r !== 0 ? Y = C / 2 : s === "center" ? Y = $.highest.height / 2 - L * C : Y = $.highest.height - J * C, u && (Y *= -1), r !== 0 && !S.showLabelBackdrop && (R += C / 2 * Math.sin(r))) : (W = y, Y = (1 - J) * C / 2);
      let N;
      if (S.showLabelBackdrop) {
        const w = Jc(S.backdropPadding), D = $.heights[m], A = $.widths[m];
        let P = Y - w.top, O = 0 - w.left;
        switch (K) {
          case "middle":
            P -= D / 2;
            break;
          case "bottom":
            P -= D;
            break;
        }
        switch (p) {
          case "center":
            O -= A / 2;
            break;
          case "right":
            O -= A;
            break;
          case "inner":
            m === Z - 1 ? O -= A : m > 0 && (O -= A / 2);
            break;
        }
        N = {
          left: O,
          top: P,
          width: A + w.width,
          height: D + w.height,
          color: S.backdropColor
        };
      }
      G.push({
        label: g,
        font: V,
        textOffset: Y,
        options: {
          rotation: r,
          color: E,
          strokeColor: cc,
          strokeWidth: ic,
          textAlign: F,
          textBaseline: K,
          translation: [
            R,
            W
          ],
          backdrop: N
        }
      });
    }
    return G;
  }
  _getXAxisLabelAlignment() {
    const { position: c, ticks: e } = this.options;
    if (-Qc(this.labelRotation))
      return c === "top" ? "left" : "right";
    let n = "center";
    return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n;
  }
  _getYAxisLabelAlignment(c) {
    const { position: e, ticks: { crossAlign: l, mirror: n, padding: d } } = this.options, b = this._getLabelSizes(), i = c + d, a = b.widest.width;
    let s, o;
    return e === "left" ? n ? (o = this.right + d, l === "near" ? s = "left" : l === "center" ? (s = "center", o += a / 2) : (s = "right", o += a)) : (o = this.right - i, l === "near" ? s = "right" : l === "center" ? (s = "center", o -= a / 2) : (s = "left", o = this.left)) : e === "right" ? n ? (o = this.left + d, l === "near" ? s = "right" : l === "center" ? (s = "center", o -= a / 2) : (s = "left", o -= a)) : (o = this.left + i, l === "near" ? s = "left" : l === "center" ? (s = "center", o += a / 2) : (s = "right", o = this.right)) : s = "right", {
      textAlign: s,
      x: o
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const c = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: c.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: c.width
      };
  }
  drawBackground() {
    const { ctx: c, options: { backgroundColor: e }, left: l, top: n, width: d, height: b } = this;
    e && (c.save(), c.fillStyle = e, c.fillRect(l, n, d, b), c.restore());
  }
  getLineWidthForValue(c) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const n = this.ticks.findIndex((d) => d.value === c);
    return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
  }
  drawGrid(c) {
    const e = this.options.grid, l = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(c));
    let d, b;
    const i = (a, s, o) => {
      !o.width || !o.color || (l.save(), l.lineWidth = o.width, l.strokeStyle = o.color, l.setLineDash(o.borderDash || []), l.lineDashOffset = o.borderDashOffset, l.beginPath(), l.moveTo(a.x, a.y), l.lineTo(s.x, s.y), l.stroke(), l.restore());
    };
    if (e.display)
      for (d = 0, b = n.length; d < b; ++d) {
        const a = n[d];
        e.drawOnChartArea && i({
          x: a.x1,
          y: a.y1
        }, {
          x: a.x2,
          y: a.y2
        }, a), e.drawTicks && i({
          x: a.tx1,
          y: a.ty1
        }, {
          x: a.tx2,
          y: a.ty2
        }, {
          color: a.tickColor,
          width: a.tickWidth,
          borderDash: a.tickBorderDash,
          borderDashOffset: a.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: c, ctx: e, options: { border: l, grid: n } } = this, d = l.setContext(this.getContext()), b = l.display ? d.width : 0;
    if (!b)
      return;
    const i = n.setContext(this.getContext(0)).lineWidth, a = this._borderValue;
    let s, o, u, X;
    this.isHorizontal() ? (s = Yt(c, this.left, b) - b / 2, o = Yt(c, this.right, i) + i / 2, u = X = a) : (u = Yt(c, this.top, b) - b / 2, X = Yt(c, this.bottom, i) + i / 2, s = o = a), e.save(), e.lineWidth = d.width, e.strokeStyle = d.color, e.beginPath(), e.moveTo(s, u), e.lineTo(o, X), e.stroke(), e.restore();
  }
  drawLabels(c) {
    if (!this.options.ticks.display)
      return;
    const l = this.ctx, n = this._computeLabelArea();
    n && dn(l, n);
    const d = this.getLabelItems(c);
    for (const b of d) {
      const i = b.options, a = b.font, s = b.label, o = b.textOffset;
      Tt(l, s, 0, o, a, i);
    }
    n && bn(l);
  }
  drawTitle() {
    const { ctx: c, options: { position: e, title: l, reverse: n } } = this;
    if (!l.display)
      return;
    const d = Wc(l.font), b = Jc(l.padding), i = l.align;
    let a = d.lineHeight / 2;
    e === "bottom" || e === "center" || bc(e) ? (a += b.bottom, Gc(l.text) && (a += d.lineHeight * (l.text.length - 1))) : a += b.top;
    const { titleX: s, titleY: o, maxWidth: u, rotation: X } = n5(this, a, e, i);
    Tt(c, l.text, 0, 0, d, {
      color: l.color,
      maxWidth: u,
      rotation: X,
      textAlign: l5(i, e, n),
      textBaseline: "middle",
      translation: [
        s,
        o
      ]
    });
  }
  draw(c) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(c), this.drawBorder(), this.drawTitle(), this.drawLabels(c));
  }
  _layers() {
    const c = this.options, e = c.ticks && c.ticks.z || 0, l = _(c.grid && c.grid.z, -1), n = _(c.border && c.border.z, 0);
    return !this._isVisible() || this.draw !== Mt.prototype.draw ? [
      {
        z: e,
        draw: (d) => {
          this.draw(d);
        }
      }
    ] : [
      {
        z: l,
        draw: (d) => {
          this.drawBackground(), this.drawGrid(d), this.drawTitle();
        }
      },
      {
        z: n,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: e,
        draw: (d) => {
          this.drawLabels(d);
        }
      }
    ];
  }
  getMatchingVisibleMetas(c) {
    const e = this.chart.getSortedVisibleDatasetMetas(), l = this.axis + "AxisID", n = [];
    let d, b;
    for (d = 0, b = e.length; d < b; ++d) {
      const i = e[d];
      i[l] === this.id && (!c || i.type === c) && n.push(i);
    }
    return n;
  }
  _resolveTickFontOptions(c) {
    const e = this.options.ticks.setContext(this.getContext(c));
    return Wc(e.font);
  }
  _maxDigits() {
    const c = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / c;
  }
}
class ul {
  constructor(c, e, l) {
    this.type = c, this.scope = e, this.override = l, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(c) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, c.prototype);
  }
  register(c) {
    const e = Object.getPrototypeOf(c);
    let l;
    i5(e) && (l = this.register(e));
    const n = this.items, d = c.id, b = this.scope + "." + d;
    if (!d)
      throw new Error("class does not have id: " + c);
    return d in n || (n[d] = c, d5(c, b, l), this.override && mc.override(c.id, c.overrides)), b;
  }
  get(c) {
    return this.items[c];
  }
  unregister(c) {
    const e = this.items, l = c.id, n = this.scope;
    l in e && delete e[l], n && l in mc[n] && (delete mc[n][l], this.override && delete Qt[l]);
  }
}
function d5(t, c, e) {
  const l = Le(/* @__PURE__ */ Object.create(null), [
    e ? mc.get(e) : {},
    mc.get(c),
    t.defaults
  ]);
  mc.set(c, l), t.defaultRoutes && b5(c, t.defaultRoutes), t.descriptors && mc.describe(c, t.descriptors);
}
function b5(t, c) {
  Object.keys(c).forEach((e) => {
    const l = e.split("."), n = l.pop(), d = [
      t
    ].concat(l).join("."), b = c[e].split("."), i = b.pop(), a = b.join(".");
    mc.route(d, n, a, i);
  });
}
function i5(t) {
  return "id" in t && "defaults" in t;
}
class a5 {
  constructor() {
    this.controllers = new ul(Tc, "datasets", !0), this.elements = new ul(Gt, "elements"), this.plugins = new ul(Object, "plugins"), this.scales = new ul(Mt, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...c) {
    this._each("register", c);
  }
  remove(...c) {
    this._each("unregister", c);
  }
  addControllers(...c) {
    this._each("register", c, this.controllers);
  }
  addElements(...c) {
    this._each("register", c, this.elements);
  }
  addPlugins(...c) {
    this._each("register", c, this.plugins);
  }
  addScales(...c) {
    this._each("register", c, this.scales);
  }
  getController(c) {
    return this._get(c, this.controllers, "controller");
  }
  getElement(c) {
    return this._get(c, this.elements, "element");
  }
  getPlugin(c) {
    return this._get(c, this.plugins, "plugin");
  }
  getScale(c) {
    return this._get(c, this.scales, "scale");
  }
  removeControllers(...c) {
    this._each("unregister", c, this.controllers);
  }
  removeElements(...c) {
    this._each("unregister", c, this.elements);
  }
  removePlugins(...c) {
    this._each("unregister", c, this.plugins);
  }
  removeScales(...c) {
    this._each("unregister", c, this.scales);
  }
  _each(c, e, l) {
    [
      ...e
    ].forEach((n) => {
      const d = l || this._getRegistryForType(n);
      l || d.isForType(n) || d === this.plugins && n.id ? this._exec(c, d, n) : oc(n, (b) => {
        const i = l || this._getRegistryForType(b);
        this._exec(c, i, b);
      });
    });
  }
  _exec(c, e, l) {
    const n = ob(c);
    uc(l["before" + n], [], l), e[c](l), uc(l["after" + n], [], l);
  }
  _getRegistryForType(c) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const l = this._typedRegistries[e];
      if (l.isForType(c))
        return l;
    }
    return this.plugins;
  }
  _get(c, e, l) {
    const n = e.get(c);
    if (n === void 0)
      throw new Error('"' + c + '" is not a registered ' + l + ".");
    return n;
  }
}
var Uc = /* @__PURE__ */ new a5();
class s5 {
  constructor() {
    this._init = [];
  }
  notify(c, e, l, n) {
    e === "beforeInit" && (this._init = this._createDescriptors(c, !0), this._notify(this._init, c, "install"));
    const d = n ? this._descriptors(c).filter(n) : this._descriptors(c), b = this._notify(d, c, e, l);
    return e === "afterDestroy" && (this._notify(d, c, "stop"), this._notify(this._init, c, "uninstall")), b;
  }
  _notify(c, e, l, n) {
    n = n || {};
    for (const d of c) {
      const b = d.plugin, i = b[l], a = [
        e,
        n,
        d.options
      ];
      if (uc(i, a, b) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    dc(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(c) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(c);
    return this._notifyStateChanges(c), e;
  }
  _createDescriptors(c, e) {
    const l = c && c.config, n = _(l.options && l.options.plugins, {}), d = o5(l);
    return n === !1 && !e ? [] : X5(c, d, n, e);
  }
  _notifyStateChanges(c) {
    const e = this._oldCache || [], l = this._cache, n = (d, b) => d.filter((i) => !b.some((a) => i.plugin.id === a.plugin.id));
    this._notify(n(e, l), c, "stop"), this._notify(n(l, e), c, "start");
  }
}
function o5(t) {
  const c = {}, e = [], l = Object.keys(Uc.plugins.items);
  for (let d = 0; d < l.length; d++)
    e.push(Uc.getPlugin(l[d]));
  const n = t.plugins || [];
  for (let d = 0; d < n.length; d++) {
    const b = n[d];
    e.indexOf(b) === -1 && (e.push(b), c[b.id] = !0);
  }
  return {
    plugins: e,
    localIds: c
  };
}
function u5(t, c) {
  return !c && t === !1 ? null : t === !0 ? {} : t;
}
function X5(t, { plugins: c, localIds: e }, l, n) {
  const d = [], b = t.getContext();
  for (const i of c) {
    const a = i.id, s = u5(l[a], n);
    s !== null && d.push({
      plugin: i,
      options: x5(t.config, {
        plugin: i,
        local: e[a]
      }, s, b)
    });
  }
  return d;
}
function x5(t, { plugin: c, local: e }, l, n) {
  const d = t.pluginScopeKeys(c), b = t.getOptionScopes(l, d);
  return e && c.defaults && b.push(c.defaults), t.createResolver(b, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function pd(t, c) {
  const e = mc.datasets[t] || {};
  return ((c.datasets || {})[t] || {}).indexAxis || c.indexAxis || e.indexAxis || "x";
}
function r5(t, c) {
  let e = t;
  return t === "_index_" ? e = c : t === "_value_" && (e = c === "x" ? "y" : "x"), e;
}
function G5(t, c) {
  return t === c ? "_index_" : "_value_";
}
function Xa(t) {
  if (t === "x" || t === "y" || t === "r")
    return t;
}
function H5(t) {
  if (t === "top" || t === "bottom")
    return "x";
  if (t === "left" || t === "right")
    return "y";
}
function yd(t, ...c) {
  if (Xa(t))
    return t;
  for (const e of c) {
    const l = e.axis || H5(e.position) || t.length > 1 && Xa(t[0].toLowerCase());
    if (l)
      return l;
  }
  throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`);
}
function xa(t, c, e) {
  if (e[c + "AxisID"] === t)
    return {
      axis: c
    };
}
function m5(t, c) {
  if (c.data && c.data.datasets) {
    const e = c.data.datasets.filter((l) => l.xAxisID === t || l.yAxisID === t);
    if (e.length)
      return xa(t, "x", e[0]) || xa(t, "y", e[0]);
  }
  return {};
}
function R5(t, c) {
  const e = Qt[t.type] || {
    scales: {}
  }, l = c.scales || {}, n = pd(t.type, c), d = /* @__PURE__ */ Object.create(null);
  return Object.keys(l).forEach((b) => {
    const i = l[b];
    if (!bc(i))
      return console.error(`Invalid scale configuration for scale: ${b}`);
    if (i._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${b}`);
    const a = yd(b, i, m5(b, t), mc.scales[i.type]), s = G5(a, n), o = e.scales || {};
    d[b] = Ve(/* @__PURE__ */ Object.create(null), [
      {
        axis: a
      },
      i,
      o[a],
      o[s]
    ]);
  }), t.data.datasets.forEach((b) => {
    const i = b.type || t.type, a = b.indexAxis || pd(i, c), o = (Qt[i] || {}).scales || {};
    Object.keys(o).forEach((u) => {
      const X = r5(u, a), x = b[X + "AxisID"] || X;
      d[x] = d[x] || /* @__PURE__ */ Object.create(null), Ve(d[x], [
        {
          axis: X
        },
        l[x],
        o[u]
      ]);
    });
  }), Object.keys(d).forEach((b) => {
    const i = d[b];
    Ve(i, [
      mc.scales[i.type],
      mc.scale
    ]);
  }), d;
}
function ou(t) {
  const c = t.options || (t.options = {});
  c.plugins = _(c.plugins, {}), c.scales = R5(t, c);
}
function uu(t) {
  return t = t || {}, t.datasets = t.datasets || [], t.labels = t.labels || [], t;
}
function Z5(t) {
  return t = t || {}, t.data = uu(t.data), ou(t), t;
}
const ra = /* @__PURE__ */ new Map(), Xu = /* @__PURE__ */ new Set();
function Xl(t, c) {
  let e = ra.get(t);
  return e || (e = c(), ra.set(t, e), Xu.add(e)), e;
}
const ue = (t, c, e) => {
  const l = Ft(c, e);
  l !== void 0 && t.add(l);
};
class g5 {
  constructor(c) {
    this._config = Z5(c), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(c) {
    this._config.type = c;
  }
  get data() {
    return this._config.data;
  }
  set data(c) {
    this._config.data = uu(c);
  }
  get options() {
    return this._config.options;
  }
  set options(c) {
    this._config.options = c;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const c = this._config;
    this.clearCache(), ou(c);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(c) {
    return Xl(c, () => [
      [
        `datasets.${c}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(c, e) {
    return Xl(`${c}.transition.${e}`, () => [
      [
        `datasets.${c}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${c}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(c, e) {
    return Xl(`${c}-${e}`, () => [
      [
        `datasets.${c}.elements.${e}`,
        `datasets.${c}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(c) {
    const e = c.id, l = this.type;
    return Xl(`${l}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...c.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(c, e) {
    const l = this._scopeCache;
    let n = l.get(c);
    return (!n || e) && (n = /* @__PURE__ */ new Map(), l.set(c, n)), n;
  }
  getOptionScopes(c, e, l) {
    const { options: n, type: d } = this, b = this._cachedScopes(c, l), i = b.get(e);
    if (i)
      return i;
    const a = /* @__PURE__ */ new Set();
    e.forEach((o) => {
      c && (a.add(c), o.forEach((u) => ue(a, c, u))), o.forEach((u) => ue(a, n, u)), o.forEach((u) => ue(a, Qt[d] || {}, u)), o.forEach((u) => ue(a, mc, u)), o.forEach((u) => ue(a, gd, u));
    });
    const s = Array.from(a);
    return s.length === 0 && s.push(/* @__PURE__ */ Object.create(null)), Xu.has(e) && b.set(e, s), s;
  }
  chartOptionScopes() {
    const { options: c, type: e } = this;
    return [
      c,
      Qt[e] || {},
      mc.datasets[e] || {},
      {
        type: e
      },
      mc,
      gd
    ];
  }
  resolveNamedOptions(c, e, l, n = [
    ""
  ]) {
    const d = {
      $shared: !0
    }, { resolver: b, subPrefixes: i } = Ga(this._resolverCache, c, n);
    let a = b;
    if (W5(b, e)) {
      d.$shared = !1, l = Vt(l) ? l() : l;
      const s = this.createResolver(c, l, i);
      a = ne(b, l, s);
    }
    for (const s of e)
      d[s] = a[s];
    return d;
  }
  createResolver(c, e, l = [
    ""
  ], n) {
    const { resolver: d } = Ga(this._resolverCache, c, l);
    return bc(e) ? ne(d, e, void 0, n) : d;
  }
}
function Ga(t, c, e) {
  let l = t.get(c);
  l || (l = /* @__PURE__ */ new Map(), t.set(c, l));
  const n = e.join();
  let d = l.get(n);
  return d || (d = {
    resolver: Hb(c, e),
    subPrefixes: e.filter((i) => !i.toLowerCase().includes("hover"))
  }, l.set(n, d)), d;
}
const h5 = (t) => bc(t) && Object.getOwnPropertyNames(t).some((c) => Vt(t[c]));
function W5(t, c) {
  const { isScriptable: e, isIndexable: l } = To(t);
  for (const n of c) {
    const d = e(n), b = l(n), i = (b || d) && t[n];
    if (d && (Vt(i) || h5(i)) || b && Gc(i))
      return !0;
  }
  return !1;
}
var p5 = "4.4.9";
const y5 = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Ha(t, c) {
  return t === "top" || t === "bottom" || y5.indexOf(t) === -1 && c === "x";
}
function ma(t, c) {
  return function(e, l) {
    return e[t] === l[t] ? e[c] - l[c] : e[t] - l[t];
  };
}
function Ra(t) {
  const c = t.chart, e = c.options.animation;
  c.notifyPlugins("afterRender"), uc(e && e.onComplete, [
    t
  ], c);
}
function I5(t) {
  const c = t.chart, e = c.options.animation;
  uc(e && e.onProgress, [
    t
  ], c);
}
function xu(t) {
  return Zb() && typeof t == "string" ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t;
}
const vl = {}, Za = (t) => {
  const c = xu(t);
  return Object.values(vl).filter((e) => e.canvas === c).pop();
};
function F5(t, c, e) {
  const l = Object.keys(t);
  for (const n of l) {
    const d = +n;
    if (d >= c) {
      const b = t[n];
      delete t[n], (e > 0 || d > c) && (t[d + e] = b);
    }
  }
}
function V5(t, c, e, l) {
  return !e || t.type === "mouseout" ? null : l ? c : t;
}
var Rt;
let Bt = (Rt = class {
  static register(...c) {
    Uc.add(...c), ga();
  }
  static unregister(...c) {
    Uc.remove(...c), ga();
  }
  constructor(c, e) {
    const l = this.config = new g5(e), n = xu(c), d = Za(n);
    if (d)
      throw new Error("Canvas is already in use. Chart with ID '" + d.id + "' must be destroyed before the canvas with ID '" + d.canvas.id + "' can be reused.");
    const b = l.createResolver(l.chartOptionScopes(), this.getContext());
    this.platform = new (l.platform || jR(n))(), this.platform.updateConfig(l);
    const i = this.platform.acquireContext(n, b.aspectRatio), a = i && i.canvas, s = a && a.height, o = a && a.width;
    if (this.id = vH(), this.ctx = i, this.canvas = a, this.width = o, this.height = s, this._options = b, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new s5(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = jH((u) => this.update(u), b.resizeDelay || 0), this._dataChanges = [], vl[this.id] = this, !i || !a) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    tt.listen(this, "complete", Ra), tt.listen(this, "progress", I5), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: c, maintainAspectRatio: e }, width: l, height: n, _aspectRatio: d } = this;
    return dc(c) ? e && d ? d : n ? l / n : null : c;
  }
  get data() {
    return this.config.data;
  }
  set data(c) {
    this.config.data = c;
  }
  get options() {
    return this._options;
  }
  set options(c) {
    this.config.options = c;
  }
  get registry() {
    return Uc;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Di(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return ki(this.canvas, this.ctx), this;
  }
  stop() {
    return tt.stop(this), this;
  }
  resize(c, e) {
    tt.running(this) ? this._resizeBeforeDraw = {
      width: c,
      height: e
    } : this._resize(c, e);
  }
  _resize(c, e) {
    const l = this.options, n = this.canvas, d = l.maintainAspectRatio && this.aspectRatio, b = this.platform.getMaximumSize(n, c, e, d), i = l.devicePixelRatio || this.platform.getDevicePixelRatio(), a = this.width ? "resize" : "attach";
    this.width = b.width, this.height = b.height, this._aspectRatio = this.aspectRatio, Di(this, i, !0) && (this.notifyPlugins("resize", {
      size: b
    }), uc(l.onResize, [
      this,
      b
    ], this), this.attached && this._doResize(a) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    oc(e, (l, n) => {
      l.id = n;
    });
  }
  buildOrUpdateScales() {
    const c = this.options, e = c.scales, l = this.scales, n = Object.keys(l).reduce((b, i) => (b[i] = !1, b), {});
    let d = [];
    e && (d = d.concat(Object.keys(e).map((b) => {
      const i = e[b], a = yd(b, i), s = a === "r", o = a === "x";
      return {
        options: i,
        dposition: s ? "chartArea" : o ? "bottom" : "left",
        dtype: s ? "radialLinear" : o ? "category" : "linear"
      };
    }))), oc(d, (b) => {
      const i = b.options, a = i.id, s = yd(a, i), o = _(i.type, b.dtype);
      (i.position === void 0 || Ha(i.position, s) !== Ha(b.dposition)) && (i.position = b.dposition), n[a] = !0;
      let u = null;
      if (a in l && l[a].type === o)
        u = l[a];
      else {
        const X = Uc.getScale(o);
        u = new X({
          id: a,
          type: o,
          ctx: this.ctx,
          chart: this
        }), l[u.id] = u;
      }
      u.init(i, c);
    }), oc(n, (b, i) => {
      b || delete l[i];
    }), oc(l, (b) => {
      Bc.configure(this, b, b.options), Bc.addBox(this, b);
    });
  }
  _updateMetasets() {
    const c = this._metasets, e = this.data.datasets.length, l = c.length;
    if (c.sort((n, d) => n.index - d.index), l > e) {
      for (let n = e; n < l; ++n)
        this._destroyDatasetMeta(n);
      c.splice(e, l - e);
    }
    this._sortedMetasets = c.slice(0).sort(ma("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: c, data: { datasets: e } } = this;
    c.length > e.length && delete this._stacks, c.forEach((l, n) => {
      e.filter((d) => d === l._dataset).length === 0 && this._destroyDatasetMeta(n);
    });
  }
  buildOrUpdateControllers() {
    const c = [], e = this.data.datasets;
    let l, n;
    for (this._removeUnreferencedMetasets(), l = 0, n = e.length; l < n; l++) {
      const d = e[l];
      let b = this.getDatasetMeta(l);
      const i = d.type || this.config.type;
      if (b.type && b.type !== i && (this._destroyDatasetMeta(l), b = this.getDatasetMeta(l)), b.type = i, b.indexAxis = d.indexAxis || pd(i, this.options), b.order = d.order || 0, b.index = l, b.label = "" + d.label, b.visible = this.isDatasetVisible(l), b.controller)
        b.controller.updateIndex(l), b.controller.linkScales();
      else {
        const a = Uc.getController(i), { datasetElementType: s, dataElementType: o } = mc.datasets[i];
        Object.assign(a, {
          dataElementType: Uc.getElement(o),
          datasetElementType: s && Uc.getElement(s)
        }), b.controller = new a(this, l), c.push(b.controller);
      }
    }
    return this._updateMetasets(), c;
  }
  _resetElements() {
    oc(this.data.datasets, (c, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(c) {
    const e = this.config;
    e.update();
    const l = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), n = this._animationsDisabled = !l.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: c,
      cancelable: !0
    }) === !1)
      return;
    const d = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let b = 0;
    for (let s = 0, o = this.data.datasets.length; s < o; s++) {
      const { controller: u } = this.getDatasetMeta(s), X = !n && d.indexOf(u) === -1;
      u.buildOrUpdateElements(X), b = Math.max(+u.getMaxOverflow(), b);
    }
    b = this._minPadding = l.layout.autoPadding ? b : 0, this._updateLayout(b), n || oc(d, (s) => {
      s.reset();
    }), this._updateDatasets(c), this.notifyPlugins("afterUpdate", {
      mode: c
    }), this._layers.sort(ma("z", "_idx"));
    const { _active: i, _lastEvent: a } = this;
    a ? this._eventHandler(a, !0) : i.length && this._updateHoverStyles(i, i, !0), this.render();
  }
  _updateScales() {
    oc(this.scales, (c) => {
      Bc.removeBox(this, c);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const c = this.options, e = new Set(Object.keys(this._listeners)), l = new Set(c.events);
    (!fi(e, l) || !!this._responsiveListeners !== c.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: c } = this, e = this._getUniformDataChanges() || [];
    for (const { method: l, start: n, count: d } of e) {
      const b = l === "_removeElements" ? -d : d;
      F5(c, n, b);
    }
  }
  _getUniformDataChanges() {
    const c = this._dataChanges;
    if (!c || !c.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, l = (d) => new Set(c.filter((b) => b[0] === d).map((b, i) => i + "," + b.splice(1).join(","))), n = l(0);
    for (let d = 1; d < e; d++)
      if (!fi(n, l(d)))
        return;
    return Array.from(n).map((d) => d.split(",")).map((d) => ({
      method: d[1],
      start: +d[2],
      count: +d[3]
    }));
  }
  _updateLayout(c) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    Bc.update(this, this.width, this.height, c);
    const e = this.chartArea, l = e.width <= 0 || e.height <= 0;
    this._layers = [], oc(this.boxes, (n) => {
      l && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()));
    }, this), this._layers.forEach((n, d) => {
      n._idx = d;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(c) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: c,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, l = this.data.datasets.length; e < l; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, l = this.data.datasets.length; e < l; ++e)
        this._updateDataset(e, Vt(c) ? c({
          datasetIndex: e
        }) : c);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: c
      });
    }
  }
  _updateDataset(c, e) {
    const l = this.getDatasetMeta(c), n = {
      meta: l,
      index: c,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (l.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (tt.has(this) ? this.attached && !tt.running(this) && tt.start(this) : (this.draw(), Ra({
      chart: this
    })));
  }
  draw() {
    let c;
    if (this._resizeBeforeDraw) {
      const { width: l, height: n } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(l, n);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this._layers;
    for (c = 0; c < e.length && e[c].z <= 0; ++c)
      e[c].draw(this.chartArea);
    for (this._drawDatasets(); c < e.length; ++c)
      e[c].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(c) {
    const e = this._sortedMetasets, l = [];
    let n, d;
    for (n = 0, d = e.length; n < d; ++n) {
      const b = e[n];
      (!c || b.visible) && l.push(b);
    }
    return l;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const c = this.getSortedVisibleDatasetMetas();
    for (let e = c.length - 1; e >= 0; --e)
      this._drawDataset(c[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(c) {
    const e = this.ctx, l = {
      meta: c,
      index: c.index,
      cancelable: !0
    }, n = tu(this, c);
    this.notifyPlugins("beforeDatasetDraw", l) !== !1 && (n && dn(e, n), c.controller.draw(), n && bn(e), l.cancelable = !1, this.notifyPlugins("afterDatasetDraw", l));
  }
  isPointInArea(c) {
    return bt(c, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(c, e, l, n) {
    const d = yR.modes[e];
    return typeof d == "function" ? d(this, c, l, n) : [];
  }
  getDatasetMeta(c) {
    const e = this.data.datasets[c], l = this._metasets;
    let n = l.filter((d) => d && d._dataset === e).pop();
    return n || (n = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: c,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, l.push(n)), n;
  }
  getContext() {
    return this.$context || (this.$context = vt(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(c) {
    const e = this.data.datasets[c];
    if (!e)
      return !1;
    const l = this.getDatasetMeta(c);
    return typeof l.hidden == "boolean" ? !l.hidden : !e.hidden;
  }
  setDatasetVisibility(c, e) {
    const l = this.getDatasetMeta(c);
    l.hidden = !e;
  }
  toggleDataVisibility(c) {
    this._hiddenIndices[c] = !this._hiddenIndices[c];
  }
  getDataVisibility(c) {
    return !this._hiddenIndices[c];
  }
  _updateVisibility(c, e, l) {
    const n = l ? "show" : "hide", d = this.getDatasetMeta(c), b = d.controller._resolveAnimations(void 0, n);
    ke(e) ? (d.data[e].hidden = !l, this.update()) : (this.setDatasetVisibility(c, l), b.update(d, {
      visible: l
    }), this.update((i) => i.datasetIndex === c ? n : void 0));
  }
  hide(c, e) {
    this._updateVisibility(c, e, !1);
  }
  show(c, e) {
    this._updateVisibility(c, e, !0);
  }
  _destroyDatasetMeta(c) {
    const e = this._metasets[c];
    e && e.controller && e.controller._destroy(), delete this._metasets[c];
  }
  _stop() {
    let c, e;
    for (this.stop(), tt.remove(this), c = 0, e = this.data.datasets.length; c < e; ++c)
      this._destroyDatasetMeta(c);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: c, ctx: e } = this;
    this._stop(), this.config.clearCache(), c && (this.unbindEvents(), ki(c, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete vl[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...c) {
    return this.canvas.toDataURL(...c);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const c = this._listeners, e = this.platform, l = (d, b) => {
      e.addEventListener(this, d, b), c[d] = b;
    }, n = (d, b, i) => {
      d.offsetX = b, d.offsetY = i, this._eventHandler(d);
    };
    oc(this.options.events, (d) => l(d, n));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const c = this._responsiveListeners, e = this.platform, l = (a, s) => {
      e.addEventListener(this, a, s), c[a] = s;
    }, n = (a, s) => {
      c[a] && (e.removeEventListener(this, a, s), delete c[a]);
    }, d = (a, s) => {
      this.canvas && this.resize(a, s);
    };
    let b;
    const i = () => {
      n("attach", i), this.attached = !0, this.resize(), l("resize", d), l("detach", b);
    };
    b = () => {
      this.attached = !1, n("resize", d), this._stop(), this._resize(0, 0), l("attach", i);
    }, e.isAttached(this.canvas) ? i() : b();
  }
  unbindEvents() {
    oc(this._listeners, (c, e) => {
      this.platform.removeEventListener(this, e, c);
    }), this._listeners = {}, oc(this._responsiveListeners, (c, e) => {
      this.platform.removeEventListener(this, e, c);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(c, e, l) {
    const n = l ? "set" : "remove";
    let d, b, i, a;
    for (e === "dataset" && (d = this.getDatasetMeta(c[0].datasetIndex), d.controller["_" + n + "DatasetHoverStyle"]()), i = 0, a = c.length; i < a; ++i) {
      b = c[i];
      const s = b && this.getDatasetMeta(b.datasetIndex).controller;
      s && s[n + "HoverStyle"](b.element, b.datasetIndex, b.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(c) {
    const e = this._active || [], l = c.map(({ datasetIndex: d, index: b }) => {
      const i = this.getDatasetMeta(d);
      if (!i)
        throw new Error("No dataset found at index " + d);
      return {
        datasetIndex: d,
        element: i.data[b],
        index: b
      };
    });
    !Cl(l, e) && (this._active = l, this._lastEvent = null, this._updateHoverStyles(l, e));
  }
  notifyPlugins(c, e, l) {
    return this._plugins.notify(this, c, e, l);
  }
  isPluginEnabled(c) {
    return this._plugins._cache.filter((e) => e.plugin.id === c).length === 1;
  }
  _updateHoverStyles(c, e, l) {
    const n = this.options.hover, d = (a, s) => a.filter((o) => !s.some((u) => o.datasetIndex === u.datasetIndex && o.index === u.index)), b = d(e, c), i = l ? c : d(c, e);
    b.length && this.updateHoverStyle(b, n.mode, !1), i.length && n.mode && this.updateHoverStyle(i, n.mode, !0);
  }
  _eventHandler(c, e) {
    const l = {
      event: c,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(c)
    }, n = (b) => (b.options.events || this.options.events).includes(c.native.type);
    if (this.notifyPlugins("beforeEvent", l, n) === !1)
      return;
    const d = this._handleEvent(c, e, l.inChartArea);
    return l.cancelable = !1, this.notifyPlugins("afterEvent", l, n), (d || l.changed) && this.render(), this;
  }
  _handleEvent(c, e, l) {
    const { _active: n = [], options: d } = this, b = e, i = this._getActiveElements(c, n, l, b), a = CH(c), s = V5(c, this._lastEvent, l, a);
    l && (this._lastEvent = null, uc(d.onHover, [
      c,
      i,
      this
    ], this), a && uc(d.onClick, [
      c,
      i,
      this
    ], this));
    const o = !Cl(i, n);
    return (o || e) && (this._active = i, this._updateHoverStyles(i, n, e)), this._lastEvent = s, o;
  }
  _getActiveElements(c, e, l, n) {
    if (c.type === "mouseout")
      return [];
    if (!l)
      return e;
    const d = this.options.hover;
    return this.getElementsAtEventForMode(c, d.mode, d, n);
  }
}, f(Rt, "defaults", mc), f(Rt, "instances", vl), f(Rt, "overrides", Qt), f(Rt, "registry", Uc), f(Rt, "version", p5), f(Rt, "getChart", Za), Rt);
function ga() {
  return oc(Bt.instances, (t) => t._plugins.invalidate());
}
function v5(t, c, e) {
  const { startAngle: l, pixelMargin: n, x: d, y: b, outerRadius: i, innerRadius: a } = c;
  let s = n / i;
  t.beginPath(), t.arc(d, b, i, l - s, e + s), a > n ? (s = n / a, t.arc(d, b, a, e + s, l - s, !0)) : t.arc(d, b, n, e + gc, l - gc), t.closePath(), t.clip();
}
function B5(t) {
  return Gb(t, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function f5(t, c, e, l) {
  const n = B5(t.options.borderRadius), d = (e - c) / 2, b = Math.min(d, l * c / 2), i = (a) => {
    const s = (e - Math.min(d, a)) * l / 2;
    return yc(a, 0, Math.min(d, s));
  };
  return {
    outerStart: i(n.outerStart),
    outerEnd: i(n.outerEnd),
    innerStart: yc(n.innerStart, 0, b),
    innerEnd: yc(n.innerEnd, 0, b)
  };
}
function Pt(t, c, e, l) {
  return {
    x: e + t * Math.cos(c),
    y: l + t * Math.sin(c)
  };
}
function Ol(t, c, e, l, n, d) {
  const { x: b, y: i, startAngle: a, pixelMargin: s, innerRadius: o } = c, u = Math.max(c.outerRadius + l + e - s, 0), X = o > 0 ? o + l + e + s : 0;
  let x = 0;
  const H = n - a;
  if (l) {
    const S = o > 0 ? o - l : 0, L = u > 0 ? u - l : 0, E = (S + L) / 2, cc = E !== 0 ? H * E / (E + l) : H;
    x = (H - cc) / 2;
  }
  const r = Math.max(1e-3, H * u - e / rc) / u, G = (H - r) / 2, m = a + G + x, Z = n - G - x, { outerStart: h, outerEnd: g, innerStart: R, innerEnd: W } = f5(c, X, u, Z - m), p = u - h, y = u - g, V = m + h / p, C = Z - g / y, J = X + R, Y = X + W, K = m + R / J, $ = Z - W / Y;
  if (t.beginPath(), d) {
    const S = (V + C) / 2;
    if (t.arc(b, i, u, V, S), t.arc(b, i, u, S, C), g > 0) {
      const ic = Pt(y, C, b, i);
      t.arc(ic.x, ic.y, g, C, Z + gc);
    }
    const L = Pt(Y, Z, b, i);
    if (t.lineTo(L.x, L.y), W > 0) {
      const ic = Pt(Y, $, b, i);
      t.arc(ic.x, ic.y, W, Z + gc, $ + Math.PI);
    }
    const E = (Z - W / X + (m + R / X)) / 2;
    if (t.arc(b, i, X, Z - W / X, E, !0), t.arc(b, i, X, E, m + R / X, !0), R > 0) {
      const ic = Pt(J, K, b, i);
      t.arc(ic.x, ic.y, R, K + Math.PI, m - gc);
    }
    const cc = Pt(p, m, b, i);
    if (t.lineTo(cc.x, cc.y), h > 0) {
      const ic = Pt(p, V, b, i);
      t.arc(ic.x, ic.y, h, m - gc, V);
    }
  } else {
    t.moveTo(b, i);
    const S = Math.cos(V) * u + b, L = Math.sin(V) * u + i;
    t.lineTo(S, L);
    const E = Math.cos(C) * u + b, cc = Math.sin(C) * u + i;
    t.lineTo(E, cc);
  }
  t.closePath();
}
function J5(t, c, e, l, n) {
  const { fullCircles: d, startAngle: b, circumference: i } = c;
  let a = c.endAngle;
  if (d) {
    Ol(t, c, e, l, a, n);
    for (let s = 0; s < d; ++s)
      t.fill();
    isNaN(i) || (a = b + (i % xc || xc));
  }
  return Ol(t, c, e, l, a, n), t.fill(), a;
}
function Y5(t, c, e, l, n) {
  const { fullCircles: d, startAngle: b, circumference: i, options: a } = c, { borderWidth: s, borderJoinStyle: o, borderDash: u, borderDashOffset: X } = a, x = a.borderAlign === "inner";
  if (!s)
    return;
  t.setLineDash(u || []), t.lineDashOffset = X, x ? (t.lineWidth = s * 2, t.lineJoin = o || "round") : (t.lineWidth = s, t.lineJoin = o || "bevel");
  let H = c.endAngle;
  if (d) {
    Ol(t, c, e, l, H, n);
    for (let r = 0; r < d; ++r)
      t.stroke();
    isNaN(i) || (H = b + (i % xc || xc));
  }
  x && v5(t, c, H), d || (Ol(t, c, e, l, H, n), t.stroke());
}
class ge extends Gt {
  constructor(e) {
    super();
    f(this, "circumference");
    f(this, "endAngle");
    f(this, "fullCircles");
    f(this, "innerRadius");
    f(this, "outerRadius");
    f(this, "pixelMargin");
    f(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, e && Object.assign(this, e);
  }
  inRange(e, l, n) {
    const d = this.getProps([
      "x",
      "y"
    ], n), { angle: b, distance: i } = Co(d, {
      x: e,
      y: l
    }), { startAngle: a, endAngle: s, innerRadius: o, outerRadius: u, circumference: X } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], n), x = (this.options.spacing + this.options.borderWidth) / 2, H = _(X, s - a), r = Oe(b, a, s) && a !== s, G = H >= xc || r, m = nt(i, o + x, u + x);
    return G && m;
  }
  getCenterPoint(e) {
    const { x: l, y: n, startAngle: d, endAngle: b, innerRadius: i, outerRadius: a } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], e), { offset: s, spacing: o } = this.options, u = (d + b) / 2, X = (i + a + o + s) / 2;
    return {
      x: l + Math.cos(u) * X,
      y: n + Math.sin(u) * X
    };
  }
  tooltipPosition(e) {
    return this.getCenterPoint(e);
  }
  draw(e) {
    const { options: l, circumference: n } = this, d = (l.offset || 0) / 4, b = (l.spacing || 0) / 2, i = l.circular;
    if (this.pixelMargin = l.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = n > xc ? Math.floor(n / xc) : 0, n === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    e.save();
    const a = (this.startAngle + this.endAngle) / 2;
    e.translate(Math.cos(a) * d, Math.sin(a) * d);
    const s = 1 - Math.sin(Math.min(rc, n || 0)), o = d * s;
    e.fillStyle = l.backgroundColor, e.strokeStyle = l.borderColor, J5(e, this, o, b, i), Y5(e, this, o, b, i), e.restore();
  }
}
f(ge, "id", "arc"), f(ge, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
}), f(ge, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), f(ge, "descriptors", {
  _scriptable: !0,
  _indexable: (e) => e !== "borderDash"
});
function ru(t, c, e = c) {
  t.lineCap = _(e.borderCapStyle, c.borderCapStyle), t.setLineDash(_(e.borderDash, c.borderDash)), t.lineDashOffset = _(e.borderDashOffset, c.borderDashOffset), t.lineJoin = _(e.borderJoinStyle, c.borderJoinStyle), t.lineWidth = _(e.borderWidth, c.borderWidth), t.strokeStyle = _(e.borderColor, c.borderColor);
}
function N5(t, c, e) {
  t.lineTo(e.x, e.y);
}
function C5(t) {
  return t.stepped ? lm : t.tension || t.cubicInterpolationMode === "monotone" ? nm : N5;
}
function Gu(t, c, e = {}) {
  const l = t.length, { start: n = 0, end: d = l - 1 } = e, { start: b, end: i } = c, a = Math.max(n, b), s = Math.min(d, i), o = n < b && d < b || n > i && d > i;
  return {
    count: l,
    start: a,
    loop: c.loop,
    ilen: s < a && !o ? l + s - a : s - a
  };
}
function z5(t, c, e, l) {
  const { points: n, options: d } = c, { count: b, start: i, loop: a, ilen: s } = Gu(n, e, l), o = C5(d);
  let { move: u = !0, reverse: X } = l || {}, x, H, r;
  for (x = 0; x <= s; ++x)
    H = n[(i + (X ? s - x : x)) % b], !H.skip && (u ? (t.moveTo(H.x, H.y), u = !1) : o(t, r, H, X, d.stepped), r = H);
  return a && (H = n[(i + (X ? s : 0)) % b], o(t, r, H, X, d.stepped)), !!a;
}
function w5(t, c, e, l) {
  const n = c.points, { count: d, start: b, ilen: i } = Gu(n, e, l), { move: a = !0, reverse: s } = l || {};
  let o = 0, u = 0, X, x, H, r, G, m;
  const Z = (g) => (b + (s ? i - g : g)) % d, h = () => {
    r !== G && (t.lineTo(o, G), t.lineTo(o, r), t.lineTo(o, m));
  };
  for (a && (x = n[Z(0)], t.moveTo(x.x, x.y)), X = 0; X <= i; ++X) {
    if (x = n[Z(X)], x.skip)
      continue;
    const g = x.x, R = x.y, W = g | 0;
    W === H ? (R < r ? r = R : R > G && (G = R), o = (u * o + g) / ++u) : (h(), t.lineTo(g, R), H = W, u = 0, r = G = R), m = R;
  }
  h();
}
function Id(t) {
  const c = t.options, e = c.borderDash && c.borderDash.length;
  return !t._decimated && !t._loop && !c.tension && c.cubicInterpolationMode !== "monotone" && !c.stepped && !e ? w5 : z5;
}
function S5(t) {
  return t.stepped ? wm : t.tension || t.cubicInterpolationMode === "monotone" ? Sm : wt;
}
function L5(t, c, e, l) {
  let n = c._path;
  n || (n = c._path = new Path2D(), c.path(n, e, l) && n.closePath()), ru(t, c.options), t.stroke(n);
}
function k5(t, c, e, l) {
  const { segments: n, options: d } = c, b = Id(c);
  for (const i of n)
    ru(t, d, i.style), t.beginPath(), b(t, c, i, {
      start: e,
      end: e + l - 1
    }) && t.closePath(), t.stroke();
}
const O5 = typeof Path2D == "function";
function A5(t, c, e, l) {
  O5 && !c.options.segment ? L5(t, c, e, l) : k5(t, c, e, l);
}
class it extends Gt {
  constructor(c) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, c && Object.assign(this, c);
  }
  updateControlPoints(c, e) {
    const l = this.options;
    if ((l.tension || l.cubicInterpolationMode === "monotone") && !l.stepped && !this._pointsUpdated) {
      const n = l.spanGaps ? this._loop : this._fullLoop;
      vm(this._points, l, c, n, e), this._pointsUpdated = !0;
    }
  }
  set points(c) {
    this._points = c, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Qm(this, this.options.segment));
  }
  first() {
    const c = this.segments, e = this.points;
    return c.length && e[c[0].start];
  }
  last() {
    const c = this.segments, e = this.points, l = c.length;
    return l && e[c[l - 1].end];
  }
  interpolate(c, e) {
    const l = this.options, n = c[e], d = this.points, b = cu(this, {
      property: e,
      start: n,
      end: n
    });
    if (!b.length)
      return;
    const i = [], a = S5(l);
    let s, o;
    for (s = 0, o = b.length; s < o; ++s) {
      const { start: u, end: X } = b[s], x = d[u], H = d[X];
      if (x === H) {
        i.push(x);
        continue;
      }
      const r = Math.abs((n - x[e]) / (H[e] - x[e])), G = a(x, H, r, l.stepped);
      G[e] = c[e], i.push(G);
    }
    return i.length === 1 ? i[0] : i;
  }
  pathSegment(c, e, l) {
    return Id(this)(c, this, e, l);
  }
  path(c, e, l) {
    const n = this.segments, d = Id(this);
    let b = this._loop;
    e = e || 0, l = l || this.points.length - e;
    for (const i of n)
      b &= d(c, this, i, {
        start: e,
        end: e + l - 1
      });
    return !!b;
  }
  draw(c, e, l, n) {
    const d = this.options || {};
    (this.points || []).length && d.borderWidth && (c.save(), A5(c, this, l, n), c.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
f(it, "id", "line"), f(it, "defaults", {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
}), f(it, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), f(it, "descriptors", {
  _scriptable: !0,
  _indexable: (c) => c !== "borderDash" && c !== "fill"
});
function ha(t, c, e, l) {
  const n = t.options, { [e]: d } = t.getProps([
    e
  ], l);
  return Math.abs(c - d) < n.radius + n.hitRadius;
}
class Ne extends Gt {
  constructor(e) {
    super();
    f(this, "parsed");
    f(this, "skip");
    f(this, "stop");
    this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, e && Object.assign(this, e);
  }
  inRange(e, l, n) {
    const d = this.options, { x: b, y: i } = this.getProps([
      "x",
      "y"
    ], n);
    return Math.pow(e - b, 2) + Math.pow(l - i, 2) < Math.pow(d.hitRadius + d.radius, 2);
  }
  inXRange(e, l) {
    return ha(this, e, "x", l);
  }
  inYRange(e, l) {
    return ha(this, e, "y", l);
  }
  getCenterPoint(e) {
    const { x: l, y: n } = this.getProps([
      "x",
      "y"
    ], e);
    return {
      x: l,
      y: n
    };
  }
  size(e) {
    e = e || this.options || {};
    let l = e.radius || 0;
    l = Math.max(l, l && e.hoverRadius || 0);
    const n = l && e.borderWidth || 0;
    return (l + n) * 2;
  }
  draw(e, l) {
    const n = this.options;
    this.skip || n.radius < 0.1 || !bt(this, l, this.size(n) / 2) || (e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.fillStyle = n.backgroundColor, hd(e, n, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
f(Ne, "id", "point"), /**
* @type {any}
*/
f(Ne, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), /**
* @type {any}
*/
f(Ne, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function Hu(t, c) {
  const { x: e, y: l, base: n, width: d, height: b } = t.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], c);
  let i, a, s, o, u;
  return t.horizontal ? (u = b / 2, i = Math.min(e, n), a = Math.max(e, n), s = l - u, o = l + u) : (u = d / 2, i = e - u, a = e + u, s = Math.min(l, n), o = Math.max(l, n)), {
    left: i,
    top: s,
    right: a,
    bottom: o
  };
}
function ht(t, c, e, l) {
  return t ? 0 : yc(c, e, l);
}
function D5(t, c, e) {
  const l = t.options.borderWidth, n = t.borderSkipped, d = Qo(l);
  return {
    t: ht(n.top, d.top, 0, e),
    r: ht(n.right, d.right, 0, c),
    b: ht(n.bottom, d.bottom, 0, e),
    l: ht(n.left, d.left, 0, c)
  };
}
function Q5(t, c, e) {
  const { enableBorderRadius: l } = t.getProps([
    "enableBorderRadius"
  ]), n = t.options.borderRadius, d = kt(n), b = Math.min(c, e), i = t.borderSkipped, a = l || bc(n);
  return {
    topLeft: ht(!a || i.top || i.left, d.topLeft, 0, b),
    topRight: ht(!a || i.top || i.right, d.topRight, 0, b),
    bottomLeft: ht(!a || i.bottom || i.left, d.bottomLeft, 0, b),
    bottomRight: ht(!a || i.bottom || i.right, d.bottomRight, 0, b)
  };
}
function T5(t) {
  const c = Hu(t), e = c.right - c.left, l = c.bottom - c.top, n = D5(t, e / 2, l / 2), d = Q5(t, e / 2, l / 2);
  return {
    outer: {
      x: c.left,
      y: c.top,
      w: e,
      h: l,
      radius: d
    },
    inner: {
      x: c.left + n.l,
      y: c.top + n.t,
      w: e - n.l - n.r,
      h: l - n.t - n.b,
      radius: {
        topLeft: Math.max(0, d.topLeft - Math.max(n.t, n.l)),
        topRight: Math.max(0, d.topRight - Math.max(n.t, n.r)),
        bottomLeft: Math.max(0, d.bottomLeft - Math.max(n.b, n.l)),
        bottomRight: Math.max(0, d.bottomRight - Math.max(n.b, n.r))
      }
    }
  };
}
function On(t, c, e, l) {
  const n = c === null, d = e === null, i = t && !(n && d) && Hu(t, l);
  return i && (n || nt(c, i.left, i.right)) && (d || nt(e, i.top, i.bottom));
}
function j5(t) {
  return t.topLeft || t.topRight || t.bottomLeft || t.bottomRight;
}
function M5(t, c) {
  t.rect(c.x, c.y, c.w, c.h);
}
function An(t, c, e = {}) {
  const l = t.x !== e.x ? -c : 0, n = t.y !== e.y ? -c : 0, d = (t.x + t.w !== e.x + e.w ? c : 0) - l, b = (t.y + t.h !== e.y + e.h ? c : 0) - n;
  return {
    x: t.x + l,
    y: t.y + n,
    w: t.w + d,
    h: t.h + b,
    radius: t.radius
  };
}
class Bl extends Gt {
  constructor(c) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, c && Object.assign(this, c);
  }
  draw(c) {
    const { inflateAmount: e, options: { borderColor: l, backgroundColor: n } } = this, { inner: d, outer: b } = T5(this), i = j5(b.radius) ? Ae : M5;
    c.save(), (b.w !== d.w || b.h !== d.h) && (c.beginPath(), i(c, An(b, e, d)), c.clip(), i(c, An(d, -e, b)), c.fillStyle = l, c.fill("evenodd")), c.beginPath(), i(c, An(d, e)), c.fillStyle = n, c.fill(), c.restore();
  }
  inRange(c, e, l) {
    return On(this, c, e, l);
  }
  inXRange(c, e) {
    return On(this, c, null, e);
  }
  inYRange(c, e) {
    return On(this, null, c, e);
  }
  getCenterPoint(c) {
    const { x: e, y: l, base: n, horizontal: d } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], c);
    return {
      x: d ? (e + n) / 2 : e,
      y: d ? l : (l + n) / 2
    };
  }
  getRange(c) {
    return c === "x" ? this.width / 2 : this.height / 2;
  }
}
f(Bl, "id", "bar"), f(Bl, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), f(Bl, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
var U5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcElement: ge,
  BarElement: Bl,
  LineElement: it,
  PointElement: Ne
});
const Fd = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
  // grey
], Wa = /* @__PURE__ */ Fd.map((t) => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function mu(t) {
  return Fd[t % Fd.length];
}
function Ru(t) {
  return Wa[t % Wa.length];
}
function P5(t, c) {
  return t.borderColor = mu(c), t.backgroundColor = Ru(c), ++c;
}
function E5(t, c) {
  return t.backgroundColor = t.data.map(() => mu(c++)), c;
}
function K5(t, c) {
  return t.backgroundColor = t.data.map(() => Ru(c++)), c;
}
function _5(t) {
  let c = 0;
  return (e, l) => {
    const n = t.getDatasetMeta(l).controller;
    n instanceof Lt ? c = E5(e, c) : n instanceof Ye ? c = K5(e, c) : n && (c = P5(e, c));
  };
}
function pa(t) {
  let c;
  for (c in t)
    if (t[c].borderColor || t[c].backgroundColor)
      return !0;
  return !1;
}
function $5(t) {
  return t && (t.borderColor || t.backgroundColor);
}
function q5() {
  return mc.borderColor !== "rgba(0,0,0,0.1)" || mc.backgroundColor !== "rgba(0,0,0,0.1)";
}
var cZ = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(t, c, e) {
    if (!e.enabled)
      return;
    const { data: { datasets: l }, options: n } = t.config, { elements: d } = n, b = pa(l) || $5(n) || d && pa(d) || q5();
    if (!e.forceOverride && b)
      return;
    const i = _5(t);
    l.forEach(i);
  }
};
function tZ(t, c, e, l, n) {
  const d = n.samples || l;
  if (d >= e)
    return t.slice(c, c + e);
  const b = [], i = (e - 2) / (d - 2);
  let a = 0;
  const s = c + e - 1;
  let o = c, u, X, x, H, r;
  for (b[a++] = t[o], u = 0; u < d - 2; u++) {
    let G = 0, m = 0, Z;
    const h = Math.floor((u + 1) * i) + 1 + c, g = Math.min(Math.floor((u + 2) * i) + 1, e) + c, R = g - h;
    for (Z = h; Z < g; Z++)
      G += t[Z].x, m += t[Z].y;
    G /= R, m /= R;
    const W = Math.floor(u * i) + 1 + c, p = Math.min(Math.floor((u + 1) * i) + 1, e) + c, { x: y, y: V } = t[o];
    for (x = H = -1, Z = W; Z < p; Z++)
      H = 0.5 * Math.abs((y - G) * (t[Z].y - V) - (y - t[Z].x) * (m - V)), H > x && (x = H, X = t[Z], r = Z);
    b[a++] = X, o = r;
  }
  return b[a++] = t[s], b;
}
function eZ(t, c, e, l) {
  let n = 0, d = 0, b, i, a, s, o, u, X, x, H, r;
  const G = [], m = c + e - 1, Z = t[c].x, g = t[m].x - Z;
  for (b = c; b < c + e; ++b) {
    i = t[b], a = (i.x - Z) / g * l, s = i.y;
    const R = a | 0;
    if (R === o)
      s < H ? (H = s, u = b) : s > r && (r = s, X = b), n = (d * n + i.x) / ++d;
    else {
      const W = b - 1;
      if (!dc(u) && !dc(X)) {
        const p = Math.min(u, X), y = Math.max(u, X);
        p !== x && p !== W && G.push({
          ...t[p],
          x: n
        }), y !== x && y !== W && G.push({
          ...t[y],
          x: n
        });
      }
      b > 0 && W !== x && G.push(t[W]), G.push(i), o = R, d = 0, H = r = s, u = X = x = b;
    }
  }
  return G;
}
function Zu(t) {
  if (t._decimated) {
    const c = t._data;
    delete t._decimated, delete t._data, Object.defineProperty(t, "data", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: c
    });
  }
}
function ya(t) {
  t.data.datasets.forEach((c) => {
    Zu(c);
  });
}
function lZ(t, c) {
  const e = c.length;
  let l = 0, n;
  const { iScale: d } = t, { min: b, max: i, minDefined: a, maxDefined: s } = d.getUserBounds();
  return a && (l = yc(dt(c, d.axis, b).lo, 0, e - 1)), s ? n = yc(dt(c, d.axis, i).hi + 1, l, e) - l : n = e - l, {
    start: l,
    count: n
  };
}
var nZ = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (t, c, e) => {
    if (!e.enabled) {
      ya(t);
      return;
    }
    const l = t.width;
    t.data.datasets.forEach((n, d) => {
      const { _data: b, indexAxis: i } = n, a = t.getDatasetMeta(d), s = b || n.data;
      if (Re([
        i,
        t.options.indexAxis
      ]) === "y" || !a.controller.supportsDecimation)
        return;
      const o = t.scales[a.xAxisID];
      if (o.type !== "linear" && o.type !== "time" || t.options.parsing)
        return;
      let { start: u, count: X } = lZ(a, s);
      const x = e.threshold || 4 * l;
      if (X <= x) {
        Zu(n);
        return;
      }
      dc(b) && (n._data = s, delete n.data, Object.defineProperty(n, "data", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this._decimated;
        },
        set: function(r) {
          this._data = r;
        }
      }));
      let H;
      switch (e.algorithm) {
        case "lttb":
          H = tZ(s, u, X, l, e);
          break;
        case "min-max":
          H = eZ(s, u, X, l);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      n._decimated = H;
    });
  },
  destroy(t) {
    ya(t);
  }
};
function dZ(t, c, e) {
  const l = t.segments, n = t.points, d = c.points, b = [];
  for (const i of l) {
    let { start: a, end: s } = i;
    s = Wb(a, s, n);
    const o = Vd(e, n[a], n[s], i.loop);
    if (!c.segments) {
      b.push({
        source: i,
        target: o,
        start: n[a],
        end: n[s]
      });
      continue;
    }
    const u = cu(c, o);
    for (const X of u) {
      const x = Vd(e, d[X.start], d[X.end], X.loop), H = qo(i, n, x);
      for (const r of H)
        b.push({
          source: r,
          target: X,
          start: {
            [e]: Ia(o, x, "start", Math.max)
          },
          end: {
            [e]: Ia(o, x, "end", Math.min)
          }
        });
    }
  }
  return b;
}
function Vd(t, c, e, l) {
  if (l)
    return;
  let n = c[t], d = e[t];
  return t === "angle" && (n = Sc(n), d = Sc(d)), {
    property: t,
    start: n,
    end: d
  };
}
function bZ(t, c) {
  const { x: e = null, y: l = null } = t || {}, n = c.points, d = [];
  return c.segments.forEach(({ start: b, end: i }) => {
    i = Wb(b, i, n);
    const a = n[b], s = n[i];
    l !== null ? (d.push({
      x: a.x,
      y: l
    }), d.push({
      x: s.x,
      y: l
    })) : e !== null && (d.push({
      x: e,
      y: a.y
    }), d.push({
      x: e,
      y: s.y
    }));
  }), d;
}
function Wb(t, c, e) {
  for (; c > t; c--) {
    const l = e[c];
    if (!isNaN(l.x) && !isNaN(l.y))
      break;
  }
  return c;
}
function Ia(t, c, e, l) {
  return t && c ? l(t[e], c[e]) : t ? t[e] : c ? c[e] : 0;
}
function gu(t, c) {
  let e = [], l = !1;
  return Gc(t) ? (l = !0, e = t) : e = bZ(t, c), e.length ? new it({
    points: e,
    options: {
      tension: 0
    },
    _loop: l,
    _fullLoop: l
  }) : null;
}
function Fa(t) {
  return t && t.fill !== !1;
}
function iZ(t, c, e) {
  let n = t[c].fill;
  const d = [
    c
  ];
  let b;
  if (!e)
    return n;
  for (; n !== !1 && d.indexOf(n) === -1; ) {
    if (!Rc(n))
      return n;
    if (b = t[n], !b)
      return !1;
    if (b.visible)
      return n;
    d.push(n), n = b.fill;
  }
  return !1;
}
function aZ(t, c, e) {
  const l = XZ(t);
  if (bc(l))
    return isNaN(l.value) ? !1 : l;
  let n = parseFloat(l);
  return Rc(n) && Math.floor(n) === n ? sZ(l[0], c, n, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(l) >= 0 && l;
}
function sZ(t, c, e, l) {
  return (t === "-" || t === "+") && (e = c + e), e === c || e < 0 || e >= l ? !1 : e;
}
function oZ(t, c) {
  let e = null;
  return t === "start" ? e = c.bottom : t === "end" ? e = c.top : bc(t) ? e = c.getPixelForValue(t.value) : c.getBasePixel && (e = c.getBasePixel()), e;
}
function uZ(t, c, e) {
  let l;
  return t === "start" ? l = e : t === "end" ? l = c.options.reverse ? c.min : c.max : bc(t) ? l = t.value : l = c.getBaseValue(), l;
}
function XZ(t) {
  const c = t.options, e = c.fill;
  let l = _(e && e.target, e);
  return l === void 0 && (l = !!c.backgroundColor), l === !1 || l === null ? !1 : l === !0 ? "origin" : l;
}
function xZ(t) {
  const { scale: c, index: e, line: l } = t, n = [], d = l.segments, b = l.points, i = rZ(c, e);
  i.push(gu({
    x: null,
    y: c.bottom
  }, l));
  for (let a = 0; a < d.length; a++) {
    const s = d[a];
    for (let o = s.start; o <= s.end; o++)
      GZ(n, b[o], i);
  }
  return new it({
    points: n,
    options: {}
  });
}
function rZ(t, c) {
  const e = [], l = t.getMatchingVisibleMetas("line");
  for (let n = 0; n < l.length; n++) {
    const d = l[n];
    if (d.index === c)
      break;
    d.hidden || e.unshift(d.dataset);
  }
  return e;
}
function GZ(t, c, e) {
  const l = [];
  for (let n = 0; n < e.length; n++) {
    const d = e[n], { first: b, last: i, point: a } = HZ(d, c, "x");
    if (!(!a || b && i)) {
      if (b)
        l.unshift(a);
      else if (t.push(a), !i)
        break;
    }
  }
  t.push(...l);
}
function HZ(t, c, e) {
  const l = t.interpolate(c, e);
  if (!l)
    return {};
  const n = l[e], d = t.segments, b = t.points;
  let i = !1, a = !1;
  for (let s = 0; s < d.length; s++) {
    const o = d[s], u = b[o.start][e], X = b[o.end][e];
    if (nt(n, u, X)) {
      i = n === u, a = n === X;
      break;
    }
  }
  return {
    first: i,
    last: a,
    point: l
  };
}
class hu {
  constructor(c) {
    this.x = c.x, this.y = c.y, this.radius = c.radius;
  }
  pathSegment(c, e, l) {
    const { x: n, y: d, radius: b } = this;
    return e = e || {
      start: 0,
      end: xc
    }, c.arc(n, d, b, e.end, e.start, !0), !l.bounds;
  }
  interpolate(c) {
    const { x: e, y: l, radius: n } = this, d = c.angle;
    return {
      x: e + Math.cos(d) * n,
      y: l + Math.sin(d) * n,
      angle: d
    };
  }
}
function mZ(t) {
  const { chart: c, fill: e, line: l } = t;
  if (Rc(e))
    return RZ(c, e);
  if (e === "stack")
    return xZ(t);
  if (e === "shape")
    return !0;
  const n = ZZ(t);
  return n instanceof hu ? n : gu(n, l);
}
function RZ(t, c) {
  const e = t.getDatasetMeta(c);
  return e && t.isDatasetVisible(c) ? e.dataset : null;
}
function ZZ(t) {
  return (t.scale || {}).getPointPositionForValue ? hZ(t) : gZ(t);
}
function gZ(t) {
  const { scale: c = {}, fill: e } = t, l = oZ(e, c);
  if (Rc(l)) {
    const n = c.isHorizontal();
    return {
      x: n ? l : null,
      y: n ? null : l
    };
  }
  return null;
}
function hZ(t) {
  const { scale: c, fill: e } = t, l = c.options, n = c.getLabels().length, d = l.reverse ? c.max : c.min, b = uZ(e, c, d), i = [];
  if (l.grid.circular) {
    const a = c.getPointPositionForValue(0, d);
    return new hu({
      x: a.x,
      y: a.y,
      radius: c.getDistanceFromCenterForValue(b)
    });
  }
  for (let a = 0; a < n; ++a)
    i.push(c.getPointPositionForValue(a, b));
  return i;
}
function Dn(t, c, e) {
  const l = mZ(c), { chart: n, index: d, line: b, scale: i, axis: a } = c, s = b.options, o = s.fill, u = s.backgroundColor, { above: X = u, below: x = u } = o || {}, H = n.getDatasetMeta(d), r = tu(n, H);
  l && b.points.length && (dn(t, e), WZ(t, {
    line: b,
    target: l,
    above: X,
    below: x,
    area: e,
    scale: i,
    axis: a,
    clip: r
  }), bn(t));
}
function WZ(t, c) {
  const { line: e, target: l, above: n, below: d, area: b, scale: i, clip: a } = c, s = e._loop ? "angle" : c.axis;
  t.save(), s === "x" && d !== n && (Va(t, l, b.top), va(t, {
    line: e,
    target: l,
    color: n,
    scale: i,
    property: s,
    clip: a
  }), t.restore(), t.save(), Va(t, l, b.bottom)), va(t, {
    line: e,
    target: l,
    color: d,
    scale: i,
    property: s,
    clip: a
  }), t.restore();
}
function Va(t, c, e) {
  const { segments: l, points: n } = c;
  let d = !0, b = !1;
  t.beginPath();
  for (const i of l) {
    const { start: a, end: s } = i, o = n[a], u = n[Wb(a, s, n)];
    d ? (t.moveTo(o.x, o.y), d = !1) : (t.lineTo(o.x, e), t.lineTo(o.x, o.y)), b = !!c.pathSegment(t, i, {
      move: b
    }), b ? t.closePath() : t.lineTo(u.x, e);
  }
  t.lineTo(c.first().x, e), t.closePath(), t.clip();
}
function va(t, c) {
  const { line: e, target: l, property: n, color: d, scale: b, clip: i } = c, a = dZ(e, l, n);
  for (const { source: s, target: o, start: u, end: X } of a) {
    const { style: { backgroundColor: x = d } = {} } = s, H = l !== !0;
    t.save(), t.fillStyle = x, pZ(t, b, i, H && Vd(n, u, X)), t.beginPath();
    const r = !!e.pathSegment(t, s);
    let G;
    if (H) {
      r ? t.closePath() : Ba(t, l, X, n);
      const m = !!l.pathSegment(t, o, {
        move: r,
        reverse: !0
      });
      G = r && m, G || Ba(t, l, u, n);
    }
    t.closePath(), t.fill(G ? "evenodd" : "nonzero"), t.restore();
  }
}
function pZ(t, c, e, l) {
  const n = c.chart.chartArea, { property: d, start: b, end: i } = l || {};
  if (d === "x" || d === "y") {
    let a, s, o, u;
    d === "x" ? (a = b, s = n.top, o = i, u = n.bottom) : (a = n.left, s = b, o = n.right, u = i), t.beginPath(), e && (a = Math.max(a, e.left), o = Math.min(o, e.right), s = Math.max(s, e.top), u = Math.min(u, e.bottom)), t.rect(a, s, o - a, u - s), t.clip();
  }
}
function Ba(t, c, e, l) {
  const n = c.interpolate(e, l);
  n && t.lineTo(n.x, n.y);
}
var yZ = {
  id: "filler",
  afterDatasetsUpdate(t, c, e) {
    const l = (t.data.datasets || []).length, n = [];
    let d, b, i, a;
    for (b = 0; b < l; ++b)
      d = t.getDatasetMeta(b), i = d.dataset, a = null, i && i.options && i instanceof it && (a = {
        visible: t.isDatasetVisible(b),
        index: b,
        fill: aZ(i, b, l),
        chart: t,
        axis: d.controller.options.indexAxis,
        scale: d.vScale,
        line: i
      }), d.$filler = a, n.push(a);
    for (b = 0; b < l; ++b)
      a = n[b], !(!a || a.fill === !1) && (a.fill = iZ(n, b, e.propagate));
  },
  beforeDraw(t, c, e) {
    const l = e.drawTime === "beforeDraw", n = t.getSortedVisibleDatasetMetas(), d = t.chartArea;
    for (let b = n.length - 1; b >= 0; --b) {
      const i = n[b].$filler;
      i && (i.line.updateControlPoints(d, i.axis), l && i.fill && Dn(t.ctx, i, d));
    }
  },
  beforeDatasetsDraw(t, c, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const l = t.getSortedVisibleDatasetMetas();
    for (let n = l.length - 1; n >= 0; --n) {
      const d = l[n].$filler;
      Fa(d) && Dn(t.ctx, d, t.chartArea);
    }
  },
  beforeDatasetDraw(t, c, e) {
    const l = c.meta.$filler;
    !Fa(l) || e.drawTime !== "beforeDatasetDraw" || Dn(t.ctx, l, t.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const fa = (t, c) => {
  let { boxHeight: e = c, boxWidth: l = c } = t;
  return t.usePointStyle && (e = Math.min(e, c), l = t.pointStyleWidth || Math.min(l, c)), {
    boxWidth: l,
    boxHeight: e,
    itemHeight: Math.max(c, e)
  };
}, IZ = (t, c) => t !== null && c !== null && t.datasetIndex === c.datasetIndex && t.index === c.index;
class Ja extends Gt {
  constructor(c) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = c.chart, this.options = c.options, this.ctx = c.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(c, e, l) {
    this.maxWidth = c, this.maxHeight = e, this._margins = l, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const c = this.options.labels || {};
    let e = uc(c.generateLabels, [
      this.chart
    ], this) || [];
    c.filter && (e = e.filter((l) => c.filter(l, this.chart.data))), c.sort && (e = e.sort((l, n) => c.sort(l, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: c, ctx: e } = this;
    if (!c.display) {
      this.width = this.height = 0;
      return;
    }
    const l = c.labels, n = Wc(l.font), d = n.size, b = this._computeTitleHeight(), { boxWidth: i, itemHeight: a } = fa(l, d);
    let s, o;
    e.font = n.string, this.isHorizontal() ? (s = this.maxWidth, o = this._fitRows(b, d, i, a) + 10) : (o = this.maxHeight, s = this._fitCols(b, n, i, a) + 10), this.width = Math.min(s, c.maxWidth || this.maxWidth), this.height = Math.min(o, c.maxHeight || this.maxHeight);
  }
  _fitRows(c, e, l, n) {
    const { ctx: d, maxWidth: b, options: { labels: { padding: i } } } = this, a = this.legendHitBoxes = [], s = this.lineWidths = [
      0
    ], o = n + i;
    let u = c;
    d.textAlign = "left", d.textBaseline = "middle";
    let X = -1, x = -o;
    return this.legendItems.forEach((H, r) => {
      const G = l + e / 2 + d.measureText(H.text).width;
      (r === 0 || s[s.length - 1] + G + 2 * i > b) && (u += o, s[s.length - (r > 0 ? 0 : 1)] = 0, x += o, X++), a[r] = {
        left: 0,
        top: x,
        row: X,
        width: G,
        height: n
      }, s[s.length - 1] += G + i;
    }), u;
  }
  _fitCols(c, e, l, n) {
    const { ctx: d, maxHeight: b, options: { labels: { padding: i } } } = this, a = this.legendHitBoxes = [], s = this.columnSizes = [], o = b - c;
    let u = i, X = 0, x = 0, H = 0, r = 0;
    return this.legendItems.forEach((G, m) => {
      const { itemWidth: Z, itemHeight: h } = FZ(l, e, d, G, n);
      m > 0 && x + h + 2 * i > o && (u += X + i, s.push({
        width: X,
        height: x
      }), H += X + i, r++, X = x = 0), a[m] = {
        left: H,
        top: x,
        col: r,
        width: Z,
        height: h
      }, X = Math.max(X, Z), x += h + i;
    }), u += X, s.push({
      width: X,
      height: x
    }), u;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const c = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: l, labels: { padding: n }, rtl: d } } = this, b = qt(d, this.left, this.width);
    if (this.isHorizontal()) {
      let i = 0, a = Vc(l, this.left + n, this.right - this.lineWidths[i]);
      for (const s of e)
        i !== s.row && (i = s.row, a = Vc(l, this.left + n, this.right - this.lineWidths[i])), s.top += this.top + c + n, s.left = b.leftForLtr(b.x(a), s.width), a += s.width + n;
    } else {
      let i = 0, a = Vc(l, this.top + c + n, this.bottom - this.columnSizes[i].height);
      for (const s of e)
        s.col !== i && (i = s.col, a = Vc(l, this.top + c + n, this.bottom - this.columnSizes[i].height)), s.top = a, s.left += this.left + n, s.left = b.leftForLtr(b.x(s.left), s.width), a += s.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const c = this.ctx;
      dn(c, this), this._draw(), bn(c);
    }
  }
  _draw() {
    const { options: c, columnSizes: e, lineWidths: l, ctx: n } = this, { align: d, labels: b } = c, i = mc.color, a = qt(c.rtl, this.left, this.width), s = Wc(b.font), { padding: o } = b, u = s.size, X = u / 2;
    let x;
    this.drawTitle(), n.textAlign = a.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = s.string;
    const { boxWidth: H, boxHeight: r, itemHeight: G } = fa(b, u), m = function(W, p, y) {
      if (isNaN(H) || H <= 0 || isNaN(r) || r < 0)
        return;
      n.save();
      const V = _(y.lineWidth, 1);
      if (n.fillStyle = _(y.fillStyle, i), n.lineCap = _(y.lineCap, "butt"), n.lineDashOffset = _(y.lineDashOffset, 0), n.lineJoin = _(y.lineJoin, "miter"), n.lineWidth = V, n.strokeStyle = _(y.strokeStyle, i), n.setLineDash(_(y.lineDash, [])), b.usePointStyle) {
        const C = {
          radius: r * Math.SQRT2 / 2,
          pointStyle: y.pointStyle,
          rotation: y.rotation,
          borderWidth: V
        }, J = a.xPlus(W, H / 2), Y = p + X;
        Do(n, C, J, Y, b.pointStyleWidth && H);
      } else {
        const C = p + Math.max((u - r) / 2, 0), J = a.leftForLtr(W, H), Y = kt(y.borderRadius);
        n.beginPath(), Object.values(Y).some((K) => K !== 0) ? Ae(n, {
          x: J,
          y: C,
          w: H,
          h: r,
          radius: Y
        }) : n.rect(J, C, H, r), n.fill(), V !== 0 && n.stroke();
      }
      n.restore();
    }, Z = function(W, p, y) {
      Tt(n, y.text, W, p + G / 2, s, {
        strikethrough: y.hidden,
        textAlign: a.textAlign(y.textAlign)
      });
    }, h = this.isHorizontal(), g = this._computeTitleHeight();
    h ? x = {
      x: Vc(d, this.left + o, this.right - l[0]),
      y: this.top + o + g,
      line: 0
    } : x = {
      x: this.left + o,
      y: Vc(d, this.top + g + o, this.bottom - e[0].height),
      line: 0
    }, Ko(this.ctx, c.textDirection);
    const R = G + o;
    this.legendItems.forEach((W, p) => {
      n.strokeStyle = W.fontColor, n.fillStyle = W.fontColor;
      const y = n.measureText(W.text).width, V = a.textAlign(W.textAlign || (W.textAlign = b.textAlign)), C = H + X + y;
      let J = x.x, Y = x.y;
      a.setWidth(this.width), h ? p > 0 && J + C + o > this.right && (Y = x.y += R, x.line++, J = x.x = Vc(d, this.left + o, this.right - l[x.line])) : p > 0 && Y + R > this.bottom && (J = x.x = J + e[x.line].width + o, x.line++, Y = x.y = Vc(d, this.top + g + o, this.bottom - e[x.line].height));
      const K = a.x(J);
      if (m(K, Y, W), J = MH(V, J + H + X, h ? J + C : this.right, c.rtl), Z(a.x(J), Y, W), h)
        x.x += C + o;
      else if (typeof W.text != "string") {
        const $ = s.lineHeight;
        x.y += Wu(W, $) + o;
      } else
        x.y += R;
    }), _o(this.ctx, c.textDirection);
  }
  drawTitle() {
    const c = this.options, e = c.title, l = Wc(e.font), n = Jc(e.padding);
    if (!e.display)
      return;
    const d = qt(c.rtl, this.left, this.width), b = this.ctx, i = e.position, a = l.size / 2, s = n.top + a;
    let o, u = this.left, X = this.width;
    if (this.isHorizontal())
      X = Math.max(...this.lineWidths), o = this.top + s, u = Vc(c.align, u, this.right - X);
    else {
      const H = this.columnSizes.reduce((r, G) => Math.max(r, G.height), 0);
      o = s + Vc(c.align, this.top, this.bottom - H - c.labels.padding - this._computeTitleHeight());
    }
    const x = Vc(i, u, u + X);
    b.textAlign = d.textAlign(xb(i)), b.textBaseline = "middle", b.strokeStyle = e.color, b.fillStyle = e.color, b.font = l.string, Tt(b, e.text, x, o, l);
  }
  _computeTitleHeight() {
    const c = this.options.title, e = Wc(c.font), l = Jc(c.padding);
    return c.display ? e.lineHeight + l.height : 0;
  }
  _getLegendItemAt(c, e) {
    let l, n, d;
    if (nt(c, this.left, this.right) && nt(e, this.top, this.bottom)) {
      for (d = this.legendHitBoxes, l = 0; l < d.length; ++l)
        if (n = d[l], nt(c, n.left, n.left + n.width) && nt(e, n.top, n.top + n.height))
          return this.legendItems[l];
    }
    return null;
  }
  handleEvent(c) {
    const e = this.options;
    if (!BZ(c.type, e))
      return;
    const l = this._getLegendItemAt(c.x, c.y);
    if (c.type === "mousemove" || c.type === "mouseout") {
      const n = this._hoveredItem, d = IZ(n, l);
      n && !d && uc(e.onLeave, [
        c,
        n,
        this
      ], this), this._hoveredItem = l, l && !d && uc(e.onHover, [
        c,
        l,
        this
      ], this);
    } else l && uc(e.onClick, [
      c,
      l,
      this
    ], this);
  }
}
function FZ(t, c, e, l, n) {
  const d = VZ(l, t, c, e), b = vZ(n, l, c.lineHeight);
  return {
    itemWidth: d,
    itemHeight: b
  };
}
function VZ(t, c, e, l) {
  let n = t.text;
  return n && typeof n != "string" && (n = n.reduce((d, b) => d.length > b.length ? d : b)), c + e.size / 2 + l.measureText(n).width;
}
function vZ(t, c, e) {
  let l = t;
  return typeof c.text != "string" && (l = Wu(c, e)), l;
}
function Wu(t, c) {
  const e = t.text ? t.text.length : 0;
  return c * e;
}
function BZ(t, c) {
  return !!((t === "mousemove" || t === "mouseout") && (c.onHover || c.onLeave) || c.onClick && (t === "click" || t === "mouseup"));
}
var pu = {
  id: "legend",
  _element: Ja,
  start(t, c, e) {
    const l = t.legend = new Ja({
      ctx: t.ctx,
      options: e,
      chart: t
    });
    Bc.configure(t, l, e), Bc.addBox(t, l);
  },
  stop(t) {
    Bc.removeBox(t, t.legend), delete t.legend;
  },
  beforeUpdate(t, c, e) {
    const l = t.legend;
    Bc.configure(t, l, e), l.options = e;
  },
  afterUpdate(t) {
    const c = t.legend;
    c.buildLabels(), c.adjustHitBoxes();
  },
  afterEvent(t, c) {
    c.replay || t.legend.handleEvent(c.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(t, c, e) {
      const l = c.datasetIndex, n = e.chart;
      n.isDatasetVisible(l) ? (n.hide(l), c.hidden = !0) : (n.show(l), c.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (t) => t.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(t) {
        const c = t.data.datasets, { labels: { usePointStyle: e, pointStyle: l, textAlign: n, color: d, useBorderRadius: b, borderRadius: i } } = t.legend.options;
        return t._getSortedDatasetMetas().map((a) => {
          const s = a.controller.getStyle(e ? 0 : void 0), o = Jc(s.borderWidth);
          return {
            text: c[a.index].label,
            fillStyle: s.backgroundColor,
            fontColor: d,
            hidden: !a.visible,
            lineCap: s.borderCapStyle,
            lineDash: s.borderDash,
            lineDashOffset: s.borderDashOffset,
            lineJoin: s.borderJoinStyle,
            lineWidth: (o.width + o.height) / 4,
            strokeStyle: s.borderColor,
            pointStyle: l || s.pointStyle,
            rotation: s.rotation,
            textAlign: n || s.textAlign,
            borderRadius: b && (i || s.borderRadius),
            datasetIndex: a.index
          };
        }, this);
      }
    },
    title: {
      color: (t) => t.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (t) => !t.startsWith("on"),
    labels: {
      _scriptable: (t) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(t)
    }
  }
};
class pb extends Gt {
  constructor(c) {
    super(), this.chart = c.chart, this.options = c.options, this.ctx = c.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(c, e) {
    const l = this.options;
    if (this.left = 0, this.top = 0, !l.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = c, this.height = this.bottom = e;
    const n = Gc(l.text) ? l.text.length : 1;
    this._padding = Jc(l.padding);
    const d = n * Wc(l.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = d : this.width = d;
  }
  isHorizontal() {
    const c = this.options.position;
    return c === "top" || c === "bottom";
  }
  _drawArgs(c) {
    const { top: e, left: l, bottom: n, right: d, options: b } = this, i = b.align;
    let a = 0, s, o, u;
    return this.isHorizontal() ? (o = Vc(i, l, d), u = e + c, s = d - l) : (b.position === "left" ? (o = l + c, u = Vc(i, n, e), a = rc * -0.5) : (o = d - c, u = Vc(i, e, n), a = rc * 0.5), s = n - e), {
      titleX: o,
      titleY: u,
      maxWidth: s,
      rotation: a
    };
  }
  draw() {
    const c = this.ctx, e = this.options;
    if (!e.display)
      return;
    const l = Wc(e.font), d = l.lineHeight / 2 + this._padding.top, { titleX: b, titleY: i, maxWidth: a, rotation: s } = this._drawArgs(d);
    Tt(c, e.text, 0, 0, l, {
      color: e.color,
      maxWidth: a,
      rotation: s,
      textAlign: xb(e.align),
      textBaseline: "middle",
      translation: [
        b,
        i
      ]
    });
  }
}
function fZ(t, c) {
  const e = new pb({
    ctx: t.ctx,
    options: c,
    chart: t
  });
  Bc.configure(t, e, c), Bc.addBox(t, e), t.titleBlock = e;
}
var JZ = {
  id: "title",
  _element: pb,
  start(t, c, e) {
    fZ(t, e);
  },
  stop(t) {
    const c = t.titleBlock;
    Bc.removeBox(t, c), delete t.titleBlock;
  },
  beforeUpdate(t, c, e) {
    const l = t.titleBlock;
    Bc.configure(t, l, e), l.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const xl = /* @__PURE__ */ new WeakMap();
var YZ = {
  id: "subtitle",
  start(t, c, e) {
    const l = new pb({
      ctx: t.ctx,
      options: e,
      chart: t
    });
    Bc.configure(t, l, e), Bc.addBox(t, l), xl.set(t, l);
  },
  stop(t) {
    Bc.removeBox(t, xl.get(t)), xl.delete(t);
  },
  beforeUpdate(t, c, e) {
    const l = xl.get(t);
    Bc.configure(t, l, e), l.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "normal"
    },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const he = {
  average(t) {
    if (!t.length)
      return !1;
    let c, e, l = /* @__PURE__ */ new Set(), n = 0, d = 0;
    for (c = 0, e = t.length; c < e; ++c) {
      const i = t[c].element;
      if (i && i.hasValue()) {
        const a = i.tooltipPosition();
        l.add(a.x), n += a.y, ++d;
      }
    }
    return d === 0 || l.size === 0 ? !1 : {
      x: [
        ...l
      ].reduce((i, a) => i + a) / l.size,
      y: n / d
    };
  },
  nearest(t, c) {
    if (!t.length)
      return !1;
    let e = c.x, l = c.y, n = Number.POSITIVE_INFINITY, d, b, i;
    for (d = 0, b = t.length; d < b; ++d) {
      const a = t[d].element;
      if (a && a.hasValue()) {
        const s = a.getCenterPoint(), o = Zd(c, s);
        o < n && (n = o, i = a);
      }
    }
    if (i) {
      const a = i.tooltipPosition();
      e = a.x, l = a.y;
    }
    return {
      x: e,
      y: l
    };
  }
};
function Mc(t, c) {
  return c && (Gc(c) ? Array.prototype.push.apply(t, c) : t.push(c)), t;
}
function et(t) {
  return (typeof t == "string" || t instanceof String) && t.indexOf(`
`) > -1 ? t.split(`
`) : t;
}
function NZ(t, c) {
  const { element: e, datasetIndex: l, index: n } = c, d = t.getDatasetMeta(l).controller, { label: b, value: i } = d.getLabelAndValue(n);
  return {
    chart: t,
    label: b,
    parsed: d.getParsed(n),
    raw: t.data.datasets[l].data[n],
    formattedValue: i,
    dataset: d.getDataset(),
    dataIndex: n,
    datasetIndex: l,
    element: e
  };
}
function Ya(t, c) {
  const e = t.chart.ctx, { body: l, footer: n, title: d } = t, { boxWidth: b, boxHeight: i } = c, a = Wc(c.bodyFont), s = Wc(c.titleFont), o = Wc(c.footerFont), u = d.length, X = n.length, x = l.length, H = Jc(c.padding);
  let r = H.height, G = 0, m = l.reduce((g, R) => g + R.before.length + R.lines.length + R.after.length, 0);
  if (m += t.beforeBody.length + t.afterBody.length, u && (r += u * s.lineHeight + (u - 1) * c.titleSpacing + c.titleMarginBottom), m) {
    const g = c.displayColors ? Math.max(i, a.lineHeight) : a.lineHeight;
    r += x * g + (m - x) * a.lineHeight + (m - 1) * c.bodySpacing;
  }
  X && (r += c.footerMarginTop + X * o.lineHeight + (X - 1) * c.footerSpacing);
  let Z = 0;
  const h = function(g) {
    G = Math.max(G, e.measureText(g).width + Z);
  };
  return e.save(), e.font = s.string, oc(t.title, h), e.font = a.string, oc(t.beforeBody.concat(t.afterBody), h), Z = c.displayColors ? b + 2 + c.boxPadding : 0, oc(l, (g) => {
    oc(g.before, h), oc(g.lines, h), oc(g.after, h);
  }), Z = 0, e.font = o.string, oc(t.footer, h), e.restore(), G += H.width, {
    width: G,
    height: r
  };
}
function CZ(t, c) {
  const { y: e, height: l } = c;
  return e < l / 2 ? "top" : e > t.height - l / 2 ? "bottom" : "center";
}
function zZ(t, c, e, l) {
  const { x: n, width: d } = l, b = e.caretSize + e.caretPadding;
  if (t === "left" && n + d + b > c.width || t === "right" && n - d - b < 0)
    return !0;
}
function wZ(t, c, e, l) {
  const { x: n, width: d } = e, { width: b, chartArea: { left: i, right: a } } = t;
  let s = "center";
  return l === "center" ? s = n <= (i + a) / 2 ? "left" : "right" : n <= d / 2 ? s = "left" : n >= b - d / 2 && (s = "right"), zZ(s, t, c, e) && (s = "center"), s;
}
function Na(t, c, e) {
  const l = e.yAlign || c.yAlign || CZ(t, e);
  return {
    xAlign: e.xAlign || c.xAlign || wZ(t, c, e, l),
    yAlign: l
  };
}
function SZ(t, c) {
  let { x: e, width: l } = t;
  return c === "right" ? e -= l : c === "center" && (e -= l / 2), e;
}
function LZ(t, c, e) {
  let { y: l, height: n } = t;
  return c === "top" ? l += e : c === "bottom" ? l -= n + e : l -= n / 2, l;
}
function Ca(t, c, e, l) {
  const { caretSize: n, caretPadding: d, cornerRadius: b } = t, { xAlign: i, yAlign: a } = e, s = n + d, { topLeft: o, topRight: u, bottomLeft: X, bottomRight: x } = kt(b);
  let H = SZ(c, i);
  const r = LZ(c, a, s);
  return a === "center" ? i === "left" ? H += s : i === "right" && (H -= s) : i === "left" ? H -= Math.max(o, X) + n : i === "right" && (H += Math.max(u, x) + n), {
    x: yc(H, 0, l.width - c.width),
    y: yc(r, 0, l.height - c.height)
  };
}
function rl(t, c, e) {
  const l = Jc(e.padding);
  return c === "center" ? t.x + t.width / 2 : c === "right" ? t.x + t.width - l.right : t.x + l.left;
}
function za(t) {
  return Mc([], et(t));
}
function kZ(t, c, e) {
  return vt(t, {
    tooltip: c,
    tooltipItems: e,
    type: "tooltip"
  });
}
function wa(t, c) {
  const e = c && c.dataset && c.dataset.tooltip && c.dataset.tooltip.callbacks;
  return e ? t.override(e) : t;
}
const yu = {
  beforeTitle: ct,
  title(t) {
    if (t.length > 0) {
      const c = t[0], e = c.chart.data.labels, l = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return c.dataset.label || "";
      if (c.label)
        return c.label;
      if (l > 0 && c.dataIndex < l)
        return e[c.dataIndex];
    }
    return "";
  },
  afterTitle: ct,
  beforeBody: ct,
  beforeLabel: ct,
  label(t) {
    if (this && this.options && this.options.mode === "dataset")
      return t.label + ": " + t.formattedValue || t.formattedValue;
    let c = t.dataset.label || "";
    c && (c += ": ");
    const e = t.formattedValue;
    return dc(e) || (c += e), c;
  },
  labelColor(t) {
    const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(t) {
    const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: ct,
  afterBody: ct,
  beforeFooter: ct,
  footer: ct,
  afterFooter: ct
};
function Nc(t, c, e, l) {
  const n = t[c].call(e, l);
  return typeof n > "u" ? yu[c].call(e, l) : n;
}
class vd extends Gt {
  constructor(c) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = c.chart, this.options = c.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(c) {
    this.options = c, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const c = this._cachedAnimations;
    if (c)
      return c;
    const e = this.chart, l = this.options.setContext(this.getContext()), n = l.enabled && e.options.animation && l.animations, d = new eu(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(d)), d;
  }
  getContext() {
    return this.$context || (this.$context = kZ(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(c, e) {
    const { callbacks: l } = e, n = Nc(l, "beforeTitle", this, c), d = Nc(l, "title", this, c), b = Nc(l, "afterTitle", this, c);
    let i = [];
    return i = Mc(i, et(n)), i = Mc(i, et(d)), i = Mc(i, et(b)), i;
  }
  getBeforeBody(c, e) {
    return za(Nc(e.callbacks, "beforeBody", this, c));
  }
  getBody(c, e) {
    const { callbacks: l } = e, n = [];
    return oc(c, (d) => {
      const b = {
        before: [],
        lines: [],
        after: []
      }, i = wa(l, d);
      Mc(b.before, et(Nc(i, "beforeLabel", this, d))), Mc(b.lines, Nc(i, "label", this, d)), Mc(b.after, et(Nc(i, "afterLabel", this, d))), n.push(b);
    }), n;
  }
  getAfterBody(c, e) {
    return za(Nc(e.callbacks, "afterBody", this, c));
  }
  getFooter(c, e) {
    const { callbacks: l } = e, n = Nc(l, "beforeFooter", this, c), d = Nc(l, "footer", this, c), b = Nc(l, "afterFooter", this, c);
    let i = [];
    return i = Mc(i, et(n)), i = Mc(i, et(d)), i = Mc(i, et(b)), i;
  }
  _createItems(c) {
    const e = this._active, l = this.chart.data, n = [], d = [], b = [];
    let i = [], a, s;
    for (a = 0, s = e.length; a < s; ++a)
      i.push(NZ(this.chart, e[a]));
    return c.filter && (i = i.filter((o, u, X) => c.filter(o, u, X, l))), c.itemSort && (i = i.sort((o, u) => c.itemSort(o, u, l))), oc(i, (o) => {
      const u = wa(c.callbacks, o);
      n.push(Nc(u, "labelColor", this, o)), d.push(Nc(u, "labelPointStyle", this, o)), b.push(Nc(u, "labelTextColor", this, o));
    }), this.labelColors = n, this.labelPointStyles = d, this.labelTextColors = b, this.dataPoints = i, i;
  }
  update(c, e) {
    const l = this.options.setContext(this.getContext()), n = this._active;
    let d, b = [];
    if (!n.length)
      this.opacity !== 0 && (d = {
        opacity: 0
      });
    else {
      const i = he[l.position].call(this, n, this._eventPosition);
      b = this._createItems(l), this.title = this.getTitle(b, l), this.beforeBody = this.getBeforeBody(b, l), this.body = this.getBody(b, l), this.afterBody = this.getAfterBody(b, l), this.footer = this.getFooter(b, l);
      const a = this._size = Ya(this, l), s = Object.assign({}, i, a), o = Na(this.chart, l, s), u = Ca(l, s, o, this.chart);
      this.xAlign = o.xAlign, this.yAlign = o.yAlign, d = {
        opacity: 1,
        x: u.x,
        y: u.y,
        width: a.width,
        height: a.height,
        caretX: i.x,
        caretY: i.y
      };
    }
    this._tooltipItems = b, this.$context = void 0, d && this._resolveAnimations().update(this, d), c && l.external && l.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(c, e, l, n) {
    const d = this.getCaretPosition(c, l, n);
    e.lineTo(d.x1, d.y1), e.lineTo(d.x2, d.y2), e.lineTo(d.x3, d.y3);
  }
  getCaretPosition(c, e, l) {
    const { xAlign: n, yAlign: d } = this, { caretSize: b, cornerRadius: i } = l, { topLeft: a, topRight: s, bottomLeft: o, bottomRight: u } = kt(i), { x: X, y: x } = c, { width: H, height: r } = e;
    let G, m, Z, h, g, R;
    return d === "center" ? (g = x + r / 2, n === "left" ? (G = X, m = G - b, h = g + b, R = g - b) : (G = X + H, m = G + b, h = g - b, R = g + b), Z = G) : (n === "left" ? m = X + Math.max(a, o) + b : n === "right" ? m = X + H - Math.max(s, u) - b : m = this.caretX, d === "top" ? (h = x, g = h - b, G = m - b, Z = m + b) : (h = x + r, g = h + b, G = m + b, Z = m - b), R = h), {
      x1: G,
      x2: m,
      x3: Z,
      y1: h,
      y2: g,
      y3: R
    };
  }
  drawTitle(c, e, l) {
    const n = this.title, d = n.length;
    let b, i, a;
    if (d) {
      const s = qt(l.rtl, this.x, this.width);
      for (c.x = rl(this, l.titleAlign, l), e.textAlign = s.textAlign(l.titleAlign), e.textBaseline = "middle", b = Wc(l.titleFont), i = l.titleSpacing, e.fillStyle = l.titleColor, e.font = b.string, a = 0; a < d; ++a)
        e.fillText(n[a], s.x(c.x), c.y + b.lineHeight / 2), c.y += b.lineHeight + i, a + 1 === d && (c.y += l.titleMarginBottom - i);
    }
  }
  _drawColorBox(c, e, l, n, d) {
    const b = this.labelColors[l], i = this.labelPointStyles[l], { boxHeight: a, boxWidth: s } = d, o = Wc(d.bodyFont), u = rl(this, "left", d), X = n.x(u), x = a < o.lineHeight ? (o.lineHeight - a) / 2 : 0, H = e.y + x;
    if (d.usePointStyle) {
      const r = {
        radius: Math.min(s, a) / 2,
        pointStyle: i.pointStyle,
        rotation: i.rotation,
        borderWidth: 1
      }, G = n.leftForLtr(X, s) + s / 2, m = H + a / 2;
      c.strokeStyle = d.multiKeyBackground, c.fillStyle = d.multiKeyBackground, hd(c, r, G, m), c.strokeStyle = b.borderColor, c.fillStyle = b.backgroundColor, hd(c, r, G, m);
    } else {
      c.lineWidth = bc(b.borderWidth) ? Math.max(...Object.values(b.borderWidth)) : b.borderWidth || 1, c.strokeStyle = b.borderColor, c.setLineDash(b.borderDash || []), c.lineDashOffset = b.borderDashOffset || 0;
      const r = n.leftForLtr(X, s), G = n.leftForLtr(n.xPlus(X, 1), s - 2), m = kt(b.borderRadius);
      Object.values(m).some((Z) => Z !== 0) ? (c.beginPath(), c.fillStyle = d.multiKeyBackground, Ae(c, {
        x: r,
        y: H,
        w: s,
        h: a,
        radius: m
      }), c.fill(), c.stroke(), c.fillStyle = b.backgroundColor, c.beginPath(), Ae(c, {
        x: G,
        y: H + 1,
        w: s - 2,
        h: a - 2,
        radius: m
      }), c.fill()) : (c.fillStyle = d.multiKeyBackground, c.fillRect(r, H, s, a), c.strokeRect(r, H, s, a), c.fillStyle = b.backgroundColor, c.fillRect(G, H + 1, s - 2, a - 2));
    }
    c.fillStyle = this.labelTextColors[l];
  }
  drawBody(c, e, l) {
    const { body: n } = this, { bodySpacing: d, bodyAlign: b, displayColors: i, boxHeight: a, boxWidth: s, boxPadding: o } = l, u = Wc(l.bodyFont);
    let X = u.lineHeight, x = 0;
    const H = qt(l.rtl, this.x, this.width), r = function(y) {
      e.fillText(y, H.x(c.x + x), c.y + X / 2), c.y += X + d;
    }, G = H.textAlign(b);
    let m, Z, h, g, R, W, p;
    for (e.textAlign = b, e.textBaseline = "middle", e.font = u.string, c.x = rl(this, G, l), e.fillStyle = l.bodyColor, oc(this.beforeBody, r), x = i && G !== "right" ? b === "center" ? s / 2 + o : s + 2 + o : 0, g = 0, W = n.length; g < W; ++g) {
      for (m = n[g], Z = this.labelTextColors[g], e.fillStyle = Z, oc(m.before, r), h = m.lines, i && h.length && (this._drawColorBox(e, c, g, H, l), X = Math.max(u.lineHeight, a)), R = 0, p = h.length; R < p; ++R)
        r(h[R]), X = u.lineHeight;
      oc(m.after, r);
    }
    x = 0, X = u.lineHeight, oc(this.afterBody, r), c.y -= d;
  }
  drawFooter(c, e, l) {
    const n = this.footer, d = n.length;
    let b, i;
    if (d) {
      const a = qt(l.rtl, this.x, this.width);
      for (c.x = rl(this, l.footerAlign, l), c.y += l.footerMarginTop, e.textAlign = a.textAlign(l.footerAlign), e.textBaseline = "middle", b = Wc(l.footerFont), e.fillStyle = l.footerColor, e.font = b.string, i = 0; i < d; ++i)
        e.fillText(n[i], a.x(c.x), c.y + b.lineHeight / 2), c.y += b.lineHeight + l.footerSpacing;
    }
  }
  drawBackground(c, e, l, n) {
    const { xAlign: d, yAlign: b } = this, { x: i, y: a } = c, { width: s, height: o } = l, { topLeft: u, topRight: X, bottomLeft: x, bottomRight: H } = kt(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(i + u, a), b === "top" && this.drawCaret(c, e, l, n), e.lineTo(i + s - X, a), e.quadraticCurveTo(i + s, a, i + s, a + X), b === "center" && d === "right" && this.drawCaret(c, e, l, n), e.lineTo(i + s, a + o - H), e.quadraticCurveTo(i + s, a + o, i + s - H, a + o), b === "bottom" && this.drawCaret(c, e, l, n), e.lineTo(i + x, a + o), e.quadraticCurveTo(i, a + o, i, a + o - x), b === "center" && d === "left" && this.drawCaret(c, e, l, n), e.lineTo(i, a + u), e.quadraticCurveTo(i, a, i + u, a), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(c) {
    const e = this.chart, l = this.$animations, n = l && l.x, d = l && l.y;
    if (n || d) {
      const b = he[c.position].call(this, this._active, this._eventPosition);
      if (!b)
        return;
      const i = this._size = Ya(this, c), a = Object.assign({}, b, this._size), s = Na(e, c, a), o = Ca(c, a, s, e);
      (n._to !== o.x || d._to !== o.y) && (this.xAlign = s.xAlign, this.yAlign = s.yAlign, this.width = i.width, this.height = i.height, this.caretX = b.x, this.caretY = b.y, this._resolveAnimations().update(this, o));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(c) {
    const e = this.options.setContext(this.getContext());
    let l = this.opacity;
    if (!l)
      return;
    this._updateAnimationTarget(e);
    const n = {
      width: this.width,
      height: this.height
    }, d = {
      x: this.x,
      y: this.y
    };
    l = Math.abs(l) < 1e-3 ? 0 : l;
    const b = Jc(e.padding), i = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && i && (c.save(), c.globalAlpha = l, this.drawBackground(d, c, n, e), Ko(c, e.textDirection), d.y += b.top, this.drawTitle(d, c, e), this.drawBody(d, c, e), this.drawFooter(d, c, e), _o(c, e.textDirection), c.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(c, e) {
    const l = this._active, n = c.map(({ datasetIndex: i, index: a }) => {
      const s = this.chart.getDatasetMeta(i);
      if (!s)
        throw new Error("Cannot find a dataset at index " + i);
      return {
        datasetIndex: i,
        element: s.data[a],
        index: a
      };
    }), d = !Cl(l, n), b = this._positionChanged(n, e);
    (d || b) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(c, e, l = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, d = this._active || [], b = this._getActiveElements(c, d, e, l), i = this._positionChanged(b, c), a = e || !Cl(b, d) || i;
    return a && (this._active = b, (n.enabled || n.external) && (this._eventPosition = {
      x: c.x,
      y: c.y
    }, this.update(!0, e))), a;
  }
  _getActiveElements(c, e, l, n) {
    const d = this.options;
    if (c.type === "mouseout")
      return [];
    if (!n)
      return e.filter((i) => this.chart.data.datasets[i.datasetIndex] && this.chart.getDatasetMeta(i.datasetIndex).controller.getParsed(i.index) !== void 0);
    const b = this.chart.getElementsAtEventForMode(c, d.mode, d, l);
    return d.reverse && b.reverse(), b;
  }
  _positionChanged(c, e) {
    const { caretX: l, caretY: n, options: d } = this, b = he[d.position].call(this, c, e);
    return b !== !1 && (l !== b.x || n !== b.y);
  }
}
f(vd, "positioners", he);
var Iu = {
  id: "tooltip",
  _element: vd,
  positioners: he,
  afterInit(t, c, e) {
    e && (t.tooltip = new vd({
      chart: t,
      options: e
    }));
  },
  beforeUpdate(t, c, e) {
    t.tooltip && t.tooltip.initialize(e);
  },
  reset(t, c, e) {
    t.tooltip && t.tooltip.initialize(e);
  },
  afterDraw(t) {
    const c = t.tooltip;
    if (c && c._willRender()) {
      const e = {
        tooltip: c
      };
      if (t.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      c.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(t, c) {
    if (t.tooltip) {
      const e = c.replay;
      t.tooltip.handleEvent(c.event, e, c.inChartArea) && (c.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (t, c) => c.bodyFont.size,
    boxWidth: (t, c) => c.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: yu
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (t) => t !== "filter" && t !== "itemSort" && t !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
}, OZ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Colors: cZ,
  Decimation: nZ,
  Filler: yZ,
  Legend: pu,
  SubTitle: YZ,
  Title: JZ,
  Tooltip: Iu
});
const AZ = (t, c, e, l) => (typeof c == "string" ? (e = t.push(c) - 1, l.unshift({
  index: e,
  label: c
})) : isNaN(c) && (e = null), e);
function DZ(t, c, e, l) {
  const n = t.indexOf(c);
  if (n === -1)
    return AZ(t, c, e, l);
  const d = t.lastIndexOf(c);
  return n !== d ? e : n;
}
const QZ = (t, c) => t === null ? null : yc(Math.round(t), 0, c);
function Sa(t) {
  const c = this.getLabels();
  return t >= 0 && t < c.length ? c[t] : t;
}
class Bd extends Mt {
  constructor(c) {
    super(c), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(c) {
    const e = this._addedLabels;
    if (e.length) {
      const l = this.getLabels();
      for (const { index: n, label: d } of e)
        l[n] === d && l.splice(n, 1);
      this._addedLabels = [];
    }
    super.init(c);
  }
  parse(c, e) {
    if (dc(c))
      return null;
    const l = this.getLabels();
    return e = isFinite(e) && l[e] === c ? e : DZ(l, c, _(e, c), this._addedLabels), QZ(e, l.length - 1);
  }
  determineDataLimits() {
    const { minDefined: c, maxDefined: e } = this.getUserBounds();
    let { min: l, max: n } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (c || (l = 0), e || (n = this.getLabels().length - 1)), this.min = l, this.max = n;
  }
  buildTicks() {
    const c = this.min, e = this.max, l = this.options.offset, n = [];
    let d = this.getLabels();
    d = c === 0 && e === d.length - 1 ? d : d.slice(c, e + 1), this._valueRange = Math.max(d.length - (l ? 0 : 1), 1), this._startValue = this.min - (l ? 0.5 : 0);
    for (let b = c; b <= e; b++)
      n.push({
        value: b
      });
    return n;
  }
  getLabelForValue(c) {
    return Sa.call(this, c);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(c) {
    return typeof c != "number" && (c = this.parse(c)), c === null ? NaN : this.getPixelForDecimal((c - this._startValue) / this._valueRange);
  }
  getPixelForTick(c) {
    const e = this.ticks;
    return c < 0 || c > e.length - 1 ? null : this.getPixelForValue(e[c].value);
  }
  getValueForPixel(c) {
    return Math.round(this._startValue + this.getDecimalForPixel(c) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
f(Bd, "id", "category"), f(Bd, "defaults", {
  ticks: {
    callback: Sa
  }
});
function TZ(t, c) {
  const e = [], { bounds: n, step: d, min: b, max: i, precision: a, count: s, maxTicks: o, maxDigits: u, includeBounds: X } = t, x = d || 1, H = o - 1, { min: r, max: G } = c, m = !dc(b), Z = !dc(i), h = !dc(s), g = (G - r) / (u + 1);
  let R = Yi((G - r) / H / x) * x, W, p, y, V;
  if (R < 1e-14 && !m && !Z)
    return [
      {
        value: r
      },
      {
        value: G
      }
    ];
  V = Math.ceil(G / R) - Math.floor(r / R), V > H && (R = Yi(V * R / H / x) * x), dc(a) || (W = Math.pow(10, a), R = Math.ceil(R * W) / W), n === "ticks" ? (p = Math.floor(r / R) * R, y = Math.ceil(G / R) * R) : (p = r, y = G), m && Z && d && kH((i - b) / d, R / 1e3) ? (V = Math.round(Math.min((i - b) / R, o)), R = (i - b) / V, p = b, y = i) : h ? (p = m ? b : p, y = Z ? i : y, V = s - 1, R = (y - p) / V) : (V = (y - p) / R, ve(V, Math.round(V), R / 1e3) ? V = Math.round(V) : V = Math.ceil(V));
  const C = Math.max(Ni(R), Ni(p));
  W = Math.pow(10, dc(a) ? C : a), p = Math.round(p * W) / W, y = Math.round(y * W) / W;
  let J = 0;
  for (m && (X && p !== b ? (e.push({
    value: b
  }), p < b && J++, ve(Math.round((p + J * R) * W) / W, b, La(b, g, t)) && J++) : p < b && J++); J < V; ++J) {
    const Y = Math.round((p + J * R) * W) / W;
    if (Z && Y > i)
      break;
    e.push({
      value: Y
    });
  }
  return Z && X && y !== i ? e.length && ve(e[e.length - 1].value, i, La(i, g, t)) ? e[e.length - 1].value = i : e.push({
    value: i
  }) : (!Z || y === i) && e.push({
    value: y
  }), e;
}
function La(t, c, { horizontal: e, minRotation: l }) {
  const n = Qc(l), d = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, b = 0.75 * c * ("" + t).length;
  return Math.min(c / d, b);
}
class Al extends Mt {
  constructor(c) {
    super(c), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(c, e) {
    return dc(c) || (typeof c == "number" || c instanceof Number) && !isFinite(+c) ? null : +c;
  }
  handleTickRangeOptions() {
    const { beginAtZero: c } = this.options, { minDefined: e, maxDefined: l } = this.getUserBounds();
    let { min: n, max: d } = this;
    const b = (a) => n = e ? n : a, i = (a) => d = l ? d : a;
    if (c) {
      const a = $c(n), s = $c(d);
      a < 0 && s < 0 ? i(0) : a > 0 && s > 0 && b(0);
    }
    if (n === d) {
      let a = d === 0 ? 1 : Math.abs(d * 0.05);
      i(d + a), c || b(n - a);
    }
    this.min = n, this.max = d;
  }
  getTickLimit() {
    const c = this.options.ticks;
    let { maxTicksLimit: e, stepSize: l } = c, n;
    return l ? (n = Math.ceil(this.max / l) - Math.floor(this.min / l) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${l} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const c = this.options, e = c.ticks;
    let l = this.getTickLimit();
    l = Math.max(2, l);
    const n = {
      maxTicks: l,
      bounds: c.bounds,
      min: c.min,
      max: c.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, d = this._range || this, b = TZ(n, d);
    return c.bounds === "ticks" && No(b, this, "value"), c.reverse ? (b.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), b;
  }
  configure() {
    const c = this.ticks;
    let e = this.min, l = this.max;
    if (super.configure(), this.options.offset && c.length) {
      const n = (l - e) / Math.max(c.length - 1, 1) / 2;
      e -= n, l += n;
    }
    this._startValue = e, this._endValue = l, this._valueRange = l - e;
  }
  getLabelForValue(c) {
    return Pe(c, this.chart.options.locale, this.options.ticks.format);
  }
}
class Dl extends Al {
  determineDataLimits() {
    const { min: c, max: e } = this.getMinMax(!0);
    this.min = Rc(c) ? c : 0, this.max = Rc(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const c = this.isHorizontal(), e = c ? this.width : this.height, l = Qc(this.options.ticks.minRotation), n = (c ? Math.sin(l) : Math.cos(l)) || 1e-3, d = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, d.lineHeight / n));
  }
  getPixelForValue(c) {
    return c === null ? NaN : this.getPixelForDecimal((c - this._startValue) / this._valueRange);
  }
  getValueForPixel(c) {
    return this._startValue + this.getDecimalForPixel(c) * this._valueRange;
  }
}
f(Dl, "id", "linear"), f(Dl, "defaults", {
  ticks: {
    callback: nn.formatters.numeric
  }
});
const Qe = (t) => Math.floor(gt(t)), Ct = (t, c) => Math.pow(10, Qe(t) + c);
function ka(t) {
  return t / Math.pow(10, Qe(t)) === 1;
}
function Oa(t, c, e) {
  const l = Math.pow(10, e), n = Math.floor(t / l);
  return Math.ceil(c / l) - n;
}
function jZ(t, c) {
  const e = c - t;
  let l = Qe(e);
  for (; Oa(t, c, l) > 10; )
    l++;
  for (; Oa(t, c, l) < 10; )
    l--;
  return Math.min(l, Qe(t));
}
function MZ(t, { min: c, max: e }) {
  c = wc(t.min, c);
  const l = [], n = Qe(c);
  let d = jZ(c, e), b = d < 0 ? Math.pow(10, Math.abs(d)) : 1;
  const i = Math.pow(10, d), a = n > d ? Math.pow(10, n) : 0, s = Math.round((c - a) * b) / b, o = Math.floor((c - a) / i / 10) * i * 10;
  let u = Math.floor((s - o) / Math.pow(10, d)), X = wc(t.min, Math.round((a + o + u * Math.pow(10, d)) * b) / b);
  for (; X < e; )
    l.push({
      value: X,
      major: ka(X),
      significand: u
    }), u >= 10 ? u = u < 15 ? 15 : 20 : u++, u >= 20 && (d++, u = 2, b = d >= 0 ? 1 : b), X = Math.round((a + o + u * Math.pow(10, d)) * b) / b;
  const x = wc(t.max, X);
  return l.push({
    value: x,
    major: ka(x),
    significand: u
  }), l;
}
class fd extends Mt {
  constructor(c) {
    super(c), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(c, e) {
    const l = Al.prototype.parse.apply(this, [
      c,
      e
    ]);
    if (l === 0) {
      this._zero = !0;
      return;
    }
    return Rc(l) && l > 0 ? l : null;
  }
  determineDataLimits() {
    const { min: c, max: e } = this.getMinMax(!0);
    this.min = Rc(c) ? Math.max(0, c) : null, this.max = Rc(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !Rc(this._userMin) && (this.min = c === Ct(this.min, 0) ? Ct(this.min, -1) : Ct(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: c, maxDefined: e } = this.getUserBounds();
    let l = this.min, n = this.max;
    const d = (i) => l = c ? l : i, b = (i) => n = e ? n : i;
    l === n && (l <= 0 ? (d(1), b(10)) : (d(Ct(l, -1)), b(Ct(n, 1)))), l <= 0 && d(Ct(n, -1)), n <= 0 && b(Ct(l, 1)), this.min = l, this.max = n;
  }
  buildTicks() {
    const c = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, l = MZ(e, this);
    return c.bounds === "ticks" && No(l, this, "value"), c.reverse ? (l.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), l;
  }
  getLabelForValue(c) {
    return c === void 0 ? "0" : Pe(c, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const c = this.min;
    super.configure(), this._startValue = gt(c), this._valueRange = gt(this.max) - gt(c);
  }
  getPixelForValue(c) {
    return (c === void 0 || c === 0) && (c = this.min), c === null || isNaN(c) ? NaN : this.getPixelForDecimal(c === this.min ? 0 : (gt(c) - this._startValue) / this._valueRange);
  }
  getValueForPixel(c) {
    const e = this.getDecimalForPixel(c);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
f(fd, "id", "logarithmic"), f(fd, "defaults", {
  ticks: {
    callback: nn.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function Jd(t) {
  const c = t.ticks;
  if (c.display && t.display) {
    const e = Jc(c.backdropPadding);
    return _(c.font && c.font.size, mc.font.size) + e.height;
  }
  return 0;
}
function UZ(t, c, e) {
  return e = Gc(e) ? e : [
    e
  ], {
    w: em(t, c.string, e),
    h: e.length * c.lineHeight
  };
}
function Aa(t, c, e, l, n) {
  return t === l || t === n ? {
    start: c - e / 2,
    end: c + e / 2
  } : t < l || t > n ? {
    start: c - e,
    end: c
  } : {
    start: c,
    end: c + e
  };
}
function PZ(t) {
  const c = {
    l: t.left + t._padding.left,
    r: t.right - t._padding.right,
    t: t.top + t._padding.top,
    b: t.bottom - t._padding.bottom
  }, e = Object.assign({}, c), l = [], n = [], d = t._pointLabels.length, b = t.options.pointLabels, i = b.centerPointLabels ? rc / d : 0;
  for (let a = 0; a < d; a++) {
    const s = b.setContext(t.getPointLabelContext(a));
    n[a] = s.padding;
    const o = t.getPointPosition(a, t.drawingArea + n[a], i), u = Wc(s.font), X = UZ(t.ctx, u, t._pointLabels[a]);
    l[a] = X;
    const x = Sc(t.getIndexAngle(a) + i), H = Math.round(ub(x)), r = Aa(H, o.x, X.w, 0, 180), G = Aa(H, o.y, X.h, 90, 270);
    EZ(e, c, x, r, G);
  }
  t.setCenterPoint(c.l - e.l, e.r - c.r, c.t - e.t, e.b - c.b), t._pointLabelItems = $Z(t, l, n);
}
function EZ(t, c, e, l, n) {
  const d = Math.abs(Math.sin(e)), b = Math.abs(Math.cos(e));
  let i = 0, a = 0;
  l.start < c.l ? (i = (c.l - l.start) / d, t.l = Math.min(t.l, c.l - i)) : l.end > c.r && (i = (l.end - c.r) / d, t.r = Math.max(t.r, c.r + i)), n.start < c.t ? (a = (c.t - n.start) / b, t.t = Math.min(t.t, c.t - a)) : n.end > c.b && (a = (n.end - c.b) / b, t.b = Math.max(t.b, c.b + a));
}
function KZ(t, c, e) {
  const l = t.drawingArea, { extra: n, additionalAngle: d, padding: b, size: i } = e, a = t.getPointPosition(c, l + n + b, d), s = Math.round(ub(Sc(a.angle + gc))), o = tg(a.y, i.h, s), u = qZ(s), X = cg(a.x, i.w, u);
  return {
    visible: !0,
    x: a.x,
    y: o,
    textAlign: u,
    left: X,
    top: o,
    right: X + i.w,
    bottom: o + i.h
  };
}
function _Z(t, c) {
  if (!c)
    return !0;
  const { left: e, top: l, right: n, bottom: d } = t;
  return !(bt({
    x: e,
    y: l
  }, c) || bt({
    x: e,
    y: d
  }, c) || bt({
    x: n,
    y: l
  }, c) || bt({
    x: n,
    y: d
  }, c));
}
function $Z(t, c, e) {
  const l = [], n = t._pointLabels.length, d = t.options, { centerPointLabels: b, display: i } = d.pointLabels, a = {
    extra: Jd(d) / 2,
    additionalAngle: b ? rc / n : 0
  };
  let s;
  for (let o = 0; o < n; o++) {
    a.padding = e[o], a.size = c[o];
    const u = KZ(t, o, a);
    l.push(u), i === "auto" && (u.visible = _Z(u, s), u.visible && (s = u));
  }
  return l;
}
function qZ(t) {
  return t === 0 || t === 180 ? "center" : t < 180 ? "left" : "right";
}
function cg(t, c, e) {
  return e === "right" ? t -= c : e === "center" && (t -= c / 2), t;
}
function tg(t, c, e) {
  return e === 90 || e === 270 ? t -= c / 2 : (e > 270 || e < 90) && (t -= c), t;
}
function eg(t, c, e) {
  const { left: l, top: n, right: d, bottom: b } = e, { backdropColor: i } = c;
  if (!dc(i)) {
    const a = kt(c.borderRadius), s = Jc(c.backdropPadding);
    t.fillStyle = i;
    const o = l - s.left, u = n - s.top, X = d - l + s.width, x = b - n + s.height;
    Object.values(a).some((H) => H !== 0) ? (t.beginPath(), Ae(t, {
      x: o,
      y: u,
      w: X,
      h: x,
      radius: a
    }), t.fill()) : t.fillRect(o, u, X, x);
  }
}
function lg(t, c) {
  const { ctx: e, options: { pointLabels: l } } = t;
  for (let n = c - 1; n >= 0; n--) {
    const d = t._pointLabelItems[n];
    if (!d.visible)
      continue;
    const b = l.setContext(t.getPointLabelContext(n));
    eg(e, b, d);
    const i = Wc(b.font), { x: a, y: s, textAlign: o } = d;
    Tt(e, t._pointLabels[n], a, s + i.lineHeight / 2, i, {
      color: b.color,
      textAlign: o,
      textBaseline: "middle"
    });
  }
}
function Fu(t, c, e, l) {
  const { ctx: n } = t;
  if (e)
    n.arc(t.xCenter, t.yCenter, c, 0, xc);
  else {
    let d = t.getPointPosition(0, c);
    n.moveTo(d.x, d.y);
    for (let b = 1; b < l; b++)
      d = t.getPointPosition(b, c), n.lineTo(d.x, d.y);
  }
}
function ng(t, c, e, l, n) {
  const d = t.ctx, b = c.circular, { color: i, lineWidth: a } = c;
  !b && !l || !i || !a || e < 0 || (d.save(), d.strokeStyle = i, d.lineWidth = a, d.setLineDash(n.dash || []), d.lineDashOffset = n.dashOffset, d.beginPath(), Fu(t, e, b, l), d.closePath(), d.stroke(), d.restore());
}
function dg(t, c, e) {
  return vt(t, {
    label: e,
    index: c,
    type: "pointLabel"
  });
}
class We extends Al {
  constructor(c) {
    super(c), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const c = this._padding = Jc(Jd(this.options) / 2), e = this.width = this.maxWidth - c.width, l = this.height = this.maxHeight - c.height;
    this.xCenter = Math.floor(this.left + e / 2 + c.left), this.yCenter = Math.floor(this.top + l / 2 + c.top), this.drawingArea = Math.floor(Math.min(e, l) / 2);
  }
  determineDataLimits() {
    const { min: c, max: e } = this.getMinMax(!1);
    this.min = Rc(c) && !isNaN(c) ? c : 0, this.max = Rc(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Jd(this.options));
  }
  generateTickLabels(c) {
    Al.prototype.generateTickLabels.call(this, c), this._pointLabels = this.getLabels().map((e, l) => {
      const n = uc(this.options.pointLabels.callback, [
        e,
        l
      ], this);
      return n || n === 0 ? n : "";
    }).filter((e, l) => this.chart.getDataVisibility(l));
  }
  fit() {
    const c = this.options;
    c.display && c.pointLabels.display ? PZ(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(c, e, l, n) {
    this.xCenter += Math.floor((c - e) / 2), this.yCenter += Math.floor((l - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(c, e, l, n));
  }
  getIndexAngle(c) {
    const e = xc / (this._pointLabels.length || 1), l = this.options.startAngle || 0;
    return Sc(c * e + Qc(l));
  }
  getDistanceFromCenterForValue(c) {
    if (dc(c))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - c) * e : (c - this.min) * e;
  }
  getValueForDistanceFromCenter(c) {
    if (dc(c))
      return NaN;
    const e = c / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(c) {
    const e = this._pointLabels || [];
    if (c >= 0 && c < e.length) {
      const l = e[c];
      return dg(this.getContext(), c, l);
    }
  }
  getPointPosition(c, e, l = 0) {
    const n = this.getIndexAngle(c) - gc + l;
    return {
      x: Math.cos(n) * e + this.xCenter,
      y: Math.sin(n) * e + this.yCenter,
      angle: n
    };
  }
  getPointPositionForValue(c, e) {
    return this.getPointPosition(c, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(c) {
    return this.getPointPositionForValue(c || 0, this.getBaseValue());
  }
  getPointLabelPosition(c) {
    const { left: e, top: l, right: n, bottom: d } = this._pointLabelItems[c];
    return {
      left: e,
      top: l,
      right: n,
      bottom: d
    };
  }
  drawBackground() {
    const { backgroundColor: c, grid: { circular: e } } = this.options;
    if (c) {
      const l = this.ctx;
      l.save(), l.beginPath(), Fu(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), l.closePath(), l.fillStyle = c, l.fill(), l.restore();
    }
  }
  drawGrid() {
    const c = this.ctx, e = this.options, { angleLines: l, grid: n, border: d } = e, b = this._pointLabels.length;
    let i, a, s;
    if (e.pointLabels.display && lg(this, b), n.display && this.ticks.forEach((o, u) => {
      if (u !== 0 || u === 0 && this.min < 0) {
        a = this.getDistanceFromCenterForValue(o.value);
        const X = this.getContext(u), x = n.setContext(X), H = d.setContext(X);
        ng(this, x, a, b, H);
      }
    }), l.display) {
      for (c.save(), i = b - 1; i >= 0; i--) {
        const o = l.setContext(this.getPointLabelContext(i)), { color: u, lineWidth: X } = o;
        !X || !u || (c.lineWidth = X, c.strokeStyle = u, c.setLineDash(o.borderDash), c.lineDashOffset = o.borderDashOffset, a = this.getDistanceFromCenterForValue(e.reverse ? this.min : this.max), s = this.getPointPosition(i, a), c.beginPath(), c.moveTo(this.xCenter, this.yCenter), c.lineTo(s.x, s.y), c.stroke());
      }
      c.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const c = this.ctx, e = this.options, l = e.ticks;
    if (!l.display)
      return;
    const n = this.getIndexAngle(0);
    let d, b;
    c.save(), c.translate(this.xCenter, this.yCenter), c.rotate(n), c.textAlign = "center", c.textBaseline = "middle", this.ticks.forEach((i, a) => {
      if (a === 0 && this.min >= 0 && !e.reverse)
        return;
      const s = l.setContext(this.getContext(a)), o = Wc(s.font);
      if (d = this.getDistanceFromCenterForValue(this.ticks[a].value), s.showLabelBackdrop) {
        c.font = o.string, b = c.measureText(i.label).width, c.fillStyle = s.backdropColor;
        const u = Jc(s.backdropPadding);
        c.fillRect(-b / 2 - u.left, -d - o.size / 2 - u.top, b + u.width, o.size + u.height);
      }
      Tt(c, i.label, 0, -d, o, {
        color: s.color,
        strokeColor: s.textStrokeColor,
        strokeWidth: s.textStrokeWidth
      });
    }), c.restore();
  }
  drawTitle() {
  }
}
f(We, "id", "radialLinear"), f(We, "defaults", {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0
  },
  grid: {
    circular: !1
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: !0,
    callback: nn.formatters.numeric
  },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: {
      size: 10
    },
    callback(c) {
      return c;
    },
    padding: 5,
    centerPointLabels: !1
  }
}), f(We, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), f(We, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const on = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, zc = /* @__PURE__ */ Object.keys(on);
function Da(t, c) {
  return t - c;
}
function Qa(t, c) {
  if (dc(c))
    return null;
  const e = t._adapter, { parser: l, round: n, isoWeekday: d } = t._parseOpts;
  let b = c;
  return typeof l == "function" && (b = l(b)), Rc(b) || (b = typeof l == "string" ? e.parse(b, l) : e.parse(b)), b === null ? null : (n && (b = n === "week" && (le(d) || d === !0) ? e.startOf(b, "isoWeek", d) : e.startOf(b, n)), +b);
}
function Ta(t, c, e, l) {
  const n = zc.length;
  for (let d = zc.indexOf(t); d < n - 1; ++d) {
    const b = on[zc[d]], i = b.steps ? b.steps : Number.MAX_SAFE_INTEGER;
    if (b.common && Math.ceil((e - c) / (i * b.size)) <= l)
      return zc[d];
  }
  return zc[n - 1];
}
function bg(t, c, e, l, n) {
  for (let d = zc.length - 1; d >= zc.indexOf(e); d--) {
    const b = zc[d];
    if (on[b].common && t._adapter.diff(n, l, b) >= c - 1)
      return b;
  }
  return zc[e ? zc.indexOf(e) : 0];
}
function ig(t) {
  for (let c = zc.indexOf(t) + 1, e = zc.length; c < e; ++c)
    if (on[zc[c]].common)
      return zc[c];
}
function ja(t, c, e) {
  if (!e)
    t[c] = !0;
  else if (e.length) {
    const { lo: l, hi: n } = Xb(e, c), d = e[l] >= c ? e[l] : e[n];
    t[d] = !0;
  }
}
function ag(t, c, e, l) {
  const n = t._adapter, d = +n.startOf(c[0].value, l), b = c[c.length - 1].value;
  let i, a;
  for (i = d; i <= b; i = +n.add(i, 1, l))
    a = e[i], a >= 0 && (c[a].major = !0);
  return c;
}
function Ma(t, c, e) {
  const l = [], n = {}, d = c.length;
  let b, i;
  for (b = 0; b < d; ++b)
    i = c[b], n[i] = b, l.push({
      value: i,
      major: !1
    });
  return d === 0 || !e ? l : ag(t, l, n, e);
}
class Te extends Mt {
  constructor(c) {
    super(c), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(c, e = {}) {
    const l = c.time || (c.time = {}), n = this._adapter = new ZR._date(c.adapters.date);
    n.init(e), Ve(l.displayFormats, n.formats()), this._parseOpts = {
      parser: l.parser,
      round: l.round,
      isoWeekday: l.isoWeekday
    }, super.init(c), this._normalized = e.normalized;
  }
  parse(c, e) {
    return c === void 0 ? null : Qa(this, c);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const c = this.options, e = this._adapter, l = c.time.unit || "day";
    let { min: n, max: d, minDefined: b, maxDefined: i } = this.getUserBounds();
    function a(s) {
      !b && !isNaN(s.min) && (n = Math.min(n, s.min)), !i && !isNaN(s.max) && (d = Math.max(d, s.max));
    }
    (!b || !i) && (a(this._getLabelBounds()), (c.bounds !== "ticks" || c.ticks.source !== "labels") && a(this.getMinMax(!1))), n = Rc(n) && !isNaN(n) ? n : +e.startOf(Date.now(), l), d = Rc(d) && !isNaN(d) ? d : +e.endOf(Date.now(), l) + 1, this.min = Math.min(n, d - 1), this.max = Math.max(n + 1, d);
  }
  _getLabelBounds() {
    const c = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, l = Number.NEGATIVE_INFINITY;
    return c.length && (e = c[0], l = c[c.length - 1]), {
      min: e,
      max: l
    };
  }
  buildTicks() {
    const c = this.options, e = c.time, l = c.ticks, n = l.source === "labels" ? this.getLabelTimestamps() : this._generate();
    c.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
    const d = this.min, b = this.max, i = QH(n, d, b);
    return this._unit = e.unit || (l.autoSkip ? Ta(e.minUnit, this.min, this.max, this._getLabelCapacity(d)) : bg(this, i.length, e.minUnit, this.min, this.max)), this._majorUnit = !l.major.enabled || this._unit === "year" ? void 0 : ig(this._unit), this.initOffsets(n), c.reverse && i.reverse(), Ma(this, i, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((c) => +c.value));
  }
  initOffsets(c = []) {
    let e = 0, l = 0, n, d;
    this.options.offset && c.length && (n = this.getDecimalForValue(c[0]), c.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(c[1]) - n) / 2, d = this.getDecimalForValue(c[c.length - 1]), c.length === 1 ? l = d : l = (d - this.getDecimalForValue(c[c.length - 2])) / 2);
    const b = c.length < 3 ? 0.5 : 0.25;
    e = yc(e, 0, b), l = yc(l, 0, b), this._offsets = {
      start: e,
      end: l,
      factor: 1 / (e + 1 + l)
    };
  }
  _generate() {
    const c = this._adapter, e = this.min, l = this.max, n = this.options, d = n.time, b = d.unit || Ta(d.minUnit, e, l, this._getLabelCapacity(e)), i = _(n.ticks.stepSize, 1), a = b === "week" ? d.isoWeekday : !1, s = le(a) || a === !0, o = {};
    let u = e, X, x;
    if (s && (u = +c.startOf(u, "isoWeek", a)), u = +c.startOf(u, s ? "day" : b), c.diff(l, e, b) > 1e5 * i)
      throw new Error(e + " and " + l + " are too far apart with stepSize of " + i + " " + b);
    const H = n.ticks.source === "data" && this.getDataTimestamps();
    for (X = u, x = 0; X < l; X = +c.add(X, i, b), x++)
      ja(o, X, H);
    return (X === l || n.bounds === "ticks" || x === 1) && ja(o, X, H), Object.keys(o).sort(Da).map((r) => +r);
  }
  getLabelForValue(c) {
    const e = this._adapter, l = this.options.time;
    return l.tooltipFormat ? e.format(c, l.tooltipFormat) : e.format(c, l.displayFormats.datetime);
  }
  format(c, e) {
    const n = this.options.time.displayFormats, d = this._unit, b = e || n[d];
    return this._adapter.format(c, b);
  }
  _tickFormatFunction(c, e, l, n) {
    const d = this.options, b = d.ticks.callback;
    if (b)
      return uc(b, [
        c,
        e,
        l
      ], this);
    const i = d.time.displayFormats, a = this._unit, s = this._majorUnit, o = a && i[a], u = s && i[s], X = l[e], x = s && u && X && X.major;
    return this._adapter.format(c, n || (x ? u : o));
  }
  generateTickLabels(c) {
    let e, l, n;
    for (e = 0, l = c.length; e < l; ++e)
      n = c[e], n.label = this._tickFormatFunction(n.value, e, c);
  }
  getDecimalForValue(c) {
    return c === null ? NaN : (c - this.min) / (this.max - this.min);
  }
  getPixelForValue(c) {
    const e = this._offsets, l = this.getDecimalForValue(c);
    return this.getPixelForDecimal((e.start + l) * e.factor);
  }
  getValueForPixel(c) {
    const e = this._offsets, l = this.getDecimalForPixel(c) / e.factor - e.end;
    return this.min + l * (this.max - this.min);
  }
  _getLabelSize(c) {
    const e = this.options.ticks, l = this.ctx.measureText(c).width, n = Qc(this.isHorizontal() ? e.maxRotation : e.minRotation), d = Math.cos(n), b = Math.sin(n), i = this._resolveTickFontOptions(0).size;
    return {
      w: l * d + i * b,
      h: l * b + i * d
    };
  }
  _getLabelCapacity(c) {
    const e = this.options.time, l = e.displayFormats, n = l[e.unit] || l.millisecond, d = this._tickFormatFunction(c, 0, Ma(this, [
      c
    ], this._majorUnit), n), b = this._getLabelSize(d), i = Math.floor(this.isHorizontal() ? this.width / b.w : this.height / b.h) - 1;
    return i > 0 ? i : 1;
  }
  getDataTimestamps() {
    let c = this._cache.data || [], e, l;
    if (c.length)
      return c;
    const n = this.getMatchingVisibleMetas();
    if (this._normalized && n.length)
      return this._cache.data = n[0].controller.getAllParsedValues(this);
    for (e = 0, l = n.length; e < l; ++e)
      c = c.concat(n[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(c);
  }
  getLabelTimestamps() {
    const c = this._cache.labels || [];
    let e, l;
    if (c.length)
      return c;
    const n = this.getLabels();
    for (e = 0, l = n.length; e < l; ++e)
      c.push(Qa(this, n[e]));
    return this._cache.labels = this._normalized ? c : this.normalize(c);
  }
  normalize(c) {
    return wo(c.sort(Da));
  }
}
f(Te, "id", "time"), f(Te, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function Gl(t, c, e) {
  let l = 0, n = t.length - 1, d, b, i, a;
  e ? (c >= t[l].pos && c <= t[n].pos && ({ lo: l, hi: n } = dt(t, "pos", c)), { pos: d, time: i } = t[l], { pos: b, time: a } = t[n]) : (c >= t[l].time && c <= t[n].time && ({ lo: l, hi: n } = dt(t, "time", c)), { time: d, pos: i } = t[l], { time: b, pos: a } = t[n]);
  const s = b - d;
  return s ? i + (a - i) * (c - d) / s : i;
}
class Yd extends Te {
  constructor(c) {
    super(c), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const c = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(c);
    this._minPos = Gl(e, this.min), this._tableRange = Gl(e, this.max) - this._minPos, super.initOffsets(c);
  }
  buildLookupTable(c) {
    const { min: e, max: l } = this, n = [], d = [];
    let b, i, a, s, o;
    for (b = 0, i = c.length; b < i; ++b)
      s = c[b], s >= e && s <= l && n.push(s);
    if (n.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: l,
          pos: 1
        }
      ];
    for (b = 0, i = n.length; b < i; ++b)
      o = n[b + 1], a = n[b - 1], s = n[b], Math.round((o + a) / 2) !== s && d.push({
        time: s,
        pos: b / (i - 1)
      });
    return d;
  }
  _generate() {
    const c = this.min, e = this.max;
    let l = super.getDataTimestamps();
    return (!l.includes(c) || !l.length) && l.splice(0, 0, c), (!l.includes(e) || l.length === 1) && l.push(e), l.sort((n, d) => n - d);
  }
  _getTimestampsForTable() {
    let c = this._cache.all || [];
    if (c.length)
      return c;
    const e = this.getDataTimestamps(), l = this.getLabelTimestamps();
    return e.length && l.length ? c = this.normalize(e.concat(l)) : c = e.length ? e : l, c = this._cache.all = c, c;
  }
  getDecimalForValue(c) {
    return (Gl(this._table, c) - this._minPos) / this._tableRange;
  }
  getValueForPixel(c) {
    const e = this._offsets, l = this.getDecimalForPixel(c) / e.factor - e.end;
    return Gl(this._table, l * this._tableRange + this._minPos, !0);
  }
}
f(Yd, "id", "timeseries"), f(Yd, "defaults", Te.defaults);
var sg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CategoryScale: Bd,
  LinearScale: Dl,
  LogarithmicScale: fd,
  RadialLinearScale: We,
  TimeScale: Te,
  TimeSeriesScale: Yd
});
const og = [
  RR,
  U5,
  OZ,
  sg
];
Bt.register(...og);
const Vu = "label";
function Ua(t, c) {
  typeof t == "function" ? t(c) : t && (t.current = c);
}
function ug(t, c) {
  const e = t.options;
  e && c && Object.assign(e, c);
}
function vu(t, c) {
  t.labels = c;
}
function Bu(t, c) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Vu;
  const l = [];
  t.datasets = c.map((n) => {
    const d = t.datasets.find((b) => b[e] === n[e]);
    return !d || !n.data || l.includes(d) ? {
      ...n
    } : (l.push(d), Object.assign(d, n), d);
  });
}
function Xg(t) {
  let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vu;
  const e = {
    labels: [],
    datasets: []
  };
  return vu(e, t.labels), Bu(e, t.datasets, c), e;
}
function xg(t, c) {
  const { height: e = 150, width: l = 300, redraw: n = !1, datasetIdKey: d, type: b, data: i, options: a, plugins: s = [], fallbackContent: o, updateMode: u, ...X } = t, x = pc(null), H = pc(null), r = () => {
    x.current && (H.current = new Bt(x.current, {
      type: b,
      data: Xg(i, d),
      options: a && {
        ...a
      },
      plugins: s
    }), Ua(c, H.current));
  }, G = () => {
    Ua(c, null), H.current && (H.current.destroy(), H.current = null);
  };
  return Yc(() => {
    !n && H.current && a && ug(H.current, a);
  }, [
    n,
    a
  ]), Yc(() => {
    !n && H.current && vu(H.current.config.data, i.labels);
  }, [
    n,
    i.labels
  ]), Yc(() => {
    !n && H.current && i.datasets && Bu(H.current.config.data, i.datasets, d);
  }, [
    n,
    i.datasets
  ]), Yc(() => {
    H.current && (n ? (G(), setTimeout(r)) : H.current.update(u));
  }, [
    n,
    a,
    i.labels,
    i.datasets,
    u
  ]), Yc(() => {
    H.current && (G(), setTimeout(r));
  }, [
    b
  ]), Yc(() => (r(), () => G()), []), /* @__PURE__ */ vc.createElement("canvas", {
    ref: x,
    role: "img",
    height: e,
    width: l,
    ...X
  }, o);
}
const rg = /* @__PURE__ */ $l(xg);
function Gg(t, c) {
  return Bt.register(c), /* @__PURE__ */ $l((e, l) => /* @__PURE__ */ vc.createElement(rg, {
    ...e,
    ref: l,
    type: t
  }));
}
const Hg = /* @__PURE__ */ Gg("line", Je);
Bt.register(Dl, Ne, it, pu, Iu);
Bt.defaults.font.family = "-apple-system, BlinkMacSystemFont, 'one sec Inter', sans-serif";
Bt.defaults.font.size = 12;
Bt.defaults.animation = {
  duration: 400,
  easing: "easeOutQuad"
};
const mg = (t) => ({
  grid: {
    display: !1
  },
  border: {
    color: t.colors.hairline
  },
  offset: !0
});
function O1(t) {
  const c = kc(), e = mg(c);
  return /* @__PURE__ */ I(Hg, { options: {
    responsive: !0,
    plugins: {
      legend: {
        display: !1
      },
      tooltip: {
        enabled: !1
      }
    },
    maintainAspectRatio: !1,
    scales: {
      y: {
        position: "right",
        ...e,
        ticks: {
          callback: t.formatY,
          count: 3,
          padding: 0,
          precision: 0
        }
      },
      x: {
        ...e,
        ticks: {
          autoSkip: !1,
          maxRotation: 0,
          minRotation: 0,
          align: "inner",
          padding: 0
        }
      }
    },
    layout: {
      padding: 8
    },
    color: c.colors.text.tertiary,
    elements: {
      point: {
        radius: 0,
        hoverRadius: 0
      },
      line: {
        borderJoinStyle: "round"
      }
    }
  }, data: {
    labels: t.data.map((l, n) => n === 0 || n === t.data.length - 1 ? l.label : ""),
    datasets: [{
      data: t.data.map((l) => l.value),
      borderColor: c.colors.tint.purple
    }]
  } });
}
function fu() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const Rg = /* @__PURE__ */ B("img", process.env.NODE_ENV === "production" ? {
  target: "e1u2rk8p2"
} : {
  target: "e1u2rk8p2",
  label: "RawLogo"
})(process.env.NODE_ENV === "production" ? {
  name: "1614b40",
  styles: "content:url('/images/logo.png');width:30px;height:30px"
} : {
  name: "1614b40",
  styles: "content:url('/images/logo.png');width:30px;height:30px",
  toString: fu
}), Zg = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1u2rk8p1"
} : {
  target: "e1u2rk8p1",
  label: "LogoContainer"
})("display:flex;flex-direction:row;align-items:center;gap:", (t) => t.theme.spaces.minimal, ";margin:", (t) => t.theme.spaces.standard, ";user-select:none;" + (process.env.NODE_ENV === "production" ? "" : "")), gg = /* @__PURE__ */ B(lb.Huge, process.env.NODE_ENV === "production" ? {
  target: "e1u2rk8p0"
} : {
  target: "e1u2rk8p0",
  label: "LogoHeading"
})(process.env.NODE_ENV === "production" ? {
  name: "eaddg2",
  styles: "padding-bottom:6px"
} : {
  name: "eaddg2",
  styles: "padding-bottom:6px",
  toString: fu
}).withComponent("span", process.env.NODE_ENV === "production" ? {
  target: "e1u2rk8p3"
} : {
  target: "e1u2rk8p3",
  label: "LogoHeading"
}), hg = () => /* @__PURE__ */ Hc(Zg, { children: [
  /* @__PURE__ */ I(Rg, {}),
  /* @__PURE__ */ I(gg, { children: "one sec" })
] });
function Wg() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const un = 0.1, pg = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1vepr8p4"
} : {
  target: "e1vepr8p4",
  label: "ButtonContainer"
})("transition:border-color ", un, "s;padding:", (t) => t.theme.spaces.minimal, ";margin-inline:-", (t) => t.theme.spaces.minimal, ";border-radius:99px;border:1px solid ", (t) => t.isOpen ? t.theme.colors.hairline : "transparent", ";box-sizing:content-box;*{user-select:none;}" + (process.env.NODE_ENV === "production" ? "" : "")), yg = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1vepr8p3"
} : {
  target: "e1vepr8p3",
  label: "MenuOverlay"
})("position:fixed;top:80.5px;left:0;right:0;background-color:", (t) => t.theme.colors.background.main, ";z-index:100;flex-direction:column;border:", (t) => t.theme.transparentHairlineBorder, ";border-left:none;border-right:none;transition:max-height ", un, "s ease-out;max-height:0;overflow:hidden;" + (process.env.NODE_ENV === "production" ? "" : "")), Ig = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1vepr8p2"
} : {
  target: "e1vepr8p2",
  label: "Scrim"
})("position:fixed;z-index:9;top:81px;left:0;right:0;bottom:0;background-color:", (t) => t.theme.modalBackdrop, ";transition:opacity ", un, "s;" + (process.env.NODE_ENV === "production" ? "" : "")), Fg = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1vepr8p1"
} : {
  target: "e1vepr8p1",
  label: "MenuLinks"
})("display:flex;flex-direction:column;align-items:flex-start;gap:15px;padding:", (t) => t.theme.spaces.double, ";padding-top:30px;" + (process.env.NODE_ENV === "production" ? "" : "")), Vg = /* @__PURE__ */ B(ee.Secondary, process.env.NODE_ENV === "production" ? {
  target: "e1vepr8p0"
} : {
  target: "e1vepr8p0",
  label: "HamburgerButton"
})(process.env.NODE_ENV === "production" ? {
  name: "ef6p0o",
  styles: "outline:none!important"
} : {
  name: "ef6p0o",
  styles: "outline:none!important",
  toString: Wg
});
function vg(t) {
  const [c, e] = Ic(!1), [l, n] = Ic(!0), d = pc(null), b = () => {
    e(!c);
  };
  Yc(() => {
    d.current && clearTimeout(d.current), d.current = setTimeout(() => {
      n(!c);
    }, c ? 0 : un * 1e3);
  }, [c]);
  const i = p0(), a = pc(i.pathname);
  return Yc(() => {
    a.current !== i.pathname && (e(!1), a.current = i.pathname);
  }, [i.pathname]), /* @__PURE__ */ Hc(Ad, { children: [
    /* @__PURE__ */ I(pg, { isOpen: c, children: /* @__PURE__ */ I(Vg, { onClick: b, children: /* @__PURE__ */ I(rt, { name: "Bars", size: 24 }) }) }),
    /* @__PURE__ */ I(Ig, { style: {
      opacity: c ? 1 : 0,
      pointerEvents: l ? "none" : "auto"
    }, onClick: () => e(!1) }),
    /* @__PURE__ */ I(yg, { style: {
      maxHeight: c ? `${t.menuHeight}px` : 0,
      opacity: l ? 0 : 1
    }, children: /* @__PURE__ */ I(Fg, { children: t.children }) })
  ] });
}
const Bg = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "elzcfbb0"
} : {
  target: "elzcfbb0",
  label: "Separator"
})("border-bottom:", (t) => t.transparent ? t.theme.transparentHairlineBorder : t.theme.hairlineBorder, ";" + (process.env.NODE_ENV === "production" ? "" : ""));
function fg() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const Jg = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1kzk8ru0"
} : {
  target: "e1kzk8ru0",
  label: "Spacer"
})(process.env.NODE_ENV === "production" ? {
  name: "1ff36h2",
  styles: "flex-grow:1"
} : {
  name: "1ff36h2",
  styles: "flex-grow:1",
  toString: fg
});
function yb() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const Nd = 0.2, Yg = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e83wwyd9"
} : {
  target: "e83wwyd9",
  label: "Wrapper"
})(process.env.NODE_ENV === "production" ? {
  name: "1wfeuyx",
  styles: "position:sticky;top:0;width:100%;z-index:99;display:flex;flex-direction:column"
} : {
  name: "1wfeuyx",
  styles: "position:sticky;top:0;width:100%;z-index:99;display:flex;flex-direction:column",
  toString: yb
});
var Ng = process.env.NODE_ENV === "production" ? {
  name: "1peqg37",
  styles: "background-color:transparent"
} : {
  name: "echb1l-Container",
  styles: "background-color:transparent;label:Container;",
  toString: yb
};
const Ju = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e83wwyd8"
} : {
  target: "e83wwyd8",
  label: "Container"
})("border-bottom:", (t) => t.theme.transparentHairlineBorder, ";padding:0 ", (t) => t.theme.spaces.double, ";width:100%;box-sizing:border-box;background-color:", (t) => t.theme.colors.background.main, ";transition:background-color 0.1s linear;", (t) => t.transparent && Ng, " ", (t) => t.theme.breakpoints.compact.whenActive(/* @__PURE__ */ Lc("padding:0 ", t.theme.spaces.standard, ";" + (process.env.NODE_ENV === "production" ? "" : ";label:Container;"), process.env.NODE_ENV === "production" ? "" : "")), ";" + (process.env.NODE_ENV === "production" ? "" : "")), Yu = /* @__PURE__ */ B("nav", process.env.NODE_ENV === "production" ? {
  target: "e83wwyd7"
} : {
  target: "e83wwyd7",
  label: "Content"
})("max-width:", (t) => t.theme.sizes.pageWidth, ";margin:0 auto;display:flex;align-items:center;>*{flex-shrink:0;}" + (process.env.NODE_ENV === "production" ? "" : "")), Cg = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e83wwyd6"
} : {
  target: "e83wwyd6",
  label: "SecondaryWrapper"
})(process.env.NODE_ENV === "production" ? {
  name: "d3v9zr",
  styles: "overflow:hidden"
} : {
  name: "d3v9zr",
  styles: "overflow:hidden",
  toString: yb
}), zg = /* @__PURE__ */ B(Ju, process.env.NODE_ENV === "production" ? {
  target: "e83wwyd5"
} : {
  target: "e83wwyd5",
  label: "SecondaryContainer"
})("background-color:", (t) => t.theme.colors.background.overlay, ";border-bottom:", (t) => t.theme.hairlineBorder, ";transition:transform ", Nd, "s ease-out;@starting-style{transform:translateY(calc(-100% - 15px));}" + (process.env.NODE_ENV === "production" ? "" : "")), wg = /* @__PURE__ */ B(Yu, process.env.NODE_ENV === "production" ? {
  target: "e83wwyd4"
} : {
  target: "e83wwyd4",
  label: "SecondaryContent"
})("justify-content:center;padding-block:", (t) => t.theme.spaces.minimal, ";transition:opacity ", Nd, "s;transition-delay:", Nd / 2, "s;@starting-style{opacity:0;}" + (process.env.NODE_ENV === "production" ? "" : "")), Sg = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e83wwyd3"
} : {
  target: "e83wwyd3",
  label: "LogoWrapper"
})("transform:scale(0.75) translateX(-", (t) => t.theme.spaces.standard, ");transform-origin:center left;margin-right:-30px;" + (process.env.NODE_ENV === "production" ? "" : "")), Cd = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e83wwyd2"
} : {
  target: "e83wwyd2",
  label: "LinkWrapper"
})("display:flex;align-items:center;gap:", (t) => t.theme.spaces.standard, ";" + (process.env.NODE_ENV === "production" ? "" : "")), Lg = /* @__PURE__ */ B(Cd, process.env.NODE_ENV === "production" ? {
  target: "e83wwyd1"
} : {
  target: "e83wwyd1",
  label: "SecondaryLinkWrapper"
})("gap:", (t) => t.theme.spaces.minimal, ";isolation:isolate;" + (process.env.NODE_ENV === "production" ? "" : ""));
function Pa(t) {
  const {
    type: c,
    label: e
  } = t.item;
  switch (c) {
    case "link":
      return /* @__PURE__ */ I(ee.Secondary, { asComponent: "link", to: t.item.to, children: e });
    case "button":
      return /* @__PURE__ */ I(ee.Secondary, { asComponent: "button", onClick: t.item.onClick, children: e });
  }
}
const Ea = /* @__PURE__ */ B(ee.Secondary, process.env.NODE_ENV === "production" ? {
  target: "e83wwyd0"
} : {
  target: "e83wwyd0",
  label: "SecondaryNavigationButton"
})("display:flex;align-items:center;gap:", (t) => t.theme.spaces.minimal, ";padding:10px 15px;border-radius:99px;background-color:", (t) => t.theme.colors.background.overlay, ";transition-property:background-color,opacity;position:relative;&:focus-visible{outline-offset:0px;}&:before{content:'';position:absolute;transition:0.1s linear opacity;opacity:0;}", (t) => t.active && /* @__PURE__ */ Lc("opacity:1!important;transition-property:background-color;background-color:", t.theme.colors.background.card, ";color:", t.theme.colors.text.highlight, ";margin:-1px;", t.theme.mixins.glossBorder, " &:before{opacity:1;}" + (process.env.NODE_ENV === "production" ? "" : ";label:SecondaryNavigationButton;"), process.env.NODE_ENV === "production" ? "" : ""), ";" + (process.env.NODE_ENV === "production" ? "" : ""));
function kg(t) {
  const c = kc(), {
    type: e,
    label: l,
    active: n
  } = t.item, d = t.item.icon && /* @__PURE__ */ I(rt, { name: t.item.icon, size: 16, color: n ? c.colors.text.highlight : c.colors.text.primary });
  switch (e) {
    case "link":
      return /* @__PURE__ */ Hc(Ea, { asComponent: "link", to: t.item.to, active: n, children: [
        d,
        l
      ] });
    case "button":
      return /* @__PURE__ */ Hc(Ea, { asComponent: "button", onClick: t.item.onClick, active: n, children: [
        d,
        l
      ] });
  }
}
function A1(t) {
  var s;
  const [c, e] = Ic(!0), l = hc(() => {
    e(window.scrollY <= 0);
  }, [e]);
  Yc(() => (l(), window.addEventListener("scroll", l, {
    passive: !0
  }), () => {
    window.removeEventListener("scroll", l);
  }), [l]);
  const n = OG("compact"), d = Cc(() => {
    if (Array.isArray(t.leftItems))
      return t.leftItems;
    const {
      blogPath: o,
      researchPath: u,
      aboutPath: X,
      contactPath: x,
      onContactModal: H,
      t: r
    } = t.leftItems, G = n ? {
      type: "link",
      id: "support",
      to: x,
      label: r("contactUs")
    } : {
      type: "button",
      id: "support",
      onClick: H,
      label: r("contactUs")
    };
    return [{
      type: "link",
      id: "blog",
      to: o,
      label: r("blog")
    }, {
      type: "link",
      id: "research",
      to: u,
      label: r("research")
    }, G, {
      type: "link",
      id: "about",
      to: X,
      label: r("about")
    }];
  }, [t.leftItems, n]), b = Cc(() => Array.isArray(t.leftItems) ? t.hamburgerMenuHeight : 280, [t.hamburgerMenuHeight, t.leftItems]), i = d.map((o) => /* @__PURE__ */ I(Pa, { item: o }, o.id)), a = t.rightItems.map((o) => /* @__PURE__ */ I(Pa, { item: o }, o.id));
  return /* @__PURE__ */ Hc(Yg, { children: [
    /* @__PURE__ */ I(Ju, { transparent: c, children: /* @__PURE__ */ Hc(Yu, { children: [
      /* @__PURE__ */ I(Wo, { to: t.logoLinkTo ?? "/", children: /* @__PURE__ */ I(Sg, { children: /* @__PURE__ */ I(hg, {}) }) }),
      /* @__PURE__ */ I(pi, { breakpoint: "compact", children: /* @__PURE__ */ I(Cd, { children: i }) }),
      /* @__PURE__ */ I(Jg, {}),
      /* @__PURE__ */ Hc(Cd, { children: [
        /* @__PURE__ */ I(pi, { breakpoint: "compact", children: a }),
        t.append,
        /* @__PURE__ */ I(kG, { breakpoint: "compact", children: /* @__PURE__ */ Hc(vg, { menuHeight: b, children: [
          i,
          /* @__PURE__ */ I(Bg, {}),
          a
        ] }) })
      ] })
    ] }) }),
    t.secondaryItems && /* @__PURE__ */ I(Cg, { children: /* @__PURE__ */ I(zg, { children: /* @__PURE__ */ I(wg, { children: /* @__PURE__ */ I(Lg, { children: (s = t.secondaryItems) == null ? void 0 : s.map((o) => /* @__PURE__ */ I(kg, { item: o }, o.id)) }) }) }) })
  ] });
}
const Og = Xt`
	0% {
		opacity: 0;
		transform: translateY(10px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`, D1 = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1bv7hf40"
} : {
  target: "e1bv7hf40",
  label: "PageContainer"
})("display:flex;flex-direction:column;max-width:", (t) => t.theme.sizes.pageWidth, ";gap:", (t) => t.theme.spaces.standard, ";padding-bottom:", (t) => t.theme.spaces.double, ";margin:0 auto;animation:", Og, " 0.4s ease-out;" + (process.env.NODE_ENV === "production" ? "" : "")), Ag = /* @__PURE__ */ B(jc.Small, process.env.NODE_ENV === "production" ? {
  target: "e3ewnjb0"
} : {
  target: "e3ewnjb0",
  label: "SectionFooter"
})("color:", (t) => t.theme.colors.text.tertiary, ";padding:0px ", (t) => t.theme.spaces.standard, ";" + (process.env.NODE_ENV === "production" ? "" : ""));
function Q1(t) {
  return /* @__PURE__ */ Hc(Ad, { children: [
    t.label && /* @__PURE__ */ I(mo.Regular, { inset: !0, style: {
      paddingTop: `${t.paddingTop}px`
    }, children: t.label }),
    t.children,
    t.footer && /* @__PURE__ */ I(Ag, { children: t.footer })
  ] });
}
var Qn, Ka;
function Dg() {
  if (Ka) return Qn;
  Ka = 1;
  var t = "Expected a function", c = NaN, e = "[object Symbol]", l = /^\s+|\s+$/g, n = /^[-+]0x[0-9a-f]+$/i, d = /^0b[01]+$/i, b = /^0o[0-7]+$/i, i = parseInt, a = typeof $e == "object" && $e && $e.Object === Object && $e, s = typeof self == "object" && self && self.Object === Object && self, o = a || s || Function("return this")(), u = Object.prototype, X = u.toString, x = Math.max, H = Math.min, r = function() {
    return o.Date.now();
  };
  function G(R, W, p) {
    var y, V, C, J, Y, K, $ = 0, S = !1, L = !1, E = !0;
    if (typeof R != "function")
      throw new TypeError(t);
    W = g(W) || 0, m(p) && (S = !!p.leading, L = "maxWait" in p, C = L ? x(g(p.maxWait) || 0, W) : C, E = "trailing" in p ? !!p.trailing : E);
    function cc(k) {
      var U = y, q = V;
      return y = V = void 0, $ = k, J = R.apply(q, U), J;
    }
    function ic(k) {
      return $ = k, Y = setTimeout(w, W), S ? cc(k) : J;
    }
    function F(k) {
      var U = k - K, q = k - $, ec = W - U;
      return L ? H(ec, C - q) : ec;
    }
    function N(k) {
      var U = k - K, q = k - $;
      return K === void 0 || U >= W || U < 0 || L && q >= C;
    }
    function w() {
      var k = r();
      if (N(k))
        return D(k);
      Y = setTimeout(w, F(k));
    }
    function D(k) {
      return Y = void 0, E && y ? cc(k) : (y = V = void 0, J);
    }
    function A() {
      Y !== void 0 && clearTimeout(Y), $ = 0, y = K = V = Y = void 0;
    }
    function P() {
      return Y === void 0 ? J : D(r());
    }
    function O() {
      var k = r(), U = N(k);
      if (y = arguments, V = this, K = k, U) {
        if (Y === void 0)
          return ic(K);
        if (L)
          return Y = setTimeout(w, W), cc(K);
      }
      return Y === void 0 && (Y = setTimeout(w, W)), J;
    }
    return O.cancel = A, O.flush = P, O;
  }
  function m(R) {
    var W = typeof R;
    return !!R && (W == "object" || W == "function");
  }
  function Z(R) {
    return !!R && typeof R == "object";
  }
  function h(R) {
    return typeof R == "symbol" || Z(R) && X.call(R) == e;
  }
  function g(R) {
    if (typeof R == "number")
      return R;
    if (h(R))
      return c;
    if (m(R)) {
      var W = typeof R.valueOf == "function" ? R.valueOf() : R;
      R = m(W) ? W + "" : W;
    }
    if (typeof R != "string")
      return R === 0 ? R : +R;
    R = R.replace(l, "");
    var p = d.test(R);
    return p || b.test(R) ? i(R.slice(2), p ? 2 : 8) : n.test(R) ? c : +R;
  }
  return Qn = G, Qn;
}
Dg();
var Nu = typeof window < "u" ? Dd : Yc;
function Qg(t, c, e, l) {
  const n = pc(c);
  Nu(() => {
    n.current = c;
  }, [c]), Yc(() => {
    const d = window;
    if (!(d && d.addEventListener))
      return;
    const b = (i) => {
      n.current(i);
    };
    return d.addEventListener(t, b, l), () => {
      d.removeEventListener(t, b, l);
    };
  }, [t, e, l]);
}
var Tg = typeof window > "u";
function jg(t, {
  defaultValue: c = !1,
  initializeWithValue: e = !0
} = {}) {
  const l = (i) => Tg ? c : window.matchMedia(i).matches, [n, d] = Ic(() => e ? l(t) : c);
  function b() {
    d(l(t));
  }
  return Nu(() => {
    const i = window.matchMedia(t);
    return b(), i.addListener ? i.addListener(b) : i.addEventListener("change", b), () => {
      i.removeListener ? i.removeListener(b) : i.removeEventListener("change", b);
    };
  }, [t]), n;
}
function Mg(t, c, e = "mousedown", l = {}) {
  Qg(
    e,
    (n) => {
      const d = n.target;
      if (!d || !d.isConnected)
        return;
      (Array.isArray(t) ? t.filter((i) => !!i.current).every((i) => i.current && !i.current.contains(d)) : t.current && !t.current.contains(d)) && c(n);
    },
    void 0,
    l
  );
}
function Ib() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const Cu = Qd(!1), Ug = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e99u59z2"
} : {
  target: "e99u59z2",
  label: "WrapperContainer"
})(process.env.NODE_ENV === "production" ? {
  name: "bjn8wh",
  styles: "position:relative"
} : {
  name: "bjn8wh",
  styles: "position:relative",
  toString: Ib
});
var Pg = process.env.NODE_ENV === "production" ? {
  name: "1npxqrq",
  styles: "right:0px;transform-origin:top right"
} : {
  name: "1avk0ky-ContentContainer",
  styles: "right:0px;transform-origin:top right;label:ContentContainer;",
  toString: Ib
}, Eg = process.env.NODE_ENV === "production" ? {
  name: "rvbvii",
  styles: "left:0px;transform-origin:top left"
} : {
  name: "1954d1p-ContentContainer",
  styles: "left:0px;transform-origin:top left;label:ContentContainer;",
  toString: Ib
};
const Kg = /* @__PURE__ */ B(Io, process.env.NODE_ENV === "production" ? {
  target: "e99u59z1"
} : {
  target: "e99u59z1",
  label: "ContentContainer"
})("position:absolute;top:calc(100% + 8px);width:", (t) => t.width, "px;padding:0;", (t) => t.align === "left" ? Eg : Pg, " border-radius:", (t) => t.theme.sizes.cardRadius, ";outline:", (t) => t.theme.hairlineBorder, ";transition:0.2s ease-out transform,0.2s linear opacity;transform:", (t) => t.visible ? "scale(100%)" : "scale(95%)", ";opacity:", (t) => t.visible ? 1 : 0, ";pointer-events:", (t) => t.visible ? "unset" : "none", ";z-index:199;" + (process.env.NODE_ENV === "production" ? "" : ""));
function _g(t) {
  const c = pc(null), [e, l] = Ic(!1), n = () => l(!e);
  return Mg(c, () => l(!1)), /* @__PURE__ */ I(Cu.Provider, { value: e, children: /* @__PURE__ */ I(Ug, { onClick: n, ref: c, children: t.children }) });
}
function $g(t) {
  const c = Td(Cu);
  return /* @__PURE__ */ I(Kg, { visible: c, width: t.width ?? 200, align: t.align ?? "right", children: t.children });
}
const qg = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e99u59z0"
} : {
  target: "e99u59z0",
  label: "ActionCell"
})("display:flex;flex-direction:row;gap:15px;align-items:center;padding:15px;cursor:pointer;transition:0.1s linear background-color;background-color:none;user-select:none;&:hover{background-color:", (t) => t.theme.colors.background.overlay, ";}&:not(:last-child){border-bottom:", (t) => t.theme.hairlineBorder, ";}&:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit;}&:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;}" + (process.env.NODE_ENV === "production" ? "" : "")), T1 = {
  Wrapper: _g,
  Contents: $g,
  ActionCell: qg
};
function jt(t) {
  "@babel/helpers - typeof";
  return jt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
    return typeof c;
  } : function(c) {
    return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
  }, jt(t);
}
function ch(t, c) {
  if (jt(t) != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var l = e.call(t, c);
    if (jt(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (c === "string" ? String : Number)(t);
}
function zu(t) {
  var c = ch(t, "string");
  return jt(c) == "symbol" ? c : c + "";
}
function pe(t, c, e) {
  return (c = zu(c)) in t ? Object.defineProperty(t, c, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[c] = e, t;
}
function _a(t, c) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    c && (l = l.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), e.push.apply(e, l);
  }
  return e;
}
function T(t) {
  for (var c = 1; c < arguments.length; c++) {
    var e = arguments[c] != null ? arguments[c] : {};
    c % 2 ? _a(Object(e), !0).forEach(function(l) {
      pe(t, l, e[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : _a(Object(e)).forEach(function(l) {
      Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(e, l));
    });
  }
  return t;
}
function th(t) {
  if (Array.isArray(t)) return t;
}
function eh(t, c) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var l, n, d, b, i = [], a = !0, s = !1;
    try {
      if (d = (e = e.call(t)).next, c === 0) {
        if (Object(e) !== e) return;
        a = !1;
      } else for (; !(a = (l = d.call(e)).done) && (i.push(l.value), i.length !== c); a = !0) ;
    } catch (o) {
      s = !0, n = o;
    } finally {
      try {
        if (!a && e.return != null && (b = e.return(), Object(b) !== b)) return;
      } finally {
        if (s) throw n;
      }
    }
    return i;
  }
}
function zd(t, c) {
  (c == null || c > t.length) && (c = t.length);
  for (var e = 0, l = Array(c); e < c; e++) l[e] = t[e];
  return l;
}
function wu(t, c) {
  if (t) {
    if (typeof t == "string") return zd(t, c);
    var e = {}.toString.call(t).slice(8, -1);
    return e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set" ? Array.from(t) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? zd(t, c) : void 0;
  }
}
function lh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function at(t, c) {
  return th(t) || eh(t, c) || wu(t, c) || lh();
}
function nh(t, c) {
  if (t == null) return {};
  var e = {};
  for (var l in t) if ({}.hasOwnProperty.call(t, l)) {
    if (c.indexOf(l) !== -1) continue;
    e[l] = t[l];
  }
  return e;
}
function qc(t, c) {
  if (t == null) return {};
  var e, l, n = nh(t, c);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(t);
    for (l = 0; l < d.length; l++) e = d[l], c.indexOf(e) === -1 && {}.propertyIsEnumerable.call(t, e) && (n[e] = t[e]);
  }
  return n;
}
var dh = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function Su(t) {
  var c = t.defaultInputValue, e = c === void 0 ? "" : c, l = t.defaultMenuIsOpen, n = l === void 0 ? !1 : l, d = t.defaultValue, b = d === void 0 ? null : d, i = t.inputValue, a = t.menuIsOpen, s = t.onChange, o = t.onInputChange, u = t.onMenuClose, X = t.onMenuOpen, x = t.value, H = qc(t, dh), r = Ic(i !== void 0 ? i : e), G = at(r, 2), m = G[0], Z = G[1], h = Ic(a !== void 0 ? a : n), g = at(h, 2), R = g[0], W = g[1], p = Ic(x !== void 0 ? x : b), y = at(p, 2), V = y[0], C = y[1], J = hc(function(cc, ic) {
    typeof s == "function" && s(cc, ic), C(cc);
  }, [s]), Y = hc(function(cc, ic) {
    var F;
    typeof o == "function" && (F = o(cc, ic)), Z(F !== void 0 ? F : cc);
  }, [o]), K = hc(function() {
    typeof X == "function" && X(), W(!0);
  }, [X]), $ = hc(function() {
    typeof u == "function" && u(), W(!1);
  }, [u]), S = i !== void 0 ? i : m, L = a !== void 0 ? a : R, E = x !== void 0 ? x : V;
  return T(T({}, H), {}, {
    inputValue: S,
    menuIsOpen: L,
    onChange: J,
    onInputChange: Y,
    onMenuClose: $,
    onMenuOpen: K,
    value: E
  });
}
function bh(t, c) {
  if (!(t instanceof c)) throw new TypeError("Cannot call a class as a function");
}
function $a(t, c) {
  for (var e = 0; e < c.length; e++) {
    var l = c[e];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(t, zu(l.key), l);
  }
}
function ih(t, c, e) {
  return c && $a(t.prototype, c), e && $a(t, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function wd(t, c) {
  return wd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, l) {
    return e.__proto__ = l, e;
  }, wd(t, c);
}
function ah(t, c) {
  if (typeof c != "function" && c !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(c && c.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), c && wd(t, c);
}
function Ql(t) {
  return Ql = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(c) {
    return c.__proto__ || Object.getPrototypeOf(c);
  }, Ql(t);
}
function Lu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Lu = function() {
    return !!t;
  })();
}
function sh(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function oh(t, c) {
  if (c && (jt(c) == "object" || typeof c == "function")) return c;
  if (c !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return sh(t);
}
function uh(t) {
  var c = Lu();
  return function() {
    var e, l = Ql(t);
    if (c) {
      var n = Ql(this).constructor;
      e = Reflect.construct(l, arguments, n);
    } else e = l.apply(this, arguments);
    return oh(this, e);
  };
}
function Xh(t) {
  if (Array.isArray(t)) return zd(t);
}
function xh(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function rh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ce(t) {
  return Xh(t) || xh(t) || wu(t) || rh();
}
function Gh(t, c) {
  return c || (c = t.slice(0)), Object.freeze(Object.defineProperties(t, {
    raw: {
      value: Object.freeze(c)
    }
  }));
}
const Hh = Math.min, mh = Math.max, Tl = Math.round, Hl = Math.floor, jl = (t) => ({
  x: t,
  y: t
});
function Rh(t) {
  const {
    x: c,
    y: e,
    width: l,
    height: n
  } = t;
  return {
    width: l,
    height: n,
    top: e,
    left: c,
    right: c + l,
    bottom: e + n,
    x: c,
    y: e
  };
}
function Xn() {
  return typeof window < "u";
}
function ku(t) {
  return Au(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function ut(t) {
  var c;
  return (t == null || (c = t.ownerDocument) == null ? void 0 : c.defaultView) || window;
}
function Ou(t) {
  var c;
  return (c = (Au(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : c.documentElement;
}
function Au(t) {
  return Xn() ? t instanceof Node || t instanceof ut(t).Node : !1;
}
function Zh(t) {
  return Xn() ? t instanceof Element || t instanceof ut(t).Element : !1;
}
function Fb(t) {
  return Xn() ? t instanceof HTMLElement || t instanceof ut(t).HTMLElement : !1;
}
function qa(t) {
  return !Xn() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof ut(t).ShadowRoot;
}
function Du(t) {
  const {
    overflow: c,
    overflowX: e,
    overflowY: l,
    display: n
  } = Vb(t);
  return /auto|scroll|overlay|hidden|clip/.test(c + l + e) && !["inline", "contents"].includes(n);
}
function gh() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function hh(t) {
  return ["html", "body", "#document"].includes(ku(t));
}
function Vb(t) {
  return ut(t).getComputedStyle(t);
}
function Wh(t) {
  if (ku(t) === "html")
    return t;
  const c = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    qa(t) && t.host || // Fallback.
    Ou(t)
  );
  return qa(c) ? c.host : c;
}
function Qu(t) {
  const c = Wh(t);
  return hh(c) ? t.ownerDocument ? t.ownerDocument.body : t.body : Fb(c) && Du(c) ? c : Qu(c);
}
function Ml(t, c, e) {
  var l;
  c === void 0 && (c = []), e === void 0 && (e = !0);
  const n = Qu(t), d = n === ((l = t.ownerDocument) == null ? void 0 : l.body), b = ut(n);
  if (d) {
    const i = Sd(b);
    return c.concat(b, b.visualViewport || [], Du(n) ? n : [], i && e ? Ml(i) : []);
  }
  return c.concat(n, Ml(n, [], e));
}
function Sd(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function ph(t) {
  const c = Vb(t);
  let e = parseFloat(c.width) || 0, l = parseFloat(c.height) || 0;
  const n = Fb(t), d = n ? t.offsetWidth : e, b = n ? t.offsetHeight : l, i = Tl(e) !== d || Tl(l) !== b;
  return i && (e = d, l = b), {
    width: e,
    height: l,
    $: i
  };
}
function vb(t) {
  return Zh(t) ? t : t.contextElement;
}
function cs(t) {
  const c = vb(t);
  if (!Fb(c))
    return jl(1);
  const e = c.getBoundingClientRect(), {
    width: l,
    height: n,
    $: d
  } = ph(c);
  let b = (d ? Tl(e.width) : e.width) / l, i = (d ? Tl(e.height) : e.height) / n;
  return (!b || !Number.isFinite(b)) && (b = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: b,
    y: i
  };
}
const yh = /* @__PURE__ */ jl(0);
function Ih(t) {
  const c = ut(t);
  return !gh() || !c.visualViewport ? yh : {
    x: c.visualViewport.offsetLeft,
    y: c.visualViewport.offsetTop
  };
}
function Fh(t, c, e) {
  return !1;
}
function ts(t, c, e, l) {
  c === void 0 && (c = !1);
  const n = t.getBoundingClientRect(), d = vb(t);
  let b = jl(1);
  c && (b = cs(t));
  const i = Fh() ? Ih(d) : jl(0);
  let a = (n.left + i.x) / b.x, s = (n.top + i.y) / b.y, o = n.width / b.x, u = n.height / b.y;
  if (d) {
    const X = ut(d), x = l;
    let H = X, r = Sd(H);
    for (; r && l && x !== H; ) {
      const G = cs(r), m = r.getBoundingClientRect(), Z = Vb(r), h = m.left + (r.clientLeft + parseFloat(Z.paddingLeft)) * G.x, g = m.top + (r.clientTop + parseFloat(Z.paddingTop)) * G.y;
      a *= G.x, s *= G.y, o *= G.x, u *= G.y, a += h, s += g, H = ut(r), r = Sd(H);
    }
  }
  return Rh({
    width: o,
    height: u,
    x: a,
    y: s
  });
}
function Tu(t, c) {
  return t.x === c.x && t.y === c.y && t.width === c.width && t.height === c.height;
}
function Vh(t, c) {
  let e = null, l;
  const n = Ou(t);
  function d() {
    var i;
    clearTimeout(l), (i = e) == null || i.disconnect(), e = null;
  }
  function b(i, a) {
    i === void 0 && (i = !1), a === void 0 && (a = 1), d();
    const s = t.getBoundingClientRect(), {
      left: o,
      top: u,
      width: X,
      height: x
    } = s;
    if (i || c(), !X || !x)
      return;
    const H = Hl(u), r = Hl(n.clientWidth - (o + X)), G = Hl(n.clientHeight - (u + x)), m = Hl(o), h = {
      rootMargin: -H + "px " + -r + "px " + -G + "px " + -m + "px",
      threshold: mh(0, Hh(1, a)) || 1
    };
    let g = !0;
    function R(W) {
      const p = W[0].intersectionRatio;
      if (p !== a) {
        if (!g)
          return b();
        p ? b(!1, p) : l = setTimeout(() => {
          b(!1, 1e-7);
        }, 1e3);
      }
      p === 1 && !Tu(s, t.getBoundingClientRect()) && b(), g = !1;
    }
    try {
      e = new IntersectionObserver(R, {
        ...h,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(R, h);
    }
    e.observe(t);
  }
  return b(!0), d;
}
function vh(t, c, e, l) {
  l === void 0 && (l = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: d = !0,
    elementResize: b = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = l, s = vb(t), o = n || d ? [...s ? Ml(s) : [], ...Ml(c)] : [];
  o.forEach((m) => {
    n && m.addEventListener("scroll", e, {
      passive: !0
    }), d && m.addEventListener("resize", e);
  });
  const u = s && i ? Vh(s, e) : null;
  let X = -1, x = null;
  b && (x = new ResizeObserver((m) => {
    let [Z] = m;
    Z && Z.target === s && x && (x.unobserve(c), cancelAnimationFrame(X), X = requestAnimationFrame(() => {
      var h;
      (h = x) == null || h.observe(c);
    })), e();
  }), s && !a && x.observe(s), x.observe(c));
  let H, r = a ? ts(t) : null;
  a && G();
  function G() {
    const m = ts(t);
    r && !Tu(r, m) && e(), r = m, H = requestAnimationFrame(G);
  }
  return e(), () => {
    var m;
    o.forEach((Z) => {
      n && Z.removeEventListener("scroll", e), d && Z.removeEventListener("resize", e);
    }), u == null || u(), (m = x) == null || m.disconnect(), x = null, a && cancelAnimationFrame(H);
  };
}
var Ld = Dd, Bh = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Ul = function() {
};
function fh(t, c) {
  return c ? c[0] === "-" ? t + c : t + "__" + c : t;
}
function Jh(t, c) {
  for (var e = arguments.length, l = new Array(e > 2 ? e - 2 : 0), n = 2; n < e; n++)
    l[n - 2] = arguments[n];
  var d = [].concat(l);
  if (c && t)
    for (var b in c)
      c.hasOwnProperty(b) && c[b] && d.push("".concat(fh(t, b)));
  return d.filter(function(i) {
    return i;
  }).map(function(i) {
    return String(i).trim();
  }).join(" ");
}
var Pl = function(c) {
  return Oh(c) ? c.filter(Boolean) : jt(c) === "object" && c !== null ? [c] : [];
}, ju = function(c) {
  c.className, c.clearValue, c.cx, c.getStyles, c.getClassNames, c.getValue, c.hasValue, c.isMulti, c.isRtl, c.options, c.selectOption, c.selectProps, c.setValue, c.theme;
  var e = qc(c, Bh);
  return T({}, e);
}, Zc = function(c, e, l) {
  var n = c.cx, d = c.getStyles, b = c.getClassNames, i = c.className;
  return {
    css: d(e, c),
    className: n(l ?? {}, b(e, c), i)
  };
};
function xn(t) {
  return [document.documentElement, document.body, window].indexOf(t) > -1;
}
function Yh(t) {
  return xn(t) ? window.innerHeight : t.clientHeight;
}
function Mu(t) {
  return xn(t) ? window.pageYOffset : t.scrollTop;
}
function El(t, c) {
  if (xn(t)) {
    window.scrollTo(0, c);
    return;
  }
  t.scrollTop = c;
}
function Nh(t) {
  var c = getComputedStyle(t), e = c.position === "absolute", l = /(auto|scroll)/;
  if (c.position === "fixed") return document.documentElement;
  for (var n = t; n = n.parentElement; )
    if (c = getComputedStyle(n), !(e && c.position === "static") && l.test(c.overflow + c.overflowY + c.overflowX))
      return n;
  return document.documentElement;
}
function Ch(t, c, e, l) {
  return e * ((t = t / l - 1) * t * t + 1) + c;
}
function ml(t, c) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Ul, n = Mu(t), d = c - n, b = 10, i = 0;
  function a() {
    i += b;
    var s = Ch(i, n, d, e);
    El(t, s), i < e ? window.requestAnimationFrame(a) : l(t);
  }
  a();
}
function es(t, c) {
  var e = t.getBoundingClientRect(), l = c.getBoundingClientRect(), n = c.offsetHeight / 3;
  l.bottom + n > e.bottom ? El(t, Math.min(c.offsetTop + c.clientHeight - t.offsetHeight + n, t.scrollHeight)) : l.top - n < e.top && El(t, Math.max(c.offsetTop - n, 0));
}
function zh(t) {
  var c = t.getBoundingClientRect();
  return {
    bottom: c.bottom,
    height: c.height,
    left: c.left,
    right: c.right,
    top: c.top,
    width: c.width
  };
}
function ls() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function wh() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var Uu = !1, Sh = {
  get passive() {
    return Uu = !0;
  }
}, Rl = typeof window < "u" ? window : {};
Rl.addEventListener && Rl.removeEventListener && (Rl.addEventListener("p", Ul, Sh), Rl.removeEventListener("p", Ul, !1));
var Lh = Uu;
function kh(t) {
  return t != null;
}
function Oh(t) {
  return Array.isArray(t);
}
function ye(t, c, e) {
  return t ? c : e;
}
var Ah = function(c) {
  for (var e = arguments.length, l = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    l[n - 1] = arguments[n];
  var d = Object.entries(c).filter(function(b) {
    var i = at(b, 1), a = i[0];
    return !l.includes(a);
  });
  return d.reduce(function(b, i) {
    var a = at(i, 2), s = a[0], o = a[1];
    return b[s] = o, b;
  }, {});
}, Dh = ["children", "innerProps"], Qh = ["children", "innerProps"];
function Th(t) {
  var c = t.maxHeight, e = t.menuEl, l = t.minHeight, n = t.placement, d = t.shouldScroll, b = t.isFixedPosition, i = t.controlHeight, a = Nh(e), s = {
    placement: "bottom",
    maxHeight: c
  };
  if (!e || !e.offsetParent) return s;
  var o = a.getBoundingClientRect(), u = o.height, X = e.getBoundingClientRect(), x = X.bottom, H = X.height, r = X.top, G = e.offsetParent.getBoundingClientRect(), m = G.top, Z = b ? window.innerHeight : Yh(a), h = Mu(a), g = parseInt(getComputedStyle(e).marginBottom, 10), R = parseInt(getComputedStyle(e).marginTop, 10), W = m - R, p = Z - r, y = W + h, V = u - h - r, C = x - Z + h + g, J = h + r - R, Y = 160;
  switch (n) {
    case "auto":
    case "bottom":
      if (p >= H)
        return {
          placement: "bottom",
          maxHeight: c
        };
      if (V >= H && !b)
        return d && ml(a, C, Y), {
          placement: "bottom",
          maxHeight: c
        };
      if (!b && V >= l || b && p >= l) {
        d && ml(a, C, Y);
        var K = b ? p - g : V - g;
        return {
          placement: "bottom",
          maxHeight: K
        };
      }
      if (n === "auto" || b) {
        var $ = c, S = b ? W : y;
        return S >= l && ($ = Math.min(S - g - i, c)), {
          placement: "top",
          maxHeight: $
        };
      }
      if (n === "bottom")
        return d && El(a, C), {
          placement: "bottom",
          maxHeight: c
        };
      break;
    case "top":
      if (W >= H)
        return {
          placement: "top",
          maxHeight: c
        };
      if (y >= H && !b)
        return d && ml(a, J, Y), {
          placement: "top",
          maxHeight: c
        };
      if (!b && y >= l || b && W >= l) {
        var L = c;
        return (!b && y >= l || b && W >= l) && (L = b ? W - R : y - R), d && ml(a, J, Y), {
          placement: "top",
          maxHeight: L
        };
      }
      return {
        placement: "bottom",
        maxHeight: c
      };
    default:
      throw new Error('Invalid placement provided "'.concat(n, '".'));
  }
  return s;
}
function jh(t) {
  var c = {
    bottom: "top",
    top: "bottom"
  };
  return t ? c[t] : "bottom";
}
var Pu = function(c) {
  return c === "auto" ? "bottom" : c;
}, Mh = function(c, e) {
  var l, n = c.placement, d = c.theme, b = d.borderRadius, i = d.spacing, a = d.colors;
  return T((l = {
    label: "menu"
  }, pe(l, jh(n), "100%"), pe(l, "position", "absolute"), pe(l, "width", "100%"), pe(l, "zIndex", 1), l), e ? {} : {
    backgroundColor: a.neutral0,
    borderRadius: b,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: i.menuGutter,
    marginTop: i.menuGutter
  });
}, Eu = /* @__PURE__ */ Qd(null), Uh = function(c) {
  var e = c.children, l = c.minMenuHeight, n = c.maxMenuHeight, d = c.menuPlacement, b = c.menuPosition, i = c.menuShouldScrollIntoView, a = c.theme, s = Td(Eu) || {}, o = s.setPortalPlacement, u = pc(null), X = Ic(n), x = at(X, 2), H = x[0], r = x[1], G = Ic(null), m = at(G, 2), Z = m[0], h = m[1], g = a.spacing.controlHeight;
  return Ld(function() {
    var R = u.current;
    if (R) {
      var W = b === "fixed", p = i && !W, y = Th({
        maxHeight: n,
        menuEl: R,
        minHeight: l,
        placement: d,
        shouldScroll: p,
        isFixedPosition: W,
        controlHeight: g
      });
      r(y.maxHeight), h(y.placement), o == null || o(y.placement);
    }
  }, [n, d, b, i, l, o, g]), e({
    ref: u,
    placerProps: T(T({}, c), {}, {
      placement: Z || Pu(d),
      maxHeight: H
    })
  });
}, Ph = function(c) {
  var e = c.children, l = c.innerRef, n = c.innerProps;
  return j("div", M({}, Zc(c, "menu", {
    menu: !0
  }), {
    ref: l
  }, n), e);
}, Eh = Ph, Kh = function(c, e) {
  var l = c.maxHeight, n = c.theme.spacing.baseUnit;
  return T({
    maxHeight: l,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, e ? {} : {
    paddingBottom: n,
    paddingTop: n
  });
}, _h = function(c) {
  var e = c.children, l = c.innerProps, n = c.innerRef, d = c.isMulti;
  return j("div", M({}, Zc(c, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": d
  }), {
    ref: n
  }, l), e);
}, Ku = function(c, e) {
  var l = c.theme, n = l.spacing.baseUnit, d = l.colors;
  return T({
    textAlign: "center"
  }, e ? {} : {
    color: d.neutral40,
    padding: "".concat(n * 2, "px ").concat(n * 3, "px")
  });
}, $h = Ku, qh = Ku, c2 = function(c) {
  var e = c.children, l = e === void 0 ? "No options" : e, n = c.innerProps, d = qc(c, Dh);
  return j("div", M({}, Zc(T(T({}, d), {}, {
    children: l,
    innerProps: n
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), n), l);
}, t2 = function(c) {
  var e = c.children, l = e === void 0 ? "Loading..." : e, n = c.innerProps, d = qc(c, Qh);
  return j("div", M({}, Zc(T(T({}, d), {}, {
    children: l,
    innerProps: n
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), n), l);
}, e2 = function(c) {
  var e = c.rect, l = c.offset, n = c.position;
  return {
    left: e.left,
    position: n,
    top: l,
    width: e.width,
    zIndex: 1
  };
}, l2 = function(c) {
  var e = c.appendTo, l = c.children, n = c.controlElement, d = c.innerProps, b = c.menuPlacement, i = c.menuPosition, a = pc(null), s = pc(null), o = Ic(Pu(b)), u = at(o, 2), X = u[0], x = u[1], H = Cc(function() {
    return {
      setPortalPlacement: x
    };
  }, []), r = Ic(null), G = at(r, 2), m = G[0], Z = G[1], h = hc(function() {
    if (n) {
      var p = zh(n), y = i === "fixed" ? 0 : window.pageYOffset, V = p[X] + y;
      (V !== (m == null ? void 0 : m.offset) || p.left !== (m == null ? void 0 : m.rect.left) || p.width !== (m == null ? void 0 : m.rect.width)) && Z({
        offset: V,
        rect: p
      });
    }
  }, [n, i, X, m == null ? void 0 : m.offset, m == null ? void 0 : m.rect.left, m == null ? void 0 : m.rect.width]);
  Ld(function() {
    h();
  }, [h]);
  var g = hc(function() {
    typeof s.current == "function" && (s.current(), s.current = null), n && a.current && (s.current = vh(n, a.current, h, {
      elementResize: "ResizeObserver" in window
    }));
  }, [n, h]);
  Ld(function() {
    g();
  }, [g]);
  var R = hc(function(p) {
    a.current = p, g();
  }, [g]);
  if (!e && i !== "fixed" || !m) return null;
  var W = j("div", M({
    ref: R
  }, Zc(T(T({}, c), {}, {
    offset: m.offset,
    position: i,
    rect: m.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), d), l);
  return j(Eu.Provider, {
    value: H
  }, e ? /* @__PURE__ */ I0(W, e) : W);
}, n2 = function(c) {
  var e = c.isDisabled, l = c.isRtl;
  return {
    label: "container",
    direction: l ? "rtl" : void 0,
    pointerEvents: e ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, d2 = function(c) {
  var e = c.children, l = c.innerProps, n = c.isDisabled, d = c.isRtl;
  return j("div", M({}, Zc(c, "container", {
    "--is-disabled": n,
    "--is-rtl": d
  }), l), e);
}, b2 = function(c, e) {
  var l = c.theme.spacing, n = c.isMulti, d = c.hasValue, b = c.selectProps.controlShouldRenderValue;
  return T({
    alignItems: "center",
    display: n && d && b ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, e ? {} : {
    padding: "".concat(l.baseUnit / 2, "px ").concat(l.baseUnit * 2, "px")
  });
}, i2 = function(c) {
  var e = c.children, l = c.innerProps, n = c.isMulti, d = c.hasValue;
  return j("div", M({}, Zc(c, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": n,
    "value-container--has-value": d
  }), l), e);
}, a2 = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, s2 = function(c) {
  var e = c.children, l = c.innerProps;
  return j("div", M({}, Zc(c, "indicatorsContainer", {
    indicators: !0
  }), l), e);
}, ns, o2 = ["size"], u2 = ["innerProps", "isRtl", "size"];
function X2() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var x2 = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "",
  toString: X2
}, _u = function(c) {
  var e = c.size, l = qc(c, o2);
  return j("svg", M({
    height: e,
    width: e,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: x2
  }, l));
}, Bb = function(c) {
  return j(_u, M({
    size: 20
  }, c), j("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, $u = function(c) {
  return j(_u, M({
    size: 20
  }, c), j("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, qu = function(c, e) {
  var l = c.isFocused, n = c.theme, d = n.spacing.baseUnit, b = n.colors;
  return T({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, e ? {} : {
    color: l ? b.neutral60 : b.neutral20,
    padding: d * 2,
    ":hover": {
      color: l ? b.neutral80 : b.neutral40
    }
  });
}, r2 = qu, G2 = function(c) {
  var e = c.children, l = c.innerProps;
  return j("div", M({}, Zc(c, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), l), e || j($u, null));
}, H2 = qu, m2 = function(c) {
  var e = c.children, l = c.innerProps;
  return j("div", M({}, Zc(c, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), l), e || j(Bb, null));
}, R2 = function(c, e) {
  var l = c.isDisabled, n = c.theme, d = n.spacing.baseUnit, b = n.colors;
  return T({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, e ? {} : {
    backgroundColor: l ? b.neutral10 : b.neutral20,
    marginBottom: d * 2,
    marginTop: d * 2
  });
}, Z2 = function(c) {
  var e = c.innerProps;
  return j("span", M({}, e, Zc(c, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, g2 = Xt(ns || (ns = Gh([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), h2 = function(c, e) {
  var l = c.isFocused, n = c.size, d = c.theme, b = d.colors, i = d.spacing.baseUnit;
  return T({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: n,
    lineHeight: 1,
    marginRight: n,
    textAlign: "center",
    verticalAlign: "middle"
  }, e ? {} : {
    color: l ? b.neutral60 : b.neutral20,
    padding: i * 2
  });
}, Tn = function(c) {
  var e = c.delay, l = c.offset;
  return j("span", {
    css: /* @__PURE__ */ Lc({
      animation: "".concat(g2, " 1s ease-in-out ").concat(e, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: l ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "")
  });
}, W2 = function(c) {
  var e = c.innerProps, l = c.isRtl, n = c.size, d = n === void 0 ? 4 : n, b = qc(c, u2);
  return j("div", M({}, Zc(T(T({}, b), {}, {
    innerProps: e,
    isRtl: l,
    size: d
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), e), j(Tn, {
    delay: 0,
    offset: l
  }), j(Tn, {
    delay: 160,
    offset: !0
  }), j(Tn, {
    delay: 320,
    offset: !l
  }));
}, p2 = function(c, e) {
  var l = c.isDisabled, n = c.isFocused, d = c.theme, b = d.colors, i = d.borderRadius, a = d.spacing;
  return T({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: a.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, e ? {} : {
    backgroundColor: l ? b.neutral5 : b.neutral0,
    borderColor: l ? b.neutral10 : n ? b.primary : b.neutral20,
    borderRadius: i,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: n ? "0 0 0 1px ".concat(b.primary) : void 0,
    "&:hover": {
      borderColor: n ? b.primary : b.neutral30
    }
  });
}, y2 = function(c) {
  var e = c.children, l = c.isDisabled, n = c.isFocused, d = c.innerRef, b = c.innerProps, i = c.menuIsOpen;
  return j("div", M({
    ref: d
  }, Zc(c, "control", {
    control: !0,
    "control--is-disabled": l,
    "control--is-focused": n,
    "control--menu-is-open": i
  }), b, {
    "aria-disabled": l || void 0
  }), e);
}, I2 = y2, F2 = ["data"], V2 = function(c, e) {
  var l = c.theme.spacing;
  return e ? {} : {
    paddingBottom: l.baseUnit * 2,
    paddingTop: l.baseUnit * 2
  };
}, v2 = function(c) {
  var e = c.children, l = c.cx, n = c.getStyles, d = c.getClassNames, b = c.Heading, i = c.headingProps, a = c.innerProps, s = c.label, o = c.theme, u = c.selectProps;
  return j("div", M({}, Zc(c, "group", {
    group: !0
  }), a), j(b, M({}, i, {
    selectProps: u,
    theme: o,
    getStyles: n,
    getClassNames: d,
    cx: l
  }), s), j("div", null, e));
}, B2 = function(c, e) {
  var l = c.theme, n = l.colors, d = l.spacing;
  return T({
    label: "group",
    cursor: "default",
    display: "block"
  }, e ? {} : {
    color: n.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: d.baseUnit * 3,
    paddingRight: d.baseUnit * 3,
    textTransform: "uppercase"
  });
}, f2 = function(c) {
  var e = ju(c);
  e.data;
  var l = qc(e, F2);
  return j("div", M({}, Zc(c, "groupHeading", {
    "group-heading": !0
  }), l));
}, J2 = v2, Y2 = ["innerRef", "isDisabled", "isHidden", "inputClassName"], N2 = function(c, e) {
  var l = c.isDisabled, n = c.value, d = c.theme, b = d.spacing, i = d.colors;
  return T(T({
    visibility: l ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: n ? "translateZ(0)" : ""
  }, C2), e ? {} : {
    margin: b.baseUnit / 2,
    paddingBottom: b.baseUnit / 2,
    paddingTop: b.baseUnit / 2,
    color: i.neutral80
  });
}, c0 = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, C2 = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": T({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, c0)
}, z2 = function(c) {
  return T({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: c ? 0 : 1,
    width: "100%"
  }, c0);
}, w2 = function(c) {
  var e = c.cx, l = c.value, n = ju(c), d = n.innerRef, b = n.isDisabled, i = n.isHidden, a = n.inputClassName, s = qc(n, Y2);
  return j("div", M({}, Zc(c, "input", {
    "input-container": !0
  }), {
    "data-value": l || ""
  }), j("input", M({
    className: e({
      input: !0
    }, a),
    ref: d,
    style: z2(i),
    disabled: b
  }, s)));
}, S2 = w2, L2 = function(c, e) {
  var l = c.theme, n = l.spacing, d = l.borderRadius, b = l.colors;
  return T({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, e ? {} : {
    backgroundColor: b.neutral10,
    borderRadius: d / 2,
    margin: n.baseUnit / 2
  });
}, k2 = function(c, e) {
  var l = c.theme, n = l.borderRadius, d = l.colors, b = c.cropWithEllipsis;
  return T({
    overflow: "hidden",
    textOverflow: b || b === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, e ? {} : {
    borderRadius: n / 2,
    color: d.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, O2 = function(c, e) {
  var l = c.theme, n = l.spacing, d = l.borderRadius, b = l.colors, i = c.isFocused;
  return T({
    alignItems: "center",
    display: "flex"
  }, e ? {} : {
    borderRadius: d / 2,
    backgroundColor: i ? b.dangerLight : void 0,
    paddingLeft: n.baseUnit,
    paddingRight: n.baseUnit,
    ":hover": {
      backgroundColor: b.dangerLight,
      color: b.danger
    }
  });
}, t0 = function(c) {
  var e = c.children, l = c.innerProps;
  return j("div", l, e);
}, A2 = t0, D2 = t0;
function Q2(t) {
  var c = t.children, e = t.innerProps;
  return j("div", M({
    role: "button"
  }, e), c || j(Bb, {
    size: 14
  }));
}
var T2 = function(c) {
  var e = c.children, l = c.components, n = c.data, d = c.innerProps, b = c.isDisabled, i = c.removeProps, a = c.selectProps, s = l.Container, o = l.Label, u = l.Remove;
  return j(s, {
    data: n,
    innerProps: T(T({}, Zc(c, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": b
    })), d),
    selectProps: a
  }, j(o, {
    data: n,
    innerProps: T({}, Zc(c, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: a
  }, e), j(u, {
    data: n,
    innerProps: T(T({}, Zc(c, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(e || "option")
    }, i),
    selectProps: a
  }));
}, j2 = T2, M2 = function(c, e) {
  var l = c.isDisabled, n = c.isFocused, d = c.isSelected, b = c.theme, i = b.spacing, a = b.colors;
  return T({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, e ? {} : {
    backgroundColor: d ? a.primary : n ? a.primary25 : "transparent",
    color: l ? a.neutral20 : d ? a.neutral0 : "inherit",
    padding: "".concat(i.baseUnit * 2, "px ").concat(i.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: l ? void 0 : d ? a.primary : a.primary50
    }
  });
}, U2 = function(c) {
  var e = c.children, l = c.isDisabled, n = c.isFocused, d = c.isSelected, b = c.innerRef, i = c.innerProps;
  return j("div", M({}, Zc(c, "option", {
    option: !0,
    "option--is-disabled": l,
    "option--is-focused": n,
    "option--is-selected": d
  }), {
    ref: b,
    "aria-disabled": l
  }, i), e);
}, P2 = U2, E2 = function(c, e) {
  var l = c.theme, n = l.spacing, d = l.colors;
  return T({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, e ? {} : {
    color: d.neutral50,
    marginLeft: n.baseUnit / 2,
    marginRight: n.baseUnit / 2
  });
}, K2 = function(c) {
  var e = c.children, l = c.innerProps;
  return j("div", M({}, Zc(c, "placeholder", {
    placeholder: !0
  }), l), e);
}, _2 = K2, $2 = function(c, e) {
  var l = c.isDisabled, n = c.theme, d = n.spacing, b = n.colors;
  return T({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, e ? {} : {
    color: l ? b.neutral40 : b.neutral80,
    marginLeft: d.baseUnit / 2,
    marginRight: d.baseUnit / 2
  });
}, q2 = function(c) {
  var e = c.children, l = c.isDisabled, n = c.innerProps;
  return j("div", M({}, Zc(c, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": l
  }), n), e);
}, cW = q2, rn = {
  ClearIndicator: m2,
  Control: I2,
  DropdownIndicator: G2,
  DownChevron: $u,
  CrossIcon: Bb,
  Group: J2,
  GroupHeading: f2,
  IndicatorsContainer: s2,
  IndicatorSeparator: Z2,
  Input: S2,
  LoadingIndicator: W2,
  Menu: Eh,
  MenuList: _h,
  MenuPortal: l2,
  LoadingMessage: t2,
  NoOptionsMessage: c2,
  MultiValue: j2,
  MultiValueContainer: A2,
  MultiValueLabel: D2,
  MultiValueRemove: Q2,
  Option: P2,
  Placeholder: _2,
  SelectContainer: d2,
  SingleValue: cW,
  ValueContainer: i2
}, tW = function(c) {
  return T(T({}, rn), c.components);
}, ds = Number.isNaN || function(c) {
  return typeof c == "number" && c !== c;
};
function eW(t, c) {
  return !!(t === c || ds(t) && ds(c));
}
function lW(t, c) {
  if (t.length !== c.length)
    return !1;
  for (var e = 0; e < t.length; e++)
    if (!eW(t[e], c[e]))
      return !1;
  return !0;
}
function nW(t, c) {
  c === void 0 && (c = lW);
  var e = null;
  function l() {
    for (var n = [], d = 0; d < arguments.length; d++)
      n[d] = arguments[d];
    if (e && e.lastThis === this && c(n, e.lastArgs))
      return e.lastResult;
    var b = t.apply(this, n);
    return e = {
      lastResult: b,
      lastArgs: n,
      lastThis: this
    }, b;
  }
  return l.clear = function() {
    e = null;
  }, l;
}
function dW() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var bW = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "",
  toString: dW
}, iW = function(c) {
  return j("span", M({
    css: bW
  }, c));
}, bs = iW, aW = {
  guidance: function(c) {
    var e = c.isSearchable, l = c.isMulti, n = c.tabSelectsValue, d = c.context, b = c.isInitialFocus;
    switch (d) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return b ? "".concat(c["aria-label"] || "Select", " is focused ").concat(e ? ",type to refine list" : "", ", press Down to open the menu, ").concat(l ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(c) {
    var e = c.action, l = c.label, n = l === void 0 ? "" : l, d = c.labels, b = c.isDisabled;
    switch (e) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(n, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(d.length > 1 ? "s" : "", " ").concat(d.join(","), ", selected.");
      case "select-option":
        return b ? "option ".concat(n, " is disabled. Select another option.") : "option ".concat(n, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(c) {
    var e = c.context, l = c.focused, n = c.options, d = c.label, b = d === void 0 ? "" : d, i = c.selectValue, a = c.isDisabled, s = c.isSelected, o = c.isAppleDevice, u = function(r, G) {
      return r && r.length ? "".concat(r.indexOf(G) + 1, " of ").concat(r.length) : "";
    };
    if (e === "value" && i)
      return "value ".concat(b, " focused, ").concat(u(i, l), ".");
    if (e === "menu" && o) {
      var X = a ? " disabled" : "", x = "".concat(s ? " selected" : "").concat(X);
      return "".concat(b).concat(x, ", ").concat(u(n, l), ".");
    }
    return "";
  },
  onFilter: function(c) {
    var e = c.inputValue, l = c.resultsMessage;
    return "".concat(l).concat(e ? " for search term " + e : "", ".");
  }
}, sW = function(c) {
  var e = c.ariaSelection, l = c.focusedOption, n = c.focusedValue, d = c.focusableOptions, b = c.isFocused, i = c.selectValue, a = c.selectProps, s = c.id, o = c.isAppleDevice, u = a.ariaLiveMessages, X = a.getOptionLabel, x = a.inputValue, H = a.isMulti, r = a.isOptionDisabled, G = a.isSearchable, m = a.menuIsOpen, Z = a.options, h = a.screenReaderStatus, g = a.tabSelectsValue, R = a.isLoading, W = a["aria-label"], p = a["aria-live"], y = Cc(function() {
    return T(T({}, aW), u || {});
  }, [u]), V = Cc(function() {
    var S = "";
    if (e && y.onChange) {
      var L = e.option, E = e.options, cc = e.removedValue, ic = e.removedValues, F = e.value, N = function(U) {
        return Array.isArray(U) ? null : U;
      }, w = cc || L || N(F), D = w ? X(w) : "", A = E || ic || void 0, P = A ? A.map(X) : [], O = T({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: w && r(w, i),
        label: D,
        labels: P
      }, e);
      S = y.onChange(O);
    }
    return S;
  }, [e, y, r, i, X]), C = Cc(function() {
    var S = "", L = l || n, E = !!(l && i && i.includes(l));
    if (L && y.onFocus) {
      var cc = {
        focused: L,
        label: X(L),
        isDisabled: r(L, i),
        isSelected: E,
        options: d,
        context: L === l ? "menu" : "value",
        selectValue: i,
        isAppleDevice: o
      };
      S = y.onFocus(cc);
    }
    return S;
  }, [l, n, X, r, y, d, i, o]), J = Cc(function() {
    var S = "";
    if (m && Z.length && !R && y.onFilter) {
      var L = h({
        count: d.length
      });
      S = y.onFilter({
        inputValue: x,
        resultsMessage: L
      });
    }
    return S;
  }, [d, x, m, y, Z, h, R]), Y = (e == null ? void 0 : e.action) === "initial-input-focus", K = Cc(function() {
    var S = "";
    if (y.guidance) {
      var L = n ? "value" : m ? "menu" : "input";
      S = y.guidance({
        "aria-label": W,
        context: L,
        isDisabled: l && r(l, i),
        isMulti: H,
        isSearchable: G,
        tabSelectsValue: g,
        isInitialFocus: Y
      });
    }
    return S;
  }, [W, l, n, H, r, G, m, y, i, g, Y]), $ = j(_n, null, j("span", {
    id: "aria-selection"
  }, V), j("span", {
    id: "aria-focused"
  }, C), j("span", {
    id: "aria-results"
  }, J), j("span", {
    id: "aria-guidance"
  }, K));
  return j(_n, null, j(bs, {
    id: s
  }, Y && $), j(bs, {
    "aria-live": p,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, b && !Y && $));
}, oW = sW, kd = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], uW = new RegExp("[" + kd.map(function(t) {
  return t.letters;
}).join("") + "]", "g"), e0 = {};
for (var jn = 0; jn < kd.length; jn++)
  for (var Mn = kd[jn], Un = 0; Un < Mn.letters.length; Un++)
    e0[Mn.letters[Un]] = Mn.base;
var l0 = function(c) {
  return c.replace(uW, function(e) {
    return e0[e];
  });
}, XW = nW(l0), is = function(c) {
  return c.replace(/^\s+|\s+$/g, "");
}, xW = function(c) {
  return "".concat(c.label, " ").concat(c.value);
}, rW = function(c) {
  return function(e, l) {
    if (e.data.__isNew__) return !0;
    var n = T({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: xW,
      trim: !0,
      matchFrom: "any"
    }, c), d = n.ignoreCase, b = n.ignoreAccents, i = n.stringify, a = n.trim, s = n.matchFrom, o = a ? is(l) : l, u = a ? is(i(e)) : i(e);
    return d && (o = o.toLowerCase(), u = u.toLowerCase()), b && (o = XW(o), u = l0(u)), s === "start" ? u.substr(0, o.length) === o : u.indexOf(o) > -1;
  };
}, GW = ["innerRef"];
function HW(t) {
  var c = t.innerRef, e = qc(t, GW), l = Ah(e, "onExited", "in", "enter", "exit", "appear");
  return j("input", M({
    ref: c
  }, l, {
    css: /* @__PURE__ */ Lc({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "")
  }));
}
var mW = function(c) {
  c.cancelable && c.preventDefault(), c.stopPropagation();
};
function RW(t) {
  var c = t.isEnabled, e = t.onBottomArrive, l = t.onBottomLeave, n = t.onTopArrive, d = t.onTopLeave, b = pc(!1), i = pc(!1), a = pc(0), s = pc(null), o = hc(function(G, m) {
    if (s.current !== null) {
      var Z = s.current, h = Z.scrollTop, g = Z.scrollHeight, R = Z.clientHeight, W = s.current, p = m > 0, y = g - R - h, V = !1;
      y > m && b.current && (l && l(G), b.current = !1), p && i.current && (d && d(G), i.current = !1), p && m > y ? (e && !b.current && e(G), W.scrollTop = g, V = !0, b.current = !0) : !p && -m > h && (n && !i.current && n(G), W.scrollTop = 0, V = !0, i.current = !0), V && mW(G);
    }
  }, [e, l, n, d]), u = hc(function(G) {
    o(G, G.deltaY);
  }, [o]), X = hc(function(G) {
    a.current = G.changedTouches[0].clientY;
  }, []), x = hc(function(G) {
    var m = a.current - G.changedTouches[0].clientY;
    o(G, m);
  }, [o]), H = hc(function(G) {
    if (G) {
      var m = Lh ? {
        passive: !1
      } : !1;
      G.addEventListener("wheel", u, m), G.addEventListener("touchstart", X, m), G.addEventListener("touchmove", x, m);
    }
  }, [x, X, u]), r = hc(function(G) {
    G && (G.removeEventListener("wheel", u, !1), G.removeEventListener("touchstart", X, !1), G.removeEventListener("touchmove", x, !1));
  }, [x, X, u]);
  return Yc(function() {
    if (c) {
      var G = s.current;
      return H(G), function() {
        r(G);
      };
    }
  }, [c, H, r]), function(G) {
    s.current = G;
  };
}
var as = ["boxSizing", "height", "overflow", "paddingRight", "position"], ss = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function os(t) {
  t.cancelable && t.preventDefault();
}
function us(t) {
  t.stopPropagation();
}
function Xs() {
  var t = this.scrollTop, c = this.scrollHeight, e = t + this.offsetHeight;
  t === 0 ? this.scrollTop = 1 : e === c && (this.scrollTop = t - 1);
}
function xs() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var rs = !!(typeof window < "u" && window.document && window.document.createElement), Xe = 0, Et = {
  capture: !1,
  passive: !1
};
function ZW(t) {
  var c = t.isEnabled, e = t.accountForScrollbars, l = e === void 0 ? !0 : e, n = pc({}), d = pc(null), b = hc(function(a) {
    if (rs) {
      var s = document.body, o = s && s.style;
      if (l && as.forEach(function(H) {
        var r = o && o[H];
        n.current[H] = r;
      }), l && Xe < 1) {
        var u = parseInt(n.current.paddingRight, 10) || 0, X = document.body ? document.body.clientWidth : 0, x = window.innerWidth - X + u || 0;
        Object.keys(ss).forEach(function(H) {
          var r = ss[H];
          o && (o[H] = r);
        }), o && (o.paddingRight = "".concat(x, "px"));
      }
      s && xs() && (s.addEventListener("touchmove", os, Et), a && (a.addEventListener("touchstart", Xs, Et), a.addEventListener("touchmove", us, Et))), Xe += 1;
    }
  }, [l]), i = hc(function(a) {
    if (rs) {
      var s = document.body, o = s && s.style;
      Xe = Math.max(Xe - 1, 0), l && Xe < 1 && as.forEach(function(u) {
        var X = n.current[u];
        o && (o[u] = X);
      }), s && xs() && (s.removeEventListener("touchmove", os, Et), a && (a.removeEventListener("touchstart", Xs, Et), a.removeEventListener("touchmove", us, Et)));
    }
  }, [l]);
  return Yc(function() {
    if (c) {
      var a = d.current;
      return b(a), function() {
        i(a);
      };
    }
  }, [c, b, i]), function(a) {
    d.current = a;
  };
}
function gW() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var hW = function(c) {
  var e = c.target;
  return e.ownerDocument.activeElement && e.ownerDocument.activeElement.blur();
}, WW = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "",
  toString: gW
};
function pW(t) {
  var c = t.children, e = t.lockEnabled, l = t.captureEnabled, n = l === void 0 ? !0 : l, d = t.onBottomArrive, b = t.onBottomLeave, i = t.onTopArrive, a = t.onTopLeave, s = RW({
    isEnabled: n,
    onBottomArrive: d,
    onBottomLeave: b,
    onTopArrive: i,
    onTopLeave: a
  }), o = ZW({
    isEnabled: e
  }), u = function(x) {
    s(x), o(x);
  };
  return j(_n, null, e && j("div", {
    onClick: hW,
    css: WW
  }), c(u));
}
function yW() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var IW = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "",
  toString: yW
}, FW = function(c) {
  var e = c.name, l = c.onFocus;
  return j("input", {
    required: !0,
    name: e,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: l,
    css: IW,
    value: "",
    onChange: function() {
    }
  });
}, VW = FW;
function fb(t) {
  var c;
  return typeof window < "u" && window.navigator != null ? t.test(((c = window.navigator.userAgentData) === null || c === void 0 ? void 0 : c.platform) || window.navigator.platform) : !1;
}
function vW() {
  return fb(/^iPhone/i);
}
function n0() {
  return fb(/^Mac/i);
}
function BW() {
  return fb(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  n0() && navigator.maxTouchPoints > 1;
}
function fW() {
  return vW() || BW();
}
function JW() {
  return n0() || fW();
}
var YW = function(c) {
  return c.label;
}, d0 = function(c) {
  return c.label;
}, b0 = function(c) {
  return c.value;
}, NW = function(c) {
  return !!c.isDisabled;
}, CW = {
  clearIndicator: H2,
  container: n2,
  control: p2,
  dropdownIndicator: r2,
  group: V2,
  groupHeading: B2,
  indicatorsContainer: a2,
  indicatorSeparator: R2,
  input: N2,
  loadingIndicator: h2,
  loadingMessage: qh,
  menu: Mh,
  menuList: Kh,
  menuPortal: e2,
  multiValue: L2,
  multiValueLabel: k2,
  multiValueRemove: O2,
  noOptionsMessage: $h,
  option: M2,
  placeholder: E2,
  singleValue: $2,
  valueContainer: b2
}, zW = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, wW = 4, i0 = 4, SW = 38, LW = i0 * 2, kW = {
  baseUnit: i0,
  controlHeight: SW,
  menuGutter: LW
}, Pn = {
  borderRadius: wW,
  colors: zW,
  spacing: kW
}, OW = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: ls(),
  captureMenuScroll: !ls(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: rW(),
  formatGroupLabel: YW,
  getOptionLabel: d0,
  getOptionValue: b0,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: NW,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !wh(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(c) {
    var e = c.count;
    return "".concat(e, " result").concat(e !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function Gs(t, c, e, l) {
  var n = o0(t, c, e), d = u0(t, c, e), b = s0(t, c), i = Kl(t, c);
  return {
    type: "option",
    data: c,
    isDisabled: n,
    isSelected: d,
    label: b,
    value: i,
    index: l
  };
}
function fl(t, c) {
  return t.options.map(function(e, l) {
    if ("options" in e) {
      var n = e.options.map(function(b, i) {
        return Gs(t, b, c, i);
      }).filter(function(b) {
        return ms(t, b);
      });
      return n.length > 0 ? {
        type: "group",
        data: e,
        options: n,
        index: l
      } : void 0;
    }
    var d = Gs(t, e, c, l);
    return ms(t, d) ? d : void 0;
  }).filter(kh);
}
function a0(t) {
  return t.reduce(function(c, e) {
    return e.type === "group" ? c.push.apply(c, ce(e.options.map(function(l) {
      return l.data;
    }))) : c.push(e.data), c;
  }, []);
}
function Hs(t, c) {
  return t.reduce(function(e, l) {
    return l.type === "group" ? e.push.apply(e, ce(l.options.map(function(n) {
      return {
        data: n.data,
        id: "".concat(c, "-").concat(l.index, "-").concat(n.index)
      };
    }))) : e.push({
      data: l.data,
      id: "".concat(c, "-").concat(l.index)
    }), e;
  }, []);
}
function AW(t, c) {
  return a0(fl(t, c));
}
function ms(t, c) {
  var e = t.inputValue, l = e === void 0 ? "" : e, n = c.data, d = c.isSelected, b = c.label, i = c.value;
  return (!x0(t) || !d) && X0(t, {
    label: b,
    value: i,
    data: n
  }, l);
}
function DW(t, c) {
  var e = t.focusedValue, l = t.selectValue, n = l.indexOf(e);
  if (n > -1) {
    var d = c.indexOf(e);
    if (d > -1)
      return e;
    if (n < c.length)
      return c[n];
  }
  return null;
}
function QW(t, c) {
  var e = t.focusedOption;
  return e && c.indexOf(e) > -1 ? e : c[0];
}
var En = function(c, e) {
  var l, n = (l = c.find(function(d) {
    return d.data === e;
  })) === null || l === void 0 ? void 0 : l.id;
  return n || null;
}, s0 = function(c, e) {
  return c.getOptionLabel(e);
}, Kl = function(c, e) {
  return c.getOptionValue(e);
};
function o0(t, c, e) {
  return typeof t.isOptionDisabled == "function" ? t.isOptionDisabled(c, e) : !1;
}
function u0(t, c, e) {
  if (e.indexOf(c) > -1) return !0;
  if (typeof t.isOptionSelected == "function")
    return t.isOptionSelected(c, e);
  var l = Kl(t, c);
  return e.some(function(n) {
    return Kl(t, n) === l;
  });
}
function X0(t, c, e) {
  return t.filterOption ? t.filterOption(c, e) : !0;
}
var x0 = function(c) {
  var e = c.hideSelectedOptions, l = c.isMulti;
  return e === void 0 ? l : e;
}, TW = 1, Jb = /* @__PURE__ */ function(t) {
  ah(e, t);
  var c = uh(e);
  function e(l) {
    var n;
    if (bh(this, e), n = c.call(this, l), n.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: ""
    }, n.blockOptionHover = !1, n.isComposing = !1, n.commonProps = void 0, n.initialTouchX = 0, n.initialTouchY = 0, n.openAfterFocus = !1, n.scrollToFocusedOptionOnUpdate = !1, n.userIsDragging = void 0, n.isAppleDevice = JW(), n.controlRef = null, n.getControlRef = function(a) {
      n.controlRef = a;
    }, n.focusedOptionRef = null, n.getFocusedOptionRef = function(a) {
      n.focusedOptionRef = a;
    }, n.menuListRef = null, n.getMenuListRef = function(a) {
      n.menuListRef = a;
    }, n.inputRef = null, n.getInputRef = function(a) {
      n.inputRef = a;
    }, n.focus = n.focusInput, n.blur = n.blurInput, n.onChange = function(a, s) {
      var o = n.props, u = o.onChange, X = o.name;
      s.name = X, n.ariaOnChange(a, s), u(a, s);
    }, n.setValue = function(a, s, o) {
      var u = n.props, X = u.closeMenuOnSelect, x = u.isMulti, H = u.inputValue;
      n.onInputChange("", {
        action: "set-value",
        prevInputValue: H
      }), X && (n.setState({
        inputIsHiddenAfterUpdate: !x
      }), n.onMenuClose()), n.setState({
        clearFocusValueOnUpdate: !0
      }), n.onChange(a, {
        action: s,
        option: o
      });
    }, n.selectOption = function(a) {
      var s = n.props, o = s.blurInputOnSelect, u = s.isMulti, X = s.name, x = n.state.selectValue, H = u && n.isOptionSelected(a, x), r = n.isOptionDisabled(a, x);
      if (H) {
        var G = n.getOptionValue(a);
        n.setValue(x.filter(function(m) {
          return n.getOptionValue(m) !== G;
        }), "deselect-option", a);
      } else if (!r)
        u ? n.setValue([].concat(ce(x), [a]), "select-option", a) : n.setValue(a, "select-option");
      else {
        n.ariaOnChange(a, {
          action: "select-option",
          option: a,
          name: X
        });
        return;
      }
      o && n.blurInput();
    }, n.removeValue = function(a) {
      var s = n.props.isMulti, o = n.state.selectValue, u = n.getOptionValue(a), X = o.filter(function(H) {
        return n.getOptionValue(H) !== u;
      }), x = ye(s, X, X[0] || null);
      n.onChange(x, {
        action: "remove-value",
        removedValue: a
      }), n.focusInput();
    }, n.clearValue = function() {
      var a = n.state.selectValue;
      n.onChange(ye(n.props.isMulti, [], null), {
        action: "clear",
        removedValues: a
      });
    }, n.popValue = function() {
      var a = n.props.isMulti, s = n.state.selectValue, o = s[s.length - 1], u = s.slice(0, s.length - 1), X = ye(a, u, u[0] || null);
      o && n.onChange(X, {
        action: "pop-value",
        removedValue: o
      });
    }, n.getFocusedOptionId = function(a) {
      return En(n.state.focusableOptionsWithIds, a);
    }, n.getFocusableOptionsWithIds = function() {
      return Hs(fl(n.props, n.state.selectValue), n.getElementId("option"));
    }, n.getValue = function() {
      return n.state.selectValue;
    }, n.cx = function() {
      for (var a = arguments.length, s = new Array(a), o = 0; o < a; o++)
        s[o] = arguments[o];
      return Jh.apply(void 0, [n.props.classNamePrefix].concat(s));
    }, n.getOptionLabel = function(a) {
      return s0(n.props, a);
    }, n.getOptionValue = function(a) {
      return Kl(n.props, a);
    }, n.getStyles = function(a, s) {
      var o = n.props.unstyled, u = CW[a](s, o);
      u.boxSizing = "border-box";
      var X = n.props.styles[a];
      return X ? X(u, s) : u;
    }, n.getClassNames = function(a, s) {
      var o, u;
      return (o = (u = n.props.classNames)[a]) === null || o === void 0 ? void 0 : o.call(u, s);
    }, n.getElementId = function(a) {
      return "".concat(n.state.instancePrefix, "-").concat(a);
    }, n.getComponents = function() {
      return tW(n.props);
    }, n.buildCategorizedOptions = function() {
      return fl(n.props, n.state.selectValue);
    }, n.getCategorizedOptions = function() {
      return n.props.menuIsOpen ? n.buildCategorizedOptions() : [];
    }, n.buildFocusableOptions = function() {
      return a0(n.buildCategorizedOptions());
    }, n.getFocusableOptions = function() {
      return n.props.menuIsOpen ? n.buildFocusableOptions() : [];
    }, n.ariaOnChange = function(a, s) {
      n.setState({
        ariaSelection: T({
          value: a
        }, s)
      });
    }, n.onMenuMouseDown = function(a) {
      a.button === 0 && (a.stopPropagation(), a.preventDefault(), n.focusInput());
    }, n.onMenuMouseMove = function(a) {
      n.blockOptionHover = !1;
    }, n.onControlMouseDown = function(a) {
      if (!a.defaultPrevented) {
        var s = n.props.openMenuOnClick;
        n.state.isFocused ? n.props.menuIsOpen ? a.target.tagName !== "INPUT" && a.target.tagName !== "TEXTAREA" && n.onMenuClose() : s && n.openMenu("first") : (s && (n.openAfterFocus = !0), n.focusInput()), a.target.tagName !== "INPUT" && a.target.tagName !== "TEXTAREA" && a.preventDefault();
      }
    }, n.onDropdownIndicatorMouseDown = function(a) {
      if (!(a && a.type === "mousedown" && a.button !== 0) && !n.props.isDisabled) {
        var s = n.props, o = s.isMulti, u = s.menuIsOpen;
        n.focusInput(), u ? (n.setState({
          inputIsHiddenAfterUpdate: !o
        }), n.onMenuClose()) : n.openMenu("first"), a.preventDefault();
      }
    }, n.onClearIndicatorMouseDown = function(a) {
      a && a.type === "mousedown" && a.button !== 0 || (n.clearValue(), a.preventDefault(), n.openAfterFocus = !1, a.type === "touchend" ? n.focusInput() : setTimeout(function() {
        return n.focusInput();
      }));
    }, n.onScroll = function(a) {
      typeof n.props.closeMenuOnScroll == "boolean" ? a.target instanceof HTMLElement && xn(a.target) && n.props.onMenuClose() : typeof n.props.closeMenuOnScroll == "function" && n.props.closeMenuOnScroll(a) && n.props.onMenuClose();
    }, n.onCompositionStart = function() {
      n.isComposing = !0;
    }, n.onCompositionEnd = function() {
      n.isComposing = !1;
    }, n.onTouchStart = function(a) {
      var s = a.touches, o = s && s.item(0);
      o && (n.initialTouchX = o.clientX, n.initialTouchY = o.clientY, n.userIsDragging = !1);
    }, n.onTouchMove = function(a) {
      var s = a.touches, o = s && s.item(0);
      if (o) {
        var u = Math.abs(o.clientX - n.initialTouchX), X = Math.abs(o.clientY - n.initialTouchY), x = 5;
        n.userIsDragging = u > x || X > x;
      }
    }, n.onTouchEnd = function(a) {
      n.userIsDragging || (n.controlRef && !n.controlRef.contains(a.target) && n.menuListRef && !n.menuListRef.contains(a.target) && n.blurInput(), n.initialTouchX = 0, n.initialTouchY = 0);
    }, n.onControlTouchEnd = function(a) {
      n.userIsDragging || n.onControlMouseDown(a);
    }, n.onClearIndicatorTouchEnd = function(a) {
      n.userIsDragging || n.onClearIndicatorMouseDown(a);
    }, n.onDropdownIndicatorTouchEnd = function(a) {
      n.userIsDragging || n.onDropdownIndicatorMouseDown(a);
    }, n.handleInputChange = function(a) {
      var s = n.props.inputValue, o = a.currentTarget.value;
      n.setState({
        inputIsHiddenAfterUpdate: !1
      }), n.onInputChange(o, {
        action: "input-change",
        prevInputValue: s
      }), n.props.menuIsOpen || n.onMenuOpen();
    }, n.onInputFocus = function(a) {
      n.props.onFocus && n.props.onFocus(a), n.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (n.openAfterFocus || n.props.openMenuOnFocus) && n.openMenu("first"), n.openAfterFocus = !1;
    }, n.onInputBlur = function(a) {
      var s = n.props.inputValue;
      if (n.menuListRef && n.menuListRef.contains(document.activeElement)) {
        n.inputRef.focus();
        return;
      }
      n.props.onBlur && n.props.onBlur(a), n.onInputChange("", {
        action: "input-blur",
        prevInputValue: s
      }), n.onMenuClose(), n.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, n.onOptionHover = function(a) {
      if (!(n.blockOptionHover || n.state.focusedOption === a)) {
        var s = n.getFocusableOptions(), o = s.indexOf(a);
        n.setState({
          focusedOption: a,
          focusedOptionId: o > -1 ? n.getFocusedOptionId(a) : null
        });
      }
    }, n.shouldHideSelectedOptions = function() {
      return x0(n.props);
    }, n.onValueInputFocus = function(a) {
      a.preventDefault(), a.stopPropagation(), n.focus();
    }, n.onKeyDown = function(a) {
      var s = n.props, o = s.isMulti, u = s.backspaceRemovesValue, X = s.escapeClearsValue, x = s.inputValue, H = s.isClearable, r = s.isDisabled, G = s.menuIsOpen, m = s.onKeyDown, Z = s.tabSelectsValue, h = s.openMenuOnFocus, g = n.state, R = g.focusedOption, W = g.focusedValue, p = g.selectValue;
      if (!r && !(typeof m == "function" && (m(a), a.defaultPrevented))) {
        switch (n.blockOptionHover = !0, a.key) {
          case "ArrowLeft":
            if (!o || x) return;
            n.focusValue("previous");
            break;
          case "ArrowRight":
            if (!o || x) return;
            n.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (x) return;
            if (W)
              n.removeValue(W);
            else {
              if (!u) return;
              o ? n.popValue() : H && n.clearValue();
            }
            break;
          case "Tab":
            if (n.isComposing || a.shiftKey || !G || !Z || !R || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            h && n.isOptionSelected(R, p))
              return;
            n.selectOption(R);
            break;
          case "Enter":
            if (a.keyCode === 229)
              break;
            if (G) {
              if (!R || n.isComposing) return;
              n.selectOption(R);
              break;
            }
            return;
          case "Escape":
            G ? (n.setState({
              inputIsHiddenAfterUpdate: !1
            }), n.onInputChange("", {
              action: "menu-close",
              prevInputValue: x
            }), n.onMenuClose()) : H && X && n.clearValue();
            break;
          case " ":
            if (x)
              return;
            if (!G) {
              n.openMenu("first");
              break;
            }
            if (!R) return;
            n.selectOption(R);
            break;
          case "ArrowUp":
            G ? n.focusOption("up") : n.openMenu("last");
            break;
          case "ArrowDown":
            G ? n.focusOption("down") : n.openMenu("first");
            break;
          case "PageUp":
            if (!G) return;
            n.focusOption("pageup");
            break;
          case "PageDown":
            if (!G) return;
            n.focusOption("pagedown");
            break;
          case "Home":
            if (!G) return;
            n.focusOption("first");
            break;
          case "End":
            if (!G) return;
            n.focusOption("last");
            break;
          default:
            return;
        }
        a.preventDefault();
      }
    }, n.state.instancePrefix = "react-select-" + (n.props.instanceId || ++TW), n.state.selectValue = Pl(l.value), l.menuIsOpen && n.state.selectValue.length) {
      var d = n.getFocusableOptionsWithIds(), b = n.buildFocusableOptions(), i = b.indexOf(n.state.selectValue[0]);
      n.state.focusableOptionsWithIds = d, n.state.focusedOption = b[i], n.state.focusedOptionId = En(d, b[i]);
    }
    return n;
  }
  return ih(e, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && es(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(n) {
      var d = this.props, b = d.isDisabled, i = d.menuIsOpen, a = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (a && !b && n.isDisabled || // ensure focus is on the Input when the menu opens
      a && i && !n.menuIsOpen) && this.focusInput(), a && b && !n.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !a && !b && n.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (es(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(n, d) {
      this.props.onInputChange(n, d);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(n) {
      var d = this, b = this.state, i = b.selectValue, a = b.isFocused, s = this.buildFocusableOptions(), o = n === "first" ? 0 : s.length - 1;
      if (!this.props.isMulti) {
        var u = s.indexOf(i[0]);
        u > -1 && (o = u);
      }
      this.scrollToFocusedOptionOnUpdate = !(a && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: s[o],
        focusedOptionId: this.getFocusedOptionId(s[o])
      }, function() {
        return d.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(n) {
      var d = this.state, b = d.selectValue, i = d.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var a = b.indexOf(i);
        i || (a = -1);
        var s = b.length - 1, o = -1;
        if (b.length) {
          switch (n) {
            case "previous":
              a === 0 ? o = 0 : a === -1 ? o = s : o = a - 1;
              break;
            case "next":
              a > -1 && a < s && (o = a + 1);
              break;
          }
          this.setState({
            inputIsHidden: o !== -1,
            focusedValue: b[o]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", d = this.props.pageSize, b = this.state.focusedOption, i = this.getFocusableOptions();
      if (i.length) {
        var a = 0, s = i.indexOf(b);
        b || (s = -1), n === "up" ? a = s > 0 ? s - 1 : i.length - 1 : n === "down" ? a = (s + 1) % i.length : n === "pageup" ? (a = s - d, a < 0 && (a = 0)) : n === "pagedown" ? (a = s + d, a > i.length - 1 && (a = i.length - 1)) : n === "last" && (a = i.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: i[a],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(i[a])
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Pn) : T(T({}, Pn), this.props.theme) : Pn;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var n = this.clearValue, d = this.cx, b = this.getStyles, i = this.getClassNames, a = this.getValue, s = this.selectOption, o = this.setValue, u = this.props, X = u.isMulti, x = u.isRtl, H = u.options, r = this.hasValue();
      return {
        clearValue: n,
        cx: d,
        getStyles: b,
        getClassNames: i,
        getValue: a,
        hasValue: r,
        isMulti: X,
        isRtl: x,
        options: H,
        selectOption: s,
        selectProps: u,
        setValue: o,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var n = this.state.selectValue;
      return n.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var n = this.props, d = n.isClearable, b = n.isMulti;
      return d === void 0 ? b : d;
    }
  }, {
    key: "isOptionDisabled",
    value: function(n, d) {
      return o0(this.props, n, d);
    }
  }, {
    key: "isOptionSelected",
    value: function(n, d) {
      return u0(this.props, n, d);
    }
  }, {
    key: "filterOption",
    value: function(n, d) {
      return X0(this.props, n, d);
    }
  }, {
    key: "formatOptionLabel",
    value: function(n, d) {
      if (typeof this.props.formatOptionLabel == "function") {
        var b = this.props.inputValue, i = this.state.selectValue;
        return this.props.formatOptionLabel(n, {
          context: d,
          inputValue: b,
          selectValue: i
        });
      } else
        return this.getOptionLabel(n);
    }
  }, {
    key: "formatGroupLabel",
    value: function(n) {
      return this.props.formatGroupLabel(n);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var n = this.props, d = n.isDisabled, b = n.isSearchable, i = n.inputId, a = n.inputValue, s = n.tabIndex, o = n.form, u = n.menuIsOpen, X = n.required, x = this.getComponents(), H = x.Input, r = this.state, G = r.inputIsHidden, m = r.ariaSelection, Z = this.commonProps, h = i || this.getElementId("input"), g = T(T(T({
          "aria-autocomplete": "list",
          "aria-expanded": u,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": X,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, u && {
          "aria-controls": this.getElementId("listbox")
        }), !b && {
          "aria-readonly": !0
        }), this.hasValue() ? (m == null ? void 0 : m.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return b ? /* @__PURE__ */ tc.createElement(H, M({}, Z, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: h,
          innerRef: this.getInputRef,
          isDisabled: d,
          isHidden: G,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: s,
          form: o,
          type: "text",
          value: a
        }, g)) : /* @__PURE__ */ tc.createElement(HW, M({
          id: h,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Ul,
          onFocus: this.onInputFocus,
          disabled: d,
          tabIndex: s,
          inputMode: "none",
          form: o,
          value: ""
        }, g));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var n = this, d = this.getComponents(), b = d.MultiValue, i = d.MultiValueContainer, a = d.MultiValueLabel, s = d.MultiValueRemove, o = d.SingleValue, u = d.Placeholder, X = this.commonProps, x = this.props, H = x.controlShouldRenderValue, r = x.isDisabled, G = x.isMulti, m = x.inputValue, Z = x.placeholder, h = this.state, g = h.selectValue, R = h.focusedValue, W = h.isFocused;
      if (!this.hasValue() || !H)
        return m ? null : /* @__PURE__ */ tc.createElement(u, M({}, X, {
          key: "placeholder",
          isDisabled: r,
          isFocused: W,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), Z);
      if (G)
        return g.map(function(y, V) {
          var C = y === R, J = "".concat(n.getOptionLabel(y), "-").concat(n.getOptionValue(y));
          return /* @__PURE__ */ tc.createElement(b, M({}, X, {
            components: {
              Container: i,
              Label: a,
              Remove: s
            },
            isFocused: C,
            isDisabled: r,
            key: J,
            index: V,
            removeProps: {
              onClick: function() {
                return n.removeValue(y);
              },
              onTouchEnd: function() {
                return n.removeValue(y);
              },
              onMouseDown: function(K) {
                K.preventDefault();
              }
            },
            data: y
          }), n.formatOptionLabel(y, "value"));
        });
      if (m)
        return null;
      var p = g[0];
      return /* @__PURE__ */ tc.createElement(o, M({}, X, {
        data: p,
        isDisabled: r
      }), this.formatOptionLabel(p, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var n = this.getComponents(), d = n.ClearIndicator, b = this.commonProps, i = this.props, a = i.isDisabled, s = i.isLoading, o = this.state.isFocused;
      if (!this.isClearable() || !d || a || !this.hasValue() || s)
        return null;
      var u = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ tc.createElement(d, M({}, b, {
        innerProps: u,
        isFocused: o
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var n = this.getComponents(), d = n.LoadingIndicator, b = this.commonProps, i = this.props, a = i.isDisabled, s = i.isLoading, o = this.state.isFocused;
      if (!d || !s) return null;
      var u = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ tc.createElement(d, M({}, b, {
        innerProps: u,
        isDisabled: a,
        isFocused: o
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var n = this.getComponents(), d = n.DropdownIndicator, b = n.IndicatorSeparator;
      if (!d || !b) return null;
      var i = this.commonProps, a = this.props.isDisabled, s = this.state.isFocused;
      return /* @__PURE__ */ tc.createElement(b, M({}, i, {
        isDisabled: a,
        isFocused: s
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var n = this.getComponents(), d = n.DropdownIndicator;
      if (!d) return null;
      var b = this.commonProps, i = this.props.isDisabled, a = this.state.isFocused, s = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ tc.createElement(d, M({}, b, {
        innerProps: s,
        isDisabled: i,
        isFocused: a
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var n = this, d = this.getComponents(), b = d.Group, i = d.GroupHeading, a = d.Menu, s = d.MenuList, o = d.MenuPortal, u = d.LoadingMessage, X = d.NoOptionsMessage, x = d.Option, H = this.commonProps, r = this.state.focusedOption, G = this.props, m = G.captureMenuScroll, Z = G.inputValue, h = G.isLoading, g = G.loadingMessage, R = G.minMenuHeight, W = G.maxMenuHeight, p = G.menuIsOpen, y = G.menuPlacement, V = G.menuPosition, C = G.menuPortalTarget, J = G.menuShouldBlockScroll, Y = G.menuShouldScrollIntoView, K = G.noOptionsMessage, $ = G.onMenuScrollToTop, S = G.onMenuScrollToBottom;
      if (!p) return null;
      var L = function(D, A) {
        var P = D.type, O = D.data, k = D.isDisabled, U = D.isSelected, q = D.label, ec = D.value, Fc = r === O, z = k ? void 0 : function() {
          return n.onOptionHover(O);
        }, Ac = k ? void 0 : function() {
          return n.selectOption(O);
        }, ft = "".concat(n.getElementId("option"), "-").concat(A), Ee = {
          id: ft,
          onClick: Ac,
          onMouseMove: z,
          onMouseOver: z,
          tabIndex: -1,
          role: "option",
          "aria-selected": n.isAppleDevice ? void 0 : U
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ tc.createElement(x, M({}, H, {
          innerProps: Ee,
          data: O,
          isDisabled: k,
          isSelected: U,
          key: ft,
          label: q,
          type: P,
          value: ec,
          isFocused: Fc,
          innerRef: Fc ? n.getFocusedOptionRef : void 0
        }), n.formatOptionLabel(D.data, "menu"));
      }, E;
      if (this.hasOptions())
        E = this.getCategorizedOptions().map(function(w) {
          if (w.type === "group") {
            var D = w.data, A = w.options, P = w.index, O = "".concat(n.getElementId("group"), "-").concat(P), k = "".concat(O, "-heading");
            return /* @__PURE__ */ tc.createElement(b, M({}, H, {
              key: O,
              data: D,
              options: A,
              Heading: i,
              headingProps: {
                id: k,
                data: w.data
              },
              label: n.formatGroupLabel(w.data)
            }), w.options.map(function(U) {
              return L(U, "".concat(P, "-").concat(U.index));
            }));
          } else if (w.type === "option")
            return L(w, "".concat(w.index));
        });
      else if (h) {
        var cc = g({
          inputValue: Z
        });
        if (cc === null) return null;
        E = /* @__PURE__ */ tc.createElement(u, H, cc);
      } else {
        var ic = K({
          inputValue: Z
        });
        if (ic === null) return null;
        E = /* @__PURE__ */ tc.createElement(X, H, ic);
      }
      var F = {
        minMenuHeight: R,
        maxMenuHeight: W,
        menuPlacement: y,
        menuPosition: V,
        menuShouldScrollIntoView: Y
      }, N = /* @__PURE__ */ tc.createElement(Uh, M({}, H, F), function(w) {
        var D = w.ref, A = w.placerProps, P = A.placement, O = A.maxHeight;
        return /* @__PURE__ */ tc.createElement(a, M({}, H, F, {
          innerRef: D,
          innerProps: {
            onMouseDown: n.onMenuMouseDown,
            onMouseMove: n.onMenuMouseMove
          },
          isLoading: h,
          placement: P
        }), /* @__PURE__ */ tc.createElement(pW, {
          captureEnabled: m,
          onTopArrive: $,
          onBottomArrive: S,
          lockEnabled: J
        }, function(k) {
          return /* @__PURE__ */ tc.createElement(s, M({}, H, {
            innerRef: function(q) {
              n.getMenuListRef(q), k(q);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": H.isMulti,
              id: n.getElementId("listbox")
            },
            isLoading: h,
            maxHeight: O,
            focusedOption: r
          }), E);
        }));
      });
      return C || V === "fixed" ? /* @__PURE__ */ tc.createElement(o, M({}, H, {
        appendTo: C,
        controlElement: this.controlRef,
        menuPlacement: y,
        menuPosition: V
      }), N) : N;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var n = this, d = this.props, b = d.delimiter, i = d.isDisabled, a = d.isMulti, s = d.name, o = d.required, u = this.state.selectValue;
      if (o && !this.hasValue() && !i)
        return /* @__PURE__ */ tc.createElement(VW, {
          name: s,
          onFocus: this.onValueInputFocus
        });
      if (!(!s || i))
        if (a)
          if (b) {
            var X = u.map(function(r) {
              return n.getOptionValue(r);
            }).join(b);
            return /* @__PURE__ */ tc.createElement("input", {
              name: s,
              type: "hidden",
              value: X
            });
          } else {
            var x = u.length > 0 ? u.map(function(r, G) {
              return /* @__PURE__ */ tc.createElement("input", {
                key: "i-".concat(G),
                name: s,
                type: "hidden",
                value: n.getOptionValue(r)
              });
            }) : /* @__PURE__ */ tc.createElement("input", {
              name: s,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ tc.createElement("div", null, x);
          }
        else {
          var H = u[0] ? this.getOptionValue(u[0]) : "";
          return /* @__PURE__ */ tc.createElement("input", {
            name: s,
            type: "hidden",
            value: H
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var n = this.commonProps, d = this.state, b = d.ariaSelection, i = d.focusedOption, a = d.focusedValue, s = d.isFocused, o = d.selectValue, u = this.getFocusableOptions();
      return /* @__PURE__ */ tc.createElement(oW, M({}, n, {
        id: this.getElementId("live-region"),
        ariaSelection: b,
        focusedOption: i,
        focusedValue: a,
        isFocused: s,
        selectValue: o,
        focusableOptions: u,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.getComponents(), d = n.Control, b = n.IndicatorsContainer, i = n.SelectContainer, a = n.ValueContainer, s = this.props, o = s.className, u = s.id, X = s.isDisabled, x = s.menuIsOpen, H = this.state.isFocused, r = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ tc.createElement(i, M({}, r, {
        className: o,
        innerProps: {
          id: u,
          onKeyDown: this.onKeyDown
        },
        isDisabled: X,
        isFocused: H
      }), this.renderLiveRegion(), /* @__PURE__ */ tc.createElement(d, M({}, r, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: X,
        isFocused: H,
        menuIsOpen: x
      }), /* @__PURE__ */ tc.createElement(a, M({}, r, {
        isDisabled: X
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ tc.createElement(b, M({}, r, {
        isDisabled: X
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, d) {
      var b = d.prevProps, i = d.clearFocusValueOnUpdate, a = d.inputIsHiddenAfterUpdate, s = d.ariaSelection, o = d.isFocused, u = d.prevWasFocused, X = d.instancePrefix, x = n.options, H = n.value, r = n.menuIsOpen, G = n.inputValue, m = n.isMulti, Z = Pl(H), h = {};
      if (b && (H !== b.value || x !== b.options || r !== b.menuIsOpen || G !== b.inputValue)) {
        var g = r ? AW(n, Z) : [], R = r ? Hs(fl(n, Z), "".concat(X, "-option")) : [], W = i ? DW(d, Z) : null, p = QW(d, g), y = En(R, p);
        h = {
          selectValue: Z,
          focusedOption: p,
          focusedOptionId: y,
          focusableOptionsWithIds: R,
          focusedValue: W,
          clearFocusValueOnUpdate: !1
        };
      }
      var V = a != null && n !== b ? {
        inputIsHidden: a,
        inputIsHiddenAfterUpdate: void 0
      } : {}, C = s, J = o && u;
      return o && !J && (C = {
        value: ye(m, Z, Z[0] || null),
        options: Z,
        action: "initial-input-focus"
      }, J = !u), (s == null ? void 0 : s.action) === "initial-input-focus" && (C = null), T(T(T({}, h), V), {}, {
        prevProps: n,
        ariaSelection: C,
        prevWasFocused: J
      });
    }
  }]), e;
}(Vs);
Jb.defaultProps = OW;
var jW = /* @__PURE__ */ $l(function(t, c) {
  var e = Su(t);
  return /* @__PURE__ */ tc.createElement(Jb, M({
    ref: c
  }, e));
}), MW = jW, UW = ["allowCreateWhileLoading", "createOptionPosition", "formatCreateLabel", "isValidNewOption", "getNewOptionData", "onCreateOption", "options", "onChange"], Rs = function() {
  var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 ? arguments[1] : void 0, l = arguments.length > 2 ? arguments[2] : void 0, n = String(c).toLowerCase(), d = String(l.getOptionValue(e)).toLowerCase(), b = String(l.getOptionLabel(e)).toLowerCase();
  return d === n || b === n;
}, Kn = {
  formatCreateLabel: function(c) {
    return 'Create "'.concat(c, '"');
  },
  isValidNewOption: function(c, e, l, n) {
    return !(!c || e.some(function(d) {
      return Rs(c, d, n);
    }) || l.some(function(d) {
      return Rs(c, d, n);
    }));
  },
  getNewOptionData: function(c, e) {
    return {
      label: e,
      value: c,
      __isNew__: !0
    };
  }
};
function PW(t) {
  var c = t.allowCreateWhileLoading, e = c === void 0 ? !1 : c, l = t.createOptionPosition, n = l === void 0 ? "last" : l, d = t.formatCreateLabel, b = d === void 0 ? Kn.formatCreateLabel : d, i = t.isValidNewOption, a = i === void 0 ? Kn.isValidNewOption : i, s = t.getNewOptionData, o = s === void 0 ? Kn.getNewOptionData : s, u = t.onCreateOption, X = t.options, x = X === void 0 ? [] : X, H = t.onChange, r = qc(t, UW), G = r.getOptionValue, m = G === void 0 ? b0 : G, Z = r.getOptionLabel, h = Z === void 0 ? d0 : Z, g = r.inputValue, R = r.isLoading, W = r.isMulti, p = r.value, y = r.name, V = Cc(function() {
    return a(g, Pl(p), x, {
      getOptionValue: m,
      getOptionLabel: h
    }) ? o(g, b(g)) : void 0;
  }, [b, o, h, m, g, a, x, p]), C = Cc(function() {
    return (e || !R) && V ? n === "first" ? [V].concat(ce(x)) : [].concat(ce(x), [V]) : x;
  }, [e, n, R, V, x]), J = hc(function(Y, K) {
    if (K.action !== "select-option")
      return H(Y, K);
    var $ = Array.isArray(Y) ? Y : [Y];
    if ($[$.length - 1] === V) {
      if (u) u(g);
      else {
        var S = o(g, g), L = {
          action: "create-option",
          name: y,
          option: S
        };
        H(ye(W, [].concat(ce(Pl(p)), [S]), S), L);
      }
      return;
    }
    H(Y, K);
  }, [o, g, W, y, V, u, H, p]);
  return T(T({}, r), {}, {
    options: C,
    onChange: J
  });
}
var EW = /* @__PURE__ */ $l(function(t, c) {
  var e = Su(t), l = PW(e);
  return /* @__PURE__ */ tc.createElement(Jb, M({
    ref: c
  }, l));
}), KW = EW;
function r0() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const _W = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1mbqnj24"
} : {
  target: "e1mbqnj24",
  label: "CheckOptionContainer"
})("display:flex;flex-direction:row;align-items:center;gap:", (t) => t.theme.spaces.minimal, ";" + (process.env.NODE_ENV === "production" ? "" : ""));
function $W(t) {
  const c = kc(), {
    children: e,
    ...l
  } = t, n = l.isSelected ? c.colors.tint.purple : c.colors.text.tertiary, d = !["*", "-"].includes(l.value);
  return /* @__PURE__ */ I(rn.Option, { ...l, children: /* @__PURE__ */ Hc(_W, { children: [
    d && /* @__PURE__ */ I(rt, { name: l.isSelected ? "CircleCheck" : "CircleCheckRegular", color: n, size: 20 }),
    e
  ] }) });
}
function qW() {
  const t = kc();
  return /* @__PURE__ */ I(rt, { name: "CaretDown", color: t.colors.text.tertiary });
}
const c1 = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1mbqnj23"
} : {
  target: "e1mbqnj23",
  label: "ClearIndicatorContainer"
})("border-right:", (t) => t.theme.hairlineBorder, ";margin-right:5px;padding-right:8px;" + (process.env.NODE_ENV === "production" ? "" : ""));
function t1(t) {
  const c = kc(), {
    innerProps: e
  } = t;
  return /* @__PURE__ */ I(c1, { ...e, children: /* @__PURE__ */ I(rt, { name: "XMark", color: c.colors.text.tertiary }) });
}
const e1 = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1mbqnj22"
} : {
  target: "e1mbqnj22",
  label: "MultiValueStyled"
})(process.env.NODE_ENV === "production" ? {
  name: "1jsis53",
  styles: "&:not(:last-of-type)::after{content:',';margin-right:3px;}"
} : {
  name: "1jsis53",
  styles: "&:not(:last-of-type)::after{content:',';margin-right:3px;}",
  toString: r0
});
function l1(t) {
  return /* @__PURE__ */ I(e1, { ...t.innerProps, style: t.getStyles("multiValue", t), children: t.children });
}
function n1(t) {
  return /* @__PURE__ */ I(rn.Menu, { ...t, className: "menu--open" });
}
const d1 = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1mbqnj21"
} : {
  target: "e1mbqnj21",
  label: "MultiValueRemove"
})(process.env.NODE_ENV === "production" ? {
  name: "eivff4",
  styles: "display:none"
} : {
  name: "eivff4",
  styles: "display:none",
  toString: r0
}), b1 = Xt`
	0% {
		opacity: 0;
		transform: translateY(-5px) scaleY(95%);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`, i1 = Xt`
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(-5px) scaleY(95%);
	}
`, a1 = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e1mbqnj20"
} : {
  target: "e1mbqnj20",
  label: "SelectContainer"
})(".menu--open{transform-origin:top center;animation:", b1, " 0.2s ease-out;}.menu--close{transform-origin:top center;animation:", i1, " 0.2s ease-out;}" + (process.env.NODE_ENV === "production" ? "" : ""));
function j1(t) {
  const c = kc(), e = pc(null), l = {
    color: c.colors.text.secondary,
    fontWeight: "400",
    fontSize: "15px"
  }, n = Cc(() => t.allowCreation ? KW : MW, [t.allowCreation]);
  return /* @__PURE__ */ I(a1, { children: /* @__PURE__ */ I(n, { ...t, ref: e, unstyled: !0, styles: {
    container: (d) => ({
      ...d,
      color: c.colors.text.secondary
    }),
    control: (d, b) => ({
      ...d,
      backgroundColor: c.colors.background.overlay,
      outline: b.isFocused ? `2px solid ${c.colors.tint.purple}` : `0px solid ${c.colors.tint.purple}`,
      transition: ".1s linear outline",
      borderRadius: "10px",
      padding: "12px 15px",
      cursor: "pointer"
    }),
    singleValue: (d) => ({
      ...d,
      ...l
    }),
    placeholder: (d) => ({
      ...d,
      ...l,
      color: c.colors.text.tertiary,
      opacity: "50%"
    }),
    option: (d, b) => ({
      ...d,
      ...l,
      padding: "12px 15px",
      backgroundColor: b.isFocused ? c.colors.background.overlay : "none",
      transition: ".1s linear background-color",
      cursor: "pointer",
      opacity: b.isDisabled ? "0.7" : "1.0"
    }),
    menu: (d) => ({
      ...d,
      backgroundColor: c.colors.background.card,
      boxShadow: c.cardShadow,
      borderRadius: "10px",
      top: "calc(100% + 7px)",
      border: c.hairlineBorder,
      overflow: "hidden"
    }),
    menuList: (d) => ({
      ...d,
      overflowY: "scroll",
      maxHeight: `${t.maxMenuHeight}px`
    }),
    noOptionsMessage: (d) => ({
      ...d,
      ...l,
      color: c.colors.text.tertiary,
      opacity: "50%",
      padding: "10px 0"
    }),
    valueContainer: (d) => ({
      ...d,
      flexWrap: "nowrap"
    }),
    multiValue: (d) => ({
      ...d,
      ...l,
      flexShrink: 0
    }),
    input: (d) => ({
      ...d,
      ...l
    })
  }, components: {
    ClearIndicator: t1,
    DropdownIndicator: qW,
    Menu: n1,
    MultiValue: l1,
    MultiValueRemove: d1,
    Option: t.isMulti ? $W : rn.Option
  }, onMenuClose: () => {
    var o, u;
    (o = t.onMenuClose) == null || o.call(t);
    const d = (u = e.current) == null ? void 0 : u.menuListRef;
    if (!d) return;
    const b = d.parentElement, i = b == null ? void 0 : b.parentElement, a = b == null ? void 0 : b.cloneNode(!0);
    if (!a) return;
    const s = a.firstChild;
    a.classList.add("menu--close"), a.addEventListener("animationend", () => {
      i == null || i.removeChild(a);
    }), i == null || i.appendChild(a), s.scrollTop = d.scrollTop;
  } }) });
}
function Od() {
  return Od = Object.assign ? Object.assign.bind() : function(t) {
    for (var c = 1; c < arguments.length; c++) {
      var e = arguments[c];
      for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && (t[l] = e[l]);
    }
    return t;
  }, Od.apply(this, arguments);
}
var s1 = vc.createElement("svg", { viewBox: "-2 -5 14 20", height: "100%", width: "100%", style: { position: "absolute", top: 0 } }, vc.createElement("path", { d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12", fill: "#fff", fillRule: "evenodd" })), o1 = vc.createElement("svg", { height: "100%", width: "100%", viewBox: "-2 -5 17 21", style: { position: "absolute", top: 0 } }, vc.createElement("path", { d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0", fill: "#fff", fillRule: "evenodd" }));
function Zs(t) {
  if (t.length === 7) return t;
  for (var c = "#", e = 1; e < 4; e += 1) c += t[e] + t[e];
  return c;
}
function gs(t, c, e, l, n) {
  return function(d, b, i, a, s) {
    var o = (d - i) / (b - i);
    if (o === 0) return a;
    if (o === 1) return s;
    for (var u = "#", X = 1; X < 6; X += 2) {
      var x = parseInt(a.substr(X, 2), 16), H = parseInt(s.substr(X, 2), 16), r = Math.round((1 - o) * x + o * H).toString(16);
      r.length === 1 && (r = "0" + r), u += r;
    }
    return u;
  }(t, c, e, Zs(l), Zs(n));
}
var G0 = function(t) {
  function c(e) {
    t.call(this, e);
    var l = e.height, n = e.width, d = e.checked;
    this.t = e.handleDiameter || l - 2, this.i = Math.max(n - l, n - (l + this.t) / 2), this.o = Math.max(0, (l - this.t) / 2), this.state = { h: d ? this.i : this.o }, this.l = 0, this.u = 0, this.p = this.p.bind(this), this.v = this.v.bind(this), this.k = this.k.bind(this), this.m = this.m.bind(this), this.M = this.M.bind(this), this.T = this.T.bind(this), this.$ = this.$.bind(this), this.C = this.C.bind(this), this.D = this.D.bind(this), this.O = this.O.bind(this), this.S = this.S.bind(this), this.W = this.W.bind(this);
  }
  return t && (c.__proto__ = t), (c.prototype = Object.create(t && t.prototype)).constructor = c, c.prototype.componentDidMount = function() {
    this.I = !0;
  }, c.prototype.componentDidUpdate = function(e) {
    e.checked !== this.props.checked && this.setState({ h: this.props.checked ? this.i : this.o });
  }, c.prototype.componentWillUnmount = function() {
    this.I = !1;
  }, c.prototype.H = function(e) {
    this.R.focus(), this.setState({ j: e, B: !0, L: Date.now() });
  }, c.prototype.N = function(e) {
    var l = this.state, n = l.j, d = l.h, b = (this.props.checked ? this.i : this.o) + e - n;
    l.U || e === n || this.setState({ U: !0 });
    var i = Math.min(this.i, Math.max(this.o, b));
    i !== d && this.setState({ h: i });
  }, c.prototype.A = function(e) {
    var l = this.state, n = l.h, d = l.U, b = l.L, i = this.props.checked, a = (this.i + this.o) / 2;
    this.setState({ h: this.props.checked ? this.i : this.o });
    var s = Date.now() - b;
    (!d || s < 250 || i && n <= a || !i && n >= a) && this.X(e), this.I && this.setState({ U: !1, B: !1 }), this.l = Date.now();
  }, c.prototype.p = function(e) {
    e.preventDefault(), typeof e.button == "number" && e.button !== 0 || (this.H(e.clientX), window.addEventListener("mousemove", this.v), window.addEventListener("mouseup", this.k));
  }, c.prototype.v = function(e) {
    e.preventDefault(), this.N(e.clientX);
  }, c.prototype.k = function(e) {
    this.A(e), window.removeEventListener("mousemove", this.v), window.removeEventListener("mouseup", this.k);
  }, c.prototype.m = function(e) {
    this.F = null, this.H(e.touches[0].clientX);
  }, c.prototype.M = function(e) {
    this.N(e.touches[0].clientX);
  }, c.prototype.T = function(e) {
    e.preventDefault(), this.A(e);
  }, c.prototype.C = function(e) {
    Date.now() - this.l > 50 && (this.X(e), Date.now() - this.u > 50 && this.I && this.setState({ B: !1 }));
  }, c.prototype.D = function() {
    this.u = Date.now();
  }, c.prototype.O = function() {
    this.setState({ B: !0 });
  }, c.prototype.S = function() {
    this.setState({ B: !1 });
  }, c.prototype.W = function(e) {
    this.R = e;
  }, c.prototype.$ = function(e) {
    e.preventDefault(), this.R.focus(), this.X(e), this.I && this.setState({ B: !1 });
  }, c.prototype.X = function(e) {
    var l = this.props;
    (0, l.onChange)(!l.checked, e, l.id);
  }, c.prototype.render = function() {
    var e = this.props, l = e.checked, n = e.disabled, d = e.className, b = e.offColor, i = e.onColor, a = e.offHandleColor, s = e.onHandleColor, o = e.checkedIcon, u = e.uncheckedIcon, X = e.checkedHandleIcon, x = e.uncheckedHandleIcon, H = e.boxShadow, r = e.activeBoxShadow, G = e.height, m = e.width, Z = e.borderRadius, h = function(S, L) {
      var E = {};
      for (var cc in S) Object.prototype.hasOwnProperty.call(S, cc) && L.indexOf(cc) === -1 && (E[cc] = S[cc]);
      return E;
    }(e, ["checked", "disabled", "className", "offColor", "onColor", "offHandleColor", "onHandleColor", "checkedIcon", "uncheckedIcon", "checkedHandleIcon", "uncheckedHandleIcon", "boxShadow", "activeBoxShadow", "height", "width", "borderRadius", "handleDiameter"]), g = this.state, R = g.h, W = g.U, p = g.B, y = { position: "relative", display: "inline-block", textAlign: "left", opacity: n ? 0.5 : 1, direction: "ltr", borderRadius: G / 2, WebkitTransition: "opacity 0.25s", MozTransition: "opacity 0.25s", transition: "opacity 0.25s", touchAction: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none", userSelect: "none" }, V = { height: G, width: m, margin: Math.max(0, (this.t - G) / 2), position: "relative", background: gs(R, this.i, this.o, b, i), borderRadius: typeof Z == "number" ? Z : G / 2, cursor: n ? "default" : "pointer", WebkitTransition: W ? null : "background 0.25s", MozTransition: W ? null : "background 0.25s", transition: W ? null : "background 0.25s" }, C = { height: G, width: Math.min(1.5 * G, m - (this.t + G) / 2 + 1), position: "relative", opacity: (R - this.o) / (this.i - this.o), pointerEvents: "none", WebkitTransition: W ? null : "opacity 0.25s", MozTransition: W ? null : "opacity 0.25s", transition: W ? null : "opacity 0.25s" }, J = { height: G, width: Math.min(1.5 * G, m - (this.t + G) / 2 + 1), position: "absolute", opacity: 1 - (R - this.o) / (this.i - this.o), right: 0, top: 0, pointerEvents: "none", WebkitTransition: W ? null : "opacity 0.25s", MozTransition: W ? null : "opacity 0.25s", transition: W ? null : "opacity 0.25s" }, Y = { height: this.t, width: this.t, background: gs(R, this.i, this.o, a, s), display: "inline-block", cursor: n ? "default" : "pointer", borderRadius: typeof Z == "number" ? Z - 1 : "50%", position: "absolute", transform: "translateX(" + R + "px)", top: Math.max(0, (G - this.t) / 2), outline: 0, boxShadow: p ? r : H, border: 0, WebkitTransition: W ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s", MozTransition: W ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s", transition: W ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s" }, K = { height: this.t, width: this.t, opacity: Math.max(2 * (1 - (R - this.o) / (this.i - this.o) - 0.5), 0), position: "absolute", left: 0, top: 0, pointerEvents: "none", WebkitTransition: W ? null : "opacity 0.25s", MozTransition: W ? null : "opacity 0.25s", transition: W ? null : "opacity 0.25s" }, $ = { height: this.t, width: this.t, opacity: Math.max(2 * ((R - this.o) / (this.i - this.o) - 0.5), 0), position: "absolute", left: 0, top: 0, pointerEvents: "none", WebkitTransition: W ? null : "opacity 0.25s", MozTransition: W ? null : "opacity 0.25s", transition: W ? null : "opacity 0.25s" };
    return vc.createElement("div", { className: d, style: y }, vc.createElement("div", { className: "react-switch-bg", style: V, onClick: n ? null : this.$, onMouseDown: function(S) {
      return S.preventDefault();
    } }, o && vc.createElement("div", { style: C }, o), u && vc.createElement("div", { style: J }, u)), vc.createElement("div", { className: "react-switch-handle", style: Y, onClick: function(S) {
      return S.preventDefault();
    }, onMouseDown: n ? null : this.p, onTouchStart: n ? null : this.m, onTouchMove: n ? null : this.M, onTouchEnd: n ? null : this.T, onTouchCancel: n ? null : this.S }, x && vc.createElement("div", { style: K }, x), X && vc.createElement("div", { style: $ }, X)), vc.createElement("input", Od({}, { type: "checkbox", role: "switch", "aria-checked": l, checked: l, disabled: n, style: { border: 0, clip: "rect(0 0 0 0)", height: 1, margin: -1, overflow: "hidden", padding: 0, position: "absolute", width: 1 } }, h, { ref: this.W, onFocus: this.O, onBlur: this.S, onKeyUp: this.D, onChange: this.C })));
  }, c;
}(Vs);
G0.defaultProps = { disabled: !1, offColor: "#888", onColor: "#080", offHandleColor: "#fff", onHandleColor: "#fff", uncheckedIcon: s1, checkedIcon: o1, boxShadow: null, activeBoxShadow: "0 0 2px 3px #3bf", height: 28, width: 56 };
function M1(t) {
  const c = kc();
  return /* @__PURE__ */ I(G0, { ...t, onColor: c.colors.tint.purple, height: 30, width: 50, handleDiameter: 22, uncheckedIcon: null, checkedIcon: null, activeBoxShadow: null });
}
function u1() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const X1 = ["yellow", "blue"];
var x1 = process.env.NODE_ENV === "production" ? {
  name: "1tsw12p",
  styles: "font-size:14px;padding:6px 7px"
} : {
  name: "1441zfh-TagLabel",
  styles: "font-size:14px;padding:6px 7px;label:TagLabel;",
  toString: u1
};
const r1 = /* @__PURE__ */ B(mo.Small, process.env.NODE_ENV === "production" ? {
  target: "e1xr8ugo0"
} : {
  target: "e1xr8ugo0",
  label: "TagLabel"
})("display:inline-block;background-color:", (t) => t.color === "gray" ? t.theme.colors.background.main : t.color === "outline" ? "transparent" : t.theme.colors.tint[t.color], ";color:", (t) => t.color === "gray" || t.color === "outline" ? t.theme.colors.text.secondary : X1.includes(t.color) ? "black" : "white", ";border-radius:5px;padding:2px 5px;", (t) => t.large && x1, ";", (t) => t.color === "outline" && /* @__PURE__ */ Lc("padding:", t.large ? "5px 6px" : "1px 4px", ";border:1px solid ", t.theme.colors.text.tertiary, ";" + (process.env.NODE_ENV === "production" ? "" : ";label:TagLabel;"), process.env.NODE_ENV === "production" ? "" : ""), ";", (t) => {
  if (t.variant === "tonal") {
    const c = t.theme.colors.tint[t.color] ?? t.theme.colors.text.secondary;
    return /* @__PURE__ */ Lc("background-color:transparent;color:", c, ";position:relative;isolation:isolate;&:before{content:'';display:block;position:absolute;inset:0;border-radius:inherit;background-color:", c, ";opacity:20%;}" + (process.env.NODE_ENV === "production" ? "" : ";label:TagLabel;"), process.env.NODE_ENV === "production" ? "" : "");
  }
}, ";" + (process.env.NODE_ENV === "production" ? "" : ""));
function U1(t) {
  return /* @__PURE__ */ I(r1, { color: t.variant === "outline" ? "outline" : t.color ?? "purple", large: t.large, variant: t.color === "outline" ? "outline" : t.variant ?? "default", children: t.children });
}
const P1 = /* @__PURE__ */ B("div", process.env.NODE_ENV === "production" ? {
  target: "e13tqeih0"
} : {
  target: "e13tqeih0",
  label: "TwoGrid"
})("display:flex;flex-direction:row;flex-wrap:wrap;gap:", (t) => t.theme.spaces.standard, ";>div{box-sizing:border-box;flex-basis:calc((100% - ", (t) => t.theme.spaces.standard, ") / 2);}@media (max-width: 765px){>div{box-sizing:border-box;flex-basis:100%;}}" + (process.env.NODE_ENV === "production" ? "" : ""));
function G1() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const H0 = process.env.NODE_ENV === "production" ? {
  name: "1wezn8n",
  styles: "@font-face{font-family:'one sec Inter';src:url('/fonts/Inter-Regular.ttf') format('truetype');font-weight:400;}@font-face{font-family:'one sec Inter';src:url('/fonts/Inter-Medium.ttf') format('truetype');font-weight:500;}@font-face{font-family:'one sec Inter';src:url('/fonts/Inter-SemiBold.ttf') format('truetype');font-weight:600;}@font-face{font-family:'one sec Inter';src:url('/fonts/Inter-Bold.ttf') format('truetype');font-weight:700;}@font-face{font-family:'one sec Open Runde';src:url('/fonts/OpenRunde-Bold.woff2') format('woff2'),url('/fonts/OpenRunde-Bold.woff') format('woff');font-weight:700;}"
} : {
  name: "1vhecrs-oneSecFontFaceCss",
  styles: "@font-face{font-family:'one sec Inter';src:url('/fonts/Inter-Regular.ttf') format('truetype');font-weight:400;}@font-face{font-family:'one sec Inter';src:url('/fonts/Inter-Medium.ttf') format('truetype');font-weight:500;}@font-face{font-family:'one sec Inter';src:url('/fonts/Inter-SemiBold.ttf') format('truetype');font-weight:600;}@font-face{font-family:'one sec Inter';src:url('/fonts/Inter-Bold.ttf') format('truetype');font-weight:700;}@font-face{font-family:'one sec Open Runde';src:url('/fonts/OpenRunde-Bold.woff2') format('woff2'),url('/fonts/OpenRunde-Bold.woff') format('woff');font-weight:700;};label:oneSecFontFaceCss;",
  toString: G1
};
function H1() {
  const t = kc();
  return /* @__PURE__ */ I(Is, { styles: /* @__PURE__ */ Lc(H0, " *{margin:0;font-family:-apple-system,BlinkMacSystemFont,'one sec Inter',sans-serif;}body{background-color:", t.colors.background.main, ";}body:has(dialog[open]){overflow:hidden;}" + (process.env.NODE_ENV === "production" ? "" : ";label:GlobalStyles;"), process.env.NODE_ENV === "production" ? "" : "") });
}
const hs = (t, c, e, l, n) => /* @__PURE__ */ Lc(`position:relative;background-clip:padding-box;border:solid 1px transparent;&:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;margin:-1px;border-radius:inherit;background:linear-gradient(
			to bottom,
			rgba(`, t, ", ", c, ", ", e, ", ", l, `),
			rgba(`, t, ", ", c, ", ", e, ", ", n, `)
		);}` + (process.env.NODE_ENV === "production" ? "" : ";label:glossBorderMixin;"), process.env.NODE_ENV === "production" ? "" : ""), m1 = (t) => ({
  pixelValue: t,
  size: `${t}px`,
  whenActive: (c) => /* @__PURE__ */ Lc("@media (max-width: ", t, "px){", c, ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:whenActive;"), process.env.NODE_ENV === "production" ? "" : ""),
  whenInactive: (c) => /* @__PURE__ */ Lc("@media (min-width: ", t + 1, "px){", c, ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:whenInactive;"), process.env.NODE_ENV === "production" ? "" : "")
}), Ws = {
  spaces: {
    minimal: "10px",
    standard: "20px",
    double: "40px",
    maximal: "80px"
  },
  sizes: {
    sidebarWidth: "300px",
    cardRadius: "20px",
    pageWidth: "1000px"
  },
  breakpoints: {
    compact: m1(780)
  }
}, mt = {
  purple: "#7F7FDE",
  yellow: "#FED766",
  red: "#FB3640",
  blue: "#B8F3FF",
  green: "#00C261"
}, ps = "0 2px 4px rgba(0, 0, 0, 0.03)", ys = "0 4px 10px rgba(0, 0, 0, 0.16)", _l = {
  light: {
    name: "light",
    ...Ws,
    colors: {
      background: {
        absolute: "#FFFFFF",
        main: "#F5F5FA",
        card: "#FFFFFF",
        overlay: "#EBEBF0"
      },
      text: {
        primary: "#222222",
        secondary: "rgba(0, 0, 0, 0.7)",
        tertiary: "rgba(0, 0, 0, 0.5)",
        highlight: "#3D3D99",
        tint: {
          purple: mt.purple,
          yellow: "#E6AB00",
          red: mt.red,
          blue: "#789EA6",
          green: "#09B860"
        }
      },
      tint: mt,
      hairline: "#DCDCE1"
    },
    hairlineBorder: "1px solid #DCDCE1",
    transparentHairlineBorder: "1px solid rgba(0, 0, 0, 0.1)",
    cardShadow: ps,
    modalShadow: ys,
    modalBackdrop: "rgba(0, 0, 0, 0.3)",
    mixins: {
      glossBorder: hs(0, 0, 0, 0.03, 0.09)
    }
  },
  dark: {
    name: "dark",
    ...Ws,
    colors: {
      background: {
        absolute: "#000000",
        main: "#1C1C1E",
        card: "#2C2C2E",
        overlay: "#252527"
      },
      text: {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
        tertiary: "rgba(255, 255, 255, 0.5)",
        highlight: "#B2B2FF",
        tint: {
          purple: "#B2B2FF",
          yellow: mt.yellow,
          red: mt.red,
          blue: mt.blue,
          green: mt.green
        }
      },
      tint: mt,
      hairline: "#333335"
    },
    hairlineBorder: "1px solid #333335",
    transparentHairlineBorder: "1px solid rgba(255, 255, 255, 0.1)",
    cardShadow: ps,
    modalShadow: ys,
    modalBackdrop: "rgba(0, 0, 0, 0.45)",
    mixins: {
      glossBorder: hs(255, 255, 255, 0.15, 0.05)
    }
  }
};
function R1() {
  const t = kc();
  return /* @__PURE__ */ I(Is, { styles: /* @__PURE__ */ Lc(H0, " *{}body{background-color:", t.colors.background.main, ";}body:has(dialog[open]){overflow:hidden;}" + (process.env.NODE_ENV === "production" ? "" : ";label:GlobalStylesWebsite;"), process.env.NODE_ENV === "production" ? "" : "") });
}
function m0() {
  return jg("(prefers-color-scheme: dark)");
}
function R0() {
  if (process.env.NODE_ENV !== "development")
    return;
  const t = console.error.bind(console), c = /The pseudo class "[^"]+" is potentially unsafe when doing server-side rendering./g;
  return console.error = (...[e, ...l]) => {
    typeof e == "string" && c.test(e) || t(e, ...l);
  }, () => {
    console.error = t;
  };
}
function E1(t) {
  const {
    darkMode: c,
    children: e
  } = t, l = m0(), n = (c === void 0 ? l : c) ? _l.dark : _l.light;
  return Cc(() => R0(), []), /* @__PURE__ */ Hc(Fs, { theme: n, children: [
    /* @__PURE__ */ I(H1, {}),
    e
  ] });
}
function K1(t) {
  const {
    darkMode: c,
    children: e
  } = t, l = m0(), n = (c === void 0 ? l : c) ? _l.dark : _l.light;
  return Cc(() => R0(), []), /* @__PURE__ */ Hc(Fs, { theme: n, children: [
    /* @__PURE__ */ I(R1, {}),
    e
  ] });
}
export {
  B1 as AlertProvider,
  nb as Anchor,
  V1 as AnchorLink,
  J1 as Avatar,
  ee as Button,
  Io as Card,
  Y1 as Cell,
  N1 as Checkbox,
  C1 as ContactModal,
  lH as ContactPage,
  z1 as FavIcon,
  lb as Heading,
  pi as HideUntil,
  rt as Icon,
  w1 as Input,
  mo as Label,
  O1 as LineChart,
  hg as Logotype,
  ho as Modal,
  A1 as NavigationBar,
  D1 as PageContainer,
  Q1 as PageSection,
  jc as Paragraph,
  Wo as PlainLink,
  T1 as Popover,
  F1 as Round,
  j1 as Select,
  Bg as Separator,
  kG as ShowUntil,
  M1 as Switch,
  U1 as Tag,
  E1 as ThemeProvider,
  K1 as ThemeProviderWebsite,
  S1 as TransparentInput,
  P1 as TwoGrid,
  v1 as dismissAction,
  xG as getTextWidth,
  H0 as oneSecFontFaceCss,
  f1 as useAlert,
  OG as useBreakpoint,
  yG as useModalOpen
};
