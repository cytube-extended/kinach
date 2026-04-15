//#region src/appVersionForm.ts
var e = () => {
	let e = "main", t = localStorage.getItem("appVersion"), n = typeof t == "string" && t !== "" ? t : e, r = document.getElementById("us-scriptcontrol");
	if (!r) {
		console.warn("failed to construct app version form: no container found to attach to");
		return;
	}
	let i = document.createElement("div"), a = document.createElement("label");
	a.setAttribute("for", "us-app-version-input"), a.className = "control-label", a.textContent = "Версия скриптов", a.title = "Используемая версия скриптов";
	let o = document.createElement("input");
	o.className = "form-control", o.id = "us-app-version-input", o.type = "text", o.value = n, o.placeholder = e;
	let s = document.createElement("button");
	s.className = "btn btn-sm btn-info", s.textContent = "Применить & Обновить", s.addEventListener("click", () => {
		localStorage.setItem("appVersion", o.value.trim()), location.reload();
	}), i.appendChild(a), i.appendChild(o), i.appendChild(s), r.appendChild(i);
}, t = (e) => {
	window.CHANNEL.css = e;
	let t = document.querySelector("#cs-csstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channelcss) return;
	let n = document.createElement("style");
	n.id = "chancss", n.textContent = e, document.head.append(n);
}, n = (e) => {
	let n = document.querySelector("#chancss");
	if (!n) {
		t(e);
		return;
	}
	n.textContent !== e && (n.remove(), t(e));
}, r = () => {
	let e = new URL("assets/index.css", window.BASE_URL), t = document.createElement("link");
	t.rel = "stylesheet", t.type = "text/css", t.href = e.toString(), document.head.appendChild(t);
}, i = (e) => {
	window.CHANNEL.js = e;
	let t = document.querySelector("#cs-jstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channeljs) return;
	let n = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>").replace(/\t/g, "    ").replace(/ /g, "&nbsp;");
	"" + encodeURIComponent(n);
	let r = document.createElement("script");
	r.id = "chanjs", r.type = "text/javascript", r.textContent = e, document.body.append(r);
}, a = (e) => {
	let t = document.querySelector("#chanjs");
	if (!t) {
		i(e);
		return;
	}
	t.textContent !== e && (t.remove(), i(e));
}, o = () => {
	window.Callbacks.channelCSSJS = function({ css: e, js: t }) {
		e && n(e), t && a(t);
	};
}, s = () => {
	let e = new URL("resources/favicon.ico", window.BASE_URL), t = document.createElement("link");
	t.href = e.toString(), t.type = "image/x-icon", t.rel = "shortcut icon", document.head.append(t);
}, c = Array.isArray, l = Array.prototype.indexOf, u = Array.prototype.includes, d = Array.from, f = Object.defineProperty, p = Object.getOwnPropertyDescriptor, m = Object.prototype, h = Array.prototype, ee = Object.getPrototypeOf, te = Object.isExtensible, ne = () => {};
function re(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function ie() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var g = 1024, _ = 2048, v = 4096, ae = 8192, oe = 16384, se = 32768, ce = 1 << 25, le = 65536, ue = 1 << 19, de = 1 << 20, fe = 65536, pe = 1 << 21, me = 1 << 22, he = 1 << 23, ge = Symbol("$state"), y = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
globalThis.document?.contentType;
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function _e() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function ve() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ye() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function be() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function xe() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Se() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/constants.js
var Ce = {}, b = Symbol();
function we() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Te(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ee() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var x = !1, S;
function C(e) {
	if (e === null) throw Te(), Ce;
	return S = e;
}
function De() {
	return C(/* @__PURE__ */ L(S));
}
function Oe(e) {
	if (x) {
		if (/* @__PURE__ */ L(S) !== null) throw Te(), Ce;
		S = e;
	}
}
function ke(e = 1) {
	if (x) {
		for (var t = e, n = S; t--;) n = /* @__PURE__ */ L(n);
		S = n;
	}
}
function Ae(e = !0) {
	for (var t = 0, n = S;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ L(n);
		e && n.remove(), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function je(e) {
	return e === this.v;
}
function Me(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ne(e) {
	return !Me(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var w = !1, Pe = !1, T = null;
function E(e) {
	T = e;
}
function Fe(e, t = !1, n) {
	T = {
		p: T,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: G,
		l: Pe && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function Ie(e) {
	var t = T, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) qt(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, T = t.p, e ?? {};
}
function Le() {
	return !Pe || T !== null && T.l === null;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Re = [];
function ze() {
	var e = Re;
	Re = [], re(e);
}
function Be(e) {
	if (Re.length === 0 && !Je) {
		var t = Re;
		queueMicrotask(() => {
			t === Re && ze();
		});
	}
	Re.push(e);
}
function Ve(e) {
	var t = G;
	if (t === null) return H.f |= he, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	D(e, t);
}
function D(e, t) {
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
function O(e, t) {
	e.f = e.f & He | t;
}
function Ue(e) {
	e.f & 512 || e.deps === null ? O(e, g) : O(e, v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function We(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= fe, We(t.deps));
}
function Ge(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), We(e.deps), O(e, g);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Ke = !1, k = /* @__PURE__ */ new Set(), A = null, j = null, qe = null, Je = !1, Ye = !1, M = null, Xe = null, Ze = 0, Qe = 1, $e = class e {
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
			for (var r of n.d) O(r, _), t(r);
			for (r of n.m) O(r, v), t(r);
		}
		this.#d.add(e);
	}
	#g() {
		if (Ze++ > 1e3 && (k.delete(this), et()), !this.#m()) {
			for (let e of this.#c) this.#l.delete(e), O(e, _), this.schedule(e);
			for (let e of this.#l) O(e, v), this.schedule(e);
		}
		let t = this.#o;
		this.#o = [], this.apply();
		var n = M = [], r = [], i = Xe = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw ot(e), t;
		}
		if (A = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (M = null, Xe = null, this.#m() || this.#h()) {
			this.#v(r), this.#v(n);
			for (let [e, t] of this.#u) at(e, t);
		} else {
			this.#r.size === 0 && k.delete(this), this.#c.clear(), this.#l.clear();
			for (let e of this.#e) e(this);
			this.#e.clear(), tt(r), tt(n), this.#a?.resolve();
		}
		var o = A;
		if (this.#o.length > 0) {
			let e = o ??= this;
			e.#o.push(...this.#o.filter((t) => !e.#o.includes(t)));
		}
		o !== null && (k.add(o), o.#g()), w && !k.has(this) && this.#y();
	}
	#_(e, t, n) {
		e.f ^= g;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#u.has(r)) && r.fn !== null) {
				a ? r.f ^= g : i & 4 ? t.push(r) : w && i & 16777224 ? n.push(r) : gn(r) && (i & 16 && this.#l.add(r), xn(r));
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
		e.v !== b && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), j?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		A = this;
	}
	deactivate() {
		A = null, j = null;
	}
	flush() {
		try {
			Ye = !0, A = this, this.#g();
		} finally {
			Ze = 0, qe = null, M = null, Xe = null, Ye = !1, A = null, j = null, P.clear();
		}
	}
	discard() {
		for (let e of this.#t) e(this);
		this.#t.clear(), this.#n.clear(), k.delete(this);
	}
	register_created_effect(e) {
		this.#s.push(e);
	}
	#y() {
		for (let l of k) {
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
				for (let e of this.#s) !(e.f & 155648) && rt(e, s, a) && (e.f & 4194320 ? (O(e, _), l.schedule(e)) : l.#c.add(e));
				if (l.#o.length > 0) {
					l.apply();
					for (var c of l.#o) l.#_(c, [], []);
					l.#o = [];
				}
				l.deactivate();
			}
		}
		for (let e of k) e.#p.has(this) && (e.#p.delete(this), e.#p.size === 0 && !e.#m() && (e.activate(), e.#g()));
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
		return (this.#a ??= ie()).promise;
	}
	static ensure() {
		if (A === null) {
			let t = A = new e();
			Ye || (k.add(A), Je || Be(() => {
				A === t && t.flush();
			}));
		}
		return A;
	}
	apply() {
		if (!w || !this.is_fork && k.size === 1) {
			j = null;
			return;
		}
		j = /* @__PURE__ */ new Map();
		for (let [e, [t]] of this.current) j.set(e, t);
		for (let n of k) if (!(n === this || n.is_fork)) {
			var e = !1, t = !1;
			if (n.id < this.id) for (let [r, [, i]] of n.current) i || (e ||= this.current.has(r), t ||= !this.current.has(r));
			if (e && t) this.#p.add(n);
			else for (let [e, t] of n.previous) j.has(e) || j.set(e, t);
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
			if (M !== null && t === G && (w || (H === null || !(H.f & 2)) && !Ke)) return;
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
		ve();
	} catch (e) {
		D(e, qe);
	}
}
var N = null;
function tt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && gn(r) && (N = /* @__PURE__ */ new Set(), xn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && rn(r), N?.size > 0)) {
				P.clear();
				for (let e of N) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) N.has(n) && (N.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || xn(n);
					}
				}
				N.clear();
			}
		}
		N = null;
	}
}
function nt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? nt(i, t, n, r) : e & 4194320 && !(e & 2048) && rt(i, t, r) && (O(i, _), it(i));
	}
}
function rt(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (u.call(t, r)) return !0;
		if (r.f & 2 && rt(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function it(e) {
	A.schedule(e);
}
function at(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), O(e, g);
		for (var n = e.first; n !== null;) at(n, t), n = n.next;
	}
}
function ot(e) {
	O(e, g);
	for (var t = e.first; t !== null;) ot(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function st(e) {
	let t = 0, n = Tt(0), r;
	return () => {
		Gt() && ($(n), Xt(() => (t === 0 && (r = wn(() => e(() => kt(n)))), t += 1, () => {
			Be(() => {
				--t, t === 0 && (r?.(), r = void 0, kt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var ct = le | ue;
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
			var t = G;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = G.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = Qt(() => {
			if (x) {
				let e = this.#t;
				De();
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
			this.#a = z(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed;
		t && (this.#s = z(() => {
			t(this.#e, () => e, () => () => {});
		}));
	}
	#v() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = z(() => e(this.#e)), Be(() => {
			var e = this.#c = document.createDocumentFragment(), t = Lt();
			e.append(t), this.#a = this.#x(() => z(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, an(this.#o, () => {
				this.#o = null;
			}), this.#b(A));
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = z(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				sn(this.#a, e);
				let t = this.#n.pending;
				this.#o = z(() => t(this.#e));
			} else this.#b(A);
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
		var t = G, n = H, r = T;
		K(this.#i), W(this.#i), E(this.#i.ctx);
		try {
			return $e.ensure(), e();
		} catch (e) {
			return Ve(e), null;
		} finally {
			K(t), W(n), E(r);
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
		A?.is_fork ? (this.#a && A.skip_effect(this.#a), this.#o && A.skip_effect(this.#o), this.#s && A.skip_effect(this.#s), A.on_fork_commit(() => {
			this.#C(e);
		})) : this.#C(e);
	}
	#C(e) {
		this.#a &&= (B(this.#a), null), this.#o &&= (B(this.#o), null), this.#s &&= (B(this.#s), null), x && (C(this.#t), ke(), C(Ae()));
		var t = this.#n.onerror;
		let n = this.#n.failed;
		var r = !1, i = !1;
		let a = () => {
			if (r) {
				Ee();
				return;
			}
			r = !0, i && Se(), this.#s !== null && an(this.#s, () => {
				this.#s = null;
			}), this.#x(() => {
				this.#y();
			});
		}, o = (e) => {
			try {
				i = !0, t?.(e, a), i = !1;
			} catch (e) {
				D(e, this.#i && this.#i.parent);
			}
			n && (this.#s = this.#x(() => {
				try {
					return z(() => {
						var t = G;
						t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
					});
				} catch (e) {
					return D(e, this.#i.parent), null;
				}
			}));
		};
		Be(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				D(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => D(e, this.#i && this.#i.parent)) : o(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function dt(e, t, n, r) {
	let i = Le() ? ht : _t;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = G, s = ft(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		s();
		try {
			r(e);
		} catch (e) {
			o.f & 16384 || D(e, o);
		}
		pt();
	}
	if (n.length === 0) {
		c.then(() => l(t.map(i)));
		return;
	}
	var u = mt();
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ gt(e))).then((e) => l([...t.map(i), ...e])).catch((e) => D(e, o)).finally(() => u());
	}
	c ? c.then(() => {
		s(), d(), pt();
	}) : d();
}
function ft() {
	var e = G, t = H, n = T, r = A;
	return function(i = !0) {
		K(e), W(t), E(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function pt(e = !0) {
	K(null), W(null), E(null), e && A?.deactivate();
}
function mt() {
	var e = G, t = e.b, n = A, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
		t.update_pending_count(-1, n), n.decrement(r, e, i);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function ht(e) {
	var t = 2 | _;
	return G !== null && (G.f |= ue), {
		ctx: T,
		deps: null,
		effects: null,
		equals: je,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: b,
		wv: 0,
		parent: G,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function gt(e, t, n) {
	let r = G;
	r === null && _e();
	var i = void 0, a = Tt(b), o = !H, s = /* @__PURE__ */ new Map();
	return Yt(() => {
		var t = G, n = ie();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, n.reject).finally(pt);
		} catch (e) {
			n.reject(e), pt();
		}
		var c = A;
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
				if (c.activate(), n) a.f |= he, Et(a, n);
				else {
					a.f & 8388608 && (a.f ^= he), Et(a, e);
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
	return t.equals = Ne, t;
}
function vt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) B(t[n]);
	}
}
function yt(e) {
	var t, n = G, r = e.parent;
	if (!V && r !== null && r.f & 24576) return we(), e.v;
	K(r);
	try {
		e.f &= ~fe, vt(e), t = vn(e);
	} finally {
		K(n);
	}
	return t;
}
function bt(e) {
	var t = yt(e);
	if (!e.equals(t) && (e.wv = hn(), (!A?.is_fork || e.deps === null) && (A === null ? e.v = t : A.capture(e, t, !0), e.deps === null))) {
		O(e, g);
		return;
	}
	V || (j === null ? Ue(e) : (Gt() || A?.is_fork) && j.set(e, t));
}
function xt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(y), t.teardown = ne, t.ac = null, bn(t, 0), en(t));
}
function St(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && xn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Ct = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Map(), wt = !1;
function Tt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: je,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function F(e, t) {
	let n = Tt(e, t);
	return dn(n), n;
}
function I(e, t, n = !1) {
	return H !== null && (!U || H.f & 131072) && Le() && H.f & 4325394 && (q === null || !u.call(q, e)) && xe(), Et(e, n ? jt(t) : t, Xe);
}
function Et(e, t, n = null) {
	if (!e.equals(t)) {
		P.set(e, V ? t : e.v);
		var r = $e.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && yt(t), j === null && Ue(t);
		}
		e.wv = hn(), At(e, _, n), Le() && G !== null && G.f & 1024 && !(G.f & 96) && (X === null ? fn([e]) : X.push(e)), !r.is_fork && Ct.size > 0 && !wt && Dt();
	}
	return t;
}
function Dt() {
	wt = !1;
	for (let e of Ct) e.f & 1024 && O(e, v), gn(e) && xn(e);
	Ct.clear();
}
function Ot(e, t = 1) {
	var n = $(e), r = t === 1 ? n++ : n--;
	return I(e, n), r;
}
function kt(e) {
	I(e, e.v + 1);
}
function At(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Le(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === G)) {
			var l = (c & _) === 0;
			if (l && O(s, t), c & 2) {
				var u = s;
				j?.delete(u), c & 65536 || (c & 512 && (s.f |= fe), At(u, v, n));
			} else if (l) {
				var d = s;
				c & 16 && N !== null && N.add(d), n === null ? it(d) : n.push(d);
			}
		}
	}
}
function jt(e) {
	if (typeof e != "object" || !e || ge in e) return e;
	let t = ee(e);
	if (t !== m && t !== h) return e;
	var n = /* @__PURE__ */ new Map(), r = c(e), i = /* @__PURE__ */ F(0), a = null, o = Q, s = (e) => {
		if (Q === o) return e();
		var t = H, n = Q;
		W(null), mn(o);
		var r = e();
		return W(t), mn(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ F(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && ye();
			var i = n.get(t);
			return i === void 0 ? s(() => {
				var e = /* @__PURE__ */ F(r.value, a);
				return n.set(t, e), e;
			}) : I(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = s(() => /* @__PURE__ */ F(b, a));
					n.set(t, e), kt(i);
				}
			} else I(r, b), kt(i);
			return !0;
		},
		get(t, r, i) {
			if (r === ge) return e;
			var o = n.get(r), c = r in t;
			if (o === void 0 && (!c || p(t, r)?.writable) && (o = s(() => /* @__PURE__ */ F(jt(c ? t[r] : b), a)), n.set(r, o)), o !== void 0) {
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
			if (t === ge) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== b || Reflect.has(e, t);
			return (r !== void 0 || G !== null && (!i || p(e, t)?.writable)) && (r === void 0 && (r = s(() => /* @__PURE__ */ F(i ? jt(e[t]) : b, a)), n.set(t, r)), $(r) === b) ? !1 : i;
		},
		set(e, t, o, c) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var f = n.get(d + "");
				f === void 0 ? d in e && (f = s(() => /* @__PURE__ */ F(b, a)), n.set(d + "", f)) : I(f, b);
			}
			if (l === void 0) (!u || p(e, t)?.writable) && (l = s(() => /* @__PURE__ */ F(void 0, a)), I(l, jt(o)), n.set(t, l));
			else {
				u = l.v !== b;
				var m = s(() => jt(o));
				I(l, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(c, o), !u) {
				if (r && typeof t == "string") {
					var ee = n.get("length"), te = Number(t);
					Number.isInteger(te) && te >= ee.v && I(ee, te + 1);
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
			be();
		}
	});
}
var Mt, Nt, Pt, Ft;
function It() {
	if (Mt === void 0) {
		Mt = window, Nt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Pt = p(t, "firstChild").get, Ft = p(t, "nextSibling").get, te(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), te(n) && (n.__t = void 0);
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
function L(e) {
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
	for (var i; t--;) i = r, r = /* @__PURE__ */ L(r);
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
	var t = H, n = G;
	W(null), K(null);
	try {
		return e();
	} finally {
		W(t), K(n);
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Wt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function R(e, t) {
	var n = G;
	n !== null && n.f & 8192 && (e |= ae);
	var r = {
		ctx: T,
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
	A?.register_created_effect(r);
	var i = r;
	if (e & 4) M === null ? $e.ensure().schedule(r) : M.push(r);
	else if (t !== null) {
		try {
			xn(r);
		} catch (e) {
			throw B(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= le));
	}
	if (i !== null && (i.parent = n, n !== null && Wt(i, n), H !== null && H.f & 2 && !(e & 64))) {
		var a = H;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Gt() {
	return H !== null && !U;
}
function Kt(e) {
	let t = R(8, null);
	return O(t, g), t.teardown = e, t;
}
function qt(e) {
	return R(4 | de, e);
}
function Jt(e) {
	$e.ensure();
	let t = R(64 | ue, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? an(t, () => {
			B(t), n(void 0);
		}) : (B(t), n(void 0));
	});
}
function Yt(e) {
	return R(me | ue, e);
}
function Xt(e, t = 0) {
	return R(8 | t, e);
}
function Zt(e, t = [], n = [], r = []) {
	dt(r, t, n, (t) => {
		R(8, () => e(...t.map($)));
	});
}
function Qt(e, t = 0) {
	return R(16 | t, e);
}
function z(e) {
	return R(32 | ue, e);
}
function $t(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = V, n = H;
		un(!0), W(null);
		try {
			t.call(null);
		} finally {
			un(e), W(n);
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
		n.f & 64 ? n.parent = null : B(n, t), n = r;
	}
}
function tn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || B(t), t = n;
	}
}
function B(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (nn(e.nodes.start, e.nodes.end), n = !0), O(e, ce), en(e, t && !n), bn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	$t(e), e.f ^= ce, e.f |= oe;
	var i = e.parent;
	i !== null && i.first !== null && rn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function nn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ L(e);
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
		n && B(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function on(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ae;
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
		var i = n === r ? null : /* @__PURE__ */ L(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var cn = null, ln = !1, V = !1;
function un(e) {
	V = e;
}
var H = null, U = !1;
function W(e) {
	H = e;
}
var G = null;
function K(e) {
	G = e;
}
var q = null;
function dn(e) {
	H !== null && (!w || H.f & 2) && (q === null ? q = [e] : q.push(e));
}
var J = null, Y = 0, X = null;
function fn(e) {
	X = e;
}
var pn = 1, Z = 0, Q = Z;
function mn(e) {
	Q = e;
}
function hn() {
	return ++pn;
}
function gn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~fe), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (gn(a) && bt(a), a.wv > e.wv) return !0;
		}
		t & 512 && j === null && O(e, g);
	}
	return !1;
}
function _n(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!w && q !== null && u.call(q, e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? _n(a, t, !1) : t === a && (n ? O(a, _) : a.f & 1024 && O(a, v), it(a));
	}
}
function vn(e) {
	var t = J, n = Y, r = X, i = H, a = q, o = T, s = U, c = Q, l = e.f;
	J = null, Y = 0, X = null, H = l & 96 ? null : e, q = null, E(e.ctx), U = !1, Q = ++Z, e.ac !== null && (Ut(() => {
		e.ac.abort(y);
	}), e.ac = null);
	try {
		e.f |= pe;
		var u = e.fn, d = u();
		e.f |= se;
		var f = e.deps, p = A?.is_fork;
		if (J !== null) {
			var m;
			if (p || bn(e, Y), f !== null && Y > 0) for (f.length = Y + J.length, m = 0; m < J.length; m++) f[Y + m] = J[m];
			else e.deps = f = J;
			if (Gt() && e.f & 512) for (m = Y; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Y < f.length && (bn(e, Y), f.length = Y);
		if (Le() && X !== null && !U && f !== null && !(e.f & 6146)) for (m = 0; m < X.length; m++) _n(X[m], e);
		if (i !== null && i !== e) {
			if (Z++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Z;
			if (t !== null) for (let e of t) e.rv = Z;
			X !== null && (r === null ? r = X : r.push(...X));
		}
		return e.f & 8388608 && (e.f ^= he), d;
	} catch (e) {
		return Ve(e);
	} finally {
		e.f ^= pe, J = t, Y = n, X = r, H = i, q = a, E(o), U = s, Q = c;
	}
}
function yn(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = l.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (J === null || !u.call(J, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~fe), a.v !== b && Ue(a), xt(a), bn(a, 0);
	}
}
function bn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) yn(e, n[r]);
}
function xn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		O(e, g);
		var n = G, r = ln;
		G = e, ln = !0;
		try {
			t & 16777232 ? tn(e) : en(e), $t(e);
			var i = vn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = pn;
		} finally {
			ln = r, G = n;
		}
	}
}
function $(e) {
	var t = (e.f & 2) != 0;
	if (cn?.add(e), H !== null && !U && !(G !== null && G.f & 16384) && (q === null || !u.call(q, e))) {
		var n = H.deps;
		if (H.f & 2097152) e.rv < Z && (e.rv = Z, J === null && n !== null && n[Y] === e ? Y++ : J === null ? J = [e] : J.push(e));
		else {
			(H.deps ??= []).push(e);
			var r = e.reactions;
			r === null ? e.reactions = [H] : u.call(r, H) || r.push(H);
		}
	}
	if (V && P.has(e)) return P.get(e);
	if (t) {
		var i = e;
		if (V) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Cn(i)) && (a = yt(i)), P.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !U && H !== null && (ln || (H.f & 512) != 0), s = (i.f & se) === 0;
		gn(i) && (o && (i.f |= 512), bt(i)), o && !s && (St(i), Sn(i));
	}
	if (j?.has(e)) return j.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Sn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (St(t), Sn(t));
}
function Cn(e) {
	if (e.v === b) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (P.has(t) || t.f & 2 && Cn(t)) return !0;
	return !1;
}
function wn(e) {
	var t = U;
	try {
		return U = !0, e();
	} finally {
		U = t;
	}
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var Tn = ["touchstart", "touchmove"];
function En(e) {
	return Tn.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Dn = Symbol("events"), On = /* @__PURE__ */ new Set(), kn = /* @__PURE__ */ new Set();
function An(e, t, n) {
	(t[Dn] ??= {})[e] = n;
}
function jn(e) {
	for (var t = 0; t < e.length; t++) On.add(e[t]);
	for (var n of kn) n(e);
}
var Mn = null;
function Nn(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Mn = e;
	var o = 0, s = Mn === e && e[Dn];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[Dn] = t;
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
		var u = H, d = G;
		W(null), K(null);
		try {
			for (var p, m = []; a !== null;) {
				var h = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var ee = a[Dn]?.[r];
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
			e[Dn] = t, delete e.currentTarget, W(u), K(d);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Pn = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Fn(e) {
	return Pn?.createHTML(e) ?? e;
}
function In(e) {
	var t = Vt("template");
	return t.innerHTML = Fn(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Ln(e, t) {
	var n = G;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Rn(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (x) return Ln(S, null), S;
		i === void 0 && (i = In(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Rt(i)));
		var t = r || Nt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Rt(t), s = t.lastChild;
			Ln(o, s);
		} else Ln(t, t);
		return t;
	};
}
function zn(e, t) {
	if (x) {
		var n = G;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = S), De();
		return;
	}
	e !== null && e.before(t);
}
function Bn(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function Vn(e, t) {
	return Un(e, t);
}
var Hn = /* @__PURE__ */ new Map();
function Un(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	It();
	var c = void 0, l = Jt(() => {
		var o = n ?? t.appendChild(Lt());
		lt(o, { pending: () => {} }, (t) => {
			Fe({});
			var n = T;
			if (a && (n.c = a), i && (r.$$events = i), x && Ln(t, null), c = e(t, r) || {}, x && (G.nodes.end = S, S === null || S.nodeType !== 8 || S.data !== "]")) throw Te(), Ce;
			Ie();
		}, s);
		var l = /* @__PURE__ */ new Set(), u = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!l.has(r)) {
					l.add(r);
					var i = En(r);
					for (let e of [t, document]) {
						var a = Hn.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Hn.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Nn, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return u(d(On)), kn.add(u), () => {
			for (var e of l) for (let n of [t, document]) {
				var r = Hn.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Nn), r.delete(e), r.size === 0 && Hn.delete(n)) : r.set(e, i);
			}
			kn.delete(u), o !== n && o.parentNode?.removeChild(o);
		};
	});
	return Wn.set(c, l), c;
}
var Wn = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region src/Counter.svelte
var Gn = /* @__PURE__ */ Rn("<div class=\"svelte-counter\"><p>Svelte counter: <strong> </strong></p> <button>-</button> <button>+</button> <button class=\"px-4 py-2 bg-blue-500 text-white rounded\">Click me</button></div>");
function Kn(e, t) {
	Fe(t, !0);
	let n = /* @__PURE__ */ F(0);
	function r() {
		Ot(n);
	}
	function i() {
		I(n, 0);
	}
	var a = {
		increment: r,
		reset: i
	}, o = Gn(), s = zt(o), c = Bt(zt(s)), l = zt(c, !0);
	Oe(c), Oe(s);
	var u = Bt(s, 2), d = Bt(u, 2);
	return ke(2), Oe(o), Zt(() => Bn(l, $(n))), An("click", u, () => Ot(n, -1)), An("click", d, () => Ot(n)), zn(e, o), Ie(a);
}
jn(["click"]);
//#endregion
//#region src/mount.ts
var qn = () => {
	let e = document.createElement("div");
	e.id = "svelte-container";
	let t = Vn(Kn, { target: e }), n = document.createElement("button");
	n.textContent = "Add +5", n.addEventListener("click", function() {
		t.increment(), t.increment(), t.increment(), t.increment(), t.increment();
	}), document.body.appendChild(e), document.body.appendChild(n);
}, Jn = async () => {
	o(), s(), r(), e(), qn();
};
//#endregion
export { Jn as init };
