/*! For license information please see main.7555c073.js.LICENSE.txt */
!(function () {
  var e = {
    694: function (e, t) {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function a() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var i = typeof n;
              if ("string" === i || "number" === i) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var o = a.apply(null, n);
                  o && e.push(o);
                }
              } else if ("object" === i)
                if (n.toString === Object.prototype.toString)
                  for (var s in n) r.call(n, s) && n[s] && e.push(s);
                else e.push(n.toString());
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((a.default = a), (e.exports = a))
          : void 0 ===
          (n = function () {
            return a;
          }.apply(t, [])) || (e.exports = n);
      })();
    },
    176: function (e) {
      "use strict";
      e.exports = function (e, t, n, r, a, i, o, s) {
        if (!e) {
          var l;
          if (void 0 === t)
            l = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var u = [n, r, a, i, o, s],
              c = 0;
            (l = new Error(
              t.replace(/%s/g, function () {
                return u[c++];
              })
            )).name = "Invariant Violation";
          }
          throw ((l.framesToPop = 1), l);
        }
      };
    },
    725: function (e) {
      "use strict";
      var t = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;
      function a(e) {
        if (null === e || void 0 === e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
            Object.keys(Object.assign({}, r)).join("")
          );
        } catch (a) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, i) {
          for (var o, s, l = a(e), u = 1; u < arguments.length; u++) {
            for (var c in (o = Object(arguments[u])))
              n.call(o, c) && (l[c] = o[c]);
            if (t) {
              s = t(o);
              for (var d = 0; d < s.length; d++)
                r.call(o, s[d]) && (l[s[d]] = o[s[d]]);
            }
          }
          return l;
        };
    },
    888: function (e, t, n) {
      "use strict";
      var r = n(47);
      function a() { }
      function i() { }
      (i.resetWarningCache = a),
        (e.exports = function () {
          function e(e, t, n, a, i, o) {
            if (o !== r) {
              var s = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: a,
          };
          return (n.PropTypes = n), n;
        });
    },
    7: function (e, t, n) {
      e.exports = n(888)();
    },
    47: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    463: function (e, t, n) {
      "use strict";
      var r = n(791),
        a = n(725),
        i = n(296);
      function o(e) {
        for (
          var t =
            "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      if (!r) throw Error(o(227));
      var s = new Set(),
        l = {};
      function u(e, t) {
        c(e, t), c(e + "Capture", t);
      }
      function c(e, t) {
        for (l[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
      }
      var d = !(
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
      ),
        f =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        p = Object.prototype.hasOwnProperty,
        h = {},
        v = {};
      function m(e, t, n, r, a, i, o) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = a),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = i),
          (this.removeEmptyString = o);
      }
      var g = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          g[e] = new m(e, 0, !1, e, null, !1, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          g[t] = new m(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          g[e] = new m(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          g[e] = new m(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          g[e] = new m(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          g[e] = new m(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var y = /[\-:]([a-z])/g;
      function b(e) {
        return e[1].toUpperCase();
      }
      function x(e, t, n, r) {
        var a = g.hasOwnProperty(t) ? g[t] : null;
        (null !== a
          ? 0 === a.type
          : !r &&
          2 < t.length &&
          ("o" === t[0] || "O" === t[0]) &&
          ("n" === t[1] || "N" === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null === t ||
              "undefined" === typeof t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                        "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                return (
                  !!p.call(v, e) ||
                  (!p.call(h, e) &&
                    (f.test(e) ? (v[e] = !0) : ((h[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
                ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
                : ((t = a.attributeName),
                  (r = a.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(y, b);
          g[t] = new m(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(y, b);
          g[t] = new m(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (g.xlinkHref = new m(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        E = 60103,
        S = 60106,
        C = 60107,
        k = 60108,
        T = 60114,
        P = 60109,
        j = 60110,
        O = 60112,
        M = 60113,
        N = 60120,
        L = 60115,
        A = 60116,
        z = 60121,
        _ = 60128,
        R = 60129,
        D = 60130,
        V = 60131;
      if ("function" === typeof Symbol && Symbol.for) {
        var I = Symbol.for;
        (E = I("react.element")),
          (S = I("react.portal")),
          (C = I("react.fragment")),
          (k = I("react.strict_mode")),
          (T = I("react.profiler")),
          (P = I("react.provider")),
          (j = I("react.context")),
          (O = I("react.forward_ref")),
          (M = I("react.suspense")),
          (N = I("react.suspense_list")),
          (L = I("react.memo")),
          (A = I("react.lazy")),
          (z = I("react.block")),
          I("react.scope"),
          (_ = I("react.opaque.id")),
          (R = I("react.debug_trace_mode")),
          (D = I("react.offscreen")),
          (V = I("react.legacy_hidden"));
      }
      var F,
        B = "function" === typeof Symbol && Symbol.iterator;
      function H(e) {
        return null === e || "object" !== typeof e
          ? null
          : "function" === typeof (e = (B && e[B]) || e["@@iterator"])
            ? e
            : null;
      }
      function W(e) {
        if (void 0 === F)
          try {
            throw Error();
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            F = (t && t[1]) || "";
          }
        return "\n" + F + e;
      }
      var U = !1;
      function G(e, t) {
        if (!e || U) return "";
        U = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (
              ((t = function () {
                throw Error();
              }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (l) {
                var r = l;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (l) {
                r = l;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (l) {
              r = l;
            }
            e();
          }
        } catch (l) {
          if (l && r && "string" === typeof l.stack) {
            for (
              var a = l.stack.split("\n"),
              i = r.stack.split("\n"),
              o = a.length - 1,
              s = i.length - 1;
              1 <= o && 0 <= s && a[o] !== i[s];

            )
              s--;
            for (; 1 <= o && 0 <= s; o--, s--)
              if (a[o] !== i[s]) {
                if (1 !== o || 1 !== s)
                  do {
                    if ((o--, 0 > --s || a[o] !== i[s]))
                      return "\n" + a[o].replace(" at new ", " at ");
                  } while (1 <= o && 0 <= s);
                break;
              }
          }
        } finally {
          (U = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : "") ? W(e) : "";
      }
      function $(e) {
        switch (e.tag) {
          case 5:
            return W(e.type);
          case 16:
            return W("Lazy");
          case 13:
            return W("Suspense");
          case 19:
            return W("SuspenseList");
          case 0:
          case 2:
          case 15:
            return (e = G(e.type, !1));
          case 11:
            return (e = G(e.type.render, !1));
          case 22:
            return (e = G(e.type._render, !1));
          case 1:
            return (e = G(e.type, !0));
          default:
            return "";
        }
      }
      function Y(e) {
        if (null == e) return null;
        if ("function" === typeof e) return e.displayName || e.name || null;
        if ("string" === typeof e) return e;
        switch (e) {
          case C:
            return "Fragment";
          case S:
            return "Portal";
          case T:
            return "Profiler";
          case k:
            return "StrictMode";
          case M:
            return "Suspense";
          case N:
            return "SuspenseList";
        }
        if ("object" === typeof e)
          switch (e.$$typeof) {
            case j:
              return (e.displayName || "Context") + ".Consumer";
            case P:
              return (e._context.displayName || "Context") + ".Provider";
            case O:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ""),
                e.displayName ||
                ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case L:
              return Y(e.type);
            case z:
              return Y(e._render);
            case A:
              (t = e._payload), (e = e._init);
              try {
                return Y(e(t));
              } catch (n) { }
          }
        return null;
      }
      function q(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return e;
          default:
            return "";
        }
      }
      function X(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function Z(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = X(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              "undefined" !== typeof n &&
              "function" === typeof n.get &&
              "function" === typeof n.set
            ) {
              var a = n.get,
                i = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return a.call(this);
                  },
                  set: function (e) {
                    (r = "" + e), i.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = "" + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function Q(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = X(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function K(e) {
        if (
          "undefined" ===
          typeof (e =
            e || ("undefined" !== typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function J(e, t) {
        var n = t.checked;
        return a({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function ee(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = q(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value,
          });
      }
      function te(e, t) {
        null != (t = t.checked) && x(e, "checked", t, !1);
      }
      function ne(e, t) {
        te(e, t);
        var n = q(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
            (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? ae(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
          ae(e, t.type, q(t.defaultValue)),
          null == t.checked &&
          null != t.defaultChecked &&
          (e.defaultChecked = !!t.defaultChecked);
      }
      function re(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        "" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n);
      }
      function ae(e, t, n) {
        ("number" === t && K(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      function ie(e, t) {
        return (
          (e = a({ children: void 0 }, t)),
          (t = (function (e) {
            var t = "";
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function oe(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
          for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== a && (e[n].selected = a),
              a && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + q(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n)
              return (
                (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
              );
            null !== t || e[a].disabled || (t = e[a]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function se(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return a({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        });
      }
      function le(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(o(92));
            if (Array.isArray(n)) {
              if (!(1 >= n.length)) throw Error(o(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ""), (n = t);
        }
        e._wrapperState = { initialValue: q(n) };
      }
      function ue(e, t) {
        var n = q(t.value),
          r = q(t.defaultValue);
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r);
      }
      function ce(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          "" !== t &&
          null !== t &&
          (e.value = t);
      }
      var de = "http://www.w3.org/1999/xhtml",
        fe = "http://www.w3.org/2000/svg";
      function pe(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function he(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? pe(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
      }
      var ve,
        me,
        ge =
          ((me = function (e, t) {
            if (e.namespaceURI !== fe || "innerHTML" in e) e.innerHTML = t;
            else {
              for (
                (ve = ve || document.createElement("div")).innerHTML =
                "<svg>" + t.valueOf().toString() + "</svg>",
                t = ve.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild;) e.appendChild(t.firstChild);
            }
          }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return me(e, t);
                });
              }
              : me);
      function ye(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var be = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
        xe = ["Webkit", "ms", "Moz", "O"];
      function we(e, t, n) {
        return null == t || "boolean" === typeof t || "" === t
          ? ""
          : n ||
            "number" !== typeof t ||
            0 === t ||
            (be.hasOwnProperty(e) && be[e])
            ? ("" + t).trim()
            : t + "px";
      }
      function Ee(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              a = we(n, t[n], r);
            "float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, a) : (e[n] = a);
          }
      }
      Object.keys(be).forEach(function (e) {
        xe.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
            (be[t] = be[e]);
        });
      });
      var Se = a(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function Ce(e, t) {
        if (t) {
          if (
            Se[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(o(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(o(60));
            if (
              "object" !== typeof t.dangerouslySetInnerHTML ||
              !("__html" in t.dangerouslySetInnerHTML)
            )
              throw Error(o(61));
          }
          if (null != t.style && "object" !== typeof t.style)
            throw Error(o(62));
        }
      }
      function ke(e, t) {
        if (-1 === e.indexOf("-")) return "string" === typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      function Te(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var Pe = null,
        je = null,
        Oe = null;
      function Me(e) {
        if ((e = ra(e))) {
          if ("function" !== typeof Pe) throw Error(o(280));
          var t = e.stateNode;
          t && ((t = ia(t)), Pe(e.stateNode, e.type, t));
        }
      }
      function Ne(e) {
        je ? (Oe ? Oe.push(e) : (Oe = [e])) : (je = e);
      }
      function Le() {
        if (je) {
          var e = je,
            t = Oe;
          if (((Oe = je = null), Me(e), t))
            for (e = 0; e < t.length; e++) Me(t[e]);
        }
      }
      function Ae(e, t) {
        return e(t);
      }
      function ze(e, t, n, r, a) {
        return e(t, n, r, a);
      }
      function _e() { }
      var Re = Ae,
        De = !1,
        Ve = !1;
      function Ie() {
        (null === je && null === Oe) || (_e(), Le());
      }
      function Fe(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = ia(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
        return n;
      }
      var Be = !1;
      if (d)
        try {
          var He = {};
          Object.defineProperty(He, "passive", {
            get: function () {
              Be = !0;
            },
          }),
            window.addEventListener("test", He, He),
            window.removeEventListener("test", He, He);
        } catch (me) {
          Be = !1;
        }
      function We(e, t, n, r, a, i, o, s, l) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, u);
        } catch (c) {
          this.onError(c);
        }
      }
      var Ue = !1,
        Ge = null,
        $e = !1,
        Ye = null,
        qe = {
          onError: function (e) {
            (Ue = !0), (Ge = e);
          },
        };
      function Xe(e, t, n, r, a, i, o, s, l) {
        (Ue = !1), (Ge = null), We.apply(qe, arguments);
      }
      function Ze(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return;) t = t.return;
        else {
          e = t;
          do {
            0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function Qe(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t &&
              null !== (e = e.alternate) &&
              (t = e.memoizedState),
              null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function Ke(e) {
        if (Ze(e) !== e) throw Error(o(188));
      }
      function Je(e) {
        if (
          ((e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Ze(e))) throw Error(o(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ;) {
              var a = n.return;
              if (null === a) break;
              var i = a.alternate;
              if (null === i) {
                if (null !== (r = a.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (a.child === i.child) {
                for (i = a.child; i;) {
                  if (i === n) return Ke(a), e;
                  if (i === r) return Ke(a), t;
                  i = i.sibling;
                }
                throw Error(o(188));
              }
              if (n.return !== r.return) (n = a), (r = i);
              else {
                for (var s = !1, l = a.child; l;) {
                  if (l === n) {
                    (s = !0), (n = a), (r = i);
                    break;
                  }
                  if (l === r) {
                    (s = !0), (r = a), (n = i);
                    break;
                  }
                  l = l.sibling;
                }
                if (!s) {
                  for (l = i.child; l;) {
                    if (l === n) {
                      (s = !0), (n = i), (r = a);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = i), (n = a);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) throw Error(o(189));
                }
              }
              if (n.alternate !== r) throw Error(o(190));
            }
            if (3 !== n.tag) throw Error(o(188));
            return n.stateNode.current === n ? e : t;
          })(e)),
            !e)
        )
          return null;
        for (var t = e; ;) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling;) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      function et(e, t) {
        for (var n = e.alternate; null !== t;) {
          if (t === e || t === n) return !0;
          t = t.return;
        }
        return !1;
      }
      var tt,
        nt,
        rt,
        at,
        it = !1,
        ot = [],
        st = null,
        lt = null,
        ut = null,
        ct = new Map(),
        dt = new Map(),
        ft = [],
        pt =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
          );
      function ht(e, t, n, r, a) {
        return {
          blockedOn: e,
          domEventName: t,
          eventSystemFlags: 16 | n,
          nativeEvent: a,
          targetContainers: [r],
        };
      }
      function vt(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            st = null;
            break;
          case "dragenter":
          case "dragleave":
            lt = null;
            break;
          case "mouseover":
          case "mouseout":
            ut = null;
            break;
          case "pointerover":
          case "pointerout":
            ct.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            dt.delete(t.pointerId);
        }
      }
      function mt(e, t, n, r, a, i) {
        return null === e || e.nativeEvent !== i
          ? ((e = ht(t, n, r, a, i)),
            null !== t && null !== (t = ra(t)) && nt(t),
            e)
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== a && -1 === t.indexOf(a) && t.push(a),
            e);
      }
      function gt(e) {
        var t = na(e.target);
        if (null !== t) {
          var n = Ze(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Qe(n)))
                return (
                  (e.blockedOn = t),
                  void at(e.lanePriority, function () {
                    i.unstable_runWithPriority(e.priority, function () {
                      rt(n);
                    });
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function yt(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
          var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n)
            return null !== (t = ra(n)) && nt(t), (e.blockedOn = n), !1;
          t.shift();
        }
        return !0;
      }
      function bt(e, t, n) {
        yt(e) && n.delete(t);
      }
      function xt() {
        for (it = !1; 0 < ot.length;) {
          var e = ot[0];
          if (null !== e.blockedOn) {
            null !== (e = ra(e.blockedOn)) && tt(e);
            break;
          }
          for (var t = e.targetContainers; 0 < t.length;) {
            var n = Jt(
              e.domEventName,
              e.eventSystemFlags,
              t[0],
              e.nativeEvent
            );
            if (null !== n) {
              e.blockedOn = n;
              break;
            }
            t.shift();
          }
          null === e.blockedOn && ot.shift();
        }
        null !== st && yt(st) && (st = null),
          null !== lt && yt(lt) && (lt = null),
          null !== ut && yt(ut) && (ut = null),
          ct.forEach(bt),
          dt.forEach(bt);
      }
      function wt(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
            it ||
            ((it = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, xt)));
      }
      function Et(e) {
        function t(t) {
          return wt(t, e);
        }
        if (0 < ot.length) {
          wt(ot[0], e);
          for (var n = 1; n < ot.length; n++) {
            var r = ot[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== st && wt(st, e),
          null !== lt && wt(lt, e),
          null !== ut && wt(ut, e),
          ct.forEach(t),
          dt.forEach(t),
          n = 0;
          n < ft.length;
          n++
        )
          (r = ft[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < ft.length && null === (n = ft[0]).blockedOn;)
          gt(n), null === n.blockedOn && ft.shift();
      }
      function St(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var Ct = {
        animationend: St("Animation", "AnimationEnd"),
        animationiteration: St("Animation", "AnimationIteration"),
        animationstart: St("Animation", "AnimationStart"),
        transitionend: St("Transition", "TransitionEnd"),
      },
        kt = {},
        Tt = {};
      function Pt(e) {
        if (kt[e]) return kt[e];
        if (!Ct[e]) return e;
        var t,
          n = Ct[e];
        for (t in n)
          if (n.hasOwnProperty(t) && t in Tt) return (kt[e] = n[t]);
        return e;
      }
      d &&
        ((Tt = document.createElement("div").style),
          "AnimationEvent" in window ||
          (delete Ct.animationend.animation,
            delete Ct.animationiteration.animation,
            delete Ct.animationstart.animation),
          "TransitionEvent" in window || delete Ct.transitionend.transition);
      var jt = Pt("animationend"),
        Ot = Pt("animationiteration"),
        Mt = Pt("animationstart"),
        Nt = Pt("transitionend"),
        Lt = new Map(),
        At = new Map(),
        zt = [
          "abort",
          "abort",
          jt,
          "animationEnd",
          Ot,
          "animationIteration",
          Mt,
          "animationStart",
          "canplay",
          "canPlay",
          "canplaythrough",
          "canPlayThrough",
          "durationchange",
          "durationChange",
          "emptied",
          "emptied",
          "encrypted",
          "encrypted",
          "ended",
          "ended",
          "error",
          "error",
          "gotpointercapture",
          "gotPointerCapture",
          "load",
          "load",
          "loadeddata",
          "loadedData",
          "loadedmetadata",
          "loadedMetadata",
          "loadstart",
          "loadStart",
          "lostpointercapture",
          "lostPointerCapture",
          "playing",
          "playing",
          "progress",
          "progress",
          "seeking",
          "seeking",
          "stalled",
          "stalled",
          "suspend",
          "suspend",
          "timeupdate",
          "timeUpdate",
          Nt,
          "transitionEnd",
          "waiting",
          "waiting",
        ];
      function _t(e, t) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n],
            a = e[n + 1];
          (a = "on" + (a[0].toUpperCase() + a.slice(1))),
            At.set(r, t),
            Lt.set(r, a),
            u(a, [r]);
        }
      }
      (0, i.unstable_now)();
      var Rt = 8;
      function Dt(e) {
        if (0 !== (1 & e)) return (Rt = 15), 1;
        if (0 !== (2 & e)) return (Rt = 14), 2;
        if (0 !== (4 & e)) return (Rt = 13), 4;
        var t = 24 & e;
        return 0 !== t
          ? ((Rt = 12), t)
          : 0 !== (32 & e)
            ? ((Rt = 11), 32)
            : 0 !== (t = 192 & e)
              ? ((Rt = 10), t)
              : 0 !== (256 & e)
                ? ((Rt = 9), 256)
                : 0 !== (t = 3584 & e)
                  ? ((Rt = 8), t)
                  : 0 !== (4096 & e)
                    ? ((Rt = 7), 4096)
                    : 0 !== (t = 4186112 & e)
                      ? ((Rt = 6), t)
                      : 0 !== (t = 62914560 & e)
                        ? ((Rt = 5), t)
                        : 67108864 & e
                          ? ((Rt = 4), 67108864)
                          : 0 !== (134217728 & e)
                            ? ((Rt = 3), 134217728)
                            : 0 !== (t = 805306368 & e)
                              ? ((Rt = 2), t)
                              : 0 !== (1073741824 & e)
                                ? ((Rt = 1), 1073741824)
                                : ((Rt = 8), e);
      }
      function Vt(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return (Rt = 0);
        var r = 0,
          a = 0,
          i = e.expiredLanes,
          o = e.suspendedLanes,
          s = e.pingedLanes;
        if (0 !== i) (r = i), (a = Rt = 15);
        else if (0 !== (i = 134217727 & n)) {
          var l = i & ~o;
          0 !== l
            ? ((r = Dt(l)), (a = Rt))
            : 0 !== (s &= i) && ((r = Dt(s)), (a = Rt));
        } else
          0 !== (i = n & ~o)
            ? ((r = Dt(i)), (a = Rt))
            : 0 !== s && ((r = Dt(s)), (a = Rt));
        if (0 === r) return 0;
        if (
          ((r = n & (((0 > (r = 31 - Ut(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 === (t & o))
        ) {
          if ((Dt(t), a <= Rt)) return t;
          Rt = a;
        }
        if (0 !== (t = e.entangledLanes))
          for (e = e.entanglements, t &= r; 0 < t;)
            (a = 1 << (n = 31 - Ut(t))), (r |= e[n]), (t &= ~a);
        return r;
      }
      function It(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes)
          ? e
          : 1073741824 & e
            ? 1073741824
            : 0;
      }
      function Ft(e, t) {
        switch (e) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return 0 === (e = Bt(24 & ~t)) ? Ft(10, t) : e;
          case 10:
            return 0 === (e = Bt(192 & ~t)) ? Ft(8, t) : e;
          case 8:
            return (
              0 === (e = Bt(3584 & ~t)) &&
              0 === (e = Bt(4186112 & ~t)) &&
              (e = 512),
              e
            );
          case 2:
            return 0 === (t = Bt(805306368 & ~t)) && (t = 268435456), t;
        }
        throw Error(o(358, e));
      }
      function Bt(e) {
        return e & -e;
      }
      function Ht(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function Wt(e, t, n) {
        e.pendingLanes |= t;
        var r = t - 1;
        (e.suspendedLanes &= r),
          (e.pingedLanes &= r),
          ((e = e.eventTimes)[(t = 31 - Ut(t))] = n);
      }
      var Ut = Math.clz32
        ? Math.clz32
        : function (e) {
          return 0 === e ? 32 : (31 - ((Gt(e) / $t) | 0)) | 0;
        },
        Gt = Math.log,
        $t = Math.LN2;
      var Yt = i.unstable_UserBlockingPriority,
        qt = i.unstable_runWithPriority,
        Xt = !0;
      function Zt(e, t, n, r) {
        De || _e();
        var a = Kt,
          i = De;
        De = !0;
        try {
          ze(a, e, t, n, r);
        } finally {
          (De = i) || Ie();
        }
      }
      function Qt(e, t, n, r) {
        qt(Yt, Kt.bind(null, e, t, n, r));
      }
      function Kt(e, t, n, r) {
        var a;
        if (Xt)
          if ((a = 0 === (4 & t)) && 0 < ot.length && -1 < pt.indexOf(e))
            (e = ht(null, e, t, n, r)), ot.push(e);
          else {
            var i = Jt(e, t, n, r);
            if (null === i) a && vt(e, r);
            else {
              if (a) {
                if (-1 < pt.indexOf(e))
                  return (e = ht(i, e, t, n, r)), void ot.push(e);
                if (
                  (function (e, t, n, r, a) {
                    switch (t) {
                      case "focusin":
                        return (st = mt(st, e, t, n, r, a)), !0;
                      case "dragenter":
                        return (lt = mt(lt, e, t, n, r, a)), !0;
                      case "mouseover":
                        return (ut = mt(ut, e, t, n, r, a)), !0;
                      case "pointerover":
                        var i = a.pointerId;
                        return (
                          ct.set(i, mt(ct.get(i) || null, e, t, n, r, a)), !0
                        );
                      case "gotpointercapture":
                        return (
                          (i = a.pointerId),
                          dt.set(i, mt(dt.get(i) || null, e, t, n, r, a)),
                          !0
                        );
                    }
                    return !1;
                  })(i, e, t, n, r)
                )
                  return;
                vt(e, r);
              }
              _r(e, t, r, null, n);
            }
          }
      }
      function Jt(e, t, n, r) {
        var a = Te(r);
        if (null !== (a = na(a))) {
          var i = Ze(a);
          if (null === i) a = null;
          else {
            var o = i.tag;
            if (13 === o) {
              if (null !== (a = Qe(i))) return a;
              a = null;
            } else if (3 === o) {
              if (i.stateNode.hydrate)
                return 3 === i.tag ? i.stateNode.containerInfo : null;
              a = null;
            } else i !== a && (a = null);
          }
        }
        return _r(e, t, r, a, n), null;
      }
      var en = null,
        tn = null,
        nn = null;
      function rn() {
        if (nn) return nn;
        var e,
          t,
          n = tn,
          r = n.length,
          a = "value" in en ? en.value : en.textContent,
          i = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
        return (nn = a.slice(e, 1 < t ? 1 - t : void 0));
      }
      function an(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function on() {
        return !0;
      }
      function sn() {
        return !1;
      }
      function ln(e) {
        function t(t, n, r, a, i) {
          for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
            e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
          return (
            (this.isDefaultPrevented = (
              null != a.defaultPrevented
                ? a.defaultPrevented
                : !1 === a.returnValue
            )
              ? on
              : sn),
            (this.isPropagationStopped = sn),
            this
          );
        }
        return (
          a(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : "unknown" !== typeof e.returnValue &&
                  (e.returnValue = !1),
                  (this.isDefaultPrevented = on));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : "unknown" !== typeof e.cancelBubble &&
                  (e.cancelBubble = !0),
                  (this.isPropagationStopped = on));
            },
            persist: function () { },
            isPersistent: on,
          }),
          t
        );
      }
      var un,
        cn,
        dn,
        fn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        pn = ln(fn),
        hn = a({}, fn, { view: 0, detail: 0 }),
        vn = ln(hn),
        mn = a({}, hn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: jn,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return "movementX" in e
              ? e.movementX
              : (e !== dn &&
                (dn && "mousemove" === e.type
                  ? ((un = e.screenX - dn.screenX),
                    (cn = e.screenY - dn.screenY))
                  : (cn = un = 0),
                  (dn = e)),
                un);
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : cn;
          },
        }),
        gn = ln(mn),
        yn = ln(a({}, mn, { dataTransfer: 0 })),
        bn = ln(a({}, hn, { relatedTarget: 0 })),
        xn = ln(
          a({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        wn = a({}, fn, {
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
        En = ln(wn),
        Sn = ln(a({}, fn, { data: 0 })),
        Cn = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        kn = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        Tn = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function Pn(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = Tn[e]) && !!t[e];
      }
      function jn() {
        return Pn;
      }
      var On = a({}, hn, {
        key: function (e) {
          if (e.key) {
            var t = Cn[e.key] || e.key;
            if ("Unidentified" !== t) return t;
          }
          return "keypress" === e.type
            ? 13 === (e = an(e))
              ? "Enter"
              : String.fromCharCode(e)
            : "keydown" === e.type || "keyup" === e.type
              ? kn[e.keyCode] || "Unidentified"
              : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: jn,
        charCode: function (e) {
          return "keypress" === e.type ? an(e) : 0;
        },
        keyCode: function (e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
        },
        which: function (e) {
          return "keypress" === e.type
            ? an(e)
            : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
        },
      }),
        Mn = ln(On),
        Nn = ln(
          a({}, mn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })
        ),
        Ln = ln(
          a({}, hn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: jn,
          })
        ),
        An = ln(
          a({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        zn = a({}, mn, {
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
        _n = ln(zn),
        Rn = [9, 13, 27, 32],
        Dn = d && "CompositionEvent" in window,
        Vn = null;
      d && "documentMode" in document && (Vn = document.documentMode);
      var In = d && "TextEvent" in window && !Vn,
        Fn = d && (!Dn || (Vn && 8 < Vn && 11 >= Vn)),
        Bn = String.fromCharCode(32),
        Hn = !1;
      function Wn(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== Rn.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function Un(e) {
        return "object" === typeof (e = e.detail) && "data" in e
          ? e.data
          : null;
      }
      var Gn = !1;
      var $n = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Yn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!$n[e.type] : "textarea" === t;
      }
      function qn(e, t, n, r) {
        Ne(r),
          0 < (t = Dr(t, "onChange")).length &&
          ((n = new pn("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
      }
      var Xn = null,
        Zn = null;
      function Qn(e) {
        Or(e, 0);
      }
      function Kn(e) {
        if (Q(aa(e))) return e;
      }
      function Jn(e, t) {
        if ("change" === e) return t;
      }
      var er = !1;
      if (d) {
        var tr;
        if (d) {
          var nr = "oninput" in document;
          if (!nr) {
            var rr = document.createElement("div");
            rr.setAttribute("oninput", "return;"),
              (nr = "function" === typeof rr.oninput);
          }
          tr = nr;
        } else tr = !1;
        er = tr && (!document.documentMode || 9 < document.documentMode);
      }
      function ar() {
        Xn && (Xn.detachEvent("onpropertychange", ir), (Zn = Xn = null));
      }
      function ir(e) {
        if ("value" === e.propertyName && Kn(Zn)) {
          var t = [];
          if ((qn(t, Zn, e, Te(e)), (e = Qn), De)) e(t);
          else {
            De = !0;
            try {
              Ae(e, t);
            } finally {
              (De = !1), Ie();
            }
          }
        }
      }
      function or(e, t, n) {
        "focusin" === e
          ? (ar(), (Zn = n), (Xn = t).attachEvent("onpropertychange", ir))
          : "focusout" === e && ar();
      }
      function sr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Kn(Zn);
      }
      function lr(e, t) {
        if ("click" === e) return Kn(t);
      }
      function ur(e, t) {
        if ("input" === e || "change" === e) return Kn(t);
      }
      var cr =
        "function" === typeof Object.is
          ? Object.is
          : function (e, t) {
            return (
              (e === t && (0 !== e || 1 / e === 1 / t)) ||
              (e !== e && t !== t)
            );
          },
        dr = Object.prototype.hasOwnProperty;
      function fr(e, t) {
        if (cr(e, t)) return !0;
        if (
          "object" !== typeof e ||
          null === e ||
          "object" !== typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!dr.call(t, n[r]) || !cr(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      function pr(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e;
      }
      function hr(e, t) {
        var n,
          r = pr(e);
        for (e = 0; r;) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r;) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = pr(r);
        }
      }
      function vr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? vr(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function mr() {
        for (var e = window, t = K(); t instanceof e.HTMLIFrameElement;) {
          try {
            var n = "string" === typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = K((e = t.contentWindow).document);
        }
        return t;
      }
      function gr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      var yr = d && "documentMode" in document && 11 >= document.documentMode,
        br = null,
        xr = null,
        wr = null,
        Er = !1;
      function Sr(e, t, n) {
        var r =
          n.window === n
            ? n.document
            : 9 === n.nodeType
              ? n
              : n.ownerDocument;
        Er ||
          null == br ||
          br !== K(r) ||
          ("selectionStart" in (r = br) && gr(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
              anchorNode: (r = (
                (r.ownerDocument && r.ownerDocument.defaultView) ||
                window
              ).getSelection()).anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            }),
            (wr && fr(wr, r)) ||
            ((wr = r),
              0 < (r = Dr(xr, "onSelect")).length &&
              ((t = new pn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = br))));
      }
      _t(
        "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
          " "
        ),
        0
      ),
        _t(
          "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
            " "
          ),
          1
        ),
        _t(zt, 2);
      for (
        var Cr =
          "change selectionchange textInput compositionstart compositionend compositionupdate".split(
            " "
          ),
        kr = 0;
        kr < Cr.length;
        kr++
      )
        At.set(Cr[kr], 0);
      c("onMouseEnter", ["mouseout", "mouseover"]),
        c("onMouseLeave", ["mouseout", "mouseover"]),
        c("onPointerEnter", ["pointerout", "pointerover"]),
        c("onPointerLeave", ["pointerout", "pointerover"]),
        u(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(
            " "
          )
        ),
        u(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " "
          )
        ),
        u("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste",
        ]),
        u(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(
            " "
          )
        ),
        u(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(
            " "
          )
        ),
        u(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(
            " "
          )
        );
      var Tr =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
        Pr = new Set(
          "cancel close invalid load scroll toggle".split(" ").concat(Tr)
        );
      function jr(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = n),
          (function (e, t, n, r, a, i, s, l, u) {
            if ((Xe.apply(this, arguments), Ue)) {
              if (!Ue) throw Error(o(198));
              var c = Ge;
              (Ue = !1), (Ge = null), $e || (($e = !0), (Ye = c));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function Or(e, t) {
        t = 0 !== (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            a = r.event;
          r = r.listeners;
          e: {
            var i = void 0;
            if (t)
              for (var o = r.length - 1; 0 <= o; o--) {
                var s = r[o],
                  l = s.instance,
                  u = s.currentTarget;
                if (((s = s.listener), l !== i && a.isPropagationStopped()))
                  break e;
                jr(a, s, u), (i = l);
              }
            else
              for (o = 0; o < r.length; o++) {
                if (
                  ((l = (s = r[o]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== i && a.isPropagationStopped())
                )
                  break e;
                jr(a, s, u), (i = l);
              }
          }
        }
        if ($e) throw ((e = Ye), ($e = !1), (Ye = null), e);
      }
      function Mr(e, t) {
        var n = oa(t),
          r = e + "__bubble";
        n.has(r) || (zr(t, e, 2, !1), n.add(r));
      }
      var Nr = "_reactListening" + Math.random().toString(36).slice(2);
      function Lr(e) {
        e[Nr] ||
          ((e[Nr] = !0),
            s.forEach(function (t) {
              Pr.has(t) || Ar(t, !1, e, null), Ar(t, !0, e, null);
            }));
      }
      function Ar(e, t, n, r) {
        var a =
          4 < arguments.length && void 0 !== arguments[4]
            ? arguments[4]
            : 0,
          i = n;
        if (
          ("selectionchange" === e &&
            9 !== n.nodeType &&
            (i = n.ownerDocument),
            null !== r && !t && Pr.has(e))
        ) {
          if ("scroll" !== e) return;
          (a |= 2), (i = r);
        }
        var o = oa(i),
          s = e + "__" + (t ? "capture" : "bubble");
        o.has(s) || (t && (a |= 4), zr(i, e, a, t), o.add(s));
      }
      function zr(e, t, n, r) {
        var a = At.get(t);
        switch (void 0 === a ? 2 : a) {
          case 0:
            a = Zt;
            break;
          case 1:
            a = Qt;
            break;
          default:
            a = Kt;
        }
        (n = a.bind(null, t, n, e)),
          (a = void 0),
          !Be ||
          ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
          (a = !0),
          r
            ? void 0 !== a
              ? e.addEventListener(t, n, { capture: !0, passive: a })
              : e.addEventListener(t, n, !0)
            : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
      }
      function _r(e, t, n, r, a) {
        var i = r;
        if (0 === (1 & t) && 0 === (2 & t) && null !== r)
          e: for (; ;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
              var s = r.stateNode.containerInfo;
              if (s === a || (8 === s.nodeType && s.parentNode === a)) break;
              if (4 === o)
                for (o = r.return; null !== o;) {
                  var l = o.tag;
                  if (
                    (3 === l || 4 === l) &&
                    ((l = o.stateNode.containerInfo) === a ||
                      (8 === l.nodeType && l.parentNode === a))
                  )
                    return;
                  o = o.return;
                }
              for (; null !== s;) {
                if (null === (o = na(s))) return;
                if (5 === (l = o.tag) || 6 === l) {
                  r = i = o;
                  continue e;
                }
                s = s.parentNode;
              }
            }
            r = r.return;
          }
        !(function (e, t, n) {
          if (Ve) return e(t, n);
          Ve = !0;
          try {
            Re(e, t, n);
          } finally {
            (Ve = !1), Ie();
          }
        })(function () {
          var r = i,
            a = Te(n),
            o = [];
          e: {
            var s = Lt.get(e);
            if (void 0 !== s) {
              var l = pn,
                u = e;
              switch (e) {
                case "keypress":
                  if (0 === an(n)) break e;
                case "keydown":
                case "keyup":
                  l = Mn;
                  break;
                case "focusin":
                  (u = "focus"), (l = bn);
                  break;
                case "focusout":
                  (u = "blur"), (l = bn);
                  break;
                case "beforeblur":
                case "afterblur":
                  l = bn;
                  break;
                case "click":
                  if (2 === n.button) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  l = gn;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  l = yn;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  l = Ln;
                  break;
                case jt:
                case Ot:
                case Mt:
                  l = xn;
                  break;
                case Nt:
                  l = An;
                  break;
                case "scroll":
                  l = vn;
                  break;
                case "wheel":
                  l = _n;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  l = En;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  l = Nn;
              }
              var c = 0 !== (4 & t),
                d = !c && "scroll" === e,
                f = c ? (null !== s ? s + "Capture" : null) : s;
              c = [];
              for (var p, h = r; null !== h;) {
                var v = (p = h).stateNode;
                if (
                  (5 === p.tag &&
                    null !== v &&
                    ((p = v),
                      null !== f &&
                      null != (v = Fe(h, f)) &&
                      c.push(Rr(h, v, p))),
                    d)
                )
                  break;
                h = h.return;
              }
              0 < c.length &&
                ((s = new l(s, u, null, n, a)),
                  o.push({ event: s, listeners: c }));
            }
          }
          if (0 === (7 & t)) {
            if (
              ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  0 !== (16 & t) ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!na(u) && !u[ea])) &&
                (l || s) &&
                ((s =
                  a.window === a
                    ? a
                    : (s = a.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                      (u = (u = n.relatedTarget || n.toElement)
                        ? na(u)
                        : null) &&
                      (u !== (d = Ze(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                      (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
            ) {
              if (
                ((c = gn),
                  (v = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                  ((c = Nn),
                    (v = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == l ? s : aa(l)),
                  (p = null == u ? s : aa(u)),
                  ((s = new c(v, h + "leave", l, n, a)).target = d),
                  (s.relatedTarget = p),
                  (v = null),
                  na(a) === r &&
                  (((c = new c(f, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (v = c)),
                  (d = v),
                  l && u)
              )
                e: {
                  for (f = u, h = 0, p = c = l; p; p = Vr(p)) h++;
                  for (p = 0, v = f; v; v = Vr(v)) p++;
                  for (; 0 < h - p;) (c = Vr(c)), h--;
                  for (; 0 < p - h;) (f = Vr(f)), p--;
                  for (; h--;) {
                    if (c === f || (null !== f && c === f.alternate)) break e;
                    (c = Vr(c)), (f = Vr(f));
                  }
                  c = null;
                }
              else c = null;
              null !== l && Ir(o, s, l, c, !1),
                null !== u && null !== d && Ir(o, d, u, c, !0);
            }
            if (
              "select" ===
              (l =
                (s = r ? aa(r) : window).nodeName &&
                s.nodeName.toLowerCase()) ||
              ("input" === l && "file" === s.type)
            )
              var m = Jn;
            else if (Yn(s))
              if (er) m = ur;
              else {
                m = sr;
                var g = or;
              }
            else
              (l = s.nodeName) &&
                "input" === l.toLowerCase() &&
                ("checkbox" === s.type || "radio" === s.type) &&
                (m = lr);
            switch (
            (m && (m = m(e, r))
              ? qn(o, m, n, a)
              : (g && g(e, s, r),
                "focusout" === e &&
                (g = s._wrapperState) &&
                g.controlled &&
                "number" === s.type &&
                ae(s, "number", s.value)),
              (g = r ? aa(r) : window),
              e)
            ) {
              case "focusin":
                (Yn(g) || "true" === g.contentEditable) &&
                  ((br = g), (xr = r), (wr = null));
                break;
              case "focusout":
                wr = xr = br = null;
                break;
              case "mousedown":
                Er = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                (Er = !1), Sr(o, n, a);
                break;
              case "selectionchange":
                if (yr) break;
              case "keydown":
              case "keyup":
                Sr(o, n, a);
            }
            var y;
            if (Dn)
              e: {
                switch (e) {
                  case "compositionstart":
                    var b = "onCompositionStart";
                    break e;
                  case "compositionend":
                    b = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    b = "onCompositionUpdate";
                    break e;
                }
                b = void 0;
              }
            else
              Gn
                ? Wn(e, n) && (b = "onCompositionEnd")
                : "keydown" === e &&
                229 === n.keyCode &&
                (b = "onCompositionStart");
            b &&
              (Fn &&
                "ko" !== n.locale &&
                (Gn || "onCompositionStart" !== b
                  ? "onCompositionEnd" === b && Gn && (y = rn())
                  : ((tn = "value" in (en = a) ? en.value : en.textContent),
                    (Gn = !0))),
                0 < (g = Dr(r, b)).length &&
                ((b = new Sn(b, e, null, n, a)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
              (y = In
                ? (function (e, t) {
                  switch (e) {
                    case "compositionend":
                      return Un(t);
                    case "keypress":
                      return 32 !== t.which ? null : ((Hn = !0), Bn);
                    case "textInput":
                      return (e = t.data) === Bn && Hn ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
                : (function (e, t) {
                  if (Gn)
                    return "compositionend" === e || (!Dn && Wn(e, t))
                      ? ((e = rn()), (nn = tn = en = null), (Gn = !1), e)
                      : null;
                  switch (e) {
                    case "paste":
                    default:
                      return null;
                    case "keypress":
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case "compositionend":
                      return Fn && "ko" !== t.locale ? null : t.data;
                  }
                })(e, n)) &&
              0 < (r = Dr(r, "onBeforeInput")).length &&
              ((a = new Sn("onBeforeInput", "beforeinput", null, n, a)),
                o.push({ event: a, listeners: r }),
                (a.data = y));
          }
          Or(o, t);
        });
      }
      function Rr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Dr(e, t) {
        for (var n = t + "Capture", r = []; null !== e;) {
          var a = e,
            i = a.stateNode;
          5 === a.tag &&
            null !== i &&
            ((a = i),
              null != (i = Fe(e, n)) && r.unshift(Rr(e, i, a)),
              null != (i = Fe(e, t)) && r.push(Rr(e, i, a))),
            (e = e.return);
        }
        return r;
      }
      function Vr(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Ir(e, t, n, r, a) {
        for (var i = t._reactName, o = []; null !== n && n !== r;) {
          var s = n,
            l = s.alternate,
            u = s.stateNode;
          if (null !== l && l === r) break;
          5 === s.tag &&
            null !== u &&
            ((s = u),
              a
                ? null != (l = Fe(n, i)) && o.unshift(Rr(n, l, s))
                : a || (null != (l = Fe(n, i)) && o.push(Rr(n, l, s)))),
            (n = n.return);
        }
        0 !== o.length && e.push({ event: t, listeners: o });
      }
      function Fr() { }
      var Br = null,
        Hr = null;
      function Wr(e, t) {
        switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!t.autoFocus;
        }
        return !1;
      }
      function Ur(e, t) {
        return (
          "textarea" === e ||
          "option" === e ||
          "noscript" === e ||
          "string" === typeof t.children ||
          "number" === typeof t.children ||
          ("object" === typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var Gr = "function" === typeof setTimeout ? setTimeout : void 0,
        $r = "function" === typeof clearTimeout ? clearTimeout : void 0;
      function Yr(e) {
        1 === e.nodeType
          ? (e.textContent = "")
          : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
      }
      function qr(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function Xr(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e;
              t--;
            } else "/$" === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var Zr = 0;
      var Qr = Math.random().toString(36).slice(2),
        Kr = "__reactFiber$" + Qr,
        Jr = "__reactProps$" + Qr,
        ea = "__reactContainer$" + Qr,
        ta = "__reactEvents$" + Qr;
      function na(e) {
        var t = e[Kr];
        if (t) return t;
        for (var n = e.parentNode; n;) {
          if ((t = n[ea] || n[Kr])) {
            if (
              ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
            )
              for (e = Xr(e); null !== e;) {
                if ((n = e[Kr])) return n;
                e = Xr(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function ra(e) {
        return !(e = e[Kr] || e[ea]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function aa(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33));
      }
      function ia(e) {
        return e[Jr] || null;
      }
      function oa(e) {
        var t = e[ta];
        return void 0 === t && (t = e[ta] = new Set()), t;
      }
      var sa = [],
        la = -1;
      function ua(e) {
        return { current: e };
      }
      function ca(e) {
        0 > la || ((e.current = sa[la]), (sa[la] = null), la--);
      }
      function da(e, t) {
        la++, (sa[la] = e.current), (e.current = t);
      }
      var fa = {},
        pa = ua(fa),
        ha = ua(!1),
        va = fa;
      function ma(e, t) {
        var n = e.type.contextTypes;
        if (!n) return fa;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var a,
          i = {};
        for (a in n) i[a] = t[a];
        return (
          r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
            t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
          i
        );
      }
      function ga(e) {
        return null !== (e = e.childContextTypes) && void 0 !== e;
      }
      function ya() {
        ca(ha), ca(pa);
      }
      function ba(e, t, n) {
        if (pa.current !== fa) throw Error(o(168));
        da(pa, t), da(ha, n);
      }
      function xa(e, t, n) {
        var r = e.stateNode;
        if (
          ((e = t.childContextTypes), "function" !== typeof r.getChildContext)
        )
          return n;
        for (var i in (r = r.getChildContext()))
          if (!(i in e)) throw Error(o(108, Y(t) || "Unknown", i));
        return a({}, n, r);
      }
      function wa(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            fa),
          (va = pa.current),
          da(pa, e),
          da(ha, ha.current),
          !0
        );
      }
      function Ea(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n
          ? ((e = xa(e, t, va)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            ca(ha),
            ca(pa),
            da(pa, e))
          : ca(ha),
          da(ha, n);
      }
      var Sa = null,
        Ca = null,
        ka = i.unstable_runWithPriority,
        Ta = i.unstable_scheduleCallback,
        Pa = i.unstable_cancelCallback,
        ja = i.unstable_shouldYield,
        Oa = i.unstable_requestPaint,
        Ma = i.unstable_now,
        Na = i.unstable_getCurrentPriorityLevel,
        La = i.unstable_ImmediatePriority,
        Aa = i.unstable_UserBlockingPriority,
        za = i.unstable_NormalPriority,
        _a = i.unstable_LowPriority,
        Ra = i.unstable_IdlePriority,
        Da = {},
        Va = void 0 !== Oa ? Oa : function () { },
        Ia = null,
        Fa = null,
        Ba = !1,
        Ha = Ma(),
        Wa =
          1e4 > Ha
            ? Ma
            : function () {
              return Ma() - Ha;
            };
      function Ua() {
        switch (Na()) {
          case La:
            return 99;
          case Aa:
            return 98;
          case za:
            return 97;
          case _a:
            return 96;
          case Ra:
            return 95;
          default:
            throw Error(o(332));
        }
      }
      function Ga(e) {
        switch (e) {
          case 99:
            return La;
          case 98:
            return Aa;
          case 97:
            return za;
          case 96:
            return _a;
          case 95:
            return Ra;
          default:
            throw Error(o(332));
        }
      }
      function $a(e, t) {
        return (e = Ga(e)), ka(e, t);
      }
      function Ya(e, t, n) {
        return (e = Ga(e)), Ta(e, t, n);
      }
      function qa() {
        if (null !== Fa) {
          var e = Fa;
          (Fa = null), Pa(e);
        }
        Xa();
      }
      function Xa() {
        if (!Ba && null !== Ia) {
          Ba = !0;
          var e = 0;
          try {
            var t = Ia;
            $a(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (Ia = null);
          } catch (n) {
            throw (null !== Ia && (Ia = Ia.slice(e + 1)), Ta(La, qa), n);
          } finally {
            Ba = !1;
          }
        }
      }
      var Za = w.ReactCurrentBatchConfig;
      function Qa(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = a({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      var Ka = ua(null),
        Ja = null,
        ei = null,
        ti = null;
      function ni() {
        ti = ei = Ja = null;
      }
      function ri(e) {
        var t = Ka.current;
        ca(Ka), (e.type._context._currentValue = t);
      }
      function ai(e, t) {
        for (; null !== e;) {
          var n = e.alternate;
          if ((e.childLanes & t) === t) {
            if (null === n || (n.childLanes & t) === t) break;
            n.childLanes |= t;
          } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
          e = e.return;
        }
      }
      function ii(e, t) {
        (Ja = e),
          (ti = ei = null),
          null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (0 !== (e.lanes & t) && (Do = !0), (e.firstContext = null));
      }
      function oi(e, t) {
        if (ti !== e && !1 !== t && 0 !== t)
          if (
            (("number" === typeof t && 1073741823 !== t) ||
              ((ti = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === ei)
          ) {
            if (null === Ja) throw Error(o(308));
            (ei = t),
              (Ja.dependencies = {
                lanes: 0,
                firstContext: t,
                responders: null,
              });
          } else ei = ei.next = t;
        return e._currentValue;
      }
      var si = !1;
      function li(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null },
          effects: null,
        };
      }
      function ui(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          });
      }
      function ci(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        };
      }
      function di(e, t) {
        if (null !== (e = e.updateQueue)) {
          var n = (e = e.shared).pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
      }
      function fi(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var a = null,
            i = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var o = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
            } while (null !== n);
            null === i ? (a = i = t) : (i = i.next = t);
          } else a = i = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: a,
              lastBaseUpdate: i,
              shared: r.shared,
              effects: r.effects,
            }),
            void (e.updateQueue = n)
          );
        }
        null === (e = n.lastBaseUpdate)
          ? (n.firstBaseUpdate = t)
          : (e.next = t),
          (n.lastBaseUpdate = t);
      }
      function pi(e, t, n, r) {
        var i = e.updateQueue;
        si = !1;
        var o = i.firstBaseUpdate,
          s = i.lastBaseUpdate,
          l = i.shared.pending;
        if (null !== l) {
          i.shared.pending = null;
          var u = l,
            c = u.next;
          (u.next = null), null === s ? (o = c) : (s.next = c), (s = u);
          var d = e.alternate;
          if (null !== d) {
            var f = (d = d.updateQueue).lastBaseUpdate;
            f !== s &&
              (null === f ? (d.firstBaseUpdate = c) : (f.next = c),
                (d.lastBaseUpdate = u));
          }
        }
        if (null !== o) {
          for (f = i.baseState, s = 0, d = c = u = null; ;) {
            l = o.lane;
            var p = o.eventTime;
            if ((r & l) === l) {
              null !== d &&
                (d = d.next =
                {
                  eventTime: p,
                  lane: 0,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                });
              e: {
                var h = e,
                  v = o;
                switch (((l = t), (p = n), v.tag)) {
                  case 1:
                    if ("function" === typeof (h = v.payload)) {
                      f = h.call(p, f, l);
                      break e;
                    }
                    f = h;
                    break e;
                  case 3:
                    h.flags = (-4097 & h.flags) | 64;
                  case 0:
                    if (
                      null ===
                      (l =
                        "function" === typeof (h = v.payload)
                          ? h.call(p, f, l)
                          : h) ||
                      void 0 === l
                    )
                      break e;
                    f = a({}, f, l);
                    break e;
                  case 2:
                    si = !0;
                }
              }
              null !== o.callback &&
                ((e.flags |= 32),
                  null === (l = i.effects) ? (i.effects = [o]) : l.push(o));
            } else
              (p = {
                eventTime: p,
                lane: l,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              }),
                null === d ? ((c = d = p), (u = f)) : (d = d.next = p),
                (s |= l);
            if (null === (o = o.next)) {
              if (null === (l = i.shared.pending)) break;
              (o = l.next),
                (l.next = null),
                (i.lastBaseUpdate = l),
                (i.shared.pending = null);
            }
          }
          null === d && (u = f),
            (i.baseState = u),
            (i.firstBaseUpdate = c),
            (i.lastBaseUpdate = d),
            (Bs |= s),
            (e.lanes = s),
            (e.memoizedState = f);
        }
      }
      function hi(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              a = r.callback;
            if (null !== a) {
              if (((r.callback = null), (r = n), "function" !== typeof a))
                throw Error(o(191, a));
              a.call(r);
            }
          }
      }
      var vi = new r.Component().refs;
      function mi(e, t, n, r) {
        (n =
          null === (n = n(r, (t = e.memoizedState))) || void 0 === n
            ? t
            : a({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n);
      }
      var gi = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && Ze(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = fl(),
            a = pl(e),
            i = ci(r, a);
          (i.payload = t),
            void 0 !== n && null !== n && (i.callback = n),
            di(e, i),
            hl(e, a, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = fl(),
            a = pl(e),
            i = ci(r, a);
          (i.tag = 1),
            (i.payload = t),
            void 0 !== n && null !== n && (i.callback = n),
            di(e, i),
            hl(e, a, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = fl(),
            r = pl(e),
            a = ci(n, r);
          (a.tag = 2),
            void 0 !== t && null !== t && (a.callback = t),
            di(e, a),
            hl(e, r, n);
        },
      };
      function yi(e, t, n, r, a, i, o) {
        return "function" === typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, i, o)
          : !t.prototype ||
          !t.prototype.isPureReactComponent ||
          !fr(n, r) ||
          !fr(a, i);
      }
      function bi(e, t, n) {
        var r = !1,
          a = fa,
          i = t.contextType;
        return (
          "object" === typeof i && null !== i
            ? (i = oi(i))
            : ((a = ga(t) ? va : pa.current),
              (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                ? ma(e, a)
                : fa)),
          (t = new t(n, i)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = gi),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
            a),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
          t
        );
      }
      function xi(e, t, n, r) {
        (e = t.state),
          "function" === typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(n, r),
          "function" === typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && gi.enqueueReplaceState(t, t.state, null);
      }
      function wi(e, t, n, r) {
        var a = e.stateNode;
        (a.props = n), (a.state = e.memoizedState), (a.refs = vi), li(e);
        var i = t.contextType;
        "object" === typeof i && null !== i
          ? (a.context = oi(i))
          : ((i = ga(t) ? va : pa.current), (a.context = ma(e, i))),
          pi(e, n, a, r),
          (a.state = e.memoizedState),
          "function" === typeof (i = t.getDerivedStateFromProps) &&
          (mi(e, t, i, n), (a.state = e.memoizedState)),
          "function" === typeof t.getDerivedStateFromProps ||
          "function" === typeof a.getSnapshotBeforeUpdate ||
          ("function" !== typeof a.UNSAFE_componentWillMount &&
            "function" !== typeof a.componentWillMount) ||
          ((t = a.state),
            "function" === typeof a.componentWillMount &&
            a.componentWillMount(),
            "function" === typeof a.UNSAFE_componentWillMount &&
            a.UNSAFE_componentWillMount(),
            t !== a.state && gi.enqueueReplaceState(a, a.state, null),
            pi(e, n, a, r),
            (a.state = e.memoizedState)),
          "function" === typeof a.componentDidMount && (e.flags |= 4);
      }
      var Ei = Array.isArray;
      function Si(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" !== typeof e &&
          "object" !== typeof e
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(o(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(o(147, e));
            var a = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" === typeof t.ref &&
              t.ref._stringRef === a
              ? t.ref
              : ((t = function (e) {
                var t = r.refs;
                t === vi && (t = r.refs = {}),
                  null === e ? delete t[a] : (t[a] = e);
              }),
                (t._stringRef = a),
                t);
          }
          if ("string" !== typeof e) throw Error(o(284));
          if (!n._owner) throw Error(o(290, e));
        }
        return e;
      }
      function Ci(e, t) {
        if ("textarea" !== e.type)
          throw Error(
            o(
              31,
              "[object Object]" === Object.prototype.toString.call(t)
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : t
            )
          );
      }
      function ki(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r
              ? ((r.nextEffect = n), (t.lastEffect = n))
              : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.flags = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r;) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t;)
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function a(e, t) {
          return ((e = $l(e, t)).index = 0), (e.sibling = null), e;
        }
        function i(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.flags = 2), n)
                  : r
                : ((t.flags = 2), n)
              : n
          );
        }
        function s(t) {
          return e && null === t.alternate && (t.flags = 2), t;
        }
        function l(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Zl(n, e.mode, r)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function u(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = a(t, n.props)).ref = Si(e, t, n)), (r.return = e), r)
            : (((r = Yl(n.type, n.key, n.props, null, e.mode, r)).ref = Si(
              e,
              t,
              n
            )),
              (r.return = e),
              r);
        }
        function c(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Ql(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
        }
        function d(e, t, n, r, i) {
          return null === t || 7 !== t.tag
            ? (((t = ql(n, e.mode, r, i)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function f(e, t, n) {
          if ("string" === typeof t || "number" === typeof t)
            return ((t = Zl("" + t, e.mode, n)).return = e), t;
          if ("object" === typeof t && null !== t) {
            switch (t.$$typeof) {
              case E:
                return (
                  ((n = Yl(t.type, t.key, t.props, null, e.mode, n)).ref = Si(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case S:
                return ((t = Ql(t, e.mode, n)).return = e), t;
            }
            if (Ei(t) || H(t))
              return ((t = ql(t, e.mode, n, null)).return = e), t;
            Ci(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          var a = null !== t ? t.key : null;
          if ("string" === typeof n || "number" === typeof n)
            return null !== a ? null : l(e, t, "" + n, r);
          if ("object" === typeof n && null !== n) {
            switch (n.$$typeof) {
              case E:
                return n.key === a
                  ? n.type === C
                    ? d(e, t, n.props.children, r, a)
                    : u(e, t, n, r)
                  : null;
              case S:
                return n.key === a ? c(e, t, n, r) : null;
            }
            if (Ei(n) || H(n)) return null !== a ? null : d(e, t, n, r, null);
            Ci(e, n);
          }
          return null;
        }
        function h(e, t, n, r, a) {
          if ("string" === typeof r || "number" === typeof r)
            return l(t, (e = e.get(n) || null), "" + r, a);
          if ("object" === typeof r && null !== r) {
            switch (r.$$typeof) {
              case E:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === C
                    ? d(t, e, r.props.children, a, r.key)
                    : u(t, e, r, a)
                );
              case S:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  a
                );
            }
            if (Ei(r) || H(r))
              return d(t, (e = e.get(n) || null), r, a, null);
            Ci(t, r);
          }
          return null;
        }
        function v(a, o, s, l) {
          for (
            var u = null, c = null, d = o, v = (o = 0), m = null;
            null !== d && v < s.length;
            v++
          ) {
            d.index > v ? ((m = d), (d = null)) : (m = d.sibling);
            var g = p(a, d, s[v], l);
            if (null === g) {
              null === d && (d = m);
              break;
            }
            e && d && null === g.alternate && t(a, d),
              (o = i(g, o, v)),
              null === c ? (u = g) : (c.sibling = g),
              (c = g),
              (d = m);
          }
          if (v === s.length) return n(a, d), u;
          if (null === d) {
            for (; v < s.length; v++)
              null !== (d = f(a, s[v], l)) &&
                ((o = i(d, o, v)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
            return u;
          }
          for (d = r(a, d); v < s.length; v++)
            null !== (m = h(d, a, v, s[v], l)) &&
              (e &&
                null !== m.alternate &&
                d.delete(null === m.key ? v : m.key),
                (o = i(m, o, v)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
          return (
            e &&
            d.forEach(function (e) {
              return t(a, e);
            }),
            u
          );
        }
        function m(a, s, l, u) {
          var c = H(l);
          if ("function" !== typeof c) throw Error(o(150));
          if (null == (l = c.call(l))) throw Error(o(151));
          for (
            var d = (c = null), v = s, m = (s = 0), g = null, y = l.next();
            null !== v && !y.done;
            m++, y = l.next()
          ) {
            v.index > m ? ((g = v), (v = null)) : (g = v.sibling);
            var b = p(a, v, y.value, u);
            if (null === b) {
              null === v && (v = g);
              break;
            }
            e && v && null === b.alternate && t(a, v),
              (s = i(b, s, m)),
              null === d ? (c = b) : (d.sibling = b),
              (d = b),
              (v = g);
          }
          if (y.done) return n(a, v), c;
          if (null === v) {
            for (; !y.done; m++, y = l.next())
              null !== (y = f(a, y.value, u)) &&
                ((s = i(y, s, m)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
            return c;
          }
          for (v = r(a, v); !y.done; m++, y = l.next())
            null !== (y = h(v, a, m, y.value, u)) &&
              (e &&
                null !== y.alternate &&
                v.delete(null === y.key ? m : y.key),
                (s = i(y, s, m)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
          return (
            e &&
            v.forEach(function (e) {
              return t(a, e);
            }),
            c
          );
        }
        return function (e, r, i, l) {
          var u =
            "object" === typeof i &&
            null !== i &&
            i.type === C &&
            null === i.key;
          u && (i = i.props.children);
          var c = "object" === typeof i && null !== i;
          if (c)
            switch (i.$$typeof) {
              case E:
                e: {
                  for (c = i.key, u = r; null !== u;) {
                    if (u.key === c) {
                      if (7 === u.tag) {
                        if (i.type === C) {
                          n(e, u.sibling),
                            ((r = a(u, i.props.children)).return = e),
                            (e = r);
                          break e;
                        }
                      } else if (u.elementType === i.type) {
                        n(e, u.sibling),
                          ((r = a(u, i.props)).ref = Si(e, u, i)),
                          (r.return = e),
                          (e = r);
                        break e;
                      }
                      n(e, u);
                      break;
                    }
                    t(e, u), (u = u.sibling);
                  }
                  i.type === C
                    ? (((r = ql(i.props.children, e.mode, l, i.key)).return =
                      e),
                      (e = r))
                    : (((l = Yl(
                      i.type,
                      i.key,
                      i.props,
                      null,
                      e.mode,
                      l
                    )).ref = Si(e, r, i)),
                      (l.return = e),
                      (e = l));
                }
                return s(e);
              case S:
                e: {
                  for (u = i.key; null !== r;) {
                    if (r.key === u) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === i.containerInfo &&
                        r.stateNode.implementation === i.implementation
                      ) {
                        n(e, r.sibling),
                          ((r = a(r, i.children || [])).return = e),
                          (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = Ql(i, e.mode, l)).return = e), (e = r);
                }
                return s(e);
            }
          if ("string" === typeof i || "number" === typeof i)
            return (
              (i = "" + i),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = a(r, i)).return = e), (e = r))
                : (n(e, r), ((r = Zl(i, e.mode, l)).return = e), (e = r)),
              s(e)
            );
          if (Ei(i)) return v(e, r, i, l);
          if (H(i)) return m(e, r, i, l);
          if ((c && Ci(e, i), "undefined" === typeof i && !u))
            switch (e.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(o(152, Y(e.type) || "Component"));
            }
          return n(e, r);
        };
      }
      var Ti = ki(!0),
        Pi = ki(!1),
        ji = {},
        Oi = ua(ji),
        Mi = ua(ji),
        Ni = ua(ji);
      function Li(e) {
        if (e === ji) throw Error(o(174));
        return e;
      }
      function Ai(e, t) {
        switch ((da(Ni, t), da(Mi, e), da(Oi, ji), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : he(null, "");
            break;
          default:
            t = he(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            );
        }
        ca(Oi), da(Oi, t);
      }
      function zi() {
        ca(Oi), ca(Mi), ca(Ni);
      }
      function _i(e) {
        Li(Ni.current);
        var t = Li(Oi.current),
          n = he(t, e.type);
        t !== n && (da(Mi, e), da(Oi, n));
      }
      function Ri(e) {
        Mi.current === e && (ca(Oi), ca(Mi));
      }
      var Di = ua(0);
      function Vi(e) {
        for (var t = e; null !== t;) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) ||
                "$?" === n.data ||
                "$!" === n.data)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 !== (64 & t.flags)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling;) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var Ii = null,
        Fi = null,
        Bi = !1;
      function Hi(e, t) {
        var n = Ul(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.flags = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function Wi(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
              (t =
                1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t) && ((e.stateNode = t), !0)
            );
          case 6:
            return (
              null !==
              (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), !0)
            );
          default:
            return !1;
        }
      }
      function Ui(e) {
        if (Bi) {
          var t = Fi;
          if (t) {
            var n = t;
            if (!Wi(e, t)) {
              if (!(t = qr(n.nextSibling)) || !Wi(e, t))
                return (
                  (e.flags = (-1025 & e.flags) | 2), (Bi = !1), void (Ii = e)
                );
              Hi(Ii, n);
            }
            (Ii = e), (Fi = qr(t.firstChild));
          } else (e.flags = (-1025 & e.flags) | 2), (Bi = !1), (Ii = e);
        }
      }
      function Gi(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        Ii = e;
      }
      function $i(e) {
        if (e !== Ii) return !1;
        if (!Bi) return Gi(e), (Bi = !0), !1;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !Ur(t, e.memoizedProps))
        )
          for (t = Fi; t;) Hi(e, t), (t = qr(t.nextSibling));
        if ((Gi(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(o(317));
          e: {
            for (e = e.nextSibling, t = 0; e;) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    Fi = qr(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
              }
              e = e.nextSibling;
            }
            Fi = null;
          }
        } else Fi = Ii ? qr(e.stateNode.nextSibling) : null;
        return !0;
      }
      function Yi() {
        (Fi = Ii = null), (Bi = !1);
      }
      var qi = [];
      function Xi() {
        for (var e = 0; e < qi.length; e++)
          qi[e]._workInProgressVersionPrimary = null;
        qi.length = 0;
      }
      var Zi = w.ReactCurrentDispatcher,
        Qi = w.ReactCurrentBatchConfig,
        Ki = 0,
        Ji = null,
        eo = null,
        to = null,
        no = !1,
        ro = !1;
      function ao() {
        throw Error(o(321));
      }
      function io(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!cr(e[n], t[n])) return !1;
        return !0;
      }
      function oo(e, t, n, r, a, i) {
        if (
          ((Ki = i),
            (Ji = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Zi.current = null === e || null === e.memoizedState ? Ao : zo),
            (e = n(r, a)),
            ro)
        ) {
          i = 0;
          do {
            if (((ro = !1), !(25 > i))) throw Error(o(301));
            (i += 1),
              (to = eo = null),
              (t.updateQueue = null),
              (Zi.current = _o),
              (e = n(r, a));
          } while (ro);
        }
        if (
          ((Zi.current = Lo),
            (t = null !== eo && null !== eo.next),
            (Ki = 0),
            (to = eo = Ji = null),
            (no = !1),
            t)
        )
          throw Error(o(300));
        return e;
      }
      function so() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === to ? (Ji.memoizedState = to = e) : (to = to.next = e), to
        );
      }
      function lo() {
        if (null === eo) {
          var e = Ji.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = eo.next;
        var t = null === to ? Ji.memoizedState : to.next;
        if (null !== t) (to = t), (eo = e);
        else {
          if (null === e) throw Error(o(310));
          (e = {
            memoizedState: (eo = e).memoizedState,
            baseState: eo.baseState,
            baseQueue: eo.baseQueue,
            queue: eo.queue,
            next: null,
          }),
            null === to ? (Ji.memoizedState = to = e) : (to = to.next = e);
        }
        return to;
      }
      function uo(e, t) {
        return "function" === typeof t ? t(e) : t;
      }
      function co(e) {
        var t = lo(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = eo,
          a = r.baseQueue,
          i = n.pending;
        if (null !== i) {
          if (null !== a) {
            var s = a.next;
            (a.next = i.next), (i.next = s);
          }
          (r.baseQueue = a = i), (n.pending = null);
        }
        if (null !== a) {
          (a = a.next), (r = r.baseState);
          var l = (s = i = null),
            u = a;
          do {
            var c = u.lane;
            if ((Ki & c) === c)
              null !== l &&
                (l = l.next =
                {
                  lane: 0,
                  action: u.action,
                  eagerReducer: u.eagerReducer,
                  eagerState: u.eagerState,
                  next: null,
                }),
                (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
            else {
              var d = {
                lane: c,
                action: u.action,
                eagerReducer: u.eagerReducer,
                eagerState: u.eagerState,
                next: null,
              };
              null === l ? ((s = l = d), (i = r)) : (l = l.next = d),
                (Ji.lanes |= c),
                (Bs |= c);
            }
            u = u.next;
          } while (null !== u && u !== a);
          null === l ? (i = r) : (l.next = s),
            cr(r, t.memoizedState) || (Do = !0),
            (t.memoizedState = r),
            (t.baseState = i),
            (t.baseQueue = l),
            (n.lastRenderedState = r);
        }
        return [t.memoizedState, n.dispatch];
      }
      function fo(e) {
        var t = lo(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          a = n.pending,
          i = t.memoizedState;
        if (null !== a) {
          n.pending = null;
          var s = (a = a.next);
          do {
            (i = e(i, s.action)), (s = s.next);
          } while (s !== a);
          cr(i, t.memoizedState) || (Do = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (n.lastRenderedState = i);
        }
        return [i, r];
      }
      function po(e, t, n) {
        var r = t._getVersion;
        r = r(t._source);
        var a = t._workInProgressVersionPrimary;
        if (
          (null !== a
            ? (e = a === r)
            : ((e = e.mutableReadLanes),
              (e = (Ki & e) === e) &&
              ((t._workInProgressVersionPrimary = r), qi.push(t))),
            e)
        )
          return n(t._source);
        throw (qi.push(t), Error(o(350)));
      }
      function ho(e, t, n, r) {
        var a = As;
        if (null === a) throw Error(o(349));
        var i = t._getVersion,
          s = i(t._source),
          l = Zi.current,
          u = l.useState(function () {
            return po(a, t, n);
          }),
          c = u[1],
          d = u[0];
        u = to;
        var f = e.memoizedState,
          p = f.refs,
          h = p.getSnapshot,
          v = f.source;
        f = f.subscribe;
        var m = Ji;
        return (
          (e.memoizedState = { refs: p, source: t, subscribe: r }),
          l.useEffect(
            function () {
              (p.getSnapshot = n), (p.setSnapshot = c);
              var e = i(t._source);
              if (!cr(s, e)) {
                (e = n(t._source)),
                  cr(d, e) ||
                  (c(e),
                    (e = pl(m)),
                    (a.mutableReadLanes |= e & a.pendingLanes)),
                  (e = a.mutableReadLanes),
                  (a.entangledLanes |= e);
                for (var r = a.entanglements, o = e; 0 < o;) {
                  var l = 31 - Ut(o),
                    u = 1 << l;
                  (r[l] |= e), (o &= ~u);
                }
              }
            },
            [n, t, r]
          ),
          l.useEffect(
            function () {
              return r(t._source, function () {
                var e = p.getSnapshot,
                  n = p.setSnapshot;
                try {
                  n(e(t._source));
                  var r = pl(m);
                  a.mutableReadLanes |= r & a.pendingLanes;
                } catch (i) {
                  n(function () {
                    throw i;
                  });
                }
              });
            },
            [t, r]
          ),
          (cr(h, n) && cr(v, t) && cr(f, r)) ||
          (((e = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: uo,
            lastRenderedState: d,
          }).dispatch = c =
            No.bind(null, Ji, e)),
            (u.queue = e),
            (u.baseQueue = null),
            (d = po(a, t, n)),
            (u.memoizedState = u.baseState = d)),
          d
        );
      }
      function vo(e, t, n) {
        return ho(lo(), e, t, n);
      }
      function mo(e) {
        var t = so();
        return (
          "function" === typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: uo,
            lastRenderedState: e,
          }).dispatch =
            No.bind(null, Ji, e)),
          [t.memoizedState, e]
        );
      }
      function go(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = Ji.updateQueue)
            ? ((t = { lastEffect: null }),
              (Ji.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function yo(e) {
        return (e = { current: e }), (so().memoizedState = e);
      }
      function bo() {
        return lo().memoizedState;
      }
      function xo(e, t, n, r) {
        var a = so();
        (Ji.flags |= e),
          (a.memoizedState = go(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function wo(e, t, n, r) {
        var a = lo();
        r = void 0 === r ? null : r;
        var i = void 0;
        if (null !== eo) {
          var o = eo.memoizedState;
          if (((i = o.destroy), null !== r && io(r, o.deps)))
            return void go(t, n, i, r);
        }
        (Ji.flags |= e), (a.memoizedState = go(1 | t, n, i, r));
      }
      function Eo(e, t) {
        return xo(516, 4, e, t);
      }
      function So(e, t) {
        return wo(516, 4, e, t);
      }
      function Co(e, t) {
        return wo(4, 2, e, t);
      }
      function ko(e, t) {
        return "function" === typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
      }
      function To(e, t, n) {
        return (
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
          wo(4, 2, ko.bind(null, t, e), n)
        );
      }
      function Po() { }
      function jo(e, t) {
        var n = lo();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && io(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function Oo(e, t) {
        var n = lo();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && io(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function Mo(e, t) {
        var n = Ua();
        $a(98 > n ? 98 : n, function () {
          e(!0);
        }),
          $a(97 < n ? 97 : n, function () {
            var n = Qi.transition;
            Qi.transition = 1;
            try {
              e(!1), t();
            } finally {
              Qi.transition = n;
            }
          });
      }
      function No(e, t, n) {
        var r = fl(),
          a = pl(e),
          i = {
            lane: a,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
          },
          o = t.pending;
        if (
          (null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (t.pending = i),
            (o = e.alternate),
            e === Ji || (null !== o && o === Ji))
        )
          ro = no = !0;
        else {
          if (
            0 === e.lanes &&
            (null === o || 0 === o.lanes) &&
            null !== (o = t.lastRenderedReducer)
          )
            try {
              var s = t.lastRenderedState,
                l = o(s, n);
              if (((i.eagerReducer = o), (i.eagerState = l), cr(l, s)))
                return;
            } catch (u) { }
          hl(e, a, r);
        }
      }
      var Lo = {
        readContext: oi,
        useCallback: ao,
        useContext: ao,
        useEffect: ao,
        useImperativeHandle: ao,
        useLayoutEffect: ao,
        useMemo: ao,
        useReducer: ao,
        useRef: ao,
        useState: ao,
        useDebugValue: ao,
        useDeferredValue: ao,
        useTransition: ao,
        useMutableSource: ao,
        useOpaqueIdentifier: ao,
        unstable_isNewReconciler: !1,
      },
        Ao = {
          readContext: oi,
          useCallback: function (e, t) {
            return (so().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: oi,
          useEffect: Eo,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              xo(4, 2, ko.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return xo(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = so();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = so();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }).dispatch =
                No.bind(null, Ji, e)),
              [r.memoizedState, e]
            );
          },
          useRef: yo,
          useState: mo,
          useDebugValue: Po,
          useDeferredValue: function (e) {
            var t = mo(e),
              n = t[0],
              r = t[1];
            return (
              Eo(
                function () {
                  var t = Qi.transition;
                  Qi.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Qi.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = mo(!1),
              t = e[0];
            return yo((e = Mo.bind(null, e[1]))), [e, t];
          },
          useMutableSource: function (e, t, n) {
            var r = so();
            return (
              (r.memoizedState = {
                refs: { getSnapshot: t, setSnapshot: null },
                source: e,
                subscribe: n,
              }),
              ho(r, e, t, n)
            );
          },
          useOpaqueIdentifier: function () {
            if (Bi) {
              var e = !1,
                t = (function (e) {
                  return { $$typeof: _, toString: e, valueOf: e };
                })(function () {
                  throw (
                    (e || ((e = !0), n("r:" + (Zr++).toString(36))),
                      Error(o(355)))
                  );
                }),
                n = mo(t)[1];
              return (
                0 === (2 & Ji.mode) &&
                ((Ji.flags |= 516),
                  go(
                    5,
                    function () {
                      n("r:" + (Zr++).toString(36));
                    },
                    void 0,
                    null
                  )),
                t
              );
            }
            return mo((t = "r:" + (Zr++).toString(36))), t;
          },
          unstable_isNewReconciler: !1,
        },
        zo = {
          readContext: oi,
          useCallback: jo,
          useContext: oi,
          useEffect: So,
          useImperativeHandle: To,
          useLayoutEffect: Co,
          useMemo: Oo,
          useReducer: co,
          useRef: bo,
          useState: function () {
            return co(uo);
          },
          useDebugValue: Po,
          useDeferredValue: function (e) {
            var t = co(uo),
              n = t[0],
              r = t[1];
            return (
              So(
                function () {
                  var t = Qi.transition;
                  Qi.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Qi.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = co(uo)[0];
            return [bo().current, e];
          },
          useMutableSource: vo,
          useOpaqueIdentifier: function () {
            return co(uo)[0];
          },
          unstable_isNewReconciler: !1,
        },
        _o = {
          readContext: oi,
          useCallback: jo,
          useContext: oi,
          useEffect: So,
          useImperativeHandle: To,
          useLayoutEffect: Co,
          useMemo: Oo,
          useReducer: fo,
          useRef: bo,
          useState: function () {
            return fo(uo);
          },
          useDebugValue: Po,
          useDeferredValue: function (e) {
            var t = fo(uo),
              n = t[0],
              r = t[1];
            return (
              So(
                function () {
                  var t = Qi.transition;
                  Qi.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Qi.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = fo(uo)[0];
            return [bo().current, e];
          },
          useMutableSource: vo,
          useOpaqueIdentifier: function () {
            return fo(uo)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Ro = w.ReactCurrentOwner,
        Do = !1;
      function Vo(e, t, n, r) {
        t.child = null === e ? Pi(t, null, n, r) : Ti(t, e.child, n, r);
      }
      function Io(e, t, n, r, a) {
        n = n.render;
        var i = t.ref;
        return (
          ii(t, a),
          (r = oo(e, t, n, r, i, a)),
          null === e || Do
            ? ((t.flags |= 1), Vo(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~a),
              is(e, t, a))
        );
      }
      function Fo(e, t, n, r, a, i) {
        if (null === e) {
          var o = n.type;
          return "function" !== typeof o ||
            Gl(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Yl(n.type, null, r, t, t.mode, i)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = o), Bo(e, t, o, r, a, i));
        }
        return (
          (o = e.child),
          0 === (a & i) &&
            ((a = o.memoizedProps),
              (n = null !== (n = n.compare) ? n : fr)(a, r) && e.ref === t.ref)
            ? is(e, t, i)
            : ((t.flags |= 1),
              ((e = $l(o, r)).ref = t.ref),
              (e.return = t),
              (t.child = e))
        );
      }
      function Bo(e, t, n, r, a, i) {
        if (null !== e && fr(e.memoizedProps, r) && e.ref === t.ref) {
          if (((Do = !1), 0 === (i & a)))
            return (t.lanes = e.lanes), is(e, t, i);
          0 !== (16384 & e.flags) && (Do = !0);
        }
        return Uo(e, t, n, r, i);
      }
      function Ho(e, t, n) {
        var r = t.pendingProps,
          a = r.children,
          i = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
          if (0 === (4 & t.mode))
            (t.memoizedState = { baseLanes: 0 }), El(t, n);
          else {
            if (0 === (1073741824 & n))
              return (
                (e = null !== i ? i.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = { baseLanes: e }),
                El(t, e),
                null
              );
            (t.memoizedState = { baseLanes: 0 }),
              El(t, null !== i ? i.baseLanes : n);
          }
        else
          null !== i
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            El(t, r);
        return Vo(e, t, a, n), t.child;
      }
      function Wo(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.flags |= 128);
      }
      function Uo(e, t, n, r, a) {
        var i = ga(n) ? va : pa.current;
        return (
          (i = ma(t, i)),
          ii(t, a),
          (n = oo(e, t, n, r, i, a)),
          null === e || Do
            ? ((t.flags |= 1), Vo(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~a),
              is(e, t, a))
        );
      }
      function Go(e, t, n, r, a) {
        if (ga(n)) {
          var i = !0;
          wa(t);
        } else i = !1;
        if ((ii(t, a), null === t.stateNode))
          null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            bi(t, n, r),
            wi(t, n, r, a),
            (r = !0);
        else if (null === e) {
          var o = t.stateNode,
            s = t.memoizedProps;
          o.props = s;
          var l = o.context,
            u = n.contextType;
          "object" === typeof u && null !== u
            ? (u = oi(u))
            : (u = ma(t, (u = ga(n) ? va : pa.current)));
          var c = n.getDerivedStateFromProps,
            d =
              "function" === typeof c ||
              "function" === typeof o.getSnapshotBeforeUpdate;
          d ||
            ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
              "function" !== typeof o.componentWillReceiveProps) ||
            ((s !== r || l !== u) && xi(t, o, r, u)),
            (si = !1);
          var f = t.memoizedState;
          (o.state = f),
            pi(t, r, o, a),
            (l = t.memoizedState),
            s !== r || f !== l || ha.current || si
              ? ("function" === typeof c &&
                (mi(t, n, c, r), (l = t.memoizedState)),
                (s = si || yi(t, n, s, r, f, l, u))
                  ? (d ||
                    ("function" !== typeof o.UNSAFE_componentWillMount &&
                      "function" !== typeof o.componentWillMount) ||
                    ("function" === typeof o.componentWillMount &&
                      o.componentWillMount(),
                      "function" === typeof o.UNSAFE_componentWillMount &&
                      o.UNSAFE_componentWillMount()),
                    "function" === typeof o.componentDidMount &&
                    (t.flags |= 4))
                  : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = l)),
                (o.props = r),
                (o.state = l),
                (o.context = u),
                (r = s))
              : ("function" === typeof o.componentDidMount && (t.flags |= 4),
                (r = !1));
        } else {
          (o = t.stateNode),
            ui(e, t),
            (s = t.memoizedProps),
            (u = t.type === t.elementType ? s : Qa(t.type, s)),
            (o.props = u),
            (d = t.pendingProps),
            (f = o.context),
            "object" === typeof (l = n.contextType) && null !== l
              ? (l = oi(l))
              : (l = ma(t, (l = ga(n) ? va : pa.current)));
          var p = n.getDerivedStateFromProps;
          (c =
            "function" === typeof p ||
            "function" === typeof o.getSnapshotBeforeUpdate) ||
            ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
              "function" !== typeof o.componentWillReceiveProps) ||
            ((s !== d || f !== l) && xi(t, o, r, l)),
            (si = !1),
            (f = t.memoizedState),
            (o.state = f),
            pi(t, r, o, a);
          var h = t.memoizedState;
          s !== d || f !== h || ha.current || si
            ? ("function" === typeof p &&
              (mi(t, n, p, r), (h = t.memoizedState)),
              (u = si || yi(t, n, u, r, f, h, l))
                ? (c ||
                  ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                    "function" !== typeof o.componentWillUpdate) ||
                  ("function" === typeof o.componentWillUpdate &&
                    o.componentWillUpdate(r, h, l),
                    "function" === typeof o.UNSAFE_componentWillUpdate &&
                    o.UNSAFE_componentWillUpdate(r, h, l)),
                  "function" === typeof o.componentDidUpdate &&
                  (t.flags |= 4),
                  "function" === typeof o.getSnapshotBeforeUpdate &&
                  (t.flags |= 256))
                : ("function" !== typeof o.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                  "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = h)),
              (o.props = r),
              (o.state = h),
              (o.context = l),
              (r = u))
            : ("function" !== typeof o.componentDidUpdate ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
              "function" !== typeof o.getSnapshotBeforeUpdate ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 256),
              (r = !1));
        }
        return $o(e, t, n, r, i, a);
      }
      function $o(e, t, n, r, a, i) {
        Wo(e, t);
        var o = 0 !== (64 & t.flags);
        if (!r && !o) return a && Ea(t, n, !1), is(e, t, i);
        (r = t.stateNode), (Ro.current = t);
        var s =
          o && "function" !== typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.flags |= 1),
          null !== e && o
            ? ((t.child = Ti(t, e.child, null, i)),
              (t.child = Ti(t, null, s, i)))
            : Vo(e, t, s, i),
          (t.memoizedState = r.state),
          a && Ea(t, n, !0),
          t.child
        );
      }
      function Yo(e) {
        var t = e.stateNode;
        t.pendingContext
          ? ba(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && ba(0, t.context, !1),
          Ai(e, t.containerInfo);
      }
      var qo,
        Xo,
        Zo,
        Qo = { dehydrated: null, retryLane: 0 };
      function Ko(e, t, n) {
        var r,
          a = t.pendingProps,
          i = Di.current,
          o = !1;
        return (
          (r = 0 !== (64 & t.flags)) ||
          (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
          r
            ? ((o = !0), (t.flags &= -65))
            : (null !== e && null === e.memoizedState) ||
            void 0 === a.fallback ||
            !0 === a.unstable_avoidThisFallback ||
            (i |= 1),
          da(Di, 1 & i),
          null === e
            ? (void 0 !== a.fallback && Ui(t),
              (e = a.children),
              (i = a.fallback),
              o
                ? ((e = Jo(t, e, i, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = Qo),
                  e)
                : "number" === typeof a.unstable_expectedLoadTime
                  ? ((e = Jo(t, e, i, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Qo),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Xl(
                    { mode: "visible", children: e },
                    t.mode,
                    n,
                    null
                  )).return = t),
                    (t.child = n)))
            : (e.memoizedState,
              o
                ? ((a = ts(e, t, a.children, a.fallback, n)),
                  (o = t.child),
                  (i = e.child.memoizedState),
                  (o.memoizedState =
                    null === i
                      ? { baseLanes: n }
                      : { baseLanes: i.baseLanes | n }),
                  (o.childLanes = e.childLanes & ~n),
                  (t.memoizedState = Qo),
                  a)
                : ((n = es(e, t, a.children, n)),
                  (t.memoizedState = null),
                  n))
        );
      }
      function Jo(e, t, n, r) {
        var a = e.mode,
          i = e.child;
        return (
          (t = { mode: "hidden", children: t }),
          0 === (2 & a) && null !== i
            ? ((i.childLanes = 0), (i.pendingProps = t))
            : (i = Xl(t, a, 0, null)),
          (n = ql(n, a, r, null)),
          (i.return = e),
          (n.return = e),
          (i.sibling = n),
          (e.child = i),
          n
        );
      }
      function es(e, t, n, r) {
        var a = e.child;
        return (
          (e = a.sibling),
          (n = $l(a, { mode: "visible", children: n })),
          0 === (2 & t.mode) && (n.lanes = r),
          (n.return = t),
          (n.sibling = null),
          null !== e &&
          ((e.nextEffect = null),
            (e.flags = 8),
            (t.firstEffect = t.lastEffect = e)),
          (t.child = n)
        );
      }
      function ts(e, t, n, r, a) {
        var i = t.mode,
          o = e.child;
        e = o.sibling;
        var s = { mode: "hidden", children: n };
        return (
          0 === (2 & i) && t.child !== o
            ? (((n = t.child).childLanes = 0),
              (n.pendingProps = s),
              null !== (o = n.lastEffect)
                ? ((t.firstEffect = n.firstEffect),
                  (t.lastEffect = o),
                  (o.nextEffect = null))
                : (t.firstEffect = t.lastEffect = null))
            : (n = $l(o, s)),
          null !== e ? (r = $l(e, r)) : ((r = ql(r, i, a, null)).flags |= 2),
          (r.return = t),
          (n.return = t),
          (n.sibling = r),
          (t.child = n),
          r
        );
      }
      function ns(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        null !== n && (n.lanes |= t), ai(e.return, t);
      }
      function rs(e, t, n, r, a, i) {
        var o = e.memoizedState;
        null === o
          ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: a,
            lastEffect: i,
          })
          : ((o.isBackwards = t),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = n),
            (o.tailMode = a),
            (o.lastEffect = i));
      }
      function as(e, t, n) {
        var r = t.pendingProps,
          a = r.revealOrder,
          i = r.tail;
        if ((Vo(e, t, r.children, n), 0 !== (2 & (r = Di.current))))
          (r = (1 & r) | 2), (t.flags |= 64);
        else {
          if (null !== e && 0 !== (64 & e.flags))
            e: for (e = t.child; null !== e;) {
              if (13 === e.tag) null !== e.memoizedState && ns(e, n);
              else if (19 === e.tag) ns(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling;) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((da(Di, r), 0 === (2 & t.mode))) t.memoizedState = null;
        else
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; null !== n;)
                null !== (e = n.alternate) && null === Vi(e) && (a = n),
                  (n = n.sibling);
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                rs(t, !1, a, n, i, t.lastEffect);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a;) {
                if (null !== (e = a.alternate) && null === Vi(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              rs(t, !0, n, null, i, t.lastEffect);
              break;
            case "together":
              rs(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function is(e, t, n) {
        if (
          (null !== e && (t.dependencies = e.dependencies),
            (Bs |= t.lanes),
            0 !== (n & t.childLanes))
        ) {
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = $l((e = t.child), e.pendingProps),
              t.child = n,
              n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = $l(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        return null;
      }
      function os(e, t) {
        if (!Bi)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; null !== t;)
                null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; null !== n;)
                null !== n.alternate && (r = n), (n = n.sibling);
              null === r
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
          }
      }
      function ss(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
          case 17:
            return ga(t.type) && ya(), null;
          case 3:
            return (
              zi(),
              ca(ha),
              ca(pa),
              Xi(),
              (r = t.stateNode).pendingContext &&
              ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) ||
              ($i(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
              null
            );
          case 5:
            Ri(t);
            var i = Li(Ni.current);
            if (((n = t.type), null !== e && null != t.stateNode))
              Xo(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(o(166));
                return null;
              }
              if (((e = Li(Oi.current)), $i(t))) {
                (r = t.stateNode), (n = t.type);
                var s = t.memoizedProps;
                switch (((r[Kr] = t), (r[Jr] = s), n)) {
                  case "dialog":
                    Mr("cancel", r), Mr("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Mr("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < Tr.length; e++) Mr(Tr[e], r);
                    break;
                  case "source":
                    Mr("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Mr("error", r), Mr("load", r);
                    break;
                  case "details":
                    Mr("toggle", r);
                    break;
                  case "input":
                    ee(r, s), Mr("invalid", r);
                    break;
                  case "select":
                    (r._wrapperState = { wasMultiple: !!s.multiple }),
                      Mr("invalid", r);
                    break;
                  case "textarea":
                    le(r, s), Mr("invalid", r);
                }
                for (var u in (Ce(n, s), (e = null), s))
                  s.hasOwnProperty(u) &&
                    ((i = s[u]),
                      "children" === u
                        ? "string" === typeof i
                          ? r.textContent !== i && (e = ["children", i])
                          : "number" === typeof i &&
                          r.textContent !== "" + i &&
                          (e = ["children", "" + i])
                        : l.hasOwnProperty(u) &&
                        null != i &&
                        "onScroll" === u &&
                        Mr("scroll", r));
                switch (n) {
                  case "input":
                    Z(r), re(r, s, !0);
                    break;
                  case "textarea":
                    Z(r), ce(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof s.onClick && (r.onclick = Fr);
                }
                (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
              } else {
                switch (
                ((u = 9 === i.nodeType ? i : i.ownerDocument),
                  e === de && (e = pe(n)),
                  e === de
                    ? "script" === n
                      ? (((e = u.createElement("div")).innerHTML =
                        "<script></script>"),
                        (e = e.removeChild(e.firstChild)))
                      : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                          ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                    : (e = u.createElementNS(e, n)),
                  (e[Kr] = t),
                  (e[Jr] = r),
                  qo(e, t),
                  (t.stateNode = e),
                  (u = ke(n, r)),
                  n)
                ) {
                  case "dialog":
                    Mr("cancel", e), Mr("close", e), (i = r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Mr("load", e), (i = r);
                    break;
                  case "video":
                  case "audio":
                    for (i = 0; i < Tr.length; i++) Mr(Tr[i], e);
                    i = r;
                    break;
                  case "source":
                    Mr("error", e), (i = r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Mr("error", e), Mr("load", e), (i = r);
                    break;
                  case "details":
                    Mr("toggle", e), (i = r);
                    break;
                  case "input":
                    ee(e, r), (i = J(e, r)), Mr("invalid", e);
                    break;
                  case "option":
                    i = ie(e, r);
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (i = a({}, r, { value: void 0 })),
                      Mr("invalid", e);
                    break;
                  case "textarea":
                    le(e, r), (i = se(e, r)), Mr("invalid", e);
                    break;
                  default:
                    i = r;
                }
                Ce(n, i);
                var c = i;
                for (s in c)
                  if (c.hasOwnProperty(s)) {
                    var d = c[s];
                    "style" === s
                      ? Ee(e, d)
                      : "dangerouslySetInnerHTML" === s
                        ? null != (d = d ? d.__html : void 0) && ge(e, d)
                        : "children" === s
                          ? "string" === typeof d
                            ? ("textarea" !== n || "" !== d) && ye(e, d)
                            : "number" === typeof d && ye(e, "" + d)
                          : "suppressContentEditableWarning" !== s &&
                          "suppressHydrationWarning" !== s &&
                          "autoFocus" !== s &&
                          (l.hasOwnProperty(s)
                            ? null != d && "onScroll" === s && Mr("scroll", e)
                            : null != d && x(e, s, d, u));
                  }
                switch (n) {
                  case "input":
                    Z(e), re(e, r, !1);
                    break;
                  case "textarea":
                    Z(e), ce(e);
                    break;
                  case "option":
                    null != r.value &&
                      e.setAttribute("value", "" + q(r.value));
                    break;
                  case "select":
                    (e.multiple = !!r.multiple),
                      null != (s = r.value)
                        ? oe(e, !!r.multiple, s, !1)
                        : null != r.defaultValue &&
                        oe(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    "function" === typeof i.onClick && (e.onclick = Fr);
                }
                Wr(n, r) && (t.flags |= 4);
              }
              null !== t.ref && (t.flags |= 128);
            }
            return null;
          case 6:
            if (e && null != t.stateNode) Zo(0, t, e.memoizedProps, r);
            else {
              if ("string" !== typeof r && null === t.stateNode)
                throw Error(o(166));
              (n = Li(Ni.current)),
                Li(Oi.current),
                $i(t)
                  ? ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[Kr] = t),
                    r.nodeValue !== n && (t.flags |= 4))
                  : (((r = (
                    9 === n.nodeType ? n : n.ownerDocument
                  ).createTextNode(r))[Kr] = t),
                    (t.stateNode = r));
            }
            return null;
          case 13:
            return (
              ca(Di),
              (r = t.memoizedState),
              0 !== (64 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r),
                  (n = !1),
                  null === e
                    ? void 0 !== t.memoizedProps.fallback && $i(t)
                    : (n = null !== e.memoizedState),
                  r &&
                  !n &&
                  0 !== (2 & t.mode) &&
                  ((null === e &&
                    !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    0 !== (1 & Di.current)
                    ? 0 === Vs && (Vs = 3)
                    : ((0 !== Vs && 3 !== Vs) || (Vs = 4),
                      null === As ||
                      (0 === (134217727 & Bs) &&
                        0 === (134217727 & Hs)) ||
                      yl(As, _s))),
                  (r || n) && (t.flags |= 4),
                  null)
            );
          case 4:
            return zi(), null === e && Lr(t.stateNode.containerInfo), null;
          case 10:
            return ri(t), null;
          case 19:
            if ((ca(Di), null === (r = t.memoizedState))) return null;
            if (((s = 0 !== (64 & t.flags)), null === (u = r.rendering)))
              if (s) os(r, !1);
              else {
                if (0 !== Vs || (null !== e && 0 !== (64 & e.flags)))
                  for (e = t.child; null !== e;) {
                    if (null !== (u = Vi(e))) {
                      for (
                        t.flags |= 64,
                        os(r, !1),
                        null !== (s = u.updateQueue) &&
                        ((t.updateQueue = s), (t.flags |= 4)),
                        null === r.lastEffect && (t.firstEffect = null),
                        t.lastEffect = r.lastEffect,
                        r = n,
                        n = t.child;
                        null !== n;

                      )
                        (e = r),
                          ((s = n).flags &= 2),
                          (s.nextEffect = null),
                          (s.firstEffect = null),
                          (s.lastEffect = null),
                          null === (u = s.alternate)
                            ? ((s.childLanes = 0),
                              (s.lanes = e),
                              (s.child = null),
                              (s.memoizedProps = null),
                              (s.memoizedState = null),
                              (s.updateQueue = null),
                              (s.dependencies = null),
                              (s.stateNode = null))
                            : ((s.childLanes = u.childLanes),
                              (s.lanes = u.lanes),
                              (s.child = u.child),
                              (s.memoizedProps = u.memoizedProps),
                              (s.memoizedState = u.memoizedState),
                              (s.updateQueue = u.updateQueue),
                              (s.type = u.type),
                              (e = u.dependencies),
                              (s.dependencies =
                                null === e
                                  ? null
                                  : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                          (n = n.sibling);
                      return da(Di, (1 & Di.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== r.tail &&
                  Wa() > $s &&
                  ((t.flags |= 64),
                    (s = !0),
                    os(r, !1),
                    (t.lanes = 33554432));
              }
            else {
              if (!s)
                if (null !== (e = Vi(u))) {
                  if (
                    ((t.flags |= 64),
                      (s = !0),
                      null !== (n = e.updateQueue) &&
                      ((t.updateQueue = n), (t.flags |= 4)),
                      os(r, !0),
                      null === r.tail &&
                      "hidden" === r.tailMode &&
                      !u.alternate &&
                      !Bi)
                  )
                    return (
                      null !== (t = t.lastEffect = r.lastEffect) &&
                      (t.nextEffect = null),
                      null
                    );
                } else
                  2 * Wa() - r.renderingStartTime > $s &&
                    1073741824 !== n &&
                    ((t.flags |= 64),
                      (s = !0),
                      os(r, !1),
                      (t.lanes = 33554432));
              r.isBackwards
                ? ((u.sibling = t.child), (t.child = u))
                : (null !== (n = r.last) ? (n.sibling = u) : (t.child = u),
                  (r.last = u));
            }
            return null !== r.tail
              ? ((n = r.tail),
                (r.rendering = n),
                (r.tail = n.sibling),
                (r.lastEffect = t.lastEffect),
                (r.renderingStartTime = Wa()),
                (n.sibling = null),
                (t = Di.current),
                da(Di, s ? (1 & t) | 2 : 1 & t),
                n)
              : null;
          case 23:
          case 24:
            return (
              Sl(),
              null !== e &&
              (null !== e.memoizedState) !== (null !== t.memoizedState) &&
              "unstable-defer-without-hiding" !== r.mode &&
              (t.flags |= 4),
              null
            );
        }
        throw Error(o(156, t.tag));
      }
      function ls(e) {
        switch (e.tag) {
          case 1:
            ga(e.type) && ya();
            var t = e.flags;
            return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
          case 3:
            if ((zi(), ca(ha), ca(pa), Xi(), 0 !== (64 & (t = e.flags))))
              throw Error(o(285));
            return (e.flags = (-4097 & t) | 64), e;
          case 5:
            return Ri(e), null;
          case 13:
            return (
              ca(Di),
              4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
            );
          case 19:
            return ca(Di), null;
          case 4:
            return zi(), null;
          case 10:
            return ri(e), null;
          case 23:
          case 24:
            return Sl(), null;
          default:
            return null;
        }
      }
      function us(e, t) {
        try {
          var n = "",
            r = t;
          do {
            (n += $(r)), (r = r.return);
          } while (r);
          var a = n;
        } catch (i) {
          a = "\nError generating stack: " + i.message + "\n" + i.stack;
        }
        return { value: e, source: t, stack: a };
      }
      function cs(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      (qo = function (e, t) {
        for (var n = t.child; null !== n;) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling;) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (Xo = function (e, t, n, r) {
          var i = e.memoizedProps;
          if (i !== r) {
            (e = t.stateNode), Li(Oi.current);
            var o,
              s = null;
            switch (n) {
              case "input":
                (i = J(e, i)), (r = J(e, r)), (s = []);
                break;
              case "option":
                (i = ie(e, i)), (r = ie(e, r)), (s = []);
                break;
              case "select":
                (i = a({}, i, { value: void 0 })),
                  (r = a({}, r, { value: void 0 })),
                  (s = []);
                break;
              case "textarea":
                (i = se(e, i)), (r = se(e, r)), (s = []);
                break;
              default:
                "function" !== typeof i.onClick &&
                  "function" === typeof r.onClick &&
                  (e.onclick = Fr);
            }
            for (d in (Ce(n, r), (n = null), i))
              if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && null != i[d])
                if ("style" === d) {
                  var u = i[d];
                  for (o in u)
                    u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                  "dangerouslySetInnerHTML" !== d &&
                    "children" !== d &&
                    "suppressContentEditableWarning" !== d &&
                    "suppressHydrationWarning" !== d &&
                    "autoFocus" !== d &&
                    (l.hasOwnProperty(d)
                      ? s || (s = [])
                      : (s = s || []).push(d, null));
            for (d in r) {
              var c = r[d];
              if (
                ((u = null != i ? i[d] : void 0),
                  r.hasOwnProperty(d) && c !== u && (null != c || null != u))
              )
                if ("style" === d)
                  if (u) {
                    for (o in u)
                      !u.hasOwnProperty(o) ||
                        (c && c.hasOwnProperty(o)) ||
                        (n || (n = {}), (n[o] = ""));
                    for (o in c)
                      c.hasOwnProperty(o) &&
                        u[o] !== c[o] &&
                        (n || (n = {}), (n[o] = c[o]));
                  } else n || (s || (s = []), s.push(d, n)), (n = c);
                else
                  "dangerouslySetInnerHTML" === d
                    ? ((c = c ? c.__html : void 0),
                      (u = u ? u.__html : void 0),
                      null != c && u !== c && (s = s || []).push(d, c))
                    : "children" === d
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                      (s = s || []).push(d, "" + c)
                      : "suppressContentEditableWarning" !== d &&
                      "suppressHydrationWarning" !== d &&
                      (l.hasOwnProperty(d)
                        ? (null != c && "onScroll" === d && Mr("scroll", e),
                          s || u === c || (s = []))
                        : "object" === typeof c &&
                          null !== c &&
                          c.$$typeof === _
                          ? c.toString()
                          : (s = s || []).push(d, c));
            }
            n && (s = s || []).push("style", n);
            var d = s;
            (t.updateQueue = d) && (t.flags |= 4);
          }
        }),
        (Zo = function (e, t, n, r) {
          n !== r && (t.flags |= 4);
        });
      var ds = "function" === typeof WeakMap ? WeakMap : Map;
      function fs(e, t, n) {
        ((n = ci(-1, n)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            Zs || ((Zs = !0), (Qs = r)), cs(0, t);
          }),
          n
        );
      }
      function ps(e, t, n) {
        (n = ci(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" === typeof r) {
          var a = t.value;
          n.payload = function () {
            return cs(0, t), r(a);
          };
        }
        var i = e.stateNode;
        return (
          null !== i &&
          "function" === typeof i.componentDidCatch &&
          (n.callback = function () {
            "function" !== typeof r &&
              (null === Ks ? (Ks = new Set([this])) : Ks.add(this),
                cs(0, t));
            var e = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: null !== e ? e : "",
            });
          }),
          n
        );
      }
      var hs = "function" === typeof WeakSet ? WeakSet : Set;
      function vs(e) {
        var t = e.ref;
        if (null !== t)
          if ("function" === typeof t)
            try {
              t(null);
            } catch (n) {
              Fl(e, n);
            }
          else t.current = null;
      }
      function ms(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
          case 5:
          case 6:
          case 4:
          case 17:
            return;
          case 1:
            if (256 & t.flags && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                t.elementType === t.type ? n : Qa(t.type, n),
                r
              )),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            return;
          case 3:
            return void (256 & t.flags && Yr(t.stateNode.containerInfo));
        }
        throw Error(o(163));
      }
      function gs(e, t, n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            if (
              null !==
              (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
            ) {
              e = t = t.next;
              do {
                if (3 === (3 & e.tag)) {
                  var r = e.create;
                  e.destroy = r();
                }
                e = e.next;
              } while (e !== t);
            }
            if (
              null !==
              (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
            ) {
              e = t = t.next;
              do {
                var a = e;
                (r = a.next),
                  0 !== (4 & (a = a.tag)) &&
                  0 !== (1 & a) &&
                  (Dl(n, e), Rl(n, e)),
                  (e = r);
              } while (e !== t);
            }
            return;
          case 1:
            return (
              (e = n.stateNode),
              4 & n.flags &&
              (null === t
                ? e.componentDidMount()
                : ((r =
                  n.elementType === n.type
                    ? t.memoizedProps
                    : Qa(n.type, t.memoizedProps)),
                  e.componentDidUpdate(
                    r,
                    t.memoizedState,
                    e.__reactInternalSnapshotBeforeUpdate
                  ))),
              void (null !== (t = n.updateQueue) && hi(n, t, e))
            );
          case 3:
            if (null !== (t = n.updateQueue)) {
              if (((e = null), null !== n.child))
                switch (n.child.tag) {
                  case 5:
                  case 1:
                    e = n.child.stateNode;
                }
              hi(n, t, e);
            }
            return;
          case 5:
            return (
              (e = n.stateNode),
              void (
                null === t &&
                4 & n.flags &&
                Wr(n.type, n.memoizedProps) &&
                e.focus()
              )
            );
          case 6:
          case 4:
          case 12:
          case 19:
          case 17:
          case 20:
          case 21:
          case 23:
          case 24:
            return;
          case 13:
            return void (
              null === n.memoizedState &&
              ((n = n.alternate),
                null !== n &&
                ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && Et(n))))
            );
        }
        throw Error(o(163));
      }
      function ys(e, t) {
        for (var n = e; ;) {
          if (5 === n.tag) {
            var r = n.stateNode;
            if (t)
              "function" === typeof (r = r.style).setProperty
                ? r.setProperty("display", "none", "important")
                : (r.display = "none");
            else {
              r = n.stateNode;
              var a = n.memoizedProps.style;
              (a =
                void 0 !== a && null !== a && a.hasOwnProperty("display")
                  ? a.display
                  : null),
                (r.style.display = we("display", a));
            }
          } else if (6 === n.tag)
            n.stateNode.nodeValue = t ? "" : n.memoizedProps;
          else if (
            ((23 !== n.tag && 24 !== n.tag) ||
              null === n.memoizedState ||
              n === e) &&
            null !== n.child
          ) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === e) break;
          for (; null === n.sibling;) {
            if (null === n.return || n.return === e) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }
      function bs(e, t) {
        if (Ca && "function" === typeof Ca.onCommitFiberUnmount)
          try {
            Ca.onCommitFiberUnmount(Sa, t);
          } catch (i) { }
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var n = (e = e.next);
              do {
                var r = n,
                  a = r.destroy;
                if (((r = r.tag), void 0 !== a))
                  if (0 !== (4 & r)) Dl(t, n);
                  else {
                    r = t;
                    try {
                      a();
                    } catch (i) {
                      Fl(r, i);
                    }
                  }
                n = n.next;
              } while (n !== e);
            }
            break;
          case 1:
            if (
              (vs(t),
                "function" === typeof (e = t.stateNode).componentWillUnmount)
            )
              try {
                (e.props = t.memoizedProps),
                  (e.state = t.memoizedState),
                  e.componentWillUnmount();
              } catch (i) {
                Fl(t, i);
              }
            break;
          case 5:
            vs(t);
            break;
          case 4:
            ks(e, t);
        }
      }
      function xs(e) {
        (e.alternate = null),
          (e.child = null),
          (e.dependencies = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.return = null),
          (e.updateQueue = null);
      }
      function ws(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function Es(e) {
        e: {
          for (var t = e.return; null !== t;) {
            if (ws(t)) break e;
            t = t.return;
          }
          throw Error(o(160));
        }
        var n = t;
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(o(161));
        }
        16 & n.flags && (ye(t, ""), (n.flags &= -17));
        e: t: for (n = e; ;) {
          for (; null === n.sibling;) {
            if (null === n.return || ws(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.flags) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.flags)) {
            n = n.stateNode;
            break e;
          }
        }
        r ? Ss(e, n, t) : Cs(e, n, t);
      }
      function Ss(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType
                ? (t = n.parentNode).insertBefore(e, n)
                : (t = n).appendChild(e),
                (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                null !== t.onclick ||
                (t.onclick = Fr));
        else if (4 !== r && null !== (e = e.child))
          for (Ss(e, t, n), e = e.sibling; null !== e;)
            Ss(e, t, n), (e = e.sibling);
      }
      function Cs(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (Cs(e, t, n), e = e.sibling; null !== e;)
            Cs(e, t, n), (e = e.sibling);
      }
      function ks(e, t) {
        for (var n, r, a = t, i = !1; ;) {
          if (!i) {
            i = a.return;
            e: for (; ;) {
              if (null === i) throw Error(o(160));
              switch (((n = i.stateNode), i.tag)) {
                case 5:
                  r = !1;
                  break e;
                case 3:
                case 4:
                  (n = n.containerInfo), (r = !0);
                  break e;
              }
              i = i.return;
            }
            i = !0;
          }
          if (5 === a.tag || 6 === a.tag) {
            e: for (var s = e, l = a, u = l; ;)
              if ((bs(s, u), null !== u.child && 4 !== u.tag))
                (u.child.return = u), (u = u.child);
              else {
                if (u === l) break e;
                for (; null === u.sibling;) {
                  if (null === u.return || u.return === l) break e;
                  u = u.return;
                }
                (u.sibling.return = u.return), (u = u.sibling);
              }
            r
              ? ((s = n),
                (l = a.stateNode),
                8 === s.nodeType
                  ? s.parentNode.removeChild(l)
                  : s.removeChild(l))
              : n.removeChild(a.stateNode);
          } else if (4 === a.tag) {
            if (null !== a.child) {
              (n = a.stateNode.containerInfo),
                (r = !0),
                (a.child.return = a),
                (a = a.child);
              continue;
            }
          } else if ((bs(e, a), null !== a.child)) {
            (a.child.return = a), (a = a.child);
            continue;
          }
          if (a === t) break;
          for (; null === a.sibling;) {
            if (null === a.return || a.return === t) return;
            4 === (a = a.return).tag && (i = !1);
          }
          (a.sibling.return = a.return), (a = a.sibling);
        }
      }
      function Ts(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            var n = t.updateQueue;
            if (null !== (n = null !== n ? n.lastEffect : null)) {
              var r = (n = n.next);
              do {
                3 === (3 & r.tag) &&
                  ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                  (r = r.next);
              } while (r !== n);
            }
            return;
          case 1:
          case 12:
          case 17:
            return;
          case 5:
            if (null != (n = t.stateNode)) {
              r = t.memoizedProps;
              var a = null !== e ? e.memoizedProps : r;
              e = t.type;
              var i = t.updateQueue;
              if (((t.updateQueue = null), null !== i)) {
                for (
                  n[Jr] = r,
                  "input" === e &&
                  "radio" === r.type &&
                  null != r.name &&
                  te(n, r),
                  ke(e, a),
                  t = ke(e, r),
                  a = 0;
                  a < i.length;
                  a += 2
                ) {
                  var s = i[a],
                    l = i[a + 1];
                  "style" === s
                    ? Ee(n, l)
                    : "dangerouslySetInnerHTML" === s
                      ? ge(n, l)
                      : "children" === s
                        ? ye(n, l)
                        : x(n, s, l, t);
                }
                switch (e) {
                  case "input":
                    ne(n, r);
                    break;
                  case "textarea":
                    ue(n, r);
                    break;
                  case "select":
                    (e = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (i = r.value)
                        ? oe(n, !!r.multiple, i, !1)
                        : e !== !!r.multiple &&
                        (null != r.defaultValue
                          ? oe(n, !!r.multiple, r.defaultValue, !0)
                          : oe(n, !!r.multiple, r.multiple ? [] : "", !1));
                }
              }
            }
            return;
          case 6:
            if (null === t.stateNode) throw Error(o(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
          case 3:
            return void (
              (n = t.stateNode).hydrate &&
              ((n.hydrate = !1), Et(n.containerInfo))
            );
          case 13:
            return (
              null !== t.memoizedState && ((Gs = Wa()), ys(t.child, !0)),
              void Ps(t)
            );
          case 19:
            return void Ps(t);
          case 23:
          case 24:
            return void ys(t, null !== t.memoizedState);
        }
        throw Error(o(163));
      }
      function Ps(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new hs()),
            t.forEach(function (t) {
              var r = Hl.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      function js(e, t) {
        return (
          null !== e &&
          (null === (e = e.memoizedState) || null !== e.dehydrated) &&
          null !== (t = t.memoizedState) &&
          null === t.dehydrated
        );
      }
      var Os = Math.ceil,
        Ms = w.ReactCurrentDispatcher,
        Ns = w.ReactCurrentOwner,
        Ls = 0,
        As = null,
        zs = null,
        _s = 0,
        Rs = 0,
        Ds = ua(0),
        Vs = 0,
        Is = null,
        Fs = 0,
        Bs = 0,
        Hs = 0,
        Ws = 0,
        Us = null,
        Gs = 0,
        $s = 1 / 0;
      function Ys() {
        $s = Wa() + 500;
      }
      var qs,
        Xs = null,
        Zs = !1,
        Qs = null,
        Ks = null,
        Js = !1,
        el = null,
        tl = 90,
        nl = [],
        rl = [],
        al = null,
        il = 0,
        ol = null,
        sl = -1,
        ll = 0,
        ul = 0,
        cl = null,
        dl = !1;
      function fl() {
        return 0 !== (48 & Ls) ? Wa() : -1 !== sl ? sl : (sl = Wa());
      }
      function pl(e) {
        if (0 === (2 & (e = e.mode))) return 1;
        if (0 === (4 & e)) return 99 === Ua() ? 1 : 2;
        if ((0 === ll && (ll = Fs), 0 !== Za.transition)) {
          0 !== ul && (ul = null !== Us ? Us.pendingLanes : 0), (e = ll);
          var t = 4186112 & ~ul;
          return (
            0 === (t &= -t) &&
            0 === (t = (e = 4186112 & ~e) & -e) &&
            (t = 8192),
            t
          );
        }
        return (
          (e = Ua()),
          0 !== (4 & Ls) && 98 === e
            ? (e = Ft(12, ll))
            : (e = Ft(
              (e = (function (e) {
                switch (e) {
                  case 99:
                    return 15;
                  case 98:
                    return 10;
                  case 97:
                  case 96:
                    return 8;
                  case 95:
                    return 2;
                  default:
                    return 0;
                }
              })(e)),
              ll
            )),
          e
        );
      }
      function hl(e, t, n) {
        if (50 < il) throw ((il = 0), (ol = null), Error(o(185)));
        if (null === (e = vl(e, t))) return null;
        Wt(e, t, n), e === As && ((Hs |= t), 4 === Vs && yl(e, _s));
        var r = Ua();
        1 === t
          ? 0 !== (8 & Ls) && 0 === (48 & Ls)
            ? bl(e)
            : (ml(e, n), 0 === Ls && (Ys(), qa()))
          : (0 === (4 & Ls) ||
            (98 !== r && 99 !== r) ||
            (null === al ? (al = new Set([e])) : al.add(e)),
            ml(e, n)),
          (Us = e);
      }
      function vl(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;)
          (e.childLanes |= t),
            null !== (n = e.alternate) && (n.childLanes |= t),
            (n = e),
            (e = e.return);
        return 3 === n.tag ? n.stateNode : null;
      }
      function ml(e, t) {
        for (
          var n = e.callbackNode,
          r = e.suspendedLanes,
          a = e.pingedLanes,
          i = e.expirationTimes,
          s = e.pendingLanes;
          0 < s;

        ) {
          var l = 31 - Ut(s),
            u = 1 << l,
            c = i[l];
          if (-1 === c) {
            if (0 === (u & r) || 0 !== (u & a)) {
              (c = t), Dt(u);
              var d = Rt;
              i[l] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1;
            }
          } else c <= t && (e.expiredLanes |= u);
          s &= ~u;
        }
        if (((r = Vt(e, e === As ? _s : 0)), (t = Rt), 0 === r))
          null !== n &&
            (n !== Da && Pa(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
        else {
          if (null !== n) {
            if (e.callbackPriority === t) return;
            n !== Da && Pa(n);
          }
          15 === t
            ? ((n = bl.bind(null, e)),
              null === Ia ? ((Ia = [n]), (Fa = Ta(La, Xa))) : Ia.push(n),
              (n = Da))
            : 14 === t
              ? (n = Ya(99, bl.bind(null, e)))
              : ((n = (function (e) {
                switch (e) {
                  case 15:
                  case 14:
                    return 99;
                  case 13:
                  case 12:
                  case 11:
                  case 10:
                    return 98;
                  case 9:
                  case 8:
                  case 7:
                  case 6:
                  case 4:
                  case 5:
                    return 97;
                  case 3:
                  case 2:
                  case 1:
                    return 95;
                  case 0:
                    return 90;
                  default:
                    throw Error(o(358, e));
                }
              })(t)),
                (n = Ya(n, gl.bind(null, e)))),
            (e.callbackPriority = t),
            (e.callbackNode = n);
        }
      }
      function gl(e) {
        if (((sl = -1), (ul = ll = 0), 0 !== (48 & Ls))) throw Error(o(327));
        var t = e.callbackNode;
        if (_l() && e.callbackNode !== t) return null;
        var n = Vt(e, e === As ? _s : 0);
        if (0 === n) return null;
        var r = n,
          a = Ls;
        Ls |= 16;
        var i = Tl();
        for ((As === e && _s === r) || (Ys(), Cl(e, r)); ;)
          try {
            Ol();
            break;
          } catch (l) {
            kl(e, l);
          }
        if (
          (ni(),
            (Ms.current = i),
            (Ls = a),
            null !== zs ? (r = 0) : ((As = null), (_s = 0), (r = Vs)),
            0 !== (Fs & Hs))
        )
          Cl(e, 0);
        else if (0 !== r) {
          if (
            (2 === r &&
              ((Ls |= 64),
                e.hydrate && ((e.hydrate = !1), Yr(e.containerInfo)),
                0 !== (n = It(e)) && (r = Pl(e, n))),
              1 === r)
          )
            throw ((t = Is), Cl(e, 0), yl(e, n), ml(e, Wa()), t);
          switch (
          ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
          ) {
            case 0:
            case 1:
              throw Error(o(345));
            case 2:
            case 5:
              Ll(e);
              break;
            case 3:
              if (
                (yl(e, n), (62914560 & n) === n && 10 < (r = Gs + 500 - Wa()))
              ) {
                if (0 !== Vt(e, 0)) break;
                if (((a = e.suspendedLanes) & n) !== n) {
                  fl(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = Gr(Ll.bind(null, e), r);
                break;
              }
              Ll(e);
              break;
            case 4:
              if ((yl(e, n), (4186112 & n) === n)) break;
              for (r = e.eventTimes, a = -1; 0 < n;) {
                var s = 31 - Ut(n);
                (i = 1 << s), (s = r[s]) > a && (a = s), (n &= ~i);
              }
              if (
                ((n = a),
                  10 <
                  (n =
                    (120 > (n = Wa() - n)
                      ? 120
                      : 480 > n
                        ? 480
                        : 1080 > n
                          ? 1080
                          : 1920 > n
                            ? 1920
                            : 3e3 > n
                              ? 3e3
                              : 4320 > n
                                ? 4320
                                : 1960 * Os(n / 1960)) - n))
              ) {
                e.timeoutHandle = Gr(Ll.bind(null, e), n);
                break;
              }
              Ll(e);
              break;
            default:
              throw Error(o(329));
          }
        }
        return ml(e, Wa()), e.callbackNode === t ? gl.bind(null, e) : null;
      }
      function yl(e, t) {
        for (
          t &= ~Ws,
          t &= ~Hs,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
          0 < t;

        ) {
          var n = 31 - Ut(t),
            r = 1 << n;
          (e[n] = -1), (t &= ~r);
        }
      }
      function bl(e) {
        if (0 !== (48 & Ls)) throw Error(o(327));
        if ((_l(), e === As && 0 !== (e.expiredLanes & _s))) {
          var t = _s,
            n = Pl(e, t);
          0 !== (Fs & Hs) && (n = Pl(e, (t = Vt(e, t))));
        } else n = Pl(e, (t = Vt(e, 0)));
        if (
          (0 !== e.tag &&
            2 === n &&
            ((Ls |= 64),
              e.hydrate && ((e.hydrate = !1), Yr(e.containerInfo)),
              0 !== (t = It(e)) && (n = Pl(e, t))),
            1 === n)
        )
          throw ((n = Is), Cl(e, 0), yl(e, t), ml(e, Wa()), n);
        return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = t),
          Ll(e),
          ml(e, Wa()),
          null
        );
      }
      function xl(e, t) {
        var n = Ls;
        Ls |= 1;
        try {
          return e(t);
        } finally {
          0 === (Ls = n) && (Ys(), qa());
        }
      }
      function wl(e, t) {
        var n = Ls;
        (Ls &= -2), (Ls |= 8);
        try {
          return e(t);
        } finally {
          0 === (Ls = n) && (Ys(), qa());
        }
      }
      function El(e, t) {
        da(Ds, Rs), (Rs |= t), (Fs |= t);
      }
      function Sl() {
        (Rs = Ds.current), ca(Ds);
      }
      function Cl(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), $r(n)), null !== zs))
          for (n = zs.return; null !== n;) {
            var r = n;
            switch (r.tag) {
              case 1:
                null !== (r = r.type.childContextTypes) &&
                  void 0 !== r &&
                  ya();
                break;
              case 3:
                zi(), ca(ha), ca(pa), Xi();
                break;
              case 5:
                Ri(r);
                break;
              case 4:
                zi();
                break;
              case 13:
              case 19:
                ca(Di);
                break;
              case 10:
                ri(r);
                break;
              case 23:
              case 24:
                Sl();
            }
            n = n.return;
          }
        (As = e),
          (zs = $l(e.current, null)),
          (_s = Rs = Fs = t),
          (Vs = 0),
          (Is = null),
          (Ws = Hs = Bs = 0);
      }
      function kl(e, t) {
        for (; ;) {
          var n = zs;
          try {
            if ((ni(), (Zi.current = Lo), no)) {
              for (var r = Ji.memoizedState; null !== r;) {
                var a = r.queue;
                null !== a && (a.pending = null), (r = r.next);
              }
              no = !1;
            }
            if (
              ((Ki = 0),
                (to = eo = Ji = null),
                (ro = !1),
                (Ns.current = null),
                null === n || null === n.return)
            ) {
              (Vs = 1), (Is = t), (zs = null);
              break;
            }
            e: {
              var i = e,
                o = n.return,
                s = n,
                l = t;
              if (
                ((t = _s),
                  (s.flags |= 2048),
                  (s.firstEffect = s.lastEffect = null),
                  null !== l &&
                  "object" === typeof l &&
                  "function" === typeof l.then)
              ) {
                var u = l;
                if (0 === (2 & s.mode)) {
                  var c = s.alternate;
                  c
                    ? ((s.updateQueue = c.updateQueue),
                      (s.memoizedState = c.memoizedState),
                      (s.lanes = c.lanes))
                    : ((s.updateQueue = null), (s.memoizedState = null));
                }
                var d = 0 !== (1 & Di.current),
                  f = o;
                do {
                  var p;
                  if ((p = 13 === f.tag)) {
                    var h = f.memoizedState;
                    if (null !== h) p = null !== h.dehydrated;
                    else {
                      var v = f.memoizedProps;
                      p =
                        void 0 !== v.fallback &&
                        (!0 !== v.unstable_avoidThisFallback || !d);
                    }
                  }
                  if (p) {
                    var m = f.updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (f.updateQueue = g);
                    } else m.add(u);
                    if (0 === (2 & f.mode)) {
                      if (
                        ((f.flags |= 64),
                          (s.flags |= 16384),
                          (s.flags &= -2981),
                          1 === s.tag)
                      )
                        if (null === s.alternate) s.tag = 17;
                        else {
                          var y = ci(-1, 1);
                          (y.tag = 2), di(s, y);
                        }
                      s.lanes |= 1;
                      break e;
                    }
                    (l = void 0), (s = t);
                    var b = i.pingCache;
                    if (
                      (null === b
                        ? ((b = i.pingCache = new ds()),
                          (l = new Set()),
                          b.set(u, l))
                        : void 0 === (l = b.get(u)) &&
                        ((l = new Set()), b.set(u, l)),
                        !l.has(s))
                    ) {
                      l.add(s);
                      var x = Bl.bind(null, i, u, s);
                      u.then(x, x);
                    }
                    (f.flags |= 4096), (f.lanes = t);
                    break e;
                  }
                  f = f.return;
                } while (null !== f);
                l = Error(
                  (Y(s.type) || "A React component") +
                  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                );
              }
              5 !== Vs && (Vs = 2), (l = us(l, s)), (f = o);
              do {
                switch (f.tag) {
                  case 3:
                    (i = l),
                      (f.flags |= 4096),
                      (t &= -t),
                      (f.lanes |= t),
                      fi(f, fs(0, i, t));
                    break e;
                  case 1:
                    i = l;
                    var w = f.type,
                      E = f.stateNode;
                    if (
                      0 === (64 & f.flags) &&
                      ("function" === typeof w.getDerivedStateFromError ||
                        (null !== E &&
                          "function" === typeof E.componentDidCatch &&
                          (null === Ks || !Ks.has(E))))
                    ) {
                      (f.flags |= 4096),
                        (t &= -t),
                        (f.lanes |= t),
                        fi(f, ps(f, i, t));
                      break e;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Nl(n);
          } catch (S) {
            (t = S), zs === n && null !== n && (zs = n = n.return);
            continue;
          }
          break;
        }
      }
      function Tl() {
        var e = Ms.current;
        return (Ms.current = Lo), null === e ? Lo : e;
      }
      function Pl(e, t) {
        var n = Ls;
        Ls |= 16;
        var r = Tl();
        for ((As === e && _s === t) || Cl(e, t); ;)
          try {
            jl();
            break;
          } catch (a) {
            kl(e, a);
          }
        if ((ni(), (Ls = n), (Ms.current = r), null !== zs))
          throw Error(o(261));
        return (As = null), (_s = 0), Vs;
      }
      function jl() {
        for (; null !== zs;) Ml(zs);
      }
      function Ol() {
        for (; null !== zs && !ja();) Ml(zs);
      }
      function Ml(e) {
        var t = qs(e.alternate, e, Rs);
        (e.memoizedProps = e.pendingProps),
          null === t ? Nl(e) : (zs = t),
          (Ns.current = null);
      }
      function Nl(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (((e = t.return), 0 === (2048 & t.flags))) {
            if (null !== (n = ss(n, t, Rs))) return void (zs = n);
            if (
              (24 !== (n = t).tag && 23 !== n.tag) ||
              null === n.memoizedState ||
              0 !== (1073741824 & Rs) ||
              0 === (4 & n.mode)
            ) {
              for (var r = 0, a = n.child; null !== a;)
                (r |= a.lanes | a.childLanes), (a = a.sibling);
              n.childLanes = r;
            }
            null !== e &&
              0 === (2048 & e.flags) &&
              (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                (null !== e.lastEffect &&
                  (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                (null !== e.lastEffect
                  ? (e.lastEffect.nextEffect = t)
                  : (e.firstEffect = t),
                  (e.lastEffect = t)));
          } else {
            if (null !== (n = ls(t))) return (n.flags &= 2047), void (zs = n);
            null !== e &&
              ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
          }
          if (null !== (t = t.sibling)) return void (zs = t);
          zs = t = e;
        } while (null !== t);
        0 === Vs && (Vs = 5);
      }
      function Ll(e) {
        var t = Ua();
        return $a(99, Al.bind(null, e, t)), null;
      }
      function Al(e, t) {
        do {
          _l();
        } while (null !== el);
        if (0 !== (48 & Ls)) throw Error(o(327));
        var n = e.finishedWork;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
          throw Error(o(177));
        e.callbackNode = null;
        var r = n.lanes | n.childLanes,
          a = r,
          i = e.pendingLanes & ~a;
        (e.pendingLanes = a),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.expiredLanes &= a),
          (e.mutableReadLanes &= a),
          (e.entangledLanes &= a),
          (a = e.entanglements);
        for (var s = e.eventTimes, l = e.expirationTimes; 0 < i;) {
          var u = 31 - Ut(i),
            c = 1 << u;
          (a[u] = 0), (s[u] = -1), (l[u] = -1), (i &= ~c);
        }
        if (
          (null !== al && 0 === (24 & r) && al.has(e) && al.delete(e),
            e === As && ((zs = As = null), (_s = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
        ) {
          if (
            ((a = Ls),
              (Ls |= 32),
              (Ns.current = null),
              (Br = Xt),
              gr((s = mr())))
          ) {
            if ("selectionStart" in s)
              l = { start: s.selectionStart, end: s.selectionEnd };
            else
              e: if (
                ((l = ((l = s.ownerDocument) && l.defaultView) || window),
                  (c = l.getSelection && l.getSelection()) &&
                  0 !== c.rangeCount)
              ) {
                (l = c.anchorNode),
                  (i = c.anchorOffset),
                  (u = c.focusNode),
                  (c = c.focusOffset);
                try {
                  l.nodeType, u.nodeType;
                } catch (T) {
                  l = null;
                  break e;
                }
                var d = 0,
                  f = -1,
                  p = -1,
                  h = 0,
                  v = 0,
                  m = s,
                  g = null;
                t: for (; ;) {
                  for (
                    var y;
                    m !== l || (0 !== i && 3 !== m.nodeType) || (f = d + i),
                    m !== u || (0 !== c && 3 !== m.nodeType) || (p = d + c),
                    3 === m.nodeType && (d += m.nodeValue.length),
                    null !== (y = m.firstChild);

                  )
                    (g = m), (m = y);
                  for (; ;) {
                    if (m === s) break t;
                    if (
                      (g === l && ++h === i && (f = d),
                        g === u && ++v === c && (p = d),
                        null !== (y = m.nextSibling))
                    )
                      break;
                    g = (m = g).parentNode;
                  }
                  m = y;
                }
                l = -1 === f || -1 === p ? null : { start: f, end: p };
              } else l = null;
            l = l || { start: 0, end: 0 };
          } else l = null;
          (Hr = { focusedElem: s, selectionRange: l }),
            (Xt = !1),
            (cl = null),
            (dl = !1),
            (Xs = r);
          do {
            try {
              zl();
            } catch (T) {
              if (null === Xs) throw Error(o(330));
              Fl(Xs, T), (Xs = Xs.nextEffect);
            }
          } while (null !== Xs);
          (cl = null), (Xs = r);
          do {
            try {
              for (s = e; null !== Xs;) {
                var b = Xs.flags;
                if ((16 & b && ye(Xs.stateNode, ""), 128 & b)) {
                  var x = Xs.alternate;
                  if (null !== x) {
                    var w = x.ref;
                    null !== w &&
                      ("function" === typeof w
                        ? w(null)
                        : (w.current = null));
                  }
                }
                switch (1038 & b) {
                  case 2:
                    Es(Xs), (Xs.flags &= -3);
                    break;
                  case 6:
                    Es(Xs), (Xs.flags &= -3), Ts(Xs.alternate, Xs);
                    break;
                  case 1024:
                    Xs.flags &= -1025;
                    break;
                  case 1028:
                    (Xs.flags &= -1025), Ts(Xs.alternate, Xs);
                    break;
                  case 4:
                    Ts(Xs.alternate, Xs);
                    break;
                  case 8:
                    ks(s, (l = Xs));
                    var E = l.alternate;
                    xs(l), null !== E && xs(E);
                }
                Xs = Xs.nextEffect;
              }
            } catch (T) {
              if (null === Xs) throw Error(o(330));
              Fl(Xs, T), (Xs = Xs.nextEffect);
            }
          } while (null !== Xs);
          if (
            ((w = Hr),
              (x = mr()),
              (b = w.focusedElem),
              (s = w.selectionRange),
              x !== b &&
              b &&
              b.ownerDocument &&
              vr(b.ownerDocument.documentElement, b))
          ) {
            null !== s &&
              gr(b) &&
              ((x = s.start),
                void 0 === (w = s.end) && (w = x),
                "selectionStart" in b
                  ? ((b.selectionStart = x),
                    (b.selectionEnd = Math.min(w, b.value.length)))
                  : (w =
                    ((x = b.ownerDocument || document) && x.defaultView) ||
                    window).getSelection &&
                  ((w = w.getSelection()),
                    (l = b.textContent.length),
                    (E = Math.min(s.start, l)),
                    (s = void 0 === s.end ? E : Math.min(s.end, l)),
                    !w.extend && E > s && ((l = s), (s = E), (E = l)),
                    (l = hr(b, E)),
                    (i = hr(b, s)),
                    l &&
                    i &&
                    (1 !== w.rangeCount ||
                      w.anchorNode !== l.node ||
                      w.anchorOffset !== l.offset ||
                      w.focusNode !== i.node ||
                      w.focusOffset !== i.offset) &&
                    ((x = x.createRange()).setStart(l.node, l.offset),
                      w.removeAllRanges(),
                      E > s
                        ? (w.addRange(x), w.extend(i.node, i.offset))
                        : (x.setEnd(i.node, i.offset), w.addRange(x))))),
              (x = []);
            for (w = b; (w = w.parentNode);)
              1 === w.nodeType &&
                x.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
            for (
              "function" === typeof b.focus && b.focus(), b = 0;
              b < x.length;
              b++
            )
              ((w = x[b]).element.scrollLeft = w.left),
                (w.element.scrollTop = w.top);
          }
          (Xt = !!Br), (Hr = Br = null), (e.current = n), (Xs = r);
          do {
            try {
              for (b = e; null !== Xs;) {
                var S = Xs.flags;
                if ((36 & S && gs(b, Xs.alternate, Xs), 128 & S)) {
                  x = void 0;
                  var C = Xs.ref;
                  if (null !== C) {
                    var k = Xs.stateNode;
                    Xs.tag,
                      (x = k),
                      "function" === typeof C ? C(x) : (C.current = x);
                  }
                }
                Xs = Xs.nextEffect;
              }
            } catch (T) {
              if (null === Xs) throw Error(o(330));
              Fl(Xs, T), (Xs = Xs.nextEffect);
            }
          } while (null !== Xs);
          (Xs = null), Va(), (Ls = a);
        } else e.current = n;
        if (Js) (Js = !1), (el = e), (tl = t);
        else
          for (Xs = r; null !== Xs;)
            (t = Xs.nextEffect),
              (Xs.nextEffect = null),
              8 & Xs.flags &&
              (((S = Xs).sibling = null), (S.stateNode = null)),
              (Xs = t);
        if (
          (0 === (r = e.pendingLanes) && (Ks = null),
            1 === r ? (e === ol ? il++ : ((il = 0), (ol = e))) : (il = 0),
            (n = n.stateNode),
            Ca && "function" === typeof Ca.onCommitFiberRoot)
        )
          try {
            Ca.onCommitFiberRoot(
              Sa,
              n,
              void 0,
              64 === (64 & n.current.flags)
            );
          } catch (T) { }
        if ((ml(e, Wa()), Zs)) throw ((Zs = !1), (e = Qs), (Qs = null), e);
        return 0 !== (8 & Ls) || qa(), null;
      }
      function zl() {
        for (; null !== Xs;) {
          var e = Xs.alternate;
          dl ||
            null === cl ||
            (0 !== (8 & Xs.flags)
              ? et(Xs, cl) && (dl = !0)
              : 13 === Xs.tag && js(e, Xs) && et(Xs, cl) && (dl = !0));
          var t = Xs.flags;
          0 !== (256 & t) && ms(e, Xs),
            0 === (512 & t) ||
            Js ||
            ((Js = !0),
              Ya(97, function () {
                return _l(), null;
              })),
            (Xs = Xs.nextEffect);
        }
      }
      function _l() {
        if (90 !== tl) {
          var e = 97 < tl ? 97 : tl;
          return (tl = 90), $a(e, Vl);
        }
        return !1;
      }
      function Rl(e, t) {
        nl.push(t, e),
          Js ||
          ((Js = !0),
            Ya(97, function () {
              return _l(), null;
            }));
      }
      function Dl(e, t) {
        rl.push(t, e),
          Js ||
          ((Js = !0),
            Ya(97, function () {
              return _l(), null;
            }));
      }
      function Vl() {
        if (null === el) return !1;
        var e = el;
        if (((el = null), 0 !== (48 & Ls))) throw Error(o(331));
        var t = Ls;
        Ls |= 32;
        var n = rl;
        rl = [];
        for (var r = 0; r < n.length; r += 2) {
          var a = n[r],
            i = n[r + 1],
            s = a.destroy;
          if (((a.destroy = void 0), "function" === typeof s))
            try {
              s();
            } catch (u) {
              if (null === i) throw Error(o(330));
              Fl(i, u);
            }
        }
        for (n = nl, nl = [], r = 0; r < n.length; r += 2) {
          (a = n[r]), (i = n[r + 1]);
          try {
            var l = a.create;
            a.destroy = l();
          } catch (u) {
            if (null === i) throw Error(o(330));
            Fl(i, u);
          }
        }
        for (l = e.current.firstEffect; null !== l;)
          (e = l.nextEffect),
            (l.nextEffect = null),
            8 & l.flags && ((l.sibling = null), (l.stateNode = null)),
            (l = e);
        return (Ls = t), qa(), !0;
      }
      function Il(e, t, n) {
        di(e, (t = fs(0, (t = us(n, t)), 1))),
          (t = fl()),
          null !== (e = vl(e, 1)) && (Wt(e, 1, t), ml(e, t));
      }
      function Fl(e, t) {
        if (3 === e.tag) Il(e, e, t);
        else
          for (var n = e.return; null !== n;) {
            if (3 === n.tag) {
              Il(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                "function" === typeof n.type.getDerivedStateFromError ||
                ("function" === typeof r.componentDidCatch &&
                  (null === Ks || !Ks.has(r)))
              ) {
                var a = ps(n, (e = us(t, e)), 1);
                if ((di(n, a), (a = fl()), null !== (n = vl(n, 1))))
                  Wt(n, 1, a), ml(n, a);
                else if (
                  "function" === typeof r.componentDidCatch &&
                  (null === Ks || !Ks.has(r))
                )
                  try {
                    r.componentDidCatch(t, e);
                  } catch (i) { }
                break;
              }
            }
            n = n.return;
          }
      }
      function Bl(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          (t = fl()),
          (e.pingedLanes |= e.suspendedLanes & n),
          As === e &&
          (_s & n) === n &&
          (4 === Vs ||
            (3 === Vs && (62914560 & _s) === _s && 500 > Wa() - Gs)
            ? Cl(e, 0)
            : (Ws |= n)),
          ml(e, t);
      }
      function Hl(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 === (t = 0) &&
          (0 === (2 & (t = e.mode))
            ? (t = 1)
            : 0 === (4 & t)
              ? (t = 99 === Ua() ? 1 : 2)
              : (0 === ll && (ll = Fs),
                0 === (t = Bt(62914560 & ~ll)) && (t = 4194304))),
          (n = fl()),
          null !== (e = vl(e, t)) && (Wt(e, t, n), ml(e, n));
      }
      function Wl(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
            null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
            null),
          (this.mode = r),
          (this.flags = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function Ul(e, t, n, r) {
        return new Wl(e, t, n, r);
      }
      function Gl(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function $l(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Ul(e.tag, t, e.key, e.mode)).elementType =
              e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Yl(e, t, n, r, a, i) {
        var s = 2;
        if (((r = e), "function" === typeof e)) Gl(e) && (s = 1);
        else if ("string" === typeof e) s = 5;
        else
          e: switch (e) {
            case C:
              return ql(n.children, a, i, t);
            case R:
              (s = 8), (a |= 16);
              break;
            case k:
              (s = 8), (a |= 1);
              break;
            case T:
              return (
                ((e = Ul(12, n, t, 8 | a)).elementType = T),
                (e.type = T),
                (e.lanes = i),
                e
              );
            case M:
              return (
                ((e = Ul(13, n, t, a)).type = M),
                (e.elementType = M),
                (e.lanes = i),
                e
              );
            case N:
              return (
                ((e = Ul(19, n, t, a)).elementType = N), (e.lanes = i), e
              );
            case D:
              return Xl(n, a, i, t);
            case V:
              return (
                ((e = Ul(24, n, t, a)).elementType = V), (e.lanes = i), e
              );
            default:
              if ("object" === typeof e && null !== e)
                switch (e.$$typeof) {
                  case P:
                    s = 10;
                    break e;
                  case j:
                    s = 9;
                    break e;
                  case O:
                    s = 11;
                    break e;
                  case L:
                    s = 14;
                    break e;
                  case A:
                    (s = 16), (r = null);
                    break e;
                  case z:
                    s = 22;
                    break e;
                }
              throw Error(o(130, null == e ? e : typeof e, ""));
          }
        return (
          ((t = Ul(s, n, t, a)).elementType = e),
          (t.type = r),
          (t.lanes = i),
          t
        );
      }
      function ql(e, t, n, r) {
        return ((e = Ul(7, e, r, t)).lanes = n), e;
      }
      function Xl(e, t, n, r) {
        return ((e = Ul(23, e, r, t)).elementType = D), (e.lanes = n), e;
      }
      function Zl(e, t, n) {
        return ((e = Ul(6, e, null, t)).lanes = n), e;
      }
      function Ql(e, t, n) {
        return (
          ((t = Ul(
            4,
            null !== e.children ? e.children : [],
            e.key,
            t
          )).lanes = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function Kl(e, t, n) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
            null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 0),
          (this.eventTimes = Ht(0)),
          (this.expirationTimes = Ht(-1)),
          (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
            0),
          (this.entanglements = Ht(0)),
          (this.mutableSourceEagerHydrationData = null);
      }
      function Jl(e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3]
            ? arguments[3]
            : null;
        return {
          $$typeof: S,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      }
      function eu(e, t, n, r) {
        var a = t.current,
          i = fl(),
          s = pl(a);
        e: if (n) {
          t: {
            if (Ze((n = n._reactInternals)) !== n || 1 !== n.tag)
              throw Error(o(170));
            var l = n;
            do {
              switch (l.tag) {
                case 3:
                  l = l.stateNode.context;
                  break t;
                case 1:
                  if (ga(l.type)) {
                    l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              l = l.return;
            } while (null !== l);
            throw Error(o(171));
          }
          if (1 === n.tag) {
            var u = n.type;
            if (ga(u)) {
              n = xa(n, u, l);
              break e;
            }
          }
          n = l;
        } else n = fa;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = ci(i, s)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          di(a, t),
          hl(a, s, i),
          s
        );
      }
      function tu(e) {
        return (e = e.current).child
          ? (e.child.tag, e.child.stateNode)
          : null;
      }
      function nu(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function ru(e, t) {
        nu(e, t), (e = e.alternate) && nu(e, t);
      }
      function au(e, t, n) {
        var r =
          (null != n &&
            null != n.hydrationOptions &&
            n.hydrationOptions.mutableSources) ||
          null;
        if (
          ((n = new Kl(e, t, null != n && !0 === n.hydrate)),
            (t = Ul(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            li(t),
            (e[ea] = n.current),
            Lr(8 === e.nodeType ? e.parentNode : e),
            r)
        )
          for (e = 0; e < r.length; e++) {
            var a = (t = r[e])._getVersion;
            (a = a(t._source)),
              null == n.mutableSourceEagerHydrationData
                ? (n.mutableSourceEagerHydrationData = [t, a])
                : n.mutableSourceEagerHydrationData.push(t, a);
          }
        this._internalRoot = n;
      }
      function iu(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }
      function ou(e, t, n, r, a) {
        var i = n._reactRootContainer;
        if (i) {
          var o = i._internalRoot;
          if ("function" === typeof a) {
            var s = a;
            a = function () {
              var e = tu(o);
              s.call(e);
            };
          }
          eu(t, o, e, a);
        } else {
          if (
            ((i = n._reactRootContainer =
              (function (e, t) {
                if (
                  (t ||
                    (t = !(
                      !(t = e
                        ? 9 === e.nodeType
                          ? e.documentElement
                          : e.firstChild
                        : null) ||
                      1 !== t.nodeType ||
                      !t.hasAttribute("data-reactroot")
                    )),
                    !t)
                )
                  for (var n; (n = e.lastChild);) e.removeChild(n);
                return new au(e, 0, t ? { hydrate: !0 } : void 0);
              })(n, r)),
              (o = i._internalRoot),
              "function" === typeof a)
          ) {
            var l = a;
            a = function () {
              var e = tu(o);
              l.call(e);
            };
          }
          wl(function () {
            eu(t, o, e, a);
          });
        }
        return tu(o);
      }
      function su(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2]
            ? arguments[2]
            : null;
        if (!iu(t)) throw Error(o(200));
        return Jl(e, t, null, n);
      }
      (qs = function (e, t, n) {
        var r = t.lanes;
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || ha.current) Do = !0;
          else {
            if (0 === (n & r)) {
              switch (((Do = !1), t.tag)) {
                case 3:
                  Yo(t), Yi();
                  break;
                case 5:
                  _i(t);
                  break;
                case 1:
                  ga(t.type) && wa(t);
                  break;
                case 4:
                  Ai(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  r = t.memoizedProps.value;
                  var a = t.type._context;
                  da(Ka, a._currentValue), (a._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 !== (n & t.child.childLanes)
                      ? Ko(e, t, n)
                      : (da(Di, 1 & Di.current),
                        null !== (t = is(e, t, n)) ? t.sibling : null);
                  da(Di, 1 & Di.current);
                  break;
                case 19:
                  if (
                    ((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))
                  ) {
                    if (r) return as(e, t, n);
                    t.flags |= 64;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null),
                        (a.tail = null),
                        (a.lastEffect = null)),
                      da(Di, Di.current),
                      r)
                  )
                    break;
                  return null;
                case 23:
                case 24:
                  return (t.lanes = 0), Ho(e, t, n);
              }
              return is(e, t, n);
            }
            Do = 0 !== (16384 & e.flags);
          }
        else Do = !1;
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
                null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (a = ma(t, pa.current)),
                ii(t, n),
                (a = oo(null, t, r, e, a, n)),
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof)
            ) {
              if (
                ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  ga(r))
              ) {
                var i = !0;
                wa(t);
              } else i = !1;
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
                li(t);
              var s = r.getDerivedStateFromProps;
              "function" === typeof s && mi(t, r, s, e),
                (a.updater = gi),
                (t.stateNode = a),
                (a._reactInternals = t),
                wi(t, r, e, n),
                (t = $o(null, t, r, !0, i, n));
            } else (t.tag = 0), Vo(null, t, a, n), (t = t.child);
            return t;
          case 16:
            a = t.elementType;
            e: {
              switch (
              (null !== e &&
                ((e.alternate = null),
                  (t.alternate = null),
                  (t.flags |= 2)),
                (e = t.pendingProps),
                (a = (i = a._init)(a._payload)),
                (t.type = a),
                (i = t.tag =
                  (function (e) {
                    if ("function" === typeof e) return Gl(e) ? 1 : 0;
                    if (void 0 !== e && null !== e) {
                      if ((e = e.$$typeof) === O) return 11;
                      if (e === L) return 14;
                    }
                    return 2;
                  })(a)),
                (e = Qa(a, e)),
                i)
              ) {
                case 0:
                  t = Uo(null, t, a, e, n);
                  break e;
                case 1:
                  t = Go(null, t, a, e, n);
                  break e;
                case 11:
                  t = Io(null, t, a, e, n);
                  break e;
                case 14:
                  t = Fo(null, t, a, Qa(a.type, e), r, n);
                  break e;
              }
              throw Error(o(306, a, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Uo(e, t, r, (a = t.elementType === r ? a : Qa(r, a)), n)
            );
          case 1:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Go(e, t, r, (a = t.elementType === r ? a : Qa(r, a)), n)
            );
          case 3:
            if ((Yo(t), (r = t.updateQueue), null === e || null === r))
              throw Error(o(282));
            if (
              ((r = t.pendingProps),
                (a = null !== (a = t.memoizedState) ? a.element : null),
                ui(e, t),
                pi(t, r, null, n),
                (r = t.memoizedState.element) === a)
            )
              Yi(), (t = is(e, t, n));
            else {
              if (
                ((i = (a = t.stateNode).hydrate) &&
                  ((Fi = qr(t.stateNode.containerInfo.firstChild)),
                    (Ii = t),
                    (i = Bi = !0)),
                  i)
              ) {
                if (null != (e = a.mutableSourceEagerHydrationData))
                  for (a = 0; a < e.length; a += 2)
                    ((i = e[a])._workInProgressVersionPrimary = e[a + 1]),
                      qi.push(i);
                for (n = Pi(t, null, r, n), t.child = n; n;)
                  (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
              } else Vo(e, t, r, n), Yi();
              t = t.child;
            }
            return t;
          case 5:
            return (
              _i(t),
              null === e && Ui(t),
              (r = t.type),
              (a = t.pendingProps),
              (i = null !== e ? e.memoizedProps : null),
              (s = a.children),
              Ur(r, a)
                ? (s = null)
                : null !== i && Ur(r, i) && (t.flags |= 16),
              Wo(e, t),
              Vo(e, t, s, n),
              t.child
            );
          case 6:
            return null === e && Ui(t), null;
          case 13:
            return Ko(e, t, n);
          case 4:
            return (
              Ai(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Ti(t, null, r, n)) : Vo(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Io(e, t, r, (a = t.elementType === r ? a : Qa(r, a)), n)
            );
          case 7:
            return Vo(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Vo(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context),
                (a = t.pendingProps),
                (s = t.memoizedProps),
                (i = a.value);
              var l = t.type._context;
              if (
                (da(Ka, l._currentValue), (l._currentValue = i), null !== s)
              )
                if (
                  ((l = s.value),
                    0 ===
                    (i = cr(l, i)
                      ? 0
                      : 0 |
                      ("function" === typeof r._calculateChangedBits
                        ? r._calculateChangedBits(l, i)
                        : 1073741823)))
                ) {
                  if (s.children === a.children && !ha.current) {
                    t = is(e, t, n);
                    break e;
                  }
                } else
                  for (
                    null !== (l = t.child) && (l.return = t);
                    null !== l;

                  ) {
                    var u = l.dependencies;
                    if (null !== u) {
                      s = l.child;
                      for (var c = u.firstContext; null !== c;) {
                        if (c.context === r && 0 !== (c.observedBits & i)) {
                          1 === l.tag &&
                            (((c = ci(-1, n & -n)).tag = 2), di(l, c)),
                            (l.lanes |= n),
                            null !== (c = l.alternate) && (c.lanes |= n),
                            ai(l.return, n),
                            (u.lanes |= n);
                          break;
                        }
                        c = c.next;
                      }
                    } else
                      s = 10 === l.tag && l.type === t.type ? null : l.child;
                    if (null !== s) s.return = l;
                    else
                      for (s = l; null !== s;) {
                        if (s === t) {
                          s = null;
                          break;
                        }
                        if (null !== (l = s.sibling)) {
                          (l.return = s.return), (s = l);
                          break;
                        }
                        s = s.return;
                      }
                    l = s;
                  }
              Vo(e, t, a.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (a = t.type),
              (r = (i = t.pendingProps).children),
              ii(t, n),
              (r = r((a = oi(a, i.unstable_observedBits)))),
              (t.flags |= 1),
              Vo(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (i = Qa((a = t.type), t.pendingProps)),
              Fo(e, t, a, (i = Qa(a.type, i)), r, n)
            );
          case 15:
            return Bo(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (a = t.pendingProps),
              (a = t.elementType === r ? a : Qa(r, a)),
              null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (t.tag = 1),
              ga(r) ? ((e = !0), wa(t)) : (e = !1),
              ii(t, n),
              bi(t, r, a),
              wi(t, r, a, n),
              $o(null, t, r, !0, e, n)
            );
          case 19:
            return as(e, t, n);
          case 23:
          case 24:
            return Ho(e, t, n);
        }
        throw Error(o(156, t.tag));
      }),
        (au.prototype.render = function (e) {
          eu(e, this._internalRoot, null, null);
        }),
        (au.prototype.unmount = function () {
          var e = this._internalRoot,
            t = e.containerInfo;
          eu(null, e, null, function () {
            t[ea] = null;
          });
        }),
        (tt = function (e) {
          13 === e.tag && (hl(e, 4, fl()), ru(e, 4));
        }),
        (nt = function (e) {
          13 === e.tag && (hl(e, 67108864, fl()), ru(e, 67108864));
        }),
        (rt = function (e) {
          if (13 === e.tag) {
            var t = fl(),
              n = pl(e);
            hl(e, n, t), ru(e, n);
          }
        }),
        (at = function (e, t) {
          return t();
        }),
        (Pe = function (e, t, n) {
          switch (t) {
            case "input":
              if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                  ),
                  t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var a = ia(r);
                    if (!a) throw Error(o(90));
                    Q(r), ne(r, a);
                  }
                }
              }
              break;
            case "textarea":
              ue(e, n);
              break;
            case "select":
              null != (t = n.value) && oe(e, !!n.multiple, t, !1);
          }
        }),
        (Ae = xl),
        (ze = function (e, t, n, r, a) {
          var i = Ls;
          Ls |= 4;
          try {
            return $a(98, e.bind(null, t, n, r, a));
          } finally {
            0 === (Ls = i) && (Ys(), qa());
          }
        }),
        (_e = function () {
          0 === (49 & Ls) &&
            ((function () {
              if (null !== al) {
                var e = al;
                (al = null),
                  e.forEach(function (e) {
                    (e.expiredLanes |= 24 & e.pendingLanes), ml(e, Wa());
                  });
              }
              qa();
            })(),
              _l());
        }),
        (Re = function (e, t) {
          var n = Ls;
          Ls |= 2;
          try {
            return e(t);
          } finally {
            0 === (Ls = n) && (Ys(), qa());
          }
        });
      var lu = { Events: [ra, aa, ia, Ne, Le, _l, { current: !1 }] },
        uu = {
          findFiberByHostInstance: na,
          bundleType: 0,
          version: "17.0.2",
          rendererPackageName: "react-dom",
        },
        cu = {
          bundleType: uu.bundleType,
          version: uu.version,
          rendererPackageName: uu.rendererPackageName,
          rendererConfig: uu.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: w.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Je(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance:
            uu.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!du.isDisabled && du.supportsFiber)
          try {
            (Sa = du.inject(cu)), (Ca = du);
          } catch (me) { }
      }
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lu),
        (t.createPortal = su),
        (t.findDOMNode = function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(o(188));
            throw Error(o(268, Object.keys(e)));
          }
          return (e = null === (e = Je(t)) ? null : e.stateNode);
        }),
        (t.flushSync = function (e, t) {
          var n = Ls;
          if (0 !== (48 & n)) return e(t);
          Ls |= 1;
          try {
            if (e) return $a(99, e.bind(null, t));
          } finally {
            (Ls = n), qa();
          }
        }),
        (t.hydrate = function (e, t, n) {
          if (!iu(t)) throw Error(o(200));
          return ou(null, e, t, !0, n);
        }),
        (t.render = function (e, t, n) {
          if (!iu(t)) throw Error(o(200));
          return ou(null, e, t, !1, n);
        }),
        (t.unmountComponentAtNode = function (e) {
          if (!iu(e)) throw Error(o(40));
          return (
            !!e._reactRootContainer &&
            (wl(function () {
              ou(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[ea] = null);
              });
            }),
              !0)
          );
        }),
        (t.unstable_batchedUpdates = xl),
        (t.unstable_createPortal = function (e, t) {
          return su(
            e,
            t,
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null
          );
        }),
        (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
          if (!iu(n)) throw Error(o(200));
          if (null == e || void 0 === e._reactInternals) throw Error(o(38));
          return ou(e, t, n, !1, r);
        }),
        (t.version = "17.0.2");
    },
    164: function (e, t, n) {
      "use strict";
      !(function e() {
        if (
          "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = n(463));
    },
    77: function (e) {
      var t = "undefined" !== typeof Element,
        n = "function" === typeof Map,
        r = "function" === typeof Set,
        a = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
      function i(e, o) {
        if (e === o) return !0;
        if (e && o && "object" == typeof e && "object" == typeof o) {
          if (e.constructor !== o.constructor) return !1;
          var s, l, u, c;
          if (Array.isArray(e)) {
            if ((s = e.length) != o.length) return !1;
            for (l = s; 0 !== l--;) if (!i(e[l], o[l])) return !1;
            return !0;
          }
          if (n && e instanceof Map && o instanceof Map) {
            if (e.size !== o.size) return !1;
            for (c = e.entries(); !(l = c.next()).done;)
              if (!o.has(l.value[0])) return !1;
            for (c = e.entries(); !(l = c.next()).done;)
              if (!i(l.value[1], o.get(l.value[0]))) return !1;
            return !0;
          }
          if (r && e instanceof Set && o instanceof Set) {
            if (e.size !== o.size) return !1;
            for (c = e.entries(); !(l = c.next()).done;)
              if (!o.has(l.value[0])) return !1;
            return !0;
          }
          if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
            if ((s = e.length) != o.length) return !1;
            for (l = s; 0 !== l--;) if (e[l] !== o[l]) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === o.source && e.flags === o.flags;
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === o.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === o.toString();
          if ((s = (u = Object.keys(e)).length) !== Object.keys(o).length)
            return !1;
          for (l = s; 0 !== l--;)
            if (!Object.prototype.hasOwnProperty.call(o, u[l])) return !1;
          if (t && e instanceof Element) return !1;
          for (l = s; 0 !== l--;)
            if (
              (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l]) ||
                !e.$$typeof) &&
              !i(e[u[l]], o[u[l]])
            )
              return !1;
          return !0;
        }
        return e !== e && o !== o;
      }
      e.exports = function (e, t) {
        try {
          return i(e, t);
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"),
              !1
            );
          throw n;
        }
      };
    },
    475: function (e, t, n) {
      "use strict";
      var r,
        a = n(791),
        i =
          (r = a) && "object" === typeof r && "default" in r ? r.default : r;
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
            : (e[t] = n),
          e
        );
      }
      var s = !(
        "undefined" === typeof window ||
        !window.document ||
        !window.document.createElement
      );
      e.exports = function (e, t, n) {
        if ("function" !== typeof e)
          throw new Error("Expected reducePropsToState to be a function.");
        if ("function" !== typeof t)
          throw new Error(
            "Expected handleStateChangeOnClient to be a function."
          );
        if ("undefined" !== typeof n && "function" !== typeof n)
          throw new Error(
            "Expected mapStateOnServer to either be undefined or a function."
          );
        return function (r) {
          if ("function" !== typeof r)
            throw new Error(
              "Expected WrappedComponent to be a React component."
            );
          var l,
            u = [];
          function c() {
            (l = e(
              u.map(function (e) {
                return e.props;
              })
            )),
              d.canUseDOM ? t(l) : n && (l = n(l));
          }
          var d = (function (e) {
            var t, n;
            function a() {
              return e.apply(this, arguments) || this;
            }
            (n = e),
              ((t = a).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = n),
              (a.peek = function () {
                return l;
              }),
              (a.rewind = function () {
                if (a.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var e = l;
                return (l = void 0), (u = []), e;
              });
            var o = a.prototype;
            return (
              (o.UNSAFE_componentWillMount = function () {
                u.push(this), c();
              }),
              (o.componentDidUpdate = function () {
                c();
              }),
              (o.componentWillUnmount = function () {
                var e = u.indexOf(this);
                u.splice(e, 1), c();
              }),
              (o.render = function () {
                return i.createElement(r, this.props);
              }),
              a
            );
          })(a.PureComponent);
          return (
            o(
              d,
              "displayName",
              "SideEffect(" +
              (function (e) {
                return e.displayName || e.name || "Component";
              })(r) +
              ")"
            ),
            o(d, "canUseDOM", s),
            d
          );
        };
      };
    },
    374: function (e, t, n) {
      "use strict";
      n(725);
      var r = n(791),
        a = 60103;
      if (
        ((t.Fragment = 60107), "function" === typeof Symbol && Symbol.for)
      ) {
        var i = Symbol.for;
        (a = i("react.element")), (t.Fragment = i("react.fragment"));
      }
      var o =
        r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          .ReactCurrentOwner,
        s = Object.prototype.hasOwnProperty,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function u(e, t, n) {
        var r,
          i = {},
          u = null,
          c = null;
        for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
          s.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: u,
          ref: c,
          props: i,
          _owner: o.current,
        };
      }
      (t.jsx = u), (t.jsxs = u);
    },
    117: function (e, t, n) {
      "use strict";
      var r = n(725),
        a = 60103,
        i = 60106;
      (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
      var o = 60109,
        s = 60110,
        l = 60112;
      t.Suspense = 60113;
      var u = 60115,
        c = 60116;
      if ("function" === typeof Symbol && Symbol.for) {
        var d = Symbol.for;
        (a = d("react.element")),
          (i = d("react.portal")),
          (t.Fragment = d("react.fragment")),
          (t.StrictMode = d("react.strict_mode")),
          (t.Profiler = d("react.profiler")),
          (o = d("react.provider")),
          (s = d("react.context")),
          (l = d("react.forward_ref")),
          (t.Suspense = d("react.suspense")),
          (u = d("react.memo")),
          (c = d("react.lazy"));
      }
      var f = "function" === typeof Symbol && Symbol.iterator;
      function p(e) {
        for (
          var t =
            "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () { },
        enqueueReplaceState: function () { },
        enqueueSetState: function () { },
      },
        v = {};
      function m(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || h);
      }
      function g() { }
      function y(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || h);
      }
      (m.prototype.isReactComponent = {}),
        (m.prototype.setState = function (e, t) {
          if ("object" !== typeof e && "function" !== typeof e && null != e)
            throw Error(p(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (m.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (g.prototype = m.prototype);
      var b = (y.prototype = new g());
      (b.constructor = y), r(b, m.prototype), (b.isPureReactComponent = !0);
      var x = { current: null },
        w = Object.prototype.hasOwnProperty,
        E = { key: !0, ref: !0, __self: !0, __source: !0 };
      function S(e, t, n) {
        var r,
          i = {},
          o = null,
          s = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
            w.call(t, r) && !E.hasOwnProperty(r) && (i[r] = t[r]);
        var l = arguments.length - 2;
        if (1 === l) i.children = n;
        else if (1 < l) {
          for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
          i.children = u;
        }
        if (e && e.defaultProps)
          for (r in (l = e.defaultProps)) void 0 === i[r] && (i[r] = l[r]);
        return {
          $$typeof: a,
          type: e,
          key: o,
          ref: s,
          props: i,
          _owner: x.current,
        };
      }
      function C(e) {
        return "object" === typeof e && null !== e && e.$$typeof === a;
      }
      var k = /\/+/g;
      function T(e, t) {
        return "object" === typeof e && null !== e && null != e.key
          ? (function (e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              e.replace(/[=:]/g, function (e) {
                return t[e];
              })
            );
          })("" + e.key)
          : t.toString(36);
      }
      function P(e, t, n, r, o) {
        var s = typeof e;
        ("undefined" !== s && "boolean" !== s) || (e = null);
        var l = !1;
        if (null === e) l = !0;
        else
          switch (s) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case a:
                case i:
                  l = !0;
              }
          }
        if (l)
          return (
            (o = o((l = e))),
            (e = "" === r ? "." + T(l, 0) : r),
            Array.isArray(o)
              ? ((n = ""),
                null != e && (n = e.replace(k, "$&/") + "/"),
                P(o, t, n, "", function (e) {
                  return e;
                }))
              : null != o &&
              (C(o) &&
                (o = (function (e, t) {
                  return {
                    $$typeof: a,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner,
                  };
                })(
                  o,
                  n +
                  (!o.key || (l && l.key === o.key)
                    ? ""
                    : ("" + o.key).replace(k, "$&/") + "/") +
                  e
                )),
                t.push(o)),
            1
          );
        if (((l = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
          for (var u = 0; u < e.length; u++) {
            var c = r + T((s = e[u]), u);
            l += P(s, t, n, c, o);
          }
        else if (
          ((c = (function (e) {
            return null === e || "object" !== typeof e
              ? null
              : "function" === typeof (e = (f && e[f]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
            "function" === typeof c)
        )
          for (e = c.call(e), u = 0; !(s = e.next()).done;)
            l += P((s = s.value), t, n, (c = r + T(s, u++)), o);
        else if ("object" === s)
          throw (
            ((t = "" + e),
              Error(
                p(
                  31,
                  "[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t
                )
              ))
          );
        return l;
      }
      function j(e, t, n) {
        if (null == e) return e;
        var r = [],
          a = 0;
        return (
          P(e, r, "", "", function (e) {
            return t.call(n, e, a++);
          }),
          r
        );
      }
      function O(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()),
            (e._status = 0),
            (e._result = t),
            t.then(
              function (t) {
                0 === e._status &&
                  ((t = t.default), (e._status = 1), (e._result = t));
              },
              function (t) {
                0 === e._status && ((e._status = 2), (e._result = t));
              }
            );
        }
        if (1 === e._status) return e._result;
        throw e._result;
      }
      var M = { current: null };
      function N() {
        var e = M.current;
        if (null === e) throw Error(p(321));
        return e;
      }
      var L = {
        ReactCurrentDispatcher: M,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: x,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (t.Children = {
        map: j,
        forEach: function (e, t, n) {
          j(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            j(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            j(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!C(e)) throw Error(p(143));
          return e;
        },
      }),
        (t.Component = m),
        (t.PureComponent = y),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
        (t.cloneElement = function (e, t, n) {
          if (null === e || void 0 === e) throw Error(p(267, e));
          var i = r({}, e.props),
            o = e.key,
            s = e.ref,
            l = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((s = t.ref), (l = x.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
            )
              var u = e.type.defaultProps;
            for (c in t)
              w.call(t, c) &&
                !E.hasOwnProperty(c) &&
                (i[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) i.children = n;
          else if (1 < c) {
            u = Array(c);
            for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
            i.children = u;
          }
          return {
            $$typeof: a,
            type: e.type,
            key: o,
            ref: s,
            props: i,
            _owner: l,
          };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: s,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: o, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = S),
        (t.createFactory = function (e) {
          var t = S.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: l, render: e };
        }),
        (t.isValidElement = C),
        (t.lazy = function (e) {
          return {
            $$typeof: c,
            _payload: { _status: -1, _result: e },
            _init: O,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return N().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return N().useContext(e, t);
        }),
        (t.useDebugValue = function () { }),
        (t.useEffect = function (e, t) {
          return N().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return N().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return N().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return N().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return N().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return N().useRef(e);
        }),
        (t.useState = function (e) {
          return N().useState(e);
        }),
        (t.version = "17.0.2");
    },
    791: function (e, t, n) {
      "use strict";
      e.exports = n(117);
    },
    184: function (e, t, n) {
      "use strict";
      e.exports = n(374);
    },
    813: function (e, t) {
      "use strict";
      var n, r, a, i;
      if (
        "object" === typeof performance &&
        "function" === typeof performance.now
      ) {
        var o = performance;
        t.unstable_now = function () {
          return o.now();
        };
      } else {
        var s = Date,
          l = s.now();
        t.unstable_now = function () {
          return s.now() - l;
        };
      }
      if (
        "undefined" === typeof window ||
        "function" !== typeof MessageChannel
      ) {
        var u = null,
          c = null,
          d = function e() {
            if (null !== u)
              try {
                var n = t.unstable_now();
                u(!0, n), (u = null);
              } catch (r) {
                throw (setTimeout(e, 0), r);
              }
          };
        (n = function (e) {
          null !== u ? setTimeout(n, 0, e) : ((u = e), setTimeout(d, 0));
        }),
          (r = function (e, t) {
            c = setTimeout(e, t);
          }),
          (a = function () {
            clearTimeout(c);
          }),
          (t.unstable_shouldYield = function () {
            return !1;
          }),
          (i = t.unstable_forceFrameRate = function () { });
      } else {
        var f = window.setTimeout,
          p = window.clearTimeout;
        if ("undefined" !== typeof console) {
          var h = window.cancelAnimationFrame;
          "function" !== typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
            "function" !== typeof h &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            );
        }
        var v = !1,
          m = null,
          g = -1,
          y = 5,
          b = 0;
        (t.unstable_shouldYield = function () {
          return t.unstable_now() >= b;
        }),
          (i = function () { }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
              : (y = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var x = new MessageChannel(),
          w = x.port2;
        (x.port1.onmessage = function () {
          if (null !== m) {
            var e = t.unstable_now();
            b = e + y;
            try {
              m(!0, e) ? w.postMessage(null) : ((v = !1), (m = null));
            } catch (n) {
              throw (w.postMessage(null), n);
            }
          } else v = !1;
        }),
          (n = function (e) {
            (m = e), v || ((v = !0), w.postMessage(null));
          }),
          (r = function (e, n) {
            g = f(function () {
              e(t.unstable_now());
            }, n);
          }),
          (a = function () {
            p(g), (g = -1);
          });
      }
      function E(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; ;) {
          var r = (n - 1) >>> 1,
            a = e[r];
          if (!(void 0 !== a && 0 < k(a, t))) break e;
          (e[r] = t), (e[n] = a), (n = r);
        }
      }
      function S(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function C(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length; r < a;) {
              var i = 2 * (r + 1) - 1,
                o = e[i],
                s = i + 1,
                l = e[s];
              if (void 0 !== o && 0 > k(o, n))
                void 0 !== l && 0 > k(l, o)
                  ? ((e[r] = l), (e[s] = n), (r = s))
                  : ((e[r] = o), (e[i] = n), (r = i));
              else {
                if (!(void 0 !== l && 0 > k(l, n))) break e;
                (e[r] = l), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        return null;
      }
      function k(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var T = [],
        P = [],
        j = 1,
        O = null,
        M = 3,
        N = !1,
        L = !1,
        A = !1;
      function z(e) {
        for (var t = S(P); null !== t;) {
          if (null === t.callback) C(P);
          else {
            if (!(t.startTime <= e)) break;
            C(P), (t.sortIndex = t.expirationTime), E(T, t);
          }
          t = S(P);
        }
      }
      function _(e) {
        if (((A = !1), z(e), !L))
          if (null !== S(T)) (L = !0), n(R);
          else {
            var t = S(P);
            null !== t && r(_, t.startTime - e);
          }
      }
      function R(e, n) {
        (L = !1), A && ((A = !1), a()), (N = !0);
        var i = M;
        try {
          for (
            z(n), O = S(T);
            null !== O &&
            (!(O.expirationTime > n) || (e && !t.unstable_shouldYield()));

          ) {
            var o = O.callback;
            if ("function" === typeof o) {
              (O.callback = null), (M = O.priorityLevel);
              var s = o(O.expirationTime <= n);
              (n = t.unstable_now()),
                "function" === typeof s
                  ? (O.callback = s)
                  : O === S(T) && C(T),
                z(n);
            } else C(T);
            O = S(T);
          }
          if (null !== O) var l = !0;
          else {
            var u = S(P);
            null !== u && r(_, u.startTime - n), (l = !1);
          }
          return l;
        } finally {
          (O = null), (M = i), (N = !1);
        }
      }
      var D = i;
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          L || N || ((L = !0), n(R));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return M;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return S(T);
        }),
        (t.unstable_next = function (e) {
          switch (M) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = M;
          }
          var n = M;
          M = t;
          try {
            return e();
          } finally {
            M = n;
          }
        }),
        (t.unstable_pauseExecution = function () { }),
        (t.unstable_requestPaint = D),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = M;
          M = e;
          try {
            return t();
          } finally {
            M = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, i, o) {
          var s = t.unstable_now();
          switch (
          ("object" === typeof o && null !== o
            ? (o = "number" === typeof (o = o.delay) && 0 < o ? s + o : s)
            : (o = s),
            e)
          ) {
            case 1:
              var l = -1;
              break;
            case 2:
              l = 250;
              break;
            case 5:
              l = 1073741823;
              break;
            case 4:
              l = 1e4;
              break;
            default:
              l = 5e3;
          }
          return (
            (e = {
              id: j++,
              callback: i,
              priorityLevel: e,
              startTime: o,
              expirationTime: (l = o + l),
              sortIndex: -1,
            }),
            o > s
              ? ((e.sortIndex = o),
                E(P, e),
                null === S(T) &&
                e === S(P) &&
                (A ? a() : (A = !0), r(_, o - s)))
              : ((e.sortIndex = l), E(T, e), L || N || ((L = !0), n(R))),
            e
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = M;
          return function () {
            var n = M;
            M = t;
            try {
              return e.apply(this, arguments);
            } finally {
              M = n;
            }
          };
        });
    },
    296: function (e, t, n) {
      "use strict";
      e.exports = n(813);
    },
  },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
          return e.default;
        }
        : function () {
          return e;
        };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "./"),
    (function () {
      "use strict";
      var e,
        t = n(791),
        r = n(164);
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e, t) {
        if (e) {
          if ("string" === typeof e) return a(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? a(e, t)
                : void 0
          );
        }
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (l) {
                (s = !0), (a = l);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          i(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s() {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          s.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var l = function (e) {
        return e;
      };
      var u = "beforeunload",
        c = "popstate";
      function d(t) {
        void 0 === t && (t = {});
        var n = t.window,
          r = void 0 === n ? document.defaultView : n,
          a = r.history;
        function i() {
          var e = m(r.location.hash.substr(1)),
            t = e.pathname,
            n = void 0 === t ? "/" : t,
            i = e.search,
            o = void 0 === i ? "" : i,
            s = e.hash,
            u = void 0 === s ? "" : s,
            c = a.state || {};
          return [
            c.idx,
            l({
              pathname: n,
              search: o,
              hash: u,
              state: c.usr || null,
              key: c.key || "default",
            }),
          ];
        }
        var o = null;
        function d() {
          if (o) E.call(o), (o = null);
          else {
            var t = e.Pop,
              n = i(),
              r = n[0],
              a = n[1];
            if (E.length) {
              if (null != r) {
                var s = b - r;
                s &&
                  ((o = {
                    action: t,
                    location: a,
                    retry: function () {
                      j(-1 * s);
                    },
                  }),
                    j(s));
              }
            } else P(t);
          }
        }
        r.addEventListener(c, d),
          r.addEventListener("hashchange", function () {
            v(i()[1]) !== v(x) && d();
          });
        var g = e.Pop,
          y = i(),
          b = y[0],
          x = y[1],
          w = p(),
          E = p();
        function S(e) {
          return (
            (function () {
              var e = document.querySelector("base"),
                t = "";
              if (e && e.getAttribute("href")) {
                var n = r.location.href,
                  a = n.indexOf("#");
                t = -1 === a ? n : n.slice(0, a);
              }
              return t;
            })() +
            "#" +
            ("string" === typeof e ? e : v(e))
          );
        }
        function C(e, t) {
          return (
            void 0 === t && (t = null),
            l(
              s(
                { pathname: x.pathname, hash: "", search: "" },
                "string" === typeof e ? m(e) : e,
                { state: t, key: h() }
              )
            )
          );
        }
        function k(e, t) {
          return [{ usr: e.state, key: e.key, idx: t }, S(e)];
        }
        function T(e, t, n) {
          return (
            !E.length || (E.call({ action: e, location: t, retry: n }), !1)
          );
        }
        function P(e) {
          g = e;
          var t = i();
          (b = t[0]), (x = t[1]), w.call({ action: g, location: x });
        }
        function j(e) {
          a.go(e);
        }
        null == b && ((b = 0), a.replaceState(s({}, a.state, { idx: b }), ""));
        var O = {
          get action() {
            return g;
          },
          get location() {
            return x;
          },
          createHref: S,
          push: function t(n, i) {
            var o = e.Push,
              s = C(n, i);
            if (
              T(o, s, function () {
                t(n, i);
              })
            ) {
              var l = k(s, b + 1),
                u = l[0],
                c = l[1];
              try {
                a.pushState(u, "", c);
              } catch (d) {
                r.location.assign(c);
              }
              P(o);
            }
          },
          replace: function t(n, r) {
            var i = e.Replace,
              o = C(n, r);
            if (
              T(i, o, function () {
                t(n, r);
              })
            ) {
              var s = k(o, b),
                l = s[0],
                u = s[1];
              a.replaceState(l, "", u), P(i);
            }
          },
          go: j,
          back: function () {
            j(-1);
          },
          forward: function () {
            j(1);
          },
          listen: function (e) {
            return w.push(e);
          },
          block: function (e) {
            var t = E.push(e);
            return (
              1 === E.length && r.addEventListener(u, f),
              function () {
                t(), E.length || r.removeEventListener(u, f);
              }
            );
          },
        };
        return O;
      }
      function f(e) {
        e.preventDefault(), (e.returnValue = "");
      }
      function p() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function (t) {
            return (
              e.push(t),
              function () {
                e = e.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          call: function (t) {
            e.forEach(function (e) {
              return e && e(t);
            });
          },
        };
      }
      function h() {
        return Math.random().toString(36).substr(2, 8);
      }
      function v(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          i = e.hash,
          o = void 0 === i ? "" : i;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function m(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      var g = (0, t.createContext)(null);
      var y = (0, t.createContext)(null);
      var b = (0, t.createContext)({ outlet: null, matches: [] });
      function x(e, t) {
        if (!e) throw new Error(t);
      }
      function w(e, t, n) {
        void 0 === n && (n = "/");
        var r = O(("string" === typeof t ? m(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = E(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                var n =
                  e.length === t.length &&
                  e.slice(0, -1).every(function (e, n) {
                    return e === t[n];
                  });
                return n ? e[e.length - 1] - t[t.length - 1] : 0;
              })(
                e.routesMeta.map(function (e) {
                  return e.childrenIndex;
                }),
                t.routesMeta.map(function (e) {
                  return e.childrenIndex;
                })
              );
          });
        })(a);
        for (var i = null, o = 0; null == i && o < a.length; ++o)
          i = T(a[o], r);
        return i;
      }
      function E(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, a) {
            var i = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            i.relativePath.startsWith("/") &&
              (i.relativePath.startsWith(r) || x(!1),
                (i.relativePath = i.relativePath.slice(r.length)));
            var o = M([r, i.relativePath]),
              s = n.concat(i);
            e.children &&
              e.children.length > 0 &&
              (!0 === e.index && x(!1), E(e.children, t, s, o)),
              (null != e.path || e.index) &&
              t.push({ path: o, score: k(o, e.index), routesMeta: s });
          }),
          t
        );
      }
      var S = /^:\w+$/,
        C = function (e) {
          return "*" === e;
        };
      function k(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(C) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !C(e);
            })
            .reduce(function (e, t) {
              return e + (S.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function T(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", i = [], o = 0;
          o < n.length;
          ++o
        ) {
          var s = n[o],
            l = o === n.length - 1,
            u = "/" === a ? t : t.slice(a.length) || "/",
            c = P(
              { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
              u
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var d = s.route;
          i.push({
            params: r,
            pathname: M([a, c.pathname]),
            pathnameBase: N(M([a, c.pathnameBase])),
            route: d,
          }),
            "/" !== c.pathnameBase && (a = M([a, c.pathnameBase]));
        }
        return i;
      }
      function P(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
          void 0 === t && (t = !1);
          void 0 === n && (n = !0);
          var r = [],
            a =
              "^" +
              e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                .replace(/:(\w+)/g, function (e, t) {
                  return r.push(t), "([^\\/]+)";
                });
          e.endsWith("*")
            ? (r.push("*"),
              (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : (a += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)");
          return [new RegExp(a, t ? void 0 : "i"), r];
        })(e.path, e.caseSensitive, e.end),
          r = o(n, 2),
          a = r[0],
          i = r[1],
          s = t.match(a);
        if (!s) return null;
        var l = s[0],
          u = l.replace(/(.)\/+$/, "$1"),
          c = s.slice(1),
          d = i.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              u = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return e;
                }
              })(c[n] || "")),
              e
            );
          }, {});
        return { params: d, pathname: l, pathnameBase: u, pattern: e };
      }
      function j(e, t, n) {
        var r,
          a = "string" === typeof e ? m(e) : e,
          i = "" === e || "" === a.pathname ? "/" : a.pathname;
        if (null == i) r = n;
        else {
          var o = t.length - 1;
          if (i.startsWith("..")) {
            for (var s = i.split("/"); ".." === s[0];) s.shift(), (o -= 1);
            a.pathname = s.join("/");
          }
          r = o >= 0 ? t[o] : "/";
        }
        var l = (function (e, t) {
          void 0 === t && (t = "/");
          var n = "string" === typeof e ? m(e) : e,
            r = n.pathname,
            a = n.search,
            i = void 0 === a ? "" : a,
            o = n.hash,
            s = void 0 === o ? "" : o,
            l = r
              ? r.startsWith("/")
                ? r
                : (function (e, t) {
                  var n = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach(function (e) {
                      ".." === e
                        ? n.length > 1 && n.pop()
                        : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/"
                  );
                })(r, t)
              : t;
          return { pathname: l, search: L(i), hash: A(s) };
        })(a, r);
        return (
          i &&
          "/" !== i &&
          i.endsWith("/") &&
          !l.pathname.endsWith("/") &&
          (l.pathname += "/"),
          l
        );
      }
      function O(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = e.charAt(t.length);
        return n && "/" !== n ? null : e.slice(t.length) || "/";
      }
      var M = function (e) {
        return e.join("/").replace(/\/\/+/g, "/");
      },
        N = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        L = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        A = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        };
      function z(e) {
        _() || x(!1);
        var n = (0, t.useContext)(g),
          r = n.basename,
          a = n.navigator,
          i = I(e),
          o = i.hash,
          s = i.pathname,
          l = i.search,
          u = s;
        if ("/" !== r) {
          var c = (function (e) {
            return "" === e || "" === e.pathname
              ? "/"
              : "string" === typeof e
                ? m(e).pathname
                : e.pathname;
          })(e),
            d = null != c && c.endsWith("/");
          u = "/" === s ? r + (d ? "/" : "") : M([r, s]);
        }
        return a.createHref({ pathname: u, search: l, hash: o });
      }
      function _() {
        return null != (0, t.useContext)(y);
      }
      function R() {
        return _() || x(!1), (0, t.useContext)(y).location;
      }
      function D() {
        _() || x(!1);
        var e = (0, t.useContext)(g),
          n = e.basename,
          r = e.navigator,
          a = (0, t.useContext)(b).matches,
          i = R().pathname,
          o = JSON.stringify(
            a.map(function (e) {
              return e.pathnameBase;
            })
          ),
          s = (0, t.useRef)(!1);
        (0, t.useEffect)(function () {
          s.current = !0;
        });
        var l = (0, t.useCallback)(
          function (e, t) {
            if ((void 0 === t && (t = {}), s.current))
              if ("number" !== typeof e) {
                var a = j(e, JSON.parse(o), i);
                "/" !== n && (a.pathname = M([n, a.pathname])),
                  (t.replace ? r.replace : r.push)(a, t.state);
              } else r.go(e);
          },
          [n, r, o, i]
        );
        return l;
      }
      var V = (0, t.createContext)(null);
      function I(e) {
        var n = (0, t.useContext)(b).matches,
          r = R().pathname,
          a = JSON.stringify(
            n.map(function (e) {
              return e.pathnameBase;
            })
          );
        return (0, t.useMemo)(
          function () {
            return j(e, JSON.parse(a), r);
          },
          [e, a, r]
        );
      }
      function F(e, n) {
        return (
          void 0 === n && (n = []),
          null == e
            ? null
            : e.reduceRight(function (r, a, i) {
              return (0,
                t.createElement)(b.Provider, { children: void 0 !== a.route.element ? a.route.element : r, value: { outlet: r, matches: n.concat(e.slice(0, i + 1)) } });
            }, null)
        );
      }
      function B(e) {
        return (function (e) {
          var n = (0, t.useContext)(b).outlet;
          return n ? (0, t.createElement)(V.Provider, { value: e }, n) : n;
        })(e.context);
      }
      function H(e) {
        x(!1);
      }
      function W(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          i = n.children,
          o = void 0 === i ? null : i,
          s = n.location,
          l = n.navigationType,
          u = void 0 === l ? e.Pop : l,
          c = n.navigator,
          d = n.static,
          f = void 0 !== d && d;
        _() && x(!1);
        var p = N(a),
          h = (0, t.useMemo)(
            function () {
              return { basename: p, navigator: c, static: f };
            },
            [p, c, f]
          );
        "string" === typeof s && (s = m(s));
        var v = s,
          b = v.pathname,
          w = void 0 === b ? "/" : b,
          E = v.search,
          S = void 0 === E ? "" : E,
          C = v.hash,
          k = void 0 === C ? "" : C,
          T = v.state,
          P = void 0 === T ? null : T,
          j = v.key,
          M = void 0 === j ? "default" : j,
          L = (0, t.useMemo)(
            function () {
              var e = O(w, p);
              return null == e
                ? null
                : { pathname: e, search: S, hash: k, state: P, key: M };
            },
            [p, w, S, k, P, M]
          );
        return null == L
          ? null
          : (0, t.createElement)(
            g.Provider,
            { value: h },
            (0, t.createElement)(y.Provider, {
              children: o,
              value: { location: L, navigationType: u },
            })
          );
      }
      function U(e) {
        var n = e.children,
          r = e.location;
        return (function (e, n) {
          _() || x(!1);
          var r,
            a = (0, t.useContext)(b).matches,
            i = a[a.length - 1],
            o = i ? i.params : {},
            s = (i && i.pathname, i ? i.pathnameBase : "/"),
            l = (i && i.route, R());
          if (n) {
            var u,
              c = "string" === typeof n ? m(n) : n;
            "/" === s ||
              (null == (u = c.pathname) ? void 0 : u.startsWith(s)) ||
              x(!1),
              (r = c);
          } else r = l;
          var d = r.pathname || "/",
            f = w(e, { pathname: "/" === s ? d : d.slice(s.length) || "/" });
          return F(
            f &&
            f.map(function (e) {
              return Object.assign({}, e, {
                params: Object.assign({}, o, e.params),
                pathname: M([s, e.pathname]),
                pathnameBase:
                  "/" === e.pathnameBase ? s : M([s, e.pathnameBase]),
              });
            }),
            a
          );
        })(G(n), r);
      }
      function G(e) {
        var n = [];
        return (
          t.Children.forEach(e, function (e) {
            if ((0, t.isValidElement)(e))
              if (e.type !== t.Fragment) {
                e.type !== H && x(!1);
                var r = {
                  caseSensitive: e.props.caseSensitive,
                  element: e.props.element,
                  index: e.props.index,
                  path: e.props.path,
                };
                e.props.children && (r.children = G(e.props.children)),
                  n.push(r);
              } else n.push.apply(n, G(e.props.children));
          }),
          n
        );
      }
      function $() {
        return (
          ($ =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          $.apply(this, arguments)
        );
      }
      function Y(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var q = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
      function X(e) {
        var n = e.basename,
          r = e.children,
          a = e.window,
          i = (0, t.useRef)();
        null == i.current && (i.current = d({ window: a }));
        var s = i.current,
          l = o((0, t.useState)({ action: s.action, location: s.location }), 2),
          u = l[0],
          c = l[1];
        return (
          (0, t.useLayoutEffect)(
            function () {
              return s.listen(c);
            },
            [s]
          ),
          (0, t.createElement)(W, {
            basename: n,
            children: r,
            location: u.location,
            navigationType: u.action,
            navigator: s,
          })
        );
      }
      var Z = (0, t.forwardRef)(function (e, n) {
        var r = e.onClick,
          a = e.reloadDocument,
          i = e.replace,
          o = void 0 !== i && i,
          s = e.state,
          l = e.target,
          u = e.to,
          c = Y(e, q),
          d = z(u),
          f = (function (e, n) {
            var r = void 0 === n ? {} : n,
              a = r.target,
              i = r.replace,
              o = r.state,
              s = D(),
              l = R(),
              u = I(e);
            return (0, t.useCallback)(
              function (t) {
                if (
                  0 === t.button &&
                  (!a || "_self" === a) &&
                  !(function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(t)
                ) {
                  t.preventDefault();
                  var n = !!i || v(l) === v(u);
                  s(e, { replace: n, state: o });
                }
              },
              [l, s, u, i, o, a, e]
            );
          })(u, { replace: o, state: s, target: l });
        return (0, t.createElement)(
          "a",
          $({}, c, {
            href: d,
            onClick: function (e) {
              r && r(e), e.defaultPrevented || a || f(e);
            },
            ref: n,
            target: l,
          })
        );
      });
      var Q = function (e, t) {
        return (
          (Q =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }),
          Q(e, t)
        );
      };
      function K(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        Q(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var J = function () {
        return (
          (J =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          J.apply(this, arguments)
        );
      };
      function ee(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      }
      Object.create;
      function te(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function ne(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          a,
          i = n.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done;)
            o.push(r.value);
        } catch (s) {
          a = { error: s };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (a) throw a.error;
          }
        }
        return o;
      }
      function re(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, a = 0, i = t.length; a < i; a++)
            (!r && a in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create;
      var ae = (1 / 60) * 1e3,
        ie =
          "undefined" !== typeof performance
            ? function () {
              return performance.now();
            }
            : function () {
              return Date.now();
            },
        oe =
          "undefined" !== typeof window
            ? function (e) {
              return window.requestAnimationFrame(e);
            }
            : function (e) {
              return setTimeout(function () {
                return e(ie());
              }, ae);
            };
      var se = !0,
        le = !1,
        ue = !1,
        ce = { delta: 0, timestamp: 0 },
        de = ["read", "update", "preRender", "render", "postRender"],
        fe = de.reduce(function (e, t) {
          return (
            (e[t] = (function (e) {
              var t = [],
                n = [],
                r = 0,
                a = !1,
                i = !1,
                o = new WeakSet(),
                s = {
                  schedule: function (e) {
                    var i =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2] &&
                      a,
                      s = i ? t : n;
                    return (
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1] &&
                      o.add(e),
                      -1 === s.indexOf(e) &&
                      (s.push(e), i && a && (r = t.length)),
                      e
                    );
                  },
                  cancel: function (e) {
                    var t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1), o.delete(e);
                  },
                  process: function (l) {
                    if (a) i = !0;
                    else {
                      a = !0;
                      var u = [n, t];
                      if (((t = u[0]), ((n = u[1]).length = 0), (r = t.length)))
                        for (var c = 0; c < r; c++) {
                          var d = t[c];
                          d(l), o.has(d) && (s.schedule(d), e());
                        }
                      (a = !1), i && ((i = !1), s.process(l));
                    }
                  },
                };
              return s;
            })(function () {
              return (le = !0);
            })),
            e
          );
        }, {}),
        pe = de.reduce(function (e, t) {
          var n = fe[t];
          return (
            (e[t] = function (e) {
              var t =
                arguments.length > 1 &&
                void 0 !== arguments[1] &&
                arguments[1],
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              return le || ye(), n.schedule(e, t, r);
            }),
            e
          );
        }, {}),
        he = de.reduce(function (e, t) {
          return (e[t] = fe[t].cancel), e;
        }, {}),
        ve = de.reduce(function (e, t) {
          return (
            (e[t] = function () {
              return fe[t].process(ce);
            }),
            e
          );
        }, {}),
        me = function (e) {
          return fe[e].process(ce);
        },
        ge = function e(t) {
          (le = !1),
            (ce.delta = se ? ae : Math.max(Math.min(t - ce.timestamp, 40), 1)),
            (ce.timestamp = t),
            (ue = !0),
            de.forEach(me),
            (ue = !1),
            le && ((se = !1), oe(e));
        },
        ye = function () {
          (le = !0), (se = !0), ue || oe(ge);
        },
        be = function () {
          return ce;
        },
        xe = pe,
        we = "undefined" !== typeof document,
        Ee = we ? t.useLayoutEffect : t.useEffect;
      function Se() {
        var e = (0, t.useRef)(!1);
        return (
          Ee(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          e
        );
      }
      var Ce = (0, t.createContext)(null);
      function ke(e) {
        var n = (0, t.useRef)(null);
        return null === n.current && (n.current = e()), n.current;
      }
      var Te = 0,
        Pe = function () {
          return Te++;
        },
        je = function () {
          return ke(Pe);
        },
        Oe = function (e) {
          var n = e.children,
            r = e.initial,
            a = e.isPresent,
            i = e.onExitComplete,
            o = e.custom,
            s = e.presenceAffectsLayout,
            l = ke(Me),
            u = je(),
            c = (0, t.useMemo)(
              function () {
                return {
                  id: u,
                  initial: r,
                  isPresent: a,
                  custom: o,
                  onExitComplete: function (e) {
                    var t, n;
                    l.set(e, !0);
                    try {
                      for (
                        var r = te(l.values()), a = r.next();
                        !a.done;
                        a = r.next()
                      ) {
                        if (!a.value) return;
                      }
                    } catch (o) {
                      t = { error: o };
                    } finally {
                      try {
                        a && !a.done && (n = r.return) && n.call(r);
                      } finally {
                        if (t) throw t.error;
                      }
                    }
                    null === i || void 0 === i || i();
                  },
                  register: function (e) {
                    return (
                      l.set(e, !1),
                      function () {
                        return l.delete(e);
                      }
                    );
                  },
                };
              },
              s ? void 0 : [a]
            );
          return (
            (0, t.useMemo)(
              function () {
                l.forEach(function (e, t) {
                  return l.set(t, !1);
                });
              },
              [a]
            ),
            t.useEffect(
              function () {
                !a && !l.size && (null === i || void 0 === i || i());
              },
              [a]
            ),
            t.createElement(Ce.Provider, { value: c }, n)
          );
        };
      function Me() {
        return new Map();
      }
      var Ne = (0, t.createContext)({});
      function Le(e) {
        return (0, t.useEffect)(function () {
          return function () {
            return e();
          };
        }, []);
      }
      var Ae = function (e) {
        return e.key || "";
      };
      var ze = function (e) {
        var n = e.children,
          r = e.custom,
          a = e.initial,
          i = void 0 === a || a,
          o = e.onExitComplete,
          s = e.exitBeforeEnter,
          l = e.presenceAffectsLayout,
          u = void 0 === l || l,
          c = ne(
            (function () {
              var e = Se(),
                n = ne((0, t.useState)(0), 2),
                r = n[0],
                a = n[1],
                i = (0, t.useCallback)(
                  function () {
                    e.current && a(r + 1);
                  },
                  [r]
                );
              return [
                (0, t.useCallback)(
                  function () {
                    return xe.postRender(i);
                  },
                  [i]
                ),
                r,
              ];
            })(),
            1
          ),
          d = c[0],
          f = (0, t.useContext)(Ne).forceRender;
        f && (d = f);
        var p = Se(),
          h = (function (e) {
            var n = [];
            return (
              t.Children.forEach(e, function (e) {
                (0, t.isValidElement)(e) && n.push(e);
              }),
              n
            );
          })(n),
          v = h,
          m = new Set(),
          g = (0, t.useRef)(v),
          y = (0, t.useRef)(new Map()).current,
          b = (0, t.useRef)(!0);
        if (
          (Ee(function () {
            (b.current = !1),
              (function (e, t) {
                e.forEach(function (e) {
                  var n = Ae(e);
                  t.set(n, e);
                });
              })(h, y),
              (g.current = v);
          }),
            Le(function () {
              (b.current = !0), y.clear(), m.clear();
            }),
            b.current)
        )
          return t.createElement(
            t.Fragment,
            null,
            v.map(function (e) {
              return t.createElement(
                Oe,
                {
                  key: Ae(e),
                  isPresent: !0,
                  initial: !!i && void 0,
                  presenceAffectsLayout: u,
                },
                e
              );
            })
          );
        v = re([], ne(v), !1);
        for (
          var x = g.current.map(Ae), w = h.map(Ae), E = x.length, S = 0;
          S < E;
          S++
        ) {
          var C = x[S];
          -1 === w.indexOf(C) && m.add(C);
        }
        return (
          s && m.size && (v = []),
          m.forEach(function (e) {
            if (-1 === w.indexOf(e)) {
              var n = y.get(e);
              if (n) {
                var a = x.indexOf(e);
                v.splice(
                  a,
                  0,
                  t.createElement(
                    Oe,
                    {
                      key: Ae(n),
                      isPresent: !1,
                      onExitComplete: function () {
                        y.delete(e), m.delete(e);
                        var t = g.current.findIndex(function (t) {
                          return t.key === e;
                        });
                        if ((g.current.splice(t, 1), !m.size)) {
                          if (((g.current = h), !1 === p.current)) return;
                          d(), o && o();
                        }
                      },
                      custom: r,
                      presenceAffectsLayout: u,
                    },
                    n
                  )
                );
              }
            }
          }),
          (v = v.map(function (e) {
            var n = e.key;
            return m.has(n)
              ? e
              : t.createElement(
                Oe,
                { key: Ae(e), isPresent: !0, presenceAffectsLayout: u },
                e
              );
          })),
          t.createElement(
            t.Fragment,
            null,
            m.size
              ? v
              : v.map(function (e) {
                return (0, t.cloneElement)(e);
              })
          )
        );
      };
      function _e(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
            : (e[t] = n),
          e
        );
      }
      function Re(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function De(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Re(Object(n), !0).forEach(function (t) {
              _e(e, t, n[t]);
            })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Re(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ve(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function Ie(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = Ve(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
        }
        return a;
      }
      var Fe = n(694),
        Be = n.n(Fe),
        He = t.createContext(null);
      n(176);
      function We(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function Ue(e) {
        var t = (function (e, t) {
          if ("object" !== typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === typeof t ? t : String(t);
      }
      function Ge(e, n) {
        return Object.keys(n).reduce(function (r, a) {
          var i,
            o = r,
            l = o[We(a)],
            u = o[a],
            c = Ve(o, [We(a), a].map(Ue)),
            d = n[a],
            f = (function (e, n, r) {
              var a = (0, t.useRef)(void 0 !== e),
                i = (0, t.useState)(n),
                o = i[0],
                s = i[1],
                l = void 0 !== e,
                u = a.current;
              return (
                (a.current = l),
                !l && u && o !== n && s(n),
                [
                  l ? e : o,
                  (0, t.useCallback)(
                    function (e) {
                      for (
                        var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        a = 1;
                        a < t;
                        a++
                      )
                        n[a - 1] = arguments[a];
                      r && r.apply(void 0, [e].concat(n)), s(e);
                    },
                    [r]
                  ),
                ]
              );
            })(u, l, e[d]),
            p = f[0],
            h = f[1];
          return s({}, c, (((i = {})[a] = p), (i[d] = h), i));
        }, e);
      }
      function $e() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state
        );
        null !== e && void 0 !== e && this.setState(e);
      }
      function Ye(e) {
        this.setState(
          function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null !== n && void 0 !== n ? n : null;
          }.bind(this)
        );
      }
      function qe(e, t) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      ($e.__suppressDeprecationWarning = !0),
        (Ye.__suppressDeprecationWarning = !0),
        (qe.__suppressDeprecationWarning = !0);
      var Xe = /-(.)/g;
      var Ze = n(184),
        Qe = ["xxl", "xl", "lg", "md", "sm", "xs"],
        Ke = t.createContext({ prefixes: {}, breakpoints: Qe });
      Ke.Consumer, Ke.Provider;
      function Je(e, n) {
        var r = (0, t.useContext)(Ke).prefixes;
        return e || r[n] || n;
      }
      function et() {
        return (0, t.useContext)(Ke).breakpoints;
      }
      var tt = ["className", "bsPrefix", "as"],
        nt = function (e) {
          return (
            e[0].toUpperCase() +
            ((t = e),
              t.replace(Xe, function (e, t) {
                return t.toUpperCase();
              })).slice(1)
          );
          var t;
        };
      function rt(e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = n.displayName,
          a = void 0 === r ? nt(e) : r,
          i = n.Component,
          o = n.defaultProps,
          s = t.forwardRef(function (t, n) {
            var r = t.className,
              a = t.bsPrefix,
              o = t.as,
              s = void 0 === o ? i || "div" : o,
              l = Ie(t, tt),
              u = Je(a, e);
            return (0, Ze.jsx)(s, De({ ref: n, className: Be()(r, u) }, l));
          });
        return (s.defaultProps = o), (s.displayName = a), s;
      }
      var at = ["bsPrefix", "className", "as"],
        it = t.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.as,
            i = Ie(e, at);
          n = Je(n, "navbar-brand");
          var o = a || (i.href ? "a" : "span");
          return (0,
            Ze.jsx)(o, De(De({}, i), {}, { ref: t, className: Be()(r, n) }));
        });
      it.displayName = "NavbarBrand";
      var ot = it;
      function st(e) {
        return (e && e.ownerDocument) || document;
      }
      function lt(e, t) {
        return (function (e) {
          var t = st(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var ut = /([A-Z])/g;
      var ct = /^ms-/;
      function dt(e) {
        return (function (e) {
          return e.replace(ut, "-$1").toLowerCase();
        })(e).replace(ct, "-ms-");
      }
      var ft =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      var pt = function (e, t) {
        var n = "",
          r = "";
        if ("string" === typeof t)
          return (
            e.style.getPropertyValue(dt(t)) || lt(e).getPropertyValue(dt(t))
          );
        Object.keys(t).forEach(function (a) {
          var i = t[a];
          i || 0 === i
            ? !(function (e) {
              return !(!e || !ft.test(e));
            })(a)
              ? (n += dt(a) + ": " + i + ";")
              : (r += a + "(" + i + ") ")
            : e.style.removeProperty(dt(a));
        }),
          r && (n += "transform: " + r + ";"),
          (e.style.cssText += ";" + n);
      };
      function ht(e, t) {
        return (
          (ht =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          ht(e, t)
        );
      }
      var vt = !1,
        mt = t.createContext(null),
        gt = "unmounted",
        yt = "exited",
        bt = "entering",
        xt = "entered",
        wt = "exiting",
        Et = (function (e) {
          var n, a;
          function i(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var a,
              i = n && !n.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? i
                  ? ((a = yt), (r.appearStatus = bt))
                  : (a = xt)
                : (a = t.unmountOnExit || t.mountOnEnter ? gt : yt),
              (r.state = { status: a }),
              (r.nextCallback = null),
              r
            );
          }
          (a = e),
            ((n = i).prototype = Object.create(a.prototype)),
            (n.prototype.constructor = n),
            ht(n, a),
            (i.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === gt ? { status: yt } : null;
            });
          var o = i.prototype;
          return (
            (o.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (o.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== bt && n !== xt && (t = bt)
                  : (n !== bt && n !== xt) || (t = wt);
              }
              this.updateStatus(!1, t);
            }),
            (o.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (o.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                "number" !== typeof r &&
                ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (o.updateStatus = function (e, t) {
              void 0 === e && (e = !1),
                null !== t
                  ? (this.cancelNextCallback(),
                    t === bt ? this.performEnter(e) : this.performExit())
                  : this.props.unmountOnExit &&
                  this.state.status === yt &&
                  this.setState({ status: gt });
            }),
            (o.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                a = this.context ? this.context.isMounting : e,
                i = this.props.nodeRef ? [a] : [r.findDOMNode(this), a],
                o = i[0],
                s = i[1],
                l = this.getTimeouts(),
                u = a ? l.appear : l.enter;
              (!e && !n) || vt
                ? this.safeSetState({ status: xt }, function () {
                  t.props.onEntered(o);
                })
                : (this.props.onEnter(o, s),
                  this.safeSetState({ status: bt }, function () {
                    t.props.onEntering(o, s),
                      t.onTransitionEnd(u, function () {
                        t.safeSetState({ status: xt }, function () {
                          t.props.onEntered(o, s);
                        });
                      });
                  }));
            }),
            (o.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                a = this.props.nodeRef ? void 0 : r.findDOMNode(this);
              t && !vt
                ? (this.props.onExit(a),
                  this.safeSetState({ status: wt }, function () {
                    e.props.onExiting(a),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: yt }, function () {
                          e.props.onExited(a);
                        });
                      });
                  }))
                : this.safeSetState({ status: yt }, function () {
                  e.props.onExited(a);
                });
            }),
            (o.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (o.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (o.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (o.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                ? this.props.nodeRef.current
                : r.findDOMNode(this),
                a = null == e && !this.props.addEndListener;
              if (n && !a) {
                if (this.props.addEndListener) {
                  var i = this.props.nodeRef
                    ? [this.nextCallback]
                    : [n, this.nextCallback],
                    o = i[0],
                    s = i[1];
                  this.props.addEndListener(o, s);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (o.render = function () {
              var e = this.state.status;
              if (e === gt) return null;
              var n = this.props,
                r = n.children,
                a =
                  (n.in,
                    n.mountOnEnter,
                    n.unmountOnExit,
                    n.appear,
                    n.enter,
                    n.exit,
                    n.timeout,
                    n.addEndListener,
                    n.onEnter,
                    n.onEntering,
                    n.onEntered,
                    n.onExit,
                    n.onExiting,
                    n.onExited,
                    n.nodeRef,
                    Ve(n, [
                      "children",
                      "in",
                      "mountOnEnter",
                      "unmountOnExit",
                      "appear",
                      "enter",
                      "exit",
                      "timeout",
                      "addEndListener",
                      "onEnter",
                      "onEntering",
                      "onEntered",
                      "onExit",
                      "onExiting",
                      "onExited",
                      "nodeRef",
                    ]));
              return t.createElement(
                mt.Provider,
                { value: null },
                "function" === typeof r
                  ? r(e, a)
                  : t.cloneElement(t.Children.only(r), a)
              );
            }),
            i
          );
        })(t.Component);
      function St() { }
      (Et.contextType = mt),
        (Et.propTypes = {}),
        (Et.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: St,
          onEntering: St,
          onEntered: St,
          onExit: St,
          onExiting: St,
          onExited: St,
        }),
        (Et.UNMOUNTED = gt),
        (Et.EXITED = yt),
        (Et.ENTERING = bt),
        (Et.ENTERED = xt),
        (Et.EXITING = wt);
      var Ct = Et,
        kt = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        Tt = !1,
        Pt = !1;
      try {
        var jt = {
          get passive() {
            return (Tt = !0);
          },
          get once() {
            return (Pt = Tt = !0);
          },
        };
        kt &&
          (window.addEventListener("test", jt, jt),
            window.removeEventListener("test", jt, !0));
      } catch (Gp) { }
      var Ot = function (e, t, n, r) {
        if (r && "boolean" !== typeof r && !Pt) {
          var a = r.once,
            i = r.capture,
            o = n;
          !Pt &&
            a &&
            ((o =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, i), n.call(this, r);
              }),
              (n.__once = o)),
            e.addEventListener(t, o, Tt ? r : i);
        }
        e.addEventListener(t, n, r);
      };
      var Mt = function (e, t, n, r) {
        var a = r && "boolean" !== typeof r ? r.capture : r;
        e.removeEventListener(t, n, a),
          n.__once && e.removeEventListener(t, n.__once, a);
      };
      var Nt = function (e, t, n, r) {
        return (
          Ot(e, t, n, r),
          function () {
            Mt(e, t, n, r);
          }
        );
      };
      function Lt(e, t, n) {
        void 0 === n && (n = 5);
        var r = !1,
          a = setTimeout(function () {
            r ||
              (function (e, t, n, r) {
                if ((void 0 === n && (n = !1), void 0 === r && (r = !0), e)) {
                  var a = document.createEvent("HTMLEvents");
                  a.initEvent(t, n, r), e.dispatchEvent(a);
                }
              })(e, "transitionend", !0);
          }, t + n),
          i = Nt(
            e,
            "transitionend",
            function () {
              r = !0;
            },
            { once: !0 }
          );
        return function () {
          clearTimeout(a), i();
        };
      }
      function At(e, t, n, r) {
        null == n &&
          (n =
            (function (e) {
              var t = pt(e, "transitionDuration") || "",
                n = -1 === t.indexOf("ms") ? 1e3 : 1;
              return parseFloat(t) * n;
            })(e) || 0);
        var a = Lt(e, n, r),
          i = Nt(e, "transitionend", t);
        return function () {
          a(), i();
        };
      }
      function zt(e, t) {
        var n = pt(e, t) || "",
          r = -1 === n.indexOf("ms") ? 1e3 : 1;
        return parseFloat(n) * r;
      }
      function _t(e, t) {
        var n = zt(e, "transitionDuration"),
          r = zt(e, "transitionDelay"),
          a = At(
            e,
            function (n) {
              n.target === e && (a(), t(n));
            },
            n + r
          );
      }
      var Rt = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .filter(function (e) {
            return null != e;
          })
          .reduce(function (e, t) {
            if ("function" !== typeof t)
              throw new Error(
                "Invalid Argument Type, must only provide functions, undefined, or null."
              );
            return null === e
              ? t
              : function () {
                for (
                  var n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                e.apply(this, r), t.apply(this, r);
              };
          }, null);
      };
      function Dt(e) {
        e.offsetHeight;
      }
      var Vt = function (e) {
        return e && "function" !== typeof e
          ? function (t) {
            e.current = t;
          }
          : e;
      };
      var It = function (e, n) {
        return (0, t.useMemo)(
          function () {
            return (function (e, t) {
              var n = Vt(e),
                r = Vt(t);
              return function (e) {
                n && n(e), r && r(e);
              };
            })(e, n);
          },
          [e, n]
        );
      };
      var Ft,
        Bt = [
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "addEndListener",
          "children",
          "childRef",
        ],
        Ht = t.forwardRef(function (e, n) {
          var a = e.onEnter,
            i = e.onEntering,
            o = e.onEntered,
            s = e.onExit,
            l = e.onExiting,
            u = e.onExited,
            c = e.addEndListener,
            d = e.children,
            f = e.childRef,
            p = Ie(e, Bt),
            h = (0, t.useRef)(null),
            v = It(h, f),
            m = function (e) {
              var t;
              v(
                (t = e) && "setState" in t
                  ? r.findDOMNode(t)
                  : null != t
                    ? t
                    : null
              );
            },
            g = function (e) {
              return function (t) {
                e && h.current && e(h.current, t);
              };
            },
            y = (0, t.useCallback)(g(a), [a]),
            b = (0, t.useCallback)(g(i), [i]),
            x = (0, t.useCallback)(g(o), [o]),
            w = (0, t.useCallback)(g(s), [s]),
            E = (0, t.useCallback)(g(l), [l]),
            S = (0, t.useCallback)(g(u), [u]),
            C = (0, t.useCallback)(g(c), [c]);
          return (0, Ze.jsx)(
            Ct,
            De(
              De({ ref: n }, p),
              {},
              {
                onEnter: y,
                onEntered: x,
                onEntering: b,
                onExit: w,
                onExited: S,
                onExiting: E,
                addEndListener: C,
                nodeRef: h,
                children:
                  "function" === typeof d
                    ? function (e, t) {
                      return d(e, De(De({}, t), {}, { ref: m }));
                    }
                    : t.cloneElement(d, { ref: m }),
              }
            )
          );
        }),
        Wt = Ht,
        Ut = [
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "className",
          "children",
          "dimension",
          "getDimensionValue",
        ],
        Gt = {
          height: ["marginTop", "marginBottom"],
          width: ["marginLeft", "marginRight"],
        };
      function $t(e, t) {
        var n = t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],
          r = Gt[e];
        return n + parseInt(pt(t, r[0]), 10) + parseInt(pt(t, r[1]), 10);
      }
      var Yt =
        (_e((Ft = {}), yt, "collapse"),
          _e(Ft, wt, "collapsing"),
          _e(Ft, bt, "collapsing"),
          _e(Ft, xt, "collapse show"),
          Ft),
        qt = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          getDimensionValue: $t,
        },
        Xt = t.forwardRef(function (e, n) {
          var r = e.onEnter,
            a = e.onEntering,
            i = e.onEntered,
            o = e.onExit,
            s = e.onExiting,
            l = e.className,
            u = e.children,
            c = e.dimension,
            d = void 0 === c ? "height" : c,
            f = e.getDimensionValue,
            p = void 0 === f ? $t : f,
            h = Ie(e, Ut),
            v = "function" === typeof d ? d() : d,
            m = (0, t.useMemo)(
              function () {
                return Rt(function (e) {
                  e.style[v] = "0";
                }, r);
              },
              [v, r]
            ),
            g = (0, t.useMemo)(
              function () {
                return Rt(function (e) {
                  var t = "scroll"
                    .concat(v[0].toUpperCase())
                    .concat(v.slice(1));
                  e.style[v] = "".concat(e[t], "px");
                }, a);
              },
              [v, a]
            ),
            y = (0, t.useMemo)(
              function () {
                return Rt(function (e) {
                  e.style[v] = null;
                }, i);
              },
              [v, i]
            ),
            b = (0, t.useMemo)(
              function () {
                return Rt(function (e) {
                  (e.style[v] = "".concat(p(v, e), "px")), Dt(e);
                }, o);
              },
              [o, p, v]
            ),
            x = (0, t.useMemo)(
              function () {
                return Rt(function (e) {
                  e.style[v] = null;
                }, s);
              },
              [v, s]
            );
          return (0, Ze.jsx)(
            Wt,
            De(
              De({ ref: n, addEndListener: _t }, h),
              {},
              {
                "aria-expanded": h.role ? h.in : null,
                onEnter: m,
                onEntering: g,
                onEntered: y,
                onExit: b,
                onExiting: x,
                childRef: u.ref,
                children: function (e, n) {
                  return t.cloneElement(
                    u,
                    De(
                      De({}, n),
                      {},
                      {
                        className: Be()(
                          l,
                          u.props.className,
                          Yt[e],
                          "width" === v && "collapse-horizontal"
                        ),
                      }
                    )
                  );
                },
              }
            )
          );
        });
      Xt.defaultProps = qt;
      var Zt = Xt,
        Qt = t.createContext(null);
      Qt.displayName = "NavbarContext";
      var Kt = Qt,
        Jt = ["children", "bsPrefix"],
        en = t.forwardRef(function (e, n) {
          var r = e.children,
            a = e.bsPrefix,
            i = Ie(e, Jt);
          a = Je(a, "navbar-collapse");
          var o = (0, t.useContext)(Kt);
          return (0,
            Ze.jsx)(Zt, De(De({ in: !(!o || !o.expanded) }, i), {}, { children: (0, Ze.jsx)("div", { ref: n, className: a, children: r }) }));
        });
      en.displayName = "NavbarCollapse";
      var tn = en;
      var nn = function (e) {
        var n = (0, t.useRef)(e);
        return (
          (0, t.useEffect)(
            function () {
              n.current = e;
            },
            [e]
          ),
          n
        );
      };
      function rn(e) {
        var n = nn(e);
        return (0, t.useCallback)(
          function () {
            return n.current && n.current.apply(n, arguments);
          },
          [n]
        );
      }
      var an = ["bsPrefix", "className", "children", "label", "as", "onClick"],
        on = t.forwardRef(function (e, n) {
          var r = e.bsPrefix,
            a = e.className,
            i = e.children,
            o = e.label,
            s = e.as,
            l = void 0 === s ? "button" : s,
            u = e.onClick,
            c = Ie(e, an);
          r = Je(r, "navbar-toggler");
          var d = (0, t.useContext)(Kt) || {},
            f = d.onToggle,
            p = d.expanded,
            h = rn(function (e) {
              u && u(e), f && f();
            });
          return (
            "button" === l && (c.type = "button"),
            (0, Ze.jsx)(
              l,
              De(
                De({}, c),
                {},
                {
                  ref: n,
                  onClick: h,
                  "aria-label": o,
                  className: Be()(a, r, !p && "collapsed"),
                  children:
                    i ||
                    (0, Ze.jsx)("span", { className: "".concat(r, "-icon") }),
                }
              )
            )
          );
        });
      (on.displayName = "NavbarToggle"),
        (on.defaultProps = { label: "Toggle navigation" });
      var sn = on;
      function ln(e) {
        void 0 === e && (e = st());
        try {
          var t = e.activeElement;
          return t && t.nodeName ? t : null;
        } catch (Gp) {
          return e.body;
        }
      }
      function un(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
            ? e === t || !!(16 & e.compareDocumentPosition(t))
            : void 0;
      }
      function cn(e) {
        var n = (function (e) {
          var n = (0, t.useRef)(e);
          return (n.current = e), n;
        })(e);
        (0, t.useEffect)(function () {
          return function () {
            return n.current();
          };
        }, []);
      }
      function dn(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return a(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          i(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function fn(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function pn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function hn(e, t, n) {
        return (
          t && pn(e.prototype, t),
          n && pn(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var vn,
        mn = ((vn = "modal-open"), "".concat("data-rr-ui-").concat(vn)),
        gn = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
              n = t.ownerDocument,
              r = t.handleContainerOverflow,
              a = void 0 === r || r,
              i = t.isRTL,
              o = void 0 !== i && i;
            fn(this, e),
              (this.handleContainerOverflow = a),
              (this.isRTL = o),
              (this.modals = []),
              (this.ownerDocument = n);
          }
          return (
            hn(e, [
              {
                key: "getScrollbarWidth",
                value: function () {
                  return (function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : document,
                      t = e.defaultView;
                    return Math.abs(
                      t.innerWidth - e.documentElement.clientWidth
                    );
                  })(this.ownerDocument);
                },
              },
              {
                key: "getElement",
                value: function () {
                  return (this.ownerDocument || document).body;
                },
              },
              { key: "setModalAttributes", value: function (e) { } },
              { key: "removeModalAttributes", value: function (e) { } },
              {
                key: "setContainerStyle",
                value: function (e) {
                  var t = { overflow: "hidden" },
                    n = this.isRTL ? "paddingLeft" : "paddingRight",
                    r = this.getElement();
                  (e.style = _e({ overflow: r.style.overflow }, n, r.style[n])),
                    e.scrollBarWidth &&
                    (t[n] = "".concat(
                      parseInt(pt(r, n) || "0", 10) + e.scrollBarWidth,
                      "px"
                    )),
                    r.setAttribute(mn, ""),
                    pt(r, t);
                },
              },
              {
                key: "reset",
                value: function () {
                  var e = this;
                  dn(this.modals).forEach(function (t) {
                    return e.remove(t);
                  });
                },
              },
              {
                key: "removeContainerStyle",
                value: function (e) {
                  var t = this.getElement();
                  t.removeAttribute(mn), Object.assign(t.style, e.style);
                },
              },
              {
                key: "add",
                value: function (e) {
                  var t = this.modals.indexOf(e);
                  return -1 !== t
                    ? t
                    : ((t = this.modals.length),
                      this.modals.push(e),
                      this.setModalAttributes(e),
                      0 !== t ||
                      ((this.state = {
                        scrollBarWidth: this.getScrollbarWidth(),
                        style: {},
                      }),
                        this.handleContainerOverflow &&
                        this.setContainerStyle(this.state)),
                      t);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t = this.modals.indexOf(e);
                  -1 !== t &&
                    (this.modals.splice(t, 1),
                      !this.modals.length &&
                      this.handleContainerOverflow &&
                      this.removeContainerStyle(this.state),
                      this.removeModalAttributes(e));
                },
              },
              {
                key: "isTopModal",
                value: function (e) {
                  return (
                    !!this.modals.length &&
                    this.modals[this.modals.length - 1] === e
                  );
                },
              },
            ]),
            e
          );
        })(),
        yn = gn,
        bn = (0, t.createContext)(kt ? window : void 0);
      bn.Provider;
      function xn() {
        return (0, t.useContext)(bn);
      }
      var wn = function (e, t) {
        var n;
        return kt
          ? null == e
            ? (t || st()).body
            : ("function" === typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              (null != (n = e) && n.nodeType && e) || null)
          : null;
      };
      var En,
        Sn = [
          "show",
          "role",
          "className",
          "style",
          "children",
          "backdrop",
          "keyboard",
          "onBackdropClick",
          "onEscapeKeyDown",
          "transition",
          "backdropTransition",
          "autoFocus",
          "enforceFocus",
          "restoreFocus",
          "restoreFocusOptions",
          "renderDialog",
          "renderBackdrop",
          "manager",
          "container",
          "onShow",
          "onHide",
          "onExit",
          "onExited",
          "onExiting",
          "onEnter",
          "onEntering",
          "onEntered",
        ];
      function Cn(e) {
        var n = xn(),
          r =
            e ||
            (function (e) {
              return (
                En ||
                (En = new yn({
                  ownerDocument: null == e ? void 0 : e.document,
                })),
                En
              );
            })(n),
          a = (0, t.useRef)({ dialog: null, backdrop: null });
        return Object.assign(a.current, {
          add: function () {
            return r.add(a.current);
          },
          remove: function () {
            return r.remove(a.current);
          },
          isTopModal: function () {
            return r.isTopModal(a.current);
          },
          setDialogRef: (0, t.useCallback)(function (e) {
            a.current.dialog = e;
          }, []),
          setBackdropRef: (0, t.useCallback)(function (e) {
            a.current.backdrop = e;
          }, []),
        });
      }
      var kn = (0, t.forwardRef)(function (e, n) {
        var a = e.show,
          i = void 0 !== a && a,
          s = e.role,
          l = void 0 === s ? "dialog" : s,
          u = e.className,
          c = e.style,
          d = e.children,
          f = e.backdrop,
          p = void 0 === f || f,
          h = e.keyboard,
          v = void 0 === h || h,
          m = e.onBackdropClick,
          g = e.onEscapeKeyDown,
          y = e.transition,
          b = e.backdropTransition,
          x = e.autoFocus,
          w = void 0 === x || x,
          E = e.enforceFocus,
          S = void 0 === E || E,
          C = e.restoreFocus,
          k = void 0 === C || C,
          T = e.restoreFocusOptions,
          P = e.renderDialog,
          j = e.renderBackdrop,
          O =
            void 0 === j
              ? function (e) {
                return (0, Ze.jsx)("div", Object.assign({}, e));
              }
              : j,
          M = e.manager,
          N = e.container,
          L = e.onShow,
          A = e.onHide,
          z = void 0 === A ? function () { } : A,
          _ = e.onExit,
          R = e.onExited,
          D = e.onExiting,
          V = e.onEnter,
          I = e.onEntering,
          F = e.onEntered,
          B = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, Sn),
          H = (function (e, n) {
            var r = xn(),
              a = o(
                (0, t.useState)(function () {
                  return wn(e, null == r ? void 0 : r.document);
                }),
                2
              ),
              i = a[0],
              s = a[1];
            if (!i) {
              var l = wn(e);
              l && s(l);
            }
            return (
              (0, t.useEffect)(
                function () {
                  n && i && n(i);
                },
                [n, i]
              ),
              (0, t.useEffect)(
                function () {
                  var t = wn(e);
                  t !== i && s(t);
                },
                [e, i]
              ),
              i
            );
          })(N),
          W = Cn(M),
          U = (function () {
            var e = (0, t.useRef)(!0),
              n = (0, t.useRef)(function () {
                return e.current;
              });
            return (
              (0, t.useEffect)(function () {
                return (
                  (e.current = !0),
                  function () {
                    e.current = !1;
                  }
                );
              }, []),
              n.current
            );
          })(),
          G = (function (e) {
            var n = (0, t.useRef)(null);
            return (
              (0, t.useEffect)(function () {
                n.current = e;
              }),
              n.current
            );
          })(i),
          $ = o((0, t.useState)(!i), 2),
          Y = $[0],
          q = $[1],
          X = (0, t.useRef)(null);
        (0, t.useImperativeHandle)(
          n,
          function () {
            return W;
          },
          [W]
        ),
          kt && !G && i && (X.current = ln()),
          y || i || Y ? i && Y && q(!1) : q(!0);
        var Z = rn(function () {
          if (
            (W.add(),
              (ne.current = Nt(document, "keydown", ee)),
              (te.current = Nt(
                document,
                "focus",
                function () {
                  return setTimeout(K);
                },
                !0
              )),
              L && L(),
              w)
          ) {
            var e = ln(document);
            W.dialog &&
              e &&
              !un(W.dialog, e) &&
              ((X.current = e), W.dialog.focus());
          }
        }),
          Q = rn(function () {
            var e;
            (W.remove(),
              null == ne.current || ne.current(),
              null == te.current || te.current(),
              k) &&
              (null == (e = X.current) || null == e.focus || e.focus(T),
                (X.current = null));
          });
        (0, t.useEffect)(
          function () {
            i && H && Z();
          },
          [i, H, Z]
        ),
          (0, t.useEffect)(
            function () {
              Y && Q();
            },
            [Y, Q]
          ),
          cn(function () {
            Q();
          });
        var K = rn(function () {
          if (S && U() && W.isTopModal()) {
            var e = ln();
            W.dialog && e && !un(W.dialog, e) && W.dialog.focus();
          }
        }),
          J = rn(function (e) {
            e.target === e.currentTarget &&
              (null == m || m(e), !0 === p && z());
          }),
          ee = rn(function (e) {
            v &&
              27 === e.keyCode &&
              W.isTopModal() &&
              (null == g || g(e), e.defaultPrevented || z());
          }),
          te = (0, t.useRef)(),
          ne = (0, t.useRef)(),
          re = y;
        if (!H || !(i || (re && !Y))) return null;
        var ae = Object.assign(
          {
            role: l,
            ref: W.setDialogRef,
            "aria-modal": "dialog" === l || void 0,
          },
          B,
          { style: c, className: u, tabIndex: -1 }
        ),
          ie = P
            ? P(ae)
            : (0, Ze.jsx)(
              "div",
              Object.assign({}, ae, {
                children: t.cloneElement(d, { role: "document" }),
              })
            );
        re &&
          (ie = (0, Ze.jsx)(re, {
            appear: !0,
            unmountOnExit: !0,
            in: !!i,
            onExit: _,
            onExiting: D,
            onExited: function () {
              q(!0), null == R || R.apply(void 0, arguments);
            },
            onEnter: V,
            onEntering: I,
            onEntered: F,
            children: ie,
          }));
        var oe = null;
        if (p) {
          var se = b;
          (oe = O({ ref: W.setBackdropRef, onClick: J })),
            se && (oe = (0, Ze.jsx)(se, { appear: !0, in: !!i, children: oe }));
        }
        return (0,
          Ze.jsx)(Ze.Fragment, { children: r.createPortal((0, Ze.jsxs)(Ze.Fragment, { children: [oe, ie] }), H) });
      });
      kn.displayName = "Modal";
      var Tn,
        Pn = Object.assign(kn, { Manager: yn }),
        jn = ["className", "children", "transitionClasses"],
        On = (_e((Tn = {}), bt, "show"), _e(Tn, xt, "show"), Tn),
        Mn = t.forwardRef(function (e, n) {
          var r = e.className,
            a = e.children,
            i = e.transitionClasses,
            o = void 0 === i ? {} : i,
            s = Ie(e, jn),
            l = (0, t.useCallback)(
              function (e, t) {
                Dt(e), null == s.onEnter || s.onEnter(e, t);
              },
              [s]
            );
          return (0, Ze.jsx)(
            Wt,
            De(
              De({ ref: n, addEndListener: _t }, s),
              {},
              {
                onEnter: l,
                childRef: a.ref,
                children: function (e, n) {
                  return t.cloneElement(
                    a,
                    De(
                      De({}, n),
                      {},
                      {
                        className: Be()(
                          "fade",
                          r,
                          a.props.className,
                          On[e],
                          o[e]
                        ),
                      }
                    )
                  );
                },
              }
            )
          );
        });
      (Mn.defaultProps = {
        in: !1,
        timeout: 300,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
      }),
        (Mn.displayName = "Fade");
      var Nn,
        Ln = Mn,
        An = rt("offcanvas-body"),
        zn = ["bsPrefix", "className", "children"],
        _n = (_e((Nn = {}), bt, "show"), _e(Nn, xt, "show"), Nn),
        Rn = t.forwardRef(function (e, n) {
          var r = e.bsPrefix,
            a = e.className,
            i = e.children,
            o = Ie(e, zn);
          return (
            (r = Je(r, "offcanvas")),
            (0, Ze.jsx)(
              Wt,
              De(
                De({ ref: n, addEndListener: _t }, o),
                {},
                {
                  childRef: i.ref,
                  children: function (e, n) {
                    return t.cloneElement(
                      i,
                      De(
                        De({}, n),
                        {},
                        {
                          className: Be()(
                            a,
                            i.props.className,
                            (e === bt || e === wt) && "".concat(r, "-toggling"),
                            _n[e]
                          ),
                        }
                      )
                    );
                  },
                }
              )
            )
          );
        });
      (Rn.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
      }),
        (Rn.displayName = "OffcanvasToggling");
      var Dn = Rn,
        Vn = t.createContext({ onHide: function () { } }),
        In = n(7),
        Fn = n.n(In),
        Bn = ["className", "variant"],
        Hn = {
          "aria-label": Fn().string,
          onClick: Fn().func,
          variant: Fn().oneOf(["white"]),
        },
        Wn = t.forwardRef(function (e, t) {
          var n = e.className,
            r = e.variant,
            a = Ie(e, Bn);
          return (0,
            Ze.jsx)("button", De({ ref: t, type: "button", className: Be()("btn-close", r && "btn-close-".concat(r), n) }, a));
        });
      (Wn.displayName = "CloseButton"),
        (Wn.propTypes = Hn),
        (Wn.defaultProps = { "aria-label": "Close" });
      var Un = Wn,
        Gn = [
          "closeLabel",
          "closeVariant",
          "closeButton",
          "onHide",
          "children",
        ],
        $n = t.forwardRef(function (e, n) {
          var r = e.closeLabel,
            a = e.closeVariant,
            i = e.closeButton,
            o = e.onHide,
            s = e.children,
            l = Ie(e, Gn),
            u = (0, t.useContext)(Vn),
            c = rn(function () {
              null == u || u.onHide(), null == o || o();
            });
          return (0,
            Ze.jsxs)("div", De(De({ ref: n }, l), {}, { children: [s, i && (0, Ze.jsx)(Un, { "aria-label": r, variant: a, onClick: c })] }));
        });
      $n.defaultProps = { closeLabel: "Close", closeButton: !1 };
      var Yn = $n,
        qn = ["bsPrefix", "className"],
        Xn = t.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = Ie(e, qn);
          return (
            (n = Je(n, "offcanvas-header")),
            (0, Ze.jsx)(
              Yn,
              De(De({ ref: t }, a), {}, { className: Be()(r, n) })
            )
          );
        });
      (Xn.displayName = "OffcanvasHeader"),
        (Xn.defaultProps = { closeLabel: "Close", closeButton: !1 });
      var Zn,
        Qn = Xn,
        Kn = rt("offcanvas-title", {
          Component:
            ((Zn = "h5"),
              t.forwardRef(function (e, t) {
                return (0,
                  Ze.jsx)("div", De(De({}, e), {}, { ref: t, className: Be()(e.className, Zn) }));
              })),
        });
      function Jn(e) {
        return (
          (Jn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
          Jn(e)
        );
      }
      function er(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Jn(e));

        );
        return e;
      }
      function tr() {
        return (
          (tr =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get
              : function (e, t, n) {
                var r = er(e, t);
                if (r) {
                  var a = Object.getOwnPropertyDescriptor(r, t);
                  return a.get
                    ? a.get.call(arguments.length < 3 ? e : n)
                    : a.value;
                }
              }),
          tr.apply(this, arguments)
        );
      }
      function nr(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && ht(e, t);
      }
      function rr() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () { })
            ),
            !0
          );
        } catch (Gp) {
          return !1;
        }
      }
      function ar(e) {
        return (
          (ar =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                return typeof e;
              }
              : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
          ar(e)
        );
      }
      function ir(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function or(e, t) {
        if (t && ("object" === ar(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return ir(e);
      }
      function sr(e) {
        var t = rr();
        return function () {
          var n,
            r = Jn(e);
          if (t) {
            var a = Jn(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return or(this, n);
        };
      }
      var lr = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function ur(e, t) {
        return lr(e.querySelectorAll(t));
      }
      function cr(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      var dr,
        fr = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        pr = ".sticky-top",
        hr = ".navbar-toggler",
        vr = (function (e) {
          nr(n, e);
          var t = sr(n);
          function n() {
            return fn(this, n), t.apply(this, arguments);
          }
          return (
            hn(n, [
              {
                key: "adjustAndStore",
                value: function (e, t, n) {
                  var r = t.style[e];
                  (t.dataset[e] = r),
                    pt(t, _e({}, e, "".concat(parseFloat(pt(t, e)) + n, "px")));
                },
              },
              {
                key: "restore",
                value: function (e, t) {
                  var n = t.dataset[e];
                  void 0 !== n && (delete t.dataset[e], pt(t, _e({}, e, n)));
                },
              },
              {
                key: "setContainerStyle",
                value: function (e) {
                  var t = this;
                  tr(Jn(n.prototype), "setContainerStyle", this).call(this, e);
                  var r = this.getElement();
                  if (
                    ((function (e, t) {
                      e.classList
                        ? e.classList.add(t)
                        : (function (e, t) {
                          return e.classList
                            ? !!t && e.classList.contains(t)
                            : -1 !==
                            (
                              " " +
                              (e.className.baseVal || e.className) +
                              " "
                            ).indexOf(" " + t + " ");
                        })(e, t) ||
                        ("string" === typeof e.className
                          ? (e.className = e.className + " " + t)
                          : e.setAttribute(
                            "class",
                            ((e.className && e.className.baseVal) || "") +
                            " " +
                            t
                          ));
                    })(r, "modal-open"),
                      e.scrollBarWidth)
                  ) {
                    var a = this.isRTL ? "paddingLeft" : "paddingRight",
                      i = this.isRTL ? "marginLeft" : "marginRight";
                    ur(r, fr).forEach(function (n) {
                      return t.adjustAndStore(a, n, e.scrollBarWidth);
                    }),
                      ur(r, pr).forEach(function (n) {
                        return t.adjustAndStore(i, n, -e.scrollBarWidth);
                      }),
                      ur(r, hr).forEach(function (n) {
                        return t.adjustAndStore(i, n, e.scrollBarWidth);
                      });
                  }
                },
              },
              {
                key: "removeContainerStyle",
                value: function (e) {
                  var t = this;
                  tr(Jn(n.prototype), "removeContainerStyle", this).call(
                    this,
                    e
                  );
                  var r = this.getElement();
                  !(function (e, t) {
                    e.classList
                      ? e.classList.remove(t)
                      : "string" === typeof e.className
                        ? (e.className = cr(e.className, t))
                        : e.setAttribute(
                          "class",
                          cr((e.className && e.className.baseVal) || "", t)
                        );
                  })(r, "modal-open");
                  var a = this.isRTL ? "paddingLeft" : "paddingRight",
                    i = this.isRTL ? "marginLeft" : "marginRight";
                  ur(r, fr).forEach(function (e) {
                    return t.restore(a, e);
                  }),
                    ur(r, pr).forEach(function (e) {
                      return t.restore(i, e);
                    }),
                    ur(r, hr).forEach(function (e) {
                      return t.restore(i, e);
                    });
                },
              },
            ]),
            n
          );
        })(yn);
      var mr = vr,
        gr = [
          "bsPrefix",
          "className",
          "children",
          "aria-labelledby",
          "placement",
          "show",
          "backdrop",
          "keyboard",
          "scroll",
          "onEscapeKeyDown",
          "onShow",
          "onHide",
          "container",
          "autoFocus",
          "enforceFocus",
          "restoreFocus",
          "restoreFocusOptions",
          "onEntered",
          "onExit",
          "onExiting",
          "onEnter",
          "onEntering",
          "onExited",
          "backdropClassName",
          "manager",
        ];
      function yr(e) {
        return (0, Ze.jsx)(Dn, De({}, e));
      }
      function br(e) {
        return (0, Ze.jsx)(Ln, De({}, e));
      }
      var xr = t.forwardRef(function (e, n) {
        var r = e.bsPrefix,
          a = e.className,
          i = e.children,
          o = e["aria-labelledby"],
          s = e.placement,
          l = e.show,
          u = e.backdrop,
          c = e.keyboard,
          d = e.scroll,
          f = e.onEscapeKeyDown,
          p = e.onShow,
          h = e.onHide,
          v = e.container,
          m = e.autoFocus,
          g = e.enforceFocus,
          y = e.restoreFocus,
          b = e.restoreFocusOptions,
          x = e.onEntered,
          w = e.onExit,
          E = e.onExiting,
          S = e.onEnter,
          C = e.onEntering,
          k = e.onExited,
          T = e.backdropClassName,
          P = e.manager,
          j = Ie(e, gr),
          O = (0, t.useRef)();
        r = Je(r, "offcanvas");
        var M = ((0, t.useContext)(Kt) || {}).onToggle,
          N = rn(function () {
            null == M || M(), null == h || h();
          }),
          L = (0, t.useMemo)(
            function () {
              return { onHide: N };
            },
            [N]
          );
        var A = (0, t.useCallback)(
          function (e) {
            return (0, Ze.jsx)(
              "div",
              De(
                De({}, e),
                {},
                { className: Be()("".concat(r, "-backdrop"), T) }
              )
            );
          },
          [T, r]
        );
        return (0, Ze.jsx)(Vn.Provider, {
          value: L,
          children: (0, Ze.jsx)(Pn, {
            show: l,
            ref: n,
            backdrop: u,
            container: v,
            keyboard: c,
            autoFocus: m,
            enforceFocus: g && !d,
            restoreFocus: y,
            restoreFocusOptions: b,
            onEscapeKeyDown: f,
            onShow: p,
            onHide: N,
            onEnter: function (e) {
              e && (e.style.visibility = "visible");
              for (
                var t = arguments.length,
                n = new Array(t > 1 ? t - 1 : 0),
                r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              null == S || S.apply(void 0, [e].concat(n));
            },
            onEntering: C,
            onEntered: x,
            onExit: w,
            onExiting: E,
            onExited: function (e) {
              e && (e.style.visibility = "");
              for (
                var t = arguments.length,
                n = new Array(t > 1 ? t - 1 : 0),
                r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              null == k || k.apply(void 0, n);
            },
            manager:
              P ||
              (d
                ? (O.current ||
                  (O.current = new mr({ handleContainerOverflow: !1 })),
                  O.current)
                : (function (e) {
                  return dr || (dr = new vr(e)), dr;
                })()),
            transition: yr,
            backdropTransition: br,
            renderBackdrop: A,
            renderDialog: function (e) {
              return (0, Ze.jsx)(
                "div",
                De(
                  De(De({ role: "dialog" }, e), j),
                  {},
                  {
                    className: Be()(a, r, "".concat(r, "-").concat(s)),
                    "aria-labelledby": o,
                    children: i,
                  }
                )
              );
            },
          }),
        });
      });
      (xr.displayName = "Offcanvas"),
        (xr.defaultProps = {
          show: !1,
          backdrop: !0,
          keyboard: !0,
          scroll: !1,
          autoFocus: !0,
          enforceFocus: !0,
          restoreFocus: !0,
          placement: "start",
        });
      var wr = Object.assign(xr, { Body: An, Header: Qn, Title: Kn }),
        Er = t.forwardRef(function (e, n) {
          var r = (0, t.useContext)(Kt);
          return (0,
            Ze.jsx)(wr, De({ ref: n, show: !(null == r || !r.expanded) }, e));
        });
      Er.displayName = "NavbarOffcanvas";
      var Sr = Er,
        Cr = [
          "bsPrefix",
          "expand",
          "variant",
          "bg",
          "fixed",
          "sticky",
          "className",
          "as",
          "expanded",
          "onToggle",
          "onSelect",
          "collapseOnSelect",
        ],
        kr = rt("navbar-text", { Component: "span" }),
        Tr = t.forwardRef(function (e, n) {
          var r = Ge(e, { expanded: "onToggle" }),
            a = r.bsPrefix,
            i = r.expand,
            o = r.variant,
            s = r.bg,
            l = r.fixed,
            u = r.sticky,
            c = r.className,
            d = r.as,
            f = void 0 === d ? "nav" : d,
            p = r.expanded,
            h = r.onToggle,
            v = r.onSelect,
            m = r.collapseOnSelect,
            g = Ie(r, Cr),
            y = Je(a, "navbar"),
            b = (0, t.useCallback)(
              function () {
                null == v || v.apply(void 0, arguments),
                  m && p && (null == h || h(!1));
              },
              [v, m, p, h]
            );
          void 0 === g.role && "nav" !== f && (g.role = "navigation");
          var x = "".concat(y, "-expand");
          "string" === typeof i && (x = "".concat(x, "-").concat(i));
          var w = (0, t.useMemo)(
            function () {
              return {
                onToggle: function () {
                  return null == h ? void 0 : h(!p);
                },
                bsPrefix: y,
                expanded: !!p,
              };
            },
            [y, p, h]
          );
          return (0,
            Ze.jsx)(Kt.Provider, { value: w, children: (0, Ze.jsx)(He.Provider, { value: b, children: (0, Ze.jsx)(f, De(De({ ref: n }, g), {}, { className: Be()(c, y, i && x, o && "".concat(y, "-").concat(o), s && "bg-".concat(s), u && "sticky-".concat(u), l && "fixed-".concat(l)) })) }) });
        });
      (Tr.defaultProps = {
        expand: !0,
        variant: "light",
        collapseOnSelect: !1,
      }),
        (Tr.displayName = "Navbar");
      var Pr = Object.assign(Tr, {
        Brand: ot,
        Collapse: tn,
        Offcanvas: Sr,
        Text: kr,
        Toggle: sn,
      }),
        jr = ["bsPrefix", "fluid", "as", "className"],
        Or = t.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.fluid,
            a = e.as,
            i = void 0 === a ? "div" : a,
            o = e.className,
            s = Ie(e, jr),
            l = Je(n, "container"),
            u = "string" === typeof r ? "-".concat(r) : "-fluid";
          return (0,
            Ze.jsx)(i, De(De({ ref: t }, s), {}, { className: Be()(o, r ? "".concat(l).concat(u) : l) }));
        });
      (Or.displayName = "Container"), (Or.defaultProps = { fluid: !1 });
      var Mr = Or,
        Nr = ["as", "disabled"];
      function Lr(e) {
        var t = e.tagName,
          n = e.disabled,
          r = e.href,
          a = e.target,
          i = e.rel,
          o = e.onClick,
          s = e.tabIndex,
          l = void 0 === s ? 0 : s,
          u = e.type;
        t || (t = null != r || null != a || null != i ? "a" : "button");
        var c = { tagName: t };
        if ("button" === t) return [{ type: u || "button", disabled: n }, c];
        var d = function (e) {
          (n ||
            ("a" === t &&
              (function (e) {
                return !e || "#" === e.trim();
              })(r))) &&
            e.preventDefault(),
            n ? e.stopPropagation() : null == o || o(e);
        };
        return (
          "a" === t && (r || (r = "#"), n && (r = void 0)),
          [
            {
              role: "button",
              disabled: void 0,
              tabIndex: n ? void 0 : l,
              href: r,
              target: "a" === t ? a : void 0,
              "aria-disabled": n || void 0,
              rel: "a" === t ? i : void 0,
              onClick: d,
              onKeyDown: function (e) {
                " " === e.key && (e.preventDefault(), d(e));
              },
            },
            c,
          ]
        );
      }
      var Ar = t.forwardRef(function (e, t) {
        var n = e.as,
          r = e.disabled,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, Nr),
          i = o(Lr(Object.assign({ tagName: n, disabled: r }, a)), 2),
          s = i[0],
          l = i[1].tagName;
        return (0, Ze.jsx)(l, Object.assign({}, a, s, { ref: t }));
      });
      Ar.displayName = "Button";
      var zr = ["as", "bsPrefix", "variant", "size", "active", "className"],
        _r = t.forwardRef(function (e, t) {
          var n = e.as,
            r = e.bsPrefix,
            a = e.variant,
            i = e.size,
            s = e.active,
            l = e.className,
            u = Ie(e, zr),
            c = Je(r, "btn"),
            d = o(Lr(De({ tagName: n }, u)), 2),
            f = d[0],
            p = d[1].tagName;
          return (0,
            Ze.jsx)(p, De(De(De({}, f), u), {}, { ref: t, className: Be()(l, c, s && "active", a && "".concat(c, "-").concat(a), i && "".concat(c, "-").concat(i), u.href && u.disabled && "disabled") }));
        });
      (_r.displayName = "Button"),
        (_r.defaultProps = { variant: "primary", active: !1, disabled: !1 });
      var Rr = _r;
      var Dr = function () {
        return (0, Ze.jsx)(Pr, {
          fixed: "top",
          collapseOnSelect: !0,
          expand: "lg",
          className: "navbar",
          children: (0, Ze.jsxs)(Mr, {
            children: [
              (0, Ze.jsxs)("div", {
                className: "headerlogo",
                children: [
                  (0, Ze.jsx)("div", {
                    className: "color-button silenced",
                    "data-theme": "silenced",
                    children: (0, Ze.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "35.061",
                      height: "35.062",
                      viewBox: "0 0 35.061 35.062",
                      children: (0, Ze.jsx)("path", {
                        className: "logoPath",
                        fill: "#ef795b !important",
                        d: "M15.921 17.531l1.609-1.609 1.61 1.609-1.61 1.61zM27.127 0l-9.6 9.6L7.933 0 4.771 3.163l9.6 9.6-1.61 1.61-9.6-9.6L0 7.934l9.6 9.6L0 27.127l3.161 3.162 9.6-9.6 1.61 1.609-9.6 9.6 3.162 3.162 9.6-9.6 9.6 9.6 3.156-3.16-9.6-9.6 1.61-1.609 9.6 9.6 3.161-3.162-9.6-9.6 9.6-9.6-3.16-3.157-9.6 9.6-1.609-1.61 9.6-9.6z",
                        "data-name": "Path 54",
                      }),
                    }),
                  }),
                  (0, Ze.jsx)("div", {
                    className: "color-button warlord",
                    "data-theme": "warlord",
                    children: (0, Ze.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "33.513",
                      height: "33.423",
                      viewBox: "0 0 33.513 33.423",
                      children: (0, Ze.jsxs)("g", {
                        fill: "#95C183 !important",
                        "data-name": "Group 309",
                        transform: "translate(-6798.189 -9899.838)",
                        children: [
                          (0, Ze.jsx)("path", {
                            className: "logoPath",
                            d: "M71.882.965l-7.8 7.8 7.8 7.8 7.8-7.8zm-1.654 7.8l1.654-1.654 1.654 1.654-1.654 1.654z",
                            "data-name": "Path 50",
                            transform: "translate(6743.064 9898.873)",
                          }),
                          (0, Ze.jsx)("path", {
                            className: "logoPath",
                            d: "M71.882 23.208l-7.8 7.8 7.8 7.8 7.8-7.8zm-1.654 7.8l1.654-1.654 1.654 1.654-1.654 1.654z",
                            "data-name": "Path 51",
                            transform: "translate(6743.064 9894.458)",
                          }),
                          (0, Ze.jsx)("path", {
                            className: "logoPath",
                            d: "M83.059 12.144l-7.8 7.8 7.8 7.8 7.8-7.8zm-1.653 7.8l1.654-1.654 1.654 1.654-1.653 1.656z",
                            "data-name": "Path 52",
                            transform: "translate(6740.846 9896.654)",
                          }),
                          (0, Ze.jsx)("path", {
                            className: "logoPath",
                            d: "M60.7 12.144l-7.8 7.8 7.8 7.8 7.8-7.8zm-1.654 7.8l1.654-1.657 1.654 1.654L60.7 21.6z",
                            "data-name": "Path 53",
                            transform: "translate(6745.283 9896.654)",
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, Ze.jsx)("div", {
                    className: "color-button soulstealer",
                    "data-theme": "soulstealer",
                    children: (0, Ze.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "33.513",
                      height: "33.514",
                      viewBox: "0 0 33.513 33.514",
                      children: (0, Ze.jsx)("path", {
                        className: "logoPath",
                        fill: "#f58abf !important",
                        d: "M112.519 20.423v-5.4l9.573-9.573h5.4l9.573 9.573v5.4L127.493 30h-5.4zM120.234.966l-12.2 12.2v9.114l12.2 12.2h9.114l12.2-12.2v-9.113l-12.2-12.2z",
                        "data-name": "Path 49",
                        transform: "translate(-108.036 -.966)",
                      }),
                    }),
                  }),
                  (0, Ze.jsx)("div", {
                    className: "color-button assassin",
                    "data-theme": "assassin",
                    children: (0, Ze.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38.697",
                      height: "33.514",
                      viewBox: "0 0 38.697 33.514",
                      children: (0, Ze.jsx)("path", {
                        className: "logoPath",
                        fill: "#141414 !important",
                        d: "M187.425 18.676l5.182 8.974-1.215 2.1H166.04l-1.214-2.1 5.181-8.974 8.709 4.991zm-15.055-4.094l5.13-8.889h2.428l5.132 8.889-6.346 3.636zm2.4-13.616l-15.403 26.683 3.943 6.83h30.811l3.943-6.828L182.659.966z",
                        "data-name": "Path 48",
                        transform: "translate(-159.367 -.966)",
                      }),
                    }),
                  }),
                ],
              }),
              (0, Ze.jsx)(Pr.Toggle, {
                className: "toggler",
                "aria-controls": "responsive-navbar-nav",
                children: (0, Ze.jsxs)("div", {
                  className: "menu-icon hover-target d-md-block d-lg-none",
                  children: [
                    (0, Ze.jsx)("span", {
                      className: "menu-icon__line menu-icon__line-left",
                    }),
                    (0, Ze.jsx)("span", { className: "menu-icon__line" }),
                    (0, Ze.jsx)("span", {
                      className: "menu-icon__line menu-icon__line-right",
                    }),
                  ],
                }),
              }),
              (0, Ze.jsxs)(Pr.Collapse, {
                id: "responsive-navbar-nav",
                children: [
                  /*
                  (0, Ze.jsx)("a", {
                    onClick: () => {
                      document.body.classList.contains("dark")
                        ? document.body.classList.remove('dark')
                        : document.body.classList.add('dark')
                    },
                    children: "🌤️"
                  }),
                  */
                  (0, Ze.jsx)(Z, { to: "/", children: "Home" }),
                  (0, Ze.jsx)("a", {
                    href: "https://twitter.com/aptos_shogun",
                    children: "Twitter",
                  }),
                  (0, Ze.jsx)("a", {
                    children: (0, Ze.jsx)(Rr, {
                      className: "button mint-nav-button",
                      href: "https://bluemove.net/",
                      children: "Go to marketplace",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      },
        Vr = function () {
          var e = {
            silenced: {
              "--themecolour": "#ef795b",
              "--themecolour2": "#db6547",
              "--bs-body-color": "#212529",
              "--bodybg": "#ffffff",
            },
            soulstealer: {
              "--themecolour": "#f58abf",
              "--themecolour2": "#D883AD",
              "--bs-body-color": "#212529",
              "--bodybg": "#f4fffe",
            },
            warlord: {
              "--themecolour": "#95C183",
              "--themecolour2": "#83A874",
              "--bs-body-color": "#212529",
              "--bodybg": "#f3e5dc",
            },
            assassin: {
              "--themecolour": "#dbdbdb",
              "--themecolour2": "#414b54",
              "--bs-body-color": "#bec6cf",
              "--bodybg": "#141414",
            },
          };
          return (
            document.querySelectorAll(".color-button").forEach(function (t) {
              t.addEventListener("click", function () {
                var n = e[t.dataset.theme];
                for (var r in n)
                  document.documentElement.style.setProperty(r, n[r]);
              });
            }),
            (0, Ze.jsx)(Ze.Fragment, {})
          );
        },
        Ir = function () {
          return (0, Ze.jsxs)(Ze.Fragment, {
            children: [
              (0, Ze.jsx)(Dr, {}),
              (0, Ze.jsx)(Vr, {}),
              (0, Ze.jsx)(B, {}),
            ],
          });
        },
        Fr = n(475),
        Br = n.n(Fr),
        Hr = n(77),
        Wr = n.n(Hr),
        Ur = n(725),
        Gr = n.n(Ur),
        $r = "bodyAttributes",
        Yr = "htmlAttributes",
        qr = "titleAttributes",
        Xr = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
        },
        Zr =
          (Object.keys(Xr).map(function (e) {
            return Xr[e];
          }),
            "charset"),
        Qr = "cssText",
        Kr = "href",
        Jr = "http-equiv",
        ea = "innerHTML",
        ta = "itemprop",
        na = "name",
        ra = "property",
        aa = "rel",
        ia = "src",
        oa = "target",
        sa = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        la = "defaultTitle",
        ua = "defer",
        ca = "encodeSpecialCharacters",
        da = "onChangeClientState",
        fa = "titleTemplate",
        pa = Object.keys(sa).reduce(function (e, t) {
          return (e[sa[t]] = t), e;
        }, {}),
        ha = [Xr.NOSCRIPT, Xr.SCRIPT, Xr.STYLE],
        va = "data-react-helmet",
        ma =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
              return typeof e;
            }
            : function (e) {
              return e &&
                "function" === typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
        ga = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        },
        ya = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        ba =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        xa = function (e, t) {
          var n = {};
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
          return n;
        },
        wa = function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        },
        Ea = function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return !1 === t
            ? String(e)
            : String(e)
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#x27;");
        },
        Sa = function (e) {
          var t = ja(e, Xr.TITLE),
            n = ja(e, fa);
          if (n && t)
            return n.replace(/%s/g, function () {
              return Array.isArray(t) ? t.join("") : t;
            });
          var r = ja(e, la);
          return t || r || void 0;
        },
        Ca = function (e) {
          return ja(e, da) || function () { };
        },
        ka = function (e, t) {
          return t
            .filter(function (t) {
              return "undefined" !== typeof t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return ba({}, e, t);
            }, {});
        },
        Ta = function (e, t) {
          return t
            .filter(function (e) {
              return "undefined" !== typeof e[Xr.BASE];
            })
            .map(function (e) {
              return e[Xr.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), a = 0; a < r.length; a++) {
                  var i = r[a].toLowerCase();
                  if (-1 !== e.indexOf(i) && n[i]) return t.concat(n);
                }
              return t;
            }, []);
        },
        Pa = function (e, t, n) {
          var r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                ("undefined" !== typeof t[e] &&
                  Aa(
                    "Helmet: " +
                    e +
                    ' should be of type "Array". Instead found type "' +
                    ma(t[e]) +
                    '"'
                  ),
                  !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              var a = {};
              n.filter(function (e) {
                for (
                  var n = void 0, i = Object.keys(e), o = 0;
                  o < i.length;
                  o++
                ) {
                  var s = i[o],
                    l = s.toLowerCase();
                  -1 === t.indexOf(l) ||
                    (n === aa && "canonical" === e[n].toLowerCase()) ||
                    (l === aa && "stylesheet" === e[l].toLowerCase()) ||
                    (n = l),
                    -1 === t.indexOf(s) ||
                    (s !== ea && s !== Qr && s !== ta) ||
                    (n = s);
                }
                if (!n || !e[n]) return !1;
                var u = e[n].toLowerCase();
                return (
                  r[n] || (r[n] = {}),
                  a[n] || (a[n] = {}),
                  !r[n][u] && ((a[n][u] = !0), !0)
                );
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var i = Object.keys(a), o = 0; o < i.length; o++) {
                var s = i[o],
                  l = Gr()({}, r[s], a[s]);
                r[s] = l;
              }
              return e;
            }, [])
            .reverse();
        },
        ja = function (e, t) {
          for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n];
            if (r.hasOwnProperty(t)) return r[t];
          }
          return null;
        },
        Oa = (function () {
          var e = Date.now();
          return function (t) {
            var n = Date.now();
            n - e > 16
              ? ((e = n), t(n))
              : setTimeout(function () {
                Oa(t);
              }, 0);
          };
        })(),
        Ma = function (e) {
          return clearTimeout(e);
        },
        Na =
          "undefined" !== typeof window
            ? (window.requestAnimationFrame &&
              window.requestAnimationFrame.bind(window)) ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            Oa
            : n.g.requestAnimationFrame || Oa,
        La =
          "undefined" !== typeof window
            ? window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            Ma
            : n.g.cancelAnimationFrame || Ma,
        Aa = function (e) {
          return (
            console && "function" === typeof console.warn && console.warn(e)
          );
        },
        za = null,
        _a = function (e, t) {
          var n = e.baseTag,
            r = e.bodyAttributes,
            a = e.htmlAttributes,
            i = e.linkTags,
            o = e.metaTags,
            s = e.noscriptTags,
            l = e.onChangeClientState,
            u = e.scriptTags,
            c = e.styleTags,
            d = e.title,
            f = e.titleAttributes;
          Va(Xr.BODY, r), Va(Xr.HTML, a), Da(d, f);
          var p = {
            baseTag: Ia(Xr.BASE, n),
            linkTags: Ia(Xr.LINK, i),
            metaTags: Ia(Xr.META, o),
            noscriptTags: Ia(Xr.NOSCRIPT, s),
            scriptTags: Ia(Xr.SCRIPT, u),
            styleTags: Ia(Xr.STYLE, c),
          },
            h = {},
            v = {};
          Object.keys(p).forEach(function (e) {
            var t = p[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (h[e] = n), r.length && (v[e] = p[e].oldTags);
          }),
            t && t(),
            l(e, h, v);
        },
        Ra = function (e) {
          return Array.isArray(e) ? e.join("") : e;
        },
        Da = function (e, t) {
          "undefined" !== typeof e &&
            document.title !== e &&
            (document.title = Ra(e)),
            Va(Xr.TITLE, t);
        },
        Va = function (e, t) {
          var n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute(va),
              a = r ? r.split(",") : [],
              i = [].concat(a),
              o = Object.keys(t),
              s = 0;
              s < o.length;
              s++
            ) {
              var l = o[s],
                u = t[l] || "";
              n.getAttribute(l) !== u && n.setAttribute(l, u),
                -1 === a.indexOf(l) && a.push(l);
              var c = i.indexOf(l);
              -1 !== c && i.splice(c, 1);
            }
            for (var d = i.length - 1; d >= 0; d--) n.removeAttribute(i[d]);
            a.length === i.length
              ? n.removeAttribute(va)
              : n.getAttribute(va) !== o.join(",") &&
              n.setAttribute(va, o.join(","));
          }
        },
        Ia = function (e, t) {
          var n = document.head || document.querySelector(Xr.HEAD),
            r = n.querySelectorAll(e + "[" + "data-react-helmet]"),
            a = Array.prototype.slice.call(r),
            i = [],
            o = void 0;
          return (
            t &&
            t.length &&
            t.forEach(function (t) {
              var n = document.createElement(e);
              for (var r in t)
                if (t.hasOwnProperty(r))
                  if (r === ea) n.innerHTML = t.innerHTML;
                  else if (r === Qr)
                    n.styleSheet
                      ? (n.styleSheet.cssText = t.cssText)
                      : n.appendChild(document.createTextNode(t.cssText));
                  else {
                    var s = "undefined" === typeof t[r] ? "" : t[r];
                    n.setAttribute(r, s);
                  }
              n.setAttribute(va, "true"),
                a.some(function (e, t) {
                  return (o = t), n.isEqualNode(e);
                })
                  ? a.splice(o, 1)
                  : i.push(n);
            }),
            a.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            i.forEach(function (e) {
              return n.appendChild(e);
            }),
            { oldTags: a, newTags: i }
          );
        },
        Fa = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r =
              "undefined" !== typeof e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
          }, "");
        },
        Ba = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(e).reduce(function (t, n) {
            return (t[sa[n] || n] = e[n]), t;
          }, t);
        },
        Ha = function (e, n, r) {
          switch (e) {
            case Xr.TITLE:
              return {
                toComponent: function () {
                  return (function (e, n, r) {
                    var a,
                      i = (((a = { key: n })[va] = !0), a),
                      o = Ba(r, i);
                    return [t.createElement(Xr.TITLE, o, n)];
                  })(0, n.title, n.titleAttributes);
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var a = Fa(n),
                      i = Ra(t);
                    return a
                      ? "<" +
                      e +
                      ' data-react-helmet="true" ' +
                      a +
                      ">" +
                      Ea(i, r) +
                      "</" +
                      e +
                      ">"
                      : "<" +
                      e +
                      ' data-react-helmet="true">' +
                      Ea(i, r) +
                      "</" +
                      e +
                      ">";
                  })(e, n.title, n.titleAttributes, r);
                },
              };
            case $r:
            case Yr:
              return {
                toComponent: function () {
                  return Ba(n);
                },
                toString: function () {
                  return Fa(n);
                },
              };
            default:
              return {
                toComponent: function () {
                  return (function (e, n) {
                    return n.map(function (n, r) {
                      var a,
                        i = (((a = { key: r })[va] = !0), a);
                      return (
                        Object.keys(n).forEach(function (e) {
                          var t = sa[e] || e;
                          if (t === ea || t === Qr) {
                            var r = n.innerHTML || n.cssText;
                            i.dangerouslySetInnerHTML = { __html: r };
                          } else i[t] = n[e];
                        }),
                        t.createElement(e, i)
                      );
                    });
                  })(e, n);
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var a = Object.keys(r)
                        .filter(function (e) {
                          return !(e === ea || e === Qr);
                        })
                        .reduce(function (e, t) {
                          var a =
                            "undefined" === typeof r[t]
                              ? t
                              : t + '="' + Ea(r[t], n) + '"';
                          return e ? e + " " + a : a;
                        }, ""),
                        i = r.innerHTML || r.cssText || "",
                        o = -1 === ha.indexOf(e);
                      return (
                        t +
                        "<" +
                        e +
                        ' data-react-helmet="true" ' +
                        a +
                        (o ? "/>" : ">" + i + "</" + e + ">")
                      );
                    }, "");
                  })(e, n, r);
                },
              };
          }
        },
        Wa = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            a = e.htmlAttributes,
            i = e.linkTags,
            o = e.metaTags,
            s = e.noscriptTags,
            l = e.scriptTags,
            u = e.styleTags,
            c = e.title,
            d = void 0 === c ? "" : c,
            f = e.titleAttributes;
          return {
            base: Ha(Xr.BASE, t, r),
            bodyAttributes: Ha($r, n, r),
            htmlAttributes: Ha(Yr, a, r),
            link: Ha(Xr.LINK, i, r),
            meta: Ha(Xr.META, o, r),
            noscript: Ha(Xr.NOSCRIPT, s, r),
            script: Ha(Xr.SCRIPT, l, r),
            style: Ha(Xr.STYLE, u, r),
            title: Ha(Xr.TITLE, { title: d, titleAttributes: f }, r),
          };
        },
        Ua = (function (e) {
          var n, r;
          return (
            (r = n =
              (function (n) {
                function r() {
                  return ga(this, r), wa(this, n.apply(this, arguments));
                }
                return (
                  (function (e, t) {
                    if ("function" !== typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function, not " +
                        typeof t
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                  })(r, n),
                  (r.prototype.shouldComponentUpdate = function (e) {
                    return !Wr()(this.props, e);
                  }),
                  (r.prototype.mapNestedChildrenToProps = function (e, t) {
                    if (!t) return null;
                    switch (e.type) {
                      case Xr.SCRIPT:
                      case Xr.NOSCRIPT:
                        return { innerHTML: t };
                      case Xr.STYLE:
                        return { cssText: t };
                    }
                    throw new Error(
                      "<" +
                      e.type +
                      " /> elements are self-closing and can not contain children. Refer to our API for more information."
                    );
                  }),
                  (r.prototype.flattenArrayTypeChildren = function (e) {
                    var t,
                      n = e.child,
                      r = e.arrayTypeChildren,
                      a = e.newChildProps,
                      i = e.nestedChildren;
                    return ba(
                      {},
                      r,
                      (((t = {})[n.type] = [].concat(r[n.type] || [], [
                        ba({}, a, this.mapNestedChildrenToProps(n, i)),
                      ])),
                        t)
                    );
                  }),
                  (r.prototype.mapObjectTypeChildren = function (e) {
                    var t,
                      n,
                      r = e.child,
                      a = e.newProps,
                      i = e.newChildProps,
                      o = e.nestedChildren;
                    switch (r.type) {
                      case Xr.TITLE:
                        return ba(
                          {},
                          a,
                          (((t = {})[r.type] = o),
                            (t.titleAttributes = ba({}, i)),
                            t)
                        );
                      case Xr.BODY:
                        return ba({}, a, { bodyAttributes: ba({}, i) });
                      case Xr.HTML:
                        return ba({}, a, { htmlAttributes: ba({}, i) });
                    }
                    return ba({}, a, (((n = {})[r.type] = ba({}, i)), n));
                  }),
                  (r.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                    var n = ba({}, t);
                    return (
                      Object.keys(e).forEach(function (t) {
                        var r;
                        n = ba({}, n, (((r = {})[t] = e[t]), r));
                      }),
                      n
                    );
                  }),
                  (r.prototype.warnOnInvalidChildren = function (e, t) {
                    return !0;
                  }),
                  (r.prototype.mapChildrenToProps = function (e, n) {
                    var r = this,
                      a = {};
                    return (
                      t.Children.forEach(e, function (e) {
                        if (e && e.props) {
                          var t = e.props,
                            i = t.children,
                            o = (function (e) {
                              var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : {};
                              return Object.keys(e).reduce(function (t, n) {
                                return (t[pa[n] || n] = e[n]), t;
                              }, t);
                            })(xa(t, ["children"]));
                          switch ((r.warnOnInvalidChildren(e, i), e.type)) {
                            case Xr.LINK:
                            case Xr.META:
                            case Xr.NOSCRIPT:
                            case Xr.SCRIPT:
                            case Xr.STYLE:
                              a = r.flattenArrayTypeChildren({
                                child: e,
                                arrayTypeChildren: a,
                                newChildProps: o,
                                nestedChildren: i,
                              });
                              break;
                            default:
                              n = r.mapObjectTypeChildren({
                                child: e,
                                newProps: n,
                                newChildProps: o,
                                nestedChildren: i,
                              });
                          }
                        }
                      }),
                      (n = this.mapArrayTypeChildrenToProps(a, n))
                    );
                  }),
                  (r.prototype.render = function () {
                    var n = this.props,
                      r = n.children,
                      a = xa(n, ["children"]),
                      i = ba({}, a);
                    return (
                      r && (i = this.mapChildrenToProps(r, i)),
                      t.createElement(e, i)
                    );
                  }),
                  ya(r, null, [
                    {
                      key: "canUseDOM",
                      set: function (t) {
                        e.canUseDOM = t;
                      },
                    },
                  ]),
                  r
                );
              })(t.Component)),
            (n.propTypes = {
              base: Fn().object,
              bodyAttributes: Fn().object,
              children: Fn().oneOfType([Fn().arrayOf(Fn().node), Fn().node]),
              defaultTitle: Fn().string,
              defer: Fn().bool,
              encodeSpecialCharacters: Fn().bool,
              htmlAttributes: Fn().object,
              link: Fn().arrayOf(Fn().object),
              meta: Fn().arrayOf(Fn().object),
              noscript: Fn().arrayOf(Fn().object),
              onChangeClientState: Fn().func,
              script: Fn().arrayOf(Fn().object),
              style: Fn().arrayOf(Fn().object),
              title: Fn().string,
              titleAttributes: Fn().object,
              titleTemplate: Fn().string,
            }),
            (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
            (n.peek = e.peek),
            (n.rewind = function () {
              var t = e.rewind();
              return (
                t ||
                (t = Wa({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: "",
                  titleAttributes: {},
                })),
                t
              );
            }),
            r
          );
        })(
          Br()(
            function (e) {
              return {
                baseTag: Ta([Kr, oa], e),
                bodyAttributes: ka($r, e),
                defer: ja(e, ua),
                encode: ja(e, ca),
                htmlAttributes: ka(Yr, e),
                linkTags: Pa(Xr.LINK, [aa, Kr], e),
                metaTags: Pa(Xr.META, [na, Zr, Jr, ra, ta], e),
                noscriptTags: Pa(Xr.NOSCRIPT, [ea], e),
                onChangeClientState: Ca(e),
                scriptTags: Pa(Xr.SCRIPT, [ia, ea], e),
                styleTags: Pa(Xr.STYLE, [Qr], e),
                title: Sa(e),
                titleAttributes: ka(qr, e),
              };
            },
            function (e) {
              za && La(za),
                e.defer
                  ? (za = Na(function () {
                    _a(e, function () {
                      za = null;
                    });
                  }))
                  : (_a(e), (za = null));
            },
            Wa
          )(function () {
            return null;
          })
        );
      Ua.renderStatic = Ua.rewind;
      var Ga = function (e) {
        return {
          isEnabled: function (t) {
            return e.some(function (e) {
              return !!t[e];
            });
          },
        };
      },
        $a = {
          measureLayout: Ga(["layout", "layoutId", "drag"]),
          animation: Ga([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: Ga(["exit"]),
          drag: Ga(["drag", "dragControls"]),
          focus: Ga(["whileFocus"]),
          hover: Ga(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: Ga(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: Ga(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: Ga(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      var Ya = (0, t.createContext)({ strict: !1 }),
        qa = Object.keys($a),
        Xa = qa.length;
      var Za = (0, t.createContext)({
        transformPagePoint: function (e) {
          return e;
        },
        isStatic: !1,
        reducedMotion: "never",
      }),
        Qa = (0, t.createContext)({});
      var Ka = { current: null },
        Ja = !1;
      function ei() {
        return (
          !Ja &&
          (function () {
            if (((Ja = !0), we))
              if (window.matchMedia) {
                var e = window.matchMedia("(prefers-reduced-motion)"),
                  t = function () {
                    return (Ka.current = e.matches);
                  };
                e.addListener(t), t();
              } else Ka.current = !1;
          })(),
          ne((0, t.useState)(Ka.current), 1)[0]
        );
      }
      function ti(e, n, r, a) {
        var i = (0, t.useContext)(Ya),
          o = (0, t.useContext)(Qa).visualElement,
          s = (0, t.useContext)(Ce),
          l = (function () {
            var e = ei(),
              n = (0, t.useContext)(Za).reducedMotion;
            return "never" !== n && ("always" === n || e);
          })(),
          u = (0, t.useRef)(void 0);
        a || (a = i.renderer),
          !u.current &&
          a &&
          (u.current = a(e, {
            visualState: n,
            parent: o,
            props: r,
            presenceId: null === s || void 0 === s ? void 0 : s.id,
            blockInitialAnimation:
              !1 === (null === s || void 0 === s ? void 0 : s.initial),
            shouldReduceMotion: l,
          }));
        var c = u.current;
        return (
          Ee(function () {
            null === c || void 0 === c || c.syncRender();
          }),
          (0, t.useEffect)(function () {
            var e;
            null ===
              (e = null === c || void 0 === c ? void 0 : c.animationState) ||
              void 0 === e ||
              e.animateChanges();
          }),
          Ee(function () {
            return function () {
              return null === c || void 0 === c ? void 0 : c.notifyUnmount();
            };
          }, []),
          c
        );
      }
      function ni(e) {
        return (
          "object" === typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function ri(e) {
        return Array.isArray(e);
      }
      function ai(e) {
        return "string" === typeof e || ri(e);
      }
      function ii(e, t, n, r, a) {
        var i;
        return (
          void 0 === r && (r = {}),
          void 0 === a && (a = {}),
          "function" === typeof t &&
          (t = t(null !== n && void 0 !== n ? n : e.custom, r, a)),
          "string" === typeof t &&
          (t = null === (i = e.variants) || void 0 === i ? void 0 : i[t]),
          "function" === typeof t &&
          (t = t(null !== n && void 0 !== n ? n : e.custom, r, a)),
          t
        );
      }
      function oi(e, t, n) {
        var r = e.getProps();
        return ii(
          r,
          t,
          null !== n && void 0 !== n ? n : r.custom,
          (function (e) {
            var t = {};
            return (
              e.forEachValue(function (e, n) {
                return (t[n] = e.get());
              }),
              t
            );
          })(e),
          (function (e) {
            var t = {};
            return (
              e.forEachValue(function (e, n) {
                return (t[n] = e.getVelocity());
              }),
              t
            );
          })(e)
        );
      }
      function si(e) {
        var t;
        return (
          "function" ===
          typeof (null === (t = e.animate) || void 0 === t
            ? void 0
            : t.start) ||
          ai(e.initial) ||
          ai(e.animate) ||
          ai(e.whileHover) ||
          ai(e.whileDrag) ||
          ai(e.whileTap) ||
          ai(e.whileFocus) ||
          ai(e.exit)
        );
      }
      function li(e) {
        return Boolean(si(e) || e.variants);
      }
      function ui(e) {
        var n = (function (e, t) {
          if (si(e)) {
            var n = e.initial,
              r = e.animate;
            return {
              initial: !1 === n || ai(n) ? n : void 0,
              animate: ai(r) ? r : void 0,
            };
          }
          return !1 !== e.inherit ? t : {};
        })(e, (0, t.useContext)(Qa)),
          r = n.initial,
          a = n.animate;
        return (0, t.useMemo)(
          function () {
            return { initial: r, animate: a };
          },
          [ci(r), ci(a)]
        );
      }
      function ci(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var di = function (e, t, n) {
        return -n * e + n * t + e;
      };
      function fi(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      function pi(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function hi(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var vi = (function () {
        function e() {
          this.subscriptions = [];
        }
        return (
          (e.prototype.add = function (e) {
            var t = this;
            return (
              pi(this.subscriptions, e),
              function () {
                return hi(t.subscriptions, e);
              }
            );
          }),
          (e.prototype.notify = function (e, t, n) {
            var r = this.subscriptions.length;
            if (r)
              if (1 === r) this.subscriptions[0](e, t, n);
              else
                for (var a = 0; a < r; a++) {
                  var i = this.subscriptions[a];
                  i && i(e, t, n);
                }
          }),
          (e.prototype.getSize = function () {
            return this.subscriptions.length;
          }),
          (e.prototype.clear = function () {
            this.subscriptions.length = 0;
          }),
          e
        );
      })(),
        mi = (function () {
          function e(e) {
            var t = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new vi()),
              (this.velocityUpdateSubscribers = new vi()),
              (this.renderSubscribers = new vi()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (e, n) {
                void 0 === n && (n = !0), (t.prev = t.current), (t.current = e);
                var r = be(),
                  a = r.delta,
                  i = r.timestamp;
                t.lastUpdated !== i &&
                  ((t.timeDelta = a),
                    (t.lastUpdated = i),
                    xe.postRender(t.scheduleVelocityCheck)),
                  t.prev !== t.current && t.updateSubscribers.notify(t.current),
                  t.velocityUpdateSubscribers.getSize() &&
                  t.velocityUpdateSubscribers.notify(t.getVelocity()),
                  n && t.renderSubscribers.notify(t.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return xe.postRender(t.velocityCheck);
              }),
              (this.velocityCheck = function (e) {
                e.timestamp !== t.lastUpdated &&
                  ((t.prev = t.current),
                    t.velocityUpdateSubscribers.notify(t.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = e),
              (this.canTrackVelocity = (function (e) {
                return !isNaN(parseFloat(e));
              })(this.current));
          }
          return (
            (e.prototype.onChange = function (e) {
              return this.updateSubscribers.add(e);
            }),
            (e.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (e.prototype.onRenderRequest = function (e) {
              return e(this.get()), this.renderSubscribers.add(e);
            }),
            (e.prototype.attach = function (e) {
              this.passiveEffect = e;
            }),
            (e.prototype.set = function (e, t) {
              void 0 === t && (t = !0),
                t && this.passiveEffect
                  ? this.passiveEffect(e, this.updateAndNotify)
                  : this.updateAndNotify(e, t);
            }),
            (e.prototype.get = function () {
              return this.current;
            }),
            (e.prototype.getPrevious = function () {
              return this.prev;
            }),
            (e.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? fi(
                  parseFloat(this.current) - parseFloat(this.prev),
                  this.timeDelta
                )
                : 0;
            }),
            (e.prototype.start = function (e) {
              var t = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (t.hasAnimated = !0), (t.stopAnimation = e(n));
                }).then(function () {
                  return t.clearAnimation();
                })
              );
            }),
            (e.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (e.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (e.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (e.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            e
          );
        })();
      function gi(e) {
        return new mi(e);
      }
      var yi = function (e) {
        return Boolean(null !== e && "object" === typeof e && e.getVelocity);
      };
      var bi = function (e, t, n) {
        return Math.min(Math.max(n, e), t);
      },
        xi = 0.001;
      function wi(e) {
        var t,
          n,
          r = e.duration,
          a = void 0 === r ? 800 : r,
          i = e.bounce,
          o = void 0 === i ? 0.25 : i,
          s = e.velocity,
          l = void 0 === s ? 0 : s,
          u = e.mass,
          c = void 0 === u ? 1 : u,
          d = 1 - o;
        (d = bi(0.05, 1, d)),
          (a = bi(0.01, 10, a / 1e3)),
          d < 1
            ? ((t = function (e) {
              var t = e * d,
                n = t * a,
                r = t - l,
                i = Ei(e, d),
                o = Math.exp(-n);
              return xi - (r / i) * o;
            }),
              (n = function (e) {
                var n = e * d * a,
                  r = n * l + l,
                  i = Math.pow(d, 2) * Math.pow(e, 2) * a,
                  o = Math.exp(-n),
                  s = Ei(Math.pow(e, 2), d);
                return ((-t(e) + xi > 0 ? -1 : 1) * ((r - i) * o)) / s;
              }))
            : ((t = function (e) {
              return Math.exp(-e * a) * ((e - l) * a + 1) - 0.001;
            }),
              (n = function (e) {
                return Math.exp(-e * a) * (a * a * (l - e));
              }));
        var f = (function (e, t, n) {
          for (var r = n, a = 1; a < 12; a++) r -= e(r) / t(r);
          return r;
        })(t, n, 5 / a);
        if (((a *= 1e3), isNaN(f)))
          return { stiffness: 100, damping: 10, duration: a };
        var p = Math.pow(f, 2) * c;
        return { stiffness: p, damping: 2 * d * Math.sqrt(c * p), duration: a };
      }
      function Ei(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      var Si = ["duration", "bounce"],
        Ci = ["stiffness", "damping", "mass"];
      function ki(e, t) {
        return t.some(function (t) {
          return void 0 !== e[t];
        });
      }
      function Ti(e) {
        var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          a = void 0 === r ? 1 : r,
          i = e.restSpeed,
          o = void 0 === i ? 2 : i,
          s = e.restDelta,
          l = ee(e, ["from", "to", "restSpeed", "restDelta"]),
          u = { done: !1, value: n },
          c = (function (e) {
            var t = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              e
            );
            if (!ki(e, Ci) && ki(e, Si)) {
              var n = wi(e);
              (t = Object.assign(Object.assign(Object.assign({}, t), n), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return t;
          })(l),
          d = c.stiffness,
          f = c.damping,
          p = c.mass,
          h = c.velocity,
          v = c.duration,
          m = c.isResolvedFromDuration,
          g = Pi,
          y = Pi;
        function b() {
          var e = h ? -h / 1e3 : 0,
            t = a - n,
            r = f / (2 * Math.sqrt(d * p)),
            i = Math.sqrt(d / p) / 1e3;
          if (
            (void 0 === s && (s = Math.min(Math.abs(a - n) / 100, 0.4)), r < 1)
          ) {
            var o = Ei(i, r);
            (g = function (n) {
              var s = Math.exp(-r * i * n);
              return (
                a -
                s *
                (((e + r * i * t) / o) * Math.sin(o * n) +
                  t * Math.cos(o * n))
              );
            }),
              (y = function (n) {
                var a = Math.exp(-r * i * n);
                return (
                  r *
                  i *
                  a *
                  ((Math.sin(o * n) * (e + r * i * t)) / o +
                    t * Math.cos(o * n)) -
                  a *
                  (Math.cos(o * n) * (e + r * i * t) -
                    o * t * Math.sin(o * n))
                );
              });
          } else if (1 === r)
            g = function (n) {
              return a - Math.exp(-i * n) * (t + (e + i * t) * n);
            };
          else {
            var l = i * Math.sqrt(r * r - 1);
            g = function (n) {
              var o = Math.exp(-r * i * n),
                s = Math.min(l * n, 300);
              return (
                a -
                (o * ((e + r * i * t) * Math.sinh(s) + l * t * Math.cosh(s))) /
                l
              );
            };
          }
        }
        return (
          b(),
          {
            next: function (e) {
              var t = g(e);
              if (m) u.done = e >= v;
              else {
                var n = 1e3 * y(e),
                  r = Math.abs(n) <= o,
                  i = Math.abs(a - t) <= s;
                u.done = r && i;
              }
              return (u.value = u.done ? a : t), u;
            },
            flipTarget: function () {
              h = -h;
              var e = [a, n];
              (n = e[0]), (a = e[1]), b();
            },
          }
        );
      }
      Ti.needsInterpolation = function (e, t) {
        return "string" === typeof e || "string" === typeof t;
      };
      var Pi = function (e) {
        return 0;
      },
        ji = function (e, t, n) {
          var r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        Oi = function (e, t) {
          return function (n) {
            return Math.max(Math.min(n, t), e);
          };
        },
        Mi = function (e) {
          return e % 1 ? Number(e.toFixed(5)) : e;
        },
        Ni = /(-)?([\d]*\.?[\d])+/g,
        Li =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        Ai =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function zi(e) {
        return "string" === typeof e;
      }
      var _i = {
        test: function (e) {
          return "number" === typeof e;
        },
        parse: parseFloat,
        transform: function (e) {
          return e;
        },
      },
        Ri = Object.assign(Object.assign({}, _i), { transform: Oi(0, 1) }),
        Di = Object.assign(Object.assign({}, _i), { default: 1 }),
        Vi = function (e, t) {
          return function (n) {
            return Boolean(
              (zi(n) && Ai.test(n) && n.startsWith(e)) ||
              (t && Object.prototype.hasOwnProperty.call(n, t))
            );
          };
        },
        Ii = function (e, t, n) {
          return function (r) {
            var a;
            if (!zi(r)) return r;
            var i = o(r.match(Ni), 4),
              s = i[0],
              l = i[1],
              u = i[2],
              c = i[3];
            return (
              _e((a = {}), e, parseFloat(s)),
              _e(a, t, parseFloat(l)),
              _e(a, n, parseFloat(u)),
              _e(a, "alpha", void 0 !== c ? parseFloat(c) : 1),
              a
            );
          };
        },
        Fi = Oi(0, 255),
        Bi = Object.assign(Object.assign({}, _i), {
          transform: function (e) {
            return Math.round(Fi(e));
          },
        }),
        Hi = {
          test: Vi("rgb", "red"),
          parse: Ii("red", "green", "blue"),
          transform: function (e) {
            var t = e.red,
              n = e.green,
              r = e.blue,
              a = e.alpha,
              i = void 0 === a ? 1 : a;
            return (
              "rgba(" +
              Bi.transform(t) +
              ", " +
              Bi.transform(n) +
              ", " +
              Bi.transform(r) +
              ", " +
              Mi(Ri.transform(i)) +
              ")"
            );
          },
        };
      var Wi = {
        test: Vi("#"),
        parse: function (e) {
          var t = "",
            n = "",
            r = "",
            a = "";
          return (
            e.length > 5
              ? ((t = e.substr(1, 2)),
                (n = e.substr(3, 2)),
                (r = e.substr(5, 2)),
                (a = e.substr(7, 2)))
              : ((t = e.substr(1, 1)),
                (n = e.substr(2, 1)),
                (r = e.substr(3, 1)),
                (a = e.substr(4, 1)),
                (t += t),
                (n += n),
                (r += r),
                (a += a)),
            {
              red: parseInt(t, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: a ? parseInt(a, 16) / 255 : 1,
            }
          );
        },
        transform: Hi.transform,
      },
        Ui = function (e) {
          return {
            test: function (t) {
              return zi(t) && t.endsWith(e) && 1 === t.split(" ").length;
            },
            parse: parseFloat,
            transform: function (t) {
              return "".concat(t).concat(e);
            },
          };
        },
        Gi = Ui("deg"),
        $i = Ui("%"),
        Yi = Ui("px"),
        qi = Ui("vh"),
        Xi = Ui("vw"),
        Zi = Object.assign(Object.assign({}, $i), {
          parse: function (e) {
            return $i.parse(e) / 100;
          },
          transform: function (e) {
            return $i.transform(100 * e);
          },
        }),
        Qi = {
          test: Vi("hsl", "hue"),
          parse: Ii("hue", "saturation", "lightness"),
          transform: function (e) {
            var t = e.hue,
              n = e.saturation,
              r = e.lightness,
              a = e.alpha,
              i = void 0 === a ? 1 : a;
            return (
              "hsla(" +
              Math.round(t) +
              ", " +
              $i.transform(Mi(n)) +
              ", " +
              $i.transform(Mi(r)) +
              ", " +
              Mi(Ri.transform(i)) +
              ")"
            );
          },
        };
      function Ki(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
              ? t
              : n < 2 / 3
                ? e + (t - e) * (2 / 3 - n) * 6
                : e
        );
      }
      function Ji(e) {
        var t = e.hue,
          n = e.saturation,
          r = e.lightness,
          a = e.alpha;
        (t /= 360), (r /= 100);
        var i = 0,
          o = 0,
          s = 0;
        if ((n /= 100)) {
          var l = r < 0.5 ? r * (1 + n) : r + n - r * n,
            u = 2 * r - l;
          (i = Ki(u, l, t + 1 / 3)),
            (o = Ki(u, l, t)),
            (s = Ki(u, l, t - 1 / 3));
        } else i = o = s = r;
        return {
          red: Math.round(255 * i),
          green: Math.round(255 * o),
          blue: Math.round(255 * s),
          alpha: a,
        };
      }
      var eo = function (e, t, n) {
        var r = e * e,
          a = t * t;
        return Math.sqrt(Math.max(0, n * (a - r) + r));
      },
        to = [Wi, Hi, Qi],
        no = function (e) {
          return to.find(function (t) {
            return t.test(e);
          });
        },
        ro = function (e) {
          return "'".concat(
            e,
            "' is not an animatable color. Use the equivalent color code instead."
          );
        },
        ao = function (e, t) {
          var n = no(e),
            r = no(t);
          ro(e), ro(t);
          var a = n.parse(e),
            i = r.parse(t);
          n === Qi && ((a = Ji(a)), (n = Hi)),
            r === Qi && ((i = Ji(i)), (r = Hi));
          var o = Object.assign({}, a);
          return function (e) {
            for (var t in o) "alpha" !== t && (o[t] = eo(a[t], i[t], e));
            return (o.alpha = di(a.alpha, i.alpha, e)), n.transform(o);
          };
        },
        io = {
          test: function (e) {
            return Hi.test(e) || Wi.test(e) || Qi.test(e);
          },
          parse: function (e) {
            return Hi.test(e)
              ? Hi.parse(e)
              : Qi.test(e)
                ? Qi.parse(e)
                : Wi.parse(e);
          },
          transform: function (e) {
            return zi(e)
              ? e
              : e.hasOwnProperty("red")
                ? Hi.transform(e)
                : Qi.transform(e);
          },
        },
        oo = "${c}",
        so = "${n}";
      function lo(e) {
        "number" === typeof e && (e = "".concat(e));
        var t = [],
          n = 0,
          r = e.match(Li);
        r &&
          ((n = r.length),
            (e = e.replace(Li, oo)),
            t.push.apply(t, dn(r.map(io.parse))));
        var a = e.match(Ni);
        return (
          a && ((e = e.replace(Ni, so)), t.push.apply(t, dn(a.map(_i.parse)))),
          { values: t, numColors: n, tokenised: e }
        );
      }
      function uo(e) {
        return lo(e).values;
      }
      function co(e) {
        var t = lo(e),
          n = t.values,
          r = t.numColors,
          a = t.tokenised,
          i = n.length;
        return function (e) {
          for (var t = a, n = 0; n < i; n++)
            t = t.replace(
              n < r ? oo : so,
              n < r ? io.transform(e[n]) : Mi(e[n])
            );
          return t;
        };
      }
      var fo = function (e) {
        return "number" === typeof e ? 0 : e;
      };
      var po = {
        test: function (e) {
          var t, n, r, a;
          return (
            isNaN(e) &&
            zi(e) &&
            (null !==
              (n =
                null === (t = e.match(Ni)) || void 0 === t
                  ? void 0
                  : t.length) && void 0 !== n
              ? n
              : 0) +
            (null !==
              (a =
                null === (r = e.match(Li)) || void 0 === r
                  ? void 0
                  : r.length) && void 0 !== a
              ? a
              : 0) >
            0
          );
        },
        parse: uo,
        createTransformer: co,
        getAnimatableNone: function (e) {
          var t = uo(e);
          return co(e)(t.map(fo));
        },
      },
        ho = function (e) {
          return "number" === typeof e;
        },
        vo = function (e, t) {
          return function (n) {
            return t(e(n));
          };
        },
        mo = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(vo);
        };
      function go(e, t) {
        return ho(e)
          ? function (n) {
            return di(e, t, n);
          }
          : io.test(e)
            ? ao(e, t)
            : wo(e, t);
      }
      var yo = function (e, t) {
        var n = dn(e),
          r = n.length,
          a = e.map(function (e, n) {
            return go(e, t[n]);
          });
        return function (e) {
          for (var t = 0; t < r; t++) n[t] = a[t](e);
          return n;
        };
      },
        bo = function (e, t) {
          var n = Object.assign(Object.assign({}, e), t),
            r = {};
          for (var a in n)
            void 0 !== e[a] && void 0 !== t[a] && (r[a] = go(e[a], t[a]));
          return function (e) {
            for (var t in r) n[t] = r[t](e);
            return n;
          };
        };
      function xo(e) {
        for (
          var t = po.parse(e), n = t.length, r = 0, a = 0, i = 0, o = 0;
          o < n;
          o++
        )
          r || "number" === typeof t[o] ? r++ : void 0 !== t[o].hue ? i++ : a++;
        return { parsed: t, numNumbers: r, numRGB: a, numHSL: i };
      }
      var wo = function (e, t) {
        var n = po.createTransformer(t),
          r = xo(e),
          a = xo(t);
        return r.numHSL === a.numHSL &&
          r.numRGB === a.numRGB &&
          r.numNumbers >= a.numNumbers
          ? mo(yo(r.parsed, a.parsed), n)
          : ("Complex values '"
            .concat(e, "' and '")
            .concat(
              t,
              "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
            ),
            function (n) {
              return "".concat(n > 0 ? t : e);
            });
      },
        Eo = function (e, t) {
          return function (n) {
            return di(e, t, n);
          };
        };
      function So(e, t, n) {
        for (
          var r,
          a = [],
          i =
            n ||
            ("number" === typeof (r = e[0])
              ? Eo
              : "string" === typeof r
                ? io.test(r)
                  ? ao
                  : wo
                : Array.isArray(r)
                  ? yo
                  : "object" === typeof r
                    ? bo
                    : void 0),
          o = e.length - 1,
          s = 0;
          s < o;
          s++
        ) {
          var l = i(e[s], e[s + 1]);
          if (t) {
            var u = Array.isArray(t) ? t[s] : t;
            l = mo(u, l);
          }
          a.push(l);
        }
        return a;
      }
      function Co(e, t) {
        var n = o(e, 2),
          r = n[0],
          a = n[1],
          i = o(t, 1)[0];
        return function (e) {
          return i(ji(r, a, e));
        };
      }
      function ko(e, t) {
        var n = e.length,
          r = n - 1;
        return function (a) {
          var i = 0,
            o = !1;
          if (
            (a <= e[0] ? (o = !0) : a >= e[r] && ((i = r - 1), (o = !0)), !o)
          ) {
            for (var s = 1; s < n && !(e[s] > a || s === r); s++);
            i = s - 1;
          }
          var l = ji(e[i], e[i + 1], a);
          return t[i](l);
        };
      }
      function To(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          a = void 0 === r || r,
          i = n.ease,
          o = n.mixer,
          s = e.length;
        t.length,
          !i || !Array.isArray(i) || i.length,
          e[0] > e[s - 1] &&
          ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
        var l = So(t, i, o),
          u = 2 === s ? Co(e, l) : ko(e, l);
        return a
          ? function (t) {
            return u(bi(e[0], e[s - 1], t));
          }
          : u;
      }
      var Po,
        jo = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        Oo = function (e) {
          return function (t) {
            return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
          };
        },
        Mo = function (e) {
          return function (t) {
            return t * t * ((e + 1) * t - e);
          };
        },
        No = function (e) {
          return e;
        },
        Lo =
          ((Po = 2),
            function (e) {
              return Math.pow(e, Po);
            }),
        Ao = jo(Lo),
        zo = Oo(Lo),
        _o = function (e) {
          return 1 - Math.sin(Math.acos(e));
        },
        Ro = jo(_o),
        Do = Oo(Ro),
        Vo = Mo(1.525),
        Io = jo(Vo),
        Fo = Oo(Vo),
        Bo = (function (e) {
          var t = Mo(e);
          return function (e) {
            return (e *= 2) < 1
              ? 0.5 * t(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          };
        })(1.525),
        Ho = function (e) {
          if (1 === e || 0 === e) return e;
          var t = e * e;
          return e < 0.36363636363636365
            ? 7.5625 * t
            : e < 0.7272727272727273
              ? 9.075 * t - 9.9 * e + 3.4
              : e < 0.9
                ? 12.066481994459833 * t - 19.63545706371191 * e + 8.898060941828255
                : 10.8 * e * e - 20.52 * e + 10.72;
        },
        Wo = jo(Ho);
      function Uo(e, t) {
        return e
          .map(function () {
            return t || zo;
          })
          .splice(0, e.length - 1);
      }
      function Go(e) {
        var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          a = void 0 === r ? 1 : r,
          i = e.ease,
          o = e.offset,
          s = e.duration,
          l = void 0 === s ? 300 : s,
          u = { done: !1, value: n },
          c = Array.isArray(a) ? a : [n, a],
          d = (function (e, t) {
            return e.map(function (e) {
              return e * t;
            });
          })(
            o && o.length === c.length
              ? o
              : (function (e) {
                var t = e.length;
                return e.map(function (e, n) {
                  return 0 !== n ? n / (t - 1) : 0;
                });
              })(c),
            l
          );
        function f() {
          return To(d, c, { ease: Array.isArray(i) ? i : Uo(c, i) });
        }
        var p = f();
        return {
          next: function (e) {
            return (u.value = p(e)), (u.done = e >= l), u;
          },
          flipTarget: function () {
            c.reverse(), (p = f());
          },
        };
      }
      var $o = {
        keyframes: Go,
        spring: Ti,
        decay: function (e) {
          var t = e.velocity,
            n = void 0 === t ? 0 : t,
            r = e.from,
            a = void 0 === r ? 0 : r,
            i = e.power,
            o = void 0 === i ? 0.8 : i,
            s = e.timeConstant,
            l = void 0 === s ? 350 : s,
            u = e.restDelta,
            c = void 0 === u ? 0.5 : u,
            d = e.modifyTarget,
            f = { done: !1, value: a },
            p = o * n,
            h = a + p,
            v = void 0 === d ? h : d(h);
          return (
            v !== h && (p = v - a),
            {
              next: function (e) {
                var t = -p * Math.exp(-e / l);
                return (
                  (f.done = !(t > c || t < -c)),
                  (f.value = f.done ? v : v + t),
                  f
                );
              },
              flipTarget: function () { },
            }
          );
        },
      };
      function Yo(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return e - t - n;
      }
      var qo = function (e) {
        var t = function (t) {
          var n = t.delta;
          return e(n);
        };
        return {
          start: function () {
            return xe.update(t, !0);
          },
          stop: function () {
            return he.update(t);
          },
        };
      };
      function Xo(e) {
        var t,
          n,
          r,
          a,
          i,
          o = e.from,
          s = e.autoplay,
          l = void 0 === s || s,
          u = e.driver,
          c = void 0 === u ? qo : u,
          d = e.elapsed,
          f = void 0 === d ? 0 : d,
          p = e.repeat,
          h = void 0 === p ? 0 : p,
          v = e.repeatType,
          m = void 0 === v ? "loop" : v,
          g = e.repeatDelay,
          y = void 0 === g ? 0 : g,
          b = e.onPlay,
          x = e.onStop,
          w = e.onComplete,
          E = e.onRepeat,
          S = e.onUpdate,
          C = ee(e, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]),
          k = C.to,
          T = 0,
          P = C.duration,
          j = !1,
          O = !0,
          M = (function (e) {
            if (Array.isArray(e.to)) return Go;
            if ($o[e.type]) return $o[e.type];
            var t = new Set(Object.keys(e));
            return t.has("ease") ||
              (t.has("duration") && !t.has("dampingRatio"))
              ? Go
              : t.has("dampingRatio") ||
                t.has("stiffness") ||
                t.has("mass") ||
                t.has("damping") ||
                t.has("restSpeed") ||
                t.has("restDelta")
                ? Ti
                : Go;
          })(C);
        (null === (n = (t = M).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(t, o, k)) &&
          ((i = To([0, 100], [o, k], { clamp: !1 })), (o = 0), (k = 100));
        var N = M(Object.assign(Object.assign({}, C), { from: o, to: k }));
        function L() {
          T++,
            "reverse" === m
              ? (f = (function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0;
                return arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  !arguments[3]
                  ? t - (e - t) + n
                  : Yo(t + -e, t, n);
              })(f, P, y, (O = T % 2 === 0)))
              : ((f = Yo(f, P, y)), "mirror" === m && N.flipTarget()),
            (j = !1),
            E && E();
        }
        function A(e) {
          if ((O || (e = -e), (f += e), !j)) {
            var t = N.next(Math.max(0, f));
            (a = t.value), i && (a = i(a)), (j = O ? t.done : f <= 0);
          }
          null === S || void 0 === S || S(a),
            j &&
            (0 === T && ((null !== P && void 0 !== P) || (P = f)),
              T < h
                ? (function (e, t, n, r) {
                  return r ? e >= t + n : e <= -n;
                })(f, P, y, O) && L()
                : (r.stop(), w && w()));
        }
        return (
          l && (null === b || void 0 === b || b(), (r = c(A)).start()),
          {
            stop: function () {
              null === x || void 0 === x || x(), r.stop();
            },
          }
        );
      }
      var Zo = function (e) {
        return 1e3 * e;
      },
        Qo = function (e, t) {
          return 1 - 3 * t + 3 * e;
        },
        Ko = function (e, t) {
          return 3 * t - 6 * e;
        },
        Jo = function (e) {
          return 3 * e;
        },
        es = function (e, t, n) {
          return ((Qo(t, n) * e + Ko(t, n)) * e + Jo(t)) * e;
        },
        ts = function (e, t, n) {
          return 3 * Qo(t, n) * e * e + 2 * Ko(t, n) * e + Jo(t);
        };
      var ns = 0.1;
      function rs(e, t, n, r) {
        if (e === t && n === r) return No;
        for (var a = new Float32Array(11), i = 0; i < 11; ++i)
          a[i] = es(i * ns, e, n);
        function o(t) {
          for (var r = 0, i = 1; 10 !== i && a[i] <= t; ++i) r += ns;
          --i;
          var o = r + ((t - a[i]) / (a[i + 1] - a[i])) * ns,
            s = ts(o, e, n);
          return s >= 0.001
            ? (function (e, t, n, r) {
              for (var a = 0; a < 8; ++a) {
                var i = ts(t, n, r);
                if (0 === i) return t;
                t -= (es(t, n, r) - e) / i;
              }
              return t;
            })(t, o, e, n)
            : 0 === s
              ? o
              : (function (e, t, n, r, a) {
                var i,
                  o,
                  s = 0;
                do {
                  (i = es((o = t + (n - t) / 2), r, a) - e) > 0
                    ? (n = o)
                    : (t = o);
                } while (Math.abs(i) > 1e-7 && ++s < 10);
                return o;
              })(t, r, r + ns, e, n);
        }
        return function (e) {
          return 0 === e || 1 === e ? e : es(o(e), t, r);
        };
      }
      var as = {
        linear: No,
        easeIn: Lo,
        easeInOut: zo,
        easeOut: Ao,
        circIn: _o,
        circInOut: Do,
        circOut: Ro,
        backIn: Vo,
        backInOut: Fo,
        backOut: Io,
        anticipate: Bo,
        bounceIn: Wo,
        bounceInOut: function (e) {
          return e < 0.5
            ? 0.5 * (1 - Ho(1 - 2 * e))
            : 0.5 * Ho(2 * e - 1) + 0.5;
        },
        bounceOut: Ho,
      },
        is = function (e) {
          if (Array.isArray(e)) {
            e.length;
            var t = ne(e, 4);
            return rs(t[0], t[1], t[2], t[3]);
          }
          return "string" === typeof e
            ? ("Invalid easing type '".concat(e, "'"), as[e])
            : e;
        },
        os = function (e, t) {
          return (
            "zIndex" !== e &&
            (!("number" !== typeof t && !Array.isArray(t)) ||
              !("string" !== typeof t || !po.test(t) || t.startsWith("url(")))
          );
        },
        ss = function (e) {
          return Array.isArray(e);
        },
        ls = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        us = function (e) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        cs = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        ds = function (e) {
          return { type: "keyframes", duration: 0.8, values: e };
        },
        fs = {
          x: ls,
          y: ls,
          z: ls,
          rotate: ls,
          rotateX: ls,
          rotateY: ls,
          rotateZ: ls,
          scaleX: us,
          scaleY: us,
          scale: us,
          opacity: cs,
          backgroundColor: cs,
          color: cs,
          default: us,
        },
        ps = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function hs(e) {
        var t = o(e.slice(0, -1).split("("), 2),
          n = t[0],
          r = t[1];
        if ("drop-shadow" === n) return e;
        var a = o(r.match(Ni) || [], 1)[0];
        if (!a) return e;
        var i = r.replace(a, ""),
          s = ps.has(n) ? 1 : 0;
        return a !== r && (s *= 100), n + "(" + s + i + ")";
      }
      var vs = /([a-z-]*)\(.*?\)/g,
        ms = Object.assign(Object.assign({}, po), {
          getAnimatableNone: function (e) {
            var t = e.match(vs);
            return t ? t.map(hs).join(" ") : e;
          },
        }),
        gs = J(J({}, _i), { transform: Math.round }),
        ys = {
          borderWidth: Yi,
          borderTopWidth: Yi,
          borderRightWidth: Yi,
          borderBottomWidth: Yi,
          borderLeftWidth: Yi,
          borderRadius: Yi,
          radius: Yi,
          borderTopLeftRadius: Yi,
          borderTopRightRadius: Yi,
          borderBottomRightRadius: Yi,
          borderBottomLeftRadius: Yi,
          width: Yi,
          maxWidth: Yi,
          height: Yi,
          maxHeight: Yi,
          size: Yi,
          top: Yi,
          right: Yi,
          bottom: Yi,
          left: Yi,
          padding: Yi,
          paddingTop: Yi,
          paddingRight: Yi,
          paddingBottom: Yi,
          paddingLeft: Yi,
          margin: Yi,
          marginTop: Yi,
          marginRight: Yi,
          marginBottom: Yi,
          marginLeft: Yi,
          rotate: Gi,
          rotateX: Gi,
          rotateY: Gi,
          rotateZ: Gi,
          scale: Di,
          scaleX: Di,
          scaleY: Di,
          scaleZ: Di,
          skew: Gi,
          skewX: Gi,
          skewY: Gi,
          distance: Yi,
          translateX: Yi,
          translateY: Yi,
          translateZ: Yi,
          x: Yi,
          y: Yi,
          z: Yi,
          perspective: Yi,
          transformPerspective: Yi,
          opacity: Ri,
          originX: Zi,
          originY: Zi,
          originZ: Yi,
          zIndex: gs,
          fillOpacity: Ri,
          strokeOpacity: Ri,
          numOctaves: gs,
        },
        bs = J(J({}, ys), {
          color: io,
          backgroundColor: io,
          outlineColor: io,
          fill: io,
          stroke: io,
          borderColor: io,
          borderTopColor: io,
          borderRightColor: io,
          borderBottomColor: io,
          borderLeftColor: io,
          filter: ms,
          WebkitFilter: ms,
        }),
        xs = function (e) {
          return bs[e];
        };
      function ws(e, t) {
        var n,
          r = xs(e);
        return (
          r !== ms && (r = po),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, t)
        );
      }
      var Es = !1,
        Ss = function (e) {
          return ss(e) ? e[e.length - 1] || 0 : e;
        };
      function Cs(e) {
        var t = e.ease,
          n = e.times,
          r = e.yoyo,
          a = e.flip,
          i = e.loop,
          o = ee(e, ["ease", "times", "yoyo", "flip", "loop"]),
          s = J({}, o);
        return (
          n && (s.offset = n),
          o.duration && (s.duration = Zo(o.duration)),
          o.repeatDelay && (s.repeatDelay = Zo(o.repeatDelay)),
          t &&
          (s.ease = (function (e) {
            return Array.isArray(e) && "number" !== typeof e[0];
          })(t)
            ? t.map(is)
            : is(t)),
          "tween" === o.type && (s.type = "keyframes"),
          (r || i || a) &&
          (!0,
            r
              ? (s.repeatType = "reverse")
              : i
                ? (s.repeatType = "loop")
                : a && (s.repeatType = "mirror"),
            (s.repeat = i || r || a || o.repeat)),
          "spring" !== o.type && (s.type = "keyframes"),
          s
        );
      }
      function ks(e, t, n) {
        var r;
        return (
          Array.isArray(t.to) &&
          ((null !== (r = e.duration) && void 0 !== r) || (e.duration = 0.8)),
          (function (e) {
            Array.isArray(e.to) &&
              null === e.to[0] &&
              ((e.to = re([], ne(e.to), !1)), (e.to[0] = e.from));
          })(t),
          (function (e) {
            e.when,
              e.delay,
              e.delayChildren,
              e.staggerChildren,
              e.staggerDirection,
              e.repeat,
              e.repeatType,
              e.repeatDelay,
              e.from;
            var t = ee(e, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(t).length;
          })(e) ||
          (e = J(
            J({}, e),
            (function (e, t) {
              var n;
              return (
                (n = ss(t) ? ds : fs[e] || fs.default), J({ to: t }, n(t))
              );
            })(n, t.to)
          )),
          J(J({}, t), Cs(e))
        );
      }
      function Ts(e, t, n, r, a) {
        var i,
          o = Os(r, e),
          s = null !== (i = o.from) && void 0 !== i ? i : t.get(),
          l = os(e, n);
        "none" === s && l && "string" === typeof n
          ? (s = ws(e, n))
          : Ps(s) && "string" === typeof n
            ? (s = js(n))
            : !Array.isArray(n) && Ps(n) && "string" === typeof s && (n = js(s));
        var u = os(e, s);
        return (
          "You are trying to animate "
            .concat(e, ' from "')
            .concat(s, '" to "')
            .concat(n, '". ')
            .concat(
              s,
              " is not an animatable value - to enable this animation set "
            )
            .concat(s, " to a value animatable to ")
            .concat(n, " via the `style` property."),
          u && l && !1 !== o.type
            ? function () {
              var r = {
                from: s,
                to: n,
                velocity: t.getVelocity(),
                onComplete: a,
                onUpdate: function (e) {
                  return t.set(e);
                },
              };
              return "inertia" === o.type || "decay" === o.type
                ? (function (e) {
                  var t,
                    n = e.from,
                    r = void 0 === n ? 0 : n,
                    a = e.velocity,
                    i = void 0 === a ? 0 : a,
                    o = e.min,
                    s = e.max,
                    l = e.power,
                    u = void 0 === l ? 0.8 : l,
                    c = e.timeConstant,
                    d = void 0 === c ? 750 : c,
                    f = e.bounceStiffness,
                    p = void 0 === f ? 500 : f,
                    h = e.bounceDamping,
                    v = void 0 === h ? 10 : h,
                    m = e.restDelta,
                    g = void 0 === m ? 1 : m,
                    y = e.modifyTarget,
                    b = e.driver,
                    x = e.onUpdate,
                    w = e.onComplete,
                    E = e.onStop;
                  function S(e) {
                    return (
                      (void 0 !== o && e < o) || (void 0 !== s && e > s)
                    );
                  }
                  function C(e) {
                    return void 0 === o
                      ? s
                      : void 0 === s || Math.abs(o - e) < Math.abs(s - e)
                        ? o
                        : s;
                  }
                  function k(e) {
                    null === t || void 0 === t || t.stop(),
                      (t = Xo(
                        Object.assign(Object.assign({}, e), {
                          driver: b,
                          onUpdate: function (t) {
                            var n;
                            null === x || void 0 === x || x(t),
                              null === (n = e.onUpdate) ||
                              void 0 === n ||
                              n.call(e, t);
                          },
                          onComplete: w,
                          onStop: E,
                        })
                      ));
                  }
                  function T(e) {
                    k(
                      Object.assign(
                        {
                          type: "spring",
                          stiffness: p,
                          damping: v,
                          restDelta: g,
                        },
                        e
                      )
                    );
                  }
                  if (S(r)) T({ from: r, velocity: i, to: C(r) });
                  else {
                    var P = u * i + r;
                    "undefined" !== typeof y && (P = y(P));
                    var j,
                      O,
                      M = C(P),
                      N = M === o ? -1 : 1;
                    k({
                      type: "decay",
                      from: r,
                      velocity: i,
                      timeConstant: d,
                      power: u,
                      restDelta: g,
                      modifyTarget: y,
                      onUpdate: S(P)
                        ? function (e) {
                          (j = O),
                            (O = e),
                            (i = fi(e - j, be().delta)),
                            ((1 === N && e > M) || (-1 === N && e < M)) &&
                            T({ from: e, to: M, velocity: i });
                        }
                        : void 0,
                    });
                  }
                  return {
                    stop: function () {
                      return null === t || void 0 === t ? void 0 : t.stop();
                    },
                  };
                })(J(J({}, r), o))
                : Xo(
                  J(J({}, ks(o, r, e)), {
                    onUpdate: function (e) {
                      var t;
                      r.onUpdate(e),
                        null === (t = o.onUpdate) ||
                        void 0 === t ||
                        t.call(o, e);
                    },
                    onComplete: function () {
                      var e;
                      r.onComplete(),
                        null === (e = o.onComplete) ||
                        void 0 === e ||
                        e.call(o);
                    },
                  })
                );
            }
            : function () {
              var e,
                r,
                i = Ss(n);
              return (
                t.set(i),
                a(),
                null ===
                (e = null === o || void 0 === o ? void 0 : o.onUpdate) ||
                void 0 === e ||
                e.call(o, i),
                null ===
                (r = null === o || void 0 === o ? void 0 : o.onComplete) ||
                void 0 === r ||
                r.call(o),
                { stop: function () { } }
              );
            }
        );
      }
      function Ps(e) {
        return (
          0 === e ||
          ("string" === typeof e &&
            0 === parseFloat(e) &&
            -1 === e.indexOf(" "))
        );
      }
      function js(e) {
        return "number" === typeof e ? 0 : ws("", e);
      }
      function Os(e, t) {
        return e[t] || e.default || e;
      }
      function Ms(e, t, n, r) {
        return (
          void 0 === r && (r = {}),
          Es && (r = { type: !1 }),
          t.start(function (a) {
            var i,
              o,
              s = Ts(e, t, n, r, a),
              l = (function (e, t) {
                var n, r;
                return null !==
                  (r =
                    null !== (n = (Os(e, t) || {}).delay) && void 0 !== n
                      ? n
                      : e.delay) && void 0 !== r
                  ? r
                  : 0;
              })(r, e),
              u = function () {
                return (o = s());
              };
            return (
              l ? (i = window.setTimeout(u, Zo(l))) : u(),
              function () {
                clearTimeout(i), null === o || void 0 === o || o.stop();
              }
            );
          })
        );
      }
      var Ns = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Ls = Ns.length,
        As = function (e) {
          return "string" === typeof e ? parseFloat(e) : e;
        },
        zs = function (e) {
          return "number" === typeof e || Yi.test(e);
        };
      function _s(e, t) {
        var n;
        return null !== (n = e[t]) && void 0 !== n ? n : e.borderRadius;
      }
      var Rs = Vs(0, 0.5, Ro),
        Ds = Vs(0.5, 0.95, No);
      function Vs(e, t, n) {
        return function (r) {
          return r < e ? 0 : r > t ? 1 : n(ji(e, t, r));
        };
      }
      function Is(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function Fs(e, t) {
        Is(e.x, t.x), Is(e.y, t.y);
      }
      function Bs(e) {
        return void 0 === e || 1 === e;
      }
      function Hs(e) {
        var t = e.scale,
          n = e.scaleX,
          r = e.scaleY;
        return !Bs(t) || !Bs(n) || !Bs(r);
      }
      function Ws(e) {
        return (
          Hs(e) ||
          Us(e.x) ||
          Us(e.y) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY
        );
      }
      function Us(e) {
        return e && "0%" !== e;
      }
      function Gs(e, t, n) {
        return n + t * (e - n);
      }
      function $s(e, t, n, r, a) {
        return void 0 !== a && (e = Gs(e, a, r)), Gs(e, n, r) + t;
      }
      function Ys(e, t, n, r, a) {
        void 0 === t && (t = 0),
          void 0 === n && (n = 1),
          (e.min = $s(e.min, t, n, r, a)),
          (e.max = $s(e.max, t, n, r, a));
      }
      function qs(e, t) {
        var n = t.x,
          r = t.y;
        Ys(e.x, n.translate, n.scale, n.originPoint),
          Ys(e.y, r.translate, r.scale, r.originPoint);
      }
      function Xs(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function Zs(e, t, n) {
        var r = ne(n, 3),
          a = r[0],
          i = r[1],
          o = r[2],
          s = void 0 !== t[o] ? t[o] : 0.5,
          l = di(e.min, e.max, s);
        Ys(e, t[a], t[i], l, t.scale);
      }
      var Qs = ["x", "scaleX", "originX"],
        Ks = ["y", "scaleY", "originY"];
      function Js(e, t) {
        Zs(e.x, t, Qs), Zs(e.y, t, Ks);
      }
      var el = function (e) {
        return e.hasOwnProperty("x") && e.hasOwnProperty("y");
      },
        tl = function (e) {
          return el(e) && e.hasOwnProperty("z");
        },
        nl = function (e, t) {
          return Math.abs(e - t);
        };
      function rl(e, t) {
        if (ho(e) && ho(t)) return nl(e, t);
        if (el(e) && el(t)) {
          var n = nl(e.x, t.x),
            r = nl(e.y, t.y),
            a = tl(e) && tl(t) ? nl(e.z, t.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(a, 2));
        }
      }
      function al(e) {
        return e.max - e.min;
      }
      function il(e, t, n) {
        return (
          void 0 === t && (t = 0), void 0 === n && (n = 0.01), rl(e, t) < n
        );
      }
      function ol(e, t, n, r) {
        void 0 === r && (r = 0.5),
          (e.origin = r),
          (e.originPoint = di(t.min, t.max, e.origin)),
          (e.scale = al(n) / al(t)),
          (il(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = di(n.min, n.max, e.origin) - e.originPoint),
          (il(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function sl(e, t, n, r) {
        ol(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          ol(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function ll(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + al(t));
      }
      function ul(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + al(t));
      }
      function cl(e, t, n) {
        ul(e.x, t.x, n.x), ul(e.y, t.y, n.y);
      }
      function dl(e, t, n, r, a) {
        return (
          (e = Gs((e -= t), 1 / n, r)), void 0 !== a && (e = Gs(e, 1 / a, r)), e
        );
      }
      function fl(e, t, n, r, a) {
        var i = ne(n, 3),
          o = i[0],
          s = i[1],
          l = i[2];
        !(function (e, t, n, r, a, i, o) {
          if (
            (void 0 === t && (t = 0),
              void 0 === n && (n = 1),
              void 0 === r && (r = 0.5),
              void 0 === i && (i = e),
              void 0 === o && (o = e),
              $i.test(t) &&
              ((t = parseFloat(t)), (t = di(o.min, o.max, t / 100) - o.min)),
              "number" === typeof t)
          ) {
            var s = di(i.min, i.max, r);
            e === i && (s -= t),
              (e.min = dl(e.min, t, n, s, a)),
              (e.max = dl(e.max, t, n, s, a));
          }
        })(e, t[o], t[s], t[l], t.scale, r, a);
      }
      var pl = ["x", "scaleX", "originX"],
        hl = ["y", "scaleY", "originY"];
      function vl(e, t, n, r) {
        fl(
          e.x,
          t,
          pl,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          fl(
            e.y,
            t,
            hl,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function ml(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function gl(e) {
        return ml(e.x) && ml(e.y);
      }
      function yl(e, t) {
        return (
          e.x.min === t.x.min &&
          e.x.max === t.x.max &&
          e.y.min === t.y.min &&
          e.y.max === t.y.max
        );
      }
      var bl = (function () {
        function e() {
          this.members = [];
        }
        return (
          (e.prototype.add = function (e) {
            pi(this.members, e), e.scheduleRender();
          }),
          (e.prototype.remove = function (e) {
            if (
              (hi(this.members, e),
                e === this.prevLead && (this.prevLead = void 0),
                e === this.lead)
            ) {
              var t = this.members[this.members.length - 1];
              t && this.promote(t);
            }
          }),
          (e.prototype.relegate = function (e) {
            var t,
              n = this.members.findIndex(function (t) {
                return e === t;
              });
            if (0 === n) return !1;
            for (var r = n; r >= 0; r--) {
              var a = this.members[r];
              if (!1 !== a.isPresent) {
                t = a;
                break;
              }
            }
            return !!t && (this.promote(t), !0);
          }),
          (e.prototype.promote = function (e, t) {
            var n,
              r = this.lead;
            e !== r &&
              ((this.prevLead = r),
                (this.lead = e),
                e.show(),
                r &&
                (r.instance && r.scheduleRender(),
                  e.scheduleRender(),
                  (e.resumeFrom = r),
                  t && (e.resumeFrom.preserveOpacity = !0),
                  r.snapshot &&
                  ((e.snapshot = r.snapshot),
                    (e.snapshot.latestValues =
                      r.animationValues || r.latestValues),
                    (e.snapshot.isShared = !0)),
                  (null === (n = e.root) || void 0 === n
                    ? void 0
                    : n.isUpdating) && (e.isLayoutDirty = !0),
                  !1 === e.options.crossfade && r.hide()));
          }),
          (e.prototype.exitAnimationComplete = function () {
            this.members.forEach(function (e) {
              var t, n, r, a, i;
              null === (n = (t = e.options).onExitComplete) ||
                void 0 === n ||
                n.call(t),
                null ===
                (i =
                  null === (r = e.resumingFrom) || void 0 === r
                    ? void 0
                    : (a = r.options).onExitComplete) ||
                void 0 === i ||
                i.call(a);
            });
          }),
          (e.prototype.scheduleRender = function () {
            this.members.forEach(function (e) {
              e.instance && e.scheduleRender(!1);
            });
          }),
          (e.prototype.removeLeadSnapshot = function () {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
          }),
          e
        );
      })(),
        xl = {};
      function wl(e, t, n) {
        var r = e.x.translate / t.x,
          a = e.y.translate / t.y,
          i = "translate3d(".concat(r, "px, ").concat(a, "px, 0) ");
        if (n) {
          var o = n.rotate,
            s = n.rotateX,
            l = n.rotateY;
          o && (i += "rotate(".concat(o, "deg) ")),
            s && (i += "rotateX(".concat(s, "deg) ")),
            l && (i += "rotateY(".concat(l, "deg) "));
        }
        return "translate3d(0px, 0px, 0) scale(1, 1)" ===
          (i += "scale(".concat(e.x.scale, ", ").concat(e.y.scale, ")"))
          ? "none"
          : i;
      }
      function El(e) {
        return [e("x"), e("y")];
      }
      var Sl = ["", "X", "Y", "Z"],
        Cl = ["transformPerspective", "x", "y", "z"];
      function kl(e, t) {
        return Cl.indexOf(e) - Cl.indexOf(t);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (e) {
        return Sl.forEach(function (t) {
          return Cl.push(e + t);
        });
      });
      var Tl = new Set(Cl);
      function Pl(e) {
        return Tl.has(e);
      }
      var jl = new Set(["originX", "originY", "originZ"]);
      function Ol(e) {
        return jl.has(e);
      }
      var Ml = function (e, t) {
        return e.depth - t.depth;
      },
        Nl = (function () {
          function e() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (e.prototype.add = function (e) {
              pi(this.children, e), (this.isDirty = !0);
            }),
            (e.prototype.remove = function (e) {
              hi(this.children, e), (this.isDirty = !0);
            }),
            (e.prototype.forEach = function (e) {
              this.isDirty && this.children.sort(Ml),
                (this.isDirty = !1),
                this.children.forEach(e);
            }),
            e
          );
        })();
      function Ll(e) {
        var t,
          n = yi(e) ? e.get() : e;
        return (
          (t = n),
          Boolean(t && "object" === typeof t && t.mix && t.toValue)
            ? n.toValue()
            : n
        );
      }
      var Al = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function zl(e) {
        var t = e.attachResizeListener,
          n = e.defaultParent,
          r = e.measureScroll,
          a = e.resetTransform;
        return (function () {
          function e(e, t, r) {
            var a = this;
            void 0 === t && (t = {}),
              void 0 === r && (r = null === n || void 0 === n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                a.isUpdating && ((a.isUpdating = !1), a.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                a.nodes.forEach(Bl), a.nodes.forEach(Hl);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = e),
              (this.latestValues = t),
              (this.root = r ? r.root || r : this),
              (this.path = r ? re(re([], ne(r.path), !1), [r], !1) : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0),
              e && this.root.registerPotentialNode(e, this);
            for (var i = 0; i < this.path.length; i++)
              this.path[i].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Nl());
          }
          return (
            (e.prototype.addEventListener = function (e, t) {
              return (
                this.eventHandlers.has(e) ||
                this.eventHandlers.set(e, new vi()),
                this.eventHandlers.get(e).add(t)
              );
            }),
            (e.prototype.notifyListeners = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = this.eventHandlers.get(e);
              null === r ||
                void 0 === r ||
                r.notify.apply(r, re([], ne(t), !1));
            }),
            (e.prototype.hasListeners = function (e) {
              return this.eventHandlers.has(e);
            }),
            (e.prototype.registerPotentialNode = function (e, t) {
              this.potentialNodes.set(e, t);
            }),
            (e.prototype.mount = function (e, n) {
              var r,
                a = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
                  (this.instance = e);
                var i = this.options,
                  o = i.layoutId,
                  s = i.layout,
                  l = i.visualElement;
                if (
                  (l && !l.getInstance() && l.mount(e),
                    this.root.nodes.add(this),
                    null === (r = this.parent) ||
                    void 0 === r ||
                    r.children.add(this),
                    this.id && this.root.potentialNodes.delete(this.id),
                    n && (s || o) && (this.isLayoutDirty = !0),
                    t)
                ) {
                  var u,
                    c = function () {
                      return (a.root.updateBlockedByResize = !1);
                    };
                  t(e, function () {
                    (a.root.updateBlockedByResize = !0),
                      clearTimeout(u),
                      (u = window.setTimeout(c, 250)),
                      Al.hasAnimatedSinceResize &&
                      ((Al.hasAnimatedSinceResize = !1), a.nodes.forEach(Fl));
                  });
                }
                o && this.root.registerSharedNode(o, this),
                  !1 !== this.options.animate &&
                  l &&
                  (o || s) &&
                  this.addEventListener("didUpdate", function (e) {
                    var t,
                      n,
                      r,
                      i,
                      o,
                      s = e.delta,
                      u = e.hasLayoutChanged,
                      c = e.hasRelativeTargetChanged,
                      d = e.layout;
                    if (a.isTreeAnimationBlocked())
                      return (
                        (a.target = void 0), void (a.relativeTarget = void 0)
                      );
                    var f =
                      null !==
                        (n =
                          null !== (t = a.options.transition) &&
                            void 0 !== t
                            ? t
                            : l.getDefaultTransition()) && void 0 !== n
                        ? n
                        : ql,
                      p = l.getProps(),
                      h = p.onLayoutAnimationStart,
                      v = p.onLayoutAnimationComplete,
                      m = !a.targetLayout || !yl(a.targetLayout, d) || c,
                      g = !u && c;
                    if (
                      (null === (r = a.resumeFrom) || void 0 === r
                        ? void 0
                        : r.instance) ||
                      g ||
                      (u && (m || !a.currentAnimation))
                    ) {
                      a.resumeFrom &&
                        ((a.resumingFrom = a.resumeFrom),
                          (a.resumingFrom.resumingFrom = void 0)),
                        a.setAnimationOrigin(s, g);
                      var y = J(J({}, Os(f, "layout")), {
                        onPlay: h,
                        onComplete: v,
                      });
                      l.shouldReduceMotion && ((y.delay = 0), (y.type = !1)),
                        a.startAnimation(y);
                    } else u || 0 !== a.animationProgress || a.finishAnimation(), a.isLead() && (null === (o = (i = a.options).onExitComplete) || void 0 === o || o.call(i));
                    a.targetLayout = d;
                  });
              }
            }),
            (e.prototype.unmount = function () {
              var e, t;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (e = this.getStack()) ||
                void 0 === e ||
                e.remove(this),
                null === (t = this.parent) ||
                void 0 === t ||
                t.children.delete(this),
                (this.instance = void 0),
                he.preRender(this.updateProjection);
            }),
            (e.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (e.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (e.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (e.prototype.isTreeAnimationBlocked = function () {
              var e;
              return (
                this.isAnimationBlocked ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isTreeAnimationBlocked()) ||
                !1
              );
            }),
            (e.prototype.startUpdate = function () {
              var e;
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                  null === (e = this.nodes) || void 0 === e || e.forEach(Wl));
            }),
            (e.prototype.willUpdate = function (e) {
              var t, n, r;
              if ((void 0 === e && (e = !0), this.root.isUpdateBlocked()))
                null === (n = (t = this.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(t);
              else if (
                (!this.root.isUpdating && this.root.startUpdate(),
                  !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0;
                for (var a = 0; a < this.path.length; a++) {
                  var i = this.path[a];
                  (i.shouldResetTransform = !0), i.updateScroll();
                }
                var o = this.options,
                  s = o.layoutId,
                  l = o.layout;
                if (void 0 !== s || l) {
                  var u =
                    null === (r = this.options.visualElement) || void 0 === r
                      ? void 0
                      : r.getProps().transformTemplate;
                  (this.prevTransformTemplateValue =
                    null === u || void 0 === u
                      ? void 0
                      : u(this.latestValues, "")),
                    this.updateSnapshot(),
                    e && this.notifyListeners("willUpdate");
                }
              }
            }),
            (e.prototype.didUpdate = function () {
              if (this.isUpdateBlocked())
                return (
                  this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  void this.nodes.forEach(Vl)
                );
              this.isUpdating &&
                ((this.isUpdating = !1),
                  this.potentialNodes.size &&
                  (this.potentialNodes.forEach(Xl),
                    this.potentialNodes.clear()),
                  this.nodes.forEach(Il),
                  this.nodes.forEach(_l),
                  this.nodes.forEach(Rl),
                  this.clearAllSnapshots(),
                  ve.update(),
                  ve.preRender(),
                  ve.render());
            }),
            (e.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(Dl), this.sharedNodes.forEach(Ul);
            }),
            (e.prototype.scheduleUpdateProjection = function () {
              xe.preRender(this.updateProjection, !1, !0);
            }),
            (e.prototype.scheduleCheckAfterUnmount = function () {
              var e = this;
              xe.postRender(function () {
                e.isLayoutDirty
                  ? e.root.didUpdate()
                  : e.root.checkUpdateFailed();
              });
            }),
            (e.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var e = this.measure(),
                  t = this.removeTransform(this.removeElementScroll(e));
                Ql(t),
                  (this.snapshot = {
                    measured: e,
                    layout: t,
                    latestValues: {},
                  });
              }
            }),
            (e.prototype.updateLayout = function () {
              var e;
              if (
                this.instance &&
                (this.updateScroll(),
                  (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var t = 0; t < this.path.length; t++) {
                    this.path[t].updateScroll();
                  }
                var n = this.measure();
                Ql(n);
                var r = this.layout;
                (this.layout = {
                  measured: n,
                  actual: this.removeElementScroll(n),
                }),
                  (this.layoutCorrected = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (e = this.options.visualElement) ||
                  void 0 === e ||
                  e.notifyLayoutMeasure(
                    this.layout.actual,
                    null === r || void 0 === r ? void 0 : r.actual
                  );
              }
            }),
            (e.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                (this.scroll = r(this.instance));
            }),
            (e.prototype.resetTransform = function () {
              var e;
              if (a) {
                var t = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !gl(this.projectionDelta),
                  r =
                    null === (e = this.options.visualElement) || void 0 === e
                      ? void 0
                      : e.getProps().transformTemplate,
                  i =
                    null === r || void 0 === r
                      ? void 0
                      : r(this.latestValues, ""),
                  o = i !== this.prevTransformTemplateValue;
                t &&
                  (n || Ws(this.latestValues) || o) &&
                  (a(this.instance, i),
                    (this.shouldResetTransform = !1),
                    this.scheduleRender());
              }
            }),
            (e.prototype.measure = function () {
              var e = this.options.visualElement;
              if (!e) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              var t = e.measureViewportBox(),
                n = this.root.scroll;
              return n && (Xs(t.x, n.x), Xs(t.y, n.y)), t;
            }),
            (e.prototype.removeElementScroll = function (e) {
              var t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Fs(t, e);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  a = r.scroll,
                  i = r.options;
                r !== this.root &&
                  a &&
                  i.layoutScroll &&
                  (Xs(t.x, a.x), Xs(t.y, a.y));
              }
              return t;
            }),
            (e.prototype.applyTransform = function (e, t) {
              void 0 === t && (t = !1);
              var n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Fs(n, e);
              for (var r = 0; r < this.path.length; r++) {
                var a = this.path[r];
                !t &&
                  a.options.layoutScroll &&
                  a.scroll &&
                  a !== a.root &&
                  Js(n, { x: -a.scroll.x, y: -a.scroll.y }),
                  Ws(a.latestValues) && Js(n, a.latestValues);
              }
              return Ws(this.latestValues) && Js(n, this.latestValues), n;
            }),
            (e.prototype.removeTransform = function (e) {
              var t,
                n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Fs(n, e);
              for (var r = 0; r < this.path.length; r++) {
                var a = this.path[r];
                if (a.instance && Ws(a.latestValues)) {
                  Hs(a.latestValues) && a.updateSnapshot();
                  var i = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Fs(i, a.measure()),
                    vl(
                      n,
                      a.latestValues,
                      null === (t = a.snapshot) || void 0 === t
                        ? void 0
                        : t.layout,
                      i
                    );
                }
              }
              return Ws(this.latestValues) && vl(n, this.latestValues), n;
            }),
            (e.prototype.setTargetDelta = function (e) {
              (this.targetDelta = e), this.root.scheduleUpdateProjection();
            }),
            (e.prototype.setOptions = function (e) {
              var t;
              this.options = J(J(J({}, this.options), e), {
                crossfade: null === (t = e.crossfade) || void 0 === t || t,
              });
            }),
            (e.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (e.prototype.resolveTargetDelta = function () {
              var e,
                t,
                n,
                r,
                a = this.options,
                i = a.layout,
                o = a.layoutId;
              this.layout &&
                (i || o) &&
                (this.targetDelta ||
                  this.relativeTarget ||
                  ((this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                      (this.relativeTargetOrigin = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      cl(
                        this.relativeTargetOrigin,
                        this.layout.actual,
                        this.relativeParent.layout.actual
                      ),
                      Fs(this.relativeTarget, this.relativeTargetOrigin))),
                  (this.relativeTarget || this.targetDelta) &&
                  (this.target ||
                    ((this.target = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                      (this.targetWithTransforms = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      })),
                    this.relativeTarget &&
                      this.relativeTargetOrigin &&
                      (null === (e = this.relativeParent) || void 0 === e
                        ? void 0
                        : e.target)
                      ? ((t = this.target),
                        (n = this.relativeTarget),
                        (r = this.relativeParent.target),
                        ll(t.x, n.x, r.x),
                        ll(t.y, n.y, r.y))
                      : this.targetDelta
                        ? (Boolean(this.resumingFrom)
                          ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                          : Fs(this.target, this.layout.actual),
                          qs(this.target, this.targetDelta))
                        : Fs(this.target, this.layout.actual),
                    this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                      (this.relativeParent = this.getClosestProjectingParent()),
                      this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) ===
                      Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                        (this.relativeTargetOrigin = {
                          x: { min: 0, max: 0 },
                          y: { min: 0, max: 0 },
                        }),
                        cl(
                          this.relativeTargetOrigin,
                          this.target,
                          this.relativeParent.target
                        ),
                        Fs(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (e.prototype.getClosestProjectingParent = function () {
              if (this.parent && !Ws(this.parent.latestValues))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (e.prototype.calcProjection = function () {
              var e,
                t = this.options,
                n = t.layout,
                r = t.layoutId;
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (e = this.parent) || void 0 === e
                    ? void 0
                    : e.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
                )),
                  this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                  this.layout && (n || r))
              ) {
                var a = this.getLead();
                Fs(this.layoutCorrected, this.layout.actual),
                  (function (e, t, n, r) {
                    var a, i;
                    void 0 === r && (r = !1);
                    var o = n.length;
                    if (o) {
                      var s, l;
                      t.x = t.y = 1;
                      for (var u = 0; u < o; u++)
                        (l = (s = n[u]).projectionDelta),
                          "contents" !==
                          (null ===
                            (i =
                              null === (a = s.instance) || void 0 === a
                                ? void 0
                                : a.style) || void 0 === i
                            ? void 0
                            : i.display) &&
                          (r &&
                            s.options.layoutScroll &&
                            s.scroll &&
                            s !== s.root &&
                            Js(e, { x: -s.scroll.x, y: -s.scroll.y }),
                            l &&
                            ((t.x *= l.x.scale),
                              (t.y *= l.y.scale),
                              qs(e, l)),
                            r && Ws(s.latestValues) && Js(e, s.latestValues));
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    Boolean(this.resumingFrom) || this !== a
                  );
                var i = a.target;
                if (i) {
                  this.projectionDelta ||
                    ((this.projectionDelta = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }),
                      (this.projectionDeltaWithTransform = {
                        x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                        y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      }));
                  var o = this.treeScale.x,
                    s = this.treeScale.y,
                    l = this.projectionTransform;
                  sl(
                    this.projectionDelta,
                    this.layoutCorrected,
                    i,
                    this.latestValues
                  ),
                    (this.projectionTransform = wl(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform === l &&
                      this.treeScale.x === o &&
                      this.treeScale.y === s) ||
                    ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners("projectionUpdate", i));
                }
              }
            }),
            (e.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (e.prototype.show = function () {
              this.isVisible = !0;
            }),
            (e.prototype.scheduleRender = function (e) {
              var t, n, r;
              void 0 === e && (e = !0),
                null === (n = (t = this.options).scheduleRender) ||
                void 0 === n ||
                n.call(t),
                e &&
                (null === (r = this.getStack()) ||
                  void 0 === r ||
                  r.scheduleRender()),
                this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
            }),
            (e.prototype.setAnimationOrigin = function (e, t) {
              var n,
                r = this;
              void 0 === t && (t = !1);
              var a = this.snapshot,
                i =
                  (null === a || void 0 === a ? void 0 : a.latestValues) || {},
                o = J({}, this.latestValues),
                s = {
                  x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                };
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !t);
              var l = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                u = null === a || void 0 === a ? void 0 : a.isShared,
                c =
                  ((null === (n = this.getStack()) || void 0 === n
                    ? void 0
                    : n.members.length) || 0) <= 1,
                d = Boolean(
                  u &&
                  !c &&
                  !0 === this.options.crossfade &&
                  !this.path.some(Yl)
                );
              (this.animationProgress = 0),
                (this.mixTargetDelta = function (t) {
                  var n,
                    a,
                    f,
                    p,
                    h,
                    v = t / 1e3;
                  Gl(s.x, e.x, v),
                    Gl(s.y, e.y, v),
                    r.setTargetDelta(s),
                    r.relativeTarget &&
                    r.relativeTargetOrigin &&
                    r.layout &&
                    (null === (n = r.relativeParent) || void 0 === n
                      ? void 0
                      : n.layout) &&
                    (cl(l, r.layout.actual, r.relativeParent.layout.actual),
                      (a = r.relativeTarget),
                      (f = r.relativeTargetOrigin),
                      (p = l),
                      (h = v),
                      $l(a.x, f.x, p.x, h),
                      $l(a.y, f.y, p.y, h)),
                    u &&
                    ((r.animationValues = o),
                      (function (e, t, n, r, a, i) {
                        var o, s, l, u;
                        a
                          ? ((e.opacity = di(
                            0,
                            null !== (o = n.opacity) && void 0 !== o ? o : 1,
                            Rs(r)
                          )),
                            (e.opacityExit = di(
                              null !== (s = t.opacity) && void 0 !== s ? s : 1,
                              0,
                              Ds(r)
                            )))
                          : i &&
                          (e.opacity = di(
                            null !== (l = t.opacity) && void 0 !== l ? l : 1,
                            null !== (u = n.opacity) && void 0 !== u ? u : 1,
                            r
                          ));
                        for (var c = 0; c < Ls; c++) {
                          var d = "border".concat(Ns[c], "Radius"),
                            f = _s(t, d),
                            p = _s(n, d);
                          (void 0 === f && void 0 === p) ||
                            (f || (f = 0),
                              p || (p = 0),
                              0 === f || 0 === p || zs(f) === zs(p)
                                ? ((e[d] = Math.max(di(As(f), As(p), r), 0)),
                                  ($i.test(p) || $i.test(f)) && (e[d] += "%"))
                                : (e[d] = p));
                        }
                        (t.rotate || n.rotate) &&
                          (e.rotate = di(t.rotate || 0, n.rotate || 0, r));
                      })(o, i, r.latestValues, v, d, c)),
                    r.root.scheduleUpdateProjection(),
                    r.scheduleRender(),
                    (r.animationProgress = v);
                }),
                this.mixTargetDelta(0);
            }),
            (e.prototype.startAnimation = function (e) {
              var t,
                n,
                r = this;
              this.notifyListeners("animationStart"),
                null === (t = this.currentAnimation) ||
                void 0 === t ||
                t.stop(),
                this.resumingFrom &&
                (null === (n = this.resumingFrom.currentAnimation) ||
                  void 0 === n ||
                  n.stop()),
                this.pendingAnimation &&
                (he.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = xe.update(function () {
                  (Al.hasAnimatedSinceResize = !0),
                    (r.currentAnimation = (function (e, t, n) {
                      void 0 === n && (n = {});
                      var r = yi(e) ? e : gi(e);
                      return (
                        Ms("", r, t, n),
                        {
                          stop: function () {
                            return r.stop();
                          },
                          isAnimating: function () {
                            return r.isAnimating();
                          },
                        }
                      );
                    })(
                      0,
                      1e3,
                      J(J({}, e), {
                        onUpdate: function (t) {
                          var n;
                          r.mixTargetDelta(t),
                            null === (n = e.onUpdate) ||
                            void 0 === n ||
                            n.call(e, t);
                        },
                        onComplete: function () {
                          var t;
                          null === (t = e.onComplete) ||
                            void 0 === t ||
                            t.call(e),
                            r.completeAnimation();
                        },
                      })
                    )),
                    r.resumingFrom &&
                    (r.resumingFrom.currentAnimation = r.currentAnimation),
                    (r.pendingAnimation = void 0);
                }));
            }),
            (e.prototype.completeAnimation = function () {
              var e;
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                  (this.resumingFrom.preserveOpacity = void 0)),
                null === (e = this.getStack()) ||
                void 0 === e ||
                e.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                  void 0),
                this.notifyListeners("animationComplete");
            }),
            (e.prototype.finishAnimation = function () {
              var e;
              this.currentAnimation &&
                (null === (e = this.mixTargetDelta) ||
                  void 0 === e ||
                  e.call(this, 1e3),
                  this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (e.prototype.applyTransformsToTarget = function () {
              var e = this.getLead(),
                t = e.targetWithTransforms,
                n = e.target,
                r = e.layout,
                a = e.latestValues;
              t &&
                n &&
                r &&
                (Fs(t, n),
                  Js(t, a),
                  sl(
                    this.projectionDeltaWithTransform,
                    this.layoutCorrected,
                    t,
                    a
                  ));
            }),
            (e.prototype.registerSharedNode = function (e, t) {
              var n, r, a;
              this.sharedNodes.has(e) || this.sharedNodes.set(e, new bl()),
                this.sharedNodes.get(e).add(t),
                t.promote({
                  transition:
                    null === (n = t.options.initialPromotionConfig) ||
                      void 0 === n
                      ? void 0
                      : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (a =
                        null === (r = t.options.initialPromotionConfig) ||
                          void 0 === r
                          ? void 0
                          : r.shouldPreserveFollowOpacity) || void 0 === a
                      ? void 0
                      : a.call(r, t),
                });
            }),
            (e.prototype.isLead = function () {
              var e = this.getStack();
              return !e || e.lead === this;
            }),
            (e.prototype.getLead = function () {
              var e;
              return (
                (this.options.layoutId &&
                  (null === (e = this.getStack()) || void 0 === e
                    ? void 0
                    : e.lead)) ||
                this
              );
            }),
            (e.prototype.getPrevLead = function () {
              var e;
              return this.options.layoutId
                ? null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.prevLead
                : void 0;
            }),
            (e.prototype.getStack = function () {
              var e = this.options.layoutId;
              if (e) return this.root.sharedNodes.get(e);
            }),
            (e.prototype.promote = function (e) {
              var t = void 0 === e ? {} : e,
                n = t.needsReset,
                r = t.transition,
                a = t.preserveFollowOpacity,
                i = this.getStack();
              i && i.promote(this, a),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r });
            }),
            (e.prototype.relegate = function () {
              var e = this.getStack();
              return !!e && e.relegate(this);
            }),
            (e.prototype.resetRotation = function () {
              var e = this.options.visualElement;
              if (e) {
                for (var t = !1, n = {}, r = 0; r < Sl.length; r++) {
                  var a = "rotate" + Sl[r];
                  e.getStaticValue(a) &&
                    ((t = !0),
                      (n[a] = e.getStaticValue(a)),
                      e.setStaticValue(a, 0));
                }
                if (t) {
                  for (var a in (null === e || void 0 === e || e.syncRender(),
                    n))
                    e.setStaticValue(a, n[a]);
                  e.scheduleRender();
                }
              }
            }),
            (e.prototype.getProjectionStyles = function (e) {
              var t, n, r, a, i, o;
              void 0 === e && (e = {});
              var s = {};
              if (!this.instance || this.isSVG) return s;
              if (!this.isVisible) return { visibility: "hidden" };
              s.visibility = "";
              var l =
                null === (t = this.options.visualElement) || void 0 === t
                  ? void 0
                  : t.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ""),
                  (s.pointerEvents = Ll(e.pointerEvents) || ""),
                  (s.transform = l ? l(this.latestValues, "") : "none"),
                  s
                );
              var u = this.getLead();
              if (!this.projectionDelta || !this.layout || !u.target) {
                var c = {};
                return (
                  this.options.layoutId &&
                  ((c.opacity =
                    null !== (n = this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1),
                    (c.pointerEvents = Ll(e.pointerEvents) || "")),
                  this.hasProjected &&
                  !Ws(this.latestValues) &&
                  ((c.transform = l ? l({}, "") : "none"),
                    (this.hasProjected = !1)),
                  c
                );
              }
              var d = u.animationValues || u.latestValues;
              this.applyTransformsToTarget(),
                (s.transform = wl(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  d
                )),
                l && (s.transform = l(d, s.transform));
              var f = this.projectionDelta,
                p = f.x,
                h = f.y;
              for (var v in ((s.transformOrigin = ""
                .concat(100 * p.origin, "% ")
                .concat(100 * h.origin, "% 0")),
                u.animationValues
                  ? (s.opacity =
                    u === this
                      ? null !==
                        (a =
                          null !== (r = d.opacity) && void 0 !== r
                            ? r
                            : this.latestValues.opacity) && void 0 !== a
                        ? a
                        : 1
                      : this.preserveOpacity
                        ? this.latestValues.opacity
                        : d.opacityExit)
                  : (s.opacity =
                    u === this
                      ? null !== (i = d.opacity) && void 0 !== i
                        ? i
                        : ""
                      : null !== (o = d.opacityExit) && void 0 !== o
                        ? o
                        : 0),
                xl))
                if (void 0 !== d[v]) {
                  var m = xl[v],
                    g = m.correct,
                    y = m.applyTo,
                    b = g(d[v], u);
                  if (y) for (var x = y.length, w = 0; w < x; w++) s[y[w]] = b;
                  else s[v] = b;
                }
              return (
                this.options.layoutId &&
                (s.pointerEvents =
                  u === this ? Ll(e.pointerEvents) || "" : "none"),
                s
              );
            }),
            (e.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (e.prototype.resetTree = function () {
              this.root.nodes.forEach(function (e) {
                var t;
                return null === (t = e.currentAnimation) || void 0 === t
                  ? void 0
                  : t.stop();
              }),
                this.root.nodes.forEach(Vl),
                this.root.sharedNodes.clear();
            }),
            e
          );
        })();
      }
      function _l(e) {
        e.updateLayout();
      }
      function Rl(e) {
        var t,
          n,
          r,
          a,
          i =
            null !==
              (n =
                null === (t = e.resumeFrom) || void 0 === t
                  ? void 0
                  : t.snapshot) && void 0 !== n
              ? n
              : e.snapshot;
        if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
          var o = e.layout,
            s = o.actual,
            l = o.measured;
          "size" === e.options.animationType
            ? El(function (e) {
              var t = i.isShared ? i.measured[e] : i.layout[e],
                n = al(t);
              (t.min = s[e].min), (t.max = t.min + n);
            })
            : "position" === e.options.animationType &&
            El(function (e) {
              var t = i.isShared ? i.measured[e] : i.layout[e],
                n = al(s[e]);
              t.max = t.min + n;
            });
          var u = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          sl(u, s, i.layout);
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          i.isShared
            ? sl(c, e.applyTransform(l, !0), i.measured)
            : sl(c, s, i.layout);
          var d = !gl(u),
            f = !1;
          if (
            !e.resumeFrom &&
            ((e.relativeParent = e.getClosestProjectingParent()),
              e.relativeParent && !e.relativeParent.resumeFrom)
          ) {
            var p = e.relativeParent,
              h = p.snapshot,
              v = p.layout;
            if (h && v) {
              var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              cl(m, i.layout, h.layout);
              var g = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              cl(g, s, v.actual), yl(m, g) || (f = !0);
            }
          }
          e.notifyListeners("didUpdate", {
            layout: s,
            snapshot: i,
            delta: c,
            layoutDelta: u,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: f,
          });
        } else
          e.isLead() &&
            (null === (a = (r = e.options).onExitComplete) ||
              void 0 === a ||
              a.call(r));
        e.options.transition = void 0;
      }
      function Dl(e) {
        e.clearSnapshot();
      }
      function Vl(e) {
        e.clearMeasurements();
      }
      function Il(e) {
        var t = e.options.visualElement;
        (null === t || void 0 === t
          ? void 0
          : t.getProps().onBeforeLayoutMeasure) &&
          t.notifyBeforeLayoutMeasure(),
          e.resetTransform();
      }
      function Fl(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0);
      }
      function Bl(e) {
        e.resolveTargetDelta();
      }
      function Hl(e) {
        e.calcProjection();
      }
      function Wl(e) {
        e.resetRotation();
      }
      function Ul(e) {
        e.removeLeadSnapshot();
      }
      function Gl(e, t, n) {
        (e.translate = di(t.translate, 0, n)),
          (e.scale = di(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function $l(e, t, n, r) {
        (e.min = di(t.min, n.min, r)), (e.max = di(t.max, n.max, r));
      }
      function Yl(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      var ql = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function Xl(e, t) {
        for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
          if (Boolean(e.path[r].instance)) {
            n = e.path[r];
            break;
          }
        var a = (n && n !== e.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(t, '"]')
        );
        a && e.mount(a, !0);
      }
      function Zl(e) {
        (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
      }
      function Ql(e) {
        Zl(e.x), Zl(e.y);
      }
      var Kl = 1;
      var Jl = (0, t.createContext)({});
      var eu = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          K(t, e),
          (t.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null;
          }),
          (t.prototype.componentDidUpdate = function () { }),
          (t.prototype.updateProps = function () {
            var e = this.props,
              t = e.visualElement,
              n = e.props;
            t && t.setProps(n);
          }),
          (t.prototype.render = function () {
            return this.props.children;
          }),
          t
        );
      })(t.Component);
      function tu(e) {
        var n = e.preloadedFeatures,
          r = e.createVisualElement,
          a = e.projectionNodeConstructor,
          i = e.useRender,
          o = e.useVisualState,
          s = e.Component;
        return (
          n &&
          (function (e) {
            for (var t in e)
              null !== e[t] &&
                ("projectionNodeConstructor" === t
                  ? ($a.projectionNodeConstructor = e[t])
                  : ($a[t].Component = e[t]));
          })(n),
          (0, t.forwardRef)(function (e, n) {
            var l = (function (e) {
              var n,
                r = e.layoutId,
                a =
                  null === (n = (0, t.useContext)(Ne)) || void 0 === n
                    ? void 0
                    : n.id;
              return a && void 0 !== r ? a + "-" + r : r;
            })(e);
            e = J(J({}, e), { layoutId: l });
            var u = (0, t.useContext)(Za),
              c = null,
              d = ui(e),
              f = u.isStatic
                ? void 0
                : ke(function () {
                  if (Al.hasEverUpdated) return Kl++;
                }),
              p = o(e, u.isStatic);
            return (
              !u.isStatic &&
              we &&
              ((d.visualElement = ti(s, p, J(J({}, u), e), r)),
                (function (e, n, r, a) {
                  var i,
                    o = n.layoutId,
                    s = n.layout,
                    l = n.drag,
                    u = n.dragConstraints,
                    c = n.layoutScroll,
                    d = (0, t.useContext)(Jl);
                  a &&
                    r &&
                    !(null === r || void 0 === r ? void 0 : r.projection) &&
                    ((r.projection = new a(
                      e,
                      r.getLatestValues(),
                      null === (i = r.parent) || void 0 === i
                        ? void 0
                        : i.projection
                    )),
                      r.projection.setOptions({
                        layoutId: o,
                        layout: s,
                        alwaysMeasureLayout: Boolean(l) || (u && ni(u)),
                        visualElement: r,
                        scheduleRender: function () {
                          return r.scheduleRender();
                        },
                        animationType: "string" === typeof s ? s : "both",
                        initialPromotionConfig: d,
                        layoutScroll: c,
                      }));
                })(f, e, d.visualElement, a || $a.projectionNodeConstructor),
                (c = (function (e, n, r) {
                  var a = [];
                  if (((0, t.useContext)(Ya), !n)) return null;
                  for (var i = 0; i < Xa; i++) {
                    var o = qa[i],
                      s = $a[o],
                      l = s.isEnabled,
                      u = s.Component;
                    l(e) &&
                      u &&
                      a.push(
                        t.createElement(
                          u,
                          J({ key: o }, e, { visualElement: n })
                        )
                      );
                  }
                  return a;
                })(e, d.visualElement))),
              t.createElement(
                eu,
                { visualElement: d.visualElement, props: J(J({}, u), e) },
                c,
                t.createElement(
                  Qa.Provider,
                  { value: d },
                  i(
                    s,
                    e,
                    f,
                    (function (e, n, r) {
                      return (0, t.useCallback)(
                        function (t) {
                          var a;
                          t &&
                            (null === (a = e.mount) ||
                              void 0 === a ||
                              a.call(e, t)),
                            n && (t ? n.mount(t) : n.unmount()),
                            r &&
                            ("function" === typeof r
                              ? r(t)
                              : ni(r) && (r.current = t));
                        },
                        [n]
                      );
                    })(p, d.visualElement, n),
                    p,
                    u.isStatic,
                    d.visualElement
                  )
                )
              )
            );
          })
        );
      }
      function nu(e) {
        function t(t, n) {
          return void 0 === n && (n = {}), tu(e(t, n));
        }
        if ("undefined" === typeof Proxy) return t;
        var n = new Map();
        return new Proxy(t, {
          get: function (e, r) {
            return n.has(r) || n.set(r, t(r)), n.get(r);
          },
        });
      }
      var ru = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function au(e) {
        return (
          "string" === typeof e &&
          !e.includes("-") &&
          !!(ru.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      function iu(e, t) {
        var n = t.layout,
          r = t.layoutId;
        return (
          Pl(e) ||
          Ol(e) ||
          ((n || void 0 !== r) && (!!xl[e] || "opacity" === e))
        );
      }
      var ou = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      };
      function su(e) {
        return e.startsWith("--");
      }
      var lu = function (e, t) {
        return t && "number" === typeof e ? t.transform(e) : e;
      };
      function uu(e, t, n, r) {
        var a,
          i = e.style,
          o = e.vars,
          s = e.transform,
          l = e.transformKeys,
          u = e.transformOrigin;
        l.length = 0;
        var c = !1,
          d = !1,
          f = !0;
        for (var p in t) {
          var h = t[p];
          if (su(p)) o[p] = h;
          else {
            var v = ys[p],
              m = lu(h, v);
            if (Pl(p)) {
              if (((c = !0), (s[p] = m), l.push(p), !f)) continue;
              h !== (null !== (a = v.default) && void 0 !== a ? a : 0) &&
                (f = !1);
            } else Ol(p) ? ((u[p] = m), (d = !0)) : (i[p] = m);
          }
        }
        c
          ? (i.transform = (function (e, t, n, r) {
            var a = e.transform,
              i = e.transformKeys,
              o = t.enableHardwareAcceleration,
              s = void 0 === o || o,
              l = t.allowTransformNone,
              u = void 0 === l || l,
              c = "";
            i.sort(kl);
            for (var d = !1, f = i.length, p = 0; p < f; p++) {
              var h = i[p];
              (c += "".concat(ou[h] || h, "(").concat(a[h], ") ")),
                "z" === h && (d = !0);
            }
            return (
              !d && s ? (c += "translateZ(0)") : (c = c.trim()),
              r ? (c = r(a, n ? "" : c)) : u && n && (c = "none"),
              c
            );
          })(e, n, f, r))
          : r
            ? (i.transform = r({}, ""))
            : !t.transform && i.transform && (i.transform = "none"),
          d &&
          (i.transformOrigin = (function (e) {
            var t = e.originX,
              n = void 0 === t ? "50%" : t,
              r = e.originY,
              a = void 0 === r ? "50%" : r,
              i = e.originZ,
              o = void 0 === i ? 0 : i;
            return "".concat(n, " ").concat(a, " ").concat(o);
          })(u));
      }
      var cu = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function du(e, t, n) {
        for (var r in t) yi(t[r]) || iu(r, n) || (e[r] = t[r]);
      }
      function fu(e, n, r) {
        var a = {};
        return (
          du(a, e.style || {}, e),
          Object.assign(
            a,
            (function (e, n, r) {
              var a = e.transformTemplate;
              return (0, t.useMemo)(
                function () {
                  var e = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  uu(e, n, { enableHardwareAcceleration: !r }, a);
                  var t = e.style;
                  return J(J({}, e.vars), t);
                },
                [n]
              );
            })(e, n, r)
          ),
          e.transformValues && (a = e.transformValues(a)),
          a
        );
      }
      function pu(e, t, n) {
        var r = {},
          a = fu(e, t, n);
        return (
          Boolean(e.drag) &&
          !1 !== e.dragListener &&
          ((r.draggable = !1),
            (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
            (a.touchAction =
              !0 === e.drag
                ? "none"
                : "pan-".concat("x" === e.drag ? "y" : "x"))),
          (r.style = a),
          r
        );
      }
      var hu = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll",
      ]);
      function vu(e) {
        return hu.has(e);
      }
      var mu,
        gu = function (e) {
          return !vu(e);
        };
      try {
        (mu = require("@emotion/is-prop-valid").default) &&
          (gu = function (e) {
            return e.startsWith("on") ? !vu(e) : mu(e);
          });
      } catch ($p) { }
      function yu(e, t, n) {
        return "string" === typeof e ? e : Yi.transform(t + n * e);
      }
      var bu = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        xu = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function wu(e, t, n, r) {
        var a = t.attrX,
          i = t.attrY,
          o = t.originX,
          s = t.originY,
          l = t.pathLength,
          u = t.pathSpacing,
          c = void 0 === u ? 1 : u,
          d = t.pathOffset,
          f = void 0 === d ? 0 : d;
        uu(
          e,
          ee(t, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          r
        ),
          (e.attrs = e.style),
          (e.style = {});
        var p = e.attrs,
          h = e.style,
          v = e.dimensions;
        p.transform && (v && (h.transform = p.transform), delete p.transform),
          v &&
          (void 0 !== o || void 0 !== s || h.transform) &&
          (h.transformOrigin = (function (e, t, n) {
            var r = yu(t, e.x, e.width),
              a = yu(n, e.y, e.height);
            return "".concat(r, " ").concat(a);
          })(v, void 0 !== o ? o : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== a && (p.x = a),
          void 0 !== i && (p.y = i),
          void 0 !== l &&
          (function (e, t, n, r, a) {
            void 0 === n && (n = 1),
              void 0 === r && (r = 0),
              void 0 === a && (a = !0),
              (e.pathLength = 1);
            var i = a ? bu : xu;
            e[i.offset] = Yi.transform(-r);
            var o = Yi.transform(t),
              s = Yi.transform(n);
            e[i.array] = "".concat(o, " ").concat(s);
          })(p, l, c, f, !1);
      }
      var Eu = function () {
        return J(
          J(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function Su(e, n) {
        var r = (0, t.useMemo)(
          function () {
            var t = Eu();
            return (
              wu(t, n, { enableHardwareAcceleration: !1 }, e.transformTemplate),
              J(J({}, t.attrs), { style: J({}, t.style) })
            );
          },
          [n]
        );
        if (e.style) {
          var a = {};
          du(a, e.style, e), (r.style = J(J({}, a), r.style));
        }
        return r;
      }
      function Cu(e) {
        void 0 === e && (e = !1);
        return function (n, r, a, i, o, s) {
          var l = o.latestValues,
            u = (au(n) ? Su : pu)(r, l, s),
            c = (function (e, t, n) {
              var r = {};
              for (var a in e)
                (gu(a) ||
                  (!0 === n && vu(a)) ||
                  (!t && !vu(a)) ||
                  (e.draggable && a.startsWith("onDrag"))) &&
                  (r[a] = e[a]);
              return r;
            })(r, "string" === typeof n, e),
            d = J(J(J({}, c), u), { ref: i });
          return a && (d["data-projection-id"] = a), (0, t.createElement)(n, d);
        };
      }
      var ku = /([a-z])([A-Z])/g,
        Tu = function (e) {
          return e.replace(ku, "$1-$2").toLowerCase();
        };
      function Pu(e, t, n, r) {
        var a = t.style,
          i = t.vars;
        for (var o in (Object.assign(e.style, a, r && r.getProjectionStyles(n)),
          i))
          e.style.setProperty(o, i[o]);
      }
      var ju = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
      ]);
      function Ou(e, t) {
        for (var n in (Pu(e, t), t.attrs))
          e.setAttribute(ju.has(n) ? n : Tu(n), t.attrs[n]);
      }
      function Mu(e) {
        var t = e.style,
          n = {};
        for (var r in t) (yi(t[r]) || iu(r, e)) && (n[r] = t[r]);
        return n;
      }
      function Nu(e) {
        var t = Mu(e);
        for (var n in e) {
          if (yi(e[n]))
            t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n];
        }
        return t;
      }
      function Lu(e) {
        return "object" === typeof e && "function" === typeof e.start;
      }
      function Au(e, t, n, r) {
        var a = e.scrapeMotionValuesFromProps,
          i = e.createRenderState,
          o = e.onMount,
          s = { latestValues: _u(t, n, r, a), renderState: i() };
        return (
          o &&
          (s.mount = function (e) {
            return o(t, e, s);
          }),
          s
        );
      }
      var zu = function (e) {
        return function (n, r) {
          var a = (0, t.useContext)(Qa),
            i = (0, t.useContext)(Ce);
          return r
            ? Au(e, n, a, i)
            : ke(function () {
              return Au(e, n, a, i);
            });
        };
      };
      function _u(e, t, n, r) {
        var a = {},
          i = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          o = r(e);
        for (var s in o) a[s] = Ll(o[s]);
        var l = e.initial,
          u = e.animate,
          c = si(e),
          d = li(e);
        t &&
          d &&
          !c &&
          !1 !== e.inherit &&
          ((null !== l && void 0 !== l) || (l = t.initial),
            (null !== u && void 0 !== u) || (u = t.animate));
        var f = i || !1 === l,
          p = f ? u : l;
        p &&
          "boolean" !== typeof p &&
          !Lu(p) &&
          (Array.isArray(p) ? p : [p]).forEach(function (t) {
            var n = ii(e, t);
            if (n) {
              var r = n.transitionEnd;
              n.transition;
              var i = ee(n, ["transitionEnd", "transition"]);
              for (var o in i) {
                var s = i[o];
                if (Array.isArray(s)) s = s[f ? s.length - 1 : 0];
                null !== s && (a[o] = s);
              }
              for (var o in r) a[o] = r[o];
            }
          });
        return a;
      }
      var Ru,
        Du = {
          useVisualState: zu({
            scrapeMotionValuesFromProps: Nu,
            createRenderState: Eu,
            onMount: function (e, t, n) {
              var r = n.renderState,
                a = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (Gp) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              wu(r, a, { enableHardwareAcceleration: !1 }, e.transformTemplate),
                Ou(t, r);
            },
          }),
        },
        Vu = {
          useVisualState: zu({
            scrapeMotionValuesFromProps: Mu,
            createRenderState: cu,
          }),
        };
      function Iu(e, t, n, r) {
        return (
          e.addEventListener(t, n, r),
          function () {
            return e.removeEventListener(t, n, r);
          }
        );
      }
      function Fu(e, n, r, a) {
        (0, t.useEffect)(
          function () {
            var t = e.current;
            if (r && t) return Iu(t, n, r, a);
          },
          [e, n, r, a]
        );
      }
      function Bu(e) {
        return "undefined" !== typeof PointerEvent && e instanceof PointerEvent
          ? !("mouse" !== e.pointerType)
          : e instanceof MouseEvent;
      }
      function Hu(e) {
        return !!e.touches;
      }
      !(function (e) {
        (e.Animate = "animate"),
          (e.Hover = "whileHover"),
          (e.Tap = "whileTap"),
          (e.Drag = "whileDrag"),
          (e.Focus = "whileFocus"),
          (e.InView = "whileInView"),
          (e.Exit = "exit");
      })(Ru || (Ru = {}));
      var Wu = { pageX: 0, pageY: 0 };
      function Uu(e, t) {
        void 0 === t && (t = "page");
        var n = e.touches[0] || e.changedTouches[0] || Wu;
        return { x: n[t + "X"], y: n[t + "Y"] };
      }
      function Gu(e, t) {
        return void 0 === t && (t = "page"), { x: e[t + "X"], y: e[t + "Y"] };
      }
      function $u(e, t) {
        return (
          void 0 === t && (t = "page"), { point: Hu(e) ? Uu(e, t) : Gu(e, t) }
        );
      }
      var Yu = function (e, t) {
        void 0 === t && (t = !1);
        var n,
          r = function (t) {
            return e(t, $u(t));
          };
        return t
          ? ((n = r),
            function (e) {
              var t = e instanceof MouseEvent;
              (!t || (t && 0 === e.button)) && n(e);
            })
          : r;
      },
        qu = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        Xu = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function Zu(e) {
        return we && null === window.onpointerdown
          ? e
          : we && null === window.ontouchstart
            ? Xu[e]
            : we && null === window.onmousedown
              ? qu[e]
              : e;
      }
      function Qu(e, t, n, r) {
        return Iu(e, Zu(t), Yu(n, "pointerdown" === t), r);
      }
      function Ku(e, t, n, r) {
        return Fu(e, Zu(t), n && Yu(n, "pointerdown" === t), r);
      }
      function Ju(e) {
        var t = null;
        return function () {
          return (
            null === t &&
            ((t = e),
              function () {
                t = null;
              })
          );
        };
      }
      var ec = Ju("dragHorizontal"),
        tc = Ju("dragVertical");
      function nc(e) {
        var t = !1;
        if ("y" === e) t = tc();
        else if ("x" === e) t = ec();
        else {
          var n = ec(),
            r = tc();
          n && r
            ? (t = function () {
              n(), r();
            })
            : (n && n(), r && r());
        }
        return t;
      }
      function rc() {
        var e = nc(!0);
        return !e || (e(), !1);
      }
      function ac(e, t, n) {
        return function (r, a) {
          var i;
          Bu(r) &&
            !rc() &&
            (null === (i = e.animationState) ||
              void 0 === i ||
              i.setActive(Ru.Hover, t),
              null === n || void 0 === n || n(r, a));
        };
      }
      var ic = function e(t, n) {
        return !!n && (t === n || e(t, n.parentElement));
      };
      var oc = new WeakMap(),
        sc = new WeakMap(),
        lc = function (e) {
          var t;
          null === (t = oc.get(e.target)) || void 0 === t || t(e);
        },
        uc = function (e) {
          e.forEach(lc);
        };
      function cc(e, t, n) {
        var r = (function (e) {
          var t = e.root,
            n = ee(e, ["root"]),
            r = t || document;
          sc.has(r) || sc.set(r, {});
          var a = sc.get(r),
            i = JSON.stringify(n);
          return (
            a[i] || (a[i] = new IntersectionObserver(uc, J({ root: t }, n))),
            a[i]
          );
        })(t);
        return (
          oc.set(e, n),
          r.observe(e),
          function () {
            oc.delete(e), r.unobserve(e);
          }
        );
      }
      var dc = { some: 0, all: 1 };
      function fc(e, n, r, a) {
        var i = a.root,
          o = a.margin,
          s = a.amount,
          l = void 0 === s ? "some" : s,
          u = a.once;
        (0, t.useEffect)(
          function () {
            if (e) {
              var t = {
                root: null === i || void 0 === i ? void 0 : i.current,
                rootMargin: o,
                threshold: "number" === typeof l ? l : dc[l],
              };
              return cc(r.getInstance(), t, function (e) {
                var t,
                  a = e.isIntersecting;
                if (
                  n.isInView !== a &&
                  ((n.isInView = a), !u || a || !n.hasEnteredView)
                ) {
                  a && (n.hasEnteredView = !0),
                    null === (t = r.animationState) ||
                    void 0 === t ||
                    t.setActive(Ru.InView, a);
                  var i = r.getProps(),
                    o = a ? i.onViewportEnter : i.onViewportLeave;
                  null === o || void 0 === o || o(e);
                }
              });
            }
          },
          [e, i, o, l]
        );
      }
      function pc(e, n, r, a) {
        var i = a.fallback,
          o = void 0 === i || i;
        (0, t.useEffect)(
          function () {
            e &&
              o &&
              requestAnimationFrame(function () {
                var e;
                n.hasEnteredView = !0;
                var t = r.getProps().onViewportEnter;
                null === t || void 0 === t || t(null),
                  null === (e = r.animationState) ||
                  void 0 === e ||
                  e.setActive(Ru.InView, !0);
              });
          },
          [e]
        );
      }
      var hc = function (e) {
        return function (t) {
          return e(t), null;
        };
      },
        vc = {
          inView: hc(function (e) {
            var n = e.visualElement,
              r = e.whileInView,
              a = e.onViewportEnter,
              i = e.onViewportLeave,
              o = e.viewport,
              s = void 0 === o ? {} : o,
              l = (0, t.useRef)({ hasEnteredView: !1, isInView: !1 }),
              u = Boolean(r || a || i);
            s.once && l.current.hasEnteredView && (u = !1),
              ("undefined" === typeof IntersectionObserver ? pc : fc)(
                u,
                l.current,
                n,
                s
              );
          }),
          tap: hc(function (e) {
            var n = e.onTap,
              r = e.onTapStart,
              a = e.onTapCancel,
              i = e.whileTap,
              o = e.visualElement,
              s = n || r || a || i,
              l = (0, t.useRef)(!1),
              u = (0, t.useRef)(null);
            function c() {
              var e;
              null === (e = u.current) || void 0 === e || e.call(u),
                (u.current = null);
            }
            function d() {
              var e;
              return (
                c(),
                (l.current = !1),
                null === (e = o.animationState) ||
                void 0 === e ||
                e.setActive(Ru.Tap, !1),
                !rc()
              );
            }
            function f(e, t) {
              d() &&
                (ic(o.getInstance(), e.target)
                  ? null === n || void 0 === n || n(e, t)
                  : null === a || void 0 === a || a(e, t));
            }
            function p(e, t) {
              d() && (null === a || void 0 === a || a(e, t));
            }
            Ku(
              o,
              "pointerdown",
              s
                ? function (e, t) {
                  var n;
                  c(),
                    l.current ||
                    ((l.current = !0),
                      (u.current = mo(
                        Qu(window, "pointerup", f),
                        Qu(window, "pointercancel", p)
                      )),
                      null === (n = o.animationState) ||
                      void 0 === n ||
                      n.setActive(Ru.Tap, !0),
                      null === r || void 0 === r || r(e, t));
                }
                : void 0
            ),
              Le(c);
          }),
          focus: hc(function (e) {
            var t = e.whileFocus,
              n = e.visualElement;
            Fu(
              n,
              "focus",
              t
                ? function () {
                  var e;
                  null === (e = n.animationState) ||
                    void 0 === e ||
                    e.setActive(Ru.Focus, !0);
                }
                : void 0
            ),
              Fu(
                n,
                "blur",
                t
                  ? function () {
                    var e;
                    null === (e = n.animationState) ||
                      void 0 === e ||
                      e.setActive(Ru.Focus, !1);
                  }
                  : void 0
              );
          }),
          hover: hc(function (e) {
            var t = e.onHoverStart,
              n = e.onHoverEnd,
              r = e.whileHover,
              a = e.visualElement;
            Ku(a, "pointerenter", t || r ? ac(a, !0, t) : void 0),
              Ku(a, "pointerleave", n || r ? ac(a, !1, n) : void 0);
          }),
        };
      function mc() {
        var e = (0, t.useContext)(Ce);
        if (null === e) return [!0, null];
        var n = e.isPresent,
          r = e.onExitComplete,
          a = e.register,
          i = je();
        (0, t.useEffect)(function () {
          return a(i);
        }, []);
        return !n && r
          ? [
            !1,
            function () {
              return null === r || void 0 === r ? void 0 : r(i);
            },
          ]
          : [!0];
      }
      function gc(e, t) {
        if (!Array.isArray(t)) return !1;
        var n = t.length;
        if (n !== e.length) return !1;
        for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      var yc = function (e) {
        return /^0[^.\s]+$/.test(e);
      },
        bc = function (e) {
          return function (t) {
            return t.test(e);
          };
        },
        xc = [
          _i,
          Yi,
          $i,
          Gi,
          Xi,
          qi,
          {
            test: function (e) {
              return "auto" === e;
            },
            parse: function (e) {
              return e;
            },
          },
        ],
        wc = function (e) {
          return xc.find(bc(e));
        },
        Ec = re(re([], ne(xc), !1), [io, po], !1),
        Sc = function (e) {
          return Ec.find(bc(e));
        };
      function Cc(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, gi(n));
      }
      function kc(e, t) {
        var n = oi(e, t),
          r = n ? e.makeTargetAnimatable(n, !1) : {},
          a = r.transitionEnd,
          i = void 0 === a ? {} : a;
        r.transition;
        var o = ee(r, ["transitionEnd", "transition"]);
        for (var s in (o = J(J({}, o), i))) {
          Cc(e, s, Ss(o[s]));
        }
      }
      function Tc(e, t) {
        if (t) return (t[e] || t.default || t).from;
      }
      function Pc(e, t, n) {
        var r;
        void 0 === n && (n = {});
        var a = oi(e, t, n.custom),
          i = (a || {}).transition,
          o = void 0 === i ? e.getDefaultTransition() || {} : i;
        n.transitionOverride && (o = n.transitionOverride);
        var s = a
          ? function () {
            return jc(e, a, n);
          }
          : function () {
            return Promise.resolve();
          },
          l = (
            null === (r = e.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? function (r) {
              void 0 === r && (r = 0);
              var a = o.delayChildren,
                i = void 0 === a ? 0 : a,
                s = o.staggerChildren,
                l = o.staggerDirection;
              return (function (e, t, n, r, a, i) {
                void 0 === n && (n = 0);
                void 0 === r && (r = 0);
                void 0 === a && (a = 1);
                var o = [],
                  s = (e.variantChildren.size - 1) * r,
                  l =
                    1 === a
                      ? function (e) {
                        return void 0 === e && (e = 0), e * r;
                      }
                      : function (e) {
                        return void 0 === e && (e = 0), s - e * r;
                      };
                return (
                  Array.from(e.variantChildren)
                    .sort(Oc)
                    .forEach(function (e, r) {
                      o.push(
                        Pc(e, t, J(J({}, i), { delay: n + l(r) })).then(
                          function () {
                            return e.notifyAnimationComplete(t);
                          }
                        )
                      );
                    }),
                  Promise.all(o)
                );
              })(e, t, i + r, s, l, n);
            }
            : function () {
              return Promise.resolve();
            },
          u = o.when;
        if (u) {
          var c = ne("beforeChildren" === u ? [s, l] : [l, s], 2),
            d = c[0],
            f = c[1];
          return d().then(f);
        }
        return Promise.all([s(), l(n.delay)]);
      }
      function jc(e, t, n) {
        var r,
          a = void 0 === n ? {} : n,
          i = a.delay,
          o = void 0 === i ? 0 : i,
          s = a.transitionOverride,
          l = a.type,
          u = e.makeTargetAnimatable(t),
          c = u.transition,
          d = void 0 === c ? e.getDefaultTransition() : c,
          f = u.transitionEnd,
          p = ee(u, ["transition", "transitionEnd"]);
        s && (d = s);
        var h = [],
          v =
            l &&
            (null === (r = e.animationState) || void 0 === r
              ? void 0
              : r.getState()[l]);
        for (var m in p) {
          var g = e.getValue(m),
            y = p[m];
          if (!(!g || void 0 === y || (v && Mc(v, m)))) {
            var b = J({ delay: o }, d);
            e.shouldReduceMotion &&
              Pl(m) &&
              (b = J(J({}, b), { type: !1, delay: 0 }));
            var x = Ms(m, g, y, b);
            h.push(x);
          }
        }
        return Promise.all(h).then(function () {
          f && kc(e, f);
        });
      }
      function Oc(e, t) {
        return e.sortNodePosition(t);
      }
      function Mc(e, t) {
        var n = e.protectedKeys,
          r = e.needsAnimating,
          a = n.hasOwnProperty(t) && !0 !== r[t];
        return (r[t] = !1), a;
      }
      var Nc = [
        Ru.Animate,
        Ru.InView,
        Ru.Focus,
        Ru.Hover,
        Ru.Tap,
        Ru.Drag,
        Ru.Exit,
      ],
        Lc = re([], ne(Nc), !1).reverse(),
        Ac = Nc.length;
      function zc(e) {
        return function (t) {
          return Promise.all(
            t.map(function (t) {
              var n = t.animation,
                r = t.options;
              return (function (e, t, n) {
                var r;
                if (
                  (void 0 === n && (n = {}),
                    e.notifyAnimationStart(t),
                    Array.isArray(t))
                ) {
                  var a = t.map(function (t) {
                    return Pc(e, t, n);
                  });
                  r = Promise.all(a);
                } else if ("string" === typeof t) r = Pc(e, t, n);
                else {
                  var i = "function" === typeof t ? oi(e, t, n.custom) : t;
                  r = jc(e, i, n);
                }
                return r.then(function () {
                  return e.notifyAnimationComplete(t);
                });
              })(e, n, r);
            })
          );
        };
      }
      function _c(e) {
        var t = zc(e),
          n = (function () {
            var e;
            return (
              ((e = {})[Ru.Animate] = Rc(!0)),
              (e[Ru.InView] = Rc()),
              (e[Ru.Hover] = Rc()),
              (e[Ru.Tap] = Rc()),
              (e[Ru.Drag] = Rc()),
              (e[Ru.Focus] = Rc()),
              (e[Ru.Exit] = Rc()),
              e
            );
          })(),
          r = {},
          a = !0,
          i = function (t, n) {
            var r = oi(e, n);
            if (r) {
              r.transition;
              var a = r.transitionEnd,
                i = ee(r, ["transition", "transitionEnd"]);
              t = J(J(J({}, t), i), a);
            }
            return t;
          };
        function o(o, s) {
          for (
            var l,
            u = e.getProps(),
            c = e.getVariantContext(!0) || {},
            d = [],
            f = new Set(),
            p = {},
            h = 1 / 0,
            v = function (t) {
              var r = Lc[t],
                v = n[r],
                m = null !== (l = u[r]) && void 0 !== l ? l : c[r],
                g = ai(m),
                y = r === s ? v.isActive : null;
              !1 === y && (h = t);
              var b = m === c[r] && m !== u[r] && g;
              if (
                (b && a && e.manuallyAnimateOnMount && (b = !1),
                  (v.protectedKeys = J({}, p)),
                  (!v.isActive && null === y) ||
                  (!m && !v.prevProp) ||
                  Lu(m) ||
                  "boolean" === typeof m)
              )
                return "continue";
              var x = (function (e, t) {
                if ("string" === typeof t) return t !== e;
                if (ri(t)) return !gc(t, e);
                return !1;
              })(v.prevProp, m),
                w = x || (r === s && v.isActive && !b && g) || (t > h && g),
                E = Array.isArray(m) ? m : [m],
                S = E.reduce(i, {});
              !1 === y && (S = {});
              var C = v.prevResolvedValues,
                k = void 0 === C ? {} : C,
                T = J(J({}, k), S),
                P = function (e) {
                  (w = !0), f.delete(e), (v.needsAnimating[e] = !0);
                };
              for (var j in T) {
                var O = S[j],
                  M = k[j];
                p.hasOwnProperty(j) ||
                  (O !== M
                    ? ss(O) && ss(M)
                      ? !gc(O, M) || x
                        ? P(j)
                        : (v.protectedKeys[j] = !0)
                      : void 0 !== O
                        ? P(j)
                        : f.add(j)
                    : void 0 !== O && f.has(j)
                      ? P(j)
                      : (v.protectedKeys[j] = !0));
              }
              (v.prevProp = m),
                (v.prevResolvedValues = S),
                v.isActive && (p = J(J({}, p), S)),
                a && e.blockInitialAnimation && (w = !1),
                w &&
                !b &&
                d.push.apply(
                  d,
                  re(
                    [],
                    ne(
                      E.map(function (e) {
                        return { animation: e, options: J({ type: r }, o) };
                      })
                    ),
                    !1
                  )
                );
            },
            m = 0;
            m < Ac;
            m++
          )
            v(m);
          if (((r = J({}, p)), f.size)) {
            var g = {};
            f.forEach(function (t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (g[t] = n);
            }),
              d.push({ animation: g });
          }
          var y = Boolean(d.length);
          return (
            a && !1 === u.initial && !e.manuallyAnimateOnMount && (y = !1),
            (a = !1),
            y ? t(d) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (e) {
            return void 0 !== r[e];
          },
          animateChanges: o,
          setActive: function (t, r, a) {
            var i;
            if (n[t].isActive === r) return Promise.resolve();
            null === (i = e.variantChildren) ||
              void 0 === i ||
              i.forEach(function (e) {
                var n;
                return null === (n = e.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(t, r);
              }),
              (n[t].isActive = r);
            var s = o(a, t);
            for (var l in n) n[l].protectedKeys = {};
            return s;
          },
          setAnimateFunction: function (n) {
            t = n(e);
          },
          getState: function () {
            return n;
          },
        };
      }
      function Rc(e) {
        return (
          void 0 === e && (e = !1),
          {
            isActive: e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var Dc = {
        animation: hc(function (e) {
          var n = e.visualElement,
            r = e.animate;
          n.animationState || (n.animationState = _c(n)),
            Lu(r) &&
            (0, t.useEffect)(
              function () {
                return r.subscribe(n);
              },
              [r]
            );
        }),
        exit: hc(function (e) {
          var n = e.custom,
            r = e.visualElement,
            a = ne(mc(), 2),
            i = a[0],
            o = a[1],
            s = (0, t.useContext)(Ce);
          (0, t.useEffect)(
            function () {
              var e, t;
              r.isPresent = i;
              var a =
                null === (e = r.animationState) || void 0 === e
                  ? void 0
                  : e.setActive(Ru.Exit, !i, {
                    custom:
                      null !==
                        (t =
                          null === s || void 0 === s ? void 0 : s.custom) &&
                        void 0 !== t
                        ? t
                        : n,
                  });
              !i && (null === a || void 0 === a || a.then(o));
            },
            [i]
          );
        }),
      },
        Vc = (function () {
          function e(e, t, n) {
            var r = this,
              a = (void 0 === n ? {} : n).transformPagePoint;
            if (
              ((this.startEvent = null),
                (this.lastMoveEvent = null),
                (this.lastMoveEventInfo = null),
                (this.handlers = {}),
                (this.updatePoint = function () {
                  if (r.lastMoveEvent && r.lastMoveEventInfo) {
                    var e = Bc(r.lastMoveEventInfo, r.history),
                      t = null !== r.startEvent,
                      n = rl(e.offset, { x: 0, y: 0 }) >= 3;
                    if (t || n) {
                      var a = e.point,
                        i = be().timestamp;
                      r.history.push(J(J({}, a), { timestamp: i }));
                      var o = r.handlers,
                        s = o.onStart,
                        l = o.onMove;
                      t ||
                        (s && s(r.lastMoveEvent, e),
                          (r.startEvent = r.lastMoveEvent)),
                        l && l(r.lastMoveEvent, e);
                    }
                  }
                }),
                (this.handlePointerMove = function (e, t) {
                  (r.lastMoveEvent = e),
                    (r.lastMoveEventInfo = Ic(t, r.transformPagePoint)),
                    Bu(e) && 0 === e.buttons
                      ? r.handlePointerUp(e, t)
                      : xe.update(r.updatePoint, !0);
                }),
                (this.handlePointerUp = function (e, t) {
                  r.end();
                  var n = r.handlers,
                    a = n.onEnd,
                    i = n.onSessionEnd,
                    o = Bc(Ic(t, r.transformPagePoint), r.history);
                  r.startEvent && a && a(e, o), i && i(e, o);
                }),
                !(Hu(e) && e.touches.length > 1))
            ) {
              (this.handlers = t), (this.transformPagePoint = a);
              var i = Ic($u(e), this.transformPagePoint),
                o = i.point,
                s = be().timestamp;
              this.history = [J(J({}, o), { timestamp: s })];
              var l = t.onSessionStart;
              l && l(e, Bc(i, this.history)),
                (this.removeListeners = mo(
                  Qu(window, "pointermove", this.handlePointerMove),
                  Qu(window, "pointerup", this.handlePointerUp),
                  Qu(window, "pointercancel", this.handlePointerUp)
                ));
            }
          }
          return (
            (e.prototype.updateHandlers = function (e) {
              this.handlers = e;
            }),
            (e.prototype.end = function () {
              this.removeListeners && this.removeListeners(),
                he.update(this.updatePoint);
            }),
            e
          );
        })();
      function Ic(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function Fc(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function Bc(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: Fc(n, Wc(t)),
          offset: Fc(n, Hc(t)),
          velocity: Uc(t, 0.1),
        };
      }
      function Hc(e) {
        return e[0];
      }
      function Wc(e) {
        return e[e.length - 1];
      }
      function Uc(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        for (
          var n = e.length - 1, r = null, a = Wc(e);
          n >= 0 && ((r = e[n]), !(a.timestamp - r.timestamp > Zo(t)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var i = (a.timestamp - r.timestamp) / 1e3;
        if (0 === i) return { x: 0, y: 0 };
        var o = { x: (a.x - r.x) / i, y: (a.y - r.y) / i };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
      }
      function Gc(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function $c(e, t) {
        var n,
          r = t.min - e.min,
          a = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min &&
          ((r = (n = ne([a, r], 2))[0]), (a = n[1])),
          { min: r, max: a }
        );
      }
      var Yc = 0.35;
      function qc(e, t, n) {
        return { min: Xc(e, t), max: Xc(e, n) };
      }
      function Xc(e, t) {
        var n;
        return "number" === typeof e
          ? e
          : null !== (n = e[t]) && void 0 !== n
            ? n
            : 0;
      }
      function Zc(e) {
        var t = e.top;
        return {
          x: { min: e.left, max: e.right },
          y: { min: t, max: e.bottom },
        };
      }
      function Qc(e, t) {
        return Zc(
          (function (e, t) {
            if (!t) return e;
            var n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      var Kc = new WeakMap(),
        Jc = (function () {
          function e(e) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = e);
          }
          return (
            (e.prototype.start = function (e, t) {
              var n = this,
                r = (void 0 === t ? {} : t).snapToCursor,
                a = void 0 !== r && r;
              if (!1 !== this.visualElement.isPresent) {
                this.panSession = new Vc(
                  e,
                  {
                    onSessionStart: function (e) {
                      n.stopAnimation(),
                        a && n.snapToCursor($u(e, "page").point);
                    },
                    onStart: function (e, t) {
                      var r,
                        a = n.getProps(),
                        i = a.drag,
                        o = a.dragPropagation,
                        s = a.onDragStart;
                      (!i ||
                        o ||
                        (n.openGlobalLock && n.openGlobalLock(),
                          (n.openGlobalLock = nc(i)),
                          n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                          (n.currentDirection = null),
                          n.resolveConstraints(),
                          n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0),
                            (n.visualElement.projection.target = void 0)),
                          El(function (e) {
                            var t,
                              r,
                              a = n.getAxisMotionValue(e).get() || 0;
                            if ($i.test(a)) {
                              var i =
                                null ===
                                  (r =
                                    null === (t = n.visualElement.projection) ||
                                      void 0 === t
                                      ? void 0
                                      : t.layout) || void 0 === r
                                  ? void 0
                                  : r.actual[e];
                              if (i) a = al(i) * (parseFloat(a) / 100);
                            }
                            n.originPoint[e] = a;
                          }),
                          null === s || void 0 === s || s(e, t),
                          null === (r = n.visualElement.animationState) ||
                          void 0 === r ||
                          r.setActive(Ru.Drag, !0));
                    },
                    onMove: function (e, t) {
                      var r = n.getProps(),
                        a = r.dragPropagation,
                        i = r.dragDirectionLock,
                        o = r.onDirectionLock,
                        s = r.onDrag;
                      if (a || n.openGlobalLock) {
                        var l = t.offset;
                        if (i && null === n.currentDirection)
                          return (
                            (n.currentDirection = (function (e, t) {
                              void 0 === t && (t = 10);
                              var n = null;
                              Math.abs(e.y) > t
                                ? (n = "y")
                                : Math.abs(e.x) > t && (n = "x");
                              return n;
                            })(l)),
                            void (
                              null !== n.currentDirection &&
                              (null === o ||
                                void 0 === o ||
                                o(n.currentDirection))
                            )
                          );
                        n.updateAxis("x", t.point, l),
                          n.updateAxis("y", t.point, l),
                          n.visualElement.syncRender(),
                          null === s || void 0 === s || s(e, t);
                      }
                    },
                    onSessionEnd: function (e, t) {
                      return n.stop(e, t);
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                );
              }
            }),
            (e.prototype.stop = function (e, t) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var r = t.velocity;
                this.startAnimation(r);
                var a = this.getProps().onDragEnd;
                null === a || void 0 === a || a(e, t);
              }
            }),
            (e.prototype.cancel = function () {
              var e, t;
              (this.isDragging = !1),
                this.visualElement.projection &&
                (this.visualElement.projection.isAnimationBlocked = !1),
                null === (e = this.panSession) || void 0 === e || e.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                this.openGlobalLock &&
                (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (t = this.visualElement.animationState) ||
                void 0 === t ||
                t.setActive(Ru.Drag, !1);
            }),
            (e.prototype.updateAxis = function (e, t, n) {
              var r = this.getProps().drag;
              if (n && ed(e, r, this.currentDirection)) {
                var a = this.getAxisMotionValue(e),
                  i = this.originPoint[e] + n[e];
                this.constraints &&
                  this.constraints[e] &&
                  (i = (function (e, t, n) {
                    var r = t.min,
                      a = t.max;
                    return (
                      void 0 !== r && e < r
                        ? (e = n ? di(r, e, n.min) : Math.max(e, r))
                        : void 0 !== a &&
                        e > a &&
                        (e = n ? di(a, e, n.max) : Math.min(e, a)),
                      e
                    );
                  })(i, this.constraints[e], this.elastic[e])),
                  a.set(i);
              }
            }),
            (e.prototype.resolveConstraints = function () {
              var e = this,
                t = this.getProps(),
                n = t.dragConstraints,
                r = t.dragElastic,
                a = (this.visualElement.projection || {}).layout,
                i = this.constraints;
              n && ni(n)
                ? this.constraints ||
                (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                  !(!n || !a) &&
                  (function (e, t) {
                    var n = t.top,
                      r = t.left,
                      a = t.bottom,
                      i = t.right;
                    return { x: Gc(e.x, r, i), y: Gc(e.y, n, a) };
                  })(a.actual, n)),
                (this.elastic = (function (e) {
                  return (
                    void 0 === e && (e = Yc),
                    !1 === e ? (e = 0) : !0 === e && (e = Yc),
                    { x: qc(e, "left", "right"), y: qc(e, "top", "bottom") }
                  );
                })(r)),
                i !== this.constraints &&
                a &&
                this.constraints &&
                !this.hasMutatedConstraints &&
                El(function (t) {
                  e.getAxisMotionValue(t) &&
                    (e.constraints[t] = (function (e, t) {
                      var n = {};
                      return (
                        void 0 !== t.min && (n.min = t.min - e.min),
                        void 0 !== t.max && (n.max = t.max - e.min),
                        n
                      );
                    })(a.actual[t], e.constraints[t]));
                });
            }),
            (e.prototype.resolveRefConstraints = function () {
              var e = this.getProps(),
                t = e.dragConstraints,
                n = e.onMeasureDragConstraints;
              if (!t || !ni(t)) return !1;
              var r = t.current,
                a = this.visualElement.projection;
              if (!a || !a.layout) return !1;
              var i = (function (e, t, n) {
                var r = Qc(e, n),
                  a = t.scroll;
                return a && (Xs(r.x, a.x), Xs(r.y, a.y)), r;
              })(r, a.root, this.visualElement.getTransformPagePoint()),
                o = (function (e, t) {
                  return { x: $c(e.x, t.x), y: $c(e.y, t.y) };
                })(a.layout.actual, i);
              if (n) {
                var s = n(
                  (function (e) {
                    var t = e.x,
                      n = e.y;
                    return {
                      top: n.min,
                      right: t.max,
                      bottom: n.max,
                      left: t.min,
                    };
                  })(o)
                );
                (this.hasMutatedConstraints = !!s), s && (o = Zc(s));
              }
              return o;
            }),
            (e.prototype.startAnimation = function (e) {
              var t = this,
                n = this.getProps(),
                r = n.drag,
                a = n.dragMomentum,
                i = n.dragElastic,
                o = n.dragTransition,
                s = n.dragSnapToOrigin,
                l = n.onDragTransitionEnd,
                u = this.constraints || {},
                c = El(function (n) {
                  var l;
                  if (ed(n, r, t.currentDirection)) {
                    var c =
                      null !==
                        (l = null === u || void 0 === u ? void 0 : u[n]) &&
                        void 0 !== l
                        ? l
                        : {};
                    s && (c = { min: 0, max: 0 });
                    var d = i ? 200 : 1e6,
                      f = i ? 40 : 1e7,
                      p = J(
                        J(
                          {
                            type: "inertia",
                            velocity: a ? e[n] : 0,
                            bounceStiffness: d,
                            bounceDamping: f,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          o
                        ),
                        c
                      );
                    return t.startAxisValueAnimation(n, p);
                  }
                });
              return Promise.all(c).then(l);
            }),
            (e.prototype.startAxisValueAnimation = function (e, t) {
              return Ms(e, this.getAxisMotionValue(e), 0, t);
            }),
            (e.prototype.stopAnimation = function () {
              var e = this;
              El(function (t) {
                return e.getAxisMotionValue(t).stop();
              });
            }),
            (e.prototype.getAxisMotionValue = function (e) {
              var t,
                n,
                r = "_drag" + e.toUpperCase(),
                a = this.visualElement.getProps()[r];
              return (
                a ||
                this.visualElement.getValue(
                  e,
                  null !==
                    (n =
                      null === (t = this.visualElement.getProps().initial) ||
                        void 0 === t
                        ? void 0
                        : t[e]) && void 0 !== n
                    ? n
                    : 0
                )
              );
            }),
            (e.prototype.snapToCursor = function (e) {
              var t = this;
              El(function (n) {
                if (ed(n, t.getProps().drag, t.currentDirection)) {
                  var r = t.visualElement.projection,
                    a = t.getAxisMotionValue(n);
                  if (r && r.layout) {
                    var i = r.layout.actual[n],
                      o = i.min,
                      s = i.max;
                    a.set(e[n] - di(o, s, 0.5));
                  }
                }
              });
            }),
            (e.prototype.scalePositionWithinConstraints = function () {
              var e,
                t = this,
                n = this.getProps(),
                r = n.drag,
                a = n.dragConstraints,
                i = this.visualElement.projection;
              if (ni(a) && i && this.constraints) {
                this.stopAnimation();
                var o = { x: 0, y: 0 };
                El(function (e) {
                  var n = t.getAxisMotionValue(e);
                  if (n) {
                    var r = n.get();
                    o[e] = (function (e, t) {
                      var n = 0.5,
                        r = al(e),
                        a = al(t);
                      return (
                        a > r
                          ? (n = ji(t.min, t.max - r, e.min))
                          : r > a && (n = ji(e.min, e.max - a, t.min)),
                        bi(0, 1, n)
                      );
                    })({ min: r, max: r }, t.constraints[e]);
                  }
                });
                var s = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = s
                  ? s({}, "")
                  : "none"),
                  null === (e = i.root) || void 0 === e || e.updateScroll(),
                  i.updateLayout(),
                  this.resolveConstraints(),
                  El(function (e) {
                    if (ed(e, r, null)) {
                      var n = t.getAxisMotionValue(e),
                        a = t.constraints[e],
                        i = a.min,
                        s = a.max;
                      n.set(di(i, s, o[e]));
                    }
                  });
              }
            }),
            (e.prototype.addListeners = function () {
              var e,
                t = this;
              Kc.set(this.visualElement, this);
              var n = Qu(
                this.visualElement.getInstance(),
                "pointerdown",
                function (e) {
                  var n = t.getProps(),
                    r = n.drag,
                    a = n.dragListener;
                  r && (void 0 === a || a) && t.start(e);
                }
              ),
                r = function () {
                  ni(t.getProps().dragConstraints) &&
                    (t.constraints = t.resolveRefConstraints());
                },
                a = this.visualElement.projection,
                i = a.addEventListener("measure", r);
              a &&
                !a.layout &&
                (null === (e = a.root) || void 0 === e || e.updateScroll(),
                  a.updateLayout()),
                r();
              var o = Iu(window, "resize", function () {
                t.scalePositionWithinConstraints();
              });
              return (
                a.addEventListener("didUpdate", function (e) {
                  var n = e.delta,
                    r = e.hasLayoutChanged;
                  t.isDragging &&
                    r &&
                    (El(function (e) {
                      var r = t.getAxisMotionValue(e);
                      r &&
                        ((t.originPoint[e] += n[e].translate),
                          r.set(r.get() + n[e].translate));
                    }),
                      t.visualElement.syncRender());
                }),
                function () {
                  o(), n(), i();
                }
              );
            }),
            (e.prototype.getProps = function () {
              var e = this.visualElement.getProps(),
                t = e.drag,
                n = void 0 !== t && t,
                r = e.dragDirectionLock,
                a = void 0 !== r && r,
                i = e.dragPropagation,
                o = void 0 !== i && i,
                s = e.dragConstraints,
                l = void 0 !== s && s,
                u = e.dragElastic,
                c = void 0 === u ? Yc : u,
                d = e.dragMomentum,
                f = void 0 === d || d;
              return J(J({}, e), {
                drag: n,
                dragDirectionLock: a,
                dragPropagation: o,
                dragConstraints: l,
                dragElastic: c,
                dragMomentum: f,
              });
            }),
            e
          );
        })();
      function ed(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      var td = {
        pan: hc(function (e) {
          var n = e.onPan,
            r = e.onPanStart,
            a = e.onPanEnd,
            i = e.onPanSessionStart,
            o = e.visualElement,
            s = n || r || a || i,
            l = (0, t.useRef)(null),
            u = (0, t.useContext)(Za).transformPagePoint,
            c = {
              onSessionStart: i,
              onStart: r,
              onMove: n,
              onEnd: function (e, t) {
                (l.current = null), a && a(e, t);
              },
            };
          (0, t.useEffect)(function () {
            null !== l.current && l.current.updateHandlers(c);
          }),
            Ku(
              o,
              "pointerdown",
              s &&
              function (e) {
                l.current = new Vc(e, c, { transformPagePoint: u });
              }
            ),
            Le(function () {
              return l.current && l.current.end();
            });
        }),
        drag: hc(function (e) {
          var n = e.dragControls,
            r = e.visualElement,
            a = ke(function () {
              return new Jc(r);
            });
          (0, t.useEffect)(
            function () {
              return n && n.subscribe(a);
            },
            [a, n]
          ),
            (0, t.useEffect)(
              function () {
                return a.addListeners();
              },
              [a]
            );
        }),
      },
        nd = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "LayoutAnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      var rd = function (e) {
        var t = e.treeType,
          n = void 0 === t ? "" : t,
          r = e.build,
          a = e.getBaseTarget,
          i = e.makeTargetAnimatable,
          o = e.measureViewportBox,
          s = e.render,
          l = e.readValueFromInstance,
          u = e.removeValueFromRenderState,
          c = e.sortNodePosition,
          d = e.scrapeMotionValuesFromProps;
        return function (e, t) {
          var f = e.parent,
            p = e.props,
            h = e.presenceId,
            v = e.blockInitialAnimation,
            m = e.visualState,
            g = e.shouldReduceMotion;
          void 0 === t && (t = {});
          var y,
            b,
            x = !1,
            w = m.latestValues,
            E = m.renderState,
            S = (function () {
              var e = nd.map(function () {
                return new vi();
              }),
                t = {},
                n = {
                  clearAllListeners: function () {
                    return e.forEach(function (e) {
                      return e.clear();
                    });
                  },
                  updatePropListeners: function (e) {
                    nd.forEach(function (r) {
                      var a,
                        i = "on" + r,
                        o = e[i];
                      null === (a = t[r]) || void 0 === a || a.call(t),
                        o && (t[r] = n[i](o));
                    });
                  },
                };
              return (
                e.forEach(function (e, t) {
                  (n["on" + nd[t]] = function (t) {
                    return e.add(t);
                  }),
                    (n["notify" + nd[t]] = function () {
                      for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                      return e.notify.apply(e, re([], ne(t), !1));
                    });
                }),
                n
              );
            })(),
            C = new Map(),
            k = new Map(),
            T = {},
            P = J({}, w);
          function j() {
            y && x && (O(), s(y, E, p.style, D.projection));
          }
          function O() {
            r(D, E, w, t, p);
          }
          function M() {
            S.notifyUpdate(w);
          }
          function N(e, t) {
            var n = t.onChange(function (t) {
              (w[e] = t), p.onUpdate && xe.update(M, !1, !0);
            }),
              r = t.onRenderRequest(D.scheduleRender);
            k.set(e, function () {
              n(), r();
            });
          }
          var L = d(p);
          for (var A in L) {
            var z = L[A];
            void 0 !== w[A] && yi(z) && z.set(w[A], !1);
          }
          var _ = si(p),
            R = li(p),
            D = J(
              J(
                {
                  treeType: n,
                  current: null,
                  depth: f ? f.depth + 1 : 0,
                  parent: f,
                  children: new Set(),
                  presenceId: h,
                  shouldReduceMotion: g,
                  variantChildren: R ? new Set() : void 0,
                  isVisible: void 0,
                  manuallyAnimateOnMount: Boolean(
                    null === f || void 0 === f ? void 0 : f.isMounted()
                  ),
                  blockInitialAnimation: v,
                  isMounted: function () {
                    return Boolean(y);
                  },
                  mount: function (e) {
                    (x = !0),
                      (y = D.current = e),
                      D.projection && D.projection.mount(e),
                      R &&
                      f &&
                      !_ &&
                      (b =
                        null === f || void 0 === f
                          ? void 0
                          : f.addVariantChild(D)),
                      C.forEach(function (e, t) {
                        return N(t, e);
                      }),
                      null === f || void 0 === f || f.children.add(D),
                      D.setProps(p);
                  },
                  unmount: function () {
                    var e;
                    null === (e = D.projection) ||
                      void 0 === e ||
                      e.unmount(),
                      he.update(M),
                      he.render(j),
                      k.forEach(function (e) {
                        return e();
                      }),
                      null === b || void 0 === b || b(),
                      null === f || void 0 === f || f.children.delete(D),
                      S.clearAllListeners(),
                      (y = void 0),
                      (x = !1);
                  },
                  addVariantChild: function (e) {
                    var t,
                      n = D.getClosestVariantNode();
                    if (n)
                      return (
                        null === (t = n.variantChildren) ||
                        void 0 === t ||
                        t.add(e),
                        function () {
                          return n.variantChildren.delete(e);
                        }
                      );
                  },
                  sortNodePosition: function (e) {
                    return c && n === e.treeType
                      ? c(D.getInstance(), e.getInstance())
                      : 0;
                  },
                  getClosestVariantNode: function () {
                    return R
                      ? D
                      : null === f || void 0 === f
                        ? void 0
                        : f.getClosestVariantNode();
                  },
                  getLayoutId: function () {
                    return p.layoutId;
                  },
                  getInstance: function () {
                    return y;
                  },
                  getStaticValue: function (e) {
                    return w[e];
                  },
                  setStaticValue: function (e, t) {
                    return (w[e] = t);
                  },
                  getLatestValues: function () {
                    return w;
                  },
                  setVisibility: function (e) {
                    D.isVisible !== e &&
                      ((D.isVisible = e), D.scheduleRender());
                  },
                  makeTargetAnimatable: function (e, t) {
                    return void 0 === t && (t = !0), i(D, e, p, t);
                  },
                  measureViewportBox: function () {
                    return o(y, p);
                  },
                  addValue: function (e, t) {
                    D.hasValue(e) && D.removeValue(e),
                      C.set(e, t),
                      (w[e] = t.get()),
                      N(e, t);
                  },
                  removeValue: function (e) {
                    var t;
                    C.delete(e),
                      null === (t = k.get(e)) || void 0 === t || t(),
                      k.delete(e),
                      delete w[e],
                      u(e, E);
                  },
                  hasValue: function (e) {
                    return C.has(e);
                  },
                  getValue: function (e, t) {
                    var n = C.get(e);
                    return (
                      void 0 === n &&
                      void 0 !== t &&
                      ((n = gi(t)), D.addValue(e, n)),
                      n
                    );
                  },
                  forEachValue: function (e) {
                    return C.forEach(e);
                  },
                  readValue: function (e) {
                    var n;
                    return null !== (n = w[e]) && void 0 !== n
                      ? n
                      : l(y, e, t);
                  },
                  setBaseTarget: function (e, t) {
                    P[e] = t;
                  },
                  getBaseTarget: function (e) {
                    if (a) {
                      var t = a(p, e);
                      if (void 0 !== t && !yi(t)) return t;
                    }
                    return P[e];
                  },
                },
                S
              ),
              {
                build: function () {
                  return O(), E;
                },
                scheduleRender: function () {
                  xe.render(j, !1, !0);
                },
                syncRender: j,
                setProps: function (e) {
                  (e.transformTemplate || p.transformTemplate) &&
                    D.scheduleRender(),
                    (p = e),
                    S.updatePropListeners(e),
                    (T = (function (e, t, n) {
                      var r;
                      for (var a in t) {
                        var i = t[a],
                          o = n[a];
                        if (yi(i)) e.addValue(a, i);
                        else if (yi(o)) e.addValue(a, gi(i));
                        else if (o !== i)
                          if (e.hasValue(a)) {
                            var s = e.getValue(a);
                            !s.hasAnimated && s.set(i);
                          } else
                            e.addValue(
                              a,
                              gi(
                                null !== (r = e.getStaticValue(a)) &&
                                  void 0 !== r
                                  ? r
                                  : i
                              )
                            );
                      }
                      for (var a in n) void 0 === t[a] && e.removeValue(a);
                      return t;
                    })(D, d(p), T));
                },
                getProps: function () {
                  return p;
                },
                getVariant: function (e) {
                  var t;
                  return null === (t = p.variants) || void 0 === t
                    ? void 0
                    : t[e];
                },
                getDefaultTransition: function () {
                  return p.transition;
                },
                getTransformPagePoint: function () {
                  return p.transformPagePoint;
                },
                getVariantContext: function (e) {
                  if ((void 0 === e && (e = !1), e))
                    return null === f || void 0 === f
                      ? void 0
                      : f.getVariantContext();
                  if (!_) {
                    var t =
                      (null === f || void 0 === f
                        ? void 0
                        : f.getVariantContext()) || {};
                    return void 0 !== p.initial && (t.initial = p.initial), t;
                  }
                  for (var n = {}, r = 0; r < id; r++) {
                    var a = ad[r],
                      i = p[a];
                    (ai(i) || !1 === i) && (n[a] = i);
                  }
                  return n;
                },
              }
            );
          return D;
        };
      },
        ad = re(["initial"], ne(Nc), !1),
        id = ad.length;
      function od(e) {
        return "string" === typeof e && e.startsWith("var(--");
      }
      var sd = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function ld(e, t, n) {
        void 0 === n && (n = 1),
          'Max CSS variable fallback depth detected in property "'.concat(
            e,
            '". This may indicate a circular fallback dependency.'
          );
        var r = ne(
          (function (e) {
            var t = sd.exec(e);
            if (!t) return [,];
            var n = ne(t, 3);
            return [n[1], n[2]];
          })(e),
          2
        ),
          a = r[0],
          i = r[1];
        if (a) {
          var o = window.getComputedStyle(t).getPropertyValue(a);
          return o ? o.trim() : od(i) ? ld(i, t, n + 1) : i;
        }
      }
      var ud,
        cd = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        dd = function (e) {
          return cd.has(e);
        },
        fd = function (e, t) {
          e.set(t, !1), e.set(t);
        },
        pd = function (e) {
          return e === _i || e === Yi;
        };
      !(function (e) {
        (e.width = "width"),
          (e.height = "height"),
          (e.left = "left"),
          (e.right = "right"),
          (e.top = "top"),
          (e.bottom = "bottom");
      })(ud || (ud = {}));
      var hd = function (e, t) {
        return parseFloat(e.split(", ")[t]);
      },
        vd = function (e, t) {
          return function (n, r) {
            var a = r.transform;
            if ("none" === a || !a) return 0;
            var i = a.match(/^matrix3d\((.+)\)$/);
            if (i) return hd(i[1], t);
            var o = a.match(/^matrix\((.+)\)$/);
            return o ? hd(o[1], e) : 0;
          };
        },
        md = new Set(["x", "y", "z"]),
        gd = Cl.filter(function (e) {
          return !md.has(e);
        });
      var yd = {
        width: function (e, t) {
          var n = e.x,
            r = t.paddingLeft,
            a = void 0 === r ? "0" : r,
            i = t.paddingRight,
            o = void 0 === i ? "0" : i;
          return n.max - n.min - parseFloat(a) - parseFloat(o);
        },
        height: function (e, t) {
          var n = e.y,
            r = t.paddingTop,
            a = void 0 === r ? "0" : r,
            i = t.paddingBottom,
            o = void 0 === i ? "0" : i;
          return n.max - n.min - parseFloat(a) - parseFloat(o);
        },
        top: function (e, t) {
          var n = t.top;
          return parseFloat(n);
        },
        left: function (e, t) {
          var n = t.left;
          return parseFloat(n);
        },
        bottom: function (e, t) {
          var n = e.y,
            r = t.top;
          return parseFloat(r) + (n.max - n.min);
        },
        right: function (e, t) {
          var n = e.x,
            r = t.left;
          return parseFloat(r) + (n.max - n.min);
        },
        x: vd(4, 13),
        y: vd(5, 14),
      },
        bd = function (e, t, n, r) {
          void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            (t = J({}, t)),
            (r = J({}, r));
          var a = Object.keys(t).filter(dd),
            i = [],
            o = !1,
            s = [];
          if (
            (a.forEach(function (a) {
              var l = e.getValue(a);
              if (e.hasValue(a)) {
                var u,
                  c = n[a],
                  d = wc(c),
                  f = t[a];
                if (ss(f)) {
                  var p = f.length,
                    h = null === f[0] ? 1 : 0;
                  (c = f[h]), (d = wc(c));
                  for (var v = h; v < p; v++)
                    u ? wc(f[v]) : (u = wc(f[v])) === d || (pd(d) && pd(u));
                } else u = wc(f);
                if (d !== u)
                  if (pd(d) && pd(u)) {
                    var m = l.get();
                    "string" === typeof m && l.set(parseFloat(m)),
                      "string" === typeof f
                        ? (t[a] = parseFloat(f))
                        : Array.isArray(f) &&
                        u === Yi &&
                        (t[a] = f.map(parseFloat));
                  } else
                    (null === d || void 0 === d ? void 0 : d.transform) &&
                      (null === u || void 0 === u ? void 0 : u.transform) &&
                      (0 === c || 0 === f)
                      ? 0 === c
                        ? l.set(u.transform(c))
                        : (t[a] = d.transform(f))
                      : (o ||
                        ((i = (function (e) {
                          var t = [];
                          return (
                            gd.forEach(function (n) {
                              var r = e.getValue(n);
                              void 0 !== r &&
                                (t.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            t.length && e.syncRender(),
                            t
                          );
                        })(e)),
                          (o = !0)),
                        s.push(a),
                        (r[a] = void 0 !== r[a] ? r[a] : t[a]),
                        fd(l, f));
              }
            }),
              s.length)
          ) {
            var l = (function (e, t, n) {
              var r = t.measureViewportBox(),
                a = t.getInstance(),
                i = getComputedStyle(a),
                o = i.display,
                s = {};
              "none" === o && t.setStaticValue("display", e.display || "block"),
                n.forEach(function (e) {
                  s[e] = yd[e](r, i);
                }),
                t.syncRender();
              var l = t.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var r = t.getValue(n);
                  fd(r, s[n]), (e[n] = yd[n](l, i));
                }),
                e
              );
            })(t, e, s);
            return (
              i.length &&
              i.forEach(function (t) {
                var n = ne(t, 2),
                  r = n[0],
                  a = n[1];
                e.getValue(r).set(a);
              }),
              e.syncRender(),
              { target: l, transitionEnd: r }
            );
          }
          return { target: t, transitionEnd: r };
        };
      function xd(e, t, n, r) {
        return (function (e) {
          return Object.keys(e).some(dd);
        })(t)
          ? bd(e, t, n, r)
          : { target: t, transitionEnd: r };
      }
      var wd = function (e, t, n, r) {
        var a = (function (e, t, n) {
          var r,
            a = ee(t, []),
            i = e.getInstance();
          if (!(i instanceof Element)) return { target: a, transitionEnd: n };
          for (var o in (n && (n = J({}, n)),
            e.forEachValue(function (e) {
              var t = e.get();
              if (od(t)) {
                var n = ld(t, i);
                n && e.set(n);
              }
            }),
            a)) {
            var s = a[o];
            if (od(s)) {
              var l = ld(s, i);
              l &&
                ((a[o] = l),
                  n && ((null !== (r = n[o]) && void 0 !== r) || (n[o] = s)));
            }
          }
          return { target: a, transitionEnd: n };
        })(e, t, r);
        return xd(e, (t = a.target), n, (r = a.transitionEnd));
      };
      var Ed = {
        treeType: "dom",
        readValueFromInstance: function (e, t) {
          if (Pl(t)) {
            var n = xs(t);
            return (n && n.default) || 0;
          }
          var r,
            a = ((r = e), window.getComputedStyle(r));
          return (su(t) ? a.getPropertyValue(t) : a[t]) || 0;
        },
        sortNodePosition: function (e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        },
        getBaseTarget: function (e, t) {
          var n;
          return null === (n = e.style) || void 0 === n ? void 0 : n[t];
        },
        measureViewportBox: function (e, t) {
          return Qc(e, t.transformPagePoint);
        },
        resetTransform: function (e, t, n) {
          var r = n.transformTemplate;
          (t.style.transform = r ? r({}, "") : "none"), e.scheduleRender();
        },
        restoreTransform: function (e, t) {
          e.style.transform = t.style.transform;
        },
        removeValueFromRenderState: function (e, t) {
          var n = t.vars,
            r = t.style;
          delete n[e], delete r[e];
        },
        makeTargetAnimatable: function (e, t, n, r) {
          var a = n.transformValues;
          void 0 === r && (r = !0);
          var i = t.transition,
            o = t.transitionEnd,
            s = ee(t, ["transition", "transitionEnd"]),
            l = (function (e, t, n) {
              var r,
                a,
                i = {};
              for (var o in e)
                i[o] =
                  null !== (r = Tc(o, t)) && void 0 !== r
                    ? r
                    : null === (a = n.getValue(o)) || void 0 === a
                      ? void 0
                      : a.get();
              return i;
            })(s, i || {}, e);
          if ((a && (o && (o = a(o)), s && (s = a(s)), l && (l = a(l))), r)) {
            !(function (e, t, n) {
              var r,
                a,
                i,
                o,
                s = Object.keys(t).filter(function (t) {
                  return !e.hasValue(t);
                }),
                l = s.length;
              if (l)
                for (var u = 0; u < l; u++) {
                  var c = s[u],
                    d = t[c],
                    f = null;
                  Array.isArray(d) && (f = d[0]),
                    null === f &&
                    (f =
                      null !==
                        (a =
                          null !== (r = n[c]) && void 0 !== r
                            ? r
                            : e.readValue(c)) && void 0 !== a
                        ? a
                        : t[c]),
                    void 0 !== f &&
                    null !== f &&
                    ("string" === typeof f &&
                      (/^\-?\d*\.?\d+$/.test(f) || yc(f))
                      ? (f = parseFloat(f))
                      : !Sc(f) && po.test(d) && (f = ws(c, d)),
                      e.addValue(c, gi(f)),
                      (null !== (i = (o = n)[c]) && void 0 !== i) ||
                      (o[c] = f),
                      e.setBaseTarget(c, f));
                }
            })(e, s, l);
            var u = wd(e, s, l, o);
            (o = u.transitionEnd), (s = u.target);
          }
          return J({ transition: i, transitionEnd: o }, s);
        },
        scrapeMotionValuesFromProps: Mu,
        build: function (e, t, n, r, a) {
          void 0 !== e.isVisible &&
            (t.style.visibility = e.isVisible ? "visible" : "hidden"),
            uu(t, n, r, a.transformTemplate);
        },
        render: Pu,
      },
        Sd = rd(Ed),
        Cd = rd(
          J(J({}, Ed), {
            getBaseTarget: function (e, t) {
              return e[t];
            },
            readValueFromInstance: function (e, t) {
              var n;
              return Pl(t)
                ? (null === (n = xs(t)) || void 0 === n ? void 0 : n.default) ||
                0
                : ((t = ju.has(t) ? t : Tu(t)), e.getAttribute(t));
            },
            scrapeMotionValuesFromProps: Nu,
            build: function (e, t, n, r, a) {
              wu(t, n, r, a.transformTemplate);
            },
            render: Ou,
          })
        ),
        kd = function (e, t) {
          return au(e)
            ? Cd(t, { enableHardwareAcceleration: !1 })
            : Sd(t, { enableHardwareAcceleration: !0 });
        };
      function Td(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      var Pd = {
        correct: function (e, t) {
          if (!t.target) return e;
          if ("string" === typeof e) {
            if (!Yi.test(e)) return e;
            e = parseFloat(e);
          }
          var n = Td(e, t.target.x),
            r = Td(e, t.target.y);
          return "".concat(n, "% ").concat(r, "%");
        },
      },
        jd = "_$css",
        Od = {
          correct: function (e, t) {
            var n = t.treeScale,
              r = t.projectionDelta,
              a = e,
              i = e.includes("var("),
              o = [];
            i &&
              (e = e.replace(sd, function (e) {
                return o.push(e), jd;
              }));
            var s = po.parse(e);
            if (s.length > 5) return a;
            var l = po.createTransformer(e),
              u = "number" !== typeof s[0] ? 1 : 0,
              c = r.x.scale * n.x,
              d = r.y.scale * n.y;
            (s[0 + u] /= c), (s[1 + u] /= d);
            var f = di(c, d, 0.5);
            "number" === typeof s[2 + u] && (s[2 + u] /= f),
              "number" === typeof s[3 + u] && (s[3 + u] /= f);
            var p = l(s);
            if (i) {
              var h = 0;
              p = p.replace(jd, function () {
                var e = o[h];
                return h++, e;
              });
            }
            return p;
          },
        },
        Md = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            K(t, e),
            (t.prototype.componentDidMount = function () {
              var e,
                t = this,
                n = this.props,
                r = n.visualElement,
                a = n.layoutGroup,
                i = n.switchLayoutGroup,
                o = n.layoutId,
                s = r.projection;
              (e = Nd),
                Object.assign(xl, e),
                s &&
                ((null === a || void 0 === a ? void 0 : a.group) &&
                  a.group.add(s),
                  (null === i || void 0 === i ? void 0 : i.register) &&
                  o &&
                  i.register(s),
                  s.root.didUpdate(),
                  s.addEventListener("animationComplete", function () {
                    t.safeToRemove();
                  }),
                  s.setOptions(
                    J(J({}, s.options), {
                      onExitComplete: function () {
                        return t.safeToRemove();
                      },
                    })
                  )),
                (Al.hasEverUpdated = !0);
            }),
            (t.prototype.getSnapshotBeforeUpdate = function (e) {
              var t = this,
                n = this.props,
                r = n.layoutDependency,
                a = n.visualElement,
                i = n.drag,
                o = n.isPresent,
                s = a.projection;
              return s
                ? ((s.isPresent = o),
                  i || e.layoutDependency !== r || void 0 === r
                    ? s.willUpdate()
                    : this.safeToRemove(),
                  e.isPresent !== o &&
                  (o
                    ? s.promote()
                    : s.relegate() ||
                    xe.postRender(function () {
                      var e;
                      (null === (e = s.getStack()) || void 0 === e
                        ? void 0
                        : e.members.length) || t.safeToRemove();
                    })),
                  null)
                : null;
            }),
            (t.prototype.componentDidUpdate = function () {
              var e = this.props.visualElement.projection;
              e &&
                (e.root.didUpdate(),
                  !e.currentAnimation && e.isLead() && this.safeToRemove());
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props,
                t = e.visualElement,
                n = e.layoutGroup,
                r = e.switchLayoutGroup,
                a = t.projection;
              a &&
                (a.scheduleCheckAfterUnmount(),
                  (null === n || void 0 === n ? void 0 : n.group) &&
                  n.group.remove(a),
                  (null === r || void 0 === r ? void 0 : r.deregister) &&
                  r.deregister(a));
            }),
            (t.prototype.safeToRemove = function () {
              var e = this.props.safeToRemove;
              null === e || void 0 === e || e();
            }),
            (t.prototype.render = function () {
              return null;
            }),
            t
          );
        })(t.Component);
      var Nd = {
        borderRadius: J(J({}, Pd), {
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        }),
        borderTopLeftRadius: Pd,
        borderTopRightRadius: Pd,
        borderBottomLeftRadius: Pd,
        borderBottomRightRadius: Pd,
        boxShadow: Od,
      },
        Ld = {
          measureLayout: function (e) {
            var n = ne(mc(), 2),
              r = n[0],
              a = n[1],
              i = (0, t.useContext)(Ne);
            return t.createElement(
              Md,
              J({}, e, {
                layoutGroup: i,
                switchLayoutGroup: (0, t.useContext)(Jl),
                isPresent: r,
                safeToRemove: a,
              })
            );
          },
        },
        Ad = zl({
          attachResizeListener: function (e, t) {
            return (
              e.addEventListener("resize", t, { passive: !0 }),
              function () {
                return e.removeEventListener("resize", t);
              }
            );
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
        }),
        zd = { current: void 0 },
        _d = zl({
          measureScroll: function (e) {
            return { x: e.scrollLeft, y: e.scrollTop };
          },
          defaultParent: function () {
            if (!zd.current) {
              var e = new Ad(0, {});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (zd.current = e);
            }
            return zd.current;
          },
          resetTransform: function (e, t) {
            e.style.transform = null !== t && void 0 !== t ? t : "none";
          },
        }),
        Rd = J(J(J(J({}, Dc), vc), td), Ld),
        Dd = nu(function (e, t) {
          return (function (e, t, n, r, a) {
            var i = t.forwardMotionProps,
              o = void 0 !== i && i,
              s = au(e) ? Du : Vu;
            return J(J({}, s), {
              preloadedFeatures: n,
              useRender: Cu(o),
              createVisualElement: r,
              projectionNodeConstructor: a,
              Component: e,
            });
          })(e, t, Rd, kd, _d);
        });
      var Vd = ["bsPrefix", "className", "as"],
        Id = t.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.as,
            i = void 0 === a ? "div" : a,
            o = Ie(e, Vd),
            s = Je(n, "row"),
            l = et(),
            u = "".concat(s, "-cols"),
            c = [];
          return (
            l.forEach(function (e) {
              var t,
                n = o[e];
              delete o[e],
                (t = null != n && "object" === typeof n ? n.cols : n);
              var r = "xs" !== e ? "-".concat(e) : "";
              null != t && c.push("".concat(u).concat(r, "-").concat(t));
            }),
            (0, Ze.jsx)(
              i,
              De(
                De({ ref: t }, o),
                {},
                { className: Be().apply(void 0, [r, s].concat(c)) }
              )
            )
          );
        });
      Id.displayName = "Row";
      var Fd = Id,
        Bd = ["as", "bsPrefix", "className"],
        Hd = ["className"];
      var Wd = t.forwardRef(function (e, t) {
        var n = (function (e) {
          var t = e.as,
            n = e.bsPrefix,
            r = e.className,
            a = Ie(e, Bd);
          n = Je(n, "col");
          var i = et(),
            o = [],
            s = [];
          return (
            i.forEach(function (e) {
              var t,
                r,
                i,
                l = a[e];
              delete a[e],
                "object" === typeof l && null != l
                  ? ((t = l.span), (r = l.offset), (i = l.order))
                  : (t = l);
              var u = "xs" !== e ? "-".concat(e) : "";
              t &&
                o.push(
                  !0 === t
                    ? "".concat(n).concat(u)
                    : "".concat(n).concat(u, "-").concat(t)
                ),
                null != i && s.push("order".concat(u, "-").concat(i)),
                null != r && s.push("offset".concat(u, "-").concat(r));
            }),
            [
              De(
                De({}, a),
                {},
                { className: Be().apply(void 0, [r].concat(o, s)) }
              ),
              { as: t, bsPrefix: n, spans: o },
            ]
          );
        })(e),
          r = o(n, 2),
          a = r[0],
          i = a.className,
          s = Ie(a, Hd),
          l = r[1],
          u = l.as,
          c = void 0 === u ? "div" : u,
          d = l.bsPrefix,
          f = l.spans;
        return (0,
          Ze.jsx)(c, De(De({}, s), {}, { ref: t, className: Be()(i, !f.length && d) }));
      });
      Wd.displayName = "Col";
      var Ud = Wd;
      var Gd = function () {
        return (0, Ze.jsxs)("div", {
          viewBox: "0 0 1286 339.661",
          className: "topTitle",
          children: [
            (0, Ze.jsx)("h1", {
              className: "onih1 shogun",
              children: "APTOS SHOGUN",
            })
          ],
        });
      };
      var $d = function () {
        return (0, Ze.jsx)("div", {
          className: "Hero",
          children: [
            (0, Ze.jsxs)(Mr, {
              children: [
                (0, Ze.jsxs)(Fd, {
                  children: [
                    /*
                    (0, Ze.jsx)(Ud, {
                      xs: "1",
                      sm: "1",
                      md: "1",
                      lg: "1",
                      xl: "1",
                      xxl: "1",
                      className: "justify-content-start",
                    }),
                    */
                    (0, Ze.jsx)(Ud, {
                      xs: "10",
                      sm: "10",
                      md: "10",
                      lg: "10",
                      xl: "10",
                      xxl: "10",
                      children: (0, Ze.jsx)(Gd, {}),
                    }),
                  ],
                }),
                (0, Ze.jsxs)(Fd, {
                  className: "intro",
                  children: [
                    (0, Ze.jsx)(Ud, {
                      xs: "1",
                      sm: "1",
                      md: "1",
                      lg: "1",
                      xl: "1",
                      xxl: "1",
                    }),
                    (0, Ze.jsx)(Ud, {
                      xs: "11",
                      sm: "11",
                      md: "11",
                      lg: "5",
                      xl: "5",
                      xxl: "5",
                    }),
                    (0, Ze.jsxs)(Ud, {
                      xs: "11",
                      sm: "11",
                      md: "11",
                      lg: "5",
                      xl: "5",
                      xxl: "5",
                      children: [
                        (0, Ze.jsxs)("h3", {
                          className: "onih3",
                          children: [
                            (0, Ze.jsx)("span", { children: "\u26e9\ufe0f" }),
                            " A virtual park",
                          ],
                        }),
                        (0, Ze.jsx)("h4", {
                          className: "onih4",
                          children:
                            "Influenced by the ancient chronicles of Japan, Aptos Shogun Collection is a collection of 6659 Shogun and their virtual world.",
                        }),
                      ],
                    }),
                    (0, Ze.jsx)(Ud, {
                      xs: "12",
                      sm: "12",
                      md: "12",
                      lg: "1",
                      xl: "1",
                      xxl: "1",
                    }),
                  ],
                }),
              ],
            })
          ],
        });
      },
        Yd = n.p + "static/media/nftparts.webm";
      var qd = function () {
        return (0, Ze.jsx)("div", {
          className: "oniparts",
          children: (0, Ze.jsx)(Mr, {
            children: (0, Ze.jsxs)(Fd, {
              children: [
                (0, Ze.jsx)(Ud, {
                  xs: "1",
                  sm: "1",
                  md: "1",
                  lg: "1",
                  xl: "1",
                  xxl: "1",
                  className: "justify-content-start",
                }),
                (0, Ze.jsxs)(Ud, {
                  xs: "12",
                  sm: "12",
                  md: "12",
                  lg: "10",
                  xl: "10",
                  xxl: "10",
                  className: "onipartsvideo",
                  children: [
                    (0, Ze.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1723",
                      height: "1180",
                      viewBox: "0 0 1723 1180",
                      className: "onipartsborder",
                      children: (0, Ze.jsxs)("g", {
                        fill: "none",
                        stroke: "var(--themecolour)",
                        strokeWidth: "3",
                        "data-name": "Group 310",
                        transform: "translate(1.5 1.37)",
                        children: [
                          (0, Ze.jsx)("path", {
                            d: "M0 0H1451.462V904.19H0z",
                            "data-name": "Rectangle 157",
                            transform: "translate(134.269 136.535)",
                          }),
                          (0, Ze.jsx)("path", {
                            d: "M0 0H1495.652V949.135H0z",
                            "data-name": "Rectangle 159",
                            transform: "translate(112.174 114.063)",
                          }),
                          (0, Ze.jsx)("path", {
                            d: "M0 0H1539.842V994.08H0z",
                            "data-name": "Rectangle 161",
                            transform: "translate(90.079 91.59)",
                          }),
                          (0, Ze.jsx)("path", {
                            d: "M0 0H1584V1039H0z",
                            "data-name": "Rectangle 163",
                            transform: "translate(68 69.13)",
                          }),
                          (0, Ze.jsx)("path", {
                            d: "M0 0H1628.221V1083.97H0z",
                            "data-name": "Rectangle 165",
                            transform: "translate(45.889 46.646)",
                          }),
                          (0, Ze.jsx)("path", {
                            d: "M0 0H1672.411V1128.915H0z",
                            "data-name": "Rectangle 167",
                            transform: "translate(23.794 24.172)",
                          }),
                          (0, Ze.jsx)("path", {
                            d: "M0 0H1720V1177H0z",
                            "data-name": "Rectangle 172",
                            transform: "translate(0 .13)",
                          }),
                        ],
                      }),
                    }),
                    (0, Ze.jsx)("video", {
                      src: Yd,
                      autoPlay: !0,
                      muted: !0,
                      loop: !0,
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      var Xd = function () {
        return (0, Ze.jsxs)(Mr, {
          className: "Oniintro",
          children: [
            (0, Ze.jsx)(Fd, {
              children: (0, Ze.jsx)(Ud, {
                children: (0, Ze.jsx)("div", {
                  className: "wrapper",
                  children: (0, Ze.jsxs)("div", {
                    className: "marquee",
                    children: [
                      (0, Ze.jsxs)("h1", {
                        className: "onih0",
                        children: [
                          "Experience loneliness\xa0",
                          (0, Ze.jsx)("span", {
                            className: "onih0 italic",
                            children: "together.\xa0",
                          }),
                        ],
                      }),
                      (0, Ze.jsxs)("h1", {
                        className: "onih0",
                        children: [
                          "Experience loneliness\xa0",
                          (0, Ze.jsx)("span", {
                            className: "onih0 italic",
                            children: "together.\xa0",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
            (0, Ze.jsxs)(Fd, {
              children: [
                (0, Ze.jsx)(Ud, {
                  xs: "1",
                  sm: "1",
                  md: "1",
                  lg: "2",
                  xl: "2",
                  xxl: "2",
                  className: "justify-content-start",
                }),
                (0, Ze.jsxs)(Ud, {
                  xs: "12",
                  sm: "12",
                  md: "12",
                  lg: "8",
                  xl: "8",
                  xxl: "8",
                  children: [
                    (0, Ze.jsx)("h4", {
                      className: "onih4",
                      children:
                        "We are here for building. First Oriental Collection on Aptos Chain ",
                    }),
                    (0, Ze.jsx)("h3", {
                      className: "onih3",
                      children:
                        "Aptos Blockchain is the new Meta, and we will bring value with our ecosystem",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var Zd = function () {
        return (0, Ze.jsx)("div", {
          className: "onitypes",
          children: (0, Ze.jsx)(Mr, {
            children: (0, Ze.jsxs)(Fd, {
              children: [
                (0, Ze.jsxs)(Ud, {
                  xs: "12",
                  sm: "12",
                  md: "12",
                  lg: "10",
                  xl: "10",
                  xxl: "10",
                  className: "onitypesholder",
                  children: [
                    (0, Ze.jsxs)("ul", {
                      children: [
                        (0, Ze.jsxs)("li", {
                          children: [
                            (0, Ze.jsx)("h2", {
                              className: "onih2 noWrap",
                              children: "Soul Stealer",
                            }),
                            (0, Ze.jsx)("span", {}),
                            (0, Ze.jsx)("h2", {
                              className: "onih2 noWrap",
                              children: "Warlord",
                            }),
                          ],
                        }),
                        (0, Ze.jsxs)("li", {
                          children: [
                            (0, Ze.jsx)("h2", {
                              className: "onih2 noWrap",
                              children: "The Shadow",
                            }),
                            (0, Ze.jsx)("span", {}),
                            (0, Ze.jsx)("h2", {
                              className: "onih2 noWrap",
                              children: "Assassin",
                            }),
                          ],
                        }),
                        (0, Ze.jsxs)("li", {
                          children: [
                            (0, Ze.jsx)("h2", {
                              className: "onih2 noWrap",
                              children: "Silenced",
                            }),
                            (0, Ze.jsx)("span", {}),
                            (0, Ze.jsx)("h2", {
                              className: "onih2 noWrap",
                              children: "Almighty",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Ze.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1720",
                      height: "894.047",
                      viewBox: "0 0 1720 894.047",
                      className: "onitypesbg",
                      children: (0, Ze.jsxs)("g", {
                        "data-name": "Group 294",
                        children: [
                          (0, Ze.jsx)("path", {
                            d: "M0 0v894.047h243.141l325.486-325.42V325.486L243.141 0z",
                            "data-name": "Path 199",
                          }),
                          (0, Ze.jsx)("path", {
                            d: "M383.608 0v894.047L709.1 568.627V325.486z",
                            "data-name": "Path 200",
                            transform: "translate(322.396)",
                          }),
                          (0, Ze.jsx)("path", {
                            d: "M649.169 0v894.047L890.5 568.627V325.486z",
                            "data-name": "Path 201",
                            transform: "translate(545.582)",
                          }),
                          (0, Ze.jsx)("path", {
                            d: "M869 0v894.047l120.661-325.42V325.486z",
                            "data-name": "Path 202",
                            transform: "translate(730.337)",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      function Qd(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function Kd() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(t).forEach(function (n) {
          "undefined" === typeof e[n]
            ? (e[n] = t[n])
            : Qd(t[n]) &&
            Qd(e[n]) &&
            Object.keys(t[n]).length > 0 &&
            Kd(e[n], t[n]);
        });
      }
      var Jd = {
        body: {},
        addEventListener: function () { },
        removeEventListener: function () { },
        activeElement: { blur: function () { }, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () { } };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () { },
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function ef() {
        var e = "undefined" !== typeof document ? document : {};
        return Kd(e, Jd), e;
      }
      var tf = {
        document: Jd,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: {
          replaceState: function () { },
          pushState: function () { },
          go: function () { },
          back: function () { },
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () { },
        removeEventListener: function () { },
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () { },
        Date: function () { },
        screen: {},
        setTimeout: function () { },
        clearTimeout: function () { },
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return "undefined" === typeof setTimeout
            ? (e(), null)
            : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function nf() {
        var e = "undefined" !== typeof window ? window : {};
        return Kd(e, tf), e;
      }
      function rf(e, t, n) {
        return (
          (rf = rr()
            ? Reflect.construct
            : function (e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var a = new (Function.bind.apply(e, r))();
              return n && ht(a, n.prototype), a;
            }),
          rf.apply(null, arguments)
        );
      }
      function af(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (af = function (e) {
            if (
              null === e ||
              ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return rf(e, arguments, Jn(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              ht(r, e)
            );
          }),
          af(e)
        );
      }
      var of = (function (e) {
        nr(n, e);
        var t = sr(n);
        function n(e) {
          var r;
          return (
            fn(this, n),
            "number" === typeof e
              ? (r = t.call(this, e))
              : (function (e) {
                var t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: function () {
                    return t;
                  },
                  set: function (e) {
                    t.__proto__ = e;
                  },
                });
              })(ir((r = t.call.apply(t, [this].concat(dn(e || [])))))),
            or(r)
          );
        }
        return hn(n);
      })(af(Array));
      function sf() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = [];
        return (
          e.forEach(function (e) {
            Array.isArray(e) ? t.push.apply(t, dn(sf(e))) : t.push(e);
          }),
          t
        );
      }
      function lf(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function uf(e, t) {
        var n = nf(),
          r = ef(),
          a = [];
        if (!t && e instanceof of) return e;
        if (!e) return new of(a);
        if ("string" === typeof e) {
          var i = e.trim();
          if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
            var o = "div";
            0 === i.indexOf("<li") && (o = "ul"),
              0 === i.indexOf("<tr") && (o = "tbody"),
              (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (o = "tr"),
              0 === i.indexOf("<tbody") && (o = "table"),
              0 === i.indexOf("<option") && (o = "select");
            var s = r.createElement(o);
            s.innerHTML = i;
            for (var l = 0; l < s.childNodes.length; l += 1)
              a.push(s.childNodes[l]);
          } else
            a = (function (e, t) {
              if ("string" !== typeof e) return [e];
              for (
                var n = [], r = t.querySelectorAll(e), a = 0;
                a < r.length;
                a += 1
              )
                n.push(r[a]);
              return n;
            })(e.trim(), t || r);
        } else if (e.nodeType || e === n || e === r) a.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof of) return e;
          a = e;
        }
        return new of(
          (function (e) {
            for (var t = [], n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(a)
        );
      }
      uf.fn = of.prototype;
      var cf = "resize scroll".split(" ");
      function df(e) {
        return function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          if ("undefined" === typeof n[0]) {
            for (var a = 0; a < this.length; a += 1)
              cf.indexOf(e) < 0 &&
                (e in this[a] ? this[a][e]() : uf(this[a]).trigger(e));
            return this;
          }
          return this.on.apply(this, [e].concat(n));
        };
      }
      df("click"),
        df("blur"),
        df("focus"),
        df("focusin"),
        df("focusout"),
        df("keyup"),
        df("keydown"),
        df("keypress"),
        df("submit"),
        df("change"),
        df("mousedown"),
        df("mousemove"),
        df("mouseup"),
        df("mouseenter"),
        df("mouseleave"),
        df("mouseout"),
        df("mouseover"),
        df("touchstart"),
        df("touchend"),
        df("touchmove"),
        df("resize"),
        df("scroll");
      var ff = {
        addClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = sf(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).add.apply(t, dn(r));
            }),
            this
          );
        },
        removeClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = sf(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).remove.apply(t, dn(r));
            }),
            this
          );
        },
        hasClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = sf(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            lf(this, function (e) {
              return (
                r.filter(function (t) {
                  return e.classList.contains(t);
                }).length > 0
              );
            }).length > 0
          );
        },
        toggleClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = sf(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          this.forEach(function (e) {
            r.forEach(function (t) {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" === typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (var r in e)
                (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (var t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" !== typeof e ? "".concat(e, "ms") : e;
          return this;
        },
        on: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            a = t[1],
            i = t[2],
            o = t[3];
          function s(e) {
            var t = e.target;
            if (t) {
              var n = e.target.dom7EventData || [];
              if ((n.indexOf(e) < 0 && n.unshift(e), uf(t).is(a)))
                i.apply(t, n);
              else
                for (var r = uf(t).parents(), o = 0; o < r.length; o += 1)
                  uf(r[o]).is(a) && i.apply(r[o], n);
            }
          }
          function l(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" === typeof t[1] &&
            ((r = t[0]), (i = t[1]), (o = t[2]), (a = void 0)),
            o || (o = !1);
          for (var u, c = r.split(" "), d = 0; d < this.length; d += 1) {
            var f = this[d];
            if (a)
              for (u = 0; u < c.length; u += 1) {
                var p = c[u];
                f.dom7LiveListeners || (f.dom7LiveListeners = {}),
                  f.dom7LiveListeners[p] || (f.dom7LiveListeners[p] = []),
                  f.dom7LiveListeners[p].push({
                    listener: i,
                    proxyListener: s,
                  }),
                  f.addEventListener(p, s, o);
              }
            else
              for (u = 0; u < c.length; u += 1) {
                var h = c[u];
                f.dom7Listeners || (f.dom7Listeners = {}),
                  f.dom7Listeners[h] || (f.dom7Listeners[h] = []),
                  f.dom7Listeners[h].push({ listener: i, proxyListener: l }),
                  f.addEventListener(h, l, o);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            a = t[1],
            i = t[2],
            o = t[3];
          "function" === typeof t[1] &&
            ((r = t[0]), (i = t[1]), (o = t[2]), (a = void 0)),
            o || (o = !1);
          for (var s = r.split(" "), l = 0; l < s.length; l += 1)
            for (var u = s[l], c = 0; c < this.length; c += 1) {
              var d = this[c],
                f = void 0;
              if (
                (!a && d.dom7Listeners
                  ? (f = d.dom7Listeners[u])
                  : a && d.dom7LiveListeners && (f = d.dom7LiveListeners[u]),
                  f && f.length)
              )
                for (var p = f.length - 1; p >= 0; p -= 1) {
                  var h = f[p];
                  (i && h.listener === i) ||
                    (i &&
                      h.listener &&
                      h.listener.dom7proxy &&
                      h.listener.dom7proxy === i)
                    ? (d.removeEventListener(u, h.proxyListener, o),
                      f.splice(p, 1))
                    : i ||
                    (d.removeEventListener(u, h.proxyListener, o),
                      f.splice(p, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (
            var e = nf(), t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          for (var a = n[0].split(" "), i = n[1], o = 0; o < a.length; o += 1)
            for (var s = a[o], l = 0; l < this.length; l += 1) {
              var u = this[l];
              if (e.CustomEvent) {
                var c = new e.CustomEvent(s, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (u.dom7EventData = n.filter(function (e, t) {
                  return t > 0;
                })),
                  u.dispatchEvent(c),
                  (u.dom7EventData = []),
                  delete u.dom7EventData;
              }
            }
          return this;
        },
        transitionEnd: function (e) {
          var t = this;
          return (
            e &&
            t.on("transitionend", function n(r) {
              r.target === this &&
                (e.call(this, r), t.off("transitionend", n));
            }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          var e = nf();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            var e = nf(),
              t = ef(),
              n = this[0],
              r = n.getBoundingClientRect(),
              a = t.body,
              i = n.clientTop || a.clientTop || 0,
              o = n.clientLeft || a.clientLeft || 0,
              s = n === e ? e.scrollY : n.scrollTop,
              l = n === e ? e.scrollX : n.scrollLeft;
            return { top: r.top + s - i, left: r.left + l - o };
          }
          return null;
        },
        css: function (e, t) {
          var n,
            r = nf();
          if (1 === arguments.length) {
            if ("string" !== typeof e) {
              for (n = 0; n < this.length; n += 1)
                for (var a in e) this[n].style[a] = e[a];
              return this;
            }
            if (this[0])
              return r.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" === typeof e) {
            for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach(function (t, n) {
              e.apply(t, [t, n]);
            }),
              this)
            : this;
        },
        html: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].innerHTML : null;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
            n,
            r = nf(),
            a = ef(),
            i = this[0];
          if (!i || "undefined" === typeof e) return !1;
          if ("string" === typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (t = uf(e), n = 0; n < t.length; n += 1)
              if (t[n] === i) return !0;
            return !1;
          }
          if (e === a) return i === a;
          if (e === r) return i === r;
          if (e.nodeType || e instanceof of) {
            for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
              if (t[n] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling);)
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if ("undefined" === typeof e) return this;
          var t = this.length;
          if (e > t - 1) return uf([]);
          if (e < 0) {
            var n = t + e;
            return uf(n < 0 ? [] : [this[n]]);
          }
          return uf([this[e]]);
        },
        append: function () {
          for (var e, t = ef(), n = 0; n < arguments.length; n += 1) {
            e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            for (var r = 0; r < this.length; r += 1)
              if ("string" === typeof e) {
                var a = t.createElement("div");
                for (a.innerHTML = e; a.firstChild;)
                  this[r].appendChild(a.firstChild);
              } else if (e instanceof of)
                for (var i = 0; i < e.length; i += 1) this[r].appendChild(e[i]);
              else this[r].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var t,
            n,
            r = ef();
          for (t = 0; t < this.length; t += 1)
            if ("string" === typeof e) {
              var a = r.createElement("div");
              for (a.innerHTML = e, n = a.childNodes.length - 1; n >= 0; n -= 1)
                this[t].insertBefore(a.childNodes[n], this[t].childNodes[0]);
            } else if (e instanceof of)
              for (n = 0; n < e.length; n += 1)
                this[t].insertBefore(e[n], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                uf(this[0].nextElementSibling).is(e)
                ? uf([this[0].nextElementSibling])
                : uf([])
              : this[0].nextElementSibling
                ? uf([this[0].nextElementSibling])
                : uf([])
            : uf([]);
        },
        nextAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return uf([]);
          for (; n.nextElementSibling;) {
            var r = n.nextElementSibling;
            e ? uf(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return uf(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            var t = this[0];
            return e
              ? t.previousElementSibling && uf(t.previousElementSibling).is(e)
                ? uf([t.previousElementSibling])
                : uf([])
              : t.previousElementSibling
                ? uf([t.previousElementSibling])
                : uf([]);
          }
          return uf([]);
        },
        prevAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return uf([]);
          for (; n.previousElementSibling;) {
            var r = n.previousElementSibling;
            e ? uf(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return uf(t);
        },
        parent: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? uf(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return uf(t);
        },
        parents: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].parentNode; r;)
              e ? uf(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
          return uf(t);
        },
        closest: function (e) {
          var t = this;
          return "undefined" === typeof e
            ? uf([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (
              var r = this[n].querySelectorAll(e), a = 0;
              a < r.length;
              a += 1
            )
              t.push(r[a]);
          return uf(t);
        },
        children: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].children, a = 0; a < r.length; a += 1)
              (e && !uf(r[a]).is(e)) || t.push(r[a]);
          return uf(t);
        },
        filter: function (e) {
          return uf(lf(this, e));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(ff).forEach(function (e) {
        Object.defineProperty(uf.fn, e, { value: ff[e], writable: !0 });
      });
      var pf,
        hf,
        vf,
        mf = uf;
      function gf(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function yf() {
        return Date.now();
      }
      function bf(e, t) {
        void 0 === t && (t = "x");
        var n,
          r,
          a,
          i = nf(),
          o = (function (e) {
            var t,
              n = nf();
            return (
              n.getComputedStyle && (t = n.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          i.WebKitCSSMatrix
            ? ((r = o.transform || o.webkitTransform).split(",").length > 6 &&
              (r = r
                .split(", ")
                .map(function (e) {
                  return e.replace(",", ".");
                })
                .join(", ")),
              (a = new i.WebKitCSSMatrix("none" === r ? "" : r)))
            : (n = (a =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,"))
              .toString()
              .split(",")),
          "x" === t &&
          (r = i.WebKitCSSMatrix
            ? a.m41
            : 16 === n.length
              ? parseFloat(n[12])
              : parseFloat(n[4])),
          "y" === t &&
          (r = i.WebKitCSSMatrix
            ? a.m42
            : 16 === n.length
              ? parseFloat(n[13])
              : parseFloat(n[5])),
          r || 0
        );
      }
      function xf(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function wf(e) {
        return "undefined" !== typeof window &&
          "undefined" !== typeof window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function Ef() {
        for (
          var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"],
          n = 1;
          n < arguments.length;
          n += 1
        ) {
          var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (void 0 !== r && null !== r && !wf(r))
            for (
              var a = Object.keys(Object(r)).filter(function (e) {
                return t.indexOf(e) < 0;
              }),
              i = 0,
              o = a.length;
              i < o;
              i += 1
            ) {
              var s = a[i],
                l = Object.getOwnPropertyDescriptor(r, s);
              void 0 !== l &&
                l.enumerable &&
                (xf(e[s]) && xf(r[s])
                  ? r[s].__swiper__
                    ? (e[s] = r[s])
                    : Ef(e[s], r[s])
                  : !xf(e[s]) && xf(r[s])
                    ? ((e[s] = {}),
                      r[s].__swiper__ ? (e[s] = r[s]) : Ef(e[s], r[s]))
                    : (e[s] = r[s]));
            }
        }
        return e;
      }
      function Sf(e, t, n) {
        e.style.setProperty(t, n);
      }
      function Cf(e) {
        var t,
          n = e.swiper,
          r = e.targetPosition,
          a = e.side,
          i = nf(),
          o = -n.translate,
          s = null,
          l = n.params.speed;
        (n.wrapperEl.style.scrollSnapType = "none"),
          i.cancelAnimationFrame(n.cssModeFrameID);
        var u = r > o ? "next" : "prev",
          c = function (e, t) {
            return ("next" === u && e >= t) || ("prev" === u && e <= t);
          };
        !(function e() {
          (t = new Date().getTime()), null === s && (s = t);
          var u = Math.max(Math.min((t - s) / l, 1), 0),
            d = 0.5 - Math.cos(u * Math.PI) / 2,
            f = o + d * (r - o);
          if ((c(f, r) && (f = r), n.wrapperEl.scrollTo(_e({}, a, f)), c(f, r)))
            return (
              (n.wrapperEl.style.overflow = "hidden"),
              (n.wrapperEl.style.scrollSnapType = ""),
              setTimeout(function () {
                (n.wrapperEl.style.overflow = ""),
                  n.wrapperEl.scrollTo(_e({}, a, f));
              }),
              void i.cancelAnimationFrame(n.cssModeFrameID)
            );
          n.cssModeFrameID = i.requestAnimationFrame(e);
        })();
      }
      function kf() {
        return (
          pf ||
          (pf = (function () {
            var e = nf(),
              t = ef();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                var t = !1;
                try {
                  var n = Object.defineProperty({}, "passive", {
                    get: function () {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, n);
                } catch (Gp) { }
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
          pf
        );
      }
      function Tf(e) {
        return (
          void 0 === e && (e = {}),
          hf ||
          (hf = (function (e) {
            var t = (void 0 === e ? {} : e).userAgent,
              n = kf(),
              r = nf(),
              a = r.navigator.platform,
              i = t || r.navigator.userAgent,
              o = { ios: !1, android: !1 },
              s = r.screen.width,
              l = r.screen.height,
              u = i.match(/(Android);?[\s\/]+([\d.]+)?/),
              c = i.match(/(iPad).*OS\s([\d_]+)/),
              d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
              f = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              p = "Win32" === a,
              h = "MacIntel" === a;
            return (
              !c &&
              h &&
              n.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf("".concat(s, "x").concat(l)) >= 0 &&
              ((c = i.match(/(Version)\/([\d.]+)/)) ||
                (c = [0, 1, "13_0_0"]),
                (h = !1)),
              u && !p && ((o.os = "android"), (o.android = !0)),
              (c || f || d) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
          hf
        );
      }
      function Pf() {
        return (
          vf ||
          (vf = (function () {
            var e = nf();
            return {
              isSafari: (function () {
                var t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
          vf
        );
      }
      var jf = {
        on: function (e, t, n) {
          var r = this;
          if ("function" !== typeof t) return r;
          var a = n ? "unshift" : "push";
          return (
            e.split(" ").forEach(function (e) {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][a](t);
            }),
            r
          );
        },
        once: function (e, t, n) {
          var r = this;
          if ("function" !== typeof t) return r;
          function a() {
            r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
              i[o] = arguments[o];
            t.apply(r, i);
          }
          return (a.__emitterProxy = t), r.on(e, a, n);
        },
        onAny: function (e, t) {
          var n = this;
          if ("function" !== typeof e) return n;
          var r = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          );
        },
        offAny: function (e) {
          var t = this;
          if (!t.eventsAnyListeners) return t;
          var n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off: function (e, t) {
          var n = this;
          return n.eventsListeners
            ? (e.split(" ").forEach(function (e) {
              "undefined" === typeof t
                ? (n.eventsListeners[e] = [])
                : n.eventsListeners[e] &&
                n.eventsListeners[e].forEach(function (r, a) {
                  (r === t ||
                    (r.__emitterProxy && r.__emitterProxy === t)) &&
                    n.eventsListeners[e].splice(a, 1);
                });
            }),
              n)
            : n;
        },
        emit: function () {
          var e,
            t,
            n,
            r = this;
          if (!r.eventsListeners) return r;
          for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
            i[o] = arguments[o];
          "string" === typeof i[0] || Array.isArray(i[0])
            ? ((e = i[0]), (t = i.slice(1, i.length)), (n = r))
            : ((e = i[0].events), (t = i[0].data), (n = i[0].context || r)),
            t.unshift(n);
          var s = Array.isArray(e) ? e : e.split(" ");
          return (
            s.forEach(function (e) {
              r.eventsAnyListeners &&
                r.eventsAnyListeners.length &&
                r.eventsAnyListeners.forEach(function (r) {
                  r.apply(n, [e].concat(dn(t)));
                }),
                r.eventsListeners &&
                r.eventsListeners[e] &&
                r.eventsListeners[e].forEach(function (e) {
                  e.apply(n, t);
                });
            }),
            r
          );
        },
      };
      var Of = {
        updateSize: function () {
          var e,
            t,
            n = this,
            r = n.$el;
          (e =
            "undefined" !== typeof n.params.width && null !== n.params.width
              ? n.params.width
              : r[0].clientWidth),
            (t =
              "undefined" !== typeof n.params.height && null !== n.params.height
                ? n.params.height
                : r[0].clientHeight),
            (0 === e && n.isHorizontal()) ||
            (0 === t && n.isVertical()) ||
            ((e =
              e -
              parseInt(r.css("padding-left") || 0, 10) -
              parseInt(r.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(r.css("padding-top") || 0, 10) -
                parseInt(r.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              Object.assign(n, {
                width: e,
                height: t,
                size: n.isHorizontal() ? e : t,
              }));
        },
        updateSlides: function () {
          var e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          var r = e.params,
            a = e.$wrapperEl,
            i = e.size,
            o = e.rtlTranslate,
            s = e.wrongRTL,
            l = e.virtual && r.virtual.enabled,
            u = l ? e.virtual.slides.length : e.slides.length,
            c = a.children(".".concat(e.params.slideClass)),
            d = l ? e.virtual.slides.length : c.length,
            f = [],
            p = [],
            h = [],
            v = r.slidesOffsetBefore;
          "function" === typeof v && (v = r.slidesOffsetBefore.call(e));
          var m = r.slidesOffsetAfter;
          "function" === typeof m && (m = r.slidesOffsetAfter.call(e));
          var g = e.snapGrid.length,
            y = e.slidesGrid.length,
            b = r.spaceBetween,
            x = -v,
            w = 0,
            E = 0;
          if ("undefined" !== typeof i) {
            "string" === typeof b &&
              b.indexOf("%") >= 0 &&
              (b = (parseFloat(b.replace("%", "")) / 100) * i),
              (e.virtualSize = -b),
              o
                ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              r.centeredSlides &&
              r.cssMode &&
              (Sf(e.wrapperEl, "--swiper-centered-offset-before", ""),
                Sf(e.wrapperEl, "--swiper-centered-offset-after", ""));
            var S,
              C = r.grid && r.grid.rows > 1 && e.grid;
            C && e.grid.initSlides(d);
            for (
              var k =
                "auto" === r.slidesPerView &&
                r.breakpoints &&
                Object.keys(r.breakpoints).filter(function (e) {
                  return (
                    "undefined" !== typeof r.breakpoints[e].slidesPerView
                  );
                }).length > 0,
              T = 0;
              T < d;
              T += 1
            ) {
              S = 0;
              var P = c.eq(T);
              if (
                (C && e.grid.updateSlide(T, P, d, t),
                  "none" !== P.css("display"))
              ) {
                if ("auto" === r.slidesPerView) {
                  k && (c[T].style[t("width")] = "");
                  var j = getComputedStyle(P[0]),
                    O = P[0].style.transform,
                    M = P[0].style.webkitTransform;
                  if (
                    (O && (P[0].style.transform = "none"),
                      M && (P[0].style.webkitTransform = "none"),
                      r.roundLengths)
                  )
                    S = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                  else {
                    var N = n(j, "width"),
                      L = n(j, "padding-left"),
                      A = n(j, "padding-right"),
                      z = n(j, "margin-left"),
                      _ = n(j, "margin-right"),
                      R = j.getPropertyValue("box-sizing");
                    if (R && "border-box" === R) S = N + z + _;
                    else {
                      var D = P[0],
                        V = D.clientWidth;
                      S = N + L + A + z + _ + (D.offsetWidth - V);
                    }
                  }
                  O && (P[0].style.transform = O),
                    M && (P[0].style.webkitTransform = M),
                    r.roundLengths && (S = Math.floor(S));
                } else
                  (S = (i - (r.slidesPerView - 1) * b) / r.slidesPerView),
                    r.roundLengths && (S = Math.floor(S)),
                    c[T] && (c[T].style[t("width")] = "".concat(S, "px"));
                c[T] && (c[T].swiperSlideSize = S),
                  h.push(S),
                  r.centeredSlides
                    ? ((x = x + S / 2 + w / 2 + b),
                      0 === w && 0 !== T && (x = x - i / 2 - b),
                      0 === T && (x = x - i / 2 - b),
                      Math.abs(x) < 0.001 && (x = 0),
                      r.roundLengths && (x = Math.floor(x)),
                      E % r.slidesPerGroup === 0 && f.push(x),
                      p.push(x))
                    : (r.roundLengths && (x = Math.floor(x)),
                      (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                      e.params.slidesPerGroup ===
                      0 && f.push(x),
                      p.push(x),
                      (x = x + S + b)),
                  (e.virtualSize += S + b),
                  (w = S),
                  (E += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, i) + m),
                o &&
                s &&
                ("slide" === r.effect || "coverflow" === r.effect) &&
                a.css({
                  width: "".concat(e.virtualSize + r.spaceBetween, "px"),
                }),
                r.setWrapperSize &&
                a.css(
                  _e(
                    {},
                    t("width"),
                    "".concat(e.virtualSize + r.spaceBetween, "px")
                  )
                ),
                C && e.grid.updateWrapperSize(S, f, t),
                !r.centeredSlides)
            ) {
              for (var I = [], F = 0; F < f.length; F += 1) {
                var B = f[F];
                r.roundLengths && (B = Math.floor(B)),
                  f[F] <= e.virtualSize - i && I.push(B);
              }
              (f = I),
                Math.floor(e.virtualSize - i) - Math.floor(f[f.length - 1]) >
                1 && f.push(e.virtualSize - i);
            }
            if ((0 === f.length && (f = [0]), 0 !== r.spaceBetween)) {
              var H = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
              c.filter(function (e, t) {
                return !r.cssMode || t !== c.length - 1;
              }).css(_e({}, H, "".concat(b, "px")));
            }
            if (r.centeredSlides && r.centeredSlidesBounds) {
              var W = 0;
              h.forEach(function (e) {
                W += e + (r.spaceBetween ? r.spaceBetween : 0);
              });
              var U = (W -= r.spaceBetween) - i;
              f = f.map(function (e) {
                return e < 0 ? -v : e > U ? U + m : e;
              });
            }
            if (r.centerInsufficientSlides) {
              var G = 0;
              if (
                (h.forEach(function (e) {
                  G += e + (r.spaceBetween ? r.spaceBetween : 0);
                }),
                  (G -= r.spaceBetween) < i)
              ) {
                var $ = (i - G) / 2;
                f.forEach(function (e, t) {
                  f[t] = e - $;
                }),
                  p.forEach(function (e, t) {
                    p[t] = e + $;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: c,
                snapGrid: f,
                slidesGrid: p,
                slidesSizesGrid: h,
              }),
                r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
            ) {
              Sf(
                e.wrapperEl,
                "--swiper-centered-offset-before",
                "".concat(-f[0], "px")
              ),
                Sf(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  "".concat(e.size / 2 - h[h.length - 1] / 2, "px")
                );
              var Y = -e.snapGrid[0],
                q = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map(function (e) {
                return e + Y;
              })),
                (e.slidesGrid = e.slidesGrid.map(function (e) {
                  return e + q;
                }));
            }
            if (
              (d !== u && e.emit("slidesLengthChange"),
                f.length !== g &&
                (e.params.watchOverflow && e.checkOverflow(),
                  e.emit("snapGridLengthChange")),
                p.length !== y && e.emit("slidesGridLengthChange"),
                r.watchSlidesProgress && e.updateSlidesOffset(),
                !l && !r.cssMode && ("slide" === r.effect || "fade" === r.effect))
            ) {
              var X = "".concat(r.containerModifierClass, "backface-hidden"),
                Z = e.$el.hasClass(X);
              d <= r.maxBackfaceHiddenSlides
                ? Z || e.$el.addClass(X)
                : Z && e.$el.removeClass(X);
            }
          }
        },
        updateAutoHeight: function (e) {
          var t,
            n = this,
            r = [],
            a = n.virtual && n.params.virtual.enabled,
            i = 0;
          "number" === typeof e
            ? n.setTransition(e)
            : !0 === e && n.setTransition(n.params.speed);
          var o = function (e) {
            return a
              ? n.slides.filter(function (t) {
                return (
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                  e
                );
              })[0]
              : n.slides.eq(e)[0];
          };
          if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
            if (n.params.centeredSlides)
              n.visibleSlides.each(function (e) {
                r.push(e);
              });
            else
              for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                var s = n.activeIndex + t;
                if (s > n.slides.length && !a) break;
                r.push(o(s));
              }
          else r.push(o(n.activeIndex));
          for (t = 0; t < r.length; t += 1)
            if ("undefined" !== typeof r[t]) {
              var l = r[t].offsetHeight;
              i = l > i ? l : i;
            }
          (i || 0 === i) && n.$wrapperEl.css("height", "".concat(i, "px"));
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            n = t.params,
            r = t.slides,
            a = t.rtlTranslate,
            i = t.snapGrid;
          if (0 !== r.length) {
            "undefined" === typeof r[0].swiperSlideOffset &&
              t.updateSlidesOffset();
            var o = -e;
            a && (o = e),
              r.removeClass(n.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var s = 0; s < r.length; s += 1) {
              var l = r[s],
                u = l.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
              var c =
                (o + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                (l.swiperSlideSize + n.spaceBetween),
                d =
                  (o - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                  (l.swiperSlideSize + n.spaceBetween),
                f = -(o - u),
                p = f + t.slidesSizesGrid[s];
              ((f >= 0 && f < t.size - 1) ||
                (p > 1 && p <= t.size) ||
                (f <= 0 && p >= t.size)) &&
                (t.visibleSlides.push(l),
                  t.visibleSlidesIndexes.push(s),
                  r.eq(s).addClass(n.slideVisibleClass)),
                (l.progress = a ? -c : c),
                (l.originalProgress = a ? -d : d);
            }
            t.visibleSlides = mf(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if ("undefined" === typeof e) {
            var n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          var r = t.params,
            a = t.maxTranslate() - t.minTranslate(),
            i = t.progress,
            o = t.isBeginning,
            s = t.isEnd,
            l = o,
            u = s;
          0 === a
            ? ((i = 0), (o = !0), (s = !0))
            : ((o = (i = (e - t.minTranslate()) / a) <= 0), (s = i >= 1)),
            Object.assign(t, { progress: i, isBeginning: o, isEnd: s }),
            (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
            t.updateSlidesProgress(e),
            o && !l && t.emit("reachBeginning toEdge"),
            s && !u && t.emit("reachEnd toEdge"),
            ((l && !o) || (u && !s)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            n = t.slides,
            r = t.params,
            a = t.$wrapperEl,
            i = t.activeIndex,
            o = t.realIndex,
            s = t.virtual && r.virtual.enabled;
          n.removeClass(
            ""
              .concat(r.slideActiveClass, " ")
              .concat(r.slideNextClass, " ")
              .concat(r.slidePrevClass, " ")
              .concat(r.slideDuplicateActiveClass, " ")
              .concat(r.slideDuplicateNextClass, " ")
              .concat(r.slideDuplicatePrevClass)
          ),
            (e = s
              ? t.$wrapperEl.find(
                "."
                  .concat(r.slideClass, '[data-swiper-slide-index="')
                  .concat(i, '"]')
              )
              : n.eq(i)).addClass(r.slideActiveClass),
            r.loop &&
            (e.hasClass(r.slideDuplicateClass)
              ? a
                .children(
                  "."
                    .concat(r.slideClass, ":not(.")
                    .concat(
                      r.slideDuplicateClass,
                      ')[data-swiper-slide-index="'
                    )
                    .concat(o, '"]')
                )
                .addClass(r.slideDuplicateActiveClass)
              : a
                .children(
                  "."
                    .concat(r.slideClass, ".")
                    .concat(
                      r.slideDuplicateClass,
                      '[data-swiper-slide-index="'
                    )
                    .concat(o, '"]')
                )
                .addClass(r.slideDuplicateActiveClass));
          var l = e
            .nextAll(".".concat(r.slideClass))
            .eq(0)
            .addClass(r.slideNextClass);
          r.loop && 0 === l.length && (l = n.eq(0)).addClass(r.slideNextClass);
          var u = e
            .prevAll(".".concat(r.slideClass))
            .eq(0)
            .addClass(r.slidePrevClass);
          r.loop && 0 === u.length && (u = n.eq(-1)).addClass(r.slidePrevClass),
            r.loop &&
            (l.hasClass(r.slideDuplicateClass)
              ? a
                .children(
                  "."
                    .concat(r.slideClass, ":not(.")
                    .concat(
                      r.slideDuplicateClass,
                      ')[data-swiper-slide-index="'
                    )
                    .concat(l.attr("data-swiper-slide-index"), '"]')
                )
                .addClass(r.slideDuplicateNextClass)
              : a
                .children(
                  "."
                    .concat(r.slideClass, ".")
                    .concat(
                      r.slideDuplicateClass,
                      '[data-swiper-slide-index="'
                    )
                    .concat(l.attr("data-swiper-slide-index"), '"]')
                )
                .addClass(r.slideDuplicateNextClass),
              u.hasClass(r.slideDuplicateClass)
                ? a
                  .children(
                    "."
                      .concat(r.slideClass, ":not(.")
                      .concat(
                        r.slideDuplicateClass,
                        ')[data-swiper-slide-index="'
                      )
                      .concat(u.attr("data-swiper-slide-index"), '"]')
                  )
                  .addClass(r.slideDuplicatePrevClass)
                : a
                  .children(
                    "."
                      .concat(r.slideClass, ".")
                      .concat(
                        r.slideDuplicateClass,
                        '[data-swiper-slide-index="'
                      )
                      .concat(u.attr("data-swiper-slide-index"), '"]')
                  )
                  .addClass(r.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            n = this,
            r = n.rtlTranslate ? n.translate : -n.translate,
            a = n.slidesGrid,
            i = n.snapGrid,
            o = n.params,
            s = n.activeIndex,
            l = n.realIndex,
            u = n.snapIndex,
            c = e;
          if ("undefined" === typeof c) {
            for (var d = 0; d < a.length; d += 1)
              "undefined" !== typeof a[d + 1]
                ? r >= a[d] && r < a[d + 1] - (a[d + 1] - a[d]) / 2
                  ? (c = d)
                  : r >= a[d] && r < a[d + 1] && (c = d + 1)
                : r >= a[d] && (c = d);
            o.normalizeSlideIndex &&
              (c < 0 || "undefined" === typeof c) &&
              (c = 0);
          }
          if (i.indexOf(r) >= 0) t = i.indexOf(r);
          else {
            var f = Math.min(o.slidesPerGroupSkip, c);
            t = f + Math.floor((c - f) / o.slidesPerGroup);
          }
          if ((t >= i.length && (t = i.length - 1), c !== s)) {
            var p = parseInt(
              n.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            Object.assign(n, {
              snapIndex: t,
              realIndex: p,
              previousIndex: s,
              activeIndex: c,
            }),
              n.emit("activeIndexChange"),
              n.emit("snapIndexChange"),
              l !== p && n.emit("realIndexChange"),
              (n.initialized || n.params.runCallbacksOnInit) &&
              n.emit("slideChange");
          } else t !== u && ((n.snapIndex = t), n.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t,
            n = this,
            r = n.params,
            a = mf(e).closest(".".concat(r.slideClass))[0],
            i = !1;
          if (a)
            for (var o = 0; o < n.slides.length; o += 1)
              if (n.slides[o] === a) {
                (i = !0), (t = o);
                break;
              }
          if (!a || !i)
            return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = a),
            n.virtual && n.params.virtual.enabled
              ? (n.clickedIndex = parseInt(
                mf(a).attr("data-swiper-slide-index"),
                10
              ))
              : (n.clickedIndex = t),
            r.slideToClickedSlide &&
            void 0 !== n.clickedIndex &&
            n.clickedIndex !== n.activeIndex &&
            n.slideToClickedSlide();
        },
      };
      var Mf = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this,
            n = t.params,
            r = t.rtlTranslate,
            a = t.translate,
            i = t.$wrapperEl;
          if (n.virtualTranslate) return r ? -a : a;
          if (n.cssMode) return a;
          var o = bf(i[0], e);
          return r && (o = -o), o || 0;
        },
        setTranslate: function (e, t) {
          var n = this,
            r = n.rtlTranslate,
            a = n.params,
            i = n.$wrapperEl,
            o = n.wrapperEl,
            s = n.progress,
            l = 0,
            u = 0;
          n.isHorizontal() ? (l = r ? -e : e) : (u = e),
            a.roundLengths && ((l = Math.floor(l)), (u = Math.floor(u))),
            a.cssMode
              ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                n.isHorizontal() ? -l : -u)
              : a.virtualTranslate ||
              i.transform(
                "translate3d("
                  .concat(l, "px, ")
                  .concat(u, "px, ")
                  .concat(0, "px)")
              ),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? l : u);
          var c = n.maxTranslate() - n.minTranslate();
          (0 === c ? 0 : (e - n.minTranslate()) / c) !== s &&
            n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, r, a) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === r && (r = !0);
          var i = this,
            o = i.params,
            s = i.wrapperEl;
          if (i.animating && o.preventInteractionOnTransition) return !1;
          var l,
            u = i.minTranslate(),
            c = i.maxTranslate();
          if (
            ((l = r && e > u ? u : r && e < c ? c : e),
              i.updateProgress(l),
              o.cssMode)
          ) {
            var d = i.isHorizontal();
            if (0 === t) s[d ? "scrollLeft" : "scrollTop"] = -l;
            else {
              var f;
              if (!i.support.smoothScroll)
                return (
                  Cf({
                    swiper: i,
                    targetPosition: -l,
                    side: d ? "left" : "top",
                  }),
                  !0
                );
              s.scrollTo(
                (_e((f = {}), d ? "left" : "top", -l),
                  _e(f, "behavior", "smooth"),
                  f)
              );
            }
            return !0;
          }
          return (
            0 === t
              ? (i.setTransition(0),
                i.setTranslate(l),
                n &&
                (i.emit("beforeTransitionStart", t, a),
                  i.emit("transitionEnd")))
              : (i.setTransition(t),
                i.setTranslate(l),
                n &&
                (i.emit("beforeTransitionStart", t, a),
                  i.emit("transitionStart")),
                i.animating ||
                ((i.animating = !0),
                  i.onTranslateToWrapperTransitionEnd ||
                  (i.onTranslateToWrapperTransitionEnd = function (e) {
                    i &&
                      !i.destroyed &&
                      e.target === this &&
                      (i.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        i.onTranslateToWrapperTransitionEnd
                      ),
                        i.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          i.onTranslateToWrapperTransitionEnd
                        ),
                        (i.onTranslateToWrapperTransitionEnd = null),
                        delete i.onTranslateToWrapperTransitionEnd,
                        n && i.emit("transitionEnd"));
                  }),
                  i.$wrapperEl[0].addEventListener(
                    "transitionend",
                    i.onTranslateToWrapperTransitionEnd
                  ),
                  i.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    i.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function Nf(e) {
        var t = e.swiper,
          n = e.runCallbacks,
          r = e.direction,
          a = e.step,
          i = t.activeIndex,
          o = t.previousIndex,
          s = r;
        if (
          (s || (s = i > o ? "next" : i < o ? "prev" : "reset"),
            t.emit("transition".concat(a)),
            n && i !== o)
        ) {
          if ("reset" === s)
            return void t.emit("slideResetTransition".concat(a));
          t.emit("slideChangeTransition".concat(a)),
            "next" === s
              ? t.emit("slideNextTransition".concat(a))
              : t.emit("slidePrevTransition".concat(a));
        }
      }
      var Lf = {
        slideTo: function (e, t, n, r, a) {
          if (
            (void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === n && (n = !0),
              "number" !== typeof e && "string" !== typeof e)
          )
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [".concat(
                typeof e,
                "] given."
              )
            );
          if ("string" === typeof e) {
            var i = parseInt(e, 10);
            if (!isFinite(i))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                  e,
                  "] given."
                )
              );
            e = i;
          }
          var o = this,
            s = e;
          s < 0 && (s = 0);
          var l = o.params,
            u = o.snapGrid,
            c = o.slidesGrid,
            d = o.previousIndex,
            f = o.activeIndex,
            p = o.rtlTranslate,
            h = o.wrapperEl,
            v = o.enabled;
          if (
            (o.animating && l.preventInteractionOnTransition) ||
            (!v && !r && !a)
          )
            return !1;
          var m = Math.min(o.params.slidesPerGroupSkip, s),
            g = m + Math.floor((s - m) / o.params.slidesPerGroup);
          g >= u.length && (g = u.length - 1),
            (f || l.initialSlide || 0) === (d || 0) &&
            n &&
            o.emit("beforeSlideChangeStart");
          var y,
            b = -u[g];
          if ((o.updateProgress(b), l.normalizeSlideIndex))
            for (var x = 0; x < c.length; x += 1) {
              var w = -Math.floor(100 * b),
                E = Math.floor(100 * c[x]),
                S = Math.floor(100 * c[x + 1]);
              "undefined" !== typeof c[x + 1]
                ? w >= E && w < S - (S - E) / 2
                  ? (s = x)
                  : w >= E && w < S && (s = x + 1)
                : w >= E && (s = x);
            }
          if (o.initialized && s !== f) {
            if (!o.allowSlideNext && b < o.translate && b < o.minTranslate())
              return !1;
            if (
              !o.allowSlidePrev &&
              b > o.translate &&
              b > o.maxTranslate() &&
              (f || 0) !== s
            )
              return !1;
          }
          if (
            ((y = s > f ? "next" : s < f ? "prev" : "reset"),
              (p && -b === o.translate) || (!p && b === o.translate))
          )
            return (
              o.updateActiveIndex(s),
              l.autoHeight && o.updateAutoHeight(),
              o.updateSlidesClasses(),
              "slide" !== l.effect && o.setTranslate(b),
              "reset" !== y && (o.transitionStart(n, y), o.transitionEnd(n, y)),
              !1
            );
          if (l.cssMode) {
            var C = o.isHorizontal(),
              k = p ? b : -b;
            if (0 === t) {
              var T = o.virtual && o.params.virtual.enabled;
              T &&
                ((o.wrapperEl.style.scrollSnapType = "none"),
                  (o._immediateVirtual = !0)),
                (h[C ? "scrollLeft" : "scrollTop"] = k),
                T &&
                requestAnimationFrame(function () {
                  (o.wrapperEl.style.scrollSnapType = ""),
                    (o._swiperImmediateVirtual = !1);
                });
            } else {
              var P;
              if (!o.support.smoothScroll)
                return (
                  Cf({
                    swiper: o,
                    targetPosition: k,
                    side: C ? "left" : "top",
                  }),
                  !0
                );
              h.scrollTo(
                (_e((P = {}), C ? "left" : "top", k),
                  _e(P, "behavior", "smooth"),
                  P)
              );
            }
            return !0;
          }
          return (
            o.setTransition(t),
            o.setTranslate(b),
            o.updateActiveIndex(s),
            o.updateSlidesClasses(),
            o.emit("beforeTransitionStart", t, r),
            o.transitionStart(n, y),
            0 === t
              ? o.transitionEnd(n, y)
              : o.animating ||
              ((o.animating = !0),
                o.onSlideToWrapperTransitionEnd ||
                (o.onSlideToWrapperTransitionEnd = function (e) {
                  o &&
                    !o.destroyed &&
                    e.target === this &&
                    (o.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      o.onSlideToWrapperTransitionEnd
                    ),
                      o.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        o.onSlideToWrapperTransitionEnd
                      ),
                      (o.onSlideToWrapperTransitionEnd = null),
                      delete o.onSlideToWrapperTransitionEnd,
                      o.transitionEnd(n, y));
                }),
                o.$wrapperEl[0].addEventListener(
                  "transitionend",
                  o.onSlideToWrapperTransitionEnd
                ),
                o.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  o.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, r) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0);
          var a = this,
            i = e;
          return a.params.loop && (i += a.loopedSlides), a.slideTo(i, t, n, r);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
            a = r.animating,
            i = r.enabled,
            o = r.params;
          if (!i) return r;
          var s = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (s = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          var l = r.activeIndex < o.slidesPerGroupSkip ? 1 : s;
          if (o.loop) {
            if (a && o.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          return o.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + l, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
            a = r.params,
            i = r.animating,
            o = r.snapGrid,
            s = r.slidesGrid,
            l = r.rtlTranslate;
          if (!r.enabled) return r;
          if (a.loop) {
            if (i && a.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var c,
            d = u(l ? r.translate : -r.translate),
            f = o.map(function (e) {
              return u(e);
            }),
            p = o[f.indexOf(d) - 1];
          "undefined" === typeof p &&
            a.cssMode &&
            (o.forEach(function (e, t) {
              d >= e && (c = t);
            }),
              "undefined" !== typeof c && (p = o[c > 0 ? c - 1 : c]));
          var h = 0;
          if (
            ("undefined" !== typeof p &&
              ((h = s.indexOf(p)) < 0 && (h = r.activeIndex - 1),
                "auto" === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                ((h = h - r.slidesPerViewDynamic("previous", !0) + 1),
                  (h = Math.max(h, 0)))),
              a.rewind && r.isBeginning)
          ) {
            var v =
              r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1;
            return r.slideTo(v, e, t, n);
          }
          return r.slideTo(h, e, t, n);
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, r) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === r && (r = 0.5);
          var a = this,
            i = a.activeIndex,
            o = Math.min(a.params.slidesPerGroupSkip, i),
            s = o + Math.floor((i - o) / a.params.slidesPerGroup),
            l = a.rtlTranslate ? a.translate : -a.translate;
          if (l >= a.snapGrid[s]) {
            var u = a.snapGrid[s];
            l - u > (a.snapGrid[s + 1] - u) * r &&
              (i += a.params.slidesPerGroup);
          } else {
            var c = a.snapGrid[s - 1];
            l - c <= (a.snapGrid[s] - c) * r && (i -= a.params.slidesPerGroup);
          }
          return (
            (i = Math.max(i, 0)),
            (i = Math.min(i, a.slidesGrid.length - 1)),
            a.slideTo(i, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            n = t.params,
            r = t.$wrapperEl,
            a =
              "auto" === n.slidesPerView
                ? t.slidesPerViewDynamic()
                : n.slidesPerView,
            i = t.clickedIndex;
          if (n.loop) {
            if (t.animating) return;
            (e = parseInt(
              mf(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              n.centeredSlides
                ? i < t.loopedSlides - a / 2 ||
                  i > t.slides.length - t.loopedSlides + a / 2
                  ? (t.loopFix(),
                    (i = r
                      .children(
                        "."
                          .concat(n.slideClass, '[data-swiper-slide-index="')
                          .concat(e, '"]:not(.')
                          .concat(n.slideDuplicateClass, ")")
                      )
                      .eq(0)
                      .index()),
                    gf(function () {
                      t.slideTo(i);
                    }))
                  : t.slideTo(i)
                : i > t.slides.length - a
                  ? (t.loopFix(),
                    (i = r
                      .children(
                        "."
                          .concat(n.slideClass, '[data-swiper-slide-index="')
                          .concat(e, '"]:not(.')
                          .concat(n.slideDuplicateClass, ")")
                      )
                      .eq(0)
                      .index()),
                    gf(function () {
                      t.slideTo(i);
                    }))
                  : t.slideTo(i);
          } else t.slideTo(i);
        },
      };
      var Af = {
        loopCreate: function () {
          var e = this,
            t = ef(),
            n = e.params,
            r = e.$wrapperEl,
            a = r.children().length > 0 ? mf(r.children()[0].parentNode) : r;
          a.children(
            ".".concat(n.slideClass, ".").concat(n.slideDuplicateClass)
          ).remove();
          var i = a.children(".".concat(n.slideClass));
          if (n.loopFillGroupWithBlank) {
            var o = n.slidesPerGroup - (i.length % n.slidesPerGroup);
            if (o !== n.slidesPerGroup) {
              for (var s = 0; s < o; s += 1) {
                var l = mf(t.createElement("div")).addClass(
                  "".concat(n.slideClass, " ").concat(n.slideBlankClass)
                );
                a.append(l);
              }
              i = a.children(".".concat(n.slideClass));
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = i.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > i.length && (e.loopedSlides = i.length);
          var u = [],
            c = [];
          i.each(function (t, n) {
            var r = mf(t);
            n < e.loopedSlides && c.push(t),
              n < i.length && n >= i.length - e.loopedSlides && u.push(t),
              r.attr("data-swiper-slide-index", n);
          });
          for (var d = 0; d < c.length; d += 1)
            a.append(mf(c[d].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (var f = u.length - 1; f >= 0; f -= 1)
            a.prepend(mf(u[f].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            n = e.activeIndex,
            r = e.slides,
            a = e.loopedSlides,
            i = e.allowSlidePrev,
            o = e.allowSlideNext,
            s = e.snapGrid,
            l = e.rtlTranslate;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          var u = -s[n] - e.getTranslate();
          if (n < a)
            (t = r.length - 3 * a + n),
              (t += a),
              e.slideTo(t, 0, !1, !0) &&
              0 !== u &&
              e.setTranslate((l ? -e.translate : e.translate) - u);
          else if (n >= r.length - a) {
            (t = -r.length + n + a),
              (t += a),
              e.slideTo(t, 0, !1, !0) &&
              0 !== u &&
              e.setTranslate((l ? -e.translate : e.translate) - u);
          }
          (e.allowSlidePrev = i), (e.allowSlideNext = o), e.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this,
            t = e.$wrapperEl,
            n = e.params,
            r = e.slides;
          t
            .children(
              "."
                .concat(n.slideClass, ".")
                .concat(n.slideDuplicateClass, ",.")
                .concat(n.slideClass, ".")
                .concat(n.slideBlankClass)
            )
            .remove(),
            r.removeAttr("data-swiper-slide-index");
        },
      };
      function zf(e) {
        var t = this,
          n = ef(),
          r = nf(),
          a = t.touchEventsData,
          i = t.params,
          o = t.touches;
        if (t.enabled && (!t.animating || !i.preventInteractionOnTransition)) {
          !t.animating && i.cssMode && i.loop && t.loopFix();
          var s = e;
          s.originalEvent && (s = s.originalEvent);
          var l = mf(s.target);
          if (
            ("wrapper" !== i.touchEventsTarget ||
              l.closest(t.wrapperEl).length) &&
            ((a.isTouchEvent = "touchstart" === s.type),
              (a.isTouchEvent || !("which" in s) || 3 !== s.which) &&
              !(!a.isTouchEvent && "button" in s && s.button > 0) &&
              (!a.isTouched || !a.isMoved))
          ) {
            !!i.noSwipingClass &&
              "" !== i.noSwipingClass &&
              s.target &&
              s.target.shadowRoot &&
              e.path &&
              e.path[0] &&
              (l = mf(e.path[0]));
            var u = i.noSwipingSelector
              ? i.noSwipingSelector
              : ".".concat(i.noSwipingClass),
              c = !(!s.target || !s.target.shadowRoot);
            if (
              i.noSwiping &&
              (c
                ? (function (e, t) {
                  return (
                    void 0 === t && (t = this),
                    (function t(n) {
                      return n && n !== ef() && n !== nf()
                        ? (n.assignedSlot && (n = n.assignedSlot),
                          n.closest(e) || t(n.getRootNode().host))
                        : null;
                    })(t)
                  );
                })(u, s.target)
                : l.closest(u)[0])
            )
              t.allowClick = !0;
            else if (!i.swipeHandler || l.closest(i.swipeHandler)[0]) {
              (o.currentX =
                "touchstart" === s.type ? s.targetTouches[0].pageX : s.pageX),
                (o.currentY =
                  "touchstart" === s.type ? s.targetTouches[0].pageY : s.pageY);
              var d = o.currentX,
                f = o.currentY,
                p = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                h = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
              if (p && (d <= h || d >= r.innerWidth - h)) {
                if ("prevent" !== p) return;
                e.preventDefault();
              }
              if (
                (Object.assign(a, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                  (o.startX = d),
                  (o.startY = f),
                  (a.touchStartTime = yf()),
                  (t.allowClick = !0),
                  t.updateSize(),
                  (t.swipeDirection = void 0),
                  i.threshold > 0 && (a.allowThresholdMove = !1),
                  "touchstart" !== s.type)
              ) {
                var v = !0;
                l.is(a.focusableElements) &&
                  ((v = !1), "SELECT" === l[0].nodeName && (a.isTouched = !1)),
                  n.activeElement &&
                  mf(n.activeElement).is(a.focusableElements) &&
                  n.activeElement !== l[0] &&
                  n.activeElement.blur();
                var m = v && t.allowTouchMove && i.touchStartPreventDefault;
                (!i.touchStartForcePreventDefault && !m) ||
                  l[0].isContentEditable ||
                  s.preventDefault();
              }
              t.params.freeMode &&
                t.params.freeMode.enabled &&
                t.freeMode &&
                t.animating &&
                !i.cssMode &&
                t.freeMode.onTouchStart(),
                t.emit("touchStart", s);
            }
          }
        }
      }
      function _f(e) {
        var t = ef(),
          n = this,
          r = n.touchEventsData,
          a = n.params,
          i = n.touches,
          o = n.rtlTranslate;
        if (n.enabled) {
          var s = e;
          if ((s.originalEvent && (s = s.originalEvent), r.isTouched)) {
            if (!r.isTouchEvent || "touchmove" === s.type) {
              var l =
                "touchmove" === s.type &&
                s.targetTouches &&
                (s.targetTouches[0] || s.changedTouches[0]),
                u = "touchmove" === s.type ? l.pageX : s.pageX,
                c = "touchmove" === s.type ? l.pageY : s.pageY;
              if (s.preventedByNestedSwiper)
                return (i.startX = u), void (i.startY = c);
              if (!n.allowTouchMove)
                return (
                  mf(s.target).is(r.focusableElements) || (n.allowClick = !1),
                  void (
                    r.isTouched &&
                    (Object.assign(i, {
                      startX: u,
                      startY: c,
                      currentX: u,
                      currentY: c,
                    }),
                      (r.touchStartTime = yf()))
                  )
                );
              if (r.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                if (n.isVertical()) {
                  if (
                    (c < i.startY && n.translate <= n.maxTranslate()) ||
                    (c > i.startY && n.translate >= n.minTranslate())
                  )
                    return (r.isTouched = !1), void (r.isMoved = !1);
                } else if (
                  (u < i.startX && n.translate <= n.maxTranslate()) ||
                  (u > i.startX && n.translate >= n.minTranslate())
                )
                  return;
              if (
                r.isTouchEvent &&
                t.activeElement &&
                s.target === t.activeElement &&
                mf(s.target).is(r.focusableElements)
              )
                return (r.isMoved = !0), void (n.allowClick = !1);
              if (
                (r.allowTouchCallbacks && n.emit("touchMove", s),
                  !(s.targetTouches && s.targetTouches.length > 1))
              ) {
                (i.currentX = u), (i.currentY = c);
                var d = i.currentX - i.startX,
                  f = i.currentY - i.startY;
                if (
                  !(
                    n.params.threshold &&
                    Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2)) <
                    n.params.threshold
                  )
                ) {
                  var p;
                  if ("undefined" === typeof r.isScrolling)
                    (n.isHorizontal() && i.currentY === i.startY) ||
                      (n.isVertical() && i.currentX === i.startX)
                      ? (r.isScrolling = !1)
                      : d * d + f * f >= 25 &&
                      ((p =
                        (180 * Math.atan2(Math.abs(f), Math.abs(d))) /
                        Math.PI),
                        (r.isScrolling = n.isHorizontal()
                          ? p > a.touchAngle
                          : 90 - p > a.touchAngle));
                  if (
                    (r.isScrolling && n.emit("touchMoveOpposite", s),
                      "undefined" === typeof r.startMoving &&
                      ((i.currentX === i.startX && i.currentY === i.startY) ||
                        (r.startMoving = !0)),
                      r.isScrolling)
                  )
                    r.isTouched = !1;
                  else if (r.startMoving) {
                    (n.allowClick = !1),
                      !a.cssMode && s.cancelable && s.preventDefault(),
                      a.touchMoveStopPropagation &&
                      !a.nested &&
                      s.stopPropagation(),
                      r.isMoved ||
                      (a.loop && !a.cssMode && n.loopFix(),
                        (r.startTranslate = n.getTranslate()),
                        n.setTransition(0),
                        n.animating &&
                        n.$wrapperEl.trigger(
                          "webkitTransitionEnd transitionend"
                        ),
                        (r.allowMomentumBounce = !1),
                        !a.grabCursor ||
                        (!0 !== n.allowSlideNext &&
                          !0 !== n.allowSlidePrev) ||
                        n.setGrabCursor(!0),
                        n.emit("sliderFirstMove", s)),
                      n.emit("sliderMove", s),
                      (r.isMoved = !0);
                    var h = n.isHorizontal() ? d : f;
                    (i.diff = h),
                      (h *= a.touchRatio),
                      o && (h = -h),
                      (n.swipeDirection = h > 0 ? "prev" : "next"),
                      (r.currentTranslate = h + r.startTranslate);
                    var v = !0,
                      m = a.resistanceRatio;
                    if (
                      (a.touchReleaseOnEdges && (m = 0),
                        h > 0 && r.currentTranslate > n.minTranslate()
                          ? ((v = !1),
                            a.resistance &&
                            (r.currentTranslate =
                              n.minTranslate() -
                              1 +
                              Math.pow(
                                -n.minTranslate() + r.startTranslate + h,
                                m
                              )))
                          : h < 0 &&
                          r.currentTranslate < n.maxTranslate() &&
                          ((v = !1),
                            a.resistance &&
                            (r.currentTranslate =
                              n.maxTranslate() +
                              1 -
                              Math.pow(
                                n.maxTranslate() - r.startTranslate - h,
                                m
                              ))),
                        v && (s.preventedByNestedSwiper = !0),
                        !n.allowSlideNext &&
                        "next" === n.swipeDirection &&
                        r.currentTranslate < r.startTranslate &&
                        (r.currentTranslate = r.startTranslate),
                        !n.allowSlidePrev &&
                        "prev" === n.swipeDirection &&
                        r.currentTranslate > r.startTranslate &&
                        (r.currentTranslate = r.startTranslate),
                        n.allowSlidePrev ||
                        n.allowSlideNext ||
                        (r.currentTranslate = r.startTranslate),
                        a.threshold > 0)
                    ) {
                      if (!(Math.abs(h) > a.threshold || r.allowThresholdMove))
                        return void (r.currentTranslate = r.startTranslate);
                      if (!r.allowThresholdMove)
                        return (
                          (r.allowThresholdMove = !0),
                          (i.startX = i.currentX),
                          (i.startY = i.currentY),
                          (r.currentTranslate = r.startTranslate),
                          void (i.diff = n.isHorizontal()
                            ? i.currentX - i.startX
                            : i.currentY - i.startY)
                        );
                    }
                    a.followFinger &&
                      !a.cssMode &&
                      (((a.freeMode && a.freeMode.enabled && n.freeMode) ||
                        a.watchSlidesProgress) &&
                        (n.updateActiveIndex(), n.updateSlidesClasses()),
                        n.params.freeMode &&
                        a.freeMode.enabled &&
                        n.freeMode &&
                        n.freeMode.onTouchMove(),
                        n.updateProgress(r.currentTranslate),
                        n.setTranslate(r.currentTranslate));
                  }
                }
              }
            }
          } else
            r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", s);
        }
      }
      function Rf(e) {
        var t = this,
          n = t.touchEventsData,
          r = t.params,
          a = t.touches,
          i = t.rtlTranslate,
          o = t.slidesGrid;
        if (t.enabled) {
          var s = e;
          if (
            (s.originalEvent && (s = s.originalEvent),
              n.allowTouchCallbacks && t.emit("touchEnd", s),
              (n.allowTouchCallbacks = !1),
              !n.isTouched)
          )
            return (
              n.isMoved && r.grabCursor && t.setGrabCursor(!1),
              (n.isMoved = !1),
              void (n.startMoving = !1)
            );
          r.grabCursor &&
            n.isMoved &&
            n.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          var l,
            u = yf(),
            c = u - n.touchStartTime;
          if (t.allowClick) {
            var d = s.path || (s.composedPath && s.composedPath());
            t.updateClickedSlide((d && d[0]) || s.target),
              t.emit("tap click", s),
              c < 300 &&
              u - n.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", s);
          }
          if (
            ((n.lastClickTime = yf()),
              gf(function () {
                t.destroyed || (t.allowClick = !0);
              }),
              !n.isTouched ||
              !n.isMoved ||
              !t.swipeDirection ||
              0 === a.diff ||
              n.currentTranslate === n.startTranslate)
          )
            return (
              (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
            );
          if (
            ((n.isTouched = !1),
              (n.isMoved = !1),
              (n.startMoving = !1),
              (l = r.followFinger
                ? i
                  ? t.translate
                  : -t.translate
                : -n.currentTranslate),
              !r.cssMode)
          )
            if (t.params.freeMode && r.freeMode.enabled)
              t.freeMode.onTouchEnd({ currentPos: l });
            else {
              for (
                var f = 0, p = t.slidesSizesGrid[0], h = 0;
                h < o.length;
                h += h < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
              ) {
                var v = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                "undefined" !== typeof o[h + v]
                  ? l >= o[h] &&
                  l < o[h + v] &&
                  ((f = h), (p = o[h + v] - o[h]))
                  : l >= o[h] &&
                  ((f = h), (p = o[o.length - 1] - o[o.length - 2]));
              }
              var m = null,
                g = null;
              r.rewind &&
                (t.isBeginning
                  ? (g =
                    t.params.virtual && t.params.virtual.enabled && t.virtual
                      ? t.virtual.slides.length - 1
                      : t.slides.length - 1)
                  : t.isEnd && (m = 0));
              var y = (l - o[f]) / p,
                b = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
              if (c > r.longSwipesMs) {
                if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection &&
                  (y >= r.longSwipesRatio
                    ? t.slideTo(r.rewind && t.isEnd ? m : f + b)
                    : t.slideTo(f)),
                  "prev" === t.swipeDirection &&
                  (y > 1 - r.longSwipesRatio
                    ? t.slideTo(f + b)
                    : null !== g && y < 0 && Math.abs(y) > r.longSwipesRatio
                      ? t.slideTo(g)
                      : t.slideTo(f));
              } else {
                if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation &&
                  (s.target === t.navigation.nextEl ||
                    s.target === t.navigation.prevEl)
                  ? s.target === t.navigation.nextEl
                    ? t.slideTo(f + b)
                    : t.slideTo(f)
                  : ("next" === t.swipeDirection &&
                    t.slideTo(null !== m ? m : f + b),
                    "prev" === t.swipeDirection &&
                    t.slideTo(null !== g ? g : f));
              }
            }
        }
      }
      function Df() {
        var e = this,
          t = e.params,
          n = e.el;
        if (!n || 0 !== n.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var r = e.allowSlideNext,
            a = e.allowSlidePrev,
            i = e.snapGrid;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
              e.isEnd &&
              !e.isBeginning &&
              !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
            (e.allowSlidePrev = a),
            (e.allowSlideNext = r),
            e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
        }
      }
      function Vf(e) {
        var t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
              t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function If() {
        var e = this,
          t = e.wrapperEl,
          n = e.rtlTranslate;
        if (e.enabled) {
          (e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = -t.scrollLeft)
              : (e.translate = -t.scrollTop),
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          var r = e.maxTranslate() - e.minTranslate();
          (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress &&
            e.updateProgress(n ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
        }
      }
      var Ff = !1;
      function Bf() { }
      var Hf = function (e, t) {
        var n = ef(),
          r = e.params,
          a = e.touchEvents,
          i = e.el,
          o = e.wrapperEl,
          s = e.device,
          l = e.support,
          u = !!r.nested,
          c = "on" === t ? "addEventListener" : "removeEventListener",
          d = t;
        if (l.touch) {
          var f = !(
            "touchstart" !== a.start ||
            !l.passiveListener ||
            !r.passiveListeners
          ) && { passive: !0, capture: !1 };
          i[c](a.start, e.onTouchStart, f),
            i[c](
              a.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: u } : u
            ),
            i[c](a.end, e.onTouchEnd, f),
            a.cancel && i[c](a.cancel, e.onTouchEnd, f);
        } else
          i[c](a.start, e.onTouchStart, !1),
            n[c](a.move, e.onTouchMove, u),
            n[c](a.end, e.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) &&
          i[c]("click", e.onClick, !0),
          r.cssMode && o[c]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[d](
              s.ios || s.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              Df,
              !0
            )
            : e[d]("observerUpdate", Df, !0);
      };
      var Wf = {
        attachEvents: function () {
          var e = this,
            t = ef(),
            n = e.params,
            r = e.support;
          (e.onTouchStart = zf.bind(e)),
            (e.onTouchMove = _f.bind(e)),
            (e.onTouchEnd = Rf.bind(e)),
            n.cssMode && (e.onScroll = If.bind(e)),
            (e.onClick = Vf.bind(e)),
            r.touch &&
            !Ff &&
            (t.addEventListener("touchstart", Bf), (Ff = !0)),
            Hf(e, "on");
        },
        detachEvents: function () {
          Hf(this, "off");
        },
      },
        Uf = function (e, t) {
          return e.grid && t.grid && t.grid.rows > 1;
        };
      var Gf = {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            n = e.initialized,
            r = e.loopedSlides,
            a = void 0 === r ? 0 : r,
            i = e.params,
            o = e.$el,
            s = i.breakpoints;
          if (s && (!s || 0 !== Object.keys(s).length)) {
            var l = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
            if (l && e.currentBreakpoint !== l) {
              var u = (l in s ? s[l] : void 0) || e.originalParams,
                c = Uf(e, i),
                d = Uf(e, u),
                f = i.enabled;
              c && !d
                ? (o.removeClass(
                  ""
                    .concat(i.containerModifierClass, "grid ")
                    .concat(i.containerModifierClass, "grid-column")
                ),
                  e.emitContainerClasses())
                : !c &&
                d &&
                (o.addClass("".concat(i.containerModifierClass, "grid")),
                  ((u.grid.fill && "column" === u.grid.fill) ||
                    (!u.grid.fill && "column" === i.grid.fill)) &&
                  o.addClass(
                    "".concat(i.containerModifierClass, "grid-column")
                  ),
                  e.emitContainerClasses());
              var p = u.direction && u.direction !== i.direction,
                h = i.loop && (u.slidesPerView !== i.slidesPerView || p);
              p && n && e.changeDirection(), Ef(e.params, u);
              var v = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                f && !v ? e.disable() : !f && v && e.enable(),
                (e.currentBreakpoint = l),
                e.emit("_beforeBreakpoint", u),
                h &&
                n &&
                (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - a + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", u);
            }
          }
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), e && ("container" !== t || n))) {
            var r = !1,
              a = nf(),
              i = "window" === t ? a.innerHeight : n.clientHeight,
              o = Object.keys(e).map(function (e) {
                if ("string" === typeof e && 0 === e.indexOf("@")) {
                  var t = parseFloat(e.substr(1));
                  return { value: i * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var s = 0; s < o.length; s += 1) {
              var l = o[s],
                u = l.point,
                c = l.value;
              "window" === t
                ? a.matchMedia("(min-width: ".concat(c, "px)")).matches &&
                (r = u)
                : c <= n.clientWidth && (r = u);
            }
            return r || "max";
          }
        },
      };
      var $f = {
        addClasses: function () {
          var e = this,
            t = e.classNames,
            n = e.params,
            r = e.rtl,
            a = e.$el,
            i = e.device,
            o = e.support,
            s = (function (e, t) {
              var n = [];
              return (
                e.forEach(function (e) {
                  "object" === typeof e
                    ? Object.keys(e).forEach(function (r) {
                      e[r] && n.push(t + r);
                    })
                    : "string" === typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: i.android },
                { ios: i.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
              ],
              n.containerModifierClass
            );
          t.push.apply(t, dn(s)),
            a.addClass(dn(t).join(" ")),
            e.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this,
            t = e.$el,
            n = e.classNames;
          t.removeClass(n.join(" ")), e.emitContainerClasses();
        },
      };
      var Yf = {
        loadImage: function (e, t, n, r, a, i) {
          var o,
            s = nf();
          function l() {
            i && i();
          }
          mf(e).parent("picture")[0] || (e.complete && a)
            ? l()
            : t
              ? (((o = new s.Image()).onload = l),
                (o.onerror = l),
                r && (o.sizes = r),
                n && (o.srcset = n),
                t && (o.src = t))
              : l();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            "undefined" !== typeof e &&
              null !== e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var n = 0; n < e.imagesToLoad.length; n += 1) {
            var r = e.imagesToLoad[n];
            e.loadImage(
              r,
              r.currentSrc || r.getAttribute("src"),
              r.srcset || r.getAttribute("srcset"),
              r.sizes || r.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      };
      var qf = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function Xf(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          var r = Object.keys(n)[0],
            a = n[r];
          "object" === typeof a && null !== a
            ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
              !0 === e[r] &&
              (e[r] = { auto: !0 }),
              r in e && "enabled" in a
                ? (!0 === e[r] && (e[r] = { enabled: !0 }),
                  "object" !== typeof e[r] ||
                  "enabled" in e[r] ||
                  (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  Ef(t, n))
                : Ef(t, n))
            : Ef(t, n);
        };
      }
      var Zf = {
        eventsEmitter: jf,
        update: Of,
        translate: Mf,
        transition: {
          setTransition: function (e, t) {
            var n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var n = this,
              r = n.params;
            r.cssMode ||
              (r.autoHeight && n.updateAutoHeight(),
                Nf({
                  swiper: n,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var n = this,
              r = n.params;
            (n.animating = !1),
              r.cssMode ||
              (n.setTransition(0),
                Nf({
                  swiper: n,
                  runCallbacks: e,
                  direction: t,
                  step: "End",
                }));
          },
        },
        slide: Lf,
        loop: Af,
        grabCursor: {
          setGrabCursor: function (e) {
            var t = this;
            if (
              !(
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
            ) {
              var n =
                "container" === t.params.touchEventsTarget
                  ? t.el
                  : t.wrapperEl;
              (n.style.cursor = "move"),
                (n.style.cursor = e ? "grabbing" : "grab");
            }
          },
          unsetGrabCursor: function () {
            var e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget
                  ? "el"
                  : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: Wf,
        breakpoints: Gf,
        checkOverflow: {
          checkOverflow: function () {
            var e = this,
              t = e.isLocked,
              n = e.params,
              r = n.slidesOffsetBefore;
            if (r) {
              var a = e.slides.length - 1,
                i = e.slidesGrid[a] + e.slidesSizesGrid[a] + 2 * r;
              e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: $f,
        images: Yf,
      },
        Qf = {},
        Kf = (function () {
          function e() {
            var t, n;
            fn(this, e);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            if (
              (1 === a.length &&
                a[0].constructor &&
                "Object" === Object.prototype.toString.call(a[0]).slice(8, -1)
                ? (n = a[0])
                : ((t = a[0]), (n = a[1])),
                n || (n = {}),
                (n = Ef({}, n)),
                t && !n.el && (n.el = t),
                n.el && mf(n.el).length > 1)
            ) {
              var o = [];
              return (
                mf(n.el).each(function (t) {
                  var r = Ef({}, n, { el: t });
                  o.push(new e(r));
                }),
                o
              );
            }
            var s,
              l = this;
            ((l.__swiper__ = !0),
              (l.support = kf()),
              (l.device = Tf({ userAgent: n.userAgent })),
              (l.browser = Pf()),
              (l.eventsListeners = {}),
              (l.eventsAnyListeners = []),
              (l.modules = dn(l.__modules__)),
              n.modules && Array.isArray(n.modules)) &&
              (s = l.modules).push.apply(s, dn(n.modules));
            var u = {};
            l.modules.forEach(function (e) {
              e({
                swiper: l,
                extendParams: Xf(n, u),
                on: l.on.bind(l),
                once: l.once.bind(l),
                off: l.off.bind(l),
                emit: l.emit.bind(l),
              });
            });
            var c = Ef({}, qf, u);
            return (
              (l.params = Ef({}, c, Qf, n)),
              (l.originalParams = Ef({}, l.params)),
              (l.passedParams = Ef({}, n)),
              l.params &&
              l.params.on &&
              Object.keys(l.params.on).forEach(function (e) {
                l.on(e, l.params.on[e]);
              }),
              l.params && l.params.onAny && l.onAny(l.params.onAny),
              (l.$ = mf),
              Object.assign(l, {
                enabled: l.params.enabled,
                el: t,
                classNames: [],
                slides: mf(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === l.params.direction;
                },
                isVertical: function () {
                  return "vertical" === l.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: l.params.allowSlideNext,
                allowSlidePrev: l.params.allowSlidePrev,
                touchEvents: (function () {
                  var e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                    t = ["pointerdown", "pointermove", "pointerup"];
                  return (
                    (l.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2],
                      cancel: e[3],
                    }),
                    (l.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2],
                    }),
                    l.support.touch || !l.params.simulateTouch
                      ? l.touchEventsTouch
                      : l.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: l.params.focusableElements,
                  lastClickTime: yf(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: l.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              l.emit("_swiper"),
              l.params.init && l.init(),
              l
            );
          }
          return (
            hn(
              e,
              [
                {
                  key: "enable",
                  value: function () {
                    var e = this;
                    e.enabled ||
                      ((e.enabled = !0),
                        e.params.grabCursor && e.setGrabCursor(),
                        e.emit("enable"));
                  },
                },
                {
                  key: "disable",
                  value: function () {
                    var e = this;
                    e.enabled &&
                      ((e.enabled = !1),
                        e.params.grabCursor && e.unsetGrabCursor(),
                        e.emit("disable"));
                  },
                },
                {
                  key: "setProgress",
                  value: function (e, t) {
                    var n = this;
                    e = Math.min(Math.max(e, 0), 1);
                    var r = n.minTranslate(),
                      a = (n.maxTranslate() - r) * e + r;
                    n.translateTo(a, "undefined" === typeof t ? 0 : t),
                      n.updateActiveIndex(),
                      n.updateSlidesClasses();
                  },
                },
                {
                  key: "emitContainerClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = e.el.className.split(" ").filter(function (t) {
                        return (
                          0 === t.indexOf("swiper") ||
                          0 === t.indexOf(e.params.containerModifierClass)
                        );
                      });
                      e.emit("_containerClasses", t.join(" "));
                    }
                  },
                },
                {
                  key: "getSlideClasses",
                  value: function (e) {
                    var t = this;
                    return e.className
                      .split(" ")
                      .filter(function (e) {
                        return (
                          0 === e.indexOf("swiper-slide") ||
                          0 === e.indexOf(t.params.slideClass)
                        );
                      })
                      .join(" ");
                  },
                },
                {
                  key: "emitSlidesClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = [];
                      e.slides.each(function (n) {
                        var r = e.getSlideClasses(n);
                        t.push({ slideEl: n, classNames: r }),
                          e.emit("_slideClass", n, r);
                      }),
                        e.emit("_slideClasses", t);
                    }
                  },
                },
                {
                  key: "slidesPerViewDynamic",
                  value: function (e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    var n = this,
                      r = n.params,
                      a = n.slides,
                      i = n.slidesGrid,
                      o = n.slidesSizesGrid,
                      s = n.size,
                      l = n.activeIndex,
                      u = 1;
                    if (r.centeredSlides) {
                      for (
                        var c, d = a[l].swiperSlideSize, f = l + 1;
                        f < a.length;
                        f += 1
                      )
                        a[f] &&
                          !c &&
                          ((u += 1),
                            (d += a[f].swiperSlideSize) > s && (c = !0));
                      for (var p = l - 1; p >= 0; p -= 1)
                        a[p] &&
                          !c &&
                          ((u += 1),
                            (d += a[p].swiperSlideSize) > s && (c = !0));
                    } else if ("current" === e)
                      for (var h = l + 1; h < a.length; h += 1) {
                        (t ? i[h] + o[h] - i[l] < s : i[h] - i[l] < s) &&
                          (u += 1);
                      }
                    else
                      for (var v = l - 1; v >= 0; v -= 1) {
                        i[l] - i[v] < s && (u += 1);
                      }
                    return u;
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var e = this;
                    if (e && !e.destroyed) {
                      var t = e.snapGrid,
                        n = e.params;
                      n.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode && e.params.freeMode.enabled
                          ? (r(), e.params.autoHeight && e.updateAutoHeight())
                          : (("auto" === e.params.slidesPerView ||
                            e.params.slidesPerView > 1) &&
                            e.isEnd &&
                            !e.params.centeredSlides
                            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                            : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
                        n.watchOverflow &&
                        t !== e.snapGrid &&
                        e.checkOverflow(),
                        e.emit("update");
                    }
                    function r() {
                      var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        n = Math.min(
                          Math.max(t, e.maxTranslate()),
                          e.minTranslate()
                        );
                      e.setTranslate(n),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                    }
                  },
                },
                {
                  key: "changeDirection",
                  value: function (e, t) {
                    void 0 === t && (t = !0);
                    var n = this,
                      r = n.params.direction;
                    return (
                      e || (e = "horizontal" === r ? "vertical" : "horizontal"),
                      e === r ||
                      ("horizontal" !== e && "vertical" !== e) ||
                      (n.$el
                        .removeClass(
                          "".concat(n.params.containerModifierClass).concat(r)
                        )
                        .addClass(
                          "".concat(n.params.containerModifierClass).concat(e)
                        ),
                        n.emitContainerClasses(),
                        (n.params.direction = e),
                        n.slides.each(function (t) {
                          "vertical" === e
                            ? (t.style.width = "")
                            : (t.style.height = "");
                        }),
                        n.emit("changeDirection"),
                        t && n.update()),
                      n
                    );
                  },
                },
                {
                  key: "mount",
                  value: function (e) {
                    var t = this;
                    if (t.mounted) return !0;
                    var n = mf(e || t.params.el);
                    if (!(e = n[0])) return !1;
                    e.swiper = t;
                    var r = function () {
                      return ".".concat(
                        (t.params.wrapperClass || "")
                          .trim()
                          .split(" ")
                          .join(".")
                      );
                    },
                      a = (function () {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                          var t = mf(e.shadowRoot.querySelector(r()));
                          return (
                            (t.children = function (e) {
                              return n.children(e);
                            }),
                            t
                          );
                        }
                        return n.children(r());
                      })();
                    if (0 === a.length && t.params.createElements) {
                      var i = ef().createElement("div");
                      (a = mf(i)),
                        (i.className = t.params.wrapperClass),
                        n.append(i),
                        n
                          .children(".".concat(t.params.slideClass))
                          .each(function (e) {
                            a.append(e);
                          });
                    }
                    return (
                      Object.assign(t, {
                        $el: n,
                        el: e,
                        $wrapperEl: a,
                        wrapperEl: a[0],
                        mounted: !0,
                        rtl:
                          "rtl" === e.dir.toLowerCase() ||
                          "rtl" === n.css("direction"),
                        rtlTranslate:
                          "horizontal" === t.params.direction &&
                          ("rtl" === e.dir.toLowerCase() ||
                            "rtl" === n.css("direction")),
                        wrongRTL: "-webkit-box" === a.css("display"),
                      }),
                      !0
                    );
                  },
                },
                {
                  key: "init",
                  value: function (e) {
                    var t = this;
                    return (
                      t.initialized ||
                      !1 === t.mount(e) ||
                      (t.emit("beforeInit"),
                        t.params.breakpoints && t.setBreakpoint(),
                        t.addClasses(),
                        t.params.loop && t.loopCreate(),
                        t.updateSize(),
                        t.updateSlides(),
                        t.params.watchOverflow && t.checkOverflow(),
                        t.params.grabCursor && t.enabled && t.setGrabCursor(),
                        t.params.preloadImages && t.preloadImages(),
                        t.params.loop
                          ? t.slideTo(
                            t.params.initialSlide + t.loopedSlides,
                            0,
                            t.params.runCallbacksOnInit,
                            !1,
                            !0
                          )
                          : t.slideTo(
                            t.params.initialSlide,
                            0,
                            t.params.runCallbacksOnInit,
                            !1,
                            !0
                          ),
                        t.attachEvents(),
                        (t.initialized = !0),
                        t.emit("init"),
                        t.emit("afterInit")),
                      t
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var n = this,
                      r = n.params,
                      a = n.$el,
                      i = n.$wrapperEl,
                      o = n.slides;
                    return (
                      "undefined" === typeof n.params ||
                      n.destroyed ||
                      (n.emit("beforeDestroy"),
                        (n.initialized = !1),
                        n.detachEvents(),
                        r.loop && n.loopDestroy(),
                        t &&
                        (n.removeClasses(),
                          a.removeAttr("style"),
                          i.removeAttr("style"),
                          o &&
                          o.length &&
                          o
                            .removeClass(
                              [
                                r.slideVisibleClass,
                                r.slideActiveClass,
                                r.slideNextClass,
                                r.slidePrevClass,
                              ].join(" ")
                            )
                            .removeAttr("style")
                            .removeAttr("data-swiper-slide-index")),
                        n.emit("destroy"),
                        Object.keys(n.eventsListeners).forEach(function (e) {
                          n.off(e);
                        }),
                        !1 !== e &&
                        ((n.$el[0].swiper = null),
                          (function (e) {
                            var t = e;
                            Object.keys(t).forEach(function (e) {
                              try {
                                t[e] = null;
                              } catch (Gp) { }
                              try {
                                delete t[e];
                              } catch (Gp) { }
                            });
                          })(n)),
                        (n.destroyed = !0)),
                      null
                    );
                  },
                },
              ],
              [
                {
                  key: "extendDefaults",
                  value: function (e) {
                    Ef(Qf, e);
                  },
                },
                {
                  key: "extendedDefaults",
                  get: function () {
                    return Qf;
                  },
                },
                {
                  key: "defaults",
                  get: function () {
                    return qf;
                  },
                },
                {
                  key: "installModule",
                  value: function (t) {
                    e.prototype.__modules__ || (e.prototype.__modules__ = []);
                    var n = e.prototype.__modules__;
                    "function" === typeof t && n.indexOf(t) < 0 && n.push(t);
                  },
                },
                {
                  key: "use",
                  value: function (t) {
                    return Array.isArray(t)
                      ? (t.forEach(function (t) {
                        return e.installModule(t);
                      }),
                        e)
                      : (e.installModule(t), e);
                  },
                },
              ]
            ),
            e
          );
        })();
      Object.keys(Zf).forEach(function (e) {
        Object.keys(Zf[e]).forEach(function (t) {
          Kf.prototype[t] = Zf[e][t];
        });
      }),
        Kf.use([
          function (e) {
            var t = e.swiper,
              n = e.on,
              r = e.emit,
              a = nf(),
              i = null,
              o = null,
              s = function () {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              l = function () {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            n("init", function () {
              t.params.resizeObserver && "undefined" !== typeof a.ResizeObserver
                ? t &&
                !t.destroyed &&
                t.initialized &&
                ((i = new ResizeObserver(function (e) {
                  o = a.requestAnimationFrame(function () {
                    var n = t.width,
                      r = t.height,
                      a = n,
                      i = r;
                    e.forEach(function (e) {
                      var n = e.contentBoxSize,
                        r = e.contentRect,
                        o = e.target;
                      (o && o !== t.el) ||
                        ((a = r ? r.width : (n[0] || n).inlineSize),
                          (i = r ? r.height : (n[0] || n).blockSize));
                    }),
                      (a === n && i === r) || s();
                  });
                })),
                  i.observe(t.el))
                : (a.addEventListener("resize", s),
                  a.addEventListener("orientationchange", l));
            }),
              n("destroy", function () {
                o && a.cancelAnimationFrame(o),
                  i && i.unobserve && t.el && (i.unobserve(t.el), (i = null)),
                  a.removeEventListener("resize", s),
                  a.removeEventListener("orientationchange", l);
              });
          },
          function (e) {
            var t = e.swiper,
              n = e.extendParams,
              r = e.on,
              a = e.emit,
              i = [],
              o = nf(),
              s = function (e, t) {
                void 0 === t && (t = {});
                var n = new (o.MutationObserver || o.WebkitMutationObserver)(
                  function (e) {
                    if (1 !== e.length) {
                      var t = function () {
                        a("observerUpdate", e[0]);
                      };
                      o.requestAnimationFrame
                        ? o.requestAnimationFrame(t)
                        : o.setTimeout(t, 0);
                    } else a("observerUpdate", e[0]);
                  }
                );
                n.observe(e, {
                  attributes:
                    "undefined" === typeof t.attributes || t.attributes,
                  childList: "undefined" === typeof t.childList || t.childList,
                  characterData:
                    "undefined" === typeof t.characterData || t.characterData,
                }),
                  i.push(n);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", function () {
                if (t.params.observer) {
                  if (t.params.observeParents)
                    for (var e = t.$el.parents(), n = 0; n < e.length; n += 1)
                      s(e[n]);
                  s(t.$el[0], { childList: t.params.observeSlideChildren }),
                    s(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              r("destroy", function () {
                i.forEach(function (e) {
                  e.disconnect();
                }),
                  i.splice(0, i.length);
              });
          },
        ]);
      var Jf = Kf;
      function ep(e, t, n, r) {
        var a = ef();
        return (
          e.params.createElements &&
          Object.keys(r).forEach(function (i) {
            if (!n[i] && !0 === n.auto) {
              var o = e.$el.children(".".concat(r[i]))[0];
              o ||
                (((o = a.createElement("div")).className = r[i]),
                  e.$el.append(o)),
                (n[i] = o),
                (t[i] = o);
            }
          }),
          n
        );
      }
      function tp(e) {
        var t = e.swiper,
          n = e.extendParams,
          r = e.on,
          a = e.emit;
        function i(e) {
          var n;
          return (
            e &&
            ((n = mf(e)),
              t.params.uniqueNavElements &&
              "string" === typeof e &&
              n.length > 1 &&
              1 === t.$el.find(e).length &&
              (n = t.$el.find(e))),
            n
          );
        }
        function o(e, n) {
          var r = t.params.navigation;
          e &&
            e.length > 0 &&
            (e[n ? "addClass" : "removeClass"](r.disabledClass),
              e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
              t.params.watchOverflow &&
              t.enabled &&
              e[t.isLocked ? "addClass" : "removeClass"](r.lockClass));
        }
        function s() {
          if (!t.params.loop) {
            var e = t.navigation,
              n = e.$nextEl;
            o(e.$prevEl, t.isBeginning && !t.params.rewind),
              o(n, t.isEnd && !t.params.rewind);
          }
        }
        function l(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
            t.slidePrev();
        }
        function u(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
        }
        function c() {
          var e = t.params.navigation;
          if (
            ((t.params.navigation = ep(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
              e.nextEl || e.prevEl)
          ) {
            var n = i(e.nextEl),
              r = i(e.prevEl);
            n && n.length > 0 && n.on("click", u),
              r && r.length > 0 && r.on("click", l),
              Object.assign(t.navigation, {
                $nextEl: n,
                nextEl: n && n[0],
                $prevEl: r,
                prevEl: r && r[0],
              }),
              t.enabled ||
              (n && n.addClass(e.lockClass), r && r.addClass(e.lockClass));
          }
        }
        function d() {
          var e = t.navigation,
            n = e.$nextEl,
            r = e.$prevEl;
          n &&
            n.length &&
            (n.off("click", u),
              n.removeClass(t.params.navigation.disabledClass)),
            r &&
            r.length &&
            (r.off("click", l),
              r.removeClass(t.params.navigation.disabledClass));
        }
        n({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        }),
          (t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          r("init", function () {
            c(), s();
          }),
          r("toEdge fromEdge lock unlock", function () {
            s();
          }),
          r("destroy", function () {
            d();
          }),
          r("enable disable", function () {
            var e = t.navigation,
              n = e.$nextEl,
              r = e.$prevEl;
            n &&
              n[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              ),
              r &&
              r[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              );
          }),
          r("click", function (e, n) {
            var r = t.navigation,
              i = r.$nextEl,
              o = r.$prevEl,
              s = n.target;
            if (
              t.params.navigation.hideOnClick &&
              !mf(s).is(o) &&
              !mf(s).is(i)
            ) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === s || t.pagination.el.contains(s))
              )
                return;
              var l;
              i
                ? (l = i.hasClass(t.params.navigation.hiddenClass))
                : o && (l = o.hasClass(t.params.navigation.hiddenClass)),
                a(!0 === l ? "navigationShow" : "navigationHide"),
                i && i.toggleClass(t.params.navigation.hiddenClass),
                o && o.toggleClass(t.params.navigation.hiddenClass);
            }
          }),
          Object.assign(t.navigation, { update: s, init: c, destroy: d });
      }
      function np(e) {
        return (
          void 0 === e && (e = ""),
          ".".concat(
            e
              .trim()
              .replace(/([\.:!\/])/g, "\\$1")
              .replace(/ /g, ".")
          )
        );
      }
      function rp(e) {
        var t,
          n = e.swiper,
          r = e.extendParams,
          a = e.on,
          i = e.emit,
          o = "swiper-pagination";
        r({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "".concat(o, "-bullet"),
            bulletActiveClass: "".concat(o, "-bullet-active"),
            modifierClass: "".concat(o, "-"),
            currentClass: "".concat(o, "-current"),
            totalClass: "".concat(o, "-total"),
            hiddenClass: "".concat(o, "-hidden"),
            progressbarFillClass: "".concat(o, "-progressbar-fill"),
            progressbarOppositeClass: "".concat(o, "-progressbar-opposite"),
            clickableClass: "".concat(o, "-clickable"),
            lockClass: "".concat(o, "-lock"),
            horizontalClass: "".concat(o, "-horizontal"),
            verticalClass: "".concat(o, "-vertical"),
          },
        }),
          (n.pagination = { el: null, $el: null, bullets: [] });
        var s = 0;
        function l() {
          return (
            !n.params.pagination.el ||
            !n.pagination.el ||
            !n.pagination.$el ||
            0 === n.pagination.$el.length
          );
        }
        function u(e, t) {
          var r = n.params.pagination.bulletActiveClass;
          e[t]()
            .addClass("".concat(r, "-").concat(t))
          [t]()
            .addClass("".concat(r, "-").concat(t, "-").concat(t));
        }
        function c() {
          var e = n.rtl,
            r = n.params.pagination;
          if (!l()) {
            var a,
              o =
                n.virtual && n.params.virtual.enabled
                  ? n.virtual.slides.length
                  : n.slides.length,
              c = n.pagination.$el,
              d = n.params.loop
                ? Math.ceil((o - 2 * n.loopedSlides) / n.params.slidesPerGroup)
                : n.snapGrid.length;
            if (
              (n.params.loop
                ? ((a = Math.ceil(
                  (n.activeIndex - n.loopedSlides) / n.params.slidesPerGroup
                )) >
                  o - 1 - 2 * n.loopedSlides && (a -= o - 2 * n.loopedSlides),
                  a > d - 1 && (a -= d),
                  a < 0 && "bullets" !== n.params.paginationType && (a = d + a))
                : (a =
                  "undefined" !== typeof n.snapIndex
                    ? n.snapIndex
                    : n.activeIndex || 0),
                "bullets" === r.type &&
                n.pagination.bullets &&
                n.pagination.bullets.length > 0)
            ) {
              var f,
                p,
                h,
                v = n.pagination.bullets;
              if (
                (r.dynamicBullets &&
                  ((t = v
                    .eq(0)
                  [n.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                    c.css(
                      n.isHorizontal() ? "width" : "height",
                      "".concat(t * (r.dynamicMainBullets + 4), "px")
                    ),
                    r.dynamicMainBullets > 1 &&
                    void 0 !== n.previousIndex &&
                    ((s += a - (n.previousIndex - n.loopedSlides || 0)) >
                      r.dynamicMainBullets - 1
                      ? (s = r.dynamicMainBullets - 1)
                      : s < 0 && (s = 0)),
                    (f = Math.max(a - s, 0)),
                    (h =
                      ((p = f + (Math.min(v.length, r.dynamicMainBullets) - 1)) +
                        f) /
                      2)),
                  v.removeClass(
                    ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                      .map(function (e) {
                        return "".concat(r.bulletActiveClass).concat(e);
                      })
                      .join(" ")
                  ),
                  c.length > 1)
              )
                v.each(function (e) {
                  var t = mf(e),
                    n = t.index();
                  n === a && t.addClass(r.bulletActiveClass),
                    r.dynamicBullets &&
                    (n >= f &&
                      n <= p &&
                      t.addClass("".concat(r.bulletActiveClass, "-main")),
                      n === f && u(t, "prev"),
                      n === p && u(t, "next"));
                });
              else {
                var m = v.eq(a),
                  g = m.index();
                if ((m.addClass(r.bulletActiveClass), r.dynamicBullets)) {
                  for (var y = v.eq(f), b = v.eq(p), x = f; x <= p; x += 1)
                    v.eq(x).addClass("".concat(r.bulletActiveClass, "-main"));
                  if (n.params.loop)
                    if (g >= v.length) {
                      for (var w = r.dynamicMainBullets; w >= 0; w -= 1)
                        v.eq(v.length - w).addClass(
                          "".concat(r.bulletActiveClass, "-main")
                        );
                      v.eq(v.length - r.dynamicMainBullets - 1).addClass(
                        "".concat(r.bulletActiveClass, "-prev")
                      );
                    } else u(y, "prev"), u(b, "next");
                  else u(y, "prev"), u(b, "next");
                }
              }
              if (r.dynamicBullets) {
                var E = Math.min(v.length, r.dynamicMainBullets + 4),
                  S = (t * E - t) / 2 - h * t,
                  C = e ? "right" : "left";
                v.css(n.isHorizontal() ? C : "top", "".concat(S, "px"));
              }
            }
            if (
              ("fraction" === r.type &&
                (c
                  .find(np(r.currentClass))
                  .text(r.formatFractionCurrent(a + 1)),
                  c.find(np(r.totalClass)).text(r.formatFractionTotal(d))),
                "progressbar" === r.type)
            ) {
              var k;
              k = r.progressbarOpposite
                ? n.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : n.isHorizontal()
                  ? "horizontal"
                  : "vertical";
              var T = (a + 1) / d,
                P = 1,
                j = 1;
              "horizontal" === k ? (P = T) : (j = T),
                c
                  .find(np(r.progressbarFillClass))
                  .transform(
                    "translate3d(0,0,0) scaleX("
                      .concat(P, ") scaleY(")
                      .concat(j, ")")
                  )
                  .transition(n.params.speed);
            }
            "custom" === r.type && r.renderCustom
              ? (c.html(r.renderCustom(n, a + 1, d)),
                i("paginationRender", c[0]))
              : i("paginationUpdate", c[0]),
              n.params.watchOverflow &&
              n.enabled &&
              c[n.isLocked ? "addClass" : "removeClass"](r.lockClass);
          }
        }
        function d() {
          var e = n.params.pagination;
          if (!l()) {
            var t =
              n.virtual && n.params.virtual.enabled
                ? n.virtual.slides.length
                : n.slides.length,
              r = n.pagination.$el,
              a = "";
            if ("bullets" === e.type) {
              var o = n.params.loop
                ? Math.ceil((t - 2 * n.loopedSlides) / n.params.slidesPerGroup)
                : n.snapGrid.length;
              n.params.freeMode &&
                n.params.freeMode.enabled &&
                !n.params.loop &&
                o > t &&
                (o = t);
              for (var s = 0; s < o; s += 1)
                e.renderBullet
                  ? (a += e.renderBullet.call(n, s, e.bulletClass))
                  : (a += "<"
                    .concat(e.bulletElement, ' class="')
                    .concat(e.bulletClass, '"></')
                    .concat(e.bulletElement, ">"));
              r.html(a), (n.pagination.bullets = r.find(np(e.bulletClass)));
            }
            "fraction" === e.type &&
              ((a = e.renderFraction
                ? e.renderFraction.call(n, e.currentClass, e.totalClass)
                : '<span class="'.concat(e.currentClass, '"></span>') +
                " / " +
                '<span class="'.concat(e.totalClass, '"></span>')),
                r.html(a)),
              "progressbar" === e.type &&
              ((a = e.renderProgressbar
                ? e.renderProgressbar.call(n, e.progressbarFillClass)
                : '<span class="'.concat(
                  e.progressbarFillClass,
                  '"></span>'
                )),
                r.html(a)),
              "custom" !== e.type && i("paginationRender", n.pagination.$el[0]);
          }
        }
        function f() {
          n.params.pagination = ep(
            n,
            n.originalParams.pagination,
            n.params.pagination,
            { el: "swiper-pagination" }
          );
          var e = n.params.pagination;
          if (e.el) {
            var t = mf(e.el);
            0 !== t.length &&
              (n.params.uniqueNavElements &&
                "string" === typeof e.el &&
                t.length > 1 &&
                (t = n.$el.find(e.el)).length > 1 &&
                (t = t.filter(function (e) {
                  return mf(e).parents(".swiper")[0] === n.el;
                })),
                "bullets" === e.type &&
                e.clickable &&
                t.addClass(e.clickableClass),
                t.addClass(e.modifierClass + e.type),
                t.addClass(
                  n.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                "bullets" === e.type &&
                e.dynamicBullets &&
                (t.addClass(
                  "".concat(e.modifierClass).concat(e.type, "-dynamic")
                ),
                  (s = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type &&
                e.progressbarOpposite &&
                t.addClass(e.progressbarOppositeClass),
                e.clickable &&
                t.on("click", np(e.bulletClass), function (e) {
                  e.preventDefault();
                  var t = mf(this).index() * n.params.slidesPerGroup;
                  n.params.loop && (t += n.loopedSlides), n.slideTo(t);
                }),
                Object.assign(n.pagination, { $el: t, el: t[0] }),
                n.enabled || t.addClass(e.lockClass));
          }
        }
        function p() {
          var e = n.params.pagination;
          if (!l()) {
            var t = n.pagination.$el;
            t.removeClass(e.hiddenClass),
              t.removeClass(e.modifierClass + e.type),
              t.removeClass(
                n.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              n.pagination.bullets &&
              n.pagination.bullets.removeClass &&
              n.pagination.bullets.removeClass(e.bulletActiveClass),
              e.clickable && t.off("click", np(e.bulletClass));
          }
        }
        a("init", function () {
          f(), d(), c();
        }),
          a("activeIndexChange", function () {
            (n.params.loop || "undefined" === typeof n.snapIndex) && c();
          }),
          a("snapIndexChange", function () {
            n.params.loop || c();
          }),
          a("slidesLengthChange", function () {
            n.params.loop && (d(), c());
          }),
          a("snapGridLengthChange", function () {
            n.params.loop || (d(), c());
          }),
          a("destroy", function () {
            p();
          }),
          a("enable disable", function () {
            var e = n.pagination.$el;
            e &&
              e[n.enabled ? "removeClass" : "addClass"](
                n.params.pagination.lockClass
              );
          }),
          a("lock unlock", function () {
            c();
          }),
          a("click", function (e, t) {
            var r = t.target,
              a = n.pagination.$el;
            if (
              n.params.pagination.el &&
              n.params.pagination.hideOnClick &&
              a.length > 0 &&
              !mf(r).hasClass(n.params.pagination.bulletClass)
            ) {
              if (
                n.navigation &&
                ((n.navigation.nextEl && r === n.navigation.nextEl) ||
                  (n.navigation.prevEl && r === n.navigation.prevEl))
              )
                return;
              var o = a.hasClass(n.params.pagination.hiddenClass);
              i(!0 === o ? "paginationShow" : "paginationHide"),
                a.toggleClass(n.params.pagination.hiddenClass);
            }
          }),
          Object.assign(n.pagination, {
            render: d,
            update: c,
            init: f,
            destroy: p,
          });
      }
      function ap(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function ip(e, t) {
        var n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter(function (e) {
            return n.indexOf(e) < 0;
          })
          .forEach(function (n) {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : ap(t[n]) && ap(e[n]) && Object.keys(t[n]).length > 0
                ? t[n].__swiper__
                  ? (e[n] = t[n])
                  : ip(e[n], t[n])
                : (e[n] = t[n]);
          });
      }
      function op(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
          "undefined" === typeof e.navigation.nextEl &&
          "undefined" === typeof e.navigation.prevEl
        );
      }
      function sp(e) {
        return (
          void 0 === e && (e = {}),
          e.pagination && "undefined" === typeof e.pagination.el
        );
      }
      function lp(e) {
        return (
          void 0 === e && (e = {}),
          e.scrollbar && "undefined" === typeof e.scrollbar.el
        );
      }
      function up(e) {
        void 0 === e && (e = "");
        var t = e
          .split(" ")
          .map(function (e) {
            return e.trim();
          })
          .filter(function (e) {
            return !!e;
          }),
          n = [];
        return (
          t.forEach(function (e) {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(" ")
        );
      }
      var cp = [
        "modules",
        "init",
        "_direction",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_preloadImages",
        "updateOnImagesReady",
        "_loop",
        "_loopAdditionalSlides",
        "_loopedSlides",
        "_loopFillGroupWithBlank",
        "loopPreventsSlide",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideBlankClass",
        "slideActiveClass",
        "slideDuplicateActiveClass",
        "slideVisibleClass",
        "slideDuplicateClass",
        "slideNextClass",
        "slideDuplicateNextClass",
        "slidePrevClass",
        "slideDuplicatePrevClass",
        "wrapperClass",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "lazy",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
      ];
      function dp(e, t) {
        var n = t.slidesPerView;
        if (t.breakpoints) {
          var r = Jf.prototype.getBreakpoint(t.breakpoints),
            a = r in t.breakpoints ? t.breakpoints[r] : void 0;
          a && a.slidesPerView && (n = a.slidesPerView);
        }
        var i = Math.ceil(parseFloat(t.loopedSlides || n, 10));
        return (i += t.loopAdditionalSlides) > e.length && (i = e.length), i;
      }
      function fp(e) {
        var n = [];
        return (
          t.Children.toArray(e).forEach(function (e) {
            e.type && "SwiperSlide" === e.type.displayName
              ? n.push(e)
              : e.props &&
              e.props.children &&
              fp(e.props.children).forEach(function (e) {
                return n.push(e);
              });
          }),
          n
        );
      }
      function pp(e) {
        var n = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          t.Children.toArray(e).forEach(function (e) {
            if (e.type && "SwiperSlide" === e.type.displayName) n.push(e);
            else if (e.props && e.props.slot && r[e.props.slot])
              r[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              var t = fp(e.props.children);
              t.length > 0
                ? t.forEach(function (e) {
                  return n.push(e);
                })
                : r["container-end"].push(e);
            } else r["container-end"].push(e);
          }),
          { slides: n, slots: r }
        );
      }
      function hp(e) {
        var t,
          n,
          r,
          a,
          i,
          o = e.swiper,
          s = e.slides,
          l = e.passedParams,
          u = e.changedParams,
          c = e.nextEl,
          d = e.prevEl,
          f = e.scrollbarEl,
          p = e.paginationEl,
          h = u.filter(function (e) {
            return "children" !== e && "direction" !== e;
          }),
          v = o.params,
          m = o.pagination,
          g = o.navigation,
          y = o.scrollbar,
          b = o.virtual,
          x = o.thumbs;
        u.includes("thumbs") &&
          l.thumbs &&
          l.thumbs.swiper &&
          v.thumbs &&
          !v.thumbs.swiper &&
          (t = !0),
          u.includes("controller") &&
          l.controller &&
          l.controller.control &&
          v.controller &&
          !v.controller.control &&
          (n = !0),
          u.includes("pagination") &&
          l.pagination &&
          (l.pagination.el || p) &&
          (v.pagination || !1 === v.pagination) &&
          m &&
          !m.el &&
          (r = !0),
          u.includes("scrollbar") &&
          l.scrollbar &&
          (l.scrollbar.el || f) &&
          (v.scrollbar || !1 === v.scrollbar) &&
          y &&
          !y.el &&
          (a = !0),
          u.includes("navigation") &&
          l.navigation &&
          (l.navigation.prevEl || d) &&
          (l.navigation.nextEl || c) &&
          (v.navigation || !1 === v.navigation) &&
          g &&
          !g.prevEl &&
          !g.nextEl &&
          (i = !0);
        (h.forEach(function (e) {
          if (ap(v[e]) && ap(l[e])) ip(v[e], l[e]);
          else {
            var t = l[e];
            (!0 !== t && !1 !== t) ||
              ("navigation" !== e && "pagination" !== e && "scrollbar" !== e)
              ? (v[e] = l[e])
              : !1 === t &&
              o[(n = e)] &&
              (o[n].destroy(),
                "navigation" === n
                  ? ((v[n].prevEl = void 0),
                    (v[n].nextEl = void 0),
                    (o[n].prevEl = void 0),
                    (o[n].nextEl = void 0))
                  : ((v[n].el = void 0), (o[n].el = void 0)));
          }
          var n;
        }),
          h.includes("controller") &&
          !n &&
          o.controller &&
          o.controller.control &&
          v.controller &&
          v.controller.control &&
          (o.controller.control = v.controller.control),
          u.includes("children") && b && v.virtual.enabled
            ? ((b.slides = s), b.update(!0))
            : u.includes("children") &&
            o.lazy &&
            o.params.lazy.enabled &&
            o.lazy.load(),
          t) &&
          x.init() &&
          x.update(!0);
        n && (o.controller.control = v.controller.control),
          r && (p && (v.pagination.el = p), m.init(), m.render(), m.update()),
          a &&
          (f && (v.scrollbar.el = f),
            y.init(),
            y.updateSize(),
            y.setTranslate()),
          i &&
          (c && (v.navigation.nextEl = c),
            d && (v.navigation.prevEl = d),
            g.init(),
            g.update()),
          u.includes("allowSlideNext") && (o.allowSlideNext = l.allowSlideNext),
          u.includes("allowSlidePrev") && (o.allowSlidePrev = l.allowSlidePrev),
          u.includes("direction") && o.changeDirection(l.direction, !1),
          o.update();
      }
      function vp(e, n) {
        return "undefined" === typeof window
          ? (0, t.useEffect)(e, n)
          : (0, t.useLayoutEffect)(e, n);
      }
      var mp = (0, t.createContext)(null),
        gp = (0, t.createContext)(null),
        yp = ["className", "tag", "wrapperTag", "children", "onSwiper"];
      function bp() {
        return (
          (bp =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          bp.apply(this, arguments)
        );
      }
      var xp = (0, t.forwardRef)(function (e, n) {
        var r = void 0 === e ? {} : e,
          a = r.className,
          i = r.tag,
          s = void 0 === i ? "div" : i,
          l = r.wrapperTag,
          u = void 0 === l ? "div" : l,
          c = r.children,
          d = r.onSwiper,
          f = Ie(r, yp),
          p = !1,
          h = o((0, t.useState)("swiper"), 2),
          v = h[0],
          m = h[1],
          g = o((0, t.useState)(null), 2),
          y = g[0],
          b = g[1],
          x = o((0, t.useState)(!1), 2),
          w = x[0],
          E = x[1],
          S = (0, t.useRef)(!1),
          C = (0, t.useRef)(null),
          k = (0, t.useRef)(null),
          T = (0, t.useRef)(null),
          P = (0, t.useRef)(null),
          j = (0, t.useRef)(null),
          O = (0, t.useRef)(null),
          M = (0, t.useRef)(null),
          N = (0, t.useRef)(null),
          L = (function (e) {
            void 0 === e && (e = {});
            var t = { on: {} },
              n = {},
              r = {};
            ip(t, Jf.defaults),
              ip(t, Jf.extendedDefaults),
              (t._emitClasses = !0),
              (t.init = !1);
            var a = {},
              i = cp.map(function (e) {
                return e.replace(/_/, "");
              });
            return (
              Object.keys(e).forEach(function (o) {
                i.indexOf(o) >= 0
                  ? ap(e[o])
                    ? ((t[o] = {}), (r[o] = {}), ip(t[o], e[o]), ip(r[o], e[o]))
                    : ((t[o] = e[o]), (r[o] = e[o]))
                  : 0 === o.search(/on[A-Z]/) && "function" === typeof e[o]
                    ? (n["".concat(o[2].toLowerCase()).concat(o.substr(3))] =
                      e[o])
                    : (a[o] = e[o]);
              }),
              ["navigation", "pagination", "scrollbar"].forEach(function (e) {
                !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e];
              }),
              { params: t, passedParams: r, rest: a, events: n }
            );
          })(f),
          A = L.params,
          z = L.passedParams,
          _ = L.rest,
          R = L.events,
          D = pp(c),
          V = D.slides,
          I = D.slots,
          F = function () {
            E(!w);
          };
        Object.assign(A.on, {
          _containerClasses: function (e, t) {
            m(t);
          },
        });
        var B = function () {
          if (
            (Object.assign(A.on, R),
              (p = !0),
              (k.current = new Jf(A)),
              (k.current.loopCreate = function () { }),
              (k.current.loopDestroy = function () { }),
              A.loop && (k.current.loopedSlides = dp(V, A)),
              k.current.virtual && k.current.params.virtual.enabled)
          ) {
            k.current.virtual.slides = V;
            var e = {
              cache: !1,
              slides: V,
              renderExternal: b,
              renderExternalUpdate: !1,
            };
            ip(k.current.params.virtual, e),
              ip(k.current.originalParams.virtual, e);
          }
        };
        C.current || B(), k.current && k.current.on("_beforeBreakpoint", F);
        return (
          (0, t.useEffect)(function () {
            return function () {
              k.current && k.current.off("_beforeBreakpoint", F);
            };
          }),
          (0, t.useEffect)(function () {
            !S.current &&
              k.current &&
              (k.current.emitSlidesClasses(), (S.current = !0));
          }),
          vp(function () {
            if ((n && (n.current = C.current), C.current))
              return (
                k.current.destroyed && B(),
                (function (e, t) {
                  var n = e.el,
                    r = e.nextEl,
                    a = e.prevEl,
                    i = e.paginationEl,
                    o = e.scrollbarEl,
                    s = e.swiper;
                  op(t) &&
                    r &&
                    a &&
                    ((s.params.navigation.nextEl = r),
                      (s.originalParams.navigation.nextEl = r),
                      (s.params.navigation.prevEl = a),
                      (s.originalParams.navigation.prevEl = a)),
                    sp(t) &&
                    i &&
                    ((s.params.pagination.el = i),
                      (s.originalParams.pagination.el = i)),
                    lp(t) &&
                    o &&
                    ((s.params.scrollbar.el = o),
                      (s.originalParams.scrollbar.el = o)),
                    s.init(n);
                })(
                  {
                    el: C.current,
                    nextEl: j.current,
                    prevEl: O.current,
                    paginationEl: M.current,
                    scrollbarEl: N.current,
                    swiper: k.current,
                  },
                  A
                ),
                d && d(k.current),
                function () {
                  k.current &&
                    !k.current.destroyed &&
                    k.current.destroy(!0, !1);
                }
              );
          }, []),
          vp(function () {
            !p &&
              R &&
              k.current &&
              Object.keys(R).forEach(function (e) {
                k.current.on(e, R[e]);
              });
            var e = (function (e, t, n, r) {
              var a = [];
              if (!t) return a;
              var i = function (e) {
                a.indexOf(e) < 0 && a.push(e);
              },
                o = r.map(function (e) {
                  return e.key;
                }),
                s = n.map(function (e) {
                  return e.key;
                });
              return (
                o.join("") !== s.join("") && i("children"),
                r.length !== n.length && i("children"),
                cp
                  .filter(function (e) {
                    return "_" === e[0];
                  })
                  .map(function (e) {
                    return e.replace(/_/, "");
                  })
                  .forEach(function (n) {
                    if (n in e && n in t)
                      if (ap(e[n]) && ap(t[n])) {
                        var r = Object.keys(e[n]),
                          a = Object.keys(t[n]);
                        r.length !== a.length
                          ? i(n)
                          : (r.forEach(function (r) {
                            e[n][r] !== t[n][r] && i(n);
                          }),
                            a.forEach(function (r) {
                              e[n][r] !== t[n][r] && i(n);
                            }));
                      } else e[n] !== t[n] && i(n);
                  }),
                a
              );
            })(z, T.current, V, P.current);
            return (
              (T.current = z),
              (P.current = V),
              e.length &&
              k.current &&
              !k.current.destroyed &&
              hp({
                swiper: k.current,
                slides: V,
                passedParams: z,
                changedParams: e,
                nextEl: j.current,
                prevEl: O.current,
                scrollbarEl: N.current,
                paginationEl: M.current,
              }),
              function () {
                R &&
                  k.current &&
                  Object.keys(R).forEach(function (e) {
                    k.current.off(e, R[e]);
                  });
              }
            );
          }),
          vp(
            function () {
              var e;
              !(e = k.current) ||
                e.destroyed ||
                !e.params.virtual ||
                (e.params.virtual && !e.params.virtual.enabled) ||
                (e.updateSlides(),
                  e.updateProgress(),
                  e.updateSlidesClasses(),
                  e.lazy && e.params.lazy.enabled && e.lazy.load(),
                  e.parallax &&
                  e.params.parallax &&
                  e.params.parallax.enabled &&
                  e.parallax.setTranslate());
            },
            [y]
          ),
          t.createElement(
            s,
            bp(
              {
                ref: C,
                className: up("".concat(v).concat(a ? " ".concat(a) : "")),
              },
              _
            ),
            t.createElement(
              gp.Provider,
              { value: k.current },
              I["container-start"],
              op(A) &&
              t.createElement(
                t.Fragment,
                null,
                t.createElement("div", {
                  ref: O,
                  className: "swiper-button-prev",
                }),
                t.createElement("div", {
                  ref: j,
                  className: "swiper-button-next",
                })
              ),
              lp(A) &&
              t.createElement("div", {
                ref: N,
                className: "swiper-scrollbar",
              }),
              sp(A) &&
              t.createElement("div", {
                ref: M,
                className: "swiper-pagination",
              }),
              t.createElement(
                u,
                { className: "swiper-wrapper" },
                I["wrapper-start"],
                A.virtual
                  ? (function (e, n, r) {
                    if (!r) return null;
                    var a = e.isHorizontal()
                      ? _e(
                        {},
                        e.rtlTranslate ? "right" : "left",
                        "".concat(r.offset, "px")
                      )
                      : { top: "".concat(r.offset, "px") };
                    return n
                      .filter(function (e, t) {
                        return t >= r.from && t <= r.to;
                      })
                      .map(function (n) {
                        return t.cloneElement(n, { swiper: e, style: a });
                      });
                  })(k.current, V, y)
                  : !A.loop || (k.current && k.current.destroyed)
                    ? V.map(function (e) {
                      return t.cloneElement(e, { swiper: k.current });
                    })
                    : (function (e, n, r) {
                      var a = n.map(function (n, r) {
                        return t.cloneElement(n, {
                          swiper: e,
                          "data-swiper-slide-index": r,
                        });
                      });
                      function i(e, n, a) {
                        return t.cloneElement(e, {
                          key: ""
                            .concat(e.key, "-duplicate-")
                            .concat(n, "-")
                            .concat(a),
                          className: ""
                            .concat(e.props.className || "", " ")
                            .concat(r.slideDuplicateClass),
                        });
                      }
                      if (r.loopFillGroupWithBlank) {
                        var o =
                          r.slidesPerGroup - (a.length % r.slidesPerGroup);
                        if (o !== r.slidesPerGroup)
                          for (var s = 0; s < o; s += 1) {
                            var l = t.createElement("div", {
                              className: ""
                                .concat(r.slideClass, " ")
                                .concat(r.slideBlankClass),
                            });
                            a.push(l);
                          }
                      }
                      "auto" !== r.slidesPerView ||
                        r.loopedSlides ||
                        (r.loopedSlides = a.length);
                      var u = dp(a, r),
                        c = [],
                        d = [];
                      return (
                        a.forEach(function (e, t) {
                          t < u && d.push(i(e, t, "prepend")),
                            t < a.length &&
                            t >= a.length - u &&
                            c.push(i(e, t, "append"));
                        }),
                        e && (e.loopedSlides = u),
                        [].concat(c, dn(a), d)
                      );
                    })(k.current, V, A),
                I["wrapper-end"]
              ),
              I["container-end"]
            )
          )
        );
      });
      xp.displayName = "Swiper";
      var wp = [
        "tag",
        "children",
        "className",
        "swiper",
        "zoom",
        "virtualIndex",
      ];
      function Ep() {
        return (
          (Ep =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Ep.apply(this, arguments)
        );
      }
      var Sp = (0, t.forwardRef)(function (e, n) {
        var r = void 0 === e ? {} : e,
          a = r.tag,
          i = void 0 === a ? "div" : a,
          s = r.children,
          l = r.className,
          u = void 0 === l ? "" : l,
          c = r.swiper,
          d = r.zoom,
          f = r.virtualIndex,
          p = Ie(r, wp),
          h = (0, t.useRef)(null),
          v = o((0, t.useState)("swiper-slide"), 2),
          m = v[0],
          g = v[1];
        function y(e, t, n) {
          t === h.current && g(n);
        }
        vp(function () {
          if ((n && (n.current = h.current), h.current && c)) {
            if (!c.destroyed)
              return (
                c.on("_slideClass", y),
                function () {
                  c && c.off("_slideClass", y);
                }
              );
            "swiper-slide" !== m && g("swiper-slide");
          }
        }),
          vp(
            function () {
              c && h.current && g(c.getSlideClasses(h.current));
            },
            [c]
          );
        var b = {
          isActive:
            m.indexOf("swiper-slide-active") >= 0 ||
            m.indexOf("swiper-slide-duplicate-active") >= 0,
          isVisible: m.indexOf("swiper-slide-visible") >= 0,
          isDuplicate: m.indexOf("swiper-slide-duplicate") >= 0,
          isPrev:
            m.indexOf("swiper-slide-prev") >= 0 ||
            m.indexOf("swiper-slide-duplicate-prev") >= 0,
          isNext:
            m.indexOf("swiper-slide-next") >= 0 ||
            m.indexOf("swiper-slide-duplicate-next") >= 0,
        },
          x = function () {
            return "function" === typeof s ? s(b) : s;
          };
        return t.createElement(
          i,
          Ep(
            {
              ref: h,
              className: up("".concat(m).concat(u ? " ".concat(u) : "")),
              "data-swiper-slide-index": f,
            },
            p
          ),
          t.createElement(
            mp.Provider,
            { value: b },
            d
              ? t.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" === typeof d ? d : void 0,
                },
                x()
              )
              : x()
          )
        );
      });
      Sp.displayName = "SwiperSlide";
      var Cp = n.p + "static/media/warlord.jpg",
        kp = n.p + "static/media/soulstealer.jpg",
        Tp = n.p + "static/media/shadowassassin.jpg",
        Pp = n.p + "static/media/almighty.jpg",
        jp = n.p + "static/media/silenced.jpg";
      var Op = function () {
        return (0, Ze.jsxs)("div", {
          className: "oniexamples",
          children: [
            (0, Ze.jsxs)(xp, {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 1,
              loop: !0,
              loopFillGroupWithBlank: !0,
              pagination: { clickable: !0, el: ".custom-pagination" },
              modules: [rp],
              className: "mySwiper",
              children: [
                (0, Ze.jsx)(Sp, {
                  children: [
                    (0, Ze.jsx)("div", {
                      children: [
                        (0, Ze.jsx)("div", {
                          className: "imageClassTag",
                          children: (0, Ze.jsx)("a", {
                            children: "WARLORD"
                          }),
                        }),
                        (0, Ze.jsx)("img", {
                          className: "oniimage",
                          src: Cp,
                          alt: "Warlord",
                        })
                      ]
                    })
                  ],
                }),
                (0, Ze.jsx)(Sp, {
                  children: [
                    (0, Ze.jsx)("div", {
                      children: [
                        (0, Ze.jsx)("div", {
                          className: "imageClassTag",
                          children: (0, Ze.jsx)("a", {
                            children: "SOULSTEALER"
                          }),
                        }),
                        (0, Ze.jsx)("img", {
                          className: "oniimage",
                          src: kp,
                          alt: "Soulstealer",
                        })
                      ]
                    })
                  ],
                }),
                (0, Ze.jsx)(Sp, {
                  children: [
                    (0, Ze.jsx)("div", {
                      children: [
                        (0, Ze.jsx)("div", {
                          className: "imageClassTag",
                          children: (0, Ze.jsx)("a", {
                            children: "ALMIGHTY"
                          }),
                        }),
                        (0, Ze.jsx)("img", {
                          className: "oniimage",
                          src: Pp,
                          alt: "Almighty",
                        })
                      ]
                    })
                  ],
                }),
                (0, Ze.jsx)(Sp, {
                  children: [
                    (0, Ze.jsx)("div", {
                      children: [
                        (0, Ze.jsx)("div", {
                          className: "imageClassTag",
                          children: (0, Ze.jsx)("a", {
                            children: "SHADOW ASSASSIN"
                          }),
                        }),
                        (0, Ze.jsx)("img", {
                          className: "oniimage",
                          src: Tp,
                          alt: "Shadow Assassin",
                        })
                      ]
                    })
                  ],
                }),
                (0, Ze.jsx)(Sp, {
                  children: [
                    (0, Ze.jsx)("div", {
                      children: [
                        (0, Ze.jsx)("div", {
                          className: "imageClassTag",
                          children: (0, Ze.jsx)("a", {
                            children: "SILENCED"
                          }),
                        }),
                        (0, Ze.jsx)("img", {
                          className: "oniimage",
                          src: jp,
                          alt: "Silenced",
                        })
                      ]
                    })
                  ],
                }),
              ],
            }),
            (0, Ze.jsx)("div", { className: "custom-pagination" }),
          ],
        });
      };
      var Mp = function () {
        return (0, Ze.jsx)(Mr, {
          className: "Roadmap",
          children: (0, Ze.jsxs)(xp, {
            navigation: !0,
            modules: [tp],
            className: "Roadmapslider",
            children: [
              (0, Ze.jsx)(Sp, {
                children: (0, Ze.jsxs)(Fd, {
                  children: [
                    (0, Ze.jsx)(Ud, {
                      xs: "1",
                      sm: "1",
                      md: "1",
                      lg: "1",
                      xl: "1",
                      xxl: "1",
                      className: "justify-content-start",
                    }),
                    (0, Ze.jsx)(Ud, {
                      xs: "12",
                      sm: "12",
                      md: "12",
                      lg: "3",
                      xl: "3",
                      xxl: "3",
                      children: (0, Ze.jsx)("h3", {
                        className: "onih3",
                        children: "PHASE ONE",
                      }),
                    }),
                    (0, Ze.jsxs)(Ud, {
                      xs: "12",
                      sm: "12",
                      md: "12",
                      lg: "7",
                      xl: "7",
                      xxl: "7",
                      children: [
                        (0, Ze.jsx)("div", {
                          className: "roadmap-title-phases",
                          children: "SHOGUN",
                        }),
                        (0, Ze.jsx)("div", {
                          className: "roadmap-title-phases",
                          children: "RELEASE",
                        }),
                        /*
                        (0, Ze.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "1285.192",
                          height: "458.514",
                          viewBox: "0 0 1285.192 458.514",
                          className: "roadmapimage",
                          children: [
                            (0, Ze.jsxs)("g", {
                            strokeWidth: "1",
                            "data-name": "Group 311",
                            transform: "translate(0 -.586)",
                            children: [
                              (0, Ze.jsx)("path", {
                                d: "M92.76 376.868H64.242l-13.564 76.86H.6l36.863-208.672h87.991c53.558 0 77.208 27.82 69.556 73.034-5.217 30.953-23.3 47.994-50.776 54.95l41.038 79.992v.7H126.5zm-13.216-87.3l-8 45.907h40.691c19.826 0 31.3-7.3 33.737-20.867 2.782-16.346-4.869-25.04-25.04-25.04z",
                                "data-name": "Path 74",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M233.608 245.056h157.2l-8.347 47.3H275.344l-6.26 35.128h98.772l-7.3 41.734H261.78l-6.608 37.213H362.64l-8.349 47.3H196.743z",
                                "data-name": "Path 75",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M431.149 406.429h89.382l-8.347 47.3H372.719l36.519-208.673h50.087z",
                                "data-name": "Path 76",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M563.301 245.056h157.2l-8.347 47.3H605.035l-6.26 35.128h98.775l-7.307 41.732h-98.772l-6.608 37.213H692.33l-8.347 47.3H526.436z",
                                "data-name": "Path 77",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M688.147 453.729L805.7 245.056h58.777L907.95 453.73z",
                                "data-name": "Path 78",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M747.411 403.854l71.019-129.168h24.762c1.461 10.016 25.11 129.168 25.11 129.168z",
                                "data-name": "Path 81",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M905.167 386.259l50.431-9.388c.7 25.038 18.085 38.6 45.907 38.6 19.824 0 30.955-6.258 33.039-17.389 2.437-14.952-6.258-22.258-43.125-28.866-54.952-9.39-68.863-36.865-62.6-73.732 5.912-34.43 35.822-55.3 86.252-55.3 61.558 0 79.294 30.953 82.424 67.124l-51.472 10.084c-1.739-23.649-10.781-35.126-36.865-35.126-19.13 0-29.564 6.956-31.3 17.389-2.087 11.827 2.087 21.565 44.171 28.866 57.384 10.088 68.861 39.649 62.949 73.384-6.26 34.78-34.431 56.691-89.034 56.691-67.128.004-89.384-33.036-90.777-72.337z",
                                "data-name": "Path 84",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M1127.396 245.056h157.2l-8.347 47.3H1169.13l-6.26 35.128h98.775l-7.306 41.732h-98.772l-6.608 37.213h107.467l-8.347 47.3h-157.548z",
                                "data-name": "Path 85",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M 59 75 C 69 8 59.021 1.086 119.885 1.086 c 35.126 0 61.994 12.955 78.558 34.474 s 22.823 51.6 19.557 106.44 c -17 89 -56.18 82.579 -176.18 79.579 z",
                                "data-name": "Path 86",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M114.729 44.579c6.7 0 18.413 1.139 23.912 2.7a45.976 45.976 0 0126.114 19.61c7.4 11.386 11.446 31.844 8.369 48.968-1.578 8.779-5.112 22.571-9.192 29.683a57.876 57.876 0 01-30.668 26.147c-7.093 2.539-20.534 4.317-29.142 4.317-6.79 0-18.537-1.126-24.027-2.678a45.219 45.219 0 01-26.152-19.756c-7.219-11.4-10.873-31.876-7.869-48.837 1.55-8.755 5.052-22.515 9.129-29.59a58.486 58.486 0 0130.481-26.11c7.139-2.619 20.568-4.454 29.045-4.454z",
                                "data-name": "Path 89",
                              }),
                            ],
                          }),
                          ]
                        }),
                        */
                        (0, Ze.jsx)("p", {
                          className: "roadmap-p-phases",
                          children:
                            "The Aptos Shogun Experiment is more than a simple collection of 6,659 NFTs. The NFT is simply a shell that allows you to enter into a virtual world where you will experience everything as a different person.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, Ze.jsx)(Sp, {
                children: (0, Ze.jsxs)(Fd, {
                  children: [
                    (0, Ze.jsx)(Ud, {
                      xs: "12",
                      sm: "12",
                      md: "12",
                      lg: "3",
                      xl: "3",
                      xxl: "3",
                      children: (0, Ze.jsx)("h3", {
                        className: "onih3",
                        children: "PHASE TWO",
                      }),
                    }),
                    (0, Ze.jsxs)(Ud, {
                      xs: "12",
                      sm: "12",
                      md: "12",
                      lg: "9",
                      xl: "9",
                      xxl: "9",
                      children: [
                        (0, Ze.jsx)("div", {
                          className: "roadmap-title-phases",
                          children: "SHOGUN",
                        }),
                        (0, Ze.jsx)("div", {
                          className: "roadmap-title-phases",
                          children: "2.0",
                        }),
                        /*
                        (0, Ze.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "521.364",
                          height: "454.884",
                          viewBox: "0 0 521.364 454.884",
                          className: "roadmapimage",
                          children: (0, Ze.jsxs)("g", {
                            strokeWidth: "1",
                            "data-name": "Group 301",
                            transform: "translate(443.345 -8.575)",
                            children: [
                              (0, Ze.jsx)("path", {
                                d: "M-425.906 106.143c9.982-57.14 54.384-97.068 114.624-97.068 34.765 0 61.357 12.822 77.749 34.119s22.588 51.073 16.565 84.978c-10.326 56.8-53.01 97.068-115.311 97.068-35.627 0-62.045-12.994-78.05-34.377s-21.6-51.16-15.577-84.72z",
                                "data-name": "Path 93",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M-314.687 37.774c8.84 0 20.586 1.39 27.81 3.569a58.091 58.091 0 0131.109 22.524c10.281 14.674 15.1 38.041 11.045 60.636-2.085 11.587-6.512 25.942-12.131 35.186a73.779 73.779 0 01-37.125 31.157c-9.3 3.5-23.352 5.7-34.711 5.7-8.96 0-20.747-1.377-27.962-3.535a56.988 56.988 0 01-31.163-22.73c-10.034-14.713-14.347-38.08-10.382-60.464 2.046-11.552 6.43-25.865 12.047-35.064a74.667 74.667 0 0136.882-31.108c9.357-3.611 23.395-5.871 34.581-5.871z",
                                "data-name": "Path 95",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M-176.749 343.862c9.982-57.14 54.384-97.069 114.622-97.069 34.765 0 61.357 12.822 77.749 34.119s22.588 51.073 16.565 84.978c-10.326 56.8-53.01 97.068-115.311 97.068-35.627 0-62.045-12.994-78.05-34.377s-21.598-51.159-15.575-84.719z",
                                "data-name": "Path 100",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M-65.528 275.489c8.84 0 20.586 1.39 27.81 3.569a58.091 58.091 0 0131.114 22.524c10.281 14.674 15.1 38.041 11.043 60.636-2.082 11.587-6.51 25.942-12.129 35.186a73.778 73.778 0 01-37.125 31.157c-9.3 3.5-23.352 5.7-34.711 5.7-8.96 0-20.747-1.377-27.962-3.535a56.988 56.988 0 01-31.163-22.73c-10.034-14.713-14.347-38.08-10.382-60.464 2.046-11.552 6.43-25.865 12.047-35.064a74.667 74.667 0 0136.877-31.107c9.358-3.612 23.395-5.872 34.581-5.872z",
                                "data-name": "Path 102",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M-121.403 138.906c-5.867-18.988-15.878-53.161-22.094-78.01h-1.035c-3.8 26.923-8.975 59.719-12.772 80.43l-13.807 79.4h-47.293l36.591-207.13h72.492l21.751 69.387c7.25 24.51 16.225 56.269 21.747 79.741h1.035c3.8-25.2 7.6-50.054 11.047-69.385l14.149-79.743H7.702l-36.591 207.121h-65.935z",
                                "data-name": "Path 107",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M-8.532 220.717L27.715 13.596h49.707L41.176 220.717z",
                                "data-name": "Path 108",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M-370.629 346.282l-47.292-5.178c11.392-54.887 44.186-89.407 100.106-89.407 54.541 0 81.813 26.925 73.182 75.944-6.557 35.9-38.316 53.851-93.2 63.863-32.1 6.9-43.5 12.426-48.328 27.96 12.082-.346 24.854-.691 33.829-.691h94.587l-7.6 44.186h-177.431c1.037-7.94 1.727-15.881 3.106-24.165 8.631-49.707 35.21-71.455 89.751-83.19 45.222-9.668 54.541-17.262 57.3-32.8 2.762-14.844-6.213-27.27-28.306-27.27-25.54.004-42.11 15.538-49.704 50.748z",
                                "data-name": "Path 109",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M-192.012 419.156l28.487 43.8h-81.049l8.629-43.606z",
                                "data-name": "Path 110",
                              }),
                            ],
                          }),
                        }),
                        */
                        (0, Ze.jsx)("p", {
                          className: "roadmap-p-phases",
                          children:
                            'To be able to discover the park throughout the eyes of your Shogun, we are delivering a 2.0 version to all owners. This will include a body and some other updates in the Shogun mechanics. We will do some polish in their behaviour as well, because some of them tend to be a little "disobedient".',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, Ze.jsx)(Sp, {
                children: (0, Ze.jsxs)(Fd, {
                  children: [
                    (0, Ze.jsx)(Ud, {
                      xs: "12",
                      sm: "12",
                      md: "12",
                      lg: "3",
                      xl: "3",
                      xxl: "3",
                      children: (0, Ze.jsx)("h3", {
                        className: "onih3",
                        children: "PHASE THREE",
                      }),
                    }),
                    (0, Ze.jsxs)(Ud, {
                      xs: "12",
                      sm: "12",
                      md: "12",
                      lg: "9",
                      xl: "9",
                      xxl: "9",
                      children: [
                        (0, Ze.jsx)("div", {
                          className: "roadmap-title-phases",
                          children: "PARK",
                        }),
                        (0, Ze.jsx)("div", {
                          className: "roadmap-title-phases",
                          children: "PREVIEW",
                        }),
                        /*
                        (0, Ze.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "1319.633",
                          height: "452.725",
                          viewBox: "0 0 1319.633 452.725",
                          className: "roadmapimage",
                          children: (0, Ze.jsxs)("g", {
                            strokeWidth: "1",
                            "data-name": "Group 302",
                            transform: "translate(-.692 -.58)",
                            children: [
                              (0, Ze.jsx)("path", {
                                d: "M62.361 146.482l-11.1 62.81H1.287L37.722 1.082h76.69c54.48 0 81.893 31.926 73.219 80.507-6.94 39.558-38.866 64.891-89.529 64.891zm17.7-100.98l-10.06 56.563h29.494c21.167 0 34.007-6.594 37.13-24.984 3.471-19.779-5.2-31.578-27.761-31.578z",
                                "data-name": "Path 132",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M467.67 132.6h-28.455l-13.534 76.69h-49.972L412.494 1.082h87.795c53.44 0 77.036 27.761 69.4 72.873-5.205 30.884-23.25 47.889-50.663 54.828l40.947 79.813v.694h-58.642zm-13.188-87.1l-7.98 45.806h40.6c19.781 0 31.232-7.288 33.661-20.821 2.776-16.309-4.854-24.985-24.986-24.985z",
                                "data-name": "Path 133",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M634.58 131.209l-13.88 78.078h-49.971L607.167 1.08h50.315l-15.963 89.877h1.737L730.009 1.08h60.728l-.348.694-112.086 113.125 77.732 93.694v.694H698.43z",
                                "data-name": "Path 134",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M62.361 389.992l-11.1 62.81H1.292l36.433-208.21h76.69c54.48 0 81.893 31.926 73.219 80.507-6.942 39.561-38.867 64.893-89.53 64.893zm17.7-100.98l-10.064 56.563h29.495c21.167 0 34.007-6.594 37.13-24.984 3.471-19.779-5.2-31.578-27.761-31.578z",
                                "data-name": "Path 135",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M271.259 376.113h-28.455l-13.534 76.69h-49.971l36.784-208.211h87.795c53.44 0 77.038 27.761 69.4 72.873-5.205 30.884-23.25 47.889-50.663 54.828l40.947 79.813v.694H304.92zm-13.188-87.1l-7.98 45.806h40.6c19.781 0 31.232-7.288 33.661-20.821 2.777-16.308-4.857-24.984-24.984-24.984z",
                                "data-name": "Path 136",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M411.796 244.594h156.848l-8.328 47.2h-106.88l-6.246 35.047h98.552l-7.288 41.643h-98.55l-6.594 37.13h107.227l-8.333 47.191h-157.2z",
                                "data-name": "Path 137",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M611.327 452.803l-43.723-208.211h52.052l19.084 108.271c3.125 16.656 5.9 34.007 8.328 50.663h2.428c8.676-16.656 17.7-34.007 26.721-50.663l57.952-108.271h52.746L669.627 452.803z",
                                "data-name": "Path 138",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M753.6 452.803l36.438-208.211h49.969l-36.438 208.211z",
                                "data-name": "Path 139",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M862.211 244.594h156.849l-8.328 47.2h-106.88l-6.246 35.047h98.552l-7.288 41.643h-98.552l-6.594 37.13h107.228l-8.328 47.194h-157.2z",
                                "data-name": "Path 140",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M1101.646 452.803h-67.667l-14.228-208.211h52.4l2.777 89.183c.694 26.027.694 49.623-.348 74.607h2.431c8.676-25.679 17.7-49.971 27.069-74.607l35.39-89.183h63.156l3.125 89.183c.346 24.636 0 48.929-.694 74.607h2.429c8.328-24.985 17.35-48.581 26.719-74.607l32.966-89.183h52.4l-87.8 208.208h-68.703l-1.388-92.652c0-23.25.346-49.623 1.04-73.913h-2.08c-7.982 24.29-17.353 50.663-25.681 73.913z",
                                "data-name": "Path 141",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M141.48 208.991L258.435 1.377h58.479l43.252 207.614z",
                                "data-name": "Path 142",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M180.789 175.907L266.88 21.033h35.916c.969 6.643 31.072 154.879 31.072 154.879z",
                                "data-name": "Path 144",
                              }),
                            ],
                          }),
                        }),
                        */
                        (0, Ze.jsx)("p", {
                          className: "roadmap-p-phases",
                          children:
                            "For the investors we will be releasing limited access to some parts of the park before opening, like the Hell of Fame, the official museum of the Aptos Shogun.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, Ze.jsx)(Sp, {
                children: (0, Ze.jsxs)(Fd, {
                  children: [
                    (0, Ze.jsx)(Ud, {
                      xs: "12",
                      sm: "12",
                      md: "12",
                      lg: "3",
                      xl: "3",
                      xxl: "3",
                      children: (0, Ze.jsx)("h3", {
                        className: "onih3",
                        children: "PHASE FOUR",
                      }),
                    }),
                    (0, Ze.jsxs)(Ud, {
                      xs: "12",
                      sm: "12",
                      md: "12",
                      lg: "9",
                      xl: "9",
                      xxl: "9",
                      children: [
                        (0, Ze.jsx)("div", {
                          className: "roadmap-title-phases",
                          children: "PARK",
                        }),
                        (0, Ze.jsx)("div", {
                          className: "roadmap-title-phases",
                          children: "RELEASE",
                        }),
                        /*
                        (0, Ze.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "1285.843",
                          height: "458.831",
                          viewBox: "0 0 1285.843 458.831",
                          className: "roadmapimage",
                          children: (0, Ze.jsxs)("g", {
                            strokeWidth: "1",
                            "data-name": "Group 305",
                            transform: "translate(0 -.154)",
                            children: [
                              (0, Ze.jsx)("path", {
                                d: "M152.273 209.633L269.548 1.452h58.639l43.37 208.181z",
                                "data-name": "Path 120",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M191.69 176.462l86.326-155.3h36.015c.971 6.662 31.157 155.3 31.157 155.3z",
                                "data-name": "Path 122",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M61.838 146.454l-11.133 62.982H.593L37.134.654h76.9c54.629 0 82.117 32.014 73.419 80.727-6.96 39.666-38.972 65.073-89.774 65.073zM79.585 45.193L69.493 101.91h29.576c21.225 0 34.1-6.612 37.231-25.053 3.481-19.833-5.217-31.665-27.837-31.665z",
                                "data-name": "Path 111",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M468.255 132.532h-28.536l-13.57 76.9h-50.108L412.925.654h88.037c53.586 0 77.244 27.837 69.59 73.072-5.217 30.968-23.314 48.019-50.8 54.978l41.061 80.031v.7h-58.8zm-13.224-87.339l-8 45.931h40.707c19.835 0 31.32-7.308 33.753-20.878 2.784-16.353-4.87-25.053-25.053-25.053z",
                                "data-name": "Path 112",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M635.619 131.14l-13.918 78.292h-50.108L608.131.654h50.453l-16.008 90.123h1.741L731.308.654h60.894l-.349.7-112.392 113.431 77.945 93.951v.7h-57.762z",
                                "data-name": "Path 113",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M92.807 376.715H64.274l-13.574 76.9H.6l36.88-208.782h88.035c53.586 0 77.249 27.837 69.592 73.072-5.22 30.969-23.314 48.02-50.8 54.978l41.059 80.031v.7h-58.8zm-13.223-87.339l-8 45.931h40.709c19.835 0 31.318-7.308 33.753-20.878 2.784-16.353-4.87-25.053-25.053-25.053z",
                                "data-name": "Path 114",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M233.728 244.832h157.278l-8.351 47.323H275.483l-6.263 35.143h98.821l-7.308 41.757h-98.821l-6.612 37.231h107.522l-8.351 47.323H196.844z",
                                "data-name": "Path 115",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M431.367 406.29h89.427l-8.351 47.323H372.909l36.537-208.781h50.108z",
                                "data-name": "Path 116",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M563.588 244.832h157.277l-8.351 47.323H605.343l-6.263 35.143h98.821l-7.306 41.761h-98.823l-6.612 37.231h107.521l-8.351 47.323H526.704z",
                                "data-name": "Path 117",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M905.627 386.107l50.455-9.4c.7 25.055 18.094 38.626 45.931 38.626 19.833 0 30.968-6.265 33.057-17.4 2.435-14.963-6.265-22.271-43.149-28.882-54.978-9.394-68.9-36.884-62.631-73.766 5.914-34.449 35.839-55.327 86.294-55.327 61.588 0 79.335 30.968 82.466 67.157l-51.5 10.092c-1.739-23.663-10.786-35.145-36.884-35.145-19.137 0-29.576 6.959-31.315 17.4-2.088 11.829 2.088 21.574 44.19 28.88 57.413 10.092 68.9 39.669 62.98 73.421-6.263 34.8-34.447 56.717-89.078 56.717-67.153.005-89.424-33.052-90.816-72.373z",
                                "data-name": "Path 118",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M1127.969 244.832h157.278l-8.351 47.323h-107.172l-6.263 35.143h98.821l-7.308 41.757h-98.82l-6.612 37.231h107.521l-8.349 47.327h-157.629z",
                                "data-name": "Path 119",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M691.553 453.316l117.272-208.181h58.639l43.37 208.181z",
                                "data-name": "Path 126",
                              }),
                              (0, Ze.jsx)("path", {
                                d: "M730.969 420.144l86.326-155.3h36.015c.971 6.662 31.157 155.3 31.157 155.3z",
                                "data-name": "Path 128",
                              }),
                            ],
                          }),
                        }),
                        */
                        (0, Ze.jsx)("p", {
                          className: "roadmap-p-phases",
                          children:
                            "The highly anticipated Aptos Shogun Park will open it's gates and all hell will break loose shortly after. Come and discover the park through the eyes of your Shogun. Proceed with caution.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
      var Np = n.p + "static/media/levels.svg";
      var Nx = n.p + "static/media/daoImage.png";
      var Lx = function () {
        return (0, Ze.jsx)(Mr, {
          className: "Dao",
          children: (0, Ze.jsxs)(Fd, {
            className: "daosection-block",
            children: [
              (0, Ze.jsx)("div", {
                className: "wrapper",
                children: (0, Ze.jsx)("h1", {
                  className: "onih1 theme-letterborder dao-section-title",
                  children: "SHOGUN ROADMAP",
                }),
              }),
              (0, Ze.jsx)(Ud, {
                /*
                 <ol class="rounded-list">
                <li><a href="">List item</a></li>
                <li><a href="">List item</a></li>
                <li><a href="">List item</a><li>
                <li><a href="">List item</a></li>
                <li><a href="">List item</a></li>
              </ol>
                */
                xs: "12",
                sm: "12",
                md: "12",
                lg: "6",
                xl: "6",
                xxl: "6",
                className: "parktext",
                children: (0, Ze.jsx)("div", {
                  children: [
                    (0, Ze.jsx)("ol", {
                      className: "rectangle-list",
                      children: [
                        (0, Ze.jsx)("li", {
                          children: (0, Ze.jsx)("a", {
                            children: "Create Artworks & Build Tech"
                          })
                        }),
                        (0, Ze.jsx)("li", {
                          children: (0, Ze.jsx)("a", {
                            children: "Build Community"
                          })
                        }),
                        (0, Ze.jsx)("li", {
                          children: (0, Ze.jsx)("a", {
                            children: "Promotion and Collaborations"
                          })
                        }),
                        (0, Ze.jsx)("li", {
                          children: (0, Ze.jsx)("a", {
                            children: "Launch Minting on testnet"
                          })
                        }),
                        (0, Ze.jsx)("li", {
                          children: (0, Ze.jsx)("a", {
                            children: "Launch Minting on mainnet (Shogun Release)"
                          })
                        }),
                        (0, Ze.jsx)("li", {
                          children: (0, Ze.jsx)("a", {
                            children: "Aptos DAO with 50% mint proceeds"
                          })
                        }),
                        (0, Ze.jsx)("li", {
                          children: (0, Ze.jsx)("a", {
                            children: "Launch Shogun 2.0"
                          })
                        }),
                        (0, Ze.jsx)("li", {
                          children: (0, Ze.jsx)("a", {
                            children: "PARK RELEASE"
                          })
                        }),
                        (0, Ze.jsx)("li", {
                          children: (0, Ze.jsx)("a", {
                            children: "NFT Airdrops for Shogun holders"
                          })
                        }),
                        (0, Ze.jsx)("li", {
                          children: (0, Ze.jsx)("a", {
                            children: "More Details coming soon"
                          })
                        })
                      ]
                    })]
                }),
              }),
              (0, Ze.jsx)(Ud, {
                xs: "12",
                sm: "12",
                md: "12",
                lg: "6",
                xl: "6",
                xxl: "6",
                className: "thepark",
                children: (0, Ze.jsx)("img", {
                  src: Nx,
                  className: "daoImage",
                  alt: "Shogun Release",
                }),
              }),
            ],
          }),
        });
      };
      var Lp = function () {
        return (0, Ze.jsx)(Mr, {
          className: "Park",
          children: (0, Ze.jsxs)(Fd, {
            className: "thepark-block",
            children: [
              (0, Ze.jsx)("div", {
                className: "wrapper",
                children: (0, Ze.jsxs)("div", {
                  className: "marquee",
                  children: [
                    (0, Ze.jsx)("h2", {
                      className: "theme-letterborder",
                      children:
                        "Experience loneliness together. Introducing the Aptos Shogun park. Get your Shogun today.\xa0",
                    }),
                    (0, Ze.jsx)("h2", {
                      className: "theme-letterborder",
                      children:
                        "Experience loneliness together. Introducing the Aptos Shogun park. Get your Shogun today.\xa0",
                    }),
                  ],
                }),
              }),
              (0, Ze.jsx)(Ud, {
                xs: "12",
                sm: "12",
                md: "12",
                lg: "6",
                xl: "6",
                xxl: "6",
                className: "thepark",
                children: (0, Ze.jsx)("img", {
                  src: Np,
                  className: "levelimage",
                  alt: "Shogun Release",
                }),
              }),
              (0, Ze.jsx)(Ud, {
                xs: "12",
                sm: "12",
                md: "12",
                lg: "6",
                xl: "6",
                xxl: "6",
                className: "parktext",
                children: (0, Ze.jsx)("div", {
                  children: (0, Ze.jsx)("p", {
                    className: "dark",
                    children:
                      "The Aptos Shogun park is a digital experience where the Shogun holders can experience a digitally fabricated world through their eyes. Depending on the kind of Shogun they will be living in different areas of the Park and will be able to experience a strange loneliness together. Every Shogun will have a hose/place to stay in this experience that we will be dropping later this year. Come and experience loneliness together.",
                  }),
                }),
              }),
            ],
          }),
        });
      };
      var Ap = function () {
        return (0, Ze.jsx)(Mr, {
          className: "Team",
          children: (0, Ze.jsx)(Fd, {
            children: (0, Ze.jsx)(Ud, {
              children: (0, Ze.jsx)("div", {
                className: "wrapper",
                children: (0, Ze.jsxs)("div", {
                  className: "marquee",
                  children: [
                    (0, Ze.jsxs)("h1", {
                      className: "onih0",
                      children: [
                        "Welcome to the\xa0",
                        (0, Ze.jsx)("span", {
                          className: "onih0 italic",
                          children: "sixth",
                        }),
                        "\xa0stage.\xa0",
                      ],
                    }),
                    (0, Ze.jsxs)("h1", {
                      className: "onih0",
                      children: [
                        "Welcome to the\xa0",
                        (0, Ze.jsx)("span", {
                          className: "onih0 italic",
                          children: "sixth",
                        }),
                        "\xa0stage.\xa0",
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      };
      var zp = function () {
        return (0, Ze.jsx)(Mr, {
          children: (0, Ze.jsxs)(Fd, {
            className: "teammembers",
            children: [
              (0, Ze.jsxs)(Ud, {
                xs: "12",
                sm: "12",
                md: "12",
                lg: "5",
                xl: "5",
                xxl: "5",
                className: "teammember firstmember",
                children: [
                  (0, Ze.jsx)("p", {
                    className: "teamintro",
                    children: "made by",
                  }),
                  (0, Ze.jsx)("h2", { className: "onih2", children: "Marcus" }),
                  (0, Ze.jsxs)("h5", {
                    className: "onih5",
                    children: [
                      "Chief Executive Officer",
                    ],
                  }),
                  (0, Ze.jsx)("p", {
                    children:
                      "Our Chief Executive Officer, Zsolt comes from a design and marketing background helping different brands for more than 10 years. As the Head of the Shogun Research Department he's working closely with his team to deliver the highest quality of robotics available.",
                  }),
                  (0, Ze.jsx)("a", {
                    className: "link",
                    href: "https://instagram.com/",
                    children: "Instagram",
                  }),
                ],
              }),
              (0, Ze.jsx)(Ud, {
                xs: "12",
                sm: "12",
                md: "12",
                lg: "1",
                xl: "1",
                xxl: "1",
              }),
              (0, Ze.jsxs)(Ud, {
                xs: "12",
                sm: "12",
                md: "12",
                lg: "5",
                xl: "5",
                xxl: "5",
                className: "teammember",
                children: [
                  (0, Ze.jsx)("p", {
                    className: "teamintro",
                    children: "Co funded by",
                  }),
                  (0, Ze.jsx)("h2", { className: "onih2", children: "Dionise" }),
                  (0, Ze.jsxs)("h5", {
                    className: "onih5",
                    children: [
                      "Chief Technology Officer",
                    ],
                  }),
                  (0, Ze.jsx)("p", {
                    children:
                      "Our Chief Operating Officer, Devon is equipped with great human skills, such as communication and problem solving. As a head of Shogun Resources he's handling all the upcoming disputes in our company as well as some of the Shogun behaviour issues.",
                  }),
                  (0, Ze.jsx)("a", {
                    className: "link",
                    href: "https://www.instagram.com/",
                    children: "Instagram",
                  }),
                ],
              }),
              (0, Ze.jsx)(Ud, {
                xs: "12",
                sm: "12",
                md: "12",
                lg: "1",
                xl: "1",
                xxl: "1",
              }),
              (0, Ze.jsxs)(Ud, {
                xs: "12",
                sm: "12",
                md: "12",
                lg: "5",
                xl: "5",
                xxl: "5",
                className: "teammember",
                children: [
                  (0, Ze.jsx)("p", {
                    className: "teamintro",
                    children: "Co funded by",
                  }),
                  (0, Ze.jsx)("h2", { className: "onih2", children: "Ivan" }),
                  (0, Ze.jsxs)("h5", {
                    className: "onih5",
                    children: [
                      "Blockchain Developer",
                    ],
                  }),
                  (0, Ze.jsx)("p", {
                    children:
                      "Our technology officer IVAN is a full stack developer with experience in blockchain development for past 6 years. Ivan has worked on the decentralised applications on the bsc, ethereum and solana blockchains.",
                  }),
                  (0, Ze.jsx)("a", {
                    className: "link",
                    href: "https://twitter.com/daringivan",
                    children: "Twitter",
                  }),
                ],
              }),
              (0, Ze.jsx)(Ud, {
                xs: "12",
                sm: "12",
                md: "12",
                lg: "1",
                xl: "1",
                xxl: "1",
              }),
              (0, Ze.jsxs)(Ud, {
                xs: "12",
                sm: "12",
                md: "12",
                lg: "5",
                xl: "5",
                xxl: "5",
                className: "teammember",
                children: [
                  (0, Ze.jsx)("p", {
                    className: "teamintro",
                    children: "with the help of",
                  }),
                  (0, Ze.jsx)("h2", { className: "onih2", children: "Erik" }),
                  (0, Ze.jsxs)("h5", {
                    className: "onih5",
                    children: [
                      "Chief Advisor and Artist",
                    ],
                  }),
                  (0, Ze.jsx)("p", {
                    children:
                      "A talented artist Erik is a digital artist and art director who creates stylish and sensual artworks with in his unique style.",
                  }),
                ],
              }),
              (0, Ze.jsx)(Ud, {
                xs: "12",
                sm: "12",
                md: "12",
                lg: "1",
                xl: "1",
                xxl: "1",
              }),
            ],
          }),
        });
      };
      var _p =
        n.p + "static/media/nftcalendar.svg";
      var Rp = function () {
        return (0, Ze.jsx)(Mr, {
          className: "featured",
          children: (0, Ze.jsx)(Fd, {
            children: (0, Ze.jsxs)(Ud, {
              className: "centered",
              children: [
                (0, Ze.jsx)("p", { children: "Powered by APTOSLABS" }),
                (0, Ze.jsx)("a", {
                  className: "onih2 custom-aptos-link",
                  href: "https://aptoslabs.com/",
                  children: (0, Ze.jsx)("div", {
                    className: "aptos-logo",
                    "data-theme": "silenced",
                    children: (0, Ze.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "100%",
                      height: "100%",
                      viewBox: "0 0 112 112",
                      children: (0, Ze.jsx)("path", {
                        className: "aptos-logo",
                        fill: "#fff",
                        d: "M86.6 37.4h-9.9c-1.1 0-2.2-.5-3-1.3l-4-4.5c-1.2-1.3-3.1-1.4-4.5-.3l-.3.3-3.4 3.9c-1.1 1.3-2.8 2-4.5 2H2.9C1.4 41.9.4 46.6 0 51.3h51.2c.9 0 1.8-.4 2.4-1l4.8-5c.6-.6 1.4-1 2.3-1h.2c.9 0 1.8.4 2.4 1.1l4 4.5c.8.9 1.9 1.4 3 1.4H112c-.4-4.7-1.4-9.4-2.9-13.8H86.6zM53.8 65l-4-4.5c-1.2-1.3-3.1-1.4-4.5-.3l-.3.3-3.5 3.9c-1.1 1.3-2.7 2-4.4 2H.8c.9 4.8 2.5 9.5 4.6 14h25.5c.9 0 1.7-.4 2.4-1l4.8-5c.6-.6 1.4-1 2.3-1h.2c.9 0 1.8.4 2.4 1.1l4 4.5c.8.9 1.9 1.4 3 1.4h56.6c2.1-4.4 3.7-9.1 4.6-14H56.8c-1.2 0-2.3-.5-3-1.4zm19.6-43.6 4.8-5c.6-.6 1.4-1 2.3-1h.2c.9 0 1.8.4 2.4 1l4 4.5c.8.9 1.9 1.3 3 1.3h10.8c-18.8-24.8-54.1-29.7-79-11-4.1 3.1-7.8 6.8-11 11H71c1 .2 1.8-.2 2.4-.8zM34.7 94.2c-1.2 0-2.3-.5-3-1.3l-4-4.5c-1.2-1.3-3.2-1.4-4.5-.2l-.2.2-3.5 3.9c-1.1 1.3-2.7 2-4.4 2h-.2C36 116.9 71.7 118 94.4 96.7c.9-.8 1.7-1.7 2.6-2.6H34.7z",
                        "data-name": "Path 1000",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      };
      var Dp = function () {
        return (0, Ze.jsxs)(Mr, {
          className: "Footer",
          children: [
            (0, Ze.jsx)(Fd, {
              className: "contact",
              children: (0, Ze.jsxs)(Ud, {
                className: "social",
                children: [
                  (0, Ze.jsx)("h1", {
                    className: "onih1 italic hovereffect",
                    children: "STAY UPDATED",
                  }),
                  (0, Ze.jsx)("div", { className: "divider" }),
                  (0, Ze.jsx)("div", {
                    className: "social-inner-col",
                    children: [
                      (0, Ze.jsx)("a", {
                        href: "https://twitter.com/aptos_shogun",
                        children: [
                          (0, Ze.jsx)("i", {
                            className: "fa-brands fa-twitter fa-2xl"
                          }),
                          (0, Ze.jsx)("a", {
                            children: (0, Ze.jsx)("h3", {
                              className: "onih3 nopad",
                              children: "FOLLOW US ON TWITTER",
                            }),
                          }),
                        ]
                      }),
                      (0, Ze.jsx)("div", { className: "small-divider" }),
                      (0, Ze.jsx)("a", {
                        href: "https://discord.gg/NqvJusnwk4",
                        children: [
                          (0, Ze.jsx)("i", {
                            className: "fa-brands fa-discord fa-2xl"
                          }),
                          (0, Ze.jsx)("a", {
                            children: (0, Ze.jsx)("h3", {
                              className: "onih3 nopad",
                              children: "JOIN OUR DISCORD",
                            }),
                          }),
                        ]
                      }),
                    ]
                  }),
                  (0, Ze.jsx)("hr", {}),
                ],
              }),
            }),
            (0, Ze.jsx)(Fd, {
              className: "copyright",
              children: (0, Ze.jsxs)(Ud, {
                children: [
                  (0, Ze.jsx)("p", {
                    children:
                      "COPYRIGHT 2022 APTOS SHOGUN TEAM \\  Version 2.0.1",
                  }),
                  (0, Ze.jsxs)("div", {
                    className: "awesome",
                    children: [
                      (0, Ze.jsx)("p", { children: "Stay Awesome " }),
                      (0, Ze.jsxs)("div", {
                        className: "footertoggle",
                        children: [
                          (0, Ze.jsx)("span", {
                            className: "one",
                            children: "\ud83d\udc79",
                          }),
                          (0, Ze.jsx)("span", {
                            className: "two",
                            children: "\ud83d\udda4",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var Vp = function () {
        return (0, Ze.jsx)(t.StrictMode, {
          children: (0, Ze.jsxs)(Dd.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0, transition: { duration: 1 } },
            children: [
              (0, Ze.jsxs)(Ua, {
                children: [
                  (0, Ze.jsx)("meta", { charSet: "utf-8" }),
                  (0, Ze.jsx)("title", { children: "Aptos Shogun experience" }),
                  (0, Ze.jsx)("link", {
                    rel: "canonical",
                    href: "https://aptosshogun.com",
                  }),
                  (0, Ze.jsx)("meta", {
                    name: "description",
                    content: "Aptos Shogun NFT collection and virtual experience",
                  }),
                ],
              }),
              (0, Ze.jsx)("div", { className: "noise" }),
              (0, Ze.jsx)($d, {}),
              (0, Ze.jsx)(qd, {}),
              (0, Ze.jsx)(Xd, {}),
              (0, Ze.jsx)(Zd, {}),
              (0, Ze.jsx)(Op, {}),
              (0, Ze.jsx)(Mp, {}),
              (0, Ze.jsx)(Lx, {}),
              (0, Ze.jsx)(Lp, {}),
              (0, Ze.jsx)(Ap, {}),
              (0, Ze.jsx)(zp, {}),
              (0, Ze.jsx)(Dp, {}),
              (0, Ze.jsx)(Rp, {}),
            ],
          }),
        });
      },
        Ip = n.p + "static/media/mintingbg.webm";
      var Fp = function () {
        return (0, Ze.jsxs)("div", {
          className: "mintbody",
          children: [
            (0, Ze.jsx)("video", {
              src: Ip,
              autoPlay: "true",
              muted: "true",
              loop: "true",
            }),
            (0, Ze.jsxs)("div", {
              className: "pre-mintingblock",
              children: [
                (0, Ze.jsxs)("div", {
                  className: "clone-rampp-content-wrapper",
                  children: [
                    (0, Ze.jsx)("button", {
                      id: "minting-button-id",
                      class: "clone-rampp-minting-button",
                      // children: window.martian && window.martian._isConnected ? "Mint" : "Connect",
                      children: "Mint on Bluemove",
                      onClick: function (e) {
                        // var s = document.getElementById("minting-button-id")
                        window.location.replace("https://bluemove.net/")
                        return

                        window.martian.connect()
                          .then(x => {
                            console.log(x.address)
                            const sender = x.address

                            let mintQuantity = document.getElementById("id-mint-quantity").value
                            mintQuantity = mintQuantity ? +mintQuantity : 1
                            const cmAddress = "0xdefa3ededfd411f9497bc77e62f0bc52365f742729ec9b3f6363c5ee34ec9a66"
                            const collectionName = "BeaterShogun"
                            const payload = {
                              type: "entry_function_payload",
                              function: "0x5ac985f1fe40c5121eb33699952ce8a79b1d1cb7438709dbd1da8e840a04fbee::candy_machine_v2::mint_tokens",
                              type_arguments: [],
                              arguments: [cmAddress, collectionName, mintQuantity]
                            }
                            window.martian.generateTransaction(sender, payload)
                              .then(transaction => {
                                window.martian.signAndSubmitTransaction(transaction)
                                  .then(txnHash => console.log(txnHash))
                              })
                          })
                      },
                    }),
                    /*
                    (0, Ze.jsx)("input", {
                      id: "id-mint-quantity",
                      class: "clone-rampp-mint-quantity",
                      type: "number",
                      placeholder: "1",
                    })
                    */
                  ]
                }),
                /*
                (0, Ze.jsxs)("div", {
                  className: "minting-amount",
                  children: "minted .... 0/200"
                }),
                */
                (0, Ze.jsxs)("h3", {
                  className: "onih3",
                  children: "Go to marketplace!"
                })
              ]
            }),
            /*
            (0, Ze.jsxs)("div", {
              className: "mintingblock",
              children: [
                (0, Ze.jsx)("div", {
                  className: "rampp-minting-container",
                  children: [
                    (0, Ze.jsx)("button", {



                      className: "rampp-minting-button",
                      "data-merkle-proof-uri":
                        "https://us-central1-nft-rampp.cloudfunctions.net/app/FWXXucnCeyrz9SgGSVQK/merkle/verify",
                      "data-styles":
                        "eyJvcGVuIjp7InRleHQiOiJNaW50Iiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjAuMTI1cmVtO2NvbG9yOiNmZmZmZmY7YmFja2dyb3VuZC1jb2xvcjojZWY3OTViOyJ9LCJwYXVzZWQiOnsidGV4dCI6Ik1pbnRpbmclMjBub3QlMjBhdmFpbGFibGUiLCJzdHlsZXMiOiJib3JkZXI6bm9uZTt3aWR0aDogMTVyZW07cGFkZGluZzowLjVyZW07Zm9udC1zaXplOiAxLjEyNXJlbTtsaW5lLWhlaWdodDogMS43NXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO2JvcmRlci1yYWRpdXM6MC4xMjVyZW07Y29sb3I6IzY3NjU2NTtiYWNrZ3JvdW5kLWNvbG9yOiNDQ0RCREM7Y3Vyc29yOm5vdC1hbGxvd2VkOyJ9LCJzdXBwbHlSZWFjaGVkIjp7InRleHQiOiJTb2xkJTIwb3V0Iiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjAuMTI1cmVtO2NvbG9yOiNlZjc5NWI7YmFja2dyb3VuZC1jb2xvcjojZWNlNGU0O2N1cnNvcjpub3QtYWxsb3dlZDsifSwiZXJyb3IiOnsidGV4dCI6Ik1pbnRpbmcgVW5hdmFpbGFibGUiLCJzdHlsZXMiOiJib3JkZXI6bm9uZTt3aWR0aDogMTVyZW07cGFkZGluZzowLjVyZW07Zm9udC1zaXplOiAxLjEyNXJlbTtsaW5lLWhlaWdodDogMS43NXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO2JvcmRlci1yYWRpdXM6MC4xMjVyZW07Y29sb3I6I2ZmMDAwMDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmI4Yjg7Y3Vyc29yOm5vdC1hbGxvd2VkOyJ9LCJjbGFpbVRleHQiOnsidGV4dCI6bnVsbCwic3R5bGVzIjoiY29sb3I6IHJnYmEoMTU2LCAxNjMsIDE3NSk7Zm9udC1zaXplOiAwLjc1cmVtO2xpbmUtaGVpZ2h0OiAxcmVtO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nLXRvcDogMC4yNXJlbTtwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTttYXJnaW46MDtmb250LWZhbWlseTpzYW5zLXNlcmlmOyJ9LCJxdWFudGl0eSI6eyJ0ZXh0IjpudWxsLCJzdHlsZXMiOiJ3aWR0aDo0MHB4O2NvbG9yOiNlZjc5NWI7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWNvbG9yOiNlZjc5NWI7Ym9yZGVyLXJhZGl1czowLjEyNXJlbTtmb250LXNpemU6MS4zcmVtO3RleHQtYWxpZ246Y2VudGVyOyJ9fQ==",
                      "data-abi-link":
                        "https://firebasestorage.googleapis.com/v0/b/nft-rampp.appspot.com/o/solidity_outputs%2FFWXXucnCeyrz9SgGSVQK%2FOninousContract_data-e2448345-bf2e-444d-ac9e-b577feaa22bc.json?alt=media",
                      "data-redirect": "null",
                      "data-contract-address":
                        "0x2fb60611a511e25f577cf19a4b34a55cd53d0c40",
                      "data-show-claim-count": "true",
                      "data-network": "mainnet",
                      "data-format": "multi",
                    })
                  ]
                }),
                (0, Ze.jsx)("h3", {
                  className: "onih3",
                  children: "Invest in Onis today!",
                }),
              ],
            }),
            */
          ],
        });
      };
      var Bp = function () {
        return (0, Ze.jsx)(t.StrictMode, {
          children: (0, Ze.jsxs)(Dd.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0, transition: { duration: 1 } },
            children: [
              (0, Ze.jsxs)(Ua, {
                children: [
                  (0, Ze.jsx)("meta", { charSet: "utf-8" }),
                  (0, Ze.jsx)("title", {
                    children: "Aptos Shogun Mint your shogun soon",
                  }),
                  (0, Ze.jsx)("link", {
                    rel: "canonical",
                    href: "https://aptosshogun.com",
                  }),
                  (0, Ze.jsx)("meta", {
                    name: "description",
                    content: "Aptos Shogun NFT collection and virtual experience",
                  }),
                  (0, Ze.jsx)("script", {
                    src: "https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.0-rc.0/web3.min.js",
                    crossOrigin: "anonymous",
                    referrerPolicy: "no-referrer",
                  }),
                  (0, Ze.jsx)("script", {
                    type: "text/javascript",
                    src: "https://rampp.xyz/embeds/embed.js",
                  }),
                ],
              }),
              (0, Ze.jsx)("div", { className: "noise" }),
              (0, Ze.jsx)(Fp, {}),
            ],
          }),
        });
      };
      var Hp = function () {
        return (0, Ze.jsx)(Mr, {
          className: "error",
          children: (0, Ze.jsx)(Fd, {
            children: (0, Ze.jsxs)(Ud, {
              children: [
                (0, Ze.jsx)("h1", {
                  className: "onih1 italic",
                  children: "Wait how did you get here? Please return.",
                }),
                (0, Ze.jsx)(Z, {
                  className: "button",
                  to: "/",
                  children: "okay, sorry",
                }),
              ],
            }),
          }),
        });
      };
      var Wp = function () {
        var e = R();
        return (0, Ze.jsx)(ze, {
          exitBeforeEnter: !0,
          children: (0, Ze.jsx)(
            U,
            {
              location: e,
              children: (0, Ze.jsxs)(H, {
                path: "/",
                element: (0, Ze.jsx)(Ir, {}),
                children: [
                  (0, Ze.jsx)(H, { index: !0, element: (0, Ze.jsx)(Vp, {}) }),
                  (0, Ze.jsx)(H, {
                    path: "mint",
                    element: (0, Ze.jsx)(Bp, {}),
                  }),
                  (0, Ze.jsx)(H, {
                    path: "notfound",
                    element: (0, Ze.jsx)(Hp, {}),
                  }),
                  (0, Ze.jsx)(H, { path: "*", element: (0, Ze.jsx)(Hp, {}) }),
                ],
              }),
            },
            e.pathname
          ),
        });
      };
      function Up() {
        return (0, Ze.jsx)(t.StrictMode, {
          children: (0, Ze.jsx)(X, { children: (0, Ze.jsx)(Wp, {}) }),
        });
      }
      r.render((0, Ze.jsx)(Up, {}), document.getElementById("root"));
    })();
})();
//# sourceMappingURL=main.7555c073.js.map
