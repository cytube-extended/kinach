//#region src/shared/api/socket.ts
var e = async () => new Promise((e) => {
	n.once("connect", () => {
		e();
	}), n.connect();
}), t = async () => new Promise((e, t) => {
	n.once("disconnect", (n) => {
		if (n === "io client disconnect") {
			e();
			return;
		}
		t(n);
	}), n.disconnect();
}), n = window.socket, r = Array.isArray, i = Array.prototype.indexOf, a = Array.prototype.includes, o = Array.from, s = Object.defineProperty, c = Object.getOwnPropertyDescriptor, l = Object.getOwnPropertyDescriptors, u = Object.prototype, d = Array.prototype, f = Object.getPrototypeOf, p = Object.isExtensible;
function m(e) {
	return typeof e == "function";
}
var h = () => {};
function g(e) {
	return e();
}
function _(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function v() {
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
var y = 1 << 24, b = 1024, x = 2048, S = 4096, ee = 8192, C = 16384, w = 32768, te = 1 << 25, ne = 65536, re = 1 << 19, ie = 1 << 20, ae = 1 << 25, oe = 65536, se = 1 << 21, ce = 1 << 22, le = 1 << 23, ue = Symbol("$state"), T = Symbol("legacy props"), de = Symbol(""), fe = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), pe = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function me(e) {
	return e === this.v;
}
function he(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function ge(e) {
	return !he(e, this.v);
}
function _e(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function ve() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function ye(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function be(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function xe() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Se(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Ce() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function we(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Te() {
	throw Error("https://svelte.dev/e/set_context_after_init");
}
function Ee() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function De() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Oe() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ke() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var Ae = !1, je = !1;
function Me() {
	je = !0;
}
//#endregion
//#region node_modules/svelte/src/constants.js
var Ne = {}, Pe = Symbol(), Fe = "http://www.w3.org/1999/xhtml", Ie = "@attach", Le = [];
function Re(e, t = !1, n = !1) {
	return ze(e, /* @__PURE__ */ new Map(), "", Le, null, n);
}
function ze(e, t, n, i, a = null, o = !1) {
	if (typeof e == "object" && e) {
		var s = t.get(e);
		if (s !== void 0) return s;
		if (e instanceof Map) return new Map(e);
		if (e instanceof Set) return new Set(e);
		if (r(e)) {
			var c = Array(e.length);
			t.set(e, c), a !== null && t.set(a, c);
			for (var l = 0; l < e.length; l += 1) {
				var d = e[l];
				l in e && (c[l] = ze(d, t, n, i, null, o));
			}
			return c;
		}
		if (f(e) === u) {
			c = {}, t.set(e, c), a !== null && t.set(a, c);
			for (var p of Object.keys(e)) c[p] = ze(e[p], t, n, i, null, o);
			return c;
		}
		if (e instanceof Date) return structuredClone(e);
		if (typeof e.toJSON == "function" && !o) return ze(e.toJSON(), t, n, i, e);
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
var Be = null;
function Ve(e) {
	Be = e;
}
function He(e) {
	return qe("getContext").get(e);
}
function Ue(e, t) {
	let n = qe("setContext");
	if (Ae) {
		var r = R.f;
		!L && r & 32 && !Be.i || Te();
	}
	return n.set(e, t), t;
}
function We(e) {
	return qe("hasContext").has(e);
}
function Ge() {
	return qe("getAllContexts");
}
function E(e, t = !1, n) {
	Be = {
		p: Be,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: R,
		l: je && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function D(e) {
	var t = Be, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Cr(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, Be = t.p, e ?? {};
}
function Ke() {
	return !je || Be !== null && Be.l === null;
}
function qe(e) {
	return Be === null && _e(e), Be.c ??= new Map(Je(Be) || void 0);
}
function Je(e) {
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
var Ye = [];
function Xe() {
	var e = Ye;
	Ye = [], _(e);
}
function Ze(e) {
	if (Ye.length === 0 && !Jt) {
		var t = Ye;
		queueMicrotask(() => {
			t === Ye && Xe();
		});
	}
	Ye.push(e);
}
function Qe() {
	for (; Ye.length > 0;) Xe();
}
function $e() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function et(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function tt() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function nt() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var O = !1;
function rt(e) {
	O = e;
}
var k;
function it(e) {
	if (e === null) throw et(), Ne;
	return k = e;
}
function at() {
	return it(/* @__PURE__ */ yt(k));
}
function A(e) {
	if (O) {
		if (/* @__PURE__ */ yt(k) !== null) throw et(), Ne;
		k = e;
	}
}
function ot(e = 1) {
	if (O) {
		for (var t = e, n = k; t--;) n = /* @__PURE__ */ yt(n);
		k = n;
	}
}
function st(e = !0) {
	for (var t = 0, n = k;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ yt(n);
		e && n.remove(), n = i;
	}
}
function ct(e) {
	if (!e || e.nodeType !== 8) throw et(), Ne;
	return e.data;
}
function lt(e) {
	if (typeof e != "object" || !e || ue in e) return e;
	let t = f(e);
	if (t !== u && t !== d) return e;
	var n = /* @__PURE__ */ new Map(), i = r(e), a = /* @__PURE__ */ F(0), o = null, s = rr, l = (e) => {
		if (rr === s) return e();
		var t = L, n = rr;
		qn(null), ir(s);
		var r = e();
		return qn(t), ir(n), r;
	};
	return i && n.set("length", /* @__PURE__ */ F(e.length, o)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Ee();
			var i = n.get(t);
			return i === void 0 ? l(() => {
				var e = /* @__PURE__ */ F(r.value, o);
				return n.set(t, e), e;
			}) : I(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = l(() => /* @__PURE__ */ F(Pe, o));
					n.set(t, e), Pn(a);
				}
			} else I(r, Pe), Pn(a);
			return !0;
		},
		get(t, r, i) {
			if (r === ue) return e;
			var a = n.get(r), s = r in t;
			if (a === void 0 && (!s || c(t, r)?.writable) && (a = l(() => /* @__PURE__ */ F(lt(s ? t[r] : Pe), o)), n.set(r, a)), a !== void 0) {
				var u = z(a);
				return u === Pe ? void 0 : u;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = z(i));
			} else if (r === void 0) {
				var a = n.get(t), o = a?.v;
				if (a !== void 0 && o !== Pe) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === ue) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== Pe || Reflect.has(e, t);
			return (r !== void 0 || R !== null && (!i || c(e, t)?.writable)) && (r === void 0 && (r = l(() => /* @__PURE__ */ F(i ? lt(e[t]) : Pe, o)), n.set(t, r)), z(r) === Pe) ? !1 : i;
		},
		set(e, t, r, s) {
			var u = n.get(t), d = t in e;
			if (i && t === "length") for (var f = r; f < u.v; f += 1) {
				var p = n.get(f + "");
				p === void 0 ? f in e && (p = l(() => /* @__PURE__ */ F(Pe, o)), n.set(f + "", p)) : I(p, Pe);
			}
			if (u === void 0) (!d || c(e, t)?.writable) && (u = l(() => /* @__PURE__ */ F(void 0, o)), I(u, lt(r)), n.set(t, u));
			else {
				d = u.v !== Pe;
				var m = l(() => lt(r));
				I(u, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, r), !d) {
				if (i && typeof t == "string") {
					var g = n.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && I(g, _ + 1);
				}
				Pn(a);
			}
			return !0;
		},
		ownKeys(e) {
			z(a);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== Pe;
			});
			for (var [r, i] of n) i.v !== Pe && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			De();
		}
	});
}
function ut(e) {
	try {
		if (typeof e == "object" && e && ue in e) return e[ue];
	} catch {}
	return e;
}
function dt(e, t) {
	return Object.is(ut(e), ut(t));
}
var ft, pt, mt, ht;
function gt() {
	if (ft === void 0) {
		ft = window, pt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		mt = c(t, "firstChild").get, ht = c(t, "nextSibling").get, p(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), p(n) && (n.__t = void 0);
	}
}
function _t(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function vt(e) {
	return mt.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function yt(e) {
	return ht.call(e);
}
function j(e, t) {
	if (!O) return /* @__PURE__ */ vt(e);
	var n = /* @__PURE__ */ vt(k);
	if (n === null) n = k.appendChild(_t());
	else if (t && n.nodeType !== 3) {
		var r = _t();
		return n?.before(r), it(r), r;
	}
	return t && wt(n), it(n), n;
}
function M(e, t = !1) {
	if (!O) {
		var n = /* @__PURE__ */ vt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ yt(n) : n;
	}
	if (t) {
		if (k?.nodeType !== 3) {
			var r = _t();
			return k?.before(r), it(r), r;
		}
		wt(k);
	}
	return k;
}
function bt(e, t = 1, n = !1) {
	let r = O ? k : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ yt(r);
	if (!O) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = _t();
			return r === null ? i?.after(a) : r.before(a), it(a), a;
		}
		wt(r);
	}
	return it(r), r;
}
function xt(e) {
	e.textContent = "";
}
function St() {
	return !Ae || rn !== null ? !1 : (R.f & w) !== 0;
}
function Ct(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function wt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function Tt(e) {
	var t = R;
	if (t === null) return L.f |= le, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Et(e, t);
}
function Et(e, t) {
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
var Dt = ~(x | S | b);
function Ot(e, t) {
	e.f = e.f & Dt | t;
}
function kt(e) {
	e.f & 512 || e.deps === null ? Ot(e, b) : Ot(e, S);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function At(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= oe, At(t.deps));
}
function jt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), At(e.deps), Ot(e, b);
}
//#endregion
//#region node_modules/svelte/src/store/utils.js
function Mt(e, t, n) {
	if (e == null) return t(void 0), n && n(void 0), h;
	let r = B(() => e.subscribe(t, n));
	return r.unsubscribe ? () => r.unsubscribe() : r;
}
//#endregion
//#region node_modules/svelte/src/store/shared/index.js
var Nt = [];
function Pt(e, t = h) {
	let n = null, r = /* @__PURE__ */ new Set();
	function i(t) {
		if (he(e, t) && (e = t, n)) {
			let t = !Nt.length;
			for (let t of r) t[1](), Nt.push(t, e);
			if (t) {
				for (let e = 0; e < Nt.length; e += 2) Nt[e][0](Nt[e + 1]);
				Nt.length = 0;
			}
		}
	}
	function a(t) {
		i(t(e));
	}
	function o(o, s = h) {
		let c = [o, s];
		return r.add(c), r.size === 1 && (n = t(i, a) || h), o(e), () => {
			r.delete(c), r.size === 0 && n && (n(), n = null);
		};
	}
	return {
		set: i,
		update: a,
		subscribe: o
	};
}
function Ft(e) {
	let t;
	return Mt(e, (e) => t = e)(), t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var It = !1, Lt = !1, Rt = Symbol();
function zt(e, t, n) {
	let r = n[t] ??= {
		store: null,
		source: /* @__PURE__ */ jn(void 0),
		unsubscribe: h
	};
	if (r.store !== e && !(Rt in n)) if (r.unsubscribe(), r.store = e ?? null, e == null) r.source.v = void 0, r.unsubscribe = h;
	else {
		var i = !0;
		r.unsubscribe = Mt(e, (e) => {
			i ? r.source.v = e : I(r.source, e);
		}), i = !1;
	}
	return e && Rt in n ? Ft(e) : z(r.source);
}
function Bt() {
	let e = {};
	function t() {
		xr(() => {
			for (var t in e) e[t].unsubscribe();
			s(e, Rt, {
				enumerable: !1,
				value: !0
			});
		});
	}
	return [e, t];
}
function Vt(e, t) {
	It = !0;
	try {
		e.set(t);
	} finally {
		It = !1;
	}
}
function Ht(e, t, n) {
	return Vt(e, n), t;
}
function Ut(e) {
	var t = Lt;
	try {
		return Lt = !1, [e(), Lt];
	} finally {
		Lt = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var Wt = /* @__PURE__ */ new Set(), N = null, Gt = null, Kt = null, qt = null, Jt = !1, Yt = !1, Xt = null, Zt = null, Qt = 0, $t = 1, en = class e {
	id = $t++;
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#e = /* @__PURE__ */ new Set();
	#t = /* @__PURE__ */ new Set();
	#n = /* @__PURE__ */ new Set();
	#r = /* @__PURE__ */ new Map();
	#i = /* @__PURE__ */ new Map();
	#a = null;
	#o = [];
	#s = [];
	#c = /* @__PURE__ */ new Set();
	#l = /* @__PURE__ */ new Set();
	#u = /* @__PURE__ */ new Map();
	#d = /* @__PURE__ */ new Set();
	is_fork = !1;
	#f = !1;
	#p = /* @__PURE__ */ new Set();
	#m() {
		return this.is_fork || this.#i.size > 0;
	}
	#h() {
		for (let n of this.#p) for (let r of n.#i.keys()) {
			for (var e = !1, t = r; t.parent !== null;) {
				if (this.#u.has(t)) {
					e = !0;
					break;
				}
				t = t.parent;
			}
			if (!e) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#u.has(e) || this.#u.set(e, {
			d: [],
			m: []
		}), this.#d.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#u.get(e);
		if (n) {
			this.#u.delete(e);
			for (var r of n.d) Ot(r, x), t(r);
			for (r of n.m) Ot(r, S), t(r);
		}
		this.#d.add(e);
	}
	#g() {
		if (Qt++ > 1e3 && (Wt.delete(this), nn()), !this.#m()) {
			for (let e of this.#c) this.#l.delete(e), Ot(e, x), this.schedule(e);
			for (let e of this.#l) Ot(e, S), this.schedule(e);
		}
		let t = this.#o;
		this.#o = [], this.apply();
		var n = Xt = [], r = [], i = Zt = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw un(e), t;
		}
		if (N = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (Xt = null, Zt = null, this.#m() || this.#h()) {
			this.#v(r), this.#v(n);
			for (let [e, t] of this.#u) ln(e, t);
		} else {
			this.#r.size === 0 && Wt.delete(this), this.#c.clear(), this.#l.clear();
			for (let e of this.#e) e(this);
			this.#e.clear(), Gt = this, an(r), an(n), Gt = null, this.#a?.resolve();
		}
		var o = N;
		if (this.#o.length > 0) {
			let e = o ??= this;
			e.#o.push(...this.#o.filter((t) => !e.#o.includes(t)));
		}
		o !== null && (Wt.add(o), o.#g()), Ae && !Wt.has(this) && this.#y();
	}
	#_(e, t, n) {
		e.f ^= b;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#u.has(r)) && r.fn !== null) {
				a ? r.f ^= b : i & 4 ? t.push(r) : Ae && i & 16777224 ? n.push(r) : or(r) && (i & 16 && this.#l.add(r), dr(r));
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
	#v(e) {
		for (var t = 0; t < e.length; t += 1) jt(e[t], this.#c, this.#l);
	}
	capture(e, t, n = !1) {
		e.v !== Pe && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), Kt?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		N = this;
	}
	deactivate() {
		N = null, Kt = null;
	}
	flush() {
		try {
			Yt = !0, N = this, this.#g();
		} finally {
			Qt = 0, qt = null, Xt = null, Zt = null, Yt = !1, N = null, Kt = null, On.clear();
		}
	}
	discard() {
		for (let e of this.#t) e(this);
		this.#t.clear(), this.#n.clear(), Wt.delete(this);
	}
	register_created_effect(e) {
		this.#s.push(e);
	}
	#y() {
		for (let l of Wt) {
			var e = l.id < this.id, t = [];
			for (let [r, [i, a]] of this.current) {
				if (l.current.has(r)) {
					var n = l.current.get(r)[0];
					if (e && i !== n) l.current.set(r, [i, a]);
					else continue;
				}
				t.push(r);
			}
			var r = [...l.current.keys()].filter((e) => !this.current.has(e));
			if (r.length === 0) e && l.discard();
			else if (t.length > 0) {
				if (e) for (let e of this.#d) l.unskip_effect(e, (e) => {
					e.f & 4194320 ? l.schedule(e) : l.#v([e]);
				});
				l.activate();
				var i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
				for (var o of t) on(o, r, i, a);
				a = /* @__PURE__ */ new Map();
				var s = [...l.current.keys()].filter((e) => this.current.has(e) ? this.current.get(e)[0] !== e : !0);
				for (let e of this.#s) !(e.f & 155648) && sn(e, s, a) && (e.f & 4194320 ? (Ot(e, x), l.schedule(e)) : l.#c.add(e));
				if (l.#o.length > 0) {
					l.apply();
					for (var c of l.#o) l.#_(c, [], []);
					l.#o = [];
				}
				l.deactivate();
			}
		}
		for (let e of Wt) e.#p.has(this) && (e.#p.delete(this), e.#p.size === 0 && !e.#m() && (e.activate(), e.#g()));
	}
	increment(e, t) {
		let n = this.#r.get(t) ?? 0;
		if (this.#r.set(t, n + 1), e) {
			let e = this.#i.get(t) ?? 0;
			this.#i.set(t, e + 1);
		}
	}
	decrement(e, t, n) {
		let r = this.#r.get(t) ?? 0;
		if (r === 1 ? this.#r.delete(t) : this.#r.set(t, r - 1), e) {
			let e = this.#i.get(t) ?? 0;
			e === 1 ? this.#i.delete(t) : this.#i.set(t, e - 1);
		}
		this.#f || n || (this.#f = !0, Ze(() => {
			this.#f = !1, this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#c.add(t);
		for (let e of t) this.#l.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#e.add(e);
	}
	ondiscard(e) {
		this.#t.add(e);
	}
	on_fork_commit(e) {
		this.#n.add(e);
	}
	run_fork_commit_callbacks() {
		for (let e of this.#n) e(this);
		this.#n.clear();
	}
	settled() {
		return (this.#a ??= v()).promise;
	}
	static ensure() {
		if (N === null) {
			let t = N = new e();
			Yt || (Wt.add(N), Jt || Ze(() => {
				N === t && t.flush();
			}));
		}
		return N;
	}
	apply() {
		if (!Ae || !this.is_fork && Wt.size === 1) {
			Kt = null;
			return;
		}
		Kt = /* @__PURE__ */ new Map();
		for (let [e, [t]] of this.current) Kt.set(e, t);
		for (let n of Wt) if (!(n === this || n.is_fork)) {
			var e = !1, t = !1;
			if (n.id < this.id) for (let [r, [, i]] of n.current) i || (e ||= this.current.has(r), t ||= !this.current.has(r));
			if (e && t) this.#p.add(n);
			else for (let [e, t] of n.previous) Kt.has(e) || Kt.set(e, t);
		}
	}
	schedule(e) {
		if (qt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (Xt !== null && t === R && (Ae || (L === null || !(L.f & 2)) && !It)) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= b;
			}
		}
		this.#o.push(t);
	}
};
function tn(e) {
	var t = Jt;
	Jt = !0;
	try {
		var n;
		for (e && (N !== null && !N.is_fork && N.flush(), n = e());;) {
			if (Qe(), N === null) return n;
			N.flush();
		}
	} finally {
		Jt = t;
	}
}
function nn() {
	try {
		Ce();
	} catch (e) {
		Et(e, qt);
	}
}
var rn = null;
function an(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && or(r) && (rn = /* @__PURE__ */ new Set(), dr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && zr(r), rn?.size > 0)) {
				On.clear();
				for (let e of rn) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) rn.has(n) && (rn.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || dr(n);
					}
				}
				rn.clear();
			}
		}
		rn = null;
	}
}
function on(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? on(i, t, n, r) : e & 4194320 && !(e & 2048) && sn(i, t, r) && (Ot(i, x), cn(i));
	}
}
function sn(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (a.call(t, r)) return !0;
		if (r.f & 2 && sn(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function cn(e) {
	N.schedule(e);
}
function ln(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), Ot(e, b);
		for (var n = e.first; n !== null;) ln(n, t), n = n.next;
	}
}
function un(e) {
	Ot(e, b);
	for (var t = e.first; t !== null;) un(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function dn(e) {
	let t = 0, n = An(0), r;
	return () => {
		br() && (z(n), kr(() => (t === 0 && (r = B(() => e(() => Pn(n)))), t += 1, () => {
			Ze(() => {
				--t, t === 0 && (r?.(), r = void 0, Pn(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var fn = ne | re;
function pn(e, t, n, r) {
	new mn(e, t, n, r);
}
var mn = class {
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
	#h = dn(() => (this.#m = An(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = R;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = R.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = jr(() => {
			if (O) {
				let e = this.#t;
				at();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#v() : this.#g();
			} else this.#y();
		}, fn), O && (this.#e = k);
	}
	#g() {
		try {
			this.#a = Nr(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed;
		t && (this.#s = Nr(() => {
			t(this.#e, () => e, () => () => {});
		}));
	}
	#v() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = Nr(() => e(this.#e)), Ze(() => {
			var e = this.#c = document.createDocumentFragment(), t = _t();
			e.append(t), this.#a = this.#x(() => Nr(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, Br(this.#o, () => {
				this.#o = null;
			}), this.#b(N));
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = Nr(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Wr(this.#a, e);
				let t = this.#n.pending;
				this.#o = Nr(() => t(this.#e));
			} else this.#b(N);
		} catch (e) {
			this.error(e);
		}
	}
	#b(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		jt(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(e) {
		var t = R, n = L, r = Be;
		Jn(this.#i), qn(this.#i), Ve(this.#i.ctx);
		try {
			return en.ensure(), e();
		} catch (e) {
			return Tt(e), null;
		} finally {
			Jn(t), qn(n), Ve(r);
		}
	}
	#S(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#b(t), this.#o && Br(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Ze(() => {
			this.#d = !1, this.#m && Mn(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), z(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		N?.is_fork ? (this.#a && N.skip_effect(this.#a), this.#o && N.skip_effect(this.#o), this.#s && N.skip_effect(this.#s), N.on_fork_commit(() => {
			this.#C(e);
		})) : this.#C(e);
	}
	#C(e) {
		this.#a &&= (Lr(this.#a), null), this.#o &&= (Lr(this.#o), null), this.#s &&= (Lr(this.#s), null), O && (it(this.#t), ot(), it(st()));
		var t = this.#n.onerror;
		let n = this.#n.failed;
		var r = !1, i = !1;
		let a = () => {
			if (r) {
				nt();
				return;
			}
			r = !0, i && ke(), this.#s !== null && Br(this.#s, () => {
				this.#s = null;
			}), this.#x(() => {
				this.#y();
			});
		}, o = (e) => {
			try {
				i = !0, t?.(e, a), i = !1;
			} catch (e) {
				Et(e, this.#i && this.#i.parent);
			}
			n && (this.#s = this.#x(() => {
				try {
					return Nr(() => {
						var t = R;
						t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
					});
				} catch (e) {
					return Et(e, this.#i.parent), null;
				}
			}));
		};
		Ze(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				Et(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => Et(e, this.#i && this.#i.parent)) : o(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function hn(e, t, n, r) {
	let i = Ke() ? yn : xn;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = R, s = gn(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		s();
		try {
			r(e);
		} catch (e) {
			o.f & 16384 || Et(e, o);
		}
		_n();
	}
	if (n.length === 0) {
		c.then(() => l(t.map(i)));
		return;
	}
	var u = vn();
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ bn(e))).then((e) => l([...t.map(i), ...e])).catch((e) => Et(e, o)).finally(() => u());
	}
	c ? c.then(() => {
		s(), d(), _n();
	}) : d();
}
function gn() {
	var e = R, t = L, n = Be, r = N;
	return function(i = !0) {
		Jn(e), qn(t), Ve(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function _n(e = !0) {
	Jn(null), qn(null), Ve(null), e && N?.deactivate();
}
function vn() {
	var e = R, t = e.b, n = N, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
		t.update_pending_count(-1, n), n.decrement(r, e, i);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function yn(e) {
	var t = 2 | x;
	return R !== null && (R.f |= re), {
		ctx: Be,
		deps: null,
		effects: null,
		equals: me,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: Pe,
		wv: 0,
		parent: R,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function bn(e, t, n) {
	let r = R;
	r === null && ve();
	var i = void 0, a = An(Pe), o = !L, s = /* @__PURE__ */ new Map();
	return Or(() => {
		var t = R, n = v();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, n.reject).finally(_n);
		} catch (e) {
			n.reject(e), _n();
		}
		var c = N;
		if (o) {
			if (t.f & 32768) var l = vn();
			if (r.b.is_rendered()) s.get(c)?.reject(fe), s.delete(c);
			else {
				for (let e of s.values()) e.reject(fe);
				s.clear();
			}
			s.set(c, n);
		}
		let u = (e, n = void 0) => {
			if (l && l(n === fe), !(n === fe || t.f & 16384)) {
				if (c.activate(), n) a.f |= le, Mn(a, n);
				else {
					a.f & 8388608 && (a.f ^= le), Mn(a, e);
					for (let [e, t] of s) {
						if (s.delete(e), e === c) break;
						t.reject(fe);
					}
				}
				c.deactivate();
			}
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), xr(() => {
		for (let e of s.values()) e.reject(fe);
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
function P(e) {
	let t = /* @__PURE__ */ yn(e);
	return Ae || Xn(t), t;
}
/* @__NO_SIDE_EFFECTS__ */
function xn(e) {
	let t = /* @__PURE__ */ yn(e);
	return t.equals = ge, t;
}
function Sn(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) Lr(t[n]);
	}
}
function Cn(e) {
	var t, n = R, r = e.parent;
	if (!Wn && r !== null && r.f & 24576) return $e(), e.v;
	Jn(r);
	try {
		e.f &= ~oe, Sn(e), t = cr(e);
	} finally {
		Jn(n);
	}
	return t;
}
function wn(e) {
	var t = Cn(e);
	if (!e.equals(t) && (e.wv = ar(), (!N?.is_fork || e.deps === null) && (N === null ? e.v = t : N.capture(e, t, !0), e.deps === null))) {
		Ot(e, b);
		return;
	}
	Wn || (Kt === null ? kt(e) : (br() || N?.is_fork) && Kt.set(e, t));
}
function Tn(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(fe), t.teardown = h, t.ac = null, ur(t, 0), Fr(t));
}
function En(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && dr(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Dn = /* @__PURE__ */ new Set(), On = /* @__PURE__ */ new Map(), kn = !1;
function An(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: me,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function F(e, t) {
	let n = An(e, t);
	return Xn(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function jn(e, t = !1, n = !0) {
	let r = An(e);
	return t || (r.equals = ge), je && n && Be !== null && Be.l !== null && (Be.l.s ??= []).push(r), r;
}
function I(e, t, n = !1) {
	return L !== null && (!Kn || L.f & 131072) && Ke() && L.f & 4325394 && (Yn === null || !a.call(Yn, e)) && Oe(), Mn(e, n ? lt(t) : t, Zt);
}
function Mn(e, t, n = null) {
	if (!e.equals(t)) {
		On.set(e, Wn ? t : e.v);
		var r = en.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && Cn(t), Kt === null && kt(t);
		}
		e.wv = ar(), Fn(e, x, n), Ke() && R !== null && R.f & 1024 && !(R.f & 96) && ($n === null ? er([e]) : $n.push(e)), !r.is_fork && Dn.size > 0 && !kn && Nn();
	}
	return t;
}
function Nn() {
	kn = !1;
	for (let e of Dn) e.f & 1024 && Ot(e, S), or(e) && dr(e);
	Dn.clear();
}
function Pn(e) {
	I(e, e.v + 1);
}
function Fn(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ke(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === R)) {
			var l = (c & x) === 0;
			if (l && Ot(s, t), c & 2) {
				var u = s;
				Kt?.delete(u), c & 65536 || (c & 512 && (R === null || !(R.f & 2097152)) && (s.f |= oe), Fn(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && rn !== null && rn.add(d), n === null ? cn(d) : n.push(d);
			}
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var In = null;
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function Ln(e, t) {
	if (t) {
		let t = document.body;
		e.autofocus = !0, Ze(() => {
			document.activeElement === t && e.focus();
		});
	}
}
function Rn(e) {
	O && /* @__PURE__ */ vt(e) !== null && xt(e);
}
var zn = !1;
function Bn() {
	zn || (zn = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t.__on_r?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Vn(e) {
	var t = L, n = R;
	qn(null), Jn(null);
	try {
		return e();
	} finally {
		qn(t), Jn(n);
	}
}
function Hn(e, t, n, r = n) {
	e.addEventListener(t, () => Vn(n));
	let i = e.__on_r;
	i ? e.__on_r = () => {
		i(), r(!0);
	} : e.__on_r = () => r(!0), Bn();
}
//#endregion
//#region node_modules/svelte/src/internal/client/runtime.js
var Un = !1, Wn = !1;
function Gn(e) {
	Wn = e;
}
var L = null, Kn = !1;
function qn(e) {
	L = e;
}
var R = null;
function Jn(e) {
	R = e;
}
var Yn = null;
function Xn(e) {
	L !== null && (!Ae || L.f & 2) && (Yn === null ? Yn = [e] : Yn.push(e));
}
var Zn = null, Qn = 0, $n = null;
function er(e) {
	$n = e;
}
var tr = 1, nr = 0, rr = nr;
function ir(e) {
	rr = e;
}
function ar() {
	return ++tr;
}
function or(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~oe), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (or(a) && wn(a), a.wv > e.wv) return !0;
		}
		t & 512 && Kt === null && Ot(e, b);
	}
	return !1;
}
function sr(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!Ae && Yn !== null && a.call(Yn, e))) for (var i = 0; i < r.length; i++) {
		var o = r[i];
		o.f & 2 ? sr(o, t, !1) : t === o && (n ? Ot(o, x) : o.f & 1024 && Ot(o, S), cn(o));
	}
}
function cr(e) {
	var t = Zn, n = Qn, r = $n, i = L, a = Yn, o = Be, s = Kn, c = rr, l = e.f;
	Zn = null, Qn = 0, $n = null, L = l & 96 ? null : e, Yn = null, Ve(e.ctx), Kn = !1, rr = ++nr, e.ac !== null && (Vn(() => {
		e.ac.abort(fe);
	}), e.ac = null);
	try {
		e.f |= se;
		var u = e.fn, d = u();
		e.f |= w;
		var f = e.deps, p = N?.is_fork;
		if (Zn !== null) {
			var m;
			if (p || ur(e, Qn), f !== null && Qn > 0) for (f.length = Qn + Zn.length, m = 0; m < Zn.length; m++) f[Qn + m] = Zn[m];
			else e.deps = f = Zn;
			if (br() && e.f & 512) for (m = Qn; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Qn < f.length && (ur(e, Qn), f.length = Qn);
		if (Ke() && $n !== null && !Kn && f !== null && !(e.f & 6146)) for (m = 0; m < $n.length; m++) sr($n[m], e);
		if (i !== null && i !== e) {
			if (nr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = nr;
			if (t !== null) for (let e of t) e.rv = nr;
			$n !== null && (r === null ? r = $n : r.push(...$n));
		}
		return e.f & 8388608 && (e.f ^= le), d;
	} catch (e) {
		return Tt(e);
	} finally {
		e.f ^= se, Zn = t, Qn = n, $n = r, L = i, Yn = a, Ve(o), Kn = s, rr = c;
	}
}
function lr(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = i.call(n, e);
		if (r !== -1) {
			var o = n.length - 1;
			o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Zn === null || !a.call(Zn, t))) {
		var s = t;
		s.f & 512 && (s.f ^= 512, s.f &= ~oe), s.v !== Pe && kt(s), Tn(s), ur(s, 0);
	}
}
function ur(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) lr(e, n[r]);
}
function dr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		Ot(e, b);
		var n = R, r = Un;
		R = e, Un = !0;
		try {
			t & 16777232 ? Ir(e) : Fr(e), Pr(e);
			var i = cr(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = tr;
		} finally {
			Un = r, R = n;
		}
	}
}
async function fr() {
	if (Ae) return new Promise((e) => {
		requestAnimationFrame(() => e()), setTimeout(() => e());
	});
	await Promise.resolve(), tn();
}
function z(e) {
	var t = (e.f & 2) != 0;
	if (In?.add(e), L !== null && !Kn && !(R !== null && R.f & 16384) && (Yn === null || !a.call(Yn, e))) {
		var n = L.deps;
		if (L.f & 2097152) e.rv < nr && (e.rv = nr, Zn === null && n !== null && n[Qn] === e ? Qn++ : Zn === null ? Zn = [e] : Zn.push(e));
		else {
			(L.deps ??= []).push(e);
			var r = e.reactions;
			r === null ? e.reactions = [L] : a.call(r, L) || r.push(L);
		}
	}
	if (Wn && On.has(e)) return On.get(e);
	if (t) {
		var i = e;
		if (Wn) {
			var o = i.v;
			return (!(i.f & 1024) && i.reactions !== null || mr(i)) && (o = Cn(i)), On.set(i, o), o;
		}
		var s = (i.f & 512) == 0 && !Kn && L !== null && (Un || (L.f & 512) != 0), c = (i.f & w) === 0;
		or(i) && (s && (i.f |= 512), wn(i)), s && !c && (En(i), pr(i));
	}
	if (Kt?.has(e)) return Kt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function pr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (En(t), pr(t));
}
function mr(e) {
	if (e.v === Pe) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (On.has(t) || t.f & 2 && mr(t)) return !0;
	return !1;
}
function B(e) {
	var t = Kn;
	try {
		return Kn = !0, e();
	} finally {
		Kn = t;
	}
}
function hr(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (ue in e) gr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && ue in n && gr(n);
		}
	}
}
function gr(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			gr(e[n], t);
		} catch {}
		let n = f(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = l(n);
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
function _r(e) {
	R === null && (L === null && Se(e), xe()), Wn && be(e);
}
function vr(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function yr(e, t) {
	var n = R;
	n !== null && n.f & 8192 && (e |= ee);
	var r = {
		ctx: Be,
		deps: null,
		nodes: null,
		f: e | x | 512,
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
	N?.register_created_effect(r);
	var i = r;
	if (e & 4) Xt === null ? en.ensure().schedule(r) : Xt.push(r);
	else if (t !== null) {
		try {
			dr(r);
		} catch (e) {
			throw Lr(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ne));
	}
	if (i !== null && (i.parent = n, n !== null && vr(i, n), L !== null && L.f & 2 && !(e & 64))) {
		var a = L;
		(a.effects ??= []).push(i);
	}
	return r;
}
function br() {
	return L !== null && !Kn;
}
function xr(e) {
	let t = yr(8, null);
	return Ot(t, b), t.teardown = e, t;
}
function Sr(e) {
	_r("$effect");
	var t = R.f;
	if (!L && t & 32 && !(t & 32768)) {
		var n = Be;
		(n.e ??= []).push(e);
	} else return Cr(e);
}
function Cr(e) {
	return yr(4 | ie, e);
}
function wr(e) {
	return _r("$effect.pre"), yr(8 | ie, e);
}
function Tr(e) {
	en.ensure();
	let t = yr(64 | re, e);
	return () => {
		Lr(t);
	};
}
function Er(e) {
	en.ensure();
	let t = yr(64 | re, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? Br(t, () => {
			Lr(t), n(void 0);
		}) : (Lr(t), n(void 0));
	});
}
function Dr(e) {
	return yr(4, e);
}
function Or(e) {
	return yr(ce | re, e);
}
function kr(e, t = 0) {
	return yr(8 | t, e);
}
function Ar(e, t = [], n = [], r = []) {
	hn(r, t, n, (t) => {
		yr(8, () => e(...t.map(z)));
	});
}
function jr(e, t = 0) {
	return yr(16 | t, e);
}
function Mr(e, t = 0) {
	return yr(y | t, e);
}
function Nr(e) {
	return yr(32 | re, e);
}
function Pr(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Wn, n = L;
		Gn(!0), qn(null);
		try {
			t.call(null);
		} finally {
			Gn(e), qn(n);
		}
	}
}
function Fr(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Vn(() => {
			e.abort(fe);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : Lr(n, t), n = r;
	}
}
function Ir(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || Lr(t), t = n;
	}
}
function Lr(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Rr(e.nodes.start, e.nodes.end), n = !0), Ot(e, te), Fr(e, t && !n), ur(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	Pr(e), e.f ^= te, e.f |= C;
	var i = e.parent;
	i !== null && i.first !== null && zr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Rr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ yt(e);
		e.remove(), e = n;
	}
}
function zr(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Br(e, t, n = !0) {
	var r = [];
	Vr(e, r, !0);
	var i = () => {
		n && Lr(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Vr(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ee;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				Vr(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Hr(e) {
	Ur(e, !0);
}
function Ur(e, t) {
	if (e.f & 8192) {
		e.f ^= ee, e.f & 1024 || (Ot(e, x), en.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			Ur(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Wr(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ yt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region src/features/userlist/userlist.ts
var Gr = { userlist: [] }, Kr = (e) => {
	let { subscribe: t, set: n, update: r } = Pt({
		...Gr,
		...e
	});
	return {
		subscribe: t,
		set: n,
		init: (e) => n(e),
		addUser: (e) => r((t) => ({
			...t,
			userlist: [...t.userlist, e]
		})),
		removeUser: (e) => r((t) => ({
			...t,
			userlist: [...t.userlist.filter((t) => t.name !== e)]
		}))
	};
}, qr = (e) => n.on("addUser", e), Jr = (e) => n.on("userLeave", e), Yr = () => Array.from(document.body.querySelectorAll("#userlist .userlist_item")).map((e) => $(e)).map((e) => ({
	name: e.data("name") || "",
	rank: e.data("rank") || -1,
	profile: e.data("profile") || {
		image: "",
		text: ""
	},
	meta: {
		afk: e.data("afk") || !1,
		muted: e.data("meta") && e.data("meta").muted || !1
	}
})), Xr = Kr(), Zr = { version: "" }, Qr = ((e) => {
	let { subscribe: t, set: n, update: r } = Pt({
		...Zr,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		updateVersion: (e) => r((t) => ({
			...t,
			version: e
		})),
		resetVersion: () => r((e) => ({
			...e,
			version: Zr.version
		}))
	};
})(), $r = {
	leader: !1,
	logged_in: !1,
	name: "",
	rank: -1,
	profile: {
		image: "",
		text: ""
	}
}, ei = ((e) => {
	let { subscribe: t, set: n, update: r } = Pt({
		...$r,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		updateName: (e) => r((t) => ({
			...t,
			name: e
		})),
		resetName: () => r((e) => ({
			...e,
			name: $r.name
		})),
		updateLoggedIn: (e) => r((t) => ({
			...t,
			logged_in: e
		})),
		resetLoggedIn: () => r((e) => ({
			...e,
			logged_in: $r.logged_in
		})),
		updateRank: (e) => r((t) => ({
			...t,
			rank: e
		})),
		resetRank: () => r((e) => ({
			...e,
			rank: $r.rank
		}))
	};
})(), ti = { csrf: "" }, ni = ((e) => {
	let { subscribe: t, set: n, update: r } = Pt({
		...ti,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		updateCSRF: (e) => r((t) => ({
			...t,
			csrf: e
		})),
		resetCSRF: () => r((e) => ({
			...e,
			csrf: ti.csrf
		}))
	};
})(), ri = { connected: !0 }, ii = ((e) => {
	let { subscribe: t, set: n, update: r } = Pt({
		...ri,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		updateConnected: (e) => r((t) => ({
			...t,
			connected: e
		})),
		resetConnected: () => r((e) => ({
			...e,
			connected: ri.connected
		}))
	};
})(), ai = () => (ei.init({ ...window.CLIENT }), ei.subscribe((e) => {
	window.CLIENT = e;
})), oi = () => {
	let e = document.getElementsByName("_csrf");
	if (!e) throw Error("no csrf collection found");
	if (e.length < 1) throw Error("no csrf elements found");
	let t = e.item(0);
	if (!t) throw Error("no csrf element found");
	let n = t.value;
	if (!n) throw Error("no csrf value found");
	ni.init({ csrf: n });
}, si = () => (Qr.init({ version: window.VERSION }), Qr.subscribe((e) => {
	window.VERSION = e.version;
})), ci = () => {
	ii.init(n), n.on("connect", () => ii.updateConnected(n.connected)), n.on("disconnect", () => ii.updateConnected(n.connected));
}, li = () => {
	let e = Yr();
	Xr.init({ userlist: e }), qr(Xr.addUser), Jr(({ name: e }) => Xr.removeUser(e));
}, ui = () => {
	let e = ai(), t = si();
	return oi(), ci(), li(), () => {
		e(), t();
	};
}, di = "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", fi = (e, t) => {
	let n = document.getElementById("messagebuffer");
	if (!n) return null;
	let r = document.createElement("div");
	return r.className = "server-msg-reconnect", r.style = `border: 1px ${t}`, r.textContent = e, n.appendChild(r), r;
}, pi = (e) => fi(e, di), mi = async () => new Promise((e, t) => {
	let n = new URL("dist/index.css", window.BASE_URL), r = document.createElement("link");
	r.rel = "stylesheet", r.type = "text/css", r.href = n.toString(), r.onload = () => requestAnimationFrame(() => e()), r.onerror = () => requestAnimationFrame(() => t()), document.head.appendChild(r);
}), hi = () => {
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
}, gi = (e) => {
	window.CHANNEL.js = e;
	let t = document.querySelector("#cs-jstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channeljs) return;
	let n = document.createElement("script");
	n.id = "chanjs", n.type = "text/javascript", n.textContent = e, document.body.append(n);
}, _i = (e) => {
	window.CHANNEL.css = e;
	let t = document.querySelector("#cs-csstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channelcss) return;
	let n = document.createElement("style");
	n.id = "chancss", n.textContent = e, document.head.append(n);
}, vi = (e) => {
	let t = document.querySelector("#chanjs");
	if (!t) {
		gi(e);
		return;
	}
	t.textContent !== e && (t.remove(), gi(e));
}, yi = (e) => {
	let t = document.querySelector("#chancss");
	if (!t) {
		_i(e);
		return;
	}
	t.textContent !== e && (t.remove(), _i(e));
}, bi = () => {
	window.Callbacks.channelCSSJS = ({ css: e, js: t }) => {
		e && yi(e), t && vi(t);
	};
}, xi = () => {
	let e = new URL("dist/favicon.ico", window.BASE_URL), t = document.createElement("link");
	t.href = e.toString(), t.type = "image/x-icon", t.rel = "shortcut icon", document.head.append(t);
}, Si = async () => {
	let e = pi("Loading styles...");
	await mi(), hi(), e && e.remove();
}, Ci = async () => {
	bi(), xi(), await Si();
};
//#endregion
//#region node_modules/svelte/src/attachments/index.js
function wi() {
	return Symbol(Ie);
}
//#endregion
//#region node_modules/svelte/src/utils.js
function Ti(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var Ei = [
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
function Di(e) {
	return Ei.includes(e);
}
var Oi = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), ki = {
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
function Ai(e) {
	return e = e.toLowerCase(), ki[e] ?? e;
}
[...Oi];
var ji = ["touchstart", "touchmove"];
function Mi(e) {
	return ji.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Ni = Symbol("events"), Pi = /* @__PURE__ */ new Set(), Fi = /* @__PURE__ */ new Set();
function Ii(e) {
	if (!O) return;
	e.removeAttribute("onload"), e.removeAttribute("onerror");
	let t = e.__e;
	t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
		e.isConnected && e.dispatchEvent(t);
	}));
}
function Li(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || Hi.call(t, e), !e.cancelBubble) return Vn(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ze(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function V(e, t, n, r = {}) {
	var i = Li(t, e, n, r);
	return () => {
		e.removeEventListener(t, i, r);
	};
}
function Ri(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Li(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && xr(() => {
		t.removeEventListener(e, o, a);
	});
}
function zi(e, t, n) {
	(t[Ni] ??= {})[e] = n;
}
function Bi(e) {
	for (var t = 0; t < e.length; t++) Pi.add(e[t]);
	for (var n of Fi) n(e);
}
var Vi = null;
function Hi(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Vi = e;
	var o = 0, c = Vi === e && e[Ni];
	if (c) {
		var l = i.indexOf(c);
		if (l !== -1 && (t === document || t === window)) {
			e[Ni] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		l <= u && (o = l);
	}
	if (a = i[o] || e.target, a !== t) {
		s(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = L, f = R;
		qn(null), Jn(null);
		try {
			for (var p, m = []; a !== null;) {
				var h = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var g = a[Ni]?.[r];
					g != null && (!a.disabled || e.target === a) && g.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble || h === t || h === null) break;
				a = h;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[Ni] = t, delete e.currentTarget, qn(d), Jn(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Ui = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Wi(e) {
	return Ui?.createHTML(e) ?? e;
}
function Gi(e) {
	var t = Ct("template");
	return t.innerHTML = Wi(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Ki(e, t) {
	var n = R;
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
		if (O) return Ki(k, null), k;
		i === void 0 && (i = Gi(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ vt(i)));
		var t = r || pt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ vt(t), s = t.lastChild;
			Ki(o, s);
		} else Ki(t, t);
		return t;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function qi(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = (t & 1) != 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (O) return Ki(k, null), k;
		if (!o) {
			var e = /* @__PURE__ */ vt(Gi(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ vt(e);) o.appendChild(/* @__PURE__ */ vt(e));
			else o = /* @__PURE__ */ vt(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ vt(t), r = t.lastChild;
			Ki(n, r);
		} else Ki(t, t);
		return t;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Ji(e, t) {
	return /* @__PURE__ */ qi(e, t, "svg");
}
function Yi(e = "") {
	if (!O) {
		var t = _t(e + "");
		return Ki(t, t), t;
	}
	var n = k;
	return n.nodeType === 3 ? wt(n) : (n.before(n = _t()), it(n)), Ki(n, n), n;
}
function U() {
	if (O) return Ki(k, null), k;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = _t();
	return e.append(t, n), Ki(t, n), e;
}
function W(e, t) {
	if (O) {
		var n = R;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = k), at();
		return;
	}
	e !== null && e.before(t);
}
function Xi() {
	if (O && k && k.nodeType === 8 && k.textContent?.startsWith("$")) {
		let e = k.textContent.substring(1);
		return at(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
var Zi = !0;
function Qi(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function $i(e, t) {
	return ta(e, t);
}
var ea = /* @__PURE__ */ new Map();
function ta(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: s = !0, transformError: c }) {
	gt();
	var l = void 0, u = Er(() => {
		var u = n ?? t.appendChild(_t());
		pn(u, { pending: () => {} }, (t) => {
			E({});
			var n = Be;
			if (a && (n.c = a), i && (r.$$events = i), O && Ki(t, null), Zi = s, l = e(t, r) || {}, Zi = !0, O && (R.nodes.end = k, k === null || k.nodeType !== 8 || k.data !== "]")) throw et(), Ne;
			D();
		}, c);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = Mi(r);
					for (let e of [t, document]) {
						var a = ea.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), ea.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Hi, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(o(Pi)), Fi.add(f), () => {
			for (var e of d) for (let n of [t, document]) {
				var r = ea.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Hi), r.delete(e), r.size === 0 && ea.delete(n)) : r.set(e, i);
			}
			Fi.delete(f), u !== n && u.parentNode?.removeChild(u);
		};
	});
	return na.set(l, u), l;
}
var na = /* @__PURE__ */ new WeakMap();
function ra(e, t) {
	let n = na.get(e);
	return n ? (na.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var ia = class {
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
			if (n) Hr(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (Lr(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Wr(r, t), t.append(_t()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else Lr(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), Br(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (Lr(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = N, r = St();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = _t();
			i.append(a), this.#n.set(e, {
				effect: Nr(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, Nr(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else O && (this.anchor = k), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function aa(e, t, n = !1) {
	var r;
	O && (r = k, at());
	var i = new ia(e), a = n ? ne : 0;
	function o(e, t) {
		if (O) {
			var n = ct(r);
			if (e !== parseInt(n.substring(1))) {
				var a = st();
				it(a), i.anchor = a, rt(!1), i.ensure(e, t), rt(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	jr(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/key.js
var oa = Symbol("NaN");
function sa(e, t, n) {
	O && at();
	var r = new ia(e), i = !Ke();
	jr(() => {
		var e = t();
		e !== e && (e = oa), i && typeof e == "object" && e && (e = {}), r.ensure(e, n);
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function ca(e, t, n) {
	for (var r = [], i = t.length, a, s = t.length, c = 0; c < i; c++) {
		let n = t[c];
		Br(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					la(e, o(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --s;
		}, !1);
	}
	if (s === 0) {
		var l = r.length === 0 && n !== null;
		if (l) {
			var u = n, d = u.parentNode;
			xt(d), d.append(u), e.items.clear();
		}
		la(e, t, !l);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function la(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ae, Wr(a, document.createDocumentFragment())) : Lr(t[i], n);
	}
}
var ua;
function da(e, t, n, i, a, s = null) {
	var c = e, l = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		c = O ? it(/* @__PURE__ */ vt(u)) : u.appendChild(_t());
	}
	O && at();
	var d = null, f = /* @__PURE__ */ xn(() => {
		var e = n();
		return r(e) ? e : e == null ? [] : o(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, pa(v, p, c, t, i), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ae, ha(d, null, c)) : Hr(d) : Br(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: jr(() => {
			p = z(f);
			var e = p.length;
			let r = !1;
			O && ct(c) === "[!" != (e === 0) && (c = st(), it(c), rt(!1), r = !0);
			for (var o = /* @__PURE__ */ new Set(), u = N, v = St(), y = 0; y < e; y += 1) {
				O && k.nodeType === 8 && k.data === "]" && (c = k, r = !0, rt(!1));
				var b = p[y], x = i(b, y), S = h ? null : l.get(x);
				S ? (S.v && Mn(S.v, b), S.i && Mn(S.i, y), v && u.unskip_effect(S.e)) : (S = ma(l, h ? c : ua ??= _t(), b, x, y, a, t, n), h || (S.e.f |= ae), l.set(x, S)), o.add(x);
			}
			if (e === 0 && s && !d && (h ? d = Nr(() => s(c)) : (d = Nr(() => s(ua ??= _t())), d.f |= ae)), e > o.size && ye("", "", ""), O && e > 0 && it(st()), !h) if (m.set(u, o), v) {
				for (let [e, t] of l) o.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			r && rt(!0), z(f);
		}),
		flags: t,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, O && (c = k);
}
function fa(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function pa(e, t, n, r, i) {
	var a = (r & 8) != 0, s = t.length, c = e.items, l = fa(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < s; v += 1) h = t[v], g = i(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = i(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (Hr(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= ae, _ === l) ha(_, null, n);
		else {
			var y = d ? d.next : l;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), ga(e, d, _), ga(e, _, y), ha(_, y, n), d = _, p = [], m = [], l = fa(d.next);
			continue;
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], ee = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) ha(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					ga(e, S.prev, ee.next), ga(e, d, S), ga(e, ee, b), l = b, d = ee, --v, p = [], m = [];
				} else u.delete(_), ha(_, l, n), ga(e, _.prev, _.next), ga(e, _, d === null ? e.effect.first : d.next), ga(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = fa(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = fa(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (la(e, o(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var C = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || C.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && C.push(l), l = fa(l.next);
		var w = C.length;
		if (w > 0) {
			var te = r & 4 && s === 0 ? n : null;
			if (a) {
				for (v = 0; v < w; v += 1) C[v].nodes?.a?.measure();
				for (v = 0; v < w; v += 1) C[v].nodes?.a?.fix();
			}
			ca(e, C, te);
		}
	}
	a && Ze(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function ma(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? An(n) : /* @__PURE__ */ jn(n, !1, !1) : null, l = o & 2 ? An(i) : null;
	return {
		v: c,
		i: l,
		e: Nr(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function ha(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ yt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function ga(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function G(e, t, ...n) {
	var r = new ia(e);
	jr(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, ne);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
function _a(e, t, n) {
	var r;
	O && (r = k, at());
	var i = new ia(e);
	jr(() => {
		var e = t() ?? null;
		if (O && ct(r) === "[" != (e !== null)) {
			var a = st();
			it(a), i.anchor = a, rt(!1), i.ensure(e, e && ((t) => n(t, e))), rt(!0);
			return;
		}
		i.ensure(e, e && ((t) => n(t, e)));
	}, ne);
}
//#endregion
//#region node_modules/svelte/src/internal/client/timing.js
var va = () => performance.now(), ya = {
	tick: (e) => requestAnimationFrame(e),
	now: () => va(),
	tasks: /* @__PURE__ */ new Set()
};
//#endregion
//#region node_modules/svelte/src/internal/client/loop.js
function ba() {
	let e = ya.now();
	ya.tasks.forEach((t) => {
		t.c(e) || (ya.tasks.delete(t), t.f());
	}), ya.tasks.size !== 0 && ya.tick(ba);
}
function xa(e) {
	let t;
	return ya.tasks.size === 0 && ya.tick(ba), {
		promise: new Promise((n) => {
			ya.tasks.add(t = {
				c: e,
				f: n
			});
		}),
		abort() {
			ya.tasks.delete(t);
		}
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/transitions.js
function Sa(e, t) {
	Vn(() => {
		e.dispatchEvent(new CustomEvent(t));
	});
}
function Ca(e) {
	if (e === "float") return "cssFloat";
	if (e === "offset") return "cssOffset";
	if (e.startsWith("--")) return e;
	let t = e.split("-");
	return t.length === 1 ? t[0] : t[0] + t.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
function wa(e) {
	let t = {}, n = e.split(";");
	for (let e of n) {
		let [n, r] = e.split(":");
		if (!n || r === void 0) break;
		let i = Ca(n.trim());
		t[i] = r.trim();
	}
	return t;
}
var Ta = (e) => e, Ea = null;
function Da(e, t, n) {
	var r = (Ea ?? R).nodes, i, a, o, s = null;
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
				o = ka(this.element, e, void 0, 1, () => {}, () => {
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
function Oa(e, t, n, r) {
	var i = (e & 1) != 0, a = (e & 2) != 0, o = i && a, s = (e & 4) != 0, c = o ? "both" : i ? "in" : "out", l, u = t.inert, d = t.style.overflow, f, p;
	function m() {
		return Vn(() => l ??= n()(t, r?.() ?? {}, { direction: c }));
	}
	var h = {
		is_global: s,
		in() {
			if (t.inert = u, !i) {
				p?.abort(), p?.reset?.();
				return;
			}
			a || f?.abort(), f = ka(t, m(), p, 1, () => {
				Sa(t, "introstart");
			}, () => {
				Sa(t, "introend"), f?.abort(), f = l = void 0, t.style.overflow = d;
			});
		},
		out(e) {
			if (!a) {
				e?.(), l = void 0;
				return;
			}
			t.inert = !0, p = ka(t, m(), f, 0, () => {
				Sa(t, "outrostart");
			}, () => {
				Sa(t, "outroend"), e?.();
			});
		},
		stop: () => {
			f?.abort(), p?.abort();
		}
	}, g = R;
	if ((g.nodes.t ??= []).push(h), i && Zi) {
		var _ = s;
		if (!_) {
			for (var v = g.parent; v && v.f & 65536;) for (; (v = v.parent) && !(v.f & 16););
			_ = !v || (v.f & 32768) != 0;
		}
		_ && Dr(() => {
			B(() => h.in());
		});
	}
}
function ka(e, t, n, r, i, a) {
	var o = r === 1;
	if (m(t)) {
		var s, c = !1;
		return Ze(() => {
			c || (s = ka(e, t({ direction: o ? "in" : "out" }), n, r, i, a));
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
		abort: h,
		deactivate: h,
		reset: h,
		t: () => r
	};
	let { delay: l = 0, css: u, tick: d, easing: f = Ta } = t;
	var p = [];
	if (o && n === void 0 && (d && d(0, 1), u)) {
		var g = wa(u(0, 1));
		p.push(g, g);
	}
	var _ = () => 1 - r, v = e.animate(p, {
		duration: l,
		fill: "forwards"
	});
	return v.onfinish = () => {
		v.cancel(), i();
		var o = n?.t() ?? 1 - r;
		n?.abort();
		var s = r - o, c = t.duration * Math.abs(s), l = [];
		if (c > 0) {
			var p = !1;
			if (u) for (var m = Math.ceil(c / (1e3 / 60)), h = 0; h <= m; h += 1) {
				var g = o + s * f(h / m), y = wa(u(g, 1 - g));
				l.push(y), p ||= y.overflow === "hidden";
			}
			p && (e.style.overflow = "hidden"), _ = () => {
				var e = v.currentTime;
				return o + s * f(e / c);
			}, d && xa(() => {
				if (v.playState !== "running") return !1;
				var e = _();
				return d(e, 1 - e), !0;
			});
		}
		v = e.animate(l, {
			duration: c,
			fill: "forwards"
		}), v.onfinish = () => {
			_ = () => r, d?.(r, 1 - r), a();
		};
	}, {
		abort: () => {
			v && (v.cancel(), v.effect = null, v.onfinish = h);
		},
		deactivate: () => {
			a = h;
		},
		reset: () => {
			r === 0 && d?.(1, 0);
		},
		t: () => _()
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attachments.js
function Aa(e, t) {
	var n = void 0, r;
	Mr(() => {
		n !== (n = t()) && (r &&= (Lr(r), null), n && (r = Nr(() => {
			Dr(() => n(e));
		})));
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function ja(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = ja(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function Ma() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = ja(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function Na(e) {
	return typeof e == "object" ? Ma(e) : e ?? "";
}
var Pa = [..." 	\n\r\f\xA0\v﻿"];
function Fa(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Pa.includes(r[o - 1])) && (s === r.length || Pa.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function Ia(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function La(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Ra(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(La)), i && c.push(...Object.keys(i).map(La));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = La(e.substring(l, u).trim());
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
		return r && (n += Ia(r)), i && (n += Ia(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function za(e, t, n, r, i, a) {
	var o = e.__className;
	if (O || o !== n || o === void 0) {
		var s = Fa(n, r, a);
		(!O || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function Ba(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function Va(e, t, n, r) {
	var i = e.__style;
	if (O || i !== t) {
		var a = Ra(t, r);
		(!O || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
	} else r && (Array.isArray(r) ? (Ba(e, n?.[0], r[0]), Ba(e, n?.[1], r[1], "important")) : Ba(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function Ha(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!r(t)) return tt();
		for (var i of e.options) i.selected = t.includes(Wa(i));
		return;
	}
	for (i of e.options) if (dt(Wa(i), t)) {
		i.selected = !0;
		return;
	}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function Ua(e) {
	var t = new MutationObserver(() => {
		Ha(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), xr(() => {
		t.disconnect();
	});
}
function Wa(e) {
	return "__value" in e ? e.__value : e.value;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Ga = Symbol("class"), Ka = Symbol("style"), qa = Symbol("is custom element"), Ja = Symbol("is html"), Ya = pe ? "link" : "LINK", Xa = pe ? "input" : "INPUT", Za = pe ? "option" : "OPTION", Qa = pe ? "select" : "SELECT";
function $a(e) {
	if (O) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					to(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					to(e, "checked", null), e.checked = r;
				}
			}
		};
		e.__on_r = n, Ze(n), Bn();
	}
}
function eo(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function to(e, t, n, r) {
	var i = io(e);
	O && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ya) || i[t] !== (i[t] = n) && (t === "loading" && (e[de] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && oo(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function no(e, t, n, r, i = !1, a = !1) {
	if (O && i && e.nodeName === Xa) {
		var o = e;
		(o.type === "checkbox" ? "defaultChecked" : "defaultValue") in n || $a(o);
	}
	var s = io(e), c = s[qa], l = !s[Ja];
	let u = O && c;
	u && rt(!1);
	var d = t || {}, f = e.nodeName === Za;
	for (var p in t) p in n || (n[p] = null);
	n.class ? n.class = Na(n.class) : (r || n[Ga]) && (n.class = null), n[Ka] && (n.style ??= null);
	var m = oo(e);
	for (let i in n) {
		let o = n[i];
		if (f && i === "value" && o == null) {
			e.value = e.__value = "", d[i] = o;
			continue;
		}
		if (i === "class") {
			za(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", o, r, t?.[Ga], n[Ga]), d[i] = o, d[Ga] = n[Ga];
			continue;
		}
		if (i === "style") {
			Va(e, o, t?.[Ka], n[Ka]), d[i] = o, d[Ka] = n[Ka];
			continue;
		}
		var h = d[i];
		if (!(o === h && !(o === void 0 && e.hasAttribute(i)))) {
			d[i] = o;
			var g = i[0] + i[1];
			if (g !== "$$") if (g === "on") {
				let t = {}, n = "$$" + i, r = i.slice(2);
				var _ = Di(r);
				if (Ti(r) && (r = r.slice(0, -7), t.capture = !0), !_ && h) {
					if (o != null) continue;
					e.removeEventListener(r, d[n], t), d[n] = null;
				}
				if (_) zi(r, e, o), Bi([r]);
				else if (o != null) {
					function a(e) {
						d[i].call(this, e);
					}
					d[n] = Li(r, e, a, t);
				}
			} else if (i === "style") to(e, i, o);
			else if (i === "autofocus") Ln(e, !!o);
			else if (!c && (i === "__value" || i === "value" && o != null)) e.value = e.__value = o;
			else if (i === "selected" && f) eo(e, o);
			else {
				var v = i;
				l || (v = Ai(v));
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
				else y || m.includes(v) && (c || typeof o != "string") ? (e[v] = o, v in s && (s[v] = Pe)) : typeof o != "function" && to(e, v, o, a);
			}
		}
	}
	return u && rt(!0), d;
}
function ro(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	hn(i, n, r, (n) => {
		var r = void 0, i = {}, c = e.nodeName === Qa, l = !1;
		if (Mr(() => {
			var u = t(...n.map(z)), d = no(e, r, u, a, o, s);
			l && c && "value" in u && Ha(e, u.value);
			for (let e of Object.getOwnPropertySymbols(i)) u[e] || Lr(i[e]);
			for (let t of Object.getOwnPropertySymbols(u)) {
				var f = u[t];
				t.description === "@attach" && (!r || f !== r[t]) && (i[t] && Lr(i[t]), i[t] = Nr(() => Aa(e, () => f))), d[t] = f;
			}
			r = d;
		}), c) {
			var u = e;
			Dr(() => {
				Ha(u, r.value, !0), Ua(u);
			});
		}
		l = !0;
	});
}
function io(e) {
	return e.__attributes ??= {
		[qa]: e.nodeName.includes("-"),
		[Ja]: e.namespaceURI === Fe
	};
}
var ao = /* @__PURE__ */ new Map();
function oo(e) {
	var t = e.getAttribute("is") || e.nodeName, n = ao.get(t);
	if (n) return n;
	ao.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = l(i), r) r[o].set && n.push(o);
		i = f(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function so(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	Hn(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = co(e) ? lo(a) : a, n(a), N !== null && r.add(N), await fr(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (O && e.defaultValue !== e.value || B(t) == null && e.value) && (n(co(e) ? lo(e.value) : e.value), N !== null && r.add(N)), kr(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = Ae ? Gt : N;
			if (r.has(i)) return;
		}
		co(e) && n === lo(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function co(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function lo(e) {
	return e === "" ? null : +e;
}
function uo(e, t, n = t) {
	Hn(e, "change", () => {
		n(e.files);
	}), O && e.files && n(e.files), kr(() => {
		e.files = t();
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function fo(e, t) {
	return e === t || e?.[ue] === t;
}
function po(e = {}, t, n, r) {
	var i = Be.r, a = R;
	return Dr(() => {
		var o, s;
		return kr(() => {
			o = s, s = r?.() || [], B(() => {
				e !== n(...s) && (t(e, ...s), o && fo(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && fo(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function mo(e = !1) {
	let t = Be, n = t.l.u;
	if (!n) return;
	let r = () => hr(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ yn(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => z(i);
	}
	n.b.length && wr(() => {
		ho(t, r), _(n.b);
	}), Sr(() => {
		let e = B(() => n.m.map(g));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Sr(() => {
		ho(t, r), _(n.a);
	});
}
function ho(e, t) {
	if (e.l.s) for (let t of e.l.s) z(t);
	t();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
var go = {
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
	}, go);
}
var _o = {
	get(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (m(r) && (r = r()), typeof r == "object" && r && t in r) return r[t];
		}
	},
	set(e, t, n) {
		let r = e.props.length;
		for (; r--;) {
			let i = e.props[r];
			m(i) && (i = i());
			let a = c(i, t);
			if (a && a.set) return a.set(n), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (m(r) && (r = r()), typeof r == "object" && r && t in r) {
				let e = c(r, t);
				return e && !e.configurable && (e.configurable = !0), e;
			}
		}
	},
	has(e, t) {
		if (t === ue || t === T) return !1;
		for (let n of e.props) if (m(n) && (n = n()), n != null && t in n) return !0;
		return !1;
	},
	ownKeys(e) {
		let t = [];
		for (let n of e.props) if (m(n) && (n = n()), n) {
			for (let e in n) t.includes(e) || t.push(e);
			for (let e of Object.getOwnPropertySymbols(n)) t.includes(e) || t.push(e);
		}
		return t;
	}
};
function vo(...e) {
	return new Proxy({ props: e }, _o);
}
function q(e, t, n, r) {
	var i = !je || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, l = !0, u = () => (l && (l = !1, s = o ? B(r) : r), s);
	let d;
	if (a) {
		var f = ue in e || T in e;
		d = c(e, t)?.set ?? (f && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	a ? [p, m] = Ut(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = u(), d && (i && we(t), d(p)));
	var h = i ? () => {
		var n = e[t];
		return n === void 0 ? u() : (l = !0, n);
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
	var _ = !1, v = (n & 1 ? yn : xn)(() => (_ = !1, h()));
	a && z(v);
	var y = R;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? z(v) : i && a ? lt(e) : e;
			return I(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return Wn && _ || y.f & 16384 ? v.v : z(v);
	});
}
function yo(e) {
	Be === null && _e("onMount"), je && Be.l !== null ? bo(Be).m.push(e) : Sr(() => {
		let t = B(e);
		if (typeof t == "function") return t;
	});
}
function bo(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region node_modules/svelte/src/internal/flags/legacy.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5"), Me();
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var xo = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, So = (e, t) => ({
	classGroupId: e,
	validator: t
}), Co = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), wo = "-", To = [], Eo = "arbitrary..", Do = (e) => {
	let t = Ao(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return ko(e);
			let n = e.split(wo);
			return Oo(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? xo(i, t) : t : i || To;
			}
			return n[e] || To;
		}
	};
}, Oo = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Oo(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(wo) : e.slice(t).join(wo), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, ko = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Eo + r : void 0;
})(), Ao = (e) => {
	let { theme: t, classGroups: n } = e;
	return jo(n, t);
}, jo = (e, t) => {
	let n = Co();
	for (let r in e) {
		let i = e[r];
		Mo(i, n, r, t);
	}
	return n;
}, Mo = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		No(i, t, n, r);
	}
}, No = (e, t, n, r) => {
	if (typeof e == "string") {
		Po(e, t, n);
		return;
	}
	if (typeof e == "function") {
		Fo(e, t, n, r);
		return;
	}
	Io(e, t, n, r);
}, Po = (e, t, n) => {
	let r = e === "" ? t : Lo(t, e);
	r.classGroupId = n;
}, Fo = (e, t, n, r) => {
	if (Ro(e)) {
		Mo(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(So(n, e));
}, Io = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Mo(o, Lo(t, a), n, r);
	}
}, Lo = (e, t) => {
	let n = e, r = t.split(wo), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Co(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Ro = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, zo = (e) => {
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
}, Bo = "!", Vo = ":", Ho = [], Uo = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), Wo = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Vo) {
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
		s.endsWith(Bo) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Bo) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Uo(t, l, c, u);
	};
	if (t) {
		let e = t + Vo, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Uo(Ho, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, Go = (e) => {
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
}, Ko = (e) => ({
	cache: zo(e.cacheSize),
	parseClassName: Wo(e),
	sortModifiers: Go(e),
	...Do(e)
}), qo = /\s+/, Jo = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a } = t, o = [], s = e.trim().split(qo), c = "";
	for (let e = s.length - 1; e >= 0; --e) {
		let t = s[e], { isExternal: l, modifiers: u, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: p } = n(t);
		if (l) {
			c = t + (c.length > 0 ? " " + c : c);
			continue;
		}
		let m = !!p, h = r(m ? f.substring(0, p) : f);
		if (!h) {
			if (!m) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			if (h = r(f), !h) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			m = !1;
		}
		let g = u.length === 0 ? "" : u.length === 1 ? u[0] : a(u).join(":"), _ = d ? g + Bo : g, v = _ + h;
		if (o.indexOf(v) > -1) continue;
		o.push(v);
		let y = i(h, m);
		for (let e = 0; e < y.length; ++e) {
			let t = y[e];
			o.push(_ + t);
		}
		c = t + (c.length > 0 ? " " + c : c);
	}
	return c;
}, Yo = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Xo(n)) && (i && (i += " "), i += r);
	return i;
}, Xo = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Xo(e[r])) && (n && (n += " "), n += t);
	return n;
}, Zo = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = Ko(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = Jo(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Yo(...e));
}, Qo = [], $o = (e) => {
	let t = (t) => t[e] || Qo;
	return t.isThemeGetter = !0, t;
}, es = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ts = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ns = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, rs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, is = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, as = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, os = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ss = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, cs = (e) => ns.test(e), J = (e) => !!e && !Number.isNaN(Number(e)), ls = (e) => !!e && Number.isInteger(Number(e)), us = (e) => e.endsWith("%") && J(e.slice(0, -1)), ds = (e) => rs.test(e), fs = () => !0, ps = (e) => is.test(e) && !as.test(e), ms = () => !1, hs = (e) => os.test(e), gs = (e) => ss.test(e), _s = (e) => !Y(e) && !X(e), vs = (e) => Ns(e, Ls, ms), Y = (e) => es.test(e), ys = (e) => Ns(e, Rs, ps), bs = (e) => Ns(e, zs, J), xs = (e) => Ns(e, Vs, fs), Ss = (e) => Ns(e, Bs, ms), Cs = (e) => Ns(e, Fs, ms), ws = (e) => Ns(e, Is, gs), Ts = (e) => Ns(e, Hs, hs), X = (e) => ts.test(e), Es = (e) => Ps(e, Rs), Ds = (e) => Ps(e, Bs), Os = (e) => Ps(e, Fs), ks = (e) => Ps(e, Ls), As = (e) => Ps(e, Is), js = (e) => Ps(e, Hs, !0), Ms = (e) => Ps(e, Vs, !0), Ns = (e, t, n) => {
	let r = es.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Ps = (e, t, n = !1) => {
	let r = ts.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Fs = (e) => e === "position" || e === "percentage", Is = (e) => e === "image" || e === "url", Ls = (e) => e === "length" || e === "size" || e === "bg-size", Rs = (e) => e === "length", zs = (e) => e === "number", Bs = (e) => e === "family-name", Vs = (e) => e === "number" || e === "weight", Hs = (e) => e === "shadow", Us = () => {
	let e = $o("color"), t = $o("font"), n = $o("text"), r = $o("font-weight"), i = $o("tracking"), a = $o("leading"), o = $o("breakpoint"), s = $o("container"), c = $o("spacing"), l = $o("radius"), u = $o("shadow"), d = $o("inset-shadow"), f = $o("text-shadow"), p = $o("drop-shadow"), m = $o("blur"), h = $o("perspective"), g = $o("aspect"), _ = $o("ease"), v = $o("animate"), y = () => [
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
		Y
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], ee = () => [
		"auto",
		"contain",
		"none"
	], C = () => [
		X,
		Y,
		c
	], w = () => [
		cs,
		"full",
		"auto",
		...C()
	], te = () => [
		ls,
		"none",
		"subgrid",
		X,
		Y
	], ne = () => [
		"auto",
		{ span: [
			"full",
			ls,
			X,
			Y
		] },
		ls,
		X,
		Y
	], re = () => [
		ls,
		"auto",
		X,
		Y
	], ie = () => [
		"auto",
		"min",
		"max",
		"fr",
		X,
		Y
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
	], se = () => ["auto", ...C()], ce = () => [
		cs,
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
		...C()
	], le = () => [
		cs,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...C()
	], ue = () => [
		cs,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...C()
	], T = () => [
		e,
		X,
		Y
	], de = () => [
		...b(),
		Os,
		Cs,
		{ position: [X, Y] }
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
		ks,
		vs,
		{ size: [X, Y] }
	], me = () => [
		us,
		Es,
		ys
	], he = () => [
		"",
		"none",
		"full",
		l,
		X,
		Y
	], ge = () => [
		"",
		J,
		Es,
		ys
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
		J,
		us,
		Os,
		Cs
	], be = () => [
		"",
		"none",
		m,
		X,
		Y
	], xe = () => [
		"none",
		J,
		X,
		Y
	], Se = () => [
		"none",
		J,
		X,
		Y
	], Ce = () => [
		J,
		X,
		Y
	], we = () => [
		cs,
		"full",
		...C()
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
			blur: [ds],
			breakpoint: [ds],
			color: [fs],
			container: [ds],
			"drop-shadow": [ds],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [_s],
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
			"inset-shadow": [ds],
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
			radius: [ds],
			shadow: [ds],
			spacing: ["px", J],
			text: [ds],
			"text-shadow": [ds],
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
				cs,
				Y,
				X,
				g
			] }],
			container: ["container"],
			columns: [{ columns: [
				J,
				Y,
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
			overscroll: [{ overscroll: ee() }],
			"overscroll-x": [{ "overscroll-x": ee() }],
			"overscroll-y": [{ "overscroll-y": ee() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: w() }],
			"inset-x": [{ "inset-x": w() }],
			"inset-y": [{ "inset-y": w() }],
			start: [{
				"inset-s": w(),
				start: w()
			}],
			end: [{
				"inset-e": w(),
				end: w()
			}],
			"inset-bs": [{ "inset-bs": w() }],
			"inset-be": [{ "inset-be": w() }],
			top: [{ top: w() }],
			right: [{ right: w() }],
			bottom: [{ bottom: w() }],
			left: [{ left: w() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				ls,
				"auto",
				X,
				Y
			] }],
			basis: [{ basis: [
				cs,
				"full",
				"auto",
				s,
				...C()
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
				J,
				cs,
				"auto",
				"initial",
				"none",
				Y
			] }],
			grow: [{ grow: [
				"",
				J,
				X,
				Y
			] }],
			shrink: [{ shrink: [
				"",
				J,
				X,
				Y
			] }],
			order: [{ order: [
				ls,
				"first",
				"last",
				"none",
				X,
				Y
			] }],
			"grid-cols": [{ "grid-cols": te() }],
			"col-start-end": [{ col: ne() }],
			"col-start": [{ "col-start": re() }],
			"col-end": [{ "col-end": re() }],
			"grid-rows": [{ "grid-rows": te() }],
			"row-start-end": [{ row: ne() }],
			"row-start": [{ "row-start": re() }],
			"row-end": [{ "row-end": re() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": ie() }],
			"auto-rows": [{ "auto-rows": ie() }],
			gap: [{ gap: C() }],
			"gap-x": [{ "gap-x": C() }],
			"gap-y": [{ "gap-y": C() }],
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
			p: [{ p: C() }],
			px: [{ px: C() }],
			py: [{ py: C() }],
			ps: [{ ps: C() }],
			pe: [{ pe: C() }],
			pbs: [{ pbs: C() }],
			pbe: [{ pbe: C() }],
			pt: [{ pt: C() }],
			pr: [{ pr: C() }],
			pb: [{ pb: C() }],
			pl: [{ pl: C() }],
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
			"space-x": [{ "space-x": C() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": C() }],
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
				Es,
				ys
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Ms,
				xs
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
				us,
				Y
			] }],
			"font-family": [{ font: [
				Ds,
				Ss,
				t
			] }],
			"font-features": [{ "font-features": [Y] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				X,
				Y
			] }],
			"line-clamp": [{ "line-clamp": [
				J,
				"none",
				X,
				bs
			] }],
			leading: [{ leading: [a, ...C()] }],
			"list-image": [{ "list-image": [
				"none",
				X,
				Y
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				X,
				Y
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
				J,
				"from-font",
				"auto",
				X,
				ys
			] }],
			"text-decoration-color": [{ decoration: T() }],
			"underline-offset": [{ "underline-offset": [
				J,
				"auto",
				X,
				Y
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
			indent: [{ indent: C() }],
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
				Y
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
				Y
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
						ls,
						X,
						Y
					],
					radial: [
						"",
						X,
						Y
					],
					conic: [
						ls,
						X,
						Y
					]
				},
				As,
				ws
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
				J,
				X,
				Y
			] }],
			"outline-w": [{ outline: [
				"",
				J,
				Es,
				ys
			] }],
			"outline-color": [{ outline: T() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				js,
				Ts
			] }],
			"shadow-color": [{ shadow: T() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				js,
				Ts
			] }],
			"inset-shadow-color": [{ "inset-shadow": T() }],
			"ring-w": [{ ring: ge() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: T() }],
			"ring-offset-w": [{ "ring-offset": [J, ys] }],
			"ring-offset-color": [{ "ring-offset": T() }],
			"inset-ring-w": [{ "inset-ring": ge() }],
			"inset-ring-color": [{ "inset-ring": T() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				js,
				Ts
			] }],
			"text-shadow-color": [{ "text-shadow": T() }],
			opacity: [{ opacity: [
				J,
				X,
				Y
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
			"mask-image-linear-pos": [{ "mask-linear": [J] }],
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
			"mask-image-radial": [{ "mask-radial": [X, Y] }],
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
			"mask-image-conic-pos": [{ "mask-conic": [J] }],
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
				X,
				Y
			] }],
			filter: [{ filter: [
				"",
				"none",
				X,
				Y
			] }],
			blur: [{ blur: be() }],
			brightness: [{ brightness: [
				J,
				X,
				Y
			] }],
			contrast: [{ contrast: [
				J,
				X,
				Y
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				js,
				Ts
			] }],
			"drop-shadow-color": [{ "drop-shadow": T() }],
			grayscale: [{ grayscale: [
				"",
				J,
				X,
				Y
			] }],
			"hue-rotate": [{ "hue-rotate": [
				J,
				X,
				Y
			] }],
			invert: [{ invert: [
				"",
				J,
				X,
				Y
			] }],
			saturate: [{ saturate: [
				J,
				X,
				Y
			] }],
			sepia: [{ sepia: [
				"",
				J,
				X,
				Y
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				X,
				Y
			] }],
			"backdrop-blur": [{ "backdrop-blur": be() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				J,
				X,
				Y
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				J,
				X,
				Y
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				J,
				X,
				Y
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				J,
				X,
				Y
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				J,
				X,
				Y
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				J,
				X,
				Y
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				J,
				X,
				Y
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				J,
				X,
				Y
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": C() }],
			"border-spacing-x": [{ "border-spacing-x": C() }],
			"border-spacing-y": [{ "border-spacing-y": C() }],
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
				Y
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				J,
				"initial",
				X,
				Y
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				X,
				Y
			] }],
			delay: [{ delay: [
				J,
				X,
				Y
			] }],
			animate: [{ animate: [
				"none",
				v,
				X,
				Y
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				X,
				Y
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
				X,
				Y,
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
				X,
				Y
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
			"scroll-m": [{ "scroll-m": C() }],
			"scroll-mx": [{ "scroll-mx": C() }],
			"scroll-my": [{ "scroll-my": C() }],
			"scroll-ms": [{ "scroll-ms": C() }],
			"scroll-me": [{ "scroll-me": C() }],
			"scroll-mbs": [{ "scroll-mbs": C() }],
			"scroll-mbe": [{ "scroll-mbe": C() }],
			"scroll-mt": [{ "scroll-mt": C() }],
			"scroll-mr": [{ "scroll-mr": C() }],
			"scroll-mb": [{ "scroll-mb": C() }],
			"scroll-ml": [{ "scroll-ml": C() }],
			"scroll-p": [{ "scroll-p": C() }],
			"scroll-px": [{ "scroll-px": C() }],
			"scroll-py": [{ "scroll-py": C() }],
			"scroll-ps": [{ "scroll-ps": C() }],
			"scroll-pe": [{ "scroll-pe": C() }],
			"scroll-pbs": [{ "scroll-pbs": C() }],
			"scroll-pbe": [{ "scroll-pbe": C() }],
			"scroll-pt": [{ "scroll-pt": C() }],
			"scroll-pr": [{ "scroll-pr": C() }],
			"scroll-pb": [{ "scroll-pb": C() }],
			"scroll-pl": [{ "scroll-pl": C() }],
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
				Y
			] }],
			fill: [{ fill: ["none", ...T()] }],
			"stroke-w": [{ stroke: [
				J,
				Es,
				ys,
				bs
			] }],
			stroke: [{ stroke: ["none", ...T()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
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
}, Ws = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (Gs(e, "cacheSize", t), Gs(e, "prefix", n), Gs(e, "experimentalParseClassName", r), Ks(e.theme, a.theme), Ks(e.classGroups, a.classGroups), Ks(e.conflictingClassGroups, a.conflictingClassGroups), Ks(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Gs(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), qs(e.theme, i.theme), qs(e.classGroups, i.classGroups), qs(e.conflictingClassGroups, i.conflictingClassGroups), qs(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Js(e, i, "orderSensitiveModifiers"), e), Gs = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, Ks = (e, t) => {
	if (t) for (let n in t) Gs(e, n, t[n]);
}, qs = (e, t) => {
	if (t) for (let n in t) Js(e, t, n);
}, Js = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, Ys = (e, ...t) => typeof e == "function" ? Zo(Us, e, ...t) : Zo(() => Ws(Us(), e), ...t), Xs = /* @__PURE__ */ Zo(Us);
//#endregion
//#region src/lib/utils.ts
function Zs(...e) {
	return Xs(Ma(e));
}
//#endregion
//#region node_modules/tailwind-variants/dist/chunk-LQJYWU4O.js
var Qs = /\s+/g, $s = (e) => typeof e != "string" || !e ? e : e.replace(Qs, " ").trim(), ec = (...e) => {
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
	return t.length > 0 ? $s(t.join(" ")) : void 0;
}, tc = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, nc = (e) => {
	if (!e || typeof e != "object") return !0;
	for (let t in e) return !1;
	return !0;
}, rc = (e, t) => {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let i = 0; i < n.length; i++) {
		let a = n[i];
		if (!r.includes(a) || e[a] !== t[a]) return !1;
	}
	return !0;
}, ic = (e, t) => {
	for (let n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
		let r = t[n];
		n in e ? e[n] = ec(e[n], r) : e[n] = r;
	}
	return e;
}, ac = (e, t) => {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		Array.isArray(r) ? ac(r, t) : r && t.push(r);
	}
}, oc = (...e) => {
	let t = [];
	ac(e, t);
	let n = [];
	for (let e = 0; e < t.length; e++) t[e] && n.push(t[e]);
	return n;
}, sc = (e, t) => {
	let n = {};
	for (let r in e) {
		let i = e[r];
		if (r in t) {
			let e = t[r];
			Array.isArray(i) || Array.isArray(e) ? n[r] = oc(e, i) : typeof i == "object" && typeof e == "object" && i && e ? n[r] = sc(i, e) : n[r] = e + " " + i;
		} else n[r] = i;
	}
	for (let r in t) r in e || (n[r] = t[r]);
	return n;
}, cc = {
	twMerge: !0,
	twMergeConfig: {}
};
function lc() {
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
var uc = lc(), dc = (e) => {
	let t = (t, n) => {
		let { extend: r = null, slots: i = {}, variants: a = {}, compoundVariants: o = [], compoundSlots: s = [], defaultVariants: c = {} } = t, l = {
			...cc,
			...n
		}, u = r?.base ? ec(r.base, t?.base) : t?.base, d = r?.variants && !nc(r.variants) ? sc(a, r.variants) : a, f = r?.defaultVariants && !nc(r.defaultVariants) ? {
			...r.defaultVariants,
			...c
		} : c;
		!nc(l.twMergeConfig) && !rc(l.twMergeConfig, uc.cachedTwMergeConfig) && (uc.didTwMergeConfigChange = !0, uc.cachedTwMergeConfig = l.twMergeConfig);
		let p = nc(r?.slots), m = nc(i) ? {} : {
			base: ec(t?.base, p && r?.base),
			...i
		}, h = p ? m : ic({ ...r?.slots }, nc(m) ? { base: t?.base } : m), g = nc(r?.compoundVariants) ? o : oc(r?.compoundVariants, o), _ = (t) => {
			if (nc(d) && nc(i) && p) return e(u, t?.class, t?.className)(l);
			if (g && !Array.isArray(g)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof g}`);
			if (s && !Array.isArray(s)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
			let n = (e, n = d, r = null, i = null) => {
				let a = n[e];
				if (!a || nc(a)) return null;
				let o = i?.[e] ?? t?.[e];
				if (o === null) return null;
				let s = tc(o);
				if (typeof s == "object") return null;
				let c = f?.[e];
				return a[(s ?? tc(c)) || "false"];
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
					if (!nc(o)) {
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
			if (!nc(i) || !p) {
				let t = {};
				if (typeof h == "object" && !nc(h)) {
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
		createTV: (e) => (n, r) => t(n, r ? sc(e, r) : e)
	};
}, fc = (e) => nc(e) ? Xs : Ys({
	...e,
	extend: {
		theme: e.theme,
		classGroups: e.classGroups,
		conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
		conflictingClassGroups: e.conflictingClassGroups,
		...e.extend
	}
}), pc = (e, t) => {
	let n = ec(e);
	return !n || !(t?.twMerge ?? !0) ? n : ((!uc.cachedTwMerge || uc.didTwMergeConfigChange) && (uc.didTwMergeConfigChange = !1, uc.cachedTwMerge = fc(uc.cachedTwMergeConfig)), uc.cachedTwMerge(n) || void 0);
}, { createTV: mc, tv: hc } = dc((...e) => (t) => pc(e, t)), gc = hc({
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
}), _c = /* @__PURE__ */ H("<a><!></a>"), vc = /* @__PURE__ */ H("<button><!></button>");
function yc(e, t) {
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
		var o = _c();
		ro(o, (e) => ({
			"data-slot": "button",
			class: e,
			href: t.disabled ? void 0 : a(),
			"aria-disabled": t.disabled,
			role: t.disabled ? "link" : void 0,
			tabindex: t.disabled ? -1 : void 0,
			...s
		}), [() => Zs(gc({
			variant: n(),
			size: r()
		}), t.class)]), G(j(o), () => t.children ?? h), A(o), po(o, (e) => i(e), () => i()), W(e, o);
	}, d = (e) => {
		var a = vc();
		ro(a, (e) => ({
			"data-slot": "button",
			class: e,
			type: o(),
			disabled: t.disabled,
			...s
		}), [() => Zs(gc({
			variant: n(),
			size: r()
		}), t.class)]), G(j(a), () => t.children ?? h), A(a), po(a, (e) => i(e), () => i()), W(e, a);
	};
	aa(l, (e) => {
		a() ? e(u) : e(d, -1);
	}), W(e, c), D();
}
//#endregion
//#region src/shared/components/common/VersionBadge.svelte
var bc = /* @__PURE__ */ H("<div class=\"relative w-15 h-15 shrink-0 overflow-hidden\"><div class=\"absolute top-[18%] left-[-75%] w-[250%] py-[0.25em] pr-[1.5em] -rotate-45 bg-primary text-white text-[0.6rem] font-bold text-center shadow-md leading-none pointer-events-none\"> </div></div>");
function xc(e, t) {
	let n = q(t, "version", 3, "main");
	var r = bc(), i = j(r), a = j(i, !0);
	A(i), A(r), Ar(() => Qi(a, n())), W(e, r);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/is.js
function Sc(e) {
	return typeof e == "function";
}
function Cc(e) {
	return typeof e == "object" && !!e;
}
var wc = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function Tc(e) {
	return e == null || wc.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => Tc(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/box/box-extras.svelte.js
var Ec = Symbol("box"), Dc = Symbol("is-writable");
function Z(e, t) {
	let n = /* @__PURE__ */ P(e);
	return t ? {
		[Ec]: !0,
		[Dc]: !0,
		get current() {
			return z(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[Ec]: !0,
		get current() {
			return e();
		}
	};
}
function Oc(e) {
	return Cc(e) && Ec in e;
}
function kc(e) {
	return Oc(e) ? e : Sc(e) ? Z(e) : Ac(e);
}
function Ac(e) {
	let t = /* @__PURE__ */ F(lt(e));
	return {
		[Ec]: !0,
		[Dc]: !0,
		get current() {
			return z(t);
		},
		set current(e) {
			I(t, e, !0);
		}
	};
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
function jc(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
//#endregion
//#region node_modules/inline-style-parser/esm/index.mjs
var Mc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Nc = /\n/g, Pc = /^\s*/, Fc = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Ic = /^:\s*/, Lc = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Rc = /^[;\s]*/, zc = /^\s+|\s+$/g, Bc = "\n", Vc = "/", Hc = "*", Uc = "", Wc = "comment", Gc = "declaration";
function Kc(e, t) {
	if (typeof e != "string") throw TypeError("First argument must be a string");
	if (!e) return [];
	t ||= {};
	var n = 1, r = 1;
	function i(e) {
		var t = e.match(Nc);
		t && (n += t.length);
		var i = e.lastIndexOf(Bc);
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
		c(Pc);
	}
	function u(e) {
		var t;
		for (e ||= []; t = d();) t !== !1 && e.push(t);
		return e;
	}
	function d() {
		var t = a();
		if (!(Vc != e.charAt(0) || Hc != e.charAt(1))) {
			for (var n = 2; Uc != e.charAt(n) && (Hc != e.charAt(n) || Vc != e.charAt(n + 1));) ++n;
			if (n += 2, Uc === e.charAt(n - 1)) return s("End of comment missing");
			var o = e.slice(2, n - 2);
			return r += 2, i(o), e = e.slice(n), r += 2, t({
				type: Wc,
				comment: o
			});
		}
	}
	function f() {
		var e = a(), t = c(Fc);
		if (t) {
			if (d(), !c(Ic)) return s("property missing ':'");
			var n = c(Lc), r = e({
				type: Gc,
				property: qc(t[0].replace(Mc, Uc)),
				value: n ? qc(n[0].replace(Mc, Uc)) : Uc
			});
			return c(Rc), r;
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
function qc(e) {
	return e ? e.replace(zc, Uc) : Uc;
}
//#endregion
//#region node_modules/style-to-object/esm/index.mjs
function Jc(e, t) {
	let n = null;
	if (!e || typeof e != "string") return n;
	let r = Kc(e), i = typeof t == "function";
	return r.forEach((e) => {
		if (e.type !== "declaration") return;
		let { property: r, value: a } = e;
		i ? t(r, a, e) : a && (n ||= {}, n[r] = a);
	}), n;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/strings.js
var Yc = /\d/, Xc = [
	"-",
	"_",
	"/",
	"."
];
function Zc(e = "") {
	if (!Yc.test(e)) return e !== e.toLowerCase();
}
function Qc(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = Xc.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = Zc(a);
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
function $c(e) {
	return e ? Qc(e).map((e) => tl(e)).join("") : "";
}
function el(e) {
	return nl($c(e || ""));
}
function tl(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function nl(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function rl(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[$c(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[el(e)] = n;
	}
	return Jc(e, n), t;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
function il(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function al(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var ol = al(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function sl(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${ol(t)}: ${e[t]};`).join("\n");
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/style.js
function cl(e = {}) {
	return sl(e).replace("\n", " ");
}
var ll = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/merge-props.js
function ul(e) {
	return ll.has(e);
}
function dl(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
				if (a && typeof o && ul(e)) t[e] = jc(n, i);
				else if (a && o) t[e] = il(n, i);
				else if (e === "class") {
					let r = Tc(n), a = Tc(i);
					r && a ? t[e] = Ma(n, i) : r ? t[e] = Ma(n) : a && (t[e] = Ma(i));
				} else if (e === "style") {
					let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
					if (r && a) t[e] = {
						...n,
						...i
					};
					else if (r && s) {
						let r = rl(i);
						t[e] = {
							...n,
							...r
						};
					} else if (o && a) t[e] = {
						...rl(n),
						...i
					};
					else if (o && s) {
						let r = rl(n), a = rl(i);
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
	return typeof t.style == "object" && (t.style = cl(t.style).replaceAll("\n", " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t;
}
//#endregion
//#region node_modules/runed/dist/internal/configurable-globals.js
var fl = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/runed/dist/internal/utils/dom.js
function pl(e) {
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
var ml = class extends Map {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ F(0);
	#n = /* @__PURE__ */ F(0);
	#r = rr || -1;
	constructor(e) {
		if (super(), e) {
			for (var [t, n] of e) super.set(t, n);
			this.#n.v = super.size;
		}
	}
	#i(e) {
		return rr === this.#r ? /* @__PURE__ */ F(e) : An(e);
	}
	has(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) if (super.has(e)) n = this.#i(0), t.set(e, n);
		else return z(this.#t), !1;
		return z(n), !0;
	}
	forEach(e, t) {
		this.#a(), super.forEach(e, t);
	}
	get(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) if (super.has(e)) n = this.#i(0), t.set(e, n);
		else {
			z(this.#t);
			return;
		}
		return z(n), super.get(e);
	}
	set(e, t) {
		var n = this.#e, r = n.get(e), i = super.get(e), a = super.set(e, t), o = this.#t;
		if (r === void 0) r = this.#i(0), n.set(e, r), I(this.#n, super.size), Pn(o);
		else if (i !== t) {
			Pn(r);
			var s = o.reactions === null ? null : new Set(o.reactions);
			(s === null || !r.reactions?.every((e) => s.has(e))) && Pn(o);
		}
		return a;
	}
	delete(e) {
		var t = this.#e, n = t.get(e), r = super.delete(e);
		return n !== void 0 && (t.delete(e), I(n, -1)), r && (I(this.#n, super.size), Pn(this.#t)), r;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#e;
			I(this.#n, 0);
			for (var t of e.values()) I(t, -1);
			Pn(this.#t), e.clear();
		}
	}
	#a() {
		z(this.#t);
		var e = this.#e;
		if (this.#n.v !== e.size) {
			for (var t of super.keys()) if (!e.has(t)) {
				var n = this.#i(0);
				e.set(t, n);
			}
		}
		for ([, n] of this.#e) z(n);
	}
	keys() {
		return z(this.#t), super.keys();
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
		return z(this.#n), super.size;
	}
};
new class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: t = fl, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = dn((e) => {
			let n = V(t, "focusin", e), r = V(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? pl(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/runed/dist/internal/utils/is.js
function hl(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/runed/dist/utilities/context/context.js
var gl = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return We(this.#t);
	}
	get() {
		let e = He(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = He(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return Ue(this.#t, e);
	}
};
//#endregion
//#region node_modules/runed/dist/utilities/watch/watch.svelte.js
function _l(e, t) {
	switch (e) {
		case "post":
			Sr(t);
			break;
		case "pre":
			wr(t);
			break;
	}
}
function vl(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	_l(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = B(() => n(t, o));
		return o = t, r;
	});
}
function yl(e, t, n) {
	let r = Tr(() => {
		let i = !1;
		vl(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Sr(() => r);
}
function bl(e, t, n) {
	vl(e, "post", t, n);
}
function xl(e, t, n) {
	vl(e, "pre", t, n);
}
bl.pre = xl;
function Sl(e, t) {
	yl(e, "post", t);
}
function Cl(e, t) {
	yl(e, "pre", t);
}
Sl.pre = Cl;
//#endregion
//#region node_modules/runed/dist/internal/utils/get.js
function wl(e) {
	return hl(e) ? e() : e;
}
//#endregion
//#region node_modules/runed/dist/utilities/element-size/element-size.svelte.js
var Tl = class {
	#e = {
		width: 0,
		height: 0
	};
	#t = !1;
	#n;
	#r;
	#i;
	#a = /* @__PURE__ */ P(() => (z(this.#s)?.(), this.getSize().width));
	#o = /* @__PURE__ */ P(() => (z(this.#s)?.(), this.getSize().height));
	#s = /* @__PURE__ */ P(() => {
		let e = wl(this.#r);
		if (e) return dn((t) => {
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
		this.#i = t.window ?? fl, this.#n = t, this.#r = e, this.#e = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		let e = wl(this.#r);
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
		return z(this.#s)?.(), this.getSize();
	}
	get width() {
		return z(this.#a);
	}
	get height() {
		return z(this.#o);
	}
};
//#endregion
//#region node_modules/runed/dist/utilities/resource/resource.svelte.js
function El(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function Dl(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function Ol(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ F(lt(o)), u = /* @__PURE__ */ F(!1), d = /* @__PURE__ */ F(void 0), f = /* @__PURE__ */ F(lt([])), p = () => {
		z(f).forEach((e) => e()), I(f, [], !0);
	}, m = (e) => {
		I(f, [...z(f), e], !0);
	}, h = async (e, n, r = !1) => {
		try {
			I(u, !0), I(d, void 0), p();
			let i = new AbortController();
			m(() => i.abort());
			let a = await t(e, n, {
				data: z(l),
				refetching: r,
				onCleanup: m,
				signal: i.signal
			});
			return I(l, a, !0), a;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || I(d, e, !0);
			return;
		} finally {
			I(u, !1);
		}
	}, g = s ? El(h, s) : c ? Dl(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
	return r((t, n) => {
		a && v || (v = t, g(Array.isArray(e) ? t : t[0], Array.isArray(e) ? n : n?.[0]));
	}, { lazy: i }), {
		get current() {
			return z(l);
		},
		get loading() {
			return z(u);
		},
		get error() {
			return z(d);
		},
		mutate: (e) => {
			I(l, e, !0);
		},
		refetch: (t) => {
			let n = _.map((e) => e());
			return g(Array.isArray(e) ? n : n[0], Array.isArray(e) ? n : n[0], t ?? !0);
		}
	};
}
function kl(e, t, n) {
	return Ol(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		bl(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function Al(e, t, n) {
	return Ol(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		bl.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
kl.pre = Al;
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/on-destroy-effect.svelte.js
function jl(e) {
	Sr(() => () => {
		e();
	});
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/on-mount-effect.svelte.js
function Ml(e) {
	Sr(() => B(() => e()));
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-sleep.js
function Nl(e, t) {
	return setTimeout(t, e);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-tick.js
function Pl(e) {
	fr().then(e);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/dom.js
var Fl = 1, Il = 9, Ll = 11;
function Rl(e) {
	return Cc(e) && e.nodeType === Fl && typeof e.nodeName == "string";
}
function zl(e) {
	return Cc(e) && e.nodeType === Il;
}
function Bl(e) {
	return Cc(e) && e.constructor?.name === "VisualViewport";
}
function Vl(e) {
	return Cc(e) && e.nodeType !== void 0;
}
function Hl(e) {
	return Vl(e) && e.nodeType === Ll && "host" in e;
}
function Ul(e, t) {
	if (!e || !t || !Rl(e) || !Rl(t)) return !1;
	let n = t.getRootNode?.();
	if (e === t || e.contains(t)) return !0;
	if (n && Hl(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function Wl(e) {
	return zl(e) ? e : Bl(e) ? e.document : e?.ownerDocument ?? document;
}
function Gl(e) {
	return Hl(e) ? Gl(e.host) : zl(e) ? e.defaultView ?? window : Rl(e) ? e.ownerDocument?.defaultView ?? window : window;
}
function Kl(e) {
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
var ql = class {
	element;
	#e = /* @__PURE__ */ P(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return z(this.#e);
	}
	set root(e) {
		I(this.#e, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = Z(e) : this.element = e;
	}
	getDocument = () => Wl(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => Kl(this.root);
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
function Jl(e, t) {
	return { [wi()]: (n) => Oc(e) ? (e.current = n, B(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), B(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
//#endregion
//#region node_modules/bits-ui/dist/internal/attrs.js
function Yl(e) {
	return e ? "true" : "false";
}
function Xl(e) {
	return e ? "open" : "closed";
}
function Zl(e) {
	return e === "starting" ? { "data-starting-style": "" } : e === "ending" ? { "data-ending-style": "" } : {};
}
var Ql = class {
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
function $l(e) {
	let t = new Ql(e);
	return {
		...t.attrs,
		selector: t.selector,
		getAttr: t.getAttr
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/is.js
var eu = typeof document < "u", tu = nu();
function nu() {
	return eu && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function ru(e) {
	return e instanceof HTMLElement;
}
function iu(e) {
	return e instanceof Element;
}
function au(e) {
	return e instanceof Element || e instanceof SVGElement;
}
function ou(e) {
	return e.pointerType === "touch";
}
function su(e) {
	return e.matches(":focus-visible");
}
function cu(e) {
	return e !== null;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/animations-complete.js
var lu = class {
	#e;
	#t = null;
	#n = null;
	#r = 0;
	constructor(e) {
		this.#e = e, jl(() => this.#i());
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
		this.#e.afterTick ? Pl(t) : t();
	}
}, uu = class {
	#e;
	#t;
	#n;
	#r = /* @__PURE__ */ F(!1);
	#i = /* @__PURE__ */ F(void 0);
	#a = !1;
	#o = null;
	constructor(e) {
		this.#e = e, I(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new lu({
			ref: this.#e.ref,
			afterTick: this.#e.open
		}), jl(() => this.#s()), bl(() => this.#e.open.current, (e) => {
			if (!this.#a) {
				this.#a = !0;
				return;
			}
			if (this.#s(), !e && this.#e.shouldSkipExitAnimation?.()) {
				I(this.#r, !1), I(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			if (e && I(this.#r, !0), I(this.#i, e ? "starting" : "ending", !0), e && (this.#o = window.requestAnimationFrame(() => {
				this.#o = null, this.#e.open.current && I(this.#i, void 0);
			})), !this.#t) {
				e || I(this.#r, !1), I(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			this.#n.run(() => {
				e === this.#e.open.current && (this.#e.open.current || I(this.#r, !1), I(this.#i, void 0), this.#e.onComplete?.());
			});
		});
	}
	get shouldRender() {
		return z(this.#r);
	}
	get transitionStatus() {
		return z(this.#i);
	}
	#s() {
		this.#o !== null && (window.cancelAnimationFrame(this.#o), this.#o = null);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/noop.js
function du() {}
//#endregion
//#region node_modules/bits-ui/dist/internal/create-id.js
function fu(e, t) {
	return t === void 0 ? `bits-${e}` : `bits-${e}-${t}`;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal-consumer.svelte
function pu(e, t) {
	var n = U();
	sa(M(n), () => t.children, (e) => {
		var n = U();
		G(M(n), () => t.children ?? h), W(e, n);
	}), W(e, n);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/bits-config.js
var mu = new gl("BitsConfig");
function hu() {
	let e = new gu(null, {});
	return mu.getOr(e).opts;
}
var gu = class {
	opts;
	constructor(e, t) {
		let n = _u(e, t);
		this.opts = {
			defaultPortalTo: n((e) => e.defaultPortalTo),
			defaultLocale: n((e) => e.defaultLocale)
		};
	}
};
function _u(e, t) {
	return (n) => Z(() => {
		let r = n(t)?.current;
		if (r !== void 0) return r;
		if (e !== null) return n(e.opts)?.current;
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/prop-resolvers.js
function vu(e, t) {
	return (n) => {
		let r = hu();
		return Z(() => {
			let i = n();
			if (i !== void 0) return i;
			let a = e(r).current;
			return a === void 0 ? t : a;
		});
	};
}
var yu = vu((e) => e.defaultPortalTo, "body");
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal.svelte
function bu(e, t) {
	E(t, !0);
	let n = yu(() => t.to), r = Ge(), i = /* @__PURE__ */ P(a);
	function a() {
		if (!eu || t.disabled) return null;
		let e = null;
		return e = typeof n.current == "string" ? document.querySelector(n.current) : n.current, e;
	}
	let o;
	function s() {
		o &&= (ra(o), null);
	}
	bl([() => z(i), () => t.disabled], ([e, n]) => {
		if (!e || n) {
			s();
			return;
		}
		return o = $i(pu, {
			target: e,
			props: { children: t.children },
			context: r
		}), () => {
			s();
		};
	});
	var c = U(), l = M(c), u = (e) => {
		var n = U();
		G(M(n), () => t.children ?? h), W(e, n);
	};
	aa(l, (e) => {
		t.disabled && e(u);
	}), W(e, c), D();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/events.js
var xu = class {
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
		return V(e, this.eventName, (e) => {
			t(e);
		}, n);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/debounce.js
function Su(e, t = 500) {
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
function Cu(e, t) {
	return e === t || e.contains(t);
}
function wu(e) {
	return e?.ownerDocument ?? document;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/dom.js
function Tu(e, t) {
	let { clientX: n, clientY: r } = e, i = t.getBoundingClientRect();
	return n < i.left || n > i.right || r < i.top || r > i.bottom;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/focus.js
function Eu(e) {
	let t = [], n = Wl(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
//#endregion
//#region node_modules/tabbable/dist/index.esm.js
var Du = [
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
], Ou = /* @__PURE__ */ Du.join(","), ku = typeof Element > "u", Au = ku ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ju = !ku && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, Mu = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : Mu(e.parentNode));
}, Nu = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, Pu = function(e, t, n) {
	if (Mu(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(Ou));
	return t && Au.call(e, Ou) && r.unshift(e), r = r.filter(n), r;
}, Fu = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!Mu(a, !1)) if (a.tagName === "SLOT") {
			var o = a.assignedElements(), s = Fu(o.length ? o : a.children, !0, n);
			n.flatten ? r.push.apply(r, s) : r.push({
				scopeParent: a,
				candidates: s
			});
		} else {
			Au.call(a, Ou) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
			var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !Mu(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
			if (c && l) {
				var u = Fu(c === !0 ? a.children : c.children, !0, n);
				n.flatten ? r.push.apply(r, u) : r.push({
					scopeParent: a,
					candidates: u
				});
			} else i.unshift.apply(i, a.children);
		}
	}
	return r;
}, Iu = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, Lu = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Nu(e)) && !Iu(e) ? 0 : e.tabIndex;
}, Ru = function(e, t) {
	var n = Lu(e);
	return n < 0 && t && !Iu(e) ? 0 : n;
}, zu = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, Bu = function(e) {
	return e.tagName === "INPUT";
}, Vu = function(e) {
	return Bu(e) && e.type === "hidden";
}, Hu = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, Uu = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, Wu = function(e) {
	if (!e.name) return !0;
	var t = e.form || ju(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = Uu(r, e.form);
	return !i || i === e;
}, Gu = function(e) {
	return Bu(e) && e.type === "radio";
}, Ku = function(e) {
	return Gu(e) && !Wu(e);
}, qu = function(e) {
	var t = e && ju(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = ju(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, Ju = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, Yu = function(e, t) {
	var n = t.displayCheck, r = t.getShadowRoot;
	if (n === "full-native" && "checkVisibility" in e) return !e.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	if (getComputedStyle(e).visibility === "hidden") return !0;
	var i = Au.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (Au.call(i, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var a = e; e;) {
				var o = e.parentElement, s = ju(e);
				if (o && !o.shadowRoot && r(o) === !0) return Ju(e);
				e = e.assignedSlot ? e.assignedSlot : !o && s !== e.ownerDocument ? s.host : o;
			}
			e = a;
		}
		if (qu(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return Ju(e);
	return !1;
}, Xu = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return Au.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, Zu = function(e, t) {
	return !(t.disabled || Vu(t) || Yu(t, e) || Hu(t) || Xu(t));
}, Qu = function(e, t) {
	return !(Ku(t) || Lu(t) < 0 || !Zu(e, t));
}, $u = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, ed = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = Ru(a, i), s = i ? ed(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(zu).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, td = function(e, t) {
	return t ||= {}, ed(t.getShadowRoot ? Fu([e], t.includeContainer, {
		filter: Qu.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: $u
	}) : Pu(e, t.includeContainer, Qu.bind(null, t)));
}, nd = function(e, t) {
	return t ||= {}, t.getShadowRoot ? Fu([e], t.includeContainer, {
		filter: Zu.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : Pu(e, t.includeContainer, Zu.bind(null, t));
}, rd = /* @__PURE__ */ Du.concat("iframe:not([inert]):not([inert] *)").join(","), id = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return Au.call(e, rd) === !1 ? !1 : Zu(t, e);
}, ad = "data-context-menu-trigger", od = "data-context-menu-content";
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/use-dismissable-layer.svelte.js
new gl("Menu.Root"), new gl("Menu.Root | Menu.Sub"), new gl("Menu.Content"), new gl("Menu.Group | Menu.RadioGroup"), new gl("Menu.RadioGroup"), new gl("Menu.CheckboxGroup"), new xu("bitsmenuopen", {
	bubbles: !1,
	cancelable: !0
}), $l({
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
var sd = class e {
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
	#s = du;
	constructor(e) {
		this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#o = e.onFocusOutside, Sr(() => {
			this.#a = wu(this.opts.ref.current);
		});
		let t = du, n = () => {
			this.#g(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), t();
		};
		bl([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!(!this.opts.enabled.current || !this.opts.ref.current)) return Nl(1, () => {
				this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), t(), t = this.#l());
			}), n;
		}), jl(() => {
			this.#g.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), t();
		});
	}
	#c = (e) => {
		e.defaultPrevented || this.opts.ref.current && Pl(() => {
			!this.opts.ref.current || this.#h(e.target) || e.target && !this.#i && this.#o.current?.(e);
		});
	};
	#l() {
		return il(V(this.#a, "pointerdown", il(this.#f, this.#m), { capture: !0 }), V(this.#a, "pointerdown", il(this.#p, this.#d)), V(this.#a, "focusin", this.#c));
	}
	#u = (e) => {
		let t = e;
		t.defaultPrevented && (t = dd(e)), this.#e.current(e);
	};
	#d = Su((e) => {
		if (!this.opts.ref.current) {
			this.#s();
			return;
		}
		let t = this.opts.isValidEvent.current(e, this.opts.ref.current) || ud(e, this.opts.ref.current);
		if (!this.#r || this.#_() || !t) {
			this.#s();
			return;
		}
		let n = e;
		if (n.defaultPrevented && (n = dd(n)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
			this.#s();
			return;
		}
		e.pointerType === "touch" ? (this.#s(), this.#s = V(this.#a, "click", this.#u, { once: !0 })) : this.#e.current(n);
	}, 10);
	#f = (e) => {
		this.#n[e.type] = !0;
	};
	#p = (e) => {
		this.#n[e.type] = !1;
	};
	#m = () => {
		this.opts.ref.current && (this.#r = ld(this.opts.ref.current));
	};
	#h = (e) => this.opts.ref.current ? Cu(this.opts.ref.current, e) : !1;
	#g = Su(() => {
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
function cd(e = [...globalThis.bitsDismissableLayers]) {
	return e.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
}
function ld(e) {
	let t = [...globalThis.bitsDismissableLayers], n = cd(t);
	if (n) return n[0].opts.ref.current === e;
	let [r] = t[0];
	return r.opts.ref.current === e;
}
function ud(e, t) {
	let n = e.target;
	if (!au(n)) return !1;
	let r = !!n.closest(`[${ad}]`), i = !!t.closest(`[${od}]`);
	return "button" in e && e.button > 0 && !r ? !1 : "button" in e && e.button === 0 && r && i ? !0 : r && i ? !1 : wu(n).documentElement.contains(n) && !Cu(t, n) && Tu(e, t);
}
function dd(e) {
	let t = e.currentTarget, n = e.target, r;
	r = e instanceof PointerEvent ? new PointerEvent(e.type, e) : new PointerEvent("pointerdown", e);
	let i = !1;
	return new Proxy(r, { get: (r, a) => a === "currentTarget" ? t : a === "target" ? n : a === "preventDefault" ? () => {
		i = !0, typeof r.preventDefault == "function" && r.preventDefault();
	} : a === "defaultPrevented" ? i : a in r ? r[a] : e[a] });
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/dismissible-layer.svelte
function fd(e, t) {
	E(t, !0);
	let n = q(t, "interactOutsideBehavior", 3, "close"), r = q(t, "onInteractOutside", 3, du), i = q(t, "onFocusOutside", 3, du), a = q(t, "isValidEvent", 3, () => !1), o = sd.create({
		id: Z(() => t.id),
		interactOutsideBehavior: Z(() => n()),
		onInteractOutside: Z(() => r()),
		enabled: Z(() => t.enabled),
		onFocusOutside: Z(() => i()),
		isValidEvent: Z(() => a()),
		ref: t.ref
	});
	var s = U();
	G(M(s), () => t.children ?? h, () => ({ props: o.props })), W(e, s), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/use-escape-layer.svelte.js
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var pd = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	constructor(e) {
		this.opts = e, this.domContext = new ql(this.opts.ref);
		let t = du;
		bl(() => e.enabled.current, (n) => (n && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), t = this.#e()), () => {
			t(), globalThis.bitsEscapeLayers.delete(this);
		}));
	}
	#e = () => V(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
	#t = (e) => {
		if (e.key !== "Escape" || !md(this)) return;
		let t = new KeyboardEvent(e.type, e);
		e.preventDefault();
		let n = this.opts.escapeKeydownBehavior.current;
		n !== "close" && n !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(t);
	};
};
function md(e) {
	let t = [...globalThis.bitsEscapeLayers], n = t.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
	if (n) return n[0] === e;
	let [r] = t[0];
	return r === e;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/escape-layer.svelte
function hd(e, t) {
	E(t, !0);
	let n = q(t, "escapeKeydownBehavior", 3, "close"), r = q(t, "onEscapeKeydown", 3, du);
	pd.create({
		escapeKeydownBehavior: Z(() => n()),
		onEscapeKeydown: Z(() => r()),
		enabled: Z(() => t.enabled),
		ref: t.ref
	});
	var i = U();
	G(M(i), () => t.children ?? h), W(e, i), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope-manager.js
var gd = class e {
	static instance;
	#e = Ac([]);
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
}, _d = class e {
	#e = !1;
	#t = null;
	#n = gd.getInstance();
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
		this.#r.push(V(t, "focusin", (t) => {
			if (this.#e || !this.#n.isActiveScope(this)) return;
			let n = t.target;
			if (n) if (e.contains(n)) this.#n.setFocusMemory(this, n);
			else {
				let n = this.#n.getFocusMemory(this);
				if (n && e.contains(n) && id(n)) t.preventDefault(), n.focus();
				else {
					let t = this.#u(), n = this.#d()[0];
					(t || n || e).focus();
				}
			}
		}, { capture: !0 }), V(e, "keydown", (e) => {
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
		return this.#t ? td(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	#u() {
		return this.#l()[0] || null;
	}
	#d() {
		return this.#t ? nd(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	static use(t) {
		let n = null;
		return bl([() => t.ref.current, () => t.enabled.current], ([r, i]) => {
			r && i ? (n ||= new e(t), n.mount(r)) : n &&= (n.unmount(), null);
		}), jl(() => {
			n?.unmount();
		}), { get props() {
			return { tabindex: -1 };
		} };
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope.svelte
function vd(e, t) {
	E(t, !0);
	let n = q(t, "enabled", 3, !1), r = q(t, "trapFocus", 3, !1), i = q(t, "loop", 3, !1), a = q(t, "onCloseAutoFocus", 3, du), o = q(t, "onOpenAutoFocus", 3, du), s = _d.use({
		enabled: Z(() => n()),
		trap: Z(() => r()),
		loop: i(),
		onCloseAutoFocus: Z(() => a()),
		onOpenAutoFocus: Z(() => o()),
		ref: t.ref
	});
	var c = U();
	G(M(c), () => t.focusScope ?? h, () => ({ props: s.props })), W(e, c), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/use-text-selection-layer.svelte.js
var yd = () => {};
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var bd = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	#e = du;
	#t = !1;
	#n = yd;
	#r = yd;
	constructor(e) {
		this.opts = e, this.domContext = new ql(e.ref);
		let t = du;
		bl(() => [
			this.opts.enabled.current,
			this.opts.onPointerDown.current,
			this.opts.onPointerUp.current
		], ([e, n, r]) => (this.#t = e, this.#n = n, this.#r = r, e && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), t(), t = this.#i()), () => {
			this.#t = !1, t(), this.#s(), globalThis.bitsTextSelectionLayers.delete(this);
		}));
	}
	#i() {
		return il(V(this.domContext.getDocument(), "pointerdown", this.#o), V(this.domContext.getDocument(), "pointerup", jc(this.#s, this.#a)));
	}
	#a = (e) => {
		this.#r(e);
	};
	#o = (e) => {
		let t = this.opts.ref.current, n = e.target;
		!ru(t) || !ru(n) || !this.#t || !wd(this) || !Ul(t, n) || (this.#n(e), !e.defaultPrevented && (this.#e = Sd(t, this.domContext.getDocument().body)));
	};
	#s = () => {
		this.#e(), this.#e = du;
	};
}, xd = (e) => e.style.userSelect || e.style.webkitUserSelect;
function Sd(e, t) {
	let n = xd(t), r = xd(e);
	return Cd(t, "none"), Cd(e, "text"), () => {
		Cd(t, n), Cd(e, r);
	};
}
function Cd(e, t) {
	e.style.userSelect = t, e.style.webkitUserSelect = t;
}
function wd(e) {
	let t = [...globalThis.bitsTextSelectionLayers];
	if (!t.length) return !1;
	let n = t.at(-1);
	return n ? n[0] === e : !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/text-selection-layer.svelte
function Td(e, t) {
	E(t, !0);
	let n = q(t, "preventOverflowTextSelection", 3, !0), r = q(t, "onPointerDown", 3, du), i = q(t, "onPointerUp", 3, du);
	bd.create({
		id: Z(() => t.id),
		onPointerDown: Z(() => r()),
		onPointerUp: Z(() => i()),
		enabled: Z(() => t.enabled && n()),
		ref: t.ref
	});
	var a = U();
	G(M(a), () => t.children ?? h), W(e, a), D();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/use-id.js
globalThis.bitsIdCounter ??= { current: 0 };
function Ed(e = "bits") {
	return globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/shared-state.svelte.js
var Dd = class {
	#e;
	#t = 0;
	#n = /* @__PURE__ */ F();
	#r;
	constructor(e) {
		this.#e = e;
	}
	#i() {
		--this.#t, this.#r && this.#t <= 0 && (this.#r(), I(this.#n, void 0), this.#r = void 0);
	}
	get(...e) {
		return this.#t += 1, z(this.#n) === void 0 && (this.#r = Tr(() => {
			I(this.#n, this.#e(...e), !0);
		})), Sr(() => () => {
			this.#i();
		}), z(this.#n);
	}
}, Od = new ml(), kd = /* @__PURE__ */ F(null), Ad = null, jd = null, Md = !1, Nd = Z(() => {
	for (let e of Od.values()) if (e) return !0;
	return !1;
}), Pd = null, Fd = new Dd(() => {
	function e() {
		document.body.setAttribute("style", z(kd) ?? ""), document.body.style.removeProperty("--scrollbar-width"), tu && Ad?.(), I(kd, null);
	}
	function t() {
		jd !== null && (window.clearTimeout(jd), jd = null);
	}
	function n(e, n) {
		t(), Md = !0, Pd = Date.now();
		let r = Pd, i = () => {
			jd = null, Pd === r && (Ld(Od) ? Md = !1 : (Md = !1, n()));
		}, a = e === null ? 24 : e;
		jd = window.setTimeout(i, a);
	}
	function r() {
		z(kd) === null && Od.size === 0 && !Md && I(kd, document.body.getAttribute("style"), !0);
	}
	return bl(() => Nd.current, () => {
		if (!Nd.current) return;
		r(), Md = !1;
		let e = getComputedStyle(document.documentElement), t = getComputedStyle(document.body), n = e.scrollbarGutter?.includes("stable") || t.scrollbarGutter?.includes("stable"), i = window.innerWidth - document.documentElement.clientWidth, a = {
			padding: Number.parseInt(t.paddingRight ?? "0", 10) + i,
			margin: Number.parseInt(t.marginRight ?? "0", 10)
		};
		i > 0 && !n && (document.body.style.paddingRight = `${a.padding}px`, document.body.style.marginRight = `${a.margin}px`, document.body.style.setProperty("--scrollbar-width", `${i}px`)), document.body.style.overflow = "hidden", tu && (Ad = V(document, "touchmove", (e) => {
			e.target === document.documentElement && (e.touches.length > 1 || e.preventDefault());
		}, { passive: !1 })), Pl(() => {
			document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
		});
	}), jl(() => () => {
		Ad?.();
	}), {
		get lockMap() {
			return Od;
		},
		resetBodyStyle: e,
		scheduleCleanupIfNoNewLocks: n,
		cancelPendingCleanup: t,
		ensureInitialStyleCaptured: r
	};
}), Id = class {
	#e = Ed();
	#t;
	#n = () => null;
	#r;
	locked;
	constructor(e, t = () => null) {
		this.#t = e, this.#n = t, this.#r = Fd.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = Z(() => this.#r.lockMap.get(this.#e) ?? !1, (e) => this.#r.lockMap.set(this.#e, e)), jl(() => {
			if (this.#r.lockMap.delete(this.#e), Ld(this.#r.lockMap)) return;
			let e = this.#n();
			this.#r.scheduleCleanupIfNoNewLocks(e, () => {
				this.#r.resetBodyStyle();
			});
		}));
	}
};
function Ld(e) {
	for (let [t, n] of e) if (n) return !0;
	return !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/scroll-lock/scroll-lock.svelte
function Rd(e, t) {
	E(t, !0);
	let n = q(t, "preventScroll", 3, !0), r = q(t, "restoreScrollDelay", 3, null);
	n() && new Id(n(), () => r()), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/avatar.svelte.js
var zd = $l({
	component: "avatar",
	parts: [
		"root",
		"image",
		"fallback"
	]
}), Bd = new gl("Avatar.Root"), Vd = class e {
	static create(t) {
		return Bd.set(new e(t));
	}
	opts;
	domContext;
	attachment;
	constructor(e) {
		this.opts = e, this.domContext = new ql(this.opts.ref), this.loadImage = this.loadImage.bind(this), this.attachment = Jl(this.opts.ref);
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
	#e = /* @__PURE__ */ P(() => ({
		id: this.opts.id.current,
		[zd.root]: "",
		"data-status": this.opts.loadingStatus.current,
		...this.attachment
	}));
	get props() {
		return z(this.#e);
	}
	set props(e) {
		I(this.#e, e);
	}
}, Hd = class e {
	static create(t) {
		return new e(t, Bd.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Jl(this.opts.ref), bl.pre([() => this.opts.src.current, () => this.opts.crossOrigin.current], ([e, t]) => {
			if (!e) {
				this.root.opts.loadingStatus.current = "error";
				return;
			}
			this.root.loadImage(e, t, this.opts.referrerPolicy.current);
		});
	}
	#e = /* @__PURE__ */ P(() => ({
		id: this.opts.id.current,
		style: { display: this.root.opts.loadingStatus.current === "loaded" ? "block" : "none" },
		"data-status": this.root.opts.loadingStatus.current,
		[zd.image]: "",
		src: this.opts.src.current,
		crossorigin: this.opts.crossOrigin.current,
		referrerpolicy: this.opts.referrerPolicy.current,
		...this.attachment
	}));
	get props() {
		return z(this.#e);
	}
	set props(e) {
		I(this.#e, e);
	}
}, Ud = class e {
	static create(t) {
		return new e(t, Bd.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Jl(this.opts.ref);
	}
	#e = /* @__PURE__ */ P(() => this.root.opts.loadingStatus.current === "loaded" ? { display: "none" } : void 0);
	get style() {
		return z(this.#e);
	}
	set style(e) {
		I(this.#e, e);
	}
	#t = /* @__PURE__ */ P(() => ({
		style: this.style,
		"data-status": this.root.opts.loadingStatus.current,
		[zd.fallback]: "",
		...this.attachment
	}));
	get props() {
		return z(this.#t);
	}
	set props(e) {
		I(this.#t, e);
	}
}, Wd = /* @__PURE__ */ H("<div><!></div>");
function Gd(e, t) {
	let n = Xi();
	E(t, !0);
	let r = q(t, "delayMs", 3, 0), i = q(t, "loadingStatus", 15, "loading"), a = q(t, "id", 19, () => fu(n)), o = q(t, "ref", 15, null), s = /* @__PURE__ */ K(t, [
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
	]), c = Vd.create({
		delayMs: Z(() => r()),
		loadingStatus: Z(() => i(), (e) => {
			i() !== e && (i(e), t.onLoadingStatusChange?.(e));
		}),
		id: Z(() => a()),
		ref: Z(() => o(), (e) => o(e))
	}), l = /* @__PURE__ */ P(() => dl(s, c.props));
	var u = U(), d = M(u), f = (e) => {
		var n = U();
		G(M(n), () => t.child, () => ({ props: z(l) })), W(e, n);
	}, p = (e) => {
		var n = Wd();
		ro(n, () => ({ ...z(l) })), G(j(n), () => t.children ?? h), A(n), W(e, n);
	};
	aa(d, (e) => {
		t.child ? e(f) : e(p, -1);
	}), W(e, u), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/components/avatar-image.svelte
var Kd = /* @__PURE__ */ H("<img/>");
function qd(e, t) {
	let n = Xi();
	E(t, !0);
	let r = q(t, "id", 19, () => fu(n)), i = q(t, "ref", 15, null), a = q(t, "crossorigin", 3, void 0), o = q(t, "referrerpolicy", 3, void 0), s = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"src",
		"child",
		"id",
		"ref",
		"crossorigin",
		"referrerpolicy"
	]), c = Hd.create({
		src: Z(() => t.src),
		id: Z(() => r()),
		ref: Z(() => i(), (e) => i(e)),
		crossOrigin: Z(() => a()),
		referrerPolicy: Z(() => o())
	}), l = /* @__PURE__ */ P(() => dl(s, c.props));
	var u = U(), d = M(u), f = (e) => {
		var n = U();
		G(M(n), () => t.child, () => ({ props: z(l) })), W(e, n);
	}, p = (e) => {
		var n = Kd();
		ro(n, () => ({
			...z(l),
			src: t.src
		})), Ii(n), W(e, n);
	};
	aa(d, (e) => {
		t.child ? e(f) : e(p, -1);
	}), W(e, u), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/components/avatar-fallback.svelte
var Jd = /* @__PURE__ */ H("<span><!></span>");
function Yd(e, t) {
	let n = Xi();
	E(t, !0);
	let r = q(t, "id", 19, () => fu(n)), i = q(t, "ref", 15, null), a = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref"
	]), o = Ud.create({
		id: Z(() => r()),
		ref: Z(() => i(), (e) => i(e))
	}), s = /* @__PURE__ */ P(() => dl(a, o.props));
	var c = U(), l = M(c), u = (e) => {
		var n = U();
		G(M(n), () => t.child, () => ({ props: z(s) })), W(e, n);
	}, d = (e) => {
		var n = Jd();
		ro(n, () => ({ ...z(s) })), G(j(n), () => t.children ?? h), A(n), W(e, n);
	};
	aa(l, (e) => {
		t.child ? e(u) : e(d, -1);
	}), W(e, c), D();
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Xd = [
	"top",
	"right",
	"bottom",
	"left"
], Zd = Math.min, Qd = Math.max, $d = Math.round, ef = Math.floor, tf = (e) => ({
	x: e,
	y: e
}), nf = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function rf(e, t, n) {
	return Qd(e, Zd(t, n));
}
function af(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function of(e) {
	return e.split("-")[0];
}
function sf(e) {
	return e.split("-")[1];
}
function cf(e) {
	return e === "x" ? "y" : "x";
}
function lf(e) {
	return e === "y" ? "height" : "width";
}
function uf(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function df(e) {
	return cf(uf(e));
}
function ff(e, t, n) {
	n === void 0 && (n = !1);
	let r = sf(e), i = df(e), a = lf(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = xf(o)), [o, xf(o)];
}
function pf(e) {
	let t = xf(e);
	return [
		mf(e),
		t,
		mf(t)
	];
}
function mf(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var hf = ["left", "right"], gf = ["right", "left"], _f = ["top", "bottom"], vf = ["bottom", "top"];
function yf(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? gf : hf : t ? hf : gf;
		case "left":
		case "right": return t ? _f : vf;
		default: return [];
	}
}
function bf(e, t, n, r) {
	let i = sf(e), a = yf(of(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(mf)))), a;
}
function xf(e) {
	let t = of(e);
	return nf[t] + e.slice(t.length);
}
function Sf(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function Cf(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Sf(e);
}
function wf(e) {
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
function Tf(e, t, n) {
	let { reference: r, floating: i } = e, a = uf(t), o = df(t), s = lf(o), c = of(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	switch (sf(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function Ef(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = af(t, e), p = Cf(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = wf(await i.getClippingRect({
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
	}, y = wf(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Df = 50, Of = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Ef
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Tf(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < Df && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Tf(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, kf = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = af(e, t) || {};
		if (l == null) return {};
		let d = Cf(u), f = {
			x: n,
			y: r
		}, p = df(i), m = lf(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), ee = S ? S[y] : 0;
		(!ee || !await (o.isElement == null ? void 0 : o.isElement(S))) && (ee = s.floating[y] || a.floating[m]);
		let C = b / 2 - x / 2, w = ee / 2 - h[m] / 2 - 1, te = Zd(d[_], w), ne = Zd(d[v], w), re = te, ie = ee - h[m] - ne, ae = ee / 2 - h[m] / 2 + C, oe = rf(re, ae, ie), se = !c.arrow && sf(i) != null && ae !== oe && a.reference[m] / 2 - (ae < re ? te : ne) - h[m] / 2 < 0, ce = se ? ae < re ? ae - re : ae - ie : 0;
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
}), Af = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = af(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = of(r), _ = uf(o), v = of(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [xf(o)] : pf(o)), x = p !== "none";
			!d && x && b.push(...bf(o, m, p, y));
			let S = [o, ...b], ee = await s.detectOverflow(t, h), C = [], w = i.flip?.overflows || [];
			if (l && C.push(ee[g]), u) {
				let e = ff(r, a, y);
				C.push(ee[e[0]], ee[e[1]]);
			}
			if (w = [...w, {
				placement: r,
				overflows: C
			}], !C.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== uf(t)) || w.every((e) => uf(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: w
					},
					reset: { placement: t }
				};
				let n = w.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = w.filter((e) => {
							if (x) {
								let t = uf(e.placement);
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
function jf(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Mf(e) {
	return Xd.some((t) => e[t] >= 0);
}
var Nf = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = af(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = jf(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Mf(e)
					} };
				}
				case "escaped": {
					let e = jf(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Mf(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Pf = /* @__PURE__ */ new Set(["left", "top"]);
async function Ff(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = of(n), s = sf(n), c = uf(n) === "y", l = Pf.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = af(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var If = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Ff(t, e);
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
}, Lf = function(e) {
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
			} }, ...l } = af(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = uf(of(i)), p = cf(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = rf(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = rf(n, h, r);
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
}, Rf = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = af(e, t), u = {
				x: n,
				y: r
			}, d = uf(i), f = cf(d), p = u[f], m = u[d], h = af(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = Pf.has(of(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, zf = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = af(e, t), u = await o.detectOverflow(t, l), d = of(i), f = sf(i), p = uf(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = Zd(h - u[g], v), x = Zd(m - u[_], y), S = !t.middlewareData.shift, ee = b, C = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (C = y), (r = t.middlewareData.shift) != null && r.enabled.y && (ee = v), S && !f) {
				let e = Qd(u.left, 0), t = Qd(u.right, 0), n = Qd(u.top, 0), r = Qd(u.bottom, 0);
				p ? C = m - 2 * (e !== 0 || t !== 0 ? e + t : Qd(u.left, u.right)) : ee = h - 2 * (n !== 0 || r !== 0 ? n + r : Qd(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: C,
				availableHeight: ee
			});
			let w = await o.getDimensions(s.floating);
			return m !== w.width || h !== w.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Bf() {
	return typeof window < "u";
}
function Vf(e) {
	return Wf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Hf(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Uf(e) {
	return ((Wf(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Wf(e) {
	return Bf() ? e instanceof Node || e instanceof Hf(e).Node : !1;
}
function Gf(e) {
	return Bf() ? e instanceof Element || e instanceof Hf(e).Element : !1;
}
function Kf(e) {
	return Bf() ? e instanceof HTMLElement || e instanceof Hf(e).HTMLElement : !1;
}
function qf(e) {
	return !Bf() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Hf(e).ShadowRoot;
}
function Jf(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = ap(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Yf(e) {
	return /^(table|td|th)$/.test(Vf(e));
}
function Xf(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Zf = /transform|translate|scale|rotate|perspective|filter/, Qf = /paint|layout|strict|content/, $f = (e) => !!e && e !== "none", ep;
function tp(e) {
	let t = Gf(e) ? ap(e) : e;
	return $f(t.transform) || $f(t.translate) || $f(t.scale) || $f(t.rotate) || $f(t.perspective) || !rp() && ($f(t.backdropFilter) || $f(t.filter)) || Zf.test(t.willChange || "") || Qf.test(t.contain || "");
}
function np(e) {
	let t = sp(e);
	for (; Kf(t) && !ip(t);) {
		if (tp(t)) return t;
		if (Xf(t)) return null;
		t = sp(t);
	}
	return null;
}
function rp() {
	return ep ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), ep;
}
function ip(e) {
	return /^(html|body|#document)$/.test(Vf(e));
}
function ap(e) {
	return Hf(e).getComputedStyle(e);
}
function op(e) {
	return Gf(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function sp(e) {
	if (Vf(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || qf(e) && e.host || Uf(e);
	return qf(t) ? t.host : t;
}
function cp(e) {
	let t = sp(e);
	return ip(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Kf(t) && Jf(t) ? t : cp(t);
}
function lp(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = cp(e), i = r === e.ownerDocument?.body, a = Hf(r);
	if (i) {
		let e = up(a);
		return t.concat(a, a.visualViewport || [], Jf(r) ? r : [], e && n ? lp(e) : []);
	} else return t.concat(r, lp(r, [], n));
}
function up(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function dp(e) {
	let t = ap(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Kf(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = $d(n) !== a || $d(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function fp(e) {
	return Gf(e) ? e : e.contextElement;
}
function pp(e) {
	let t = fp(e);
	if (!Kf(t)) return tf(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = dp(t), o = (a ? $d(n.width) : n.width) / r, s = (a ? $d(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var mp = /* @__PURE__ */ tf(0);
function hp(e) {
	let t = Hf(e);
	return !rp() || !t.visualViewport ? mp : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function gp(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Hf(e) ? !1 : t;
}
function _p(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = fp(e), o = tf(1);
	t && (r ? Gf(r) && (o = pp(r)) : o = pp(e));
	let s = gp(a, n, r) ? hp(a) : tf(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Hf(a), t = r && Gf(r) ? Hf(r) : r, n = e, i = up(n);
		for (; i && r && t !== n;) {
			let e = pp(i), t = i.getBoundingClientRect(), r = ap(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Hf(i), i = up(n);
		}
	}
	return wf({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function vp(e, t) {
	let n = op(e).scrollLeft;
	return t ? t.left + n : _p(Uf(e)).left + n;
}
function yp(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - vp(e, n),
		y: n.top + t.scrollTop
	};
}
function bp(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Uf(r), s = t ? Xf(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = tf(1), u = tf(0), d = Kf(r);
	if ((d || !d && !a) && ((Vf(r) !== "body" || Jf(o)) && (c = op(r)), d)) {
		let e = _p(r);
		l = pp(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? yp(o, c) : tf(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function xp(e) {
	return Array.from(e.getClientRects());
}
function Sp(e) {
	let t = Uf(e), n = op(e), r = e.ownerDocument.body, i = Qd(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Qd(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + vp(e), s = -n.scrollTop;
	return ap(r).direction === "rtl" && (o += Qd(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var Cp = 25;
function wp(e, t) {
	let n = Hf(e), r = Uf(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = rp();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = vp(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= Cp && (a -= o);
	} else l <= Cp && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function Tp(e, t) {
	let n = _p(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Kf(e) ? pp(e) : tf(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Ep(e, t, n) {
	let r;
	if (t === "viewport") r = wp(e, n);
	else if (t === "document") r = Sp(Uf(e));
	else if (Gf(t)) r = Tp(t, n);
	else {
		let n = hp(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return wf(r);
}
function Dp(e, t) {
	let n = sp(e);
	return n === t || !Gf(n) || ip(n) ? !1 : ap(n).position === "fixed" || Dp(n, t);
}
function Op(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = lp(e, [], !1).filter((e) => Gf(e) && Vf(e) !== "body"), i = null, a = ap(e).position === "fixed", o = a ? sp(e) : e;
	for (; Gf(o) && !ip(o);) {
		let t = ap(o), n = tp(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || Jf(o) && !n && Dp(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = sp(o);
	}
	return t.set(e, r), r;
}
function kp(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Xf(t) ? [] : Op(t, this._c) : [].concat(n), r], o = Ep(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Ep(t, a[e], i);
		s = Qd(n.top, s), c = Zd(n.right, c), l = Zd(n.bottom, l), u = Qd(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Ap(e) {
	let { width: t, height: n } = dp(e);
	return {
		width: t,
		height: n
	};
}
function jp(e, t, n) {
	let r = Kf(t), i = Uf(t), a = n === "fixed", o = _p(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = tf(0);
	function l() {
		c.x = vp(i);
	}
	if (r || !r && !a) if ((Vf(t) !== "body" || Jf(i)) && (s = op(t)), r) {
		let e = _p(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? yp(i, s) : tf(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Mp(e) {
	return ap(e).position === "static";
}
function Np(e, t) {
	if (!Kf(e) || ap(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Uf(e) === n && (n = n.ownerDocument.body), n;
}
function Pp(e, t) {
	let n = Hf(e);
	if (Xf(e)) return n;
	if (!Kf(e)) {
		let t = sp(e);
		for (; t && !ip(t);) {
			if (Gf(t) && !Mp(t)) return t;
			t = sp(t);
		}
		return n;
	}
	let r = Np(e, t);
	for (; r && Yf(r) && Mp(r);) r = Np(r, t);
	return r && ip(r) && Mp(r) && !tp(r) ? n : r || np(e) || n;
}
var Fp = async function(e) {
	let t = this.getOffsetParent || Pp, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: jp(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Ip(e) {
	return ap(e).direction === "rtl";
}
var Lp = {
	convertOffsetParentRelativeRectToViewportRelativeRect: bp,
	getDocumentElement: Uf,
	getClippingRect: kp,
	getOffsetParent: Pp,
	getElementRects: Fp,
	getClientRects: xp,
	getDimensions: Ap,
	getScale: pp,
	isElement: Gf,
	isRTL: Ip
};
function Rp(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function zp(e, t) {
	let n = null, r, i = Uf(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = ef(d), h = ef(i.clientWidth - (u + f)), g = ef(i.clientHeight - (d + p)), _ = ef(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Qd(0, Zd(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Rp(l, e.getBoundingClientRect()) && o(), y = !1;
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
function Bp(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = fp(e), u = i || a ? [...l ? lp(l) : [], ...t ? lp(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? zp(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? _p(e) : null;
	c && g();
	function g() {
		let t = _p(e);
		h && !Rp(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Vp = If, Hp = Lf, Up = Af, Wp = zf, Gp = Nf, Kp = kf, qp = Rf, Jp = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Lp,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Of(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region node_modules/bits-ui/dist/internal/floating-svelte/floating-utils.svelte.js
function Yp(e) {
	return typeof e == "function" ? e() : e;
}
function Xp(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zp(e, t) {
	let n = Xp(e);
	return Math.round(t * n) / n;
}
function Qp(e) {
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
function $p(e) {
	let t = e.whileElementsMounted, n = /* @__PURE__ */ P(() => Yp(e.open) ?? !0), r = /* @__PURE__ */ P(() => Yp(e.middleware)), i = /* @__PURE__ */ P(() => Yp(e.transform) ?? !0), a = /* @__PURE__ */ P(() => Yp(e.placement) ?? "bottom"), o = /* @__PURE__ */ P(() => Yp(e.strategy) ?? "absolute"), s = /* @__PURE__ */ P(() => Yp(e.sideOffset) ?? 0), c = /* @__PURE__ */ P(() => Yp(e.alignOffset) ?? 0), l = e.reference, u = /* @__PURE__ */ F(0), d = /* @__PURE__ */ F(0), f = Ac(null), p = /* @__PURE__ */ F(lt(z(o))), m = /* @__PURE__ */ F(lt(z(a))), h = /* @__PURE__ */ F(lt({})), g = /* @__PURE__ */ F(!1), _ = !1, v = 0, y = /* @__PURE__ */ P(() => {
		let e = f.current ? Zp(f.current, z(u)) : z(u), t = f.current ? Zp(f.current, z(d)) : z(d);
		return z(i) ? {
			position: z(p),
			left: "0",
			top: "0",
			transform: `translate(${e}px, ${t}px)`,
			...f.current && Xp(f.current) >= 1.5 && { willChange: "transform" }
		} : {
			position: z(p),
			left: `${e}px`,
			top: `${t}px`
		};
	}), b;
	function x() {
		if (l.current === null || f.current === null) return;
		let e = l.current, t = f.current, i = ++v;
		Jp(e, t, {
			middleware: z(r),
			placement: z(a),
			strategy: z(o)
		}).then((r) => {
			if (i === v && !(l.current !== e || f.current !== t)) {
				if (em(e)) {
					I(h, {
						...z(h),
						hide: {
							...z(h).hide,
							referenceHidden: !0
						}
					}, !0);
					return;
				}
				if (!z(n) && z(u) !== 0 && z(d) !== 0) {
					let e = Math.max(Math.abs(z(s)), Math.abs(z(c)), 15);
					if (r.x <= e && r.y <= e) return;
				}
				I(u, r.x, !0), I(d, r.y, !0), I(p, r.strategy, !0), I(m, r.placement, !0), I(h, r.middlewareData, !0), I(g, !0);
			}
		});
	}
	function S() {
		typeof b == "function" && (b(), b = void 0), v++;
	}
	function ee() {
		if (S(), t === void 0) {
			x();
			return;
		}
		z(n) && (l.current === null || f.current === null || (b = t(l.current, f.current, x)));
	}
	function C() {
		!z(n) && f.current === null && I(g, !1);
	}
	function w() {
		return [
			z(r),
			z(a),
			z(o),
			z(s),
			z(c),
			z(n)
		];
	}
	return Sr(() => {
		t === void 0 && z(n) && x();
	}), Sr(ee), Sr(() => {
		if (t !== void 0) {
			if (w(), !z(n)) {
				_ = !1;
				return;
			}
			if (!z(g)) {
				_ = !1;
				return;
			}
			if (!_) {
				_ = !0;
				return;
			}
			x();
		}
	}), Sr(C), Sr(() => S), {
		floating: f,
		reference: l,
		get strategy() {
			return z(p);
		},
		get placement() {
			return z(m);
		},
		get middlewareData() {
			return z(h);
		},
		get isPositioned() {
			return z(g);
		},
		get floatingStyles() {
			return z(y);
		},
		get update() {
			return x;
		}
	};
}
function em(e) {
	return e instanceof Element ? !e.isConnected || e instanceof HTMLElement && e.hidden ? !0 : e.getClientRects().length === 0 : !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/use-floating-layer.svelte.js
var tm = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, nm = new gl("Floating.Root"), rm = new gl("Floating.Content"), im = new gl("Floating.Root"), am = class e {
	static create(t = !1) {
		return t ? im.set(new e()) : nm.set(new e());
	}
	anchorNode = Ac(null);
	customAnchorNode = Ac(null);
	triggerNode = Ac(null);
	constructor() {
		Sr(() => {
			this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
		});
	}
}, om = class e {
	static create(t, n = !1) {
		return n ? rm.set(new e(t, im.get())) : rm.set(new e(t, nm.get()));
	}
	opts;
	root;
	contentRef = Ac(null);
	wrapperRef = Ac(null);
	arrowRef = Ac(null);
	contentAttachment = Jl(this.contentRef);
	wrapperAttachment = Jl(this.wrapperRef);
	arrowAttachment = Jl(this.arrowRef);
	arrowId = Ac(Ed());
	#e = /* @__PURE__ */ P(() => {
		if (typeof this.opts.style == "string") return rl(this.opts.style);
		if (!this.opts.style) return {};
	});
	#t = void 0;
	#n = new Tl(() => this.arrowRef.current ?? void 0);
	#r = /* @__PURE__ */ P(() => this.#n?.width ?? 0);
	#i = /* @__PURE__ */ P(() => this.#n?.height ?? 0);
	#a = /* @__PURE__ */ P(() => this.opts.side?.current + (this.opts.align.current === "center" ? "" : `-${this.opts.align.current}`));
	#o = /* @__PURE__ */ P(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
	#s = /* @__PURE__ */ P(() => z(this.#o).length > 0);
	get hasExplicitBoundaries() {
		return z(this.#s);
	}
	set hasExplicitBoundaries(e) {
		I(this.#s, e);
	}
	#c = /* @__PURE__ */ P(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: z(this.#o).filter(cu),
		altBoundary: this.hasExplicitBoundaries
	}));
	get detectOverflowOptions() {
		return z(this.#c);
	}
	set detectOverflowOptions(e) {
		I(this.#c, e);
	}
	#l = /* @__PURE__ */ F(void 0);
	#u = /* @__PURE__ */ F(void 0);
	#d = /* @__PURE__ */ F(void 0);
	#f = /* @__PURE__ */ F(void 0);
	#p = /* @__PURE__ */ P(() => [
		Vp({
			mainAxis: this.opts.sideOffset.current + z(this.#i),
			alignmentAxis: this.opts.alignOffset.current
		}),
		this.opts.avoidCollisions.current && Hp({
			mainAxis: !0,
			crossAxis: !1,
			limiter: this.opts.sticky.current === "partial" ? qp() : void 0,
			...this.detectOverflowOptions
		}),
		this.opts.avoidCollisions.current && Up({ ...this.detectOverflowOptions }),
		Wp({
			...this.detectOverflowOptions,
			apply: ({ rects: e, availableWidth: t, availableHeight: n }) => {
				let { width: r, height: i } = e.reference;
				I(this.#l, t, !0), I(this.#u, n, !0), I(this.#d, r, !0), I(this.#f, i, !0);
			}
		}),
		this.arrowRef.current && Kp({
			element: this.arrowRef.current,
			padding: this.opts.arrowPadding.current
		}),
		cm({
			arrowWidth: z(this.#r),
			arrowHeight: z(this.#i)
		}),
		this.opts.hideWhenDetached.current && Gp({
			strategy: "referenceHidden",
			...this.detectOverflowOptions
		})
	].filter(Boolean));
	get middleware() {
		return z(this.#p);
	}
	set middleware(e) {
		I(this.#p, e);
	}
	floating;
	#m = /* @__PURE__ */ P(() => um(this.floating.placement));
	get placedSide() {
		return z(this.#m);
	}
	set placedSide(e) {
		I(this.#m, e);
	}
	#h = /* @__PURE__ */ P(() => dm(this.floating.placement));
	get placedAlign() {
		return z(this.#h);
	}
	set placedAlign(e) {
		I(this.#h, e);
	}
	#g = /* @__PURE__ */ P(() => this.floating.middlewareData.arrow?.x ?? 0);
	get arrowX() {
		return z(this.#g);
	}
	set arrowX(e) {
		I(this.#g, e);
	}
	#_ = /* @__PURE__ */ P(() => this.floating.middlewareData.arrow?.y ?? 0);
	get arrowY() {
		return z(this.#_);
	}
	set arrowY(e) {
		I(this.#_, e);
	}
	#v = /* @__PURE__ */ P(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
	get cannotCenterArrow() {
		return z(this.#v);
	}
	set cannotCenterArrow(e) {
		I(this.#v, e);
	}
	#y = /* @__PURE__ */ F();
	get contentZIndex() {
		return z(this.#y);
	}
	set contentZIndex(e) {
		I(this.#y, e, !0);
	}
	#b = /* @__PURE__ */ P(() => tm[this.placedSide]);
	get arrowBaseSide() {
		return z(this.#b);
	}
	set arrowBaseSide(e) {
		I(this.#b, e);
	}
	#x = /* @__PURE__ */ P(() => ({
		id: this.opts.wrapperId.current,
		"data-bits-floating-content-wrapper": "",
		style: {
			...this.floating.floatingStyles,
			transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: this.contentZIndex,
			"--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
			"--bits-floating-available-width": `${z(this.#l)}px`,
			"--bits-floating-available-height": `${z(this.#u)}px`,
			"--bits-floating-anchor-width": `${z(this.#d)}px`,
			"--bits-floating-anchor-height": `${z(this.#f)}px`,
			...this.floating.middlewareData.hide?.referenceHidden && {
				visibility: "hidden",
				"pointer-events": "none"
			},
			...z(this.#e)
		},
		dir: this.opts.dir.current,
		...this.wrapperAttachment
	}));
	get wrapperProps() {
		return z(this.#x);
	}
	set wrapperProps(e) {
		I(this.#x, e);
	}
	#S = /* @__PURE__ */ P(() => ({
		"data-side": this.placedSide,
		"data-align": this.placedAlign,
		style: cl({ ...z(this.#e) }),
		...this.contentAttachment
	}));
	get props() {
		return z(this.#S);
	}
	set props(e) {
		I(this.#S, e);
	}
	#C = /* @__PURE__ */ P(() => ({
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
		return z(this.#C);
	}
	set arrowStyle(e) {
		I(this.#C, e);
	}
	constructor(e, t) {
		this.opts = e, this.root = t, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), bl(() => e.customAnchor.current, (e) => {
			this.root.customAnchorNode.current = e;
		}), this.floating = $p({
			strategy: () => this.opts.strategy.current,
			placement: () => z(this.#a),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...e) => Bp(...e, { animationFrame: this.#t?.current === "always" }),
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		}), Sr(() => {
			this.floating.isPositioned && this.opts.onPlaced?.current();
		}), bl(() => this.contentRef.current, (e) => {
			if (!e || !this.opts.enabled.current) return;
			let t = Gl(e), n = t.requestAnimationFrame(() => {
				if (this.contentRef.current !== e || !this.opts.enabled.current) return;
				let n = t.getComputedStyle(e).zIndex;
				n !== this.contentZIndex && (this.contentZIndex = n);
			});
			return () => {
				t.cancelAnimationFrame(n);
			};
		}), Sr(() => {
			this.floating.floating.current = this.wrapperRef.current;
		});
	}
}, sm = class e {
	static create(t, n = !1) {
		return n ? new e(t, im.get()) : new e(t, nm.get());
	}
	opts;
	root;
	constructor(e, t) {
		this.opts = e, this.root = t, e.virtualEl && e.virtualEl.current ? t.triggerNode = kc(e.virtualEl.current) : t.triggerNode = e.ref;
	}
};
function cm(e) {
	return {
		name: "transformOrigin",
		options: e,
		fn(t) {
			let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = lm(n), u = {
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
function lm(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
function um(e) {
	return lm(e)[0];
}
function dm(e) {
	return lm(e)[1];
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer.svelte
function fm(e, t) {
	E(t, !0);
	let n = q(t, "tooltip", 3, !1);
	am.create(n());
	var r = U();
	G(M(r), () => t.children ?? h), W(e, r), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-anchor.svelte
function pm(e, t) {
	E(t, !0);
	let n = q(t, "tooltip", 3, !1);
	sm.create({
		id: Z(() => t.id),
		virtualEl: Z(() => t.virtualEl),
		ref: t.ref
	}, n());
	var r = U();
	G(M(r), () => t.children ?? h), W(e, r), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content.svelte
function mm(e, t) {
	E(t, !0);
	let n = q(t, "side", 3, "bottom"), r = q(t, "sideOffset", 3, 0), i = q(t, "align", 3, "center"), a = q(t, "alignOffset", 3, 0), o = q(t, "arrowPadding", 3, 0), s = q(t, "avoidCollisions", 3, !0), c = q(t, "collisionBoundary", 19, () => []), l = q(t, "collisionPadding", 3, 0), u = q(t, "hideWhenDetached", 3, !1), d = q(t, "onPlaced", 3, () => {}), f = q(t, "sticky", 3, "partial"), p = q(t, "updatePositionStrategy", 3, "optimized"), m = q(t, "strategy", 3, "fixed"), g = q(t, "dir", 3, "ltr"), _ = q(t, "style", 19, () => ({})), v = q(t, "wrapperId", 19, Ed), y = q(t, "customAnchor", 3, null), b = q(t, "tooltip", 3, !1), x = om.create({
		side: Z(() => n()),
		sideOffset: Z(() => r()),
		align: Z(() => i()),
		alignOffset: Z(() => a()),
		id: Z(() => t.id),
		arrowPadding: Z(() => o()),
		avoidCollisions: Z(() => s()),
		collisionBoundary: Z(() => c()),
		collisionPadding: Z(() => l()),
		hideWhenDetached: Z(() => u()),
		onPlaced: Z(() => d()),
		sticky: Z(() => f()),
		updatePositionStrategy: Z(() => p()),
		strategy: Z(() => m()),
		dir: Z(() => g()),
		style: Z(() => _()),
		enabled: Z(() => t.enabled),
		wrapperId: Z(() => v()),
		customAnchor: Z(() => y())
	}, b()), S = /* @__PURE__ */ P(() => dl(x.wrapperProps, { style: { pointerEvents: "auto" } }));
	var ee = U();
	G(M(ee), () => t.content ?? h, () => ({
		props: x.props,
		wrapperProps: z(S)
	})), W(e, ee), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content-static.svelte
function hm(e, t) {
	E(t, !0), yo(() => {
		t.onPlaced?.();
	});
	var n = U();
	G(M(n), () => t.content ?? h, () => ({
		props: {},
		wrapperProps: {}
	})), W(e, n), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-content.svelte
function gm(e, t) {
	let n = q(t, "isStatic", 3, !1), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"content",
		"isStatic",
		"onPlaced"
	]);
	var i = U(), a = M(i), o = (e) => {
		hm(e, {
			get content() {
				return t.content;
			},
			get onPlaced() {
				return t.onPlaced;
			}
		});
	}, s = (e) => {
		mm(e, vo({
			get content() {
				return t.content;
			},
			get onPlaced() {
				return t.onPlaced;
			}
		}, () => r));
	};
	aa(a, (e) => {
		n() ? e(o) : e(s, -1);
	}), W(e, i);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-inner.svelte
var _m = /* @__PURE__ */ H("<!> <!>", 1);
function vm(e, t) {
	E(t, !0);
	let n = q(t, "interactOutsideBehavior", 3, "close"), r = q(t, "trapFocus", 3, !0), i = q(t, "isValidEvent", 3, () => !1), a = q(t, "customAnchor", 3, null), o = q(t, "isStatic", 3, !1), s = q(t, "tooltip", 3, !1), c = q(t, "contentPointerEvents", 3, "auto"), l = /* @__PURE__ */ K(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled.ref.tooltip.contentPointerEvents".split(".")), u = /* @__PURE__ */ P(() => t.preventScroll ?? !0), d = /* @__PURE__ */ P(() => t.strategy ?? (z(u) ? "fixed" : "absolute"));
	gm(e, {
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
			return z(d);
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
			var d = _m(), f = M(d), p = (e) => {
				Rd(e, { get preventScroll() {
					return z(u);
				} });
			}, m = (e) => {
				Rd(e, { get preventScroll() {
					return z(u);
				} });
			};
			aa(f, (e) => {
				t.forceMount && t.enabled ? e(p) : t.forceMount || e(m, 1);
			}), vd(bt(f, 2), {
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
					hd(e, {
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
							fd(e, {
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
									Td(e, {
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
												let e = /* @__PURE__ */ P(() => ({
													props: dl(l, o(), r(), a(), { style: { pointerEvents: c() } }),
													wrapperProps: s()
												}));
												G(u, () => t.popper ?? h, () => z(e));
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
function ym(e, t) {
	let n = q(t, "interactOutsideBehavior", 3, "close"), r = q(t, "trapFocus", 3, !0), i = q(t, "isValidEvent", 3, () => !1), a = q(t, "customAnchor", 3, null), o = q(t, "isStatic", 3, !1), s = /* @__PURE__ */ K(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.open.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.ref.shouldRender".split("."));
	var c = U(), l = M(c), u = (e) => {
		vm(e, vo({
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
	aa(l, (e) => {
		t.shouldRender && e(u);
	}), W(e, c);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-force-mount.svelte
function bm(e, t) {
	let n = q(t, "interactOutsideBehavior", 3, "close"), r = q(t, "trapFocus", 3, !0), i = q(t, "isValidEvent", 3, () => !1), a = q(t, "customAnchor", 3, null), o = q(t, "isStatic", 3, !1), s = /* @__PURE__ */ K(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled".split("."));
	vm(e, vo({
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
function xm(e, t) {
	E(t, !0);
	let n = q(t, "mounted", 15, !1), r = q(t, "onMountedChange", 3, du);
	Ml(() => (n(!0), r()(!0), () => {
		n(!1), r()(!1);
	})), D();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/safe-polygon.svelte.js
function Sm(e, t) {
	let [n, r] = e, i = !1, a = t.length;
	for (let e = 0, o = a - 1; e < a; o = e++) {
		let [a, s] = t[e] ?? [0, 0], [c, l] = t[o] ?? [0, 0];
		s >= r != l >= r && n <= (c - a) * (r - s) / (l - s) + a && (i = !i);
	}
	return i;
}
function Cm(e, t) {
	return e[0] >= t.left && e[0] <= t.right && e[1] >= t.top && e[1] <= t.bottom;
}
function wm(e, t) {
	let n = e.left + e.width / 2, r = e.top + e.height / 2, i = t.left + t.width / 2, a = t.top + t.height / 2, o = i - n, s = a - r;
	return Math.abs(o) > Math.abs(s) ? o > 0 ? "right" : "left" : s > 0 ? "bottom" : "top";
}
var Tm = class {
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
		this.#n = typeof t == "number" && t > 0 ? t : null, bl([
			e.triggerNode,
			e.contentNode,
			e.enabled
		], ([e, t, n]) => {
			if (!e || !t || !n) {
				this.#o = null, this.#m();
				return;
			}
			return this.#o && this.#o !== e && this.#m(), this.#o = e, [
				V(Wl(e), "pointermove", (n) => {
					this.#p([n.clientX, n.clientY], e, t);
				}),
				V(e, "pointerleave", (e) => {
					let n = e.relatedTarget;
					if (iu(n) && t.contains(n)) return;
					let r = this.#e.ignoredTargets?.() ?? [];
					iu(n) && r.some((e) => e === n || e.contains(n)) || (this.#a = iu(n) && r.length > 0 ? r.filter((e) => n.contains(e)) : [], this.#r = [e.clientX, e.clientY], this.#i = "content", this.#u());
				}),
				V(e, "pointerenter", () => {
					this.#m();
				}),
				V(t, "pointerenter", () => {
					this.#m();
				}),
				V(t, "pointerleave", (t) => {
					let n = t.relatedTarget;
					iu(n) && e.contains(n) || (this.#r = [t.clientX, t.clientY], this.#i = "trigger", this.#u());
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
		if (this.#i === "content" && Cm(e, i)) {
			this.#m();
			return;
		}
		if (this.#i === "trigger" && Cm(e, r)) {
			this.#m();
			return;
		}
		if (this.#i === "content" && this.#a.length > 0) for (let t of this.#a) {
			let n = t.getBoundingClientRect();
			if (Cm(e, n)) return;
			let i = wm(r, n), a = this.#h(r, n, i);
			if (a && Sm(e, a)) return;
		}
		let a = wm(r, i), o = this.#h(r, i, a);
		if (o && Sm(e, o)) return;
		let s = this.#i === "content" ? i : r;
		Sm(e, this.#g(this.#r, s, a, this.#i)) || (this.#m(), this.#e.onPointerExit());
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
}, Em = $l({
	component: "label",
	parts: ["root"]
}), Dm = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = Jl(this.opts.ref), this.onmousedown = this.onmousedown.bind(this);
	}
	onmousedown(e) {
		e.detail > 1 && e.preventDefault();
	}
	#e = /* @__PURE__ */ P(() => ({
		id: this.opts.id.current,
		[Em.root]: "",
		onmousedown: this.onmousedown,
		...this.attachment
	}));
	get props() {
		return z(this.#e);
	}
	set props(e) {
		I(this.#e, e);
	}
}, Om = /* @__PURE__ */ H("<label><!></label>");
function km(e, t) {
	let n = Xi();
	E(t, !0);
	let r = q(t, "id", 19, () => fu(n)), i = q(t, "ref", 15, null), a = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref",
		"for"
	]), o = Dm.create({
		id: Z(() => r()),
		ref: Z(() => i(), (e) => i(e))
	}), s = /* @__PURE__ */ P(() => dl(a, o.props, { for: t.for }));
	var c = U(), l = M(c), u = (e) => {
		var n = U();
		G(M(n), () => t.child, () => ({ props: z(s) })), W(e, n);
	}, d = (e) => {
		var n = Om();
		ro(n, () => ({
			...z(s),
			for: t.for
		})), G(j(n), () => t.children ?? h), A(n), W(e, n);
	};
	aa(l, (e) => {
		t.child ? e(u) : e(d, -1);
	}), W(e, c), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/link-preview.svelte.js
var Am = $l({
	component: "link-preview",
	parts: ["content", "trigger"]
}), jm = new gl("LinkPreview.Root"), Mm = class e {
	static create(t) {
		return jm.set(new e(t));
	}
	opts;
	#e = /* @__PURE__ */ F(!1);
	get hasSelection() {
		return z(this.#e);
	}
	set hasSelection(e) {
		I(this.#e, e, !0);
	}
	#t = /* @__PURE__ */ F(!1);
	get isPointerDownOnContent() {
		return z(this.#t);
	}
	set isPointerDownOnContent(e) {
		I(this.#t, e, !0);
	}
	#n = /* @__PURE__ */ F(!1);
	get containsSelection() {
		return z(this.#n);
	}
	set containsSelection(e) {
		I(this.#n, e, !0);
	}
	timeout = null;
	#r = /* @__PURE__ */ F(null);
	get contentNode() {
		return z(this.#r);
	}
	set contentNode(e) {
		I(this.#r, e, !0);
	}
	#i = /* @__PURE__ */ F(!1);
	get contentMounted() {
		return z(this.#i);
	}
	set contentMounted(e) {
		I(this.#i, e, !0);
	}
	contentPresence;
	#a = /* @__PURE__ */ F(null);
	get triggerNode() {
		return z(this.#a);
	}
	set triggerNode(e) {
		I(this.#a, e, !0);
	}
	isOpening = !1;
	domContext = new ql(() => null);
	constructor(e) {
		this.opts = e, this.contentPresence = new uu({
			ref: Z(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		}), bl(() => this.opts.open.current, (e) => {
			if (!e) {
				this.hasSelection = !1;
				return;
			}
			if (!this.domContext) return;
			let t = V(this.domContext.getDocument(), "pointerup", () => {
				this.containsSelection = !1, this.isPointerDownOnContent = !1, Nl(1, () => {
					this.domContext.getDocument().getSelection()?.toString() === "" ? this.hasSelection = !1 : this.hasSelection = !0;
				});
			});
			if (!this.contentNode) return;
			let n = Eu(this.contentNode);
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
}, Nm = class e {
	static create(t) {
		return new e(t, jm.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Jl(this.opts.ref, (e) => this.root.triggerNode = e), this.root.domContext = new ql(e.ref), this.onpointerenter = this.onpointerenter.bind(this), this.onpointerleave = this.onpointerleave.bind(this), this.onfocus = this.onfocus.bind(this), this.onblur = this.onblur.bind(this);
	}
	onpointerenter(e) {
		ou(e) || this.root.handleOpen();
	}
	onpointerleave(e) {
		ou(e) || (!this.root.contentMounted || !this.root.opts.open.current) && this.root.immediateClose();
	}
	onfocus(e) {
		su(e.currentTarget) && this.root.handleOpen();
	}
	onblur(e) {
		this.root.handleClose();
	}
	#e = /* @__PURE__ */ P(() => ({
		id: this.opts.id.current,
		"aria-haspopup": "dialog",
		"aria-expanded": Yl(this.root.opts.open.current),
		"data-state": Xl(this.root.opts.open.current),
		"aria-controls": this.root.contentNode?.id,
		role: "button",
		[Am.trigger]: "",
		onpointerenter: this.onpointerenter,
		onfocus: this.onfocus,
		onblur: this.onblur,
		onpointerleave: this.onpointerleave,
		...this.attachment
	}));
	get props() {
		return z(this.#e);
	}
	set props(e) {
		I(this.#e, e);
	}
}, Pm = class e {
	static create(t) {
		return new e(t, jm.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Jl(this.opts.ref, (e) => this.root.contentNode = e), this.root.domContext = new ql(e.ref), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerenter = this.onpointerenter.bind(this), this.onfocusout = this.onfocusout.bind(this), new Tm({
			triggerNode: () => this.root.triggerNode,
			contentNode: () => this.opts.ref.current,
			enabled: () => this.root.opts.open.current,
			onPointerExit: () => {
				this.root.handleClose();
			}
		}), jl(() => {
			this.root.clearTimeout();
		});
	}
	onpointerdown(e) {
		let t = e.target;
		iu(t) && (e.currentTarget.contains(t) && (this.root.containsSelection = !0), this.root.hasSelection = !0, this.root.isPointerDownOnContent = !0);
	}
	onpointerenter(e) {
		ou(e) || this.root.handleOpen();
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
	#e = /* @__PURE__ */ P(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return z(this.#e);
	}
	set snippetProps(e) {
		I(this.#e, e);
	}
	#t = /* @__PURE__ */ P(() => ({
		id: this.opts.id.current,
		tabindex: -1,
		"data-state": Xl(this.root.opts.open.current),
		...Zl(this.root.contentPresence.transitionStatus),
		[Am.content]: "",
		onpointerdown: this.onpointerdown,
		onpointerenter: this.onpointerenter,
		onfocusout: this.onfocusout,
		...this.attachment
	}));
	get props() {
		return z(this.#t);
	}
	set props(e) {
		I(this.#t, e);
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
function Fm(e, t) {
	E(t, !0);
	let n = q(t, "disabled", 3, !1), r = q(t, "open", 15, !1), i = q(t, "onOpenChange", 3, du), a = q(t, "onOpenChangeComplete", 3, du), o = q(t, "openDelay", 3, 700), s = q(t, "closeDelay", 3, 300);
	Mm.create({
		disabled: Z(() => n()),
		open: Z(() => r(), (e) => {
			r(e), i()(e);
		}),
		openDelay: Z(() => o()),
		closeDelay: Z(() => s()),
		onOpenChangeComplete: Z(() => a())
	});
	var c = U();
	_a(M(c), () => fm, (e, n) => {
		n(e, {
			children: (e, n) => {
				var r = U();
				G(M(r), () => t.children ?? h), W(e, r);
			},
			$$slots: { default: !0 }
		});
	}), W(e, c), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview-content.svelte
var Im = /* @__PURE__ */ H("<div><div><!></div></div>"), Lm = /* @__PURE__ */ H("<!> <!>", 1), Rm = /* @__PURE__ */ H("<div><div><!></div></div>"), zm = /* @__PURE__ */ H("<!> <!>", 1);
function Bm(e, t) {
	let n = Xi();
	E(t, !0);
	let r = q(t, "id", 19, () => fu(n)), i = q(t, "ref", 15, null), a = q(t, "side", 3, "top"), o = q(t, "sideOffset", 3, 0), s = q(t, "align", 3, "center"), c = q(t, "avoidCollisions", 3, !0), l = q(t, "arrowPadding", 3, 0), u = q(t, "sticky", 3, "partial"), d = q(t, "hideWhenDetached", 3, !1), f = q(t, "collisionPadding", 3, 0), p = q(t, "onInteractOutside", 3, du), m = q(t, "onEscapeKeydown", 3, du), g = q(t, "forceMount", 3, !1), _ = /* @__PURE__ */ K(t, [
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
	]), v = Pm.create({
		id: Z(() => r()),
		ref: Z(() => i(), (e) => i(e)),
		onInteractOutside: Z(() => p()),
		onEscapeKeydown: Z(() => m())
	}), y = /* @__PURE__ */ P(() => ({
		side: a(),
		sideOffset: o(),
		align: s(),
		avoidCollisions: c(),
		arrowPadding: l(),
		sticky: u(),
		hideWhenDetached: d(),
		collisionPadding: f()
	})), b = /* @__PURE__ */ P(() => dl(_, z(y), v.props));
	var x = U(), S = M(x), ee = (e) => {
		bm(e, vo(() => z(b), () => v.popperProps, {
			get ref() {
				return v.opts.ref;
			},
			get enabled() {
				return v.root.opts.open.current;
			},
			get id() {
				return r();
			},
			trapFocus: !1,
			loop: !1,
			preventScroll: !1,
			forceMount: !0,
			get shouldRender() {
				return v.shouldRender;
			},
			popper: (e, n) => {
				let r = () => n?.().props, i = () => n?.().wrapperProps, a = /* @__PURE__ */ P(() => dl(r(), { style: Qp("link-preview") }, { style: t.style }));
				var o = Lm(), s = M(o), c = (e) => {
					var n = U(), r = M(n);
					{
						let e = /* @__PURE__ */ P(() => ({
							props: z(a),
							wrapperProps: i(),
							...v.snippetProps
						}));
						G(r, () => t.child, () => z(e));
					}
					W(e, n);
				}, l = (e) => {
					var n = Im();
					ro(n, () => ({ ...i() }));
					var r = j(n);
					ro(r, () => ({ ...z(a) })), G(j(r), () => t.children ?? h), A(r), A(n), W(e, n);
				};
				aa(s, (e) => {
					t.child ? e(c) : e(l, -1);
				}), xm(bt(s, 2), {
					get mounted() {
						return v.root.contentMounted;
					},
					set mounted(e) {
						v.root.contentMounted = e;
					}
				}), W(e, o);
			},
			$$slots: { popper: !0 }
		}));
	}, C = (e) => {
		ym(e, vo(() => z(b), () => v.popperProps, {
			get ref() {
				return v.opts.ref;
			},
			get open() {
				return v.root.opts.open.current;
			},
			get id() {
				return r();
			},
			trapFocus: !1,
			loop: !1,
			preventScroll: !1,
			forceMount: !1,
			get shouldRender() {
				return v.shouldRender;
			},
			popper: (e, n) => {
				let r = () => n?.().props, i = () => n?.().wrapperProps, a = /* @__PURE__ */ P(() => dl(r(), { style: Qp("link-preview") }, { style: t.style }));
				var o = zm(), s = M(o), c = (e) => {
					var n = U(), r = M(n);
					{
						let e = /* @__PURE__ */ P(() => ({
							props: z(a),
							wrapperProps: i(),
							...v.snippetProps
						}));
						G(r, () => t.child, () => z(e));
					}
					W(e, n);
				}, l = (e) => {
					var n = Rm();
					ro(n, () => ({ ...i() }));
					var r = j(n);
					ro(r, () => ({ ...z(a) })), G(j(r), () => t.children ?? h), A(r), A(n), W(e, n);
				};
				aa(s, (e) => {
					t.child ? e(c) : e(l, -1);
				}), xm(bt(s, 2), {
					get mounted() {
						return v.root.contentMounted;
					},
					set mounted(e) {
						v.root.contentMounted = e;
					}
				}), W(e, o);
			},
			$$slots: { popper: !0 }
		}));
	};
	aa(S, (e) => {
		g() ? e(ee) : g() || e(C, 1);
	}), W(e, x), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview-trigger.svelte
var Vm = /* @__PURE__ */ H("<a><!></a>");
function Hm(e, t) {
	let n = Xi();
	E(t, !0);
	let r = q(t, "ref", 15, null), i = q(t, "id", 19, () => fu(n)), a = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"id",
		"child",
		"children"
	]), o = Nm.create({
		id: Z(() => i()),
		ref: Z(() => r(), (e) => r(e))
	}), s = /* @__PURE__ */ P(() => dl(a, o.props));
	var c = U();
	_a(M(c), () => pm, (e, n) => {
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
					G(M(n), () => t.child, () => ({ props: z(s) })), W(e, n);
				}, o = (e) => {
					var n = Vm();
					ro(n, () => ({ ...z(s) })), G(j(n), () => t.children ?? h), A(n), W(e, n);
				};
				aa(i, (e) => {
					t.child ? e(a) : e(o, -1);
				}), W(e, r);
			},
			$$slots: { default: !0 }
		});
	}), W(e, c), D();
}
//#endregion
//#region src/lib/components/ui/avatar/avatar.svelte
function Um(e, t) {
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
		let e = /* @__PURE__ */ P(() => Zs("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten", t.class));
		_a(s, () => Gd, (t, o) => {
			o(t, vo({
				"data-slot": "avatar",
				get "data-size"() {
					return i();
				},
				get class() {
					return z(e);
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
function Wm(e, t) {
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
		let e = /* @__PURE__ */ P(() => Zs("rounded-full aspect-square size-full object-cover", t.class));
		_a(a, () => qd, (t, i) => {
			i(t, vo({
				"data-slot": "avatar-image",
				get class() {
					return z(e);
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
function Gm(e, t) {
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
		let e = /* @__PURE__ */ P(() => Zs("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", t.class));
		_a(a, () => Yd, (t, i) => {
			i(t, vo({
				"data-slot": "avatar-fallback",
				get class() {
					return z(e);
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
var Km = /* @__PURE__ */ H("<span><!></span>");
function qm(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Km();
	ro(i, (e) => ({
		"data-slot": "avatar-badge",
		class: e,
		...r
	}), [() => Zs("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", t.class)]), G(j(i), () => t.children ?? h), A(i), po(i, (e) => n(e), () => n()), W(e, i), D();
}
//#endregion
//#region src/shared/components/common/ChannelAvatar.svelte
var Jm = /* @__PURE__ */ H("<!> <!> <!>", 1);
function Ym(e, t) {
	let n = q(t, "fallbackText", 3, "Channel Logo");
	Um(e, {
		class: "rounded-lg",
		children: (e, r) => {
			var i = Jm(), a = M(i);
			Wm(a, {
				get src() {
					return t.imgSrc;
				},
				get alt() {
					return n();
				}
			});
			var o = bt(a, 2), s = (e) => {
				{
					let n = /* @__PURE__ */ P(() => t.isConnected ? "bg-green-500" : "bg-red-500");
					qm(e, { get class() {
						return z(n);
					} });
				}
			};
			aa(o, (e) => {
				typeof t.isConnected == "boolean" && e(s);
			}), Gm(bt(o, 2), {
				children: (e, t) => {
					ot();
					var r = Yi();
					Ar(() => Qi(r, n())), W(e, r);
				},
				$$slots: { default: !0 }
			}), W(e, i);
		},
		$$slots: { default: !0 }
	});
}
//#endregion
//#region node_modules/valibot/dist/index.mjs
var Xm, Zm = {
	lang: void 0,
	message: void 0,
	abortEarly: void 0,
	abortPipeEarly: void 0
};
/* @__NO_SIDE_EFFECTS__ */
function Qm(e) {
	return !e && !Xm ? Zm : {
		lang: e?.lang ?? Xm?.lang,
		message: e?.message,
		abortEarly: e?.abortEarly ?? Xm?.abortEarly,
		abortPipeEarly: e?.abortPipeEarly ?? Xm?.abortPipeEarly
	};
}
var $m;
/* @__NO_SIDE_EFFECTS__ */
function eh(e) {
	return $m?.get(e);
}
var th;
/* @__NO_SIDE_EFFECTS__ */
function nh(e) {
	return th?.get(e);
}
var rh;
/* @__NO_SIDE_EFFECTS__ */
function ih(e, t) {
	return rh?.get(e)?.get(t);
}
/* @__NO_SIDE_EFFECTS__ */
function ah(e) {
	let t = typeof e;
	return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function oh(e, t, n, r, i) {
	let a = i && "input" in i ? i.input : n.value, o = i?.expected ?? e.expects ?? null, s = i?.received ?? /* @__PURE__ */ ah(a), c = {
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
	}, l = e.kind === "schema", u = i?.message ?? e.message ?? /* @__PURE__ */ ih(e.reference, c.lang) ?? (l ? /* @__PURE__ */ nh(c.lang) : null) ?? r.message ?? /* @__PURE__ */ eh(c.lang);
	u !== void 0 && (c.message = typeof u == "function" ? u(c) : u), l && (n.typed = !1), n.issues ? n.issues.push(c) : n.issues = [c];
}
var sh = /* @__PURE__ */ new WeakMap();
/* @__NO_SIDE_EFFECTS__ */
function ch(e) {
	let t = sh.get(e);
	return t || (t = {
		version: 1,
		vendor: "valibot",
		validate(t) {
			return e["~run"]({ value: t }, /* @__PURE__ */ Qm());
		}
	}, sh.set(e, t)), t;
}
/* @__NO_SIDE_EFFECTS__ */
function lh(e, t) {
	return {
		kind: "validation",
		type: "max_length",
		reference: lh,
		async: !1,
		expects: `<=${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && e.value.length > this.requirement && oh(this, "length", e, t, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function uh(e, t) {
	return {
		kind: "validation",
		type: "min_length",
		reference: uh,
		async: !1,
		expects: `>=${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && e.value.length < this.requirement && oh(this, "length", e, t, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function dh(e, t) {
	return {
		kind: "validation",
		type: "regex",
		reference: dh,
		async: !1,
		expects: `${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && !this.requirement.test(e.value) && oh(this, "format", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function fh(e) {
	return {
		kind: "schema",
		type: "string",
		reference: fh,
		expects: "string",
		async: !1,
		message: e,
		get "~standard"() {
			return /* @__PURE__ */ ch(this);
		},
		"~run"(e, t) {
			return typeof e.value == "string" ? e.typed = !0 : oh(this, "type", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function ph(...e) {
	return {
		...e[0],
		pipe: e,
		get "~standard"() {
			return /* @__PURE__ */ ch(this);
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
function mh(e, t, n) {
	let r = e["~run"]({ value: t }, /* @__PURE__ */ Qm(n));
	return {
		typed: r.typed,
		success: !r.issues,
		output: r.value,
		issues: r.issues
	};
}
//#endregion
//#region src/lib/components/ui/field/field.svelte
var hh = hc({
	base: "data-[invalid=true]:text-destructive gap-2 group/field flex w-full",
	variants: { orientation: {
		vertical: "cn-field-orientation-vertical flex-col [&>*]:w-full [&>.sr-only]:w-auto",
		horizontal: "cn-field-orientation-horizontal flex-row items-center has-[>[data-slot=field-content]]:items-start [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "cn-field-orientation-responsive flex-col @md/field-group:flex-row @md/field-group:items-center @md/field-group:has-[>[data-slot=field-content]]:items-start [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
}), gh = /* @__PURE__ */ H("<div><!></div>");
function _h(e, t) {
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
	var a = gh();
	ro(a, (e) => ({
		role: "group",
		"data-slot": "field",
		"data-orientation": r(),
		class: e,
		...i
	}), [() => Zs(hh({ orientation: r() }), t.class)]), G(j(a), () => t.children ?? h), A(a), po(a, (e) => n(e), () => n()), W(e, a), D();
}
//#endregion
//#region src/lib/components/ui/field/field-group.svelte
var vh = /* @__PURE__ */ H("<div><!></div>");
function yh(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = vh();
	ro(i, (e) => ({
		"data-slot": "field-group",
		class: e,
		...r
	}), [() => Zs("gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col", t.class)]), G(j(i), () => t.children ?? h), A(i), po(i, (e) => n(e), () => n()), W(e, i), D();
}
//#endregion
//#region src/lib/components/ui/label/label.svelte
function bh(e, t) {
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
		let e = /* @__PURE__ */ P(() => Zs("gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed", t.class));
		_a(a, () => km, (t, i) => {
			i(t, vo({
				"data-slot": "label",
				get class() {
					return z(e);
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
var xh = /* @__PURE__ */ H("<input/>"), Sh = /* @__PURE__ */ H("<input/>");
function Ch(e, t) {
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
		var s = xh();
		ro(s, (e) => ({
			"data-slot": a(),
			class: e,
			type: "file",
			...o
		}), [() => Zs("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", t.class)], void 0, void 0, void 0, !0), po(s, (e) => n(e), () => n()), uo(s, i), so(s, r), W(e, s);
	}, u = (e) => {
		var i = Sh();
		ro(i, (e) => ({
			"data-slot": a(),
			class: e,
			type: t.type,
			...o
		}), [() => Zs("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", t.class)], void 0, void 0, void 0, !0), po(i, (e) => n(e), () => n()), so(i, r), W(e, i);
	};
	aa(c, (e) => {
		t.type === "file" ? e(l) : e(u, -1);
	}), W(e, s), D();
}
//#endregion
//#region src/shared/api/http.ts
var wh = async (e) => fetch(e), Th = async (e, t) => fetch(e, {
	method: "POST",
	redirect: "manual",
	credentials: "include",
	headers: { "Content-Type": "application/x-www-form-urlencoded" },
	body: t
}), Eh = {
	status: !1,
	username: ""
}, Dh = (e) => {
	let { subscribe: t, set: n, update: r } = Pt({
		...Eh,
		...e
	});
	return {
		subscribe: t,
		set: n,
		init: (e) => n(e),
		updateStatus: (e) => r((t) => ({
			...t,
			status: e
		})),
		resetStatus: () => r((e) => ({
			...e,
			status: Eh.status
		})),
		updateUsername: (e) => r((t) => ({
			...t,
			username: e
		})),
		resetUsername: () => r((e) => ({
			...e,
			username: Eh.username
		}))
	};
}, Oh = async (e) => new Promise((t, r) => {
	n.once("login", (e) => {
		if (e.success) {
			t(e.name);
			return;
		}
		r(e.error);
	}), n.emit("login", e);
}), kh = async () => new Promise((e) => {
	n.once("rank", e);
}), Ah = async (e) => {
	await Th(new URL("/login", window.location.origin), new URLSearchParams(e));
	let t = await (await wh(new URL(window.location.href))).text(), n = new DOMParser().parseFromString(t, "text/html").querySelector("input[name=\"_csrf\"]");
	if (!n) {
		console.warn("login response missing csrf value");
		return;
	}
	let r = n.value;
	ni.updateCSRF(r);
}, jh = async (e) => {
	await Th(new URL("/logout", window.location.origin), new URLSearchParams(e));
}, Mh = async (t, r) => {
	n.disconnected && await e();
	let i = Oh({
		name: t,
		pw: r
	}), a = kh(), o = await i, s = await a;
	if (ei.updateName(o), ei.updateLoggedIn(!0), ei.updateRank(s), !r) return;
	let { csrf: c } = Ft(ni);
	Ah({
		_csrf: c,
		name: t,
		password: r,
		remember: "on"
	});
}, Nh = async () => {
	n.connected && await t();
	let { csrf: r } = Ft(ni);
	await jh({ _csrf: r }), ei.resetName(), ei.resetLoggedIn(), ei.resetRank(), n.disconnected && await e();
}, Ph = Dh(), Fh = (e) => e;
function Ih(e) {
	return e < .5 ? 4 * e * e * e : .5 * (2 * e - 2) ** 3 + 1;
}
function Lh(e) {
	let t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"];
}
function Rh(e, { delay: t = 0, duration: n = 400, easing: r = Ih, amount: i = 5, opacity: a = 0 } = {}) {
	let o = getComputedStyle(e), s = +o.opacity, c = o.filter === "none" ? "" : o.filter, l = s * (1 - a), [u, d] = Lh(i);
	return {
		delay: t,
		duration: n,
		easing: r,
		css: (e, t) => `opacity: ${s - l * t}; filter: ${c} blur(${t * u}${d});`
	};
}
function zh(e, { delay: t = 0, duration: n = 400, easing: r = Fh } = {}) {
	let i = +getComputedStyle(e).opacity;
	return {
		delay: t,
		duration: n,
		easing: r,
		css: (e) => `opacity: ${e * i}`
	};
}
//#endregion
//#region node_modules/@hugeicons/svelte/dist/create-hugeicon-singleton.js
var Bh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function Vh(e, t) {
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
			e.setAttribute(Bh(t), String(n));
		}), e.innerHTML = "", f.forEach(([t, n]) => {
			let r = document.createElementNS("http://www.w3.org/2000/svg", t), i = { ...n };
			p !== void 0 && (i["stroke-width"] = p, i.stroke = "currentColor"), Object.entries(i).forEach(([e, t]) => {
				r.setAttribute(Bh(e), String(t));
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
var Hh = /* @__PURE__ */ Ji("<svg></svg>");
function Uh(e, t) {
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
	]), l = /* @__PURE__ */ P(() => o() || s()), u, d = /* @__PURE__ */ F(void 0), f = /* @__PURE__ */ F(void 0), p = /* @__PURE__ */ P(() => ({
		size: n(),
		strokeWidth: t.strokeWidth,
		absoluteStrokeWidth: r(),
		color: i(),
		altIcon: t.altIcon,
		showAlt: a(),
		class: z(l)
	}));
	yo(() => {
		if (u) return I(d, Vh("HugeiconsIcon", t.icon), !0), I(f, z(d).render(u, z(p)), !0), () => {
			z(f)?.destroy();
		};
	}), Sr(() => {
		z(d) && u && z(f) && z(f).update(z(p));
	});
	var m = Hh();
	ro(m, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		width: n(),
		height: n(),
		viewBox: "0 0 24 24",
		fill: "none",
		class: z(l),
		...c
	})), po(m, (e) => u = e, () => u), W(e, m), D();
}
//#endregion
//#region node_modules/@hugeicons/core-free-icons/dist/esm/index.min.js
var Wh = [
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
], Gh = [
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
], Kh = [
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
], qh = [["path", {
	d: "M11.9532 2.00004C17.5019 2.00004 22 6.47719 22 12C22 17.5229 17.5019 22 11.9532 22C-0.631103 22 -1.82658 4.01759 11.4985 5.00004C14.8499 5.24714 18.0289 8.41019 18.0289 12C18.0289 16.5 15.2348 18.5 11.4985 18.5C4.5 18.5 3.19042 8.46695 11.0021 9.00004C12.508 9.1028 14.0162 10.3432 14.0162 12C14.0162 13.9279 13 15 11.1211 15",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}]], Jh = [
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
], Yh = [["path", {
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
}]], Xh = /* @__PURE__ */ H("<span><!></span>"), Zh = /* @__PURE__ */ H("<span><!></span>"), Qh = /* @__PURE__ */ H("<span><!></span>"), $h = /* @__PURE__ */ H("<span><!></span>"), eg = /* @__PURE__ */ H("<div><!></div>");
function tg(e, t) {
	var n = eg(), r = j(n), i = (e) => {
		var t = Xh();
		Uh(j(t), {
			get icon() {
				return Gh;
			},
			class: "size-5 animate-spin",
			role: "status",
			"aria-label": "Loading"
		}), A(t), Oa(3, t, () => zh, () => ({ duration: 250 })), W(e, t);
	}, a = (e) => {
		var t = Zh();
		Uh(j(t), {
			get icon() {
				return Wh;
			},
			class: "size-5"
		}), A(t), Oa(3, t, () => zh, () => ({ duration: 250 })), W(e, t);
	}, o = (e) => {
		var t = Qh();
		Uh(j(t), {
			get icon() {
				return Yh;
			},
			class: "size-5"
		}), A(t), Oa(3, t, () => zh, () => ({ duration: 250 })), W(e, t);
	}, s = (e) => {
		var t = $h();
		Uh(j(t), {
			get icon() {
				return Jh;
			},
			class: "size-5"
		}), A(t), Oa(3, t, () => zh, () => ({ duration: 250 })), W(e, t);
	};
	aa(r, (e) => {
		t.isLoading ? e(i) : t.isAnon ? e(a, 1) : t.isGuest ? e(o, 2) : e(s, -1);
	}), A(n), W(e, n);
}
//#endregion
//#region src/features/auth/LoginForm.svelte
var ng = /* @__PURE__ */ ph(/* @__PURE__ */ fh(), /* @__PURE__ */ uh(1, "Min 1 character"), /* @__PURE__ */ lh(20, "Max 20 characters"), /* @__PURE__ */ dh(/^[A-Za-zА-Яа-я0-9_-]+$/, "Only letters, numbers, -, or _")), rg = /* @__PURE__ */ ph(/* @__PURE__ */ fh(), /* @__PURE__ */ lh(100, "Max 100 characters")), ig = /* @__PURE__ */ H("<!> <!> <!> <!>", 1), ag = /* @__PURE__ */ H("<div class=\"w-full max-w-md ml-auto\"><form><!></form></div>");
function og(e, t) {
	E(t, !0);
	let n = () => zt(Ph, "$authStore", r), [r, i] = Bt(), a = /* @__PURE__ */ P(() => n().status), o = /* @__PURE__ */ P(() => n().username), s = /* @__PURE__ */ P(() => /* @__PURE__ */ mh(ng, z(o))), c = /* @__PURE__ */ P(() => z(s).success), l = /* @__PURE__ */ P(() => z(o) !== "" && !z(c)), u = /* @__PURE__ */ P(() => z(s).success ? "" : z(s).issues.map((e) => e.message).join(", ")), d = /* @__PURE__ */ P(() => n().password || ""), f = /* @__PURE__ */ P(() => !z(c) || z(a)), p = /* @__PURE__ */ P(() => /* @__PURE__ */ mh(rg, z(d))), m = /* @__PURE__ */ P(() => z(p).success), h = /* @__PURE__ */ P(() => z(d) !== "" && !z(m)), g = /* @__PURE__ */ P(() => z(p).success ? "" : z(p).issues.map((e) => e.message).join(", ")), _ = /* @__PURE__ */ P(() => z(a) || !z(c) || z(c) && !z(m)), v = async (e) => {
		if (e.preventDefault(), !z(_)) try {
			Ht(Ph, B(n).status = !0, B(n)), await new Promise((e) => setTimeout(e, 500)), await Mh(z(o), z(d));
		} catch (e) {
			console.error(e);
		} finally {
			Ht(Ph, B(n).status = !1, B(n)), Ht(Ph, B(n).username = "", B(n)), Ht(Ph, B(n).password = void 0, B(n));
		}
	};
	var y = ag(), b = j(y);
	yh(j(b), {
		children: (e, t) => {
			_h(e, {
				orientation: "responsive",
				class: "flex flex-row items-center justify-end",
				children: (e, t) => {
					var r = ig(), i = M(r);
					{
						let e = /* @__PURE__ */ P(() => z(o) === "" && z(d) === ""), t = /* @__PURE__ */ P(() => z(d) === "");
						tg(i, {
							get isLoading() {
								return z(a);
							},
							get isAnon() {
								return z(e);
							},
							get isGuest() {
								return z(t);
							}
						});
					}
					var s = bt(i, 2);
					{
						let e = /* @__PURE__ */ P(() => z(l) ? z(u) : ""), t = /* @__PURE__ */ P(() => Zs({ "md:cursor-not-allowed": z(a) }));
						Ch(s, {
							required: !0,
							type: "text",
							autocomplete: "name",
							placeholder: "Username",
							get "aria-invalid"() {
								return z(l);
							},
							get title() {
								return z(e);
							},
							get disabled() {
								return z(a);
							},
							get class() {
								return z(t);
							},
							get value() {
								return n().username;
							},
							set value(e) {
								Ht(Ph, B(n).username = e, B(n));
							}
						});
					}
					var c = bt(s, 2);
					{
						let e = /* @__PURE__ */ P(() => z(h) ? z(g) : ""), t = /* @__PURE__ */ P(() => Zs({ "md:cursor-not-allowed": z(f) }));
						Ch(c, {
							name: "password",
							type: "password",
							autocomplete: "current-password",
							placeholder: "Password",
							get "aria-invalid"() {
								return z(h);
							},
							get title() {
								return z(e);
							},
							get disabled() {
								return z(f);
							},
							get class() {
								return z(t);
							},
							get value() {
								return n().password;
							},
							set value(e) {
								Ht(Ph, B(n).password = e, B(n));
							}
						});
					}
					var p = bt(c, 2);
					{
						let e = /* @__PURE__ */ P(() => Zs({ "md:cursor-not-allowed": z(_) }));
						yc(p, {
							type: "submit",
							get disabled() {
								return z(_);
							},
							get class() {
								return z(e);
							},
							children: (e, t) => {
								ot(), W(e, Yi("Login"));
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
	}), A(b), A(y), Ri("submit", b, v), W(e, y), D(), i();
}
//#endregion
//#region src/features/auth/LogoutForm.svelte
var sg = /* @__PURE__ */ H("<!> <!> <!>", 1), cg = /* @__PURE__ */ H("<div class=\"w-full max-w-md ml-auto\"><form><!></form></div>");
function lg(e, t) {
	E(t, !0);
	let n = () => zt(Ph, "$authStore", i), r = () => zt(ei, "$clientStore", i), [i, a] = Bt(), o = /* @__PURE__ */ P(() => n().status), s = /* @__PURE__ */ P(() => r().rank > 0), c = async (e) => {
		if (e.preventDefault(), !z(o)) try {
			Ht(Ph, B(n).status = !0, B(n)), await new Promise((e) => setTimeout(e, 500)), await Nh();
		} catch (e) {
			console.error(e);
		} finally {
			Ht(Ph, B(n).status = !1, B(n)), Ht(Ph, B(n).username = "", B(n)), Ht(Ph, B(n).password = void 0, B(n));
		}
	};
	var l = cg(), u = j(l);
	yh(j(u), {
		children: (e, t) => {
			_h(e, {
				orientation: "responsive",
				class: "flex flex-row items-center justify-end selection:bg-primary",
				children: (e, t) => {
					var n = sg(), i = M(n);
					{
						let e = /* @__PURE__ */ P(() => !z(s));
						tg(i, {
							get isLoading() {
								return z(o);
							},
							isAnon: !1,
							get isGuest() {
								return z(e);
							}
						});
					}
					var a = bt(i, 2);
					bh(a, {
						class: "flex-none w-auto",
						children: (e, t) => {
							ot();
							var n = Yi();
							Ar(() => Qi(n, r().name)), W(e, n);
						},
						$$slots: { default: !0 }
					});
					var c = bt(a, 2);
					{
						let e = /* @__PURE__ */ P(() => Zs({ "md:cursor-not-allowed": z(o) }));
						yc(c, {
							type: "submit",
							get disabled() {
								return z(o);
							},
							get class() {
								return z(e);
							},
							children: (e, t) => {
								ot(), W(e, Yi("Logout"));
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
	}), A(u), A(l), Ri("submit", u, c), W(e, l), D(), a();
}
//#endregion
//#region src/features/auth/AuthForm.svelte
function ug(e, t) {
	var n = U(), r = M(n), i = (e) => {
		lg(e, {});
	}, a = (e) => {
		og(e, {});
	};
	aa(r, (e) => {
		t.isLoggedIn ? e(i) : e(a, -1);
	}), W(e, n);
}
//#endregion
//#region src/shared/components/layout/Header.svelte
var dg = new URL("dist/logo.png", window.BASE_URL).toString(), fg = /* @__PURE__ */ H("<header class=\"sticky w-full flex flex-row items-center justify-start h-15 mx-auto top-0 z-50 bg-background md:bg-background/80 md:backdrop-blur-md\"><!> <div class=\"w-full flex flex-row items-center justify-between pr-6 py-5\"><!> <!></div></header>");
function pg(t, n) {
	E(n, !1);
	let r = () => zt(Qr, "$appStore", o), i = () => zt(ii, "$socketStore", o), a = () => zt(ei, "$clientStore", o), [o, s] = Bt();
	mo();
	var c = fg(), l = j(c), u = (e) => {
		xc(e, { get version() {
			return r().version;
		} });
	};
	aa(l, (e) => {
		r().version && e(u);
	});
	var d = bt(l, 2), f = j(d);
	Ym(f, {
		get imgSrc() {
			return dg;
		},
		get isConnected() {
			return i().connected;
		}
	});
	var p = bt(f, 2), m = (e) => {
		ug(e, { get isLoggedIn() {
			return a().logged_in;
		} });
	}, h = (t) => {
		yc(t, {
			get onclick() {
				return e;
			},
			children: (e, t) => {
				ot(), W(e, Yi("Reconnect"));
			},
			$$slots: { default: !0 }
		});
	};
	aa(p, (e) => {
		i().connected ? e(m) : e(h, -1);
	}), A(d), A(c), W(t, c), D(), s();
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/is.js
function mg(e) {
	return typeof e == "function";
}
function hg(e) {
	return typeof e == "object" && !!e;
}
var gg = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function _g(e) {
	return e == null || gg.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => _g(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/box/box.svelte.js
var vg = Symbol("box"), yg = Symbol("is-writable");
function bg(e) {
	return hg(e) && vg in e;
}
function xg(e) {
	return Q.isBox(e) && yg in e;
}
function Q(e) {
	let t = /* @__PURE__ */ F(lt(e));
	return {
		[vg]: !0,
		[yg]: !0,
		get current() {
			return z(t);
		},
		set current(e) {
			I(t, e, !0);
		}
	};
}
function Sg(e, t) {
	let n = /* @__PURE__ */ P(e);
	return t ? {
		[vg]: !0,
		[yg]: !0,
		get current() {
			return z(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[vg]: !0,
		get current() {
			return e();
		}
	};
}
function Cg(e) {
	return Q.isBox(e) ? e : mg(e) ? Q.with(e) : Q(e);
}
function wg(e) {
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
function Tg(e) {
	return Q.isWritableBox(e) ? {
		[vg]: !0,
		get current() {
			return e.current;
		}
	} : e;
}
Q.from = Cg, Q.with = Sg, Q.flatten = wg, Q.readonly = Tg, Q.isBox = bg, Q.isWritableBox = xg;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
function Eg(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/strings.js
var Dg = /\d/, Og = [
	"-",
	"_",
	"/",
	"."
];
function kg(e = "") {
	if (!Dg.test(e)) return e !== e.toLowerCase();
}
function Ag(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = Og.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = kg(a);
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
function jg(e) {
	return e ? Ag(e).map((e) => Ng(e)).join("") : "";
}
function Mg(e) {
	return Pg(jg(e || ""));
}
function Ng(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function Pg(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function Fg(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[jg(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[Mg(e)] = n;
	}
	return Jc(e, n), t;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
function Ig(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/events.js
function Lg(e, t, n, r) {
	let i = Array.isArray(t) ? t : [t];
	return i.forEach((t) => e.addEventListener(t, n, r)), () => {
		i.forEach((t) => e.removeEventListener(t, n, r));
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function Rg(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var zg = Rg(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function Bg(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${zg(t)}: ${e[t]};`).join("\n");
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/style.js
function Vg(e = {}) {
	return Bg(e).replace("\n", " ");
}
Vg({
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
var Hg = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/merge-props.js
function Ug(e) {
	return Hg.has(e);
}
function Wg(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
				if (a && typeof o && Ug(e)) t[e] = Eg(n, i);
				else if (a && o) t[e] = Ig(n, i);
				else if (e === "class") {
					let r = _g(n), a = _g(i);
					r && a ? t[e] = Ma(n, i) : r ? t[e] = Ma(n) : a && (t[e] = Ma(i));
				} else if (e === "style") {
					let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
					if (r && a) t[e] = {
						...n,
						...i
					};
					else if (r && s) {
						let r = Fg(i);
						t[e] = {
							...n,
							...r
						};
					} else if (o && a) t[e] = {
						...Fg(n),
						...i
					};
					else if (o && s) {
						let r = Fg(n), a = Fg(i);
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
	return typeof t.style == "object" && (t.style = Vg(t.style).replaceAll("\n", " ")), t.hidden !== !0 && (t.hidden = void 0, delete t.hidden), t.disabled !== !0 && (t.disabled = void 0, delete t.disabled), t;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/internal/configurable-globals.js
var Gg = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/internal/utils/dom.js
function Kg(e) {
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
		let { window: t = Gg, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = dn((e) => {
			let n = V(t, "focusin", e), r = V(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? Kg(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/utilities/watch/watch.svelte.js
function qg(e, t) {
	switch (e) {
		case "post":
			Sr(t);
			break;
		case "pre":
			wr(t);
			break;
	}
}
function Jg(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	qg(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = B(() => n(t, o));
		return o = t, r;
	});
}
function Yg(e, t, n) {
	let r = Tr(() => {
		let i = !1;
		Jg(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Sr(() => r);
}
function Xg(e, t, n) {
	Jg(e, "post", t, n);
}
function Zg(e, t, n) {
	Jg(e, "pre", t, n);
}
Xg.pre = Zg;
function Qg(e, t) {
	Yg(e, "post", t);
}
function $g(e, t) {
	Yg(e, "pre", t);
}
Qg.pre = $g;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/utilities/resource/resource.svelte.js
function e_(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function t_(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function n_(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ F(lt(o)), u = /* @__PURE__ */ F(!1), d = /* @__PURE__ */ F(void 0), f = /* @__PURE__ */ F(lt([])), p = () => {
		z(f).forEach((e) => e()), I(f, [], !0);
	}, m = (e) => {
		I(f, [...z(f), e], !0);
	}, h = async (e, n, r = !1) => {
		try {
			I(u, !0), I(d, void 0), p();
			let i = new AbortController();
			m(() => i.abort());
			let a = await t(e, n, {
				data: z(l),
				refetching: r,
				onCleanup: m,
				signal: i.signal
			});
			return I(l, a, !0), a;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || I(d, e, !0);
			return;
		} finally {
			I(u, !1);
		}
	}, g = s ? e_(h, s) : c ? t_(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
	return r((t, n) => {
		a && v || (v = t, g(Array.isArray(e) ? t : t[0], Array.isArray(e) ? n : n?.[0]));
	}, { lazy: i }), {
		get current() {
			return z(l);
		},
		get loading() {
			return z(u);
		},
		get error() {
			return z(d);
		},
		mutate: (e) => {
			I(l, e, !0);
		},
		refetch: (t) => {
			let n = _.map((e) => e());
			return g(Array.isArray(e) ? n : n[0], Array.isArray(e) ? n : n[0], t ?? !0);
		}
	};
}
function r_(e, t, n) {
	return n_(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		Xg(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function i_(e, t, n) {
	return n_(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		Xg.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
r_.pre = i_;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/after-tick.js
function a_(e) {
	fr().then(e);
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/dom.js
var o_ = 9;
function s_(e) {
	return hg(e) && e.nodeType === o_;
}
function c_(e) {
	return hg(e) && e.constructor?.name === "VisualViewport";
}
function l_(e) {
	return s_(e) ? e : c_(e) ? e.document : e?.ownerDocument ?? document;
}
function u_(e) {
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
var d_ = class {
	element;
	#e = /* @__PURE__ */ P(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return z(this.#e);
	}
	set root(e) {
		I(this.#e, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = Q.with(e) : this.element = e;
	}
	getDocument = () => l_(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => u_(this.root);
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
function f_(e, t) {
	return { [wi()]: (n) => Q.isBox(e) ? (e.current = n, B(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), B(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/aria.js
function p_({ layout: e, panesArray: t, pivotIndices: n }) {
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
function m_(e, t = "Assertion failed!") {
	if (!e) throw console.error(t), Error(t);
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/compare.js
function h_(e, t, n = 10) {
	return g_(e, t, n) === 0;
}
function g_(e, t, n = 10) {
	let r = v_(e, n), i = v_(t, n);
	return Math.sign(r - i);
}
function __(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function v_(e, t) {
	return Number.parseFloat(e.toFixed(t));
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/is.js
var y_ = typeof document < "u";
function b_(e) {
	return e instanceof HTMLElement;
}
function x_(e) {
	return e.type === "keydown";
}
function S_(e) {
	return e.type.startsWith("mouse");
}
function C_(e) {
	return e.type.startsWith("touch");
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/resize.js
function w_({ paneConstraints: e, paneIndex: t, initialSize: n }) {
	let r = e[t];
	m_(r != null, "Pane constraints should not be null.");
	let { collapsedSize: i = 0, collapsible: a, maxSize: o = 100, minSize: s = 0 } = r, c = n;
	return g_(c, s) < 0 && (c = T_(c, a, i, s)), c = Math.min(o, c), Number.parseFloat(c.toFixed(10));
}
function T_(e, t, n, r) {
	return t && g_(e, (n + r) / 2) < 0 ? n : r;
}
//#endregion
//#region node_modules/paneforge/dist/internal/helpers.js
function E_() {}
function D_({ groupId: e, layout: t, panesArray: n, domContext: r }) {
	let i = O_(e, r);
	for (let e = 0; e < n.length - 1; e++) {
		let { valueMax: r, valueMin: a, valueNow: o } = p_({
			layout: t,
			panesArray: n,
			pivotIndices: [e, e + 1]
		}), s = i[e];
		if (b_(s)) {
			let t = n[e];
			s.setAttribute("aria-controls", t.opts.id.current), s.setAttribute("aria-valuemax", `${Math.round(r)}`), s.setAttribute("aria-valuemin", `${Math.round(a)}`), s.setAttribute("aria-valuenow", o == null ? "" : `${Math.round(o)}`);
		}
	}
	return () => {
		for (let e of i) e.removeAttribute("aria-controls"), e.removeAttribute("aria-valuemax"), e.removeAttribute("aria-valuemin"), e.removeAttribute("aria-valuenow");
	};
}
function O_(e, t) {
	return y_ ? Array.from(t.querySelectorAll(`[data-pane-resizer-id][data-pane-group-id="${e}"]`)) : [];
}
function k_({ groupId: e, id: t, domContext: n }) {
	return y_ ? O_(e, n).findIndex((e) => e.getAttribute("data-pane-resizer-id") === t) ?? null : null;
}
function A_({ groupId: e, dragHandleId: t, domContext: n }) {
	let r = k_({
		groupId: e,
		id: t,
		domContext: n
	});
	return r == null ? [-1, -1] : [r, r + 1];
}
function j_(e, t, n) {
	let r = e.map((e) => e.constraints), i = M_(e, t), a = r[i], o = i === e.length - 1 ? [i - 1, i] : [i, i + 1], s = n[i];
	return {
		...a,
		paneSize: s,
		pivotIndices: o
	};
}
function M_(e, t) {
	return e.findIndex((e) => e.opts.id.current === t.opts.id.current);
}
function N_(e, t, n) {
	for (let r = 0; r < t.length; r++) {
		let i = t[r], a = e[r];
		m_(a);
		let { collapsedSize: o = 0, collapsible: s } = a.constraints, c = n[a.opts.id.current];
		if (!(c == null || i !== c)) continue;
		n[a.opts.id.current] = i;
		let { onCollapse: l, onExpand: u, onResize: d } = a.callbacks;
		d?.(i, c), s && (l || u) && (u && (c == null || c === o) && i !== o && u(), l && (c == null || c !== o) && i === o && l());
	}
}
function P_({ panesArray: e }) {
	let t = Array(e.length), n = e.map((e) => e.constraints), r = 0, i = 100;
	for (let a = 0; a < e.length; a++) {
		let e = n[a];
		m_(e);
		let { defaultSize: o } = e;
		o != null && (r++, t[a] = o, i -= o);
	}
	for (let a = 0; a < e.length; a++) {
		let o = n[a];
		m_(o);
		let { defaultSize: s } = o;
		if (s != null) continue;
		let c = e.length - r, l = i / c;
		r++, t[a] = l, i -= l;
	}
	return t;
}
function F_({ layout: e, paneConstraints: t }) {
	let n = [...e], r = n.reduce((e, t) => e + t, 0);
	if (n.length !== t.length) throw Error(`Invalid ${t.length} pane layout: ${n.map((e) => `${e}%`).join(", ")}`);
	if (!h_(r, 100)) for (let e = 0; e < t.length; e++) {
		let t = n[e];
		m_(t != null), n[e] = 100 / r * t;
	}
	let i = 0;
	for (let e = 0; e < t.length; e++) {
		let r = n[e];
		m_(r != null);
		let a = w_({
			paneConstraints: t,
			paneIndex: e,
			initialSize: r
		});
		r !== a && (i += r - a, n[e] = a);
	}
	if (!h_(i, 0)) for (let e = 0; e < t.length; e++) {
		let r = n[e];
		m_(r != null);
		let a = r + i, o = w_({
			paneConstraints: t,
			paneIndex: e,
			initialSize: a
		});
		if (r !== o && (i -= o - r, n[e] = o, h_(i, 0))) break;
	}
	return n;
}
function I_(e, t) {
	return y_ && t.querySelector(`[data-pane-group][data-pane-group-id="${e}"]`) || null;
}
function L_(e, t) {
	return y_ && t.querySelector(`[data-pane-resizer-id="${e}"]`) || null;
}
function R_({ event: e, dragHandleId: t, dir: n, initialDragState: r, domContext: i }) {
	let a = n === "horizontal", o = L_(t, i);
	m_(o);
	let s = o.getAttribute("data-pane-group-id");
	m_(s);
	let { initialCursorPosition: c } = r, l = B_(n, e), u = I_(s, i);
	m_(u);
	let d = u.getBoundingClientRect(), f = a ? d.width : d.height;
	return (l - c) / f * 100;
}
function z_({ event: e, dragHandleId: t, dir: n, initialDragState: r, keyboardResizeBy: i, domContext: a }) {
	if (x_(e)) {
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
	} else return r == null ? 0 : R_({
		event: e,
		dragHandleId: t,
		dir: n,
		initialDragState: r,
		domContext: a
	});
}
function B_(e, t) {
	let n = e === "horizontal";
	if (S_(t)) return n ? t.clientX : t.clientY;
	if (C_(t)) {
		let e = t.touches[0];
		return m_(e), n ? e.screenX : e.screenY;
	} else throw Error(`Unsupported event type "${t.type}"`);
}
function V_({ groupId: e, handleId: t, panesArray: n, domContext: r }) {
	let i = L_(t, r), a = O_(e, r), o = i ? a.indexOf(i) : -1;
	return [n[o]?.opts.id.current ?? null, n[o + 1]?.opts.id.current ?? null];
}
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/internal/configurable-globals.js
var H_ = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/internal/utils/dom.js
function U_(e) {
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
		let { window: t = H_, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = dn((e) => {
			let n = V(t, "focusin", e), r = V(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? U_(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/utilities/watch/watch.svelte.js
function W_(e, t) {
	switch (e) {
		case "post":
			Sr(t);
			break;
		case "pre":
			wr(t);
			break;
	}
}
function G_(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	W_(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = B(() => n(t, o));
		return o = t, r;
	});
}
function K_(e, t, n) {
	let r = Tr(() => {
		let i = !1;
		G_(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Sr(() => r);
}
function q_(e, t, n) {
	G_(e, "post", t, n);
}
function J_(e, t, n) {
	G_(e, "pre", t, n);
}
q_.pre = J_;
function Y_(e, t) {
	K_(e, "post", t);
}
function X_(e, t) {
	K_(e, "pre", t);
}
Y_.pre = X_;
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/utilities/context/context.js
var Z_ = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return We(this.#t);
	}
	get() {
		let e = He(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = He(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return Ue(this.#t, e);
	}
};
//#endregion
//#region node_modules/paneforge/dist/internal/utils/adjust-layout.js
function Q_({ delta: e, layout: t, paneConstraints: n, pivotIndices: r, trigger: i }) {
	if (h_(e, 0)) return t;
	let a = [...t], [o, s] = r, c = 0;
	if (i === "keyboard") {
		{
			let r = e < 0 ? s : o, i = n[r];
			if (m_(i), i.collapsible) {
				let i = t[r];
				m_(i != null);
				let a = n[r];
				m_(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (h_(i, o)) {
					let t = s - i;
					g_(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
		{
			let r = e < 0 ? o : s, i = n[r];
			m_(i);
			let { collapsible: a } = i;
			if (a) {
				let i = t[r];
				m_(i != null);
				let a = n[r];
				m_(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (h_(i, s)) {
					let t = i - o;
					g_(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
	}
	{
		let r = e < 0 ? 1 : -1, i = e < 0 ? s : o, a = 0;
		for (;;) {
			let e = t[i];
			m_(e != null);
			let o = w_({
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
			m_(o != null);
			let s = o - i, l = w_({
				paneConstraints: n,
				paneIndex: r,
				initialSize: s
			});
			if (!h_(o, l) && (c += o - l, a[r] = l, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, { numeric: !0 }) >= 0)) break;
			e < 0 ? r-- : r++;
		}
	}
	if (h_(c, 0)) return t;
	{
		let r = e < 0 ? s : o, i = t[r];
		m_(i != null);
		let l = i + c, u = w_({
			paneConstraints: n,
			paneIndex: r,
			initialSize: l
		});
		if (a[r] = u, !h_(u, l)) {
			let t = l - u, r = e < 0 ? s : o;
			for (; r >= 0 && r < n.length;) {
				let i = a[r];
				m_(i != null);
				let o = i + t, s = w_({
					paneConstraints: n,
					paneIndex: r,
					initialSize: o
				});
				if (h_(i, s) || (t -= s - i, a[r] = s), h_(t, 0)) break;
				e > 0 ? r-- : r++;
			}
		}
	}
	return h_(a.reduce((e, t) => t + e, 0), 100) ? a : t;
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/style.js
var $_ = null, ev = null;
function tv(e) {
	switch (e) {
		case "horizontal": return "ew-resize";
		case "horizontal-max": return "w-resize";
		case "horizontal-min": return "e-resize";
		case "vertical": return "ns-resize";
		case "vertical-max": return "n-resize";
		case "vertical-min": return "s-resize";
	}
}
function nv() {
	ev !== null && (document.head.removeChild(ev), $_ = null, ev = null);
}
function rv(e, t) {
	if ($_ === e) return;
	$_ = e;
	let n = tv(e);
	ev === null && (ev = t.createElement("style"), t.head.appendChild(ev)), ev.innerHTML = `*{cursor: ${n}!important;}`;
}
function iv({ defaultSize: e, dragState: t, layout: n, panesArray: r, paneIndex: i, precision: a = 3 }) {
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
function av(e) {
	try {
		if (typeof localStorage > "u") throw TypeError("localStorage is not supported in this environment");
		e.getItem = (e) => localStorage.getItem(e), e.setItem = (e, t) => localStorage.setItem(e, t);
	} catch (t) {
		console.error(t), e.getItem = () => null, e.setItem = () => {};
	}
}
function ov(e) {
	return `paneforge:${e}`;
}
function sv(e) {
	return e.map((e) => e.opts.order.current ? `${e.opts.order.current}:${JSON.stringify(e.constraints)}` : JSON.stringify(e.constraints)).sort().join(",");
}
function cv(e, t) {
	try {
		let n = ov(e), r = t.getItem(n), i = JSON.parse(r || "");
		if (typeof i == "object" && i) return i;
	} catch {}
	return null;
}
function lv(e, t, n) {
	return (cv(e, n) || {})[sv(t)] || null;
}
function uv(e, t, n, r, i) {
	let a = ov(e), o = sv(t), s = cv(e, i) || {};
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
var dv = {};
function fv(e, t = 10) {
	let n = null;
	return (...r) => {
		n !== null && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
}
function pv({ autoSaveId: e, layout: t, storage: n, panesArray: r, paneSizeBeforeCollapse: i }) {
	if (t.length === 0 || t.length !== r.length) return;
	let a = dv[e];
	a ?? (a = fv(uv, 100), dv[e] = a);
	let o = [...r], s = new Map(i);
	a(e, o, s, t, n);
}
//#endregion
//#region node_modules/paneforge/dist/paneforge.svelte.js
var mv = {
	getItem: (e) => (av(mv), mv.getItem(e)),
	setItem: (e, t) => {
		av(mv), mv.setItem(e, t);
	}
}, hv = new Z_("PaneGroup"), gv = class e {
	static create(t) {
		return hv.set(new e(t));
	}
	opts;
	attachment;
	domContext;
	#e = /* @__PURE__ */ F(null);
	get dragState() {
		return z(this.#e);
	}
	set dragState(e) {
		I(this.#e, e);
	}
	#t = /* @__PURE__ */ F([]);
	get layout() {
		return z(this.#t);
	}
	set layout(e) {
		I(this.#t, e);
	}
	#n = /* @__PURE__ */ F([]);
	get panesArray() {
		return z(this.#n);
	}
	set panesArray(e) {
		I(this.#n, e);
	}
	#r = /* @__PURE__ */ F(!1);
	get panesArrayChanged() {
		return z(this.#r);
	}
	set panesArrayChanged(e) {
		I(this.#r, e, !0);
	}
	#i = /* @__PURE__ */ F(lt({}));
	get paneIdToLastNotifiedSizeMap() {
		return z(this.#i);
	}
	set paneIdToLastNotifiedSizeMap(e) {
		I(this.#i, e, !0);
	}
	paneSizeBeforeCollapseMap = /* @__PURE__ */ new Map();
	prevDelta = 0;
	constructor(e) {
		this.opts = e, this.attachment = f_(this.opts.ref), this.domContext = new d_(this.opts.ref), q_([
			() => this.opts.id.current,
			() => this.layout,
			() => this.panesArray
		], () => D_({
			groupId: this.opts.id.current,
			layout: this.layout,
			panesArray: this.panesArray,
			domContext: this.domContext
		})), Sr(() => B(() => this.#a())), q_([
			() => this.opts.autoSaveId.current,
			() => this.layout,
			() => this.opts.storage.current
		], () => {
			this.opts.autoSaveId.current && pv({
				autoSaveId: this.opts.autoSaveId.current,
				layout: this.layout,
				storage: this.opts.storage.current,
				panesArray: this.panesArray,
				paneSizeBeforeCollapse: this.paneSizeBeforeCollapseMap
			});
		}), q_(() => this.panesArrayChanged, () => {
			if (!this.panesArrayChanged) return;
			this.panesArrayChanged = !1;
			let e = this.layout, t = null;
			if (this.opts.autoSaveId.current) {
				let e = lv(this.opts.autoSaveId.current, this.panesArray, this.opts.storage.current);
				e && (this.paneSizeBeforeCollapseMap = new Map(Object.entries(e.expandToSizes)), t = e.layout);
			}
			t ??= P_({ panesArray: this.panesArray });
			let n = F_({
				layout: t,
				paneConstraints: this.panesArray.map((e) => e.constraints)
			});
			__(e, n) || (this.layout = n, this.opts.onLayout.current?.(n), N_(this.panesArray, n, this.paneIdToLastNotifiedSizeMap));
		});
	}
	setLayout = (e) => {
		this.layout = e;
	};
	registerResizeHandle = (e) => (t) => {
		t.preventDefault();
		let n = this.opts.direction.current, r = this.dragState, i = this.opts.id.current, a = this.opts.keyboardResizeBy.current, o = this.layout, s = this.panesArray, { initialLayout: c } = r ?? {}, l = this.domContext.getDocument(), u = A_({
			groupId: i,
			dragHandleId: e,
			domContext: this.domContext
		}), d = z_({
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
		let p = s.map((e) => e.constraints), m = Q_({
			delta: d,
			layout: c ?? o,
			paneConstraints: p,
			pivotIndices: u,
			trigger: x_(t) ? "keyboard" : "mouse-or-touch"
		}), h = !__(o, m);
		(S_(t) || C_(t)) && this.prevDelta !== d && (this.prevDelta = d, rv(h ? f ? "horizontal" : "vertical" : f ? d < 0 ? "horizontal-min" : "horizontal-max" : d < 0 ? "vertical-min" : "vertical-max", l)), h && (this.setLayout(m), this.opts.onLayout.current?.(m), N_(s, m, this.paneIdToLastNotifiedSizeMap));
	};
	resizePane = (e, t) => {
		let n = this.layout, r = this.panesArray, i = r.map((e) => e.constraints), { paneSize: a, pivotIndices: o } = j_(r, e, n);
		m_(a != null);
		let s = Q_({
			delta: M_(r, e) === r.length - 1 ? a - t : t - a,
			layout: n,
			paneConstraints: i,
			pivotIndices: o,
			trigger: "imperative-api"
		});
		__(n, s) || (this.setLayout(s), this.opts.onLayout.current?.(s), N_(r, s, this.paneIdToLastNotifiedSizeMap));
	};
	startDragging = (e, t) => {
		let n = this.opts.direction.current, r = this.layout, i = L_(e, this.domContext);
		m_(i);
		let a = B_(n, t);
		this.dragState = {
			dragHandleId: e,
			dragHandleRect: i.getBoundingClientRect(),
			initialCursorPosition: a,
			initialLayout: r
		};
	};
	stopDragging = () => {
		nv(), this.dragState = null;
	};
	isPaneCollapsed = (e) => {
		let t = this.panesArray, n = this.layout, { collapsedSize: r = 0, collapsible: i, paneSize: a } = j_(t, e, n);
		return typeof a != "number" || typeof r != "number" ? !1 : i === !0 && h_(a, r);
	};
	expandPane = (e) => {
		let t = this.layout, n = this.panesArray;
		if (!e.constraints.collapsible) return;
		let r = n.map((e) => e.constraints), { collapsedSize: i = 0, paneSize: a, minSize: o = 0, pivotIndices: s } = j_(n, e, t);
		if (a !== i) return;
		let c = this.paneSizeBeforeCollapseMap.get(e.opts.id.current), l = c != null && c >= o ? c : o, u = Q_({
			delta: M_(n, e) === n.length - 1 ? a - l : l - a,
			layout: t,
			paneConstraints: r,
			pivotIndices: s,
			trigger: "imperative-api"
		});
		__(t, u) || (this.setLayout(u), this.opts.onLayout.current?.(u), N_(n, u, this.paneIdToLastNotifiedSizeMap));
	};
	collapsePane = (e) => {
		let t = this.layout, n = this.panesArray;
		if (!e.constraints.collapsible) return;
		let r = n.map((e) => e.constraints), { collapsedSize: i = 0, paneSize: a, pivotIndices: o } = j_(n, e, t);
		if (m_(a != null), a === i) return;
		this.paneSizeBeforeCollapseMap.set(e.opts.id.current, a);
		let s = Q_({
			delta: M_(n, e) === n.length - 1 ? a - i : i - a,
			layout: t,
			paneConstraints: r,
			pivotIndices: o,
			trigger: "imperative-api"
		});
		__(t, s) || (this.layout = s, this.opts.onLayout.current?.(s), N_(n, s, this.paneIdToLastNotifiedSizeMap));
	};
	getPaneSize = (e) => j_(this.panesArray, e, this.layout).paneSize;
	getPaneStyle = (e, t) => {
		let n = this.panesArray, r = this.layout, i = this.dragState;
		return iv({
			defaultSize: t,
			dragState: i,
			layout: r,
			panesArray: n,
			paneIndex: M_(n, e)
		});
	};
	isPaneExpanded = (e) => {
		let { collapsedSize: t = 0, collapsible: n, paneSize: r } = j_(this.panesArray, e, this.layout);
		return !n || r > t;
	};
	registerPane = (e) => {
		let t = [...this.panesArray, e];
		return t.sort((e, t) => {
			let n = e.opts.order.current, r = t.opts.order.current;
			return n == null && r == null ? 0 : n == null ? -1 : r == null ? 1 : n - r;
		}), this.panesArray = t, this.panesArrayChanged = !0, () => {
			let t = [...this.panesArray], n = M_(this.panesArray, e);
			n < 0 || (t.splice(n, 1), this.panesArray = t, delete this.paneIdToLastNotifiedSizeMap[e.opts.id.current], this.panesArrayChanged = !0);
		};
	};
	#a = () => {
		let e = this.opts.id.current, t = O_(e, this.domContext), n = this.panesArray, r = t.map((t) => {
			let r = t.getAttribute("data-pane-resizer-id");
			if (!r) return E_;
			let [i, a] = V_({
				groupId: e,
				handleId: r,
				panesArray: n,
				domContext: this.domContext
			});
			if (i == null || a == null) return E_;
			let o = Lg(t, "keydown", (t) => {
				if (t.defaultPrevented || t.key !== "Enter") return;
				t.preventDefault();
				let n = this.panesArray, a = n.findIndex((e) => e.opts.id.current === i);
				if (a < 0) return;
				let o = n[a];
				m_(o);
				let s = this.layout, c = s[a], { collapsedSize: l = 0, collapsible: u, minSize: d = 0 } = o.constraints;
				if (!(c != null && u)) return;
				let f = Q_({
					delta: h_(c, l) ? d - c : l - c,
					layout: s,
					paneConstraints: n.map((e) => e.constraints),
					pivotIndices: A_({
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
	#o = /* @__PURE__ */ P(() => ({
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
		return z(this.#o);
	}
	set props(e) {
		I(this.#o, e);
	}
}, _v = [
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"End",
	"Home"
], vv = class e {
	static create(t) {
		return new e(t, hv.get());
	}
	opts;
	#e;
	attachment;
	domContext;
	#t = /* @__PURE__ */ P(() => this.#e.dragState?.dragHandleId === this.opts.id.current);
	#n = /* @__PURE__ */ F(!1);
	resizeHandler = null;
	constructor(e, t) {
		this.opts = e, this.#e = t, this.attachment = f_(this.opts.ref), this.domContext = new d_(this.opts.ref), Sr(() => {
			this.opts.disabled.current ? this.resizeHandler = null : this.resizeHandler = this.#e.registerResizeHandle(this.opts.id.current);
		}), Sr(() => {
			let e = this.opts.ref.current;
			if (!e) return;
			let t = this.opts.disabled.current, n = this.resizeHandler, r = z(this.#t);
			if (t || n === null || !r) return;
			let i = (e) => {
				n(e);
			}, a = (e) => {
				n(e);
			}, o = () => {
				e.blur(), this.#e.stopDragging(), this.opts.onDraggingChange.current(!1);
			}, s = this.domContext.getDocument().body, c = this.domContext.getWindow();
			return Ig(V(s, "contextmenu", o), V(s, "mousemove", i), V(s, "touchmove", i, { passive: !1 }), V(s, "mouseleave", a), V(c, "mouseup", o), V(c, "touchend", o));
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
		if (_v.includes(e.key)) {
			e.preventDefault(), this.resizeHandler(e);
			return;
		}
		if (e.key !== "F6") return;
		e.preventDefault();
		let t = O_(this.#e.opts.id.current, this.domContext), n = k_({
			groupId: this.#e.opts.id.current,
			id: this.opts.id.current,
			domContext: this.domContext
		});
		if (n === null) return;
		let r = 0;
		r = e.shiftKey ? n > 0 ? n - 1 : t.length - 1 : n + 1 < t.length ? n + 1 : 0, t[r].focus();
	};
	#o = () => {
		I(this.#n, !1);
	};
	#s = () => {
		I(this.#n, !0);
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
	#p = /* @__PURE__ */ P(() => ({
		id: this.opts.id.current,
		role: "separator",
		"data-direction": this.#e.opts.direction.current,
		"data-pane-group-id": this.#e.opts.id.current,
		"data-active": z(this.#t) ? "pointer" : z(this.#n) ? "keyboard" : void 0,
		"data-enabled": !this.opts.disabled.current,
		"data-pane-resizer-id": this.opts.id.current,
		"data-pane-resizer": "",
		tabIndex: this.opts.tabIndex.current,
		style: {
			cursor: tv(this.#e.opts.direction.current),
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
		return z(this.#p);
	}
	set props(e) {
		I(this.#p, e);
	}
}, yv = class e {
	static create(t) {
		return new e(t, hv.get());
	}
	opts;
	group;
	attachment;
	domContext;
	#e = /* @__PURE__ */ F("");
	#t = /* @__PURE__ */ P(() => ({
		onCollapse: this.opts.onCollapse.current,
		onExpand: this.opts.onExpand.current,
		onResize: this.opts.onResize.current
	}));
	get callbacks() {
		return z(this.#t);
	}
	set callbacks(e) {
		I(this.#t, e);
	}
	#n = /* @__PURE__ */ P(() => ({
		collapsedSize: this.opts.collapsedSize.current,
		collapsible: this.opts.collapsible.current,
		defaultSize: this.opts.defaultSize.current,
		maxSize: this.opts.maxSize.current,
		minSize: this.opts.minSize.current
	}));
	get constraints() {
		return z(this.#n);
	}
	set constraints(e) {
		I(this.#n, e);
	}
	#r = (e) => {
		I(this.#e, e, !0), a_(() => {
			if (this.opts.ref.current) {
				let e = this.opts.ref.current;
				if (getComputedStyle(e).transitionDuration === "0s") {
					I(this.#e, "");
					return;
				}
				let t = (n) => {
					n.propertyName === "flex-grow" && (I(this.#e, ""), e.removeEventListener("transitionend", t));
				};
				e.addEventListener("transitionend", t);
			} else I(this.#e, "");
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
		this.opts = e, this.group = t, this.attachment = f_(this.opts.ref), this.domContext = new d_(this.opts.ref), yo(() => this.group.registerPane(this)), q_(() => Re(this.constraints), () => {
			this.group.panesArrayChanged = !0;
		});
	}
	#i = /* @__PURE__ */ P(() => this.group.isPaneCollapsed(this));
	#a = /* @__PURE__ */ P(() => z(this.#e) === "" ? z(this.#i) ? "collapsed" : "expanded" : z(this.#e));
	#o = /* @__PURE__ */ P(() => ({
		id: this.opts.id.current,
		style: this.group.getPaneStyle(this, this.opts.defaultSize.current),
		"data-pane": "",
		"data-pane-id": this.opts.id.current,
		"data-pane-group-id": this.group.opts.id.current,
		"data-collapsed": z(this.#i) ? "" : void 0,
		"data-expanded": z(this.#i) ? void 0 : "",
		"data-pane-state": z(this.#a),
		...this.attachment
	}));
	get props() {
		return z(this.#o);
	}
	set props(e) {
		I(this.#o, e);
	}
}, bv = /* @__PURE__ */ H("<div><!></div>");
function xv(e, t) {
	let n = Xi();
	E(t, !0);
	let r = q(t, "autoSaveId", 3, null), i = q(t, "id", 3, n), a = q(t, "keyboardResizeBy", 3, null), o = q(t, "onLayoutChange", 3, E_), s = q(t, "storage", 3, mv), c = q(t, "ref", 15, null), l = /* @__PURE__ */ K(t, [
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
	]), u = gv.create({
		id: Q.with(() => i() ?? n),
		ref: Q.with(() => c(), (e) => c(e)),
		autoSaveId: Q.with(() => r()),
		direction: Q.with(() => t.direction),
		keyboardResizeBy: Q.with(() => a()),
		onLayout: Q.with(() => o()),
		storage: Q.with(() => s())
	}), d = () => u.layout, f = u.setLayout, p = () => u.opts.id.current, m = /* @__PURE__ */ P(() => Wg(l, u.props));
	var g = {
		getLayout: d,
		setLayout: f,
		getId: p
	}, _ = U(), v = M(_), y = (e) => {
		var n = U();
		G(M(n), () => t.child, () => ({ props: z(m) })), W(e, n);
	}, b = (e) => {
		var n = bv();
		ro(n, () => ({ ...z(m) })), G(j(n), () => t.children ?? h), A(n), W(e, n);
	};
	return aa(v, (e) => {
		t.child ? e(y) : e(b, -1);
	}), W(e, _), D(g);
}
//#endregion
//#region node_modules/paneforge/dist/components/pane.svelte
var Sv = /* @__PURE__ */ H("<div><!></div>");
function Cv(e, t) {
	let n = Xi();
	E(t, !0);
	let r = q(t, "id", 3, n), i = q(t, "ref", 15, null), a = q(t, "onCollapse", 3, E_), o = q(t, "onExpand", 3, E_), s = q(t, "onResize", 3, E_), c = /* @__PURE__ */ K(t, [
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
	]), l = yv.create({
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
	}), u = l.pane.collapse, d = l.pane.expand, f = l.pane.getSize, p = l.pane.isCollapsed, m = l.pane.isExpanded, g = l.pane.resize, _ = l.pane.getId, v = /* @__PURE__ */ P(() => Wg(c, l.props));
	var y = {
		collapse: u,
		expand: d,
		getSize: f,
		isCollapsed: p,
		isExpanded: m,
		resize: g,
		getId: _
	}, b = U(), x = M(b), S = (e) => {
		var n = U();
		G(M(n), () => t.child, () => ({ props: z(v) })), W(e, n);
	}, ee = (e) => {
		var n = Sv();
		ro(n, () => ({ ...z(v) })), G(j(n), () => t.children ?? h), A(n), W(e, n);
	};
	return aa(x, (e) => {
		t.child ? e(S) : e(ee, -1);
	}), W(e, b), D(y);
}
//#endregion
//#region node_modules/paneforge/dist/components/pane-resizer.svelte
var wv = /* @__PURE__ */ H("<div><!></div>");
function Tv(e, t) {
	let n = Xi();
	E(t, !0);
	let r = q(t, "id", 3, n), i = q(t, "ref", 15, null), a = q(t, "disabled", 3, !1), o = q(t, "onDraggingChange", 3, E_), s = q(t, "tabindex", 3, 0), c = /* @__PURE__ */ K(t, [
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
	]), l = vv.create({
		id: Q.with(() => r()),
		ref: Q.with(() => i(), (e) => i(e)),
		disabled: Q.with(() => a()),
		onDraggingChange: Q.with(() => o()),
		tabIndex: Q.with(() => s())
	}), u = /* @__PURE__ */ P(() => Wg(c, l.props));
	var d = U(), f = M(d), p = (e) => {
		var n = U();
		G(M(n), () => t.child, () => ({ props: z(u) })), W(e, n);
	}, m = (e) => {
		var n = wv();
		ro(n, () => ({ ...z(u) })), G(j(n), () => t.children ?? h), A(n), W(e, n);
	};
	aa(f, (e) => {
		t.child ? e(p) : e(m, -1);
	}), W(e, d), D();
}
//#endregion
//#region src/lib/components/ui/resizable/resizable-handle.svelte
var Ev = /* @__PURE__ */ H("<div class=\"bg-border h-6 w-1 rounded-lg z-10 flex shrink-0\"></div>");
function Dv(e, t) {
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
		let e = /* @__PURE__ */ P(() => Zs("cn-resizable-handle bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[direction=vertical]:h-px data-[direction=vertical]:w-full data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:h-1 data-[direction=vertical]:after:w-full data-[direction=vertical]:after:translate-x-0 data-[direction=vertical]:after:-translate-y-1/2 [&[data-direction=vertical]>div]:rotate-90", t.class));
		_a(o, () => Tv, (t, a) => {
			a(t, vo({
				"data-slot": "resizable-handle",
				get class() {
					return z(e);
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
						W(e, Ev());
					};
					aa(i, (e) => {
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
function Ov(e, t) {
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
		let e = /* @__PURE__ */ P(() => Zs("cn-resizable-panel-group flex h-full w-full data-[direction=vertical]:flex-col", t.class));
		_a(o, () => xv, (t, a) => {
			po(a(t, vo({
				"data-slot": "resizable-pane-group",
				get class() {
					return z(e);
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
//#region node_modules/svelte/src/easing/index.js
function kv(e) {
	let t = e - 1;
	return t * t * t + 1;
}
function Av(e) {
	return --e * e * e * e * e + 1;
}
//#endregion
//#region node_modules/svelte/src/animate/index.js
function jv(e, { from: t, to: n }, r = {}) {
	var { delay: i = 0, duration: a = (e) => Math.sqrt(e) * 120, easing: o = kv } = r, s = getComputedStyle(e), c = s.transform === "none" ? "" : s.transform, [l, u] = s.transformOrigin.split(" ").map(parseFloat);
	l /= e.clientWidth, u /= e.clientHeight;
	var d = Mv(e), f = e.clientWidth / n.width / d, p = e.clientHeight / n.height / d, m = t.left + t.width * l, h = t.top + t.height * u, g = n.left + n.width * l, _ = n.top + n.height * u, v = (m - g) * f, y = (h - _) * p, b = t.width / n.width, x = t.height / n.height;
	return {
		delay: i,
		duration: typeof a == "function" ? a(Math.sqrt(v * v + y * y)) : a,
		easing: o,
		css: (e, t) => `transform: ${c} translate(${t * v}px, ${t * y}px) scale(${e + t * b}, ${e + t * x});`
	};
}
function Mv(e) {
	if ("currentCSSZoom" in e) return e.currentCSSZoom;
	for (var t = e, n = 1; t !== null;) n *= +getComputedStyle(t).zoom, t = t.parentElement;
	return n;
}
//#endregion
//#region src/lib/components/ui/empty/empty.svelte
var Nv = /* @__PURE__ */ H("<div><!></div>");
function Pv(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Nv();
	ro(i, (e) => ({
		"data-slot": "empty",
		class: e,
		...r
	}), [() => Zs("gap-4 rounded-xl border-dashed p-6 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance", t.class)]), G(j(i), () => t.children ?? h), A(i), po(i, (e) => n(e), () => n()), W(e, i), D();
}
//#endregion
//#region src/lib/components/ui/empty/empty-header.svelte
var Fv = /* @__PURE__ */ H("<div><!></div>");
function Iv(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Fv();
	ro(i, (e) => ({
		"data-slot": "empty-header",
		class: e,
		...r
	}), [() => Zs("gap-2 flex max-w-sm flex-col items-center", t.class)]), G(j(i), () => t.children ?? h), A(i), po(i, (e) => n(e), () => n()), W(e, i), D();
}
//#endregion
//#region src/lib/components/ui/empty/empty-media.svelte
var Lv = hc({
	base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
	variants: { variant: {
		default: "bg-transparent",
		icon: "bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-4"
	} },
	defaultVariants: { variant: "default" }
}), Rv = /* @__PURE__ */ H("<div><!></div>");
function zv(e, t) {
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
	var a = Rv();
	ro(a, (e) => ({
		"data-slot": "empty-icon",
		"data-variant": r(),
		class: e,
		...i
	}), [() => Zs(Lv({ variant: r() }), t.class)]), G(j(a), () => t.children ?? h), A(a), po(a, (e) => n(e), () => n()), W(e, a), D();
}
//#endregion
//#region src/lib/components/ui/empty/empty-title.svelte
var Bv = /* @__PURE__ */ H("<div><!></div>");
function Vv(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Bv();
	ro(i, (e) => ({
		"data-slot": "empty-title",
		class: e,
		...r
	}), [() => Zs("font-heading text-sm font-medium tracking-tight", t.class)]), G(j(i), () => t.children ?? h), A(i), po(i, (e) => n(e), () => n()), W(e, i), D();
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card.svelte
function Hv(e, t) {
	E(t, !0);
	let n = q(t, "open", 15, !1), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"open"
	]);
	var i = U();
	_a(M(i), () => Fm, (e, t) => {
		t(e, vo(() => r, {
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
function Uv(e, t) {
	let n = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	var r = U();
	_a(M(r), () => bu, (e, t) => {
		t(e, vo(() => n));
	}), W(e, r);
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-content.svelte
function Wv(e, t) {
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
	Uv(e, vo(() => t.portalProps, {
		children: (e, o) => {
			var s = U(), c = M(s);
			{
				let e = /* @__PURE__ */ P(() => Zs("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground w-64 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 origin-(--transform-origin) outline-hidden", t.class));
				_a(c, () => Bm, (t, o) => {
					o(t, vo({
						"data-slot": "hover-card-content",
						get align() {
							return r();
						},
						get sideOffset() {
							return i();
						},
						get class() {
							return z(e);
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
function Gv(e, t) {
	E(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref"
	]);
	var i = U();
	_a(M(i), () => Hm, (e, t) => {
		t(e, vo({ "data-slot": "hover-card-trigger" }, () => r, {
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
var Kv = /* @__PURE__ */ H("<!> <!>", 1), qv = /* @__PURE__ */ H("<p class=\"text-sm\"> </p>"), Jv = /* @__PURE__ */ H("<div class=\"flex justify-between space-x-4\"><!> <div class=\"space-y-1\"><h4 class=\"text-sm font-semibold\"> </h4> <!></div></div>");
function Yv(e, t) {
	E(t, !0);
	var n = Jv(), r = j(n), i = (e) => {
		Um(e, {
			children: (e, n) => {
				var r = Kv(), i = M(r);
				Wm(i, { get src() {
					return t.user.profile.image;
				} }), Gm(bt(i, 2), {
					children: (e, t) => {
						ot(), W(e, Yi("Profile Image"));
					},
					$$slots: { default: !0 }
				}), W(e, r);
			},
			$$slots: { default: !0 }
		});
	};
	aa(r, (e) => {
		t.user.profile.image !== "" && e(i);
	});
	var a = bt(r, 2), o = j(a), s = j(o, !0);
	A(o);
	var c = bt(o, 2), l = (e) => {
		var n = qv(), r = j(n, !0);
		A(n), Ar(() => Qi(r, t.user.profile.text)), W(e, n);
	};
	aa(c, (e) => {
		t.user.profile.text !== "" && e(l);
	}), A(a), A(n), Ar(() => Qi(s, t.user.name)), W(e, n), D();
}
//#endregion
//#region src/features/userlist/Userlist.svelte
var Xv = "text-purple-600", Zv = "text-red-600", Qv = "text-amber-600", $v = "text-white", ey = "text-gray-600", ty = (e) => e >= 255 ? Xv : e >= 3 ? Zv : e == 2 ? Qv : e >= 1 ? $v : ey, ny = /* @__PURE__ */ H("<li><!></li>"), ry = /* @__PURE__ */ H("<ul class=\"overflow-auto no-scrollbar\"></ul> <!>", 1), iy = /* @__PURE__ */ H("<!> <!>", 1), ay = /* @__PURE__ */ H("<div><!></div>");
function oy(e, t) {
	E(t, !0);
	let n = () => zt(Xr, "$userlistStore", r), [r, i] = Bt(), a = /* @__PURE__ */ P(() => n().userlist), o = /* @__PURE__ */ P(() => z(a).length > 0), s = /* @__PURE__ */ F(null);
	var c = ay(), l = j(c), u = (e) => {
		Hv(e, {
			children: (e, t) => {
				var n = ry(), r = M(n);
				da(r, 29, () => z(a), (e) => e.name, (e, t) => {
					var n = ny();
					Gv(j(n), {
						children: (e, n) => {
							ot();
							var r = Yi();
							Ar(() => Qi(r, z(t).name)), W(e, r);
						},
						$$slots: { default: !0 }
					}), A(n), Ar((e) => za(n, 1, e), [() => Na(Zs(ty(z(t).rank), "font-bold"))]), Ri("mouseenter", n, () => I(s, z(t), !0)), Da(n, () => jv, () => ({
						duration: 200,
						easing: Av
					})), Oa(3, n, () => Rh, () => ({ duration: 200 })), W(e, n);
				}), A(r);
				var i = bt(r, 2), o = (e) => {
					Wv(e, {
						children: (e, t) => {
							Yv(e, { get user() {
								return z(s);
							} });
						},
						$$slots: { default: !0 }
					});
				};
				aa(i, (e) => {
					z(s) && e(o);
				}), W(e, n);
			},
			$$slots: { default: !0 }
		});
	}, d = (e) => {
		Pv(e, {
			children: (e, t) => {
				Iv(e, {
					children: (e, t) => {
						var n = iy(), r = M(n);
						zv(r, {
							variant: "icon",
							children: (e, t) => {
								Uh(e, {
									get icon() {
										return qh;
									},
									class: "size-5 motion-safe:animate-[spin_6s_linear_infinite]"
								});
							},
							$$slots: { default: !0 }
						}), Vv(bt(r, 2), {
							class: "select-none",
							children: (e, t) => {
								ot(), W(e, Yi("No users"));
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
	aa(l, (e) => {
		z(o) ? e(u) : e(d, -1);
	}), A(c), Ar((e) => za(c, 1, e), [() => Na(Zs(t.class))]), W(e, c), D(), i();
}
//#endregion
//#region src/lib/components/ui/textarea/textarea.svelte
var sy = /* @__PURE__ */ H("<textarea></textarea>");
function cy(e, t) {
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
	var o = sy();
	Rn(o), ro(o, (e) => ({
		"data-slot": i(),
		class: e,
		...a
	}), [() => Zs("border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-lg border bg-transparent px-2.5 py-2 text-base transition-colors focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50", t.class)]), po(o, (e) => n(e), () => n()), so(o, r), W(e, o), D();
}
//#endregion
//#region src/features/chat/ChatForm.svelte
var ly = /* @__PURE__ */ H("<!> <!>", 1), uy = /* @__PURE__ */ H("<form><!></form>");
function dy(e, t) {
	E(t, !0);
	let n = /* @__PURE__ */ F(""), r = async (e) => {
		e.preventDefault(), console.log(z(n)), I(n, "");
	};
	var i = uy();
	yh(j(i), {
		class: "flex-1 flex flex-row",
		children: (e, t) => {
			_h(e, {
				orientation: "horizontal",
				class: "flex-1 flex flex-row items-start justify-start gap-0",
				children: (e, t) => {
					var r = ly(), i = M(r);
					cy(i, {
						required: !0,
						class: "flex-9 h-full rounded-none border-none resize-none",
						autocomplete: "off",
						placeholder: "Chat message",
						get value() {
							return z(n);
						},
						set value(e) {
							I(n, e, !0);
						}
					}), yc(bt(i, 2), {
						type: "submit",
						class: "flex-1 h-full rounded-none border-none",
						children: (e, t) => {
							Uh(e, {
								get icon() {
									return Kh;
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
	}), A(i), Ar((e) => za(i, 1, e), [() => Na(Zs(t.class, "flex flex-row"))]), Ri("submit", i, r), W(e, i), D();
}
//#endregion
//#region src/features/auth/GuestLoginForm.svelte
var fy = /* @__PURE__ */ H("<!> <!>", 1), py = /* @__PURE__ */ H("<form><!></form>");
function my(e, t) {
	E(t, !0);
	let n = () => zt(Ph, "$authStore", r), [r, i] = Bt(), a = /* @__PURE__ */ P(() => n().username), o = /* @__PURE__ */ P(() => n().status), s = async (e) => {
		if (e.preventDefault(), !z(o)) try {
			Ht(Ph, B(n).status = !0, B(n)), await new Promise((e) => setTimeout(e, 500)), await Mh(z(a));
		} catch (e) {
			console.error(e);
		} finally {
			Ht(Ph, B(n).status = !1, B(n)), Ht(Ph, B(n).username = "", B(n)), Ht(Ph, B(n).password = void 0, B(n));
		}
	};
	var c = py();
	yh(j(c), {
		children: (e, t) => {
			_h(e, {
				orientation: "horizontal",
				class: "flex flex-row items-start justify-start gap-0",
				children: (e, t) => {
					var r = fy(), i = M(r);
					{
						let e = /* @__PURE__ */ P(() => z(a) === "");
						yc(i, {
							type: "submit",
							class: "flex-2 rounded-none border-none",
							get disabled() {
								return z(e);
							},
							children: (e, t) => {
								ot(), W(e, Yi("Guest Login"));
							},
							$$slots: { default: !0 }
						});
					}
					Ch(bt(i, 2), {
						required: !0,
						class: "flex-8 rounded-none border-none",
						type: "text",
						autocomplete: "name",
						placeholder: "Username",
						get disabled() {
							return z(o);
						},
						get value() {
							return n().username;
						},
						set value(e) {
							Ht(Ph, B(n).username = e, B(n));
						}
					}), W(e, r);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), A(c), Ar((e) => za(c, 1, e), [() => Na(Zs(t.class))]), Ri("submit", c, s), W(e, c), D(), i();
}
//#endregion
//#region src/shared/components/layout/CytubeFluidLayout.svelte
var hy = /* @__PURE__ */ H("<!> <!> <!>", 1), gy = /* @__PURE__ */ H("<!> <!> <!>", 1), _y = /* @__PURE__ */ H("<div class=\"flex flex-col h-full items-center justify-center p-6\"><span class=\"font-semibold\">Features</span></div>"), vy = /* @__PURE__ */ H("<!> <!> <!>", 1), yy = /* @__PURE__ */ H("<div class=\"flex flex-row h-full items-center justify-center p-6\"><span class=\"font-semibold\">Player</span></div>"), by = /* @__PURE__ */ H("<div class=\"flex flex-col h-full items-center justify-center p-6\"><span class=\"font-semibold\">Playlist</span></div>"), xy = /* @__PURE__ */ H("<!> <!> <!>", 1), Sy = /* @__PURE__ */ H("<!> <!> <!>", 1);
function Cy(e, t) {
	E(t, !1);
	let n = () => zt(ei, "$clientStore", r), [r, i] = Bt();
	mo(), Ov(e, {
		direction: "horizontal",
		class: "w-full flex-1 border",
		children: (e, t) => {
			var r = Sy(), i = M(r);
			Cv(i, {
				defaultSize: 45,
				minSize: 25,
				maxSize: 50,
				children: (e, t) => {
					Ov(e, {
						direction: "vertical",
						class: "flex-1",
						children: (e, t) => {
							var r = vy(), i = M(r);
							Cv(i, {
								defaultSize: 70,
								children: (e, t) => {
									Ov(e, {
										direction: "vertical",
										class: "flex flex-col h-full",
										children: (e, t) => {
											var r = gy(), i = M(r);
											Cv(i, {
												defaultSize: 90,
												children: (e, t) => {
													Ov(e, {
														direction: "horizontal",
														children: (e, t) => {
															var n = hy(), r = M(n);
															Cv(r, {
																defaultSize: 20,
																children: (e, t) => {
																	oy(e, { class: "flex flex-col items-start justify-start h-full px-1 py-0.5" });
																},
																$$slots: { default: !0 }
															});
															var i = bt(r, 2);
															Dv(i, {}), Cv(bt(i, 2), {
																defaultSize: 80,
																class: "flex flex-col items-center justify-center h-full",
																children: (e, t) => {
																	ot(), W(e, Yi("Chat"));
																},
																$$slots: { default: !0 }
															}), W(e, n);
														},
														$$slots: { default: !0 }
													});
												},
												$$slots: { default: !0 }
											});
											var a = bt(i, 2);
											Dv(a, {});
											var o = bt(a, 2), s = (e) => {
												Cv(e, {
													defaultSize: 10,
													minSize: 10,
													maxSize: 80,
													class: "flex",
													children: (e, t) => {
														dy(e, { class: "flex-1 flex-row" });
													},
													$$slots: { default: !0 }
												});
											}, c = (e) => {
												my(e, { class: "w-full" });
											};
											aa(o, (e) => {
												n().logged_in ? e(s) : e(c, -1);
											}), W(e, r);
										},
										$$slots: { default: !0 }
									});
								},
								$$slots: { default: !0 }
							});
							var a = bt(i, 2);
							Dv(a, {}), Cv(bt(a, 2), {
								defaultSize: 30,
								children: (e, t) => {
									W(e, _y());
								},
								$$slots: { default: !0 }
							}), W(e, r);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			});
			var a = bt(i, 2);
			Dv(a, {}), Cv(bt(a, 2), {
				defaultSize: 65,
				minSize: 50,
				maxSize: 75,
				children: (e, t) => {
					Ov(e, {
						direction: "vertical",
						class: "flex-1",
						children: (e, t) => {
							var n = xy(), r = M(n);
							Cv(r, {
								defaultSize: 70,
								children: (e, t) => {
									W(e, yy());
								},
								$$slots: { default: !0 }
							});
							var i = bt(r, 2);
							Dv(i, {}), Cv(bt(i, 2), {
								defaultSize: 30,
								children: (e, t) => {
									W(e, by());
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
var wy = /* @__PURE__ */ H("<main class=\"flex flex-col flex-1\"><!></main>");
function Ty(e) {
	var t = wy();
	Cy(j(t), {}), A(t), W(e, t);
}
//#endregion
//#region src/shared/utils/upgrades.ts
var Ey = () => {
	let e = document.getElementById("wrap");
	e && e.remove();
}, Dy = () => {
	let e = document.getElementById("useroptions");
	e && e.remove();
	let t = document.getElementById("emotelist");
	t && t.remove();
	let n = document.getElementById("channeloptions");
	n && n.remove();
	let r = document.getElementById("pmbar");
	r && r.remove();
}, Oy = () => {
	let e = document.getElementById("footer");
	e && e.remove();
}, ky = () => {
	document.body.className = "dark override-theme min-h-screen flex flex-col";
}, Ay = async () => {
	$i(pg, {
		target: document.body,
		anchor: document.body.firstChild ? document.body.firstChild : void 0
	});
}, jy = async () => {
	$i(Ty, {
		target: document.body,
		anchor: document.body.firstChild ? document.body.firstChild : void 0
	});
}, My = async () => {
	Ey(), Dy(), Oy(), ky(), await jy(), await Ay(), await fr();
}, Ny = async () => {
	let e = ui();
	try {
		await Ci(), await My();
	} catch (t) {
		throw e(), t;
	}
};
//#endregion
export { Ny as init };
