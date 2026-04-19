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
	let e = new URL("dist/index.css", window.BASE_URL), t = document.createElement("link");
	t.rel = "stylesheet", t.type = "text/css", t.href = e.toString(), document.head.appendChild(t);
}, r = (e) => {
	window.CHANNEL.js = e;
	let t = document.querySelector("#cs-jstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channeljs) return;
	let n = document.createElement("script");
	n.id = "chanjs", n.type = "text/javascript", n.textContent = e, document.body.append(n);
}, i = (e) => {
	let t = document.querySelector("#chanjs");
	if (!t) {
		r(e);
		return;
	}
	t.textContent !== e && (t.remove(), r(e));
}, a = () => {
	window.Callbacks.channelCSSJS = function({ css: e, js: n }) {
		e && t(e), n && i(n);
	};
}, o = () => {
	let e = new URL("dist/favicon.ico", window.BASE_URL), t = document.createElement("link");
	t.href = e.toString(), t.type = "image/x-icon", t.rel = "shortcut icon", document.head.append(t);
}, s = Array.isArray, c = Array.prototype.indexOf, l = Array.prototype.includes, u = Array.from, d = Object.defineProperty, f = Object.getOwnPropertyDescriptor, p = Object.prototype, m = Array.prototype, h = Object.getPrototypeOf, ee = Object.isExtensible, te = () => {};
function ne(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function re() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var g = 1024, _ = 2048, v = 4096, ie = 8192, ae = 16384, oe = 32768, se = 1 << 25, ce = 65536, le = 1 << 19, ue = 1 << 20, de = 65536, fe = 1 << 21, pe = 1 << 22, me = 1 << 23, he = Symbol("$state"), y = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
globalThis.document?.contentType;
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function ge() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function _e() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ve() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ye() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function be() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function xe() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/constants.js
var Se = {}, b = Symbol();
function Ce() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function we(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Te() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var x = !1, S;
function C(e) {
	if (e === null) throw we(), Se;
	return S = e;
}
function Ee() {
	return C(/* @__PURE__ */ I(S));
}
function De(e) {
	if (x) {
		if (/* @__PURE__ */ I(S) !== null) throw we(), Se;
		S = e;
	}
}
function Oe(e = 1) {
	if (x) {
		for (var t = e, n = S; t--;) n = /* @__PURE__ */ I(n);
		S = n;
	}
}
function ke(e = !0) {
	for (var t = 0, n = S;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ I(n);
		e && n.remove(), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Ae(e) {
	return e === this.v;
}
function je(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Me(e) {
	return !je(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var Ne = !1, Pe = !1, w = null;
function Fe(e) {
	w = e;
}
function Ie(e, t = !1, n) {
	w = {
		p: w,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: W,
		l: Pe && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function Le(e) {
	var t = w, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) qt(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, w = t.p, e ?? {};
}
function Re() {
	return !Pe || w !== null && w.l === null;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var T = [];
function ze() {
	var e = T;
	T = [], ne(e);
}
function Be(e) {
	if (T.length === 0 && !Je) {
		var t = T;
		queueMicrotask(() => {
			t === T && ze();
		});
	}
	T.push(e);
}
function Ve(e) {
	var t = W;
	if (t === null) return V.f |= me, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	E(e, t);
}
function E(e, t) {
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
var He = ~(_ | v | g);
function D(e, t) {
	e.f = e.f & He | t;
}
function Ue(e) {
	e.f & 512 || e.deps === null ? D(e, g) : D(e, v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function We(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= de, We(t.deps));
}
function Ge(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), We(e.deps), D(e, g);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Ke = !1, O = /* @__PURE__ */ new Set(), k = null, A = null, qe = null, Je = !1, Ye = !1, j = null, Xe = null, Ze = 0, Qe = 1, $e = class e {
	id = Qe++;
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
			for (var r of n.d) D(r, _), t(r);
			for (r of n.m) D(r, v), t(r);
		}
		this.#d.add(e);
	}
	#g() {
		if (Ze++ > 1e3 && (O.delete(this), et()), !this.#m()) {
			for (let e of this.#c) this.#l.delete(e), D(e, _), this.schedule(e);
			for (let e of this.#l) D(e, v), this.schedule(e);
		}
		let t = this.#o;
		this.#o = [], this.apply();
		var n = j = [], r = [], i = Xe = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw ot(e), t;
		}
		if (k = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (j = null, Xe = null, this.#m() || this.#h()) {
			this.#v(r), this.#v(n);
			for (let [e, t] of this.#u) at(e, t);
		} else {
			this.#r.size === 0 && O.delete(this), this.#c.clear(), this.#l.clear();
			for (let e of this.#e) e(this);
			this.#e.clear(), tt(r), tt(n), this.#a?.resolve();
		}
		var o = k;
		if (this.#o.length > 0) {
			let e = o ??= this;
			e.#o.push(...this.#o.filter((t) => !e.#o.includes(t)));
		}
		o !== null && (O.add(o), o.#g()), Ne && !O.has(this) && this.#y();
	}
	#_(e, t, n) {
		e.f ^= g;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#u.has(r)) && r.fn !== null) {
				a ? r.f ^= g : i & 4 ? t.push(r) : Ne && i & 16777224 ? n.push(r) : gn(r) && (i & 16 && this.#l.add(r), Q(r));
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
		for (var t = 0; t < e.length; t += 1) Ge(e[t], this.#c, this.#l);
	}
	capture(e, t, n = !1) {
		e.v !== b && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), A?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		k = this;
	}
	deactivate() {
		k = null, A = null;
	}
	flush() {
		try {
			Ye = !0, k = this, this.#g();
		} finally {
			Ze = 0, qe = null, j = null, Xe = null, Ye = !1, k = null, A = null, N.clear();
		}
	}
	discard() {
		for (let e of this.#t) e(this);
		this.#t.clear(), this.#n.clear(), O.delete(this);
	}
	register_created_effect(e) {
		this.#s.push(e);
	}
	#y() {
		for (let l of O) {
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
				for (var o of t) nt(o, r, i, a);
				a = /* @__PURE__ */ new Map();
				var s = [...l.current.keys()].filter((e) => this.current.has(e) ? this.current.get(e)[0] !== e : !0);
				for (let e of this.#s) !(e.f & 155648) && rt(e, s, a) && (e.f & 4194320 ? (D(e, _), l.schedule(e)) : l.#c.add(e));
				if (l.#o.length > 0) {
					l.apply();
					for (var c of l.#o) l.#_(c, [], []);
					l.#o = [];
				}
				l.deactivate();
			}
		}
		for (let e of O) e.#p.has(this) && (e.#p.delete(this), e.#p.size === 0 && !e.#m() && (e.activate(), e.#g()));
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
		this.#f || n || (this.#f = !0, Be(() => {
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
		return (this.#a ??= re()).promise;
	}
	static ensure() {
		if (k === null) {
			let t = k = new e();
			Ye || (O.add(k), Je || Be(() => {
				k === t && t.flush();
			}));
		}
		return k;
	}
	apply() {
		if (!Ne || !this.is_fork && O.size === 1) {
			A = null;
			return;
		}
		A = /* @__PURE__ */ new Map();
		for (let [e, [t]] of this.current) A.set(e, t);
		for (let n of O) if (!(n === this || n.is_fork)) {
			var e = !1, t = !1;
			if (n.id < this.id) for (let [r, [, i]] of n.current) i || (e ||= this.current.has(r), t ||= !this.current.has(r));
			if (e && t) this.#p.add(n);
			else for (let [e, t] of n.previous) A.has(e) || A.set(e, t);
		}
	}
	schedule(e) {
		if (qe = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (j !== null && t === W && (Ne || (V === null || !(V.f & 2)) && !Ke)) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= g;
			}
		}
		this.#o.push(t);
	}
};
function et() {
	try {
		_e();
	} catch (e) {
		E(e, qe);
	}
}
var M = null;
function tt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && gn(r) && (M = /* @__PURE__ */ new Set(), Q(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && rn(r), M?.size > 0)) {
				N.clear();
				for (let e of M) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) M.has(n) && (M.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Q(n);
					}
				}
				M.clear();
			}
		}
		M = null;
	}
}
function nt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? nt(i, t, n, r) : e & 4194320 && !(e & 2048) && rt(i, t, r) && (D(i, _), it(i));
	}
}
function rt(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (l.call(t, r)) return !0;
		if (r.f & 2 && rt(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function it(e) {
	k.schedule(e);
}
function at(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), D(e, g);
		for (var n = e.first; n !== null;) at(n, t), n = n.next;
	}
}
function ot(e) {
	D(e, g);
	for (var t = e.first; t !== null;) ot(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function st(e) {
	let t = 0, n = Tt(0), r;
	return () => {
		Gt() && ($(n), Xt(() => (t === 0 && (r = Cn(() => e(() => kt(n)))), t += 1, () => {
			Be(() => {
				--t, t === 0 && (r?.(), r = void 0, kt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var ct = ce | le;
function lt(e, t, n, r) {
	new ut(e, t, n, r);
}
var ut = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = x ? S : null;
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
	#h = st(() => (this.#m = Tt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = W;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = W.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = Qt(() => {
			if (x) {
				let e = this.#t;
				Ee();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#v() : this.#g();
			} else this.#y();
		}, ct), x && (this.#e = S);
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
		e && (this.is_pending = !0, this.#o = R(() => e(this.#e)), Be(() => {
			var e = this.#c = document.createDocumentFragment(), t = Lt();
			e.append(t), this.#a = this.#x(() => R(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, an(this.#o, () => {
				this.#o = null;
			}), this.#b(k));
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = R(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				sn(this.#a, e);
				let t = this.#n.pending;
				this.#o = R(() => t(this.#e));
			} else this.#b(k);
		} catch (e) {
			this.error(e);
		}
	}
	#b(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Ge(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(e) {
		var t = W, n = V, r = w;
		G(this.#i), U(this.#i), Fe(this.#i.ctx);
		try {
			return $e.ensure(), e();
		} catch (e) {
			return Ve(e), null;
		} finally {
			G(t), U(n), Fe(r);
		}
	}
	#S(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#b(t), this.#o && an(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Be(() => {
			this.#d = !1, this.#m && Et(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), $(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		k?.is_fork ? (this.#a && k.skip_effect(this.#a), this.#o && k.skip_effect(this.#o), this.#s && k.skip_effect(this.#s), k.on_fork_commit(() => {
			this.#C(e);
		})) : this.#C(e);
	}
	#C(e) {
		this.#a &&= (z(this.#a), null), this.#o &&= (z(this.#o), null), this.#s &&= (z(this.#s), null), x && (C(this.#t), Oe(), C(ke()));
		var t = this.#n.onerror;
		let n = this.#n.failed;
		var r = !1, i = !1;
		let a = () => {
			if (r) {
				Te();
				return;
			}
			r = !0, i && xe(), this.#s !== null && an(this.#s, () => {
				this.#s = null;
			}), this.#x(() => {
				this.#y();
			});
		}, o = (e) => {
			try {
				i = !0, t?.(e, a), i = !1;
			} catch (e) {
				E(e, this.#i && this.#i.parent);
			}
			n && (this.#s = this.#x(() => {
				try {
					return R(() => {
						var t = W;
						t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
					});
				} catch (e) {
					return E(e, this.#i.parent), null;
				}
			}));
		};
		Be(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				E(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => E(e, this.#i && this.#i.parent)) : o(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function dt(e, t, n, r) {
	let i = Re() ? ht : _t;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = W, s = ft(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		s();
		try {
			r(e);
		} catch (e) {
			o.f & 16384 || E(e, o);
		}
		pt();
	}
	if (n.length === 0) {
		c.then(() => l(t.map(i)));
		return;
	}
	var u = mt();
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ gt(e))).then((e) => l([...t.map(i), ...e])).catch((e) => E(e, o)).finally(() => u());
	}
	c ? c.then(() => {
		s(), d(), pt();
	}) : d();
}
function ft() {
	var e = W, t = V, n = w, r = k;
	return function(i = !0) {
		G(e), U(t), Fe(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function pt(e = !0) {
	G(null), U(null), Fe(null), e && k?.deactivate();
}
function mt() {
	var e = W, t = e.b, n = k, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
		t.update_pending_count(-1, n), n.decrement(r, e, i);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function ht(e) {
	var t = 2 | _;
	return W !== null && (W.f |= le), {
		ctx: w,
		deps: null,
		effects: null,
		equals: Ae,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: b,
		wv: 0,
		parent: W,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function gt(e, t, n) {
	let r = W;
	r === null && ge();
	var i = void 0, a = Tt(b), o = !V, s = /* @__PURE__ */ new Map();
	return Yt(() => {
		var t = W, n = re();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, n.reject).finally(pt);
		} catch (e) {
			n.reject(e), pt();
		}
		var c = k;
		if (o) {
			if (t.f & 32768) var l = mt();
			if (r.b.is_rendered()) s.get(c)?.reject(y), s.delete(c);
			else {
				for (let e of s.values()) e.reject(y);
				s.clear();
			}
			s.set(c, n);
		}
		let u = (e, n = void 0) => {
			if (l && l(n === y), !(n === y || t.f & 16384)) {
				if (c.activate(), n) a.f |= me, Et(a, n);
				else {
					a.f & 8388608 && (a.f ^= me), Et(a, e);
					for (let [e, t] of s) {
						if (s.delete(e), e === c) break;
						t.reject(y);
					}
				}
				c.deactivate();
			}
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), Kt(() => {
		for (let e of s.values()) e.reject(y);
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
function _t(e) {
	let t = /* @__PURE__ */ ht(e);
	return t.equals = Me, t;
}
function vt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) z(t[n]);
	}
}
function yt(e) {
	var t, n = W, r = e.parent;
	if (!B && r !== null && r.f & 24576) return Ce(), e.v;
	G(r);
	try {
		e.f &= ~de, vt(e), t = vn(e);
	} finally {
		G(n);
	}
	return t;
}
function bt(e) {
	var t = yt(e);
	if (!e.equals(t) && (e.wv = hn(), (!k?.is_fork || e.deps === null) && (k === null ? e.v = t : k.capture(e, t, !0), e.deps === null))) {
		D(e, g);
		return;
	}
	B || (A === null ? Ue(e) : (Gt() || k?.is_fork) && A.set(e, t));
}
function xt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(y), t.teardown = te, t.ac = null, bn(t, 0), en(t));
}
function St(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && Q(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Ct = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Map(), wt = !1;
function Tt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Ae,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function P(e, t) {
	let n = Tt(e, t);
	return dn(n), n;
}
function F(e, t, n = !1) {
	return V !== null && (!H || V.f & 131072) && Re() && V.f & 4325394 && (K === null || !l.call(K, e)) && be(), Et(e, n ? jt(t) : t, Xe);
}
function Et(e, t, n = null) {
	if (!e.equals(t)) {
		N.set(e, B ? t : e.v);
		var r = $e.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && yt(t), A === null && Ue(t);
		}
		e.wv = hn(), At(e, _, n), Re() && W !== null && W.f & 1024 && !(W.f & 96) && (Y === null ? fn([e]) : Y.push(e)), !r.is_fork && Ct.size > 0 && !wt && Dt();
	}
	return t;
}
function Dt() {
	wt = !1;
	for (let e of Ct) e.f & 1024 && D(e, v), gn(e) && Q(e);
	Ct.clear();
}
function Ot(e, t = 1) {
	var n = $(e), r = t === 1 ? n++ : n--;
	return F(e, n), r;
}
function kt(e) {
	F(e, e.v + 1);
}
function At(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Re(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === W)) {
			var l = (c & _) === 0;
			if (l && D(s, t), c & 2) {
				var u = s;
				A?.delete(u), c & 65536 || (c & 512 && (s.f |= de), At(u, v, n));
			} else if (l) {
				var d = s;
				c & 16 && M !== null && M.add(d), n === null ? it(d) : n.push(d);
			}
		}
	}
}
function jt(e) {
	if (typeof e != "object" || !e || he in e) return e;
	let t = h(e);
	if (t !== p && t !== m) return e;
	var n = /* @__PURE__ */ new Map(), r = s(e), i = /* @__PURE__ */ P(0), a = null, o = Z, c = (e) => {
		if (Z === o) return e();
		var t = V, n = Z;
		U(null), mn(o);
		var r = e();
		return U(t), mn(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ P(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && ve();
			var i = n.get(t);
			return i === void 0 ? c(() => {
				var e = /* @__PURE__ */ P(r.value, a);
				return n.set(t, e), e;
			}) : F(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = c(() => /* @__PURE__ */ P(b, a));
					n.set(t, e), kt(i);
				}
			} else F(r, b), kt(i);
			return !0;
		},
		get(t, r, i) {
			if (r === he) return e;
			var o = n.get(r), s = r in t;
			if (o === void 0 && (!s || f(t, r)?.writable) && (o = c(() => /* @__PURE__ */ P(jt(s ? t[r] : b), a)), n.set(r, o)), o !== void 0) {
				var l = $(o);
				return l === b ? void 0 : l;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = $(i));
			} else if (r === void 0) {
				var a = n.get(t), o = a?.v;
				if (a !== void 0 && o !== b) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === he) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== b || Reflect.has(e, t);
			return (r !== void 0 || W !== null && (!i || f(e, t)?.writable)) && (r === void 0 && (r = c(() => /* @__PURE__ */ P(i ? jt(e[t]) : b, a)), n.set(t, r)), $(r) === b) ? !1 : i;
		},
		set(e, t, o, s) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var p = n.get(d + "");
				p === void 0 ? d in e && (p = c(() => /* @__PURE__ */ P(b, a)), n.set(d + "", p)) : F(p, b);
			}
			if (l === void 0) (!u || f(e, t)?.writable) && (l = c(() => /* @__PURE__ */ P(void 0, a)), F(l, jt(o)), n.set(t, l));
			else {
				u = l.v !== b;
				var m = c(() => jt(o));
				F(l, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, o), !u) {
				if (r && typeof t == "string") {
					var ee = n.get("length"), te = Number(t);
					Number.isInteger(te) && te >= ee.v && F(ee, te + 1);
				}
				kt(i);
			}
			return !0;
		},
		ownKeys(e) {
			$(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== b;
			});
			for (var [r, a] of n) a.v !== b && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			ye();
		}
	});
}
var Mt, Nt, Pt, Ft;
function It() {
	if (Mt === void 0) {
		Mt = window, Nt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Pt = f(t, "firstChild").get, Ft = f(t, "nextSibling").get, ee(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ee(n) && (n.__t = void 0);
	}
}
function Lt(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Rt(e) {
	return Pt.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function I(e) {
	return Ft.call(e);
}
function zt(e, t) {
	if (!x) return /* @__PURE__ */ Rt(e);
	var n = /* @__PURE__ */ Rt(S);
	if (n === null) n = S.appendChild(Lt());
	else if (t && n.nodeType !== 3) {
		var r = Lt();
		return n?.before(r), C(r), r;
	}
	return t && Ht(n), C(n), n;
}
function Bt(e, t = 1, n = !1) {
	let r = x ? S : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ I(r);
	if (!x) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Lt();
			return r === null ? i?.after(a) : r.before(a), C(a), a;
		}
		Ht(r);
	}
	return C(r), r;
}
function Vt(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function Ht(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Ut(e) {
	var t = V, n = W;
	U(null), G(null);
	try {
		return e();
	} finally {
		U(t), G(n);
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Wt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function L(e, t) {
	var n = W;
	n !== null && n.f & 8192 && (e |= ie);
	var r = {
		ctx: w,
		deps: null,
		nodes: null,
		f: e | _ | 512,
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
	if (e & 4) j === null ? $e.ensure().schedule(r) : j.push(r);
	else if (t !== null) {
		try {
			Q(r);
		} catch (e) {
			throw z(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ce));
	}
	if (i !== null && (i.parent = n, n !== null && Wt(i, n), V !== null && V.f & 2 && !(e & 64))) {
		var a = V;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Gt() {
	return V !== null && !H;
}
function Kt(e) {
	let t = L(8, null);
	return D(t, g), t.teardown = e, t;
}
function qt(e) {
	return L(4 | ue, e);
}
function Jt(e) {
	$e.ensure();
	let t = L(64 | le, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? an(t, () => {
			z(t), n(void 0);
		}) : (z(t), n(void 0));
	});
}
function Yt(e) {
	return L(pe | le, e);
}
function Xt(e, t = 0) {
	return L(8 | t, e);
}
function Zt(e, t = [], n = [], r = []) {
	dt(r, t, n, (t) => {
		L(8, () => e(...t.map($)));
	});
}
function Qt(e, t = 0) {
	return L(16 | t, e);
}
function R(e) {
	return L(32 | le, e);
}
function $t(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = B, n = V;
		un(!0), U(null);
		try {
			t.call(null);
		} finally {
			un(e), U(n);
		}
	}
}
function en(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Ut(() => {
			e.abort(y);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : z(n, t), n = r;
	}
}
function tn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || z(t), t = n;
	}
}
function z(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (nn(e.nodes.start, e.nodes.end), n = !0), D(e, se), en(e, t && !n), bn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	$t(e), e.f ^= se, e.f |= ae;
	var i = e.parent;
	i !== null && i.first !== null && rn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function nn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ I(e);
		e.remove(), e = n;
	}
}
function rn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function an(e, t, n = !0) {
	var r = [];
	on(e, r, !0);
	var i = () => {
		n && z(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function on(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ie;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				on(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function sn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ I(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var cn = null, ln = !1, B = !1;
function un(e) {
	B = e;
}
var V = null, H = !1;
function U(e) {
	V = e;
}
var W = null;
function G(e) {
	W = e;
}
var K = null;
function dn(e) {
	V !== null && (!Ne || V.f & 2) && (K === null ? K = [e] : K.push(e));
}
var q = null, J = 0, Y = null;
function fn(e) {
	Y = e;
}
var pn = 1, X = 0, Z = X;
function mn(e) {
	Z = e;
}
function hn() {
	return ++pn;
}
function gn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~de), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (gn(a) && bt(a), a.wv > e.wv) return !0;
		}
		t & 512 && A === null && D(e, g);
	}
	return !1;
}
function _n(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!Ne && K !== null && l.call(K, e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? _n(a, t, !1) : t === a && (n ? D(a, _) : a.f & 1024 && D(a, v), it(a));
	}
}
function vn(e) {
	var t = q, n = J, r = Y, i = V, a = K, o = w, s = H, c = Z, l = e.f;
	q = null, J = 0, Y = null, V = l & 96 ? null : e, K = null, Fe(e.ctx), H = !1, Z = ++X, e.ac !== null && (Ut(() => {
		e.ac.abort(y);
	}), e.ac = null);
	try {
		e.f |= fe;
		var u = e.fn, d = u();
		e.f |= oe;
		var f = e.deps, p = k?.is_fork;
		if (q !== null) {
			var m;
			if (p || bn(e, J), f !== null && J > 0) for (f.length = J + q.length, m = 0; m < q.length; m++) f[J + m] = q[m];
			else e.deps = f = q;
			if (Gt() && e.f & 512) for (m = J; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && J < f.length && (bn(e, J), f.length = J);
		if (Re() && Y !== null && !H && f !== null && !(e.f & 6146)) for (m = 0; m < Y.length; m++) _n(Y[m], e);
		if (i !== null && i !== e) {
			if (X++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = X;
			if (t !== null) for (let e of t) e.rv = X;
			Y !== null && (r === null ? r = Y : r.push(...Y));
		}
		return e.f & 8388608 && (e.f ^= me), d;
	} catch (e) {
		return Ve(e);
	} finally {
		e.f ^= fe, q = t, J = n, Y = r, V = i, K = a, Fe(o), H = s, Z = c;
	}
}
function yn(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = c.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (q === null || !l.call(q, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~de), a.v !== b && Ue(a), xt(a), bn(a, 0);
	}
}
function bn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) yn(e, n[r]);
}
function Q(e) {
	var t = e.f;
	if (!(t & 16384)) {
		D(e, g);
		var n = W, r = ln;
		W = e, ln = !0;
		try {
			t & 16777232 ? tn(e) : en(e), $t(e);
			var i = vn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = pn;
		} finally {
			ln = r, W = n;
		}
	}
}
function $(e) {
	var t = (e.f & 2) != 0;
	if (cn?.add(e), V !== null && !H && !(W !== null && W.f & 16384) && (K === null || !l.call(K, e))) {
		var n = V.deps;
		if (V.f & 2097152) e.rv < X && (e.rv = X, q === null && n !== null && n[J] === e ? J++ : q === null ? q = [e] : q.push(e));
		else {
			(V.deps ??= []).push(e);
			var r = e.reactions;
			r === null ? e.reactions = [V] : l.call(r, V) || r.push(V);
		}
	}
	if (B && N.has(e)) return N.get(e);
	if (t) {
		var i = e;
		if (B) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Sn(i)) && (a = yt(i)), N.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !H && V !== null && (ln || (V.f & 512) != 0), s = (i.f & oe) === 0;
		gn(i) && (o && (i.f |= 512), bt(i)), o && !s && (St(i), xn(i));
	}
	if (A?.has(e)) return A.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function xn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (St(t), xn(t));
}
function Sn(e) {
	if (e.v === b) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (N.has(t) || t.f & 2 && Sn(t)) return !0;
	return !1;
}
function Cn(e) {
	var t = H;
	try {
		return H = !0, e();
	} finally {
		H = t;
	}
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var wn = ["touchstart", "touchmove"];
function Tn(e) {
	return wn.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var En = Symbol("events"), Dn = /* @__PURE__ */ new Set(), On = /* @__PURE__ */ new Set();
function kn(e, t, n) {
	(t[En] ??= {})[e] = n;
}
function An(e) {
	for (var t = 0; t < e.length; t++) Dn.add(e[t]);
	for (var n of On) n(e);
}
var jn = null;
function Mn(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	jn = e;
	var o = 0, s = jn === e && e[En];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[En] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		d(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = V, f = W;
		U(null), G(null);
		try {
			for (var p, m = []; a !== null;) {
				var h = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var ee = a[En]?.[r];
					ee != null && (!a.disabled || e.target === a) && ee.call(a, e);
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
			e[En] = t, delete e.currentTarget, U(u), G(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Nn = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Pn(e) {
	return Nn?.createHTML(e) ?? e;
}
function Fn(e) {
	var t = Vt("template");
	return t.innerHTML = Pn(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function In(e, t) {
	var n = W;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ln(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (x) return In(S, null), S;
		i === void 0 && (i = Fn(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Rt(i)));
		var t = r || Nt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Rt(t), s = t.lastChild;
			In(o, s);
		} else In(t, t);
		return t;
	};
}
function Rn(e, t) {
	if (x) {
		var n = W;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = S), Ee();
		return;
	}
	e !== null && e.before(t);
}
function zn(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function Bn(e, t) {
	return Hn(e, t);
}
var Vn = /* @__PURE__ */ new Map();
function Hn(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	It();
	var c = void 0, l = Jt(() => {
		var o = n ?? t.appendChild(Lt());
		lt(o, { pending: () => {} }, (t) => {
			Ie({});
			var n = w;
			if (a && (n.c = a), i && (r.$$events = i), x && In(t, null), c = e(t, r) || {}, x && (W.nodes.end = S, S === null || S.nodeType !== 8 || S.data !== "]")) throw we(), Se;
			Le();
		}, s);
		var l = /* @__PURE__ */ new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!l.has(r)) {
					l.add(r);
					var i = Tn(r);
					for (let e of [t, document]) {
						var a = Vn.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Vn.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Mn, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return d(u(Dn)), On.add(d), () => {
			for (var e of l) for (let n of [t, document]) {
				var r = Vn.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Mn), r.delete(e), r.size === 0 && Vn.delete(n)) : r.set(e, i);
			}
			On.delete(d), o !== n && o.parentNode?.removeChild(o);
		};
	});
	return Un.set(c, l), c;
}
var Un = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region src/Counter.svelte
var Wn = /* @__PURE__ */ Ln("<div class=\"svelte-counter\"><p>Svelte counter: <strong> </strong></p> <button>-</button> <button>+</button> <button class=\"px-4 py-2 bg-blue-500 text-white rounded\">Click me</button></div>");
function Gn(e, t) {
	Ie(t, !0);
	let n = /* @__PURE__ */ P(0);
	function r() {
		Ot(n);
	}
	function i() {
		F(n, 0);
	}
	var a = {
		increment: r,
		reset: i
	}, o = Wn(), s = zt(o), c = Bt(zt(s)), l = zt(c, !0);
	De(c), De(s);
	var u = Bt(s, 2), d = Bt(u, 2);
	return Oe(2), De(o), Zt(() => zn(l, $(n))), kn("click", u, () => Ot(n, -1)), kn("click", d, () => Ot(n)), Rn(e, o), Le(a);
}
An(["click"]);
//#endregion
//#region src/mount.ts
var Kn = () => {
	let e = document.createElement("div");
	e.id = "svelte-container";
	let t = Bn(Gn, { target: e }), n = document.createElement("button");
	n.textContent = "Add +5", n.addEventListener("click", function() {
		t.increment(), t.increment(), t.increment(), t.increment(), t.increment();
	}), document.body.appendChild(e), document.body.appendChild(n);
}, qn = async () => {
	a(), o(), n(), Kn();
};
//#endregion
export { qn as init };
