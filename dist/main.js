//#region src/shared/utils/logger.ts
var e = "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", t = (e, t) => {
	let n = document.getElementById("messagebuffer");
	if (!n) return null;
	let r = document.createElement("div");
	return r.className = "server-msg-reconnect", r.style = `border: 1px ${t}`, r.textContent = e, n.appendChild(r), r;
}, n = (n) => t(n, e), r = async () => new Promise((e, t) => {
	let n = new URL("dist/index.css", window.BASE_URL), r = document.createElement("link");
	r.rel = "stylesheet", r.type = "text/css", r.href = n.toString(), r.onload = () => requestAnimationFrame(() => e()), r.onerror = (e) => requestAnimationFrame(() => t(/* @__PURE__ */ Error(`failed to load main stylesheet: ${e}`))), document.head.appendChild(r);
}), i = () => {
	for (let e of [
		"//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css",
		"/css/sticky-footer-navbar.css",
		"/css/videojs-resolution-switcher.css",
		"/css/video-js.css",
		"/css/cytube.css"
	]) {
		let t = document.querySelector(`link[href="${e}"]`);
		if (!t) return;
		t.remove();
	}
	document.getElementById("usertheme")?.remove();
}, a = (e) => {
	window.CHANNEL.js = e;
	let t = document.querySelector("#cs-jstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channeljs) return;
	let n = document.createElement("script");
	n.id = "chanjs", n.type = "text/javascript", n.textContent = e, document.body.append(n);
}, o = (e) => {
	window.CHANNEL.css = e;
	let t = document.querySelector("#cs-csstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channelcss) return;
	let n = document.createElement("style");
	n.id = "chancss", n.textContent = e, document.head.append(n);
}, s = (e) => {
	let t = document.querySelector("#chanjs");
	if (!t) {
		a(e);
		return;
	}
	t.textContent !== e && (t.remove(), a(e));
}, c = (e) => {
	let t = document.querySelector("#chancss");
	if (!t) {
		o(e);
		return;
	}
	t.textContent !== e && (t.remove(), o(e));
}, l = () => {
	window.Callbacks.channelCSSJS = ({ css: e, js: t }) => {
		e && c(e), t && s(t);
	};
}, u = () => {
	let e = new URL("dist/favicon.ico", window.BASE_URL), t = document.createElement("link");
	t.href = e.toString(), t.type = "image/x-icon", t.rel = "shortcut icon", document.head.append(t);
}, d = async () => {
	let e = n("Loading styles...");
	await r(), i(), e && e.remove();
}, f = async () => {
	l(), u(), await d();
}, p = async () => new Promise((e) => {
	h.once("connect", e), h.connect();
}), m = async () => new Promise((e, t) => {
	h.once("disconnect", (n) => {
		if (n === "io client disconnect") {
			e();
			return;
		}
		t(n);
	}), h.disconnect();
}), h = window.socket, g = Array.isArray, _ = Array.prototype.indexOf, v = Array.prototype.includes, y = Array.from, b = Object.defineProperty, x = Object.getOwnPropertyDescriptor, ee = Object.getOwnPropertyDescriptors, te = Object.prototype, S = Array.prototype, C = Object.getPrototypeOf, ne = Object.isExtensible;
function re(e) {
	return typeof e == "function";
}
var w = () => {};
function ie(e) {
	return e();
}
function ae(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function oe() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/constants.js
var se = 1 << 24, ce = 1024, le = 2048, ue = 4096, T = 8192, de = 16384, fe = 32768, pe = 1 << 25, me = 65536, he = 1 << 19, ge = 1 << 20, _e = 1 << 25, ve = 65536, ye = 1 << 21, be = 1 << 22, xe = 1 << 23, Se = Symbol("$state"), Ce = Symbol("legacy props"), we = Symbol(""), Te = Symbol("attributes"), Ee = Symbol("class"), De = Symbol("style"), Oe = Symbol("text"), ke = Symbol("form reset"), Ae = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), je = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Me(e) {
	return e === this.v;
}
function Ne(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Pe(e) {
	return !Ne(e, this.v);
}
function Fe(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function Ie() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Le(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function Re(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function ze() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Be(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Ve() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function He(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Ue() {
	throw Error("https://svelte.dev/e/set_context_after_init");
}
function We() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ge() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ke() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function qe() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var Je = !1, Ye = !1;
function Xe() {
	Ye = !0;
}
//#endregion
//#region node_modules/svelte/src/constants.js
var Ze = {}, Qe = Symbol("uninitialized"), $e = "http://www.w3.org/1999/xhtml", et = "@attach", tt = [];
function nt(e, t = !1, n = !1) {
	return rt(e, /* @__PURE__ */ new Map(), "", tt, null, n);
}
function rt(e, t, n, r, i = null, a = !1) {
	if (typeof e == "object" && e) {
		var o = t.get(e);
		if (o !== void 0) return o;
		if (e instanceof Map) return new Map(e);
		if (e instanceof Set) return new Set(e);
		if (g(e)) {
			var s = Array(e.length);
			t.set(e, s), i !== null && t.set(i, s);
			for (var c = 0; c < e.length; c += 1) {
				var l = e[c];
				c in e && (s[c] = rt(l, t, n, r, null, a));
			}
			return s;
		}
		if (C(e) === te) {
			s = {}, t.set(e, s), i !== null && t.set(i, s);
			for (var u of Object.keys(e)) s[u] = rt(e[u], t, n, r, null, a);
			return s;
		}
		if (e instanceof Date) return structuredClone(e);
		if (typeof e.toJSON == "function" && !a) return rt(e.toJSON(), t, n, r, e);
	}
	if (e instanceof EventTarget) return e;
	try {
		return structuredClone(e);
	} catch {
		return e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var it = null;
function at(e) {
	it = e;
}
function ot(e) {
	return dt("getContext").get(e);
}
function st(e, t) {
	let n = dt("setContext");
	if (Je) {
		var r = z.f;
		!R && r & 32 && !it.i || Ue();
	}
	return n.set(e, t), t;
}
function ct(e) {
	return dt("hasContext").has(e);
}
function lt() {
	return dt("getAllContexts");
}
function E(e, t = !1, n) {
	it = {
		p: it,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: z,
		l: Ye && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function D(e) {
	var t = it, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Hr(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, it = t.p, e ?? {};
}
function ut() {
	return !Ye || it !== null && it.l === null;
}
function dt(e) {
	return it === null && Fe(e), it.c ??= new Map(ft(it) || void 0);
}
function ft(e) {
	let t = e.p;
	for (; t !== null;) {
		let e = t.c;
		if (e !== null) return e;
		t = t.p;
	}
	return null;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var pt = [];
function mt() {
	var e = pt;
	pt = [], ae(e);
}
function ht(e) {
	if (pt.length === 0 && !pn) {
		var t = pt;
		queueMicrotask(() => {
			t === pt && mt();
		});
	}
	pt.push(e);
}
function gt() {
	for (; pt.length > 0;) mt();
}
function _t() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function vt(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function yt() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function bt() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var O = !1;
function xt(e) {
	O = e;
}
var k;
function St(e) {
	if (e === null) throw vt(), Ze;
	return k = e;
}
function Ct() {
	return St(/* @__PURE__ */ Lt(k));
}
function A(e) {
	if (O) {
		if (/* @__PURE__ */ Lt(k) !== null) throw vt(), Ze;
		k = e;
	}
}
function wt(e = 1) {
	if (O) {
		for (var t = e, n = k; t--;) n = /* @__PURE__ */ Lt(n);
		k = n;
	}
}
function Tt(e = !0) {
	for (var t = 0, n = k;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Lt(n);
		e && n.remove(), n = i;
	}
}
function Et(e) {
	if (!e || e.nodeType !== 8) throw vt(), Ze;
	return e.data;
}
function Dt(e) {
	if (typeof e != "object" || !e || Se in e) return e;
	let t = C(e);
	if (t !== te && t !== S) return e;
	var n = /* @__PURE__ */ new Map(), r = g(e), i = /* @__PURE__ */ I(0), a = null, o = Sr, s = (e) => {
		if (Sr === o) return e();
		var t = R, n = Sr;
		fr(null), Cr(o);
		var r = e();
		return fr(t), Cr(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ I(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && We();
			var i = n.get(t);
			return i === void 0 ? s(() => {
				var e = /* @__PURE__ */ I(r.value, a);
				return n.set(t, e), e;
			}) : L(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = s(() => /* @__PURE__ */ I(Qe, a));
					n.set(t, e), $n(i);
				}
			} else L(r, Qe), $n(i);
			return !0;
		},
		get(t, r, i) {
			if (r === Se) return e;
			var o = n.get(r), c = r in t;
			if (o === void 0 && (!c || x(t, r)?.writable) && (o = s(() => /* @__PURE__ */ I(Dt(c ? t[r] : Qe), a)), n.set(r, o)), o !== void 0) {
				var l = B(o);
				return l === Qe ? void 0 : l;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = B(i));
			} else if (r === void 0) {
				var a = n.get(t), o = a?.v;
				if (a !== void 0 && o !== Qe) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === Se) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== Qe || Reflect.has(e, t);
			return (r !== void 0 || z !== null && (!i || x(e, t)?.writable)) && (r === void 0 && (r = s(() => /* @__PURE__ */ I(i ? Dt(e[t]) : Qe, a)), n.set(t, r)), B(r) === Qe) ? !1 : i;
		},
		set(e, t, o, c) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var f = n.get(d + "");
				f === void 0 ? d in e && (f = s(() => /* @__PURE__ */ I(Qe, a)), n.set(d + "", f)) : L(f, Qe);
			}
			if (l === void 0) (!u || x(e, t)?.writable) && (l = s(() => /* @__PURE__ */ I(void 0, a)), L(l, Dt(o)), n.set(t, l));
			else {
				u = l.v !== Qe;
				var p = s(() => Dt(o));
				L(l, p);
			}
			var m = Reflect.getOwnPropertyDescriptor(e, t);
			if (m?.set && m.set.call(c, o), !u) {
				if (r && typeof t == "string") {
					var h = n.get("length"), g = Number(t);
					Number.isInteger(g) && g >= h.v && L(h, g + 1);
				}
				$n(i);
			}
			return !0;
		},
		ownKeys(e) {
			B(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== Qe;
			});
			for (var [r, a] of n) a.v !== Qe && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			Ge();
		}
	});
}
function Ot(e) {
	try {
		if (typeof e == "object" && e && Se in e) return e[Se];
	} catch {}
	return e;
}
function kt(e, t) {
	return Object.is(Ot(e), Ot(t));
}
new Set([
	"copyWithin",
	"fill",
	"pop",
	"push",
	"reverse",
	"shift",
	"sort",
	"splice",
	"unshift"
]);
var At, jt, Mt, Nt;
function Pt() {
	if (At === void 0) {
		At = window, jt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Mt = x(t, "firstChild").get, Nt = x(t, "nextSibling").get, ne(e) && (e[Ee] = void 0, e[Te] = null, e[De] = void 0, e.__e = void 0), ne(n) && (n[Oe] = void 0);
	}
}
function Ft(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function It(e) {
	return Mt.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Lt(e) {
	return Nt.call(e);
}
function j(e, t) {
	if (!O) return /* @__PURE__ */ It(e);
	var n = /* @__PURE__ */ It(k);
	if (n === null) n = k.appendChild(Ft());
	else if (t && n.nodeType !== 3) {
		var r = Ft();
		return n?.before(r), St(r), r;
	}
	return t && Vt(n), St(n), n;
}
function M(e, t = !1) {
	if (!O) {
		var n = /* @__PURE__ */ It(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Lt(n) : n;
	}
	if (t) {
		if (k?.nodeType !== 3) {
			var r = Ft();
			return k?.before(r), St(r), r;
		}
		Vt(k);
	}
	return k;
}
function N(e, t = 1, n = !1) {
	let r = O ? k : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Lt(r);
	if (!O) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Ft();
			return r === null ? i?.after(a) : r.before(a), St(a), a;
		}
		Vt(r);
	}
	return St(r), r;
}
function Rt(e) {
	e.textContent = "";
}
function zt() {
	return !Je || Sn !== null ? !1 : (z.f & fe) !== 0;
}
function Bt(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function Vt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function Ht(e) {
	var t = z;
	if (t === null) return R.f |= xe, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Ut(e, t);
}
function Ut(e, t) {
	for (; t !== null;) {
		if (t.f & 128) {
			if (!(t.f & 32768)) throw e;
			try {
				t.b.error(e);
				return;
			} catch (t) {
				e = t;
			}
		}
		t = t.parent;
	}
	throw e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Wt = ~(le | ue | ce);
function Gt(e, t) {
	e.f = e.f & Wt | t;
}
function Kt(e) {
	e.f & 512 || e.deps === null ? Gt(e, ce) : Gt(e, ue);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function qt(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ve, qt(t.deps));
}
function Jt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), qt(e.deps), Gt(e, ce);
}
//#endregion
//#region node_modules/svelte/src/store/utils.js
function Yt(e, t, n) {
	if (e == null) return t(void 0), n && n(void 0), w;
	let r = V(() => e.subscribe(t, n));
	return r.unsubscribe ? () => r.unsubscribe() : r;
}
//#endregion
//#region node_modules/svelte/src/store/shared/index.js
var Xt = [];
function Zt(e, t = w) {
	let n = null, r = /* @__PURE__ */ new Set();
	function i(t) {
		if (Ne(e, t) && (e = t, n)) {
			let t = !Xt.length;
			for (let t of r) t[1](), Xt.push(t, e);
			if (t) {
				for (let e = 0; e < Xt.length; e += 2) Xt[e][0](Xt[e + 1]);
				Xt.length = 0;
			}
		}
	}
	function a(t) {
		i(t(e));
	}
	function o(o, s = w) {
		let c = [o, s];
		return r.add(c), r.size === 1 && (n = t(i, a) || w), o(e), () => {
			r.delete(c), r.size === 0 && n && (n(), n = null);
		};
	}
	return {
		set: i,
		update: a,
		subscribe: o
	};
}
function Qt(e) {
	let t;
	return Yt(e, (e) => t = e)(), t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var $t = !1, en = !1, tn = Symbol("unmounted");
function nn(e, t, n) {
	let r = n[t] ??= {
		store: null,
		source: /* @__PURE__ */ Xn(void 0),
		unsubscribe: w
	};
	if (r.store !== e && !(tn in n)) if (r.unsubscribe(), r.store = e ?? null, e == null) r.source.v = void 0, r.unsubscribe = w;
	else {
		var i = !0;
		r.unsubscribe = Yt(e, (e) => {
			i ? r.source.v = e : L(r.source, e);
		}), i = !1;
	}
	return e && tn in n ? Qt(e) : B(r.source);
}
function rn() {
	let e = {};
	function t() {
		Br(() => {
			for (var t in e) e[t].unsubscribe();
			b(e, tn, {
				enumerable: !1,
				value: !0
			});
		});
	}
	return [e, t];
}
function an(e, t) {
	$t = !0;
	try {
		e.set(t);
	} finally {
		$t = !1;
	}
}
function on(e, t, n) {
	return an(e, n), t;
}
function sn(e) {
	var t = en;
	try {
		return en = !1, [e(), en];
	} finally {
		en = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var cn = null, ln = null, P = null, un = null, dn = null, fn = null, pn = !1, mn = !1, hn = null, gn = null, _n = 0, vn = 1, yn = class e {
	id = vn++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	unblocked = /* @__PURE__ */ new Set();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = /* @__PURE__ */ new Set();
	#o = 0;
	#s = /* @__PURE__ */ new Map();
	#c = null;
	#l = [];
	#u = [];
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Map();
	#m = /* @__PURE__ */ new Set();
	is_fork = !1;
	#h = !1;
	#g() {
		if (this.is_fork) return !0;
		for (let n of this.#s.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#p.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#p.has(e) || this.#p.set(e, {
			d: [],
			m: []
		}), this.#m.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#p.get(e);
		if (n) {
			this.#p.delete(e);
			for (var r of n.d) Gt(r, le), t(r);
			for (r of n.m) Gt(r, ue), t(r);
		}
		this.#m.add(e);
	}
	#_() {
		if (this.#e = !0, _n++ > 1e3 && (this.#w(), xn()), !this.#g()) {
			for (let e of this.#d) this.#f.delete(e), Gt(e, le), this.schedule(e);
			for (let e of this.#f) Gt(e, ue), this.schedule(e);
		}
		let t = this.#l;
		this.#l = [], this.apply();
		var n = hn = [], r = [], i = gn = [];
		for (let e of t) try {
			this.#v(e, n, r);
		} catch (t) {
			throw On(e), t;
		}
		if (P = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (hn = null, gn = null, this.#g()) {
			this.#x(r), this.#x(n);
			for (let [e, t] of this.#p) Dn(e, t);
			i.length > 0 && P.#_();
			return;
		}
		let o = this.#y();
		if (o) {
			o.#b(this);
			return;
		}
		this.#d.clear(), this.#f.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), un = this, Cn(r), Cn(n), un = null, this.#c?.resolve();
		var s = P;
		if (this.linked && this.#o === 0 && this.#w(), Je && !this.linked && (this.#S(), P = s), this.#l.length > 0) {
			s === null && (s = this, this.#C());
			let e = s;
			e.#l.push(...this.#l.filter((t) => !e.#l.includes(t)));
		}
		s !== null && s.#_();
	}
	#v(e, t, n) {
		e.f ^= ce;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#p.has(r)) && r.fn !== null) {
				a ? r.f ^= ce : i & 4 ? t.push(r) : Je && i & 16777224 ? n.push(r) : Tr(r) && (i & 16 && this.#f.add(r), Ar(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#y() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#b(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve);
		}
		let t = (e) => {
			var n = e.reactions;
			if (n !== null) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#f.delete(i), Gt(i, le), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#w(), P = this, this.#_();
	}
	#x(e) {
		for (var t = 0; t < e.length; t += 1) Jt(e[t], this.#d, this.#f);
	}
	capture(e, t, n = !1) {
		e.v !== Qe && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), dn?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		P = this;
	}
	deactivate() {
		P = null, dn = null;
	}
	flush() {
		try {
			mn = !0, P = this, this.#_();
		} finally {
			_n = 0, fn = null, hn = null, gn = null, mn = !1, P = null, dn = null, qn.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear(), this.#a.clear(), this.#w();
	}
	register_created_effect(e) {
		this.#u.push(e);
	}
	#S() {
		this.#w();
		for (let l = cn; l !== null; l = l.#n) {
			var e = l.id < this.id, t = [];
			for (let [r, [i, a]] of this.current) {
				if (l.current.has(r)) {
					var n = l.current.get(r)[0];
					if (e && i !== n) l.current.set(r, [i, a]);
					else continue;
				}
				t.push(r);
			}
			if (e) for (let [e, t] of this.async_deriveds) {
				let n = l.async_deriveds.get(e);
				n && t.promise.then(n.resolve);
			}
			if (l.#e) {
				var r = [...l.current.keys()].filter((e) => !this.current.has(e));
				if (r.length === 0) e && l.discard();
				else if (t.length > 0) {
					if (e) for (let e of this.#m) l.unskip_effect(e, (e) => {
						e.f & 4194320 ? l.schedule(e) : l.#x([e]);
					});
					l.activate();
					var i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
					for (var o of t) wn(o, r, i, a);
					a = /* @__PURE__ */ new Map();
					var s = [...l.current.keys()].filter((e) => this.current.has(e) ? this.current.get(e)[0] !== e.v : !0);
					if (s.length > 0) for (let e of this.#u) !(e.f & 155648) && Tn(e, s, a) && (e.f & 4194320 ? (Gt(e, le), l.schedule(e)) : l.#d.add(e));
					if (l.#l.length > 0 && !l.#h) {
						l.apply();
						for (var c of l.#l) l.#v(c, [], []);
						l.#l = [];
					}
					l.deactivate();
				}
			}
		}
	}
	increment(e, t) {
		if (this.#o += 1, e) {
			let e = this.#s.get(t) ?? 0;
			this.#s.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#o, e) {
			let e = this.#s.get(t) ?? 0;
			e === 1 ? this.#s.delete(t) : this.#s.set(t, e - 1);
		}
		this.#h || (this.#h = !0, ht(() => {
			this.#h = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#d.add(t);
		for (let e of t) this.#f.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	on_fork_commit(e) {
		this.#a.add(e);
	}
	run_fork_commit_callbacks() {
		for (let e of this.#a) e(this);
		this.#a.clear();
	}
	settled() {
		return (this.#c ??= oe()).promise;
	}
	static ensure() {
		if (P === null) {
			let t = P = new e();
			t.#C(), !mn && !pn && ht(() => {
				t.#e || t.flush();
			});
		}
		return P;
	}
	apply() {
		if (!Je || !this.is_fork && this.#t === null && this.#n === null) {
			dn = null;
			return;
		}
		dn = /* @__PURE__ */ new Map();
		for (let [e, [t]] of this.current) dn.set(e, t);
		for (let t = cn; t !== null; t = t.#n) if (!(t === this || t.is_fork)) {
			var e = !1;
			if (t.id < this.id) {
				for (let [n, [, r]] of t.current) if (!r && this.current.has(n)) {
					e = !0;
					break;
				}
			}
			if (!e) for (let [e, n] of t.previous) dn.has(e) || dn.set(e, n);
		}
	}
	schedule(e) {
		if (fn = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (hn !== null && t === z && (Je || (R === null || !(R.f & 2)) && !$t)) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= ce;
			}
		}
		this.#l.push(t);
	}
	#C() {
		ln === null ? cn = ln = this : (ln.#n = this, this.#t = ln), ln = this;
	}
	#w() {
		var e = this.#t, t = this.#n;
		e === null ? cn = t : e.#n = t, t === null ? ln = e : t.#t = e, this.linked = !1;
	}
};
function bn(e) {
	var t = pn;
	pn = !0;
	try {
		var n;
		for (e && (P !== null && !P.is_fork && P.flush(), n = e());;) {
			if (gt(), P === null) return n;
			P.flush();
		}
	} finally {
		pn = t;
	}
}
function xn() {
	try {
		Ve();
	} catch (e) {
		Ut(e, fn);
	}
}
var Sn = null;
function Cn(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Tr(r) && (Sn = /* @__PURE__ */ new Set(), Ar(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && ii(r), Sn?.size > 0)) {
				qn.clear();
				for (let e of Sn) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Sn.has(n) && (Sn.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Ar(n);
					}
				}
				Sn.clear();
			}
		}
		Sn = null;
	}
}
function wn(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? wn(i, t, n, r) : e & 4194320 && !(e & 2048) && Tn(i, t, r) && (Gt(i, le), En(i));
	}
}
function Tn(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (v.call(t, r)) return !0;
		if (r.f & 2 && Tn(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function En(e) {
	P.schedule(e);
}
function Dn(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), Gt(e, ce);
		for (var n = e.first; n !== null;) Dn(n, t), n = n.next;
	}
}
function On(e) {
	Gt(e, ce);
	for (var t = e.first; t !== null;) On(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function kn(e) {
	let t = 0, n = Yn(0), r;
	return () => {
		zr() && (B(n), Jr(() => (t === 0 && (r = V(() => e(() => $n(n)))), t += 1, () => {
			ht(() => {
				--t, t === 0 && (r?.(), r = void 0, $n(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var An = me | he;
function jn(e, t, n, r) {
	new Mn(e, t, n, r);
}
var Mn = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = O ? k : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = kn(() => (this.#m = Yn(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = z;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = z.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = Xr(() => {
			if (O) {
				let e = this.#t;
				Ct();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#v() : this.#g();
			} else this.#y();
		}, An), O && (this.#e = k);
	}
	#g() {
		try {
			this.#a = Qr(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed;
		t && (this.#s = Qr(() => {
			t(this.#e, () => e, () => () => {});
		}));
	}
	#v() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = Qr(() => e(this.#e)), ht(() => {
			var e = this.#c = document.createDocumentFragment(), t = Ft();
			e.append(t), this.#a = this.#x(() => Qr(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, ai(this.#o, () => {
				this.#o = null;
			}), this.#b(P));
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = Qr(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				li(this.#a, e);
				let t = this.#n.pending;
				this.#o = Qr(() => t(this.#e));
			} else this.#b(P);
		} catch (e) {
			this.error(e);
		}
	}
	#b(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Jt(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(e) {
		var t = z, n = R, r = it;
		pr(this.#i), fr(this.#i), at(this.#i.ctx);
		try {
			return yn.ensure(), e();
		} catch (e) {
			return Ht(e), null;
		} finally {
			pr(t), fr(n), at(r);
		}
	}
	#S(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#b(t), this.#o && ai(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, ht(() => {
			this.#d = !1, this.#m && Zn(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), B(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		P?.is_fork ? (this.#a && P.skip_effect(this.#a), this.#o && P.skip_effect(this.#o), this.#s && P.skip_effect(this.#s), P.on_fork_commit(() => {
			this.#C(e);
		})) : this.#C(e);
	}
	#C(e) {
		this.#a &&= (ni(this.#a), null), this.#o &&= (ni(this.#o), null), this.#s &&= (ni(this.#s), null), O && (St(this.#t), wt(), St(Tt()));
		var t = this.#n.onerror;
		let n = this.#n.failed;
		var r = !1, i = !1;
		let a = () => {
			if (r) {
				bt();
				return;
			}
			r = !0, i && qe(), this.#s !== null && ai(this.#s, () => {
				this.#s = null;
			}), this.#x(() => {
				this.#y();
			});
		}, o = (e) => {
			try {
				i = !0, t?.(e, a), i = !1;
			} catch (e) {
				Ut(e, this.#i && this.#i.parent);
			}
			n && (this.#s = this.#x(() => {
				try {
					return Qr(() => {
						var t = z;
						t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
					});
				} catch (e) {
					return Ut(e, this.#i.parent), null;
				}
			}));
		};
		ht(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				Ut(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => Ut(e, this.#i && this.#i.parent)) : o(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Nn(e, t, n, r) {
	let i = ut() ? Ln : Bn;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = z, s = Pn(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		if (!(o.f & 16384)) {
			s();
			try {
				r(e);
			} catch (e) {
				Ut(e, o);
			}
			Fn();
		}
	}
	var u = In();
	if (n.length === 0) {
		c.then(() => l(t.map(i))).finally(u);
		return;
	}
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ zn(e))).then((e) => l([...t.map(i), ...e])).catch((e) => Ut(e, o)).finally(u);
	}
	c ? c.then(() => {
		s(), d(), Fn();
	}) : d();
}
function Pn() {
	var e = z, t = R, n = it, r = P;
	return function(i = !0) {
		pr(e), fr(t), at(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Fn(e = !0) {
	pr(null), fr(null), at(null), e && P?.deactivate();
}
function In() {
	var e = z, t = e.b, n = P, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), () => {
		t.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Ln(e) {
	var t = 2 | le;
	return z !== null && (z.f |= he), {
		ctx: it,
		deps: null,
		effects: null,
		equals: Me,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: Qe,
		wv: 0,
		parent: z,
		ac: null
	};
}
var Rn = Symbol("obsolete");
/* @__NO_SIDE_EFFECTS__ */
function zn(e, t, n) {
	let r = z;
	r === null && Ie();
	var i = void 0, a = Yn(Qe), o = !R, s = /* @__PURE__ */ new Set();
	return qr(() => {
		var t = z, n = oe();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== Ae && n.reject(e);
			}).finally(Fn);
		} catch (e) {
			n.reject(e), Fn();
		}
		var c = P;
		if (o) {
			if (t.f & 32768) var l = In();
			if (r.b.is_rendered()) c.async_deriveds.get(t)?.reject(Rn);
			else for (let e of s.values()) e.reject(Rn);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== Rn && (c.activate(), t ? (a.f |= xe, Zn(a, t)) : (a.f & 8388608 && (a.f ^= xe), Zn(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), Br(() => {
		for (let e of s) e.reject(Rn);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === i ? e(a) : t(i);
			}
			n.then(r, r);
		}
		t(i);
	});
}
/* @__NO_SIDE_EFFECTS__ */
function F(e) {
	let t = /* @__PURE__ */ Ln(e);
	return Je || hr(t), t;
}
/* @__NO_SIDE_EFFECTS__ */
function Bn(e) {
	let t = /* @__PURE__ */ Ln(e);
	return t.equals = Pe, t;
}
function Vn(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) ni(t[n]);
	}
}
function Hn(e) {
	var t, n = z, r = e.parent;
	if (!lr && r !== null && e.v !== Qe && r.f & 24576) return _t(), e.v;
	pr(r);
	try {
		e.f &= ~ve, Vn(e), t = Dr(e);
	} finally {
		pr(n);
	}
	return t;
}
function Un(e) {
	var t = Hn(e);
	if (!e.equals(t) && (e.wv = wr(), (!P?.is_fork || e.deps === null) && (P === null ? e.v = t : (P.capture(e, t, !0), un?.capture(e, t, !0)), e.deps === null))) {
		Gt(e, ce);
		return;
	}
	lr || (dn === null ? Kt(e) : (zr() || P?.is_fork) && dn.set(e, t));
}
function Wn(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Ae), t.fn !== null && (t.teardown = w), t.ac = null, kr(t, 0), ei(t));
}
function Gn(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Ar(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Kn = /* @__PURE__ */ new Set(), qn = /* @__PURE__ */ new Map(), Jn = !1;
function Yn(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Me,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function I(e, t) {
	let n = Yn(e, t);
	return hr(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function Xn(e, t = !1, n = !0) {
	let r = Yn(e);
	return t || (r.equals = Pe), Ye && n && it !== null && it.l !== null && (it.l.s ??= []).push(r), r;
}
function L(e, t, n = !1) {
	return R !== null && (!dr || R.f & 131072) && ut() && R.f & 4325394 && (mr === null || !v.call(mr, e)) && Ke(), Zn(e, n ? Dt(t) : t, gn);
}
function Zn(e, t, n = null) {
	if (!e.equals(t)) {
		qn.set(e, lr ? t : e.v);
		var r = yn.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && Hn(t), dn === null && Kt(t);
		}
		e.wv = wr(), er(e, le, n), ut() && z !== null && z.f & 1024 && !(z.f & 96) && (vr === null ? yr([e]) : vr.push(e)), !r.is_fork && Kn.size > 0 && !Jn && Qn();
	}
	return t;
}
function Qn() {
	Jn = !1;
	for (let e of Kn) {
		e.f & 1024 && Gt(e, ue);
		let t;
		try {
			t = Tr(e);
		} catch {
			t = !0;
		}
		t && Ar(e);
	}
	Kn.clear();
}
function $n(e) {
	L(e, e.v + 1);
}
function er(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = ut(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === z)) {
			var l = (c & le) === 0;
			if (l && Gt(s, t), c & 131072) Kn.add(s);
			else if (c & 2) {
				var u = s;
				dn?.delete(u), c & 65536 || (c & 512 && (z === null || !(z.f & 2097152)) && (s.f |= ve), er(u, ue, n));
			} else if (l) {
				var d = s;
				c & 16 && Sn !== null && Sn.add(d), n === null ? En(d) : n.push(d);
			}
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var tr = null;
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function nr(e, t) {
	if (t) {
		let t = document.body;
		e.autofocus = !0, ht(() => {
			document.activeElement === t && e.focus();
		});
	}
}
function rr(e) {
	O && /* @__PURE__ */ It(e) !== null && Rt(e);
}
var ir = !1;
function ar() {
	ir || (ir = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[ke]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function or(e) {
	var t = R, n = z;
	fr(null), pr(null);
	try {
		return e();
	} finally {
		fr(t), pr(n);
	}
}
function sr(e, t, n, r = n) {
	e.addEventListener(t, () => or(n));
	let i = e[ke];
	i ? e[ke] = () => {
		i(), r(!0);
	} : e[ke] = () => r(!0), ar();
}
//#endregion
//#region node_modules/svelte/src/internal/client/runtime.js
var cr = !1, lr = !1;
function ur(e) {
	lr = e;
}
var R = null, dr = !1;
function fr(e) {
	R = e;
}
var z = null;
function pr(e) {
	z = e;
}
var mr = null;
function hr(e) {
	R !== null && (!Je || R.f & 2) && (mr === null ? mr = [e] : mr.push(e));
}
var gr = null, _r = 0, vr = null;
function yr(e) {
	vr = e;
}
var br = 1, xr = 0, Sr = xr;
function Cr(e) {
	Sr = e;
}
function wr() {
	return ++br;
}
function Tr(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~ve), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Tr(a) && Un(a), a.wv > e.wv) return !0;
		}
		t & 512 && dn === null && Gt(e, ce);
	}
	return !1;
}
function Er(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!Je && mr !== null && v.call(mr, e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Er(a, t, !1) : t === a && (n ? Gt(a, le) : a.f & 1024 && Gt(a, ue), En(a));
	}
}
function Dr(e) {
	var t = gr, n = _r, r = vr, i = R, a = mr, o = it, s = dr, c = Sr, l = e.f;
	gr = null, _r = 0, vr = null, R = l & 96 ? null : e, mr = null, at(e.ctx), dr = !1, Sr = ++xr, e.ac !== null && (or(() => {
		e.ac.abort(Ae);
	}), e.ac = null);
	try {
		e.f |= ye;
		var u = e.fn, d = u();
		e.f |= fe;
		var f = e.deps, p = P?.is_fork;
		if (gr !== null) {
			var m;
			if (p || kr(e, _r), f !== null && _r > 0) for (f.length = _r + gr.length, m = 0; m < gr.length; m++) f[_r + m] = gr[m];
			else e.deps = f = gr;
			if (zr() && e.f & 512) for (m = _r; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && _r < f.length && (kr(e, _r), f.length = _r);
		if (ut() && vr !== null && !dr && f !== null && !(e.f & 6146)) for (m = 0; m < vr.length; m++) Er(vr[m], e);
		if (i !== null && i !== e) {
			if (xr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = xr;
			if (t !== null) for (let e of t) e.rv = xr;
			vr !== null && (r === null ? r = vr : r.push(...vr));
		}
		return e.f & 8388608 && (e.f ^= xe), d;
	} catch (e) {
		return Ht(e);
	} finally {
		e.f ^= ye, gr = t, _r = n, vr = r, R = i, mr = a, at(o), dr = s, Sr = c;
	}
}
function Or(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = _.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (gr === null || !v.call(gr, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~ve), a.v !== Qe && Kt(a), Wn(a), kr(a, 0);
	}
}
function kr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Or(e, n[r]);
}
function Ar(e) {
	var t = e.f;
	if (!(t & 16384)) {
		Gt(e, ce);
		var n = z, r = cr;
		z = e, cr = !0;
		try {
			t & 16777232 ? ti(e) : ei(e), $r(e);
			var i = Dr(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = br;
		} finally {
			cr = r, z = n;
		}
	}
}
async function jr() {
	if (Je) return new Promise((e) => {
		requestAnimationFrame(() => e()), setTimeout(() => e());
	});
	await Promise.resolve(), bn();
}
function B(e) {
	var t = (e.f & 2) != 0;
	if (tr?.add(e), R !== null && !dr && !(z !== null && z.f & 16384) && (mr === null || !v.call(mr, e))) {
		var n = R.deps;
		if (R.f & 2097152) e.rv < xr && (e.rv = xr, gr === null && n !== null && n[_r] === e ? _r++ : gr === null ? gr = [e] : gr.push(e));
		else {
			R.deps ??= [], v.call(R.deps, e) || R.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [R] : v.call(r, R) || r.push(R);
		}
	}
	if (lr && qn.has(e)) return qn.get(e);
	if (t) {
		var i = e;
		if (lr) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Nr(i)) && (a = Hn(i)), qn.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !dr && R !== null && (cr || (R.f & 512) != 0), s = (i.f & fe) === 0;
		Tr(i) && (o && (i.f |= 512), Un(i)), o && !s && (Gn(i), Mr(i));
	}
	if (dn?.has(e)) return dn.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Mr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Gn(t), Mr(t));
}
function Nr(e) {
	if (e.v === Qe) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (qn.has(t) || t.f & 2 && Nr(t)) return !0;
	return !1;
}
function V(e) {
	var t = dr;
	try {
		return dr = !0, e();
	} finally {
		dr = t;
	}
}
function Pr(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (Se in e) Fr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && Se in n && Fr(n);
		}
	}
}
function Fr(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Fr(e[n], t);
		} catch {}
		let n = C(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = ee(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch {}
			}
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Ir(e) {
	z === null && (R === null && Be(e), ze()), lr && Re(e);
}
function Lr(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Rr(e, t) {
	var n = z;
	n !== null && n.f & 8192 && (e |= T);
	var r = {
		ctx: it,
		deps: null,
		nodes: null,
		f: e | le | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	P?.register_created_effect(r);
	var i = r;
	if (e & 4) hn === null ? yn.ensure().schedule(r) : hn.push(r);
	else if (t !== null) {
		try {
			Ar(r);
		} catch (e) {
			throw ni(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= me));
	}
	if (i !== null && (i.parent = n, n !== null && Lr(i, n), R !== null && R.f & 2 && !(e & 64))) {
		var a = R;
		(a.effects ??= []).push(i);
	}
	return r;
}
function zr() {
	return R !== null && !dr;
}
function Br(e) {
	let t = Rr(8, null);
	return Gt(t, ce), t.teardown = e, t;
}
function Vr(e) {
	Ir("$effect");
	var t = z.f;
	if (!R && t & 32 && !(t & 32768)) {
		var n = it;
		(n.e ??= []).push(e);
	} else return Hr(e);
}
function Hr(e) {
	return Rr(4 | ge, e);
}
function Ur(e) {
	return Ir("$effect.pre"), Rr(8 | ge, e);
}
function Wr(e) {
	yn.ensure();
	let t = Rr(64 | he, e);
	return () => {
		ni(t);
	};
}
function Gr(e) {
	yn.ensure();
	let t = Rr(64 | he, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? ai(t, () => {
			ni(t), n(void 0);
		}) : (ni(t), n(void 0));
	});
}
function Kr(e) {
	return Rr(4, e);
}
function qr(e) {
	return Rr(be | he, e);
}
function Jr(e, t = 0) {
	return Rr(8 | t, e);
}
function Yr(e, t = [], n = [], r = []) {
	Nn(r, t, n, (t) => {
		Rr(8, () => e(...t.map(B)));
	});
}
function Xr(e, t = 0) {
	return Rr(16 | t, e);
}
function Zr(e, t = 0) {
	return Rr(se | t, e);
}
function Qr(e) {
	return Rr(32 | he, e);
}
function $r(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = lr, n = R;
		ur(!0), fr(null);
		try {
			t.call(null);
		} finally {
			ur(e), fr(n);
		}
	}
}
function ei(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && or(() => {
			e.abort(Ae);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : ni(n, t), n = r;
	}
}
function ti(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || ni(t), t = n;
	}
}
function ni(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (ri(e.nodes.start, e.nodes.end), n = !0), Gt(e, pe), ei(e, t && !n), kr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	$r(e), e.f ^= pe, e.f |= de;
	var i = e.parent;
	i !== null && i.first !== null && ii(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ri(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Lt(e);
		e.remove(), e = n;
	}
}
function ii(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function ai(e, t, n = !0) {
	var r = [];
	oi(e, r, !0);
	var i = () => {
		n && ni(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function oi(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= T;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				oi(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function si(e) {
	ci(e, !0);
}
function ci(e, t) {
	if (e.f & 8192) {
		e.f ^= T, e.f & 1024 || (Gt(e, le), yn.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			ci(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function li(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Lt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region src/features/userlist/userlist.ts
var ui = {
	ADMIN: 3,
	ANON: -1,
	GUEST: 0,
	MODERATOR: 2,
	SITERADMIN: 255,
	USER: 1
}, di = { userlist: [] }, fi = (e) => {
	let { subscribe: t, set: n, update: r } = Zt({
		...di,
		...e
	});
	return {
		set: n,
		subscribe: t,
		addUser: (e) => r((t) => ({
			...t,
			userlist: [...t.userlist, e]
		})),
		init: (e) => n(e),
		removeUser: (e) => r((t) => ({
			...t,
			userlist: t.userlist.filter((t) => t.name !== e)
		}))
	};
}, pi = (e) => h.on("addUser", e), mi = (e) => h.on("userLeave", e), hi = () => Array.from(document.body.querySelectorAll("#userlist .userlist_item")).map((e) => $(e)).map((e) => ({
	meta: {
		afk: e.data("afk") || !1,
		muted: e.data("meta") && e.data("meta").muted || !1
	},
	name: e.data("name") || "",
	profile: e.data("profile") || {
		image: "",
		text: ""
	},
	rank: e.data("rank") || ui.ANON
})), gi = fi(), _i = { version: "" }, vi = ((e) => {
	let { subscribe: t, set: n, update: r } = Zt({
		..._i,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetVersion: () => r((e) => ({
			...e,
			version: _i.version
		})),
		updateVersion: (e) => r((t) => ({
			...t,
			version: e
		}))
	};
})(), yi = {
	leader: !1,
	logged_in: !1,
	name: "",
	profile: {
		image: "",
		text: ""
	},
	rank: -1
}, bi = ((e) => {
	let { subscribe: t, set: n, update: r } = Zt({
		...yi,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetLoggedIn: () => r((e) => ({
			...e,
			logged_in: yi.logged_in
		})),
		resetName: () => r((e) => ({
			...e,
			name: yi.name
		})),
		resetRank: () => r((e) => ({
			...e,
			rank: yi.rank
		})),
		updateLoggedIn: (e) => r((t) => ({
			...t,
			logged_in: e
		})),
		updateName: (e) => r((t) => ({
			...t,
			name: e
		})),
		updateRank: (e) => r((t) => ({
			...t,
			rank: e
		}))
	};
})(), xi = { csrf: "" }, Si = ((e) => {
	let { subscribe: t, set: n, update: r } = Zt({
		...xi,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetCSRF: () => r((e) => ({
			...e,
			csrf: xi.csrf
		})),
		updateCSRF: (e) => r((t) => ({
			...t,
			csrf: e
		}))
	};
})(), Ci = { connected: !0 }, wi = ((e) => {
	let { subscribe: t, set: n, update: r } = Zt({
		...Ci,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetConnected: () => r((e) => ({
			...e,
			connected: Ci.connected
		})),
		updateConnected: (e) => r((t) => ({
			...t,
			connected: e
		}))
	};
})(), Ti = () => (bi.init({ ...window.CLIENT }), bi.subscribe((e) => {
	window.CLIENT = e;
})), Ei = () => {
	let e = document.querySelector("input[name=\"_csrf\"]");
	if (!e) throw Error("CSRF element not found");
	let t = e.value;
	if (!t) throw Error("CSRF token not found");
	Si.init({ csrf: t });
}, Di = () => (vi.init({ version: window.VERSION }), vi.subscribe((e) => {
	window.VERSION = e.version;
})), Oi = () => {
	wi.init(h), h.on("connect", () => wi.updateConnected(h.connected)), h.on("disconnect", () => wi.updateConnected(h.connected));
}, ki = () => {
	let e = hi();
	gi.init({ userlist: e }), pi(gi.addUser), mi(({ name: e }) => gi.removeUser(e));
}, Ai = () => {
	let e = Ti(), t = Di();
	return Ei(), Oi(), ki(), () => {
		e(), t();
	};
};
//#endregion
//#region node_modules/svelte/src/attachments/index.js
function ji() {
	return Symbol(et);
}
//#endregion
//#region node_modules/svelte/src/utils.js
function Mi(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var Ni = [
	"beforeinput",
	"click",
	"change",
	"dblclick",
	"contextmenu",
	"focusin",
	"focusout",
	"input",
	"keydown",
	"keyup",
	"mousedown",
	"mousemove",
	"mouseout",
	"mouseover",
	"mouseup",
	"pointerdown",
	"pointermove",
	"pointerout",
	"pointerover",
	"pointerup",
	"touchend",
	"touchmove",
	"touchstart"
];
function Pi(e) {
	return Ni.includes(e);
}
var Fi = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), Ii = {
	formnovalidate: "formNoValidate",
	ismap: "isMap",
	nomodule: "noModule",
	playsinline: "playsInline",
	readonly: "readOnly",
	defaultvalue: "defaultValue",
	defaultchecked: "defaultChecked",
	srcobject: "srcObject",
	novalidate: "noValidate",
	allowfullscreen: "allowFullscreen",
	disablepictureinpicture: "disablePictureInPicture",
	disableremoteplayback: "disableRemotePlayback"
};
function Li(e) {
	return e = e.toLowerCase(), Ii[e] ?? e;
}
[...Fi];
var Ri = ["touchstart", "touchmove"];
function zi(e) {
	return Ri.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Bi = Symbol("events"), Vi = /* @__PURE__ */ new Set(), Hi = /* @__PURE__ */ new Set();
function Ui(e) {
	if (!O) return;
	e.removeAttribute("onload"), e.removeAttribute("onerror");
	let t = e.__e;
	t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
		e.isConnected && e.dispatchEvent(t);
	}));
}
function Wi(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || Xi.call(t, e), !e.cancelBubble) return or(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ht(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Gi(e, t, n, r = {}) {
	var i = Wi(t, e, n, r);
	return () => {
		e.removeEventListener(t, i, r);
	};
}
function Ki(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Wi(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Br(() => {
		t.removeEventListener(e, o, a);
	});
}
function qi(e, t, n) {
	(t[Bi] ??= {})[e] = n;
}
function Ji(e) {
	for (var t = 0; t < e.length; t++) Vi.add(e[t]);
	for (var n of Hi) n(e);
}
var Yi = null;
function Xi(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Yi = e;
	var o = 0, s = Yi === e && e[Bi];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[Bi] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		b(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = R, d = z;
		fr(null), pr(null);
		try {
			for (var f, p = []; a !== null;) {
				var m = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var h = a[Bi]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					f ? p.push(e) : f = e;
				}
				if (e.cancelBubble || m === t || m === null) break;
				a = m;
			}
			if (f) {
				for (let e of p) queueMicrotask(() => {
					throw e;
				});
				throw f;
			}
		} finally {
			e[Bi] = t, delete e.currentTarget, fr(u), pr(d);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Zi = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Qi(e) {
	return Zi?.createHTML(e) ?? e;
}
function $i(e) {
	var t = Bt("template");
	return t.innerHTML = Qi(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function ea(e, t) {
	var n = z;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function H(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (O) return ea(k, null), k;
		i === void 0 && (i = $i(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ It(i)));
		var t = r || jt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ It(t), s = t.lastChild;
			ea(o, s);
		} else ea(t, t);
		return t;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function ta(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = (t & 1) != 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (O) return ea(k, null), k;
		if (!o) {
			var e = /* @__PURE__ */ It($i(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ It(e);) o.appendChild(/* @__PURE__ */ It(e));
			else o = /* @__PURE__ */ It(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ It(t), r = t.lastChild;
			ea(n, r);
		} else ea(t, t);
		return t;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function na(e, t) {
	return /* @__PURE__ */ ta(e, t, "svg");
}
function ra(e = "") {
	if (!O) {
		var t = Ft(e + "");
		return ea(t, t), t;
	}
	var n = k;
	return n.nodeType === 3 ? Vt(n) : (n.before(n = Ft()), St(n)), ea(n, n), n;
}
function U() {
	if (O) return ea(k, null), k;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Ft();
	return e.append(t, n), ea(t, n), e;
}
function W(e, t) {
	if (O) {
		var n = z;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = k), Ct();
		return;
	}
	e !== null && e.before(t);
}
function ia() {
	if (O && k && k.nodeType === 8 && k.textContent?.startsWith("$")) {
		let e = k.textContent.substring(1);
		return Ct(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
var aa = !0;
function oa(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[Oe] ??= e.nodeValue) && (e[Oe] = n, e.nodeValue = `${n}`);
}
function sa(e, t) {
	return la(e, t);
}
var ca = /* @__PURE__ */ new Map();
function la(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	Pt();
	var c = void 0, l = Gr(() => {
		var l = n ?? t.appendChild(Ft());
		jn(l, { pending: () => {} }, (t) => {
			E({});
			var n = it;
			if (a && (n.c = a), i && (r.$$events = i), O && ea(t, null), aa = o, c = e(t, r) || {}, aa = !0, O && (z.nodes.end = k, k === null || k.nodeType !== 8 || k.data !== "]")) throw vt(), Ze;
			D();
		}, s);
		var u = /* @__PURE__ */ new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!u.has(r)) {
					u.add(r);
					var i = zi(r);
					for (let e of [t, document]) {
						var a = ca.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), ca.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Xi, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return d(y(Vi)), Hi.add(d), () => {
			for (var e of u) for (let n of [t, document]) {
				var r = ca.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Xi), r.delete(e), r.size === 0 && ca.delete(n)) : r.set(e, i);
			}
			Hi.delete(d), l !== n && l.parentNode?.removeChild(l);
		};
	});
	return ua.set(c, l), c;
}
var ua = /* @__PURE__ */ new WeakMap();
function da(e, t) {
	let n = ua.get(e);
	return n ? (ua.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var fa = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) si(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (ni(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						li(r, t), t.append(Ft()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else ni(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), ai(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (ni(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = P, r = zt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Ft();
			i.append(a), this.#n.set(e, {
				effect: Qr(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, Qr(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else O && (this.anchor = k), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function pa(e, t, n = !1) {
	var r;
	O && (r = k, Ct());
	var i = new fa(e), a = n ? me : 0;
	function o(e, t) {
		if (O) {
			var n = Et(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Tt();
				St(a), i.anchor = a, xt(!1), i.ensure(e, t), xt(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	Xr(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/key.js
var ma = Symbol("NaN");
function ha(e, t, n) {
	O && Ct();
	var r = new fa(e), i = !ut();
	Xr(() => {
		var e = t();
		e !== e && (e = ma), i && typeof e == "object" && e && (e = {}), r.ensure(e, n);
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function ga(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		ai(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					_a(e, y(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var l = n, u = l.parentNode;
			Rt(u), u.append(l), e.items.clear();
		}
		_a(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function _a(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= _e, li(a, document.createDocumentFragment())) : ni(t[i], n);
	}
}
var va;
function ya(e, t, n, r, i, a = null) {
	var o = e, s = /* @__PURE__ */ new Map();
	if (t & 4) {
		var c = e;
		o = O ? St(/* @__PURE__ */ It(c)) : c.appendChild(Ft());
	}
	O && Ct();
	var l = null, u = /* @__PURE__ */ Bn(() => {
		var e = n();
		return g(e) ? e : e == null ? [] : y(e);
	}), d, f = /* @__PURE__ */ new Map(), p = !0;
	function m(e) {
		_.effect.f & 16384 || (_.pending.delete(e), _.fallback = l, xa(_, d, o, t, r), l !== null && (d.length === 0 ? l.f & 33554432 ? (l.f ^= _e, Ca(l, null, o)) : si(l) : ai(l, () => {
			l = null;
		})));
	}
	function h(e) {
		_.pending.delete(e);
	}
	var _ = {
		effect: Xr(() => {
			d = B(u);
			var e = d.length;
			let c = !1;
			O && Et(o) === "[!" != (e === 0) && (o = Tt(), St(o), xt(!1), c = !0);
			for (var g = /* @__PURE__ */ new Set(), _ = P, v = zt(), y = 0; y < e; y += 1) {
				O && k.nodeType === 8 && k.data === "]" && (o = k, c = !0, xt(!1));
				var b = d[y], x = r(b, y), ee = p ? null : s.get(x);
				ee ? (ee.v && Zn(ee.v, b), ee.i && Zn(ee.i, y), v && _.unskip_effect(ee.e)) : (ee = Sa(s, p ? o : va ??= Ft(), b, x, y, i, t, n), p || (ee.e.f |= _e), s.set(x, ee)), g.add(x);
			}
			if (e === 0 && a && !l && (p ? l = Qr(() => a(o)) : (l = Qr(() => a(va ??= Ft())), l.f |= _e)), e > g.size && Le("", "", ""), O && e > 0 && St(Tt()), !p) if (f.set(_, g), v) {
				for (let [e, t] of s) g.has(e) || _.skip_effect(t.e);
				_.oncommit(m), _.ondiscard(h);
			} else m(_);
			c && xt(!0), B(u);
		}),
		flags: t,
		items: s,
		pending: f,
		outrogroups: null,
		fallback: l
	};
	p = !1, O && (o = k);
}
function ba(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function xa(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, c = ba(e.effect.first), l, u = null, d, f = [], p = [], m, h, g, _;
	if (a) for (_ = 0; _ < o; _ += 1) m = t[_], h = i(m, _), g = s.get(h).e, g.f & 33554432 || (g.nodes?.a?.measure(), (d ??= /* @__PURE__ */ new Set()).add(g));
	for (_ = 0; _ < o; _ += 1) {
		if (m = t[_], h = i(m, _), g = s.get(h).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(g), t.done.delete(g);
		if (g.f & 8192 && (si(g), a && (g.nodes?.a?.unfix(), (d ??= /* @__PURE__ */ new Set()).delete(g))), g.f & 33554432) if (g.f ^= _e, g === c) Ca(g, null, n);
		else {
			var v = u ? u.next : c;
			g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), wa(e, u, g), wa(e, g, v), Ca(g, v, n), u = g, f = [], p = [], c = ba(u.next);
			continue;
		}
		if (g !== c) {
			if (l !== void 0 && l.has(g)) {
				if (f.length < p.length) {
					var b = p[0], x;
					u = b.prev;
					var ee = f[0], te = f[f.length - 1];
					for (x = 0; x < f.length; x += 1) Ca(f[x], b, n);
					for (x = 0; x < p.length; x += 1) l.delete(p[x]);
					wa(e, ee.prev, te.next), wa(e, u, ee), wa(e, te, b), c = b, u = te, --_, f = [], p = [];
				} else l.delete(g), Ca(g, c, n), wa(e, g.prev, g.next), wa(e, g, u === null ? e.effect.first : u.next), wa(e, u, g), u = g;
				continue;
			}
			for (f = [], p = []; c !== null && c !== g;) (l ??= /* @__PURE__ */ new Set()).add(c), p.push(c), c = ba(c.next);
			if (c === null) continue;
		}
		g.f & 33554432 || f.push(g), u = g, c = ba(g.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (_a(e, y(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var S = [];
		if (l !== void 0) for (g of l) g.f & 8192 || S.push(g);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && S.push(c), c = ba(c.next);
		var C = S.length;
		if (C > 0) {
			var ne = r & 4 && o === 0 ? n : null;
			if (a) {
				for (_ = 0; _ < C; _ += 1) S[_].nodes?.a?.measure();
				for (_ = 0; _ < C; _ += 1) S[_].nodes?.a?.fix();
			}
			ga(e, S, ne);
		}
	}
	a && ht(() => {
		if (d !== void 0) for (g of d) g.nodes?.a?.apply();
	});
}
function Sa(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Yn(n) : /* @__PURE__ */ Xn(n, !1, !1) : null, l = o & 2 ? Yn(i) : null;
	return {
		v: c,
		i: l,
		e: Qr(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Ca(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Lt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function wa(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function G(e, t, ...n) {
	var r = new fa(e);
	Xr(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, me);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
function Ta(e, t, n) {
	var r;
	O && (r = k, Ct());
	var i = new fa(e);
	Xr(() => {
		var e = t() ?? null;
		if (O && Et(r) === "[" != (e !== null)) {
			var a = Tt();
			St(a), i.anchor = a, xt(!1), i.ensure(e, e && ((t) => n(t, e))), xt(!0);
			return;
		}
		i.ensure(e, e && ((t) => n(t, e)));
	}, me);
}
//#endregion
//#region node_modules/svelte/src/internal/client/timing.js
var Ea = () => performance.now(), Da = {
	tick: (e) => requestAnimationFrame(e),
	now: () => Ea(),
	tasks: /* @__PURE__ */ new Set()
};
//#endregion
//#region node_modules/svelte/src/internal/client/loop.js
function Oa() {
	let e = Da.now();
	Da.tasks.forEach((t) => {
		t.c(e) || (Da.tasks.delete(t), t.f());
	}), Da.tasks.size !== 0 && Da.tick(Oa);
}
function ka(e) {
	let t;
	return Da.tasks.size === 0 && Da.tick(Oa), {
		promise: new Promise((n) => {
			Da.tasks.add(t = {
				c: e,
				f: n
			});
		}),
		abort() {
			Da.tasks.delete(t);
		}
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/transitions.js
function Aa(e, t) {
	or(() => {
		e.dispatchEvent(new CustomEvent(t));
	});
}
function ja(e) {
	if (e === "float") return "cssFloat";
	if (e === "offset") return "cssOffset";
	if (e.startsWith("--")) return e;
	let t = e.split("-");
	return t.length === 1 ? t[0] : t[0] + t.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
function Ma(e) {
	let t = {}, n = e.split(";");
	for (let e of n) {
		let [n, r] = e.split(":");
		if (!n || r === void 0) break;
		let i = ja(n.trim());
		t[i] = r.trim();
	}
	return t;
}
var Na = (e) => e, Pa = null;
function Fa(e, t, n) {
	var r = (Pa ?? z).nodes, i, a, o, s = null;
	r.a ??= {
		element: e,
		measure() {
			i = this.element.getBoundingClientRect();
		},
		apply() {
			if (o?.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
				let e = t()(this.element, {
					from: i,
					to: a
				}, n?.());
				o = La(this.element, e, void 0, 1, () => {}, () => {
					o?.abort(), o = void 0;
				});
			}
		},
		fix() {
			if (!e.getAnimations().length) {
				var { position: t, width: n, height: r } = getComputedStyle(e);
				if (t !== "absolute" && t !== "fixed") {
					var a = e.style;
					s = {
						position: a.position,
						width: a.width,
						height: a.height,
						transform: a.transform
					}, a.position = "absolute", a.width = n, a.height = r;
					var o = e.getBoundingClientRect();
					if (i.left !== o.left || i.top !== o.top) {
						var c = `translate(${i.left - o.left}px, ${i.top - o.top}px)`;
						a.transform = a.transform ? `${a.transform} ${c}` : c;
					}
				}
			}
		},
		unfix() {
			if (s) {
				var t = e.style;
				t.position = s.position, t.width = s.width, t.height = s.height, t.transform = s.transform;
			}
		}
	}, r.a.element = e;
}
function Ia(e, t, n, r) {
	var i = (e & 1) != 0, a = (e & 2) != 0, o = i && a, s = (e & 4) != 0, c = o ? "both" : i ? "in" : "out", l, u = t.inert, d = t.style.overflow, f, p;
	function m() {
		return or(() => l ??= n()(t, r?.() ?? {}, { direction: c }));
	}
	var h = {
		is_global: s,
		in() {
			if (t.inert = u, !i) {
				p?.abort(), p?.reset?.();
				return;
			}
			a || f?.abort(), f = La(t, m(), p, 1, () => {
				Aa(t, "introstart");
			}, () => {
				Aa(t, "introend"), f?.abort(), f = l = void 0, t.style.overflow = d;
			});
		},
		out(e) {
			if (!a) {
				e?.(), l = void 0;
				return;
			}
			t.inert = !0, p = La(t, m(), f, 0, () => {
				Aa(t, "outrostart");
			}, () => {
				Aa(t, "outroend"), e?.();
			});
		},
		stop: () => {
			f?.abort(), p?.abort();
		}
	}, g = z;
	if ((g.nodes.t ??= []).push(h), i && aa) {
		var _ = s;
		if (!_) {
			for (var v = g.parent; v && v.f & 65536;) for (; (v = v.parent) && !(v.f & 16););
			_ = !v || (v.f & 32768) != 0;
		}
		_ && Kr(() => {
			V(() => h.in());
		});
	}
}
function La(e, t, n, r, i, a) {
	var o = r === 1;
	if (re(t)) {
		var s, c = !1;
		return ht(() => {
			c || (s = La(e, t({ direction: o ? "in" : "out" }), n, r, i, a));
		}), {
			abort: () => {
				c = !0, s?.abort();
			},
			deactivate: () => s.deactivate(),
			reset: () => s.reset(),
			t: () => s.t()
		};
	}
	if (n?.deactivate(), !t?.duration && !t?.delay) return i(), a(), {
		abort: w,
		deactivate: w,
		reset: w,
		t: () => r
	};
	let { delay: l = 0, css: u, tick: d, easing: f = Na } = t;
	var p = [];
	if (o && n === void 0 && (d && d(0, 1), u)) {
		var m = Ma(u(0, 1));
		p.push(m, m);
	}
	var h = () => 1 - r, g = e.animate(p, {
		duration: l,
		fill: "forwards"
	});
	return g.onfinish = () => {
		g.cancel(), i();
		var o = n?.t() ?? 1 - r;
		n?.abort();
		var s = r - o, c = t.duration * Math.abs(s), l = [];
		if (c > 0) {
			var p = !1;
			if (u) for (var m = Math.ceil(c / (1e3 / 60)), _ = 0; _ <= m; _ += 1) {
				var v = o + s * f(_ / m), y = Ma(u(v, 1 - v));
				l.push(y), p ||= y.overflow === "hidden";
			}
			p && (e.style.overflow = "hidden"), h = () => {
				var e = g.currentTime;
				return o + s * f(e / c);
			}, d && ka(() => {
				if (g.playState !== "running") return !1;
				var e = h();
				return d(e, 1 - e), !0;
			});
		}
		g = e.animate(l, {
			duration: c,
			fill: "forwards"
		}), g.onfinish = () => {
			h = () => r, d?.(r, 1 - r), a();
		};
	}, {
		abort: () => {
			g && (g.cancel(), g.effect = null, g.onfinish = w);
		},
		deactivate: () => {
			a = w;
		},
		reset: () => {
			r === 0 && d?.(1, 0);
		},
		t: () => h()
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attachments.js
function Ra(e, t) {
	var n = void 0, r;
	Zr(() => {
		n !== (n = t()) && (r &&= (ni(r), null), n && (r = Qr(() => {
			Kr(() => n(e));
		})));
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function za(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = za(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function Ba() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = za(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function Va(e) {
	return typeof e == "object" ? Ba(e) : e ?? "";
}
var Ha = [..." 	\n\r\f\xA0\v﻿"];
function Ua(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Ha.includes(r[o - 1])) && (s === r.length || Ha.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function Wa(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Ga(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Ka(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Ga)), i && c.push(...Object.keys(i).map(Ga));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Ga(e.substring(l, u).trim());
							if (!c.includes(p)) {
								f !== ";" && d++;
								var m = e.substring(l, d).trim();
								n += " " + m + ";";
							}
						}
						l = d + 1, u = -1;
					}
				}
			}
		}
		return r && (n += Wa(r)), i && (n += Wa(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function qa(e, t, n, r, i, a) {
	var o = e[Ee];
	if (O || o !== n || o === void 0) {
		var s = Ua(n, r, a);
		(!O || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[Ee] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function Ja(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function Ya(e, t, n, r) {
	var i = e[De];
	if (O || i !== t) {
		var a = Ka(t, r);
		(!O || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[De] = t;
	} else r && (Array.isArray(r) ? (Ja(e, n?.[0], r[0]), Ja(e, n?.[1], r[1], "important")) : Ja(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function Xa(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!g(t)) return yt();
		for (var r of e.options) r.selected = t.includes(Qa(r));
		return;
	}
	for (r of e.options) if (kt(Qa(r), t)) {
		r.selected = !0;
		return;
	}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function Za(e) {
	var t = new MutationObserver(() => {
		Xa(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), Br(() => {
		t.disconnect();
	});
}
function Qa(e) {
	return "__value" in e ? e.__value : e.value;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var $a = Symbol("class"), eo = Symbol("style"), to = Symbol("is custom element"), no = Symbol("is html"), ro = je ? "link" : "LINK", io = je ? "input" : "INPUT", ao = je ? "option" : "OPTION", oo = je ? "select" : "SELECT";
function so(e) {
	if (O) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					lo(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					lo(e, "checked", null), e.checked = r;
				}
			}
		};
		e[ke] = n, ht(n), ar();
	}
}
function co(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function lo(e, t, n, r) {
	var i = po(e);
	O && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ro) || i[t] !== (i[t] = n) && (t === "loading" && (e[we] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ho(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function uo(e, t, n, r, i = !1, a = !1) {
	if (O && i && e.nodeName === io) {
		var o = e;
		(o.type === "checkbox" ? "defaultChecked" : "defaultValue") in n || so(o);
	}
	var s = po(e), c = s[to], l = !s[no];
	let u = O && c;
	u && xt(!1);
	var d = t || {}, f = e.nodeName === ao;
	for (var p in t) p in n || (n[p] = null);
	n.class ? n.class = Va(n.class) : (r || n[$a]) && (n.class = null), n[eo] && (n.style ??= null);
	var m = ho(e);
	for (let i in n) {
		let o = n[i];
		if (f && i === "value" && o == null) {
			e.value = e.__value = "", d[i] = o;
			continue;
		}
		if (i === "class") {
			qa(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", o, r, t?.[$a], n[$a]), d[i] = o, d[$a] = n[$a];
			continue;
		}
		if (i === "style") {
			Ya(e, o, t?.[eo], n[eo]), d[i] = o, d[eo] = n[eo];
			continue;
		}
		var h = d[i];
		if (!(o === h && !(o === void 0 && e.hasAttribute(i)))) {
			d[i] = o;
			var g = i[0] + i[1];
			if (g !== "$$") if (g === "on") {
				let t = {}, n = "$$" + i, r = i.slice(2);
				var _ = Pi(r);
				if (Mi(r) && (r = r.slice(0, -7), t.capture = !0), !_ && h) {
					if (o != null) continue;
					e.removeEventListener(r, d[n], t), d[n] = null;
				}
				if (_) qi(r, e, o), Ji([r]);
				else if (o != null) {
					function a(e) {
						d[i].call(this, e);
					}
					d[n] = Wi(r, e, a, t);
				}
			} else if (i === "style") lo(e, i, o);
			else if (i === "autofocus") nr(e, !!o);
			else if (!c && (i === "__value" || i === "value" && o != null)) e.value = e.__value = o;
			else if (i === "selected" && f) co(e, o);
			else {
				var v = i;
				l || (v = Li(v));
				var y = v === "defaultValue" || v === "defaultChecked";
				if (o == null && !c && !y) if (s[i] = null, v === "value" || v === "checked") {
					let n = e, r = t === void 0;
					if (v === "value") {
						let e = n.defaultValue;
						n.removeAttribute(v), n.defaultValue = e, n.value = n.__value = r ? e : null;
					} else {
						let e = n.defaultChecked;
						n.removeAttribute(v), n.defaultChecked = e, n.checked = r ? e : !1;
					}
				} else e.removeAttribute(i);
				else y || m.includes(v) && (c || typeof o != "string") ? (e[v] = o, v in s && (s[v] = Qe)) : typeof o != "function" && lo(e, v, o, a);
			}
		}
	}
	return u && xt(!0), d;
}
function fo(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	Nn(i, n, r, (n) => {
		var r = void 0, i = {}, c = e.nodeName === oo, l = !1;
		if (Zr(() => {
			var u = t(...n.map(B)), d = uo(e, r, u, a, o, s);
			l && c && "value" in u && Xa(e, u.value);
			for (let e of Object.getOwnPropertySymbols(i)) u[e] || ni(i[e]);
			for (let t of Object.getOwnPropertySymbols(u)) {
				var f = u[t];
				t.description === "@attach" && (!r || f !== r[t]) && (i[t] && ni(i[t]), i[t] = Qr(() => Ra(e, () => f))), d[t] = f;
			}
			r = d;
		}), c) {
			var u = e;
			Kr(() => {
				Xa(u, r.value, !0), Za(u);
			});
		}
		l = !0;
	});
}
function po(e) {
	return e[Te] ??= {
		[to]: e.nodeName.includes("-"),
		[no]: e.namespaceURI === $e
	};
}
var mo = /* @__PURE__ */ new Map();
function ho(e) {
	var t = e.getAttribute("is") || e.nodeName, n = mo.get(t);
	if (n) return n;
	mo.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = ee(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = C(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function go(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	sr(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = _o(e) ? vo(a) : a, n(a), P !== null && r.add(P), await jr(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (O && e.defaultValue !== e.value || V(t) == null && e.value) && (n(_o(e) ? vo(e.value) : e.value), P !== null && r.add(P)), Jr(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = Je ? un : P;
			if (r.has(i)) return;
		}
		_o(e) && n === vo(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function _o(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function vo(e) {
	return e === "" ? null : +e;
}
function yo(e, t, n = t) {
	sr(e, "change", () => {
		n(e.files);
	}), O && e.files && n(e.files), Jr(() => {
		e.files = t();
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function bo(e, t) {
	return e === t || e?.[Se] === t;
}
function xo(e = {}, t, n, r) {
	var i = it.r, a = z;
	return Kr(() => {
		var o, s;
		return Jr(() => {
			o = s, s = r?.() || [], V(() => {
				bo(n(...s), e) || (t(e, ...s), o && bo(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && bo(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function So(e = !1) {
	let t = it, n = t.l.u;
	if (!n) return;
	let r = () => Pr(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Ln(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => B(i);
	}
	n.b.length && Ur(() => {
		Co(t, r), ae(n.b);
	}), Vr(() => {
		let e = V(() => n.m.map(ie));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Vr(() => {
		Co(t, r), ae(n.a);
	});
}
function Co(e, t) {
	if (e.l.s) for (let t of e.l.s) B(t);
	t();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
var wo = {
	get(e, t) {
		if (!e.exclude.includes(t)) return e.props[t];
	},
	set(e, t) {
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		if (!e.exclude.includes(t) && t in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[t]
		};
	},
	has(e, t) {
		return e.exclude.includes(t) ? !1 : t in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
	}
};
/* @__NO_SIDE_EFFECTS__ */
function K(e, t, n) {
	return new Proxy({
		props: e,
		exclude: t
	}, wo);
}
var To = {
	get(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (re(r) && (r = r()), typeof r == "object" && r && t in r) return r[t];
		}
	},
	set(e, t, n) {
		let r = e.props.length;
		for (; r--;) {
			let i = e.props[r];
			re(i) && (i = i());
			let a = x(i, t);
			if (a && a.set) return a.set(n), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (re(r) && (r = r()), typeof r == "object" && r && t in r) {
				let e = x(r, t);
				return e && !e.configurable && (e.configurable = !0), e;
			}
		}
	},
	has(e, t) {
		if (t === Se || t === Ce) return !1;
		for (let n of e.props) if (re(n) && (n = n()), n != null && t in n) return !0;
		return !1;
	},
	ownKeys(e) {
		let t = [];
		for (let n of e.props) if (re(n) && (n = n()), n) {
			for (let e in n) t.includes(e) || t.push(e);
			for (let e of Object.getOwnPropertySymbols(n)) t.includes(e) || t.push(e);
		}
		return t;
	}
};
function Eo(...e) {
	return new Proxy({ props: e }, To);
}
function q(e, t, n, r) {
	var i = !Ye || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ Ln(r), B(l)) : (c && (c = !1, s = o ? V(r) : r), s);
	let d;
	if (a) {
		var f = Se in e || Ce in e;
		d = x(e, t)?.set ?? (f && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	a ? [p, m] = sn(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = u(), d && (i && He(t), d(p)));
	var h = i ? () => {
		var n = e[t];
		return n === void 0 ? u() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return h;
	if (d) {
		var g = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || g || m) && d(t ? h() : e), e) : h();
		});
	}
	var _ = !1, v = (n & 1 ? Ln : Bn)(() => (_ = !1, h()));
	a && B(v);
	var y = z;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? B(v) : i && a ? Dt(e) : e;
			return L(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return lr && _ || y.f & 16384 ? v.v : B(v);
	});
}
function Do(e) {
	it === null && Fe("onMount"), Ye && it.l !== null ? Oo(it).m.push(e) : Vr(() => {
		let t = V(e);
		if (typeof t == "function") return t;
	});
}
function Oo(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region node_modules/svelte/src/internal/flags/legacy.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5"), Xe();
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/is.js
function ko(e) {
	return typeof e == "function";
}
function Ao(e) {
	return typeof e == "object" && !!e;
}
var jo = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function Mo(e) {
	return e == null || jo.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => Mo(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/box/box-extras.svelte.js
var No = Symbol("box"), Po = Symbol("is-writable");
function J(e, t) {
	let n = /* @__PURE__ */ F(e);
	return t ? {
		[No]: !0,
		[Po]: !0,
		get current() {
			return B(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[No]: !0,
		get current() {
			return e();
		}
	};
}
function Fo(e) {
	return Ao(e) && No in e;
}
function Io(e) {
	return Fo(e) ? e : ko(e) ? J(e) : Lo(e);
}
function Lo(e) {
	let t = /* @__PURE__ */ I(Dt(e));
	return {
		[No]: !0,
		[Po]: !0,
		get current() {
			return B(t);
		},
		set current(e) {
			L(t, e, !0);
		}
	};
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
function Ro(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
//#endregion
//#region node_modules/inline-style-parser/esm/index.mjs
var zo = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Bo = /\n/g, Vo = /^\s*/, Ho = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Uo = /^:\s*/, Wo = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Go = /^[;\s]*/, Ko = /^\s+|\s+$/g, qo = "\n", Jo = "/", Yo = "*", Xo = "", Zo = "comment", Qo = "declaration";
function $o(e, t) {
	if (typeof e != "string") throw TypeError("First argument must be a string");
	if (!e) return [];
	t ||= {};
	var n = 1, r = 1;
	function i(e) {
		var t = e.match(Bo);
		t && (n += t.length);
		var i = e.lastIndexOf(qo);
		r = ~i ? e.length - i : r + e.length;
	}
	function a() {
		var e = {
			line: n,
			column: r
		};
		return function(t) {
			return t.position = new o(e), l(), t;
		};
	}
	function o(e) {
		this.start = e, this.end = {
			line: n,
			column: r
		}, this.source = t.source;
	}
	o.prototype.content = e;
	function s(i) {
		var a = /* @__PURE__ */ Error(t.source + ":" + n + ":" + r + ": " + i);
		if (a.reason = i, a.filename = t.source, a.line = n, a.column = r, a.source = e, !t.silent) throw a;
	}
	function c(t) {
		var n = t.exec(e);
		if (n) {
			var r = n[0];
			return i(r), e = e.slice(r.length), n;
		}
	}
	function l() {
		c(Vo);
	}
	function u(e) {
		var t;
		for (e ||= []; t = d();) t !== !1 && e.push(t);
		return e;
	}
	function d() {
		var t = a();
		if (!(Jo != e.charAt(0) || Yo != e.charAt(1))) {
			for (var n = 2; Xo != e.charAt(n) && (Yo != e.charAt(n) || Jo != e.charAt(n + 1));) ++n;
			if (n += 2, Xo === e.charAt(n - 1)) return s("End of comment missing");
			var o = e.slice(2, n - 2);
			return r += 2, i(o), e = e.slice(n), r += 2, t({
				type: Zo,
				comment: o
			});
		}
	}
	function f() {
		var e = a(), t = c(Ho);
		if (t) {
			if (d(), !c(Uo)) return s("property missing ':'");
			var n = c(Wo), r = e({
				type: Qo,
				property: es(t[0].replace(zo, Xo)),
				value: n ? es(n[0].replace(zo, Xo)) : Xo
			});
			return c(Go), r;
		}
	}
	function p() {
		var e = [];
		u(e);
		for (var t; t = f();) t !== !1 && (e.push(t), u(e));
		return e;
	}
	return l(), p();
}
function es(e) {
	return e ? e.replace(Ko, Xo) : Xo;
}
//#endregion
//#region node_modules/style-to-object/esm/index.mjs
function ts(e, t) {
	let n = null;
	if (!e || typeof e != "string") return n;
	let r = $o(e), i = typeof t == "function";
	return r.forEach((e) => {
		if (e.type !== "declaration") return;
		let { property: r, value: a } = e;
		i ? t(r, a, e) : a && (n ||= {}, n[r] = a);
	}), n;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/strings.js
var ns = /\d/, rs = [
	"-",
	"_",
	"/",
	"."
];
function is(e = "") {
	if (!ns.test(e)) return e !== e.toLowerCase();
}
function as(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = rs.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = is(a);
		if (i === !1) {
			if (r === !1 && o === !0) {
				t.push(n), n = a, r = o;
				continue;
			}
			if (r === !0 && o === !1 && n.length > 1) {
				let e = n.at(-1);
				t.push(n.slice(0, Math.max(0, n.length - 1))), n = e + a, r = o;
				continue;
			}
		}
		n += a, r = o, i = e;
	}
	return t.push(n), t;
}
function os(e) {
	return e ? as(e).map((e) => cs(e)).join("") : "";
}
function ss(e) {
	return ls(os(e || ""));
}
function cs(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function ls(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function us(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[os(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[ss(e)] = n;
	}
	return ts(e, n), t;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
function ds(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function fs(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var ps = fs(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function ms(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${ps(t)}: ${e[t]};`).join("\n");
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/style.js
function hs(e = {}) {
	return ms(e).replace("\n", " ");
}
var gs = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/merge-props.js
function _s(e) {
	return gs.has(e);
}
function vs(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
				if (a && typeof o && _s(e)) t[e] = Ro(n, i);
				else if (a && o) t[e] = ds(n, i);
				else if (e === "class") {
					let r = Mo(n), a = Mo(i);
					r && a ? t[e] = Ba(n, i) : r ? t[e] = Ba(n) : a && (t[e] = Ba(i));
				} else if (e === "style") {
					let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
					if (r && a) t[e] = {
						...n,
						...i
					};
					else if (r && s) {
						let r = us(i);
						t[e] = {
							...n,
							...r
						};
					} else if (o && a) t[e] = {
						...us(n),
						...i
					};
					else if (o && s) {
						let r = us(n), a = us(i);
						t[e] = {
							...r,
							...a
						};
					} else r ? t[e] = n : a ? t[e] = i : o ? t[e] = n : s && (t[e] = i);
				} else t[e] = i === void 0 ? n : i;
			}
			for (let e of Object.getOwnPropertySymbols(r)) {
				let n = t[e], i = r[e];
				t[e] = i === void 0 ? n : i;
			}
		}
	}
	return typeof t.style == "object" && (t.style = hs(t.style).replaceAll("\n", " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t;
}
//#endregion
//#region node_modules/runed/dist/internal/configurable-globals.js
var ys = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/runed/dist/internal/utils/dom.js
function bs(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot;) {
		let e = t.shadowRoot.activeElement;
		if (e === t) break;
		t = e;
	}
	return t;
}
//#endregion
//#region node_modules/svelte/src/reactivity/map.js
var xs = class extends Map {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ I(0);
	#n = /* @__PURE__ */ I(0);
	#r = Sr || -1;
	constructor(e) {
		if (super(), e) {
			for (var [t, n] of e) super.set(t, n);
			this.#n.v = super.size;
		}
	}
	#i(e) {
		return Sr === this.#r ? /* @__PURE__ */ I(e) : Yn(e);
	}
	has(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) if (super.has(e)) n = this.#i(0), t.set(e, n);
		else return B(this.#t), !1;
		return B(n), !0;
	}
	forEach(e, t) {
		this.#a(), super.forEach(e, t);
	}
	get(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) if (super.has(e)) n = this.#i(0), t.set(e, n);
		else {
			B(this.#t);
			return;
		}
		return B(n), super.get(e);
	}
	set(e, t) {
		var n = this.#e, r = n.get(e), i = super.get(e), a = super.set(e, t), o = this.#t;
		if (r === void 0) r = this.#i(0), n.set(e, r), L(this.#n, super.size), $n(o);
		else if (i !== t) {
			$n(r);
			var s = o.reactions === null ? null : new Set(o.reactions);
			(s === null || !r.reactions?.every((e) => s.has(e))) && $n(o);
		}
		return a;
	}
	delete(e) {
		var t = this.#e, n = t.get(e), r = super.delete(e);
		return n !== void 0 && (t.delete(e), L(n, -1)), r && (L(this.#n, super.size), $n(this.#t)), r;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#e;
			L(this.#n, 0);
			for (var t of e.values()) L(t, -1);
			$n(this.#t), e.clear();
		}
	}
	#a() {
		B(this.#t);
		var e = this.#e;
		if (this.#n.v !== e.size) {
			for (var t of super.keys()) if (!e.has(t)) {
				var n = this.#i(0);
				e.set(t, n);
			}
		}
		for ([, n] of this.#e) B(n);
	}
	keys() {
		return B(this.#t), super.keys();
	}
	values() {
		return this.#a(), super.values();
	}
	entries() {
		return this.#a(), super.entries();
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	get size() {
		return B(this.#n), super.size;
	}
};
new class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: t = ys, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = kn((e) => {
			let n = Gi(t, "focusin", e), r = Gi(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? bs(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/runed/dist/internal/utils/is.js
function Ss(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/runed/dist/utilities/context/context.js
var Cs = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return ct(this.#t);
	}
	get() {
		let e = ot(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = ot(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return st(this.#t, e);
	}
};
//#endregion
//#region node_modules/runed/dist/utilities/watch/watch.svelte.js
function ws(e, t) {
	switch (e) {
		case "post":
			Vr(t);
			break;
		case "pre":
			Ur(t);
			break;
	}
}
function Ts(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	ws(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = V(() => n(t, o));
		return o = t, r;
	});
}
function Es(e, t, n) {
	let r = Wr(() => {
		let i = !1;
		Ts(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Vr(() => r);
}
function Ds(e, t, n) {
	Ts(e, "post", t, n);
}
function Os(e, t, n) {
	Ts(e, "pre", t, n);
}
Ds.pre = Os;
function ks(e, t) {
	Es(e, "post", t);
}
function As(e, t) {
	Es(e, "pre", t);
}
ks.pre = As;
//#endregion
//#region node_modules/runed/dist/internal/utils/get.js
function js(e) {
	return Ss(e) ? e() : e;
}
//#endregion
//#region node_modules/runed/dist/utilities/element-size/element-size.svelte.js
var Ms = class {
	#e = {
		width: 0,
		height: 0
	};
	#t = !1;
	#n;
	#r;
	#i;
	#a = /* @__PURE__ */ F(() => (B(this.#s)?.(), this.getSize().width));
	#o = /* @__PURE__ */ F(() => (B(this.#s)?.(), this.getSize().height));
	#s = /* @__PURE__ */ F(() => {
		let e = js(this.#r);
		if (e) return kn((t) => {
			if (!this.#i) return;
			let n = new this.#i.ResizeObserver((e) => {
				this.#t = !0;
				for (let t of e) {
					let e = this.#n.box === "content-box" ? t.contentBoxSize : t.borderBoxSize, n = Array.isArray(e) ? e : [e];
					this.#e.width = n.reduce((e, t) => Math.max(e, t.inlineSize), 0), this.#e.height = n.reduce((e, t) => Math.max(e, t.blockSize), 0);
				}
				t();
			});
			return n.observe(e), () => {
				this.#t = !1, n.disconnect();
			};
		});
	});
	constructor(e, t = { box: "border-box" }) {
		this.#i = t.window ?? ys, this.#n = t, this.#r = e, this.#e = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		let e = js(this.#r);
		if (!e || !this.#i) return;
		let t = e.offsetWidth, n = e.offsetHeight;
		if (this.#n.box === "border-box") return {
			width: t,
			height: n
		};
		let r = this.#i.getComputedStyle(e), i = parseFloat(r.paddingLeft) + parseFloat(r.paddingRight), a = parseFloat(r.paddingTop) + parseFloat(r.paddingBottom), o = parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth), s = parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth);
		return {
			width: t - i - o,
			height: n - a - s
		};
	}
	getSize() {
		return this.#t ? this.#e : this.calculateSize() ?? this.#e;
	}
	get current() {
		return B(this.#s)?.(), this.getSize();
	}
	get width() {
		return B(this.#a);
	}
	get height() {
		return B(this.#o);
	}
};
//#endregion
//#region node_modules/runed/dist/utilities/resource/resource.svelte.js
function Ns(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function Ps(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function Fs(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ I(Dt(o)), u = /* @__PURE__ */ I(!1), d = /* @__PURE__ */ I(void 0), f = /* @__PURE__ */ I(Dt([])), p = () => {
		B(f).forEach((e) => e()), L(f, [], !0);
	}, m = (e) => {
		L(f, [...B(f), e], !0);
	}, h = async (e, n, r = !1) => {
		try {
			L(u, !0), L(d, void 0), p();
			let i = new AbortController();
			m(() => i.abort());
			let a = await t(e, n, {
				data: B(l),
				refetching: r,
				onCleanup: m,
				signal: i.signal
			});
			return L(l, a, !0), a;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || L(d, e, !0);
			return;
		} finally {
			L(u, !1);
		}
	}, g = s ? Ns(h, s) : c ? Ps(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
	return r((t, n) => {
		a && v || (v = t, g(Array.isArray(e) ? t : t[0], Array.isArray(e) ? n : n?.[0]));
	}, { lazy: i }), {
		get current() {
			return B(l);
		},
		get loading() {
			return B(u);
		},
		get error() {
			return B(d);
		},
		mutate: (e) => {
			L(l, e, !0);
		},
		refetch: (t) => {
			let n = _.map((e) => e());
			return g(Array.isArray(e) ? n : n[0], Array.isArray(e) ? n : n[0], t ?? !0);
		}
	};
}
function Is(e, t, n) {
	return Fs(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		Ds(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function Ls(e, t, n) {
	return Fs(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		Ds.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
Is.pre = Ls;
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/on-destroy-effect.svelte.js
function Rs(e) {
	Vr(() => () => {
		e();
	});
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/on-mount-effect.svelte.js
function zs(e) {
	Vr(() => V(() => e()));
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-sleep.js
function Bs(e, t) {
	return setTimeout(t, e);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-tick.js
function Vs(e) {
	jr().then(e);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/dom.js
var Hs = 1, Us = 9, Ws = 11;
function Gs(e) {
	return Ao(e) && e.nodeType === Hs && typeof e.nodeName == "string";
}
function Ks(e) {
	return Ao(e) && e.nodeType === Us;
}
function qs(e) {
	return Ao(e) && e.constructor?.name === "VisualViewport";
}
function Js(e) {
	return Ao(e) && e.nodeType !== void 0;
}
function Ys(e) {
	return Js(e) && e.nodeType === Ws && "host" in e;
}
function Xs(e, t) {
	if (!e || !t || !Gs(e) || !Gs(t)) return !1;
	let n = t.getRootNode?.();
	if (e === t || e.contains(t)) return !0;
	if (n && Ys(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function Zs(e) {
	return Ks(e) ? e : qs(e) ? e.document : e?.ownerDocument ?? document;
}
function Qs(e) {
	return Ys(e) ? Qs(e.host) : Ks(e) ? e.defaultView ?? window : Gs(e) ? e.ownerDocument?.defaultView ?? window : window;
}
function $s(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot;) {
		let e = t.shadowRoot.activeElement;
		if (e === t) break;
		t = e;
	}
	return t;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/dom-context.svelte.js
var ec = class {
	element;
	#e = /* @__PURE__ */ F(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return B(this.#e);
	}
	set root(e) {
		L(this.#e, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = J(e) : this.element = e;
	}
	getDocument = () => Zs(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => $s(this.root);
	isActiveElement = (e) => e === this.getActiveElement();
	getElementById(e) {
		return this.root.getElementById(e);
	}
	querySelector = (e) => this.root ? this.root.querySelector(e) : null;
	querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
	setTimeout = (e, t) => this.getWindow().setTimeout(e, t);
	clearTimeout = (e) => this.getWindow().clearTimeout(e);
};
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/attach-ref.js
function tc(e, t) {
	return { [ji()]: (n) => Fo(e) ? (e.current = n, V(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), V(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
//#endregion
//#region node_modules/bits-ui/dist/internal/attrs.js
function nc(e) {
	return e ? "true" : "false";
}
function rc(e) {
	return e ? "open" : "closed";
}
function ic(e) {
	return e === "starting" ? { "data-starting-style": "" } : e === "ending" ? { "data-ending-style": "" } : {};
}
var ac = class {
	#e;
	#t;
	attrs;
	constructor(e) {
		this.#e = e.getVariant ? e.getVariant() : null, this.#t = this.#e ? `data-${this.#e}-` : `data-${e.component}-`, this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(e.parts.map((e) => [e, this.getAttr(e)]));
	}
	getAttr(e, t) {
		return t ? `data-${t}-${e}` : `${this.#t}${e}`;
	}
	selector(e, t) {
		return `[${this.getAttr(e, t)}]`;
	}
};
function oc(e) {
	let t = new ac(e);
	return {
		...t.attrs,
		selector: t.selector,
		getAttr: t.getAttr
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/is.js
var sc = typeof document < "u", cc = lc();
function lc() {
	return sc && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function uc(e) {
	return e instanceof HTMLElement;
}
function dc(e) {
	return e instanceof Element;
}
function fc(e) {
	return e instanceof Element || e instanceof SVGElement;
}
function pc(e) {
	return e.pointerType === "touch";
}
function mc(e) {
	return e.matches(":focus-visible");
}
function hc(e) {
	return e !== null;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/animations-complete.js
var gc = class {
	#e;
	#t = null;
	#n = null;
	#r = 0;
	constructor(e) {
		this.#e = e, Rs(() => this.#i());
	}
	#i() {
		this.#t !== null && (window.cancelAnimationFrame(this.#t), this.#t = null), this.#n?.disconnect(), this.#n = null, this.#r++;
	}
	run(e) {
		this.#i();
		let t = this.#e.ref.current;
		if (!t) return;
		if (typeof t.getAnimations != "function") {
			this.#a(e);
			return;
		}
		let n = this.#r, r = () => {
			n === this.#r && this.#a(e);
		}, i = () => {
			if (n !== this.#r) return;
			let e = t.getAnimations();
			if (e.length === 0) {
				r();
				return;
			}
			Promise.all(e.map((e) => e.finished)).then(() => {
				r();
			}).catch(() => {
				if (n === this.#r) {
					if (t.getAnimations().some((e) => e.pending || e.playState !== "finished")) {
						i();
						return;
					}
					r();
				}
			});
		}, a = () => {
			this.#t = window.requestAnimationFrame(() => {
				this.#t = null, i();
			});
		};
		if (!this.#e.afterTick.current) {
			a();
			return;
		}
		this.#t = window.requestAnimationFrame(() => {
			this.#t = null;
			let e = "data-starting-style";
			if (!t.hasAttribute(e)) {
				a();
				return;
			}
			this.#n = new MutationObserver(() => {
				n === this.#r && (t.hasAttribute(e) || (this.#n?.disconnect(), this.#n = null, a()));
			}), this.#n.observe(t, {
				attributes: !0,
				attributeFilter: [e]
			});
		});
	}
	#a(e) {
		let t = () => {
			e();
		};
		this.#e.afterTick ? Vs(t) : t();
	}
}, _c = class {
	#e;
	#t;
	#n;
	#r = /* @__PURE__ */ I(!1);
	#i = /* @__PURE__ */ I(void 0);
	#a = !1;
	#o = null;
	constructor(e) {
		this.#e = e, L(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new gc({
			ref: this.#e.ref,
			afterTick: this.#e.open
		}), Rs(() => this.#s()), Ds(() => this.#e.open.current, (e) => {
			if (!this.#a) {
				this.#a = !0;
				return;
			}
			if (this.#s(), !e && this.#e.shouldSkipExitAnimation?.()) {
				L(this.#r, !1), L(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			if (e && L(this.#r, !0), L(this.#i, e ? "starting" : "ending", !0), e && (this.#o = window.requestAnimationFrame(() => {
				this.#o = null, this.#e.open.current && L(this.#i, void 0);
			})), !this.#t) {
				e || L(this.#r, !1), L(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			this.#n.run(() => {
				e === this.#e.open.current && (this.#e.open.current || L(this.#r, !1), L(this.#i, void 0), this.#e.onComplete?.());
			});
		});
	}
	get shouldRender() {
		return B(this.#r);
	}
	get transitionStatus() {
		return B(this.#i);
	}
	#s() {
		this.#o !== null && (window.cancelAnimationFrame(this.#o), this.#o = null);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/noop.js
function vc() {}
//#endregion
//#region node_modules/bits-ui/dist/internal/create-id.js
function yc(e, t) {
	return t === void 0 ? `bits-${e}` : `bits-${e}-${t}`;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal-consumer.svelte
function bc(e, t) {
	var n = U();
	ha(M(n), () => t.children, (e) => {
		var n = U();
		G(M(n), () => t.children ?? w), W(e, n);
	}), W(e, n);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/bits-config.js
var xc = new Cs("BitsConfig");
function Sc() {
	let e = new Cc(null, {});
	return xc.getOr(e).opts;
}
var Cc = class {
	opts;
	constructor(e, t) {
		let n = wc(e, t);
		this.opts = {
			defaultPortalTo: n((e) => e.defaultPortalTo),
			defaultLocale: n((e) => e.defaultLocale)
		};
	}
};
function wc(e, t) {
	return (n) => J(() => {
		let r = n(t)?.current;
		if (r !== void 0) return r;
		if (e !== null) return n(e.opts)?.current;
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/prop-resolvers.js
function Tc(e, t) {
	return (n) => {
		let r = Sc();
		return J(() => {
			let i = n();
			if (i !== void 0) return i;
			let a = e(r).current;
			return a === void 0 ? t : a;
		});
	};
}
var Ec = Tc((e) => e.defaultPortalTo, "body");
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal.svelte
function Dc(e, t) {
	E(t, !0);
	let n = Ec(() => t.to), r = lt(), i = /* @__PURE__ */ F(a);
	function a() {
		if (!sc || t.disabled) return null;
		let e = null;
		return e = typeof n.current == "string" ? document.querySelector(n.current) : n.current, e;
	}
	let o;
	function s() {
		o &&= (da(o), null);
	}
	Ds([() => B(i), () => t.disabled], ([e, n]) => {
		if (!e || n) {
			s();
			return;
		}
		return o = sa(bc, {
			target: e,
			props: { children: t.children },
			context: r
		}), () => {
			s();
		};
	});
	var c = U(), l = M(c), u = (e) => {
		var n = U();
		G(M(n), () => t.children ?? w), W(e, n);
	};
	pa(l, (e) => {
		t.disabled && e(u);
	}), W(e, c), D();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/events.js
var Oc = class {
	eventName;
	options;
	constructor(e, t = {
		bubbles: !0,
		cancelable: !0
	}) {
		this.eventName = e, this.options = t;
	}
	createEvent(e) {
		return new CustomEvent(this.eventName, {
			...this.options,
			detail: e
		});
	}
	dispatch(e, t) {
		let n = this.createEvent(t);
		return e.dispatchEvent(n), n;
	}
	listen(e, t, n) {
		return Gi(e, this.eventName, (e) => {
			t(e);
		}, n);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/debounce.js
function kc(e, t = 500) {
	let n = null, r = (...r) => {
		n !== null && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
	return r.destroy = () => {
		n !== null && (clearTimeout(n), n = null);
	}, r;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/elements.js
function Ac(e, t) {
	return e === t || e.contains(t);
}
function jc(e) {
	return e?.ownerDocument ?? document;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/dom.js
function Mc(e, t) {
	let { clientX: n, clientY: r } = e, i = t.getBoundingClientRect();
	return n < i.left || n > i.right || r < i.top || r > i.bottom;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/focus.js
function Nc(e) {
	let t = [], n = Zs(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
//#endregion
//#region node_modules/tabbable/dist/index.esm.js
var Pc = [
	"input:not([inert]):not([inert] *)",
	"select:not([inert]):not([inert] *)",
	"textarea:not([inert]):not([inert] *)",
	"a[href]:not([inert]):not([inert] *)",
	"button:not([inert]):not([inert] *)",
	"[tabindex]:not(slot):not([inert]):not([inert] *)",
	"audio[controls]:not([inert]):not([inert] *)",
	"video[controls]:not([inert]):not([inert] *)",
	"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
	"details>summary:first-of-type:not([inert]):not([inert] *)",
	"details:not([inert]):not([inert] *)"
], Fc = /* @__PURE__ */ Pc.join(","), Ic = typeof Element > "u", Lc = Ic ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Rc = !Ic && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, zc = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : zc(e.parentNode));
}, Bc = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, Vc = function(e, t, n) {
	if (zc(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(Fc));
	return t && Lc.call(e, Fc) && r.unshift(e), r = r.filter(n), r;
}, Hc = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!zc(a, !1)) if (a.tagName === "SLOT") {
			var o = a.assignedElements(), s = Hc(o.length ? o : a.children, !0, n);
			n.flatten ? r.push.apply(r, s) : r.push({
				scopeParent: a,
				candidates: s
			});
		} else {
			Lc.call(a, Fc) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
			var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !zc(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
			if (c && l) {
				var u = Hc(c === !0 ? a.children : c.children, !0, n);
				n.flatten ? r.push.apply(r, u) : r.push({
					scopeParent: a,
					candidates: u
				});
			} else i.unshift.apply(i, a.children);
		}
	}
	return r;
}, Uc = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, Wc = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Bc(e)) && !Uc(e) ? 0 : e.tabIndex;
}, Gc = function(e, t) {
	var n = Wc(e);
	return n < 0 && t && !Uc(e) ? 0 : n;
}, Kc = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, qc = function(e) {
	return e.tagName === "INPUT";
}, Jc = function(e) {
	return qc(e) && e.type === "hidden";
}, Yc = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, Xc = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, Zc = function(e) {
	if (!e.name) return !0;
	var t = e.form || Rc(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = Xc(r, e.form);
	return !i || i === e;
}, Qc = function(e) {
	return qc(e) && e.type === "radio";
}, $c = function(e) {
	return Qc(e) && !Zc(e);
}, el = function(e) {
	var t = e && Rc(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = Rc(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, tl = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, nl = function(e, t) {
	var n = t.displayCheck, r = t.getShadowRoot;
	if (n === "full-native" && "checkVisibility" in e) return !e.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	if (getComputedStyle(e).visibility === "hidden") return !0;
	var i = Lc.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (Lc.call(i, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var a = e; e;) {
				var o = e.parentElement, s = Rc(e);
				if (o && !o.shadowRoot && r(o) === !0) return tl(e);
				e = e.assignedSlot ? e.assignedSlot : !o && s !== e.ownerDocument ? s.host : o;
			}
			e = a;
		}
		if (el(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return tl(e);
	return !1;
}, rl = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return Lc.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, il = function(e, t) {
	return !(t.disabled || Jc(t) || nl(t, e) || Yc(t) || rl(t));
}, al = function(e, t) {
	return !($c(t) || Wc(t) < 0 || !il(e, t));
}, ol = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, sl = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = Gc(a, i), s = i ? sl(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(Kc).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, cl = function(e, t) {
	return t ||= {}, sl(t.getShadowRoot ? Hc([e], t.includeContainer, {
		filter: al.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: ol
	}) : Vc(e, t.includeContainer, al.bind(null, t)));
}, ll = function(e, t) {
	return t ||= {}, t.getShadowRoot ? Hc([e], t.includeContainer, {
		filter: il.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : Vc(e, t.includeContainer, il.bind(null, t));
}, ul = /* @__PURE__ */ Pc.concat("iframe:not([inert]):not([inert] *)").join(","), dl = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return Lc.call(e, ul) === !1 ? !1 : il(t, e);
}, fl = "data-context-menu-trigger", pl = "data-context-menu-content";
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/use-dismissable-layer.svelte.js
new Cs("Menu.Root"), new Cs("Menu.Root | Menu.Sub"), new Cs("Menu.Content"), new Cs("Menu.Group | Menu.RadioGroup"), new Cs("Menu.RadioGroup"), new Cs("Menu.CheckboxGroup"), new Oc("bitsmenuopen", {
	bubbles: !1,
	cancelable: !0
}), oc({
	component: "menu",
	parts: [
		"trigger",
		"content",
		"sub-trigger",
		"item",
		"group",
		"group-heading",
		"checkbox-group",
		"checkbox-item",
		"radio-group",
		"radio-item",
		"separator",
		"sub-content",
		"arrow"
	]
}), globalThis.bitsDismissableLayers ??= /* @__PURE__ */ new Map();
var ml = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	#e;
	#t;
	#n = { pointerdown: !1 };
	#r = !1;
	#i = !1;
	#a = void 0;
	#o;
	#s = vc;
	constructor(e) {
		this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#o = e.onFocusOutside, Vr(() => {
			this.#a = jc(this.opts.ref.current);
		});
		let t = vc, n = () => {
			this.#g(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), t();
		};
		Ds([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!(!this.opts.enabled.current || !this.opts.ref.current)) return Bs(1, () => {
				this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), t(), t = this.#l());
			}), n;
		}), Rs(() => {
			this.#g.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), t();
		});
	}
	#c = (e) => {
		e.defaultPrevented || this.opts.ref.current && Vs(() => {
			!this.opts.ref.current || this.#h(e.target) || e.target && !this.#i && this.#o.current?.(e);
		});
	};
	#l() {
		return ds(Gi(this.#a, "pointerdown", ds(this.#f, this.#m), { capture: !0 }), Gi(this.#a, "pointerdown", ds(this.#p, this.#d)), Gi(this.#a, "focusin", this.#c));
	}
	#u = (e) => {
		let t = e;
		t.defaultPrevented && (t = vl(e)), this.#e.current(e);
	};
	#d = kc((e) => {
		if (!this.opts.ref.current) {
			this.#s();
			return;
		}
		let t = this.opts.isValidEvent.current(e, this.opts.ref.current) || _l(e, this.opts.ref.current);
		if (!this.#r || this.#_() || !t) {
			this.#s();
			return;
		}
		let n = e;
		if (n.defaultPrevented && (n = vl(n)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
			this.#s();
			return;
		}
		e.pointerType === "touch" ? (this.#s(), this.#s = Gi(this.#a, "click", this.#u, { once: !0 })) : this.#e.current(n);
	}, 10);
	#f = (e) => {
		this.#n[e.type] = !0;
	};
	#p = (e) => {
		this.#n[e.type] = !1;
	};
	#m = () => {
		this.opts.ref.current && (this.#r = gl(this.opts.ref.current));
	};
	#h = (e) => this.opts.ref.current ? Ac(this.opts.ref.current, e) : !1;
	#g = kc(() => {
		for (let e in this.#n) this.#n[e] = !1;
		this.#r = !1;
	}, 20);
	#_() {
		return Object.values(this.#n).some(Boolean);
	}
	#v = () => {
		this.#i = !0;
	};
	#y = () => {
		this.#i = !1;
	};
	props = {
		onfocuscapture: this.#v,
		onblurcapture: this.#y
	};
};
function hl(e = [...globalThis.bitsDismissableLayers]) {
	return e.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
}
function gl(e) {
	let t = [...globalThis.bitsDismissableLayers], n = hl(t);
	if (n) return n[0].opts.ref.current === e;
	let [r] = t[0];
	return r.opts.ref.current === e;
}
function _l(e, t) {
	let n = e.target;
	if (!fc(n)) return !1;
	let r = !!n.closest(`[${fl}]`), i = !!t.closest(`[${pl}]`);
	return "button" in e && e.button > 0 && !r ? !1 : "button" in e && e.button === 0 && r && i ? !0 : r && i ? !1 : jc(n).documentElement.contains(n) && !Ac(t, n) && Mc(e, t);
}
function vl(e) {
	let t = e.currentTarget, n = e.target, r;
	r = e instanceof PointerEvent ? new PointerEvent(e.type, e) : new PointerEvent("pointerdown", e);
	let i = !1;
	return new Proxy(r, { get: (r, a) => a === "currentTarget" ? t : a === "target" ? n : a === "preventDefault" ? () => {
		i = !0, typeof r.preventDefault == "function" && r.preventDefault();
	} : a === "defaultPrevented" ? i : a in r ? r[a] : e[a] });
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/dismissible-layer.svelte
function yl(e, t) {
	E(t, !0);
	let n = q(t, "interactOutsideBehavior", 3, "close"), r = q(t, "onInteractOutside", 3, vc), i = q(t, "onFocusOutside", 3, vc), a = q(t, "isValidEvent", 3, () => !1), o = ml.create({
		id: J(() => t.id),
		interactOutsideBehavior: J(() => n()),
		onInteractOutside: J(() => r()),
		enabled: J(() => t.enabled),
		onFocusOutside: J(() => i()),
		isValidEvent: J(() => a()),
		ref: t.ref
	});
	var s = U();
	G(M(s), () => t.children ?? w, () => ({ props: o.props })), W(e, s), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/use-escape-layer.svelte.js
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var bl = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	constructor(e) {
		this.opts = e, this.domContext = new ec(this.opts.ref);
		let t = vc;
		Ds(() => e.enabled.current, (n) => (n && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), t = this.#e()), () => {
			t(), globalThis.bitsEscapeLayers.delete(this);
		}));
	}
	#e = () => Gi(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
	#t = (e) => {
		if (e.key !== "Escape" || !xl(this)) return;
		let t = new KeyboardEvent(e.type, e);
		e.preventDefault();
		let n = this.opts.escapeKeydownBehavior.current;
		n !== "close" && n !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(t);
	};
};
function xl(e) {
	let t = [...globalThis.bitsEscapeLayers], n = t.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
	if (n) return n[0] === e;
	let [r] = t[0];
	return r === e;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/escape-layer.svelte
function Sl(e, t) {
	E(t, !0);
	let n = q(t, "escapeKeydownBehavior", 3, "close"), r = q(t, "onEscapeKeydown", 3, vc);
	bl.create({
		escapeKeydownBehavior: J(() => n()),
		onEscapeKeydown: J(() => r()),
		enabled: J(() => t.enabled),
		ref: t.ref
	});
	var i = U();
	G(M(i), () => t.children ?? w), W(e, i), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope-manager.js
var Cl = class e {
	static instance;
	#e = Lo([]);
	#t = /* @__PURE__ */ new WeakMap();
	#n = /* @__PURE__ */ new WeakMap();
	static getInstance() {
		return this.instance ||= new e(), this.instance;
	}
	register(e) {
		let t = this.getActive();
		t && t !== e && t.pause();
		let n = document.activeElement;
		n && n !== document.body && this.#n.set(e, n), this.#e.current = this.#e.current.filter((t) => t !== e), this.#e.current.unshift(e);
	}
	unregister(e) {
		this.#e.current = this.#e.current.filter((t) => t !== e);
		let t = this.getActive();
		t && t.resume();
	}
	getActive() {
		return this.#e.current[0];
	}
	setFocusMemory(e, t) {
		this.#t.set(e, t);
	}
	getFocusMemory(e) {
		return this.#t.get(e);
	}
	isActiveScope(e) {
		return this.getActive() === e;
	}
	setPreFocusMemory(e, t) {
		this.#n.set(e, t);
	}
	getPreFocusMemory(e) {
		return this.#n.get(e);
	}
	clearPreFocusMemory(e) {
		this.#n.delete(e);
	}
}, wl = class e {
	#e = !1;
	#t = null;
	#n = Cl.getInstance();
	#r = [];
	#i;
	constructor(e) {
		this.#i = e;
	}
	get paused() {
		return this.#e;
	}
	pause() {
		this.#e = !0;
	}
	resume() {
		this.#e = !1;
	}
	#a() {
		for (let e of this.#r) e();
		this.#r = [];
	}
	mount(e) {
		this.#t && this.unmount(), this.#t = e, this.#n.register(this), this.#c(), this.#o();
	}
	unmount() {
		this.#t &&= (this.#a(), this.#s(), this.#n.unregister(this), this.#n.clearPreFocusMemory(this), null);
	}
	#o() {
		if (!this.#t) return;
		let e = new CustomEvent("focusScope.onOpenAutoFocus", {
			bubbles: !1,
			cancelable: !0
		});
		this.#i.onOpenAutoFocus.current(e), e.defaultPrevented || requestAnimationFrame(() => {
			if (!this.#t) return;
			let e = this.#u();
			e ? (e.focus(), this.#n.setFocusMemory(this, e)) : this.#t.focus();
		});
	}
	#s() {
		let e = new CustomEvent("focusScope.onCloseAutoFocus", {
			bubbles: !1,
			cancelable: !0
		});
		if (this.#i.onCloseAutoFocus.current?.(e), !e.defaultPrevented) {
			let e = this.#n.getPreFocusMemory(this);
			if (e && document.contains(e)) try {
				e.focus();
			} catch {
				document.body.focus();
			}
		}
	}
	#c() {
		if (!this.#t || !this.#i.trap.current) return;
		let e = this.#t, t = e.ownerDocument;
		this.#r.push(Gi(t, "focusin", (t) => {
			if (this.#e || !this.#n.isActiveScope(this)) return;
			let n = t.target;
			if (n) if (e.contains(n)) this.#n.setFocusMemory(this, n);
			else {
				let n = this.#n.getFocusMemory(this);
				if (n && e.contains(n) && dl(n)) t.preventDefault(), n.focus();
				else {
					let t = this.#u(), n = this.#d()[0];
					(t || n || e).focus();
				}
			}
		}, { capture: !0 }), Gi(e, "keydown", (e) => {
			if (!this.#i.loop || this.#e || e.key !== "Tab" || !this.#n.isActiveScope(this)) return;
			let n = this.#l();
			if (n.length === 0) return;
			let r = n[0], i = n[n.length - 1];
			!e.shiftKey && t.activeElement === i ? (e.preventDefault(), r.focus()) : e.shiftKey && t.activeElement === r && (e.preventDefault(), i.focus());
		}));
		let n = new MutationObserver(() => {
			let t = this.#n.getFocusMemory(this);
			if (t && !e.contains(t)) {
				let t = this.#u(), n = this.#d()[0], r = t || n;
				r ? (r.focus(), this.#n.setFocusMemory(this, r)) : e.focus();
			}
		});
		n.observe(e, {
			childList: !0,
			subtree: !0
		}), this.#r.push(() => n.disconnect());
	}
	#l() {
		return this.#t ? cl(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	#u() {
		return this.#l()[0] || null;
	}
	#d() {
		return this.#t ? ll(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	static use(t) {
		let n = null;
		return Ds([() => t.ref.current, () => t.enabled.current], ([r, i]) => {
			r && i ? (n ||= new e(t), n.mount(r)) : n &&= (n.unmount(), null);
		}), Rs(() => {
			n?.unmount();
		}), { get props() {
			return { tabindex: -1 };
		} };
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope.svelte
function Tl(e, t) {
	E(t, !0);
	let n = q(t, "enabled", 3, !1), r = q(t, "trapFocus", 3, !1), i = q(t, "loop", 3, !1), a = q(t, "onCloseAutoFocus", 3, vc), o = q(t, "onOpenAutoFocus", 3, vc), s = wl.use({
		enabled: J(() => n()),
		trap: J(() => r()),
		loop: i(),
		onCloseAutoFocus: J(() => a()),
		onOpenAutoFocus: J(() => o()),
		ref: t.ref
	});
	var c = U();
	G(M(c), () => t.focusScope ?? w, () => ({ props: s.props })), W(e, c), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/use-text-selection-layer.svelte.js
var El = () => {};
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var Dl = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	#e = vc;
	#t = !1;
	#n = El;
	#r = El;
	constructor(e) {
		this.opts = e, this.domContext = new ec(e.ref);
		let t = vc;
		Ds(() => [
			this.opts.enabled.current,
			this.opts.onPointerDown.current,
			this.opts.onPointerUp.current
		], ([e, n, r]) => (this.#t = e, this.#n = n, this.#r = r, e && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), t(), t = this.#i()), () => {
			this.#t = !1, t(), this.#s(), globalThis.bitsTextSelectionLayers.delete(this);
		}));
	}
	#i() {
		return ds(Gi(this.domContext.getDocument(), "pointerdown", this.#o), Gi(this.domContext.getDocument(), "pointerup", Ro(this.#s, this.#a)));
	}
	#a = (e) => {
		this.#r(e);
	};
	#o = (e) => {
		let t = this.opts.ref.current, n = e.target;
		!uc(t) || !uc(n) || !this.#t || !jl(this) || !Xs(t, n) || (this.#n(e), !e.defaultPrevented && (this.#e = kl(t, this.domContext.getDocument().body)));
	};
	#s = () => {
		this.#e(), this.#e = vc;
	};
}, Ol = (e) => e.style.userSelect || e.style.webkitUserSelect;
function kl(e, t) {
	let n = Ol(t), r = Ol(e);
	return Al(t, "none"), Al(e, "text"), () => {
		Al(t, n), Al(e, r);
	};
}
function Al(e, t) {
	e.style.userSelect = t, e.style.webkitUserSelect = t;
}
function jl(e) {
	let t = [...globalThis.bitsTextSelectionLayers];
	if (!t.length) return !1;
	let n = t.at(-1);
	return n ? n[0] === e : !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/text-selection-layer.svelte
function Ml(e, t) {
	E(t, !0);
	let n = q(t, "preventOverflowTextSelection", 3, !0), r = q(t, "onPointerDown", 3, vc), i = q(t, "onPointerUp", 3, vc);
	Dl.create({
		id: J(() => t.id),
		onPointerDown: J(() => r()),
		onPointerUp: J(() => i()),
		enabled: J(() => t.enabled && n()),
		ref: t.ref
	});
	var a = U();
	G(M(a), () => t.children ?? w), W(e, a), D();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/use-id.js
globalThis.bitsIdCounter ??= { current: 0 };
function Nl(e = "bits") {
	return globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/shared-state.svelte.js
var Pl = class {
	#e;
	#t = 0;
	#n = /* @__PURE__ */ I();
	#r;
	constructor(e) {
		this.#e = e;
	}
	#i() {
		--this.#t, this.#r && this.#t <= 0 && (this.#r(), L(this.#n, void 0), this.#r = void 0);
	}
	get(...e) {
		return this.#t += 1, B(this.#n) === void 0 && (this.#r = Wr(() => {
			L(this.#n, this.#e(...e), !0);
		})), Vr(() => () => {
			this.#i();
		}), B(this.#n);
	}
}, Fl = new xs(), Il = /* @__PURE__ */ I(null), Ll = null, Rl = null, zl = !1, Bl = J(() => {
	for (let e of Fl.values()) if (e) return !0;
	return !1;
}), Vl = null, Hl = new Pl(() => {
	function e() {
		document.body.setAttribute("style", B(Il) ?? ""), document.body.style.removeProperty("--scrollbar-width"), cc && Ll?.(), L(Il, null);
	}
	function t() {
		Rl !== null && (window.clearTimeout(Rl), Rl = null);
	}
	function n(e, n) {
		t(), zl = !0, Vl = Date.now();
		let r = Vl, i = () => {
			Rl = null, Vl === r && (Wl(Fl) ? zl = !1 : (zl = !1, n()));
		}, a = e === null ? 24 : e;
		Rl = window.setTimeout(i, a);
	}
	function r() {
		B(Il) === null && Fl.size === 0 && !zl && L(Il, document.body.getAttribute("style"), !0);
	}
	return Ds(() => Bl.current, () => {
		if (!Bl.current) return;
		r(), zl = !1;
		let e = getComputedStyle(document.documentElement), t = getComputedStyle(document.body), n = e.scrollbarGutter?.includes("stable") || t.scrollbarGutter?.includes("stable"), i = window.innerWidth - document.documentElement.clientWidth, a = {
			padding: Number.parseInt(t.paddingRight ?? "0", 10) + i,
			margin: Number.parseInt(t.marginRight ?? "0", 10)
		};
		i > 0 && !n && (document.body.style.paddingRight = `${a.padding}px`, document.body.style.marginRight = `${a.margin}px`, document.body.style.setProperty("--scrollbar-width", `${i}px`)), document.body.style.overflow = "hidden", cc && (Ll = Gi(document, "touchmove", (e) => {
			e.target === document.documentElement && (e.touches.length > 1 || e.preventDefault());
		}, { passive: !1 })), Vs(() => {
			document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
		});
	}), Rs(() => () => {
		Ll?.();
	}), {
		get lockMap() {
			return Fl;
		},
		resetBodyStyle: e,
		scheduleCleanupIfNoNewLocks: n,
		cancelPendingCleanup: t,
		ensureInitialStyleCaptured: r
	};
}), Ul = class {
	#e = Nl();
	#t;
	#n = () => null;
	#r;
	locked;
	constructor(e, t = () => null) {
		this.#t = e, this.#n = t, this.#r = Hl.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = J(() => this.#r.lockMap.get(this.#e) ?? !1, (e) => this.#r.lockMap.set(this.#e, e)), Rs(() => {
			if (this.#r.lockMap.delete(this.#e), Wl(this.#r.lockMap)) return;
			let e = this.#n();
			this.#r.scheduleCleanupIfNoNewLocks(e, () => {
				this.#r.resetBodyStyle();
			});
		}));
	}
};
function Wl(e) {
	for (let [t, n] of e) if (n) return !0;
	return !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/scroll-lock/scroll-lock.svelte
function Gl(e, t) {
	E(t, !0);
	let n = q(t, "preventScroll", 3, !0), r = q(t, "restoreScrollDelay", 3, null);
	n() && new Ul(n(), () => r()), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/avatar.svelte.js
var Kl = oc({
	component: "avatar",
	parts: [
		"root",
		"image",
		"fallback"
	]
}), ql = new Cs("Avatar.Root"), Jl = class e {
	static create(t) {
		return ql.set(new e(t));
	}
	opts;
	domContext;
	attachment;
	constructor(e) {
		this.opts = e, this.domContext = new ec(this.opts.ref), this.loadImage = this.loadImage.bind(this), this.attachment = tc(this.opts.ref);
	}
	loadImage(e, t, n) {
		if (this.opts.loadingStatus.current === "loaded") return;
		let r, i = new Image();
		return i.src = e, t !== void 0 && (i.crossOrigin = t), n && (i.referrerPolicy = n), this.opts.loadingStatus.current = "loading", i.onload = () => {
			r = this.domContext.setTimeout(() => {
				this.opts.loadingStatus.current = "loaded";
			}, this.opts.delayMs.current);
		}, i.onerror = () => {
			this.opts.loadingStatus.current = "error";
		}, () => {
			r && this.domContext.clearTimeout(r);
		};
	}
	#e = /* @__PURE__ */ F(() => ({
		id: this.opts.id.current,
		[Kl.root]: "",
		"data-status": this.opts.loadingStatus.current,
		...this.attachment
	}));
	get props() {
		return B(this.#e);
	}
	set props(e) {
		L(this.#e, e);
	}
}, Yl = class e {
	static create(t) {
		return new e(t, ql.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = tc(this.opts.ref), Ds.pre([() => this.opts.src.current, () => this.opts.crossOrigin.current], ([e, t]) => {
			if (!e) {
				this.root.opts.loadingStatus.current = "error";
				return;
			}
			this.root.loadImage(e, t, this.opts.referrerPolicy.current);
		});
	}
	#e = /* @__PURE__ */ F(() => ({
		id: this.opts.id.current,
		style: { display: this.root.opts.loadingStatus.current === "loaded" ? "block" : "none" },
		"data-status": this.root.opts.loadingStatus.current,
		[Kl.image]: "",
		src: this.opts.src.current,
		crossorigin: this.opts.crossOrigin.current,
		referrerpolicy: this.opts.referrerPolicy.current,
		...this.attachment
	}));
	get props() {
		return B(this.#e);
	}
	set props(e) {
		L(this.#e, e);
	}
}, Xl = class e {
	static create(t) {
		return new e(t, ql.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = tc(this.opts.ref);
	}
	#e = /* @__PURE__ */ F(() => this.root.opts.loadingStatus.current === "loaded" ? { display: "none" } : void 0);
	get style() {
		return B(this.#e);
	}
	set style(e) {
		L(this.#e, e);
	}
	#t = /* @__PURE__ */ F(() => ({
		style: this.style,
		"data-status": this.root.opts.loadingStatus.current,
		[Kl.fallback]: "",
		...this.attachment
	}));
	get props() {
		return B(this.#t);
	}
	set props(e) {
		L(this.#t, e);
	}
}, Zl = /* @__PURE__ */ H("<div><!></div>");
function Ql(e, t) {
	let n = ia();
	E(t, !0);
	let r = q(t, "delayMs", 3, 0), i = q(t, "loadingStatus", 15, "loading"), a = q(t, "id", 19, () => yc(n)), o = q(t, "ref", 15, null), s = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"delayMs",
		"loadingStatus",
		"onLoadingStatusChange",
		"child",
		"children",
		"id",
		"ref"
	]), c = Jl.create({
		delayMs: J(() => r()),
		loadingStatus: J(() => i(), (e) => {
			i() !== e && (i(e), t.onLoadingStatusChange?.(e));
		}),
		id: J(() => a()),
		ref: J(() => o(), (e) => o(e))
	}), l = /* @__PURE__ */ F(() => vs(s, c.props));
	var u = U(), d = M(u), f = (e) => {
		var n = U();
		G(M(n), () => t.child, () => ({ props: B(l) })), W(e, n);
	}, p = (e) => {
		var n = Zl();
		fo(n, () => ({ ...B(l) })), G(j(n), () => t.children ?? w), A(n), W(e, n);
	};
	pa(d, (e) => {
		t.child ? e(f) : e(p, -1);
	}), W(e, u), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/components/avatar-image.svelte
var $l = /* @__PURE__ */ H("<img/>");
function eu(e, t) {
	let n = ia();
	E(t, !0);
	let r = q(t, "id", 19, () => yc(n)), i = q(t, "ref", 15, null), a = q(t, "crossorigin", 3, void 0), o = q(t, "referrerpolicy", 3, void 0), s = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"src",
		"child",
		"id",
		"ref",
		"crossorigin",
		"referrerpolicy"
	]), c = Yl.create({
		src: J(() => t.src),
		id: J(() => r()),
		ref: J(() => i(), (e) => i(e)),
		crossOrigin: J(() => a()),
		referrerPolicy: J(() => o())
	}), l = /* @__PURE__ */ F(() => vs(s, c.props));
	var u = U(), d = M(u), f = (e) => {
		var n = U();
		G(M(n), () => t.child, () => ({ props: B(l) })), W(e, n);
	}, p = (e) => {
		var n = $l();
		fo(n, () => ({
			...B(l),
			src: t.src
		})), Ui(n), W(e, n);
	};
	pa(d, (e) => {
		t.child ? e(f) : e(p, -1);
	}), W(e, u), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/components/avatar-fallback.svelte
var tu = /* @__PURE__ */ H("<span><!></span>");
function nu(e, t) {
	let n = ia();
	E(t, !0);
	let r = q(t, "id", 19, () => yc(n)), i = q(t, "ref", 15, null), a = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref"
	]), o = Xl.create({
		id: J(() => r()),
		ref: J(() => i(), (e) => i(e))
	}), s = /* @__PURE__ */ F(() => vs(a, o.props));
	var c = U(), l = M(c), u = (e) => {
		var n = U();
		G(M(n), () => t.child, () => ({ props: B(s) })), W(e, n);
	}, d = (e) => {
		var n = tu();
		fo(n, () => ({ ...B(s) })), G(j(n), () => t.children ?? w), A(n), W(e, n);
	};
	pa(l, (e) => {
		t.child ? e(u) : e(d, -1);
	}), W(e, c), D();
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var ru = [
	"top",
	"right",
	"bottom",
	"left"
], iu = Math.min, au = Math.max, ou = Math.round, su = Math.floor, cu = (e) => ({
	x: e,
	y: e
}), lu = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function uu(e, t, n) {
	return au(e, iu(t, n));
}
function du(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function fu(e) {
	return e.split("-")[0];
}
function pu(e) {
	return e.split("-")[1];
}
function mu(e) {
	return e === "x" ? "y" : "x";
}
function hu(e) {
	return e === "y" ? "height" : "width";
}
function gu(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function _u(e) {
	return mu(gu(e));
}
function vu(e, t, n) {
	n === void 0 && (n = !1);
	let r = pu(e), i = _u(e), a = hu(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Du(o)), [o, Du(o)];
}
function yu(e) {
	let t = Du(e);
	return [
		bu(e),
		t,
		bu(t)
	];
}
function bu(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var xu = ["left", "right"], Su = ["right", "left"], Cu = ["top", "bottom"], wu = ["bottom", "top"];
function Tu(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Su : xu : t ? xu : Su;
		case "left":
		case "right": return t ? Cu : wu;
		default: return [];
	}
}
function Eu(e, t, n, r) {
	let i = pu(e), a = Tu(fu(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(bu)))), a;
}
function Du(e) {
	let t = fu(e);
	return lu[t] + e.slice(t.length);
}
function Ou(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function ku(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Ou(e);
}
function Au(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function ju(e, t, n) {
	let { reference: r, floating: i } = e, a = gu(t), o = _u(t), s = hu(o), c = fu(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (pu(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function Mu(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = du(t, e), p = ku(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Au(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = Au(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var Nu = 50, Pu = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Mu
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = ju(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < Nu && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = ju(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Fu = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = du(e, t) || {};
		if (l == null) return {};
		let d = ku(u), f = {
			x: n,
			y: r
		}, p = _u(i), m = hu(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], ee = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), te = ee ? ee[y] : 0;
		(!te || !await (o.isElement == null ? void 0 : o.isElement(ee))) && (te = s.floating[y] || a.floating[m]);
		let S = b / 2 - x / 2, C = te / 2 - h[m] / 2 - 1, ne = iu(d[_], C), re = iu(d[v], C), w = ne, ie = te - h[m] - re, ae = te / 2 - h[m] / 2 + S, oe = uu(w, ae, ie), se = !c.arrow && pu(i) != null && ae !== oe && a.reference[m] / 2 - (ae < w ? ne : re) - h[m] / 2 < 0, ce = se ? ae < w ? ae - w : ae - ie : 0;
		return {
			[p]: f[p] + ce,
			data: {
				[p]: oe,
				centerOffset: ae - oe - ce,
				...se && { alignmentOffset: ce }
			},
			reset: se
		};
	}
}), Iu = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = du(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = fu(r), _ = gu(o), v = fu(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Du(o)] : yu(o)), x = p !== "none";
			!d && x && b.push(...Eu(o, m, p, y));
			let ee = [o, ...b], te = await s.detectOverflow(t, h), S = [], C = i.flip?.overflows || [];
			if (l && S.push(te[g]), u) {
				let e = vu(r, a, y);
				S.push(te[e[0]], te[e[1]]);
			}
			if (C = [...C, {
				placement: r,
				overflows: S
			}], !S.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = ee[e];
				if (t && (!(u === "alignment" && _ !== gu(t)) || C.every((e) => gu(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: C
					},
					reset: { placement: t }
				};
				let n = C.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = C.filter((e) => {
							if (x) {
								let t = gu(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function Lu(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Ru(e) {
	return ru.some((t) => e[t] >= 0);
}
var zu = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = du(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Lu(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Ru(e)
					} };
				}
				case "escaped": {
					let e = Lu(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Ru(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Bu = /* @__PURE__ */ new Set(["left", "top"]);
async function Vu(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = fu(n), s = pu(n), c = gu(n) === "y", l = Bu.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = du(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var Hu = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Vu(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, Uu = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = du(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = gu(fu(i)), p = mu(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = uu(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = uu(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, Wu = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = du(e, t), u = {
				x: n,
				y: r
			}, d = gu(i), f = mu(d), p = u[f], m = u[d], h = du(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = Bu.has(fu(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Gu = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = du(e, t), u = await o.detectOverflow(t, l), d = fu(i), f = pu(i), p = gu(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = iu(h - u[g], v), x = iu(m - u[_], y), ee = !t.middlewareData.shift, te = b, S = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = y), (r = t.middlewareData.shift) != null && r.enabled.y && (te = v), ee && !f) {
				let e = au(u.left, 0), t = au(u.right, 0), n = au(u.top, 0), r = au(u.bottom, 0);
				p ? S = m - 2 * (e !== 0 || t !== 0 ? e + t : au(u.left, u.right)) : te = h - 2 * (n !== 0 || r !== 0 ? n + r : au(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: S,
				availableHeight: te
			});
			let C = await o.getDimensions(s.floating);
			return m !== C.width || h !== C.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Ku() {
	return typeof window < "u";
}
function qu(e) {
	return Xu(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ju(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yu(e) {
	return ((Xu(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Xu(e) {
	return Ku() ? e instanceof Node || e instanceof Ju(e).Node : !1;
}
function Zu(e) {
	return Ku() ? e instanceof Element || e instanceof Ju(e).Element : !1;
}
function Qu(e) {
	return Ku() ? e instanceof HTMLElement || e instanceof Ju(e).HTMLElement : !1;
}
function $u(e) {
	return !Ku() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ju(e).ShadowRoot;
}
function ed(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = dd(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function td(e) {
	return /^(table|td|th)$/.test(qu(e));
}
function nd(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var rd = /transform|translate|scale|rotate|perspective|filter/, id = /paint|layout|strict|content/, ad = (e) => !!e && e !== "none", od;
function sd(e) {
	let t = Zu(e) ? dd(e) : e;
	return ad(t.transform) || ad(t.translate) || ad(t.scale) || ad(t.rotate) || ad(t.perspective) || !ld() && (ad(t.backdropFilter) || ad(t.filter)) || rd.test(t.willChange || "") || id.test(t.contain || "");
}
function cd(e) {
	let t = pd(e);
	for (; Qu(t) && !ud(t);) {
		if (sd(t)) return t;
		if (nd(t)) return null;
		t = pd(t);
	}
	return null;
}
function ld() {
	return od ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), od;
}
function ud(e) {
	return /^(html|body|#document)$/.test(qu(e));
}
function dd(e) {
	return Ju(e).getComputedStyle(e);
}
function fd(e) {
	return Zu(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function pd(e) {
	if (qu(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || $u(e) && e.host || Yu(e);
	return $u(t) ? t.host : t;
}
function md(e) {
	let t = pd(e);
	return ud(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Qu(t) && ed(t) ? t : md(t);
}
function hd(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = md(e), i = r === e.ownerDocument?.body, a = Ju(r);
	if (i) {
		let e = gd(a);
		return t.concat(a, a.visualViewport || [], ed(r) ? r : [], e && n ? hd(e) : []);
	} else return t.concat(r, hd(r, [], n));
}
function gd(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function _d(e) {
	let t = dd(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Qu(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = ou(n) !== a || ou(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function vd(e) {
	return Zu(e) ? e : e.contextElement;
}
function yd(e) {
	let t = vd(e);
	if (!Qu(t)) return cu(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = _d(t), o = (a ? ou(n.width) : n.width) / r, s = (a ? ou(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var bd = /* @__PURE__ */ cu(0);
function xd(e) {
	let t = Ju(e);
	return !ld() || !t.visualViewport ? bd : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Sd(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Ju(e) ? !1 : t;
}
function Cd(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = vd(e), o = cu(1);
	t && (r ? Zu(r) && (o = yd(r)) : o = yd(e));
	let s = Sd(a, n, r) ? xd(a) : cu(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Ju(a), t = r && Zu(r) ? Ju(r) : r, n = e, i = gd(n);
		for (; i && r && t !== n;) {
			let e = yd(i), t = i.getBoundingClientRect(), r = dd(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Ju(i), i = gd(n);
		}
	}
	return Au({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function wd(e, t) {
	let n = fd(e).scrollLeft;
	return t ? t.left + n : Cd(Yu(e)).left + n;
}
function Td(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - wd(e, n),
		y: n.top + t.scrollTop
	};
}
function Ed(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Yu(r), s = t ? nd(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = cu(1), u = cu(0), d = Qu(r);
	if ((d || !d && !a) && ((qu(r) !== "body" || ed(o)) && (c = fd(r)), d)) {
		let e = Cd(r);
		l = yd(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Td(o, c) : cu(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Dd(e) {
	return Array.from(e.getClientRects());
}
function Od(e) {
	let t = Yu(e), n = fd(e), r = e.ownerDocument.body, i = au(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = au(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + wd(e), s = -n.scrollTop;
	return dd(r).direction === "rtl" && (o += au(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var kd = 25;
function Ad(e, t) {
	let n = Ju(e), r = Yu(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = ld();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = wd(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= kd && (a -= o);
	} else l <= kd && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function jd(e, t) {
	let n = Cd(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Qu(e) ? yd(e) : cu(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Md(e, t, n) {
	let r;
	if (t === "viewport") r = Ad(e, n);
	else if (t === "document") r = Od(Yu(e));
	else if (Zu(t)) r = jd(t, n);
	else {
		let n = xd(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Au(r);
}
function Nd(e, t) {
	let n = pd(e);
	return n === t || !Zu(n) || ud(n) ? !1 : dd(n).position === "fixed" || Nd(n, t);
}
function Pd(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = hd(e, [], !1).filter((e) => Zu(e) && qu(e) !== "body"), i = null, a = dd(e).position === "fixed", o = a ? pd(e) : e;
	for (; Zu(o) && !ud(o);) {
		let t = dd(o), n = sd(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || ed(o) && !n && Nd(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = pd(o);
	}
	return t.set(e, r), r;
}
function Fd(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? nd(t) ? [] : Pd(t, this._c) : [].concat(n), r], o = Md(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Md(t, a[e], i);
		s = au(n.top, s), c = iu(n.right, c), l = iu(n.bottom, l), u = au(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Id(e) {
	let { width: t, height: n } = _d(e);
	return {
		width: t,
		height: n
	};
}
function Ld(e, t, n) {
	let r = Qu(t), i = Yu(t), a = n === "fixed", o = Cd(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = cu(0);
	function l() {
		c.x = wd(i);
	}
	if (r || !r && !a) if ((qu(t) !== "body" || ed(i)) && (s = fd(t)), r) {
		let e = Cd(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Td(i, s) : cu(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Rd(e) {
	return dd(e).position === "static";
}
function zd(e, t) {
	if (!Qu(e) || dd(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Yu(e) === n && (n = n.ownerDocument.body), n;
}
function Bd(e, t) {
	let n = Ju(e);
	if (nd(e)) return n;
	if (!Qu(e)) {
		let t = pd(e);
		for (; t && !ud(t);) {
			if (Zu(t) && !Rd(t)) return t;
			t = pd(t);
		}
		return n;
	}
	let r = zd(e, t);
	for (; r && td(r) && Rd(r);) r = zd(r, t);
	return r && ud(r) && Rd(r) && !sd(r) ? n : r || cd(e) || n;
}
var Vd = async function(e) {
	let t = this.getOffsetParent || Bd, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Ld(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Hd(e) {
	return dd(e).direction === "rtl";
}
var Ud = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Ed,
	getDocumentElement: Yu,
	getClippingRect: Fd,
	getOffsetParent: Bd,
	getElementRects: Vd,
	getClientRects: Dd,
	getDimensions: Id,
	getScale: yd,
	isElement: Zu,
	isRTL: Hd
};
function Wd(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Gd(e, t) {
	let n = null, r, i = Yu(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = su(d), h = su(i.clientWidth - (u + f)), g = su(i.clientHeight - (d + p)), _ = su(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: au(0, iu(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Wd(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function Kd(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = vd(e), u = i || a ? [...l ? hd(l) : [], ...t ? hd(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Gd(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Cd(e) : null;
	c && g();
	function g() {
		let t = Cd(e);
		h && !Wd(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var qd = Hu, Jd = Uu, Yd = Iu, Xd = Gu, Zd = zu, Qd = Fu, $d = Wu, ef = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Ud,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Pu(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region node_modules/bits-ui/dist/internal/floating-svelte/floating-utils.svelte.js
function tf(e) {
	return typeof e == "function" ? e() : e;
}
function nf(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function rf(e, t) {
	let n = nf(e);
	return Math.round(t * n) / n;
}
function af(e) {
	return {
		[`--bits-${e}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
		[`--bits-${e}-content-available-width`]: "var(--bits-floating-available-width)",
		[`--bits-${e}-content-available-height`]: "var(--bits-floating-available-height)",
		[`--bits-${e}-anchor-width`]: "var(--bits-floating-anchor-width)",
		[`--bits-${e}-anchor-height`]: "var(--bits-floating-anchor-height)"
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/floating-svelte/use-floating.svelte.js
function of(e) {
	let t = e.whileElementsMounted, n = /* @__PURE__ */ F(() => tf(e.open) ?? !0), r = /* @__PURE__ */ F(() => tf(e.middleware)), i = /* @__PURE__ */ F(() => tf(e.transform) ?? !0), a = /* @__PURE__ */ F(() => tf(e.placement) ?? "bottom"), o = /* @__PURE__ */ F(() => tf(e.strategy) ?? "absolute"), s = /* @__PURE__ */ F(() => tf(e.sideOffset) ?? 0), c = /* @__PURE__ */ F(() => tf(e.alignOffset) ?? 0), l = e.reference, u = /* @__PURE__ */ I(0), d = /* @__PURE__ */ I(0), f = Lo(null), p = /* @__PURE__ */ I(Dt(B(o))), m = /* @__PURE__ */ I(Dt(B(a))), h = /* @__PURE__ */ I(Dt({})), g = /* @__PURE__ */ I(!1), _ = !1, v = 0, y = /* @__PURE__ */ F(() => {
		let e = f.current ? rf(f.current, B(u)) : B(u), t = f.current ? rf(f.current, B(d)) : B(d);
		return B(i) ? {
			position: B(p),
			left: "0",
			top: "0",
			transform: `translate(${e}px, ${t}px)`,
			...f.current && nf(f.current) >= 1.5 && { willChange: "transform" }
		} : {
			position: B(p),
			left: `${e}px`,
			top: `${t}px`
		};
	}), b;
	function x() {
		if (l.current === null || f.current === null) return;
		let e = l.current, t = f.current, i = ++v;
		ef(e, t, {
			middleware: B(r),
			placement: B(a),
			strategy: B(o)
		}).then((r) => {
			if (i === v && !(l.current !== e || f.current !== t)) {
				if (sf(e)) {
					L(h, {
						...B(h),
						hide: {
							...B(h).hide,
							referenceHidden: !0
						}
					}, !0);
					return;
				}
				if (!B(n) && B(u) !== 0 && B(d) !== 0) {
					let e = Math.max(Math.abs(B(s)), Math.abs(B(c)), 15);
					if (r.x <= e && r.y <= e) return;
				}
				L(u, r.x, !0), L(d, r.y, !0), L(p, r.strategy, !0), L(m, r.placement, !0), L(h, r.middlewareData, !0), L(g, !0);
			}
		});
	}
	function ee() {
		typeof b == "function" && (b(), b = void 0), v++;
	}
	function te() {
		if (ee(), t === void 0) {
			x();
			return;
		}
		B(n) && (l.current === null || f.current === null || (b = t(l.current, f.current, x)));
	}
	function S() {
		!B(n) && f.current === null && L(g, !1);
	}
	function C() {
		return [
			B(r),
			B(a),
			B(o),
			B(s),
			B(c),
			B(n)
		];
	}
	return Vr(() => {
		t === void 0 && B(n) && x();
	}), Vr(te), Vr(() => {
		if (t !== void 0) {
			if (C(), !B(n)) {
				_ = !1;
				return;
			}
			if (!B(g)) {
				_ = !1;
				return;
			}
			if (!_) {
				_ = !0;
				return;
			}
			x();
		}
	}), Vr(S), Vr(() => ee), {
		floating: f,
		reference: l,
		get strategy() {
			return B(p);
		},
		get placement() {
			return B(m);
		},
		get middlewareData() {
			return B(h);
		},
		get isPositioned() {
			return B(g);
		},
		get floatingStyles() {
			return B(y);
		},
		get update() {
			return x;
		}
	};
}
function sf(e) {
	return e instanceof Element ? !e.isConnected || e instanceof HTMLElement && e.hidden ? !0 : e.getClientRects().length === 0 : !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/use-floating-layer.svelte.js
var cf = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, lf = new Cs("Floating.Root"), uf = new Cs("Floating.Content"), df = new Cs("Floating.Root"), ff = class e {
	static create(t = !1) {
		return t ? df.set(new e()) : lf.set(new e());
	}
	anchorNode = Lo(null);
	customAnchorNode = Lo(null);
	triggerNode = Lo(null);
	constructor() {
		Vr(() => {
			this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
		});
	}
}, pf = class e {
	static create(t, n = !1) {
		return n ? uf.set(new e(t, df.get())) : uf.set(new e(t, lf.get()));
	}
	opts;
	root;
	contentRef = Lo(null);
	wrapperRef = Lo(null);
	arrowRef = Lo(null);
	contentAttachment = tc(this.contentRef);
	wrapperAttachment = tc(this.wrapperRef);
	arrowAttachment = tc(this.arrowRef);
	arrowId = Lo(Nl());
	#e = /* @__PURE__ */ F(() => {
		if (typeof this.opts.style == "string") return us(this.opts.style);
		if (!this.opts.style) return {};
	});
	#t = void 0;
	#n = new Ms(() => this.arrowRef.current ?? void 0);
	#r = /* @__PURE__ */ F(() => this.#n?.width ?? 0);
	#i = /* @__PURE__ */ F(() => this.#n?.height ?? 0);
	#a = /* @__PURE__ */ F(() => this.opts.side?.current + (this.opts.align.current === "center" ? "" : `-${this.opts.align.current}`));
	#o = /* @__PURE__ */ F(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
	#s = /* @__PURE__ */ F(() => B(this.#o).length > 0);
	get hasExplicitBoundaries() {
		return B(this.#s);
	}
	set hasExplicitBoundaries(e) {
		L(this.#s, e);
	}
	#c = /* @__PURE__ */ F(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: B(this.#o).filter(hc),
		altBoundary: this.hasExplicitBoundaries
	}));
	get detectOverflowOptions() {
		return B(this.#c);
	}
	set detectOverflowOptions(e) {
		L(this.#c, e);
	}
	#l = /* @__PURE__ */ I(void 0);
	#u = /* @__PURE__ */ I(void 0);
	#d = /* @__PURE__ */ I(void 0);
	#f = /* @__PURE__ */ I(void 0);
	#p = /* @__PURE__ */ F(() => [
		qd({
			mainAxis: this.opts.sideOffset.current + B(this.#i),
			alignmentAxis: this.opts.alignOffset.current
		}),
		this.opts.avoidCollisions.current && Jd({
			mainAxis: !0,
			crossAxis: !1,
			limiter: this.opts.sticky.current === "partial" ? $d() : void 0,
			...this.detectOverflowOptions
		}),
		this.opts.avoidCollisions.current && Yd({ ...this.detectOverflowOptions }),
		Xd({
			...this.detectOverflowOptions,
			apply: ({ rects: e, availableWidth: t, availableHeight: n }) => {
				let { width: r, height: i } = e.reference;
				L(this.#l, t, !0), L(this.#u, n, !0), L(this.#d, r, !0), L(this.#f, i, !0);
			}
		}),
		this.arrowRef.current && Qd({
			element: this.arrowRef.current,
			padding: this.opts.arrowPadding.current
		}),
		hf({
			arrowWidth: B(this.#r),
			arrowHeight: B(this.#i)
		}),
		this.opts.hideWhenDetached.current && Zd({
			strategy: "referenceHidden",
			...this.detectOverflowOptions
		})
	].filter(Boolean));
	get middleware() {
		return B(this.#p);
	}
	set middleware(e) {
		L(this.#p, e);
	}
	floating;
	#m = /* @__PURE__ */ F(() => _f(this.floating.placement));
	get placedSide() {
		return B(this.#m);
	}
	set placedSide(e) {
		L(this.#m, e);
	}
	#h = /* @__PURE__ */ F(() => vf(this.floating.placement));
	get placedAlign() {
		return B(this.#h);
	}
	set placedAlign(e) {
		L(this.#h, e);
	}
	#g = /* @__PURE__ */ F(() => this.floating.middlewareData.arrow?.x ?? 0);
	get arrowX() {
		return B(this.#g);
	}
	set arrowX(e) {
		L(this.#g, e);
	}
	#_ = /* @__PURE__ */ F(() => this.floating.middlewareData.arrow?.y ?? 0);
	get arrowY() {
		return B(this.#_);
	}
	set arrowY(e) {
		L(this.#_, e);
	}
	#v = /* @__PURE__ */ F(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
	get cannotCenterArrow() {
		return B(this.#v);
	}
	set cannotCenterArrow(e) {
		L(this.#v, e);
	}
	#y = /* @__PURE__ */ I();
	get contentZIndex() {
		return B(this.#y);
	}
	set contentZIndex(e) {
		L(this.#y, e, !0);
	}
	#b = /* @__PURE__ */ F(() => cf[this.placedSide]);
	get arrowBaseSide() {
		return B(this.#b);
	}
	set arrowBaseSide(e) {
		L(this.#b, e);
	}
	#x = /* @__PURE__ */ F(() => ({
		id: this.opts.wrapperId.current,
		"data-bits-floating-content-wrapper": "",
		style: {
			...this.floating.floatingStyles,
			transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: this.contentZIndex,
			"--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
			"--bits-floating-available-width": `${B(this.#l)}px`,
			"--bits-floating-available-height": `${B(this.#u)}px`,
			"--bits-floating-anchor-width": `${B(this.#d)}px`,
			"--bits-floating-anchor-height": `${B(this.#f)}px`,
			...this.floating.middlewareData.hide?.referenceHidden && {
				visibility: "hidden",
				"pointer-events": "none"
			},
			...B(this.#e)
		},
		dir: this.opts.dir.current,
		...this.wrapperAttachment
	}));
	get wrapperProps() {
		return B(this.#x);
	}
	set wrapperProps(e) {
		L(this.#x, e);
	}
	#S = /* @__PURE__ */ F(() => ({
		"data-side": this.placedSide,
		"data-align": this.placedAlign,
		style: hs({ ...B(this.#e) }),
		...this.contentAttachment
	}));
	get props() {
		return B(this.#S);
	}
	set props(e) {
		L(this.#S, e);
	}
	#C = /* @__PURE__ */ F(() => ({
		position: "absolute",
		left: this.arrowX ? `${this.arrowX}px` : void 0,
		top: this.arrowY ? `${this.arrowY}px` : void 0,
		[this.arrowBaseSide]: 0,
		"transform-origin": {
			top: "",
			right: "0 0",
			bottom: "center 0",
			left: "100% 0"
		}[this.placedSide],
		transform: {
			top: "translateY(100%)",
			right: "translateY(50%) rotate(90deg) translateX(-50%)",
			bottom: "rotate(180deg)",
			left: "translateY(50%) rotate(-90deg) translateX(50%)"
		}[this.placedSide],
		visibility: this.cannotCenterArrow ? "hidden" : void 0
	}));
	get arrowStyle() {
		return B(this.#C);
	}
	set arrowStyle(e) {
		L(this.#C, e);
	}
	constructor(e, t) {
		this.opts = e, this.root = t, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), Ds(() => e.customAnchor.current, (e) => {
			this.root.customAnchorNode.current = e;
		}), this.floating = of({
			strategy: () => this.opts.strategy.current,
			placement: () => B(this.#a),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...e) => Kd(...e, { animationFrame: this.#t?.current === "always" }),
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		}), Vr(() => {
			this.floating.isPositioned && this.opts.onPlaced?.current();
		}), Ds(() => this.contentRef.current, (e) => {
			if (!e || !this.opts.enabled.current) return;
			let t = Qs(e), n = t.requestAnimationFrame(() => {
				if (this.contentRef.current !== e || !this.opts.enabled.current) return;
				let n = t.getComputedStyle(e).zIndex;
				n !== this.contentZIndex && (this.contentZIndex = n);
			});
			return () => {
				t.cancelAnimationFrame(n);
			};
		}), Vr(() => {
			this.floating.floating.current = this.wrapperRef.current;
		});
	}
}, mf = class e {
	static create(t, n = !1) {
		return n ? new e(t, df.get()) : new e(t, lf.get());
	}
	opts;
	root;
	constructor(e, t) {
		this.opts = e, this.root = t, e.virtualEl && e.virtualEl.current ? t.triggerNode = Io(e.virtualEl.current) : t.triggerNode = e.ref;
	}
};
function hf(e) {
	return {
		name: "transformOrigin",
		options: e,
		fn(t) {
			let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = gf(n), u = {
				start: "0%",
				center: "50%",
				end: "100%"
			}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
			return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
				x: p,
				y: m
			} };
		}
	};
}
function gf(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
function _f(e) {
	return gf(e)[0];
}
function vf(e) {
	return gf(e)[1];
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer.svelte
function yf(e, t) {
	E(t, !0);
	let n = q(t, "tooltip", 3, !1);
	ff.create(n());
	var r = U();
	G(M(r), () => t.children ?? w), W(e, r), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-anchor.svelte
function bf(e, t) {
	E(t, !0);
	let n = q(t, "tooltip", 3, !1);
	mf.create({
		id: J(() => t.id),
		virtualEl: J(() => t.virtualEl),
		ref: t.ref
	}, n());
	var r = U();
	G(M(r), () => t.children ?? w), W(e, r), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content.svelte
function xf(e, t) {
	E(t, !0);
	let n = q(t, "side", 3, "bottom"), r = q(t, "sideOffset", 3, 0), i = q(t, "align", 3, "center"), a = q(t, "alignOffset", 3, 0), o = q(t, "arrowPadding", 3, 0), s = q(t, "avoidCollisions", 3, !0), c = q(t, "collisionBoundary", 19, () => []), l = q(t, "collisionPadding", 3, 0), u = q(t, "hideWhenDetached", 3, !1), d = q(t, "onPlaced", 3, () => {}), f = q(t, "sticky", 3, "partial"), p = q(t, "updatePositionStrategy", 3, "optimized"), m = q(t, "strategy", 3, "fixed"), h = q(t, "dir", 3, "ltr"), g = q(t, "style", 19, () => ({})), _ = q(t, "wrapperId", 19, Nl), v = q(t, "customAnchor", 3, null), y = q(t, "tooltip", 3, !1), b = pf.create({
		side: J(() => n()),
		sideOffset: J(() => r()),
		align: J(() => i()),
		alignOffset: J(() => a()),
		id: J(() => t.id),
		arrowPadding: J(() => o()),
		avoidCollisions: J(() => s()),
		collisionBoundary: J(() => c()),
		collisionPadding: J(() => l()),
		hideWhenDetached: J(() => u()),
		onPlaced: J(() => d()),
		sticky: J(() => f()),
		updatePositionStrategy: J(() => p()),
		strategy: J(() => m()),
		dir: J(() => h()),
		style: J(() => g()),
		enabled: J(() => t.enabled),
		wrapperId: J(() => _()),
		customAnchor: J(() => v())
	}, y()), x = /* @__PURE__ */ F(() => vs(b.wrapperProps, { style: { pointerEvents: "auto" } }));
	var ee = U();
	G(M(ee), () => t.content ?? w, () => ({
		props: b.props,
		wrapperProps: B(x)
	})), W(e, ee), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content-static.svelte
function Sf(e, t) {
	E(t, !0), Do(() => {
		t.onPlaced?.();
	});
	var n = U();
	G(M(n), () => t.content ?? w, () => ({
		props: {},
		wrapperProps: {}
	})), W(e, n), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-content.svelte
function Cf(e, t) {
	let n = q(t, "isStatic", 3, !1), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"content",
		"isStatic",
		"onPlaced"
	]);
	var i = U(), a = M(i), o = (e) => {
		Sf(e, {
			get content() {
				return t.content;
			},
			get onPlaced() {
				return t.onPlaced;
			}
		});
	}, s = (e) => {
		xf(e, Eo({
			get content() {
				return t.content;
			},
			get onPlaced() {
				return t.onPlaced;
			}
		}, () => r));
	};
	pa(a, (e) => {
		n() ? e(o) : e(s, -1);
	}), W(e, i);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-inner.svelte
var wf = /* @__PURE__ */ H("<!> <!>", 1);
function Tf(e, t) {
	E(t, !0);
	let n = q(t, "interactOutsideBehavior", 3, "close"), r = q(t, "trapFocus", 3, !0), i = q(t, "isValidEvent", 3, () => !1), a = q(t, "customAnchor", 3, null), o = q(t, "isStatic", 3, !1), s = q(t, "tooltip", 3, !1), c = q(t, "contentPointerEvents", 3, "auto"), l = /* @__PURE__ */ K(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled.ref.tooltip.contentPointerEvents".split(".")), u = /* @__PURE__ */ F(() => t.preventScroll ?? !0), d = /* @__PURE__ */ F(() => t.strategy ?? (B(u) ? "fixed" : "absolute"));
	Cf(e, {
		get isStatic() {
			return o();
		},
		get id() {
			return t.id;
		},
		get side() {
			return t.side;
		},
		get sideOffset() {
			return t.sideOffset;
		},
		get align() {
			return t.align;
		},
		get alignOffset() {
			return t.alignOffset;
		},
		get arrowPadding() {
			return t.arrowPadding;
		},
		get avoidCollisions() {
			return t.avoidCollisions;
		},
		get collisionBoundary() {
			return t.collisionBoundary;
		},
		get collisionPadding() {
			return t.collisionPadding;
		},
		get sticky() {
			return t.sticky;
		},
		get hideWhenDetached() {
			return t.hideWhenDetached;
		},
		get updatePositionStrategy() {
			return t.updatePositionStrategy;
		},
		get strategy() {
			return B(d);
		},
		get dir() {
			return t.dir;
		},
		get wrapperId() {
			return t.wrapperId;
		},
		get style() {
			return t.style;
		},
		get onPlaced() {
			return t.onPlaced;
		},
		get customAnchor() {
			return a();
		},
		get enabled() {
			return t.enabled;
		},
		get tooltip() {
			return s();
		},
		content: (e, a) => {
			let o = () => a?.().props, s = () => a?.().wrapperProps;
			var d = wf(), f = M(d), p = (e) => {
				Gl(e, { get preventScroll() {
					return B(u);
				} });
			}, m = (e) => {
				Gl(e, { get preventScroll() {
					return B(u);
				} });
			};
			pa(f, (e) => {
				t.forceMount && t.enabled ? e(p) : t.forceMount || e(m, 1);
			}), Tl(N(f, 2), {
				get onOpenAutoFocus() {
					return t.onOpenAutoFocus;
				},
				get onCloseAutoFocus() {
					return t.onCloseAutoFocus;
				},
				get loop() {
					return t.loop;
				},
				get enabled() {
					return t.enabled;
				},
				get trapFocus() {
					return r();
				},
				get forceMount() {
					return t.forceMount;
				},
				get ref() {
					return t.ref;
				},
				focusScope: (e, r) => {
					let a = () => r?.().props;
					Sl(e, {
						get onEscapeKeydown() {
							return t.onEscapeKeydown;
						},
						get escapeKeydownBehavior() {
							return t.escapeKeydownBehavior;
						},
						get enabled() {
							return t.enabled;
						},
						get ref() {
							return t.ref;
						},
						children: (e, r) => {
							yl(e, {
								get id() {
									return t.id;
								},
								get onInteractOutside() {
									return t.onInteractOutside;
								},
								get onFocusOutside() {
									return t.onFocusOutside;
								},
								get interactOutsideBehavior() {
									return n();
								},
								get isValidEvent() {
									return i();
								},
								get enabled() {
									return t.enabled;
								},
								get ref() {
									return t.ref;
								},
								children: (e, n) => {
									let r = () => n?.().props;
									Ml(e, {
										get id() {
											return t.id;
										},
										get preventOverflowTextSelection() {
											return t.preventOverflowTextSelection;
										},
										get onPointerDown() {
											return t.onPointerDown;
										},
										get onPointerUp() {
											return t.onPointerUp;
										},
										get enabled() {
											return t.enabled;
										},
										get ref() {
											return t.ref;
										},
										children: (e, n) => {
											var i = U(), u = M(i);
											{
												let e = /* @__PURE__ */ F(() => ({
													props: vs(l, o(), r(), a(), { style: { pointerEvents: c() } }),
													wrapperProps: s()
												}));
												G(u, () => t.popper ?? w, () => B(e));
											}
											W(e, i);
										},
										$$slots: { default: !0 }
									});
								},
								$$slots: { default: !0 }
							});
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { focusScope: !0 }
			}), W(e, d);
		},
		$$slots: { content: !0 }
	}), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer.svelte
function Ef(e, t) {
	let n = q(t, "interactOutsideBehavior", 3, "close"), r = q(t, "trapFocus", 3, !0), i = q(t, "isValidEvent", 3, () => !1), a = q(t, "customAnchor", 3, null), o = q(t, "isStatic", 3, !1), s = /* @__PURE__ */ K(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.open.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.ref.shouldRender".split("."));
	var c = U(), l = M(c), u = (e) => {
		Tf(e, Eo({
			get popper() {
				return t.popper;
			},
			get onEscapeKeydown() {
				return t.onEscapeKeydown;
			},
			get escapeKeydownBehavior() {
				return t.escapeKeydownBehavior;
			},
			get preventOverflowTextSelection() {
				return t.preventOverflowTextSelection;
			},
			get id() {
				return t.id;
			},
			get onPointerDown() {
				return t.onPointerDown;
			},
			get onPointerUp() {
				return t.onPointerUp;
			},
			get side() {
				return t.side;
			},
			get sideOffset() {
				return t.sideOffset;
			},
			get align() {
				return t.align;
			},
			get alignOffset() {
				return t.alignOffset;
			},
			get arrowPadding() {
				return t.arrowPadding;
			},
			get avoidCollisions() {
				return t.avoidCollisions;
			},
			get collisionBoundary() {
				return t.collisionBoundary;
			},
			get collisionPadding() {
				return t.collisionPadding;
			},
			get sticky() {
				return t.sticky;
			},
			get hideWhenDetached() {
				return t.hideWhenDetached;
			},
			get updatePositionStrategy() {
				return t.updatePositionStrategy;
			},
			get strategy() {
				return t.strategy;
			},
			get dir() {
				return t.dir;
			},
			get preventScroll() {
				return t.preventScroll;
			},
			get wrapperId() {
				return t.wrapperId;
			},
			get style() {
				return t.style;
			},
			get onPlaced() {
				return t.onPlaced;
			},
			get customAnchor() {
				return a();
			},
			get isStatic() {
				return o();
			},
			get enabled() {
				return t.open;
			},
			get onInteractOutside() {
				return t.onInteractOutside;
			},
			get onCloseAutoFocus() {
				return t.onCloseAutoFocus;
			},
			get onOpenAutoFocus() {
				return t.onOpenAutoFocus;
			},
			get interactOutsideBehavior() {
				return n();
			},
			get loop() {
				return t.loop;
			},
			get trapFocus() {
				return r();
			},
			get isValidEvent() {
				return i();
			},
			get onFocusOutside() {
				return t.onFocusOutside;
			},
			forceMount: !1,
			get ref() {
				return t.ref;
			}
		}, () => s));
	};
	pa(l, (e) => {
		t.shouldRender && e(u);
	}), W(e, c);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-force-mount.svelte
function Df(e, t) {
	let n = q(t, "interactOutsideBehavior", 3, "close"), r = q(t, "trapFocus", 3, !0), i = q(t, "isValidEvent", 3, () => !1), a = q(t, "customAnchor", 3, null), o = q(t, "isStatic", 3, !1), s = /* @__PURE__ */ K(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled".split("."));
	Tf(e, Eo({
		get popper() {
			return t.popper;
		},
		get onEscapeKeydown() {
			return t.onEscapeKeydown;
		},
		get escapeKeydownBehavior() {
			return t.escapeKeydownBehavior;
		},
		get preventOverflowTextSelection() {
			return t.preventOverflowTextSelection;
		},
		get id() {
			return t.id;
		},
		get onPointerDown() {
			return t.onPointerDown;
		},
		get onPointerUp() {
			return t.onPointerUp;
		},
		get side() {
			return t.side;
		},
		get sideOffset() {
			return t.sideOffset;
		},
		get align() {
			return t.align;
		},
		get alignOffset() {
			return t.alignOffset;
		},
		get arrowPadding() {
			return t.arrowPadding;
		},
		get avoidCollisions() {
			return t.avoidCollisions;
		},
		get collisionBoundary() {
			return t.collisionBoundary;
		},
		get collisionPadding() {
			return t.collisionPadding;
		},
		get sticky() {
			return t.sticky;
		},
		get hideWhenDetached() {
			return t.hideWhenDetached;
		},
		get updatePositionStrategy() {
			return t.updatePositionStrategy;
		},
		get strategy() {
			return t.strategy;
		},
		get dir() {
			return t.dir;
		},
		get preventScroll() {
			return t.preventScroll;
		},
		get wrapperId() {
			return t.wrapperId;
		},
		get style() {
			return t.style;
		},
		get onPlaced() {
			return t.onPlaced;
		},
		get customAnchor() {
			return a();
		},
		get isStatic() {
			return o();
		},
		get enabled() {
			return t.enabled;
		},
		get onInteractOutside() {
			return t.onInteractOutside;
		},
		get onCloseAutoFocus() {
			return t.onCloseAutoFocus;
		},
		get onOpenAutoFocus() {
			return t.onOpenAutoFocus;
		},
		get interactOutsideBehavior() {
			return n();
		},
		get loop() {
			return t.loop;
		},
		get trapFocus() {
			return r();
		},
		get isValidEvent() {
			return i();
		},
		get onFocusOutside() {
			return t.onFocusOutside;
		}
	}, () => s, { forceMount: !0 }));
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/mounted.svelte
function Of(e, t) {
	E(t, !0);
	let n = q(t, "mounted", 15, !1), r = q(t, "onMountedChange", 3, vc);
	zs(() => (n(!0), r()(!0), () => {
		n(!1), r()(!1);
	})), D();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/safe-polygon.svelte.js
function kf(e, t) {
	let [n, r] = e, i = !1, a = t.length;
	for (let e = 0, o = a - 1; e < a; o = e++) {
		let [a, s] = t[e] ?? [0, 0], [c, l] = t[o] ?? [0, 0];
		s >= r != l >= r && n <= (c - a) * (r - s) / (l - s) + a && (i = !i);
	}
	return i;
}
function Af(e, t) {
	return e[0] >= t.left && e[0] <= t.right && e[1] >= t.top && e[1] <= t.bottom;
}
function jf(e, t) {
	let n = e.left + e.width / 2, r = e.top + e.height / 2, i = t.left + t.width / 2, a = t.top + t.height / 2, o = i - n, s = a - r;
	return Math.abs(o) > Math.abs(s) ? o > 0 ? "right" : "left" : s > 0 ? "bottom" : "top";
}
var Mf = class {
	#e;
	#t;
	#n;
	#r = null;
	#i = null;
	#a = [];
	#o = null;
	#s = null;
	#c = null;
	#l() {
		this.#s !== null && (cancelAnimationFrame(this.#s), this.#s = null);
	}
	#u() {
		this.#l(), this.#s = requestAnimationFrame(() => {
			this.#s = null, !(!this.#r || !this.#i) && (this.#m(), this.#e.onPointerExit());
		});
	}
	#d() {
		this.#c !== null && (clearTimeout(this.#c), this.#c = null);
	}
	#f() {
		this.#n !== null && (this.#d(), this.#c = window.setTimeout(() => {
			this.#c = null, !(!this.#r || !this.#i) && (this.#m(), this.#e.onPointerExit());
		}, this.#n));
	}
	constructor(e) {
		this.#e = e, this.#t = e.buffer ?? 1;
		let t = e.transitIntentTimeout;
		this.#n = typeof t == "number" && t > 0 ? t : null, Ds([
			e.triggerNode,
			e.contentNode,
			e.enabled
		], ([e, t, n]) => {
			if (!e || !t || !n) {
				this.#o = null, this.#m();
				return;
			}
			return this.#o && this.#o !== e && this.#m(), this.#o = e, [
				Gi(Zs(e), "pointermove", (n) => {
					this.#p([n.clientX, n.clientY], e, t);
				}),
				Gi(e, "pointerleave", (e) => {
					let n = e.relatedTarget;
					if (dc(n) && t.contains(n)) return;
					let r = this.#e.ignoredTargets?.() ?? [];
					dc(n) && r.some((e) => e === n || e.contains(n)) || (this.#a = dc(n) && r.length > 0 ? r.filter((e) => n.contains(e)) : [], this.#r = [e.clientX, e.clientY], this.#i = "content", this.#u());
				}),
				Gi(e, "pointerenter", () => {
					this.#m();
				}),
				Gi(t, "pointerenter", () => {
					this.#m();
				}),
				Gi(t, "pointerleave", (t) => {
					let n = t.relatedTarget;
					dc(n) && e.contains(n) || (this.#r = [t.clientX, t.clientY], this.#i = "trigger", this.#u());
				})
			].reduce((e, t) => () => {
				e(), t();
			}, () => {});
		});
	}
	#p(e, t, n) {
		if (!this.#r || !this.#i) return;
		this.#l(), this.#f();
		let r = t.getBoundingClientRect(), i = n.getBoundingClientRect();
		if (this.#i === "content" && Af(e, i)) {
			this.#m();
			return;
		}
		if (this.#i === "trigger" && Af(e, r)) {
			this.#m();
			return;
		}
		if (this.#i === "content" && this.#a.length > 0) for (let t of this.#a) {
			let n = t.getBoundingClientRect();
			if (Af(e, n)) return;
			let i = jf(r, n), a = this.#h(r, n, i);
			if (a && kf(e, a)) return;
		}
		let a = jf(r, i), o = this.#h(r, i, a);
		if (o && kf(e, o)) return;
		let s = this.#i === "content" ? i : r;
		kf(e, this.#g(this.#r, s, a, this.#i)) || (this.#m(), this.#e.onPointerExit());
	}
	#m() {
		this.#r = null, this.#i = null, this.#a = [], this.#l(), this.#d();
	}
	#h(e, t, n) {
		let r = this.#t;
		switch (n) {
			case "top": return [
				[Math.min(e.left, t.left) - r, e.top],
				[Math.min(e.left, t.left) - r, t.bottom],
				[Math.max(e.right, t.right) + r, t.bottom],
				[Math.max(e.right, t.right) + r, e.top]
			];
			case "bottom": return [
				[Math.min(e.left, t.left) - r, e.bottom],
				[Math.min(e.left, t.left) - r, t.top],
				[Math.max(e.right, t.right) + r, t.top],
				[Math.max(e.right, t.right) + r, e.bottom]
			];
			case "left": return [
				[e.left, Math.min(e.top, t.top) - r],
				[t.right, Math.min(e.top, t.top) - r],
				[t.right, Math.max(e.bottom, t.bottom) + r],
				[e.left, Math.max(e.bottom, t.bottom) + r]
			];
			case "right": return [
				[e.right, Math.min(e.top, t.top) - r],
				[t.left, Math.min(e.top, t.top) - r],
				[t.left, Math.max(e.bottom, t.bottom) + r],
				[e.right, Math.max(e.bottom, t.bottom) + r]
			];
		}
	}
	#g(e, t, n, r) {
		let i = this.#t * 4, [a, o] = e;
		switch (r === "trigger" ? this.#_(n) : n) {
			case "top": return [
				[a - i, o + i],
				[a + i, o + i],
				[t.right + i, t.bottom],
				[t.right + i, t.top],
				[t.left - i, t.top],
				[t.left - i, t.bottom]
			];
			case "bottom": return [
				[a - i, o - i],
				[a + i, o - i],
				[t.right + i, t.top],
				[t.right + i, t.bottom],
				[t.left - i, t.bottom],
				[t.left - i, t.top]
			];
			case "left": return [
				[a + i, o - i],
				[a + i, o + i],
				[t.right, t.bottom + i],
				[t.left, t.bottom + i],
				[t.left, t.top - i],
				[t.right, t.top - i]
			];
			case "right": return [
				[a - i, o - i],
				[a - i, o + i],
				[t.left, t.bottom + i],
				[t.right, t.bottom + i],
				[t.right, t.top - i],
				[t.left, t.top - i]
			];
		}
	}
	#_(e) {
		switch (e) {
			case "top": return "bottom";
			case "bottom": return "top";
			case "left": return "right";
			case "right": return "left";
		}
	}
}, Nf = oc({
	component: "label",
	parts: ["root"]
}), Pf = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = tc(this.opts.ref), this.onmousedown = this.onmousedown.bind(this);
	}
	onmousedown(e) {
		e.detail > 1 && e.preventDefault();
	}
	#e = /* @__PURE__ */ F(() => ({
		id: this.opts.id.current,
		[Nf.root]: "",
		onmousedown: this.onmousedown,
		...this.attachment
	}));
	get props() {
		return B(this.#e);
	}
	set props(e) {
		L(this.#e, e);
	}
}, Ff = /* @__PURE__ */ H("<label><!></label>");
function If(e, t) {
	let n = ia();
	E(t, !0);
	let r = q(t, "id", 19, () => yc(n)), i = q(t, "ref", 15, null), a = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref",
		"for"
	]), o = Pf.create({
		id: J(() => r()),
		ref: J(() => i(), (e) => i(e))
	}), s = /* @__PURE__ */ F(() => vs(a, o.props, { for: t.for }));
	var c = U(), l = M(c), u = (e) => {
		var n = U();
		G(M(n), () => t.child, () => ({ props: B(s) })), W(e, n);
	}, d = (e) => {
		var n = Ff();
		fo(n, () => ({
			...B(s),
			for: t.for
		})), G(j(n), () => t.children ?? w), A(n), W(e, n);
	};
	pa(l, (e) => {
		t.child ? e(u) : e(d, -1);
	}), W(e, c), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/link-preview.svelte.js
var Lf = oc({
	component: "link-preview",
	parts: ["content", "trigger"]
}), Rf = new Cs("LinkPreview.Root"), zf = class e {
	static create(t) {
		return Rf.set(new e(t));
	}
	opts;
	#e = /* @__PURE__ */ I(!1);
	get hasSelection() {
		return B(this.#e);
	}
	set hasSelection(e) {
		L(this.#e, e, !0);
	}
	#t = /* @__PURE__ */ I(!1);
	get isPointerDownOnContent() {
		return B(this.#t);
	}
	set isPointerDownOnContent(e) {
		L(this.#t, e, !0);
	}
	#n = /* @__PURE__ */ I(!1);
	get containsSelection() {
		return B(this.#n);
	}
	set containsSelection(e) {
		L(this.#n, e, !0);
	}
	timeout = null;
	#r = /* @__PURE__ */ I(null);
	get contentNode() {
		return B(this.#r);
	}
	set contentNode(e) {
		L(this.#r, e, !0);
	}
	#i = /* @__PURE__ */ I(!1);
	get contentMounted() {
		return B(this.#i);
	}
	set contentMounted(e) {
		L(this.#i, e, !0);
	}
	contentPresence;
	#a = /* @__PURE__ */ I(null);
	get triggerNode() {
		return B(this.#a);
	}
	set triggerNode(e) {
		L(this.#a, e, !0);
	}
	isOpening = !1;
	domContext = new ec(() => null);
	constructor(e) {
		this.opts = e, this.contentPresence = new _c({
			ref: J(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		}), Ds(() => this.opts.open.current, (e) => {
			if (!e) {
				this.hasSelection = !1;
				return;
			}
			if (!this.domContext) return;
			let t = Gi(this.domContext.getDocument(), "pointerup", () => {
				this.containsSelection = !1, this.isPointerDownOnContent = !1, Bs(1, () => {
					this.domContext.getDocument().getSelection()?.toString() === "" ? this.hasSelection = !1 : this.hasSelection = !0;
				});
			});
			if (!this.contentNode) return;
			let n = Nc(this.contentNode);
			for (let e of n) e.setAttribute("tabindex", "-1");
			return () => {
				t(), this.hasSelection = !1, this.isPointerDownOnContent = !1;
			};
		});
	}
	clearTimeout() {
		this.timeout &&= (this.domContext.clearTimeout(this.timeout), null);
	}
	handleOpen() {
		this.clearTimeout(), !(this.opts.open.current || this.opts.disabled.current) && (this.isOpening = !0, this.timeout = this.domContext.setTimeout(() => {
			this.isOpening &&= (this.opts.open.current = !0, !1);
		}, this.opts.openDelay.current));
	}
	immediateClose() {
		this.clearTimeout(), this.isOpening = !1, this.opts.open.current = !1;
	}
	handleClose() {
		this.isOpening = !1, this.clearTimeout(), !this.isPointerDownOnContent && !this.hasSelection && (this.timeout = this.domContext.setTimeout(() => {
			this.opts.open.current = !1;
		}, this.opts.closeDelay.current));
	}
}, Bf = class e {
	static create(t) {
		return new e(t, Rf.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = tc(this.opts.ref, (e) => this.root.triggerNode = e), this.root.domContext = new ec(e.ref), this.onpointerenter = this.onpointerenter.bind(this), this.onpointerleave = this.onpointerleave.bind(this), this.onfocus = this.onfocus.bind(this), this.onblur = this.onblur.bind(this);
	}
	onpointerenter(e) {
		pc(e) || this.root.handleOpen();
	}
	onpointerleave(e) {
		pc(e) || (!this.root.contentMounted || !this.root.opts.open.current) && this.root.immediateClose();
	}
	onfocus(e) {
		mc(e.currentTarget) && this.root.handleOpen();
	}
	onblur(e) {
		this.root.handleClose();
	}
	#e = /* @__PURE__ */ F(() => ({
		id: this.opts.id.current,
		"aria-haspopup": "dialog",
		"aria-expanded": nc(this.root.opts.open.current),
		"data-state": rc(this.root.opts.open.current),
		"aria-controls": this.root.contentNode?.id,
		role: "button",
		[Lf.trigger]: "",
		onpointerenter: this.onpointerenter,
		onfocus: this.onfocus,
		onblur: this.onblur,
		onpointerleave: this.onpointerleave,
		...this.attachment
	}));
	get props() {
		return B(this.#e);
	}
	set props(e) {
		L(this.#e, e);
	}
}, Vf = class e {
	static create(t) {
		return new e(t, Rf.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = tc(this.opts.ref, (e) => this.root.contentNode = e), this.root.domContext = new ec(e.ref), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerenter = this.onpointerenter.bind(this), this.onfocusout = this.onfocusout.bind(this), new Mf({
			triggerNode: () => this.root.triggerNode,
			contentNode: () => this.opts.ref.current,
			enabled: () => this.root.opts.open.current,
			onPointerExit: () => {
				this.root.handleClose();
			}
		}), Rs(() => {
			this.root.clearTimeout();
		});
	}
	onpointerdown(e) {
		let t = e.target;
		dc(t) && (e.currentTarget.contains(t) && (this.root.containsSelection = !0), this.root.hasSelection = !0, this.root.isPointerDownOnContent = !0);
	}
	onpointerenter(e) {
		pc(e) || this.root.handleOpen();
	}
	onfocusout(e) {
		e.preventDefault();
	}
	onInteractOutside = (e) => {
		this.opts.onInteractOutside.current(e), !e.defaultPrevented && this.root.handleClose();
	};
	onEscapeKeydown = (e) => {
		this.opts.onEscapeKeydown.current?.(e), !e.defaultPrevented && this.root.handleClose();
	};
	onOpenAutoFocus = (e) => {
		e.preventDefault();
	};
	onCloseAutoFocus = (e) => {
		e.preventDefault();
	};
	get shouldRender() {
		return this.root.contentPresence.shouldRender;
	}
	#e = /* @__PURE__ */ F(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return B(this.#e);
	}
	set snippetProps(e) {
		L(this.#e, e);
	}
	#t = /* @__PURE__ */ F(() => ({
		id: this.opts.id.current,
		tabindex: -1,
		"data-state": rc(this.root.opts.open.current),
		...ic(this.root.contentPresence.transitionStatus),
		[Lf.content]: "",
		onpointerdown: this.onpointerdown,
		onpointerenter: this.onpointerenter,
		onfocusout: this.onfocusout,
		...this.attachment
	}));
	get props() {
		return B(this.#t);
	}
	set props(e) {
		L(this.#t, e);
	}
	popperProps = {
		onInteractOutside: this.onInteractOutside,
		onEscapeKeydown: this.onEscapeKeydown,
		onOpenAutoFocus: this.onOpenAutoFocus,
		onCloseAutoFocus: this.onCloseAutoFocus
	};
};
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview.svelte
function Hf(e, t) {
	E(t, !0);
	let n = q(t, "disabled", 3, !1), r = q(t, "open", 15, !1), i = q(t, "onOpenChange", 3, vc), a = q(t, "onOpenChangeComplete", 3, vc), o = q(t, "openDelay", 3, 700), s = q(t, "closeDelay", 3, 300);
	zf.create({
		disabled: J(() => n()),
		open: J(() => r(), (e) => {
			r(e), i()(e);
		}),
		openDelay: J(() => o()),
		closeDelay: J(() => s()),
		onOpenChangeComplete: J(() => a())
	});
	var c = U();
	Ta(M(c), () => yf, (e, n) => {
		n(e, {
			children: (e, n) => {
				var r = U();
				G(M(r), () => t.children ?? w), W(e, r);
			},
			$$slots: { default: !0 }
		});
	}), W(e, c), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview-content.svelte
var Uf = /* @__PURE__ */ H("<div><div><!></div></div>"), Wf = /* @__PURE__ */ H("<!> <!>", 1), Gf = /* @__PURE__ */ H("<div><div><!></div></div>"), Kf = /* @__PURE__ */ H("<!> <!>", 1);
function qf(e, t) {
	let n = ia();
	E(t, !0);
	let r = q(t, "id", 19, () => yc(n)), i = q(t, "ref", 15, null), a = q(t, "side", 3, "top"), o = q(t, "sideOffset", 3, 0), s = q(t, "align", 3, "center"), c = q(t, "avoidCollisions", 3, !0), l = q(t, "arrowPadding", 3, 0), u = q(t, "sticky", 3, "partial"), d = q(t, "hideWhenDetached", 3, !1), f = q(t, "collisionPadding", 3, 0), p = q(t, "onInteractOutside", 3, vc), m = q(t, "onEscapeKeydown", 3, vc), h = q(t, "forceMount", 3, !1), g = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref",
		"side",
		"sideOffset",
		"align",
		"avoidCollisions",
		"arrowPadding",
		"sticky",
		"hideWhenDetached",
		"collisionPadding",
		"onInteractOutside",
		"onEscapeKeydown",
		"forceMount",
		"style"
	]), _ = Vf.create({
		id: J(() => r()),
		ref: J(() => i(), (e) => i(e)),
		onInteractOutside: J(() => p()),
		onEscapeKeydown: J(() => m())
	}), v = /* @__PURE__ */ F(() => ({
		side: a(),
		sideOffset: o(),
		align: s(),
		avoidCollisions: c(),
		arrowPadding: l(),
		sticky: u(),
		hideWhenDetached: d(),
		collisionPadding: f()
	})), y = /* @__PURE__ */ F(() => vs(g, B(v), _.props));
	var b = U(), x = M(b), ee = (e) => {
		Df(e, Eo(() => B(y), () => _.popperProps, {
			get ref() {
				return _.opts.ref;
			},
			get enabled() {
				return _.root.opts.open.current;
			},
			get id() {
				return r();
			},
			trapFocus: !1,
			loop: !1,
			preventScroll: !1,
			forceMount: !0,
			get shouldRender() {
				return _.shouldRender;
			},
			popper: (e, n) => {
				let r = () => n?.().props, i = () => n?.().wrapperProps, a = /* @__PURE__ */ F(() => vs(r(), { style: af("link-preview") }, { style: t.style }));
				var o = Wf(), s = M(o), c = (e) => {
					var n = U(), r = M(n);
					{
						let e = /* @__PURE__ */ F(() => ({
							props: B(a),
							wrapperProps: i(),
							..._.snippetProps
						}));
						G(r, () => t.child, () => B(e));
					}
					W(e, n);
				}, l = (e) => {
					var n = Uf();
					fo(n, () => ({ ...i() }));
					var r = j(n);
					fo(r, () => ({ ...B(a) })), G(j(r), () => t.children ?? w), A(r), A(n), W(e, n);
				};
				pa(s, (e) => {
					t.child ? e(c) : e(l, -1);
				}), Of(N(s, 2), {
					get mounted() {
						return _.root.contentMounted;
					},
					set mounted(e) {
						_.root.contentMounted = e;
					}
				}), W(e, o);
			},
			$$slots: { popper: !0 }
		}));
	}, te = (e) => {
		Ef(e, Eo(() => B(y), () => _.popperProps, {
			get ref() {
				return _.opts.ref;
			},
			get open() {
				return _.root.opts.open.current;
			},
			get id() {
				return r();
			},
			trapFocus: !1,
			loop: !1,
			preventScroll: !1,
			forceMount: !1,
			get shouldRender() {
				return _.shouldRender;
			},
			popper: (e, n) => {
				let r = () => n?.().props, i = () => n?.().wrapperProps, a = /* @__PURE__ */ F(() => vs(r(), { style: af("link-preview") }, { style: t.style }));
				var o = Kf(), s = M(o), c = (e) => {
					var n = U(), r = M(n);
					{
						let e = /* @__PURE__ */ F(() => ({
							props: B(a),
							wrapperProps: i(),
							..._.snippetProps
						}));
						G(r, () => t.child, () => B(e));
					}
					W(e, n);
				}, l = (e) => {
					var n = Gf();
					fo(n, () => ({ ...i() }));
					var r = j(n);
					fo(r, () => ({ ...B(a) })), G(j(r), () => t.children ?? w), A(r), A(n), W(e, n);
				};
				pa(s, (e) => {
					t.child ? e(c) : e(l, -1);
				}), Of(N(s, 2), {
					get mounted() {
						return _.root.contentMounted;
					},
					set mounted(e) {
						_.root.contentMounted = e;
					}
				}), W(e, o);
			},
			$$slots: { popper: !0 }
		}));
	};
	pa(x, (e) => {
		h() ? e(ee) : h() || e(te, 1);
	}), W(e, b), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview-trigger.svelte
var Jf = /* @__PURE__ */ H("<a><!></a>");
function Yf(e, t) {
	let n = ia();
	E(t, !0);
	let r = q(t, "ref", 15, null), i = q(t, "id", 19, () => yc(n)), a = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"id",
		"child",
		"children"
	]), o = Bf.create({
		id: J(() => i()),
		ref: J(() => r(), (e) => r(e))
	}), s = /* @__PURE__ */ F(() => vs(a, o.props));
	var c = U();
	Ta(M(c), () => bf, (e, n) => {
		n(e, {
			get id() {
				return i();
			},
			get ref() {
				return o.opts.ref;
			},
			children: (e, n) => {
				var r = U(), i = M(r), a = (e) => {
					var n = U();
					G(M(n), () => t.child, () => ({ props: B(s) })), W(e, n);
				}, o = (e) => {
					var n = Jf();
					fo(n, () => ({ ...B(s) })), G(j(n), () => t.children ?? w), A(n), W(e, n);
				};
				pa(i, (e) => {
					t.child ? e(a) : e(o, -1);
				}), W(e, r);
			},
			$$slots: { default: !0 }
		});
	}), W(e, c), D();
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var Xf = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, Zf = (e, t) => ({
	classGroupId: e,
	validator: t
}), Qf = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), $f = "-", ep = [], tp = "arbitrary..", np = (e) => {
	let t = ap(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return ip(e);
			let n = e.split($f);
			return rp(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? Xf(i, t) : t : i || ep;
			}
			return n[e] || ep;
		}
	};
}, rp = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = rp(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join($f) : e.slice(t).join($f), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, ip = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? tp + r : void 0;
})(), ap = (e) => {
	let { theme: t, classGroups: n } = e;
	return op(n, t);
}, op = (e, t) => {
	let n = Qf();
	for (let r in e) {
		let i = e[r];
		sp(i, n, r, t);
	}
	return n;
}, sp = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		cp(i, t, n, r);
	}
}, cp = (e, t, n, r) => {
	if (typeof e == "string") {
		lp(e, t, n);
		return;
	}
	if (typeof e == "function") {
		up(e, t, n, r);
		return;
	}
	dp(e, t, n, r);
}, lp = (e, t, n) => {
	let r = e === "" ? t : fp(t, e);
	r.classGroupId = n;
}, up = (e, t, n, r) => {
	if (pp(e)) {
		sp(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(Zf(n, e));
}, dp = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		sp(o, fp(t, a), n, r);
	}
}, fp = (e, t) => {
	let n = e, r = t.split($f), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Qf(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, pp = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, mp = (e) => {
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
}, hp = "!", gp = ":", _p = [], vp = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), yp = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === gp) {
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
		s.endsWith(hp) ? (c = s.slice(0, -1), l = !0) : s.startsWith(hp) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return vp(t, l, c, u);
	};
	if (t) {
		let e = t + gp, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : vp(_p, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, bp = (e) => {
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
}, xp = (e) => ({
	cache: mp(e.cacheSize),
	parseClassName: yp(e),
	sortModifiers: bp(e),
	postfixLookupClassGroupIds: Sp(e),
	...np(e)
}), Sp = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, Cp = /\s+/, wp = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(Cp), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + hp : _, y = v + g;
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
}, Tp = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Ep(n)) && (i && (i += " "), i += r);
	return i;
}, Ep = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Ep(e[r])) && (n && (n += " "), n += t);
	return n;
}, Dp = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = xp(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = wp(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Tp(...e));
}, Op = [], kp = (e) => {
	let t = (t) => t[e] || Op;
	return t.isThemeGetter = !0, t;
}, Ap = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, jp = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Mp = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Np = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Pp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Fp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ip = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Lp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Rp = (e) => Mp.test(e), Y = (e) => !!e && !Number.isNaN(Number(e)), zp = (e) => !!e && Number.isInteger(Number(e)), Bp = (e) => e.endsWith("%") && Y(e.slice(0, -1)), Vp = (e) => Np.test(e), Hp = () => !0, Up = (e) => Pp.test(e) && !Fp.test(e), Wp = () => !1, Gp = (e) => Ip.test(e), Kp = (e) => Lp.test(e), qp = (e) => !X(e) && !Z(e), Jp = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Yp = (e) => um(e, mm, Wp), X = (e) => Ap.test(e), Xp = (e) => um(e, hm, Up), Zp = (e) => um(e, gm, Y), Qp = (e) => um(e, vm, Hp), $p = (e) => um(e, _m, Wp), em = (e) => um(e, fm, Wp), tm = (e) => um(e, pm, Kp), nm = (e) => um(e, ym, Gp), Z = (e) => jp.test(e), rm = (e) => dm(e, hm), im = (e) => dm(e, _m), am = (e) => dm(e, fm), om = (e) => dm(e, mm), sm = (e) => dm(e, pm), cm = (e) => dm(e, ym, !0), lm = (e) => dm(e, vm, !0), um = (e, t, n) => {
	let r = Ap.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, dm = (e, t, n = !1) => {
	let r = jp.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, fm = (e) => e === "position" || e === "percentage", pm = (e) => e === "image" || e === "url", mm = (e) => e === "length" || e === "size" || e === "bg-size", hm = (e) => e === "length", gm = (e) => e === "number", _m = (e) => e === "family-name", vm = (e) => e === "number" || e === "weight", ym = (e) => e === "shadow", bm = () => {
	let e = kp("color"), t = kp("font"), n = kp("text"), r = kp("font-weight"), i = kp("tracking"), a = kp("leading"), o = kp("breakpoint"), s = kp("container"), c = kp("spacing"), l = kp("radius"), u = kp("shadow"), d = kp("inset-shadow"), f = kp("text-shadow"), p = kp("drop-shadow"), m = kp("blur"), h = kp("perspective"), g = kp("aspect"), _ = kp("ease"), v = kp("animate"), y = () => [
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
		Z,
		X
	], ee = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], te = () => [
		"auto",
		"contain",
		"none"
	], S = () => [
		Z,
		X,
		c
	], C = () => [
		Rp,
		"full",
		"auto",
		...S()
	], ne = () => [
		zp,
		"none",
		"subgrid",
		Z,
		X
	], re = () => [
		"auto",
		{ span: [
			"full",
			zp,
			Z,
			X
		] },
		zp,
		Z,
		X
	], w = () => [
		zp,
		"auto",
		Z,
		X
	], ie = () => [
		"auto",
		"min",
		"max",
		"fr",
		Z,
		X
	], ae = () => [
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
	], oe = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], se = () => ["auto", ...S()], ce = () => [
		Rp,
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
		...S()
	], le = () => [
		Rp,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...S()
	], ue = () => [
		Rp,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...S()
	], T = () => [
		e,
		Z,
		X
	], de = () => [
		...b(),
		am,
		em,
		{ position: [Z, X] }
	], fe = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], pe = () => [
		"auto",
		"cover",
		"contain",
		om,
		Yp,
		{ size: [Z, X] }
	], me = () => [
		Bp,
		rm,
		Xp
	], he = () => [
		"",
		"none",
		"full",
		l,
		Z,
		X
	], ge = () => [
		"",
		Y,
		rm,
		Xp
	], _e = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ve = () => [
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
	], ye = () => [
		Y,
		Bp,
		am,
		em
	], be = () => [
		"",
		"none",
		m,
		Z,
		X
	], xe = () => [
		"none",
		Y,
		Z,
		X
	], Se = () => [
		"none",
		Y,
		Z,
		X
	], Ce = () => [
		Y,
		Z,
		X
	], we = () => [
		Rp,
		"full",
		...S()
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
			blur: [Vp],
			breakpoint: [Vp],
			color: [Hp],
			container: [Vp],
			"drop-shadow": [Vp],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [qp],
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
			"inset-shadow": [Vp],
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
			radius: [Vp],
			shadow: [Vp],
			spacing: ["px", Y],
			text: [Vp],
			"text-shadow": [Vp],
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
				Rp,
				X,
				Z,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				Z,
				X
			] }],
			"container-named": [Jp],
			columns: [{ columns: [
				Y,
				X,
				Z,
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
			overflow: [{ overflow: ee() }],
			"overflow-x": [{ "overflow-x": ee() }],
			"overflow-y": [{ "overflow-y": ee() }],
			overscroll: [{ overscroll: te() }],
			"overscroll-x": [{ "overscroll-x": te() }],
			"overscroll-y": [{ "overscroll-y": te() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: C() }],
			"inset-x": [{ "inset-x": C() }],
			"inset-y": [{ "inset-y": C() }],
			start: [{
				"inset-s": C(),
				start: C()
			}],
			end: [{
				"inset-e": C(),
				end: C()
			}],
			"inset-bs": [{ "inset-bs": C() }],
			"inset-be": [{ "inset-be": C() }],
			top: [{ top: C() }],
			right: [{ right: C() }],
			bottom: [{ bottom: C() }],
			left: [{ left: C() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				zp,
				"auto",
				Z,
				X
			] }],
			basis: [{ basis: [
				Rp,
				"full",
				"auto",
				s,
				...S()
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
				Y,
				Rp,
				"auto",
				"initial",
				"none",
				X
			] }],
			grow: [{ grow: [
				"",
				Y,
				Z,
				X
			] }],
			shrink: [{ shrink: [
				"",
				Y,
				Z,
				X
			] }],
			order: [{ order: [
				zp,
				"first",
				"last",
				"none",
				Z,
				X
			] }],
			"grid-cols": [{ "grid-cols": ne() }],
			"col-start-end": [{ col: re() }],
			"col-start": [{ "col-start": w() }],
			"col-end": [{ "col-end": w() }],
			"grid-rows": [{ "grid-rows": ne() }],
			"row-start-end": [{ row: re() }],
			"row-start": [{ "row-start": w() }],
			"row-end": [{ "row-end": w() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": ie() }],
			"auto-rows": [{ "auto-rows": ie() }],
			gap: [{ gap: S() }],
			"gap-x": [{ "gap-x": S() }],
			"gap-y": [{ "gap-y": S() }],
			"justify-content": [{ justify: [...ae(), "normal"] }],
			"justify-items": [{ "justify-items": [...oe(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...oe()] }],
			"align-content": [{ content: ["normal", ...ae()] }],
			"align-items": [{ items: [...oe(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...oe(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": ae() }],
			"place-items": [{ "place-items": [...oe(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...oe()] }],
			p: [{ p: S() }],
			px: [{ px: S() }],
			py: [{ py: S() }],
			ps: [{ ps: S() }],
			pe: [{ pe: S() }],
			pbs: [{ pbs: S() }],
			pbe: [{ pbe: S() }],
			pt: [{ pt: S() }],
			pr: [{ pr: S() }],
			pb: [{ pb: S() }],
			pl: [{ pl: S() }],
			m: [{ m: se() }],
			mx: [{ mx: se() }],
			my: [{ my: se() }],
			ms: [{ ms: se() }],
			me: [{ me: se() }],
			mbs: [{ mbs: se() }],
			mbe: [{ mbe: se() }],
			mt: [{ mt: se() }],
			mr: [{ mr: se() }],
			mb: [{ mb: se() }],
			ml: [{ ml: se() }],
			"space-x": [{ "space-x": S() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": S() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: ce() }],
			"inline-size": [{ inline: ["auto", ...le()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...le()] }],
			"max-inline-size": [{ "max-inline": ["none", ...le()] }],
			"block-size": [{ block: ["auto", ...ue()] }],
			"min-block-size": [{ "min-block": ["auto", ...ue()] }],
			"max-block-size": [{ "max-block": ["none", ...ue()] }],
			w: [{ w: [
				s,
				"screen",
				...ce()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...ce()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...ce()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...ce()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...ce()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...ce()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				rm,
				Xp
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				lm,
				Qp
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
				Bp,
				X
			] }],
			"font-family": [{ font: [
				im,
				$p,
				t
			] }],
			"font-features": [{ "font-features": [X] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				Z,
				X
			] }],
			"line-clamp": [{ "line-clamp": [
				Y,
				"none",
				Z,
				Zp
			] }],
			leading: [{ leading: [a, ...S()] }],
			"list-image": [{ "list-image": [
				"none",
				Z,
				X
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				Z,
				X
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: T() }],
			"text-color": [{ text: T() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [..._e(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				Y,
				"from-font",
				"auto",
				Z,
				Xp
			] }],
			"text-decoration-color": [{ decoration: T() }],
			"underline-offset": [{ "underline-offset": [
				Y,
				"auto",
				Z,
				X
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
			indent: [{ indent: S() }],
			"tab-size": [{ tab: [
				zp,
				Z,
				X
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
				Z,
				X
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
				Z,
				X
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
			"bg-position": [{ bg: de() }],
			"bg-repeat": [{ bg: fe() }],
			"bg-size": [{ bg: pe() }],
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
						zp,
						Z,
						X
					],
					radial: [
						"",
						Z,
						X
					],
					conic: [
						zp,
						Z,
						X
					]
				},
				sm,
				tm
			] }],
			"bg-color": [{ bg: T() }],
			"gradient-from-pos": [{ from: me() }],
			"gradient-via-pos": [{ via: me() }],
			"gradient-to-pos": [{ to: me() }],
			"gradient-from": [{ from: T() }],
			"gradient-via": [{ via: T() }],
			"gradient-to": [{ to: T() }],
			rounded: [{ rounded: he() }],
			"rounded-s": [{ "rounded-s": he() }],
			"rounded-e": [{ "rounded-e": he() }],
			"rounded-t": [{ "rounded-t": he() }],
			"rounded-r": [{ "rounded-r": he() }],
			"rounded-b": [{ "rounded-b": he() }],
			"rounded-l": [{ "rounded-l": he() }],
			"rounded-ss": [{ "rounded-ss": he() }],
			"rounded-se": [{ "rounded-se": he() }],
			"rounded-ee": [{ "rounded-ee": he() }],
			"rounded-es": [{ "rounded-es": he() }],
			"rounded-tl": [{ "rounded-tl": he() }],
			"rounded-tr": [{ "rounded-tr": he() }],
			"rounded-br": [{ "rounded-br": he() }],
			"rounded-bl": [{ "rounded-bl": he() }],
			"border-w": [{ border: ge() }],
			"border-w-x": [{ "border-x": ge() }],
			"border-w-y": [{ "border-y": ge() }],
			"border-w-s": [{ "border-s": ge() }],
			"border-w-e": [{ "border-e": ge() }],
			"border-w-bs": [{ "border-bs": ge() }],
			"border-w-be": [{ "border-be": ge() }],
			"border-w-t": [{ "border-t": ge() }],
			"border-w-r": [{ "border-r": ge() }],
			"border-w-b": [{ "border-b": ge() }],
			"border-w-l": [{ "border-l": ge() }],
			"divide-x": [{ "divide-x": ge() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": ge() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				..._e(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				..._e(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: T() }],
			"border-color-x": [{ "border-x": T() }],
			"border-color-y": [{ "border-y": T() }],
			"border-color-s": [{ "border-s": T() }],
			"border-color-e": [{ "border-e": T() }],
			"border-color-bs": [{ "border-bs": T() }],
			"border-color-be": [{ "border-be": T() }],
			"border-color-t": [{ "border-t": T() }],
			"border-color-r": [{ "border-r": T() }],
			"border-color-b": [{ "border-b": T() }],
			"border-color-l": [{ "border-l": T() }],
			"divide-color": [{ divide: T() }],
			"outline-style": [{ outline: [
				..._e(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				Y,
				Z,
				X
			] }],
			"outline-w": [{ outline: [
				"",
				Y,
				rm,
				Xp
			] }],
			"outline-color": [{ outline: T() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				cm,
				nm
			] }],
			"shadow-color": [{ shadow: T() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				cm,
				nm
			] }],
			"inset-shadow-color": [{ "inset-shadow": T() }],
			"ring-w": [{ ring: ge() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: T() }],
			"ring-offset-w": [{ "ring-offset": [Y, Xp] }],
			"ring-offset-color": [{ "ring-offset": T() }],
			"inset-ring-w": [{ "inset-ring": ge() }],
			"inset-ring-color": [{ "inset-ring": T() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				cm,
				nm
			] }],
			"text-shadow-color": [{ "text-shadow": T() }],
			opacity: [{ opacity: [
				Y,
				Z,
				X
			] }],
			"mix-blend": [{ "mix-blend": [
				...ve(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ve() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [Y] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": ye() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": ye() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": T() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": T() }],
			"mask-image-t-from-pos": [{ "mask-t-from": ye() }],
			"mask-image-t-to-pos": [{ "mask-t-to": ye() }],
			"mask-image-t-from-color": [{ "mask-t-from": T() }],
			"mask-image-t-to-color": [{ "mask-t-to": T() }],
			"mask-image-r-from-pos": [{ "mask-r-from": ye() }],
			"mask-image-r-to-pos": [{ "mask-r-to": ye() }],
			"mask-image-r-from-color": [{ "mask-r-from": T() }],
			"mask-image-r-to-color": [{ "mask-r-to": T() }],
			"mask-image-b-from-pos": [{ "mask-b-from": ye() }],
			"mask-image-b-to-pos": [{ "mask-b-to": ye() }],
			"mask-image-b-from-color": [{ "mask-b-from": T() }],
			"mask-image-b-to-color": [{ "mask-b-to": T() }],
			"mask-image-l-from-pos": [{ "mask-l-from": ye() }],
			"mask-image-l-to-pos": [{ "mask-l-to": ye() }],
			"mask-image-l-from-color": [{ "mask-l-from": T() }],
			"mask-image-l-to-color": [{ "mask-l-to": T() }],
			"mask-image-x-from-pos": [{ "mask-x-from": ye() }],
			"mask-image-x-to-pos": [{ "mask-x-to": ye() }],
			"mask-image-x-from-color": [{ "mask-x-from": T() }],
			"mask-image-x-to-color": [{ "mask-x-to": T() }],
			"mask-image-y-from-pos": [{ "mask-y-from": ye() }],
			"mask-image-y-to-pos": [{ "mask-y-to": ye() }],
			"mask-image-y-from-color": [{ "mask-y-from": T() }],
			"mask-image-y-to-color": [{ "mask-y-to": T() }],
			"mask-image-radial": [{ "mask-radial": [Z, X] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": ye() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": ye() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": T() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": T() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [Y] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": ye() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": ye() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": T() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": T() }],
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
			"mask-position": [{ mask: de() }],
			"mask-repeat": [{ mask: fe() }],
			"mask-size": [{ mask: pe() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				Z,
				X
			] }],
			filter: [{ filter: [
				"",
				"none",
				Z,
				X
			] }],
			blur: [{ blur: be() }],
			brightness: [{ brightness: [
				Y,
				Z,
				X
			] }],
			contrast: [{ contrast: [
				Y,
				Z,
				X
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				cm,
				nm
			] }],
			"drop-shadow-color": [{ "drop-shadow": T() }],
			grayscale: [{ grayscale: [
				"",
				Y,
				Z,
				X
			] }],
			"hue-rotate": [{ "hue-rotate": [
				Y,
				Z,
				X
			] }],
			invert: [{ invert: [
				"",
				Y,
				Z,
				X
			] }],
			saturate: [{ saturate: [
				Y,
				Z,
				X
			] }],
			sepia: [{ sepia: [
				"",
				Y,
				Z,
				X
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Z,
				X
			] }],
			"backdrop-blur": [{ "backdrop-blur": be() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				Y,
				Z,
				X
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				Y,
				Z,
				X
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				Y,
				Z,
				X
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				Y,
				Z,
				X
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				Y,
				Z,
				X
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				Y,
				Z,
				X
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				Y,
				Z,
				X
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				Y,
				Z,
				X
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": S() }],
			"border-spacing-x": [{ "border-spacing-x": S() }],
			"border-spacing-y": [{ "border-spacing-y": S() }],
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
				Z,
				X
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				Y,
				"initial",
				Z,
				X
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				Z,
				X
			] }],
			delay: [{ delay: [
				Y,
				Z,
				X
			] }],
			animate: [{ animate: [
				"none",
				v,
				Z,
				X
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				Z,
				X
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: xe() }],
			"rotate-x": [{ "rotate-x": xe() }],
			"rotate-y": [{ "rotate-y": xe() }],
			"rotate-z": [{ "rotate-z": xe() }],
			scale: [{ scale: Se() }],
			"scale-x": [{ "scale-x": Se() }],
			"scale-y": [{ "scale-y": Se() }],
			"scale-z": [{ "scale-z": Se() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: Ce() }],
			"skew-x": [{ "skew-x": Ce() }],
			"skew-y": [{ "skew-y": Ce() }],
			transform: [{ transform: [
				Z,
				X,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: we() }],
			"translate-x": [{ "translate-x": we() }],
			"translate-y": [{ "translate-y": we() }],
			"translate-z": [{ "translate-z": we() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				zp,
				Z,
				X
			] }],
			accent: [{ accent: T() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: T() }],
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
				Z,
				X
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
			"scrollbar-thumb-color": [{ "scrollbar-thumb": T() }],
			"scrollbar-track-color": [{ "scrollbar-track": T() }],
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
			"scroll-m": [{ "scroll-m": S() }],
			"scroll-mx": [{ "scroll-mx": S() }],
			"scroll-my": [{ "scroll-my": S() }],
			"scroll-ms": [{ "scroll-ms": S() }],
			"scroll-me": [{ "scroll-me": S() }],
			"scroll-mbs": [{ "scroll-mbs": S() }],
			"scroll-mbe": [{ "scroll-mbe": S() }],
			"scroll-mt": [{ "scroll-mt": S() }],
			"scroll-mr": [{ "scroll-mr": S() }],
			"scroll-mb": [{ "scroll-mb": S() }],
			"scroll-ml": [{ "scroll-ml": S() }],
			"scroll-p": [{ "scroll-p": S() }],
			"scroll-px": [{ "scroll-px": S() }],
			"scroll-py": [{ "scroll-py": S() }],
			"scroll-ps": [{ "scroll-ps": S() }],
			"scroll-pe": [{ "scroll-pe": S() }],
			"scroll-pbs": [{ "scroll-pbs": S() }],
			"scroll-pbe": [{ "scroll-pbe": S() }],
			"scroll-pt": [{ "scroll-pt": S() }],
			"scroll-pr": [{ "scroll-pr": S() }],
			"scroll-pb": [{ "scroll-pb": S() }],
			"scroll-pl": [{ "scroll-pl": S() }],
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
				Z,
				X
			] }],
			fill: [{ fill: ["none", ...T()] }],
			"stroke-w": [{ stroke: [
				Y,
				rm,
				Xp,
				Zp
			] }],
			stroke: [{ stroke: ["none", ...T()] }],
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
}, xm = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (Sm(e, "cacheSize", t), Sm(e, "prefix", n), Sm(e, "experimentalParseClassName", r), Cm(e.theme, a.theme), Cm(e.classGroups, a.classGroups), Cm(e.conflictingClassGroups, a.conflictingClassGroups), Cm(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Sm(e, "postfixLookupClassGroups", a.postfixLookupClassGroups), Sm(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), wm(e.theme, i.theme), wm(e.classGroups, i.classGroups), wm(e.conflictingClassGroups, i.conflictingClassGroups), wm(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Tm(e, i, "postfixLookupClassGroups"), Tm(e, i, "orderSensitiveModifiers"), e), Sm = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, Cm = (e, t) => {
	if (t) for (let n in t) Sm(e, n, t[n]);
}, wm = (e, t) => {
	if (t) for (let n in t) Tm(e, t, n);
}, Tm = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, Em = (e, ...t) => typeof e == "function" ? Dp(bm, e, ...t) : Dp(() => xm(bm(), e), ...t), Dm = /* @__PURE__ */ Dp(bm), Om = (...e) => Dm(Ba(e));
//#endregion
//#region src/lib/components/ui/avatar/avatar.svelte
function km(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = q(t, "loadingStatus", 15, "loading"), i = q(t, "size", 3, "default"), a = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"loadingStatus",
		"size",
		"class"
	]);
	var o = U(), s = M(o);
	{
		let e = /* @__PURE__ */ F(() => Om("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten", t.class));
		Ta(s, () => Ql, (t, o) => {
			o(t, Eo({
				"data-slot": "avatar",
				get "data-size"() {
					return i();
				},
				get class() {
					return B(e);
				}
			}, () => a, {
				get ref() {
					return n();
				},
				set ref(e) {
					n(e);
				},
				get loadingStatus() {
					return r();
				},
				set loadingStatus(e) {
					r(e);
				}
			}));
		});
	}
	W(e, o), D();
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-image.svelte
function Am(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var i = U(), a = M(i);
	{
		let e = /* @__PURE__ */ F(() => Om("rounded-full aspect-square size-full object-cover", t.class));
		Ta(a, () => eu, (t, i) => {
			i(t, Eo({
				"data-slot": "avatar-image",
				get class() {
					return B(e);
				}
			}, () => r, {
				get ref() {
					return n();
				},
				set ref(e) {
					n(e);
				}
			}));
		});
	}
	W(e, i), D();
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-fallback.svelte
function jm(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var i = U(), a = M(i);
	{
		let e = /* @__PURE__ */ F(() => Om("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", t.class));
		Ta(a, () => nu, (t, i) => {
			i(t, Eo({
				"data-slot": "avatar-fallback",
				get class() {
					return B(e);
				}
			}, () => r, {
				get ref() {
					return n();
				},
				set ref(e) {
					n(e);
				}
			}));
		});
	}
	W(e, i), D();
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-badge.svelte
var Mm = /* @__PURE__ */ H("<span><!></span>");
function Nm(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Mm();
	fo(i, (e) => ({
		"data-slot": "avatar-badge",
		class: e,
		...r
	}), [() => Om("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", t.class)]), G(j(i), () => t.children ?? w), A(i), xo(i, (e) => n(e), () => n()), W(e, i), D();
}
//#endregion
//#region src/shared/components/common/ChannelAvatar.svelte
var Pm = /* @__PURE__ */ H("<!> <!> <!>", 1);
function Fm(e, t) {
	let n = q(t, "fallbackText", 3, "Channel Logo");
	km(e, {
		class: "rounded-lg",
		children: (e, r) => {
			var i = Pm(), a = M(i);
			Am(a, {
				get src() {
					return t.imgSrc;
				},
				get alt() {
					return n();
				}
			});
			var o = N(a, 2), s = (e) => {
				{
					let n = /* @__PURE__ */ F(() => t.isConnected ? "bg-green-500" : "bg-red-500");
					Nm(e, { get class() {
						return B(n);
					} });
				}
			};
			pa(o, (e) => {
				typeof t.isConnected == "boolean" && e(s);
			}), jm(N(o, 2), {
				children: (e, t) => {
					wt();
					var r = ra();
					Yr(() => oa(r, n())), W(e, r);
				},
				$$slots: { default: !0 }
			}), W(e, i);
		},
		$$slots: { default: !0 }
	});
}
//#endregion
//#region src/shared/components/common/VersionBadge.svelte
var Im = /* @__PURE__ */ H("<div class=\"relative h-15 w-15 shrink-0 overflow-hidden\"><div class=\"pointer-events-none absolute top-[18%] left-[-75%] w-[250%] -rotate-45 bg-primary py-[0.25em] pr-[1.5em] text-center text-[0.6rem] leading-none font-bold text-white shadow-md\"> </div></div>");
function Lm(e, t) {
	let n = q(t, "version", 3, "main");
	var r = Im(), i = j(r), a = j(i, !0);
	A(i), A(r), Yr(() => oa(a, n())), W(e, r);
}
//#endregion
//#region node_modules/valibot/dist/index.mjs
var Rm, zm = {
	lang: void 0,
	message: void 0,
	abortEarly: void 0,
	abortPipeEarly: void 0
};
/* @__NO_SIDE_EFFECTS__ */
function Bm(e) {
	return !e && !Rm ? zm : {
		lang: e?.lang ?? Rm?.lang,
		message: e?.message,
		abortEarly: e?.abortEarly ?? Rm?.abortEarly,
		abortPipeEarly: e?.abortPipeEarly ?? Rm?.abortPipeEarly
	};
}
var Vm;
/* @__NO_SIDE_EFFECTS__ */
function Hm(e) {
	return Vm?.get(e);
}
var Um;
/* @__NO_SIDE_EFFECTS__ */
function Wm(e) {
	return Um?.get(e);
}
var Gm;
/* @__NO_SIDE_EFFECTS__ */
function Km(e, t) {
	return Gm?.get(e)?.get(t);
}
/* @__NO_SIDE_EFFECTS__ */
function qm(e) {
	let t = typeof e;
	return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function Jm(e, t, n, r, i) {
	let a = i && "input" in i ? i.input : n.value, o = i?.expected ?? e.expects ?? null, s = i?.received ?? /* @__PURE__ */ qm(a), c = {
		kind: e.kind,
		type: e.type,
		input: a,
		expected: o,
		received: s,
		message: `Invalid ${t}: ${o ? `Expected ${o} but r` : "R"}eceived ${s}`,
		requirement: e.requirement,
		path: i?.path,
		issues: i?.issues,
		lang: r.lang,
		abortEarly: r.abortEarly,
		abortPipeEarly: r.abortPipeEarly
	}, l = e.kind === "schema", u = i?.message ?? e.message ?? /* @__PURE__ */ Km(e.reference, c.lang) ?? (l ? /* @__PURE__ */ Wm(c.lang) : null) ?? r.message ?? /* @__PURE__ */ Hm(c.lang);
	u !== void 0 && (c.message = typeof u == "function" ? u(c) : u), l && (n.typed = !1), n.issues ? n.issues.push(c) : n.issues = [c];
}
var Ym = /* @__PURE__ */ new WeakMap();
/* @__NO_SIDE_EFFECTS__ */
function Xm(e) {
	let t = Ym.get(e);
	return t || (t = {
		version: 1,
		vendor: "valibot",
		validate(t) {
			return e["~run"]({ value: t }, /* @__PURE__ */ Bm());
		}
	}, Ym.set(e, t)), t;
}
/* @__NO_SIDE_EFFECTS__ */
function Zm(e, t) {
	return {
		kind: "validation",
		type: "max_length",
		reference: Zm,
		async: !1,
		expects: `<=${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && e.value.length > this.requirement && Jm(this, "length", e, t, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Qm(e, t) {
	return {
		kind: "validation",
		type: "min_length",
		reference: Qm,
		async: !1,
		expects: `>=${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && e.value.length < this.requirement && Jm(this, "length", e, t, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function $m(e, t) {
	return {
		kind: "validation",
		type: "regex",
		reference: $m,
		async: !1,
		expects: `${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && !this.requirement.test(e.value) && Jm(this, "format", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function eh(e) {
	return {
		kind: "schema",
		type: "string",
		reference: eh,
		expects: "string",
		async: !1,
		message: e,
		get "~standard"() {
			return /* @__PURE__ */ Xm(this);
		},
		"~run"(e, t) {
			return typeof e.value == "string" ? e.typed = !0 : Jm(this, "type", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function th(...e) {
	return {
		...e[0],
		pipe: e,
		get "~standard"() {
			return /* @__PURE__ */ Xm(this);
		},
		"~run"(t, n) {
			for (let r of e) if (r.kind !== "metadata") {
				if (t.issues && (r.kind === "schema" || r.kind === "transformation")) {
					t.typed = !1;
					break;
				}
				(!t.issues || !n.abortEarly && !n.abortPipeEarly) && (t = r["~run"](t, n));
			}
			return t;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function nh(e, t, n) {
	let r = e["~run"]({ value: t }, /* @__PURE__ */ Bm(n));
	return {
		typed: r.typed,
		success: !r.issues,
		output: r.value,
		issues: r.issues
	};
}
//#endregion
//#region node_modules/tailwind-variants/dist/chunk-LQJYWU4O.js
var rh = /\s+/g, ih = (e) => typeof e != "string" || !e ? e : e.replace(rh, " ").trim(), ah = (...e) => {
	let t = [], n = (e) => {
		if (!e && e !== 0 && e !== 0n) return;
		if (Array.isArray(e)) {
			for (let t = 0, r = e.length; t < r; t++) n(e[t]);
			return;
		}
		let r = typeof e;
		if (r === "string" || r === "number" || r === "bigint") {
			if (r === "number" && e !== e) return;
			t.push(String(e));
		} else if (r === "object") {
			let n = Object.keys(e);
			for (let r = 0, i = n.length; r < i; r++) {
				let i = n[r];
				e[i] && t.push(i);
			}
		}
	};
	for (let t = 0, r = e.length; t < r; t++) {
		let r = e[t];
		r != null && n(r);
	}
	return t.length > 0 ? ih(t.join(" ")) : void 0;
}, oh = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, sh = (e) => {
	if (!e || typeof e != "object") return !0;
	for (let t in e) return !1;
	return !0;
}, ch = (e, t) => {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let i = 0; i < n.length; i++) {
		let a = n[i];
		if (!r.includes(a) || e[a] !== t[a]) return !1;
	}
	return !0;
}, lh = (e, t) => {
	for (let n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
		let r = t[n];
		n in e ? e[n] = ah(e[n], r) : e[n] = r;
	}
	return e;
}, uh = (e, t) => {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		Array.isArray(r) ? uh(r, t) : r && t.push(r);
	}
}, dh = (...e) => {
	let t = [];
	uh(e, t);
	let n = [];
	for (let e = 0; e < t.length; e++) t[e] && n.push(t[e]);
	return n;
}, fh = (e, t) => {
	let n = {};
	for (let r in e) {
		let i = e[r];
		if (r in t) {
			let e = t[r];
			Array.isArray(i) || Array.isArray(e) ? n[r] = dh(e, i) : typeof i == "object" && typeof e == "object" && i && e ? n[r] = fh(i, e) : n[r] = e + " " + i;
		} else n[r] = i;
	}
	for (let r in t) r in e || (n[r] = t[r]);
	return n;
}, ph = {
	twMerge: !0,
	twMergeConfig: {}
};
function mh() {
	let e = null, t = {}, n = !1;
	return {
		get cachedTwMerge() {
			return e;
		},
		set cachedTwMerge(t) {
			e = t;
		},
		get cachedTwMergeConfig() {
			return t;
		},
		set cachedTwMergeConfig(e) {
			t = e;
		},
		get didTwMergeConfigChange() {
			return n;
		},
		set didTwMergeConfigChange(e) {
			n = e;
		},
		reset() {
			e = null, t = {}, n = !1;
		}
	};
}
var hh = mh(), gh = (e) => {
	let t = (t, n) => {
		let { extend: r = null, slots: i = {}, variants: a = {}, compoundVariants: o = [], compoundSlots: s = [], defaultVariants: c = {} } = t, l = {
			...ph,
			...n
		}, u = r?.base ? ah(r.base, t?.base) : t?.base, d = r?.variants && !sh(r.variants) ? fh(a, r.variants) : a, f = r?.defaultVariants && !sh(r.defaultVariants) ? {
			...r.defaultVariants,
			...c
		} : c;
		!sh(l.twMergeConfig) && !ch(l.twMergeConfig, hh.cachedTwMergeConfig) && (hh.didTwMergeConfigChange = !0, hh.cachedTwMergeConfig = l.twMergeConfig);
		let p = sh(r?.slots), m = sh(i) ? {} : {
			base: ah(t?.base, p && r?.base),
			...i
		}, h = p ? m : lh({ ...r?.slots }, sh(m) ? { base: t?.base } : m), g = sh(r?.compoundVariants) ? o : dh(r?.compoundVariants, o), _ = (t) => {
			if (sh(d) && sh(i) && p) return e(u, t?.class, t?.className)(l);
			if (g && !Array.isArray(g)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof g}`);
			if (s && !Array.isArray(s)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
			let n = (e, n = d, r = null, i = null) => {
				let a = n[e];
				if (!a || sh(a)) return null;
				let o = i?.[e] ?? t?.[e];
				if (o === null) return null;
				let s = oh(o);
				if (typeof s == "object") return null;
				let c = f?.[e];
				return a[(s ?? oh(c)) || "false"];
			}, r = () => {
				if (!d) return null;
				let e = Object.keys(d), t = [];
				for (let r = 0; r < e.length; r++) {
					let i = n(e[r], d);
					i && t.push(i);
				}
				return t;
			}, a = (e, t) => {
				if (!d || typeof d != "object") return null;
				let r = [];
				for (let i in d) {
					let a = n(i, d, e, t), o = e === "base" && typeof a == "string" ? a : a && a[e];
					o && r.push(o);
				}
				return r;
			}, o = {};
			for (let e in t) {
				let n = t[e];
				n !== void 0 && (o[e] = n);
			}
			let c = (e, n) => {
				let r = typeof t?.[e] == "object" ? { [e]: t[e]?.initial } : {};
				return {
					...f,
					...o,
					...r,
					...n
				};
			}, m = (e = [], t) => {
				let n = [], r = e.length;
				for (let i = 0; i < r; i++) {
					let { class: r, className: a, ...o } = e[i], s = !0, l = c(null, t);
					for (let e in o) {
						let t = o[e], n = l[e];
						if (Array.isArray(t)) {
							if (!t.includes(n)) {
								s = !1;
								break;
							}
						} else {
							if ((t == null || t === !1) && (n == null || n === !1)) continue;
							if (n !== t) {
								s = !1;
								break;
							}
						}
					}
					s && (r && n.push(r), a && n.push(a));
				}
				return n;
			}, _ = (t) => {
				let n = m(g, t);
				if (!Array.isArray(n)) return n;
				let r = {}, i = e;
				for (let e = 0; e < n.length; e++) {
					let t = n[e];
					if (typeof t == "string") r.base = i(r.base, t)(l);
					else if (typeof t == "object") for (let e in t) r[e] = i(r[e], t[e])(l);
				}
				return r;
			}, v = (e) => {
				if (s.length < 1) return null;
				let t = {}, n = c(null, e);
				for (let e = 0; e < s.length; e++) {
					let { slots: r = [], class: i, className: a, ...o } = s[e];
					if (!sh(o)) {
						let e = !0;
						for (let t in o) {
							let r = n[t], i = o[t];
							if (r === void 0 || (Array.isArray(i) ? !i.includes(r) : i !== r)) {
								e = !1;
								break;
							}
						}
						if (!e) continue;
					}
					for (let e = 0; e < r.length; e++) {
						let n = r[e];
						t[n] || (t[n] = []), t[n].push([i, a]);
					}
				}
				return t;
			};
			if (!sh(i) || !p) {
				let t = {};
				if (typeof h == "object" && !sh(h)) {
					let n = e;
					for (let e in h) t[e] = (t) => {
						let r = _(t), i = v(t);
						return n(h[e], a(e, t), r ? r[e] : void 0, i ? i[e] : void 0, t?.class, t?.className)(l);
					};
				}
				return t;
			}
			return e(u, r(), m(g), t?.class, t?.className)(l);
		};
		return _.variantKeys = (() => {
			if (!(!d || typeof d != "object")) return Object.keys(d);
		})(), _.extend = r, _.base = u, _.slots = h, _.variants = d, _.defaultVariants = f, _.compoundSlots = s, _.compoundVariants = g, _;
	};
	return {
		tv: t,
		createTV: (e) => (n, r) => t(n, r ? fh(e, r) : e)
	};
}, _h = (e) => sh(e) ? Dm : Em({
	...e,
	extend: {
		theme: e.theme,
		classGroups: e.classGroups,
		conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
		conflictingClassGroups: e.conflictingClassGroups,
		...e.extend
	}
}), vh = (e, t) => {
	let n = ah(e);
	return !n || !(t?.twMerge ?? !0) ? n : ((!hh.cachedTwMerge || hh.didTwMergeConfigChange) && (hh.didTwMergeConfigChange = !1, hh.cachedTwMerge = _h(hh.cachedTwMergeConfig)), hh.cachedTwMerge(n) || void 0);
}, { createTV: yh, tv: bh } = gh((...e) => (t) => vh(e, t)), xh = bh({
	base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 active:not-aria-[haspopup]:translate-y-px aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
			destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), Sh = /* @__PURE__ */ H("<a><!></a>"), Ch = /* @__PURE__ */ H("<button><!></button>");
function wh(e, t) {
	E(t, !0);
	let n = q(t, "variant", 3, "default"), r = q(t, "size", 3, "default"), i = q(t, "ref", 15, null), a = q(t, "href", 3, void 0), o = q(t, "type", 3, "button"), s = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class",
		"variant",
		"size",
		"ref",
		"href",
		"type",
		"disabled",
		"children"
	]);
	var c = U(), l = M(c), u = (e) => {
		var o = Sh();
		fo(o, (e) => ({
			"data-slot": "button",
			class: e,
			href: t.disabled ? void 0 : a(),
			"aria-disabled": t.disabled,
			role: t.disabled ? "link" : void 0,
			tabindex: t.disabled ? -1 : void 0,
			...s
		}), [() => Om(xh({
			variant: n(),
			size: r()
		}), t.class)]), G(j(o), () => t.children ?? w), A(o), xo(o, (e) => i(e), () => i()), W(e, o);
	}, d = (e) => {
		var a = Ch();
		fo(a, (e) => ({
			"data-slot": "button",
			class: e,
			type: o(),
			disabled: t.disabled,
			...s
		}), [() => Om(xh({
			variant: n(),
			size: r()
		}), t.class)]), G(j(a), () => t.children ?? w), A(a), xo(a, (e) => i(e), () => i()), W(e, a);
	};
	pa(l, (e) => {
		a() ? e(u) : e(d, -1);
	}), W(e, c), D();
}
//#endregion
//#region src/lib/components/ui/field/field.svelte
var Th = bh({
	base: "data-[invalid=true]:text-destructive gap-2 group/field flex w-full",
	variants: { orientation: {
		vertical: "cn-field-orientation-vertical flex-col [&>*]:w-full [&>.sr-only]:w-auto",
		horizontal: "cn-field-orientation-horizontal flex-row items-center has-[>[data-slot=field-content]]:items-start [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "cn-field-orientation-responsive flex-col @md/field-group:flex-row @md/field-group:items-center @md/field-group:has-[>[data-slot=field-content]]:items-start [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
}), Eh = /* @__PURE__ */ H("<div><!></div>");
function Dh(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = q(t, "orientation", 3, "vertical"), i = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"orientation",
		"children"
	]);
	var a = Eh();
	fo(a, (e) => ({
		role: "group",
		"data-slot": "field",
		"data-orientation": r(),
		class: e,
		...i
	}), [() => Om(Th({ orientation: r() }), t.class)]), G(j(a), () => t.children ?? w), A(a), xo(a, (e) => n(e), () => n()), W(e, a), D();
}
//#endregion
//#region src/lib/components/ui/field/field-group.svelte
var Oh = /* @__PURE__ */ H("<div><!></div>");
function kh(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Oh();
	fo(i, (e) => ({
		"data-slot": "field-group",
		class: e,
		...r
	}), [() => Om("gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col", t.class)]), G(j(i), () => t.children ?? w), A(i), xo(i, (e) => n(e), () => n()), W(e, i), D();
}
//#endregion
//#region src/lib/components/ui/label/label.svelte
function Ah(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var i = U(), a = M(i);
	{
		let e = /* @__PURE__ */ F(() => Om("gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed", t.class));
		Ta(a, () => If, (t, i) => {
			i(t, Eo({
				"data-slot": "label",
				get class() {
					return B(e);
				}
			}, () => r, {
				get ref() {
					return n();
				},
				set ref(e) {
					n(e);
				}
			}));
		});
	}
	W(e, i), D();
}
//#endregion
//#region src/lib/components/ui/input/input.svelte
var jh = /* @__PURE__ */ H("<input/>"), Mh = /* @__PURE__ */ H("<input/>");
function Nh(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = q(t, "value", 15), i = q(t, "files", 15), a = q(t, "data-slot", 3, "input"), o = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"value",
		"type",
		"files",
		"class",
		"data-slot"
	]);
	var s = U(), c = M(s), l = (e) => {
		var s = jh();
		fo(s, (e) => ({
			"data-slot": a(),
			class: e,
			type: "file",
			...o
		}), [() => Om("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", t.class)], void 0, void 0, void 0, !0), xo(s, (e) => n(e), () => n()), yo(s, i), go(s, r), W(e, s);
	}, u = (e) => {
		var i = Mh();
		fo(i, (e) => ({
			"data-slot": a(),
			class: e,
			type: t.type,
			...o
		}), [() => Om("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", t.class)], void 0, void 0, void 0, !0), xo(i, (e) => n(e), () => n()), go(i, r), W(e, i);
	};
	pa(c, (e) => {
		t.type === "file" ? e(l) : e(u, -1);
	}), W(e, s), D();
}
//#endregion
//#region src/shared/api/http.ts
var Ph = async (e) => fetch(e), Fh = async (e, t) => fetch(e, {
	body: t,
	credentials: "include",
	headers: { "Content-Type": "application/x-www-form-urlencoded" },
	method: "POST",
	redirect: "manual"
}), Ih = {
	status: !1,
	username: ""
}, Lh = (e) => {
	let { subscribe: t, set: n, update: r } = Zt({
		...Ih,
		...e
	});
	return {
		set: n,
		subscribe: t,
		init: (e) => n(e),
		resetStatus: () => r((e) => ({
			...e,
			status: Ih.status
		})),
		resetUsername: () => r((e) => ({
			...e,
			username: Ih.username
		})),
		updateStatus: (e) => r((t) => ({
			...t,
			status: e
		})),
		updateUsername: (e) => r((t) => ({
			...t,
			username: e
		}))
	};
}, Rh = async (e) => new Promise((t, n) => {
	h.once("login", (e) => {
		if (e.success) {
			t(e.name);
			return;
		}
		n(e.error);
	}), h.emit("login", e);
}), zh = async () => new Promise((e) => {
	h.once("rank", e);
}), Bh = async (e) => {
	await Fh(new URL("/login", window.location.origin), new URLSearchParams(e));
	let t = await (await Ph(new URL(window.location.href))).text(), n = new DOMParser().parseFromString(t, "text/html").querySelector("input[name=\"_csrf\"]");
	if (!n) {
		console.warn("login response missing csrf value");
		return;
	}
	let r = n.value;
	Si.updateCSRF(r);
}, Vh = async (e) => {
	await Fh(new URL("/logout", window.location.origin), new URLSearchParams(e));
}, Hh = async (e, t) => {
	h.disconnected && await p();
	let n = Rh({
		name: e,
		pw: t
	}), r = zh(), i = await n, a = await r;
	if (bi.updateName(i), bi.updateLoggedIn(!0), bi.updateRank(a), !t) return;
	let { csrf: o } = Qt(Si);
	Bh({
		_csrf: o,
		name: e,
		password: t,
		remember: "on"
	});
}, Uh = async () => {
	h.connected && await m();
	let { csrf: e } = Qt(Si);
	await Vh({ _csrf: e }), bi.resetName(), bi.resetLoggedIn(), bi.resetRank(), h.disconnected && await p();
}, Wh = Lh(), Gh = [
	["path", {
		d: "M7 14.9999C5.34315 14.9999 4 16.343 4 17.9999C4 19.6567 5.34315 20.9999 7 20.9999C8.65685 20.9999 10 19.6567 10 17.9999C10 16.343 8.65685 14.9999 7 14.9999Z",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M17 14.9999C15.3431 14.9999 14 16.343 14 17.9999C14 19.6567 15.3431 20.9999 17 20.9999C18.6569 20.9999 20 19.6567 20 17.9999C20 16.343 18.6569 14.9999 17 14.9999Z",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M14 17H10",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}],
	["path", {
		d: "M22 12.9999C19.5434 11.7724 15.9734 10.9999 12 10.9999C8.02658 10.9999 4.45659 11.7724 2 12.9999",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "3"
	}],
	["path", {
		d: "M19 11.4999L17.9425 4.71233C17.7268 3.32807 16.2232 2.578 15.0093 3.24907L14.3943 3.58903C12.9019 4.414 11.0981 4.414 9.60574 3.58903L8.99074 3.24907C7.77676 2.578 6.27318 3.32808 6.05751 4.71233L5 11.4999",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "4"
	}]
], Kh = [
	["path", {
		d: "M12 3V6",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M12 18V21",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M21 12L18 12",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeWidth: "1.5",
		key: "2"
	}],
	["path", {
		d: "M6 12L3 12",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeWidth: "1.5",
		key: "3"
	}],
	["path", {
		d: "M18.3635 5.63672L16.2422 7.75804",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeWidth: "1.5",
		key: "4"
	}],
	["path", {
		d: "M7.75804 16.2422L5.63672 18.3635",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeWidth: "1.5",
		key: "5"
	}],
	["path", {
		d: "M18.3635 18.3635L16.2422 16.2422",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeWidth: "1.5",
		key: "6"
	}],
	["path", {
		d: "M7.75804 7.75804L5.63672 5.63672",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeWidth: "1.5",
		key: "7"
	}]
], qh = [
	["path", {
		d: "M9.49811 15L16.9981 7.5",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M8.00634 7.67888L15.327 4.21881C18.3688 2.78111 19.8897 2.06226 20.8598 2.78341C21.8299 3.50455 21.5527 5.14799 20.9984 8.43486L20.0435 14.0968C19.6811 16.246 19.4998 17.3205 18.6989 17.7891C17.8979 18.2577 16.8574 17.8978 14.7765 17.178L8.41077 14.9762C4.51917 13.6301 2.57337 12.9571 2.50019 11.6365C2.427 10.3159 4.28678 9.43692 8.00634 7.67888Z",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M9.49811 15.5V17.7274C9.49811 20.101 9.49811 21.2878 10.2083 21.4771C10.9185 21.6663 11.6664 20.6789 13.1622 18.7039L13.9981 17.5",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}]
], Jh = [["path", {
	d: "M11.9532 2.00004C17.5019 2.00004 22 6.47719 22 12C22 17.5229 17.5019 22 11.9532 22C-0.631103 22 -1.82658 4.01759 11.4985 5.00004C14.8499 5.24714 18.0289 8.41019 18.0289 12C18.0289 16.5 15.2348 18.5 11.4985 18.5C4.5 18.5 3.19042 8.46695 11.0021 9.00004C12.508 9.1028 14.0162 10.3432 14.0162 12C14.0162 13.9279 13 15 11.1211 15",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}]], Yh = [
	["path", {
		d: "M15.5 10.5C15.5 8.567 13.933 7 12 7C10.067 7 8.5 8.567 8.5 10.5C8.5 12.433 10.067 14 12 14C13.933 14 15.5 12.433 15.5 10.5Z",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M18 20C18 16.6863 15.3137 14 12 14C8.68629 14 6 16.6863 6 20",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}]
], Xh = [["path", {
	d: "M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}], ["path", {
	d: "M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "1"
}]], Zh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function Qh(e, t) {
	let n = (e, n) => {
		let { color: r = "currentColor", size: i = 24, strokeWidth: a, absoluteStrokeWidth: o = !1, class: s = "", altIcon: c, showAlt: l = !1, ...u } = n, d = {
			xmlns: "http://www.w3.org/2000/svg",
			width: i,
			height: i,
			viewBox: "0 0 24 24",
			fill: "none",
			color: r,
			class: s,
			...u
		}, f = l && c ? c : t, p = a === void 0 ? void 0 : o ? a * (24 / Number(i)) : a;
		Object.entries(d).forEach(([t, n]) => {
			e.setAttribute(Zh(t), String(n));
		}), e.innerHTML = "", f.forEach(([t, n]) => {
			let r = document.createElementNS("http://www.w3.org/2000/svg", t), i = { ...n };
			p !== void 0 && (i["stroke-width"] = p, i.stroke = "currentColor"), Object.entries(i).forEach(([e, t]) => {
				r.setAttribute(Zh(e), String(t));
			}), e.appendChild(r);
		});
	};
	return { render(e, t) {
		return n(e, t), {
			update(t) {
				n(e, t);
			},
			destroy() {
				e.innerHTML = "";
			}
		};
	} };
}
//#endregion
//#region node_modules/@hugeicons/svelte/dist/components/HugeiconsIcon.svelte
var $h = /* @__PURE__ */ na("<svg></svg>");
function eg(e, t) {
	E(t, !0);
	let n = q(t, "size", 3, 24), r = q(t, "absoluteStrokeWidth", 3, !1), i = q(t, "color", 3, "currentColor"), a = q(t, "showAlt", 3, !1), o = q(t, "class", 3, ""), s = q(t, "className", 3, ""), c = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"icon",
		"altIcon",
		"size",
		"strokeWidth",
		"absoluteStrokeWidth",
		"color",
		"showAlt",
		"class",
		"className"
	]), l = /* @__PURE__ */ F(() => o() || s()), u, d = /* @__PURE__ */ I(void 0), f = /* @__PURE__ */ I(void 0), p = /* @__PURE__ */ F(() => ({
		size: n(),
		strokeWidth: t.strokeWidth,
		absoluteStrokeWidth: r(),
		color: i(),
		altIcon: t.altIcon,
		showAlt: a(),
		class: B(l)
	}));
	Do(() => {
		if (u) return L(d, Qh("HugeiconsIcon", t.icon), !0), L(f, B(d).render(u, B(p)), !0), () => {
			B(f)?.destroy();
		};
	}), Vr(() => {
		B(d) && u && B(f) && B(f).update(B(p));
	});
	var m = $h();
	fo(m, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		width: n(),
		height: n(),
		viewBox: "0 0 24 24",
		fill: "none",
		class: B(l),
		...c
	})), xo(m, (e) => u = e, () => u), W(e, m), D();
}
//#endregion
//#region node_modules/svelte/src/transition/index.js
var tg = (e) => e;
function ng(e) {
	return e < .5 ? 4 * e * e * e : .5 * (2 * e - 2) ** 3 + 1;
}
function rg(e) {
	let t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"];
}
function ig(e, { delay: t = 0, duration: n = 400, easing: r = ng, amount: i = 5, opacity: a = 0 } = {}) {
	let o = getComputedStyle(e), s = +o.opacity, c = o.filter === "none" ? "" : o.filter, l = s * (1 - a), [u, d] = rg(i);
	return {
		delay: t,
		duration: n,
		easing: r,
		css: (e, t) => `opacity: ${s - l * t}; filter: ${c} blur(${t * u}${d});`
	};
}
function ag(e, { delay: t = 0, duration: n = 400, easing: r = tg } = {}) {
	let i = +getComputedStyle(e).opacity;
	return {
		delay: t,
		duration: n,
		easing: r,
		css: (e) => `opacity: ${e * i}`
	};
}
//#endregion
//#region src/features/auth/AuthAvatar.svelte
var og = /* @__PURE__ */ H("<span><!></span>"), sg = /* @__PURE__ */ H("<span><!></span>"), cg = /* @__PURE__ */ H("<span><!></span>"), lg = /* @__PURE__ */ H("<span><!></span>"), ug = /* @__PURE__ */ H("<div><!></div>");
function dg(e, t) {
	var n = ug(), r = j(n), i = (e) => {
		var t = og();
		eg(j(t), {
			get icon() {
				return Kh;
			},
			class: "size-5 animate-spin",
			role: "status",
			"aria-label": "Loading"
		}), A(t), Ia(3, t, () => ag, () => ({ duration: 250 })), W(e, t);
	}, a = (e) => {
		var t = sg();
		eg(j(t), {
			get icon() {
				return Gh;
			},
			class: "size-5"
		}), A(t), Ia(3, t, () => ag, () => ({ duration: 250 })), W(e, t);
	}, o = (e) => {
		var t = cg();
		eg(j(t), {
			get icon() {
				return Xh;
			},
			class: "size-5"
		}), A(t), Ia(3, t, () => ag, () => ({ duration: 250 })), W(e, t);
	}, s = (e) => {
		var t = lg();
		eg(j(t), {
			get icon() {
				return Yh;
			},
			class: "size-5"
		}), A(t), Ia(3, t, () => ag, () => ({ duration: 250 })), W(e, t);
	};
	pa(r, (e) => {
		t.isLoading ? e(i) : t.isAnon ? e(a, 1) : t.isGuest ? e(o, 2) : e(s, -1);
	}), A(n), W(e, n);
}
//#endregion
//#region src/features/auth/LoginForm.svelte
var fg = 1, pg = 20, mg = 100, hg = /* @__PURE__ */ th(/* @__PURE__ */ eh(), /* @__PURE__ */ Qm(fg, "Min 1 character"), /* @__PURE__ */ Zm(pg, "Max 20 characters"), /* @__PURE__ */ $m(/^[A-Za-zА-Яа-я0-9_-]+$/, "Only letters, numbers, -, or _")), gg = /* @__PURE__ */ th(/* @__PURE__ */ eh(), /* @__PURE__ */ Zm(mg, "Max 100 characters")), _g = /* @__PURE__ */ H("<!> <!> <!> <!>", 1), vg = /* @__PURE__ */ H("<div class=\"ml-auto w-full max-w-md\"><form><!></form></div>");
function yg(e, t) {
	E(t, !0);
	let n = () => nn(Wh, "$authStore", r), [r, i] = rn(), a = /* @__PURE__ */ F(() => n().status), o = /* @__PURE__ */ F(() => n().username), s = /* @__PURE__ */ F(() => /* @__PURE__ */ nh(hg, B(o))), c = /* @__PURE__ */ F(() => B(s).success), l = /* @__PURE__ */ F(() => B(o) !== "" && !B(c)), u = /* @__PURE__ */ F(() => B(s).success ? "" : B(s).issues.map((e) => e.message).join(", ")), d = /* @__PURE__ */ F(() => n().password || ""), f = /* @__PURE__ */ F(() => !B(c) || B(a)), p = /* @__PURE__ */ F(() => /* @__PURE__ */ nh(gg, B(d))), m = /* @__PURE__ */ F(() => B(p).success), h = /* @__PURE__ */ F(() => B(d) !== "" && !B(m)), g = /* @__PURE__ */ F(() => B(p).success ? "" : B(p).issues.map((e) => e.message).join(", ")), _ = /* @__PURE__ */ F(() => B(a) || !B(c) || B(c) && !B(m)), v = async (e) => {
		if (e.preventDefault(), !B(_)) try {
			on(Wh, V(n).status = !0, V(n)), await new Promise((e) => setTimeout(e, 500)), await Hh(B(o), B(d));
		} catch (e) {
			console.error(e);
		} finally {
			on(Wh, V(n).status = !1, V(n)), on(Wh, V(n).username = "", V(n)), on(Wh, V(n).password = void 0, V(n));
		}
	};
	var y = vg(), b = j(y);
	kh(j(b), {
		children: (e, t) => {
			Dh(e, {
				orientation: "responsive",
				class: "flex flex-row items-center justify-end",
				children: (e, t) => {
					var r = _g(), i = M(r);
					{
						let e = /* @__PURE__ */ F(() => B(o) === "" && B(d) === ""), t = /* @__PURE__ */ F(() => B(d) === "");
						dg(i, {
							get isLoading() {
								return B(a);
							},
							get isAnon() {
								return B(e);
							},
							get isGuest() {
								return B(t);
							}
						});
					}
					var s = N(i, 2);
					{
						let e = /* @__PURE__ */ F(() => B(l) ? B(u) : ""), t = /* @__PURE__ */ F(() => Om({ "md:cursor-not-allowed": B(a) }));
						Nh(s, {
							required: !0,
							type: "text",
							autocomplete: "name",
							placeholder: "Username",
							get "aria-invalid"() {
								return B(l);
							},
							get title() {
								return B(e);
							},
							get disabled() {
								return B(a);
							},
							get class() {
								return B(t);
							},
							get value() {
								return n().username;
							},
							set value(e) {
								on(Wh, V(n).username = e, V(n));
							}
						});
					}
					var c = N(s, 2);
					{
						let e = /* @__PURE__ */ F(() => B(h) ? B(g) : ""), t = /* @__PURE__ */ F(() => Om({ "md:cursor-not-allowed": B(f) }));
						Nh(c, {
							name: "password",
							type: "password",
							autocomplete: "current-password",
							placeholder: "Password",
							get "aria-invalid"() {
								return B(h);
							},
							get title() {
								return B(e);
							},
							get disabled() {
								return B(f);
							},
							get class() {
								return B(t);
							},
							get value() {
								return n().password;
							},
							set value(e) {
								on(Wh, V(n).password = e, V(n));
							}
						});
					}
					var p = N(c, 2);
					{
						let e = /* @__PURE__ */ F(() => Om({ "md:cursor-not-allowed": B(_) }));
						wh(p, {
							type: "submit",
							get disabled() {
								return B(_);
							},
							get class() {
								return B(e);
							},
							children: (e, t) => {
								wt(), W(e, ra("Login"));
							},
							$$slots: { default: !0 }
						});
					}
					W(e, r);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), A(b), A(y), Ki("submit", b, v), W(e, y), D(), i();
}
//#endregion
//#region src/features/auth/LogoutForm.svelte
var bg = /* @__PURE__ */ H("<!> <!> <!>", 1), xg = /* @__PURE__ */ H("<div class=\"ml-auto w-full max-w-md\"><form><!></form></div>");
function Sg(e, t) {
	E(t, !0);
	let n = () => nn(Wh, "$authStore", i), r = () => nn(bi, "$clientStore", i), [i, a] = rn(), o = /* @__PURE__ */ F(() => n().status), s = /* @__PURE__ */ F(() => r().rank > 0), c = async (e) => {
		if (e.preventDefault(), !B(o)) try {
			on(Wh, V(n).status = !0, V(n)), await new Promise((e) => setTimeout(e, 500)), await Uh();
		} catch (e) {
			console.error(e);
		} finally {
			on(Wh, V(n).status = !1, V(n)), on(Wh, V(n).username = "", V(n)), on(Wh, V(n).password = void 0, V(n));
		}
	};
	var l = xg(), u = j(l);
	kh(j(u), {
		children: (e, t) => {
			Dh(e, {
				orientation: "responsive",
				class: "flex flex-row items-center justify-end selection:bg-primary",
				children: (e, t) => {
					var n = bg(), i = M(n);
					{
						let e = /* @__PURE__ */ F(() => !B(s));
						dg(i, {
							get isLoading() {
								return B(o);
							},
							isAnon: !1,
							get isGuest() {
								return B(e);
							}
						});
					}
					var a = N(i, 2);
					Ah(a, {
						class: "w-auto flex-none",
						children: (e, t) => {
							wt();
							var n = ra();
							Yr(() => oa(n, r().name)), W(e, n);
						},
						$$slots: { default: !0 }
					});
					var c = N(a, 2);
					{
						let e = /* @__PURE__ */ F(() => Om({ "md:cursor-not-allowed": B(o) }));
						wh(c, {
							type: "submit",
							get disabled() {
								return B(o);
							},
							get class() {
								return B(e);
							},
							children: (e, t) => {
								wt(), W(e, ra("Logout"));
							},
							$$slots: { default: !0 }
						});
					}
					W(e, n);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), A(u), A(l), Ki("submit", u, c), W(e, l), D(), a();
}
//#endregion
//#region src/features/auth/AuthForm.svelte
function Cg(e, t) {
	var n = U(), r = M(n), i = (e) => {
		Sg(e, {});
	}, a = (e) => {
		yg(e, {});
	};
	pa(r, (e) => {
		t.isLoggedIn ? e(i) : e(a, -1);
	}), W(e, n);
}
//#endregion
//#region src/shared/components/layout/Header.svelte
var wg = new URL("dist/logo.png", window.BASE_URL).toString(), Tg = /* @__PURE__ */ H("<header class=\"sticky top-0 z-50 mx-auto flex h-15 w-full flex-row items-center justify-start bg-background md:bg-background/80 md:backdrop-blur-md\"><!> <div class=\"flex w-full flex-row items-center justify-between py-5 pr-6\"><!> <!></div></header>");
function Eg(e, t) {
	E(t, !1);
	let n = () => nn(vi, "$appStore", a), r = () => nn(wi, "$socketStore", a), i = () => nn(bi, "$clientStore", a), [a, o] = rn();
	So();
	var s = Tg(), c = j(s), l = (e) => {
		Lm(e, { get version() {
			return n().version;
		} });
	};
	pa(c, (e) => {
		n().version && e(l);
	});
	var u = N(c, 2), d = j(u);
	Fm(d, {
		get imgSrc() {
			return wg;
		},
		get isConnected() {
			return r().connected;
		}
	});
	var f = N(d, 2), m = (e) => {
		Cg(e, { get isLoggedIn() {
			return i().logged_in;
		} });
	}, h = (e) => {
		wh(e, {
			get onclick() {
				return p;
			},
			children: (e, t) => {
				wt(), W(e, ra("Reconnect"));
			},
			$$slots: { default: !0 }
		});
	};
	pa(f, (e) => {
		r().connected ? e(m) : e(h, -1);
	}), A(u), A(s), W(e, s), D(), o();
}
//#endregion
//#region src/features/auth/GuestLoginForm.svelte
var Dg = /* @__PURE__ */ H("<!> <!>", 1), Og = /* @__PURE__ */ H("<form><!></form>");
function kg(e, t) {
	E(t, !0);
	let n = () => nn(Wh, "$authStore", r), [r, i] = rn(), a = /* @__PURE__ */ F(() => n().username), o = /* @__PURE__ */ F(() => n().status), s = async (e) => {
		if (e.preventDefault(), !B(o)) try {
			on(Wh, V(n).status = !0, V(n)), await new Promise((e) => setTimeout(e, 500)), await Hh(B(a));
		} catch (e) {
			console.error(e);
		} finally {
			on(Wh, V(n).status = !1, V(n)), on(Wh, V(n).username = "", V(n)), on(Wh, V(n).password = void 0, V(n));
		}
	};
	var c = Og();
	kh(j(c), {
		children: (e, t) => {
			Dh(e, {
				orientation: "horizontal",
				class: "flex flex-row items-start justify-start gap-0",
				children: (e, t) => {
					var r = Dg(), i = M(r);
					{
						let e = /* @__PURE__ */ F(() => B(a) === "");
						wh(i, {
							type: "submit",
							class: "flex-2 rounded-none border-none",
							get disabled() {
								return B(e);
							},
							children: (e, t) => {
								wt(), W(e, ra("Guest Login"));
							},
							$$slots: { default: !0 }
						});
					}
					Nh(N(i, 2), {
						required: !0,
						class: "flex-8 rounded-none border-none",
						type: "text",
						autocomplete: "name",
						placeholder: "Username",
						get disabled() {
							return B(o);
						},
						get value() {
							return n().username;
						},
						set value(e) {
							on(Wh, V(n).username = e, V(n));
						}
					}), W(e, r);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), A(c), Yr((e) => qa(c, 1, e), [() => Va(Om(t.class))]), Ki("submit", c, s), W(e, c), D(), i();
}
//#endregion
//#region src/lib/components/ui/textarea/textarea.svelte
var Ag = /* @__PURE__ */ H("<textarea></textarea>");
function jg(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = q(t, "value", 15), i = q(t, "data-slot", 3, "textarea"), a = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"value",
		"class",
		"data-slot"
	]);
	var o = Ag();
	rr(o), fo(o, (e) => ({
		"data-slot": i(),
		class: e,
		...a
	}), [() => Om("border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-lg border bg-transparent px-2.5 py-2 text-base transition-colors focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50", t.class)]), xo(o, (e) => n(e), () => n()), go(o, r), W(e, o), D();
}
//#endregion
//#region src/features/chat/ChatForm.svelte
var Mg = /* @__PURE__ */ H("<!> <!>", 1), Ng = /* @__PURE__ */ H("<form><!></form>");
function Pg(e, t) {
	E(t, !0);
	let n = /* @__PURE__ */ I(""), r = async (e) => {
		e.preventDefault(), console.log(B(n)), L(n, "");
	};
	var i = Ng();
	kh(j(i), {
		class: "flex flex-1 flex-row",
		children: (e, t) => {
			Dh(e, {
				orientation: "horizontal",
				class: "flex flex-1 flex-row items-start justify-start gap-0",
				children: (e, t) => {
					var r = Mg(), i = M(r);
					jg(i, {
						required: !0,
						class: "h-full flex-9 resize-none rounded-none border-none",
						autocomplete: "off",
						placeholder: "Chat message",
						get value() {
							return B(n);
						},
						set value(e) {
							L(n, e, !0);
						}
					}), wh(N(i, 2), {
						type: "submit",
						class: "h-full flex-1 rounded-none border-none",
						children: (e, t) => {
							eg(e, {
								get icon() {
									return qh;
								},
								class: "size-5",
								role: "button",
								"aria-label": "Send"
							});
						},
						$$slots: { default: !0 }
					}), W(e, r);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), A(i), Yr((e) => qa(i, 1, e), [() => Va(Om(t.class, "flex flex-row"))]), Ki("submit", i, r), W(e, i), D();
}
//#endregion
//#region node_modules/svelte/src/easing/index.js
function Fg(e) {
	let t = e - 1;
	return t * t * t + 1;
}
function Ig(e) {
	return --e * e * e * e * e + 1;
}
//#endregion
//#region node_modules/svelte/src/animate/index.js
function Lg(e, { from: t, to: n }, r = {}) {
	var { delay: i = 0, duration: a = (e) => Math.sqrt(e) * 120, easing: o = Fg } = r, s = getComputedStyle(e), c = s.transform === "none" ? "" : s.transform, [l, u] = s.transformOrigin.split(" ").map(parseFloat);
	l /= e.clientWidth, u /= e.clientHeight;
	var d = Rg(e), f = e.clientWidth / n.width / d, p = e.clientHeight / n.height / d, m = t.left + t.width * l, h = t.top + t.height * u, g = n.left + n.width * l, _ = n.top + n.height * u, v = (m - g) * f, y = (h - _) * p, b = t.width / n.width, x = t.height / n.height;
	return {
		delay: i,
		duration: typeof a == "function" ? a(Math.sqrt(v * v + y * y)) : a,
		easing: o,
		css: (e, t) => `transform: ${c} translate(${t * v}px, ${t * y}px) scale(${e + t * b}, ${e + t * x});`
	};
}
function Rg(e) {
	if ("currentCSSZoom" in e) return e.currentCSSZoom;
	for (var t = e, n = 1; t !== null;) n *= +getComputedStyle(t).zoom, t = t.parentElement;
	return n;
}
//#endregion
//#region src/lib/components/ui/empty/empty.svelte
var zg = /* @__PURE__ */ H("<div><!></div>");
function Bg(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = zg();
	fo(i, (e) => ({
		"data-slot": "empty",
		class: e,
		...r
	}), [() => Om("gap-4 rounded-xl border-dashed p-6 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance", t.class)]), G(j(i), () => t.children ?? w), A(i), xo(i, (e) => n(e), () => n()), W(e, i), D();
}
//#endregion
//#region src/lib/components/ui/empty/empty-header.svelte
var Vg = /* @__PURE__ */ H("<div><!></div>");
function Hg(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Vg();
	fo(i, (e) => ({
		"data-slot": "empty-header",
		class: e,
		...r
	}), [() => Om("gap-2 flex max-w-sm flex-col items-center", t.class)]), G(j(i), () => t.children ?? w), A(i), xo(i, (e) => n(e), () => n()), W(e, i), D();
}
//#endregion
//#region src/lib/components/ui/empty/empty-media.svelte
var Ug = bh({
	base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
	variants: { variant: {
		default: "bg-transparent",
		icon: "bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-4"
	} },
	defaultVariants: { variant: "default" }
}), Wg = /* @__PURE__ */ H("<div><!></div>");
function Gg(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = q(t, "variant", 3, "default"), i = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children",
		"variant"
	]);
	var a = Wg();
	fo(a, (e) => ({
		"data-slot": "empty-icon",
		"data-variant": r(),
		class: e,
		...i
	}), [() => Om(Ug({ variant: r() }), t.class)]), G(j(a), () => t.children ?? w), A(a), xo(a, (e) => n(e), () => n()), W(e, a), D();
}
//#endregion
//#region src/lib/components/ui/empty/empty-title.svelte
var Kg = /* @__PURE__ */ H("<div><!></div>");
function qg(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Kg();
	fo(i, (e) => ({
		"data-slot": "empty-title",
		class: e,
		...r
	}), [() => Om("font-heading text-sm font-medium tracking-tight", t.class)]), G(j(i), () => t.children ?? w), A(i), xo(i, (e) => n(e), () => n()), W(e, i), D();
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card.svelte
function Jg(e, t) {
	E(t, !0);
	let n = q(t, "open", 15, !1), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"open"
	]);
	var i = U();
	Ta(M(i), () => Hf, (e, t) => {
		t(e, Eo(() => r, {
			get open() {
				return n();
			},
			set open(e) {
				n(e);
			}
		}));
	}), W(e, i), D();
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-portal.svelte
function Yg(e, t) {
	let n = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	var r = U();
	Ta(M(r), () => Dc, (e, t) => {
		t(e, Eo(() => n));
	}), W(e, r);
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-content.svelte
function Xg(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = q(t, "align", 3, "center"), i = q(t, "sideOffset", 3, 4), a = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"align",
		"sideOffset",
		"portalProps"
	]);
	Yg(e, Eo(() => t.portalProps, {
		children: (e, o) => {
			var s = U(), c = M(s);
			{
				let e = /* @__PURE__ */ F(() => Om("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground w-64 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 origin-(--transform-origin) outline-hidden", t.class));
				Ta(c, () => qf, (t, o) => {
					o(t, Eo({
						"data-slot": "hover-card-content",
						get align() {
							return r();
						},
						get sideOffset() {
							return i();
						},
						get class() {
							return B(e);
						}
					}, () => a, {
						get ref() {
							return n();
						},
						set ref(e) {
							n(e);
						}
					}));
				});
			}
			W(e, s);
		},
		$$slots: { default: !0 }
	})), D();
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-trigger.svelte
function Zg(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref"
	]);
	var i = U();
	Ta(M(i), () => Yf, (e, t) => {
		t(e, Eo({ "data-slot": "hover-card-trigger" }, () => r, {
			get ref() {
				return n();
			},
			set ref(e) {
				n(e);
			}
		}));
	}), W(e, i), D();
}
//#endregion
//#region src/features/userlist/UserCard.svelte
var Qg = /* @__PURE__ */ H("<!> <!>", 1), $g = /* @__PURE__ */ H("<p class=\"text-sm\"> </p>"), e_ = /* @__PURE__ */ H("<div class=\"flex justify-between space-x-4\"><!> <div class=\"space-y-1\"><h4 class=\"text-sm font-semibold\"> </h4> <!></div></div>");
function t_(e, t) {
	E(t, !0);
	var n = e_(), r = j(n), i = (e) => {
		km(e, {
			children: (e, n) => {
				var r = Qg(), i = M(r);
				Am(i, { get src() {
					return t.user.profile.image;
				} }), jm(N(i, 2), {
					children: (e, t) => {
						wt(), W(e, ra("Profile Image"));
					},
					$$slots: { default: !0 }
				}), W(e, r);
			},
			$$slots: { default: !0 }
		});
	};
	pa(r, (e) => {
		t.user.profile.image !== "" && e(i);
	});
	var a = N(r, 2), o = j(a), s = j(o, !0);
	A(o);
	var c = N(o, 2), l = (e) => {
		var n = $g(), r = j(n, !0);
		A(n), Yr(() => oa(r, t.user.profile.text)), W(e, n);
	};
	pa(c, (e) => {
		t.user.profile.text !== "" && e(l);
	}), A(a), A(n), Yr(() => oa(s, t.user.name)), W(e, n), D();
}
//#endregion
//#region src/features/userlist/Userlist.svelte
var n_ = "text-purple-600", r_ = "text-red-600", i_ = "text-amber-600", a_ = "text-white", o_ = "text-gray-600", s_ = (e) => e >= ui.SITERADMIN ? n_ : e >= ui.ADMIN ? r_ : e == ui.MODERATOR ? i_ : e >= ui.USER ? a_ : o_, c_ = /* @__PURE__ */ H("<li><!></li>"), l_ = /* @__PURE__ */ H("<ul class=\"no-scrollbar overflow-auto\"></ul> <!>", 1), u_ = /* @__PURE__ */ H("<!> <!>", 1), d_ = /* @__PURE__ */ H("<div><!></div>");
function f_(e, t) {
	E(t, !0);
	let n = () => nn(gi, "$userlistStore", r), [r, i] = rn(), a = /* @__PURE__ */ F(() => n().userlist), o = /* @__PURE__ */ F(() => B(a).length > 0), s = /* @__PURE__ */ I(null);
	var c = d_(), l = j(c), u = (e) => {
		Jg(e, {
			children: (e, t) => {
				var n = l_(), r = M(n);
				ya(r, 29, () => B(a), (e) => e.name, (e, t) => {
					var n = c_();
					Zg(j(n), {
						children: (e, n) => {
							wt();
							var r = ra();
							Yr(() => oa(r, B(t).name)), W(e, r);
						},
						$$slots: { default: !0 }
					}), A(n), Yr((e) => qa(n, 1, e), [() => Va(Om(s_(B(t).rank), "font-bold"))]), Ki("mouseenter", n, () => L(s, B(t), !0)), Fa(n, () => Lg, () => ({
						duration: 200,
						easing: Ig
					})), Ia(3, n, () => ig, () => ({ duration: 200 })), W(e, n);
				}), A(r);
				var i = N(r, 2), o = (e) => {
					Xg(e, {
						children: (e, t) => {
							t_(e, { get user() {
								return B(s);
							} });
						},
						$$slots: { default: !0 }
					});
				};
				pa(i, (e) => {
					B(s) && e(o);
				}), W(e, n);
			},
			$$slots: { default: !0 }
		});
	}, d = (e) => {
		Bg(e, {
			children: (e, t) => {
				Hg(e, {
					children: (e, t) => {
						var n = u_(), r = M(n);
						Gg(r, {
							variant: "icon",
							children: (e, t) => {
								eg(e, {
									get icon() {
										return Jh;
									},
									class: "size-5 motion-safe:animate-[spin_6s_linear_infinite]"
								});
							},
							$$slots: { default: !0 }
						}), qg(N(r, 2), {
							class: "select-none",
							children: (e, t) => {
								wt(), W(e, ra("No users"));
							},
							$$slots: { default: !0 }
						}), W(e, n);
					},
					$$slots: { default: !0 }
				});
			},
			$$slots: { default: !0 }
		});
	};
	pa(l, (e) => {
		B(o) ? e(u) : e(d, -1);
	}), A(c), Yr((e) => qa(c, 1, e), [() => Va(Om(t.class))]), W(e, c), D(), i();
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/is.js
function p_(e) {
	return typeof e == "function";
}
function m_(e) {
	return typeof e == "object" && !!e;
}
var h_ = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function g_(e) {
	return e == null || h_.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => g_(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/box/box.svelte.js
var __ = Symbol("box"), v_ = Symbol("is-writable");
function y_(e) {
	return m_(e) && __ in e;
}
function b_(e) {
	return Q.isBox(e) && v_ in e;
}
function Q(e) {
	let t = /* @__PURE__ */ I(Dt(e));
	return {
		[__]: !0,
		[v_]: !0,
		get current() {
			return B(t);
		},
		set current(e) {
			L(t, e, !0);
		}
	};
}
function x_(e, t) {
	let n = /* @__PURE__ */ F(e);
	return t ? {
		[__]: !0,
		[v_]: !0,
		get current() {
			return B(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[__]: !0,
		get current() {
			return e();
		}
	};
}
function S_(e) {
	return Q.isBox(e) ? e : p_(e) ? Q.with(e) : Q(e);
}
function C_(e) {
	return Object.entries(e).reduce((e, [t, n]) => Q.isBox(n) ? (Q.isWritableBox(n) ? Object.defineProperty(e, t, {
		get() {
			return n.current;
		},
		set(e) {
			n.current = e;
		}
	}) : Object.defineProperty(e, t, { get() {
		return n.current;
	} }), e) : Object.assign(e, { [t]: n }), {});
}
function w_(e) {
	return Q.isWritableBox(e) ? {
		[__]: !0,
		get current() {
			return e.current;
		}
	} : e;
}
Q.from = S_, Q.with = x_, Q.flatten = C_, Q.readonly = w_, Q.isBox = y_, Q.isWritableBox = b_;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
function T_(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/strings.js
var E_ = /\d/, D_ = [
	"-",
	"_",
	"/",
	"."
];
function O_(e = "") {
	if (!E_.test(e)) return e !== e.toLowerCase();
}
function k_(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = D_.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = O_(a);
		if (i === !1) {
			if (r === !1 && o === !0) {
				t.push(n), n = a, r = o;
				continue;
			}
			if (r === !0 && o === !1 && n.length > 1) {
				let e = n.at(-1);
				t.push(n.slice(0, Math.max(0, n.length - 1))), n = e + a, r = o;
				continue;
			}
		}
		n += a, r = o, i = e;
	}
	return t.push(n), t;
}
function A_(e) {
	return e ? k_(e).map((e) => M_(e)).join("") : "";
}
function j_(e) {
	return N_(A_(e || ""));
}
function M_(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function N_(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function P_(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[A_(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[j_(e)] = n;
	}
	return ts(e, n), t;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
function F_(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/events.js
function I_(e, t, n, r) {
	let i = Array.isArray(t) ? t : [t];
	return i.forEach((t) => e.addEventListener(t, n, r)), () => {
		i.forEach((t) => e.removeEventListener(t, n, r));
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function L_(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var R_ = L_(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function z_(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${R_(t)}: ${e[t]};`).join("\n");
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/style.js
function B_(e = {}) {
	return z_(e).replace("\n", " ");
}
B_({
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: "0",
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	borderWidth: "0",
	transform: "translateX(-100%)"
});
var V_ = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/merge-props.js
function H_(e) {
	return V_.has(e);
}
function U_(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
				if (a && typeof o && H_(e)) t[e] = T_(n, i);
				else if (a && o) t[e] = F_(n, i);
				else if (e === "class") {
					let r = g_(n), a = g_(i);
					r && a ? t[e] = Ba(n, i) : r ? t[e] = Ba(n) : a && (t[e] = Ba(i));
				} else if (e === "style") {
					let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
					if (r && a) t[e] = {
						...n,
						...i
					};
					else if (r && s) {
						let r = P_(i);
						t[e] = {
							...n,
							...r
						};
					} else if (o && a) t[e] = {
						...P_(n),
						...i
					};
					else if (o && s) {
						let r = P_(n), a = P_(i);
						t[e] = {
							...r,
							...a
						};
					} else r ? t[e] = n : a ? t[e] = i : o ? t[e] = n : s && (t[e] = i);
				} else t[e] = i === void 0 ? n : i;
			}
			for (let e of Object.getOwnPropertySymbols(r)) {
				let n = t[e], i = r[e];
				t[e] = i === void 0 ? n : i;
			}
		}
	}
	return typeof t.style == "object" && (t.style = B_(t.style).replaceAll("\n", " ")), t.hidden !== !0 && (t.hidden = void 0, delete t.hidden), t.disabled !== !0 && (t.disabled = void 0, delete t.disabled), t;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/internal/configurable-globals.js
var W_ = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/internal/utils/dom.js
function G_(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot;) {
		let e = t.shadowRoot.activeElement;
		if (e === t) break;
		t = e;
	}
	return t;
}
new class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: t = W_, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = kn((e) => {
			let n = Gi(t, "focusin", e), r = Gi(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? G_(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/utilities/watch/watch.svelte.js
function K_(e, t) {
	switch (e) {
		case "post":
			Vr(t);
			break;
		case "pre":
			Ur(t);
			break;
	}
}
function q_(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	K_(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = V(() => n(t, o));
		return o = t, r;
	});
}
function J_(e, t, n) {
	let r = Wr(() => {
		let i = !1;
		q_(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Vr(() => r);
}
function Y_(e, t, n) {
	q_(e, "post", t, n);
}
function X_(e, t, n) {
	q_(e, "pre", t, n);
}
Y_.pre = X_;
function Z_(e, t) {
	J_(e, "post", t);
}
function Q_(e, t) {
	J_(e, "pre", t);
}
Z_.pre = Q_;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/utilities/resource/resource.svelte.js
function $_(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function ev(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function tv(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ I(Dt(o)), u = /* @__PURE__ */ I(!1), d = /* @__PURE__ */ I(void 0), f = /* @__PURE__ */ I(Dt([])), p = () => {
		B(f).forEach((e) => e()), L(f, [], !0);
	}, m = (e) => {
		L(f, [...B(f), e], !0);
	}, h = async (e, n, r = !1) => {
		try {
			L(u, !0), L(d, void 0), p();
			let i = new AbortController();
			m(() => i.abort());
			let a = await t(e, n, {
				data: B(l),
				refetching: r,
				onCleanup: m,
				signal: i.signal
			});
			return L(l, a, !0), a;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || L(d, e, !0);
			return;
		} finally {
			L(u, !1);
		}
	}, g = s ? $_(h, s) : c ? ev(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
	return r((t, n) => {
		a && v || (v = t, g(Array.isArray(e) ? t : t[0], Array.isArray(e) ? n : n?.[0]));
	}, { lazy: i }), {
		get current() {
			return B(l);
		},
		get loading() {
			return B(u);
		},
		get error() {
			return B(d);
		},
		mutate: (e) => {
			L(l, e, !0);
		},
		refetch: (t) => {
			let n = _.map((e) => e());
			return g(Array.isArray(e) ? n : n[0], Array.isArray(e) ? n : n[0], t ?? !0);
		}
	};
}
function nv(e, t, n) {
	return tv(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		Y_(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function rv(e, t, n) {
	return tv(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		Y_.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
nv.pre = rv;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/after-tick.js
function iv(e) {
	jr().then(e);
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/dom.js
var av = 9;
function ov(e) {
	return m_(e) && e.nodeType === av;
}
function sv(e) {
	return m_(e) && e.constructor?.name === "VisualViewport";
}
function cv(e) {
	return ov(e) ? e : sv(e) ? e.document : e?.ownerDocument ?? document;
}
function lv(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot;) {
		let e = t.shadowRoot.activeElement;
		if (e === t) break;
		t = e;
	}
	return t;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/dom-context.svelte.js
var uv = class {
	element;
	#e = /* @__PURE__ */ F(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return B(this.#e);
	}
	set root(e) {
		L(this.#e, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = Q.with(e) : this.element = e;
	}
	getDocument = () => cv(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => lv(this.root);
	isActiveElement = (e) => e === this.getActiveElement();
	getElementById(e) {
		return this.root.getElementById(e);
	}
	querySelector = (e) => this.root ? this.root.querySelector(e) : null;
	querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
	setTimeout = (e, t) => this.getWindow().setTimeout(e, t);
	clearTimeout = (e) => this.getWindow().clearTimeout(e);
};
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/attach-ref.js
function dv(e, t) {
	return { [ji()]: (n) => Q.isBox(e) ? (e.current = n, V(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), V(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/aria.js
function fv({ layout: e, panesArray: t, pivotIndices: n }) {
	let r = 0, i = 100, a = 0, o = 0, s = n[0];
	for (let e = 0; e < t.length; e++) {
		let { maxSize: n = 100, minSize: c = 0 } = t[e].constraints;
		e === s ? (r = c, i = n) : (a += c, o += n);
	}
	return {
		valueMax: Math.min(i, 100 - a),
		valueMin: Math.max(r, 100 - o),
		valueNow: e[s]
	};
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/assert.js
function pv(e, t = "Assertion failed!") {
	if (!e) throw console.error(t), Error(t);
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/compare.js
function mv(e, t, n = 10) {
	return hv(e, t, n) === 0;
}
function hv(e, t, n = 10) {
	let r = _v(e, n), i = _v(t, n);
	return Math.sign(r - i);
}
function gv(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function _v(e, t) {
	return Number.parseFloat(e.toFixed(t));
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/is.js
var vv = typeof document < "u";
function yv(e) {
	return e instanceof HTMLElement;
}
function bv(e) {
	return e.type === "keydown";
}
function xv(e) {
	return e.type.startsWith("mouse");
}
function Sv(e) {
	return e.type.startsWith("touch");
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/resize.js
function Cv({ paneConstraints: e, paneIndex: t, initialSize: n }) {
	let r = e[t];
	pv(r != null, "Pane constraints should not be null.");
	let { collapsedSize: i = 0, collapsible: a, maxSize: o = 100, minSize: s = 0 } = r, c = n;
	return hv(c, s) < 0 && (c = wv(c, a, i, s)), c = Math.min(o, c), Number.parseFloat(c.toFixed(10));
}
function wv(e, t, n, r) {
	return t && hv(e, (n + r) / 2) < 0 ? n : r;
}
//#endregion
//#region node_modules/paneforge/dist/internal/helpers.js
function Tv() {}
function Ev({ groupId: e, layout: t, panesArray: n, domContext: r }) {
	let i = Dv(e, r);
	for (let e = 0; e < n.length - 1; e++) {
		let { valueMax: r, valueMin: a, valueNow: o } = fv({
			layout: t,
			panesArray: n,
			pivotIndices: [e, e + 1]
		}), s = i[e];
		if (yv(s)) {
			let t = n[e];
			s.setAttribute("aria-controls", t.opts.id.current), s.setAttribute("aria-valuemax", `${Math.round(r)}`), s.setAttribute("aria-valuemin", `${Math.round(a)}`), s.setAttribute("aria-valuenow", o == null ? "" : `${Math.round(o)}`);
		}
	}
	return () => {
		for (let e of i) e.removeAttribute("aria-controls"), e.removeAttribute("aria-valuemax"), e.removeAttribute("aria-valuemin"), e.removeAttribute("aria-valuenow");
	};
}
function Dv(e, t) {
	return vv ? Array.from(t.querySelectorAll(`[data-pane-resizer-id][data-pane-group-id="${e}"]`)) : [];
}
function Ov({ groupId: e, id: t, domContext: n }) {
	return vv ? Dv(e, n).findIndex((e) => e.getAttribute("data-pane-resizer-id") === t) ?? null : null;
}
function kv({ groupId: e, dragHandleId: t, domContext: n }) {
	let r = Ov({
		groupId: e,
		id: t,
		domContext: n
	});
	return r == null ? [-1, -1] : [r, r + 1];
}
function Av(e, t, n) {
	let r = e.map((e) => e.constraints), i = jv(e, t), a = r[i], o = i === e.length - 1 ? [i - 1, i] : [i, i + 1], s = n[i];
	return {
		...a,
		paneSize: s,
		pivotIndices: o
	};
}
function jv(e, t) {
	return e.findIndex((e) => e.opts.id.current === t.opts.id.current);
}
function Mv(e, t, n) {
	for (let r = 0; r < t.length; r++) {
		let i = t[r], a = e[r];
		pv(a);
		let { collapsedSize: o = 0, collapsible: s } = a.constraints, c = n[a.opts.id.current];
		if (!(c == null || i !== c)) continue;
		n[a.opts.id.current] = i;
		let { onCollapse: l, onExpand: u, onResize: d } = a.callbacks;
		d?.(i, c), s && (l || u) && (u && (c == null || c === o) && i !== o && u(), l && (c == null || c !== o) && i === o && l());
	}
}
function Nv({ panesArray: e }) {
	let t = Array(e.length), n = e.map((e) => e.constraints), r = 0, i = 100;
	for (let a = 0; a < e.length; a++) {
		let e = n[a];
		pv(e);
		let { defaultSize: o } = e;
		o != null && (r++, t[a] = o, i -= o);
	}
	for (let a = 0; a < e.length; a++) {
		let o = n[a];
		pv(o);
		let { defaultSize: s } = o;
		if (s != null) continue;
		let c = e.length - r, l = i / c;
		r++, t[a] = l, i -= l;
	}
	return t;
}
function Pv({ layout: e, paneConstraints: t }) {
	let n = [...e], r = n.reduce((e, t) => e + t, 0);
	if (n.length !== t.length) throw Error(`Invalid ${t.length} pane layout: ${n.map((e) => `${e}%`).join(", ")}`);
	if (!mv(r, 100)) for (let e = 0; e < t.length; e++) {
		let t = n[e];
		pv(t != null), n[e] = 100 / r * t;
	}
	let i = 0;
	for (let e = 0; e < t.length; e++) {
		let r = n[e];
		pv(r != null);
		let a = Cv({
			paneConstraints: t,
			paneIndex: e,
			initialSize: r
		});
		r !== a && (i += r - a, n[e] = a);
	}
	if (!mv(i, 0)) for (let e = 0; e < t.length; e++) {
		let r = n[e];
		pv(r != null);
		let a = r + i, o = Cv({
			paneConstraints: t,
			paneIndex: e,
			initialSize: a
		});
		if (r !== o && (i -= o - r, n[e] = o, mv(i, 0))) break;
	}
	return n;
}
function Fv(e, t) {
	return vv && t.querySelector(`[data-pane-group][data-pane-group-id="${e}"]`) || null;
}
function Iv(e, t) {
	return vv && t.querySelector(`[data-pane-resizer-id="${e}"]`) || null;
}
function Lv({ event: e, dragHandleId: t, dir: n, initialDragState: r, domContext: i }) {
	let a = n === "horizontal", o = Iv(t, i);
	pv(o);
	let s = o.getAttribute("data-pane-group-id");
	pv(s);
	let { initialCursorPosition: c } = r, l = zv(n, e), u = Fv(s, i);
	pv(u);
	let d = u.getBoundingClientRect(), f = a ? d.width : d.height;
	return (l - c) / f * 100;
}
function Rv({ event: e, dragHandleId: t, dir: n, initialDragState: r, keyboardResizeBy: i, domContext: a }) {
	if (bv(e)) {
		let t = n === "horizontal", r = 0;
		r = e.shiftKey ? 100 : i ?? 10;
		let a = 0;
		switch (e.key) {
			case "ArrowDown":
				a = t ? 0 : r;
				break;
			case "ArrowLeft":
				a = t ? -r : 0;
				break;
			case "ArrowRight":
				a = t ? r : 0;
				break;
			case "ArrowUp":
				a = t ? 0 : -r;
				break;
			case "End":
				a = 100;
				break;
			case "Home":
				a = -100;
				break;
		}
		return a;
	} else return r == null ? 0 : Lv({
		event: e,
		dragHandleId: t,
		dir: n,
		initialDragState: r,
		domContext: a
	});
}
function zv(e, t) {
	let n = e === "horizontal";
	if (xv(t)) return n ? t.clientX : t.clientY;
	if (Sv(t)) {
		let e = t.touches[0];
		return pv(e), n ? e.screenX : e.screenY;
	} else throw Error(`Unsupported event type "${t.type}"`);
}
function Bv({ groupId: e, handleId: t, panesArray: n, domContext: r }) {
	let i = Iv(t, r), a = Dv(e, r), o = i ? a.indexOf(i) : -1;
	return [n[o]?.opts.id.current ?? null, n[o + 1]?.opts.id.current ?? null];
}
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/internal/configurable-globals.js
var Vv = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/internal/utils/dom.js
function Hv(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot;) {
		let e = t.shadowRoot.activeElement;
		if (e === t) break;
		t = e;
	}
	return t;
}
new class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: t = Vv, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = kn((e) => {
			let n = Gi(t, "focusin", e), r = Gi(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? Hv(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/utilities/watch/watch.svelte.js
function Uv(e, t) {
	switch (e) {
		case "post":
			Vr(t);
			break;
		case "pre":
			Ur(t);
			break;
	}
}
function Wv(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	Uv(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = V(() => n(t, o));
		return o = t, r;
	});
}
function Gv(e, t, n) {
	let r = Wr(() => {
		let i = !1;
		Wv(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Vr(() => r);
}
function Kv(e, t, n) {
	Wv(e, "post", t, n);
}
function qv(e, t, n) {
	Wv(e, "pre", t, n);
}
Kv.pre = qv;
function Jv(e, t) {
	Gv(e, "post", t);
}
function Yv(e, t) {
	Gv(e, "pre", t);
}
Jv.pre = Yv;
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/utilities/context/context.js
var Xv = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return ct(this.#t);
	}
	get() {
		let e = ot(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = ot(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return st(this.#t, e);
	}
};
//#endregion
//#region node_modules/paneforge/dist/internal/utils/adjust-layout.js
function Zv({ delta: e, layout: t, paneConstraints: n, pivotIndices: r, trigger: i }) {
	if (mv(e, 0)) return t;
	let a = [...t], [o, s] = r, c = 0;
	if (i === "keyboard") {
		{
			let r = e < 0 ? s : o, i = n[r];
			if (pv(i), i.collapsible) {
				let i = t[r];
				pv(i != null);
				let a = n[r];
				pv(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (mv(i, o)) {
					let t = s - i;
					hv(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
		{
			let r = e < 0 ? o : s, i = n[r];
			pv(i);
			let { collapsible: a } = i;
			if (a) {
				let i = t[r];
				pv(i != null);
				let a = n[r];
				pv(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (mv(i, s)) {
					let t = i - o;
					hv(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
	}
	{
		let r = e < 0 ? 1 : -1, i = e < 0 ? s : o, a = 0;
		for (;;) {
			let e = t[i];
			pv(e != null);
			let o = Cv({
				paneConstraints: n,
				paneIndex: i,
				initialSize: 100
			}) - e;
			if (a += o, i += r, i < 0 || i >= n.length) break;
		}
		let c = Math.min(Math.abs(e), Math.abs(a));
		e = e < 0 ? 0 - c : c;
	}
	{
		let r = e < 0 ? o : s;
		for (; r >= 0 && r < n.length;) {
			let i = Math.abs(e) - Math.abs(c), o = t[r];
			pv(o != null);
			let s = o - i, l = Cv({
				paneConstraints: n,
				paneIndex: r,
				initialSize: s
			});
			if (!mv(o, l) && (c += o - l, a[r] = l, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, { numeric: !0 }) >= 0)) break;
			e < 0 ? r-- : r++;
		}
	}
	if (mv(c, 0)) return t;
	{
		let r = e < 0 ? s : o, i = t[r];
		pv(i != null);
		let l = i + c, u = Cv({
			paneConstraints: n,
			paneIndex: r,
			initialSize: l
		});
		if (a[r] = u, !mv(u, l)) {
			let t = l - u, r = e < 0 ? s : o;
			for (; r >= 0 && r < n.length;) {
				let i = a[r];
				pv(i != null);
				let o = i + t, s = Cv({
					paneConstraints: n,
					paneIndex: r,
					initialSize: o
				});
				if (mv(i, s) || (t -= s - i, a[r] = s), mv(t, 0)) break;
				e > 0 ? r-- : r++;
			}
		}
	}
	return mv(a.reduce((e, t) => t + e, 0), 100) ? a : t;
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/style.js
var Qv = null, $v = null;
function ey(e) {
	switch (e) {
		case "horizontal": return "ew-resize";
		case "horizontal-max": return "w-resize";
		case "horizontal-min": return "e-resize";
		case "vertical": return "ns-resize";
		case "vertical-max": return "n-resize";
		case "vertical-min": return "s-resize";
	}
}
function ty() {
	$v !== null && (document.head.removeChild($v), Qv = null, $v = null);
}
function ny(e, t) {
	if (Qv === e) return;
	Qv = e;
	let n = ey(e);
	$v === null && ($v = t.createElement("style"), t.head.appendChild($v)), $v.innerHTML = `*{cursor: ${n}!important;}`;
}
function ry({ defaultSize: e, dragState: t, layout: n, panesArray: r, paneIndex: i, precision: a = 3 }) {
	let o = n[i], s;
	return s = o == null ? e ?? "1" : r.length === 1 ? "1" : o.toPrecision(a), {
		flexBasis: 0,
		flexGrow: s,
		flexShrink: 1,
		overflow: "hidden",
		pointerEvents: t === null ? void 0 : "none"
	};
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/storage.js
function iy(e) {
	try {
		if (typeof localStorage > "u") throw TypeError("localStorage is not supported in this environment");
		e.getItem = (e) => localStorage.getItem(e), e.setItem = (e, t) => localStorage.setItem(e, t);
	} catch (t) {
		console.error(t), e.getItem = () => null, e.setItem = () => {};
	}
}
function ay(e) {
	return `paneforge:${e}`;
}
function oy(e) {
	return e.map((e) => e.opts.order.current ? `${e.opts.order.current}:${JSON.stringify(e.constraints)}` : JSON.stringify(e.constraints)).sort().join(",");
}
function sy(e, t) {
	try {
		let n = ay(e), r = t.getItem(n), i = JSON.parse(r || "");
		if (typeof i == "object" && i) return i;
	} catch {}
	return null;
}
function cy(e, t, n) {
	return (sy(e, n) || {})[oy(t)] || null;
}
function ly(e, t, n, r, i) {
	let a = ay(e), o = oy(t), s = sy(e, i) || {};
	s[o] = {
		expandToSizes: Object.fromEntries(n.entries()),
		layout: r
	};
	try {
		i.setItem(a, JSON.stringify(s));
	} catch (e) {
		console.error(e);
	}
}
var uy = {};
function dy(e, t = 10) {
	let n = null;
	return (...r) => {
		n !== null && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
}
function fy({ autoSaveId: e, layout: t, storage: n, panesArray: r, paneSizeBeforeCollapse: i }) {
	if (t.length === 0 || t.length !== r.length) return;
	let a = uy[e];
	a ?? (a = dy(ly, 100), uy[e] = a);
	let o = [...r], s = new Map(i);
	a(e, o, s, t, n);
}
//#endregion
//#region node_modules/paneforge/dist/paneforge.svelte.js
var py = {
	getItem: (e) => (iy(py), py.getItem(e)),
	setItem: (e, t) => {
		iy(py), py.setItem(e, t);
	}
}, my = new Xv("PaneGroup"), hy = class e {
	static create(t) {
		return my.set(new e(t));
	}
	opts;
	attachment;
	domContext;
	#e = /* @__PURE__ */ I(null);
	get dragState() {
		return B(this.#e);
	}
	set dragState(e) {
		L(this.#e, e);
	}
	#t = /* @__PURE__ */ I([]);
	get layout() {
		return B(this.#t);
	}
	set layout(e) {
		L(this.#t, e);
	}
	#n = /* @__PURE__ */ I([]);
	get panesArray() {
		return B(this.#n);
	}
	set panesArray(e) {
		L(this.#n, e);
	}
	#r = /* @__PURE__ */ I(!1);
	get panesArrayChanged() {
		return B(this.#r);
	}
	set panesArrayChanged(e) {
		L(this.#r, e, !0);
	}
	#i = /* @__PURE__ */ I(Dt({}));
	get paneIdToLastNotifiedSizeMap() {
		return B(this.#i);
	}
	set paneIdToLastNotifiedSizeMap(e) {
		L(this.#i, e, !0);
	}
	paneSizeBeforeCollapseMap = /* @__PURE__ */ new Map();
	prevDelta = 0;
	constructor(e) {
		this.opts = e, this.attachment = dv(this.opts.ref), this.domContext = new uv(this.opts.ref), Kv([
			() => this.opts.id.current,
			() => this.layout,
			() => this.panesArray
		], () => Ev({
			groupId: this.opts.id.current,
			layout: this.layout,
			panesArray: this.panesArray,
			domContext: this.domContext
		})), Vr(() => V(() => this.#a())), Kv([
			() => this.opts.autoSaveId.current,
			() => this.layout,
			() => this.opts.storage.current
		], () => {
			this.opts.autoSaveId.current && fy({
				autoSaveId: this.opts.autoSaveId.current,
				layout: this.layout,
				storage: this.opts.storage.current,
				panesArray: this.panesArray,
				paneSizeBeforeCollapse: this.paneSizeBeforeCollapseMap
			});
		}), Kv(() => this.panesArrayChanged, () => {
			if (!this.panesArrayChanged) return;
			this.panesArrayChanged = !1;
			let e = this.layout, t = null;
			if (this.opts.autoSaveId.current) {
				let e = cy(this.opts.autoSaveId.current, this.panesArray, this.opts.storage.current);
				e && (this.paneSizeBeforeCollapseMap = new Map(Object.entries(e.expandToSizes)), t = e.layout);
			}
			t ??= Nv({ panesArray: this.panesArray });
			let n = Pv({
				layout: t,
				paneConstraints: this.panesArray.map((e) => e.constraints)
			});
			gv(e, n) || (this.layout = n, this.opts.onLayout.current?.(n), Mv(this.panesArray, n, this.paneIdToLastNotifiedSizeMap));
		});
	}
	setLayout = (e) => {
		this.layout = e;
	};
	registerResizeHandle = (e) => (t) => {
		t.preventDefault();
		let n = this.opts.direction.current, r = this.dragState, i = this.opts.id.current, a = this.opts.keyboardResizeBy.current, o = this.layout, s = this.panesArray, { initialLayout: c } = r ?? {}, l = this.domContext.getDocument(), u = kv({
			groupId: i,
			dragHandleId: e,
			domContext: this.domContext
		}), d = Rv({
			event: t,
			dragHandleId: e,
			dir: n,
			initialDragState: r,
			keyboardResizeBy: a,
			domContext: this.domContext
		});
		if (d === 0) return;
		let f = n === "horizontal";
		l.dir === "rtl" && f && (d = -d);
		let p = s.map((e) => e.constraints), m = Zv({
			delta: d,
			layout: c ?? o,
			paneConstraints: p,
			pivotIndices: u,
			trigger: bv(t) ? "keyboard" : "mouse-or-touch"
		}), h = !gv(o, m);
		(xv(t) || Sv(t)) && this.prevDelta !== d && (this.prevDelta = d, ny(h ? f ? "horizontal" : "vertical" : f ? d < 0 ? "horizontal-min" : "horizontal-max" : d < 0 ? "vertical-min" : "vertical-max", l)), h && (this.setLayout(m), this.opts.onLayout.current?.(m), Mv(s, m, this.paneIdToLastNotifiedSizeMap));
	};
	resizePane = (e, t) => {
		let n = this.layout, r = this.panesArray, i = r.map((e) => e.constraints), { paneSize: a, pivotIndices: o } = Av(r, e, n);
		pv(a != null);
		let s = Zv({
			delta: jv(r, e) === r.length - 1 ? a - t : t - a,
			layout: n,
			paneConstraints: i,
			pivotIndices: o,
			trigger: "imperative-api"
		});
		gv(n, s) || (this.setLayout(s), this.opts.onLayout.current?.(s), Mv(r, s, this.paneIdToLastNotifiedSizeMap));
	};
	startDragging = (e, t) => {
		let n = this.opts.direction.current, r = this.layout, i = Iv(e, this.domContext);
		pv(i);
		let a = zv(n, t);
		this.dragState = {
			dragHandleId: e,
			dragHandleRect: i.getBoundingClientRect(),
			initialCursorPosition: a,
			initialLayout: r
		};
	};
	stopDragging = () => {
		ty(), this.dragState = null;
	};
	isPaneCollapsed = (e) => {
		let t = this.panesArray, n = this.layout, { collapsedSize: r = 0, collapsible: i, paneSize: a } = Av(t, e, n);
		return typeof a != "number" || typeof r != "number" ? !1 : i === !0 && mv(a, r);
	};
	expandPane = (e) => {
		let t = this.layout, n = this.panesArray;
		if (!e.constraints.collapsible) return;
		let r = n.map((e) => e.constraints), { collapsedSize: i = 0, paneSize: a, minSize: o = 0, pivotIndices: s } = Av(n, e, t);
		if (a !== i) return;
		let c = this.paneSizeBeforeCollapseMap.get(e.opts.id.current), l = c != null && c >= o ? c : o, u = Zv({
			delta: jv(n, e) === n.length - 1 ? a - l : l - a,
			layout: t,
			paneConstraints: r,
			pivotIndices: s,
			trigger: "imperative-api"
		});
		gv(t, u) || (this.setLayout(u), this.opts.onLayout.current?.(u), Mv(n, u, this.paneIdToLastNotifiedSizeMap));
	};
	collapsePane = (e) => {
		let t = this.layout, n = this.panesArray;
		if (!e.constraints.collapsible) return;
		let r = n.map((e) => e.constraints), { collapsedSize: i = 0, paneSize: a, pivotIndices: o } = Av(n, e, t);
		if (pv(a != null), a === i) return;
		this.paneSizeBeforeCollapseMap.set(e.opts.id.current, a);
		let s = Zv({
			delta: jv(n, e) === n.length - 1 ? a - i : i - a,
			layout: t,
			paneConstraints: r,
			pivotIndices: o,
			trigger: "imperative-api"
		});
		gv(t, s) || (this.layout = s, this.opts.onLayout.current?.(s), Mv(n, s, this.paneIdToLastNotifiedSizeMap));
	};
	getPaneSize = (e) => Av(this.panesArray, e, this.layout).paneSize;
	getPaneStyle = (e, t) => {
		let n = this.panesArray, r = this.layout, i = this.dragState;
		return ry({
			defaultSize: t,
			dragState: i,
			layout: r,
			panesArray: n,
			paneIndex: jv(n, e)
		});
	};
	isPaneExpanded = (e) => {
		let { collapsedSize: t = 0, collapsible: n, paneSize: r } = Av(this.panesArray, e, this.layout);
		return !n || r > t;
	};
	registerPane = (e) => {
		let t = [...this.panesArray, e];
		return t.sort((e, t) => {
			let n = e.opts.order.current, r = t.opts.order.current;
			return n == null && r == null ? 0 : n == null ? -1 : r == null ? 1 : n - r;
		}), this.panesArray = t, this.panesArrayChanged = !0, () => {
			let t = [...this.panesArray], n = jv(this.panesArray, e);
			n < 0 || (t.splice(n, 1), this.panesArray = t, delete this.paneIdToLastNotifiedSizeMap[e.opts.id.current], this.panesArrayChanged = !0);
		};
	};
	#a = () => {
		let e = this.opts.id.current, t = Dv(e, this.domContext), n = this.panesArray, r = t.map((t) => {
			let r = t.getAttribute("data-pane-resizer-id");
			if (!r) return Tv;
			let [i, a] = Bv({
				groupId: e,
				handleId: r,
				panesArray: n,
				domContext: this.domContext
			});
			if (i == null || a == null) return Tv;
			let o = I_(t, "keydown", (t) => {
				if (t.defaultPrevented || t.key !== "Enter") return;
				t.preventDefault();
				let n = this.panesArray, a = n.findIndex((e) => e.opts.id.current === i);
				if (a < 0) return;
				let o = n[a];
				pv(o);
				let s = this.layout, c = s[a], { collapsedSize: l = 0, collapsible: u, minSize: d = 0 } = o.constraints;
				if (!(c != null && u)) return;
				let f = Zv({
					delta: mv(c, l) ? d - c : l - c,
					layout: s,
					paneConstraints: n.map((e) => e.constraints),
					pivotIndices: kv({
						groupId: e,
						dragHandleId: r,
						domContext: this.domContext
					}),
					trigger: "keyboard"
				});
				s !== f && (this.layout = f);
			});
			return () => {
				o();
			};
		});
		return () => {
			for (let e of r) e();
		};
	};
	#o = /* @__PURE__ */ F(() => ({
		id: this.opts.id.current,
		"data-pane-group": "",
		"data-direction": this.opts.direction.current,
		"data-pane-group-id": this.opts.id.current,
		style: {
			display: "flex",
			flexDirection: this.opts.direction.current === "horizontal" ? "row" : "column",
			height: "100%",
			overflow: "hidden",
			width: "100%"
		},
		...this.attachment
	}));
	get props() {
		return B(this.#o);
	}
	set props(e) {
		L(this.#o, e);
	}
}, gy = [
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"End",
	"Home"
], _y = class e {
	static create(t) {
		return new e(t, my.get());
	}
	opts;
	#e;
	attachment;
	domContext;
	#t = /* @__PURE__ */ F(() => this.#e.dragState?.dragHandleId === this.opts.id.current);
	#n = /* @__PURE__ */ I(!1);
	resizeHandler = null;
	constructor(e, t) {
		this.opts = e, this.#e = t, this.attachment = dv(this.opts.ref), this.domContext = new uv(this.opts.ref), Vr(() => {
			this.opts.disabled.current ? this.resizeHandler = null : this.resizeHandler = this.#e.registerResizeHandle(this.opts.id.current);
		}), Vr(() => {
			let e = this.opts.ref.current;
			if (!e) return;
			let t = this.opts.disabled.current, n = this.resizeHandler, r = B(this.#t);
			if (t || n === null || !r) return;
			let i = (e) => {
				n(e);
			}, a = (e) => {
				n(e);
			}, o = () => {
				e.blur(), this.#e.stopDragging(), this.opts.onDraggingChange.current(!1);
			}, s = this.domContext.getDocument().body, c = this.domContext.getWindow();
			return F_(Gi(s, "contextmenu", o), Gi(s, "mousemove", i), Gi(s, "touchmove", i, { passive: !1 }), Gi(s, "mouseleave", a), Gi(c, "mouseup", o), Gi(c, "touchend", o));
		});
	}
	#r = (e) => {
		e.preventDefault(), !this.opts.disabled.current && (this.#e.startDragging(this.opts.id.current, e), this.opts.onDraggingChange.current(!0));
	};
	#i = () => {
		let e = this.opts.ref.current;
		e && (e.blur(), this.#e.stopDragging(), this.opts.onDraggingChange.current(!1));
	};
	#a = (e) => {
		if (this.opts.disabled.current || !this.resizeHandler || e.defaultPrevented) return;
		if (gy.includes(e.key)) {
			e.preventDefault(), this.resizeHandler(e);
			return;
		}
		if (e.key !== "F6") return;
		e.preventDefault();
		let t = Dv(this.#e.opts.id.current, this.domContext), n = Ov({
			groupId: this.#e.opts.id.current,
			id: this.opts.id.current,
			domContext: this.domContext
		});
		if (n === null) return;
		let r = 0;
		r = e.shiftKey ? n > 0 ? n - 1 : t.length - 1 : n + 1 < t.length ? n + 1 : 0, t[r].focus();
	};
	#o = () => {
		L(this.#n, !1);
	};
	#s = () => {
		L(this.#n, !0);
	};
	#c = (e) => {
		this.#r(e);
	};
	#l = () => {
		this.#i();
	};
	#u = () => {
		this.#i();
	};
	#d = () => {
		this.#i();
	};
	#f = (e) => {
		this.#r(e);
	};
	#p = /* @__PURE__ */ F(() => ({
		id: this.opts.id.current,
		role: "separator",
		"data-direction": this.#e.opts.direction.current,
		"data-pane-group-id": this.#e.opts.id.current,
		"data-active": B(this.#t) ? "pointer" : B(this.#n) ? "keyboard" : void 0,
		"data-enabled": !this.opts.disabled.current,
		"data-pane-resizer-id": this.opts.id.current,
		"data-pane-resizer": "",
		tabIndex: this.opts.tabIndex.current,
		style: {
			cursor: ey(this.#e.opts.direction.current),
			touchAction: "none",
			userSelect: "none",
			"-webkit-user-select": "none",
			"-webkit-touch-callout": "none"
		},
		onkeydown: this.#a,
		onblur: this.#o,
		onfocus: this.#s,
		onmousedown: this.#c,
		onmouseup: this.#l,
		ontouchcancel: this.#u,
		ontouchend: this.#d,
		ontouchstart: this.#f,
		...this.attachment
	}));
	get props() {
		return B(this.#p);
	}
	set props(e) {
		L(this.#p, e);
	}
}, vy = class e {
	static create(t) {
		return new e(t, my.get());
	}
	opts;
	group;
	attachment;
	domContext;
	#e = /* @__PURE__ */ I("");
	#t = /* @__PURE__ */ F(() => ({
		onCollapse: this.opts.onCollapse.current,
		onExpand: this.opts.onExpand.current,
		onResize: this.opts.onResize.current
	}));
	get callbacks() {
		return B(this.#t);
	}
	set callbacks(e) {
		L(this.#t, e);
	}
	#n = /* @__PURE__ */ F(() => ({
		collapsedSize: this.opts.collapsedSize.current,
		collapsible: this.opts.collapsible.current,
		defaultSize: this.opts.defaultSize.current,
		maxSize: this.opts.maxSize.current,
		minSize: this.opts.minSize.current
	}));
	get constraints() {
		return B(this.#n);
	}
	set constraints(e) {
		L(this.#n, e);
	}
	#r = (e) => {
		L(this.#e, e, !0), iv(() => {
			if (this.opts.ref.current) {
				let e = this.opts.ref.current;
				if (getComputedStyle(e).transitionDuration === "0s") {
					L(this.#e, "");
					return;
				}
				let t = (n) => {
					n.propertyName === "flex-grow" && (L(this.#e, ""), e.removeEventListener("transitionend", t));
				};
				e.addEventListener("transitionend", t);
			} else L(this.#e, "");
		});
	};
	pane = {
		collapse: () => {
			this.#r("collapsing"), this.group.collapsePane(this);
		},
		expand: () => {
			this.#r("expanding"), this.group.expandPane(this);
		},
		getSize: () => this.group.getPaneSize(this),
		isCollapsed: () => this.group.isPaneCollapsed(this),
		isExpanded: () => this.group.isPaneExpanded(this),
		resize: (e) => this.group.resizePane(this, e),
		getId: () => this.opts.id.current
	};
	constructor(e, t) {
		this.opts = e, this.group = t, this.attachment = dv(this.opts.ref), this.domContext = new uv(this.opts.ref), Do(() => this.group.registerPane(this)), Kv(() => nt(this.constraints), () => {
			this.group.panesArrayChanged = !0;
		});
	}
	#i = /* @__PURE__ */ F(() => this.group.isPaneCollapsed(this));
	#a = /* @__PURE__ */ F(() => B(this.#e) === "" ? B(this.#i) ? "collapsed" : "expanded" : B(this.#e));
	#o = /* @__PURE__ */ F(() => ({
		id: this.opts.id.current,
		style: this.group.getPaneStyle(this, this.opts.defaultSize.current),
		"data-pane": "",
		"data-pane-id": this.opts.id.current,
		"data-pane-group-id": this.group.opts.id.current,
		"data-collapsed": B(this.#i) ? "" : void 0,
		"data-expanded": B(this.#i) ? void 0 : "",
		"data-pane-state": B(this.#a),
		...this.attachment
	}));
	get props() {
		return B(this.#o);
	}
	set props(e) {
		L(this.#o, e);
	}
}, yy = /* @__PURE__ */ H("<div><!></div>");
function by(e, t) {
	let n = ia();
	E(t, !0);
	let r = q(t, "autoSaveId", 3, null), i = q(t, "id", 3, n), a = q(t, "keyboardResizeBy", 3, null), o = q(t, "onLayoutChange", 3, Tv), s = q(t, "storage", 3, py), c = q(t, "ref", 15, null), l = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"autoSaveId",
		"direction",
		"id",
		"keyboardResizeBy",
		"onLayoutChange",
		"storage",
		"ref",
		"child",
		"children"
	]), u = hy.create({
		id: Q.with(() => i() ?? n),
		ref: Q.with(() => c(), (e) => c(e)),
		autoSaveId: Q.with(() => r()),
		direction: Q.with(() => t.direction),
		keyboardResizeBy: Q.with(() => a()),
		onLayout: Q.with(() => o()),
		storage: Q.with(() => s())
	}), d = () => u.layout, f = u.setLayout, p = () => u.opts.id.current, m = /* @__PURE__ */ F(() => U_(l, u.props));
	var h = {
		getLayout: d,
		setLayout: f,
		getId: p
	}, g = U(), _ = M(g), v = (e) => {
		var n = U();
		G(M(n), () => t.child, () => ({ props: B(m) })), W(e, n);
	}, y = (e) => {
		var n = yy();
		fo(n, () => ({ ...B(m) })), G(j(n), () => t.children ?? w), A(n), W(e, n);
	};
	return pa(_, (e) => {
		t.child ? e(v) : e(y, -1);
	}), W(e, g), D(h);
}
//#endregion
//#region node_modules/paneforge/dist/components/pane.svelte
var xy = /* @__PURE__ */ H("<div><!></div>");
function Sy(e, t) {
	let n = ia();
	E(t, !0);
	let r = q(t, "id", 3, n), i = q(t, "ref", 15, null), a = q(t, "onCollapse", 3, Tv), o = q(t, "onExpand", 3, Tv), s = q(t, "onResize", 3, Tv), c = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"ref",
		"collapsedSize",
		"collapsible",
		"defaultSize",
		"maxSize",
		"minSize",
		"onCollapse",
		"onExpand",
		"onResize",
		"order",
		"child",
		"children"
	]), l = vy.create({
		id: Q.with(() => r()),
		ref: Q.with(() => i(), (e) => i(e)),
		collapsedSize: Q.with(() => t.collapsedSize),
		collapsible: Q.with(() => t.collapsible),
		defaultSize: Q.with(() => t.defaultSize),
		maxSize: Q.with(() => t.maxSize),
		minSize: Q.with(() => t.minSize),
		onCollapse: Q.with(() => a()),
		onExpand: Q.with(() => o()),
		onResize: Q.with(() => s()),
		order: Q.with(() => t.order)
	}), u = l.pane.collapse, d = l.pane.expand, f = l.pane.getSize, p = l.pane.isCollapsed, m = l.pane.isExpanded, h = l.pane.resize, g = l.pane.getId, _ = /* @__PURE__ */ F(() => U_(c, l.props));
	var v = {
		collapse: u,
		expand: d,
		getSize: f,
		isCollapsed: p,
		isExpanded: m,
		resize: h,
		getId: g
	}, y = U(), b = M(y), x = (e) => {
		var n = U();
		G(M(n), () => t.child, () => ({ props: B(_) })), W(e, n);
	}, ee = (e) => {
		var n = xy();
		fo(n, () => ({ ...B(_) })), G(j(n), () => t.children ?? w), A(n), W(e, n);
	};
	return pa(b, (e) => {
		t.child ? e(x) : e(ee, -1);
	}), W(e, y), D(v);
}
//#endregion
//#region node_modules/paneforge/dist/components/pane-resizer.svelte
var Cy = /* @__PURE__ */ H("<div><!></div>");
function wy(e, t) {
	let n = ia();
	E(t, !0);
	let r = q(t, "id", 3, n), i = q(t, "ref", 15, null), a = q(t, "disabled", 3, !1), o = q(t, "onDraggingChange", 3, Tv), s = q(t, "tabindex", 3, 0), c = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"ref",
		"disabled",
		"onDraggingChange",
		"tabindex",
		"child",
		"children"
	]), l = _y.create({
		id: Q.with(() => r()),
		ref: Q.with(() => i(), (e) => i(e)),
		disabled: Q.with(() => a()),
		onDraggingChange: Q.with(() => o()),
		tabIndex: Q.with(() => s())
	}), u = /* @__PURE__ */ F(() => U_(c, l.props));
	var d = U(), f = M(d), p = (e) => {
		var n = U();
		G(M(n), () => t.child, () => ({ props: B(u) })), W(e, n);
	}, m = (e) => {
		var n = Cy();
		fo(n, () => ({ ...B(u) })), G(j(n), () => t.children ?? w), A(n), W(e, n);
	};
	pa(f, (e) => {
		t.child ? e(p) : e(m, -1);
	}), W(e, d), D();
}
//#endregion
//#region src/lib/components/ui/resizable/resizable-handle.svelte
var Ty = /* @__PURE__ */ H("<div class=\"bg-border h-6 w-1 rounded-lg z-10 flex shrink-0\"></div>");
function Ey(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = q(t, "withHandle", 3, !1), i = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"withHandle"
	]);
	var a = U(), o = M(a);
	{
		let e = /* @__PURE__ */ F(() => Om("cn-resizable-handle bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[direction=vertical]:h-px data-[direction=vertical]:w-full data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:h-1 data-[direction=vertical]:after:w-full data-[direction=vertical]:after:translate-x-0 data-[direction=vertical]:after:-translate-y-1/2 [&[data-direction=vertical]>div]:rotate-90", t.class));
		Ta(o, () => wy, (t, a) => {
			a(t, Eo({
				"data-slot": "resizable-handle",
				get class() {
					return B(e);
				}
			}, () => i, {
				get ref() {
					return n();
				},
				set ref(e) {
					n(e);
				},
				children: (e, t) => {
					var n = U(), i = M(n), a = (e) => {
						W(e, Ty());
					};
					pa(i, (e) => {
						r() && e(a);
					}), W(e, n);
				},
				$$slots: { default: !0 }
			}));
		});
	}
	W(e, a), D();
}
//#endregion
//#region src/lib/components/ui/resizable/resizable-pane-group.svelte
function Dy(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = q(t, "this", 15), i = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"this",
		"class"
	]);
	var a = U(), o = M(a);
	{
		let e = /* @__PURE__ */ F(() => Om("cn-resizable-panel-group flex h-full w-full data-[direction=vertical]:flex-col", t.class));
		Ta(o, () => by, (t, a) => {
			xo(a(t, Eo({
				"data-slot": "resizable-pane-group",
				get class() {
					return B(e);
				}
			}, () => i, {
				get ref() {
					return n();
				},
				set ref(e) {
					n(e);
				}
			})), (e) => r(e), () => r());
		});
	}
	W(e, a), D();
}
//#endregion
//#region src/shared/components/layout/CytubeFluidLayout.svelte
var Oy = /* @__PURE__ */ H("<!> <!> <!>", 1), ky = /* @__PURE__ */ H("<!> <!> <!>", 1), Ay = /* @__PURE__ */ H("<div class=\"flex h-full flex-col items-center justify-center p-6\"><span class=\"font-semibold\">Features</span></div>"), jy = /* @__PURE__ */ H("<!> <!> <!>", 1), My = /* @__PURE__ */ H("<div class=\"flex h-full flex-row items-center justify-center p-6\"><span class=\"font-semibold\">Player</span></div>"), Ny = /* @__PURE__ */ H("<div class=\"flex h-full flex-col items-center justify-center p-6\"><span class=\"font-semibold\">Playlist</span></div>"), Py = /* @__PURE__ */ H("<!> <!> <!>", 1), Fy = /* @__PURE__ */ H("<!> <!> <!>", 1);
function Iy(e, t) {
	E(t, !1);
	let n = () => nn(bi, "$clientStore", r), [r, i] = rn();
	So(), Dy(e, {
		direction: "horizontal",
		class: "w-full flex-1 border",
		children: (e, t) => {
			var r = Fy(), i = M(r);
			Sy(i, {
				defaultSize: 45,
				minSize: 25,
				maxSize: 50,
				children: (e, t) => {
					Dy(e, {
						direction: "vertical",
						class: "flex-1",
						children: (e, t) => {
							var r = jy(), i = M(r);
							Sy(i, {
								defaultSize: 70,
								children: (e, t) => {
									Dy(e, {
										direction: "vertical",
										class: "flex h-full flex-col",
										children: (e, t) => {
											var r = ky(), i = M(r);
											Sy(i, {
												defaultSize: 90,
												children: (e, t) => {
													Dy(e, {
														direction: "horizontal",
														children: (e, t) => {
															var n = Oy(), r = M(n);
															Sy(r, {
																defaultSize: 20,
																children: (e, t) => {
																	f_(e, { class: "flex h-full flex-col items-start justify-start px-1 py-0.5" });
																},
																$$slots: { default: !0 }
															});
															var i = N(r, 2);
															Ey(i, {}), Sy(N(i, 2), {
																defaultSize: 80,
																class: "flex h-full flex-col items-center justify-center",
																children: (e, t) => {
																	wt(), W(e, ra("Chat"));
																},
																$$slots: { default: !0 }
															}), W(e, n);
														},
														$$slots: { default: !0 }
													});
												},
												$$slots: { default: !0 }
											});
											var a = N(i, 2);
											Ey(a, {});
											var o = N(a, 2), s = (e) => {
												Sy(e, {
													defaultSize: 10,
													minSize: 10,
													maxSize: 80,
													class: "flex",
													children: (e, t) => {
														Pg(e, { class: "flex-1 flex-row" });
													},
													$$slots: { default: !0 }
												});
											}, c = (e) => {
												kg(e, { class: "w-full" });
											};
											pa(o, (e) => {
												n().logged_in ? e(s) : e(c, -1);
											}), W(e, r);
										},
										$$slots: { default: !0 }
									});
								},
								$$slots: { default: !0 }
							});
							var a = N(i, 2);
							Ey(a, {}), Sy(N(a, 2), {
								defaultSize: 30,
								children: (e, t) => {
									W(e, Ay());
								},
								$$slots: { default: !0 }
							}), W(e, r);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			});
			var a = N(i, 2);
			Ey(a, {}), Sy(N(a, 2), {
				defaultSize: 65,
				minSize: 50,
				maxSize: 75,
				children: (e, t) => {
					Dy(e, {
						direction: "vertical",
						class: "flex-1",
						children: (e, t) => {
							var n = Py(), r = M(n);
							Sy(r, {
								defaultSize: 70,
								children: (e, t) => {
									W(e, My());
								},
								$$slots: { default: !0 }
							});
							var i = N(r, 2);
							Ey(i, {}), Sy(N(i, 2), {
								defaultSize: 30,
								children: (e, t) => {
									W(e, Ny());
								},
								$$slots: { default: !0 }
							}), W(e, n);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			}), W(e, r);
		},
		$$slots: { default: !0 }
	}), D(), i();
}
//#endregion
//#region src/shared/components/layout/Main.svelte
var Ly = /* @__PURE__ */ H("<main class=\"flex flex-1 flex-col\"><!></main>");
function Ry(e) {
	var t = Ly();
	Iy(j(t), {}), A(t), W(e, t);
}
//#endregion
//#region src/shared/utils/upgrades.ts
var zy = () => {
	let e = document.getElementById("wrap");
	e && e.remove();
}, By = () => {
	let e = document.getElementById("useroptions");
	e && e.remove();
	let t = document.getElementById("emotelist");
	t && t.remove();
	let n = document.getElementById("channeloptions");
	n && n.remove();
	let r = document.getElementById("pmbar");
	r && r.remove();
}, Vy = () => {
	let e = document.getElementById("footer");
	e && e.remove();
}, Hy = () => {
	document.body.className = "dark override-theme min-h-screen flex flex-col";
}, Uy = async () => {
	sa(Eg, {
		anchor: document.body.firstChild || void 0,
		target: document.body
	});
}, Wy = async () => {
	sa(Ry, {
		anchor: document.body.firstChild || void 0,
		target: document.body
	});
}, Gy = async () => {
	zy(), By(), Vy(), Hy(), await Wy(), await Uy(), await jr();
}, Ky = async () => {
	let e = Ai();
	try {
		await f(), await Gy();
	} catch (t) {
		throw e(), t;
	}
};
//#endregion
export { Ky as init };
