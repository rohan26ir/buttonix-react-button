"use client";
import * as e from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region node_modules/clsx/dist/clsx.mjs
function r(e) {
	var t, n, i = "";
	if (typeof e == "string" || typeof e == "number") i += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var a = e.length;
		for (t = 0; t < a; t++) e[t] && (n = r(e[t])) && (i && (i += " "), i += n);
	} else for (n in e) e[n] && (i && (i += " "), i += n);
	return i;
}
function i() {
	for (var e, t, n = 0, i = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = r(e)) && (i && (i += " "), i += t);
	return i;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var a = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, o = (e, t) => ({
	classGroupId: e,
	validator: t
}), s = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), c = "-", l = [], u = "arbitrary..", d = (e) => {
	let t = m(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return p(e);
			let n = e.split(c);
			return f(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? a(i, t) : t : i || l;
			}
			return n[e] || l;
		}
	};
}, f = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = f(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(c) : e.slice(t).join(c), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, p = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? u + r : void 0;
})(), m = (e) => {
	let { theme: t, classGroups: n } = e;
	return h(n, t);
}, h = (e, t) => {
	let n = s();
	for (let r in e) {
		let i = e[r];
		g(i, n, r, t);
	}
	return n;
}, g = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		_(i, t, n, r);
	}
}, _ = (e, t, n, r) => {
	if (typeof e == "string") {
		v(e, t, n);
		return;
	}
	if (typeof e == "function") {
		y(e, t, n, r);
		return;
	}
	b(e, t, n, r);
}, v = (e, t, n) => {
	let r = e === "" ? t : x(t, e);
	r.classGroupId = n;
}, y = (e, t, n, r) => {
	if (S(e)) {
		g(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(o(n, e));
}, b = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		g(o, x(t, a), n, r);
	}
}, x = (e, t) => {
	let n = e, r = t.split(c), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = s(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, S = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, C = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, w = "!", T = ":", ee = [], E = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), D = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === T) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(w) ? (c = s.slice(0, -1), l = !0) : s.startsWith(w) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return E(t, l, c, u);
	};
	if (t) {
		let e = t + T, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : E(ee, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, te = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, O = (e) => ({
	cache: C(e.cacheSize),
	parseClassName: D(e),
	sortModifiers: te(e),
	postfixLookupClassGroupIds: k(e),
	...d(e)
}), k = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, A = /\s+/, j = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(A), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			if (g = r(p), !g) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + w : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, M = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = N(n)) && (i && (i += " "), i += r);
	return i;
}, N = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = N(e[r])) && (n && (n += " "), n += t);
	return n;
}, P = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = O(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = j(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(M(...e));
}, ne = [], F = (e) => {
	let t = (t) => t[e] || ne;
	return t.isThemeGetter = !0, t;
}, I = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, re = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ie = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, L = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, R = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, z = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ae = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, B = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, V = (e) => ie.test(e), H = (e) => !!e && !Number.isNaN(Number(e)), U = (e) => !!e && Number.isInteger(Number(e)), oe = (e) => e.endsWith("%") && H(e.slice(0, -1)), W = (e) => L.test(e), se = () => !0, ce = (e) => R.test(e) && !z.test(e), G = () => !1, K = (e) => ae.test(e), q = (e) => B.test(e), le = (e) => !J(e) && !X(e), ue = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), de = (e) => Q(e, Ee, G), J = (e) => I.test(e), Y = (e) => Q(e, De, ce), fe = (e) => Q(e, Oe, H), pe = (e) => Q(e, Ae, se), me = (e) => Q(e, ke, G), he = (e) => Q(e, we, G), ge = (e) => Q(e, Te, q), _e = (e) => Q(e, je, K), X = (e) => re.test(e), Z = (e) => $(e, De), ve = (e) => $(e, ke), ye = (e) => $(e, we), be = (e) => $(e, Ee), xe = (e) => $(e, Te), Se = (e) => $(e, je, !0), Ce = (e) => $(e, Ae, !0), Q = (e, t, n) => {
	let r = I.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, $ = (e, t, n = !1) => {
	let r = re.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, we = (e) => e === "position" || e === "percentage", Te = (e) => e === "image" || e === "url", Ee = (e) => e === "length" || e === "size" || e === "bg-size", De = (e) => e === "length", Oe = (e) => e === "number", ke = (e) => e === "family-name", Ae = (e) => e === "number" || e === "weight", je = (e) => e === "shadow", Me = /*#__PURE__*/ P(() => {
	let e = F("color"), t = F("font"), n = F("text"), r = F("font-weight"), i = F("tracking"), a = F("leading"), o = F("breakpoint"), s = F("container"), c = F("spacing"), l = F("radius"), u = F("shadow"), d = F("inset-shadow"), f = F("text-shadow"), p = F("drop-shadow"), m = F("blur"), h = F("perspective"), g = F("aspect"), _ = F("ease"), v = F("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		X,
		J
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		X,
		J,
		c
	], T = () => [
		V,
		"full",
		"auto",
		...w()
	], ee = () => [
		U,
		"none",
		"subgrid",
		X,
		J
	], E = () => [
		"auto",
		{ span: [
			"full",
			U,
			X,
			J
		] },
		U,
		X,
		J
	], D = () => [
		U,
		"auto",
		X,
		J
	], te = () => [
		"auto",
		"min",
		"max",
		"fr",
		X,
		J
	], O = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], k = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], A = () => ["auto", ...w()], j = () => [
		V,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], M = () => [
		V,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], N = () => [
		V,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], P = () => [
		e,
		X,
		J
	], ne = () => [
		...b(),
		ye,
		he,
		{ position: [X, J] }
	], I = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], re = () => [
		"auto",
		"cover",
		"contain",
		be,
		de,
		{ size: [X, J] }
	], ie = () => [
		oe,
		Z,
		Y
	], L = () => [
		"",
		"none",
		"full",
		l,
		X,
		J
	], R = () => [
		"",
		H,
		Z,
		Y
	], z = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ae = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], B = () => [
		H,
		oe,
		ye,
		he
	], ce = () => [
		"",
		"none",
		m,
		X,
		J
	], G = () => [
		"none",
		H,
		X,
		J
	], K = () => [
		"none",
		H,
		X,
		J
	], q = () => [
		H,
		X,
		J
	], Q = () => [
		V,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [W],
			breakpoint: [W],
			color: [se],
			container: [W],
			"drop-shadow": [W],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [le],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [W],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [W],
			shadow: [W],
			spacing: ["px", H],
			text: [W],
			"text-shadow": [W],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				V,
				J,
				X,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				X,
				J
			] }],
			"container-named": [ue],
			columns: [{ columns: [
				H,
				J,
				X,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				U,
				"auto",
				X,
				J
			] }],
			basis: [{ basis: [
				V,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				H,
				V,
				"auto",
				"initial",
				"none",
				J
			] }],
			grow: [{ grow: [
				"",
				H,
				X,
				J
			] }],
			shrink: [{ shrink: [
				"",
				H,
				X,
				J
			] }],
			order: [{ order: [
				U,
				"first",
				"last",
				"none",
				X,
				J
			] }],
			"grid-cols": [{ "grid-cols": ee() }],
			"col-start-end": [{ col: E() }],
			"col-start": [{ "col-start": D() }],
			"col-end": [{ "col-end": D() }],
			"grid-rows": [{ "grid-rows": ee() }],
			"row-start-end": [{ row: E() }],
			"row-start": [{ "row-start": D() }],
			"row-end": [{ "row-end": D() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": te() }],
			"auto-rows": [{ "auto-rows": te() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...O(), "normal"] }],
			"justify-items": [{ "justify-items": [...k(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...k()] }],
			"align-content": [{ content: ["normal", ...O()] }],
			"align-items": [{ items: [...k(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...k(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": O() }],
			"place-items": [{ "place-items": [...k(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...k()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: A() }],
			mx: [{ mx: A() }],
			my: [{ my: A() }],
			ms: [{ ms: A() }],
			me: [{ me: A() }],
			mbs: [{ mbs: A() }],
			mbe: [{ mbe: A() }],
			mt: [{ mt: A() }],
			mr: [{ mr: A() }],
			mb: [{ mb: A() }],
			ml: [{ ml: A() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: j() }],
			"inline-size": [{ inline: ["auto", ...M()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...M()] }],
			"max-inline-size": [{ "max-inline": ["none", ...M()] }],
			"block-size": [{ block: ["auto", ...N()] }],
			"min-block-size": [{ "min-block": ["auto", ...N()] }],
			"max-block-size": [{ "max-block": ["none", ...N()] }],
			w: [{ w: [
				s,
				"screen",
				...j()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...j()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...j()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...j()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...j()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...j()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Z,
				Y
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Ce,
				pe
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				oe,
				J
			] }],
			"font-family": [{ font: [
				ve,
				me,
				t
			] }],
			"font-features": [{ "font-features": [J] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				X,
				J
			] }],
			"line-clamp": [{ "line-clamp": [
				H,
				"none",
				X,
				fe
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				X,
				J
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				X,
				J
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: P() }],
			"text-color": [{ text: P() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...z(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				H,
				"from-font",
				"auto",
				X,
				Y
			] }],
			"text-decoration-color": [{ decoration: P() }],
			"underline-offset": [{ "underline-offset": [
				H,
				"auto",
				X,
				J
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				U,
				X,
				J
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				X,
				J
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				X,
				J
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: ne() }],
			"bg-repeat": [{ bg: I() }],
			"bg-size": [{ bg: re() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						U,
						X,
						J
					],
					radial: [
						"",
						X,
						J
					],
					conic: [
						U,
						X,
						J
					]
				},
				xe,
				ge
			] }],
			"bg-color": [{ bg: P() }],
			"gradient-from-pos": [{ from: ie() }],
			"gradient-via-pos": [{ via: ie() }],
			"gradient-to-pos": [{ to: ie() }],
			"gradient-from": [{ from: P() }],
			"gradient-via": [{ via: P() }],
			"gradient-to": [{ to: P() }],
			rounded: [{ rounded: L() }],
			"rounded-s": [{ "rounded-s": L() }],
			"rounded-e": [{ "rounded-e": L() }],
			"rounded-t": [{ "rounded-t": L() }],
			"rounded-r": [{ "rounded-r": L() }],
			"rounded-b": [{ "rounded-b": L() }],
			"rounded-l": [{ "rounded-l": L() }],
			"rounded-ss": [{ "rounded-ss": L() }],
			"rounded-se": [{ "rounded-se": L() }],
			"rounded-ee": [{ "rounded-ee": L() }],
			"rounded-es": [{ "rounded-es": L() }],
			"rounded-tl": [{ "rounded-tl": L() }],
			"rounded-tr": [{ "rounded-tr": L() }],
			"rounded-br": [{ "rounded-br": L() }],
			"rounded-bl": [{ "rounded-bl": L() }],
			"border-w": [{ border: R() }],
			"border-w-x": [{ "border-x": R() }],
			"border-w-y": [{ "border-y": R() }],
			"border-w-s": [{ "border-s": R() }],
			"border-w-e": [{ "border-e": R() }],
			"border-w-bs": [{ "border-bs": R() }],
			"border-w-be": [{ "border-be": R() }],
			"border-w-t": [{ "border-t": R() }],
			"border-w-r": [{ "border-r": R() }],
			"border-w-b": [{ "border-b": R() }],
			"border-w-l": [{ "border-l": R() }],
			"divide-x": [{ "divide-x": R() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": R() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...z(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...z(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: P() }],
			"border-color-x": [{ "border-x": P() }],
			"border-color-y": [{ "border-y": P() }],
			"border-color-s": [{ "border-s": P() }],
			"border-color-e": [{ "border-e": P() }],
			"border-color-bs": [{ "border-bs": P() }],
			"border-color-be": [{ "border-be": P() }],
			"border-color-t": [{ "border-t": P() }],
			"border-color-r": [{ "border-r": P() }],
			"border-color-b": [{ "border-b": P() }],
			"border-color-l": [{ "border-l": P() }],
			"divide-color": [{ divide: P() }],
			"outline-style": [{ outline: [
				...z(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				H,
				X,
				J
			] }],
			"outline-w": [{ outline: [
				"",
				H,
				Z,
				Y
			] }],
			"outline-color": [{ outline: P() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Se,
				_e
			] }],
			"shadow-color": [{ shadow: P() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Se,
				_e
			] }],
			"inset-shadow-color": [{ "inset-shadow": P() }],
			"ring-w": [{ ring: R() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: P() }],
			"ring-offset-w": [{ "ring-offset": [H, Y] }],
			"ring-offset-color": [{ "ring-offset": P() }],
			"inset-ring-w": [{ "inset-ring": R() }],
			"inset-ring-color": [{ "inset-ring": P() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Se,
				_e
			] }],
			"text-shadow-color": [{ "text-shadow": P() }],
			opacity: [{ opacity: [
				H,
				X,
				J
			] }],
			"mix-blend": [{ "mix-blend": [
				...ae(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ae() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [H] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": B() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": B() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": P() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": P() }],
			"mask-image-t-from-pos": [{ "mask-t-from": B() }],
			"mask-image-t-to-pos": [{ "mask-t-to": B() }],
			"mask-image-t-from-color": [{ "mask-t-from": P() }],
			"mask-image-t-to-color": [{ "mask-t-to": P() }],
			"mask-image-r-from-pos": [{ "mask-r-from": B() }],
			"mask-image-r-to-pos": [{ "mask-r-to": B() }],
			"mask-image-r-from-color": [{ "mask-r-from": P() }],
			"mask-image-r-to-color": [{ "mask-r-to": P() }],
			"mask-image-b-from-pos": [{ "mask-b-from": B() }],
			"mask-image-b-to-pos": [{ "mask-b-to": B() }],
			"mask-image-b-from-color": [{ "mask-b-from": P() }],
			"mask-image-b-to-color": [{ "mask-b-to": P() }],
			"mask-image-l-from-pos": [{ "mask-l-from": B() }],
			"mask-image-l-to-pos": [{ "mask-l-to": B() }],
			"mask-image-l-from-color": [{ "mask-l-from": P() }],
			"mask-image-l-to-color": [{ "mask-l-to": P() }],
			"mask-image-x-from-pos": [{ "mask-x-from": B() }],
			"mask-image-x-to-pos": [{ "mask-x-to": B() }],
			"mask-image-x-from-color": [{ "mask-x-from": P() }],
			"mask-image-x-to-color": [{ "mask-x-to": P() }],
			"mask-image-y-from-pos": [{ "mask-y-from": B() }],
			"mask-image-y-to-pos": [{ "mask-y-to": B() }],
			"mask-image-y-from-color": [{ "mask-y-from": P() }],
			"mask-image-y-to-color": [{ "mask-y-to": P() }],
			"mask-image-radial": [{ "mask-radial": [X, J] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": B() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": B() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": P() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": P() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [H] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": B() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": B() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": P() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": P() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: ne() }],
			"mask-repeat": [{ mask: I() }],
			"mask-size": [{ mask: re() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				X,
				J
			] }],
			filter: [{ filter: [
				"",
				"none",
				X,
				J
			] }],
			blur: [{ blur: ce() }],
			brightness: [{ brightness: [
				H,
				X,
				J
			] }],
			contrast: [{ contrast: [
				H,
				X,
				J
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Se,
				_e
			] }],
			"drop-shadow-color": [{ "drop-shadow": P() }],
			grayscale: [{ grayscale: [
				"",
				H,
				X,
				J
			] }],
			"hue-rotate": [{ "hue-rotate": [
				H,
				X,
				J
			] }],
			invert: [{ invert: [
				"",
				H,
				X,
				J
			] }],
			saturate: [{ saturate: [
				H,
				X,
				J
			] }],
			sepia: [{ sepia: [
				"",
				H,
				X,
				J
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				X,
				J
			] }],
			"backdrop-blur": [{ "backdrop-blur": ce() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				H,
				X,
				J
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				H,
				X,
				J
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				H,
				X,
				J
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				H,
				X,
				J
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				H,
				X,
				J
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				H,
				X,
				J
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				H,
				X,
				J
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				H,
				X,
				J
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				X,
				J
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				H,
				"initial",
				X,
				J
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				X,
				J
			] }],
			delay: [{ delay: [
				H,
				X,
				J
			] }],
			animate: [{ animate: [
				"none",
				v,
				X,
				J
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				X,
				J
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: G() }],
			"rotate-x": [{ "rotate-x": G() }],
			"rotate-y": [{ "rotate-y": G() }],
			"rotate-z": [{ "rotate-z": G() }],
			scale: [{ scale: K() }],
			"scale-x": [{ "scale-x": K() }],
			"scale-y": [{ "scale-y": K() }],
			"scale-z": [{ "scale-z": K() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: q() }],
			"skew-x": [{ "skew-x": q() }],
			"skew-y": [{ "skew-y": q() }],
			transform: [{ transform: [
				X,
				J,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: Q() }],
			"translate-x": [{ "translate-x": Q() }],
			"translate-y": [{ "translate-y": Q() }],
			"translate-z": [{ "translate-z": Q() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				U,
				X,
				J
			] }],
			accent: [{ accent: P() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: P() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				X,
				J
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": P() }],
			"scrollbar-track-color": [{ "scrollbar-track": P() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				X,
				J
			] }],
			fill: [{ fill: ["none", ...P()] }],
			"stroke-w": [{ stroke: [
				H,
				Z,
				Y,
				fe
			] }],
			stroke: [{ stroke: ["none", ...P()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region src/utils.ts
function Ne(...e) {
	return Me(i(e));
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var Pe = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Fe = i, Ie = ((e, t) => (n) => {
	if (t?.variants == null) return Fe(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = Pe(t) || Pe(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return Fe(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
})([
	"inline-flex items-center justify-center gap-2 whitespace-nowrap",
	"font-semibold select-none",
	"rounded-lg",
	"transition-all duration-200 ease-out",
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current",
	"disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
	"[aria-busy=true]:cursor-wait",
	"motion-safe:transition-all motion-reduce:transition-none"
].join(" "), {
	variants: {
		variant: {
			solid: [
				"bg-indigo-600 text-white shadow-sm",
				"hover:bg-indigo-700 hover:shadow-md hover:-translate-y-px",
				"active:translate-y-0 active:shadow-sm"
			].join(" "),
			outline: [
				"border-2 border-indigo-600 text-indigo-600 bg-transparent",
				"hover:bg-indigo-600 hover:text-white",
				"active:bg-indigo-700"
			].join(" "),
			ghost: [
				"bg-transparent text-indigo-600",
				"hover:bg-indigo-50 hover:text-indigo-700",
				"active:bg-indigo-100"
			].join(" "),
			soft: [
				"bg-indigo-100 text-indigo-700",
				"hover:bg-indigo-200 hover:text-indigo-800",
				"active:bg-indigo-300"
			].join(" "),
			destructive: [
				"bg-red-600 text-white shadow-sm",
				"hover:bg-red-700 hover:shadow-md",
				"active:bg-red-800 active:shadow-sm"
			].join(" "),
			gradient: [
				"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md",
				"hover:shadow-lg hover:-translate-y-0.5 hover:brightness-110",
				"active:translate-y-0 active:brightness-100"
			].join(" "),
			"gradient-shift": [
				"btnx-gradient-shift text-white shadow-md",
				"hover:shadow-lg hover:-translate-y-0.5",
				"active:translate-y-0"
			].join(" "),
			glass: [
				"bg-white/20 backdrop-blur-md border border-white/30 text-white",
				"shadow-[0_4px_30px_rgba(0,0,0,0.15)]",
				"hover:bg-white/30 hover:border-white/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
				"active:bg-white/15"
			].join(" "),
			neumorphic: [
				"bg-[#e0e5ec] text-gray-600",
				"shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.8)]",
				"hover:shadow-[8px_8px_16px_rgba(163,177,198,0.7),-8px_-8px_16px_rgba(255,255,255,0.9)]",
				"active:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]"
			].join(" "),
			shimmer: [
				"btnx-shimmer bg-indigo-600 text-white shadow-md overflow-hidden",
				"hover:shadow-lg hover:-translate-y-0.5",
				"active:translate-y-0"
			].join(" "),
			"border-beam": [
				"btnx-border-beam bg-transparent text-indigo-600 relative overflow-hidden",
				"hover:text-white",
				"active:brightness-90"
			].join(" "),
			glow: [
				"bg-indigo-600 text-white",
				"shadow-[0_0_0_0_rgba(99,102,241,0.4)]",
				"hover:shadow-[0_0_20px_8px_rgba(99,102,241,0.5)] hover:-translate-y-0.5",
				"active:translate-y-0 active:shadow-[0_0_10px_4px_rgba(99,102,241,0.4)]"
			].join(" "),
			magnetic: [
				"bg-gray-900 text-white shadow-md",
				"hover:shadow-xl hover:-translate-y-1.5 hover:scale-105",
				"active:translate-y-0 active:scale-100 active:shadow-md"
			].join(" "),
			ripple: [
				"btnx-ripple bg-indigo-600 text-white shadow-sm relative overflow-hidden",
				"hover:bg-indigo-700",
				"active:scale-95"
			].join(" "),
			bounce: [
				"bg-emerald-500 text-white shadow-md",
				"hover:animate-none hover:bg-emerald-600 hover:-translate-y-1",
				"active:translate-y-0",
				"btnx-bounce"
			].join(" "),
			jelly: [
				"bg-violet-500 text-white shadow-md",
				"btnx-jelly",
				"active:scale-95"
			].join(" "),
			"slide-fill": [
				"btnx-slide-fill border-2 border-indigo-600 text-indigo-600 relative overflow-hidden",
				"hover:text-white",
				"active:brightness-90"
			].join(" "),
			"underline-reveal": [
				"bg-transparent text-gray-800 relative",
				"btnx-underline-reveal",
				"hover:text-indigo-600",
				"active:text-indigo-800"
			].join(" "),
			"split-reveal": [
				"btnx-split-reveal bg-indigo-600 text-white shadow-md relative overflow-hidden",
				"hover:shadow-lg",
				"active:scale-95"
			].join(" "),
			"3d-press": [
				"bg-indigo-600 text-white",
				"shadow-[0_6px_0_rgba(55,48,163,1)] border border-indigo-700",
				"hover:shadow-[0_4px_0_rgba(55,48,163,1)] hover:translate-y-0.5",
				"active:shadow-[0_2px_0_rgba(55,48,163,1)] active:translate-y-1"
			].join(" "),
			neon: [
				"bg-black text-cyan-400 border border-cyan-400",
				"shadow-[0_0_6px_0_rgba(34,211,238,0.3),inset_0_0_6px_0_rgba(34,211,238,0.1)]",
				"hover:text-black hover:bg-cyan-400",
				"hover:shadow-[0_0_20px_6px_rgba(34,211,238,0.6),inset_0_0_12px_0_rgba(34,211,238,0.2)]",
				"active:scale-95"
			].join(" "),
			aurora: [
				"btnx-aurora text-white shadow-lg relative overflow-hidden",
				"hover:shadow-xl hover:-translate-y-0.5 hover:brightness-110",
				"active:translate-y-0 active:brightness-100"
			].join(" ")
		},
		size: {
			xs: "h-7 px-3 text-xs rounded-md gap-1",
			sm: "h-8 px-4 text-sm rounded-md gap-1.5",
			default: "h-10 px-5 text-sm",
			lg: "h-12 px-6 text-base rounded-xl",
			xl: "h-14 px-8 text-lg rounded-xl",
			icon: "h-10 w-10 p-0 rounded-lg"
		}
	},
	defaultVariants: {
		variant: "solid",
		size: "default"
	}
}), Le = () => /* @__PURE__ */ t("span", {
	className: "btnx-spinner",
	"aria-hidden": "true"
}), Re = ({ state: e }) => e === "success" ? /* @__PURE__ */ t("span", {
	className: "btnx-state-icon",
	"aria-hidden": "true",
	children: /* @__PURE__ */ t("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		width: "1em",
		height: "1em",
		children: /* @__PURE__ */ t("path", {
			fillRule: "evenodd",
			d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
			clipRule: "evenodd"
		})
	})
}) : e === "error" ? /* @__PURE__ */ t("span", {
	className: "btnx-state-icon",
	"aria-hidden": "true",
	children: /* @__PURE__ */ t("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		width: "1em",
		height: "1em",
		children: /* @__PURE__ */ t("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
	})
}) : null;
function ze(e, t) {
	if (t) return;
	let n = e.currentTarget, r = n.getBoundingClientRect(), i = Math.max(r.width, r.height), a = i / 2, o = document.createElement("span");
	o.className = "btnx-ripple-wave", o.style.cssText = `
    width: ${i}px;
    height: ${i}px;
    left: ${e.clientX - r.left - a}px;
    top: ${e.clientY - r.top - a}px;
  `, n.appendChild(o), o.addEventListener("animationend", () => o.remove(), { once: !0 });
}
var Be = e.forwardRef(({ className: r, variant: i = "solid", size: a = "default", isLoading: o = !1, loadingText: s = "Loading…", state: c = "idle", color: l, disableAnimation: u = !1, leftIcon: d, rightIcon: f, children: p, disabled: m, onClick: h, style: g, type: _ = "button", ...v }, y) => {
	let b = m || o, x = o, S = c === "success" || c === "error", C = l ? {
		"--btnx-shimmer-color": l,
		"--btnx-beam-color": l,
		"--btnx-ripple-color": l
	} : {}, w = e.useCallback((e) => {
		i === "ripple" && !u && ze(e, typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches), h?.(e);
	}, [
		i,
		u,
		h
	]);
	return /* @__PURE__ */ n("button", {
		ref: y,
		type: _,
		className: Ne(Ie({
			variant: i,
			size: a
		}), u && "!transition-none !animation-none", {
			success: "!bg-emerald-500 !border-emerald-500 !text-white",
			error: "!bg-red-500 !border-red-500 !text-white",
			idle: "",
			loading: ""
		}[c], r),
		disabled: b,
		"aria-disabled": b,
		"aria-busy": x || void 0,
		"aria-label": x ? s : v["aria-label"],
		onClick: w,
		style: {
			...C,
			...g
		},
		...v,
		children: [
			o && /* @__PURE__ */ t(Le, {}),
			!o && S && /* @__PURE__ */ t(Re, { state: c }),
			!o && !S && d && /* @__PURE__ */ t("span", {
				className: "btnx-icon-left",
				"aria-hidden": "true",
				children: d
			}),
			o ? /* @__PURE__ */ t("span", {
				className: "sr-only",
				children: s
			}) : p,
			!o && f && /* @__PURE__ */ t("span", {
				className: "btnx-icon-right",
				"aria-hidden": "true",
				children: f
			})
		]
	});
});
Be.displayName = "Button";
//#endregion
export { Be as Button, Ie as buttonVariants, Ne as cn };

//# sourceMappingURL=index.es.js.map