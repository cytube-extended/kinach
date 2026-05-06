const submitSocketConnect = async () => new Promise((e) => {
	socketClient.once("connect", () => {
		e();
	}), socketClient.connect();
}), submitSocketDisconnect = async () => new Promise((e, i) => {
	socketClient.once("disconnect", (a) => {
		if (a === "io client disconnect") {
			e();
			return;
		}
		i(a);
	}), socketClient.disconnect();
}), socketClient = window.socket;
var is_array = Array.isArray, index_of = Array.prototype.indexOf, includes = Array.prototype.includes, array_from = Array.from;
Object.keys;
var define_property = Object.defineProperty, get_descriptor = Object.getOwnPropertyDescriptor, get_descriptors = Object.getOwnPropertyDescriptors, object_prototype = Object.prototype, array_prototype = Array.prototype, get_prototype_of = Object.getPrototypeOf, is_extensible = Object.isExtensible;
function is_function(e) {
	return typeof e == "function";
}
const noop = () => {};
function run(e) {
	return e();
}
function run_all(e) {
	for (var i = 0; i < e.length; i++) e[i]();
}
function deferred() {
	var e, i;
	return {
		promise: new Promise((a, o) => {
			e = a, i = o;
		}),
		resolve: e,
		reject: i
	};
}
const CLEAN = 1024, DIRTY = 2048, MAYBE_DIRTY = 4096, INERT = 8192, REACTION_RAN = 32768, DESTROYING = 1 << 25, EFFECT_TRANSPARENT = 65536, EFFECT_PRESERVED = 1 << 19, USER_EFFECT = 1 << 20, WAS_MARKED = 65536, REACTION_IS_UPDATING = 1 << 21, ERROR_VALUE = 1 << 23, STATE_SYMBOL = Symbol("$state"), LEGACY_PROPS = Symbol("legacy props"), LOADING_ATTR_SYMBOL = Symbol(""), STALE_REACTION = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), IS_XHTML = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function equals(e) {
	return e === this.v;
}
function safe_not_equal(e, i) {
	return e == e ? e !== i || typeof e == "object" && !!e || typeof e == "function" : i == i;
}
function safe_equals(e) {
	return !safe_not_equal(e, this.v);
}
function lifecycle_outside_component(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
function async_derived_orphan() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function effect_in_teardown(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function effect_in_unowned_derived() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function effect_orphan(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function effect_update_depth_exceeded() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function props_invalid_value(e) {
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
let component_context = null;
function set_component_context(e) {
	component_context = e;
}
function getContext(e) {
	return get_or_init_context_map("getContext").get(e);
}
function setContext(e, i) {
	return get_or_init_context_map("setContext").set(e, i), i;
}
function hasContext(e) {
	return get_or_init_context_map("hasContext").has(e);
}
function push(e, i = !1, a) {
	component_context = {
		p: component_context,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: active_effect,
		l: legacy_mode_flag && !i ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function pop(e) {
	var i = component_context, a = i.e;
	if (a !== null) {
		i.e = null;
		for (var o of a) create_user_effect(o);
	}
	return e !== void 0 && (i.x = e), i.i = !0, component_context = i.p, e ?? {};
}
function is_runes() {
	return !legacy_mode_flag || component_context !== null && component_context.l === null;
}
function get_or_init_context_map(e) {
	return component_context === null && lifecycle_outside_component(e), component_context.c ??= new Map(get_parent_context(component_context) || void 0);
}
function get_parent_context(e) {
	let i = e.p;
	for (; i !== null;) {
		let e = i.c;
		if (e !== null) return e;
		i = i.p;
	}
	return null;
}
var micro_tasks = [];
function run_micro_tasks() {
	var e = micro_tasks;
	micro_tasks = [], run_all(e);
}
function queue_micro_task(e) {
	if (micro_tasks.length === 0 && !is_flushing_sync) {
		var i = micro_tasks;
		queueMicrotask(() => {
			i === micro_tasks && run_micro_tasks();
		});
	}
	micro_tasks.push(e);
}
function flush_tasks() {
	for (; micro_tasks.length > 0;) run_micro_tasks();
}
function derived_inert() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function hydration_mismatch(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function select_multiple_invalid_value() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function svelte_boundary_reset_noop() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let hydrating = !1;
function set_hydrating(e) {
	hydrating = e;
}
let hydrate_node;
function set_hydrate_node(e) {
	if (e === null) throw hydration_mismatch(), HYDRATION_ERROR;
	return hydrate_node = e;
}
function hydrate_next() {
	return set_hydrate_node(/* @__PURE__ */ get_next_sibling(hydrate_node));
}
function reset(e) {
	if (hydrating) {
		if (/* @__PURE__ */ get_next_sibling(hydrate_node) !== null) throw hydration_mismatch(), HYDRATION_ERROR;
		hydrate_node = e;
	}
}
function next(e = 1) {
	if (hydrating) {
		for (var i = e, a = hydrate_node; i--;) a = /* @__PURE__ */ get_next_sibling(a);
		hydrate_node = a;
	}
}
function skip_nodes(e = !0) {
	for (var i = 0, a = hydrate_node;;) {
		if (a.nodeType === 8) {
			var o = a.data;
			if (o === "]") {
				if (i === 0) return a;
				--i;
			} else (o === "[" || o === "[!" || o[0] === "[" && !isNaN(Number(o.slice(1)))) && (i += 1);
		}
		var s = /* @__PURE__ */ get_next_sibling(a);
		e && a.remove(), a = s;
	}
}
function read_hydration_instruction(e) {
	if (!e || e.nodeType !== 8) throw hydration_mismatch(), HYDRATION_ERROR;
	return e.data;
}
function proxy(e) {
	if (typeof e != "object" || !e || STATE_SYMBOL in e) return e;
	let i = get_prototype_of(e);
	if (i !== object_prototype && i !== array_prototype) return e;
	var a = /* @__PURE__ */ new Map(), s = is_array(e), c = /* @__PURE__ */ state(0), l = null, u = update_version, f = (e) => {
		if (update_version === u) return e();
		var i = active_reaction, a = update_version;
		set_active_reaction(null), set_update_version(u);
		var o = e();
		return set_active_reaction(i), set_update_version(a), o;
	};
	return s && a.set("length", /* @__PURE__ */ state(e.length, l)), new Proxy(e, {
		defineProperty(e, i, o) {
			(!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && state_descriptors_fixed();
			var s = a.get(i);
			return s === void 0 ? f(() => {
				var e = /* @__PURE__ */ state(o.value, l);
				return a.set(i, e), e;
			}) : set(s, o.value, !0), !0;
		},
		deleteProperty(e, i) {
			var o = a.get(i);
			if (o === void 0) {
				if (i in e) {
					let e = f(() => /* @__PURE__ */ state(UNINITIALIZED, l));
					a.set(i, e), increment(c);
				}
			} else set(o, UNINITIALIZED), increment(c);
			return !0;
		},
		get(i, o, s) {
			if (o === STATE_SYMBOL) return e;
			var c = a.get(o), u = o in i;
			if (c === void 0 && (!u || get_descriptor(i, o)?.writable) && (c = f(() => /* @__PURE__ */ state(proxy(u ? i[o] : UNINITIALIZED), l)), a.set(o, c)), c !== void 0) {
				var p = get$1(c);
				return p === UNINITIALIZED ? void 0 : p;
			}
			return Reflect.get(i, o, s);
		},
		getOwnPropertyDescriptor(e, i) {
			var o = Reflect.getOwnPropertyDescriptor(e, i);
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
		has(e, i) {
			if (i === STATE_SYMBOL) return !0;
			var o = a.get(i), s = o !== void 0 && o.v !== UNINITIALIZED || Reflect.has(e, i);
			return (o !== void 0 || active_effect !== null && (!s || get_descriptor(e, i)?.writable)) && (o === void 0 && (o = f(() => /* @__PURE__ */ state(s ? proxy(e[i]) : UNINITIALIZED, l)), a.set(i, o)), get$1(o) === UNINITIALIZED) ? !1 : s;
		},
		set(e, i, o, u) {
			var p = a.get(i), m = i in e;
			if (s && i === "length") for (var h = o; h < p.v; h += 1) {
				var g = a.get(h + "");
				g === void 0 ? h in e && (g = f(() => /* @__PURE__ */ state(UNINITIALIZED, l)), a.set(h + "", g)) : set(g, UNINITIALIZED);
			}
			if (p === void 0) (!m || get_descriptor(e, i)?.writable) && (p = f(() => /* @__PURE__ */ state(void 0, l)), set(p, proxy(o)), a.set(i, p));
			else {
				m = p.v !== UNINITIALIZED;
				var _ = f(() => proxy(o));
				set(p, _);
			}
			var v = Reflect.getOwnPropertyDescriptor(e, i);
			if (v?.set && v.set.call(u, o), !m) {
				if (s && typeof i == "string") {
					var y = a.get("length"), b = Number(i);
					Number.isInteger(b) && b >= y.v && set(y, b + 1);
				}
				increment(c);
			}
			return !0;
		},
		ownKeys(e) {
			get$1(c);
			var i = Reflect.ownKeys(e).filter((e) => {
				var i = a.get(e);
				return i === void 0 || i.v !== UNINITIALIZED;
			});
			for (var [o, s] of a) s.v !== UNINITIALIZED && !(o in e) && i.push(o);
			return i;
		},
		setPrototypeOf() {
			state_prototype_fixed();
		}
	});
}
function get_proxied_value(e) {
	try {
		if (typeof e == "object" && e && STATE_SYMBOL in e) return e[STATE_SYMBOL];
	} catch {}
	return e;
}
function is$1(e, i) {
	return Object.is(get_proxied_value(e), get_proxied_value(i));
}
var $window, is_firefox, first_child_getter, next_sibling_getter;
function init_operations() {
	if ($window === void 0) {
		$window = window, document, is_firefox = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, i = Node.prototype, a = Text.prototype;
		first_child_getter = get_descriptor(i, "firstChild").get, next_sibling_getter = get_descriptor(i, "nextSibling").get, is_extensible(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), is_extensible(a) && (a.__t = void 0);
	}
}
function create_text(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function get_first_child(e) {
	return first_child_getter.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function get_next_sibling(e) {
	return next_sibling_getter.call(e);
}
function child(e, i) {
	if (!hydrating) return /* @__PURE__ */ get_first_child(e);
	var a = /* @__PURE__ */ get_first_child(hydrate_node);
	if (a === null) a = hydrate_node.appendChild(create_text());
	else if (i && a.nodeType !== 3) {
		var o = create_text();
		return a?.before(o), set_hydrate_node(o), o;
	}
	return i && merge_text_nodes(a), set_hydrate_node(a), a;
}
function first_child(e, i = !1) {
	if (!hydrating) {
		var a = /* @__PURE__ */ get_first_child(e);
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
function sibling(e, i = 1, a = !1) {
	let o = hydrating ? hydrate_node : e;
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
function create_element(e, i, a) {
	let o = a ? { is: a } : void 0;
	return document.createElementNS(i ?? "http://www.w3.org/1999/xhtml", e, o);
}
function merge_text_nodes(e) {
	if (e.nodeValue.length < 65536) return;
	let i = e.nextSibling;
	for (; i !== null && i.nodeType === 3;) i.remove(), e.nodeValue += i.nodeValue, i = e.nextSibling;
}
function handle_error(e) {
	var i = active_effect;
	if (i === null) return active_reaction.f |= ERROR_VALUE, e;
	if (!(i.f & 32768) && !(i.f & 4)) throw e;
	invoke_error_boundary(e, i);
}
function invoke_error_boundary(e, i) {
	for (; i !== null;) {
		if (i.f & 128) {
			if (!(i.f & 32768)) throw e;
			try {
				i.b.error(e);
				return;
			} catch (i) {
				e = i;
			}
		}
		i = i.parent;
	}
	throw e;
}
var STATUS_MASK = ~(MAYBE_DIRTY | 3072);
function set_signal_status(e, i) {
	e.f = e.f & STATUS_MASK | i;
}
function update_derived_status(e) {
	e.f & 512 || e.deps === null ? set_signal_status(e, CLEAN) : set_signal_status(e, MAYBE_DIRTY);
}
function clear_marked(e) {
	if (e !== null) for (let i of e) !(i.f & 2) || !(i.f & 65536) || (i.f ^= WAS_MARKED, clear_marked(i.deps));
}
function defer_effect(e, i, a) {
	e.f & 2048 ? i.add(e) : e.f & 4096 && a.add(e), clear_marked(e.deps), set_signal_status(e, CLEAN);
}
function subscribe_to_store(e, i, a) {
	if (e == null) return i(void 0), a && a(void 0), noop;
	let o = untrack(() => e.subscribe(i, a));
	return o.unsubscribe ? () => o.unsubscribe() : o;
}
var subscriber_queue = [];
function writable(e, i = noop) {
	let a = null, o = /* @__PURE__ */ new Set();
	function s(i) {
		if (safe_not_equal(e, i) && (e = i, a)) {
			let i = !subscriber_queue.length;
			for (let i of o) i[1](), subscriber_queue.push(i, e);
			if (i) {
				for (let e = 0; e < subscriber_queue.length; e += 2) subscriber_queue[e][0](subscriber_queue[e + 1]);
				subscriber_queue.length = 0;
			}
		}
	}
	function c(i) {
		s(i(e));
	}
	function l(l, u = noop) {
		let d = [l, u];
		return o.add(d), o.size === 1 && (a = i(s, c) || noop), l(e), () => {
			o.delete(d), o.size === 0 && a && (a(), a = null);
		};
	}
	return {
		set: s,
		update: c,
		subscribe: l
	};
}
function get(e) {
	let i;
	return subscribe_to_store(e, (e) => i = e)(), i;
}
var is_store_binding = !1, IS_UNMOUNTED = Symbol();
function store_get(e, i, a) {
	let o = a[i] ??= {
		store: null,
		source: /* @__PURE__ */ mutable_source(void 0),
		unsubscribe: noop
	};
	if (o.store !== e && !(IS_UNMOUNTED in a)) if (o.unsubscribe(), o.store = e ?? null, e == null) o.source.v = void 0, o.unsubscribe = noop;
	else {
		var s = !0;
		o.unsubscribe = subscribe_to_store(e, (e) => {
			s ? o.source.v = e : set(o.source, e);
		}), s = !1;
	}
	return e && IS_UNMOUNTED in a ? get(e) : get$1(o.source);
}
function setup_stores() {
	let e = {};
	function i() {
		teardown(() => {
			for (var i in e) e[i].unsubscribe();
			define_property(e, IS_UNMOUNTED, {
				enumerable: !1,
				value: !0
			});
		});
	}
	return [e, i];
}
function capture_store_binding(e) {
	var i = is_store_binding;
	try {
		return is_store_binding = !1, [e(), is_store_binding];
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
var flush_count = 0, uid = 1, Batch = class e {
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
			for (var e = !1, i = o; i.parent !== null;) {
				if (this.#u.has(i)) {
					e = !0;
					break;
				}
				i = i.parent;
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
	unskip_effect(e, i = (e) => this.schedule(e)) {
		var a = this.#u.get(e);
		if (a) {
			this.#u.delete(e);
			for (var o of a.d) set_signal_status(o, DIRTY), i(o);
			for (o of a.m) set_signal_status(o, MAYBE_DIRTY), i(o);
		}
		this.#d.add(e);
	}
	#g() {
		if (flush_count++ > 1e3 && (batches.delete(this), infinite_loop_guard()), !this.#m()) {
			for (let e of this.#c) this.#l.delete(e), set_signal_status(e, DIRTY), this.schedule(e);
			for (let e of this.#l) set_signal_status(e, MAYBE_DIRTY), this.schedule(e);
		}
		let i = this.#o;
		this.#o = [], this.apply();
		var a = collected_effects = [], o = [], s = legacy_updates = [];
		for (let e of i) try {
			this.#_(e, a, o);
		} catch (i) {
			throw reset_all(e), i;
		}
		if (current_batch = null, s.length > 0) {
			var c = e.ensure();
			for (let e of s) c.schedule(e);
		}
		if (collected_effects = null, legacy_updates = null, this.#m() || this.#h()) {
			this.#v(o), this.#v(a);
			for (let [e, i] of this.#u) reset_branch(e, i);
		} else {
			this.#r.size === 0 && batches.delete(this), this.#c.clear(), this.#l.clear();
			for (let e of this.#e) e(this);
			this.#e.clear(), flush_queued_effects(o), flush_queued_effects(a), this.#a?.resolve();
		}
		var l = current_batch;
		if (this.#o.length > 0) {
			let e = l ??= this;
			e.#o.push(...this.#o.filter((i) => !e.#o.includes(i)));
		}
		l !== null && (batches.add(l), l.#g());
	}
	#_(e, i, a) {
		e.f ^= CLEAN;
		for (var o = e.first; o !== null;) {
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
	#v(e) {
		for (var i = 0; i < e.length; i += 1) defer_effect(e[i], this.#c, this.#l);
	}
	capture(e, i, a = !1) {
		e.v !== UNINITIALIZED && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [i, a]), batch_values?.set(e, i)), this.is_fork || (e.v = i);
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
		for (let e of this.#t) e(this);
		this.#t.clear(), this.#n.clear(), batches.delete(this);
	}
	register_created_effect(e) {
		this.#s.push(e);
	}
	increment(e, i) {
		let a = this.#r.get(i) ?? 0;
		if (this.#r.set(i, a + 1), e) {
			let e = this.#i.get(i) ?? 0;
			this.#i.set(i, e + 1);
		}
	}
	decrement(e, i, a) {
		let o = this.#r.get(i) ?? 0;
		if (o === 1 ? this.#r.delete(i) : this.#r.set(i, o - 1), e) {
			let e = this.#i.get(i) ?? 0;
			e === 1 ? this.#i.delete(i) : this.#i.set(i, e - 1);
		}
		this.#f || a || (this.#f = !0, queue_micro_task(() => {
			this.#f = !1, this.flush();
		}));
	}
	transfer_effects(e, i) {
		for (let i of e) this.#c.add(i);
		for (let e of i) this.#l.add(e);
		e.clear(), i.clear();
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
		return (this.#a ??= deferred()).promise;
	}
	static ensure() {
		if (current_batch === null) {
			let i = current_batch = new e();
			is_processing || (batches.add(current_batch), is_flushing_sync || queue_micro_task(() => {
				current_batch === i && i.flush();
			}));
		}
		return current_batch;
	}
	apply() {
		batch_values = null;
	}
	schedule(e) {
		if (last_scheduled_effect = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var i = e; i.parent !== null;) {
			i = i.parent;
			var a = i.f;
			if (collected_effects !== null && i === active_effect && (active_reaction === null || !(active_reaction.f & 2))) return;
			if (a & 96) {
				if (!(a & 1024)) return;
				i.f ^= CLEAN;
			}
		}
		this.#o.push(i);
	}
};
function flushSync(e) {
	var i = is_flushing_sync;
	is_flushing_sync = !0;
	try {
		var a;
		for (e && (current_batch !== null && !current_batch.is_fork && current_batch.flush(), a = e());;) {
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
	} catch (e) {
		invoke_error_boundary(e, last_scheduled_effect);
	}
}
let eager_block_effects = null;
function flush_queued_effects(e) {
	var i = e.length;
	if (i !== 0) {
		for (var a = 0; a < i;) {
			var o = e[a++];
			if (!(o.f & 24576) && is_dirty(o) && (eager_block_effects = /* @__PURE__ */ new Set(), update_effect(o), o.deps === null && o.first === null && o.nodes === null && o.teardown === null && o.ac === null && unlink_effect(o), eager_block_effects?.size > 0)) {
				old_values.clear();
				for (let e of eager_block_effects) {
					if (e.f & 24576) continue;
					let i = [e], a = e.parent;
					for (; a !== null;) eager_block_effects.has(a) && (eager_block_effects.delete(a), i.push(a)), a = a.parent;
					for (let e = i.length - 1; e >= 0; e--) {
						let a = i[e];
						a.f & 24576 || update_effect(a);
					}
				}
				eager_block_effects.clear();
			}
		}
		eager_block_effects = null;
	}
}
function mark_effects(e, i, a, o) {
	if (!a.has(e) && (a.add(e), e.reactions !== null)) for (let s of e.reactions) {
		let e = s.f;
		e & 2 ? mark_effects(s, i, a, o) : e & 4194320 && !(e & 2048) && depends_on(s, i, o) && (set_signal_status(s, DIRTY), schedule_effect(s));
	}
}
function depends_on(e, i, a) {
	let o = a.get(e);
	if (o !== void 0) return o;
	if (e.deps !== null) for (let o of e.deps) {
		if (includes.call(i, o)) return !0;
		if (o.f & 2 && depends_on(o, i, a)) return a.set(o, !0), !0;
	}
	return a.set(e, !1), !1;
}
function schedule_effect(e) {
	current_batch.schedule(e);
}
function reset_branch(e, i) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? i.d.push(e) : e.f & 4096 && i.m.push(e), set_signal_status(e, CLEAN);
		for (var a = e.first; a !== null;) reset_branch(a, i), a = a.next;
	}
}
function reset_all(e) {
	set_signal_status(e, CLEAN);
	for (var i = e.first; i !== null;) reset_all(i), i = i.next;
}
function createSubscriber(e) {
	let i = 0, a = source(0), o;
	return () => {
		effect_tracking() && (get$1(a), render_effect(() => (i === 0 && (o = untrack(() => e(() => increment(a)))), i += 1, () => {
			queue_micro_task(() => {
				--i, i === 0 && (o?.(), o = void 0, increment(a));
			});
		})));
	};
}
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
function boundary(e, i, a, o) {
	new Boundary(e, i, a, o);
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
	constructor(e, i, a, o) {
		this.#e = e, this.#n = i, this.#r = (e) => {
			var i = active_effect;
			i.b = this, i.f |= 128, a(e);
		}, this.parent = active_effect.b, this.transform_error = o ?? this.parent?.transform_error ?? ((e) => e), this.#i = block(() => {
			if (hydrating) {
				let e = this.#t;
				hydrate_next();
				let i = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let i = JSON.parse(e.data.slice(2));
					this.#_(i);
				} else i ? this.#v() : this.#g();
			} else this.#y();
		}, flags), hydrating && (this.#e = hydrate_node);
	}
	#g() {
		try {
			this.#a = branch(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let i = this.#n.failed;
		i && (this.#s = branch(() => {
			i(this.#e, () => e, () => () => {});
		}));
	}
	#v() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = branch(() => e(this.#e)), queue_micro_task(() => {
			var e = this.#c = document.createDocumentFragment(), i = create_text();
			e.append(i), this.#a = this.#x(() => branch(() => this.#r(i))), this.#u === 0 && (this.#e.before(e), this.#c = null, pause_effect(this.#o, () => {
				this.#o = null;
			}), this.#b(current_batch));
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = branch(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				move_effect(this.#a, e);
				let i = this.#n.pending;
				this.#o = branch(() => i(this.#e));
			} else this.#b(current_batch);
		} catch (e) {
			this.error(e);
		}
	}
	#b(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		defer_effect(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(e) {
		var i = active_effect, a = active_reaction, o = component_context;
		set_active_effect(this.#i), set_active_reaction(this.#i), set_component_context(this.#i.ctx);
		try {
			return Batch.ensure(), e();
		} catch (e) {
			return handle_error(e), null;
		} finally {
			set_active_effect(i), set_active_reaction(a), set_component_context(o);
		}
	}
	#S(e, i) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(e, i);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#b(i), this.#o && pause_effect(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, i) {
		this.#S(e, i), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, queue_micro_task(() => {
			this.#d = !1, this.#m && internal_set(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), get$1(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		current_batch?.is_fork ? (this.#a && current_batch.skip_effect(this.#a), this.#o && current_batch.skip_effect(this.#o), this.#s && current_batch.skip_effect(this.#s), current_batch.on_fork_commit(() => {
			this.#C(e);
		})) : this.#C(e);
	}
	#C(e) {
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
		}, l = (e) => {
			try {
				s = !0, i?.(e, c), s = !1;
			} catch (e) {
				invoke_error_boundary(e, this.#i && this.#i.parent);
			}
			a && (this.#s = this.#x(() => {
				try {
					return branch(() => {
						var i = active_effect;
						i.b = this, i.f |= 128, a(this.#e, () => e, () => c);
					});
				} catch (e) {
					return invoke_error_boundary(e, this.#i.parent), null;
				}
			}));
		};
		queue_micro_task(() => {
			var i;
			try {
				i = this.transform_error(e);
			} catch (e) {
				invoke_error_boundary(e, this.#i && this.#i.parent);
				return;
			}
			typeof i == "object" && i && typeof i.then == "function" ? i.then(l, (e) => invoke_error_boundary(e, this.#i && this.#i.parent)) : l(i);
		});
	}
};
function flatten(e, i, a, o) {
	let s = is_runes() ? derived : derived_safe_equal;
	var c = e.filter((e) => !e.settled);
	if (a.length === 0 && c.length === 0) {
		o(i.map(s));
		return;
	}
	var l = active_effect, u = capture(), d = c.length === 1 ? c[0].promise : c.length > 1 ? Promise.all(c.map((e) => e.promise)) : null;
	function f(e) {
		u();
		try {
			o(e);
		} catch (e) {
			l.f & 16384 || invoke_error_boundary(e, l);
		}
		unset_context();
	}
	if (a.length === 0) {
		d.then(() => f(i.map(s)));
		return;
	}
	var p = increment_pending();
	function m() {
		Promise.all(a.map((e) => /* @__PURE__ */ async_derived(e))).then((e) => f([...i.map(s), ...e])).catch((e) => invoke_error_boundary(e, l)).finally(() => p());
	}
	d ? d.then(() => {
		u(), m(), unset_context();
	}) : m();
}
function capture() {
	var e = active_effect, i = active_reaction, a = component_context, o = current_batch;
	return function(s = !0) {
		set_active_effect(e), set_active_reaction(i), set_component_context(a), s && !(e.f & 16384) && (o?.activate(), o?.apply());
	};
}
function unset_context(e = !0) {
	set_active_effect(null), set_active_reaction(null), set_component_context(null), e && current_batch?.deactivate();
}
function increment_pending() {
	var e = active_effect, i = e.b, a = current_batch, o = i.is_rendered();
	return i.update_pending_count(1, a), a.increment(o, e), (s = !1) => {
		i.update_pending_count(-1, a), a.decrement(o, e, s);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function derived(e) {
	var i = 2 | DIRTY;
	return active_effect !== null && (active_effect.f |= EFFECT_PRESERVED), {
		ctx: component_context,
		deps: null,
		effects: null,
		equals,
		f: i,
		fn: e,
		reactions: null,
		rv: 0,
		v: UNINITIALIZED,
		wv: 0,
		parent: active_effect,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function async_derived(e, i, a) {
	let o = active_effect;
	o === null && async_derived_orphan();
	var s = void 0, c = source(UNINITIALIZED), l = !active_reaction, u = /* @__PURE__ */ new Map();
	return async_effect(() => {
		var i = active_effect, a = deferred();
		s = a.promise;
		try {
			Promise.resolve(e()).then(a.resolve, a.reject).finally(unset_context);
		} catch (e) {
			a.reject(e), unset_context();
		}
		var d = current_batch;
		if (l) {
			if (i.f & 32768) var f = increment_pending();
			if (o.b.is_rendered()) u.get(d)?.reject(STALE_REACTION), u.delete(d);
			else {
				for (let e of u.values()) e.reject(STALE_REACTION);
				u.clear();
			}
			u.set(d, a);
		}
		let p = (e, a = void 0) => {
			if (f && f(a === STALE_REACTION), !(a === STALE_REACTION || i.f & 16384)) {
				if (d.activate(), a) c.f |= ERROR_VALUE, internal_set(c, a);
				else {
					c.f & 8388608 && (c.f ^= ERROR_VALUE), internal_set(c, e);
					for (let [e, i] of u) {
						if (u.delete(e), e === d) break;
						i.reject(STALE_REACTION);
					}
				}
				d.deactivate();
			}
		};
		a.promise.then(p, (e) => p(null, e || "unknown"));
	}), teardown(() => {
		for (let e of u.values()) e.reject(STALE_REACTION);
	}), new Promise((e) => {
		function i(a) {
			function o() {
				a === s ? e(c) : i(s);
			}
			a.then(o, o);
		}
		i(s);
	});
}
/* @__NO_SIDE_EFFECTS__ */
function user_derived(e) {
	let i = /* @__PURE__ */ derived(e);
	return push_reaction_value(i), i;
}
/* @__NO_SIDE_EFFECTS__ */
function derived_safe_equal(e) {
	let i = /* @__PURE__ */ derived(e);
	return i.equals = safe_equals, i;
}
function destroy_derived_effects(e) {
	var i = e.effects;
	if (i !== null) {
		e.effects = null;
		for (var a = 0; a < i.length; a += 1) destroy_effect(i[a]);
	}
}
function execute_derived(e) {
	var i, a = active_effect, o = e.parent;
	if (!is_destroying_effect && o !== null && o.f & 24576) return derived_inert(), e.v;
	set_active_effect(o);
	try {
		e.f &= ~WAS_MARKED, destroy_derived_effects(e), i = update_reaction(e);
	} finally {
		set_active_effect(a);
	}
	return i;
}
function update_derived(e) {
	var i = execute_derived(e);
	if (!e.equals(i) && (e.wv = increment_write_version(), (!current_batch?.is_fork || e.deps === null) && (current_batch === null ? e.v = i : current_batch.capture(e, i, !0), e.deps === null))) {
		set_signal_status(e, CLEAN);
		return;
	}
	is_destroying_effect || (batch_values === null ? update_derived_status(e) : (effect_tracking() || current_batch?.is_fork) && batch_values.set(e, i));
}
function freeze_derived_effects(e) {
	if (e.effects !== null) for (let i of e.effects) (i.teardown || i.ac) && (i.teardown?.(), i.ac?.abort(STALE_REACTION), i.teardown = noop, i.ac = null, remove_reactions(i, 0), destroy_effect_children(i));
}
function unfreeze_derived_effects(e) {
	if (e.effects !== null) for (let i of e.effects) i.teardown && update_effect(i);
}
let eager_effects = /* @__PURE__ */ new Set();
const old_values = /* @__PURE__ */ new Map();
var eager_effects_deferred = !1;
function source(e, i) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function state(e, i) {
	let a = source(e, i);
	return push_reaction_value(a), a;
}
/* @__NO_SIDE_EFFECTS__ */
function mutable_source(e, i = !1, a = !0) {
	let o = source(e);
	return i || (o.equals = safe_equals), legacy_mode_flag && a && component_context !== null && component_context.l !== null && (component_context.l.s ??= []).push(o), o;
}
function set(e, i, a = !1) {
	return active_reaction !== null && (!untracking || active_reaction.f & 131072) && is_runes() && active_reaction.f & 4325394 && (current_sources === null || !includes.call(current_sources, e)) && state_unsafe_mutation(), internal_set(e, a ? proxy(i) : i, legacy_updates);
}
function internal_set(e, i, a = null) {
	if (!e.equals(i)) {
		old_values.set(e, is_destroying_effect ? i : e.v);
		var o = Batch.ensure();
		if (o.capture(e, i), e.f & 2) {
			let i = e;
			e.f & 2048 && execute_derived(i), batch_values === null && update_derived_status(i);
		}
		e.wv = increment_write_version(), mark_reactions(e, DIRTY, a), is_runes() && active_effect !== null && active_effect.f & 1024 && !(active_effect.f & 96) && (untracked_writes === null ? set_untracked_writes([e]) : untracked_writes.push(e)), !o.is_fork && eager_effects.size > 0 && !eager_effects_deferred && flush_eager_effects();
	}
	return i;
}
function flush_eager_effects() {
	eager_effects_deferred = !1;
	for (let e of eager_effects) e.f & 1024 && set_signal_status(e, MAYBE_DIRTY), is_dirty(e) && update_effect(e);
	eager_effects.clear();
}
function increment(e) {
	set(e, e.v + 1);
}
function mark_reactions(e, i, a) {
	var o = e.reactions;
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
function autofocus(e, i) {
	if (i) {
		let i = document.body;
		e.autofocus = !0, queue_micro_task(() => {
			document.activeElement === i && e.focus();
		});
	}
}
var listening_to_form_reset = !1;
function add_form_reset_listener() {
	listening_to_form_reset || (listening_to_form_reset = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let i of e.target.elements) i.__on_r?.();
		});
	}, { capture: !0 }));
}
function without_reactive_context(e) {
	var i = active_reaction, a = active_effect;
	set_active_reaction(null), set_active_effect(null);
	try {
		return e();
	} finally {
		set_active_reaction(i), set_active_effect(a);
	}
}
function listen_to_event_and_reset_event(e, i, a, o = a) {
	e.addEventListener(i, () => without_reactive_context(a));
	let s = e.__on_r;
	s ? e.__on_r = () => {
		s(), o(!0);
	} : e.__on_r = () => o(!0), add_form_reset_listener();
}
var is_updating_effect = !1;
let is_destroying_effect = !1;
function set_is_destroying_effect(e) {
	is_destroying_effect = e;
}
let active_reaction = null, untracking = !1;
function set_active_reaction(e) {
	active_reaction = e;
}
let active_effect = null;
function set_active_effect(e) {
	active_effect = e;
}
let current_sources = null;
function push_reaction_value(e) {
	active_reaction !== null && (current_sources === null ? current_sources = [e] : current_sources.push(e));
}
let new_deps = null, skipped_deps = 0, untracked_writes = null;
function set_untracked_writes(e) {
	untracked_writes = e;
}
let write_version = 1;
var read_version = 0;
let update_version = read_version;
function set_update_version(e) {
	update_version = e;
}
function increment_write_version() {
	return ++write_version;
}
function is_dirty(e) {
	var i = e.f;
	if (i & 2048) return !0;
	if (i & 2 && (e.f &= ~WAS_MARKED), i & 4096) {
		for (var a = e.deps, o = a.length, s = 0; s < o; s++) {
			var c = a[s];
			if (is_dirty(c) && update_derived(c), c.wv > e.wv) return !0;
		}
		i & 512 && batch_values === null && set_signal_status(e, CLEAN);
	}
	return !1;
}
function schedule_possible_effect_self_invalidation(e, i, a = !0) {
	var o = e.reactions;
	if (o !== null && !(current_sources !== null && includes.call(current_sources, e))) for (var s = 0; s < o.length; s++) {
		var l = o[s];
		l.f & 2 ? schedule_possible_effect_self_invalidation(l, i, !1) : i === l && (a ? set_signal_status(l, DIRTY) : l.f & 1024 && set_signal_status(l, MAYBE_DIRTY), schedule_effect(l));
	}
}
function update_reaction(e) {
	var i = new_deps, a = skipped_deps, o = untracked_writes, s = active_reaction, c = current_sources, l = component_context, u = untracking, d = update_version, f = e.f;
	new_deps = null, skipped_deps = 0, untracked_writes = null, active_reaction = f & 96 ? null : e, current_sources = null, set_component_context(e.ctx), untracking = !1, update_version = ++read_version, e.ac !== null && (without_reactive_context(() => {
		e.ac.abort(STALE_REACTION);
	}), e.ac = null);
	try {
		e.f |= REACTION_IS_UPDATING;
		var p = e.fn, m = p();
		e.f |= REACTION_RAN;
		var h = e.deps, g = current_batch?.is_fork;
		if (new_deps !== null) {
			var _;
			if (g || remove_reactions(e, skipped_deps), h !== null && skipped_deps > 0) for (h.length = skipped_deps + new_deps.length, _ = 0; _ < new_deps.length; _++) h[skipped_deps + _] = new_deps[_];
			else e.deps = h = new_deps;
			if (effect_tracking() && e.f & 512) for (_ = skipped_deps; _ < h.length; _++) (h[_].reactions ??= []).push(e);
		} else !g && h !== null && skipped_deps < h.length && (remove_reactions(e, skipped_deps), h.length = skipped_deps);
		if (is_runes() && untracked_writes !== null && !untracking && h !== null && !(e.f & 6146)) for (_ = 0; _ < untracked_writes.length; _++) schedule_possible_effect_self_invalidation(untracked_writes[_], e);
		if (s !== null && s !== e) {
			if (read_version++, s.deps !== null) for (let e = 0; e < a; e += 1) s.deps[e].rv = read_version;
			if (i !== null) for (let e of i) e.rv = read_version;
			untracked_writes !== null && (o === null ? o = untracked_writes : o.push(...untracked_writes));
		}
		return e.f & 8388608 && (e.f ^= ERROR_VALUE), m;
	} catch (e) {
		return handle_error(e);
	} finally {
		e.f ^= REACTION_IS_UPDATING, new_deps = i, skipped_deps = a, untracked_writes = o, active_reaction = s, current_sources = c, set_component_context(l), untracking = u, update_version = d;
	}
}
function remove_reaction(e, i) {
	let a = i.reactions;
	if (a !== null) {
		var o = index_of.call(a, e);
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
function remove_reactions(e, i) {
	var a = e.deps;
	if (a !== null) for (var o = i; o < a.length; o++) remove_reaction(e, a[o]);
}
function update_effect(e) {
	var i = e.f;
	if (!(i & 16384)) {
		set_signal_status(e, CLEAN);
		var a = active_effect, o = is_updating_effect;
		active_effect = e, is_updating_effect = !0;
		try {
			i & 16777232 ? destroy_block_effect_children(e) : destroy_effect_children(e), execute_effect_teardown(e);
			var s = update_reaction(e);
			e.teardown = typeof s == "function" ? s : null, e.wv = write_version;
		} finally {
			is_updating_effect = o, active_effect = a;
		}
	}
}
async function tick() {
	await Promise.resolve(), flushSync();
}
function get$1(e) {
	var i = (e.f & 2) != 0;
	if (null?.add(e), active_reaction !== null && !untracking && !(active_effect !== null && active_effect.f & 16384) && (current_sources === null || !includes.call(current_sources, e))) {
		var a = active_reaction.deps;
		if (active_reaction.f & 2097152) e.rv < read_version && (e.rv = read_version, new_deps === null && a !== null && a[skipped_deps] === e ? skipped_deps++ : new_deps === null ? new_deps = [e] : new_deps.push(e));
		else {
			(active_reaction.deps ??= []).push(e);
			var o = e.reactions;
			o === null ? e.reactions = [active_reaction] : includes.call(o, active_reaction) || o.push(active_reaction);
		}
	}
	if (is_destroying_effect && old_values.has(e)) return old_values.get(e);
	if (i) {
		var s = e;
		if (is_destroying_effect) {
			var l = s.v;
			return (!(s.f & 1024) && s.reactions !== null || depends_on_old_values(s)) && (l = execute_derived(s)), old_values.set(s, l), l;
		}
		var u = (s.f & 512) == 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & 512) != 0), d = (s.f & REACTION_RAN) === 0;
		is_dirty(s) && (u && (s.f |= 512), update_derived(s)), u && !d && (unfreeze_derived_effects(s), reconnect(s));
	}
	if (batch_values?.has(e)) return batch_values.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function reconnect(e) {
	if (e.f |= 512, e.deps !== null) for (let i of e.deps) (i.reactions ??= []).push(e), i.f & 2 && !(i.f & 512) && (unfreeze_derived_effects(i), reconnect(i));
}
function depends_on_old_values(e) {
	if (e.v === UNINITIALIZED) return !0;
	if (e.deps === null) return !1;
	for (let i of e.deps) if (old_values.has(i) || i.f & 2 && depends_on_old_values(i)) return !0;
	return !1;
}
function untrack(e) {
	var i = untracking;
	try {
		return untracking = !0, e();
	} finally {
		untracking = i;
	}
}
function deep_read_state(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (STATE_SYMBOL in e) deep_read(e);
		else if (!Array.isArray(e)) for (let i in e) {
			let a = e[i];
			typeof a == "object" && a && STATE_SYMBOL in a && deep_read(a);
		}
	}
}
function deep_read(e, i = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !i.has(e)) {
		for (let a in i.add(e), e instanceof Date && e.getTime(), e) try {
			deep_read(e[a], i);
		} catch {}
		let a = get_prototype_of(e);
		if (a !== Object.prototype && a !== Array.prototype && a !== Map.prototype && a !== Set.prototype && a !== Date.prototype) {
			let i = get_descriptors(a);
			for (let a in i) {
				let o = i[a].get;
				if (o) try {
					o.call(e);
				} catch {}
			}
		}
	}
}
function validate_effect(e) {
	active_effect === null && (active_reaction === null && effect_orphan(e), effect_in_unowned_derived()), is_destroying_effect && effect_in_teardown(e);
}
function push_effect(e, i) {
	var a = i.last;
	a === null ? i.last = i.first = e : (a.next = e, e.prev = a, i.last = e);
}
function create_effect(e, i) {
	var a = active_effect;
	a !== null && a.f & 8192 && (e |= INERT);
	var o = {
		ctx: component_context,
		deps: null,
		nodes: null,
		f: e | 2560,
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
	if (e & 4) collected_effects === null ? Batch.ensure().schedule(o) : collected_effects.push(o);
	else if (i !== null) {
		try {
			update_effect(o);
		} catch (e) {
			throw destroy_effect(o), e;
		}
		s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && !(s.f & 524288) && (s = s.first, e & 16 && e & 65536 && s !== null && (s.f |= EFFECT_TRANSPARENT));
	}
	if (s !== null && (s.parent = a, a !== null && push_effect(s, a), active_reaction !== null && active_reaction.f & 2 && !(e & 64))) {
		var c = active_reaction;
		(c.effects ??= []).push(s);
	}
	return o;
}
function effect_tracking() {
	return active_reaction !== null && !untracking;
}
function teardown(e) {
	let i = create_effect(8, null);
	return set_signal_status(i, CLEAN), i.teardown = e, i;
}
function user_effect(e) {
	validate_effect("$effect");
	var i = active_effect.f;
	if (!active_reaction && i & 32 && !(i & 32768)) {
		var a = component_context;
		(a.e ??= []).push(e);
	} else return create_user_effect(e);
}
function create_user_effect(e) {
	return create_effect(4 | USER_EFFECT, e);
}
function user_pre_effect(e) {
	return validate_effect("$effect.pre"), create_effect(8 | USER_EFFECT, e);
}
function effect_root(e) {
	Batch.ensure();
	let i = create_effect(64 | EFFECT_PRESERVED, e);
	return () => {
		destroy_effect(i);
	};
}
function component_root(e) {
	Batch.ensure();
	let i = create_effect(64 | EFFECT_PRESERVED, e);
	return (e = {}) => new Promise((a) => {
		e.outro ? pause_effect(i, () => {
			destroy_effect(i), a(void 0);
		}) : (destroy_effect(i), a(void 0));
	});
}
function effect(e) {
	return create_effect(4, e);
}
function async_effect(e) {
	return create_effect(4194304 | EFFECT_PRESERVED, e);
}
function render_effect(e, i = 0) {
	return create_effect(8 | i, e);
}
function template_effect(e, i = [], a = [], o = []) {
	flatten(o, i, a, (i) => {
		create_effect(8, () => e(...i.map(get$1)));
	});
}
function block(e, i = 0) {
	return create_effect(16 | i, e);
}
function managed(e, i = 0) {
	return create_effect(16777216 | i, e);
}
function branch(e) {
	return create_effect(32 | EFFECT_PRESERVED, e);
}
function execute_effect_teardown(e) {
	var i = e.teardown;
	if (i !== null) {
		let e = is_destroying_effect, a = active_reaction;
		set_is_destroying_effect(!0), set_active_reaction(null);
		try {
			i.call(null);
		} finally {
			set_is_destroying_effect(e), set_active_reaction(a);
		}
	}
}
function destroy_effect_children(e, i = !1) {
	var a = e.first;
	for (e.first = e.last = null; a !== null;) {
		let e = a.ac;
		e !== null && without_reactive_context(() => {
			e.abort(STALE_REACTION);
		});
		var o = a.next;
		a.f & 64 ? a.parent = null : destroy_effect(a, i), a = o;
	}
}
function destroy_block_effect_children(e) {
	for (var i = e.first; i !== null;) {
		var a = i.next;
		i.f & 32 || destroy_effect(i), i = a;
	}
}
function destroy_effect(e, i = !0) {
	var a = !1;
	(i || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (remove_effect_dom(e.nodes.start, e.nodes.end), a = !0), set_signal_status(e, DESTROYING), destroy_effect_children(e, i && !a), remove_reactions(e, 0);
	var o = e.nodes && e.nodes.t;
	if (o !== null) for (let e of o) e.stop();
	execute_effect_teardown(e), e.f ^= DESTROYING, e.f |= 16384;
	var s = e.parent;
	s !== null && s.first !== null && unlink_effect(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function remove_effect_dom(e, i) {
	for (; e !== null;) {
		var a = e === i ? null : /* @__PURE__ */ get_next_sibling(e);
		e.remove(), e = a;
	}
}
function unlink_effect(e) {
	var i = e.parent, a = e.prev, o = e.next;
	a !== null && (a.next = o), o !== null && (o.prev = a), i !== null && (i.first === e && (i.first = o), i.last === e && (i.last = a));
}
function pause_effect(e, i, a = !0) {
	var o = [];
	pause_children(e, o, !0);
	var s = () => {
		a && destroy_effect(e), i && i();
	}, c = o.length;
	if (c > 0) {
		var l = () => --c || s();
		for (var u of o) u.out(l);
	} else s();
}
function pause_children(e, i, a) {
	if (!(e.f & 8192)) {
		e.f ^= INERT;
		var o = e.nodes && e.nodes.t;
		if (o !== null) for (let e of o) (e.is_global || a) && i.push(e);
		for (var s = e.first; s !== null;) {
			var c = s.next;
			if (!(s.f & 64)) {
				var l = (s.f & 65536) != 0 || (s.f & 32) != 0 && (e.f & 16) != 0;
				pause_children(s, i, l ? a : !1);
			}
			s = c;
		}
	}
}
function resume_effect(e) {
	resume_children(e, !0);
}
function resume_children(e, i) {
	if (e.f & 8192) {
		e.f ^= INERT, e.f & 1024 || (set_signal_status(e, DIRTY), Batch.ensure().schedule(e));
		for (var a = e.first; a !== null;) {
			var o = a.next, s = (a.f & 65536) != 0 || (a.f & 32) != 0;
			resume_children(a, s ? i : !1), a = o;
		}
		var c = e.nodes && e.nodes.t;
		if (c !== null) for (let e of c) (e.is_global || i) && e.in();
	}
}
function move_effect(e, i) {
	if (e.nodes) for (var a = e.nodes.start, o = e.nodes.end; a !== null;) {
		var s = a === o ? null : /* @__PURE__ */ get_next_sibling(a);
		i.append(a), a = s;
	}
}
var defaultAppState = { version: "" };
const appStore = ((e) => {
	let { subscribe: i, set: a, update: o } = writable({
		...defaultAppState,
		...e
	});
	return {
		subscribe: i,
		init: (e) => a(e),
		updateVersion: (e) => o((i) => ({
			...i,
			version: e
		})),
		resetVersion: () => o((e) => ({
			...e,
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
const clientStore = ((e) => {
	let { subscribe: i, set: a, update: o } = writable({
		...defaultClientState,
		...e
	});
	return {
		subscribe: i,
		init: (e) => a(e),
		updateName: (e) => o((i) => ({
			...i,
			name: e
		})),
		resetName: () => o((e) => ({
			...e,
			name: defaultClientState.name
		})),
		updateLoggedIn: (e) => o((i) => ({
			...i,
			logged_in: e
		})),
		resetLoggedIn: () => o((e) => ({
			...e,
			logged_in: defaultClientState.logged_in
		})),
		updateRank: (e) => o((i) => ({
			...i,
			rank: e
		})),
		resetRank: () => o((e) => ({
			...e,
			rank: defaultClientState.rank
		}))
	};
})();
var defaultPageState = { csrf: "" };
const pageStore = ((e) => {
	let { subscribe: i, set: a, update: o } = writable({
		...defaultPageState,
		...e
	});
	return {
		subscribe: i,
		init: (e) => a(e),
		updateCSRF: (e) => o((i) => ({
			...i,
			csrf: e
		})),
		resetCSRF: () => o((e) => ({
			...e,
			csrf: defaultPageState.csrf
		}))
	};
})();
var defaultSocketState = { connected: !0 };
const socketStore = ((e) => {
	let { subscribe: i, set: a, update: o } = writable({
		...defaultSocketState,
		...e
	});
	return {
		subscribe: i,
		init: (e) => a(e),
		updateConnected: (e) => o((i) => ({
			...i,
			connected: e
		})),
		resetConnected: () => o((e) => ({
			...e,
			connected: defaultSocketState.connected
		}))
	};
})();
var initClientStore = () => (clientStore.init({ ...window.CLIENT }), clientStore.subscribe((e) => {
	window.CLIENT = e;
})), initPageStore = () => {
	let e = document.getElementsByName("_csrf");
	if (!e) throw Error("no csrf collection found");
	if (e.length < 1) throw Error("no csrf elements found");
	let i = e.item(0);
	if (!i) throw Error("no csrf element found");
	let a = i.value;
	if (!a) throw Error("no csrf value found");
	pageStore.init({ csrf: a });
}, initAppStore = () => (appStore.init({ version: window.VERSION }), appStore.subscribe((e) => {
	window.VERSION = e.version;
})), initSocketStore = () => {
	socketStore.init(socketClient), socketClient.on("connect", () => socketStore.updateConnected(socketClient.connected)), socketClient.on("disconnect", () => socketStore.updateConnected(socketClient.connected));
};
const initStores = () => {
	let e = initClientStore(), i = initAppStore();
	return initPageStore(), initSocketStore(), () => {
		e(), i();
	};
};
var colorInfo = "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", legacyChatNotification = (e, i) => {
	let a = document.getElementById("messagebuffer");
	if (!a) return null;
	let o = document.createElement("div");
	return o.className = "server-msg-reconnect", o.style = `border: 1px ${i}`, o.textContent = e, a.appendChild(o), o;
};
const legacyChatInfo = (e) => legacyChatNotification(e, colorInfo), injectMainStylesheet = async () => new Promise((e, i) => {
	let a = new URL("dist/index.css", window.BASE_URL), o = document.createElement("link");
	o.rel = "stylesheet", o.type = "text/css", o.href = a.toString(), o.onload = () => requestAnimationFrame(() => e()), o.onerror = () => requestAnimationFrame(() => i()), document.head.appendChild(o);
}), removeLegacyStylesheets = () => {
	for (let e of [
		"//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css",
		"/css/sticky-footer-navbar.css",
		"/css/videojs-resolution-switcher.css",
		"/css/video-js.css",
		"/css/cytube.css"
	]) {
		let i = document.querySelector(`link[href="${e}"]`);
		if (!i) return;
		i.remove();
	}
	document.getElementById("usertheme")?.remove();
};
var setChannelJS = (e) => {
	window.CHANNEL.js = e;
	let i = document.querySelector("#cs-jstext");
	if (i && (i.value = e), window.USEROPTS.ignore_channeljs) return;
	let a = document.createElement("script");
	a.id = "chanjs", a.type = "text/javascript", a.textContent = e, document.body.append(a);
}, setChannelCSS = (e) => {
	window.CHANNEL.css = e;
	let i = document.querySelector("#cs-csstext");
	if (i && (i.value = e), window.USEROPTS.ignore_channelcss) return;
	let a = document.createElement("style");
	a.id = "chancss", a.textContent = e, document.head.append(a);
}, overrideChannelJS = (e) => {
	let i = document.querySelector("#chanjs");
	if (!i) {
		setChannelJS(e);
		return;
	}
	i.textContent !== e && (i.remove(), setChannelJS(e));
}, overrideChannelCSS = (e) => {
	let i = document.querySelector("#chancss");
	if (!i) {
		setChannelCSS(e);
		return;
	}
	i.textContent !== e && (i.remove(), setChannelCSS(e));
}, overrideCallbacks = () => {
	window.Callbacks.channelCSSJS = ({ css: e, js: i }) => {
		e && overrideChannelCSS(e), i && overrideChannelJS(i);
	};
}, overrideFavicon = () => {
	let e = new URL("dist/favicon.ico", window.BASE_URL), i = document.createElement("link");
	i.href = e.toString(), i.type = "image/x-icon", i.rel = "shortcut icon", document.head.append(i);
}, overrideStyles = async () => {
	let e = legacyChatInfo("Loading styles...");
	await injectMainStylesheet(), removeLegacyStylesheets(), e && e.remove();
};
const initOverrides = async () => {
	overrideCallbacks(), overrideFavicon(), await overrideStyles();
};
function createAttachmentKey() {
	return Symbol("@attach");
}
function is_capture_event(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
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
function can_delegate_event(e) {
	return DELEGATED_EVENTS.includes(e);
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
function normalize_attribute(e) {
	return e = e.toLowerCase(), ATTRIBUTE_ALIASES[e] ?? e;
}
[...DOM_BOOLEAN_ATTRIBUTES];
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(e) {
	return PASSIVE_EVENTS.includes(e);
}
const event_symbol = Symbol("events"), all_registered_events = /* @__PURE__ */ new Set(), root_event_handles = /* @__PURE__ */ new Set();
function replay_events(e) {
	if (!hydrating) return;
	e.removeAttribute("onload"), e.removeAttribute("onerror");
	let i = e.__e;
	i !== void 0 && (e.__e = void 0, queueMicrotask(() => {
		e.isConnected && e.dispatchEvent(i);
	}));
}
function create_event(e, i, a, o = {}) {
	function s(e) {
		if (o.capture || handle_event_propagation.call(i, e), !e.cancelBubble) return without_reactive_context(() => a?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? queue_micro_task(() => {
		i.addEventListener(e, s, o);
	}) : i.addEventListener(e, s, o), s;
}
function on$1(e, i, a, o = {}) {
	var s = create_event(i, e, a, o);
	return () => {
		e.removeEventListener(i, s, o);
	};
}
function event(e, i, a, o, s) {
	var c = {
		capture: o,
		passive: s
	}, l = create_event(e, i, a, c);
	(i === document.body || i === window || i === document || i instanceof HTMLMediaElement) && teardown(() => {
		i.removeEventListener(e, l, c);
	});
}
function delegated(e, i, a) {
	(i[event_symbol] ??= {})[e] = a;
}
function delegate(e) {
	for (var i = 0; i < e.length; i++) all_registered_events.add(e[i]);
	for (var a of root_event_handles) a(e);
}
var last_propagated_event = null;
function handle_event_propagation(e) {
	var i = this, a = i.ownerDocument, o = e.type, s = e.composedPath?.() || [], c = s[0] || e.target;
	last_propagated_event = e;
	var l = 0, d = last_propagated_event === e && e[event_symbol];
	if (d) {
		var f = s.indexOf(d);
		if (f !== -1 && (i === document || i === window)) {
			e[event_symbol] = i;
			return;
		}
		var p = s.indexOf(i);
		if (p === -1) return;
		f <= p && (l = f);
	}
	if (c = s[l] || e.target, c !== i) {
		define_property(e, "currentTarget", {
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
					y != null && (!c.disabled || e.target === c) && y.call(c, e);
				} catch (e) {
					g ? _.push(e) : g = e;
				}
				if (e.cancelBubble || v === i || v === null) break;
				c = v;
			}
			if (g) {
				for (let e of _) queueMicrotask(() => {
					throw e;
				});
				throw g;
			}
		} finally {
			e[event_symbol] = i, delete e.currentTarget, set_active_reaction(m), set_active_effect(h);
		}
	}
}
var policy = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function create_trusted_html(e) {
	return policy?.createHTML(e) ?? e;
}
function create_fragment_from_html(e) {
	var i = create_element("template");
	return i.innerHTML = create_trusted_html(e.replaceAll("<!>", "<!---->")), i.content;
}
function assign_nodes(e, i) {
	var a = active_effect;
	a.nodes === null && (a.nodes = {
		start: e,
		end: i,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function from_html(e, i) {
	var a = (i & 1) != 0, o = (i & 2) != 0, s, c = !e.startsWith("<!>");
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		s === void 0 && (s = create_fragment_from_html(c ? e : "<!>" + e), a || (s = /* @__PURE__ */ get_first_child(s)));
		var i = o || is_firefox ? document.importNode(s, !0) : s.cloneNode(!0);
		if (a) {
			var l = /* @__PURE__ */ get_first_child(i), u = i.lastChild;
			assign_nodes(l, u);
		} else assign_nodes(i, i);
		return i;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function from_namespace(e, i, a = "svg") {
	var o = !e.startsWith("<!>"), s = (i & 1) != 0, c = `<${a}>${o ? e : "<!>" + e}</${a}>`, l;
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		if (!l) {
			var e = /* @__PURE__ */ get_first_child(create_fragment_from_html(c));
			if (s) for (l = document.createDocumentFragment(); /* @__PURE__ */ get_first_child(e);) l.appendChild(/* @__PURE__ */ get_first_child(e));
			else l = /* @__PURE__ */ get_first_child(e);
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
function from_svg(e, i) {
	return /* @__PURE__ */ from_namespace(e, i, "svg");
}
function text(e = "") {
	if (!hydrating) {
		var i = create_text(e + "");
		return assign_nodes(i, i), i;
	}
	var a = hydrate_node;
	return a.nodeType === 3 ? merge_text_nodes(a) : (a.before(a = create_text()), set_hydrate_node(a)), assign_nodes(a, a), a;
}
function comment() {
	if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
	var e = document.createDocumentFragment(), i = document.createComment(""), a = create_text();
	return e.append(i, a), assign_nodes(i, a), e;
}
function append(e, i) {
	if (hydrating) {
		var a = active_effect;
		(!(a.f & 32768) || a.nodes.end === null) && (a.nodes.end = hydrate_node), hydrate_next();
		return;
	}
	e !== null && e.before(i);
}
function props_id() {
	if (hydrating && hydrate_node && hydrate_node.nodeType === 8 && hydrate_node.textContent?.startsWith("$")) {
		let e = hydrate_node.textContent.substring(1);
		return hydrate_next(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
let should_intro = !0;
function set_text(e, i) {
	var a = i == null ? "" : typeof i == "object" ? `${i}` : i;
	a !== (e.__t ??= e.nodeValue) && (e.__t = a, e.nodeValue = `${a}`);
}
function mount(e, i) {
	return _mount(e, i);
}
var listeners = /* @__PURE__ */ new Map();
function _mount(e, { target: i, anchor: a, props: o = {}, events: s, context: c, intro: u = !0, transformError: d }) {
	init_operations();
	var f = void 0, p = component_root(() => {
		var p = a ?? i.appendChild(create_text());
		boundary(p, { pending: () => {} }, (i) => {
			push({});
			var a = component_context;
			if (c && (a.c = c), s && (o.$$events = s), hydrating && assign_nodes(i, null), should_intro = u, f = e(i, o) || {}, should_intro = !0, hydrating && (active_effect.nodes.end = hydrate_node, hydrate_node === null || hydrate_node.nodeType !== 8 || hydrate_node.data !== "]")) throw hydration_mismatch(), HYDRATION_ERROR;
			pop();
		}, d);
		var m = /* @__PURE__ */ new Set(), h = (e) => {
			for (var a = 0; a < e.length; a++) {
				var o = e[a];
				if (!m.has(o)) {
					m.add(o);
					var s = is_passive_event(o);
					for (let e of [i, document]) {
						var c = listeners.get(e);
						c === void 0 && (c = /* @__PURE__ */ new Map(), listeners.set(e, c));
						var l = c.get(o);
						l === void 0 ? (e.addEventListener(o, handle_event_propagation, { passive: s }), c.set(o, 1)) : c.set(o, l + 1);
					}
				}
			}
		};
		return h(array_from(all_registered_events)), root_event_handles.add(h), () => {
			for (var e of m) for (let a of [i, document]) {
				var o = listeners.get(a), s = o.get(e);
				--s == 0 ? (a.removeEventListener(e, handle_event_propagation), o.delete(e), o.size === 0 && listeners.delete(a)) : o.set(e, s);
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
	constructor(e, i = !0) {
		this.anchor = e, this.#i = i;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var i = this.#e.get(e), a = this.#t.get(i);
			if (a) resume_effect(a), this.#r.delete(i);
			else {
				var o = this.#n.get(i);
				o && (this.#t.set(i, o.effect), this.#n.delete(i), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), a = o.effect);
			}
			for (let [i, a] of this.#e) {
				if (this.#e.delete(i), i === e) break;
				let o = this.#n.get(a);
				o && (destroy_effect(o.effect), this.#n.delete(a));
			}
			for (let [e, o] of this.#t) {
				if (e === i || this.#r.has(e)) continue;
				let s = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var i = document.createDocumentFragment();
						move_effect(o, i), i.append(create_text()), this.#n.set(e, {
							effect: o,
							fragment: i
						});
					} else destroy_effect(o);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !a ? (this.#r.add(e), pause_effect(o, s, !1)) : s();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let i = Array.from(this.#e.values());
		for (let [e, a] of this.#n) i.includes(e) || (destroy_effect(a.effect), this.#n.delete(e));
	};
	ensure(e, i) {
		var a = current_batch, o = should_defer_append();
		if (i && !this.#t.has(e) && !this.#n.has(e)) if (o) {
			var s = document.createDocumentFragment(), c = create_text();
			s.append(c), this.#n.set(e, {
				effect: branch(() => i(c)),
				fragment: s
			});
		} else this.#t.set(e, branch(() => i(this.anchor)));
		if (this.#e.set(a, e), o) {
			for (let [i, o] of this.#t) i === e ? a.unskip_effect(o) : a.skip_effect(o);
			for (let [i, o] of this.#n) i === e ? a.unskip_effect(o.effect) : a.skip_effect(o.effect);
			a.oncommit(this.#a), a.ondiscard(this.#o);
		} else hydrating && (this.anchor = hydrate_node), this.#a(a);
	}
};
function if_block(e, i, a = !1) {
	var o;
	hydrating && (o = hydrate_node, hydrate_next());
	var s = new BranchManager(e), c = a ? EFFECT_TRANSPARENT : 0;
	function l(e, i) {
		if (hydrating) {
			var a = read_hydration_instruction(o);
			if (e !== parseInt(a.substring(1))) {
				var c = skip_nodes();
				set_hydrate_node(c), s.anchor = c, set_hydrating(!1), s.ensure(e, i), set_hydrating(!0);
				return;
			}
		}
		s.ensure(e, i);
	}
	block(() => {
		var e = !1;
		i((i, a = 0) => {
			e = !0, l(a, i);
		}), e || l(-1, null);
	}, c);
}
function snippet(e, i, ...a) {
	var o = new BranchManager(e);
	block(() => {
		let e = i() ?? null;
		o.ensure(e, e && ((i) => e(i, ...a)));
	}, EFFECT_TRANSPARENT);
}
function component(e, i, a) {
	var o;
	hydrating && (o = hydrate_node, hydrate_next());
	var s = new BranchManager(e);
	block(() => {
		var e = i() ?? null;
		if (hydrating && read_hydration_instruction(o) === "[" != (e !== null)) {
			var c = skip_nodes();
			set_hydrate_node(c), s.anchor = c, set_hydrating(!1), s.ensure(e, e && ((i) => a(i, e))), set_hydrating(!0);
			return;
		}
		s.ensure(e, e && ((i) => a(i, e)));
	}, EFFECT_TRANSPARENT);
}
var now = () => performance.now();
const raf = {
	tick: (e) => requestAnimationFrame(e),
	now: () => now(),
	tasks: /* @__PURE__ */ new Set()
};
function run_tasks() {
	let e = raf.now();
	raf.tasks.forEach((i) => {
		i.c(e) || (raf.tasks.delete(i), i.f());
	}), raf.tasks.size !== 0 && raf.tick(run_tasks);
}
function loop(e) {
	let i;
	return raf.tasks.size === 0 && raf.tick(run_tasks), {
		promise: new Promise((a) => {
			raf.tasks.add(i = {
				c: e,
				f: a
			});
		}),
		abort() {
			raf.tasks.delete(i);
		}
	};
}
function dispatch_event(e, i) {
	without_reactive_context(() => {
		e.dispatchEvent(new CustomEvent(i));
	});
}
function css_property_to_camelcase(e) {
	if (e === "float") return "cssFloat";
	if (e === "offset") return "cssOffset";
	if (e.startsWith("--")) return e;
	let i = e.split("-");
	return i.length === 1 ? i[0] : i[0] + i.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
function css_to_keyframe(e) {
	let i = {}, a = e.split(";");
	for (let e of a) {
		let [a, o] = e.split(":");
		if (!a || o === void 0) break;
		let s = css_property_to_camelcase(a.trim());
		i[s] = o.trim();
	}
	return i;
}
var linear$1 = (e) => e;
function transition(e, i, a, o) {
	var s = (e & 1) != 0, c = (e & 2) != 0, l = s && c, u = (e & 4) != 0, d = l ? "both" : s ? "in" : "out", f, p = i.inert, m = i.style.overflow, h, g;
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
		out(e) {
			if (!c) {
				e?.(), f = void 0;
				return;
			}
			i.inert = !0, g = animate(i, _(), h, 0, () => {
				dispatch_event(i, "outrostart");
			}, () => {
				dispatch_event(i, "outroend"), e?.();
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
function animate(e, i, a, o, s, c) {
	var l = o === 1;
	if (is_function(i)) {
		var u, d = !1;
		return queue_micro_task(() => {
			d || (u = animate(e, i({ direction: l ? "in" : "out" }), a, o, s, c));
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
		abort: noop,
		deactivate: noop,
		reset: noop,
		t: () => o
	};
	let { delay: f = 0, css: p, tick: m, easing: h = linear$1 } = i;
	var g = [];
	if (l && a === void 0 && (m && m(0, 1), p)) {
		var y = css_to_keyframe(p(0, 1));
		g.push(y, y);
	}
	var b = () => 1 - o, x = e.animate(g, {
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
			g && (e.style.overflow = "hidden"), b = () => {
				var e = x.currentTime;
				return l + u * h(e / d);
			}, m && loop(() => {
				if (x.playState !== "running") return !1;
				var e = b();
				return m(e, 1 - e), !0;
			});
		}
		x = e.animate(f, {
			duration: d,
			fill: "forwards"
		}), x.onfinish = () => {
			b = () => o, m?.(o, 1 - o), c();
		};
	}, {
		abort: () => {
			x && (x.cancel(), x.effect = null, x.onfinish = noop);
		},
		deactivate: () => {
			c = noop;
		},
		reset: () => {
			o === 0 && m?.(1, 0);
		},
		t: () => b()
	};
}
function attach(e, i) {
	var a = void 0, o;
	managed(() => {
		a !== (a = i()) && (o &&= (destroy_effect(o), null), a && (o = branch(() => {
			effect(() => a(e));
		})));
	});
}
function r$1(e) {
	var i, a, o = "";
	if (typeof e == "string" || typeof e == "number") o += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var s = e.length;
		for (i = 0; i < s; i++) e[i] && (a = r$1(e[i])) && (o && (o += " "), o += a);
	} else for (a in e) e[a] && (o && (o += " "), o += a);
	return o;
}
function clsx() {
	for (var e, i, a = 0, o = "", s = arguments.length; a < s; a++) (e = arguments[a]) && (i = r$1(e)) && (o && (o += " "), o += i);
	return o;
}
function clsx$1(e) {
	return typeof e == "object" ? clsx(e) : e ?? "";
}
var whitespace = [..." 	\n\r\f\xA0\v﻿"];
function to_class(e, i, a) {
	var o = e == null ? "" : "" + e;
	if (i && (o = o ? o + " " + i : i), a) {
		for (var s of Object.keys(a)) if (a[s]) o = o ? o + " " + s : s;
		else if (o.length) for (var c = s.length, l = 0; (l = o.indexOf(s, l)) >= 0;) {
			var u = l + c;
			(l === 0 || whitespace.includes(o[l - 1])) && (u === o.length || whitespace.includes(o[u])) ? o = (l === 0 ? "" : o.substring(0, l)) + o.substring(u + 1) : l = u;
		}
	}
	return o === "" ? null : o;
}
function append_styles(e, i = !1) {
	var a = i ? " !important;" : ";", o = "";
	for (var s of Object.keys(e)) {
		var c = e[s];
		c != null && c !== "" && (o += " " + s + ": " + c + a);
	}
	return o;
}
function to_css_name(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function to_style(e, i) {
	if (i) {
		var a = "", o, s;
		if (Array.isArray(i) ? (o = i[0], s = i[1]) : o = i, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var c = !1, l = 0, u = !1, d = [];
			o && d.push(...Object.keys(o).map(to_css_name)), s && d.push(...Object.keys(s).map(to_css_name));
			var f = 0, p = -1;
			let i = e.length;
			for (var m = 0; m < i; m++) {
				var h = e[m];
				if (u ? h === "/" && e[m - 1] === "*" && (u = !1) : c ? c === h && (c = !1) : h === "/" && e[m + 1] === "*" ? u = !0 : h === "\"" || h === "'" ? c = h : h === "(" ? l++ : h === ")" && l--, !u && c === !1 && l === 0) {
					if (h === ":" && p === -1) p = m;
					else if (h === ";" || m === i - 1) {
						if (p !== -1) {
							var g = to_css_name(e.substring(f, p).trim());
							if (!d.includes(g)) {
								h !== ";" && m++;
								var _ = e.substring(f, m).trim();
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
	return e == null ? null : String(e);
}
function set_class(e, i, a, o, s, c) {
	var l = e.__className;
	if (hydrating || l !== a || l === void 0) {
		var u = to_class(a, o, c);
		(!hydrating || u !== e.getAttribute("class")) && (u == null ? e.removeAttribute("class") : i ? e.className = u : e.setAttribute("class", u)), e.__className = a;
	} else if (c && s !== c) for (var d in c) {
		var f = !!c[d];
		(s == null || f !== !!s[d]) && e.classList.toggle(d, f);
	}
	return c;
}
function update_styles(e, i = {}, a, o) {
	for (var s in a) {
		var c = a[s];
		i[s] !== c && (a[s] == null ? e.style.removeProperty(s) : e.style.setProperty(s, c, o));
	}
}
function set_style(e, i, a, o) {
	var s = e.__style;
	if (hydrating || s !== i) {
		var c = to_style(i, o);
		(!hydrating || c !== e.getAttribute("style")) && (c == null ? e.removeAttribute("style") : e.style.cssText = c), e.__style = i;
	} else o && (Array.isArray(o) ? (update_styles(e, a?.[0], o[0]), update_styles(e, a?.[1], o[1], "important")) : update_styles(e, a, o));
	return o;
}
function select_option(e, i, a = !1) {
	if (e.multiple) {
		if (i == null) return;
		if (!is_array(i)) return select_multiple_invalid_value();
		for (var s of e.options) s.selected = i.includes(get_option_value(s));
		return;
	}
	for (s of e.options) if (is$1(get_option_value(s), i)) {
		s.selected = !0;
		return;
	}
	(!a || i !== void 0) && (e.selectedIndex = -1);
}
function init_select(e) {
	var i = new MutationObserver(() => {
		select_option(e, e.__value);
	});
	i.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), teardown(() => {
		i.disconnect();
	});
}
function get_option_value(e) {
	return "__value" in e ? e.__value : e.value;
}
const CLASS = Symbol("class"), STYLE = Symbol("style");
var IS_CUSTOM_ELEMENT = Symbol("is custom element"), IS_HTML = Symbol("is html"), LINK_TAG = IS_XHTML ? "link" : "LINK", INPUT_TAG = IS_XHTML ? "input" : "INPUT", OPTION_TAG = IS_XHTML ? "option" : "OPTION", SELECT_TAG = IS_XHTML ? "select" : "SELECT";
function remove_input_defaults(e) {
	if (hydrating) {
		var i = !1, a = () => {
			if (!i) {
				if (i = !0, e.hasAttribute("value")) {
					var a = e.value;
					set_attribute(e, "value", null), e.value = a;
				}
				if (e.hasAttribute("checked")) {
					var o = e.checked;
					set_attribute(e, "checked", null), e.checked = o;
				}
			}
		};
		e.__on_r = a, queue_micro_task(a), add_form_reset_listener();
	}
}
function set_selected(e, i) {
	i ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function set_attribute(e, i, a, o) {
	var s = get_attributes(e);
	hydrating && (s[i] = e.getAttribute(i), i === "src" || i === "srcset" || i === "href" && e.nodeName === LINK_TAG) || s[i] !== (s[i] = a) && (i === "loading" && (e[LOADING_ATTR_SYMBOL] = a), a == null ? e.removeAttribute(i) : typeof a != "string" && get_setters(e).includes(i) ? e[i] = a : e.setAttribute(i, a));
}
function set_attributes(e, i, a, o, s = !1, c = !1) {
	if (hydrating && s && e.nodeName === INPUT_TAG) {
		var l = e;
		(l.type === "checkbox" ? "defaultChecked" : "defaultValue") in a || remove_input_defaults(l);
	}
	var u = get_attributes(e), d = u[IS_CUSTOM_ELEMENT], f = !u[IS_HTML];
	let p = hydrating && d;
	p && set_hydrating(!1);
	var m = i || {}, h = e.nodeName === OPTION_TAG;
	for (var g in i) g in a || (a[g] = null);
	a.class ? a.class = clsx$1(a.class) : (o || a[CLASS]) && (a.class = null), a[STYLE] && (a.style ??= null);
	var _ = get_setters(e);
	for (let s in a) {
		let l = a[s];
		if (h && s === "value" && l == null) {
			e.value = e.__value = "", m[s] = l;
			continue;
		}
		if (s === "class") {
			set_class(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", l, o, i?.[CLASS], a[CLASS]), m[s] = l, m[CLASS] = a[CLASS];
			continue;
		}
		if (s === "style") {
			set_style(e, l, i?.[STYLE], a[STYLE]), m[s] = l, m[STYLE] = a[STYLE];
			continue;
		}
		var v = m[s];
		if (!(l === v && !(l === void 0 && e.hasAttribute(s)))) {
			m[s] = l;
			var y = s[0] + s[1];
			if (y !== "$$") if (y === "on") {
				let i = {}, a = "$$" + s, o = s.slice(2);
				var b = can_delegate_event(o);
				if (is_capture_event(o) && (o = o.slice(0, -7), i.capture = !0), !b && v) {
					if (l != null) continue;
					e.removeEventListener(o, m[a], i), m[a] = null;
				}
				if (b) delegated(o, e, l), delegate([o]);
				else if (l != null) {
					function c(e) {
						m[s].call(this, e);
					}
					m[a] = create_event(o, e, c, i);
				}
			} else if (s === "style") set_attribute(e, s, l);
			else if (s === "autofocus") autofocus(e, !!l);
			else if (!d && (s === "__value" || s === "value" && l != null)) e.value = e.__value = l;
			else if (s === "selected" && h) set_selected(e, l);
			else {
				var x = s;
				f || (x = normalize_attribute(x));
				var S = x === "defaultValue" || x === "defaultChecked";
				if (l == null && !d && !S) if (u[s] = null, x === "value" || x === "checked") {
					let a = e, o = i === void 0;
					if (x === "value") {
						let e = a.defaultValue;
						a.removeAttribute(x), a.defaultValue = e, a.value = a.__value = o ? e : null;
					} else {
						let e = a.defaultChecked;
						a.removeAttribute(x), a.defaultChecked = e, a.checked = o ? e : !1;
					}
				} else e.removeAttribute(s);
				else S || _.includes(x) && (d || typeof l != "string") ? (e[x] = l, x in u && (u[x] = UNINITIALIZED)) : typeof l != "function" && set_attribute(e, x, l, c);
			}
		}
	}
	return p && set_hydrating(!0), m;
}
function attribute_effect(e, i, a = [], o = [], s = [], c, l = !1, u = !1) {
	flatten(s, a, o, (a) => {
		var o = void 0, s = {}, d = e.nodeName === SELECT_TAG, f = !1;
		if (managed(() => {
			var p = i(...a.map(get$1)), m = set_attributes(e, o, p, c, l, u);
			f && d && "value" in p && select_option(e, p.value);
			for (let e of Object.getOwnPropertySymbols(s)) p[e] || destroy_effect(s[e]);
			for (let i of Object.getOwnPropertySymbols(p)) {
				var h = p[i];
				i.description === "@attach" && (!o || h !== o[i]) && (s[i] && destroy_effect(s[i]), s[i] = branch(() => attach(e, () => h))), m[i] = h;
			}
			o = m;
		}), d) {
			var p = e;
			effect(() => {
				select_option(p, o.value, !0), init_select(p);
			});
		}
		f = !0;
	});
}
function get_attributes(e) {
	return e.__attributes ??= {
		[IS_CUSTOM_ELEMENT]: e.nodeName.includes("-"),
		[IS_HTML]: e.namespaceURI === "http://www.w3.org/1999/xhtml"
	};
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(e) {
	var i = e.getAttribute("is") || e.nodeName, a = setters_cache.get(i);
	if (a) return a;
	setters_cache.set(i, a = []);
	for (var o, s = e, c = Element.prototype; c !== s;) {
		for (var l in o = get_descriptors(s), o) o[l].set && a.push(l);
		s = get_prototype_of(s);
	}
	return a;
}
function bind_value(e, i, a = i) {
	var o = /* @__PURE__ */ new WeakSet();
	listen_to_event_and_reset_event(e, "input", async (s) => {
		var c = s ? e.defaultValue : e.value;
		if (c = is_numberlike_input(e) ? to_number(c) : c, a(c), current_batch !== null && o.add(current_batch), await tick(), c !== (c = i())) {
			var l = e.selectionStart, u = e.selectionEnd, d = e.value.length;
			if (e.value = c ?? "", u !== null) {
				var f = e.value.length;
				l === u && u === d && f > d ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = l, e.selectionEnd = Math.min(u, f));
			}
		}
	}), (hydrating && e.defaultValue !== e.value || untrack(i) == null && e.value) && (a(is_numberlike_input(e) ? to_number(e.value) : e.value), current_batch !== null && o.add(current_batch)), render_effect(() => {
		var a = i();
		if (e === document.activeElement) {
			var s = current_batch;
			if (o.has(s)) return;
		}
		is_numberlike_input(e) && a === to_number(e.value) || e.type === "date" && !a && !e.value || a !== e.value && (e.value = a ?? "");
	});
}
function is_numberlike_input(e) {
	var i = e.type;
	return i === "number" || i === "range";
}
function to_number(e) {
	return e === "" ? null : +e;
}
function bind_files(e, i, a = i) {
	listen_to_event_and_reset_event(e, "change", () => {
		a(e.files);
	}), hydrating && e.files && a(e.files), render_effect(() => {
		e.files = i();
	});
}
function is_bound_this(e, i) {
	return e === i || e?.[STATE_SYMBOL] === i;
}
function bind_this(e = {}, i, a, o) {
	var s = component_context.r, c = active_effect;
	return effect(() => {
		var l, u;
		return render_effect(() => {
			l = u, u = o?.() || [], untrack(() => {
				e !== a(...u) && (i(e, ...u), l && is_bound_this(a(...l), e) && i(null, ...l));
			});
		}), () => {
			let o = c;
			for (; o !== s && o.parent !== null && o.parent.f & 33554432;) o = o.parent;
			let l = () => {
				u && is_bound_this(a(...u), e) && i(null, ...u);
			}, d = o.teardown;
			o.teardown = () => {
				l(), d?.();
			};
		};
	}), e;
}
function init$1(e = !1) {
	let i = component_context, a = i.l.u;
	if (!a) return;
	let o = () => deep_read_state(i.s);
	if (e) {
		let e = 0, a = {}, s = /* @__PURE__ */ derived(() => {
			let o = !1, s = i.s;
			for (let e in s) s[e] !== a[e] && (a[e] = s[e], o = !0);
			return o && e++, e;
		});
		o = () => get$1(s);
	}
	a.b.length && user_pre_effect(() => {
		observe_all(i, o), run_all(a.b);
	}), user_effect(() => {
		let e = untrack(() => a.m.map(run));
		return () => {
			for (let i of e) typeof i == "function" && i();
		};
	}), a.a.length && user_effect(() => {
		observe_all(i, o), run_all(a.a);
	});
}
function observe_all(e, i) {
	if (e.l.s) for (let i of e.l.s) get$1(i);
	i();
}
var rest_props_handler = {
	get(e, i) {
		if (!e.exclude.includes(i)) return e.props[i];
	},
	set(e, i) {
		return !1;
	},
	getOwnPropertyDescriptor(e, i) {
		if (!e.exclude.includes(i) && i in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[i]
		};
	},
	has(e, i) {
		return e.exclude.includes(i) ? !1 : i in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((i) => !e.exclude.includes(i));
	}
};
/* @__NO_SIDE_EFFECTS__ */
function rest_props(e, i, a) {
	return new Proxy({
		props: e,
		exclude: i
	}, rest_props_handler);
}
var spread_props_handler = {
	get(e, i) {
		let a = e.props.length;
		for (; a--;) {
			let o = e.props[a];
			if (is_function(o) && (o = o()), typeof o == "object" && o && i in o) return o[i];
		}
	},
	set(e, i, a) {
		let o = e.props.length;
		for (; o--;) {
			let s = e.props[o];
			is_function(s) && (s = s());
			let c = get_descriptor(s, i);
			if (c && c.set) return c.set(a), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, i) {
		let a = e.props.length;
		for (; a--;) {
			let o = e.props[a];
			if (is_function(o) && (o = o()), typeof o == "object" && o && i in o) {
				let e = get_descriptor(o, i);
				return e && !e.configurable && (e.configurable = !0), e;
			}
		}
	},
	has(e, i) {
		if (i === STATE_SYMBOL || i === LEGACY_PROPS) return !1;
		for (let a of e.props) if (is_function(a) && (a = a()), a != null && i in a) return !0;
		return !1;
	},
	ownKeys(e) {
		let i = [];
		for (let a of e.props) if (is_function(a) && (a = a()), a) {
			for (let e in a) i.includes(e) || i.push(e);
			for (let e of Object.getOwnPropertySymbols(a)) i.includes(e) || i.push(e);
		}
		return i;
	}
};
function spread_props(...e) {
	return new Proxy({ props: e }, spread_props_handler);
}
function prop(e, i, a, o) {
	var s = !legacy_mode_flag || (a & 2) != 0, c = (a & 8) != 0, l = (a & 16) != 0, u = o, f = !0, p = () => (f && (f = !1, u = l ? untrack(o) : o), u);
	let m;
	if (c) {
		var h = STATE_SYMBOL in e || LEGACY_PROPS in e;
		m = get_descriptor(e, i)?.set ?? (h && i in e ? (a) => e[i] = a : void 0);
	}
	var g, _ = !1;
	c ? [g, _] = capture_store_binding(() => e[i]) : g = e[i], g === void 0 && o !== void 0 && (g = p(), m && (s && props_invalid_value(i), m(g)));
	var v = s ? () => {
		var a = e[i];
		return a === void 0 ? p() : (f = !0, a);
	} : () => {
		var a = e[i];
		return a !== void 0 && (u = void 0), a === void 0 ? u : a;
	};
	if (s && !(a & 4)) return v;
	if (m) {
		var y = e.$$legacy;
		return (function(e, i) {
			return arguments.length > 0 ? ((!s || !i || y || _) && m(i ? v() : e), e) : v();
		});
	}
	var b = !1, x = (a & 1 ? derived : derived_safe_equal)(() => (b = !1, v()));
	c && get$1(x);
	var S = active_effect;
	return (function(e, i) {
		if (arguments.length > 0) {
			let a = i ? get$1(x) : s && c ? proxy(e) : e;
			return set(x, a), b = !0, u !== void 0 && (u = a), e;
		}
		return is_destroying_effect && b || S.f & 16384 ? x.v : get$1(x);
	});
}
function onMount(e) {
	component_context === null && lifecycle_outside_component("onMount"), legacy_mode_flag && component_context.l !== null ? init_update_callbacks(component_context).m.push(e) : user_effect(() => {
		let i = untrack(e);
		if (typeof i == "function") return i;
	});
}
function init_update_callbacks(e) {
	var i = e.l;
	return i.u ??= {
		a: [],
		b: [],
		m: []
	};
}
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5"), enable_legacy_mode_flag();
var concatArrays = (e, i) => {
	let a = Array(e.length + i.length);
	for (let i = 0; i < e.length; i++) a[i] = e[i];
	for (let o = 0; o < i.length; o++) a[e.length + o] = i[o];
	return a;
}, createClassValidatorObject = (e, i) => ({
	classGroupId: e,
	validator: i
}), createClassPartObject = (e = /* @__PURE__ */ new Map(), i = null, a) => ({
	nextPart: e,
	validators: i,
	classGroupId: a
}), CLASS_PART_SEPARATOR = "-", EMPTY_CONFLICTS = [], ARBITRARY_PROPERTY_PREFIX = "arbitrary..", createClassGroupUtils = (e) => {
	let i = createClassMap(e), { conflictingClassGroups: a, conflictingClassGroupModifiers: o } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return getGroupIdForArbitraryProperty(e);
			let a = e.split(CLASS_PART_SEPARATOR);
			return getGroupRecursive(a, a[0] === "" && a.length > 1 ? 1 : 0, i);
		},
		getConflictingClassGroupIds: (e, i) => {
			if (i) {
				let i = o[e], s = a[e];
				return i ? s ? concatArrays(s, i) : i : s || EMPTY_CONFLICTS;
			}
			return a[e] || EMPTY_CONFLICTS;
		}
	};
}, getGroupRecursive = (e, i, a) => {
	if (e.length - i === 0) return a.classGroupId;
	let o = e[i], s = a.nextPart.get(o);
	if (s) {
		let a = getGroupRecursive(e, i + 1, s);
		if (a) return a;
	}
	let c = a.validators;
	if (c === null) return;
	let l = i === 0 ? e.join(CLASS_PART_SEPARATOR) : e.slice(i).join(CLASS_PART_SEPARATOR), u = c.length;
	for (let e = 0; e < u; e++) {
		let i = c[e];
		if (i.validator(l)) return i.classGroupId;
	}
}, getGroupIdForArbitraryProperty = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let i = e.slice(1, -1), a = i.indexOf(":"), o = i.slice(0, a);
	return o ? ARBITRARY_PROPERTY_PREFIX + o : void 0;
})(), createClassMap = (e) => {
	let { theme: i, classGroups: a } = e;
	return processClassGroups(a, i);
}, processClassGroups = (e, i) => {
	let a = createClassPartObject();
	for (let o in e) {
		let s = e[o];
		processClassesRecursively(s, a, o, i);
	}
	return a;
}, processClassesRecursively = (e, i, a, o) => {
	let s = e.length;
	for (let c = 0; c < s; c++) {
		let s = e[c];
		processClassDefinition(s, i, a, o);
	}
}, processClassDefinition = (e, i, a, o) => {
	if (typeof e == "string") {
		processStringDefinition(e, i, a);
		return;
	}
	if (typeof e == "function") {
		processFunctionDefinition(e, i, a, o);
		return;
	}
	processObjectDefinition(e, i, a, o);
}, processStringDefinition = (e, i, a) => {
	let o = e === "" ? i : getPart(i, e);
	o.classGroupId = a;
}, processFunctionDefinition = (e, i, a, o) => {
	if (isThemeGetter(e)) {
		processClassesRecursively(e(o), i, a, o);
		return;
	}
	i.validators === null && (i.validators = []), i.validators.push(createClassValidatorObject(a, e));
}, processObjectDefinition = (e, i, a, o) => {
	let s = Object.entries(e), c = s.length;
	for (let e = 0; e < c; e++) {
		let [c, l] = s[e];
		processClassesRecursively(l, getPart(i, c), a, o);
	}
}, getPart = (e, i) => {
	let a = e, o = i.split(CLASS_PART_SEPARATOR), s = o.length;
	for (let e = 0; e < s; e++) {
		let i = o[e], s = a.nextPart.get(i);
		s || (s = createClassPartObject(), a.nextPart.set(i, s)), a = s;
	}
	return a;
}, isThemeGetter = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, createLruCache = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let i = 0, a = Object.create(null), o = Object.create(null), s = (s, c) => {
		a[s] = c, i++, i > e && (i = 0, o = a, a = Object.create(null));
	};
	return {
		get(e) {
			let i = a[e];
			if (i !== void 0) return i;
			if ((i = o[e]) !== void 0) return s(e, i), i;
		},
		set(e, i) {
			e in a ? a[e] = i : s(e, i);
		}
	};
}, IMPORTANT_MODIFIER = "!", MODIFIER_SEPARATOR = ":", EMPTY_MODIFIERS = [], createResultObject = (e, i, a, o, s) => ({
	modifiers: e,
	hasImportantModifier: i,
	baseClassName: a,
	maybePostfixModifierPosition: o,
	isExternal: s
}), createParseClassName = (e) => {
	let { prefix: i, experimentalParseClassName: a } = e, o = (e) => {
		let i = [], a = 0, o = 0, s = 0, c, l = e.length;
		for (let u = 0; u < l; u++) {
			let l = e[u];
			if (a === 0 && o === 0) {
				if (l === MODIFIER_SEPARATOR) {
					i.push(e.slice(s, u)), s = u + 1;
					continue;
				}
				if (l === "/") {
					c = u;
					continue;
				}
			}
			l === "[" ? a++ : l === "]" ? a-- : l === "(" ? o++ : l === ")" && o--;
		}
		let u = i.length === 0 ? e : e.slice(s), d = u, f = !1;
		u.endsWith(IMPORTANT_MODIFIER) ? (d = u.slice(0, -1), f = !0) : u.startsWith(IMPORTANT_MODIFIER) && (d = u.slice(1), f = !0);
		let p = c && c > s ? c - s : void 0;
		return createResultObject(i, f, d, p);
	};
	if (i) {
		let e = i + MODIFIER_SEPARATOR, a = o;
		o = (i) => i.startsWith(e) ? a(i.slice(e.length)) : createResultObject(EMPTY_MODIFIERS, !1, i, void 0, !0);
	}
	if (a) {
		let e = o;
		o = (i) => a({
			className: i,
			parseClassName: e
		});
	}
	return o;
}, createSortModifiers = (e) => {
	let i = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, a) => {
		i.set(e, 1e6 + a);
	}), (e) => {
		let a = [], o = [];
		for (let s = 0; s < e.length; s++) {
			let c = e[s], l = c[0] === "[", u = i.has(c);
			l || u ? (o.length > 0 && (o.sort(), a.push(...o), o = []), a.push(c)) : o.push(c);
		}
		return o.length > 0 && (o.sort(), a.push(...o)), a;
	};
}, createConfigUtils = (e) => ({
	cache: createLruCache(e.cacheSize),
	parseClassName: createParseClassName(e),
	sortModifiers: createSortModifiers(e),
	...createClassGroupUtils(e)
}), SPLIT_CLASSES_REGEX = /\s+/, mergeClassList = (e, i) => {
	let { parseClassName: a, getClassGroupId: o, getConflictingClassGroupIds: s, sortModifiers: c } = i, l = [], u = e.trim().split(SPLIT_CLASSES_REGEX), d = "";
	for (let e = u.length - 1; e >= 0; --e) {
		let i = u[e], { isExternal: f, modifiers: p, hasImportantModifier: m, baseClassName: h, maybePostfixModifierPosition: g } = a(i);
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
		for (let e = 0; e < S.length; ++e) {
			let i = S[e];
			l.push(b + i);
		}
		d = i + (d.length > 0 ? " " + d : d);
	}
	return d;
}, twJoin = (...e) => {
	let i = 0, a, o, s = "";
	for (; i < e.length;) (a = e[i++]) && (o = toValue(a)) && (s && (s += " "), s += o);
	return s;
}, toValue = (e) => {
	if (typeof e == "string") return e;
	let i, a = "";
	for (let o = 0; o < e.length; o++) e[o] && (i = toValue(e[o])) && (a && (a += " "), a += i);
	return a;
}, createTailwindMerge = (e, ...i) => {
	let a, o, s, c, l = (l) => (a = createConfigUtils(i.reduce((e, i) => i(e), e())), o = a.cache.get, s = a.cache.set, c = u, u(l)), u = (e) => {
		let i = o(e);
		if (i) return i;
		let c = mergeClassList(e, a);
		return s(e, c), c;
	};
	return c = l, (...e) => c(twJoin(...e));
}, fallbackThemeArr = [], fromTheme = (e) => {
	let i = (i) => i[e] || fallbackThemeArr;
	return i.isThemeGetter = !0, i;
}, arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, isFraction = (e) => fractionRegex.test(e), isNumber = (e) => !!e && !Number.isNaN(Number(e)), isInteger = (e) => !!e && Number.isInteger(Number(e)), isPercent = (e) => e.endsWith("%") && isNumber(e.slice(0, -1)), isTshirtSize = (e) => tshirtUnitRegex.test(e), isAny = () => !0, isLengthOnly = (e) => lengthUnitRegex.test(e) && !colorFunctionRegex.test(e), isNever = () => !1, isShadow = (e) => shadowRegex.test(e), isImage = (e) => imageRegex.test(e), isAnyNonArbitrary = (e) => !isArbitraryValue(e) && !isArbitraryVariable(e), isArbitrarySize = (e) => getIsArbitraryValue(e, isLabelSize, isNever), isArbitraryValue = (e) => arbitraryValueRegex.test(e), isArbitraryLength = (e) => getIsArbitraryValue(e, isLabelLength, isLengthOnly), isArbitraryNumber = (e) => getIsArbitraryValue(e, isLabelNumber, isNumber), isArbitraryWeight = (e) => getIsArbitraryValue(e, isLabelWeight, isAny), isArbitraryFamilyName = (e) => getIsArbitraryValue(e, isLabelFamilyName, isNever), isArbitraryPosition = (e) => getIsArbitraryValue(e, isLabelPosition, isNever), isArbitraryImage = (e) => getIsArbitraryValue(e, isLabelImage, isImage), isArbitraryShadow = (e) => getIsArbitraryValue(e, isLabelShadow, isShadow), isArbitraryVariable = (e) => arbitraryVariableRegex.test(e), isArbitraryVariableLength = (e) => getIsArbitraryVariable(e, isLabelLength), isArbitraryVariableFamilyName = (e) => getIsArbitraryVariable(e, isLabelFamilyName), isArbitraryVariablePosition = (e) => getIsArbitraryVariable(e, isLabelPosition), isArbitraryVariableSize = (e) => getIsArbitraryVariable(e, isLabelSize), isArbitraryVariableImage = (e) => getIsArbitraryVariable(e, isLabelImage), isArbitraryVariableShadow = (e) => getIsArbitraryVariable(e, isLabelShadow, !0), isArbitraryVariableWeight = (e) => getIsArbitraryVariable(e, isLabelWeight, !0), getIsArbitraryValue = (e, i, a) => {
	let o = arbitraryValueRegex.exec(e);
	return o ? o[1] ? i(o[1]) : a(o[2]) : !1;
}, getIsArbitraryVariable = (e, i, a = !1) => {
	let o = arbitraryVariableRegex.exec(e);
	return o ? o[1] ? i(o[1]) : a : !1;
}, isLabelPosition = (e) => e === "position" || e === "percentage", isLabelImage = (e) => e === "image" || e === "url", isLabelSize = (e) => e === "length" || e === "size" || e === "bg-size", isLabelLength = (e) => e === "length", isLabelNumber = (e) => e === "number", isLabelFamilyName = (e) => e === "family-name", isLabelWeight = (e) => e === "number" || e === "weight", isLabelShadow = (e) => e === "shadow", getDefaultConfig = () => {
	let e = fromTheme("color"), i = fromTheme("font"), a = fromTheme("text"), o = fromTheme("font-weight"), s = fromTheme("tracking"), c = fromTheme("leading"), l = fromTheme("breakpoint"), u = fromTheme("container"), d = fromTheme("spacing"), f = fromTheme("radius"), p = fromTheme("shadow"), m = fromTheme("inset-shadow"), h = fromTheme("text-shadow"), g = fromTheme("drop-shadow"), _ = fromTheme("blur"), v = fromTheme("perspective"), y = fromTheme("aspect"), b = fromTheme("ease"), x = fromTheme("animate"), S = () => [
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
		e,
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
}, mergeConfigs = (e, { cacheSize: i, prefix: a, experimentalParseClassName: o, extend: s = {}, override: c = {} }) => (overrideProperty(e, "cacheSize", i), overrideProperty(e, "prefix", a), overrideProperty(e, "experimentalParseClassName", o), overrideConfigProperties(e.theme, c.theme), overrideConfigProperties(e.classGroups, c.classGroups), overrideConfigProperties(e.conflictingClassGroups, c.conflictingClassGroups), overrideConfigProperties(e.conflictingClassGroupModifiers, c.conflictingClassGroupModifiers), overrideProperty(e, "orderSensitiveModifiers", c.orderSensitiveModifiers), mergeConfigProperties(e.theme, s.theme), mergeConfigProperties(e.classGroups, s.classGroups), mergeConfigProperties(e.conflictingClassGroups, s.conflictingClassGroups), mergeConfigProperties(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), mergeArrayProperties(e, s, "orderSensitiveModifiers"), e), overrideProperty = (e, i, a) => {
	a !== void 0 && (e[i] = a);
}, overrideConfigProperties = (e, i) => {
	if (i) for (let a in i) overrideProperty(e, a, i[a]);
}, mergeConfigProperties = (e, i) => {
	if (i) for (let a in i) mergeArrayProperties(e, i, a);
}, mergeArrayProperties = (e, i, a) => {
	let o = i[a];
	o !== void 0 && (e[a] = e[a] ? e[a].concat(o) : o);
}, extendTailwindMerge = (e, ...i) => typeof e == "function" ? createTailwindMerge(getDefaultConfig, e, ...i) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), e), ...i), twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
function cn$1(...e) {
	return twMerge(clsx(e));
}
var SPACE_REGEX = /\s+/g, removeExtraSpaces = (e) => typeof e != "string" || !e ? e : e.replace(SPACE_REGEX, " ").trim(), cx$1 = (...e) => {
	let i = [], a = (e) => {
		if (!e && e !== 0 && e !== 0n) return;
		if (Array.isArray(e)) {
			for (let i = 0, o = e.length; i < o; i++) a(e[i]);
			return;
		}
		let o = typeof e;
		if (o === "string" || o === "number" || o === "bigint") {
			if (o === "number" && e !== e) return;
			i.push(String(e));
		} else if (o === "object") {
			let a = Object.keys(e);
			for (let o = 0, s = a.length; o < s; o++) {
				let s = a[o];
				e[s] && i.push(s);
			}
		}
	};
	for (let i = 0, o = e.length; i < o; i++) {
		let o = e[i];
		o != null && a(o);
	}
	return i.length > 0 ? removeExtraSpaces(i.join(" ")) : void 0;
}, falsyToString = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, isEmptyObject = (e) => {
	if (!e || typeof e != "object") return !0;
	for (let i in e) return !1;
	return !0;
}, isEqual = (e, i) => {
	if (e === i) return !0;
	if (!e || !i) return !1;
	let a = Object.keys(e), o = Object.keys(i);
	if (a.length !== o.length) return !1;
	for (let s = 0; s < a.length; s++) {
		let c = a[s];
		if (!o.includes(c) || e[c] !== i[c]) return !1;
	}
	return !0;
}, joinObjects = (e, i) => {
	for (let a in i) if (Object.prototype.hasOwnProperty.call(i, a)) {
		let o = i[a];
		a in e ? e[a] = cx$1(e[a], o) : e[a] = o;
	}
	return e;
}, flat = (e, i) => {
	for (let a = 0; a < e.length; a++) {
		let o = e[a];
		Array.isArray(o) ? flat(o, i) : o && i.push(o);
	}
}, flatMergeArrays = (...e) => {
	let i = [];
	flat(e, i);
	let a = [];
	for (let e = 0; e < i.length; e++) i[e] && a.push(i[e]);
	return a;
}, mergeObjects = (e, i) => {
	let a = {};
	for (let o in e) {
		let s = e[o];
		if (o in i) {
			let e = i[o];
			Array.isArray(s) || Array.isArray(e) ? a[o] = flatMergeArrays(e, s) : typeof s == "object" && typeof e == "object" && s && e ? a[o] = mergeObjects(s, e) : a[o] = e + " " + s;
		} else a[o] = s;
	}
	for (let o in i) o in e || (a[o] = i[o]);
	return a;
}, defaultConfig = {
	twMerge: !0,
	twMergeConfig: {}
};
function createState() {
	let e = null, i = {}, a = !1;
	return {
		get cachedTwMerge() {
			return e;
		},
		set cachedTwMerge(i) {
			e = i;
		},
		get cachedTwMergeConfig() {
			return i;
		},
		set cachedTwMergeConfig(e) {
			i = e;
		},
		get didTwMergeConfigChange() {
			return a;
		},
		set didTwMergeConfigChange(e) {
			a = e;
		},
		reset() {
			e = null, i = {}, a = !1;
		}
	};
}
var state$1 = createState(), getTailwindVariants = (e) => {
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
			if (isEmptyObject(m) && isEmptyObject(s) && g) return e(p, i?.class, i?.className)(f);
			if (y && !Array.isArray(y)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);
			if (u && !Array.isArray(u)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof u}`);
			let a = (e, a = m, o = null, s = null) => {
				let c = a[e];
				if (!c || isEmptyObject(c)) return null;
				let l = s?.[e] ?? i?.[e];
				if (l === null) return null;
				let u = falsyToString(l);
				if (typeof u == "object") return null;
				let d = h?.[e];
				return c[(u ?? falsyToString(d)) || "false"];
			}, o = () => {
				if (!m) return null;
				let e = Object.keys(m), i = [];
				for (let o = 0; o < e.length; o++) {
					let s = a(e[o], m);
					s && i.push(s);
				}
				return i;
			}, c = (e, i) => {
				if (!m || typeof m != "object") return null;
				let o = [];
				for (let s in m) {
					let c = a(s, m, e, i), l = e === "base" && typeof c == "string" ? c : c && c[e];
					l && o.push(l);
				}
				return o;
			}, l = {};
			for (let e in i) {
				let a = i[e];
				a !== void 0 && (l[e] = a);
			}
			let d = (e, a) => {
				let o = typeof i?.[e] == "object" ? { [e]: i[e]?.initial } : {};
				return {
					...h,
					...l,
					...o,
					...a
				};
			}, _ = (e = [], i) => {
				let a = [], o = e.length;
				for (let s = 0; s < o; s++) {
					let { class: o, className: c, ...l } = e[s], u = !0, f = d(null, i);
					for (let e in l) {
						let i = l[e], a = f[e];
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
				let o = {}, s = e;
				for (let e = 0; e < a.length; e++) {
					let i = a[e];
					if (typeof i == "string") o.base = s(o.base, i)(f);
					else if (typeof i == "object") for (let e in i) o[e] = s(o[e], i[e])(f);
				}
				return o;
			}, x = (e) => {
				if (u.length < 1) return null;
				let i = {}, a = d(null, e);
				for (let e = 0; e < u.length; e++) {
					let { slots: o = [], class: s, className: c, ...l } = u[e];
					if (!isEmptyObject(l)) {
						let e = !0;
						for (let i in l) {
							let o = a[i], s = l[i];
							if (o === void 0 || (Array.isArray(s) ? !s.includes(o) : s !== o)) {
								e = !1;
								break;
							}
						}
						if (!e) continue;
					}
					for (let e = 0; e < o.length; e++) {
						let a = o[e];
						i[a] || (i[a] = []), i[a].push([s, c]);
					}
				}
				return i;
			};
			if (!isEmptyObject(s) || !g) {
				let i = {};
				if (typeof v == "object" && !isEmptyObject(v)) {
					let a = e;
					for (let e in v) i[e] = (i) => {
						let o = b(i), s = x(i);
						return a(v[e], c(e, i), o ? o[e] : void 0, s ? s[e] : void 0, i?.class, i?.className)(f);
					};
				}
				return i;
			}
			return e(p, o(), _(y), i?.class, i?.className)(f);
		};
		return b.variantKeys = (() => {
			if (!(!m || typeof m != "object")) return Object.keys(m);
		})(), b.extend = o, b.base = p, b.slots = v, b.variants = m, b.defaultVariants = h, b.compoundSlots = u, b.compoundVariants = y, b;
	};
	return {
		tv: i,
		createTV: (e) => (a, o) => i(a, o ? mergeObjects(e, o) : e)
	};
}, createTwMerge = (e) => isEmptyObject(e) ? twMerge : extendTailwindMerge({
	...e,
	extend: {
		theme: e.theme,
		classGroups: e.classGroups,
		conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
		conflictingClassGroups: e.conflictingClassGroups,
		...e.extend
	}
}), executeMerge = (e, i) => {
	let a = cx$1(e);
	return !a || !(i?.twMerge ?? !0) ? a : ((!state$1.cachedTwMerge || state$1.didTwMergeConfigChange) && (state$1.didTwMergeConfigChange = !1, state$1.cachedTwMerge = createTwMerge(state$1.cachedTwMergeConfig)), state$1.cachedTwMerge(a) || void 0);
}, { createTV, tv: tv$1 } = getTailwindVariants((...e) => (i) => executeMerge(e, i));
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
var root_1$5 = /* @__PURE__ */ from_html("<a><!></a>"), root_2$8 = /* @__PURE__ */ from_html("<button><!></button>");
function Button(e, i) {
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
	var d = comment(), f = first_child(d), p = (e) => {
		var l = root_1$5();
		attribute_effect(l, (e) => ({
			"data-slot": "button",
			class: e,
			href: i.disabled ? void 0 : c(),
			"aria-disabled": i.disabled,
			role: i.disabled ? "link" : void 0,
			tabindex: i.disabled ? -1 : void 0,
			...u
		}), [() => cn$1(buttonVariants({
			variant: a(),
			size: o()
		}), i.class)]), snippet(child(l), () => i.children ?? noop), reset(l), bind_this(l, (e) => s(e), () => s()), append(e, l);
	}, m = (e) => {
		var c = root_2$8();
		attribute_effect(c, (e) => ({
			"data-slot": "button",
			class: e,
			type: l(),
			disabled: i.disabled,
			...u
		}), [() => cn$1(buttonVariants({
			variant: a(),
			size: o()
		}), i.class)]), snippet(child(c), () => i.children ?? noop), reset(c), bind_this(c, (e) => s(e), () => s()), append(e, c);
	};
	if_block(f, (e) => {
		c() ? e(p) : e(m, -1);
	}), append(e, d), pop();
}
var root$16 = /* @__PURE__ */ from_html("<div class=\"relative w-15 h-15 shrink-0 overflow-hidden\"><div class=\"absolute top-[18%] left-[-75%] w-[250%] py-[0.25em] pr-[1.5em] -rotate-45 bg-primary text-white text-[0.6rem] font-bold text-center shadow-md leading-none pointer-events-none\"> </div></div>");
function VersionBadge(e, i) {
	let a = prop(i, "version", 3, "main");
	var o = root$16(), s = child(o), c = child(s, !0);
	reset(s), reset(o), template_effect(() => set_text(c, a())), append(e, o);
}
function isObject(e) {
	return typeof e == "object" && !!e;
}
var CLASS_VALUE_PRIMITIVE_TYPES = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function isClassValue(e) {
	return e == null || CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => isClassValue(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
const BoxSymbol = Symbol("box"), isWritableSymbol = Symbol("is-writable");
function boxWith(e, i) {
	let a = /* @__PURE__ */ user_derived(e);
	return i ? {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$1(a);
		},
		set current(e) {
			i(e);
		}
	} : {
		[BoxSymbol]: !0,
		get current() {
			return e();
		}
	};
}
function isBox(e) {
	return isObject(e) && BoxSymbol in e;
}
function composeHandlers(...e) {
	return function(i) {
		for (let a of e) if (a) {
			if (i.defaultPrevented) return;
			typeof a == "function" ? a.call(this, i) : a.current?.call(this, i);
		}
	};
}
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, NEWLINE_REGEX = /\n/g, WHITESPACE_REGEX = /^\s*/, PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, COLON_REGEX = /^:\s*/, VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, SEMICOLON_REGEX = /^[;\s]*/, TRIM_REGEX = /^\s+|\s+$/g, NEWLINE = "\n", FORWARD_SLASH = "/", ASTERISK = "*", EMPTY_STRING = "", TYPE_COMMENT = "comment", TYPE_DECLARATION = "declaration";
function index(e, i) {
	if (typeof e != "string") throw TypeError("First argument must be a string");
	if (!e) return [];
	i ||= {};
	var a = 1, o = 1;
	function s(e) {
		var i = e.match(NEWLINE_REGEX);
		i && (a += i.length);
		var s = e.lastIndexOf(NEWLINE);
		o = ~s ? e.length - s : o + e.length;
	}
	function c() {
		var e = {
			line: a,
			column: o
		};
		return function(i) {
			return i.position = new l(e), f(), i;
		};
	}
	function l(e) {
		this.start = e, this.end = {
			line: a,
			column: o
		}, this.source = i.source;
	}
	l.prototype.content = e;
	function u(s) {
		var c = /* @__PURE__ */ Error(i.source + ":" + a + ":" + o + ": " + s);
		if (c.reason = s, c.filename = i.source, c.line = a, c.column = o, c.source = e, !i.silent) throw c;
	}
	function d(i) {
		var a = i.exec(e);
		if (a) {
			var o = a[0];
			return s(o), e = e.slice(o.length), a;
		}
	}
	function f() {
		d(WHITESPACE_REGEX);
	}
	function p(e) {
		var i;
		for (e ||= []; i = m();) i !== !1 && e.push(i);
		return e;
	}
	function m() {
		var i = c();
		if (!(FORWARD_SLASH != e.charAt(0) || ASTERISK != e.charAt(1))) {
			for (var a = 2; EMPTY_STRING != e.charAt(a) && (ASTERISK != e.charAt(a) || FORWARD_SLASH != e.charAt(a + 1));) ++a;
			if (a += 2, EMPTY_STRING === e.charAt(a - 1)) return u("End of comment missing");
			var l = e.slice(2, a - 2);
			return o += 2, s(l), e = e.slice(a), o += 2, i({
				type: TYPE_COMMENT,
				comment: l
			});
		}
	}
	function h() {
		var e = c(), i = d(PROPERTY_REGEX);
		if (i) {
			if (m(), !d(COLON_REGEX)) return u("property missing ':'");
			var a = d(VALUE_REGEX), o = e({
				type: TYPE_DECLARATION,
				property: trim(i[0].replace(COMMENT_REGEX, EMPTY_STRING)),
				value: a ? trim(a[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
			});
			return d(SEMICOLON_REGEX), o;
		}
	}
	function g() {
		var e = [];
		p(e);
		for (var i; i = h();) i !== !1 && (e.push(i), p(e));
		return e;
	}
	return f(), g();
}
function trim(e) {
	return e ? e.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
function StyleToObject(e, i) {
	let a = null;
	if (!e || typeof e != "string") return a;
	let o = index(e), s = typeof i == "function";
	return o.forEach((e) => {
		if (e.type !== "declaration") return;
		let { property: o, value: c } = e;
		s ? i(o, c, e) : c && (a ||= {}, a[o] = c);
	}), a;
}
var NUMBER_CHAR_RE = /\d/, STR_SPLITTERS = [
	"-",
	"_",
	"/",
	"."
];
function isUppercase(e = "") {
	if (!NUMBER_CHAR_RE.test(e)) return e !== e.toLowerCase();
}
function splitByCase(e) {
	let i = [], a = "", o, s;
	for (let c of e) {
		let e = STR_SPLITTERS.includes(c);
		if (e === !0) {
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
				let e = a.at(-1);
				i.push(a.slice(0, Math.max(0, a.length - 1))), a = e + c, o = l;
				continue;
			}
		}
		a += c, o = l, s = e;
	}
	return i.push(a), i;
}
function pascalCase(e) {
	return e ? splitByCase(e).map((e) => upperFirst(e)).join("") : "";
}
function camelCase(e) {
	return lowerFirst(pascalCase(e || ""));
}
function upperFirst(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function lowerFirst(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
function cssToStyleObj(e) {
	if (!e) return {};
	let i = {};
	function a(e, a) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			i[pascalCase(e)] = a;
			return;
		}
		if (e.startsWith("--")) {
			i[e] = a;
			return;
		}
		i[camelCase(e)] = a;
	}
	return StyleToObject(e, a), i;
}
function executeCallbacks(...e) {
	return (...i) => {
		for (let a of e) typeof a == "function" && a(...i);
	};
}
function createParser(e, i) {
	let a = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(a) ? e.replace(a, i) : e;
	};
}
var camelToKebab$1 = createParser(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function styleToCSS(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((i) => `${camelToKebab$1(i)}: ${e[i]};`).join("\n");
}
function styleToString(e = {}) {
	return styleToCSS(e).replace("\n", " ");
}
var EVENT_LIST = /* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split(".");
const EVENT_LIST_SET = new Set(EVENT_LIST);
function isEventHandler(e) {
	return EVENT_LIST_SET.has(e);
}
function mergeProps(...e) {
	let i = { ...e[0] };
	for (let a = 1; a < e.length; a++) {
		let o = e[a];
		if (o) {
			for (let e of Object.keys(o)) {
				let a = i[e], s = o[e], c = typeof a == "function", l = typeof s == "function";
				if (c && typeof l && isEventHandler(e)) i[e] = composeHandlers(a, s);
				else if (c && l) i[e] = executeCallbacks(a, s);
				else if (e === "class") {
					let o = isClassValue(a), c = isClassValue(s);
					o && c ? i[e] = clsx(a, s) : o ? i[e] = clsx(a) : c && (i[e] = clsx(s));
				} else if (e === "style") {
					let o = typeof a == "object", c = typeof s == "object", l = typeof a == "string", u = typeof s == "string";
					if (o && c) i[e] = {
						...a,
						...s
					};
					else if (o && u) {
						let o = cssToStyleObj(s);
						i[e] = {
							...a,
							...o
						};
					} else if (l && c) i[e] = {
						...cssToStyleObj(a),
						...s
					};
					else if (l && u) {
						let o = cssToStyleObj(a), c = cssToStyleObj(s);
						i[e] = {
							...o,
							...c
						};
					} else o ? i[e] = a : c ? i[e] = s : l ? i[e] = a : u && (i[e] = s);
				} else i[e] = s === void 0 ? a : s;
			}
			for (let e of Object.getOwnPropertySymbols(o)) {
				let a = i[e], s = o[e];
				i[e] = s === void 0 ? a : s;
			}
		}
	}
	return typeof i.style == "object" && (i.style = styleToString(i.style).replaceAll("\n", " ")), i.hidden === !1 && (i.hidden = void 0, delete i.hidden), i.disabled === !1 && (i.disabled = void 0, delete i.disabled), i;
}
const defaultWindow = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function getActiveElement$1(e) {
	let i = e.activeElement;
	for (; i?.shadowRoot;) {
		let e = i.shadowRoot.activeElement;
		if (e === i) break;
		i = e;
	}
	return i;
}
URLSearchParams, Symbol.iterator, new class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: i = defaultWindow, document: a = i?.document } = e;
		i !== void 0 && (this.#e = a, this.#t = createSubscriber((e) => {
			let a = on$1(i, "focusin", e), o = on$1(i, "focusout", e);
			return () => {
				a(), o();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? getActiveElement$1(this.#e) : null;
	}
}();
var Context = class {
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Symbol(e);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return hasContext(this.#t);
	}
	get() {
		let e = getContext(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let i = getContext(this.#t);
		return i === void 0 ? e : i;
	}
	set(e) {
		return setContext(this.#t, e);
	}
};
function runEffect(e, i) {
	switch (e) {
		case "post":
			user_effect(i);
			break;
		case "pre":
			user_pre_effect(i);
			break;
	}
}
function runWatcher(e, i, a, o = {}) {
	let { lazy: s = !1 } = o, c = !s, l = Array.isArray(e) ? [] : void 0;
	runEffect(i, () => {
		let i = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!c) {
			c = !0, l = i;
			return;
		}
		let o = untrack(() => a(i, l));
		return l = i, o;
	});
}
function runWatcherOnce(e, i, a) {
	let o = effect_root(() => {
		let s = !1;
		runWatcher(e, i, (e, i) => {
			if (s) {
				o();
				return;
			}
			let c = a(e, i);
			return s = !0, c;
		}, { lazy: !0 });
	});
	user_effect(() => o);
}
function watch(e, i, a) {
	runWatcher(e, "post", i, a);
}
function watchPre(e, i, a) {
	runWatcher(e, "pre", i, a);
}
watch.pre = watchPre;
function watchOnce(e, i) {
	runWatcherOnce(e, "post", i);
}
function watchOncePre(e, i) {
	runWatcherOnce(e, "pre", i);
}
watchOnce.pre = watchOncePre;
function debounce(e, i) {
	let a, o = null;
	return (...s) => new Promise((c) => {
		o && o(void 0), o = c, clearTimeout(a), a = setTimeout(async () => {
			let i = await e(...s);
			o &&= (o(i), null);
		}, i);
	});
}
function throttle(e, i) {
	let a = 0, o = null;
	return (...s) => {
		let c = Date.now();
		return a && c - a < i ? o ?? Promise.resolve(void 0) : (a = c, o = e(...s), o);
	};
}
function runResource(e, i, a = {}, o) {
	let { lazy: s = !1, once: c = !1, initialValue: l, debounce: u, throttle: d } = a, f = /* @__PURE__ */ state(proxy(l)), p = /* @__PURE__ */ state(!1), m = /* @__PURE__ */ state(void 0), h = /* @__PURE__ */ state(proxy([])), g = () => {
		get$1(h).forEach((e) => e()), set(h, [], !0);
	}, _ = (e) => {
		set(h, [...get$1(h), e], !0);
	}, v = async (e, a, o = !1) => {
		try {
			set(p, !0), set(m, void 0), g();
			let s = new AbortController();
			_(() => s.abort());
			let c = await i(e, a, {
				data: get$1(f),
				refetching: o,
				onCleanup: _,
				signal: s.signal
			});
			return set(f, c, !0), c;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || set(m, e, !0);
			return;
		} finally {
			set(p, !1);
		}
	}, y = u ? debounce(v, u) : d ? throttle(v, d) : v, b = Array.isArray(e) ? e : [e], x;
	return o((i, a) => {
		c && x || (x = i, y(Array.isArray(e) ? i : i[0], Array.isArray(e) ? a : a?.[0]));
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
		mutate: (e) => {
			set(f, e, !0);
		},
		refetch: (i) => {
			let a = b.map((e) => e());
			return y(Array.isArray(e) ? a : a[0], Array.isArray(e) ? a : a[0], i ?? !0);
		}
	};
}
function resource(e, i, a) {
	return runResource(e, i, a, (i, a) => {
		let o = Array.isArray(e) ? e : [e];
		watch(() => o.map((e) => e()), (e, a) => {
			i(e, a ?? []);
		}, a);
	});
}
function resourcePre(e, i, a) {
	return runResource(e, i, a, (i, a) => {
		let o = Array.isArray(e) ? e : [e];
		watch.pre(() => o.map((e) => e()), (e, a) => {
			i(e, a ?? []);
		}, a);
	});
}
resource.pre = resourcePre;
var DOCUMENT_NODE = 9;
function isDocument(e) {
	return isObject(e) && e.nodeType === DOCUMENT_NODE;
}
function isWindow(e) {
	return isObject(e) && e.constructor?.name === "VisualViewport";
}
function getDocument(e) {
	return isDocument(e) ? e : isWindow(e) ? e.document : e?.ownerDocument ?? document;
}
function getActiveElement(e) {
	let i = e.activeElement;
	for (; i?.shadowRoot;) {
		let e = i.shadowRoot.activeElement;
		if (e === i) break;
		i = e;
	}
	return i;
}
var DOMContext = class {
	element;
	#e = /* @__PURE__ */ user_derived(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return get$1(this.#e);
	}
	set root(e) {
		set(this.#e, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = boxWith(e) : this.element = e;
	}
	getDocument = () => getDocument(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => getActiveElement(this.root);
	isActiveElement = (e) => e === this.getActiveElement();
	getElementById(e) {
		return this.root.getElementById(e);
	}
	querySelector = (e) => this.root ? this.root.querySelector(e) : null;
	querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
	setTimeout = (e, i) => this.getWindow().setTimeout(e, i);
	clearTimeout = (e) => this.getWindow().clearTimeout(e);
};
function attachRef(e, i) {
	return { [createAttachmentKey()]: (a) => isBox(e) ? (e.current = a, untrack(() => i?.(a)), () => {
		"isConnected" in a && a.isConnected || (e.current = null, i?.(null));
	}) : (e(a), untrack(() => i?.(a)), () => {
		"isConnected" in a && a.isConnected || (e(null), i?.(null));
	}) };
}
var BitsAttrs = class {
	#e;
	#t;
	attrs;
	constructor(e) {
		this.#e = e.getVariant ? e.getVariant() : null, this.#t = this.#e ? `data-${this.#e}-` : `data-${e.component}-`, this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(e.parts.map((e) => [e, this.getAttr(e)]));
	}
	getAttr(e, i) {
		return i ? `data-${i}-${e}` : `${this.#t}${e}`;
	}
	selector(e, i) {
		return `[${this.getAttr(e, i)}]`;
	}
};
function createBitsAttrs(e) {
	let i = new BitsAttrs(e);
	return {
		...i.attrs,
		selector: i.selector,
		getAttr: i.getAttr
	};
}
function createId(e, i) {
	return i === void 0 ? `bits-${e}` : `bits-${e}-${i}`;
}
var avatarAttrs = createBitsAttrs({
	component: "avatar",
	parts: [
		"root",
		"image",
		"fallback"
	]
}), AvatarRootContext = new Context("Avatar.Root"), AvatarRootState = class e {
	static create(i) {
		return AvatarRootContext.set(new e(i));
	}
	opts;
	domContext;
	attachment;
	constructor(e) {
		this.opts = e, this.domContext = new DOMContext(this.opts.ref), this.loadImage = this.loadImage.bind(this), this.attachment = attachRef(this.opts.ref);
	}
	loadImage(e, i, a) {
		if (this.opts.loadingStatus.current === "loaded") return;
		let o, s = new Image();
		return s.src = e, i !== void 0 && (s.crossOrigin = i), a && (s.referrerPolicy = a), this.opts.loadingStatus.current = "loading", s.onload = () => {
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
	set props(e) {
		set(this.#e, e);
	}
}, AvatarImageState = class e {
	static create(i) {
		return new e(i, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, i) {
		this.opts = e, this.root = i, this.attachment = attachRef(this.opts.ref), watch.pre([() => this.opts.src.current, () => this.opts.crossOrigin.current], ([e, i]) => {
			if (!e) {
				this.root.opts.loadingStatus.current = "error";
				return;
			}
			this.root.loadImage(e, i, this.opts.referrerPolicy.current);
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
	set props(e) {
		set(this.#e, e);
	}
}, AvatarFallbackState = class e {
	static create(i) {
		return new e(i, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, i) {
		this.opts = e, this.root = i, this.attachment = attachRef(this.opts.ref);
	}
	#e = /* @__PURE__ */ user_derived(() => this.root.opts.loadingStatus.current === "loaded" ? { display: "none" } : void 0);
	get style() {
		return get$1(this.#e);
	}
	set style(e) {
		set(this.#e, e);
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
	set props(e) {
		set(this.#t, e);
	}
}, root_2$7 = /* @__PURE__ */ from_html("<div><!></div>");
function Avatar$1(e, i) {
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
		delayMs: boxWith(() => o()),
		loadingStatus: boxWith(() => s(), (e) => {
			s() !== e && (s(e), i.onLoadingStatusChange?.(e));
		}),
		id: boxWith(() => c()),
		ref: boxWith(() => l(), (e) => l(e))
	}), f = /* @__PURE__ */ user_derived(() => mergeProps(u, d.props));
	var p = comment(), m = first_child(p), h = (e) => {
		var a = comment();
		snippet(first_child(a), () => i.child, () => ({ props: get$1(f) })), append(e, a);
	}, g = (e) => {
		var a = root_2$7();
		attribute_effect(a, () => ({ ...get$1(f) })), snippet(child(a), () => i.children ?? noop), reset(a), append(e, a);
	};
	if_block(m, (e) => {
		i.child ? e(h) : e(g, -1);
	}), append(e, p), pop();
}
var root_2$6 = /* @__PURE__ */ from_html("<img/>");
function Avatar_image$1(e, i) {
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
		src: boxWith(() => i.src),
		id: boxWith(() => o()),
		ref: boxWith(() => s(), (e) => s(e)),
		crossOrigin: boxWith(() => c()),
		referrerPolicy: boxWith(() => l())
	}), f = /* @__PURE__ */ user_derived(() => mergeProps(u, d.props));
	var p = comment(), m = first_child(p), h = (e) => {
		var a = comment();
		snippet(first_child(a), () => i.child, () => ({ props: get$1(f) })), append(e, a);
	}, g = (e) => {
		var a = root_2$6();
		attribute_effect(a, () => ({
			...get$1(f),
			src: i.src
		})), replay_events(a), append(e, a);
	};
	if_block(m, (e) => {
		i.child ? e(h) : e(g, -1);
	}), append(e, p), pop();
}
var root_2$5 = /* @__PURE__ */ from_html("<span><!></span>");
function Avatar_fallback$1(e, i) {
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
		id: boxWith(() => o()),
		ref: boxWith(() => s(), (e) => s(e))
	}), u = /* @__PURE__ */ user_derived(() => mergeProps(c, l.props));
	var d = comment(), f = first_child(d), p = (e) => {
		var a = comment();
		snippet(first_child(a), () => i.child, () => ({ props: get$1(u) })), append(e, a);
	}, m = (e) => {
		var a = root_2$5();
		attribute_effect(a, () => ({ ...get$1(u) })), snippet(child(a), () => i.children ?? noop), reset(a), append(e, a);
	};
	if_block(f, (e) => {
		i.child ? e(p) : e(m, -1);
	}), append(e, d), pop();
}
var labelAttrs = createBitsAttrs({
	component: "label",
	parts: ["root"]
}), LabelRootState = class e {
	static create(i) {
		return new e(i);
	}
	opts;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = attachRef(this.opts.ref), this.onmousedown = this.onmousedown.bind(this);
	}
	onmousedown(e) {
		e.detail > 1 && e.preventDefault();
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
	set props(e) {
		set(this.#e, e);
	}
}, root_2$4 = /* @__PURE__ */ from_html("<label><!></label>");
function Label$1(e, i) {
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
		id: boxWith(() => o()),
		ref: boxWith(() => s(), (e) => s(e))
	}), u = /* @__PURE__ */ user_derived(() => mergeProps(c, l.props, { for: i.for }));
	var d = comment(), f = first_child(d), p = (e) => {
		var a = comment();
		snippet(first_child(a), () => i.child, () => ({ props: get$1(u) })), append(e, a);
	}, m = (e) => {
		var a = root_2$4();
		attribute_effect(a, () => ({
			...get$1(u),
			for: i.for
		})), snippet(child(a), () => i.children ?? noop), reset(a), append(e, a);
	};
	if_block(f, (e) => {
		i.child ? e(p) : e(m, -1);
	}), append(e, d), pop();
}
function Avatar(e, i) {
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
		let e = /* @__PURE__ */ user_derived(() => cn$1("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten", i.class));
		component(u, () => Avatar$1, (i, l) => {
			l(i, spread_props({
				"data-slot": "avatar",
				get "data-size"() {
					return s();
				},
				get class() {
					return get$1(e);
				}
			}, () => c, {
				get ref() {
					return a();
				},
				set ref(e) {
					a(e);
				},
				get loadingStatus() {
					return o();
				},
				set loadingStatus(e) {
					o(e);
				}
			}));
		});
	}
	append(e, l), pop();
}
function Avatar_image(e, i) {
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
		let e = /* @__PURE__ */ user_derived(() => cn$1("rounded-full aspect-square size-full object-cover", i.class));
		component(c, () => Avatar_image$1, (i, s) => {
			s(i, spread_props({
				"data-slot": "avatar-image",
				get class() {
					return get$1(e);
				}
			}, () => o, {
				get ref() {
					return a();
				},
				set ref(e) {
					a(e);
				}
			}));
		});
	}
	append(e, s), pop();
}
function Avatar_fallback(e, i) {
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
		let e = /* @__PURE__ */ user_derived(() => cn$1("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", i.class));
		component(c, () => Avatar_fallback$1, (i, s) => {
			s(i, spread_props({
				"data-slot": "avatar-fallback",
				get class() {
					return get$1(e);
				}
			}, () => o, {
				get ref() {
					return a();
				},
				set ref(e) {
					a(e);
				}
			}));
		});
	}
	append(e, s), pop();
}
var root$15 = /* @__PURE__ */ from_html("<span><!></span>");
function Avatar_badge(e, i) {
	push(i, !0);
	let a = prop(i, "ref", 15, null), o = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var s = root$15();
	attribute_effect(s, (e) => ({
		"data-slot": "avatar-badge",
		class: e,
		...o
	}), [() => cn$1("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", i.class)]), snippet(child(s), () => i.children ?? noop), reset(s), bind_this(s, (e) => a(e), () => a()), append(e, s), pop();
}
var root_1$4 = /* @__PURE__ */ from_html("<!> <!> <!>", 1);
function ChannelAvatar(e, i) {
	let a = prop(i, "fallbackText", 3, "Channel Logo");
	Avatar(e, {
		class: "rounded-lg",
		children: (e, o) => {
			var s = root_1$4(), c = first_child(s);
			Avatar_image(c, {
				get src() {
					return i.imgSrc;
				},
				get alt() {
					return a();
				}
			});
			var l = sibling(c, 2), u = (e) => {
				{
					let a = /* @__PURE__ */ user_derived(() => i.isConnected ? "bg-green-500" : "bg-red-500");
					Avatar_badge(e, { get class() {
						return get$1(a);
					} });
				}
			};
			if_block(l, (e) => {
				typeof i.isConnected == "boolean" && e(u);
			}), Avatar_fallback(sibling(l, 2), {
				children: (e, i) => {
					next();
					var o = text();
					template_effect(() => set_text(o, a())), append(e, o);
				},
				$$slots: { default: !0 }
			}), append(e, s);
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
function getGlobalConfig(e) {
	return !e && !store$4 ? DEFAULT_CONFIG : {
		lang: e?.lang ?? store$4?.lang,
		message: e?.message,
		abortEarly: e?.abortEarly ?? store$4?.abortEarly,
		abortPipeEarly: e?.abortPipeEarly ?? store$4?.abortPipeEarly
	};
}
var store$3;
/* @__NO_SIDE_EFFECTS__ */
function getGlobalMessage(e) {
	return store$3?.get(e);
}
var store$2;
/* @__NO_SIDE_EFFECTS__ */
function getSchemaMessage(e) {
	return store$2?.get(e);
}
var store$1;
/* @__NO_SIDE_EFFECTS__ */
function getSpecificMessage(e, i) {
	return store$1?.get(e)?.get(i);
}
/* @__NO_SIDE_EFFECTS__ */
function _stringify(e) {
	let i = typeof e;
	return i === "string" ? `"${e}"` : i === "number" || i === "bigint" || i === "boolean" ? `${e}` : i === "object" || i === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : i;
}
function _addIssue(e, i, a, o, s) {
	let c = s && "input" in s ? s.input : a.value, l = s?.expected ?? e.expects ?? null, u = s?.received ?? /* @__PURE__ */ _stringify(c), d = {
		kind: e.kind,
		type: e.type,
		input: c,
		expected: l,
		received: u,
		message: `Invalid ${i}: ${l ? `Expected ${l} but r` : "R"}eceived ${u}`,
		requirement: e.requirement,
		path: s?.path,
		issues: s?.issues,
		lang: o.lang,
		abortEarly: o.abortEarly,
		abortPipeEarly: o.abortPipeEarly
	}, f = e.kind === "schema", p = s?.message ?? e.message ?? /* @__PURE__ */ getSpecificMessage(e.reference, d.lang) ?? (f ? /* @__PURE__ */ getSchemaMessage(d.lang) : null) ?? o.message ?? /* @__PURE__ */ getGlobalMessage(d.lang);
	p !== void 0 && (d.message = typeof p == "function" ? p(d) : p), f && (a.typed = !1), a.issues ? a.issues.push(d) : a.issues = [d];
}
var _standardCache = /* @__PURE__ */ new WeakMap();
/* @__NO_SIDE_EFFECTS__ */
function _getStandardProps(e) {
	let i = _standardCache.get(e);
	return i || (i = {
		version: 1,
		vendor: "valibot",
		validate(i) {
			return e["~run"]({ value: i }, /* @__PURE__ */ getGlobalConfig());
		}
	}, _standardCache.set(e, i)), i;
}
/* @__NO_SIDE_EFFECTS__ */
function maxLength(e, i) {
	return {
		kind: "validation",
		type: "max_length",
		reference: maxLength,
		async: !1,
		expects: `<=${e}`,
		requirement: e,
		message: i,
		"~run"(e, i) {
			return e.typed && e.value.length > this.requirement && _addIssue(this, "length", e, i, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function minLength(e, i) {
	return {
		kind: "validation",
		type: "min_length",
		reference: minLength,
		async: !1,
		expects: `>=${e}`,
		requirement: e,
		message: i,
		"~run"(e, i) {
			return e.typed && e.value.length < this.requirement && _addIssue(this, "length", e, i, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function regex(e, i) {
	return {
		kind: "validation",
		type: "regex",
		reference: regex,
		async: !1,
		expects: `${e}`,
		requirement: e,
		message: i,
		"~run"(e, i) {
			return e.typed && !this.requirement.test(e.value) && _addIssue(this, "format", e, i), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function string(e) {
	return {
		kind: "schema",
		type: "string",
		reference: string,
		expects: "string",
		async: !1,
		message: e,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(e, i) {
			return typeof e.value == "string" ? e.typed = !0 : _addIssue(this, "type", e, i), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function pipe(...e) {
	return {
		...e[0],
		pipe: e,
		get "~standard"() {
			return /* @__PURE__ */ _getStandardProps(this);
		},
		"~run"(i, a) {
			for (let o of e) if (o.kind !== "metadata") {
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
function safeParse(e, i, a) {
	let o = e["~run"]({ value: i }, /* @__PURE__ */ getGlobalConfig(a));
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
var root$12 = /* @__PURE__ */ from_html("<div><!></div>");
function Field(e, i) {
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
	var c = root$12();
	attribute_effect(c, (e) => ({
		role: "group",
		"data-slot": "field",
		"data-orientation": o(),
		class: e,
		...s
	}), [() => cn$1(fieldVariants({ orientation: o() }), i.class)]), snippet(child(c), () => i.children ?? noop), reset(c), bind_this(c, (e) => a(e), () => a()), append(e, c), pop();
}
var root$9 = /* @__PURE__ */ from_html("<div><!></div>");
function Field_group(e, i) {
	push(i, !0);
	let a = prop(i, "ref", 15, null), o = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var s = root$9();
	attribute_effect(s, (e) => ({
		"data-slot": "field-group",
		class: e,
		...o
	}), [() => cn$1("gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col", i.class)]), snippet(child(s), () => i.children ?? noop), reset(s), bind_this(s, (e) => a(e), () => a()), append(e, s), pop();
}
function Label(e, i) {
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
		let e = /* @__PURE__ */ user_derived(() => cn$1("gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed", i.class));
		component(c, () => Label$1, (i, s) => {
			s(i, spread_props({
				"data-slot": "label",
				get class() {
					return get$1(e);
				}
			}, () => o, {
				get ref() {
					return a();
				},
				set ref(e) {
					a(e);
				}
			}));
		});
	}
	append(e, s), pop();
}
var root_1$1 = /* @__PURE__ */ from_html("<input/>"), root_2$3 = /* @__PURE__ */ from_html("<input/>");
function Input(e, i) {
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
	var u = comment(), d = first_child(u), f = (e) => {
		var u = root_1$1();
		attribute_effect(u, (e) => ({
			"data-slot": c(),
			class: e,
			type: "file",
			...l
		}), [() => cn$1("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", i.class)], void 0, void 0, void 0, !0), bind_this(u, (e) => a(e), () => a()), bind_files(u, s), bind_value(u, o), append(e, u);
	}, p = (e) => {
		var s = root_2$3();
		attribute_effect(s, (e) => ({
			"data-slot": c(),
			class: e,
			type: i.type,
			...l
		}), [() => cn$1("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", i.class)], void 0, void 0, void 0, !0), bind_this(s, (e) => a(e), () => a()), bind_value(s, o), append(e, s);
	};
	if_block(d, (e) => {
		i.type === "file" ? e(f) : e(p, -1);
	}), append(e, u), pop();
}
const httpGet = async (e) => fetch(e), httpPostUrlEncodedForm = async (e, i) => fetch(e, {
	method: "POST",
	redirect: "manual",
	credentials: "include",
	headers: { "Content-Type": "application/x-www-form-urlencoded" },
	body: i
});
var submitSocketLogin = async (e) => new Promise((i, o) => {
	socketClient.once("login", (e) => {
		if (e.success) {
			i(e.name);
			return;
		}
		o(e.error);
	}), socketClient.emit("login", e);
}), listenSocketRank = async () => new Promise((e) => {
	socketClient.once("rank", e);
}), submitHTTPLogin = async (e) => {
	await httpPostUrlEncodedForm(new URL("/login", window.location.origin), new URLSearchParams(e));
	let i = await (await httpGet(new URL(window.location.href))).text(), a = new DOMParser().parseFromString(i, "text/html").querySelector("input[name=\"_csrf\"]");
	if (!a) {
		console.warn("login response missing csrf value");
		return;
	}
	let o = a.value;
	pageStore.updateCSRF(o);
}, submitHTTPLogout = async (e) => {
	await httpPostUrlEncodedForm(new URL("/logout", window.location.origin), new URLSearchParams(e));
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
};
var linear = (e) => e;
function fade(e, { delay: i = 0, duration: a = 400, easing: o = linear } = {}) {
	let s = +getComputedStyle(e).opacity;
	return {
		delay: i,
		duration: a,
		easing: o,
		css: (e) => `opacity: ${e * s}`
	};
}
var camelToKebab = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function createHugeiconSingleton(e, i) {
	let a = (e, a) => {
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
			e.setAttribute(camelToKebab(i), String(a));
		}), e.innerHTML = "", h.forEach(([i, a]) => {
			let o = document.createElementNS("http://www.w3.org/2000/svg", i), s = { ...a };
			g !== void 0 && (s["stroke-width"] = g, s.stroke = "currentColor"), Object.entries(s).forEach(([e, i]) => {
				o.setAttribute(camelToKebab(e), String(i));
			}), e.appendChild(o);
		});
	};
	return { render(e, i) {
		return a(e, i), {
			update(i) {
				a(e, i);
			},
			destroy() {
				e.innerHTML = "";
			}
		};
	} };
}
var root$4 = /* @__PURE__ */ from_svg("<svg></svg>");
function HugeiconsIcon(e, i) {
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
	var _ = root$4();
	attribute_effect(_, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		width: a(),
		height: a(),
		viewBox: "0 0 24 24",
		fill: "none",
		class: get$1(f),
		...d
	})), bind_this(_, (e) => p = e, () => p), append(e, _), pop();
}
var SK = [
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
}]], root_1 = /* @__PURE__ */ from_html("<span><!></span>"), root_2$2 = /* @__PURE__ */ from_html("<span><!></span>"), root_3 = /* @__PURE__ */ from_html("<span><!></span>"), root$3 = /* @__PURE__ */ from_html("<div><!></div>");
function AuthAvatar(e, i) {
	var a = root$3(), o = child(a), s = (e) => {
		var i = root_1();
		HugeiconsIcon(child(i), {
			get icon() {
				return SK;
			},
			class: "size-5 animate-spin",
			role: "status",
			"aria-label": "Loading"
		}), reset(i), transition(3, i, () => fade, () => ({ duration: 250 })), append(e, i);
	}, c = (e) => {
		var i = root_2$2();
		HugeiconsIcon(child(i), {
			get icon() {
				return TZr;
			},
			class: "size-5"
		}), reset(i), transition(3, i, () => fade, () => ({ duration: 250 })), append(e, i);
	}, l = (e) => {
		var i = root_3();
		HugeiconsIcon(child(i), {
			get icon() {
				return rZr;
			},
			class: "size-5"
		}), reset(i), transition(3, i, () => fade, () => ({ duration: 250 })), append(e, i);
	};
	if_block(o, (e) => {
		i.isLoading ? e(s) : i.isGuest ? e(c, 1) : e(l, -1);
	}), reset(a), append(e, a);
}
var usernameSchema = /* @__PURE__ */ pipe(/* @__PURE__ */ string(), /* @__PURE__ */ minLength(1, "Min 1 character"), /* @__PURE__ */ maxLength(20, "Max 20 characters"), /* @__PURE__ */ regex(/^[A-Za-zА-Яа-я0-9_-]+$/, "Only letters, numbers, -, or _")), passwordSchema = /* @__PURE__ */ pipe(/* @__PURE__ */ string(), /* @__PURE__ */ maxLength(100, "Max 100 characters")), root_2$1 = /* @__PURE__ */ from_html("<!> <!> <!> <!>", 1), root$2 = /* @__PURE__ */ from_html("<div class=\"w-full max-w-md ml-auto\"><form><!></form></div>");
function LoginForm(e, i) {
	push(i, !0);
	let a = /* @__PURE__ */ state(!1), o = /* @__PURE__ */ state(""), s = /* @__PURE__ */ user_derived(() => /* @__PURE__ */ safeParse(usernameSchema, get$1(o))), c = /* @__PURE__ */ user_derived(() => get$1(s).success), l = /* @__PURE__ */ user_derived(() => get$1(o) !== "" && !get$1(c)), u = /* @__PURE__ */ user_derived(() => get$1(s).success ? "" : get$1(s).issues.map((e) => e.message).join(", ")), d = /* @__PURE__ */ state(""), f = /* @__PURE__ */ user_derived(() => !get$1(c) || get$1(a)), p = /* @__PURE__ */ user_derived(() => /* @__PURE__ */ safeParse(passwordSchema, get$1(d))), m = /* @__PURE__ */ user_derived(() => get$1(p).success), h = /* @__PURE__ */ user_derived(() => get$1(d) !== "" && !get$1(m)), g = /* @__PURE__ */ user_derived(() => get$1(p).success ? "" : get$1(p).issues.map((e) => e.message).join(", ")), _ = /* @__PURE__ */ user_derived(() => get$1(a) || !get$1(c) || get$1(c) && !get$1(m)), v = async (e) => {
		if (e.preventDefault(), !get$1(_)) try {
			set(a, !0), await new Promise((e) => setTimeout(e, 500)), await login(get$1(o), get$1(d));
		} catch (e) {
			console.error(e);
		} finally {
			set(a, !1);
		}
	};
	var y = root$2(), b = child(y);
	Field_group(child(b), {
		children: (e, i) => {
			Field(e, {
				orientation: "responsive",
				class: "flex flex-row items-center justify-end selection:bg-primary",
				children: (e, i) => {
					var s = root_2$1(), c = first_child(s);
					{
						let e = /* @__PURE__ */ user_derived(() => get$1(d) === "");
						AuthAvatar(c, {
							get isLoading() {
								return get$1(a);
							},
							get isGuest() {
								return get$1(e);
							}
						});
					}
					var p = sibling(c, 2);
					{
						let e = /* @__PURE__ */ user_derived(() => get$1(l) ? get$1(u) : "");
						Input(p, {
							required: !0,
							id: "login-username-input",
							type: "text",
							autocomplete: "name",
							placeholder: "Username",
							get "aria-invalid"() {
								return get$1(l);
							},
							get title() {
								return get$1(e);
							},
							get disabled() {
								return get$1(a);
							},
							get value() {
								return get$1(o);
							},
							set value(e) {
								set(o, e, !0);
							}
						});
					}
					var m = sibling(p, 2);
					{
						let e = /* @__PURE__ */ user_derived(() => get$1(h) ? get$1(g) : "");
						Input(m, {
							name: "password",
							type: "password",
							autocomplete: "current-password",
							placeholder: "Password",
							get "aria-invalid"() {
								return get$1(h);
							},
							get title() {
								return get$1(e);
							},
							get disabled() {
								return get$1(f);
							},
							get value() {
								return get$1(d);
							},
							set value(e) {
								set(d, e, !0);
							}
						});
					}
					Button(sibling(m, 2), {
						type: "submit",
						get disabled() {
							return get$1(_);
						},
						children: (e, i) => {
							next(), append(e, text("Login"));
						},
						$$slots: { default: !0 }
					}), append(e, s);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), reset(b), reset(y), event("submit", b, v), append(e, y), pop();
}
var root_2 = /* @__PURE__ */ from_html("<!> <!> <!>", 1), root$1 = /* @__PURE__ */ from_html("<div class=\"w-full max-w-md ml-auto\"><form><!></form></div>");
function LogoutForm(e, i) {
	push(i, !0);
	let a = () => store_get(clientStore, "$clientStore", o), [o, s] = setup_stores(), c = /* @__PURE__ */ state(!1), l = /* @__PURE__ */ user_derived(() => a().rank > 0), u = async (e) => {
		if (e.preventDefault(), !get$1(c)) try {
			set(c, !0), await new Promise((e) => setTimeout(e, 500)), await logout();
		} catch (e) {
			console.error(e);
		} finally {
			set(c, !1);
		}
	};
	var d = root$1(), f = child(d);
	Field_group(child(f), {
		children: (e, i) => {
			Field(e, {
				orientation: "responsive",
				class: "flex flex-row items-center justify-end selection:bg-primary",
				children: (e, i) => {
					var o = root_2(), s = first_child(o);
					{
						let e = /* @__PURE__ */ user_derived(() => !get$1(l));
						AuthAvatar(s, {
							get isLoading() {
								return get$1(c);
							},
							get isGuest() {
								return get$1(e);
							}
						});
					}
					var u = sibling(s, 2);
					Label(u, {
						class: "flex-none w-auto",
						children: (e, i) => {
							next();
							var o = text();
							template_effect(() => set_text(o, a().name)), append(e, o);
						},
						$$slots: { default: !0 }
					}), Button(sibling(u, 2), {
						type: "submit",
						get disabled() {
							return get$1(c);
						},
						children: (e, i) => {
							next(), append(e, text("Logout"));
						},
						$$slots: { default: !0 }
					}), append(e, o);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), reset(f), reset(d), event("submit", f, u), append(e, d), pop(), s();
}
function AuthForm(e, i) {
	var a = comment(), o = first_child(a), s = (e) => {
		LogoutForm(e, {});
	}, c = (e) => {
		LoginForm(e, {});
	};
	if_block(o, (e) => {
		i.isLoggedIn ? e(s) : e(c, -1);
	}), append(e, a);
}
var logoImgSrc = new URL("dist/logo.png", window.BASE_URL).toString(), root = /* @__PURE__ */ from_html("<header class=\"sticky w-full flex flex-row items-center justify-start h-15 mx-auto top-0 z-50 border-b bg-background md:bg-background/80 md:backdrop-blur-md\"><!> <div class=\"w-full flex flex-row items-center justify-between pr-6 py-5\"><!> <!></div></header>");
function Header(i, a) {
	push(a, !1);
	let o = () => store_get(appStore, "$appStore", l), s = () => store_get(socketStore, "$socketStore", l), c = () => store_get(clientStore, "$clientStore", l), [l, u] = setup_stores();
	init$1();
	var d = root(), f = child(d), p = (e) => {
		VersionBadge(e, { get version() {
			return o().version;
		} });
	};
	if_block(f, (e) => {
		o().version && e(p);
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
	var g = sibling(h, 2), _ = (e) => {
		AuthForm(e, { get isLoggedIn() {
			return c().logged_in;
		} });
	}, v = (i) => {
		Button(i, {
			get onclick() {
				return submitSocketConnect;
			},
			children: (e, i) => {
				next(), append(e, text("Reconnect"));
			},
			$$slots: { default: !0 }
		});
	};
	if_block(g, (e) => {
		s().connected ? e(_) : e(v, -1);
	}), reset(m), reset(d), append(i, d), pop(), u();
}
var upgradeBody = () => {
	document.body.classList.add("dark"), document.body.classList.add("override-theme");
}, upgradeNavbar = async () => {
	let e = document.getElementsByTagName("nav");
	if (!e) throw Error("no nav element found");
	if (e.length < 1) throw Error("no nav elements found");
	let [i] = e;
	if (!i) throw Error("empty nav collection");
	let a = i.parentElement;
	if (!a) throw Error("no nav parent found");
	let o = a.childNodes.length > 1 && a.firstChild;
	i.remove(), mount(Header, {
		target: a,
		anchor: o ? a.firstChild : void 0
	});
};
const upgradeLegacyElements = async () => {
	upgradeBody(), await upgradeNavbar(), await tick();
}, init = async () => {
	let e = initStores();
	try {
		await initOverrides(), await upgradeLegacyElements();
	} catch (i) {
		throw e(), i;
	}
};
export { init };
