import * as Mr from "react";
import Qe from "react";
var Se = { exports: {} }, se = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Fr() {
  if (qe) return se;
  qe = 1;
  var r = Qe, o = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, p, v) {
    var b, x = {}, C = null, j = null;
    v !== void 0 && (C = "" + v), p.key !== void 0 && (C = "" + p.key), p.ref !== void 0 && (j = p.ref);
    for (b in p) a.call(p, b) && !i.hasOwnProperty(b) && (x[b] = p[b]);
    if (l && l.defaultProps) for (b in p = l.defaultProps, p) x[b] === void 0 && (x[b] = p[b]);
    return { $$typeof: o, type: l, key: C, ref: j, props: x, _owner: c.current };
  }
  return se.Fragment = n, se.jsx = u, se.jsxs = u, se;
}
var ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Nr() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Qe, o = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), O = Symbol.iterator, S = "@@iterator";
    function w(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = O && e[O] || e[S];
      return typeof t == "function" ? t : null;
    }
    var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), d = 1; d < t; d++)
          s[d - 1] = arguments[d];
        Y("error", e, s);
      }
    }
    function Y(e, t, s) {
      {
        var d = k.ReactDebugCurrentFrame, h = d.getStackAddendum();
        h !== "" && (t += "%s", s = s.concat([h]));
        var E = s.map(function(m) {
          return String(m);
        });
        E.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var $ = !1, q = !1, ue = !1, de = !1, fe = !1, J;
    J = Symbol.for("react.module.reference");
    function re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === i || fe || e === c || e === v || e === b || de || e === j || $ || q || ue || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === x || e.$$typeof === u || e.$$typeof === l || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === J || e.getModuleId !== void 0));
    }
    function te(e, t, s) {
      var d = e.displayName;
      if (d)
        return d;
      var h = t.displayName || t.name || "";
      return h !== "" ? s + "(" + h + ")" : s;
    }
    function R(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case c:
          return "StrictMode";
        case v:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var t = e;
            return R(t) + ".Consumer";
          case u:
            var s = e;
            return R(s._context) + ".Provider";
          case p:
            return te(e, e.render, "ForwardRef");
          case x:
            var d = e.displayName || null;
            return d !== null ? d : N(e.type) || "Memo";
          case C: {
            var h = e, E = h._payload, m = h._init;
            try {
              return N(m(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, W = 0, U, oe, K, G, ne, M, je;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function lr() {
      {
        if (W === 0) {
          U = console.log, oe = console.info, K = console.warn, G = console.error, ne = console.group, M = console.groupCollapsed, je = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function cr() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: U
            }),
            info: I({}, e, {
              value: oe
            }),
            warn: I({}, e, {
              value: K
            }),
            error: I({}, e, {
              value: G
            }),
            group: I({}, e, {
              value: ne
            }),
            groupCollapsed: I({}, e, {
              value: M
            }),
            groupEnd: I({}, e, {
              value: je
            })
          });
        }
        W < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = k.ReactCurrentDispatcher, he;
    function pe(e, t, s) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (h) {
            var d = h.stack.trim().match(/\n( *(at )?)/);
            he = d && d[1] || "";
          }
        return `
` + he + e;
      }
    }
    var ye = !1, be;
    {
      var ur = typeof WeakMap == "function" ? WeakMap : Map;
      be = new ur();
    }
    function Ae(e, t) {
      if (!e || ye)
        return "";
      {
        var s = be.get(e);
        if (s !== void 0)
          return s;
      }
      var d;
      ye = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = me.current, me.current = null, lr();
      try {
        if (t) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (z) {
              d = z;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (z) {
              d = z;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            d = z;
          }
          e();
        }
      } catch (z) {
        if (z && d && typeof z.stack == "string") {
          for (var g = z.stack.split(`
`), A = d.stack.split(`
`), T = g.length - 1, P = A.length - 1; T >= 1 && P >= 0 && g[T] !== A[P]; )
            P--;
          for (; T >= 1 && P >= 0; T--, P--)
            if (g[T] !== A[P]) {
              if (T !== 1 || P !== 1)
                do
                  if (T--, P--, P < 0 || g[T] !== A[P]) {
                    var F = `
` + g[T].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && be.set(e, F), F;
                  }
                while (T >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        ye = !1, me.current = E, cr(), Error.prepareStackTrace = h;
      }
      var H = e ? e.displayName || e.name : "", B = H ? pe(H) : "";
      return typeof e == "function" && be.set(e, B), B;
    }
    function dr(e, t, s) {
      return Ae(e, !1);
    }
    function fr(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ge(e, t, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ae(e, fr(e));
      if (typeof e == "string")
        return pe(e);
      switch (e) {
        case v:
          return pe("Suspense");
        case b:
          return pe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return dr(e.render);
          case x:
            return ge(e.type, t, s);
          case C: {
            var d = e, h = d._payload, E = d._init;
            try {
              return ge(E(h), t, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, ze = {}, Ie = k.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var t = e._owner, s = ge(e.type, e._source, t ? t.type : null);
        Ie.setExtraStackFrame(s);
      } else
        Ie.setExtraStackFrame(null);
    }
    function pr(e, t, s, d, h) {
      {
        var E = Function.call.bind(ae);
        for (var m in e)
          if (E(e, m)) {
            var g = void 0;
            try {
              if (typeof e[m] != "function") {
                var A = Error((d || "React class") + ": " + s + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              g = e[m](t, m, d, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              g = T;
            }
            g && !(g instanceof Error) && (ve(h), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", s, m, typeof g), ve(null)), g instanceof Error && !(g.message in ze) && (ze[g.message] = !0, ve(h), y("Failed %s type: %s", s, g.message), ve(null));
          }
      }
    }
    var br = Array.isArray;
    function xe(e) {
      return br(e);
    }
    function gr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, s = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function vr(e) {
      try {
        return Me(e), !1;
      } catch {
        return !0;
      }
    }
    function Me(e) {
      return "" + e;
    }
    function Fe(e) {
      if (vr(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), Me(e);
    }
    var Ne = k.ReactCurrentOwner, mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $e, Ve;
    function hr(e) {
      if (ae.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function yr(e) {
      if (ae.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function xr(e, t) {
      typeof e.ref == "string" && Ne.current;
    }
    function wr(e, t) {
      {
        var s = function() {
          $e || ($e = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function Rr(e, t) {
      {
        var s = function() {
          Ve || (Ve = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Er = function(e, t, s, d, h, E, m) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: s,
        props: m,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Cr(e, t, s, d, h) {
      {
        var E, m = {}, g = null, A = null;
        s !== void 0 && (Fe(s), g = "" + s), yr(t) && (Fe(t.key), g = "" + t.key), hr(t) && (A = t.ref, xr(t, h));
        for (E in t)
          ae.call(t, E) && !mr.hasOwnProperty(E) && (m[E] = t[E]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (E in T)
            m[E] === void 0 && (m[E] = T[E]);
        }
        if (g || A) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && wr(m, P), A && Rr(m, P);
        }
        return Er(e, g, A, h, d, Ne.current, m);
      }
    }
    var we = k.ReactCurrentOwner, We = k.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var t = e._owner, s = ge(e.type, e._source, t ? t.type : null);
        We.setExtraStackFrame(s);
      } else
        We.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ge() {
      {
        if (we.current) {
          var e = N(we.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function _r(e) {
      return "";
    }
    var Le = {};
    function kr(e) {
      {
        var t = Ge();
        if (!t) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (t = `

Check the top-level render call using <` + s + ">.");
        }
        return t;
      }
    }
    function De(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = kr(t);
        if (Le[s])
          return;
        Le[s] = !0;
        var d = "";
        e && e._owner && e._owner !== we.current && (d = " It was passed a child from " + N(e._owner.type) + "."), X(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, d), X(null);
      }
    }
    function Ye(e, t) {
      {
        if (typeof e != "object")
          return;
        if (xe(e))
          for (var s = 0; s < e.length; s++) {
            var d = e[s];
            Ee(d) && De(d, t);
          }
        else if (Ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = w(e);
          if (typeof h == "function" && h !== e.entries)
            for (var E = h.call(e), m; !(m = E.next()).done; )
              Ee(m.value) && De(m.value, t);
        }
      }
    }
    function Sr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var s;
        if (typeof t == "function")
          s = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === x))
          s = t.propTypes;
        else
          return;
        if (s) {
          var d = N(t);
          pr(s, e.props, "prop", d, e);
        } else if (t.PropTypes !== void 0 && !Re) {
          Re = !0;
          var h = N(t);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tr(e) {
      {
        for (var t = Object.keys(e.props), s = 0; s < t.length; s++) {
          var d = t[s];
          if (d !== "children" && d !== "key") {
            X(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), X(null);
            break;
          }
        }
        e.ref !== null && (X(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    var Ue = {};
    function Be(e, t, s, d, h, E) {
      {
        var m = re(e);
        if (!m) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = _r();
          A ? g += A : g += Ge();
          var T;
          e === null ? T = "null" : xe(e) ? T = "array" : e !== void 0 && e.$$typeof === o ? (T = "<" + (N(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, g);
        }
        var P = Cr(e, t, s, h, E);
        if (P == null)
          return P;
        if (m) {
          var F = t.children;
          if (F !== void 0)
            if (d)
              if (xe(F)) {
                for (var H = 0; H < F.length; H++)
                  Ye(F[H], e);
                Object.freeze && Object.freeze(F);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(F, e);
        }
        if (ae.call(t, "key")) {
          var B = N(e), z = Object.keys(t).filter(function(Ir) {
            return Ir !== "key";
          }), Ce = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ue[B + Ce]) {
            var zr = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ce, B, zr, B), Ue[B + Ce] = !0;
          }
        }
        return e === a ? Tr(P) : Sr(P), P;
      }
    }
    function Pr(e, t, s) {
      return Be(e, t, s, !0);
    }
    function jr(e, t, s) {
      return Be(e, t, s, !1);
    }
    var Or = jr, Ar = Pr;
    ie.Fragment = a, ie.jsx = Or, ie.jsxs = Ar;
  }()), ie;
}
process.env.NODE_ENV === "production" ? Se.exports = Fr() : Se.exports = Nr();
var Z = Se.exports;
function er(r) {
  var o, n, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var c = r.length;
    for (o = 0; o < c; o++) r[o] && (n = er(r[o])) && (a && (a += " "), a += n);
  } else for (n in r) r[n] && (a && (a += " "), a += n);
  return a;
}
function rr() {
  for (var r, o, n = 0, a = "", c = arguments.length; n < c; n++) (r = arguments[n]) && (o = er(r)) && (a && (a += " "), a += o);
  return a;
}
const Ke = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, Xe = rr, tr = (r, o) => (n) => {
  var a;
  if ((o == null ? void 0 : o.variants) == null) return Xe(r, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: c, defaultVariants: i } = o, u = Object.keys(c).map((v) => {
    const b = n == null ? void 0 : n[v], x = i == null ? void 0 : i[v];
    if (b === null) return null;
    const C = Ke(b) || Ke(x);
    return c[v][C];
  }), l = n && Object.entries(n).reduce((v, b) => {
    let [x, C] = b;
    return C === void 0 || (v[x] = C), v;
  }, {}), p = o == null || (a = o.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((v, b) => {
    let { class: x, className: C, ...j } = b;
    return Object.entries(j).every((O) => {
      let [S, w] = O;
      return Array.isArray(w) ? w.includes({
        ...i,
        ...l
      }[S]) : {
        ...i,
        ...l
      }[S] === w;
    }) ? [
      ...v,
      x,
      C
    ] : v;
  }, []);
  return Xe(r, u, p, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Pe = "-", $r = (r) => {
  const o = Wr(r), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: a
  } = r;
  return {
    getClassGroupId: (u) => {
      const l = u.split(Pe);
      return l[0] === "" && l.length !== 1 && l.shift(), or(l, o) || Vr(u);
    },
    getConflictingClassGroupIds: (u, l) => {
      const p = n[u] || [];
      return l && a[u] ? [...p, ...a[u]] : p;
    }
  };
}, or = (r, o) => {
  var u;
  if (r.length === 0)
    return o.classGroupId;
  const n = r[0], a = o.nextPart.get(n), c = a ? or(r.slice(1), a) : void 0;
  if (c)
    return c;
  if (o.validators.length === 0)
    return;
  const i = r.join(Pe);
  return (u = o.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : u.classGroupId;
}, He = /^\[(.+)\]$/, Vr = (r) => {
  if (He.test(r)) {
    const o = He.exec(r)[1], n = o == null ? void 0 : o.substring(0, o.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Wr = (r) => {
  const {
    theme: o,
    prefix: n
  } = r, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Lr(Object.entries(r.classGroups), n).forEach(([i, u]) => {
    Te(u, a, i, o);
  }), a;
}, Te = (r, o, n, a) => {
  r.forEach((c) => {
    if (typeof c == "string") {
      const i = c === "" ? o : Ze(o, c);
      i.classGroupId = n;
      return;
    }
    if (typeof c == "function") {
      if (Gr(c)) {
        Te(c(a), o, n, a);
        return;
      }
      o.validators.push({
        validator: c,
        classGroupId: n
      });
      return;
    }
    Object.entries(c).forEach(([i, u]) => {
      Te(u, Ze(o, i), n, a);
    });
  });
}, Ze = (r, o) => {
  let n = r;
  return o.split(Pe).forEach((a) => {
    n.nextPart.has(a) || n.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(a);
  }), n;
}, Gr = (r) => r.isThemeGetter, Lr = (r, o) => o ? r.map(([n, a]) => {
  const c = a.map((i) => typeof i == "string" ? o + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([u, l]) => [o + u, l])) : i);
  return [n, c];
}) : r, Dr = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let o = 0, n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const c = (i, u) => {
    n.set(i, u), o++, o > r && (o = 0, a = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let u = n.get(i);
      if (u !== void 0)
        return u;
      if ((u = a.get(i)) !== void 0)
        return c(i, u), u;
    },
    set(i, u) {
      n.has(i) ? n.set(i, u) : c(i, u);
    }
  };
}, nr = "!", Yr = (r) => {
  const {
    separator: o,
    experimentalParseClassName: n
  } = r, a = o.length === 1, c = o[0], i = o.length, u = (l) => {
    const p = [];
    let v = 0, b = 0, x;
    for (let w = 0; w < l.length; w++) {
      let k = l[w];
      if (v === 0) {
        if (k === c && (a || l.slice(w, w + i) === o)) {
          p.push(l.slice(b, w)), b = w + i;
          continue;
        }
        if (k === "/") {
          x = w;
          continue;
        }
      }
      k === "[" ? v++ : k === "]" && v--;
    }
    const C = p.length === 0 ? l : l.substring(b), j = C.startsWith(nr), O = j ? C.substring(1) : C, S = x && x > b ? x - b : void 0;
    return {
      modifiers: p,
      hasImportantModifier: j,
      baseClassName: O,
      maybePostfixModifierPosition: S
    };
  };
  return n ? (l) => n({
    className: l,
    parseClassName: u
  }) : u;
}, Ur = (r) => {
  if (r.length <= 1)
    return r;
  const o = [];
  let n = [];
  return r.forEach((a) => {
    a[0] === "[" ? (o.push(...n.sort(), a), n = []) : n.push(a);
  }), o.push(...n.sort()), o;
}, Br = (r) => ({
  cache: Dr(r.cacheSize),
  parseClassName: Yr(r),
  ...$r(r)
}), qr = /\s+/, Jr = (r, o) => {
  const {
    parseClassName: n,
    getClassGroupId: a,
    getConflictingClassGroupIds: c
  } = o, i = [], u = r.trim().split(qr);
  let l = "";
  for (let p = u.length - 1; p >= 0; p -= 1) {
    const v = u[p], {
      modifiers: b,
      hasImportantModifier: x,
      baseClassName: C,
      maybePostfixModifierPosition: j
    } = n(v);
    let O = !!j, S = a(O ? C.substring(0, j) : C);
    if (!S) {
      if (!O) {
        l = v + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (S = a(C), !S) {
        l = v + (l.length > 0 ? " " + l : l);
        continue;
      }
      O = !1;
    }
    const w = Ur(b).join(":"), k = x ? w + nr : w, y = k + S;
    if (i.includes(y))
      continue;
    i.push(y);
    const Y = c(S, O);
    for (let $ = 0; $ < Y.length; ++$) {
      const q = Y[$];
      i.push(k + q);
    }
    l = v + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Kr() {
  let r = 0, o, n, a = "";
  for (; r < arguments.length; )
    (o = arguments[r++]) && (n = ar(o)) && (a && (a += " "), a += n);
  return a;
}
const ar = (r) => {
  if (typeof r == "string")
    return r;
  let o, n = "";
  for (let a = 0; a < r.length; a++)
    r[a] && (o = ar(r[a])) && (n && (n += " "), n += o);
  return n;
};
function Xr(r, ...o) {
  let n, a, c, i = u;
  function u(p) {
    const v = o.reduce((b, x) => x(b), r());
    return n = Br(v), a = n.cache.get, c = n.cache.set, i = l, l(p);
  }
  function l(p) {
    const v = a(p);
    if (v)
      return v;
    const b = Jr(p, n);
    return c(p, b), b;
  }
  return function() {
    return i(Kr.apply(null, arguments));
  };
}
const _ = (r) => {
  const o = (n) => n[r] || [];
  return o.isThemeGetter = !0, o;
}, sr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Hr = /^\d+\/\d+$/, Zr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Qr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, et = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, rt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, tt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ot = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, V = (r) => Q(r) || Zr.has(r) || Hr.test(r), L = (r) => ee(r, "length", dt), Q = (r) => !!r && !Number.isNaN(Number(r)), _e = (r) => ee(r, "number", Q), le = (r) => !!r && Number.isInteger(Number(r)), nt = (r) => r.endsWith("%") && Q(r.slice(0, -1)), f = (r) => sr.test(r), D = (r) => Qr.test(r), at = /* @__PURE__ */ new Set(["length", "size", "percentage"]), st = (r) => ee(r, at, ir), it = (r) => ee(r, "position", ir), lt = /* @__PURE__ */ new Set(["image", "url"]), ct = (r) => ee(r, lt, pt), ut = (r) => ee(r, "", ft), ce = () => !0, ee = (r, o, n) => {
  const a = sr.exec(r);
  return a ? a[1] ? typeof o == "string" ? a[1] === o : o.has(a[1]) : n(a[2]) : !1;
}, dt = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  et.test(r) && !rt.test(r)
), ir = () => !1, ft = (r) => tt.test(r), pt = (r) => ot.test(r), bt = () => {
  const r = _("colors"), o = _("spacing"), n = _("blur"), a = _("brightness"), c = _("borderColor"), i = _("borderRadius"), u = _("borderSpacing"), l = _("borderWidth"), p = _("contrast"), v = _("grayscale"), b = _("hueRotate"), x = _("invert"), C = _("gap"), j = _("gradientColorStops"), O = _("gradientColorStopPositions"), S = _("inset"), w = _("margin"), k = _("opacity"), y = _("padding"), Y = _("saturate"), $ = _("scale"), q = _("sepia"), ue = _("skew"), de = _("space"), fe = _("translate"), J = () => ["auto", "contain", "none"], re = () => ["auto", "hidden", "clip", "visible", "scroll"], te = () => ["auto", f, o], R = () => [f, o], N = () => ["", V, L], I = () => ["auto", Q, f], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], U = () => ["solid", "dashed", "dotted", "double", "none"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", f], ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], M = () => [Q, f];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ce],
      spacing: [V, L],
      blur: ["none", "", D, f],
      brightness: M(),
      borderColor: [r],
      borderRadius: ["none", "", "full", D, f],
      borderSpacing: R(),
      borderWidth: N(),
      contrast: M(),
      grayscale: G(),
      hueRotate: M(),
      invert: G(),
      gap: R(),
      gradientColorStops: [r],
      gradientColorStopPositions: [nt, L],
      inset: te(),
      margin: te(),
      opacity: M(),
      padding: R(),
      saturate: M(),
      scale: M(),
      sepia: G(),
      skew: M(),
      space: R(),
      translate: R()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", f]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [D]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ne()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ne()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...W(), f]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: re()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": re()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": re()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", le, f]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: te()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", f]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: G()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: G()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", le, f]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ce]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", le, f]
        }, f]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ce]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [le, f]
        }, f]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", f]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", f]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [C]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [C]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [C]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...K()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...K(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...K(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [de]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [de]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", f, o]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [f, o, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [f, o, "none", "full", "min", "max", "fit", "prose", {
          screen: [D]
        }, D]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [f, o, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [f, o, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [f, o, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [f, o, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", D, L]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", _e]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ce]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", f]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Q, _e]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", V, f]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", f]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", f]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [k]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [k]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...U(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", V, L]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", V, f]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", f]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", f]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [k]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...W(), it]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", st]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ct]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [O]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [O]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [j]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [j]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [j]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...U(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [k]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: U()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [c]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [c]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [c]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [c]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [c]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [c]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [c]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [c]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [c]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [c]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...U()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [V, f]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [V, L]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: N()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [V, L]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", D, ut]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ce]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [p]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", D, f]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [v]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [q]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [p]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [v]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [q]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", f]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: M()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", f]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: M()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", f]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [$]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [$]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [$]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [le, f]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [fe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [fe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ue]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ue]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", f]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", f]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", f]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [V, L, _e]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, gt = /* @__PURE__ */ Xr(bt);
function ke(...r) {
  return gt(rr(r));
}
const vt = tr(
  "bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group inline-flex items-center justify-center overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white text-black",
        destructive: "bg-white text-black",
        outline: "bg-transparent border-2 border-black text-black hover:bg-black/5"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), mt = tr(
  "rounded-xl h-12 flex items-center justify-center absolute top-[4px] z-10 duration-500",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        outline: "hidden"
      },
      direction: {
        left: "left-1 group-hover:w-[184px]",
        right: "right-1 group-hover:w-[184px] flex-row-reverse"
      }
    },
    defaultVariants: {
      variant: "default",
      direction: "left"
    }
  }
), ht = Mr.forwardRef(
  ({
    className: r,
    variant: o,
    color: n,
    direction: a = "left",
    children: c,
    ...i
  }, u) => {
    const l = n || (o === "destructive" ? "bg-red-500" : "bg-green-400"), p = a === "right" ? "scale-x-[-1]" : "";
    return /* @__PURE__ */ Z.jsxs(
      "button",
      {
        className: ke(vt({ variant: o, className: r })),
        ref: u,
        ...i,
        children: [
          /* @__PURE__ */ Z.jsx(
            "div",
            {
              className: ke(
                mt({ variant: o, direction: a }),
                o !== "outline" && l,
                "w-1/4"
                // starting width
              ),
              children: /* @__PURE__ */ Z.jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 1024 1024",
                  height: "25px",
                  width: "25px",
                  className: ke("transform", p),
                  children: [
                    /* @__PURE__ */ Z.jsx(
                      "path",
                      {
                        d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z",
                        fill: "#000000"
                      }
                    ),
                    /* @__PURE__ */ Z.jsx(
                      "path",
                      {
                        d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z",
                        fill: "#000000"
                      }
                    )
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ Z.jsx("p", { className: "translate-x-2 group-hover:translate-x-0 transition-transform duration-300", children: c })
        ]
      }
    );
  }
);
ht.displayName = "Button";
export {
  ht as Button
};
