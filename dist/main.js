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
var g = 1 << 24, _ = 1024, v = 2048, y = 4096, b = 8192, x = 16384, ee = 32768, te = 1 << 25, S = 65536, C = 1 << 19, ne = 1 << 20, re = 1 << 25, ie = 65536, ae = 1 << 21, oe = 1 << 22, se = 1 << 23, ce = Symbol("$state"), le = Symbol("legacy props"), ue = Symbol(""), de = Symbol("attributes"), w = Symbol("class"), fe = Symbol("style"), pe = Symbol("text"), me = Symbol("form reset"), he = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ge = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
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
//#region node_modules/svelte/src/constants.js
var Ae = {}, je = Symbol("uninitialized"), Me = "http://www.w3.org/1999/xhtml", Ne = "@attach";
function Pe() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Fe(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ie() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Le() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var T = !1;
function Re(e) {
	T = e;
}
var E;
function ze(e) {
	if (e === null) throw Fe(), Ae;
	return E = e;
}
function Be() {
	return ze(/* @__PURE__ */ Fn(E));
}
function D(e) {
	if (T) {
		if (/* @__PURE__ */ Fn(E) !== null) throw Fe(), Ae;
		E = e;
	}
}
function Ve(e = 1) {
	if (T) {
		for (var t = e, n = E; t--;) n = /* @__PURE__ */ Fn(n);
		E = n;
	}
}
function He(e = !0) {
	for (var t = 0, n = E;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Fn(n);
		e && n.remove(), n = i;
	}
}
function Ue(e) {
	if (!e || e.nodeType !== 8) throw Fe(), Ae;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function We(e) {
	return e === this.v;
}
function Ge(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ke(e) {
	return !Ge(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var qe = !1, Je = !1;
function Ye() {
	Je = !0;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/clone.js
var Xe = [];
function Ze(e, t = !1, n = !1) {
	return Qe(e, /* @__PURE__ */ new Map(), "", Xe, null, n);
}
function Qe(t, n, r, i, a = null, o = !1) {
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
				d in t && (u[d] = Qe(f, n, r, i, null, o));
			}
			return u;
		}
		if (l(t) === s) {
			u = {}, n.set(t, u), a !== null && n.set(a, u);
			for (var p of Object.keys(t)) u[p] = Qe(t[p], n, r, i, null, o);
			return u;
		}
		if (t instanceof Date) return structuredClone(t);
		if (typeof t.toJSON == "function" && !o) return Qe(t.toJSON(), n, r, i, t);
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
var $e = null;
function et(e) {
	$e = e;
}
function tt(e) {
	return ot("getContext").get(e);
}
function nt(e, t) {
	let n = ot("setContext");
	if (qe) {
		var r = R.f;
		!L && r & 32 && !$e.i || Te();
	}
	return n.set(e, t), t;
}
function rt(e) {
	return ot("hasContext").has(e);
}
function it() {
	return ot("getAllContexts");
}
function O(e, t = !1, n) {
	$e = {
		p: $e,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: R,
		l: Je && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function k(e) {
	var t = $e, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Qn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, $e = t.p, e ?? {};
}
function at() {
	return !Je || $e !== null && $e.l === null;
}
function ot(e) {
	return $e === null && _e(e), $e.c ??= new Map(st($e) || void 0);
}
function st(e) {
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
var ct = [];
function lt() {
	var e = ct;
	ct = [], m(e);
}
function ut(e) {
	if (ct.length === 0 && !It) {
		var t = ct;
		queueMicrotask(() => {
			t === ct && lt();
		});
	}
	ct.push(e);
}
function dt() {
	for (; ct.length > 0;) lt();
}
function ft(e) {
	var t = R;
	if (t === null) return L.f |= se, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	pt(e, t);
}
function pt(e, t) {
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
var mt = ~(v | y | _);
function ht(e, t) {
	e.f = e.f & mt | t;
}
function gt(e) {
	e.f & 512 || e.deps === null ? ht(e, _) : ht(e, y);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function _t(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ie, _t(t.deps));
}
function vt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), _t(e.deps), ht(e, _);
}
//#endregion
//#region node_modules/svelte/src/store/utils.js
function yt(e, t, n) {
	if (e == null) return t(void 0), n && n(void 0), f;
	let r = B(() => e.subscribe(t, n));
	return r.unsubscribe ? () => r.unsubscribe() : r;
}
//#endregion
//#region node_modules/svelte/src/store/shared/index.js
var bt = [];
function xt(e, t = f) {
	let n = null, r = /* @__PURE__ */ new Set();
	function i(t) {
		if (Ge(e, t) && (e = t, n)) {
			let t = !bt.length;
			for (let t of r) t[1](), bt.push(t, e);
			if (t) {
				for (let e = 0; e < bt.length; e += 2) bt[e][0](bt[e + 1]);
				bt.length = 0;
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
function St(e) {
	let t;
	return yt(e, (e) => t = e)(), t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Ct = !1, wt = !1, Tt = Symbol("unmounted");
function Et(e, t, n) {
	let r = n[t] ??= {
		store: null,
		source: /* @__PURE__ */ bn(void 0),
		unsubscribe: f
	};
	if (r.store !== e && !(Tt in n)) if (r.unsubscribe(), r.store = e ?? null, e == null) r.source.v = void 0, r.unsubscribe = f;
	else {
		var i = !0;
		r.unsubscribe = yt(e, (e) => {
			i ? r.source.v = e : N(r.source, e);
		}), i = !1;
	}
	return e && Tt in n ? St(e) : z(r.source);
}
function Dt() {
	let e = {};
	function t() {
		Xn(() => {
			for (var t in e) e[t].unsubscribe();
			i(e, Tt, {
				enumerable: !1,
				value: !0
			});
		});
	}
	return [e, t];
}
function Ot(e, t) {
	Ct = !0;
	try {
		e.set(t);
	} finally {
		Ct = !1;
	}
}
function kt(e, t, n) {
	return Ot(e, n), t;
}
function At(e) {
	var t = wt;
	try {
		return wt = !1, [e(), wt];
	} finally {
		wt = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var jt = null, Mt = null, A = null, Nt = null, Pt = null, Ft = null, It = !1, Lt = !1, Rt = null, zt = null, Bt = 0, Vt = 1, Ht = class e {
	id = Vt++;
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
			for (var r of n.d) ht(r, v), t(r);
			for (r of n.m) ht(r, y), t(r);
		}
		this.#m.add(e);
	}
	#_() {
		if (this.#e = !0, Bt++ > 1e3 && (this.#w(), Wt()), !this.#g()) {
			for (let e of this.#d) this.#f.delete(e), ht(e, v), this.schedule(e);
			for (let e of this.#f) ht(e, y), this.schedule(e);
		}
		let t = this.#l;
		this.#l = [], this.apply();
		var n = Rt = [], r = [], i = zt = [];
		for (let e of t) try {
			this.#v(e, n, r);
		} catch (t) {
			throw Zt(e), t;
		}
		if (A = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (Rt = null, zt = null, this.#g()) {
			this.#x(r), this.#x(n);
			for (let [e, t] of this.#p) Xt(e, t);
			i.length > 0 && A.#_();
			return;
		}
		let o = this.#y();
		if (o) {
			o.#b(this);
			return;
		}
		this.#d.clear(), this.#f.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), Nt = this, Kt(r), Kt(n), Nt = null, this.#c?.resolve();
		var s = A;
		if (this.linked && this.#o === 0 && this.#w(), qe && !this.linked && (this.#S(), A = s), this.#l.length > 0) {
			s === null && (s = this, this.#C());
			let e = s;
			e.#l.push(...this.#l.filter((t) => !e.#l.includes(t)));
		}
		s !== null && s.#_();
	}
	#v(e, t, n) {
		e.f ^= _;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#p.has(r)) && r.fn !== null) {
				a ? r.f ^= _ : i & 4 ? t.push(r) : qe && i & 16777224 ? n.push(r) : Rr(r) && (i & 16 && this.#f.add(r), Ur(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#f.delete(i), ht(i, v), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#w(), A = this, this.#_();
	}
	#x(e) {
		for (var t = 0; t < e.length; t += 1) vt(e[t], this.#d, this.#f);
	}
	capture(e, t, n = !1) {
		e.v !== je && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), Pt?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		A = this;
	}
	deactivate() {
		A = null, Pt = null;
	}
	flush() {
		try {
			Lt = !0, A = this, this.#_();
		} finally {
			Bt = 0, Ft = null, Rt = null, zt = null, Lt = !1, A = null, Pt = null, _n.clear();
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
		for (let l = jt; l !== null; l = l.#n) {
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
					for (var o of t) qt(o, r, i, a);
					a = /* @__PURE__ */ new Map();
					var s = [...l.current.keys()].filter((e) => this.current.has(e) ? this.current.get(e)[0] !== e.v : !0);
					if (s.length > 0) for (let e of this.#u) !(e.f & 155648) && Jt(e, s, a) && (e.f & 4194320 ? (ht(e, v), l.schedule(e)) : l.#d.add(e));
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
		this.#h || (this.#h = !0, ut(() => {
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
		if (A === null) {
			let t = A = new e();
			t.#C(), !Lt && !It && ut(() => {
				t.#e || t.flush();
			});
		}
		return A;
	}
	apply() {
		if (!qe || !this.is_fork && this.#t === null && this.#n === null) {
			Pt = null;
			return;
		}
		Pt = /* @__PURE__ */ new Map();
		for (let [e, [t]] of this.current) Pt.set(e, t);
		for (let t = jt; t !== null; t = t.#n) if (!(t === this || t.is_fork)) {
			var e = !1;
			if (t.id < this.id) {
				for (let [n, [, r]] of t.current) if (!r && this.current.has(n)) {
					e = !0;
					break;
				}
			}
			if (!e) for (let [e, n] of t.previous) Pt.has(e) || Pt.set(e, n);
		}
	}
	schedule(e) {
		if (Ft = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (Rt !== null && t === R && (qe || (L === null || !(L.f & 2)) && !Ct)) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= _;
			}
		}
		this.#l.push(t);
	}
	#C() {
		Mt === null ? jt = Mt = this : (Mt.#n = this, this.#t = Mt), Mt = this;
	}
	#w() {
		var e = this.#t, t = this.#n;
		e === null ? jt = t : e.#n = t, t === null ? Mt = e : t.#t = e, this.linked = !1;
	}
};
function Ut(e) {
	var t = It;
	It = !0;
	try {
		var n;
		for (e && (A !== null && !A.is_fork && A.flush(), n = e());;) {
			if (dt(), A === null) return n;
			A.flush();
		}
	} finally {
		It = t;
	}
}
function Wt() {
	try {
		Ce();
	} catch (e) {
		pt(e, Ft);
	}
}
var Gt = null;
function Kt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Rr(r) && (Gt = /* @__PURE__ */ new Set(), Ur(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && mr(r), Gt?.size > 0)) {
				_n.clear();
				for (let e of Gt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Gt.has(n) && (Gt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Ur(n);
					}
				}
				Gt.clear();
			}
		}
		Gt = null;
	}
}
function qt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? qt(i, t, n, r) : e & 4194320 && !(e & 2048) && Jt(i, t, r) && (ht(i, v), Yt(i));
	}
}
function Jt(e, t, r) {
	let i = r.get(e);
	if (i !== void 0) return i;
	if (e.deps !== null) for (let i of e.deps) {
		if (n.call(t, i)) return !0;
		if (i.f & 2 && Jt(i, t, r)) return r.set(i, !0), !0;
	}
	return r.set(e, !1), !1;
}
function Yt(e) {
	A.schedule(e);
}
function Xt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), ht(e, _);
		for (var n = e.first; n !== null;) Xt(n, t), n = n.next;
	}
}
function Zt(e) {
	ht(e, _);
	for (var t = e.first; t !== null;) Zt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Qt(e) {
	let t = 0, n = yn(0), r;
	return () => {
		Yn() && (z(n), ir(() => (t === 0 && (r = B(() => e(() => Cn(n)))), t += 1, () => {
			ut(() => {
				--t, t === 0 && (r?.(), r = void 0, Cn(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var $t = S | C;
function en(e, t, n, r) {
	new tn(e, t, n, r);
}
var tn = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = T ? E : null;
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
	#h = Qt(() => (this.#m = yn(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = R;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = R.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = or(() => {
			if (T) {
				let e = this.#t;
				Be();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#v() : this.#g();
			} else this.#y();
		}, $t), T && (this.#e = E);
	}
	#g() {
		try {
			this.#a = cr(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed;
		t && (this.#s = cr(() => {
			t(this.#e, () => e, () => () => {});
		}));
	}
	#v() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = cr(() => e(this.#e)), ut(() => {
			var e = this.#c = document.createDocumentFragment(), t = Nn();
			e.append(t), this.#a = this.#x(() => cr(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, hr(this.#o, () => {
				this.#o = null;
			}), this.#b(A));
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = cr(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				yr(this.#a, e);
				let t = this.#n.pending;
				this.#o = cr(() => t(this.#e));
			} else this.#b(A);
		} catch (e) {
			this.error(e);
		}
	}
	#b(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		vt(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(e) {
		var t = R, n = L, r = $e;
		Er(this.#i), Tr(this.#i), et(this.#i.ctx);
		try {
			return Ht.ensure(), e();
		} catch (e) {
			return ft(e), null;
		} finally {
			Er(t), Tr(n), et(r);
		}
	}
	#S(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#b(t), this.#o && hr(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, ut(() => {
			this.#d = !1, this.#m && xn(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), z(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		A?.is_fork ? (this.#a && A.skip_effect(this.#a), this.#o && A.skip_effect(this.#o), this.#s && A.skip_effect(this.#s), A.on_fork_commit(() => {
			this.#C(e);
		})) : this.#C(e);
	}
	#C(e) {
		this.#a &&= (fr(this.#a), null), this.#o &&= (fr(this.#o), null), this.#s &&= (fr(this.#s), null), T && (ze(this.#t), Ve(), ze(He()));
		var t = this.#n.onerror;
		let n = this.#n.failed;
		var r = !1, i = !1;
		let a = () => {
			if (r) {
				Le();
				return;
			}
			r = !0, i && ke(), this.#s !== null && hr(this.#s, () => {
				this.#s = null;
			}), this.#x(() => {
				this.#y();
			});
		}, o = (e) => {
			try {
				i = !0, t?.(e, a), i = !1;
			} catch (e) {
				pt(e, this.#i && this.#i.parent);
			}
			n && (this.#s = this.#x(() => {
				try {
					return cr(() => {
						var t = R;
						t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
					});
				} catch (e) {
					return pt(e, this.#i.parent), null;
				}
			}));
		};
		ut(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				pt(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => pt(e, this.#i && this.#i.parent)) : o(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function nn(e, t, n, r) {
	let i = at() ? sn : un;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = R, s = rn(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		if (!(o.f & 16384)) {
			s();
			try {
				r(e);
			} catch (e) {
				pt(e, o);
			}
			an();
		}
	}
	var u = on();
	if (n.length === 0) {
		c.then(() => l(t.map(i))).finally(u);
		return;
	}
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ ln(e))).then((e) => l([...t.map(i), ...e])).catch((e) => pt(e, o)).finally(u);
	}
	c ? c.then(() => {
		s(), d(), an();
	}) : d();
}
function rn() {
	var e = R, t = L, n = $e, r = A;
	return function(i = !0) {
		Er(e), Tr(t), et(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function an(e = !0) {
	Er(null), Tr(null), et(null), e && A?.deactivate();
}
function on() {
	var e = R, t = e.b, n = A, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), () => {
		t.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function sn(e) {
	var t = 2 | v;
	return R !== null && (R.f |= C), {
		ctx: $e,
		deps: null,
		effects: null,
		equals: We,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: je,
		wv: 0,
		parent: R,
		ac: null
	};
}
var cn = Symbol("obsolete");
/* @__NO_SIDE_EFFECTS__ */
function ln(e, t, n) {
	let r = R;
	r === null && ve();
	var i = void 0, a = yn(je), o = !L, s = /* @__PURE__ */ new Set();
	return rr(() => {
		var t = R, n = h();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== he && n.reject(e);
			}).finally(an);
		} catch (e) {
			n.reject(e), an();
		}
		var c = A;
		if (o) {
			if (t.f & 32768) var l = on();
			if (r.b.is_rendered()) c.async_deriveds.get(t)?.reject(cn);
			else for (let e of s.values()) e.reject(cn);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== cn && (c.activate(), t ? (a.f |= se, xn(a, t)) : (a.f & 8388608 && (a.f ^= se), xn(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), Xn(() => {
		for (let e of s) e.reject(cn);
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
function j(e) {
	let t = /* @__PURE__ */ sn(e);
	return qe || Or(t), t;
}
/* @__NO_SIDE_EFFECTS__ */
function un(e) {
	let t = /* @__PURE__ */ sn(e);
	return t.equals = Ke, t;
}
function dn(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) fr(t[n]);
	}
}
function fn(e) {
	var t, n = R, r = e.parent;
	if (!Sr && r !== null && e.v !== je && r.f & 24576) return Pe(), e.v;
	Er(r);
	try {
		e.f &= ~ie, dn(e), t = Br(e);
	} finally {
		Er(n);
	}
	return t;
}
function pn(e) {
	var t = fn(e);
	if (!e.equals(t) && (e.wv = Lr(), (!A?.is_fork || e.deps === null) && (A === null ? e.v = t : (A.capture(e, t, !0), Nt?.capture(e, t, !0)), e.deps === null))) {
		ht(e, _);
		return;
	}
	Sr || (Pt === null ? gt(e) : (Yn() || A?.is_fork) && Pt.set(e, t));
}
function mn(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(he), t.fn !== null && (t.teardown = f), t.ac = null, Hr(t, 0), ur(t));
}
function hn(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Ur(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var gn = /* @__PURE__ */ new Set(), _n = /* @__PURE__ */ new Map(), vn = !1;
function yn(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: We,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function M(e, t) {
	let n = yn(e, t);
	return Or(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function bn(e, t = !1, n = !0) {
	let r = yn(e);
	return t || (r.equals = Ke), Je && n && $e !== null && $e.l !== null && ($e.l.s ??= []).push(r), r;
}
function N(e, t, r = !1) {
	return L !== null && (!wr || L.f & 131072) && at() && L.f & 4325394 && (Dr === null || !n.call(Dr, e)) && Oe(), xn(e, r ? Tn(t) : t, zt);
}
function xn(e, t, n = null) {
	if (!e.equals(t)) {
		_n.set(e, Sr ? t : e.v);
		var r = Ht.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && fn(t), Pt === null && gt(t);
		}
		e.wv = Lr(), wn(e, v, n), at() && R !== null && R.f & 1024 && !(R.f & 96) && (jr === null ? Mr([e]) : jr.push(e)), !r.is_fork && gn.size > 0 && !vn && Sn();
	}
	return t;
}
function Sn() {
	vn = !1;
	for (let e of gn) {
		e.f & 1024 && ht(e, y);
		let t;
		try {
			t = Rr(e);
		} catch {
			t = !0;
		}
		t && Ur(e);
	}
	gn.clear();
}
function Cn(e) {
	N(e, e.v + 1);
}
function wn(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = at(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === R)) {
			var l = (c & v) === 0;
			if (l && ht(s, t), c & 131072) gn.add(s);
			else if (c & 2) {
				var u = s;
				Pt?.delete(u), c & 65536 || (c & 512 && (R === null || !(R.f & 2097152)) && (s.f |= ie), wn(u, y, n));
			} else if (l) {
				var d = s;
				c & 16 && Gt !== null && Gt.add(d), n === null ? Yt(d) : n.push(d);
			}
		}
	}
}
function Tn(t) {
	if (typeof t != "object" || !t || ce in t) return t;
	let n = l(t);
	if (n !== s && n !== c) return t;
	var r = /* @__PURE__ */ new Map(), i = e(t), o = /* @__PURE__ */ M(0), u = null, d = Fr, f = (e) => {
		if (Fr === d) return e();
		var t = L, n = Fr;
		Tr(null), Ir(d);
		var r = e();
		return Tr(t), Ir(n), r;
	};
	return i && r.set("length", /* @__PURE__ */ M(t.length, u)), new Proxy(t, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Ee();
			var i = r.get(t);
			return i === void 0 ? f(() => {
				var e = /* @__PURE__ */ M(n.value, u);
				return r.set(t, e), e;
			}) : N(i, n.value, !0), !0;
		},
		deleteProperty(e, t) {
			var n = r.get(t);
			if (n === void 0) {
				if (t in e) {
					let e = f(() => /* @__PURE__ */ M(je, u));
					r.set(t, e), Cn(o);
				}
			} else N(n, je), Cn(o);
			return !0;
		},
		get(e, n, i) {
			if (n === ce) return t;
			var o = r.get(n), s = n in e;
			if (o === void 0 && (!s || a(e, n)?.writable) && (o = f(() => /* @__PURE__ */ M(Tn(s ? e[n] : je), u)), r.set(n, o)), o !== void 0) {
				var c = z(o);
				return c === je ? void 0 : c;
			}
			return Reflect.get(e, n, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var n = Reflect.getOwnPropertyDescriptor(e, t);
			if (n && "value" in n) {
				var i = r.get(t);
				i && (n.value = z(i));
			} else if (n === void 0) {
				var a = r.get(t), o = a?.v;
				if (a !== void 0 && o !== je) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return n;
		},
		has(e, t) {
			if (t === ce) return !0;
			var n = r.get(t), i = n !== void 0 && n.v !== je || Reflect.has(e, t);
			return (n !== void 0 || R !== null && (!i || a(e, t)?.writable)) && (n === void 0 && (n = f(() => /* @__PURE__ */ M(i ? Tn(e[t]) : je, u)), r.set(t, n)), z(n) === je) ? !1 : i;
		},
		set(e, t, n, s) {
			var c = r.get(t), l = t in e;
			if (i && t === "length") for (var d = n; d < c.v; d += 1) {
				var p = r.get(d + "");
				p === void 0 ? d in e && (p = f(() => /* @__PURE__ */ M(je, u)), r.set(d + "", p)) : N(p, je);
			}
			if (c === void 0) (!l || a(e, t)?.writable) && (c = f(() => /* @__PURE__ */ M(void 0, u)), N(c, Tn(n)), r.set(t, c));
			else {
				l = c.v !== je;
				var m = f(() => Tn(n));
				N(c, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, n), !l) {
				if (i && typeof t == "string") {
					var g = r.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && N(g, _ + 1);
				}
				Cn(o);
			}
			return !0;
		},
		ownKeys(e) {
			z(o);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = r.get(e);
				return t === void 0 || t.v !== je;
			});
			for (var [n, i] of r) i.v !== je && !(n in e) && t.push(n);
			return t;
		},
		setPrototypeOf() {
			De();
		}
	});
}
function En(e) {
	try {
		if (typeof e == "object" && e && ce in e) return e[ce];
	} catch {}
	return e;
}
function Dn(e, t) {
	return Object.is(En(e), En(t));
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
var On, kn, An, jn;
function Mn() {
	if (On === void 0) {
		On = window, kn = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		An = a(t, "firstChild").get, jn = a(t, "nextSibling").get, u(e) && (e[w] = void 0, e[de] = null, e[fe] = void 0, e.__e = void 0), u(n) && (n[pe] = void 0);
	}
}
function Nn(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Pn(e) {
	return An.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Fn(e) {
	return jn.call(e);
}
function P(e, t) {
	if (!T) return /* @__PURE__ */ Pn(e);
	var n = /* @__PURE__ */ Pn(E);
	if (n === null) n = E.appendChild(Nn());
	else if (t && n.nodeType !== 3) {
		var r = Nn();
		return n?.before(r), ze(r), r;
	}
	return t && zn(n), ze(n), n;
}
function F(e, t = !1) {
	if (!T) {
		var n = /* @__PURE__ */ Pn(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Fn(n) : n;
	}
	if (t) {
		if (E?.nodeType !== 3) {
			var r = Nn();
			return E?.before(r), ze(r), r;
		}
		zn(E);
	}
	return E;
}
function I(e, t = 1, n = !1) {
	let r = T ? E : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Fn(r);
	if (!T) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Nn();
			return r === null ? i?.after(a) : r.before(a), ze(a), a;
		}
		zn(r);
	}
	return ze(r), r;
}
function In(e) {
	e.textContent = "";
}
function Ln() {
	return !qe || Gt !== null ? !1 : (R.f & ee) !== 0;
}
function Rn(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function zn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function Bn(e, t) {
	if (t) {
		let t = document.body;
		e.autofocus = !0, ut(() => {
			document.activeElement === t && e.focus();
		});
	}
}
function Vn(e) {
	T && /* @__PURE__ */ Pn(e) !== null && In(e);
}
var Hn = !1;
function Un() {
	Hn || (Hn = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[me]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Wn(e) {
	var t = L, n = R;
	Tr(null), Er(null);
	try {
		return e();
	} finally {
		Tr(t), Er(n);
	}
}
function Gn(e, t, n, r = n) {
	e.addEventListener(t, () => Wn(n));
	let i = e[me];
	i ? e[me] = () => {
		i(), r(!0);
	} : e[me] = () => r(!0), Un();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Kn(e) {
	R === null && (L === null && Se(e), xe()), Sr && be(e);
}
function qn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Jn(e, t) {
	var n = R;
	n !== null && n.f & 8192 && (e |= b);
	var r = {
		ctx: $e,
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
	A?.register_created_effect(r);
	var i = r;
	if (e & 4) Rt === null ? Ht.ensure().schedule(r) : Rt.push(r);
	else if (t !== null) {
		try {
			Ur(r);
		} catch (e) {
			throw fr(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= S));
	}
	if (i !== null && (i.parent = n, n !== null && qn(i, n), L !== null && L.f & 2 && !(e & 64))) {
		var a = L;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Yn() {
	return L !== null && !wr;
}
function Xn(e) {
	let t = Jn(8, null);
	return ht(t, _), t.teardown = e, t;
}
function Zn(e) {
	Kn("$effect");
	var t = R.f;
	if (!L && t & 32 && !(t & 32768)) {
		var n = $e;
		(n.e ??= []).push(e);
	} else return Qn(e);
}
function Qn(e) {
	return Jn(4 | ne, e);
}
function $n(e) {
	return Kn("$effect.pre"), Jn(8 | ne, e);
}
function er(e) {
	Ht.ensure();
	let t = Jn(64 | C, e);
	return () => {
		fr(t);
	};
}
function tr(e) {
	Ht.ensure();
	let t = Jn(64 | C, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? hr(t, () => {
			fr(t), n(void 0);
		}) : (fr(t), n(void 0));
	});
}
function nr(e) {
	return Jn(4, e);
}
function rr(e) {
	return Jn(oe | C, e);
}
function ir(e, t = 0) {
	return Jn(8 | t, e);
}
function ar(e, t = [], n = [], r = []) {
	nn(r, t, n, (t) => {
		Jn(8, () => e(...t.map(z)));
	});
}
function or(e, t = 0) {
	return Jn(16 | t, e);
}
function sr(e, t = 0) {
	return Jn(g | t, e);
}
function cr(e) {
	return Jn(32 | C, e);
}
function lr(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Sr, n = L;
		Cr(!0), Tr(null);
		try {
			t.call(null);
		} finally {
			Cr(e), Tr(n);
		}
	}
}
function ur(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Wn(() => {
			e.abort(he);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : fr(n, t), n = r;
	}
}
function dr(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || fr(t), t = n;
	}
}
function fr(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (pr(e.nodes.start, e.nodes.end), n = !0), ht(e, te), ur(e, t && !n), Hr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	lr(e), e.f ^= te, e.f |= x;
	var i = e.parent;
	i !== null && i.first !== null && mr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function pr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Fn(e);
		e.remove(), e = n;
	}
}
function mr(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function hr(e, t, n = !0) {
	var r = [];
	gr(e, r, !0);
	var i = () => {
		n && fr(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function gr(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= b;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				gr(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function _r(e) {
	vr(e, !0);
}
function vr(e, t) {
	if (e.f & 8192) {
		e.f ^= b, e.f & 1024 || (ht(e, v), Ht.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			vr(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function yr(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Fn(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var br = null, xr = !1, Sr = !1;
function Cr(e) {
	Sr = e;
}
var L = null, wr = !1;
function Tr(e) {
	L = e;
}
var R = null;
function Er(e) {
	R = e;
}
var Dr = null;
function Or(e) {
	L !== null && (!qe || L.f & 2) && (Dr === null ? Dr = [e] : Dr.push(e));
}
var kr = null, Ar = 0, jr = null;
function Mr(e) {
	jr = e;
}
var Nr = 1, Pr = 0, Fr = Pr;
function Ir(e) {
	Fr = e;
}
function Lr() {
	return ++Nr;
}
function Rr(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~ie), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Rr(a) && pn(a), a.wv > e.wv) return !0;
		}
		t & 512 && Pt === null && ht(e, _);
	}
	return !1;
}
function zr(e, t, r = !0) {
	var i = e.reactions;
	if (i !== null && !(!qe && Dr !== null && n.call(Dr, e))) for (var a = 0; a < i.length; a++) {
		var o = i[a];
		o.f & 2 ? zr(o, t, !1) : t === o && (r ? ht(o, v) : o.f & 1024 && ht(o, y), Yt(o));
	}
}
function Br(e) {
	var t = kr, n = Ar, r = jr, i = L, a = Dr, o = $e, s = wr, c = Fr, l = e.f;
	kr = null, Ar = 0, jr = null, L = l & 96 ? null : e, Dr = null, et(e.ctx), wr = !1, Fr = ++Pr, e.ac !== null && (Wn(() => {
		e.ac.abort(he);
	}), e.ac = null);
	try {
		e.f |= ae;
		var u = e.fn, d = u();
		e.f |= ee;
		var f = e.deps, p = A?.is_fork;
		if (kr !== null) {
			var m;
			if (p || Hr(e, Ar), f !== null && Ar > 0) for (f.length = Ar + kr.length, m = 0; m < kr.length; m++) f[Ar + m] = kr[m];
			else e.deps = f = kr;
			if (Yn() && e.f & 512) for (m = Ar; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Ar < f.length && (Hr(e, Ar), f.length = Ar);
		if (at() && jr !== null && !wr && f !== null && !(e.f & 6146)) for (m = 0; m < jr.length; m++) zr(jr[m], e);
		if (i !== null && i !== e) {
			if (Pr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Pr;
			if (t !== null) for (let e of t) e.rv = Pr;
			jr !== null && (r === null ? r = jr : r.push(...jr));
		}
		return e.f & 8388608 && (e.f ^= se), d;
	} catch (e) {
		return ft(e);
	} finally {
		e.f ^= ae, kr = t, Ar = n, jr = r, L = i, Dr = a, et(o), wr = s, Fr = c;
	}
}
function Vr(e, r) {
	let i = r.reactions;
	if (i !== null) {
		var a = t.call(i, e);
		if (a !== -1) {
			var o = i.length - 1;
			o === 0 ? i = r.reactions = null : (i[a] = i[o], i.pop());
		}
	}
	if (i === null && r.f & 2 && (kr === null || !n.call(kr, r))) {
		var s = r;
		s.f & 512 && (s.f ^= 512, s.f &= ~ie), s.v !== je && gt(s), mn(s), Hr(s, 0);
	}
}
function Hr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Vr(e, n[r]);
}
function Ur(e) {
	var t = e.f;
	if (!(t & 16384)) {
		ht(e, _);
		var n = R, r = xr;
		R = e, xr = !0;
		try {
			t & 16777232 ? dr(e) : ur(e), lr(e);
			var i = Br(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Nr;
		} finally {
			xr = r, R = n;
		}
	}
}
async function Wr() {
	if (qe) return new Promise((e) => {
		requestAnimationFrame(() => e()), setTimeout(() => e());
	});
	await Promise.resolve(), Ut();
}
function z(e) {
	var t = (e.f & 2) != 0;
	if (br?.add(e), L !== null && !wr && !(R !== null && R.f & 16384) && (Dr === null || !n.call(Dr, e))) {
		var r = L.deps;
		if (L.f & 2097152) e.rv < Pr && (e.rv = Pr, kr === null && r !== null && r[Ar] === e ? Ar++ : kr === null ? kr = [e] : kr.push(e));
		else {
			L.deps ??= [], n.call(L.deps, e) || L.deps.push(e);
			var i = e.reactions;
			i === null ? e.reactions = [L] : n.call(i, L) || i.push(L);
		}
	}
	if (Sr && _n.has(e)) return _n.get(e);
	if (t) {
		var a = e;
		if (Sr) {
			var o = a.v;
			return (!(a.f & 1024) && a.reactions !== null || Kr(a)) && (o = fn(a)), _n.set(a, o), o;
		}
		var s = (a.f & 512) == 0 && !wr && L !== null && (xr || (L.f & 512) != 0), c = (a.f & ee) === 0;
		Rr(a) && (s && (a.f |= 512), pn(a)), s && !c && (hn(a), Gr(a));
	}
	if (Pt?.has(e)) return Pt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Gr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (hn(t), Gr(t));
}
function Kr(e) {
	if (e.v === je) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (_n.has(t) || t.f & 2 && Kr(t)) return !0;
	return !1;
}
function B(e) {
	var t = wr;
	try {
		return wr = !0, e();
	} finally {
		wr = t;
	}
}
function qr(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (ce in e) Jr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && ce in n && Jr(n);
		}
	}
}
function Jr(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Jr(e[n], t);
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
function Yr() {
	return Symbol(Ne);
}
//#endregion
//#region node_modules/svelte/src/utils.js
function Xr(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var Zr = [
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
function Qr(e) {
	return Zr.includes(e);
}
var $r = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), ei = {
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
function ti(e) {
	return e = e.toLowerCase(), ei[e] ?? e;
}
[...$r];
var ni = ["touchstart", "touchmove"];
function ri(e) {
	return ni.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var ii = Symbol("events"), ai = /* @__PURE__ */ new Set(), oi = /* @__PURE__ */ new Set();
function si(e) {
	if (!T) return;
	e.removeAttribute("onload"), e.removeAttribute("onerror");
	let t = e.__e;
	t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
		e.isConnected && e.dispatchEvent(t);
	}));
}
function ci(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || pi.call(t, e), !e.cancelBubble) return Wn(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ut(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function V(e, t, n, r = {}) {
	var i = ci(t, e, n, r);
	return () => {
		e.removeEventListener(t, i, r);
	};
}
function li(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = ci(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Xn(() => {
		t.removeEventListener(e, o, a);
	});
}
function ui(e, t, n) {
	(t[ii] ??= {})[e] = n;
}
function di(e) {
	for (var t = 0; t < e.length; t++) ai.add(e[t]);
	for (var n of oi) n(e);
}
var fi = null;
function pi(e) {
	var t = this, n = t.ownerDocument, r = e.type, a = e.composedPath?.() || [], o = a[0] || e.target;
	fi = e;
	var s = 0, c = fi === e && e[ii];
	if (c) {
		var l = a.indexOf(c);
		if (l !== -1 && (t === document || t === window)) {
			e[ii] = t;
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
		var d = L, f = R;
		Tr(null), Er(null);
		try {
			for (var p, m = []; o !== null;) {
				var h = o.assignedSlot || o.parentNode || o.host || null;
				try {
					var g = o[ii]?.[r];
					g != null && (!o.disabled || e.target === o) && g.call(o, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble || h === t || h === null) break;
				o = h;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[ii] = t, delete e.currentTarget, Tr(d), Er(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var mi = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function hi(e) {
	return mi?.createHTML(e) ?? e;
}
function gi(e) {
	var t = Rn("template");
	return t.innerHTML = hi(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function _i(e, t) {
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
		if (T) return _i(E, null), E;
		i === void 0 && (i = gi(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Pn(i)));
		var t = r || kn ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Pn(t), s = t.lastChild;
			_i(o, s);
		} else _i(t, t);
		return t;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function vi(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = (t & 1) != 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (T) return _i(E, null), E;
		if (!o) {
			var e = /* @__PURE__ */ Pn(gi(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ Pn(e);) o.appendChild(/* @__PURE__ */ Pn(e));
			else o = /* @__PURE__ */ Pn(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ Pn(t), r = t.lastChild;
			_i(n, r);
		} else _i(t, t);
		return t;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function yi(e, t) {
	return /* @__PURE__ */ vi(e, t, "svg");
}
function bi(e = "") {
	if (!T) {
		var t = Nn(e + "");
		return _i(t, t), t;
	}
	var n = E;
	return n.nodeType === 3 ? zn(n) : (n.before(n = Nn()), ze(n)), _i(n, n), n;
}
function U() {
	if (T) return _i(E, null), E;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Nn();
	return e.append(t, n), _i(t, n), e;
}
function W(e, t) {
	if (T) {
		var n = R;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = E), Be();
		return;
	}
	e !== null && e.before(t);
}
function xi() {
	if (T && E && E.nodeType === 8 && E.textContent?.startsWith("$")) {
		let e = E.textContent.substring(1);
		return Be(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
var Si = !0;
function Ci(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[pe] ??= e.nodeValue) && (e[pe] = n, e.nodeValue = `${n}`);
}
function wi(e, t) {
	return Ei(e, t);
}
var Ti = /* @__PURE__ */ new Map();
function Ei(e, { target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	Mn();
	var l = void 0, u = tr(() => {
		var u = n ?? t.appendChild(Nn());
		en(u, { pending: () => {} }, (t) => {
			O({});
			var n = $e;
			if (o && (n.c = o), a && (i.$$events = a), T && _i(t, null), Si = s, l = e(t, i) || {}, Si = !0, T && (R.nodes.end = E, E === null || E.nodeType !== 8 || E.data !== "]")) throw Fe(), Ae;
			k();
		}, c);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = ri(r);
					for (let e of [t, document]) {
						var a = Ti.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Ti.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, pi, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(r(ai)), oi.add(f), () => {
			for (var e of d) for (let n of [t, document]) {
				var r = Ti.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, pi), r.delete(e), r.size === 0 && Ti.delete(n)) : r.set(e, i);
			}
			oi.delete(f), u !== n && u.parentNode?.removeChild(u);
		};
	});
	return Di.set(l, u), l;
}
var Di = /* @__PURE__ */ new WeakMap();
function Oi(e, t) {
	let n = Di.get(e);
	return n ? (Di.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var ki = class {
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
			if (n) _r(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (fr(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						yr(r, t), t.append(Nn()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else fr(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), hr(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (fr(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = A, r = Ln();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Nn();
			i.append(a), this.#n.set(e, {
				effect: cr(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, cr(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else T && (this.anchor = E), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Ai(e, t, n = !1) {
	var r;
	T && (r = E, Be());
	var i = new ki(e), a = n ? S : 0;
	function o(e, t) {
		if (T) {
			var n = Ue(r);
			if (e !== parseInt(n.substring(1))) {
				var a = He();
				ze(a), i.anchor = a, Re(!1), i.ensure(e, t), Re(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	or(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/key.js
var ji = Symbol("NaN");
function Mi(e, t, n) {
	T && Be();
	var r = new ki(e), i = !at();
	or(() => {
		var e = t();
		e !== e && (e = ji), i && typeof e == "object" && e && (e = {}), r.ensure(e, n);
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Ni(e, t, n) {
	for (var i = [], a = t.length, o, s = t.length, c = 0; c < a; c++) {
		let n = t[c];
		hr(n, () => {
			if (o) {
				if (o.pending.delete(n), o.done.add(n), o.pending.size === 0) {
					var t = e.outrogroups;
					Pi(e, r(o.done)), t.delete(o), t.size === 0 && (e.outrogroups = null);
				}
			} else --s;
		}, !1);
	}
	if (s === 0) {
		var l = i.length === 0 && n !== null;
		if (l) {
			var u = n, d = u.parentNode;
			In(d), d.append(u), e.items.clear();
		}
		Pi(e, t, !l);
	} else o = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(o);
}
function Pi(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= re, yr(a, document.createDocumentFragment())) : fr(t[i], n);
	}
}
var Fi;
function Ii(t, n, i, a, o, s = null) {
	var c = t, l = /* @__PURE__ */ new Map();
	if (n & 4) {
		var u = t;
		c = T ? ze(/* @__PURE__ */ Pn(u)) : u.appendChild(Nn());
	}
	T && Be();
	var d = null, f = /* @__PURE__ */ un(() => {
		var t = i();
		return e(t) ? t : t == null ? [] : r(t);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Ri(v, p, c, n, a), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= re, Bi(d, null, c)) : _r(d) : hr(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: or(() => {
			p = z(f);
			var e = p.length;
			let t = !1;
			T && Ue(c) === "[!" != (e === 0) && (c = He(), ze(c), Re(!1), t = !0);
			for (var r = /* @__PURE__ */ new Set(), u = A, v = Ln(), y = 0; y < e; y += 1) {
				T && E.nodeType === 8 && E.data === "]" && (c = E, t = !0, Re(!1));
				var b = p[y], x = a(b, y), ee = h ? null : l.get(x);
				ee ? (ee.v && xn(ee.v, b), ee.i && xn(ee.i, y), v && u.unskip_effect(ee.e)) : (ee = zi(l, h ? c : Fi ??= Nn(), b, x, y, o, n, i), h || (ee.e.f |= re), l.set(x, ee)), r.add(x);
			}
			if (e === 0 && s && !d && (h ? d = cr(() => s(c)) : (d = cr(() => s(Fi ??= Nn())), d.f |= re)), e > r.size && ye("", "", ""), T && e > 0 && ze(He()), !h) if (m.set(u, r), v) {
				for (let [e, t] of l) r.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			t && Re(!0), z(f);
		}),
		flags: n,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, T && (c = E);
}
function Li(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Ri(e, t, n, i, a) {
	var o = (i & 8) != 0, s = t.length, c = e.items, l = Li(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (o) for (v = 0; v < s; v += 1) h = t[v], g = a(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = a(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (_r(_), o && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= re, _ === l) Bi(_, null, n);
		else {
			var y = d ? d.next : l;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Vi(e, d, _), Vi(e, _, y), Bi(_, y, n), d = _, p = [], m = [], l = Li(d.next);
			continue;
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var ee = p[0], te = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Bi(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Vi(e, ee.prev, te.next), Vi(e, d, ee), Vi(e, te, b), l = b, d = te, --v, p = [], m = [];
				} else u.delete(_), Bi(_, l, n), Vi(e, _.prev, _.next), Vi(e, _, d === null ? e.effect.first : d.next), Vi(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = Li(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = Li(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Pi(e, r(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var S = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || S.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && S.push(l), l = Li(l.next);
		var C = S.length;
		if (C > 0) {
			var ne = i & 4 && s === 0 ? n : null;
			if (o) {
				for (v = 0; v < C; v += 1) S[v].nodes?.a?.measure();
				for (v = 0; v < C; v += 1) S[v].nodes?.a?.fix();
			}
			Ni(e, S, ne);
		}
	}
	o && ut(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function zi(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? yn(n) : /* @__PURE__ */ bn(n, !1, !1) : null, l = o & 2 ? yn(i) : null;
	return {
		v: c,
		i: l,
		e: cr(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Bi(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Fn(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Vi(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function G(e, t, ...n) {
	var r = new ki(e);
	or(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, S);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
function Hi(e, t, n) {
	var r;
	T && (r = E, Be());
	var i = new ki(e);
	or(() => {
		var e = t() ?? null;
		if (T && Ue(r) === "[" != (e !== null)) {
			var a = He();
			ze(a), i.anchor = a, Re(!1), i.ensure(e, e && ((t) => n(t, e))), Re(!0);
			return;
		}
		i.ensure(e, e && ((t) => n(t, e)));
	}, S);
}
//#endregion
//#region node_modules/svelte/src/internal/client/timing.js
var Ui = () => performance.now(), Wi = {
	tick: (e) => requestAnimationFrame(e),
	now: () => Ui(),
	tasks: /* @__PURE__ */ new Set()
};
//#endregion
//#region node_modules/svelte/src/internal/client/loop.js
function Gi() {
	let e = Wi.now();
	Wi.tasks.forEach((t) => {
		t.c(e) || (Wi.tasks.delete(t), t.f());
	}), Wi.tasks.size !== 0 && Wi.tick(Gi);
}
function Ki(e) {
	let t;
	return Wi.tasks.size === 0 && Wi.tick(Gi), {
		promise: new Promise((n) => {
			Wi.tasks.add(t = {
				c: e,
				f: n
			});
		}),
		abort() {
			Wi.tasks.delete(t);
		}
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/transitions.js
function qi(e, t) {
	Wn(() => {
		e.dispatchEvent(new CustomEvent(t));
	});
}
function Ji(e) {
	if (e === "float") return "cssFloat";
	if (e === "offset") return "cssOffset";
	if (e.startsWith("--")) return e;
	let t = e.split("-");
	return t.length === 1 ? t[0] : t[0] + t.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
function Yi(e) {
	let t = {}, n = e.split(";");
	for (let e of n) {
		let [n, r] = e.split(":");
		if (!n || r === void 0) break;
		let i = Ji(n.trim());
		t[i] = r.trim();
	}
	return t;
}
var Xi = (e) => e, Zi = null;
function Qi(e, t, n) {
	var r = (Zi ?? R).nodes, i, a, o, s = null;
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
				o = ea(this.element, e, void 0, 1, () => {}, () => {
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
function $i(e, t, n, r) {
	var i = (e & 1) != 0, a = (e & 2) != 0, o = i && a, s = (e & 4) != 0, c = o ? "both" : i ? "in" : "out", l, u = t.inert, d = t.style.overflow, f, p;
	function m() {
		return Wn(() => l ??= n()(t, r?.() ?? {}, { direction: c }));
	}
	var h = {
		is_global: s,
		in() {
			if (t.inert = u, !i) {
				p?.abort(), p?.reset?.();
				return;
			}
			a || f?.abort(), f = ea(t, m(), p, 1, () => {
				qi(t, "introstart");
			}, () => {
				qi(t, "introend"), f?.abort(), f = l = void 0, t.style.overflow = d;
			});
		},
		out(e) {
			if (!a) {
				e?.(), l = void 0;
				return;
			}
			t.inert = !0, p = ea(t, m(), f, 0, () => {
				qi(t, "outrostart");
			}, () => {
				qi(t, "outroend"), e?.();
			});
		},
		stop: () => {
			f?.abort(), p?.abort();
		}
	}, g = R;
	if ((g.nodes.t ??= []).push(h), i && Si) {
		var _ = s;
		if (!_) {
			for (var v = g.parent; v && v.f & 65536;) for (; (v = v.parent) && !(v.f & 16););
			_ = !v || (v.f & 32768) != 0;
		}
		_ && nr(() => {
			B(() => h.in());
		});
	}
}
function ea(e, t, n, r, i, a) {
	var o = r === 1;
	if (d(t)) {
		var s, c = !1;
		return ut(() => {
			c || (s = ea(e, t({ direction: o ? "in" : "out" }), n, r, i, a));
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
	let { delay: l = 0, css: u, tick: p, easing: m = Xi } = t;
	var h = [];
	if (o && n === void 0 && (p && p(0, 1), u)) {
		var g = Yi(u(0, 1));
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
				var g = o + s * m(h / f), y = Yi(u(g, 1 - g));
				l.push(y), d ||= y.overflow === "hidden";
			}
			d && (e.style.overflow = "hidden"), _ = () => {
				var e = v.currentTime;
				return o + s * m(e / c);
			}, p && Ki(() => {
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
function ta(e, t) {
	var n = void 0, r;
	sr(() => {
		n !== (n = t()) && (r &&= (fr(r), null), n && (r = cr(() => {
			nr(() => n(e));
		})));
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function na(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = na(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function ra() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = na(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function ia(e) {
	return typeof e == "object" ? ra(e) : e ?? "";
}
var aa = [..." 	\n\r\f\xA0\v﻿"];
function oa(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || aa.includes(r[o - 1])) && (s === r.length || aa.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function sa(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function ca(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function la(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(ca)), i && c.push(...Object.keys(i).map(ca));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = ca(e.substring(l, u).trim());
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
		return r && (n += sa(r)), i && (n += sa(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function ua(e, t, n, r, i, a) {
	var o = e[w];
	if (T || o !== n || o === void 0) {
		var s = oa(n, r, a);
		(!T || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[w] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function da(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function fa(e, t, n, r) {
	var i = e[fe];
	if (T || i !== t) {
		var a = la(t, r);
		(!T || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[fe] = t;
	} else r && (Array.isArray(r) ? (da(e, n?.[0], r[0]), da(e, n?.[1], r[1], "important")) : da(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function pa(t, n, r = !1) {
	if (t.multiple) {
		if (n == null) return;
		if (!e(n)) return Ie();
		for (var i of t.options) i.selected = n.includes(ha(i));
		return;
	}
	for (i of t.options) if (Dn(ha(i), n)) {
		i.selected = !0;
		return;
	}
	(!r || n !== void 0) && (t.selectedIndex = -1);
}
function ma(e) {
	var t = new MutationObserver(() => {
		pa(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), Xn(() => {
		t.disconnect();
	});
}
function ha(e) {
	return "__value" in e ? e.__value : e.value;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var ga = Symbol("class"), _a = Symbol("style"), va = Symbol("is custom element"), ya = Symbol("is html"), ba = ge ? "link" : "LINK", xa = ge ? "input" : "INPUT", Sa = ge ? "option" : "OPTION", Ca = ge ? "select" : "SELECT";
function wa(e) {
	if (T) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					Ea(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					Ea(e, "checked", null), e.checked = r;
				}
			}
		};
		e[me] = n, ut(n), Un();
	}
}
function Ta(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ea(e, t, n, r) {
	var i = ka(e);
	T && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ba) || i[t] !== (i[t] = n) && (t === "loading" && (e[ue] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ja(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Da(e, t, n, r, i = !1, a = !1) {
	if (T && i && e.nodeName === xa) {
		var o = e;
		(o.type === "checkbox" ? "defaultChecked" : "defaultValue") in n || wa(o);
	}
	var s = ka(e), c = s[va], l = !s[ya];
	let u = T && c;
	u && Re(!1);
	var d = t || {}, f = e.nodeName === Sa;
	for (var p in t) p in n || (n[p] = null);
	n.class ? n.class = ia(n.class) : (r || n[ga]) && (n.class = null), n[_a] && (n.style ??= null);
	var m = ja(e);
	for (let i in n) {
		let o = n[i];
		if (f && i === "value" && o == null) {
			e.value = e.__value = "", d[i] = o;
			continue;
		}
		if (i === "class") {
			ua(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", o, r, t?.[ga], n[ga]), d[i] = o, d[ga] = n[ga];
			continue;
		}
		if (i === "style") {
			fa(e, o, t?.[_a], n[_a]), d[i] = o, d[_a] = n[_a];
			continue;
		}
		var h = d[i];
		if (!(o === h && !(o === void 0 && e.hasAttribute(i)))) {
			d[i] = o;
			var g = i[0] + i[1];
			if (g !== "$$") if (g === "on") {
				let t = {}, n = "$$" + i, r = i.slice(2);
				var _ = Qr(r);
				if (Xr(r) && (r = r.slice(0, -7), t.capture = !0), !_ && h) {
					if (o != null) continue;
					e.removeEventListener(r, d[n], t), d[n] = null;
				}
				if (_) ui(r, e, o), di([r]);
				else if (o != null) {
					function a(e) {
						d[i].call(this, e);
					}
					d[n] = ci(r, e, a, t);
				}
			} else if (i === "style") Ea(e, i, o);
			else if (i === "autofocus") Bn(e, !!o);
			else if (!c && (i === "__value" || i === "value" && o != null)) e.value = e.__value = o;
			else if (i === "selected" && f) Ta(e, o);
			else {
				var v = i;
				l || (v = ti(v));
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
				else y || m.includes(v) && (c || typeof o != "string") ? (e[v] = o, v in s && (s[v] = je)) : typeof o != "function" && Ea(e, v, o, a);
			}
		}
	}
	return u && Re(!0), d;
}
function Oa(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	nn(i, n, r, (n) => {
		var r = void 0, i = {}, c = e.nodeName === Ca, l = !1;
		if (sr(() => {
			var u = t(...n.map(z)), d = Da(e, r, u, a, o, s);
			l && c && "value" in u && pa(e, u.value);
			for (let e of Object.getOwnPropertySymbols(i)) u[e] || fr(i[e]);
			for (let t of Object.getOwnPropertySymbols(u)) {
				var f = u[t];
				t.description === "@attach" && (!r || f !== r[t]) && (i[t] && fr(i[t]), i[t] = cr(() => ta(e, () => f))), d[t] = f;
			}
			r = d;
		}), c) {
			var u = e;
			nr(() => {
				pa(u, r.value, !0), ma(u);
			});
		}
		l = !0;
	});
}
function ka(e) {
	return e[de] ??= {
		[va]: e.nodeName.includes("-"),
		[ya]: e.namespaceURI === Me
	};
}
var Aa = /* @__PURE__ */ new Map();
function ja(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Aa.get(t);
	if (n) return n;
	Aa.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var s in r = o(i), r) r[s].set && s !== "innerHTML" && s !== "textContent" && s !== "innerText" && n.push(s);
		i = l(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function Ma(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	Gn(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = Na(e) ? Pa(a) : a, n(a), A !== null && r.add(A), await Wr(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (T && e.defaultValue !== e.value || B(t) == null && e.value) && (n(Na(e) ? Pa(e.value) : e.value), A !== null && r.add(A)), ir(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = qe ? Nt : A;
			if (r.has(i)) return;
		}
		Na(e) && n === Pa(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function Na(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function Pa(e) {
	return e === "" ? null : +e;
}
function Fa(e, t, n = t) {
	Gn(e, "change", () => {
		n(e.files);
	}), T && e.files && n(e.files), ir(() => {
		e.files = t();
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Ia(e, t) {
	return e === t || e?.[ce] === t;
}
function La(e = {}, t, n, r) {
	var i = $e.r, a = R;
	return nr(() => {
		var o, s;
		return ir(() => {
			o = s, s = r?.() || [], B(() => {
				Ia(n(...s), e) || (t(e, ...s), o && Ia(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Ia(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Ra(e = !1) {
	let t = $e, n = t.l.u;
	if (!n) return;
	let r = () => qr(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ sn(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => z(i);
	}
	n.b.length && $n(() => {
		za(t, r), m(n.b);
	}), Zn(() => {
		let e = B(() => n.m.map(p));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Zn(() => {
		za(t, r), m(n.a);
	});
}
function za(e, t) {
	if (e.l.s) for (let t of e.l.s) z(t);
	t();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
var Ba = {
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
	}, Ba);
}
var Va = {
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
		if (t === ce || t === le) return !1;
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
function Ha(...e) {
	return new Proxy({ props: e }, Va);
}
function q(e, t, n, r) {
	var i = !Je || (n & 2) != 0, o = (n & 8) != 0, s = (n & 16) != 0, c = r, l = !0, u = void 0, d = () => s && i ? (u ??= /* @__PURE__ */ sn(r), z(u)) : (l && (l = !1, c = s ? B(r) : r), c);
	let f;
	if (o) {
		var p = ce in e || le in e;
		f = a(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	o ? [m, h] = At(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && we(t), f(m)));
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
	var v = !1, y = (n & 1 ? sn : un)(() => (v = !1, g()));
	o && z(y);
	var b = R;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? z(y) : i && o ? Tn(e) : e;
			return N(y, n), v = !0, c !== void 0 && (c = n), e;
		}
		return Sr && v || b.f & 16384 ? y.v : z(y);
	});
}
function Ua(e) {
	$e === null && _e("onMount"), Je && $e.l !== null ? Wa($e).m.push(e) : Zn(() => {
		let t = B(e);
		if (typeof t == "function") return t;
	});
}
function Wa(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region src/shared/utils/overrides.ts
var Ga = (e) => {
	window.CHANNEL.js = e;
	let t = document.querySelector("#cs-jstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channeljs) return;
	let n = document.createElement("script");
	n.id = "chanjs", n.type = "text/javascript", n.textContent = e, document.body.append(n);
}, Ka = (e) => {
	window.CHANNEL.css = e;
	let t = document.querySelector("#cs-csstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channelcss) return;
	let n = document.createElement("style");
	n.id = "chancss", n.textContent = e, document.head.append(n);
}, qa = (e) => {
	let t = document.querySelector("#chanjs");
	if (!t) {
		Ga(e);
		return;
	}
	t.textContent !== e && (t.remove(), Ga(e));
}, Ja = (e) => {
	let t = document.querySelector("#chancss");
	if (!t) {
		Ka(e);
		return;
	}
	t.textContent !== e && (t.remove(), Ka(e));
}, Ya = () => {
	window.Callbacks.channelCSSJS = ({ css: e, js: t }) => {
		e && Ja(e), t && qa(t);
	};
}, Xa = () => {
	let e = new URL("dist/favicon.ico", window.BASE_URL), t = document.createElement("link");
	t.href = e.toString(), t.type = "image/x-icon", t.rel = "shortcut icon", document.head.append(t);
}, Za = () => {
	Ya(), Xa();
}, Qa = async () => new Promise((e) => {
	eo.once("connect", e), eo.connect();
}), $a = async () => new Promise((e, t) => {
	eo.once("disconnect", (n) => {
		if (n === "io client disconnect") {
			e();
			return;
		}
		t(n);
	}), eo.disconnect();
}), eo = window.socket, to = {
	ADMIN: 3,
	ANON: -1,
	GUEST: 0,
	MODERATOR: 2,
	SITERADMIN: 255,
	USER: 1
}, no = { userlist: [] }, ro = (e) => {
	let { subscribe: t, set: n, update: r } = xt({
		...no,
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
}, io = (e) => eo.on("addUser", e), ao = (e) => eo.on("userLeave", e), oo = () => Array.from(document.body.querySelectorAll("#userlist .userlist_item")).map((e) => $(e)).map((e) => ({
	meta: {
		afk: e.data("afk") || !1,
		muted: e.data("meta") && e.data("meta").muted || !1
	},
	name: e.data("name") || "",
	profile: e.data("profile") || {
		image: "",
		text: ""
	},
	rank: e.data("rank") || to.ANON
})), so = ro(), co = { version: "" }, lo = ((e) => {
	let { subscribe: t, set: n, update: r } = xt({
		...co,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetVersion: () => r((e) => ({
			...e,
			version: co.version
		})),
		updateVersion: (e) => r((t) => ({
			...t,
			version: e
		}))
	};
})(), uo = {
	leader: !1,
	logged_in: !1,
	name: "",
	profile: {
		image: "",
		text: ""
	},
	rank: -1
}, fo = ((e) => {
	let { subscribe: t, set: n, update: r } = xt({
		...uo,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetLoggedIn: () => r((e) => ({
			...e,
			logged_in: uo.logged_in
		})),
		resetName: () => r((e) => ({
			...e,
			name: uo.name
		})),
		resetRank: () => r((e) => ({
			...e,
			rank: uo.rank
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
})(), po = { csrf: "" }, mo = ((e) => {
	let { subscribe: t, set: n, update: r } = xt({
		...po,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetCSRF: () => r((e) => ({
			...e,
			csrf: po.csrf
		})),
		updateCSRF: (e) => r((t) => ({
			...t,
			csrf: e
		}))
	};
})(), ho = { connected: !0 }, go = ((e) => {
	let { subscribe: t, set: n, update: r } = xt({
		...ho,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetConnected: () => r((e) => ({
			...e,
			connected: ho.connected
		})),
		updateConnected: (e) => r((t) => ({
			...t,
			connected: e
		}))
	};
})(), _o = () => (fo.init({ ...window.CLIENT }), fo.subscribe((e) => {
	window.CLIENT = e;
})), vo = () => {
	let e = document.querySelector("input[name=\"_csrf\"]");
	if (!e) throw Error("CSRF element not found");
	let t = e.value;
	if (!t) throw Error("CSRF token not found");
	mo.init({ csrf: t });
}, yo = () => (lo.init({ version: window.VERSION }), lo.subscribe((e) => {
	window.VERSION = e.version;
})), bo = () => {
	go.init(eo), eo.on("connect", () => go.updateConnected(eo.connected)), eo.on("disconnect", () => go.updateConnected(eo.connected));
}, xo = () => {
	let e = oo();
	so.init({ userlist: e }), io(so.addUser), ao(({ name: e }) => so.removeUser(e));
}, So = () => {
	let e = _o(), t = yo();
	return vo(), bo(), xo(), () => {
		e(), t();
	};
};
//#endregion
//#region node_modules/svelte/src/internal/flags/legacy.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5"), Ye();
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/is.js
function Co(e) {
	return typeof e == "function";
}
function wo(e) {
	return typeof e == "object" && !!e;
}
var To = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function Eo(e) {
	return e == null || To.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => Eo(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/box/box-extras.svelte.js
var Do = Symbol("box"), Oo = Symbol("is-writable");
function J(e, t) {
	let n = /* @__PURE__ */ j(e);
	return t ? {
		[Do]: !0,
		[Oo]: !0,
		get current() {
			return z(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[Do]: !0,
		get current() {
			return e();
		}
	};
}
function ko(e) {
	return wo(e) && Do in e;
}
function Ao(e) {
	return ko(e) ? e : Co(e) ? J(e) : jo(e);
}
function jo(e) {
	let t = /* @__PURE__ */ M(Tn(e));
	return {
		[Do]: !0,
		[Oo]: !0,
		get current() {
			return z(t);
		},
		set current(e) {
			N(t, e, !0);
		}
	};
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
function Mo(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
//#endregion
//#region node_modules/inline-style-parser/esm/index.mjs
var No = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Po = /\n/g, Fo = /^\s*/, Io = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Lo = /^:\s*/, Ro = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, zo = /^[;\s]*/, Bo = /^\s+|\s+$/g, Vo = "\n", Ho = "/", Uo = "*", Wo = "", Go = "comment", Ko = "declaration";
function qo(e, t) {
	if (typeof e != "string") throw TypeError("First argument must be a string");
	if (!e) return [];
	t ||= {};
	var n = 1, r = 1;
	function i(e) {
		var t = e.match(Po);
		t && (n += t.length);
		var i = e.lastIndexOf(Vo);
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
		c(Fo);
	}
	function u(e) {
		var t;
		for (e ||= []; t = d();) t !== !1 && e.push(t);
		return e;
	}
	function d() {
		var t = a();
		if (!(Ho != e.charAt(0) || Uo != e.charAt(1))) {
			for (var n = 2; Wo != e.charAt(n) && (Uo != e.charAt(n) || Ho != e.charAt(n + 1));) ++n;
			if (n += 2, Wo === e.charAt(n - 1)) return s("End of comment missing");
			var o = e.slice(2, n - 2);
			return r += 2, i(o), e = e.slice(n), r += 2, t({
				type: Go,
				comment: o
			});
		}
	}
	function f() {
		var e = a(), t = c(Io);
		if (t) {
			if (d(), !c(Lo)) return s("property missing ':'");
			var n = c(Ro), r = e({
				type: Ko,
				property: Jo(t[0].replace(No, Wo)),
				value: n ? Jo(n[0].replace(No, Wo)) : Wo
			});
			return c(zo), r;
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
function Jo(e) {
	return e ? e.replace(Bo, Wo) : Wo;
}
//#endregion
//#region node_modules/style-to-object/esm/index.mjs
function Yo(e, t) {
	let n = null;
	if (!e || typeof e != "string") return n;
	let r = qo(e), i = typeof t == "function";
	return r.forEach((e) => {
		if (e.type !== "declaration") return;
		let { property: r, value: a } = e;
		i ? t(r, a, e) : a && (n ||= {}, n[r] = a);
	}), n;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/strings.js
var Xo = /\d/, Zo = [
	"-",
	"_",
	"/",
	"."
];
function Qo(e = "") {
	if (!Xo.test(e)) return e !== e.toLowerCase();
}
function $o(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = Zo.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = Qo(a);
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
function es(e) {
	return e ? $o(e).map((e) => ns(e)).join("") : "";
}
function ts(e) {
	return rs(es(e || ""));
}
function ns(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function rs(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function is(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[es(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[ts(e)] = n;
	}
	return Yo(e, n), t;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
function as(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function os(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var ss = os(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function cs(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${ss(t)}: ${e[t]};`).join("\n");
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/style.js
function ls(e = {}) {
	return cs(e).replace("\n", " ");
}
var us = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/merge-props.js
function ds(e) {
	return us.has(e);
}
function fs(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
				if (a && typeof o && ds(e)) t[e] = Mo(n, i);
				else if (a && o) t[e] = as(n, i);
				else if (e === "class") {
					let r = Eo(n), a = Eo(i);
					r && a ? t[e] = ra(n, i) : r ? t[e] = ra(n) : a && (t[e] = ra(i));
				} else if (e === "style") {
					let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
					if (r && a) t[e] = {
						...n,
						...i
					};
					else if (r && s) {
						let r = is(i);
						t[e] = {
							...n,
							...r
						};
					} else if (o && a) t[e] = {
						...is(n),
						...i
					};
					else if (o && s) {
						let r = is(n), a = is(i);
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
	return typeof t.style == "object" && (t.style = ls(t.style).replaceAll("\n", " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t;
}
//#endregion
//#region node_modules/runed/dist/internal/configurable-globals.js
var ps = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/runed/dist/internal/utils/dom.js
function ms(e) {
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
var hs = class extends Map {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ M(0);
	#n = /* @__PURE__ */ M(0);
	#r = Fr || -1;
	constructor(e) {
		if (super(), e) {
			for (var [t, n] of e) super.set(t, n);
			this.#n.v = super.size;
		}
	}
	#i(e) {
		return Fr === this.#r ? /* @__PURE__ */ M(e) : yn(e);
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
		if (r === void 0) r = this.#i(0), n.set(e, r), N(this.#n, super.size), Cn(o);
		else if (i !== t) {
			Cn(r);
			var s = o.reactions === null ? null : new Set(o.reactions);
			(s === null || !r.reactions?.every((e) => s.has(e))) && Cn(o);
		}
		return a;
	}
	delete(e) {
		var t = this.#e, n = t.get(e), r = super.delete(e);
		return n !== void 0 && (t.delete(e), N(n, -1)), r && (N(this.#n, super.size), Cn(this.#t)), r;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#e;
			N(this.#n, 0);
			for (var t of e.values()) N(t, -1);
			Cn(this.#t), e.clear();
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
		let { window: t = ps, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = Qt((e) => {
			let n = V(t, "focusin", e), r = V(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? ms(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/runed/dist/internal/utils/is.js
function gs(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/runed/dist/utilities/context/context.js
var _s = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return rt(this.#t);
	}
	get() {
		let e = tt(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = tt(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return nt(this.#t, e);
	}
};
//#endregion
//#region node_modules/runed/dist/utilities/watch/watch.svelte.js
function vs(e, t) {
	switch (e) {
		case "post":
			Zn(t);
			break;
		case "pre":
			$n(t);
			break;
	}
}
function ys(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	vs(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = B(() => n(t, o));
		return o = t, r;
	});
}
function bs(e, t, n) {
	let r = er(() => {
		let i = !1;
		ys(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Zn(() => r);
}
function xs(e, t, n) {
	ys(e, "post", t, n);
}
function Ss(e, t, n) {
	ys(e, "pre", t, n);
}
xs.pre = Ss;
function Cs(e, t) {
	bs(e, "post", t);
}
function ws(e, t) {
	bs(e, "pre", t);
}
Cs.pre = ws;
//#endregion
//#region node_modules/runed/dist/internal/utils/get.js
function Ts(e) {
	return gs(e) ? e() : e;
}
//#endregion
//#region node_modules/runed/dist/utilities/element-size/element-size.svelte.js
var Es = class {
	#e = {
		width: 0,
		height: 0
	};
	#t = !1;
	#n;
	#r;
	#i;
	#a = /* @__PURE__ */ j(() => (z(this.#s)?.(), this.getSize().width));
	#o = /* @__PURE__ */ j(() => (z(this.#s)?.(), this.getSize().height));
	#s = /* @__PURE__ */ j(() => {
		let e = Ts(this.#r);
		if (e) return Qt((t) => {
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
		this.#i = t.window ?? ps, this.#n = t, this.#r = e, this.#e = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		let e = Ts(this.#r);
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
function Ds(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function Os(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function ks(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ M(Tn(o)), u = /* @__PURE__ */ M(!1), d = /* @__PURE__ */ M(void 0), f = /* @__PURE__ */ M(Tn([])), p = () => {
		z(f).forEach((e) => e()), N(f, [], !0);
	}, m = (e) => {
		N(f, [...z(f), e], !0);
	}, h = async (e, n, r = !1) => {
		try {
			N(u, !0), N(d, void 0), p();
			let i = new AbortController();
			m(() => i.abort());
			let a = await t(e, n, {
				data: z(l),
				refetching: r,
				onCleanup: m,
				signal: i.signal
			});
			return N(l, a, !0), a;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || N(d, e, !0);
			return;
		} finally {
			N(u, !1);
		}
	}, g = s ? Ds(h, s) : c ? Os(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
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
			N(l, e, !0);
		},
		refetch: (t) => {
			let n = _.map((e) => e());
			return g(Array.isArray(e) ? n : n[0], Array.isArray(e) ? n : n[0], t ?? !0);
		}
	};
}
function As(e, t, n) {
	return ks(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		xs(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function js(e, t, n) {
	return ks(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		xs.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
As.pre = js;
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/on-destroy-effect.svelte.js
function Ms(e) {
	Zn(() => () => {
		e();
	});
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/on-mount-effect.svelte.js
function Ns(e) {
	Zn(() => B(() => e()));
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-sleep.js
function Ps(e, t) {
	return setTimeout(t, e);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-tick.js
function Fs(e) {
	Wr().then(e);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/dom.js
var Is = 1, Ls = 9, Rs = 11;
function zs(e) {
	return wo(e) && e.nodeType === Is && typeof e.nodeName == "string";
}
function Bs(e) {
	return wo(e) && e.nodeType === Ls;
}
function Vs(e) {
	return wo(e) && e.constructor?.name === "VisualViewport";
}
function Hs(e) {
	return wo(e) && e.nodeType !== void 0;
}
function Us(e) {
	return Hs(e) && e.nodeType === Rs && "host" in e;
}
function Ws(e, t) {
	if (!e || !t || !zs(e) || !zs(t)) return !1;
	let n = t.getRootNode?.();
	if (e === t || e.contains(t)) return !0;
	if (n && Us(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function Gs(e) {
	return Bs(e) ? e : Vs(e) ? e.document : e?.ownerDocument ?? document;
}
function Ks(e) {
	return Us(e) ? Ks(e.host) : Bs(e) ? e.defaultView ?? window : zs(e) ? e.ownerDocument?.defaultView ?? window : window;
}
function qs(e) {
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
var Js = class {
	element;
	#e = /* @__PURE__ */ j(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return z(this.#e);
	}
	set root(e) {
		N(this.#e, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = J(e) : this.element = e;
	}
	getDocument = () => Gs(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => qs(this.root);
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
function Ys(e, t) {
	return { [Yr()]: (n) => ko(e) ? (e.current = n, B(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), B(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
//#endregion
//#region node_modules/bits-ui/dist/internal/attrs.js
function Xs(e) {
	return e ? "true" : "false";
}
function Zs(e) {
	return e ? "open" : "closed";
}
function Qs(e) {
	return e === "starting" ? { "data-starting-style": "" } : e === "ending" ? { "data-ending-style": "" } : {};
}
var $s = class {
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
function ec(e) {
	let t = new $s(e);
	return {
		...t.attrs,
		selector: t.selector,
		getAttr: t.getAttr
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/is.js
var tc = typeof document < "u", nc = rc();
function rc() {
	return tc && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function ic(e) {
	return e instanceof HTMLElement;
}
function ac(e) {
	return e instanceof Element;
}
function oc(e) {
	return e instanceof Element || e instanceof SVGElement;
}
function sc(e) {
	return e.pointerType === "touch";
}
function cc(e) {
	return e.matches(":focus-visible");
}
function lc(e) {
	return e !== null;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/animations-complete.js
var uc = class {
	#e;
	#t = null;
	#n = null;
	#r = 0;
	constructor(e) {
		this.#e = e, Ms(() => this.#i());
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
		this.#e.afterTick ? Fs(t) : t();
	}
}, dc = class {
	#e;
	#t;
	#n;
	#r = /* @__PURE__ */ M(!1);
	#i = /* @__PURE__ */ M(void 0);
	#a = !1;
	#o = null;
	constructor(e) {
		this.#e = e, N(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new uc({
			ref: this.#e.ref,
			afterTick: this.#e.open
		}), Ms(() => this.#s()), xs(() => this.#e.open.current, (e) => {
			if (!this.#a) {
				this.#a = !0;
				return;
			}
			if (this.#s(), !e && this.#e.shouldSkipExitAnimation?.()) {
				N(this.#r, !1), N(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			if (e && N(this.#r, !0), N(this.#i, e ? "starting" : "ending", !0), e && (this.#o = window.requestAnimationFrame(() => {
				this.#o = null, this.#e.open.current && N(this.#i, void 0);
			})), !this.#t) {
				e || N(this.#r, !1), N(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			this.#n.run(() => {
				e === this.#e.open.current && (this.#e.open.current || N(this.#r, !1), N(this.#i, void 0), this.#e.onComplete?.());
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
function fc() {}
//#endregion
//#region node_modules/bits-ui/dist/internal/create-id.js
function pc(e, t) {
	return t === void 0 ? `bits-${e}` : `bits-${e}-${t}`;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal-consumer.svelte
function mc(e, t) {
	var n = U();
	Mi(F(n), () => t.children, (e) => {
		var n = U();
		G(F(n), () => t.children ?? f), W(e, n);
	}), W(e, n);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/bits-config.js
var hc = new _s("BitsConfig");
function gc() {
	let e = new _c(null, {});
	return hc.getOr(e).opts;
}
var _c = class {
	opts;
	constructor(e, t) {
		let n = vc(e, t);
		this.opts = {
			defaultPortalTo: n((e) => e.defaultPortalTo),
			defaultLocale: n((e) => e.defaultLocale)
		};
	}
};
function vc(e, t) {
	return (n) => J(() => {
		let r = n(t)?.current;
		if (r !== void 0) return r;
		if (e !== null) return n(e.opts)?.current;
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/prop-resolvers.js
function yc(e, t) {
	return (n) => {
		let r = gc();
		return J(() => {
			let i = n();
			if (i !== void 0) return i;
			let a = e(r).current;
			return a === void 0 ? t : a;
		});
	};
}
var bc = yc((e) => e.defaultPortalTo, "body");
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal.svelte
function xc(e, t) {
	O(t, !0);
	let n = bc(() => t.to), r = it(), i = /* @__PURE__ */ j(a);
	function a() {
		if (!tc || t.disabled) return null;
		let e = null;
		return e = typeof n.current == "string" ? document.querySelector(n.current) : n.current, e;
	}
	let o;
	function s() {
		o &&= (Oi(o), null);
	}
	xs([() => z(i), () => t.disabled], ([e, n]) => {
		if (!e || n) {
			s();
			return;
		}
		return o = wi(mc, {
			target: e,
			props: { children: t.children },
			context: r
		}), () => {
			s();
		};
	});
	var c = U(), l = F(c), u = (e) => {
		var n = U();
		G(F(n), () => t.children ?? f), W(e, n);
	};
	Ai(l, (e) => {
		t.disabled && e(u);
	}), W(e, c), k();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/events.js
var Sc = class {
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
function Cc(e, t = 500) {
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
function wc(e, t) {
	return e === t || e.contains(t);
}
function Tc(e) {
	return e?.ownerDocument ?? document;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/dom.js
function Ec(e, t) {
	let { clientX: n, clientY: r } = e, i = t.getBoundingClientRect();
	return n < i.left || n > i.right || r < i.top || r > i.bottom;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/focus.js
function Dc(e) {
	let t = [], n = Gs(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
//#endregion
//#region node_modules/tabbable/dist/index.esm.js
var Oc = [
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
], kc = /* @__PURE__ */ Oc.join(","), Ac = typeof Element > "u", jc = Ac ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Mc = !Ac && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, Nc = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : Nc(e.parentNode));
}, Pc = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, Fc = function(e, t, n) {
	if (Nc(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(kc));
	return t && jc.call(e, kc) && r.unshift(e), r = r.filter(n), r;
}, Ic = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!Nc(a, !1)) if (a.tagName === "SLOT") {
			var o = a.assignedElements(), s = Ic(o.length ? o : a.children, !0, n);
			n.flatten ? r.push.apply(r, s) : r.push({
				scopeParent: a,
				candidates: s
			});
		} else {
			jc.call(a, kc) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
			var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !Nc(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
			if (c && l) {
				var u = Ic(c === !0 ? a.children : c.children, !0, n);
				n.flatten ? r.push.apply(r, u) : r.push({
					scopeParent: a,
					candidates: u
				});
			} else i.unshift.apply(i, a.children);
		}
	}
	return r;
}, Lc = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, Rc = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Pc(e)) && !Lc(e) ? 0 : e.tabIndex;
}, zc = function(e, t) {
	var n = Rc(e);
	return n < 0 && t && !Lc(e) ? 0 : n;
}, Bc = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, Vc = function(e) {
	return e.tagName === "INPUT";
}, Hc = function(e) {
	return Vc(e) && e.type === "hidden";
}, Uc = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, Wc = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, Gc = function(e) {
	if (!e.name) return !0;
	var t = e.form || Mc(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = Wc(r, e.form);
	return !i || i === e;
}, Kc = function(e) {
	return Vc(e) && e.type === "radio";
}, qc = function(e) {
	return Kc(e) && !Gc(e);
}, Jc = function(e) {
	var t = e && Mc(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = Mc(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, Yc = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, Xc = function(e, t) {
	var n = t.displayCheck, r = t.getShadowRoot;
	if (n === "full-native" && "checkVisibility" in e) return !e.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	if (getComputedStyle(e).visibility === "hidden") return !0;
	var i = jc.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (jc.call(i, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var a = e; e;) {
				var o = e.parentElement, s = Mc(e);
				if (o && !o.shadowRoot && r(o) === !0) return Yc(e);
				e = e.assignedSlot ? e.assignedSlot : !o && s !== e.ownerDocument ? s.host : o;
			}
			e = a;
		}
		if (Jc(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return Yc(e);
	return !1;
}, Zc = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return jc.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, Qc = function(e, t) {
	return !(t.disabled || Hc(t) || Xc(t, e) || Uc(t) || Zc(t));
}, $c = function(e, t) {
	return !(qc(t) || Rc(t) < 0 || !Qc(e, t));
}, el = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, tl = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = zc(a, i), s = i ? tl(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(Bc).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, nl = function(e, t) {
	return t ||= {}, tl(t.getShadowRoot ? Ic([e], t.includeContainer, {
		filter: $c.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: el
	}) : Fc(e, t.includeContainer, $c.bind(null, t)));
}, rl = function(e, t) {
	return t ||= {}, t.getShadowRoot ? Ic([e], t.includeContainer, {
		filter: Qc.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : Fc(e, t.includeContainer, Qc.bind(null, t));
}, il = /* @__PURE__ */ Oc.concat("iframe:not([inert]):not([inert] *)").join(","), al = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return jc.call(e, il) === !1 ? !1 : Qc(t, e);
}, ol = "data-context-menu-trigger", sl = "data-context-menu-content";
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/use-dismissable-layer.svelte.js
new _s("Menu.Root"), new _s("Menu.Root | Menu.Sub"), new _s("Menu.Content"), new _s("Menu.Group | Menu.RadioGroup"), new _s("Menu.RadioGroup"), new _s("Menu.CheckboxGroup"), new Sc("bitsmenuopen", {
	bubbles: !1,
	cancelable: !0
}), ec({
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
var cl = class e {
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
	#s = fc;
	constructor(e) {
		this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#o = e.onFocusOutside, Zn(() => {
			this.#a = Tc(this.opts.ref.current);
		});
		let t = fc, n = () => {
			this.#g(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), t();
		};
		xs([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!(!this.opts.enabled.current || !this.opts.ref.current)) return Ps(1, () => {
				this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), t(), t = this.#l());
			}), n;
		}), Ms(() => {
			this.#g.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), t();
		});
	}
	#c = (e) => {
		e.defaultPrevented || this.opts.ref.current && Fs(() => {
			!this.opts.ref.current || this.#h(e.target) || e.target && !this.#i && this.#o.current?.(e);
		});
	};
	#l() {
		return as(V(this.#a, "pointerdown", as(this.#f, this.#m), { capture: !0 }), V(this.#a, "pointerdown", as(this.#p, this.#d)), V(this.#a, "focusin", this.#c));
	}
	#u = (e) => {
		let t = e;
		t.defaultPrevented && (t = fl(e)), this.#e.current(e);
	};
	#d = Cc((e) => {
		if (!this.opts.ref.current) {
			this.#s();
			return;
		}
		let t = this.opts.isValidEvent.current(e, this.opts.ref.current) || dl(e, this.opts.ref.current);
		if (!this.#r || this.#_() || !t) {
			this.#s();
			return;
		}
		let n = e;
		if (n.defaultPrevented && (n = fl(n)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
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
		this.opts.ref.current && (this.#r = ul(this.opts.ref.current));
	};
	#h = (e) => this.opts.ref.current ? wc(this.opts.ref.current, e) : !1;
	#g = Cc(() => {
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
function ll(e = [...globalThis.bitsDismissableLayers]) {
	return e.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
}
function ul(e) {
	let t = [...globalThis.bitsDismissableLayers], n = ll(t);
	if (n) return n[0].opts.ref.current === e;
	let [r] = t[0];
	return r.opts.ref.current === e;
}
function dl(e, t) {
	let n = e.target;
	if (!oc(n)) return !1;
	let r = !!n.closest(`[${ol}]`), i = !!t.closest(`[${sl}]`);
	return "button" in e && e.button > 0 && !r ? !1 : "button" in e && e.button === 0 && r && i ? !0 : r && i ? !1 : Tc(n).documentElement.contains(n) && !wc(t, n) && Ec(e, t);
}
function fl(e) {
	let t = e.currentTarget, n = e.target, r;
	r = e instanceof PointerEvent ? new PointerEvent(e.type, e) : new PointerEvent("pointerdown", e);
	let i = !1;
	return new Proxy(r, { get: (r, a) => a === "currentTarget" ? t : a === "target" ? n : a === "preventDefault" ? () => {
		i = !0, typeof r.preventDefault == "function" && r.preventDefault();
	} : a === "defaultPrevented" ? i : a in r ? r[a] : e[a] });
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/dismissible-layer.svelte
function pl(e, t) {
	O(t, !0);
	let n = q(t, "interactOutsideBehavior", 3, "close"), r = q(t, "onInteractOutside", 3, fc), i = q(t, "onFocusOutside", 3, fc), a = q(t, "isValidEvent", 3, () => !1), o = cl.create({
		id: J(() => t.id),
		interactOutsideBehavior: J(() => n()),
		onInteractOutside: J(() => r()),
		enabled: J(() => t.enabled),
		onFocusOutside: J(() => i()),
		isValidEvent: J(() => a()),
		ref: t.ref
	});
	var s = U();
	G(F(s), () => t.children ?? f, () => ({ props: o.props })), W(e, s), k();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/use-escape-layer.svelte.js
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var ml = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	constructor(e) {
		this.opts = e, this.domContext = new Js(this.opts.ref);
		let t = fc;
		xs(() => e.enabled.current, (n) => (n && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), t = this.#e()), () => {
			t(), globalThis.bitsEscapeLayers.delete(this);
		}));
	}
	#e = () => V(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
	#t = (e) => {
		if (e.key !== "Escape" || !hl(this)) return;
		let t = new KeyboardEvent(e.type, e);
		e.preventDefault();
		let n = this.opts.escapeKeydownBehavior.current;
		n !== "close" && n !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(t);
	};
};
function hl(e) {
	let t = [...globalThis.bitsEscapeLayers], n = t.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
	if (n) return n[0] === e;
	let [r] = t[0];
	return r === e;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/escape-layer.svelte
function gl(e, t) {
	O(t, !0);
	let n = q(t, "escapeKeydownBehavior", 3, "close"), r = q(t, "onEscapeKeydown", 3, fc);
	ml.create({
		escapeKeydownBehavior: J(() => n()),
		onEscapeKeydown: J(() => r()),
		enabled: J(() => t.enabled),
		ref: t.ref
	});
	var i = U();
	G(F(i), () => t.children ?? f), W(e, i), k();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope-manager.js
var _l = class e {
	static instance;
	#e = jo([]);
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
}, vl = class e {
	#e = !1;
	#t = null;
	#n = _l.getInstance();
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
				if (n && e.contains(n) && al(n)) t.preventDefault(), n.focus();
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
		return this.#t ? nl(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	#u() {
		return this.#l()[0] || null;
	}
	#d() {
		return this.#t ? rl(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	static use(t) {
		let n = null;
		return xs([() => t.ref.current, () => t.enabled.current], ([r, i]) => {
			r && i ? (n ||= new e(t), n.mount(r)) : n &&= (n.unmount(), null);
		}), Ms(() => {
			n?.unmount();
		}), { get props() {
			return { tabindex: -1 };
		} };
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope.svelte
function yl(e, t) {
	O(t, !0);
	let n = q(t, "enabled", 3, !1), r = q(t, "trapFocus", 3, !1), i = q(t, "loop", 3, !1), a = q(t, "onCloseAutoFocus", 3, fc), o = q(t, "onOpenAutoFocus", 3, fc), s = vl.use({
		enabled: J(() => n()),
		trap: J(() => r()),
		loop: i(),
		onCloseAutoFocus: J(() => a()),
		onOpenAutoFocus: J(() => o()),
		ref: t.ref
	});
	var c = U();
	G(F(c), () => t.focusScope ?? f, () => ({ props: s.props })), W(e, c), k();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/use-text-selection-layer.svelte.js
var bl = () => {};
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var xl = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	#e = fc;
	#t = !1;
	#n = bl;
	#r = bl;
	constructor(e) {
		this.opts = e, this.domContext = new Js(e.ref);
		let t = fc;
		xs(() => [
			this.opts.enabled.current,
			this.opts.onPointerDown.current,
			this.opts.onPointerUp.current
		], ([e, n, r]) => (this.#t = e, this.#n = n, this.#r = r, e && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), t(), t = this.#i()), () => {
			this.#t = !1, t(), this.#s(), globalThis.bitsTextSelectionLayers.delete(this);
		}));
	}
	#i() {
		return as(V(this.domContext.getDocument(), "pointerdown", this.#o), V(this.domContext.getDocument(), "pointerup", Mo(this.#s, this.#a)));
	}
	#a = (e) => {
		this.#r(e);
	};
	#o = (e) => {
		let t = this.opts.ref.current, n = e.target;
		!ic(t) || !ic(n) || !this.#t || !Tl(this) || !Ws(t, n) || (this.#n(e), !e.defaultPrevented && (this.#e = Cl(t, this.domContext.getDocument().body)));
	};
	#s = () => {
		this.#e(), this.#e = fc;
	};
}, Sl = (e) => e.style.userSelect || e.style.webkitUserSelect;
function Cl(e, t) {
	let n = Sl(t), r = Sl(e);
	return wl(t, "none"), wl(e, "text"), () => {
		wl(t, n), wl(e, r);
	};
}
function wl(e, t) {
	e.style.userSelect = t, e.style.webkitUserSelect = t;
}
function Tl(e) {
	let t = [...globalThis.bitsTextSelectionLayers];
	if (!t.length) return !1;
	let n = t.at(-1);
	return n ? n[0] === e : !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/text-selection-layer.svelte
function El(e, t) {
	O(t, !0);
	let n = q(t, "preventOverflowTextSelection", 3, !0), r = q(t, "onPointerDown", 3, fc), i = q(t, "onPointerUp", 3, fc);
	xl.create({
		id: J(() => t.id),
		onPointerDown: J(() => r()),
		onPointerUp: J(() => i()),
		enabled: J(() => t.enabled && n()),
		ref: t.ref
	});
	var a = U();
	G(F(a), () => t.children ?? f), W(e, a), k();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/use-id.js
globalThis.bitsIdCounter ??= { current: 0 };
function Dl(e = "bits") {
	return globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/shared-state.svelte.js
var Ol = class {
	#e;
	#t = 0;
	#n = /* @__PURE__ */ M();
	#r;
	constructor(e) {
		this.#e = e;
	}
	#i() {
		--this.#t, this.#r && this.#t <= 0 && (this.#r(), N(this.#n, void 0), this.#r = void 0);
	}
	get(...e) {
		return this.#t += 1, z(this.#n) === void 0 && (this.#r = er(() => {
			N(this.#n, this.#e(...e), !0);
		})), Zn(() => () => {
			this.#i();
		}), z(this.#n);
	}
}, kl = new hs(), Al = /* @__PURE__ */ M(null), jl = null, Ml = null, Nl = !1, Pl = J(() => {
	for (let e of kl.values()) if (e) return !0;
	return !1;
}), Fl = null, Il = new Ol(() => {
	function e() {
		document.body.setAttribute("style", z(Al) ?? ""), document.body.style.removeProperty("--scrollbar-width"), nc && jl?.(), N(Al, null);
	}
	function t() {
		Ml !== null && (window.clearTimeout(Ml), Ml = null);
	}
	function n(e, n) {
		t(), Nl = !0, Fl = Date.now();
		let r = Fl, i = () => {
			Ml = null, Fl === r && (Rl(kl) ? Nl = !1 : (Nl = !1, n()));
		}, a = e === null ? 24 : e;
		Ml = window.setTimeout(i, a);
	}
	function r() {
		z(Al) === null && kl.size === 0 && !Nl && N(Al, document.body.getAttribute("style"), !0);
	}
	return xs(() => Pl.current, () => {
		if (!Pl.current) return;
		r(), Nl = !1;
		let e = getComputedStyle(document.documentElement), t = getComputedStyle(document.body), n = e.scrollbarGutter?.includes("stable") || t.scrollbarGutter?.includes("stable"), i = window.innerWidth - document.documentElement.clientWidth, a = {
			padding: Number.parseInt(t.paddingRight ?? "0", 10) + i,
			margin: Number.parseInt(t.marginRight ?? "0", 10)
		};
		i > 0 && !n && (document.body.style.paddingRight = `${a.padding}px`, document.body.style.marginRight = `${a.margin}px`, document.body.style.setProperty("--scrollbar-width", `${i}px`)), document.body.style.overflow = "hidden", nc && (jl = V(document, "touchmove", (e) => {
			e.target === document.documentElement && (e.touches.length > 1 || e.preventDefault());
		}, { passive: !1 })), Fs(() => {
			document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
		});
	}), Ms(() => () => {
		jl?.();
	}), {
		get lockMap() {
			return kl;
		},
		resetBodyStyle: e,
		scheduleCleanupIfNoNewLocks: n,
		cancelPendingCleanup: t,
		ensureInitialStyleCaptured: r
	};
}), Ll = class {
	#e = Dl();
	#t;
	#n = () => null;
	#r;
	locked;
	constructor(e, t = () => null) {
		this.#t = e, this.#n = t, this.#r = Il.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = J(() => this.#r.lockMap.get(this.#e) ?? !1, (e) => this.#r.lockMap.set(this.#e, e)), Ms(() => {
			if (this.#r.lockMap.delete(this.#e), Rl(this.#r.lockMap)) return;
			let e = this.#n();
			this.#r.scheduleCleanupIfNoNewLocks(e, () => {
				this.#r.resetBodyStyle();
			});
		}));
	}
};
function Rl(e) {
	for (let [t, n] of e) if (n) return !0;
	return !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/scroll-lock/scroll-lock.svelte
function zl(e, t) {
	O(t, !0);
	let n = q(t, "preventScroll", 3, !0), r = q(t, "restoreScrollDelay", 3, null);
	n() && new Ll(n(), () => r()), k();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/avatar.svelte.js
var Bl = ec({
	component: "avatar",
	parts: [
		"root",
		"image",
		"fallback"
	]
}), Vl = new _s("Avatar.Root"), Hl = class e {
	static create(t) {
		return Vl.set(new e(t));
	}
	opts;
	domContext;
	attachment;
	constructor(e) {
		this.opts = e, this.domContext = new Js(this.opts.ref), this.loadImage = this.loadImage.bind(this), this.attachment = Ys(this.opts.ref);
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
	#e = /* @__PURE__ */ j(() => ({
		id: this.opts.id.current,
		[Bl.root]: "",
		"data-status": this.opts.loadingStatus.current,
		...this.attachment
	}));
	get props() {
		return z(this.#e);
	}
	set props(e) {
		N(this.#e, e);
	}
}, Ul = class e {
	static create(t) {
		return new e(t, Vl.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Ys(this.opts.ref), xs.pre([() => this.opts.src.current, () => this.opts.crossOrigin.current], ([e, t]) => {
			if (!e) {
				this.root.opts.loadingStatus.current = "error";
				return;
			}
			this.root.loadImage(e, t, this.opts.referrerPolicy.current);
		});
	}
	#e = /* @__PURE__ */ j(() => ({
		id: this.opts.id.current,
		style: { display: this.root.opts.loadingStatus.current === "loaded" ? "block" : "none" },
		"data-status": this.root.opts.loadingStatus.current,
		[Bl.image]: "",
		src: this.opts.src.current,
		crossorigin: this.opts.crossOrigin.current,
		referrerpolicy: this.opts.referrerPolicy.current,
		...this.attachment
	}));
	get props() {
		return z(this.#e);
	}
	set props(e) {
		N(this.#e, e);
	}
}, Wl = class e {
	static create(t) {
		return new e(t, Vl.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Ys(this.opts.ref);
	}
	#e = /* @__PURE__ */ j(() => this.root.opts.loadingStatus.current === "loaded" ? { display: "none" } : void 0);
	get style() {
		return z(this.#e);
	}
	set style(e) {
		N(this.#e, e);
	}
	#t = /* @__PURE__ */ j(() => ({
		style: this.style,
		"data-status": this.root.opts.loadingStatus.current,
		[Bl.fallback]: "",
		...this.attachment
	}));
	get props() {
		return z(this.#t);
	}
	set props(e) {
		N(this.#t, e);
	}
}, Gl = /* @__PURE__ */ H("<div><!></div>");
function Kl(e, t) {
	let n = xi();
	O(t, !0);
	let r = q(t, "delayMs", 3, 0), i = q(t, "loadingStatus", 15, "loading"), a = q(t, "id", 19, () => pc(n)), o = q(t, "ref", 15, null), s = /* @__PURE__ */ K(t, [
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
	]), c = Hl.create({
		delayMs: J(() => r()),
		loadingStatus: J(() => i(), (e) => {
			i() !== e && (i(e), t.onLoadingStatusChange?.(e));
		}),
		id: J(() => a()),
		ref: J(() => o(), (e) => o(e))
	}), l = /* @__PURE__ */ j(() => fs(s, c.props));
	var u = U(), d = F(u), p = (e) => {
		var n = U();
		G(F(n), () => t.child, () => ({ props: z(l) })), W(e, n);
	}, m = (e) => {
		var n = Gl();
		Oa(n, () => ({ ...z(l) })), G(P(n), () => t.children ?? f), D(n), W(e, n);
	};
	Ai(d, (e) => {
		t.child ? e(p) : e(m, -1);
	}), W(e, u), k();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/components/avatar-image.svelte
var ql = /* @__PURE__ */ H("<img/>");
function Jl(e, t) {
	let n = xi();
	O(t, !0);
	let r = q(t, "id", 19, () => pc(n)), i = q(t, "ref", 15, null), a = q(t, "crossorigin", 3, void 0), o = q(t, "referrerpolicy", 3, void 0), s = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"src",
		"child",
		"id",
		"ref",
		"crossorigin",
		"referrerpolicy"
	]), c = Ul.create({
		src: J(() => t.src),
		id: J(() => r()),
		ref: J(() => i(), (e) => i(e)),
		crossOrigin: J(() => a()),
		referrerPolicy: J(() => o())
	}), l = /* @__PURE__ */ j(() => fs(s, c.props));
	var u = U(), d = F(u), f = (e) => {
		var n = U();
		G(F(n), () => t.child, () => ({ props: z(l) })), W(e, n);
	}, p = (e) => {
		var n = ql();
		Oa(n, () => ({
			...z(l),
			src: t.src
		})), si(n), W(e, n);
	};
	Ai(d, (e) => {
		t.child ? e(f) : e(p, -1);
	}), W(e, u), k();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/components/avatar-fallback.svelte
var Yl = /* @__PURE__ */ H("<span><!></span>");
function Xl(e, t) {
	let n = xi();
	O(t, !0);
	let r = q(t, "id", 19, () => pc(n)), i = q(t, "ref", 15, null), a = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref"
	]), o = Wl.create({
		id: J(() => r()),
		ref: J(() => i(), (e) => i(e))
	}), s = /* @__PURE__ */ j(() => fs(a, o.props));
	var c = U(), l = F(c), u = (e) => {
		var n = U();
		G(F(n), () => t.child, () => ({ props: z(s) })), W(e, n);
	}, d = (e) => {
		var n = Yl();
		Oa(n, () => ({ ...z(s) })), G(P(n), () => t.children ?? f), D(n), W(e, n);
	};
	Ai(l, (e) => {
		t.child ? e(u) : e(d, -1);
	}), W(e, c), k();
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Zl = [
	"top",
	"right",
	"bottom",
	"left"
], Ql = Math.min, $l = Math.max, eu = Math.round, tu = Math.floor, nu = (e) => ({
	x: e,
	y: e
}), ru = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function iu(e, t, n) {
	return $l(e, Ql(t, n));
}
function au(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function ou(e) {
	return e.split("-")[0];
}
function su(e) {
	return e.split("-")[1];
}
function cu(e) {
	return e === "x" ? "y" : "x";
}
function lu(e) {
	return e === "y" ? "height" : "width";
}
function uu(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function du(e) {
	return cu(uu(e));
}
function fu(e, t, n) {
	n === void 0 && (n = !1);
	let r = su(e), i = du(e), a = lu(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = xu(o)), [o, xu(o)];
}
function pu(e) {
	let t = xu(e);
	return [
		mu(e),
		t,
		mu(t)
	];
}
function mu(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var hu = ["left", "right"], gu = ["right", "left"], _u = ["top", "bottom"], vu = ["bottom", "top"];
function yu(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? gu : hu : t ? hu : gu;
		case "left":
		case "right": return t ? _u : vu;
		default: return [];
	}
}
function bu(e, t, n, r) {
	let i = su(e), a = yu(ou(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(mu)))), a;
}
function xu(e) {
	let t = ou(e);
	return ru[t] + e.slice(t.length);
}
function Su(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function Cu(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Su(e);
}
function wu(e) {
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
function Tu(e, t, n) {
	let { reference: r, floating: i } = e, a = uu(t), o = du(t), s = lu(o), c = ou(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	switch (su(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function Eu(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = au(t, e), p = Cu(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = wu(await i.getClippingRect({
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
	}, y = wu(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Du = 50, Ou = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Eu
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Tu(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < Du && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Tu(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, ku = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = au(e, t) || {};
		if (l == null) return {};
		let d = Cu(u), f = {
			x: n,
			y: r
		}, p = du(i), m = lu(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], ee = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), te = ee ? ee[y] : 0;
		(!te || !await (o.isElement == null ? void 0 : o.isElement(ee))) && (te = s.floating[y] || a.floating[m]);
		let S = b / 2 - x / 2, C = te / 2 - h[m] / 2 - 1, ne = Ql(d[_], C), re = Ql(d[v], C), ie = ne, ae = te - h[m] - re, oe = te / 2 - h[m] / 2 + S, se = iu(ie, oe, ae), ce = !c.arrow && su(i) != null && oe !== se && a.reference[m] / 2 - (oe < ie ? ne : re) - h[m] / 2 < 0, le = ce ? oe < ie ? oe - ie : oe - ae : 0;
		return {
			[p]: f[p] + le,
			data: {
				[p]: se,
				centerOffset: oe - se - le,
				...ce && { alignmentOffset: le }
			},
			reset: ce
		};
	}
}), Au = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = au(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = ou(r), _ = uu(o), v = ou(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [xu(o)] : pu(o)), x = p !== "none";
			!d && x && b.push(...bu(o, m, p, y));
			let ee = [o, ...b], te = await s.detectOverflow(t, h), S = [], C = i.flip?.overflows || [];
			if (l && S.push(te[g]), u) {
				let e = fu(r, a, y);
				S.push(te[e[0]], te[e[1]]);
			}
			if (C = [...C, {
				placement: r,
				overflows: S
			}], !S.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = ee[e];
				if (t && (!(u === "alignment" && _ !== uu(t)) || C.every((e) => uu(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
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
								let t = uu(e.placement);
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
function ju(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Mu(e) {
	return Zl.some((t) => e[t] >= 0);
}
var Nu = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = au(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = ju(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Mu(e)
					} };
				}
				case "escaped": {
					let e = ju(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Mu(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Pu = /* @__PURE__ */ new Set(["left", "top"]);
async function Fu(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = ou(n), s = su(n), c = uu(n) === "y", l = Pu.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = au(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var Iu = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Fu(t, e);
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
}, Lu = function(e) {
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
			} }, ...l } = au(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = uu(ou(i)), p = cu(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = iu(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = iu(n, h, r);
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
}, Ru = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = au(e, t), u = {
				x: n,
				y: r
			}, d = uu(i), f = cu(d), p = u[f], m = u[d], h = au(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = Pu.has(ou(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, zu = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = au(e, t), u = await o.detectOverflow(t, l), d = ou(i), f = su(i), p = uu(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = Ql(h - u[g], v), x = Ql(m - u[_], y), ee = !t.middlewareData.shift, te = b, S = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = y), (r = t.middlewareData.shift) != null && r.enabled.y && (te = v), ee && !f) {
				let e = $l(u.left, 0), t = $l(u.right, 0), n = $l(u.top, 0), r = $l(u.bottom, 0);
				p ? S = m - 2 * (e !== 0 || t !== 0 ? e + t : $l(u.left, u.right)) : te = h - 2 * (n !== 0 || r !== 0 ? n + r : $l(u.top, u.bottom));
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
function Bu() {
	return typeof window < "u";
}
function Vu(e) {
	return Wu(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Hu(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Uu(e) {
	return ((Wu(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Wu(e) {
	return Bu() ? e instanceof Node || e instanceof Hu(e).Node : !1;
}
function Gu(e) {
	return Bu() ? e instanceof Element || e instanceof Hu(e).Element : !1;
}
function Ku(e) {
	return Bu() ? e instanceof HTMLElement || e instanceof Hu(e).HTMLElement : !1;
}
function qu(e) {
	return !Bu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Hu(e).ShadowRoot;
}
function Ju(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = ad(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Yu(e) {
	return /^(table|td|th)$/.test(Vu(e));
}
function Xu(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Zu = /transform|translate|scale|rotate|perspective|filter/, Qu = /paint|layout|strict|content/, $u = (e) => !!e && e !== "none", ed;
function td(e) {
	let t = Gu(e) ? ad(e) : e;
	return $u(t.transform) || $u(t.translate) || $u(t.scale) || $u(t.rotate) || $u(t.perspective) || !rd() && ($u(t.backdropFilter) || $u(t.filter)) || Zu.test(t.willChange || "") || Qu.test(t.contain || "");
}
function nd(e) {
	let t = sd(e);
	for (; Ku(t) && !id(t);) {
		if (td(t)) return t;
		if (Xu(t)) return null;
		t = sd(t);
	}
	return null;
}
function rd() {
	return ed ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), ed;
}
function id(e) {
	return /^(html|body|#document)$/.test(Vu(e));
}
function ad(e) {
	return Hu(e).getComputedStyle(e);
}
function od(e) {
	return Gu(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function sd(e) {
	if (Vu(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || qu(e) && e.host || Uu(e);
	return qu(t) ? t.host : t;
}
function cd(e) {
	let t = sd(e);
	return id(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ku(t) && Ju(t) ? t : cd(t);
}
function ld(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = cd(e), i = r === e.ownerDocument?.body, a = Hu(r);
	if (i) {
		let e = ud(a);
		return t.concat(a, a.visualViewport || [], Ju(r) ? r : [], e && n ? ld(e) : []);
	} else return t.concat(r, ld(r, [], n));
}
function ud(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function dd(e) {
	let t = ad(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Ku(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = eu(n) !== a || eu(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function fd(e) {
	return Gu(e) ? e : e.contextElement;
}
function pd(e) {
	let t = fd(e);
	if (!Ku(t)) return nu(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = dd(t), o = (a ? eu(n.width) : n.width) / r, s = (a ? eu(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var md = /* @__PURE__ */ nu(0);
function hd(e) {
	let t = Hu(e);
	return !rd() || !t.visualViewport ? md : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function gd(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Hu(e) ? !1 : t;
}
function _d(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = fd(e), o = nu(1);
	t && (r ? Gu(r) && (o = pd(r)) : o = pd(e));
	let s = gd(a, n, r) ? hd(a) : nu(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Hu(a), t = r && Gu(r) ? Hu(r) : r, n = e, i = ud(n);
		for (; i && r && t !== n;) {
			let e = pd(i), t = i.getBoundingClientRect(), r = ad(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Hu(i), i = ud(n);
		}
	}
	return wu({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function vd(e, t) {
	let n = od(e).scrollLeft;
	return t ? t.left + n : _d(Uu(e)).left + n;
}
function yd(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - vd(e, n),
		y: n.top + t.scrollTop
	};
}
function bd(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Uu(r), s = t ? Xu(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = nu(1), u = nu(0), d = Ku(r);
	if ((d || !d && !a) && ((Vu(r) !== "body" || Ju(o)) && (c = od(r)), d)) {
		let e = _d(r);
		l = pd(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? yd(o, c) : nu(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function xd(e) {
	return Array.from(e.getClientRects());
}
function Sd(e) {
	let t = Uu(e), n = od(e), r = e.ownerDocument.body, i = $l(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = $l(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + vd(e), s = -n.scrollTop;
	return ad(r).direction === "rtl" && (o += $l(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var Cd = 25;
function wd(e, t) {
	let n = Hu(e), r = Uu(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = rd();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = vd(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= Cd && (a -= o);
	} else l <= Cd && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function Td(e, t) {
	let n = _d(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Ku(e) ? pd(e) : nu(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Ed(e, t, n) {
	let r;
	if (t === "viewport") r = wd(e, n);
	else if (t === "document") r = Sd(Uu(e));
	else if (Gu(t)) r = Td(t, n);
	else {
		let n = hd(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return wu(r);
}
function Dd(e, t) {
	let n = sd(e);
	return n === t || !Gu(n) || id(n) ? !1 : ad(n).position === "fixed" || Dd(n, t);
}
function Od(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = ld(e, [], !1).filter((e) => Gu(e) && Vu(e) !== "body"), i = null, a = ad(e).position === "fixed", o = a ? sd(e) : e;
	for (; Gu(o) && !id(o);) {
		let t = ad(o), n = td(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || Ju(o) && !n && Dd(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = sd(o);
	}
	return t.set(e, r), r;
}
function kd(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Xu(t) ? [] : Od(t, this._c) : [].concat(n), r], o = Ed(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Ed(t, a[e], i);
		s = $l(n.top, s), c = Ql(n.right, c), l = Ql(n.bottom, l), u = $l(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Ad(e) {
	let { width: t, height: n } = dd(e);
	return {
		width: t,
		height: n
	};
}
function jd(e, t, n) {
	let r = Ku(t), i = Uu(t), a = n === "fixed", o = _d(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = nu(0);
	function l() {
		c.x = vd(i);
	}
	if (r || !r && !a) if ((Vu(t) !== "body" || Ju(i)) && (s = od(t)), r) {
		let e = _d(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? yd(i, s) : nu(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Md(e) {
	return ad(e).position === "static";
}
function Nd(e, t) {
	if (!Ku(e) || ad(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Uu(e) === n && (n = n.ownerDocument.body), n;
}
function Pd(e, t) {
	let n = Hu(e);
	if (Xu(e)) return n;
	if (!Ku(e)) {
		let t = sd(e);
		for (; t && !id(t);) {
			if (Gu(t) && !Md(t)) return t;
			t = sd(t);
		}
		return n;
	}
	let r = Nd(e, t);
	for (; r && Yu(r) && Md(r);) r = Nd(r, t);
	return r && id(r) && Md(r) && !td(r) ? n : r || nd(e) || n;
}
var Fd = async function(e) {
	let t = this.getOffsetParent || Pd, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: jd(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Id(e) {
	return ad(e).direction === "rtl";
}
var Ld = {
	convertOffsetParentRelativeRectToViewportRelativeRect: bd,
	getDocumentElement: Uu,
	getClippingRect: kd,
	getOffsetParent: Pd,
	getElementRects: Fd,
	getClientRects: xd,
	getDimensions: Ad,
	getScale: pd,
	isElement: Gu,
	isRTL: Id
};
function Rd(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function zd(e, t) {
	let n = null, r, i = Uu(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = tu(d), h = tu(i.clientWidth - (u + f)), g = tu(i.clientHeight - (d + p)), _ = tu(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: $l(0, Ql(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Rd(l, e.getBoundingClientRect()) && o(), y = !1;
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
function Bd(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = fd(e), u = i || a ? [...l ? ld(l) : [], ...t ? ld(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? zd(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? _d(e) : null;
	c && g();
	function g() {
		let t = _d(e);
		h && !Rd(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Vd = Iu, Hd = Lu, Ud = Au, Wd = zu, Gd = Nu, Kd = ku, qd = Ru, Jd = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Ld,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Ou(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region node_modules/bits-ui/dist/internal/floating-svelte/floating-utils.svelte.js
function Yd(e) {
	return typeof e == "function" ? e() : e;
}
function Xd(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zd(e, t) {
	let n = Xd(e);
	return Math.round(t * n) / n;
}
function Qd(e) {
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
function $d(e) {
	let t = e.whileElementsMounted, n = /* @__PURE__ */ j(() => Yd(e.open) ?? !0), r = /* @__PURE__ */ j(() => Yd(e.middleware)), i = /* @__PURE__ */ j(() => Yd(e.transform) ?? !0), a = /* @__PURE__ */ j(() => Yd(e.placement) ?? "bottom"), o = /* @__PURE__ */ j(() => Yd(e.strategy) ?? "absolute"), s = /* @__PURE__ */ j(() => Yd(e.sideOffset) ?? 0), c = /* @__PURE__ */ j(() => Yd(e.alignOffset) ?? 0), l = e.reference, u = /* @__PURE__ */ M(0), d = /* @__PURE__ */ M(0), f = jo(null), p = /* @__PURE__ */ M(Tn(z(o))), m = /* @__PURE__ */ M(Tn(z(a))), h = /* @__PURE__ */ M(Tn({})), g = /* @__PURE__ */ M(!1), _ = !1, v = 0, y = /* @__PURE__ */ j(() => {
		let e = f.current ? Zd(f.current, z(u)) : z(u), t = f.current ? Zd(f.current, z(d)) : z(d);
		return z(i) ? {
			position: z(p),
			left: "0",
			top: "0",
			transform: `translate(${e}px, ${t}px)`,
			...f.current && Xd(f.current) >= 1.5 && { willChange: "transform" }
		} : {
			position: z(p),
			left: `${e}px`,
			top: `${t}px`
		};
	}), b;
	function x() {
		if (l.current === null || f.current === null) return;
		let e = l.current, t = f.current, i = ++v;
		Jd(e, t, {
			middleware: z(r),
			placement: z(a),
			strategy: z(o)
		}).then((r) => {
			if (i === v && !(l.current !== e || f.current !== t)) {
				if (ef(e)) {
					N(h, {
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
				N(u, r.x, !0), N(d, r.y, !0), N(p, r.strategy, !0), N(m, r.placement, !0), N(h, r.middlewareData, !0), N(g, !0);
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
		z(n) && (l.current === null || f.current === null || (b = t(l.current, f.current, x)));
	}
	function S() {
		!z(n) && f.current === null && N(g, !1);
	}
	function C() {
		return [
			z(r),
			z(a),
			z(o),
			z(s),
			z(c),
			z(n)
		];
	}
	return Zn(() => {
		t === void 0 && z(n) && x();
	}), Zn(te), Zn(() => {
		if (t !== void 0) {
			if (C(), !z(n)) {
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
	}), Zn(S), Zn(() => ee), {
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
function ef(e) {
	return e instanceof Element ? !e.isConnected || e instanceof HTMLElement && e.hidden ? !0 : e.getClientRects().length === 0 : !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/use-floating-layer.svelte.js
var tf = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, nf = new _s("Floating.Root"), rf = new _s("Floating.Content"), af = new _s("Floating.Root"), of = class e {
	static create(t = !1) {
		return t ? af.set(new e()) : nf.set(new e());
	}
	anchorNode = jo(null);
	customAnchorNode = jo(null);
	triggerNode = jo(null);
	constructor() {
		Zn(() => {
			this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
		});
	}
}, sf = class e {
	static create(t, n = !1) {
		return n ? rf.set(new e(t, af.get())) : rf.set(new e(t, nf.get()));
	}
	opts;
	root;
	contentRef = jo(null);
	wrapperRef = jo(null);
	arrowRef = jo(null);
	contentAttachment = Ys(this.contentRef);
	wrapperAttachment = Ys(this.wrapperRef);
	arrowAttachment = Ys(this.arrowRef);
	arrowId = jo(Dl());
	#e = /* @__PURE__ */ j(() => {
		if (typeof this.opts.style == "string") return is(this.opts.style);
		if (!this.opts.style) return {};
	});
	#t = void 0;
	#n = new Es(() => this.arrowRef.current ?? void 0);
	#r = /* @__PURE__ */ j(() => this.#n?.width ?? 0);
	#i = /* @__PURE__ */ j(() => this.#n?.height ?? 0);
	#a = /* @__PURE__ */ j(() => this.opts.side?.current + (this.opts.align.current === "center" ? "" : `-${this.opts.align.current}`));
	#o = /* @__PURE__ */ j(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
	#s = /* @__PURE__ */ j(() => z(this.#o).length > 0);
	get hasExplicitBoundaries() {
		return z(this.#s);
	}
	set hasExplicitBoundaries(e) {
		N(this.#s, e);
	}
	#c = /* @__PURE__ */ j(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: z(this.#o).filter(lc),
		altBoundary: this.hasExplicitBoundaries
	}));
	get detectOverflowOptions() {
		return z(this.#c);
	}
	set detectOverflowOptions(e) {
		N(this.#c, e);
	}
	#l = /* @__PURE__ */ M(void 0);
	#u = /* @__PURE__ */ M(void 0);
	#d = /* @__PURE__ */ M(void 0);
	#f = /* @__PURE__ */ M(void 0);
	#p = /* @__PURE__ */ j(() => [
		Vd({
			mainAxis: this.opts.sideOffset.current + z(this.#i),
			alignmentAxis: this.opts.alignOffset.current
		}),
		this.opts.avoidCollisions.current && Hd({
			mainAxis: !0,
			crossAxis: !1,
			limiter: this.opts.sticky.current === "partial" ? qd() : void 0,
			...this.detectOverflowOptions
		}),
		this.opts.avoidCollisions.current && Ud({ ...this.detectOverflowOptions }),
		Wd({
			...this.detectOverflowOptions,
			apply: ({ rects: e, availableWidth: t, availableHeight: n }) => {
				let { width: r, height: i } = e.reference;
				N(this.#l, t, !0), N(this.#u, n, !0), N(this.#d, r, !0), N(this.#f, i, !0);
			}
		}),
		this.arrowRef.current && Kd({
			element: this.arrowRef.current,
			padding: this.opts.arrowPadding.current
		}),
		lf({
			arrowWidth: z(this.#r),
			arrowHeight: z(this.#i)
		}),
		this.opts.hideWhenDetached.current && Gd({
			strategy: "referenceHidden",
			...this.detectOverflowOptions
		})
	].filter(Boolean));
	get middleware() {
		return z(this.#p);
	}
	set middleware(e) {
		N(this.#p, e);
	}
	floating;
	#m = /* @__PURE__ */ j(() => df(this.floating.placement));
	get placedSide() {
		return z(this.#m);
	}
	set placedSide(e) {
		N(this.#m, e);
	}
	#h = /* @__PURE__ */ j(() => ff(this.floating.placement));
	get placedAlign() {
		return z(this.#h);
	}
	set placedAlign(e) {
		N(this.#h, e);
	}
	#g = /* @__PURE__ */ j(() => this.floating.middlewareData.arrow?.x ?? 0);
	get arrowX() {
		return z(this.#g);
	}
	set arrowX(e) {
		N(this.#g, e);
	}
	#_ = /* @__PURE__ */ j(() => this.floating.middlewareData.arrow?.y ?? 0);
	get arrowY() {
		return z(this.#_);
	}
	set arrowY(e) {
		N(this.#_, e);
	}
	#v = /* @__PURE__ */ j(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
	get cannotCenterArrow() {
		return z(this.#v);
	}
	set cannotCenterArrow(e) {
		N(this.#v, e);
	}
	#y = /* @__PURE__ */ M();
	get contentZIndex() {
		return z(this.#y);
	}
	set contentZIndex(e) {
		N(this.#y, e, !0);
	}
	#b = /* @__PURE__ */ j(() => tf[this.placedSide]);
	get arrowBaseSide() {
		return z(this.#b);
	}
	set arrowBaseSide(e) {
		N(this.#b, e);
	}
	#x = /* @__PURE__ */ j(() => ({
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
		N(this.#x, e);
	}
	#S = /* @__PURE__ */ j(() => ({
		"data-side": this.placedSide,
		"data-align": this.placedAlign,
		style: ls({ ...z(this.#e) }),
		...this.contentAttachment
	}));
	get props() {
		return z(this.#S);
	}
	set props(e) {
		N(this.#S, e);
	}
	#C = /* @__PURE__ */ j(() => ({
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
		N(this.#C, e);
	}
	constructor(e, t) {
		this.opts = e, this.root = t, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), xs(() => e.customAnchor.current, (e) => {
			this.root.customAnchorNode.current = e;
		}), this.floating = $d({
			strategy: () => this.opts.strategy.current,
			placement: () => z(this.#a),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...e) => Bd(...e, { animationFrame: this.#t?.current === "always" }),
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		}), Zn(() => {
			this.floating.isPositioned && this.opts.onPlaced?.current();
		}), xs(() => this.contentRef.current, (e) => {
			if (!e || !this.opts.enabled.current) return;
			let t = Ks(e), n = t.requestAnimationFrame(() => {
				if (this.contentRef.current !== e || !this.opts.enabled.current) return;
				let n = t.getComputedStyle(e).zIndex;
				n !== this.contentZIndex && (this.contentZIndex = n);
			});
			return () => {
				t.cancelAnimationFrame(n);
			};
		}), Zn(() => {
			this.floating.floating.current = this.wrapperRef.current;
		});
	}
}, cf = class e {
	static create(t, n = !1) {
		return n ? new e(t, af.get()) : new e(t, nf.get());
	}
	opts;
	root;
	constructor(e, t) {
		this.opts = e, this.root = t, e.virtualEl && e.virtualEl.current ? t.triggerNode = Ao(e.virtualEl.current) : t.triggerNode = e.ref;
	}
};
function lf(e) {
	return {
		name: "transformOrigin",
		options: e,
		fn(t) {
			let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = uf(n), u = {
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
function uf(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
function df(e) {
	return uf(e)[0];
}
function ff(e) {
	return uf(e)[1];
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer.svelte
function pf(e, t) {
	O(t, !0);
	let n = q(t, "tooltip", 3, !1);
	of.create(n());
	var r = U();
	G(F(r), () => t.children ?? f), W(e, r), k();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-anchor.svelte
function mf(e, t) {
	O(t, !0);
	let n = q(t, "tooltip", 3, !1);
	cf.create({
		id: J(() => t.id),
		virtualEl: J(() => t.virtualEl),
		ref: t.ref
	}, n());
	var r = U();
	G(F(r), () => t.children ?? f), W(e, r), k();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content.svelte
function hf(e, t) {
	O(t, !0);
	let n = q(t, "side", 3, "bottom"), r = q(t, "sideOffset", 3, 0), i = q(t, "align", 3, "center"), a = q(t, "alignOffset", 3, 0), o = q(t, "arrowPadding", 3, 0), s = q(t, "avoidCollisions", 3, !0), c = q(t, "collisionBoundary", 19, () => []), l = q(t, "collisionPadding", 3, 0), u = q(t, "hideWhenDetached", 3, !1), d = q(t, "onPlaced", 3, () => {}), p = q(t, "sticky", 3, "partial"), m = q(t, "updatePositionStrategy", 3, "optimized"), h = q(t, "strategy", 3, "fixed"), g = q(t, "dir", 3, "ltr"), _ = q(t, "style", 19, () => ({})), v = q(t, "wrapperId", 19, Dl), y = q(t, "customAnchor", 3, null), b = q(t, "tooltip", 3, !1), x = sf.create({
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
		sticky: J(() => p()),
		updatePositionStrategy: J(() => m()),
		strategy: J(() => h()),
		dir: J(() => g()),
		style: J(() => _()),
		enabled: J(() => t.enabled),
		wrapperId: J(() => v()),
		customAnchor: J(() => y())
	}, b()), ee = /* @__PURE__ */ j(() => fs(x.wrapperProps, { style: { pointerEvents: "auto" } }));
	var te = U();
	G(F(te), () => t.content ?? f, () => ({
		props: x.props,
		wrapperProps: z(ee)
	})), W(e, te), k();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content-static.svelte
function gf(e, t) {
	O(t, !0), Ua(() => {
		t.onPlaced?.();
	});
	var n = U();
	G(F(n), () => t.content ?? f, () => ({
		props: {},
		wrapperProps: {}
	})), W(e, n), k();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-content.svelte
function _f(e, t) {
	let n = q(t, "isStatic", 3, !1), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"content",
		"isStatic",
		"onPlaced"
	]);
	var i = U(), a = F(i), o = (e) => {
		gf(e, {
			get content() {
				return t.content;
			},
			get onPlaced() {
				return t.onPlaced;
			}
		});
	}, s = (e) => {
		hf(e, Ha({
			get content() {
				return t.content;
			},
			get onPlaced() {
				return t.onPlaced;
			}
		}, () => r));
	};
	Ai(a, (e) => {
		n() ? e(o) : e(s, -1);
	}), W(e, i);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-inner.svelte
var vf = /* @__PURE__ */ H("<!> <!>", 1);
function yf(e, t) {
	O(t, !0);
	let n = q(t, "interactOutsideBehavior", 3, "close"), r = q(t, "trapFocus", 3, !0), i = q(t, "isValidEvent", 3, () => !1), a = q(t, "customAnchor", 3, null), o = q(t, "isStatic", 3, !1), s = q(t, "tooltip", 3, !1), c = q(t, "contentPointerEvents", 3, "auto"), l = /* @__PURE__ */ K(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled.ref.tooltip.contentPointerEvents".split(".")), u = /* @__PURE__ */ j(() => t.preventScroll ?? !0), d = /* @__PURE__ */ j(() => t.strategy ?? (z(u) ? "fixed" : "absolute"));
	_f(e, {
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
			var d = vf(), p = F(d), m = (e) => {
				zl(e, { get preventScroll() {
					return z(u);
				} });
			}, h = (e) => {
				zl(e, { get preventScroll() {
					return z(u);
				} });
			};
			Ai(p, (e) => {
				t.forceMount && t.enabled ? e(m) : t.forceMount || e(h, 1);
			}), yl(I(p, 2), {
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
					gl(e, {
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
							pl(e, {
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
									El(e, {
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
											var i = U(), u = F(i);
											{
												let e = /* @__PURE__ */ j(() => ({
													props: fs(l, o(), r(), a(), { style: { pointerEvents: c() } }),
													wrapperProps: s()
												}));
												G(u, () => t.popper ?? f, () => z(e));
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
	}), k();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer.svelte
function bf(e, t) {
	let n = q(t, "interactOutsideBehavior", 3, "close"), r = q(t, "trapFocus", 3, !0), i = q(t, "isValidEvent", 3, () => !1), a = q(t, "customAnchor", 3, null), o = q(t, "isStatic", 3, !1), s = /* @__PURE__ */ K(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.open.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.ref.shouldRender".split("."));
	var c = U(), l = F(c), u = (e) => {
		yf(e, Ha({
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
	Ai(l, (e) => {
		t.shouldRender && e(u);
	}), W(e, c);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-force-mount.svelte
function xf(e, t) {
	let n = q(t, "interactOutsideBehavior", 3, "close"), r = q(t, "trapFocus", 3, !0), i = q(t, "isValidEvent", 3, () => !1), a = q(t, "customAnchor", 3, null), o = q(t, "isStatic", 3, !1), s = /* @__PURE__ */ K(t, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled".split("."));
	yf(e, Ha({
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
function Sf(e, t) {
	O(t, !0);
	let n = q(t, "mounted", 15, !1), r = q(t, "onMountedChange", 3, fc);
	Ns(() => (n(!0), r()(!0), () => {
		n(!1), r()(!1);
	})), k();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/safe-polygon.svelte.js
function Cf(e, t) {
	let [n, r] = e, i = !1, a = t.length;
	for (let e = 0, o = a - 1; e < a; o = e++) {
		let [a, s] = t[e] ?? [0, 0], [c, l] = t[o] ?? [0, 0];
		s >= r != l >= r && n <= (c - a) * (r - s) / (l - s) + a && (i = !i);
	}
	return i;
}
function wf(e, t) {
	return e[0] >= t.left && e[0] <= t.right && e[1] >= t.top && e[1] <= t.bottom;
}
function Tf(e, t) {
	let n = e.left + e.width / 2, r = e.top + e.height / 2, i = t.left + t.width / 2, a = t.top + t.height / 2, o = i - n, s = a - r;
	return Math.abs(o) > Math.abs(s) ? o > 0 ? "right" : "left" : s > 0 ? "bottom" : "top";
}
var Ef = class {
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
		this.#n = typeof t == "number" && t > 0 ? t : null, xs([
			e.triggerNode,
			e.contentNode,
			e.enabled
		], ([e, t, n]) => {
			if (!e || !t || !n) {
				this.#o = null, this.#m();
				return;
			}
			return this.#o && this.#o !== e && this.#m(), this.#o = e, [
				V(Gs(e), "pointermove", (n) => {
					this.#p([n.clientX, n.clientY], e, t);
				}),
				V(e, "pointerleave", (e) => {
					let n = e.relatedTarget;
					if (ac(n) && t.contains(n)) return;
					let r = this.#e.ignoredTargets?.() ?? [];
					ac(n) && r.some((e) => e === n || e.contains(n)) || (this.#a = ac(n) && r.length > 0 ? r.filter((e) => n.contains(e)) : [], this.#r = [e.clientX, e.clientY], this.#i = "content", this.#u());
				}),
				V(e, "pointerenter", () => {
					this.#m();
				}),
				V(t, "pointerenter", () => {
					this.#m();
				}),
				V(t, "pointerleave", (t) => {
					let n = t.relatedTarget;
					ac(n) && e.contains(n) || (this.#r = [t.clientX, t.clientY], this.#i = "trigger", this.#u());
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
		if (this.#i === "content" && wf(e, i)) {
			this.#m();
			return;
		}
		if (this.#i === "trigger" && wf(e, r)) {
			this.#m();
			return;
		}
		if (this.#i === "content" && this.#a.length > 0) for (let t of this.#a) {
			let n = t.getBoundingClientRect();
			if (wf(e, n)) return;
			let i = Tf(r, n), a = this.#h(r, n, i);
			if (a && Cf(e, a)) return;
		}
		let a = Tf(r, i), o = this.#h(r, i, a);
		if (o && Cf(e, o)) return;
		let s = this.#i === "content" ? i : r;
		Cf(e, this.#g(this.#r, s, a, this.#i)) || (this.#m(), this.#e.onPointerExit());
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
}, Df = ec({
	component: "label",
	parts: ["root"]
}), Of = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = Ys(this.opts.ref), this.onmousedown = this.onmousedown.bind(this);
	}
	onmousedown(e) {
		e.detail > 1 && e.preventDefault();
	}
	#e = /* @__PURE__ */ j(() => ({
		id: this.opts.id.current,
		[Df.root]: "",
		onmousedown: this.onmousedown,
		...this.attachment
	}));
	get props() {
		return z(this.#e);
	}
	set props(e) {
		N(this.#e, e);
	}
}, kf = /* @__PURE__ */ H("<label><!></label>");
function Af(e, t) {
	let n = xi();
	O(t, !0);
	let r = q(t, "id", 19, () => pc(n)), i = q(t, "ref", 15, null), a = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref",
		"for"
	]), o = Of.create({
		id: J(() => r()),
		ref: J(() => i(), (e) => i(e))
	}), s = /* @__PURE__ */ j(() => fs(a, o.props, { for: t.for }));
	var c = U(), l = F(c), u = (e) => {
		var n = U();
		G(F(n), () => t.child, () => ({ props: z(s) })), W(e, n);
	}, d = (e) => {
		var n = kf();
		Oa(n, () => ({
			...z(s),
			for: t.for
		})), G(P(n), () => t.children ?? f), D(n), W(e, n);
	};
	Ai(l, (e) => {
		t.child ? e(u) : e(d, -1);
	}), W(e, c), k();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/link-preview.svelte.js
var jf = ec({
	component: "link-preview",
	parts: ["content", "trigger"]
}), Mf = new _s("LinkPreview.Root"), Nf = class e {
	static create(t) {
		return Mf.set(new e(t));
	}
	opts;
	#e = /* @__PURE__ */ M(!1);
	get hasSelection() {
		return z(this.#e);
	}
	set hasSelection(e) {
		N(this.#e, e, !0);
	}
	#t = /* @__PURE__ */ M(!1);
	get isPointerDownOnContent() {
		return z(this.#t);
	}
	set isPointerDownOnContent(e) {
		N(this.#t, e, !0);
	}
	#n = /* @__PURE__ */ M(!1);
	get containsSelection() {
		return z(this.#n);
	}
	set containsSelection(e) {
		N(this.#n, e, !0);
	}
	timeout = null;
	#r = /* @__PURE__ */ M(null);
	get contentNode() {
		return z(this.#r);
	}
	set contentNode(e) {
		N(this.#r, e, !0);
	}
	#i = /* @__PURE__ */ M(!1);
	get contentMounted() {
		return z(this.#i);
	}
	set contentMounted(e) {
		N(this.#i, e, !0);
	}
	contentPresence;
	#a = /* @__PURE__ */ M(null);
	get triggerNode() {
		return z(this.#a);
	}
	set triggerNode(e) {
		N(this.#a, e, !0);
	}
	isOpening = !1;
	domContext = new Js(() => null);
	constructor(e) {
		this.opts = e, this.contentPresence = new dc({
			ref: J(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		}), xs(() => this.opts.open.current, (e) => {
			if (!e) {
				this.hasSelection = !1;
				return;
			}
			if (!this.domContext) return;
			let t = V(this.domContext.getDocument(), "pointerup", () => {
				this.containsSelection = !1, this.isPointerDownOnContent = !1, Ps(1, () => {
					this.domContext.getDocument().getSelection()?.toString() === "" ? this.hasSelection = !1 : this.hasSelection = !0;
				});
			});
			if (!this.contentNode) return;
			let n = Dc(this.contentNode);
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
}, Pf = class e {
	static create(t) {
		return new e(t, Mf.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Ys(this.opts.ref, (e) => this.root.triggerNode = e), this.root.domContext = new Js(e.ref), this.onpointerenter = this.onpointerenter.bind(this), this.onpointerleave = this.onpointerleave.bind(this), this.onfocus = this.onfocus.bind(this), this.onblur = this.onblur.bind(this);
	}
	onpointerenter(e) {
		sc(e) || this.root.handleOpen();
	}
	onpointerleave(e) {
		sc(e) || (!this.root.contentMounted || !this.root.opts.open.current) && this.root.immediateClose();
	}
	onfocus(e) {
		cc(e.currentTarget) && this.root.handleOpen();
	}
	onblur(e) {
		this.root.handleClose();
	}
	#e = /* @__PURE__ */ j(() => ({
		id: this.opts.id.current,
		"aria-haspopup": "dialog",
		"aria-expanded": Xs(this.root.opts.open.current),
		"data-state": Zs(this.root.opts.open.current),
		"aria-controls": this.root.contentNode?.id,
		role: "button",
		[jf.trigger]: "",
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
		N(this.#e, e);
	}
}, Ff = class e {
	static create(t) {
		return new e(t, Mf.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Ys(this.opts.ref, (e) => this.root.contentNode = e), this.root.domContext = new Js(e.ref), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerenter = this.onpointerenter.bind(this), this.onfocusout = this.onfocusout.bind(this), new Ef({
			triggerNode: () => this.root.triggerNode,
			contentNode: () => this.opts.ref.current,
			enabled: () => this.root.opts.open.current,
			onPointerExit: () => {
				this.root.handleClose();
			}
		}), Ms(() => {
			this.root.clearTimeout();
		});
	}
	onpointerdown(e) {
		let t = e.target;
		ac(t) && (e.currentTarget.contains(t) && (this.root.containsSelection = !0), this.root.hasSelection = !0, this.root.isPointerDownOnContent = !0);
	}
	onpointerenter(e) {
		sc(e) || this.root.handleOpen();
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
	#e = /* @__PURE__ */ j(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return z(this.#e);
	}
	set snippetProps(e) {
		N(this.#e, e);
	}
	#t = /* @__PURE__ */ j(() => ({
		id: this.opts.id.current,
		tabindex: -1,
		"data-state": Zs(this.root.opts.open.current),
		...Qs(this.root.contentPresence.transitionStatus),
		[jf.content]: "",
		onpointerdown: this.onpointerdown,
		onpointerenter: this.onpointerenter,
		onfocusout: this.onfocusout,
		...this.attachment
	}));
	get props() {
		return z(this.#t);
	}
	set props(e) {
		N(this.#t, e);
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
function If(e, t) {
	O(t, !0);
	let n = q(t, "disabled", 3, !1), r = q(t, "open", 15, !1), i = q(t, "onOpenChange", 3, fc), a = q(t, "onOpenChangeComplete", 3, fc), o = q(t, "openDelay", 3, 700), s = q(t, "closeDelay", 3, 300);
	Nf.create({
		disabled: J(() => n()),
		open: J(() => r(), (e) => {
			r(e), i()(e);
		}),
		openDelay: J(() => o()),
		closeDelay: J(() => s()),
		onOpenChangeComplete: J(() => a())
	});
	var c = U();
	Hi(F(c), () => pf, (e, n) => {
		n(e, {
			children: (e, n) => {
				var r = U();
				G(F(r), () => t.children ?? f), W(e, r);
			},
			$$slots: { default: !0 }
		});
	}), W(e, c), k();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview-content.svelte
var Lf = /* @__PURE__ */ H("<div><div><!></div></div>"), Rf = /* @__PURE__ */ H("<!> <!>", 1), zf = /* @__PURE__ */ H("<div><div><!></div></div>"), Bf = /* @__PURE__ */ H("<!> <!>", 1);
function Vf(e, t) {
	let n = xi();
	O(t, !0);
	let r = q(t, "id", 19, () => pc(n)), i = q(t, "ref", 15, null), a = q(t, "side", 3, "top"), o = q(t, "sideOffset", 3, 0), s = q(t, "align", 3, "center"), c = q(t, "avoidCollisions", 3, !0), l = q(t, "arrowPadding", 3, 0), u = q(t, "sticky", 3, "partial"), d = q(t, "hideWhenDetached", 3, !1), p = q(t, "collisionPadding", 3, 0), m = q(t, "onInteractOutside", 3, fc), h = q(t, "onEscapeKeydown", 3, fc), g = q(t, "forceMount", 3, !1), _ = /* @__PURE__ */ K(t, [
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
	]), v = Ff.create({
		id: J(() => r()),
		ref: J(() => i(), (e) => i(e)),
		onInteractOutside: J(() => m()),
		onEscapeKeydown: J(() => h())
	}), y = /* @__PURE__ */ j(() => ({
		side: a(),
		sideOffset: o(),
		align: s(),
		avoidCollisions: c(),
		arrowPadding: l(),
		sticky: u(),
		hideWhenDetached: d(),
		collisionPadding: p()
	})), b = /* @__PURE__ */ j(() => fs(_, z(y), v.props));
	var x = U(), ee = F(x), te = (e) => {
		xf(e, Ha(() => z(b), () => v.popperProps, {
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
				let r = () => n?.().props, i = () => n?.().wrapperProps, a = /* @__PURE__ */ j(() => fs(r(), { style: Qd("link-preview") }, { style: t.style }));
				var o = Rf(), s = F(o), c = (e) => {
					var n = U(), r = F(n);
					{
						let e = /* @__PURE__ */ j(() => ({
							props: z(a),
							wrapperProps: i(),
							...v.snippetProps
						}));
						G(r, () => t.child, () => z(e));
					}
					W(e, n);
				}, l = (e) => {
					var n = Lf();
					Oa(n, () => ({ ...i() }));
					var r = P(n);
					Oa(r, () => ({ ...z(a) })), G(P(r), () => t.children ?? f), D(r), D(n), W(e, n);
				};
				Ai(s, (e) => {
					t.child ? e(c) : e(l, -1);
				}), Sf(I(s, 2), {
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
	}, S = (e) => {
		bf(e, Ha(() => z(b), () => v.popperProps, {
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
				let r = () => n?.().props, i = () => n?.().wrapperProps, a = /* @__PURE__ */ j(() => fs(r(), { style: Qd("link-preview") }, { style: t.style }));
				var o = Bf(), s = F(o), c = (e) => {
					var n = U(), r = F(n);
					{
						let e = /* @__PURE__ */ j(() => ({
							props: z(a),
							wrapperProps: i(),
							...v.snippetProps
						}));
						G(r, () => t.child, () => z(e));
					}
					W(e, n);
				}, l = (e) => {
					var n = zf();
					Oa(n, () => ({ ...i() }));
					var r = P(n);
					Oa(r, () => ({ ...z(a) })), G(P(r), () => t.children ?? f), D(r), D(n), W(e, n);
				};
				Ai(s, (e) => {
					t.child ? e(c) : e(l, -1);
				}), Sf(I(s, 2), {
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
	Ai(ee, (e) => {
		g() ? e(te) : g() || e(S, 1);
	}), W(e, x), k();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview-trigger.svelte
var Hf = /* @__PURE__ */ H("<a><!></a>");
function Uf(e, t) {
	let n = xi();
	O(t, !0);
	let r = q(t, "ref", 15, null), i = q(t, "id", 19, () => pc(n)), a = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"id",
		"child",
		"children"
	]), o = Pf.create({
		id: J(() => i()),
		ref: J(() => r(), (e) => r(e))
	}), s = /* @__PURE__ */ j(() => fs(a, o.props));
	var c = U();
	Hi(F(c), () => mf, (e, n) => {
		n(e, {
			get id() {
				return i();
			},
			get ref() {
				return o.opts.ref;
			},
			children: (e, n) => {
				var r = U(), i = F(r), a = (e) => {
					var n = U();
					G(F(n), () => t.child, () => ({ props: z(s) })), W(e, n);
				}, o = (e) => {
					var n = Hf();
					Oa(n, () => ({ ...z(s) })), G(P(n), () => t.children ?? f), D(n), W(e, n);
				};
				Ai(i, (e) => {
					t.child ? e(a) : e(o, -1);
				}), W(e, r);
			},
			$$slots: { default: !0 }
		});
	}), W(e, c), k();
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var Wf = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, Gf = (e, t) => ({
	classGroupId: e,
	validator: t
}), Kf = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), qf = "-", Jf = [], Yf = "arbitrary..", Xf = (e) => {
	let t = $f(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Qf(e);
			let n = e.split(qf);
			return Zf(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? Wf(i, t) : t : i || Jf;
			}
			return n[e] || Jf;
		}
	};
}, Zf = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Zf(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(qf) : e.slice(t).join(qf), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Qf = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Yf + r : void 0;
})(), $f = (e) => {
	let { theme: t, classGroups: n } = e;
	return ep(n, t);
}, ep = (e, t) => {
	let n = Kf();
	for (let r in e) {
		let i = e[r];
		tp(i, n, r, t);
	}
	return n;
}, tp = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		np(i, t, n, r);
	}
}, np = (e, t, n, r) => {
	if (typeof e == "string") {
		rp(e, t, n);
		return;
	}
	if (typeof e == "function") {
		ip(e, t, n, r);
		return;
	}
	ap(e, t, n, r);
}, rp = (e, t, n) => {
	let r = e === "" ? t : op(t, e);
	r.classGroupId = n;
}, ip = (e, t, n, r) => {
	if (sp(e)) {
		tp(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(Gf(n, e));
}, ap = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		tp(o, op(t, a), n, r);
	}
}, op = (e, t) => {
	let n = e, r = t.split(qf), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Kf(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, sp = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, cp = (e) => {
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
}, lp = "!", up = ":", dp = [], fp = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), pp = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === up) {
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
		s.endsWith(lp) ? (c = s.slice(0, -1), l = !0) : s.startsWith(lp) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return fp(t, l, c, u);
	};
	if (t) {
		let e = t + up, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : fp(dp, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, mp = (e) => {
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
}, hp = (e) => ({
	cache: cp(e.cacheSize),
	parseClassName: pp(e),
	sortModifiers: mp(e),
	postfixLookupClassGroupIds: gp(e),
	...Xf(e)
}), gp = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, _p = /\s+/, vp = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(_p), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + lp : _, y = v + g;
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
}, yp = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = bp(n)) && (i && (i += " "), i += r);
	return i;
}, bp = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = bp(e[r])) && (n && (n += " "), n += t);
	return n;
}, xp = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = hp(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = vp(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(yp(...e));
}, Sp = [], Cp = (e) => {
	let t = (t) => t[e] || Sp;
	return t.isThemeGetter = !0, t;
}, wp = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Tp = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ep = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Dp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Op = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, kp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ap = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, jp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Mp = (e) => Ep.test(e), Y = (e) => !!e && !Number.isNaN(Number(e)), Np = (e) => !!e && Number.isInteger(Number(e)), Pp = (e) => e.endsWith("%") && Y(e.slice(0, -1)), Fp = (e) => Dp.test(e), Ip = () => !0, Lp = (e) => Op.test(e) && !kp.test(e), Rp = () => !1, zp = (e) => Ap.test(e), Bp = (e) => jp.test(e), Vp = (e) => !X(e) && !Z(e), Hp = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Up = (e) => im(e, cm, Rp), X = (e) => wp.test(e), Wp = (e) => im(e, lm, Lp), Gp = (e) => im(e, um, Y), Kp = (e) => im(e, fm, Ip), qp = (e) => im(e, dm, Rp), Jp = (e) => im(e, om, Rp), Yp = (e) => im(e, sm, Bp), Xp = (e) => im(e, pm, zp), Z = (e) => Tp.test(e), Zp = (e) => am(e, lm), Qp = (e) => am(e, dm), $p = (e) => am(e, om), em = (e) => am(e, cm), tm = (e) => am(e, sm), nm = (e) => am(e, pm, !0), rm = (e) => am(e, fm, !0), im = (e, t, n) => {
	let r = wp.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, am = (e, t, n = !1) => {
	let r = Tp.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, om = (e) => e === "position" || e === "percentage", sm = (e) => e === "image" || e === "url", cm = (e) => e === "length" || e === "size" || e === "bg-size", lm = (e) => e === "length", um = (e) => e === "number", dm = (e) => e === "family-name", fm = (e) => e === "number" || e === "weight", pm = (e) => e === "shadow", mm = () => {
	let e = Cp("color"), t = Cp("font"), n = Cp("text"), r = Cp("font-weight"), i = Cp("tracking"), a = Cp("leading"), o = Cp("breakpoint"), s = Cp("container"), c = Cp("spacing"), l = Cp("radius"), u = Cp("shadow"), d = Cp("inset-shadow"), f = Cp("text-shadow"), p = Cp("drop-shadow"), m = Cp("blur"), h = Cp("perspective"), g = Cp("aspect"), _ = Cp("ease"), v = Cp("animate"), y = () => [
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
		Mp,
		"full",
		"auto",
		...S()
	], ne = () => [
		Np,
		"none",
		"subgrid",
		Z,
		X
	], re = () => [
		"auto",
		{ span: [
			"full",
			Np,
			Z,
			X
		] },
		Np,
		Z,
		X
	], ie = () => [
		Np,
		"auto",
		Z,
		X
	], ae = () => [
		"auto",
		"min",
		"max",
		"fr",
		Z,
		X
	], oe = () => [
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
	], se = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], ce = () => ["auto", ...S()], le = () => [
		Mp,
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
	], ue = () => [
		Mp,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...S()
	], de = () => [
		Mp,
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
	], w = () => [
		e,
		Z,
		X
	], fe = () => [
		...b(),
		$p,
		Jp,
		{ position: [Z, X] }
	], pe = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], me = () => [
		"auto",
		"cover",
		"contain",
		em,
		Up,
		{ size: [Z, X] }
	], he = () => [
		Pp,
		Zp,
		Wp
	], ge = () => [
		"",
		"none",
		"full",
		l,
		Z,
		X
	], _e = () => [
		"",
		Y,
		Zp,
		Wp
	], ve = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ye = () => [
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
	], be = () => [
		Y,
		Pp,
		$p,
		Jp
	], xe = () => [
		"",
		"none",
		m,
		Z,
		X
	], Se = () => [
		"none",
		Y,
		Z,
		X
	], Ce = () => [
		"none",
		Y,
		Z,
		X
	], we = () => [
		Y,
		Z,
		X
	], Te = () => [
		Mp,
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
			blur: [Fp],
			breakpoint: [Fp],
			color: [Ip],
			container: [Fp],
			"drop-shadow": [Fp],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Vp],
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
			"inset-shadow": [Fp],
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
			radius: [Fp],
			shadow: [Fp],
			spacing: ["px", Y],
			text: [Fp],
			"text-shadow": [Fp],
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
				Mp,
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
			"container-named": [Hp],
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
				Np,
				"auto",
				Z,
				X
			] }],
			basis: [{ basis: [
				Mp,
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
				Mp,
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
				Np,
				"first",
				"last",
				"none",
				Z,
				X
			] }],
			"grid-cols": [{ "grid-cols": ne() }],
			"col-start-end": [{ col: re() }],
			"col-start": [{ "col-start": ie() }],
			"col-end": [{ "col-end": ie() }],
			"grid-rows": [{ "grid-rows": ne() }],
			"row-start-end": [{ row: re() }],
			"row-start": [{ "row-start": ie() }],
			"row-end": [{ "row-end": ie() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": ae() }],
			"auto-rows": [{ "auto-rows": ae() }],
			gap: [{ gap: S() }],
			"gap-x": [{ "gap-x": S() }],
			"gap-y": [{ "gap-y": S() }],
			"justify-content": [{ justify: [...oe(), "normal"] }],
			"justify-items": [{ "justify-items": [...se(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...se()] }],
			"align-content": [{ content: ["normal", ...oe()] }],
			"align-items": [{ items: [...se(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...se(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": oe() }],
			"place-items": [{ "place-items": [...se(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...se()] }],
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
			m: [{ m: ce() }],
			mx: [{ mx: ce() }],
			my: [{ my: ce() }],
			ms: [{ ms: ce() }],
			me: [{ me: ce() }],
			mbs: [{ mbs: ce() }],
			mbe: [{ mbe: ce() }],
			mt: [{ mt: ce() }],
			mr: [{ mr: ce() }],
			mb: [{ mb: ce() }],
			ml: [{ ml: ce() }],
			"space-x": [{ "space-x": S() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": S() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: le() }],
			"inline-size": [{ inline: ["auto", ...ue()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...ue()] }],
			"max-inline-size": [{ "max-inline": ["none", ...ue()] }],
			"block-size": [{ block: ["auto", ...de()] }],
			"min-block-size": [{ "min-block": ["auto", ...de()] }],
			"max-block-size": [{ "max-block": ["none", ...de()] }],
			w: [{ w: [
				s,
				"screen",
				...le()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...le()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...le()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...le()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...le()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...le()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Zp,
				Wp
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				rm,
				Kp
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
				Pp,
				X
			] }],
			"font-family": [{ font: [
				Qp,
				qp,
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
				Gp
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
			"placeholder-color": [{ placeholder: w() }],
			"text-color": [{ text: w() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...ve(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				Y,
				"from-font",
				"auto",
				Z,
				Wp
			] }],
			"text-decoration-color": [{ decoration: w() }],
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
				Np,
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
			"bg-position": [{ bg: fe() }],
			"bg-repeat": [{ bg: pe() }],
			"bg-size": [{ bg: me() }],
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
						Np,
						Z,
						X
					],
					radial: [
						"",
						Z,
						X
					],
					conic: [
						Np,
						Z,
						X
					]
				},
				tm,
				Yp
			] }],
			"bg-color": [{ bg: w() }],
			"gradient-from-pos": [{ from: he() }],
			"gradient-via-pos": [{ via: he() }],
			"gradient-to-pos": [{ to: he() }],
			"gradient-from": [{ from: w() }],
			"gradient-via": [{ via: w() }],
			"gradient-to": [{ to: w() }],
			rounded: [{ rounded: ge() }],
			"rounded-s": [{ "rounded-s": ge() }],
			"rounded-e": [{ "rounded-e": ge() }],
			"rounded-t": [{ "rounded-t": ge() }],
			"rounded-r": [{ "rounded-r": ge() }],
			"rounded-b": [{ "rounded-b": ge() }],
			"rounded-l": [{ "rounded-l": ge() }],
			"rounded-ss": [{ "rounded-ss": ge() }],
			"rounded-se": [{ "rounded-se": ge() }],
			"rounded-ee": [{ "rounded-ee": ge() }],
			"rounded-es": [{ "rounded-es": ge() }],
			"rounded-tl": [{ "rounded-tl": ge() }],
			"rounded-tr": [{ "rounded-tr": ge() }],
			"rounded-br": [{ "rounded-br": ge() }],
			"rounded-bl": [{ "rounded-bl": ge() }],
			"border-w": [{ border: _e() }],
			"border-w-x": [{ "border-x": _e() }],
			"border-w-y": [{ "border-y": _e() }],
			"border-w-s": [{ "border-s": _e() }],
			"border-w-e": [{ "border-e": _e() }],
			"border-w-bs": [{ "border-bs": _e() }],
			"border-w-be": [{ "border-be": _e() }],
			"border-w-t": [{ "border-t": _e() }],
			"border-w-r": [{ "border-r": _e() }],
			"border-w-b": [{ "border-b": _e() }],
			"border-w-l": [{ "border-l": _e() }],
			"divide-x": [{ "divide-x": _e() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": _e() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...ve(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...ve(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: w() }],
			"border-color-x": [{ "border-x": w() }],
			"border-color-y": [{ "border-y": w() }],
			"border-color-s": [{ "border-s": w() }],
			"border-color-e": [{ "border-e": w() }],
			"border-color-bs": [{ "border-bs": w() }],
			"border-color-be": [{ "border-be": w() }],
			"border-color-t": [{ "border-t": w() }],
			"border-color-r": [{ "border-r": w() }],
			"border-color-b": [{ "border-b": w() }],
			"border-color-l": [{ "border-l": w() }],
			"divide-color": [{ divide: w() }],
			"outline-style": [{ outline: [
				...ve(),
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
				Zp,
				Wp
			] }],
			"outline-color": [{ outline: w() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				nm,
				Xp
			] }],
			"shadow-color": [{ shadow: w() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				nm,
				Xp
			] }],
			"inset-shadow-color": [{ "inset-shadow": w() }],
			"ring-w": [{ ring: _e() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: w() }],
			"ring-offset-w": [{ "ring-offset": [Y, Wp] }],
			"ring-offset-color": [{ "ring-offset": w() }],
			"inset-ring-w": [{ "inset-ring": _e() }],
			"inset-ring-color": [{ "inset-ring": w() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				nm,
				Xp
			] }],
			"text-shadow-color": [{ "text-shadow": w() }],
			opacity: [{ opacity: [
				Y,
				Z,
				X
			] }],
			"mix-blend": [{ "mix-blend": [
				...ye(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ye() }],
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
			"mask-image-linear-from-pos": [{ "mask-linear-from": be() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": be() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": w() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": w() }],
			"mask-image-t-from-pos": [{ "mask-t-from": be() }],
			"mask-image-t-to-pos": [{ "mask-t-to": be() }],
			"mask-image-t-from-color": [{ "mask-t-from": w() }],
			"mask-image-t-to-color": [{ "mask-t-to": w() }],
			"mask-image-r-from-pos": [{ "mask-r-from": be() }],
			"mask-image-r-to-pos": [{ "mask-r-to": be() }],
			"mask-image-r-from-color": [{ "mask-r-from": w() }],
			"mask-image-r-to-color": [{ "mask-r-to": w() }],
			"mask-image-b-from-pos": [{ "mask-b-from": be() }],
			"mask-image-b-to-pos": [{ "mask-b-to": be() }],
			"mask-image-b-from-color": [{ "mask-b-from": w() }],
			"mask-image-b-to-color": [{ "mask-b-to": w() }],
			"mask-image-l-from-pos": [{ "mask-l-from": be() }],
			"mask-image-l-to-pos": [{ "mask-l-to": be() }],
			"mask-image-l-from-color": [{ "mask-l-from": w() }],
			"mask-image-l-to-color": [{ "mask-l-to": w() }],
			"mask-image-x-from-pos": [{ "mask-x-from": be() }],
			"mask-image-x-to-pos": [{ "mask-x-to": be() }],
			"mask-image-x-from-color": [{ "mask-x-from": w() }],
			"mask-image-x-to-color": [{ "mask-x-to": w() }],
			"mask-image-y-from-pos": [{ "mask-y-from": be() }],
			"mask-image-y-to-pos": [{ "mask-y-to": be() }],
			"mask-image-y-from-color": [{ "mask-y-from": w() }],
			"mask-image-y-to-color": [{ "mask-y-to": w() }],
			"mask-image-radial": [{ "mask-radial": [Z, X] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": be() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": be() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": w() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": w() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [Y] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": be() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": be() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": w() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": w() }],
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
			"mask-position": [{ mask: fe() }],
			"mask-repeat": [{ mask: pe() }],
			"mask-size": [{ mask: me() }],
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
			blur: [{ blur: xe() }],
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
				nm,
				Xp
			] }],
			"drop-shadow-color": [{ "drop-shadow": w() }],
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
			"backdrop-blur": [{ "backdrop-blur": xe() }],
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
			rotate: [{ rotate: Se() }],
			"rotate-x": [{ "rotate-x": Se() }],
			"rotate-y": [{ "rotate-y": Se() }],
			"rotate-z": [{ "rotate-z": Se() }],
			scale: [{ scale: Ce() }],
			"scale-x": [{ "scale-x": Ce() }],
			"scale-y": [{ "scale-y": Ce() }],
			"scale-z": [{ "scale-z": Ce() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: we() }],
			"skew-x": [{ "skew-x": we() }],
			"skew-y": [{ "skew-y": we() }],
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
			translate: [{ translate: Te() }],
			"translate-x": [{ "translate-x": Te() }],
			"translate-y": [{ "translate-y": Te() }],
			"translate-z": [{ "translate-z": Te() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				Np,
				Z,
				X
			] }],
			accent: [{ accent: w() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: w() }],
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
			"scrollbar-thumb-color": [{ "scrollbar-thumb": w() }],
			"scrollbar-track-color": [{ "scrollbar-track": w() }],
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
			fill: [{ fill: ["none", ...w()] }],
			"stroke-w": [{ stroke: [
				Y,
				Zp,
				Wp,
				Gp
			] }],
			stroke: [{ stroke: ["none", ...w()] }],
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
}, hm = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (gm(e, "cacheSize", t), gm(e, "prefix", n), gm(e, "experimentalParseClassName", r), _m(e.theme, a.theme), _m(e.classGroups, a.classGroups), _m(e.conflictingClassGroups, a.conflictingClassGroups), _m(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), gm(e, "postfixLookupClassGroups", a.postfixLookupClassGroups), gm(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), vm(e.theme, i.theme), vm(e.classGroups, i.classGroups), vm(e.conflictingClassGroups, i.conflictingClassGroups), vm(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), ym(e, i, "postfixLookupClassGroups"), ym(e, i, "orderSensitiveModifiers"), e), gm = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, _m = (e, t) => {
	if (t) for (let n in t) gm(e, n, t[n]);
}, vm = (e, t) => {
	if (t) for (let n in t) ym(e, t, n);
}, ym = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, bm = (e, ...t) => typeof e == "function" ? xp(mm, e, ...t) : xp(() => hm(mm(), e), ...t), xm = /* @__PURE__ */ xp(mm), Sm = (...e) => xm(ra(e));
//#endregion
//#region src/lib/components/ui/avatar/avatar.svelte
function Cm(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = q(t, "loadingStatus", 15, "loading"), i = q(t, "size", 3, "default"), a = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"loadingStatus",
		"size",
		"class"
	]);
	var o = U(), s = F(o);
	{
		let e = /* @__PURE__ */ j(() => Sm("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten", t.class));
		Hi(s, () => Kl, (t, o) => {
			o(t, Ha({
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
	W(e, o), k();
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-image.svelte
function wm(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var i = U(), a = F(i);
	{
		let e = /* @__PURE__ */ j(() => Sm("rounded-full aspect-square size-full object-cover", t.class));
		Hi(a, () => Jl, (t, i) => {
			i(t, Ha({
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
	W(e, i), k();
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-fallback.svelte
function Tm(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var i = U(), a = F(i);
	{
		let e = /* @__PURE__ */ j(() => Sm("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", t.class));
		Hi(a, () => Xl, (t, i) => {
			i(t, Ha({
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
	W(e, i), k();
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-badge.svelte
var Em = /* @__PURE__ */ H("<span><!></span>");
function Dm(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Em();
	Oa(i, (e) => ({
		"data-slot": "avatar-badge",
		class: e,
		...r
	}), [() => Sm("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", t.class)]), G(P(i), () => t.children ?? f), D(i), La(i, (e) => n(e), () => n()), W(e, i), k();
}
//#endregion
//#region src/shared/components/common/ChannelAvatar.svelte
var Om = /* @__PURE__ */ H("<!> <!> <!>", 1);
function km(e, t) {
	let n = q(t, "fallbackText", 3, "Channel Logo");
	Cm(e, {
		class: "rounded-lg",
		children: (e, r) => {
			var i = Om(), a = F(i);
			wm(a, {
				get src() {
					return t.imgSrc;
				},
				get alt() {
					return n();
				}
			});
			var o = I(a, 2), s = (e) => {
				{
					let n = /* @__PURE__ */ j(() => t.isConnected ? "bg-green-500" : "bg-red-500");
					Dm(e, { get class() {
						return z(n);
					} });
				}
			};
			Ai(o, (e) => {
				typeof t.isConnected == "boolean" && e(s);
			}), Tm(I(o, 2), {
				children: (e, t) => {
					Ve();
					var r = bi();
					ar(() => Ci(r, n())), W(e, r);
				},
				$$slots: { default: !0 }
			}), W(e, i);
		},
		$$slots: { default: !0 }
	});
}
//#endregion
//#region src/shared/components/common/VersionBadge.svelte
var Am = /* @__PURE__ */ H("<div class=\"relative h-15 w-15 shrink-0 overflow-hidden\"><div class=\"pointer-events-none absolute top-[18%] left-[-75%] w-[250%] -rotate-45 bg-primary py-[0.25em] pr-[1.5em] text-center text-[0.6rem] leading-none font-bold text-white shadow-md\"> </div></div>");
function jm(e, t) {
	let n = q(t, "version", 3, "main");
	var r = Am(), i = P(r), a = P(i, !0);
	D(i), D(r), ar(() => Ci(a, n())), W(e, r);
}
//#endregion
//#region node_modules/valibot/dist/index.mjs
var Mm, Nm = {
	lang: void 0,
	message: void 0,
	abortEarly: void 0,
	abortPipeEarly: void 0
};
/* @__NO_SIDE_EFFECTS__ */
function Pm(e) {
	return !e && !Mm ? Nm : {
		lang: e?.lang ?? Mm?.lang,
		message: e?.message,
		abortEarly: e?.abortEarly ?? Mm?.abortEarly,
		abortPipeEarly: e?.abortPipeEarly ?? Mm?.abortPipeEarly
	};
}
var Fm;
/* @__NO_SIDE_EFFECTS__ */
function Im(e) {
	return Fm?.get(e);
}
var Lm;
/* @__NO_SIDE_EFFECTS__ */
function Rm(e) {
	return Lm?.get(e);
}
var zm;
/* @__NO_SIDE_EFFECTS__ */
function Bm(e, t) {
	return zm?.get(e)?.get(t);
}
/* @__NO_SIDE_EFFECTS__ */
function Vm(e) {
	let t = typeof e;
	return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function Hm(e, t, n, r, i) {
	let a = i && "input" in i ? i.input : n.value, o = i?.expected ?? e.expects ?? null, s = i?.received ?? /* @__PURE__ */ Vm(a), c = {
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
	}, l = e.kind === "schema", u = i?.message ?? e.message ?? /* @__PURE__ */ Bm(e.reference, c.lang) ?? (l ? /* @__PURE__ */ Rm(c.lang) : null) ?? r.message ?? /* @__PURE__ */ Im(c.lang);
	u !== void 0 && (c.message = typeof u == "function" ? u(c) : u), l && (n.typed = !1), n.issues ? n.issues.push(c) : n.issues = [c];
}
var Um = /* @__PURE__ */ new WeakMap();
/* @__NO_SIDE_EFFECTS__ */
function Wm(e) {
	let t = Um.get(e);
	return t || (t = {
		version: 1,
		vendor: "valibot",
		validate(t) {
			return e["~run"]({ value: t }, /* @__PURE__ */ Pm());
		}
	}, Um.set(e, t)), t;
}
/* @__NO_SIDE_EFFECTS__ */
function Gm(e, t) {
	return {
		kind: "validation",
		type: "max_length",
		reference: Gm,
		async: !1,
		expects: `<=${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && e.value.length > this.requirement && Hm(this, "length", e, t, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Km(e, t) {
	return {
		kind: "validation",
		type: "min_length",
		reference: Km,
		async: !1,
		expects: `>=${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && e.value.length < this.requirement && Hm(this, "length", e, t, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function qm(e, t) {
	return {
		kind: "validation",
		type: "regex",
		reference: qm,
		async: !1,
		expects: `${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && !this.requirement.test(e.value) && Hm(this, "format", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Jm(e) {
	return {
		kind: "schema",
		type: "string",
		reference: Jm,
		expects: "string",
		async: !1,
		message: e,
		get "~standard"() {
			return /* @__PURE__ */ Wm(this);
		},
		"~run"(e, t) {
			return typeof e.value == "string" ? e.typed = !0 : Hm(this, "type", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Ym(...e) {
	return {
		...e[0],
		pipe: e,
		get "~standard"() {
			return /* @__PURE__ */ Wm(this);
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
function Xm(e, t, n) {
	let r = e["~run"]({ value: t }, /* @__PURE__ */ Pm(n));
	return {
		typed: r.typed,
		success: !r.issues,
		output: r.value,
		issues: r.issues
	};
}
//#endregion
//#region node_modules/tailwind-variants/dist/chunk-LQJYWU4O.js
var Zm = /\s+/g, Qm = (e) => typeof e != "string" || !e ? e : e.replace(Zm, " ").trim(), $m = (...e) => {
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
	return t.length > 0 ? Qm(t.join(" ")) : void 0;
}, eh = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, th = (e) => {
	if (!e || typeof e != "object") return !0;
	for (let t in e) return !1;
	return !0;
}, nh = (e, t) => {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let i = 0; i < n.length; i++) {
		let a = n[i];
		if (!r.includes(a) || e[a] !== t[a]) return !1;
	}
	return !0;
}, rh = (e, t) => {
	for (let n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
		let r = t[n];
		n in e ? e[n] = $m(e[n], r) : e[n] = r;
	}
	return e;
}, ih = (e, t) => {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		Array.isArray(r) ? ih(r, t) : r && t.push(r);
	}
}, ah = (...e) => {
	let t = [];
	ih(e, t);
	let n = [];
	for (let e = 0; e < t.length; e++) t[e] && n.push(t[e]);
	return n;
}, oh = (e, t) => {
	let n = {};
	for (let r in e) {
		let i = e[r];
		if (r in t) {
			let e = t[r];
			Array.isArray(i) || Array.isArray(e) ? n[r] = ah(e, i) : typeof i == "object" && typeof e == "object" && i && e ? n[r] = oh(i, e) : n[r] = e + " " + i;
		} else n[r] = i;
	}
	for (let r in t) r in e || (n[r] = t[r]);
	return n;
}, sh = {
	twMerge: !0,
	twMergeConfig: {}
};
function ch() {
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
var lh = ch(), uh = (e) => {
	let t = (t, n) => {
		let { extend: r = null, slots: i = {}, variants: a = {}, compoundVariants: o = [], compoundSlots: s = [], defaultVariants: c = {} } = t, l = {
			...sh,
			...n
		}, u = r?.base ? $m(r.base, t?.base) : t?.base, d = r?.variants && !th(r.variants) ? oh(a, r.variants) : a, f = r?.defaultVariants && !th(r.defaultVariants) ? {
			...r.defaultVariants,
			...c
		} : c;
		!th(l.twMergeConfig) && !nh(l.twMergeConfig, lh.cachedTwMergeConfig) && (lh.didTwMergeConfigChange = !0, lh.cachedTwMergeConfig = l.twMergeConfig);
		let p = th(r?.slots), m = th(i) ? {} : {
			base: $m(t?.base, p && r?.base),
			...i
		}, h = p ? m : rh({ ...r?.slots }, th(m) ? { base: t?.base } : m), g = th(r?.compoundVariants) ? o : ah(r?.compoundVariants, o), _ = (t) => {
			if (th(d) && th(i) && p) return e(u, t?.class, t?.className)(l);
			if (g && !Array.isArray(g)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof g}`);
			if (s && !Array.isArray(s)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
			let n = (e, n = d, r = null, i = null) => {
				let a = n[e];
				if (!a || th(a)) return null;
				let o = i?.[e] ?? t?.[e];
				if (o === null) return null;
				let s = eh(o);
				if (typeof s == "object") return null;
				let c = f?.[e];
				return a[(s ?? eh(c)) || "false"];
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
					if (!th(o)) {
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
			if (!th(i) || !p) {
				let t = {};
				if (typeof h == "object" && !th(h)) {
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
		createTV: (e) => (n, r) => t(n, r ? oh(e, r) : e)
	};
}, dh = (e) => th(e) ? xm : bm({
	...e,
	extend: {
		theme: e.theme,
		classGroups: e.classGroups,
		conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
		conflictingClassGroups: e.conflictingClassGroups,
		...e.extend
	}
}), fh = (e, t) => {
	let n = $m(e);
	return !n || !(t?.twMerge ?? !0) ? n : ((!lh.cachedTwMerge || lh.didTwMergeConfigChange) && (lh.didTwMergeConfigChange = !1, lh.cachedTwMerge = dh(lh.cachedTwMergeConfig)), lh.cachedTwMerge(n) || void 0);
}, { createTV: ph, tv: mh } = uh((...e) => (t) => fh(e, t)), hh = mh({
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
}), gh = /* @__PURE__ */ H("<a><!></a>"), _h = /* @__PURE__ */ H("<button><!></button>");
function vh(e, t) {
	O(t, !0);
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
	var c = U(), l = F(c), u = (e) => {
		var o = gh();
		Oa(o, (e) => ({
			"data-slot": "button",
			class: e,
			href: t.disabled ? void 0 : a(),
			"aria-disabled": t.disabled,
			role: t.disabled ? "link" : void 0,
			tabindex: t.disabled ? -1 : void 0,
			...s
		}), [() => Sm(hh({
			variant: n(),
			size: r()
		}), t.class)]), G(P(o), () => t.children ?? f), D(o), La(o, (e) => i(e), () => i()), W(e, o);
	}, d = (e) => {
		var a = _h();
		Oa(a, (e) => ({
			"data-slot": "button",
			class: e,
			type: o(),
			disabled: t.disabled,
			...s
		}), [() => Sm(hh({
			variant: n(),
			size: r()
		}), t.class)]), G(P(a), () => t.children ?? f), D(a), La(a, (e) => i(e), () => i()), W(e, a);
	};
	Ai(l, (e) => {
		a() ? e(u) : e(d, -1);
	}), W(e, c), k();
}
//#endregion
//#region src/lib/components/ui/field/field.svelte
var yh = mh({
	base: "data-[invalid=true]:text-destructive gap-2 group/field flex w-full",
	variants: { orientation: {
		vertical: "cn-field-orientation-vertical flex-col [&>*]:w-full [&>.sr-only]:w-auto",
		horizontal: "cn-field-orientation-horizontal flex-row items-center has-[>[data-slot=field-content]]:items-start [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "cn-field-orientation-responsive flex-col @md/field-group:flex-row @md/field-group:items-center @md/field-group:has-[>[data-slot=field-content]]:items-start [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
}), bh = /* @__PURE__ */ H("<div><!></div>");
function xh(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = q(t, "orientation", 3, "vertical"), i = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"orientation",
		"children"
	]);
	var a = bh();
	Oa(a, (e) => ({
		role: "group",
		"data-slot": "field",
		"data-orientation": r(),
		class: e,
		...i
	}), [() => Sm(yh({ orientation: r() }), t.class)]), G(P(a), () => t.children ?? f), D(a), La(a, (e) => n(e), () => n()), W(e, a), k();
}
//#endregion
//#region src/lib/components/ui/field/field-group.svelte
var Sh = /* @__PURE__ */ H("<div><!></div>");
function Ch(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Sh();
	Oa(i, (e) => ({
		"data-slot": "field-group",
		class: e,
		...r
	}), [() => Sm("gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col", t.class)]), G(P(i), () => t.children ?? f), D(i), La(i, (e) => n(e), () => n()), W(e, i), k();
}
//#endregion
//#region src/lib/components/ui/label/label.svelte
function wh(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var i = U(), a = F(i);
	{
		let e = /* @__PURE__ */ j(() => Sm("gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed", t.class));
		Hi(a, () => Af, (t, i) => {
			i(t, Ha({
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
	W(e, i), k();
}
//#endregion
//#region src/lib/components/ui/input/input.svelte
var Th = /* @__PURE__ */ H("<input/>"), Eh = /* @__PURE__ */ H("<input/>");
function Dh(e, t) {
	O(t, !0);
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
	var s = U(), c = F(s), l = (e) => {
		var s = Th();
		Oa(s, (e) => ({
			"data-slot": a(),
			class: e,
			type: "file",
			...o
		}), [() => Sm("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", t.class)], void 0, void 0, void 0, !0), La(s, (e) => n(e), () => n()), Fa(s, i), Ma(s, r), W(e, s);
	}, u = (e) => {
		var i = Eh();
		Oa(i, (e) => ({
			"data-slot": a(),
			class: e,
			type: t.type,
			...o
		}), [() => Sm("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", t.class)], void 0, void 0, void 0, !0), La(i, (e) => n(e), () => n()), Ma(i, r), W(e, i);
	};
	Ai(c, (e) => {
		t.type === "file" ? e(l) : e(u, -1);
	}), W(e, s), k();
}
//#endregion
//#region src/shared/api/http.ts
var Oh = async (e) => fetch(e), kh = async (e, t) => fetch(e, {
	body: t,
	credentials: "include",
	headers: { "Content-Type": "application/x-www-form-urlencoded" },
	method: "POST",
	redirect: "manual"
}), Ah = {
	status: !1,
	username: ""
}, jh = (e) => {
	let { subscribe: t, set: n, update: r } = xt({
		...Ah,
		...e
	});
	return {
		set: n,
		subscribe: t,
		init: (e) => n(e),
		resetStatus: () => r((e) => ({
			...e,
			status: Ah.status
		})),
		resetUsername: () => r((e) => ({
			...e,
			username: Ah.username
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
}, Mh = async (e) => new Promise((t, n) => {
	eo.once("login", (e) => {
		if (e.success) {
			t(e.name);
			return;
		}
		n(e.error);
	}), eo.emit("login", e);
}), Nh = async () => new Promise((e) => {
	eo.once("rank", e);
}), Ph = async (e) => {
	await kh(new URL("/login", window.location.origin), new URLSearchParams(e));
	let t = await (await Oh(new URL(window.location.href))).text(), n = new DOMParser().parseFromString(t, "text/html").querySelector("input[name=\"_csrf\"]");
	if (!n) {
		console.warn("login response missing csrf value");
		return;
	}
	let r = n.value;
	mo.updateCSRF(r);
}, Fh = async (e) => {
	await kh(new URL("/logout", window.location.origin), new URLSearchParams(e));
}, Ih = async (e, t) => {
	eo.disconnected && await Qa();
	let n = Mh({
		name: e,
		pw: t
	}), r = Nh(), i = await n, a = await r;
	if (fo.updateName(i), fo.updateLoggedIn(!0), fo.updateRank(a), !t) return;
	let { csrf: o } = St(mo);
	Ph({
		_csrf: o,
		name: e,
		password: t,
		remember: "on"
	});
}, Lh = async () => {
	eo.connected && await $a();
	let { csrf: e } = St(mo);
	await Fh({ _csrf: e }), fo.resetName(), fo.resetLoggedIn(), fo.resetRank(), eo.disconnected && await Qa();
}, Rh = jh(), zh = [
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
], Bh = [
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
], Vh = [
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
], Hh = [["path", {
	d: "M11.9532 2.00004C17.5019 2.00004 22 6.47719 22 12C22 17.5229 17.5019 22 11.9532 22C-0.631103 22 -1.82658 4.01759 11.4985 5.00004C14.8499 5.24714 18.0289 8.41019 18.0289 12C18.0289 16.5 15.2348 18.5 11.4985 18.5C4.5 18.5 3.19042 8.46695 11.0021 9.00004C12.508 9.1028 14.0162 10.3432 14.0162 12C14.0162 13.9279 13 15 11.1211 15",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}]], Uh = [
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
], Wh = [["path", {
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
}]], Gh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function Kh(e, t) {
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
			e.setAttribute(Gh(t), String(n));
		}), e.innerHTML = "", f.forEach(([t, n]) => {
			let r = document.createElementNS("http://www.w3.org/2000/svg", t), i = { ...n };
			p !== void 0 && (i["stroke-width"] = p, i.stroke = "currentColor"), Object.entries(i).forEach(([e, t]) => {
				r.setAttribute(Gh(e), String(t));
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
var qh = /* @__PURE__ */ yi("<svg></svg>");
function Jh(e, t) {
	O(t, !0);
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
	]), l = /* @__PURE__ */ j(() => o() || s()), u, d = /* @__PURE__ */ M(void 0), f = /* @__PURE__ */ M(void 0), p = /* @__PURE__ */ j(() => ({
		size: n(),
		strokeWidth: t.strokeWidth,
		absoluteStrokeWidth: r(),
		color: i(),
		altIcon: t.altIcon,
		showAlt: a(),
		class: z(l)
	}));
	Ua(() => {
		if (u) return N(d, Kh("HugeiconsIcon", t.icon), !0), N(f, z(d).render(u, z(p)), !0), () => {
			z(f)?.destroy();
		};
	}), Zn(() => {
		z(d) && u && z(f) && z(f).update(z(p));
	});
	var m = qh();
	Oa(m, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		width: n(),
		height: n(),
		viewBox: "0 0 24 24",
		fill: "none",
		class: z(l),
		...c
	})), La(m, (e) => u = e, () => u), W(e, m), k();
}
//#endregion
//#region node_modules/svelte/src/transition/index.js
var Yh = (e) => e;
function Xh(e) {
	return e < .5 ? 4 * e * e * e : .5 * (2 * e - 2) ** 3 + 1;
}
function Zh(e) {
	let t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"];
}
function Qh(e, { delay: t = 0, duration: n = 400, easing: r = Xh, amount: i = 5, opacity: a = 0 } = {}) {
	let o = getComputedStyle(e), s = +o.opacity, c = o.filter === "none" ? "" : o.filter, l = s * (1 - a), [u, d] = Zh(i);
	return {
		delay: t,
		duration: n,
		easing: r,
		css: (e, t) => `opacity: ${s - l * t}; filter: ${c} blur(${t * u}${d});`
	};
}
function $h(e, { delay: t = 0, duration: n = 400, easing: r = Yh } = {}) {
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
var eg = /* @__PURE__ */ H("<span><!></span>"), tg = /* @__PURE__ */ H("<span><!></span>"), ng = /* @__PURE__ */ H("<span><!></span>"), rg = /* @__PURE__ */ H("<span><!></span>"), ig = /* @__PURE__ */ H("<div><!></div>");
function ag(e, t) {
	var n = ig(), r = P(n), i = (e) => {
		var t = eg();
		Jh(P(t), {
			get icon() {
				return Bh;
			},
			class: "size-5 animate-spin",
			role: "status",
			"aria-label": "Loading"
		}), D(t), $i(3, t, () => $h, () => ({ duration: 250 })), W(e, t);
	}, a = (e) => {
		var t = tg();
		Jh(P(t), {
			get icon() {
				return zh;
			},
			class: "size-5"
		}), D(t), $i(3, t, () => $h, () => ({ duration: 250 })), W(e, t);
	}, o = (e) => {
		var t = ng();
		Jh(P(t), {
			get icon() {
				return Wh;
			},
			class: "size-5"
		}), D(t), $i(3, t, () => $h, () => ({ duration: 250 })), W(e, t);
	}, s = (e) => {
		var t = rg();
		Jh(P(t), {
			get icon() {
				return Uh;
			},
			class: "size-5"
		}), D(t), $i(3, t, () => $h, () => ({ duration: 250 })), W(e, t);
	};
	Ai(r, (e) => {
		t.isLoading ? e(i) : t.isAnon ? e(a, 1) : t.isGuest ? e(o, 2) : e(s, -1);
	}), D(n), W(e, n);
}
//#endregion
//#region src/features/auth/LoginForm.svelte
var og = 1, sg = 20, cg = 100, lg = /* @__PURE__ */ Ym(/* @__PURE__ */ Jm(), /* @__PURE__ */ Km(og, "Min 1 character"), /* @__PURE__ */ Gm(sg, "Max 20 characters"), /* @__PURE__ */ qm(/^[A-Za-zА-Яа-я0-9_-]+$/, "Only letters, numbers, -, or _")), ug = /* @__PURE__ */ Ym(/* @__PURE__ */ Jm(), /* @__PURE__ */ Gm(cg, "Max 100 characters")), dg = /* @__PURE__ */ H("<!> <!> <!> <!>", 1), fg = /* @__PURE__ */ H("<div class=\"ml-auto w-full max-w-md\"><form><!></form></div>");
function pg(e, t) {
	O(t, !0);
	let n = () => Et(Rh, "$authStore", r), [r, i] = Dt(), a = /* @__PURE__ */ j(() => n().status), o = /* @__PURE__ */ j(() => n().username), s = /* @__PURE__ */ j(() => /* @__PURE__ */ Xm(lg, z(o))), c = /* @__PURE__ */ j(() => z(s).success), l = /* @__PURE__ */ j(() => z(o) !== "" && !z(c)), u = /* @__PURE__ */ j(() => z(s).success ? "" : z(s).issues.map((e) => e.message).join(", ")), d = /* @__PURE__ */ j(() => n().password || ""), f = /* @__PURE__ */ j(() => !z(c) || z(a)), p = /* @__PURE__ */ j(() => /* @__PURE__ */ Xm(ug, z(d))), m = /* @__PURE__ */ j(() => z(p).success), h = /* @__PURE__ */ j(() => z(d) !== "" && !z(m)), g = /* @__PURE__ */ j(() => z(p).success ? "" : z(p).issues.map((e) => e.message).join(", ")), _ = /* @__PURE__ */ j(() => z(a) || !z(c) || z(c) && !z(m)), v = async (e) => {
		if (e.preventDefault(), !z(_)) try {
			kt(Rh, B(n).status = !0, B(n)), await new Promise((e) => setTimeout(e, 500)), await Ih(z(o), z(d));
		} catch (e) {
			console.error(e);
		} finally {
			kt(Rh, B(n).status = !1, B(n)), kt(Rh, B(n).username = "", B(n)), kt(Rh, B(n).password = void 0, B(n));
		}
	};
	var y = fg(), b = P(y);
	Ch(P(b), {
		children: (e, t) => {
			xh(e, {
				orientation: "responsive",
				class: "flex flex-row items-center justify-end",
				children: (e, t) => {
					var r = dg(), i = F(r);
					{
						let e = /* @__PURE__ */ j(() => z(o) === "" && z(d) === ""), t = /* @__PURE__ */ j(() => z(d) === "");
						ag(i, {
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
					var s = I(i, 2);
					{
						let e = /* @__PURE__ */ j(() => z(l) ? z(u) : ""), t = /* @__PURE__ */ j(() => Sm({ "md:cursor-not-allowed": z(a) }));
						Dh(s, {
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
								kt(Rh, B(n).username = e, B(n));
							}
						});
					}
					var c = I(s, 2);
					{
						let e = /* @__PURE__ */ j(() => z(h) ? z(g) : ""), t = /* @__PURE__ */ j(() => Sm({ "md:cursor-not-allowed": z(f) }));
						Dh(c, {
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
								kt(Rh, B(n).password = e, B(n));
							}
						});
					}
					var p = I(c, 2);
					{
						let e = /* @__PURE__ */ j(() => Sm({ "md:cursor-not-allowed": z(_) }));
						vh(p, {
							type: "submit",
							get disabled() {
								return z(_);
							},
							get class() {
								return z(e);
							},
							children: (e, t) => {
								Ve(), W(e, bi("Login"));
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
	}), D(b), D(y), li("submit", b, v), W(e, y), k(), i();
}
//#endregion
//#region src/features/auth/LogoutForm.svelte
var mg = /* @__PURE__ */ H("<!> <!> <!>", 1), hg = /* @__PURE__ */ H("<div class=\"ml-auto w-full max-w-md\"><form><!></form></div>");
function gg(e, t) {
	O(t, !0);
	let n = () => Et(Rh, "$authStore", i), r = () => Et(fo, "$clientStore", i), [i, a] = Dt(), o = /* @__PURE__ */ j(() => n().status), s = /* @__PURE__ */ j(() => r().rank > 0), c = async (e) => {
		if (e.preventDefault(), !z(o)) try {
			kt(Rh, B(n).status = !0, B(n)), await new Promise((e) => setTimeout(e, 500)), await Lh();
		} catch (e) {
			console.error(e);
		} finally {
			kt(Rh, B(n).status = !1, B(n)), kt(Rh, B(n).username = "", B(n)), kt(Rh, B(n).password = void 0, B(n));
		}
	};
	var l = hg(), u = P(l);
	Ch(P(u), {
		children: (e, t) => {
			xh(e, {
				orientation: "responsive",
				class: "flex flex-row items-center justify-end selection:bg-primary",
				children: (e, t) => {
					var n = mg(), i = F(n);
					{
						let e = /* @__PURE__ */ j(() => !z(s));
						ag(i, {
							get isLoading() {
								return z(o);
							},
							isAnon: !1,
							get isGuest() {
								return z(e);
							}
						});
					}
					var a = I(i, 2);
					wh(a, {
						class: "w-auto flex-none",
						children: (e, t) => {
							Ve();
							var n = bi();
							ar(() => Ci(n, r().name)), W(e, n);
						},
						$$slots: { default: !0 }
					});
					var c = I(a, 2);
					{
						let e = /* @__PURE__ */ j(() => Sm({ "md:cursor-not-allowed": z(o) }));
						vh(c, {
							type: "submit",
							get disabled() {
								return z(o);
							},
							get class() {
								return z(e);
							},
							children: (e, t) => {
								Ve(), W(e, bi("Logout"));
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
	}), D(u), D(l), li("submit", u, c), W(e, l), k(), a();
}
//#endregion
//#region src/features/auth/AuthForm.svelte
function _g(e, t) {
	var n = U(), r = F(n), i = (e) => {
		gg(e, {});
	}, a = (e) => {
		pg(e, {});
	};
	Ai(r, (e) => {
		t.isLoggedIn ? e(i) : e(a, -1);
	}), W(e, n);
}
//#endregion
//#region src/shared/components/layout/Header.svelte
var vg = new URL("dist/logo.png", window.BASE_URL).toString(), yg = /* @__PURE__ */ H("<header><!> <div class=\"flex w-full flex-row items-center justify-between py-5 pr-6\"><!> <!></div></header>");
function bg(e, t) {
	O(t, !0);
	let n = () => Et(lo, "$appStore", a), r = () => Et(go, "$socketStore", a), i = () => Et(fo, "$clientStore", a), [a, o] = Dt(), s = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"class"
	]);
	var c = yg();
	Oa(c, (e) => ({
		class: e,
		...s
	}), [() => Sm("sticky top-0 z-50 mx-auto flex h-15 w-full flex-row items-center justify-start bg-background md:bg-background/80 md:backdrop-blur-md", t.class)]);
	var l = P(c), u = (e) => {
		jm(e, { get version() {
			return n().version;
		} });
	};
	Ai(l, (e) => {
		n().version && e(u);
	});
	var d = I(l, 2), f = P(d);
	km(f, {
		get imgSrc() {
			return vg;
		},
		get isConnected() {
			return r().connected;
		}
	});
	var p = I(f, 2), m = (e) => {
		_g(e, { get isLoggedIn() {
			return i().logged_in;
		} });
	}, h = (e) => {
		vh(e, {
			get onclick() {
				return Qa;
			},
			children: (e, t) => {
				Ve(), W(e, bi("Reconnect"));
			},
			$$slots: { default: !0 }
		});
	};
	Ai(p, (e) => {
		r().connected ? e(m) : e(h, -1);
	}), D(d), D(c), W(e, c), k(), o();
}
//#endregion
//#region src/features/auth/GuestLoginForm.svelte
var xg = /* @__PURE__ */ H("<!> <!>", 1), Sg = /* @__PURE__ */ H("<form><!></form>");
function Cg(e, t) {
	O(t, !0);
	let n = () => Et(Rh, "$authStore", r), [r, i] = Dt(), a = /* @__PURE__ */ j(() => n().username), o = /* @__PURE__ */ j(() => n().status), s = async (e) => {
		if (e.preventDefault(), !z(o)) try {
			kt(Rh, B(n).status = !0, B(n)), await new Promise((e) => setTimeout(e, 500)), await Ih(z(a));
		} catch (e) {
			console.error(e);
		} finally {
			kt(Rh, B(n).status = !1, B(n)), kt(Rh, B(n).username = "", B(n)), kt(Rh, B(n).password = void 0, B(n));
		}
	};
	var c = Sg();
	Ch(P(c), {
		children: (e, t) => {
			xh(e, {
				orientation: "horizontal",
				class: "flex flex-row items-start justify-start gap-0",
				children: (e, t) => {
					var r = xg(), i = F(r);
					{
						let e = /* @__PURE__ */ j(() => z(a) === "");
						vh(i, {
							type: "submit",
							class: "flex-2 rounded-none border-none",
							get disabled() {
								return z(e);
							},
							children: (e, t) => {
								Ve(), W(e, bi("Guest Login"));
							},
							$$slots: { default: !0 }
						});
					}
					Dh(I(i, 2), {
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
							kt(Rh, B(n).username = e, B(n));
						}
					}), W(e, r);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), D(c), ar((e) => ua(c, 1, e), [() => ia(Sm(t.class))]), li("submit", c, s), W(e, c), k(), i();
}
//#endregion
//#region src/lib/components/ui/textarea/textarea.svelte
var wg = /* @__PURE__ */ H("<textarea></textarea>");
function Tg(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = q(t, "value", 15), i = q(t, "data-slot", 3, "textarea"), a = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"value",
		"class",
		"data-slot"
	]);
	var o = wg();
	Vn(o), Oa(o, (e) => ({
		"data-slot": i(),
		class: e,
		...a
	}), [() => Sm("border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-lg border bg-transparent px-2.5 py-2 text-base transition-colors focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50", t.class)]), La(o, (e) => n(e), () => n()), Ma(o, r), W(e, o), k();
}
//#endregion
//#region src/features/chat/ChatForm.svelte
var Eg = /* @__PURE__ */ H("<!> <!>", 1), Dg = /* @__PURE__ */ H("<form><!></form>");
function Og(e, t) {
	O(t, !0);
	let n = /* @__PURE__ */ M(""), r = async (e) => {
		e.preventDefault(), console.log(z(n)), N(n, "");
	};
	var i = Dg();
	Ch(P(i), {
		class: "flex flex-1 flex-row",
		children: (e, t) => {
			xh(e, {
				orientation: "horizontal",
				class: "flex flex-1 flex-row items-start justify-start gap-0",
				children: (e, t) => {
					var r = Eg(), i = F(r);
					Tg(i, {
						required: !0,
						class: "h-full flex-9 resize-none rounded-none border-none",
						autocomplete: "off",
						placeholder: "Chat message",
						get value() {
							return z(n);
						},
						set value(e) {
							N(n, e, !0);
						}
					}), vh(I(i, 2), {
						type: "submit",
						class: "h-full flex-1 rounded-none border-none",
						children: (e, t) => {
							Jh(e, {
								get icon() {
									return Vh;
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
	}), D(i), ar((e) => ua(i, 1, e), [() => ia(Sm(t.class, "flex flex-row"))]), li("submit", i, r), W(e, i), k();
}
//#endregion
//#region node_modules/svelte/src/easing/index.js
function kg(e) {
	let t = e - 1;
	return t * t * t + 1;
}
function Ag(e) {
	return --e * e * e * e * e + 1;
}
//#endregion
//#region node_modules/svelte/src/animate/index.js
function jg(e, { from: t, to: n }, r = {}) {
	var { delay: i = 0, duration: a = (e) => Math.sqrt(e) * 120, easing: o = kg } = r, s = getComputedStyle(e), c = s.transform === "none" ? "" : s.transform, [l, u] = s.transformOrigin.split(" ").map(parseFloat);
	l /= e.clientWidth, u /= e.clientHeight;
	var d = Mg(e), f = e.clientWidth / n.width / d, p = e.clientHeight / n.height / d, m = t.left + t.width * l, h = t.top + t.height * u, g = n.left + n.width * l, _ = n.top + n.height * u, v = (m - g) * f, y = (h - _) * p, b = t.width / n.width, x = t.height / n.height;
	return {
		delay: i,
		duration: typeof a == "function" ? a(Math.sqrt(v * v + y * y)) : a,
		easing: o,
		css: (e, t) => `transform: ${c} translate(${t * v}px, ${t * y}px) scale(${e + t * b}, ${e + t * x});`
	};
}
function Mg(e) {
	if ("currentCSSZoom" in e) return e.currentCSSZoom;
	for (var t = e, n = 1; t !== null;) n *= +getComputedStyle(t).zoom, t = t.parentElement;
	return n;
}
//#endregion
//#region src/lib/components/ui/empty/empty.svelte
var Ng = /* @__PURE__ */ H("<div><!></div>");
function Pg(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Ng();
	Oa(i, (e) => ({
		"data-slot": "empty",
		class: e,
		...r
	}), [() => Sm("gap-4 rounded-xl border-dashed p-6 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance", t.class)]), G(P(i), () => t.children ?? f), D(i), La(i, (e) => n(e), () => n()), W(e, i), k();
}
//#endregion
//#region src/lib/components/ui/empty/empty-header.svelte
var Fg = /* @__PURE__ */ H("<div><!></div>");
function Ig(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Fg();
	Oa(i, (e) => ({
		"data-slot": "empty-header",
		class: e,
		...r
	}), [() => Sm("gap-2 flex max-w-sm flex-col items-center", t.class)]), G(P(i), () => t.children ?? f), D(i), La(i, (e) => n(e), () => n()), W(e, i), k();
}
//#endregion
//#region src/lib/components/ui/empty/empty-media.svelte
var Lg = mh({
	base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
	variants: { variant: {
		default: "bg-transparent",
		icon: "bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-4"
	} },
	defaultVariants: { variant: "default" }
}), Rg = /* @__PURE__ */ H("<div><!></div>");
function zg(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = q(t, "variant", 3, "default"), i = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children",
		"variant"
	]);
	var a = Rg();
	Oa(a, (e) => ({
		"data-slot": "empty-icon",
		"data-variant": r(),
		class: e,
		...i
	}), [() => Sm(Lg({ variant: r() }), t.class)]), G(P(a), () => t.children ?? f), D(a), La(a, (e) => n(e), () => n()), W(e, a), k();
}
//#endregion
//#region src/lib/components/ui/empty/empty-title.svelte
var Bg = /* @__PURE__ */ H("<div><!></div>");
function Vg(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var i = Bg();
	Oa(i, (e) => ({
		"data-slot": "empty-title",
		class: e,
		...r
	}), [() => Sm("font-heading text-sm font-medium tracking-tight", t.class)]), G(P(i), () => t.children ?? f), D(i), La(i, (e) => n(e), () => n()), W(e, i), k();
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card.svelte
function Hg(e, t) {
	O(t, !0);
	let n = q(t, "open", 15, !1), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"open"
	]);
	var i = U();
	Hi(F(i), () => If, (e, t) => {
		t(e, Ha(() => r, {
			get open() {
				return n();
			},
			set open(e) {
				n(e);
			}
		}));
	}), W(e, i), k();
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-portal.svelte
function Ug(e, t) {
	let n = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	var r = U();
	Hi(F(r), () => xc, (e, t) => {
		t(e, Ha(() => n));
	}), W(e, r);
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-content.svelte
function Wg(e, t) {
	O(t, !0);
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
	Ug(e, Ha(() => t.portalProps, {
		children: (e, o) => {
			var s = U(), c = F(s);
			{
				let e = /* @__PURE__ */ j(() => Sm("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground w-64 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 origin-(--transform-origin) outline-hidden", t.class));
				Hi(c, () => Vf, (t, o) => {
					o(t, Ha({
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
	})), k();
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-trigger.svelte
function Gg(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref"
	]);
	var i = U();
	Hi(F(i), () => Uf, (e, t) => {
		t(e, Ha({ "data-slot": "hover-card-trigger" }, () => r, {
			get ref() {
				return n();
			},
			set ref(e) {
				n(e);
			}
		}));
	}), W(e, i), k();
}
//#endregion
//#region src/features/userlist/UserCard.svelte
var Kg = /* @__PURE__ */ H("<!> <!>", 1), qg = /* @__PURE__ */ H("<p class=\"text-sm\"> </p>"), Jg = /* @__PURE__ */ H("<div class=\"flex justify-between space-x-4\"><!> <div class=\"space-y-1\"><h4 class=\"text-sm font-semibold\"> </h4> <!></div></div>");
function Yg(e, t) {
	O(t, !0);
	var n = Jg(), r = P(n), i = (e) => {
		Cm(e, {
			children: (e, n) => {
				var r = Kg(), i = F(r);
				wm(i, { get src() {
					return t.user.profile.image;
				} }), Tm(I(i, 2), {
					children: (e, t) => {
						Ve(), W(e, bi("Profile Image"));
					},
					$$slots: { default: !0 }
				}), W(e, r);
			},
			$$slots: { default: !0 }
		});
	};
	Ai(r, (e) => {
		t.user.profile.image !== "" && e(i);
	});
	var a = I(r, 2), o = P(a), s = P(o, !0);
	D(o);
	var c = I(o, 2), l = (e) => {
		var n = qg(), r = P(n, !0);
		D(n), ar(() => Ci(r, t.user.profile.text)), W(e, n);
	};
	Ai(c, (e) => {
		t.user.profile.text !== "" && e(l);
	}), D(a), D(n), ar(() => Ci(s, t.user.name)), W(e, n), k();
}
//#endregion
//#region src/features/userlist/Userlist.svelte
var Xg = "text-purple-600", Zg = "text-red-600", Qg = "text-amber-600", $g = "text-white", e_ = "text-gray-600", t_ = (e) => e >= to.SITERADMIN ? Xg : e >= to.ADMIN ? Zg : e == to.MODERATOR ? Qg : e >= to.USER ? $g : e_, n_ = /* @__PURE__ */ H("<li><!></li>"), r_ = /* @__PURE__ */ H("<ul class=\"no-scrollbar overflow-auto\"></ul> <!>", 1), i_ = /* @__PURE__ */ H("<!> <!>", 1), a_ = /* @__PURE__ */ H("<div><!></div>");
function o_(e, t) {
	O(t, !0);
	let n = () => Et(so, "$userlistStore", r), [r, i] = Dt(), a = /* @__PURE__ */ j(() => n().userlist), o = /* @__PURE__ */ j(() => z(a).length > 0), s = /* @__PURE__ */ M(null);
	var c = a_(), l = P(c), u = (e) => {
		Hg(e, {
			children: (e, t) => {
				var n = r_(), r = F(n);
				Ii(r, 29, () => z(a), (e) => e.name, (e, t) => {
					var n = n_();
					Gg(P(n), {
						children: (e, n) => {
							Ve();
							var r = bi();
							ar(() => Ci(r, z(t).name)), W(e, r);
						},
						$$slots: { default: !0 }
					}), D(n), ar((e) => ua(n, 1, e), [() => ia(Sm(t_(z(t).rank), "font-bold"))]), li("mouseenter", n, () => N(s, z(t), !0)), Qi(n, () => jg, () => ({
						duration: 200,
						easing: Ag
					})), $i(3, n, () => Qh, () => ({ duration: 200 })), W(e, n);
				}), D(r);
				var i = I(r, 2), o = (e) => {
					Wg(e, {
						children: (e, t) => {
							Yg(e, { get user() {
								return z(s);
							} });
						},
						$$slots: { default: !0 }
					});
				};
				Ai(i, (e) => {
					z(s) && e(o);
				}), W(e, n);
			},
			$$slots: { default: !0 }
		});
	}, d = (e) => {
		Pg(e, {
			children: (e, t) => {
				Ig(e, {
					children: (e, t) => {
						var n = i_(), r = F(n);
						zg(r, {
							variant: "icon",
							children: (e, t) => {
								Jh(e, {
									get icon() {
										return Hh;
									},
									class: "size-5 motion-safe:animate-[spin_6s_linear_infinite]"
								});
							},
							$$slots: { default: !0 }
						}), Vg(I(r, 2), {
							class: "select-none",
							children: (e, t) => {
								Ve(), W(e, bi("No users"));
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
	Ai(l, (e) => {
		z(o) ? e(u) : e(d, -1);
	}), D(c), ar((e) => ua(c, 1, e), [() => ia(Sm(t.class))]), W(e, c), k(), i();
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/is.js
function s_(e) {
	return typeof e == "function";
}
function c_(e) {
	return typeof e == "object" && !!e;
}
var l_ = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function u_(e) {
	return e == null || l_.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => u_(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/box/box.svelte.js
var d_ = Symbol("box"), f_ = Symbol("is-writable");
function p_(e) {
	return c_(e) && d_ in e;
}
function m_(e) {
	return Q.isBox(e) && f_ in e;
}
function Q(e) {
	let t = /* @__PURE__ */ M(Tn(e));
	return {
		[d_]: !0,
		[f_]: !0,
		get current() {
			return z(t);
		},
		set current(e) {
			N(t, e, !0);
		}
	};
}
function h_(e, t) {
	let n = /* @__PURE__ */ j(e);
	return t ? {
		[d_]: !0,
		[f_]: !0,
		get current() {
			return z(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[d_]: !0,
		get current() {
			return e();
		}
	};
}
function g_(e) {
	return Q.isBox(e) ? e : s_(e) ? Q.with(e) : Q(e);
}
function __(e) {
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
function v_(e) {
	return Q.isWritableBox(e) ? {
		[d_]: !0,
		get current() {
			return e.current;
		}
	} : e;
}
Q.from = g_, Q.with = h_, Q.flatten = __, Q.readonly = v_, Q.isBox = p_, Q.isWritableBox = m_;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
function y_(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/strings.js
var b_ = /\d/, x_ = [
	"-",
	"_",
	"/",
	"."
];
function S_(e = "") {
	if (!b_.test(e)) return e !== e.toLowerCase();
}
function C_(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = x_.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = S_(a);
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
function w_(e) {
	return e ? C_(e).map((e) => E_(e)).join("") : "";
}
function T_(e) {
	return D_(w_(e || ""));
}
function E_(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function D_(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function O_(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[w_(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[T_(e)] = n;
	}
	return Yo(e, n), t;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
function k_(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/events.js
function A_(e, t, n, r) {
	let i = Array.isArray(t) ? t : [t];
	return i.forEach((t) => e.addEventListener(t, n, r)), () => {
		i.forEach((t) => e.removeEventListener(t, n, r));
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function j_(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var M_ = j_(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function N_(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${M_(t)}: ${e[t]};`).join("\n");
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/style.js
function P_(e = {}) {
	return N_(e).replace("\n", " ");
}
P_({
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
var F_ = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/merge-props.js
function I_(e) {
	return F_.has(e);
}
function L_(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
				if (a && typeof o && I_(e)) t[e] = y_(n, i);
				else if (a && o) t[e] = k_(n, i);
				else if (e === "class") {
					let r = u_(n), a = u_(i);
					r && a ? t[e] = ra(n, i) : r ? t[e] = ra(n) : a && (t[e] = ra(i));
				} else if (e === "style") {
					let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
					if (r && a) t[e] = {
						...n,
						...i
					};
					else if (r && s) {
						let r = O_(i);
						t[e] = {
							...n,
							...r
						};
					} else if (o && a) t[e] = {
						...O_(n),
						...i
					};
					else if (o && s) {
						let r = O_(n), a = O_(i);
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
	return typeof t.style == "object" && (t.style = P_(t.style).replaceAll("\n", " ")), t.hidden !== !0 && (t.hidden = void 0, delete t.hidden), t.disabled !== !0 && (t.disabled = void 0, delete t.disabled), t;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/internal/configurable-globals.js
var R_ = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/internal/utils/dom.js
function z_(e) {
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
		let { window: t = R_, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = Qt((e) => {
			let n = V(t, "focusin", e), r = V(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? z_(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/utilities/watch/watch.svelte.js
function B_(e, t) {
	switch (e) {
		case "post":
			Zn(t);
			break;
		case "pre":
			$n(t);
			break;
	}
}
function V_(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	B_(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = B(() => n(t, o));
		return o = t, r;
	});
}
function H_(e, t, n) {
	let r = er(() => {
		let i = !1;
		V_(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Zn(() => r);
}
function U_(e, t, n) {
	V_(e, "post", t, n);
}
function W_(e, t, n) {
	V_(e, "pre", t, n);
}
U_.pre = W_;
function G_(e, t) {
	H_(e, "post", t);
}
function K_(e, t) {
	H_(e, "pre", t);
}
G_.pre = K_;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/utilities/resource/resource.svelte.js
function q_(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function J_(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function Y_(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ M(Tn(o)), u = /* @__PURE__ */ M(!1), d = /* @__PURE__ */ M(void 0), f = /* @__PURE__ */ M(Tn([])), p = () => {
		z(f).forEach((e) => e()), N(f, [], !0);
	}, m = (e) => {
		N(f, [...z(f), e], !0);
	}, h = async (e, n, r = !1) => {
		try {
			N(u, !0), N(d, void 0), p();
			let i = new AbortController();
			m(() => i.abort());
			let a = await t(e, n, {
				data: z(l),
				refetching: r,
				onCleanup: m,
				signal: i.signal
			});
			return N(l, a, !0), a;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || N(d, e, !0);
			return;
		} finally {
			N(u, !1);
		}
	}, g = s ? q_(h, s) : c ? J_(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
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
			N(l, e, !0);
		},
		refetch: (t) => {
			let n = _.map((e) => e());
			return g(Array.isArray(e) ? n : n[0], Array.isArray(e) ? n : n[0], t ?? !0);
		}
	};
}
function X_(e, t, n) {
	return Y_(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		U_(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function Z_(e, t, n) {
	return Y_(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		U_.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
X_.pre = Z_;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/after-tick.js
function Q_(e) {
	Wr().then(e);
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/dom.js
var $_ = 9;
function ev(e) {
	return c_(e) && e.nodeType === $_;
}
function tv(e) {
	return c_(e) && e.constructor?.name === "VisualViewport";
}
function nv(e) {
	return ev(e) ? e : tv(e) ? e.document : e?.ownerDocument ?? document;
}
function rv(e) {
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
var iv = class {
	element;
	#e = /* @__PURE__ */ j(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return z(this.#e);
	}
	set root(e) {
		N(this.#e, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = Q.with(e) : this.element = e;
	}
	getDocument = () => nv(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => rv(this.root);
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
function av(e, t) {
	return { [Yr()]: (n) => Q.isBox(e) ? (e.current = n, B(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), B(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/aria.js
function ov({ layout: e, panesArray: t, pivotIndices: n }) {
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
function sv(e, t = "Assertion failed!") {
	if (!e) throw console.error(t), Error(t);
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/compare.js
function cv(e, t, n = 10) {
	return lv(e, t, n) === 0;
}
function lv(e, t, n = 10) {
	let r = dv(e, n), i = dv(t, n);
	return Math.sign(r - i);
}
function uv(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function dv(e, t) {
	return Number.parseFloat(e.toFixed(t));
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/is.js
var fv = typeof document < "u";
function pv(e) {
	return e instanceof HTMLElement;
}
function mv(e) {
	return e.type === "keydown";
}
function hv(e) {
	return e.type.startsWith("mouse");
}
function gv(e) {
	return e.type.startsWith("touch");
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/resize.js
function _v({ paneConstraints: e, paneIndex: t, initialSize: n }) {
	let r = e[t];
	sv(r != null, "Pane constraints should not be null.");
	let { collapsedSize: i = 0, collapsible: a, maxSize: o = 100, minSize: s = 0 } = r, c = n;
	return lv(c, s) < 0 && (c = vv(c, a, i, s)), c = Math.min(o, c), Number.parseFloat(c.toFixed(10));
}
function vv(e, t, n, r) {
	return t && lv(e, (n + r) / 2) < 0 ? n : r;
}
//#endregion
//#region node_modules/paneforge/dist/internal/helpers.js
function yv() {}
function bv({ groupId: e, layout: t, panesArray: n, domContext: r }) {
	let i = xv(e, r);
	for (let e = 0; e < n.length - 1; e++) {
		let { valueMax: r, valueMin: a, valueNow: o } = ov({
			layout: t,
			panesArray: n,
			pivotIndices: [e, e + 1]
		}), s = i[e];
		if (pv(s)) {
			let t = n[e];
			s.setAttribute("aria-controls", t.opts.id.current), s.setAttribute("aria-valuemax", `${Math.round(r)}`), s.setAttribute("aria-valuemin", `${Math.round(a)}`), s.setAttribute("aria-valuenow", o == null ? "" : `${Math.round(o)}`);
		}
	}
	return () => {
		for (let e of i) e.removeAttribute("aria-controls"), e.removeAttribute("aria-valuemax"), e.removeAttribute("aria-valuemin"), e.removeAttribute("aria-valuenow");
	};
}
function xv(e, t) {
	return fv ? Array.from(t.querySelectorAll(`[data-pane-resizer-id][data-pane-group-id="${e}"]`)) : [];
}
function Sv({ groupId: e, id: t, domContext: n }) {
	return fv ? xv(e, n).findIndex((e) => e.getAttribute("data-pane-resizer-id") === t) ?? null : null;
}
function Cv({ groupId: e, dragHandleId: t, domContext: n }) {
	let r = Sv({
		groupId: e,
		id: t,
		domContext: n
	});
	return r == null ? [-1, -1] : [r, r + 1];
}
function wv(e, t, n) {
	let r = e.map((e) => e.constraints), i = Tv(e, t), a = r[i], o = i === e.length - 1 ? [i - 1, i] : [i, i + 1], s = n[i];
	return {
		...a,
		paneSize: s,
		pivotIndices: o
	};
}
function Tv(e, t) {
	return e.findIndex((e) => e.opts.id.current === t.opts.id.current);
}
function Ev(e, t, n) {
	for (let r = 0; r < t.length; r++) {
		let i = t[r], a = e[r];
		sv(a);
		let { collapsedSize: o = 0, collapsible: s } = a.constraints, c = n[a.opts.id.current];
		if (!(c == null || i !== c)) continue;
		n[a.opts.id.current] = i;
		let { onCollapse: l, onExpand: u, onResize: d } = a.callbacks;
		d?.(i, c), s && (l || u) && (u && (c == null || c === o) && i !== o && u(), l && (c == null || c !== o) && i === o && l());
	}
}
function Dv({ panesArray: e }) {
	let t = Array(e.length), n = e.map((e) => e.constraints), r = 0, i = 100;
	for (let a = 0; a < e.length; a++) {
		let e = n[a];
		sv(e);
		let { defaultSize: o } = e;
		o != null && (r++, t[a] = o, i -= o);
	}
	for (let a = 0; a < e.length; a++) {
		let o = n[a];
		sv(o);
		let { defaultSize: s } = o;
		if (s != null) continue;
		let c = e.length - r, l = i / c;
		r++, t[a] = l, i -= l;
	}
	return t;
}
function Ov({ layout: e, paneConstraints: t }) {
	let n = [...e], r = n.reduce((e, t) => e + t, 0);
	if (n.length !== t.length) throw Error(`Invalid ${t.length} pane layout: ${n.map((e) => `${e}%`).join(", ")}`);
	if (!cv(r, 100)) for (let e = 0; e < t.length; e++) {
		let t = n[e];
		sv(t != null), n[e] = 100 / r * t;
	}
	let i = 0;
	for (let e = 0; e < t.length; e++) {
		let r = n[e];
		sv(r != null);
		let a = _v({
			paneConstraints: t,
			paneIndex: e,
			initialSize: r
		});
		r !== a && (i += r - a, n[e] = a);
	}
	if (!cv(i, 0)) for (let e = 0; e < t.length; e++) {
		let r = n[e];
		sv(r != null);
		let a = r + i, o = _v({
			paneConstraints: t,
			paneIndex: e,
			initialSize: a
		});
		if (r !== o && (i -= o - r, n[e] = o, cv(i, 0))) break;
	}
	return n;
}
function kv(e, t) {
	return fv && t.querySelector(`[data-pane-group][data-pane-group-id="${e}"]`) || null;
}
function Av(e, t) {
	return fv && t.querySelector(`[data-pane-resizer-id="${e}"]`) || null;
}
function jv({ event: e, dragHandleId: t, dir: n, initialDragState: r, domContext: i }) {
	let a = n === "horizontal", o = Av(t, i);
	sv(o);
	let s = o.getAttribute("data-pane-group-id");
	sv(s);
	let { initialCursorPosition: c } = r, l = Nv(n, e), u = kv(s, i);
	sv(u);
	let d = u.getBoundingClientRect(), f = a ? d.width : d.height;
	return (l - c) / f * 100;
}
function Mv({ event: e, dragHandleId: t, dir: n, initialDragState: r, keyboardResizeBy: i, domContext: a }) {
	if (mv(e)) {
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
	} else return r == null ? 0 : jv({
		event: e,
		dragHandleId: t,
		dir: n,
		initialDragState: r,
		domContext: a
	});
}
function Nv(e, t) {
	let n = e === "horizontal";
	if (hv(t)) return n ? t.clientX : t.clientY;
	if (gv(t)) {
		let e = t.touches[0];
		return sv(e), n ? e.screenX : e.screenY;
	} else throw Error(`Unsupported event type "${t.type}"`);
}
function Pv({ groupId: e, handleId: t, panesArray: n, domContext: r }) {
	let i = Av(t, r), a = xv(e, r), o = i ? a.indexOf(i) : -1;
	return [n[o]?.opts.id.current ?? null, n[o + 1]?.opts.id.current ?? null];
}
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/internal/configurable-globals.js
var Fv = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/internal/utils/dom.js
function Iv(e) {
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
		let { window: t = Fv, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = Qt((e) => {
			let n = V(t, "focusin", e), r = V(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? Iv(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/utilities/watch/watch.svelte.js
function Lv(e, t) {
	switch (e) {
		case "post":
			Zn(t);
			break;
		case "pre":
			$n(t);
			break;
	}
}
function Rv(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	Lv(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = B(() => n(t, o));
		return o = t, r;
	});
}
function zv(e, t, n) {
	let r = er(() => {
		let i = !1;
		Rv(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Zn(() => r);
}
function Bv(e, t, n) {
	Rv(e, "post", t, n);
}
function Vv(e, t, n) {
	Rv(e, "pre", t, n);
}
Bv.pre = Vv;
function Hv(e, t) {
	zv(e, "post", t);
}
function Uv(e, t) {
	zv(e, "pre", t);
}
Hv.pre = Uv;
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/utilities/context/context.js
var Wv = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return rt(this.#t);
	}
	get() {
		let e = tt(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = tt(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return nt(this.#t, e);
	}
};
//#endregion
//#region node_modules/paneforge/dist/internal/utils/adjust-layout.js
function Gv({ delta: e, layout: t, paneConstraints: n, pivotIndices: r, trigger: i }) {
	if (cv(e, 0)) return t;
	let a = [...t], [o, s] = r, c = 0;
	if (i === "keyboard") {
		{
			let r = e < 0 ? s : o, i = n[r];
			if (sv(i), i.collapsible) {
				let i = t[r];
				sv(i != null);
				let a = n[r];
				sv(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (cv(i, o)) {
					let t = s - i;
					lv(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
		{
			let r = e < 0 ? o : s, i = n[r];
			sv(i);
			let { collapsible: a } = i;
			if (a) {
				let i = t[r];
				sv(i != null);
				let a = n[r];
				sv(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (cv(i, s)) {
					let t = i - o;
					lv(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
	}
	{
		let r = e < 0 ? 1 : -1, i = e < 0 ? s : o, a = 0;
		for (;;) {
			let e = t[i];
			sv(e != null);
			let o = _v({
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
			sv(o != null);
			let s = o - i, l = _v({
				paneConstraints: n,
				paneIndex: r,
				initialSize: s
			});
			if (!cv(o, l) && (c += o - l, a[r] = l, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, { numeric: !0 }) >= 0)) break;
			e < 0 ? r-- : r++;
		}
	}
	if (cv(c, 0)) return t;
	{
		let r = e < 0 ? s : o, i = t[r];
		sv(i != null);
		let l = i + c, u = _v({
			paneConstraints: n,
			paneIndex: r,
			initialSize: l
		});
		if (a[r] = u, !cv(u, l)) {
			let t = l - u, r = e < 0 ? s : o;
			for (; r >= 0 && r < n.length;) {
				let i = a[r];
				sv(i != null);
				let o = i + t, s = _v({
					paneConstraints: n,
					paneIndex: r,
					initialSize: o
				});
				if (cv(i, s) || (t -= s - i, a[r] = s), cv(t, 0)) break;
				e > 0 ? r-- : r++;
			}
		}
	}
	return cv(a.reduce((e, t) => t + e, 0), 100) ? a : t;
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/style.js
var Kv = null, qv = null;
function Jv(e) {
	switch (e) {
		case "horizontal": return "ew-resize";
		case "horizontal-max": return "w-resize";
		case "horizontal-min": return "e-resize";
		case "vertical": return "ns-resize";
		case "vertical-max": return "n-resize";
		case "vertical-min": return "s-resize";
	}
}
function Yv() {
	qv !== null && (document.head.removeChild(qv), Kv = null, qv = null);
}
function Xv(e, t) {
	if (Kv === e) return;
	Kv = e;
	let n = Jv(e);
	qv === null && (qv = t.createElement("style"), t.head.appendChild(qv)), qv.innerHTML = `*{cursor: ${n}!important;}`;
}
function Zv({ defaultSize: e, dragState: t, layout: n, panesArray: r, paneIndex: i, precision: a = 3 }) {
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
function Qv(e) {
	try {
		if (typeof localStorage > "u") throw TypeError("localStorage is not supported in this environment");
		e.getItem = (e) => localStorage.getItem(e), e.setItem = (e, t) => localStorage.setItem(e, t);
	} catch (t) {
		console.error(t), e.getItem = () => null, e.setItem = () => {};
	}
}
function $v(e) {
	return `paneforge:${e}`;
}
function ey(e) {
	return e.map((e) => e.opts.order.current ? `${e.opts.order.current}:${JSON.stringify(e.constraints)}` : JSON.stringify(e.constraints)).sort().join(",");
}
function ty(e, t) {
	try {
		let n = $v(e), r = t.getItem(n), i = JSON.parse(r || "");
		if (typeof i == "object" && i) return i;
	} catch {}
	return null;
}
function ny(e, t, n) {
	return (ty(e, n) || {})[ey(t)] || null;
}
function ry(e, t, n, r, i) {
	let a = $v(e), o = ey(t), s = ty(e, i) || {};
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
var iy = {};
function ay(e, t = 10) {
	let n = null;
	return (...r) => {
		n !== null && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
}
function oy({ autoSaveId: e, layout: t, storage: n, panesArray: r, paneSizeBeforeCollapse: i }) {
	if (t.length === 0 || t.length !== r.length) return;
	let a = iy[e];
	a ?? (a = ay(ry, 100), iy[e] = a);
	let o = [...r], s = new Map(i);
	a(e, o, s, t, n);
}
//#endregion
//#region node_modules/paneforge/dist/paneforge.svelte.js
var sy = {
	getItem: (e) => (Qv(sy), sy.getItem(e)),
	setItem: (e, t) => {
		Qv(sy), sy.setItem(e, t);
	}
}, cy = new Wv("PaneGroup"), ly = class e {
	static create(t) {
		return cy.set(new e(t));
	}
	opts;
	attachment;
	domContext;
	#e = /* @__PURE__ */ M(null);
	get dragState() {
		return z(this.#e);
	}
	set dragState(e) {
		N(this.#e, e);
	}
	#t = /* @__PURE__ */ M([]);
	get layout() {
		return z(this.#t);
	}
	set layout(e) {
		N(this.#t, e);
	}
	#n = /* @__PURE__ */ M([]);
	get panesArray() {
		return z(this.#n);
	}
	set panesArray(e) {
		N(this.#n, e);
	}
	#r = /* @__PURE__ */ M(!1);
	get panesArrayChanged() {
		return z(this.#r);
	}
	set panesArrayChanged(e) {
		N(this.#r, e, !0);
	}
	#i = /* @__PURE__ */ M(Tn({}));
	get paneIdToLastNotifiedSizeMap() {
		return z(this.#i);
	}
	set paneIdToLastNotifiedSizeMap(e) {
		N(this.#i, e, !0);
	}
	paneSizeBeforeCollapseMap = /* @__PURE__ */ new Map();
	prevDelta = 0;
	constructor(e) {
		this.opts = e, this.attachment = av(this.opts.ref), this.domContext = new iv(this.opts.ref), Bv([
			() => this.opts.id.current,
			() => this.layout,
			() => this.panesArray
		], () => bv({
			groupId: this.opts.id.current,
			layout: this.layout,
			panesArray: this.panesArray,
			domContext: this.domContext
		})), Zn(() => B(() => this.#a())), Bv([
			() => this.opts.autoSaveId.current,
			() => this.layout,
			() => this.opts.storage.current
		], () => {
			this.opts.autoSaveId.current && oy({
				autoSaveId: this.opts.autoSaveId.current,
				layout: this.layout,
				storage: this.opts.storage.current,
				panesArray: this.panesArray,
				paneSizeBeforeCollapse: this.paneSizeBeforeCollapseMap
			});
		}), Bv(() => this.panesArrayChanged, () => {
			if (!this.panesArrayChanged) return;
			this.panesArrayChanged = !1;
			let e = this.layout, t = null;
			if (this.opts.autoSaveId.current) {
				let e = ny(this.opts.autoSaveId.current, this.panesArray, this.opts.storage.current);
				e && (this.paneSizeBeforeCollapseMap = new Map(Object.entries(e.expandToSizes)), t = e.layout);
			}
			t ??= Dv({ panesArray: this.panesArray });
			let n = Ov({
				layout: t,
				paneConstraints: this.panesArray.map((e) => e.constraints)
			});
			uv(e, n) || (this.layout = n, this.opts.onLayout.current?.(n), Ev(this.panesArray, n, this.paneIdToLastNotifiedSizeMap));
		});
	}
	setLayout = (e) => {
		this.layout = e;
	};
	registerResizeHandle = (e) => (t) => {
		t.preventDefault();
		let n = this.opts.direction.current, r = this.dragState, i = this.opts.id.current, a = this.opts.keyboardResizeBy.current, o = this.layout, s = this.panesArray, { initialLayout: c } = r ?? {}, l = this.domContext.getDocument(), u = Cv({
			groupId: i,
			dragHandleId: e,
			domContext: this.domContext
		}), d = Mv({
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
		let p = s.map((e) => e.constraints), m = Gv({
			delta: d,
			layout: c ?? o,
			paneConstraints: p,
			pivotIndices: u,
			trigger: mv(t) ? "keyboard" : "mouse-or-touch"
		}), h = !uv(o, m);
		(hv(t) || gv(t)) && this.prevDelta !== d && (this.prevDelta = d, Xv(h ? f ? "horizontal" : "vertical" : f ? d < 0 ? "horizontal-min" : "horizontal-max" : d < 0 ? "vertical-min" : "vertical-max", l)), h && (this.setLayout(m), this.opts.onLayout.current?.(m), Ev(s, m, this.paneIdToLastNotifiedSizeMap));
	};
	resizePane = (e, t) => {
		let n = this.layout, r = this.panesArray, i = r.map((e) => e.constraints), { paneSize: a, pivotIndices: o } = wv(r, e, n);
		sv(a != null);
		let s = Gv({
			delta: Tv(r, e) === r.length - 1 ? a - t : t - a,
			layout: n,
			paneConstraints: i,
			pivotIndices: o,
			trigger: "imperative-api"
		});
		uv(n, s) || (this.setLayout(s), this.opts.onLayout.current?.(s), Ev(r, s, this.paneIdToLastNotifiedSizeMap));
	};
	startDragging = (e, t) => {
		let n = this.opts.direction.current, r = this.layout, i = Av(e, this.domContext);
		sv(i);
		let a = Nv(n, t);
		this.dragState = {
			dragHandleId: e,
			dragHandleRect: i.getBoundingClientRect(),
			initialCursorPosition: a,
			initialLayout: r
		};
	};
	stopDragging = () => {
		Yv(), this.dragState = null;
	};
	isPaneCollapsed = (e) => {
		let t = this.panesArray, n = this.layout, { collapsedSize: r = 0, collapsible: i, paneSize: a } = wv(t, e, n);
		return typeof a != "number" || typeof r != "number" ? !1 : i === !0 && cv(a, r);
	};
	expandPane = (e) => {
		let t = this.layout, n = this.panesArray;
		if (!e.constraints.collapsible) return;
		let r = n.map((e) => e.constraints), { collapsedSize: i = 0, paneSize: a, minSize: o = 0, pivotIndices: s } = wv(n, e, t);
		if (a !== i) return;
		let c = this.paneSizeBeforeCollapseMap.get(e.opts.id.current), l = c != null && c >= o ? c : o, u = Gv({
			delta: Tv(n, e) === n.length - 1 ? a - l : l - a,
			layout: t,
			paneConstraints: r,
			pivotIndices: s,
			trigger: "imperative-api"
		});
		uv(t, u) || (this.setLayout(u), this.opts.onLayout.current?.(u), Ev(n, u, this.paneIdToLastNotifiedSizeMap));
	};
	collapsePane = (e) => {
		let t = this.layout, n = this.panesArray;
		if (!e.constraints.collapsible) return;
		let r = n.map((e) => e.constraints), { collapsedSize: i = 0, paneSize: a, pivotIndices: o } = wv(n, e, t);
		if (sv(a != null), a === i) return;
		this.paneSizeBeforeCollapseMap.set(e.opts.id.current, a);
		let s = Gv({
			delta: Tv(n, e) === n.length - 1 ? a - i : i - a,
			layout: t,
			paneConstraints: r,
			pivotIndices: o,
			trigger: "imperative-api"
		});
		uv(t, s) || (this.layout = s, this.opts.onLayout.current?.(s), Ev(n, s, this.paneIdToLastNotifiedSizeMap));
	};
	getPaneSize = (e) => wv(this.panesArray, e, this.layout).paneSize;
	getPaneStyle = (e, t) => {
		let n = this.panesArray, r = this.layout, i = this.dragState;
		return Zv({
			defaultSize: t,
			dragState: i,
			layout: r,
			panesArray: n,
			paneIndex: Tv(n, e)
		});
	};
	isPaneExpanded = (e) => {
		let { collapsedSize: t = 0, collapsible: n, paneSize: r } = wv(this.panesArray, e, this.layout);
		return !n || r > t;
	};
	registerPane = (e) => {
		let t = [...this.panesArray, e];
		return t.sort((e, t) => {
			let n = e.opts.order.current, r = t.opts.order.current;
			return n == null && r == null ? 0 : n == null ? -1 : r == null ? 1 : n - r;
		}), this.panesArray = t, this.panesArrayChanged = !0, () => {
			let t = [...this.panesArray], n = Tv(this.panesArray, e);
			n < 0 || (t.splice(n, 1), this.panesArray = t, delete this.paneIdToLastNotifiedSizeMap[e.opts.id.current], this.panesArrayChanged = !0);
		};
	};
	#a = () => {
		let e = this.opts.id.current, t = xv(e, this.domContext), n = this.panesArray, r = t.map((t) => {
			let r = t.getAttribute("data-pane-resizer-id");
			if (!r) return yv;
			let [i, a] = Pv({
				groupId: e,
				handleId: r,
				panesArray: n,
				domContext: this.domContext
			});
			if (i == null || a == null) return yv;
			let o = A_(t, "keydown", (t) => {
				if (t.defaultPrevented || t.key !== "Enter") return;
				t.preventDefault();
				let n = this.panesArray, a = n.findIndex((e) => e.opts.id.current === i);
				if (a < 0) return;
				let o = n[a];
				sv(o);
				let s = this.layout, c = s[a], { collapsedSize: l = 0, collapsible: u, minSize: d = 0 } = o.constraints;
				if (!(c != null && u)) return;
				let f = Gv({
					delta: cv(c, l) ? d - c : l - c,
					layout: s,
					paneConstraints: n.map((e) => e.constraints),
					pivotIndices: Cv({
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
	#o = /* @__PURE__ */ j(() => ({
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
		N(this.#o, e);
	}
}, uy = [
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"End",
	"Home"
], dy = class e {
	static create(t) {
		return new e(t, cy.get());
	}
	opts;
	#e;
	attachment;
	domContext;
	#t = /* @__PURE__ */ j(() => this.#e.dragState?.dragHandleId === this.opts.id.current);
	#n = /* @__PURE__ */ M(!1);
	resizeHandler = null;
	constructor(e, t) {
		this.opts = e, this.#e = t, this.attachment = av(this.opts.ref), this.domContext = new iv(this.opts.ref), Zn(() => {
			this.opts.disabled.current ? this.resizeHandler = null : this.resizeHandler = this.#e.registerResizeHandle(this.opts.id.current);
		}), Zn(() => {
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
			return k_(V(s, "contextmenu", o), V(s, "mousemove", i), V(s, "touchmove", i, { passive: !1 }), V(s, "mouseleave", a), V(c, "mouseup", o), V(c, "touchend", o));
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
		if (uy.includes(e.key)) {
			e.preventDefault(), this.resizeHandler(e);
			return;
		}
		if (e.key !== "F6") return;
		e.preventDefault();
		let t = xv(this.#e.opts.id.current, this.domContext), n = Sv({
			groupId: this.#e.opts.id.current,
			id: this.opts.id.current,
			domContext: this.domContext
		});
		if (n === null) return;
		let r = 0;
		r = e.shiftKey ? n > 0 ? n - 1 : t.length - 1 : n + 1 < t.length ? n + 1 : 0, t[r].focus();
	};
	#o = () => {
		N(this.#n, !1);
	};
	#s = () => {
		N(this.#n, !0);
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
	#p = /* @__PURE__ */ j(() => ({
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
			cursor: Jv(this.#e.opts.direction.current),
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
		N(this.#p, e);
	}
}, fy = class e {
	static create(t) {
		return new e(t, cy.get());
	}
	opts;
	group;
	attachment;
	domContext;
	#e = /* @__PURE__ */ M("");
	#t = /* @__PURE__ */ j(() => ({
		onCollapse: this.opts.onCollapse.current,
		onExpand: this.opts.onExpand.current,
		onResize: this.opts.onResize.current
	}));
	get callbacks() {
		return z(this.#t);
	}
	set callbacks(e) {
		N(this.#t, e);
	}
	#n = /* @__PURE__ */ j(() => ({
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
		N(this.#n, e);
	}
	#r = (e) => {
		N(this.#e, e, !0), Q_(() => {
			if (this.opts.ref.current) {
				let e = this.opts.ref.current;
				if (getComputedStyle(e).transitionDuration === "0s") {
					N(this.#e, "");
					return;
				}
				let t = (n) => {
					n.propertyName === "flex-grow" && (N(this.#e, ""), e.removeEventListener("transitionend", t));
				};
				e.addEventListener("transitionend", t);
			} else N(this.#e, "");
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
		this.opts = e, this.group = t, this.attachment = av(this.opts.ref), this.domContext = new iv(this.opts.ref), Ua(() => this.group.registerPane(this)), Bv(() => Ze(this.constraints), () => {
			this.group.panesArrayChanged = !0;
		});
	}
	#i = /* @__PURE__ */ j(() => this.group.isPaneCollapsed(this));
	#a = /* @__PURE__ */ j(() => z(this.#e) === "" ? z(this.#i) ? "collapsed" : "expanded" : z(this.#e));
	#o = /* @__PURE__ */ j(() => ({
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
		N(this.#o, e);
	}
}, py = /* @__PURE__ */ H("<div><!></div>");
function my(e, t) {
	let n = xi();
	O(t, !0);
	let r = q(t, "autoSaveId", 3, null), i = q(t, "id", 3, n), a = q(t, "keyboardResizeBy", 3, null), o = q(t, "onLayoutChange", 3, yv), s = q(t, "storage", 3, sy), c = q(t, "ref", 15, null), l = /* @__PURE__ */ K(t, [
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
	]), u = ly.create({
		id: Q.with(() => i() ?? n),
		ref: Q.with(() => c(), (e) => c(e)),
		autoSaveId: Q.with(() => r()),
		direction: Q.with(() => t.direction),
		keyboardResizeBy: Q.with(() => a()),
		onLayout: Q.with(() => o()),
		storage: Q.with(() => s())
	}), d = () => u.layout, p = u.setLayout, m = () => u.opts.id.current, h = /* @__PURE__ */ j(() => L_(l, u.props));
	var g = {
		getLayout: d,
		setLayout: p,
		getId: m
	}, _ = U(), v = F(_), y = (e) => {
		var n = U();
		G(F(n), () => t.child, () => ({ props: z(h) })), W(e, n);
	}, b = (e) => {
		var n = py();
		Oa(n, () => ({ ...z(h) })), G(P(n), () => t.children ?? f), D(n), W(e, n);
	};
	return Ai(v, (e) => {
		t.child ? e(y) : e(b, -1);
	}), W(e, _), k(g);
}
//#endregion
//#region node_modules/paneforge/dist/components/pane.svelte
var hy = /* @__PURE__ */ H("<div><!></div>");
function gy(e, t) {
	let n = xi();
	O(t, !0);
	let r = q(t, "id", 3, n), i = q(t, "ref", 15, null), a = q(t, "onCollapse", 3, yv), o = q(t, "onExpand", 3, yv), s = q(t, "onResize", 3, yv), c = /* @__PURE__ */ K(t, [
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
	]), l = fy.create({
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
	}), u = l.pane.collapse, d = l.pane.expand, p = l.pane.getSize, m = l.pane.isCollapsed, h = l.pane.isExpanded, g = l.pane.resize, _ = l.pane.getId, v = /* @__PURE__ */ j(() => L_(c, l.props));
	var y = {
		collapse: u,
		expand: d,
		getSize: p,
		isCollapsed: m,
		isExpanded: h,
		resize: g,
		getId: _
	}, b = U(), x = F(b), ee = (e) => {
		var n = U();
		G(F(n), () => t.child, () => ({ props: z(v) })), W(e, n);
	}, te = (e) => {
		var n = hy();
		Oa(n, () => ({ ...z(v) })), G(P(n), () => t.children ?? f), D(n), W(e, n);
	};
	return Ai(x, (e) => {
		t.child ? e(ee) : e(te, -1);
	}), W(e, b), k(y);
}
//#endregion
//#region node_modules/paneforge/dist/components/pane-resizer.svelte
var _y = /* @__PURE__ */ H("<div><!></div>");
function vy(e, t) {
	let n = xi();
	O(t, !0);
	let r = q(t, "id", 3, n), i = q(t, "ref", 15, null), a = q(t, "disabled", 3, !1), o = q(t, "onDraggingChange", 3, yv), s = q(t, "tabindex", 3, 0), c = /* @__PURE__ */ K(t, [
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
	]), l = dy.create({
		id: Q.with(() => r()),
		ref: Q.with(() => i(), (e) => i(e)),
		disabled: Q.with(() => a()),
		onDraggingChange: Q.with(() => o()),
		tabIndex: Q.with(() => s())
	}), u = /* @__PURE__ */ j(() => L_(c, l.props));
	var d = U(), p = F(d), m = (e) => {
		var n = U();
		G(F(n), () => t.child, () => ({ props: z(u) })), W(e, n);
	}, h = (e) => {
		var n = _y();
		Oa(n, () => ({ ...z(u) })), G(P(n), () => t.children ?? f), D(n), W(e, n);
	};
	Ai(p, (e) => {
		t.child ? e(m) : e(h, -1);
	}), W(e, d), k();
}
//#endregion
//#region src/lib/components/ui/resizable/resizable-handle.svelte
var yy = /* @__PURE__ */ H("<div class=\"bg-border h-6 w-1 rounded-lg z-10 flex shrink-0\"></div>");
function by(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = q(t, "withHandle", 3, !1), i = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"withHandle"
	]);
	var a = U(), o = F(a);
	{
		let e = /* @__PURE__ */ j(() => Sm("cn-resizable-handle bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[direction=vertical]:h-px data-[direction=vertical]:w-full data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:h-1 data-[direction=vertical]:after:w-full data-[direction=vertical]:after:translate-x-0 data-[direction=vertical]:after:-translate-y-1/2 [&[data-direction=vertical]>div]:rotate-90", t.class));
		Hi(o, () => vy, (t, a) => {
			a(t, Ha({
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
					var n = U(), i = F(n), a = (e) => {
						W(e, yy());
					};
					Ai(i, (e) => {
						r() && e(a);
					}), W(e, n);
				},
				$$slots: { default: !0 }
			}));
		});
	}
	W(e, a), k();
}
//#endregion
//#region src/lib/components/ui/resizable/resizable-pane-group.svelte
function xy(e, t) {
	O(t, !0);
	let n = q(t, "ref", 15, null), r = q(t, "this", 15), i = /* @__PURE__ */ K(t, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"this",
		"class"
	]);
	var a = U(), o = F(a);
	{
		let e = /* @__PURE__ */ j(() => Sm("cn-resizable-panel-group flex h-full w-full data-[direction=vertical]:flex-col", t.class));
		Hi(o, () => my, (t, a) => {
			La(a(t, Ha({
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
	W(e, a), k();
}
//#endregion
//#region src/shared/components/layout/CytubeFluidLayout.svelte
var Sy = /* @__PURE__ */ H("<!> <!> <!>", 1), Cy = /* @__PURE__ */ H("<!> <!> <!>", 1), wy = /* @__PURE__ */ H("<div class=\"flex h-full flex-col items-center justify-center p-6\"><span class=\"font-semibold\">Features</span></div>"), Ty = /* @__PURE__ */ H("<!> <!> <!>", 1), Ey = /* @__PURE__ */ H("<div class=\"flex h-full flex-row items-center justify-center p-6\"><span class=\"font-semibold\">Player</span></div>"), Dy = /* @__PURE__ */ H("<div class=\"flex h-full flex-col items-center justify-center p-6\"><span class=\"font-semibold\">Playlist</span></div>"), Oy = /* @__PURE__ */ H("<!> <!> <!>", 1), ky = /* @__PURE__ */ H("<!> <!> <!>", 1);
function Ay(e, t) {
	O(t, !1);
	let n = () => Et(fo, "$clientStore", r), [r, i] = Dt();
	Ra(), xy(e, {
		direction: "horizontal",
		class: "w-full flex-1 border",
		children: (e, t) => {
			var r = ky(), i = F(r);
			gy(i, {
				defaultSize: 45,
				minSize: 25,
				maxSize: 50,
				children: (e, t) => {
					xy(e, {
						direction: "vertical",
						class: "flex-1",
						children: (e, t) => {
							var r = Ty(), i = F(r);
							gy(i, {
								defaultSize: 70,
								children: (e, t) => {
									xy(e, {
										direction: "vertical",
										class: "flex h-full flex-col",
										children: (e, t) => {
											var r = Cy(), i = F(r);
											gy(i, {
												defaultSize: 90,
												children: (e, t) => {
													xy(e, {
														direction: "horizontal",
														children: (e, t) => {
															var n = Sy(), r = F(n);
															gy(r, {
																defaultSize: 20,
																children: (e, t) => {
																	o_(e, { class: "flex h-full flex-col items-start justify-start px-1 py-0.5" });
																},
																$$slots: { default: !0 }
															});
															var i = I(r, 2);
															by(i, {}), gy(I(i, 2), {
																defaultSize: 80,
																class: "flex h-full flex-col items-center justify-center",
																children: (e, t) => {
																	Ve(), W(e, bi("Chat"));
																},
																$$slots: { default: !0 }
															}), W(e, n);
														},
														$$slots: { default: !0 }
													});
												},
												$$slots: { default: !0 }
											});
											var a = I(i, 2);
											by(a, {});
											var o = I(a, 2), s = (e) => {
												gy(e, {
													defaultSize: 10,
													minSize: 10,
													maxSize: 80,
													class: "flex",
													children: (e, t) => {
														Og(e, { class: "flex-1 flex-row" });
													},
													$$slots: { default: !0 }
												});
											}, c = (e) => {
												Cg(e, { class: "w-full" });
											};
											Ai(o, (e) => {
												n().logged_in ? e(s) : e(c, -1);
											}), W(e, r);
										},
										$$slots: { default: !0 }
									});
								},
								$$slots: { default: !0 }
							});
							var a = I(i, 2);
							by(a, {}), gy(I(a, 2), {
								defaultSize: 30,
								children: (e, t) => {
									W(e, wy());
								},
								$$slots: { default: !0 }
							}), W(e, r);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			});
			var a = I(i, 2);
			by(a, {}), gy(I(a, 2), {
				defaultSize: 65,
				minSize: 50,
				maxSize: 75,
				children: (e, t) => {
					xy(e, {
						direction: "vertical",
						class: "flex-1",
						children: (e, t) => {
							var n = Oy(), r = F(n);
							gy(r, {
								defaultSize: 70,
								children: (e, t) => {
									W(e, Ey());
								},
								$$slots: { default: !0 }
							});
							var i = I(r, 2);
							by(i, {}), gy(I(i, 2), {
								defaultSize: 30,
								children: (e, t) => {
									W(e, Dy());
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
	}), k(), i();
}
//#endregion
//#region src/shared/components/layout/Home.svelte
var jy = /* @__PURE__ */ H("<main class=\"flex flex-1 flex-col\"><!></main>");
function My(e) {
	var t = jy();
	Ay(P(t), {}), D(t), W(e, t);
}
//#endregion
//#region src/App.svelte
var Ny = "dark override-theme min-h-screen flex flex-col", Py = /* @__PURE__ */ H("<!> <!>", 1);
function Fy(e, t) {
	O(t, !1), Ua(() => {
		let e = document.body.className;
		return document.body.className = Ny, () => document.body.className = e;
	}), Ra();
	var n = Py(), r = F(n);
	bg(r, {}), My(I(r, 2), {}), W(e, n), k();
}
//#endregion
//#region src/main.ts
var Iy = [
	"wrap",
	"useroptions",
	"emotelist",
	"channeloptions",
	"pmbar",
	"footer",
	"usertheme"
], Ly = [
	"//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css",
	"/css/sticky-footer-navbar.css",
	"/css/videojs-resolution-switcher.css",
	"/css/video-js.css",
	"/css/cytube.css"
], Ry = () => {
	Ly.forEach((e) => {
		let t = document.querySelector(`link[href="${e}"]`);
		t && t.remove();
	}), Iy.forEach((e) => {
		let t = document.getElementById(e);
		t && t.remove();
	});
}, zy = (e) => new Promise((t, n) => {
	let r = document.createElement("link");
	r.rel = "stylesheet", r.type = "text/css", r.href = e.toString(), r.onload = () => t(), r.onerror = (e) => n(/* @__PURE__ */ Error(`failed to load stylesheet: ${e}`)), document.head.appendChild(r);
}), By = (e) => {
	let t = document.createElement("div");
	t.className = "server-msg-reconnect", t.style = "border: 1px solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", t.textContent = e;
	let n = document.getElementById("messagebuffer");
	return n && n.appendChild(t), t;
}, Vy = async () => {
	let e = By("Loading styles...");
	await zy(new URL("dist/index.css", window.BASE_URL)), e.remove();
}, Hy = async () => {
	let e = So();
	try {
		await Vy(), Ry(), Za(), wi(Fy, { target: document.body });
	} catch (t) {
		throw e(), t;
	}
};
//#endregion
export { Hy as init };
