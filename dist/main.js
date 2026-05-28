//#region node_modules/svelte/src/internal/shared/utils.js
var e = Array.isArray, t = Array.prototype.indexOf, n = Array.prototype.includes, r = Array.from, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyDescriptors, s = Object.prototype, c = Array.prototype, l = Object.getPrototypeOf, u = Object.isExtensible;
function d(e) {
	return typeof e == "function";
}
var f = () => {};
function p(e) {
	return e();
}
function m(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function h() {
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
var g = 1 << 24, _ = 1024, v = 2048, y = 4096, b = 8192, x = 16384, ee = 32768, te = 1 << 25, S = 65536, ne = 1 << 19, re = 1 << 20, ie = 1 << 25, ae = 65536, oe = 1 << 21, se = 1 << 22, ce = 1 << 23, le = Symbol("$state"), ue = Symbol("legacy props"), de = Symbol(""), fe = Symbol("attributes"), C = Symbol("class"), pe = Symbol("style"), me = Symbol("text"), he = Symbol("form reset"), ge = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), _e = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function ve(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function ye() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function be(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function xe(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Se() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ce(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function we() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Te(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Ee() {
	throw Error("https://svelte.dev/e/set_context_after_init");
}
function De() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Oe() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function ke() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ae() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/constants.js
var je = {}, Me = Symbol("uninitialized"), Ne = "http://www.w3.org/1999/xhtml", Pe = "@attach";
function Fe() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Ie(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Le() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Re() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var w = !1;
function ze(e) {
	w = e;
}
var T;
function Be(e) {
	if (e === null) throw Ie(), je;
	return T = e;
}
function Ve() {
	return Be(/* @__PURE__ */ In(T));
}
function E(e) {
	if (w) {
		if (/* @__PURE__ */ In(T) !== null) throw Ie(), je;
		T = e;
	}
}
function He(e = 1) {
	if (w) {
		for (var t = e, n = T; t--;) n = /* @__PURE__ */ In(n);
		T = n;
	}
}
function Ue(e = !0) {
	for (var t = 0, n = T;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ In(n);
		e && n.remove(), n = i;
	}
}
function We(e) {
	if (!e || e.nodeType !== 8) throw Ie(), je;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Ge(e) {
	return e === this.v;
}
function Ke(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function qe(e) {
	return !Ke(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var Je = !1, Ye = !1;
function Xe() {
	Ye = !0;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/clone.js
var Ze = [];
function Qe(e, t = !1, n = !1) {
	return $e(e, /* @__PURE__ */ new Map(), "", Ze, null, n);
}
function $e(t, n, r, i, a = null, o = !1) {
	if (typeof t == "object" && t) {
		var c = n.get(t);
		if (c !== void 0) return c;
		if (t instanceof Map) return new Map(t);
		if (t instanceof Set) return new Set(t);
		if (e(t)) {
			var u = Array(t.length);
			n.set(t, u), a !== null && n.set(a, u);
			for (var d = 0; d < t.length; d += 1) {
				var f = t[d];
				d in t && (u[d] = $e(f, n, r, i, null, o));
			}
			return u;
		}
		if (l(t) === s) {
			u = {}, n.set(t, u), a !== null && n.set(a, u);
			for (var p of Object.keys(t)) u[p] = $e(t[p], n, r, i, null, o);
			return u;
		}
		if (t instanceof Date) return structuredClone(t);
		if (typeof t.toJSON == "function" && !o) return $e(t.toJSON(), n, r, i, t);
	}
	if (t instanceof EventTarget) return t;
	try {
		return structuredClone(t);
	} catch {
		return t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var et = null;
function tt(e) {
	et = e;
}
function nt(e) {
	return st("getContext").get(e);
}
function rt(e, t) {
	let n = st("setContext");
	if (Je) {
		var r = I.f;
		!Tr && r & 32 && !et.i || Ee();
	}
	return n.set(e, t), t;
}
function it(e) {
	return st("hasContext").has(e);
}
function at() {
	return st("getAllContexts");
}
function D(e, t = !1, n) {
	et = {
		p: et,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: I,
		l: Ye && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function O(e) {
	var t = et, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) $n(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, et = t.p, e ?? {};
}
function ot() {
	return !Ye || et !== null && et.l === null;
}
function st(e) {
	return et === null && ve(e), et.c ??= new Map(ct(et) || void 0);
}
function ct(e) {
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
var lt = [];
function ut() {
	var e = lt;
	lt = [], m(e);
}
function dt(e) {
	if (lt.length === 0 && !Lt) {
		var t = lt;
		queueMicrotask(() => {
			t === lt && ut();
		});
	}
	lt.push(e);
}
function ft() {
	for (; lt.length > 0;) ut();
}
function pt(e) {
	var t = I;
	if (t === null) return Tr.f |= ce, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	mt(e, t);
}
function mt(e, t) {
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
var ht = ~(v | y | _);
function gt(e, t) {
	e.f = e.f & ht | t;
}
function _t(e) {
	e.f & 512 || e.deps === null ? gt(e, _) : gt(e, y);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function vt(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ae, vt(t.deps));
}
function yt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), vt(e.deps), gt(e, _);
}
//#endregion
//#region node_modules/svelte/src/store/utils.js
function bt(e, t, n) {
	if (e == null) return t(void 0), n && n(void 0), f;
	let r = R(() => e.subscribe(t, n));
	return r.unsubscribe ? () => r.unsubscribe() : r;
}
//#endregion
//#region node_modules/svelte/src/store/shared/index.js
var xt = [];
function St(e, t = f) {
	let n = null, r = /* @__PURE__ */ new Set();
	function i(t) {
		if (Ke(e, t) && (e = t, n)) {
			let t = !xt.length;
			for (let t of r) t[1](), xt.push(t, e);
			if (t) {
				for (let e = 0; e < xt.length; e += 2) xt[e][0](xt[e + 1]);
				xt.length = 0;
			}
		}
	}
	function a(t) {
		i(t(e));
	}
	function o(o, s = f) {
		let c = [o, s];
		return r.add(c), r.size === 1 && (n = t(i, a) || f), o(e), () => {
			r.delete(c), r.size === 0 && n && (n(), n = null);
		};
	}
	return {
		set: i,
		update: a,
		subscribe: o
	};
}
function Ct(e) {
	let t;
	return bt(e, (e) => t = e)(), t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var wt = !1, Tt = !1, Et = Symbol("unmounted");
function Dt(e, t, n) {
	let r = n[t] ??= {
		store: null,
		source: /* @__PURE__ */ xn(void 0),
		unsubscribe: f
	};
	if (r.store !== e && !(Et in n)) if (r.unsubscribe(), r.store = e ?? null, e == null) r.source.v = void 0, r.unsubscribe = f;
	else {
		var i = !0;
		r.unsubscribe = bt(e, (e) => {
			i ? r.source.v = e : M(r.source, e);
		}), i = !1;
	}
	return e && Et in n ? Ct(e) : L(r.source);
}
function Ot() {
	let e = {};
	function t() {
		Zn(() => {
			for (var t in e) e[t].unsubscribe();
			i(e, Et, {
				enumerable: !1,
				value: !0
			});
		});
	}
	return [e, t];
}
function kt(e, t) {
	wt = !0;
	try {
		e.set(t);
	} finally {
		wt = !1;
	}
}
function At(e, t, n) {
	return kt(e, n), t;
}
function jt(e) {
	var t = Tt;
	try {
		return Tt = !1, [e(), Tt];
	} finally {
		Tt = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var Mt = null, Nt = null, k = null, Pt = null, Ft = null, It = null, Lt = !1, Rt = !1, zt = null, Bt = null, Vt = 0, Ht = 1, Ut = class e {
	id = Ht++;
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
		Nt === null ? Mt = Nt = this : (Nt.#n = this, this.#t = Nt), Nt = this;
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
			for (var r of n.d) gt(r, v), t(r);
			for (r of n.m) gt(r, y), t(r);
		}
		this.#m.add(e);
	}
	#_() {
		this.#e = !0, Vt++ > 1e3 && (this.#C(), Gt());
		for (let e of this.#d) this.#f.delete(e), gt(e, v), this.schedule(e);
		for (let e of this.#f) gt(e, y), this.schedule(e);
		let t = this.#l;
		this.#l = [], this.apply();
		var n = zt = [], r = [], i = Bt = [];
		for (let e of t) try {
			this.#v(e, n, r);
		} catch (t) {
			throw Qt(e), this.#g() || this.discard(), t;
		}
		if (k = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (zt = null, Bt = null, this.#g()) {
			this.#x(r), this.#x(n);
			for (let [e, t] of this.#p) Zt(e, t);
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
		this.#r.clear(), Pt = this, qt(r), qt(n), Pt = null, this.#c?.resolve();
		var s = k;
		if (this.#o === 0 && (this.#l.length === 0 || s !== null) && (this.#C(), Je && (this.#S(), k = s)), this.#l.length > 0) if (s !== null) {
			let e = s;
			e.#l.push(...this.#l.filter((t) => !e.#l.includes(t)));
		} else s = this;
		s !== null && s.#_();
	}
	#v(e, t, n) {
		e.f ^= _;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#p.has(r)) && r.fn !== null) {
				a ? r.f ^= _ : i & 4 ? t.push(r) : Je && i & 16777224 ? n.push(r) : Br(r) && (i & 16 && this.#f.add(r), Gr(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#f.delete(i), gt(i, v), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#C(), k = this, this.#_();
	}
	#x(e) {
		for (var t = 0; t < e.length; t += 1) yt(e[t], this.#d, this.#f);
	}
	capture(e, t, n = !1) {
		e.v !== Me && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), Ft?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		k = this;
	}
	deactivate() {
		k = null, Ft = null;
	}
	flush() {
		try {
			Rt = !0, k = this, this.#_();
		} finally {
			Vt = 0, It = null, zt = null, Bt = null, Rt = !1, k = null, Ft = null, vn.clear();
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
		for (let l = Mt; l !== null; l = l.#n) {
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
					for (var o of t) Jt(o, r, i, a);
					a = /* @__PURE__ */ new Map();
					var s = [...l.current].filter(([e, t]) => {
						let n = this.current.get(e);
						return n ? n[0] !== t[0] || n[1] !== t[1] : !0;
					}).map(([e]) => e);
					if (s.length > 0) for (let e of this.#u) !(e.f & 155648) && Yt(e, s, a) && (e.f & 4194320 ? (gt(e, v), l.schedule(e)) : l.#d.add(e));
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
		this.#h || (this.#h = !0, dt(() => {
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
		return (this.#c ??= h()).promise;
	}
	static ensure() {
		if (k === null) {
			let t = k = new e();
			!Rt && !Lt && dt(() => {
				t.#e || t.flush();
			});
		}
		return k;
	}
	apply() {
		if (!Je || !this.is_fork && this.#t === null && this.#n === null) {
			Ft = null;
			return;
		}
		Ft = /* @__PURE__ */ new Map();
		for (let [e, [t]] of this.current) Ft.set(e, t);
		for (let t = Mt; t !== null; t = t.#n) if (!(t === this || t.is_fork)) {
			var e = !1;
			if (t.id < this.id) {
				for (let [n, [, r]] of t.current) if (!r && this.current.has(n)) {
					e = !0;
					break;
				}
			}
			if (!e) for (let [e, n] of t.previous) Ft.has(e) || Ft.set(e, n);
		}
	}
	schedule(e) {
		if (It = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (zt !== null && t === I && (Je || (Tr === null || !(Tr.f & 2)) && !wt)) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= _;
			}
		}
		this.#l.push(t);
	}
	#C() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null ? Mt = t : e.#n = t, t === null ? Nt = e : t.#t = e, this.linked = !1;
		}
	}
};
function Wt(e) {
	var t = Lt;
	Lt = !0;
	try {
		var n;
		for (e && (k !== null && !k.is_fork && k.flush(), n = e());;) {
			if (ft(), k === null) return n;
			k.flush();
		}
	} finally {
		Lt = t;
	}
}
function Gt() {
	try {
		we();
	} catch (e) {
		mt(e, It);
	}
}
var Kt = null;
function qt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Br(r) && (Kt = /* @__PURE__ */ new Set(), Gr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && hr(r), Kt?.size > 0)) {
				vn.clear();
				for (let e of Kt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Kt.has(n) && (Kt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Gr(n);
					}
				}
				Kt.clear();
			}
		}
		Kt = null;
	}
}
function Jt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? Jt(i, t, n, r) : e & 4194320 && !(e & 2048) && Yt(i, t, r) && (gt(i, v), Xt(i));
	}
}
function Yt(e, t, r) {
	let i = r.get(e);
	if (i !== void 0) return i;
	if (e.deps !== null) for (let i of e.deps) {
		if (n.call(t, i)) return !0;
		if (i.f & 2 && Yt(i, t, r)) return r.set(i, !0), !0;
	}
	return r.set(e, !1), !1;
}
function Xt(e) {
	k.schedule(e);
}
function Zt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), gt(e, _);
		for (var n = e.first; n !== null;) Zt(n, t), n = n.next;
	}
}
function Qt(e) {
	gt(e, _);
	for (var t = e.first; t !== null;) Qt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function $t(e) {
	let t = 0, n = bn(0), r;
	return () => {
		Xn() && (L(n), ar(() => (t === 0 && (r = R(() => e(() => wn(n)))), t += 1, () => {
			dt(() => {
				--t, t === 0 && (r?.(), r = void 0, wn(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var en = S | ne;
function tn(e, t, n, r) {
	new nn(e, t, n, r);
}
var nn = class {
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
	#h = $t(() => (this.#m = bn(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = I;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = I.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = sr(() => {
			if (w) {
				let e = this.#t;
				Ve();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#v() : this.#g();
			} else this.#y();
		}, en), w && (this.#e = T);
	}
	#g() {
		try {
			this.#a = lr(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed;
		t && (this.#s = lr(() => {
			t(this.#e, () => e, () => () => {});
		}));
	}
	#v() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = lr(() => e(this.#e)), dt(() => {
			var e = this.#c = document.createDocumentFragment(), t = Pn();
			e.append(t), this.#a = this.#x(() => lr(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, gr(this.#o, () => {
				this.#o = null;
			}), this.#b(k));
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = lr(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				br(this.#a, e);
				let t = this.#n.pending;
				this.#o = lr(() => t(this.#e));
			} else this.#b(k);
		} catch (e) {
			this.error(e);
		}
	}
	#b(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		yt(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(e) {
		var t = I, n = Tr, r = et;
		Or(this.#i), Dr(this.#i), tt(this.#i.ctx);
		try {
			return Ut.ensure(), e();
		} catch (e) {
			return pt(e), null;
		} finally {
			Or(t), Dr(n), tt(r);
		}
	}
	#S(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#b(t), this.#o && gr(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, dt(() => {
			this.#d = !1, this.#m && Sn(this.#m, this.#l);
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
		this.#a &&= (pr(this.#a), null), this.#o &&= (pr(this.#o), null), this.#s &&= (pr(this.#s), null), w && (Be(this.#t), He(), Be(Ue()));
		var t = this.#n.onerror;
		let n = this.#n.failed;
		var r = !1, i = !1;
		let a = () => {
			if (r) {
				Re();
				return;
			}
			r = !0, i && Ae(), this.#s !== null && gr(this.#s, () => {
				this.#s = null;
			}), this.#x(() => {
				this.#y();
			});
		}, o = (e) => {
			try {
				i = !0, t?.(e, a), i = !1;
			} catch (e) {
				mt(e, this.#i && this.#i.parent);
			}
			n && (this.#s = this.#x(() => {
				try {
					return lr(() => {
						var t = I;
						t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
					});
				} catch (e) {
					return mt(e, this.#i.parent), null;
				}
			}));
		};
		dt(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				mt(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => mt(e, this.#i && this.#i.parent)) : o(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function rn(e, t, n, r) {
	let i = ot() ? cn : dn;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = I, s = an(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		if (!(o.f & 16384)) {
			s();
			try {
				r(e);
			} catch (e) {
				mt(e, o);
			}
			on();
		}
	}
	var u = sn();
	if (n.length === 0) {
		c.then(() => l(t.map(i))).finally(u);
		return;
	}
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ un(e))).then((e) => l([...t.map(i), ...e])).catch((e) => mt(e, o)).finally(u);
	}
	c ? c.then(() => {
		s(), d(), on();
	}) : d();
}
function an() {
	var e = I, t = Tr, n = et, r = k;
	return function(i = !0) {
		Or(e), Dr(t), tt(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function on(e = !0) {
	Or(null), Dr(null), tt(null), e && k?.deactivate();
}
function sn() {
	var e = I, t = e.b, n = k, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function cn(e) {
	var t = 2 | v;
	return I !== null && (I.f |= ne), {
		ctx: et,
		deps: null,
		effects: null,
		equals: Ge,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: Me,
		wv: 0,
		parent: I,
		ac: null
	};
}
var ln = Symbol("obsolete");
/* @__NO_SIDE_EFFECTS__ */
function un(e, t, n) {
	let r = I;
	r === null && ye();
	var i = void 0, a = bn(Me), o = !Tr, s = /* @__PURE__ */ new Set();
	return ir(() => {
		var t = I, n = h();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== ge && n.reject(e);
			}).finally(on);
		} catch (e) {
			n.reject(e), on();
		}
		var c = k;
		if (o) {
			if (t.f & 32768) var l = sn();
			if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(ln);
			else for (let e of s.values()) e.reject(ln);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== ln && (c.activate(), t ? (a.f |= ce, Sn(a, t)) : (a.f & 8388608 && (a.f ^= ce), Sn(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), Zn(() => {
		for (let e of s) e.reject(ln);
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
	let t = /* @__PURE__ */ cn(e);
	return Je || Ar(t), t;
}
/* @__NO_SIDE_EFFECTS__ */
function dn(e) {
	let t = /* @__PURE__ */ cn(e);
	return t.equals = qe, t;
}
function fn(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) pr(t[n]);
	}
}
function pn(e) {
	var t, n = I, r = e.parent;
	if (!Cr && r !== null && e.v !== Me && r.f & 24576) return Fe(), e.v;
	Or(r);
	try {
		e.f &= ~ae, fn(e), t = Hr(e);
	} finally {
		Or(n);
	}
	return t;
}
function mn(e) {
	var t = pn(e);
	if (!e.equals(t) && (e.wv = zr(), (!k?.is_fork || e.deps === null) && (k === null ? e.v = t : (k.capture(e, t, !0), Pt?.capture(e, t, !0)), e.deps === null))) {
		gt(e, _);
		return;
	}
	Cr || (Ft === null ? _t(e) : (Xn() || k?.is_fork) && Ft.set(e, t));
}
function hn(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ge), t.fn !== null && (t.teardown = f), t.ac = null, Wr(t, 0), dr(t));
}
function gn(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Gr(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var _n = /* @__PURE__ */ new Set(), vn = /* @__PURE__ */ new Map(), yn = !1;
function bn(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Ge,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function j(e, t) {
	let n = bn(e, t);
	return Ar(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function xn(e, t = !1, n = !0) {
	let r = bn(e);
	return t || (r.equals = qe), Ye && n && et !== null && et.l !== null && (et.l.s ??= []).push(r), r;
}
function M(e, t, r = !1) {
	return Tr !== null && (!Er || Tr.f & 131072) && ot() && Tr.f & 4325394 && (kr === null || !n.call(kr, e)) && ke(), Sn(e, r ? En(t) : t, Bt);
}
function Sn(e, t, n = null) {
	if (!e.equals(t)) {
		vn.set(e, Cr ? t : e.v);
		var r = Ut.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && pn(t), Ft === null && _t(t);
		}
		e.wv = zr(), Tn(e, v, n), ot() && I !== null && I.f & 1024 && !(I.f & 96) && (Nr === null ? Pr([e]) : Nr.push(e)), !r.is_fork && _n.size > 0 && !yn && Cn();
	}
	return t;
}
function Cn() {
	yn = !1;
	for (let e of _n) {
		e.f & 1024 && gt(e, y);
		let t;
		try {
			t = Br(e);
		} catch {
			t = !0;
		}
		t && Gr(e);
	}
	_n.clear();
}
function wn(e) {
	M(e, e.v + 1);
}
function Tn(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = ot(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === I)) {
			var l = (c & v) === 0;
			if (l && gt(s, t), c & 131072) _n.add(s);
			else if (c & 2) {
				var u = s;
				Ft?.delete(u), c & 65536 || (c & 512 && (I === null || !(I.f & 2097152)) && (s.f |= ae), Tn(u, y, n));
			} else if (l) {
				var d = s;
				c & 16 && Kt !== null && Kt.add(d), n === null ? Xt(d) : n.push(d);
			}
		}
	}
}
function En(t) {
	if (typeof t != "object" || !t || le in t) return t;
	let n = l(t);
	if (n !== s && n !== c) return t;
	var r = /* @__PURE__ */ new Map(), i = e(t), o = /* @__PURE__ */ j(0), u = null, d = Lr, f = (e) => {
		if (Lr === d) return e();
		var t = Tr, n = Lr;
		Dr(null), Rr(d);
		var r = e();
		return Dr(t), Rr(n), r;
	};
	return i && r.set("length", /* @__PURE__ */ j(t.length, u)), new Proxy(t, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && De();
			var i = r.get(t);
			return i === void 0 ? f(() => {
				var e = /* @__PURE__ */ j(n.value, u);
				return r.set(t, e), e;
			}) : M(i, n.value, !0), !0;
		},
		deleteProperty(e, t) {
			var n = r.get(t);
			if (n === void 0) {
				if (t in e) {
					let e = f(() => /* @__PURE__ */ j(Me, u));
					r.set(t, e), wn(o);
				}
			} else M(n, Me), wn(o);
			return !0;
		},
		get(e, n, i) {
			if (n === le) return t;
			var o = r.get(n), s = n in e;
			if (o === void 0 && (!s || a(e, n)?.writable) && (o = f(() => /* @__PURE__ */ j(En(s ? e[n] : Me), u)), r.set(n, o)), o !== void 0) {
				var c = L(o);
				return c === Me ? void 0 : c;
			}
			return Reflect.get(e, n, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var n = Reflect.getOwnPropertyDescriptor(e, t);
			if (n && "value" in n) {
				var i = r.get(t);
				i && (n.value = L(i));
			} else if (n === void 0) {
				var a = r.get(t), o = a?.v;
				if (a !== void 0 && o !== Me) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return n;
		},
		has(e, t) {
			if (t === le) return !0;
			var n = r.get(t), i = n !== void 0 && n.v !== Me || Reflect.has(e, t);
			return (n !== void 0 || I !== null && (!i || a(e, t)?.writable)) && (n === void 0 && (n = f(() => /* @__PURE__ */ j(i ? En(e[t]) : Me, u)), r.set(t, n)), L(n) === Me) ? !1 : i;
		},
		set(e, t, n, s) {
			var c = r.get(t), l = t in e;
			if (i && t === "length") for (var d = n; d < c.v; d += 1) {
				var p = r.get(d + "");
				p === void 0 ? d in e && (p = f(() => /* @__PURE__ */ j(Me, u)), r.set(d + "", p)) : M(p, Me);
			}
			if (c === void 0) (!l || a(e, t)?.writable) && (c = f(() => /* @__PURE__ */ j(void 0, u)), M(c, En(n)), r.set(t, c));
			else {
				l = c.v !== Me;
				var m = f(() => En(n));
				M(c, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, n), !l) {
				if (i && typeof t == "string") {
					var g = r.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && M(g, _ + 1);
				}
				wn(o);
			}
			return !0;
		},
		ownKeys(e) {
			L(o);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = r.get(e);
				return t === void 0 || t.v !== Me;
			});
			for (var [n, i] of r) i.v !== Me && !(n in e) && t.push(n);
			return t;
		},
		setPrototypeOf() {
			Oe();
		}
	});
}
function Dn(e) {
	try {
		if (typeof e == "object" && e && le in e) return e[le];
	} catch {}
	return e;
}
function On(e, t) {
	return Object.is(Dn(e), Dn(t));
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
var kn, An, jn, Mn;
function Nn() {
	if (kn === void 0) {
		kn = window, An = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		jn = a(t, "firstChild").get, Mn = a(t, "nextSibling").get, u(e) && (e[C] = void 0, e[fe] = null, e[pe] = void 0, e.__e = void 0), u(n) && (n[me] = void 0);
	}
}
function Pn(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Fn(e) {
	return jn.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function In(e) {
	return Mn.call(e);
}
function N(e, t) {
	if (!w) return /* @__PURE__ */ Fn(e);
	var n = /* @__PURE__ */ Fn(T);
	if (n === null) n = T.appendChild(Pn());
	else if (t && n.nodeType !== 3) {
		var r = Pn();
		return n?.before(r), Be(r), r;
	}
	return t && Bn(n), Be(n), n;
}
function P(e, t = !1) {
	if (!w) {
		var n = /* @__PURE__ */ Fn(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ In(n) : n;
	}
	if (t) {
		if (T?.nodeType !== 3) {
			var r = Pn();
			return T?.before(r), Be(r), r;
		}
		Bn(T);
	}
	return T;
}
function F(e, t = 1, n = !1) {
	let r = w ? T : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ In(r);
	if (!w) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Pn();
			return r === null ? i?.after(a) : r.before(a), Be(a), a;
		}
		Bn(r);
	}
	return Be(r), r;
}
function Ln(e) {
	e.textContent = "";
}
function Rn() {
	return !Je || Kt !== null ? !1 : (I.f & ee) !== 0;
}
function zn(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function Bn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function Vn(e, t) {
	if (t) {
		let t = document.body;
		e.autofocus = !0, dt(() => {
			document.activeElement === t && e.focus();
		});
	}
}
function Hn(e) {
	w && /* @__PURE__ */ Fn(e) !== null && Ln(e);
}
var Un = !1;
function Wn() {
	Un || (Un = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[he]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Gn(e) {
	var t = Tr, n = I;
	Dr(null), Or(null);
	try {
		return e();
	} finally {
		Dr(t), Or(n);
	}
}
function Kn(e, t, n, r = n) {
	e.addEventListener(t, () => Gn(n));
	let i = e[he];
	i ? e[he] = () => {
		i(), r(!0);
	} : e[he] = () => r(!0), Wn();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function qn(e) {
	I === null && (Tr === null && Ce(e), Se()), Cr && xe(e);
}
function Jn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Yn(e, t) {
	var n = I;
	n !== null && n.f & 8192 && (e |= b);
	var r = {
		ctx: et,
		deps: null,
		nodes: null,
		f: e | v | 512,
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
	if (e & 4) zt === null ? Ut.ensure().schedule(r) : zt.push(r);
	else if (t !== null) {
		try {
			Gr(r);
		} catch (e) {
			throw pr(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= S));
	}
	if (i !== null && (i.parent = n, n !== null && Jn(i, n), Tr !== null && Tr.f & 2 && !(e & 64))) {
		var a = Tr;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Xn() {
	return Tr !== null && !Er;
}
function Zn(e) {
	let t = Yn(8, null);
	return gt(t, _), t.teardown = e, t;
}
function Qn(e) {
	qn("$effect");
	var t = I.f;
	if (!Tr && t & 32 && et !== null && !et.i) {
		var n = et;
		(n.e ??= []).push(e);
	} else return $n(e);
}
function $n(e) {
	return Yn(4 | re, e);
}
function er(e) {
	return qn("$effect.pre"), Yn(8 | re, e);
}
function tr(e) {
	Ut.ensure();
	let t = Yn(64 | ne, e);
	return () => {
		pr(t);
	};
}
function nr(e) {
	Ut.ensure();
	let t = Yn(64 | ne, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? gr(t, () => {
			pr(t), n(void 0);
		}) : (pr(t), n(void 0));
	});
}
function rr(e) {
	return Yn(4, e);
}
function ir(e) {
	return Yn(se | ne, e);
}
function ar(e, t = 0) {
	return Yn(8 | t, e);
}
function or(e, t = [], n = [], r = []) {
	rn(r, t, n, (t) => {
		Yn(8, () => e(...t.map(L)));
	});
}
function sr(e, t = 0) {
	return Yn(16 | t, e);
}
function cr(e, t = 0) {
	return Yn(g | t, e);
}
function lr(e) {
	return Yn(32 | ne, e);
}
function ur(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Cr, n = Tr;
		wr(!0), Dr(null);
		try {
			t.call(null);
		} finally {
			wr(e), Dr(n);
		}
	}
}
function dr(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Gn(() => {
			e.abort(ge);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : pr(n, t), n = r;
	}
}
function fr(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || pr(t), t = n;
	}
}
function pr(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (mr(e.nodes.start, e.nodes.end), n = !0), gt(e, te), dr(e, t && !n), Wr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	ur(e), e.f ^= te, e.f |= x;
	var i = e.parent;
	i !== null && i.first !== null && hr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function mr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ In(e);
		e.remove(), e = n;
	}
}
function hr(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function gr(e, t, n = !0) {
	var r = [];
	_r(e, r, !0);
	var i = () => {
		n && pr(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function _r(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= b;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				_r(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function vr(e) {
	yr(e, !0);
}
function yr(e, t) {
	if (e.f & 8192) {
		e.f ^= b, e.f & 1024 || (gt(e, v), Ut.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			yr(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function br(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ In(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var xr = null, Sr = !1, Cr = !1;
function wr(e) {
	Cr = e;
}
var Tr = null, Er = !1;
function Dr(e) {
	Tr = e;
}
var I = null;
function Or(e) {
	I = e;
}
var kr = null;
function Ar(e) {
	Tr !== null && (!Je || Tr.f & 2) && (kr === null ? kr = [e] : kr.push(e));
}
var jr = null, Mr = 0, Nr = null;
function Pr(e) {
	Nr = e;
}
var Fr = 1, Ir = 0, Lr = Ir;
function Rr(e) {
	Lr = e;
}
function zr() {
	return ++Fr;
}
function Br(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~ae), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Br(a) && mn(a), a.wv > e.wv) return !0;
		}
		t & 512 && Ft === null && gt(e, _);
	}
	return !1;
}
function Vr(e, t, r = !0) {
	var i = e.reactions;
	if (i !== null && !(!Je && kr !== null && n.call(kr, e))) for (var a = 0; a < i.length; a++) {
		var o = i[a];
		o.f & 2 ? Vr(o, t, !1) : t === o && (r ? gt(o, v) : o.f & 1024 && gt(o, y), Xt(o));
	}
}
function Hr(e) {
	var t = jr, n = Mr, r = Nr, i = Tr, a = kr, o = et, s = Er, c = Lr, l = e.f;
	jr = null, Mr = 0, Nr = null, Tr = l & 96 ? null : e, kr = null, tt(e.ctx), Er = !1, Lr = ++Ir, e.ac !== null && (Gn(() => {
		e.ac.abort(ge);
	}), e.ac = null);
	try {
		e.f |= oe;
		var u = e.fn, d = u();
		e.f |= ee;
		var f = e.deps, p = k?.is_fork;
		if (jr !== null) {
			var m;
			if (p || Wr(e, Mr), f !== null && Mr > 0) for (f.length = Mr + jr.length, m = 0; m < jr.length; m++) f[Mr + m] = jr[m];
			else e.deps = f = jr;
			if (Xn() && e.f & 512) for (m = Mr; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Mr < f.length && (Wr(e, Mr), f.length = Mr);
		if (ot() && Nr !== null && !Er && f !== null && !(e.f & 6146)) for (m = 0; m < Nr.length; m++) Vr(Nr[m], e);
		if (i !== null && i !== e) {
			if (Ir++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Ir;
			if (t !== null) for (let e of t) e.rv = Ir;
			Nr !== null && (r === null ? r = Nr : r.push(...Nr));
		}
		return e.f & 8388608 && (e.f ^= ce), d;
	} catch (e) {
		return pt(e);
	} finally {
		e.f ^= oe, jr = t, Mr = n, Nr = r, Tr = i, kr = a, tt(o), Er = s, Lr = c;
	}
}
function Ur(e, r) {
	let i = r.reactions;
	if (i !== null) {
		var a = t.call(i, e);
		if (a !== -1) {
			var o = i.length - 1;
			o === 0 ? i = r.reactions = null : (i[a] = i[o], i.pop());
		}
	}
	if (i === null && r.f & 2 && (jr === null || !n.call(jr, r))) {
		var s = r;
		s.f & 512 && (s.f ^= 512, s.f &= ~ae), s.v !== Me && _t(s), hn(s), Wr(s, 0);
	}
}
function Wr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Ur(e, n[r]);
}
function Gr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		gt(e, _);
		var n = I, r = Sr;
		I = e, Sr = !0;
		try {
			t & 16777232 ? fr(e) : dr(e), ur(e);
			var i = Hr(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Fr;
		} finally {
			Sr = r, I = n;
		}
	}
}
async function Kr() {
	if (Je) return new Promise((e) => {
		requestAnimationFrame(() => e()), setTimeout(() => e());
	});
	await Promise.resolve(), Wt();
}
function L(e) {
	var t = (e.f & 2) != 0;
	if (xr?.add(e), Tr !== null && !Er && !(I !== null && I.f & 16384) && (kr === null || !n.call(kr, e))) {
		var r = Tr.deps;
		if (Tr.f & 2097152) e.rv < Ir && (e.rv = Ir, jr === null && r !== null && r[Mr] === e ? Mr++ : jr === null ? jr = [e] : jr.push(e));
		else {
			Tr.deps ??= [], n.call(Tr.deps, e) || Tr.deps.push(e);
			var i = e.reactions;
			i === null ? e.reactions = [Tr] : n.call(i, Tr) || i.push(Tr);
		}
	}
	if (Cr && vn.has(e)) return vn.get(e);
	if (t) {
		var a = e;
		if (Cr) {
			var o = a.v;
			return (!(a.f & 1024) && a.reactions !== null || Jr(a)) && (o = pn(a)), vn.set(a, o), o;
		}
		var s = (a.f & 512) == 0 && !Er && Tr !== null && (Sr || (Tr.f & 512) != 0), c = (a.f & ee) === 0;
		Br(a) && (s && (a.f |= 512), mn(a)), s && !c && (gn(a), qr(a));
	}
	if (Ft?.has(e)) return Ft.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function qr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (gn(t), qr(t));
}
function Jr(e) {
	if (e.v === Me) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (vn.has(t) || t.f & 2 && Jr(t)) return !0;
	return !1;
}
function R(e) {
	var t = Er;
	try {
		return Er = !0, e();
	} finally {
		Er = t;
	}
}
function Yr(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (le in e) Xr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && le in n && Xr(n);
		}
	}
}
function Xr(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Xr(e[n], t);
		} catch {}
		let n = l(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = o(n);
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
function Zr() {
	return Symbol(Pe);
}
//#endregion
//#region node_modules/svelte/src/utils.js
function Qr(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var $r = [
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
function ei(e) {
	return $r.includes(e);
}
var ti = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), ni = {
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
function ri(e) {
	return e = e.toLowerCase(), ni[e] ?? e;
}
[...ti];
var ii = ["touchstart", "touchmove"];
function ai(e) {
	return ii.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var oi = Symbol("events"), si = /* @__PURE__ */ new Set(), ci = /* @__PURE__ */ new Set();
function li(e) {
	if (!w) return;
	e.removeAttribute("onload"), e.removeAttribute("onerror");
	let t = e.__e;
	t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
		e.isConnected && e.dispatchEvent(t);
	}));
}
function ui(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || gi.call(t, e), !e.cancelBubble) return Gn(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? dt(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function di(e, t, n, r = {}) {
	var i = ui(t, e, n, r);
	return () => {
		e.removeEventListener(t, i, r);
	};
}
function fi(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = ui(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Zn(() => {
		t.removeEventListener(e, o, a);
	});
}
function pi(e, t, n) {
	(t[oi] ??= {})[e] = n;
}
function mi(e) {
	for (var t = 0; t < e.length; t++) si.add(e[t]);
	for (var n of ci) n(e);
}
var hi = null;
function gi(e) {
	var t = this, n = t.ownerDocument, r = e.type, a = e.composedPath?.() || [], o = a[0] || e.target;
	hi = e;
	var s = 0, c = hi === e && e[oi];
	if (c) {
		var l = a.indexOf(c);
		if (l !== -1 && (t === document || t === window)) {
			e[oi] = t;
			return;
		}
		var u = a.indexOf(t);
		if (u === -1) return;
		l <= u && (s = l);
	}
	if (o = a[s] || e.target, o !== t) {
		i(e, "currentTarget", {
			configurable: !0,
			get() {
				return o || n;
			}
		});
		var d = Tr, f = I;
		Dr(null), Or(null);
		try {
			for (var p, m = []; o !== null && o !== t;) {
				try {
					var h = o[oi]?.[r];
					h != null && (!o.disabled || e.target === o) && h.call(o, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				s++, o = s < a.length ? a[s] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[oi] = t, delete e.currentTarget, Dr(d), Or(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var _i = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function vi(e) {
	return _i?.createHTML(e) ?? e;
}
function yi(e) {
	var t = zn("template");
	return t.innerHTML = vi(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function bi(e, t) {
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
		if (w) return bi(T, null), T;
		i === void 0 && (i = yi(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Fn(i)));
		var t = r || An ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Fn(t), s = t.lastChild;
			bi(o, s);
		} else bi(t, t);
		return t;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function xi(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = (t & 1) != 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (w) return bi(T, null), T;
		if (!o) {
			var e = /* @__PURE__ */ Fn(yi(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ Fn(e);) o.appendChild(/* @__PURE__ */ Fn(e));
			else o = /* @__PURE__ */ Fn(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ Fn(t), r = t.lastChild;
			bi(n, r);
		} else bi(t, t);
		return t;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Si(e, t) {
	return /* @__PURE__ */ xi(e, t, "svg");
}
function Ci(e = "") {
	if (!w) {
		var t = Pn(e + "");
		return bi(t, t), t;
	}
	var n = T;
	return n.nodeType === 3 ? Bn(n) : (n.before(n = Pn()), Be(n)), bi(n, n), n;
}
function B() {
	if (w) return bi(T, null), T;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Pn();
	return e.append(t, n), bi(t, n), e;
}
function V(e, t) {
	if (w) {
		var n = I;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = T), Ve();
		return;
	}
	e !== null && e.before(t);
}
function wi() {
	if (w && T && T.nodeType === 8 && T.textContent?.startsWith("$")) {
		let e = T.textContent.substring(1);
		return Ve(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
var Ti = !0;
function Ei(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[me] ??= e.nodeValue) && (e[me] = n, e.nodeValue = `${n}`);
}
function Di(e, t) {
	return ki(e, t);
}
var Oi = /* @__PURE__ */ new Map();
function ki(e, { target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	Nn();
	var l = void 0, u = nr(() => {
		var u = n ?? t.appendChild(Pn());
		tn(u, { pending: () => {} }, (t) => {
			D({});
			var n = et;
			if (o && (n.c = o), a && (i.$$events = a), w && bi(t, null), Ti = s, l = e(t, i) || {}, Ti = !0, w && (I.nodes.end = T, T === null || T.nodeType !== 8 || T.data !== "]")) throw Ie(), je;
			O();
		}, c);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = ai(r);
					for (let e of [t, document]) {
						var a = Oi.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Oi.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, gi, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(r(si)), ci.add(f), () => {
			for (var e of d) for (let n of [t, document]) {
				var r = Oi.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, gi), r.delete(e), r.size === 0 && Oi.delete(n)) : r.set(e, i);
			}
			ci.delete(f), u !== n && u.parentNode?.removeChild(u);
		};
	});
	return Ai.set(l, u), l;
}
var Ai = /* @__PURE__ */ new WeakMap();
function ji(e, t) {
	let n = Ai.get(e);
	return n ? (Ai.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Mi = class {
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
			if (n) vr(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (vr(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (pr(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						br(r, t), t.append(Pn()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else pr(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), gr(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (pr(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = k, r = Rn();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Pn();
			i.append(a), this.#n.set(e, {
				effect: lr(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, lr(() => t(this.anchor)));
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
	w && (r = T, Ve());
	var i = new Mi(e), a = n ? S : 0;
	function o(e, t) {
		if (w) {
			var n = We(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Ue();
				Be(a), i.anchor = a, ze(!1), i.ensure(e, t), ze(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	sr(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/key.js
var Ni = Symbol("NaN");
function Pi(e, t, n) {
	w && Ve();
	var r = new Mi(e), i = !ot();
	sr(() => {
		var e = t();
		e !== e && (e = Ni), i && typeof e == "object" && e && (e = {}), r.ensure(e, n);
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Fi(e, t) {
	return t;
}
function Ii(e, t, n) {
	for (var i = [], a = t.length, o, s = t.length, c = 0; c < a; c++) {
		let n = t[c];
		gr(n, () => {
			if (o) {
				if (o.pending.delete(n), o.done.add(n), o.pending.size === 0) {
					var t = e.outrogroups;
					Li(e, r(o.done)), t.delete(o), t.size === 0 && (e.outrogroups = null);
				}
			} else --s;
		}, !1);
	}
	if (s === 0) {
		var l = i.length === 0 && n !== null;
		if (l) {
			var u = n, d = u.parentNode;
			Ln(d), d.append(u), e.items.clear();
		}
		Li(e, t, !l);
	} else o = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(o);
}
function Li(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ie, br(a, document.createDocumentFragment())) : pr(t[i], n);
	}
}
var Ri;
function zi(t, n, i, a, o, s = null) {
	var c = t, l = /* @__PURE__ */ new Map();
	if (n & 4) {
		var u = t;
		c = w ? Be(/* @__PURE__ */ Fn(u)) : u.appendChild(Pn());
	}
	w && Ve();
	var d = null, f = /* @__PURE__ */ dn(() => {
		var t = i();
		return e(t) ? t : t == null ? [] : r(t);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Vi(v, p, c, n, a), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ie, Ui(d, null, c)) : vr(d) : gr(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: sr(() => {
			p = L(f);
			var e = p.length;
			let t = !1;
			w && We(c) === "[!" != (e === 0) && (c = Ue(), Be(c), ze(!1), t = !0);
			for (var r = /* @__PURE__ */ new Set(), u = k, v = Rn(), y = 0; y < e; y += 1) {
				w && T.nodeType === 8 && T.data === "]" && (c = T, t = !0, ze(!1));
				var b = p[y], x = a(b, y), ee = h ? null : l.get(x);
				ee ? (ee.v && Sn(ee.v, b), ee.i && Sn(ee.i, y), v && u.unskip_effect(ee.e)) : (ee = Hi(l, h ? c : Ri ??= Pn(), b, x, y, o, n, i), h || (ee.e.f |= ie), l.set(x, ee)), r.add(x);
			}
			if (e === 0 && s && !d && (h ? d = lr(() => s(c)) : (d = lr(() => s(Ri ??= Pn())), d.f |= ie)), e > r.size && be("", "", ""), w && e > 0 && Be(Ue()), !h) if (m.set(u, r), v) {
				for (let [e, t] of l) r.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			t && ze(!0), L(f);
		}),
		flags: n,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, w && (c = T);
}
function Bi(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Vi(e, t, n, i, a) {
	var o = (i & 8) != 0, s = t.length, c = e.items, l = Bi(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (o) for (v = 0; v < s; v += 1) h = t[v], g = a(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = a(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (vr(_), o && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= ie, _ === l) Ui(_, null, n);
		else {
			var y = d ? d.next : l;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Wi(e, d, _), Wi(e, _, y), Ui(_, y, n), d = _, p = [], m = [], l = Bi(d.next);
			continue;
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var ee = p[0], te = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Ui(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Wi(e, ee.prev, te.next), Wi(e, d, ee), Wi(e, te, b), l = b, d = te, --v, p = [], m = [];
				} else u.delete(_), Ui(_, l, n), Wi(e, _.prev, _.next), Wi(e, _, d === null ? e.effect.first : d.next), Wi(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = Bi(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = Bi(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Li(e, r(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var S = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || S.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && S.push(l), l = Bi(l.next);
		var ne = S.length;
		if (ne > 0) {
			var re = i & 4 && s === 0 ? n : null;
			if (o) {
				for (v = 0; v < ne; v += 1) S[v].nodes?.a?.measure();
				for (v = 0; v < ne; v += 1) S[v].nodes?.a?.fix();
			}
			Ii(e, S, re);
		}
	}
	o && dt(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Hi(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? bn(n) : /* @__PURE__ */ xn(n, !1, !1) : null, l = o & 2 ? bn(i) : null;
	return {
		v: c,
		i: l,
		e: lr(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Ui(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ In(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Wi(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function U(e, t, ...n) {
	var r = new Mi(e);
	sr(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, S);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
function Gi(e, t, n) {
	var r;
	w && (r = T, Ve());
	var i = new Mi(e);
	sr(() => {
		var e = t() ?? null;
		if (w && We(r) === "[" != (e !== null)) {
			var a = Ue();
			Be(a), i.anchor = a, ze(!1), i.ensure(e, e && ((t) => n(t, e))), ze(!0);
			return;
		}
		i.ensure(e, e && ((t) => n(t, e)));
	}, S);
}
//#endregion
//#region node_modules/svelte/src/internal/client/timing.js
var Ki = () => performance.now(), qi = {
	tick: (e) => requestAnimationFrame(e),
	now: () => Ki(),
	tasks: /* @__PURE__ */ new Set()
};
//#endregion
//#region node_modules/svelte/src/internal/client/loop.js
function Ji() {
	let e = qi.now();
	qi.tasks.forEach((t) => {
		t.c(e) || (qi.tasks.delete(t), t.f());
	}), qi.tasks.size !== 0 && qi.tick(Ji);
}
function Yi(e) {
	let t;
	return qi.tasks.size === 0 && qi.tick(Ji), {
		promise: new Promise((n) => {
			qi.tasks.add(t = {
				c: e,
				f: n
			});
		}),
		abort() {
			qi.tasks.delete(t);
		}
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/transitions.js
function Xi(e, t) {
	Gn(() => {
		e.dispatchEvent(new CustomEvent(t));
	});
}
function Zi(e) {
	if (e === "float") return "cssFloat";
	if (e === "offset") return "cssOffset";
	if (e.startsWith("--")) return e;
	let t = e.split("-");
	return t.length === 1 ? t[0] : t[0] + t.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
function Qi(e) {
	let t = {}, n = e.split(";");
	for (let e of n) {
		let [n, r] = e.split(":");
		if (!n || r === void 0) break;
		let i = Zi(n.trim());
		t[i] = r.trim();
	}
	return t;
}
var $i = (e) => e, ea = null;
function ta(e, t, n) {
	var r = (ea ?? I).nodes, i, a, o, s = null;
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
				o = ra(this.element, e, void 0, 1, () => {}, () => {
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
function na(e, t, n, r) {
	var i = (e & 1) != 0, a = (e & 2) != 0, o = i && a, s = (e & 4) != 0, c = o ? "both" : i ? "in" : "out", l, u = t.inert, d = t.style.overflow, f, p;
	function m() {
		return Gn(() => l ??= n()(t, r?.() ?? {}, { direction: c }));
	}
	var h = {
		is_global: s,
		in() {
			if (t.inert = u, !i) {
				p?.abort(), p?.reset?.();
				return;
			}
			a || f?.abort(), f = ra(t, m(), p, 1, () => {
				Xi(t, "introstart");
			}, () => {
				Xi(t, "introend"), f?.abort(), f = l = void 0, t.style.overflow = d;
			});
		},
		out(e) {
			if (!a) {
				e?.(), l = void 0;
				return;
			}
			t.inert = !0, p = ra(t, m(), f, 0, () => {
				Xi(t, "outrostart");
			}, () => {
				Xi(t, "outroend"), e?.();
			});
		},
		stop: () => {
			f?.abort(), p?.abort();
		}
	}, g = I;
	if ((g.nodes.t ??= []).push(h), i && Ti) {
		var _ = s;
		if (!_) {
			for (var v = g.parent; v && v.f & 65536;) for (; (v = v.parent) && !(v.f & 16););
			_ = !v || (v.f & 32768) != 0;
		}
		_ && rr(() => {
			R(() => h.in());
		});
	}
}
function ra(e, t, n, r, i, a) {
	var o = r === 1;
	if (d(t)) {
		var s, c = !1;
		return dt(() => {
			c || (s = ra(e, t({ direction: o ? "in" : "out" }), n, r, i, a));
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
		abort: f,
		deactivate: f,
		reset: f,
		t: () => r
	};
	let { delay: l = 0, css: u, tick: p, easing: m = $i } = t;
	var h = [];
	if (o && n === void 0 && (p && p(0, 1), u)) {
		var g = Qi(u(0, 1));
		h.push(g, g);
	}
	var _ = () => 1 - r, v = e.animate(h, {
		duration: l,
		fill: "forwards"
	});
	return v.onfinish = () => {
		v.cancel(), i();
		var o = n?.t() ?? 1 - r;
		n?.abort();
		var s = r - o, c = t.duration * Math.abs(s), l = [];
		if (c > 0) {
			var d = !1;
			if (u) for (var f = Math.ceil(c / (1e3 / 60)), h = 0; h <= f; h += 1) {
				var g = o + s * m(h / f), y = Qi(u(g, 1 - g));
				l.push(y), d ||= y.overflow === "hidden";
			}
			d && (e.style.overflow = "hidden"), _ = () => {
				var e = v.currentTime;
				return o + s * m(e / c);
			}, p && Yi(() => {
				if (v.playState !== "running") return !1;
				var e = _();
				return p(e, 1 - e), !0;
			});
		}
		v = e.animate(l, {
			duration: c,
			fill: "forwards"
		}), v.onfinish = () => {
			_ = () => r, p?.(r, 1 - r), a();
		};
	}, {
		abort: () => {
			v && (v.cancel(), v.effect = null, v.onfinish = f);
		},
		deactivate: () => {
			a = f;
		},
		reset: () => {
			r === 0 && p?.(1, 0);
		},
		t: () => _()
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attachments.js
function ia(e, t) {
	var n = void 0, r;
	cr(() => {
		n !== (n = t()) && (r &&= (pr(r), null), n && (r = lr(() => {
			rr(() => n(e));
		})));
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function aa(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = aa(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function oa() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = aa(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function sa(e) {
	return typeof e == "object" ? oa(e) : e ?? "";
}
var ca = [..." 	\n\r\f\xA0\v﻿"];
function la(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || ca.includes(r[o - 1])) && (s === r.length || ca.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function ua(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function da(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function fa(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(da)), i && c.push(...Object.keys(i).map(da));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = da(e.substring(l, u).trim());
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
		return r && (n += ua(r)), i && (n += ua(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function pa(e, t, n, r, i, a) {
	var o = e[C];
	if (w || o !== n || o === void 0) {
		var s = la(n, r, a);
		(!w || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[C] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function ma(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function ha(e, t, n, r) {
	var i = e[pe];
	if (w || i !== t) {
		var a = fa(t, r);
		(!w || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[pe] = t;
	} else r && (Array.isArray(r) ? (ma(e, n?.[0], r[0]), ma(e, n?.[1], r[1], "important")) : ma(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function ga(t, n, r = !1) {
	if (t.multiple) {
		if (n == null) return;
		if (!e(n)) return Le();
		for (var i of t.options) i.selected = n.includes(va(i));
		return;
	}
	for (i of t.options) if (On(va(i), n)) {
		i.selected = !0;
		return;
	}
	(!r || n !== void 0) && (t.selectedIndex = -1);
}
function _a(e) {
	var t = new MutationObserver(() => {
		ga(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), Zn(() => {
		t.disconnect();
	});
}
function va(e) {
	return "__value" in e ? e.__value : e.value;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var ya = Symbol("class"), ba = Symbol("style"), xa = Symbol("is custom element"), Sa = Symbol("is html"), Ca = _e ? "link" : "LINK", wa = _e ? "input" : "INPUT", Ta = _e ? "option" : "OPTION", Ea = _e ? "select" : "SELECT";
function Da(e) {
	if (w) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					ka(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					ka(e, "checked", null), e.checked = r;
				}
			}
		};
		e[he] = n, dt(n), Wn();
	}
}
function Oa(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ka(e, t, n, r) {
	var i = ja(e);
	w && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ca) || i[t] !== (i[t] = n) && (t === "loading" && (e[de] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Na(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Aa(e, t, n, r, i = !1, a = !1) {
	if (w && i && e.nodeName === wa) {
		var o = e;
		(o.type === "checkbox" ? "defaultChecked" : "defaultValue") in n || Da(o);
	}
	var s = ja(e), c = s[xa], l = !s[Sa];
	let u = w && c;
	u && ze(!1);
	var d = t || {}, f = e.nodeName === Ta;
	for (var p in t) p in n || (n[p] = null);
	n.class ? n.class = sa(n.class) : (r || n[ya]) && (n.class = null), n[ba] && (n.style ??= null);
	var m = Na(e);
	for (let i in n) {
		let o = n[i];
		if (f && i === "value" && o == null) {
			e.value = e.__value = "", d[i] = o;
			continue;
		}
		if (i === "class") {
			pa(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", o, r, t?.[ya], n[ya]), d[i] = o, d[ya] = n[ya];
			continue;
		}
		if (i === "style") {
			ha(e, o, t?.[ba], n[ba]), d[i] = o, d[ba] = n[ba];
			continue;
		}
		var h = d[i];
		if (!(o === h && !(o === void 0 && e.hasAttribute(i)))) {
			d[i] = o;
			var g = i[0] + i[1];
			if (g !== "$$") if (g === "on") {
				let t = {}, n = "$$" + i, r = i.slice(2);
				var _ = ei(r);
				if (Qr(r) && (r = r.slice(0, -7), t.capture = !0), !_ && h) {
					if (o != null) continue;
					e.removeEventListener(r, d[n], t), d[n] = null;
				}
				if (_) pi(r, e, o), mi([r]);
				else if (o != null) {
					function a(e) {
						d[i].call(this, e);
					}
					d[n] = ui(r, e, a, t);
				}
			} else if (i === "style") ka(e, i, o);
			else if (i === "autofocus") Vn(e, !!o);
			else if (!c && (i === "__value" || i === "value" && o != null)) e.value = e.__value = o;
			else if (i === "selected" && f) Oa(e, o);
			else {
				var v = i;
				l || (v = ri(v));
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
				else y || m.includes(v) && (c || typeof o != "string") ? (e[v] = o, v in s && (s[v] = Me)) : typeof o != "function" && ka(e, v, o, a);
			}
		}
	}
	return u && ze(!0), d;
}
function W(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	rn(i, n, r, (n) => {
		var r = void 0, i = {}, c = e.nodeName === Ea, l = !1;
		if (cr(() => {
			var u = t(...n.map(L)), d = Aa(e, r, u, a, o, s);
			l && c && "value" in u && ga(e, u.value);
			for (let e of Object.getOwnPropertySymbols(i)) u[e] || pr(i[e]);
			for (let t of Object.getOwnPropertySymbols(u)) {
				var f = u[t];
				t.description === "@attach" && (!r || f !== r[t]) && (i[t] && pr(i[t]), i[t] = lr(() => ia(e, () => f))), d[t] = f;
			}
			r = d;
		}), c) {
			var u = e;
			rr(() => {
				ga(u, r.value, !0), _a(u);
			});
		}
		l = !0;
	});
}
function ja(e) {
	return e[fe] ??= {
		[xa]: e.nodeName.includes("-"),
		[Sa]: e.namespaceURI === Ne
	};
}
var Ma = /* @__PURE__ */ new Map();
function Na(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Ma.get(t);
	if (n) return n;
	Ma.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var s in r = o(i), r) r[s].set && s !== "innerHTML" && s !== "textContent" && s !== "innerText" && n.push(s);
		i = l(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function Pa(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	Kn(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = Fa(e) ? Ia(a) : a, n(a), k !== null && r.add(k), await Kr(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (w && e.defaultValue !== e.value || R(t) == null && e.value) && (n(Fa(e) ? Ia(e.value) : e.value), k !== null && r.add(k)), ar(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = Je ? Pt : k;
			if (r.has(i)) return;
		}
		Fa(e) && n === Ia(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function Fa(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function Ia(e) {
	return e === "" ? null : +e;
}
function La(e, t, n = t) {
	Kn(e, "change", () => {
		n(e.files);
	}), w && e.files && n(e.files), ar(() => {
		e.files = t();
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Ra(e, t) {
	return e === t || e?.[le] === t;
}
function za(e = {}, t, n, r) {
	var i = et.r, a = I;
	return rr(() => {
		var o, s;
		return ar(() => {
			o = s, s = r?.() || [], R(() => {
				Ra(n(...s), e) || (t(e, ...s), o && Ra(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Ra(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Ba(e = !1) {
	let t = et, n = t.l.u;
	if (!n) return;
	let r = () => Yr(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ cn(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => L(i);
	}
	n.b.length && er(() => {
		Va(t, r), m(n.b);
	}), Qn(() => {
		let e = R(() => n.m.map(p));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Qn(() => {
		Va(t, r), m(n.a);
	});
}
function Va(e, t) {
	if (e.l.s) for (let t of e.l.s) L(t);
	t();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
var Ha = {
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
	}, Ha);
}
var Ua = {
	get(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (d(r) && (r = r()), typeof r == "object" && r && t in r) return r[t];
		}
	},
	set(e, t, n) {
		let r = e.props.length;
		for (; r--;) {
			let i = e.props[r];
			d(i) && (i = i());
			let o = a(i, t);
			if (o && o.set) return o.set(n), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (d(r) && (r = r()), typeof r == "object" && r && t in r) {
				let e = a(r, t);
				return e && !e.configurable && (e.configurable = !0), e;
			}
		}
	},
	has(e, t) {
		if (t === le || t === ue) return !1;
		for (let n of e.props) if (d(n) && (n = n()), n != null && t in n) return !0;
		return !1;
	},
	ownKeys(e) {
		let t = [];
		for (let n of e.props) if (d(n) && (n = n()), n) {
			for (let e in n) t.includes(e) || t.push(e);
			for (let e of Object.getOwnPropertySymbols(n)) t.includes(e) || t.push(e);
		}
		return t;
	}
};
function Wa(...e) {
	return new Proxy({ props: e }, Ua);
}
function K(e, t, n, r) {
	var i = !Ye || (n & 2) != 0, o = (n & 8) != 0, s = (n & 16) != 0, c = r, l = !0, u = void 0, d = () => s && i ? (u ??= /* @__PURE__ */ cn(r), L(u)) : (l && (l = !1, c = s ? R(r) : r), c);
	let f;
	if (o) {
		var p = le in e || ue in e;
		f = a(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	o ? [m, h] = jt(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && Te(t), f(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? d() : (l = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (c = void 0), n === void 0 ? c : n;
	};
	if (i && !(n & 4)) return g;
	if (f) {
		var _ = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && f(t ? g() : e), e) : g();
		});
	}
	var v = !1, y = (n & 1 ? cn : dn)(() => (v = !1, g()));
	o && L(y);
	var b = I;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? L(y) : i && o ? En(e) : e;
			return M(y, n), v = !0, c !== void 0 && (c = n), e;
		}
		return Cr && v || b.f & 16384 ? y.v : L(y);
	});
}
function Ga(e) {
	et === null && ve("onMount"), Ye && et.l !== null ? Ka(et).m.push(e) : Qn(() => {
		let t = R(e);
		if (typeof t == "function") return t;
	});
}
function Ka(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region src/shared/utils/overrides.ts
var qa = (e) => {
	window.CHANNEL.js = e;
	let t = document.querySelector("#cs-jstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channeljs) return;
	let n = document.createElement("script");
	n.id = "chanjs", n.type = "text/javascript", n.textContent = e, document.body.append(n);
}, Ja = (e) => {
	window.CHANNEL.css = e;
	let t = document.querySelector("#cs-csstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channelcss) return;
	let n = document.createElement("style");
	n.id = "chancss", n.textContent = e, document.head.append(n);
}, Ya = (e) => {
	let t = document.querySelector("#chanjs");
	if (!t) {
		qa(e);
		return;
	}
	t.textContent !== e && (t.remove(), qa(e));
}, Xa = (e) => {
	let t = document.querySelector("#chancss");
	if (!t) {
		Ja(e);
		return;
	}
	t.textContent !== e && (t.remove(), Ja(e));
}, Za = () => {
	window.Callbacks.channelCSSJS = ({ css: e, js: t }) => {
		e && Xa(e), t && Ya(t);
	};
}, Qa = () => {
	window.scrollQueue = () => {};
}, $a = () => {
	let e = new URL("dist/favicon.ico", window.BASE_URL), t = document.createElement("link");
	t.href = e.toString(), t.type = "image/x-icon", t.rel = "shortcut icon", document.head.append(t);
}, eo = () => {
	Za(), Qa(), $a();
}, to = async () => new Promise((e) => {
	ro.once("connect", e), ro.connect();
}), no = async () => new Promise((e, t) => {
	ro.once("disconnect", (n) => {
		if (n === "io client disconnect") {
			e();
			return;
		}
		t(n);
	}), ro.disconnect();
}), ro = window.socket, io = async () => new Promise((e, t) => {
	ro.once("playlist", e), ro.once("errorMsg", t), ro.emit("requestPlaylist");
}), ao = (e) => ro.on("queue", e), oo = (e) => ro.on("delete", e), so = {
	ADMIN: 3,
	ANON: -1,
	GUEST: 0,
	MODERATOR: 2,
	SITERADMIN: 255,
	USER: 1
}, co = { userlist: [] }, lo = (e) => {
	let { subscribe: t, set: n, update: r } = St({
		...co,
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
}, uo = (e) => ro.on("addUser", e), fo = (e) => ro.on("userLeave", e), po = () => Array.from(document.body.querySelectorAll("#userlist .userlist_item")).map((e) => $(e)).map((e) => ({
	meta: {
		afk: e.data("afk") || !1,
		muted: e.data("meta") && e.data("meta").muted || !1
	},
	name: e.data("name") || "",
	profile: e.data("profile") || {
		image: "",
		text: ""
	},
	rank: e.data("rank") || so.ANON
})), mo = lo(), ho = { version: "" }, go = ((e) => {
	let { subscribe: t, set: n, update: r } = St({
		...ho,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetVersion: () => r((e) => ({
			...e,
			version: ho.version
		})),
		updateVersion: (e) => r((t) => ({
			...t,
			version: e
		}))
	};
})(), _o = {
	leader: !1,
	logged_in: !1,
	name: "",
	profile: {
		image: "",
		text: ""
	},
	rank: -1
}, vo = ((e) => {
	let { subscribe: t, set: n, update: r } = St({
		..._o,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetLoggedIn: () => r((e) => ({
			...e,
			logged_in: _o.logged_in
		})),
		resetName: () => r((e) => ({
			...e,
			name: _o.name
		})),
		resetRank: () => r((e) => ({
			...e,
			rank: _o.rank
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
})(), yo = { csrf: "" }, bo = ((e) => {
	let { subscribe: t, set: n, update: r } = St({
		...yo,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetCSRF: () => r((e) => ({
			...e,
			csrf: yo.csrf
		})),
		updateCSRF: (e) => r((t) => ({
			...t,
			csrf: e
		}))
	};
})(), xo = {
	currentIndex: -1,
	playlist: []
}, So = ((e) => {
	let { subscribe: t, set: n, update: r } = St({
		...xo,
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
		resetPlaylist: () => n(xo),
		setCurrent: (e) => r((t) => ({
			...t,
			currentIndex: e
		})),
		setPlaylist: (e) => r((t) => ({
			...t,
			playlist: e
		}))
	};
})(), Co = { connected: !0 }, wo = ((e) => {
	let { subscribe: t, set: n, update: r } = St({
		...Co,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetConnected: () => r((e) => ({
			...e,
			connected: Co.connected
		})),
		updateConnected: (e) => r((t) => ({
			...t,
			connected: e
		}))
	};
})(), To = () => (vo.init({ ...window.CLIENT }), vo.subscribe((e) => {
	window.CLIENT = e;
})), Eo = () => {
	let e = document.querySelector("input[name=\"_csrf\"]");
	if (!e) throw Error("CSRF element not found");
	let t = e.value;
	if (!t) throw Error("CSRF token not found");
	bo.init({ csrf: t });
}, Do = () => (go.init({ version: window.VERSION }), go.subscribe((e) => {
	window.VERSION = e.version;
})), Oo = () => {
	wo.init(ro), ro.on("connect", () => wo.updateConnected(ro.connected)), ro.on("disconnect", () => wo.updateConnected(ro.connected));
}, ko = () => {
	let e = po();
	mo.init({ userlist: e }), uo(mo.addUser), fo(({ name: e }) => mo.removeUser(e));
}, Ao = async () => {
	try {
		let e = await io(), t = window.PL_CURRENT;
		return So.init({
			currentIndex: t,
			playlist: e
		}), ao(({ after: e, item: t }) => So.addPlaylistItem(t, e)), oo(({ uid: e }) => So.removePlaylistItem(e)), So.subscribe((e) => {
			window.PL_CURRENT = e.currentIndex;
		});
	} catch (e) {
		let t = `Failed to get initial playlist: ${e}. Retrying in 60 seconds.`;
		return console.warn(t), alert(t), await new Promise((e) => setTimeout(e, 6e4)), await Ao();
	}
}, jo = async () => {
	let e = To(), t = Do();
	Eo(), Oo(), ko();
	let n = await Ao();
	return () => {
		e(), t(), n();
	};
};
//#endregion
//#region node_modules/svelte/src/internal/flags/legacy.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5"), Xe();
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/is.js
function Mo(e) {
	return typeof e == "function";
}
function No(e) {
	return typeof e == "object" && !!e;
}
var Po = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function Fo(e) {
	return e == null || Po.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => Fo(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/box/box-extras.svelte.js
var Io = Symbol("box"), Lo = Symbol("is-writable");
function q(e, t) {
	let n = /* @__PURE__ */ A(e);
	return t ? {
		[Io]: !0,
		[Lo]: !0,
		get current() {
			return L(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[Io]: !0,
		get current() {
			return e();
		}
	};
}
function Ro(e) {
	return No(e) && Io in e;
}
function zo(e) {
	return Ro(e) ? e : Mo(e) ? q(e) : Bo(e);
}
function Bo(e) {
	let t = /* @__PURE__ */ j(En(e));
	return {
		[Io]: !0,
		[Lo]: !0,
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
function Vo(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
//#endregion
//#region node_modules/inline-style-parser/esm/index.mjs
var Ho = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Uo = /\n/g, Wo = /^\s*/, Go = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Ko = /^:\s*/, qo = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Jo = /^[;\s]*/, Yo = /^\s+|\s+$/g, Xo = "\n", Zo = "/", Qo = "*", $o = "", es = "comment", ts = "declaration";
function ns(e, t) {
	if (typeof e != "string") throw TypeError("First argument must be a string");
	if (!e) return [];
	t ||= {};
	var n = 1, r = 1;
	function i(e) {
		var t = e.match(Uo);
		t && (n += t.length);
		var i = e.lastIndexOf(Xo);
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
		c(Wo);
	}
	function u(e) {
		var t;
		for (e ||= []; t = d();) t !== !1 && e.push(t);
		return e;
	}
	function d() {
		var t = a();
		if (!(Zo != e.charAt(0) || Qo != e.charAt(1))) {
			for (var n = 2; $o != e.charAt(n) && (Qo != e.charAt(n) || Zo != e.charAt(n + 1));) ++n;
			if (n += 2, $o === e.charAt(n - 1)) return s("End of comment missing");
			var o = e.slice(2, n - 2);
			return r += 2, i(o), e = e.slice(n), r += 2, t({
				type: es,
				comment: o
			});
		}
	}
	function f() {
		var e = a(), t = c(Go);
		if (t) {
			if (d(), !c(Ko)) return s("property missing ':'");
			var n = c(qo), r = e({
				type: ts,
				property: rs(t[0].replace(Ho, $o)),
				value: n ? rs(n[0].replace(Ho, $o)) : $o
			});
			return c(Jo), r;
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
function rs(e) {
	return e ? e.replace(Yo, $o) : $o;
}
//#endregion
//#region node_modules/style-to-object/esm/index.mjs
function is(e, t) {
	let n = null;
	if (!e || typeof e != "string") return n;
	let r = ns(e), i = typeof t == "function";
	return r.forEach((e) => {
		if (e.type !== "declaration") return;
		let { property: r, value: a } = e;
		i ? t(r, a, e) : a && (n ||= {}, n[r] = a);
	}), n;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/strings.js
var as = /\d/, os = [
	"-",
	"_",
	"/",
	"."
];
function ss(e = "") {
	if (!as.test(e)) return e !== e.toLowerCase();
}
function cs(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = os.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = ss(a);
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
function ls(e) {
	return e ? cs(e).map((e) => ds(e)).join("") : "";
}
function us(e) {
	return fs(ls(e || ""));
}
function ds(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function fs(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function ps(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[ls(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[us(e)] = n;
	}
	return is(e, n), t;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
function ms(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function hs(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var gs = hs(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function _s(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${gs(t)}: ${e[t]};`).join("\n");
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/style.js
function vs(e = {}) {
	return _s(e).replace("\n", " ");
}
var ys = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/merge-props.js
function bs(e) {
	return ys.has(e);
}
function xs(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
				if (a && typeof o && bs(e)) t[e] = Vo(n, i);
				else if (a && o) t[e] = ms(n, i);
				else if (e === "class") {
					let r = Fo(n), a = Fo(i);
					r && a ? t[e] = oa(n, i) : r ? t[e] = oa(n) : a && (t[e] = oa(i));
				} else if (e === "style") {
					let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
					if (r && a) t[e] = {
						...n,
						...i
					};
					else if (r && s) {
						let r = ps(i);
						t[e] = {
							...n,
							...r
						};
					} else if (o && a) t[e] = {
						...ps(n),
						...i
					};
					else if (o && s) {
						let r = ps(n), a = ps(i);
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
	return typeof t.style == "object" && (t.style = vs(t.style).replaceAll("\n", " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t;
}
//#endregion
//#region node_modules/runed/dist/internal/configurable-globals.js
var Ss = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/runed/dist/internal/utils/dom.js
function Cs(e) {
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
var ws = class extends Map {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ j(0);
	#n = /* @__PURE__ */ j(0);
	#r = Lr || -1;
	constructor(e) {
		if (super(), e) {
			for (var [t, n] of e) super.set(t, n);
			this.#n.v = super.size;
		}
	}
	#i(e) {
		return Lr === this.#r ? /* @__PURE__ */ j(e) : bn(e);
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
		if (r === void 0) r = this.#i(0), n.set(e, r), M(this.#n, super.size), wn(o);
		else if (i !== t) {
			wn(r);
			var s = o.reactions === null ? null : new Set(o.reactions);
			(s === null || !r.reactions?.every((e) => s.has(e))) && wn(o);
		}
		return a;
	}
	delete(e) {
		var t = this.#e, n = t.get(e), r = super.delete(e);
		return n !== void 0 && (t.delete(e), M(n, -1)), r && (M(this.#n, super.size), wn(this.#t)), r;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#e;
			M(this.#n, 0);
			for (var t of e.values()) M(t, -1);
			wn(this.#t), e.clear();
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
}, Ts = class {
	#e;
	#t;
	constructor(e, t) {
		this.#e = e, this.#t = $t(t);
	}
	get current() {
		return this.#t(), this.#e();
	}
}, Es = /\(.+\)/, Ds = new Set([
	"all",
	"print",
	"screen",
	"and",
	"or",
	"not",
	"only"
]), Os = class extends Ts {
	constructor(e, t) {
		let n = Es.test(e) || e.split(/[\s,]+/).some((e) => Ds.has(e.trim())) ? e : `(${e})`, r = window.matchMedia(n);
		super(() => r.matches, (e) => di(r, "change", e));
	}
};
new class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: t = Ss, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = $t((e) => {
			let n = di(t, "focusin", e), r = di(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? Cs(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/runed/dist/internal/utils/is.js
function ks(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/runed/dist/utilities/context/context.js
var As = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return it(this.#t);
	}
	get() {
		let e = nt(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = nt(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return rt(this.#t, e);
	}
};
//#endregion
//#region node_modules/runed/dist/utilities/watch/watch.svelte.js
function js(e, t) {
	switch (e) {
		case "post":
			Qn(t);
			break;
		case "pre":
			er(t);
			break;
	}
}
function Ms(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	js(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = R(() => n(t, o));
		return o = t, r;
	});
}
function Ns(e, t, n) {
	let r = tr(() => {
		let i = !1;
		Ms(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Qn(() => r);
}
function Ps(e, t, n) {
	Ms(e, "post", t, n);
}
function Fs(e, t, n) {
	Ms(e, "pre", t, n);
}
Ps.pre = Fs;
function Is(e, t) {
	Ns(e, "post", t);
}
function Ls(e, t) {
	Ns(e, "pre", t);
}
Is.pre = Ls;
//#endregion
//#region node_modules/runed/dist/internal/utils/get.js
function Rs(e) {
	return ks(e) ? e() : e;
}
//#endregion
//#region node_modules/runed/dist/utilities/element-size/element-size.svelte.js
var zs = class {
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
		let e = Rs(this.#r);
		if (e) return $t((t) => {
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
		this.#i = t.window ?? Ss, this.#n = t, this.#r = e, this.#e = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		let e = Rs(this.#r);
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
function Bs(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function Vs(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function Hs(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ j(En(o)), u = /* @__PURE__ */ j(!1), d = /* @__PURE__ */ j(void 0), f = /* @__PURE__ */ j(En([])), p = () => {
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
	}, g = s ? Bs(h, s) : c ? Vs(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
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
function Us(e, t, n) {
	return Hs(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		Ps(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function Ws(e, t, n) {
	return Hs(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		Ps.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
Us.pre = Ws;
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/on-destroy-effect.svelte.js
function Gs(e) {
	Qn(() => () => {
		e();
	});
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/on-mount-effect.svelte.js
function Ks(e) {
	Qn(() => R(() => e()));
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-sleep.js
function qs(e, t) {
	return setTimeout(t, e);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-tick.js
function Js(e) {
	Kr().then(e);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/dom.js
var Ys = 1, Xs = 9, Zs = 11;
function Qs(e) {
	return No(e) && e.nodeType === Ys && typeof e.nodeName == "string";
}
function $s(e) {
	return No(e) && e.nodeType === Xs;
}
function ec(e) {
	return No(e) && e.constructor?.name === "VisualViewport";
}
function tc(e) {
	return No(e) && e.nodeType !== void 0;
}
function nc(e) {
	return tc(e) && e.nodeType === Zs && "host" in e;
}
function rc(e, t) {
	if (!e || !t || !Qs(e) || !Qs(t)) return !1;
	let n = t.getRootNode?.();
	if (e === t || e.contains(t)) return !0;
	if (n && nc(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function ic(e) {
	return $s(e) ? e : ec(e) ? e.document : e?.ownerDocument ?? document;
}
function ac(e) {
	return nc(e) ? ac(e.host) : $s(e) ? e.defaultView ?? window : Qs(e) ? e.ownerDocument?.defaultView ?? window : window;
}
function oc(e) {
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
var sc = class {
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
	getDocument = () => ic(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => oc(this.root);
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
function cc(e, t) {
	return { [Zr()]: (n) => Ro(e) ? (e.current = n, R(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), R(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
//#endregion
//#region node_modules/bits-ui/dist/internal/attrs.js
function lc(e) {
	return e ? "true" : "false";
}
function uc(e) {
	return e ? "true" : void 0;
}
function dc(e) {
	return e ? "open" : "closed";
}
function fc(e) {
	return e === "starting" ? { "data-starting-style": "" } : e === "ending" ? { "data-ending-style": "" } : {};
}
var pc = class {
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
function mc(e) {
	let t = new pc(e);
	return {
		...t.attrs,
		selector: t.selector,
		getAttr: t.getAttr
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/is.js
var hc = typeof document < "u", gc = _c();
function _c() {
	return hc && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function vc(e) {
	return e instanceof HTMLElement;
}
function yc(e) {
	return e instanceof Element;
}
function bc(e) {
	return e instanceof Element || e instanceof SVGElement;
}
function xc(e) {
	return e.pointerType === "touch";
}
function Sc(e) {
	return e.matches(":focus-visible");
}
function Cc(e) {
	return e !== null;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/animations-complete.js
var wc = class {
	#e;
	#t = null;
	#n = null;
	#r = 0;
	constructor(e) {
		this.#e = e, Gs(() => this.#i());
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
		this.#e.afterTick ? Js(t) : t();
	}
}, Tc = class {
	#e;
	#t;
	#n;
	#r = /* @__PURE__ */ j(!1);
	#i = /* @__PURE__ */ j(void 0);
	#a = !1;
	#o = null;
	constructor(e) {
		this.#e = e, M(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new wc({
			ref: this.#e.ref,
			afterTick: this.#e.open
		}), Gs(() => this.#s()), Ps(() => this.#e.open.current, (e) => {
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
function Ec() {}
//#endregion
//#region node_modules/bits-ui/dist/internal/create-id.js
function Dc(e, t) {
	return t === void 0 ? `bits-${e}` : `bits-${e}-${t}`;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal-consumer.svelte
function Oc(e, t) {
	var n = B();
	Pi(P(n), () => t.children, (e) => {
		var n = B();
		U(P(n), () => t.children ?? f), V(e, n);
	}), V(e, n);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/bits-config.js
var kc = new As("BitsConfig");
function Ac() {
	let e = new jc(null, {});
	return kc.getOr(e).opts;
}
var jc = class {
	opts;
	constructor(e, t) {
		let n = Mc(e, t);
		this.opts = {
			defaultPortalTo: n((e) => e.defaultPortalTo),
			defaultLocale: n((e) => e.defaultLocale)
		};
	}
};
function Mc(e, t) {
	return (n) => q(() => {
		let r = n(t)?.current;
		if (r !== void 0) return r;
		if (e !== null) return n(e.opts)?.current;
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/prop-resolvers.js
function Nc(e, t) {
	return (n) => {
		let r = Ac();
		return q(() => {
			let i = n();
			if (i !== void 0) return i;
			let a = e(r).current;
			return a === void 0 ? t : a;
		});
	};
}
var Pc = Nc((e) => e.defaultPortalTo, "body");
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal.svelte
function Fc(e, t) {
	D(t, !0);
	let n = Pc(() => t.to), r = at(), i = /* @__PURE__ */ A(a);
	function a() {
		if (!hc || t.disabled) return null;
		let e = null;
		return e = typeof n.current == "string" ? document.querySelector(n.current) : n.current, e;
	}
	let o;
	function s() {
		o &&= (ji(o), null);
	}
	Ps([() => L(i), () => t.disabled], ([e, n]) => {
		if (!e || n) {
			s();
			return;
		}
		return o = Di(Oc, {
			target: e,
			props: { children: t.children },
			context: r
		}), () => {
			s();
		};
	});
	var c = B(), l = P(c), u = (e) => {
		var n = B();
		U(P(n), () => t.children ?? f), V(e, n);
	};
	H(l, (e) => {
		t.disabled && e(u);
	}), V(e, c), O();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/events.js
var Ic = class {
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
		return di(e, this.eventName, (e) => {
			t(e);
		}, n);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/debounce.js
function Lc(e, t = 500) {
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
function Rc(e, t) {
	return e === t || e.contains(t);
}
function zc(e) {
	return e?.ownerDocument ?? document;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/dom.js
function Bc(e, t) {
	let { clientX: n, clientY: r } = e, i = t.getBoundingClientRect();
	return n < i.left || n > i.right || r < i.top || r > i.bottom;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/focus.js
function Vc(e) {
	let t = [], n = ic(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
//#endregion
//#region node_modules/tabbable/dist/index.esm.js
var Hc = [
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
], Uc = /* @__PURE__ */ Hc.join(","), Wc = typeof Element > "u", Gc = Wc ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Kc = !Wc && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, qc = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : qc(e.parentNode));
}, Jc = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, Yc = function(e, t, n) {
	if (qc(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(Uc));
	return t && Gc.call(e, Uc) && r.unshift(e), r = r.filter(n), r;
}, Xc = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!qc(a, !1)) if (a.tagName === "SLOT") {
			var o = a.assignedElements(), s = Xc(o.length ? o : a.children, !0, n);
			n.flatten ? r.push.apply(r, s) : r.push({
				scopeParent: a,
				candidates: s
			});
		} else {
			Gc.call(a, Uc) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
			var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !qc(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
			if (c && l) {
				var u = Xc(c === !0 ? a.children : c.children, !0, n);
				n.flatten ? r.push.apply(r, u) : r.push({
					scopeParent: a,
					candidates: u
				});
			} else i.unshift.apply(i, a.children);
		}
	}
	return r;
}, Zc = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, Qc = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Jc(e)) && !Zc(e) ? 0 : e.tabIndex;
}, $c = function(e, t) {
	var n = Qc(e);
	return n < 0 && t && !Zc(e) ? 0 : n;
}, el = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, tl = function(e) {
	return e.tagName === "INPUT";
}, nl = function(e) {
	return tl(e) && e.type === "hidden";
}, rl = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, il = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, al = function(e) {
	if (!e.name) return !0;
	var t = e.form || Kc(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = il(r, e.form);
	return !i || i === e;
}, ol = function(e) {
	return tl(e) && e.type === "radio";
}, sl = function(e) {
	return ol(e) && !al(e);
}, cl = function(e) {
	var t = e && Kc(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = Kc(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, ll = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, ul = function(e, t) {
	var n = t.displayCheck, r = t.getShadowRoot;
	if (n === "full-native" && "checkVisibility" in e) return !e.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	if (getComputedStyle(e).visibility === "hidden") return !0;
	var i = Gc.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (Gc.call(i, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var a = e; e;) {
				var o = e.parentElement, s = Kc(e);
				if (o && !o.shadowRoot && r(o) === !0) return ll(e);
				e = e.assignedSlot ? e.assignedSlot : !o && s !== e.ownerDocument ? s.host : o;
			}
			e = a;
		}
		if (cl(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return ll(e);
	return !1;
}, dl = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return Gc.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, fl = function(e, t) {
	return !(t.disabled || nl(t) || ul(t, e) || rl(t) || dl(t));
}, pl = function(e, t) {
	return !(sl(t) || Qc(t) < 0 || !fl(e, t));
}, ml = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, hl = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = $c(a, i), s = i ? hl(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(el).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, gl = function(e, t) {
	return t ||= {}, hl(t.getShadowRoot ? Xc([e], t.includeContainer, {
		filter: pl.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: ml
	}) : Yc(e, t.includeContainer, pl.bind(null, t)));
}, _l = function(e, t) {
	return t ||= {}, t.getShadowRoot ? Xc([e], t.includeContainer, {
		filter: fl.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : Yc(e, t.includeContainer, fl.bind(null, t));
}, vl = /* @__PURE__ */ Hc.concat("iframe:not([inert]):not([inert] *)").join(","), yl = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return Gc.call(e, vl) === !1 ? !1 : fl(t, e);
}, bl = "data-context-menu-trigger", xl = "data-context-menu-content";
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/use-dismissable-layer.svelte.js
new As("Menu.Root"), new As("Menu.Root | Menu.Sub"), new As("Menu.Content"), new As("Menu.Group | Menu.RadioGroup"), new As("Menu.RadioGroup"), new As("Menu.CheckboxGroup"), new Ic("bitsmenuopen", {
	bubbles: !1,
	cancelable: !0
}), mc({
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
var Sl = class e {
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
	#s = Ec;
	constructor(e) {
		this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#o = e.onFocusOutside, Qn(() => {
			this.#a = zc(this.opts.ref.current);
		});
		let t = Ec, n = () => {
			this.#g(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), t();
		};
		Ps([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!(!this.opts.enabled.current || !this.opts.ref.current)) return qs(1, () => {
				this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), t(), t = this.#l());
			}), n;
		}), Gs(() => {
			this.#g.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), t();
		});
	}
	#c = (e) => {
		e.defaultPrevented || this.opts.ref.current && Js(() => {
			!this.opts.ref.current || this.#h(e.target) || e.target && !this.#i && this.#o.current?.(e);
		});
	};
	#l() {
		return ms(di(this.#a, "pointerdown", ms(this.#f, this.#m), { capture: !0 }), di(this.#a, "pointerdown", ms(this.#p, this.#d)), di(this.#a, "focusin", this.#c));
	}
	#u = (e) => {
		let t = e;
		t.defaultPrevented && (t = El(e)), this.#e.current(e);
	};
	#d = Lc((e) => {
		if (!this.opts.ref.current) {
			this.#s();
			return;
		}
		let t = this.opts.isValidEvent.current(e, this.opts.ref.current) || Tl(e, this.opts.ref.current);
		if (!this.#r || this.#_() || !t) {
			this.#s();
			return;
		}
		let n = e;
		if (n.defaultPrevented && (n = El(n)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
			this.#s();
			return;
		}
		e.pointerType === "touch" ? (this.#s(), this.#s = di(this.#a, "click", this.#u, { once: !0 })) : this.#e.current(n);
	}, 10);
	#f = (e) => {
		this.#n[e.type] = !0;
	};
	#p = (e) => {
		this.#n[e.type] = !1;
	};
	#m = () => {
		this.opts.ref.current && (this.#r = wl(this.opts.ref.current));
	};
	#h = (e) => this.opts.ref.current ? Rc(this.opts.ref.current, e) : !1;
	#g = Lc(() => {
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
function Cl(e = [...globalThis.bitsDismissableLayers]) {
	return e.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
}
function wl(e) {
	let t = [...globalThis.bitsDismissableLayers], n = Cl(t);
	if (n) return n[0].opts.ref.current === e;
	let [r] = t[0];
	return r.opts.ref.current === e;
}
function Tl(e, t) {
	let n = e.target;
	if (!bc(n)) return !1;
	let r = !!n.closest(`[${bl}]`), i = !!t.closest(`[${xl}]`);
	return "button" in e && e.button > 0 && !r ? !1 : "button" in e && e.button === 0 && r && i ? !0 : r && i ? !1 : zc(n).documentElement.contains(n) && !Rc(t, n) && Bc(e, t);
}
function El(e) {
	let t = e.currentTarget, n = e.target, r;
	r = e instanceof PointerEvent ? new PointerEvent(e.type, e) : new PointerEvent("pointerdown", e);
	let i = !1;
	return new Proxy(r, { get: (r, a) => a === "currentTarget" ? t : a === "target" ? n : a === "preventDefault" ? () => {
		i = !0, typeof r.preventDefault == "function" && r.preventDefault();
	} : a === "defaultPrevented" ? i : a in r ? r[a] : e[a] });
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/dismissible-layer.svelte
function Dl(e, t) {
	D(t, !0);
	let n = K(t, "interactOutsideBehavior", 3, "close"), r = K(t, "onInteractOutside", 3, Ec), i = K(t, "onFocusOutside", 3, Ec), a = K(t, "isValidEvent", 3, () => !1), o = Sl.create({
		id: q(() => t.id),
		interactOutsideBehavior: q(() => n()),
		onInteractOutside: q(() => r()),
		enabled: q(() => t.enabled),
		onFocusOutside: q(() => i()),
		isValidEvent: q(() => a()),
		ref: t.ref
	});
	var s = B();
	U(P(s), () => t.children ?? f, () => ({ props: o.props })), V(e, s), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/use-escape-layer.svelte.js
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var Ol = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	constructor(e) {
		this.opts = e, this.domContext = new sc(this.opts.ref);
		let t = Ec;
		Ps(() => e.enabled.current, (n) => (n && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), t = this.#e()), () => {
			t(), globalThis.bitsEscapeLayers.delete(this);
		}));
	}
	#e = () => di(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
	#t = (e) => {
		if (e.key !== "Escape" || !kl(this)) return;
		let t = new KeyboardEvent(e.type, e);
		e.preventDefault();
		let n = this.opts.escapeKeydownBehavior.current;
		n !== "close" && n !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(t);
	};
};
function kl(e) {
	let t = [...globalThis.bitsEscapeLayers], n = t.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
	if (n) return n[0] === e;
	let [r] = t[0];
	return r === e;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/escape-layer.svelte
function Al(e, t) {
	D(t, !0);
	let n = K(t, "escapeKeydownBehavior", 3, "close"), r = K(t, "onEscapeKeydown", 3, Ec);
	Ol.create({
		escapeKeydownBehavior: q(() => n()),
		onEscapeKeydown: q(() => r()),
		enabled: q(() => t.enabled),
		ref: t.ref
	});
	var i = B();
	U(P(i), () => t.children ?? f), V(e, i), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope-manager.js
var jl = class e {
	static instance;
	#e = Bo([]);
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
}, Ml = class e {
	#e = !1;
	#t = null;
	#n = jl.getInstance();
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
		this.#r.push(di(t, "focusin", (t) => {
			if (this.#e || !this.#n.isActiveScope(this)) return;
			let n = t.target;
			if (n) if (e.contains(n)) this.#n.setFocusMemory(this, n);
			else {
				let n = this.#n.getFocusMemory(this);
				if (n && e.contains(n) && yl(n)) t.preventDefault(), n.focus();
				else {
					let t = this.#u(), n = this.#d()[0];
					(t || n || e).focus();
				}
			}
		}, { capture: !0 }), di(e, "keydown", (e) => {
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
		return this.#t ? gl(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	#u() {
		return this.#l()[0] || null;
	}
	#d() {
		return this.#t ? _l(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	static use(t) {
		let n = null;
		return Ps([() => t.ref.current, () => t.enabled.current], ([r, i]) => {
			r && i ? (n ||= new e(t), n.mount(r)) : n &&= (n.unmount(), null);
		}), Gs(() => {
			n?.unmount();
		}), { get props() {
			return { tabindex: -1 };
		} };
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope.svelte
function Nl(e, t) {
	D(t, !0);
	let n = K(t, "enabled", 3, !1), r = K(t, "trapFocus", 3, !1), i = K(t, "loop", 3, !1), a = K(t, "onCloseAutoFocus", 3, Ec), o = K(t, "onOpenAutoFocus", 3, Ec), s = Ml.use({
		enabled: q(() => n()),
		trap: q(() => r()),
		loop: i(),
		onCloseAutoFocus: q(() => a()),
		onOpenAutoFocus: q(() => o()),
		ref: t.ref
	});
	var c = B();
	U(P(c), () => t.focusScope ?? f, () => ({ props: s.props })), V(e, c), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/use-text-selection-layer.svelte.js
var Pl = () => {};
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var Fl = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	#e = Ec;
	#t = !1;
	#n = Pl;
	#r = Pl;
	constructor(e) {
		this.opts = e, this.domContext = new sc(e.ref);
		let t = Ec;
		Ps(() => [
			this.opts.enabled.current,
			this.opts.onPointerDown.current,
			this.opts.onPointerUp.current
		], ([e, n, r]) => (this.#t = e, this.#n = n, this.#r = r, e && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), t(), t = this.#i()), () => {
			this.#t = !1, t(), this.#s(), globalThis.bitsTextSelectionLayers.delete(this);
		}));
	}
	#i() {
		return ms(di(this.domContext.getDocument(), "pointerdown", this.#o), di(this.domContext.getDocument(), "pointerup", Vo(this.#s, this.#a)));
	}
	#a = (e) => {
		this.#r(e);
	};
	#o = (e) => {
		let t = this.opts.ref.current, n = e.target;
		!vc(t) || !vc(n) || !this.#t || !zl(this) || !rc(t, n) || (this.#n(e), !e.defaultPrevented && (this.#e = Ll(t, this.domContext.getDocument().body)));
	};
	#s = () => {
		this.#e(), this.#e = Ec;
	};
}, Il = (e) => e.style.userSelect || e.style.webkitUserSelect;
function Ll(e, t) {
	let n = Il(t), r = Il(e);
	return Rl(t, "none"), Rl(e, "text"), () => {
		Rl(t, n), Rl(e, r);
	};
}
function Rl(e, t) {
	e.style.userSelect = t, e.style.webkitUserSelect = t;
}
function zl(e) {
	let t = [...globalThis.bitsTextSelectionLayers];
	if (!t.length) return !1;
	let n = t.at(-1);
	return n ? n[0] === e : !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/text-selection-layer.svelte
function Bl(e, t) {
	D(t, !0);
	let n = K(t, "preventOverflowTextSelection", 3, !0), r = K(t, "onPointerDown", 3, Ec), i = K(t, "onPointerUp", 3, Ec);
	Fl.create({
		id: q(() => t.id),
		onPointerDown: q(() => r()),
		onPointerUp: q(() => i()),
		enabled: q(() => t.enabled && n()),
		ref: t.ref
	});
	var a = B();
	U(P(a), () => t.children ?? f), V(e, a), O();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/use-id.js
globalThis.bitsIdCounter ??= { current: 0 };
function Vl(e = "bits") {
	return globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/shared-state.svelte.js
var Hl = class {
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
		return this.#t += 1, L(this.#n) === void 0 && (this.#r = tr(() => {
			M(this.#n, this.#e(...e), !0);
		})), Qn(() => () => {
			this.#i();
		}), L(this.#n);
	}
}, Ul = new ws(), Wl = /* @__PURE__ */ j(null), Gl = null, Kl = null, ql = !1, Jl = q(() => {
	for (let e of Ul.values()) if (e) return !0;
	return !1;
}), Yl = null, Xl = new Hl(() => {
	function e() {
		document.body.setAttribute("style", L(Wl) ?? ""), document.body.style.removeProperty("--scrollbar-width"), gc && Gl?.(), M(Wl, null);
	}
	function t() {
		Kl !== null && (window.clearTimeout(Kl), Kl = null);
	}
	function n(e, n) {
		t(), ql = !0, Yl = Date.now();
		let r = Yl, i = () => {
			Kl = null, Yl === r && (Ql(Ul) ? ql = !1 : (ql = !1, n()));
		}, a = e === null ? 24 : e;
		Kl = window.setTimeout(i, a);
	}
	function r() {
		L(Wl) === null && Ul.size === 0 && !ql && M(Wl, document.body.getAttribute("style"), !0);
	}
	return Ps(() => Jl.current, () => {
		if (!Jl.current) return;
		r(), ql = !1;
		let e = getComputedStyle(document.documentElement), t = getComputedStyle(document.body), n = e.scrollbarGutter?.includes("stable") || t.scrollbarGutter?.includes("stable"), i = window.innerWidth - document.documentElement.clientWidth, a = {
			padding: Number.parseInt(t.paddingRight ?? "0", 10) + i,
			margin: Number.parseInt(t.marginRight ?? "0", 10)
		};
		i > 0 && !n && (document.body.style.paddingRight = `${a.padding}px`, document.body.style.marginRight = `${a.margin}px`, document.body.style.setProperty("--scrollbar-width", `${i}px`)), document.body.style.overflow = "hidden", gc && (Gl = di(document, "touchmove", (e) => {
			e.target === document.documentElement && (e.touches.length > 1 || e.preventDefault());
		}, { passive: !1 })), Js(() => {
			document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
		});
	}), Gs(() => () => {
		Gl?.();
	}), {
		get lockMap() {
			return Ul;
		},
		resetBodyStyle: e,
		scheduleCleanupIfNoNewLocks: n,
		cancelPendingCleanup: t,
		ensureInitialStyleCaptured: r
	};
}), Zl = class {
	#e = Vl();
	#t;
	#n = () => null;
	#r;
	locked;
	constructor(e, t = () => null) {
		this.#t = e, this.#n = t, this.#r = Xl.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = q(() => this.#r.lockMap.get(this.#e) ?? !1, (e) => this.#r.lockMap.set(this.#e, e)), Gs(() => {
			if (this.#r.lockMap.delete(this.#e), Ql(this.#r.lockMap)) return;
			let e = this.#n();
			this.#r.scheduleCleanupIfNoNewLocks(e, () => {
				this.#r.resetBodyStyle();
			});
		}));
	}
};
function Ql(e) {
	for (let [t, n] of e) if (n) return !0;
	return !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/scroll-lock/scroll-lock.svelte
function $l(e, t) {
	D(t, !0);
	let n = K(t, "preventScroll", 3, !0), r = K(t, "restoreScrollDelay", 3, null);
	n() && new Zl(n(), () => r()), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/avatar.svelte.js
var eu = mc({
	component: "avatar",
	parts: [
		"root",
		"image",
		"fallback"
	]
}), tu = new As("Avatar.Root"), nu = class e {
	static create(t) {
		return tu.set(new e(t));
	}
	opts;
	domContext;
	attachment;
	constructor(e) {
		this.opts = e, this.domContext = new sc(this.opts.ref), this.loadImage = this.loadImage.bind(this), this.attachment = cc(this.opts.ref);
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
		[eu.root]: "",
		"data-status": this.opts.loadingStatus.current,
		...this.attachment
	}));
	get props() {
		return L(this.#e);
	}
	set props(e) {
		M(this.#e, e);
	}
}, ru = class e {
	static create(t) {
		return new e(t, tu.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = cc(this.opts.ref), Ps.pre([() => this.opts.src.current, () => this.opts.crossOrigin.current], ([e, t]) => {
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
		[eu.image]: "",
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
}, iu = class e {
	static create(t) {
		return new e(t, tu.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = cc(this.opts.ref);
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
		[eu.fallback]: "",
		...this.attachment
	}));
	get props() {
		return L(this.#t);
	}
	set props(e) {
		M(this.#t, e);
	}
}, au = /* @__PURE__ */ z("<div><!></div>");
function ou(e, t) {
	let n = wi();
	D(t, !0);
	let r = K(t, "delayMs", 3, 0), i = K(t, "loadingStatus", 15, "loading"), a = K(t, "id", 19, () => Dc(n)), o = K(t, "ref", 15, null), s = /* @__PURE__ */ G(t, [
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
	]), c = nu.create({
		delayMs: q(() => r()),
		loadingStatus: q(() => i(), (e) => {
			i() !== e && (i(e), t.onLoadingStatusChange?.(e));
		}),
		id: q(() => a()),
		ref: q(() => o(), (e) => o(e))
	}), l = /* @__PURE__ */ A(() => xs(s, c.props));
	var u = B(), d = P(u), p = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(l) })), V(e, n);
	}, m = (e) => {
		var n = au();
		W(n, () => ({ ...L(l) })), U(N(n), () => t.children ?? f), E(n), V(e, n);
	};
	H(d, (e) => {
		t.child ? e(p) : e(m, -1);
	}), V(e, u), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/components/avatar-image.svelte
var su = /* @__PURE__ */ z("<img/>");
function cu(e, t) {
	let n = wi();
	D(t, !0);
	let r = K(t, "id", 19, () => Dc(n)), i = K(t, "ref", 15, null), a = K(t, "crossorigin", 3, void 0), o = K(t, "referrerpolicy", 3, void 0), s = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"src",
		"child",
		"id",
		"ref",
		"crossorigin",
		"referrerpolicy"
	]), c = ru.create({
		src: q(() => t.src),
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e)),
		crossOrigin: q(() => a()),
		referrerPolicy: q(() => o())
	}), l = /* @__PURE__ */ A(() => xs(s, c.props));
	var u = B(), d = P(u), f = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(l) })), V(e, n);
	}, p = (e) => {
		var n = su();
		W(n, () => ({
			...L(l),
			src: t.src
		})), li(n), V(e, n);
	};
	H(d, (e) => {
		t.child ? e(f) : e(p, -1);
	}), V(e, u), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/components/avatar-fallback.svelte
var lu = /* @__PURE__ */ z("<span><!></span>");
function uu(e, t) {
	let n = wi();
	D(t, !0);
	let r = K(t, "id", 19, () => Dc(n)), i = K(t, "ref", 15, null), a = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref"
	]), o = iu.create({
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e))
	}), s = /* @__PURE__ */ A(() => xs(a, o.props));
	var c = B(), l = P(c), u = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(s) })), V(e, n);
	}, d = (e) => {
		var n = lu();
		W(n, () => ({ ...L(s) })), U(N(n), () => t.children ?? f), E(n), V(e, n);
	};
	H(l, (e) => {
		t.child ? e(u) : e(d, -1);
	}), V(e, c), O();
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var du = [
	"top",
	"right",
	"bottom",
	"left"
], fu = Math.min, pu = Math.max, mu = Math.round, hu = Math.floor, gu = (e) => ({
	x: e,
	y: e
}), _u = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function vu(e, t, n) {
	return pu(e, fu(t, n));
}
function yu(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function bu(e) {
	return e.split("-")[0];
}
function xu(e) {
	return e.split("-")[1];
}
function Su(e) {
	return e === "x" ? "y" : "x";
}
function Cu(e) {
	return e === "y" ? "height" : "width";
}
function wu(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Tu(e) {
	return Su(wu(e));
}
function Eu(e, t, n) {
	n === void 0 && (n = !1);
	let r = xu(e), i = Tu(e), a = Cu(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Fu(o)), [o, Fu(o)];
}
function Du(e) {
	let t = Fu(e);
	return [
		Ou(e),
		t,
		Ou(t)
	];
}
function Ou(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var ku = ["left", "right"], Au = ["right", "left"], ju = ["top", "bottom"], Mu = ["bottom", "top"];
function Nu(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Au : ku : t ? ku : Au;
		case "left":
		case "right": return t ? ju : Mu;
		default: return [];
	}
}
function Pu(e, t, n, r) {
	let i = xu(e), a = Nu(bu(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Ou)))), a;
}
function Fu(e) {
	let t = bu(e);
	return _u[t] + e.slice(t.length);
}
function Iu(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function Lu(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Iu(e);
}
function Ru(e) {
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
function zu(e, t, n) {
	let { reference: r, floating: i } = e, a = wu(t), o = Tu(t), s = Cu(o), c = bu(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	switch (xu(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function Bu(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = yu(t, e), p = Lu(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Ru(await i.getClippingRect({
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
	}, y = Ru(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Vu = 50, Hu = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Bu
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = zu(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < Vu && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = zu(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Uu = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = yu(e, t) || {};
		if (l == null) return {};
		let d = Lu(u), f = {
			x: n,
			y: r
		}, p = Tu(i), m = Cu(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], ee = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), te = ee ? ee[y] : 0;
		(!te || !await (o.isElement == null ? void 0 : o.isElement(ee))) && (te = s.floating[y] || a.floating[m]);
		let S = b / 2 - x / 2, ne = te / 2 - h[m] / 2 - 1, re = fu(d[_], ne), ie = fu(d[v], ne), ae = re, oe = te - h[m] - ie, se = te / 2 - h[m] / 2 + S, ce = vu(ae, se, oe), le = !c.arrow && xu(i) != null && se !== ce && a.reference[m] / 2 - (se < ae ? re : ie) - h[m] / 2 < 0, ue = le ? se < ae ? se - ae : se - oe : 0;
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
}), Wu = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = yu(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = bu(r), _ = wu(o), v = bu(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Fu(o)] : Du(o)), x = p !== "none";
			!d && x && b.push(...Pu(o, m, p, y));
			let ee = [o, ...b], te = await s.detectOverflow(t, h), S = [], ne = i.flip?.overflows || [];
			if (l && S.push(te[g]), u) {
				let e = Eu(r, a, y);
				S.push(te[e[0]], te[e[1]]);
			}
			if (ne = [...ne, {
				placement: r,
				overflows: S
			}], !S.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = ee[e];
				if (t && (!(u === "alignment" && _ !== wu(t)) || ne.every((e) => wu(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
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
								let t = wu(e.placement);
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
function Gu(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Ku(e) {
	return du.some((t) => e[t] >= 0);
}
var qu = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = yu(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Gu(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Ku(e)
					} };
				}
				case "escaped": {
					let e = Gu(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Ku(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Ju = /* @__PURE__ */ new Set(["left", "top"]);
async function Yu(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = bu(n), s = xu(n), c = wu(n) === "y", l = Ju.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = yu(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var Xu = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Yu(t, e);
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
}, Zu = function(e) {
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
			} }, ...l } = yu(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = wu(bu(i)), p = Su(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = vu(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = vu(n, h, r);
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
}, Qu = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = yu(e, t), u = {
				x: n,
				y: r
			}, d = wu(i), f = Su(d), p = u[f], m = u[d], h = yu(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = Ju.has(bu(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, $u = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = yu(e, t), u = await o.detectOverflow(t, l), d = bu(i), f = xu(i), p = wu(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = fu(h - u[g], v), x = fu(m - u[_], y), ee = !t.middlewareData.shift, te = b, S = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = y), (r = t.middlewareData.shift) != null && r.enabled.y && (te = v), ee && !f) {
				let e = pu(u.left, 0), t = pu(u.right, 0), n = pu(u.top, 0), r = pu(u.bottom, 0);
				p ? S = m - 2 * (e !== 0 || t !== 0 ? e + t : pu(u.left, u.right)) : te = h - 2 * (n !== 0 || r !== 0 ? n + r : pu(u.top, u.bottom));
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
function ed() {
	return typeof window < "u";
}
function td(e) {
	return id(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function nd(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function rd(e) {
	return ((id(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function id(e) {
	return ed() ? e instanceof Node || e instanceof nd(e).Node : !1;
}
function ad(e) {
	return ed() ? e instanceof Element || e instanceof nd(e).Element : !1;
}
function od(e) {
	return ed() ? e instanceof HTMLElement || e instanceof nd(e).HTMLElement : !1;
}
function sd(e) {
	return !ed() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof nd(e).ShadowRoot;
}
function cd(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = yd(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function ld(e) {
	return /^(table|td|th)$/.test(td(e));
}
function ud(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var dd = /transform|translate|scale|rotate|perspective|filter/, fd = /paint|layout|strict|content/, pd = (e) => !!e && e !== "none", md;
function hd(e) {
	let t = ad(e) ? yd(e) : e;
	return pd(t.transform) || pd(t.translate) || pd(t.scale) || pd(t.rotate) || pd(t.perspective) || !_d() && (pd(t.backdropFilter) || pd(t.filter)) || dd.test(t.willChange || "") || fd.test(t.contain || "");
}
function gd(e) {
	let t = xd(e);
	for (; od(t) && !vd(t);) {
		if (hd(t)) return t;
		if (ud(t)) return null;
		t = xd(t);
	}
	return null;
}
function _d() {
	return md ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), md;
}
function vd(e) {
	return /^(html|body|#document)$/.test(td(e));
}
function yd(e) {
	return nd(e).getComputedStyle(e);
}
function bd(e) {
	return ad(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function xd(e) {
	if (td(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || sd(e) && e.host || rd(e);
	return sd(t) ? t.host : t;
}
function Sd(e) {
	let t = xd(e);
	return vd(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : od(t) && cd(t) ? t : Sd(t);
}
function Cd(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Sd(e), i = r === e.ownerDocument?.body, a = nd(r);
	if (i) {
		let e = wd(a);
		return t.concat(a, a.visualViewport || [], cd(r) ? r : [], e && n ? Cd(e) : []);
	} else return t.concat(r, Cd(r, [], n));
}
function wd(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Td(e) {
	let t = yd(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = od(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = mu(n) !== a || mu(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Ed(e) {
	return ad(e) ? e : e.contextElement;
}
function Dd(e) {
	let t = Ed(e);
	if (!od(t)) return gu(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Td(t), o = (a ? mu(n.width) : n.width) / r, s = (a ? mu(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Od = /* @__PURE__ */ gu(0);
function kd(e) {
	let t = nd(e);
	return !_d() || !t.visualViewport ? Od : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Ad(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== nd(e) ? !1 : t;
}
function jd(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Ed(e), o = gu(1);
	t && (r ? ad(r) && (o = Dd(r)) : o = Dd(e));
	let s = Ad(a, n, r) ? kd(a) : gu(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = nd(a), t = r && ad(r) ? nd(r) : r, n = e, i = wd(n);
		for (; i && r && t !== n;) {
			let e = Dd(i), t = i.getBoundingClientRect(), r = yd(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = nd(i), i = wd(n);
		}
	}
	return Ru({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Md(e, t) {
	let n = bd(e).scrollLeft;
	return t ? t.left + n : jd(rd(e)).left + n;
}
function Nd(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Md(e, n),
		y: n.top + t.scrollTop
	};
}
function Pd(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = rd(r), s = t ? ud(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = gu(1), u = gu(0), d = od(r);
	if ((d || !d && !a) && ((td(r) !== "body" || cd(o)) && (c = bd(r)), d)) {
		let e = jd(r);
		l = Dd(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Nd(o, c) : gu(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Fd(e) {
	return Array.from(e.getClientRects());
}
function Id(e) {
	let t = rd(e), n = bd(e), r = e.ownerDocument.body, i = pu(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = pu(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Md(e), s = -n.scrollTop;
	return yd(r).direction === "rtl" && (o += pu(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var Ld = 25;
function Rd(e, t) {
	let n = nd(e), r = rd(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = _d();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = Md(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= Ld && (a -= o);
	} else l <= Ld && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function zd(e, t) {
	let n = jd(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = od(e) ? Dd(e) : gu(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Bd(e, t, n) {
	let r;
	if (t === "viewport") r = Rd(e, n);
	else if (t === "document") r = Id(rd(e));
	else if (ad(t)) r = zd(t, n);
	else {
		let n = kd(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Ru(r);
}
function Vd(e, t) {
	let n = xd(e);
	return n === t || !ad(n) || vd(n) ? !1 : yd(n).position === "fixed" || Vd(n, t);
}
function Hd(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Cd(e, [], !1).filter((e) => ad(e) && td(e) !== "body"), i = null, a = yd(e).position === "fixed", o = a ? xd(e) : e;
	for (; ad(o) && !vd(o);) {
		let t = yd(o), n = hd(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || cd(o) && !n && Vd(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = xd(o);
	}
	return t.set(e, r), r;
}
function Ud(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? ud(t) ? [] : Hd(t, this._c) : [].concat(n), r], o = Bd(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Bd(t, a[e], i);
		s = pu(n.top, s), c = fu(n.right, c), l = fu(n.bottom, l), u = pu(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Wd(e) {
	let { width: t, height: n } = Td(e);
	return {
		width: t,
		height: n
	};
}
function Gd(e, t, n) {
	let r = od(t), i = rd(t), a = n === "fixed", o = jd(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = gu(0);
	function l() {
		c.x = Md(i);
	}
	if (r || !r && !a) if ((td(t) !== "body" || cd(i)) && (s = bd(t)), r) {
		let e = jd(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Nd(i, s) : gu(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Kd(e) {
	return yd(e).position === "static";
}
function qd(e, t) {
	if (!od(e) || yd(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return rd(e) === n && (n = n.ownerDocument.body), n;
}
function Jd(e, t) {
	let n = nd(e);
	if (ud(e)) return n;
	if (!od(e)) {
		let t = xd(e);
		for (; t && !vd(t);) {
			if (ad(t) && !Kd(t)) return t;
			t = xd(t);
		}
		return n;
	}
	let r = qd(e, t);
	for (; r && ld(r) && Kd(r);) r = qd(r, t);
	return r && vd(r) && Kd(r) && !hd(r) ? n : r || gd(e) || n;
}
var Yd = async function(e) {
	let t = this.getOffsetParent || Jd, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Gd(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Xd(e) {
	return yd(e).direction === "rtl";
}
var Zd = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Pd,
	getDocumentElement: rd,
	getClippingRect: Ud,
	getOffsetParent: Jd,
	getElementRects: Yd,
	getClientRects: Fd,
	getDimensions: Wd,
	getScale: Dd,
	isElement: ad,
	isRTL: Xd
};
function Qd(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function $d(e, t) {
	let n = null, r, i = rd(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = hu(d), h = hu(i.clientWidth - (u + f)), g = hu(i.clientHeight - (d + p)), _ = hu(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: pu(0, fu(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Qd(l, e.getBoundingClientRect()) && o(), y = !1;
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
function ef(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Ed(e), u = i || a ? [...l ? Cd(l) : [], ...t ? Cd(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? $d(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? jd(e) : null;
	c && g();
	function g() {
		let t = jd(e);
		h && !Qd(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var tf = Xu, nf = Zu, rf = Wu, af = $u, of = qu, sf = Uu, cf = Qu, lf = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Zd,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Hu(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region node_modules/bits-ui/dist/internal/floating-svelte/floating-utils.svelte.js
function uf(e) {
	return typeof e == "function" ? e() : e;
}
function df(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ff(e, t) {
	let n = df(e);
	return Math.round(t * n) / n;
}
function pf(e) {
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
function mf(e) {
	let t = e.whileElementsMounted, n = /* @__PURE__ */ A(() => uf(e.open) ?? !0), r = /* @__PURE__ */ A(() => uf(e.middleware)), i = /* @__PURE__ */ A(() => uf(e.transform) ?? !0), a = /* @__PURE__ */ A(() => uf(e.placement) ?? "bottom"), o = /* @__PURE__ */ A(() => uf(e.strategy) ?? "absolute"), s = /* @__PURE__ */ A(() => uf(e.sideOffset) ?? 0), c = /* @__PURE__ */ A(() => uf(e.alignOffset) ?? 0), l = e.reference, u = /* @__PURE__ */ j(0), d = /* @__PURE__ */ j(0), f = Bo(null), p = /* @__PURE__ */ j(En(L(o))), m = /* @__PURE__ */ j(En(L(a))), h = /* @__PURE__ */ j(En({})), g = /* @__PURE__ */ j(!1), _ = !1, v = 0, y = /* @__PURE__ */ A(() => {
		let e = f.current ? ff(f.current, L(u)) : L(u), t = f.current ? ff(f.current, L(d)) : L(d);
		return L(i) ? {
			position: L(p),
			left: "0",
			top: "0",
			transform: `translate(${e}px, ${t}px)`,
			...f.current && df(f.current) >= 1.5 && { willChange: "transform" }
		} : {
			position: L(p),
			left: `${e}px`,
			top: `${t}px`
		};
	}), b;
	function x() {
		if (l.current === null || f.current === null) return;
		let e = l.current, t = f.current, i = ++v;
		lf(e, t, {
			middleware: L(r),
			placement: L(a),
			strategy: L(o)
		}).then((r) => {
			if (i === v && !(l.current !== e || f.current !== t)) {
				if (hf(e)) {
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
	return Qn(() => {
		t === void 0 && L(n) && x();
	}), Qn(te), Qn(() => {
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
	}), Qn(S), Qn(() => ee), {
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
function hf(e) {
	return e instanceof Element ? !e.isConnected || e instanceof HTMLElement && e.hidden ? !0 : e.getClientRects().length === 0 : !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/use-floating-layer.svelte.js
var gf = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, _f = new As("Floating.Root"), vf = new As("Floating.Content"), yf = new As("Floating.Root"), bf = class e {
	static create(t = !1) {
		return t ? yf.set(new e()) : _f.set(new e());
	}
	anchorNode = Bo(null);
	customAnchorNode = Bo(null);
	triggerNode = Bo(null);
	constructor() {
		Qn(() => {
			this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
		});
	}
}, xf = class e {
	static create(t, n = !1) {
		return n ? vf.set(new e(t, yf.get())) : vf.set(new e(t, _f.get()));
	}
	opts;
	root;
	contentRef = Bo(null);
	wrapperRef = Bo(null);
	arrowRef = Bo(null);
	contentAttachment = cc(this.contentRef);
	wrapperAttachment = cc(this.wrapperRef);
	arrowAttachment = cc(this.arrowRef);
	arrowId = Bo(Vl());
	#e = /* @__PURE__ */ A(() => {
		if (typeof this.opts.style == "string") return ps(this.opts.style);
		if (!this.opts.style) return {};
	});
	#t = void 0;
	#n = new zs(() => this.arrowRef.current ?? void 0);
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
		boundary: L(this.#o).filter(Cc),
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
		tf({
			mainAxis: this.opts.sideOffset.current + L(this.#i),
			alignmentAxis: this.opts.alignOffset.current
		}),
		this.opts.avoidCollisions.current && nf({
			mainAxis: !0,
			crossAxis: !1,
			limiter: this.opts.sticky.current === "partial" ? cf() : void 0,
			...this.detectOverflowOptions
		}),
		this.opts.avoidCollisions.current && rf({ ...this.detectOverflowOptions }),
		af({
			...this.detectOverflowOptions,
			apply: ({ rects: e, availableWidth: t, availableHeight: n }) => {
				let { width: r, height: i } = e.reference;
				M(this.#l, t, !0), M(this.#u, n, !0), M(this.#d, r, !0), M(this.#f, i, !0);
			}
		}),
		this.arrowRef.current && sf({
			element: this.arrowRef.current,
			padding: this.opts.arrowPadding.current
		}),
		Cf({
			arrowWidth: L(this.#r),
			arrowHeight: L(this.#i)
		}),
		this.opts.hideWhenDetached.current && of({
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
	#m = /* @__PURE__ */ A(() => Tf(this.floating.placement));
	get placedSide() {
		return L(this.#m);
	}
	set placedSide(e) {
		M(this.#m, e);
	}
	#h = /* @__PURE__ */ A(() => Ef(this.floating.placement));
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
	#b = /* @__PURE__ */ A(() => gf[this.placedSide]);
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
		style: vs({ ...L(this.#e) }),
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
		this.opts = e, this.root = t, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), Ps(() => e.customAnchor.current, (e) => {
			this.root.customAnchorNode.current = e;
		}), this.floating = mf({
			strategy: () => this.opts.strategy.current,
			placement: () => L(this.#a),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...e) => ef(...e, { animationFrame: this.#t?.current === "always" }),
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		}), Qn(() => {
			this.floating.isPositioned && this.opts.onPlaced?.current();
		}), Ps(() => this.contentRef.current, (e) => {
			if (!e || !this.opts.enabled.current) return;
			let t = ac(e), n = t.requestAnimationFrame(() => {
				if (this.contentRef.current !== e || !this.opts.enabled.current) return;
				let n = t.getComputedStyle(e).zIndex;
				n !== this.contentZIndex && (this.contentZIndex = n);
			});
			return () => {
				t.cancelAnimationFrame(n);
			};
		}), Qn(() => {
			this.floating.floating.current = this.wrapperRef.current;
		});
	}
}, Sf = class e {
	static create(t, n = !1) {
		return n ? new e(t, yf.get()) : new e(t, _f.get());
	}
	opts;
	root;
	constructor(e, t) {
		this.opts = e, this.root = t, e.virtualEl && e.virtualEl.current ? t.triggerNode = zo(e.virtualEl.current) : t.triggerNode = e.ref;
	}
};
function Cf(e) {
	return {
		name: "transformOrigin",
		options: e,
		fn(t) {
			let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = wf(n), u = {
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
function wf(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
function Tf(e) {
	return wf(e)[0];
}
function Ef(e) {
	return wf(e)[1];
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer.svelte
function Df(e, t) {
	D(t, !0);
	let n = K(t, "tooltip", 3, !1);
	bf.create(n());
	var r = B();
	U(P(r), () => t.children ?? f), V(e, r), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-anchor.svelte
function Of(e, t) {
	D(t, !0);
	let n = K(t, "tooltip", 3, !1);
	Sf.create({
		id: q(() => t.id),
		virtualEl: q(() => t.virtualEl),
		ref: t.ref
	}, n());
	var r = B();
	U(P(r), () => t.children ?? f), V(e, r), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content.svelte
function kf(e, t) {
	D(t, !0);
	let n = K(t, "side", 3, "bottom"), r = K(t, "sideOffset", 3, 0), i = K(t, "align", 3, "center"), a = K(t, "alignOffset", 3, 0), o = K(t, "arrowPadding", 3, 0), s = K(t, "avoidCollisions", 3, !0), c = K(t, "collisionBoundary", 19, () => []), l = K(t, "collisionPadding", 3, 0), u = K(t, "hideWhenDetached", 3, !1), d = K(t, "onPlaced", 3, () => {}), p = K(t, "sticky", 3, "partial"), m = K(t, "updatePositionStrategy", 3, "optimized"), h = K(t, "strategy", 3, "fixed"), g = K(t, "dir", 3, "ltr"), _ = K(t, "style", 19, () => ({})), v = K(t, "wrapperId", 19, Vl), y = K(t, "customAnchor", 3, null), b = K(t, "tooltip", 3, !1), x = xf.create({
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
		sticky: q(() => p()),
		updatePositionStrategy: q(() => m()),
		strategy: q(() => h()),
		dir: q(() => g()),
		style: q(() => _()),
		enabled: q(() => t.enabled),
		wrapperId: q(() => v()),
		customAnchor: q(() => y())
	}, b()), ee = /* @__PURE__ */ A(() => xs(x.wrapperProps, { style: { pointerEvents: "auto" } }));
	var te = B();
	U(P(te), () => t.content ?? f, () => ({
		props: x.props,
		wrapperProps: L(ee)
	})), V(e, te), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content-static.svelte
function Af(e, t) {
	D(t, !0), Ga(() => {
		t.onPlaced?.();
	});
	var n = B();
	U(P(n), () => t.content ?? f, () => ({
		props: {},
		wrapperProps: {}
	})), V(e, n), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/separator/separator.svelte.js
var jf = mc({
	component: "separator",
	parts: ["root"]
}), Mf = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = cc(e.ref);
	}
	#e = /* @__PURE__ */ A(() => ({
		id: this.opts.id.current,
		role: this.opts.decorative.current ? "none" : "separator",
		"aria-orientation": this.opts.orientation.current,
		"aria-hidden": uc(this.opts.decorative.current),
		"data-orientation": this.opts.orientation.current,
		[jf.root]: "",
		...this.attachment
	}));
	get props() {
		return L(this.#e);
	}
	set props(e) {
		M(this.#e, e);
	}
}, Nf = /* @__PURE__ */ z("<div><!></div>");
function Pf(e, t) {
	let n = wi();
	D(t, !0);
	let r = K(t, "id", 19, () => Dc(n)), i = K(t, "ref", 15, null), a = K(t, "decorative", 3, !1), o = K(t, "orientation", 3, "horizontal"), s = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"ref",
		"child",
		"children",
		"decorative",
		"orientation"
	]), c = Mf.create({
		ref: q(() => i(), (e) => i(e)),
		id: q(() => r()),
		decorative: q(() => a()),
		orientation: q(() => o())
	}), l = /* @__PURE__ */ A(() => xs(s, c.props));
	var u = B(), d = P(u), p = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(l) })), V(e, n);
	}, m = (e) => {
		var n = Nf();
		W(n, () => ({ ...L(l) })), U(N(n), () => t.children ?? f), E(n), V(e, n);
	};
	H(d, (e) => {
		t.child ? e(p) : e(m, -1);
	}), V(e, u), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-content.svelte
function Ff(e, t) {
	let n = K(t, "isStatic", 3, !1), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"content",
		"isStatic",
		"onPlaced"
	]);
	var i = B(), a = P(i), o = (e) => {
		Af(e, {
			get content() {
				return t.content;
			},
			get onPlaced() {
				return t.onPlaced;
			}
		});
	}, s = (e) => {
		kf(e, Wa({
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
var If = /* @__PURE__ */ z("<!> <!>", 1);
function Lf(e, t) {
	D(t, !0);
	let n = K(t, "interactOutsideBehavior", 3, "close"), r = K(t, "trapFocus", 3, !0), i = K(t, "isValidEvent", 3, () => !1), a = K(t, "customAnchor", 3, null), o = K(t, "isStatic", 3, !1), s = K(t, "tooltip", 3, !1), c = K(t, "contentPointerEvents", 3, "auto"), l = /* @__PURE__ */ G(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled.ref.tooltip.contentPointerEvents".split(".")), u = /* @__PURE__ */ A(() => t.preventScroll ?? !0), d = /* @__PURE__ */ A(() => t.strategy ?? (L(u) ? "fixed" : "absolute"));
	Ff(e, {
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
			var d = If(), p = P(d), m = (e) => {
				$l(e, { get preventScroll() {
					return L(u);
				} });
			}, h = (e) => {
				$l(e, { get preventScroll() {
					return L(u);
				} });
			};
			H(p, (e) => {
				t.forceMount && t.enabled ? e(m) : t.forceMount || e(h, 1);
			}), Nl(F(p, 2), {
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
					Al(e, {
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
							Dl(e, {
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
									Bl(e, {
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
													props: xs(l, o(), r(), a(), { style: { pointerEvents: c() } }),
													wrapperProps: s()
												}));
												U(u, () => t.popper ?? f, () => L(e));
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
function Rf(e, t) {
	let n = K(t, "interactOutsideBehavior", 3, "close"), r = K(t, "trapFocus", 3, !0), i = K(t, "isValidEvent", 3, () => !1), a = K(t, "customAnchor", 3, null), o = K(t, "isStatic", 3, !1), s = /* @__PURE__ */ G(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.open.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.ref.shouldRender".split("."));
	var c = B(), l = P(c), u = (e) => {
		Lf(e, Wa({
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
function zf(e, t) {
	let n = K(t, "interactOutsideBehavior", 3, "close"), r = K(t, "trapFocus", 3, !0), i = K(t, "isValidEvent", 3, () => !1), a = K(t, "customAnchor", 3, null), o = K(t, "isStatic", 3, !1), s = /* @__PURE__ */ G(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled".split("."));
	Lf(e, Wa({
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
function Bf(e, t) {
	D(t, !0);
	let n = K(t, "mounted", 15, !1), r = K(t, "onMountedChange", 3, Ec);
	Ks(() => (n(!0), r()(!0), () => {
		n(!1), r()(!1);
	})), O();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/safe-polygon.svelte.js
function Vf(e, t) {
	let [n, r] = e, i = !1, a = t.length;
	for (let e = 0, o = a - 1; e < a; o = e++) {
		let [a, s] = t[e] ?? [0, 0], [c, l] = t[o] ?? [0, 0];
		s >= r != l >= r && n <= (c - a) * (r - s) / (l - s) + a && (i = !i);
	}
	return i;
}
function Hf(e, t) {
	return e[0] >= t.left && e[0] <= t.right && e[1] >= t.top && e[1] <= t.bottom;
}
function Uf(e, t) {
	let n = e.left + e.width / 2, r = e.top + e.height / 2, i = t.left + t.width / 2, a = t.top + t.height / 2, o = i - n, s = a - r;
	return Math.abs(o) > Math.abs(s) ? o > 0 ? "right" : "left" : s > 0 ? "bottom" : "top";
}
var Wf = class {
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
		this.#n = typeof t == "number" && t > 0 ? t : null, Ps([
			e.triggerNode,
			e.contentNode,
			e.enabled
		], ([e, t, n]) => {
			if (!e || !t || !n) {
				this.#o = null, this.#m();
				return;
			}
			return this.#o && this.#o !== e && this.#m(), this.#o = e, [
				di(ic(e), "pointermove", (n) => {
					this.#p([n.clientX, n.clientY], e, t);
				}),
				di(e, "pointerleave", (e) => {
					let n = e.relatedTarget;
					if (yc(n) && t.contains(n)) return;
					let r = this.#e.ignoredTargets?.() ?? [];
					yc(n) && r.some((e) => e === n || e.contains(n)) || (this.#a = yc(n) && r.length > 0 ? r.filter((e) => n.contains(e)) : [], this.#r = [e.clientX, e.clientY], this.#i = "content", this.#u());
				}),
				di(e, "pointerenter", () => {
					this.#m();
				}),
				di(t, "pointerenter", () => {
					this.#m();
				}),
				di(t, "pointerleave", (t) => {
					let n = t.relatedTarget;
					yc(n) && e.contains(n) || (this.#r = [t.clientX, t.clientY], this.#i = "trigger", this.#u());
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
		if (this.#i === "content" && Hf(e, i)) {
			this.#m();
			return;
		}
		if (this.#i === "trigger" && Hf(e, r)) {
			this.#m();
			return;
		}
		if (this.#i === "content" && this.#a.length > 0) for (let t of this.#a) {
			let n = t.getBoundingClientRect();
			if (Hf(e, n)) return;
			let i = Uf(r, n), a = this.#h(r, n, i);
			if (a && Vf(e, a)) return;
		}
		let a = Uf(r, i), o = this.#h(r, i, a);
		if (o && Vf(e, o)) return;
		let s = this.#i === "content" ? i : r;
		Vf(e, this.#g(this.#r, s, a, this.#i)) || (this.#m(), this.#e.onPointerExit());
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
}, Gf = mc({
	component: "label",
	parts: ["root"]
}), Kf = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = cc(this.opts.ref), this.onmousedown = this.onmousedown.bind(this);
	}
	onmousedown(e) {
		e.detail > 1 && e.preventDefault();
	}
	#e = /* @__PURE__ */ A(() => ({
		id: this.opts.id.current,
		[Gf.root]: "",
		onmousedown: this.onmousedown,
		...this.attachment
	}));
	get props() {
		return L(this.#e);
	}
	set props(e) {
		M(this.#e, e);
	}
}, qf = /* @__PURE__ */ z("<label><!></label>");
function Jf(e, t) {
	let n = wi();
	D(t, !0);
	let r = K(t, "id", 19, () => Dc(n)), i = K(t, "ref", 15, null), a = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref",
		"for"
	]), o = Kf.create({
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e))
	}), s = /* @__PURE__ */ A(() => xs(a, o.props, { for: t.for }));
	var c = B(), l = P(c), u = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(s) })), V(e, n);
	}, d = (e) => {
		var n = qf();
		W(n, () => ({
			...L(s),
			for: t.for
		})), U(N(n), () => t.children ?? f), E(n), V(e, n);
	};
	H(l, (e) => {
		t.child ? e(u) : e(d, -1);
	}), V(e, c), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/link-preview.svelte.js
var Yf = mc({
	component: "link-preview",
	parts: ["content", "trigger"]
}), Xf = new As("LinkPreview.Root"), Zf = class e {
	static create(t) {
		return Xf.set(new e(t));
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
	domContext = new sc(() => null);
	constructor(e) {
		this.opts = e, this.contentPresence = new Tc({
			ref: q(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		}), Ps(() => this.opts.open.current, (e) => {
			if (!e) {
				this.hasSelection = !1;
				return;
			}
			if (!this.domContext) return;
			let t = di(this.domContext.getDocument(), "pointerup", () => {
				this.containsSelection = !1, this.isPointerDownOnContent = !1, qs(1, () => {
					this.domContext.getDocument().getSelection()?.toString() === "" ? this.hasSelection = !1 : this.hasSelection = !0;
				});
			});
			if (!this.contentNode) return;
			let n = Vc(this.contentNode);
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
}, Qf = class e {
	static create(t) {
		return new e(t, Xf.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = cc(this.opts.ref, (e) => this.root.triggerNode = e), this.root.domContext = new sc(e.ref), this.onpointerenter = this.onpointerenter.bind(this), this.onpointerleave = this.onpointerleave.bind(this), this.onfocus = this.onfocus.bind(this), this.onblur = this.onblur.bind(this);
	}
	onpointerenter(e) {
		xc(e) || this.root.handleOpen();
	}
	onpointerleave(e) {
		xc(e) || (!this.root.contentMounted || !this.root.opts.open.current) && this.root.immediateClose();
	}
	onfocus(e) {
		Sc(e.currentTarget) && this.root.handleOpen();
	}
	onblur(e) {
		this.root.handleClose();
	}
	#e = /* @__PURE__ */ A(() => ({
		id: this.opts.id.current,
		"aria-haspopup": "dialog",
		"aria-expanded": lc(this.root.opts.open.current),
		"data-state": dc(this.root.opts.open.current),
		"aria-controls": this.root.contentNode?.id,
		role: "button",
		[Yf.trigger]: "",
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
}, $f = class e {
	static create(t) {
		return new e(t, Xf.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = cc(this.opts.ref, (e) => this.root.contentNode = e), this.root.domContext = new sc(e.ref), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerenter = this.onpointerenter.bind(this), this.onfocusout = this.onfocusout.bind(this), new Wf({
			triggerNode: () => this.root.triggerNode,
			contentNode: () => this.opts.ref.current,
			enabled: () => this.root.opts.open.current,
			onPointerExit: () => {
				this.root.handleClose();
			}
		}), Gs(() => {
			this.root.clearTimeout();
		});
	}
	onpointerdown(e) {
		let t = e.target;
		yc(t) && (e.currentTarget.contains(t) && (this.root.containsSelection = !0), this.root.hasSelection = !0, this.root.isPointerDownOnContent = !0);
	}
	onpointerenter(e) {
		xc(e) || this.root.handleOpen();
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
		"data-state": dc(this.root.opts.open.current),
		...fc(this.root.contentPresence.transitionStatus),
		[Yf.content]: "",
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
function ep(e, t) {
	D(t, !0);
	let n = K(t, "disabled", 3, !1), r = K(t, "open", 15, !1), i = K(t, "onOpenChange", 3, Ec), a = K(t, "onOpenChangeComplete", 3, Ec), o = K(t, "openDelay", 3, 700), s = K(t, "closeDelay", 3, 300);
	Zf.create({
		disabled: q(() => n()),
		open: q(() => r(), (e) => {
			r(e), i()(e);
		}),
		openDelay: q(() => o()),
		closeDelay: q(() => s()),
		onOpenChangeComplete: q(() => a())
	});
	var c = B();
	Gi(P(c), () => Df, (e, n) => {
		n(e, {
			children: (e, n) => {
				var r = B();
				U(P(r), () => t.children ?? f), V(e, r);
			},
			$$slots: { default: !0 }
		});
	}), V(e, c), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview-content.svelte
var tp = /* @__PURE__ */ z("<div><div><!></div></div>"), np = /* @__PURE__ */ z("<!> <!>", 1), rp = /* @__PURE__ */ z("<div><div><!></div></div>"), ip = /* @__PURE__ */ z("<!> <!>", 1);
function ap(e, t) {
	let n = wi();
	D(t, !0);
	let r = K(t, "id", 19, () => Dc(n)), i = K(t, "ref", 15, null), a = K(t, "side", 3, "top"), o = K(t, "sideOffset", 3, 0), s = K(t, "align", 3, "center"), c = K(t, "avoidCollisions", 3, !0), l = K(t, "arrowPadding", 3, 0), u = K(t, "sticky", 3, "partial"), d = K(t, "hideWhenDetached", 3, !1), p = K(t, "collisionPadding", 3, 0), m = K(t, "onInteractOutside", 3, Ec), h = K(t, "onEscapeKeydown", 3, Ec), g = K(t, "forceMount", 3, !1), _ = /* @__PURE__ */ G(t, [
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
	]), v = $f.create({
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e)),
		onInteractOutside: q(() => m()),
		onEscapeKeydown: q(() => h())
	}), y = /* @__PURE__ */ A(() => ({
		side: a(),
		sideOffset: o(),
		align: s(),
		avoidCollisions: c(),
		arrowPadding: l(),
		sticky: u(),
		hideWhenDetached: d(),
		collisionPadding: p()
	})), b = /* @__PURE__ */ A(() => xs(_, L(y), v.props));
	var x = B(), ee = P(x), te = (e) => {
		zf(e, Wa(() => L(b), () => v.popperProps, {
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
				let r = () => n?.().props, i = () => n?.().wrapperProps, a = /* @__PURE__ */ A(() => xs(r(), { style: pf("link-preview") }, { style: t.style }));
				var o = np(), s = P(o), c = (e) => {
					var n = B(), r = P(n);
					{
						let e = /* @__PURE__ */ A(() => ({
							props: L(a),
							wrapperProps: i(),
							...v.snippetProps
						}));
						U(r, () => t.child, () => L(e));
					}
					V(e, n);
				}, l = (e) => {
					var n = tp();
					W(n, () => ({ ...i() }));
					var r = N(n);
					W(r, () => ({ ...L(a) })), U(N(r), () => t.children ?? f), E(r), E(n), V(e, n);
				};
				H(s, (e) => {
					t.child ? e(c) : e(l, -1);
				}), Bf(F(s, 2), {
					get mounted() {
						return v.root.contentMounted;
					},
					set mounted(e) {
						v.root.contentMounted = e;
					}
				}), V(e, o);
			},
			$$slots: { popper: !0 }
		}));
	}, S = (e) => {
		Rf(e, Wa(() => L(b), () => v.popperProps, {
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
				let r = () => n?.().props, i = () => n?.().wrapperProps, a = /* @__PURE__ */ A(() => xs(r(), { style: pf("link-preview") }, { style: t.style }));
				var o = ip(), s = P(o), c = (e) => {
					var n = B(), r = P(n);
					{
						let e = /* @__PURE__ */ A(() => ({
							props: L(a),
							wrapperProps: i(),
							...v.snippetProps
						}));
						U(r, () => t.child, () => L(e));
					}
					V(e, n);
				}, l = (e) => {
					var n = rp();
					W(n, () => ({ ...i() }));
					var r = N(n);
					W(r, () => ({ ...L(a) })), U(N(r), () => t.children ?? f), E(r), E(n), V(e, n);
				};
				H(s, (e) => {
					t.child ? e(c) : e(l, -1);
				}), Bf(F(s, 2), {
					get mounted() {
						return v.root.contentMounted;
					},
					set mounted(e) {
						v.root.contentMounted = e;
					}
				}), V(e, o);
			},
			$$slots: { popper: !0 }
		}));
	};
	H(ee, (e) => {
		g() ? e(te) : g() || e(S, 1);
	}), V(e, x), O();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview-trigger.svelte
var op = /* @__PURE__ */ z("<a><!></a>");
function sp(e, t) {
	let n = wi();
	D(t, !0);
	let r = K(t, "ref", 15, null), i = K(t, "id", 19, () => Dc(n)), a = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"id",
		"child",
		"children"
	]), o = Qf.create({
		id: q(() => i()),
		ref: q(() => r(), (e) => r(e))
	}), s = /* @__PURE__ */ A(() => xs(a, o.props));
	var c = B();
	Gi(P(c), () => Of, (e, n) => {
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
					var n = op();
					W(n, () => ({ ...L(s) })), U(N(n), () => t.children ?? f), E(n), V(e, n);
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
var cp = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, lp = (e, t) => ({
	classGroupId: e,
	validator: t
}), up = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), dp = "-", fp = [], pp = "arbitrary..", mp = (e) => {
	let t = _p(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return gp(e);
			let n = e.split(dp);
			return hp(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? cp(i, t) : t : i || fp;
			}
			return n[e] || fp;
		}
	};
}, hp = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = hp(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(dp) : e.slice(t).join(dp), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, gp = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? pp + r : void 0;
})(), _p = (e) => {
	let { theme: t, classGroups: n } = e;
	return vp(n, t);
}, vp = (e, t) => {
	let n = up();
	for (let r in e) {
		let i = e[r];
		yp(i, n, r, t);
	}
	return n;
}, yp = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		bp(i, t, n, r);
	}
}, bp = (e, t, n, r) => {
	if (typeof e == "string") {
		xp(e, t, n);
		return;
	}
	if (typeof e == "function") {
		Sp(e, t, n, r);
		return;
	}
	Cp(e, t, n, r);
}, xp = (e, t, n) => {
	let r = e === "" ? t : wp(t, e);
	r.classGroupId = n;
}, Sp = (e, t, n, r) => {
	if (Tp(e)) {
		yp(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(lp(n, e));
}, Cp = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		yp(o, wp(t, a), n, r);
	}
}, wp = (e, t) => {
	let n = e, r = t.split(dp), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = up(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Tp = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Ep = (e) => {
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
}, Dp = "!", Op = ":", kp = [], Ap = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), jp = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Op) {
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
		s.endsWith(Dp) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Dp) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Ap(t, l, c, u);
	};
	if (t) {
		let e = t + Op, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Ap(kp, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, Mp = (e) => {
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
}, Np = (e) => ({
	cache: Ep(e.cacheSize),
	parseClassName: jp(e),
	sortModifiers: Mp(e),
	postfixLookupClassGroupIds: Pp(e),
	...mp(e)
}), Pp = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, Fp = /\s+/, Ip = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(Fp), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + Dp : _, y = v + g;
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
}, Lp = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Rp(n)) && (i && (i += " "), i += r);
	return i;
}, Rp = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Rp(e[r])) && (n && (n += " "), n += t);
	return n;
}, zp = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = Np(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = Ip(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Lp(...e));
}, Bp = [], Vp = (e) => {
	let t = (t) => t[e] || Bp;
	return t.isThemeGetter = !0, t;
}, Hp = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Up = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Wp = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Gp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Kp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Jp = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Yp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Xp = (e) => Wp.test(e), J = (e) => !!e && !Number.isNaN(Number(e)), Zp = (e) => !!e && Number.isInteger(Number(e)), Qp = (e) => e.endsWith("%") && J(e.slice(0, -1)), $p = (e) => Gp.test(e), em = () => !0, tm = (e) => Kp.test(e) && !qp.test(e), nm = () => !1, rm = (e) => Jp.test(e), im = (e) => Yp.test(e), am = (e) => !Y(e) && !X(e), om = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), sm = (e) => Sm(e, Em, nm), Y = (e) => Hp.test(e), cm = (e) => Sm(e, Dm, tm), lm = (e) => Sm(e, Om, J), um = (e) => Sm(e, Am, em), dm = (e) => Sm(e, km, nm), fm = (e) => Sm(e, wm, nm), pm = (e) => Sm(e, Tm, im), mm = (e) => Sm(e, jm, rm), X = (e) => Up.test(e), hm = (e) => Cm(e, Dm), gm = (e) => Cm(e, km), _m = (e) => Cm(e, wm), vm = (e) => Cm(e, Em), ym = (e) => Cm(e, Tm), bm = (e) => Cm(e, jm, !0), xm = (e) => Cm(e, Am, !0), Sm = (e, t, n) => {
	let r = Hp.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Cm = (e, t, n = !1) => {
	let r = Up.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, wm = (e) => e === "position" || e === "percentage", Tm = (e) => e === "image" || e === "url", Em = (e) => e === "length" || e === "size" || e === "bg-size", Dm = (e) => e === "length", Om = (e) => e === "number", km = (e) => e === "family-name", Am = (e) => e === "number" || e === "weight", jm = (e) => e === "shadow", Mm = () => {
	let e = Vp("color"), t = Vp("font"), n = Vp("text"), r = Vp("font-weight"), i = Vp("tracking"), a = Vp("leading"), o = Vp("breakpoint"), s = Vp("container"), c = Vp("spacing"), l = Vp("radius"), u = Vp("shadow"), d = Vp("inset-shadow"), f = Vp("text-shadow"), p = Vp("drop-shadow"), m = Vp("blur"), h = Vp("perspective"), g = Vp("aspect"), _ = Vp("ease"), v = Vp("animate"), y = () => [
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
		Xp,
		"full",
		"auto",
		...S()
	], re = () => [
		Zp,
		"none",
		"subgrid",
		X,
		Y
	], ie = () => [
		"auto",
		{ span: [
			"full",
			Zp,
			X,
			Y
		] },
		Zp,
		X,
		Y
	], ae = () => [
		Zp,
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
		Xp,
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
		Xp,
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
		Xp,
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
		_m,
		fm,
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
		vm,
		sm,
		{ size: [X, Y] }
	], ge = () => [
		Qp,
		hm,
		cm
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
		hm,
		cm
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
		Qp,
		_m,
		fm
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
		Xp,
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
			blur: [$p],
			breakpoint: [$p],
			color: [em],
			container: [$p],
			"drop-shadow": [$p],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [am],
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
			"inset-shadow": [$p],
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
			radius: [$p],
			shadow: [$p],
			spacing: ["px", J],
			text: [$p],
			"text-shadow": [$p],
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
				Xp,
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
			"container-named": [om],
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
				Zp,
				"auto",
				X,
				Y
			] }],
			basis: [{ basis: [
				Xp,
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
				Xp,
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
				Zp,
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
				hm,
				cm
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				xm,
				um
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
				Qp,
				Y
			] }],
			"font-family": [{ font: [
				gm,
				dm,
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
				lm
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
				cm
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
				Zp,
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
						Zp,
						X,
						Y
					],
					radial: [
						"",
						X,
						Y
					],
					conic: [
						Zp,
						X,
						Y
					]
				},
				ym,
				pm
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
				hm,
				cm
			] }],
			"outline-color": [{ outline: C() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				bm,
				mm
			] }],
			"shadow-color": [{ shadow: C() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				bm,
				mm
			] }],
			"inset-shadow-color": [{ "inset-shadow": C() }],
			"ring-w": [{ ring: ve() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: C() }],
			"ring-offset-w": [{ "ring-offset": [J, cm] }],
			"ring-offset-color": [{ "ring-offset": C() }],
			"inset-ring-w": [{ "inset-ring": ve() }],
			"inset-ring-color": [{ "inset-ring": C() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				bm,
				mm
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
				bm,
				mm
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
				Zp,
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
				hm,
				cm,
				lm
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
}, Nm = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (Pm(e, "cacheSize", t), Pm(e, "prefix", n), Pm(e, "experimentalParseClassName", r), Fm(e.theme, a.theme), Fm(e.classGroups, a.classGroups), Fm(e.conflictingClassGroups, a.conflictingClassGroups), Fm(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Pm(e, "postfixLookupClassGroups", a.postfixLookupClassGroups), Pm(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Im(e.theme, i.theme), Im(e.classGroups, i.classGroups), Im(e.conflictingClassGroups, i.conflictingClassGroups), Im(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Lm(e, i, "postfixLookupClassGroups"), Lm(e, i, "orderSensitiveModifiers"), e), Pm = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, Fm = (e, t) => {
	if (t) for (let n in t) Pm(e, n, t[n]);
}, Im = (e, t) => {
	if (t) for (let n in t) Lm(e, t, n);
}, Lm = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, Rm = (e, ...t) => typeof e == "function" ? zp(Mm, e, ...t) : zp(() => Nm(Mm(), e), ...t), zm = /* @__PURE__ */ zp(Mm), Z = (...e) => zm(oa(e)), Bm = new Os("min-width: 768px"), Vm = new Os("min-width: 1024px");
//#endregion
//#region src/lib/components/ui/avatar/avatar.svelte
function Hm(e, t) {
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
		Gi(s, () => ou, (t, o) => {
			o(t, Wa({
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
function Um(e, t) {
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
		Gi(a, () => cu, (t, i) => {
			i(t, Wa({
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
function Wm(e, t) {
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
		Gi(a, () => uu, (t, i) => {
			i(t, Wa({
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
var Gm = /* @__PURE__ */ z("<span><!></span>");
function Km(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Gm();
	W(i, (e) => ({
		"data-slot": "avatar-badge",
		class: e,
		...r
	}), [() => Z("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", t.class)]), U(N(i), () => t.children ?? f), E(i), za(i, (e) => n(e), () => n()), V(e, i), O();
}
//#endregion
//#region src/shared/components/common/ChannelAvatar.svelte
var qm = /* @__PURE__ */ z("<!> <!> <!>", 1), Jm = /* @__PURE__ */ z("<div><!></div>");
function Ym(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class",
		"imgSrc",
		"isConnected"
	]), r = /* @__PURE__ */ A(() => t.isConnected ? "Socket: Connected" : "Socket: Disconnected");
	var i = Jm();
	W(i, (e) => ({
		class: e,
		...n
	}), [() => Z("", t.class)]), Hm(N(i), {
		class: "rounded-lg",
		children: (e, n) => {
			var i = qm(), a = P(i);
			Um(a, {
				get src() {
					return t.imgSrc;
				},
				alt: "Channel Logo"
			});
			var o = F(a, 2), s = (e) => {
				{
					let n = /* @__PURE__ */ A(() => Z(t.isConnected ? "bg-green-500" : "bg-red-500"));
					Km(e, {
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
			}), Wm(F(o, 2), {
				children: (e, t) => {
					He(), V(e, Ci("Channel Logo"));
				},
				$$slots: { default: !0 }
			}), V(e, i);
		},
		$$slots: { default: !0 }
	}), E(i), V(e, i), O();
}
//#endregion
//#region src/shared/components/common/VersionBadge.svelte
var Xm = /* @__PURE__ */ z("<div><div class=\"absolute top-[18%] left-[-75%] w-[250%] -rotate-45 bg-primary py-[0.25em] pr-[1.5em] text-center text-[0.6rem] leading-none font-bold shadow-md\"> </div></div>");
function Zm(e, t) {
	D(t, !0);
	let n = K(t, "appVersion", 3, "unknown"), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"appVersion",
		"class"
	]), i = /* @__PURE__ */ A(() => Bm.current ? `App Version: ${n()}` : "");
	var a = Xm();
	W(a, (e) => ({
		class: e,
		...r
	}), [() => Z("relative h-15 w-15 shrink-0 overflow-hidden", t.class)]);
	var o = N(a), s = N(o, !0);
	E(o), E(a), or(() => {
		ka(o, "title", L(i)), Ei(s, n());
	}), V(e, a), O();
}
//#endregion
//#region node_modules/valibot/dist/index.mjs
var Qm, $m = {
	lang: void 0,
	message: void 0,
	abortEarly: void 0,
	abortPipeEarly: void 0
};
/* @__NO_SIDE_EFFECTS__ */
function eh(e) {
	return !e && !Qm ? $m : {
		lang: e?.lang ?? Qm?.lang,
		message: e?.message,
		abortEarly: e?.abortEarly ?? Qm?.abortEarly,
		abortPipeEarly: e?.abortPipeEarly ?? Qm?.abortPipeEarly
	};
}
var th;
/* @__NO_SIDE_EFFECTS__ */
function nh(e) {
	return th?.get(e);
}
var rh;
/* @__NO_SIDE_EFFECTS__ */
function ih(e) {
	return rh?.get(e);
}
var ah;
/* @__NO_SIDE_EFFECTS__ */
function oh(e, t) {
	return ah?.get(e)?.get(t);
}
/* @__NO_SIDE_EFFECTS__ */
function sh(e) {
	let t = typeof e;
	return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function ch(e, t, n, r, i) {
	let a = i && "input" in i ? i.input : n.value, o = i?.expected ?? e.expects ?? null, s = i?.received ?? /* @__PURE__ */ sh(a), c = {
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
	}, l = e.kind === "schema", u = i?.message ?? e.message ?? /* @__PURE__ */ oh(e.reference, c.lang) ?? (l ? /* @__PURE__ */ ih(c.lang) : null) ?? r.message ?? /* @__PURE__ */ nh(c.lang);
	u !== void 0 && (c.message = typeof u == "function" ? u(c) : u), l && (n.typed = !1), n.issues ? n.issues.push(c) : n.issues = [c];
}
var lh = /* @__PURE__ */ new WeakMap();
/* @__NO_SIDE_EFFECTS__ */
function uh(e) {
	let t = lh.get(e);
	return t || (t = {
		version: 1,
		vendor: "valibot",
		validate(t) {
			return e["~run"]({ value: t }, /* @__PURE__ */ eh());
		}
	}, lh.set(e, t)), t;
}
/* @__NO_SIDE_EFFECTS__ */
function dh(e, t) {
	return {
		kind: "validation",
		type: "max_length",
		reference: dh,
		async: !1,
		expects: `<=${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && e.value.length > this.requirement && ch(this, "length", e, t, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function fh(e, t) {
	return {
		kind: "validation",
		type: "min_length",
		reference: fh,
		async: !1,
		expects: `>=${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && e.value.length < this.requirement && ch(this, "length", e, t, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function ph(e, t) {
	return {
		kind: "validation",
		type: "regex",
		reference: ph,
		async: !1,
		expects: `${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && !this.requirement.test(e.value) && ch(this, "format", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function mh(e) {
	return {
		kind: "schema",
		type: "string",
		reference: mh,
		expects: "string",
		async: !1,
		message: e,
		get "~standard"() {
			return /* @__PURE__ */ uh(this);
		},
		"~run"(e, t) {
			return typeof e.value == "string" ? e.typed = !0 : ch(this, "type", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function hh(...e) {
	return {
		...e[0],
		pipe: e,
		get "~standard"() {
			return /* @__PURE__ */ uh(this);
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
function gh(e, t, n) {
	let r = e["~run"]({ value: t }, /* @__PURE__ */ eh(n));
	return {
		typed: r.typed,
		success: !r.issues,
		output: r.value,
		issues: r.issues
	};
}
//#endregion
//#region node_modules/tailwind-variants/dist/chunk-LQJYWU4O.js
var _h = /\s+/g, vh = (e) => typeof e != "string" || !e ? e : e.replace(_h, " ").trim(), yh = (...e) => {
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
	return t.length > 0 ? vh(t.join(" ")) : void 0;
}, bh = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, xh = (e) => {
	if (!e || typeof e != "object") return !0;
	for (let t in e) return !1;
	return !0;
}, Sh = (e, t) => {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let i = 0; i < n.length; i++) {
		let a = n[i];
		if (!r.includes(a) || e[a] !== t[a]) return !1;
	}
	return !0;
}, Ch = (e, t) => {
	for (let n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
		let r = t[n];
		n in e ? e[n] = yh(e[n], r) : e[n] = r;
	}
	return e;
}, wh = (e, t) => {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		Array.isArray(r) ? wh(r, t) : r && t.push(r);
	}
}, Th = (...e) => {
	let t = [];
	wh(e, t);
	let n = [];
	for (let e = 0; e < t.length; e++) t[e] && n.push(t[e]);
	return n;
}, Eh = (e, t) => {
	let n = {};
	for (let r in e) {
		let i = e[r];
		if (r in t) {
			let e = t[r];
			Array.isArray(i) || Array.isArray(e) ? n[r] = Th(e, i) : typeof i == "object" && typeof e == "object" && i && e ? n[r] = Eh(i, e) : n[r] = e + " " + i;
		} else n[r] = i;
	}
	for (let r in t) r in e || (n[r] = t[r]);
	return n;
}, Dh = {
	twMerge: !0,
	twMergeConfig: {}
};
function Oh() {
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
var kh = Oh(), Ah = (e) => {
	let t = (t, n) => {
		let { extend: r = null, slots: i = {}, variants: a = {}, compoundVariants: o = [], compoundSlots: s = [], defaultVariants: c = {} } = t, l = {
			...Dh,
			...n
		}, u = r?.base ? yh(r.base, t?.base) : t?.base, d = r?.variants && !xh(r.variants) ? Eh(a, r.variants) : a, f = r?.defaultVariants && !xh(r.defaultVariants) ? {
			...r.defaultVariants,
			...c
		} : c;
		!xh(l.twMergeConfig) && !Sh(l.twMergeConfig, kh.cachedTwMergeConfig) && (kh.didTwMergeConfigChange = !0, kh.cachedTwMergeConfig = l.twMergeConfig);
		let p = xh(r?.slots), m = xh(i) ? {} : {
			base: yh(t?.base, p && r?.base),
			...i
		}, h = p ? m : Ch({ ...r?.slots }, xh(m) ? { base: t?.base } : m), g = xh(r?.compoundVariants) ? o : Th(r?.compoundVariants, o), _ = (t) => {
			if (xh(d) && xh(i) && p) return e(u, t?.class, t?.className)(l);
			if (g && !Array.isArray(g)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof g}`);
			if (s && !Array.isArray(s)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
			let n = (e, n = d, r = null, i = null) => {
				let a = n[e];
				if (!a || xh(a)) return null;
				let o = i?.[e] ?? t?.[e];
				if (o === null) return null;
				let s = bh(o);
				if (typeof s == "object") return null;
				let c = f?.[e];
				return a[(s ?? bh(c)) || "false"];
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
					if (!xh(o)) {
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
			if (!xh(i) || !p) {
				let t = {};
				if (typeof h == "object" && !xh(h)) {
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
		createTV: (e) => (n, r) => t(n, r ? Eh(e, r) : e)
	};
}, jh = (e) => xh(e) ? zm : Rm({
	...e,
	extend: {
		theme: e.theme,
		classGroups: e.classGroups,
		conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
		conflictingClassGroups: e.conflictingClassGroups,
		...e.extend
	}
}), Mh = (e, t) => {
	let n = yh(e);
	return !n || !(t?.twMerge ?? !0) ? n : ((!kh.cachedTwMerge || kh.didTwMergeConfigChange) && (kh.didTwMergeConfigChange = !1, kh.cachedTwMerge = jh(kh.cachedTwMergeConfig)), kh.cachedTwMerge(n) || void 0);
}, { createTV: Nh, tv: Ph } = Ah((...e) => (t) => Mh(e, t)), Fh = Ph({
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
}), Ih = /* @__PURE__ */ z("<a><!></a>"), Lh = /* @__PURE__ */ z("<button><!></button>");
function Rh(e, t) {
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
		var o = Ih();
		W(o, (e) => ({
			"data-slot": "button",
			class: e,
			href: t.disabled ? void 0 : a(),
			"aria-disabled": t.disabled,
			role: t.disabled ? "link" : void 0,
			tabindex: t.disabled ? -1 : void 0,
			...s
		}), [() => Z(Fh({
			variant: n(),
			size: r()
		}), t.class)]), U(N(o), () => t.children ?? f), E(o), za(o, (e) => i(e), () => i()), V(e, o);
	}, d = (e) => {
		var a = Lh();
		W(a, (e) => ({
			"data-slot": "button",
			class: e,
			type: o(),
			disabled: t.disabled,
			...s
		}), [() => Z(Fh({
			variant: n(),
			size: r()
		}), t.class)]), U(N(a), () => t.children ?? f), E(a), za(a, (e) => i(e), () => i()), V(e, a);
	};
	H(l, (e) => {
		a() ? e(u) : e(d, -1);
	}), V(e, c), O();
}
//#endregion
//#region src/lib/components/ui/field/field.svelte
var zh = Ph({
	base: "data-[invalid=true]:text-destructive gap-2 group/field flex w-full",
	variants: { orientation: {
		vertical: "cn-field-orientation-vertical flex-col [&>*]:w-full [&>.sr-only]:w-auto",
		horizontal: "cn-field-orientation-horizontal flex-row items-center has-[>[data-slot=field-content]]:items-start [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "cn-field-orientation-responsive flex-col @md/field-group:flex-row @md/field-group:items-center @md/field-group:has-[>[data-slot=field-content]]:items-start [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
}), Bh = /* @__PURE__ */ z("<div><!></div>");
function Vh(e, t) {
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
	var a = Bh();
	W(a, (e) => ({
		role: "group",
		"data-slot": "field",
		"data-orientation": r(),
		class: e,
		...i
	}), [() => Z(zh({ orientation: r() }), t.class)]), U(N(a), () => t.children ?? f), E(a), za(a, (e) => n(e), () => n()), V(e, a), O();
}
//#endregion
//#region src/lib/components/ui/field/field-group.svelte
var Hh = /* @__PURE__ */ z("<div><!></div>");
function Uh(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Hh();
	W(i, (e) => ({
		"data-slot": "field-group",
		class: e,
		...r
	}), [() => Z("gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col", t.class)]), U(N(i), () => t.children ?? f), E(i), za(i, (e) => n(e), () => n()), V(e, i), O();
}
//#endregion
//#region src/lib/components/ui/label/label.svelte
function Wh(e, t) {
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
		Gi(a, () => Jf, (t, i) => {
			i(t, Wa({
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
function Gh(e, t) {
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
		Gi(o, () => Pf, (t, a) => {
			a(t, Wa({
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
var Kh = /* @__PURE__ */ z("<input/>"), qh = /* @__PURE__ */ z("<input/>");
function Jh(e, t) {
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
		var s = Kh();
		W(s, (e) => ({
			"data-slot": a(),
			class: e,
			type: "file",
			...o
		}), [() => Z("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", t.class)], void 0, void 0, void 0, !0), za(s, (e) => n(e), () => n()), La(s, i), Pa(s, r), V(e, s);
	}, u = (e) => {
		var i = qh();
		W(i, (e) => ({
			"data-slot": a(),
			class: e,
			type: t.type,
			...o
		}), [() => Z("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", t.class)], void 0, void 0, void 0, !0), za(i, (e) => n(e), () => n()), Pa(i, r), V(e, i);
	};
	H(c, (e) => {
		t.type === "file" ? e(l) : e(u, -1);
	}), V(e, s), O();
}
//#endregion
//#region src/shared/api/http.ts
var Yh = async (e) => fetch(e), Xh = async (e, t) => fetch(e, {
	body: t,
	credentials: "include",
	headers: { "Content-Type": "application/x-www-form-urlencoded" },
	method: "POST",
	redirect: "manual"
}), Zh = {
	status: !1,
	username: ""
}, Qh = (e) => {
	let { subscribe: t, set: n, update: r } = St({
		...Zh,
		...e
	});
	return {
		set: n,
		subscribe: t,
		init: (e) => n(e),
		resetStatus: () => r((e) => ({
			...e,
			status: Zh.status
		})),
		resetUsername: () => r((e) => ({
			...e,
			username: Zh.username
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
}, $h = async (e) => new Promise((t, n) => {
	ro.once("login", (e) => {
		if (e.success) {
			t(e.name);
			return;
		}
		n(e.error);
	}), ro.emit("login", e);
}), eg = async () => new Promise((e) => {
	ro.once("rank", e);
}), tg = async (e) => {
	await Xh(new URL("/login", window.location.origin), new URLSearchParams(e));
	let t = await (await Yh(new URL(window.location.href))).text(), n = new DOMParser().parseFromString(t, "text/html").querySelector("input[name=\"_csrf\"]");
	if (!n) {
		console.warn("login response missing csrf value");
		return;
	}
	let r = n.value;
	bo.updateCSRF(r);
}, ng = async (e) => {
	await Xh(new URL("/logout", window.location.origin), new URLSearchParams(e));
}, rg = async (e, t) => {
	ro.disconnected && await to();
	let n = $h({
		name: e,
		pw: t
	}), r = eg(), i = await n, a = await r;
	if (vo.updateName(i), vo.updateLoggedIn(!0), vo.updateRank(a), !t) return;
	let { csrf: o } = Ct(bo);
	tg({
		_csrf: o,
		name: e,
		password: t,
		remember: "on"
	});
}, ig = async () => {
	ro.connected && await no();
	let { csrf: e } = Ct(bo);
	await ng({ _csrf: e }), vo.resetName(), vo.resetLoggedIn(), vo.resetRank(), ro.disconnected && await to();
}, ag = Qh(), og = [
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
], sg = [
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
], cg = [
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
], lg = [
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
], ug = [
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
], dg = [["path", {
	d: "M8 8.00049V6.00049C8 3.79135 9.79086 2.00049 12 2.00049C14.2091 2.00049 16 3.79135 16 6.00049V18.0005C16 20.2096 14.2091 22.0005 12 22.0005C9.79086 22.0005 8 20.2096 8 18.0005V13.5005C8 12.1198 9.11929 11.0005 10.5 11.0005C11.8807 11.0005 13 12.1198 13 13.5005V16.0005",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}]], fg = [["path", {
	d: "M7 11V9C7 5.70017 7 4.05025 8.02513 3.02513C9.05025 2 10.7002 2 14 2C17.2998 2 18.9497 2 19.9749 3.02513C21 4.05025 21 5.70017 21 9V11C21 14.2998 21 15.9497 19.9749 16.9749C18.9497 18 17.2998 18 14 18C10.7002 18 9.05025 18 8.02513 16.9749C7 15.9497 7 14.2998 7 11Z",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}], ["path", {
	d: "M3 6V15C3 18.2998 3 19.9497 4.02513 20.9749C5.05025 22 6.70017 22 10 22H17",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "1"
}]], pg = [
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
], mg = [
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
], hg = [
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
], gg = [
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
], _g = [["path", {
	d: "M11.9532 2.00004C17.5019 2.00004 22 6.47719 22 12C22 17.5229 17.5019 22 11.9532 22C-0.631103 22 -1.82658 4.01759 11.4985 5.00004C14.8499 5.24714 18.0289 8.41019 18.0289 12C18.0289 16.5 15.2348 18.5 11.4985 18.5C4.5 18.5 3.19042 8.46695 11.0021 9.00004C12.508 9.1028 14.0162 10.3432 14.0162 12C14.0162 13.9279 13 15 11.1211 15",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}]], vg = [["path", {
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
}]], yg = [
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
], bg = [
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
], xg = [["path", {
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
}]], Sg = [
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
], Cg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function wg(e, t) {
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
			e.setAttribute(Cg(t), String(n));
		}), e.innerHTML = "", f.forEach(([t, n]) => {
			let r = document.createElementNS("http://www.w3.org/2000/svg", t), i = { ...n };
			p !== void 0 && (i["stroke-width"] = p, i.stroke = "currentColor"), Object.entries(i).forEach(([e, t]) => {
				r.setAttribute(Cg(e), String(t));
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
var Tg = /* @__PURE__ */ Si("<svg></svg>");
function Eg(e, t) {
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
	Ga(() => {
		if (u) return M(d, wg("HugeiconsIcon", t.icon), !0), M(f, L(d).render(u, L(p)), !0), () => {
			L(f)?.destroy();
		};
	}), Qn(() => {
		L(d) && u && L(f) && L(f).update(L(p));
	});
	var m = Tg();
	W(m, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		width: n(),
		height: n(),
		viewBox: "0 0 24 24",
		fill: "none",
		class: L(l),
		...c
	})), za(m, (e) => u = e, () => u), V(e, m), O();
}
//#endregion
//#region src/features/auth/AuthAvatar.svelte
var Dg = /* @__PURE__ */ z("<div><span><!></span></div>");
function Og(e, t) {
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
	var r = Dg();
	W(r, (e) => ({
		class: e,
		...n
	}), [() => Z("", t.class)]);
	var i = N(r), a = N(i), o = (e) => {
		Eg(e, {
			get icon() {
				return hg;
			},
			class: "size-5 animate-spin",
			role: "status",
			"aria-label": "Loading"
		});
	}, s = (e) => {
		Eg(e, {
			get icon() {
				return og;
			},
			class: "size-5"
		});
	}, c = (e) => {
		Eg(e, {
			get icon() {
				return xg;
			},
			class: "size-5"
		});
	}, l = (e) => {
		Eg(e, {
			get icon() {
				return yg;
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
var kg = 1, Ag = 20, jg = 100, Mg = /* @__PURE__ */ hh(/* @__PURE__ */ mh(), /* @__PURE__ */ fh(kg, "Min 1 character"), /* @__PURE__ */ dh(Ag, "Max 20 characters"), /* @__PURE__ */ ph(/^[A-Za-zА-Яа-я0-9_-]+$/, "Only letters, numbers, -, or _")), Ng = /* @__PURE__ */ hh(/* @__PURE__ */ mh(), /* @__PURE__ */ dh(jg, "Max 100 characters")), Pg = /* @__PURE__ */ z("<!> <!> <!> <!>", 1), Fg = /* @__PURE__ */ z("<div><form><!></form></div>");
function Ig(e, t) {
	D(t, !0);
	let n = () => Dt(ag, "$authStore", r), [r, i] = Ot(), a = /* @__PURE__ */ A(() => n().status), o = /* @__PURE__ */ A(() => n().username), s = /* @__PURE__ */ A(() => /* @__PURE__ */ gh(Mg, L(o))), c = /* @__PURE__ */ A(() => L(s).success), l = /* @__PURE__ */ A(() => L(o) !== "" && !L(c)), u = /* @__PURE__ */ A(() => L(s).success ? "" : L(s).issues.map((e) => e.message).join(", ")), d = /* @__PURE__ */ A(() => n().password || ""), f = /* @__PURE__ */ A(() => !L(c) || L(a)), p = /* @__PURE__ */ A(() => /* @__PURE__ */ gh(Ng, L(d))), m = /* @__PURE__ */ A(() => L(p).success), h = /* @__PURE__ */ A(() => L(d) !== "" && !L(m)), g = /* @__PURE__ */ A(() => L(p).success ? "" : L(p).issues.map((e) => e.message).join(", ")), _ = /* @__PURE__ */ A(() => L(a) || !L(c) || L(c) && !L(m)), v = async (e) => {
		if (e.preventDefault(), !L(_)) try {
			At(ag, R(n).status = !0, R(n)), await new Promise((e) => setTimeout(e, 500)), await rg(L(o), L(d));
		} catch (e) {
			console.error(e);
		} finally {
			At(ag, R(n).status = !1, R(n)), At(ag, R(n).username = "", R(n)), At(ag, R(n).password = void 0, R(n));
		}
	}, y = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class"
	]);
	var b = Fg();
	W(b, (e) => ({
		class: e,
		...y
	}), [() => Z("", t.class)]);
	var x = N(b);
	Uh(N(x), {
		children: (e, t) => {
			Vh(e, {
				orientation: "horizontal",
				class: "flex flex-row items-center justify-end",
				children: (e, t) => {
					var r = Pg(), i = P(r), s = (e) => {
						{
							let t = /* @__PURE__ */ A(() => L(o) === "" && L(d) === ""), n = /* @__PURE__ */ A(() => L(d) === "");
							Og(e, {
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
						Vm.current && e(s);
					});
					var c = F(i, 2);
					{
						let e = /* @__PURE__ */ A(() => L(l) ? L(u) : ""), t = /* @__PURE__ */ A(() => Z({ "md:cursor-not-allowed": L(a) }));
						Jh(c, {
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
								At(ag, R(n).username = e, R(n));
							}
						});
					}
					var p = F(c, 2);
					{
						let e = /* @__PURE__ */ A(() => L(h) ? L(g) : ""), t = /* @__PURE__ */ A(() => Z({ "md:cursor-not-allowed": L(f) }));
						Jh(p, {
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
								At(ag, R(n).password = e, R(n));
							}
						});
					}
					var m = F(p, 2);
					{
						let e = /* @__PURE__ */ A(() => Z({ "md:cursor-not-allowed": L(_) }));
						Rh(m, {
							type: "submit",
							get disabled() {
								return L(_);
							},
							get class() {
								return L(e);
							},
							children: (e, t) => {
								He(), V(e, Ci("Login"));
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
	}), E(x), E(b), fi("submit", x, v), V(e, b), O(), i();
}
//#endregion
//#region src/features/auth/LogoutForm.svelte
var Lg = /* @__PURE__ */ z("<!> <!>", 1), Rg = /* @__PURE__ */ z("<!> <!>", 1), zg = /* @__PURE__ */ z("<div><form><!></form></div>");
function Bg(e, t) {
	D(t, !0);
	let n = () => Dt(ag, "$authStore", i), r = () => Dt(vo, "$clientStore", i), [i, a] = Ot(), o = /* @__PURE__ */ A(() => n().status), s = /* @__PURE__ */ A(() => r().rank > 0), c = async (e) => {
		if (e.preventDefault(), !L(o)) try {
			At(ag, R(n).status = !0, R(n)), await new Promise((e) => setTimeout(e, 500)), await ig();
		} catch (e) {
			console.error(e);
		} finally {
			At(ag, R(n).status = !1, R(n)), At(ag, R(n).username = "", R(n)), At(ag, R(n).password = void 0, R(n));
		}
	}, l = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class"
	]);
	var u = zg();
	W(u, (e) => ({
		class: e,
		...l
	}), [() => Z("", t.class)]);
	var d = N(u);
	Uh(N(d), {
		children: (e, t) => {
			Vh(e, {
				orientation: "horizontal",
				class: "flex flex-row items-center justify-end selection:bg-primary",
				children: (e, t) => {
					var n = Rg(), i = P(n), a = (e) => {
						var t = Lg(), n = P(t);
						{
							let e = /* @__PURE__ */ A(() => !L(s));
							Og(n, {
								get isLoading() {
									return L(o);
								},
								isAnon: !1,
								get isGuest() {
									return L(e);
								}
							});
						}
						Wh(F(n, 2), {
							class: "w-auto flex-none",
							children: (e, t) => {
								He();
								var n = Ci();
								or(() => Ei(n, r().name)), V(e, n);
							},
							$$slots: { default: !0 }
						}), V(e, t);
					};
					H(i, (e) => {
						Vm.current && e(a);
					});
					var c = F(i, 2);
					{
						let e = /* @__PURE__ */ A(() => Z({ "md:cursor-not-allowed": L(o) }));
						Rh(c, {
							type: "submit",
							get disabled() {
								return L(o);
							},
							get class() {
								return L(e);
							},
							children: (e, t) => {
								He(), V(e, Ci("Logout"));
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
	}), E(d), E(u), fi("submit", d, c), V(e, u), O(), a();
}
//#endregion
//#region src/features/auth/AuthForm.svelte
function Vg(e, t) {
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class",
		"isLoggedIn"
	]);
	var r = B(), i = P(r), a = (e) => {
		Bg(e, Wa({ get class() {
			return t.class;
		} }, () => n));
	}, o = (e) => {
		Ig(e, Wa({ get class() {
			return t.class;
		} }, () => n));
	};
	H(i, (e) => {
		t.isLoggedIn ? e(a) : e(o, -1);
	}), V(e, r);
}
//#endregion
//#region src/shared/components/layout/Header.svelte
var Hg = /* @__PURE__ */ z("<header><div class=\"fixed top-0 left-0 flex-none\"><!></div> <!> <!></header>");
function Ug(e, t) {
	D(t, !0);
	let n = to, r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"appVersion",
		"imgLogoSrc",
		"isConnected",
		"isLoggedIn",
		"class"
	]);
	var i = Hg();
	W(i, (e) => ({
		class: e,
		...r
	}), [() => Z("sticky top-0 flex w-full flex-row items-center justify-between gap-4 bg-background py-4 pr-5 pl-10 md:gap-8 md:pr-8", t.class)]);
	var a = N(i);
	Zm(N(a), { get appVersion() {
		return t.appVersion;
	} }), E(a);
	var o = F(a, 2);
	Rh(o, {
		variant: "ghost",
		size: "icon-sm",
		class: "flex-none",
		onclick: () => location.assign("/"),
		children: (e, n) => {
			Ym(e, {
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
		Vg(e, {
			class: "w-4/5 flex-initial md:w-3/5 lg:w-2/5",
			get isLoggedIn() {
				return t.isLoggedIn;
			}
		});
	}, l = (e) => {
		Rh(e, {
			class: "flex-initial",
			get onclick() {
				return n;
			},
			children: (e, t) => {
				He(), V(e, Ci("Reconnect"));
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
var Wg = (e) => (t) => {
	if (e) return e.appendChild(t), () => {
		t.parentNode && t.parentNode.removeChild(t);
	};
}, Gg = /* @__PURE__ */ z("<!> <!>", 1), Kg = /* @__PURE__ */ z("<form><!></form>");
function qg(e, t) {
	D(t, !0);
	let n = () => Dt(ag, "$authStore", r), [r, i] = Ot(), a = /* @__PURE__ */ A(() => n().username), o = /* @__PURE__ */ A(() => n().status), s = async (e) => {
		if (e.preventDefault(), !L(o)) try {
			At(ag, R(n).status = !0, R(n)), await new Promise((e) => setTimeout(e, 500)), await rg(L(a));
		} catch (e) {
			console.error(e);
		} finally {
			At(ag, R(n).status = !1, R(n)), At(ag, R(n).username = "", R(n)), At(ag, R(n).password = void 0, R(n));
		}
	}, c = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class"
	]);
	var l = Kg();
	W(l, (e) => ({
		onsubmit: s,
		class: e,
		...c
	}), [() => Z("", t.class)]), Uh(N(l), {
		children: (e, t) => {
			Vh(e, {
				orientation: "horizontal",
				class: "flex flex-row items-start justify-start gap-0",
				children: (e, t) => {
					var r = Gg(), i = P(r);
					{
						let e = /* @__PURE__ */ A(() => L(a) === "");
						Rh(i, {
							type: "submit",
							class: "flex-2 rounded-none border-none",
							get disabled() {
								return L(e);
							},
							children: (e, t) => {
								He(), V(e, Ci("Guest Login"));
							},
							$$slots: { default: !0 }
						});
					}
					Jh(F(i, 2), {
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
							At(ag, R(n).username = e, R(n));
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
function Jg(e) {
	let t = e - 1;
	return t * t * t + 1;
}
function Yg(e) {
	return --e * e * e * e * e + 1;
}
//#endregion
//#region node_modules/svelte/src/animate/index.js
function Xg(e, { from: t, to: n }, r = {}) {
	var { delay: i = 0, duration: a = (e) => Math.sqrt(e) * 120, easing: o = Jg } = r, s = getComputedStyle(e), c = s.transform === "none" ? "" : s.transform, [l, u] = s.transformOrigin.split(" ").map(parseFloat);
	l /= e.clientWidth, u /= e.clientHeight;
	var d = Zg(e), f = e.clientWidth / n.width / d, p = e.clientHeight / n.height / d, m = t.left + t.width * l, h = t.top + t.height * u, g = n.left + n.width * l, _ = n.top + n.height * u, v = (m - g) * f, y = (h - _) * p, b = t.width / n.width, x = t.height / n.height;
	return {
		delay: i,
		duration: typeof a == "function" ? a(Math.sqrt(v * v + y * y)) : a,
		easing: o,
		css: (e, t) => `transform: ${c} translate(${t * v}px, ${t * y}px) scale(${e + t * b}, ${e + t * x});`
	};
}
function Zg(e) {
	if ("currentCSSZoom" in e) return e.currentCSSZoom;
	for (var t = e, n = 1; t !== null;) n *= +getComputedStyle(t).zoom, t = t.parentElement;
	return n;
}
//#endregion
//#region node_modules/svelte/src/transition/index.js
function Qg(e) {
	return e < .5 ? 4 * e * e * e : .5 * (2 * e - 2) ** 3 + 1;
}
function $g(e) {
	let t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"];
}
function e_(e, { delay: t = 0, duration: n = 400, easing: r = Qg, amount: i = 5, opacity: a = 0 } = {}) {
	let o = getComputedStyle(e), s = +o.opacity, c = o.filter === "none" ? "" : o.filter, l = s * (1 - a), [u, d] = $g(i);
	return {
		delay: t,
		duration: n,
		easing: r,
		css: (e, t) => `opacity: ${s - l * t}; filter: ${c} blur(${t * u}${d});`
	};
}
//#endregion
//#region src/lib/components/ui/empty/empty.svelte
var t_ = /* @__PURE__ */ z("<div><!></div>");
function n_(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = t_();
	W(i, (e) => ({
		"data-slot": "empty",
		class: e,
		...r
	}), [() => Z("gap-4 rounded-xl border-dashed p-6 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance", t.class)]), U(N(i), () => t.children ?? f), E(i), za(i, (e) => n(e), () => n()), V(e, i), O();
}
//#endregion
//#region src/lib/components/ui/empty/empty-header.svelte
var r_ = /* @__PURE__ */ z("<div><!></div>");
function i_(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = r_();
	W(i, (e) => ({
		"data-slot": "empty-header",
		class: e,
		...r
	}), [() => Z("gap-2 flex max-w-sm flex-col items-center", t.class)]), U(N(i), () => t.children ?? f), E(i), za(i, (e) => n(e), () => n()), V(e, i), O();
}
//#endregion
//#region src/lib/components/ui/empty/empty-media.svelte
var a_ = Ph({
	base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
	variants: { variant: {
		default: "bg-transparent",
		icon: "bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-4"
	} },
	defaultVariants: { variant: "default" }
}), o_ = /* @__PURE__ */ z("<div><!></div>");
function s_(e, t) {
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
	var a = o_();
	W(a, (e) => ({
		"data-slot": "empty-icon",
		"data-variant": r(),
		class: e,
		...i
	}), [() => Z(a_({ variant: r() }), t.class)]), U(N(a), () => t.children ?? f), E(a), za(a, (e) => n(e), () => n()), V(e, a), O();
}
//#endregion
//#region src/lib/components/ui/empty/empty-title.svelte
var c_ = /* @__PURE__ */ z("<div><!></div>");
function l_(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = c_();
	W(i, (e) => ({
		"data-slot": "empty-title",
		class: e,
		...r
	}), [() => Z("font-heading text-sm font-medium tracking-tight", t.class)]), U(N(i), () => t.children ?? f), E(i), za(i, (e) => n(e), () => n()), V(e, i), O();
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card.svelte
function u_(e, t) {
	D(t, !0);
	let n = K(t, "open", 15, !1), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"open"
	]);
	var i = B();
	Gi(P(i), () => ep, (e, t) => {
		t(e, Wa(() => r, {
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
function d_(e, t) {
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	var r = B();
	Gi(P(r), () => Fc, (e, t) => {
		t(e, Wa(() => n));
	}), V(e, r);
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-content.svelte
function f_(e, t) {
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
	d_(e, Wa(() => t.portalProps, {
		children: (e, o) => {
			var s = B(), c = P(s);
			{
				let e = /* @__PURE__ */ A(() => Z("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground w-64 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 origin-(--transform-origin) outline-hidden", t.class));
				Gi(c, () => ap, (t, o) => {
					o(t, Wa({
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
function p_(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref"
	]);
	var i = B();
	Gi(P(i), () => sp, (e, t) => {
		t(e, Wa({ "data-slot": "hover-card-trigger" }, () => r, {
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
var m_ = /* @__PURE__ */ z("<!> <!>", 1), h_ = /* @__PURE__ */ z("<p class=\"text-sm\"> </p>"), g_ = /* @__PURE__ */ z("<div><!> <div class=\"space-y-1\"><h4 class=\"text-sm font-semibold\"> </h4> <!></div></div>");
function __(e, t) {
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
	var r = g_();
	W(r, (e) => ({
		class: e,
		...n
	}), [() => Z("flex justify-between space-x-4", t.class)]);
	var i = N(r), a = (e) => {
		Hm(e, {
			children: (e, n) => {
				var r = m_(), i = P(r);
				Um(i, { get src() {
					return t.imgSrc;
				} }), Wm(F(i, 2), {
					children: (e, t) => {
						He(), V(e, Ci("Profile Image"));
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
		var n = h_(), r = N(n, !0);
		E(n), or(() => Ei(r, t.description)), V(e, n);
	};
	H(l, (e) => {
		t.description !== "" && e(u);
	}), E(o), E(r), or(() => Ei(c, t.username)), V(e, r), O();
}
//#endregion
//#region src/features/userlist/Userlist.svelte
var v_ = "text-purple-600", y_ = "text-red-600", b_ = "text-amber-600", x_ = "text-white", S_ = "text-gray-600", C_ = (e) => e >= so.SITERADMIN ? v_ : e >= so.ADMIN ? y_ : e == so.MODERATOR ? b_ : e >= so.USER ? x_ : S_, w_ = /* @__PURE__ */ z("<li><!></li>"), T_ = /* @__PURE__ */ z("<ul class=\"no-scrollbar overflow-auto\"></ul> <!>", 1), E_ = /* @__PURE__ */ z("<!> <!>", 1), D_ = /* @__PURE__ */ z("<div><!></div>");
function O_(e, t) {
	D(t, !0);
	let n = () => Dt(mo, "$userlistStore", r), [r, i] = Ot(), a = /* @__PURE__ */ A(() => n().userlist), o = /* @__PURE__ */ A(() => L(a).length > 0), s = /* @__PURE__ */ j(null), c = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class"
	]);
	var l = D_();
	W(l, (e) => ({
		class: e,
		...c
	}), [() => Z("flex", t.class)]);
	var u = N(l), d = (e) => {
		u_(e, {
			children: (e, t) => {
				var n = T_(), r = P(n);
				zi(r, 29, () => L(a), (e) => e.name, (e, t) => {
					var n = w_();
					p_(N(n), {
						children: (e, n) => {
							He();
							var r = Ci();
							or(() => Ei(r, L(t).name)), V(e, r);
						},
						$$slots: { default: !0 }
					}), E(n), or((e) => pa(n, 1, e), [() => sa(Z(C_(L(t).rank), "font-bold"))]), fi("mouseenter", n, () => M(s, L(t), !0)), ta(n, () => Xg, () => ({
						duration: 200,
						easing: Yg
					})), na(3, n, () => e_, () => ({ duration: 200 })), V(e, n);
				}), E(r);
				var i = F(r, 2), o = (e) => {
					let t = /* @__PURE__ */ A(() => L(s).name), n = /* @__PURE__ */ A(() => L(s).profile.text), r = /* @__PURE__ */ A(() => L(s).profile.image);
					f_(e, {
						children: (e, i) => {
							__(e, {
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
		n_(e, {
			class: "flex-1",
			children: (e, t) => {
				i_(e, {
					children: (e, t) => {
						var n = E_(), r = P(n);
						s_(r, {
							variant: "icon",
							children: (e, t) => {
								Eg(e, {
									get icon() {
										return _g;
									},
									class: "size-5 motion-safe:animate-[spin_6s_linear_infinite]"
								});
							},
							$$slots: { default: !0 }
						}), l_(F(r, 2), {
							class: "select-none",
							children: (e, t) => {
								He(), V(e, Ci("No users"));
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
function k_(e) {
	return typeof e == "function";
}
function A_(e) {
	return typeof e == "object" && !!e;
}
var j_ = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function M_(e) {
	return e == null || j_.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => M_(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/box/box.svelte.js
var N_ = Symbol("box"), P_ = Symbol("is-writable");
function F_(e) {
	return A_(e) && N_ in e;
}
function I_(e) {
	return Q.isBox(e) && P_ in e;
}
function Q(e) {
	let t = /* @__PURE__ */ j(En(e));
	return {
		[N_]: !0,
		[P_]: !0,
		get current() {
			return L(t);
		},
		set current(e) {
			M(t, e, !0);
		}
	};
}
function L_(e, t) {
	let n = /* @__PURE__ */ A(e);
	return t ? {
		[N_]: !0,
		[P_]: !0,
		get current() {
			return L(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[N_]: !0,
		get current() {
			return e();
		}
	};
}
function R_(e) {
	return Q.isBox(e) ? e : k_(e) ? Q.with(e) : Q(e);
}
function z_(e) {
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
function B_(e) {
	return Q.isWritableBox(e) ? {
		[N_]: !0,
		get current() {
			return e.current;
		}
	} : e;
}
Q.from = R_, Q.with = L_, Q.flatten = z_, Q.readonly = B_, Q.isBox = F_, Q.isWritableBox = I_;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
function V_(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/strings.js
var H_ = /\d/, U_ = [
	"-",
	"_",
	"/",
	"."
];
function W_(e = "") {
	if (!H_.test(e)) return e !== e.toLowerCase();
}
function G_(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = U_.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = W_(a);
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
function K_(e) {
	return e ? G_(e).map((e) => J_(e)).join("") : "";
}
function q_(e) {
	return Y_(K_(e || ""));
}
function J_(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function Y_(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function X_(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[K_(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[q_(e)] = n;
	}
	return is(e, n), t;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
function Z_(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/events.js
function Q_(e, t, n, r) {
	let i = Array.isArray(t) ? t : [t];
	return i.forEach((t) => e.addEventListener(t, n, r)), () => {
		i.forEach((t) => e.removeEventListener(t, n, r));
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function $_(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var ev = $_(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function tv(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${ev(t)}: ${e[t]};`).join("\n");
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/style.js
function nv(e = {}) {
	return tv(e).replace("\n", " ");
}
nv({
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
var rv = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/merge-props.js
function iv(e) {
	return rv.has(e);
}
function av(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
				if (a && typeof o && iv(e)) t[e] = V_(n, i);
				else if (a && o) t[e] = Z_(n, i);
				else if (e === "class") {
					let r = M_(n), a = M_(i);
					r && a ? t[e] = oa(n, i) : r ? t[e] = oa(n) : a && (t[e] = oa(i));
				} else if (e === "style") {
					let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
					if (r && a) t[e] = {
						...n,
						...i
					};
					else if (r && s) {
						let r = X_(i);
						t[e] = {
							...n,
							...r
						};
					} else if (o && a) t[e] = {
						...X_(n),
						...i
					};
					else if (o && s) {
						let r = X_(n), a = X_(i);
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
	return typeof t.style == "object" && (t.style = nv(t.style).replaceAll("\n", " ")), t.hidden !== !0 && (t.hidden = void 0, delete t.hidden), t.disabled !== !0 && (t.disabled = void 0, delete t.disabled), t;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/internal/configurable-globals.js
var ov = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/internal/utils/dom.js
function sv(e) {
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
		let { window: t = ov, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = $t((e) => {
			let n = di(t, "focusin", e), r = di(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? sv(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/utilities/watch/watch.svelte.js
function cv(e, t) {
	switch (e) {
		case "post":
			Qn(t);
			break;
		case "pre":
			er(t);
			break;
	}
}
function lv(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	cv(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = R(() => n(t, o));
		return o = t, r;
	});
}
function uv(e, t, n) {
	let r = tr(() => {
		let i = !1;
		lv(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Qn(() => r);
}
function dv(e, t, n) {
	lv(e, "post", t, n);
}
function fv(e, t, n) {
	lv(e, "pre", t, n);
}
dv.pre = fv;
function pv(e, t) {
	uv(e, "post", t);
}
function mv(e, t) {
	uv(e, "pre", t);
}
pv.pre = mv;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/utilities/resource/resource.svelte.js
function hv(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function gv(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function _v(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ j(En(o)), u = /* @__PURE__ */ j(!1), d = /* @__PURE__ */ j(void 0), f = /* @__PURE__ */ j(En([])), p = () => {
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
	}, g = s ? hv(h, s) : c ? gv(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
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
function vv(e, t, n) {
	return _v(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		dv(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function yv(e, t, n) {
	return _v(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		dv.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
vv.pre = yv;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/after-tick.js
function bv(e) {
	Kr().then(e);
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/dom.js
var xv = 9;
function Sv(e) {
	return A_(e) && e.nodeType === xv;
}
function Cv(e) {
	return A_(e) && e.constructor?.name === "VisualViewport";
}
function wv(e) {
	return Sv(e) ? e : Cv(e) ? e.document : e?.ownerDocument ?? document;
}
function Tv(e) {
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
var Ev = class {
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
	getDocument = () => wv(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => Tv(this.root);
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
function Dv(e, t) {
	return { [Zr()]: (n) => Q.isBox(e) ? (e.current = n, R(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), R(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/aria.js
function Ov({ layout: e, panesArray: t, pivotIndices: n }) {
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
function kv(e, t = "Assertion failed!") {
	if (!e) throw console.error(t), Error(t);
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/compare.js
function Av(e, t, n = 10) {
	return jv(e, t, n) === 0;
}
function jv(e, t, n = 10) {
	let r = Nv(e, n), i = Nv(t, n);
	return Math.sign(r - i);
}
function Mv(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Nv(e, t) {
	return Number.parseFloat(e.toFixed(t));
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/is.js
var Pv = typeof document < "u";
function Fv(e) {
	return e instanceof HTMLElement;
}
function Iv(e) {
	return e.type === "keydown";
}
function Lv(e) {
	return e.type.startsWith("mouse");
}
function Rv(e) {
	return e.type.startsWith("touch");
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/resize.js
function zv({ paneConstraints: e, paneIndex: t, initialSize: n }) {
	let r = e[t];
	kv(r != null, "Pane constraints should not be null.");
	let { collapsedSize: i = 0, collapsible: a, maxSize: o = 100, minSize: s = 0 } = r, c = n;
	return jv(c, s) < 0 && (c = Bv(c, a, i, s)), c = Math.min(o, c), Number.parseFloat(c.toFixed(10));
}
function Bv(e, t, n, r) {
	return t && jv(e, (n + r) / 2) < 0 ? n : r;
}
//#endregion
//#region node_modules/paneforge/dist/internal/helpers.js
function Vv() {}
function Hv({ groupId: e, layout: t, panesArray: n, domContext: r }) {
	let i = Uv(e, r);
	for (let e = 0; e < n.length - 1; e++) {
		let { valueMax: r, valueMin: a, valueNow: o } = Ov({
			layout: t,
			panesArray: n,
			pivotIndices: [e, e + 1]
		}), s = i[e];
		if (Fv(s)) {
			let t = n[e];
			s.setAttribute("aria-controls", t.opts.id.current), s.setAttribute("aria-valuemax", `${Math.round(r)}`), s.setAttribute("aria-valuemin", `${Math.round(a)}`), s.setAttribute("aria-valuenow", o == null ? "" : `${Math.round(o)}`);
		}
	}
	return () => {
		for (let e of i) e.removeAttribute("aria-controls"), e.removeAttribute("aria-valuemax"), e.removeAttribute("aria-valuemin"), e.removeAttribute("aria-valuenow");
	};
}
function Uv(e, t) {
	return Pv ? Array.from(t.querySelectorAll(`[data-pane-resizer-id][data-pane-group-id="${e}"]`)) : [];
}
function Wv({ groupId: e, id: t, domContext: n }) {
	return Pv ? Uv(e, n).findIndex((e) => e.getAttribute("data-pane-resizer-id") === t) ?? null : null;
}
function Gv({ groupId: e, dragHandleId: t, domContext: n }) {
	let r = Wv({
		groupId: e,
		id: t,
		domContext: n
	});
	return r == null ? [-1, -1] : [r, r + 1];
}
function Kv(e, t, n) {
	let r = e.map((e) => e.constraints), i = qv(e, t), a = r[i], o = i === e.length - 1 ? [i - 1, i] : [i, i + 1], s = n[i];
	return {
		...a,
		paneSize: s,
		pivotIndices: o
	};
}
function qv(e, t) {
	return e.findIndex((e) => e.opts.id.current === t.opts.id.current);
}
function Jv(e, t, n) {
	for (let r = 0; r < t.length; r++) {
		let i = t[r], a = e[r];
		kv(a);
		let { collapsedSize: o = 0, collapsible: s } = a.constraints, c = n[a.opts.id.current];
		if (!(c == null || i !== c)) continue;
		n[a.opts.id.current] = i;
		let { onCollapse: l, onExpand: u, onResize: d } = a.callbacks;
		d?.(i, c), s && (l || u) && (u && (c == null || c === o) && i !== o && u(), l && (c == null || c !== o) && i === o && l());
	}
}
function Yv({ panesArray: e }) {
	let t = Array(e.length), n = e.map((e) => e.constraints), r = 0, i = 100;
	for (let a = 0; a < e.length; a++) {
		let e = n[a];
		kv(e);
		let { defaultSize: o } = e;
		o != null && (r++, t[a] = o, i -= o);
	}
	for (let a = 0; a < e.length; a++) {
		let o = n[a];
		kv(o);
		let { defaultSize: s } = o;
		if (s != null) continue;
		let c = e.length - r, l = i / c;
		r++, t[a] = l, i -= l;
	}
	return t;
}
function Xv({ layout: e, paneConstraints: t }) {
	let n = [...e], r = n.reduce((e, t) => e + t, 0);
	if (n.length !== t.length) throw Error(`Invalid ${t.length} pane layout: ${n.map((e) => `${e}%`).join(", ")}`);
	if (!Av(r, 100)) for (let e = 0; e < t.length; e++) {
		let t = n[e];
		kv(t != null), n[e] = 100 / r * t;
	}
	let i = 0;
	for (let e = 0; e < t.length; e++) {
		let r = n[e];
		kv(r != null);
		let a = zv({
			paneConstraints: t,
			paneIndex: e,
			initialSize: r
		});
		r !== a && (i += r - a, n[e] = a);
	}
	if (!Av(i, 0)) for (let e = 0; e < t.length; e++) {
		let r = n[e];
		kv(r != null);
		let a = r + i, o = zv({
			paneConstraints: t,
			paneIndex: e,
			initialSize: a
		});
		if (r !== o && (i -= o - r, n[e] = o, Av(i, 0))) break;
	}
	return n;
}
function Zv(e, t) {
	return Pv && t.querySelector(`[data-pane-group][data-pane-group-id="${e}"]`) || null;
}
function Qv(e, t) {
	return Pv && t.querySelector(`[data-pane-resizer-id="${e}"]`) || null;
}
function $v({ event: e, dragHandleId: t, dir: n, initialDragState: r, domContext: i }) {
	let a = n === "horizontal", o = Qv(t, i);
	kv(o);
	let s = o.getAttribute("data-pane-group-id");
	kv(s);
	let { initialCursorPosition: c } = r, l = ty(n, e), u = Zv(s, i);
	kv(u);
	let d = u.getBoundingClientRect(), f = a ? d.width : d.height;
	return (l - c) / f * 100;
}
function ey({ event: e, dragHandleId: t, dir: n, initialDragState: r, keyboardResizeBy: i, domContext: a }) {
	if (Iv(e)) {
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
	} else return r == null ? 0 : $v({
		event: e,
		dragHandleId: t,
		dir: n,
		initialDragState: r,
		domContext: a
	});
}
function ty(e, t) {
	let n = e === "horizontal";
	if (Lv(t)) return n ? t.clientX : t.clientY;
	if (Rv(t)) {
		let e = t.touches[0];
		return kv(e), n ? e.screenX : e.screenY;
	} else throw Error(`Unsupported event type "${t.type}"`);
}
function ny({ groupId: e, handleId: t, panesArray: n, domContext: r }) {
	let i = Qv(t, r), a = Uv(e, r), o = i ? a.indexOf(i) : -1;
	return [n[o]?.opts.id.current ?? null, n[o + 1]?.opts.id.current ?? null];
}
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/internal/configurable-globals.js
var ry = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/internal/utils/dom.js
function iy(e) {
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
		let { window: t = ry, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = $t((e) => {
			let n = di(t, "focusin", e), r = di(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? iy(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/utilities/watch/watch.svelte.js
function ay(e, t) {
	switch (e) {
		case "post":
			Qn(t);
			break;
		case "pre":
			er(t);
			break;
	}
}
function oy(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	ay(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = R(() => n(t, o));
		return o = t, r;
	});
}
function sy(e, t, n) {
	let r = tr(() => {
		let i = !1;
		oy(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Qn(() => r);
}
function cy(e, t, n) {
	oy(e, "post", t, n);
}
function ly(e, t, n) {
	oy(e, "pre", t, n);
}
cy.pre = ly;
function uy(e, t) {
	sy(e, "post", t);
}
function dy(e, t) {
	sy(e, "pre", t);
}
uy.pre = dy;
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/utilities/context/context.js
var fy = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return it(this.#t);
	}
	get() {
		let e = nt(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = nt(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return rt(this.#t, e);
	}
};
//#endregion
//#region node_modules/paneforge/dist/internal/utils/adjust-layout.js
function py({ delta: e, layout: t, paneConstraints: n, pivotIndices: r, trigger: i }) {
	if (Av(e, 0)) return t;
	let a = [...t], [o, s] = r, c = 0;
	if (i === "keyboard") {
		{
			let r = e < 0 ? s : o, i = n[r];
			if (kv(i), i.collapsible) {
				let i = t[r];
				kv(i != null);
				let a = n[r];
				kv(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (Av(i, o)) {
					let t = s - i;
					jv(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
		{
			let r = e < 0 ? o : s, i = n[r];
			kv(i);
			let { collapsible: a } = i;
			if (a) {
				let i = t[r];
				kv(i != null);
				let a = n[r];
				kv(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (Av(i, s)) {
					let t = i - o;
					jv(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
	}
	{
		let r = e < 0 ? 1 : -1, i = e < 0 ? s : o, a = 0;
		for (;;) {
			let e = t[i];
			kv(e != null);
			let o = zv({
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
			kv(o != null);
			let s = o - i, l = zv({
				paneConstraints: n,
				paneIndex: r,
				initialSize: s
			});
			if (!Av(o, l) && (c += o - l, a[r] = l, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, { numeric: !0 }) >= 0)) break;
			e < 0 ? r-- : r++;
		}
	}
	if (Av(c, 0)) return t;
	{
		let r = e < 0 ? s : o, i = t[r];
		kv(i != null);
		let l = i + c, u = zv({
			paneConstraints: n,
			paneIndex: r,
			initialSize: l
		});
		if (a[r] = u, !Av(u, l)) {
			let t = l - u, r = e < 0 ? s : o;
			for (; r >= 0 && r < n.length;) {
				let i = a[r];
				kv(i != null);
				let o = i + t, s = zv({
					paneConstraints: n,
					paneIndex: r,
					initialSize: o
				});
				if (Av(i, s) || (t -= s - i, a[r] = s), Av(t, 0)) break;
				e > 0 ? r-- : r++;
			}
		}
	}
	return Av(a.reduce((e, t) => t + e, 0), 100) ? a : t;
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/style.js
var my = null, hy = null;
function gy(e) {
	switch (e) {
		case "horizontal": return "ew-resize";
		case "horizontal-max": return "w-resize";
		case "horizontal-min": return "e-resize";
		case "vertical": return "ns-resize";
		case "vertical-max": return "n-resize";
		case "vertical-min": return "s-resize";
	}
}
function _y() {
	hy !== null && (document.head.removeChild(hy), my = null, hy = null);
}
function vy(e, t) {
	if (my === e) return;
	my = e;
	let n = gy(e);
	hy === null && (hy = t.createElement("style"), t.head.appendChild(hy)), hy.innerHTML = `*{cursor: ${n}!important;}`;
}
function yy({ defaultSize: e, dragState: t, layout: n, panesArray: r, paneIndex: i, precision: a = 3 }) {
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
function by(e) {
	try {
		if (typeof localStorage > "u") throw TypeError("localStorage is not supported in this environment");
		e.getItem = (e) => localStorage.getItem(e), e.setItem = (e, t) => localStorage.setItem(e, t);
	} catch (t) {
		console.error(t), e.getItem = () => null, e.setItem = () => {};
	}
}
function xy(e) {
	return `paneforge:${e}`;
}
function Sy(e) {
	return e.map((e) => e.opts.order.current ? `${e.opts.order.current}:${JSON.stringify(e.constraints)}` : JSON.stringify(e.constraints)).sort().join(",");
}
function Cy(e, t) {
	try {
		let n = xy(e), r = t.getItem(n), i = JSON.parse(r || "");
		if (typeof i == "object" && i) return i;
	} catch {}
	return null;
}
function wy(e, t, n) {
	return (Cy(e, n) || {})[Sy(t)] || null;
}
function Ty(e, t, n, r, i) {
	let a = xy(e), o = Sy(t), s = Cy(e, i) || {};
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
var Ey = {};
function Dy(e, t = 10) {
	let n = null;
	return (...r) => {
		n !== null && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
}
function Oy({ autoSaveId: e, layout: t, storage: n, panesArray: r, paneSizeBeforeCollapse: i }) {
	if (t.length === 0 || t.length !== r.length) return;
	let a = Ey[e];
	a ?? (a = Dy(Ty, 100), Ey[e] = a);
	let o = [...r], s = new Map(i);
	a(e, o, s, t, n);
}
//#endregion
//#region node_modules/paneforge/dist/paneforge.svelte.js
var ky = {
	getItem: (e) => (by(ky), ky.getItem(e)),
	setItem: (e, t) => {
		by(ky), ky.setItem(e, t);
	}
}, Ay = new fy("PaneGroup"), jy = class e {
	static create(t) {
		return Ay.set(new e(t));
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
	#i = /* @__PURE__ */ j(En({}));
	get paneIdToLastNotifiedSizeMap() {
		return L(this.#i);
	}
	set paneIdToLastNotifiedSizeMap(e) {
		M(this.#i, e, !0);
	}
	paneSizeBeforeCollapseMap = /* @__PURE__ */ new Map();
	prevDelta = 0;
	constructor(e) {
		this.opts = e, this.attachment = Dv(this.opts.ref), this.domContext = new Ev(this.opts.ref), cy([
			() => this.opts.id.current,
			() => this.layout,
			() => this.panesArray
		], () => Hv({
			groupId: this.opts.id.current,
			layout: this.layout,
			panesArray: this.panesArray,
			domContext: this.domContext
		})), Qn(() => R(() => this.#a())), cy([
			() => this.opts.autoSaveId.current,
			() => this.layout,
			() => this.opts.storage.current
		], () => {
			this.opts.autoSaveId.current && Oy({
				autoSaveId: this.opts.autoSaveId.current,
				layout: this.layout,
				storage: this.opts.storage.current,
				panesArray: this.panesArray,
				paneSizeBeforeCollapse: this.paneSizeBeforeCollapseMap
			});
		}), cy(() => this.panesArrayChanged, () => {
			if (!this.panesArrayChanged) return;
			this.panesArrayChanged = !1;
			let e = this.layout, t = null;
			if (this.opts.autoSaveId.current) {
				let e = wy(this.opts.autoSaveId.current, this.panesArray, this.opts.storage.current);
				e && (this.paneSizeBeforeCollapseMap = new Map(Object.entries(e.expandToSizes)), t = e.layout);
			}
			t ??= Yv({ panesArray: this.panesArray });
			let n = Xv({
				layout: t,
				paneConstraints: this.panesArray.map((e) => e.constraints)
			});
			Mv(e, n) || (this.layout = n, this.opts.onLayout.current?.(n), Jv(this.panesArray, n, this.paneIdToLastNotifiedSizeMap));
		});
	}
	setLayout = (e) => {
		this.layout = e;
	};
	registerResizeHandle = (e) => (t) => {
		t.preventDefault();
		let n = this.opts.direction.current, r = this.dragState, i = this.opts.id.current, a = this.opts.keyboardResizeBy.current, o = this.layout, s = this.panesArray, { initialLayout: c } = r ?? {}, l = this.domContext.getDocument(), u = Gv({
			groupId: i,
			dragHandleId: e,
			domContext: this.domContext
		}), d = ey({
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
		let p = s.map((e) => e.constraints), m = py({
			delta: d,
			layout: c ?? o,
			paneConstraints: p,
			pivotIndices: u,
			trigger: Iv(t) ? "keyboard" : "mouse-or-touch"
		}), h = !Mv(o, m);
		(Lv(t) || Rv(t)) && this.prevDelta !== d && (this.prevDelta = d, vy(h ? f ? "horizontal" : "vertical" : f ? d < 0 ? "horizontal-min" : "horizontal-max" : d < 0 ? "vertical-min" : "vertical-max", l)), h && (this.setLayout(m), this.opts.onLayout.current?.(m), Jv(s, m, this.paneIdToLastNotifiedSizeMap));
	};
	resizePane = (e, t) => {
		let n = this.layout, r = this.panesArray, i = r.map((e) => e.constraints), { paneSize: a, pivotIndices: o } = Kv(r, e, n);
		kv(a != null);
		let s = py({
			delta: qv(r, e) === r.length - 1 ? a - t : t - a,
			layout: n,
			paneConstraints: i,
			pivotIndices: o,
			trigger: "imperative-api"
		});
		Mv(n, s) || (this.setLayout(s), this.opts.onLayout.current?.(s), Jv(r, s, this.paneIdToLastNotifiedSizeMap));
	};
	startDragging = (e, t) => {
		let n = this.opts.direction.current, r = this.layout, i = Qv(e, this.domContext);
		kv(i);
		let a = ty(n, t);
		this.dragState = {
			dragHandleId: e,
			dragHandleRect: i.getBoundingClientRect(),
			initialCursorPosition: a,
			initialLayout: r
		};
	};
	stopDragging = () => {
		_y(), this.dragState = null;
	};
	isPaneCollapsed = (e) => {
		let t = this.panesArray, n = this.layout, { collapsedSize: r = 0, collapsible: i, paneSize: a } = Kv(t, e, n);
		return typeof a != "number" || typeof r != "number" ? !1 : i === !0 && Av(a, r);
	};
	expandPane = (e) => {
		let t = this.layout, n = this.panesArray;
		if (!e.constraints.collapsible) return;
		let r = n.map((e) => e.constraints), { collapsedSize: i = 0, paneSize: a, minSize: o = 0, pivotIndices: s } = Kv(n, e, t);
		if (a !== i) return;
		let c = this.paneSizeBeforeCollapseMap.get(e.opts.id.current), l = c != null && c >= o ? c : o, u = py({
			delta: qv(n, e) === n.length - 1 ? a - l : l - a,
			layout: t,
			paneConstraints: r,
			pivotIndices: s,
			trigger: "imperative-api"
		});
		Mv(t, u) || (this.setLayout(u), this.opts.onLayout.current?.(u), Jv(n, u, this.paneIdToLastNotifiedSizeMap));
	};
	collapsePane = (e) => {
		let t = this.layout, n = this.panesArray;
		if (!e.constraints.collapsible) return;
		let r = n.map((e) => e.constraints), { collapsedSize: i = 0, paneSize: a, pivotIndices: o } = Kv(n, e, t);
		if (kv(a != null), a === i) return;
		this.paneSizeBeforeCollapseMap.set(e.opts.id.current, a);
		let s = py({
			delta: qv(n, e) === n.length - 1 ? a - i : i - a,
			layout: t,
			paneConstraints: r,
			pivotIndices: o,
			trigger: "imperative-api"
		});
		Mv(t, s) || (this.layout = s, this.opts.onLayout.current?.(s), Jv(n, s, this.paneIdToLastNotifiedSizeMap));
	};
	getPaneSize = (e) => Kv(this.panesArray, e, this.layout).paneSize;
	getPaneStyle = (e, t) => {
		let n = this.panesArray, r = this.layout, i = this.dragState;
		return yy({
			defaultSize: t,
			dragState: i,
			layout: r,
			panesArray: n,
			paneIndex: qv(n, e)
		});
	};
	isPaneExpanded = (e) => {
		let { collapsedSize: t = 0, collapsible: n, paneSize: r } = Kv(this.panesArray, e, this.layout);
		return !n || r > t;
	};
	registerPane = (e) => {
		let t = [...this.panesArray, e];
		return t.sort((e, t) => {
			let n = e.opts.order.current, r = t.opts.order.current;
			return n == null && r == null ? 0 : n == null ? -1 : r == null ? 1 : n - r;
		}), this.panesArray = t, this.panesArrayChanged = !0, () => {
			let t = [...this.panesArray], n = qv(this.panesArray, e);
			n < 0 || (t.splice(n, 1), this.panesArray = t, delete this.paneIdToLastNotifiedSizeMap[e.opts.id.current], this.panesArrayChanged = !0);
		};
	};
	#a = () => {
		let e = this.opts.id.current, t = Uv(e, this.domContext), n = this.panesArray, r = t.map((t) => {
			let r = t.getAttribute("data-pane-resizer-id");
			if (!r) return Vv;
			let [i, a] = ny({
				groupId: e,
				handleId: r,
				panesArray: n,
				domContext: this.domContext
			});
			if (i == null || a == null) return Vv;
			let o = Q_(t, "keydown", (t) => {
				if (t.defaultPrevented || t.key !== "Enter") return;
				t.preventDefault();
				let n = this.panesArray, a = n.findIndex((e) => e.opts.id.current === i);
				if (a < 0) return;
				let o = n[a];
				kv(o);
				let s = this.layout, c = s[a], { collapsedSize: l = 0, collapsible: u, minSize: d = 0 } = o.constraints;
				if (!(c != null && u)) return;
				let f = py({
					delta: Av(c, l) ? d - c : l - c,
					layout: s,
					paneConstraints: n.map((e) => e.constraints),
					pivotIndices: Gv({
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
}, My = [
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"End",
	"Home"
], Ny = class e {
	static create(t) {
		return new e(t, Ay.get());
	}
	opts;
	#e;
	attachment;
	domContext;
	#t = /* @__PURE__ */ A(() => this.#e.dragState?.dragHandleId === this.opts.id.current);
	#n = /* @__PURE__ */ j(!1);
	resizeHandler = null;
	constructor(e, t) {
		this.opts = e, this.#e = t, this.attachment = Dv(this.opts.ref), this.domContext = new Ev(this.opts.ref), Qn(() => {
			this.opts.disabled.current ? this.resizeHandler = null : this.resizeHandler = this.#e.registerResizeHandle(this.opts.id.current);
		}), Qn(() => {
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
			return Z_(di(s, "contextmenu", o), di(s, "mousemove", i), di(s, "touchmove", i, { passive: !1 }), di(s, "mouseleave", a), di(c, "mouseup", o), di(c, "touchend", o));
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
		if (My.includes(e.key)) {
			e.preventDefault(), this.resizeHandler(e);
			return;
		}
		if (e.key !== "F6") return;
		e.preventDefault();
		let t = Uv(this.#e.opts.id.current, this.domContext), n = Wv({
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
			cursor: gy(this.#e.opts.direction.current),
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
}, Py = class e {
	static create(t) {
		return new e(t, Ay.get());
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
		M(this.#e, e, !0), bv(() => {
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
		this.opts = e, this.group = t, this.attachment = Dv(this.opts.ref), this.domContext = new Ev(this.opts.ref), Ga(() => this.group.registerPane(this)), cy(() => Qe(this.constraints), () => {
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
}, Fy = /* @__PURE__ */ z("<div><!></div>");
function Iy(e, t) {
	let n = wi();
	D(t, !0);
	let r = K(t, "autoSaveId", 3, null), i = K(t, "id", 3, n), a = K(t, "keyboardResizeBy", 3, null), o = K(t, "onLayoutChange", 3, Vv), s = K(t, "storage", 3, ky), c = K(t, "ref", 15, null), l = /* @__PURE__ */ G(t, [
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
	]), u = jy.create({
		id: Q.with(() => i() ?? n),
		ref: Q.with(() => c(), (e) => c(e)),
		autoSaveId: Q.with(() => r()),
		direction: Q.with(() => t.direction),
		keyboardResizeBy: Q.with(() => a()),
		onLayout: Q.with(() => o()),
		storage: Q.with(() => s())
	}), d = () => u.layout, p = u.setLayout, m = () => u.opts.id.current, h = /* @__PURE__ */ A(() => av(l, u.props));
	var g = {
		getLayout: d,
		setLayout: p,
		getId: m
	}, _ = B(), v = P(_), y = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(h) })), V(e, n);
	}, b = (e) => {
		var n = Fy();
		W(n, () => ({ ...L(h) })), U(N(n), () => t.children ?? f), E(n), V(e, n);
	};
	return H(v, (e) => {
		t.child ? e(y) : e(b, -1);
	}), V(e, _), O(g);
}
//#endregion
//#region node_modules/paneforge/dist/components/pane.svelte
var Ly = /* @__PURE__ */ z("<div><!></div>");
function Ry(e, t) {
	let n = wi();
	D(t, !0);
	let r = K(t, "id", 3, n), i = K(t, "ref", 15, null), a = K(t, "onCollapse", 3, Vv), o = K(t, "onExpand", 3, Vv), s = K(t, "onResize", 3, Vv), c = /* @__PURE__ */ G(t, [
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
	]), l = Py.create({
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
	}), u = l.pane.collapse, d = l.pane.expand, p = l.pane.getSize, m = l.pane.isCollapsed, h = l.pane.isExpanded, g = l.pane.resize, _ = l.pane.getId, v = /* @__PURE__ */ A(() => av(c, l.props));
	var y = {
		collapse: u,
		expand: d,
		getSize: p,
		isCollapsed: m,
		isExpanded: h,
		resize: g,
		getId: _
	}, b = B(), x = P(b), ee = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(v) })), V(e, n);
	}, te = (e) => {
		var n = Ly();
		W(n, () => ({ ...L(v) })), U(N(n), () => t.children ?? f), E(n), V(e, n);
	};
	return H(x, (e) => {
		t.child ? e(ee) : e(te, -1);
	}), V(e, b), O(y);
}
//#endregion
//#region node_modules/paneforge/dist/components/pane-resizer.svelte
var zy = /* @__PURE__ */ z("<div><!></div>");
function By(e, t) {
	let n = wi();
	D(t, !0);
	let r = K(t, "id", 3, n), i = K(t, "ref", 15, null), a = K(t, "disabled", 3, !1), o = K(t, "onDraggingChange", 3, Vv), s = K(t, "tabindex", 3, 0), c = /* @__PURE__ */ G(t, [
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
	]), l = Ny.create({
		id: Q.with(() => r()),
		ref: Q.with(() => i(), (e) => i(e)),
		disabled: Q.with(() => a()),
		onDraggingChange: Q.with(() => o()),
		tabIndex: Q.with(() => s())
	}), u = /* @__PURE__ */ A(() => av(c, l.props));
	var d = B(), p = P(d), m = (e) => {
		var n = B();
		U(P(n), () => t.child, () => ({ props: L(u) })), V(e, n);
	}, h = (e) => {
		var n = zy();
		W(n, () => ({ ...L(u) })), U(N(n), () => t.children ?? f), E(n), V(e, n);
	};
	H(p, (e) => {
		t.child ? e(m) : e(h, -1);
	}), V(e, d), O();
}
//#endregion
//#region src/lib/components/ui/resizable/resizable-handle.svelte
var Vy = /* @__PURE__ */ z("<div class=\"bg-border h-6 w-1 rounded-lg z-10 flex shrink-0\"></div>");
function Hy(e, t) {
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
		Gi(o, () => By, (t, a) => {
			a(t, Wa({
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
						V(e, Vy());
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
function Uy(e, t) {
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
		Gi(o, () => Iy, (t, a) => {
			za(a(t, Wa({
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
var Wy = /* @__PURE__ */ z("<!> <!> <!>", 1);
function Gy(e, t) {
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
		Uy(e, Wa({
			direction: "vertical",
			get class() {
				return L(a);
			}
		}, () => i, {
			children: (e, i) => {
				Ry(e, {
					collapsible: !1,
					defaultSize: 80,
					class: "flex",
					children: (e, i) => {
						Uy(e, {
							direction: "horizontal",
							children: (e, i) => {
								var a = Wy(), o = P(a);
								{
									let e = /* @__PURE__ */ A(() => t.reversed ? 20 : 80), r = /* @__PURE__ */ A(() => t.reversed ? 30 : 100);
									Ry(o, {
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
								Hy(s, { withHandle: !0 });
								var c = F(s, 2);
								{
									let e = /* @__PURE__ */ A(() => t.reversed ? 80 : 20), n = /* @__PURE__ */ A(() => t.reversed ? 100 : 30);
									Ry(c, {
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
var Ky = /* @__PURE__ */ z("<div><!></div>");
function qy(e, t) {
	D(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Ky();
	W(i, (e) => ({
		"data-slot": "input-group",
		role: "group",
		class: e,
		...r
	}), [() => Z("group/input-group border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-input/50 dark:has-disabled:bg-input/80 h-8 rounded-lg border transition-colors in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-3 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto", t.class)]), U(N(i), () => t.children ?? f), E(i), za(i, (e) => n(e), () => n()), V(e, i), O();
}
//#endregion
//#region src/lib/components/ui/input-group/input-group-addon.svelte
var Jy = Ph({
	base: "text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none",
	variants: { align: {
		"inline-start": "pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first",
		"inline-end": "pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last",
		"block-start": "px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start",
		"block-end": "px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start"
	} },
	defaultVariants: { align: "inline-start" }
}), Yy = /* @__PURE__ */ z("<div><!></div>");
function Xy(e, t) {
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
	var a = Yy(), o = (e) => {
		e.target.closest("button") || e.currentTarget.parentElement?.querySelector("input")?.focus();
	};
	W(a, (e) => ({
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": r(),
		class: e,
		onclick: o,
		...i
	}), [() => Z(Jy({ align: r() }), t.class)]), U(N(a), () => t.children ?? f), E(a), za(a, (e) => n(e), () => n()), V(e, a), O();
}
//#endregion
//#region src/lib/components/ui/input-group/input-group-button.svelte
var Zy = Ph({
	base: "gap-2 text-sm flex items-center shadow-none",
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
		sm: "cn-input-group-button-size-sm",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-8 p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
});
function Qy(e, t) {
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
		let s = /* @__PURE__ */ A(() => Z(Zy({ size: a() }), t.class));
		Rh(e, Wa({
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
				U(P(r), () => t.children ?? f), V(e, r);
			},
			$$slots: { default: !0 }
		}));
	}
	O();
}
//#endregion
//#region src/features/chat/ChatForm.svelte
var $y = /* @__PURE__ */ z("<!> <!>", 1), eb = /* @__PURE__ */ z("<!> <!>", 1), tb = /* @__PURE__ */ z("<!> <!>", 1), nb = /* @__PURE__ */ z("<!> <!> <!> <!>", 1), rb = /* @__PURE__ */ z("<textarea data-slot=\"input-group-control\" class=\"flex field-sizing-fixed h-full w-full flex-1 resize-none rounded-none border-none bg-transparent px-4 py-2 text-base ring-0 outline-none\" placeholder=\"Chat message\"></textarea> <!>", 1), ib = /* @__PURE__ */ z("<form><!></form>");
function ab(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ j(""), r = (e) => {
		e.preventDefault(), console.log(L(n)), M(n, "");
	}, i = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class"
	]);
	var a = ib();
	W(a, (e) => ({
		onsubmit: r,
		class: e,
		...i
	}), [() => Z("flex", t.class)]), qy(N(a), {
		class: "flex h-full flex-1 flex-col justify-end rounded-none border-none",
		children: (e, t) => {
			var r = rb(), i = P(r);
			Hn(i), Xy(F(i, 2), {
				align: "block-end",
				class: "flex flex-row justify-end",
				children: (e, t) => {
					var n = nb(), r = P(n);
					{
						let e = /* @__PURE__ */ A(() => Vm.current ? "sm" : "icon-sm");
						Qy(r, {
							get size() {
								return L(e);
							},
							variant: "outline",
							type: "button",
							children: (e, t) => {
								var n = $y(), r = P(n);
								Eg(r, {
									get icon() {
										return dg;
									},
									class: "size-5"
								});
								var i = F(r, 2), a = (e) => {
									V(e, Ci("Files"));
								};
								H(i, (e) => {
									Vm.current && e(a);
								}), V(e, n);
							},
							$$slots: { default: !0 }
						});
					}
					var i = F(r, 2);
					{
						let e = /* @__PURE__ */ A(() => Vm.current ? "sm" : "icon-sm");
						Qy(i, {
							class: "ms-auto",
							get size() {
								return L(e);
							},
							variant: "outline",
							type: "button",
							children: (e, t) => {
								var n = eb(), r = P(n);
								Eg(r, {
									get icon() {
										return pg;
									},
									class: "size-5"
								});
								var i = F(r, 2), a = (e) => {
									V(e, Ci("Emotes"));
								};
								H(i, (e) => {
									Vm.current && e(a);
								}), V(e, n);
							},
							$$slots: { default: !0 }
						});
					}
					var a = F(i, 2);
					Gh(a, { orientation: "vertical" });
					var o = F(a, 2);
					{
						let e = /* @__PURE__ */ A(() => Vm.current ? "sm" : "icon-sm");
						Qy(o, {
							get size() {
								return L(e);
							},
							variant: "default",
							type: "submit",
							children: (e, t) => {
								var n = tb(), r = P(n);
								Eg(r, {
									get icon() {
										return gg;
									},
									class: "size-5"
								});
								var i = F(r, 2), a = (e) => {
									V(e, Ci("Send"));
								};
								H(i, (e) => {
									Vm.current && e(a);
								}), V(e, n);
							},
							$$slots: { default: !0 }
						});
					}
					V(e, n);
				},
				$$slots: { default: !0 }
			}), Pa(i, () => L(n), (e) => M(n, e)), V(e, r);
		},
		$$slots: { default: !0 }
	}), E(a), V(e, a), O();
}
//#endregion
//#region src/features/chat/ChatHeader.svelte
var ob = /* @__PURE__ */ z("<div><div class=\"flex flex-row items-center justify-start\"><!></div> <p class=\"truncate\"> </p> <div class=\"flex flex-row items-center justify-end\"><!></div></div>");
function sb(e, t) {
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
	var i = ob();
	W(i, (e) => ({
		class: e,
		...r
	}), [() => Z("flex h-8 flex-none items-center justify-between overflow-hidden p-1", t.reversed ? "flex-row-reverse md:flex-row" : "flex-row-reverse", t.class)]);
	var a = N(i);
	Rh(N(a), {
		variant: "outline",
		type: "button",
		size: "icon-xs",
		children: (e, t) => {
			Eg(e, {
				get icon() {
					return bg;
				},
				class: "size-4"
			});
		},
		$$slots: { default: !0 }
	}), E(a);
	var o = F(a, 2), s = N(o);
	E(o);
	var c = F(o, 2);
	Rh(N(c), {
		variant: "outline",
		type: "button",
		size: "icon-xs",
		get onclick() {
			return t.handleReverse;
		},
		children: (e, n) => {
			var r = B(), i = P(r), a = (e) => {
				var t = B(), n = P(t), r = (e) => {
					Eg(e, {
						get icon() {
							return lg;
						},
						class: "size-4"
					});
				}, i = (e) => {
					Eg(e, {
						get icon() {
							return sg;
						},
						class: "size-4"
					});
				};
				H(n, (e) => {
					Bm.current ? e(r) : e(i, -1);
				}), V(e, t);
			}, o = (e) => {
				Eg(e, {
					get icon() {
						return cg;
					},
					class: "size-4"
				});
			}, s = (e) => {
				Eg(e, {
					get icon() {
						return ug;
					},
					class: "size-4"
				});
			};
			H(i, (e) => {
				t.reversed ? e(a) : Bm.current ? e(o, 1) : e(s, -1);
			}), V(e, r);
		},
		$$slots: { default: !0 }
	}), E(c), E(i), or(() => Ei(s, `${n() ?? ""} online`)), V(e, i), O();
}
//#endregion
//#region src/features/chat/MessageBuffer.svelte
var cb = /* @__PURE__ */ z("<div></div>"), lb = /* @__PURE__ */ z("<div></div>");
function ub(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class"
	]);
	var r = lb();
	W(r, (e) => ({
		class: e,
		...n
	}), [() => Z("", t.class)]), zi(r, 20, () => ({ length: 100 }), Fi, (e, t, n) => {
		var r = cb();
		r.textContent = `${n} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, vitae nihil labore
      nesciunt eius tenetur nostrum exercitationem reiciendis, illum minima, doloribus distinctio aspernatur.
      Veniam sint a, explicabo dolore harum ducimus?`, V(e, r);
	}), E(r), V(e, r), O();
}
//#endregion
//#region src/features/chat/ChatLayout.svelte
var db = /* @__PURE__ */ z("<!> <!>", 1), fb = /* @__PURE__ */ z("<div><!> <!> <!> <!> <!> <!></div>");
function pb(e, t) {
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
	var a = fb();
	W(a, (e) => ({
		class: e,
		...i
	}), [() => Z("", t.class)]);
	var o = N(a);
	sb(o, {
		get reversed() {
			return t.reversed;
		},
		get handleReverse() {
			return t.handleReverse;
		},
		onlineCount: 0
	});
	var s = F(o, 2);
	Gh(s, {});
	var c = F(s, 2);
	{
		let e = /* @__PURE__ */ A(() => t.reversed && Bm.current);
		Gy(c, {
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
		let i = /* @__PURE__ */ A(() => t.reversed && Bm.current ? L(n) : L(r)), a = /* @__PURE__ */ A(() => t.reversed && Bm.current ? L(r) : L(n));
		var o = db(), s = P(o);
		O_(s, {
			[Zr()]: (e) => (Wg(L(i)) || f)(e),
			class: "flex-1"
		}), ub(F(s, 2), {
			[Zr()]: (e) => (Wg(L(a)) || f)(e),
			class: "flex-1"
		}), V(e, o);
	};
	H(l, (e) => {
		L(n) && L(r) && e(u);
	});
	var d = F(l, 2);
	Gh(d, {});
	var p = F(d, 2), m = (e) => {
		ab(e, { class: "flex h-full flex-3 flex-col justify-end" });
	}, h = (e) => {
		qg(e, { class: "w-full flex-none" });
	};
	H(p, (e) => {
		t.isLoggedIn ? e(m) : e(h, -1);
	}), E(a), V(e, a), O();
}
//#endregion
//#region src/shared/components/common/YouTube.svelte
var mb = /* @__PURE__ */ z("<iframe></iframe>");
function hb(e, t) {
	D(t, !0);
	let n = K(t, "autoplay", 3, !0), r = K(t, "autohide", 3, !0), i = K(t, "controls", 3, !0), a = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"videoId",
		"autoplay",
		"autohide",
		"controls",
		"class"
	]), o = /* @__PURE__ */ A(() => ({
		autohide: r() ? "1" : "0",
		autoplay: n() ? "1" : "0",
		controls: i() ? "1" : "0",
		enablejsapi: "1"
	})), s = /* @__PURE__ */ A(() => new URLSearchParams(L(o)).toString()), c = /* @__PURE__ */ A(() => `https://www.youtube.com/embed/${t.videoId}?${L(s)}`);
	var l = mb();
	W(l, (e) => ({
		src: L(c),
		class: e,
		...a
	}), [() => Z("", t.class)]), li(l), V(e, l), O();
}
//#endregion
//#region src/features/player/PlayerControls.svelte
var gb = /* @__PURE__ */ z("<div><div class=\"flex flex-1 flex-row items-center justify-start\"></div> <div class=\"flex-auto\"></div> <div class=\"flex flex-1 flex-row items-center justify-end\"><!></div></div>");
function _b(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"open",
		"handlePlayerToggle",
		"class"
	]);
	var r = gb();
	W(r, (e) => ({
		class: e,
		...n
	}), [() => Z("flex h-8 flex-row items-center justify-between gap-4 overflow-hidden p-1", t.class)]);
	var i = F(N(r), 4);
	Rh(N(i), {
		variant: "outline",
		type: "button",
		size: "icon-xs",
		get onclick() {
			return t.handlePlayerToggle;
		},
		children: (e, n) => {
			var r = B(), i = P(r), a = (e) => {
				Eg(e, {
					get icon() {
						return vg;
					},
					class: "size-4"
				});
			}, o = (e) => {
				Eg(e, {
					get icon() {
						return mg;
					},
					class: "size-4"
				});
			};
			H(i, (e) => {
				t.open ? e(a) : e(o, -1);
			}), V(e, r);
		},
		$$slots: { default: !0 }
	}), E(i), E(r), V(e, r), O();
}
//#endregion
//#region src/features/player/PlayerHeader.svelte
var vb = /* @__PURE__ */ z("<div><div class=\"flex flex-1 flex-row items-center justify-start\"><!></div> <p class=\"flex-auto truncate\"> </p> <div class=\"flex flex-1 flex-row items-center justify-end\"><!></div></div>");
function yb(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"reversed",
		"handleReverse",
		"mediaTitle",
		"class"
	]), r = () => navigator.clipboard.writeText(t.mediaTitle ?? "");
	var i = vb();
	W(i, (e) => ({
		class: e,
		...n
	}), [() => Z("flex h-8 items-center justify-between gap-4 overflow-hidden p-1", t.reversed ? "flex-row" : "flew-row md:flex-row-reverse", t.class)]);
	var a = N(i);
	Rh(N(a), {
		variant: "outline",
		type: "button",
		size: "icon-xs",
		get onclick() {
			return t.handleReverse;
		},
		children: (e, n) => {
			var r = B(), i = P(r), a = (e) => {
				var t = B(), n = P(t), r = (e) => {
					Eg(e, {
						get icon() {
							return cg;
						},
						class: "size-4"
					});
				}, i = (e) => {
					Eg(e, {
						get icon() {
							return ug;
						},
						class: "size-4"
					});
				};
				H(n, (e) => {
					Bm.current ? e(r) : e(i, -1);
				}), V(e, t);
			}, o = (e) => {
				Eg(e, {
					get icon() {
						return lg;
					},
					class: "size-4"
				});
			}, s = (e) => {
				Eg(e, {
					get icon() {
						return sg;
					},
					class: "size-4"
				});
			};
			H(i, (e) => {
				t.reversed ? e(a) : Bm.current ? e(o, 1) : e(s, -1);
			}), V(e, r);
		},
		$$slots: { default: !0 }
	}), E(a);
	var o = F(a, 2), s = N(o, !0);
	E(o);
	var c = F(o, 2);
	Rh(N(c), {
		variant: "outline",
		type: "button",
		size: "icon-xs",
		title: "Copy video title",
		onclick: r,
		children: (e, t) => {
			Eg(e, {
				get icon() {
					return fg;
				},
				class: "size-4"
			});
		},
		$$slots: { default: !0 }
	}), E(c), E(i), or(() => {
		ka(o, "title", t.mediaTitle), Ei(s, t.mediaTitle);
	}), V(e, i), O();
}
//#endregion
//#region src/features/player/PlayerLayout.svelte
var bb = /* @__PURE__ */ z("<!> <!>", 1), xb = /* @__PURE__ */ z("<!> <!> <div class=\"flex-initial overflow-hidden\"><!></div> <!> <!>", 1);
function Sb(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ A(() => Ct(So).currentIndex), r = /* @__PURE__ */ A(() => Ct(So).playlist[L(n)]), i = /* @__PURE__ */ A(() => L(r)?.media?.title ?? ""), a = /* @__PURE__ */ A(() => L(r)?.media?.id ?? ""), o = /* @__PURE__ */ j(!0), s = () => M(o, !L(o));
	var c = xb(), l = P(c);
	yb(l, {
		get reversed() {
			return t.reversed;
		},
		get mediaTitle() {
			return L(i);
		},
		get handleReverse() {
			return t.handleReverse;
		}
	});
	var u = F(l, 2);
	Gh(u, {});
	var d = F(u, 2), f = N(d), p = (e) => {
		hb(e, {
			get videoId() {
				return L(a);
			},
			class: "aspect-video h-full w-full md:h-auto md:w-auto"
		});
	}, m = (e) => {
		n_(e, {
			class: "aspect-video h-full w-full md:h-auto md:w-auto",
			children: (e, t) => {
				i_(e, {
					children: (e, t) => {
						var n = bb(), r = P(n);
						s_(r, {
							variant: "icon",
							children: (e, t) => {
								Eg(e, {
									get icon() {
										return Sg;
									},
									class: "size-5 motion-safe:animate-pulse"
								});
							},
							$$slots: { default: !0 }
						}), l_(F(r, 2), {
							class: "text-md font-semibold font-stretch-expanded select-none",
							children: (e, t) => {
								He(), V(e, Ci("Player is hidden"));
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
	H(f, (e) => {
		L(o) ? e(p) : e(m, -1);
	}), E(d);
	var h = F(d, 2);
	Gh(h, {}), _b(F(h, 2), {
		get open() {
			return L(o);
		},
		handlePlayerToggle: s,
		class: "w-full"
	}), V(e, c), O();
}
//#endregion
//#region src/features/playlist/PlaylistItem.svelte
var Cb = /* @__PURE__ */ z("<div> </div>");
function wb(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"title",
		"class"
	]);
	var r = Cb();
	W(r, (e) => ({
		class: e,
		...n
	}), [() => Z("truncate", t.class)]);
	var i = N(r, !0);
	E(r), or(() => Ei(i, t.title)), V(e, r), O();
}
//#endregion
//#region src/features/playlist/PlaylistLayout.svelte
var Tb = /* @__PURE__ */ z("<div></div>");
function Eb(e, t) {
	D(t, !0);
	let n = () => Dt(So, "$playlistStore", r), [r, i] = Ot(), a = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"class"
	]);
	var o = Tb();
	W(o, (e) => ({
		class: e,
		...a
	}), [() => Z("", t.class)]), zi(o, 5, () => n().playlist, (e) => e.uid, (e, t) => {
		wb(e, { get title() {
			return L(t).media.title;
		} });
	}), E(o), V(e, o), O(), i();
}
//#endregion
//#region src/shared/components/layout/ResizableCytubeFluidLayout.svelte
var Db = 50, Ob = /* @__PURE__ */ z("<!> <!> <!>", 1);
function kb(e, t) {
	D(t, !0);
	let n = K(t, "defaultMainSize", 3, Db), r = K(t, "defaultSecondarySize", 3, Db), i = K(t, "mainPaneRef", 15, null), a = K(t, "secondaryPaneRef", 15, null), o = /* @__PURE__ */ G(t, [
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
		Uy(e, Wa({
			get direction() {
				return t.direction;
			},
			get class() {
				return L(s);
			}
		}, () => o, {
			children: (e, o) => {
				var s = Ob(), c = P(s);
				{
					let e = /* @__PURE__ */ A(() => Z("", t.mainClass));
					Ry(c, {
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
				Hy(l, { withHandle: !0 });
				var u = F(l, 2);
				{
					let e = /* @__PURE__ */ A(() => Z("", t.secondaryClass));
					Ry(u, {
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
var Ab = /* @__PURE__ */ z("<div class=\"flex w-full flex-1 flex-col\"><!> <!> <!> <!></div> <!>", 1), jb = /* @__PURE__ */ z("<main><!> <!></main>");
function Mb(e, t) {
	D(t, !0);
	let n = /* @__PURE__ */ A(() => Bm.current), r = /* @__PURE__ */ j(null), i = /* @__PURE__ */ j(null), a = () => M(n, !L(n)), o = /* @__PURE__ */ G(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"isLoggedIn",
		"class"
	]);
	var s = jb();
	W(s, (e) => ({
		class: e,
		...o
	}), [() => Z("flex flex-col border-t", t.class)]);
	var c = N(s);
	{
		let e = /* @__PURE__ */ A(() => Bm.current ? "horizontal" : "vertical"), t = /* @__PURE__ */ A(() => Bm.current ? 36 : 25), n = /* @__PURE__ */ A(() => Bm.current ? 64 : 75);
		kb(c, {
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
		var c = Ab(), l = P(c), u = N(l);
		Sb(u, {
			get reversed() {
				return L(n);
			},
			handleReverse: a
		});
		var d = F(u, 2);
		Gh(d, {});
		var p = F(d, 2);
		Eb(p, {}), Gh(F(p, 2), {}), E(l), ia(l, () => Wg(L(o))), pb(F(l, 2), {
			[Zr()]: (e) => (Wg(L(s)) || f)(e),
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
var Nb = "dark min-h-screen flex flex-col", Pb = new URL("dist/logo.png", window.BASE_URL).toString(), Fb = /* @__PURE__ */ z("<!> <!>", 1);
function Ib(e, t) {
	D(t, !1);
	let n = () => Dt(go, "$appStore", a), r = () => Dt(wo, "$socketStore", a), i = () => Dt(vo, "$clientStore", a), [a, o] = Ot();
	Ga(() => {
		let e = document.body.className;
		return document.body.className = Nb.toString(), () => document.body.className = e;
	}), Ba();
	var s = Fb(), c = P(s);
	Ug(c, {
		get imgLogoSrc() {
			return Pb;
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
	}), Mb(F(c, 2), {
		get isLoggedIn() {
			return i().logged_in;
		},
		class: "flex-1"
	}), V(e, s), O(), o();
}
//#endregion
//#region src/main.ts
var Lb = [
	"wrap",
	"useroptions",
	"emotelist",
	"channeloptions",
	"pmbar",
	"footer",
	"usertheme"
], Rb = [
	"//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css",
	"/css/sticky-footer-navbar.css",
	"/css/videojs-resolution-switcher.css",
	"/css/video-js.css",
	"/css/cytube.css"
], zb = () => {
	Rb.forEach((e) => {
		let t = document.querySelector(`link[href="${e}"]`);
		t && t.remove();
	}), Lb.forEach((e) => {
		let t = document.getElementById(e);
		t && t.remove();
	});
}, Bb = (e) => new Promise((t, n) => {
	let r = document.createElement("link");
	r.rel = "stylesheet", r.type = "text/css", r.href = e.toString(), r.onload = () => t(), r.onerror = (e) => n(/* @__PURE__ */ Error(`failed to load stylesheet: ${e}`)), document.head.appendChild(r);
}), Vb = (e) => {
	let t = document.createElement("div");
	t.className = "server-msg-reconnect", t.style = "border: 1px solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", t.textContent = e;
	let n = document.getElementById("messagebuffer");
	return n && n.appendChild(t), t;
}, Hb = async () => {
	let e = Vb("Loading styles...");
	await Bb(new URL("dist/index.css", window.BASE_URL)), e.remove();
}, Ub = async () => {
	let e = await jo();
	try {
		await Hb(), zb(), eo(), Di(Ib, { target: document.body });
	} catch (t) {
		throw e(), t;
	}
};
//#endregion
export { Ub as init };
