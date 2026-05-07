const submitSocketConnect = async () => new Promise((t) => {
	socketClient.once("connect", () => {
		t();
	}), socketClient.connect();
}), submitSocketDisconnect = async () => new Promise((t, i) => {
	socketClient.once("disconnect", (a) => {
		if (a === "io client disconnect") {
			t();
			return;
		}
		i(a);
	}), socketClient.disconnect();
}), socketClient = window.socket;
var is_array = Array.isArray, index_of = Array.prototype.indexOf, includes = Array.prototype.includes, array_from = Array.from;
Object.keys;
var define_property = Object.defineProperty, get_descriptor = Object.getOwnPropertyDescriptor, get_descriptors = Object.getOwnPropertyDescriptors, object_prototype = Object.prototype, array_prototype = Array.prototype, get_prototype_of = Object.getPrototypeOf, is_extensible = Object.isExtensible;
function is_function(t) {
	return typeof t == "function";
}
const noop$1 = () => {};
function run(t) {
	return t();
}
function run_all(t) {
	for (var i = 0; i < t.length; i++) t[i]();
}
function deferred() {
	var t, i;
	return {
		promise: new Promise((a, o) => {
			t = a, i = o;
		}),
		resolve: t,
		reject: i
	};
}
const CLEAN = 1024, DIRTY = 2048, MAYBE_DIRTY = 4096, INERT = 8192, REACTION_RAN = 32768, DESTROYING = 1 << 25, EFFECT_TRANSPARENT = 65536, EFFECT_PRESERVED = 1 << 19, USER_EFFECT = 1 << 20, WAS_MARKED = 65536, REACTION_IS_UPDATING = 1 << 21, ERROR_VALUE = 1 << 23, STATE_SYMBOL = Symbol("$state"), LEGACY_PROPS = Symbol("legacy props"), LOADING_ATTR_SYMBOL = Symbol(""), STALE_REACTION = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), IS_XHTML = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function equals(t) {
	return t === this.v;
}
function safe_not_equal(t, i) {
	return t == t ? t !== i || typeof t == "object" && !!t || typeof t == "function" : i == i;
}
function safe_equals(t) {
	return !safe_not_equal(t, this.v);
}
function lifecycle_outside_component(t) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
function async_derived_orphan() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function effect_in_teardown(t) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function effect_in_unowned_derived() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function effect_orphan(t) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function effect_update_depth_exceeded() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function props_invalid_value(t) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function state_descriptors_fixed() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function state_prototype_fixed() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function state_unsafe_mutation() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function svelte_boundary_reset_onerror() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let legacy_mode_flag = !1;
function enable_legacy_mode_flag() {
	legacy_mode_flag = !0;
}
const HYDRATION_ERROR = {}, UNINITIALIZED = Symbol();
var empty = [];
function snapshot(t, i = !1, a = !1) {
	return clone(t, /* @__PURE__ */ new Map(), "", empty, null, a);
}
function clone(t, i, a, s, c = null, l = !1) {
	if (typeof t == "object" && t) {
		var u = i.get(t);
		if (u !== void 0) return u;
		if (t instanceof Map) return new Map(t);
		if (t instanceof Set) return new Set(t);
		if (is_array(t)) {
			var d = Array(t.length);
			i.set(t, d), c !== null && i.set(c, d);
			for (var f = 0; f < t.length; f += 1) {
				var m = t[f];
				f in t && (d[f] = clone(m, i, a, s, null, l));
			}
			return d;
		}
		if (get_prototype_of(t) === object_prototype) {
			d = {}, i.set(t, d), c !== null && i.set(c, d);
			for (var g of Object.keys(t)) d[g] = clone(t[g], i, a, s, null, l);
			return d;
		}
		if (t instanceof Date) return structuredClone(t);
		if (typeof t.toJSON == "function" && !l) return clone(t.toJSON(), i, a, s, t);
	}
	if (t instanceof EventTarget) return t;
	try {
		return structuredClone(t);
	} catch {
		return t;
	}
}
let component_context = null;
function set_component_context(t) {
	component_context = t;
}
function getContext(t) {
	return get_or_init_context_map("getContext").get(t);
}
function setContext(t, i) {
	return get_or_init_context_map("setContext").set(t, i), i;
}
function hasContext(t) {
	return get_or_init_context_map("hasContext").has(t);
}
function push(t, i = !1, a) {
	component_context = {
		p: component_context,
		i: !1,
		c: null,
		e: null,
		s: t,
		x: null,
		r: active_effect,
		l: legacy_mode_flag && !i ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function pop(t) {
	var i = component_context, a = i.e;
	if (a !== null) {
		i.e = null;
		for (var o of a) create_user_effect(o);
	}
	return t !== void 0 && (i.x = t), i.i = !0, component_context = i.p, t ?? {};
}
function is_runes() {
	return !legacy_mode_flag || component_context !== null && component_context.l === null;
}
function get_or_init_context_map(t) {
	return component_context === null && lifecycle_outside_component(t), component_context.c ??= new Map(get_parent_context(component_context) || void 0);
}
function get_parent_context(t) {
	let i = t.p;
	for (; i !== null;) {
		let t = i.c;
		if (t !== null) return t;
		i = i.p;
	}
	return null;
}
var micro_tasks = [];
function run_micro_tasks() {
	var t = micro_tasks;
	micro_tasks = [], run_all(t);
}
function queue_micro_task(t) {
	if (micro_tasks.length === 0 && !is_flushing_sync) {
		var i = micro_tasks;
		queueMicrotask(() => {
			i === micro_tasks && run_micro_tasks();
		});
	}
	micro_tasks.push(t);
}
function flush_tasks() {
	for (; micro_tasks.length > 0;) run_micro_tasks();
}
function derived_inert() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function hydration_mismatch(t) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function select_multiple_invalid_value() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function svelte_boundary_reset_noop() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let hydrating = !1;
function set_hydrating(t) {
	hydrating = t;
}
let hydrate_node;
function set_hydrate_node(t) {
	if (t === null) throw hydration_mismatch(), HYDRATION_ERROR;
	return hydrate_node = t;
}
function hydrate_next() {
	return set_hydrate_node(/* @__PURE__ */ get_next_sibling(hydrate_node));
}
function reset(t) {
	if (hydrating) {
		if (/* @__PURE__ */ get_next_sibling(hydrate_node) !== null) throw hydration_mismatch(), HYDRATION_ERROR;
		hydrate_node = t;
	}
}
function next(t = 1) {
	if (hydrating) {
		for (var i = t, a = hydrate_node; i--;) a = /* @__PURE__ */ get_next_sibling(a);
		hydrate_node = a;
	}
}
function skip_nodes(t = !0) {
	for (var i = 0, a = hydrate_node;;) {
		if (a.nodeType === 8) {
			var o = a.data;
			if (o === "]") {
				if (i === 0) return a;
				--i;
			} else (o === "[" || o === "[!" || o[0] === "[" && !isNaN(Number(o.slice(1)))) && (i += 1);
		}
		var s = /* @__PURE__ */ get_next_sibling(a);
		t && a.remove(), a = s;
	}
}
function read_hydration_instruction(t) {
	if (!t || t.nodeType !== 8) throw hydration_mismatch(), HYDRATION_ERROR;
	return t.data;
}
function proxy(t) {
	if (typeof t != "object" || !t || STATE_SYMBOL in t) return t;
	let i = get_prototype_of(t);
	if (i !== object_prototype && i !== array_prototype) return t;
	var a = /* @__PURE__ */ new Map(), s = is_array(t), c = /* @__PURE__ */ state(0), l = null, u = update_version, f = (t) => {
		if (update_version === u) return t();
		var i = active_reaction, a = update_version;
		set_active_reaction(null), set_update_version(u);
		var o = t();
		return set_active_reaction(i), set_update_version(a), o;
	};
	return s && a.set("length", /* @__PURE__ */ state(t.length, l)), new Proxy(t, {
		defineProperty(t, i, o) {
			(!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && state_descriptors_fixed();
			var s = a.get(i);
			return s === void 0 ? f(() => {
				var t = /* @__PURE__ */ state(o.value, l);
				return a.set(i, t), t;
			}) : set(s, o.value, !0), !0;
		},
		deleteProperty(t, i) {
			var o = a.get(i);
			if (o === void 0) {
				if (i in t) {
					let t = f(() => /* @__PURE__ */ state(UNINITIALIZED, l));
					a.set(i, t), increment(c);
				}
			} else set(o, UNINITIALIZED), increment(c);
			return !0;
		},
		get(i, o, s) {
			if (o === STATE_SYMBOL) return t;
			var c = a.get(o), u = o in i;
			if (c === void 0 && (!u || get_descriptor(i, o)?.writable) && (c = f(() => /* @__PURE__ */ state(proxy(u ? i[o] : UNINITIALIZED), l)), a.set(o, c)), c !== void 0) {
				var p = get$1(c);
				return p === UNINITIALIZED ? void 0 : p;
			}
			return Reflect.get(i, o, s);
		},
		getOwnPropertyDescriptor(t, i) {
			var o = Reflect.getOwnPropertyDescriptor(t, i);
			if (o && "value" in o) {
				var s = a.get(i);
				s && (o.value = get$1(s));
			} else if (o === void 0) {
				var c = a.get(i), l = c?.v;
				if (c !== void 0 && l !== UNINITIALIZED) return {
					enumerable: !0,
					configurable: !0,
					value: l,
					writable: !0
				};
			}
			return o;
		},
		has(t, i) {
			if (i === STATE_SYMBOL) return !0;
			var o = a.get(i), s = o !== void 0 && o.v !== UNINITIALIZED || Reflect.has(t, i);
			return (o !== void 0 || active_effect !== null && (!s || get_descriptor(t, i)?.writable)) && (o === void 0 && (o = f(() => /* @__PURE__ */ state(s ? proxy(t[i]) : UNINITIALIZED, l)), a.set(i, o)), get$1(o) === UNINITIALIZED) ? !1 : s;
		},
		set(t, i, o, u) {
			var p = a.get(i), m = i in t;
			if (s && i === "length") for (var h = o; h < p.v; h += 1) {
				var g = a.get(h + "");
				g === void 0 ? h in t && (g = f(() => /* @__PURE__ */ state(UNINITIALIZED, l)), a.set(h + "", g)) : set(g, UNINITIALIZED);
			}
			if (p === void 0) (!m || get_descriptor(t, i)?.writable) && (p = f(() => /* @__PURE__ */ state(void 0, l)), set(p, proxy(o)), a.set(i, p));
			else {
				m = p.v !== UNINITIALIZED;
				var _ = f(() => proxy(o));
				set(p, _);
			}
			var v = Reflect.getOwnPropertyDescriptor(t, i);
			if (v?.set && v.set.call(u, o), !m) {
				if (s && typeof i == "string") {
					var y = a.get("length"), b = Number(i);
					Number.isInteger(b) && b >= y.v && set(y, b + 1);
				}
				increment(c);
			}
			return !0;
		},
		ownKeys(t) {
			get$1(c);
			var i = Reflect.ownKeys(t).filter((t) => {
				var i = a.get(t);
				return i === void 0 || i.v !== UNINITIALIZED;
			});
			for (var [o, s] of a) s.v !== UNINITIALIZED && !(o in t) && i.push(o);
			return i;
		},
		setPrototypeOf() {
			state_prototype_fixed();
		}
	});
}
function get_proxied_value(t) {
	try {
		if (typeof t == "object" && t && STATE_SYMBOL in t) return t[STATE_SYMBOL];
	} catch {}
	return t;
}
function is$1(t, i) {
	return Object.is(get_proxied_value(t), get_proxied_value(i));
}
var $window, is_firefox, first_child_getter, next_sibling_getter;
function init_operations() {
	if ($window === void 0) {
		$window = window, document, is_firefox = /Firefox/.test(navigator.userAgent);
		var t = Element.prototype, i = Node.prototype, a = Text.prototype;
		first_child_getter = get_descriptor(i, "firstChild").get, next_sibling_getter = get_descriptor(i, "nextSibling").get, is_extensible(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), is_extensible(a) && (a.__t = void 0);
	}
}
function create_text(t = "") {
	return document.createTextNode(t);
}
/* @__NO_SIDE_EFFECTS__ */
function get_first_child(t) {
	return first_child_getter.call(t);
}
/* @__NO_SIDE_EFFECTS__ */
function get_next_sibling(t) {
	return next_sibling_getter.call(t);
}
function child(t, i) {
	if (!hydrating) return /* @__PURE__ */ get_first_child(t);
	var a = /* @__PURE__ */ get_first_child(hydrate_node);
	if (a === null) a = hydrate_node.appendChild(create_text());
	else if (i && a.nodeType !== 3) {
		var o = create_text();
		return a?.before(o), set_hydrate_node(o), o;
	}
	return i && merge_text_nodes(a), set_hydrate_node(a), a;
}
function first_child(t, i = !1) {
	if (!hydrating) {
		var a = /* @__PURE__ */ get_first_child(t);
		return a instanceof Comment && a.data === "" ? /* @__PURE__ */ get_next_sibling(a) : a;
	}
	if (i) {
		if (hydrate_node?.nodeType !== 3) {
			var o = create_text();
			return hydrate_node?.before(o), set_hydrate_node(o), o;
		}
		merge_text_nodes(hydrate_node);
	}
	return hydrate_node;
}
function sibling(t, i = 1, a = !1) {
	let o = hydrating ? hydrate_node : t;
	for (var s; i--;) s = o, o = /* @__PURE__ */ get_next_sibling(o);
	if (!hydrating) return o;
	if (a) {
		if (o?.nodeType !== 3) {
			var c = create_text();
			return o === null ? s?.after(c) : o.before(c), set_hydrate_node(c), c;
		}
		merge_text_nodes(o);
	}
	return set_hydrate_node(o), o;
}
function should_defer_append() {
	return !1;
}
function create_element(t, i, a) {
	let o = a ? { is: a } : void 0;
	return document.createElementNS(i ?? "http://www.w3.org/1999/xhtml", t, o);
}
function merge_text_nodes(t) {
	if (t.nodeValue.length < 65536) return;
	let i = t.nextSibling;
	for (; i !== null && i.nodeType === 3;) i.remove(), t.nodeValue += i.nodeValue, i = t.nextSibling;
}
function handle_error(t) {
	var i = active_effect;
	if (i === null) return active_reaction.f |= ERROR_VALUE, t;
	if (!(i.f & 32768) && !(i.f & 4)) throw t;
	invoke_error_boundary(t, i);
}
function invoke_error_boundary(t, i) {
	for (; i !== null;) {
		if (i.f & 128) {
			if (!(i.f & 32768)) throw t;
			try {
				i.b.error(t);
				return;
			} catch (i) {
				t = i;
			}
		}
		i = i.parent;
	}
	throw t;
}
var STATUS_MASK = ~(MAYBE_DIRTY | 3072);
function set_signal_status(t, i) {
	t.f = t.f & STATUS_MASK | i;
}
function update_derived_status(t) {
	t.f & 512 || t.deps === null ? set_signal_status(t, CLEAN) : set_signal_status(t, MAYBE_DIRTY);
}
function clear_marked(t) {
	if (t !== null) for (let i of t) !(i.f & 2) || !(i.f & 65536) || (i.f ^= WAS_MARKED, clear_marked(i.deps));
}
function defer_effect(t, i, a) {
	t.f & 2048 ? i.add(t) : t.f & 4096 && a.add(t), clear_marked(t.deps), set_signal_status(t, CLEAN);
}
function subscribe_to_store(t, i, a) {
	if (t == null) return i(void 0), a && a(void 0), noop$1;
	let o = untrack(() => t.subscribe(i, a));
	return o.unsubscribe ? () => o.unsubscribe() : o;
}
var subscriber_queue = [];
function writable(t, i = noop$1) {
	let a = null, o = /* @__PURE__ */ new Set();
	function s(i) {
		if (safe_not_equal(t, i) && (t = i, a)) {
			let i = !subscriber_queue.length;
			for (let i of o) i[1](), subscriber_queue.push(i, t);
			if (i) {
				for (let t = 0; t < subscriber_queue.length; t += 2) subscriber_queue[t][0](subscriber_queue[t + 1]);
				subscriber_queue.length = 0;
			}
		}
	}
	function c(i) {
		s(i(t));
	}
	function l(l, u = noop$1) {
		let d = [l, u];
		return o.add(d), o.size === 1 && (a = i(s, c) || noop$1), l(t), () => {
			o.delete(d), o.size === 0 && a && (a(), a = null);
		};
	}
	return {
		set: s,
		update: c,
		subscribe: l
	};
}
function get(t) {
	let i;
	return subscribe_to_store(t, (t) => i = t)(), i;
}
let legacy_is_updating_store = !1;
var is_store_binding = !1, IS_UNMOUNTED = Symbol();
function store_get(t, i, a) {
	let o = a[i] ??= {
		store: null,
		source: /* @__PURE__ */ mutable_source(void 0),
		unsubscribe: noop$1
	};
	if (o.store !== t && !(IS_UNMOUNTED in a)) if (o.unsubscribe(), o.store = t ?? null, t == null) o.source.v = void 0, o.unsubscribe = noop$1;
	else {
		var s = !0;
		o.unsubscribe = subscribe_to_store(t, (t) => {
			s ? o.source.v = t : set(o.source, t);
		}), s = !1;
	}
	return t && IS_UNMOUNTED in a ? get(t) : get$1(o.source);
}
function setup_stores() {
	let t = {};
	function i() {
		teardown(() => {
			for (var i in t) t[i].unsubscribe();
			define_property(t, IS_UNMOUNTED, {
				enumerable: !1,
				value: !0
			});
		});
	}
	return [t, i];
}
function update_with_flag(t, i) {
	legacy_is_updating_store = !0;
	try {
		t.set(i);
	} finally {
		legacy_is_updating_store = !1;
	}
}
function store_mutate(t, i, a) {
	return update_with_flag(t, a), i;
}
function capture_store_binding(t) {
	var i = is_store_binding;
	try {
		return is_store_binding = !1, [t(), is_store_binding];
	} finally {
		is_store_binding = i;
	}
}
var batches = /* @__PURE__ */ new Set();
let current_batch = null, batch_values = null;
var last_scheduled_effect = null;
let is_flushing_sync = !1;
var is_processing = !1;
let collected_effects = null, legacy_updates = null;
var flush_count = 0, uid = 1, Batch = class t {
	id = uid++;
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
		for (let a of this.#p) for (let o of a.#i.keys()) {
			for (var t = !1, i = o; i.parent !== null;) {
				if (this.#u.has(i)) {
					t = !0;
					break;
				}
				i = i.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(t) {
		this.#u.has(t) || this.#u.set(t, {
			d: [],
			m: []
		}), this.#d.delete(t);
	}
	unskip_effect(t, i = (t) => this.schedule(t)) {
		var a = this.#u.get(t);
		if (a) {
			this.#u.delete(t);
			for (var o of a.d) set_signal_status(o, DIRTY), i(o);
			for (o of a.m) set_signal_status(o, MAYBE_DIRTY), i(o);
		}
		this.#d.add(t);
	}
	#g() {
		if (flush_count++ > 1e3 && (batches.delete(this), infinite_loop_guard()), !this.#m()) {
			for (let t of this.#c) this.#l.delete(t), set_signal_status(t, DIRTY), this.schedule(t);
			for (let t of this.#l) set_signal_status(t, MAYBE_DIRTY), this.schedule(t);
		}
		let i = this.#o;
		this.#o = [], this.apply();
		var a = collected_effects = [], o = [], s = legacy_updates = [];
		for (let t of i) try {
			this.#_(t, a, o);
		} catch (i) {
			throw reset_all(t), i;
		}
		if (current_batch = null, s.length > 0) {
			var c = t.ensure();
			for (let t of s) c.schedule(t);
		}
		if (collected_effects = null, legacy_updates = null, this.#m() || this.#h()) {
			this.#v(o), this.#v(a);
			for (let [t, i] of this.#u) reset_branch(t, i);
		} else {
			this.#r.size === 0 && batches.delete(this), this.#c.clear(), this.#l.clear();
			for (let t of this.#e) t(this);
			this.#e.clear(), flush_queued_effects(o), flush_queued_effects(a), this.#a?.resolve();
		}
		var l = current_batch;
		if (this.#o.length > 0) {
			let t = l ??= this;
			t.#o.push(...this.#o.filter((i) => !t.#o.includes(i)));
		}
		l !== null && (batches.add(l), l.#g());
	}
	#_(t, i, a) {
		t.f ^= CLEAN;
		for (var o = t.first; o !== null;) {
			var s = o.f, c = (s & 96) != 0;
			if (!(c && s & 1024 || s & 8192 || this.#u.has(o)) && o.fn !== null) {
				c ? o.f ^= CLEAN : s & 4 ? i.push(o) : is_dirty(o) && (s & 16 && this.#l.add(o), update_effect(o));
				var l = o.first;
				if (l !== null) {
					o = l;
					continue;
				}
			}
			for (; o !== null;) {
				var u = o.next;
				if (u !== null) {
					o = u;
					break;
				}
				o = o.parent;
			}
		}
	}
	#v(t) {
		for (var i = 0; i < t.length; i += 1) defer_effect(t[i], this.#c, this.#l);
	}
	capture(t, i, a = !1) {
		t.v !== UNINITIALIZED && !this.previous.has(t) && this.previous.set(t, t.v), t.f & 8388608 || (this.current.set(t, [i, a]), batch_values?.set(t, i)), this.is_fork || (t.v = i);
	}
	activate() {
		current_batch = this;
	}
	deactivate() {
		current_batch = null, batch_values = null;
	}
	flush() {
		try {
			is_processing = !0, current_batch = this, this.#g();
		} finally {
			flush_count = 0, last_scheduled_effect = null, collected_effects = null, legacy_updates = null, is_processing = !1, current_batch = null, batch_values = null, old_values.clear();
		}
	}
	discard() {
		for (let t of this.#t) t(this);
		this.#t.clear(), this.#n.clear(), batches.delete(this);
	}
	register_created_effect(t) {
		this.#s.push(t);
	}
	increment(t, i) {
		let a = this.#r.get(i) ?? 0;
		if (this.#r.set(i, a + 1), t) {
			let t = this.#i.get(i) ?? 0;
			this.#i.set(i, t + 1);
		}
	}
	decrement(t, i, a) {
		let o = this.#r.get(i) ?? 0;
		if (o === 1 ? this.#r.delete(i) : this.#r.set(i, o - 1), t) {
			let t = this.#i.get(i) ?? 0;
			t === 1 ? this.#i.delete(i) : this.#i.set(i, t - 1);
		}
		this.#f || a || (this.#f = !0, queue_micro_task(() => {
			this.#f = !1, this.flush();
		}));
	}
	transfer_effects(t, i) {
		for (let i of t) this.#c.add(i);
		for (let t of i) this.#l.add(t);
		t.clear(), i.clear();
	}
	oncommit(t) {
		this.#e.add(t);
	}
	ondiscard(t) {
		this.#t.add(t);
	}
	on_fork_commit(t) {
		this.#n.add(t);
	}
	run_fork_commit_callbacks() {
		for (let t of this.#n) t(this);
		this.#n.clear();
	}
	settled() {
		return (this.#a ??= deferred()).promise;
	}
	static ensure() {
		if (current_batch === null) {
			let i = current_batch = new t();
			is_processing || (batches.add(current_batch), is_flushing_sync || queue_micro_task(() => {
				current_batch === i && i.flush();
			}));
		}
		return current_batch;
	}
	apply() {
		batch_values = null;
	}
	schedule(t) {
		if (last_scheduled_effect = t, t.b?.is_pending && t.f & 16777228 && !(t.f & 32768)) {
			t.b.defer_effect(t);
			return;
		}
		for (var i = t; i.parent !== null;) {
			i = i.parent;
			var a = i.f;
			if (collected_effects !== null && i === active_effect && (active_reaction === null || !(active_reaction.f & 2)) && !legacy_is_updating_store) return;
			if (a & 96) {
				if (!(a & 1024)) return;
				i.f ^= CLEAN;
			}
		}
		this.#o.push(i);
	}
};
function flushSync(t) {
	var i = is_flushing_sync;
	is_flushing_sync = !0;
	try {
		var a;
		for (t && (current_batch !== null && !current_batch.is_fork && current_batch.flush(), a = t());;) {
			if (flush_tasks(), current_batch === null) return a;
			current_batch.flush();
		}
	} finally {
		is_flushing_sync = i;
	}
}
function infinite_loop_guard() {
	try {
		effect_update_depth_exceeded();
	} catch (t) {
		invoke_error_boundary(t, last_scheduled_effect);
	}
}
let eager_block_effects = null;
function flush_queued_effects(t) {
	var i = t.length;
	if (i !== 0) {
		for (var a = 0; a < i;) {
			var o = t[a++];
			if (!(o.f & 24576) && is_dirty(o) && (eager_block_effects = /* @__PURE__ */ new Set(), update_effect(o), o.deps === null && o.first === null && o.nodes === null && o.teardown === null && o.ac === null && unlink_effect(o), eager_block_effects?.size > 0)) {
				old_values.clear();
				for (let t of eager_block_effects) {
					if (t.f & 24576) continue;
					let i = [t], a = t.parent;
					for (; a !== null;) eager_block_effects.has(a) && (eager_block_effects.delete(a), i.push(a)), a = a.parent;
					for (let t = i.length - 1; t >= 0; t--) {
						let a = i[t];
						a.f & 24576 || update_effect(a);
					}
				}
				eager_block_effects.clear();
			}
		}
		eager_block_effects = null;
	}
}
function mark_effects(t, i, a, o) {
	if (!a.has(t) && (a.add(t), t.reactions !== null)) for (let s of t.reactions) {
		let t = s.f;
		t & 2 ? mark_effects(s, i, a, o) : t & 4194320 && !(t & 2048) && depends_on(s, i, o) && (set_signal_status(s, DIRTY), schedule_effect(s));
	}
}
function depends_on(t, i, a) {
	let o = a.get(t);
	if (o !== void 0) return o;
	if (t.deps !== null) for (let o of t.deps) {
		if (includes.call(i, o)) return !0;
		if (o.f & 2 && depends_on(o, i, a)) return a.set(o, !0), !0;
	}
	return a.set(t, !1), !1;
}
function schedule_effect(t) {
	current_batch.schedule(t);
}
function reset_branch(t, i) {
	if (!(t.f & 32 && t.f & 1024)) {
		t.f & 2048 ? i.d.push(t) : t.f & 4096 && i.m.push(t), set_signal_status(t, CLEAN);
		for (var a = t.first; a !== null;) reset_branch(a, i), a = a.next;
	}
}
function reset_all(t) {
	set_signal_status(t, CLEAN);
	for (var i = t.first; i !== null;) reset_all(i), i = i.next;
}
function createSubscriber(t) {
	let i = 0, a = source(0), o;
	return () => {
		effect_tracking() && (get$1(a), render_effect(() => (i === 0 && (o = untrack(() => t(() => increment(a)))), i += 1, () => {
			queue_micro_task(() => {
				--i, i === 0 && (o?.(), o = void 0, increment(a));
			});
		})));
	};
}
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
function boundary(t, i, a, o) {
	new Boundary(t, i, a, o);
}
var Boundary = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = hydrating ? hydrate_node : null;
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
	#h = createSubscriber(() => (this.#m = source(this.#l), () => {
		this.#m = null;
	}));
	constructor(t, i, a, o) {
		this.#e = t, this.#n = i, this.#r = (t) => {
			var i = active_effect;
			i.b = this, i.f |= 128, a(t);
		}, this.parent = active_effect.b, this.transform_error = o ?? this.parent?.transform_error ?? ((t) => t), this.#i = block(() => {
			if (hydrating) {
				let t = this.#t;
				hydrate_next();
				let i = t.data === "[!";
				if (t.data.startsWith("[?")) {
					let i = JSON.parse(t.data.slice(2));
					this.#_(i);
				} else i ? this.#v() : this.#g();
			} else this.#y();
		}, flags), hydrating && (this.#e = hydrate_node);
	}
	#g() {
		try {
			this.#a = branch(() => this.#r(this.#e));
		} catch (t) {
			this.error(t);
		}
	}
	#_(t) {
		let i = this.#n.failed;
		i && (this.#s = branch(() => {
			i(this.#e, () => t, () => () => {});
		}));
	}
	#v() {
		let t = this.#n.pending;
		t && (this.is_pending = !0, this.#o = branch(() => t(this.#e)), queue_micro_task(() => {
			var t = this.#c = document.createDocumentFragment(), i = create_text();
			t.append(i), this.#a = this.#x(() => branch(() => this.#r(i))), this.#u === 0 && (this.#e.before(t), this.#c = null, pause_effect(this.#o, () => {
				this.#o = null;
			}), this.#b(current_batch));
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = branch(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var t = this.#c = document.createDocumentFragment();
				move_effect(this.#a, t);
				let i = this.#n.pending;
				this.#o = branch(() => i(this.#e));
			} else this.#b(current_batch);
		} catch (t) {
			this.error(t);
		}
	}
	#b(t) {
		this.is_pending = !1, t.transfer_effects(this.#f, this.#p);
	}
	defer_effect(t) {
		defer_effect(t, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(t) {
		var i = active_effect, a = active_reaction, o = component_context;
		set_active_effect(this.#i), set_active_reaction(this.#i), set_component_context(this.#i.ctx);
		try {
			return Batch.ensure(), t();
		} catch (t) {
			return handle_error(t), null;
		} finally {
			set_active_effect(i), set_active_reaction(a), set_component_context(o);
		}
	}
	#S(t, i) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(t, i);
			return;
		}
		this.#u += t, this.#u === 0 && (this.#b(i), this.#o && pause_effect(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(t, i) {
		this.#S(t, i), this.#l += t, !(!this.#m || this.#d) && (this.#d = !0, queue_micro_task(() => {
			this.#d = !1, this.#m && internal_set(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), get$1(this.#m);
	}
	error(t) {
		if (!this.#n.onerror && !this.#n.failed) throw t;
		current_batch?.is_fork ? (this.#a && current_batch.skip_effect(this.#a), this.#o && current_batch.skip_effect(this.#o), this.#s && current_batch.skip_effect(this.#s), current_batch.on_fork_commit(() => {
			this.#C(t);
		})) : this.#C(t);
	}
	#C(t) {
		this.#a &&= (destroy_effect(this.#a), null), this.#o &&= (destroy_effect(this.#o), null), this.#s &&= (destroy_effect(this.#s), null), hydrating && (set_hydrate_node(this.#t), next(), set_hydrate_node(skip_nodes()));
		var i = this.#n.onerror;
		let a = this.#n.failed;
		var o = !1, s = !1;
		let c = () => {
			if (o) {
				svelte_boundary_reset_noop();
				return;
			}
			o = !0, s && svelte_boundary_reset_onerror(), this.#s !== null && pause_effect(this.#s, () => {
				this.#s = null;
			}), this.#x(() => {
				this.#y();
			});
		}, l = (t) => {
			try {
				s = !0, i?.(t, c), s = !1;
			} catch (t) {
				invoke_error_boundary(t, this.#i && this.#i.parent);
			}
			a && (this.#s = this.#x(() => {
				try {
					return branch(() => {
						var i = active_effect;
						i.b = this, i.f |= 128, a(this.#e, () => t, () => c);
					});
				} catch (t) {
					return invoke_error_boundary(t, this.#i.parent), null;
				}
			}));
		};
		queue_micro_task(() => {
			var i;
			try {
				i = this.transform_error(t);
			} catch (t) {
				invoke_error_boundary(t, this.#i && this.#i.parent);
				return;
			}
			typeof i == "object" && i && typeof i.then == "function" ? i.then(l, (t) => invoke_error_boundary(t, this.#i && this.#i.parent)) : l(i);
		});
	}
};
function flatten(t, i, a, o) {
	let s = is_runes() ? derived : derived_safe_equal;
	var c = t.filter((t) => !t.settled);
	if (a.length === 0 && c.length === 0) {
		o(i.map(s));
		return;
	}
	var l = active_effect, u = capture(), d = c.length === 1 ? c[0].promise : c.length > 1 ? Promise.all(c.map((t) => t.promise)) : null;
	function f(t) {
		u();
		try {
			o(t);
		} catch (t) {
			l.f & 16384 || invoke_error_boundary(t, l);
		}
		unset_context();
	}
	if (a.length === 0) {
		d.then(() => f(i.map(s)));
		return;
	}
	var p = increment_pending();
	function m() {
		Promise.all(a.map((t) => /* @__PURE__ */ async_derived(t))).then((t) => f([...i.map(s), ...t])).catch((t) => invoke_error_boundary(t, l)).finally(() => p());
	}
	d ? d.then(() => {
		u(), m(), unset_context();
	}) : m();
}
function capture() {
	var t = active_effect, i = active_reaction, a = component_context, o = current_batch;
	return function(s = !0) {
		set_active_effect(t), set_active_reaction(i), set_component_context(a), s && !(t.f & 16384) && (o?.activate(), o?.apply());
	};
}
function unset_context(t = !0) {
	set_active_effect(null), set_active_reaction(null), set_component_context(null), t && current_batch?.deactivate();
}
function increment_pending() {
	var t = active_effect, i = t.b, a = current_batch, o = i.is_rendered();
	return i.update_pending_count(1, a), a.increment(o, t), (s = !1) => {
		i.update_pending_count(-1, a), a.decrement(o, t, s);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function derived(t) {
	var i = 2 | DIRTY;
	return active_effect !== null && (active_effect.f |= EFFECT_PRESERVED), {
		ctx: component_context,
		deps: null,
		effects: null,
		equals,
		f: i,
		fn: t,
		reactions: null,
		rv: 0,
		v: UNINITIALIZED,
		wv: 0,
		parent: active_effect,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function async_derived(t, i, a) {
	let o = active_effect;
	o === null && async_derived_orphan();
	var s = void 0, c = source(UNINITIALIZED), l = !active_reaction, u = /* @__PURE__ */ new Map();
	return async_effect(() => {
		var i = active_effect, a = deferred();
		s = a.promise;
		try {
			Promise.resolve(t()).then(a.resolve, a.reject).finally(unset_context);
		} catch (t) {
			a.reject(t), unset_context();
		}
		var d = current_batch;
		if (l) {
			if (i.f & 32768) var f = increment_pending();
			if (o.b.is_rendered()) u.get(d)?.reject(STALE_REACTION), u.delete(d);
			else {
				for (let t of u.values()) t.reject(STALE_REACTION);
				u.clear();
			}
			u.set(d, a);
		}
		let p = (t, a = void 0) => {
			if (f && f(a === STALE_REACTION), !(a === STALE_REACTION || i.f & 16384)) {
				if (d.activate(), a) c.f |= ERROR_VALUE, internal_set(c, a);
				else {
					c.f & 8388608 && (c.f ^= ERROR_VALUE), internal_set(c, t);
					for (let [t, i] of u) {
						if (u.delete(t), t === d) break;
						i.reject(STALE_REACTION);
					}
				}
				d.deactivate();
			}
		};
		a.promise.then(p, (t) => p(null, t || "unknown"));
	}), teardown(() => {
		for (let t of u.values()) t.reject(STALE_REACTION);
	}), new Promise((t) => {
		function i(a) {
			function o() {
				a === s ? t(c) : i(s);
			}
			a.then(o, o);
		}
		i(s);
	});
}
/* @__NO_SIDE_EFFECTS__ */
function user_derived(t) {
	let i = /* @__PURE__ */ derived(t);
	return push_reaction_value(i), i;
}
/* @__NO_SIDE_EFFECTS__ */
function derived_safe_equal(t) {
	let i = /* @__PURE__ */ derived(t);
	return i.equals = safe_equals, i;
}
function destroy_derived_effects(t) {
	var i = t.effects;
	if (i !== null) {
		t.effects = null;
		for (var a = 0; a < i.length; a += 1) destroy_effect(i[a]);
	}
}
function execute_derived(t) {
	var i, a = active_effect, o = t.parent;
	if (!is_destroying_effect && o !== null && o.f & 24576) return derived_inert(), t.v;
	set_active_effect(o);
	try {
		t.f &= ~WAS_MARKED, destroy_derived_effects(t), i = update_reaction(t);
	} finally {
		set_active_effect(a);
	}
	return i;
}
function update_derived(t) {
	var i = execute_derived(t);
	if (!t.equals(i) && (t.wv = increment_write_version(), (!current_batch?.is_fork || t.deps === null) && (current_batch === null ? t.v = i : current_batch.capture(t, i, !0), t.deps === null))) {
		set_signal_status(t, CLEAN);
		return;
	}
	is_destroying_effect || (batch_values === null ? update_derived_status(t) : (effect_tracking() || current_batch?.is_fork) && batch_values.set(t, i));
}
function freeze_derived_effects(t) {
	if (t.effects !== null) for (let i of t.effects) (i.teardown || i.ac) && (i.teardown?.(), i.ac?.abort(STALE_REACTION), i.teardown = noop$1, i.ac = null, remove_reactions(i, 0), destroy_effect_children(i));
}
function unfreeze_derived_effects(t) {
	if (t.effects !== null) for (let i of t.effects) i.teardown && update_effect(i);
}
let eager_effects = /* @__PURE__ */ new Set();
const old_values = /* @__PURE__ */ new Map();
var eager_effects_deferred = !1;
function source(t, i) {
	return {
		f: 0,
		v: t,
		reactions: null,
		equals,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function state(t, i) {
	let a = source(t, i);
	return push_reaction_value(a), a;
}
/* @__NO_SIDE_EFFECTS__ */
function mutable_source(t, i = !1, a = !0) {
	let o = source(t);
	return i || (o.equals = safe_equals), legacy_mode_flag && a && component_context !== null && component_context.l !== null && (component_context.l.s ??= []).push(o), o;
}
function set(t, i, a = !1) {
	return active_reaction !== null && (!untracking || active_reaction.f & 131072) && is_runes() && active_reaction.f & 4325394 && (current_sources === null || !includes.call(current_sources, t)) && state_unsafe_mutation(), internal_set(t, a ? proxy(i) : i, legacy_updates);
}
function internal_set(t, i, a = null) {
	if (!t.equals(i)) {
		old_values.set(t, is_destroying_effect ? i : t.v);
		var o = Batch.ensure();
		if (o.capture(t, i), t.f & 2) {
			let i = t;
			t.f & 2048 && execute_derived(i), batch_values === null && update_derived_status(i);
		}
		t.wv = increment_write_version(), mark_reactions(t, DIRTY, a), is_runes() && active_effect !== null && active_effect.f & 1024 && !(active_effect.f & 96) && (untracked_writes === null ? set_untracked_writes([t]) : untracked_writes.push(t)), !o.is_fork && eager_effects.size > 0 && !eager_effects_deferred && flush_eager_effects();
	}
	return i;
}
function flush_eager_effects() {
	eager_effects_deferred = !1;
	for (let t of eager_effects) t.f & 1024 && set_signal_status(t, MAYBE_DIRTY), is_dirty(t) && update_effect(t);
	eager_effects.clear();
}
function increment(t) {
	set(t, t.v + 1);
}
function mark_reactions(t, i, a) {
	var o = t.reactions;
	if (o !== null) for (var s = is_runes(), c = o.length, l = 0; l < c; l++) {
		var u = o[l], d = u.f;
		if (!(!s && u === active_effect)) {
			var f = (d & DIRTY) === 0;
			if (f && set_signal_status(u, i), d & 2) {
				var p = u;
				batch_values?.delete(p), d & 65536 || (d & 512 && (active_effect === null || !(active_effect.f & 2097152)) && (u.f |= WAS_MARKED), mark_reactions(p, MAYBE_DIRTY, a));
			} else if (f) {
				var m = u;
				d & 16 && eager_block_effects !== null && eager_block_effects.add(m), a === null ? schedule_effect(m) : a.push(m);
			}
		}
	}
}
function autofocus(t, i) {
	if (i) {
		let i = document.body;
		t.autofocus = !0, queue_micro_task(() => {
			document.activeElement === i && t.focus();
		});
	}
}
var listening_to_form_reset = !1;
function add_form_reset_listener() {
	listening_to_form_reset || (listening_to_form_reset = !0, document.addEventListener("reset", (t) => {
		Promise.resolve().then(() => {
			if (!t.defaultPrevented) for (let i of t.target.elements) i.__on_r?.();
		});
	}, { capture: !0 }));
}
function without_reactive_context(t) {
	var i = active_reaction, a = active_effect;
	set_active_reaction(null), set_active_effect(null);
	try {
		return t();
	} finally {
		set_active_reaction(i), set_active_effect(a);
	}
}
function listen_to_event_and_reset_event(t, i, a, o = a) {
	t.addEventListener(i, () => without_reactive_context(a));
	let s = t.__on_r;
	s ? t.__on_r = () => {
		s(), o(!0);
	} : t.__on_r = () => o(!0), add_form_reset_listener();
}
var is_updating_effect = !1;
let is_destroying_effect = !1;
function set_is_destroying_effect(t) {
	is_destroying_effect = t;
}
let active_reaction = null, untracking = !1;
function set_active_reaction(t) {
	active_reaction = t;
}
let active_effect = null;
function set_active_effect(t) {
	active_effect = t;
}
let current_sources = null;
function push_reaction_value(t) {
	active_reaction !== null && (current_sources === null ? current_sources = [t] : current_sources.push(t));
}
let new_deps = null, skipped_deps = 0, untracked_writes = null;
function set_untracked_writes(t) {
	untracked_writes = t;
}
let write_version = 1;
var read_version = 0;
let update_version = read_version;
function set_update_version(t) {
	update_version = t;
}
function increment_write_version() {
	return ++write_version;
}
function is_dirty(t) {
	var i = t.f;
	if (i & 2048) return !0;
	if (i & 2 && (t.f &= ~WAS_MARKED), i & 4096) {
		for (var a = t.deps, o = a.length, s = 0; s < o; s++) {
			var c = a[s];
			if (is_dirty(c) && update_derived(c), c.wv > t.wv) return !0;
		}
		i & 512 && batch_values === null && set_signal_status(t, CLEAN);
	}
	return !1;
}
function schedule_possible_effect_self_invalidation(t, i, a = !0) {
	var o = t.reactions;
	if (o !== null && !(current_sources !== null && includes.call(current_sources, t))) for (var s = 0; s < o.length; s++) {
		var l = o[s];
		l.f & 2 ? schedule_possible_effect_self_invalidation(l, i, !1) : i === l && (a ? set_signal_status(l, DIRTY) : l.f & 1024 && set_signal_status(l, MAYBE_DIRTY), schedule_effect(l));
	}
}
function update_reaction(t) {
	var i = new_deps, a = skipped_deps, o = untracked_writes, s = active_reaction, c = current_sources, l = component_context, u = untracking, d = update_version, f = t.f;
	new_deps = null, skipped_deps = 0, untracked_writes = null, active_reaction = f & 96 ? null : t, current_sources = null, set_component_context(t.ctx), untracking = !1, update_version = ++read_version, t.ac !== null && (without_reactive_context(() => {
		t.ac.abort(STALE_REACTION);
	}), t.ac = null);
	try {
		t.f |= REACTION_IS_UPDATING;
		var p = t.fn, m = p();
		t.f |= REACTION_RAN;
		var h = t.deps, g = current_batch?.is_fork;
		if (new_deps !== null) {
			var _;
			if (g || remove_reactions(t, skipped_deps), h !== null && skipped_deps > 0) for (h.length = skipped_deps + new_deps.length, _ = 0; _ < new_deps.length; _++) h[skipped_deps + _] = new_deps[_];
			else t.deps = h = new_deps;
			if (effect_tracking() && t.f & 512) for (_ = skipped_deps; _ < h.length; _++) (h[_].reactions ??= []).push(t);
		} else !g && h !== null && skipped_deps < h.length && (remove_reactions(t, skipped_deps), h.length = skipped_deps);
		if (is_runes() && untracked_writes !== null && !untracking && h !== null && !(t.f & 6146)) for (_ = 0; _ < untracked_writes.length; _++) schedule_possible_effect_self_invalidation(untracked_writes[_], t);
		if (s !== null && s !== t) {
			if (read_version++, s.deps !== null) for (let t = 0; t < a; t += 1) s.deps[t].rv = read_version;
			if (i !== null) for (let t of i) t.rv = read_version;
			untracked_writes !== null && (o === null ? o = untracked_writes : o.push(...untracked_writes));
		}
		return t.f & 8388608 && (t.f ^= ERROR_VALUE), m;
	} catch (t) {
		return handle_error(t);
	} finally {
		t.f ^= REACTION_IS_UPDATING, new_deps = i, skipped_deps = a, untracked_writes = o, active_reaction = s, current_sources = c, set_component_context(l), untracking = u, update_version = d;
	}
}
function remove_reaction(t, i) {
	let a = i.reactions;
	if (a !== null) {
		var o = index_of.call(a, t);
		if (o !== -1) {
			var l = a.length - 1;
			l === 0 ? a = i.reactions = null : (a[o] = a[l], a.pop());
		}
	}
	if (a === null && i.f & 2 && (new_deps === null || !includes.call(new_deps, i))) {
		var u = i;
		u.f & 512 && (u.f ^= 512, u.f &= ~WAS_MARKED), u.v !== UNINITIALIZED && update_derived_status(u), freeze_derived_effects(u), remove_reactions(u, 0);
	}
}
function remove_reactions(t, i) {
	var a = t.deps;
	if (a !== null) for (var o = i; o < a.length; o++) remove_reaction(t, a[o]);
}
function update_effect(t) {
	var i = t.f;
	if (!(i & 16384)) {
		set_signal_status(t, CLEAN);
		var a = active_effect, o = is_updating_effect;
		active_effect = t, is_updating_effect = !0;
		try {
			i & 16777232 ? destroy_block_effect_children(t) : destroy_effect_children(t), execute_effect_teardown(t);
			var s = update_reaction(t);
			t.teardown = typeof s == "function" ? s : null, t.wv = write_version;
		} finally {
			is_updating_effect = o, active_effect = a;
		}
	}
}
async function tick() {
	await Promise.resolve(), flushSync();
}
function get$1(t) {
	var i = (t.f & 2) != 0;
	if (null?.add(t), active_reaction !== null && !untracking && !(active_effect !== null && active_effect.f & 16384) && (current_sources === null || !includes.call(current_sources, t))) {
		var a = active_reaction.deps;
		if (active_reaction.f & 2097152) t.rv < read_version && (t.rv = read_version, new_deps === null && a !== null && a[skipped_deps] === t ? skipped_deps++ : new_deps === null ? new_deps = [t] : new_deps.push(t));
		else {
			(active_reaction.deps ??= []).push(t);
			var o = t.reactions;
			o === null ? t.reactions = [active_reaction] : includes.call(o, active_reaction) || o.push(active_reaction);
		}
	}
	if (is_destroying_effect && old_values.has(t)) return old_values.get(t);
	if (i) {
		var s = t;
		if (is_destroying_effect) {
			var l = s.v;
			return (!(s.f & 1024) && s.reactions !== null || depends_on_old_values(s)) && (l = execute_derived(s)), old_values.set(s, l), l;
		}
		var u = (s.f & 512) == 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & 512) != 0), d = (s.f & REACTION_RAN) === 0;
		is_dirty(s) && (u && (s.f |= 512), update_derived(s)), u && !d && (unfreeze_derived_effects(s), reconnect(s));
	}
	if (batch_values?.has(t)) return batch_values.get(t);
	if (t.f & 8388608) throw t.v;
	return t.v;
}
function reconnect(t) {
	if (t.f |= 512, t.deps !== null) for (let i of t.deps) (i.reactions ??= []).push(t), i.f & 2 && !(i.f & 512) && (unfreeze_derived_effects(i), reconnect(i));
}
function depends_on_old_values(t) {
	if (t.v === UNINITIALIZED) return !0;
	if (t.deps === null) return !1;
	for (let i of t.deps) if (old_values.has(i) || i.f & 2 && depends_on_old_values(i)) return !0;
	return !1;
}
function untrack(t) {
	var i = untracking;
	try {
		return untracking = !0, t();
	} finally {
		untracking = i;
	}
}
function deep_read_state(t) {
	if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
		if (STATE_SYMBOL in t) deep_read(t);
		else if (!Array.isArray(t)) for (let i in t) {
			let a = t[i];
			typeof a == "object" && a && STATE_SYMBOL in a && deep_read(a);
		}
	}
}
function deep_read(t, i = /* @__PURE__ */ new Set()) {
	if (typeof t == "object" && t && !(t instanceof EventTarget) && !i.has(t)) {
		for (let a in i.add(t), t instanceof Date && t.getTime(), t) try {
			deep_read(t[a], i);
		} catch {}
		let a = get_prototype_of(t);
		if (a !== Object.prototype && a !== Array.prototype && a !== Map.prototype && a !== Set.prototype && a !== Date.prototype) {
			let i = get_descriptors(a);
			for (let a in i) {
				let o = i[a].get;
				if (o) try {
					o.call(t);
				} catch {}
			}
		}
	}
}
function validate_effect(t) {
	active_effect === null && (active_reaction === null && effect_orphan(t), effect_in_unowned_derived()), is_destroying_effect && effect_in_teardown(t);
}
function push_effect(t, i) {
	var a = i.last;
	a === null ? i.last = i.first = t : (a.next = t, t.prev = a, i.last = t);
}
function create_effect(t, i) {
	var a = active_effect;
	a !== null && a.f & 8192 && (t |= INERT);
	var o = {
		ctx: component_context,
		deps: null,
		nodes: null,
		f: t | 2560,
		first: null,
		fn: i,
		last: null,
		next: null,
		parent: a,
		b: a && a.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	current_batch?.register_created_effect(o);
	var s = o;
	if (t & 4) collected_effects === null ? Batch.ensure().schedule(o) : collected_effects.push(o);
	else if (i !== null) {
		try {
			update_effect(o);
		} catch (t) {
			throw destroy_effect(o), t;
		}
		s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && !(s.f & 524288) && (s = s.first, t & 16 && t & 65536 && s !== null && (s.f |= EFFECT_TRANSPARENT));
	}
	if (s !== null && (s.parent = a, a !== null && push_effect(s, a), active_reaction !== null && active_reaction.f & 2 && !(t & 64))) {
		var c = active_reaction;
		(c.effects ??= []).push(s);
	}
	return o;
}
function effect_tracking() {
	return active_reaction !== null && !untracking;
}
function teardown(t) {
	let i = create_effect(8, null);
	return set_signal_status(i, CLEAN), i.teardown = t, i;
}
function user_effect(t) {
	validate_effect("$effect");
	var i = active_effect.f;
	if (!active_reaction && i & 32 && !(i & 32768)) {
		var a = component_context;
		(a.e ??= []).push(t);
	} else return create_user_effect(t);
}
function create_user_effect(t) {
	return create_effect(4 | USER_EFFECT, t);
}
function user_pre_effect(t) {
	return validate_effect("$effect.pre"), create_effect(8 | USER_EFFECT, t);
}
function effect_root(t) {
	Batch.ensure();
	let i = create_effect(64 | EFFECT_PRESERVED, t);
	return () => {
		destroy_effect(i);
	};
}
function component_root(t) {
	Batch.ensure();
	let i = create_effect(64 | EFFECT_PRESERVED, t);
	return (t = {}) => new Promise((a) => {
		t.outro ? pause_effect(i, () => {
			destroy_effect(i), a(void 0);
		}) : (destroy_effect(i), a(void 0));
	});
}
function effect(t) {
	return create_effect(4, t);
}
function async_effect(t) {
	return create_effect(4194304 | EFFECT_PRESERVED, t);
}
function render_effect(t, i = 0) {
	return create_effect(8 | i, t);
}
function template_effect(t, i = [], a = [], o = []) {
	flatten(o, i, a, (i) => {
		create_effect(8, () => t(...i.map(get$1)));
	});
}
function block(t, i = 0) {
	return create_effect(16 | i, t);
}
function managed(t, i = 0) {
	return create_effect(16777216 | i, t);
}
function branch(t) {
	return create_effect(32 | EFFECT_PRESERVED, t);
}
function execute_effect_teardown(t) {
	var i = t.teardown;
	if (i !== null) {
		let t = is_destroying_effect, a = active_reaction;
		set_is_destroying_effect(!0), set_active_reaction(null);
		try {
			i.call(null);
		} finally {
			set_is_destroying_effect(t), set_active_reaction(a);
		}
	}
}
function destroy_effect_children(t, i = !1) {
	var a = t.first;
	for (t.first = t.last = null; a !== null;) {
		let t = a.ac;
		t !== null && without_reactive_context(() => {
			t.abort(STALE_REACTION);
		});
		var o = a.next;
		a.f & 64 ? a.parent = null : destroy_effect(a, i), a = o;
	}
}
function destroy_block_effect_children(t) {
	for (var i = t.first; i !== null;) {
		var a = i.next;
		i.f & 32 || destroy_effect(i), i = a;
	}
}
function destroy_effect(t, i = !0) {
	var a = !1;
	(i || t.f & 262144) && t.nodes !== null && t.nodes.end !== null && (remove_effect_dom(t.nodes.start, t.nodes.end), a = !0), set_signal_status(t, DESTROYING), destroy_effect_children(t, i && !a), remove_reactions(t, 0);
	var o = t.nodes && t.nodes.t;
	if (o !== null) for (let t of o) t.stop();
	execute_effect_teardown(t), t.f ^= DESTROYING, t.f |= 16384;
	var s = t.parent;
	s !== null && s.first !== null && unlink_effect(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function remove_effect_dom(t, i) {
	for (; t !== null;) {
		var a = t === i ? null : /* @__PURE__ */ get_next_sibling(t);
		t.remove(), t = a;
	}
}
function unlink_effect(t) {
	var i = t.parent, a = t.prev, o = t.next;
	a !== null && (a.next = o), o !== null && (o.prev = a), i !== null && (i.first === t && (i.first = o), i.last === t && (i.last = a));
}
function pause_effect(t, i, a = !0) {
	var o = [];
	pause_children(t, o, !0);
	var s = () => {
		a && destroy_effect(t), i && i();
	}, c = o.length;
	if (c > 0) {
		var l = () => --c || s();
		for (var u of o) u.out(l);
	} else s();
}
function pause_children(t, i, a) {
	if (!(t.f & 8192)) {
		t.f ^= INERT;
		var o = t.nodes && t.nodes.t;
		if (o !== null) for (let t of o) (t.is_global || a) && i.push(t);
		for (var s = t.first; s !== null;) {
			var c = s.next;
			if (!(s.f & 64)) {
				var l = (s.f & 65536) != 0 || (s.f & 32) != 0 && (t.f & 16) != 0;
				pause_children(s, i, l ? a : !1);
			}
			s = c;
		}
	}
}
function resume_effect(t) {
	resume_children(t, !0);
}
function resume_children(t, i) {
	if (t.f & 8192) {
		t.f ^= INERT, t.f & 1024 || (set_signal_status(t, DIRTY), Batch.ensure().schedule(t));
		for (var a = t.first; a !== null;) {
			var o = a.next, s = (a.f & 65536) != 0 || (a.f & 32) != 0;
			resume_children(a, s ? i : !1), a = o;
		}
		var c = t.nodes && t.nodes.t;
		if (c !== null) for (let t of c) (t.is_global || i) && t.in();
	}
}
function move_effect(t, i) {
	if (t.nodes) for (var a = t.nodes.start, o = t.nodes.end; a !== null;) {
		var s = a === o ? null : /* @__PURE__ */ get_next_sibling(a);
		i.append(a), a = s;
	}
}
var defaultAppState = { version: "" };
const appStore = ((t) => {
	let { subscribe: i, set: a, update: o } = writable({
		...defaultAppState,
		...t
	});
	return {
		subscribe: i,
		init: (t) => a(t),
		updateVersion: (t) => o((i) => ({
			...i,
			version: t
		})),
		resetVersion: () => o((t) => ({
			...t,
			version: defaultAppState.version
		}))
	};
})();
var defaultClientState = {
	leader: !1,
	logged_in: !1,
	name: "",
	rank: -1,
	profile: {
		image: "",
		text: ""
	}
};
const clientStore = ((t) => {
	let { subscribe: i, set: a, update: o } = writable({
		...defaultClientState,
		...t
	});
	return {
		subscribe: i,
		init: (t) => a(t),
		updateName: (t) => o((i) => ({
			...i,
			name: t
		})),
		resetName: () => o((t) => ({
			...t,
			name: defaultClientState.name
		})),
		updateLoggedIn: (t) => o((i) => ({
			...i,
			logged_in: t
		})),
		resetLoggedIn: () => o((t) => ({
			...t,
			logged_in: defaultClientState.logged_in
		})),
		updateRank: (t) => o((i) => ({
			...i,
			rank: t
		})),
		resetRank: () => o((t) => ({
			...t,
			rank: defaultClientState.rank
		}))
	};
})();
var defaultPageState = { csrf: "" };
const pageStore = ((t) => {
	let { subscribe: i, set: a, update: o } = writable({
		...defaultPageState,
		...t
	});
	return {
		subscribe: i,
		init: (t) => a(t),
		updateCSRF: (t) => o((i) => ({
			...i,
			csrf: t
		})),
		resetCSRF: () => o((t) => ({
			...t,
			csrf: defaultPageState.csrf
		}))
	};
})();
var defaultSocketState = { connected: !0 };
const socketStore = ((t) => {
	let { subscribe: i, set: a, update: o } = writable({
		...defaultSocketState,
		...t
	});
	return {
		subscribe: i,
		init: (t) => a(t),
		updateConnected: (t) => o((i) => ({
			...i,
			connected: t
		})),
		resetConnected: () => o((t) => ({
			...t,
			connected: defaultSocketState.connected
		}))
	};
})();
var initClientStore = () => (clientStore.init({ ...window.CLIENT }), clientStore.subscribe((t) => {
	window.CLIENT = t;
})), initPageStore = () => {
	let t = document.getElementsByName("_csrf");
	if (!t) throw Error("no csrf collection found");
	if (t.length < 1) throw Error("no csrf elements found");
	let i = t.item(0);
	if (!i) throw Error("no csrf element found");
	let a = i.value;
	if (!a) throw Error("no csrf value found");
	pageStore.init({ csrf: a });
}, initAppStore = () => (appStore.init({ version: window.VERSION }), appStore.subscribe((t) => {
	window.VERSION = t.version;
})), initSocketStore = () => {
	socketStore.init(socketClient), socketClient.on("connect", () => socketStore.updateConnected(socketClient.connected)), socketClient.on("disconnect", () => socketStore.updateConnected(socketClient.connected));
};
const initStores = () => {
	let t = initClientStore(), i = initAppStore();
	return initPageStore(), initSocketStore(), () => {
		t(), i();
	};
};
var colorInfo = "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", legacyChatNotification = (t, i) => {
	let a = document.getElementById("messagebuffer");
	if (!a) return null;
	let o = document.createElement("div");
	return o.className = "server-msg-reconnect", o.style = `border: 1px ${i}`, o.textContent = t, a.appendChild(o), o;
};
const legacyChatInfo = (t) => legacyChatNotification(t, colorInfo), injectMainStylesheet = async () => new Promise((t, i) => {
	let a = new URL("dist/index.css", window.BASE_URL), o = document.createElement("link");
	o.rel = "stylesheet", o.type = "text/css", o.href = a.toString(), o.onload = () => requestAnimationFrame(() => t()), o.onerror = () => requestAnimationFrame(() => i()), document.head.appendChild(o);
}), removeLegacyStylesheets = () => {
	for (let t of [
		"//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css",
		"/css/sticky-footer-navbar.css",
		"/css/videojs-resolution-switcher.css",
		"/css/video-js.css",
		"/css/cytube.css"
	]) {
		let i = document.querySelector(`link[href="${t}"]`);
		if (!i) return;
		i.remove();
	}
	document.getElementById("usertheme")?.remove();
};
var setChannelJS = (t) => {
	window.CHANNEL.js = t;
	let i = document.querySelector("#cs-jstext");
	if (i && (i.value = t), window.USEROPTS.ignore_channeljs) return;
	let a = document.createElement("script");
	a.id = "chanjs", a.type = "text/javascript", a.textContent = t, document.body.append(a);
}, setChannelCSS = (t) => {
	window.CHANNEL.css = t;
	let i = document.querySelector("#cs-csstext");
	if (i && (i.value = t), window.USEROPTS.ignore_channelcss) return;
	let a = document.createElement("style");
	a.id = "chancss", a.textContent = t, document.head.append(a);
}, overrideChannelJS = (t) => {
	let i = document.querySelector("#chanjs");
	if (!i) {
		setChannelJS(t);
		return;
	}
	i.textContent !== t && (i.remove(), setChannelJS(t));
}, overrideChannelCSS = (t) => {
	let i = document.querySelector("#chancss");
	if (!i) {
		setChannelCSS(t);
		return;
	}
	i.textContent !== t && (i.remove(), setChannelCSS(t));
}, overrideCallbacks = () => {
	window.Callbacks.channelCSSJS = ({ css: t, js: i }) => {
		t && overrideChannelCSS(t), i && overrideChannelJS(i);
	};
}, overrideFavicon = () => {
	let t = new URL("dist/favicon.ico", window.BASE_URL), i = document.createElement("link");
	i.href = t.toString(), i.type = "image/x-icon", i.rel = "shortcut icon", document.head.append(i);
}, overrideStyles = async () => {
	let t = legacyChatInfo("Loading styles...");
	await injectMainStylesheet(), removeLegacyStylesheets(), t && t.remove();
};
const initOverrides = async () => {
	overrideCallbacks(), overrideFavicon(), await overrideStyles();
};
function createAttachmentKey() {
	return Symbol("@attach");
}
function is_capture_event(t) {
	return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
var DELEGATED_EVENTS = [
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
function can_delegate_event(t) {
	return DELEGATED_EVENTS.includes(t);
}
var DOM_BOOLEAN_ATTRIBUTES = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), ATTRIBUTE_ALIASES = {
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
function normalize_attribute(t) {
	return t = t.toLowerCase(), ATTRIBUTE_ALIASES[t] ?? t;
}
[...DOM_BOOLEAN_ATTRIBUTES];
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(t) {
	return PASSIVE_EVENTS.includes(t);
}
const event_symbol = Symbol("events"), all_registered_events = /* @__PURE__ */ new Set(), root_event_handles = /* @__PURE__ */ new Set();
function replay_events(t) {
	if (!hydrating) return;
	t.removeAttribute("onload"), t.removeAttribute("onerror");
	let i = t.__e;
	i !== void 0 && (t.__e = void 0, queueMicrotask(() => {
		t.isConnected && t.dispatchEvent(i);
	}));
}
function create_event(t, i, a, o = {}) {
	function s(t) {
		if (o.capture || handle_event_propagation.call(i, t), !t.cancelBubble) return without_reactive_context(() => a?.call(this, t));
	}
	return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? queue_micro_task(() => {
		i.addEventListener(t, s, o);
	}) : i.addEventListener(t, s, o), s;
}
function on(t, i, a, o = {}) {
	var s = create_event(i, t, a, o);
	return () => {
		t.removeEventListener(i, s, o);
	};
}
function event(t, i, a, o, s) {
	var c = {
		capture: o,
		passive: s
	}, l = create_event(t, i, a, c);
	(i === document.body || i === window || i === document || i instanceof HTMLMediaElement) && teardown(() => {
		i.removeEventListener(t, l, c);
	});
}
function delegated(t, i, a) {
	(i[event_symbol] ??= {})[t] = a;
}
function delegate(t) {
	for (var i = 0; i < t.length; i++) all_registered_events.add(t[i]);
	for (var a of root_event_handles) a(t);
}
var last_propagated_event = null;
function handle_event_propagation(t) {
	var i = this, a = i.ownerDocument, o = t.type, s = t.composedPath?.() || [], c = s[0] || t.target;
	last_propagated_event = t;
	var l = 0, d = last_propagated_event === t && t[event_symbol];
	if (d) {
		var f = s.indexOf(d);
		if (f !== -1 && (i === document || i === window)) {
			t[event_symbol] = i;
			return;
		}
		var p = s.indexOf(i);
		if (p === -1) return;
		f <= p && (l = f);
	}
	if (c = s[l] || t.target, c !== i) {
		define_property(t, "currentTarget", {
			configurable: !0,
			get() {
				return c || a;
			}
		});
		var m = active_reaction, h = active_effect;
		set_active_reaction(null), set_active_effect(null);
		try {
			for (var g, _ = []; c !== null;) {
				var v = c.assignedSlot || c.parentNode || c.host || null;
				try {
					var y = c[event_symbol]?.[o];
					y != null && (!c.disabled || t.target === c) && y.call(c, t);
				} catch (t) {
					g ? _.push(t) : g = t;
				}
				if (t.cancelBubble || v === i || v === null) break;
				c = v;
			}
			if (g) {
				for (let t of _) queueMicrotask(() => {
					throw t;
				});
				throw g;
			}
		} finally {
			t[event_symbol] = i, delete t.currentTarget, set_active_reaction(m), set_active_effect(h);
		}
	}
}
var policy = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (t) => t });
function create_trusted_html(t) {
	return policy?.createHTML(t) ?? t;
}
function create_fragment_from_html(t) {
	var i = create_element("template");
	return i.innerHTML = create_trusted_html(t.replaceAll("<!>", "<!---->")), i.content;
}
function assign_nodes(t, i) {
	var a = active_effect;
	a.nodes === null && (a.nodes = {
		start: t,
		end: i,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function from_html(t, i) {
	var a = (i & 1) != 0, o = (i & 2) != 0, s, c = !t.startsWith("<!>");
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		s === void 0 && (s = create_fragment_from_html(c ? t : "<!>" + t), a || (s = /* @__PURE__ */ get_first_child(s)));
		var i = o || is_firefox ? document.importNode(s, !0) : s.cloneNode(!0);
		if (a) {
			var l = /* @__PURE__ */ get_first_child(i), u = i.lastChild;
			assign_nodes(l, u);
		} else assign_nodes(i, i);
		return i;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function from_namespace(t, i, a = "svg") {
	var o = !t.startsWith("<!>"), s = (i & 1) != 0, c = `<${a}>${o ? t : "<!>" + t}</${a}>`, l;
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		if (!l) {
			var t = /* @__PURE__ */ get_first_child(create_fragment_from_html(c));
			if (s) for (l = document.createDocumentFragment(); /* @__PURE__ */ get_first_child(t);) l.appendChild(/* @__PURE__ */ get_first_child(t));
			else l = /* @__PURE__ */ get_first_child(t);
		}
		var i = l.cloneNode(!0);
		if (s) {
			var a = /* @__PURE__ */ get_first_child(i), o = i.lastChild;
			assign_nodes(a, o);
		} else assign_nodes(i, i);
		return i;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function from_svg(t, i) {
	return /* @__PURE__ */ from_namespace(t, i, "svg");
}
function text(t = "") {
	if (!hydrating) {
		var i = create_text(t + "");
		return assign_nodes(i, i), i;
	}
	var a = hydrate_node;
	return a.nodeType === 3 ? merge_text_nodes(a) : (a.before(a = create_text()), set_hydrate_node(a)), assign_nodes(a, a), a;
}
function comment() {
	if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
	var t = document.createDocumentFragment(), i = document.createComment(""), a = create_text();
	return t.append(i, a), assign_nodes(i, a), t;
}
function append(t, i) {
	if (hydrating) {
		var a = active_effect;
		(!(a.f & 32768) || a.nodes.end === null) && (a.nodes.end = hydrate_node), hydrate_next();
		return;
	}
	t !== null && t.before(i);
}
function props_id() {
	if (hydrating && hydrate_node && hydrate_node.nodeType === 8 && hydrate_node.textContent?.startsWith("$")) {
		let t = hydrate_node.textContent.substring(1);
		return hydrate_next(), t;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
let should_intro = !0;
function set_text(t, i) {
	var a = i == null ? "" : typeof i == "object" ? `${i}` : i;
	a !== (t.__t ??= t.nodeValue) && (t.__t = a, t.nodeValue = `${a}`);
}
function mount(t, i) {
	return _mount(t, i);
}
var listeners = /* @__PURE__ */ new Map();
function _mount(t, { target: i, anchor: a, props: o = {}, events: s, context: c, intro: u = !0, transformError: d }) {
	init_operations();
	var f = void 0, p = component_root(() => {
		var p = a ?? i.appendChild(create_text());
		boundary(p, { pending: () => {} }, (i) => {
			push({});
			var a = component_context;
			if (c && (a.c = c), s && (o.$$events = s), hydrating && assign_nodes(i, null), should_intro = u, f = t(i, o) || {}, should_intro = !0, hydrating && (active_effect.nodes.end = hydrate_node, hydrate_node === null || hydrate_node.nodeType !== 8 || hydrate_node.data !== "]")) throw hydration_mismatch(), HYDRATION_ERROR;
			pop();
		}, d);
		var m = /* @__PURE__ */ new Set(), h = (t) => {
			for (var a = 0; a < t.length; a++) {
				var o = t[a];
				if (!m.has(o)) {
					m.add(o);
					var s = is_passive_event(o);
					for (let t of [i, document]) {
						var c = listeners.get(t);
						c === void 0 && (c = /* @__PURE__ */ new Map(), listeners.set(t, c));
						var l = c.get(o);
						l === void 0 ? (t.addEventListener(o, handle_event_propagation, { passive: s }), c.set(o, 1)) : c.set(o, l + 1);
					}
				}
			}
		};
		return h(array_from(all_registered_events)), root_event_handles.add(h), () => {
			for (var t of m) for (let a of [i, document]) {
				var o = listeners.get(a), s = o.get(t);
				--s == 0 ? (a.removeEventListener(t, handle_event_propagation), o.delete(t), o.size === 0 && listeners.delete(a)) : o.set(t, s);
			}
			root_event_handles.delete(h), p !== a && p.parentNode?.removeChild(p);
		};
	});
	return mounted_components.set(f, p), f;
}
var mounted_components = /* @__PURE__ */ new WeakMap(), BranchManager = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(t, i = !0) {
		this.anchor = t, this.#i = i;
	}
	#a = (t) => {
		if (this.#e.has(t)) {
			var i = this.#e.get(t), a = this.#t.get(i);
			if (a) resume_effect(a), this.#r.delete(i);
			else {
				var o = this.#n.get(i);
				o && (this.#t.set(i, o.effect), this.#n.delete(i), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), a = o.effect);
			}
			for (let [i, a] of this.#e) {
				if (this.#e.delete(i), i === t) break;
				let o = this.#n.get(a);
				o && (destroy_effect(o.effect), this.#n.delete(a));
			}
			for (let [t, o] of this.#t) {
				if (t === i || this.#r.has(t)) continue;
				let s = () => {
					if (Array.from(this.#e.values()).includes(t)) {
						var i = document.createDocumentFragment();
						move_effect(o, i), i.append(create_text()), this.#n.set(t, {
							effect: o,
							fragment: i
						});
					} else destroy_effect(o);
					this.#r.delete(t), this.#t.delete(t);
				};
				this.#i || !a ? (this.#r.add(t), pause_effect(o, s, !1)) : s();
			}
		}
	};
	#o = (t) => {
		this.#e.delete(t);
		let i = Array.from(this.#e.values());
		for (let [t, a] of this.#n) i.includes(t) || (destroy_effect(a.effect), this.#n.delete(t));
	};
	ensure(t, i) {
		var a = current_batch, o = should_defer_append();
		if (i && !this.#t.has(t) && !this.#n.has(t)) if (o) {
			var s = document.createDocumentFragment(), c = create_text();
			s.append(c), this.#n.set(t, {
				effect: branch(() => i(c)),
				fragment: s
			});
		} else this.#t.set(t, branch(() => i(this.anchor)));
		if (this.#e.set(a, t), o) {
			for (let [i, o] of this.#t) i === t ? a.unskip_effect(o) : a.skip_effect(o);
			for (let [i, o] of this.#n) i === t ? a.unskip_effect(o.effect) : a.skip_effect(o.effect);
			a.oncommit(this.#a), a.ondiscard(this.#o);
		} else hydrating && (this.anchor = hydrate_node), this.#a(a);
	}
};
function if_block(t, i, a = !1) {
	var o;
	hydrating && (o = hydrate_node, hydrate_next());
	var s = new BranchManager(t), c = a ? EFFECT_TRANSPARENT : 0;
	function l(t, i) {
		if (hydrating) {
			var a = read_hydration_instruction(o);
			if (t !== parseInt(a.substring(1))) {
				var c = skip_nodes();
				set_hydrate_node(c), s.anchor = c, set_hydrating(!1), s.ensure(t, i), set_hydrating(!0);
				return;
			}
		}
		s.ensure(t, i);
	}
	block(() => {
		var t = !1;
		i((i, a = 0) => {
			t = !0, l(a, i);
		}), t || l(-1, null);
	}, c);
}
function snippet(t, i, ...a) {
	var o = new BranchManager(t);
	block(() => {
		let t = i() ?? null;
		o.ensure(t, t && ((i) => t(i, ...a)));
	}, EFFECT_TRANSPARENT);
}
function component(t, i, a) {
	var o;
	hydrating && (o = hydrate_node, hydrate_next());
	var s = new BranchManager(t);
	block(() => {
		var t = i() ?? null;
		if (hydrating && read_hydration_instruction(o) === "[" != (t !== null)) {
			var c = skip_nodes();
			set_hydrate_node(c), s.anchor = c, set_hydrating(!1), s.ensure(t, t && ((i) => a(i, t))), set_hydrating(!0);
			return;
		}
		s.ensure(t, t && ((i) => a(i, t)));
	}, EFFECT_TRANSPARENT);
}
var now = () => performance.now();
const raf = {
	tick: (t) => requestAnimationFrame(t),
	now: () => now(),
	tasks: /* @__PURE__ */ new Set()
};
function run_tasks() {
	let t = raf.now();
	raf.tasks.forEach((i) => {
		i.c(t) || (raf.tasks.delete(i), i.f());
	}), raf.tasks.size !== 0 && raf.tick(run_tasks);
}
function loop(t) {
	let i;
	return raf.tasks.size === 0 && raf.tick(run_tasks), {
		promise: new Promise((a) => {
			raf.tasks.add(i = {
				c: t,
				f: a
			});
		}),
		abort() {
			raf.tasks.delete(i);
		}
	};
}
function dispatch_event(t, i) {
	without_reactive_context(() => {
		t.dispatchEvent(new CustomEvent(i));
	});
}
function css_property_to_camelcase(t) {
	if (t === "float") return "cssFloat";
	if (t === "offset") return "cssOffset";
	if (t.startsWith("--")) return t;
	let i = t.split("-");
	return i.length === 1 ? i[0] : i[0] + i.slice(1).map((t) => t[0].toUpperCase() + t.slice(1)).join("");
}
function css_to_keyframe(t) {
	let i = {}, a = t.split(";");
	for (let t of a) {
		let [a, o] = t.split(":");
		if (!a || o === void 0) break;
		let s = css_property_to_camelcase(a.trim());
		i[s] = o.trim();
	}
	return i;
}
var linear$1 = (t) => t;
function transition(t, i, a, o) {
	var s = (t & 1) != 0, c = (t & 2) != 0, l = s && c, u = (t & 4) != 0, d = l ? "both" : s ? "in" : "out", f, p = i.inert, m = i.style.overflow, h, g;
	function _() {
		return without_reactive_context(() => f ??= a()(i, o?.() ?? {}, { direction: d }));
	}
	var v = {
		is_global: u,
		in() {
			if (i.inert = p, !s) {
				g?.abort(), g?.reset?.();
				return;
			}
			c || h?.abort(), h = animate(i, _(), g, 1, () => {
				dispatch_event(i, "introstart");
			}, () => {
				dispatch_event(i, "introend"), h?.abort(), h = f = void 0, i.style.overflow = m;
			});
		},
		out(t) {
			if (!c) {
				t?.(), f = void 0;
				return;
			}
			i.inert = !0, g = animate(i, _(), h, 0, () => {
				dispatch_event(i, "outrostart");
			}, () => {
				dispatch_event(i, "outroend"), t?.();
			});
		},
		stop: () => {
			h?.abort(), g?.abort();
		}
	}, y = active_effect;
	if ((y.nodes.t ??= []).push(v), s && should_intro) {
		var b = u;
		if (!b) {
			for (var x = y.parent; x && x.f & 65536;) for (; (x = x.parent) && !(x.f & 16););
			b = !x || (x.f & 32768) != 0;
		}
		b && effect(() => {
			untrack(() => v.in());
		});
	}
}
function animate(t, i, a, o, s, c) {
	var l = o === 1;
	if (is_function(i)) {
		var u, d = !1;
		return queue_micro_task(() => {
			d || (u = animate(t, i({ direction: l ? "in" : "out" }), a, o, s, c));
		}), {
			abort: () => {
				d = !0, u?.abort();
			},
			deactivate: () => u.deactivate(),
			reset: () => u.reset(),
			t: () => u.t()
		};
	}
	if (a?.deactivate(), !i?.duration && !i?.delay) return s(), c(), {
		abort: noop$1,
		deactivate: noop$1,
		reset: noop$1,
		t: () => o
	};
	let { delay: f = 0, css: p, tick: m, easing: h = linear$1 } = i;
	var g = [];
	if (l && a === void 0 && (m && m(0, 1), p)) {
		var y = css_to_keyframe(p(0, 1));
		g.push(y, y);
	}
	var b = () => 1 - o, x = t.animate(g, {
		duration: f,
		fill: "forwards"
	});
	return x.onfinish = () => {
		x.cancel(), s();
		var l = a?.t() ?? 1 - o;
		a?.abort();
		var u = o - l, d = i.duration * Math.abs(u), f = [];
		if (d > 0) {
			var g = !1;
			if (p) for (var _ = Math.ceil(d / (1e3 / 60)), v = 0; v <= _; v += 1) {
				var y = l + u * h(v / _), S = css_to_keyframe(p(y, 1 - y));
				f.push(S), g ||= S.overflow === "hidden";
			}
			g && (t.style.overflow = "hidden"), b = () => {
				var t = x.currentTime;
				return l + u * h(t / d);
			}, m && loop(() => {
				if (x.playState !== "running") return !1;
				var t = b();
				return m(t, 1 - t), !0;
			});
		}
		x = t.animate(f, {
			duration: d,
			fill: "forwards"
		}), x.onfinish = () => {
			b = () => o, m?.(o, 1 - o), c();
		};
	}, {
		abort: () => {
			x && (x.cancel(), x.effect = null, x.onfinish = noop$1);
		},
		deactivate: () => {
			c = noop$1;
		},
		reset: () => {
			o === 0 && m?.(1, 0);
		},
		t: () => b()
	};
}
function attach(t, i) {
	var a = void 0, o;
	managed(() => {
		a !== (a = i()) && (o &&= (destroy_effect(o), null), a && (o = branch(() => {
			effect(() => a(t));
		})));
	});
}
function r$1(t) {
	var i, a, o = "";
	if (typeof t == "string" || typeof t == "number") o += t;
	else if (typeof t == "object") if (Array.isArray(t)) {
		var s = t.length;
		for (i = 0; i < s; i++) t[i] && (a = r$1(t[i])) && (o && (o += " "), o += a);
	} else for (a in t) t[a] && (o && (o += " "), o += a);
	return o;
}
function clsx() {
	for (var t, i, a = 0, o = "", s = arguments.length; a < s; a++) (t = arguments[a]) && (i = r$1(t)) && (o && (o += " "), o += i);
	return o;
}
function clsx$1(t) {
	return typeof t == "object" ? clsx(t) : t ?? "";
}
var whitespace = [..." 	\n\r\f\xA0\v﻿"];
function to_class(t, i, a) {
	var o = t == null ? "" : "" + t;
	if (i && (o = o ? o + " " + i : i), a) {
		for (var s of Object.keys(a)) if (a[s]) o = o ? o + " " + s : s;
		else if (o.length) for (var c = s.length, l = 0; (l = o.indexOf(s, l)) >= 0;) {
			var u = l + c;
			(l === 0 || whitespace.includes(o[l - 1])) && (u === o.length || whitespace.includes(o[u])) ? o = (l === 0 ? "" : o.substring(0, l)) + o.substring(u + 1) : l = u;
		}
	}
	return o === "" ? null : o;
}
function append_styles(t, i = !1) {
	var a = i ? " !important;" : ";", o = "";
	for (var s of Object.keys(t)) {
		var c = t[s];
		c != null && c !== "" && (o += " " + s + ": " + c + a);
	}
	return o;
}
function to_css_name(t) {
	return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function to_style(t, i) {
	if (i) {
		var a = "", o, s;
		if (Array.isArray(i) ? (o = i[0], s = i[1]) : o = i, t) {
			t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var c = !1, l = 0, u = !1, d = [];
			o && d.push(...Object.keys(o).map(to_css_name)), s && d.push(...Object.keys(s).map(to_css_name));
			var f = 0, p = -1;
			let i = t.length;
			for (var m = 0; m < i; m++) {
				var h = t[m];
				if (u ? h === "/" && t[m - 1] === "*" && (u = !1) : c ? c === h && (c = !1) : h === "/" && t[m + 1] === "*" ? u = !0 : h === "\"" || h === "'" ? c = h : h === "(" ? l++ : h === ")" && l--, !u && c === !1 && l === 0) {
					if (h === ":" && p === -1) p = m;
					else if (h === ";" || m === i - 1) {
						if (p !== -1) {
							var g = to_css_name(t.substring(f, p).trim());
							if (!d.includes(g)) {
								h !== ";" && m++;
								var _ = t.substring(f, m).trim();
								a += " " + _ + ";";
							}
						}
						f = m + 1, p = -1;
					}
				}
			}
		}
		return o && (a += append_styles(o)), s && (a += append_styles(s, !0)), a = a.trim(), a === "" ? null : a;
	}
	return t == null ? null : String(t);
}
function set_class(t, i, a, o, s, c) {
	var l = t.__className;
	if (hydrating || l !== a || l === void 0) {
		var u = to_class(a, o, c);
		(!hydrating || u !== t.getAttribute("class")) && (u == null ? t.removeAttribute("class") : i ? t.className = u : t.setAttribute("class", u)), t.__className = a;
	} else if (c && s !== c) for (var d in c) {
		var f = !!c[d];
		(s == null || f !== !!s[d]) && t.classList.toggle(d, f);
	}
	return c;
}
function update_styles(t, i = {}, a, o) {
	for (var s in a) {
		var c = a[s];
		i[s] !== c && (a[s] == null ? t.style.removeProperty(s) : t.style.setProperty(s, c, o));
	}
}
function set_style(t, i, a, o) {
	var s = t.__style;
	if (hydrating || s !== i) {
		var c = to_style(i, o);
		(!hydrating || c !== t.getAttribute("style")) && (c == null ? t.removeAttribute("style") : t.style.cssText = c), t.__style = i;
	} else o && (Array.isArray(o) ? (update_styles(t, a?.[0], o[0]), update_styles(t, a?.[1], o[1], "important")) : update_styles(t, a, o));
	return o;
}
function select_option(t, i, a = !1) {
	if (t.multiple) {
		if (i == null) return;
		if (!is_array(i)) return select_multiple_invalid_value();
		for (var s of t.options) s.selected = i.includes(get_option_value(s));
		return;
	}
	for (s of t.options) if (is$1(get_option_value(s), i)) {
		s.selected = !0;
		return;
	}
	(!a || i !== void 0) && (t.selectedIndex = -1);
}
function init_select(t) {
	var i = new MutationObserver(() => {
		select_option(t, t.__value);
	});
	i.observe(t, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), teardown(() => {
		i.disconnect();
	});
}
function get_option_value(t) {
	return "__value" in t ? t.__value : t.value;
}
const CLASS = Symbol("class"), STYLE = Symbol("style");
var IS_CUSTOM_ELEMENT = Symbol("is custom element"), IS_HTML = Symbol("is html"), LINK_TAG = IS_XHTML ? "link" : "LINK", INPUT_TAG = IS_XHTML ? "input" : "INPUT", OPTION_TAG = IS_XHTML ? "option" : "OPTION", SELECT_TAG = IS_XHTML ? "select" : "SELECT";
function remove_input_defaults(t) {
	if (hydrating) {
		var i = !1, a = () => {
			if (!i) {
				if (i = !0, t.hasAttribute("value")) {
					var a = t.value;
					set_attribute(t, "value", null), t.value = a;
				}
				if (t.hasAttribute("checked")) {
					var o = t.checked;
					set_attribute(t, "checked", null), t.checked = o;
				}
			}
		};
		t.__on_r = a, queue_micro_task(a), add_form_reset_listener();
	}
}
function set_selected(t, i) {
	i ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function set_attribute(t, i, a, o) {
	var s = get_attributes(t);
	hydrating && (s[i] = t.getAttribute(i), i === "src" || i === "srcset" || i === "href" && t.nodeName === LINK_TAG) || s[i] !== (s[i] = a) && (i === "loading" && (t[LOADING_ATTR_SYMBOL] = a), a == null ? t.removeAttribute(i) : typeof a != "string" && get_setters(t).includes(i) ? t[i] = a : t.setAttribute(i, a));
}
function set_attributes(t, i, a, o, s = !1, c = !1) {
	if (hydrating && s && t.nodeName === INPUT_TAG) {
		var l = t;
		(l.type === "checkbox" ? "defaultChecked" : "defaultValue") in a || remove_input_defaults(l);
	}
	var u = get_attributes(t), d = u[IS_CUSTOM_ELEMENT], f = !u[IS_HTML];
	let p = hydrating && d;
	p && set_hydrating(!1);
	var m = i || {}, h = t.nodeName === OPTION_TAG;
	for (var g in i) g in a || (a[g] = null);
	a.class ? a.class = clsx$1(a.class) : (o || a[CLASS]) && (a.class = null), a[STYLE] && (a.style ??= null);
	var _ = get_setters(t);
	for (let s in a) {
		let l = a[s];
		if (h && s === "value" && l == null) {
			t.value = t.__value = "", m[s] = l;
			continue;
		}
		if (s === "class") {
			set_class(t, t.namespaceURI === "http://www.w3.org/1999/xhtml", l, o, i?.[CLASS], a[CLASS]), m[s] = l, m[CLASS] = a[CLASS];
			continue;
		}
		if (s === "style") {
			set_style(t, l, i?.[STYLE], a[STYLE]), m[s] = l, m[STYLE] = a[STYLE];
			continue;
		}
		var v = m[s];
		if (!(l === v && !(l === void 0 && t.hasAttribute(s)))) {
			m[s] = l;
			var y = s[0] + s[1];
			if (y !== "$$") if (y === "on") {
				let i = {}, a = "$$" + s, o = s.slice(2);
				var b = can_delegate_event(o);
				if (is_capture_event(o) && (o = o.slice(0, -7), i.capture = !0), !b && v) {
					if (l != null) continue;
					t.removeEventListener(o, m[a], i), m[a] = null;
				}
				if (b) delegated(o, t, l), delegate([o]);
				else if (l != null) {
					function c(t) {
						m[s].call(this, t);
					}
					m[a] = create_event(o, t, c, i);
				}
			} else if (s === "style") set_attribute(t, s, l);
			else if (s === "autofocus") autofocus(t, !!l);
			else if (!d && (s === "__value" || s === "value" && l != null)) t.value = t.__value = l;
			else if (s === "selected" && h) set_selected(t, l);
			else {
				var x = s;
				f || (x = normalize_attribute(x));
				var S = x === "defaultValue" || x === "defaultChecked";
				if (l == null && !d && !S) if (u[s] = null, x === "value" || x === "checked") {
					let a = t, o = i === void 0;
					if (x === "value") {
						let t = a.defaultValue;
						a.removeAttribute(x), a.defaultValue = t, a.value = a.__value = o ? t : null;
					} else {
						let t = a.defaultChecked;
						a.removeAttribute(x), a.defaultChecked = t, a.checked = o ? t : !1;
					}
				} else t.removeAttribute(s);
				else S || _.includes(x) && (d || typeof l != "string") ? (t[x] = l, x in u && (u[x] = UNINITIALIZED)) : typeof l != "function" && set_attribute(t, x, l, c);
			}
		}
	}
	return p && set_hydrating(!0), m;
}
function attribute_effect(t, i, a = [], o = [], s = [], c, l = !1, u = !1) {
	flatten(s, a, o, (a) => {
		var o = void 0, s = {}, d = t.nodeName === SELECT_TAG, f = !1;
		if (managed(() => {
			var p = i(...a.map(get$1)), m = set_attributes(t, o, p, c, l, u);
			f && d && "value" in p && select_option(t, p.value);
			for (let t of Object.getOwnPropertySymbols(s)) p[t] || destroy_effect(s[t]);
			for (let i of Object.getOwnPropertySymbols(p)) {
				var h = p[i];
				i.description === "@attach" && (!o || h !== o[i]) && (s[i] && destroy_effect(s[i]), s[i] = branch(() => attach(t, () => h))), m[i] = h;
			}
			o = m;
		}), d) {
			var p = t;
			effect(() => {
				select_option(p, o.value, !0), init_select(p);
			});
		}
		f = !0;
	});
}
function get_attributes(t) {
	return t.__attributes ??= {
		[IS_CUSTOM_ELEMENT]: t.nodeName.includes("-"),
		[IS_HTML]: t.namespaceURI === "http://www.w3.org/1999/xhtml"
	};
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(t) {
	var i = t.getAttribute("is") || t.nodeName, a = setters_cache.get(i);
	if (a) return a;
	setters_cache.set(i, a = []);
	for (var o, s = t, c = Element.prototype; c !== s;) {
		for (var l in o = get_descriptors(s), o) o[l].set && a.push(l);
		s = get_prototype_of(s);
	}
	return a;
}
function bind_value(t, i, a = i) {
	var o = /* @__PURE__ */ new WeakSet();
	listen_to_event_and_reset_event(t, "input", async (s) => {
		var c = s ? t.defaultValue : t.value;
		if (c = is_numberlike_input(t) ? to_number(c) : c, a(c), current_batch !== null && o.add(current_batch), await tick(), c !== (c = i())) {
			var l = t.selectionStart, u = t.selectionEnd, d = t.value.length;
			if (t.value = c ?? "", u !== null) {
				var f = t.value.length;
				l === u && u === d && f > d ? (t.selectionStart = f, t.selectionEnd = f) : (t.selectionStart = l, t.selectionEnd = Math.min(u, f));
			}
		}
	}), (hydrating && t.defaultValue !== t.value || untrack(i) == null && t.value) && (a(is_numberlike_input(t) ? to_number(t.value) : t.value), current_batch !== null && o.add(current_batch)), render_effect(() => {
		var a = i();
		if (t === document.activeElement) {
			var s = current_batch;
			if (o.has(s)) return;
		}
		is_numberlike_input(t) && a === to_number(t.value) || t.type === "date" && !a && !t.value || a !== t.value && (t.value = a ?? "");
	});
}
function is_numberlike_input(t) {
	var i = t.type;
	return i === "number" || i === "range";
}
function to_number(t) {
	return t === "" ? null : +t;
}
function bind_files(t, i, a = i) {
	listen_to_event_and_reset_event(t, "change", () => {
		a(t.files);
	}), hydrating && t.files && a(t.files), render_effect(() => {
		t.files = i();
	});
}
function is_bound_this(t, i) {
	return t === i || t?.[STATE_SYMBOL] === i;
}
function bind_this(t = {}, i, a, o) {
	var s = component_context.r, c = active_effect;
	return effect(() => {
		var l, u;
		return render_effect(() => {
			l = u, u = o?.() || [], untrack(() => {
				t !== a(...u) && (i(t, ...u), l && is_bound_this(a(...l), t) && i(null, ...l));
			});
		}), () => {
			let o = c;
			for (; o !== s && o.parent !== null && o.parent.f & 33554432;) o = o.parent;
			let l = () => {
				u && is_bound_this(a(...u), t) && i(null, ...u);
			}, d = o.teardown;
			o.teardown = () => {
				l(), d?.();
			};
		};
	}), t;
}
function init$1(t = !1) {
	let i = component_context, a = i.l.u;
	if (!a) return;
	let o = () => deep_read_state(i.s);
	if (t) {
		let t = 0, a = {}, s = /* @__PURE__ */ derived(() => {
			let o = !1, s = i.s;
			for (let t in s) s[t] !== a[t] && (a[t] = s[t], o = !0);
			return o && t++, t;
		});
		o = () => get$1(s);
	}
	a.b.length && user_pre_effect(() => {
		observe_all(i, o), run_all(a.b);
	}), user_effect(() => {
		let t = untrack(() => a.m.map(run));
		return () => {
			for (let i of t) typeof i == "function" && i();
		};
	}), a.a.length && user_effect(() => {
		observe_all(i, o), run_all(a.a);
	});
}
function observe_all(t, i) {
	if (t.l.s) for (let i of t.l.s) get$1(i);
	i();
}
var rest_props_handler = {
	get(t, i) {
		if (!t.exclude.includes(i)) return t.props[i];
	},
	set(t, i) {
		return !1;
	},
	getOwnPropertyDescriptor(t, i) {
		if (!t.exclude.includes(i) && i in t.props) return {
			enumerable: !0,
			configurable: !0,
			value: t.props[i]
		};
	},
	has(t, i) {
		return t.exclude.includes(i) ? !1 : i in t.props;
	},
	ownKeys(t) {
		return Reflect.ownKeys(t.props).filter((i) => !t.exclude.includes(i));
	}
};
/* @__NO_SIDE_EFFECTS__ */
function rest_props(t, i, a) {
	return new Proxy({
		props: t,
		exclude: i
	}, rest_props_handler);
}
var spread_props_handler = {
	get(t, i) {
		let a = t.props.length;
		for (; a--;) {
			let o = t.props[a];
			if (is_function(o) && (o = o()), typeof o == "object" && o && i in o) return o[i];
		}
	},
	set(t, i, a) {
		let o = t.props.length;
		for (; o--;) {
			let s = t.props[o];
			is_function(s) && (s = s());
			let c = get_descriptor(s, i);
			if (c && c.set) return c.set(a), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(t, i) {
		let a = t.props.length;
		for (; a--;) {
			let o = t.props[a];
			if (is_function(o) && (o = o()), typeof o == "object" && o && i in o) {
				let t = get_descriptor(o, i);
				return t && !t.configurable && (t.configurable = !0), t;
			}
		}
	},
	has(t, i) {
		if (i === STATE_SYMBOL || i === LEGACY_PROPS) return !1;
		for (let a of t.props) if (is_function(a) && (a = a()), a != null && i in a) return !0;
		return !1;
	},
	ownKeys(t) {
		let i = [];
		for (let a of t.props) if (is_function(a) && (a = a()), a) {
			for (let t in a) i.includes(t) || i.push(t);
			for (let t of Object.getOwnPropertySymbols(a)) i.includes(t) || i.push(t);
		}
		return i;
	}
};
function spread_props(...t) {
	return new Proxy({ props: t }, spread_props_handler);
}
function prop(t, i, a, o) {
	var s = !legacy_mode_flag || (a & 2) != 0, c = (a & 8) != 0, l = (a & 16) != 0, u = o, f = !0, p = () => (f && (f = !1, u = l ? untrack(o) : o), u);
	let m;
	if (c) {
		var h = STATE_SYMBOL in t || LEGACY_PROPS in t;
		m = get_descriptor(t, i)?.set ?? (h && i in t ? (a) => t[i] = a : void 0);
	}
	var g, _ = !1;
	c ? [g, _] = capture_store_binding(() => t[i]) : g = t[i], g === void 0 && o !== void 0 && (g = p(), m && (s && props_invalid_value(i), m(g)));
	var v = s ? () => {
		var a = t[i];
		return a === void 0 ? p() : (f = !0, a);
	} : () => {
		var a = t[i];
		return a !== void 0 && (u = void 0), a === void 0 ? u : a;
	};
	if (s && !(a & 4)) return v;
	if (m) {
		var y = t.$$legacy;
		return (function(t, i) {
			return arguments.length > 0 ? ((!s || !i || y || _) && m(i ? v() : t), t) : v();
		});
	}
	var b = !1, x = (a & 1 ? derived : derived_safe_equal)(() => (b = !1, v()));
	c && get$1(x);
	var S = active_effect;
	return (function(t, i) {
		if (arguments.length > 0) {
			let a = i ? get$1(x) : s && c ? proxy(t) : t;
			return set(x, a), b = !0, u !== void 0 && (u = a), t;
		}
		return is_destroying_effect && b || S.f & 16384 ? x.v : get$1(x);
	});
}
function onMount(t) {
	component_context === null && lifecycle_outside_component("onMount"), legacy_mode_flag && component_context.l !== null ? init_update_callbacks(component_context).m.push(t) : user_effect(() => {
		let i = untrack(t);
		if (typeof i == "function") return i;
	});
}
function init_update_callbacks(t) {
	var i = t.l;
	return i.u ??= {
		a: [],
		b: [],
		m: []
	};
}
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5"), enable_legacy_mode_flag();
var concatArrays = (t, i) => {
	let a = Array(t.length + i.length);
	for (let i = 0; i < t.length; i++) a[i] = t[i];
	for (let o = 0; o < i.length; o++) a[t.length + o] = i[o];
	return a;
}, createClassValidatorObject = (t, i) => ({
	classGroupId: t,
	validator: i
}), createClassPartObject = (t = /* @__PURE__ */ new Map(), i = null, a) => ({
	nextPart: t,
	validators: i,
	classGroupId: a
}), CLASS_PART_SEPARATOR = "-", EMPTY_CONFLICTS = [], ARBITRARY_PROPERTY_PREFIX = "arbitrary..", createClassGroupUtils = (t) => {
	let i = createClassMap(t), { conflictingClassGroups: a, conflictingClassGroupModifiers: o } = t;
	return {
		getClassGroupId: (t) => {
			if (t.startsWith("[") && t.endsWith("]")) return getGroupIdForArbitraryProperty(t);
			let a = t.split(CLASS_PART_SEPARATOR);
			return getGroupRecursive(a, a[0] === "" && a.length > 1 ? 1 : 0, i);
		},
		getConflictingClassGroupIds: (t, i) => {
			if (i) {
				let i = o[t], s = a[t];
				return i ? s ? concatArrays(s, i) : i : s || EMPTY_CONFLICTS;
			}
			return a[t] || EMPTY_CONFLICTS;
		}
	};
}, getGroupRecursive = (t, i, a) => {
	if (t.length - i === 0) return a.classGroupId;
	let o = t[i], s = a.nextPart.get(o);
	if (s) {
		let a = getGroupRecursive(t, i + 1, s);
		if (a) return a;
	}
	let c = a.validators;
	if (c === null) return;
	let l = i === 0 ? t.join(CLASS_PART_SEPARATOR) : t.slice(i).join(CLASS_PART_SEPARATOR), u = c.length;
	for (let t = 0; t < u; t++) {
		let i = c[t];
		if (i.validator(l)) return i.classGroupId;
	}
}, getGroupIdForArbitraryProperty = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let i = t.slice(1, -1), a = i.indexOf(":"), o = i.slice(0, a);
	return o ? ARBITRARY_PROPERTY_PREFIX + o : void 0;
})(), createClassMap = (t) => {
	let { theme: i, classGroups: a } = t;
	return processClassGroups(a, i);
}, processClassGroups = (t, i) => {
	let a = createClassPartObject();
	for (let o in t) {
		let s = t[o];
		processClassesRecursively(s, a, o, i);
	}
	return a;
}, processClassesRecursively = (t, i, a, o) => {
	let s = t.length;
	for (let c = 0; c < s; c++) {
		let s = t[c];
		processClassDefinition(s, i, a, o);
	}
}, processClassDefinition = (t, i, a, o) => {
	if (typeof t == "string") {
		processStringDefinition(t, i, a);
		return;
	}
	if (typeof t == "function") {
		processFunctionDefinition(t, i, a, o);
		return;
	}
	processObjectDefinition(t, i, a, o);
}, processStringDefinition = (t, i, a) => {
	let o = t === "" ? i : getPart(i, t);
	o.classGroupId = a;
}, processFunctionDefinition = (t, i, a, o) => {
	if (isThemeGetter(t)) {
		processClassesRecursively(t(o), i, a, o);
		return;
	}
	i.validators === null && (i.validators = []), i.validators.push(createClassValidatorObject(a, t));
}, processObjectDefinition = (t, i, a, o) => {
	let s = Object.entries(t), c = s.length;
	for (let t = 0; t < c; t++) {
		let [c, l] = s[t];
		processClassesRecursively(l, getPart(i, c), a, o);
	}
}, getPart = (t, i) => {
	let a = t, o = i.split(CLASS_PART_SEPARATOR), s = o.length;
	for (let t = 0; t < s; t++) {
		let i = o[t], s = a.nextPart.get(i);
		s || (s = createClassPartObject(), a.nextPart.set(i, s)), a = s;
	}
	return a;
}, isThemeGetter = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, createLruCache = (t) => {
	if (t < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let i = 0, a = Object.create(null), o = Object.create(null), s = (s, c) => {
		a[s] = c, i++, i > t && (i = 0, o = a, a = Object.create(null));
	};
	return {
		get(t) {
			let i = a[t];
			if (i !== void 0) return i;
			if ((i = o[t]) !== void 0) return s(t, i), i;
		},
		set(t, i) {
			t in a ? a[t] = i : s(t, i);
		}
	};
}, IMPORTANT_MODIFIER = "!", MODIFIER_SEPARATOR = ":", EMPTY_MODIFIERS = [], createResultObject = (t, i, a, o, s) => ({
	modifiers: t,
	hasImportantModifier: i,
	baseClassName: a,
	maybePostfixModifierPosition: o,
	isExternal: s
}), createParseClassName = (t) => {
	let { prefix: i, experimentalParseClassName: a } = t, o = (t) => {
		let i = [], a = 0, o = 0, s = 0, c, l = t.length;
		for (let u = 0; u < l; u++) {
			let l = t[u];
			if (a === 0 && o === 0) {
				if (l === MODIFIER_SEPARATOR) {
					i.push(t.slice(s, u)), s = u + 1;
					continue;
				}
				if (l === "/") {
					c = u;
					continue;
				}
			}
			l === "[" ? a++ : l === "]" ? a-- : l === "(" ? o++ : l === ")" && o--;
		}
		let u = i.length === 0 ? t : t.slice(s), d = u, f = !1;
		u.endsWith(IMPORTANT_MODIFIER) ? (d = u.slice(0, -1), f = !0) : u.startsWith(IMPORTANT_MODIFIER) && (d = u.slice(1), f = !0);
		let p = c && c > s ? c - s : void 0;
		return createResultObject(i, f, d, p);
	};
	if (i) {
		let t = i + MODIFIER_SEPARATOR, a = o;
		o = (i) => i.startsWith(t) ? a(i.slice(t.length)) : createResultObject(EMPTY_MODIFIERS, !1, i, void 0, !0);
	}
	if (a) {
		let t = o;
		o = (i) => a({
			className: i,
			parseClassName: t
		});
	}
	return o;
}, createSortModifiers = (t) => {
	let i = /* @__PURE__ */ new Map();
	return t.orderSensitiveModifiers.forEach((t, a) => {
		i.set(t, 1e6 + a);
	}), (t) => {
		let a = [], o = [];
		for (let s = 0; s < t.length; s++) {
			let c = t[s], l = c[0] === "[", u = i.has(c);
			l || u ? (o.length > 0 && (o.sort(), a.push(...o), o = []), a.push(c)) : o.push(c);
		}
		return o.length > 0 && (o.sort(), a.push(...o)), a;
	};
}, createConfigUtils = (t) => ({
	cache: createLruCache(t.cacheSize),
	parseClassName: createParseClassName(t),
	sortModifiers: createSortModifiers(t),
	...createClassGroupUtils(t)
}), SPLIT_CLASSES_REGEX = /\s+/, mergeClassList = (t, i) => {
	let { parseClassName: a, getClassGroupId: o, getConflictingClassGroupIds: s, sortModifiers: c } = i, l = [], u = t.trim().split(SPLIT_CLASSES_REGEX), d = "";
	for (let t = u.length - 1; t >= 0; --t) {
		let i = u[t], { isExternal: f, modifiers: p, hasImportantModifier: m, baseClassName: h, maybePostfixModifierPosition: g } = a(i);
		if (f) {
			d = i + (d.length > 0 ? " " + d : d);
			continue;
		}
		let _ = !!g, v = o(_ ? h.substring(0, g) : h);
		if (!v) {
			if (!_) {
				d = i + (d.length > 0 ? " " + d : d);
				continue;
			}
			if (v = o(h), !v) {
				d = i + (d.length > 0 ? " " + d : d);
				continue;
			}
			_ = !1;
		}
		let y = p.length === 0 ? "" : p.length === 1 ? p[0] : c(p).join(":"), b = m ? y + IMPORTANT_MODIFIER : y, x = b + v;
		if (l.indexOf(x) > -1) continue;
		l.push(x);
		let S = s(v, _);
		for (let t = 0; t < S.length; ++t) {
			let i = S[t];
			l.push(b + i);
		}
		d = i + (d.length > 0 ? " " + d : d);
	}
	return d;
}, twJoin = (...t) => {
	let i = 0, a, o, s = "";
	for (; i < t.length;) (a = t[i++]) && (o = toValue(a)) && (s && (s += " "), s += o);
	return s;
}, toValue = (t) => {
	if (typeof t == "string") return t;
	let i, a = "";
	for (let o = 0; o < t.length; o++) t[o] && (i = toValue(t[o])) && (a && (a += " "), a += i);
	return a;
}, createTailwindMerge = (t, ...i) => {
	let a, o, s, c, l = (l) => (a = createConfigUtils(i.reduce((t, i) => i(t), t())), o = a.cache.get, s = a.cache.set, c = u, u(l)), u = (t) => {
		let i = o(t);
		if (i) return i;
		let c = mergeClassList(t, a);
		return s(t, c), c;
	};
	return c = l, (...t) => c(twJoin(...t));
}, fallbackThemeArr = [], fromTheme = (t) => {
	let i = (i) => i[t] || fallbackThemeArr;
	return i.isThemeGetter = !0, i;
}, arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, isFraction = (t) => fractionRegex.test(t), isNumber = (t) => !!t && !Number.isNaN(Number(t)), isInteger = (t) => !!t && Number.isInteger(Number(t)), isPercent = (t) => t.endsWith("%") && isNumber(t.slice(0, -1)), isTshirtSize = (t) => tshirtUnitRegex.test(t), isAny = () => !0, isLengthOnly = (t) => lengthUnitRegex.test(t) && !colorFunctionRegex.test(t), isNever = () => !1, isShadow = (t) => shadowRegex.test(t), isImage = (t) => imageRegex.test(t), isAnyNonArbitrary = (t) => !isArbitraryValue(t) && !isArbitraryVariable(t), isArbitrarySize = (t) => getIsArbitraryValue(t, isLabelSize, isNever), isArbitraryValue = (t) => arbitraryValueRegex.test(t), isArbitraryLength = (t) => getIsArbitraryValue(t, isLabelLength, isLengthOnly), isArbitraryNumber = (t) => getIsArbitraryValue(t, isLabelNumber, isNumber), isArbitraryWeight = (t) => getIsArbitraryValue(t, isLabelWeight, isAny), isArbitraryFamilyName = (t) => getIsArbitraryValue(t, isLabelFamilyName, isNever), isArbitraryPosition = (t) => getIsArbitraryValue(t, isLabelPosition, isNever), isArbitraryImage = (t) => getIsArbitraryValue(t, isLabelImage, isImage), isArbitraryShadow = (t) => getIsArbitraryValue(t, isLabelShadow, isShadow), isArbitraryVariable = (t) => arbitraryVariableRegex.test(t), isArbitraryVariableLength = (t) => getIsArbitraryVariable(t, isLabelLength), isArbitraryVariableFamilyName = (t) => getIsArbitraryVariable(t, isLabelFamilyName), isArbitraryVariablePosition = (t) => getIsArbitraryVariable(t, isLabelPosition), isArbitraryVariableSize = (t) => getIsArbitraryVariable(t, isLabelSize), isArbitraryVariableImage = (t) => getIsArbitraryVariable(t, isLabelImage), isArbitraryVariableShadow = (t) => getIsArbitraryVariable(t, isLabelShadow, !0), isArbitraryVariableWeight = (t) => getIsArbitraryVariable(t, isLabelWeight, !0), getIsArbitraryValue = (t, i, a) => {
	let o = arbitraryValueRegex.exec(t);
	return o ? o[1] ? i(o[1]) : a(o[2]) : !1;
}, getIsArbitraryVariable = (t, i, a = !1) => {
	let o = arbitraryVariableRegex.exec(t);
	return o ? o[1] ? i(o[1]) : a : !1;
}, isLabelPosition = (t) => t === "position" || t === "percentage", isLabelImage = (t) => t === "image" || t === "url", isLabelSize = (t) => t === "length" || t === "size" || t === "bg-size", isLabelLength = (t) => t === "length", isLabelNumber = (t) => t === "number", isLabelFamilyName = (t) => t === "family-name", isLabelWeight = (t) => t === "number" || t === "weight", isLabelShadow = (t) => t === "shadow", getDefaultConfig = () => {
	let t = fromTheme("color"), i = fromTheme("font"), a = fromTheme("text"), o = fromTheme("font-weight"), s = fromTheme("tracking"), c = fromTheme("leading"), l = fromTheme("breakpoint"), u = fromTheme("container"), d = fromTheme("spacing"), f = fromTheme("radius"), p = fromTheme("shadow"), m = fromTheme("inset-shadow"), h = fromTheme("text-shadow"), g = fromTheme("drop-shadow"), _ = fromTheme("blur"), v = fromTheme("perspective"), y = fromTheme("aspect"), b = fromTheme("ease"), x = fromTheme("animate"), S = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], C = () => [
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
	], w = () => [
		...C(),
		isArbitraryVariable,
		isArbitraryValue
	], T = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], E = () => [
		"auto",
		"contain",
		"none"
	], D = () => [
		isArbitraryVariable,
		isArbitraryValue,
		d
	], O = () => [
		isFraction,
		"full",
		"auto",
		...D()
	], k = () => [
		isInteger,
		"none",
		"subgrid",
		isArbitraryVariable,
		isArbitraryValue
	], A = () => [
		"auto",
		{ span: [
			"full",
			isInteger,
			isArbitraryVariable,
			isArbitraryValue
		] },
		isInteger,
		isArbitraryVariable,
		isArbitraryValue
	], j = () => [
		isInteger,
		"auto",
		isArbitraryVariable,
		isArbitraryValue
	], M = () => [
		"auto",
		"min",
		"max",
		"fr",
		isArbitraryVariable,
		isArbitraryValue
	], N = () => [
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
	], P = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], F = () => ["auto", ...D()], I = () => [
		isFraction,
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
		...D()
	], L = () => [
		isFraction,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...D()
	], R = () => [
		isFraction,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...D()
	], z = () => [
		t,
		isArbitraryVariable,
		isArbitraryValue
	], B = () => [
		...C(),
		isArbitraryVariablePosition,
		isArbitraryPosition,
		{ position: [isArbitraryVariable, isArbitraryValue] }
	], V = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], H = () => [
		"auto",
		"cover",
		"contain",
		isArbitraryVariableSize,
		isArbitrarySize,
		{ size: [isArbitraryVariable, isArbitraryValue] }
	], U = () => [
		isPercent,
		isArbitraryVariableLength,
		isArbitraryLength
	], W = () => [
		"",
		"none",
		"full",
		f,
		isArbitraryVariable,
		isArbitraryValue
	], G = () => [
		"",
		isNumber,
		isArbitraryVariableLength,
		isArbitraryLength
	], K = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], q = () => [
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
	], J = () => [
		isNumber,
		isPercent,
		isArbitraryVariablePosition,
		isArbitraryPosition
	], Y = () => [
		"",
		"none",
		_,
		isArbitraryVariable,
		isArbitraryValue
	], X = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], Z = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], Q = () => [
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], $ = () => [
		isFraction,
		"full",
		...D()
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
			blur: [isTshirtSize],
			breakpoint: [isTshirtSize],
			color: [isAny],
			container: [isTshirtSize],
			"drop-shadow": [isTshirtSize],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [isAnyNonArbitrary],
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
			"inset-shadow": [isTshirtSize],
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
			radius: [isTshirtSize],
			shadow: [isTshirtSize],
			spacing: ["px", isNumber],
			text: [isTshirtSize],
			"text-shadow": [isTshirtSize],
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
				isFraction,
				isArbitraryValue,
				isArbitraryVariable,
				y
			] }],
			container: ["container"],
			columns: [{ columns: [
				isNumber,
				isArbitraryValue,
				isArbitraryVariable,
				u
			] }],
			"break-after": [{ "break-after": S() }],
			"break-before": [{ "break-before": S() }],
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
			"object-position": [{ object: w() }],
			overflow: [{ overflow: T() }],
			"overflow-x": [{ "overflow-x": T() }],
			"overflow-y": [{ "overflow-y": T() }],
			overscroll: [{ overscroll: E() }],
			"overscroll-x": [{ "overscroll-x": E() }],
			"overscroll-y": [{ "overscroll-y": E() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: O() }],
			"inset-x": [{ "inset-x": O() }],
			"inset-y": [{ "inset-y": O() }],
			start: [{
				"inset-s": O(),
				start: O()
			}],
			end: [{
				"inset-e": O(),
				end: O()
			}],
			"inset-bs": [{ "inset-bs": O() }],
			"inset-be": [{ "inset-be": O() }],
			top: [{ top: O() }],
			right: [{ right: O() }],
			bottom: [{ bottom: O() }],
			left: [{ left: O() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				isInteger,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			basis: [{ basis: [
				isFraction,
				"full",
				"auto",
				u,
				...D()
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
				isNumber,
				isFraction,
				"auto",
				"initial",
				"none",
				isArbitraryValue
			] }],
			grow: [{ grow: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			shrink: [{ shrink: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			order: [{ order: [
				isInteger,
				"first",
				"last",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"grid-cols": [{ "grid-cols": k() }],
			"col-start-end": [{ col: A() }],
			"col-start": [{ "col-start": j() }],
			"col-end": [{ "col-end": j() }],
			"grid-rows": [{ "grid-rows": k() }],
			"row-start-end": [{ row: A() }],
			"row-start": [{ "row-start": j() }],
			"row-end": [{ "row-end": j() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": M() }],
			"auto-rows": [{ "auto-rows": M() }],
			gap: [{ gap: D() }],
			"gap-x": [{ "gap-x": D() }],
			"gap-y": [{ "gap-y": D() }],
			"justify-content": [{ justify: [...N(), "normal"] }],
			"justify-items": [{ "justify-items": [...P(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...P()] }],
			"align-content": [{ content: ["normal", ...N()] }],
			"align-items": [{ items: [...P(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...P(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": N() }],
			"place-items": [{ "place-items": [...P(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...P()] }],
			p: [{ p: D() }],
			px: [{ px: D() }],
			py: [{ py: D() }],
			ps: [{ ps: D() }],
			pe: [{ pe: D() }],
			pbs: [{ pbs: D() }],
			pbe: [{ pbe: D() }],
			pt: [{ pt: D() }],
			pr: [{ pr: D() }],
			pb: [{ pb: D() }],
			pl: [{ pl: D() }],
			m: [{ m: F() }],
			mx: [{ mx: F() }],
			my: [{ my: F() }],
			ms: [{ ms: F() }],
			me: [{ me: F() }],
			mbs: [{ mbs: F() }],
			mbe: [{ mbe: F() }],
			mt: [{ mt: F() }],
			mr: [{ mr: F() }],
			mb: [{ mb: F() }],
			ml: [{ ml: F() }],
			"space-x": [{ "space-x": D() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": D() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: I() }],
			"inline-size": [{ inline: ["auto", ...L()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...L()] }],
			"max-inline-size": [{ "max-inline": ["none", ...L()] }],
			"block-size": [{ block: ["auto", ...R()] }],
			"min-block-size": [{ "min-block": ["auto", ...R()] }],
			"max-block-size": [{ "max-block": ["none", ...R()] }],
			w: [{ w: [
				u,
				"screen",
				...I()
			] }],
			"min-w": [{ "min-w": [
				u,
				"screen",
				"none",
				...I()
			] }],
			"max-w": [{ "max-w": [
				u,
				"screen",
				"none",
				"prose",
				{ screen: [l] },
				...I()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...I()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...I()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...I()
			] }],
			"font-size": [{ text: [
				"base",
				a,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				o,
				isArbitraryVariableWeight,
				isArbitraryWeight
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
				isPercent,
				isArbitraryValue
			] }],
			"font-family": [{ font: [
				isArbitraryVariableFamilyName,
				isArbitraryFamilyName,
				i
			] }],
			"font-features": [{ "font-features": [isArbitraryValue] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				s,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"line-clamp": [{ "line-clamp": [
				isNumber,
				"none",
				isArbitraryVariable,
				isArbitraryNumber
			] }],
			leading: [{ leading: [c, ...D()] }],
			"list-image": [{ "list-image": [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: z() }],
			"text-color": [{ text: z() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...K(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				isNumber,
				"from-font",
				"auto",
				isArbitraryVariable,
				isArbitraryLength
			] }],
			"text-decoration-color": [{ decoration: z() }],
			"underline-offset": [{ "underline-offset": [
				isNumber,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
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
			indent: [{ indent: D() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				isArbitraryVariable,
				isArbitraryValue
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
				isArbitraryVariable,
				isArbitraryValue
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
			"bg-position": [{ bg: B() }],
			"bg-repeat": [{ bg: V() }],
			"bg-size": [{ bg: H() }],
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
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					],
					radial: [
						"",
						isArbitraryVariable,
						isArbitraryValue
					],
					conic: [
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					]
				},
				isArbitraryVariableImage,
				isArbitraryImage
			] }],
			"bg-color": [{ bg: z() }],
			"gradient-from-pos": [{ from: U() }],
			"gradient-via-pos": [{ via: U() }],
			"gradient-to-pos": [{ to: U() }],
			"gradient-from": [{ from: z() }],
			"gradient-via": [{ via: z() }],
			"gradient-to": [{ to: z() }],
			rounded: [{ rounded: W() }],
			"rounded-s": [{ "rounded-s": W() }],
			"rounded-e": [{ "rounded-e": W() }],
			"rounded-t": [{ "rounded-t": W() }],
			"rounded-r": [{ "rounded-r": W() }],
			"rounded-b": [{ "rounded-b": W() }],
			"rounded-l": [{ "rounded-l": W() }],
			"rounded-ss": [{ "rounded-ss": W() }],
			"rounded-se": [{ "rounded-se": W() }],
			"rounded-ee": [{ "rounded-ee": W() }],
			"rounded-es": [{ "rounded-es": W() }],
			"rounded-tl": [{ "rounded-tl": W() }],
			"rounded-tr": [{ "rounded-tr": W() }],
			"rounded-br": [{ "rounded-br": W() }],
			"rounded-bl": [{ "rounded-bl": W() }],
			"border-w": [{ border: G() }],
			"border-w-x": [{ "border-x": G() }],
			"border-w-y": [{ "border-y": G() }],
			"border-w-s": [{ "border-s": G() }],
			"border-w-e": [{ "border-e": G() }],
			"border-w-bs": [{ "border-bs": G() }],
			"border-w-be": [{ "border-be": G() }],
			"border-w-t": [{ "border-t": G() }],
			"border-w-r": [{ "border-r": G() }],
			"border-w-b": [{ "border-b": G() }],
			"border-w-l": [{ "border-l": G() }],
			"divide-x": [{ "divide-x": G() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": G() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...K(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...K(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: z() }],
			"border-color-x": [{ "border-x": z() }],
			"border-color-y": [{ "border-y": z() }],
			"border-color-s": [{ "border-s": z() }],
			"border-color-e": [{ "border-e": z() }],
			"border-color-bs": [{ "border-bs": z() }],
			"border-color-be": [{ "border-be": z() }],
			"border-color-t": [{ "border-t": z() }],
			"border-color-r": [{ "border-r": z() }],
			"border-color-b": [{ "border-b": z() }],
			"border-color-l": [{ "border-l": z() }],
			"divide-color": [{ divide: z() }],
			"outline-style": [{ outline: [
				...K(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"outline-w": [{ outline: [
				"",
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			"outline-color": [{ outline: z() }],
			shadow: [{ shadow: [
				"",
				"none",
				p,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"shadow-color": [{ shadow: z() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				m,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"inset-shadow-color": [{ "inset-shadow": z() }],
			"ring-w": [{ ring: G() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: z() }],
			"ring-offset-w": [{ "ring-offset": [isNumber, isArbitraryLength] }],
			"ring-offset-color": [{ "ring-offset": z() }],
			"inset-ring-w": [{ "inset-ring": G() }],
			"inset-ring-color": [{ "inset-ring": z() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				h,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"text-shadow-color": [{ "text-shadow": z() }],
			opacity: [{ opacity: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"mix-blend": [{ "mix-blend": [
				...q(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": q() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [isNumber] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": J() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": J() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": z() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": z() }],
			"mask-image-t-from-pos": [{ "mask-t-from": J() }],
			"mask-image-t-to-pos": [{ "mask-t-to": J() }],
			"mask-image-t-from-color": [{ "mask-t-from": z() }],
			"mask-image-t-to-color": [{ "mask-t-to": z() }],
			"mask-image-r-from-pos": [{ "mask-r-from": J() }],
			"mask-image-r-to-pos": [{ "mask-r-to": J() }],
			"mask-image-r-from-color": [{ "mask-r-from": z() }],
			"mask-image-r-to-color": [{ "mask-r-to": z() }],
			"mask-image-b-from-pos": [{ "mask-b-from": J() }],
			"mask-image-b-to-pos": [{ "mask-b-to": J() }],
			"mask-image-b-from-color": [{ "mask-b-from": z() }],
			"mask-image-b-to-color": [{ "mask-b-to": z() }],
			"mask-image-l-from-pos": [{ "mask-l-from": J() }],
			"mask-image-l-to-pos": [{ "mask-l-to": J() }],
			"mask-image-l-from-color": [{ "mask-l-from": z() }],
			"mask-image-l-to-color": [{ "mask-l-to": z() }],
			"mask-image-x-from-pos": [{ "mask-x-from": J() }],
			"mask-image-x-to-pos": [{ "mask-x-to": J() }],
			"mask-image-x-from-color": [{ "mask-x-from": z() }],
			"mask-image-x-to-color": [{ "mask-x-to": z() }],
			"mask-image-y-from-pos": [{ "mask-y-from": J() }],
			"mask-image-y-to-pos": [{ "mask-y-to": J() }],
			"mask-image-y-from-color": [{ "mask-y-from": z() }],
			"mask-image-y-to-color": [{ "mask-y-to": z() }],
			"mask-image-radial": [{ "mask-radial": [isArbitraryVariable, isArbitraryValue] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": J() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": J() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": z() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": z() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": C() }],
			"mask-image-conic-pos": [{ "mask-conic": [isNumber] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": J() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": J() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": z() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": z() }],
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
			"mask-position": [{ mask: B() }],
			"mask-repeat": [{ mask: V() }],
			"mask-size": [{ mask: H() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			filter: [{ filter: [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			blur: [{ blur: Y() }],
			brightness: [{ brightness: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			contrast: [{ contrast: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				g,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"drop-shadow-color": [{ "drop-shadow": z() }],
			grayscale: [{ grayscale: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"hue-rotate": [{ "hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			invert: [{ invert: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			saturate: [{ saturate: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			sepia: [{ sepia: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-blur": [{ "backdrop-blur": Y() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": D() }],
			"border-spacing-x": [{ "border-spacing-x": D() }],
			"border-spacing-y": [{ "border-spacing-y": D() }],
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
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				isNumber,
				"initial",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				b,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			delay: [{ delay: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			animate: [{ animate: [
				"none",
				x,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				v,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"perspective-origin": [{ "perspective-origin": w() }],
			rotate: [{ rotate: X() }],
			"rotate-x": [{ "rotate-x": X() }],
			"rotate-y": [{ "rotate-y": X() }],
			"rotate-z": [{ "rotate-z": X() }],
			scale: [{ scale: Z() }],
			"scale-x": [{ "scale-x": Z() }],
			"scale-y": [{ "scale-y": Z() }],
			"scale-z": [{ "scale-z": Z() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: Q() }],
			"skew-x": [{ "skew-x": Q() }],
			"skew-y": [{ "skew-y": Q() }],
			transform: [{ transform: [
				isArbitraryVariable,
				isArbitraryValue,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: w() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: $() }],
			"translate-x": [{ "translate-x": $() }],
			"translate-y": [{ "translate-y": $() }],
			"translate-z": [{ "translate-z": $() }],
			"translate-none": ["translate-none"],
			accent: [{ accent: z() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: z() }],
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
				isArbitraryVariable,
				isArbitraryValue
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
			"scroll-m": [{ "scroll-m": D() }],
			"scroll-mx": [{ "scroll-mx": D() }],
			"scroll-my": [{ "scroll-my": D() }],
			"scroll-ms": [{ "scroll-ms": D() }],
			"scroll-me": [{ "scroll-me": D() }],
			"scroll-mbs": [{ "scroll-mbs": D() }],
			"scroll-mbe": [{ "scroll-mbe": D() }],
			"scroll-mt": [{ "scroll-mt": D() }],
			"scroll-mr": [{ "scroll-mr": D() }],
			"scroll-mb": [{ "scroll-mb": D() }],
			"scroll-ml": [{ "scroll-ml": D() }],
			"scroll-p": [{ "scroll-p": D() }],
			"scroll-px": [{ "scroll-px": D() }],
			"scroll-py": [{ "scroll-py": D() }],
			"scroll-ps": [{ "scroll-ps": D() }],
			"scroll-pe": [{ "scroll-pe": D() }],
			"scroll-pbs": [{ "scroll-pbs": D() }],
			"scroll-pbe": [{ "scroll-pbe": D() }],
			"scroll-pt": [{ "scroll-pt": D() }],
			"scroll-pr": [{ "scroll-pr": D() }],
			"scroll-pb": [{ "scroll-pb": D() }],
			"scroll-pl": [{ "scroll-pl": D() }],
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
				isArbitraryVariable,
				isArbitraryValue
			] }],
			fill: [{ fill: ["none", ...z()] }],
			"stroke-w": [{ stroke: [
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength,
				isArbitraryNumber
			] }],
			stroke: [{ stroke: ["none", ...z()] }],
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
}, mergeConfigs = (t, { cacheSize: i, prefix: a, experimentalParseClassName: o, extend: s = {}, override: c = {} }) => (overrideProperty(t, "cacheSize", i), overrideProperty(t, "prefix", a), overrideProperty(t, "experimentalParseClassName", o), overrideConfigProperties(t.theme, c.theme), overrideConfigProperties(t.classGroups, c.classGroups), overrideConfigProperties(t.conflictingClassGroups, c.conflictingClassGroups), overrideConfigProperties(t.conflictingClassGroupModifiers, c.conflictingClassGroupModifiers), overrideProperty(t, "orderSensitiveModifiers", c.orderSensitiveModifiers), mergeConfigProperties(t.theme, s.theme), mergeConfigProperties(t.classGroups, s.classGroups), mergeConfigProperties(t.conflictingClassGroups, s.conflictingClassGroups), mergeConfigProperties(t.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), mergeArrayProperties(t, s, "orderSensitiveModifiers"), t), overrideProperty = (t, i, a) => {
	a !== void 0 && (t[i] = a);
}, overrideConfigProperties = (t, i) => {
	if (i) for (let a in i) overrideProperty(t, a, i[a]);
}, mergeConfigProperties = (t, i) => {
	if (i) for (let a in i) mergeArrayProperties(t, i, a);
}, mergeArrayProperties = (t, i, a) => {
	let o = i[a];
	o !== void 0 && (t[a] = t[a] ? t[a].concat(o) : o);
}, extendTailwindMerge = (t, ...i) => typeof t == "function" ? createTailwindMerge(getDefaultConfig, t, ...i) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), t), ...i), twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
function cn(...t) {
	return twMerge(clsx(t));
}
var SPACE_REGEX = /\s+/g, removeExtraSpaces = (t) => typeof t != "string" || !t ? t : t.replace(SPACE_REGEX, " ").trim(), cx$1 = (...t) => {
	let i = [], a = (t) => {
		if (!t && t !== 0 && t !== 0n) return;
		if (Array.isArray(t)) {
			for (let i = 0, o = t.length; i < o; i++) a(t[i]);
			return;
		}
		let o = typeof t;
		if (o === "string" || o === "number" || o === "bigint") {
			if (o === "number" && t !== t) return;
			i.push(String(t));
		} else if (o === "object") {
			let a = Object.keys(t);
			for (let o = 0, s = a.length; o < s; o++) {
				let s = a[o];
				t[s] && i.push(s);
			}
		}
	};
	for (let i = 0, o = t.length; i < o; i++) {
		let o = t[i];
		o != null && a(o);
	}
	return i.length > 0 ? removeExtraSpaces(i.join(" ")) : void 0;
}, falsyToString = (t) => t === !1 ? "false" : t === !0 ? "true" : t === 0 ? "0" : t, isEmptyObject = (t) => {
	if (!t || typeof t != "object") return !0;
	for (let i in t) return !1;
	return !0;
}, isEqual = (t, i) => {
	if (t === i) return !0;
	if (!t || !i) return !1;
	let a = Object.keys(t), o = Object.keys(i);
	if (a.length !== o.length) return !1;
	for (let s = 0; s < a.length; s++) {
		let c = a[s];
		if (!o.includes(c) || t[c] !== i[c]) return !1;
	}
	return !0;
}, joinObjects = (t, i) => {
	for (let a in i) if (Object.prototype.hasOwnProperty.call(i, a)) {
		let o = i[a];
		a in t ? t[a] = cx$1(t[a], o) : t[a] = o;
	}
	return t;
}, flat = (t, i) => {
	for (let a = 0; a < t.length; a++) {
		let o = t[a];
		Array.isArray(o) ? flat(o, i) : o && i.push(o);
	}
}, flatMergeArrays = (...t) => {
	let i = [];
	flat(t, i);
	let a = [];
	for (let t = 0; t < i.length; t++) i[t] && a.push(i[t]);
	return a;
}, mergeObjects = (t, i) => {
	let a = {};
	for (let o in t) {
		let s = t[o];
		if (o in i) {
			let t = i[o];
			Array.isArray(s) || Array.isArray(t) ? a[o] = flatMergeArrays(t, s) : typeof s == "object" && typeof t == "object" && s && t ? a[o] = mergeObjects(s, t) : a[o] = t + " " + s;
		} else a[o] = s;
	}
	for (let o in i) o in t || (a[o] = i[o]);
	return a;
}, defaultConfig = {
	twMerge: !0,
	twMergeConfig: {}
};
function createState() {
	let t = null, i = {}, a = !1;
	return {
		get cachedTwMerge() {
			return t;
		},
		set cachedTwMerge(i) {
			t = i;
		},
		get cachedTwMergeConfig() {
			return i;
		},
		set cachedTwMergeConfig(t) {
			i = t;
		},
		get didTwMergeConfigChange() {
			return a;
		},
		set didTwMergeConfigChange(t) {
			a = t;
		},
		reset() {
			t = null, i = {}, a = !1;
		}
	};
}
var state$1 = createState(), getTailwindVariants = (t) => {
	let i = (i, a) => {
		let { extend: o = null, slots: s = {}, variants: c = {}, compoundVariants: l = [], compoundSlots: u = [], defaultVariants: d = {} } = i, f = {
			...defaultConfig,
			...a
		}, p = o?.base ? cx$1(o.base, i?.base) : i?.base, m = o?.variants && !isEmptyObject(o.variants) ? mergeObjects(c, o.variants) : c, h = o?.defaultVariants && !isEmptyObject(o.defaultVariants) ? {
			...o.defaultVariants,
			...d
		} : d;
		!isEmptyObject(f.twMergeConfig) && !isEqual(f.twMergeConfig, state$1.cachedTwMergeConfig) && (state$1.didTwMergeConfigChange = !0, state$1.cachedTwMergeConfig = f.twMergeConfig);
		let g = isEmptyObject(o?.slots), _ = isEmptyObject(s) ? {} : {
			base: cx$1(i?.base, g && o?.base),
			...s
		}, v = g ? _ : joinObjects({ ...o?.slots }, isEmptyObject(_) ? { base: i?.base } : _), y = isEmptyObject(o?.compoundVariants) ? l : flatMergeArrays(o?.compoundVariants, l), b = (i) => {
			if (isEmptyObject(m) && isEmptyObject(s) && g) return t(p, i?.class, i?.className)(f);
			if (y && !Array.isArray(y)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);
			if (u && !Array.isArray(u)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof u}`);
			let a = (t, a = m, o = null, s = null) => {
				let c = a[t];
				if (!c || isEmptyObject(c)) return null;
				let l = s?.[t] ?? i?.[t];
				if (l === null) return null;
				let u = falsyToString(l);
				if (typeof u == "object") return null;
				let d = h?.[t];
				return c[(u ?? falsyToString(d)) || "false"];
			}, o = () => {
				if (!m) return null;
				let t = Object.keys(m), i = [];
				for (let o = 0; o < t.length; o++) {
					let s = a(t[o], m);
					s && i.push(s);
				}
				return i;
			}, c = (t, i) => {
				if (!m || typeof m != "object") return null;
				let o = [];
				for (let s in m) {
					let c = a(s, m, t, i), l = t === "base" && typeof c == "string" ? c : c && c[t];
					l && o.push(l);
				}
				return o;
			}, l = {};
			for (let t in i) {
				let a = i[t];
				a !== void 0 && (l[t] = a);
			}
			let d = (t, a) => {
				let o = typeof i?.[t] == "object" ? { [t]: i[t]?.initial } : {};
				return {
					...h,
					...l,
					...o,
					...a
				};
			}, _ = (t = [], i) => {
				let a = [], o = t.length;
				for (let s = 0; s < o; s++) {
					let { class: o, className: c, ...l } = t[s], u = !0, f = d(null, i);
					for (let t in l) {
						let i = l[t], a = f[t];
						if (Array.isArray(i)) {
							if (!i.includes(a)) {
								u = !1;
								break;
							}
						} else {
							if ((i == null || i === !1) && (a == null || a === !1)) continue;
							if (a !== i) {
								u = !1;
								break;
							}
						}
					}
					u && (o && a.push(o), c && a.push(c));
				}
				return a;
			}, b = (i) => {
				let a = _(y, i);
				if (!Array.isArray(a)) return a;
				let o = {}, s = t;
				for (let t = 0; t < a.length; t++) {
					let i = a[t];
					if (typeof i == "string") o.base = s(o.base, i)(f);
					else if (typeof i == "object") for (let t in i) o[t] = s(o[t], i[t])(f);
				}
				return o;
			}, x = (t) => {
				if (u.length < 1) return null;
				let i = {}, a = d(null, t);
				for (let t = 0; t < u.length; t++) {
					let { slots: o = [], class: s, className: c, ...l } = u[t];
					if (!isEmptyObject(l)) {
						let t = !0;
						for (let i in l) {
							let o = a[i], s = l[i];
							if (o === void 0 || (Array.isArray(s) ? !s.includes(o) : s !== o)) {
								t = !1;
								break;
							}
						}
						if (!t) continue;
					}
					for (let t = 0; t < o.length; t++) {
						let a = o[t];
						i[a] || (i[a] = []), i[a].push([s, c]);
					}
				}
				return i;
			};
			if (!isEmptyObject(s) || !g) {
				let i = {};
				if (typeof v == "object" && !isEmptyObject(v)) {
					let a = t;
					for (let t in v) i[t] = (i) => {
						let o = b(i), s = x(i);
						return a(v[t], c(t, i), o ? o[t] : void 0, s ? s[t] : void 0, i?.class, i?.className)(f);
					};
				}
				return i;
			}
			return t(p, o(), _(y), i?.class, i?.className)(f);
		};
		return b.variantKeys = (() => {
			if (!(!m || typeof m != "object")) return Object.keys(m);
		})(), b.extend = o, b.base = p, b.slots = v, b.variants = m, b.defaultVariants = h, b.compoundSlots = u, b.compoundVariants = y, b;
	};
	return {
		tv: i,
		createTV: (t) => (a, o) => i(a, o ? mergeObjects(t, o) : t)
	};
}, createTwMerge = (t) => isEmptyObject(t) ? twMerge : extendTailwindMerge({
	...t,
	extend: {
		theme: t.theme,
		classGroups: t.classGroups,
		conflictingClassGroupModifiers: t.conflictingClassGroupModifiers,
		conflictingClassGroups: t.conflictingClassGroups,
		...t.extend
	}
}), executeMerge = (t, i) => {
	let a = cx$1(t);
	return !a || !(i?.twMerge ?? !0) ? a : ((!state$1.cachedTwMerge || state$1.didTwMergeConfigChange) && (state$1.didTwMergeConfigChange = !1, state$1.cachedTwMerge = createTwMerge(state$1.cachedTwMergeConfig)), state$1.cachedTwMerge(a) || void 0);
}, { createTV, tv: tv$1 } = getTailwindVariants((...t) => (i) => executeMerge(t, i));
const buttonVariants = tv$1({
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
});
var root_1$6 = /* @__PURE__ */ from_html("<a><!></a>"), root_2$13 = /* @__PURE__ */ from_html("<button><!></button>");
function Button(t, i) {
	push(i, !0);
	let a = prop(i, "variant", 3, "default"), o = prop(i, "size", 3, "default"), s = prop(i, "ref", 15, null), c = prop(i, "href", 3, void 0), l = prop(i, "type", 3, "button"), u = /* @__PURE__ */ rest_props(i, [
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
	var d = comment(), f = first_child(d), p = (t) => {
		var l = root_1$6();
		attribute_effect(l, (t) => ({
			"data-slot": "button",
			class: t,
			href: i.disabled ? void 0 : c(),
			"aria-disabled": i.disabled,
			role: i.disabled ? "link" : void 0,
			tabindex: i.disabled ? -1 : void 0,
			...u
		}), [() => cn(buttonVariants({
			variant: a(),
			size: o()
		}), i.class)]), snippet(child(l), () => i.children ?? noop$1), reset(l), bind_this(l, (t) => s(t), () => s()), append(t, l);
	}, m = (t) => {
		var c = root_2$13();
		attribute_effect(c, (t) => ({
			"data-slot": "button",
			class: t,
			type: l(),
			disabled: i.disabled,
			...u
		}), [() => cn(buttonVariants({
			variant: a(),
			size: o()
		}), i.class)]), snippet(child(c), () => i.children ?? noop$1), reset(c), bind_this(c, (t) => s(t), () => s()), append(t, c);
	};
	if_block(f, (t) => {
		c() ? t(p) : t(m, -1);
	}), append(t, d), pop();
}
var root$18 = /* @__PURE__ */ from_html("<div class=\"relative w-15 h-15 shrink-0 overflow-hidden\"><div class=\"absolute top-[18%] left-[-75%] w-[250%] py-[0.25em] pr-[1.5em] -rotate-45 bg-primary text-white text-[0.6rem] font-bold text-center shadow-md leading-none pointer-events-none\"> </div></div>");
function VersionBadge(t, i) {
	let a = prop(i, "version", 3, "main");
	var o = root$18(), s = child(o), c = child(s, !0);
	reset(s), reset(o), template_effect(() => set_text(c, a())), append(t, o);
}
function isObject$1(t) {
	return typeof t == "object" && !!t;
}
var CLASS_VALUE_PRIMITIVE_TYPES$1 = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function isClassValue$1(t) {
	return t == null || CLASS_VALUE_PRIMITIVE_TYPES$1.includes(typeof t) ? !0 : Array.isArray(t) ? t.every((t) => isClassValue$1(t)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1;
}
const BoxSymbol$1 = Symbol("box"), isWritableSymbol$1 = Symbol("is-writable");
function boxWith$1(t, i) {
	let a = /* @__PURE__ */ user_derived(t);
	return i ? {
		[BoxSymbol$1]: !0,
		[isWritableSymbol$1]: !0,
		get current() {
			return get$1(a);
		},
		set current(t) {
			i(t);
		}
	} : {
		[BoxSymbol$1]: !0,
		get current() {
			return t();
		}
	};
}
function isBox$1(t) {
	return isObject$1(t) && BoxSymbol$1 in t;
}
function composeHandlers$1(...t) {
	return function(i) {
		for (let a of t) if (a) {
			if (i.defaultPrevented) return;
			typeof a == "function" ? a.call(this, i) : a.current?.call(this, i);
		}
	};
}
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, NEWLINE_REGEX = /\n/g, WHITESPACE_REGEX = /^\s*/, PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, COLON_REGEX = /^:\s*/, VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, SEMICOLON_REGEX = /^[;\s]*/, TRIM_REGEX = /^\s+|\s+$/g, NEWLINE = "\n", FORWARD_SLASH = "/", ASTERISK = "*", EMPTY_STRING = "", TYPE_COMMENT = "comment", TYPE_DECLARATION = "declaration";
function index(t, i) {
	if (typeof t != "string") throw TypeError("First argument must be a string");
	if (!t) return [];
	i ||= {};
	var a = 1, o = 1;
	function s(t) {
		var i = t.match(NEWLINE_REGEX);
		i && (a += i.length);
		var s = t.lastIndexOf(NEWLINE);
		o = ~s ? t.length - s : o + t.length;
	}
	function c() {
		var t = {
			line: a,
			column: o
		};
		return function(i) {
			return i.position = new l(t), f(), i;
		};
	}
	function l(t) {
		this.start = t, this.end = {
			line: a,
			column: o
		}, this.source = i.source;
	}
	l.prototype.content = t;
	function u(s) {
		var c = /* @__PURE__ */ Error(i.source + ":" + a + ":" + o + ": " + s);
		if (c.reason = s, c.filename = i.source, c.line = a, c.column = o, c.source = t, !i.silent) throw c;
	}
	function d(i) {
		var a = i.exec(t);
		if (a) {
			var o = a[0];
			return s(o), t = t.slice(o.length), a;
		}
	}
	function f() {
		d(WHITESPACE_REGEX);
	}
	function p(t) {
		var i;
		for (t ||= []; i = m();) i !== !1 && t.push(i);
		return t;
	}
	function m() {
		var i = c();
		if (!(FORWARD_SLASH != t.charAt(0) || ASTERISK != t.charAt(1))) {
			for (var a = 2; EMPTY_STRING != t.charAt(a) && (ASTERISK != t.charAt(a) || FORWARD_SLASH != t.charAt(a + 1));) ++a;
			if (a += 2, EMPTY_STRING === t.charAt(a - 1)) return u("End of comment missing");
			var l = t.slice(2, a - 2);
			return o += 2, s(l), t = t.slice(a), o += 2, i({
				type: TYPE_COMMENT,
				comment: l
			});
		}
	}
	function h() {
		var t = c(), i = d(PROPERTY_REGEX);
		if (i) {
			if (m(), !d(COLON_REGEX)) return u("property missing ':'");
			var a = d(VALUE_REGEX), o = t({
				type: TYPE_DECLARATION,
				property: trim(i[0].replace(COMMENT_REGEX, EMPTY_STRING)),
				value: a ? trim(a[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
			});
			return d(SEMICOLON_REGEX), o;
		}
	}
	function g() {
		var t = [];
		p(t);
		for (var i; i = h();) i !== !1 && (t.push(i), p(t));
		return t;
	}
	return f(), g();
}
function trim(t) {
	return t ? t.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
function StyleToObject(t, i) {
	let a = null;
	if (!t || typeof t != "string") return a;
	let o = index(t), s = typeof i == "function";
	return o.forEach((t) => {
		if (t.type !== "declaration") return;
		let { property: o, value: c } = t;
		s ? i(o, c, t) : c && (a ||= {}, a[o] = c);
	}), a;
}
var NUMBER_CHAR_RE$1 = /\d/, STR_SPLITTERS$1 = [
	"-",
	"_",
	"/",
	"."
];
function isUppercase$1(t = "") {
	if (!NUMBER_CHAR_RE$1.test(t)) return t !== t.toLowerCase();
}
function splitByCase$1(t) {
	let i = [], a = "", o, s;
	for (let c of t) {
		let t = STR_SPLITTERS$1.includes(c);
		if (t === !0) {
			i.push(a), a = "", o = void 0;
			continue;
		}
		let l = isUppercase$1(c);
		if (s === !1) {
			if (o === !1 && l === !0) {
				i.push(a), a = c, o = l;
				continue;
			}
			if (o === !0 && l === !1 && a.length > 1) {
				let t = a.at(-1);
				i.push(a.slice(0, Math.max(0, a.length - 1))), a = t + c, o = l;
				continue;
			}
		}
		a += c, o = l, s = t;
	}
	return i.push(a), i;
}
function pascalCase$1(t) {
	return t ? splitByCase$1(t).map((t) => upperFirst$1(t)).join("") : "";
}
function camelCase$1(t) {
	return lowerFirst$1(pascalCase$1(t || ""));
}
function upperFirst$1(t) {
	return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function lowerFirst$1(t) {
	return t ? t[0].toLowerCase() + t.slice(1) : "";
}
function cssToStyleObj$1(t) {
	if (!t) return {};
	let i = {};
	function a(t, a) {
		if (t.startsWith("-moz-") || t.startsWith("-webkit-") || t.startsWith("-ms-") || t.startsWith("-o-")) {
			i[pascalCase$1(t)] = a;
			return;
		}
		if (t.startsWith("--")) {
			i[t] = a;
			return;
		}
		i[camelCase$1(t)] = a;
	}
	return StyleToObject(t, a), i;
}
function executeCallbacks$1(...t) {
	return (...i) => {
		for (let a of t) typeof a == "function" && a(...i);
	};
}
function createParser$1(t, i) {
	let a = RegExp(t, "g");
	return (t) => {
		if (typeof t != "string") throw TypeError(`expected an argument of type string, but got ${typeof t}`);
		return t.match(a) ? t.replace(a, i) : t;
	};
}
var camelToKebab$2 = createParser$1(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function styleToCSS$1(t) {
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError(`expected an argument of type object, but got ${typeof t}`);
	return Object.keys(t).map((i) => `${camelToKebab$2(i)}: ${t[i]};`).join("\n");
}
function styleToString$1(t = {}) {
	return styleToCSS$1(t).replace("\n", " ");
}
var EVENT_LIST$1 = /* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split(".");
const EVENT_LIST_SET$1 = new Set(EVENT_LIST$1);
function isEventHandler$1(t) {
	return EVENT_LIST_SET$1.has(t);
}
function mergeProps$1(...t) {
	let i = { ...t[0] };
	for (let a = 1; a < t.length; a++) {
		let o = t[a];
		if (o) {
			for (let t of Object.keys(o)) {
				let a = i[t], s = o[t], c = typeof a == "function", l = typeof s == "function";
				if (c && typeof l && isEventHandler$1(t)) i[t] = composeHandlers$1(a, s);
				else if (c && l) i[t] = executeCallbacks$1(a, s);
				else if (t === "class") {
					let o = isClassValue$1(a), c = isClassValue$1(s);
					o && c ? i[t] = clsx(a, s) : o ? i[t] = clsx(a) : c && (i[t] = clsx(s));
				} else if (t === "style") {
					let o = typeof a == "object", c = typeof s == "object", l = typeof a == "string", u = typeof s == "string";
					if (o && c) i[t] = {
						...a,
						...s
					};
					else if (o && u) {
						let o = cssToStyleObj$1(s);
						i[t] = {
							...a,
							...o
						};
					} else if (l && c) i[t] = {
						...cssToStyleObj$1(a),
						...s
					};
					else if (l && u) {
						let o = cssToStyleObj$1(a), c = cssToStyleObj$1(s);
						i[t] = {
							...o,
							...c
						};
					} else o ? i[t] = a : c ? i[t] = s : l ? i[t] = a : u && (i[t] = s);
				} else i[t] = s === void 0 ? a : s;
			}
			for (let t of Object.getOwnPropertySymbols(o)) {
				let a = i[t], s = o[t];
				i[t] = s === void 0 ? a : s;
			}
		}
	}
	return typeof i.style == "object" && (i.style = styleToString$1(i.style).replaceAll("\n", " ")), i.hidden === !1 && (i.hidden = void 0, delete i.hidden), i.disabled === !1 && (i.disabled = void 0, delete i.disabled), i;
}
const defaultWindow$2 = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function getActiveElement$4(t) {
	let i = t.activeElement;
	for (; i?.shadowRoot;) {
		let t = i.shadowRoot.activeElement;
		if (t === i) break;
		i = t;
	}
	return i;
}
URLSearchParams, Symbol.iterator, new class {
	#e;
	#t;
	constructor(t = {}) {
		let { window: i = defaultWindow$2, document: a = i?.document } = t;
		i !== void 0 && (this.#e = a, this.#t = createSubscriber((t) => {
			let a = on(i, "focusin", t), o = on(i, "focusout", t);
			return () => {
				a(), o();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? getActiveElement$4(this.#e) : null;
	}
}();
var Context$1 = class {
	#e;
	#t;
	constructor(t) {
		this.#e = t, this.#t = Symbol(t);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return hasContext(this.#t);
	}
	get() {
		let t = getContext(this.#t);
		if (t === void 0) throw Error(`Context "${this.#e}" not found`);
		return t;
	}
	getOr(t) {
		let i = getContext(this.#t);
		return i === void 0 ? t : i;
	}
	set(t) {
		return setContext(this.#t, t);
	}
};
function runEffect$2(t, i) {
	switch (t) {
		case "post":
			user_effect(i);
			break;
		case "pre":
			user_pre_effect(i);
			break;
	}
}
function runWatcher$2(t, i, a, o = {}) {
	let { lazy: s = !1 } = o, c = !s, l = Array.isArray(t) ? [] : void 0;
	runEffect$2(i, () => {
		let i = Array.isArray(t) ? t.map((t) => t()) : t();
		if (!c) {
			c = !0, l = i;
			return;
		}
		let o = untrack(() => a(i, l));
		return l = i, o;
	});
}
function runWatcherOnce$2(t, i, a) {
	let o = effect_root(() => {
		let s = !1;
		runWatcher$2(t, i, (t, i) => {
			if (s) {
				o();
				return;
			}
			let c = a(t, i);
			return s = !0, c;
		}, { lazy: !0 });
	});
	user_effect(() => o);
}
function watch$2(t, i, a) {
	runWatcher$2(t, "post", i, a);
}
function watchPre$2(t, i, a) {
	runWatcher$2(t, "pre", i, a);
}
watch$2.pre = watchPre$2;
function watchOnce$2(t, i) {
	runWatcherOnce$2(t, "post", i);
}
function watchOncePre$2(t, i) {
	runWatcherOnce$2(t, "pre", i);
}
watchOnce$2.pre = watchOncePre$2;
function debounce$2(t, i) {
	let a, o = null;
	return (...s) => new Promise((c) => {
		o && o(void 0), o = c, clearTimeout(a), a = setTimeout(async () => {
			let i = await t(...s);
			o &&= (o(i), null);
		}, i);
	});
}
function throttle$1(t, i) {
	let a = 0, o = null;
	return (...s) => {
		let c = Date.now();
		return a && c - a < i ? o ?? Promise.resolve(void 0) : (a = c, o = t(...s), o);
	};
}
function runResource$1(t, i, a = {}, o) {
	let { lazy: s = !1, once: c = !1, initialValue: l, debounce: u, throttle: d } = a, f = /* @__PURE__ */ state(proxy(l)), p = /* @__PURE__ */ state(!1), m = /* @__PURE__ */ state(void 0), h = /* @__PURE__ */ state(proxy([])), g = () => {
		get$1(h).forEach((t) => t()), set(h, [], !0);
	}, _ = (t) => {
		set(h, [...get$1(h), t], !0);
	}, v = async (t, a, o = !1) => {
		try {
			set(p, !0), set(m, void 0), g();
			let s = new AbortController();
			_(() => s.abort());
			let c = await i(t, a, {
				data: get$1(f),
				refetching: o,
				onCleanup: _,
				signal: s.signal
			});
			return set(f, c, !0), c;
		} catch (t) {
			t instanceof DOMException && t.name === "AbortError" || set(m, t, !0);
			return;
		} finally {
			set(p, !1);
		}
	}, y = u ? debounce$2(v, u) : d ? throttle$1(v, d) : v, b = Array.isArray(t) ? t : [t], x;
	return o((i, a) => {
		c && x || (x = i, y(Array.isArray(t) ? i : i[0], Array.isArray(t) ? a : a?.[0]));
	}, { lazy: s }), {
		get current() {
			return get$1(f);
		},
		get loading() {
			return get$1(p);
		},
		get error() {
			return get$1(m);
		},
		mutate: (t) => {
			set(f, t, !0);
		},
		refetch: (i) => {
			let a = b.map((t) => t());
			return y(Array.isArray(t) ? a : a[0], Array.isArray(t) ? a : a[0], i ?? !0);
		}
	};
}
function resource$1(t, i, a) {
	return runResource$1(t, i, a, (i, a) => {
		let o = Array.isArray(t) ? t : [t];
		watch$2(() => o.map((t) => t()), (t, a) => {
			i(t, a ?? []);
		}, a);
	});
}
function resourcePre$1(t, i, a) {
	return runResource$1(t, i, a, (i, a) => {
		let o = Array.isArray(t) ? t : [t];
		watch$2.pre(() => o.map((t) => t()), (t, a) => {
			i(t, a ?? []);
		}, a);
	});
}
resource$1.pre = resourcePre$1;
var DOCUMENT_NODE$1 = 9;
function isDocument$1(t) {
	return isObject$1(t) && t.nodeType === DOCUMENT_NODE$1;
}
function isWindow$1(t) {
	return isObject$1(t) && t.constructor?.name === "VisualViewport";
}
function getDocument$1(t) {
	return isDocument$1(t) ? t : isWindow$1(t) ? t.document : t?.ownerDocument ?? document;
}
function getActiveElement$3(t) {
	let i = t.activeElement;
	for (; i?.shadowRoot;) {
		let t = i.shadowRoot.activeElement;
		if (t === i) break;
		i = t;
	}
	return i;
}
var DOMContext$1 = class {
	element;
	#e = /* @__PURE__ */ user_derived(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return get$1(this.#e);
	}
	set root(t) {
		set(this.#e, t);
	}
	constructor(t) {
		typeof t == "function" ? this.element = boxWith$1(t) : this.element = t;
	}
	getDocument = () => getDocument$1(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => getActiveElement$3(this.root);
	isActiveElement = (t) => t === this.getActiveElement();
	getElementById(t) {
		return this.root.getElementById(t);
	}
	querySelector = (t) => this.root ? this.root.querySelector(t) : null;
	querySelectorAll = (t) => this.root ? this.root.querySelectorAll(t) : [];
	setTimeout = (t, i) => this.getWindow().setTimeout(t, i);
	clearTimeout = (t) => this.getWindow().clearTimeout(t);
};
function attachRef$1(t, i) {
	return { [createAttachmentKey()]: (a) => isBox$1(t) ? (t.current = a, untrack(() => i?.(a)), () => {
		"isConnected" in a && a.isConnected || (t.current = null, i?.(null));
	}) : (t(a), untrack(() => i?.(a)), () => {
		"isConnected" in a && a.isConnected || (t(null), i?.(null));
	}) };
}
var BitsAttrs = class {
	#e;
	#t;
	attrs;
	constructor(t) {
		this.#e = t.getVariant ? t.getVariant() : null, this.#t = this.#e ? `data-${this.#e}-` : `data-${t.component}-`, this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(t.parts.map((t) => [t, this.getAttr(t)]));
	}
	getAttr(t, i) {
		return i ? `data-${i}-${t}` : `${this.#t}${t}`;
	}
	selector(t, i) {
		return `[${this.getAttr(t, i)}]`;
	}
};
function createBitsAttrs(t) {
	let i = new BitsAttrs(t);
	return {
		...i.attrs,
		selector: i.selector,
		getAttr: i.getAttr
	};
}
function createId(t, i) {
	return i === void 0 ? `bits-${t}` : `bits-${t}-${i}`;
}
var avatarAttrs = createBitsAttrs({
	component: "avatar",
	parts: [
		"root",
		"image",
		"fallback"
	]
}), AvatarRootContext = new Context$1("Avatar.Root"), AvatarRootState = class t {
	static create(i) {
		return AvatarRootContext.set(new t(i));
	}
	opts;
	domContext;
	attachment;
	constructor(t) {
		this.opts = t, this.domContext = new DOMContext$1(this.opts.ref), this.loadImage = this.loadImage.bind(this), this.attachment = attachRef$1(this.opts.ref);
	}
	loadImage(t, i, a) {
		if (this.opts.loadingStatus.current === "loaded") return;
		let o, s = new Image();
		return s.src = t, i !== void 0 && (s.crossOrigin = i), a && (s.referrerPolicy = a), this.opts.loadingStatus.current = "loading", s.onload = () => {
			o = this.domContext.setTimeout(() => {
				this.opts.loadingStatus.current = "loaded";
			}, this.opts.delayMs.current);
		}, s.onerror = () => {
			this.opts.loadingStatus.current = "error";
		}, () => {
			o && this.domContext.clearTimeout(o);
		};
	}
	#e = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		[avatarAttrs.root]: "",
		"data-status": this.opts.loadingStatus.current,
		...this.attachment
	}));
	get props() {
		return get$1(this.#e);
	}
	set props(t) {
		set(this.#e, t);
	}
}, AvatarImageState = class t {
	static create(i) {
		return new t(i, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(t, i) {
		this.opts = t, this.root = i, this.attachment = attachRef$1(this.opts.ref), watch$2.pre([() => this.opts.src.current, () => this.opts.crossOrigin.current], ([t, i]) => {
			if (!t) {
				this.root.opts.loadingStatus.current = "error";
				return;
			}
			this.root.loadImage(t, i, this.opts.referrerPolicy.current);
		});
	}
	#e = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		style: { display: this.root.opts.loadingStatus.current === "loaded" ? "block" : "none" },
		"data-status": this.root.opts.loadingStatus.current,
		[avatarAttrs.image]: "",
		src: this.opts.src.current,
		crossorigin: this.opts.crossOrigin.current,
		referrerpolicy: this.opts.referrerPolicy.current,
		...this.attachment
	}));
	get props() {
		return get$1(this.#e);
	}
	set props(t) {
		set(this.#e, t);
	}
}, AvatarFallbackState = class t {
	static create(i) {
		return new t(i, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(t, i) {
		this.opts = t, this.root = i, this.attachment = attachRef$1(this.opts.ref);
	}
	#e = /* @__PURE__ */ user_derived(() => this.root.opts.loadingStatus.current === "loaded" ? { display: "none" } : void 0);
	get style() {
		return get$1(this.#e);
	}
	set style(t) {
		set(this.#e, t);
	}
	#t = /* @__PURE__ */ user_derived(() => ({
		style: this.style,
		"data-status": this.root.opts.loadingStatus.current,
		[avatarAttrs.fallback]: "",
		...this.attachment
	}));
	get props() {
		return get$1(this.#t);
	}
	set props(t) {
		set(this.#t, t);
	}
}, root_2$12 = /* @__PURE__ */ from_html("<div><!></div>");
function Avatar$1(t, i) {
	let a = props_id();
	push(i, !0);
	let o = prop(i, "delayMs", 3, 0), s = prop(i, "loadingStatus", 15, "loading"), c = prop(i, "id", 19, () => createId(a)), l = prop(i, "ref", 15, null), u = /* @__PURE__ */ rest_props(i, [
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
	]), d = AvatarRootState.create({
		delayMs: boxWith$1(() => o()),
		loadingStatus: boxWith$1(() => s(), (t) => {
			s() !== t && (s(t), i.onLoadingStatusChange?.(t));
		}),
		id: boxWith$1(() => c()),
		ref: boxWith$1(() => l(), (t) => l(t))
	}), f = /* @__PURE__ */ user_derived(() => mergeProps$1(u, d.props));
	var p = comment(), m = first_child(p), h = (t) => {
		var a = comment();
		snippet(first_child(a), () => i.child, () => ({ props: get$1(f) })), append(t, a);
	}, g = (t) => {
		var a = root_2$12();
		attribute_effect(a, () => ({ ...get$1(f) })), snippet(child(a), () => i.children ?? noop$1), reset(a), append(t, a);
	};
	if_block(m, (t) => {
		i.child ? t(h) : t(g, -1);
	}), append(t, p), pop();
}
var root_2$11 = /* @__PURE__ */ from_html("<img/>");
function Avatar_image$1(t, i) {
	let a = props_id();
	push(i, !0);
	let o = prop(i, "id", 19, () => createId(a)), s = prop(i, "ref", 15, null), c = prop(i, "crossorigin", 3, void 0), l = prop(i, "referrerpolicy", 3, void 0), u = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"src",
		"child",
		"id",
		"ref",
		"crossorigin",
		"referrerpolicy"
	]), d = AvatarImageState.create({
		src: boxWith$1(() => i.src),
		id: boxWith$1(() => o()),
		ref: boxWith$1(() => s(), (t) => s(t)),
		crossOrigin: boxWith$1(() => c()),
		referrerPolicy: boxWith$1(() => l())
	}), f = /* @__PURE__ */ user_derived(() => mergeProps$1(u, d.props));
	var p = comment(), m = first_child(p), h = (t) => {
		var a = comment();
		snippet(first_child(a), () => i.child, () => ({ props: get$1(f) })), append(t, a);
	}, g = (t) => {
		var a = root_2$11();
		attribute_effect(a, () => ({
			...get$1(f),
			src: i.src
		})), replay_events(a), append(t, a);
	};
	if_block(m, (t) => {
		i.child ? t(h) : t(g, -1);
	}), append(t, p), pop();
}
var root_2$10 = /* @__PURE__ */ from_html("<span><!></span>");
function Avatar_fallback$1(t, i) {
	let a = props_id();
	push(i, !0);
	let o = prop(i, "id", 19, () => createId(a)), s = prop(i, "ref", 15, null), c = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref"
	]), l = AvatarFallbackState.create({
		id: boxWith$1(() => o()),
		ref: boxWith$1(() => s(), (t) => s(t))
	}), u = /* @__PURE__ */ user_derived(() => mergeProps$1(c, l.props));
	var d = comment(), f = first_child(d), p = (t) => {
		var a = comment();
		snippet(first_child(a), () => i.child, () => ({ props: get$1(u) })), append(t, a);
	}, m = (t) => {
		var a = root_2$10();
		attribute_effect(a, () => ({ ...get$1(u) })), snippet(child(a), () => i.children ?? noop$1), reset(a), append(t, a);
	};
	if_block(f, (t) => {
		i.child ? t(p) : t(m, -1);
	}), append(t, d), pop();
}
var labelAttrs = createBitsAttrs({
	component: "label",
	parts: ["root"]
}), LabelRootState = class t {
	static create(i) {
		return new t(i);
	}
	opts;
	attachment;
	constructor(t) {
		this.opts = t, this.attachment = attachRef$1(this.opts.ref), this.onmousedown = this.onmousedown.bind(this);
	}
	onmousedown(t) {
		t.detail > 1 && t.preventDefault();
	}
	#e = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		[labelAttrs.root]: "",
		onmousedown: this.onmousedown,
		...this.attachment
	}));
	get props() {
		return get$1(this.#e);
	}
	set props(t) {
		set(this.#e, t);
	}
}, root_2$9 = /* @__PURE__ */ from_html("<label><!></label>");
function Label$1(t, i) {
	let a = props_id();
	push(i, !0);
	let o = prop(i, "id", 19, () => createId(a)), s = prop(i, "ref", 15, null), c = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref",
		"for"
	]), l = LabelRootState.create({
		id: boxWith$1(() => o()),
		ref: boxWith$1(() => s(), (t) => s(t))
	}), u = /* @__PURE__ */ user_derived(() => mergeProps$1(c, l.props, { for: i.for }));
	var d = comment(), f = first_child(d), p = (t) => {
		var a = comment();
		snippet(first_child(a), () => i.child, () => ({ props: get$1(u) })), append(t, a);
	}, m = (t) => {
		var a = root_2$9();
		attribute_effect(a, () => ({
			...get$1(u),
			for: i.for
		})), snippet(child(a), () => i.children ?? noop$1), reset(a), append(t, a);
	};
	if_block(f, (t) => {
		i.child ? t(p) : t(m, -1);
	}), append(t, d), pop();
}
function Avatar(t, i) {
	push(i, !0);
	let a = prop(i, "ref", 15, null), o = prop(i, "loadingStatus", 15, "loading"), s = prop(i, "size", 3, "default"), c = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"loadingStatus",
		"size",
		"class"
	]);
	var l = comment(), u = first_child(l);
	{
		let t = /* @__PURE__ */ user_derived(() => cn("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten", i.class));
		component(u, () => Avatar$1, (i, l) => {
			l(i, spread_props({
				"data-slot": "avatar",
				get "data-size"() {
					return s();
				},
				get class() {
					return get$1(t);
				}
			}, () => c, {
				get ref() {
					return a();
				},
				set ref(t) {
					a(t);
				},
				get loadingStatus() {
					return o();
				},
				set loadingStatus(t) {
					o(t);
				}
			}));
		});
	}
	append(t, l), pop();
}
function Avatar_image(t, i) {
	push(i, !0);
	let a = prop(i, "ref", 15, null), o = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var s = comment(), c = first_child(s);
	{
		let t = /* @__PURE__ */ user_derived(() => cn("rounded-full aspect-square size-full object-cover", i.class));
		component(c, () => Avatar_image$1, (i, s) => {
			s(i, spread_props({
				"data-slot": "avatar-image",
				get class() {
					return get$1(t);
				}
			}, () => o, {
				get ref() {
					return a();
				},
				set ref(t) {
					a(t);
				}
			}));
		});
	}
	append(t, s), pop();
}
function Avatar_fallback(t, i) {
	push(i, !0);
	let a = prop(i, "ref", 15, null), o = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var s = comment(), c = first_child(s);
	{
		let t = /* @__PURE__ */ user_derived(() => cn("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", i.class));
		component(c, () => Avatar_fallback$1, (i, s) => {
			s(i, spread_props({
				"data-slot": "avatar-fallback",
				get class() {
					return get$1(t);
				}
			}, () => o, {
				get ref() {
					return a();
				},
				set ref(t) {
					a(t);
				}
			}));
		});
	}
	append(t, s), pop();
}
var root$17 = /* @__PURE__ */ from_html("<span><!></span>");
function Avatar_badge(t, i) {
	push(i, !0);
	let a = prop(i, "ref", 15, null), o = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var s = root$17();
	attribute_effect(s, (t) => ({
		"data-slot": "avatar-badge",
		class: t,
		...o
	}), [() => cn("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", i.class)]), snippet(child(s), () => i.children ?? noop$1), reset(s), bind_this(s, (t) => a(t), () => a()), append(t, s), pop();
}
var root_1$5 = /* @__PURE__ */ from_html("<!> <!> <!>", 1);
function ChannelAvatar(t, i) {
	let a = prop(i, "fallbackText", 3, "Channel Logo");
	Avatar(t, {
		class: "rounded-lg",
		children: (t, o) => {
			var s = root_1$5(), c = first_child(s);
			Avatar_image(c, {
				get src() {
					return i.imgSrc;
				},
				get alt() {
					return a();
				}
			});
			var l = sibling(c, 2), u = (t) => {
				{
					let a = /* @__PURE__ */ user_derived(() => i.isConnected ? "bg-green-500" : "bg-red-500");
					Avatar_badge(t, { get class() {
						return get$1(a);
					} });
				}
			};
			if_block(l, (t) => {
				typeof i.isConnected == "boolean" && t(u);
			}), Avatar_fallback(sibling(l, 2), {
				children: (t, i) => {
					next();
					var o = text();
					template_effect(() => set_text(o, a())), append(t, o);
				},
				$$slots: { default: !0 }
			}), append(t, s);
		},
		$$slots: { default: !0 }
	});
}
var store$4, DEFAULT_CONFIG = {
	lang: void 0,
	message: void 0,
	abortEarly: void 0,
	abortPipeEarly: void 0
};
/* @__NO_SIDE_EFFECTS__ */
function getGlobalConfig(t) {
	return !t && !store$4 ? DEFAULT_CONFIG : {
		lang: t?.lang ?? store$4?.lang,
		message: t?.message,
		abortEarly: t?.abortEarly ?? store$4?.abortEarly,
		abortPipeEarly: t?.abortPipeEarly ?? store$4?.abortPipeEarly
	};
}
var store$3;
/* @__NO_SIDE_EFFECTS__ */
function getGlobalMessage(t) {
	return store$3?.get(t);
}
var store$2;
/* @__NO_SIDE_EFFECTS__ */
function getSchemaMessage(t) {
	return store$2?.get(t);
}
var store$1;
/* @__NO_SIDE_EFFECTS__ */
function getSpecificMessage(t, i) {
	return store$1?.get(t)?.get(i);
}
/* @__NO_SIDE_EFFECTS__ */
function _stringify(t) {
	let i = typeof t;
	return i === "string" ? `"${t}"` : i === "number" || i === "bigint" || i === "boolean" ? `${t}` : i === "object" || i === "function" ? (t && Object.getPrototypeOf(t)?.constructor?.name) ?? "null" : i;
}
function _addIssue(t, i, a, o, s) {
	let c = s && "input" in s ? s.input : a.value, l = s?.expected ?? t.expects ?? null, u = s?.received ?? /* @__PURE__ */ _stringify(c), d = {
		kind: t.kind,
		type: t.type,
		input: c,
		expected: l,
		received: u,
		message: `Invalid ${i}: ${l ? `Expected ${l} but r` : "R"}eceived ${u}`,
		requirement: t.requirement,
		path: s?.path,
		issues: s?.issues,
		lang: o.lang,
		abortEarly: o.abortEarly,
		abortPipeEarly: o.abortPipeEarly
	}, f = t.kind === "schema", p = s?.message ?? t.message ?? /* @__PURE__ */ getSpecificMessage(t.reference, d.lang) ?? (f ? /* @__PURE__ */ getSchemaMessage(d.lang) : null) ?? o.message ?? /* @__PURE__ */ getGlobalMessage(d.lang);
	p !== void 0 && (d.message = typeof p == "function" ? p(d) : p), f && (a.typed = !1), a.issues ? a.issues.push(d) : a.issues = [d];
}
var _standardCache = /* @__PURE__ */ new WeakMap();
/* @__NO_SIDE_EFFECTS__ */
function _getStandardProps(t) {
	let i = _standardCache.get(t);
	return i || (i = {
		version: 1,
		vendor: "valibot",
		validate(i) {
			return t["~run"]({ value: i }, /* @__PURE__ */ getGlobalConfig());
		}
	}, _standardCache.set(t, i)), i;
}
/* @__NO_SIDE_EFFECTS__ */
function maxLength(t, i) {
	return {
		kind: "validation",
		type: "max_length",
		reference: maxLength,
		async: !1,
		expects: `<=${t}`,
		requirement: t,
		message: i,
		"~run"(t, i) {
			return t.typed && t.value.length > this.requirement && _addIssue(this, "length", t, i, { received: `${t.value.length}` }), t;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function minLength(t, i) {
	return {
		kind: "validation",
		type: "min_length",
		reference: minLength,
		async: !1,
		expects: `>=${t}`,
		requirement: t,
		message: i,
		"~run"(t, i) {
			return t.typed && t.value.length < this.requirement && _addIssue(this, "length", t, i, { received: `${t.value.length}` }), t;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function regex(t, i) {
	return {
		kind: "validation",
		type: "regex",
		reference: regex,
		async: !1,
		expects: `${t}`,
		requirement: t,
		message: i,
		"~run"(t, i) {
			return t.typed && !this.requirement.test(t.value) && _addIssue(this, "format", t, i), t;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function string(t) {
	return {
		kind: "schema",
		type: "string",
		reference: string,
		expects: "string",
		async: !1,
		message: t,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(t, i) {
			return typeof t.value == "string" ? t.typed = !0 : _addIssue(this, "type", t, i), t;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function pipe(...t) {
	return {
		...t[0],
		pipe: t,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(i, a) {
			for (let o of t) if (o.kind !== "metadata") {
				if (i.issues && (o.kind === "schema" || o.kind === "transformation")) {
					i.typed = !1;
					break;
				}
				(!i.issues || !a.abortEarly && !a.abortPipeEarly) && (i = o["~run"](i, a));
			}
			return i;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function safeParse(t, i, a) {
	let o = t["~run"]({ value: i }, /* @__PURE__ */ getGlobalConfig(a));
	return {
		typed: o.typed,
		success: !o.issues,
		output: o.value,
		issues: o.issues
	};
}
const fieldVariants = tv$1({
	base: "data-[invalid=true]:text-destructive gap-2 group/field flex w-full",
	variants: { orientation: {
		vertical: "cn-field-orientation-vertical flex-col [&>*]:w-full [&>.sr-only]:w-auto",
		horizontal: "cn-field-orientation-horizontal flex-row items-center has-[>[data-slot=field-content]]:items-start [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "cn-field-orientation-responsive flex-col @md/field-group:flex-row @md/field-group:items-center @md/field-group:has-[>[data-slot=field-content]]:items-start [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
});
var root$14 = /* @__PURE__ */ from_html("<div><!></div>");
function Field(t, i) {
	push(i, !0);
	let a = prop(i, "ref", 15, null), o = prop(i, "orientation", 3, "vertical"), s = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"orientation",
		"children"
	]);
	var c = root$14();
	attribute_effect(c, (t) => ({
		role: "group",
		"data-slot": "field",
		"data-orientation": o(),
		class: t,
		...s
	}), [() => cn(fieldVariants({ orientation: o() }), i.class)]), snippet(child(c), () => i.children ?? noop$1), reset(c), bind_this(c, (t) => a(t), () => a()), append(t, c), pop();
}
var root$11 = /* @__PURE__ */ from_html("<div><!></div>");
function Field_group(t, i) {
	push(i, !0);
	let a = prop(i, "ref", 15, null), o = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var s = root$11();
	attribute_effect(s, (t) => ({
		"data-slot": "field-group",
		class: t,
		...o
	}), [() => cn("gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col", i.class)]), snippet(child(s), () => i.children ?? noop$1), reset(s), bind_this(s, (t) => a(t), () => a()), append(t, s), pop();
}
function Label(t, i) {
	push(i, !0);
	let a = prop(i, "ref", 15, null), o = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var s = comment(), c = first_child(s);
	{
		let t = /* @__PURE__ */ user_derived(() => cn("gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed", i.class));
		component(c, () => Label$1, (i, s) => {
			s(i, spread_props({
				"data-slot": "label",
				get class() {
					return get$1(t);
				}
			}, () => o, {
				get ref() {
					return a();
				},
				set ref(t) {
					a(t);
				}
			}));
		});
	}
	append(t, s), pop();
}
var root_1$2 = /* @__PURE__ */ from_html("<input/>"), root_2$8 = /* @__PURE__ */ from_html("<input/>");
function Input(t, i) {
	push(i, !0);
	let a = prop(i, "ref", 15, null), o = prop(i, "value", 15), s = prop(i, "files", 15), c = prop(i, "data-slot", 3, "input"), l = /* @__PURE__ */ rest_props(i, [
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
	var u = comment(), d = first_child(u), f = (t) => {
		var u = root_1$2();
		attribute_effect(u, (t) => ({
			"data-slot": c(),
			class: t,
			type: "file",
			...l
		}), [() => cn("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", i.class)], void 0, void 0, void 0, !0), bind_this(u, (t) => a(t), () => a()), bind_files(u, s), bind_value(u, o), append(t, u);
	}, p = (t) => {
		var s = root_2$8();
		attribute_effect(s, (t) => ({
			"data-slot": c(),
			class: t,
			type: i.type,
			...l
		}), [() => cn("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", i.class)], void 0, void 0, void 0, !0), bind_this(s, (t) => a(t), () => a()), bind_value(s, o), append(t, s);
	};
	if_block(d, (t) => {
		i.type === "file" ? t(f) : t(p, -1);
	}), append(t, u), pop();
}
const httpGet = async (t) => fetch(t), httpPostUrlEncodedForm = async (t, i) => fetch(t, {
	method: "POST",
	redirect: "manual",
	credentials: "include",
	headers: { "Content-Type": "application/x-www-form-urlencoded" },
	body: i
});
var defaultAuthState = {
	status: !1,
	username: ""
}, createAuthStore = (t) => {
	let { subscribe: i, set: a, update: o } = writable({
		...defaultAuthState,
		...t
	});
	return {
		subscribe: i,
		set: a,
		init: (t) => a(t),
		updateStatus: (t) => o((i) => ({
			...i,
			status: t
		})),
		resetStatus: () => o((t) => ({
			...t,
			status: defaultAuthState.status
		})),
		updateUsername: (t) => o((i) => ({
			...i,
			username: t
		})),
		resetUsername: () => o((t) => ({
			...t,
			username: defaultAuthState.username
		}))
	};
}, submitSocketLogin = async (t) => new Promise((i, o) => {
	socketClient.once("login", (t) => {
		if (t.success) {
			i(t.name);
			return;
		}
		o(t.error);
	}), socketClient.emit("login", t);
}), listenSocketRank = async () => new Promise((t) => {
	socketClient.once("rank", t);
}), submitHTTPLogin = async (t) => {
	await httpPostUrlEncodedForm(new URL("/login", window.location.origin), new URLSearchParams(t));
	let i = await (await httpGet(new URL(window.location.href))).text(), a = new DOMParser().parseFromString(i, "text/html").querySelector("input[name=\"_csrf\"]");
	if (!a) {
		console.warn("login response missing csrf value");
		return;
	}
	let o = a.value;
	pageStore.updateCSRF(o);
}, submitHTTPLogout = async (t) => {
	await httpPostUrlEncodedForm(new URL("/logout", window.location.origin), new URLSearchParams(t));
};
const login = async (i, o) => {
	socketClient.disconnected && await submitSocketConnect();
	let s = submitSocketLogin({
		name: i,
		pw: o
	}), c = listenSocketRank(), l = await s, u = await c;
	if (clientStore.updateName(l), clientStore.updateLoggedIn(!0), clientStore.updateRank(u), !o) return;
	let { csrf: d } = get(pageStore);
	submitHTTPLogin({
		_csrf: d,
		name: i,
		password: o,
		remember: "on"
	});
}, logout = async () => {
	socketClient.connected && await submitSocketDisconnect();
	let { csrf: o } = get(pageStore);
	await submitHTTPLogout({ _csrf: o }), clientStore.resetName(), clientStore.resetLoggedIn(), clientStore.resetRank(), socketClient.disconnected && await submitSocketConnect();
}, authStore = createAuthStore();
var linear = (t) => t;
function fade(t, { delay: i = 0, duration: a = 400, easing: o = linear } = {}) {
	let s = +getComputedStyle(t).opacity;
	return {
		delay: i,
		duration: a,
		easing: o,
		css: (t) => `opacity: ${t * s}`
	};
}
var camelToKebab$1 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function createHugeiconSingleton(t, i) {
	let a = (t, a) => {
		let { color: o = "currentColor", size: s = 24, strokeWidth: c, absoluteStrokeWidth: l = !1, class: u = "", altIcon: d, showAlt: f = !1, ...p } = a, m = {
			xmlns: "http://www.w3.org/2000/svg",
			width: s,
			height: s,
			viewBox: "0 0 24 24",
			fill: "none",
			color: o,
			class: u,
			...p
		}, h = f && d ? d : i, g = c === void 0 ? void 0 : l ? 24 / Number(s) * c : c;
		Object.entries(m).forEach(([i, a]) => {
			t.setAttribute(camelToKebab$1(i), String(a));
		}), t.innerHTML = "", h.forEach(([i, a]) => {
			let o = document.createElementNS("http://www.w3.org/2000/svg", i), s = { ...a };
			g !== void 0 && (s["stroke-width"] = g, s.stroke = "currentColor"), Object.entries(s).forEach(([t, i]) => {
				o.setAttribute(camelToKebab$1(t), String(i));
			}), t.appendChild(o);
		});
	};
	return { render(t, i) {
		return a(t, i), {
			update(i) {
				a(t, i);
			},
			destroy() {
				t.innerHTML = "";
			}
		};
	} };
}
var root$6 = /* @__PURE__ */ from_svg("<svg></svg>");
function HugeiconsIcon(t, i) {
	push(i, !0);
	let a = prop(i, "size", 3, 24), o = prop(i, "absoluteStrokeWidth", 3, !1), s = prop(i, "color", 3, "currentColor"), c = prop(i, "showAlt", 3, !1), l = prop(i, "class", 3, ""), u = prop(i, "className", 3, ""), d = /* @__PURE__ */ rest_props(i, [
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
	]), f = /* @__PURE__ */ user_derived(() => l() || u()), p, m = /* @__PURE__ */ state(void 0), h = /* @__PURE__ */ state(void 0), g = /* @__PURE__ */ user_derived(() => ({
		size: a(),
		strokeWidth: i.strokeWidth,
		absoluteStrokeWidth: o(),
		color: s(),
		altIcon: i.altIcon,
		showAlt: c(),
		class: get$1(f)
	}));
	onMount(() => {
		if (p) return set(m, createHugeiconSingleton("HugeiconsIcon", i.icon), !0), set(h, get$1(m).render(p, get$1(g)), !0), () => {
			get$1(h)?.destroy();
		};
	}), user_effect(() => {
		get$1(m) && p && get$1(h) && get$1(h).update(get$1(g));
	});
	var _ = root$6();
	attribute_effect(_, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		width: a(),
		height: a(),
		viewBox: "0 0 24 24",
		fill: "none",
		class: get$1(f),
		...d
	})), bind_this(_, (t) => p = t, () => p), append(t, _), pop();
}
var ht = [
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
], SK = [
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
], rZr = [
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
], TZr = [["path", {
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
}]], root_1$1 = /* @__PURE__ */ from_html("<span><!></span>"), root_2$7 = /* @__PURE__ */ from_html("<span><!></span>"), root_3$1 = /* @__PURE__ */ from_html("<span><!></span>"), root_4$1 = /* @__PURE__ */ from_html("<span><!></span>"), root$5 = /* @__PURE__ */ from_html("<div><!></div>");
function AuthAvatar(t, i) {
	var a = root$5(), o = child(a), s = (t) => {
		var i = root_1$1();
		HugeiconsIcon(child(i), {
			get icon() {
				return SK;
			},
			class: "size-5 animate-spin",
			role: "status",
			"aria-label": "Loading"
		}), reset(i), transition(3, i, () => fade, () => ({ duration: 250 })), append(t, i);
	}, c = (t) => {
		var i = root_2$7();
		HugeiconsIcon(child(i), {
			get icon() {
				return ht;
			},
			class: "size-5"
		}), reset(i), transition(3, i, () => fade, () => ({ duration: 250 })), append(t, i);
	}, l = (t) => {
		var i = root_3$1();
		HugeiconsIcon(child(i), {
			get icon() {
				return TZr;
			},
			class: "size-5"
		}), reset(i), transition(3, i, () => fade, () => ({ duration: 250 })), append(t, i);
	}, u = (t) => {
		var i = root_4$1();
		HugeiconsIcon(child(i), {
			get icon() {
				return rZr;
			},
			class: "size-5"
		}), reset(i), transition(3, i, () => fade, () => ({ duration: 250 })), append(t, i);
	};
	if_block(o, (t) => {
		i.isLoading ? t(s) : i.isAnon ? t(c, 1) : i.isGuest ? t(l, 2) : t(u, -1);
	}), reset(a), append(t, a);
}
var usernameSchema = /* @__PURE__ */ pipe(/* @__PURE__ */ string(), /* @__PURE__ */ minLength(1, "Min 1 character"), /* @__PURE__ */ maxLength(20, "Max 20 characters"), /* @__PURE__ */ regex(/^[A-Za-zА-Яа-я0-9_-]+$/, "Only letters, numbers, -, or _")), passwordSchema = /* @__PURE__ */ pipe(/* @__PURE__ */ string(), /* @__PURE__ */ maxLength(100, "Max 100 characters")), root_2$6 = /* @__PURE__ */ from_html("<!> <!> <!> <!>", 1), root$4 = /* @__PURE__ */ from_html("<div class=\"w-full max-w-md ml-auto\"><form><!></form></div>");
function LoginForm(t, i) {
	push(i, !0);
	let a = () => store_get(authStore, "$authStore", o), [o, s] = setup_stores(), c = /* @__PURE__ */ user_derived(() => a().status), l = /* @__PURE__ */ user_derived(() => a().username), u = /* @__PURE__ */ user_derived(() => /* @__PURE__ */ safeParse(usernameSchema, get$1(l))), d = /* @__PURE__ */ user_derived(() => get$1(u).success), f = /* @__PURE__ */ user_derived(() => get$1(l) !== "" && !get$1(d)), p = /* @__PURE__ */ user_derived(() => get$1(u).success ? "" : get$1(u).issues.map((t) => t.message).join(", ")), m = /* @__PURE__ */ user_derived(() => a().password || ""), h = /* @__PURE__ */ user_derived(() => !get$1(d) || get$1(c)), g = /* @__PURE__ */ user_derived(() => /* @__PURE__ */ safeParse(passwordSchema, get$1(m))), _ = /* @__PURE__ */ user_derived(() => get$1(g).success), v = /* @__PURE__ */ user_derived(() => get$1(m) !== "" && !get$1(_)), y = /* @__PURE__ */ user_derived(() => get$1(g).success ? "" : get$1(g).issues.map((t) => t.message).join(", ")), b = /* @__PURE__ */ user_derived(() => get$1(c) || !get$1(d) || get$1(d) && !get$1(_)), x = async (t) => {
		if (t.preventDefault(), !get$1(b)) try {
			store_mutate(authStore, untrack(a).status = !0, untrack(a)), await new Promise((t) => setTimeout(t, 500)), await login(get$1(l), get$1(m));
		} catch (t) {
			console.error(t);
		} finally {
			store_mutate(authStore, untrack(a).status = !1, untrack(a)), store_mutate(authStore, untrack(a).username = "", untrack(a)), store_mutate(authStore, untrack(a).password = void 0, untrack(a));
		}
	};
	var S = root$4(), C = child(S);
	Field_group(child(C), {
		children: (t, i) => {
			Field(t, {
				orientation: "responsive",
				class: "flex flex-row items-center justify-end",
				children: (t, i) => {
					var o = root_2$6(), s = first_child(o);
					{
						let t = /* @__PURE__ */ user_derived(() => get$1(l) === "" && get$1(m) === ""), i = /* @__PURE__ */ user_derived(() => get$1(m) === "");
						AuthAvatar(s, {
							get isLoading() {
								return get$1(c);
							},
							get isAnon() {
								return get$1(t);
							},
							get isGuest() {
								return get$1(i);
							}
						});
					}
					var u = sibling(s, 2);
					{
						let t = /* @__PURE__ */ user_derived(() => get$1(f) ? get$1(p) : ""), i = /* @__PURE__ */ user_derived(() => cn({ "md:cursor-not-allowed": get$1(c) }));
						Input(u, {
							required: !0,
							type: "text",
							autocomplete: "name",
							placeholder: "Username",
							get "aria-invalid"() {
								return get$1(f);
							},
							get title() {
								return get$1(t);
							},
							get disabled() {
								return get$1(c);
							},
							get class() {
								return get$1(i);
							},
							get value() {
								return a().username;
							},
							set value(t) {
								store_mutate(authStore, untrack(a).username = t, untrack(a));
							}
						});
					}
					var d = sibling(u, 2);
					{
						let t = /* @__PURE__ */ user_derived(() => get$1(v) ? get$1(y) : ""), i = /* @__PURE__ */ user_derived(() => cn({ "md:cursor-not-allowed": get$1(h) }));
						Input(d, {
							name: "password",
							type: "password",
							autocomplete: "current-password",
							placeholder: "Password",
							get "aria-invalid"() {
								return get$1(v);
							},
							get title() {
								return get$1(t);
							},
							get disabled() {
								return get$1(h);
							},
							get class() {
								return get$1(i);
							},
							get value() {
								return a().password;
							},
							set value(t) {
								store_mutate(authStore, untrack(a).password = t, untrack(a));
							}
						});
					}
					var g = sibling(d, 2);
					{
						let t = /* @__PURE__ */ user_derived(() => cn({ "md:cursor-not-allowed": get$1(b) }));
						Button(g, {
							type: "submit",
							get disabled() {
								return get$1(b);
							},
							get class() {
								return get$1(t);
							},
							children: (t, i) => {
								next(), append(t, text("Login"));
							},
							$$slots: { default: !0 }
						});
					}
					append(t, o);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), reset(C), reset(S), event("submit", C, x), append(t, S), pop(), s();
}
var root_2$5 = /* @__PURE__ */ from_html("<!> <!> <!>", 1), root$3 = /* @__PURE__ */ from_html("<div class=\"w-full max-w-md ml-auto\"><form><!></form></div>");
function LogoutForm(t, i) {
	push(i, !0);
	let a = () => store_get(authStore, "$authStore", s), o = () => store_get(clientStore, "$clientStore", s), [s, c] = setup_stores(), l = /* @__PURE__ */ user_derived(() => a().status), u = /* @__PURE__ */ user_derived(() => o().rank > 0), d = async (t) => {
		if (t.preventDefault(), !get$1(l)) try {
			store_mutate(authStore, untrack(a).status = !0, untrack(a)), await new Promise((t) => setTimeout(t, 500)), await logout();
		} catch (t) {
			console.error(t);
		} finally {
			store_mutate(authStore, untrack(a).status = !1, untrack(a)), store_mutate(authStore, untrack(a).username = "", untrack(a)), store_mutate(authStore, untrack(a).password = void 0, untrack(a));
		}
	};
	var f = root$3(), p = child(f);
	Field_group(child(p), {
		children: (t, i) => {
			Field(t, {
				orientation: "responsive",
				class: "flex flex-row items-center justify-end selection:bg-primary",
				children: (t, i) => {
					var a = root_2$5(), s = first_child(a);
					{
						let t = /* @__PURE__ */ user_derived(() => !get$1(u));
						AuthAvatar(s, {
							get isLoading() {
								return get$1(l);
							},
							isAnon: !1,
							get isGuest() {
								return get$1(t);
							}
						});
					}
					var c = sibling(s, 2);
					Label(c, {
						class: "flex-none w-auto",
						children: (t, i) => {
							next();
							var a = text();
							template_effect(() => set_text(a, o().name)), append(t, a);
						},
						$$slots: { default: !0 }
					});
					var d = sibling(c, 2);
					{
						let t = /* @__PURE__ */ user_derived(() => cn({ "md:cursor-not-allowed": get$1(l) }));
						Button(d, {
							type: "submit",
							get disabled() {
								return get$1(l);
							},
							get class() {
								return get$1(t);
							},
							children: (t, i) => {
								next(), append(t, text("Logout"));
							},
							$$slots: { default: !0 }
						});
					}
					append(t, a);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), reset(p), reset(f), event("submit", p, d), append(t, f), pop(), c();
}
function AuthForm(t, i) {
	var a = comment(), o = first_child(a), s = (t) => {
		LogoutForm(t, {});
	}, c = (t) => {
		LoginForm(t, {});
	};
	if_block(o, (t) => {
		i.isLoggedIn ? t(s) : t(c, -1);
	}), append(t, a);
}
var logoImgSrc = new URL("dist/logo.png", window.BASE_URL).toString(), root$2 = /* @__PURE__ */ from_html("<header class=\"sticky w-full flex flex-row items-center justify-start h-15 mx-auto top-0 z-50 bg-background md:bg-background/80 md:backdrop-blur-md\"><!> <div class=\"w-full flex flex-row items-center justify-between pr-6 py-5\"><!> <!></div></header>");
function Header(i, a) {
	push(a, !1);
	let o = () => store_get(appStore, "$appStore", l), s = () => store_get(socketStore, "$socketStore", l), c = () => store_get(clientStore, "$clientStore", l), [l, u] = setup_stores();
	init$1();
	var d = root$2(), f = child(d), p = (t) => {
		VersionBadge(t, { get version() {
			return o().version;
		} });
	};
	if_block(f, (t) => {
		o().version && t(p);
	});
	var m = sibling(f, 2), h = child(m);
	ChannelAvatar(h, {
		get imgSrc() {
			return logoImgSrc;
		},
		get isConnected() {
			return s().connected;
		}
	});
	var g = sibling(h, 2), _ = (t) => {
		AuthForm(t, { get isLoggedIn() {
			return c().logged_in;
		} });
	}, v = (i) => {
		Button(i, {
			get onclick() {
				return submitSocketConnect;
			},
			children: (t, i) => {
				next(), append(t, text("Reconnect"));
			},
			$$slots: { default: !0 }
		});
	};
	if_block(g, (t) => {
		s().connected ? t(_) : t(v, -1);
	}), reset(m), reset(d), append(i, d), pop(), u();
}
function isFunction(t) {
	return typeof t == "function";
}
function isObject(t) {
	return typeof t == "object" && !!t;
}
var CLASS_VALUE_PRIMITIVE_TYPES = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function isClassValue(t) {
	return t == null || CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof t) ? !0 : Array.isArray(t) ? t.every((t) => isClassValue(t)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1;
}
var BoxSymbol = Symbol("box"), isWritableSymbol = Symbol("is-writable");
function isBox(t) {
	return isObject(t) && BoxSymbol in t;
}
function isWritableBox(t) {
	return box.isBox(t) && isWritableSymbol in t;
}
function box(t) {
	let i = /* @__PURE__ */ state(proxy(t));
	return {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$1(i);
		},
		set current(t) {
			set(i, t, !0);
		}
	};
}
function boxWith(t, i) {
	let a = /* @__PURE__ */ user_derived(t);
	return i ? {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$1(a);
		},
		set current(t) {
			i(t);
		}
	} : {
		[BoxSymbol]: !0,
		get current() {
			return t();
		}
	};
}
function boxFrom(t) {
	return box.isBox(t) ? t : isFunction(t) ? box.with(t) : box(t);
}
function boxFlatten(t) {
	return Object.entries(t).reduce((t, [i, a]) => box.isBox(a) ? (box.isWritableBox(a) ? Object.defineProperty(t, i, {
		get() {
			return a.current;
		},
		set(t) {
			a.current = t;
		}
	}) : Object.defineProperty(t, i, { get() {
		return a.current;
	} }), t) : Object.assign(t, { [i]: a }), {});
}
function toReadonlyBox(t) {
	return box.isWritableBox(t) ? {
		[BoxSymbol]: !0,
		get current() {
			return t.current;
		}
	} : t;
}
box.from = boxFrom, box.with = boxWith, box.flatten = boxFlatten, box.readonly = toReadonlyBox, box.isBox = isBox, box.isWritableBox = isWritableBox;
function composeHandlers(...t) {
	return function(i) {
		for (let a of t) if (a) {
			if (i.defaultPrevented) return;
			typeof a == "function" ? a.call(this, i) : a.current?.call(this, i);
		}
	};
}
var NUMBER_CHAR_RE = /\d/, STR_SPLITTERS = [
	"-",
	"_",
	"/",
	"."
];
function isUppercase(t = "") {
	if (!NUMBER_CHAR_RE.test(t)) return t !== t.toLowerCase();
}
function splitByCase(t) {
	let i = [], a = "", o, s;
	for (let c of t) {
		let t = STR_SPLITTERS.includes(c);
		if (t === !0) {
			i.push(a), a = "", o = void 0;
			continue;
		}
		let l = isUppercase(c);
		if (s === !1) {
			if (o === !1 && l === !0) {
				i.push(a), a = c, o = l;
				continue;
			}
			if (o === !0 && l === !1 && a.length > 1) {
				let t = a.at(-1);
				i.push(a.slice(0, Math.max(0, a.length - 1))), a = t + c, o = l;
				continue;
			}
		}
		a += c, o = l, s = t;
	}
	return i.push(a), i;
}
function pascalCase(t) {
	return t ? splitByCase(t).map((t) => upperFirst(t)).join("") : "";
}
function camelCase(t) {
	return lowerFirst(pascalCase(t || ""));
}
function upperFirst(t) {
	return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function lowerFirst(t) {
	return t ? t[0].toLowerCase() + t.slice(1) : "";
}
function cssToStyleObj(t) {
	if (!t) return {};
	let i = {};
	function a(t, a) {
		if (t.startsWith("-moz-") || t.startsWith("-webkit-") || t.startsWith("-ms-") || t.startsWith("-o-")) {
			i[pascalCase(t)] = a;
			return;
		}
		if (t.startsWith("--")) {
			i[t] = a;
			return;
		}
		i[camelCase(t)] = a;
	}
	return StyleToObject(t, a), i;
}
function executeCallbacks(...t) {
	return (...i) => {
		for (let a of t) typeof a == "function" && a(...i);
	};
}
function addEventListener$1(t, i, a, o) {
	let s = Array.isArray(i) ? i : [i];
	return s.forEach((i) => t.addEventListener(i, a, o)), () => {
		s.forEach((i) => t.removeEventListener(i, a, o));
	};
}
function createParser(t, i) {
	let a = RegExp(t, "g");
	return (t) => {
		if (typeof t != "string") throw TypeError(`expected an argument of type string, but got ${typeof t}`);
		return t.match(a) ? t.replace(a, i) : t;
	};
}
var camelToKebab = createParser(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function styleToCSS(t) {
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError(`expected an argument of type object, but got ${typeof t}`);
	return Object.keys(t).map((i) => `${camelToKebab(i)}: ${t[i]};`).join("\n");
}
function styleToString(t = {}) {
	return styleToCSS(t).replace("\n", " ");
}
styleToString({
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
var EVENT_LIST = /* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split(".");
const EVENT_LIST_SET = new Set(EVENT_LIST);
function isEventHandler(t) {
	return EVENT_LIST_SET.has(t);
}
function mergeProps(...t) {
	let i = { ...t[0] };
	for (let a = 1; a < t.length; a++) {
		let o = t[a];
		if (o) {
			for (let t of Object.keys(o)) {
				let a = i[t], s = o[t], c = typeof a == "function", l = typeof s == "function";
				if (c && typeof l && isEventHandler(t)) i[t] = composeHandlers(a, s);
				else if (c && l) i[t] = executeCallbacks(a, s);
				else if (t === "class") {
					let o = isClassValue(a), c = isClassValue(s);
					o && c ? i[t] = clsx(a, s) : o ? i[t] = clsx(a) : c && (i[t] = clsx(s));
				} else if (t === "style") {
					let o = typeof a == "object", c = typeof s == "object", l = typeof a == "string", u = typeof s == "string";
					if (o && c) i[t] = {
						...a,
						...s
					};
					else if (o && u) {
						let o = cssToStyleObj(s);
						i[t] = {
							...a,
							...o
						};
					} else if (l && c) i[t] = {
						...cssToStyleObj(a),
						...s
					};
					else if (l && u) {
						let o = cssToStyleObj(a), c = cssToStyleObj(s);
						i[t] = {
							...o,
							...c
						};
					} else o ? i[t] = a : c ? i[t] = s : l ? i[t] = a : u && (i[t] = s);
				} else i[t] = s === void 0 ? a : s;
			}
			for (let t of Object.getOwnPropertySymbols(o)) {
				let a = i[t], s = o[t];
				i[t] = s === void 0 ? a : s;
			}
		}
	}
	return typeof i.style == "object" && (i.style = styleToString(i.style).replaceAll("\n", " ")), i.hidden !== !0 && (i.hidden = void 0, delete i.hidden), i.disabled !== !0 && (i.disabled = void 0, delete i.disabled), i;
}
const defaultWindow$1 = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function getActiveElement$2(t) {
	let i = t.activeElement;
	for (; i?.shadowRoot;) {
		let t = i.shadowRoot.activeElement;
		if (t === i) break;
		i = t;
	}
	return i;
}
new class {
	#e;
	#t;
	constructor(t = {}) {
		let { window: i = defaultWindow$1, document: a = i?.document } = t;
		i !== void 0 && (this.#e = a, this.#t = createSubscriber((t) => {
			let a = on(i, "focusin", t), o = on(i, "focusout", t);
			return () => {
				a(), o();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? getActiveElement$2(this.#e) : null;
	}
}();
function runEffect$1(t, i) {
	switch (t) {
		case "post":
			user_effect(i);
			break;
		case "pre":
			user_pre_effect(i);
			break;
	}
}
function runWatcher$1(t, i, a, o = {}) {
	let { lazy: s = !1 } = o, c = !s, l = Array.isArray(t) ? [] : void 0;
	runEffect$1(i, () => {
		let i = Array.isArray(t) ? t.map((t) => t()) : t();
		if (!c) {
			c = !0, l = i;
			return;
		}
		let o = untrack(() => a(i, l));
		return l = i, o;
	});
}
function runWatcherOnce$1(t, i, a) {
	let o = effect_root(() => {
		let s = !1;
		runWatcher$1(t, i, (t, i) => {
			if (s) {
				o();
				return;
			}
			let c = a(t, i);
			return s = !0, c;
		}, { lazy: !0 });
	});
	user_effect(() => o);
}
function watch$1(t, i, a) {
	runWatcher$1(t, "post", i, a);
}
function watchPre$1(t, i, a) {
	runWatcher$1(t, "pre", i, a);
}
watch$1.pre = watchPre$1;
function watchOnce$1(t, i) {
	runWatcherOnce$1(t, "post", i);
}
function watchOncePre$1(t, i) {
	runWatcherOnce$1(t, "pre", i);
}
watchOnce$1.pre = watchOncePre$1;
function debounce$1(t, i) {
	let a, o = null;
	return (...s) => new Promise((c) => {
		o && o(void 0), o = c, clearTimeout(a), a = setTimeout(async () => {
			let i = await t(...s);
			o &&= (o(i), null);
		}, i);
	});
}
function throttle(t, i) {
	let a = 0, o = null;
	return (...s) => {
		let c = Date.now();
		return a && c - a < i ? o ?? Promise.resolve(void 0) : (a = c, o = t(...s), o);
	};
}
function runResource(t, i, a = {}, o) {
	let { lazy: s = !1, once: c = !1, initialValue: l, debounce: u, throttle: d } = a, f = /* @__PURE__ */ state(proxy(l)), p = /* @__PURE__ */ state(!1), m = /* @__PURE__ */ state(void 0), h = /* @__PURE__ */ state(proxy([])), g = () => {
		get$1(h).forEach((t) => t()), set(h, [], !0);
	}, _ = (t) => {
		set(h, [...get$1(h), t], !0);
	}, v = async (t, a, o = !1) => {
		try {
			set(p, !0), set(m, void 0), g();
			let s = new AbortController();
			_(() => s.abort());
			let c = await i(t, a, {
				data: get$1(f),
				refetching: o,
				onCleanup: _,
				signal: s.signal
			});
			return set(f, c, !0), c;
		} catch (t) {
			t instanceof DOMException && t.name === "AbortError" || set(m, t, !0);
			return;
		} finally {
			set(p, !1);
		}
	}, y = u ? debounce$1(v, u) : d ? throttle(v, d) : v, b = Array.isArray(t) ? t : [t], x;
	return o((i, a) => {
		c && x || (x = i, y(Array.isArray(t) ? i : i[0], Array.isArray(t) ? a : a?.[0]));
	}, { lazy: s }), {
		get current() {
			return get$1(f);
		},
		get loading() {
			return get$1(p);
		},
		get error() {
			return get$1(m);
		},
		mutate: (t) => {
			set(f, t, !0);
		},
		refetch: (i) => {
			let a = b.map((t) => t());
			return y(Array.isArray(t) ? a : a[0], Array.isArray(t) ? a : a[0], i ?? !0);
		}
	};
}
function resource(t, i, a) {
	return runResource(t, i, a, (i, a) => {
		let o = Array.isArray(t) ? t : [t];
		watch$1(() => o.map((t) => t()), (t, a) => {
			i(t, a ?? []);
		}, a);
	});
}
function resourcePre(t, i, a) {
	return runResource(t, i, a, (i, a) => {
		let o = Array.isArray(t) ? t : [t];
		watch$1.pre(() => o.map((t) => t()), (t, a) => {
			i(t, a ?? []);
		}, a);
	});
}
resource.pre = resourcePre;
function afterTick(t) {
	tick().then(t);
}
var DOCUMENT_NODE = 9;
function isDocument(t) {
	return isObject(t) && t.nodeType === DOCUMENT_NODE;
}
function isWindow(t) {
	return isObject(t) && t.constructor?.name === "VisualViewport";
}
function getDocument(t) {
	return isDocument(t) ? t : isWindow(t) ? t.document : t?.ownerDocument ?? document;
}
function getActiveElement$1(t) {
	let i = t.activeElement;
	for (; i?.shadowRoot;) {
		let t = i.shadowRoot.activeElement;
		if (t === i) break;
		i = t;
	}
	return i;
}
var DOMContext = class {
	element;
	#e = /* @__PURE__ */ user_derived(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return get$1(this.#e);
	}
	set root(t) {
		set(this.#e, t);
	}
	constructor(t) {
		typeof t == "function" ? this.element = box.with(t) : this.element = t;
	}
	getDocument = () => getDocument(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => getActiveElement$1(this.root);
	isActiveElement = (t) => t === this.getActiveElement();
	getElementById(t) {
		return this.root.getElementById(t);
	}
	querySelector = (t) => this.root ? this.root.querySelector(t) : null;
	querySelectorAll = (t) => this.root ? this.root.querySelectorAll(t) : [];
	setTimeout = (t, i) => this.getWindow().setTimeout(t, i);
	clearTimeout = (t) => this.getWindow().clearTimeout(t);
};
function attachRef(t, i) {
	return { [createAttachmentKey()]: (a) => box.isBox(t) ? (t.current = a, untrack(() => i?.(a)), () => {
		"isConnected" in a && a.isConnected || (t.current = null, i?.(null));
	}) : (t(a), untrack(() => i?.(a)), () => {
		"isConnected" in a && a.isConnected || (t(null), i?.(null));
	}) };
}
function calculateAriaValues({ layout: t, panesArray: i, pivotIndices: a }) {
	let o = 0, s = 100, c = 0, l = 0, u = a[0];
	for (let t = 0; t < i.length; t++) {
		let { maxSize: a = 100, minSize: d = 0 } = i[t].constraints;
		t === u ? (o = d, s = a) : (c += d, l += a);
	}
	return {
		valueMax: Math.min(s, 100 - c),
		valueMin: Math.max(o, 100 - l),
		valueNow: t[u]
	};
}
function assert(t, i = "Assertion failed!") {
	if (!t) throw console.error(i), Error(i);
}
function areNumbersAlmostEqual(t, i, a = 10) {
	return compareNumbersWithTolerance(t, i, a) === 0;
}
function compareNumbersWithTolerance(t, i, a = 10) {
	let o = roundTo(t, a), s = roundTo(i, a);
	return Math.sign(o - s);
}
function areArraysEqual(t, i) {
	if (t.length !== i.length) return !1;
	for (let a = 0; a < t.length; a++) if (t[a] !== i[a]) return !1;
	return !0;
}
function roundTo(t, i) {
	return Number.parseFloat(t.toFixed(i));
}
const isBrowser = typeof document < "u";
function isHTMLElement(t) {
	return t instanceof HTMLElement;
}
function isKeyDown(t) {
	return t.type === "keydown";
}
function isMouseEvent(t) {
	return t.type.startsWith("mouse");
}
function isTouchEvent(t) {
	return t.type.startsWith("touch");
}
function resizePane({ paneConstraints: t, paneIndex: i, initialSize: a }) {
	let o = t[i];
	assert(o != null, "Pane constraints should not be null.");
	let { collapsedSize: s = 0, collapsible: c, maxSize: l = 100, minSize: u = 0 } = o, d = a;
	return compareNumbersWithTolerance(d, u) < 0 && (d = getAdjustedSizeForCollapsible(d, c, s, u)), d = Math.min(l, d), Number.parseFloat(d.toFixed(10));
}
function getAdjustedSizeForCollapsible(t, i, a, o) {
	return i && compareNumbersWithTolerance(t, (a + o) / 2) < 0 ? a : o;
}
function noop() {}
function updateResizeHandleAriaValues({ groupId: t, layout: i, panesArray: a, domContext: o }) {
	let s = getResizeHandleElementsForGroup(t, o);
	for (let t = 0; t < a.length - 1; t++) {
		let { valueMax: o, valueMin: c, valueNow: l } = calculateAriaValues({
			layout: i,
			panesArray: a,
			pivotIndices: [t, t + 1]
		}), u = s[t];
		if (isHTMLElement(u)) {
			let i = a[t];
			u.setAttribute("aria-controls", i.opts.id.current), u.setAttribute("aria-valuemax", `${Math.round(o)}`), u.setAttribute("aria-valuemin", `${Math.round(c)}`), u.setAttribute("aria-valuenow", l == null ? "" : `${Math.round(l)}`);
		}
	}
	return () => {
		for (let t of s) t.removeAttribute("aria-controls"), t.removeAttribute("aria-valuemax"), t.removeAttribute("aria-valuemin"), t.removeAttribute("aria-valuenow");
	};
}
function getResizeHandleElementsForGroup(t, i) {
	return isBrowser ? Array.from(i.querySelectorAll(`[data-pane-resizer-id][data-pane-group-id="${t}"]`)) : [];
}
function getResizeHandleElementIndex({ groupId: t, id: i, domContext: a }) {
	return isBrowser ? getResizeHandleElementsForGroup(t, a).findIndex((t) => t.getAttribute("data-pane-resizer-id") === i) ?? null : null;
}
function getPivotIndices({ groupId: t, dragHandleId: i, domContext: a }) {
	let o = getResizeHandleElementIndex({
		groupId: t,
		id: i,
		domContext: a
	});
	return o == null ? [-1, -1] : [o, o + 1];
}
function paneDataHelper(t, i, a) {
	let o = t.map((t) => t.constraints), s = findPaneDataIndex(t, i), c = o[s], l = s === t.length - 1 ? [s - 1, s] : [s, s + 1], u = a[s];
	return {
		...c,
		paneSize: u,
		pivotIndices: l
	};
}
function findPaneDataIndex(t, i) {
	return t.findIndex((t) => t.opts.id.current === i.opts.id.current);
}
function callPaneCallbacks(t, i, a) {
	for (let o = 0; o < i.length; o++) {
		let s = i[o], c = t[o];
		assert(c);
		let { collapsedSize: l = 0, collapsible: u } = c.constraints, d = a[c.opts.id.current];
		if (!(d == null || s !== d)) continue;
		a[c.opts.id.current] = s;
		let { onCollapse: f, onExpand: p, onResize: m } = c.callbacks;
		m?.(s, d), u && (f || p) && (p && (d == null || d === l) && s !== l && p(), f && (d == null || d !== l) && s === l && f());
	}
}
function getUnsafeDefaultLayout({ panesArray: t }) {
	let i = Array(t.length), a = t.map((t) => t.constraints), o = 0, s = 100;
	for (let c = 0; c < t.length; c++) {
		let t = a[c];
		assert(t);
		let { defaultSize: l } = t;
		l != null && (o++, i[c] = l, s -= l);
	}
	for (let c = 0; c < t.length; c++) {
		let l = a[c];
		assert(l);
		let { defaultSize: u } = l;
		if (u != null) continue;
		let d = t.length - o, f = s / d;
		o++, i[c] = f, s -= f;
	}
	return i;
}
function validatePaneGroupLayout({ layout: t, paneConstraints: i }) {
	let a = [...t], o = a.reduce((t, i) => t + i, 0);
	if (a.length !== i.length) throw Error(`Invalid ${i.length} pane layout: ${a.map((t) => `${t}%`).join(", ")}`);
	if (!areNumbersAlmostEqual(o, 100)) for (let t = 0; t < i.length; t++) {
		let i = a[t];
		assert(i != null), a[t] = 100 / o * i;
	}
	let s = 0;
	for (let t = 0; t < i.length; t++) {
		let o = a[t];
		assert(o != null);
		let c = resizePane({
			paneConstraints: i,
			paneIndex: t,
			initialSize: o
		});
		o !== c && (s += o - c, a[t] = c);
	}
	if (!areNumbersAlmostEqual(s, 0)) for (let t = 0; t < i.length; t++) {
		let o = a[t];
		assert(o != null);
		let c = o + s, l = resizePane({
			paneConstraints: i,
			paneIndex: t,
			initialSize: c
		});
		if (o !== l && (s -= l - o, a[t] = l, areNumbersAlmostEqual(s, 0))) break;
	}
	return a;
}
function getPaneGroupElement(t, i) {
	return isBrowser && i.querySelector(`[data-pane-group][data-pane-group-id="${t}"]`) || null;
}
function getResizeHandleElement(t, i) {
	return isBrowser && i.querySelector(`[data-pane-resizer-id="${t}"]`) || null;
}
function getDragOffsetPercentage({ event: t, dragHandleId: i, dir: a, initialDragState: o, domContext: s }) {
	let c = a === "horizontal", l = getResizeHandleElement(i, s);
	assert(l);
	let u = l.getAttribute("data-pane-group-id");
	assert(u);
	let { initialCursorPosition: d } = o, f = getResizeEventCursorPosition(a, t), p = getPaneGroupElement(u, s);
	assert(p);
	let m = p.getBoundingClientRect(), h = c ? m.width : m.height;
	return (f - d) / h * 100;
}
function getDeltaPercentage({ event: t, dragHandleId: i, dir: a, initialDragState: o, keyboardResizeBy: s, domContext: c }) {
	if (isKeyDown(t)) {
		let i = a === "horizontal", o = 0;
		o = t.shiftKey ? 100 : s ?? 10;
		let c = 0;
		switch (t.key) {
			case "ArrowDown":
				c = i ? 0 : o;
				break;
			case "ArrowLeft":
				c = i ? -o : 0;
				break;
			case "ArrowRight":
				c = i ? o : 0;
				break;
			case "ArrowUp":
				c = i ? 0 : -o;
				break;
			case "End":
				c = 100;
				break;
			case "Home":
				c = -100;
				break;
		}
		return c;
	} else return o == null ? 0 : getDragOffsetPercentage({
		event: t,
		dragHandleId: i,
		dir: a,
		initialDragState: o,
		domContext: c
	});
}
function getResizeEventCursorPosition(t, i) {
	let a = t === "horizontal";
	if (isMouseEvent(i)) return a ? i.clientX : i.clientY;
	if (isTouchEvent(i)) {
		let t = i.touches[0];
		return assert(t), a ? t.screenX : t.screenY;
	} else throw Error(`Unsupported event type "${i.type}"`);
}
function getResizeHandlePaneIds({ groupId: t, handleId: i, panesArray: a, domContext: o }) {
	let s = getResizeHandleElement(i, o), c = getResizeHandleElementsForGroup(t, o), l = s ? c.indexOf(s) : -1;
	return [a[l]?.opts.id.current ?? null, a[l + 1]?.opts.id.current ?? null];
}
const defaultWindow = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function getActiveElement(t) {
	let i = t.activeElement;
	for (; i?.shadowRoot;) {
		let t = i.shadowRoot.activeElement;
		if (t === i) break;
		i = t;
	}
	return i;
}
new class {
	#e;
	#t;
	constructor(t = {}) {
		let { window: i = defaultWindow, document: a = i?.document } = t;
		i !== void 0 && (this.#e = a, this.#t = createSubscriber((t) => {
			let a = on(i, "focusin", t), o = on(i, "focusout", t);
			return () => {
				a(), o();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? getActiveElement(this.#e) : null;
	}
}();
function runEffect(t, i) {
	switch (t) {
		case "post":
			user_effect(i);
			break;
		case "pre":
			user_pre_effect(i);
			break;
	}
}
function runWatcher(t, i, a, o = {}) {
	let { lazy: s = !1 } = o, c = !s, l = Array.isArray(t) ? [] : void 0;
	runEffect(i, () => {
		let i = Array.isArray(t) ? t.map((t) => t()) : t();
		if (!c) {
			c = !0, l = i;
			return;
		}
		let o = untrack(() => a(i, l));
		return l = i, o;
	});
}
function runWatcherOnce(t, i, a) {
	let o = effect_root(() => {
		let s = !1;
		runWatcher(t, i, (t, i) => {
			if (s) {
				o();
				return;
			}
			let c = a(t, i);
			return s = !0, c;
		}, { lazy: !0 });
	});
	user_effect(() => o);
}
function watch(t, i, a) {
	runWatcher(t, "post", i, a);
}
function watchPre(t, i, a) {
	runWatcher(t, "pre", i, a);
}
watch.pre = watchPre;
function watchOnce(t, i) {
	runWatcherOnce(t, "post", i);
}
function watchOncePre(t, i) {
	runWatcherOnce(t, "pre", i);
}
watchOnce.pre = watchOncePre;
var Context = class {
	#e;
	#t;
	constructor(t) {
		this.#e = t, this.#t = Symbol(t);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return hasContext(this.#t);
	}
	get() {
		let t = getContext(this.#t);
		if (t === void 0) throw Error(`Context "${this.#e}" not found`);
		return t;
	}
	getOr(t) {
		let i = getContext(this.#t);
		return i === void 0 ? t : i;
	}
	set(t) {
		return setContext(this.#t, t);
	}
};
function adjustLayoutByDelta({ delta: t, layout: i, paneConstraints: a, pivotIndices: o, trigger: s }) {
	if (areNumbersAlmostEqual(t, 0)) return i;
	let c = [...i], [l, u] = o, d = 0;
	if (s === "keyboard") {
		{
			let o = t < 0 ? u : l, s = a[o];
			if (assert(s), s.collapsible) {
				let s = i[o];
				assert(s != null);
				let c = a[o];
				assert(c);
				let { collapsedSize: l = 0, minSize: u = 0 } = c;
				if (areNumbersAlmostEqual(s, l)) {
					let i = u - s;
					compareNumbersWithTolerance(i, Math.abs(t)) > 0 && (t = t < 0 ? 0 - i : i);
				}
			}
		}
		{
			let o = t < 0 ? l : u, s = a[o];
			assert(s);
			let { collapsible: c } = s;
			if (c) {
				let s = i[o];
				assert(s != null);
				let c = a[o];
				assert(c);
				let { collapsedSize: l = 0, minSize: u = 0 } = c;
				if (areNumbersAlmostEqual(s, u)) {
					let i = s - l;
					compareNumbersWithTolerance(i, Math.abs(t)) > 0 && (t = t < 0 ? 0 - i : i);
				}
			}
		}
	}
	{
		let o = t < 0 ? 1 : -1, s = t < 0 ? u : l, c = 0;
		for (;;) {
			let t = i[s];
			assert(t != null);
			let l = resizePane({
				paneConstraints: a,
				paneIndex: s,
				initialSize: 100
			}) - t;
			if (c += l, s += o, s < 0 || s >= a.length) break;
		}
		let d = Math.min(Math.abs(t), Math.abs(c));
		t = t < 0 ? 0 - d : d;
	}
	{
		let o = t < 0 ? l : u;
		for (; o >= 0 && o < a.length;) {
			let s = Math.abs(t) - Math.abs(d), l = i[o];
			assert(l != null);
			let u = l - s, f = resizePane({
				paneConstraints: a,
				paneIndex: o,
				initialSize: u
			});
			if (!areNumbersAlmostEqual(l, f) && (d += l - f, c[o] = f, d.toPrecision(3).localeCompare(Math.abs(t).toPrecision(3), void 0, { numeric: !0 }) >= 0)) break;
			t < 0 ? o-- : o++;
		}
	}
	if (areNumbersAlmostEqual(d, 0)) return i;
	{
		let o = t < 0 ? u : l, s = i[o];
		assert(s != null);
		let f = s + d, p = resizePane({
			paneConstraints: a,
			paneIndex: o,
			initialSize: f
		});
		if (c[o] = p, !areNumbersAlmostEqual(p, f)) {
			let i = f - p, o = t < 0 ? u : l;
			for (; o >= 0 && o < a.length;) {
				let s = c[o];
				assert(s != null);
				let l = s + i, u = resizePane({
					paneConstraints: a,
					paneIndex: o,
					initialSize: l
				});
				if (areNumbersAlmostEqual(s, u) || (i -= u - s, c[o] = u), areNumbersAlmostEqual(i, 0)) break;
				t > 0 ? o-- : o++;
			}
		}
	}
	return areNumbersAlmostEqual(c.reduce((t, i) => i + t, 0), 100) ? c : i;
}
var currentState = null, element = null;
function getCursorStyle(t) {
	switch (t) {
		case "horizontal": return "ew-resize";
		case "horizontal-max": return "w-resize";
		case "horizontal-min": return "e-resize";
		case "vertical": return "ns-resize";
		case "vertical-max": return "n-resize";
		case "vertical-min": return "s-resize";
	}
}
function resetGlobalCursorStyle() {
	element !== null && (document.head.removeChild(element), currentState = null, element = null);
}
function setGlobalCursorStyle(t, i) {
	if (currentState === t) return;
	currentState = t;
	let a = getCursorStyle(t);
	element === null && (element = i.createElement("style"), i.head.appendChild(element)), element.innerHTML = `*{cursor: ${a}!important;}`;
}
function computePaneFlexBoxStyle({ defaultSize: t, dragState: i, layout: a, panesArray: o, paneIndex: s, precision: c = 3 }) {
	let l = a[s], u;
	return u = l == null ? t ?? "1" : o.length === 1 ? "1" : l.toPrecision(c), {
		flexBasis: 0,
		flexGrow: u,
		flexShrink: 1,
		overflow: "hidden",
		pointerEvents: i === null ? void 0 : "none"
	};
}
function initializeStorage(t) {
	try {
		if (typeof localStorage > "u") throw TypeError("localStorage is not supported in this environment");
		t.getItem = (t) => localStorage.getItem(t), t.setItem = (t, i) => localStorage.setItem(t, i);
	} catch (i) {
		console.error(i), t.getItem = () => null, t.setItem = () => {};
	}
}
function getPaneGroupKey(t) {
	return `paneforge:${t}`;
}
function getPaneKey(t) {
	return t.map((t) => t.opts.order.current ? `${t.opts.order.current}:${JSON.stringify(t.constraints)}` : JSON.stringify(t.constraints)).sort().join(",");
}
function loadSerializedPaneGroupState(t, i) {
	try {
		let a = getPaneGroupKey(t), o = i.getItem(a), s = JSON.parse(o || "");
		if (typeof s == "object" && s) return s;
	} catch {}
	return null;
}
function loadPaneGroupState(t, i, a) {
	return (loadSerializedPaneGroupState(t, a) || {})[getPaneKey(i)] || null;
}
function savePaneGroupState(t, i, a, o, s) {
	let c = getPaneGroupKey(t), l = getPaneKey(i), u = loadSerializedPaneGroupState(t, s) || {};
	u[l] = {
		expandToSizes: Object.fromEntries(a.entries()),
		layout: o
	};
	try {
		s.setItem(c, JSON.stringify(u));
	} catch (t) {
		console.error(t);
	}
}
var debounceMap = {};
function debounce(t, i = 10) {
	let a = null;
	return (...o) => {
		a !== null && clearTimeout(a), a = setTimeout(() => {
			t(...o);
		}, i);
	};
}
function updateStorageValues({ autoSaveId: t, layout: i, storage: a, panesArray: o, paneSizeBeforeCollapse: s }) {
	if (i.length === 0 || i.length !== o.length) return;
	let c = debounceMap[t];
	c ?? (c = debounce(savePaneGroupState, 100), debounceMap[t] = c);
	let l = [...o];
	c(t, l, new Map(s), i, a);
}
const defaultStorage = {
	getItem: (t) => (initializeStorage(defaultStorage), defaultStorage.getItem(t)),
	setItem: (t, i) => {
		initializeStorage(defaultStorage), defaultStorage.setItem(t, i);
	}
};
var PaneGroupContext = new Context("PaneGroup"), PaneGroupState = class t {
	static create(i) {
		return PaneGroupContext.set(new t(i));
	}
	opts;
	attachment;
	domContext;
	#e = /* @__PURE__ */ state(null);
	get dragState() {
		return get$1(this.#e);
	}
	set dragState(t) {
		set(this.#e, t);
	}
	#t = /* @__PURE__ */ state([]);
	get layout() {
		return get$1(this.#t);
	}
	set layout(t) {
		set(this.#t, t);
	}
	#n = /* @__PURE__ */ state([]);
	get panesArray() {
		return get$1(this.#n);
	}
	set panesArray(t) {
		set(this.#n, t);
	}
	#r = /* @__PURE__ */ state(!1);
	get panesArrayChanged() {
		return get$1(this.#r);
	}
	set panesArrayChanged(t) {
		set(this.#r, t, !0);
	}
	#i = /* @__PURE__ */ state(proxy({}));
	get paneIdToLastNotifiedSizeMap() {
		return get$1(this.#i);
	}
	set paneIdToLastNotifiedSizeMap(t) {
		set(this.#i, t, !0);
	}
	paneSizeBeforeCollapseMap = /* @__PURE__ */ new Map();
	prevDelta = 0;
	constructor(t) {
		this.opts = t, this.attachment = attachRef(this.opts.ref), this.domContext = new DOMContext(this.opts.ref), watch([
			() => this.opts.id.current,
			() => this.layout,
			() => this.panesArray
		], () => updateResizeHandleAriaValues({
			groupId: this.opts.id.current,
			layout: this.layout,
			panesArray: this.panesArray,
			domContext: this.domContext
		})), user_effect(() => untrack(() => this.#a())), watch([
			() => this.opts.autoSaveId.current,
			() => this.layout,
			() => this.opts.storage.current
		], () => {
			this.opts.autoSaveId.current && updateStorageValues({
				autoSaveId: this.opts.autoSaveId.current,
				layout: this.layout,
				storage: this.opts.storage.current,
				panesArray: this.panesArray,
				paneSizeBeforeCollapse: this.paneSizeBeforeCollapseMap
			});
		}), watch(() => this.panesArrayChanged, () => {
			if (!this.panesArrayChanged) return;
			this.panesArrayChanged = !1;
			let t = this.layout, i = null;
			if (this.opts.autoSaveId.current) {
				let t = loadPaneGroupState(this.opts.autoSaveId.current, this.panesArray, this.opts.storage.current);
				t && (this.paneSizeBeforeCollapseMap = new Map(Object.entries(t.expandToSizes)), i = t.layout);
			}
			i ??= getUnsafeDefaultLayout({ panesArray: this.panesArray });
			let a = validatePaneGroupLayout({
				layout: i,
				paneConstraints: this.panesArray.map((t) => t.constraints)
			});
			areArraysEqual(t, a) || (this.layout = a, this.opts.onLayout.current?.(a), callPaneCallbacks(this.panesArray, a, this.paneIdToLastNotifiedSizeMap));
		});
	}
	setLayout = (t) => {
		this.layout = t;
	};
	registerResizeHandle = (t) => (i) => {
		i.preventDefault();
		let a = this.opts.direction.current, o = this.dragState, s = this.opts.id.current, c = this.opts.keyboardResizeBy.current, l = this.layout, u = this.panesArray, { initialLayout: d } = o ?? {}, f = this.domContext.getDocument(), p = getPivotIndices({
			groupId: s,
			dragHandleId: t,
			domContext: this.domContext
		}), m = getDeltaPercentage({
			event: i,
			dragHandleId: t,
			dir: a,
			initialDragState: o,
			keyboardResizeBy: c,
			domContext: this.domContext
		});
		if (m === 0) return;
		let h = a === "horizontal";
		f.dir === "rtl" && h && (m = -m);
		let g = u.map((t) => t.constraints), _ = adjustLayoutByDelta({
			delta: m,
			layout: d ?? l,
			paneConstraints: g,
			pivotIndices: p,
			trigger: isKeyDown(i) ? "keyboard" : "mouse-or-touch"
		}), v = !areArraysEqual(l, _);
		(isMouseEvent(i) || isTouchEvent(i)) && this.prevDelta !== m && (this.prevDelta = m, setGlobalCursorStyle(v ? h ? "horizontal" : "vertical" : h ? m < 0 ? "horizontal-min" : "horizontal-max" : m < 0 ? "vertical-min" : "vertical-max", f)), v && (this.setLayout(_), this.opts.onLayout.current?.(_), callPaneCallbacks(u, _, this.paneIdToLastNotifiedSizeMap));
	};
	resizePane = (t, i) => {
		let a = this.layout, o = this.panesArray, s = o.map((t) => t.constraints), { paneSize: c, pivotIndices: l } = paneDataHelper(o, t, a);
		assert(c != null);
		let u = adjustLayoutByDelta({
			delta: findPaneDataIndex(o, t) === o.length - 1 ? c - i : i - c,
			layout: a,
			paneConstraints: s,
			pivotIndices: l,
			trigger: "imperative-api"
		});
		areArraysEqual(a, u) || (this.setLayout(u), this.opts.onLayout.current?.(u), callPaneCallbacks(o, u, this.paneIdToLastNotifiedSizeMap));
	};
	startDragging = (t, i) => {
		let a = this.opts.direction.current, o = this.layout, s = getResizeHandleElement(t, this.domContext);
		assert(s);
		let c = getResizeEventCursorPosition(a, i);
		this.dragState = {
			dragHandleId: t,
			dragHandleRect: s.getBoundingClientRect(),
			initialCursorPosition: c,
			initialLayout: o
		};
	};
	stopDragging = () => {
		resetGlobalCursorStyle(), this.dragState = null;
	};
	isPaneCollapsed = (t) => {
		let i = this.panesArray, a = this.layout, { collapsedSize: o = 0, collapsible: s, paneSize: c } = paneDataHelper(i, t, a);
		return typeof c != "number" || typeof o != "number" ? !1 : s === !0 && areNumbersAlmostEqual(c, o);
	};
	expandPane = (t) => {
		let i = this.layout, a = this.panesArray;
		if (!t.constraints.collapsible) return;
		let o = a.map((t) => t.constraints), { collapsedSize: s = 0, paneSize: c, minSize: l = 0, pivotIndices: u } = paneDataHelper(a, t, i);
		if (c !== s) return;
		let d = this.paneSizeBeforeCollapseMap.get(t.opts.id.current), f = d != null && d >= l ? d : l, p = adjustLayoutByDelta({
			delta: findPaneDataIndex(a, t) === a.length - 1 ? c - f : f - c,
			layout: i,
			paneConstraints: o,
			pivotIndices: u,
			trigger: "imperative-api"
		});
		areArraysEqual(i, p) || (this.setLayout(p), this.opts.onLayout.current?.(p), callPaneCallbacks(a, p, this.paneIdToLastNotifiedSizeMap));
	};
	collapsePane = (t) => {
		let i = this.layout, a = this.panesArray;
		if (!t.constraints.collapsible) return;
		let o = a.map((t) => t.constraints), { collapsedSize: s = 0, paneSize: c, pivotIndices: l } = paneDataHelper(a, t, i);
		if (assert(c != null), c === s) return;
		this.paneSizeBeforeCollapseMap.set(t.opts.id.current, c);
		let u = adjustLayoutByDelta({
			delta: findPaneDataIndex(a, t) === a.length - 1 ? c - s : s - c,
			layout: i,
			paneConstraints: o,
			pivotIndices: l,
			trigger: "imperative-api"
		});
		areArraysEqual(i, u) || (this.layout = u, this.opts.onLayout.current?.(u), callPaneCallbacks(a, u, this.paneIdToLastNotifiedSizeMap));
	};
	getPaneSize = (t) => paneDataHelper(this.panesArray, t, this.layout).paneSize;
	getPaneStyle = (t, i) => {
		let a = this.panesArray, o = this.layout, s = this.dragState;
		return computePaneFlexBoxStyle({
			defaultSize: i,
			dragState: s,
			layout: o,
			panesArray: a,
			paneIndex: findPaneDataIndex(a, t)
		});
	};
	isPaneExpanded = (t) => {
		let { collapsedSize: i = 0, collapsible: a, paneSize: o } = paneDataHelper(this.panesArray, t, this.layout);
		return !a || o > i;
	};
	registerPane = (t) => {
		let i = [...this.panesArray, t];
		return i.sort((t, i) => {
			let a = t.opts.order.current, o = i.opts.order.current;
			return a == null && o == null ? 0 : a == null ? -1 : o == null ? 1 : a - o;
		}), this.panesArray = i, this.panesArrayChanged = !0, () => {
			let i = [...this.panesArray], a = findPaneDataIndex(this.panesArray, t);
			a < 0 || (i.splice(a, 1), this.panesArray = i, delete this.paneIdToLastNotifiedSizeMap[t.opts.id.current], this.panesArrayChanged = !0);
		};
	};
	#a = () => {
		let t = this.opts.id.current, i = getResizeHandleElementsForGroup(t, this.domContext), a = this.panesArray, o = i.map((i) => {
			let o = i.getAttribute("data-pane-resizer-id");
			if (!o) return noop;
			let [s, c] = getResizeHandlePaneIds({
				groupId: t,
				handleId: o,
				panesArray: a,
				domContext: this.domContext
			});
			if (s == null || c == null) return noop;
			let l = addEventListener$1(i, "keydown", (i) => {
				if (i.defaultPrevented || i.key !== "Enter") return;
				i.preventDefault();
				let a = this.panesArray, c = a.findIndex((t) => t.opts.id.current === s);
				if (c < 0) return;
				let l = a[c];
				assert(l);
				let u = this.layout, d = u[c], { collapsedSize: f = 0, collapsible: p, minSize: m = 0 } = l.constraints;
				if (!(d != null && p)) return;
				let h = adjustLayoutByDelta({
					delta: areNumbersAlmostEqual(d, f) ? m - d : f - d,
					layout: u,
					paneConstraints: a.map((t) => t.constraints),
					pivotIndices: getPivotIndices({
						groupId: t,
						dragHandleId: o,
						domContext: this.domContext
					}),
					trigger: "keyboard"
				});
				u !== h && (this.layout = h);
			});
			return () => {
				l();
			};
		});
		return () => {
			for (let t of o) t();
		};
	};
	#o = /* @__PURE__ */ user_derived(() => ({
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
		return get$1(this.#o);
	}
	set props(t) {
		set(this.#o, t);
	}
}, resizeKeys = [
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"End",
	"Home"
], PaneResizerState = class t {
	static create(i) {
		return new t(i, PaneGroupContext.get());
	}
	opts;
	#e;
	attachment;
	domContext;
	#t = /* @__PURE__ */ user_derived(() => this.#e.dragState?.dragHandleId === this.opts.id.current);
	#n = /* @__PURE__ */ state(!1);
	resizeHandler = null;
	constructor(t, i) {
		this.opts = t, this.#e = i, this.attachment = attachRef(this.opts.ref), this.domContext = new DOMContext(this.opts.ref), user_effect(() => {
			this.opts.disabled.current ? this.resizeHandler = null : this.resizeHandler = this.#e.registerResizeHandle(this.opts.id.current);
		}), user_effect(() => {
			let t = this.opts.ref.current;
			if (!t) return;
			let i = this.opts.disabled.current, a = this.resizeHandler, o = get$1(this.#t);
			if (i || a === null || !o) return;
			let s = (t) => {
				a(t);
			}, c = (t) => {
				a(t);
			}, l = () => {
				t.blur(), this.#e.stopDragging(), this.opts.onDraggingChange.current(!1);
			}, u = this.domContext.getDocument().body, d = this.domContext.getWindow();
			return executeCallbacks(on(u, "contextmenu", l), on(u, "mousemove", s), on(u, "touchmove", s, { passive: !1 }), on(u, "mouseleave", c), on(d, "mouseup", l), on(d, "touchend", l));
		});
	}
	#r = (t) => {
		t.preventDefault(), !this.opts.disabled.current && (this.#e.startDragging(this.opts.id.current, t), this.opts.onDraggingChange.current(!0));
	};
	#i = () => {
		let t = this.opts.ref.current;
		t && (t.blur(), this.#e.stopDragging(), this.opts.onDraggingChange.current(!1));
	};
	#a = (t) => {
		if (this.opts.disabled.current || !this.resizeHandler || t.defaultPrevented) return;
		if (resizeKeys.includes(t.key)) {
			t.preventDefault(), this.resizeHandler(t);
			return;
		}
		if (t.key !== "F6") return;
		t.preventDefault();
		let i = getResizeHandleElementsForGroup(this.#e.opts.id.current, this.domContext), a = getResizeHandleElementIndex({
			groupId: this.#e.opts.id.current,
			id: this.opts.id.current,
			domContext: this.domContext
		});
		if (a === null) return;
		let o = 0;
		o = t.shiftKey ? a > 0 ? a - 1 : i.length - 1 : a + 1 < i.length ? a + 1 : 0, i[o].focus();
	};
	#o = () => {
		set(this.#n, !1);
	};
	#s = () => {
		set(this.#n, !0);
	};
	#c = (t) => {
		this.#r(t);
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
	#f = (t) => {
		this.#r(t);
	};
	#p = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		role: "separator",
		"data-direction": this.#e.opts.direction.current,
		"data-pane-group-id": this.#e.opts.id.current,
		"data-active": get$1(this.#t) ? "pointer" : get$1(this.#n) ? "keyboard" : void 0,
		"data-enabled": !this.opts.disabled.current,
		"data-pane-resizer-id": this.opts.id.current,
		"data-pane-resizer": "",
		tabIndex: this.opts.tabIndex.current,
		style: {
			cursor: getCursorStyle(this.#e.opts.direction.current),
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
		return get$1(this.#p);
	}
	set props(t) {
		set(this.#p, t);
	}
}, PaneState = class t {
	static create(i) {
		return new t(i, PaneGroupContext.get());
	}
	opts;
	group;
	attachment;
	domContext;
	#e = /* @__PURE__ */ state("");
	#t = /* @__PURE__ */ user_derived(() => ({
		onCollapse: this.opts.onCollapse.current,
		onExpand: this.opts.onExpand.current,
		onResize: this.opts.onResize.current
	}));
	get callbacks() {
		return get$1(this.#t);
	}
	set callbacks(t) {
		set(this.#t, t);
	}
	#n = /* @__PURE__ */ user_derived(() => ({
		collapsedSize: this.opts.collapsedSize.current,
		collapsible: this.opts.collapsible.current,
		defaultSize: this.opts.defaultSize.current,
		maxSize: this.opts.maxSize.current,
		minSize: this.opts.minSize.current
	}));
	get constraints() {
		return get$1(this.#n);
	}
	set constraints(t) {
		set(this.#n, t);
	}
	#r = (t) => {
		set(this.#e, t, !0), afterTick(() => {
			if (this.opts.ref.current) {
				let t = this.opts.ref.current;
				if (getComputedStyle(t).transitionDuration === "0s") {
					set(this.#e, "");
					return;
				}
				let i = (a) => {
					a.propertyName === "flex-grow" && (set(this.#e, ""), t.removeEventListener("transitionend", i));
				};
				t.addEventListener("transitionend", i);
			} else set(this.#e, "");
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
		resize: (t) => this.group.resizePane(this, t),
		getId: () => this.opts.id.current
	};
	constructor(t, i) {
		this.opts = t, this.group = i, this.attachment = attachRef(this.opts.ref), this.domContext = new DOMContext(this.opts.ref), onMount(() => this.group.registerPane(this)), watch(() => snapshot(this.constraints), () => {
			this.group.panesArrayChanged = !0;
		});
	}
	#i = /* @__PURE__ */ user_derived(() => this.group.isPaneCollapsed(this));
	#a = /* @__PURE__ */ user_derived(() => get$1(this.#e) === "" ? get$1(this.#i) ? "collapsed" : "expanded" : get$1(this.#e));
	#o = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		style: this.group.getPaneStyle(this, this.opts.defaultSize.current),
		"data-pane": "",
		"data-pane-id": this.opts.id.current,
		"data-pane-group-id": this.group.opts.id.current,
		"data-collapsed": get$1(this.#i) ? "" : void 0,
		"data-expanded": get$1(this.#i) ? void 0 : "",
		"data-pane-state": get$1(this.#a),
		...this.attachment
	}));
	get props() {
		return get$1(this.#o);
	}
	set props(t) {
		set(this.#o, t);
	}
}, root_2$4 = /* @__PURE__ */ from_html("<div><!></div>");
function Pane_group(t, i) {
	let a = props_id();
	push(i, !0);
	let o = prop(i, "autoSaveId", 3, null), s = prop(i, "id", 3, a), c = prop(i, "keyboardResizeBy", 3, null), l = prop(i, "onLayoutChange", 3, noop), u = prop(i, "storage", 3, defaultStorage), d = prop(i, "ref", 15, null), f = /* @__PURE__ */ rest_props(i, [
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
	]), p = PaneGroupState.create({
		id: box.with(() => s() ?? a),
		ref: box.with(() => d(), (t) => d(t)),
		autoSaveId: box.with(() => o()),
		direction: box.with(() => i.direction),
		keyboardResizeBy: box.with(() => c()),
		onLayout: box.with(() => l()),
		storage: box.with(() => u())
	}), m = () => p.layout, h = p.setLayout, g = () => p.opts.id.current, _ = /* @__PURE__ */ user_derived(() => mergeProps(f, p.props));
	var y = {
		getLayout: m,
		setLayout: h,
		getId: g
	}, b = comment(), x = first_child(b), S = (t) => {
		var a = comment();
		snippet(first_child(a), () => i.child, () => ({ props: get$1(_) })), append(t, a);
	}, C = (t) => {
		var a = root_2$4();
		attribute_effect(a, () => ({ ...get$1(_) })), snippet(child(a), () => i.children ?? noop$1), reset(a), append(t, a);
	};
	return if_block(x, (t) => {
		i.child ? t(S) : t(C, -1);
	}), append(t, b), pop(y);
}
var root_2$3 = /* @__PURE__ */ from_html("<div><!></div>");
function Pane(t, i) {
	let a = props_id();
	push(i, !0);
	let o = prop(i, "id", 3, a), s = prop(i, "ref", 15, null), c = prop(i, "onCollapse", 3, noop), l = prop(i, "onExpand", 3, noop), u = prop(i, "onResize", 3, noop), d = /* @__PURE__ */ rest_props(i, [
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
	]), f = PaneState.create({
		id: box.with(() => o()),
		ref: box.with(() => s(), (t) => s(t)),
		collapsedSize: box.with(() => i.collapsedSize),
		collapsible: box.with(() => i.collapsible),
		defaultSize: box.with(() => i.defaultSize),
		maxSize: box.with(() => i.maxSize),
		minSize: box.with(() => i.minSize),
		onCollapse: box.with(() => c()),
		onExpand: box.with(() => l()),
		onResize: box.with(() => u()),
		order: box.with(() => i.order)
	}), p = f.pane.collapse, m = f.pane.expand, h = f.pane.getSize, g = f.pane.isCollapsed, _ = f.pane.isExpanded, y = f.pane.resize, b = f.pane.getId, x = /* @__PURE__ */ user_derived(() => mergeProps(d, f.props));
	var S = {
		collapse: p,
		expand: m,
		getSize: h,
		isCollapsed: g,
		isExpanded: _,
		resize: y,
		getId: b
	}, C = comment(), w = first_child(C), T = (t) => {
		var a = comment();
		snippet(first_child(a), () => i.child, () => ({ props: get$1(x) })), append(t, a);
	}, E = (t) => {
		var a = root_2$3();
		attribute_effect(a, () => ({ ...get$1(x) })), snippet(child(a), () => i.children ?? noop$1), reset(a), append(t, a);
	};
	return if_block(w, (t) => {
		i.child ? t(T) : t(E, -1);
	}), append(t, C), pop(S);
}
var root_2$2 = /* @__PURE__ */ from_html("<div><!></div>");
function Pane_resizer(t, i) {
	let a = props_id();
	push(i, !0);
	let o = prop(i, "id", 3, a), s = prop(i, "ref", 15, null), c = prop(i, "disabled", 3, !1), l = prop(i, "onDraggingChange", 3, noop), u = prop(i, "tabindex", 3, 0), d = /* @__PURE__ */ rest_props(i, [
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
	]), f = PaneResizerState.create({
		id: box.with(() => o()),
		ref: box.with(() => s(), (t) => s(t)),
		disabled: box.with(() => c()),
		onDraggingChange: box.with(() => l()),
		tabIndex: box.with(() => u())
	}), p = /* @__PURE__ */ user_derived(() => mergeProps(d, f.props));
	var m = comment(), h = first_child(m), g = (t) => {
		var a = comment();
		snippet(first_child(a), () => i.child, () => ({ props: get$1(p) })), append(t, a);
	}, _ = (t) => {
		var a = root_2$2();
		attribute_effect(a, () => ({ ...get$1(p) })), snippet(child(a), () => i.children ?? noop$1), reset(a), append(t, a);
	};
	if_block(h, (t) => {
		i.child ? t(g) : t(_, -1);
	}), append(t, m), pop();
}
var root_2$1 = /* @__PURE__ */ from_html("<div class=\"bg-border h-6 w-1 rounded-lg z-10 flex shrink-0\"></div>");
function Resizable_handle(t, i) {
	push(i, !0);
	let a = prop(i, "ref", 15, null), o = prop(i, "withHandle", 3, !1), s = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"withHandle"
	]);
	var c = comment(), l = first_child(c);
	{
		let t = /* @__PURE__ */ user_derived(() => cn("cn-resizable-handle bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[direction=vertical]:h-px data-[direction=vertical]:w-full data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:h-1 data-[direction=vertical]:after:w-full data-[direction=vertical]:after:translate-x-0 data-[direction=vertical]:after:-translate-y-1/2 [&[data-direction=vertical]>div]:rotate-90", i.class));
		component(l, () => Pane_resizer, (i, c) => {
			c(i, spread_props({
				"data-slot": "resizable-handle",
				get class() {
					return get$1(t);
				}
			}, () => s, {
				get ref() {
					return a();
				},
				set ref(t) {
					a(t);
				},
				children: (t, i) => {
					var a = comment(), s = first_child(a), c = (t) => {
						append(t, root_2$1());
					};
					if_block(s, (t) => {
						o() && t(c);
					}), append(t, a);
				},
				$$slots: { default: !0 }
			}));
		});
	}
	append(t, c), pop();
}
function Resizable_pane_group(t, i) {
	push(i, !0);
	let a = prop(i, "ref", 15, null), o = prop(i, "this", 15), s = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"this",
		"class"
	]);
	var c = comment(), l = first_child(c);
	{
		let t = /* @__PURE__ */ user_derived(() => cn("cn-resizable-panel-group flex h-full w-full data-[direction=vertical]:flex-col", i.class));
		component(l, () => Pane_group, (i, c) => {
			bind_this(c(i, spread_props({
				"data-slot": "resizable-pane-group",
				get class() {
					return get$1(t);
				}
			}, () => s, {
				get ref() {
					return a();
				},
				set ref(t) {
					a(t);
				}
			})), (t) => o(t), () => o());
		});
	}
	append(t, c), pop();
}
var root_2 = /* @__PURE__ */ from_html("<!> <!>", 1), root$1 = /* @__PURE__ */ from_html("<form><!></form>");
function GuestLoginForm(t, i) {
	push(i, !0);
	let a = () => store_get(authStore, "$authStore", o), [o, s] = setup_stores(), c = /* @__PURE__ */ user_derived(() => a().username), l = /* @__PURE__ */ user_derived(() => a().status), u = async (t) => {
		if (t.preventDefault(), !get$1(l)) try {
			store_mutate(authStore, untrack(a).status = !0, untrack(a)), await new Promise((t) => setTimeout(t, 500)), await login(get$1(c));
		} catch (t) {
			console.error(t);
		} finally {
			store_mutate(authStore, untrack(a).status = !1, untrack(a)), store_mutate(authStore, untrack(a).username = "", untrack(a)), store_mutate(authStore, untrack(a).password = void 0, untrack(a));
		}
	};
	var d = root$1();
	Field_group(child(d), {
		children: (t, i) => {
			Field(t, {
				orientation: "horizontal",
				class: "flex flex-row items-start justify-start gap-0",
				children: (t, i) => {
					var o = root_2(), s = first_child(o);
					Button(s, {
						type: "submit",
						class: "flex-2 rounded-none border-none",
						children: (t, i) => {
							next(), append(t, text("Guest Login"));
						},
						$$slots: { default: !0 }
					}), Input(sibling(s, 2), {
						required: !0,
						class: "flex-8 rounded-none border-none",
						type: "text",
						autocomplete: "name",
						placeholder: "Username",
						get disabled() {
							return get$1(l);
						},
						get value() {
							return a().username;
						},
						set value(t) {
							store_mutate(authStore, untrack(a).username = t, untrack(a));
						}
					}), append(t, o);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), reset(d), template_effect((t) => set_class(d, 1, t), [() => clsx$1(cn(i.class))]), event("submit", d, u), append(t, d), pop(), s();
}
var root_4 = /* @__PURE__ */ from_html("<div class=\"flex flex-col h-full\"><div class=\"flex flex-col items-center justify-center h-full\">Chat</div> <!></div>"), root_6 = /* @__PURE__ */ from_html("<div class=\"flex flex-col h-full items-center justify-center p-6\"><span class=\"font-semibold\">Features</span></div>"), root_3 = /* @__PURE__ */ from_html("<!> <!> <!>", 1), root_9 = /* @__PURE__ */ from_html("<div class=\"flex flex-row h-full items-center justify-center p-6\"><span class=\"font-semibold\">Player</span></div>"), root_10 = /* @__PURE__ */ from_html("<div class=\"flex flex-col h-full items-center justify-center p-6\"><span class=\"font-semibold\">Playlist</span></div>"), root_8 = /* @__PURE__ */ from_html("<!> <!> <!>", 1), root_1 = /* @__PURE__ */ from_html("<!> <!> <!>", 1);
function CytubeFluidLayout(t, i) {
	push(i, !1);
	let a = () => store_get(clientStore, "$clientStore", o), [o, s] = setup_stores();
	init$1(), Resizable_pane_group(t, {
		direction: "horizontal",
		class: "w-full flex-1 border",
		children: (t, i) => {
			var o = root_1(), s = first_child(o);
			Pane(s, {
				defaultSize: 45,
				minSize: 25,
				maxSize: 50,
				children: (t, i) => {
					Resizable_pane_group(t, {
						direction: "vertical",
						class: "flex-1",
						children: (t, i) => {
							var o = root_3(), s = first_child(o);
							Pane(s, {
								defaultSize: 70,
								children: (t, i) => {
									var o = root_4(), s = sibling(child(o), 2), c = (t) => {
										GuestLoginForm(t, { class: "w-full" });
									};
									if_block(s, (t) => {
										a().logged_in || t(c);
									}), reset(o), append(t, o);
								},
								$$slots: { default: !0 }
							});
							var c = sibling(s, 2);
							Resizable_handle(c, {}), Pane(sibling(c, 2), {
								defaultSize: 30,
								children: (t, i) => {
									append(t, root_6());
								},
								$$slots: { default: !0 }
							}), append(t, o);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			});
			var c = sibling(s, 2);
			Resizable_handle(c, {}), Pane(sibling(c, 2), {
				defaultSize: 65,
				minSize: 50,
				maxSize: 75,
				children: (t, i) => {
					Resizable_pane_group(t, {
						direction: "vertical",
						class: "flex-1",
						children: (t, i) => {
							var a = root_8(), o = first_child(a);
							Pane(o, {
								defaultSize: 70,
								children: (t, i) => {
									append(t, root_9());
								},
								$$slots: { default: !0 }
							});
							var s = sibling(o, 2);
							Resizable_handle(s, {}), Pane(sibling(s, 2), {
								defaultSize: 30,
								children: (t, i) => {
									append(t, root_10());
								},
								$$slots: { default: !0 }
							}), append(t, a);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			}), append(t, o);
		},
		$$slots: { default: !0 }
	}), pop(), s();
}
var root = /* @__PURE__ */ from_html("<main class=\"flex flex-col flex-1 selection:bg-primary\"><!></main>");
function Main(t) {
	var i = root();
	CytubeFluidLayout(child(i), {}), reset(i), append(t, i);
}
var removeLegacyWrap = () => {
	let t = document.getElementById("wrap");
	t && t.remove();
}, removeLegacyModals = () => {
	let t = document.getElementById("useroptions");
	t && t.remove();
	let i = document.getElementById("emotelist");
	i && i.remove();
	let a = document.getElementById("channeloptions");
	a && a.remove();
	let o = document.getElementById("pmbar");
	o && o.remove();
}, removeLegacyFooter = () => {
	let t = document.getElementById("footer");
	t && t.remove();
}, upgradeBody = () => {
	document.body.className = "dark override-theme min-h-screen flex flex-col";
}, addHeader = async () => {
	mount(Header, {
		target: document.body,
		anchor: document.body.firstChild ? document.body.firstChild : void 0
	});
}, addMain = async () => {
	mount(Main, {
		target: document.body,
		anchor: document.body.firstChild ? document.body.firstChild : void 0
	});
};
const upgradeLegacyElements = async () => {
	removeLegacyWrap(), removeLegacyModals(), removeLegacyFooter(), upgradeBody(), await addMain(), await addHeader(), await tick();
}, init = async () => {
	let t = initStores();
	try {
		await initOverrides(), await upgradeLegacyElements();
	} catch (i) {
		throw t(), i;
	}
};
export { init };
