//#region src/channelCSS.ts
var e = (e) => {
	window.CHANNEL.css = e;
	let t = document.querySelector("#cs-csstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channelcss) return;
	let n = document.createElement("style");
	n.id = "chancss", n.textContent = e, document.head.append(n);
}, t = (t) => {
	let n = document.querySelector("#chancss");
	if (!n) {
		e(t);
		return;
	}
	n.textContent !== t && (n.remove(), e(t));
}, n = () => {
	let e = new URL("dist/theme.css", window.BASE_URL), t = document.createElement("link");
	t.rel = "stylesheet", t.type = "text/css", t.href = e.toString(), document.head.appendChild(t);
}, r = () => {
	let e = new URL("dist/index.css", window.BASE_URL), t = document.createElement("link");
	t.rel = "stylesheet", t.type = "text/css", t.href = e.toString(), document.head.appendChild(t);
}, i = (e) => {
	window.CHANNEL.js = e;
	let t = document.querySelector("#cs-jstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channeljs) return;
	let n = document.createElement("script");
	n.id = "chanjs", n.type = "text/javascript", n.textContent = e, document.body.append(n);
}, a = (e) => {
	let t = document.querySelector("#chanjs");
	if (!t) {
		i(e);
		return;
	}
	t.textContent !== e && (t.remove(), i(e));
}, o = () => {
	window.Callbacks.channelCSSJS = function({ css: e, js: n }) {
		e && t(e), n && a(n);
	};
}, s = () => {
	let e = new URL("dist/favicon.ico", window.BASE_URL), t = document.createElement("link");
	t.href = e.toString(), t.type = "image/x-icon", t.rel = "shortcut icon", document.head.append(t);
}, c = Array.isArray, l = Array.prototype.indexOf, u = Array.prototype.includes, d = Array.from, f = Object.defineProperty, p = Object.getOwnPropertyDescriptor, m = Object.getOwnPropertyDescriptors, h = Object.prototype, g = Array.prototype, _ = Object.getPrototypeOf, v = Object.isExtensible, ee = () => {};
function te(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function ne() {
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
var re = 1 << 24, y = 1024, b = 2048, x = 4096, ie = 8192, ae = 16384, oe = 32768, se = 1 << 25, ce = 65536, S = 1 << 19, C = 1 << 20, w = 65536, le = 1 << 21, ue = 1 << 22, T = 1 << 23, de = Symbol("$state"), fe = Symbol("legacy props"), pe = Symbol(""), E = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), D = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function O() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function me() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function he(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function k() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ge() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function _e() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ve() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/constants.js
var ye = {}, A = Symbol(), be = "http://www.w3.org/1999/xhtml";
function xe() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Se(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ce() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function we() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var j = !1;
function Te(e) {
	j = e;
}
var M;
function Ee(e) {
	if (e === null) throw Se(), ye;
	return M = e;
}
function De() {
	return Ee(/* @__PURE__ */ Qt(M));
}
function Oe(e) {
	if (j) {
		if (/* @__PURE__ */ Qt(M) !== null) throw Se(), ye;
		M = e;
	}
}
function ke(e = 1) {
	if (j) {
		for (var t = e, n = M; t--;) n = /* @__PURE__ */ Qt(n);
		M = n;
	}
}
function Ae(e = !0) {
	for (var t = 0, n = M;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Qt(n);
		e && n.remove(), n = i;
	}
}
function je(e) {
	if (!e || e.nodeType !== 8) throw Se(), ye;
	return e.data;
}
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
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var Fe = !1, Ie = !1, N = null;
function Le(e) {
	N = e;
}
function Re(e, t = !1, n) {
	N = {
		p: N,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: U,
		l: Ie && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function ze(e) {
	var t = N, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) mn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, N = t.p, e ?? {};
}
function Be() {
	return !Ie || N !== null && N.l === null;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Ve = [];
function He() {
	var e = Ve;
	Ve = [], te(e);
}
function Ue(e) {
	if (Ve.length === 0 && !tt) {
		var t = Ve;
		queueMicrotask(() => {
			t === Ve && He();
		});
	}
	Ve.push(e);
}
function We(e) {
	var t = U;
	if (t === null) return B.f |= T, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Ge(e, t);
}
function Ge(e, t) {
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
var Ke = ~(b | x | y);
function P(e, t) {
	e.f = e.f & Ke | t;
}
function qe(e) {
	e.f & 512 || e.deps === null ? P(e, y) : P(e, x);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Je(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= w, Je(t.deps));
}
function Ye(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Je(e.deps), P(e, y);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Xe = !1, Ze = !1;
function Qe(e) {
	var t = Ze;
	try {
		return Ze = !1, [e(), Ze];
	} finally {
		Ze = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var $e = /* @__PURE__ */ new Set(), F = null, I = null, et = null, tt = !1, nt = !1, rt = null, it = null, at = 0, ot = 1, st = class e {
	id = ot++;
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
			for (var r of n.d) P(r, b), t(r);
			for (r of n.m) P(r, x), t(r);
		}
		this.#d.add(e);
	}
	#g() {
		if (at++ > 1e3 && ($e.delete(this), ct()), !this.#m()) {
			for (let e of this.#c) this.#l.delete(e), P(e, b), this.schedule(e);
			for (let e of this.#l) P(e, x), this.schedule(e);
		}
		let t = this.#o;
		this.#o = [], this.apply();
		var n = rt = [], r = [], i = it = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw ht(e), t;
		}
		if (F = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (rt = null, it = null, this.#m() || this.#h()) {
			this.#v(r), this.#v(n);
			for (let [e, t] of this.#u) mt(e, t);
		} else {
			this.#r.size === 0 && $e.delete(this), this.#c.clear(), this.#l.clear();
			for (let e of this.#e) e(this);
			this.#e.clear(), ut(r), ut(n), this.#a?.resolve();
		}
		var o = F;
		if (this.#o.length > 0) {
			let e = o ??= this;
			e.#o.push(...this.#o.filter((t) => !e.#o.includes(t)));
		}
		o !== null && ($e.add(o), o.#g()), Fe && !$e.has(this) && this.#y();
	}
	#_(e, t, n) {
		e.f ^= y;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#u.has(r)) && r.fn !== null) {
				a ? r.f ^= y : i & 4 ? t.push(r) : Fe && i & 16777224 ? n.push(r) : Wn(r) && (i & 16 && this.#l.add(r), Yn(r));
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
		for (var t = 0; t < e.length; t += 1) Ye(e[t], this.#c, this.#l);
	}
	capture(e, t, n = !1) {
		e.v !== A && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), I?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		F = this;
	}
	deactivate() {
		F = null, I = null;
	}
	flush() {
		try {
			nt = !0, F = this, this.#g();
		} finally {
			at = 0, et = null, rt = null, it = null, nt = !1, F = null, I = null, Nt.clear();
		}
	}
	discard() {
		for (let e of this.#t) e(this);
		this.#t.clear(), this.#n.clear(), $e.delete(this);
	}
	register_created_effect(e) {
		this.#s.push(e);
	}
	#y() {
		for (let l of $e) {
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
				for (var o of t) dt(o, r, i, a);
				a = /* @__PURE__ */ new Map();
				var s = [...l.current.keys()].filter((e) => this.current.has(e) ? this.current.get(e)[0] !== e : !0);
				for (let e of this.#s) !(e.f & 155648) && ft(e, s, a) && (e.f & 4194320 ? (P(e, b), l.schedule(e)) : l.#c.add(e));
				if (l.#o.length > 0) {
					l.apply();
					for (var c of l.#o) l.#_(c, [], []);
					l.#o = [];
				}
				l.deactivate();
			}
		}
		for (let e of $e) e.#p.has(this) && (e.#p.delete(this), e.#p.size === 0 && !e.#m() && (e.activate(), e.#g()));
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
		this.#f || n || (this.#f = !0, Ue(() => {
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
		return (this.#a ??= ne()).promise;
	}
	static ensure() {
		if (F === null) {
			let t = F = new e();
			nt || ($e.add(F), tt || Ue(() => {
				F === t && t.flush();
			}));
		}
		return F;
	}
	apply() {
		if (!Fe || !this.is_fork && $e.size === 1) {
			I = null;
			return;
		}
		I = /* @__PURE__ */ new Map();
		for (let [e, [t]] of this.current) I.set(e, t);
		for (let n of $e) if (!(n === this || n.is_fork)) {
			var e = !1, t = !1;
			if (n.id < this.id) for (let [r, [, i]] of n.current) i || (e ||= this.current.has(r), t ||= !this.current.has(r));
			if (e && t) this.#p.add(n);
			else for (let [e, t] of n.previous) I.has(e) || I.set(e, t);
		}
	}
	schedule(e) {
		if (et = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (rt !== null && t === U && (Fe || (B === null || !(B.f & 2)) && !Xe)) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= y;
			}
		}
		this.#o.push(t);
	}
};
function ct() {
	try {
		me();
	} catch (e) {
		Ge(e, et);
	}
}
var lt = null;
function ut(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Wn(r) && (lt = /* @__PURE__ */ new Set(), Yn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && En(r), lt?.size > 0)) {
				Nt.clear();
				for (let e of lt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) lt.has(n) && (lt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Yn(n);
					}
				}
				lt.clear();
			}
		}
		lt = null;
	}
}
function dt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? dt(i, t, n, r) : e & 4194320 && !(e & 2048) && ft(i, t, r) && (P(i, b), pt(i));
	}
}
function ft(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (u.call(t, r)) return !0;
		if (r.f & 2 && ft(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function pt(e) {
	F.schedule(e);
}
function mt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), P(e, y);
		for (var n = e.first; n !== null;) mt(n, t), n = n.next;
	}
}
function ht(e) {
	P(e, y);
	for (var t = e.first; t !== null;) ht(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function gt(e) {
	let t = 0, n = Ft(0), r;
	return () => {
		fn() && (J(n), vn(() => (t === 0 && (r = Qn(() => e(() => Vt(n)))), t += 1, () => {
			Ue(() => {
				--t, t === 0 && (r?.(), r = void 0, Vt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var _t = ce | S;
function vt(e, t, n, r) {
	new yt(e, t, n, r);
}
var yt = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = j ? M : null;
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
	#h = gt(() => (this.#m = Ft(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = U;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = U.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = bn(() => {
			if (j) {
				let e = this.#t;
				De();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#v() : this.#g();
			} else this.#y();
		}, _t), j && (this.#e = M);
	}
	#g() {
		try {
			this.#a = R(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed;
		t && (this.#s = R(() => {
			t(this.#e, () => e, () => () => {});
		}));
	}
	#v() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = R(() => e(this.#e)), Ue(() => {
			var e = this.#c = document.createDocumentFragment(), t = L();
			e.append(t), this.#a = this.#x(() => R(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, Dn(this.#o, () => {
				this.#o = null;
			}), this.#b(F));
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = R(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				jn(this.#a, e);
				let t = this.#n.pending;
				this.#o = R(() => t(this.#e));
			} else this.#b(F);
		} catch (e) {
			this.error(e);
		}
	}
	#b(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Ye(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(e) {
		var t = U, n = B, r = N;
		In(this.#i), H(this.#i), Le(this.#i.ctx);
		try {
			return st.ensure(), e();
		} catch (e) {
			return We(e), null;
		} finally {
			In(t), H(n), Le(r);
		}
	}
	#S(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#b(t), this.#o && Dn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Ue(() => {
			this.#d = !1, this.#m && Rt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), J(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		F?.is_fork ? (this.#a && F.skip_effect(this.#a), this.#o && F.skip_effect(this.#o), this.#s && F.skip_effect(this.#s), F.on_fork_commit(() => {
			this.#C(e);
		})) : this.#C(e);
	}
	#C(e) {
		this.#a &&= (z(this.#a), null), this.#o &&= (z(this.#o), null), this.#s &&= (z(this.#s), null), j && (Ee(this.#t), ke(), Ee(Ae()));
		var t = this.#n.onerror;
		let n = this.#n.failed;
		var r = !1, i = !1;
		let a = () => {
			if (r) {
				we();
				return;
			}
			r = !0, i && ve(), this.#s !== null && Dn(this.#s, () => {
				this.#s = null;
			}), this.#x(() => {
				this.#y();
			});
		}, o = (e) => {
			try {
				i = !0, t?.(e, a), i = !1;
			} catch (e) {
				Ge(e, this.#i && this.#i.parent);
			}
			n && (this.#s = this.#x(() => {
				try {
					return R(() => {
						var t = U;
						t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
					});
				} catch (e) {
					return Ge(e, this.#i.parent), null;
				}
			}));
		};
		Ue(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				Ge(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => Ge(e, this.#i && this.#i.parent)) : o(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function bt(e, t, n, r) {
	let i = Be() ? wt : Et;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = U, s = xt(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		s();
		try {
			r(e);
		} catch (e) {
			o.f & 16384 || Ge(e, o);
		}
		St();
	}
	if (n.length === 0) {
		c.then(() => l(t.map(i)));
		return;
	}
	var u = Ct();
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ Tt(e))).then((e) => l([...t.map(i), ...e])).catch((e) => Ge(e, o)).finally(() => u());
	}
	c ? c.then(() => {
		s(), d(), St();
	}) : d();
}
function xt() {
	var e = U, t = B, n = N, r = F;
	return function(i = !0) {
		In(e), H(t), Le(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function St(e = !0) {
	In(null), H(null), Le(null), e && F?.deactivate();
}
function Ct() {
	var e = U, t = e.b, n = F, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
		t.update_pending_count(-1, n), n.decrement(r, e, i);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function wt(e) {
	var t = 2 | b;
	return U !== null && (U.f |= S), {
		ctx: N,
		deps: null,
		effects: null,
		equals: Me,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: A,
		wv: 0,
		parent: U,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function Tt(e, t, n) {
	let r = U;
	r === null && O();
	var i = void 0, a = Ft(A), o = !B, s = /* @__PURE__ */ new Map();
	return _n(() => {
		var t = U, n = ne();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, n.reject).finally(St);
		} catch (e) {
			n.reject(e), St();
		}
		var c = F;
		if (o) {
			if (t.f & 32768) var l = Ct();
			if (r.b.is_rendered()) s.get(c)?.reject(E), s.delete(c);
			else {
				for (let e of s.values()) e.reject(E);
				s.clear();
			}
			s.set(c, n);
		}
		let u = (e, n = void 0) => {
			if (l && l(n === E), !(n === E || t.f & 16384)) {
				if (c.activate(), n) a.f |= T, Rt(a, n);
				else {
					a.f & 8388608 && (a.f ^= T), Rt(a, e);
					for (let [e, t] of s) {
						if (s.delete(e), e === c) break;
						t.reject(E);
					}
				}
				c.deactivate();
			}
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), pn(() => {
		for (let e of s.values()) e.reject(E);
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
function Et(e) {
	let t = /* @__PURE__ */ wt(e);
	return t.equals = Pe, t;
}
function Dt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) z(t[n]);
	}
}
function Ot(e) {
	var t, n = U, r = e.parent;
	if (!Pn && r !== null && r.f & 24576) return xe(), e.v;
	In(r);
	try {
		e.f &= ~w, Dt(e), t = Kn(e);
	} finally {
		In(n);
	}
	return t;
}
function kt(e) {
	var t = Ot(e);
	if (!e.equals(t) && (e.wv = Un(), (!F?.is_fork || e.deps === null) && (F === null ? e.v = t : F.capture(e, t, !0), e.deps === null))) {
		P(e, y);
		return;
	}
	Pn || (I === null ? qe(e) : (fn() || F?.is_fork) && I.set(e, t));
}
function At(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(E), t.teardown = ee, t.ac = null, Jn(t, 0), Cn(t));
}
function jt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && Yn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Mt = /* @__PURE__ */ new Set(), Nt = /* @__PURE__ */ new Map(), Pt = !1;
function Ft(e, t) {
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
function It(e, t) {
	let n = Ft(e, t);
	return Ln(n), n;
}
function Lt(e, t, n = !1) {
	return B !== null && (!V || B.f & 131072) && Be() && B.f & 4325394 && (W === null || !u.call(W, e)) && _e(), Rt(e, n ? Ut(t) : t, it);
}
function Rt(e, t, n = null) {
	if (!e.equals(t)) {
		Nt.set(e, Pn ? t : e.v);
		var r = st.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && Ot(t), I === null && qe(t);
		}
		e.wv = Un(), Ht(e, b, n), Be() && U !== null && U.f & 1024 && !(U.f & 96) && (q === null ? Rn([e]) : q.push(e)), !r.is_fork && Mt.size > 0 && !Pt && zt();
	}
	return t;
}
function zt() {
	Pt = !1;
	for (let e of Mt) e.f & 1024 && P(e, x), Wn(e) && Yn(e);
	Mt.clear();
}
function Bt(e, t = 1) {
	var n = J(e), r = t === 1 ? n++ : n--;
	return Lt(e, n), r;
}
function Vt(e) {
	Lt(e, e.v + 1);
}
function Ht(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Be(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === U)) {
			var l = (c & b) === 0;
			if (l && P(s, t), c & 2) {
				var u = s;
				I?.delete(u), c & 65536 || (c & 512 && (s.f |= w), Ht(u, x, n));
			} else if (l) {
				var d = s;
				c & 16 && lt !== null && lt.add(d), n === null ? pt(d) : n.push(d);
			}
		}
	}
}
function Ut(e) {
	if (typeof e != "object" || !e || de in e) return e;
	let t = _(e);
	if (t !== h && t !== g) return e;
	var n = /* @__PURE__ */ new Map(), r = c(e), i = /* @__PURE__ */ It(0), a = null, o = Vn, s = (e) => {
		if (Vn === o) return e();
		var t = B, n = Vn;
		H(null), Hn(o);
		var r = e();
		return H(t), Hn(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ It(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && k();
			var i = n.get(t);
			return i === void 0 ? s(() => {
				var e = /* @__PURE__ */ It(r.value, a);
				return n.set(t, e), e;
			}) : Lt(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = s(() => /* @__PURE__ */ It(A, a));
					n.set(t, e), Vt(i);
				}
			} else Lt(r, A), Vt(i);
			return !0;
		},
		get(t, r, i) {
			if (r === de) return e;
			var o = n.get(r), c = r in t;
			if (o === void 0 && (!c || p(t, r)?.writable) && (o = s(() => /* @__PURE__ */ It(Ut(c ? t[r] : A), a)), n.set(r, o)), o !== void 0) {
				var l = J(o);
				return l === A ? void 0 : l;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = J(i));
			} else if (r === void 0) {
				var a = n.get(t), o = a?.v;
				if (a !== void 0 && o !== A) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === de) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== A || Reflect.has(e, t);
			return (r !== void 0 || U !== null && (!i || p(e, t)?.writable)) && (r === void 0 && (r = s(() => /* @__PURE__ */ It(i ? Ut(e[t]) : A, a)), n.set(t, r)), J(r) === A) ? !1 : i;
		},
		set(e, t, o, c) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var f = n.get(d + "");
				f === void 0 ? d in e && (f = s(() => /* @__PURE__ */ It(A, a)), n.set(d + "", f)) : Lt(f, A);
			}
			if (l === void 0) (!u || p(e, t)?.writable) && (l = s(() => /* @__PURE__ */ It(void 0, a)), Lt(l, Ut(o)), n.set(t, l));
			else {
				u = l.v !== A;
				var m = s(() => Ut(o));
				Lt(l, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(c, o), !u) {
				if (r && typeof t == "string") {
					var g = n.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && Lt(g, _ + 1);
				}
				Vt(i);
			}
			return !0;
		},
		ownKeys(e) {
			J(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== A;
			});
			for (var [r, a] of n) a.v !== A && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			ge();
		}
	});
}
function Wt(e) {
	try {
		if (typeof e == "object" && e && de in e) return e[de];
	} catch {}
	return e;
}
function Gt(e, t) {
	return Object.is(Wt(e), Wt(t));
}
var Kt, qt, Jt, Yt;
function Xt() {
	if (Kt === void 0) {
		Kt = window, qt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Jt = p(t, "firstChild").get, Yt = p(t, "nextSibling").get, v(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), v(n) && (n.__t = void 0);
	}
}
function L(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Zt(e) {
	return Jt.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Qt(e) {
	return Yt.call(e);
}
function $t(e, t) {
	if (!j) return /* @__PURE__ */ Zt(e);
	var n = /* @__PURE__ */ Zt(M);
	if (n === null) n = M.appendChild(L());
	else if (t && n.nodeType !== 3) {
		var r = L();
		return n?.before(r), Ee(r), r;
	}
	return t && an(n), Ee(n), n;
}
function en(e, t = !1) {
	if (!j) {
		var n = /* @__PURE__ */ Zt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Qt(n) : n;
	}
	if (t) {
		if (M?.nodeType !== 3) {
			var r = L();
			return M?.before(r), Ee(r), r;
		}
		an(M);
	}
	return M;
}
function tn(e, t = 1, n = !1) {
	let r = j ? M : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Qt(r);
	if (!j) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = L();
			return r === null ? i?.after(a) : r.before(a), Ee(a), a;
		}
		an(r);
	}
	return Ee(r), r;
}
function nn() {
	return !Fe || lt !== null ? !1 : (U.f & oe) !== 0;
}
function rn(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function an(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function on(e, t) {
	if (t) {
		let t = document.body;
		e.autofocus = !0, Ue(() => {
			document.activeElement === t && e.focus();
		});
	}
}
var sn = !1;
function cn() {
	sn || (sn = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t.__on_r?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function ln(e) {
	var t = B, n = U;
	H(null), In(null);
	try {
		return e();
	} finally {
		H(t), In(n);
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function un(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function dn(e, t) {
	var n = U;
	n !== null && n.f & 8192 && (e |= ie);
	var r = {
		ctx: N,
		deps: null,
		nodes: null,
		f: e | b | 512,
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
	F?.register_created_effect(r);
	var i = r;
	if (e & 4) rt === null ? st.ensure().schedule(r) : rt.push(r);
	else if (t !== null) {
		try {
			Yn(r);
		} catch (e) {
			throw z(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ce));
	}
	if (i !== null && (i.parent = n, n !== null && un(i, n), B !== null && B.f & 2 && !(e & 64))) {
		var a = B;
		(a.effects ??= []).push(i);
	}
	return r;
}
function fn() {
	return B !== null && !V;
}
function pn(e) {
	let t = dn(8, null);
	return P(t, y), t.teardown = e, t;
}
function mn(e) {
	return dn(4 | C, e);
}
function hn(e) {
	st.ensure();
	let t = dn(64 | S, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? Dn(t, () => {
			z(t), n(void 0);
		}) : (z(t), n(void 0));
	});
}
function gn(e) {
	return dn(4, e);
}
function _n(e) {
	return dn(ue | S, e);
}
function vn(e, t = 0) {
	return dn(8 | t, e);
}
function yn(e, t = [], n = [], r = []) {
	bt(r, t, n, (t) => {
		dn(8, () => e(...t.map(J)));
	});
}
function bn(e, t = 0) {
	return dn(16 | t, e);
}
function xn(e, t = 0) {
	return dn(re | t, e);
}
function R(e) {
	return dn(32 | S, e);
}
function Sn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Pn, n = B;
		Fn(!0), H(null);
		try {
			t.call(null);
		} finally {
			Fn(e), H(n);
		}
	}
}
function Cn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && ln(() => {
			e.abort(E);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : z(n, t), n = r;
	}
}
function wn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || z(t), t = n;
	}
}
function z(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Tn(e.nodes.start, e.nodes.end), n = !0), P(e, se), Cn(e, t && !n), Jn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	Sn(e), e.f ^= se, e.f |= ae;
	var i = e.parent;
	i !== null && i.first !== null && En(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Tn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Qt(e);
		e.remove(), e = n;
	}
}
function En(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Dn(e, t, n = !0) {
	var r = [];
	On(e, r, !0);
	var i = () => {
		n && z(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function On(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ie;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				On(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function kn(e) {
	An(e, !0);
}
function An(e, t) {
	if (e.f & 8192) {
		e.f ^= ie, e.f & 1024 || (P(e, b), st.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			An(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function jn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Qt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Mn = null, Nn = !1, Pn = !1;
function Fn(e) {
	Pn = e;
}
var B = null, V = !1;
function H(e) {
	B = e;
}
var U = null;
function In(e) {
	U = e;
}
var W = null;
function Ln(e) {
	B !== null && (!Fe || B.f & 2) && (W === null ? W = [e] : W.push(e));
}
var G = null, K = 0, q = null;
function Rn(e) {
	q = e;
}
var zn = 1, Bn = 0, Vn = Bn;
function Hn(e) {
	Vn = e;
}
function Un() {
	return ++zn;
}
function Wn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~w), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Wn(a) && kt(a), a.wv > e.wv) return !0;
		}
		t & 512 && I === null && P(e, y);
	}
	return !1;
}
function Gn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!Fe && W !== null && u.call(W, e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Gn(a, t, !1) : t === a && (n ? P(a, b) : a.f & 1024 && P(a, x), pt(a));
	}
}
function Kn(e) {
	var t = G, n = K, r = q, i = B, a = W, o = N, s = V, c = Vn, l = e.f;
	G = null, K = 0, q = null, B = l & 96 ? null : e, W = null, Le(e.ctx), V = !1, Vn = ++Bn, e.ac !== null && (ln(() => {
		e.ac.abort(E);
	}), e.ac = null);
	try {
		e.f |= le;
		var u = e.fn, d = u();
		e.f |= oe;
		var f = e.deps, p = F?.is_fork;
		if (G !== null) {
			var m;
			if (p || Jn(e, K), f !== null && K > 0) for (f.length = K + G.length, m = 0; m < G.length; m++) f[K + m] = G[m];
			else e.deps = f = G;
			if (fn() && e.f & 512) for (m = K; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && K < f.length && (Jn(e, K), f.length = K);
		if (Be() && q !== null && !V && f !== null && !(e.f & 6146)) for (m = 0; m < q.length; m++) Gn(q[m], e);
		if (i !== null && i !== e) {
			if (Bn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Bn;
			if (t !== null) for (let e of t) e.rv = Bn;
			q !== null && (r === null ? r = q : r.push(...q));
		}
		return e.f & 8388608 && (e.f ^= T), d;
	} catch (e) {
		return We(e);
	} finally {
		e.f ^= le, G = t, K = n, q = r, B = i, W = a, Le(o), V = s, Vn = c;
	}
}
function qn(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = l.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (G === null || !u.call(G, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~w), a.v !== A && qe(a), At(a), Jn(a, 0);
	}
}
function Jn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) qn(e, n[r]);
}
function Yn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		P(e, y);
		var n = U, r = Nn;
		U = e, Nn = !0;
		try {
			t & 16777232 ? wn(e) : Cn(e), Sn(e);
			var i = Kn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = zn;
		} finally {
			Nn = r, U = n;
		}
	}
}
function J(e) {
	var t = (e.f & 2) != 0;
	if (Mn?.add(e), B !== null && !V && !(U !== null && U.f & 16384) && (W === null || !u.call(W, e))) {
		var n = B.deps;
		if (B.f & 2097152) e.rv < Bn && (e.rv = Bn, G === null && n !== null && n[K] === e ? K++ : G === null ? G = [e] : G.push(e));
		else {
			(B.deps ??= []).push(e);
			var r = e.reactions;
			r === null ? e.reactions = [B] : u.call(r, B) || r.push(B);
		}
	}
	if (Pn && Nt.has(e)) return Nt.get(e);
	if (t) {
		var i = e;
		if (Pn) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Zn(i)) && (a = Ot(i)), Nt.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !V && B !== null && (Nn || (B.f & 512) != 0), s = (i.f & oe) === 0;
		Wn(i) && (o && (i.f |= 512), kt(i)), o && !s && (jt(i), Xn(i));
	}
	if (I?.has(e)) return I.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Xn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (jt(t), Xn(t));
}
function Zn(e) {
	if (e.v === A) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Nt.has(t) || t.f & 2 && Zn(t)) return !0;
	return !1;
}
function Qn(e) {
	var t = V;
	try {
		return V = !0, e();
	} finally {
		V = t;
	}
}
//#endregion
//#region node_modules/svelte/src/utils.js
function $n(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var er = [
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
function tr(e) {
	return er.includes(e);
}
var nr = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), rr = {
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
function ir(e) {
	return e = e.toLowerCase(), rr[e] ?? e;
}
[...nr];
var ar = ["touchstart", "touchmove"];
function or(e) {
	return ar.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var sr = Symbol("events"), cr = /* @__PURE__ */ new Set(), lr = /* @__PURE__ */ new Set();
function ur(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || mr.call(t, e), !e.cancelBubble) return ln(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ue(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function dr(e, t, n) {
	(t[sr] ??= {})[e] = n;
}
function fr(e) {
	for (var t = 0; t < e.length; t++) cr.add(e[t]);
	for (var n of lr) n(e);
}
var pr = null;
function mr(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	pr = e;
	var o = 0, s = pr === e && e[sr];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[sr] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		f(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = B, d = U;
		H(null), In(null);
		try {
			for (var p, m = []; a !== null;) {
				var h = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var g = a[sr]?.[r];
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
			e[sr] = t, delete e.currentTarget, H(u), In(d);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var hr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function gr(e) {
	return hr?.createHTML(e) ?? e;
}
function _r(e) {
	var t = rn("template");
	return t.innerHTML = gr(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function vr(e, t) {
	var n = U;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function yr(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (j) return vr(M, null), M;
		i === void 0 && (i = _r(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Zt(i)));
		var t = r || qt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Zt(t), s = t.lastChild;
			vr(o, s);
		} else vr(t, t);
		return t;
	};
}
function br(e = "") {
	if (!j) {
		var t = L(e + "");
		return vr(t, t), t;
	}
	var n = M;
	return n.nodeType === 3 ? an(n) : (n.before(n = L()), Ee(n)), vr(n, n), n;
}
function xr() {
	if (j) return vr(M, null), M;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = L();
	return e.append(t, n), vr(t, n), e;
}
function Sr(e, t) {
	if (j) {
		var n = U;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = M), De();
		return;
	}
	e !== null && e.before(t);
}
function Cr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function wr(e, t) {
	return Er(e, t);
}
var Tr = /* @__PURE__ */ new Map();
function Er(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	Xt();
	var c = void 0, l = hn(() => {
		var o = n ?? t.appendChild(L());
		vt(o, { pending: () => {} }, (t) => {
			Re({});
			var n = N;
			if (a && (n.c = a), i && (r.$$events = i), j && vr(t, null), c = e(t, r) || {}, j && (U.nodes.end = M, M === null || M.nodeType !== 8 || M.data !== "]")) throw Se(), ye;
			ze();
		}, s);
		var l = /* @__PURE__ */ new Set(), u = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!l.has(r)) {
					l.add(r);
					var i = or(r);
					for (let e of [t, document]) {
						var a = Tr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Tr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, mr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return u(d(cr)), lr.add(u), () => {
			for (var e of l) for (let n of [t, document]) {
				var r = Tr.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, mr), r.delete(e), r.size === 0 && Tr.delete(n)) : r.set(e, i);
			}
			lr.delete(u), o !== n && o.parentNode?.removeChild(o);
		};
	});
	return Dr.set(c, l), c;
}
var Dr = /* @__PURE__ */ new WeakMap(), Or = class {
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
			if (n) kn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (z(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						jn(r, t), t.append(L()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else z(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), Dn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (z(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = F, r = nn();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = L();
			i.append(a), this.#n.set(e, {
				effect: R(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, R(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else j && (this.anchor = M), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function kr(e, t, n = !1) {
	var r;
	j && (r = M, De());
	var i = new Or(e), a = n ? ce : 0;
	function o(e, t) {
		if (j) {
			var n = je(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Ae();
				Ee(a), i.anchor = a, Te(!1), i.ensure(e, t), Te(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	bn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function Ar(e, t, ...n) {
	var r = new Or(e);
	bn(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, ce);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attachments.js
function jr(e, t) {
	var n = void 0, r;
	xn(() => {
		n !== (n = t()) && (r &&= (z(r), null), n && (r = R(() => {
			gn(() => n(e));
		})));
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function Mr(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = Mr(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function Nr() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Mr(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function Pr(e) {
	return typeof e == "object" ? Nr(e) : e ?? "";
}
var Fr = [..." 	\n\r\f\xA0\v﻿"];
function Ir(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Fr.includes(r[o - 1])) && (s === r.length || Fr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function Lr(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Rr(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function zr(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Rr)), i && c.push(...Object.keys(i).map(Rr));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Rr(e.substring(l, u).trim());
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
		return r && (n += Lr(r)), i && (n += Lr(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Br(e, t, n, r, i, a) {
	var o = e.__className;
	if (j || o !== n || o === void 0) {
		var s = Ir(n, r, a);
		(!j || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function Vr(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function Hr(e, t, n, r) {
	var i = e.__style;
	if (j || i !== t) {
		var a = zr(t, r);
		(!j || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
	} else r && (Array.isArray(r) ? (Vr(e, n?.[0], r[0]), Vr(e, n?.[1], r[1], "important")) : Vr(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function Ur(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!c(t)) return Ce();
		for (var r of e.options) r.selected = t.includes(Gr(r));
		return;
	}
	for (r of e.options) if (Gt(Gr(r), t)) {
		r.selected = !0;
		return;
	}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function Wr(e) {
	var t = new MutationObserver(() => {
		Ur(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), pn(() => {
		t.disconnect();
	});
}
function Gr(e) {
	return "__value" in e ? e.__value : e.value;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Kr = Symbol("class"), qr = Symbol("style"), Jr = Symbol("is custom element"), Yr = Symbol("is html"), Xr = D ? "link" : "LINK", Zr = D ? "input" : "INPUT", Qr = D ? "option" : "OPTION", $r = D ? "select" : "SELECT";
function ei(e) {
	if (j) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					ni(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					ni(e, "checked", null), e.checked = r;
				}
			}
		};
		e.__on_r = n, Ue(n), cn();
	}
}
function ti(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ni(e, t, n, r) {
	var i = ai(e);
	j && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Xr) || i[t] !== (i[t] = n) && (t === "loading" && (e[pe] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && si(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ri(e, t, n, r, i = !1, a = !1) {
	if (j && i && e.nodeName === Zr) {
		var o = e;
		(o.type === "checkbox" ? "defaultChecked" : "defaultValue") in n || ei(o);
	}
	var s = ai(e), c = s[Jr], l = !s[Yr];
	let u = j && c;
	u && Te(!1);
	var d = t || {}, f = e.nodeName === Qr;
	for (var p in t) p in n || (n[p] = null);
	n.class ? n.class = Pr(n.class) : (r || n[Kr]) && (n.class = null), n[qr] && (n.style ??= null);
	var m = si(e);
	for (let i in n) {
		let o = n[i];
		if (f && i === "value" && o == null) {
			e.value = e.__value = "", d[i] = o;
			continue;
		}
		if (i === "class") {
			Br(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", o, r, t?.[Kr], n[Kr]), d[i] = o, d[Kr] = n[Kr];
			continue;
		}
		if (i === "style") {
			Hr(e, o, t?.[qr], n[qr]), d[i] = o, d[qr] = n[qr];
			continue;
		}
		var h = d[i];
		if (!(o === h && !(o === void 0 && e.hasAttribute(i)))) {
			d[i] = o;
			var g = i[0] + i[1];
			if (g !== "$$") if (g === "on") {
				let t = {}, n = "$$" + i, r = i.slice(2);
				var _ = tr(r);
				if ($n(r) && (r = r.slice(0, -7), t.capture = !0), !_ && h) {
					if (o != null) continue;
					e.removeEventListener(r, d[n], t), d[n] = null;
				}
				if (_) dr(r, e, o), fr([r]);
				else if (o != null) {
					function a(e) {
						d[i].call(this, e);
					}
					d[n] = ur(r, e, a, t);
				}
			} else if (i === "style") ni(e, i, o);
			else if (i === "autofocus") on(e, !!o);
			else if (!c && (i === "__value" || i === "value" && o != null)) e.value = e.__value = o;
			else if (i === "selected" && f) ti(e, o);
			else {
				var v = i;
				l || (v = ir(v));
				var ee = v === "defaultValue" || v === "defaultChecked";
				if (o == null && !c && !ee) if (s[i] = null, v === "value" || v === "checked") {
					let n = e, r = t === void 0;
					if (v === "value") {
						let e = n.defaultValue;
						n.removeAttribute(v), n.defaultValue = e, n.value = n.__value = r ? e : null;
					} else {
						let e = n.defaultChecked;
						n.removeAttribute(v), n.defaultChecked = e, n.checked = r ? e : !1;
					}
				} else e.removeAttribute(i);
				else ee || m.includes(v) && (c || typeof o != "string") ? (e[v] = o, v in s && (s[v] = A)) : typeof o != "function" && ni(e, v, o, a);
			}
		}
	}
	return u && Te(!0), d;
}
function ii(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	bt(i, n, r, (n) => {
		var r = void 0, i = {}, c = e.nodeName === $r, l = !1;
		if (xn(() => {
			var u = t(...n.map(J)), d = ri(e, r, u, a, o, s);
			l && c && "value" in u && Ur(e, u.value);
			for (let e of Object.getOwnPropertySymbols(i)) u[e] || z(i[e]);
			for (let t of Object.getOwnPropertySymbols(u)) {
				var f = u[t];
				t.description === "@attach" && (!r || f !== r[t]) && (i[t] && z(i[t]), i[t] = R(() => jr(e, () => f))), d[t] = f;
			}
			r = d;
		}), c) {
			var u = e;
			gn(() => {
				Ur(u, r.value, !0), Wr(u);
			});
		}
		l = !0;
	});
}
function ai(e) {
	return e.__attributes ??= {
		[Jr]: e.nodeName.includes("-"),
		[Yr]: e.namespaceURI === be
	};
}
var oi = /* @__PURE__ */ new Map();
function si(e) {
	var t = e.getAttribute("is") || e.nodeName, n = oi.get(t);
	if (n) return n;
	oi.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = m(i), r) r[o].set && n.push(o);
		i = _(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function ci(e, t) {
	return e === t || e?.[de] === t;
}
function li(e = {}, t, n, r) {
	var i = N.r, a = U;
	return gn(() => {
		var o, s;
		return vn(() => {
			o = s, s = r?.() || [], Qn(() => {
				e !== n(...s) && (t(e, ...s), o && ci(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && ci(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
var ui = {
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
function di(e, t, n) {
	return new Proxy({
		props: e,
		exclude: t
	}, ui);
}
function fi(e, t, n, r) {
	var i = !Ie || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = () => (c && (c = !1, s = o ? Qn(r) : r), s);
	let u;
	if (a) {
		var d = de in e || fe in e;
		u = p(e, t)?.set ?? (d && t in e ? (n) => e[t] = n : void 0);
	}
	var f, m = !1;
	a ? [f, m] = Qe(() => e[t]) : f = e[t], f === void 0 && r !== void 0 && (f = l(), u && (i && he(t), u(f)));
	var h = i ? () => {
		var n = e[t];
		return n === void 0 ? l() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return h;
	if (u) {
		var g = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || g || m) && u(t ? h() : e), e) : h();
		});
	}
	var _ = !1, v = (n & 1 ? wt : Et)(() => (_ = !1, h()));
	a && J(v);
	var ee = U;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? J(v) : i && a ? Ut(e) : e;
			return Lt(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return Pn && _ || ee.f & 16384 ? v.v : J(v);
	});
}
//#endregion
//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var pi = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, mi = (e, t) => ({
	classGroupId: e,
	validator: t
}), hi = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), gi = "-", _i = [], vi = "arbitrary..", yi = (e) => {
	let t = Si(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return xi(e);
			let n = e.split(gi);
			return bi(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? pi(i, t) : t : i || _i;
			}
			return n[e] || _i;
		}
	};
}, bi = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = bi(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(gi) : e.slice(t).join(gi), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, xi = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? vi + r : void 0;
})(), Si = (e) => {
	let { theme: t, classGroups: n } = e;
	return Ci(n, t);
}, Ci = (e, t) => {
	let n = hi();
	for (let r in e) {
		let i = e[r];
		wi(i, n, r, t);
	}
	return n;
}, wi = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Ti(i, t, n, r);
	}
}, Ti = (e, t, n, r) => {
	if (typeof e == "string") {
		Ei(e, t, n);
		return;
	}
	if (typeof e == "function") {
		Di(e, t, n, r);
		return;
	}
	Oi(e, t, n, r);
}, Ei = (e, t, n) => {
	let r = e === "" ? t : ki(t, e);
	r.classGroupId = n;
}, Di = (e, t, n, r) => {
	if (Ai(e)) {
		wi(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(mi(n, e));
}, Oi = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		wi(o, ki(t, a), n, r);
	}
}, ki = (e, t) => {
	let n = e, r = t.split(gi), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = hi(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Ai = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, ji = (e) => {
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
}, Mi = "!", Ni = ":", Pi = [], Fi = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), Ii = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Ni) {
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
		s.endsWith(Mi) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Mi) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Fi(t, l, c, u);
	};
	if (t) {
		let e = t + Ni, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Fi(Pi, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, Li = (e) => {
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
}, Ri = (e) => ({
	cache: ji(e.cacheSize),
	parseClassName: Ii(e),
	sortModifiers: Li(e),
	...yi(e)
}), zi = /\s+/, Bi = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a } = t, o = [], s = e.trim().split(zi), c = "";
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
		let g = u.length === 0 ? "" : u.length === 1 ? u[0] : a(u).join(":"), _ = d ? g + Mi : g, v = _ + h;
		if (o.indexOf(v) > -1) continue;
		o.push(v);
		let ee = i(h, m);
		for (let e = 0; e < ee.length; ++e) {
			let t = ee[e];
			o.push(_ + t);
		}
		c = t + (c.length > 0 ? " " + c : c);
	}
	return c;
}, Vi = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Hi(n)) && (i && (i += " "), i += r);
	return i;
}, Hi = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Hi(e[r])) && (n && (n += " "), n += t);
	return n;
}, Ui = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = Ri(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = Bi(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Vi(...e));
}, Wi = [], Y = (e) => {
	let t = (t) => t[e] || Wi;
	return t.isThemeGetter = !0, t;
}, Gi = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ki = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qi = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Ji = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Yi = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xi = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Zi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Qi = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $i = (e) => qi.test(e), X = (e) => !!e && !Number.isNaN(Number(e)), ea = (e) => !!e && Number.isInteger(Number(e)), ta = (e) => e.endsWith("%") && X(e.slice(0, -1)), na = (e) => Ji.test(e), ra = () => !0, ia = (e) => Yi.test(e) && !Xi.test(e), aa = () => !1, oa = (e) => Zi.test(e), sa = (e) => Qi.test(e), ca = (e) => !Z(e) && !Q(e), la = (e) => wa(e, Oa, aa), Z = (e) => Gi.test(e), ua = (e) => wa(e, ka, ia), da = (e) => wa(e, Aa, X), fa = (e) => wa(e, Ma, ra), pa = (e) => wa(e, ja, aa), ma = (e) => wa(e, Ea, aa), ha = (e) => wa(e, Da, sa), ga = (e) => wa(e, Na, oa), Q = (e) => Ki.test(e), _a = (e) => Ta(e, ka), va = (e) => Ta(e, ja), ya = (e) => Ta(e, Ea), ba = (e) => Ta(e, Oa), xa = (e) => Ta(e, Da), Sa = (e) => Ta(e, Na, !0), Ca = (e) => Ta(e, Ma, !0), wa = (e, t, n) => {
	let r = Gi.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Ta = (e, t, n = !1) => {
	let r = Ki.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Ea = (e) => e === "position" || e === "percentage", Da = (e) => e === "image" || e === "url", Oa = (e) => e === "length" || e === "size" || e === "bg-size", ka = (e) => e === "length", Aa = (e) => e === "number", ja = (e) => e === "family-name", Ma = (e) => e === "number" || e === "weight", Na = (e) => e === "shadow", Pa = () => {
	let e = Y("color"), t = Y("font"), n = Y("text"), r = Y("font-weight"), i = Y("tracking"), a = Y("leading"), o = Y("breakpoint"), s = Y("container"), c = Y("spacing"), l = Y("radius"), u = Y("shadow"), d = Y("inset-shadow"), f = Y("text-shadow"), p = Y("drop-shadow"), m = Y("blur"), h = Y("perspective"), g = Y("aspect"), _ = Y("ease"), v = Y("animate"), ee = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], te = () => [
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
	], ne = () => [
		...te(),
		Q,
		Z
	], re = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], y = () => [
		"auto",
		"contain",
		"none"
	], b = () => [
		Q,
		Z,
		c
	], x = () => [
		$i,
		"full",
		"auto",
		...b()
	], ie = () => [
		ea,
		"none",
		"subgrid",
		Q,
		Z
	], ae = () => [
		"auto",
		{ span: [
			"full",
			ea,
			Q,
			Z
		] },
		ea,
		Q,
		Z
	], oe = () => [
		ea,
		"auto",
		Q,
		Z
	], se = () => [
		"auto",
		"min",
		"max",
		"fr",
		Q,
		Z
	], ce = () => [
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
	], S = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], C = () => ["auto", ...b()], w = () => [
		$i,
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
		...b()
	], le = () => [
		$i,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...b()
	], ue = () => [
		$i,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...b()
	], T = () => [
		e,
		Q,
		Z
	], de = () => [
		...te(),
		ya,
		ma,
		{ position: [Q, Z] }
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
		ba,
		la,
		{ size: [Q, Z] }
	], E = () => [
		ta,
		_a,
		ua
	], D = () => [
		"",
		"none",
		"full",
		l,
		Q,
		Z
	], O = () => [
		"",
		X,
		_a,
		ua
	], me = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], he = () => [
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
	], k = () => [
		X,
		ta,
		ya,
		ma
	], ge = () => [
		"",
		"none",
		m,
		Q,
		Z
	], _e = () => [
		"none",
		X,
		Q,
		Z
	], ve = () => [
		"none",
		X,
		Q,
		Z
	], ye = () => [
		X,
		Q,
		Z
	], A = () => [
		$i,
		"full",
		...b()
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
			blur: [na],
			breakpoint: [na],
			color: [ra],
			container: [na],
			"drop-shadow": [na],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [ca],
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
			"inset-shadow": [na],
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
			radius: [na],
			shadow: [na],
			spacing: ["px", X],
			text: [na],
			"text-shadow": [na],
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
				$i,
				Z,
				Q,
				g
			] }],
			container: ["container"],
			columns: [{ columns: [
				X,
				Z,
				Q,
				s
			] }],
			"break-after": [{ "break-after": ee() }],
			"break-before": [{ "break-before": ee() }],
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
			"object-position": [{ object: ne() }],
			overflow: [{ overflow: re() }],
			"overflow-x": [{ "overflow-x": re() }],
			"overflow-y": [{ "overflow-y": re() }],
			overscroll: [{ overscroll: y() }],
			"overscroll-x": [{ "overscroll-x": y() }],
			"overscroll-y": [{ "overscroll-y": y() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: x() }],
			"inset-x": [{ "inset-x": x() }],
			"inset-y": [{ "inset-y": x() }],
			start: [{
				"inset-s": x(),
				start: x()
			}],
			end: [{
				"inset-e": x(),
				end: x()
			}],
			"inset-bs": [{ "inset-bs": x() }],
			"inset-be": [{ "inset-be": x() }],
			top: [{ top: x() }],
			right: [{ right: x() }],
			bottom: [{ bottom: x() }],
			left: [{ left: x() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				ea,
				"auto",
				Q,
				Z
			] }],
			basis: [{ basis: [
				$i,
				"full",
				"auto",
				s,
				...b()
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
				X,
				$i,
				"auto",
				"initial",
				"none",
				Z
			] }],
			grow: [{ grow: [
				"",
				X,
				Q,
				Z
			] }],
			shrink: [{ shrink: [
				"",
				X,
				Q,
				Z
			] }],
			order: [{ order: [
				ea,
				"first",
				"last",
				"none",
				Q,
				Z
			] }],
			"grid-cols": [{ "grid-cols": ie() }],
			"col-start-end": [{ col: ae() }],
			"col-start": [{ "col-start": oe() }],
			"col-end": [{ "col-end": oe() }],
			"grid-rows": [{ "grid-rows": ie() }],
			"row-start-end": [{ row: ae() }],
			"row-start": [{ "row-start": oe() }],
			"row-end": [{ "row-end": oe() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": se() }],
			"auto-rows": [{ "auto-rows": se() }],
			gap: [{ gap: b() }],
			"gap-x": [{ "gap-x": b() }],
			"gap-y": [{ "gap-y": b() }],
			"justify-content": [{ justify: [...ce(), "normal"] }],
			"justify-items": [{ "justify-items": [...S(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...S()] }],
			"align-content": [{ content: ["normal", ...ce()] }],
			"align-items": [{ items: [...S(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...S(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": ce() }],
			"place-items": [{ "place-items": [...S(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...S()] }],
			p: [{ p: b() }],
			px: [{ px: b() }],
			py: [{ py: b() }],
			ps: [{ ps: b() }],
			pe: [{ pe: b() }],
			pbs: [{ pbs: b() }],
			pbe: [{ pbe: b() }],
			pt: [{ pt: b() }],
			pr: [{ pr: b() }],
			pb: [{ pb: b() }],
			pl: [{ pl: b() }],
			m: [{ m: C() }],
			mx: [{ mx: C() }],
			my: [{ my: C() }],
			ms: [{ ms: C() }],
			me: [{ me: C() }],
			mbs: [{ mbs: C() }],
			mbe: [{ mbe: C() }],
			mt: [{ mt: C() }],
			mr: [{ mr: C() }],
			mb: [{ mb: C() }],
			ml: [{ ml: C() }],
			"space-x": [{ "space-x": b() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": b() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: w() }],
			"inline-size": [{ inline: ["auto", ...le()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...le()] }],
			"max-inline-size": [{ "max-inline": ["none", ...le()] }],
			"block-size": [{ block: ["auto", ...ue()] }],
			"min-block-size": [{ "min-block": ["auto", ...ue()] }],
			"max-block-size": [{ "max-block": ["none", ...ue()] }],
			w: [{ w: [
				s,
				"screen",
				...w()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...w()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...w()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...w()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...w()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...w()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				_a,
				ua
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Ca,
				fa
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
				ta,
				Z
			] }],
			"font-family": [{ font: [
				va,
				pa,
				t
			] }],
			"font-features": [{ "font-features": [Z] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				Q,
				Z
			] }],
			"line-clamp": [{ "line-clamp": [
				X,
				"none",
				Q,
				da
			] }],
			leading: [{ leading: [a, ...b()] }],
			"list-image": [{ "list-image": [
				"none",
				Q,
				Z
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				Q,
				Z
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
			"text-decoration-style": [{ decoration: [...me(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				X,
				"from-font",
				"auto",
				Q,
				ua
			] }],
			"text-decoration-color": [{ decoration: T() }],
			"underline-offset": [{ "underline-offset": [
				X,
				"auto",
				Q,
				Z
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
			indent: [{ indent: b() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				Q,
				Z
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
				Q,
				Z
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
						ea,
						Q,
						Z
					],
					radial: [
						"",
						Q,
						Z
					],
					conic: [
						ea,
						Q,
						Z
					]
				},
				xa,
				ha
			] }],
			"bg-color": [{ bg: T() }],
			"gradient-from-pos": [{ from: E() }],
			"gradient-via-pos": [{ via: E() }],
			"gradient-to-pos": [{ to: E() }],
			"gradient-from": [{ from: T() }],
			"gradient-via": [{ via: T() }],
			"gradient-to": [{ to: T() }],
			rounded: [{ rounded: D() }],
			"rounded-s": [{ "rounded-s": D() }],
			"rounded-e": [{ "rounded-e": D() }],
			"rounded-t": [{ "rounded-t": D() }],
			"rounded-r": [{ "rounded-r": D() }],
			"rounded-b": [{ "rounded-b": D() }],
			"rounded-l": [{ "rounded-l": D() }],
			"rounded-ss": [{ "rounded-ss": D() }],
			"rounded-se": [{ "rounded-se": D() }],
			"rounded-ee": [{ "rounded-ee": D() }],
			"rounded-es": [{ "rounded-es": D() }],
			"rounded-tl": [{ "rounded-tl": D() }],
			"rounded-tr": [{ "rounded-tr": D() }],
			"rounded-br": [{ "rounded-br": D() }],
			"rounded-bl": [{ "rounded-bl": D() }],
			"border-w": [{ border: O() }],
			"border-w-x": [{ "border-x": O() }],
			"border-w-y": [{ "border-y": O() }],
			"border-w-s": [{ "border-s": O() }],
			"border-w-e": [{ "border-e": O() }],
			"border-w-bs": [{ "border-bs": O() }],
			"border-w-be": [{ "border-be": O() }],
			"border-w-t": [{ "border-t": O() }],
			"border-w-r": [{ "border-r": O() }],
			"border-w-b": [{ "border-b": O() }],
			"border-w-l": [{ "border-l": O() }],
			"divide-x": [{ "divide-x": O() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": O() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...me(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...me(),
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
				...me(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				X,
				Q,
				Z
			] }],
			"outline-w": [{ outline: [
				"",
				X,
				_a,
				ua
			] }],
			"outline-color": [{ outline: T() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Sa,
				ga
			] }],
			"shadow-color": [{ shadow: T() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Sa,
				ga
			] }],
			"inset-shadow-color": [{ "inset-shadow": T() }],
			"ring-w": [{ ring: O() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: T() }],
			"ring-offset-w": [{ "ring-offset": [X, ua] }],
			"ring-offset-color": [{ "ring-offset": T() }],
			"inset-ring-w": [{ "inset-ring": O() }],
			"inset-ring-color": [{ "inset-ring": T() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Sa,
				ga
			] }],
			"text-shadow-color": [{ "text-shadow": T() }],
			opacity: [{ opacity: [
				X,
				Q,
				Z
			] }],
			"mix-blend": [{ "mix-blend": [
				...he(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": he() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [X] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": k() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": k() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": T() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": T() }],
			"mask-image-t-from-pos": [{ "mask-t-from": k() }],
			"mask-image-t-to-pos": [{ "mask-t-to": k() }],
			"mask-image-t-from-color": [{ "mask-t-from": T() }],
			"mask-image-t-to-color": [{ "mask-t-to": T() }],
			"mask-image-r-from-pos": [{ "mask-r-from": k() }],
			"mask-image-r-to-pos": [{ "mask-r-to": k() }],
			"mask-image-r-from-color": [{ "mask-r-from": T() }],
			"mask-image-r-to-color": [{ "mask-r-to": T() }],
			"mask-image-b-from-pos": [{ "mask-b-from": k() }],
			"mask-image-b-to-pos": [{ "mask-b-to": k() }],
			"mask-image-b-from-color": [{ "mask-b-from": T() }],
			"mask-image-b-to-color": [{ "mask-b-to": T() }],
			"mask-image-l-from-pos": [{ "mask-l-from": k() }],
			"mask-image-l-to-pos": [{ "mask-l-to": k() }],
			"mask-image-l-from-color": [{ "mask-l-from": T() }],
			"mask-image-l-to-color": [{ "mask-l-to": T() }],
			"mask-image-x-from-pos": [{ "mask-x-from": k() }],
			"mask-image-x-to-pos": [{ "mask-x-to": k() }],
			"mask-image-x-from-color": [{ "mask-x-from": T() }],
			"mask-image-x-to-color": [{ "mask-x-to": T() }],
			"mask-image-y-from-pos": [{ "mask-y-from": k() }],
			"mask-image-y-to-pos": [{ "mask-y-to": k() }],
			"mask-image-y-from-color": [{ "mask-y-from": T() }],
			"mask-image-y-to-color": [{ "mask-y-to": T() }],
			"mask-image-radial": [{ "mask-radial": [Q, Z] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": k() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": k() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": T() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": T() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": te() }],
			"mask-image-conic-pos": [{ "mask-conic": [X] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": k() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": k() }],
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
				Q,
				Z
			] }],
			filter: [{ filter: [
				"",
				"none",
				Q,
				Z
			] }],
			blur: [{ blur: ge() }],
			brightness: [{ brightness: [
				X,
				Q,
				Z
			] }],
			contrast: [{ contrast: [
				X,
				Q,
				Z
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Sa,
				ga
			] }],
			"drop-shadow-color": [{ "drop-shadow": T() }],
			grayscale: [{ grayscale: [
				"",
				X,
				Q,
				Z
			] }],
			"hue-rotate": [{ "hue-rotate": [
				X,
				Q,
				Z
			] }],
			invert: [{ invert: [
				"",
				X,
				Q,
				Z
			] }],
			saturate: [{ saturate: [
				X,
				Q,
				Z
			] }],
			sepia: [{ sepia: [
				"",
				X,
				Q,
				Z
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Q,
				Z
			] }],
			"backdrop-blur": [{ "backdrop-blur": ge() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				X,
				Q,
				Z
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				X,
				Q,
				Z
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				X,
				Q,
				Z
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				X,
				Q,
				Z
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				X,
				Q,
				Z
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				X,
				Q,
				Z
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				X,
				Q,
				Z
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				X,
				Q,
				Z
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": b() }],
			"border-spacing-x": [{ "border-spacing-x": b() }],
			"border-spacing-y": [{ "border-spacing-y": b() }],
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
				Q,
				Z
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				X,
				"initial",
				Q,
				Z
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				Q,
				Z
			] }],
			delay: [{ delay: [
				X,
				Q,
				Z
			] }],
			animate: [{ animate: [
				"none",
				v,
				Q,
				Z
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				Q,
				Z
			] }],
			"perspective-origin": [{ "perspective-origin": ne() }],
			rotate: [{ rotate: _e() }],
			"rotate-x": [{ "rotate-x": _e() }],
			"rotate-y": [{ "rotate-y": _e() }],
			"rotate-z": [{ "rotate-z": _e() }],
			scale: [{ scale: ve() }],
			"scale-x": [{ "scale-x": ve() }],
			"scale-y": [{ "scale-y": ve() }],
			"scale-z": [{ "scale-z": ve() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: ye() }],
			"skew-x": [{ "skew-x": ye() }],
			"skew-y": [{ "skew-y": ye() }],
			transform: [{ transform: [
				Q,
				Z,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: ne() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: A() }],
			"translate-x": [{ "translate-x": A() }],
			"translate-y": [{ "translate-y": A() }],
			"translate-z": [{ "translate-z": A() }],
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
				Q,
				Z
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
			"scroll-m": [{ "scroll-m": b() }],
			"scroll-mx": [{ "scroll-mx": b() }],
			"scroll-my": [{ "scroll-my": b() }],
			"scroll-ms": [{ "scroll-ms": b() }],
			"scroll-me": [{ "scroll-me": b() }],
			"scroll-mbs": [{ "scroll-mbs": b() }],
			"scroll-mbe": [{ "scroll-mbe": b() }],
			"scroll-mt": [{ "scroll-mt": b() }],
			"scroll-mr": [{ "scroll-mr": b() }],
			"scroll-mb": [{ "scroll-mb": b() }],
			"scroll-ml": [{ "scroll-ml": b() }],
			"scroll-p": [{ "scroll-p": b() }],
			"scroll-px": [{ "scroll-px": b() }],
			"scroll-py": [{ "scroll-py": b() }],
			"scroll-ps": [{ "scroll-ps": b() }],
			"scroll-pe": [{ "scroll-pe": b() }],
			"scroll-pbs": [{ "scroll-pbs": b() }],
			"scroll-pbe": [{ "scroll-pbe": b() }],
			"scroll-pt": [{ "scroll-pt": b() }],
			"scroll-pr": [{ "scroll-pr": b() }],
			"scroll-pb": [{ "scroll-pb": b() }],
			"scroll-pl": [{ "scroll-pl": b() }],
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
				Q,
				Z
			] }],
			fill: [{ fill: ["none", ...T()] }],
			"stroke-w": [{ stroke: [
				X,
				_a,
				ua,
				da
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
}, Fa = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (Ia(e, "cacheSize", t), Ia(e, "prefix", n), Ia(e, "experimentalParseClassName", r), La(e.theme, a.theme), La(e.classGroups, a.classGroups), La(e.conflictingClassGroups, a.conflictingClassGroups), La(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Ia(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Ra(e.theme, i.theme), Ra(e.classGroups, i.classGroups), Ra(e.conflictingClassGroups, i.conflictingClassGroups), Ra(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), za(e, i, "orderSensitiveModifiers"), e), Ia = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, La = (e, t) => {
	if (t) for (let n in t) Ia(e, n, t[n]);
}, Ra = (e, t) => {
	if (t) for (let n in t) za(e, t, n);
}, za = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, Ba = (e, ...t) => typeof e == "function" ? Ui(Pa, e, ...t) : Ui(() => Fa(Pa(), e), ...t), Va = /* @__PURE__ */ Ui(Pa);
//#endregion
//#region src/lib/utils.ts
function Ha(...e) {
	return Va(Nr(e));
}
//#endregion
//#region node_modules/tailwind-variants/dist/chunk-LQJYWU4O.js
var Ua = /\s+/g, Wa = (e) => typeof e != "string" || !e ? e : e.replace(Ua, " ").trim(), Ga = (...e) => {
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
	return t.length > 0 ? Wa(t.join(" ")) : void 0;
}, Ka = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, $ = (e) => {
	if (!e || typeof e != "object") return !0;
	for (let t in e) return !1;
	return !0;
}, qa = (e, t) => {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let i = 0; i < n.length; i++) {
		let a = n[i];
		if (!r.includes(a) || e[a] !== t[a]) return !1;
	}
	return !0;
}, Ja = (e, t) => {
	for (let n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
		let r = t[n];
		n in e ? e[n] = Ga(e[n], r) : e[n] = r;
	}
	return e;
}, Ya = (e, t) => {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		Array.isArray(r) ? Ya(r, t) : r && t.push(r);
	}
}, Xa = (...e) => {
	let t = [];
	Ya(e, t);
	let n = [];
	for (let e = 0; e < t.length; e++) t[e] && n.push(t[e]);
	return n;
}, Za = (e, t) => {
	let n = {};
	for (let r in e) {
		let i = e[r];
		if (r in t) {
			let e = t[r];
			Array.isArray(i) || Array.isArray(e) ? n[r] = Xa(e, i) : typeof i == "object" && typeof e == "object" && i && e ? n[r] = Za(i, e) : n[r] = e + " " + i;
		} else n[r] = i;
	}
	for (let r in t) r in e || (n[r] = t[r]);
	return n;
}, Qa = {
	twMerge: !0,
	twMergeConfig: {}
};
function $a() {
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
var eo = $a(), to = (e) => {
	let t = (t, n) => {
		let { extend: r = null, slots: i = {}, variants: a = {}, compoundVariants: o = [], compoundSlots: s = [], defaultVariants: c = {} } = t, l = {
			...Qa,
			...n
		}, u = r?.base ? Ga(r.base, t?.base) : t?.base, d = r?.variants && !$(r.variants) ? Za(a, r.variants) : a, f = r?.defaultVariants && !$(r.defaultVariants) ? {
			...r.defaultVariants,
			...c
		} : c;
		!$(l.twMergeConfig) && !qa(l.twMergeConfig, eo.cachedTwMergeConfig) && (eo.didTwMergeConfigChange = !0, eo.cachedTwMergeConfig = l.twMergeConfig);
		let p = $(r?.slots), m = $(i) ? {} : {
			base: Ga(t?.base, p && r?.base),
			...i
		}, h = p ? m : Ja({ ...r?.slots }, $(m) ? { base: t?.base } : m), g = $(r?.compoundVariants) ? o : Xa(r?.compoundVariants, o), _ = (t) => {
			if ($(d) && $(i) && p) return e(u, t?.class, t?.className)(l);
			if (g && !Array.isArray(g)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof g}`);
			if (s && !Array.isArray(s)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
			let n = (e, n = d, r = null, i = null) => {
				let a = n[e];
				if (!a || $(a)) return null;
				let o = i?.[e] ?? t?.[e];
				if (o === null) return null;
				let s = Ka(o);
				if (typeof s == "object") return null;
				let c = f?.[e];
				return a[(s ?? Ka(c)) || "false"];
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
					if (!$(o)) {
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
			if (!$(i) || !p) {
				let t = {};
				if (typeof h == "object" && !$(h)) {
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
		createTV: (e) => (n, r) => t(n, r ? Za(e, r) : e)
	};
}, no = (e) => $(e) ? Va : Ba({
	...e,
	extend: {
		theme: e.theme,
		classGroups: e.classGroups,
		conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
		conflictingClassGroups: e.conflictingClassGroups,
		...e.extend
	}
}), ro = (e, t) => {
	let n = Ga(e);
	return !n || !(t?.twMerge ?? !0) ? n : ((!eo.cachedTwMerge || eo.didTwMergeConfigChange) && (eo.didTwMergeConfigChange = !1, eo.cachedTwMerge = no(eo.cachedTwMergeConfig)), eo.cachedTwMerge(n) || void 0);
}, { createTV: io, tv: ao } = to((...e) => (t) => ro(e, t)), oo = ao({
	base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 active:not-aria-[haspopup]:translate-y-px aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
			destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
			lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-9",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
			"icon-lg": "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), so = /* @__PURE__ */ yr("<a><!></a>"), co = /* @__PURE__ */ yr("<button><!></button>");
function lo(e, t) {
	Re(t, !0);
	let n = fi(t, "variant", 3, "default"), r = fi(t, "size", 3, "default"), i = fi(t, "ref", 15, null), a = fi(t, "href", 3, void 0), o = fi(t, "type", 3, "button"), s = /* @__PURE__ */ di(t, [
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
	var c = xr(), l = en(c), u = (e) => {
		var o = so();
		ii(o, (e) => ({
			"data-slot": "button",
			class: e,
			href: t.disabled ? void 0 : a(),
			"aria-disabled": t.disabled,
			role: t.disabled ? "link" : void 0,
			tabindex: t.disabled ? -1 : void 0,
			...s
		}), [() => Ha(oo({
			variant: n(),
			size: r()
		}), t.class)]), Ar($t(o), () => t.children ?? ee), Oe(o), li(o, (e) => i(e), () => i()), Sr(e, o);
	}, d = (e) => {
		var a = co();
		ii(a, (e) => ({
			"data-slot": "button",
			class: e,
			type: o(),
			disabled: t.disabled,
			...s
		}), [() => Ha(oo({
			variant: n(),
			size: r()
		}), t.class)]), Ar($t(a), () => t.children ?? ee), Oe(a), li(a, (e) => i(e), () => i()), Sr(e, a);
	};
	kr(l, (e) => {
		a() ? e(u) : e(d, -1);
	}), Sr(e, c), ze();
}
//#endregion
//#region src/Counter.svelte
var uo = /* @__PURE__ */ yr("<div class=\"svelte-counter\"><p>Svelte counter: <strong> </strong></p> <button>-</button> <button>+</button> <button class=\"px-4 py-2 bg-blue-500 text-white rounded\">Click me</button> <!></div>");
function fo(e, t) {
	Re(t, !0);
	let n = /* @__PURE__ */ It(0);
	function r() {
		Bt(n);
	}
	function i() {
		Lt(n, 0);
	}
	var a = {
		increment: r,
		reset: i
	}, o = uo(), s = $t(o), c = tn($t(s)), l = $t(c, !0);
	Oe(c), Oe(s);
	var u = tn(s, 2), d = tn(u, 2);
	return lo(tn(d, 4), {
		children: (e, t) => {
			ke(), Sr(e, br("shadcn button"));
		},
		$$slots: { default: !0 }
	}), Oe(o), yn(() => Cr(l, J(n))), dr("click", u, () => Bt(n, -1)), dr("click", d, () => Bt(n)), Sr(e, o), ze(a);
}
fr(["click"]);
//#endregion
//#region src/mount.ts
var po = () => {
	let e = document.createElement("div");
	e.id = "svelte-container";
	let t = wr(fo, { target: e }), n = document.createElement("button");
	n.textContent = "Add +5", n.addEventListener("click", function() {
		t.increment(), t.increment(), t.increment(), t.increment(), t.increment();
	}), document.body.appendChild(e), document.body.appendChild(n);
}, mo = async () => {
	o(), s(), n(), r(), po();
};
//#endregion
export { mo as init };
