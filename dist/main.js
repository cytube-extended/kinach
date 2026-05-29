//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, a) => (a = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), l = Array.isArray, u = Array.prototype.indexOf, d = Array.prototype.includes, f = Array.from, p = Object.defineProperty, m = Object.getOwnPropertyDescriptor, h = Object.getOwnPropertyDescriptors, g = Object.prototype, _ = Array.prototype, v = Object.getPrototypeOf, y = Object.isExtensible;
function b(e) {
	return typeof e == "function";
}
var x = () => {};
function ee(e) {
	return e();
}
function te(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function S() {
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
var ne = 1 << 24, re = 1024, ie = 2048, ae = 4096, oe = 8192, se = 16384, ce = 32768, le = 1 << 25, ue = 65536, de = 1 << 19, fe = 1 << 20, C = 1 << 25, pe = 65536, me = 1 << 21, he = 1 << 22, ge = 1 << 23, _e = Symbol("$state"), ve = Symbol("legacy props"), ye = Symbol(""), be = Symbol("attributes"), xe = Symbol("class"), Se = Symbol("style"), Ce = Symbol("text"), we = Symbol("form reset"), Te = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Ee = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function De(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function Oe() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function ke(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function Ae(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function je() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Me(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Ne() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Pe(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Fe() {
	throw Error("https://svelte.dev/e/set_context_after_init");
}
function Ie() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Le() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Re() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ze() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/constants.js
var Be = {}, Ve = Symbol("uninitialized"), He = "http://www.w3.org/1999/xhtml", Ue = "@attach";
function We() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Ge(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ke() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function qe() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var w = !1;
function Je(e) {
	w = e;
}
var T;
function Ye(e) {
	if (e === null) throw Ge(), Be;
	return T = e;
}
function Xe() {
	return Ye(/* @__PURE__ */ Gn(T));
}
function E(e) {
	if (w) {
		if (/* @__PURE__ */ Gn(T) !== null) throw Ge(), Be;
		T = e;
	}
}
function Ze(e = 1) {
	if (w) {
		for (var t = e, n = T; t--;) n = /* @__PURE__ */ Gn(n);
		T = n;
	}
}
function Qe(e = !0) {
	for (var t = 0, n = T;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Gn(n);
		e && n.remove(), n = i;
	}
}
function $e(e) {
	if (!e || e.nodeType !== 8) throw Ge(), Be;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function et(e) {
	return e === this.v;
}
function tt(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function nt(e) {
	return !tt(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var rt = !1, it = !1;
function at() {
	it = !0;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/clone.js
var ot = [];
function st(e, t = !1, n = !1) {
	return ct(e, /* @__PURE__ */ new Map(), "", ot, null, n);
}
function ct(e, t, n, r, i = null, a = !1) {
	if (typeof e == "object" && e) {
		var o = t.get(e);
		if (o !== void 0) return o;
		if (e instanceof Map) return new Map(e);
		if (e instanceof Set) return new Set(e);
		if (l(e)) {
			var s = Array(e.length);
			t.set(e, s), i !== null && t.set(i, s);
			for (var c = 0; c < e.length; c += 1) {
				var u = e[c];
				c in e && (s[c] = ct(u, t, n, r, null, a));
			}
			return s;
		}
		if (v(e) === g) {
			s = {}, t.set(e, s), i !== null && t.set(i, s);
			for (var d of Object.keys(e)) s[d] = ct(e[d], t, n, r, null, a);
			return s;
		}
		if (e instanceof Date) return structuredClone(e);
		if (typeof e.toJSON == "function" && !a) return ct(e.toJSON(), t, n, r, e);
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
var lt = null;
function ut(e) {
	lt = e;
}
function dt(e) {
	return gt("getContext").get(e);
}
function ft(e, t) {
	let n = gt("setContext");
	if (rt) {
		var r = I.f;
		!Pr && r & 32 && !lt.i || Fe();
	}
	return n.set(e, t), t;
}
function pt(e) {
	return gt("hasContext").has(e);
}
function mt() {
	return gt("getAllContexts");
}
function D(e, t = !1, n) {
	lt = {
		p: lt,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: I,
		l: it && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function O(e) {
	var t = lt, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) cr(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, lt = t.p, e ?? {};
}
function ht() {
	return !it || lt !== null && lt.l === null;
}
function gt(e) {
	return lt === null && De(e), lt.c ??= new Map(_t(lt) || void 0);
}
function _t(e) {
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
var vt = [];
function yt() {
	var e = vt;
	vt = [], te(e);
}
function bt(e) {
	if (vt.length === 0 && !Kt) {
		var t = vt;
		queueMicrotask(() => {
			t === vt && yt();
		});
	}
	vt.push(e);
}
function xt() {
	for (; vt.length > 0;) yt();
}
function St(e) {
	var t = I;
	if (t === null) return Pr.f |= ge, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Ct(e, t);
}
function Ct(e, t) {
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
var wt = ~(ie | ae | re);
function Tt(e, t) {
	e.f = e.f & wt | t;
}
function Et(e) {
	e.f & 512 || e.deps === null ? Tt(e, re) : Tt(e, ae);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Dt(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= pe, Dt(t.deps));
}
function Ot(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Dt(e.deps), Tt(e, re);
}
//#endregion
//#region node_modules/svelte/src/store/utils.js
function kt(e, t, n) {
	if (e == null) return t(void 0), n && n(void 0), x;
	let r = R(() => e.subscribe(t, n));
	return r.unsubscribe ? () => r.unsubscribe() : r;
}
//#endregion
//#region node_modules/svelte/src/store/shared/index.js
var At = [];
function jt(e, t = x) {
	let n = null, r = /* @__PURE__ */ new Set();
	function i(t) {
		if (tt(e, t) && (e = t, n)) {
			let t = !At.length;
			for (let t of r) t[1](), At.push(t, e);
			if (t) {
				for (let e = 0; e < At.length; e += 2) At[e][0](At[e + 1]);
				At.length = 0;
			}
		}
	}
	function a(t) {
		i(t(e));
	}
	function o(o, s = x) {
		let c = [o, s];
		return r.add(c), r.size === 1 && (n = t(i, a) || x), o(e), () => {
			r.delete(c), r.size === 0 && n && (n(), n = null);
		};
	}
	return {
		set: i,
		update: a,
		subscribe: o
	};
}
function Mt(e) {
	let t;
	return kt(e, (e) => t = e)(), t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Nt = !1, Pt = !1, Ft = Symbol("unmounted");
function It(e, t, n) {
	let r = n[t] ??= {
		store: null,
		source: /* @__PURE__ */ An(void 0),
		unsubscribe: x
	};
	if (r.store !== e && !(Ft in n)) if (r.unsubscribe(), r.store = e ?? null, e == null) r.source.v = void 0, r.unsubscribe = x;
	else {
		var i = !0;
		r.unsubscribe = kt(e, (e) => {
			i ? r.source.v = e : M(r.source, e);
		}), i = !1;
	}
	return e && Ft in n ? Mt(e) : L(r.source);
}
function Lt() {
	let e = {};
	function t() {
		or(() => {
			for (var t in e) e[t].unsubscribe();
			p(e, Ft, {
				enumerable: !1,
				value: !0
			});
		});
	}
	return [e, t];
}
function Rt(e, t) {
	Nt = !0;
	try {
		e.set(t);
	} finally {
		Nt = !1;
	}
}
function zt(e, t, n) {
	return Rt(e, n), t;
}
function Bt(e) {
	var t = Pt;
	try {
		return Pt = !1, [e(), Pt];
	} finally {
		Pt = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var Vt = null, Ht = null, k = null, Ut = null, Wt = null, Gt = null, Kt = !1, qt = !1, Jt = null, Yt = null, Xt = 0, Zt = 1, Qt = class e {
	id = Zt++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
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
	constructor() {
		Ht === null ? Vt = Ht = this : (Ht.#n = this, this.#t = Ht), Ht = this;
	}
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
			for (var r of n.d) Tt(r, ie), t(r);
			for (r of n.m) Tt(r, ae), t(r);
		}
		this.#m.add(e);
	}
	#_() {
		this.#e = !0, Xt++ > 1e3 && (this.#C(), en());
		for (let e of this.#d) this.#f.delete(e), Tt(e, ie), this.schedule(e);
		for (let e of this.#f) Tt(e, ae), this.schedule(e);
		let t = this.#l;
		this.#l = [], this.apply();
		var n = Jt = [], r = [], i = Yt = [];
		for (let e of t) try {
			this.#v(e, n, r);
		} catch (t) {
			throw cn(e), this.#g() || this.discard(), t;
		}
		if (k = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (Jt = null, Yt = null, this.#g()) {
			this.#x(r), this.#x(n);
			for (let [e, t] of this.#p) sn(e, t);
			i.length > 0 && k.#_();
			return;
		}
		let o = this.#y();
		if (o) {
			this.#x(r), this.#x(n), o.#b(this);
			return;
		}
		this.#d.clear(), this.#f.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), Ut = this, nn(r), nn(n), Ut = null, this.#c?.resolve();
		var s = k;
		if (this.#o === 0 && (this.#l.length === 0 || s !== null) && (this.#C(), rt && (this.#S(), k = s)), this.#l.length > 0) if (s !== null) {
			let e = s;
			e.#l.push(...this.#l.filter((t) => !e.#l.includes(t)));
		} else s = this;
		s !== null && s.#_();
	}
	#v(e, t, n) {
		e.f ^= re;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#p.has(r)) && r.fn !== null) {
				a ? r.f ^= re : i & 4 ? t.push(r) : rt && i & 16777224 ? n.push(r) : Yr(r) && (i & 16 && this.#f.add(r), ei(r));
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
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		this.transfer_effects(e.#d, e.#f);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#f.delete(i), Tt(i, ie), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#C(), k = this, this.#_();
	}
	#x(e) {
		for (var t = 0; t < e.length; t += 1) Ot(e[t], this.#d, this.#f);
	}
	capture(e, t, n = !1) {
		e.v !== Ve && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), Wt?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		k = this;
	}
	deactivate() {
		k = null, Wt = null;
	}
	flush() {
		try {
			qt = !0, k = this, this.#_();
		} finally {
			Xt = 0, Gt = null, Jt = null, Yt = null, qt = !1, k = null, Wt = null, Dn.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear(), this.#a.clear(), this.#C(), this.#c?.resolve();
	}
	register_created_effect(e) {
		this.#u.push(e);
	}
	#S() {
		for (let l = Vt; l !== null; l = l.#n) {
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
				n && t.promise.then(n.resolve).catch(n.reject);
			}
			if (l.#e) {
				var r = [...l.current.keys()].filter((e) => !l.current.get(e)[1] && !this.current.has(e));
				if (r.length === 0) e && l.discard();
				else if (t.length > 0) {
					if (e) for (let e of this.#m) l.unskip_effect(e, (e) => {
						e.f & 4194320 ? l.schedule(e) : l.#x([e]);
					});
					l.activate();
					var i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
					for (var o of t) rn(o, r, i, a);
					a = /* @__PURE__ */ new Map();
					var s = [...l.current].filter(([e, t]) => {
						let n = this.current.get(e);
						return n ? n[0] !== t[0] || n[1] !== t[1] : !0;
					}).map(([e]) => e);
					if (s.length > 0) for (let e of this.#u) !(e.f & 155648) && an(e, s, a) && (e.f & 4194320 ? (Tt(e, ie), l.schedule(e)) : l.#d.add(e));
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
		this.#h || (this.#h = !0, bt(() => {
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
		return (this.#c ??= S()).promise;
	}
	static ensure() {
		if (k === null) {
			let t = k = new e();
			!qt && !Kt && bt(() => {
				t.#e || t.flush();
			});
		}
		return k;
	}
	apply() {
		if (!rt || !this.is_fork && this.#t === null && this.#n === null) {
			Wt = null;
			return;
		}
		Wt = /* @__PURE__ */ new Map();
		for (let [e, [t]] of this.current) Wt.set(e, t);
		for (let t = Vt; t !== null; t = t.#n) if (!(t === this || t.is_fork)) {
			var e = !1;
			if (t.id < this.id) {
				for (let [n, [, r]] of t.current) if (!r && this.current.has(n)) {
					e = !0;
					break;
				}
			}
			if (!e) for (let [e, n] of t.previous) Wt.has(e) || Wt.set(e, n);
		}
	}
	schedule(e) {
		if (Gt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (Jt !== null && t === I && (rt || (Pr === null || !(Pr.f & 2)) && !Nt)) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= re;
			}
		}
		this.#l.push(t);
	}
	#C() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null ? Vt = t : e.#n = t, t === null ? Ht = e : t.#t = e, this.linked = !1;
		}
	}
};
function $t(e) {
	var t = Kt;
	Kt = !0;
	try {
		var n;
		for (e && (k !== null && !k.is_fork && k.flush(), n = e());;) {
			if (xt(), k === null) return n;
			k.flush();
		}
	} finally {
		Kt = t;
	}
}
function en() {
	try {
		Ne();
	} catch (e) {
		Ct(e, Gt);
	}
}
var tn = null;
function nn(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Yr(r) && (tn = /* @__PURE__ */ new Set(), ei(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && wr(r), tn?.size > 0)) {
				Dn.clear();
				for (let e of tn) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) tn.has(n) && (tn.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || ei(n);
					}
				}
				tn.clear();
			}
		}
		tn = null;
	}
}
function rn(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? rn(i, t, n, r) : e & 4194320 && !(e & 2048) && an(i, t, r) && (Tt(i, ie), on(i));
	}
}
function an(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (d.call(t, r)) return !0;
		if (r.f & 2 && an(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function on(e) {
	k.schedule(e);
}
function sn(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), Tt(e, re);
		for (var n = e.first; n !== null;) sn(n, t), n = n.next;
	}
}
function cn(e) {
	Tt(e, re);
	for (var t = e.first; t !== null;) cn(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function ln(e) {
	let t = 0, n = kn(0), r;
	return () => {
		ar() && (L(n), mr(() => (t === 0 && (r = R(() => e(() => Nn(n)))), t += 1, () => {
			bt(() => {
				--t, t === 0 && (r?.(), r = void 0, Nn(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var un = ue | de;
function dn(e, t, n, r) {
	new fn(e, t, n, r);
}
var fn = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = w ? T : null;
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
	#h = ln(() => (this.#m = kn(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = I;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = I.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = gr(() => {
			if (w) {
				let e = this.#t;
				Xe();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#v() : this.#g();
			} else this.#y();
		}, un), w && (this.#e = T);
	}
	#g() {
		try {
			this.#a = vr(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed;
		t && (this.#s = vr(() => {
			t(this.#e, () => e, () => () => {});
		}));
	}
	#v() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = vr(() => e(this.#e)), bt(() => {
			var e = this.#c = document.createDocumentFragment(), t = Un();
			e.append(t), this.#a = this.#x(() => vr(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, Tr(this.#o, () => {
				this.#o = null;
			}), this.#b(k));
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = vr(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				kr(this.#a, e);
				let t = this.#n.pending;
				this.#o = vr(() => t(this.#e));
			} else this.#b(k);
		} catch (e) {
			this.error(e);
		}
	}
	#b(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Ot(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(e) {
		var t = I, n = Pr, r = lt;
		Lr(this.#i), Ir(this.#i), ut(this.#i.ctx);
		try {
			return Qt.ensure(), e();
		} catch (e) {
			return St(e), null;
		} finally {
			Lr(t), Ir(n), ut(r);
		}
	}
	#S(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#b(t), this.#o && Tr(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, bt(() => {
			this.#d = !1, this.#m && jn(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), L(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		k?.is_fork ? (this.#a && k.skip_effect(this.#a), this.#o && k.skip_effect(this.#o), this.#s && k.skip_effect(this.#s), k.on_fork_commit(() => {
			this.#C(e);
		})) : this.#C(e);
	}
	#C(e) {
		this.#a &&= (Sr(this.#a), null), this.#o &&= (Sr(this.#o), null), this.#s &&= (Sr(this.#s), null), w && (Ye(this.#t), Ze(), Ye(Qe()));
		var t = this.#n.onerror;
		let n = this.#n.failed;
		var r = !1, i = !1;
		let a = () => {
			if (r) {
				qe();
				return;
			}
			r = !0, i && ze(), this.#s !== null && Tr(this.#s, () => {
				this.#s = null;
			}), this.#x(() => {
				this.#y();
			});
		}, o = (e) => {
			try {
				i = !0, t?.(e, a), i = !1;
			} catch (e) {
				Ct(e, this.#i && this.#i.parent);
			}
			n && (this.#s = this.#x(() => {
				try {
					return vr(() => {
						var t = I;
						t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
					});
				} catch (e) {
					return Ct(e, this.#i.parent), null;
				}
			}));
		};
		bt(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				Ct(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => Ct(e, this.#i && this.#i.parent)) : o(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function pn(e, t, n, r) {
	let i = ht() ? _n : bn;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = I, s = mn(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		if (!(o.f & 16384)) {
			s();
			try {
				r(e);
			} catch (e) {
				Ct(e, o);
			}
			hn();
		}
	}
	var u = gn();
	if (n.length === 0) {
		c.then(() => l(t.map(i))).finally(u);
		return;
	}
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ yn(e))).then((e) => l([...t.map(i), ...e])).catch((e) => Ct(e, o)).finally(u);
	}
	c ? c.then(() => {
		s(), d(), hn();
	}) : d();
}
function mn() {
	var e = I, t = Pr, n = lt, r = k;
	return function(i = !0) {
		Lr(e), Ir(t), ut(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function hn(e = !0) {
	Lr(null), Ir(null), ut(null), e && k?.deactivate();
}
function gn() {
	var e = I, t = e.b, n = k, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function _n(e) {
	var t = 2 | ie;
	return I !== null && (I.f |= de), {
		ctx: lt,
		deps: null,
		effects: null,
		equals: et,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: Ve,
		wv: 0,
		parent: I,
		ac: null
	};
}
var vn = Symbol("obsolete");
/* @__NO_SIDE_EFFECTS__ */
function yn(e, t, n) {
	let r = I;
	r === null && Oe();
	var i = void 0, a = kn(Ve), o = !Pr, s = /* @__PURE__ */ new Set();
	return pr(() => {
		var t = I, n = S();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== Te && n.reject(e);
			}).finally(hn);
		} catch (e) {
			n.reject(e), hn();
		}
		var c = k;
		if (o) {
			if (t.f & 32768) var l = gn();
			if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(vn);
			else for (let e of s.values()) e.reject(vn);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== vn && (c.activate(), t ? (a.f |= ge, jn(a, t)) : (a.f & 8388608 && (a.f ^= ge), jn(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), or(() => {
		for (let e of s) e.reject(vn);
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
function A(e) {
	let t = /* @__PURE__ */ _n(e);
	return rt || zr(t), t;
}
/* @__NO_SIDE_EFFECTS__ */
function bn(e) {
	let t = /* @__PURE__ */ _n(e);
	return t.equals = nt, t;
}
function xn(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) Sr(t[n]);
	}
}
function Sn(e) {
	var t, n = I, r = e.parent;
	if (!Mr && r !== null && e.v !== Ve && r.f & 24576) return We(), e.v;
	Lr(r);
	try {
		e.f &= ~pe, xn(e), t = Zr(e);
	} finally {
		Lr(n);
	}
	return t;
}
function Cn(e) {
	var t = Sn(e);
	if (!e.equals(t) && (e.wv = Jr(), (!k?.is_fork || e.deps === null) && (k === null ? e.v = t : (k.capture(e, t, !0), Ut?.capture(e, t, !0)), e.deps === null))) {
		Tt(e, re);
		return;
	}
	Mr || (Wt === null ? Et(e) : (ar() || k?.is_fork) && Wt.set(e, t));
}
function wn(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Te), t.fn !== null && (t.teardown = x), t.ac = null, $r(t, 0), br(t));
}
function Tn(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && ei(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var En = /* @__PURE__ */ new Set(), Dn = /* @__PURE__ */ new Map(), On = !1;
function kn(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: et,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function j(e, t) {
	let n = kn(e, t);
	return zr(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function An(e, t = !1, n = !0) {
	let r = kn(e);
	return t || (r.equals = nt), it && n && lt !== null && lt.l !== null && (lt.l.s ??= []).push(r), r;
}
function M(e, t, n = !1) {
	return Pr !== null && (!Fr || Pr.f & 131072) && ht() && Pr.f & 4325394 && (Rr === null || !d.call(Rr, e)) && Re(), jn(e, n ? Fn(t) : t, Yt);
}
function jn(e, t, n = null) {
	if (!e.equals(t)) {
		Dn.set(e, Mr ? t : e.v);
		var r = Qt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && Sn(t), Wt === null && Et(t);
		}
		e.wv = Jr(), Pn(e, ie, n), ht() && I !== null && I.f & 1024 && !(I.f & 96) && (Hr === null ? Ur([e]) : Hr.push(e)), !r.is_fork && En.size > 0 && !On && Mn();
	}
	return t;
}
function Mn() {
	On = !1;
	for (let e of En) {
		e.f & 1024 && Tt(e, ae);
		let t;
		try {
			t = Yr(e);
		} catch {
			t = !0;
		}
		t && ei(e);
	}
	En.clear();
}
function Nn(e) {
	M(e, e.v + 1);
}
function Pn(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = ht(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === I)) {
			var l = (c & ie) === 0;
			if (l && Tt(s, t), c & 131072) En.add(s);
			else if (c & 2) {
				var u = s;
				Wt?.delete(u), c & 65536 || (c & 512 && (I === null || !(I.f & 2097152)) && (s.f |= pe), Pn(u, ae, n));
			} else if (l) {
				var d = s;
				c & 16 && tn !== null && tn.add(d), n === null ? on(d) : n.push(d);
			}
		}
	}
}
function Fn(e) {
	if (typeof e != "object" || !e || _e in e) return e;
	let t = v(e);
	if (t !== g && t !== _) return e;
	var n = /* @__PURE__ */ new Map(), r = l(e), i = /* @__PURE__ */ j(0), a = null, o = Kr, s = (e) => {
		if (Kr === o) return e();
		var t = Pr, n = Kr;
		Ir(null), qr(o);
		var r = e();
		return Ir(t), qr(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ j(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Ie();
			var i = n.get(t);
			return i === void 0 ? s(() => {
				var e = /* @__PURE__ */ j(r.value, a);
				return n.set(t, e), e;
			}) : M(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = s(() => /* @__PURE__ */ j(Ve, a));
					n.set(t, e), Nn(i);
				}
			} else M(r, Ve), Nn(i);
			return !0;
		},
		get(t, r, i) {
			if (r === _e) return e;
			var o = n.get(r), c = r in t;
			if (o === void 0 && (!c || m(t, r)?.writable) && (o = s(() => /* @__PURE__ */ j(Fn(c ? t[r] : Ve), a)), n.set(r, o)), o !== void 0) {
				var l = L(o);
				return l === Ve ? void 0 : l;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = L(i));
			} else if (r === void 0) {
				var a = n.get(t), o = a?.v;
				if (a !== void 0 && o !== Ve) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === _e) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== Ve || Reflect.has(e, t);
			return (r !== void 0 || I !== null && (!i || m(e, t)?.writable)) && (r === void 0 && (r = s(() => /* @__PURE__ */ j(i ? Fn(e[t]) : Ve, a)), n.set(t, r)), L(r) === Ve) ? !1 : i;
		},
		set(e, t, o, c) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var f = n.get(d + "");
				f === void 0 ? d in e && (f = s(() => /* @__PURE__ */ j(Ve, a)), n.set(d + "", f)) : M(f, Ve);
			}
			if (l === void 0) (!u || m(e, t)?.writable) && (l = s(() => /* @__PURE__ */ j(void 0, a)), M(l, Fn(o)), n.set(t, l));
			else {
				u = l.v !== Ve;
				var p = s(() => Fn(o));
				M(l, p);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(c, o), !u) {
				if (r && typeof t == "string") {
					var g = n.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && M(g, _ + 1);
				}
				Nn(i);
			}
			return !0;
		},
		ownKeys(e) {
			L(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== Ve;
			});
			for (var [r, a] of n) a.v !== Ve && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			Le();
		}
	});
}
function In(e) {
	try {
		if (typeof e == "object" && e && _e in e) return e[_e];
	} catch {}
	return e;
}
function Ln(e, t) {
	return Object.is(In(e), In(t));
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
var Rn, zn, Bn, Vn;
function Hn() {
	if (Rn === void 0) {
		Rn = window, zn = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Bn = m(t, "firstChild").get, Vn = m(t, "nextSibling").get, y(e) && (e[xe] = void 0, e[be] = null, e[Se] = void 0, e.__e = void 0), y(n) && (n[Ce] = void 0);
	}
}
function Un(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Wn(e) {
	return Bn.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Gn(e) {
	return Vn.call(e);
}
function N(e, t) {
	if (!w) return /* @__PURE__ */ Wn(e);
	var n = /* @__PURE__ */ Wn(T);
	if (n === null) n = T.appendChild(Un());
	else if (t && n.nodeType !== 3) {
		var r = Un();
		return n?.before(r), Ye(r), r;
	}
	return t && Yn(n), Ye(n), n;
}
function P(e, t = !1) {
	if (!w) {
		var n = /* @__PURE__ */ Wn(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Gn(n) : n;
	}
	if (t) {
		if (T?.nodeType !== 3) {
			var r = Un();
			return T?.before(r), Ye(r), r;
		}
		Yn(T);
	}
	return T;
}
function F(e, t = 1, n = !1) {
	let r = w ? T : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Gn(r);
	if (!w) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Un();
			return r === null ? i?.after(a) : r.before(a), Ye(a), a;
		}
		Yn(r);
	}
	return Ye(r), r;
}
function Kn(e) {
	e.textContent = "";
}
function qn() {
	return !rt || tn !== null ? !1 : (I.f & ce) !== 0;
}
function Jn(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function Yn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function Xn(e, t) {
	if (t) {
		let t = document.body;
		e.autofocus = !0, bt(() => {
			document.activeElement === t && e.focus();
		});
	}
}
function Zn(e) {
	w && /* @__PURE__ */ Wn(e) !== null && Kn(e);
}
var Qn = !1;
function $n() {
	Qn || (Qn = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[we]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function er(e) {
	var t = Pr, n = I;
	Ir(null), Lr(null);
	try {
		return e();
	} finally {
		Ir(t), Lr(n);
	}
}
function tr(e, t, n, r = n) {
	e.addEventListener(t, () => er(n));
	let i = e[we];
	i ? e[we] = () => {
		i(), r(!0);
	} : e[we] = () => r(!0), $n();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function nr(e) {
	I === null && (Pr === null && Me(e), je()), Mr && Ae(e);
}
function rr(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ir(e, t) {
	var n = I;
	n !== null && n.f & 8192 && (e |= oe);
	var r = {
		ctx: lt,
		deps: null,
		nodes: null,
		f: e | ie | 512,
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
	k?.register_created_effect(r);
	var i = r;
	if (e & 4) Jt === null ? Qt.ensure().schedule(r) : Jt.push(r);
	else if (t !== null) {
		try {
			ei(r);
		} catch (e) {
			throw Sr(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ue));
	}
	if (i !== null && (i.parent = n, n !== null && rr(i, n), Pr !== null && Pr.f & 2 && !(e & 64))) {
		var a = Pr;
		(a.effects ??= []).push(i);
	}
	return r;
}
function ar() {
	return Pr !== null && !Fr;
}
function or(e) {
	let t = ir(8, null);
	return Tt(t, re), t.teardown = e, t;
}
function sr(e) {
	nr("$effect");
	var t = I.f;
	if (!Pr && t & 32 && lt !== null && !lt.i) {
		var n = lt;
		(n.e ??= []).push(e);
	} else return cr(e);
}
function cr(e) {
	return ir(4 | fe, e);
}
function lr(e) {
	return nr("$effect.pre"), ir(8 | fe, e);
}
function ur(e) {
	Qt.ensure();
	let t = ir(64 | de, e);
	return () => {
		Sr(t);
	};
}
function dr(e) {
	Qt.ensure();
	let t = ir(64 | de, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? Tr(t, () => {
			Sr(t), n(void 0);
		}) : (Sr(t), n(void 0));
	});
}
function fr(e) {
	return ir(4, e);
}
function pr(e) {
	return ir(he | de, e);
}
function mr(e, t = 0) {
	return ir(8 | t, e);
}
function hr(e, t = [], n = [], r = []) {
	pn(r, t, n, (t) => {
		ir(8, () => e(...t.map(L)));
	});
}
function gr(e, t = 0) {
	return ir(16 | t, e);
}
function _r(e, t = 0) {
	return ir(ne | t, e);
}
function vr(e) {
	return ir(32 | de, e);
}
function yr(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Mr, n = Pr;
		Nr(!0), Ir(null);
		try {
			t.call(null);
		} finally {
			Nr(e), Ir(n);
		}
	}
}
function br(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && er(() => {
			e.abort(Te);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : Sr(n, t), n = r;
	}
}
function xr(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || Sr(t), t = n;
	}
}
function Sr(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Cr(e.nodes.start, e.nodes.end), n = !0), Tt(e, le), br(e, t && !n), $r(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	yr(e), e.f ^= le, e.f |= se;
	var i = e.parent;
	i !== null && i.first !== null && wr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Cr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Gn(e);
		e.remove(), e = n;
	}
}
function wr(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Tr(e, t, n = !0) {
	var r = [];
	Er(e, r, !0);
	var i = () => {
		n && Sr(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Er(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= oe;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				Er(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Dr(e) {
	Or(e, !0);
}
function Or(e, t) {
	if (e.f & 8192) {
		e.f ^= oe, e.f & 1024 || (Tt(e, ie), Qt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			Or(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function kr(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Gn(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Ar = null, jr = !1, Mr = !1;
function Nr(e) {
	Mr = e;
}
var Pr = null, Fr = !1;
function Ir(e) {
	Pr = e;
}
var I = null;
function Lr(e) {
	I = e;
}
var Rr = null;
function zr(e) {
	Pr !== null && (!rt || Pr.f & 2) && (Rr === null ? Rr = [e] : Rr.push(e));
}
var Br = null, Vr = 0, Hr = null;
function Ur(e) {
	Hr = e;
}
var Wr = 1, Gr = 0, Kr = Gr;
function qr(e) {
	Kr = e;
}
function Jr() {
	return ++Wr;
}
function Yr(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~pe), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Yr(a) && Cn(a), a.wv > e.wv) return !0;
		}
		t & 512 && Wt === null && Tt(e, re);
	}
	return !1;
}
function Xr(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!rt && Rr !== null && d.call(Rr, e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Xr(a, t, !1) : t === a && (n ? Tt(a, ie) : a.f & 1024 && Tt(a, ae), on(a));
	}
}
function Zr(e) {
	var t = Br, n = Vr, r = Hr, i = Pr, a = Rr, o = lt, s = Fr, c = Kr, l = e.f;
	Br = null, Vr = 0, Hr = null, Pr = l & 96 ? null : e, Rr = null, ut(e.ctx), Fr = !1, Kr = ++Gr, e.ac !== null && (er(() => {
		e.ac.abort(Te);
	}), e.ac = null);
	try {
		e.f |= me;
		var u = e.fn, d = u();
		e.f |= ce;
		var f = e.deps, p = k?.is_fork;
		if (Br !== null) {
			var m;
			if (p || $r(e, Vr), f !== null && Vr > 0) for (f.length = Vr + Br.length, m = 0; m < Br.length; m++) f[Vr + m] = Br[m];
			else e.deps = f = Br;
			if (ar() && e.f & 512) for (m = Vr; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Vr < f.length && ($r(e, Vr), f.length = Vr);
		if (ht() && Hr !== null && !Fr && f !== null && !(e.f & 6146)) for (m = 0; m < Hr.length; m++) Xr(Hr[m], e);
		if (i !== null && i !== e) {
			if (Gr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Gr;
			if (t !== null) for (let e of t) e.rv = Gr;
			Hr !== null && (r === null ? r = Hr : r.push(...Hr));
		}
		return e.f & 8388608 && (e.f ^= ge), d;
	} catch (e) {
		return St(e);
	} finally {
		e.f ^= me, Br = t, Vr = n, Hr = r, Pr = i, Rr = a, ut(o), Fr = s, Kr = c;
	}
}
function Qr(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = u.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Br === null || !d.call(Br, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~pe), a.v !== Ve && Et(a), wn(a), $r(a, 0);
	}
}
function $r(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Qr(e, n[r]);
}
function ei(e) {
	var t = e.f;
	if (!(t & 16384)) {
		Tt(e, re);
		var n = I, r = jr;
		I = e, jr = !0;
		try {
			t & 16777232 ? xr(e) : br(e), yr(e);
			var i = Zr(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Wr;
		} finally {
			jr = r, I = n;
		}
	}
}
async function ti() {
	if (rt) return new Promise((e) => {
		requestAnimationFrame(() => e()), setTimeout(() => e());
	});
	await Promise.resolve(), $t();
}
function L(e) {
	var t = (e.f & 2) != 0;
	if (Ar?.add(e), Pr !== null && !Fr && !(I !== null && I.f & 16384) && (Rr === null || !d.call(Rr, e))) {
		var n = Pr.deps;
		if (Pr.f & 2097152) e.rv < Gr && (e.rv = Gr, Br === null && n !== null && n[Vr] === e ? Vr++ : Br === null ? Br = [e] : Br.push(e));
		else {
			Pr.deps ??= [], d.call(Pr.deps, e) || Pr.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [Pr] : d.call(r, Pr) || r.push(Pr);
		}
	}
	if (Mr && Dn.has(e)) return Dn.get(e);
	if (t) {
		var i = e;
		if (Mr) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || ri(i)) && (a = Sn(i)), Dn.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !Fr && Pr !== null && (jr || (Pr.f & 512) != 0), s = (i.f & ce) === 0;
		Yr(i) && (o && (i.f |= 512), Cn(i)), o && !s && (Tn(i), ni(i));
	}
	if (Wt?.has(e)) return Wt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function ni(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Tn(t), ni(t));
}
function ri(e) {
	if (e.v === Ve) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Dn.has(t) || t.f & 2 && ri(t)) return !0;
	return !1;
}
function R(e) {
	var t = Fr;
	try {
		return Fr = !0, e();
	} finally {
		Fr = t;
	}
}
function ii(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (_e in e) ai(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && _e in n && ai(n);
		}
	}
}
function ai(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			ai(e[n], t);
		} catch {}
		let n = v(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = h(n);
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
//#region node_modules/svelte/src/attachments/index.js
function oi() {
	return Symbol(Ue);
}
//#endregion
//#region node_modules/svelte/src/utils.js
function si(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var ci = [
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
function li(e) {
	return ci.includes(e);
}
var ui = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), di = {
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
function fi(e) {
	return e = e.toLowerCase(), di[e] ?? e;
}
[...ui];
var pi = ["touchstart", "touchmove"];
function mi(e) {
	return pi.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var hi = Symbol("events"), gi = /* @__PURE__ */ new Set(), _i = /* @__PURE__ */ new Set();
function vi(e) {
	if (!w) return;
	e.removeAttribute("onload"), e.removeAttribute("onerror");
	let t = e.__e;
	t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
		e.isConnected && e.dispatchEvent(t);
	}));
}
function yi(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || Ti.call(t, e), !e.cancelBubble) return er(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? bt(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function bi(e, t, n, r = {}) {
	var i = yi(t, e, n, r);
	return () => {
		e.removeEventListener(t, i, r);
	};
}
function xi(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = yi(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && or(() => {
		t.removeEventListener(e, o, a);
	});
}
function Si(e, t, n) {
	(t[hi] ??= {})[e] = n;
}
function Ci(e) {
	for (var t = 0; t < e.length; t++) gi.add(e[t]);
	for (var n of _i) n(e);
}
var wi = null;
function Ti(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	wi = e;
	var o = 0, s = wi === e && e[hi];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[hi] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		p(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = Pr, d = I;
		Ir(null), Lr(null);
		try {
			for (var f, m = []; a !== null && a !== t;) {
				try {
					var h = a[hi]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					f ? m.push(e) : f = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (f) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw f;
			}
		} finally {
			e[hi] = t, delete e.currentTarget, Ir(u), Lr(d);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Ei = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Di(e) {
	return Ei?.createHTML(e) ?? e;
}
function Oi(e) {
	var t = Jn("template");
	return t.innerHTML = Di(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function ki(e, t) {
	var n = I;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function z(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (w) return ki(T, null), T;
		i === void 0 && (i = Oi(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Wn(i)));
		var t = r || zn ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Wn(t), s = t.lastChild;
			ki(o, s);
		} else ki(t, t);
		return t;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Ai(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = (t & 1) != 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (w) return ki(T, null), T;
		if (!o) {
			var e = /* @__PURE__ */ Wn(Oi(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ Wn(e);) o.appendChild(/* @__PURE__ */ Wn(e));
			else o = /* @__PURE__ */ Wn(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ Wn(t), r = t.lastChild;
			ki(n, r);
		} else ki(t, t);
		return t;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function ji(e, t) {
	return /* @__PURE__ */ Ai(e, t, "svg");
}
function Mi(e = "") {
	if (!w) {
		var t = Un(e + "");
		return ki(t, t), t;
	}
	var n = T;
	return n.nodeType === 3 ? Yn(n) : (n.before(n = Un()), Ye(n)), ki(n, n), n;
}
function B() {
	if (w) return ki(T, null), T;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Un();
	return e.append(t, n), ki(t, n), e;
}
function V(e, t) {
	if (w) {
		var n = I;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = T), Xe();
		return;
	}
	e !== null && e.before(t);
}
function Ni() {
	if (w && T && T.nodeType === 8 && T.textContent?.startsWith("$")) {
		let e = T.textContent.substring(1);
		return Xe(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
var Pi = !0;
function Fi(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[Ce] ??= e.nodeValue) && (e[Ce] = n, e.nodeValue = `${n}`);
}
function Ii(e, t) {
	return Ri(e, t);
}
var Li = /* @__PURE__ */ new Map();
function Ri(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	Hn();
	var c = void 0, l = dr(() => {
		var l = n ?? t.appendChild(Un());
		dn(l, { pending: () => {} }, (t) => {
			D({});
			var n = lt;
			if (a && (n.c = a), i && (r.$$events = i), w && ki(t, null), Pi = o, c = e(t, r) || {}, Pi = !0, w && (I.nodes.end = T, T === null || T.nodeType !== 8 || T.data !== "]")) throw Ge(), Be;
			O();
		}, s);
		var u = /* @__PURE__ */ new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!u.has(r)) {
					u.add(r);
					var i = mi(r);
					for (let e of [t, document]) {
						var a = Li.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Li.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Ti, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return d(f(gi)), _i.add(d), () => {
			for (var e of u) for (let n of [t, document]) {
				var r = Li.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Ti), r.delete(e), r.size === 0 && Li.delete(n)) : r.set(e, i);
			}
			_i.delete(d), l !== n && l.parentNode?.removeChild(l);
		};
	});
	return zi.set(c, l), c;
}
var zi = /* @__PURE__ */ new WeakMap();
function Bi(e, t) {
	let n = zi.get(e);
	return n ? (zi.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Vi = class {
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
			if (n) Dr(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (Dr(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (Sr(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						kr(r, t), t.append(Un()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else Sr(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), Tr(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (Sr(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = k, r = qn();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Un();
			i.append(a), this.#n.set(e, {
				effect: vr(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, vr(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else w && (this.anchor = T), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function H(e, t, n = !1) {
	var r;
	w && (r = T, Xe());
	var i = new Vi(e), a = n ? ue : 0;
	function o(e, t) {
		if (w) {
			var n = $e(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Qe();
				Ye(a), i.anchor = a, Je(!1), i.ensure(e, t), Je(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	gr(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/key.js
var Hi = Symbol("NaN");
function Ui(e, t, n) {
	w && Xe();
	var r = new Vi(e), i = !ht();
	gr(() => {
		var e = t();
		e !== e && (e = Hi), i && typeof e == "object" && e && (e = {}), r.ensure(e, n);
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Wi(e, t) {
	return t;
}
function Gi(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		Tr(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Ki(e, f(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var l = n, u = l.parentNode;
			Kn(u), u.append(l), e.items.clear();
		}
		Ki(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Ki(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= C, kr(a, document.createDocumentFragment())) : Sr(t[i], n);
	}
}
var qi;
function Ji(e, t, n, r, i, a = null) {
	var o = e, s = /* @__PURE__ */ new Map();
	if (t & 4) {
		var c = e;
		o = w ? Ye(/* @__PURE__ */ Wn(c)) : c.appendChild(Un());
	}
	w && Xe();
	var u = null, d = /* @__PURE__ */ bn(() => {
		var e = n();
		return l(e) ? e : e == null ? [] : f(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = u, Xi(v, p, o, t, r), u !== null && (p.length === 0 ? u.f & 33554432 ? (u.f ^= C, Qi(u, null, o)) : Dr(u) : Tr(u, () => {
			u = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: gr(() => {
			p = L(d);
			var e = p.length;
			let c = !1;
			w && $e(o) === "[!" != (e === 0) && (o = Qe(), Ye(o), Je(!1), c = !0);
			for (var l = /* @__PURE__ */ new Set(), f = k, v = qn(), y = 0; y < e; y += 1) {
				w && T.nodeType === 8 && T.data === "]" && (o = T, c = !0, Je(!1));
				var b = p[y], x = r(b, y), ee = h ? null : s.get(x);
				ee ? (ee.v && jn(ee.v, b), ee.i && jn(ee.i, y), v && f.unskip_effect(ee.e)) : (ee = Zi(s, h ? o : qi ??= Un(), b, x, y, i, t, n), h || (ee.e.f |= C), s.set(x, ee)), l.add(x);
			}
			if (e === 0 && a && !u && (h ? u = vr(() => a(o)) : (u = vr(() => a(qi ??= Un())), u.f |= C)), e > l.size && ke("", "", ""), w && e > 0 && Ye(Qe()), !h) if (m.set(f, l), v) {
				for (let [e, t] of s) l.has(e) || f.skip_effect(t.e);
				f.oncommit(g), f.ondiscard(_);
			} else g(f);
			c && Je(!0), L(d);
		}),
		flags: t,
		items: s,
		pending: m,
		outrogroups: null,
		fallback: u
	};
	h = !1, w && (o = T);
}
function Yi(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Xi(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, c = Yi(e.effect.first), l, u = null, d, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (d ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (Dr(_), a && (_.nodes?.a?.unfix(), (d ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= C, _ === c) Qi(_, null, n);
		else {
			var y = u ? u.next : c;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), $i(e, u, _), $i(e, _, y), Qi(_, y, n), u = _, p = [], m = [], c = Yi(u.next);
			continue;
		}
		if (_ !== c) {
			if (l !== void 0 && l.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					u = b.prev;
					var ee = p[0], te = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Qi(p[x], b, n);
					for (x = 0; x < m.length; x += 1) l.delete(m[x]);
					$i(e, ee.prev, te.next), $i(e, u, ee), $i(e, te, b), c = b, u = te, --v, p = [], m = [];
				} else l.delete(_), Qi(_, c, n), $i(e, _.prev, _.next), $i(e, _, u === null ? e.effect.first : u.next), $i(e, u, _), u = _;
				continue;
			}
			for (p = [], m = []; c !== null && c !== _;) (l ??= /* @__PURE__ */ new Set()).add(c), m.push(c), c = Yi(c.next);
			if (c === null) continue;
		}
		_.f & 33554432 || p.push(_), u = _, c = Yi(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Ki(e, f(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var S = [];
		if (l !== void 0) for (_ of l) _.f & 8192 || S.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && S.push(c), c = Yi(c.next);
		var ne = S.length;
		if (ne > 0) {
			var re = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < ne; v += 1) S[v].nodes?.a?.measure();
				for (v = 0; v < ne; v += 1) S[v].nodes?.a?.fix();
			}
			Gi(e, S, re);
		}
	}
	a && bt(() => {
		if (d !== void 0) for (_ of d) _.nodes?.a?.apply();
	});
}
function Zi(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? kn(n) : /* @__PURE__ */ An(n, !1, !1) : null, l = o & 2 ? kn(i) : null;
	return {
		v: c,
		i: l,
		e: vr(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Qi(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Gn(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function $i(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function U(e, t, ...n) {
	var r = new Vi(e);
	gr(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, ue);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
function ea(e, t, n) {
	var r;
	w && (r = T, Xe());
	var i = new Vi(e);
	gr(() => {
		var e = t() ?? null;
		if (w && $e(r) === "[" != (e !== null)) {
			var a = Qe();
			Ye(a), i.anchor = a, Je(!1), i.ensure(e, e && ((t) => n(t, e))), Je(!0);
			return;
		}
		i.ensure(e, e && ((t) => n(t, e)));
	}, ue);
}
//#endregion
//#region node_modules/svelte/src/internal/client/timing.js
var ta = () => performance.now(), na = {
	tick: (e) => requestAnimationFrame(e),
	now: () => ta(),
	tasks: /* @__PURE__ */ new Set()
};
//#endregion
//#region node_modules/svelte/src/internal/client/loop.js
function ra() {
	let e = na.now();
	na.tasks.forEach((t) => {
		t.c(e) || (na.tasks.delete(t), t.f());
	}), na.tasks.size !== 0 && na.tick(ra);
}
function ia(e) {
	let t;
	return na.tasks.size === 0 && na.tick(ra), {
		promise: new Promise((n) => {
			na.tasks.add(t = {
				c: e,
				f: n
			});
		}),
		abort() {
			na.tasks.delete(t);
		}
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/transitions.js
function aa(e, t) {
	er(() => {
		e.dispatchEvent(new CustomEvent(t));
	});
}
function oa(e) {
	if (e === "float") return "cssFloat";
	if (e === "offset") return "cssOffset";
	if (e.startsWith("--")) return e;
	let t = e.split("-");
	return t.length === 1 ? t[0] : t[0] + t.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
function sa(e) {
	let t = {}, n = e.split(";");
	for (let e of n) {
		let [n, r] = e.split(":");
		if (!n || r === void 0) break;
		let i = oa(n.trim());
		t[i] = r.trim();
	}
	return t;
}
var ca = (e) => e, la = null;
function ua(e, t, n) {
	var r = (la ?? I).nodes, i, a, o, s = null;
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
				o = fa(this.element, e, void 0, 1, () => {}, () => {
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
function da(e, t, n, r) {
	var i = (e & 1) != 0, a = (e & 2) != 0, o = i && a, s = (e & 4) != 0, c = o ? "both" : i ? "in" : "out", l, u = t.inert, d = t.style.overflow, f, p;
	function m() {
		return er(() => l ??= n()(t, r?.() ?? {}, { direction: c }));
	}
	var h = {
		is_global: s,
		in() {
			if (t.inert = u, !i) {
				p?.abort(), p?.reset?.();
				return;
			}
			a || f?.abort(), f = fa(t, m(), p, 1, () => {
				aa(t, "introstart");
			}, () => {
				aa(t, "introend"), f?.abort(), f = l = void 0, t.style.overflow = d;
			});
		},
		out(e) {
			if (!a) {
				e?.(), l = void 0;
				return;
			}
			t.inert = !0, p = fa(t, m(), f, 0, () => {
				aa(t, "outrostart");
			}, () => {
				aa(t, "outroend"), e?.();
			});
		},
		stop: () => {
			f?.abort(), p?.abort();
		}
	}, g = I;
	if ((g.nodes.t ??= []).push(h), i && Pi) {
		var _ = s;
		if (!_) {
			for (var v = g.parent; v && v.f & 65536;) for (; (v = v.parent) && !(v.f & 16););
			_ = !v || (v.f & 32768) != 0;
		}
		_ && fr(() => {
			R(() => h.in());
		});
	}
}
function fa(e, t, n, r, i, a) {
	var o = r === 1;
	if (b(t)) {
		var s, c = !1;
		return bt(() => {
			c || (s = fa(e, t({ direction: o ? "in" : "out" }), n, r, i, a));
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
		abort: x,
		deactivate: x,
		reset: x,
		t: () => r
	};
	let { delay: l = 0, css: u, tick: d, easing: f = ca } = t;
	var p = [];
	if (o && n === void 0 && (d && d(0, 1), u)) {
		var m = sa(u(0, 1));
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
				var v = o + s * f(_ / m), y = sa(u(v, 1 - v));
				l.push(y), p ||= y.overflow === "hidden";
			}
			p && (e.style.overflow = "hidden"), h = () => {
				var e = g.currentTime;
				return o + s * f(e / c);
			}, d && ia(() => {
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
			g && (g.cancel(), g.effect = null, g.onfinish = x);
		},
		deactivate: () => {
			a = x;
		},
		reset: () => {
			r === 0 && d?.(1, 0);
		},
		t: () => h()
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attachments.js
function pa(e, t) {
	var n = void 0, r;
	_r(() => {
		n !== (n = t()) && (r &&= (Sr(r), null), n && (r = vr(() => {
			fr(() => n(e));
		})));
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function ma(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = ma(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function ha() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = ma(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function ga(e) {
	return typeof e == "object" ? ha(e) : e ?? "";
}
var _a = [..." 	\n\r\f\xA0\v﻿"];
function va(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || _a.includes(r[o - 1])) && (s === r.length || _a.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function ya(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function ba(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function xa(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(ba)), i && c.push(...Object.keys(i).map(ba));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = ba(e.substring(l, u).trim());
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
		return r && (n += ya(r)), i && (n += ya(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Sa(e, t, n, r, i, a) {
	var o = e[xe];
	if (w || o !== n || o === void 0) {
		var s = va(n, r, a);
		(!w || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[xe] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function Ca(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function wa(e, t, n, r) {
	var i = e[Se];
	if (w || i !== t) {
		var a = xa(t, r);
		(!w || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[Se] = t;
	} else r && (Array.isArray(r) ? (Ca(e, n?.[0], r[0]), Ca(e, n?.[1], r[1], "important")) : Ca(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function Ta(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!l(t)) return Ke();
		for (var r of e.options) r.selected = t.includes(Da(r));
		return;
	}
	for (r of e.options) if (Ln(Da(r), t)) {
		r.selected = !0;
		return;
	}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function Ea(e) {
	var t = new MutationObserver(() => {
		Ta(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), or(() => {
		t.disconnect();
	});
}
function Da(e) {
	return "__value" in e ? e.__value : e.value;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Oa = Symbol("class"), ka = Symbol("style"), Aa = Symbol("is custom element"), ja = Symbol("is html"), Ma = Ee ? "link" : "LINK", Na = Ee ? "input" : "INPUT", Pa = Ee ? "option" : "OPTION", Fa = Ee ? "select" : "SELECT";
function Ia(e) {
	if (w) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					Ra(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					Ra(e, "checked", null), e.checked = r;
				}
			}
		};
		e[we] = n, bt(n), $n();
	}
}
function La(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ra(e, t, n, r) {
	var i = Ba(e);
	w && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ma) || i[t] !== (i[t] = n) && (t === "loading" && (e[ye] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ha(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function za(e, t, n, r, i = !1, a = !1) {
	if (w && i && e.nodeName === Na) {
		var o = e;
		(o.type === "checkbox" ? "defaultChecked" : "defaultValue") in n || Ia(o);
	}
	var s = Ba(e), c = s[Aa], l = !s[ja];
	let u = w && c;
	u && Je(!1);
	var d = t || {}, f = e.nodeName === Pa;
	for (var p in t) p in n || (n[p] = null);
	n.class ? n.class = ga(n.class) : (r || n[Oa]) && (n.class = null), n[ka] && (n.style ??= null);
	var m = Ha(e);
	for (let i in n) {
		let o = n[i];
		if (f && i === "value" && o == null) {
			e.value = e.__value = "", d[i] = o;
			continue;
		}
		if (i === "class") {
			Sa(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", o, r, t?.[Oa], n[Oa]), d[i] = o, d[Oa] = n[Oa];
			continue;
		}
		if (i === "style") {
			wa(e, o, t?.[ka], n[ka]), d[i] = o, d[ka] = n[ka];
			continue;
		}
		var h = d[i];
		if (!(o === h && !(o === void 0 && e.hasAttribute(i)))) {
			d[i] = o;
			var g = i[0] + i[1];
			if (g !== "$$") if (g === "on") {
				let t = {}, n = "$$" + i, r = i.slice(2);
				var _ = li(r);
				if (si(r) && (r = r.slice(0, -7), t.capture = !0), !_ && h) {
					if (o != null) continue;
					e.removeEventListener(r, d[n], t), d[n] = null;
				}
				if (_) Si(r, e, o), Ci([r]);
				else if (o != null) {
					function a(e) {
						d[i].call(this, e);
					}
					d[n] = yi(r, e, a, t);
				}
			} else if (i === "style") Ra(e, i, o);
			else if (i === "autofocus") Xn(e, !!o);
			else if (!c && (i === "__value" || i === "value" && o != null)) e.value = e.__value = o;
			else if (i === "selected" && f) La(e, o);
			else {
				var v = i;
				l || (v = fi(v));
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
				else y || m.includes(v) && (c || typeof o != "string") ? (e[v] = o, v in s && (s[v] = Ve)) : typeof o != "function" && Ra(e, v, o, a);
			}
		}
	}
	return u && Je(!0), d;
}
function W(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	pn(i, n, r, (n) => {
		var r = void 0, i = {}, c = e.nodeName === Fa, l = !1;
		if (_r(() => {
			var u = t(...n.map(L)), d = za(e, r, u, a, o, s);
			l && c && "value" in u && Ta(e, u.value);
			for (let e of Object.getOwnPropertySymbols(i)) u[e] || Sr(i[e]);
			for (let t of Object.getOwnPropertySymbols(u)) {
				var f = u[t];
				t.description === "@attach" && (!r || f !== r[t]) && (i[t] && Sr(i[t]), i[t] = vr(() => pa(e, () => f))), d[t] = f;
			}
			r = d;
		}), c) {
			var u = e;
			fr(() => {
				Ta(u, r.value, !0), Ea(u);
			});
		}
		l = !0;
	});
}
function Ba(e) {
	return e[be] ??= {
		[Aa]: e.nodeName.includes("-"),
		[ja]: e.namespaceURI === He
	};
}
var Va = /* @__PURE__ */ new Map();
function Ha(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Va.get(t);
	if (n) return n;
	Va.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = h(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = v(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function Ua(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	tr(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = Wa(e) ? Ga(a) : a, n(a), k !== null && r.add(k), await ti(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (w && e.defaultValue !== e.value || R(t) == null && e.value) && (n(Wa(e) ? Ga(e.value) : e.value), k !== null && r.add(k)), mr(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = rt ? Ut : k;
			if (r.has(i)) return;
		}
		Wa(e) && n === Ga(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function Wa(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function Ga(e) {
	return e === "" ? null : +e;
}
function Ka(e, t, n = t) {
	tr(e, "change", () => {
		n(e.files);
	}), w && e.files && n(e.files), mr(() => {
		e.files = t();
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function qa(e, t) {
	return e === t || e?.[_e] === t;
}
function Ja(e = {}, t, n, r) {
	var i = lt.r, a = I;
	return fr(() => {
		var o, s;
		return mr(() => {
			o = s, s = r?.() || [], R(() => {
				qa(n(...s), e) || (t(e, ...s), o && qa(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && qa(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Ya(e = !1) {
	let t = lt, n = t.l.u;
	if (!n) return;
	let r = () => ii(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ _n(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => L(i);
	}
	n.b.length && lr(() => {
		Xa(t, r), te(n.b);
	}), sr(() => {
		let e = R(() => n.m.map(ee));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && sr(() => {
		Xa(t, r), te(n.a);
	});
}
function Xa(e, t) {
	if (e.l.s) for (let t of e.l.s) L(t);
	t();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
var Za = {
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
function G(e, t, n) {
	return new Proxy({
		props: e,
		exclude: t
	}, Za);
}
var Qa = {
	get(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (b(r) && (r = r()), typeof r == "object" && r && t in r) return r[t];
		}
	},
	set(e, t, n) {
		let r = e.props.length;
		for (; r--;) {
			let i = e.props[r];
			b(i) && (i = i());
			let a = m(i, t);
			if (a && a.set) return a.set(n), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (b(r) && (r = r()), typeof r == "object" && r && t in r) {
				let e = m(r, t);
				return e && !e.configurable && (e.configurable = !0), e;
			}
		}
	},
	has(e, t) {
		if (t === _e || t === ve) return !1;
		for (let n of e.props) if (b(n) && (n = n()), n != null && t in n) return !0;
		return !1;
	},
	ownKeys(e) {
		let t = [];
		for (let n of e.props) if (b(n) && (n = n()), n) {
			for (let e in n) t.includes(e) || t.push(e);
			for (let e of Object.getOwnPropertySymbols(n)) t.includes(e) || t.push(e);
		}
		return t;
	}
};
function $a(...e) {
	return new Proxy({ props: e }, Qa);
}
function K(e, t, n, r) {
	var i = !it || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ _n(r), L(l)) : (c && (c = !1, s = o ? R(r) : r), s);
	let d;
	if (a) {
		var f = _e in e || ve in e;
		d = m(e, t)?.set ?? (f && t in e ? (n) => e[t] = n : void 0);
	}
	var p, h = !1;
	a ? [p, h] = Bt(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = u(), d && (i && Pe(t), d(p)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? u() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return g;
	if (d) {
		var _ = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && d(t ? g() : e), e) : g();
		});
	}
	var v = !1, y = (n & 1 ? _n : bn)(() => (v = !1, g()));
	a && L(y);
	var b = I;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? L(y) : i && a ? Fn(e) : e;
			return M(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return Mr && v || b.f & 16384 ? y.v : L(y);
	});
}
function eo(e) {
	lt === null && De("onMount"), it && lt.l !== null ? to(lt).m.push(e) : sr(() => {
		let t = R(e);
		if (typeof t == "function") return t;
	});
}
function to(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region src/shared/utils/overrides.ts
var no = (e) => {
	window.CHANNEL.js = e;
	let t = document.querySelector("#cs-jstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channeljs) return;
	let n = document.createElement("script");
	n.id = "chanjs", n.type = "text/javascript", n.textContent = e, document.body.append(n);
}, ro = (e) => {
	window.CHANNEL.css = e;
	let t = document.querySelector("#cs-csstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channelcss) return;
	let n = document.createElement("style");
	n.id = "chancss", n.textContent = e, document.head.append(n);
}, io = (e) => {
	let t = document.querySelector("#chanjs");
	if (!t) {
		no(e);
		return;
	}
	t.textContent !== e && (t.remove(), no(e));
}, ao = (e) => {
	let t = document.querySelector("#chancss");
	if (!t) {
		ro(e);
		return;
	}
	t.textContent !== e && (t.remove(), ro(e));
}, oo = () => {
	window.Callbacks.channelCSSJS = ({ css: e, js: t }) => {
		e && ao(e), t && io(t);
	};
}, so = () => {
	window.scrollQueue = () => {};
}, co = () => {
	let e = new URL("dist/favicon.ico", window.BASE_URL), t = document.createElement("link");
	t.href = e.toString(), t.type = "image/x-icon", t.rel = "shortcut icon", document.head.append(t);
}, lo = () => {
	oo(), so(), co();
}, uo = async () => new Promise((e) => {
	po.once("connect", e), po.connect();
}), fo = async () => new Promise((e, t) => {
	po.once("disconnect", (n) => {
		if (n === "io client disconnect") {
			e();
			return;
		}
		t(n);
	}), po.disconnect();
}), po = window.socket, mo = async () => new Promise((e, t) => {
	po.once("playlist", e), po.once("errorMsg", t), po.emit("requestPlaylist");
}), ho = (e) => po.on("queue", e), go = (e) => po.on("delete", e), _o = {
	ADMIN: 3,
	ANON: -1,
	GUEST: 0,
	MODERATOR: 2,
	SITERADMIN: 255,
	USER: 1
}, vo = { userlist: [] }, yo = (e) => {
	let { subscribe: t, set: n, update: r } = jt({
		...vo,
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
}, bo = (e) => po.on("addUser", e), xo = (e) => po.on("userLeave", e), So = () => Array.from(document.body.querySelectorAll("#userlist .userlist_item")).map((e) => $(e)).map((e) => ({
	meta: {
		afk: e.data("afk") || !1,
		muted: e.data("meta") && e.data("meta").muted || !1
	},
	name: e.data("name") || "",
	profile: e.data("profile") || {
		image: "",
		text: ""
	},
	rank: e.data("rank") || _o.ANON
})), Co = yo(), wo = { version: "" }, To = ((e) => {
	let { subscribe: t, set: n, update: r } = jt({
		...wo,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetVersion: () => r((e) => ({
			...e,
			version: wo.version
		})),
		updateVersion: (e) => r((t) => ({
			...t,
			version: e
		}))
	};
})(), Eo = {
	leader: !1,
	logged_in: !1,
	name: "",
	profile: {
		image: "",
		text: ""
	},
	rank: -1
}, Do = ((e) => {
	let { subscribe: t, set: n, update: r } = jt({
		...Eo,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetLoggedIn: () => r((e) => ({
			...e,
			logged_in: Eo.logged_in
		})),
		resetName: () => r((e) => ({
			...e,
			name: Eo.name
		})),
		resetRank: () => r((e) => ({
			...e,
			rank: Eo.rank
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
})(), Oo = { csrf: "" }, ko = ((e) => {
	let { subscribe: t, set: n, update: r } = jt({
		...Oo,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetCSRF: () => r((e) => ({
			...e,
			csrf: Oo.csrf
		})),
		updateCSRF: (e) => r((t) => ({
			...t,
			csrf: e
		}))
	};
})(), Ao = {
	currentIndex: -1,
	playlist: []
}, jo = ((e) => {
	let { subscribe: t, set: n, update: r } = jt({
		...Ao,
		...e
	});
	return {
		subscribe: t,
		addPlaylistItem: (e, t) => r((n) => ({
			...n,
			playlist: [...n.playlist].splice(t, 0, e)
		})),
		init: (e) => n(e),
		removePlaylistItem: (e) => r((t) => ({
			...t,
			playlist: [...t.playlist].splice(e, 1)
		})),
		resetPlaylist: () => n(Ao),
		setCurrent: (e) => r((t) => ({
			...t,
			currentIndex: e
		})),
		setPlaylist: (e) => r((t) => ({
			...t,
			playlist: e
		}))
	};
})(), Mo = { connected: !0 }, No = ((e) => {
	let { subscribe: t, set: n, update: r } = jt({
		...Mo,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetConnected: () => r((e) => ({
			...e,
			connected: Mo.connected
		})),
		updateConnected: (e) => r((t) => ({
			...t,
			connected: e
		}))
	};
})(), Po = () => (Do.init({ ...window.CLIENT }), Do.subscribe((e) => {
	window.CLIENT = e;
})), Fo = () => {
	let e = document.querySelector("input[name=\"_csrf\"]");
	if (!e) throw Error("CSRF element not found");
	let t = e.value;
	if (!t) throw Error("CSRF token not found");
	ko.init({ csrf: t });
}, Io = () => (To.init({ version: window.VERSION }), To.subscribe((e) => {
	window.VERSION = e.version;
})), Lo = () => {
	No.init(po), po.on("connect", () => No.updateConnected(po.connected)), po.on("disconnect", () => No.updateConnected(po.connected));
}, Ro = () => {
	let e = So();
	Co.init({ userlist: e }), bo(Co.addUser), xo(({ name: e }) => Co.removeUser(e));
}, zo = async () => {
	try {
		let e = await mo(), t = window.PL_CURRENT;
		return jo.init({
			currentIndex: t,
			playlist: e
		}), ho(({ after: e, item: t }) => jo.addPlaylistItem(t, e)), go(({ uid: e }) => jo.removePlaylistItem(e)), jo.subscribe((e) => {
			window.PL_CURRENT = e.currentIndex;
		});
	} catch (e) {
		let t = `Failed to get initial playlist: ${e}. Retrying in 60 seconds.`;
		return console.warn(t), alert(t), await new Promise((e) => setTimeout(e, 6e4)), await zo();
	}
}, Bo = async () => {
	let e = Po(), t = Io();
	Fo(), Lo(), Ro();
	let n = await zo();
	return () => {
		e(), t(), n();
	};
};
//#endregion
//#region node_modules/svelte/src/internal/flags/legacy.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5"), at();
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/is.js
function Vo(e) {
	return typeof e == "function";
}
function Ho(e) {
	return typeof e == "object" && !!e;
}
var Uo = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function Wo(e) {
	return e == null || Uo.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => Wo(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/box/box-extras.svelte.js
var Go = Symbol("box"), Ko = Symbol("is-writable");
function q(e, t) {
	let n = /* @__PURE__ */ A(e);
	return t ? {
		[Go]: !0,
		[Ko]: !0,
		get current() {
			return L(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[Go]: !0,
		get current() {
			return e();
		}
	};
}
function qo(e) {
	return Ho(e) && Go in e;
}
function Jo(e) {
	return qo(e) ? e : Vo(e) ? q(e) : Yo(e);
}
function Yo(e) {
	let t = /* @__PURE__ */ j(Fn(e));
	return {
		[Go]: !0,
		[Ko]: !0,
		get current() {
			return L(t);
		},
		set current(e) {
			M(t, e, !0);
		}
	};
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
function Xo(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
//#endregion
//#region node_modules/inline-style-parser/esm/index.mjs
var Zo = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Qo = /\n/g, $o = /^\s*/, es = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, ts = /^:\s*/, ns = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, rs = /^[;\s]*/, is = /^\s+|\s+$/g, as = "\n", os = "/", ss = "*", cs = "", ls = "comment", us = "declaration";
function ds(e, t) {
	if (typeof e != "string") throw TypeError("First argument must be a string");
	if (!e) return [];
	t ||= {};
	var n = 1, r = 1;
	function i(e) {
		var t = e.match(Qo);
		t && (n += t.length);
		var i = e.lastIndexOf(as);
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
		c($o);
	}
	function u(e) {
		var t;
		for (e ||= []; t = d();) t !== !1 && e.push(t);
		return e;
	}
	function d() {
		var t = a();
		if (!(os != e.charAt(0) || ss != e.charAt(1))) {
			for (var n = 2; cs != e.charAt(n) && (ss != e.charAt(n) || os != e.charAt(n + 1));) ++n;
			if (n += 2, cs === e.charAt(n - 1)) return s("End of comment missing");
			var o = e.slice(2, n - 2);
			return r += 2, i(o), e = e.slice(n), r += 2, t({
				type: ls,
				comment: o
			});
		}
	}
	function f() {
		var e = a(), t = c(es);
		if (t) {
			if (d(), !c(ts)) return s("property missing ':'");
			var n = c(ns), r = e({
				type: us,
				property: fs(t[0].replace(Zo, cs)),
				value: n ? fs(n[0].replace(Zo, cs)) : cs
			});
			return c(rs), r;
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
function fs(e) {
	return e ? e.replace(is, cs) : cs;
}
//#endregion
//#region node_modules/style-to-object/esm/index.mjs
function ps(e, t) {
	let n = null;
	if (!e || typeof e != "string") return n;
	let r = ds(e), i = typeof t == "function";
	return r.forEach((e) => {
		if (e.type !== "declaration") return;
		let { property: r, value: a } = e;
		i ? t(r, a, e) : a && (n ||= {}, n[r] = a);
	}), n;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/strings.js
var ms = /\d/, hs = [
	"-",
	"_",
	"/",
	"."
];
function gs(e = "") {
	if (!ms.test(e)) return e !== e.toLowerCase();
}
function _s(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = hs.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = gs(a);
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
function vs(e) {
	return e ? _s(e).map((e) => bs(e)).join("") : "";
}
function ys(e) {
	return xs(vs(e || ""));
}
function bs(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function xs(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function Ss(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[vs(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[ys(e)] = n;
	}
	return ps(e, n), t;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
function Cs(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function ws(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var Ts = ws(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function Es(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${Ts(t)}: ${e[t]};`).join("\n");
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/style.js
function Ds(e = {}) {
	return Es(e).replace("\n", " ");
}
var Os = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/merge-props.js
function ks(e) {
	return Os.has(e);
}
function As(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
				if (a && typeof o && ks(e)) t[e] = Xo(n, i);
				else if (a && o) t[e] = Cs(n, i);
				else if (e === "class") {
					let r = Wo(n), a = Wo(i);
					r && a ? t[e] = ha(n, i) : r ? t[e] = ha(n) : a && (t[e] = ha(i));
				} else if (e === "style") {
					let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
					if (r && a) t[e] = {
						...n,
						...i
					};
					else if (r && s) {
						let r = Ss(i);
						t[e] = {
							...n,
							...r
						};
					} else if (o && a) t[e] = {
						...Ss(n),
						...i
					};
					else if (o && s) {
						let r = Ss(n), a = Ss(i);
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
	return typeof t.style == "object" && (t.style = Ds(t.style).replaceAll("\n", " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t;
}
//#endregion
//#region node_modules/runed/dist/internal/configurable-globals.js
var js = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/runed/dist/internal/utils/dom.js
function Ms(e) {
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
var Ns = class extends Map {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ j(0);
	#n = /* @__PURE__ */ j(0);
	#r = Kr || -1;
	constructor(e) {
		if (super(), e) {
			for (var [t, n] of e) super.set(t, n);
			this.#n.v = super.size;
		}
	}
	#i(e) {
		return Kr === this.#r ? /* @__PURE__ */ j(e) : kn(e);
	}
	has(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) if (super.has(e)) n = this.#i(0), t.set(e, n);
		else return L(this.#t), !1;
		return L(n), !0;
	}
	forEach(e, t) {
		this.#a(), super.forEach(e, t);
	}
	get(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) if (super.has(e)) n = this.#i(0), t.set(e, n);
		else {
			L(this.#t);
			return;
		}
		return L(n), super.get(e);
	}
	set(e, t) {
		var n = this.#e, r = n.get(e), i = super.get(e), a = super.set(e, t), o = this.#t;
		if (r === void 0) r = this.#i(0), n.set(e, r), M(this.#n, super.size), Nn(o);
		else if (i !== t) {
			Nn(r);
			var s = o.reactions === null ? null : new Set(o.reactions);
			(s === null || !r.reactions?.every((e) => s.has(e))) && Nn(o);
		}
		return a;
	}
	delete(e) {
		var t = this.#e, n = t.get(e), r = super.delete(e);
		return n !== void 0 && (t.delete(e), M(n, -1)), r && (M(this.#n, super.size), Nn(this.#t)), r;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#e;
			M(this.#n, 0);
			for (var t of e.values()) M(t, -1);
			Nn(this.#t), e.clear();
		}
	}
	#a() {
		L(this.#t);
		var e = this.#e;
		if (this.#n.v !== e.size) {
			for (var t of super.keys()) if (!e.has(t)) {
				var n = this.#i(0);
				e.set(t, n);
			}
		}
		for ([, n] of this.#e) L(n);
	}
	keys() {
		return L(this.#t), super.keys();
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
		return L(this.#n), super.size;
	}
}, Ps = class {
	#e;
	#t;
	constructor(e, t) {
		this.#e = e, this.#t = ln(t);
	}
	get current() {
		return this.#t(), this.#e();
	}
}, Fs = /\(.+\)/, Is = new Set([
	"all",
	"print",
	"screen",
	"and",
	"or",
	"not",
	"only"
]), Ls = class extends Ps {
	constructor(e, t) {
		let n = Fs.test(e) || e.split(/[\s,]+/).some((e) => Is.has(e.trim())) ? e : `(${e})`, r = window.matchMedia(n);
		super(() => r.matches, (e) => bi(r, "change", e));
	}
};
new class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: t = js, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = ln((e) => {
			let n = bi(t, "focusin", e), r = bi(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? Ms(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/runed/dist/internal/utils/is.js
function Rs(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/runed/dist/utilities/context/context.js
var zs = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return pt(this.#t);
	}
	get() {
		let e = dt(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = dt(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return ft(this.#t, e);
	}
};
//#endregion
//#region node_modules/runed/dist/utilities/watch/watch.svelte.js
function Bs(e, t) {
	switch (e) {
		case "post":
			sr(t);
			break;
		case "pre":
			lr(t);
			break;
	}
}
function Vs(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	Bs(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = R(() => n(t, o));
		return o = t, r;
	});
}
function Hs(e, t, n) {
	let r = ur(() => {
		let i = !1;
		Vs(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	sr(() => r);
}
function Us(e, t, n) {
	Vs(e, "post", t, n);
}
function Ws(e, t, n) {
	Vs(e, "pre", t, n);
}
Us.pre = Ws;
function Gs(e, t) {
	Hs(e, "post", t);
}
function Ks(e, t) {
	Hs(e, "pre", t);
}
Gs.pre = Ks;
//#endregion
//#region node_modules/runed/dist/internal/utils/get.js
function qs(e) {
	return Rs(e) ? e() : e;
}
//#endregion
//#region node_modules/runed/dist/utilities/element-size/element-size.svelte.js
var Js = class {
	#e = {
		width: 0,
		height: 0
	};
	#t = !1;
	#n;
	#r;
	#i;
	#a = /* @__PURE__ */ A(() => (L(this.#s)?.(), this.getSize().width));
	#o = /* @__PURE__ */ A(() => (L(this.#s)?.(), this.getSize().height));
	#s = /* @__PURE__ */ A(() => {
		let e = qs(this.#r);
		if (e) return ln((t) => {
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
		this.#i = t.window ?? js, this.#n = t, this.#r = e, this.#e = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		let e = qs(this.#r);
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
		return L(this.#s)?.(), this.getSize();
	}
	get width() {
		return L(this.#a);
	}
	get height() {
		return L(this.#o);
	}
};
//#endregion
//#region node_modules/runed/dist/utilities/resource/resource.svelte.js
function Ys(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function Xs(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function Zs(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ j(Fn(o)), u = /* @__PURE__ */ j(!1), d = /* @__PURE__ */ j(void 0), f = /* @__PURE__ */ j(Fn([])), p = () => {
		L(f).forEach((e) => e()), M(f, [], !0);
	}, m = (e) => {
		M(f, [...L(f), e], !0);
	}, h = async (e, n, r = !1) => {
		try {
			M(u, !0), M(d, void 0), p();
			let i = new AbortController();
			m(() => i.abort());
			let a = await t(e, n, {
				data: L(l),
				refetching: r,
				onCleanup: m,
				signal: i.signal
			});
			return M(l, a, !0), a;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || M(d, e, !0);
			return;
		} finally {
			M(u, !1);
		}
	}, g = s ? Ys(h, s) : c ? Xs(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
	return r((t, n) => {
		a && v || (v = t, g(Array.isArray(e) ? t : t[0], Array.isArray(e) ? n : n?.[0]));
	}, { lazy: i }), {
		get current() {
			return L(l);
		},
		get loading() {
			return L(u);
		},
		get error() {
			return L(d);
		},
		mutate: (e) => {
			M(l, e, !0);
		},
		refetch: (t) => {
			let n = _.map((e) => e());
			return g(Array.isArray(e) ? n : n[0], Array.isArray(e) ? n : n[0], t ?? !0);
		}
	};
}
function Qs(e, t, n) {
	return Zs(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		Us(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function $s(e, t, n) {
	return Zs(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		Us.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
Qs.pre = $s;
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/on-destroy-effect.svelte.js
function ec(e) {
	sr(() => () => {
		e();
	});
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/on-mount-effect.svelte.js
function tc(e) {
	sr(() => R(() => e()));
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-sleep.js
function nc(e, t) {
	return setTimeout(t, e);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-tick.js
function rc(e) {
	ti().then(e);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/dom.js
var ic = 1, ac = 9, oc = 11;
function sc(e) {
	return Ho(e) && e.nodeType === ic && typeof e.nodeName == "string";
}
function cc(e) {
	return Ho(e) && e.nodeType === ac;
}
function lc(e) {
	return Ho(e) && e.constructor?.name === "VisualViewport";
}
function uc(e) {
	return Ho(e) && e.nodeType !== void 0;
}
function dc(e) {
	return uc(e) && e.nodeType === oc && "host" in e;
}
function fc(e, t) {
	if (!e || !t || !sc(e) || !sc(t)) return !1;
	let n = t.getRootNode?.();
	if (e === t || e.contains(t)) return !0;
	if (n && dc(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function pc(e) {
	return cc(e) ? e : lc(e) ? e.document : e?.ownerDocument ?? document;
}
function mc(e) {
	return dc(e) ? mc(e.host) : cc(e) ? e.defaultView ?? window : sc(e) ? e.ownerDocument?.defaultView ?? window : window;
}
function hc(e) {
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
var gc = class {
	element;
	#e = /* @__PURE__ */ A(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return L(this.#e);
	}
	set root(e) {
		M(this.#e, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = q(e) : this.element = e;
	}
	getDocument = () => pc(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => hc(this.root);
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
function _c(e, t) {
	return { [oi()]: (n) => qo(e) ? (e.current = n, R(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), R(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
//#endregion
//#region node_modules/bits-ui/dist/internal/attrs.js
function vc(e) {
	return e ? "true" : "false";
}
function yc(e) {
	return e ? "true" : void 0;
}
function bc(e) {
	return e ? "open" : "closed";
}
function xc(e) {
	return e === "starting" ? { "data-starting-style": "" } : e === "ending" ? { "data-ending-style": "" } : {};
}
var Sc = class {
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
function Cc(e) {
	let t = new Sc(e);
	return {
		...t.attrs,
		selector: t.selector,
		getAttr: t.getAttr
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/is.js
var wc = typeof document < "u", Tc = Ec();
function Ec() {
	return wc && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function Dc(e) {
	return e instanceof HTMLElement;
}
function Oc(e) {
	return e instanceof Element;
}
function kc(e) {
	return e instanceof Element || e instanceof SVGElement;
}
function Ac(e) {
	return e.pointerType === "touch";
}
function jc(e) {
	return e.matches(":focus-visible");
}
function Mc(e) {
	return e !== null;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/animations-complete.js
var Nc = class {
	#e;
	#t = null;
	#n = null;
	#r = 0;
	constructor(e) {
		this.#e = e, ec(() => this.#i());
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
		this.#e.afterTick ? rc(t) : t();
	}
}, Pc = class {
	#e;
	#t;
	#n;
	#r = /* @__PURE__ */ j(!1);
	#i = /* @__PURE__ */ j(void 0);
	#a = !1;
	#o = null;
	constructor(e) {
		this.#e = e, M(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new Nc({
			ref: this.#e.ref,
			afterTick: this.#e.open
		}), ec(() => this.#s()), Us(() => this.#e.open.current, (e) => {
			if (!this.#a) {
				this.#a = !0;
				return;
			}
			if (this.#s(), !e && this.#e.shouldSkipExitAnimation?.()) {
				M(this.#r, !1), M(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			if (e && M(this.#r, !0), M(this.#i, e ? "starting" : "ending", !0), e && (this.#o = window.requestAnimationFrame(() => {
				this.#o = null, this.#e.open.current && M(this.#i, void 0);
			})), !this.#t) {
				e || M(this.#r, !1), M(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			this.#n.run(() => {
				e === this.#e.open.current && (this.#e.open.current || M(this.#r, !1), M(this.#i, void 0), this.#e.onComplete?.());
			});
		});
	}
	get shouldRender() {
		return L(this.#r);
	}
	get transitionStatus() {
		return L(this.#i);
	}
	#s() {
		this.#o !== null && (window.cancelAnimationFrame(this.#o), this.#o = null);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/noop.js
function Fc() {}
//#endregion
//#region node_modules/bits-ui/dist/internal/create-id.js
function Ic(e, t) {
	return t === void 0 ? `bits-${e}` : `bits-${e}-${t}`;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal-consumer.svelte
function Lc(e, t) {
	var n = B();
	Ui(P(n), () => t.children, (e) => {
		var n = B();
		U(P(n), () => t.children ?? x), V(e, n);
	}), V(e, n);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/bits-config.js
var Rc = new zs("BitsConfig");
function zc() {
	let e = new Bc(null, {});
	return Rc.getOr(e).opts;
}
var Bc = class {
	opts;
	constructor(e, t) {
		let n = Vc(e, t);
		this.opts = {
			defaultPortalTo: n((e) => e.defaultPortalTo),
			defaultLocale: n((e) => e.defaultLocale)
		};
	}
};
function Vc(e, t) {
	return (n) => q(() => {
		let r = n(t)?.current;
		if (r !== void 0) return r;
		if (e !== null) return n(e.opts)?.current;
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/prop-resolvers.js
function Hc(e, t) {
	return (n) => {
		let r = zc();
		return q(() => {
			let i = n();
			if (i !== void 0) return i;
			let a = e(r).current;
			return a === void 0 ? t : a;
		});
	};
}
var Uc = Hc((e) => e.defaultPortalTo, "body");
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal.svelte
function Wc(e, t) {
	D(t, !0);
	let n = Uc(() => t.to), r = mt(), i = /* @__PURE__ */ A(a);
	function a() {
		if (!wc || t.disabled) return null;
		let e = null;
		return e = typeof n.current == "string" ? document.querySelector(n.current) : n.current, e;
	}
	let o;
	function s() {
		o &&= (Bi(o), null);
	}
	Us([() => L(i), () => t.disabled], ([e, n]) => {
		if (!e || n) {
			s();
			return;
		}
		return o = Ii(Lc, {
			target: e,
			props: { children: t.children },
			context: r
		}), () => {
			s();
		};
	});
	var c = B(), l = P(c), u = (e) => {
		var n = B();
		U(P(n), () => t.children ?? x), V(e, n);
	};
	H(l, (e) => {
		t.disabled && e(u);
	}), V(e, c), O();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/events.js
var Gc = class {
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
		return bi(e, this.eventName, (e) => {
			t(e);
		}, n);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/debounce.js
function Kc(e, t = 500) {
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
function qc(e, t) {
	return e === t || e.contains(t);
}
function Jc(e) {
	return e?.ownerDocument ?? document;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/dom.js
function Yc(e, t) {
	let { clientX: n, clientY: r } = e, i = t.getBoundingClientRect();
	return n < i.left || n > i.right || r < i.top || r > i.bottom;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/focus.js
function Xc(e) {
	let t = [], n = pc(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
//#endregion
//#region node_modules/tabbable/dist/index.esm.js
var Zc = [
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
], Qc = /* @__PURE__ */ Zc.join(","), $c = typeof Element > "u", el = $c ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, tl = !$c && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, nl = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : nl(e.parentNode));
}, rl = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, il = function(e, t, n) {
	if (nl(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(Qc));
	return t && el.call(e, Qc) && r.unshift(e), r = r.filter(n), r;
}, al = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!nl(a, !1)) if (a.tagName === "SLOT") {
			var o = a.assignedElements(), s = al(o.length ? o : a.children, !0, n);
			n.flatten ? r.push.apply(r, s) : r.push({
				scopeParent: a,
				candidates: s
			});
		} else {
			el.call(a, Qc) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
			var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !nl(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
			if (c && l) {
				var u = al(c === !0 ? a.children : c.children, !0, n);
				n.flatten ? r.push.apply(r, u) : r.push({
					scopeParent: a,
					candidates: u
				});
			} else i.unshift.apply(i, a.children);
		}
	}
	return r;
}, ol = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, sl = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || rl(e)) && !ol(e) ? 0 : e.tabIndex;
}, cl = function(e, t) {
	var n = sl(e);
	return n < 0 && t && !ol(e) ? 0 : n;
}, ll = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, ul = function(e) {
	return e.tagName === "INPUT";
}, dl = function(e) {
	return ul(e) && e.type === "hidden";
}, fl = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, pl = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, ml = function(e) {
	if (!e.name) return !0;
	var t = e.form || tl(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = pl(r, e.form);
	return !i || i === e;
}, hl = function(e) {
	return ul(e) && e.type === "radio";
}, gl = function(e) {
	return hl(e) && !ml(e);
}, _l = function(e) {
	var t = e && tl(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = tl(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, vl = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, yl = function(e, t) {
	var n = t.displayCheck, r = t.getShadowRoot;
	if (n === "full-native" && "checkVisibility" in e) return !e.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	if (getComputedStyle(e).visibility === "hidden") return !0;
	var i = el.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (el.call(i, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var a = e; e;) {
				var o = e.parentElement, s = tl(e);
				if (o && !o.shadowRoot && r(o) === !0) return vl(e);
				e = e.assignedSlot ? e.assignedSlot : !o && s !== e.ownerDocument ? s.host : o;
			}
			e = a;
		}
		if (_l(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return vl(e);
	return !1;
}, bl = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return el.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, xl = function(e, t) {
	return !(t.disabled || dl(t) || yl(t, e) || fl(t) || bl(t));
}, Sl = function(e, t) {
	return !(gl(t) || sl(t) < 0 || !xl(e, t));
}, Cl = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, wl = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = cl(a, i), s = i ? wl(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(ll).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, Tl = function(e, t) {
	return t ||= {}, wl(t.getShadowRoot ? al([e], t.includeContainer, {
		filter: Sl.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: Cl
	}) : il(e, t.includeContainer, Sl.bind(null, t)));
}, El = function(e, t) {
	return t ||= {}, t.getShadowRoot ? al([e], t.includeContainer, {
		filter: xl.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : il(e, t.includeContainer, xl.bind(null, t));
}, Dl = /* @__PURE__ */ Zc.concat("iframe:not([inert]):not([inert] *)").join(","), Ol = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return el.call(e, Dl) === !1 ? !1 : xl(t, e);
}, kl = "data-context-menu-trigger", Al = "data-context-menu-content";
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/use-dismissable-layer.svelte.js
new zs("Menu.Root"), new zs("Menu.Root | Menu.Sub"), new zs("Menu.Content"), new zs("Menu.Group | Menu.RadioGroup"), new zs("Menu.RadioGroup"), new zs("Menu.CheckboxGroup"), new Gc("bitsmenuopen", {
	bubbles: !1,
	cancelable: !0
}), Cc({
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
var jl = class e {
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
	#s = Fc;
	constructor(e) {
		this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#o = e.onFocusOutside, sr(() => {
			this.#a = Jc(this.opts.ref.current);
		});
		let t = Fc, n = () => {
			this.#g(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), t();
		};
		Us([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!(!this.opts.enabled.current || !this.opts.ref.current)) return nc(1, () => {
				this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), t(), t = this.#l());
			}), n;
		}), ec(() => {
			this.#g.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), t();
		});
	}
	#c = (e) => {
		e.defaultPrevented || this.opts.ref.current && rc(() => {
			!this.opts.ref.current || this.#h(e.target) || e.target && !this.#i && this.#o.current?.(e);
		});
	};
	#l() {
		return Cs(bi(this.#a, "pointerdown", Cs(this.#f, this.#m), { capture: !0 }), bi(this.#a, "pointerdown", Cs(this.#p, this.#d)), bi(this.#a, "focusin", this.#c));
	}
	#u = (e) => {
		let t = e;
		t.defaultPrevented && (t = Fl(e)), this.#e.current(e);
	};
	#d = Kc((e) => {
		if (!this.opts.ref.current) {
			this.#s();
			return;
		}
		let t = this.opts.isValidEvent.current(e, this.opts.ref.current) || Pl(e, this.opts.ref.current);
		if (!this.#r || this.#_() || !t) {
			this.#s();
			return;
		}
		let n = e;
		if (n.defaultPrevented && (n = Fl(n)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
			this.#s();
			return;
		}
		e.pointerType === "touch" ? (this.#s(), this.#s = bi(this.#a, "click", this.#u, { once: !0 })) : this.#e.current(n);
	}, 10);
	#f = (e) => {
		this.#n[e.type] = !0;
	};
	#p = (e) => {
		this.#n[e.type] = !1;
	};
	#m = () => {
		this.opts.ref.current && (this.#r = Nl(this.opts.ref.current));
	};
	#h = (e) => this.opts.ref.current ? qc(this.opts.ref.current, e) : !1;
	#g = Kc(() => {
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
function Ml(e = [...globalThis.bitsDismissableLayers]) {
	return e.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
}
function Nl(e) {
	let t = [...globalThis.bitsDismissableLayers], n = Ml(t);
	if (n) return n[0].opts.ref.current === e;
	let [r] = t[0];
	return r.opts.ref.current === e;
}
function Pl(e, t) {
	let n = e.target;
	if (!kc(n)) return !1;
	let r = !!n.closest(`[${kl}]`), i = !!t.closest(`[${Al}]`);
	return "button" in e && e.button > 0 && !r ? !1 : "button" in e && e.button === 0 && r && i ? !0 : r && i ? !1 : Jc(n).documentElement.contains(n) && !qc(t, n) && Yc(e, t);
}
function Fl(e) {
	let t = e.currentTarget, n = e.target, r;
	r = e instanceof PointerEvent ? new PointerEvent(e.type, e) : new PointerEvent("pointerdown", e);
	let i = !1;
	return new Proxy(r, { get: (r, a) => a === "currentTarget" ? t : a === "target" ? n : a === "preventDefault" ? () => {
		i = !0, typeof r.preventDefault == "function" && r.preventDefault();
	} : a === "defaultPrevented" ? i : a in r ? r[a] : e[a] });
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/dismissible-layer.svelte
function Il(e, t) {
	D(t, !0);
	let n = K(t, "interactOutsideBehavior", 3, "close"), r = K(t, "onInteractOutside", 3, Fc), i = K(t, "onFocusOutside", 3, Fc), a = K(t, "isValidEvent", 3, () => !1), o = jl.create({
		id: q(() => t.id),
		interactOutsideBehavior: q(() => n()),
		onInteractOutside: q(() => r()),
		enabled: q(() => t.enabled),
		onFocusOutside: q(() => i()),
		isValidEvent: q(() => a()),
		ref: t.ref
	});
	var s = B();
	U(P(s), () => t.children ?? x, () => ({ props: o.props })), V(e, s), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/use-escape-layer.svelte.js
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var Ll = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	constructor(e) {
		this.opts = e, this.domContext = new gc(this.opts.ref);
		let t = Fc;
		Us(() => e.enabled.current, (n) => (n && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), t = this.#e()), () => {
			t(), globalThis.bitsEscapeLayers.delete(this);
		}));
	}
	#e = () => bi(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
	#t = (e) => {
		if (e.key !== "Escape" || !Rl(this)) return;
		let t = new KeyboardEvent(e.type, e);
		e.preventDefault();
		let n = this.opts.escapeKeydownBehavior.current;
		n !== "close" && n !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(t);
	};
};
function Rl(e) {
	let t = [...globalThis.bitsEscapeLayers], n = t.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
	if (n) return n[0] === e;
	let [r] = t[0];
	return r === e;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/escape-layer.svelte
function zl(e, t) {
	D(t, !0);
	let n = K(t, "escapeKeydownBehavior", 3, "close"), r = K(t, "onEscapeKeydown", 3, Fc);
	Ll.create({
		escapeKeydownBehavior: q(() => n()),
		onEscapeKeydown: q(() => r()),
		enabled: q(() => t.enabled),
		ref: t.ref
	});
	var i = B();
	U(P(i), () => t.children ?? x), V(e, i), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope-manager.js
var Bl = class e {
	static instance;
	#e = Yo([]);
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
}, Vl = class e {
	#e = !1;
	#t = null;
	#n = Bl.getInstance();
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
		this.#r.push(bi(t, "focusin", (t) => {
			if (this.#e || !this.#n.isActiveScope(this)) return;
			let n = t.target;
			if (n) if (e.contains(n)) this.#n.setFocusMemory(this, n);
			else {
				let n = this.#n.getFocusMemory(this);
				if (n && e.contains(n) && Ol(n)) t.preventDefault(), n.focus();
				else {
					let t = this.#u(), n = this.#d()[0];
					(t || n || e).focus();
				}
			}
		}, { capture: !0 }), bi(e, "keydown", (e) => {
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
		return this.#t ? Tl(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	#u() {
		return this.#l()[0] || null;
	}
	#d() {
		return this.#t ? El(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	static use(t) {
		let n = null;
		return Us([() => t.ref.current, () => t.enabled.current], ([r, i]) => {
			r && i ? (n ||= new e(t), n.mount(r)) : n &&= (n.unmount(), null);
		}), ec(() => {
			n?.unmount();
		}), { get props() {
			return { tabindex: -1 };
		} };
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope.svelte
function Hl(e, t) {
	D(t, !0);
	let n = K(t, "enabled", 3, !1), r = K(t, "trapFocus", 3, !1), i = K(t, "loop", 3, !1), a = K(t, "onCloseAutoFocus", 3, Fc), o = K(t, "onOpenAutoFocus", 3, Fc), s = Vl.use({
		enabled: q(() => n()),
		trap: q(() => r()),
		loop: i(),
		onCloseAutoFocus: q(() => a()),
		onOpenAutoFocus: q(() => o()),
		ref: t.ref
	});
	var c = B();
	U(P(c), () => t.focusScope ?? x, () => ({ props: s.props })), V(e, c), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/use-text-selection-layer.svelte.js
var Ul = () => {};
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var Wl = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	#e = Fc;
	#t = !1;
	#n = Ul;
	#r = Ul;
	constructor(e) {
		this.opts = e, this.domContext = new gc(e.ref);
		let t = Fc;
		Us(() => [
			this.opts.enabled.current,
			this.opts.onPointerDown.current,
			this.opts.onPointerUp.current
		], ([e, n, r]) => (this.#t = e, this.#n = n, this.#r = r, e && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), t(), t = this.#i()), () => {
			this.#t = !1, t(), this.#s(), globalThis.bitsTextSelectionLayers.delete(this);
		}));
	}
	#i() {
		return Cs(bi(this.domContext.getDocument(), "pointerdown", this.#o), bi(this.domContext.getDocument(), "pointerup", Xo(this.#s, this.#a)));
	}
	#a = (e) => {
		this.#r(e);
	};
	#o = (e) => {
		let t = this.opts.ref.current, n = e.target;
		!Dc(t) || !Dc(n) || !this.#t || !Jl(this) || !fc(t, n) || (this.#n(e), !e.defaultPrevented && (this.#e = Kl(t, this.domContext.getDocument().body)));
	};
	#s = () => {
		this.#e(), this.#e = Fc;
	};
}, Gl = (e) => e.style.userSelect || e.style.webkitUserSelect;
function Kl(e, t) {
	let n = Gl(t), r = Gl(e);
	return ql(t, "none"), ql(e, "text"), () => {
		ql(t, n), ql(e, r);
	};
}
function ql(e, t) {
	e.style.userSelect = t, e.style.webkitUserSelect = t;
}
function Jl(e) {
	let t = [...globalThis.bitsTextSelectionLayers];
	if (!t.length) return !1;
	let n = t.at(-1);
	return n ? n[0] === e : !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/text-selection-layer.svelte
function Yl(e, t) {
	D(t, !0);
	let n = K(t, "preventOverflowTextSelection", 3, !0), r = K(t, "onPointerDown", 3, Fc), i = K(t, "onPointerUp", 3, Fc);
	Wl.create({
		id: q(() => t.id),
		onPointerDown: q(() => r()),
		onPointerUp: q(() => i()),
		enabled: q(() => t.enabled && n()),
		ref: t.ref
	});
	var a = B();
	U(P(a), () => t.children ?? x), V(e, a), O();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/use-id.js
globalThis.bitsIdCounter ??= { current: 0 };
function Xl(e = "bits") {
	return globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/shared-state.svelte.js
var Zl = class {
	#e;
	#t = 0;
	#n = /* @__PURE__ */ j();
	#r;
	constructor(e) {
		this.#e = e;
	}
	#i() {
		--this.#t, this.#r && this.#t <= 0 && (this.#r(), M(this.#n, void 0), this.#r = void 0);
	}
	get(...e) {
		return this.#t += 1, L(this.#n) === void 0 && (this.#r = ur(() => {
			M(this.#n, this.#e(...e), !0);
		})), sr(() => () => {
			this.#i();
		}), L(this.#n);
	}
}, Ql = new Ns(), $l = /* @__PURE__ */ j(null), eu = null, tu = null, nu = !1, ru = q(() => {
	for (let e of Ql.values()) if (e) return !0;
	return !1;
}), iu = null, au = new Zl(() => {
	function e() {
		document.body.setAttribute("style", L($l) ?? ""), document.body.style.removeProperty("--scrollbar-width"), Tc && eu?.(), M($l, null);
	}
	function t() {
		tu !== null && (window.clearTimeout(tu), tu = null);
	}
	function n(e, n) {
		t(), nu = !0, iu = Date.now();
		let r = iu, i = () => {
			tu = null, iu === r && (su(Ql) ? nu = !1 : (nu = !1, n()));
		}, a = e === null ? 24 : e;
		tu = window.setTimeout(i, a);
	}
	function r() {
		L($l) === null && Ql.size === 0 && !nu && M($l, document.body.getAttribute("style"), !0);
	}
	return Us(() => ru.current, () => {
		if (!ru.current) return;
		r(), nu = !1;
		let e = getComputedStyle(document.documentElement), t = getComputedStyle(document.body), n = e.scrollbarGutter?.includes("stable") || t.scrollbarGutter?.includes("stable"), i = window.innerWidth - document.documentElement.clientWidth, a = {
			padding: Number.parseInt(t.paddingRight ?? "0", 10) + i,
			margin: Number.parseInt(t.marginRight ?? "0", 10)
		};
		i > 0 && !n && (document.body.style.paddingRight = `${a.padding}px`, document.body.style.marginRight = `${a.margin}px`, document.body.style.setProperty("--scrollbar-width", `${i}px`)), document.body.style.overflow = "hidden", Tc && (eu = bi(document, "touchmove", (e) => {
			e.target === document.documentElement && (e.touches.length > 1 || e.preventDefault());
		}, { passive: !1 })), rc(() => {
			document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
		});
	}), ec(() => () => {
		eu?.();
	}), {
		get lockMap() {
			return Ql;
		},
		resetBodyStyle: e,
		scheduleCleanupIfNoNewLocks: n,
		cancelPendingCleanup: t,
		ensureInitialStyleCaptured: r
	};
}), ou = class {
	#e = Xl();
	#t;
	#n = () => null;
	#r;
	locked;
	constructor(e, t = () => null) {
		this.#t = e, this.#n = t, this.#r = au.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = q(() => this.#r.lockMap.get(this.#e) ?? !1, (e) => this.#r.lockMap.set(this.#e, e)), ec(() => {
			if (this.#r.lockMap.delete(this.#e), su(this.#r.lockMap)) return;
			let e = this.#n();
			this.#r.scheduleCleanupIfNoNewLocks(e, () => {
				this.#r.resetBodyStyle();
			});
		}));
	}
};
function su(e) {
	for (let [t, n] of e) if (n) return !0;
	return !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/scroll-lock/scroll-lock.svelte
function cu(e, t) {
	D(t, !0);
	let n = K(t, "preventScroll", 3, !0), r = K(t, "restoreScrollDelay", 3, null);
	n() && new ou(n(), () => r()), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/avatar.svelte.js
var lu = Cc({
	component: "avatar",
	parts: [
		"root",
		"image",
		"fallback"
	]
}), uu = new zs("Avatar.Root"), du = class e {
	static create(t) {
		return uu.set(new e(t));
	}
	opts;
	domContext;
	attachment;
	constructor(e) {
		this.opts = e, this.domContext = new gc(this.opts.ref), this.loadImage = this.loadImage.bind(this), this.attachment = _c(this.opts.ref);
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
	#e = /* @__PURE__ */ A(() => ({
		id: this.opts.id.current,
		[lu.root]: "",
		"data-status": this.opts.loadingStatus.current,
		...this.attachment
	}));
	get props() {
		return L(this.#e);
	}
	set props(e) {
		M(this.#e, e);
	}
}, fu = class e {
	static create(t) {
		return new e(t, uu.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = _c(this.opts.ref), Us.pre([() => this.opts.src.current, () => this.opts.crossOrigin.current], ([e, t]) => {
			if (!e) {
				this.root.opts.loadingStatus.current = "error";
				return;
			}
			this.root.loadImage(e, t, this.opts.referrerPolicy.current);
		});
	}
	#e = /* @__PURE__ */ A(() => ({
		id: this.opts.id.current,
		style: { display: this.root.opts.loadingStatus.current === "loaded" ? "block" : "none" },
		"data-status": this.root.opts.loadingStatus.current,
		[lu.image]: "",
		src: this.opts.src.current,
		crossorigin: this.opts.crossOrigin.current,
		referrerpolicy: this.opts.referrerPolicy.current,
		...this.attachment
	}));
	get props() {
		return L(this.#e);
	}
	set props(e) {
		M(this.#e, e);
	}
}, pu = class e {
	static create(t) {
		return new e(t, uu.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = _c(this.opts.ref);
	}
	#e = /* @__PURE__ */ A(() => this.root.opts.loadingStatus.current === "loaded" ? { display: "none" } : void 0);
	get style() {
		return L(this.#e);
	}
	set style(e) {
		M(this.#e, e);
	}
	#t = /* @__PURE__ */ A(() => ({
		style: this.style,
		"data-status": this.root.opts.loadingStatus.current,
		[lu.fallback]: "",
		...this.attachment
	}));
	get props() {
		return L(this.#t);
	}
	set props(e) {
		M(this.#t, e);
	}
}, mu = /* @__PURE__ */ z("<div><!></div>");
function hu(e, t) {
	let n = Ni();
	D(t, !0);
	let r = K(t, "delayMs", 3, 0), i = K(t, "loadingStatus", 15, "loading"), a = K(t, "id", 19, () => Ic(n)), o = K(t, "ref", 15, null), s = /* @__PURE__ */ G(t, [
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
	]), c = du.create({
		delayMs: q(() => r()),
		loadingStatus: q(() => i(), (e) => {
			i() !== e && (i(e), t.onLoadingStatusChange?.(e));
		}),
		id: q(() => a()),
		ref: q(() => o(), (e) => o(e))
	}), l = /* @__PURE__ */ A(() => As(s, c.props));
	var u = B(), d = P(u), f = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(l) })), V(e, n);
	}, p = (e) => {
		var n = mu();
		W(n, () => ({ ...L(l) })), U(N(n), () => t.children ?? x), E(n), V(e, n);
	};
	H(d, (e) => {
		t.child ? e(f) : e(p, -1);
	}), V(e, u), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/components/avatar-image.svelte
var gu = /* @__PURE__ */ z("<img/>");
function _u(e, t) {
	let n = Ni();
	D(t, !0);
	let r = K(t, "id", 19, () => Ic(n)), i = K(t, "ref", 15, null), a = K(t, "crossorigin", 3, void 0), o = K(t, "referrerpolicy", 3, void 0), s = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"src",
		"child",
		"id",
		"ref",
		"crossorigin",
		"referrerpolicy"
	]), c = fu.create({
		src: q(() => t.src),
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e)),
		crossOrigin: q(() => a()),
		referrerPolicy: q(() => o())
	}), l = /* @__PURE__ */ A(() => As(s, c.props));
	var u = B(), d = P(u), f = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(l) })), V(e, n);
	}, p = (e) => {
		var n = gu();
		W(n, () => ({
			...L(l),
			src: t.src
		})), vi(n), V(e, n);
	};
	H(d, (e) => {
		t.child ? e(f) : e(p, -1);
	}), V(e, u), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/components/avatar-fallback.svelte
var vu = /* @__PURE__ */ z("<span><!></span>");
function yu(e, t) {
	let n = Ni();
	D(t, !0);
	let r = K(t, "id", 19, () => Ic(n)), i = K(t, "ref", 15, null), a = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref"
	]), o = pu.create({
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e))
	}), s = /* @__PURE__ */ A(() => As(a, o.props));
	var c = B(), l = P(c), u = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(s) })), V(e, n);
	}, d = (e) => {
		var n = vu();
		W(n, () => ({ ...L(s) })), U(N(n), () => t.children ?? x), E(n), V(e, n);
	};
	H(l, (e) => {
		t.child ? e(u) : e(d, -1);
	}), V(e, c), O();
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var bu = [
	"top",
	"right",
	"bottom",
	"left"
], xu = Math.min, Su = Math.max, Cu = Math.round, wu = Math.floor, Tu = (e) => ({
	x: e,
	y: e
}), Eu = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Du(e, t, n) {
	return Su(e, xu(t, n));
}
function Ou(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function ku(e) {
	return e.split("-")[0];
}
function Au(e) {
	return e.split("-")[1];
}
function ju(e) {
	return e === "x" ? "y" : "x";
}
function Mu(e) {
	return e === "y" ? "height" : "width";
}
function Nu(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Pu(e) {
	return ju(Nu(e));
}
function Fu(e, t, n) {
	n === void 0 && (n = !1);
	let r = Au(e), i = Pu(e), a = Mu(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Wu(o)), [o, Wu(o)];
}
function Iu(e) {
	let t = Wu(e);
	return [
		Lu(e),
		t,
		Lu(t)
	];
}
function Lu(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Ru = ["left", "right"], zu = ["right", "left"], Bu = ["top", "bottom"], Vu = ["bottom", "top"];
function Hu(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? zu : Ru : t ? Ru : zu;
		case "left":
		case "right": return t ? Bu : Vu;
		default: return [];
	}
}
function Uu(e, t, n, r) {
	let i = Au(e), a = Hu(ku(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Lu)))), a;
}
function Wu(e) {
	let t = ku(e);
	return Eu[t] + e.slice(t.length);
}
function Gu(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function Ku(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Gu(e);
}
function qu(e) {
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
function Ju(e, t, n) {
	let { reference: r, floating: i } = e, a = Nu(t), o = Pu(t), s = Mu(o), c = ku(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	switch (Au(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function Yu(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Ou(t, e), p = Ku(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = qu(await i.getClippingRect({
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
	}, y = qu(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Xu = 50, Zu = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Yu
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Ju(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < Xu && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Ju(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Qu = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Ou(e, t) || {};
		if (l == null) return {};
		let d = Ku(u), f = {
			x: n,
			y: r
		}, p = Pu(i), m = Mu(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], ee = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), te = ee ? ee[y] : 0;
		(!te || !await (o.isElement == null ? void 0 : o.isElement(ee))) && (te = s.floating[y] || a.floating[m]);
		let S = b / 2 - x / 2, ne = te / 2 - h[m] / 2 - 1, re = xu(d[_], ne), ie = xu(d[v], ne), ae = re, oe = te - h[m] - ie, se = te / 2 - h[m] / 2 + S, ce = Du(ae, se, oe), le = !c.arrow && Au(i) != null && se !== ce && a.reference[m] / 2 - (se < ae ? re : ie) - h[m] / 2 < 0, ue = le ? se < ae ? se - ae : se - oe : 0;
		return {
			[p]: f[p] + ue,
			data: {
				[p]: ce,
				centerOffset: se - ce - ue,
				...le && { alignmentOffset: ue }
			},
			reset: le
		};
	}
}), $u = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Ou(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = ku(r), _ = Nu(o), v = ku(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Wu(o)] : Iu(o)), x = p !== "none";
			!d && x && b.push(...Uu(o, m, p, y));
			let ee = [o, ...b], te = await s.detectOverflow(t, h), S = [], ne = i.flip?.overflows || [];
			if (l && S.push(te[g]), u) {
				let e = Fu(r, a, y);
				S.push(te[e[0]], te[e[1]]);
			}
			if (ne = [...ne, {
				placement: r,
				overflows: S
			}], !S.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = ee[e];
				if (t && (!(u === "alignment" && _ !== Nu(t)) || ne.every((e) => Nu(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: ne
					},
					reset: { placement: t }
				};
				let n = ne.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = ne.filter((e) => {
							if (x) {
								let t = Nu(e.placement);
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
function ed(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function td(e) {
	return bu.some((t) => e[t] >= 0);
}
var nd = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Ou(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = ed(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: td(e)
					} };
				}
				case "escaped": {
					let e = ed(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: td(e)
					} };
				}
				default: return {};
			}
		}
	};
}, rd = /* @__PURE__ */ new Set(["left", "top"]);
async function id(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = ku(n), s = Au(n), c = Nu(n) === "y", l = rd.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Ou(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var ad = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await id(t, e);
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
}, od = function(e) {
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
			} }, ...l } = Ou(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Nu(ku(i)), p = ju(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Du(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Du(n, h, r);
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
}, sd = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Ou(e, t), u = {
				x: n,
				y: r
			}, d = Nu(i), f = ju(d), p = u[f], m = u[d], h = Ou(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = rd.has(ku(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, cd = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = Ou(e, t), u = await o.detectOverflow(t, l), d = ku(i), f = Au(i), p = Nu(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = xu(h - u[g], v), x = xu(m - u[_], y), ee = !t.middlewareData.shift, te = b, S = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = y), (r = t.middlewareData.shift) != null && r.enabled.y && (te = v), ee && !f) {
				let e = Su(u.left, 0), t = Su(u.right, 0), n = Su(u.top, 0), r = Su(u.bottom, 0);
				p ? S = m - 2 * (e !== 0 || t !== 0 ? e + t : Su(u.left, u.right)) : te = h - 2 * (n !== 0 || r !== 0 ? n + r : Su(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: S,
				availableHeight: te
			});
			let ne = await o.getDimensions(s.floating);
			return m !== ne.width || h !== ne.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function ld() {
	return typeof window < "u";
}
function ud(e) {
	return pd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function dd(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function fd(e) {
	return ((pd(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function pd(e) {
	return ld() ? e instanceof Node || e instanceof dd(e).Node : !1;
}
function md(e) {
	return ld() ? e instanceof Element || e instanceof dd(e).Element : !1;
}
function hd(e) {
	return ld() ? e instanceof HTMLElement || e instanceof dd(e).HTMLElement : !1;
}
function gd(e) {
	return !ld() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof dd(e).ShadowRoot;
}
function _d(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Od(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function vd(e) {
	return /^(table|td|th)$/.test(ud(e));
}
function yd(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var bd = /transform|translate|scale|rotate|perspective|filter/, xd = /paint|layout|strict|content/, Sd = (e) => !!e && e !== "none", Cd;
function wd(e) {
	let t = md(e) ? Od(e) : e;
	return Sd(t.transform) || Sd(t.translate) || Sd(t.scale) || Sd(t.rotate) || Sd(t.perspective) || !Ed() && (Sd(t.backdropFilter) || Sd(t.filter)) || bd.test(t.willChange || "") || xd.test(t.contain || "");
}
function Td(e) {
	let t = Ad(e);
	for (; hd(t) && !Dd(t);) {
		if (wd(t)) return t;
		if (yd(t)) return null;
		t = Ad(t);
	}
	return null;
}
function Ed() {
	return Cd ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Cd;
}
function Dd(e) {
	return /^(html|body|#document)$/.test(ud(e));
}
function Od(e) {
	return dd(e).getComputedStyle(e);
}
function kd(e) {
	return md(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Ad(e) {
	if (ud(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || gd(e) && e.host || fd(e);
	return gd(t) ? t.host : t;
}
function jd(e) {
	let t = Ad(e);
	return Dd(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : hd(t) && _d(t) ? t : jd(t);
}
function Md(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = jd(e), i = r === e.ownerDocument?.body, a = dd(r);
	if (i) {
		let e = Nd(a);
		return t.concat(a, a.visualViewport || [], _d(r) ? r : [], e && n ? Md(e) : []);
	} else return t.concat(r, Md(r, [], n));
}
function Nd(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Pd(e) {
	let t = Od(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = hd(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Cu(n) !== a || Cu(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Fd(e) {
	return md(e) ? e : e.contextElement;
}
function Id(e) {
	let t = Fd(e);
	if (!hd(t)) return Tu(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Pd(t), o = (a ? Cu(n.width) : n.width) / r, s = (a ? Cu(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Ld = /* @__PURE__ */ Tu(0);
function Rd(e) {
	let t = dd(e);
	return !Ed() || !t.visualViewport ? Ld : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function zd(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== dd(e) ? !1 : t;
}
function Bd(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Fd(e), o = Tu(1);
	t && (r ? md(r) && (o = Id(r)) : o = Id(e));
	let s = zd(a, n, r) ? Rd(a) : Tu(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = dd(a), t = r && md(r) ? dd(r) : r, n = e, i = Nd(n);
		for (; i && r && t !== n;) {
			let e = Id(i), t = i.getBoundingClientRect(), r = Od(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = dd(i), i = Nd(n);
		}
	}
	return qu({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Vd(e, t) {
	let n = kd(e).scrollLeft;
	return t ? t.left + n : Bd(fd(e)).left + n;
}
function Hd(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Vd(e, n),
		y: n.top + t.scrollTop
	};
}
function Ud(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = fd(r), s = t ? yd(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Tu(1), u = Tu(0), d = hd(r);
	if ((d || !d && !a) && ((ud(r) !== "body" || _d(o)) && (c = kd(r)), d)) {
		let e = Bd(r);
		l = Id(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Hd(o, c) : Tu(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Wd(e) {
	return Array.from(e.getClientRects());
}
function Gd(e) {
	let t = fd(e), n = kd(e), r = e.ownerDocument.body, i = Su(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Su(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Vd(e), s = -n.scrollTop;
	return Od(r).direction === "rtl" && (o += Su(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var Kd = 25;
function qd(e, t) {
	let n = dd(e), r = fd(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Ed();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = Vd(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= Kd && (a -= o);
	} else l <= Kd && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function Jd(e, t) {
	let n = Bd(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = hd(e) ? Id(e) : Tu(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Yd(e, t, n) {
	let r;
	if (t === "viewport") r = qd(e, n);
	else if (t === "document") r = Gd(fd(e));
	else if (md(t)) r = Jd(t, n);
	else {
		let n = Rd(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return qu(r);
}
function Xd(e, t) {
	let n = Ad(e);
	return n === t || !md(n) || Dd(n) ? !1 : Od(n).position === "fixed" || Xd(n, t);
}
function Zd(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Md(e, [], !1).filter((e) => md(e) && ud(e) !== "body"), i = null, a = Od(e).position === "fixed", o = a ? Ad(e) : e;
	for (; md(o) && !Dd(o);) {
		let t = Od(o), n = wd(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || _d(o) && !n && Xd(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Ad(o);
	}
	return t.set(e, r), r;
}
function Qd(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? yd(t) ? [] : Zd(t, this._c) : [].concat(n), r], o = Yd(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Yd(t, a[e], i);
		s = Su(n.top, s), c = xu(n.right, c), l = xu(n.bottom, l), u = Su(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function $d(e) {
	let { width: t, height: n } = Pd(e);
	return {
		width: t,
		height: n
	};
}
function ef(e, t, n) {
	let r = hd(t), i = fd(t), a = n === "fixed", o = Bd(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Tu(0);
	function l() {
		c.x = Vd(i);
	}
	if (r || !r && !a) if ((ud(t) !== "body" || _d(i)) && (s = kd(t)), r) {
		let e = Bd(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Hd(i, s) : Tu(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function tf(e) {
	return Od(e).position === "static";
}
function nf(e, t) {
	if (!hd(e) || Od(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return fd(e) === n && (n = n.ownerDocument.body), n;
}
function rf(e, t) {
	let n = dd(e);
	if (yd(e)) return n;
	if (!hd(e)) {
		let t = Ad(e);
		for (; t && !Dd(t);) {
			if (md(t) && !tf(t)) return t;
			t = Ad(t);
		}
		return n;
	}
	let r = nf(e, t);
	for (; r && vd(r) && tf(r);) r = nf(r, t);
	return r && Dd(r) && tf(r) && !wd(r) ? n : r || Td(e) || n;
}
var af = async function(e) {
	let t = this.getOffsetParent || rf, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: ef(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function of(e) {
	return Od(e).direction === "rtl";
}
var sf = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Ud,
	getDocumentElement: fd,
	getClippingRect: Qd,
	getOffsetParent: rf,
	getElementRects: af,
	getClientRects: Wd,
	getDimensions: $d,
	getScale: Id,
	isElement: md,
	isRTL: of
};
function cf(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function lf(e, t) {
	let n = null, r, i = fd(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = wu(d), h = wu(i.clientWidth - (u + f)), g = wu(i.clientHeight - (d + p)), _ = wu(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Su(0, xu(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !cf(l, e.getBoundingClientRect()) && o(), y = !1;
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
function uf(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Fd(e), u = i || a ? [...l ? Md(l) : [], ...t ? Md(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? lf(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Bd(e) : null;
	c && g();
	function g() {
		let t = Bd(e);
		h && !cf(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var df = ad, ff = od, pf = $u, mf = cd, hf = nd, gf = Qu, _f = sd, vf = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: sf,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Zu(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region node_modules/bits-ui/dist/internal/floating-svelte/floating-utils.svelte.js
function yf(e) {
	return typeof e == "function" ? e() : e;
}
function bf(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xf(e, t) {
	let n = bf(e);
	return Math.round(t * n) / n;
}
function Sf(e) {
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
function Cf(e) {
	let t = e.whileElementsMounted, n = /* @__PURE__ */ A(() => yf(e.open) ?? !0), r = /* @__PURE__ */ A(() => yf(e.middleware)), i = /* @__PURE__ */ A(() => yf(e.transform) ?? !0), a = /* @__PURE__ */ A(() => yf(e.placement) ?? "bottom"), o = /* @__PURE__ */ A(() => yf(e.strategy) ?? "absolute"), s = /* @__PURE__ */ A(() => yf(e.sideOffset) ?? 0), c = /* @__PURE__ */ A(() => yf(e.alignOffset) ?? 0), l = e.reference, u = /* @__PURE__ */ j(0), d = /* @__PURE__ */ j(0), f = Yo(null), p = /* @__PURE__ */ j(Fn(L(o))), m = /* @__PURE__ */ j(Fn(L(a))), h = /* @__PURE__ */ j(Fn({})), g = /* @__PURE__ */ j(!1), _ = !1, v = 0, y = /* @__PURE__ */ A(() => {
		let e = f.current ? xf(f.current, L(u)) : L(u), t = f.current ? xf(f.current, L(d)) : L(d);
		return L(i) ? {
			position: L(p),
			left: "0",
			top: "0",
			transform: `translate(${e}px, ${t}px)`,
			...f.current && bf(f.current) >= 1.5 && { willChange: "transform" }
		} : {
			position: L(p),
			left: `${e}px`,
			top: `${t}px`
		};
	}), b;
	function x() {
		if (l.current === null || f.current === null) return;
		let e = l.current, t = f.current, i = ++v;
		vf(e, t, {
			middleware: L(r),
			placement: L(a),
			strategy: L(o)
		}).then((r) => {
			if (i === v && !(l.current !== e || f.current !== t)) {
				if (wf(e)) {
					M(h, {
						...L(h),
						hide: {
							...L(h).hide,
							referenceHidden: !0
						}
					}, !0);
					return;
				}
				if (!L(n) && L(u) !== 0 && L(d) !== 0) {
					let e = Math.max(Math.abs(L(s)), Math.abs(L(c)), 15);
					if (r.x <= e && r.y <= e) return;
				}
				M(u, r.x, !0), M(d, r.y, !0), M(p, r.strategy, !0), M(m, r.placement, !0), M(h, r.middlewareData, !0), M(g, !0);
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
		L(n) && (l.current === null || f.current === null || (b = t(l.current, f.current, x)));
	}
	function S() {
		!L(n) && f.current === null && M(g, !1);
	}
	function ne() {
		return [
			L(r),
			L(a),
			L(o),
			L(s),
			L(c),
			L(n)
		];
	}
	return sr(() => {
		t === void 0 && L(n) && x();
	}), sr(te), sr(() => {
		if (t !== void 0) {
			if (ne(), !L(n)) {
				_ = !1;
				return;
			}
			if (!L(g)) {
				_ = !1;
				return;
			}
			if (!_) {
				_ = !0;
				return;
			}
			x();
		}
	}), sr(S), sr(() => ee), {
		floating: f,
		reference: l,
		get strategy() {
			return L(p);
		},
		get placement() {
			return L(m);
		},
		get middlewareData() {
			return L(h);
		},
		get isPositioned() {
			return L(g);
		},
		get floatingStyles() {
			return L(y);
		},
		get update() {
			return x;
		}
	};
}
function wf(e) {
	return e instanceof Element ? !e.isConnected || e instanceof HTMLElement && e.hidden ? !0 : e.getClientRects().length === 0 : !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/use-floating-layer.svelte.js
var Tf = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, Ef = new zs("Floating.Root"), Df = new zs("Floating.Content"), Of = new zs("Floating.Root"), kf = class e {
	static create(t = !1) {
		return t ? Of.set(new e()) : Ef.set(new e());
	}
	anchorNode = Yo(null);
	customAnchorNode = Yo(null);
	triggerNode = Yo(null);
	constructor() {
		sr(() => {
			this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
		});
	}
}, Af = class e {
	static create(t, n = !1) {
		return n ? Df.set(new e(t, Of.get())) : Df.set(new e(t, Ef.get()));
	}
	opts;
	root;
	contentRef = Yo(null);
	wrapperRef = Yo(null);
	arrowRef = Yo(null);
	contentAttachment = _c(this.contentRef);
	wrapperAttachment = _c(this.wrapperRef);
	arrowAttachment = _c(this.arrowRef);
	arrowId = Yo(Xl());
	#e = /* @__PURE__ */ A(() => {
		if (typeof this.opts.style == "string") return Ss(this.opts.style);
		if (!this.opts.style) return {};
	});
	#t = void 0;
	#n = new Js(() => this.arrowRef.current ?? void 0);
	#r = /* @__PURE__ */ A(() => this.#n?.width ?? 0);
	#i = /* @__PURE__ */ A(() => this.#n?.height ?? 0);
	#a = /* @__PURE__ */ A(() => this.opts.side?.current + (this.opts.align.current === "center" ? "" : `-${this.opts.align.current}`));
	#o = /* @__PURE__ */ A(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
	#s = /* @__PURE__ */ A(() => L(this.#o).length > 0);
	get hasExplicitBoundaries() {
		return L(this.#s);
	}
	set hasExplicitBoundaries(e) {
		M(this.#s, e);
	}
	#c = /* @__PURE__ */ A(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: L(this.#o).filter(Mc),
		altBoundary: this.hasExplicitBoundaries
	}));
	get detectOverflowOptions() {
		return L(this.#c);
	}
	set detectOverflowOptions(e) {
		M(this.#c, e);
	}
	#l = /* @__PURE__ */ j(void 0);
	#u = /* @__PURE__ */ j(void 0);
	#d = /* @__PURE__ */ j(void 0);
	#f = /* @__PURE__ */ j(void 0);
	#p = /* @__PURE__ */ A(() => [
		df({
			mainAxis: this.opts.sideOffset.current + L(this.#i),
			alignmentAxis: this.opts.alignOffset.current
		}),
		this.opts.avoidCollisions.current && ff({
			mainAxis: !0,
			crossAxis: !1,
			limiter: this.opts.sticky.current === "partial" ? _f() : void 0,
			...this.detectOverflowOptions
		}),
		this.opts.avoidCollisions.current && pf({ ...this.detectOverflowOptions }),
		mf({
			...this.detectOverflowOptions,
			apply: ({ rects: e, availableWidth: t, availableHeight: n }) => {
				let { width: r, height: i } = e.reference;
				M(this.#l, t, !0), M(this.#u, n, !0), M(this.#d, r, !0), M(this.#f, i, !0);
			}
		}),
		this.arrowRef.current && gf({
			element: this.arrowRef.current,
			padding: this.opts.arrowPadding.current
		}),
		Mf({
			arrowWidth: L(this.#r),
			arrowHeight: L(this.#i)
		}),
		this.opts.hideWhenDetached.current && hf({
			strategy: "referenceHidden",
			...this.detectOverflowOptions
		})
	].filter(Boolean));
	get middleware() {
		return L(this.#p);
	}
	set middleware(e) {
		M(this.#p, e);
	}
	floating;
	#m = /* @__PURE__ */ A(() => Pf(this.floating.placement));
	get placedSide() {
		return L(this.#m);
	}
	set placedSide(e) {
		M(this.#m, e);
	}
	#h = /* @__PURE__ */ A(() => Ff(this.floating.placement));
	get placedAlign() {
		return L(this.#h);
	}
	set placedAlign(e) {
		M(this.#h, e);
	}
	#g = /* @__PURE__ */ A(() => this.floating.middlewareData.arrow?.x ?? 0);
	get arrowX() {
		return L(this.#g);
	}
	set arrowX(e) {
		M(this.#g, e);
	}
	#_ = /* @__PURE__ */ A(() => this.floating.middlewareData.arrow?.y ?? 0);
	get arrowY() {
		return L(this.#_);
	}
	set arrowY(e) {
		M(this.#_, e);
	}
	#v = /* @__PURE__ */ A(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
	get cannotCenterArrow() {
		return L(this.#v);
	}
	set cannotCenterArrow(e) {
		M(this.#v, e);
	}
	#y = /* @__PURE__ */ j();
	get contentZIndex() {
		return L(this.#y);
	}
	set contentZIndex(e) {
		M(this.#y, e, !0);
	}
	#b = /* @__PURE__ */ A(() => Tf[this.placedSide]);
	get arrowBaseSide() {
		return L(this.#b);
	}
	set arrowBaseSide(e) {
		M(this.#b, e);
	}
	#x = /* @__PURE__ */ A(() => ({
		id: this.opts.wrapperId.current,
		"data-bits-floating-content-wrapper": "",
		style: {
			...this.floating.floatingStyles,
			transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: this.contentZIndex,
			"--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
			"--bits-floating-available-width": `${L(this.#l)}px`,
			"--bits-floating-available-height": `${L(this.#u)}px`,
			"--bits-floating-anchor-width": `${L(this.#d)}px`,
			"--bits-floating-anchor-height": `${L(this.#f)}px`,
			...this.floating.middlewareData.hide?.referenceHidden && {
				visibility: "hidden",
				"pointer-events": "none"
			},
			...L(this.#e)
		},
		dir: this.opts.dir.current,
		...this.wrapperAttachment
	}));
	get wrapperProps() {
		return L(this.#x);
	}
	set wrapperProps(e) {
		M(this.#x, e);
	}
	#S = /* @__PURE__ */ A(() => ({
		"data-side": this.placedSide,
		"data-align": this.placedAlign,
		style: Ds({ ...L(this.#e) }),
		...this.contentAttachment
	}));
	get props() {
		return L(this.#S);
	}
	set props(e) {
		M(this.#S, e);
	}
	#C = /* @__PURE__ */ A(() => ({
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
		return L(this.#C);
	}
	set arrowStyle(e) {
		M(this.#C, e);
	}
	constructor(e, t) {
		this.opts = e, this.root = t, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), Us(() => e.customAnchor.current, (e) => {
			this.root.customAnchorNode.current = e;
		}), this.floating = Cf({
			strategy: () => this.opts.strategy.current,
			placement: () => L(this.#a),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...e) => uf(...e, { animationFrame: this.#t?.current === "always" }),
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		}), sr(() => {
			this.floating.isPositioned && this.opts.onPlaced?.current();
		}), Us(() => this.contentRef.current, (e) => {
			if (!e || !this.opts.enabled.current) return;
			let t = mc(e), n = t.requestAnimationFrame(() => {
				if (this.contentRef.current !== e || !this.opts.enabled.current) return;
				let n = t.getComputedStyle(e).zIndex;
				n !== this.contentZIndex && (this.contentZIndex = n);
			});
			return () => {
				t.cancelAnimationFrame(n);
			};
		}), sr(() => {
			this.floating.floating.current = this.wrapperRef.current;
		});
	}
}, jf = class e {
	static create(t, n = !1) {
		return n ? new e(t, Of.get()) : new e(t, Ef.get());
	}
	opts;
	root;
	constructor(e, t) {
		this.opts = e, this.root = t, e.virtualEl && e.virtualEl.current ? t.triggerNode = Jo(e.virtualEl.current) : t.triggerNode = e.ref;
	}
};
function Mf(e) {
	return {
		name: "transformOrigin",
		options: e,
		fn(t) {
			let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Nf(n), u = {
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
function Nf(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
function Pf(e) {
	return Nf(e)[0];
}
function Ff(e) {
	return Nf(e)[1];
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer.svelte
function If(e, t) {
	D(t, !0);
	let n = K(t, "tooltip", 3, !1);
	kf.create(n());
	var r = B();
	U(P(r), () => t.children ?? x), V(e, r), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-anchor.svelte
function Lf(e, t) {
	D(t, !0);
	let n = K(t, "tooltip", 3, !1);
	jf.create({
		id: q(() => t.id),
		virtualEl: q(() => t.virtualEl),
		ref: t.ref
	}, n());
	var r = B();
	U(P(r), () => t.children ?? x), V(e, r), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content.svelte
function Rf(e, t) {
	D(t, !0);
	let n = K(t, "side", 3, "bottom"), r = K(t, "sideOffset", 3, 0), i = K(t, "align", 3, "center"), a = K(t, "alignOffset", 3, 0), o = K(t, "arrowPadding", 3, 0), s = K(t, "avoidCollisions", 3, !0), c = K(t, "collisionBoundary", 19, () => []), l = K(t, "collisionPadding", 3, 0), u = K(t, "hideWhenDetached", 3, !1), d = K(t, "onPlaced", 3, () => {}), f = K(t, "sticky", 3, "partial"), p = K(t, "updatePositionStrategy", 3, "optimized"), m = K(t, "strategy", 3, "fixed"), h = K(t, "dir", 3, "ltr"), g = K(t, "style", 19, () => ({})), _ = K(t, "wrapperId", 19, Xl), v = K(t, "customAnchor", 3, null), y = K(t, "tooltip", 3, !1), b = Af.create({
		side: q(() => n()),
		sideOffset: q(() => r()),
		align: q(() => i()),
		alignOffset: q(() => a()),
		id: q(() => t.id),
		arrowPadding: q(() => o()),
		avoidCollisions: q(() => s()),
		collisionBoundary: q(() => c()),
		collisionPadding: q(() => l()),
		hideWhenDetached: q(() => u()),
		onPlaced: q(() => d()),
		sticky: q(() => f()),
		updatePositionStrategy: q(() => p()),
		strategy: q(() => m()),
		dir: q(() => h()),
		style: q(() => g()),
		enabled: q(() => t.enabled),
		wrapperId: q(() => _()),
		customAnchor: q(() => v())
	}, y()), ee = /* @__PURE__ */ A(() => As(b.wrapperProps, { style: { pointerEvents: "auto" } }));
	var te = B();
	U(P(te), () => t.content ?? x, () => ({
		props: b.props,
		wrapperProps: L(ee)
	})), V(e, te), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content-static.svelte
function zf(e, t) {
	D(t, !0), eo(() => {
		t.onPlaced?.();
	});
	var n = B();
	U(P(n), () => t.content ?? x, () => ({
		props: {},
		wrapperProps: {}
	})), V(e, n), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/separator/separator.svelte.js
var Bf = Cc({
	component: "separator",
	parts: ["root"]
}), Vf = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = _c(e.ref);
	}
	#e = /* @__PURE__ */ A(() => ({
		id: this.opts.id.current,
		role: this.opts.decorative.current ? "none" : "separator",
		"aria-orientation": this.opts.orientation.current,
		"aria-hidden": yc(this.opts.decorative.current),
		"data-orientation": this.opts.orientation.current,
		[Bf.root]: "",
		...this.attachment
	}));
	get props() {
		return L(this.#e);
	}
	set props(e) {
		M(this.#e, e);
	}
}, Hf = /* @__PURE__ */ z("<div><!></div>");
function Uf(e, t) {
	let n = Ni();
	D(t, !0);
	let r = K(t, "id", 19, () => Ic(n)), i = K(t, "ref", 15, null), a = K(t, "decorative", 3, !1), o = K(t, "orientation", 3, "horizontal"), s = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"ref",
		"child",
		"children",
		"decorative",
		"orientation"
	]), c = Vf.create({
		ref: q(() => i(), (e) => i(e)),
		id: q(() => r()),
		decorative: q(() => a()),
		orientation: q(() => o())
	}), l = /* @__PURE__ */ A(() => As(s, c.props));
	var u = B(), d = P(u), f = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(l) })), V(e, n);
	}, p = (e) => {
		var n = Hf();
		W(n, () => ({ ...L(l) })), U(N(n), () => t.children ?? x), E(n), V(e, n);
	};
	H(d, (e) => {
		t.child ? e(f) : e(p, -1);
	}), V(e, u), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-content.svelte
function Wf(e, t) {
	let n = K(t, "isStatic", 3, !1), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"content",
		"isStatic",
		"onPlaced"
	]);
	var i = B(), a = P(i), o = (e) => {
		zf(e, {
			get content() {
				return t.content;
			},
			get onPlaced() {
				return t.onPlaced;
			}
		});
	}, s = (e) => {
		Rf(e, $a({
			get content() {
				return t.content;
			},
			get onPlaced() {
				return t.onPlaced;
			}
		}, () => r));
	};
	H(a, (e) => {
		n() ? e(o) : e(s, -1);
	}), V(e, i);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-inner.svelte
var Gf = /* @__PURE__ */ z("<!> <!>", 1);
function Kf(e, t) {
	D(t, !0);
	let n = K(t, "interactOutsideBehavior", 3, "close"), r = K(t, "trapFocus", 3, !0), i = K(t, "isValidEvent", 3, () => !1), a = K(t, "customAnchor", 3, null), o = K(t, "isStatic", 3, !1), s = K(t, "tooltip", 3, !1), c = K(t, "contentPointerEvents", 3, "auto"), l = /* @__PURE__ */ G(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled.ref.tooltip.contentPointerEvents".split(".")), u = /* @__PURE__ */ A(() => t.preventScroll ?? !0), d = /* @__PURE__ */ A(() => t.strategy ?? (L(u) ? "fixed" : "absolute"));
	Wf(e, {
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
			return L(d);
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
			var d = Gf(), f = P(d), p = (e) => {
				cu(e, { get preventScroll() {
					return L(u);
				} });
			}, m = (e) => {
				cu(e, { get preventScroll() {
					return L(u);
				} });
			};
			H(f, (e) => {
				t.forceMount && t.enabled ? e(p) : t.forceMount || e(m, 1);
			}), Hl(F(f, 2), {
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
					zl(e, {
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
							Il(e, {
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
									Yl(e, {
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
											var i = B(), u = P(i);
											{
												let e = /* @__PURE__ */ A(() => ({
													props: As(l, o(), r(), a(), { style: { pointerEvents: c() } }),
													wrapperProps: s()
												}));
												U(u, () => t.popper ?? x, () => L(e));
											}
											V(e, i);
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
			}), V(e, d);
		},
		$$slots: { content: !0 }
	}), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer.svelte
function qf(e, t) {
	let n = K(t, "interactOutsideBehavior", 3, "close"), r = K(t, "trapFocus", 3, !0), i = K(t, "isValidEvent", 3, () => !1), a = K(t, "customAnchor", 3, null), o = K(t, "isStatic", 3, !1), s = /* @__PURE__ */ G(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.open.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.ref.shouldRender".split("."));
	var c = B(), l = P(c), u = (e) => {
		Kf(e, $a({
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
	H(l, (e) => {
		t.shouldRender && e(u);
	}), V(e, c);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-force-mount.svelte
function Jf(e, t) {
	let n = K(t, "interactOutsideBehavior", 3, "close"), r = K(t, "trapFocus", 3, !0), i = K(t, "isValidEvent", 3, () => !1), a = K(t, "customAnchor", 3, null), o = K(t, "isStatic", 3, !1), s = /* @__PURE__ */ G(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled".split("."));
	Kf(e, $a({
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
function Yf(e, t) {
	D(t, !0);
	let n = K(t, "mounted", 15, !1), r = K(t, "onMountedChange", 3, Fc);
	tc(() => (n(!0), r()(!0), () => {
		n(!1), r()(!1);
	})), O();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/safe-polygon.svelte.js
function Xf(e, t) {
	let [n, r] = e, i = !1, a = t.length;
	for (let e = 0, o = a - 1; e < a; o = e++) {
		let [a, s] = t[e] ?? [0, 0], [c, l] = t[o] ?? [0, 0];
		s >= r != l >= r && n <= (c - a) * (r - s) / (l - s) + a && (i = !i);
	}
	return i;
}
function Zf(e, t) {
	return e[0] >= t.left && e[0] <= t.right && e[1] >= t.top && e[1] <= t.bottom;
}
function Qf(e, t) {
	let n = e.left + e.width / 2, r = e.top + e.height / 2, i = t.left + t.width / 2, a = t.top + t.height / 2, o = i - n, s = a - r;
	return Math.abs(o) > Math.abs(s) ? o > 0 ? "right" : "left" : s > 0 ? "bottom" : "top";
}
var $f = class {
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
		this.#n = typeof t == "number" && t > 0 ? t : null, Us([
			e.triggerNode,
			e.contentNode,
			e.enabled
		], ([e, t, n]) => {
			if (!e || !t || !n) {
				this.#o = null, this.#m();
				return;
			}
			return this.#o && this.#o !== e && this.#m(), this.#o = e, [
				bi(pc(e), "pointermove", (n) => {
					this.#p([n.clientX, n.clientY], e, t);
				}),
				bi(e, "pointerleave", (e) => {
					let n = e.relatedTarget;
					if (Oc(n) && t.contains(n)) return;
					let r = this.#e.ignoredTargets?.() ?? [];
					Oc(n) && r.some((e) => e === n || e.contains(n)) || (this.#a = Oc(n) && r.length > 0 ? r.filter((e) => n.contains(e)) : [], this.#r = [e.clientX, e.clientY], this.#i = "content", this.#u());
				}),
				bi(e, "pointerenter", () => {
					this.#m();
				}),
				bi(t, "pointerenter", () => {
					this.#m();
				}),
				bi(t, "pointerleave", (t) => {
					let n = t.relatedTarget;
					Oc(n) && e.contains(n) || (this.#r = [t.clientX, t.clientY], this.#i = "trigger", this.#u());
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
		if (this.#i === "content" && Zf(e, i)) {
			this.#m();
			return;
		}
		if (this.#i === "trigger" && Zf(e, r)) {
			this.#m();
			return;
		}
		if (this.#i === "content" && this.#a.length > 0) for (let t of this.#a) {
			let n = t.getBoundingClientRect();
			if (Zf(e, n)) return;
			let i = Qf(r, n), a = this.#h(r, n, i);
			if (a && Xf(e, a)) return;
		}
		let a = Qf(r, i), o = this.#h(r, i, a);
		if (o && Xf(e, o)) return;
		let s = this.#i === "content" ? i : r;
		Xf(e, this.#g(this.#r, s, a, this.#i)) || (this.#m(), this.#e.onPointerExit());
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
}, ep = Cc({
	component: "label",
	parts: ["root"]
}), tp = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = _c(this.opts.ref), this.onmousedown = this.onmousedown.bind(this);
	}
	onmousedown(e) {
		e.detail > 1 && e.preventDefault();
	}
	#e = /* @__PURE__ */ A(() => ({
		id: this.opts.id.current,
		[ep.root]: "",
		onmousedown: this.onmousedown,
		...this.attachment
	}));
	get props() {
		return L(this.#e);
	}
	set props(e) {
		M(this.#e, e);
	}
}, np = /* @__PURE__ */ z("<label><!></label>");
function rp(e, t) {
	let n = Ni();
	D(t, !0);
	let r = K(t, "id", 19, () => Ic(n)), i = K(t, "ref", 15, null), a = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref",
		"for"
	]), o = tp.create({
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e))
	}), s = /* @__PURE__ */ A(() => As(a, o.props, { for: t.for }));
	var c = B(), l = P(c), u = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(s) })), V(e, n);
	}, d = (e) => {
		var n = np();
		W(n, () => ({
			...L(s),
			for: t.for
		})), U(N(n), () => t.children ?? x), E(n), V(e, n);
	};
	H(l, (e) => {
		t.child ? e(u) : e(d, -1);
	}), V(e, c), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/link-preview.svelte.js
var ip = Cc({
	component: "link-preview",
	parts: ["content", "trigger"]
}), ap = new zs("LinkPreview.Root"), op = class e {
	static create(t) {
		return ap.set(new e(t));
	}
	opts;
	#e = /* @__PURE__ */ j(!1);
	get hasSelection() {
		return L(this.#e);
	}
	set hasSelection(e) {
		M(this.#e, e, !0);
	}
	#t = /* @__PURE__ */ j(!1);
	get isPointerDownOnContent() {
		return L(this.#t);
	}
	set isPointerDownOnContent(e) {
		M(this.#t, e, !0);
	}
	#n = /* @__PURE__ */ j(!1);
	get containsSelection() {
		return L(this.#n);
	}
	set containsSelection(e) {
		M(this.#n, e, !0);
	}
	timeout = null;
	#r = /* @__PURE__ */ j(null);
	get contentNode() {
		return L(this.#r);
	}
	set contentNode(e) {
		M(this.#r, e, !0);
	}
	#i = /* @__PURE__ */ j(!1);
	get contentMounted() {
		return L(this.#i);
	}
	set contentMounted(e) {
		M(this.#i, e, !0);
	}
	contentPresence;
	#a = /* @__PURE__ */ j(null);
	get triggerNode() {
		return L(this.#a);
	}
	set triggerNode(e) {
		M(this.#a, e, !0);
	}
	isOpening = !1;
	domContext = new gc(() => null);
	constructor(e) {
		this.opts = e, this.contentPresence = new Pc({
			ref: q(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		}), Us(() => this.opts.open.current, (e) => {
			if (!e) {
				this.hasSelection = !1;
				return;
			}
			if (!this.domContext) return;
			let t = bi(this.domContext.getDocument(), "pointerup", () => {
				this.containsSelection = !1, this.isPointerDownOnContent = !1, nc(1, () => {
					this.domContext.getDocument().getSelection()?.toString() === "" ? this.hasSelection = !1 : this.hasSelection = !0;
				});
			});
			if (!this.contentNode) return;
			let n = Xc(this.contentNode);
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
}, sp = class e {
	static create(t) {
		return new e(t, ap.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = _c(this.opts.ref, (e) => this.root.triggerNode = e), this.root.domContext = new gc(e.ref), this.onpointerenter = this.onpointerenter.bind(this), this.onpointerleave = this.onpointerleave.bind(this), this.onfocus = this.onfocus.bind(this), this.onblur = this.onblur.bind(this);
	}
	onpointerenter(e) {
		Ac(e) || this.root.handleOpen();
	}
	onpointerleave(e) {
		Ac(e) || (!this.root.contentMounted || !this.root.opts.open.current) && this.root.immediateClose();
	}
	onfocus(e) {
		jc(e.currentTarget) && this.root.handleOpen();
	}
	onblur(e) {
		this.root.handleClose();
	}
	#e = /* @__PURE__ */ A(() => ({
		id: this.opts.id.current,
		"aria-haspopup": "dialog",
		"aria-expanded": vc(this.root.opts.open.current),
		"data-state": bc(this.root.opts.open.current),
		"aria-controls": this.root.contentNode?.id,
		role: "button",
		[ip.trigger]: "",
		onpointerenter: this.onpointerenter,
		onfocus: this.onfocus,
		onblur: this.onblur,
		onpointerleave: this.onpointerleave,
		...this.attachment
	}));
	get props() {
		return L(this.#e);
	}
	set props(e) {
		M(this.#e, e);
	}
}, cp = class e {
	static create(t) {
		return new e(t, ap.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = _c(this.opts.ref, (e) => this.root.contentNode = e), this.root.domContext = new gc(e.ref), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerenter = this.onpointerenter.bind(this), this.onfocusout = this.onfocusout.bind(this), new $f({
			triggerNode: () => this.root.triggerNode,
			contentNode: () => this.opts.ref.current,
			enabled: () => this.root.opts.open.current,
			onPointerExit: () => {
				this.root.handleClose();
			}
		}), ec(() => {
			this.root.clearTimeout();
		});
	}
	onpointerdown(e) {
		let t = e.target;
		Oc(t) && (e.currentTarget.contains(t) && (this.root.containsSelection = !0), this.root.hasSelection = !0, this.root.isPointerDownOnContent = !0);
	}
	onpointerenter(e) {
		Ac(e) || this.root.handleOpen();
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
	#e = /* @__PURE__ */ A(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return L(this.#e);
	}
	set snippetProps(e) {
		M(this.#e, e);
	}
	#t = /* @__PURE__ */ A(() => ({
		id: this.opts.id.current,
		tabindex: -1,
		"data-state": bc(this.root.opts.open.current),
		...xc(this.root.contentPresence.transitionStatus),
		[ip.content]: "",
		onpointerdown: this.onpointerdown,
		onpointerenter: this.onpointerenter,
		onfocusout: this.onfocusout,
		...this.attachment
	}));
	get props() {
		return L(this.#t);
	}
	set props(e) {
		M(this.#t, e);
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
function lp(e, t) {
	D(t, !0);
	let n = K(t, "disabled", 3, !1), r = K(t, "open", 15, !1), i = K(t, "onOpenChange", 3, Fc), a = K(t, "onOpenChangeComplete", 3, Fc), o = K(t, "openDelay", 3, 700), s = K(t, "closeDelay", 3, 300);
	op.create({
		disabled: q(() => n()),
		open: q(() => r(), (e) => {
			r(e), i()(e);
		}),
		openDelay: q(() => o()),
		closeDelay: q(() => s()),
		onOpenChangeComplete: q(() => a())
	});
	var c = B();
	ea(P(c), () => If, (e, n) => {
		n(e, {
			children: (e, n) => {
				var r = B();
				U(P(r), () => t.children ?? x), V(e, r);
			},
			$$slots: { default: !0 }
		});
	}), V(e, c), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview-content.svelte
var up = /* @__PURE__ */ z("<div><div><!></div></div>"), dp = /* @__PURE__ */ z("<!> <!>", 1), fp = /* @__PURE__ */ z("<div><div><!></div></div>"), pp = /* @__PURE__ */ z("<!> <!>", 1);
function mp(e, t) {
	let n = Ni();
	D(t, !0);
	let r = K(t, "id", 19, () => Ic(n)), i = K(t, "ref", 15, null), a = K(t, "side", 3, "top"), o = K(t, "sideOffset", 3, 0), s = K(t, "align", 3, "center"), c = K(t, "avoidCollisions", 3, !0), l = K(t, "arrowPadding", 3, 0), u = K(t, "sticky", 3, "partial"), d = K(t, "hideWhenDetached", 3, !1), f = K(t, "collisionPadding", 3, 0), p = K(t, "onInteractOutside", 3, Fc), m = K(t, "onEscapeKeydown", 3, Fc), h = K(t, "forceMount", 3, !1), g = /* @__PURE__ */ G(t, [
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
	]), _ = cp.create({
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e)),
		onInteractOutside: q(() => p()),
		onEscapeKeydown: q(() => m())
	}), v = /* @__PURE__ */ A(() => ({
		side: a(),
		sideOffset: o(),
		align: s(),
		avoidCollisions: c(),
		arrowPadding: l(),
		sticky: u(),
		hideWhenDetached: d(),
		collisionPadding: f()
	})), y = /* @__PURE__ */ A(() => As(g, L(v), _.props));
	var b = B(), ee = P(b), te = (e) => {
		Jf(e, $a(() => L(y), () => _.popperProps, {
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
				let r = () => n?.().props, i = () => n?.().wrapperProps, a = /* @__PURE__ */ A(() => As(r(), { style: Sf("link-preview") }, { style: t.style }));
				var o = dp(), s = P(o), c = (e) => {
					var n = B(), r = P(n);
					{
						let e = /* @__PURE__ */ A(() => ({
							props: L(a),
							wrapperProps: i(),
							..._.snippetProps
						}));
						U(r, () => t.child, () => L(e));
					}
					V(e, n);
				}, l = (e) => {
					var n = up();
					W(n, () => ({ ...i() }));
					var r = N(n);
					W(r, () => ({ ...L(a) })), U(N(r), () => t.children ?? x), E(r), E(n), V(e, n);
				};
				H(s, (e) => {
					t.child ? e(c) : e(l, -1);
				}), Yf(F(s, 2), {
					get mounted() {
						return _.root.contentMounted;
					},
					set mounted(e) {
						_.root.contentMounted = e;
					}
				}), V(e, o);
			},
			$$slots: { popper: !0 }
		}));
	}, S = (e) => {
		qf(e, $a(() => L(y), () => _.popperProps, {
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
				let r = () => n?.().props, i = () => n?.().wrapperProps, a = /* @__PURE__ */ A(() => As(r(), { style: Sf("link-preview") }, { style: t.style }));
				var o = pp(), s = P(o), c = (e) => {
					var n = B(), r = P(n);
					{
						let e = /* @__PURE__ */ A(() => ({
							props: L(a),
							wrapperProps: i(),
							..._.snippetProps
						}));
						U(r, () => t.child, () => L(e));
					}
					V(e, n);
				}, l = (e) => {
					var n = fp();
					W(n, () => ({ ...i() }));
					var r = N(n);
					W(r, () => ({ ...L(a) })), U(N(r), () => t.children ?? x), E(r), E(n), V(e, n);
				};
				H(s, (e) => {
					t.child ? e(c) : e(l, -1);
				}), Yf(F(s, 2), {
					get mounted() {
						return _.root.contentMounted;
					},
					set mounted(e) {
						_.root.contentMounted = e;
					}
				}), V(e, o);
			},
			$$slots: { popper: !0 }
		}));
	};
	H(ee, (e) => {
		h() ? e(te) : h() || e(S, 1);
	}), V(e, b), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview-trigger.svelte
var hp = /* @__PURE__ */ z("<a><!></a>");
function gp(e, t) {
	let n = Ni();
	D(t, !0);
	let r = K(t, "ref", 15, null), i = K(t, "id", 19, () => Ic(n)), a = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"id",
		"child",
		"children"
	]), o = sp.create({
		id: q(() => i()),
		ref: q(() => r(), (e) => r(e))
	}), s = /* @__PURE__ */ A(() => As(a, o.props));
	var c = B();
	ea(P(c), () => Lf, (e, n) => {
		n(e, {
			get id() {
				return i();
			},
			get ref() {
				return o.opts.ref;
			},
			children: (e, n) => {
				var r = B(), i = P(r), a = (e) => {
					var n = B();
					U(P(n), () => t.child, () => ({ props: L(s) })), V(e, n);
				}, o = (e) => {
					var n = hp();
					W(n, () => ({ ...L(s) })), U(N(n), () => t.children ?? x), E(n), V(e, n);
				};
				H(i, (e) => {
					t.child ? e(a) : e(o, -1);
				}), V(e, r);
			},
			$$slots: { default: !0 }
		});
	}), V(e, c), O();
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var _p = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, vp = (e, t) => ({
	classGroupId: e,
	validator: t
}), yp = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), bp = "-", xp = [], Sp = "arbitrary..", Cp = (e) => {
	let t = Ep(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Tp(e);
			let n = e.split(bp);
			return wp(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? _p(i, t) : t : i || xp;
			}
			return n[e] || xp;
		}
	};
}, wp = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = wp(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(bp) : e.slice(t).join(bp), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Tp = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Sp + r : void 0;
})(), Ep = (e) => {
	let { theme: t, classGroups: n } = e;
	return Dp(n, t);
}, Dp = (e, t) => {
	let n = yp();
	for (let r in e) {
		let i = e[r];
		Op(i, n, r, t);
	}
	return n;
}, Op = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		kp(i, t, n, r);
	}
}, kp = (e, t, n, r) => {
	if (typeof e == "string") {
		Ap(e, t, n);
		return;
	}
	if (typeof e == "function") {
		jp(e, t, n, r);
		return;
	}
	Mp(e, t, n, r);
}, Ap = (e, t, n) => {
	let r = e === "" ? t : Np(t, e);
	r.classGroupId = n;
}, jp = (e, t, n, r) => {
	if (Pp(e)) {
		Op(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(vp(n, e));
}, Mp = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Op(o, Np(t, a), n, r);
	}
}, Np = (e, t) => {
	let n = e, r = t.split(bp), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = yp(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Pp = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Fp = (e) => {
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
}, Ip = "!", Lp = ":", Rp = [], zp = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), Bp = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Lp) {
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
		s.endsWith(Ip) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Ip) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return zp(t, l, c, u);
	};
	if (t) {
		let e = t + Lp, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : zp(Rp, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, Vp = (e) => {
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
}, Hp = (e) => ({
	cache: Fp(e.cacheSize),
	parseClassName: Bp(e),
	sortModifiers: Vp(e),
	postfixLookupClassGroupIds: Up(e),
	...Cp(e)
}), Up = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, Wp = /\s+/, Gp = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(Wp), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + Ip : _, y = v + g;
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
}, Kp = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = qp(n)) && (i && (i += " "), i += r);
	return i;
}, qp = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = qp(e[r])) && (n && (n += " "), n += t);
	return n;
}, Jp = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = Hp(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = Gp(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Kp(...e));
}, Yp = [], Xp = (e) => {
	let t = (t) => t[e] || Yp;
	return t.isThemeGetter = !0, t;
}, Zp = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Qp = /^\((?:(\w[\w-]*):)?(.+)\)$/i, $p = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, em = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, tm = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, rm = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, im = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, am = (e) => $p.test(e), J = (e) => !!e && !Number.isNaN(Number(e)), om = (e) => !!e && Number.isInteger(Number(e)), sm = (e) => e.endsWith("%") && J(e.slice(0, -1)), cm = (e) => em.test(e), lm = () => !0, um = (e) => tm.test(e) && !nm.test(e), dm = () => !1, fm = (e) => rm.test(e), pm = (e) => im.test(e), mm = (e) => !Y(e) && !X(e), hm = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), gm = (e) => jm(e, Fm, dm), Y = (e) => Zp.test(e), _m = (e) => jm(e, Im, um), vm = (e) => jm(e, Lm, J), ym = (e) => jm(e, zm, lm), bm = (e) => jm(e, Rm, dm), xm = (e) => jm(e, Nm, dm), Sm = (e) => jm(e, Pm, pm), Cm = (e) => jm(e, Bm, fm), X = (e) => Qp.test(e), wm = (e) => Mm(e, Im), Tm = (e) => Mm(e, Rm), Em = (e) => Mm(e, Nm), Dm = (e) => Mm(e, Fm), Om = (e) => Mm(e, Pm), km = (e) => Mm(e, Bm, !0), Am = (e) => Mm(e, zm, !0), jm = (e, t, n) => {
	let r = Zp.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Mm = (e, t, n = !1) => {
	let r = Qp.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Nm = (e) => e === "position" || e === "percentage", Pm = (e) => e === "image" || e === "url", Fm = (e) => e === "length" || e === "size" || e === "bg-size", Im = (e) => e === "length", Lm = (e) => e === "number", Rm = (e) => e === "family-name", zm = (e) => e === "number" || e === "weight", Bm = (e) => e === "shadow", Vm = () => {
	let e = Xp("color"), t = Xp("font"), n = Xp("text"), r = Xp("font-weight"), i = Xp("tracking"), a = Xp("leading"), o = Xp("breakpoint"), s = Xp("container"), c = Xp("spacing"), l = Xp("radius"), u = Xp("shadow"), d = Xp("inset-shadow"), f = Xp("text-shadow"), p = Xp("drop-shadow"), m = Xp("blur"), h = Xp("perspective"), g = Xp("aspect"), _ = Xp("ease"), v = Xp("animate"), y = () => [
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
		X,
		Y,
		c
	], ne = () => [
		am,
		"full",
		"auto",
		...S()
	], re = () => [
		om,
		"none",
		"subgrid",
		X,
		Y
	], ie = () => [
		"auto",
		{ span: [
			"full",
			om,
			X,
			Y
		] },
		om,
		X,
		Y
	], ae = () => [
		om,
		"auto",
		X,
		Y
	], oe = () => [
		"auto",
		"min",
		"max",
		"fr",
		X,
		Y
	], se = () => [
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
	], ce = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], le = () => ["auto", ...S()], ue = () => [
		am,
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
	], de = () => [
		am,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...S()
	], fe = () => [
		am,
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
	], C = () => [
		e,
		X,
		Y
	], pe = () => [
		...b(),
		Em,
		xm,
		{ position: [X, Y] }
	], me = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], he = () => [
		"auto",
		"cover",
		"contain",
		Dm,
		gm,
		{ size: [X, Y] }
	], ge = () => [
		sm,
		wm,
		_m
	], _e = () => [
		"",
		"none",
		"full",
		l,
		X,
		Y
	], ve = () => [
		"",
		J,
		wm,
		_m
	], ye = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], be = () => [
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
	], xe = () => [
		J,
		sm,
		Em,
		xm
	], Se = () => [
		"",
		"none",
		m,
		X,
		Y
	], Ce = () => [
		"none",
		J,
		X,
		Y
	], we = () => [
		"none",
		J,
		X,
		Y
	], Te = () => [
		J,
		X,
		Y
	], Ee = () => [
		am,
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
			blur: [cm],
			breakpoint: [cm],
			color: [lm],
			container: [cm],
			"drop-shadow": [cm],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [mm],
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
			"inset-shadow": [cm],
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
			radius: [cm],
			shadow: [cm],
			spacing: ["px", J],
			text: [cm],
			"text-shadow": [cm],
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
				am,
				Y,
				X,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				X,
				Y
			] }],
			"container-named": [hm],
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
			inset: [{ inset: ne() }],
			"inset-x": [{ "inset-x": ne() }],
			"inset-y": [{ "inset-y": ne() }],
			start: [{
				"inset-s": ne(),
				start: ne()
			}],
			end: [{
				"inset-e": ne(),
				end: ne()
			}],
			"inset-bs": [{ "inset-bs": ne() }],
			"inset-be": [{ "inset-be": ne() }],
			top: [{ top: ne() }],
			right: [{ right: ne() }],
			bottom: [{ bottom: ne() }],
			left: [{ left: ne() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				om,
				"auto",
				X,
				Y
			] }],
			basis: [{ basis: [
				am,
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
				J,
				am,
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
				om,
				"first",
				"last",
				"none",
				X,
				Y
			] }],
			"grid-cols": [{ "grid-cols": re() }],
			"col-start-end": [{ col: ie() }],
			"col-start": [{ "col-start": ae() }],
			"col-end": [{ "col-end": ae() }],
			"grid-rows": [{ "grid-rows": re() }],
			"row-start-end": [{ row: ie() }],
			"row-start": [{ "row-start": ae() }],
			"row-end": [{ "row-end": ae() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": oe() }],
			"auto-rows": [{ "auto-rows": oe() }],
			gap: [{ gap: S() }],
			"gap-x": [{ "gap-x": S() }],
			"gap-y": [{ "gap-y": S() }],
			"justify-content": [{ justify: [...se(), "normal"] }],
			"justify-items": [{ "justify-items": [...ce(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...ce()] }],
			"align-content": [{ content: ["normal", ...se()] }],
			"align-items": [{ items: [...ce(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...ce(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": se() }],
			"place-items": [{ "place-items": [...ce(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...ce()] }],
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
			m: [{ m: le() }],
			mx: [{ mx: le() }],
			my: [{ my: le() }],
			ms: [{ ms: le() }],
			me: [{ me: le() }],
			mbs: [{ mbs: le() }],
			mbe: [{ mbe: le() }],
			mt: [{ mt: le() }],
			mr: [{ mr: le() }],
			mb: [{ mb: le() }],
			ml: [{ ml: le() }],
			"space-x": [{ "space-x": S() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": S() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: ue() }],
			"inline-size": [{ inline: ["auto", ...de()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...de()] }],
			"max-inline-size": [{ "max-inline": ["none", ...de()] }],
			"block-size": [{ block: ["auto", ...fe()] }],
			"min-block-size": [{ "min-block": ["auto", ...fe()] }],
			"max-block-size": [{ "max-block": ["none", ...fe()] }],
			w: [{ w: [
				s,
				"screen",
				...ue()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...ue()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...ue()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...ue()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...ue()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...ue()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				wm,
				_m
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Am,
				ym
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
				sm,
				Y
			] }],
			"font-family": [{ font: [
				Tm,
				bm,
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
				vm
			] }],
			leading: [{ leading: [a, ...S()] }],
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
			"placeholder-color": [{ placeholder: C() }],
			"text-color": [{ text: C() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...ye(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				J,
				"from-font",
				"auto",
				X,
				_m
			] }],
			"text-decoration-color": [{ decoration: C() }],
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
			indent: [{ indent: S() }],
			"tab-size": [{ tab: [
				om,
				X,
				Y
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
			"bg-position": [{ bg: pe() }],
			"bg-repeat": [{ bg: me() }],
			"bg-size": [{ bg: he() }],
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
						om,
						X,
						Y
					],
					radial: [
						"",
						X,
						Y
					],
					conic: [
						om,
						X,
						Y
					]
				},
				Om,
				Sm
			] }],
			"bg-color": [{ bg: C() }],
			"gradient-from-pos": [{ from: ge() }],
			"gradient-via-pos": [{ via: ge() }],
			"gradient-to-pos": [{ to: ge() }],
			"gradient-from": [{ from: C() }],
			"gradient-via": [{ via: C() }],
			"gradient-to": [{ to: C() }],
			rounded: [{ rounded: _e() }],
			"rounded-s": [{ "rounded-s": _e() }],
			"rounded-e": [{ "rounded-e": _e() }],
			"rounded-t": [{ "rounded-t": _e() }],
			"rounded-r": [{ "rounded-r": _e() }],
			"rounded-b": [{ "rounded-b": _e() }],
			"rounded-l": [{ "rounded-l": _e() }],
			"rounded-ss": [{ "rounded-ss": _e() }],
			"rounded-se": [{ "rounded-se": _e() }],
			"rounded-ee": [{ "rounded-ee": _e() }],
			"rounded-es": [{ "rounded-es": _e() }],
			"rounded-tl": [{ "rounded-tl": _e() }],
			"rounded-tr": [{ "rounded-tr": _e() }],
			"rounded-br": [{ "rounded-br": _e() }],
			"rounded-bl": [{ "rounded-bl": _e() }],
			"border-w": [{ border: ve() }],
			"border-w-x": [{ "border-x": ve() }],
			"border-w-y": [{ "border-y": ve() }],
			"border-w-s": [{ "border-s": ve() }],
			"border-w-e": [{ "border-e": ve() }],
			"border-w-bs": [{ "border-bs": ve() }],
			"border-w-be": [{ "border-be": ve() }],
			"border-w-t": [{ "border-t": ve() }],
			"border-w-r": [{ "border-r": ve() }],
			"border-w-b": [{ "border-b": ve() }],
			"border-w-l": [{ "border-l": ve() }],
			"divide-x": [{ "divide-x": ve() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": ve() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...ye(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...ye(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: C() }],
			"border-color-x": [{ "border-x": C() }],
			"border-color-y": [{ "border-y": C() }],
			"border-color-s": [{ "border-s": C() }],
			"border-color-e": [{ "border-e": C() }],
			"border-color-bs": [{ "border-bs": C() }],
			"border-color-be": [{ "border-be": C() }],
			"border-color-t": [{ "border-t": C() }],
			"border-color-r": [{ "border-r": C() }],
			"border-color-b": [{ "border-b": C() }],
			"border-color-l": [{ "border-l": C() }],
			"divide-color": [{ divide: C() }],
			"outline-style": [{ outline: [
				...ye(),
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
				wm,
				_m
			] }],
			"outline-color": [{ outline: C() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				km,
				Cm
			] }],
			"shadow-color": [{ shadow: C() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				km,
				Cm
			] }],
			"inset-shadow-color": [{ "inset-shadow": C() }],
			"ring-w": [{ ring: ve() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: C() }],
			"ring-offset-w": [{ "ring-offset": [J, _m] }],
			"ring-offset-color": [{ "ring-offset": C() }],
			"inset-ring-w": [{ "inset-ring": ve() }],
			"inset-ring-color": [{ "inset-ring": C() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				km,
				Cm
			] }],
			"text-shadow-color": [{ "text-shadow": C() }],
			opacity: [{ opacity: [
				J,
				X,
				Y
			] }],
			"mix-blend": [{ "mix-blend": [
				...be(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": be() }],
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
			"mask-image-linear-from-pos": [{ "mask-linear-from": xe() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": xe() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": C() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": C() }],
			"mask-image-t-from-pos": [{ "mask-t-from": xe() }],
			"mask-image-t-to-pos": [{ "mask-t-to": xe() }],
			"mask-image-t-from-color": [{ "mask-t-from": C() }],
			"mask-image-t-to-color": [{ "mask-t-to": C() }],
			"mask-image-r-from-pos": [{ "mask-r-from": xe() }],
			"mask-image-r-to-pos": [{ "mask-r-to": xe() }],
			"mask-image-r-from-color": [{ "mask-r-from": C() }],
			"mask-image-r-to-color": [{ "mask-r-to": C() }],
			"mask-image-b-from-pos": [{ "mask-b-from": xe() }],
			"mask-image-b-to-pos": [{ "mask-b-to": xe() }],
			"mask-image-b-from-color": [{ "mask-b-from": C() }],
			"mask-image-b-to-color": [{ "mask-b-to": C() }],
			"mask-image-l-from-pos": [{ "mask-l-from": xe() }],
			"mask-image-l-to-pos": [{ "mask-l-to": xe() }],
			"mask-image-l-from-color": [{ "mask-l-from": C() }],
			"mask-image-l-to-color": [{ "mask-l-to": C() }],
			"mask-image-x-from-pos": [{ "mask-x-from": xe() }],
			"mask-image-x-to-pos": [{ "mask-x-to": xe() }],
			"mask-image-x-from-color": [{ "mask-x-from": C() }],
			"mask-image-x-to-color": [{ "mask-x-to": C() }],
			"mask-image-y-from-pos": [{ "mask-y-from": xe() }],
			"mask-image-y-to-pos": [{ "mask-y-to": xe() }],
			"mask-image-y-from-color": [{ "mask-y-from": C() }],
			"mask-image-y-to-color": [{ "mask-y-to": C() }],
			"mask-image-radial": [{ "mask-radial": [X, Y] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": xe() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": xe() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": C() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": C() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [J] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": xe() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": xe() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": C() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": C() }],
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
			"mask-position": [{ mask: pe() }],
			"mask-repeat": [{ mask: me() }],
			"mask-size": [{ mask: he() }],
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
			blur: [{ blur: Se() }],
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
				km,
				Cm
			] }],
			"drop-shadow-color": [{ "drop-shadow": C() }],
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
			"backdrop-blur": [{ "backdrop-blur": Se() }],
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
			rotate: [{ rotate: Ce() }],
			"rotate-x": [{ "rotate-x": Ce() }],
			"rotate-y": [{ "rotate-y": Ce() }],
			"rotate-z": [{ "rotate-z": Ce() }],
			scale: [{ scale: we() }],
			"scale-x": [{ "scale-x": we() }],
			"scale-y": [{ "scale-y": we() }],
			"scale-z": [{ "scale-z": we() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: Te() }],
			"skew-x": [{ "skew-x": Te() }],
			"skew-y": [{ "skew-y": Te() }],
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
			translate: [{ translate: Ee() }],
			"translate-x": [{ "translate-x": Ee() }],
			"translate-y": [{ "translate-y": Ee() }],
			"translate-z": [{ "translate-z": Ee() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				om,
				X,
				Y
			] }],
			accent: [{ accent: C() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: C() }],
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
			"scrollbar-thumb-color": [{ "scrollbar-thumb": C() }],
			"scrollbar-track-color": [{ "scrollbar-track": C() }],
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
				X,
				Y
			] }],
			fill: [{ fill: ["none", ...C()] }],
			"stroke-w": [{ stroke: [
				J,
				wm,
				_m,
				vm
			] }],
			stroke: [{ stroke: ["none", ...C()] }],
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
}, Hm = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (Um(e, "cacheSize", t), Um(e, "prefix", n), Um(e, "experimentalParseClassName", r), Wm(e.theme, a.theme), Wm(e.classGroups, a.classGroups), Wm(e.conflictingClassGroups, a.conflictingClassGroups), Wm(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Um(e, "postfixLookupClassGroups", a.postfixLookupClassGroups), Um(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Gm(e.theme, i.theme), Gm(e.classGroups, i.classGroups), Gm(e.conflictingClassGroups, i.conflictingClassGroups), Gm(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Km(e, i, "postfixLookupClassGroups"), Km(e, i, "orderSensitiveModifiers"), e), Um = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, Wm = (e, t) => {
	if (t) for (let n in t) Um(e, n, t[n]);
}, Gm = (e, t) => {
	if (t) for (let n in t) Km(e, t, n);
}, Km = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, qm = (e, ...t) => typeof e == "function" ? Jp(Vm, e, ...t) : Jp(() => Hm(Vm(), e), ...t), Jm = /* @__PURE__ */ Jp(Vm), Z = (...e) => Jm(ha(e)), Ym = new Ls("min-width: 768px"), Xm = new Ls("min-width: 1024px");
//#endregion
//#region src/lib/components/ui/avatar/avatar.svelte
function Zm(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "loadingStatus", 15, "loading"), i = K(t, "size", 3, "default"), a = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"loadingStatus",
		"size",
		"class"
	]);
	var o = B(), s = P(o);
	{
		let e = /* @__PURE__ */ A(() => Z("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten", t.class));
		ea(s, () => hu, (t, o) => {
			o(t, $a({
				"data-slot": "avatar",
				get "data-size"() {
					return i();
				},
				get class() {
					return L(e);
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
	V(e, o), O();
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-image.svelte
function Qm(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var i = B(), a = P(i);
	{
		let e = /* @__PURE__ */ A(() => Z("rounded-full aspect-square size-full object-cover", t.class));
		ea(a, () => _u, (t, i) => {
			i(t, $a({
				"data-slot": "avatar-image",
				get class() {
					return L(e);
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
	V(e, i), O();
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-fallback.svelte
function $m(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var i = B(), a = P(i);
	{
		let e = /* @__PURE__ */ A(() => Z("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", t.class));
		ea(a, () => yu, (t, i) => {
			i(t, $a({
				"data-slot": "avatar-fallback",
				get class() {
					return L(e);
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
	V(e, i), O();
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-badge.svelte
var eh = /* @__PURE__ */ z("<span><!></span>");
function th(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = eh();
	W(i, (e) => ({
		"data-slot": "avatar-badge",
		class: e,
		...r
	}), [() => Z("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", t.class)]), U(N(i), () => t.children ?? x), E(i), Ja(i, (e) => n(e), () => n()), V(e, i), O();
}
//#endregion
//#region src/shared/components/common/ChannelAvatar.svelte
var nh = /* @__PURE__ */ z("<!> <!> <!>", 1), rh = /* @__PURE__ */ z("<div><!></div>");
function ih(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class",
		"imgSrc",
		"isConnected"
	]), r = /* @__PURE__ */ A(() => t.isConnected ? "Socket: Connected" : "Socket: Disconnected");
	var i = rh();
	W(i, (e) => ({
		class: e,
		...n
	}), [() => Z("", t.class)]), Zm(N(i), {
		class: "rounded-lg",
		children: (e, n) => {
			var i = nh(), a = P(i);
			Qm(a, {
				get src() {
					return t.imgSrc;
				},
				alt: "Channel Logo"
			});
			var o = F(a, 2), s = (e) => {
				{
					let n = /* @__PURE__ */ A(() => Z(t.isConnected ? "bg-green-500" : "bg-red-500"));
					th(e, {
						get title() {
							return L(r);
						},
						get class() {
							return L(n);
						}
					});
				}
			};
			H(o, (e) => {
				typeof t.isConnected == "boolean" && e(s);
			}), $m(F(o, 2), {
				children: (e, t) => {
					Ze(), V(e, Mi("Channel Logo"));
				},
				$$slots: { default: !0 }
			}), V(e, i);
		},
		$$slots: { default: !0 }
	}), E(i), V(e, i), O();
}
//#endregion
//#region src/shared/components/common/VersionBadge.svelte
var ah = /* @__PURE__ */ z("<div><div class=\"absolute top-[18%] left-[-75%] w-[250%] -rotate-45 bg-primary py-[0.25em] pr-[1.5em] text-center text-[0.6rem] leading-none font-bold shadow-md\"> </div></div>");
function oh(e, t) {
	D(t, !0);
	let n = K(t, "appVersion", 3, "unknown"), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"appVersion",
		"class"
	]), i = /* @__PURE__ */ A(() => Ym.current ? `App Version: ${n()}` : "");
	var a = ah();
	W(a, (e) => ({
		class: e,
		...r
	}), [() => Z("relative h-15 w-15 shrink-0 overflow-hidden", t.class)]);
	var o = N(a), s = N(o, !0);
	E(o), E(a), hr(() => {
		Ra(o, "title", L(i)), Fi(s, n());
	}), V(e, a), O();
}
//#endregion
//#region node_modules/valibot/dist/index.mjs
var sh, ch = {
	lang: void 0,
	message: void 0,
	abortEarly: void 0,
	abortPipeEarly: void 0
};
/* @__NO_SIDE_EFFECTS__ */
function lh(e) {
	return !e && !sh ? ch : {
		lang: e?.lang ?? sh?.lang,
		message: e?.message,
		abortEarly: e?.abortEarly ?? sh?.abortEarly,
		abortPipeEarly: e?.abortPipeEarly ?? sh?.abortPipeEarly
	};
}
var uh;
/* @__NO_SIDE_EFFECTS__ */
function dh(e) {
	return uh?.get(e);
}
var fh;
/* @__NO_SIDE_EFFECTS__ */
function ph(e) {
	return fh?.get(e);
}
var mh;
/* @__NO_SIDE_EFFECTS__ */
function hh(e, t) {
	return mh?.get(e)?.get(t);
}
/* @__NO_SIDE_EFFECTS__ */
function gh(e) {
	let t = typeof e;
	return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function _h(e, t, n, r, i) {
	let a = i && "input" in i ? i.input : n.value, o = i?.expected ?? e.expects ?? null, s = i?.received ?? /* @__PURE__ */ gh(a), c = {
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
	}, l = e.kind === "schema", u = i?.message ?? e.message ?? /* @__PURE__ */ hh(e.reference, c.lang) ?? (l ? /* @__PURE__ */ ph(c.lang) : null) ?? r.message ?? /* @__PURE__ */ dh(c.lang);
	u !== void 0 && (c.message = typeof u == "function" ? u(c) : u), l && (n.typed = !1), n.issues ? n.issues.push(c) : n.issues = [c];
}
var vh = /* @__PURE__ */ new WeakMap();
/* @__NO_SIDE_EFFECTS__ */
function yh(e) {
	let t = vh.get(e);
	return t || (t = {
		version: 1,
		vendor: "valibot",
		validate(t) {
			return e["~run"]({ value: t }, /* @__PURE__ */ lh());
		}
	}, vh.set(e, t)), t;
}
/* @__NO_SIDE_EFFECTS__ */
function bh(e, t) {
	return {
		kind: "validation",
		type: "max_length",
		reference: bh,
		async: !1,
		expects: `<=${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && e.value.length > this.requirement && _h(this, "length", e, t, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function xh(e, t) {
	return {
		kind: "validation",
		type: "min_length",
		reference: xh,
		async: !1,
		expects: `>=${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && e.value.length < this.requirement && _h(this, "length", e, t, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Sh(e, t) {
	return {
		kind: "validation",
		type: "regex",
		reference: Sh,
		async: !1,
		expects: `${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && !this.requirement.test(e.value) && _h(this, "format", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Ch(e) {
	return {
		kind: "schema",
		type: "string",
		reference: Ch,
		expects: "string",
		async: !1,
		message: e,
		get "~standard"() {
			return /* @__PURE__ */ yh(this);
		},
		"~run"(e, t) {
			return typeof e.value == "string" ? e.typed = !0 : _h(this, "type", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function wh(...e) {
	return {
		...e[0],
		pipe: e,
		get "~standard"() {
			return /* @__PURE__ */ yh(this);
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
function Th(e, t, n) {
	let r = e["~run"]({ value: t }, /* @__PURE__ */ lh(n));
	return {
		typed: r.typed,
		success: !r.issues,
		output: r.value,
		issues: r.issues
	};
}
//#endregion
//#region node_modules/tailwind-variants/dist/chunk-LQJYWU4O.js
var Eh = /\s+/g, Dh = (e) => typeof e != "string" || !e ? e : e.replace(Eh, " ").trim(), Oh = (...e) => {
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
	return t.length > 0 ? Dh(t.join(" ")) : void 0;
}, kh = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, Ah = (e) => {
	if (!e || typeof e != "object") return !0;
	for (let t in e) return !1;
	return !0;
}, jh = (e, t) => {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let i = 0; i < n.length; i++) {
		let a = n[i];
		if (!r.includes(a) || e[a] !== t[a]) return !1;
	}
	return !0;
}, Mh = (e, t) => {
	for (let n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
		let r = t[n];
		n in e ? e[n] = Oh(e[n], r) : e[n] = r;
	}
	return e;
}, Nh = (e, t) => {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		Array.isArray(r) ? Nh(r, t) : r && t.push(r);
	}
}, Ph = (...e) => {
	let t = [];
	Nh(e, t);
	let n = [];
	for (let e = 0; e < t.length; e++) t[e] && n.push(t[e]);
	return n;
}, Fh = (e, t) => {
	let n = {};
	for (let r in e) {
		let i = e[r];
		if (r in t) {
			let e = t[r];
			Array.isArray(i) || Array.isArray(e) ? n[r] = Ph(e, i) : typeof i == "object" && typeof e == "object" && i && e ? n[r] = Fh(i, e) : n[r] = e + " " + i;
		} else n[r] = i;
	}
	for (let r in t) r in e || (n[r] = t[r]);
	return n;
}, Ih = {
	twMerge: !0,
	twMergeConfig: {}
};
function Lh() {
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
var Rh = Lh(), zh = (e) => {
	let t = (t, n) => {
		let { extend: r = null, slots: i = {}, variants: a = {}, compoundVariants: o = [], compoundSlots: s = [], defaultVariants: c = {} } = t, l = {
			...Ih,
			...n
		}, u = r?.base ? Oh(r.base, t?.base) : t?.base, d = r?.variants && !Ah(r.variants) ? Fh(a, r.variants) : a, f = r?.defaultVariants && !Ah(r.defaultVariants) ? {
			...r.defaultVariants,
			...c
		} : c;
		!Ah(l.twMergeConfig) && !jh(l.twMergeConfig, Rh.cachedTwMergeConfig) && (Rh.didTwMergeConfigChange = !0, Rh.cachedTwMergeConfig = l.twMergeConfig);
		let p = Ah(r?.slots), m = Ah(i) ? {} : {
			base: Oh(t?.base, p && r?.base),
			...i
		}, h = p ? m : Mh({ ...r?.slots }, Ah(m) ? { base: t?.base } : m), g = Ah(r?.compoundVariants) ? o : Ph(r?.compoundVariants, o), _ = (t) => {
			if (Ah(d) && Ah(i) && p) return e(u, t?.class, t?.className)(l);
			if (g && !Array.isArray(g)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof g}`);
			if (s && !Array.isArray(s)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
			let n = (e, n = d, r = null, i = null) => {
				let a = n[e];
				if (!a || Ah(a)) return null;
				let o = i?.[e] ?? t?.[e];
				if (o === null) return null;
				let s = kh(o);
				if (typeof s == "object") return null;
				let c = f?.[e];
				return a[(s ?? kh(c)) || "false"];
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
					if (!Ah(o)) {
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
			if (!Ah(i) || !p) {
				let t = {};
				if (typeof h == "object" && !Ah(h)) {
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
		createTV: (e) => (n, r) => t(n, r ? Fh(e, r) : e)
	};
}, Bh = (e) => Ah(e) ? Jm : qm({
	...e,
	extend: {
		theme: e.theme,
		classGroups: e.classGroups,
		conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
		conflictingClassGroups: e.conflictingClassGroups,
		...e.extend
	}
}), Vh = (e, t) => {
	let n = Oh(e);
	return !n || !(t?.twMerge ?? !0) ? n : ((!Rh.cachedTwMerge || Rh.didTwMergeConfigChange) && (Rh.didTwMergeConfigChange = !1, Rh.cachedTwMerge = Bh(Rh.cachedTwMergeConfig)), Rh.cachedTwMerge(n) || void 0);
}, { createTV: Hh, tv: Uh } = zh((...e) => (t) => Vh(e, t)), Wh = Uh({
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
}), Gh = /* @__PURE__ */ z("<a><!></a>"), Kh = /* @__PURE__ */ z("<button><!></button>");
function qh(e, t) {
	D(t, !0);
	let n = K(t, "variant", 3, "default"), r = K(t, "size", 3, "default"), i = K(t, "ref", 15, null), a = K(t, "href", 3, void 0), o = K(t, "type", 3, "button"), s = /* @__PURE__ */ G(t, [
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
	var c = B(), l = P(c), u = (e) => {
		var o = Gh();
		W(o, (e) => ({
			"data-slot": "button",
			class: e,
			href: t.disabled ? void 0 : a(),
			"aria-disabled": t.disabled,
			role: t.disabled ? "link" : void 0,
			tabindex: t.disabled ? -1 : void 0,
			...s
		}), [() => Z(Wh({
			variant: n(),
			size: r()
		}), t.class)]), U(N(o), () => t.children ?? x), E(o), Ja(o, (e) => i(e), () => i()), V(e, o);
	}, d = (e) => {
		var a = Kh();
		W(a, (e) => ({
			"data-slot": "button",
			class: e,
			type: o(),
			disabled: t.disabled,
			...s
		}), [() => Z(Wh({
			variant: n(),
			size: r()
		}), t.class)]), U(N(a), () => t.children ?? x), E(a), Ja(a, (e) => i(e), () => i()), V(e, a);
	};
	H(l, (e) => {
		a() ? e(u) : e(d, -1);
	}), V(e, c), O();
}
//#endregion
//#region src/lib/components/ui/field/field.svelte
var Jh = Uh({
	base: "data-[invalid=true]:text-destructive gap-2 group/field flex w-full",
	variants: { orientation: {
		vertical: "cn-field-orientation-vertical flex-col [&>*]:w-full [&>.sr-only]:w-auto",
		horizontal: "cn-field-orientation-horizontal flex-row items-center has-[>[data-slot=field-content]]:items-start [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "cn-field-orientation-responsive flex-col @md/field-group:flex-row @md/field-group:items-center @md/field-group:has-[>[data-slot=field-content]]:items-start [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
}), Yh = /* @__PURE__ */ z("<div><!></div>");
function Xh(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "orientation", 3, "vertical"), i = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"orientation",
		"children"
	]);
	var a = Yh();
	W(a, (e) => ({
		role: "group",
		"data-slot": "field",
		"data-orientation": r(),
		class: e,
		...i
	}), [() => Z(Jh({ orientation: r() }), t.class)]), U(N(a), () => t.children ?? x), E(a), Ja(a, (e) => n(e), () => n()), V(e, a), O();
}
//#endregion
//#region src/lib/components/ui/field/field-group.svelte
var Zh = /* @__PURE__ */ z("<div><!></div>");
function Qh(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Zh();
	W(i, (e) => ({
		"data-slot": "field-group",
		class: e,
		...r
	}), [() => Z("gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col", t.class)]), U(N(i), () => t.children ?? x), E(i), Ja(i, (e) => n(e), () => n()), V(e, i), O();
}
//#endregion
//#region src/lib/components/ui/label/label.svelte
function $h(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var i = B(), a = P(i);
	{
		let e = /* @__PURE__ */ A(() => Z("gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed", t.class));
		ea(a, () => rp, (t, i) => {
			i(t, $a({
				"data-slot": "label",
				get class() {
					return L(e);
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
	V(e, i), O();
}
//#endregion
//#region src/lib/components/ui/separator/separator.svelte
function eg(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "data-slot", 3, "separator"), i = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"data-slot"
	]);
	var a = B(), o = P(a);
	{
		let e = /* @__PURE__ */ A(() => Z("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px", "data-[orientation=vertical]:h-full", t.class));
		ea(o, () => Uf, (t, a) => {
			a(t, $a({
				get "data-slot"() {
					return r();
				},
				get class() {
					return L(e);
				}
			}, () => i, {
				get ref() {
					return n();
				},
				set ref(e) {
					n(e);
				}
			}));
		});
	}
	V(e, a), O();
}
//#endregion
//#region src/lib/components/ui/input/input.svelte
var tg = /* @__PURE__ */ z("<input/>"), ng = /* @__PURE__ */ z("<input/>");
function rg(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "value", 15), i = K(t, "files", 15), a = K(t, "data-slot", 3, "input"), o = /* @__PURE__ */ G(t, [
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
	var s = B(), c = P(s), l = (e) => {
		var s = tg();
		W(s, (e) => ({
			"data-slot": a(),
			class: e,
			type: "file",
			...o
		}), [() => Z("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", t.class)], void 0, void 0, void 0, !0), Ja(s, (e) => n(e), () => n()), Ka(s, i), Ua(s, r), V(e, s);
	}, u = (e) => {
		var i = ng();
		W(i, (e) => ({
			"data-slot": a(),
			class: e,
			type: t.type,
			...o
		}), [() => Z("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", t.class)], void 0, void 0, void 0, !0), Ja(i, (e) => n(e), () => n()), Ua(i, r), V(e, i);
	};
	H(c, (e) => {
		t.type === "file" ? e(l) : e(u, -1);
	}), V(e, s), O();
}
//#endregion
//#region src/shared/api/http.ts
var ig = async (e) => fetch(e), ag = async (e, t) => fetch(e, {
	body: t,
	credentials: "include",
	headers: { "Content-Type": "application/x-www-form-urlencoded" },
	method: "POST",
	redirect: "manual"
}), og = {
	status: !1,
	username: ""
}, sg = (e) => {
	let { subscribe: t, set: n, update: r } = jt({
		...og,
		...e
	});
	return {
		set: n,
		subscribe: t,
		init: (e) => n(e),
		resetStatus: () => r((e) => ({
			...e,
			status: og.status
		})),
		resetUsername: () => r((e) => ({
			...e,
			username: og.username
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
}, cg = async (e) => new Promise((t, n) => {
	po.once("login", (e) => {
		if (e.success) {
			t(e.name);
			return;
		}
		n(e.error);
	}), po.emit("login", e);
}), lg = async () => new Promise((e) => {
	po.once("rank", e);
}), ug = async (e) => {
	await ag(new URL("/login", window.location.origin), new URLSearchParams(e));
	let t = await (await ig(new URL(window.location.href))).text(), n = new DOMParser().parseFromString(t, "text/html").querySelector("input[name=\"_csrf\"]");
	if (!n) {
		console.warn("login response missing csrf value");
		return;
	}
	let r = n.value;
	ko.updateCSRF(r);
}, dg = async (e) => {
	await ag(new URL("/logout", window.location.origin), new URLSearchParams(e));
}, fg = async (e, t) => {
	po.disconnected && await uo();
	let n = cg({
		name: e,
		pw: t
	}), r = lg(), i = await n, a = await r;
	if (Do.updateName(i), Do.updateLoggedIn(!0), Do.updateRank(a), !t) return;
	let { csrf: o } = Mt(ko);
	ug({
		_csrf: o,
		name: e,
		password: t,
		remember: "on"
	});
}, pg = async () => {
	po.connected && await fo();
	let { csrf: e } = Mt(ko);
	await dg({ _csrf: e }), Do.resetName(), Do.resetLoggedIn(), Do.resetRank(), po.disconnected && await uo();
}, mg = sg(), hg = [
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
], gg = [
	["path", {
		d: "M12 20V8",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M17 4H7",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}]
], _g = [
	["path", {
		d: "M4 12H16",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M8.99996 7C8.99996 7 4.00001 10.6824 4 12C3.99999 13.3176 9 17 9 17",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M20 7V17",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}]
], vg = [
	["path", {
		d: "M20 12H8",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M15 7C15 7 20 10.6824 20 12C20 13.3176 15 17 15 17",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M4 7V17",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}]
], yg = [
	["path", {
		d: "M18 4L5.99997 4",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M12 8V20",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M15.9999 12C15.9999 12 13.054 8.00001 11.9999 8C10.9458 7.99999 7.99994 12 7.99994 12",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}]
], bg = [["path", {
	d: "M8 8.00049V6.00049C8 3.79135 9.79086 2.00049 12 2.00049C14.2091 2.00049 16 3.79135 16 6.00049V18.0005C16 20.2096 14.2091 22.0005 12 22.0005C9.79086 22.0005 8 20.2096 8 18.0005V13.5005C8 12.1198 9.11929 11.0005 10.5 11.0005C11.8807 11.0005 13 12.1198 13 13.5005V16.0005",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}]], xg = [["path", {
	d: "M14.5563 13.2183C13.514 14.2606 11.8241 14.2606 10.7817 13.2183C9.73942 12.1759 9.73942 10.486 10.7817 9.44364L13.1409 7.0845C14.1357 6.08961 15.7206 6.04433 16.7692 6.94866M16.4437 3.78175C17.486 2.73942 19.1759 2.73942 20.2183 3.78175C21.2606 4.82408 21.2606 6.51403 20.2183 7.55636L17.8591 9.9155C16.8643 10.9104 15.2794 10.9557 14.2308 10.0513",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}], ["path", {
	d: "M10.4999 3C7.21257 3 5.56889 3 4.46256 3.9079C4.25998 4.07414 4.07423 4.25989 3.90798 4.46247C3.00007 5.56879 3.00006 7.21247 3.00002 10.4998L3 12.9999C2.99996 16.7712 2.99995 18.6568 4.17152 19.8284C5.3431 21 7.22873 21 11 21H13.4999C16.7874 21 18.4311 21 19.5375 20.092C19.74 19.9258 19.9257 19.7401 20.092 19.5376C20.9999 18.4312 20.9999 16.7875 20.9999 13.5",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "1"
}]], Sg = [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M10 10C10 10.5 9.32205 11 8.5 11C7.67795 11 7 10.5523 7 10",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M17 10C17 8.34315 16.3284 7 15.5 7C14.6716 7 14 8.34315 14 10",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}],
	["path", {
		d: "M16.633 13.5C17.1164 14.1528 17.1867 15.1365 16.4482 15.8211C14.9899 17.173 13.148 15.7039 12.2062 15.6704C11.2635 15.637 10.7624 16.555 8.86254 16.9554C7.70902 17.1985 7 16.5 7 15.6704",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "3"
	}]
], Cg = [
	["path", {
		d: "M12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28248 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28248 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5Z",
		stroke: "currentColor",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M7 21.5L7 2.5",
		stroke: "currentColor",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M17 21.5L17 2.5",
		stroke: "currentColor",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}],
	["path", {
		d: "M17 12L7 12",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "3"
	}],
	["path", {
		d: "M7 16L3 16M7 8L3 8",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "4"
	}],
	["path", {
		d: "M21 16L17 16M21 8L17 8",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "5"
	}]
], wg = [
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
], Tg = [
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
], Eg = [["path", {
	d: "M11.9532 2.00004C17.5019 2.00004 22 6.47719 22 12C22 17.5229 17.5019 22 11.9532 22C-0.631103 22 -1.82658 4.01759 11.4985 5.00004C14.8499 5.24714 18.0289 8.41019 18.0289 12C18.0289 16.5 15.2348 18.5 11.4985 18.5C4.5 18.5 3.19042 8.46695 11.0021 9.00004C12.508 9.1028 14.0162 10.3432 14.0162 12C14.0162 13.9279 13 15 11.1211 15",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}]], Dg = [["path", {
	d: "M5.25 5L19.25 19",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}], ["path", {
	d: "M22.25 12C22.25 6.47715 17.7728 2 12.25 2C6.72715 2 2.25 6.47715 2.25 12C2.25 17.5228 6.72715 22 12.25 22C17.7728 22 22.25 17.5228 22.25 12Z",
	stroke: "currentColor",
	strokeWidth: "1.5",
	key: "1"
}]], Og = [
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
], kg = [
	["path", {
		d: "M14 8.5C14 5.73858 11.7614 3.5 9 3.5C6.23858 3.5 4 5.73858 4 8.5C4 11.2614 6.23858 13.5 9 13.5C11.7614 13.5 14 11.2614 14 8.5Z",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M16 20.5C16 16.634 12.866 13.5 9 13.5C5.13401 13.5 2 16.634 2 20.5",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M17 10L22 10",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}],
	["path", {
		d: "M17 13L22 13",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "3"
	}],
	["path", {
		d: "M20 16L22 16",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "4"
	}]
], Ag = [["path", {
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
}]], jg = [
	["path", {
		d: "M2.00189 1.99988L21.9772 21.9999",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M16.8516 16.8677C16.7224 17.8061 16.4665 18.4668 15.9595 18.9744C14.9356 19.9996 13.2877 19.9996 9.992 19.9996H8.99323C5.69749 19.9996 4.04961 19.9996 3.02575 18.9744C2.00189 17.9493 2.00189 16.2994 2.00189 12.9996V10.9996C2.00189 7.69971 2.00189 6.04979 3.02575 5.02466C3.36827 4.68172 3.78062 4.45351 4.30114 4.30164",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M8.23627 4.0004C8.47815 3.99988 8.72995 3.99988 8.99217 3.99988H9.99093C13.2867 3.99988 14.9346 3.99988 15.9584 5.02501C16.9822 6.05013 16.9822 7.70005 16.9822 10.9999V12.7573M16.9822 9.2313L19.3018 7.52901C20.7729 6.54061 21.4489 7.17184 21.6674 7.64835C22.1191 8.92801 21.9768 11.3935 21.9768 14.5416C21.8703 16.5549 21.5952 16.7718 21.3137 16.9938L21.3107 16.9961",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}]
], Mg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function Ng(e, t) {
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
			e.setAttribute(Mg(t), String(n));
		}), e.innerHTML = "", f.forEach(([t, n]) => {
			let r = document.createElementNS("http://www.w3.org/2000/svg", t), i = { ...n };
			p !== void 0 && (i["stroke-width"] = p, i.stroke = "currentColor"), Object.entries(i).forEach(([e, t]) => {
				r.setAttribute(Mg(e), String(t));
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
var Pg = /* @__PURE__ */ ji("<svg></svg>");
function Fg(e, t) {
	D(t, !0);
	let n = K(t, "size", 3, 24), r = K(t, "absoluteStrokeWidth", 3, !1), i = K(t, "color", 3, "currentColor"), a = K(t, "showAlt", 3, !1), o = K(t, "class", 3, ""), s = K(t, "className", 3, ""), c = /* @__PURE__ */ G(t, [
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
	]), l = /* @__PURE__ */ A(() => o() || s()), u, d = /* @__PURE__ */ j(void 0), f = /* @__PURE__ */ j(void 0), p = /* @__PURE__ */ A(() => ({
		size: n(),
		strokeWidth: t.strokeWidth,
		absoluteStrokeWidth: r(),
		color: i(),
		altIcon: t.altIcon,
		showAlt: a(),
		class: L(l)
	}));
	eo(() => {
		if (u) return M(d, Ng("HugeiconsIcon", t.icon), !0), M(f, L(d).render(u, L(p)), !0), () => {
			L(f)?.destroy();
		};
	}), sr(() => {
		L(d) && u && L(f) && L(f).update(L(p));
	});
	var m = Pg();
	W(m, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		width: n(),
		height: n(),
		viewBox: "0 0 24 24",
		fill: "none",
		class: L(l),
		...c
	})), Ja(m, (e) => u = e, () => u), V(e, m), O();
}
//#endregion
//#region src/features/auth/AuthAvatar.svelte
var Ig = /* @__PURE__ */ z("<div><span><!></span></div>");
function Lg(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class",
		"isLoading",
		"isAnon",
		"isGuest"
	]);
	var r = Ig();
	W(r, (e) => ({
		class: e,
		...n
	}), [() => Z("", t.class)]);
	var i = N(r), a = N(i), o = (e) => {
		Fg(e, {
			get icon() {
				return wg;
			},
			class: "size-5 animate-spin",
			role: "status",
			"aria-label": "Loading"
		});
	}, s = (e) => {
		Fg(e, {
			get icon() {
				return hg;
			},
			class: "size-5"
		});
	}, c = (e) => {
		Fg(e, {
			get icon() {
				return Ag;
			},
			class: "size-5"
		});
	}, l = (e) => {
		Fg(e, {
			get icon() {
				return Og;
			},
			class: "size-5"
		});
	};
	H(a, (e) => {
		t.isLoading ? e(o) : t.isAnon ? e(s, 1) : t.isGuest ? e(c, 2) : e(l, -1);
	}), E(i), E(r), V(e, r), O();
}
//#endregion
//#region src/features/auth/LoginForm.svelte
var Rg = 1, zg = 20, Bg = 100, Vg = /* @__PURE__ */ wh(/* @__PURE__ */ Ch(), /* @__PURE__ */ xh(Rg, "Min 1 character"), /* @__PURE__ */ bh(zg, "Max 20 characters"), /* @__PURE__ */ Sh(/^[A-Za-zА-Яа-я0-9_-]+$/, "Only letters, numbers, -, or _")), Hg = /* @__PURE__ */ wh(/* @__PURE__ */ Ch(), /* @__PURE__ */ bh(Bg, "Max 100 characters")), Ug = /* @__PURE__ */ z("<!> <!> <!> <!>", 1), Wg = /* @__PURE__ */ z("<div><form><!></form></div>");
function Gg(e, t) {
	D(t, !0);
	let n = () => It(mg, "$authStore", r), [r, i] = Lt(), a = /* @__PURE__ */ A(() => n().status), o = /* @__PURE__ */ A(() => n().username), s = /* @__PURE__ */ A(() => /* @__PURE__ */ Th(Vg, L(o))), c = /* @__PURE__ */ A(() => L(s).success), l = /* @__PURE__ */ A(() => L(o) !== "" && !L(c)), u = /* @__PURE__ */ A(() => L(s).success ? "" : L(s).issues.map((e) => e.message).join(", ")), d = /* @__PURE__ */ A(() => n().password || ""), f = /* @__PURE__ */ A(() => !L(c) || L(a)), p = /* @__PURE__ */ A(() => /* @__PURE__ */ Th(Hg, L(d))), m = /* @__PURE__ */ A(() => L(p).success), h = /* @__PURE__ */ A(() => L(d) !== "" && !L(m)), g = /* @__PURE__ */ A(() => L(p).success ? "" : L(p).issues.map((e) => e.message).join(", ")), _ = /* @__PURE__ */ A(() => L(a) || !L(c) || L(c) && !L(m)), v = async (e) => {
		if (e.preventDefault(), !L(_)) try {
			zt(mg, R(n).status = !0, R(n)), await new Promise((e) => setTimeout(e, 500)), await fg(L(o), L(d));
		} catch (e) {
			console.error(e);
		} finally {
			zt(mg, R(n).status = !1, R(n)), zt(mg, R(n).username = "", R(n)), zt(mg, R(n).password = void 0, R(n));
		}
	}, y = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class"
	]);
	var b = Wg();
	W(b, (e) => ({
		class: e,
		...y
	}), [() => Z("", t.class)]);
	var x = N(b);
	Qh(N(x), {
		children: (e, t) => {
			Xh(e, {
				orientation: "horizontal",
				class: "flex flex-row items-center justify-end",
				children: (e, t) => {
					var r = Ug(), i = P(r), s = (e) => {
						{
							let t = /* @__PURE__ */ A(() => L(o) === "" && L(d) === ""), n = /* @__PURE__ */ A(() => L(d) === "");
							Lg(e, {
								get isLoading() {
									return L(a);
								},
								get isAnon() {
									return L(t);
								},
								get isGuest() {
									return L(n);
								}
							});
						}
					};
					H(i, (e) => {
						Xm.current && e(s);
					});
					var c = F(i, 2);
					{
						let e = /* @__PURE__ */ A(() => L(l) ? L(u) : ""), t = /* @__PURE__ */ A(() => Z({ "md:cursor-not-allowed": L(a) }));
						rg(c, {
							required: !0,
							type: "text",
							autocomplete: "name",
							placeholder: "Username",
							get "aria-invalid"() {
								return L(l);
							},
							get title() {
								return L(e);
							},
							get disabled() {
								return L(a);
							},
							get class() {
								return L(t);
							},
							get value() {
								return n().username;
							},
							set value(e) {
								zt(mg, R(n).username = e, R(n));
							}
						});
					}
					var p = F(c, 2);
					{
						let e = /* @__PURE__ */ A(() => L(h) ? L(g) : ""), t = /* @__PURE__ */ A(() => Z({ "md:cursor-not-allowed": L(f) }));
						rg(p, {
							name: "password",
							type: "password",
							autocomplete: "current-password",
							placeholder: "Password",
							get "aria-invalid"() {
								return L(h);
							},
							get title() {
								return L(e);
							},
							get disabled() {
								return L(f);
							},
							get class() {
								return L(t);
							},
							get value() {
								return n().password;
							},
							set value(e) {
								zt(mg, R(n).password = e, R(n));
							}
						});
					}
					var m = F(p, 2);
					{
						let e = /* @__PURE__ */ A(() => Z({ "md:cursor-not-allowed": L(_) }));
						qh(m, {
							type: "submit",
							get disabled() {
								return L(_);
							},
							get class() {
								return L(e);
							},
							children: (e, t) => {
								Ze(), V(e, Mi("Login"));
							},
							$$slots: { default: !0 }
						});
					}
					V(e, r);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), E(x), E(b), xi("submit", x, v), V(e, b), O(), i();
}
//#endregion
//#region src/features/auth/LogoutForm.svelte
var Kg = /* @__PURE__ */ z("<!> <!>", 1), qg = /* @__PURE__ */ z("<!> <!>", 1), Jg = /* @__PURE__ */ z("<div><form><!></form></div>");
function Yg(e, t) {
	D(t, !0);
	let n = () => It(mg, "$authStore", i), r = () => It(Do, "$clientStore", i), [i, a] = Lt(), o = /* @__PURE__ */ A(() => n().status), s = /* @__PURE__ */ A(() => r().rank > 0), c = async (e) => {
		if (e.preventDefault(), !L(o)) try {
			zt(mg, R(n).status = !0, R(n)), await new Promise((e) => setTimeout(e, 500)), await pg();
		} catch (e) {
			console.error(e);
		} finally {
			zt(mg, R(n).status = !1, R(n)), zt(mg, R(n).username = "", R(n)), zt(mg, R(n).password = void 0, R(n));
		}
	}, l = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class"
	]);
	var u = Jg();
	W(u, (e) => ({
		class: e,
		...l
	}), [() => Z("", t.class)]);
	var d = N(u);
	Qh(N(d), {
		children: (e, t) => {
			Xh(e, {
				orientation: "horizontal",
				class: "flex flex-row items-center justify-end selection:bg-primary",
				children: (e, t) => {
					var n = qg(), i = P(n), a = (e) => {
						var t = Kg(), n = P(t);
						{
							let e = /* @__PURE__ */ A(() => !L(s));
							Lg(n, {
								get isLoading() {
									return L(o);
								},
								isAnon: !1,
								get isGuest() {
									return L(e);
								}
							});
						}
						$h(F(n, 2), {
							class: "w-auto flex-none",
							children: (e, t) => {
								Ze();
								var n = Mi();
								hr(() => Fi(n, r().name)), V(e, n);
							},
							$$slots: { default: !0 }
						}), V(e, t);
					};
					H(i, (e) => {
						Xm.current && e(a);
					});
					var c = F(i, 2);
					{
						let e = /* @__PURE__ */ A(() => Z({ "md:cursor-not-allowed": L(o) }));
						qh(c, {
							type: "submit",
							get disabled() {
								return L(o);
							},
							get class() {
								return L(e);
							},
							children: (e, t) => {
								Ze(), V(e, Mi("Logout"));
							},
							$$slots: { default: !0 }
						});
					}
					V(e, n);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), E(d), E(u), xi("submit", d, c), V(e, u), O(), a();
}
//#endregion
//#region src/features/auth/AuthForm.svelte
function Xg(e, t) {
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class",
		"isLoggedIn"
	]);
	var r = B(), i = P(r), a = (e) => {
		Yg(e, $a({ get class() {
			return t.class;
		} }, () => n));
	}, o = (e) => {
		Gg(e, $a({ get class() {
			return t.class;
		} }, () => n));
	};
	H(i, (e) => {
		t.isLoggedIn ? e(a) : e(o, -1);
	}), V(e, r);
}
//#endregion
//#region src/shared/components/layout/Header.svelte
var Zg = /* @__PURE__ */ z("<header><div class=\"fixed top-0 left-0 flex-none\"><!></div> <!> <!></header>");
function Qg(e, t) {
	D(t, !0);
	let n = uo, r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"appVersion",
		"imgLogoSrc",
		"isConnected",
		"isLoggedIn",
		"class"
	]);
	var i = Zg();
	W(i, (e) => ({
		class: e,
		...r
	}), [() => Z("sticky top-0 flex w-full flex-row items-center justify-between gap-4 bg-background py-4 pr-5 pl-10 md:gap-8 md:pr-8", t.class)]);
	var a = N(i);
	oh(N(a), { get appVersion() {
		return t.appVersion;
	} }), E(a);
	var o = F(a, 2);
	qh(o, {
		variant: "ghost",
		size: "icon-sm",
		class: "flex-none",
		onclick: () => location.assign("/"),
		children: (e, n) => {
			ih(e, {
				get imgSrc() {
					return t.imgLogoSrc;
				},
				get isConnected() {
					return t.isConnected;
				}
			});
		},
		$$slots: { default: !0 }
	});
	var s = F(o, 2), c = (e) => {
		Xg(e, {
			class: "w-4/5 flex-initial md:w-3/5 lg:w-2/5",
			get isLoggedIn() {
				return t.isLoggedIn;
			}
		});
	}, l = (e) => {
		qh(e, {
			class: "flex-initial",
			get onclick() {
				return n;
			},
			children: (e, t) => {
				Ze(), V(e, Mi("Reconnect"));
			},
			$$slots: { default: !0 }
		});
	};
	H(s, (e) => {
		t.isConnected ? e(c) : e(l, -1);
	}), E(i), V(e, i), O();
}
//#endregion
//#region src/shared/components/common/Portal.svelte
var $g = (e) => (t) => {
	if (e) return e.appendChild(t), () => {
		t.parentNode && t.parentNode.removeChild(t);
	};
}, e_ = /* @__PURE__ */ z("<!> <!>", 1), t_ = /* @__PURE__ */ z("<form><!></form>");
function n_(e, t) {
	D(t, !0);
	let n = () => It(mg, "$authStore", r), [r, i] = Lt(), a = /* @__PURE__ */ A(() => n().username), o = /* @__PURE__ */ A(() => n().status), s = async (e) => {
		if (e.preventDefault(), !L(o)) try {
			zt(mg, R(n).status = !0, R(n)), await new Promise((e) => setTimeout(e, 500)), await fg(L(a));
		} catch (e) {
			console.error(e);
		} finally {
			zt(mg, R(n).status = !1, R(n)), zt(mg, R(n).username = "", R(n)), zt(mg, R(n).password = void 0, R(n));
		}
	}, c = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class"
	]);
	var l = t_();
	W(l, (e) => ({
		onsubmit: s,
		class: e,
		...c
	}), [() => Z("", t.class)]), Qh(N(l), {
		children: (e, t) => {
			Xh(e, {
				orientation: "horizontal",
				class: "flex flex-row items-start justify-start gap-0",
				children: (e, t) => {
					var r = e_(), i = P(r);
					{
						let e = /* @__PURE__ */ A(() => L(a) === "");
						qh(i, {
							type: "submit",
							class: "flex-2 rounded-none border-none",
							get disabled() {
								return L(e);
							},
							children: (e, t) => {
								Ze(), V(e, Mi("Guest Login"));
							},
							$$slots: { default: !0 }
						});
					}
					rg(F(i, 2), {
						required: !0,
						class: "flex-8 rounded-none border-none",
						type: "text",
						autocomplete: "name",
						placeholder: "Username",
						get disabled() {
							return L(o);
						},
						get value() {
							return n().username;
						},
						set value(e) {
							zt(mg, R(n).username = e, R(n));
						}
					}), V(e, r);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), E(l), V(e, l), O(), i();
}
//#endregion
//#region node_modules/svelte/src/easing/index.js
function r_(e) {
	let t = e - 1;
	return t * t * t + 1;
}
function i_(e) {
	return --e * e * e * e * e + 1;
}
//#endregion
//#region node_modules/svelte/src/animate/index.js
function a_(e, { from: t, to: n }, r = {}) {
	var { delay: i = 0, duration: a = (e) => Math.sqrt(e) * 120, easing: o = r_ } = r, s = getComputedStyle(e), c = s.transform === "none" ? "" : s.transform, [l, u] = s.transformOrigin.split(" ").map(parseFloat);
	l /= e.clientWidth, u /= e.clientHeight;
	var d = o_(e), f = e.clientWidth / n.width / d, p = e.clientHeight / n.height / d, m = t.left + t.width * l, h = t.top + t.height * u, g = n.left + n.width * l, _ = n.top + n.height * u, v = (m - g) * f, y = (h - _) * p, b = t.width / n.width, x = t.height / n.height;
	return {
		delay: i,
		duration: typeof a == "function" ? a(Math.sqrt(v * v + y * y)) : a,
		easing: o,
		css: (e, t) => `transform: ${c} translate(${t * v}px, ${t * y}px) scale(${e + t * b}, ${e + t * x});`
	};
}
function o_(e) {
	if ("currentCSSZoom" in e) return e.currentCSSZoom;
	for (var t = e, n = 1; t !== null;) n *= +getComputedStyle(t).zoom, t = t.parentElement;
	return n;
}
//#endregion
//#region node_modules/svelte/src/transition/index.js
function s_(e) {
	return e < .5 ? 4 * e * e * e : .5 * (2 * e - 2) ** 3 + 1;
}
function c_(e) {
	let t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"];
}
function l_(e, { delay: t = 0, duration: n = 400, easing: r = s_, amount: i = 5, opacity: a = 0 } = {}) {
	let o = getComputedStyle(e), s = +o.opacity, c = o.filter === "none" ? "" : o.filter, l = s * (1 - a), [u, d] = c_(i);
	return {
		delay: t,
		duration: n,
		easing: r,
		css: (e, t) => `opacity: ${s - l * t}; filter: ${c} blur(${t * u}${d});`
	};
}
//#endregion
//#region src/lib/components/ui/empty/empty.svelte
var u_ = /* @__PURE__ */ z("<div><!></div>");
function d_(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = u_();
	W(i, (e) => ({
		"data-slot": "empty",
		class: e,
		...r
	}), [() => Z("gap-4 rounded-xl border-dashed p-6 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance", t.class)]), U(N(i), () => t.children ?? x), E(i), Ja(i, (e) => n(e), () => n()), V(e, i), O();
}
//#endregion
//#region src/lib/components/ui/empty/empty-header.svelte
var f_ = /* @__PURE__ */ z("<div><!></div>");
function p_(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = f_();
	W(i, (e) => ({
		"data-slot": "empty-header",
		class: e,
		...r
	}), [() => Z("gap-2 flex max-w-sm flex-col items-center", t.class)]), U(N(i), () => t.children ?? x), E(i), Ja(i, (e) => n(e), () => n()), V(e, i), O();
}
//#endregion
//#region src/lib/components/ui/empty/empty-media.svelte
var m_ = Uh({
	base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
	variants: { variant: {
		default: "bg-transparent",
		icon: "bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-4"
	} },
	defaultVariants: { variant: "default" }
}), h_ = /* @__PURE__ */ z("<div><!></div>");
function g_(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "variant", 3, "default"), i = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children",
		"variant"
	]);
	var a = h_();
	W(a, (e) => ({
		"data-slot": "empty-icon",
		"data-variant": r(),
		class: e,
		...i
	}), [() => Z(m_({ variant: r() }), t.class)]), U(N(a), () => t.children ?? x), E(a), Ja(a, (e) => n(e), () => n()), V(e, a), O();
}
//#endregion
//#region src/lib/components/ui/empty/empty-title.svelte
var __ = /* @__PURE__ */ z("<div><!></div>");
function v_(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = __();
	W(i, (e) => ({
		"data-slot": "empty-title",
		class: e,
		...r
	}), [() => Z("font-heading text-sm font-medium tracking-tight", t.class)]), U(N(i), () => t.children ?? x), E(i), Ja(i, (e) => n(e), () => n()), V(e, i), O();
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card.svelte
function y_(e, t) {
	D(t, !0);
	let n = K(t, "open", 15, !1), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"open"
	]);
	var i = B();
	ea(P(i), () => lp, (e, t) => {
		t(e, $a(() => r, {
			get open() {
				return n();
			},
			set open(e) {
				n(e);
			}
		}));
	}), V(e, i), O();
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-portal.svelte
function b_(e, t) {
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	var r = B();
	ea(P(r), () => Wc, (e, t) => {
		t(e, $a(() => n));
	}), V(e, r);
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-content.svelte
function x_(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "align", 3, "center"), i = K(t, "sideOffset", 3, 4), a = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"align",
		"sideOffset",
		"portalProps"
	]);
	b_(e, $a(() => t.portalProps, {
		children: (e, o) => {
			var s = B(), c = P(s);
			{
				let e = /* @__PURE__ */ A(() => Z("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground w-64 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 origin-(--transform-origin) outline-hidden", t.class));
				ea(c, () => mp, (t, o) => {
					o(t, $a({
						"data-slot": "hover-card-content",
						get align() {
							return r();
						},
						get sideOffset() {
							return i();
						},
						get class() {
							return L(e);
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
			V(e, s);
		},
		$$slots: { default: !0 }
	})), O();
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-trigger.svelte
function S_(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref"
	]);
	var i = B();
	ea(P(i), () => gp, (e, t) => {
		t(e, $a({ "data-slot": "hover-card-trigger" }, () => r, {
			get ref() {
				return n();
			},
			set ref(e) {
				n(e);
			}
		}));
	}), V(e, i), O();
}
//#endregion
//#region src/features/userlist/UserCard.svelte
var C_ = /* @__PURE__ */ z("<!> <!>", 1), w_ = /* @__PURE__ */ z("<p class=\"text-sm\"> </p>"), T_ = /* @__PURE__ */ z("<div><!> <div class=\"space-y-1\"><h4 class=\"text-sm font-semibold\"> </h4> <!></div></div>");
function E_(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"username",
		"description",
		"imgSrc",
		"class"
	]);
	var r = T_();
	W(r, (e) => ({
		class: e,
		...n
	}), [() => Z("flex justify-between space-x-4", t.class)]);
	var i = N(r), a = (e) => {
		Zm(e, {
			children: (e, n) => {
				var r = C_(), i = P(r);
				Qm(i, { get src() {
					return t.imgSrc;
				} }), $m(F(i, 2), {
					children: (e, t) => {
						Ze(), V(e, Mi("Profile Image"));
					},
					$$slots: { default: !0 }
				}), V(e, r);
			},
			$$slots: { default: !0 }
		});
	};
	H(i, (e) => {
		t.imgSrc !== "" && e(a);
	});
	var o = F(i, 2), s = N(o), c = N(s, !0);
	E(s);
	var l = F(s, 2), u = (e) => {
		var n = w_(), r = N(n, !0);
		E(n), hr(() => Fi(r, t.description)), V(e, n);
	};
	H(l, (e) => {
		t.description !== "" && e(u);
	}), E(o), E(r), hr(() => Fi(c, t.username)), V(e, r), O();
}
//#endregion
//#region src/features/userlist/Userlist.svelte
var D_ = "text-purple-600", O_ = "text-red-600", k_ = "text-amber-600", A_ = "text-white", j_ = "text-gray-600", M_ = (e) => e >= _o.SITERADMIN ? D_ : e >= _o.ADMIN ? O_ : e == _o.MODERATOR ? k_ : e >= _o.USER ? A_ : j_, N_ = /* @__PURE__ */ z("<li><!></li>"), P_ = /* @__PURE__ */ z("<ul class=\"no-scrollbar overflow-auto\"></ul> <!>", 1), F_ = /* @__PURE__ */ z("<!> <!>", 1), I_ = /* @__PURE__ */ z("<div><!></div>");
function L_(e, t) {
	D(t, !0);
	let n = () => It(Co, "$userlistStore", r), [r, i] = Lt(), a = /* @__PURE__ */ A(() => n().userlist), o = /* @__PURE__ */ A(() => L(a).length > 0), s = /* @__PURE__ */ j(null), c = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class"
	]);
	var l = I_();
	W(l, (e) => ({
		class: e,
		...c
	}), [() => Z("flex", t.class)]);
	var u = N(l), d = (e) => {
		y_(e, {
			children: (e, t) => {
				var n = P_(), r = P(n);
				Ji(r, 29, () => L(a), (e) => e.name, (e, t) => {
					var n = N_();
					S_(N(n), {
						children: (e, n) => {
							Ze();
							var r = Mi();
							hr(() => Fi(r, L(t).name)), V(e, r);
						},
						$$slots: { default: !0 }
					}), E(n), hr((e) => Sa(n, 1, e), [() => ga(Z(M_(L(t).rank), "font-bold"))]), xi("mouseenter", n, () => M(s, L(t), !0)), ua(n, () => a_, () => ({
						duration: 200,
						easing: i_
					})), da(3, n, () => l_, () => ({ duration: 200 })), V(e, n);
				}), E(r);
				var i = F(r, 2), o = (e) => {
					let t = /* @__PURE__ */ A(() => L(s).name), n = /* @__PURE__ */ A(() => L(s).profile.text), r = /* @__PURE__ */ A(() => L(s).profile.image);
					x_(e, {
						children: (e, i) => {
							E_(e, {
								get username() {
									return L(t);
								},
								get description() {
									return L(n);
								},
								get imgSrc() {
									return L(r);
								}
							});
						},
						$$slots: { default: !0 }
					});
				};
				H(i, (e) => {
					L(s) && e(o);
				}), V(e, n);
			},
			$$slots: { default: !0 }
		});
	}, f = (e) => {
		d_(e, {
			class: "flex-1",
			children: (e, t) => {
				p_(e, {
					children: (e, t) => {
						var n = F_(), r = P(n);
						g_(r, {
							variant: "icon",
							children: (e, t) => {
								Fg(e, {
									get icon() {
										return Eg;
									},
									class: "size-5 motion-safe:animate-[spin_6s_linear_infinite]"
								});
							},
							$$slots: { default: !0 }
						}), v_(F(r, 2), {
							class: "select-none",
							children: (e, t) => {
								Ze(), V(e, Mi("No users"));
							},
							$$slots: { default: !0 }
						}), V(e, n);
					},
					$$slots: { default: !0 }
				});
			},
			$$slots: { default: !0 }
		});
	};
	H(u, (e) => {
		L(o) ? e(d) : e(f, -1);
	}), E(l), V(e, l), O(), i();
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/is.js
function R_(e) {
	return typeof e == "function";
}
function z_(e) {
	return typeof e == "object" && !!e;
}
var B_ = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function V_(e) {
	return e == null || B_.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => V_(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/box/box.svelte.js
var H_ = Symbol("box"), U_ = Symbol("is-writable");
function W_(e) {
	return z_(e) && H_ in e;
}
function G_(e) {
	return Q.isBox(e) && U_ in e;
}
function Q(e) {
	let t = /* @__PURE__ */ j(Fn(e));
	return {
		[H_]: !0,
		[U_]: !0,
		get current() {
			return L(t);
		},
		set current(e) {
			M(t, e, !0);
		}
	};
}
function K_(e, t) {
	let n = /* @__PURE__ */ A(e);
	return t ? {
		[H_]: !0,
		[U_]: !0,
		get current() {
			return L(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[H_]: !0,
		get current() {
			return e();
		}
	};
}
function q_(e) {
	return Q.isBox(e) ? e : R_(e) ? Q.with(e) : Q(e);
}
function J_(e) {
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
function Y_(e) {
	return Q.isWritableBox(e) ? {
		[H_]: !0,
		get current() {
			return e.current;
		}
	} : e;
}
Q.from = q_, Q.with = K_, Q.flatten = J_, Q.readonly = Y_, Q.isBox = W_, Q.isWritableBox = G_;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
function X_(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/strings.js
var Z_ = /\d/, Q_ = [
	"-",
	"_",
	"/",
	"."
];
function $_(e = "") {
	if (!Z_.test(e)) return e !== e.toLowerCase();
}
function ev(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = Q_.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = $_(a);
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
function tv(e) {
	return e ? ev(e).map((e) => rv(e)).join("") : "";
}
function nv(e) {
	return iv(tv(e || ""));
}
function rv(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function iv(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function av(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[tv(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[nv(e)] = n;
	}
	return ps(e, n), t;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
function ov(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/events.js
function sv(e, t, n, r) {
	let i = Array.isArray(t) ? t : [t];
	return i.forEach((t) => e.addEventListener(t, n, r)), () => {
		i.forEach((t) => e.removeEventListener(t, n, r));
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function cv(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var lv = cv(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function uv(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${lv(t)}: ${e[t]};`).join("\n");
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/style.js
function dv(e = {}) {
	return uv(e).replace("\n", " ");
}
dv({
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
var fv = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/merge-props.js
function pv(e) {
	return fv.has(e);
}
function mv(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
				if (a && typeof o && pv(e)) t[e] = X_(n, i);
				else if (a && o) t[e] = ov(n, i);
				else if (e === "class") {
					let r = V_(n), a = V_(i);
					r && a ? t[e] = ha(n, i) : r ? t[e] = ha(n) : a && (t[e] = ha(i));
				} else if (e === "style") {
					let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
					if (r && a) t[e] = {
						...n,
						...i
					};
					else if (r && s) {
						let r = av(i);
						t[e] = {
							...n,
							...r
						};
					} else if (o && a) t[e] = {
						...av(n),
						...i
					};
					else if (o && s) {
						let r = av(n), a = av(i);
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
	return typeof t.style == "object" && (t.style = dv(t.style).replaceAll("\n", " ")), t.hidden !== !0 && (t.hidden = void 0, delete t.hidden), t.disabled !== !0 && (t.disabled = void 0, delete t.disabled), t;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/internal/configurable-globals.js
var hv = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/internal/utils/dom.js
function gv(e) {
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
		let { window: t = hv, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = ln((e) => {
			let n = bi(t, "focusin", e), r = bi(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? gv(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/utilities/watch/watch.svelte.js
function _v(e, t) {
	switch (e) {
		case "post":
			sr(t);
			break;
		case "pre":
			lr(t);
			break;
	}
}
function vv(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	_v(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = R(() => n(t, o));
		return o = t, r;
	});
}
function yv(e, t, n) {
	let r = ur(() => {
		let i = !1;
		vv(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	sr(() => r);
}
function bv(e, t, n) {
	vv(e, "post", t, n);
}
function xv(e, t, n) {
	vv(e, "pre", t, n);
}
bv.pre = xv;
function Sv(e, t) {
	yv(e, "post", t);
}
function Cv(e, t) {
	yv(e, "pre", t);
}
Sv.pre = Cv;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/utilities/resource/resource.svelte.js
function wv(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function Tv(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function Ev(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ j(Fn(o)), u = /* @__PURE__ */ j(!1), d = /* @__PURE__ */ j(void 0), f = /* @__PURE__ */ j(Fn([])), p = () => {
		L(f).forEach((e) => e()), M(f, [], !0);
	}, m = (e) => {
		M(f, [...L(f), e], !0);
	}, h = async (e, n, r = !1) => {
		try {
			M(u, !0), M(d, void 0), p();
			let i = new AbortController();
			m(() => i.abort());
			let a = await t(e, n, {
				data: L(l),
				refetching: r,
				onCleanup: m,
				signal: i.signal
			});
			return M(l, a, !0), a;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || M(d, e, !0);
			return;
		} finally {
			M(u, !1);
		}
	}, g = s ? wv(h, s) : c ? Tv(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
	return r((t, n) => {
		a && v || (v = t, g(Array.isArray(e) ? t : t[0], Array.isArray(e) ? n : n?.[0]));
	}, { lazy: i }), {
		get current() {
			return L(l);
		},
		get loading() {
			return L(u);
		},
		get error() {
			return L(d);
		},
		mutate: (e) => {
			M(l, e, !0);
		},
		refetch: (t) => {
			let n = _.map((e) => e());
			return g(Array.isArray(e) ? n : n[0], Array.isArray(e) ? n : n[0], t ?? !0);
		}
	};
}
function Dv(e, t, n) {
	return Ev(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		bv(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function Ov(e, t, n) {
	return Ev(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		bv.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
Dv.pre = Ov;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/after-tick.js
function kv(e) {
	ti().then(e);
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/dom.js
var Av = 9;
function jv(e) {
	return z_(e) && e.nodeType === Av;
}
function Mv(e) {
	return z_(e) && e.constructor?.name === "VisualViewport";
}
function Nv(e) {
	return jv(e) ? e : Mv(e) ? e.document : e?.ownerDocument ?? document;
}
function Pv(e) {
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
var Fv = class {
	element;
	#e = /* @__PURE__ */ A(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return L(this.#e);
	}
	set root(e) {
		M(this.#e, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = Q.with(e) : this.element = e;
	}
	getDocument = () => Nv(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => Pv(this.root);
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
function Iv(e, t) {
	return { [oi()]: (n) => Q.isBox(e) ? (e.current = n, R(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), R(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/aria.js
function Lv({ layout: e, panesArray: t, pivotIndices: n }) {
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
function Rv(e, t = "Assertion failed!") {
	if (!e) throw console.error(t), Error(t);
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/compare.js
function zv(e, t, n = 10) {
	return Bv(e, t, n) === 0;
}
function Bv(e, t, n = 10) {
	let r = Hv(e, n), i = Hv(t, n);
	return Math.sign(r - i);
}
function Vv(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Hv(e, t) {
	return Number.parseFloat(e.toFixed(t));
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/is.js
var Uv = typeof document < "u";
function Wv(e) {
	return e instanceof HTMLElement;
}
function Gv(e) {
	return e.type === "keydown";
}
function Kv(e) {
	return e.type.startsWith("mouse");
}
function qv(e) {
	return e.type.startsWith("touch");
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/resize.js
function Jv({ paneConstraints: e, paneIndex: t, initialSize: n }) {
	let r = e[t];
	Rv(r != null, "Pane constraints should not be null.");
	let { collapsedSize: i = 0, collapsible: a, maxSize: o = 100, minSize: s = 0 } = r, c = n;
	return Bv(c, s) < 0 && (c = Yv(c, a, i, s)), c = Math.min(o, c), Number.parseFloat(c.toFixed(10));
}
function Yv(e, t, n, r) {
	return t && Bv(e, (n + r) / 2) < 0 ? n : r;
}
//#endregion
//#region node_modules/paneforge/dist/internal/helpers.js
function Xv() {}
function Zv({ groupId: e, layout: t, panesArray: n, domContext: r }) {
	let i = Qv(e, r);
	for (let e = 0; e < n.length - 1; e++) {
		let { valueMax: r, valueMin: a, valueNow: o } = Lv({
			layout: t,
			panesArray: n,
			pivotIndices: [e, e + 1]
		}), s = i[e];
		if (Wv(s)) {
			let t = n[e];
			s.setAttribute("aria-controls", t.opts.id.current), s.setAttribute("aria-valuemax", `${Math.round(r)}`), s.setAttribute("aria-valuemin", `${Math.round(a)}`), s.setAttribute("aria-valuenow", o == null ? "" : `${Math.round(o)}`);
		}
	}
	return () => {
		for (let e of i) e.removeAttribute("aria-controls"), e.removeAttribute("aria-valuemax"), e.removeAttribute("aria-valuemin"), e.removeAttribute("aria-valuenow");
	};
}
function Qv(e, t) {
	return Uv ? Array.from(t.querySelectorAll(`[data-pane-resizer-id][data-pane-group-id="${e}"]`)) : [];
}
function $v({ groupId: e, id: t, domContext: n }) {
	return Uv ? Qv(e, n).findIndex((e) => e.getAttribute("data-pane-resizer-id") === t) ?? null : null;
}
function ey({ groupId: e, dragHandleId: t, domContext: n }) {
	let r = $v({
		groupId: e,
		id: t,
		domContext: n
	});
	return r == null ? [-1, -1] : [r, r + 1];
}
function ty(e, t, n) {
	let r = e.map((e) => e.constraints), i = ny(e, t), a = r[i], o = i === e.length - 1 ? [i - 1, i] : [i, i + 1], s = n[i];
	return {
		...a,
		paneSize: s,
		pivotIndices: o
	};
}
function ny(e, t) {
	return e.findIndex((e) => e.opts.id.current === t.opts.id.current);
}
function ry(e, t, n) {
	for (let r = 0; r < t.length; r++) {
		let i = t[r], a = e[r];
		Rv(a);
		let { collapsedSize: o = 0, collapsible: s } = a.constraints, c = n[a.opts.id.current];
		if (!(c == null || i !== c)) continue;
		n[a.opts.id.current] = i;
		let { onCollapse: l, onExpand: u, onResize: d } = a.callbacks;
		d?.(i, c), s && (l || u) && (u && (c == null || c === o) && i !== o && u(), l && (c == null || c !== o) && i === o && l());
	}
}
function iy({ panesArray: e }) {
	let t = Array(e.length), n = e.map((e) => e.constraints), r = 0, i = 100;
	for (let a = 0; a < e.length; a++) {
		let e = n[a];
		Rv(e);
		let { defaultSize: o } = e;
		o != null && (r++, t[a] = o, i -= o);
	}
	for (let a = 0; a < e.length; a++) {
		let o = n[a];
		Rv(o);
		let { defaultSize: s } = o;
		if (s != null) continue;
		let c = e.length - r, l = i / c;
		r++, t[a] = l, i -= l;
	}
	return t;
}
function ay({ layout: e, paneConstraints: t }) {
	let n = [...e], r = n.reduce((e, t) => e + t, 0);
	if (n.length !== t.length) throw Error(`Invalid ${t.length} pane layout: ${n.map((e) => `${e}%`).join(", ")}`);
	if (!zv(r, 100)) for (let e = 0; e < t.length; e++) {
		let t = n[e];
		Rv(t != null), n[e] = 100 / r * t;
	}
	let i = 0;
	for (let e = 0; e < t.length; e++) {
		let r = n[e];
		Rv(r != null);
		let a = Jv({
			paneConstraints: t,
			paneIndex: e,
			initialSize: r
		});
		r !== a && (i += r - a, n[e] = a);
	}
	if (!zv(i, 0)) for (let e = 0; e < t.length; e++) {
		let r = n[e];
		Rv(r != null);
		let a = r + i, o = Jv({
			paneConstraints: t,
			paneIndex: e,
			initialSize: a
		});
		if (r !== o && (i -= o - r, n[e] = o, zv(i, 0))) break;
	}
	return n;
}
function oy(e, t) {
	return Uv && t.querySelector(`[data-pane-group][data-pane-group-id="${e}"]`) || null;
}
function sy(e, t) {
	return Uv && t.querySelector(`[data-pane-resizer-id="${e}"]`) || null;
}
function cy({ event: e, dragHandleId: t, dir: n, initialDragState: r, domContext: i }) {
	let a = n === "horizontal", o = sy(t, i);
	Rv(o);
	let s = o.getAttribute("data-pane-group-id");
	Rv(s);
	let { initialCursorPosition: c } = r, l = uy(n, e), u = oy(s, i);
	Rv(u);
	let d = u.getBoundingClientRect(), f = a ? d.width : d.height;
	return (l - c) / f * 100;
}
function ly({ event: e, dragHandleId: t, dir: n, initialDragState: r, keyboardResizeBy: i, domContext: a }) {
	if (Gv(e)) {
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
	} else return r == null ? 0 : cy({
		event: e,
		dragHandleId: t,
		dir: n,
		initialDragState: r,
		domContext: a
	});
}
function uy(e, t) {
	let n = e === "horizontal";
	if (Kv(t)) return n ? t.clientX : t.clientY;
	if (qv(t)) {
		let e = t.touches[0];
		return Rv(e), n ? e.screenX : e.screenY;
	} else throw Error(`Unsupported event type "${t.type}"`);
}
function dy({ groupId: e, handleId: t, panesArray: n, domContext: r }) {
	let i = sy(t, r), a = Qv(e, r), o = i ? a.indexOf(i) : -1;
	return [n[o]?.opts.id.current ?? null, n[o + 1]?.opts.id.current ?? null];
}
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/internal/configurable-globals.js
var fy = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/internal/utils/dom.js
function py(e) {
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
		let { window: t = fy, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = ln((e) => {
			let n = bi(t, "focusin", e), r = bi(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? py(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/utilities/watch/watch.svelte.js
function my(e, t) {
	switch (e) {
		case "post":
			sr(t);
			break;
		case "pre":
			lr(t);
			break;
	}
}
function hy(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	my(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = R(() => n(t, o));
		return o = t, r;
	});
}
function gy(e, t, n) {
	let r = ur(() => {
		let i = !1;
		hy(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	sr(() => r);
}
function _y(e, t, n) {
	hy(e, "post", t, n);
}
function vy(e, t, n) {
	hy(e, "pre", t, n);
}
_y.pre = vy;
function yy(e, t) {
	gy(e, "post", t);
}
function by(e, t) {
	gy(e, "pre", t);
}
yy.pre = by;
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/utilities/context/context.js
var xy = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return pt(this.#t);
	}
	get() {
		let e = dt(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = dt(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return ft(this.#t, e);
	}
};
//#endregion
//#region node_modules/paneforge/dist/internal/utils/adjust-layout.js
function Sy({ delta: e, layout: t, paneConstraints: n, pivotIndices: r, trigger: i }) {
	if (zv(e, 0)) return t;
	let a = [...t], [o, s] = r, c = 0;
	if (i === "keyboard") {
		{
			let r = e < 0 ? s : o, i = n[r];
			if (Rv(i), i.collapsible) {
				let i = t[r];
				Rv(i != null);
				let a = n[r];
				Rv(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (zv(i, o)) {
					let t = s - i;
					Bv(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
		{
			let r = e < 0 ? o : s, i = n[r];
			Rv(i);
			let { collapsible: a } = i;
			if (a) {
				let i = t[r];
				Rv(i != null);
				let a = n[r];
				Rv(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (zv(i, s)) {
					let t = i - o;
					Bv(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
	}
	{
		let r = e < 0 ? 1 : -1, i = e < 0 ? s : o, a = 0;
		for (;;) {
			let e = t[i];
			Rv(e != null);
			let o = Jv({
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
			Rv(o != null);
			let s = o - i, l = Jv({
				paneConstraints: n,
				paneIndex: r,
				initialSize: s
			});
			if (!zv(o, l) && (c += o - l, a[r] = l, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, { numeric: !0 }) >= 0)) break;
			e < 0 ? r-- : r++;
		}
	}
	if (zv(c, 0)) return t;
	{
		let r = e < 0 ? s : o, i = t[r];
		Rv(i != null);
		let l = i + c, u = Jv({
			paneConstraints: n,
			paneIndex: r,
			initialSize: l
		});
		if (a[r] = u, !zv(u, l)) {
			let t = l - u, r = e < 0 ? s : o;
			for (; r >= 0 && r < n.length;) {
				let i = a[r];
				Rv(i != null);
				let o = i + t, s = Jv({
					paneConstraints: n,
					paneIndex: r,
					initialSize: o
				});
				if (zv(i, s) || (t -= s - i, a[r] = s), zv(t, 0)) break;
				e > 0 ? r-- : r++;
			}
		}
	}
	return zv(a.reduce((e, t) => t + e, 0), 100) ? a : t;
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/style.js
var Cy = null, wy = null;
function Ty(e) {
	switch (e) {
		case "horizontal": return "ew-resize";
		case "horizontal-max": return "w-resize";
		case "horizontal-min": return "e-resize";
		case "vertical": return "ns-resize";
		case "vertical-max": return "n-resize";
		case "vertical-min": return "s-resize";
	}
}
function Ey() {
	wy !== null && (document.head.removeChild(wy), Cy = null, wy = null);
}
function Dy(e, t) {
	if (Cy === e) return;
	Cy = e;
	let n = Ty(e);
	wy === null && (wy = t.createElement("style"), t.head.appendChild(wy)), wy.innerHTML = `*{cursor: ${n}!important;}`;
}
function Oy({ defaultSize: e, dragState: t, layout: n, panesArray: r, paneIndex: i, precision: a = 3 }) {
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
function ky(e) {
	try {
		if (typeof localStorage > "u") throw TypeError("localStorage is not supported in this environment");
		e.getItem = (e) => localStorage.getItem(e), e.setItem = (e, t) => localStorage.setItem(e, t);
	} catch (t) {
		console.error(t), e.getItem = () => null, e.setItem = () => {};
	}
}
function Ay(e) {
	return `paneforge:${e}`;
}
function jy(e) {
	return e.map((e) => e.opts.order.current ? `${e.opts.order.current}:${JSON.stringify(e.constraints)}` : JSON.stringify(e.constraints)).sort().join(",");
}
function My(e, t) {
	try {
		let n = Ay(e), r = t.getItem(n), i = JSON.parse(r || "");
		if (typeof i == "object" && i) return i;
	} catch {}
	return null;
}
function Ny(e, t, n) {
	return (My(e, n) || {})[jy(t)] || null;
}
function Py(e, t, n, r, i) {
	let a = Ay(e), o = jy(t), s = My(e, i) || {};
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
var Fy = {};
function Iy(e, t = 10) {
	let n = null;
	return (...r) => {
		n !== null && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
}
function Ly({ autoSaveId: e, layout: t, storage: n, panesArray: r, paneSizeBeforeCollapse: i }) {
	if (t.length === 0 || t.length !== r.length) return;
	let a = Fy[e];
	a ?? (a = Iy(Py, 100), Fy[e] = a);
	let o = [...r], s = new Map(i);
	a(e, o, s, t, n);
}
//#endregion
//#region node_modules/paneforge/dist/paneforge.svelte.js
var Ry = {
	getItem: (e) => (ky(Ry), Ry.getItem(e)),
	setItem: (e, t) => {
		ky(Ry), Ry.setItem(e, t);
	}
}, zy = new xy("PaneGroup"), By = class e {
	static create(t) {
		return zy.set(new e(t));
	}
	opts;
	attachment;
	domContext;
	#e = /* @__PURE__ */ j(null);
	get dragState() {
		return L(this.#e);
	}
	set dragState(e) {
		M(this.#e, e);
	}
	#t = /* @__PURE__ */ j([]);
	get layout() {
		return L(this.#t);
	}
	set layout(e) {
		M(this.#t, e);
	}
	#n = /* @__PURE__ */ j([]);
	get panesArray() {
		return L(this.#n);
	}
	set panesArray(e) {
		M(this.#n, e);
	}
	#r = /* @__PURE__ */ j(!1);
	get panesArrayChanged() {
		return L(this.#r);
	}
	set panesArrayChanged(e) {
		M(this.#r, e, !0);
	}
	#i = /* @__PURE__ */ j(Fn({}));
	get paneIdToLastNotifiedSizeMap() {
		return L(this.#i);
	}
	set paneIdToLastNotifiedSizeMap(e) {
		M(this.#i, e, !0);
	}
	paneSizeBeforeCollapseMap = /* @__PURE__ */ new Map();
	prevDelta = 0;
	constructor(e) {
		this.opts = e, this.attachment = Iv(this.opts.ref), this.domContext = new Fv(this.opts.ref), _y([
			() => this.opts.id.current,
			() => this.layout,
			() => this.panesArray
		], () => Zv({
			groupId: this.opts.id.current,
			layout: this.layout,
			panesArray: this.panesArray,
			domContext: this.domContext
		})), sr(() => R(() => this.#a())), _y([
			() => this.opts.autoSaveId.current,
			() => this.layout,
			() => this.opts.storage.current
		], () => {
			this.opts.autoSaveId.current && Ly({
				autoSaveId: this.opts.autoSaveId.current,
				layout: this.layout,
				storage: this.opts.storage.current,
				panesArray: this.panesArray,
				paneSizeBeforeCollapse: this.paneSizeBeforeCollapseMap
			});
		}), _y(() => this.panesArrayChanged, () => {
			if (!this.panesArrayChanged) return;
			this.panesArrayChanged = !1;
			let e = this.layout, t = null;
			if (this.opts.autoSaveId.current) {
				let e = Ny(this.opts.autoSaveId.current, this.panesArray, this.opts.storage.current);
				e && (this.paneSizeBeforeCollapseMap = new Map(Object.entries(e.expandToSizes)), t = e.layout);
			}
			t ??= iy({ panesArray: this.panesArray });
			let n = ay({
				layout: t,
				paneConstraints: this.panesArray.map((e) => e.constraints)
			});
			Vv(e, n) || (this.layout = n, this.opts.onLayout.current?.(n), ry(this.panesArray, n, this.paneIdToLastNotifiedSizeMap));
		});
	}
	setLayout = (e) => {
		this.layout = e;
	};
	registerResizeHandle = (e) => (t) => {
		t.preventDefault();
		let n = this.opts.direction.current, r = this.dragState, i = this.opts.id.current, a = this.opts.keyboardResizeBy.current, o = this.layout, s = this.panesArray, { initialLayout: c } = r ?? {}, l = this.domContext.getDocument(), u = ey({
			groupId: i,
			dragHandleId: e,
			domContext: this.domContext
		}), d = ly({
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
		let p = s.map((e) => e.constraints), m = Sy({
			delta: d,
			layout: c ?? o,
			paneConstraints: p,
			pivotIndices: u,
			trigger: Gv(t) ? "keyboard" : "mouse-or-touch"
		}), h = !Vv(o, m);
		(Kv(t) || qv(t)) && this.prevDelta !== d && (this.prevDelta = d, Dy(h ? f ? "horizontal" : "vertical" : f ? d < 0 ? "horizontal-min" : "horizontal-max" : d < 0 ? "vertical-min" : "vertical-max", l)), h && (this.setLayout(m), this.opts.onLayout.current?.(m), ry(s, m, this.paneIdToLastNotifiedSizeMap));
	};
	resizePane = (e, t) => {
		let n = this.layout, r = this.panesArray, i = r.map((e) => e.constraints), { paneSize: a, pivotIndices: o } = ty(r, e, n);
		Rv(a != null);
		let s = Sy({
			delta: ny(r, e) === r.length - 1 ? a - t : t - a,
			layout: n,
			paneConstraints: i,
			pivotIndices: o,
			trigger: "imperative-api"
		});
		Vv(n, s) || (this.setLayout(s), this.opts.onLayout.current?.(s), ry(r, s, this.paneIdToLastNotifiedSizeMap));
	};
	startDragging = (e, t) => {
		let n = this.opts.direction.current, r = this.layout, i = sy(e, this.domContext);
		Rv(i);
		let a = uy(n, t);
		this.dragState = {
			dragHandleId: e,
			dragHandleRect: i.getBoundingClientRect(),
			initialCursorPosition: a,
			initialLayout: r
		};
	};
	stopDragging = () => {
		Ey(), this.dragState = null;
	};
	isPaneCollapsed = (e) => {
		let t = this.panesArray, n = this.layout, { collapsedSize: r = 0, collapsible: i, paneSize: a } = ty(t, e, n);
		return typeof a != "number" || typeof r != "number" ? !1 : i === !0 && zv(a, r);
	};
	expandPane = (e) => {
		let t = this.layout, n = this.panesArray;
		if (!e.constraints.collapsible) return;
		let r = n.map((e) => e.constraints), { collapsedSize: i = 0, paneSize: a, minSize: o = 0, pivotIndices: s } = ty(n, e, t);
		if (a !== i) return;
		let c = this.paneSizeBeforeCollapseMap.get(e.opts.id.current), l = c != null && c >= o ? c : o, u = Sy({
			delta: ny(n, e) === n.length - 1 ? a - l : l - a,
			layout: t,
			paneConstraints: r,
			pivotIndices: s,
			trigger: "imperative-api"
		});
		Vv(t, u) || (this.setLayout(u), this.opts.onLayout.current?.(u), ry(n, u, this.paneIdToLastNotifiedSizeMap));
	};
	collapsePane = (e) => {
		let t = this.layout, n = this.panesArray;
		if (!e.constraints.collapsible) return;
		let r = n.map((e) => e.constraints), { collapsedSize: i = 0, paneSize: a, pivotIndices: o } = ty(n, e, t);
		if (Rv(a != null), a === i) return;
		this.paneSizeBeforeCollapseMap.set(e.opts.id.current, a);
		let s = Sy({
			delta: ny(n, e) === n.length - 1 ? a - i : i - a,
			layout: t,
			paneConstraints: r,
			pivotIndices: o,
			trigger: "imperative-api"
		});
		Vv(t, s) || (this.layout = s, this.opts.onLayout.current?.(s), ry(n, s, this.paneIdToLastNotifiedSizeMap));
	};
	getPaneSize = (e) => ty(this.panesArray, e, this.layout).paneSize;
	getPaneStyle = (e, t) => {
		let n = this.panesArray, r = this.layout, i = this.dragState;
		return Oy({
			defaultSize: t,
			dragState: i,
			layout: r,
			panesArray: n,
			paneIndex: ny(n, e)
		});
	};
	isPaneExpanded = (e) => {
		let { collapsedSize: t = 0, collapsible: n, paneSize: r } = ty(this.panesArray, e, this.layout);
		return !n || r > t;
	};
	registerPane = (e) => {
		let t = [...this.panesArray, e];
		return t.sort((e, t) => {
			let n = e.opts.order.current, r = t.opts.order.current;
			return n == null && r == null ? 0 : n == null ? -1 : r == null ? 1 : n - r;
		}), this.panesArray = t, this.panesArrayChanged = !0, () => {
			let t = [...this.panesArray], n = ny(this.panesArray, e);
			n < 0 || (t.splice(n, 1), this.panesArray = t, delete this.paneIdToLastNotifiedSizeMap[e.opts.id.current], this.panesArrayChanged = !0);
		};
	};
	#a = () => {
		let e = this.opts.id.current, t = Qv(e, this.domContext), n = this.panesArray, r = t.map((t) => {
			let r = t.getAttribute("data-pane-resizer-id");
			if (!r) return Xv;
			let [i, a] = dy({
				groupId: e,
				handleId: r,
				panesArray: n,
				domContext: this.domContext
			});
			if (i == null || a == null) return Xv;
			let o = sv(t, "keydown", (t) => {
				if (t.defaultPrevented || t.key !== "Enter") return;
				t.preventDefault();
				let n = this.panesArray, a = n.findIndex((e) => e.opts.id.current === i);
				if (a < 0) return;
				let o = n[a];
				Rv(o);
				let s = this.layout, c = s[a], { collapsedSize: l = 0, collapsible: u, minSize: d = 0 } = o.constraints;
				if (!(c != null && u)) return;
				let f = Sy({
					delta: zv(c, l) ? d - c : l - c,
					layout: s,
					paneConstraints: n.map((e) => e.constraints),
					pivotIndices: ey({
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
	#o = /* @__PURE__ */ A(() => ({
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
		return L(this.#o);
	}
	set props(e) {
		M(this.#o, e);
	}
}, Vy = [
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"End",
	"Home"
], Hy = class e {
	static create(t) {
		return new e(t, zy.get());
	}
	opts;
	#e;
	attachment;
	domContext;
	#t = /* @__PURE__ */ A(() => this.#e.dragState?.dragHandleId === this.opts.id.current);
	#n = /* @__PURE__ */ j(!1);
	resizeHandler = null;
	constructor(e, t) {
		this.opts = e, this.#e = t, this.attachment = Iv(this.opts.ref), this.domContext = new Fv(this.opts.ref), sr(() => {
			this.opts.disabled.current ? this.resizeHandler = null : this.resizeHandler = this.#e.registerResizeHandle(this.opts.id.current);
		}), sr(() => {
			let e = this.opts.ref.current;
			if (!e) return;
			let t = this.opts.disabled.current, n = this.resizeHandler, r = L(this.#t);
			if (t || n === null || !r) return;
			let i = (e) => {
				n(e);
			}, a = (e) => {
				n(e);
			}, o = () => {
				e.blur(), this.#e.stopDragging(), this.opts.onDraggingChange.current(!1);
			}, s = this.domContext.getDocument().body, c = this.domContext.getWindow();
			return ov(bi(s, "contextmenu", o), bi(s, "mousemove", i), bi(s, "touchmove", i, { passive: !1 }), bi(s, "mouseleave", a), bi(c, "mouseup", o), bi(c, "touchend", o));
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
		if (Vy.includes(e.key)) {
			e.preventDefault(), this.resizeHandler(e);
			return;
		}
		if (e.key !== "F6") return;
		e.preventDefault();
		let t = Qv(this.#e.opts.id.current, this.domContext), n = $v({
			groupId: this.#e.opts.id.current,
			id: this.opts.id.current,
			domContext: this.domContext
		});
		if (n === null) return;
		let r = 0;
		r = e.shiftKey ? n > 0 ? n - 1 : t.length - 1 : n + 1 < t.length ? n + 1 : 0, t[r].focus();
	};
	#o = () => {
		M(this.#n, !1);
	};
	#s = () => {
		M(this.#n, !0);
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
	#p = /* @__PURE__ */ A(() => ({
		id: this.opts.id.current,
		role: "separator",
		"data-direction": this.#e.opts.direction.current,
		"data-pane-group-id": this.#e.opts.id.current,
		"data-active": L(this.#t) ? "pointer" : L(this.#n) ? "keyboard" : void 0,
		"data-enabled": !this.opts.disabled.current,
		"data-pane-resizer-id": this.opts.id.current,
		"data-pane-resizer": "",
		tabIndex: this.opts.tabIndex.current,
		style: {
			cursor: Ty(this.#e.opts.direction.current),
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
		return L(this.#p);
	}
	set props(e) {
		M(this.#p, e);
	}
}, Uy = class e {
	static create(t) {
		return new e(t, zy.get());
	}
	opts;
	group;
	attachment;
	domContext;
	#e = /* @__PURE__ */ j("");
	#t = /* @__PURE__ */ A(() => ({
		onCollapse: this.opts.onCollapse.current,
		onExpand: this.opts.onExpand.current,
		onResize: this.opts.onResize.current
	}));
	get callbacks() {
		return L(this.#t);
	}
	set callbacks(e) {
		M(this.#t, e);
	}
	#n = /* @__PURE__ */ A(() => ({
		collapsedSize: this.opts.collapsedSize.current,
		collapsible: this.opts.collapsible.current,
		defaultSize: this.opts.defaultSize.current,
		maxSize: this.opts.maxSize.current,
		minSize: this.opts.minSize.current
	}));
	get constraints() {
		return L(this.#n);
	}
	set constraints(e) {
		M(this.#n, e);
	}
	#r = (e) => {
		M(this.#e, e, !0), kv(() => {
			if (this.opts.ref.current) {
				let e = this.opts.ref.current;
				if (getComputedStyle(e).transitionDuration === "0s") {
					M(this.#e, "");
					return;
				}
				let t = (n) => {
					n.propertyName === "flex-grow" && (M(this.#e, ""), e.removeEventListener("transitionend", t));
				};
				e.addEventListener("transitionend", t);
			} else M(this.#e, "");
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
		this.opts = e, this.group = t, this.attachment = Iv(this.opts.ref), this.domContext = new Fv(this.opts.ref), eo(() => this.group.registerPane(this)), _y(() => st(this.constraints), () => {
			this.group.panesArrayChanged = !0;
		});
	}
	#i = /* @__PURE__ */ A(() => this.group.isPaneCollapsed(this));
	#a = /* @__PURE__ */ A(() => L(this.#e) === "" ? L(this.#i) ? "collapsed" : "expanded" : L(this.#e));
	#o = /* @__PURE__ */ A(() => ({
		id: this.opts.id.current,
		style: this.group.getPaneStyle(this, this.opts.defaultSize.current),
		"data-pane": "",
		"data-pane-id": this.opts.id.current,
		"data-pane-group-id": this.group.opts.id.current,
		"data-collapsed": L(this.#i) ? "" : void 0,
		"data-expanded": L(this.#i) ? void 0 : "",
		"data-pane-state": L(this.#a),
		...this.attachment
	}));
	get props() {
		return L(this.#o);
	}
	set props(e) {
		M(this.#o, e);
	}
}, Wy = /* @__PURE__ */ z("<div><!></div>");
function Gy(e, t) {
	let n = Ni();
	D(t, !0);
	let r = K(t, "autoSaveId", 3, null), i = K(t, "id", 3, n), a = K(t, "keyboardResizeBy", 3, null), o = K(t, "onLayoutChange", 3, Xv), s = K(t, "storage", 3, Ry), c = K(t, "ref", 15, null), l = /* @__PURE__ */ G(t, [
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
	]), u = By.create({
		id: Q.with(() => i() ?? n),
		ref: Q.with(() => c(), (e) => c(e)),
		autoSaveId: Q.with(() => r()),
		direction: Q.with(() => t.direction),
		keyboardResizeBy: Q.with(() => a()),
		onLayout: Q.with(() => o()),
		storage: Q.with(() => s())
	}), d = () => u.layout, f = u.setLayout, p = () => u.opts.id.current, m = /* @__PURE__ */ A(() => mv(l, u.props));
	var h = {
		getLayout: d,
		setLayout: f,
		getId: p
	}, g = B(), _ = P(g), v = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(m) })), V(e, n);
	}, y = (e) => {
		var n = Wy();
		W(n, () => ({ ...L(m) })), U(N(n), () => t.children ?? x), E(n), V(e, n);
	};
	return H(_, (e) => {
		t.child ? e(v) : e(y, -1);
	}), V(e, g), O(h);
}
//#endregion
//#region node_modules/paneforge/dist/components/pane.svelte
var Ky = /* @__PURE__ */ z("<div><!></div>");
function qy(e, t) {
	let n = Ni();
	D(t, !0);
	let r = K(t, "id", 3, n), i = K(t, "ref", 15, null), a = K(t, "onCollapse", 3, Xv), o = K(t, "onExpand", 3, Xv), s = K(t, "onResize", 3, Xv), c = /* @__PURE__ */ G(t, [
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
	]), l = Uy.create({
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
	}), u = l.pane.collapse, d = l.pane.expand, f = l.pane.getSize, p = l.pane.isCollapsed, m = l.pane.isExpanded, h = l.pane.resize, g = l.pane.getId, _ = /* @__PURE__ */ A(() => mv(c, l.props));
	var v = {
		collapse: u,
		expand: d,
		getSize: f,
		isCollapsed: p,
		isExpanded: m,
		resize: h,
		getId: g
	}, y = B(), b = P(y), ee = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(_) })), V(e, n);
	}, te = (e) => {
		var n = Ky();
		W(n, () => ({ ...L(_) })), U(N(n), () => t.children ?? x), E(n), V(e, n);
	};
	return H(b, (e) => {
		t.child ? e(ee) : e(te, -1);
	}), V(e, y), O(v);
}
//#endregion
//#region node_modules/paneforge/dist/components/pane-resizer.svelte
var Jy = /* @__PURE__ */ z("<div><!></div>");
function Yy(e, t) {
	let n = Ni();
	D(t, !0);
	let r = K(t, "id", 3, n), i = K(t, "ref", 15, null), a = K(t, "disabled", 3, !1), o = K(t, "onDraggingChange", 3, Xv), s = K(t, "tabindex", 3, 0), c = /* @__PURE__ */ G(t, [
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
	]), l = Hy.create({
		id: Q.with(() => r()),
		ref: Q.with(() => i(), (e) => i(e)),
		disabled: Q.with(() => a()),
		onDraggingChange: Q.with(() => o()),
		tabIndex: Q.with(() => s())
	}), u = /* @__PURE__ */ A(() => mv(c, l.props));
	var d = B(), f = P(d), p = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(u) })), V(e, n);
	}, m = (e) => {
		var n = Jy();
		W(n, () => ({ ...L(u) })), U(N(n), () => t.children ?? x), E(n), V(e, n);
	};
	H(f, (e) => {
		t.child ? e(p) : e(m, -1);
	}), V(e, d), O();
}
//#endregion
//#region src/lib/components/ui/resizable/resizable-handle.svelte
var Xy = /* @__PURE__ */ z("<div class=\"bg-border h-6 w-1 rounded-lg z-10 flex shrink-0\"></div>");
function Zy(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "withHandle", 3, !1), i = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"withHandle"
	]);
	var a = B(), o = P(a);
	{
		let e = /* @__PURE__ */ A(() => Z("cn-resizable-handle bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[direction=vertical]:h-px data-[direction=vertical]:w-full data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:h-1 data-[direction=vertical]:after:w-full data-[direction=vertical]:after:translate-x-0 data-[direction=vertical]:after:-translate-y-1/2 [&[data-direction=vertical]>div]:rotate-90", t.class));
		ea(o, () => Yy, (t, a) => {
			a(t, $a({
				"data-slot": "resizable-handle",
				get class() {
					return L(e);
				}
			}, () => i, {
				get ref() {
					return n();
				},
				set ref(e) {
					n(e);
				},
				children: (e, t) => {
					var n = B(), i = P(n), a = (e) => {
						V(e, Xy());
					};
					H(i, (e) => {
						r() && e(a);
					}), V(e, n);
				},
				$$slots: { default: !0 }
			}));
		});
	}
	V(e, a), O();
}
//#endregion
//#region src/lib/components/ui/resizable/resizable-pane-group.svelte
function Qy(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "this", 15), i = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"this",
		"class"
	]);
	var a = B(), o = P(a);
	{
		let e = /* @__PURE__ */ A(() => Z("cn-resizable-panel-group flex h-full w-full data-[direction=vertical]:flex-col", t.class));
		ea(o, () => Gy, (t, a) => {
			Ja(a(t, $a({
				"data-slot": "resizable-pane-group",
				get class() {
					return L(e);
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
	V(e, a), O();
}
//#endregion
//#region src/features/chat/ChatBody.svelte
var $y = /* @__PURE__ */ z("<!> <!> <!>", 1);
function eb(e, t) {
	D(t, !0);
	let n = K(t, "leftPaneRef", 15, null), r = K(t, "rightPaneRef", 15, null), i = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"reversed",
		"leftPaneRef",
		"rightPaneRef",
		"class"
	]);
	{
		let a = /* @__PURE__ */ A(() => Z("", t.class));
		Qy(e, $a({
			direction: "vertical",
			get class() {
				return L(a);
			}
		}, () => i, {
			children: (e, i) => {
				qy(e, {
					collapsible: !1,
					defaultSize: 80,
					class: "flex",
					children: (e, i) => {
						Qy(e, {
							direction: "horizontal",
							children: (e, i) => {
								var a = $y(), o = P(a);
								{
									let e = /* @__PURE__ */ A(() => t.reversed ? 20 : 80), r = /* @__PURE__ */ A(() => t.reversed ? 30 : 100);
									qy(o, {
										order: 1,
										get defaultSize() {
											return L(e);
										},
										get maxSize() {
											return L(r);
										},
										class: "flex scrollbar-thumb-primary scrollbar-track-background overflow-y-auto!",
										get ref() {
											return n();
										},
										set ref(e) {
											n(e);
										}
									});
								}
								var s = F(o, 2);
								Zy(s, { withHandle: !0 });
								var c = F(s, 2);
								{
									let e = /* @__PURE__ */ A(() => t.reversed ? 80 : 20), n = /* @__PURE__ */ A(() => t.reversed ? 100 : 30);
									qy(c, {
										order: 2,
										get defaultSize() {
											return L(e);
										},
										get maxSize() {
											return L(n);
										},
										class: "flex scrollbar-thumb-primary scrollbar-track-background overflow-y-auto!",
										get ref() {
											return r();
										},
										set ref(e) {
											r(e);
										}
									});
								}
								V(e, a);
							},
							$$slots: { default: !0 }
						});
					},
					$$slots: { default: !0 }
				});
			},
			$$slots: { default: !0 }
		}));
	}
	O();
}
//#endregion
//#region src/lib/components/ui/input-group/input-group.svelte
var tb = /* @__PURE__ */ z("<div><!></div>");
function nb(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = tb();
	W(i, (e) => ({
		"data-slot": "input-group",
		role: "group",
		class: e,
		...r
	}), [() => Z("group/input-group border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-input/50 dark:has-disabled:bg-input/80 h-8 rounded-lg border transition-colors in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-3 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto", t.class)]), U(N(i), () => t.children ?? x), E(i), Ja(i, (e) => n(e), () => n()), V(e, i), O();
}
//#endregion
//#region src/lib/components/ui/input-group/input-group-addon.svelte
var rb = Uh({
	base: "text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none",
	variants: { align: {
		"inline-start": "pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first",
		"inline-end": "pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last",
		"block-start": "px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start",
		"block-end": "px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start"
	} },
	defaultVariants: { align: "inline-start" }
}), ib = /* @__PURE__ */ z("<div><!></div>");
function ab(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "align", 3, "inline-start"), i = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children",
		"align"
	]);
	var a = ib(), o = (e) => {
		e.target.closest("button") || e.currentTarget.parentElement?.querySelector("input")?.focus();
	};
	W(a, (e) => ({
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": r(),
		class: e,
		onclick: o,
		...i
	}), [() => Z(rb({ align: r() }), t.class)]), U(N(a), () => t.children ?? x), E(a), Ja(a, (e) => n(e), () => n()), V(e, a), O();
}
//#endregion
//#region src/lib/components/ui/input-group/input-group-button.svelte
var ob = Uh({
	base: "gap-2 text-sm flex items-center shadow-none",
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
		sm: "cn-input-group-button-size-sm",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-8 p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
});
function sb(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "type", 3, "button"), i = K(t, "variant", 3, "ghost"), a = K(t, "size", 3, "xs"), o = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children",
		"type",
		"variant",
		"size"
	]);
	{
		let s = /* @__PURE__ */ A(() => Z(ob({ size: a() }), t.class));
		qh(e, $a({
			get type() {
				return r();
			},
			get "data-size"() {
				return a();
			},
			get variant() {
				return i();
			},
			get class() {
				return L(s);
			}
		}, () => o, {
			get ref() {
				return n();
			},
			set ref(e) {
				n(e);
			},
			children: (e, n) => {
				var r = B();
				U(P(r), () => t.children ?? x), V(e, r);
			},
			$$slots: { default: !0 }
		}));
	}
	O();
}
//#endregion
//#region src/features/chat/ChatForm.svelte
var cb = /* @__PURE__ */ z("<!> <!>", 1), lb = /* @__PURE__ */ z("<!> <!>", 1), ub = /* @__PURE__ */ z("<!> <!>", 1), db = /* @__PURE__ */ z("<!> <!> <!> <!>", 1), fb = /* @__PURE__ */ z("<textarea data-slot=\"input-group-control\" class=\"flex field-sizing-fixed h-full w-full flex-1 resize-none rounded-none border-none bg-transparent px-4 py-2 text-base ring-0 outline-none\" placeholder=\"Chat message\"></textarea> <!>", 1), pb = /* @__PURE__ */ z("<form><!></form>");
function mb(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ j(""), r = (e) => {
		e.preventDefault(), console.log(L(n)), M(n, "");
	}, i = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class"
	]);
	var a = pb();
	W(a, (e) => ({
		onsubmit: r,
		class: e,
		...i
	}), [() => Z("flex", t.class)]), nb(N(a), {
		class: "flex h-full flex-1 flex-col justify-end rounded-none border-none",
		children: (e, t) => {
			var r = fb(), i = P(r);
			Zn(i), ab(F(i, 2), {
				align: "block-end",
				class: "flex flex-row justify-end",
				children: (e, t) => {
					var n = db(), r = P(n);
					{
						let e = /* @__PURE__ */ A(() => Xm.current ? "sm" : "icon-sm");
						sb(r, {
							get size() {
								return L(e);
							},
							variant: "outline",
							type: "button",
							children: (e, t) => {
								var n = cb(), r = P(n);
								Fg(r, {
									get icon() {
										return bg;
									},
									class: "size-5"
								});
								var i = F(r, 2), a = (e) => {
									V(e, Mi("Files"));
								};
								H(i, (e) => {
									Xm.current && e(a);
								}), V(e, n);
							},
							$$slots: { default: !0 }
						});
					}
					var i = F(r, 2);
					{
						let e = /* @__PURE__ */ A(() => Xm.current ? "sm" : "icon-sm");
						sb(i, {
							class: "ms-auto",
							get size() {
								return L(e);
							},
							variant: "outline",
							type: "button",
							children: (e, t) => {
								var n = lb(), r = P(n);
								Fg(r, {
									get icon() {
										return Sg;
									},
									class: "size-5"
								});
								var i = F(r, 2), a = (e) => {
									V(e, Mi("Emotes"));
								};
								H(i, (e) => {
									Xm.current && e(a);
								}), V(e, n);
							},
							$$slots: { default: !0 }
						});
					}
					var a = F(i, 2);
					eg(a, { orientation: "vertical" });
					var o = F(a, 2);
					{
						let e = /* @__PURE__ */ A(() => Xm.current ? "sm" : "icon-sm");
						sb(o, {
							get size() {
								return L(e);
							},
							variant: "default",
							type: "submit",
							children: (e, t) => {
								var n = ub(), r = P(n);
								Fg(r, {
									get icon() {
										return Tg;
									},
									class: "size-5"
								});
								var i = F(r, 2), a = (e) => {
									V(e, Mi("Send"));
								};
								H(i, (e) => {
									Xm.current && e(a);
								}), V(e, n);
							},
							$$slots: { default: !0 }
						});
					}
					V(e, n);
				},
				$$slots: { default: !0 }
			}), Ua(i, () => L(n), (e) => M(n, e)), V(e, r);
		},
		$$slots: { default: !0 }
	}), E(a), V(e, a), O();
}
//#endregion
//#region src/features/chat/ChatHeader.svelte
var hb = /* @__PURE__ */ z("<div><div class=\"flex flex-row items-center justify-start\"><!></div> <p class=\"truncate\"> </p> <div class=\"flex flex-row items-center justify-end\"><!></div></div>");
function gb(e, t) {
	D(t, !0);
	let n = K(t, "onlineCount", 3, 0), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"reversed",
		"handleReverse",
		"onlineCount",
		"class"
	]);
	var i = hb();
	W(i, (e) => ({
		class: e,
		...r
	}), [() => Z("flex h-8 flex-none items-center justify-between overflow-hidden p-1", t.reversed ? "flex-row-reverse md:flex-row" : "flex-row-reverse", t.class)]);
	var a = N(i);
	qh(N(a), {
		variant: "outline",
		type: "button",
		size: "icon-xs",
		children: (e, t) => {
			Fg(e, {
				get icon() {
					return kg;
				},
				class: "size-4"
			});
		},
		$$slots: { default: !0 }
	}), E(a);
	var o = F(a, 2), s = N(o);
	E(o);
	var c = F(o, 2);
	qh(N(c), {
		variant: "outline",
		type: "button",
		size: "icon-xs",
		get onclick() {
			return t.handleReverse;
		},
		children: (e, n) => {
			var r = B(), i = P(r), a = (e) => {
				var t = B(), n = P(t), r = (e) => {
					Fg(e, {
						get icon() {
							return vg;
						},
						class: "size-4"
					});
				}, i = (e) => {
					Fg(e, {
						get icon() {
							return gg;
						},
						class: "size-4"
					});
				};
				H(n, (e) => {
					Ym.current ? e(r) : e(i, -1);
				}), V(e, t);
			}, o = (e) => {
				Fg(e, {
					get icon() {
						return _g;
					},
					class: "size-4"
				});
			}, s = (e) => {
				Fg(e, {
					get icon() {
						return yg;
					},
					class: "size-4"
				});
			};
			H(i, (e) => {
				t.reversed ? e(a) : Ym.current ? e(o, 1) : e(s, -1);
			}), V(e, r);
		},
		$$slots: { default: !0 }
	}), E(c), E(i), hr(() => Fi(s, `${n() ?? ""} online`)), V(e, i), O();
}
//#endregion
//#region src/features/chat/MessageBuffer.svelte
var _b = /* @__PURE__ */ z("<div></div>"), vb = /* @__PURE__ */ z("<div></div>");
function yb(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class"
	]);
	var r = vb();
	W(r, (e) => ({
		class: e,
		...n
	}), [() => Z("", t.class)]), Ji(r, 20, () => ({ length: 100 }), Wi, (e, t, n) => {
		var r = _b();
		r.textContent = `${n} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, vitae nihil labore
      nesciunt eius tenetur nostrum exercitationem reiciendis, illum minima, doloribus distinctio aspernatur.
      Veniam sint a, explicabo dolore harum ducimus?`, V(e, r);
	}), E(r), V(e, r), O();
}
//#endregion
//#region src/features/chat/ChatLayout.svelte
var bb = /* @__PURE__ */ z("<!> <!>", 1), xb = /* @__PURE__ */ z("<div><!> <!> <!> <!> <!> <!></div>");
function Sb(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ j(null), r = /* @__PURE__ */ j(null), i = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"isLoggedIn",
		"reversed",
		"handleReverse",
		"class"
	]);
	var a = xb();
	W(a, (e) => ({
		class: e,
		...i
	}), [() => Z("", t.class)]);
	var o = N(a);
	gb(o, {
		get reversed() {
			return t.reversed;
		},
		get handleReverse() {
			return t.handleReverse;
		},
		onlineCount: 0
	});
	var s = F(o, 2);
	eg(s, {});
	var c = F(s, 2);
	{
		let e = /* @__PURE__ */ A(() => t.reversed && Ym.current);
		eb(c, {
			get reversed() {
				return L(e);
			},
			class: "flex-9",
			get leftPaneRef() {
				return L(n);
			},
			set leftPaneRef(e) {
				M(n, e, !0);
			},
			get rightPaneRef() {
				return L(r);
			},
			set rightPaneRef(e) {
				M(r, e, !0);
			}
		});
	}
	var l = F(c, 2), u = (e) => {
		let i = /* @__PURE__ */ A(() => t.reversed && Ym.current ? L(n) : L(r)), a = /* @__PURE__ */ A(() => t.reversed && Ym.current ? L(r) : L(n));
		var o = bb(), s = P(o);
		L_(s, {
			[oi()]: (e) => ($g(L(i)) || x)(e),
			class: "flex-1"
		}), yb(F(s, 2), {
			[oi()]: (e) => ($g(L(a)) || x)(e),
			class: "flex-1"
		}), V(e, o);
	};
	H(l, (e) => {
		L(n) && L(r) && e(u);
	});
	var d = F(l, 2);
	eg(d, {});
	var f = F(d, 2), p = (e) => {
		mb(e, { class: "flex h-full flex-3 flex-col justify-end" });
	}, m = (e) => {
		n_(e, { class: "w-full flex-none" });
	};
	H(f, (e) => {
		t.isLoggedIn ? e(p) : e(m, -1);
	}), E(a), V(e, a), O();
}
//#endregion
//#region node_modules/sister/src/sister.js
var Cb = /* @__PURE__ */ o(((e, t) => {
	t.exports = function() {
		var e = {}, t = {};
		return e.on = function(e, n) {
			var r = {
				name: e,
				handler: n
			};
			return t[e] = t[e] || [], t[e].unshift(r), r;
		}, e.off = function(e) {
			var n = t[e.name].indexOf(e);
			n !== -1 && t[e.name].splice(n, 1);
		}, e.trigger = function(e, n) {
			var r = t[e], i;
			if (r) for (i = r.length; i--;) r[i].handler(n);
		}, e;
	};
})), wb = /* @__PURE__ */ o(((e, t) => {
	var n = 1e3, r = n * 60, i = r * 60, a = i * 24, o = a * 7, s = a * 365.25;
	t.exports = function(e, t) {
		t ||= {};
		var n = typeof e;
		if (n === "string" && e.length > 0) return c(e);
		if (n === "number" && isFinite(e)) return t.long ? u(e) : l(e);
		throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
	};
	function c(e) {
		if (e = String(e), !(e.length > 100)) {
			var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
			if (t) {
				var c = parseFloat(t[1]);
				switch ((t[2] || "ms").toLowerCase()) {
					case "years":
					case "year":
					case "yrs":
					case "yr":
					case "y": return c * s;
					case "weeks":
					case "week":
					case "w": return c * o;
					case "days":
					case "day":
					case "d": return c * a;
					case "hours":
					case "hour":
					case "hrs":
					case "hr":
					case "h": return c * i;
					case "minutes":
					case "minute":
					case "mins":
					case "min":
					case "m": return c * r;
					case "seconds":
					case "second":
					case "secs":
					case "sec":
					case "s": return c * n;
					case "milliseconds":
					case "millisecond":
					case "msecs":
					case "msec":
					case "ms": return c;
					default: return;
				}
			}
		}
	}
	function l(e) {
		var t = Math.abs(e);
		return t >= a ? Math.round(e / a) + "d" : t >= i ? Math.round(e / i) + "h" : t >= r ? Math.round(e / r) + "m" : t >= n ? Math.round(e / n) + "s" : e + "ms";
	}
	function u(e) {
		var t = Math.abs(e);
		return t >= a ? d(e, t, a, "day") : t >= i ? d(e, t, i, "hour") : t >= r ? d(e, t, r, "minute") : t >= n ? d(e, t, n, "second") : e + " ms";
	}
	function d(e, t, n, r) {
		var i = t >= n * 1.5;
		return Math.round(e / n) + " " + r + (i ? "s" : "");
	}
})), Tb = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		n.debug = n, n.default = n, n.coerce = c, n.disable = o, n.enable = i, n.enabled = s, n.humanize = wb(), n.destroy = l, Object.keys(e).forEach((t) => {
			n[t] = e[t];
		}), n.names = [], n.skips = [], n.formatters = {};
		function t(e) {
			let t = 0;
			for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
			return n.colors[Math.abs(t) % n.colors.length];
		}
		n.selectColor = t;
		function n(e) {
			let t, i = null, a, o;
			function s(...e) {
				if (!s.enabled) return;
				let r = s, i = Number(/* @__PURE__ */ new Date());
				r.diff = i - (t || i), r.prev = t, r.curr = i, t = i, e[0] = n.coerce(e[0]), typeof e[0] != "string" && e.unshift("%O");
				let a = 0;
				e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, i) => {
					if (t === "%%") return "%";
					a++;
					let o = n.formatters[i];
					if (typeof o == "function") {
						let n = e[a];
						t = o.call(r, n), e.splice(a, 1), a--;
					}
					return t;
				}), n.formatArgs.call(r, e), (r.log || n.log).apply(r, e);
			}
			return s.namespace = e, s.useColors = n.useColors(), s.color = n.selectColor(e), s.extend = r, s.destroy = n.destroy, Object.defineProperty(s, "enabled", {
				enumerable: !0,
				configurable: !1,
				get: () => i === null ? (a !== n.namespaces && (a = n.namespaces, o = n.enabled(e)), o) : i,
				set: (e) => {
					i = e;
				}
			}), typeof n.init == "function" && n.init(s), s;
		}
		function r(e, t) {
			let r = n(this.namespace + (t === void 0 ? ":" : t) + e);
			return r.log = this.log, r;
		}
		function i(e) {
			n.save(e), n.namespaces = e, n.names = [], n.skips = [];
			let t = (typeof e == "string" ? e : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
			for (let e of t) e[0] === "-" ? n.skips.push(e.slice(1)) : n.names.push(e);
		}
		function a(e, t) {
			let n = 0, r = 0, i = -1, a = 0;
			for (; n < e.length;) if (r < t.length && (t[r] === e[n] || t[r] === "*")) t[r] === "*" ? (i = r, a = n, r++) : (n++, r++);
			else if (i !== -1) r = i + 1, a++, n = a;
			else return !1;
			for (; r < t.length && t[r] === "*";) r++;
			return r === t.length;
		}
		function o() {
			let e = [...n.names, ...n.skips.map((e) => "-" + e)].join(",");
			return n.enable(""), e;
		}
		function s(e) {
			for (let t of n.skips) if (a(e, t)) return !1;
			for (let t of n.names) if (a(e, t)) return !0;
			return !1;
		}
		function c(e) {
			return e instanceof Error ? e.stack || e.message : e;
		}
		function l() {
			console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
		}
		return n.enable(n.load()), n;
	}
	t.exports = n;
})), Eb = /* @__PURE__ */ o(((e, t) => {
	e.formatArgs = r, e.save = i, e.load = a, e.useColors = n, e.storage = o(), e.destroy = (() => {
		let e = !1;
		return () => {
			e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
		};
	})(), e.colors = /* @__PURE__ */ "#0000CC.#0000FF.#0033CC.#0033FF.#0066CC.#0066FF.#0099CC.#0099FF.#00CC00.#00CC33.#00CC66.#00CC99.#00CCCC.#00CCFF.#3300CC.#3300FF.#3333CC.#3333FF.#3366CC.#3366FF.#3399CC.#3399FF.#33CC00.#33CC33.#33CC66.#33CC99.#33CCCC.#33CCFF.#6600CC.#6600FF.#6633CC.#6633FF.#66CC00.#66CC33.#9900CC.#9900FF.#9933CC.#9933FF.#99CC00.#99CC33.#CC0000.#CC0033.#CC0066.#CC0099.#CC00CC.#CC00FF.#CC3300.#CC3333.#CC3366.#CC3399.#CC33CC.#CC33FF.#CC6600.#CC6633.#CC9900.#CC9933.#CCCC00.#CCCC33.#FF0000.#FF0033.#FF0066.#FF0099.#FF00CC.#FF00FF.#FF3300.#FF3333.#FF3366.#FF3399.#FF33CC.#FF33FF.#FF6600.#FF6633.#FF9900.#FF9933.#FFCC00.#FFCC33".split(".");
	function n() {
		if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return !0;
		if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
		let e;
		return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
	}
	function r(e) {
		if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
		let n = "color: " + this.color;
		e.splice(1, 0, n, "color: inherit");
		let r = 0, i = 0;
		e[0].replace(/%[a-zA-Z%]/g, (e) => {
			e !== "%%" && (r++, e === "%c" && (i = r));
		}), e.splice(i, 0, n);
	}
	e.log = console.debug || console.log || (() => {});
	function i(t) {
		try {
			t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
		} catch {}
	}
	function a() {
		let t;
		try {
			t = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
		} catch {}
		return !t && typeof process < "u" && "env" in process && (t = process.env.DEBUG), t;
	}
	function o() {
		try {
			return localStorage;
		} catch {}
	}
	t.exports = Tb()(e);
	var { formatters: s } = t.exports;
	s.j = function(e) {
		try {
			return JSON.stringify(e);
		} catch (e) {
			return "[UnexpectedJSONParseError]: " + e.message;
		}
	};
})), Db = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
		BUFFERING: 3,
		ENDED: 0,
		PAUSED: 2,
		PLAYING: 1,
		UNSTARTED: -1,
		VIDEO_CUED: 5
	}, t.exports = e.default;
})), Ob = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = r(Db());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.default = {
		pauseVideo: {
			acceptableStates: [n.default.ENDED, n.default.PAUSED],
			stateChangeRequired: !1
		},
		playVideo: {
			acceptableStates: [n.default.ENDED, n.default.PLAYING],
			stateChangeRequired: !1
		},
		seekTo: {
			acceptableStates: [
				n.default.ENDED,
				n.default.PLAYING,
				n.default.PAUSED
			],
			stateChangeRequired: !0,
			timeout: 3e3
		}
	}, t.exports = e.default;
})), kb = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = [
		"ready",
		"stateChange",
		"playbackQualityChange",
		"playbackRateChange",
		"error",
		"apiChange",
		"volumeChange"
	], t.exports = e.default;
})), Ab = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = /* @__PURE__ */ "cueVideoById.loadVideoById.cueVideoByUrl.loadVideoByUrl.playVideo.pauseVideo.stopVideo.getVideoLoadedFraction.cuePlaylist.loadPlaylist.nextVideo.previousVideo.playVideoAt.setShuffle.setLoop.getPlaylist.getPlaylistIndex.setOption.mute.unMute.isMuted.setVolume.getVolume.seekTo.getPlayerState.getPlaybackRate.setPlaybackRate.getAvailablePlaybackRates.getPlaybackQuality.setPlaybackQuality.getAvailableQualityLevels.getCurrentTime.getDuration.removeEventListener.getVideoUrl.getVideoEmbedCode.getOptions.getOption.addEventListener.destroy.setSize.getIframe.getSphericalProperties.setSphericalProperties".split("."), t.exports = e.default;
})), jb = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = o(Eb()), r = o(Ob()), i = o(kb()), a = o(Ab());
	function o(e) {
		return e && e.__esModule ? e : { default: e };
	}
	var s = (0, n.default)("youtube-player"), c = {};
	c.proxyEvents = (e) => {
		let t = {};
		for (let n of i.default) {
			let r = "on" + n.slice(0, 1).toUpperCase() + n.slice(1);
			t[r] = (t) => {
				s("event \"%s\"", r, t), e.trigger(n, t);
			};
		}
		return t;
	}, c.promisifyPlayer = (e, t = !1) => {
		let n = {};
		for (let i of a.default) t && r.default[i] ? n[i] = (...t) => e.then((e) => {
			let n = r.default[i], a = e.getPlayerState(), o = e[i].apply(e, t);
			return n.stateChangeRequired || Array.isArray(n.acceptableStates) && !n.acceptableStates.includes(a) ? new Promise((t) => {
				let r = () => {
					let i = e.getPlayerState(), a;
					typeof n.timeout == "number" && (a = setTimeout(() => {
						e.removeEventListener("onStateChange", r), t();
					}, n.timeout)), Array.isArray(n.acceptableStates) && n.acceptableStates.includes(i) && (e.removeEventListener("onStateChange", r), clearTimeout(a), t());
				};
				e.addEventListener("onStateChange", r);
			}).then(() => o) : o;
		}) : n[i] = (...t) => e.then((e) => e[i].apply(e, t));
		return n;
	}, e.default = c, t.exports = e.default;
})), Mb = /* @__PURE__ */ o(((e, t) => {
	t.exports = function(e, t, a) {
		var o = document.head || document.getElementsByTagName("head")[0], s = document.createElement("script");
		typeof t == "function" && (a = t, t = {}), t ||= {}, a ||= function() {}, s.type = t.type || "text/javascript", s.charset = t.charset || "utf8", s.async = "async" in t ? !!t.async : !0, s.src = e, t.attrs && n(s, t.attrs), t.text && (s.text = "" + t.text), ("onload" in s ? r : i)(s, a), s.onload || r(s, a), o.appendChild(s);
	};
	function n(e, t) {
		for (var n in t) e.setAttribute(n, t[n]);
	}
	function r(e, t) {
		e.onload = function() {
			this.onerror = this.onload = null, t(null, e);
		}, e.onerror = function() {
			this.onerror = this.onload = null, t(/* @__PURE__ */ Error("Failed to load " + this.src), e);
		};
	}
	function i(e, t) {
		e.onreadystatechange = function() {
			this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, t(null, e));
		};
	}
})), Nb = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = r(Mb());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.default = (e) => new Promise((t) => {
		if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
			t(window.YT);
			return;
		} else {
			let t = window.location.protocol === "http:" ? "http:" : "https:";
			(0, n.default)(t + "//www.youtube.com/iframe_api", (t) => {
				t && e.trigger("error", t);
			});
		}
		let r = window.onYouTubeIframeAPIReady;
		window.onYouTubeIframeAPIReady = () => {
			r && r(), t(window.YT);
		};
	}), t.exports = e.default;
})), Pb = /* @__PURE__ */ c((/* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = a(Cb()), r = a(jb()), i = a(Nb());
	function a(e) {
		return e && e.__esModule ? e : { default: e };
	}
	var o;
	e.default = (e, t = {}, a = !1) => {
		let s = (0, n.default)();
		if (o ||= (0, i.default)(s), t.events) throw Error("Event handlers cannot be overwritten.");
		if (typeof e == "string" && !document.getElementById(e)) throw Error("Element \"" + e + "\" does not exist.");
		t.events = r.default.proxyEvents(s);
		let c = new Promise((n) => {
			typeof e == "object" && e.playVideo instanceof Function ? n(e) : o.then((r) => {
				let i = new r.Player(e, t);
				return s.on("ready", () => {
					n(i);
				}), null;
			});
		}), l = r.default.promisifyPlayer(c, a);
		return l.on = s.on, l.off = s.off, l;
	}, t.exports = e.default;
})))()), Fb = (e) => (t) => {
	let n = (0, Pb.default)(t, e);
	return () => {
		n.destroy();
	};
}, Ib = /* @__PURE__ */ z("<div><div class=\"flex flex-1 flex-row items-center justify-start\"></div> <div class=\"flex-auto text-center\"> </div> <div class=\"flex flex-1 flex-row items-center justify-end\"><!></div></div>");
function Lb(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"current",
		"total",
		"open",
		"handlePlayerToggle",
		"class"
	]);
	var r = Ib();
	W(r, (e) => ({
		class: e,
		...n
	}), [() => Z("flex h-8 flex-row items-center justify-between gap-4 overflow-hidden p-1", t.class)]);
	var i = F(N(r), 2), a = N(i);
	E(i);
	var o = F(i, 2);
	qh(N(o), {
		variant: "outline",
		type: "button",
		size: "icon-xs",
		get onclick() {
			return t.handlePlayerToggle;
		},
		children: (e, n) => {
			var r = B(), i = P(r), a = (e) => {
				Fg(e, {
					get icon() {
						return Dg;
					},
					class: "size-4"
				});
			}, o = (e) => {
				Fg(e, {
					get icon() {
						return Cg;
					},
					class: "size-4"
				});
			};
			H(i, (e) => {
				t.open ? e(a) : e(o, -1);
			}), V(e, r);
		},
		$$slots: { default: !0 }
	}), E(o), E(r), hr(() => Fi(a, `${t.current ?? ""} / ${t.total ?? ""} items`)), V(e, r), O();
}
//#endregion
//#region src/features/player/PlayerHeader.svelte
var Rb = /* @__PURE__ */ z("<div><div><!></div> <p class=\"flex-auto truncate\"> </p> <div><!></div></div>");
function zb(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"reversed",
		"handleReverse",
		"mediaLink",
		"mediaTitle",
		"class"
	]), r = () => navigator.clipboard.writeText(t.mediaLink ?? "");
	var i = Rb();
	W(i, (e) => ({
		class: e,
		...n
	}), [() => Z("flex h-8 items-center justify-between gap-4 overflow-hidden p-1", t.reversed ? "flex-row" : "flew-row md:flex-row-reverse", t.class)]);
	var a = N(i);
	qh(N(a), {
		variant: "outline",
		type: "button",
		size: "icon-xs",
		get onclick() {
			return t.handleReverse;
		},
		children: (e, n) => {
			var r = B(), i = P(r), a = (e) => {
				var t = B(), n = P(t), r = (e) => {
					Fg(e, {
						get icon() {
							return _g;
						},
						class: "size-4"
					});
				}, i = (e) => {
					Fg(e, {
						get icon() {
							return yg;
						},
						class: "size-4"
					});
				};
				H(n, (e) => {
					Ym.current ? e(r) : e(i, -1);
				}), V(e, t);
			}, o = (e) => {
				Fg(e, {
					get icon() {
						return vg;
					},
					class: "size-4"
				});
			}, s = (e) => {
				Fg(e, {
					get icon() {
						return gg;
					},
					class: "size-4"
				});
			};
			H(i, (e) => {
				t.reversed ? e(a) : Ym.current ? e(o, 1) : e(s, -1);
			}), V(e, r);
		},
		$$slots: { default: !0 }
	}), E(a);
	var o = F(a, 2), s = N(o, !0);
	E(o);
	var c = F(o, 2), l = N(c), u = (e) => {
		qh(e, {
			variant: "outline",
			type: "button",
			size: "icon-xs",
			title: "Copy video link",
			onclick: r,
			children: (e, t) => {
				Fg(e, {
					get icon() {
						return xg;
					},
					class: "size-4"
				});
			},
			$$slots: { default: !0 }
		});
	};
	H(l, (e) => {
		t.mediaLink !== "" && e(u);
	}), E(c), E(i), hr((e, n) => {
		Sa(a, 1, e), Ra(o, "title", t.mediaTitle), Fi(s, t.mediaTitle), Sa(c, 1, n);
	}, [() => ga(Z("flex flex-1 flex-row items-center", t.reversed ? "justify-start" : "justify-start md:justify-end")), () => ga(Z("flex flex-1 flex-row items-center", t.reversed ? "justify-end" : "justify-end md:justify-start"))]), V(e, i), O();
}
//#endregion
//#region src/features/player/PlayerLayout.svelte
var Bb = /* @__PURE__ */ z("<div class=\"flex aspect-video h-full w-full md:h-auto md:w-auto\"><div class=\"aspect-video h-full w-full flex-initial overflow-hidden md:h-auto md:w-auto\"></div></div>"), Vb = /* @__PURE__ */ z("<!> <!>", 1), Hb = /* @__PURE__ */ z("<!> <!> <div class=\"flex-initial overflow-hidden\"><!></div> <!> <!>", 1);
function Ub(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ j(!0), r = /* @__PURE__ */ A(() => Mt(jo).currentIndex), i = /* @__PURE__ */ A(() => Mt(jo).playlist[L(r)]), a = /* @__PURE__ */ A(() => L(i)?.media?.title ?? ""), o = /* @__PURE__ */ A(() => L(i)?.media?.id ?? ""), s = /* @__PURE__ */ A(() => L(i).media.type === "yt" ? `https://youtu.be/${L(i).media.id}` : ""), c = /* @__PURE__ */ A(() => Mt(jo).playlist.length), l = /* @__PURE__ */ A(() => Mt(jo).playlist.indexOf(L(i)) + 1), u = () => M(n, !L(n));
	var d = Hb(), f = P(d);
	zb(f, {
		get reversed() {
			return t.reversed;
		},
		get mediaLink() {
			return L(s);
		},
		get mediaTitle() {
			return L(a);
		},
		get handleReverse() {
			return t.handleReverse;
		}
	});
	var p = F(f, 2);
	eg(p, {});
	var m = F(p, 2), h = N(m), g = (e) => {
		var t = Bb();
		pa(N(t), () => Fb({
			videoId: L(o),
			playerVars: {
				autoplay: 1,
				controls: 1
			}
		})), E(t), V(e, t);
	}, _ = (e) => {
		d_(e, {
			class: "aspect-video h-full w-full md:h-auto md:w-auto",
			children: (e, t) => {
				p_(e, {
					children: (e, t) => {
						var n = Vb(), r = P(n);
						g_(r, {
							variant: "icon",
							children: (e, t) => {
								qh(e, {
									variant: "ghost",
									type: "button",
									size: "icon-xs",
									onclick: u,
									children: (e, t) => {
										Fg(e, {
											get icon() {
												return jg;
											},
											class: "size-5 motion-safe:animate-pulse"
										});
									},
									$$slots: { default: !0 }
								});
							},
							$$slots: { default: !0 }
						}), v_(F(r, 2), {
							class: "text-md font-semibold font-stretch-expanded select-none",
							children: (e, t) => {
								Ze(), V(e, Mi("Player is hidden"));
							},
							$$slots: { default: !0 }
						}), V(e, n);
					},
					$$slots: { default: !0 }
				});
			},
			$$slots: { default: !0 }
		});
	};
	H(h, (e) => {
		L(n) ? e(g) : e(_, -1);
	}), E(m);
	var v = F(m, 2);
	eg(v, {}), Lb(F(v, 2), {
		get current() {
			return L(l);
		},
		get total() {
			return L(c);
		},
		get open() {
			return L(n);
		},
		handlePlayerToggle: u,
		class: "h-7 max-h-7 min-h-7 w-full"
	}), V(e, d), O();
}
//#endregion
//#region src/features/playlist/PlaylistItem.svelte
var Wb = /* @__PURE__ */ z("<div> </div>");
function Gb(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"title",
		"class"
	]);
	var r = Wb();
	W(r, (e) => ({
		class: e,
		...n
	}), [() => Z("truncate", t.class)]);
	var i = N(r, !0);
	E(r), hr(() => Fi(i, t.title)), V(e, r), O();
}
//#endregion
//#region src/features/playlist/PlaylistLayout.svelte
var Kb = /* @__PURE__ */ z("<!> <!>", 1), qb = /* @__PURE__ */ z("<div></div>");
function Jb(e, t) {
	D(t, !0);
	let n = () => It(jo, "$playlistStore", r), [r, i] = Lt(), a = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class"
	]);
	var o = qb();
	W(o, (e) => ({
		class: e,
		...a
	}), [() => Z("", t.class)]), Ji(o, 5, () => n().playlist, (e) => e.uid, (e, t) => {
		var n = Kb(), r = P(n);
		Gb(r, { get title() {
			return L(t).media.title;
		} }), eg(F(r, 2), {}), V(e, n);
	}), E(o), V(e, o), O(), i();
}
//#endregion
//#region src/shared/components/layout/ResizableCytubeFluidLayout.svelte
var Yb = 50, Xb = /* @__PURE__ */ z("<!> <!> <!>", 1);
function Zb(e, t) {
	D(t, !0);
	let n = K(t, "defaultMainSize", 3, Yb), r = K(t, "defaultSecondarySize", 3, Yb), i = K(t, "mainPaneRef", 15, null), a = K(t, "secondaryPaneRef", 15, null), o = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class",
		"direction",
		"defaultMainSize",
		"defaultSecondarySize",
		"mainPaneRef",
		"secondaryPaneRef",
		"mainClass",
		"secondaryClass"
	]);
	{
		let s = /* @__PURE__ */ A(() => Z("", t.class));
		Qy(e, $a({
			get direction() {
				return t.direction;
			},
			get class() {
				return L(s);
			}
		}, () => o, {
			children: (e, o) => {
				var s = Xb(), c = P(s);
				{
					let e = /* @__PURE__ */ A(() => Z("", t.mainClass));
					qy(c, {
						get defaultSize() {
							return n();
						},
						order: 1,
						collapsible: !0,
						get class() {
							return L(e);
						},
						get ref() {
							return i();
						},
						set ref(e) {
							i(e);
						}
					});
				}
				var l = F(c, 2);
				Zy(l, { withHandle: !0 });
				var u = F(l, 2);
				{
					let e = /* @__PURE__ */ A(() => Z("", t.secondaryClass));
					qy(u, {
						get defaultSize() {
							return r();
						},
						order: 2,
						collapsible: !0,
						get class() {
							return L(e);
						},
						get ref() {
							return a();
						},
						set ref(e) {
							a(e);
						}
					});
				}
				V(e, s);
			},
			$$slots: { default: !0 }
		}));
	}
	O();
}
//#endregion
//#region src/shared/components/layout/Home.svelte
var Qb = /* @__PURE__ */ z("<div class=\"flex w-full flex-1 flex-col\"><!> <!> <!></div> <!>", 1), $b = /* @__PURE__ */ z("<main><!> <!></main>");
function ex(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ A(() => Ym.current), r = /* @__PURE__ */ j(null), i = /* @__PURE__ */ j(null), a = () => M(n, !L(n)), o = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"isLoggedIn",
		"class"
	]);
	var s = $b();
	W(s, (e) => ({
		class: e,
		...o
	}), [() => Z("flex flex-col border-t", t.class)]);
	var c = N(s);
	{
		let e = /* @__PURE__ */ A(() => Ym.current ? "horizontal" : "vertical"), t = /* @__PURE__ */ A(() => Ym.current ? 36 : 45), n = /* @__PURE__ */ A(() => Ym.current ? 64 : 55);
		Zb(c, {
			get direction() {
				return L(e);
			},
			mainClass: "flex",
			secondaryClass: "flex",
			get defaultMainSize() {
				return L(t);
			},
			get defaultSecondarySize() {
				return L(n);
			},
			class: "flex-1",
			get mainPaneRef() {
				return L(r);
			},
			set mainPaneRef(e) {
				M(r, e, !0);
			},
			get secondaryPaneRef() {
				return L(i);
			},
			set secondaryPaneRef(e) {
				M(i, e, !0);
			}
		});
	}
	var l = F(c, 2), u = (e) => {
		let o = /* @__PURE__ */ A(() => L(n) ? L(i) : L(r)), s = /* @__PURE__ */ A(() => L(n) ? L(r) : L(i));
		var c = Qb(), l = P(c), u = N(l);
		Ub(u, {
			get reversed() {
				return L(n);
			},
			handleReverse: a
		});
		var d = F(u, 2);
		eg(d, {}), Jb(F(d, 2), { class: "h-6 max-h-6 min-h-6" }), E(l), pa(l, () => $g(L(o))), Sb(F(l, 2), {
			[oi()]: (e) => ($g(L(s)) || x)(e),
			get isLoggedIn() {
				return t.isLoggedIn;
			},
			handleReverse: a,
			get reversed() {
				return L(n);
			},
			class: "flex w-full flex-1 flex-col"
		}), V(e, c);
	};
	H(l, (e) => {
		L(r) && L(i) && e(u);
	}), E(s), V(e, s), O();
}
//#endregion
//#region src/App.svelte
var tx = "dark min-h-screen flex flex-col", nx = new URL("dist/logo.png", window.BASE_URL).toString(), rx = /* @__PURE__ */ z("<!> <!>", 1);
function ix(e, t) {
	D(t, !1);
	let n = () => It(To, "$appStore", a), r = () => It(No, "$socketStore", a), i = () => It(Do, "$clientStore", a), [a, o] = Lt();
	eo(() => {
		let e = document.body.className;
		return document.body.className = tx.toString(), () => document.body.className = e;
	}), Ya();
	var s = rx(), c = P(s);
	Qg(c, {
		get imgLogoSrc() {
			return nx;
		},
		get appVersion() {
			return n().version;
		},
		get isConnected() {
			return r().connected;
		},
		get isLoggedIn() {
			return i().logged_in;
		}
	}), ex(F(c, 2), {
		get isLoggedIn() {
			return i().logged_in;
		},
		class: "flex-1"
	}), V(e, s), O(), o();
}
//#endregion
//#region src/main.ts
var ax = [
	"wrap",
	"useroptions",
	"emotelist",
	"channeloptions",
	"pmbar",
	"footer",
	"usertheme"
], ox = [
	"//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css",
	"/css/sticky-footer-navbar.css",
	"/css/videojs-resolution-switcher.css",
	"/css/video-js.css",
	"/css/cytube.css"
], sx = () => {
	ox.forEach((e) => {
		let t = document.querySelector(`link[href="${e}"]`);
		t && t.remove();
	}), ax.forEach((e) => {
		let t = document.getElementById(e);
		t && t.remove();
	});
}, cx = (e) => new Promise((t, n) => {
	let r = document.createElement("link");
	r.rel = "stylesheet", r.type = "text/css", r.href = e.toString(), r.onload = () => t(), r.onerror = (e) => n(/* @__PURE__ */ Error(`failed to load stylesheet: ${e}`)), document.head.appendChild(r);
}), lx = (e) => {
	let t = document.createElement("div");
	t.className = "server-msg-reconnect", t.style = "border: 1px solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", t.textContent = e;
	let n = document.getElementById("messagebuffer");
	return n && n.appendChild(t), t;
}, ux = async () => {
	let e = lx("Loading styles...");
	await cx(new URL("dist/index.css", window.BASE_URL)), e.remove();
}, dx = async () => {
	let e = await Bo();
	try {
		await ux(), sx(), lo(), Ii(ix, { target: document.body });
	} catch (t) {
		throw e(), t;
	}
};
//#endregion
export { dx as init };
