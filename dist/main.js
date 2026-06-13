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
var Ye;
function Xe(e) {
	if (e === null) throw Ge(), Be;
	return Ye = e;
}
function Ze() {
	return Xe(/* @__PURE__ */ Kn(Ye));
}
function T(e) {
	if (w) {
		if (/* @__PURE__ */ Kn(Ye) !== null) throw Ge(), Be;
		Ye = e;
	}
}
function Qe(e = 1) {
	if (w) {
		for (var t = e, n = Ye; t--;) n = /* @__PURE__ */ Kn(n);
		Ye = n;
	}
}
function $e(e = !0) {
	for (var t = 0, n = Ye;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Kn(n);
		e && n.remove(), n = i;
	}
}
function et(e) {
	if (!e || e.nodeType !== 8) throw Ge(), Be;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function tt(e) {
	return e === this.v;
}
function nt(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function rt(e) {
	return !nt(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var it = !1, at = !1;
function ot() {
	at = !0;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/clone.js
var st = [];
function ct(e, t = !1, n = !1) {
	return lt(e, /* @__PURE__ */ new Map(), "", st, null, n);
}
function lt(e, t, n, r, i = null, a = !1) {
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
				c in e && (s[c] = lt(u, t, n, r, null, a));
			}
			return s;
		}
		if (v(e) === g) {
			s = {}, t.set(e, s), i !== null && t.set(i, s);
			for (var d of Object.keys(e)) s[d] = lt(e[d], t, n, r, null, a);
			return s;
		}
		if (e instanceof Date) return structuredClone(e);
		if (typeof e.toJSON == "function" && !a) return lt(e.toJSON(), t, n, r, e);
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
var ut = null;
function dt(e) {
	ut = e;
}
function ft(e) {
	return _t("getContext").get(e);
}
function pt(e, t) {
	let n = _t("setContext");
	if (it) {
		var r = F.f;
		!Fr && r & 32 && !ut.i || Fe();
	}
	return n.set(e, t), t;
}
function mt(e) {
	return _t("hasContext").has(e);
}
function ht() {
	return _t("getAllContexts");
}
function E(e, t = !1, n) {
	ut = {
		p: ut,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: F,
		l: at && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function D(e) {
	var t = ut, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) lr(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, ut = t.p, e ?? {};
}
function gt() {
	return !at || ut !== null && ut.l === null;
}
function _t(e) {
	return ut === null && De(e), ut.c ??= new Map(vt(ut) || void 0);
}
function vt(e) {
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
var yt = [];
function bt() {
	var e = yt;
	yt = [], te(e);
}
function xt(e) {
	if (yt.length === 0 && !dn) {
		var t = yt;
		queueMicrotask(() => {
			t === yt && bt();
		});
	}
	yt.push(e);
}
function St() {
	for (; yt.length > 0;) bt();
}
function Ct(e) {
	var t = F;
	if (t === null) return Fr.f |= ge, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	wt(e, t);
}
function wt(e, t) {
	if (!(t !== null && t.f & 16384)) {
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
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Tt = ~(ie | ae | re);
function Et(e, t) {
	e.f = e.f & Tt | t;
}
function Dt(e) {
	e.f & 512 || e.deps === null ? Et(e, re) : Et(e, ae);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ot(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= pe, Ot(t.deps));
}
function kt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ot(e.deps), Et(e, re);
}
//#endregion
//#region node_modules/svelte/src/store/utils.js
function At(e, t, n) {
	if (e == null) return t(void 0), n && n(void 0), x;
	let r = L(() => e.subscribe(t, n));
	return r.unsubscribe ? () => r.unsubscribe() : r;
}
//#endregion
//#region node_modules/svelte/src/store/shared/index.js
var jt = [];
function Mt(e, t = x) {
	let n = null, r = /* @__PURE__ */ new Set();
	function i(t) {
		if (nt(e, t) && (e = t, n)) {
			let t = !jt.length;
			for (let t of r) t[1](), jt.push(t, e);
			if (t) {
				for (let e = 0; e < jt.length; e += 2) jt[e][0](jt[e + 1]);
				jt.length = 0;
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
function Nt(e) {
	let t;
	return At(e, (e) => t = e)(), t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Pt = !1, Ft = !1, It = Symbol("unmounted");
function Lt(e, t, n) {
	let r = n[t] ??= {
		store: null,
		source: /* @__PURE__ */ jn(void 0),
		unsubscribe: x
	};
	if (r.store !== e && !(It in n)) if (r.unsubscribe(), r.store = e ?? null, e == null) r.source.v = void 0, r.unsubscribe = x;
	else {
		var i = !0;
		r.unsubscribe = At(e, (e) => {
			i ? r.source.v = e : j(r.source, e);
		}), i = !1;
	}
	return e && It in n ? Nt(e) : I(r.source);
}
function Rt() {
	let e = {};
	function t() {
		sr(() => {
			for (var t in e) e[t].unsubscribe();
			p(e, It, {
				enumerable: !1,
				value: !0
			});
		});
	}
	return [e, t];
}
function zt(e, t) {
	Pt = !0;
	try {
		e.set(t);
	} finally {
		Pt = !1;
	}
}
function Bt(e, t, n) {
	return zt(e, n), t;
}
function Vt(e) {
	var t = Ft;
	try {
		return Ft = !1, [e(), Ft];
	} finally {
		Ft = t;
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Ht(e) {
	let t = 0, n = An(0), r;
	return () => {
		or() && (I(n), hr(() => (t === 0 && (r = L(() => e(() => Pn(n)))), t += 1, () => {
			xt(() => {
				--t, t === 0 && (r?.(), r = void 0, Pn(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var Ut = ue | de;
function Wt(e, t, n, r) {
	new Gt(e, t, n, r);
}
var Gt = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = w ? Ye : null;
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
	#h = Ht(() => (this.#m = An(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = F;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = F.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = _r(() => {
			if (w) {
				let e = this.#t;
				Ze();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#v() : this.#g();
			} else this.#y();
		}, Ut), w && (this.#e = Ye);
	}
	#g() {
		try {
			this.#a = yr(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed;
		t && (this.#s = yr(() => {
			t(this.#e, () => e, () => () => {});
		}));
	}
	#v() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = yr(() => e(this.#e)), xt(() => {
			var e = this.#c = document.createDocumentFragment(), t = Wn();
			e.append(t), this.#a = this.#x(() => yr(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, Er(this.#o, () => {
				this.#o = null;
			}), this.#b(k));
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = yr(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Ar(this.#a, e);
				let t = this.#n.pending;
				this.#o = yr(() => t(this.#e));
			} else this.#b(k);
		} catch (e) {
			this.error(e);
		}
	}
	#b(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		kt(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(e) {
		var t = F, n = Fr, r = ut;
		Rr(this.#i), Lr(this.#i), dt(this.#i.ctx);
		try {
			return _n.ensure(), e();
		} catch (e) {
			return Ct(e), null;
		} finally {
			Rr(t), Lr(n), dt(r);
		}
	}
	#S(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#b(t), this.#o && Er(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, xt(() => {
			this.#d = !1, this.#m && Mn(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), I(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		k?.is_fork ? (this.#a && k.skip_effect(this.#a), this.#o && k.skip_effect(this.#o), this.#s && k.skip_effect(this.#s), k.oncommit(() => {
			this.#C(e);
		})) : this.#C(e);
	}
	#C(e) {
		this.#a &&= (Cr(this.#a), null), this.#o &&= (Cr(this.#o), null), this.#s &&= (Cr(this.#s), null), w && (Xe(this.#t), Qe(), Xe($e()));
		var t = this.#n.onerror;
		let n = this.#n.failed;
		var r = !1, i = !1;
		let a = () => {
			if (r) {
				qe();
				return;
			}
			r = !0, i && ze(), this.#s !== null && Er(this.#s, () => {
				this.#s = null;
			}), this.#x(() => {
				this.#y();
			});
		}, o = (e) => {
			try {
				i = !0, t?.(e, a), i = !1;
			} catch (e) {
				wt(e, this.#i && this.#i.parent);
			}
			n && (this.#s = this.#x(() => {
				try {
					return yr(() => {
						var t = F;
						t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
					});
				} catch (e) {
					return wt(e, this.#i.parent), null;
				}
			}));
		};
		xt(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				wt(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => wt(e, this.#i && this.#i.parent)) : o(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Kt(e, t, n, r) {
	let i = gt() ? Xt : $t;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = F, c = qt(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				wt(e, s);
			}
			Jt();
		}
	}
	var d = Yt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ Qt(e))).then(u).catch((e) => wt(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), Jt();
	}) : f();
}
function qt() {
	var e = F, t = Fr, n = ut, r = k;
	return function(i = !0) {
		Rr(e), Lr(t), dt(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Jt(e = !0) {
	Rr(null), Lr(null), dt(null), e && k?.deactivate();
}
function Yt() {
	var e = F, t = e.b, n = k, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Xt(e) {
	var t = 2 | ie;
	return F !== null && (F.f |= de), {
		ctx: ut,
		deps: null,
		effects: null,
		equals: tt,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: Ve,
		wv: 0,
		parent: F,
		ac: null
	};
}
var Zt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function Qt(e, t, n) {
	let r = F;
	r === null && Oe();
	var i = void 0, a = An(Ve), o = !Fr, s = /* @__PURE__ */ new Set();
	return mr(() => {
		var t = F, n = S();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== Te && n.reject(e);
			}).finally(Jt);
		} catch (e) {
			n.reject(e), Jt();
		}
		var c = k;
		if (o) {
			if (t.f & 32768) var l = Yt();
			if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(Zt);
			else for (let e of s.values()) e.reject(Zt);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== Zt && (c.activate(), t ? (a.f |= ge, Mn(a, t)) : (a.f & 8388608 && (a.f ^= ge), Mn(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), sr(() => {
		for (let e of s) e.reject(Zt);
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
/*#__NO_SIDE_EFFECTS__*/
function O(e) {
	let t = /* @__PURE__ */ Xt(e);
	return it || Br(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function $t(e) {
	let t = /* @__PURE__ */ Xt(e);
	return t.equals = rt, t;
}
function en(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) Cr(t[n]);
	}
}
function tn(e) {
	var t, n = F, r = e.parent;
	if (!Nr && r !== null && e.v !== Ve && r.f & 24576) return We(), e.v;
	Rr(r);
	try {
		e.f &= ~pe, en(e), t = Qr(e);
	} finally {
		Rr(n);
	}
	return t;
}
function nn(e) {
	var t = tn(e);
	if (!e.equals(t) && (e.wv = Yr(), (!k?.is_fork || e.deps === null) && (k === null ? e.v = t : (k.capture(e, t, !0), cn?.capture(e, t, !0)), e.deps === null))) {
		Et(e, re);
		return;
	}
	Nr || (ln === null ? Dt(e) : (or() || k?.is_fork) && ln.set(e, t));
}
function rn(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Te), t.fn !== null && (t.teardown = x), t.ac = null, ei(t, 0), xr(t));
}
function an(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && ti(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var on = null, sn = null, k = null, cn = null, ln = null, un = null, dn = !1, fn = !1, pn = null, mn = null, hn = 0, gn = 1, _n = class e {
	id = gn++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		sn === null ? on = sn = this : (sn.#n = this, this.#t = sn), sn = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
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
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) Et(r, ie), t(r);
			for (r of n.m) Et(r, ae), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, hn++ > 1e3 && (this.#S(), yn());
		for (let e of this.#u) this.#d.delete(e), Et(e, ie), this.schedule(e);
		for (let e of this.#d) Et(e, ae), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = pn = [], r = [], i = mn = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw En(e), this.#h() || this.discard(), t;
		}
		if (k = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (pn = null, mn = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Tn(e, t);
			i.length > 0 && k.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), cn = this, xn(r), xn(n), cn = null, this.#s?.resolve();
		var s = k;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && (this.#S(), it && (this.#x(), k = s)), this.#c.length > 0) if (s !== null) {
			let e = s;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		} else s = this;
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= re;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= re : i & 4 ? t.push(r) : it && i & 16777224 ? n.push(r) : Xr(r) && (i & 16 && this.#d.add(r), ti(r));
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
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), Et(i, ie), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#S(), k = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) kt(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== Ve && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), ln?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		k = this;
	}
	deactivate() {
		k = null, ln = null;
	}
	flush() {
		try {
			fn = !0, k = this, this.#g();
		} finally {
			hn = 0, un = null, pn = null, mn = null, fn = !1, k = null, ln = null, On.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(Zt);
		this.#S(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	#x() {
		for (let u = on; u !== null; u = u.#n) {
			var e = u.id < this.id, t = [];
			for (let [r, [i, a]] of this.current) {
				if (u.current.has(r)) {
					var n = u.current.get(r)[0];
					if (e && i !== n) u.current.set(r, [i, a]);
					else continue;
				}
				t.push(r);
			}
			if (e) for (let [e, t] of this.async_deriveds) {
				let n = u.async_deriveds.get(e);
				n && t.promise.then(n.resolve).catch(n.reject);
			}
			var r = [...u.current.keys()].filter((e) => !u.current.get(e)[1]);
			if (!(!u.#e || r.length === 0)) {
				var i = r.filter((e) => !this.current.has(e));
				if (i.length === 0) e && u.discard();
				else if (t.length > 0) {
					if (e) for (let e of this.#p) u.unskip_effect(e, (e) => {
						e.f & 4194320 ? u.schedule(e) : u.#b([e]);
					});
					u.activate();
					var a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
					for (var s of t) Sn(s, i, a, o);
					o = /* @__PURE__ */ new Map();
					var c = [...u.current].filter(([e, t]) => {
						let n = this.current.get(e);
						return n ? n[0] !== t[0] || n[1] !== t[1] : !0;
					}).map(([e]) => e);
					if (c.length > 0) for (let e of this.#l) !(e.f & 155648) && Cn(e, c, o) && (e.f & 4194320 ? (Et(e, ie), u.schedule(e)) : u.#u.add(e));
					if (u.#c.length > 0 && !u.#m) {
						u.apply();
						for (var l of u.#c) u.#_(l, [], []);
						u.#c = [];
					}
					u.deactivate();
				}
			}
		}
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, xt(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= S()).promise;
	}
	static ensure() {
		if (k === null) {
			let t = k = new e();
			!fn && !dn && xt(() => {
				t.#e || t.flush();
			});
		}
		return k;
	}
	apply() {
		if (!it || !this.is_fork && this.#t === null && this.#n === null) {
			ln = null;
			return;
		}
		ln = /* @__PURE__ */ new Map();
		for (let [e, [t]] of this.current) ln.set(e, t);
		for (let t = on; t !== null; t = t.#n) if (!(t === this || t.is_fork)) {
			var e = !1;
			if (t.id < this.id) {
				for (let [n, [, r]] of t.current) if (!r && this.current.has(n)) {
					e = !0;
					break;
				}
			}
			if (!e) for (let [e, n] of t.previous) ln.has(e) || ln.set(e, n);
		}
	}
	schedule(e) {
		if (un = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (pn !== null && t === F && (it || (Fr === null || !(Fr.f & 2)) && !Pt)) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= re;
			}
		}
		this.#c.push(t);
	}
	#S() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null ? on = t : e.#n = t, t === null ? sn = e : t.#t = e, this.linked = !1;
		}
	}
};
function vn(e) {
	var t = dn;
	dn = !0;
	try {
		var n;
		for (e && (k !== null && !k.is_fork && k.flush(), n = e());;) {
			if (St(), k === null) return n;
			k.flush();
		}
	} finally {
		dn = t;
	}
}
function yn() {
	try {
		Ne();
	} catch (e) {
		wt(e, un);
	}
}
var bn = null;
function xn(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Xr(r) && (bn = /* @__PURE__ */ new Set(), ti(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Tr(r), bn?.size > 0)) {
				On.clear();
				for (let e of bn) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) bn.has(n) && (bn.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || ti(n);
					}
				}
				bn.clear();
			}
		}
		bn = null;
	}
}
function Sn(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? Sn(i, t, n, r) : e & 4194320 && !(e & 2048) && Cn(i, t, r) && (Et(i, ie), wn(i));
	}
}
function Cn(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (d.call(t, r)) return !0;
		if (r.f & 2 && Cn(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function wn(e) {
	k.schedule(e);
}
function Tn(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), Et(e, re);
		for (var n = e.first; n !== null;) Tn(n, t), n = n.next;
	}
}
function En(e) {
	Et(e, re);
	for (var t = e.first; t !== null;) En(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Dn = /* @__PURE__ */ new Set(), On = /* @__PURE__ */ new Map(), kn = !1;
function An(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: tt,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function A(e, t) {
	let n = An(e, t);
	return Br(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function jn(e, t = !1, n = !0) {
	let r = An(e);
	return t || (r.equals = rt), at && n && ut !== null && ut.l !== null && (ut.l.s ??= []).push(r), r;
}
function j(e, t, n = !1) {
	return Fr !== null && (!Ir || Fr.f & 131072) && gt() && Fr.f & 4325394 && (zr === null || !zr.has(e)) && Re(), Mn(e, n ? In(t) : t, mn);
}
function Mn(e, t, n = null) {
	if (!e.equals(t)) {
		On.set(e, Nr ? t : e.v);
		var r = _n.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && tn(t), ln === null && Dt(t);
		}
		e.wv = Yr(), Fn(e, ie, n), gt() && F !== null && F.f & 1024 && !(F.f & 96) && (Ur === null ? Wr([e]) : Ur.push(e)), !r.is_fork && Dn.size > 0 && !kn && Nn();
	}
	return t;
}
function Nn() {
	kn = !1;
	for (let e of Dn) {
		e.f & 1024 && Et(e, ae);
		let t;
		try {
			t = Xr(e);
		} catch {
			t = !0;
		}
		t && ti(e);
	}
	Dn.clear();
}
function Pn(e) {
	j(e, e.v + 1);
}
function Fn(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = gt(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === F)) {
			var l = (c & ie) === 0;
			if (l && Et(s, t), c & 131072) Dn.add(s);
			else if (c & 2) {
				var u = s;
				ln?.delete(u), c & 65536 || (c & 512 && (F === null || !(F.f & 2097152)) && (s.f |= pe), Fn(u, ae, n));
			} else if (l) {
				var d = s;
				c & 16 && bn !== null && bn.add(d), n === null ? wn(d) : n.push(d);
			}
		}
	}
}
function In(e) {
	if (typeof e != "object" || !e || _e in e) return e;
	let t = v(e);
	if (t !== g && t !== _) return e;
	var n = /* @__PURE__ */ new Map(), r = l(e), i = /* @__PURE__ */ A(0), a = null, o = qr, s = (e) => {
		if (qr === o) return e();
		var t = Fr, n = qr;
		Lr(null), Jr(o);
		var r = e();
		return Lr(t), Jr(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ A(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Ie();
			var i = n.get(t);
			return i === void 0 ? s(() => {
				var e = /* @__PURE__ */ A(r.value, a);
				return n.set(t, e), e;
			}) : j(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = s(() => /* @__PURE__ */ A(Ve, a));
					n.set(t, e), Pn(i);
				}
			} else j(r, Ve), Pn(i);
			return !0;
		},
		get(t, r, i) {
			if (r === _e) return e;
			var o = n.get(r), c = r in t;
			if (o === void 0 && (!c || m(t, r)?.writable) && (o = s(() => /* @__PURE__ */ A(In(c ? t[r] : Ve), a)), n.set(r, o)), o !== void 0) {
				var l = I(o);
				return l === Ve ? void 0 : l;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = I(i));
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
			return (r !== void 0 || F !== null && (!i || m(e, t)?.writable)) && (r === void 0 && (r = s(() => /* @__PURE__ */ A(i ? In(e[t]) : Ve, a)), n.set(t, r)), I(r) === Ve) ? !1 : i;
		},
		set(e, t, o, c) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var f = n.get(d + "");
				f === void 0 ? d in e && (f = s(() => /* @__PURE__ */ A(Ve, a)), n.set(d + "", f)) : j(f, Ve);
			}
			if (l === void 0) (!u || m(e, t)?.writable) && (l = s(() => /* @__PURE__ */ A(void 0, a)), j(l, In(o)), n.set(t, l));
			else {
				u = l.v !== Ve;
				var p = s(() => In(o));
				j(l, p);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(c, o), !u) {
				if (r && typeof t == "string") {
					var g = n.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && j(g, _ + 1);
				}
				Pn(i);
			}
			return !0;
		},
		ownKeys(e) {
			I(i);
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
function Ln(e) {
	try {
		if (typeof e == "object" && e && _e in e) return e[_e];
	} catch {}
	return e;
}
function Rn(e, t) {
	return Object.is(Ln(e), Ln(t));
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
var zn, Bn, Vn, Hn;
function Un() {
	if (zn === void 0) {
		zn = window, Bn = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Vn = m(t, "firstChild").get, Hn = m(t, "nextSibling").get, y(e) && (e[xe] = void 0, e[be] = null, e[Se] = void 0, e.__e = void 0), y(n) && (n[Ce] = void 0);
	}
}
function Wn(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Gn(e) {
	return Vn.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Kn(e) {
	return Hn.call(e);
}
function M(e, t) {
	if (!w) return /* @__PURE__ */ Gn(e);
	var n = /* @__PURE__ */ Gn(Ye);
	if (n === null) n = Ye.appendChild(Wn());
	else if (t && n.nodeType !== 3) {
		var r = Wn();
		return n?.before(r), Xe(r), r;
	}
	return t && Xn(n), Xe(n), n;
}
function N(e, t = !1) {
	if (!w) {
		var n = /* @__PURE__ */ Gn(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Kn(n) : n;
	}
	if (t) {
		if (Ye?.nodeType !== 3) {
			var r = Wn();
			return Ye?.before(r), Xe(r), r;
		}
		Xn(Ye);
	}
	return Ye;
}
function P(e, t = 1, n = !1) {
	let r = w ? Ye : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Kn(r);
	if (!w) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Wn();
			return r === null ? i?.after(a) : r.before(a), Xe(a), a;
		}
		Xn(r);
	}
	return Xe(r), r;
}
function qn(e) {
	e.textContent = "";
}
function Jn() {
	return !it || bn !== null ? !1 : (F.f & ce) !== 0;
}
function Yn(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function Xn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function Zn(e, t) {
	if (t) {
		let t = document.body;
		e.autofocus = !0, xt(() => {
			document.activeElement === t && e.focus();
		});
	}
}
function Qn(e) {
	w && /* @__PURE__ */ Gn(e) !== null && qn(e);
}
var $n = !1;
function er() {
	$n || ($n = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[we]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function tr(e) {
	var t = Fr, n = F;
	Lr(null), Rr(null);
	try {
		return e();
	} finally {
		Lr(t), Rr(n);
	}
}
function nr(e, t, n, r = n) {
	e.addEventListener(t, () => tr(n));
	let i = e[we];
	i ? e[we] = () => {
		i(), r(!0);
	} : e[we] = () => r(!0), er();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function rr(e) {
	F === null && (Fr === null && Me(e), je()), Nr && Ae(e);
}
function ir(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ar(e, t) {
	var n = F;
	n !== null && n.f & 8192 && (e |= oe);
	var r = {
		ctx: ut,
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
	if (e & 4) pn === null ? _n.ensure().schedule(r) : pn.push(r);
	else if (t !== null) {
		try {
			ti(r);
		} catch (e) {
			throw Cr(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ue));
	}
	if (i !== null && (i.parent = n, n !== null && ir(i, n), Fr !== null && Fr.f & 2 && !(e & 64))) {
		var a = Fr;
		(a.effects ??= []).push(i);
	}
	return r;
}
function or() {
	return Fr !== null && !Ir;
}
function sr(e) {
	let t = ar(8, null);
	return Et(t, re), t.teardown = e, t;
}
function cr(e) {
	rr("$effect");
	var t = F.f;
	if (!Fr && t & 32 && ut !== null && !ut.i) {
		var n = ut;
		(n.e ??= []).push(e);
	} else return lr(e);
}
function lr(e) {
	return ar(4 | fe, e);
}
function ur(e) {
	return rr("$effect.pre"), ar(8 | fe, e);
}
function dr(e) {
	_n.ensure();
	let t = ar(64 | de, e);
	return () => {
		Cr(t);
	};
}
function fr(e) {
	_n.ensure();
	let t = ar(64 | de, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? Er(t, () => {
			Cr(t), n(void 0);
		}) : (Cr(t), n(void 0));
	});
}
function pr(e) {
	return ar(4, e);
}
function mr(e) {
	return ar(he | de, e);
}
function hr(e, t = 0) {
	return ar(8 | t, e);
}
function gr(e, t = [], n = [], r = []) {
	Kt(r, t, n, (t) => {
		ar(8, () => {
			e(...t.map(I));
		});
	});
}
function _r(e, t = 0) {
	return ar(16 | t, e);
}
function vr(e, t = 0) {
	return ar(ne | t, e);
}
function yr(e) {
	return ar(32 | de, e);
}
function br(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Nr, n = Fr;
		Pr(!0), Lr(null);
		try {
			t.call(null);
		} finally {
			Pr(e), Lr(n);
		}
	}
}
function xr(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && tr(() => {
			e.abort(Te);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : Cr(n, t), n = r;
	}
}
function Sr(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || Cr(t), t = n;
	}
}
function Cr(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (wr(e.nodes.start, e.nodes.end), n = !0), e.f |= le, xr(e, t && !n), ei(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	br(e), e.f ^= le, e.f |= se;
	var i = e.parent;
	i !== null && i.first !== null && Tr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function wr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Kn(e);
		e.remove(), e = n;
	}
}
function Tr(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Er(e, t, n = !0) {
	var r = [];
	Dr(e, r, !0);
	var i = () => {
		n && Cr(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Dr(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= oe;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				Dr(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Or(e) {
	kr(e, !0);
}
function kr(e, t) {
	if (e.f & 8192) {
		e.f ^= oe, e.f & 1024 || (Et(e, ie), _n.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			kr(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Ar(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Kn(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var jr = null, Mr = !1, Nr = !1;
function Pr(e) {
	Nr = e;
}
var Fr = null, Ir = !1;
function Lr(e) {
	Fr = e;
}
var F = null;
function Rr(e) {
	F = e;
}
var zr = null;
function Br(e) {
	Fr !== null && (!it || Fr.f & 2) && (zr ??= /* @__PURE__ */ new Set()).add(e);
}
var Vr = null, Hr = 0, Ur = null;
function Wr(e) {
	Ur = e;
}
var Gr = 1, Kr = 0, qr = Kr;
function Jr(e) {
	qr = e;
}
function Yr() {
	return ++Gr;
}
function Xr(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~pe), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Xr(a) && nn(a), a.wv > e.wv) return !0;
		}
		t & 512 && ln === null && Et(e, re);
	}
	return !1;
}
function Zr(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!it && zr !== null && zr.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Zr(a, t, !1) : t === a && (n ? Et(a, ie) : a.f & 1024 && Et(a, ae), wn(a));
	}
}
function Qr(e) {
	var t = Vr, n = Hr, r = Ur, i = Fr, a = zr, o = ut, s = Ir, c = qr, l = e.f;
	Vr = null, Hr = 0, Ur = null, Fr = l & 96 ? null : e, zr = null, dt(e.ctx), Ir = !1, qr = ++Kr, e.ac !== null && (tr(() => {
		e.ac.abort(Te);
	}), e.ac = null);
	try {
		e.f |= me;
		var u = e.fn, d = u();
		e.f |= ce;
		var f = e.deps, p = k?.is_fork;
		if (Vr !== null) {
			var m;
			if (p || ei(e, Hr), f !== null && Hr > 0) for (f.length = Hr + Vr.length, m = 0; m < Vr.length; m++) f[Hr + m] = Vr[m];
			else e.deps = f = Vr;
			if (or() && e.f & 512) for (m = Hr; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Hr < f.length && (ei(e, Hr), f.length = Hr);
		if (gt() && Ur !== null && !Ir && f !== null && !(e.f & 6146)) for (m = 0; m < Ur.length; m++) Zr(Ur[m], e);
		if (i !== null && i !== e) {
			if (Kr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Kr;
			if (t !== null) for (let e of t) e.rv = Kr;
			Ur !== null && (r === null ? r = Ur : r.push(...Ur));
		}
		return e.f & 8388608 && (e.f ^= ge), d;
	} catch (e) {
		return Ct(e);
	} finally {
		e.f ^= me, Vr = t, Hr = n, Ur = r, Fr = i, zr = a, dt(o), Ir = s, qr = c;
	}
}
function $r(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = u.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Vr === null || !d.call(Vr, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~pe), a.v !== Ve && Dt(a), rn(a), ei(a, 0);
	}
}
function ei(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) $r(e, n[r]);
}
function ti(e) {
	var t = e.f;
	if (!(t & 16384)) {
		Et(e, re);
		var n = F, r = Mr;
		F = e, Mr = !0;
		try {
			t & 16777232 ? Sr(e) : xr(e), br(e);
			var i = Qr(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Gr;
		} finally {
			Mr = r, F = n;
		}
	}
}
async function ni() {
	if (it) return new Promise((e) => {
		requestAnimationFrame(() => e()), setTimeout(() => e());
	});
	await Promise.resolve(), vn();
}
function I(e) {
	var t = (e.f & 2) != 0;
	if (jr?.add(e), Fr !== null && !Ir && !(F !== null && F.f & 16384) && (zr === null || !zr.has(e))) {
		var n = Fr.deps;
		if (Fr.f & 2097152) e.rv < Kr && (e.rv = Kr, Vr === null && n !== null && n[Hr] === e ? Hr++ : Vr === null ? Vr = [e] : Vr.push(e));
		else {
			Fr.deps ??= [], d.call(Fr.deps, e) || Fr.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [Fr] : d.call(r, Fr) || r.push(Fr);
		}
	}
	if (Nr && On.has(e)) return On.get(e);
	if (t) {
		var i = e;
		if (Nr) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || ii(i)) && (a = tn(i)), On.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !Ir && Fr !== null && (Mr || (Fr.f & 512) != 0), s = (i.f & ce) === 0;
		Xr(i) && (o && (i.f |= 512), nn(i)), o && !s && (an(i), ri(i));
	}
	if (ln?.has(e)) return ln.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function ri(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (an(t), ri(t));
}
function ii(e) {
	if (e.v === Ve) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (On.has(t) || t.f & 2 && ii(t)) return !0;
	return !1;
}
function L(e) {
	var t = Ir;
	try {
		return Ir = !0, e();
	} finally {
		Ir = t;
	}
}
function ai(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (_e in e) oi(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && _e in n && oi(n);
		}
	}
}
function oi(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			oi(e[n], t);
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
function si() {
	return Symbol(Ue);
}
//#endregion
//#region node_modules/svelte/src/utils.js
function ci(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var li = [
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
function ui(e) {
	return li.includes(e);
}
var di = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), fi = {
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
function pi(e) {
	return e = e.toLowerCase(), fi[e] ?? e;
}
[...di];
var mi = ["touchstart", "touchmove"];
function hi(e) {
	return mi.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var gi = Symbol("events"), _i = /* @__PURE__ */ new Set(), vi = /* @__PURE__ */ new Set();
function yi(e) {
	if (!w) return;
	e.removeAttribute("onload"), e.removeAttribute("onerror");
	let t = e.__e;
	t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
		e.isConnected && e.dispatchEvent(t);
	}));
}
function bi(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || Ei.call(t, e), !e.cancelBubble) return tr(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? xt(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function xi(e, t, n, r = {}) {
	var i = bi(t, e, n, r);
	return () => {
		e.removeEventListener(t, i, r);
	};
}
function Si(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = bi(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && sr(() => {
		t.removeEventListener(e, o, a);
	});
}
function Ci(e, t, n) {
	(t[gi] ??= {})[e] = n;
}
function wi(e) {
	for (var t = 0; t < e.length; t++) _i.add(e[t]);
	for (var n of vi) n(e);
}
var Ti = null;
function Ei(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Ti = e;
	var o = 0, s = Ti === e && e[gi];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[gi] = t;
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
		var u = Fr, d = F;
		Lr(null), Rr(null);
		try {
			for (var f, m = []; a !== null && a !== t;) {
				try {
					var h = a[gi]?.[r];
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
			e[gi] = t, delete e.currentTarget, Lr(u), Rr(d);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Di = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Oi(e) {
	return Di?.createHTML(e) ?? e;
}
function ki(e) {
	var t = Yn("template");
	return t.innerHTML = Oi(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Ai(e, t) {
	var n = F;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function R(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (w) return Ai(Ye, null), Ye;
		i === void 0 && (i = ki(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Gn(i)));
		var t = r || Bn ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Gn(t), s = t.lastChild;
			Ai(o, s);
		} else Ai(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function ji(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = (t & 1) != 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (w) return Ai(Ye, null), Ye;
		if (!o) {
			var e = /* @__PURE__ */ Gn(ki(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ Gn(e);) o.appendChild(/* @__PURE__ */ Gn(e));
			else o = /* @__PURE__ */ Gn(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ Gn(t), r = t.lastChild;
			Ai(n, r);
		} else Ai(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Mi(e, t) {
	return /* @__PURE__ */ ji(e, t, "svg");
}
function Ni(e = "") {
	if (!w) {
		var t = Wn(e + "");
		return Ai(t, t), t;
	}
	var n = Ye;
	return n.nodeType === 3 ? Xn(n) : (n.before(n = Wn()), Xe(n)), Ai(n, n), n;
}
function z() {
	if (w) return Ai(Ye, null), Ye;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Wn();
	return e.append(t, n), Ai(t, n), e;
}
function B(e, t) {
	if (w) {
		var n = F;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = Ye), Ze();
		return;
	}
	e !== null && e.before(t);
}
function Pi() {
	if (w && Ye && Ye.nodeType === 8 && Ye.textContent?.startsWith("$")) {
		let e = Ye.textContent.substring(1);
		return Ze(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
var Fi = !0;
function Ii(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[Ce] ??= e.nodeValue) && (e[Ce] = n, e.nodeValue = `${n}`);
}
function Li(e, t) {
	return zi(e, t);
}
var Ri = /* @__PURE__ */ new Map();
function zi(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	Un();
	var c = void 0, l = fr(() => {
		var l = n ?? t.appendChild(Wn());
		Wt(l, { pending: () => {} }, (t) => {
			E({});
			var n = ut;
			if (a && (n.c = a), i && (r.$$events = i), w && Ai(t, null), Fi = o, c = e(t, r) || {}, Fi = !0, w && (F.nodes.end = Ye, Ye === null || Ye.nodeType !== 8 || Ye.data !== "]")) throw Ge(), Be;
			D();
		}, s);
		var u = /* @__PURE__ */ new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!u.has(r)) {
					u.add(r);
					var i = hi(r);
					for (let e of [t, document]) {
						var a = Ri.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Ri.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Ei, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return d(f(_i)), vi.add(d), () => {
			for (var e of u) for (let n of [t, document]) {
				var r = Ri.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Ei), r.delete(e), r.size === 0 && Ri.delete(n)) : r.set(e, i);
			}
			vi.delete(d), l !== n && l.parentNode?.removeChild(l);
		};
	});
	return Bi.set(c, l), c;
}
var Bi = /* @__PURE__ */ new WeakMap();
function Vi(e, t) {
	let n = Bi.get(e);
	return n ? (Bi.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Hi = class {
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
			if (n) Or(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (Or(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (Cr(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Ar(r, t), t.append(Wn()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else Cr(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), Er(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (Cr(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = k, r = Jn();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Wn();
			i.append(a), this.#n.set(e, {
				effect: yr(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, yr(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else w && (this.anchor = Ye), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function V(e, t, n = !1) {
	var r;
	w && (r = Ye, Ze());
	var i = new Hi(e), a = n ? ue : 0;
	function o(e, t) {
		if (w) {
			var n = et(r);
			if (e !== parseInt(n.substring(1))) {
				var a = $e();
				Xe(a), i.anchor = a, Je(!1), i.ensure(e, t), Je(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	_r(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/key.js
var Ui = Symbol("NaN");
function Wi(e, t, n) {
	w && Ze();
	var r = new Hi(e), i = !gt();
	_r(() => {
		var e = t();
		e !== e && (e = Ui), i && typeof e == "object" && e && (e = {}), r.ensure(e, n);
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Gi(e, t) {
	return t;
}
function Ki(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		Er(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					qi(e, f(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var l = n, u = l.parentNode;
			qn(u), u.append(l), e.items.clear();
		}
		qi(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function qi(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= C, Ar(a, document.createDocumentFragment())) : Cr(t[i], n);
	}
}
var Ji;
function Yi(e, t, n, r, i, a = null) {
	var o = e, s = /* @__PURE__ */ new Map();
	if (t & 4) {
		var c = e;
		o = w ? Xe(/* @__PURE__ */ Gn(c)) : c.appendChild(Wn());
	}
	w && Ze();
	var u = null, d = /* @__PURE__ */ $t(() => {
		var e = n();
		return l(e) ? e : e == null ? [] : f(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = u, Zi(v, p, o, t, r), u !== null && (p.length === 0 ? u.f & 33554432 ? (u.f ^= C, $i(u, null, o)) : Or(u) : Er(u, () => {
			u = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: _r(() => {
			p = I(d);
			var e = p.length;
			let c = !1;
			w && et(o) === "[!" != (e === 0) && (o = $e(), Xe(o), Je(!1), c = !0);
			for (var l = /* @__PURE__ */ new Set(), f = k, v = Jn(), y = 0; y < e; y += 1) {
				w && Ye.nodeType === 8 && Ye.data === "]" && (o = Ye, c = !0, Je(!1));
				var b = p[y], x = r(b, y), ee = h ? null : s.get(x);
				ee ? (ee.v && Mn(ee.v, b), ee.i && Mn(ee.i, y), v && f.unskip_effect(ee.e)) : (ee = Qi(s, h ? o : Ji ??= Wn(), b, x, y, i, t, n), h || (ee.e.f |= C), s.set(x, ee)), l.add(x);
			}
			if (e === 0 && a && !u && (h ? u = yr(() => a(o)) : (u = yr(() => a(Ji ??= Wn())), u.f |= C)), e > l.size && ke("", "", ""), w && e > 0 && Xe($e()), !h) if (m.set(f, l), v) {
				for (let [e, t] of s) l.has(e) || f.skip_effect(t.e);
				f.oncommit(g), f.ondiscard(_);
			} else g(f);
			c && Je(!0), I(d);
		}),
		flags: t,
		items: s,
		pending: m,
		outrogroups: null,
		fallback: u
	};
	h = !1, w && (o = Ye);
}
function Xi(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Zi(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, c = Xi(e.effect.first), l, u = null, d, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (d ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (Or(_), a && (_.nodes?.a?.unfix(), (d ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= C, _ === c) $i(_, null, n);
		else {
			var y = u ? u.next : c;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), ea(e, u, _), ea(e, _, y), $i(_, y, n), u = _, p = [], m = [], c = Xi(u.next);
			continue;
		}
		if (_ !== c) {
			if (l !== void 0 && l.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					u = b.prev;
					var ee = p[0], te = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) $i(p[x], b, n);
					for (x = 0; x < m.length; x += 1) l.delete(m[x]);
					ea(e, ee.prev, te.next), ea(e, u, ee), ea(e, te, b), c = b, u = te, --v, p = [], m = [];
				} else l.delete(_), $i(_, c, n), ea(e, _.prev, _.next), ea(e, _, u === null ? e.effect.first : u.next), ea(e, u, _), u = _;
				continue;
			}
			for (p = [], m = []; c !== null && c !== _;) (l ??= /* @__PURE__ */ new Set()).add(c), m.push(c), c = Xi(c.next);
			if (c === null) continue;
		}
		_.f & 33554432 || p.push(_), u = _, c = Xi(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (qi(e, f(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var S = [];
		if (l !== void 0) for (_ of l) _.f & 8192 || S.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && S.push(c), c = Xi(c.next);
		var ne = S.length;
		if (ne > 0) {
			var re = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < ne; v += 1) S[v].nodes?.a?.measure();
				for (v = 0; v < ne; v += 1) S[v].nodes?.a?.fix();
			}
			Ki(e, S, re);
		}
	}
	a && xt(() => {
		if (d !== void 0) for (_ of d) _.nodes?.a?.apply();
	});
}
function Qi(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? An(n) : /* @__PURE__ */ jn(n, !1, !1) : null, l = o & 2 ? An(i) : null;
	return {
		v: c,
		i: l,
		e: yr(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function $i(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Kn(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function ea(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function H(e, t, ...n) {
	var r = new Hi(e);
	_r(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, ue);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
function ta(e, t, n) {
	var r;
	w && (r = Ye, Ze());
	var i = new Hi(e);
	_r(() => {
		var e = t() ?? null;
		if (w && et(r) === "[" != (e !== null)) {
			var a = $e();
			Xe(a), i.anchor = a, Je(!1), i.ensure(e, e && ((t) => n(t, e))), Je(!0);
			return;
		}
		i.ensure(e, e && ((t) => n(t, e)));
	}, ue);
}
//#endregion
//#region node_modules/svelte/src/internal/client/timing.js
var na = () => performance.now(), ra = {
	tick: (e) => requestAnimationFrame(e),
	now: () => na(),
	tasks: /* @__PURE__ */ new Set()
};
//#endregion
//#region node_modules/svelte/src/internal/client/loop.js
function ia() {
	let e = ra.now();
	ra.tasks.forEach((t) => {
		t.c(e) || (ra.tasks.delete(t), t.f());
	}), ra.tasks.size !== 0 && ra.tick(ia);
}
function aa(e) {
	let t;
	return ra.tasks.size === 0 && ra.tick(ia), {
		promise: new Promise((n) => {
			ra.tasks.add(t = {
				c: e,
				f: n
			});
		}),
		abort() {
			ra.tasks.delete(t);
		}
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/transitions.js
function oa(e, t) {
	tr(() => {
		e.dispatchEvent(new CustomEvent(t));
	});
}
function sa(e) {
	if (e === "float") return "cssFloat";
	if (e === "offset") return "cssOffset";
	if (e.startsWith("--")) return e;
	let t = e.split("-");
	return t.length === 1 ? t[0] : t[0] + t.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
function ca(e) {
	let t = {}, n = e.split(";");
	for (let e of n) {
		let [n, r] = e.split(":");
		if (!n || r === void 0) break;
		let i = sa(n.trim());
		t[i] = r.trim();
	}
	return t;
}
var la = (e) => e, ua = null;
function da(e, t, n) {
	var r = (ua ?? F).nodes, i, a, o, s = null;
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
				o = pa(this.element, e, void 0, 1, () => {}, () => {
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
function fa(e, t, n, r) {
	var i = (e & 1) != 0, a = (e & 2) != 0, o = i && a, s = (e & 4) != 0, c = o ? "both" : i ? "in" : "out", l, u = t.inert, d = t.style.overflow, f, p;
	function m() {
		return tr(() => l ??= n()(t, r?.() ?? {}, { direction: c }));
	}
	var h = {
		is_global: s,
		in() {
			if (t.inert = u, !i) {
				p?.abort(), p?.reset?.();
				return;
			}
			a || f?.abort(), f = pa(t, m(), p, 1, () => {
				oa(t, "introstart");
			}, () => {
				oa(t, "introend"), f?.abort(), f = l = void 0, t.style.overflow = d;
			});
		},
		out(e) {
			if (!a) {
				e?.(), l = void 0;
				return;
			}
			t.inert = !0, p = pa(t, m(), f, 0, () => {
				oa(t, "outrostart");
			}, () => {
				oa(t, "outroend"), e?.();
			});
		},
		stop: () => {
			f?.abort(), p?.abort();
		}
	}, g = F;
	if ((g.nodes.t ??= []).push(h), i && Fi) {
		var _ = s;
		if (!_) {
			for (var v = g.parent; v && v.f & 65536;) for (; (v = v.parent) && !(v.f & 16););
			_ = !v || (v.f & 32768) != 0;
		}
		_ && pr(() => {
			L(() => h.in());
		});
	}
}
function pa(e, t, n, r, i, a) {
	var o = r === 1;
	if (b(t)) {
		var s, c = !1;
		return xt(() => {
			c || (s = pa(e, t({ direction: o ? "in" : "out" }), n, r, i, a));
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
	let { delay: l = 0, css: u, tick: d, easing: f = la } = t;
	var p = [];
	if (o && n === void 0 && (d && d(0, 1), u)) {
		var m = ca(u(0, 1));
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
				var v = o + s * f(_ / m), y = ca(u(v, 1 - v));
				l.push(y), p ||= y.overflow === "hidden";
			}
			p && (e.style.overflow = "hidden"), h = () => {
				var e = g.currentTime;
				return o + s * f(e / c);
			}, d && aa(() => {
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
function ma(e, t) {
	var n = void 0, r;
	vr(() => {
		n !== (n = t()) && (r &&= (Cr(r), null), n && (r = yr(() => {
			pr(() => n(e));
		})));
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function ha(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = ha(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function ga() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = ha(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function _a(e) {
	return typeof e == "object" ? ga(e) : e ?? "";
}
var va = [..." 	\n\r\f\xA0\v﻿"];
function ya(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || va.includes(r[o - 1])) && (s === r.length || va.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function ba(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function xa(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Sa(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(xa)), i && c.push(...Object.keys(i).map(xa));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = xa(e.substring(l, u).trim());
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
		return r && (n += ba(r)), i && (n += ba(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Ca(e, t, n, r, i, a) {
	var o = e[xe];
	if (w || o !== n || o === void 0) {
		var s = ya(n, r, a);
		(!w || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[xe] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function wa(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function Ta(e, t, n, r) {
	var i = e[Se];
	if (w || i !== t) {
		var a = Sa(t, r);
		(!w || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[Se] = t;
	} else r && (Array.isArray(r) ? (wa(e, n?.[0], r[0]), wa(e, n?.[1], r[1], "important")) : wa(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function Ea(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!l(t)) return Ke();
		for (var r of e.options) r.selected = t.includes(Oa(r));
		return;
	}
	for (r of e.options) if (Rn(Oa(r), t)) {
		r.selected = !0;
		return;
	}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function Da(e) {
	var t = new MutationObserver(() => {
		Ea(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), sr(() => {
		t.disconnect();
	});
}
function Oa(e) {
	return "__value" in e ? e.__value : e.value;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var ka = Symbol("class"), Aa = Symbol("style"), ja = Symbol("is custom element"), Ma = Symbol("is html"), Na = Ee ? "link" : "LINK", Pa = Ee ? "input" : "INPUT", Fa = Ee ? "option" : "OPTION", Ia = Ee ? "select" : "SELECT";
function La(e) {
	if (w) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					za(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					za(e, "checked", null), e.checked = r;
				}
			}
		};
		e[we] = n, xt(n), er();
	}
}
function Ra(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function za(e, t, n, r) {
	var i = Va(e);
	w && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Na) || i[t] !== (i[t] = n) && (t === "loading" && (e[ye] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ua(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Ba(e, t, n, r, i = !1, a = !1) {
	if (w && i && e.nodeName === Pa) {
		var o = e;
		(o.type === "checkbox" ? "defaultChecked" : "defaultValue") in n || La(o);
	}
	var s = Va(e), c = s[ja], l = !s[Ma];
	let u = w && c;
	u && Je(!1);
	var d = t || {}, f = e.nodeName === Fa;
	for (var p in t) p in n || (n[p] = null);
	n.class ? n.class = _a(n.class) : (r || n[ka]) && (n.class = null), n[Aa] && (n.style ??= null);
	var m = Ua(e);
	if (e.nodeName === Pa && "type" in n && ("value" in n || "__value" in n)) {
		var h = n.type;
		(h !== d.type || h === void 0 && e.hasAttribute("type")) && (d.type = h, za(e, "type", h, a));
	}
	for (let i in n) {
		let o = n[i];
		if (f && i === "value" && o == null) {
			e.value = e.__value = "", d[i] = o;
			continue;
		}
		if (i === "class") {
			Ca(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", o, r, t?.[ka], n[ka]), d[i] = o, d[ka] = n[ka];
			continue;
		}
		if (i === "style") {
			Ta(e, o, t?.[Aa], n[Aa]), d[i] = o, d[Aa] = n[Aa];
			continue;
		}
		var g = d[i];
		if (!(o === g && !(o === void 0 && e.hasAttribute(i)))) {
			d[i] = o;
			var _ = i[0] + i[1];
			if (_ !== "$$") if (_ === "on") {
				let t = {}, n = "$$" + i, r = i.slice(2);
				var v = ui(r);
				if (ci(r) && (r = r.slice(0, -7), t.capture = !0), !v && g) {
					if (o != null) continue;
					e.removeEventListener(r, d[n], t), d[n] = null;
				}
				if (v) Ci(r, e, o), wi([r]);
				else if (o != null) {
					function a(e) {
						d[i].call(this, e);
					}
					d[n] = bi(r, e, a, t);
				}
			} else if (i === "style") za(e, i, o);
			else if (i === "autofocus") Zn(e, !!o);
			else if (!c && (i === "__value" || i === "value" && o != null)) e.value = e.__value = o;
			else if (i === "selected" && f) Ra(e, o);
			else {
				var y = i;
				l || (y = pi(y));
				var b = y === "defaultValue" || y === "defaultChecked";
				if (o == null && !c && !b) if (s[i] = null, y === "value" || y === "checked") {
					let n = e, r = t === void 0;
					if (y === "value") {
						let e = n.defaultValue;
						n.removeAttribute(y), n.defaultValue = e, n.value = n.__value = r ? e : null;
					} else {
						let e = n.defaultChecked;
						n.removeAttribute(y), n.defaultChecked = e, n.checked = r ? e : !1;
					}
				} else e.removeAttribute(i);
				else b || m.includes(y) && (c || typeof o != "string") ? (e[y] = o, y in s && (s[y] = Ve)) : typeof o != "function" && za(e, y, o, a);
			}
		}
	}
	return u && Je(!0), d;
}
function U(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	Kt(i, n, r, (n) => {
		var r = void 0, i = {}, c = e.nodeName === Ia, l = !1;
		if (vr(() => {
			var u = t(...n.map(I)), d = Ba(e, r, u, a, o, s);
			l && c && "value" in u && Ea(e, u.value);
			for (let e of Object.getOwnPropertySymbols(i)) u[e] || Cr(i[e]);
			for (let t of Object.getOwnPropertySymbols(u)) {
				var f = u[t];
				t.description === "@attach" && (!r || f !== r[t]) && (i[t] && Cr(i[t]), i[t] = yr(() => ma(e, () => f))), d[t] = f;
			}
			r = d;
		}), c) {
			var u = e;
			pr(() => {
				Ea(u, r.value, !0), Da(u);
			});
		}
		l = !0;
	});
}
function Va(e) {
	return e[be] ??= {
		[ja]: e.nodeName.includes("-"),
		[Ma]: e.namespaceURI === He
	};
}
var Ha = /* @__PURE__ */ new Map();
function Ua(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Ha.get(t);
	if (n) return n;
	Ha.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = h(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = v(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function Wa(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	nr(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = Ga(e) ? Ka(a) : a, n(a), k !== null && r.add(k), await ni(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (w && e.defaultValue !== e.value || L(t) == null && e.value) && (n(Ga(e) ? Ka(e.value) : e.value), k !== null && r.add(k)), hr(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = it ? cn : k;
			if (r.has(i)) return;
		}
		Ga(e) && n === Ka(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function Ga(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function Ka(e) {
	return e === "" ? null : +e;
}
function qa(e, t, n = t) {
	nr(e, "change", () => {
		n(e.files);
	}), w && e.files && n(e.files), hr(() => {
		e.files = t();
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Ja(e, t) {
	return e === t || e?.[_e] === t;
}
function Ya(e = {}, t, n, r) {
	var i = ut.r, a = F;
	return pr(() => {
		var o, s;
		return hr(() => {
			o = s, s = r?.() || [], L(() => {
				Ja(n(...s), e) || (t(e, ...s), o && Ja(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Ja(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Xa(e = !1) {
	let t = ut, n = t.l.u;
	if (!n) return;
	let r = () => ai(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Xt(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => I(i);
	}
	n.b.length && ur(() => {
		Za(t, r), te(n.b);
	}), cr(() => {
		let e = L(() => n.m.map(ee));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && cr(() => {
		Za(t, r), te(n.a);
	});
}
function Za(e, t) {
	if (e.l.s) for (let t of e.l.s) I(t);
	t();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
var Qa = {
	get(e, t) {
		if (!e.exclude.has(t)) return e.props[t];
	},
	set(e, t) {
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		if (!e.exclude.has(t) && t in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[t]
		};
	},
	has(e, t) {
		return e.exclude.has(t) ? !1 : t in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((t) => !e.exclude.has(t));
	}
};
/*#__NO_SIDE_EFFECTS__*/
function W(e, t, n) {
	return new Proxy({
		props: e,
		exclude: t
	}, Qa);
}
var $a = {
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
function G(...e) {
	return new Proxy({ props: e }, $a);
}
function K(e, t, n, r) {
	var i = !at || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ Xt(r), I(l)) : (c && (c = !1, s = o ? L(r) : r), s);
	let d;
	if (a) {
		var f = _e in e || ve in e;
		d = m(e, t)?.set ?? (f && t in e ? (n) => e[t] = n : void 0);
	}
	var p, h = !1;
	a ? [p, h] = Vt(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = u(), d && (i && Pe(t), d(p)));
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
	var v = !1, y = (n & 1 ? Xt : $t)(() => (v = !1, g()));
	a && I(y);
	var b = F;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? I(y) : i && a ? In(e) : e;
			return j(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return Nr && v || b.f & 16384 ? y.v : I(y);
	});
}
function eo(e) {
	ut === null && De("onMount"), at && ut.l !== null ? to(ut).m.push(e) : cr(() => {
		let t = L(e);
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
}), po = window.socket, mo = {
	ADMIN: 3,
	ANON: -1,
	GUEST: 0,
	MODERATOR: 2,
	SITERADMIN: 255,
	USER: 1
}, ho = { userlist: [] }, go = (e) => {
	let { subscribe: t, set: n, update: r } = Mt({
		...ho,
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
}, _o = (e) => po.on("addUser", e), vo = (e) => po.on("userLeave", e), yo = () => Array.from(document.body.querySelectorAll("#userlist .userlist_item")).map((e) => $(e)).map((e) => ({
	meta: {
		afk: e.data("afk") || !1,
		muted: e.data("meta") && e.data("meta").muted || !1
	},
	name: e.data("name") || "",
	profile: e.data("profile") || {
		image: "",
		text: ""
	},
	rank: e.data("rank") || mo.ANON
})), bo = go(), xo = async () => new Promise((e, t) => {
	po.once("playlist", e), po.once("errorMsg", t), po.emit("requestPlaylist");
}), So = (e) => po.on("queue", e), Co = (e) => po.on("delete", e), wo = (e) => po.on("setCurrent", e), To = (e) => po.on("changeMedia", e), Eo = (e) => po.off("changeMedia", e), Do = (e) => po.on("voteskip", e), Oo = (e) => po.off("voteskip", e), ko = () => po.emit("voteskip"), Ao = async (e) => new Promise((t, n) => {
	po.once("queue", t), po.once("queueFail", n), po.emit("queue", e);
}), jo = { version: "" }, Mo = ((e) => {
	let { subscribe: t, set: n, update: r } = Mt({
		...jo,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetVersion: () => r((e) => ({
			...e,
			version: jo.version
		})),
		updateVersion: (e) => r((t) => ({
			...t,
			version: e
		}))
	};
})(), No = {
	leader: !1,
	logged_in: !1,
	name: "",
	profile: {
		image: "",
		text: ""
	},
	rank: -1
}, Po = ((e) => {
	let { subscribe: t, set: n, update: r } = Mt({
		...No,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetLoggedIn: () => r((e) => ({
			...e,
			logged_in: No.logged_in
		})),
		resetName: () => r((e) => ({
			...e,
			name: No.name
		})),
		resetRank: () => r((e) => ({
			...e,
			rank: No.rank
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
})(), Fo = { csrf: "" }, Io = ((e) => {
	let { subscribe: t, set: n, update: r } = Mt({
		...Fo,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetCSRF: () => r((e) => ({
			...e,
			csrf: Fo.csrf
		})),
		updateCSRF: (e) => r((t) => ({
			...t,
			csrf: e
		}))
	};
})(), Lo = {
	currentUid: -1,
	playlist: []
}, Ro = ((e) => {
	let { subscribe: t, set: n, update: r } = Mt({
		...Lo,
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
		resetPlaylist: () => n(Lo),
		setCurrent: (e) => r((t) => ({
			...t,
			currentUid: e
		})),
		setPlaylist: (e) => r((t) => ({
			...t,
			playlist: e
		}))
	};
})(), zo = { connected: !0 }, Bo = ((e) => {
	let { subscribe: t, set: n, update: r } = Mt({
		...zo,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		resetConnected: () => r((e) => ({
			...e,
			connected: zo.connected
		})),
		updateConnected: (e) => r((t) => ({
			...t,
			connected: e
		}))
	};
})(), Vo = {
	count: 0,
	need: 0
}, Ho = ((e) => {
	let { subscribe: t, set: n, update: r } = Mt({
		...Vo,
		...e
	});
	return {
		subscribe: t,
		init: (e) => n(e),
		setCount: (e) => r((t) => ({
			...t,
			count: e
		})),
		setNeed: (e) => r((t) => ({
			...t,
			need: e
		})),
		setVoteskip: (e, t) => r((n) => ({
			...n,
			count: e,
			need: t
		}))
	};
})(), Uo = () => (Po.init({ ...window.CLIENT }), Po.subscribe((e) => {
	window.CLIENT = e;
})), Wo = () => {
	let e = document.querySelector("input[name=\"_csrf\"]");
	if (!e) throw Error("CSRF element not found");
	let t = e.value;
	if (!t) throw Error("CSRF token not found");
	Io.init({ csrf: t });
}, Go = () => (Mo.init({ version: window.VERSION }), Mo.subscribe((e) => {
	window.VERSION = e.version;
})), Ko = () => {
	Bo.init(po), po.on("connect", () => Bo.updateConnected(po.connected)), po.on("disconnect", () => Bo.updateConnected(po.connected));
}, qo = () => {
	let e = yo();
	bo.init({ userlist: e }), _o(bo.addUser), vo(({ name: e }) => bo.removeUser(e));
}, Jo = async () => {
	try {
		let e = await xo(), t = window.PL_CURRENT;
		return Ro.init({
			currentUid: t,
			playlist: e
		}), So(({ after: e, item: t }) => Ro.addPlaylistItem(t, e)), Co(({ uid: e }) => Ro.removePlaylistItem(e)), wo(Ro.setCurrent), Ro.subscribe((e) => {
			window.PL_CURRENT = e.currentUid;
		});
	} catch (e) {
		let t = `Failed to get initial playlist: ${e}. Retrying in 60 seconds.`;
		return console.warn(t), alert(t), await new Promise((e) => setTimeout(e, 6e4)), await Jo();
	}
}, Yo = () => {
	Ho.init({
		count: 0,
		need: 0
	});
	let e = () => Ho.setCount(0), t = ({ count: e, need: t }) => Ho.setVoteskip(e, t);
	To(e), Do(t);
	let n = () => Eo(e), r = () => Oo(t);
	return () => {
		n(), r();
	};
}, Xo = async () => {
	let e = Uo(), t = Go();
	Wo(), Ko(), qo();
	let n = await Jo(), r = Yo();
	return () => {
		e(), t(), n(), r();
	};
};
//#endregion
//#region node_modules/svelte/src/internal/flags/legacy.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5"), ot();
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/is.js
function Zo(e) {
	return typeof e == "function";
}
function Qo(e) {
	return typeof e == "object" && !!e;
}
var $o = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function es(e) {
	return e == null || $o.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => es(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/box/box-extras.svelte.js
var ts = Symbol("box"), ns = Symbol("is-writable");
function q(e, t) {
	let n = /* @__PURE__ */ O(e);
	return t ? {
		[ts]: !0,
		[ns]: !0,
		get current() {
			return I(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[ts]: !0,
		get current() {
			return e();
		}
	};
}
function rs(e) {
	return Qo(e) && ts in e;
}
function is(e) {
	return rs(e) ? e : Zo(e) ? q(e) : as(e);
}
function as(e) {
	let t = /* @__PURE__ */ A(In(e));
	return {
		[ts]: !0,
		[ns]: !0,
		get current() {
			return I(t);
		},
		set current(e) {
			j(t, e, !0);
		}
	};
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
function os(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
//#endregion
//#region node_modules/inline-style-parser/esm/index.mjs
var ss = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, cs = /\n/g, ls = /^\s*/, us = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, ds = /^:\s*/, fs = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, ps = /^[;\s]*/, ms = /^\s+|\s+$/g, hs = "\n", gs = "/", _s = "*", vs = "", ys = "comment", bs = "declaration";
function xs(e, t) {
	if (typeof e != "string") throw TypeError("First argument must be a string");
	if (!e) return [];
	t ||= {};
	var n = 1, r = 1;
	function i(e) {
		var t = e.match(cs);
		t && (n += t.length);
		var i = e.lastIndexOf(hs);
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
		c(ls);
	}
	function u(e) {
		var t;
		for (e ||= []; t = d();) t !== !1 && e.push(t);
		return e;
	}
	function d() {
		var t = a();
		if (!(gs != e.charAt(0) || _s != e.charAt(1))) {
			for (var n = 2; vs != e.charAt(n) && (_s != e.charAt(n) || gs != e.charAt(n + 1));) ++n;
			if (n += 2, vs === e.charAt(n - 1)) return s("End of comment missing");
			var o = e.slice(2, n - 2);
			return r += 2, i(o), e = e.slice(n), r += 2, t({
				type: ys,
				comment: o
			});
		}
	}
	function f() {
		var e = a(), t = c(us);
		if (t) {
			if (d(), !c(ds)) return s("property missing ':'");
			var n = c(fs), r = e({
				type: bs,
				property: Ss(t[0].replace(ss, vs)),
				value: n ? Ss(n[0].replace(ss, vs)) : vs
			});
			return c(ps), r;
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
function Ss(e) {
	return e ? e.replace(ms, vs) : vs;
}
//#endregion
//#region node_modules/style-to-object/esm/index.mjs
function Cs(e, t) {
	let n = null;
	if (!e || typeof e != "string") return n;
	let r = xs(e), i = typeof t == "function";
	return r.forEach((e) => {
		if (e.type !== "declaration") return;
		let { property: r, value: a } = e;
		i ? t(r, a, e) : a && (n ||= {}, n[r] = a);
	}), n;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/strings.js
var ws = /\d/, Ts = [
	"-",
	"_",
	"/",
	"."
];
function Es(e = "") {
	if (!ws.test(e)) return e !== e.toLowerCase();
}
function Ds(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = Ts.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = Es(a);
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
function Os(e) {
	return e ? Ds(e).map((e) => As(e)).join("") : "";
}
function ks(e) {
	return js(Os(e || ""));
}
function As(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function js(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function Ms(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[Os(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[ks(e)] = n;
	}
	return Cs(e, n), t;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
function Ns(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function Ps(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var Fs = Ps(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function Is(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${Fs(t)}: ${e[t]};`).join("\n");
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/style.js
function Ls(e = {}) {
	return Is(e).replace("\n", " ");
}
var Rs = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/merge-props.js
function zs(e) {
	return Rs.has(e);
}
function Bs(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
				if (a && typeof o && zs(e)) t[e] = os(n, i);
				else if (a && o) t[e] = Ns(n, i);
				else if (e === "class") {
					let r = es(n), a = es(i);
					r && a ? t[e] = ga(n, i) : r ? t[e] = ga(n) : a && (t[e] = ga(i));
				} else if (e === "style") {
					let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
					if (r && a) t[e] = {
						...n,
						...i
					};
					else if (r && s) {
						let r = Ms(i);
						t[e] = {
							...n,
							...r
						};
					} else if (o && a) t[e] = {
						...Ms(n),
						...i
					};
					else if (o && s) {
						let r = Ms(n), a = Ms(i);
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
	return typeof t.style == "object" && (t.style = Ls(t.style).replaceAll("\n", " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t;
}
//#endregion
//#region node_modules/runed/dist/internal/configurable-globals.js
var Vs = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/runed/dist/internal/utils/dom.js
function Hs(e) {
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
var Us = class extends Map {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ A(0);
	#n = /* @__PURE__ */ A(0);
	#r = qr || -1;
	constructor(e) {
		if (super(), e) {
			for (var [t, n] of e) super.set(t, n);
			this.#n.v = super.size;
		}
	}
	#i(e) {
		return qr === this.#r ? /* @__PURE__ */ A(e) : An(e);
	}
	has(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) if (super.has(e)) n = this.#i(0), t.set(e, n);
		else return I(this.#t), !1;
		return I(n), !0;
	}
	forEach(e, t) {
		this.#a(), super.forEach(e, t);
	}
	get(e) {
		var t = this.#e, n = t.get(e);
		if (n === void 0) if (super.has(e)) n = this.#i(0), t.set(e, n);
		else {
			I(this.#t);
			return;
		}
		return I(n), super.get(e);
	}
	set(e, t) {
		var n = this.#e, r = n.get(e), i = super.get(e), a = super.set(e, t), o = this.#t;
		if (r === void 0) r = this.#i(0), n.set(e, r), j(this.#n, super.size), Pn(o);
		else if (i !== t) {
			Pn(r);
			var s = o.reactions === null ? null : new Set(o.reactions);
			(s === null || !r.reactions?.every((e) => s.has(e))) && Pn(o);
		}
		return a;
	}
	delete(e) {
		var t = this.#e, n = t.get(e), r = super.delete(e);
		return n !== void 0 && (t.delete(e), j(n, -1)), r && (j(this.#n, super.size), Pn(this.#t)), r;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#e;
			j(this.#n, 0);
			for (var t of e.values()) j(t, -1);
			Pn(this.#t), e.clear();
		}
	}
	#a() {
		I(this.#t);
		var e = this.#e;
		if (this.#n.v !== e.size) {
			for (var t of super.keys()) if (!e.has(t)) {
				var n = this.#i(0);
				e.set(t, n);
			}
		}
		for ([, n] of this.#e) I(n);
	}
	keys() {
		return I(this.#t), super.keys();
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
		return I(this.#n), super.size;
	}
}, Ws = class {
	#e;
	#t;
	constructor(e, t) {
		this.#e = e, this.#t = Ht(t);
	}
	get current() {
		return this.#t(), this.#e();
	}
}, Gs = /\(.+\)/, Ks = new Set([
	"all",
	"print",
	"screen",
	"and",
	"or",
	"not",
	"only"
]), qs = class extends Ws {
	constructor(e, t) {
		let n = Gs.test(e) || e.split(/[\s,]+/).some((e) => Ks.has(e.trim())) ? e : `(${e})`, r = window.matchMedia(n);
		super(() => r.matches, (e) => xi(r, "change", e));
	}
};
new class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: t = Vs, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = Ht((e) => {
			let n = xi(t, "focusin", e), r = xi(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? Hs(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/runed/dist/internal/utils/is.js
function Js(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/runed/dist/utilities/context/context.js
var Ys = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return mt(this.#t);
	}
	get() {
		let e = ft(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = ft(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return pt(this.#t, e);
	}
};
//#endregion
//#region node_modules/runed/dist/utilities/watch/watch.svelte.js
function Xs(e, t) {
	switch (e) {
		case "post":
			cr(t);
			break;
		case "pre":
			ur(t);
			break;
	}
}
function Zs(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	Xs(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = L(() => n(t, o));
		return o = t, r;
	});
}
function Qs(e, t, n) {
	let r = dr(() => {
		let i = !1;
		Zs(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	cr(() => r);
}
function $s(e, t, n) {
	Zs(e, "post", t, n);
}
function ec(e, t, n) {
	Zs(e, "pre", t, n);
}
$s.pre = ec;
function tc(e, t) {
	Qs(e, "post", t);
}
function nc(e, t) {
	Qs(e, "pre", t);
}
tc.pre = nc;
//#endregion
//#region node_modules/runed/dist/internal/utils/get.js
function rc(e) {
	return Js(e) ? e() : e;
}
//#endregion
//#region node_modules/runed/dist/utilities/element-size/element-size.svelte.js
var ic = class {
	#e = {
		width: 0,
		height: 0
	};
	#t = !1;
	#n;
	#r;
	#i;
	#a = /* @__PURE__ */ O(() => (I(this.#s)?.(), this.getSize().width));
	#o = /* @__PURE__ */ O(() => (I(this.#s)?.(), this.getSize().height));
	#s = /* @__PURE__ */ O(() => {
		let e = rc(this.#r);
		if (e) return Ht((t) => {
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
		this.#i = t.window ?? Vs, this.#n = t, this.#r = e, this.#e = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		let e = rc(this.#r);
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
		return I(this.#s)?.(), this.getSize();
	}
	get width() {
		return I(this.#a);
	}
	get height() {
		return I(this.#o);
	}
};
//#endregion
//#region node_modules/runed/dist/utilities/resource/resource.svelte.js
function ac(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function oc(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function sc(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ A(In(o)), u = /* @__PURE__ */ A(!1), d = /* @__PURE__ */ A(void 0), f = /* @__PURE__ */ A(In([])), p = () => {
		I(f).forEach((e) => e()), j(f, [], !0);
	}, m = (e) => {
		j(f, [...I(f), e], !0);
	}, h = async (e, n, r = !1) => {
		try {
			j(u, !0), j(d, void 0), p();
			let i = new AbortController();
			m(() => i.abort());
			let a = await t(e, n, {
				data: I(l),
				refetching: r,
				onCleanup: m,
				signal: i.signal
			});
			return j(l, a, !0), a;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || j(d, e, !0);
			return;
		} finally {
			j(u, !1);
		}
	}, g = s ? ac(h, s) : c ? oc(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
	return r((t, n) => {
		a && v || (v = t, g(Array.isArray(e) ? t : t[0], Array.isArray(e) ? n : n?.[0]));
	}, { lazy: i }), {
		get current() {
			return I(l);
		},
		get loading() {
			return I(u);
		},
		get error() {
			return I(d);
		},
		mutate: (e) => {
			j(l, e, !0);
		},
		refetch: (t) => {
			let n = _.map((e) => e());
			return g(Array.isArray(e) ? n : n[0], Array.isArray(e) ? n : n[0], t ?? !0);
		}
	};
}
function cc(e, t, n) {
	return sc(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		$s(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function lc(e, t, n) {
	return sc(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		$s.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
cc.pre = lc;
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/on-destroy-effect.svelte.js
function uc(e) {
	cr(() => () => {
		e();
	});
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/on-mount-effect.svelte.js
function dc(e) {
	cr(() => L(() => e()));
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-sleep.js
function fc(e, t) {
	return setTimeout(t, e);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-tick.js
function pc(e) {
	ni().then(e);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/dom.js
var mc = 1, hc = 9, gc = 11;
function _c(e) {
	return Qo(e) && e.nodeType === mc && typeof e.nodeName == "string";
}
function vc(e) {
	return Qo(e) && e.nodeType === hc;
}
function yc(e) {
	return Qo(e) && e.constructor?.name === "VisualViewport";
}
function bc(e) {
	return Qo(e) && e.nodeType !== void 0;
}
function xc(e) {
	return bc(e) && e.nodeType === gc && "host" in e;
}
function Sc(e, t) {
	if (!e || !t || !_c(e) || !_c(t)) return !1;
	let n = t.getRootNode?.();
	if (e === t || e.contains(t)) return !0;
	if (n && xc(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function Cc(e) {
	return vc(e) ? e : yc(e) ? e.document : e?.ownerDocument ?? document;
}
function wc(e) {
	return xc(e) ? wc(e.host) : vc(e) ? e.defaultView ?? window : _c(e) ? e.ownerDocument?.defaultView ?? window : window;
}
function Tc(e) {
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
var Ec = class {
	element;
	#e = /* @__PURE__ */ O(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return I(this.#e);
	}
	set root(e) {
		j(this.#e, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = q(e) : this.element = e;
	}
	getDocument = () => Cc(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => Tc(this.root);
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
function Dc(e, t) {
	return { [si()]: (n) => rs(e) ? (e.current = n, L(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), L(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
//#endregion
//#region node_modules/bits-ui/dist/internal/attrs.js
function Oc(e) {
	return e ? "true" : "false";
}
function kc(e) {
	return e ? "true" : void 0;
}
function Ac(e) {
	return e ? "" : void 0;
}
function jc(e) {
	return e ? !0 : void 0;
}
function Mc(e) {
	return e ? "open" : "closed";
}
function Nc(e) {
	return e === "starting" ? { "data-starting-style": "" } : e === "ending" ? { "data-ending-style": "" } : {};
}
var Pc = class {
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
function Fc(e) {
	let t = new Pc(e);
	return {
		...t.attrs,
		selector: t.selector,
		getAttr: t.getAttr
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/is.js
var Ic = typeof document < "u", Lc = Rc();
function Rc() {
	return Ic && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function zc(e) {
	return e instanceof HTMLElement;
}
function Bc(e) {
	return e instanceof Element;
}
function Vc(e) {
	return e instanceof Element || e instanceof SVGElement;
}
function Hc(e) {
	return e.pointerType === "touch";
}
function Uc(e) {
	return e.matches(":focus-visible");
}
function Wc(e) {
	return e !== null;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/animations-complete.js
var Gc = class {
	#e;
	#t = null;
	#n = null;
	#r = 0;
	constructor(e) {
		this.#e = e, uc(() => this.#i());
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
		this.#e.afterTick ? pc(t) : t();
	}
}, Kc = class {
	#e;
	#t;
	#n;
	#r = /* @__PURE__ */ A(!1);
	#i = /* @__PURE__ */ A(void 0);
	#a = !1;
	#o = null;
	constructor(e) {
		this.#e = e, j(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new Gc({
			ref: this.#e.ref,
			afterTick: this.#e.open
		}), uc(() => this.#s()), $s(() => this.#e.open.current, (e) => {
			if (!this.#a) {
				this.#a = !0;
				return;
			}
			if (this.#s(), !e && this.#e.shouldSkipExitAnimation?.()) {
				j(this.#r, !1), j(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			if (e && j(this.#r, !0), j(this.#i, e ? "starting" : "ending", !0), e && (this.#o = window.requestAnimationFrame(() => {
				this.#o = null, this.#e.open.current && j(this.#i, void 0);
			})), !this.#t) {
				e || j(this.#r, !1), j(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			this.#n.run(() => {
				e === this.#e.open.current && (this.#e.open.current || j(this.#r, !1), j(this.#i, void 0), this.#e.onComplete?.());
			});
		});
	}
	get shouldRender() {
		return I(this.#r);
	}
	get transitionStatus() {
		return I(this.#i);
	}
	#s() {
		this.#o !== null && (window.cancelAnimationFrame(this.#o), this.#o = null);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/noop.js
function qc() {}
//#endregion
//#region node_modules/bits-ui/dist/internal/create-id.js
function Jc(e, t) {
	return t === void 0 ? `bits-${e}` : `bits-${e}-${t}`;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/dialog/dialog.svelte.js
var Yc = Fc({
	component: "dialog",
	parts: [
		"content",
		"trigger",
		"overlay",
		"title",
		"description",
		"close",
		"cancel",
		"action"
	]
}), Xc = new Ys("Dialog.Root | AlertDialog.Root"), Zc = class e {
	static create(t) {
		let n = Xc.getOr(null);
		return Xc.set(new e(t, n));
	}
	opts;
	#e = /* @__PURE__ */ A(null);
	get triggerNode() {
		return I(this.#e);
	}
	set triggerNode(e) {
		j(this.#e, e, !0);
	}
	#t = /* @__PURE__ */ A(null);
	get contentNode() {
		return I(this.#t);
	}
	set contentNode(e) {
		j(this.#t, e, !0);
	}
	#n = /* @__PURE__ */ A(null);
	get overlayNode() {
		return I(this.#n);
	}
	set overlayNode(e) {
		j(this.#n, e, !0);
	}
	#r = /* @__PURE__ */ A(null);
	get descriptionNode() {
		return I(this.#r);
	}
	set descriptionNode(e) {
		j(this.#r, e, !0);
	}
	#i = /* @__PURE__ */ A(void 0);
	get contentId() {
		return I(this.#i);
	}
	set contentId(e) {
		j(this.#i, e, !0);
	}
	#a = /* @__PURE__ */ A(void 0);
	get titleId() {
		return I(this.#a);
	}
	set titleId(e) {
		j(this.#a, e, !0);
	}
	#o = /* @__PURE__ */ A(void 0);
	get triggerId() {
		return I(this.#o);
	}
	set triggerId(e) {
		j(this.#o, e, !0);
	}
	#s = /* @__PURE__ */ A(void 0);
	get descriptionId() {
		return I(this.#s);
	}
	set descriptionId(e) {
		j(this.#s, e, !0);
	}
	#c = /* @__PURE__ */ A(null);
	get cancelNode() {
		return I(this.#c);
	}
	set cancelNode(e) {
		j(this.#c, e, !0);
	}
	#l = /* @__PURE__ */ A(0);
	get nestedOpenCount() {
		return I(this.#l);
	}
	set nestedOpenCount(e) {
		j(this.#l, e, !0);
	}
	depth;
	parent;
	contentPresence;
	overlayPresence;
	constructor(e, t) {
		this.opts = e, this.parent = t, this.depth = t ? t.depth + 1 : 0, this.handleOpen = this.handleOpen.bind(this), this.handleClose = this.handleClose.bind(this), this.contentPresence = new Kc({
			ref: q(() => this.contentNode),
			open: this.opts.open,
			enabled: !0,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		}), this.overlayPresence = new Kc({
			ref: q(() => this.overlayNode),
			open: this.opts.open,
			enabled: !0
		}), $s(() => this.opts.open.current, (e) => {
			this.parent && (e ? this.parent.incrementNested() : this.parent.decrementNested());
		}, { lazy: !0 }), uc(() => {
			this.opts.open.current && this.parent?.decrementNested();
		});
	}
	handleOpen() {
		this.opts.open.current || (this.opts.open.current = !0);
	}
	handleClose() {
		this.opts.open.current && (this.opts.open.current = !1);
	}
	getBitsAttr = (e) => Yc.getAttr(e, this.opts.variant.current);
	incrementNested() {
		this.nestedOpenCount++, this.parent?.incrementNested();
	}
	decrementNested() {
		this.nestedOpenCount !== 0 && (this.nestedOpenCount--, this.parent?.decrementNested());
	}
	#u = /* @__PURE__ */ O(() => ({ "data-state": Mc(this.opts.open.current) }));
	get sharedProps() {
		return I(this.#u);
	}
	set sharedProps(e) {
		j(this.#u, e);
	}
}, Qc = class e {
	static create(t) {
		return new e(t, Xc.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Dc(this.opts.ref, (e) => {
			this.root.triggerNode = e, this.root.triggerId = e?.id;
		}), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
	}
	onclick(e) {
		this.opts.disabled.current || e.button > 0 || this.root.handleOpen();
	}
	onkeydown(e) {
		this.opts.disabled.current || (e.key === " " || e.key === "Enter") && (e.preventDefault(), this.root.handleOpen());
	}
	#e = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		"aria-haspopup": "dialog",
		"aria-expanded": Oc(this.root.opts.open.current),
		"aria-controls": this.root.contentId,
		[this.root.getBitsAttr("trigger")]: "",
		onkeydown: this.onkeydown,
		onclick: this.onclick,
		disabled: this.opts.disabled.current ? !0 : void 0,
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return I(this.#e);
	}
	set props(e) {
		j(this.#e, e);
	}
}, $c = class e {
	static create(t) {
		return new e(t, Xc.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Dc(this.opts.ref), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
	}
	onclick(e) {
		this.opts.disabled.current || e.button > 0 || this.root.handleClose();
	}
	onkeydown(e) {
		this.opts.disabled.current || (e.key === " " || e.key === "Enter") && (e.preventDefault(), this.root.handleClose());
	}
	#e = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		[this.root.getBitsAttr(this.opts.variant.current)]: "",
		onclick: this.onclick,
		onkeydown: this.onkeydown,
		disabled: this.opts.disabled.current ? !0 : void 0,
		tabindex: 0,
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return I(this.#e);
	}
	set props(e) {
		j(this.#e, e);
	}
}, el = class e {
	static create(t) {
		return new e(t, Xc.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.root.titleId = this.opts.id.current, this.attachment = Dc(this.opts.ref), $s.pre(() => this.opts.id.current, (e) => {
			this.root.titleId = e;
		});
	}
	#e = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		role: "heading",
		"aria-level": this.opts.level.current,
		[this.root.getBitsAttr("title")]: "",
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return I(this.#e);
	}
	set props(e) {
		j(this.#e, e);
	}
}, tl = class e {
	static create(t) {
		return new e(t, Xc.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.root.descriptionId = this.opts.id.current, this.attachment = Dc(this.opts.ref, (e) => {
			this.root.descriptionNode = e;
		}), $s.pre(() => this.opts.id.current, (e) => {
			this.root.descriptionId = e;
		});
	}
	#e = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		[this.root.getBitsAttr("description")]: "",
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return I(this.#e);
	}
	set props(e) {
		j(this.#e, e);
	}
}, nl = class e {
	static create(t) {
		return new e(t, Xc.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Dc(this.opts.ref, (e) => {
			this.root.contentNode = e, this.root.contentId = e?.id;
		});
	}
	#e = /* @__PURE__ */ O(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return I(this.#e);
	}
	set snippetProps(e) {
		j(this.#e, e);
	}
	#t = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		role: this.root.opts.variant.current === "alert-dialog" ? "alertdialog" : "dialog",
		"aria-modal": "true",
		"aria-describedby": this.root.descriptionId,
		"aria-labelledby": this.root.titleId,
		[this.root.getBitsAttr("content")]: "",
		style: {
			pointerEvents: "auto",
			outline: this.root.opts.variant.current === "alert-dialog" ? "none" : void 0,
			"--bits-dialog-depth": this.root.depth,
			"--bits-dialog-nested-count": this.root.nestedOpenCount,
			contain: "layout style"
		},
		tabindex: this.root.opts.variant.current === "alert-dialog" ? -1 : void 0,
		"data-nested-open": Ac(this.root.nestedOpenCount > 0),
		"data-nested": Ac(this.root.parent !== null),
		...Nc(this.root.contentPresence.transitionStatus),
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return I(this.#t);
	}
	set props(e) {
		j(this.#t, e);
	}
	get shouldRender() {
		return this.root.contentPresence.shouldRender;
	}
}, rl = class e {
	static create(t) {
		return new e(t, Xc.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Dc(this.opts.ref, (e) => this.root.overlayNode = e);
	}
	#e = /* @__PURE__ */ O(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return I(this.#e);
	}
	set snippetProps(e) {
		j(this.#e, e);
	}
	#t = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		[this.root.getBitsAttr("overlay")]: "",
		style: {
			pointerEvents: "auto",
			"--bits-dialog-depth": this.root.depth,
			"--bits-dialog-nested-count": this.root.nestedOpenCount
		},
		"data-nested-open": Ac(this.root.nestedOpenCount > 0),
		"data-nested": Ac(this.root.parent !== null),
		...Nc(this.root.overlayPresence.transitionStatus),
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return I(this.#t);
	}
	set props(e) {
		j(this.#t, e);
	}
	get shouldRender() {
		return this.root.overlayPresence.shouldRender;
	}
}, il = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"ref",
	"child",
	"children",
	"level"
]), al = /* @__PURE__ */ R("<div><!></div>");
function ol(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "id", 19, () => Jc(n)), i = K(t, "ref", 15, null), a = K(t, "level", 3, 2), o = /* @__PURE__ */ W(t, il), s = el.create({
		id: q(() => r()),
		level: q(() => a()),
		ref: q(() => i(), (e) => i(e))
	}), c = /* @__PURE__ */ O(() => Bs(o, s.props));
	var l = z(), u = N(l), d = (e) => {
		var n = z();
		H(N(n), () => t.child, () => ({ props: I(c) })), B(e, n);
	}, f = (e) => {
		var n = al();
		U(n, () => ({ ...I(c) })), H(M(n), () => t.children ?? x), T(n), B(e, n);
	};
	V(u, (e) => {
		t.child ? e(d) : e(f, -1);
	}), B(e, l), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal-consumer.svelte
function sl(e, t) {
	var n = z();
	Wi(N(n), () => t.children, (e) => {
		var n = z();
		H(N(n), () => t.children ?? x), B(e, n);
	}), B(e, n);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/bits-config.js
var cl = new Ys("BitsConfig");
function ll() {
	let e = new ul(null, {});
	return cl.getOr(e).opts;
}
var ul = class {
	opts;
	constructor(e, t) {
		let n = dl(e, t);
		this.opts = {
			defaultPortalTo: n((e) => e.defaultPortalTo),
			defaultLocale: n((e) => e.defaultLocale)
		};
	}
};
function dl(e, t) {
	return (n) => q(() => {
		let r = n(t)?.current;
		if (r !== void 0) return r;
		if (e !== null) return n(e.opts)?.current;
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/prop-resolvers.js
function fl(e, t) {
	return (n) => {
		let r = ll();
		return q(() => {
			let i = n();
			if (i !== void 0) return i;
			let a = e(r).current;
			return a === void 0 ? t : a;
		});
	};
}
var pl = fl((e) => e.defaultPortalTo, "body");
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal.svelte
function ml(e, t) {
	E(t, !0);
	let n = pl(() => t.to), r = ht(), i = /* @__PURE__ */ O(a);
	function a() {
		if (!Ic || t.disabled) return null;
		let e = null;
		return e = typeof n.current == "string" ? document.querySelector(n.current) : n.current, e;
	}
	let o;
	function s() {
		o &&= (Vi(o), null);
	}
	$s([() => I(i), () => t.disabled], ([e, n]) => {
		if (!e || n) {
			s();
			return;
		}
		return o = Li(sl, {
			target: e,
			props: { children: t.children },
			context: r
		}), () => {
			s();
		};
	});
	var c = z(), l = N(c), u = (e) => {
		var n = z();
		H(N(n), () => t.children ?? x), B(e, n);
	};
	V(l, (e) => {
		t.disabled && e(u);
	}), B(e, c), D();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/events.js
var hl = class {
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
		return xi(e, this.eventName, (e) => {
			t(e);
		}, n);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/debounce.js
function gl(e, t = 500) {
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
function _l(e, t) {
	return e === t || e.contains(t);
}
function vl(e) {
	return e?.ownerDocument ?? document;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/dom.js
function yl(e, t) {
	let { clientX: n, clientY: r } = e, i = t.getBoundingClientRect();
	return n < i.left || n > i.right || r < i.top || r > i.bottom;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/focus.js
function bl(e) {
	let t = [], n = Cc(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
//#endregion
//#region node_modules/tabbable/dist/index.esm.js
var xl = [
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
], Sl = /* #__PURE__ */ xl.join(","), Cl = typeof Element > "u", wl = Cl ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Tl = !Cl && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, El = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : El(e.parentNode));
}, Dl = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, Ol = function(e, t, n) {
	if (El(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(Sl));
	return t && wl.call(e, Sl) && r.unshift(e), r = r.filter(n), r;
}, kl = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!El(a, !1)) if (a.tagName === "SLOT") {
			var o = a.assignedElements(), s = kl(o.length ? o : a.children, !0, n);
			n.flatten ? r.push.apply(r, s) : r.push({
				scopeParent: a,
				candidates: s
			});
		} else {
			wl.call(a, Sl) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
			var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !El(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
			if (c && l) {
				var u = kl(c === !0 ? a.children : c.children, !0, n);
				n.flatten ? r.push.apply(r, u) : r.push({
					scopeParent: a,
					candidates: u
				});
			} else i.unshift.apply(i, a.children);
		}
	}
	return r;
}, Al = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, jl = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Dl(e)) && !Al(e) ? 0 : e.tabIndex;
}, Ml = function(e, t) {
	var n = jl(e);
	return n < 0 && t && !Al(e) ? 0 : n;
}, Nl = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, Pl = function(e) {
	return e.tagName === "INPUT";
}, Fl = function(e) {
	return Pl(e) && e.type === "hidden";
}, Il = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, Ll = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, Rl = function(e) {
	if (!e.name) return !0;
	var t = e.form || Tl(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = Ll(r, e.form);
	return !i || i === e;
}, zl = function(e) {
	return Pl(e) && e.type === "radio";
}, Bl = function(e) {
	return zl(e) && !Rl(e);
}, Vl = function(e) {
	var t = e && Tl(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = Tl(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, Hl = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, Ul = function(e, t) {
	var n = t.displayCheck, r = t.getShadowRoot;
	if (n === "full-native" && "checkVisibility" in e) return !e.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	if (getComputedStyle(e).visibility === "hidden") return !0;
	var i = wl.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (wl.call(i, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var a = e; e;) {
				var o = e.parentElement, s = Tl(e);
				if (o && !o.shadowRoot && r(o) === !0) return Hl(e);
				e = e.assignedSlot ? e.assignedSlot : !o && s !== e.ownerDocument ? s.host : o;
			}
			e = a;
		}
		if (Vl(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return Hl(e);
	return !1;
}, Wl = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return wl.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, Gl = function(e, t) {
	return !(t.disabled || Fl(t) || Ul(t, e) || Il(t) || Wl(t));
}, Kl = function(e, t) {
	return !(Bl(t) || jl(t) < 0 || !Gl(e, t));
}, ql = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, Jl = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = Ml(a, i), s = i ? Jl(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(Nl).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, Yl = function(e, t) {
	return t ||= {}, Jl(t.getShadowRoot ? kl([e], t.includeContainer, {
		filter: Kl.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: ql
	}) : Ol(e, t.includeContainer, Kl.bind(null, t)));
}, Xl = function(e, t) {
	return t ||= {}, t.getShadowRoot ? kl([e], t.includeContainer, {
		filter: Gl.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : Ol(e, t.includeContainer, Gl.bind(null, t));
}, Zl = /* #__PURE__ */ xl.concat("iframe:not([inert]):not([inert] *)").join(","), Ql = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return wl.call(e, Zl) === !1 ? !1 : Gl(t, e);
}, $l = "data-context-menu-trigger", eu = "data-context-menu-content";
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/use-dismissable-layer.svelte.js
new Ys("Menu.Root"), new Ys("Menu.Root | Menu.Sub"), new Ys("Menu.Content"), new Ys("Menu.Group | Menu.RadioGroup"), new Ys("Menu.RadioGroup"), new Ys("Menu.CheckboxGroup"), new hl("bitsmenuopen", {
	bubbles: !1,
	cancelable: !0
}), Fc({
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
var tu = class e {
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
	#s = qc;
	constructor(e) {
		this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#o = e.onFocusOutside, cr(() => {
			this.#a = vl(this.opts.ref.current);
		});
		let t = qc, n = () => {
			this.#g(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), t();
		};
		$s([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!(!this.opts.enabled.current || !this.opts.ref.current)) return fc(1, () => {
				this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), t(), t = this.#l());
			}), n;
		}), uc(() => {
			this.#g.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), t();
		});
	}
	#c = (e) => {
		e.defaultPrevented || this.opts.ref.current && pc(() => {
			!this.opts.ref.current || this.#h(e.target) || e.target && !this.#i && this.#o.current?.(e);
		});
	};
	#l() {
		return Ns(xi(this.#a, "pointerdown", Ns(this.#f, this.#m), { capture: !0 }), xi(this.#a, "pointerdown", Ns(this.#p, this.#d)), xi(this.#a, "focusin", this.#c));
	}
	#u = (e) => {
		let t = e;
		t.defaultPrevented && (t = au(e)), this.#e.current(e);
	};
	#d = gl((e) => {
		if (!this.opts.ref.current) {
			this.#s();
			return;
		}
		let t = this.opts.isValidEvent.current(e, this.opts.ref.current) || iu(e, this.opts.ref.current);
		if (!this.#r || this.#_() || !t) {
			this.#s();
			return;
		}
		let n = e;
		if (n.defaultPrevented && (n = au(n)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
			this.#s();
			return;
		}
		e.pointerType === "touch" ? (this.#s(), this.#s = xi(this.#a, "click", this.#u, { once: !0 })) : this.#e.current(n);
	}, 10);
	#f = (e) => {
		this.#n[e.type] = !0;
	};
	#p = (e) => {
		this.#n[e.type] = !1;
	};
	#m = () => {
		this.opts.ref.current && (this.#r = ru(this.opts.ref.current));
	};
	#h = (e) => this.opts.ref.current ? _l(this.opts.ref.current, e) : !1;
	#g = gl(() => {
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
function nu(e = [...globalThis.bitsDismissableLayers]) {
	return e.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
}
function ru(e) {
	let t = [...globalThis.bitsDismissableLayers], n = nu(t);
	if (n) return n[0].opts.ref.current === e;
	let [r] = t[0];
	return r.opts.ref.current === e;
}
function iu(e, t) {
	let n = e.target;
	if (!Vc(n)) return !1;
	let r = !!n.closest(`[${$l}]`), i = !!t.closest(`[${eu}]`);
	return "button" in e && e.button > 0 && !r ? !1 : "button" in e && e.button === 0 && r && i ? !0 : r && i ? !1 : vl(n).documentElement.contains(n) && !_l(t, n) && yl(e, t);
}
function au(e) {
	let t = e.currentTarget, n = e.target, r;
	r = e instanceof PointerEvent ? new PointerEvent(e.type, e) : new PointerEvent("pointerdown", e);
	let i = !1;
	return new Proxy(r, { get: (r, a) => a === "currentTarget" ? t : a === "target" ? n : a === "preventDefault" ? () => {
		i = !0, typeof r.preventDefault == "function" && r.preventDefault();
	} : a === "defaultPrevented" ? i : a in r ? r[a] : e[a] });
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/dismissible-layer.svelte
function ou(e, t) {
	E(t, !0);
	let n = K(t, "interactOutsideBehavior", 3, "close"), r = K(t, "onInteractOutside", 3, qc), i = K(t, "onFocusOutside", 3, qc), a = K(t, "isValidEvent", 3, () => !1), o = tu.create({
		id: q(() => t.id),
		interactOutsideBehavior: q(() => n()),
		onInteractOutside: q(() => r()),
		enabled: q(() => t.enabled),
		onFocusOutside: q(() => i()),
		isValidEvent: q(() => a()),
		ref: t.ref
	});
	var s = z();
	H(N(s), () => t.children ?? x, () => ({ props: o.props })), B(e, s), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/use-escape-layer.svelte.js
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var su = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	constructor(e) {
		this.opts = e, this.domContext = new Ec(this.opts.ref);
		let t = qc;
		$s(() => e.enabled.current, (n) => (n && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), t = this.#e()), () => {
			t(), globalThis.bitsEscapeLayers.delete(this);
		}));
	}
	#e = () => xi(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
	#t = (e) => {
		if (e.key !== "Escape" || !cu(this)) return;
		let t = new KeyboardEvent(e.type, e);
		e.preventDefault();
		let n = this.opts.escapeKeydownBehavior.current;
		n !== "close" && n !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(t);
	};
};
function cu(e) {
	let t = [...globalThis.bitsEscapeLayers], n = t.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
	if (n) return n[0] === e;
	let [r] = t[0];
	return r === e;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/escape-layer.svelte
function lu(e, t) {
	E(t, !0);
	let n = K(t, "escapeKeydownBehavior", 3, "close"), r = K(t, "onEscapeKeydown", 3, qc);
	su.create({
		escapeKeydownBehavior: q(() => n()),
		onEscapeKeydown: q(() => r()),
		enabled: q(() => t.enabled),
		ref: t.ref
	});
	var i = z();
	H(N(i), () => t.children ?? x), B(e, i), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope-manager.js
var uu = class e {
	static instance;
	#e = as([]);
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
}, du = class e {
	#e = !1;
	#t = null;
	#n = uu.getInstance();
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
		this.#r.push(xi(t, "focusin", (t) => {
			if (this.#e || !this.#n.isActiveScope(this)) return;
			let n = t.target;
			if (n) if (e.contains(n)) this.#n.setFocusMemory(this, n);
			else {
				let n = this.#n.getFocusMemory(this);
				if (n && e.contains(n) && Ql(n)) t.preventDefault(), n.focus();
				else {
					let t = this.#u(), n = this.#d()[0];
					(t || n || e).focus();
				}
			}
		}, { capture: !0 }), xi(e, "keydown", (e) => {
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
		return this.#t ? Yl(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	#u() {
		return this.#l()[0] || null;
	}
	#d() {
		return this.#t ? Xl(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	static use(t) {
		let n = null;
		return $s([() => t.ref.current, () => t.enabled.current], ([r, i]) => {
			r && i ? (n ||= new e(t), n.mount(r)) : n &&= (n.unmount(), null);
		}), uc(() => {
			n?.unmount();
		}), { get props() {
			return { tabindex: -1 };
		} };
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope.svelte
function fu(e, t) {
	E(t, !0);
	let n = K(t, "enabled", 3, !1), r = K(t, "trapFocus", 3, !1), i = K(t, "loop", 3, !1), a = K(t, "onCloseAutoFocus", 3, qc), o = K(t, "onOpenAutoFocus", 3, qc), s = du.use({
		enabled: q(() => n()),
		trap: q(() => r()),
		loop: i(),
		onCloseAutoFocus: q(() => a()),
		onOpenAutoFocus: q(() => o()),
		ref: t.ref
	});
	var c = z();
	H(N(c), () => t.focusScope ?? x, () => ({ props: s.props })), B(e, c), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/use-text-selection-layer.svelte.js
var pu = () => {};
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var mu = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	#e = qc;
	#t = !1;
	#n = pu;
	#r = pu;
	constructor(e) {
		this.opts = e, this.domContext = new Ec(e.ref);
		let t = qc;
		$s(() => [
			this.opts.enabled.current,
			this.opts.onPointerDown.current,
			this.opts.onPointerUp.current
		], ([e, n, r]) => (this.#t = e, this.#n = n, this.#r = r, e && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), t(), t = this.#i()), () => {
			this.#t = !1, t(), this.#s(), globalThis.bitsTextSelectionLayers.delete(this);
		}));
	}
	#i() {
		return Ns(xi(this.domContext.getDocument(), "pointerdown", this.#o), xi(this.domContext.getDocument(), "pointerup", os(this.#s, this.#a)));
	}
	#a = (e) => {
		this.#r(e);
	};
	#o = (e) => {
		let t = this.opts.ref.current, n = e.target;
		!zc(t) || !zc(n) || !this.#t || !vu(this) || !Sc(t, n) || (this.#n(e), !e.defaultPrevented && (this.#e = gu(t, this.domContext.getDocument().body)));
	};
	#s = () => {
		this.#e(), this.#e = qc;
	};
}, hu = (e) => e.style.userSelect || e.style.webkitUserSelect;
function gu(e, t) {
	let n = hu(t), r = hu(e);
	return _u(t, "none"), _u(e, "text"), () => {
		_u(t, n), _u(e, r);
	};
}
function _u(e, t) {
	e.style.userSelect = t, e.style.webkitUserSelect = t;
}
function vu(e) {
	let t = [...globalThis.bitsTextSelectionLayers];
	if (!t.length) return !1;
	let n = t.at(-1);
	return n ? n[0] === e : !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/text-selection-layer.svelte
function yu(e, t) {
	E(t, !0);
	let n = K(t, "preventOverflowTextSelection", 3, !0), r = K(t, "onPointerDown", 3, qc), i = K(t, "onPointerUp", 3, qc);
	mu.create({
		id: q(() => t.id),
		onPointerDown: q(() => r()),
		onPointerUp: q(() => i()),
		enabled: q(() => t.enabled && n()),
		ref: t.ref
	});
	var a = z();
	H(N(a), () => t.children ?? x), B(e, a), D();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/use-id.js
globalThis.bitsIdCounter ??= { current: 0 };
function bu(e = "bits") {
	return globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/shared-state.svelte.js
var xu = class {
	#e;
	#t = 0;
	#n = /* @__PURE__ */ A();
	#r;
	constructor(e) {
		this.#e = e;
	}
	#i() {
		--this.#t, this.#r && this.#t <= 0 && (this.#r(), j(this.#n, void 0), this.#r = void 0);
	}
	get(...e) {
		return this.#t += 1, I(this.#n) === void 0 && (this.#r = dr(() => {
			j(this.#n, this.#e(...e), !0);
		})), cr(() => () => {
			this.#i();
		}), I(this.#n);
	}
}, Su = new Us(), Cu = /* @__PURE__ */ A(null), wu = null, Tu = null, Eu = !1, Du = q(() => {
	for (let e of Su.values()) if (e) return !0;
	return !1;
}), Ou = null, ku = new xu(() => {
	function e() {
		document.body.setAttribute("style", I(Cu) ?? ""), document.body.style.removeProperty("--scrollbar-width"), Lc && wu?.(), j(Cu, null);
	}
	function t() {
		Tu !== null && (window.clearTimeout(Tu), Tu = null);
	}
	function n(e, n) {
		t(), Eu = !0, Ou = Date.now();
		let r = Ou, i = () => {
			Tu = null, Ou === r && (ju(Su) ? Eu = !1 : (Eu = !1, n()));
		}, a = e === null ? 24 : e;
		Tu = window.setTimeout(i, a);
	}
	function r() {
		I(Cu) === null && Su.size === 0 && !Eu && j(Cu, document.body.getAttribute("style"), !0);
	}
	return $s(() => Du.current, () => {
		if (!Du.current) return;
		r(), Eu = !1;
		let e = getComputedStyle(document.documentElement), t = getComputedStyle(document.body), n = e.scrollbarGutter?.includes("stable") || t.scrollbarGutter?.includes("stable"), i = window.innerWidth - document.documentElement.clientWidth, a = {
			padding: Number.parseInt(t.paddingRight ?? "0", 10) + i,
			margin: Number.parseInt(t.marginRight ?? "0", 10)
		};
		i > 0 && !n && (document.body.style.paddingRight = `${a.padding}px`, document.body.style.marginRight = `${a.margin}px`, document.body.style.setProperty("--scrollbar-width", `${i}px`)), document.body.style.overflow = "hidden", Lc && (wu = xi(document, "touchmove", (e) => {
			e.target === document.documentElement && (e.touches.length > 1 || e.preventDefault());
		}, { passive: !1 })), pc(() => {
			document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
		});
	}), uc(() => () => {
		wu?.();
	}), {
		get lockMap() {
			return Su;
		},
		resetBodyStyle: e,
		scheduleCleanupIfNoNewLocks: n,
		cancelPendingCleanup: t,
		ensureInitialStyleCaptured: r
	};
}), Au = class {
	#e = bu();
	#t;
	#n = () => null;
	#r;
	locked;
	constructor(e, t = () => null) {
		this.#t = e, this.#n = t, this.#r = ku.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = q(() => this.#r.lockMap.get(this.#e) ?? !1, (e) => this.#r.lockMap.set(this.#e, e)), uc(() => {
			if (this.#r.lockMap.delete(this.#e), ju(this.#r.lockMap)) return;
			let e = this.#n();
			this.#r.scheduleCleanupIfNoNewLocks(e, () => {
				this.#r.resetBodyStyle();
			});
		}));
	}
};
function ju(e) {
	for (let [t, n] of e) if (n) return !0;
	return !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/scroll-lock/scroll-lock.svelte
function Mu(e, t) {
	E(t, !0);
	let n = K(t, "preventScroll", 3, !0), r = K(t, "restoreScrollDelay", 3, null);
	n() && new Au(n(), () => r()), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/dialog/components/dialog-overlay.svelte
var Nu = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"forceMount",
	"child",
	"children",
	"ref"
]), Pu = /* @__PURE__ */ R("<div><!></div>");
function Fu(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "id", 19, () => Jc(n)), i = K(t, "forceMount", 3, !1), a = K(t, "ref", 15, null), o = /* @__PURE__ */ W(t, Nu), s = rl.create({
		id: q(() => r()),
		ref: q(() => a(), (e) => a(e))
	}), c = /* @__PURE__ */ O(() => Bs(o, s.props));
	var l = z(), u = N(l), d = (e) => {
		var n = z(), r = N(n), i = (e) => {
			var n = z(), r = N(n);
			{
				let e = /* @__PURE__ */ O(() => ({
					props: Bs(I(c)),
					...s.snippetProps
				}));
				H(r, () => t.child, () => I(e));
			}
			B(e, n);
		}, a = (e) => {
			var n = Pu();
			U(n, (e) => ({ ...e }), [() => Bs(I(c))]), H(M(n), () => t.children ?? x, () => s.snippetProps), T(n), B(e, n);
		};
		V(r, (e) => {
			t.child ? e(i) : e(a, -1);
		}), B(e, n);
	};
	V(u, (e) => {
		(s.shouldRender || i()) && e(d);
	}), B(e, l), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/dialog/components/dialog-trigger.svelte
var Iu = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"ref",
	"children",
	"child",
	"disabled"
]), Lu = /* @__PURE__ */ R("<button><!></button>");
function Ru(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "id", 19, () => Jc(n)), i = K(t, "ref", 15, null), a = K(t, "disabled", 3, !1), o = /* @__PURE__ */ W(t, Iu), s = Qc.create({
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e)),
		disabled: q(() => !!a())
	}), c = /* @__PURE__ */ O(() => Bs(o, s.props));
	var l = z(), u = N(l), d = (e) => {
		var n = z();
		H(N(n), () => t.child, () => ({ props: I(c) })), B(e, n);
	}, f = (e) => {
		var n = Lu();
		U(n, () => ({ ...I(c) })), H(M(n), () => t.children ?? x), T(n), B(e, n);
	};
	V(u, (e) => {
		t.child ? e(d) : e(f, -1);
	}), B(e, l), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/dialog/components/dialog-description.svelte
var zu = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"children",
	"child",
	"ref"
]), Bu = /* @__PURE__ */ R("<div><!></div>");
function Vu(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "id", 19, () => Jc(n)), i = K(t, "ref", 15, null), a = /* @__PURE__ */ W(t, zu), o = tl.create({
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e))
	}), s = /* @__PURE__ */ O(() => Bs(a, o.props));
	var c = z(), l = N(c), u = (e) => {
		var n = z();
		H(N(n), () => t.child, () => ({ props: I(s) })), B(e, n);
	}, d = (e) => {
		var n = Bu();
		U(n, () => ({ ...I(s) })), H(M(n), () => t.children ?? x), T(n), B(e, n);
	};
	V(l, (e) => {
		t.child ? e(u) : e(d, -1);
	}), B(e, c), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/aspect-ratio/aspect-ratio.svelte.js
var Hu = Fc({
	component: "aspect-ratio",
	parts: ["root"]
}), Uu = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = Dc(this.opts.ref);
	}
	#e = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		style: {
			position: "absolute",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		},
		[Hu.root]: "",
		...this.attachment
	}));
	get props() {
		return I(this.#e);
	}
	set props(e) {
		j(this.#e, e);
	}
}, Wu = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"id",
	"ratio",
	"children",
	"child"
]), Gu = /* @__PURE__ */ R("<div><!></div>");
function Ku(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "ref", 15, null), i = K(t, "id", 19, () => Jc(n)), a = K(t, "ratio", 3, 1), o = /* @__PURE__ */ W(t, Wu), s = Uu.create({
		id: q(() => i()),
		ref: q(() => r(), (e) => r(e)),
		ratio: q(() => a())
	}), c = /* @__PURE__ */ O(() => Bs(o, s.props));
	var l = Gu();
	let u;
	var d = M(l), f = (e) => {
		var n = z();
		H(N(n), () => t.child, () => ({ props: I(c) })), B(e, n);
	}, p = (e) => {
		var n = Gu();
		U(n, () => ({ ...I(c) })), H(M(n), () => t.children ?? x), T(n), B(e, n);
	};
	V(d, (e) => {
		t.child ? e(f) : e(p, -1);
	}), T(l), gr(() => u = Ta(l, "", u, {
		position: "relative",
		width: "100%",
		"padding-bottom": `${a() ? 100 / a() : 0}%`
	})), B(e, l), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/avatar.svelte.js
var qu = Fc({
	component: "avatar",
	parts: [
		"root",
		"image",
		"fallback"
	]
}), Ju = new Ys("Avatar.Root"), Yu = class e {
	static create(t) {
		return Ju.set(new e(t));
	}
	opts;
	domContext;
	attachment;
	constructor(e) {
		this.opts = e, this.domContext = new Ec(this.opts.ref), this.loadImage = this.loadImage.bind(this), this.attachment = Dc(this.opts.ref);
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
	#e = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		[qu.root]: "",
		"data-status": this.opts.loadingStatus.current,
		...this.attachment
	}));
	get props() {
		return I(this.#e);
	}
	set props(e) {
		j(this.#e, e);
	}
}, Xu = class e {
	static create(t) {
		return new e(t, Ju.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Dc(this.opts.ref), $s.pre([() => this.opts.src.current, () => this.opts.crossOrigin.current], ([e, t]) => {
			if (!e) {
				this.root.opts.loadingStatus.current = "error";
				return;
			}
			this.root.loadImage(e, t, this.opts.referrerPolicy.current);
		});
	}
	#e = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		style: { display: this.root.opts.loadingStatus.current === "loaded" ? "block" : "none" },
		"data-status": this.root.opts.loadingStatus.current,
		[qu.image]: "",
		src: this.opts.src.current,
		crossorigin: this.opts.crossOrigin.current,
		referrerpolicy: this.opts.referrerPolicy.current,
		...this.attachment
	}));
	get props() {
		return I(this.#e);
	}
	set props(e) {
		j(this.#e, e);
	}
}, Zu = class e {
	static create(t) {
		return new e(t, Ju.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Dc(this.opts.ref);
	}
	#e = /* @__PURE__ */ O(() => this.root.opts.loadingStatus.current === "loaded" ? { display: "none" } : void 0);
	get style() {
		return I(this.#e);
	}
	set style(e) {
		j(this.#e, e);
	}
	#t = /* @__PURE__ */ O(() => ({
		style: this.style,
		"data-status": this.root.opts.loadingStatus.current,
		[qu.fallback]: "",
		...this.attachment
	}));
	get props() {
		return I(this.#t);
	}
	set props(e) {
		j(this.#t, e);
	}
}, Qu = new Set([
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
]), $u = /* @__PURE__ */ R("<div><!></div>");
function ed(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "delayMs", 3, 0), i = K(t, "loadingStatus", 15, "loading"), a = K(t, "id", 19, () => Jc(n)), o = K(t, "ref", 15, null), s = /* @__PURE__ */ W(t, Qu), c = Yu.create({
		delayMs: q(() => r()),
		loadingStatus: q(() => i(), (e) => {
			i() !== e && (i(e), t.onLoadingStatusChange?.(e));
		}),
		id: q(() => a()),
		ref: q(() => o(), (e) => o(e))
	}), l = /* @__PURE__ */ O(() => Bs(s, c.props));
	var u = z(), d = N(u), f = (e) => {
		var n = z();
		H(N(n), () => t.child, () => ({ props: I(l) })), B(e, n);
	}, p = (e) => {
		var n = $u();
		U(n, () => ({ ...I(l) })), H(M(n), () => t.children ?? x), T(n), B(e, n);
	};
	V(d, (e) => {
		t.child ? e(f) : e(p, -1);
	}), B(e, u), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/components/avatar-image.svelte
var td = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"src",
	"child",
	"id",
	"ref",
	"crossorigin",
	"referrerpolicy"
]), nd = /* @__PURE__ */ R("<img/>");
function rd(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "id", 19, () => Jc(n)), i = K(t, "ref", 15, null), a = K(t, "crossorigin", 3, void 0), o = K(t, "referrerpolicy", 3, void 0), s = /* @__PURE__ */ W(t, td), c = Xu.create({
		src: q(() => t.src),
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e)),
		crossOrigin: q(() => a()),
		referrerPolicy: q(() => o())
	}), l = /* @__PURE__ */ O(() => Bs(s, c.props));
	var u = z(), d = N(u), f = (e) => {
		var n = z();
		H(N(n), () => t.child, () => ({ props: I(l) })), B(e, n);
	}, p = (e) => {
		var n = nd();
		U(n, () => ({
			...I(l),
			src: t.src
		})), yi(n), B(e, n);
	};
	V(d, (e) => {
		t.child ? e(f) : e(p, -1);
	}), B(e, u), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/avatar/components/avatar-fallback.svelte
var id = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children",
	"child",
	"id",
	"ref"
]), ad = /* @__PURE__ */ R("<span><!></span>");
function od(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "id", 19, () => Jc(n)), i = K(t, "ref", 15, null), a = /* @__PURE__ */ W(t, id), o = Zu.create({
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e))
	}), s = /* @__PURE__ */ O(() => Bs(a, o.props));
	var c = z(), l = N(c), u = (e) => {
		var n = z();
		H(N(n), () => t.child, () => ({ props: I(s) })), B(e, n);
	}, d = (e) => {
		var n = ad();
		U(n, () => ({ ...I(s) })), H(M(n), () => t.children ?? x), T(n), B(e, n);
	};
	V(l, (e) => {
		t.child ? e(u) : e(d, -1);
	}), B(e, c), D();
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sd = [
	"top",
	"right",
	"bottom",
	"left"
], cd = Math.min, ld = Math.max, ud = Math.round, dd = Math.floor, fd = (e) => ({
	x: e,
	y: e
}), pd = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function md(e, t, n) {
	return ld(e, cd(t, n));
}
function hd(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function gd(e) {
	return e.split("-")[0];
}
function _d(e) {
	return e.split("-")[1];
}
function vd(e) {
	return e === "x" ? "y" : "x";
}
function yd(e) {
	return e === "y" ? "height" : "width";
}
function bd(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function xd(e) {
	return vd(bd(e));
}
function Sd(e, t, n) {
	n === void 0 && (n = !1);
	let r = _d(e), i = xd(e), a = yd(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = jd(o)), [o, jd(o)];
}
function Cd(e) {
	let t = jd(e);
	return [
		wd(e),
		t,
		wd(t)
	];
}
function wd(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Td = ["left", "right"], Ed = ["right", "left"], Dd = ["top", "bottom"], Od = ["bottom", "top"];
function kd(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Ed : Td : t ? Td : Ed;
		case "left":
		case "right": return t ? Dd : Od;
		default: return [];
	}
}
function Ad(e, t, n, r) {
	let i = _d(e), a = kd(gd(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(wd)))), a;
}
function jd(e) {
	let t = gd(e);
	return pd[t] + e.slice(t.length);
}
function Md(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function Nd(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Md(e);
}
function Pd(e) {
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
function Fd(e, t, n) {
	let { reference: r, floating: i } = e, a = bd(t), o = xd(t), s = yd(o), c = gd(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	switch (_d(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function Id(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = hd(t, e), p = Nd(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Pd(await i.getClippingRect({
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
	}, y = Pd(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Ld = 50, Rd = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Id
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Fd(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < Ld && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Fd(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, zd = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = hd(e, t) || {};
		if (l == null) return {};
		let d = Nd(u), f = {
			x: n,
			y: r
		}, p = xd(i), m = yd(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], ee = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), te = ee ? ee[y] : 0;
		(!te || !await (o.isElement == null ? void 0 : o.isElement(ee))) && (te = s.floating[y] || a.floating[m]);
		let S = b / 2 - x / 2, ne = te / 2 - h[m] / 2 - 1, re = cd(d[_], ne), ie = cd(d[v], ne), ae = re, oe = te - h[m] - ie, se = te / 2 - h[m] / 2 + S, ce = md(ae, se, oe), le = !c.arrow && _d(i) != null && se !== ce && a.reference[m] / 2 - (se < ae ? re : ie) - h[m] / 2 < 0, ue = le ? se < ae ? se - ae : se - oe : 0;
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
}), Bd = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = hd(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = gd(r), _ = bd(o), v = gd(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [jd(o)] : Cd(o)), x = p !== "none";
			!d && x && b.push(...Ad(o, m, p, y));
			let ee = [o, ...b], te = await s.detectOverflow(t, h), S = [], ne = i.flip?.overflows || [];
			if (l && S.push(te[g]), u) {
				let e = Sd(r, a, y);
				S.push(te[e[0]], te[e[1]]);
			}
			if (ne = [...ne, {
				placement: r,
				overflows: S
			}], !S.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = ee[e];
				if (t && (!(u === "alignment" && _ !== bd(t)) || ne.every((e) => bd(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
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
								let t = bd(e.placement);
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
function Vd(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Hd(e) {
	return sd.some((t) => e[t] >= 0);
}
var Ud = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = hd(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Vd(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Hd(e)
					} };
				}
				case "escaped": {
					let e = Vd(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Hd(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Wd = /*#__PURE__*/ new Set(["left", "top"]);
async function Gd(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = gd(n), s = _d(n), c = bd(n) === "y", l = Wd.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = hd(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var Kd = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Gd(t, e);
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
}, qd = function(e) {
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
			} }, ...l } = hd(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = bd(gd(i)), p = vd(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = md(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = md(n, h, r);
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
}, Jd = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = hd(e, t), u = {
				x: n,
				y: r
			}, d = bd(i), f = vd(d), p = u[f], m = u[d], h = hd(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = Wd.has(gd(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Yd = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = hd(e, t), u = await o.detectOverflow(t, l), d = gd(i), f = _d(i), p = bd(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = cd(h - u[g], v), x = cd(m - u[_], y), ee = !t.middlewareData.shift, te = b, S = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = y), (r = t.middlewareData.shift) != null && r.enabled.y && (te = v), ee && !f) {
				let e = ld(u.left, 0), t = ld(u.right, 0), n = ld(u.top, 0), r = ld(u.bottom, 0);
				p ? S = m - 2 * (e !== 0 || t !== 0 ? e + t : ld(u.left, u.right)) : te = h - 2 * (n !== 0 || r !== 0 ? n + r : ld(u.top, u.bottom));
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
function Xd() {
	return typeof window < "u";
}
function Zd(e) {
	return ef(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Qd(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $d(e) {
	return ((ef(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function ef(e) {
	return Xd() ? e instanceof Node || e instanceof Qd(e).Node : !1;
}
function tf(e) {
	return Xd() ? e instanceof Element || e instanceof Qd(e).Element : !1;
}
function nf(e) {
	return Xd() ? e instanceof HTMLElement || e instanceof Qd(e).HTMLElement : !1;
}
function rf(e) {
	return !Xd() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Qd(e).ShadowRoot;
}
function af(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = gf(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function of(e) {
	return /^(table|td|th)$/.test(Zd(e));
}
function sf(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var cf = /transform|translate|scale|rotate|perspective|filter/, lf = /paint|layout|strict|content/, uf = (e) => !!e && e !== "none", df;
function ff(e) {
	let t = tf(e) ? gf(e) : e;
	return uf(t.transform) || uf(t.translate) || uf(t.scale) || uf(t.rotate) || uf(t.perspective) || !mf() && (uf(t.backdropFilter) || uf(t.filter)) || cf.test(t.willChange || "") || lf.test(t.contain || "");
}
function pf(e) {
	let t = vf(e);
	for (; nf(t) && !hf(t);) {
		if (ff(t)) return t;
		if (sf(t)) return null;
		t = vf(t);
	}
	return null;
}
function mf() {
	return df ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), df;
}
function hf(e) {
	return /^(html|body|#document)$/.test(Zd(e));
}
function gf(e) {
	return Qd(e).getComputedStyle(e);
}
function _f(e) {
	return tf(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function vf(e) {
	if (Zd(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || rf(e) && e.host || $d(e);
	return rf(t) ? t.host : t;
}
function yf(e) {
	let t = vf(e);
	return hf(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : nf(t) && af(t) ? t : yf(t);
}
function bf(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = yf(e), i = r === e.ownerDocument?.body, a = Qd(r);
	if (i) {
		let e = xf(a);
		return t.concat(a, a.visualViewport || [], af(r) ? r : [], e && n ? bf(e) : []);
	} else return t.concat(r, bf(r, [], n));
}
function xf(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Sf(e) {
	let t = gf(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = nf(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = ud(n) !== a || ud(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Cf(e) {
	return tf(e) ? e : e.contextElement;
}
function wf(e) {
	let t = Cf(e);
	if (!nf(t)) return fd(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Sf(t), o = (a ? ud(n.width) : n.width) / r, s = (a ? ud(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Tf = /*#__PURE__*/ fd(0);
function Ef(e) {
	let t = Qd(e);
	return !mf() || !t.visualViewport ? Tf : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Df(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Qd(e) ? !1 : t;
}
function Of(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Cf(e), o = fd(1);
	t && (r ? tf(r) && (o = wf(r)) : o = wf(e));
	let s = Df(a, n, r) ? Ef(a) : fd(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Qd(a), t = r && tf(r) ? Qd(r) : r, n = e, i = xf(n);
		for (; i && r && t !== n;) {
			let e = wf(i), t = i.getBoundingClientRect(), r = gf(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Qd(i), i = xf(n);
		}
	}
	return Pd({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function kf(e, t) {
	let n = _f(e).scrollLeft;
	return t ? t.left + n : Of($d(e)).left + n;
}
function Af(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - kf(e, n),
		y: n.top + t.scrollTop
	};
}
function jf(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = $d(r), s = t ? sf(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = fd(1), u = fd(0), d = nf(r);
	if ((d || !d && !a) && ((Zd(r) !== "body" || af(o)) && (c = _f(r)), d)) {
		let e = Of(r);
		l = wf(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Af(o, c) : fd(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Mf(e) {
	return Array.from(e.getClientRects());
}
function Nf(e) {
	let t = $d(e), n = _f(e), r = e.ownerDocument.body, i = ld(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = ld(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + kf(e), s = -n.scrollTop;
	return gf(r).direction === "rtl" && (o += ld(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var Pf = 25;
function Ff(e, t) {
	let n = Qd(e), r = $d(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = mf();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = kf(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= Pf && (a -= o);
	} else l <= Pf && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function If(e, t) {
	let n = Of(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = nf(e) ? wf(e) : fd(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Lf(e, t, n) {
	let r;
	if (t === "viewport") r = Ff(e, n);
	else if (t === "document") r = Nf($d(e));
	else if (tf(t)) r = If(t, n);
	else {
		let n = Ef(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Pd(r);
}
function Rf(e, t) {
	let n = vf(e);
	return n === t || !tf(n) || hf(n) ? !1 : gf(n).position === "fixed" || Rf(n, t);
}
function zf(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = bf(e, [], !1).filter((e) => tf(e) && Zd(e) !== "body"), i = null, a = gf(e).position === "fixed", o = a ? vf(e) : e;
	for (; tf(o) && !hf(o);) {
		let t = gf(o), n = ff(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || af(o) && !n && Rf(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = vf(o);
	}
	return t.set(e, r), r;
}
function Bf(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? sf(t) ? [] : zf(t, this._c) : [].concat(n), r], o = Lf(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Lf(t, a[e], i);
		s = ld(n.top, s), c = cd(n.right, c), l = cd(n.bottom, l), u = ld(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Vf(e) {
	let { width: t, height: n } = Sf(e);
	return {
		width: t,
		height: n
	};
}
function Hf(e, t, n) {
	let r = nf(t), i = $d(t), a = n === "fixed", o = Of(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = fd(0);
	function l() {
		c.x = kf(i);
	}
	if (r || !r && !a) if ((Zd(t) !== "body" || af(i)) && (s = _f(t)), r) {
		let e = Of(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Af(i, s) : fd(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Uf(e) {
	return gf(e).position === "static";
}
function Wf(e, t) {
	if (!nf(e) || gf(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return $d(e) === n && (n = n.ownerDocument.body), n;
}
function Gf(e, t) {
	let n = Qd(e);
	if (sf(e)) return n;
	if (!nf(e)) {
		let t = vf(e);
		for (; t && !hf(t);) {
			if (tf(t) && !Uf(t)) return t;
			t = vf(t);
		}
		return n;
	}
	let r = Wf(e, t);
	for (; r && of(r) && Uf(r);) r = Wf(r, t);
	return r && hf(r) && Uf(r) && !ff(r) ? n : r || pf(e) || n;
}
var Kf = async function(e) {
	let t = this.getOffsetParent || Gf, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Hf(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function qf(e) {
	return gf(e).direction === "rtl";
}
var Jf = {
	convertOffsetParentRelativeRectToViewportRelativeRect: jf,
	getDocumentElement: $d,
	getClippingRect: Bf,
	getOffsetParent: Gf,
	getElementRects: Kf,
	getClientRects: Mf,
	getDimensions: Vf,
	getScale: wf,
	isElement: tf,
	isRTL: qf
};
function Yf(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Xf(e, t) {
	let n = null, r, i = $d(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = dd(d), h = dd(i.clientWidth - (u + f)), g = dd(i.clientHeight - (d + p)), _ = dd(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: ld(0, cd(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Yf(l, e.getBoundingClientRect()) && o(), y = !1;
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
function Zf(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Cf(e), u = i || a ? [...l ? bf(l) : [], ...t ? bf(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Xf(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Of(e) : null;
	c && g();
	function g() {
		let t = Of(e);
		h && !Yf(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Qf = Kd, $f = qd, ep = Bd, tp = Yd, np = Ud, rp = zd, ip = Jd, ap = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Jf,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Rd(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region node_modules/bits-ui/dist/internal/floating-svelte/floating-utils.svelte.js
function op(e) {
	return typeof e == "function" ? e() : e;
}
function sp(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function cp(e, t) {
	let n = sp(e);
	return Math.round(t * n) / n;
}
function lp(e) {
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
function up(e) {
	let t = e.whileElementsMounted, n = /* @__PURE__ */ O(() => op(e.open) ?? !0), r = /* @__PURE__ */ O(() => op(e.middleware)), i = /* @__PURE__ */ O(() => op(e.transform) ?? !0), a = /* @__PURE__ */ O(() => op(e.placement) ?? "bottom"), o = /* @__PURE__ */ O(() => op(e.strategy) ?? "absolute"), s = /* @__PURE__ */ O(() => op(e.sideOffset) ?? 0), c = /* @__PURE__ */ O(() => op(e.alignOffset) ?? 0), l = e.reference, u = /* @__PURE__ */ A(0), d = /* @__PURE__ */ A(0), f = as(null), p = /* @__PURE__ */ A(In(I(o))), m = /* @__PURE__ */ A(In(I(a))), h = /* @__PURE__ */ A(In({})), g = /* @__PURE__ */ A(!1), _ = !1, v = 0, y = /* @__PURE__ */ O(() => {
		let e = f.current ? cp(f.current, I(u)) : I(u), t = f.current ? cp(f.current, I(d)) : I(d);
		return I(i) ? {
			position: I(p),
			left: "0",
			top: "0",
			transform: `translate(${e}px, ${t}px)`,
			...f.current && sp(f.current) >= 1.5 && { willChange: "transform" }
		} : {
			position: I(p),
			left: `${e}px`,
			top: `${t}px`
		};
	}), b;
	function x() {
		if (l.current === null || f.current === null) return;
		let e = l.current, t = f.current, i = ++v;
		ap(e, t, {
			middleware: I(r),
			placement: I(a),
			strategy: I(o)
		}).then((r) => {
			if (i === v && !(l.current !== e || f.current !== t)) {
				if (dp(e)) {
					j(h, {
						...I(h),
						hide: {
							...I(h).hide,
							referenceHidden: !0
						}
					}, !0);
					return;
				}
				if (!I(n) && I(u) !== 0 && I(d) !== 0) {
					let e = Math.max(Math.abs(I(s)), Math.abs(I(c)), 15);
					if (r.x <= e && r.y <= e) return;
				}
				j(u, r.x, !0), j(d, r.y, !0), j(p, r.strategy, !0), j(m, r.placement, !0), j(h, r.middlewareData, !0), j(g, !0);
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
		I(n) && (l.current === null || f.current === null || (b = t(l.current, f.current, x)));
	}
	function S() {
		!I(n) && f.current === null && j(g, !1);
	}
	function ne() {
		return [
			I(r),
			I(a),
			I(o),
			I(s),
			I(c),
			I(n)
		];
	}
	return cr(() => {
		t === void 0 && I(n) && x();
	}), cr(te), cr(() => {
		if (t !== void 0) {
			if (ne(), !I(n)) {
				_ = !1;
				return;
			}
			if (!I(g)) {
				_ = !1;
				return;
			}
			if (!_) {
				_ = !0;
				return;
			}
			x();
		}
	}), cr(S), cr(() => ee), {
		floating: f,
		reference: l,
		get strategy() {
			return I(p);
		},
		get placement() {
			return I(m);
		},
		get middlewareData() {
			return I(h);
		},
		get isPositioned() {
			return I(g);
		},
		get floatingStyles() {
			return I(y);
		},
		get update() {
			return x;
		}
	};
}
function dp(e) {
	return e instanceof Element ? !e.isConnected || e instanceof HTMLElement && e.hidden ? !0 : e.getClientRects().length === 0 : !1;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/use-floating-layer.svelte.js
var fp = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, pp = new Ys("Floating.Root"), mp = new Ys("Floating.Content"), hp = new Ys("Floating.Root"), gp = class e {
	static create(t = !1) {
		return t ? hp.set(new e()) : pp.set(new e());
	}
	anchorNode = as(null);
	customAnchorNode = as(null);
	triggerNode = as(null);
	constructor() {
		cr(() => {
			this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
		});
	}
}, _p = class e {
	static create(t, n = !1) {
		return n ? mp.set(new e(t, hp.get())) : mp.set(new e(t, pp.get()));
	}
	opts;
	root;
	contentRef = as(null);
	wrapperRef = as(null);
	arrowRef = as(null);
	contentAttachment = Dc(this.contentRef);
	wrapperAttachment = Dc(this.wrapperRef);
	arrowAttachment = Dc(this.arrowRef);
	arrowId = as(bu());
	#e = /* @__PURE__ */ O(() => {
		if (typeof this.opts.style == "string") return Ms(this.opts.style);
		if (!this.opts.style) return {};
	});
	#t = void 0;
	#n = new ic(() => this.arrowRef.current ?? void 0);
	#r = /* @__PURE__ */ O(() => this.#n?.width ?? 0);
	#i = /* @__PURE__ */ O(() => this.#n?.height ?? 0);
	#a = /* @__PURE__ */ O(() => this.opts.side?.current + (this.opts.align.current === "center" ? "" : `-${this.opts.align.current}`));
	#o = /* @__PURE__ */ O(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
	#s = /* @__PURE__ */ O(() => I(this.#o).length > 0);
	get hasExplicitBoundaries() {
		return I(this.#s);
	}
	set hasExplicitBoundaries(e) {
		j(this.#s, e);
	}
	#c = /* @__PURE__ */ O(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: I(this.#o).filter(Wc),
		altBoundary: this.hasExplicitBoundaries
	}));
	get detectOverflowOptions() {
		return I(this.#c);
	}
	set detectOverflowOptions(e) {
		j(this.#c, e);
	}
	#l = /* @__PURE__ */ A(void 0);
	#u = /* @__PURE__ */ A(void 0);
	#d = /* @__PURE__ */ A(void 0);
	#f = /* @__PURE__ */ A(void 0);
	#p = /* @__PURE__ */ O(() => [
		Qf({
			mainAxis: this.opts.sideOffset.current + I(this.#i),
			alignmentAxis: this.opts.alignOffset.current
		}),
		this.opts.avoidCollisions.current && $f({
			mainAxis: !0,
			crossAxis: !1,
			limiter: this.opts.sticky.current === "partial" ? ip() : void 0,
			...this.detectOverflowOptions
		}),
		this.opts.avoidCollisions.current && ep({ ...this.detectOverflowOptions }),
		tp({
			...this.detectOverflowOptions,
			apply: ({ rects: e, availableWidth: t, availableHeight: n }) => {
				let { width: r, height: i } = e.reference;
				j(this.#l, t, !0), j(this.#u, n, !0), j(this.#d, r, !0), j(this.#f, i, !0);
			}
		}),
		this.arrowRef.current && rp({
			element: this.arrowRef.current,
			padding: this.opts.arrowPadding.current
		}),
		yp({
			arrowWidth: I(this.#r),
			arrowHeight: I(this.#i)
		}),
		this.opts.hideWhenDetached.current && np({
			strategy: "referenceHidden",
			...this.detectOverflowOptions
		})
	].filter(Boolean));
	get middleware() {
		return I(this.#p);
	}
	set middleware(e) {
		j(this.#p, e);
	}
	floating;
	#m = /* @__PURE__ */ O(() => xp(this.floating.placement));
	get placedSide() {
		return I(this.#m);
	}
	set placedSide(e) {
		j(this.#m, e);
	}
	#h = /* @__PURE__ */ O(() => Sp(this.floating.placement));
	get placedAlign() {
		return I(this.#h);
	}
	set placedAlign(e) {
		j(this.#h, e);
	}
	#g = /* @__PURE__ */ O(() => this.floating.middlewareData.arrow?.x ?? 0);
	get arrowX() {
		return I(this.#g);
	}
	set arrowX(e) {
		j(this.#g, e);
	}
	#_ = /* @__PURE__ */ O(() => this.floating.middlewareData.arrow?.y ?? 0);
	get arrowY() {
		return I(this.#_);
	}
	set arrowY(e) {
		j(this.#_, e);
	}
	#v = /* @__PURE__ */ O(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
	get cannotCenterArrow() {
		return I(this.#v);
	}
	set cannotCenterArrow(e) {
		j(this.#v, e);
	}
	#y = /* @__PURE__ */ A();
	get contentZIndex() {
		return I(this.#y);
	}
	set contentZIndex(e) {
		j(this.#y, e, !0);
	}
	#b = /* @__PURE__ */ O(() => fp[this.placedSide]);
	get arrowBaseSide() {
		return I(this.#b);
	}
	set arrowBaseSide(e) {
		j(this.#b, e);
	}
	#x = /* @__PURE__ */ O(() => ({
		id: this.opts.wrapperId.current,
		"data-bits-floating-content-wrapper": "",
		style: {
			...this.floating.floatingStyles,
			transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: this.contentZIndex,
			"--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
			"--bits-floating-available-width": `${I(this.#l)}px`,
			"--bits-floating-available-height": `${I(this.#u)}px`,
			"--bits-floating-anchor-width": `${I(this.#d)}px`,
			"--bits-floating-anchor-height": `${I(this.#f)}px`,
			...this.floating.middlewareData.hide?.referenceHidden && {
				visibility: "hidden",
				"pointer-events": "none"
			},
			...I(this.#e)
		},
		dir: this.opts.dir.current,
		...this.wrapperAttachment
	}));
	get wrapperProps() {
		return I(this.#x);
	}
	set wrapperProps(e) {
		j(this.#x, e);
	}
	#S = /* @__PURE__ */ O(() => ({
		"data-side": this.placedSide,
		"data-align": this.placedAlign,
		style: Ls({ ...I(this.#e) }),
		...this.contentAttachment
	}));
	get props() {
		return I(this.#S);
	}
	set props(e) {
		j(this.#S, e);
	}
	#C = /* @__PURE__ */ O(() => ({
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
		return I(this.#C);
	}
	set arrowStyle(e) {
		j(this.#C, e);
	}
	constructor(e, t) {
		this.opts = e, this.root = t, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), $s(() => e.customAnchor.current, (e) => {
			this.root.customAnchorNode.current = e;
		}), this.floating = up({
			strategy: () => this.opts.strategy.current,
			placement: () => I(this.#a),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...e) => Zf(...e, { animationFrame: this.#t?.current === "always" }),
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		}), cr(() => {
			this.floating.isPositioned && this.opts.onPlaced?.current();
		}), $s(() => this.contentRef.current, (e) => {
			if (!e || !this.opts.enabled.current) return;
			let t = wc(e), n = t.requestAnimationFrame(() => {
				if (this.contentRef.current !== e || !this.opts.enabled.current) return;
				let n = t.getComputedStyle(e).zIndex;
				n !== this.contentZIndex && (this.contentZIndex = n);
			});
			return () => {
				t.cancelAnimationFrame(n);
			};
		}), cr(() => {
			this.floating.floating.current = this.wrapperRef.current;
		});
	}
}, vp = class e {
	static create(t, n = !1) {
		return n ? new e(t, hp.get()) : new e(t, pp.get());
	}
	opts;
	root;
	constructor(e, t) {
		this.opts = e, this.root = t, e.virtualEl && e.virtualEl.current ? t.triggerNode = is(e.virtualEl.current) : t.triggerNode = e.ref;
	}
};
function yp(e) {
	return {
		name: "transformOrigin",
		options: e,
		fn(t) {
			let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = bp(n), u = {
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
function bp(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
function xp(e) {
	return bp(e)[0];
}
function Sp(e) {
	return bp(e)[1];
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer.svelte
function Cp(e, t) {
	E(t, !0);
	let n = K(t, "tooltip", 3, !1);
	gp.create(n());
	var r = z();
	H(N(r), () => t.children ?? x), B(e, r), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-anchor.svelte
function wp(e, t) {
	E(t, !0);
	let n = K(t, "tooltip", 3, !1);
	vp.create({
		id: q(() => t.id),
		virtualEl: q(() => t.virtualEl),
		ref: t.ref
	}, n());
	var r = z();
	H(N(r), () => t.children ?? x), B(e, r), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content.svelte
function Tp(e, t) {
	E(t, !0);
	let n = K(t, "side", 3, "bottom"), r = K(t, "sideOffset", 3, 0), i = K(t, "align", 3, "center"), a = K(t, "alignOffset", 3, 0), o = K(t, "arrowPadding", 3, 0), s = K(t, "avoidCollisions", 3, !0), c = K(t, "collisionBoundary", 19, () => []), l = K(t, "collisionPadding", 3, 0), u = K(t, "hideWhenDetached", 3, !1), d = K(t, "onPlaced", 3, () => {}), f = K(t, "sticky", 3, "partial"), p = K(t, "updatePositionStrategy", 3, "optimized"), m = K(t, "strategy", 3, "fixed"), h = K(t, "dir", 3, "ltr"), g = K(t, "style", 19, () => ({})), _ = K(t, "wrapperId", 19, bu), v = K(t, "customAnchor", 3, null), y = K(t, "tooltip", 3, !1), b = _p.create({
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
	}, y()), ee = /* @__PURE__ */ O(() => Bs(b.wrapperProps, { style: { pointerEvents: "auto" } }));
	var te = z();
	H(N(te), () => t.content ?? x, () => ({
		props: b.props,
		wrapperProps: I(ee)
	})), B(e, te), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content-static.svelte
function Ep(e, t) {
	E(t, !0), eo(() => {
		t.onPlaced?.();
	});
	var n = z();
	H(N(n), () => t.content ?? x, () => ({
		props: {},
		wrapperProps: {}
	})), B(e, n), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/separator/separator.svelte.js
var Dp = Fc({
	component: "separator",
	parts: ["root"]
}), Op = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = Dc(e.ref);
	}
	#e = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		role: this.opts.decorative.current ? "none" : "separator",
		"aria-orientation": this.opts.orientation.current,
		"aria-hidden": kc(this.opts.decorative.current),
		"data-orientation": this.opts.orientation.current,
		[Dp.root]: "",
		...this.attachment
	}));
	get props() {
		return I(this.#e);
	}
	set props(e) {
		j(this.#e, e);
	}
}, kp = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"ref",
	"child",
	"children",
	"decorative",
	"orientation"
]), Ap = /* @__PURE__ */ R("<div><!></div>");
function jp(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "id", 19, () => Jc(n)), i = K(t, "ref", 15, null), a = K(t, "decorative", 3, !1), o = K(t, "orientation", 3, "horizontal"), s = /* @__PURE__ */ W(t, kp), c = Op.create({
		ref: q(() => i(), (e) => i(e)),
		id: q(() => r()),
		decorative: q(() => a()),
		orientation: q(() => o())
	}), l = /* @__PURE__ */ O(() => Bs(s, c.props));
	var u = z(), d = N(u), f = (e) => {
		var n = z();
		H(N(n), () => t.child, () => ({ props: I(l) })), B(e, n);
	}, p = (e) => {
		var n = Ap();
		U(n, () => ({ ...I(l) })), H(M(n), () => t.children ?? x), T(n), B(e, n);
	};
	V(d, (e) => {
		t.child ? e(f) : e(p, -1);
	}), B(e, u), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-content.svelte
var Mp = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"content",
	"isStatic",
	"onPlaced"
]);
function Np(e, t) {
	let n = K(t, "isStatic", 3, !1), r = /* @__PURE__ */ W(t, Mp);
	var i = z(), a = N(i), o = (e) => {
		Ep(e, {
			get content() {
				return t.content;
			},
			get onPlaced() {
				return t.onPlaced;
			}
		});
	}, s = (e) => {
		Tp(e, G({
			get content() {
				return t.content;
			},
			get onPlaced() {
				return t.onPlaced;
			}
		}, () => r));
	};
	V(a, (e) => {
		n() ? e(o) : e(s, -1);
	}), B(e, i);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-inner.svelte
var Pp = new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled.ref.tooltip.contentPointerEvents".split(".")), Fp = /* @__PURE__ */ R("<!> <!>", 1);
function Ip(e, t) {
	E(t, !0);
	let n = K(t, "interactOutsideBehavior", 3, "close"), r = K(t, "trapFocus", 3, !0), i = K(t, "isValidEvent", 3, () => !1), a = K(t, "customAnchor", 3, null), o = K(t, "isStatic", 3, !1), s = K(t, "tooltip", 3, !1), c = K(t, "contentPointerEvents", 3, "auto"), l = /* @__PURE__ */ W(t, Pp), u = /* @__PURE__ */ O(() => t.preventScroll ?? !0), d = /* @__PURE__ */ O(() => t.strategy ?? (I(u) ? "fixed" : "absolute"));
	Np(e, {
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
			return I(d);
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
			var d = Fp(), f = N(d), p = (e) => {
				Mu(e, { get preventScroll() {
					return I(u);
				} });
			}, m = (e) => {
				Mu(e, { get preventScroll() {
					return I(u);
				} });
			};
			V(f, (e) => {
				t.forceMount && t.enabled ? e(p) : t.forceMount || e(m, 1);
			}), fu(P(f, 2), {
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
					lu(e, {
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
							ou(e, {
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
									yu(e, {
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
											var i = z(), u = N(i);
											{
												let e = /* @__PURE__ */ O(() => ({
													props: Bs(l, o(), r(), a(), { style: { pointerEvents: c() } }),
													wrapperProps: s()
												}));
												H(u, () => t.popper ?? x, () => I(e));
											}
											B(e, i);
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
			}), B(e, d);
		},
		$$slots: { content: !0 }
	}), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer.svelte
var Lp = new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.popper.open.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.ref.shouldRender".split("."));
function Rp(e, t) {
	let n = K(t, "interactOutsideBehavior", 3, "close"), r = K(t, "trapFocus", 3, !0), i = K(t, "isValidEvent", 3, () => !1), a = K(t, "customAnchor", 3, null), o = K(t, "isStatic", 3, !1), s = /* @__PURE__ */ W(t, Lp);
	var c = z(), l = N(c), u = (e) => {
		Ip(e, G({
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
	V(l, (e) => {
		t.shouldRender && e(u);
	}), B(e, c);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-force-mount.svelte
var zp = new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled".split("."));
function Bp(e, t) {
	let n = K(t, "interactOutsideBehavior", 3, "close"), r = K(t, "trapFocus", 3, !0), i = K(t, "isValidEvent", 3, () => !1), a = K(t, "customAnchor", 3, null), o = K(t, "isStatic", 3, !1), s = /* @__PURE__ */ W(t, zp);
	Ip(e, G({
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
function Vp(e, t) {
	E(t, !0);
	let n = K(t, "mounted", 15, !1), r = K(t, "onMountedChange", 3, qc);
	dc(() => (n(!0), r()(!0), () => {
		n(!1), r()(!1);
	})), D();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/safe-polygon.svelte.js
function Hp(e, t) {
	let [n, r] = e, i = !1, a = t.length;
	for (let e = 0, o = a - 1; e < a; o = e++) {
		let [a, s] = t[e] ?? [0, 0], [c, l] = t[o] ?? [0, 0];
		s >= r != l >= r && n <= (c - a) * (r - s) / (l - s) + a && (i = !i);
	}
	return i;
}
function Up(e, t) {
	return e[0] >= t.left && e[0] <= t.right && e[1] >= t.top && e[1] <= t.bottom;
}
function Wp(e, t) {
	let n = e.left + e.width / 2, r = e.top + e.height / 2, i = t.left + t.width / 2, a = t.top + t.height / 2, o = i - n, s = a - r;
	return Math.abs(o) > Math.abs(s) ? o > 0 ? "right" : "left" : s > 0 ? "bottom" : "top";
}
var Gp = class {
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
		this.#n = typeof t == "number" && t > 0 ? t : null, $s([
			e.triggerNode,
			e.contentNode,
			e.enabled
		], ([e, t, n]) => {
			if (!e || !t || !n) {
				this.#o = null, this.#m();
				return;
			}
			return this.#o && this.#o !== e && this.#m(), this.#o = e, [
				xi(Cc(e), "pointermove", (n) => {
					this.#p([n.clientX, n.clientY], e, t);
				}),
				xi(e, "pointerleave", (e) => {
					let n = e.relatedTarget;
					if (Bc(n) && t.contains(n)) return;
					let r = this.#e.ignoredTargets?.() ?? [];
					Bc(n) && r.some((e) => e === n || e.contains(n)) || (this.#a = Bc(n) && r.length > 0 ? r.filter((e) => n.contains(e)) : [], this.#r = [e.clientX, e.clientY], this.#i = "content", this.#u());
				}),
				xi(e, "pointerenter", () => {
					this.#m();
				}),
				xi(t, "pointerenter", () => {
					this.#m();
				}),
				xi(t, "pointerleave", (t) => {
					let n = t.relatedTarget;
					Bc(n) && e.contains(n) || (this.#r = [t.clientX, t.clientY], this.#i = "trigger", this.#u());
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
		if (this.#i === "content" && Up(e, i)) {
			this.#m();
			return;
		}
		if (this.#i === "trigger" && Up(e, r)) {
			this.#m();
			return;
		}
		if (this.#i === "content" && this.#a.length > 0) for (let t of this.#a) {
			let n = t.getBoundingClientRect();
			if (Up(e, n)) return;
			let i = Wp(r, n), a = this.#h(r, n, i);
			if (a && Hp(e, a)) return;
		}
		let a = Wp(r, i), o = this.#h(r, i, a);
		if (o && Hp(e, o)) return;
		let s = this.#i === "content" ? i : r;
		Hp(e, this.#g(this.#r, s, a, this.#i)) || (this.#m(), this.#e.onPointerExit());
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
};
//#endregion
//#region node_modules/bits-ui/dist/bits/dialog/components/dialog.svelte
function Kp(e, t) {
	E(t, !0);
	let n = K(t, "open", 15, !1), r = K(t, "onOpenChange", 3, qc), i = K(t, "onOpenChangeComplete", 3, qc);
	Zc.create({
		variant: q(() => "dialog"),
		open: q(() => n(), (e) => {
			n(e), r()(e);
		}),
		onOpenChangeComplete: q(() => i())
	});
	var a = z();
	H(N(a), () => t.children ?? x), B(e, a), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/dialog/components/dialog-close.svelte
var qp = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children",
	"child",
	"id",
	"ref",
	"disabled"
]), Jp = /* @__PURE__ */ R("<button><!></button>");
function Yp(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "id", 19, () => Jc(n)), i = K(t, "ref", 15, null), a = K(t, "disabled", 3, !1), o = /* @__PURE__ */ W(t, qp), s = $c.create({
		variant: q(() => "close"),
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e)),
		disabled: q(() => !!a())
	}), c = /* @__PURE__ */ O(() => Bs(o, s.props));
	var l = z(), u = N(l), d = (e) => {
		var n = z();
		H(N(n), () => t.child, () => ({ props: I(c) })), B(e, n);
	}, f = (e) => {
		var n = Jp();
		U(n, () => ({ ...I(c) })), H(M(n), () => t.children ?? x), T(n), B(e, n);
	};
	V(u, (e) => {
		t.child ? e(d) : e(f, -1);
	}), B(e, l), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/dialog/components/dialog-content.svelte
var Xp = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"children",
	"child",
	"ref",
	"forceMount",
	"onCloseAutoFocus",
	"onOpenAutoFocus",
	"onEscapeKeydown",
	"onInteractOutside",
	"trapFocus",
	"preventScroll",
	"restoreScrollDelay"
]), Zp = /* @__PURE__ */ R("<!> <!>", 1), Qp = /* @__PURE__ */ R("<!> <div><!></div>", 1);
function $p(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "id", 19, () => Jc(n)), i = K(t, "ref", 15, null), a = K(t, "forceMount", 3, !1), o = K(t, "onCloseAutoFocus", 3, qc), s = K(t, "onOpenAutoFocus", 3, qc), c = K(t, "onEscapeKeydown", 3, qc), l = K(t, "onInteractOutside", 3, qc), u = K(t, "trapFocus", 3, !0), d = K(t, "preventScroll", 3, !0), f = K(t, "restoreScrollDelay", 3, null), p = /* @__PURE__ */ W(t, Xp), m = nl.create({
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e))
	}), h = /* @__PURE__ */ O(() => Bs(p, m.props));
	var g = z(), _ = N(g), v = (e) => {
		fu(e, {
			get ref() {
				return m.opts.ref;
			},
			loop: !0,
			get trapFocus() {
				return u();
			},
			get enabled() {
				return m.root.opts.open.current;
			},
			get onOpenAutoFocus() {
				return s();
			},
			get onCloseAutoFocus() {
				return o();
			},
			focusScope: (e, n) => {
				let r = () => n?.().props;
				lu(e, G(() => I(h), {
					get enabled() {
						return m.root.opts.open.current;
					},
					get ref() {
						return m.opts.ref;
					},
					onEscapeKeydown: (e) => {
						c()(e), !e.defaultPrevented && m.root.handleClose();
					},
					children: (e, n) => {
						ou(e, G(() => I(h), {
							get ref() {
								return m.opts.ref;
							},
							get enabled() {
								return m.root.opts.open.current;
							},
							onInteractOutside: (e) => {
								l()(e), !e.defaultPrevented && m.root.handleClose();
							},
							children: (e, n) => {
								yu(e, G(() => I(h), {
									get ref() {
										return m.opts.ref;
									},
									get enabled() {
										return m.root.opts.open.current;
									},
									children: (e, n) => {
										var i = z(), a = N(i), o = (e) => {
											var n = Zp(), i = N(n), a = (e) => {
												Mu(e, {
													get preventScroll() {
														return d();
													},
													get restoreScrollDelay() {
														return f();
													}
												});
											};
											V(i, (e) => {
												m.root.opts.open.current && e(a);
											});
											var o = P(i, 2);
											{
												let e = /* @__PURE__ */ O(() => ({
													props: Bs(I(h), r()),
													...m.snippetProps
												}));
												H(o, () => t.child, () => I(e));
											}
											B(e, n);
										}, s = (e) => {
											var n = Qp(), i = N(n);
											Mu(i, { get preventScroll() {
												return d();
											} });
											var a = P(i, 2);
											U(a, (e) => ({ ...e }), [() => Bs(I(h), r())]), H(M(a), () => t.children ?? x), T(a), B(e, n);
										};
										V(a, (e) => {
											t.child ? e(o) : e(s, -1);
										}), B(e, i);
									},
									$$slots: { default: !0 }
								}));
							},
							$$slots: { default: !0 }
						}));
					},
					$$slots: { default: !0 }
				}));
			},
			$$slots: { focusScope: !0 }
		});
	};
	V(_, (e) => {
		(m.shouldRender || a()) && e(v);
	}), B(e, g), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/label/label.svelte.js
var em = Fc({
	component: "label",
	parts: ["root"]
}), tm = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = Dc(this.opts.ref), this.onmousedown = this.onmousedown.bind(this);
	}
	onmousedown(e) {
		e.detail > 1 && e.preventDefault();
	}
	#e = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		[em.root]: "",
		onmousedown: this.onmousedown,
		...this.attachment
	}));
	get props() {
		return I(this.#e);
	}
	set props(e) {
		j(this.#e, e);
	}
}, nm = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children",
	"child",
	"id",
	"ref",
	"for"
]), rm = /* @__PURE__ */ R("<label><!></label>");
function im(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "id", 19, () => Jc(n)), i = K(t, "ref", 15, null), a = /* @__PURE__ */ W(t, nm), o = tm.create({
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e))
	}), s = /* @__PURE__ */ O(() => Bs(a, o.props, { for: t.for }));
	var c = z(), l = N(c), u = (e) => {
		var n = z();
		H(N(n), () => t.child, () => ({ props: I(s) })), B(e, n);
	}, d = (e) => {
		var n = rm();
		U(n, () => ({
			...I(s),
			for: t.for
		})), H(M(n), () => t.children ?? x), T(n), B(e, n);
	};
	V(l, (e) => {
		t.child ? e(u) : e(d, -1);
	}), B(e, c), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/link-preview.svelte.js
var am = Fc({
	component: "link-preview",
	parts: ["content", "trigger"]
}), om = new Ys("LinkPreview.Root"), sm = class e {
	static create(t) {
		return om.set(new e(t));
	}
	opts;
	#e = /* @__PURE__ */ A(!1);
	get hasSelection() {
		return I(this.#e);
	}
	set hasSelection(e) {
		j(this.#e, e, !0);
	}
	#t = /* @__PURE__ */ A(!1);
	get isPointerDownOnContent() {
		return I(this.#t);
	}
	set isPointerDownOnContent(e) {
		j(this.#t, e, !0);
	}
	#n = /* @__PURE__ */ A(!1);
	get containsSelection() {
		return I(this.#n);
	}
	set containsSelection(e) {
		j(this.#n, e, !0);
	}
	timeout = null;
	#r = /* @__PURE__ */ A(null);
	get contentNode() {
		return I(this.#r);
	}
	set contentNode(e) {
		j(this.#r, e, !0);
	}
	#i = /* @__PURE__ */ A(!1);
	get contentMounted() {
		return I(this.#i);
	}
	set contentMounted(e) {
		j(this.#i, e, !0);
	}
	contentPresence;
	#a = /* @__PURE__ */ A(null);
	get triggerNode() {
		return I(this.#a);
	}
	set triggerNode(e) {
		j(this.#a, e, !0);
	}
	isOpening = !1;
	domContext = new Ec(() => null);
	constructor(e) {
		this.opts = e, this.contentPresence = new Kc({
			ref: q(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		}), $s(() => this.opts.open.current, (e) => {
			if (!e) {
				this.hasSelection = !1;
				return;
			}
			if (!this.domContext) return;
			let t = xi(this.domContext.getDocument(), "pointerup", () => {
				this.containsSelection = !1, this.isPointerDownOnContent = !1, fc(1, () => {
					this.domContext.getDocument().getSelection()?.toString() === "" ? this.hasSelection = !1 : this.hasSelection = !0;
				});
			});
			if (!this.contentNode) return;
			let n = bl(this.contentNode);
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
}, cm = class e {
	static create(t) {
		return new e(t, om.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Dc(this.opts.ref, (e) => this.root.triggerNode = e), this.root.domContext = new Ec(e.ref), this.onpointerenter = this.onpointerenter.bind(this), this.onpointerleave = this.onpointerleave.bind(this), this.onfocus = this.onfocus.bind(this), this.onblur = this.onblur.bind(this);
	}
	onpointerenter(e) {
		Hc(e) || this.root.handleOpen();
	}
	onpointerleave(e) {
		Hc(e) || (!this.root.contentMounted || !this.root.opts.open.current) && this.root.immediateClose();
	}
	onfocus(e) {
		Uc(e.currentTarget) && this.root.handleOpen();
	}
	onblur(e) {
		this.root.handleClose();
	}
	#e = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		"aria-haspopup": "dialog",
		"aria-expanded": Oc(this.root.opts.open.current),
		"data-state": Mc(this.root.opts.open.current),
		"aria-controls": this.root.contentNode?.id,
		role: "button",
		[am.trigger]: "",
		onpointerenter: this.onpointerenter,
		onfocus: this.onfocus,
		onblur: this.onblur,
		onpointerleave: this.onpointerleave,
		...this.attachment
	}));
	get props() {
		return I(this.#e);
	}
	set props(e) {
		j(this.#e, e);
	}
}, lm = class e {
	static create(t) {
		return new e(t, om.get());
	}
	opts;
	root;
	attachment;
	constructor(e, t) {
		this.opts = e, this.root = t, this.attachment = Dc(this.opts.ref, (e) => this.root.contentNode = e), this.root.domContext = new Ec(e.ref), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerenter = this.onpointerenter.bind(this), this.onfocusout = this.onfocusout.bind(this), new Gp({
			triggerNode: () => this.root.triggerNode,
			contentNode: () => this.opts.ref.current,
			enabled: () => this.root.opts.open.current,
			onPointerExit: () => {
				this.root.handleClose();
			}
		}), uc(() => {
			this.root.clearTimeout();
		});
	}
	onpointerdown(e) {
		let t = e.target;
		Bc(t) && (e.currentTarget.contains(t) && (this.root.containsSelection = !0), this.root.hasSelection = !0, this.root.isPointerDownOnContent = !0);
	}
	onpointerenter(e) {
		Hc(e) || this.root.handleOpen();
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
	#e = /* @__PURE__ */ O(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return I(this.#e);
	}
	set snippetProps(e) {
		j(this.#e, e);
	}
	#t = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		tabindex: -1,
		"data-state": Mc(this.root.opts.open.current),
		...Nc(this.root.contentPresence.transitionStatus),
		[am.content]: "",
		onpointerdown: this.onpointerdown,
		onpointerenter: this.onpointerenter,
		onfocusout: this.onfocusout,
		...this.attachment
	}));
	get props() {
		return I(this.#t);
	}
	set props(e) {
		j(this.#t, e);
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
function um(e, t) {
	E(t, !0);
	let n = K(t, "disabled", 3, !1), r = K(t, "open", 15, !1), i = K(t, "onOpenChange", 3, qc), a = K(t, "onOpenChangeComplete", 3, qc), o = K(t, "openDelay", 3, 700), s = K(t, "closeDelay", 3, 300);
	sm.create({
		disabled: q(() => n()),
		open: q(() => r(), (e) => {
			r(e), i()(e);
		}),
		openDelay: q(() => o()),
		closeDelay: q(() => s()),
		onOpenChangeComplete: q(() => a())
	});
	var c = z();
	ta(N(c), () => Cp, (e, n) => {
		n(e, {
			children: (e, n) => {
				var r = z();
				H(N(r), () => t.children ?? x), B(e, r);
			},
			$$slots: { default: !0 }
		});
	}), B(e, c), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview-content.svelte
var dm = new Set([
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
]), fm = /* @__PURE__ */ R("<div><div><!></div></div>"), pm = /* @__PURE__ */ R("<!> <!>", 1);
function mm(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "id", 19, () => Jc(n)), i = K(t, "ref", 15, null), a = K(t, "side", 3, "top"), o = K(t, "sideOffset", 3, 0), s = K(t, "align", 3, "center"), c = K(t, "avoidCollisions", 3, !0), l = K(t, "arrowPadding", 3, 0), u = K(t, "sticky", 3, "partial"), d = K(t, "hideWhenDetached", 3, !1), f = K(t, "collisionPadding", 3, 0), p = K(t, "onInteractOutside", 3, qc), m = K(t, "onEscapeKeydown", 3, qc), h = K(t, "forceMount", 3, !1), g = /* @__PURE__ */ W(t, dm), _ = lm.create({
		id: q(() => r()),
		ref: q(() => i(), (e) => i(e)),
		onInteractOutside: q(() => p()),
		onEscapeKeydown: q(() => m())
	}), v = /* @__PURE__ */ O(() => ({
		side: a(),
		sideOffset: o(),
		align: s(),
		avoidCollisions: c(),
		arrowPadding: l(),
		sticky: u(),
		hideWhenDetached: d(),
		collisionPadding: f()
	})), y = /* @__PURE__ */ O(() => Bs(g, I(v), _.props));
	var b = z(), ee = N(b), te = (e) => {
		Bp(e, G(() => I(y), () => _.popperProps, {
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
				let r = () => n?.().props, i = () => n?.().wrapperProps, a = /* @__PURE__ */ O(() => Bs(r(), { style: lp("link-preview") }, { style: t.style }));
				var o = pm(), s = N(o), c = (e) => {
					var n = z(), r = N(n);
					{
						let e = /* @__PURE__ */ O(() => ({
							props: I(a),
							wrapperProps: i(),
							..._.snippetProps
						}));
						H(r, () => t.child, () => I(e));
					}
					B(e, n);
				}, l = (e) => {
					var n = fm();
					U(n, () => ({ ...i() }));
					var r = M(n);
					U(r, () => ({ ...I(a) })), H(M(r), () => t.children ?? x), T(r), T(n), B(e, n);
				};
				V(s, (e) => {
					t.child ? e(c) : e(l, -1);
				}), Vp(P(s, 2), {
					get mounted() {
						return _.root.contentMounted;
					},
					set mounted(e) {
						_.root.contentMounted = e;
					}
				}), B(e, o);
			},
			$$slots: { popper: !0 }
		}));
	}, S = (e) => {
		Rp(e, G(() => I(y), () => _.popperProps, {
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
				let r = () => n?.().props, i = () => n?.().wrapperProps, a = /* @__PURE__ */ O(() => Bs(r(), { style: lp("link-preview") }, { style: t.style }));
				var o = pm(), s = N(o), c = (e) => {
					var n = z(), r = N(n);
					{
						let e = /* @__PURE__ */ O(() => ({
							props: I(a),
							wrapperProps: i(),
							..._.snippetProps
						}));
						H(r, () => t.child, () => I(e));
					}
					B(e, n);
				}, l = (e) => {
					var n = fm();
					U(n, () => ({ ...i() }));
					var r = M(n);
					U(r, () => ({ ...I(a) })), H(M(r), () => t.children ?? x), T(r), T(n), B(e, n);
				};
				V(s, (e) => {
					t.child ? e(c) : e(l, -1);
				}), Vp(P(s, 2), {
					get mounted() {
						return _.root.contentMounted;
					},
					set mounted(e) {
						_.root.contentMounted = e;
					}
				}), B(e, o);
			},
			$$slots: { popper: !0 }
		}));
	};
	V(ee, (e) => {
		h() ? e(te) : h() || e(S, 1);
	}), B(e, b), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview-trigger.svelte
var hm = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"id",
	"child",
	"children"
]), gm = /* @__PURE__ */ R("<a><!></a>");
function _m(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "ref", 15, null), i = K(t, "id", 19, () => Jc(n)), a = /* @__PURE__ */ W(t, hm), o = cm.create({
		id: q(() => i()),
		ref: q(() => r(), (e) => r(e))
	}), s = /* @__PURE__ */ O(() => Bs(a, o.props));
	var c = z();
	ta(N(c), () => wp, (e, n) => {
		n(e, {
			get id() {
				return i();
			},
			get ref() {
				return o.opts.ref;
			},
			children: (e, n) => {
				var r = z(), i = N(r), a = (e) => {
					var n = z();
					H(N(n), () => t.child, () => ({ props: I(s) })), B(e, n);
				}, o = (e) => {
					var n = gm();
					U(n, () => ({ ...I(s) })), H(M(n), () => t.children ?? x), T(n), B(e, n);
				};
				V(i, (e) => {
					t.child ? e(a) : e(o, -1);
				}), B(e, r);
			},
			$$slots: { default: !0 }
		});
	}), B(e, c), D();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/toggle/toggle.svelte.js
var vm = Fc({
	component: "toggle",
	parts: ["root"]
}), ym = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = Dc(this.opts.ref), this.onclick = this.onclick.bind(this);
	}
	onclick(e) {
		this.opts.disabled.current || (this.opts.pressed.current = !this.opts.pressed.current);
	}
	#e = /* @__PURE__ */ O(() => ({ pressed: this.opts.pressed.current }));
	get snippetProps() {
		return I(this.#e);
	}
	set snippetProps(e) {
		j(this.#e, e);
	}
	#t = /* @__PURE__ */ O(() => ({
		[vm.root]: "",
		id: this.opts.id.current,
		"data-disabled": Ac(this.opts.disabled.current),
		"aria-pressed": Oc(this.opts.pressed.current),
		"data-state": bm(this.opts.pressed.current),
		disabled: jc(this.opts.disabled.current),
		onclick: this.onclick,
		...this.attachment
	}));
	get props() {
		return I(this.#t);
	}
	set props(e) {
		j(this.#t, e);
	}
};
function bm(e) {
	return e ? "on" : "off";
}
//#endregion
//#region node_modules/bits-ui/dist/bits/toggle/components/toggle.svelte
var xm = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"id",
	"pressed",
	"onPressedChange",
	"disabled",
	"type",
	"children",
	"child"
]), Sm = /* @__PURE__ */ R("<button><!></button>");
function Cm(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "ref", 15, null), i = K(t, "id", 19, () => Jc(n)), a = K(t, "pressed", 15, !1), o = K(t, "onPressedChange", 3, qc), s = K(t, "disabled", 3, !1), c = K(t, "type", 3, "button"), l = /* @__PURE__ */ W(t, xm), u = ym.create({
		pressed: q(() => a(), (e) => {
			a(e), o()(e);
		}),
		disabled: q(() => s() ?? !1),
		id: q(() => i()),
		ref: q(() => r(), (e) => r(e))
	}), d = /* @__PURE__ */ O(() => Bs(l, u.props, { type: c() }));
	var f = z(), p = N(f), m = (e) => {
		var n = z(), r = N(n);
		{
			let e = /* @__PURE__ */ O(() => ({
				props: I(d),
				...u.snippetProps
			}));
			H(r, () => t.child, () => I(e));
		}
		B(e, n);
	}, h = (e) => {
		var n = Sm();
		U(n, () => ({ ...I(d) })), H(M(n), () => t.children ?? x, () => u.snippetProps), T(n), B(e, n);
	};
	V(p, (e) => {
		t.child ? e(m) : e(h, -1);
	}), B(e, f), D();
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var wm = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, Tm = (e, t) => ({
	classGroupId: e,
	validator: t
}), Em = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), Dm = "-", Om = [], km = "arbitrary..", Am = (e) => {
	let t = Nm(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Mm(e);
			let n = e.split(Dm);
			return jm(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? wm(i, t) : t : i || Om;
			}
			return n[e] || Om;
		}
	};
}, jm = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = jm(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(Dm) : e.slice(t).join(Dm), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Mm = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? km + r : void 0;
})(), Nm = (e) => {
	let { theme: t, classGroups: n } = e;
	return Pm(n, t);
}, Pm = (e, t) => {
	let n = Em();
	for (let r in e) {
		let i = e[r];
		Fm(i, n, r, t);
	}
	return n;
}, Fm = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Im(i, t, n, r);
	}
}, Im = (e, t, n, r) => {
	if (typeof e == "string") {
		Lm(e, t, n);
		return;
	}
	if (typeof e == "function") {
		Rm(e, t, n, r);
		return;
	}
	zm(e, t, n, r);
}, Lm = (e, t, n) => {
	let r = e === "" ? t : Bm(t, e);
	r.classGroupId = n;
}, Rm = (e, t, n, r) => {
	if (Vm(e)) {
		Fm(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(Tm(n, e));
}, zm = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Fm(o, Bm(t, a), n, r);
	}
}, Bm = (e, t) => {
	let n = e, r = t.split(Dm), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Em(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Vm = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Hm = (e) => {
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
}, Um = "!", Wm = ":", Gm = [], Km = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), qm = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Wm) {
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
		s.endsWith(Um) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Um) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Km(t, l, c, u);
	};
	if (t) {
		let e = t + Wm, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Km(Gm, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, Jm = (e) => {
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
}, Ym = (e) => ({
	cache: Hm(e.cacheSize),
	parseClassName: qm(e),
	sortModifiers: Jm(e),
	postfixLookupClassGroupIds: Xm(e),
	...Am(e)
}), Xm = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, Zm = /\s+/, Qm = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(Zm), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + Um : _, y = v + g;
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
}, $m = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = eh(n)) && (i && (i += " "), i += r);
	return i;
}, eh = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = eh(e[r])) && (n && (n += " "), n += t);
	return n;
}, th = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = Ym(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = Qm(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a($m(...e));
}, nh = [], rh = (e) => {
	let t = (t) => t[e] || nh;
	return t.isThemeGetter = !0, t;
}, ih = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ah = /^\((?:(\w[\w-]*):)?(.+)\)$/i, oh = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, sh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ch = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, lh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, uh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, dh = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, fh = (e) => oh.test(e), ph = (e) => !!e && !Number.isNaN(Number(e)), mh = (e) => !!e && Number.isInteger(Number(e)), hh = (e) => e.endsWith("%") && ph(e.slice(0, -1)), gh = (e) => sh.test(e), _h = () => !0, vh = (e) => ch.test(e) && !lh.test(e), yh = () => !1, bh = (e) => uh.test(e), xh = (e) => dh.test(e), Sh = (e) => !J(e) && !Y(e), Ch = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), wh = (e) => zh(e, Uh, yh), J = (e) => ih.test(e), Th = (e) => zh(e, Wh, vh), Eh = (e) => zh(e, Gh, ph), Dh = (e) => zh(e, qh, _h), Oh = (e) => zh(e, Kh, yh), kh = (e) => zh(e, Vh, yh), Ah = (e) => zh(e, Hh, xh), jh = (e) => zh(e, Jh, bh), Y = (e) => ah.test(e), Mh = (e) => Bh(e, Wh), Nh = (e) => Bh(e, Kh), Ph = (e) => Bh(e, Vh), Fh = (e) => Bh(e, Uh), Ih = (e) => Bh(e, Hh), Lh = (e) => Bh(e, Jh, !0), Rh = (e) => Bh(e, qh, !0), zh = (e, t, n) => {
	let r = ih.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Bh = (e, t, n = !1) => {
	let r = ah.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Vh = (e) => e === "position" || e === "percentage", Hh = (e) => e === "image" || e === "url", Uh = (e) => e === "length" || e === "size" || e === "bg-size", Wh = (e) => e === "length", Gh = (e) => e === "number", Kh = (e) => e === "family-name", qh = (e) => e === "number" || e === "weight", Jh = (e) => e === "shadow", Yh = () => {
	let e = rh("color"), t = rh("font"), n = rh("text"), r = rh("font-weight"), i = rh("tracking"), a = rh("leading"), o = rh("breakpoint"), s = rh("container"), c = rh("spacing"), l = rh("radius"), u = rh("shadow"), d = rh("inset-shadow"), f = rh("text-shadow"), p = rh("drop-shadow"), m = rh("blur"), h = rh("perspective"), g = rh("aspect"), _ = rh("ease"), v = rh("animate"), y = () => [
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
		Y,
		J
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
		Y,
		J,
		c
	], ne = () => [
		fh,
		"full",
		"auto",
		...S()
	], re = () => [
		mh,
		"none",
		"subgrid",
		Y,
		J
	], ie = () => [
		"auto",
		{ span: [
			"full",
			mh,
			Y,
			J
		] },
		mh,
		Y,
		J
	], ae = () => [
		mh,
		"auto",
		Y,
		J
	], oe = () => [
		"auto",
		"min",
		"max",
		"fr",
		Y,
		J
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
		fh,
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
		fh,
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
		fh,
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
		Y,
		J
	], pe = () => [
		...b(),
		Ph,
		kh,
		{ position: [Y, J] }
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
		Fh,
		wh,
		{ size: [Y, J] }
	], ge = () => [
		hh,
		Mh,
		Th
	], _e = () => [
		"",
		"none",
		"full",
		l,
		Y,
		J
	], ve = () => [
		"",
		ph,
		Mh,
		Th
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
		ph,
		hh,
		Ph,
		kh
	], Se = () => [
		"",
		"none",
		m,
		Y,
		J
	], Ce = () => [
		"none",
		ph,
		Y,
		J
	], we = () => [
		"none",
		ph,
		Y,
		J
	], Te = () => [
		ph,
		Y,
		J
	], Ee = () => [
		fh,
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
			blur: [gh],
			breakpoint: [gh],
			color: [_h],
			container: [gh],
			"drop-shadow": [gh],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Sh],
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
			"inset-shadow": [gh],
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
			radius: [gh],
			shadow: [gh],
			spacing: ["px", ph],
			text: [gh],
			"text-shadow": [gh],
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
				fh,
				J,
				Y,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				Y,
				J
			] }],
			"container-named": [Ch],
			columns: [{ columns: [
				ph,
				J,
				Y,
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
				mh,
				"auto",
				Y,
				J
			] }],
			basis: [{ basis: [
				fh,
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
				ph,
				fh,
				"auto",
				"initial",
				"none",
				J
			] }],
			grow: [{ grow: [
				"",
				ph,
				Y,
				J
			] }],
			shrink: [{ shrink: [
				"",
				ph,
				Y,
				J
			] }],
			order: [{ order: [
				mh,
				"first",
				"last",
				"none",
				Y,
				J
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
				Mh,
				Th
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Rh,
				Dh
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
				hh,
				J
			] }],
			"font-family": [{ font: [
				Nh,
				Oh,
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
				Y,
				J
			] }],
			"line-clamp": [{ "line-clamp": [
				ph,
				"none",
				Y,
				Eh
			] }],
			leading: [{ leading: [a, ...S()] }],
			"list-image": [{ "list-image": [
				"none",
				Y,
				J
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				Y,
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
				ph,
				"from-font",
				"auto",
				Y,
				Th
			] }],
			"text-decoration-color": [{ decoration: C() }],
			"underline-offset": [{ "underline-offset": [
				ph,
				"auto",
				Y,
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
			indent: [{ indent: S() }],
			"tab-size": [{ tab: [
				mh,
				Y,
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
				Y,
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
				Y,
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
						mh,
						Y,
						J
					],
					radial: [
						"",
						Y,
						J
					],
					conic: [
						mh,
						Y,
						J
					]
				},
				Ih,
				Ah
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
				ph,
				Y,
				J
			] }],
			"outline-w": [{ outline: [
				"",
				ph,
				Mh,
				Th
			] }],
			"outline-color": [{ outline: C() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Lh,
				jh
			] }],
			"shadow-color": [{ shadow: C() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Lh,
				jh
			] }],
			"inset-shadow-color": [{ "inset-shadow": C() }],
			"ring-w": [{ ring: ve() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: C() }],
			"ring-offset-w": [{ "ring-offset": [ph, Th] }],
			"ring-offset-color": [{ "ring-offset": C() }],
			"inset-ring-w": [{ "inset-ring": ve() }],
			"inset-ring-color": [{ "inset-ring": C() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Lh,
				jh
			] }],
			"text-shadow-color": [{ "text-shadow": C() }],
			opacity: [{ opacity: [
				ph,
				Y,
				J
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
			"mask-image-linear-pos": [{ "mask-linear": [ph] }],
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
			"mask-image-radial": [{ "mask-radial": [Y, J] }],
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
			"mask-image-conic-pos": [{ "mask-conic": [ph] }],
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
				Y,
				J
			] }],
			filter: [{ filter: [
				"",
				"none",
				Y,
				J
			] }],
			blur: [{ blur: Se() }],
			brightness: [{ brightness: [
				ph,
				Y,
				J
			] }],
			contrast: [{ contrast: [
				ph,
				Y,
				J
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Lh,
				jh
			] }],
			"drop-shadow-color": [{ "drop-shadow": C() }],
			grayscale: [{ grayscale: [
				"",
				ph,
				Y,
				J
			] }],
			"hue-rotate": [{ "hue-rotate": [
				ph,
				Y,
				J
			] }],
			invert: [{ invert: [
				"",
				ph,
				Y,
				J
			] }],
			saturate: [{ saturate: [
				ph,
				Y,
				J
			] }],
			sepia: [{ sepia: [
				"",
				ph,
				Y,
				J
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Y,
				J
			] }],
			"backdrop-blur": [{ "backdrop-blur": Se() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				ph,
				Y,
				J
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				ph,
				Y,
				J
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				ph,
				Y,
				J
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				ph,
				Y,
				J
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				ph,
				Y,
				J
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				ph,
				Y,
				J
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				ph,
				Y,
				J
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				ph,
				Y,
				J
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
				Y,
				J
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				ph,
				"initial",
				Y,
				J
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				Y,
				J
			] }],
			delay: [{ delay: [
				ph,
				Y,
				J
			] }],
			animate: [{ animate: [
				"none",
				v,
				Y,
				J
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				Y,
				J
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
				Y,
				J,
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
				mh,
				Y,
				J
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
				Y,
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
				Y,
				J
			] }],
			fill: [{ fill: ["none", ...C()] }],
			"stroke-w": [{ stroke: [
				ph,
				Mh,
				Th,
				Eh
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
}, Xh = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (Zh(e, "cacheSize", t), Zh(e, "prefix", n), Zh(e, "experimentalParseClassName", r), Qh(e.theme, a.theme), Qh(e.classGroups, a.classGroups), Qh(e.conflictingClassGroups, a.conflictingClassGroups), Qh(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Zh(e, "postfixLookupClassGroups", a.postfixLookupClassGroups), Zh(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), $h(e.theme, i.theme), $h(e.classGroups, i.classGroups), $h(e.conflictingClassGroups, i.conflictingClassGroups), $h(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), eg(e, i, "postfixLookupClassGroups"), eg(e, i, "orderSensitiveModifiers"), e), Zh = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, Qh = (e, t) => {
	if (t) for (let n in t) Zh(e, n, t[n]);
}, $h = (e, t) => {
	if (t) for (let n in t) eg(e, t, n);
}, eg = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, tg = (e, ...t) => typeof e == "function" ? th(Yh, e, ...t) : th(() => Xh(Yh(), e), ...t), ng = /*#__PURE__*/ th(Yh), X = (...e) => ng(ga(e)), Z = new qs("min-width: 768px"), rg = new qs("min-width: 1024px"), ig = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"loadingStatus",
	"size",
	"class"
]);
function ag(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "loadingStatus", 15, "loading"), i = K(t, "size", 3, "default"), a = /* @__PURE__ */ W(t, ig);
	var o = z(), s = N(o);
	{
		let e = /* @__PURE__ */ O(() => X("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten", t.class));
		ta(s, () => ed, (t, o) => {
			o(t, G({
				"data-slot": "avatar",
				get "data-size"() {
					return i();
				},
				get class() {
					return I(e);
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
	B(e, o), D();
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-image.svelte
var og = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class"
]);
function sg(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, og);
	var i = z(), a = N(i);
	{
		let e = /* @__PURE__ */ O(() => X("rounded-full aspect-square size-full object-cover", t.class));
		ta(a, () => rd, (t, i) => {
			i(t, G({
				"data-slot": "avatar-image",
				get class() {
					return I(e);
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
	B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-fallback.svelte
var cg = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class"
]);
function lg(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, cg);
	var i = z(), a = N(i);
	{
		let e = /* @__PURE__ */ O(() => X("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", t.class));
		ta(a, () => od, (t, i) => {
			i(t, G({
				"data-slot": "avatar-fallback",
				get class() {
					return I(e);
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
	B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-badge.svelte
var ug = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]), dg = /* @__PURE__ */ R("<span><!></span>");
function fg(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, ug);
	var i = dg();
	U(i, (e) => ({
		"data-slot": "avatar-badge",
		class: e,
		...r
	}), [() => X("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", t.class)]), H(M(i), () => t.children ?? x), T(i), Ya(i, (e) => n(e), () => n()), B(e, i), D();
}
//#endregion
//#region src/shared/components/common/ChannelAvatar.svelte
var pg = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"class",
	"imgSrc",
	"isConnected"
]), mg = /* @__PURE__ */ R("<!> <!> <!>", 1), hg = /* @__PURE__ */ R("<div><!></div>");
function gg(e, t) {
	E(t, !0);
	let n = /* @__PURE__ */ W(t, pg), r = /* @__PURE__ */ O(() => t.isConnected ? "Socket: Connected" : "Socket: Disconnected");
	var i = hg();
	U(i, (e) => ({
		class: e,
		...n
	}), [() => X("", t.class)]);
	var a = M(i);
	{
		let e = /* @__PURE__ */ O(() => Z.current ? "default" : "sm");
		ag(a, {
			get size() {
				return I(e);
			},
			class: "rounded-lg",
			children: (e, n) => {
				var i = mg(), a = N(i);
				sg(a, {
					get src() {
						return t.imgSrc;
					},
					alt: "Channel Logo"
				});
				var o = P(a, 2), s = (e) => {
					{
						let n = /* @__PURE__ */ O(() => X(t.isConnected ? "bg-green-500" : "bg-red-500"));
						fg(e, {
							get title() {
								return I(r);
							},
							get class() {
								return I(n);
							}
						});
					}
				};
				V(o, (e) => {
					typeof t.isConnected == "boolean" && e(s);
				}), lg(P(o, 2), {
					children: (e, t) => {
						Qe(), B(e, Ni("Channel Logo"));
					},
					$$slots: { default: !0 }
				}), B(e, i);
			},
			$$slots: { default: !0 }
		});
	}
	T(i), B(e, i), D();
}
//#endregion
//#region src/shared/components/common/VersionBadge.svelte
var _g = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"appVersion",
	"class"
]), vg = /* @__PURE__ */ R("<div><div class=\"absolute top-[18%] -left-full w-[250%] -rotate-45 bg-primary py-[0.25em] text-center text-[0.5rem] leading-none font-bold antialiased shadow-md md:left-[-75%] md:pr-6 md:text-[0.6rem] md:subpixel-antialiased\"> </div></div>");
function yg(e, t) {
	E(t, !0);
	let n = K(t, "appVersion", 3, "unknown"), r = /* @__PURE__ */ W(t, _g), i = /* @__PURE__ */ O(() => Z.current ? `App Version: ${n()}` : "");
	var a = vg();
	U(a, (e) => ({
		class: e,
		...r
	}), [() => X("relative h-15 w-15 shrink-0 overflow-hidden", t.class)]);
	var o = M(a), s = M(o, !0);
	T(o), T(a), gr(() => {
		za(o, "title", I(i)), Ii(s, n());
	}), B(e, a), D();
}
//#endregion
//#region node_modules/valibot/dist/index.mjs
var bg, xg = {
	lang: void 0,
	message: void 0,
	abortEarly: void 0,
	abortPipeEarly: void 0
};
/* @__NO_SIDE_EFFECTS__ */
function Sg(e) {
	return !e && !bg ? xg : {
		lang: e?.lang ?? bg?.lang,
		message: e?.message,
		abortEarly: e?.abortEarly ?? bg?.abortEarly,
		abortPipeEarly: e?.abortPipeEarly ?? bg?.abortPipeEarly
	};
}
var Cg;
/* @__NO_SIDE_EFFECTS__ */
function wg(e) {
	return Cg?.get(e);
}
var Tg;
/* @__NO_SIDE_EFFECTS__ */
function Eg(e) {
	return Tg?.get(e);
}
var Dg;
/* @__NO_SIDE_EFFECTS__ */
function Og(e, t) {
	return Dg?.get(e)?.get(t);
}
/* @__NO_SIDE_EFFECTS__ */
function kg(e) {
	let t = typeof e;
	return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function Ag(e, t, n, r, i) {
	let a = i && "input" in i ? i.input : n.value, o = i?.expected ?? e.expects ?? null, s = i?.received ?? /* @__PURE__ */ kg(a), c = {
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
	}, l = e.kind === "schema", u = i?.message ?? e.message ?? /* @__PURE__ */ Og(e.reference, c.lang) ?? (l ? /* @__PURE__ */ Eg(c.lang) : null) ?? r.message ?? /* @__PURE__ */ wg(c.lang);
	u !== void 0 && (c.message = typeof u == "function" ? u(c) : u), l && (n.typed = !1), n.issues ? n.issues.push(c) : n.issues = [c];
}
var jg = /* @__PURE__ */ new WeakMap();
/* @__NO_SIDE_EFFECTS__ */
function Mg(e) {
	let t = jg.get(e);
	return t || (t = {
		version: 1,
		vendor: "valibot",
		validate(t) {
			return e["~run"]({ value: t }, /* @__PURE__ */ Sg());
		}
	}, jg.set(e, t)), t;
}
/* @__NO_SIDE_EFFECTS__ */
function Ng(e, t) {
	return {
		kind: "validation",
		type: "max_length",
		reference: Ng,
		async: !1,
		expects: `<=${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && e.value.length > this.requirement && Ag(this, "length", e, t, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Pg(e, t) {
	return {
		kind: "validation",
		type: "min_length",
		reference: Pg,
		async: !1,
		expects: `>=${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && e.value.length < this.requirement && Ag(this, "length", e, t, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Fg(e, t) {
	return {
		kind: "validation",
		type: "regex",
		reference: Fg,
		async: !1,
		expects: `${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && !this.requirement.test(e.value) && Ag(this, "format", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Ig(e) {
	return {
		kind: "schema",
		type: "string",
		reference: Ig,
		expects: "string",
		async: !1,
		message: e,
		get "~standard"() {
			return /* @__PURE__ */ Mg(this);
		},
		"~run"(e, t) {
			return typeof e.value == "string" ? e.typed = !0 : Ag(this, "type", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Lg(...e) {
	return {
		...e[0],
		pipe: e,
		get "~standard"() {
			return /* @__PURE__ */ Mg(this);
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
function Rg(e, t, n) {
	let r = e["~run"]({ value: t }, /* @__PURE__ */ Sg(n));
	return {
		typed: r.typed,
		success: !r.issues,
		output: r.value,
		issues: r.issues
	};
}
//#endregion
//#region node_modules/@hugeicons/core-free-icons/dist/esm/index.min.js
var zg = [
	["path", {
		d: "M6 17.9745C6.1287 19.2829 6.41956 20.1636 7.07691 20.8209C8.25596 22 10.1536 22 13.9489 22C17.7442 22 19.6419 22 20.8209 20.8209C22 19.6419 22 17.7442 22 13.9489C22 10.1536 22 8.25596 20.8209 7.07691C20.1636 6.41956 19.2829 6.1287 17.9745 6",
		stroke: "currentColor",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 13.7712 18 15.6569 16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z",
		stroke: "currentColor",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M2 11.1185C2.61902 11.0398 3.24484 11.001 3.87171 11.0023C6.52365 10.9533 9.11064 11.6763 11.1711 13.0424C13.082 14.3094 14.4247 16.053 15 18",
		stroke: "currentColor",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}],
	["path", {
		d: "M13.125 7H13M13.25 7C13.25 7.13807 13.1381 7.25 13 7.25C12.8619 7.25 12.75 7.13807 12.75 7C12.75 6.86193 12.8619 6.75 13 6.75C13.1381 6.75 13.25 6.86193 13.25 7Z",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeWidth: "1.5",
		key: "3"
	}]
], Bg = [
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
], Vg = [["path", {
	d: "M14.9351 18.7236L17.3928 16.0046C19.335 13.8559 20.3061 12.7816 19.9143 11.8908C19.5225 11 18.0788 11 15.1915 11H15V10C15 8.58579 15 7.87868 14.5607 7.43934C14.1213 7 13.4142 7 12 7C10.5858 7 9.87868 7 9.43934 7.43934C9 7.87868 9 8.58579 9 10V11H8.80852C5.92117 11 4.47749 11 4.08568 11.8908C3.69387 12.7816 4.66499 13.8559 6.60724 16.0046L9.06495 18.7236C10.4367 20.2412 11.1226 21 12 21C12.8774 21 13.5633 20.2412 14.9351 18.7236Z",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}], ["path", {
	d: "M9 3H15",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "1"
}]], Hg = [["path", {
	d: "M21 9L21 15",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}], ["path", {
	d: "M5.27643 14.9351L7.99539 17.3928C10.1441 19.335 11.2184 20.3061 12.1092 19.9143C13 19.5225 13 18.0788 13 15.1915V15H14C15.4142 15 16.1213 15 16.5607 14.5607C17 14.1213 17 13.4142 17 12C17 10.5858 17 9.87868 16.5607 9.43934C16.1213 9 15.4142 9 14 9H13V8.80852C13 5.92117 13 4.47749 12.1092 4.08568C11.2184 3.69387 10.1441 4.66499 7.99538 6.60723L5.27642 9.06495C3.75881 10.4367 3 11.1226 3 12C3 12.8774 3.75881 13.5633 5.27643 14.9351Z",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "1"
}]], Ug = [["path", {
	d: "M18.7236 9.06494L16.0046 6.60723C13.8559 4.66499 12.7816 3.69387 11.8908 4.08568C11 4.47749 11 5.92117 11 8.80852V9H10C8.58579 9 7.87868 9 7.43934 9.43934C7 9.87868 7 10.5858 7 12C7 13.4142 7 14.1213 7.43934 14.5607C7.87868 15 8.58579 15 10 15H11V15.1915C11 18.0788 11 19.5225 11.8908 19.9143C12.7816 20.3061 13.8559 19.335 16.0046 17.3928L18.7236 14.9351C20.2412 13.5633 21 12.8774 21 12C21 11.1226 20.2412 10.4367 18.7236 9.06494Z",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}], ["path", {
	opacity: "0.4",
	d: "M3 9V15",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "1"
}]], Wg = [["path", {
	d: "M9 21H15",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}], ["path", {
	d: "M14.9351 5.27643L17.3928 7.99539C19.335 10.1441 20.3061 11.2184 19.9143 12.1092C19.5225 13 18.0788 13 15.1915 13H15V14C15 15.4142 15 16.1213 14.5607 16.5607C14.1213 17 13.4142 17 12 17C10.5858 17 9.87868 17 9.43934 16.5607C9 16.1213 9 15.4142 9 14V13H8.80852C5.92117 13 4.47749 13 4.08568 12.1092C3.69387 11.2184 4.66499 10.1441 6.60724 7.99538L9.06495 5.27642C10.4367 3.75881 11.1226 3 12 3C12.8774 3 13.5633 3.75881 14.9351 5.27643Z",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "1"
}]], Gg = [["path", {
	d: "M8 8.00049V6.00049C8 3.79135 9.79086 2.00049 12 2.00049C14.2091 2.00049 16 3.79135 16 6.00049V18.0005C16 20.2096 14.2091 22.0005 12 22.0005C9.79086 22.0005 8 20.2096 8 18.0005V13.5005C8 12.1198 9.11929 11.0005 10.5 11.0005C11.8807 11.0005 13 12.1198 13 13.5005V16.0005",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}]], Kg = [["path", {
	d: "M18 6L6.00081 17.9992M17.9992 18L6 6.00085",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}]], qg = [["path", {
	d: "M5 13.2592L7.58583 15.9568C8.2525 16.6523 8.58583 17.0001 9.00004 17.0001C9.41425 17.0001 9.74759 16.6523 10.4143 15.9568L19 7.00006",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}]], Jg = [["path", {
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
}]], Yg = [["path", {
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
}]], Xg = [
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
], Zg = [
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
], Qg = [
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
], $g = [
	["path", {
		d: "M20.6073 4.00087C21 4.61597 21 5.41166 21 7.00304V16.997C21 18.5883 21 19.384 20.6073 19.9991C20.5372 20.109 20.4586 20.2132 20.3722 20.3108C19.8886 20.8572 19.1233 21.0758 17.5929 21.513C16.0586 21.9513 15.2914 22.1704 14.736 21.8417C14.6396 21.7847 14.55 21.7171 14.4687 21.6402C14 21.1965 14 20.3988 14 18.8034V5.19662C14 3.60122 14 2.80351 14.4687 2.35982C14.55 2.28288 14.6396 2.21527 14.736 2.15827C15.2914 1.82956 16.0586 2.0487 17.5929 2.48699C19.1233 2.92418 19.8886 3.14278 20.3722 3.68925C20.4586 3.78684 20.5372 3.89103 20.6073 4.00087Z",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M14 4H11.9829C10.0812 4 9.13039 4 8.5396 4.58579C8.21023 4.91238 8.06449 5.34994 8 6M14 20H11.9829C10.0812 20 9.13039 20 8.5396 19.4142C8.21023 19.0876 8.06449 18.6501 8 18",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M10 12H3M8.50005 9.49994C8.50005 9.49994 11 11.3412 11 12C11 12.6588 8.50003 14.4999 8.50003 14.4999",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}]
], e_ = [
	["path", {
		d: "M4.39267 4.00087C4 4.61597 4 5.41166 4 7.00304V16.997C4 18.5883 4 19.384 4.39267 19.9991C4.46279 20.109 4.5414 20.2132 4.62777 20.3108C5.11144 20.8572 5.87666 21.0758 7.4071 21.513C8.9414 21.9513 9.70856 22.1704 10.264 21.8417C10.3604 21.7847 10.45 21.7171 10.5313 21.6402C11 21.1965 11 20.3988 11 18.8034V5.19662C11 3.60122 11 2.80351 10.5313 2.35982C10.45 2.28288 10.3604 2.21527 10.264 2.15827C9.70856 1.82956 8.9414 2.0487 7.4071 2.48699C5.87666 2.92418 5.11144 3.14278 4.62777 3.68925C4.5414 3.78684 4.46279 3.89103 4.39267 4.00087Z",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M11 4H13.0171C14.9188 4 15.8696 4 16.4604 4.58579C16.7898 4.91238 16.9355 5.34994 17 6M11 20H13.0171C14.9188 20 15.8696 20 16.4604 19.4142C16.7898 19.0876 16.9355 18.6501 17 18",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M21 12H14M19.5 9.49994C19.5 9.49994 22 11.3412 22 12C22 12.6588 19.5 14.4999 19.5 14.4999",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}]
], t_ = [["path", {
	d: "M15.9351 12.6258C15.6807 13.8374 14.327 14.7077 11.6198 16.4481C8.67528 18.3411 7.20303 19.2876 6.01052 18.9229C5.60662 18.7994 5.23463 18.5823 4.92227 18.2876C4 17.4178 4 15.6118 4 12C4 8.38816 4 6.58224 4.92227 5.71235C5.23463 5.41773 5.60662 5.20057 6.01052 5.07707C7.20304 4.71243 8.67528 5.6589 11.6198 7.55186C14.327 9.29233 15.6807 10.1626 15.9351 11.3742C16.0216 11.7865 16.0216 12.2135 15.9351 12.6258Z",
	stroke: "currentColor",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}], ["path", {
	d: "M20 5V19",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeWidth: "1.5",
	key: "1"
}]], n_ = [["path", {
	d: "M3 21L8 16",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}], ["path", {
	d: "M13.2585 18.8714C9.51516 18.0215 5.97844 14.4848 5.12853 10.7415C4.99399 10.1489 4.92672 9.85266 5.12161 9.37197C5.3165 8.89129 5.55457 8.74255 6.03071 8.44509C7.10705 7.77265 8.27254 7.55888 9.48209 7.66586C11.1793 7.81598 12.0279 7.89104 12.4512 7.67048C12.8746 7.44991 13.1622 6.93417 13.7376 5.90269L14.4664 4.59604C14.9465 3.73528 15.1866 3.3049 15.7513 3.10202C16.316 2.89913 16.6558 3.02199 17.3355 3.26771C18.9249 3.84236 20.1576 5.07505 20.7323 6.66449C20.978 7.34417 21.1009 7.68401 20.898 8.2487C20.6951 8.8134 20.2647 9.05346 19.4039 9.53358L18.0672 10.2792C17.0376 10.8534 16.5229 11.1406 16.3024 11.568C16.0819 11.9955 16.162 12.8256 16.3221 14.4859C16.4399 15.7068 16.2369 16.88 15.5555 17.9697C15.2577 18.4458 15.1088 18.6839 14.6283 18.8786C14.1477 19.0733 13.8513 19.006 13.2585 18.8714Z",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "1"
}]], r_ = [
	["path", {
		d: "M3 15C3 12.1911 3 10.7866 3.67412 9.77772C3.96596 9.34096 4.34096 8.96596 4.77772 8.67412C5.78661 8 7.19108 8 10 8H14C16.8089 8 18.2134 8 19.2223 8.67412C19.659 8.96596 20.034 9.34096 20.3259 9.77772C21 10.7866 21 12.1911 21 15C21 17.8089 21 19.2134 20.3259 20.2223C20.034 20.659 19.659 21.034 19.2223 21.3259C18.2134 22 16.8089 22 14 22H10C7.19108 22 5.78661 22 4.77772 21.3259C4.34096 21.034 3.96596 20.659 3.67412 20.2223C3 19.2134 3 17.8089 3 15Z",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "0"
	}],
	["path", {
		d: "M12.5 16.5C12.5 17.3284 11.8284 18 11 18C10.1716 18 9.5 17.3284 9.5 16.5C9.5 15.6716 10.1716 15 11 15C11.8284 15 12.5 15.6716 12.5 16.5ZM12.5 16.5V11.5C12.5 11.5 12.9 13.2333 14.5 13.5",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "1"
	}],
	["path", {
		d: "M19 8C18.9821 6.76022 18.89 6.05733 18.4182 5.58579C17.8321 5 16.8888 5 15.0022 5H8.99783C7.11118 5 6.16786 5 5.58176 5.58579C5.10996 6.05733 5.01794 6.76022 5 8",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "2"
	}],
	["path", {
		d: "M17 5C17 4.06812 17 3.60218 16.8478 3.23463C16.6448 2.74458 16.2554 2.35523 15.7654 2.15224C15.3978 2 14.9319 2 14 2H10C9.06812 2 8.60218 2 8.23463 2.15224C7.74458 2.35523 7.35523 2.74458 7.15224 3.23463C7 3.60218 7 4.06812 7 5",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "1.5",
		key: "3"
	}]
], i_ = [["path", {
	d: "M12 4V20M20 12H4",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}]], a_ = [
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
], o_ = [["path", {
	d: "M11.9532 2.00004C17.5019 2.00004 22 6.47719 22 12C22 17.5229 17.5019 22 11.9532 22C-0.631103 22 -1.82658 4.01759 11.4985 5.00004C14.8499 5.24714 18.0289 8.41019 18.0289 12C18.0289 16.5 15.2348 18.5 11.4985 18.5C4.5 18.5 3.19042 8.46695 11.0021 9.00004C12.508 9.1028 14.0162 10.3432 14.0162 12C14.0162 13.9279 13 15 11.1211 15",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}]], s_ = [["path", {
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
}]], c_ = [
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
], l_ = [
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
], u_ = [["path", {
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
}]], d_ = [
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
], f_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function p_(e, t) {
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
			e.setAttribute(f_(t), String(n));
		}), e.innerHTML = "", f.forEach(([t, n]) => {
			let r = document.createElementNS("http://www.w3.org/2000/svg", t), i = { ...n };
			p !== void 0 && (i["stroke-width"] = p, i.stroke = "currentColor"), Object.entries(i).forEach(([e, t]) => {
				r.setAttribute(f_(e), String(t));
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
var m_ = new Set([
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
]), h_ = /* @__PURE__ */ Mi("<svg></svg>");
function g_(e, t) {
	E(t, !0);
	let n = K(t, "size", 3, 24), r = K(t, "absoluteStrokeWidth", 3, !1), i = K(t, "color", 3, "currentColor"), a = K(t, "showAlt", 3, !1), o = K(t, "class", 3, ""), s = K(t, "className", 3, ""), c = /* @__PURE__ */ W(t, m_), l = /* @__PURE__ */ O(() => o() || s()), u, d = /* @__PURE__ */ A(void 0), f = /* @__PURE__ */ A(void 0), p = /* @__PURE__ */ O(() => ({
		size: n(),
		strokeWidth: t.strokeWidth,
		absoluteStrokeWidth: r(),
		color: i(),
		altIcon: t.altIcon,
		showAlt: a(),
		class: I(l)
	}));
	eo(() => {
		if (u) return j(d, p_("HugeiconsIcon", t.icon), !0), j(f, I(d).render(u, I(p)), !0), () => {
			I(f)?.destroy();
		};
	}), cr(() => {
		I(d) && u && I(f) && I(f).update(I(p));
	});
	var m = h_();
	U(m, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		width: n(),
		height: n(),
		viewBox: "0 0 24 24",
		fill: "none",
		class: I(l),
		...c
	})), Ya(m, (e) => u = e, () => u), B(e, m), D();
}
//#endregion
//#region node_modules/tailwind-variants/dist/chunk-LQJYWU4O.js
var __ = /\s+/g, v_ = (e) => typeof e != "string" || !e ? e : e.replace(__, " ").trim(), y_ = (...e) => {
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
	return t.length > 0 ? v_(t.join(" ")) : void 0;
}, b_ = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, x_ = (e) => {
	if (!e || typeof e != "object") return !0;
	for (let t in e) return !1;
	return !0;
}, S_ = (e, t) => {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let i = 0; i < n.length; i++) {
		let a = n[i];
		if (!r.includes(a) || e[a] !== t[a]) return !1;
	}
	return !0;
}, C_ = (e, t) => {
	for (let n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
		let r = t[n];
		n in e ? e[n] = y_(e[n], r) : e[n] = r;
	}
	return e;
}, w_ = (e, t) => {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		Array.isArray(r) ? w_(r, t) : r && t.push(r);
	}
}, T_ = (...e) => {
	let t = [];
	w_(e, t);
	let n = [];
	for (let e = 0; e < t.length; e++) t[e] && n.push(t[e]);
	return n;
}, E_ = (e, t) => {
	let n = {};
	for (let r in e) {
		let i = e[r];
		if (r in t) {
			let e = t[r];
			Array.isArray(i) || Array.isArray(e) ? n[r] = T_(e, i) : typeof i == "object" && typeof e == "object" && i && e ? n[r] = E_(i, e) : n[r] = e + " " + i;
		} else n[r] = i;
	}
	for (let r in t) r in e || (n[r] = t[r]);
	return n;
}, D_ = {
	twMerge: !0,
	twMergeConfig: {}
};
function O_() {
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
var k_ = O_(), A_ = (e) => {
	let t = (t, n) => {
		let { extend: r = null, slots: i = {}, variants: a = {}, compoundVariants: o = [], compoundSlots: s = [], defaultVariants: c = {} } = t, l = {
			...D_,
			...n
		}, u = r?.base ? y_(r.base, t?.base) : t?.base, d = r?.variants && !x_(r.variants) ? E_(a, r.variants) : a, f = r?.defaultVariants && !x_(r.defaultVariants) ? {
			...r.defaultVariants,
			...c
		} : c;
		!x_(l.twMergeConfig) && !S_(l.twMergeConfig, k_.cachedTwMergeConfig) && (k_.didTwMergeConfigChange = !0, k_.cachedTwMergeConfig = l.twMergeConfig);
		let p = x_(r?.slots), m = x_(i) ? {} : {
			base: y_(t?.base, p && r?.base),
			...i
		}, h = p ? m : C_({ ...r?.slots }, x_(m) ? { base: t?.base } : m), g = x_(r?.compoundVariants) ? o : T_(r?.compoundVariants, o), _ = (t) => {
			if (x_(d) && x_(i) && p) return e(u, t?.class, t?.className)(l);
			if (g && !Array.isArray(g)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof g}`);
			if (s && !Array.isArray(s)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
			let n = (e, n = d, r = null, i = null) => {
				let a = n[e];
				if (!a || x_(a)) return null;
				let o = i?.[e] ?? t?.[e];
				if (o === null) return null;
				let s = b_(o);
				if (typeof s == "object") return null;
				let c = f?.[e];
				return a[(s ?? b_(c)) || "false"];
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
					if (!x_(o)) {
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
			if (!x_(i) || !p) {
				let t = {};
				if (typeof h == "object" && !x_(h)) {
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
		createTV: (e) => (n, r) => t(n, r ? E_(e, r) : e)
	};
}, j_ = (e) => x_(e) ? ng : tg({
	...e,
	extend: {
		theme: e.theme,
		classGroups: e.classGroups,
		conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
		conflictingClassGroups: e.conflictingClassGroups,
		...e.extend
	}
}), M_ = (e, t) => {
	let n = y_(e);
	return !n || !(t?.twMerge ?? !0) ? n : ((!k_.cachedTwMerge || k_.didTwMergeConfigChange) && (k_.didTwMergeConfigChange = !1, k_.cachedTwMerge = j_(k_.cachedTwMergeConfig)), k_.cachedTwMerge(n) || void 0);
}, { createTV: N_, tv: P_ } = A_((...e) => (t) => M_(e, t)), F_ = P_({
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
}), I_ = new Set([
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
]), L_ = /* @__PURE__ */ R("<a><!></a>"), R_ = /* @__PURE__ */ R("<button><!></button>");
function z_(e, t) {
	E(t, !0);
	let n = K(t, "variant", 3, "default"), r = K(t, "size", 3, "default"), i = K(t, "ref", 15, null), a = K(t, "href", 3, void 0), o = K(t, "type", 3, "button"), s = /* @__PURE__ */ W(t, I_);
	var c = z(), l = N(c), u = (e) => {
		var o = L_();
		U(o, (e) => ({
			"data-slot": "button",
			class: e,
			href: t.disabled ? void 0 : a(),
			"aria-disabled": t.disabled,
			role: t.disabled ? "link" : void 0,
			tabindex: t.disabled ? -1 : void 0,
			...s
		}), [() => X(F_({
			variant: n(),
			size: r()
		}), t.class)]), H(M(o), () => t.children ?? x), T(o), Ya(o, (e) => i(e), () => i()), B(e, o);
	}, d = (e) => {
		var a = R_();
		U(a, (e) => ({
			"data-slot": "button",
			class: e,
			type: o(),
			disabled: t.disabled,
			...s
		}), [() => X(F_({
			variant: n(),
			size: r()
		}), t.class)]), H(M(a), () => t.children ?? x), T(a), Ya(a, (e) => i(e), () => i()), B(e, a);
	};
	V(l, (e) => {
		a() ? e(u) : e(d, -1);
	}), B(e, c), D();
}
//#endregion
//#region src/lib/components/ui/field/field.svelte
var B_ = P_({
	base: "data-[invalid=true]:text-destructive gap-2 group/field flex w-full",
	variants: { orientation: {
		vertical: "cn-field-orientation-vertical flex-col [&>*]:w-full [&>.sr-only]:w-auto",
		horizontal: "cn-field-orientation-horizontal flex-row items-center has-[>[data-slot=field-content]]:items-start [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "cn-field-orientation-responsive flex-col @md/field-group:flex-row @md/field-group:items-center @md/field-group:has-[>[data-slot=field-content]]:items-start [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
}), V_ = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"orientation",
	"children"
]), H_ = /* @__PURE__ */ R("<div><!></div>");
function U_(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "orientation", 3, "vertical"), i = /* @__PURE__ */ W(t, V_);
	var a = H_();
	U(a, (e) => ({
		role: "group",
		"data-slot": "field",
		"data-orientation": r(),
		class: e,
		...i
	}), [() => X(B_({ orientation: r() }), t.class)]), H(M(a), () => t.children ?? x), T(a), Ya(a, (e) => n(e), () => n()), B(e, a), D();
}
//#endregion
//#region src/lib/components/ui/field/field-group.svelte
var W_ = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]), G_ = /* @__PURE__ */ R("<div><!></div>");
function K_(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, W_);
	var i = G_();
	U(i, (e) => ({
		"data-slot": "field-group",
		class: e,
		...r
	}), [() => X("gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col", t.class)]), H(M(i), () => t.children ?? x), T(i), Ya(i, (e) => n(e), () => n()), B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/label/label.svelte
var q_ = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class"
]);
function J_(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, q_);
	var i = z(), a = N(i);
	{
		let e = /* @__PURE__ */ O(() => X("gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed", t.class));
		ta(a, () => im, (t, i) => {
			i(t, G({
				"data-slot": "label",
				get class() {
					return I(e);
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
	B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/separator/separator.svelte
var Y_ = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"data-slot"
]);
function X_(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "data-slot", 3, "separator"), i = /* @__PURE__ */ W(t, Y_);
	var a = z(), o = N(a);
	{
		let e = /* @__PURE__ */ O(() => X("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px", "data-[orientation=vertical]:h-full", t.class));
		ta(o, () => jp, (t, a) => {
			a(t, G({
				get "data-slot"() {
					return r();
				},
				get class() {
					return I(e);
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
	B(e, a), D();
}
//#endregion
//#region src/lib/components/ui/input/input.svelte
var Z_ = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"value",
	"type",
	"files",
	"class",
	"data-slot"
]), Q_ = /* @__PURE__ */ R("<input/>");
function $_(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "value", 15), i = K(t, "files", 15), a = K(t, "data-slot", 3, "input"), o = /* @__PURE__ */ W(t, Z_);
	var s = z(), c = N(s), l = (e) => {
		var s = Q_();
		U(s, (e) => ({
			"data-slot": a(),
			class: e,
			type: "file",
			...o
		}), [() => X("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", t.class)], void 0, void 0, void 0, !0), Ya(s, (e) => n(e), () => n()), qa(s, i), Wa(s, r), B(e, s);
	}, u = (e) => {
		var i = Q_();
		U(i, (e) => ({
			"data-slot": a(),
			class: e,
			type: t.type,
			...o
		}), [() => X("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", t.class)], void 0, void 0, void 0, !0), Ya(i, (e) => n(e), () => n()), Wa(i, r), B(e, i);
	};
	V(c, (e) => {
		t.type === "file" ? e(l) : e(u, -1);
	}), B(e, s), D();
}
//#endregion
//#region src/shared/api/http.ts
var ev = async (e) => fetch(e), tv = async (e, t) => fetch(e, {
	body: t,
	credentials: "include",
	headers: { "Content-Type": "application/x-www-form-urlencoded" },
	method: "POST",
	redirect: "manual"
}), nv = {
	status: !1,
	username: ""
}, rv = (e) => {
	let { subscribe: t, set: n, update: r } = Mt({
		...nv,
		...e
	});
	return {
		set: n,
		subscribe: t,
		init: (e) => n(e),
		resetStatus: () => r((e) => ({
			...e,
			status: nv.status
		})),
		resetUsername: () => r((e) => ({
			...e,
			username: nv.username
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
}, iv = async (e) => new Promise((t, n) => {
	po.once("login", (e) => {
		if (e.success) {
			t(e.name);
			return;
		}
		n(e.error);
	}), po.emit("login", e);
}), av = async () => new Promise((e) => {
	po.once("rank", e);
}), ov = async (e) => {
	await tv(new URL("/login", window.location.origin), new URLSearchParams(e));
	let t = await (await ev(new URL(window.location.href))).text(), n = new DOMParser().parseFromString(t, "text/html").querySelector("input[name=\"_csrf\"]");
	if (!n) {
		console.warn("login response missing csrf value");
		return;
	}
	let r = n.value;
	Io.updateCSRF(r);
}, sv = async (e) => {
	await tv(new URL("/logout", window.location.origin), new URLSearchParams(e));
}, cv = async (e, t) => {
	po.disconnected && await uo();
	let n = iv({
		name: e,
		pw: t
	}), r = av(), i = await n, a = await r;
	if (Po.updateName(i), Po.updateLoggedIn(!0), Po.updateRank(a), !t) return;
	let { csrf: o } = Nt(Io);
	ov({
		_csrf: o,
		name: e,
		password: t,
		remember: "on"
	});
}, lv = async () => {
	po.connected && await fo();
	let { csrf: e } = Nt(Io);
	await sv({ _csrf: e }), Po.resetName(), Po.resetLoggedIn(), Po.resetRank(), po.disconnected && await uo();
}, uv = rv(), dv = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"class",
	"isLoading",
	"isAnon",
	"isGuest"
]), fv = /* @__PURE__ */ R("<div><span><!></span></div>");
function pv(e, t) {
	E(t, !0);
	let n = /* @__PURE__ */ W(t, dv);
	var r = fv();
	U(r, (e) => ({
		class: e,
		...n
	}), [() => X("", t.class)]);
	var i = M(r), a = M(i), o = (e) => {
		g_(e, {
			get icon() {
				return Qg;
			},
			class: "size-5 animate-spin",
			role: "status",
			"aria-label": "Loading"
		});
	}, s = (e) => {
		g_(e, {
			get icon() {
				return Bg;
			},
			class: "size-5"
		});
	}, c = (e) => {
		g_(e, {
			get icon() {
				return u_;
			},
			class: "size-5"
		});
	}, l = (e) => {
		g_(e, {
			get icon() {
				return c_;
			},
			class: "size-5"
		});
	};
	V(a, (e) => {
		t.isLoading ? e(o) : t.isAnon ? e(s, 1) : t.isGuest ? e(c, 2) : e(l, -1);
	}), T(i), T(r), B(e, r), D();
}
//#endregion
//#region src/features/auth/LoginForm.svelte
var mv = 1, hv = 20, gv = 100, _v = /* @__PURE__ */ Lg(/* @__PURE__ */ Ig(), /* @__PURE__ */ Pg(mv, "Min 1 character"), /* @__PURE__ */ Ng(hv, "Max 20 characters"), /* @__PURE__ */ Fg(/^[A-Za-zА-Яа-я0-9_-]+$/, "Only letters, numbers, -, or _")), vv = /* @__PURE__ */ Lg(/* @__PURE__ */ Ig(), /* @__PURE__ */ Ng(gv, "Max 100 characters")), yv = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"class"
]), bv = /* @__PURE__ */ R("<!> <!> <!> <!>", 1), xv = /* @__PURE__ */ R("<div><form><!></form></div>");
function Sv(e, t) {
	E(t, !0);
	let n = () => Lt(uv, "$authStore", r), [r, i] = Rt(), a = /* @__PURE__ */ O(() => n().status), o = /* @__PURE__ */ O(() => n().username), s = /* @__PURE__ */ O(() => /* @__PURE__ */ Rg(_v, I(o))), c = /* @__PURE__ */ O(() => I(s).success), l = /* @__PURE__ */ O(() => I(o) !== "" && !I(c)), u = /* @__PURE__ */ O(() => I(s).success ? "" : I(s).issues.map((e) => e.message).join(", ")), d = /* @__PURE__ */ O(() => n().password || ""), f = /* @__PURE__ */ O(() => !I(c) || I(a)), p = /* @__PURE__ */ O(() => /* @__PURE__ */ Rg(vv, I(d))), m = /* @__PURE__ */ O(() => I(p).success), h = /* @__PURE__ */ O(() => I(d) !== "" && !I(m)), g = /* @__PURE__ */ O(() => I(p).success ? "" : I(p).issues.map((e) => e.message).join(", ")), _ = /* @__PURE__ */ O(() => I(a) || !I(c) || I(c) && !I(m)), v = async (e) => {
		if (e.preventDefault(), !I(_)) try {
			Bt(uv, L(n).status = !0, L(n)), Z.current && await new Promise((e) => setTimeout(e, 500)), await cv(I(o), I(d));
		} catch (e) {
			console.error(e);
		} finally {
			Bt(uv, L(n).status = !1, L(n)), Bt(uv, L(n).username = "", L(n)), Bt(uv, L(n).password = void 0, L(n));
		}
	}, y = /* @__PURE__ */ W(t, yv);
	var b = xv();
	U(b, (e) => ({
		class: e,
		...y
	}), [() => X("", t.class)]);
	var x = M(b);
	K_(M(x), {
		children: (e, t) => {
			U_(e, {
				orientation: "horizontal",
				class: "flex flex-row items-center justify-end gap-1.5 md:gap-2",
				children: (e, t) => {
					var r = bv(), i = N(r), s = (e) => {
						{
							let t = /* @__PURE__ */ O(() => I(o) === "" && I(d) === ""), n = /* @__PURE__ */ O(() => I(d) === "");
							pv(e, {
								get isLoading() {
									return I(a);
								},
								get isAnon() {
									return I(t);
								},
								get isGuest() {
									return I(n);
								}
							});
						}
					};
					V(i, (e) => {
						rg.current && e(s);
					});
					var c = P(i, 2);
					{
						let e = /* @__PURE__ */ O(() => I(l) ? I(u) : ""), t = /* @__PURE__ */ O(() => X({
							"h-7 px-2.5 text-[0.8rem]": !Z.current,
							"md:cursor-not-allowed": I(a)
						}));
						$_(c, {
							required: !0,
							type: "text",
							autocomplete: "name",
							placeholder: "Username",
							get "aria-invalid"() {
								return I(l);
							},
							get title() {
								return I(e);
							},
							get disabled() {
								return I(a);
							},
							get class() {
								return I(t);
							},
							get value() {
								return n().username;
							},
							set value(e) {
								Bt(uv, L(n).username = e, L(n));
							}
						});
					}
					var p = P(c, 2);
					{
						let e = /* @__PURE__ */ O(() => I(h) ? I(g) : ""), t = /* @__PURE__ */ O(() => X({
							"h-7 px-2.5 text-[0.8rem]": !Z.current,
							"md:cursor-not-allowed": I(f)
						}));
						$_(p, {
							name: "password",
							type: "password",
							autocomplete: "current-password",
							placeholder: "Password",
							get "aria-invalid"() {
								return I(h);
							},
							get title() {
								return I(e);
							},
							get disabled() {
								return I(f);
							},
							get class() {
								return I(t);
							},
							get value() {
								return n().password;
							},
							set value(e) {
								Bt(uv, L(n).password = e, L(n));
							}
						});
					}
					var m = P(p, 2);
					{
						let e = /* @__PURE__ */ O(() => Z.current ? "outline" : "ghost"), t = /* @__PURE__ */ O(() => Z.current ? "default" : "icon-sm"), n = /* @__PURE__ */ O(() => X({ "md:cursor-not-allowed": I(_) }));
						z_(m, {
							type: "submit",
							get disabled() {
								return I(_);
							},
							get variant() {
								return I(e);
							},
							get size() {
								return I(t);
							},
							get class() {
								return I(n);
							},
							children: (e, t) => {
								var n = z(), r = N(n), i = (e) => {
									B(e, Ni("Login"));
								}, a = (e) => {
									g_(e, {
										get icon() {
											return $g;
										},
										class: "size-4"
									});
								};
								V(r, (e) => {
									Z.current ? e(i) : e(a, -1);
								}), B(e, n);
							},
							$$slots: { default: !0 }
						});
					}
					B(e, r);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), T(x), T(b), Si("submit", x, v), B(e, b), D(), i();
}
//#endregion
//#region src/features/auth/LogoutForm.svelte
var Cv = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"class"
]), wv = /* @__PURE__ */ R("<!> <!>", 1), Tv = /* @__PURE__ */ R("<div><form><!></form></div>");
function Ev(e, t) {
	E(t, !0);
	let n = () => Lt(uv, "$authStore", i), r = () => Lt(Po, "$clientStore", i), [i, a] = Rt(), o = /* @__PURE__ */ O(() => n().status), s = /* @__PURE__ */ O(() => r().rank > 0), c = async (e) => {
		if (e.preventDefault(), !I(o)) try {
			Bt(uv, L(n).status = !0, L(n)), Z.current && await new Promise((e) => setTimeout(e, 500)), await lv();
		} catch (e) {
			console.error(e);
		} finally {
			Bt(uv, L(n).status = !1, L(n)), Bt(uv, L(n).username = "", L(n)), Bt(uv, L(n).password = void 0, L(n));
		}
	}, l = /* @__PURE__ */ W(t, Cv);
	var u = Tv();
	U(u, (e) => ({
		class: e,
		...l
	}), [() => X("", t.class)]);
	var d = M(u);
	K_(M(d), {
		children: (e, t) => {
			U_(e, {
				orientation: "horizontal",
				class: "flex flex-row items-center justify-end gap-1.5 selection:bg-primary md:gap-2",
				children: (e, t) => {
					var n = wv(), i = N(n), a = (e) => {
						var t = wv(), n = N(t);
						{
							let e = /* @__PURE__ */ O(() => !I(s));
							pv(n, {
								get isLoading() {
									return I(o);
								},
								isAnon: !1,
								get isGuest() {
									return I(e);
								}
							});
						}
						J_(P(n, 2), {
							class: "w-auto flex-none",
							children: (e, t) => {
								Qe();
								var n = Ni();
								gr(() => Ii(n, r().name)), B(e, n);
							},
							$$slots: { default: !0 }
						}), B(e, t);
					};
					V(i, (e) => {
						rg.current && e(a);
					});
					var c = P(i, 2);
					{
						let e = /* @__PURE__ */ O(() => Z.current ? "outline" : "ghost"), t = /* @__PURE__ */ O(() => Z.current ? "default" : "icon-xs"), n = /* @__PURE__ */ O(() => X({ "md:cursor-not-allowed": I(o) }));
						z_(c, {
							type: "submit",
							get variant() {
								return I(e);
							},
							get disabled() {
								return I(o);
							},
							get size() {
								return I(t);
							},
							get class() {
								return I(n);
							},
							children: (e, t) => {
								var n = z(), r = N(n), i = (e) => {
									B(e, Ni("Logout"));
								}, a = (e) => {
									g_(e, {
										get icon() {
											return e_;
										},
										class: "size-4"
									});
								};
								V(r, (e) => {
									Z.current ? e(i) : e(a, -1);
								}), B(e, n);
							},
							$$slots: { default: !0 }
						});
					}
					B(e, n);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), T(d), T(u), Si("submit", d, c), B(e, u), D(), a();
}
//#endregion
//#region src/features/auth/AuthForm.svelte
var Dv = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"class",
	"isLoggedIn"
]);
function Ov(e, t) {
	let n = /* @__PURE__ */ W(t, Dv);
	var r = z(), i = N(r), a = (e) => {
		Ev(e, G({ get class() {
			return t.class;
		} }, () => n));
	}, o = (e) => {
		Sv(e, G({ get class() {
			return t.class;
		} }, () => n));
	};
	V(i, (e) => {
		t.isLoggedIn ? e(a) : e(o, -1);
	}), B(e, r);
}
//#endregion
//#region src/shared/components/layout/Header.svelte
var kv = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"appVersion",
	"imgLogoSrc",
	"isConnected",
	"isLoggedIn",
	"class"
]), Av = /* @__PURE__ */ R("<header><div class=\"fixed top-0 left-0 flex-none\"><!></div> <!> <!></header>");
function jv(e, t) {
	E(t, !0);
	let n = uo, r = /* @__PURE__ */ W(t, kv);
	var i = Av();
	U(i, (e) => ({
		class: e,
		...r
	}), [() => X("sticky top-0 flex w-full flex-row items-center justify-between gap-1.5 bg-background py-2 pr-1.5 pl-6 md:gap-3 md:py-4 md:pr-2 md:pl-10", t.class)]);
	var a = M(i);
	yg(M(a), { get appVersion() {
		return t.appVersion;
	} }), T(a);
	var o = P(a, 2);
	z_(o, {
		variant: "ghost",
		size: "icon-sm",
		class: "flex-none",
		onclick: () => location.assign("/"),
		children: (e, n) => {
			gg(e, {
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
	var s = P(o, 2), c = (e) => {
		Ov(e, {
			class: "w-full flex-initial md:w-3/5 lg:w-2/5",
			get isLoggedIn() {
				return t.isLoggedIn;
			}
		});
	}, l = (e) => {
		{
			let t = /* @__PURE__ */ O(() => Z.current ? "default" : "sm");
			z_(e, {
				variant: "destructive",
				get size() {
					return I(t);
				},
				get onclick() {
					return n;
				},
				class: "flex-initial",
				children: (e, t) => {
					Qe(), B(e, Ni("Reconnect"));
				},
				$$slots: { default: !0 }
			});
		}
	};
	V(s, (e) => {
		t.isConnected ? e(c) : e(l, -1);
	}), T(i), B(e, i), D();
}
//#endregion
//#region src/shared/components/common/Portal.svelte
var Mv = (e) => (t) => {
	if (e) return e.appendChild(t), () => {
		t.parentNode && t.parentNode.removeChild(t);
	};
}, Nv = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"class"
]), Pv = /* @__PURE__ */ R("<!> <!>", 1), Fv = /* @__PURE__ */ R("<form><!></form>");
function Iv(e, t) {
	E(t, !0);
	let n = () => Lt(uv, "$authStore", r), [r, i] = Rt(), a = /* @__PURE__ */ O(() => n().username), o = /* @__PURE__ */ O(() => n().status), s = async (e) => {
		if (e.preventDefault(), !I(o)) try {
			Bt(uv, L(n).status = !0, L(n)), Z.current && await new Promise((e) => setTimeout(e, 500)), await cv(I(a));
		} catch (e) {
			console.error(e);
		} finally {
			Bt(uv, L(n).status = !1, L(n)), Bt(uv, L(n).username = "", L(n)), Bt(uv, L(n).password = void 0, L(n));
		}
	}, c = /* @__PURE__ */ W(t, Nv);
	var l = Fv();
	U(l, (e) => ({
		onsubmit: s,
		class: e,
		...c
	}), [() => X("", t.class)]), K_(M(l), {
		children: (e, t) => {
			U_(e, {
				orientation: "horizontal",
				class: "flex flex-row items-start justify-start gap-0",
				children: (e, t) => {
					var r = Pv(), i = N(r);
					{
						let e = /* @__PURE__ */ O(() => I(a) === "");
						z_(i, {
							variant: "ghost",
							type: "submit",
							class: "flex-2 rounded-none border-none",
							get disabled() {
								return I(e);
							},
							children: (e, t) => {
								Qe(), B(e, Ni("Guest Login"));
							},
							$$slots: { default: !0 }
						});
					}
					$_(P(i, 2), {
						required: !0,
						class: "flex-8 rounded-none border-none text-sm",
						type: "text",
						autocomplete: "name",
						placeholder: "Username",
						get disabled() {
							return I(o);
						},
						get value() {
							return n().username;
						},
						set value(e) {
							Bt(uv, L(n).username = e, L(n));
						}
					}), B(e, r);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), T(l), B(e, l), D(), i();
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/is.js
function Lv(e) {
	return typeof e == "function";
}
function Rv(e) {
	return typeof e == "object" && !!e;
}
var zv = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function Bv(e) {
	return e == null || zv.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => Bv(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/box/box.svelte.js
var Vv = Symbol("box"), Hv = Symbol("is-writable");
function Uv(e) {
	return Rv(e) && Vv in e;
}
function Wv(e) {
	return Gv.isBox(e) && Hv in e;
}
function Gv(e) {
	let t = /* @__PURE__ */ A(In(e));
	return {
		[Vv]: !0,
		[Hv]: !0,
		get current() {
			return I(t);
		},
		set current(e) {
			j(t, e, !0);
		}
	};
}
function Kv(e, t) {
	let n = /* @__PURE__ */ O(e);
	return t ? {
		[Vv]: !0,
		[Hv]: !0,
		get current() {
			return I(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[Vv]: !0,
		get current() {
			return e();
		}
	};
}
function qv(e) {
	return Gv.isBox(e) ? e : Lv(e) ? Gv.with(e) : Gv(e);
}
function Jv(e) {
	return Object.entries(e).reduce((e, [t, n]) => Gv.isBox(n) ? (Gv.isWritableBox(n) ? Object.defineProperty(e, t, {
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
function Yv(e) {
	return Gv.isWritableBox(e) ? {
		[Vv]: !0,
		get current() {
			return e.current;
		}
	} : e;
}
Gv.from = qv, Gv.with = Kv, Gv.flatten = Jv, Gv.readonly = Yv, Gv.isBox = Uv, Gv.isWritableBox = Wv;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
function Xv(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/strings.js
var Zv = /\d/, Qv = [
	"-",
	"_",
	"/",
	"."
];
function $v(e = "") {
	if (!Zv.test(e)) return e !== e.toLowerCase();
}
function ey(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = Qv.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = $v(a);
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
function ty(e) {
	return e ? ey(e).map((e) => ry(e)).join("") : "";
}
function ny(e) {
	return iy(ty(e || ""));
}
function ry(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function iy(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function ay(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[ty(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[ny(e)] = n;
	}
	return Cs(e, n), t;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
function oy(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/events.js
function sy(e, t, n, r) {
	let i = Array.isArray(t) ? t : [t];
	return i.forEach((t) => e.addEventListener(t, n, r)), () => {
		i.forEach((t) => e.removeEventListener(t, n, r));
	};
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function cy(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var ly = cy(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function uy(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${ly(t)}: ${e[t]};`).join("\n");
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/style.js
function dy(e = {}) {
	return uy(e).replace("\n", " ");
}
dy({
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
var fy = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/merge-props.js
function py(e) {
	return fy.has(e);
}
function my(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
				if (a && typeof o && py(e)) t[e] = Xv(n, i);
				else if (a && o) t[e] = oy(n, i);
				else if (e === "class") {
					let r = Bv(n), a = Bv(i);
					r && a ? t[e] = ga(n, i) : r ? t[e] = ga(n) : a && (t[e] = ga(i));
				} else if (e === "style") {
					let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
					if (r && a) t[e] = {
						...n,
						...i
					};
					else if (r && s) {
						let r = ay(i);
						t[e] = {
							...n,
							...r
						};
					} else if (o && a) t[e] = {
						...ay(n),
						...i
					};
					else if (o && s) {
						let r = ay(n), a = ay(i);
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
	return typeof t.style == "object" && (t.style = dy(t.style).replaceAll("\n", " ")), t.hidden !== !0 && (t.hidden = void 0, delete t.hidden), t.disabled !== !0 && (t.disabled = void 0, delete t.disabled), t;
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/internal/configurable-globals.js
var hy = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/internal/utils/dom.js
function gy(e) {
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
		let { window: t = hy, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = Ht((e) => {
			let n = xi(t, "focusin", e), r = xi(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? gy(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/utilities/watch/watch.svelte.js
function _y(e, t) {
	switch (e) {
		case "post":
			cr(t);
			break;
		case "pre":
			ur(t);
			break;
	}
}
function vy(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	_y(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = L(() => n(t, o));
		return o = t, r;
	});
}
function yy(e, t, n) {
	let r = dr(() => {
		let i = !1;
		vy(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	cr(() => r);
}
function by(e, t, n) {
	vy(e, "post", t, n);
}
function xy(e, t, n) {
	vy(e, "pre", t, n);
}
by.pre = xy;
function Sy(e, t) {
	yy(e, "post", t);
}
function Cy(e, t) {
	yy(e, "pre", t);
}
Sy.pre = Cy;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/node_modules/runed/dist/utilities/resource/resource.svelte.js
function wy(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function Ty(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function Ey(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ A(In(o)), u = /* @__PURE__ */ A(!1), d = /* @__PURE__ */ A(void 0), f = /* @__PURE__ */ A(In([])), p = () => {
		I(f).forEach((e) => e()), j(f, [], !0);
	}, m = (e) => {
		j(f, [...I(f), e], !0);
	}, h = async (e, n, r = !1) => {
		try {
			j(u, !0), j(d, void 0), p();
			let i = new AbortController();
			m(() => i.abort());
			let a = await t(e, n, {
				data: I(l),
				refetching: r,
				onCleanup: m,
				signal: i.signal
			});
			return j(l, a, !0), a;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || j(d, e, !0);
			return;
		} finally {
			j(u, !1);
		}
	}, g = s ? wy(h, s) : c ? Ty(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
	return r((t, n) => {
		a && v || (v = t, g(Array.isArray(e) ? t : t[0], Array.isArray(e) ? n : n?.[0]));
	}, { lazy: i }), {
		get current() {
			return I(l);
		},
		get loading() {
			return I(u);
		},
		get error() {
			return I(d);
		},
		mutate: (e) => {
			j(l, e, !0);
		},
		refetch: (t) => {
			let n = _.map((e) => e());
			return g(Array.isArray(e) ? n : n[0], Array.isArray(e) ? n : n[0], t ?? !0);
		}
	};
}
function Dy(e, t, n) {
	return Ey(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		by(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function Oy(e, t, n) {
	return Ey(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		by.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
Dy.pre = Oy;
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/after-tick.js
function ky(e) {
	ni().then(e);
}
//#endregion
//#region node_modules/paneforge/node_modules/svelte-toolbelt/dist/utils/dom.js
var Ay = 9;
function jy(e) {
	return Rv(e) && e.nodeType === Ay;
}
function My(e) {
	return Rv(e) && e.constructor?.name === "VisualViewport";
}
function Ny(e) {
	return jy(e) ? e : My(e) ? e.document : e?.ownerDocument ?? document;
}
function Py(e) {
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
var Fy = class {
	element;
	#e = /* @__PURE__ */ O(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return I(this.#e);
	}
	set root(e) {
		j(this.#e, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = Gv.with(e) : this.element = e;
	}
	getDocument = () => Ny(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => Py(this.root);
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
function Iy(e, t) {
	return { [si()]: (n) => Gv.isBox(e) ? (e.current = n, L(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), L(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/aria.js
function Ly({ layout: e, panesArray: t, pivotIndices: n }) {
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
function Ry(e, t = "Assertion failed!") {
	if (!e) throw console.error(t), Error(t);
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/compare.js
function zy(e, t, n = 10) {
	return By(e, t, n) === 0;
}
function By(e, t, n = 10) {
	let r = Hy(e, n), i = Hy(t, n);
	return Math.sign(r - i);
}
function Vy(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Hy(e, t) {
	return Number.parseFloat(e.toFixed(t));
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/is.js
var Uy = typeof document < "u";
function Wy(e) {
	return e instanceof HTMLElement;
}
function Gy(e) {
	return e.type === "keydown";
}
function Ky(e) {
	return e.type.startsWith("mouse");
}
function qy(e) {
	return e.type.startsWith("touch");
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/resize.js
function Jy({ paneConstraints: e, paneIndex: t, initialSize: n }) {
	let r = e[t];
	Ry(r != null, "Pane constraints should not be null.");
	let { collapsedSize: i = 0, collapsible: a, maxSize: o = 100, minSize: s = 0 } = r, c = n;
	return By(c, s) < 0 && (c = Yy(c, a, i, s)), c = Math.min(o, c), Number.parseFloat(c.toFixed(10));
}
function Yy(e, t, n, r) {
	return t && By(e, (n + r) / 2) < 0 ? n : r;
}
//#endregion
//#region node_modules/paneforge/dist/internal/helpers.js
function Xy() {}
function Zy({ groupId: e, layout: t, panesArray: n, domContext: r }) {
	let i = Qy(e, r);
	for (let e = 0; e < n.length - 1; e++) {
		let { valueMax: r, valueMin: a, valueNow: o } = Ly({
			layout: t,
			panesArray: n,
			pivotIndices: [e, e + 1]
		}), s = i[e];
		if (Wy(s)) {
			let t = n[e];
			s.setAttribute("aria-controls", t.opts.id.current), s.setAttribute("aria-valuemax", `${Math.round(r)}`), s.setAttribute("aria-valuemin", `${Math.round(a)}`), s.setAttribute("aria-valuenow", o == null ? "" : `${Math.round(o)}`);
		}
	}
	return () => {
		for (let e of i) e.removeAttribute("aria-controls"), e.removeAttribute("aria-valuemax"), e.removeAttribute("aria-valuemin"), e.removeAttribute("aria-valuenow");
	};
}
function Qy(e, t) {
	return Uy ? Array.from(t.querySelectorAll(`[data-pane-resizer-id][data-pane-group-id="${e}"]`)) : [];
}
function $y({ groupId: e, id: t, domContext: n }) {
	return Uy ? Qy(e, n).findIndex((e) => e.getAttribute("data-pane-resizer-id") === t) ?? null : null;
}
function eb({ groupId: e, dragHandleId: t, domContext: n }) {
	let r = $y({
		groupId: e,
		id: t,
		domContext: n
	});
	return r == null ? [-1, -1] : [r, r + 1];
}
function tb(e, t, n) {
	let r = e.map((e) => e.constraints), i = nb(e, t), a = r[i], o = i === e.length - 1 ? [i - 1, i] : [i, i + 1], s = n[i];
	return {
		...a,
		paneSize: s,
		pivotIndices: o
	};
}
function nb(e, t) {
	return e.findIndex((e) => e.opts.id.current === t.opts.id.current);
}
function rb(e, t, n) {
	for (let r = 0; r < t.length; r++) {
		let i = t[r], a = e[r];
		Ry(a);
		let { collapsedSize: o = 0, collapsible: s } = a.constraints, c = n[a.opts.id.current];
		if (!(c == null || i !== c)) continue;
		n[a.opts.id.current] = i;
		let { onCollapse: l, onExpand: u, onResize: d } = a.callbacks;
		d?.(i, c), s && (l || u) && (u && (c == null || c === o) && i !== o && u(), l && (c == null || c !== o) && i === o && l());
	}
}
function ib({ panesArray: e }) {
	let t = Array(e.length), n = e.map((e) => e.constraints), r = 0, i = 100;
	for (let a = 0; a < e.length; a++) {
		let e = n[a];
		Ry(e);
		let { defaultSize: o } = e;
		o != null && (r++, t[a] = o, i -= o);
	}
	for (let a = 0; a < e.length; a++) {
		let o = n[a];
		Ry(o);
		let { defaultSize: s } = o;
		if (s != null) continue;
		let c = e.length - r, l = i / c;
		r++, t[a] = l, i -= l;
	}
	return t;
}
function ab({ layout: e, paneConstraints: t }) {
	let n = [...e], r = n.reduce((e, t) => e + t, 0);
	if (n.length !== t.length) throw Error(`Invalid ${t.length} pane layout: ${n.map((e) => `${e}%`).join(", ")}`);
	if (!zy(r, 100)) for (let e = 0; e < t.length; e++) {
		let t = n[e];
		Ry(t != null), n[e] = 100 / r * t;
	}
	let i = 0;
	for (let e = 0; e < t.length; e++) {
		let r = n[e];
		Ry(r != null);
		let a = Jy({
			paneConstraints: t,
			paneIndex: e,
			initialSize: r
		});
		r !== a && (i += r - a, n[e] = a);
	}
	if (!zy(i, 0)) for (let e = 0; e < t.length; e++) {
		let r = n[e];
		Ry(r != null);
		let a = r + i, o = Jy({
			paneConstraints: t,
			paneIndex: e,
			initialSize: a
		});
		if (r !== o && (i -= o - r, n[e] = o, zy(i, 0))) break;
	}
	return n;
}
function ob(e, t) {
	return Uy && t.querySelector(`[data-pane-group][data-pane-group-id="${e}"]`) || null;
}
function sb(e, t) {
	return Uy && t.querySelector(`[data-pane-resizer-id="${e}"]`) || null;
}
function cb({ event: e, dragHandleId: t, dir: n, initialDragState: r, domContext: i }) {
	let a = n === "horizontal", o = sb(t, i);
	Ry(o);
	let s = o.getAttribute("data-pane-group-id");
	Ry(s);
	let { initialCursorPosition: c } = r, l = ub(n, e), u = ob(s, i);
	Ry(u);
	let d = u.getBoundingClientRect(), f = a ? d.width : d.height;
	return (l - c) / f * 100;
}
function lb({ event: e, dragHandleId: t, dir: n, initialDragState: r, keyboardResizeBy: i, domContext: a }) {
	if (Gy(e)) {
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
	} else return r == null ? 0 : cb({
		event: e,
		dragHandleId: t,
		dir: n,
		initialDragState: r,
		domContext: a
	});
}
function ub(e, t) {
	let n = e === "horizontal";
	if (Ky(t)) return n ? t.clientX : t.clientY;
	if (qy(t)) {
		let e = t.touches[0];
		return Ry(e), n ? e.screenX : e.screenY;
	} else throw Error(`Unsupported event type "${t.type}"`);
}
function db({ groupId: e, handleId: t, panesArray: n, domContext: r }) {
	let i = sb(t, r), a = Qy(e, r), o = i ? a.indexOf(i) : -1;
	return [n[o]?.opts.id.current ?? null, n[o + 1]?.opts.id.current ?? null];
}
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/internal/configurable-globals.js
var fb = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/internal/utils/dom.js
function pb(e) {
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
		let { window: t = fb, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = Ht((e) => {
			let n = xi(t, "focusin", e), r = xi(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? pb(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/utilities/watch/watch.svelte.js
function mb(e, t) {
	switch (e) {
		case "post":
			cr(t);
			break;
		case "pre":
			ur(t);
			break;
	}
}
function hb(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	mb(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = L(() => n(t, o));
		return o = t, r;
	});
}
function gb(e, t, n) {
	let r = dr(() => {
		let i = !1;
		hb(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	cr(() => r);
}
function _b(e, t, n) {
	hb(e, "post", t, n);
}
function vb(e, t, n) {
	hb(e, "pre", t, n);
}
_b.pre = vb;
function yb(e, t) {
	gb(e, "post", t);
}
function bb(e, t) {
	gb(e, "pre", t);
}
yb.pre = bb;
//#endregion
//#region node_modules/paneforge/node_modules/runed/dist/utilities/context/context.js
var xb = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return mt(this.#t);
	}
	get() {
		let e = ft(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = ft(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return pt(this.#t, e);
	}
};
//#endregion
//#region node_modules/paneforge/dist/internal/utils/adjust-layout.js
function Sb({ delta: e, layout: t, paneConstraints: n, pivotIndices: r, trigger: i }) {
	if (zy(e, 0)) return t;
	let a = [...t], [o, s] = r, c = 0;
	if (i === "keyboard") {
		{
			let r = e < 0 ? s : o, i = n[r];
			if (Ry(i), i.collapsible) {
				let i = t[r];
				Ry(i != null);
				let a = n[r];
				Ry(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (zy(i, o)) {
					let t = s - i;
					By(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
		{
			let r = e < 0 ? o : s, i = n[r];
			Ry(i);
			let { collapsible: a } = i;
			if (a) {
				let i = t[r];
				Ry(i != null);
				let a = n[r];
				Ry(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (zy(i, s)) {
					let t = i - o;
					By(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
	}
	{
		let r = e < 0 ? 1 : -1, i = e < 0 ? s : o, a = 0;
		for (;;) {
			let e = t[i];
			Ry(e != null);
			let o = Jy({
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
			Ry(o != null);
			let s = o - i, l = Jy({
				paneConstraints: n,
				paneIndex: r,
				initialSize: s
			});
			if (!zy(o, l) && (c += o - l, a[r] = l, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, { numeric: !0 }) >= 0)) break;
			e < 0 ? r-- : r++;
		}
	}
	if (zy(c, 0)) return t;
	{
		let r = e < 0 ? s : o, i = t[r];
		Ry(i != null);
		let l = i + c, u = Jy({
			paneConstraints: n,
			paneIndex: r,
			initialSize: l
		});
		if (a[r] = u, !zy(u, l)) {
			let t = l - u, r = e < 0 ? s : o;
			for (; r >= 0 && r < n.length;) {
				let i = a[r];
				Ry(i != null);
				let o = i + t, s = Jy({
					paneConstraints: n,
					paneIndex: r,
					initialSize: o
				});
				if (zy(i, s) || (t -= s - i, a[r] = s), zy(t, 0)) break;
				e > 0 ? r-- : r++;
			}
		}
	}
	return zy(a.reduce((e, t) => t + e, 0), 100) ? a : t;
}
//#endregion
//#region node_modules/paneforge/dist/internal/utils/style.js
var Cb = null, wb = null;
function Tb(e) {
	switch (e) {
		case "horizontal": return "ew-resize";
		case "horizontal-max": return "w-resize";
		case "horizontal-min": return "e-resize";
		case "vertical": return "ns-resize";
		case "vertical-max": return "n-resize";
		case "vertical-min": return "s-resize";
	}
}
function Eb() {
	wb !== null && (document.head.removeChild(wb), Cb = null, wb = null);
}
function Db(e, t) {
	if (Cb === e) return;
	Cb = e;
	let n = Tb(e);
	wb === null && (wb = t.createElement("style"), t.head.appendChild(wb)), wb.innerHTML = `*{cursor: ${n}!important;}`;
}
function Ob({ defaultSize: e, dragState: t, layout: n, panesArray: r, paneIndex: i, precision: a = 3 }) {
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
function kb(e) {
	try {
		if (typeof localStorage > "u") throw TypeError("localStorage is not supported in this environment");
		e.getItem = (e) => localStorage.getItem(e), e.setItem = (e, t) => localStorage.setItem(e, t);
	} catch (t) {
		console.error(t), e.getItem = () => null, e.setItem = () => {};
	}
}
function Ab(e) {
	return `paneforge:${e}`;
}
function jb(e) {
	return e.map((e) => e.opts.order.current ? `${e.opts.order.current}:${JSON.stringify(e.constraints)}` : JSON.stringify(e.constraints)).sort().join(",");
}
function Mb(e, t) {
	try {
		let n = Ab(e), r = t.getItem(n), i = JSON.parse(r || "");
		if (typeof i == "object" && i) return i;
	} catch {}
	return null;
}
function Nb(e, t, n) {
	return (Mb(e, n) || {})[jb(t)] || null;
}
function Pb(e, t, n, r, i) {
	let a = Ab(e), o = jb(t), s = Mb(e, i) || {};
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
var Fb = {};
function Ib(e, t = 10) {
	let n = null;
	return (...r) => {
		n !== null && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
}
function Lb({ autoSaveId: e, layout: t, storage: n, panesArray: r, paneSizeBeforeCollapse: i }) {
	if (t.length === 0 || t.length !== r.length) return;
	let a = Fb[e];
	a ?? (a = Ib(Pb, 100), Fb[e] = a);
	let o = [...r], s = new Map(i);
	a(e, o, s, t, n);
}
//#endregion
//#region node_modules/paneforge/dist/paneforge.svelte.js
var Rb = {
	getItem: (e) => (kb(Rb), Rb.getItem(e)),
	setItem: (e, t) => {
		kb(Rb), Rb.setItem(e, t);
	}
}, zb = new xb("PaneGroup"), Bb = class e {
	static create(t) {
		return zb.set(new e(t));
	}
	opts;
	attachment;
	domContext;
	#e = /* @__PURE__ */ A(null);
	get dragState() {
		return I(this.#e);
	}
	set dragState(e) {
		j(this.#e, e);
	}
	#t = /* @__PURE__ */ A([]);
	get layout() {
		return I(this.#t);
	}
	set layout(e) {
		j(this.#t, e);
	}
	#n = /* @__PURE__ */ A([]);
	get panesArray() {
		return I(this.#n);
	}
	set panesArray(e) {
		j(this.#n, e);
	}
	#r = /* @__PURE__ */ A(!1);
	get panesArrayChanged() {
		return I(this.#r);
	}
	set panesArrayChanged(e) {
		j(this.#r, e, !0);
	}
	#i = /* @__PURE__ */ A(In({}));
	get paneIdToLastNotifiedSizeMap() {
		return I(this.#i);
	}
	set paneIdToLastNotifiedSizeMap(e) {
		j(this.#i, e, !0);
	}
	paneSizeBeforeCollapseMap = /* @__PURE__ */ new Map();
	prevDelta = 0;
	constructor(e) {
		this.opts = e, this.attachment = Iy(this.opts.ref), this.domContext = new Fy(this.opts.ref), _b([
			() => this.opts.id.current,
			() => this.layout,
			() => this.panesArray
		], () => Zy({
			groupId: this.opts.id.current,
			layout: this.layout,
			panesArray: this.panesArray,
			domContext: this.domContext
		})), cr(() => L(() => this.#a())), _b([
			() => this.opts.autoSaveId.current,
			() => this.layout,
			() => this.opts.storage.current
		], () => {
			this.opts.autoSaveId.current && Lb({
				autoSaveId: this.opts.autoSaveId.current,
				layout: this.layout,
				storage: this.opts.storage.current,
				panesArray: this.panesArray,
				paneSizeBeforeCollapse: this.paneSizeBeforeCollapseMap
			});
		}), _b(() => this.panesArrayChanged, () => {
			if (!this.panesArrayChanged) return;
			this.panesArrayChanged = !1;
			let e = this.layout, t = null;
			if (this.opts.autoSaveId.current) {
				let e = Nb(this.opts.autoSaveId.current, this.panesArray, this.opts.storage.current);
				e && (this.paneSizeBeforeCollapseMap = new Map(Object.entries(e.expandToSizes)), t = e.layout);
			}
			t ??= ib({ panesArray: this.panesArray });
			let n = ab({
				layout: t,
				paneConstraints: this.panesArray.map((e) => e.constraints)
			});
			Vy(e, n) || (this.layout = n, this.opts.onLayout.current?.(n), rb(this.panesArray, n, this.paneIdToLastNotifiedSizeMap));
		});
	}
	setLayout = (e) => {
		this.layout = e;
	};
	registerResizeHandle = (e) => (t) => {
		t.preventDefault();
		let n = this.opts.direction.current, r = this.dragState, i = this.opts.id.current, a = this.opts.keyboardResizeBy.current, o = this.layout, s = this.panesArray, { initialLayout: c } = r ?? {}, l = this.domContext.getDocument(), u = eb({
			groupId: i,
			dragHandleId: e,
			domContext: this.domContext
		}), d = lb({
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
		let p = s.map((e) => e.constraints), m = Sb({
			delta: d,
			layout: c ?? o,
			paneConstraints: p,
			pivotIndices: u,
			trigger: Gy(t) ? "keyboard" : "mouse-or-touch"
		}), h = !Vy(o, m);
		(Ky(t) || qy(t)) && this.prevDelta !== d && (this.prevDelta = d, Db(h ? f ? "horizontal" : "vertical" : f ? d < 0 ? "horizontal-min" : "horizontal-max" : d < 0 ? "vertical-min" : "vertical-max", l)), h && (this.setLayout(m), this.opts.onLayout.current?.(m), rb(s, m, this.paneIdToLastNotifiedSizeMap));
	};
	resizePane = (e, t) => {
		let n = this.layout, r = this.panesArray, i = r.map((e) => e.constraints), { paneSize: a, pivotIndices: o } = tb(r, e, n);
		Ry(a != null);
		let s = Sb({
			delta: nb(r, e) === r.length - 1 ? a - t : t - a,
			layout: n,
			paneConstraints: i,
			pivotIndices: o,
			trigger: "imperative-api"
		});
		Vy(n, s) || (this.setLayout(s), this.opts.onLayout.current?.(s), rb(r, s, this.paneIdToLastNotifiedSizeMap));
	};
	startDragging = (e, t) => {
		let n = this.opts.direction.current, r = this.layout, i = sb(e, this.domContext);
		Ry(i);
		let a = ub(n, t);
		this.dragState = {
			dragHandleId: e,
			dragHandleRect: i.getBoundingClientRect(),
			initialCursorPosition: a,
			initialLayout: r
		};
	};
	stopDragging = () => {
		Eb(), this.dragState = null;
	};
	isPaneCollapsed = (e) => {
		let t = this.panesArray, n = this.layout, { collapsedSize: r = 0, collapsible: i, paneSize: a } = tb(t, e, n);
		return typeof a != "number" || typeof r != "number" ? !1 : i === !0 && zy(a, r);
	};
	expandPane = (e) => {
		let t = this.layout, n = this.panesArray;
		if (!e.constraints.collapsible) return;
		let r = n.map((e) => e.constraints), { collapsedSize: i = 0, paneSize: a, minSize: o = 0, pivotIndices: s } = tb(n, e, t);
		if (a !== i) return;
		let c = this.paneSizeBeforeCollapseMap.get(e.opts.id.current), l = c != null && c >= o ? c : o, u = Sb({
			delta: nb(n, e) === n.length - 1 ? a - l : l - a,
			layout: t,
			paneConstraints: r,
			pivotIndices: s,
			trigger: "imperative-api"
		});
		Vy(t, u) || (this.setLayout(u), this.opts.onLayout.current?.(u), rb(n, u, this.paneIdToLastNotifiedSizeMap));
	};
	collapsePane = (e) => {
		let t = this.layout, n = this.panesArray;
		if (!e.constraints.collapsible) return;
		let r = n.map((e) => e.constraints), { collapsedSize: i = 0, paneSize: a, pivotIndices: o } = tb(n, e, t);
		if (Ry(a != null), a === i) return;
		this.paneSizeBeforeCollapseMap.set(e.opts.id.current, a);
		let s = Sb({
			delta: nb(n, e) === n.length - 1 ? a - i : i - a,
			layout: t,
			paneConstraints: r,
			pivotIndices: o,
			trigger: "imperative-api"
		});
		Vy(t, s) || (this.layout = s, this.opts.onLayout.current?.(s), rb(n, s, this.paneIdToLastNotifiedSizeMap));
	};
	getPaneSize = (e) => tb(this.panesArray, e, this.layout).paneSize;
	getPaneStyle = (e, t) => {
		let n = this.panesArray, r = this.layout, i = this.dragState;
		return Ob({
			defaultSize: t,
			dragState: i,
			layout: r,
			panesArray: n,
			paneIndex: nb(n, e)
		});
	};
	isPaneExpanded = (e) => {
		let { collapsedSize: t = 0, collapsible: n, paneSize: r } = tb(this.panesArray, e, this.layout);
		return !n || r > t;
	};
	registerPane = (e) => {
		let t = [...this.panesArray, e];
		return t.sort((e, t) => {
			let n = e.opts.order.current, r = t.opts.order.current;
			return n == null && r == null ? 0 : n == null ? -1 : r == null ? 1 : n - r;
		}), this.panesArray = t, this.panesArrayChanged = !0, () => {
			let t = [...this.panesArray], n = nb(this.panesArray, e);
			n < 0 || (t.splice(n, 1), this.panesArray = t, delete this.paneIdToLastNotifiedSizeMap[e.opts.id.current], this.panesArrayChanged = !0);
		};
	};
	#a = () => {
		let e = this.opts.id.current, t = Qy(e, this.domContext), n = this.panesArray, r = t.map((t) => {
			let r = t.getAttribute("data-pane-resizer-id");
			if (!r) return Xy;
			let [i, a] = db({
				groupId: e,
				handleId: r,
				panesArray: n,
				domContext: this.domContext
			});
			if (i == null || a == null) return Xy;
			let o = sy(t, "keydown", (t) => {
				if (t.defaultPrevented || t.key !== "Enter") return;
				t.preventDefault();
				let n = this.panesArray, a = n.findIndex((e) => e.opts.id.current === i);
				if (a < 0) return;
				let o = n[a];
				Ry(o);
				let s = this.layout, c = s[a], { collapsedSize: l = 0, collapsible: u, minSize: d = 0 } = o.constraints;
				if (!(c != null && u)) return;
				let f = Sb({
					delta: zy(c, l) ? d - c : l - c,
					layout: s,
					paneConstraints: n.map((e) => e.constraints),
					pivotIndices: eb({
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
	#o = /* @__PURE__ */ O(() => ({
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
		return I(this.#o);
	}
	set props(e) {
		j(this.#o, e);
	}
}, Vb = [
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"End",
	"Home"
], Hb = class e {
	static create(t) {
		return new e(t, zb.get());
	}
	opts;
	#e;
	attachment;
	domContext;
	#t = /* @__PURE__ */ O(() => this.#e.dragState?.dragHandleId === this.opts.id.current);
	#n = /* @__PURE__ */ A(!1);
	resizeHandler = null;
	constructor(e, t) {
		this.opts = e, this.#e = t, this.attachment = Iy(this.opts.ref), this.domContext = new Fy(this.opts.ref), cr(() => {
			this.opts.disabled.current ? this.resizeHandler = null : this.resizeHandler = this.#e.registerResizeHandle(this.opts.id.current);
		}), cr(() => {
			let e = this.opts.ref.current;
			if (!e) return;
			let t = this.opts.disabled.current, n = this.resizeHandler, r = I(this.#t);
			if (t || n === null || !r) return;
			let i = (e) => {
				n(e);
			}, a = (e) => {
				n(e);
			}, o = () => {
				e.blur(), this.#e.stopDragging(), this.opts.onDraggingChange.current(!1);
			}, s = this.domContext.getDocument().body, c = this.domContext.getWindow();
			return oy(xi(s, "contextmenu", o), xi(s, "mousemove", i), xi(s, "touchmove", i, { passive: !1 }), xi(s, "mouseleave", a), xi(c, "mouseup", o), xi(c, "touchend", o));
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
		if (Vb.includes(e.key)) {
			e.preventDefault(), this.resizeHandler(e);
			return;
		}
		if (e.key !== "F6") return;
		e.preventDefault();
		let t = Qy(this.#e.opts.id.current, this.domContext), n = $y({
			groupId: this.#e.opts.id.current,
			id: this.opts.id.current,
			domContext: this.domContext
		});
		if (n === null) return;
		let r = 0;
		r = e.shiftKey ? n > 0 ? n - 1 : t.length - 1 : n + 1 < t.length ? n + 1 : 0, t[r].focus();
	};
	#o = () => {
		j(this.#n, !1);
	};
	#s = () => {
		j(this.#n, !0);
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
	#p = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		role: "separator",
		"data-direction": this.#e.opts.direction.current,
		"data-pane-group-id": this.#e.opts.id.current,
		"data-active": I(this.#t) ? "pointer" : I(this.#n) ? "keyboard" : void 0,
		"data-enabled": !this.opts.disabled.current,
		"data-pane-resizer-id": this.opts.id.current,
		"data-pane-resizer": "",
		tabIndex: this.opts.tabIndex.current,
		style: {
			cursor: Tb(this.#e.opts.direction.current),
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
		return I(this.#p);
	}
	set props(e) {
		j(this.#p, e);
	}
}, Ub = class e {
	static create(t) {
		return new e(t, zb.get());
	}
	opts;
	group;
	attachment;
	domContext;
	#e = /* @__PURE__ */ A("");
	#t = /* @__PURE__ */ O(() => ({
		onCollapse: this.opts.onCollapse.current,
		onExpand: this.opts.onExpand.current,
		onResize: this.opts.onResize.current
	}));
	get callbacks() {
		return I(this.#t);
	}
	set callbacks(e) {
		j(this.#t, e);
	}
	#n = /* @__PURE__ */ O(() => ({
		collapsedSize: this.opts.collapsedSize.current,
		collapsible: this.opts.collapsible.current,
		defaultSize: this.opts.defaultSize.current,
		maxSize: this.opts.maxSize.current,
		minSize: this.opts.minSize.current
	}));
	get constraints() {
		return I(this.#n);
	}
	set constraints(e) {
		j(this.#n, e);
	}
	#r = (e) => {
		j(this.#e, e, !0), ky(() => {
			if (this.opts.ref.current) {
				let e = this.opts.ref.current;
				if (getComputedStyle(e).transitionDuration === "0s") {
					j(this.#e, "");
					return;
				}
				let t = (n) => {
					n.propertyName === "flex-grow" && (j(this.#e, ""), e.removeEventListener("transitionend", t));
				};
				e.addEventListener("transitionend", t);
			} else j(this.#e, "");
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
		this.opts = e, this.group = t, this.attachment = Iy(this.opts.ref), this.domContext = new Fy(this.opts.ref), eo(() => this.group.registerPane(this)), _b(() => ct(this.constraints), () => {
			this.group.panesArrayChanged = !0;
		});
	}
	#i = /* @__PURE__ */ O(() => this.group.isPaneCollapsed(this));
	#a = /* @__PURE__ */ O(() => I(this.#e) === "" ? I(this.#i) ? "collapsed" : "expanded" : I(this.#e));
	#o = /* @__PURE__ */ O(() => ({
		id: this.opts.id.current,
		style: this.group.getPaneStyle(this, this.opts.defaultSize.current),
		"data-pane": "",
		"data-pane-id": this.opts.id.current,
		"data-pane-group-id": this.group.opts.id.current,
		"data-collapsed": I(this.#i) ? "" : void 0,
		"data-expanded": I(this.#i) ? void 0 : "",
		"data-pane-state": I(this.#a),
		...this.attachment
	}));
	get props() {
		return I(this.#o);
	}
	set props(e) {
		j(this.#o, e);
	}
}, Wb = new Set([
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
]), Gb = /* @__PURE__ */ R("<div><!></div>");
function Kb(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "autoSaveId", 3, null), i = K(t, "id", 3, n), a = K(t, "keyboardResizeBy", 3, null), o = K(t, "onLayoutChange", 3, Xy), s = K(t, "storage", 3, Rb), c = K(t, "ref", 15, null), l = /* @__PURE__ */ W(t, Wb), u = Bb.create({
		id: Gv.with(() => i() ?? n),
		ref: Gv.with(() => c(), (e) => c(e)),
		autoSaveId: Gv.with(() => r()),
		direction: Gv.with(() => t.direction),
		keyboardResizeBy: Gv.with(() => a()),
		onLayout: Gv.with(() => o()),
		storage: Gv.with(() => s())
	}), d = () => u.layout, f = u.setLayout, p = () => u.opts.id.current, m = /* @__PURE__ */ O(() => my(l, u.props));
	var h = {
		getLayout: d,
		setLayout: f,
		getId: p
	}, g = z(), _ = N(g), v = (e) => {
		var n = z();
		H(N(n), () => t.child, () => ({ props: I(m) })), B(e, n);
	}, y = (e) => {
		var n = Gb();
		U(n, () => ({ ...I(m) })), H(M(n), () => t.children ?? x), T(n), B(e, n);
	};
	return V(_, (e) => {
		t.child ? e(v) : e(y, -1);
	}), B(e, g), D(h);
}
//#endregion
//#region node_modules/paneforge/dist/components/pane.svelte
var qb = new Set([
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
]), Jb = /* @__PURE__ */ R("<div><!></div>");
function Yb(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "id", 3, n), i = K(t, "ref", 15, null), a = K(t, "onCollapse", 3, Xy), o = K(t, "onExpand", 3, Xy), s = K(t, "onResize", 3, Xy), c = /* @__PURE__ */ W(t, qb), l = Ub.create({
		id: Gv.with(() => r()),
		ref: Gv.with(() => i(), (e) => i(e)),
		collapsedSize: Gv.with(() => t.collapsedSize),
		collapsible: Gv.with(() => t.collapsible),
		defaultSize: Gv.with(() => t.defaultSize),
		maxSize: Gv.with(() => t.maxSize),
		minSize: Gv.with(() => t.minSize),
		onCollapse: Gv.with(() => a()),
		onExpand: Gv.with(() => o()),
		onResize: Gv.with(() => s()),
		order: Gv.with(() => t.order)
	}), u = l.pane.collapse, d = l.pane.expand, f = l.pane.getSize, p = l.pane.isCollapsed, m = l.pane.isExpanded, h = l.pane.resize, g = l.pane.getId, _ = /* @__PURE__ */ O(() => my(c, l.props));
	var v = {
		collapse: u,
		expand: d,
		getSize: f,
		isCollapsed: p,
		isExpanded: m,
		resize: h,
		getId: g
	}, y = z(), b = N(y), ee = (e) => {
		var n = z();
		H(N(n), () => t.child, () => ({ props: I(_) })), B(e, n);
	}, te = (e) => {
		var n = Jb();
		U(n, () => ({ ...I(_) })), H(M(n), () => t.children ?? x), T(n), B(e, n);
	};
	return V(b, (e) => {
		t.child ? e(ee) : e(te, -1);
	}), B(e, y), D(v);
}
//#endregion
//#region node_modules/paneforge/dist/components/pane-resizer.svelte
var Xb = new Set([
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
]), Zb = /* @__PURE__ */ R("<div><!></div>");
function Qb(e, t) {
	let n = Pi();
	E(t, !0);
	let r = K(t, "id", 3, n), i = K(t, "ref", 15, null), a = K(t, "disabled", 3, !1), o = K(t, "onDraggingChange", 3, Xy), s = K(t, "tabindex", 3, 0), c = /* @__PURE__ */ W(t, Xb), l = Hb.create({
		id: Gv.with(() => r()),
		ref: Gv.with(() => i(), (e) => i(e)),
		disabled: Gv.with(() => a()),
		onDraggingChange: Gv.with(() => o()),
		tabIndex: Gv.with(() => s())
	}), u = /* @__PURE__ */ O(() => my(c, l.props));
	var d = z(), f = N(d), p = (e) => {
		var n = z();
		H(N(n), () => t.child, () => ({ props: I(u) })), B(e, n);
	}, m = (e) => {
		var n = Zb();
		U(n, () => ({ ...I(u) })), H(M(n), () => t.children ?? x), T(n), B(e, n);
	};
	V(f, (e) => {
		t.child ? e(p) : e(m, -1);
	}), B(e, d), D();
}
//#endregion
//#region src/lib/components/ui/resizable/resizable-handle.svelte
var $b = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"withHandle"
]), ex = /* @__PURE__ */ R("<div class=\"bg-border h-6 w-1 rounded-lg z-10 flex shrink-0\"></div>");
function tx(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "withHandle", 3, !1), i = /* @__PURE__ */ W(t, $b);
	var a = z(), o = N(a);
	{
		let e = /* @__PURE__ */ O(() => X("cn-resizable-handle bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[direction=vertical]:h-px data-[direction=vertical]:w-full data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:h-1 data-[direction=vertical]:after:w-full data-[direction=vertical]:after:translate-x-0 data-[direction=vertical]:after:-translate-y-1/2 [&[data-direction=vertical]>div]:rotate-90", t.class));
		ta(o, () => Qb, (t, a) => {
			a(t, G({
				"data-slot": "resizable-handle",
				get class() {
					return I(e);
				}
			}, () => i, {
				get ref() {
					return n();
				},
				set ref(e) {
					n(e);
				},
				children: (e, t) => {
					var n = z(), i = N(n), a = (e) => {
						B(e, ex());
					};
					V(i, (e) => {
						r() && e(a);
					}), B(e, n);
				},
				$$slots: { default: !0 }
			}));
		});
	}
	B(e, a), D();
}
//#endregion
//#region src/lib/components/ui/resizable/resizable-pane-group.svelte
var nx = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"this",
	"class"
]);
function rx(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "this", 15), i = /* @__PURE__ */ W(t, nx);
	var a = z(), o = N(a);
	{
		let e = /* @__PURE__ */ O(() => X("cn-resizable-panel-group flex h-full w-full data-[direction=vertical]:flex-col", t.class));
		ta(o, () => Kb, (t, a) => {
			Ya(a(t, G({
				"data-slot": "resizable-pane-group",
				get class() {
					return I(e);
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
	B(e, a), D();
}
//#endregion
//#region src/features/chat/ChatBody.svelte
var ix = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"reversed",
	"leftPane",
	"rightPane",
	"leftPaneRef",
	"rightPaneRef",
	"class"
]), ax = /* @__PURE__ */ R("<!> <!> <!>", 1);
function ox(e, t) {
	E(t, !0);
	let n = K(t, "leftPane", 15, null), r = K(t, "rightPane", 15, null), i = K(t, "leftPaneRef", 15, null), a = K(t, "rightPaneRef", 15, null), o = /* @__PURE__ */ W(t, ix);
	{
		let s = /* @__PURE__ */ O(() => X("", t.class));
		rx(e, G({
			direction: "vertical",
			get class() {
				return I(s);
			}
		}, () => o, {
			children: (e, o) => {
				Yb(e, {
					collapsible: !1,
					defaultSize: 80,
					class: "flex",
					children: (e, o) => {
						rx(e, {
							direction: "horizontal",
							children: (e, o) => {
								var s = ax(), c = N(s);
								{
									let e = /* @__PURE__ */ O(() => t.reversed && Z.current ? 20 : 80), r = /* @__PURE__ */ O(() => t.reversed && Z.current ? 30 : 100);
									Ya(Yb(c, {
										collapsible: !0,
										order: 1,
										get defaultSize() {
											return I(e);
										},
										get maxSize() {
											return I(r);
										},
										class: "flex scrollbar-thumb-primary scrollbar-track-background overflow-y-auto!",
										get ref() {
											return i();
										},
										set ref(e) {
											i(e);
										}
									}), (e) => n(e), () => n());
								}
								var l = P(c, 2);
								tx(l, { withHandle: !0 });
								var u = P(l, 2);
								{
									let e = /* @__PURE__ */ O(() => t.reversed && Z.current ? 80 : 20), n = /* @__PURE__ */ O(() => t.reversed && Z.current ? 100 : 30);
									Ya(Yb(u, {
										collapsible: !0,
										order: 2,
										get defaultSize() {
											return I(e);
										},
										get maxSize() {
											return I(n);
										},
										class: "flex scrollbar-thumb-primary scrollbar-track-background overflow-y-auto!",
										get ref() {
											return a();
										},
										set ref(e) {
											a(e);
										}
									}), (e) => r(e), () => r());
								}
								B(e, s);
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
	D();
}
//#endregion
//#region node_modules/svelte/src/easing/index.js
function sx(e) {
	let t = e - 1;
	return t * t * t + 1;
}
function cx(e) {
	return e * e * e * e * e;
}
function lx(e) {
	return --e * e * e * e * e + 1;
}
//#endregion
//#region node_modules/svelte/src/transition/index.js
var ux = (e) => e;
function dx(e) {
	let t = e - 1;
	return t * t * t + 1;
}
function fx(e) {
	return e < .5 ? 4 * e * e * e : .5 * (2 * e - 2) ** 3 + 1;
}
function px(e) {
	let t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"];
}
function mx(e, { delay: t = 0, duration: n = 400, easing: r = fx, amount: i = 5, opacity: a = 0 } = {}) {
	let o = getComputedStyle(e), s = +o.opacity, c = o.filter === "none" ? "" : o.filter, l = s * (1 - a), [u, d] = px(i);
	return {
		delay: t,
		duration: n,
		easing: r,
		css: (e, t) => `opacity: ${s - l * t}; filter: ${c} blur(${t * u}${d});`
	};
}
function hx(e, { delay: t = 0, duration: n = 400, easing: r = ux } = {}) {
	let i = +getComputedStyle(e).opacity;
	return {
		delay: t,
		duration: n,
		easing: r,
		css: (e) => `opacity: ${e * i}`
	};
}
function gx(e, { delay: t = 0, duration: n = 400, easing: r = dx, start: i = 0, opacity: a = 0 } = {}) {
	let o = getComputedStyle(e), s = +o.opacity, c = o.transform === "none" ? "" : o.transform, l = 1 - i, u = s * (1 - a);
	return {
		delay: t,
		duration: n,
		easing: r,
		css: (e, t) => `
			transform: ${c} scale(${1 - l * t});
			opacity: ${s - u * t}
		`
	};
}
//#endregion
//#region src/lib/components/ui/input-group/input-group.svelte
var _x = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]), vx = /* @__PURE__ */ R("<div><!></div>");
function yx(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, _x);
	var i = vx();
	U(i, (e) => ({
		"data-slot": "input-group",
		role: "group",
		class: e,
		...r
	}), [() => X("group/input-group border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-input/50 dark:has-disabled:bg-input/80 h-8 rounded-lg border transition-colors in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-3 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto", t.class)]), H(M(i), () => t.children ?? x), T(i), Ya(i, (e) => n(e), () => n()), B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/input-group/input-group-addon.svelte
var bx = P_({
	base: "text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none",
	variants: { align: {
		"inline-start": "pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first",
		"inline-end": "pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last",
		"block-start": "px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start",
		"block-end": "px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start"
	} },
	defaultVariants: { align: "inline-start" }
}), xx = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children",
	"align"
]), Sx = /* @__PURE__ */ R("<div><!></div>");
function Cx(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "align", 3, "inline-start"), i = /* @__PURE__ */ W(t, xx);
	var a = Sx(), o = (e) => {
		e.target.closest("button") || e.currentTarget.parentElement?.querySelector("input")?.focus();
	};
	U(a, (e) => ({
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": r(),
		class: e,
		onclick: o,
		...i
	}), [() => X(bx({ align: r() }), t.class)]), H(M(a), () => t.children ?? x), T(a), Ya(a, (e) => n(e), () => n()), B(e, a), D();
}
//#endregion
//#region src/lib/components/ui/input-group/input-group-button.svelte
var wx = P_({
	base: "gap-2 text-sm flex items-center shadow-none",
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
		sm: "cn-input-group-button-size-sm",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-8 p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
}), Tx = new Set([
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
function Ex(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "type", 3, "button"), i = K(t, "variant", 3, "ghost"), a = K(t, "size", 3, "xs"), o = /* @__PURE__ */ W(t, Tx);
	{
		let s = /* @__PURE__ */ O(() => X(wx({ size: a() }), t.class));
		z_(e, G({
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
				return I(s);
			}
		}, () => o, {
			get ref() {
				return n();
			},
			set ref(e) {
				n(e);
			},
			children: (e, n) => {
				var r = z();
				H(N(r), () => t.children ?? x), B(e, r);
			},
			$$slots: { default: !0 }
		}));
	}
	D();
}
//#endregion
//#region src/lib/components/ui/input-group/input-group-text.svelte
var Dx = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]), Ox = /* @__PURE__ */ R("<span><!></span>");
function kx(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, Dx);
	var i = Ox();
	U(i, (e) => ({
		class: e,
		...r
	}), [() => X("text-muted-foreground gap-2 text-sm [&_svg:not([class*='size-'])]:size-4 flex items-center [&_svg]:pointer-events-none", t.class)]), H(M(i), () => t.children ?? x), T(i), Ya(i, (e) => n(e), () => n()), B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/textarea/textarea.svelte
var Ax = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"value",
	"class",
	"data-slot"
]), jx = /* @__PURE__ */ R("<textarea></textarea>");
function Mx(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "value", 15), i = K(t, "data-slot", 3, "textarea"), a = /* @__PURE__ */ W(t, Ax);
	var o = jx();
	Qn(o), U(o, (e) => ({
		"data-slot": i(),
		class: e,
		...a
	}), [() => X("border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-lg border bg-transparent px-2.5 py-2 text-base transition-colors focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50", t.class)]), Ya(o, (e) => n(e), () => n()), Wa(o, r), B(e, o), D();
}
//#endregion
//#region src/lib/components/ui/input-group/input-group-textarea.svelte
var Nx = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"value",
	"class"
]);
function Px(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "value", 15), i = /* @__PURE__ */ W(t, Nx);
	{
		let a = /* @__PURE__ */ O(() => X("rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1 resize-none", t.class));
		Mx(e, G({
			"data-slot": "input-group-control",
			get class() {
				return I(a);
			}
		}, () => i, {
			get ref() {
				return n();
			},
			set ref(e) {
				n(e);
			},
			get value() {
				return r();
			},
			set value(e) {
				r(e);
			}
		}));
	}
	D();
}
//#endregion
//#region src/features/chat/ChatForm.svelte
var Fx = 320, Ix = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"class"
]), Lx = /* @__PURE__ */ R("<p> </p>"), Rx = /* @__PURE__ */ R("<span class=\"text-xs font-stretch-ultra-condensed antialiased transition-colors duration-1000 data-[is-warning=true]:font-bold data-[is-warning=true]:text-amber-400 data-[is-warning=true]:data-[is-max=true]:font-extrabold data-[is-warning=true]:data-[is-max=true]:text-destructive md:text-sm md:font-stretch-normal md:subpixel-antialiased\"><!></span> <span class=\"text-xs font-stretch-ultra-condensed antialiased md:text-sm md:font-stretch-normal md:subpixel-antialiased\"></span>", 1), zx = /* @__PURE__ */ R("<!> <!> <!> <!> <!> <!>", 1), Bx = /* @__PURE__ */ R("<!> <!>", 1), Vx = /* @__PURE__ */ R("<form><!></form>");
function Hx(e, t) {
	E(t, !0);
	let n = /* @__PURE__ */ A(""), r = (e) => {
		e.key === "Enter" && (e.preventDefault(), console.log(I(n)), j(n, ""));
	}, i = (e) => {
		e.preventDefault(), console.log(I(n)), j(n, "");
	}, a = /* @__PURE__ */ W(t, Ix);
	var o = Vx();
	U(o, (e) => ({
		onsubmit: i,
		class: e,
		...a
	}), [() => X("flex", t.class)]), yx(M(o), {
		class: "flex-1 rounded-none border-none",
		children: (e, t) => {
			var i = Bx(), a = N(i);
			Px(a, {
				onkeydown: r,
				maxlength: Fx,
				placeholder: "Chat message",
				class: "max-h-48 min-h-12 scrollbar-thumb-primary scrollbar-track-background px-4 text-sm font-stretch-ultra-condensed antialiased md:text-base md:font-stretch-normal md:subpixel-antialiased",
				get value() {
					return I(n);
				},
				set value(e) {
					j(n, e, !0);
				}
			}), Cx(P(a, 2), {
				align: "block-end",
				class: "flex flex-row justify-end",
				children: (e, t) => {
					var r = zx(), i = N(r);
					{
						let e = /* @__PURE__ */ O(() => Z.current ? "icon-sm" : "icon-xs");
						Ex(i, {
							type: "button",
							variant: "ghost",
							get size() {
								return I(e);
							},
							children: (e, t) => {
								g_(e, {
									get icon() {
										return Gg;
									},
									class: "size-4 md:size-5"
								});
							},
							$$slots: { default: !0 }
						});
					}
					var a = P(i, 2);
					X_(a, { orientation: "vertical" });
					var o = P(a, 2);
					kx(o, {
						children: (e, t) => {
							let r = /* @__PURE__ */ O(() => Fx - I(n).length), i = /* @__PURE__ */ O(() => I(r) < Fx * .25), a = /* @__PURE__ */ O(() => I(r) === 0);
							var o = Rx(), s = N(o), c = M(s), l = (e) => {
								var t = z();
								Wi(N(t), () => I(r), (e) => {
									var t = Lx(), n = M(t, !0);
									T(t), gr(() => Ii(n, I(r))), fa(1, t, () => gx, () => ({
										easing: cx,
										duration: 80,
										start: 1.2,
										opacity: 1
									})), B(e, t);
								}), B(e, t);
							}, u = (e) => {
								var t = Lx(), n = M(t, !0);
								T(t), gr(() => Ii(n, I(r))), B(e, t);
							};
							V(c, (e) => {
								I(i) ? e(l) : e(u, -1);
							}), T(s);
							var d = P(s, 2);
							d.textContent = "/ 320", gr(() => {
								za(s, "data-is-warning", I(i)), za(s, "data-is-max", I(a));
							}), B(e, o);
						},
						$$slots: { default: !0 }
					});
					var s = P(o, 2);
					{
						let e = /* @__PURE__ */ O(() => Z.current ? "icon-sm" : "icon-xs");
						Ex(s, {
							type: "button",
							variant: "ghost",
							class: "ms-auto",
							get size() {
								return I(e);
							},
							children: (e, t) => {
								g_(e, {
									get icon() {
										return Xg;
									},
									class: "size-4 md:size-5"
								});
							},
							$$slots: { default: !0 }
						});
					}
					var c = P(s, 2);
					X_(c, { orientation: "vertical" });
					var l = P(c, 2);
					{
						let e = /* @__PURE__ */ O(() => Z.current ? "icon-sm" : "icon-xs");
						Ex(l, {
							type: "submit",
							variant: "ghost",
							get size() {
								return I(e);
							},
							children: (e, t) => {
								g_(e, {
									get icon() {
										return a_;
									},
									class: "size-4 md:size-5"
								});
							},
							$$slots: { default: !0 }
						});
					}
					B(e, r);
				},
				$$slots: { default: !0 }
			}), B(e, i);
		},
		$$slots: { default: !0 }
	}), T(o), B(e, o), D();
}
//#endregion
//#region src/features/chat/ChatHeader.svelte
var Ux = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"reversed",
	"reverseLayout",
	"toggleUserlist",
	"onlineCount",
	"class"
]), Wx = /* @__PURE__ */ R("<div><div class=\"flex flex-row items-center justify-start\"><!></div> <p class=\"flex-auto truncate text-center text-sm font-stretch-ultra-condensed antialiased md:text-base md:font-stretch-normal md:subpixel-antialiased\"> </p> <div class=\"flex flex-row items-center justify-end\"><!></div></div>");
function Gx(e, t) {
	E(t, !0);
	let n = K(t, "onlineCount", 3, 0), r = /* @__PURE__ */ W(t, Ux);
	var i = Wx();
	U(i, (e) => ({
		class: e,
		...r
	}), [() => X("flex flex-none items-center justify-between overflow-hidden", t.reversed ? "flex-row-reverse md:flex-row" : "flex-row-reverse", t.class)]);
	var a = M(i), o = M(a);
	{
		let e = /* @__PURE__ */ O(() => Z.current ? "icon-sm" : "icon-xs");
		z_(o, {
			variant: "ghost",
			type: "button",
			get size() {
				return I(e);
			},
			get onclick() {
				return t.toggleUserlist;
			},
			children: (e, t) => {
				g_(e, {
					get icon() {
						return l_;
					},
					class: "size-4 md:size-5"
				});
			},
			$$slots: { default: !0 }
		});
	}
	T(a);
	var s = P(a, 2), c = M(s);
	T(s);
	var l = P(s, 2), u = M(l);
	{
		let e = /* @__PURE__ */ O(() => Z.current ? "icon-sm" : "icon-xs");
		z_(u, {
			variant: "ghost",
			type: "button",
			get size() {
				return I(e);
			},
			get onclick() {
				return t.reverseLayout;
			},
			children: (e, n) => {
				var r = z(), i = N(r), a = (e) => {
					var t = z(), n = N(t), r = (e) => {
						g_(e, {
							get icon() {
								return Ug;
							},
							class: "size-4 md:size-5"
						});
					}, i = (e) => {
						g_(e, {
							get icon() {
								return Vg;
							},
							class: "size-4 md:size-5"
						});
					};
					V(n, (e) => {
						Z.current ? e(r) : e(i, -1);
					}), B(e, t);
				}, o = (e) => {
					g_(e, {
						get icon() {
							return Hg;
						},
						class: "size-4 md:size-5"
					});
				}, s = (e) => {
					g_(e, {
						get icon() {
							return Wg;
						},
						class: "size-4 md:size-5"
					});
				};
				V(i, (e) => {
					t.reversed ? e(a) : Z.current ? e(o, 1) : e(s, -1);
				}), B(e, r);
			},
			$$slots: { default: !0 }
		});
	}
	T(l), T(i), gr(() => Ii(c, `${n() ?? ""} online`)), B(e, i), D();
}
//#endregion
//#region src/features/chat/MessageBuffer.svelte
var Kx = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"class"
]), qx = /* @__PURE__ */ R("<div class=\"text-sm font-stretch-condensed antialiased md:text-base md:font-stretch-normal md:subpixel-antialiased\"></div>"), Jx = /* @__PURE__ */ R("<div></div>");
function Yx(e, t) {
	E(t, !0);
	let n = /* @__PURE__ */ W(t, Kx);
	var r = Jx();
	U(r, (e) => ({
		class: e,
		...n
	}), [() => X("", t.class)]), Yi(r, 20, () => ({ length: 100 }), Gi, (e, t, n) => {
		var r = qx();
		r.textContent = `${n} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, vitae nihil labore
      nesciunt eius tenetur nostrum exercitationem reiciendis, illum minima, doloribus distinctio aspernatur.
      Veniam sint a, explicabo dolore harum ducimus?`, B(e, r);
	}), T(r), B(e, r), D();
}
//#endregion
//#region node_modules/svelte/src/animate/index.js
function Xx(e, { from: t, to: n }, r = {}) {
	var { delay: i = 0, duration: a = (e) => Math.sqrt(e) * 120, easing: o = sx } = r, s = getComputedStyle(e), c = s.transform === "none" ? "" : s.transform, [l, u] = s.transformOrigin.split(" ").map(parseFloat);
	l /= e.clientWidth, u /= e.clientHeight;
	var d = Zx(e), f = e.clientWidth / n.width / d, p = e.clientHeight / n.height / d, m = t.left + t.width * l, h = t.top + t.height * u, g = n.left + n.width * l, _ = n.top + n.height * u, v = (m - g) * f, y = (h - _) * p, b = t.width / n.width, x = t.height / n.height;
	return {
		delay: i,
		duration: typeof a == "function" ? a(Math.sqrt(v * v + y * y)) : a,
		easing: o,
		css: (e, t) => `transform: ${c} translate(${t * v}px, ${t * y}px) scale(${e + t * b}, ${e + t * x});`
	};
}
function Zx(e) {
	if ("currentCSSZoom" in e) return e.currentCSSZoom;
	for (var t = e, n = 1; t !== null;) n *= +getComputedStyle(t).zoom, t = t.parentElement;
	return n;
}
//#endregion
//#region src/lib/components/ui/empty/empty.svelte
var Qx = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]), $x = /* @__PURE__ */ R("<div><!></div>");
function eS(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, Qx);
	var i = $x();
	U(i, (e) => ({
		"data-slot": "empty",
		class: e,
		...r
	}), [() => X("gap-4 rounded-xl border-dashed p-6 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance", t.class)]), H(M(i), () => t.children ?? x), T(i), Ya(i, (e) => n(e), () => n()), B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/empty/empty-header.svelte
var tS = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]), nS = /* @__PURE__ */ R("<div><!></div>");
function rS(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, tS);
	var i = nS();
	U(i, (e) => ({
		"data-slot": "empty-header",
		class: e,
		...r
	}), [() => X("gap-2 flex max-w-sm flex-col items-center", t.class)]), H(M(i), () => t.children ?? x), T(i), Ya(i, (e) => n(e), () => n()), B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/empty/empty-media.svelte
var iS = P_({
	base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
	variants: { variant: {
		default: "bg-transparent",
		icon: "bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-4"
	} },
	defaultVariants: { variant: "default" }
}), aS = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children",
	"variant"
]), oS = /* @__PURE__ */ R("<div><!></div>");
function sS(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "variant", 3, "default"), i = /* @__PURE__ */ W(t, aS);
	var a = oS();
	U(a, (e) => ({
		"data-slot": "empty-icon",
		"data-variant": r(),
		class: e,
		...i
	}), [() => X(iS({ variant: r() }), t.class)]), H(M(a), () => t.children ?? x), T(a), Ya(a, (e) => n(e), () => n()), B(e, a), D();
}
//#endregion
//#region src/lib/components/ui/empty/empty-title.svelte
var cS = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]), lS = /* @__PURE__ */ R("<div><!></div>");
function uS(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, cS);
	var i = lS();
	U(i, (e) => ({
		"data-slot": "empty-title",
		class: e,
		...r
	}), [() => X("font-heading text-sm font-medium tracking-tight", t.class)]), H(M(i), () => t.children ?? x), T(i), Ya(i, (e) => n(e), () => n()), B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card.svelte
var dS = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"open"
]);
function fS(e, t) {
	E(t, !0);
	let n = K(t, "open", 15, !1), r = /* @__PURE__ */ W(t, dS);
	var i = z();
	ta(N(i), () => um, (e, t) => {
		t(e, G(() => r, {
			get open() {
				return n();
			},
			set open(e) {
				n(e);
			}
		}));
	}), B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-portal.svelte
var pS = new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
function mS(e, t) {
	let n = /* @__PURE__ */ W(t, pS);
	var r = z();
	ta(N(r), () => ml, (e, t) => {
		t(e, G(() => n));
	}), B(e, r);
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-content.svelte
var hS = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"align",
	"sideOffset",
	"portalProps"
]);
function gS(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "align", 3, "center"), i = K(t, "sideOffset", 3, 4), a = /* @__PURE__ */ W(t, hS);
	mS(e, G(() => t.portalProps, {
		children: (e, o) => {
			var s = z(), c = N(s);
			{
				let e = /* @__PURE__ */ O(() => X("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground w-64 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 origin-(--transform-origin) outline-hidden", t.class));
				ta(c, () => mm, (t, o) => {
					o(t, G({
						"data-slot": "hover-card-content",
						get align() {
							return r();
						},
						get sideOffset() {
							return i();
						},
						get class() {
							return I(e);
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
			B(e, s);
		},
		$$slots: { default: !0 }
	})), D();
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-trigger.svelte
var _S = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function vS(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, _S);
	var i = z();
	ta(N(i), () => _m, (e, t) => {
		t(e, G({ "data-slot": "hover-card-trigger" }, () => r, {
			get ref() {
				return n();
			},
			set ref(e) {
				n(e);
			}
		}));
	}), B(e, i), D();
}
//#endregion
//#region src/features/chat/UserCard.svelte
var yS = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"username",
	"description",
	"imgSrc",
	"class"
]), bS = /* @__PURE__ */ R("<!> <!>", 1), xS = /* @__PURE__ */ R("<p class=\"text-sm\"> </p>"), SS = /* @__PURE__ */ R("<div><!> <div class=\"space-y-1\"><h4 class=\"text-sm font-semibold\"> </h4> <!></div></div>");
function CS(e, t) {
	E(t, !0);
	let n = /* @__PURE__ */ W(t, yS);
	var r = SS();
	U(r, (e) => ({
		class: e,
		...n
	}), [() => X("flex justify-between space-x-4", t.class)]);
	var i = M(r), a = (e) => {
		ag(e, {
			children: (e, n) => {
				var r = bS(), i = N(r);
				sg(i, { get src() {
					return t.imgSrc;
				} }), lg(P(i, 2), {
					children: (e, t) => {
						Qe(), B(e, Ni("Profile Image"));
					},
					$$slots: { default: !0 }
				}), B(e, r);
			},
			$$slots: { default: !0 }
		});
	};
	V(i, (e) => {
		t.imgSrc !== "" && e(a);
	});
	var o = P(i, 2), s = M(o), c = M(s, !0);
	T(s);
	var l = P(s, 2), u = (e) => {
		var n = xS(), r = M(n, !0);
		T(n), gr(() => Ii(r, t.description)), B(e, n);
	};
	V(l, (e) => {
		t.description !== "" && e(u);
	}), T(o), T(r), gr(() => Ii(c, t.username)), B(e, r), D();
}
//#endregion
//#region src/features/chat/Userlist.svelte
var wS = "text-purple-600", TS = "text-red-600", ES = "text-amber-600", DS = "text-white", OS = "text-gray-600", kS = (e) => e >= mo.SITERADMIN ? wS : e >= mo.ADMIN ? TS : e == mo.MODERATOR ? ES : e >= mo.USER ? DS : OS, AS = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"class"
]), jS = /* @__PURE__ */ R("<li><!></li>"), MS = /* @__PURE__ */ R("<ul class=\"no-scrollbar overflow-auto\"></ul> <!>", 1), NS = /* @__PURE__ */ R("<!> <!>", 1), PS = /* @__PURE__ */ R("<div><!></div>");
function FS(e, t) {
	E(t, !0);
	let n = () => Lt(bo, "$userlistStore", r), [r, i] = Rt(), a = /* @__PURE__ */ O(() => n().userlist), o = /* @__PURE__ */ O(() => I(a).length > 0), s = /* @__PURE__ */ A(null), c = /* @__PURE__ */ W(t, AS);
	var l = PS();
	U(l, (e) => ({
		class: e,
		...c
	}), [() => X("flex", t.class)]);
	var u = M(l), d = (e) => {
		fS(e, {
			children: (e, t) => {
				var n = MS(), r = N(n);
				Yi(r, 29, () => I(a), (e) => e.name, (e, t) => {
					var n = jS();
					vS(M(n), {
						children: (e, n) => {
							Qe();
							var r = Ni();
							gr(() => Ii(r, I(t).name)), B(e, r);
						},
						$$slots: { default: !0 }
					}), T(n), gr((e) => Ca(n, 1, e), [() => _a(X("text-sm font-bold font-stretch-condensed antialiased md:text-base md:font-extrabold md:font-stretch-normal md:subpixel-antialiased", kS(I(t).rank)))]), Si("mouseenter", n, () => j(s, I(t), !0)), da(n, () => Xx, () => ({
						duration: 200,
						easing: lx
					})), fa(3, n, () => mx, () => ({ duration: 200 })), B(e, n);
				}), T(r);
				var i = P(r, 2), o = (e) => {
					let t = /* @__PURE__ */ O(() => I(s).name), n = /* @__PURE__ */ O(() => I(s).profile.text), r = /* @__PURE__ */ O(() => I(s).profile.image);
					gS(e, {
						children: (e, i) => {
							CS(e, {
								get username() {
									return I(t);
								},
								get description() {
									return I(n);
								},
								get imgSrc() {
									return I(r);
								}
							});
						},
						$$slots: { default: !0 }
					});
				};
				V(i, (e) => {
					I(s) && e(o);
				}), B(e, n);
			},
			$$slots: { default: !0 }
		});
	}, f = (e) => {
		eS(e, {
			class: "flex-1",
			children: (e, t) => {
				rS(e, {
					children: (e, t) => {
						var n = NS(), r = N(n);
						sS(r, {
							variant: "icon",
							children: (e, t) => {
								g_(e, {
									get icon() {
										return o_;
									},
									class: "size-5 motion-safe:animate-[spin_6s_linear_infinite]"
								});
							},
							$$slots: { default: !0 }
						}), uS(P(r, 2), {
							class: "select-none",
							children: (e, t) => {
								Qe(), B(e, Ni("No users"));
							},
							$$slots: { default: !0 }
						}), B(e, n);
					},
					$$slots: { default: !0 }
				});
			},
			$$slots: { default: !0 }
		});
	};
	V(u, (e) => {
		I(o) ? e(d) : e(f, -1);
	}), T(l), B(e, l), D(), i();
}
//#endregion
//#region src/features/chat/ChatLayout.svelte
var IS = (e) => e.isCollapsed() ? e.expand() : e.collapse(), LS = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"isLoggedIn",
	"reversed",
	"reverseLayout",
	"class"
]), RS = /* @__PURE__ */ R("<!> <!>", 1), zS = /* @__PURE__ */ R("<div><!> <!> <!> <!> <!> <!></div>");
function BS(e, t) {
	E(t, !0);
	let n = /* @__PURE__ */ A(null), r = /* @__PURE__ */ A(null), i = /* @__PURE__ */ A(null), a = /* @__PURE__ */ A(null), o = () => {
		!I(n) || !I(r) || (t.reversed && Z.current ? IS(I(n)) : IS(I(r)));
	}, s = /* @__PURE__ */ W(t, LS);
	var c = zS();
	U(c, (e) => ({
		class: e,
		...s
	}), [() => X("overflow-hidden", t.class)]);
	var l = M(c);
	Gx(l, {
		get reversed() {
			return t.reversed;
		},
		get reverseLayout() {
			return t.reverseLayout;
		},
		toggleUserlist: o,
		onlineCount: 0,
		class: "h-8 max-h-8 min-h-8 w-full gap-1.5 p-1 md:h-10 md:max-h-10 md:min-h-10 md:w-full md:gap-2 md:p-2"
	});
	var u = P(l, 2);
	X_(u, {});
	var d = P(u, 2);
	ox(d, {
		get reversed() {
			return t.reversed;
		},
		class: "flex-16",
		get leftPane() {
			return I(n);
		},
		set leftPane(e) {
			j(n, e, !0);
		},
		get rightPane() {
			return I(r);
		},
		set rightPane(e) {
			j(r, e, !0);
		},
		get leftPaneRef() {
			return I(i);
		},
		set leftPaneRef(e) {
			j(i, e, !0);
		},
		get rightPaneRef() {
			return I(a);
		},
		set rightPaneRef(e) {
			j(a, e, !0);
		}
	});
	var f = P(d, 2), p = (e) => {
		var n = RS(), r = N(n);
		FS(r, {
			[si()]: (e) => (Mv(t.reversed && Z.current ? I(i) : I(a)) || x)(e),
			class: "flex-1"
		}), Yx(P(r, 2), {
			[si()]: (e) => (Mv(t.reversed && Z.current ? I(a) : I(i)) || x)(e),
			class: "flex-1"
		}), B(e, n);
	};
	V(f, (e) => {
		I(i) && I(a) && e(p);
	});
	var m = P(f, 2);
	X_(m, {});
	var h = P(m, 2), g = (e) => {
		Hx(e, { class: "flex h-full flex-3 flex-col justify-end" });
	}, _ = (e) => {
		Iv(e, { class: "w-full flex-none" });
	};
	V(h, (e) => {
		t.isLoggedIn ? e(g) : e(_, -1);
	}), T(c), B(e, c), D();
}
//#endregion
//#region src/lib/components/ui/aspect-ratio/aspect-ratio.svelte
var VS = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function HS(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, VS);
	var i = z();
	ta(N(i), () => Ku, (e, t) => {
		t(e, G({ "data-slot": "aspect-ratio" }, () => r, {
			get ref() {
				return n();
			},
			set ref(e) {
				n(e);
			}
		}));
	}), B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/dialog/dialog.svelte
var US = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"open"
]);
function WS(e, t) {
	E(t, !0);
	let n = K(t, "open", 15, !1), r = /* @__PURE__ */ W(t, US);
	var i = z();
	ta(N(i), () => Kp, (e, t) => {
		t(e, G(() => r, {
			get open() {
				return n();
			},
			set open(e) {
				n(e);
			}
		}));
	}), B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/dialog/dialog-portal.svelte
var GS = new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
function KS(e, t) {
	let n = /* @__PURE__ */ W(t, GS);
	var r = z();
	ta(N(r), () => ml, (e, t) => {
		t(e, G(() => n));
	}), B(e, r);
}
//#endregion
//#region src/lib/components/ui/dialog/dialog-title.svelte
var qS = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class"
]);
function JS(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, qS);
	var i = z(), a = N(i);
	{
		let e = /* @__PURE__ */ O(() => X("font-heading text-base leading-none font-medium", t.class));
		ta(a, () => ol, (t, i) => {
			i(t, G({
				"data-slot": "dialog-title",
				get class() {
					return I(e);
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
	B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/dialog/dialog-footer.svelte
var YS = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children",
	"showCloseButton"
]), XS = /* @__PURE__ */ R("<div><!> <!></div>");
function ZS(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "showCloseButton", 3, !1), i = /* @__PURE__ */ W(t, YS);
	var a = XS();
	U(a, (e) => ({
		"data-slot": "dialog-footer",
		class: e,
		...i
	}), [() => X("bg-muted/50 -mx-4 -mb-4 rounded-b-xl border-t p-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", t.class)]);
	var o = M(a);
	H(o, () => t.children ?? x);
	var s = P(o, 2), c = (e) => {
		var t = z(), n = N(t);
		{
			let e = (e, t) => {
				z_(e, G({ variant: "outline" }, () => t?.().props, {
					children: (e, t) => {
						Qe(), B(e, Ni("Close"));
					},
					$$slots: { default: !0 }
				}));
			};
			ta(n, () => Yp, (t, n) => {
				n(t, {
					child: e,
					$$slots: { child: !0 }
				});
			});
		}
		B(e, t);
	};
	V(s, (e) => {
		r() && e(c);
	}), T(a), Ya(a, (e) => n(e), () => n()), B(e, a), D();
}
//#endregion
//#region src/lib/components/ui/dialog/dialog-header.svelte
var QS = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]), $S = /* @__PURE__ */ R("<div><!></div>");
function eC(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, QS);
	var i = $S();
	U(i, (e) => ({
		"data-slot": "dialog-header",
		class: e,
		...r
	}), [() => X("gap-2 flex flex-col", t.class)]), H(M(i), () => t.children ?? x), T(i), Ya(i, (e) => n(e), () => n()), B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/dialog/dialog-overlay.svelte
var tC = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class"
]);
function nC(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, tC);
	var i = z(), a = N(i);
	{
		let e = /* @__PURE__ */ O(() => X("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50", t.class));
		ta(a, () => Fu, (t, i) => {
			i(t, G({
				"data-slot": "dialog-overlay",
				get class() {
					return I(e);
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
	B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/dialog/dialog-content.svelte
var rC = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"portalProps",
	"children",
	"showCloseButton"
]), iC = /* @__PURE__ */ R("<!> <span class=\"sr-only\">Close</span>", 1), aC = /* @__PURE__ */ R("<!> <!>", 1);
function oC(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "showCloseButton", 3, !0), i = /* @__PURE__ */ W(t, rC);
	KS(e, G(() => t.portalProps, {
		children: (e, a) => {
			var o = aC(), s = N(o);
			ta(s, () => nC, (e, t) => {
				t(e, {});
			});
			var c = P(s, 2);
			{
				let e = /* @__PURE__ */ O(() => X("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 ring-foreground/10 grid max-w-[calc(100%-2rem)] gap-4 rounded-xl p-4 text-sm ring-1 duration-100 sm:max-w-sm fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none", t.class));
				ta(c, () => $p, (a, o) => {
					o(a, G({
						"data-slot": "dialog-content",
						get class() {
							return I(e);
						}
					}, () => i, {
						get ref() {
							return n();
						},
						set ref(e) {
							n(e);
						},
						children: (e, n) => {
							var i = aC(), a = N(i);
							H(a, () => t.children ?? x);
							var o = P(a, 2), s = (e) => {
								var t = z(), n = N(t);
								{
									let e = (e, t) => {
										z_(e, G({
											variant: "ghost",
											class: "absolute top-2 right-2",
											size: "icon-sm"
										}, () => t?.().props, {
											children: (e, t) => {
												var n = iC();
												g_(N(n), {
													get icon() {
														return Kg;
													},
													strokeWidth: 2
												}), Qe(2), B(e, n);
											},
											$$slots: { default: !0 }
										}));
									};
									ta(n, () => Yp, (t, n) => {
										n(t, {
											"data-slot": "dialog-close",
											child: e,
											$$slots: { child: !0 }
										});
									});
								}
								B(e, t);
							};
							V(o, (e) => {
								r() && e(s);
							}), B(e, i);
						},
						$$slots: { default: !0 }
					}));
				});
			}
			B(e, o);
		},
		$$slots: { default: !0 }
	})), D();
}
//#endregion
//#region src/lib/components/ui/dialog/dialog-description.svelte
var sC = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class"
]);
function cC(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, sC);
	var i = z(), a = N(i);
	{
		let e = /* @__PURE__ */ O(() => X("text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3", t.class));
		ta(a, () => Vu, (t, i) => {
			i(t, G({
				"data-slot": "dialog-description",
				get class() {
					return I(e);
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
	B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/dialog/dialog-trigger.svelte
var lC = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"type"
]);
function uC(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "type", 3, "button"), i = /* @__PURE__ */ W(t, lC);
	var a = z();
	ta(N(a), () => Ru, (e, t) => {
		t(e, G({
			"data-slot": "dialog-trigger",
			get type() {
				return r();
			}
		}, () => i, {
			get ref() {
				return n();
			},
			set ref(e) {
				n(e);
			}
		}));
	}), B(e, a), D();
}
//#endregion
//#region node_modules/vaul-svelte/node_modules/svelte-toolbelt/dist/utils/is.js
function dC(e) {
	return typeof e == "function";
}
function fC(e) {
	return typeof e == "object" && !!e;
}
var pC = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function mC(e) {
	return e == null || pC.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => mC(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
//#endregion
//#region node_modules/vaul-svelte/node_modules/svelte-toolbelt/dist/box/box.svelte.js
var hC = Symbol("box"), gC = Symbol("is-writable");
function _C(e) {
	return fC(e) && hC in e;
}
function vC(e) {
	return Q.isBox(e) && gC in e;
}
function Q(e) {
	let t = /* @__PURE__ */ A(In(e));
	return {
		[hC]: !0,
		[gC]: !0,
		get current() {
			return I(t);
		},
		set current(e) {
			j(t, e, !0);
		}
	};
}
function yC(e, t) {
	let n = /* @__PURE__ */ O(e);
	return t ? {
		[hC]: !0,
		[gC]: !0,
		get current() {
			return I(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[hC]: !0,
		get current() {
			return e();
		}
	};
}
function bC(e) {
	return Q.isBox(e) ? e : dC(e) ? Q.with(e) : Q(e);
}
function xC(e) {
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
function SC(e) {
	return Q.isWritableBox(e) ? {
		[hC]: !0,
		get current() {
			return e.current;
		}
	} : e;
}
Q.from = bC, Q.with = yC, Q.flatten = xC, Q.readonly = SC, Q.isBox = _C, Q.isWritableBox = vC;
//#endregion
//#region node_modules/vaul-svelte/node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
function CC(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
//#endregion
//#region node_modules/vaul-svelte/node_modules/svelte-toolbelt/dist/utils/strings.js
var wC = /\d/, TC = [
	"-",
	"_",
	"/",
	"."
];
function EC(e = "") {
	if (!wC.test(e)) return e !== e.toLowerCase();
}
function DC(e) {
	let t = [], n = "", r, i;
	for (let a of e) {
		let e = TC.includes(a);
		if (e === !0) {
			t.push(n), n = "", r = void 0;
			continue;
		}
		let o = EC(a);
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
function OC(e) {
	return e ? DC(e).map((e) => AC(e)).join("") : "";
}
function kC(e) {
	return jC(OC(e || ""));
}
function AC(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function jC(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
//#endregion
//#region node_modules/vaul-svelte/node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function MC(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			t[OC(e)] = n;
			return;
		}
		if (e.startsWith("--")) {
			t[e] = n;
			return;
		}
		t[kC(e)] = n;
	}
	return Cs(e, n), t;
}
//#endregion
//#region node_modules/vaul-svelte/node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
function NC(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region node_modules/vaul-svelte/node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function PC(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var FC = PC(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function IC(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${FC(t)}: ${e[t]};`).join("\n");
}
//#endregion
//#region node_modules/vaul-svelte/node_modules/svelte-toolbelt/dist/utils/style.js
function LC(e = {}) {
	return IC(e).replace("\n", " ");
}
LC({
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
//#endregion
//#region node_modules/vaul-svelte/node_modules/svelte-toolbelt/dist/utils/merge-props.js
function RC(e) {
	return e.length > 2 && e.startsWith("on") && e[2] === e[2]?.toLowerCase();
}
function zC(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		for (let e in r) {
			let n = t[e], i = r[e], a = typeof n == "function", o = typeof i == "function";
			if (a && typeof o && RC(e)) t[e] = CC(n, i);
			else if (a && o) t[e] = NC(n, i);
			else if (e === "class") {
				let r = mC(n), a = mC(i);
				r && a ? t[e] = ga(n, i) : r ? t[e] = ga(n) : a && (t[e] = ga(i));
			} else if (e === "style") {
				let r = typeof n == "object", a = typeof i == "object", o = typeof n == "string", s = typeof i == "string";
				if (r && a) t[e] = {
					...n,
					...i
				};
				else if (r && s) {
					let r = MC(i);
					t[e] = {
						...n,
						...r
					};
				} else if (o && a) t[e] = {
					...MC(n),
					...i
				};
				else if (o && s) {
					let r = MC(n), a = MC(i);
					t[e] = {
						...r,
						...a
					};
				} else r ? t[e] = n : a ? t[e] = i : o ? t[e] = n : s && (t[e] = i);
			} else t[e] = i === void 0 ? n : i;
		}
	}
	return typeof t.style == "object" && (t.style = LC(t.style).replaceAll("\n", " ")), t.hidden !== !0 && (t.hidden = void 0, delete t.hidden), t.disabled !== !0 && (t.disabled = void 0, delete t.disabled), t;
}
//#endregion
//#region node_modules/vaul-svelte/node_modules/runed/dist/internal/configurable-globals.js
var BC = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region node_modules/vaul-svelte/node_modules/runed/dist/internal/utils/dom.js
function VC(e) {
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
		let { window: t = BC, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = Ht((e) => {
			let n = xi(t, "focusin", e), r = xi(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? VC(this.#e) : null;
	}
}();
//#endregion
//#region node_modules/vaul-svelte/node_modules/runed/dist/utilities/watch/watch.svelte.js
function HC(e, t) {
	switch (e) {
		case "post":
			cr(t);
			break;
		case "pre":
			ur(t);
			break;
	}
}
function UC(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	HC(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = L(() => n(t, o));
		return o = t, r;
	});
}
function WC(e, t, n) {
	let r = dr(() => {
		let i = !1;
		UC(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	cr(() => r);
}
function GC(e, t, n) {
	UC(e, "post", t, n);
}
function KC(e, t, n) {
	UC(e, "pre", t, n);
}
GC.pre = KC;
function qC(e, t) {
	WC(e, "post", t);
}
function JC(e, t) {
	WC(e, "pre", t);
}
qC.pre = JC;
//#endregion
//#region node_modules/vaul-svelte/node_modules/runed/dist/utilities/context/context.js
var YC = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return mt(this.#t);
	}
	get() {
		let e = ft(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = ft(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return pt(this.#t, e);
	}
};
//#endregion
//#region node_modules/vaul-svelte/node_modules/svelte-toolbelt/dist/utils/on-destroy-effect.svelte.js
function XC(e) {
	cr(() => () => {
		e();
	});
}
//#endregion
//#region node_modules/vaul-svelte/node_modules/svelte-toolbelt/dist/utils/use-ref-by-id.svelte.js
function ZC({ id: e, ref: t, deps: n = () => !0, onRefChange: r, getRootNode: i }) {
	GC([() => e.current, n], ([e]) => {
		let n = (i?.() ?? document)?.getElementById(e);
		n ? t.current = n : t.current = null, r?.(t.current);
	}), XC(() => {
		t.current = null, r?.(null);
	});
}
//#endregion
//#region node_modules/vaul-svelte/node_modules/svelte-toolbelt/dist/utils/after-sleep.js
function QC(e, t) {
	return setTimeout(t, e);
}
//#endregion
//#region node_modules/vaul-svelte/node_modules/svelte-toolbelt/dist/utils/after-tick.js
function $C(e) {
	ni().then(e);
}
//#endregion
//#region node_modules/vaul-svelte/dist/internal/noop.js
function ew() {}
//#endregion
//#region node_modules/vaul-svelte/dist/internal/constants.js
var tw = {
	DURATION: .5,
	EASE: [
		.32,
		.72,
		0,
		1
	]
}, nw = .25, rw = "vaul-dragging", iw = /* @__PURE__ */ new WeakMap();
function aw(e, t, n = !1) {
	if (!e || !(e instanceof HTMLElement)) return;
	let r = {};
	Object.entries(t).forEach(([t, n]) => {
		if (t.startsWith("--")) {
			e.style.setProperty(t, n);
			return;
		}
		r[t] = e.style[t], e.style[t] = n;
	}), !n && iw.set(e, r);
}
function ow(e, t) {
	if (!e || !(e instanceof HTMLElement)) return;
	let n = iw.get(e);
	n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([t, n]) => {
		e.style[t] = n;
	}));
}
var sw = (e) => {
	switch (e) {
		case "top":
		case "bottom": return !0;
		case "left":
		case "right": return !1;
		default: return e;
	}
};
function cw(e, t) {
	if (!e) return null;
	let n = window.getComputedStyle(e), r = n.transform || n.webkitTransform || n.mozTransform, i = r.match(/^matrix3d\((.+)\)$/);
	return i ? parseFloat(i[1].split(", ")[sw(t) ? 13 : 12]) : (i = r.match(/^matrix\((.+)\)$/), i ? parseFloat(i[1].split(", ")[sw(t) ? 5 : 4]) : null);
}
function lw(e) {
	return 8 * (Math.log(e + 1) - 2);
}
function uw(e, t) {
	if (!e) return () => {};
	let n = e.style.cssText;
	return Object.assign(e.style, t), () => {
		e.style.cssText = n;
	};
}
//#endregion
//#region node_modules/vaul-svelte/dist/use-snap-points.svelte.js
function dw({ snapPoints: e, drawerNode: t, overlayNode: n, fadeFromIndex: r, setOpenTime: i, direction: a, container: o, snapToSequentialPoint: s, activeSnapPoint: c, open: l, isReleasing: u }) {
	let d = /* @__PURE__ */ A(In(typeof window < "u" ? {
		innerWidth: window.innerWidth,
		innerHeight: window.innerHeight
	} : void 0));
	eo(() => {
		function e() {
			j(d, {
				innerWidth: window.innerWidth,
				innerHeight: window.innerHeight
			}, !0);
		}
		return xi(window, "resize", e);
	});
	let f = /* @__PURE__ */ O(() => c.current === e.current?.[e.current.length - 1] || null), p = /* @__PURE__ */ O(() => e.current?.findIndex((e) => e === c.current)), m = /* @__PURE__ */ O(() => e.current && e.current.length > 0 && (r.current || r.current === 0) && !Number.isNaN(r.current) && e.current[r.current] === c.current || !e.current), h = /* @__PURE__ */ O(() => {
		l.current;
		let t = o.current ? {
			width: o.current.getBoundingClientRect().width,
			height: o.current.getBoundingClientRect().height
		} : typeof window < "u" ? {
			width: window.innerWidth,
			height: window.innerHeight
		} : {
			width: 0,
			height: 0
		};
		return e.current?.map((e) => {
			let n = typeof e == "string", r = 0;
			if (n && (r = parseInt(e, 10)), sw(a.current)) {
				let i = n ? r : I(d) ? e * t.height : 0;
				return I(d) ? a.current === "bottom" ? t.height - i : -t.height + i : i;
			}
			let i = n ? r : I(d) ? e * t.width : 0;
			return I(d) ? a.current === "right" ? t.width - i : -t.width + i : i;
		}) ?? [];
	}), g = /* @__PURE__ */ O(() => I(p) !== null && I(p) !== void 0 ? I(h)[I(p)] : null);
	function _(t) {
		e.current && t === I(h).length - 1 && i(/* @__PURE__ */ new Date());
	}
	function v(i) {
		let o = I(h)?.findIndex((e) => e === i) ?? null;
		_(o), aw(t(), {
			transition: `transform ${tw.DURATION}s cubic-bezier(${tw.EASE.join(",")})`,
			transform: sw(a.current) ? `translate3d(0, ${i}px, 0)` : `translate3d(${i}px, 0, 0)`
		}), I(h) && o !== I(h).length - 1 && r.current !== void 0 && o !== r.current && o < r.current ? aw(n(), {
			transition: `opacity ${tw.DURATION}s cubic-bezier(${tw.EASE.join(",")})`,
			opacity: "0"
		}) : aw(n(), {
			transition: `opacity ${tw.DURATION}s cubic-bezier(${tw.EASE.join(",")})`,
			opacity: "1"
		}), c.current = e.current?.[Math.max(o, 0)];
	}
	GC([() => c.current, () => l.current], () => {
		let t = u();
		if (!c.current || t) return;
		let n = e.current?.findIndex((e) => e === c.current) ?? -1;
		if (I(h) && n !== -1 && typeof I(h)[n] == "number") {
			if (I(h)[n] === c.current) return;
			v(I(h)[n]);
		}
	});
	function y({ draggedDistance: t, closeDrawer: i, velocity: o, dismissible: c }) {
		if (r.current === void 0) return;
		let l = a.current, u = l === "bottom" || l === "right" ? (I(g) ?? 0) - t : (I(g) ?? 0) + t, d = I(p) === r.current - 1, m = I(p) === 0, _ = t > 0;
		if (d && aw(n(), { transition: `opacity ${tw.DURATION}s cubic-bezier(${tw.EASE.join(",")})` }), !s.current && o > 2 && !_) {
			c ? i() : v(I(h)[0]);
			return;
		}
		if (!s.current && o > 2 && _ && I(h) && e.current) {
			v(I(h)[e.current.length - 1]);
			return;
		}
		let y = I(h)?.reduce((e, t) => typeof e != "number" || typeof t != "number" ? e : Math.abs(t - u) < Math.abs(e - u) ? t : e), b = sw(l) ? window.innerHeight : window.innerWidth;
		if (o > .4 && Math.abs(t) < b * .4) {
			let t = _ ? 1 : -1;
			if (t > 0 && I(f) && e.current) {
				v(I(h)[e.current.length - 1]);
				return;
			}
			if (m && t < 0 && c && i(), I(p) === null) return;
			v(I(h)[I(p) + t]);
			return;
		}
		v(y);
	}
	function b({ draggedDistance: e }) {
		if (I(g) === null) return;
		let n = a.current, r = fw(n) ? I(g) - e : I(g) + e, i = I(h)[I(h).length - 1];
		fw(n) && r < i || !fw(n) && r > i || aw(t(), { transform: sw(n) ? `translate3d(0, ${r}px, 0)` : `translate3d(${r}px, 0, 0)` });
	}
	function x(t, n) {
		if (!e.current || typeof I(p) != "number" || !I(h) || r.current === void 0) return null;
		let i = I(p) === r.current - 1;
		if (I(p) >= r.current && n) return 0;
		if (i && !n) return 1;
		if (!I(m) && !i) return null;
		let a = i ? I(p) + 1 : I(p) - 1, o = i ? I(h)[a] - I(h)[a - 1] : I(h)[a + 1] - I(h)[a], s = t / Math.abs(o);
		return i ? 1 - s : s;
	}
	return {
		get isLastSnapPoint() {
			return I(f);
		},
		get shouldFade() {
			return I(m);
		},
		get activeSnapPointIndex() {
			return I(p);
		},
		get snapPointsOffset() {
			return ct(I(h));
		},
		getPercentageDragged: x,
		onRelease: y,
		onDrag: b
	};
}
function fw(e) {
	return e === "bottom" || e === "right";
}
//#endregion
//#region node_modules/vaul-svelte/dist/internal/browser.js
var pw = typeof document < "u";
function mw() {
	let e = navigator.userAgent;
	return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || /FxiOS/.test(e));
}
function hw() {
	return bw(/^Mac/);
}
function gw() {
	return bw(/^iPhone/);
}
function _w() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function vw() {
	return bw(/^iPad/) || hw() && navigator.maxTouchPoints > 1;
}
function yw() {
	return gw() || vw();
}
function bw(e) {
	return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
//#endregion
//#region node_modules/vaul-svelte/dist/use-prevent-scroll.svelte.js
var xw = 24;
function Sw(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
var Cw = pw && window.visualViewport;
function ww(e) {
	let t = window.getComputedStyle(e);
	return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Tw(e) {
	for (ww(e) && (e = e.parentElement); e && !ww(e);) e = e.parentElement;
	return e || document.scrollingElement || document.documentElement;
}
var Ew = new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]), Dw = 0, Ow;
function kw(e) {
	GC(e.isDisabled, () => {
		if (!e.isDisabled()) return Dw++, Dw === 1 && yw() && (Ow = Aw()), () => {
			Dw--, Dw === 0 && Ow?.();
		};
	});
}
function Aw() {
	let e, t = 0, n = (n) => {
		e = Tw(n.target), !(e === document.documentElement && e === document.body) && (t = n.changedTouches[0].pageY);
	}, r = (n) => {
		if (!e || e === document.documentElement || e === document.body) {
			n.preventDefault();
			return;
		}
		let r = n.changedTouches[0].pageY, i = e.scrollTop, a = e.scrollHeight - e.clientHeight;
		a !== 0 && ((i <= 0 && r > t || i >= a && r < t) && n.preventDefault(), t = r);
	}, i = (e) => {
		let t = e.target;
		Nw(t) && t !== document.activeElement && (e.preventDefault(), t.style.transform = "translateY(-2000px)", t.focus(), requestAnimationFrame(() => {
			t.style.transform = "";
		}));
	}, a = (e) => {
		let t = e.target;
		Nw(t) && (t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
			t.style.transform = "", Cw && (Cw.height < window.innerHeight ? requestAnimationFrame(() => {
				Mw(t);
			}) : Cw.addEventListener("resize", () => Mw(t), { once: !0 }));
		}));
	}, o = () => {
		window.scrollTo(0, 0);
	}, s = window.pageXOffset, c = window.pageYOffset, l = Sw(jw(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
	window.scrollTo(0, 0);
	let u = Sw(xi(document, "touchstart", n, {
		passive: !1,
		capture: !0
	}), xi(document, "touchmove", r, {
		passive: !1,
		capture: !0
	}), xi(document, "touchend", i, {
		passive: !1,
		capture: !0
	}), xi(document, "focus", a, { capture: !0 }), xi(window, "scroll", o));
	return () => {
		l(), u(), window.scrollTo(s, c);
	};
}
function jw(e, t, n) {
	let r = e.style[t];
	return e.style[t] = n, () => {
		e.style[t] = r;
	};
}
function Mw(e) {
	let t = document.scrollingElement || document.documentElement;
	for (; e && e !== t;) {
		let t = Tw(e);
		if (t !== document.documentElement && t !== document.body && t !== e) {
			let n = t.getBoundingClientRect().top, r = e.getBoundingClientRect().top;
			e.getBoundingClientRect().bottom > t.getBoundingClientRect().bottom + xw && (t.scrollTop += r - n);
		}
		e = t.parentElement;
	}
}
function Nw(e) {
	return e instanceof HTMLInputElement && !Ew.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
//#endregion
//#region node_modules/vaul-svelte/dist/use-position-fixed.svelte.js
var Pw = null;
function Fw({ open: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: i, noBodyStyles: a }) {
	let o = /* @__PURE__ */ A(In(typeof window < "u" ? window.location.href : "")), s = 0;
	function c() {
		if (_w() && Pw === null && e.current && !a.current) {
			Pw = {
				position: document.body.style.position,
				top: document.body.style.top,
				left: document.body.style.left,
				height: document.body.style.height,
				right: "unset"
			};
			let { scrollX: e, innerHeight: t } = window;
			document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
				top: `${-s}px`,
				left: `${-e}px`,
				right: "0px",
				height: "auto"
			}), window.setTimeout(() => window.requestAnimationFrame(() => {
				let e = t - window.innerHeight;
				e && s >= t && (document.body.style.top = `${-(s + e)}px`);
			}), 300);
		}
	}
	function l() {
		if (_w() && Pw !== null && !a.current) {
			let e = -parseInt(document.body.style.top, 10), t = -parseInt(document.body.style.left, 10);
			Object.assign(document.body.style, Pw), window.requestAnimationFrame(() => {
				if (i.current && I(o) !== window.location.href) {
					j(o, window.location.href, !0);
					return;
				}
				window.scrollTo(t, e);
			}), Pw = null;
		}
	}
	return eo(() => {
		function e() {
			s = window.scrollY;
		}
		return e(), xi(window, "scroll", e);
	}), GC([() => t.current, () => I(o)], () => {
		if (t.current) return () => {
			typeof document > "u" || document.querySelector("[data-vaul-drawer]") || l();
		};
	}), GC([
		() => e.current,
		() => r(),
		() => I(o),
		() => t.current,
		() => n.current
	], () => {
		n.current || !r() || (e.current ? (!window.matchMedia("(display-mode: standalone)").matches && c(), t.current || window.setTimeout(() => {
			l();
		}, 500)) : l());
	}), { restorePositionSetting: l };
}
//#endregion
//#region node_modules/vaul-svelte/dist/context.js
var Iw = new YC("Drawer.Root");
//#endregion
//#region node_modules/vaul-svelte/dist/use-drawer-root.svelte.js
function Lw(e) {
	let t = /* @__PURE__ */ A(!1), n = /* @__PURE__ */ A(!1), r = /* @__PURE__ */ A(!1), i = /* @__PURE__ */ A(null), a = /* @__PURE__ */ A(null), o = null, s = null, c = null, l = null, u = !1, d = null, f = 0, p = Q(!1), m = /* @__PURE__ */ A(!e.open.current), h = 0, g = 0, _ = 0, v = 0, y = !1, b = dw({
		snapPoints: e.snapPoints,
		drawerNode: () => I(a),
		activeSnapPoint: e.activeSnapPoint,
		container: e.container,
		direction: e.direction,
		fadeFromIndex: e.fadeFromIndex,
		overlayNode: () => I(i),
		setOpenTime: (e) => {
			o = e;
		},
		snapToSequentialPoint: e.snapToSequentialPoint,
		open: e.open,
		isReleasing: () => y
	});
	kw({ isDisabled: () => !e.open.current || I(n) || !e.modal.current || I(r) || !I(t) || !e.repositionInputs.current || !e.disablePreventScroll.current });
	let { restorePositionSetting: x } = Fw({
		...e,
		hasBeenOpened: () => I(t)
	});
	function ee() {
		return (window.innerWidth - 26) / window.innerWidth;
	}
	function te(t) {
		!e.dismissible.current && !e.snapPoints.current || I(a) && !I(a).contains(t.target) || (g = I(a)?.getBoundingClientRect().height || 0, _ = I(a)?.getBoundingClientRect().width || 0, j(n, !0), s = /* @__PURE__ */ new Date(), yw() && xi(window, "touchend", () => u = !1, { once: !0 }), t.target.setPointerCapture(t.pointerId), f = sw(e.direction.current) ? t.pageY : t.pageX);
	}
	function S(t, n) {
		let r = t, i = window.getSelection()?.toString(), s = I(a) ? cw(I(a), e.direction.current) : null, c = /* @__PURE__ */ new Date();
		if (r.tagName === "SELECT" || r.hasAttribute("data-vaul-no-drag") || r.closest("[data-vaul-no-drag]")) return !1;
		if (e.direction.current === "right" || e.direction.current === "left") return !0;
		if (o && c.getTime() - o.getTime() < 500) return !1;
		if (s !== null && (e.direction.current === "bottom" ? s > 0 : s < 0)) return !0;
		if (i && i.length > 0) return !1;
		if (l && c.getTime() - l.getTime() < e.scrollLockTimeout.current && s === 0 || n) return l = c, !1;
		for (; r;) {
			if (r.scrollHeight > r.clientHeight) {
				if (r.scrollTop !== 0) return l = /* @__PURE__ */ new Date(), !1;
				if (r.getAttribute("role") === "dialog") return !0;
			}
			r = r.parentNode;
		}
		return !0;
	}
	function ne(t) {
		if (!I(a) || !I(n)) return;
		let r = e.direction.current === "bottom" || e.direction.current === "right" ? 1 : -1, o = (f - (sw(e.direction.current) ? t.pageY : t.pageX)) * r, s = o > 0, c = e.snapPoints.current && !e.dismissible.current && !s;
		if (c && b.activeSnapPointIndex === 0) return;
		let l = Math.abs(o), d = document.querySelector("[data-vaul-drawer-wrapper]"), p = l / (e.direction.current === "bottom" || e.direction.current === "top" ? g : _), m = b.getPercentageDragged(l, s);
		if (m !== null && (p = m), c && p >= 1 || !u && !S(t.target, s)) return;
		if (I(a).classList.add(rw), u = !0, aw(I(a), { transition: "none" }), aw(I(i), { transition: "none" }), e.snapPoints.current && b.onDrag({ draggedDistance: o }), s && !e.snapPoints.current) {
			let t = lw(o), n = Math.min(t * -1, 0) * r;
			aw(I(a), { transform: sw(e.direction.current) ? `translate3d(0, ${n}px, 0)` : `translate3d(${n}px, 0, 0)` });
			return;
		}
		let h = 1 - p;
		if ((b.shouldFade || e.fadeFromIndex.current && b.activeSnapPointIndex === e.fadeFromIndex.current - 1) && (e.onDrag.current?.(t, p), aw(I(i), {
			opacity: `${h}`,
			transition: "none"
		}, !0)), d && I(i) && e.shouldScaleBackground.current) {
			let t = Math.min(ee() + p * (1 - ee()), 1), n = 8 - p * 8, r = Math.max(0, 14 - p * 14);
			aw(d, {
				borderRadius: `${n}px`,
				transform: sw(e.direction.current) ? `scale(${t}) translate3d(0, ${r}px, 0)` : `scale(${t}) translate3d(${r}px, 0, 0)`,
				transition: "none"
			}, !0);
		}
		if (!e.snapPoints.current) {
			let t = l * r;
			aw(I(a), { transform: sw(e.direction.current) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)` });
		}
	}
	cr(() => {
		window.requestAnimationFrame(() => {
			j(m, !0);
		});
	});
	function re(n) {
		!e.dismissible.current && !n || (n ? j(t, !0) : oe(!0), e.open.current = n);
	}
	function ie() {
		if (!I(a) || !e.repositionInputs.current) return;
		let t = document.activeElement;
		if (Nw(t) || p.current) {
			let t = window.visualViewport?.height || 0, n = window.innerHeight, r = n - t, i = I(a).getBoundingClientRect().height || 0, o = i > n * .8;
			v ||= i;
			let s = I(a).getBoundingClientRect().top;
			if (Math.abs(h - r) > 60 && (p.current = !p.current), e.snapPoints.current && e.snapPoints.current.length > 0 && b.snapPointsOffset && b.activeSnapPointIndex) {
				let e = b.snapPointsOffset[b.activeSnapPointIndex] || 0;
				r += e;
			}
			if (h = r, i > t || p.current) {
				let n = I(a).getBoundingClientRect().height, i = n;
				n > t && (i = t - (o ? s : 26)), e.fixed.current ? I(a).style.height = `${n - Math.max(r, 0)}px` : I(a).style.height = `${Math.max(i, t - s)}px`;
			} else mw() || (I(a).style.height = `${v}px`);
			e.snapPoints.current && e.snapPoints.current.length > 0 && !p.current ? I(a).style.bottom = "0px" : I(a).style.bottom = `${Math.max(r, 0)}px`;
		}
	}
	GC([
		() => b.activeSnapPointIndex,
		() => e.snapPoints.current,
		() => b.snapPointsOffset,
		() => I(a)
	], () => {
		if (window.visualViewport) return xi(window.visualViewport, "resize", ie);
	});
	function ae() {
		!I(n) || !I(a) || (I(a).classList.remove(rw), u = !1, j(n, !1), c = /* @__PURE__ */ new Date());
	}
	function oe(t) {
		ae(), e.onClose?.current(), t || (pe(!1), e.open.current = !1), window.setTimeout(() => {
			e.snapPoints.current && e.snapPoints.current.length > 0 && (e.activeSnapPoint.current = e.snapPoints.current[0]);
		}, tw.DURATION * 1e3);
	}
	function se() {
		if (!I(a)) return;
		let t = document.querySelector("[data-vaul-drawer-wrapper]"), n = cw(I(a), e.direction.current);
		aw(I(a), {
			transform: "translate3d(0, 0, 0)",
			transition: `transform ${tw.DURATION}s cubic-bezier(${tw.EASE.join(",")})`
		}), aw(I(i), {
			transition: `opacity ${tw.DURATION}s cubic-bezier(${tw.EASE.join(",")})`,
			opacity: "1"
		}), e.shouldScaleBackground.current && n && n > 0 && e.open.current && aw(t, {
			borderRadius: "8px",
			overflow: "hidden",
			...sw(e.direction.current) ? {
				transform: `scale(${ee()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
				transformOrigin: "top"
			} : {
				transform: `scale(${ee()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
				transformOrigin: "left"
			},
			transitionProperty: "transform, border-radius",
			transitionDuration: `${tw.DURATION}s`,
			transitionTimingFunction: `cubic-bezier(${tw.EASE.join(",")})`
		}, !0);
	}
	function ce(e) {
		y = !0, le(e), $C(() => {
			y = !1;
		});
	}
	function le(t) {
		if (!I(n) || !I(a)) return;
		I(a).classList.remove(rw), u = !1, j(n, !1), c = /* @__PURE__ */ new Date();
		let i = cw(I(a), e.direction.current);
		if (!t || t.target && !S(t.target, !1) || !i || Number.isNaN(i) || s === null) return;
		let o = c.getTime() - s.getTime(), l = f - (sw(e.direction.current) ? t.pageY : t.pageX), d = Math.abs(l) / o;
		if (d > .05 && (j(r, !0), setTimeout(() => {
			j(r, !1);
		}, 200)), e.snapPoints.current) {
			let n = e.direction.current === "bottom" || e.direction.current === "right" ? 1 : -1;
			b.onRelease({
				draggedDistance: l * n,
				closeDrawer: oe,
				velocity: d,
				dismissible: e.dismissible.current
			}), e.onRelease.current?.(t, !0);
			return;
		}
		if (e.direction.current === "bottom" || e.direction.current === "right" ? l > 0 : l < 0) {
			se(), e.onRelease.current?.(t, !0);
			return;
		}
		if (d > .4) {
			oe(), e.onRelease.current?.(t, !1);
			return;
		}
		let p = Math.min(I(a).getBoundingClientRect().height ?? 0, window.innerHeight), m = Math.min(I(a).getBoundingClientRect().width ?? 0, window.innerWidth), h = e.direction.current === "left" || e.direction.current === "right";
		if (Math.abs(i) >= (h ? m : p) * e.closeThreshold.current) {
			oe(), e.onRelease.current?.(t, !1);
			return;
		}
		e.onRelease.current?.(t, !0), se();
	}
	GC(() => e.open.current, () => (e.open.current && (aw(document.documentElement, { scrollBehavior: "auto" }), o = /* @__PURE__ */ new Date()), () => {
		ow(document.documentElement, "scrollBehavior");
	}));
	function ue(t) {
		let n = t ? (window.innerWidth - 16) / window.innerWidth : 1, r = t ? -16 : 0;
		d && window.clearTimeout(d), aw(I(a), {
			transition: `transform ${tw.DURATION}s cubic-bezier(${tw.EASE.join(",")})`,
			transform: sw(e.direction.current) ? `scale(${n}) translate3d(0, ${r}px, 0)` : `scale(${n}) translate3d(${r}px, 0, 0)`
		}), !t && I(a) && (d = window.setTimeout(() => {
			let t = cw(I(a), e.direction.current);
			aw(I(a), {
				transition: "none",
				transform: sw(e.direction.current) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)`
			});
		}, 500));
	}
	function de(t, n) {
		if (n < 0) return;
		let r = (window.innerWidth - 16) / window.innerWidth, i = r + n * (1 - r), o = -16 + n * 16;
		aw(I(a), {
			transform: sw(e.direction.current) ? `scale(${i}) translate3d(0, ${o}px, 0)` : `scale(${i}) translate3d(${o}px, 0, 0)`,
			transition: "none"
		});
	}
	function fe(t, n) {
		let r = sw(e.direction.current) ? window.innerHeight : window.innerWidth, i = n ? (r - 16) / r : 1, o = n ? -16 : 0;
		n && aw(I(a), {
			transition: `transform ${tw.DURATION}s cubic-bezier(${tw.EASE.join(",")})`,
			transform: sw(e.direction.current) ? `scale(${i}) translate3d(0, ${o}px, 0)` : `scale(${i}) translate3d(${o}px, 0, 0)`
		});
	}
	let C;
	function pe(t) {
		e.onOpenChange.current?.(t), t && !e.nested.current ? C = document.body.style.cssText : !t && !e.nested.current && QC(tw.DURATION * 1e3, () => {
			document.body.style.cssText = C;
		}), !t && !e.nested.current && x(), setTimeout(() => {
			e.onAnimationEnd.current?.(t);
		}, tw.DURATION * 1e3), t && !e.modal.current && typeof window < "u" && window.requestAnimationFrame(() => {
			document.body.style.pointerEvents = "auto";
		}), t || (document.body.style.pointerEvents = "auto");
	}
	GC(() => e.modal.current, () => {
		e.modal.current || window.requestAnimationFrame(() => {
			document.body.style.pointerEvents = "auto";
		});
	});
	function me(e) {
		j(i, e, !0);
	}
	function he(e) {
		j(a, e, !0);
	}
	return Iw.set({
		...e,
		keyboardIsOpen: p,
		closeDrawer: oe,
		setDrawerNode: he,
		setOverlayNode: me,
		onDrag: ne,
		onNestedDrag: de,
		onNestedOpenChange: ue,
		onNestedRelease: fe,
		onRelease: ce,
		onPress: te,
		onDialogOpenChange: re,
		get shouldAnimate() {
			return I(m);
		},
		get isDragging() {
			return I(n);
		},
		get overlayNode() {
			return I(i);
		},
		get drawerNode() {
			return I(a);
		},
		get snapPointsOffset() {
			return b.snapPointsOffset;
		},
		get shouldFade() {
			return b.shouldFade;
		},
		restorePositionSetting: x,
		handleOpenChange: pe
	});
}
//#endregion
//#region node_modules/vaul-svelte/dist/components/drawer/drawer.svelte
var Rw = new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.open.onOpenChange.onDrag.onRelease.snapPoints.shouldScaleBackground.setBackgroundColorOnScale.closeThreshold.scrollLockTimeout.dismissible.handleOnly.fadeFromIndex.activeSnapPoint.onActiveSnapPointChange.fixed.modal.onClose.nested.noBodyStyles.direction.snapToSequentialPoint.preventScrollRestoration.repositionInputs.onAnimationEnd.container.autoFocus.disablePreventScroll".split("."));
function zw(e, t) {
	E(t, !0);
	let n = K(t, "open", 15, !1), r = K(t, "onOpenChange", 3, ew), i = K(t, "onDrag", 3, ew), a = K(t, "onRelease", 3, ew), o = K(t, "shouldScaleBackground", 3, !1), s = K(t, "setBackgroundColorOnScale", 3, !0), c = K(t, "closeThreshold", 3, nw), l = K(t, "scrollLockTimeout", 3, 100), u = K(t, "dismissible", 3, !0), d = K(t, "handleOnly", 3, !1), f = K(t, "fadeFromIndex", 19, () => t.snapPoints && t.snapPoints.length - 1), p = K(t, "activeSnapPoint", 15, null), m = K(t, "onActiveSnapPointChange", 3, ew), h = K(t, "fixed", 3, !1), g = K(t, "modal", 3, !0), _ = K(t, "onClose", 3, ew), v = K(t, "nested", 3, !1), y = K(t, "noBodyStyles", 3, !1), b = K(t, "direction", 3, "bottom"), x = K(t, "snapToSequentialPoint", 3, !1), ee = K(t, "preventScrollRestoration", 3, !1), te = K(t, "repositionInputs", 3, !0), S = K(t, "onAnimationEnd", 3, ew), ne = K(t, "container", 3, null), re = K(t, "autoFocus", 3, !1), ie = K(t, "disablePreventScroll", 3, !0), ae = /* @__PURE__ */ W(t, Rw), oe = Lw({
		open: Q.with(() => n(), (e) => {
			n(e), oe.handleOpenChange(e);
		}),
		closeThreshold: Q.with(() => c()),
		scrollLockTimeout: Q.with(() => l()),
		snapPoints: Q.with(() => t.snapPoints),
		fadeFromIndex: Q.with(() => f()),
		nested: Q.with(() => v()),
		shouldScaleBackground: Q.with(() => o()),
		activeSnapPoint: Q.with(() => p(), (e) => {
			p(e), m()(e);
		}),
		onRelease: Q.with(() => a()),
		onDrag: Q.with(() => i()),
		onClose: Q.with(() => _()),
		dismissible: Q.with(() => u()),
		direction: Q.with(() => b()),
		fixed: Q.with(() => h()),
		modal: Q.with(() => g()),
		handleOnly: Q.with(() => d()),
		noBodyStyles: Q.with(() => y()),
		preventScrollRestoration: Q.with(() => ee()),
		setBackgroundColorOnScale: Q.with(() => s()),
		repositionInputs: Q.with(() => te()),
		autoFocus: Q.with(() => re()),
		snapToSequentialPoint: Q.with(() => x()),
		container: Q.with(() => ne()),
		disablePreventScroll: Q.with(() => ie()),
		onOpenChange: Q.with(() => r()),
		onAnimationEnd: Q.with(() => S())
	});
	var se = z(), ce = N(se), le = () => oe.open.current, ue = (e) => {
		oe.onDialogOpenChange(e);
	};
	ta(ce, () => Kp, (e, t) => {
		t(e, G({
			get open() {
				return le();
			},
			set open(e) {
				ue(e);
			}
		}, () => ae));
	}), B(e, se), D();
}
//#endregion
//#region node_modules/vaul-svelte/dist/internal/use-id.js
globalThis.vaulIdCounter ??= { current: 0 };
function Bw(e = "vaul-svelte") {
	return globalThis.vaulIdCounter.current++, `${e}-${globalThis.vaulIdCounter.current}`;
}
//#endregion
//#region node_modules/vaul-svelte/dist/use-scale-background.svelte.js
function Vw() {
	let e = Iw.get(), t = null, n = typeof document < "u" ? document.body.style.backgroundColor : "";
	function r() {
		return (window.innerWidth - 26) / window.innerWidth;
	}
	GC([
		() => e.open.current,
		() => e.shouldScaleBackground.current,
		() => e.setBackgroundColorOnScale.current
	], () => {
		if (e.open.current && e.shouldScaleBackground.current) {
			t && clearTimeout(t);
			let i = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[data-vaul-drawer-wrapper]");
			if (!i) return;
			e.setBackgroundColorOnScale.current && !e.noBodyStyles.current && uw(document.body, { background: "black" }), uw(i, {
				transformOrigin: sw(e.direction.current) ? "top" : "left",
				transitionProperty: "transform, border-radius",
				transitionDuration: `${tw.DURATION}s`,
				transitionTimingFunction: `cubic-bezier(${tw.EASE.join(",")})`
			});
			let a = uw(i, {
				borderRadius: "8px",
				overflow: "hidden",
				...sw(e.direction.current) ? { transform: `scale(${r()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` } : { transform: `scale(${r()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` }
			});
			return () => {
				a(), t = window.setTimeout(() => {
					n ? document.body.style.background = n : document.body.style.removeProperty("background");
				}, tw.DURATION * 1e3);
			};
		}
	});
}
//#endregion
//#region node_modules/vaul-svelte/dist/use-drawer-content.svelte.js
function Hw(e) {
	let t = Iw.get(), n = /* @__PURE__ */ A(!1);
	ZC({
		id: e.id,
		ref: e.ref,
		deps: () => [I(n), t.open.current],
		onRefChange: (e) => {
			I(n) ? t.setDrawerNode(e) : t.setDrawerNode(null);
		}
	});
	let r = /* @__PURE__ */ A(!1), i = null, a = null, o = !1, s = /* @__PURE__ */ O(() => t.snapPoints.current && t.snapPoints.current.length > 0);
	Vw();
	function c(e, t, n = 0) {
		if (o) return !0;
		let r = Math.abs(e.y), i = Math.abs(e.x), a = i > r, s = ["bottom", "right"].includes(t) ? 1 : -1;
		if (t === "left" || t === "right") {
			if (!(e.x * s < 0) && i >= 0 && i <= n) return a;
		} else if (!(e.y * s < 0) && r >= 0 && r <= n) return !a;
		return o = !0, !0;
	}
	GC([() => I(s), () => t.open.current], () => {
		I(s) && t.open.current ? window.requestAnimationFrame(() => {
			j(r, !0);
		}) : j(r, !1);
	});
	function l(e) {
		i = null, o = !1, t.onRelease(e);
	}
	function u(n) {
		t.handleOnly.current || (e.onpointerdown.current?.(n), i = {
			x: n.pageX,
			y: n.pageY
		}, t.onPress(n));
	}
	function d(n) {
		e.onOpenAutoFocus.current?.(n), t.autoFocus.current || n.preventDefault();
	}
	function f(n) {
		if (e.onInteractOutside.current?.(n), !t.modal.current || n.defaultPrevented) {
			n.preventDefault();
			return;
		}
		t.keyboardIsOpen.current && (t.keyboardIsOpen.current = !1);
	}
	function p(e) {
		if (!t.modal.current) {
			e.preventDefault();
			return;
		}
	}
	function m(n) {
		if (a = n, t.handleOnly.current || (e.onpointermove.current?.(n), !i)) return;
		let r = n.pageY - i.y, o = n.pageX - i.x, s = n.pointerType === "touch" ? 10 : 2;
		c({
			x: o,
			y: r
		}, t.direction.current, s) ? t.onDrag(n) : (Math.abs(o) > s || Math.abs(r) > s) && (i = null);
	}
	function h(n) {
		e.onpointerup.current?.(n), i = null, o = !1, t.onRelease(n);
	}
	function g(t) {
		e.onpointerout.current?.(t), l(a);
	}
	function _(t) {
		e.oncontextmenu.current?.(t), a && l(a);
	}
	let v = /* @__PURE__ */ O(() => ({
		id: e.id.current,
		"data-vaul-drawer-direction": t.direction.current,
		"data-vaul-drawer": "",
		"data-vaul-delayed-snap-points": I(r) ? "true" : "false",
		"data-vaul-snap-points": t.open.current && I(s) ? "true" : "false",
		"data-vaul-custom-container": t.container.current ? "true" : "false",
		"data-vaul-animate": t.shouldAnimate ? "true" : "false",
		onpointerdown: u,
		onOpenAutoFocus: d,
		onInteractOutside: f,
		onFocusOutside: p,
		onpointerup: h,
		onpointermove: m,
		onpointerout: g,
		oncontextmenu: _,
		preventScroll: t.modal.current
	}));
	return {
		get props() {
			return I(v);
		},
		ctx: t,
		setMounted: (e) => {
			j(n, e, !0);
		}
	};
}
//#endregion
//#region node_modules/vaul-svelte/dist/components/utils/mounted.svelte
function Uw(e, t) {
	E(t, !0), eo(() => (t.onMounted(!0), () => {
		t.onMounted(!1);
	})), D();
}
//#endregion
//#region node_modules/vaul-svelte/dist/components/drawer/drawer-content.svelte
var Ww = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"ref",
	"onOpenAutoFocus",
	"onInteractOutside",
	"onFocusOutside",
	"oncontextmenu",
	"onpointerdown",
	"onpointerup",
	"onpointerout",
	"onpointermove",
	"children"
]), Gw = /* @__PURE__ */ R("<!> <!>", 1);
function Kw(e, t) {
	E(t, !0);
	let n = K(t, "id", 19, Bw), r = K(t, "ref", 15, null), i = K(t, "onOpenAutoFocus", 3, ew), a = K(t, "onInteractOutside", 3, ew), o = K(t, "onFocusOutside", 3, ew), s = K(t, "oncontextmenu", 3, ew), c = K(t, "onpointerdown", 3, ew), l = K(t, "onpointerup", 3, ew), u = K(t, "onpointerout", 3, ew), d = K(t, "onpointermove", 3, ew), f = /* @__PURE__ */ W(t, Ww), p = Hw({
		id: Q.with(() => n()),
		ref: Q.with(() => r(), (e) => r(e)),
		oncontextmenu: Q.with(() => s() ?? ew),
		onInteractOutside: Q.with(() => a()),
		onpointerdown: Q.with(() => c() ?? ew),
		onpointermove: Q.with(() => d() ?? ew),
		onpointerout: Q.with(() => u() ?? ew),
		onpointerup: Q.with(() => l() ?? ew),
		onOpenAutoFocus: Q.with(() => i()),
		onFocusOutside: Q.with(() => o())
	}), m = ct(p.ctx.snapPointsOffset), h = /* @__PURE__ */ O(() => m && m.length > 0 ? { "--snap-point-height": `${m[p.ctx.activeSnapPointIndex ?? 0]}px` } : {}), g = /* @__PURE__ */ O(() => zC(f, p.props, { style: I(h) }));
	var _ = z();
	ta(N(_), () => $p, (e, n) => {
		n(e, G(() => I(g), {
			children: (e, n) => {
				var r = Gw(), i = N(r);
				H(i, () => t.children ?? x), Uw(P(i, 2), { get onMounted() {
					return p.setMounted;
				} }), B(e, r);
			},
			$$slots: { default: !0 }
		}));
	}), B(e, _), D();
}
//#endregion
//#region node_modules/vaul-svelte/dist/use-drawer-overlay.svelte.js
function qw(e) {
	let t = Iw.get(), n = /* @__PURE__ */ A(!1);
	ZC({
		id: e.id,
		ref: e.ref,
		deps: () => I(n),
		onRefChange: (e) => {
			I(n) ? t.setOverlayNode(e) : t.setOverlayNode(null);
		}
	});
	let r = /* @__PURE__ */ O(() => t.snapPoints.current && t.snapPoints.current.length > 0), i = /* @__PURE__ */ O(() => t.modal.current), a = /* @__PURE__ */ O(() => ({
		id: e.id.current,
		onmouseup: t.onRelease,
		"data-vaul-overlay": "",
		"data-vaul-snap-points": t.open.current && I(r) ? "true" : "false",
		"data-vaul-snap-points-overlay": t.open.current && t.shouldFade ? "true" : "false",
		"data-vaul-animate": t.shouldAnimate ? "true" : "false"
	}));
	return {
		get props() {
			return I(a);
		},
		get shouldRender() {
			return I(i);
		},
		setMounted: (e) => {
			j(n, e, !0);
		}
	};
}
//#endregion
//#region node_modules/vaul-svelte/dist/components/drawer/drawer-overlay.svelte
var Jw = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"ref",
	"children"
]), Yw = /* @__PURE__ */ R("<!> <!>", 1);
function Xw(e, t) {
	E(t, !0);
	let n = K(t, "id", 19, Bw), r = K(t, "ref", 15, null), i = /* @__PURE__ */ W(t, Jw), a = qw({
		id: Q.with(() => n()),
		ref: Q.with(() => r(), (e) => r(e))
	}), o = /* @__PURE__ */ O(() => zC(i, a.props));
	var s = z(), c = N(s), l = (e) => {
		var n = z();
		ta(N(n), () => Fu, (e, n) => {
			n(e, G(() => I(o), {
				children: (e, n) => {
					var r = Yw(), i = N(r);
					Uw(i, { get onMounted() {
						return a.setMounted;
					} }), H(P(i, 2), () => t.children ?? x), B(e, r);
				},
				$$slots: { default: !0 }
			}));
		}), B(e, n);
	};
	V(c, (e) => {
		a.shouldRender && e(l);
	}), B(e, s), D();
}
//#endregion
//#region node_modules/vaul-svelte/dist/components/drawer/drawer-portal.svelte
var Zw = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"to"
]);
function Qw(e, t) {
	E(t, !0);
	let n = Iw.get(), r = K(t, "to", 19, () => n.container.current ?? void 0), i = /* @__PURE__ */ W(t, Zw);
	var a = z();
	ta(N(a), () => ml, (e, t) => {
		t(e, G({ get to() {
			return r();
		} }, () => i));
	}), B(e, a), D();
}
//#endregion
//#region node_modules/vaul-svelte/dist/components/drawer/index.js
var $w = Ru, eT = ol, tT = Vu, nT = Yp, rT = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"shouldScaleBackground",
	"open",
	"activeSnapPoint"
]);
function iT(e, t) {
	E(t, !0);
	let n = K(t, "shouldScaleBackground", 3, !0), r = K(t, "open", 15, !1), i = K(t, "activeSnapPoint", 15, null), a = /* @__PURE__ */ W(t, rT);
	var o = z();
	ta(N(o), () => zw, (e, t) => {
		t(e, G({ get shouldScaleBackground() {
			return n();
		} }, () => a, {
			get open() {
				return r();
			},
			set open(e) {
				r(e);
			},
			get activeSnapPoint() {
				return i();
			},
			set activeSnapPoint(e) {
				i(e);
			}
		}));
	}), B(e, o), D();
}
//#endregion
//#region src/lib/components/ui/drawer/drawer-portal.svelte
var aT = new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
function oT(e, t) {
	let n = /* @__PURE__ */ W(t, aT);
	var r = z();
	ta(N(r), () => Qw, (e, t) => {
		t(e, G(() => n));
	}), B(e, r);
}
//#endregion
//#region src/lib/components/ui/drawer/drawer-overlay.svelte
var sT = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class"
]);
function cT(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, sT);
	var i = z(), a = N(i);
	{
		let e = /* @__PURE__ */ O(() => X("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50", t.class));
		ta(a, () => Xw, (t, i) => {
			i(t, G({
				"data-slot": "drawer-overlay",
				get class() {
					return I(e);
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
	B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/drawer/drawer-content.svelte
var lT = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"portalProps",
	"children"
]), uT = /* @__PURE__ */ R("<div class=\"bg-muted mx-auto mt-4 hidden h-1 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block bg-muted mx-auto hidden shrink-0 group-data-[vaul-drawer-direction=bottom]/drawer-content:block\"></div> <!>", 1), dT = /* @__PURE__ */ R("<!> <!>", 1);
function fT(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, lT);
	oT(e, G(() => t.portalProps, {
		children: (e, i) => {
			var a = dT(), o = N(a);
			cT(o, {});
			var s = P(o, 2);
			{
				let e = /* @__PURE__ */ O(() => X("bg-popover text-popover-foreground flex h-auto flex-col text-sm data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-xl data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-xl data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-xl data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-xl data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm group/drawer-content fixed z-50", t.class));
				ta(s, () => Kw, (i, a) => {
					a(i, G({
						"data-slot": "drawer-content",
						get class() {
							return I(e);
						}
					}, () => r, {
						get ref() {
							return n();
						},
						set ref(e) {
							n(e);
						},
						children: (e, n) => {
							var r = uT();
							H(P(N(r), 2), () => t.children ?? x), B(e, r);
						},
						$$slots: { default: !0 }
					}));
				});
			}
			B(e, a);
		},
		$$slots: { default: !0 }
	})), D();
}
//#endregion
//#region src/lib/components/ui/drawer/drawer-description.svelte
var pT = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class"
]);
function mT(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, pT);
	var i = z(), a = N(i);
	{
		let e = /* @__PURE__ */ O(() => X("text-muted-foreground text-sm", t.class));
		ta(a, () => tT, (t, i) => {
			i(t, G({
				"data-slot": "drawer-description",
				get class() {
					return I(e);
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
	B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/drawer/drawer-footer.svelte
var hT = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]), gT = /* @__PURE__ */ R("<div><!></div>");
function _T(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, hT);
	var i = gT();
	U(i, (e) => ({
		"data-slot": "drawer-footer",
		class: e,
		...r
	}), [() => X("gap-2 p-4 mt-auto flex flex-col", t.class)]), H(M(i), () => t.children ?? x), T(i), Ya(i, (e) => n(e), () => n()), B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/drawer/drawer-header.svelte
var vT = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]), yT = /* @__PURE__ */ R("<div><!></div>");
function bT(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, vT);
	var i = yT();
	U(i, (e) => ({
		"data-slot": "drawer-header",
		class: e,
		...r
	}), [() => X("gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-0.5 md:text-left flex flex-col", t.class)]), H(M(i), () => t.children ?? x), T(i), Ya(i, (e) => n(e), () => n()), B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/drawer/drawer-title.svelte
var xT = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class"
]);
function ST(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, xT);
	var i = z(), a = N(i);
	{
		let e = /* @__PURE__ */ O(() => X("font-heading text-foreground text-base font-medium", t.class));
		ta(a, () => eT, (t, i) => {
			i(t, G({
				"data-slot": "drawer-title",
				get class() {
					return I(e);
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
	B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/drawer/drawer-close.svelte
var CT = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function wT(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, CT);
	var i = z();
	ta(N(i), () => nT, (e, t) => {
		t(e, G({ "data-slot": "drawer-close" }, () => r, {
			get ref() {
				return n();
			},
			set ref(e) {
				n(e);
			}
		}));
	}), B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/drawer/drawer-trigger.svelte
var TT = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function ET(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = /* @__PURE__ */ W(t, TT);
	var i = z();
	ta(N(i), () => $w, (e, t) => {
		t(e, G({ "data-slot": "drawer-trigger" }, () => r, {
			get ref() {
				return n();
			},
			set ref(e) {
				n(e);
			}
		}));
	}), B(e, i), D();
}
//#endregion
//#region src/lib/components/ui/toggle/toggle.svelte
var DT = P_({
	base: "hover:text-foreground aria-pressed:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[state=on]:bg-muted gap-1 rounded-lg text-sm font-medium transition-all [&_svg:not([class*='size-'])]:size-4 group/toggle hover:bg-muted inline-flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border-input hover:bg-muted border bg-transparent"
		},
		size: {
			default: "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			sm: "h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), OT = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"pressed",
	"class",
	"size",
	"variant"
]);
function kT(e, t) {
	E(t, !0);
	let n = K(t, "ref", 15, null), r = K(t, "pressed", 15, !1), i = K(t, "size", 3, "default"), a = K(t, "variant", 3, "default"), o = /* @__PURE__ */ W(t, OT);
	var s = z(), c = N(s);
	{
		let e = /* @__PURE__ */ O(() => X(DT({
			variant: a(),
			size: i()
		}), t.class));
		ta(c, () => Cm, (t, i) => {
			i(t, G({
				"data-slot": "toggle",
				get class() {
					return I(e);
				}
			}, () => o, {
				get ref() {
					return n();
				},
				set ref(e) {
					n(e);
				},
				get pressed() {
					return r();
				},
				set pressed(e) {
					r(e);
				}
			}));
		});
	}
	B(e, s), D();
}
//#endregion
//#region src/shared/services/youtube.ts
var AT = (e) => {
	let t = /* @__PURE__ */ new RegExp(/(?:youtube(?:-nocookie)?\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|shorts|live)\/|\S*?[?&]v=)|youtu\.be\/)(?<id>[a-zA-Z0-9_-]{11})/), n = e.match(t);
	return !n || !n.groups || !n.groups.id ? null : n.groups.id;
}, jT = (e) => {
	var t = IT(), n = M(t);
	kT(n, {
		"aria-label": "Toggle pin",
		size: "default",
		variant: "outline",
		class: "data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-white data-[state=on]:*:[svg]:stroke-white",
		children: (e, t) => {
			var n = FT();
			g_(N(n), {
				get icon() {
					return n_;
				},
				class: "size-4 md:size-5"
			}), Qe(), B(e, n);
		},
		$$slots: { default: !0 }
	});
	var r = P(n, 2);
	z_(r, {
		type: "submit",
		variant: "outline",
		title: "Queue to the next position in the playlist",
		class: "flex-1",
		disabled: !0,
		children: (e, t) => {
			Qe(), B(e, Ni("Add Next"));
		},
		$$slots: { default: !0 }
	}), z_(P(r, 2), {
		type: "submit",
		variant: "default",
		title: "Queue to the end of the playlist",
		class: "flex-1",
		children: (e, t) => {
			Qe(), B(e, Ni("Add Last"));
		},
		$$slots: { default: !0 }
	}), T(t), B(e, t);
}, MT = /* @__PURE__ */ R("<div class=\"flex flex-col gap-2\"><!> <!></div>"), NT = /* @__PURE__ */ R("<img alt=\"YouTube Video Thumbnail\" class=\"h-full w-full rounded-lg object-cover\"/>"), PT = /* @__PURE__ */ R("<div><!></div>"), FT = /* @__PURE__ */ R("<!> Pin", 1), IT = /* @__PURE__ */ R("<div class=\"flex flex-row items-center justify-between gap-4\"><!> <!> <!></div>"), LT = /* @__PURE__ */ R("<!> <!>", 1), RT = /* @__PURE__ */ R("<!> <form class=\"flex flex-col gap-4\"><!> <!> <!></form>", 1), zT = /* @__PURE__ */ R("<!> <form class=\"flex flex-col gap-4 px-4\"><!> <!> <!></form> <!>", 1);
function BT(e, t) {
	E(t, !0);
	let n = (e) => {
		var t = MT(), n = M(t);
		J_(n, {
			children: (e, t) => {
				Qe(), B(e, Ni("Video URL"));
			},
			$$slots: { default: !0 }
		}), $_(P(n, 2), {
			type: "text",
			placeholder: "https://youtu.be/E4WlUXrJgy4",
			title: "Enter video URL",
			required: !0,
			get value() {
				return I(a);
			},
			set value(e) {
				j(a, e, !0);
			}
		}), T(t), B(e, t);
	}, r = (e) => {
		var t = z(), n = N(t), r = (e) => {
			var t = PT();
			HS(M(t), {
				ratio: 16 / 9,
				class: "rounded-lg bg-muted",
				children: (e, t) => {
					var n = NT();
					gr(() => za(n, "src", `https://img.youtube.com/vi/${I(o)}/hqdefault.jpg`)), B(e, n);
				},
				$$slots: { default: !0 }
			}), T(t), fa(3, t, () => hx), B(e, t);
		};
		V(n, (e) => {
			I(o) && e(r);
		}), B(e, t);
	}, i = /* @__PURE__ */ A(!1), a = /* @__PURE__ */ A(""), o = /* @__PURE__ */ O(() => AT(I(a))), s = async () => {
		if (!I(o)) {
			console.error("No video ID");
			return;
		}
		let e = await Ao({
			id: I(o),
			type: "yt",
			pos: "end",
			temp: !0
		});
		console.log(e);
	}, c = async (e) => {
		e.preventDefault();
		try {
			await s();
		} catch (e) {
			console.error(e);
			return;
		}
		j(a, ""), j(i, !1);
	};
	var l = z(), u = N(l), d = (e) => {
		WS(e, {
			get open() {
				return I(i);
			},
			set open(e) {
				j(i, e, !0);
			},
			children: (e, t) => {
				var i = LT(), a = N(i);
				{
					let e = /* @__PURE__ */ O(() => F_({
						variant: "ghost",
						size: Z.current ? "icon-sm" : "icon-xs"
					}));
					uC(a, {
						type: "button",
						get class() {
							return I(e);
						},
						children: (e, t) => {
							g_(e, {
								get icon() {
									return i_;
								},
								class: "size-4 md:size-5"
							});
						},
						$$slots: { default: !0 }
					});
				}
				oC(P(a, 2), {
					children: (e, t) => {
						var i = RT(), a = N(i);
						eC(a, {
							children: (e, t) => {
								var n = LT(), r = N(n);
								JS(r, {
									children: (e, t) => {
										Qe(), B(e, Ni("Video URL"));
									},
									$$slots: { default: !0 }
								}), cC(P(r, 2), {
									children: (e, t) => {
										Qe(), B(e, Ni("Provide a video URL to add it to the playlist queue."));
									},
									$$slots: { default: !0 }
								}), B(e, n);
							},
							$$slots: { default: !0 }
						});
						var o = P(a, 2), s = M(o);
						n(s);
						var l = P(s, 2);
						r(l), ZS(P(l, 2), {
							children: (e, t) => {
								jT(e);
							},
							$$slots: { default: !0 }
						}), T(o), Si("submit", o, c), B(e, i);
					},
					$$slots: { default: !0 }
				}), B(e, i);
			},
			$$slots: { default: !0 }
		});
	}, f = (e) => {
		iT(e, {
			get open() {
				return I(i);
			},
			set open(e) {
				j(i, e, !0);
			},
			children: (e, t) => {
				var i = LT(), a = N(i);
				{
					let e = /* @__PURE__ */ O(() => F_({
						variant: "ghost",
						size: Z.current ? "icon-sm" : "icon-xs"
					}));
					ET(a, {
						type: "button",
						get class() {
							return I(e);
						},
						children: (e, t) => {
							g_(e, {
								get icon() {
									return i_;
								},
								class: "size-4 md:size-5"
							});
						},
						$$slots: { default: !0 }
					});
				}
				fT(P(a, 2), {
					children: (e, t) => {
						var i = zT(), a = N(i);
						bT(a, {
							class: "text-start",
							children: (e, t) => {
								var n = LT(), r = N(n);
								ST(r, {
									children: (e, t) => {
										Qe(), B(e, Ni("Add video"));
									},
									$$slots: { default: !0 }
								}), mT(P(r, 2), {
									children: (e, t) => {
										Qe(), B(e, Ni("Provide a video URL to add it to the playlist queue."));
									},
									$$slots: { default: !0 }
								}), B(e, n);
							},
							$$slots: { default: !0 }
						});
						var o = P(a, 2), s = M(o);
						n(s);
						var l = P(s, 2);
						r(l), jT(P(l, 2)), T(o), _T(P(o, 2), {
							class: "pt-4",
							children: (e, t) => {
								{
									let t = /* @__PURE__ */ O(() => F_({ variant: "outline" }));
									wT(e, {
										get class() {
											return I(t);
										},
										children: (e, t) => {
											Qe(), B(e, Ni("Close"));
										},
										$$slots: { default: !0 }
									});
								}
							},
							$$slots: { default: !0 }
						}), Si("submit", o, c), B(e, i);
					},
					$$slots: { default: !0 }
				}), B(e, i);
			},
			$$slots: { default: !0 }
		});
	};
	V(u, (e) => {
		Z.current ? e(d) : e(f, -1);
	}), B(e, l), D();
}
//#endregion
//#region src/features/player/MediaControls.svelte
var VT = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"current",
	"total",
	"open",
	"togglePlaylist",
	"togglePlayer",
	"class"
]), HT = /* @__PURE__ */ R("<!> <!>", 1), UT = /* @__PURE__ */ R("<div><div class=\"flex flex-1 flex-row items-center justify-start gap-1.5 md:gap-2\"><!> <!></div> <div class=\"flex-auto truncate text-center text-sm font-stretch-ultra-condensed antialiased md:text-base md:font-stretch-normal md:subpixel-antialiased\"> </div> <div class=\"flex flex-1 flex-row items-center justify-end gap-1.5 md:gap-2\"><!> <!></div></div>");
function WT(e, t) {
	E(t, !0);
	let n = () => Lt(Ho, "$voteskipStore", r), [r, i] = Rt(), a = /* @__PURE__ */ A(!1), o = () => {
		I(a) || (ko(), j(a, !0));
	}, s = /* @__PURE__ */ W(t, VT);
	cr(() => {
		n().count === 0 && j(a, !1);
	});
	var c = UT();
	U(c, (e) => ({
		class: e,
		...s
	}), [() => X("flex flex-row items-center justify-between overflow-hidden", t.class)]);
	var l = M(c), u = M(l);
	BT(u, {});
	var d = P(u, 2), f = (e) => {
		{
			let n = /* @__PURE__ */ O(() => Z.current ? "icon-sm" : "icon-xs");
			z_(e, {
				variant: "ghost",
				type: "button",
				get size() {
					return I(n);
				},
				get onclick() {
					return t.togglePlaylist;
				},
				children: (e, t) => {
					g_(e, {
						get icon() {
							return r_;
						},
						class: "size-4 md:size-5"
					});
				},
				$$slots: { default: !0 }
			});
		}
	};
	V(d, (e) => {
		Z.current || e(f);
	}), T(l);
	var p = P(l, 2), m = M(p);
	T(p);
	var h = P(p, 2), g = M(h);
	{
		let e = /* @__PURE__ */ O(() => Z.current ? "icon-sm" : "icon-xs");
		z_(g, {
			variant: "ghost",
			type: "button",
			get size() {
				return I(e);
			},
			get onclick() {
				return t.togglePlayer;
			},
			children: (e, n) => {
				var r = z(), i = N(r), a = (e) => {
					g_(e, {
						get icon() {
							return s_;
						},
						class: "size-4 md:size-5"
					});
				}, o = (e) => {
					g_(e, {
						get icon() {
							return Zg;
						},
						class: "size-4 md:size-5"
					});
				};
				V(i, (e) => {
					t.open ? e(a) : e(o, -1);
				}), B(e, r);
			},
			$$slots: { default: !0 }
		});
	}
	var _ = P(g, 2);
	{
		let e = /* @__PURE__ */ O(() => n().count > 0 ? Z.current ? "sm" : "xs" : Z.current ? "icon-sm" : "icon-xs");
		z_(_, {
			variant: "ghost",
			type: "button",
			get size() {
				return I(e);
			},
			onclick: o,
			get disabled() {
				return I(a);
			},
			children: (e, t) => {
				var r = HT(), i = N(r), a = (e) => {
					var t = Ni();
					gr(() => Ii(t, `${n().count ?? ""} / ${n().need ?? ""}`)), B(e, t);
				};
				V(i, (e) => {
					n().count > 0 && e(a);
				}), g_(P(i, 2), {
					get icon() {
						return t_;
					},
					class: "size-4 md:size-5"
				}), B(e, r);
			},
			$$slots: { default: !0 }
		});
	}
	T(h), T(c), gr(() => Ii(m, `${t.current ?? ""} / ${t.total ?? ""} items`)), B(e, c), D(), i();
}
//#endregion
//#region node_modules/sister/src/sister.js
var GT = /* @__PURE__ */ o(((e, t) => {
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
})), KT = /* @__PURE__ */ o(((e, t) => {
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
})), qT = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		n.debug = n, n.default = n, n.coerce = c, n.disable = o, n.enable = i, n.enabled = s, n.humanize = KT(), n.destroy = l, Object.keys(e).forEach((t) => {
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
})), JT = /* @__PURE__ */ o(((e, t) => {
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
	t.exports = qT()(e);
	var { formatters: s } = t.exports;
	s.j = function(e) {
		try {
			return JSON.stringify(e);
		} catch (e) {
			return "[UnexpectedJSONParseError]: " + e.message;
		}
	};
})), YT = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
		BUFFERING: 3,
		ENDED: 0,
		PAUSED: 2,
		PLAYING: 1,
		UNSTARTED: -1,
		VIDEO_CUED: 5
	}, t.exports = e.default;
})), XT = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = r(YT());
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
})), ZT = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = [
		"ready",
		"stateChange",
		"playbackQualityChange",
		"playbackRateChange",
		"error",
		"apiChange",
		"volumeChange"
	], t.exports = e.default;
})), QT = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = /* @__PURE__ */ "cueVideoById.loadVideoById.cueVideoByUrl.loadVideoByUrl.playVideo.pauseVideo.stopVideo.getVideoLoadedFraction.cuePlaylist.loadPlaylist.nextVideo.previousVideo.playVideoAt.setShuffle.setLoop.getPlaylist.getPlaylistIndex.setOption.mute.unMute.isMuted.setVolume.getVolume.seekTo.getPlayerState.getPlaybackRate.setPlaybackRate.getAvailablePlaybackRates.getPlaybackQuality.setPlaybackQuality.getAvailableQualityLevels.getCurrentTime.getDuration.removeEventListener.getVideoUrl.getVideoEmbedCode.getOptions.getOption.addEventListener.destroy.setSize.getIframe.getSphericalProperties.setSphericalProperties".split("."), t.exports = e.default;
})), $T = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = o(JT()), r = o(XT()), i = o(ZT()), a = o(QT());
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
})), eE = /* @__PURE__ */ o(((e, t) => {
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
})), tE = /* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = r(eE());
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
})), nE = /* @__PURE__ */ c((/* @__PURE__ */ o(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = a(GT()), r = a($T()), i = a(tE());
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
})))()), rE = (e) => (t) => {
	let n = (0, nE.default)(t, e);
	return () => {
		n.destroy();
	};
}, iE = /* @__PURE__ */ R("<div class=\"flex aspect-video h-full w-full md:h-auto md:w-auto\"><div class=\"aspect-video h-full w-full flex-initial overflow-hidden md:h-auto md:w-auto\"></div></div>"), aE = /* @__PURE__ */ R("<!> <!>", 1), oE = /* @__PURE__ */ R("<div class=\"flex-initial overflow-hidden\"><!></div>");
function sE(e, t) {
	E(t, !0);
	var n = oE(), r = M(n), i = (e) => {
		var n = iE();
		ma(M(n), () => rE({
			videoId: t.currentMediaId,
			playerVars: {
				autoplay: 1,
				controls: 1
			}
		})), T(n), B(e, n);
	}, a = (e) => {
		eS(e, {
			class: "aspect-video h-full w-full md:h-auto md:w-auto",
			children: (e, n) => {
				rS(e, {
					children: (e, n) => {
						var r = aE(), i = N(r);
						sS(i, {
							variant: "icon",
							children: (e, n) => {
								z_(e, {
									variant: "ghost",
									type: "button",
									size: "icon-xs",
									get onclick() {
										return t.togglePlayer;
									},
									children: (e, t) => {
										g_(e, {
											get icon() {
												return d_;
											},
											class: "size-5 motion-safe:animate-pulse"
										});
									},
									$$slots: { default: !0 }
								});
							},
							$$slots: { default: !0 }
						}), uS(P(i, 2), {
							children: (e, n) => {
								z_(e, {
									get onclick() {
										return t.togglePlayer;
									},
									title: "Show player",
									variant: "ghost",
									type: "button",
									size: "lg",
									class: "text-md font-semibold font-stretch-expanded select-none md:text-lg",
									children: (e, t) => {
										Qe(), B(e, Ni("Player is hidden"));
									},
									$$slots: { default: !0 }
								});
							},
							$$slots: { default: !0 }
						}), B(e, r);
					},
					$$slots: { default: !0 }
				});
			},
			$$slots: { default: !0 }
		});
	};
	V(r, (e) => {
		t.open ? e(i) : e(a, -1);
	}), T(n), B(e, n), D();
}
//#endregion
//#region src/features/player/PlayerHeader.svelte
var cE = 1e3, lE = async (e) => {
	e && e !== "" && await navigator.clipboard.writeText(e);
}, uE = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"reversed",
	"reverseLayout",
	"youtubeThumbnailURL",
	"mediaLink",
	"mediaTitle",
	"class"
]), dE = /* @__PURE__ */ R("<div><div><!></div> <p class=\"flex-auto truncate text-center text-sm font-stretch-ultra-condensed antialiased md:text-base md:font-stretch-normal md:subpixel-antialiased\"> </p> <div><!> <!> <!></div></div>");
function fE(e, t) {
	E(t, !0);
	let n = /* @__PURE__ */ A(!1), r = /* @__PURE__ */ A(!1), i = /* @__PURE__ */ A(!1), a = /* @__PURE__ */ W(t, uE), o = async () => {
		await lE(t.youtubeThumbnailURL), j(n, !0), setTimeout(() => j(n, !1), cE);
	}, s = async () => {
		await lE(t.mediaLink), j(r, !0), setTimeout(() => j(r, !1), cE);
	}, c = async () => {
		await lE(t.mediaTitle), j(i, !0), setTimeout(() => j(i, !1), cE);
	};
	var l = dE();
	U(l, (e) => ({
		class: e,
		...a
	}), [() => X("flex items-center justify-between overflow-hidden", t.reversed ? "flex-row" : "flew-row md:flex-row-reverse", t.class)]);
	var u = M(l), d = M(u);
	{
		let e = /* @__PURE__ */ O(() => Z.current ? "icon-sm" : "icon-xs");
		z_(d, {
			variant: "ghost",
			type: "button",
			get size() {
				return I(e);
			},
			get onclick() {
				return t.reverseLayout;
			},
			children: (e, n) => {
				var r = z(), i = N(r), a = (e) => {
					var t = z(), n = N(t), r = (e) => {
						g_(e, {
							get icon() {
								return Hg;
							},
							class: "size-4 md:size-5"
						});
					}, i = (e) => {
						g_(e, {
							get icon() {
								return Wg;
							},
							class: "size-4 md:size-5"
						});
					};
					V(n, (e) => {
						Z.current ? e(r) : e(i, -1);
					}), B(e, t);
				}, o = (e) => {
					g_(e, {
						get icon() {
							return Ug;
						},
						class: "size-4 md:size-5"
					});
				}, s = (e) => {
					g_(e, {
						get icon() {
							return Vg;
						},
						class: "size-4 md:size-5"
					});
				};
				V(i, (e) => {
					t.reversed ? e(a) : Z.current ? e(o, 1) : e(s, -1);
				}), B(e, r);
			},
			$$slots: { default: !0 }
		});
	}
	T(u);
	var f = P(u, 2), p = M(f, !0);
	T(f);
	var m = P(f, 2), h = M(m), g = (e) => {
		{
			let t = /* @__PURE__ */ O(() => Z.current ? "icon-sm" : "icon-xs");
			z_(e, {
				variant: "ghost",
				type: "button",
				get size() {
					return I(t);
				},
				title: "Copy youtube video thumbnail URL",
				onclick: o,
				children: (e, t) => {
					var r = z(), i = N(r), a = (e) => {
						g_(e, {
							get icon() {
								return qg;
							},
							class: "size-4 text-green-500 md:size-5"
						});
					}, o = (e) => {
						g_(e, {
							get icon() {
								return zg;
							},
							class: "size-4 md:size-5"
						});
					};
					V(i, (e) => {
						I(n) ? e(a) : e(o, -1);
					}), B(e, r);
				},
				$$slots: { default: !0 }
			});
		}
	};
	V(h, (e) => {
		t.mediaLink !== "" && e(g);
	});
	var _ = P(h, 2), v = (e) => {
		{
			let t = /* @__PURE__ */ O(() => Z.current ? "icon-sm" : "icon-xs");
			z_(e, {
				variant: "ghost",
				type: "button",
				get size() {
					return I(t);
				},
				title: "Copy video link",
				onclick: s,
				children: (e, t) => {
					var n = z(), i = N(n), a = (e) => {
						g_(e, {
							get icon() {
								return qg;
							},
							class: "size-4 text-green-500 md:size-5"
						});
					}, o = (e) => {
						g_(e, {
							get icon() {
								return Jg;
							},
							class: "size-4 md:size-5"
						});
					};
					V(i, (e) => {
						I(r) ? e(a) : e(o, -1);
					}), B(e, n);
				},
				$$slots: { default: !0 }
			});
		}
	};
	V(_, (e) => {
		t.mediaLink !== "" && e(v);
	});
	var y = P(_, 2), b = (e) => {
		{
			let t = /* @__PURE__ */ O(() => Z.current ? "icon-sm" : "icon-xs");
			z_(e, {
				variant: "ghost",
				type: "button",
				get size() {
					return I(t);
				},
				title: "Copy video title",
				onclick: c,
				children: (e, t) => {
					var n = z(), r = N(n), a = (e) => {
						g_(e, {
							get icon() {
								return qg;
							},
							class: "size-4 text-green-500 md:size-5"
						});
					}, o = (e) => {
						g_(e, {
							get icon() {
								return Yg;
							},
							class: "size-4 md:size-5"
						});
					};
					V(r, (e) => {
						I(i) ? e(a) : e(o, -1);
					}), B(e, n);
				},
				$$slots: { default: !0 }
			});
		}
	};
	V(y, (e) => {
		t.mediaTitle !== "" && e(b);
	}), T(m), T(l), gr((e, n) => {
		Ca(u, 1, e), za(f, "title", t.mediaTitle), Ii(p, t.mediaTitle), Ca(m, 1, n);
	}, [() => _a(X("flex flex-1 flex-row items-center", t.reversed ? "justify-start" : "justify-start md:justify-end")), () => _a(X("flex flex-1 flex-row items-center", t.reversed ? "justify-end" : "justify-end md:justify-start"))]), B(e, l), D();
}
//#endregion
//#region src/features/player/PlaylistItem.svelte
var pE = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"title",
	"class"
]), mE = /* @__PURE__ */ R("<div><p class=\"truncate text-sm font-stretch-ultra-condensed antialiased md:text-base md:font-stretch-normal md:subpixel-antialiased\"> </p></div>");
function hE(e, t) {
	E(t, !0);
	let n = /* @__PURE__ */ W(t, pE);
	var r = mE();
	U(r, (e) => ({
		class: e,
		...n
	}), [() => X("flex h-6 flex-row items-center justify-start border-b px-1 py-3 md:h-7", t.class)]);
	var i = M(r), a = M(i, !0);
	T(i), T(r), gr(() => Ii(a, t.title)), B(e, r), D();
}
//#endregion
//#region src/features/player/PlaylistLayout.svelte
var gE = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"class"
]), _E = /* @__PURE__ */ R("<div></div>");
function vE(e, t) {
	E(t, !0);
	let n = () => Lt(Ro, "$playlistStore", r), [r, i] = Rt(), a = /* @__PURE__ */ W(t, gE);
	var o = _E();
	U(o, (e) => ({
		class: e,
		...a
	}), [() => X("pt-1", t.class)]), Yi(o, 7, () => n().playlist, (e) => e.uid, (e, t) => {
		let n = I(t).media.title;
		hE(e, { get title() {
			return n;
		} });
	}), T(o), B(e, o), D(), i();
}
//#endregion
//#region src/features/player/PlayerLayout.svelte
var yE = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"reversed",
	"togglePlaylist",
	"reverseLayout",
	"class"
]), bE = /* @__PURE__ */ R("<div><!> <!> <!> <!> <!> <!> <!></div>");
function xE(e, t) {
	E(t, !0);
	let n = () => Lt(Ro, "$playlistStore", r), [r, i] = Rt(), a = /* @__PURE__ */ A(!0), o = /* @__PURE__ */ O(() => n().currentUid), s = /* @__PURE__ */ O(() => n().playlist[I(o)]), c = /* @__PURE__ */ O(() => I(s).media.title ?? ""), l = /* @__PURE__ */ O(() => I(s).media.id ?? ""), u = /* @__PURE__ */ O(() => I(s).media.type === "yt"), d = /* @__PURE__ */ O(() => I(u) ? `https://youtu.be/${I(s).media.id}` : ""), f = /* @__PURE__ */ O(() => I(u) ? `https://img.youtube.com/vi/${I(s).media.id}/maxresdefault.jpg` : ""), p = /* @__PURE__ */ O(() => n().playlist.length), m = /* @__PURE__ */ O(() => n().playlist.indexOf(I(s)) + 1), h = () => j(a, !I(a)), g = /* @__PURE__ */ W(t, yE);
	var _ = bE();
	U(_, (e) => ({
		class: e,
		...g
	}), [() => X("", t.class)]);
	var v = M(_);
	fE(v, {
		get reversed() {
			return t.reversed;
		},
		get reverseLayout() {
			return t.reverseLayout;
		},
		get youtubeThumbnailURL() {
			return I(f);
		},
		get mediaLink() {
			return I(d);
		},
		get mediaTitle() {
			return I(c);
		},
		class: "h-8 max-h-8 min-h-8 w-full gap-1.5 p-1 md:h-10 md:max-h-10 md:min-h-10 md:w-full md:gap-2 md:p-2"
	});
	var y = P(v, 2);
	X_(y, {});
	var b = P(y, 2);
	sE(b, {
		get currentMediaId() {
			return I(l);
		},
		get open() {
			return I(a);
		},
		togglePlayer: h
	});
	var x = P(b, 2);
	X_(x, {});
	var ee = P(x, 2);
	WT(ee, {
		get current() {
			return I(m);
		},
		get total() {
			return I(p);
		},
		get open() {
			return I(a);
		},
		get togglePlaylist() {
			return t.togglePlaylist;
		},
		togglePlayer: h,
		class: "h-8 max-h-8 min-h-8 w-full gap-1.5 p-1 md:h-10 md:max-h-10 md:min-h-10 md:w-full md:gap-2 md:p-2"
	});
	var te = P(ee, 2);
	X_(te, {}), vE(P(te, 2), { class: "h-7 max-h-7 min-h-7 md:h-8 md:max-h-8 md:min-h-8" }), T(_), B(e, _), D(), i();
}
//#endregion
//#region src/shared/components/layout/ResizableCytubeFluidLayout.svelte
var SE = 50, CE = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"class",
	"direction",
	"defaultMainSize",
	"defaultSecondarySize",
	"mainPane",
	"secondaryPane",
	"mainPaneRef",
	"secondaryPaneRef",
	"mainClass",
	"secondaryClass"
]), wE = /* @__PURE__ */ R("<!> <!> <!>", 1);
function TE(e, t) {
	E(t, !0);
	let n = K(t, "defaultMainSize", 3, SE), r = K(t, "defaultSecondarySize", 3, SE), i = K(t, "mainPane", 15, null), a = K(t, "secondaryPane", 15, null), o = K(t, "mainPaneRef", 15, null), s = K(t, "secondaryPaneRef", 15, null), c = /* @__PURE__ */ W(t, CE);
	{
		let l = /* @__PURE__ */ O(() => X("", t.class));
		rx(e, G({
			get direction() {
				return t.direction;
			},
			get class() {
				return I(l);
			}
		}, () => c, {
			children: (e, c) => {
				var l = wE(), u = N(l);
				{
					let e = /* @__PURE__ */ O(() => X("", t.mainClass));
					Ya(Yb(u, {
						get defaultSize() {
							return n();
						},
						order: 1,
						collapsible: !0,
						get class() {
							return I(e);
						},
						get ref() {
							return o();
						},
						set ref(e) {
							o(e);
						}
					}), (e) => i(e), () => i());
				}
				var d = P(u, 2);
				tx(d, { withHandle: !0 });
				var f = P(d, 2);
				{
					let e = /* @__PURE__ */ O(() => X("", t.secondaryClass));
					Ya(Yb(f, {
						get defaultSize() {
							return r();
						},
						order: 2,
						collapsible: !0,
						get class() {
							return I(e);
						},
						get ref() {
							return s();
						},
						set ref(e) {
							s(e);
						}
					}), (e) => a(e), () => a());
				}
				B(e, l);
			},
			$$slots: { default: !0 }
		}));
	}
	D();
}
//#endregion
//#region src/shared/components/layout/Home.svelte
var EE = (e) => e.isCollapsed() ? e.expand() : e.collapse(), DE = new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"isLoggedIn",
	"class"
]), OE = /* @__PURE__ */ R("<!> <!>", 1), kE = /* @__PURE__ */ R("<main><!> <!></main>");
function AE(e, t) {
	E(t, !0);
	let n = /* @__PURE__ */ A(In(Z.current)), r = /* @__PURE__ */ A(null), i = /* @__PURE__ */ A(null), a = /* @__PURE__ */ A(null), o = /* @__PURE__ */ A(null), s = () => j(n, !I(n)), c = () => {
		!I(r) || !I(i) || (I(n) ? EE(I(r)) : EE(I(i)));
	}, l = /* @__PURE__ */ W(t, DE);
	var u = kE();
	U(u, (e) => ({
		class: e,
		...l
	}), [() => X("flex flex-col border-t", t.class)]);
	var d = M(u);
	{
		let e = /* @__PURE__ */ O(() => Z.current ? "horizontal" : "vertical"), t = /* @__PURE__ */ O(() => Z.current ? 36 : 48.5), n = /* @__PURE__ */ O(() => Z.current ? 64 : 51.5);
		TE(d, {
			get direction() {
				return I(e);
			},
			get defaultMainSize() {
				return I(t);
			},
			get defaultSecondarySize() {
				return I(n);
			},
			mainClass: "flex",
			secondaryClass: "flex",
			class: "flex-1",
			get mainPane() {
				return I(r);
			},
			set mainPane(e) {
				j(r, e, !0);
			},
			get secondaryPane() {
				return I(i);
			},
			set secondaryPane(e) {
				j(i, e, !0);
			},
			get mainPaneRef() {
				return I(a);
			},
			set mainPaneRef(e) {
				j(a, e, !0);
			},
			get secondaryPaneRef() {
				return I(o);
			},
			set secondaryPaneRef(e) {
				j(o, e, !0);
			}
		});
	}
	var f = P(d, 2), p = (e) => {
		var r = OE(), i = N(r);
		xE(i, {
			[si()]: (e) => (Mv(I(n) ? I(o) : I(a)) || x)(e),
			get reversed() {
				return I(n);
			},
			togglePlaylist: c,
			reverseLayout: s,
			class: "flex w-full flex-1 flex-col"
		}), BS(P(i, 2), {
			[si()]: (e) => (Mv(I(n) ? I(a) : I(o)) || x)(e),
			get isLoggedIn() {
				return t.isLoggedIn;
			},
			reverseLayout: s,
			get reversed() {
				return I(n);
			},
			class: "flex w-full flex-1 flex-col"
		}), B(e, r);
	};
	V(f, (e) => {
		I(a) && I(o) && e(p);
	}), T(u), B(e, u), D();
}
//#endregion
//#region src/App.svelte
var jE = new URL("dist/logo.png", window.BASE_URL).toString(), ME = /* @__PURE__ */ R("<!> <!>", 1);
function NE(e, t) {
	E(t, !1);
	let n = () => Lt(Mo, "$appStore", a), r = () => Lt(Bo, "$socketStore", a), i = () => Lt(Po, "$clientStore", a), [a, o] = Rt();
	eo(() => {
		let e = document.body.className;
		return document.body.className = "dark min-h-screen flex flex-col", () => document.body.className = e;
	}), Xa();
	var s = ME(), c = N(s);
	jv(c, {
		get imgLogoSrc() {
			return jE;
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
	}), AE(P(c, 2), {
		get isLoggedIn() {
			return i().logged_in;
		},
		class: "flex-1"
	}), B(e, s), D(), o();
}
//#endregion
//#region src/main.ts
var PE = [
	"wrap",
	"useroptions",
	"emotelist",
	"channeloptions",
	"pmbar",
	"footer",
	"usertheme"
], FE = [
	"//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css",
	"/css/sticky-footer-navbar.css",
	"/css/videojs-resolution-switcher.css",
	"/css/video-js.css",
	"/css/cytube.css"
], IE = () => {
	FE.forEach((e) => {
		let t = document.querySelector(`link[href="${e}"]`);
		t && t.remove();
	}), PE.forEach((e) => {
		let t = document.getElementById(e);
		t && t.remove();
	});
}, LE = (e) => new Promise((t, n) => {
	let r = document.createElement("link");
	r.rel = "stylesheet", r.type = "text/css", r.href = e.toString(), r.onload = () => t(), r.onerror = (e) => n(/* @__PURE__ */ Error(`failed to load stylesheet: ${e}`)), document.head.appendChild(r);
}), RE = (e) => {
	let t = document.createElement("div");
	t.className = "server-msg-reconnect", t.style = "border: 1px solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", t.textContent = e;
	let n = document.getElementById("messagebuffer");
	return n && n.appendChild(t), t;
}, zE = async () => {
	let e = RE("Loading styles...");
	await LE(new URL("dist/index.css", window.BASE_URL)), e.remove();
}, BE = async () => {
	let e = await Xo();
	try {
		await zE(), IE(), lo(), Li(NE, { target: document.body });
	} catch (t) {
		throw e(), t;
	}
};
//#endregion
export { BE as init };
