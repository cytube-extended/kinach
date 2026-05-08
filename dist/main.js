const submitSocketConnect = async () => new Promise((t) => {
	socketClient.once("connect", () => {
		t();
	}), socketClient.connect();
}), submitSocketDisconnect = async () => new Promise((t, r) => {
	socketClient.once("disconnect", (i) => {
		if (i === "io client disconnect") {
			t();
			return;
		}
		r(i);
	}), socketClient.disconnect();
}), socketClient = window.socket;
var is_array = Array.isArray, index_of = Array.prototype.indexOf, includes = Array.prototype.includes, array_from = Array.from;
Object.keys;
var define_property = Object.defineProperty, get_descriptor = Object.getOwnPropertyDescriptor, get_descriptors = Object.getOwnPropertyDescriptors, object_prototype = Object.prototype, array_prototype = Array.prototype, get_prototype_of = Object.getPrototypeOf, is_extensible = Object.isExtensible;
function is_function(t) {
	return typeof t == "function";
}
const noop$2 = () => {};
function run(t) {
	return t();
}
function run_all(t) {
	for (var r = 0; r < t.length; r++) t[r]();
}
function deferred() {
	var t, r;
	return {
		promise: new Promise((i, a) => {
			t = i, r = a;
		}),
		resolve: t,
		reject: r
	};
}
const CLEAN = 1024, DIRTY = 2048, MAYBE_DIRTY = 4096, INERT = 8192, REACTION_RAN = 32768, DESTROYING = 1 << 25, EFFECT_TRANSPARENT = 65536, EFFECT_PRESERVED = 1 << 19, USER_EFFECT = 1 << 20, EFFECT_OFFSCREEN = 1 << 25, WAS_MARKED = 65536, REACTION_IS_UPDATING = 1 << 21, ERROR_VALUE = 1 << 23, STATE_SYMBOL = Symbol("$state"), LEGACY_PROPS = Symbol("legacy props"), LOADING_ATTR_SYMBOL = Symbol(""), STALE_REACTION = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), IS_XHTML = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function equals(t) {
	return t === this.v;
}
function safe_not_equal(t, r) {
	return t == t ? t !== r || typeof t == "object" && !!t || typeof t == "function" : r == r;
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
function each_key_duplicate(t, r, i) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
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
function snapshot(t, r = !1, i = !1) {
	return clone(t, /* @__PURE__ */ new Map(), "", empty, null, i);
}
function clone(t, r, i, o, s = null, c = !1) {
	if (typeof t == "object" && t) {
		var l = r.get(t);
		if (l !== void 0) return l;
		if (t instanceof Map) return new Map(t);
		if (t instanceof Set) return new Set(t);
		if (is_array(t)) {
			var u = Array(t.length);
			r.set(t, u), s !== null && r.set(s, u);
			for (var d = 0; d < t.length; d += 1) {
				var p = t[d];
				d in t && (u[d] = clone(p, r, i, o, null, c));
			}
			return u;
		}
		if (get_prototype_of(t) === object_prototype) {
			u = {}, r.set(t, u), s !== null && r.set(s, u);
			for (var h of Object.keys(t)) u[h] = clone(t[h], r, i, o, null, c);
			return u;
		}
		if (t instanceof Date) return structuredClone(t);
		if (typeof t.toJSON == "function" && !c) return clone(t.toJSON(), r, i, o, t);
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
function setContext(t, r) {
	return get_or_init_context_map("setContext").set(t, r), r;
}
function hasContext(t) {
	return get_or_init_context_map("hasContext").has(t);
}
function getAllContexts() {
	return get_or_init_context_map("getAllContexts");
}
function push(t, r = !1, i) {
	component_context = {
		p: component_context,
		i: !1,
		c: null,
		e: null,
		s: t,
		x: null,
		r: active_effect,
		l: legacy_mode_flag && !r ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function pop(t) {
	var r = component_context, i = r.e;
	if (i !== null) {
		r.e = null;
		for (var a of i) create_user_effect(a);
	}
	return t !== void 0 && (r.x = t), r.i = !0, component_context = r.p, t ?? {};
}
function is_runes() {
	return !legacy_mode_flag || component_context !== null && component_context.l === null;
}
function get_or_init_context_map(t) {
	return component_context === null && lifecycle_outside_component(t), component_context.c ??= new Map(get_parent_context(component_context) || void 0);
}
function get_parent_context(t) {
	let r = t.p;
	for (; r !== null;) {
		let t = r.c;
		if (t !== null) return t;
		r = r.p;
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
		var r = micro_tasks;
		queueMicrotask(() => {
			r === micro_tasks && run_micro_tasks();
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
		for (var r = t, i = hydrate_node; r--;) i = /* @__PURE__ */ get_next_sibling(i);
		hydrate_node = i;
	}
}
function skip_nodes(t = !0) {
	for (var r = 0, i = hydrate_node;;) {
		if (i.nodeType === 8) {
			var a = i.data;
			if (a === "]") {
				if (r === 0) return i;
				--r;
			} else (a === "[" || a === "[!" || a[0] === "[" && !isNaN(Number(a.slice(1)))) && (r += 1);
		}
		var o = /* @__PURE__ */ get_next_sibling(i);
		t && i.remove(), i = o;
	}
}
function read_hydration_instruction(t) {
	if (!t || t.nodeType !== 8) throw hydration_mismatch(), HYDRATION_ERROR;
	return t.data;
}
function proxy(t) {
	if (typeof t != "object" || !t || STATE_SYMBOL in t) return t;
	let r = get_prototype_of(t);
	if (r !== object_prototype && r !== array_prototype) return t;
	var i = /* @__PURE__ */ new Map(), o = is_array(t), s = /* @__PURE__ */ state(0), c = null, l = update_version, d = (t) => {
		if (update_version === l) return t();
		var r = active_reaction, i = update_version;
		set_active_reaction(null), set_update_version(l);
		var a = t();
		return set_active_reaction(r), set_update_version(i), a;
	};
	return o && i.set("length", /* @__PURE__ */ state(t.length, c)), new Proxy(t, {
		defineProperty(t, r, a) {
			(!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && state_descriptors_fixed();
			var o = i.get(r);
			return o === void 0 ? d(() => {
				var t = /* @__PURE__ */ state(a.value, c);
				return i.set(r, t), t;
			}) : set(o, a.value, !0), !0;
		},
		deleteProperty(t, r) {
			var a = i.get(r);
			if (a === void 0) {
				if (r in t) {
					let t = d(() => /* @__PURE__ */ state(UNINITIALIZED, c));
					i.set(r, t), increment(s);
				}
			} else set(a, UNINITIALIZED), increment(s);
			return !0;
		},
		get(r, a, o) {
			if (a === STATE_SYMBOL) return t;
			var s = i.get(a), l = a in r;
			if (s === void 0 && (!l || get_descriptor(r, a)?.writable) && (s = d(() => /* @__PURE__ */ state(proxy(l ? r[a] : UNINITIALIZED), c)), i.set(a, s)), s !== void 0) {
				var f = get$3(s);
				return f === UNINITIALIZED ? void 0 : f;
			}
			return Reflect.get(r, a, o);
		},
		getOwnPropertyDescriptor(t, r) {
			var a = Reflect.getOwnPropertyDescriptor(t, r);
			if (a && "value" in a) {
				var o = i.get(r);
				o && (a.value = get$3(o));
			} else if (a === void 0) {
				var s = i.get(r), c = s?.v;
				if (s !== void 0 && c !== UNINITIALIZED) return {
					enumerable: !0,
					configurable: !0,
					value: c,
					writable: !0
				};
			}
			return a;
		},
		has(t, r) {
			if (r === STATE_SYMBOL) return !0;
			var a = i.get(r), o = a !== void 0 && a.v !== UNINITIALIZED || Reflect.has(t, r);
			return (a !== void 0 || active_effect !== null && (!o || get_descriptor(t, r)?.writable)) && (a === void 0 && (a = d(() => /* @__PURE__ */ state(o ? proxy(t[r]) : UNINITIALIZED, c)), i.set(r, a)), get$3(a) === UNINITIALIZED) ? !1 : o;
		},
		set(t, r, a, l) {
			var f = i.get(r), p = r in t;
			if (o && r === "length") for (var m = a; m < f.v; m += 1) {
				var h = i.get(m + "");
				h === void 0 ? m in t && (h = d(() => /* @__PURE__ */ state(UNINITIALIZED, c)), i.set(m + "", h)) : set(h, UNINITIALIZED);
			}
			if (f === void 0) (!p || get_descriptor(t, r)?.writable) && (f = d(() => /* @__PURE__ */ state(void 0, c)), set(f, proxy(a)), i.set(r, f));
			else {
				p = f.v !== UNINITIALIZED;
				var g = d(() => proxy(a));
				set(f, g);
			}
			var _ = Reflect.getOwnPropertyDescriptor(t, r);
			if (_?.set && _.set.call(l, a), !p) {
				if (o && typeof r == "string") {
					var v = i.get("length"), y = Number(r);
					Number.isInteger(y) && y >= v.v && set(v, y + 1);
				}
				increment(s);
			}
			return !0;
		},
		ownKeys(t) {
			get$3(s);
			var r = Reflect.ownKeys(t).filter((t) => {
				var r = i.get(t);
				return r === void 0 || r.v !== UNINITIALIZED;
			});
			for (var [a, o] of i) o.v !== UNINITIALIZED && !(a in t) && r.push(a);
			return r;
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
function is$1(t, r) {
	return Object.is(get_proxied_value(t), get_proxied_value(r));
}
var $window, is_firefox, first_child_getter, next_sibling_getter;
function init_operations() {
	if ($window === void 0) {
		$window = window, document, is_firefox = /Firefox/.test(navigator.userAgent);
		var t = Element.prototype, r = Node.prototype, i = Text.prototype;
		first_child_getter = get_descriptor(r, "firstChild").get, next_sibling_getter = get_descriptor(r, "nextSibling").get, is_extensible(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), is_extensible(i) && (i.__t = void 0);
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
function child(t, r) {
	if (!hydrating) return /* @__PURE__ */ get_first_child(t);
	var i = /* @__PURE__ */ get_first_child(hydrate_node);
	if (i === null) i = hydrate_node.appendChild(create_text());
	else if (r && i.nodeType !== 3) {
		var a = create_text();
		return i?.before(a), set_hydrate_node(a), a;
	}
	return r && merge_text_nodes(i), set_hydrate_node(i), i;
}
function first_child(t, r = !1) {
	if (!hydrating) {
		var i = /* @__PURE__ */ get_first_child(t);
		return i instanceof Comment && i.data === "" ? /* @__PURE__ */ get_next_sibling(i) : i;
	}
	if (r) {
		if (hydrate_node?.nodeType !== 3) {
			var a = create_text();
			return hydrate_node?.before(a), set_hydrate_node(a), a;
		}
		merge_text_nodes(hydrate_node);
	}
	return hydrate_node;
}
function sibling(t, r = 1, i = !1) {
	let a = hydrating ? hydrate_node : t;
	for (var o; r--;) o = a, a = /* @__PURE__ */ get_next_sibling(a);
	if (!hydrating) return a;
	if (i) {
		if (a?.nodeType !== 3) {
			var s = create_text();
			return a === null ? o?.after(s) : a.before(s), set_hydrate_node(s), s;
		}
		merge_text_nodes(a);
	}
	return set_hydrate_node(a), a;
}
function clear_text_content(t) {
	t.textContent = "";
}
function should_defer_append() {
	return !1;
}
function create_element(t, r, i) {
	let a = i ? { is: i } : void 0;
	return document.createElementNS(r ?? "http://www.w3.org/1999/xhtml", t, a);
}
function merge_text_nodes(t) {
	if (t.nodeValue.length < 65536) return;
	let r = t.nextSibling;
	for (; r !== null && r.nodeType === 3;) r.remove(), t.nodeValue += r.nodeValue, r = t.nextSibling;
}
function handle_error(t) {
	var r = active_effect;
	if (r === null) return active_reaction.f |= ERROR_VALUE, t;
	if (!(r.f & 32768) && !(r.f & 4)) throw t;
	invoke_error_boundary(t, r);
}
function invoke_error_boundary(t, r) {
	for (; r !== null;) {
		if (r.f & 128) {
			if (!(r.f & 32768)) throw t;
			try {
				r.b.error(t);
				return;
			} catch (r) {
				t = r;
			}
		}
		r = r.parent;
	}
	throw t;
}
var STATUS_MASK = ~(MAYBE_DIRTY | 3072);
function set_signal_status(t, r) {
	t.f = t.f & STATUS_MASK | r;
}
function update_derived_status(t) {
	t.f & 512 || t.deps === null ? set_signal_status(t, CLEAN) : set_signal_status(t, MAYBE_DIRTY);
}
function clear_marked(t) {
	if (t !== null) for (let r of t) !(r.f & 2) || !(r.f & 65536) || (r.f ^= WAS_MARKED, clear_marked(r.deps));
}
function defer_effect(t, r, i) {
	t.f & 2048 ? r.add(t) : t.f & 4096 && i.add(t), clear_marked(t.deps), set_signal_status(t, CLEAN);
}
function subscribe_to_store(t, r, i) {
	if (t == null) return r(void 0), i && i(void 0), noop$2;
	let a = untrack(() => t.subscribe(r, i));
	return a.unsubscribe ? () => a.unsubscribe() : a;
}
var subscriber_queue = [];
function writable(t, r = noop$2) {
	let i = null, a = /* @__PURE__ */ new Set();
	function o(r) {
		if (safe_not_equal(t, r) && (t = r, i)) {
			let r = !subscriber_queue.length;
			for (let r of a) r[1](), subscriber_queue.push(r, t);
			if (r) {
				for (let t = 0; t < subscriber_queue.length; t += 2) subscriber_queue[t][0](subscriber_queue[t + 1]);
				subscriber_queue.length = 0;
			}
		}
	}
	function s(r) {
		o(r(t));
	}
	function c(c, l = noop$2) {
		let u = [c, l];
		return a.add(u), a.size === 1 && (i = r(o, s) || noop$2), c(t), () => {
			a.delete(u), a.size === 0 && i && (i(), i = null);
		};
	}
	return {
		set: o,
		update: s,
		subscribe: c
	};
}
function get(t) {
	let r;
	return subscribe_to_store(t, (t) => r = t)(), r;
}
let legacy_is_updating_store = !1;
var is_store_binding = !1, IS_UNMOUNTED = Symbol();
function store_get(t, r, i) {
	let a = i[r] ??= {
		store: null,
		source: /* @__PURE__ */ mutable_source(void 0),
		unsubscribe: noop$2
	};
	if (a.store !== t && !(IS_UNMOUNTED in i)) if (a.unsubscribe(), a.store = t ?? null, t == null) a.source.v = void 0, a.unsubscribe = noop$2;
	else {
		var o = !0;
		a.unsubscribe = subscribe_to_store(t, (t) => {
			o ? a.source.v = t : set(a.source, t);
		}), o = !1;
	}
	return t && IS_UNMOUNTED in i ? get(t) : get$3(a.source);
}
function setup_stores() {
	let t = {};
	function r() {
		teardown(() => {
			for (var r in t) t[r].unsubscribe();
			define_property(t, IS_UNMOUNTED, {
				enumerable: !1,
				value: !0
			});
		});
	}
	return [t, r];
}
function update_with_flag(t, r) {
	legacy_is_updating_store = !0;
	try {
		t.set(r);
	} finally {
		legacy_is_updating_store = !1;
	}
}
function store_mutate(t, r, i) {
	return update_with_flag(t, i), r;
}
function capture_store_binding(t) {
	var r = is_store_binding;
	try {
		return is_store_binding = !1, [t(), is_store_binding];
	} finally {
		is_store_binding = r;
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
		for (let i of this.#p) for (let a of i.#i.keys()) {
			for (var t = !1, r = a; r.parent !== null;) {
				if (this.#u.has(r)) {
					t = !0;
					break;
				}
				r = r.parent;
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
	unskip_effect(t, r = (t) => this.schedule(t)) {
		var i = this.#u.get(t);
		if (i) {
			this.#u.delete(t);
			for (var a of i.d) set_signal_status(a, DIRTY), r(a);
			for (a of i.m) set_signal_status(a, MAYBE_DIRTY), r(a);
		}
		this.#d.add(t);
	}
	#g() {
		if (flush_count++ > 1e3 && (batches.delete(this), infinite_loop_guard()), !this.#m()) {
			for (let t of this.#c) this.#l.delete(t), set_signal_status(t, DIRTY), this.schedule(t);
			for (let t of this.#l) set_signal_status(t, MAYBE_DIRTY), this.schedule(t);
		}
		let r = this.#o;
		this.#o = [], this.apply();
		var i = collected_effects = [], a = [], o = legacy_updates = [];
		for (let t of r) try {
			this.#_(t, i, a);
		} catch (r) {
			throw reset_all(t), r;
		}
		if (current_batch = null, o.length > 0) {
			var s = t.ensure();
			for (let t of o) s.schedule(t);
		}
		if (collected_effects = null, legacy_updates = null, this.#m() || this.#h()) {
			this.#v(a), this.#v(i);
			for (let [t, r] of this.#u) reset_branch(t, r);
		} else {
			this.#r.size === 0 && batches.delete(this), this.#c.clear(), this.#l.clear();
			for (let t of this.#e) t(this);
			this.#e.clear(), flush_queued_effects(a), flush_queued_effects(i), this.#a?.resolve();
		}
		var c = current_batch;
		if (this.#o.length > 0) {
			let t = c ??= this;
			t.#o.push(...this.#o.filter((r) => !t.#o.includes(r)));
		}
		c !== null && (batches.add(c), c.#g());
	}
	#_(t, r, i) {
		t.f ^= CLEAN;
		for (var a = t.first; a !== null;) {
			var o = a.f, s = (o & 96) != 0;
			if (!(s && o & 1024 || o & 8192 || this.#u.has(a)) && a.fn !== null) {
				s ? a.f ^= CLEAN : o & 4 ? r.push(a) : is_dirty(a) && (o & 16 && this.#l.add(a), update_effect(a));
				var c = a.first;
				if (c !== null) {
					a = c;
					continue;
				}
			}
			for (; a !== null;) {
				var l = a.next;
				if (l !== null) {
					a = l;
					break;
				}
				a = a.parent;
			}
		}
	}
	#v(t) {
		for (var r = 0; r < t.length; r += 1) defer_effect(t[r], this.#c, this.#l);
	}
	capture(t, r, i = !1) {
		t.v !== UNINITIALIZED && !this.previous.has(t) && this.previous.set(t, t.v), t.f & 8388608 || (this.current.set(t, [r, i]), batch_values?.set(t, r)), this.is_fork || (t.v = r);
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
	increment(t, r) {
		let i = this.#r.get(r) ?? 0;
		if (this.#r.set(r, i + 1), t) {
			let t = this.#i.get(r) ?? 0;
			this.#i.set(r, t + 1);
		}
	}
	decrement(t, r, i) {
		let a = this.#r.get(r) ?? 0;
		if (a === 1 ? this.#r.delete(r) : this.#r.set(r, a - 1), t) {
			let t = this.#i.get(r) ?? 0;
			t === 1 ? this.#i.delete(r) : this.#i.set(r, t - 1);
		}
		this.#f || i || (this.#f = !0, queue_micro_task(() => {
			this.#f = !1, this.flush();
		}));
	}
	transfer_effects(t, r) {
		for (let r of t) this.#c.add(r);
		for (let t of r) this.#l.add(t);
		t.clear(), r.clear();
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
			let r = current_batch = new t();
			is_processing || (batches.add(current_batch), is_flushing_sync || queue_micro_task(() => {
				current_batch === r && r.flush();
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
		for (var r = t; r.parent !== null;) {
			r = r.parent;
			var i = r.f;
			if (collected_effects !== null && r === active_effect && (active_reaction === null || !(active_reaction.f & 2)) && !legacy_is_updating_store) return;
			if (i & 96) {
				if (!(i & 1024)) return;
				r.f ^= CLEAN;
			}
		}
		this.#o.push(r);
	}
};
function flushSync(t) {
	var r = is_flushing_sync;
	is_flushing_sync = !0;
	try {
		var i;
		for (t && (current_batch !== null && !current_batch.is_fork && current_batch.flush(), i = t());;) {
			if (flush_tasks(), current_batch === null) return i;
			current_batch.flush();
		}
	} finally {
		is_flushing_sync = r;
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
	var r = t.length;
	if (r !== 0) {
		for (var i = 0; i < r;) {
			var a = t[i++];
			if (!(a.f & 24576) && is_dirty(a) && (eager_block_effects = /* @__PURE__ */ new Set(), update_effect(a), a.deps === null && a.first === null && a.nodes === null && a.teardown === null && a.ac === null && unlink_effect(a), eager_block_effects?.size > 0)) {
				old_values.clear();
				for (let t of eager_block_effects) {
					if (t.f & 24576) continue;
					let r = [t], i = t.parent;
					for (; i !== null;) eager_block_effects.has(i) && (eager_block_effects.delete(i), r.push(i)), i = i.parent;
					for (let t = r.length - 1; t >= 0; t--) {
						let i = r[t];
						i.f & 24576 || update_effect(i);
					}
				}
				eager_block_effects.clear();
			}
		}
		eager_block_effects = null;
	}
}
function mark_effects(t, r, i, a) {
	if (!i.has(t) && (i.add(t), t.reactions !== null)) for (let o of t.reactions) {
		let t = o.f;
		t & 2 ? mark_effects(o, r, i, a) : t & 4194320 && !(t & 2048) && depends_on(o, r, a) && (set_signal_status(o, DIRTY), schedule_effect(o));
	}
}
function depends_on(t, r, i) {
	let a = i.get(t);
	if (a !== void 0) return a;
	if (t.deps !== null) for (let a of t.deps) {
		if (includes.call(r, a)) return !0;
		if (a.f & 2 && depends_on(a, r, i)) return i.set(a, !0), !0;
	}
	return i.set(t, !1), !1;
}
function schedule_effect(t) {
	current_batch.schedule(t);
}
function reset_branch(t, r) {
	if (!(t.f & 32 && t.f & 1024)) {
		t.f & 2048 ? r.d.push(t) : t.f & 4096 && r.m.push(t), set_signal_status(t, CLEAN);
		for (var i = t.first; i !== null;) reset_branch(i, r), i = i.next;
	}
}
function reset_all(t) {
	set_signal_status(t, CLEAN);
	for (var r = t.first; r !== null;) reset_all(r), r = r.next;
}
function createSubscriber(t) {
	let r = 0, i = source(0), a;
	return () => {
		effect_tracking() && (get$3(i), render_effect(() => (r === 0 && (a = untrack(() => t(() => increment(i)))), r += 1, () => {
			queue_micro_task(() => {
				--r, r === 0 && (a?.(), a = void 0, increment(i));
			});
		})));
	};
}
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
function boundary(t, r, i, a) {
	new Boundary(t, r, i, a);
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
	constructor(t, r, i, a) {
		this.#e = t, this.#n = r, this.#r = (t) => {
			var r = active_effect;
			r.b = this, r.f |= 128, i(t);
		}, this.parent = active_effect.b, this.transform_error = a ?? this.parent?.transform_error ?? ((t) => t), this.#i = block(() => {
			if (hydrating) {
				let t = this.#t;
				hydrate_next();
				let r = t.data === "[!";
				if (t.data.startsWith("[?")) {
					let r = JSON.parse(t.data.slice(2));
					this.#_(r);
				} else r ? this.#v() : this.#g();
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
		let r = this.#n.failed;
		r && (this.#s = branch(() => {
			r(this.#e, () => t, () => () => {});
		}));
	}
	#v() {
		let t = this.#n.pending;
		t && (this.is_pending = !0, this.#o = branch(() => t(this.#e)), queue_micro_task(() => {
			var t = this.#c = document.createDocumentFragment(), r = create_text();
			t.append(r), this.#a = this.#x(() => branch(() => this.#r(r))), this.#u === 0 && (this.#e.before(t), this.#c = null, pause_effect(this.#o, () => {
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
				let r = this.#n.pending;
				this.#o = branch(() => r(this.#e));
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
		var r = active_effect, i = active_reaction, a = component_context;
		set_active_effect(this.#i), set_active_reaction(this.#i), set_component_context(this.#i.ctx);
		try {
			return Batch.ensure(), t();
		} catch (t) {
			return handle_error(t), null;
		} finally {
			set_active_effect(r), set_active_reaction(i), set_component_context(a);
		}
	}
	#S(t, r) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(t, r);
			return;
		}
		this.#u += t, this.#u === 0 && (this.#b(r), this.#o && pause_effect(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(t, r) {
		this.#S(t, r), this.#l += t, !(!this.#m || this.#d) && (this.#d = !0, queue_micro_task(() => {
			this.#d = !1, this.#m && internal_set(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), get$3(this.#m);
	}
	error(t) {
		if (!this.#n.onerror && !this.#n.failed) throw t;
		current_batch?.is_fork ? (this.#a && current_batch.skip_effect(this.#a), this.#o && current_batch.skip_effect(this.#o), this.#s && current_batch.skip_effect(this.#s), current_batch.on_fork_commit(() => {
			this.#C(t);
		})) : this.#C(t);
	}
	#C(t) {
		this.#a &&= (destroy_effect(this.#a), null), this.#o &&= (destroy_effect(this.#o), null), this.#s &&= (destroy_effect(this.#s), null), hydrating && (set_hydrate_node(this.#t), next(), set_hydrate_node(skip_nodes()));
		var r = this.#n.onerror;
		let i = this.#n.failed;
		var a = !1, o = !1;
		let s = () => {
			if (a) {
				svelte_boundary_reset_noop();
				return;
			}
			a = !0, o && svelte_boundary_reset_onerror(), this.#s !== null && pause_effect(this.#s, () => {
				this.#s = null;
			}), this.#x(() => {
				this.#y();
			});
		}, c = (t) => {
			try {
				o = !0, r?.(t, s), o = !1;
			} catch (t) {
				invoke_error_boundary(t, this.#i && this.#i.parent);
			}
			i && (this.#s = this.#x(() => {
				try {
					return branch(() => {
						var r = active_effect;
						r.b = this, r.f |= 128, i(this.#e, () => t, () => s);
					});
				} catch (t) {
					return invoke_error_boundary(t, this.#i.parent), null;
				}
			}));
		};
		queue_micro_task(() => {
			var r;
			try {
				r = this.transform_error(t);
			} catch (t) {
				invoke_error_boundary(t, this.#i && this.#i.parent);
				return;
			}
			typeof r == "object" && r && typeof r.then == "function" ? r.then(c, (t) => invoke_error_boundary(t, this.#i && this.#i.parent)) : c(r);
		});
	}
};
function flatten(t, r, i, a) {
	let o = is_runes() ? derived : derived_safe_equal;
	var s = t.filter((t) => !t.settled);
	if (i.length === 0 && s.length === 0) {
		a(r.map(o));
		return;
	}
	var c = active_effect, l = capture(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((t) => t.promise)) : null;
	function d(t) {
		l();
		try {
			a(t);
		} catch (t) {
			c.f & 16384 || invoke_error_boundary(t, c);
		}
		unset_context();
	}
	if (i.length === 0) {
		u.then(() => d(r.map(o)));
		return;
	}
	var f = increment_pending();
	function p() {
		Promise.all(i.map((t) => /* @__PURE__ */ async_derived(t))).then((t) => d([...r.map(o), ...t])).catch((t) => invoke_error_boundary(t, c)).finally(() => f());
	}
	u ? u.then(() => {
		l(), p(), unset_context();
	}) : p();
}
function capture() {
	var t = active_effect, r = active_reaction, i = component_context, a = current_batch;
	return function(o = !0) {
		set_active_effect(t), set_active_reaction(r), set_component_context(i), o && !(t.f & 16384) && (a?.activate(), a?.apply());
	};
}
function unset_context(t = !0) {
	set_active_effect(null), set_active_reaction(null), set_component_context(null), t && current_batch?.deactivate();
}
function increment_pending() {
	var t = active_effect, r = t.b, i = current_batch, a = r.is_rendered();
	return r.update_pending_count(1, i), i.increment(a, t), (o = !1) => {
		r.update_pending_count(-1, i), i.decrement(a, t, o);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function derived(t) {
	var r = 2 | DIRTY;
	return active_effect !== null && (active_effect.f |= EFFECT_PRESERVED), {
		ctx: component_context,
		deps: null,
		effects: null,
		equals,
		f: r,
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
function async_derived(t, r, i) {
	let a = active_effect;
	a === null && async_derived_orphan();
	var o = void 0, s = source(UNINITIALIZED), c = !active_reaction, l = /* @__PURE__ */ new Map();
	return async_effect(() => {
		var r = active_effect, i = deferred();
		o = i.promise;
		try {
			Promise.resolve(t()).then(i.resolve, i.reject).finally(unset_context);
		} catch (t) {
			i.reject(t), unset_context();
		}
		var u = current_batch;
		if (c) {
			if (r.f & 32768) var d = increment_pending();
			if (a.b.is_rendered()) l.get(u)?.reject(STALE_REACTION), l.delete(u);
			else {
				for (let t of l.values()) t.reject(STALE_REACTION);
				l.clear();
			}
			l.set(u, i);
		}
		let f = (t, i = void 0) => {
			if (d && d(i === STALE_REACTION), !(i === STALE_REACTION || r.f & 16384)) {
				if (u.activate(), i) s.f |= ERROR_VALUE, internal_set(s, i);
				else {
					s.f & 8388608 && (s.f ^= ERROR_VALUE), internal_set(s, t);
					for (let [t, r] of l) {
						if (l.delete(t), t === u) break;
						r.reject(STALE_REACTION);
					}
				}
				u.deactivate();
			}
		};
		i.promise.then(f, (t) => f(null, t || "unknown"));
	}), teardown(() => {
		for (let t of l.values()) t.reject(STALE_REACTION);
	}), new Promise((t) => {
		function r(i) {
			function a() {
				i === o ? t(s) : r(o);
			}
			i.then(a, a);
		}
		r(o);
	});
}
/* @__NO_SIDE_EFFECTS__ */
function user_derived(t) {
	let r = /* @__PURE__ */ derived(t);
	return push_reaction_value(r), r;
}
/* @__NO_SIDE_EFFECTS__ */
function derived_safe_equal(t) {
	let r = /* @__PURE__ */ derived(t);
	return r.equals = safe_equals, r;
}
function destroy_derived_effects(t) {
	var r = t.effects;
	if (r !== null) {
		t.effects = null;
		for (var i = 0; i < r.length; i += 1) destroy_effect(r[i]);
	}
}
function execute_derived(t) {
	var r, i = active_effect, a = t.parent;
	if (!is_destroying_effect && a !== null && a.f & 24576) return derived_inert(), t.v;
	set_active_effect(a);
	try {
		t.f &= ~WAS_MARKED, destroy_derived_effects(t), r = update_reaction(t);
	} finally {
		set_active_effect(i);
	}
	return r;
}
function update_derived(t) {
	var r = execute_derived(t);
	if (!t.equals(r) && (t.wv = increment_write_version(), (!current_batch?.is_fork || t.deps === null) && (current_batch === null ? t.v = r : current_batch.capture(t, r, !0), t.deps === null))) {
		set_signal_status(t, CLEAN);
		return;
	}
	is_destroying_effect || (batch_values === null ? update_derived_status(t) : (effect_tracking() || current_batch?.is_fork) && batch_values.set(t, r));
}
function freeze_derived_effects(t) {
	if (t.effects !== null) for (let r of t.effects) (r.teardown || r.ac) && (r.teardown?.(), r.ac?.abort(STALE_REACTION), r.teardown = noop$2, r.ac = null, remove_reactions(r, 0), destroy_effect_children(r));
}
function unfreeze_derived_effects(t) {
	if (t.effects !== null) for (let r of t.effects) r.teardown && update_effect(r);
}
let eager_effects = /* @__PURE__ */ new Set();
const old_values = /* @__PURE__ */ new Map();
var eager_effects_deferred = !1;
function source(t, r) {
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
function state(t, r) {
	let i = source(t, r);
	return push_reaction_value(i), i;
}
/* @__NO_SIDE_EFFECTS__ */
function mutable_source(t, r = !1, i = !0) {
	let a = source(t);
	return r || (a.equals = safe_equals), legacy_mode_flag && i && component_context !== null && component_context.l !== null && (component_context.l.s ??= []).push(a), a;
}
function set(t, r, i = !1) {
	return active_reaction !== null && (!untracking || active_reaction.f & 131072) && is_runes() && active_reaction.f & 4325394 && (current_sources === null || !includes.call(current_sources, t)) && state_unsafe_mutation(), internal_set(t, i ? proxy(r) : r, legacy_updates);
}
function internal_set(t, r, i = null) {
	if (!t.equals(r)) {
		old_values.set(t, is_destroying_effect ? r : t.v);
		var a = Batch.ensure();
		if (a.capture(t, r), t.f & 2) {
			let r = t;
			t.f & 2048 && execute_derived(r), batch_values === null && update_derived_status(r);
		}
		t.wv = increment_write_version(), mark_reactions(t, DIRTY, i), is_runes() && active_effect !== null && active_effect.f & 1024 && !(active_effect.f & 96) && (untracked_writes === null ? set_untracked_writes([t]) : untracked_writes.push(t)), !a.is_fork && eager_effects.size > 0 && !eager_effects_deferred && flush_eager_effects();
	}
	return r;
}
function flush_eager_effects() {
	eager_effects_deferred = !1;
	for (let t of eager_effects) t.f & 1024 && set_signal_status(t, MAYBE_DIRTY), is_dirty(t) && update_effect(t);
	eager_effects.clear();
}
function increment(t) {
	set(t, t.v + 1);
}
function mark_reactions(t, r, i) {
	var a = t.reactions;
	if (a !== null) for (var o = is_runes(), s = a.length, c = 0; c < s; c++) {
		var l = a[c], u = l.f;
		if (!(!o && l === active_effect)) {
			var d = (u & DIRTY) === 0;
			if (d && set_signal_status(l, r), u & 2) {
				var f = l;
				batch_values?.delete(f), u & 65536 || (u & 512 && (active_effect === null || !(active_effect.f & 2097152)) && (l.f |= WAS_MARKED), mark_reactions(f, MAYBE_DIRTY, i));
			} else if (d) {
				var p = l;
				u & 16 && eager_block_effects !== null && eager_block_effects.add(p), i === null ? schedule_effect(p) : i.push(p);
			}
		}
	}
}
function autofocus(t, r) {
	if (r) {
		let r = document.body;
		t.autofocus = !0, queue_micro_task(() => {
			document.activeElement === r && t.focus();
		});
	}
}
var listening_to_form_reset = !1;
function add_form_reset_listener() {
	listening_to_form_reset || (listening_to_form_reset = !0, document.addEventListener("reset", (t) => {
		Promise.resolve().then(() => {
			if (!t.defaultPrevented) for (let r of t.target.elements) r.__on_r?.();
		});
	}, { capture: !0 }));
}
function without_reactive_context(t) {
	var r = active_reaction, i = active_effect;
	set_active_reaction(null), set_active_effect(null);
	try {
		return t();
	} finally {
		set_active_reaction(r), set_active_effect(i);
	}
}
function listen_to_event_and_reset_event(t, r, i, a = i) {
	t.addEventListener(r, () => without_reactive_context(i));
	let o = t.__on_r;
	o ? t.__on_r = () => {
		o(), a(!0);
	} : t.__on_r = () => a(!0), add_form_reset_listener();
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
	var r = t.f;
	if (r & 2048) return !0;
	if (r & 2 && (t.f &= ~WAS_MARKED), r & 4096) {
		for (var i = t.deps, a = i.length, o = 0; o < a; o++) {
			var s = i[o];
			if (is_dirty(s) && update_derived(s), s.wv > t.wv) return !0;
		}
		r & 512 && batch_values === null && set_signal_status(t, CLEAN);
	}
	return !1;
}
function schedule_possible_effect_self_invalidation(t, r, i = !0) {
	var a = t.reactions;
	if (a !== null && !(current_sources !== null && includes.call(current_sources, t))) for (var o = 0; o < a.length; o++) {
		var c = a[o];
		c.f & 2 ? schedule_possible_effect_self_invalidation(c, r, !1) : r === c && (i ? set_signal_status(c, DIRTY) : c.f & 1024 && set_signal_status(c, MAYBE_DIRTY), schedule_effect(c));
	}
}
function update_reaction(t) {
	var r = new_deps, i = skipped_deps, a = untracked_writes, o = active_reaction, s = current_sources, c = component_context, l = untracking, u = update_version, d = t.f;
	new_deps = null, skipped_deps = 0, untracked_writes = null, active_reaction = d & 96 ? null : t, current_sources = null, set_component_context(t.ctx), untracking = !1, update_version = ++read_version, t.ac !== null && (without_reactive_context(() => {
		t.ac.abort(STALE_REACTION);
	}), t.ac = null);
	try {
		t.f |= REACTION_IS_UPDATING;
		var f = t.fn, p = f();
		t.f |= REACTION_RAN;
		var m = t.deps, h = current_batch?.is_fork;
		if (new_deps !== null) {
			var g;
			if (h || remove_reactions(t, skipped_deps), m !== null && skipped_deps > 0) for (m.length = skipped_deps + new_deps.length, g = 0; g < new_deps.length; g++) m[skipped_deps + g] = new_deps[g];
			else t.deps = m = new_deps;
			if (effect_tracking() && t.f & 512) for (g = skipped_deps; g < m.length; g++) (m[g].reactions ??= []).push(t);
		} else !h && m !== null && skipped_deps < m.length && (remove_reactions(t, skipped_deps), m.length = skipped_deps);
		if (is_runes() && untracked_writes !== null && !untracking && m !== null && !(t.f & 6146)) for (g = 0; g < untracked_writes.length; g++) schedule_possible_effect_self_invalidation(untracked_writes[g], t);
		if (o !== null && o !== t) {
			if (read_version++, o.deps !== null) for (let t = 0; t < i; t += 1) o.deps[t].rv = read_version;
			if (r !== null) for (let t of r) t.rv = read_version;
			untracked_writes !== null && (a === null ? a = untracked_writes : a.push(...untracked_writes));
		}
		return t.f & 8388608 && (t.f ^= ERROR_VALUE), p;
	} catch (t) {
		return handle_error(t);
	} finally {
		t.f ^= REACTION_IS_UPDATING, new_deps = r, skipped_deps = i, untracked_writes = a, active_reaction = o, current_sources = s, set_component_context(c), untracking = l, update_version = u;
	}
}
function remove_reaction(t, r) {
	let i = r.reactions;
	if (i !== null) {
		var a = index_of.call(i, t);
		if (a !== -1) {
			var c = i.length - 1;
			c === 0 ? i = r.reactions = null : (i[a] = i[c], i.pop());
		}
	}
	if (i === null && r.f & 2 && (new_deps === null || !includes.call(new_deps, r))) {
		var l = r;
		l.f & 512 && (l.f ^= 512, l.f &= ~WAS_MARKED), l.v !== UNINITIALIZED && update_derived_status(l), freeze_derived_effects(l), remove_reactions(l, 0);
	}
}
function remove_reactions(t, r) {
	var i = t.deps;
	if (i !== null) for (var a = r; a < i.length; a++) remove_reaction(t, i[a]);
}
function update_effect(t) {
	var r = t.f;
	if (!(r & 16384)) {
		set_signal_status(t, CLEAN);
		var i = active_effect, a = is_updating_effect;
		active_effect = t, is_updating_effect = !0;
		try {
			r & 16777232 ? destroy_block_effect_children(t) : destroy_effect_children(t), execute_effect_teardown(t);
			var o = update_reaction(t);
			t.teardown = typeof o == "function" ? o : null, t.wv = write_version;
		} finally {
			is_updating_effect = a, active_effect = i;
		}
	}
}
async function tick() {
	await Promise.resolve(), flushSync();
}
function get$3(t) {
	var r = (t.f & 2) != 0;
	if (null?.add(t), active_reaction !== null && !untracking && !(active_effect !== null && active_effect.f & 16384) && (current_sources === null || !includes.call(current_sources, t))) {
		var i = active_reaction.deps;
		if (active_reaction.f & 2097152) t.rv < read_version && (t.rv = read_version, new_deps === null && i !== null && i[skipped_deps] === t ? skipped_deps++ : new_deps === null ? new_deps = [t] : new_deps.push(t));
		else {
			(active_reaction.deps ??= []).push(t);
			var a = t.reactions;
			a === null ? t.reactions = [active_reaction] : includes.call(a, active_reaction) || a.push(active_reaction);
		}
	}
	if (is_destroying_effect && old_values.has(t)) return old_values.get(t);
	if (r) {
		var o = t;
		if (is_destroying_effect) {
			var c = o.v;
			return (!(o.f & 1024) && o.reactions !== null || depends_on_old_values(o)) && (c = execute_derived(o)), old_values.set(o, c), c;
		}
		var l = (o.f & 512) == 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & 512) != 0), u = (o.f & REACTION_RAN) === 0;
		is_dirty(o) && (l && (o.f |= 512), update_derived(o)), l && !u && (unfreeze_derived_effects(o), reconnect(o));
	}
	if (batch_values?.has(t)) return batch_values.get(t);
	if (t.f & 8388608) throw t.v;
	return t.v;
}
function reconnect(t) {
	if (t.f |= 512, t.deps !== null) for (let r of t.deps) (r.reactions ??= []).push(t), r.f & 2 && !(r.f & 512) && (unfreeze_derived_effects(r), reconnect(r));
}
function depends_on_old_values(t) {
	if (t.v === UNINITIALIZED) return !0;
	if (t.deps === null) return !1;
	for (let r of t.deps) if (old_values.has(r) || r.f & 2 && depends_on_old_values(r)) return !0;
	return !1;
}
function untrack(t) {
	var r = untracking;
	try {
		return untracking = !0, t();
	} finally {
		untracking = r;
	}
}
function deep_read_state(t) {
	if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
		if (STATE_SYMBOL in t) deep_read(t);
		else if (!Array.isArray(t)) for (let r in t) {
			let i = t[r];
			typeof i == "object" && i && STATE_SYMBOL in i && deep_read(i);
		}
	}
}
function deep_read(t, r = /* @__PURE__ */ new Set()) {
	if (typeof t == "object" && t && !(t instanceof EventTarget) && !r.has(t)) {
		for (let i in r.add(t), t instanceof Date && t.getTime(), t) try {
			deep_read(t[i], r);
		} catch {}
		let i = get_prototype_of(t);
		if (i !== Object.prototype && i !== Array.prototype && i !== Map.prototype && i !== Set.prototype && i !== Date.prototype) {
			let r = get_descriptors(i);
			for (let i in r) {
				let a = r[i].get;
				if (a) try {
					a.call(t);
				} catch {}
			}
		}
	}
}
function validate_effect(t) {
	active_effect === null && (active_reaction === null && effect_orphan(t), effect_in_unowned_derived()), is_destroying_effect && effect_in_teardown(t);
}
function push_effect(t, r) {
	var i = r.last;
	i === null ? r.last = r.first = t : (i.next = t, t.prev = i, r.last = t);
}
function create_effect(t, r) {
	var i = active_effect;
	i !== null && i.f & 8192 && (t |= INERT);
	var a = {
		ctx: component_context,
		deps: null,
		nodes: null,
		f: t | 2560,
		first: null,
		fn: r,
		last: null,
		next: null,
		parent: i,
		b: i && i.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	current_batch?.register_created_effect(a);
	var o = a;
	if (t & 4) collected_effects === null ? Batch.ensure().schedule(a) : collected_effects.push(a);
	else if (r !== null) {
		try {
			update_effect(a);
		} catch (t) {
			throw destroy_effect(a), t;
		}
		o.deps === null && o.teardown === null && o.nodes === null && o.first === o.last && !(o.f & 524288) && (o = o.first, t & 16 && t & 65536 && o !== null && (o.f |= EFFECT_TRANSPARENT));
	}
	if (o !== null && (o.parent = i, i !== null && push_effect(o, i), active_reaction !== null && active_reaction.f & 2 && !(t & 64))) {
		var s = active_reaction;
		(s.effects ??= []).push(o);
	}
	return a;
}
function effect_tracking() {
	return active_reaction !== null && !untracking;
}
function teardown(t) {
	let r = create_effect(8, null);
	return set_signal_status(r, CLEAN), r.teardown = t, r;
}
function user_effect(t) {
	validate_effect("$effect");
	var r = active_effect.f;
	if (!active_reaction && r & 32 && !(r & 32768)) {
		var i = component_context;
		(i.e ??= []).push(t);
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
	let r = create_effect(64 | EFFECT_PRESERVED, t);
	return () => {
		destroy_effect(r);
	};
}
function component_root(t) {
	Batch.ensure();
	let r = create_effect(64 | EFFECT_PRESERVED, t);
	return (t = {}) => new Promise((i) => {
		t.outro ? pause_effect(r, () => {
			destroy_effect(r), i(void 0);
		}) : (destroy_effect(r), i(void 0));
	});
}
function effect(t) {
	return create_effect(4, t);
}
function async_effect(t) {
	return create_effect(4194304 | EFFECT_PRESERVED, t);
}
function render_effect(t, r = 0) {
	return create_effect(8 | r, t);
}
function template_effect(t, r = [], i = [], a = []) {
	flatten(a, r, i, (r) => {
		create_effect(8, () => t(...r.map(get$3)));
	});
}
function block(t, r = 0) {
	return create_effect(16 | r, t);
}
function managed(t, r = 0) {
	return create_effect(16777216 | r, t);
}
function branch(t) {
	return create_effect(32 | EFFECT_PRESERVED, t);
}
function execute_effect_teardown(t) {
	var r = t.teardown;
	if (r !== null) {
		let t = is_destroying_effect, i = active_reaction;
		set_is_destroying_effect(!0), set_active_reaction(null);
		try {
			r.call(null);
		} finally {
			set_is_destroying_effect(t), set_active_reaction(i);
		}
	}
}
function destroy_effect_children(t, r = !1) {
	var i = t.first;
	for (t.first = t.last = null; i !== null;) {
		let t = i.ac;
		t !== null && without_reactive_context(() => {
			t.abort(STALE_REACTION);
		});
		var a = i.next;
		i.f & 64 ? i.parent = null : destroy_effect(i, r), i = a;
	}
}
function destroy_block_effect_children(t) {
	for (var r = t.first; r !== null;) {
		var i = r.next;
		r.f & 32 || destroy_effect(r), r = i;
	}
}
function destroy_effect(t, r = !0) {
	var i = !1;
	(r || t.f & 262144) && t.nodes !== null && t.nodes.end !== null && (remove_effect_dom(t.nodes.start, t.nodes.end), i = !0), set_signal_status(t, DESTROYING), destroy_effect_children(t, r && !i), remove_reactions(t, 0);
	var a = t.nodes && t.nodes.t;
	if (a !== null) for (let t of a) t.stop();
	execute_effect_teardown(t), t.f ^= DESTROYING, t.f |= 16384;
	var o = t.parent;
	o !== null && o.first !== null && unlink_effect(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function remove_effect_dom(t, r) {
	for (; t !== null;) {
		var i = t === r ? null : /* @__PURE__ */ get_next_sibling(t);
		t.remove(), t = i;
	}
}
function unlink_effect(t) {
	var r = t.parent, i = t.prev, a = t.next;
	i !== null && (i.next = a), a !== null && (a.prev = i), r !== null && (r.first === t && (r.first = a), r.last === t && (r.last = i));
}
function pause_effect(t, r, i = !0) {
	var a = [];
	pause_children(t, a, !0);
	var o = () => {
		i && destroy_effect(t), r && r();
	}, s = a.length;
	if (s > 0) {
		var c = () => --s || o();
		for (var l of a) l.out(c);
	} else o();
}
function pause_children(t, r, i) {
	if (!(t.f & 8192)) {
		t.f ^= INERT;
		var a = t.nodes && t.nodes.t;
		if (a !== null) for (let t of a) (t.is_global || i) && r.push(t);
		for (var o = t.first; o !== null;) {
			var s = o.next;
			if (!(o.f & 64)) {
				var c = (o.f & 65536) != 0 || (o.f & 32) != 0 && (t.f & 16) != 0;
				pause_children(o, r, c ? i : !1);
			}
			o = s;
		}
	}
}
function resume_effect(t) {
	resume_children(t, !0);
}
function resume_children(t, r) {
	if (t.f & 8192) {
		t.f ^= INERT, t.f & 1024 || (set_signal_status(t, DIRTY), Batch.ensure().schedule(t));
		for (var i = t.first; i !== null;) {
			var a = i.next, o = (i.f & 65536) != 0 || (i.f & 32) != 0;
			resume_children(i, o ? r : !1), i = a;
		}
		var s = t.nodes && t.nodes.t;
		if (s !== null) for (let t of s) (t.is_global || r) && t.in();
	}
}
function move_effect(t, r) {
	if (t.nodes) for (var i = t.nodes.start, a = t.nodes.end; i !== null;) {
		var o = i === a ? null : /* @__PURE__ */ get_next_sibling(i);
		r.append(i), i = o;
	}
}
var defaultUserlistState = { userlist: [] }, createUserlistStore = (t) => {
	let { subscribe: r, set: i, update: a } = writable({
		...defaultUserlistState,
		...t
	});
	return {
		subscribe: r,
		set: i,
		init: (t) => i(t),
		addUser: (t) => a((r) => ({
			...r,
			userlist: [...r.userlist, t]
		})),
		removeUser: (t) => a((r) => ({
			...r,
			userlist: [...r.userlist.filter((r) => r.name !== t)]
		}))
	};
};
const subscribeSocketAddUser = (t) => socketClient.on("addUser", t), subscribeSocketUserLeave = (t) => socketClient.on("userLeave", t), parseLegacyUserlist = () => Array.from(document.body.querySelectorAll("#userlist .userlist_item")).map((t) => $(t)).map((t) => ({
	name: t.data("name") || "",
	rank: t.data("rank") || -1,
	profile: t.data("profile") || {
		image: "",
		text: ""
	},
	meta: {
		afk: t.data("afk") || !1,
		muted: t.data("meta") && t.data("meta").muted || !1
	}
})), userlistStore = createUserlistStore();
var defaultAppState = { version: "" };
const appStore = ((t) => {
	let { subscribe: r, set: i, update: a } = writable({
		...defaultAppState,
		...t
	});
	return {
		subscribe: r,
		init: (t) => i(t),
		updateVersion: (t) => a((r) => ({
			...r,
			version: t
		})),
		resetVersion: () => a((t) => ({
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
	let { subscribe: r, set: i, update: a } = writable({
		...defaultClientState,
		...t
	});
	return {
		subscribe: r,
		init: (t) => i(t),
		updateName: (t) => a((r) => ({
			...r,
			name: t
		})),
		resetName: () => a((t) => ({
			...t,
			name: defaultClientState.name
		})),
		updateLoggedIn: (t) => a((r) => ({
			...r,
			logged_in: t
		})),
		resetLoggedIn: () => a((t) => ({
			...t,
			logged_in: defaultClientState.logged_in
		})),
		updateRank: (t) => a((r) => ({
			...r,
			rank: t
		})),
		resetRank: () => a((t) => ({
			...t,
			rank: defaultClientState.rank
		}))
	};
})();
var defaultPageState = { csrf: "" };
const pageStore = ((t) => {
	let { subscribe: r, set: i, update: a } = writable({
		...defaultPageState,
		...t
	});
	return {
		subscribe: r,
		init: (t) => i(t),
		updateCSRF: (t) => a((r) => ({
			...r,
			csrf: t
		})),
		resetCSRF: () => a((t) => ({
			...t,
			csrf: defaultPageState.csrf
		}))
	};
})();
var defaultSocketState = { connected: !0 };
const socketStore = ((t) => {
	let { subscribe: r, set: i, update: a } = writable({
		...defaultSocketState,
		...t
	});
	return {
		subscribe: r,
		init: (t) => i(t),
		updateConnected: (t) => a((r) => ({
			...r,
			connected: t
		})),
		resetConnected: () => a((t) => ({
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
	let r = t.item(0);
	if (!r) throw Error("no csrf element found");
	let i = r.value;
	if (!i) throw Error("no csrf value found");
	pageStore.init({ csrf: i });
}, initAppStore = () => (appStore.init({ version: window.VERSION }), appStore.subscribe((t) => {
	window.VERSION = t.version;
})), initSocketStore = () => {
	socketStore.init(socketClient), socketClient.on("connect", () => socketStore.updateConnected(socketClient.connected)), socketClient.on("disconnect", () => socketStore.updateConnected(socketClient.connected));
}, initUserlistStore = () => {
	let t = parseLegacyUserlist();
	userlistStore.init({ userlist: t }), subscribeSocketAddUser(userlistStore.addUser), subscribeSocketUserLeave(({ name: t }) => userlistStore.removeUser(t));
};
const initStores = () => {
	let t = initClientStore(), r = initAppStore();
	return initPageStore(), initSocketStore(), initUserlistStore(), () => {
		t(), r();
	};
};
var colorInfo = "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", legacyChatNotification = (t, r) => {
	let i = document.getElementById("messagebuffer");
	if (!i) return null;
	let a = document.createElement("div");
	return a.className = "server-msg-reconnect", a.style = `border: 1px ${r}`, a.textContent = t, i.appendChild(a), a;
};
const legacyChatInfo = (t) => legacyChatNotification(t, colorInfo), injectMainStylesheet = async () => new Promise((t, r) => {
	let i = new URL("dist/index.css", window.BASE_URL), a = document.createElement("link");
	a.rel = "stylesheet", a.type = "text/css", a.href = i.toString(), a.onload = () => requestAnimationFrame(() => t()), a.onerror = () => requestAnimationFrame(() => r()), document.head.appendChild(a);
}), removeLegacyStylesheets = () => {
	for (let t of [
		"//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css",
		"/css/sticky-footer-navbar.css",
		"/css/videojs-resolution-switcher.css",
		"/css/video-js.css",
		"/css/cytube.css"
	]) {
		let r = document.querySelector(`link[href="${t}"]`);
		if (!r) return;
		r.remove();
	}
	document.getElementById("usertheme")?.remove();
};
var setChannelJS = (t) => {
	window.CHANNEL.js = t;
	let r = document.querySelector("#cs-jstext");
	if (r && (r.value = t), window.USEROPTS.ignore_channeljs) return;
	let i = document.createElement("script");
	i.id = "chanjs", i.type = "text/javascript", i.textContent = t, document.body.append(i);
}, setChannelCSS = (t) => {
	window.CHANNEL.css = t;
	let r = document.querySelector("#cs-csstext");
	if (r && (r.value = t), window.USEROPTS.ignore_channelcss) return;
	let i = document.createElement("style");
	i.id = "chancss", i.textContent = t, document.head.append(i);
}, overrideChannelJS = (t) => {
	let r = document.querySelector("#chanjs");
	if (!r) {
		setChannelJS(t);
		return;
	}
	r.textContent !== t && (r.remove(), setChannelJS(t));
}, overrideChannelCSS = (t) => {
	let r = document.querySelector("#chancss");
	if (!r) {
		setChannelCSS(t);
		return;
	}
	r.textContent !== t && (r.remove(), setChannelCSS(t));
}, overrideCallbacks = () => {
	window.Callbacks.channelCSSJS = ({ css: t, js: r }) => {
		t && overrideChannelCSS(t), r && overrideChannelJS(r);
	};
}, overrideFavicon = () => {
	let t = new URL("dist/favicon.ico", window.BASE_URL), r = document.createElement("link");
	r.href = t.toString(), r.type = "image/x-icon", r.rel = "shortcut icon", document.head.append(r);
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
	let r = t.__e;
	r !== void 0 && (t.__e = void 0, queueMicrotask(() => {
		t.isConnected && t.dispatchEvent(r);
	}));
}
function create_event(t, r, i, a = {}) {
	function o(t) {
		if (a.capture || handle_event_propagation.call(r, t), !t.cancelBubble) return without_reactive_context(() => i?.call(this, t));
	}
	return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? queue_micro_task(() => {
		r.addEventListener(t, o, a);
	}) : r.addEventListener(t, o, a), o;
}
function on(t, r, i, a = {}) {
	var o = create_event(r, t, i, a);
	return () => {
		t.removeEventListener(r, o, a);
	};
}
function event(t, r, i, a, o) {
	var s = {
		capture: a,
		passive: o
	}, c = create_event(t, r, i, s);
	(r === document.body || r === window || r === document || r instanceof HTMLMediaElement) && teardown(() => {
		r.removeEventListener(t, c, s);
	});
}
function delegated(t, r, i) {
	(r[event_symbol] ??= {})[t] = i;
}
function delegate(t) {
	for (var r = 0; r < t.length; r++) all_registered_events.add(t[r]);
	for (var i of root_event_handles) i(t);
}
var last_propagated_event = null;
function handle_event_propagation(t) {
	var r = this, i = r.ownerDocument, a = t.type, o = t.composedPath?.() || [], s = o[0] || t.target;
	last_propagated_event = t;
	var c = 0, u = last_propagated_event === t && t[event_symbol];
	if (u) {
		var d = o.indexOf(u);
		if (d !== -1 && (r === document || r === window)) {
			t[event_symbol] = r;
			return;
		}
		var f = o.indexOf(r);
		if (f === -1) return;
		d <= f && (c = d);
	}
	if (s = o[c] || t.target, s !== r) {
		define_property(t, "currentTarget", {
			configurable: !0,
			get() {
				return s || i;
			}
		});
		var p = active_reaction, m = active_effect;
		set_active_reaction(null), set_active_effect(null);
		try {
			for (var h, g = []; s !== null;) {
				var _ = s.assignedSlot || s.parentNode || s.host || null;
				try {
					var v = s[event_symbol]?.[a];
					v != null && (!s.disabled || t.target === s) && v.call(s, t);
				} catch (t) {
					h ? g.push(t) : h = t;
				}
				if (t.cancelBubble || _ === r || _ === null) break;
				s = _;
			}
			if (h) {
				for (let t of g) queueMicrotask(() => {
					throw t;
				});
				throw h;
			}
		} finally {
			t[event_symbol] = r, delete t.currentTarget, set_active_reaction(p), set_active_effect(m);
		}
	}
}
var policy = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (t) => t });
function create_trusted_html(t) {
	return policy?.createHTML(t) ?? t;
}
function create_fragment_from_html(t) {
	var r = create_element("template");
	return r.innerHTML = create_trusted_html(t.replaceAll("<!>", "<!---->")), r.content;
}
function assign_nodes(t, r) {
	var i = active_effect;
	i.nodes === null && (i.nodes = {
		start: t,
		end: r,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function from_html(t, r) {
	var i = (r & 1) != 0, a = (r & 2) != 0, o, s = !t.startsWith("<!>");
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		o === void 0 && (o = create_fragment_from_html(s ? t : "<!>" + t), i || (o = /* @__PURE__ */ get_first_child(o)));
		var r = a || is_firefox ? document.importNode(o, !0) : o.cloneNode(!0);
		if (i) {
			var c = /* @__PURE__ */ get_first_child(r), l = r.lastChild;
			assign_nodes(c, l);
		} else assign_nodes(r, r);
		return r;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function from_namespace(t, r, i = "svg") {
	var a = !t.startsWith("<!>"), o = (r & 1) != 0, s = `<${i}>${a ? t : "<!>" + t}</${i}>`, c;
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		if (!c) {
			var t = /* @__PURE__ */ get_first_child(create_fragment_from_html(s));
			if (o) for (c = document.createDocumentFragment(); /* @__PURE__ */ get_first_child(t);) c.appendChild(/* @__PURE__ */ get_first_child(t));
			else c = /* @__PURE__ */ get_first_child(t);
		}
		var r = c.cloneNode(!0);
		if (o) {
			var i = /* @__PURE__ */ get_first_child(r), a = r.lastChild;
			assign_nodes(i, a);
		} else assign_nodes(r, r);
		return r;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function from_svg(t, r) {
	return /* @__PURE__ */ from_namespace(t, r, "svg");
}
function text(t = "") {
	if (!hydrating) {
		var r = create_text(t + "");
		return assign_nodes(r, r), r;
	}
	var i = hydrate_node;
	return i.nodeType === 3 ? merge_text_nodes(i) : (i.before(i = create_text()), set_hydrate_node(i)), assign_nodes(i, i), i;
}
function comment() {
	if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
	var t = document.createDocumentFragment(), r = document.createComment(""), i = create_text();
	return t.append(r, i), assign_nodes(r, i), t;
}
function append(t, r) {
	if (hydrating) {
		var i = active_effect;
		(!(i.f & 32768) || i.nodes.end === null) && (i.nodes.end = hydrate_node), hydrate_next();
		return;
	}
	t !== null && t.before(r);
}
function props_id() {
	if (hydrating && hydrate_node && hydrate_node.nodeType === 8 && hydrate_node.textContent?.startsWith("$")) {
		let t = hydrate_node.textContent.substring(1);
		return hydrate_next(), t;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
let should_intro = !0;
function set_text(t, r) {
	var i = r == null ? "" : typeof r == "object" ? `${r}` : r;
	i !== (t.__t ??= t.nodeValue) && (t.__t = i, t.nodeValue = `${i}`);
}
function mount(t, r) {
	return _mount(t, r);
}
var listeners = /* @__PURE__ */ new Map();
function _mount(t, { target: r, anchor: i, props: a = {}, events: o, context: s, intro: l = !0, transformError: u }) {
	init_operations();
	var d = void 0, f = component_root(() => {
		var f = i ?? r.appendChild(create_text());
		boundary(f, { pending: () => {} }, (r) => {
			push({});
			var i = component_context;
			if (s && (i.c = s), o && (a.$$events = o), hydrating && assign_nodes(r, null), should_intro = l, d = t(r, a) || {}, should_intro = !0, hydrating && (active_effect.nodes.end = hydrate_node, hydrate_node === null || hydrate_node.nodeType !== 8 || hydrate_node.data !== "]")) throw hydration_mismatch(), HYDRATION_ERROR;
			pop();
		}, u);
		var p = /* @__PURE__ */ new Set(), m = (t) => {
			for (var i = 0; i < t.length; i++) {
				var a = t[i];
				if (!p.has(a)) {
					p.add(a);
					var o = is_passive_event(a);
					for (let t of [r, document]) {
						var s = listeners.get(t);
						s === void 0 && (s = /* @__PURE__ */ new Map(), listeners.set(t, s));
						var c = s.get(a);
						c === void 0 ? (t.addEventListener(a, handle_event_propagation, { passive: o }), s.set(a, 1)) : s.set(a, c + 1);
					}
				}
			}
		};
		return m(array_from(all_registered_events)), root_event_handles.add(m), () => {
			for (var t of p) for (let i of [r, document]) {
				var a = listeners.get(i), o = a.get(t);
				--o == 0 ? (i.removeEventListener(t, handle_event_propagation), a.delete(t), a.size === 0 && listeners.delete(i)) : a.set(t, o);
			}
			root_event_handles.delete(m), f !== i && f.parentNode?.removeChild(f);
		};
	});
	return mounted_components.set(d, f), d;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(t, r) {
	let i = mounted_components.get(t);
	return i ? (mounted_components.delete(t), i(r)) : Promise.resolve();
}
var BranchManager = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(t, r = !0) {
		this.anchor = t, this.#i = r;
	}
	#a = (t) => {
		if (this.#e.has(t)) {
			var r = this.#e.get(t), i = this.#t.get(r);
			if (i) resume_effect(i), this.#r.delete(r);
			else {
				var a = this.#n.get(r);
				a && (this.#t.set(r, a.effect), this.#n.delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), i = a.effect);
			}
			for (let [r, i] of this.#e) {
				if (this.#e.delete(r), r === t) break;
				let a = this.#n.get(i);
				a && (destroy_effect(a.effect), this.#n.delete(i));
			}
			for (let [t, a] of this.#t) {
				if (t === r || this.#r.has(t)) continue;
				let o = () => {
					if (Array.from(this.#e.values()).includes(t)) {
						var r = document.createDocumentFragment();
						move_effect(a, r), r.append(create_text()), this.#n.set(t, {
							effect: a,
							fragment: r
						});
					} else destroy_effect(a);
					this.#r.delete(t), this.#t.delete(t);
				};
				this.#i || !i ? (this.#r.add(t), pause_effect(a, o, !1)) : o();
			}
		}
	};
	#o = (t) => {
		this.#e.delete(t);
		let r = Array.from(this.#e.values());
		for (let [t, i] of this.#n) r.includes(t) || (destroy_effect(i.effect), this.#n.delete(t));
	};
	ensure(t, r) {
		var i = current_batch, a = should_defer_append();
		if (r && !this.#t.has(t) && !this.#n.has(t)) if (a) {
			var o = document.createDocumentFragment(), s = create_text();
			o.append(s), this.#n.set(t, {
				effect: branch(() => r(s)),
				fragment: o
			});
		} else this.#t.set(t, branch(() => r(this.anchor)));
		if (this.#e.set(i, t), a) {
			for (let [r, a] of this.#t) r === t ? i.unskip_effect(a) : i.skip_effect(a);
			for (let [r, a] of this.#n) r === t ? i.unskip_effect(a.effect) : i.skip_effect(a.effect);
			i.oncommit(this.#a), i.ondiscard(this.#o);
		} else hydrating && (this.anchor = hydrate_node), this.#a(i);
	}
};
function if_block(t, r, i = !1) {
	var a;
	hydrating && (a = hydrate_node, hydrate_next());
	var o = new BranchManager(t), s = i ? EFFECT_TRANSPARENT : 0;
	function c(t, r) {
		if (hydrating) {
			var i = read_hydration_instruction(a);
			if (t !== parseInt(i.substring(1))) {
				var s = skip_nodes();
				set_hydrate_node(s), o.anchor = s, set_hydrating(!1), o.ensure(t, r), set_hydrating(!0);
				return;
			}
		}
		o.ensure(t, r);
	}
	block(() => {
		var t = !1;
		r((r, i = 0) => {
			t = !0, c(i, r);
		}), t || c(-1, null);
	}, s);
}
var NAN = Symbol("NaN");
function key(t, r, i) {
	hydrating && hydrate_next();
	var a = new BranchManager(t), o = !is_runes();
	block(() => {
		var t = r();
		t !== t && (t = NAN), o && typeof t == "object" && t && (t = {}), a.ensure(t, i);
	});
}
function pause_effects(t, r, i) {
	for (var a = [], o = r.length, s, l = r.length, u = 0; u < o; u++) {
		let i = r[u];
		pause_effect(i, () => {
			if (s) {
				if (s.pending.delete(i), s.done.add(i), s.pending.size === 0) {
					var r = t.outrogroups;
					destroy_effects(t, array_from(s.done)), r.delete(s), r.size === 0 && (t.outrogroups = null);
				}
			} else --l;
		}, !1);
	}
	if (l === 0) {
		var d = a.length === 0 && i !== null;
		if (d) {
			var f = i, p = f.parentNode;
			clear_text_content(p), p.append(f), t.items.clear();
		}
		destroy_effects(t, r, !d);
	} else s = {
		pending: new Set(r),
		done: /* @__PURE__ */ new Set()
	}, (t.outrogroups ??= /* @__PURE__ */ new Set()).add(s);
}
function destroy_effects(t, r, i = !0) {
	var a;
	if (t.pending.size > 0) {
		a = /* @__PURE__ */ new Set();
		for (let r of t.pending.values()) for (let i of r) a.add(t.items.get(i).e);
	}
	for (var o = 0; o < r.length; o++) {
		var s = r[o];
		a?.has(s) ? (s.f |= EFFECT_OFFSCREEN, move_effect(s, document.createDocumentFragment())) : destroy_effect(r[o], i);
	}
}
var offscreen_anchor;
function each(t, r, i, o, s, l = null) {
	var u = t, d = /* @__PURE__ */ new Map();
	if (r & 4) {
		var f = t;
		u = hydrating ? set_hydrate_node(/* @__PURE__ */ get_first_child(f)) : f.appendChild(create_text());
	}
	hydrating && hydrate_next();
	var p = null, m = /* @__PURE__ */ derived_safe_equal(() => {
		var t = i();
		return is_array(t) ? t : t == null ? [] : array_from(t);
	}), h, g = /* @__PURE__ */ new Map(), _ = !0;
	function v(t) {
		b.effect.f & 16384 || (b.pending.delete(t), b.fallback = p, reconcile(b, h, u, r, o), p !== null && (h.length === 0 ? p.f & 33554432 ? (p.f ^= EFFECT_OFFSCREEN, move(p, null, u)) : resume_effect(p) : pause_effect(p, () => {
			p = null;
		})));
	}
	function y(t) {
		b.pending.delete(t);
	}
	var b = {
		effect: block(() => {
			h = get$3(m);
			var t = h.length;
			let a = !1;
			hydrating && read_hydration_instruction(u) === "[!" != (t === 0) && (u = skip_nodes(), set_hydrate_node(u), set_hydrating(!1), a = !0);
			for (var c = /* @__PURE__ */ new Set(), f = current_batch, b = should_defer_append(), x = 0; x < t; x += 1) {
				hydrating && hydrate_node.nodeType === 8 && hydrate_node.data === "]" && (u = hydrate_node, a = !0, set_hydrating(!1));
				var S = h[x], C = o(S, x), w = _ ? null : d.get(C);
				w ? (w.v && internal_set(w.v, S), w.i && internal_set(w.i, x), b && f.unskip_effect(w.e)) : (w = create_item(d, _ ? u : offscreen_anchor ??= create_text(), S, C, x, s, r, i), _ || (w.e.f |= EFFECT_OFFSCREEN), d.set(C, w)), c.add(C);
			}
			if (t === 0 && l && !p && (_ ? p = branch(() => l(u)) : (p = branch(() => l(offscreen_anchor ??= create_text())), p.f |= EFFECT_OFFSCREEN)), t > c.size && each_key_duplicate("", "", ""), hydrating && t > 0 && set_hydrate_node(skip_nodes()), !_) if (g.set(f, c), b) {
				for (let [t, r] of d) c.has(t) || f.skip_effect(r.e);
				f.oncommit(v), f.ondiscard(y);
			} else v(f);
			a && set_hydrating(!0), get$3(m);
		}),
		flags: r,
		items: d,
		pending: g,
		outrogroups: null,
		fallback: p
	};
	_ = !1, hydrating && (u = hydrate_node);
}
function skip_to_branch(t) {
	for (; t !== null && !(t.f & 32);) t = t.next;
	return t;
}
function reconcile(t, r, i, a, o) {
	var s = (a & 8) != 0, l = r.length, u = t.items, d = skip_to_branch(t.effect.first), f, p = null, m, h = [], g = [], _, v, y, b;
	if (s) for (b = 0; b < l; b += 1) _ = r[b], v = o(_, b), y = u.get(v).e, y.f & 33554432 || (y.nodes?.a?.measure(), (m ??= /* @__PURE__ */ new Set()).add(y));
	for (b = 0; b < l; b += 1) {
		if (_ = r[b], v = o(_, b), y = u.get(v).e, t.outrogroups !== null) for (let r of t.outrogroups) r.pending.delete(y), r.done.delete(y);
		if (y.f & 8192 && (resume_effect(y), s && (y.nodes?.a?.unfix(), (m ??= /* @__PURE__ */ new Set()).delete(y))), y.f & 33554432) if (y.f ^= EFFECT_OFFSCREEN, y === d) move(y, null, i);
		else {
			var x = p ? p.next : d;
			y === t.effect.last && (t.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), link(t, p, y), link(t, y, x), move(y, x, i), p = y, h = [], g = [], d = skip_to_branch(p.next);
			continue;
		}
		if (y !== d) {
			if (f !== void 0 && f.has(y)) {
				if (h.length < g.length) {
					var S = g[0], C;
					p = S.prev;
					var w = h[0], T = h[h.length - 1];
					for (C = 0; C < h.length; C += 1) move(h[C], S, i);
					for (C = 0; C < g.length; C += 1) f.delete(g[C]);
					link(t, w.prev, T.next), link(t, p, w), link(t, T, S), d = S, p = T, --b, h = [], g = [];
				} else f.delete(y), move(y, d, i), link(t, y.prev, y.next), link(t, y, p === null ? t.effect.first : p.next), link(t, p, y), p = y;
				continue;
			}
			for (h = [], g = []; d !== null && d !== y;) (f ??= /* @__PURE__ */ new Set()).add(d), g.push(d), d = skip_to_branch(d.next);
			if (d === null) continue;
		}
		y.f & 33554432 || h.push(y), p = y, d = skip_to_branch(y.next);
	}
	if (t.outrogroups !== null) {
		for (let r of t.outrogroups) r.pending.size === 0 && (destroy_effects(t, array_from(r.done)), t.outrogroups?.delete(r));
		t.outrogroups.size === 0 && (t.outrogroups = null);
	}
	if (d !== null || f !== void 0) {
		var E = [];
		if (f !== void 0) for (y of f) y.f & 8192 || E.push(y);
		for (; d !== null;) !(d.f & 8192) && d !== t.fallback && E.push(d), d = skip_to_branch(d.next);
		var D = E.length;
		if (D > 0) {
			var O = a & 4 && l === 0 ? i : null;
			if (s) {
				for (b = 0; b < D; b += 1) E[b].nodes?.a?.measure();
				for (b = 0; b < D; b += 1) E[b].nodes?.a?.fix();
			}
			pause_effects(t, E, O);
		}
	}
	s && queue_micro_task(() => {
		if (m !== void 0) for (y of m) y.nodes?.a?.apply();
	});
}
function create_item(t, r, i, a, o, s, c, l) {
	var u = c & 1 ? c & 16 ? source(i) : /* @__PURE__ */ mutable_source(i, !1, !1) : null, d = c & 2 ? source(o) : null;
	return {
		v: u,
		i: d,
		e: branch(() => (s(r, u ?? i, d ?? o, l), () => {
			t.delete(a);
		}))
	};
}
function move(t, r, i) {
	if (t.nodes) for (var a = t.nodes.start, o = t.nodes.end, s = r && !(r.f & 33554432) ? r.nodes.start : i; a !== null;) {
		var c = /* @__PURE__ */ get_next_sibling(a);
		if (s.before(a), a === o) return;
		a = c;
	}
}
function link(t, r, i) {
	r === null ? t.effect.first = i : r.next = i, i === null ? t.effect.last = r : i.prev = r;
}
function snippet(t, r, ...i) {
	var a = new BranchManager(t);
	block(() => {
		let t = r() ?? null;
		a.ensure(t, t && ((r) => t(r, ...i)));
	}, EFFECT_TRANSPARENT);
}
function component(t, r, i) {
	var a;
	hydrating && (a = hydrate_node, hydrate_next());
	var o = new BranchManager(t);
	block(() => {
		var t = r() ?? null;
		if (hydrating && read_hydration_instruction(a) === "[" != (t !== null)) {
			var s = skip_nodes();
			set_hydrate_node(s), o.anchor = s, set_hydrating(!1), o.ensure(t, t && ((r) => i(r, t))), set_hydrating(!0);
			return;
		}
		o.ensure(t, t && ((r) => i(r, t)));
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
	raf.tasks.forEach((r) => {
		r.c(t) || (raf.tasks.delete(r), r.f());
	}), raf.tasks.size !== 0 && raf.tick(run_tasks);
}
function loop(t) {
	let r;
	return raf.tasks.size === 0 && raf.tick(run_tasks), {
		promise: new Promise((i) => {
			raf.tasks.add(r = {
				c: t,
				f: i
			});
		}),
		abort() {
			raf.tasks.delete(r);
		}
	};
}
function dispatch_event(t, r) {
	without_reactive_context(() => {
		t.dispatchEvent(new CustomEvent(r));
	});
}
function css_property_to_camelcase(t) {
	if (t === "float") return "cssFloat";
	if (t === "offset") return "cssOffset";
	if (t.startsWith("--")) return t;
	let r = t.split("-");
	return r.length === 1 ? r[0] : r[0] + r.slice(1).map((t) => t[0].toUpperCase() + t.slice(1)).join("");
}
function css_to_keyframe(t) {
	let r = {}, i = t.split(";");
	for (let t of i) {
		let [i, a] = t.split(":");
		if (!i || a === void 0) break;
		let o = css_property_to_camelcase(i.trim());
		r[o] = a.trim();
	}
	return r;
}
var linear$1 = (t) => t, animation_effect_override = null;
function animation(t, r, i) {
	var a = (animation_effect_override ?? active_effect).nodes, o, s, c, l = null;
	a.a ??= {
		element: t,
		measure() {
			o = this.element.getBoundingClientRect();
		},
		apply() {
			if (c?.abort(), s = this.element.getBoundingClientRect(), o.left !== s.left || o.right !== s.right || o.top !== s.top || o.bottom !== s.bottom) {
				let t = r()(this.element, {
					from: o,
					to: s
				}, i?.());
				c = animate(this.element, t, void 0, 1, () => {}, () => {
					c?.abort(), c = void 0;
				});
			}
		},
		fix() {
			if (!t.getAnimations().length) {
				var { position: r, width: i, height: a } = getComputedStyle(t);
				if (r !== "absolute" && r !== "fixed") {
					var s = t.style;
					l = {
						position: s.position,
						width: s.width,
						height: s.height,
						transform: s.transform
					}, s.position = "absolute", s.width = i, s.height = a;
					var c = t.getBoundingClientRect();
					if (o.left !== c.left || o.top !== c.top) {
						var u = `translate(${o.left - c.left}px, ${o.top - c.top}px)`;
						s.transform = s.transform ? `${s.transform} ${u}` : u;
					}
				}
			}
		},
		unfix() {
			if (l) {
				var r = t.style;
				r.position = l.position, r.width = l.width, r.height = l.height, r.transform = l.transform;
			}
		}
	}, a.a.element = t;
}
function transition(t, r, i, a) {
	var o = (t & 1) != 0, s = (t & 2) != 0, c = o && s, l = (t & 4) != 0, u = c ? "both" : o ? "in" : "out", d, f = r.inert, p = r.style.overflow, m, h;
	function g() {
		return without_reactive_context(() => d ??= i()(r, a?.() ?? {}, { direction: u }));
	}
	var _ = {
		is_global: l,
		in() {
			if (r.inert = f, !o) {
				h?.abort(), h?.reset?.();
				return;
			}
			s || m?.abort(), m = animate(r, g(), h, 1, () => {
				dispatch_event(r, "introstart");
			}, () => {
				dispatch_event(r, "introend"), m?.abort(), m = d = void 0, r.style.overflow = p;
			});
		},
		out(t) {
			if (!s) {
				t?.(), d = void 0;
				return;
			}
			r.inert = !0, h = animate(r, g(), m, 0, () => {
				dispatch_event(r, "outrostart");
			}, () => {
				dispatch_event(r, "outroend"), t?.();
			});
		},
		stop: () => {
			m?.abort(), h?.abort();
		}
	}, v = active_effect;
	if ((v.nodes.t ??= []).push(_), o && should_intro) {
		var y = l;
		if (!y) {
			for (var b = v.parent; b && b.f & 65536;) for (; (b = b.parent) && !(b.f & 16););
			y = !b || (b.f & 32768) != 0;
		}
		y && effect(() => {
			untrack(() => _.in());
		});
	}
}
function animate(t, r, i, a, o, s) {
	var c = a === 1;
	if (is_function(r)) {
		var l, u = !1;
		return queue_micro_task(() => {
			u || (l = animate(t, r({ direction: c ? "in" : "out" }), i, a, o, s));
		}), {
			abort: () => {
				u = !0, l?.abort();
			},
			deactivate: () => l.deactivate(),
			reset: () => l.reset(),
			t: () => l.t()
		};
	}
	if (i?.deactivate(), !r?.duration && !r?.delay) return o(), s(), {
		abort: noop$2,
		deactivate: noop$2,
		reset: noop$2,
		t: () => a
	};
	let { delay: d = 0, css: f, tick: p, easing: m = linear$1 } = r;
	var h = [];
	if (c && i === void 0 && (p && p(0, 1), f)) {
		var v = css_to_keyframe(f(0, 1));
		h.push(v, v);
	}
	var y = () => 1 - a, b = t.animate(h, {
		duration: d,
		fill: "forwards"
	});
	return b.onfinish = () => {
		b.cancel(), o();
		var c = i?.t() ?? 1 - a;
		i?.abort();
		var l = a - c, u = r.duration * Math.abs(l), d = [];
		if (u > 0) {
			var h = !1;
			if (f) for (var g = Math.ceil(u / (1e3 / 60)), _ = 0; _ <= g; _ += 1) {
				var v = c + l * m(_ / g), x = css_to_keyframe(f(v, 1 - v));
				d.push(x), h ||= x.overflow === "hidden";
			}
			h && (t.style.overflow = "hidden"), y = () => {
				var t = b.currentTime;
				return c + l * m(t / u);
			}, p && loop(() => {
				if (b.playState !== "running") return !1;
				var t = y();
				return p(t, 1 - t), !0;
			});
		}
		b = t.animate(d, {
			duration: u,
			fill: "forwards"
		}), b.onfinish = () => {
			y = () => a, p?.(a, 1 - a), s();
		};
	}, {
		abort: () => {
			b && (b.cancel(), b.effect = null, b.onfinish = noop$2);
		},
		deactivate: () => {
			s = noop$2;
		},
		reset: () => {
			a === 0 && p?.(1, 0);
		},
		t: () => y()
	};
}
function attach(t, r) {
	var i = void 0, a;
	managed(() => {
		i !== (i = r()) && (a &&= (destroy_effect(a), null), i && (a = branch(() => {
			effect(() => i(t));
		})));
	});
}
function r$1(t) {
	var r, i, a = "";
	if (typeof t == "string" || typeof t == "number") a += t;
	else if (typeof t == "object") if (Array.isArray(t)) {
		var o = t.length;
		for (r = 0; r < o; r++) t[r] && (i = r$1(t[r])) && (a && (a += " "), a += i);
	} else for (i in t) t[i] && (a && (a += " "), a += i);
	return a;
}
function clsx() {
	for (var t, r, i = 0, a = "", o = arguments.length; i < o; i++) (t = arguments[i]) && (r = r$1(t)) && (a && (a += " "), a += r);
	return a;
}
function clsx$1(t) {
	return typeof t == "object" ? clsx(t) : t ?? "";
}
var whitespace = [..." 	\n\r\f\xA0\v﻿"];
function to_class(t, r, i) {
	var a = t == null ? "" : "" + t;
	if (r && (a = a ? a + " " + r : r), i) {
		for (var o of Object.keys(i)) if (i[o]) a = a ? a + " " + o : o;
		else if (a.length) for (var s = o.length, c = 0; (c = a.indexOf(o, c)) >= 0;) {
			var l = c + s;
			(c === 0 || whitespace.includes(a[c - 1])) && (l === a.length || whitespace.includes(a[l])) ? a = (c === 0 ? "" : a.substring(0, c)) + a.substring(l + 1) : c = l;
		}
	}
	return a === "" ? null : a;
}
function append_styles(t, r = !1) {
	var i = r ? " !important;" : ";", a = "";
	for (var o of Object.keys(t)) {
		var s = t[o];
		s != null && s !== "" && (a += " " + o + ": " + s + i);
	}
	return a;
}
function to_css_name(t) {
	return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function to_style(t, r) {
	if (r) {
		var i = "", a, o;
		if (Array.isArray(r) ? (a = r[0], o = r[1]) : a = r, t) {
			t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var s = !1, c = 0, l = !1, u = [];
			a && u.push(...Object.keys(a).map(to_css_name)), o && u.push(...Object.keys(o).map(to_css_name));
			var d = 0, f = -1;
			let r = t.length;
			for (var p = 0; p < r; p++) {
				var m = t[p];
				if (l ? m === "/" && t[p - 1] === "*" && (l = !1) : s ? s === m && (s = !1) : m === "/" && t[p + 1] === "*" ? l = !0 : m === "\"" || m === "'" ? s = m : m === "(" ? c++ : m === ")" && c--, !l && s === !1 && c === 0) {
					if (m === ":" && f === -1) f = p;
					else if (m === ";" || p === r - 1) {
						if (f !== -1) {
							var h = to_css_name(t.substring(d, f).trim());
							if (!u.includes(h)) {
								m !== ";" && p++;
								var g = t.substring(d, p).trim();
								i += " " + g + ";";
							}
						}
						d = p + 1, f = -1;
					}
				}
			}
		}
		return a && (i += append_styles(a)), o && (i += append_styles(o, !0)), i = i.trim(), i === "" ? null : i;
	}
	return t == null ? null : String(t);
}
function set_class(t, r, i, a, o, s) {
	var c = t.__className;
	if (hydrating || c !== i || c === void 0) {
		var l = to_class(i, a, s);
		(!hydrating || l !== t.getAttribute("class")) && (l == null ? t.removeAttribute("class") : r ? t.className = l : t.setAttribute("class", l)), t.__className = i;
	} else if (s && o !== s) for (var u in s) {
		var d = !!s[u];
		(o == null || d !== !!o[u]) && t.classList.toggle(u, d);
	}
	return s;
}
function update_styles(t, r = {}, i, a) {
	for (var o in i) {
		var s = i[o];
		r[o] !== s && (i[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, s, a));
	}
}
function set_style(t, r, i, a) {
	var o = t.__style;
	if (hydrating || o !== r) {
		var s = to_style(r, a);
		(!hydrating || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = r;
	} else a && (Array.isArray(a) ? (update_styles(t, i?.[0], a[0]), update_styles(t, i?.[1], a[1], "important")) : update_styles(t, i, a));
	return a;
}
function select_option(t, r, i = !1) {
	if (t.multiple) {
		if (r == null) return;
		if (!is_array(r)) return select_multiple_invalid_value();
		for (var o of t.options) o.selected = r.includes(get_option_value(o));
		return;
	}
	for (o of t.options) if (is$1(get_option_value(o), r)) {
		o.selected = !0;
		return;
	}
	(!i || r !== void 0) && (t.selectedIndex = -1);
}
function init_select(t) {
	var r = new MutationObserver(() => {
		select_option(t, t.__value);
	});
	r.observe(t, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), teardown(() => {
		r.disconnect();
	});
}
function get_option_value(t) {
	return "__value" in t ? t.__value : t.value;
}
const CLASS = Symbol("class"), STYLE = Symbol("style");
var IS_CUSTOM_ELEMENT = Symbol("is custom element"), IS_HTML = Symbol("is html"), LINK_TAG = IS_XHTML ? "link" : "LINK", INPUT_TAG = IS_XHTML ? "input" : "INPUT", OPTION_TAG = IS_XHTML ? "option" : "OPTION", SELECT_TAG = IS_XHTML ? "select" : "SELECT";
function remove_input_defaults(t) {
	if (hydrating) {
		var r = !1, i = () => {
			if (!r) {
				if (r = !0, t.hasAttribute("value")) {
					var i = t.value;
					set_attribute(t, "value", null), t.value = i;
				}
				if (t.hasAttribute("checked")) {
					var a = t.checked;
					set_attribute(t, "checked", null), t.checked = a;
				}
			}
		};
		t.__on_r = i, queue_micro_task(i), add_form_reset_listener();
	}
}
function set_selected(t, r) {
	r ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function set_attribute(t, r, i, a) {
	var o = get_attributes(t);
	hydrating && (o[r] = t.getAttribute(r), r === "src" || r === "srcset" || r === "href" && t.nodeName === LINK_TAG) || o[r] !== (o[r] = i) && (r === "loading" && (t[LOADING_ATTR_SYMBOL] = i), i == null ? t.removeAttribute(r) : typeof i != "string" && get_setters(t).includes(r) ? t[r] = i : t.setAttribute(r, i));
}
function set_attributes(t, r, i, a, o = !1, s = !1) {
	if (hydrating && o && t.nodeName === INPUT_TAG) {
		var c = t;
		(c.type === "checkbox" ? "defaultChecked" : "defaultValue") in i || remove_input_defaults(c);
	}
	var l = get_attributes(t), u = l[IS_CUSTOM_ELEMENT], d = !l[IS_HTML];
	let f = hydrating && u;
	f && set_hydrating(!1);
	var p = r || {}, m = t.nodeName === OPTION_TAG;
	for (var h in r) h in i || (i[h] = null);
	i.class ? i.class = clsx$1(i.class) : (a || i[CLASS]) && (i.class = null), i[STYLE] && (i.style ??= null);
	var g = get_setters(t);
	for (let o in i) {
		let c = i[o];
		if (m && o === "value" && c == null) {
			t.value = t.__value = "", p[o] = c;
			continue;
		}
		if (o === "class") {
			set_class(t, t.namespaceURI === "http://www.w3.org/1999/xhtml", c, a, r?.[CLASS], i[CLASS]), p[o] = c, p[CLASS] = i[CLASS];
			continue;
		}
		if (o === "style") {
			set_style(t, c, r?.[STYLE], i[STYLE]), p[o] = c, p[STYLE] = i[STYLE];
			continue;
		}
		var _ = p[o];
		if (!(c === _ && !(c === void 0 && t.hasAttribute(o)))) {
			p[o] = c;
			var v = o[0] + o[1];
			if (v !== "$$") if (v === "on") {
				let r = {}, i = "$$" + o, a = o.slice(2);
				var y = can_delegate_event(a);
				if (is_capture_event(a) && (a = a.slice(0, -7), r.capture = !0), !y && _) {
					if (c != null) continue;
					t.removeEventListener(a, p[i], r), p[i] = null;
				}
				if (y) delegated(a, t, c), delegate([a]);
				else if (c != null) {
					function s(t) {
						p[o].call(this, t);
					}
					p[i] = create_event(a, t, s, r);
				}
			} else if (o === "style") set_attribute(t, o, c);
			else if (o === "autofocus") autofocus(t, !!c);
			else if (!u && (o === "__value" || o === "value" && c != null)) t.value = t.__value = c;
			else if (o === "selected" && m) set_selected(t, c);
			else {
				var b = o;
				d || (b = normalize_attribute(b));
				var x = b === "defaultValue" || b === "defaultChecked";
				if (c == null && !u && !x) if (l[o] = null, b === "value" || b === "checked") {
					let i = t, a = r === void 0;
					if (b === "value") {
						let t = i.defaultValue;
						i.removeAttribute(b), i.defaultValue = t, i.value = i.__value = a ? t : null;
					} else {
						let t = i.defaultChecked;
						i.removeAttribute(b), i.defaultChecked = t, i.checked = a ? t : !1;
					}
				} else t.removeAttribute(o);
				else x || g.includes(b) && (u || typeof c != "string") ? (t[b] = c, b in l && (l[b] = UNINITIALIZED)) : typeof c != "function" && set_attribute(t, b, c, s);
			}
		}
	}
	return f && set_hydrating(!0), p;
}
function attribute_effect(t, r, i = [], a = [], o = [], s, c = !1, l = !1) {
	flatten(o, i, a, (i) => {
		var a = void 0, o = {}, u = t.nodeName === SELECT_TAG, d = !1;
		if (managed(() => {
			var f = r(...i.map(get$3)), p = set_attributes(t, a, f, s, c, l);
			d && u && "value" in f && select_option(t, f.value);
			for (let t of Object.getOwnPropertySymbols(o)) f[t] || destroy_effect(o[t]);
			for (let r of Object.getOwnPropertySymbols(f)) {
				var m = f[r];
				r.description === "@attach" && (!a || m !== a[r]) && (o[r] && destroy_effect(o[r]), o[r] = branch(() => attach(t, () => m))), p[r] = m;
			}
			a = p;
		}), u) {
			var f = t;
			effect(() => {
				select_option(f, a.value, !0), init_select(f);
			});
		}
		d = !0;
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
	var r = t.getAttribute("is") || t.nodeName, i = setters_cache.get(r);
	if (i) return i;
	setters_cache.set(r, i = []);
	for (var a, o = t, s = Element.prototype; s !== o;) {
		for (var c in a = get_descriptors(o), a) a[c].set && i.push(c);
		o = get_prototype_of(o);
	}
	return i;
}
function bind_value(t, r, i = r) {
	var a = /* @__PURE__ */ new WeakSet();
	listen_to_event_and_reset_event(t, "input", async (o) => {
		var s = o ? t.defaultValue : t.value;
		if (s = is_numberlike_input(t) ? to_number(s) : s, i(s), current_batch !== null && a.add(current_batch), await tick(), s !== (s = r())) {
			var c = t.selectionStart, l = t.selectionEnd, u = t.value.length;
			if (t.value = s ?? "", l !== null) {
				var d = t.value.length;
				c === l && l === u && d > u ? (t.selectionStart = d, t.selectionEnd = d) : (t.selectionStart = c, t.selectionEnd = Math.min(l, d));
			}
		}
	}), (hydrating && t.defaultValue !== t.value || untrack(r) == null && t.value) && (i(is_numberlike_input(t) ? to_number(t.value) : t.value), current_batch !== null && a.add(current_batch)), render_effect(() => {
		var i = r();
		if (t === document.activeElement) {
			var o = current_batch;
			if (a.has(o)) return;
		}
		is_numberlike_input(t) && i === to_number(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
	});
}
function is_numberlike_input(t) {
	var r = t.type;
	return r === "number" || r === "range";
}
function to_number(t) {
	return t === "" ? null : +t;
}
function bind_files(t, r, i = r) {
	listen_to_event_and_reset_event(t, "change", () => {
		i(t.files);
	}), hydrating && t.files && i(t.files), render_effect(() => {
		t.files = r();
	});
}
function is_bound_this(t, r) {
	return t === r || t?.[STATE_SYMBOL] === r;
}
function bind_this(t = {}, r, i, a) {
	var o = component_context.r, s = active_effect;
	return effect(() => {
		var c, l;
		return render_effect(() => {
			c = l, l = a?.() || [], untrack(() => {
				t !== i(...l) && (r(t, ...l), c && is_bound_this(i(...c), t) && r(null, ...c));
			});
		}), () => {
			let a = s;
			for (; a !== o && a.parent !== null && a.parent.f & 33554432;) a = a.parent;
			let c = () => {
				l && is_bound_this(i(...l), t) && r(null, ...l);
			}, u = a.teardown;
			a.teardown = () => {
				c(), u?.();
			};
		};
	}), t;
}
function init$1(t = !1) {
	let r = component_context, i = r.l.u;
	if (!i) return;
	let a = () => deep_read_state(r.s);
	if (t) {
		let t = 0, i = {}, o = /* @__PURE__ */ derived(() => {
			let a = !1, o = r.s;
			for (let t in o) o[t] !== i[t] && (i[t] = o[t], a = !0);
			return a && t++, t;
		});
		a = () => get$3(o);
	}
	i.b.length && user_pre_effect(() => {
		observe_all(r, a), run_all(i.b);
	}), user_effect(() => {
		let t = untrack(() => i.m.map(run));
		return () => {
			for (let r of t) typeof r == "function" && r();
		};
	}), i.a.length && user_effect(() => {
		observe_all(r, a), run_all(i.a);
	});
}
function observe_all(t, r) {
	if (t.l.s) for (let r of t.l.s) get$3(r);
	r();
}
var rest_props_handler = {
	get(t, r) {
		if (!t.exclude.includes(r)) return t.props[r];
	},
	set(t, r) {
		return !1;
	},
	getOwnPropertyDescriptor(t, r) {
		if (!t.exclude.includes(r) && r in t.props) return {
			enumerable: !0,
			configurable: !0,
			value: t.props[r]
		};
	},
	has(t, r) {
		return t.exclude.includes(r) ? !1 : r in t.props;
	},
	ownKeys(t) {
		return Reflect.ownKeys(t.props).filter((r) => !t.exclude.includes(r));
	}
};
/* @__NO_SIDE_EFFECTS__ */
function rest_props(t, r, i) {
	return new Proxy({
		props: t,
		exclude: r
	}, rest_props_handler);
}
var spread_props_handler = {
	get(t, r) {
		let i = t.props.length;
		for (; i--;) {
			let a = t.props[i];
			if (is_function(a) && (a = a()), typeof a == "object" && a && r in a) return a[r];
		}
	},
	set(t, r, i) {
		let a = t.props.length;
		for (; a--;) {
			let o = t.props[a];
			is_function(o) && (o = o());
			let s = get_descriptor(o, r);
			if (s && s.set) return s.set(i), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(t, r) {
		let i = t.props.length;
		for (; i--;) {
			let a = t.props[i];
			if (is_function(a) && (a = a()), typeof a == "object" && a && r in a) {
				let t = get_descriptor(a, r);
				return t && !t.configurable && (t.configurable = !0), t;
			}
		}
	},
	has(t, r) {
		if (r === STATE_SYMBOL || r === LEGACY_PROPS) return !1;
		for (let i of t.props) if (is_function(i) && (i = i()), i != null && r in i) return !0;
		return !1;
	},
	ownKeys(t) {
		let r = [];
		for (let i of t.props) if (is_function(i) && (i = i()), i) {
			for (let t in i) r.includes(t) || r.push(t);
			for (let t of Object.getOwnPropertySymbols(i)) r.includes(t) || r.push(t);
		}
		return r;
	}
};
function spread_props(...t) {
	return new Proxy({ props: t }, spread_props_handler);
}
function prop(t, r, i, a) {
	var o = !legacy_mode_flag || (i & 2) != 0, s = (i & 8) != 0, c = (i & 16) != 0, l = a, d = !0, f = () => (d && (d = !1, l = c ? untrack(a) : a), l);
	let p;
	if (s) {
		var m = STATE_SYMBOL in t || LEGACY_PROPS in t;
		p = get_descriptor(t, r)?.set ?? (m && r in t ? (i) => t[r] = i : void 0);
	}
	var h, g = !1;
	s ? [h, g] = capture_store_binding(() => t[r]) : h = t[r], h === void 0 && a !== void 0 && (h = f(), p && (o && props_invalid_value(r), p(h)));
	var _ = o ? () => {
		var i = t[r];
		return i === void 0 ? f() : (d = !0, i);
	} : () => {
		var i = t[r];
		return i !== void 0 && (l = void 0), i === void 0 ? l : i;
	};
	if (o && !(i & 4)) return _;
	if (p) {
		var v = t.$$legacy;
		return (function(t, r) {
			return arguments.length > 0 ? ((!o || !r || v || g) && p(r ? _() : t), t) : _();
		});
	}
	var y = !1, b = (i & 1 ? derived : derived_safe_equal)(() => (y = !1, _()));
	s && get$3(b);
	var x = active_effect;
	return (function(t, r) {
		if (arguments.length > 0) {
			let i = r ? get$3(b) : o && s ? proxy(t) : t;
			return set(b, i), y = !0, l !== void 0 && (l = i), t;
		}
		return is_destroying_effect && y || x.f & 16384 ? b.v : get$3(b);
	});
}
function onMount(t) {
	component_context === null && lifecycle_outside_component("onMount"), legacy_mode_flag && component_context.l !== null ? init_update_callbacks(component_context).m.push(t) : user_effect(() => {
		let r = untrack(t);
		if (typeof r == "function") return r;
	});
}
function init_update_callbacks(t) {
	var r = t.l;
	return r.u ??= {
		a: [],
		b: [],
		m: []
	};
}
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5"), enable_legacy_mode_flag();
var concatArrays = (t, r) => {
	let i = Array(t.length + r.length);
	for (let r = 0; r < t.length; r++) i[r] = t[r];
	for (let a = 0; a < r.length; a++) i[t.length + a] = r[a];
	return i;
}, createClassValidatorObject = (t, r) => ({
	classGroupId: t,
	validator: r
}), createClassPartObject = (t = /* @__PURE__ */ new Map(), r = null, i) => ({
	nextPart: t,
	validators: r,
	classGroupId: i
}), CLASS_PART_SEPARATOR = "-", EMPTY_CONFLICTS = [], ARBITRARY_PROPERTY_PREFIX = "arbitrary..", createClassGroupUtils = (t) => {
	let r = createClassMap(t), { conflictingClassGroups: i, conflictingClassGroupModifiers: a } = t;
	return {
		getClassGroupId: (t) => {
			if (t.startsWith("[") && t.endsWith("]")) return getGroupIdForArbitraryProperty(t);
			let i = t.split(CLASS_PART_SEPARATOR);
			return getGroupRecursive(i, i[0] === "" && i.length > 1 ? 1 : 0, r);
		},
		getConflictingClassGroupIds: (t, r) => {
			if (r) {
				let r = a[t], o = i[t];
				return r ? o ? concatArrays(o, r) : r : o || EMPTY_CONFLICTS;
			}
			return i[t] || EMPTY_CONFLICTS;
		}
	};
}, getGroupRecursive = (t, r, i) => {
	if (t.length - r === 0) return i.classGroupId;
	let a = t[r], o = i.nextPart.get(a);
	if (o) {
		let i = getGroupRecursive(t, r + 1, o);
		if (i) return i;
	}
	let s = i.validators;
	if (s === null) return;
	let c = r === 0 ? t.join(CLASS_PART_SEPARATOR) : t.slice(r).join(CLASS_PART_SEPARATOR), l = s.length;
	for (let t = 0; t < l; t++) {
		let r = s[t];
		if (r.validator(c)) return r.classGroupId;
	}
}, getGroupIdForArbitraryProperty = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let r = t.slice(1, -1), i = r.indexOf(":"), a = r.slice(0, i);
	return a ? ARBITRARY_PROPERTY_PREFIX + a : void 0;
})(), createClassMap = (t) => {
	let { theme: r, classGroups: i } = t;
	return processClassGroups(i, r);
}, processClassGroups = (t, r) => {
	let i = createClassPartObject();
	for (let a in t) {
		let o = t[a];
		processClassesRecursively(o, i, a, r);
	}
	return i;
}, processClassesRecursively = (t, r, i, a) => {
	let o = t.length;
	for (let s = 0; s < o; s++) {
		let o = t[s];
		processClassDefinition(o, r, i, a);
	}
}, processClassDefinition = (t, r, i, a) => {
	if (typeof t == "string") {
		processStringDefinition(t, r, i);
		return;
	}
	if (typeof t == "function") {
		processFunctionDefinition(t, r, i, a);
		return;
	}
	processObjectDefinition(t, r, i, a);
}, processStringDefinition = (t, r, i) => {
	let a = t === "" ? r : getPart(r, t);
	a.classGroupId = i;
}, processFunctionDefinition = (t, r, i, a) => {
	if (isThemeGetter(t)) {
		processClassesRecursively(t(a), r, i, a);
		return;
	}
	r.validators === null && (r.validators = []), r.validators.push(createClassValidatorObject(i, t));
}, processObjectDefinition = (t, r, i, a) => {
	let o = Object.entries(t), s = o.length;
	for (let t = 0; t < s; t++) {
		let [s, c] = o[t];
		processClassesRecursively(c, getPart(r, s), i, a);
	}
}, getPart = (t, r) => {
	let i = t, a = r.split(CLASS_PART_SEPARATOR), o = a.length;
	for (let t = 0; t < o; t++) {
		let r = a[t], o = i.nextPart.get(r);
		o || (o = createClassPartObject(), i.nextPart.set(r, o)), i = o;
	}
	return i;
}, isThemeGetter = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, createLruCache = (t) => {
	if (t < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let r = 0, i = Object.create(null), a = Object.create(null), o = (o, s) => {
		i[o] = s, r++, r > t && (r = 0, a = i, i = Object.create(null));
	};
	return {
		get(t) {
			let r = i[t];
			if (r !== void 0) return r;
			if ((r = a[t]) !== void 0) return o(t, r), r;
		},
		set(t, r) {
			t in i ? i[t] = r : o(t, r);
		}
	};
}, IMPORTANT_MODIFIER = "!", MODIFIER_SEPARATOR = ":", EMPTY_MODIFIERS = [], createResultObject = (t, r, i, a, o) => ({
	modifiers: t,
	hasImportantModifier: r,
	baseClassName: i,
	maybePostfixModifierPosition: a,
	isExternal: o
}), createParseClassName = (t) => {
	let { prefix: r, experimentalParseClassName: i } = t, a = (t) => {
		let r = [], i = 0, a = 0, o = 0, s, c = t.length;
		for (let l = 0; l < c; l++) {
			let c = t[l];
			if (i === 0 && a === 0) {
				if (c === MODIFIER_SEPARATOR) {
					r.push(t.slice(o, l)), o = l + 1;
					continue;
				}
				if (c === "/") {
					s = l;
					continue;
				}
			}
			c === "[" ? i++ : c === "]" ? i-- : c === "(" ? a++ : c === ")" && a--;
		}
		let l = r.length === 0 ? t : t.slice(o), u = l, d = !1;
		l.endsWith(IMPORTANT_MODIFIER) ? (u = l.slice(0, -1), d = !0) : l.startsWith(IMPORTANT_MODIFIER) && (u = l.slice(1), d = !0);
		let f = s && s > o ? s - o : void 0;
		return createResultObject(r, d, u, f);
	};
	if (r) {
		let t = r + MODIFIER_SEPARATOR, i = a;
		a = (r) => r.startsWith(t) ? i(r.slice(t.length)) : createResultObject(EMPTY_MODIFIERS, !1, r, void 0, !0);
	}
	if (i) {
		let t = a;
		a = (r) => i({
			className: r,
			parseClassName: t
		});
	}
	return a;
}, createSortModifiers = (t) => {
	let r = /* @__PURE__ */ new Map();
	return t.orderSensitiveModifiers.forEach((t, i) => {
		r.set(t, 1e6 + i);
	}), (t) => {
		let i = [], a = [];
		for (let o = 0; o < t.length; o++) {
			let s = t[o], c = s[0] === "[", l = r.has(s);
			c || l ? (a.length > 0 && (a.sort(), i.push(...a), a = []), i.push(s)) : a.push(s);
		}
		return a.length > 0 && (a.sort(), i.push(...a)), i;
	};
}, createConfigUtils = (t) => ({
	cache: createLruCache(t.cacheSize),
	parseClassName: createParseClassName(t),
	sortModifiers: createSortModifiers(t),
	...createClassGroupUtils(t)
}), SPLIT_CLASSES_REGEX = /\s+/, mergeClassList = (t, r) => {
	let { parseClassName: i, getClassGroupId: a, getConflictingClassGroupIds: o, sortModifiers: s } = r, c = [], l = t.trim().split(SPLIT_CLASSES_REGEX), u = "";
	for (let t = l.length - 1; t >= 0; --t) {
		let r = l[t], { isExternal: d, modifiers: f, hasImportantModifier: p, baseClassName: m, maybePostfixModifierPosition: h } = i(r);
		if (d) {
			u = r + (u.length > 0 ? " " + u : u);
			continue;
		}
		let g = !!h, _ = a(g ? m.substring(0, h) : m);
		if (!_) {
			if (!g) {
				u = r + (u.length > 0 ? " " + u : u);
				continue;
			}
			if (_ = a(m), !_) {
				u = r + (u.length > 0 ? " " + u : u);
				continue;
			}
			g = !1;
		}
		let v = f.length === 0 ? "" : f.length === 1 ? f[0] : s(f).join(":"), y = p ? v + IMPORTANT_MODIFIER : v, b = y + _;
		if (c.indexOf(b) > -1) continue;
		c.push(b);
		let x = o(_, g);
		for (let t = 0; t < x.length; ++t) {
			let r = x[t];
			c.push(y + r);
		}
		u = r + (u.length > 0 ? " " + u : u);
	}
	return u;
}, twJoin = (...t) => {
	let r = 0, i, a, o = "";
	for (; r < t.length;) (i = t[r++]) && (a = toValue(i)) && (o && (o += " "), o += a);
	return o;
}, toValue = (t) => {
	if (typeof t == "string") return t;
	let r, i = "";
	for (let a = 0; a < t.length; a++) t[a] && (r = toValue(t[a])) && (i && (i += " "), i += r);
	return i;
}, createTailwindMerge = (t, ...r) => {
	let i, a, o, s, c = (c) => (i = createConfigUtils(r.reduce((t, r) => r(t), t())), a = i.cache.get, o = i.cache.set, s = l, l(c)), l = (t) => {
		let r = a(t);
		if (r) return r;
		let s = mergeClassList(t, i);
		return o(t, s), s;
	};
	return s = c, (...t) => s(twJoin(...t));
}, fallbackThemeArr = [], fromTheme = (t) => {
	let r = (r) => r[t] || fallbackThemeArr;
	return r.isThemeGetter = !0, r;
}, arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, isFraction = (t) => fractionRegex.test(t), isNumber = (t) => !!t && !Number.isNaN(Number(t)), isInteger = (t) => !!t && Number.isInteger(Number(t)), isPercent = (t) => t.endsWith("%") && isNumber(t.slice(0, -1)), isTshirtSize = (t) => tshirtUnitRegex.test(t), isAny = () => !0, isLengthOnly = (t) => lengthUnitRegex.test(t) && !colorFunctionRegex.test(t), isNever = () => !1, isShadow = (t) => shadowRegex.test(t), isImage = (t) => imageRegex.test(t), isAnyNonArbitrary = (t) => !isArbitraryValue(t) && !isArbitraryVariable(t), isArbitrarySize = (t) => getIsArbitraryValue(t, isLabelSize, isNever), isArbitraryValue = (t) => arbitraryValueRegex.test(t), isArbitraryLength = (t) => getIsArbitraryValue(t, isLabelLength, isLengthOnly), isArbitraryNumber = (t) => getIsArbitraryValue(t, isLabelNumber, isNumber), isArbitraryWeight = (t) => getIsArbitraryValue(t, isLabelWeight, isAny), isArbitraryFamilyName = (t) => getIsArbitraryValue(t, isLabelFamilyName, isNever), isArbitraryPosition = (t) => getIsArbitraryValue(t, isLabelPosition, isNever), isArbitraryImage = (t) => getIsArbitraryValue(t, isLabelImage, isImage), isArbitraryShadow = (t) => getIsArbitraryValue(t, isLabelShadow, isShadow), isArbitraryVariable = (t) => arbitraryVariableRegex.test(t), isArbitraryVariableLength = (t) => getIsArbitraryVariable(t, isLabelLength), isArbitraryVariableFamilyName = (t) => getIsArbitraryVariable(t, isLabelFamilyName), isArbitraryVariablePosition = (t) => getIsArbitraryVariable(t, isLabelPosition), isArbitraryVariableSize = (t) => getIsArbitraryVariable(t, isLabelSize), isArbitraryVariableImage = (t) => getIsArbitraryVariable(t, isLabelImage), isArbitraryVariableShadow = (t) => getIsArbitraryVariable(t, isLabelShadow, !0), isArbitraryVariableWeight = (t) => getIsArbitraryVariable(t, isLabelWeight, !0), getIsArbitraryValue = (t, r, i) => {
	let a = arbitraryValueRegex.exec(t);
	return a ? a[1] ? r(a[1]) : i(a[2]) : !1;
}, getIsArbitraryVariable = (t, r, i = !1) => {
	let a = arbitraryVariableRegex.exec(t);
	return a ? a[1] ? r(a[1]) : i : !1;
}, isLabelPosition = (t) => t === "position" || t === "percentage", isLabelImage = (t) => t === "image" || t === "url", isLabelSize = (t) => t === "length" || t === "size" || t === "bg-size", isLabelLength = (t) => t === "length", isLabelNumber = (t) => t === "number", isLabelFamilyName = (t) => t === "family-name", isLabelWeight = (t) => t === "number" || t === "weight", isLabelShadow = (t) => t === "shadow", getDefaultConfig = () => {
	let t = fromTheme("color"), r = fromTheme("font"), i = fromTheme("text"), a = fromTheme("font-weight"), o = fromTheme("tracking"), s = fromTheme("leading"), c = fromTheme("breakpoint"), l = fromTheme("container"), u = fromTheme("spacing"), d = fromTheme("radius"), f = fromTheme("shadow"), p = fromTheme("inset-shadow"), m = fromTheme("text-shadow"), h = fromTheme("drop-shadow"), g = fromTheme("blur"), _ = fromTheme("perspective"), v = fromTheme("aspect"), y = fromTheme("ease"), b = fromTheme("animate"), x = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], S = () => [
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
	], C = () => [
		...S(),
		isArbitraryVariable,
		isArbitraryValue
	], w = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], T = () => [
		"auto",
		"contain",
		"none"
	], E = () => [
		isArbitraryVariable,
		isArbitraryValue,
		u
	], D = () => [
		isFraction,
		"full",
		"auto",
		...E()
	], O = () => [
		isInteger,
		"none",
		"subgrid",
		isArbitraryVariable,
		isArbitraryValue
	], k = () => [
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
	], A = () => [
		isInteger,
		"auto",
		isArbitraryVariable,
		isArbitraryValue
	], j = () => [
		"auto",
		"min",
		"max",
		"fr",
		isArbitraryVariable,
		isArbitraryValue
	], M = () => [
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
	], N = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], P = () => ["auto", ...E()], F = () => [
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
		...E()
	], I = () => [
		isFraction,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...E()
	], L = () => [
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
		...E()
	], R = () => [
		t,
		isArbitraryVariable,
		isArbitraryValue
	], z = () => [
		...S(),
		isArbitraryVariablePosition,
		isArbitraryPosition,
		{ position: [isArbitraryVariable, isArbitraryValue] }
	], B = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], V = () => [
		"auto",
		"cover",
		"contain",
		isArbitraryVariableSize,
		isArbitrarySize,
		{ size: [isArbitraryVariable, isArbitraryValue] }
	], H = () => [
		isPercent,
		isArbitraryVariableLength,
		isArbitraryLength
	], U = () => [
		"",
		"none",
		"full",
		d,
		isArbitraryVariable,
		isArbitraryValue
	], W = () => [
		"",
		isNumber,
		isArbitraryVariableLength,
		isArbitraryLength
	], G = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], K = () => [
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
	], q = () => [
		isNumber,
		isPercent,
		isArbitraryVariablePosition,
		isArbitraryPosition
	], J = () => [
		"",
		"none",
		g,
		isArbitraryVariable,
		isArbitraryValue
	], Y = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], X = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], Z = () => [
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], Q = () => [
		isFraction,
		"full",
		...E()
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
				v
			] }],
			container: ["container"],
			columns: [{ columns: [
				isNumber,
				isArbitraryValue,
				isArbitraryVariable,
				l
			] }],
			"break-after": [{ "break-after": x() }],
			"break-before": [{ "break-before": x() }],
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
			"object-position": [{ object: C() }],
			overflow: [{ overflow: w() }],
			"overflow-x": [{ "overflow-x": w() }],
			"overflow-y": [{ "overflow-y": w() }],
			overscroll: [{ overscroll: T() }],
			"overscroll-x": [{ "overscroll-x": T() }],
			"overscroll-y": [{ "overscroll-y": T() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: D() }],
			"inset-x": [{ "inset-x": D() }],
			"inset-y": [{ "inset-y": D() }],
			start: [{
				"inset-s": D(),
				start: D()
			}],
			end: [{
				"inset-e": D(),
				end: D()
			}],
			"inset-bs": [{ "inset-bs": D() }],
			"inset-be": [{ "inset-be": D() }],
			top: [{ top: D() }],
			right: [{ right: D() }],
			bottom: [{ bottom: D() }],
			left: [{ left: D() }],
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
				l,
				...E()
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
			"grid-cols": [{ "grid-cols": O() }],
			"col-start-end": [{ col: k() }],
			"col-start": [{ "col-start": A() }],
			"col-end": [{ "col-end": A() }],
			"grid-rows": [{ "grid-rows": O() }],
			"row-start-end": [{ row: k() }],
			"row-start": [{ "row-start": A() }],
			"row-end": [{ "row-end": A() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": j() }],
			"auto-rows": [{ "auto-rows": j() }],
			gap: [{ gap: E() }],
			"gap-x": [{ "gap-x": E() }],
			"gap-y": [{ "gap-y": E() }],
			"justify-content": [{ justify: [...M(), "normal"] }],
			"justify-items": [{ "justify-items": [...N(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...N()] }],
			"align-content": [{ content: ["normal", ...M()] }],
			"align-items": [{ items: [...N(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...N(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": M() }],
			"place-items": [{ "place-items": [...N(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...N()] }],
			p: [{ p: E() }],
			px: [{ px: E() }],
			py: [{ py: E() }],
			ps: [{ ps: E() }],
			pe: [{ pe: E() }],
			pbs: [{ pbs: E() }],
			pbe: [{ pbe: E() }],
			pt: [{ pt: E() }],
			pr: [{ pr: E() }],
			pb: [{ pb: E() }],
			pl: [{ pl: E() }],
			m: [{ m: P() }],
			mx: [{ mx: P() }],
			my: [{ my: P() }],
			ms: [{ ms: P() }],
			me: [{ me: P() }],
			mbs: [{ mbs: P() }],
			mbe: [{ mbe: P() }],
			mt: [{ mt: P() }],
			mr: [{ mr: P() }],
			mb: [{ mb: P() }],
			ml: [{ ml: P() }],
			"space-x": [{ "space-x": E() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": E() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: F() }],
			"inline-size": [{ inline: ["auto", ...I()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...I()] }],
			"max-inline-size": [{ "max-inline": ["none", ...I()] }],
			"block-size": [{ block: ["auto", ...L()] }],
			"min-block-size": [{ "min-block": ["auto", ...L()] }],
			"max-block-size": [{ "max-block": ["none", ...L()] }],
			w: [{ w: [
				l,
				"screen",
				...F()
			] }],
			"min-w": [{ "min-w": [
				l,
				"screen",
				"none",
				...F()
			] }],
			"max-w": [{ "max-w": [
				l,
				"screen",
				"none",
				"prose",
				{ screen: [c] },
				...F()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...F()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...F()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...F()
			] }],
			"font-size": [{ text: [
				"base",
				i,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				a,
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
				r
			] }],
			"font-features": [{ "font-features": [isArbitraryValue] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				o,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"line-clamp": [{ "line-clamp": [
				isNumber,
				"none",
				isArbitraryVariable,
				isArbitraryNumber
			] }],
			leading: [{ leading: [s, ...E()] }],
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
			"placeholder-color": [{ placeholder: R() }],
			"text-color": [{ text: R() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...G(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				isNumber,
				"from-font",
				"auto",
				isArbitraryVariable,
				isArbitraryLength
			] }],
			"text-decoration-color": [{ decoration: R() }],
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
			indent: [{ indent: E() }],
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
			"bg-position": [{ bg: z() }],
			"bg-repeat": [{ bg: B() }],
			"bg-size": [{ bg: V() }],
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
			"bg-color": [{ bg: R() }],
			"gradient-from-pos": [{ from: H() }],
			"gradient-via-pos": [{ via: H() }],
			"gradient-to-pos": [{ to: H() }],
			"gradient-from": [{ from: R() }],
			"gradient-via": [{ via: R() }],
			"gradient-to": [{ to: R() }],
			rounded: [{ rounded: U() }],
			"rounded-s": [{ "rounded-s": U() }],
			"rounded-e": [{ "rounded-e": U() }],
			"rounded-t": [{ "rounded-t": U() }],
			"rounded-r": [{ "rounded-r": U() }],
			"rounded-b": [{ "rounded-b": U() }],
			"rounded-l": [{ "rounded-l": U() }],
			"rounded-ss": [{ "rounded-ss": U() }],
			"rounded-se": [{ "rounded-se": U() }],
			"rounded-ee": [{ "rounded-ee": U() }],
			"rounded-es": [{ "rounded-es": U() }],
			"rounded-tl": [{ "rounded-tl": U() }],
			"rounded-tr": [{ "rounded-tr": U() }],
			"rounded-br": [{ "rounded-br": U() }],
			"rounded-bl": [{ "rounded-bl": U() }],
			"border-w": [{ border: W() }],
			"border-w-x": [{ "border-x": W() }],
			"border-w-y": [{ "border-y": W() }],
			"border-w-s": [{ "border-s": W() }],
			"border-w-e": [{ "border-e": W() }],
			"border-w-bs": [{ "border-bs": W() }],
			"border-w-be": [{ "border-be": W() }],
			"border-w-t": [{ "border-t": W() }],
			"border-w-r": [{ "border-r": W() }],
			"border-w-b": [{ "border-b": W() }],
			"border-w-l": [{ "border-l": W() }],
			"divide-x": [{ "divide-x": W() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": W() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...G(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...G(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: R() }],
			"border-color-x": [{ "border-x": R() }],
			"border-color-y": [{ "border-y": R() }],
			"border-color-s": [{ "border-s": R() }],
			"border-color-e": [{ "border-e": R() }],
			"border-color-bs": [{ "border-bs": R() }],
			"border-color-be": [{ "border-be": R() }],
			"border-color-t": [{ "border-t": R() }],
			"border-color-r": [{ "border-r": R() }],
			"border-color-b": [{ "border-b": R() }],
			"border-color-l": [{ "border-l": R() }],
			"divide-color": [{ divide: R() }],
			"outline-style": [{ outline: [
				...G(),
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
			"outline-color": [{ outline: R() }],
			shadow: [{ shadow: [
				"",
				"none",
				f,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"shadow-color": [{ shadow: R() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				p,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"inset-shadow-color": [{ "inset-shadow": R() }],
			"ring-w": [{ ring: W() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: R() }],
			"ring-offset-w": [{ "ring-offset": [isNumber, isArbitraryLength] }],
			"ring-offset-color": [{ "ring-offset": R() }],
			"inset-ring-w": [{ "inset-ring": W() }],
			"inset-ring-color": [{ "inset-ring": R() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				m,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"text-shadow-color": [{ "text-shadow": R() }],
			opacity: [{ opacity: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"mix-blend": [{ "mix-blend": [
				...K(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": K() }],
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
			"mask-image-linear-from-pos": [{ "mask-linear-from": q() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": q() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": R() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": R() }],
			"mask-image-t-from-pos": [{ "mask-t-from": q() }],
			"mask-image-t-to-pos": [{ "mask-t-to": q() }],
			"mask-image-t-from-color": [{ "mask-t-from": R() }],
			"mask-image-t-to-color": [{ "mask-t-to": R() }],
			"mask-image-r-from-pos": [{ "mask-r-from": q() }],
			"mask-image-r-to-pos": [{ "mask-r-to": q() }],
			"mask-image-r-from-color": [{ "mask-r-from": R() }],
			"mask-image-r-to-color": [{ "mask-r-to": R() }],
			"mask-image-b-from-pos": [{ "mask-b-from": q() }],
			"mask-image-b-to-pos": [{ "mask-b-to": q() }],
			"mask-image-b-from-color": [{ "mask-b-from": R() }],
			"mask-image-b-to-color": [{ "mask-b-to": R() }],
			"mask-image-l-from-pos": [{ "mask-l-from": q() }],
			"mask-image-l-to-pos": [{ "mask-l-to": q() }],
			"mask-image-l-from-color": [{ "mask-l-from": R() }],
			"mask-image-l-to-color": [{ "mask-l-to": R() }],
			"mask-image-x-from-pos": [{ "mask-x-from": q() }],
			"mask-image-x-to-pos": [{ "mask-x-to": q() }],
			"mask-image-x-from-color": [{ "mask-x-from": R() }],
			"mask-image-x-to-color": [{ "mask-x-to": R() }],
			"mask-image-y-from-pos": [{ "mask-y-from": q() }],
			"mask-image-y-to-pos": [{ "mask-y-to": q() }],
			"mask-image-y-from-color": [{ "mask-y-from": R() }],
			"mask-image-y-to-color": [{ "mask-y-to": R() }],
			"mask-image-radial": [{ "mask-radial": [isArbitraryVariable, isArbitraryValue] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": q() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": q() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": R() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": R() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": S() }],
			"mask-image-conic-pos": [{ "mask-conic": [isNumber] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": q() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": q() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": R() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": R() }],
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
			"mask-position": [{ mask: z() }],
			"mask-repeat": [{ mask: B() }],
			"mask-size": [{ mask: V() }],
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
			blur: [{ blur: J() }],
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
				h,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"drop-shadow-color": [{ "drop-shadow": R() }],
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
			"backdrop-blur": [{ "backdrop-blur": J() }],
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
			"border-spacing": [{ "border-spacing": E() }],
			"border-spacing-x": [{ "border-spacing-x": E() }],
			"border-spacing-y": [{ "border-spacing-y": E() }],
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
				y,
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
				b,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				_,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"perspective-origin": [{ "perspective-origin": C() }],
			rotate: [{ rotate: Y() }],
			"rotate-x": [{ "rotate-x": Y() }],
			"rotate-y": [{ "rotate-y": Y() }],
			"rotate-z": [{ "rotate-z": Y() }],
			scale: [{ scale: X() }],
			"scale-x": [{ "scale-x": X() }],
			"scale-y": [{ "scale-y": X() }],
			"scale-z": [{ "scale-z": X() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: Z() }],
			"skew-x": [{ "skew-x": Z() }],
			"skew-y": [{ "skew-y": Z() }],
			transform: [{ transform: [
				isArbitraryVariable,
				isArbitraryValue,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: C() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: Q() }],
			"translate-x": [{ "translate-x": Q() }],
			"translate-y": [{ "translate-y": Q() }],
			"translate-z": [{ "translate-z": Q() }],
			"translate-none": ["translate-none"],
			accent: [{ accent: R() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: R() }],
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
			"scroll-m": [{ "scroll-m": E() }],
			"scroll-mx": [{ "scroll-mx": E() }],
			"scroll-my": [{ "scroll-my": E() }],
			"scroll-ms": [{ "scroll-ms": E() }],
			"scroll-me": [{ "scroll-me": E() }],
			"scroll-mbs": [{ "scroll-mbs": E() }],
			"scroll-mbe": [{ "scroll-mbe": E() }],
			"scroll-mt": [{ "scroll-mt": E() }],
			"scroll-mr": [{ "scroll-mr": E() }],
			"scroll-mb": [{ "scroll-mb": E() }],
			"scroll-ml": [{ "scroll-ml": E() }],
			"scroll-p": [{ "scroll-p": E() }],
			"scroll-px": [{ "scroll-px": E() }],
			"scroll-py": [{ "scroll-py": E() }],
			"scroll-ps": [{ "scroll-ps": E() }],
			"scroll-pe": [{ "scroll-pe": E() }],
			"scroll-pbs": [{ "scroll-pbs": E() }],
			"scroll-pbe": [{ "scroll-pbe": E() }],
			"scroll-pt": [{ "scroll-pt": E() }],
			"scroll-pr": [{ "scroll-pr": E() }],
			"scroll-pb": [{ "scroll-pb": E() }],
			"scroll-pl": [{ "scroll-pl": E() }],
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
			fill: [{ fill: ["none", ...R()] }],
			"stroke-w": [{ stroke: [
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength,
				isArbitraryNumber
			] }],
			stroke: [{ stroke: ["none", ...R()] }],
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
}, mergeConfigs = (t, { cacheSize: r, prefix: i, experimentalParseClassName: a, extend: o = {}, override: s = {} }) => (overrideProperty(t, "cacheSize", r), overrideProperty(t, "prefix", i), overrideProperty(t, "experimentalParseClassName", a), overrideConfigProperties(t.theme, s.theme), overrideConfigProperties(t.classGroups, s.classGroups), overrideConfigProperties(t.conflictingClassGroups, s.conflictingClassGroups), overrideConfigProperties(t.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), overrideProperty(t, "orderSensitiveModifiers", s.orderSensitiveModifiers), mergeConfigProperties(t.theme, o.theme), mergeConfigProperties(t.classGroups, o.classGroups), mergeConfigProperties(t.conflictingClassGroups, o.conflictingClassGroups), mergeConfigProperties(t.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), mergeArrayProperties(t, o, "orderSensitiveModifiers"), t), overrideProperty = (t, r, i) => {
	i !== void 0 && (t[r] = i);
}, overrideConfigProperties = (t, r) => {
	if (r) for (let i in r) overrideProperty(t, i, r[i]);
}, mergeConfigProperties = (t, r) => {
	if (r) for (let i in r) mergeArrayProperties(t, r, i);
}, mergeArrayProperties = (t, r, i) => {
	let a = r[i];
	a !== void 0 && (t[i] = t[i] ? t[i].concat(a) : a);
}, extendTailwindMerge = (t, ...r) => typeof t == "function" ? createTailwindMerge(getDefaultConfig, t, ...r) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), t), ...r), twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
function cn(...t) {
	return twMerge(clsx(t));
}
var SPACE_REGEX = /\s+/g, removeExtraSpaces = (t) => typeof t != "string" || !t ? t : t.replace(SPACE_REGEX, " ").trim(), cx$1 = (...t) => {
	let r = [], i = (t) => {
		if (!t && t !== 0 && t !== 0n) return;
		if (Array.isArray(t)) {
			for (let r = 0, a = t.length; r < a; r++) i(t[r]);
			return;
		}
		let a = typeof t;
		if (a === "string" || a === "number" || a === "bigint") {
			if (a === "number" && t !== t) return;
			r.push(String(t));
		} else if (a === "object") {
			let i = Object.keys(t);
			for (let a = 0, o = i.length; a < o; a++) {
				let o = i[a];
				t[o] && r.push(o);
			}
		}
	};
	for (let r = 0, a = t.length; r < a; r++) {
		let a = t[r];
		a != null && i(a);
	}
	return r.length > 0 ? removeExtraSpaces(r.join(" ")) : void 0;
}, falsyToString = (t) => t === !1 ? "false" : t === !0 ? "true" : t === 0 ? "0" : t, isEmptyObject = (t) => {
	if (!t || typeof t != "object") return !0;
	for (let r in t) return !1;
	return !0;
}, isEqual = (t, r) => {
	if (t === r) return !0;
	if (!t || !r) return !1;
	let i = Object.keys(t), a = Object.keys(r);
	if (i.length !== a.length) return !1;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		if (!a.includes(s) || t[s] !== r[s]) return !1;
	}
	return !0;
}, joinObjects = (t, r) => {
	for (let i in r) if (Object.prototype.hasOwnProperty.call(r, i)) {
		let a = r[i];
		i in t ? t[i] = cx$1(t[i], a) : t[i] = a;
	}
	return t;
}, flat = (t, r) => {
	for (let i = 0; i < t.length; i++) {
		let a = t[i];
		Array.isArray(a) ? flat(a, r) : a && r.push(a);
	}
}, flatMergeArrays = (...t) => {
	let r = [];
	flat(t, r);
	let i = [];
	for (let t = 0; t < r.length; t++) r[t] && i.push(r[t]);
	return i;
}, mergeObjects = (t, r) => {
	let i = {};
	for (let a in t) {
		let o = t[a];
		if (a in r) {
			let t = r[a];
			Array.isArray(o) || Array.isArray(t) ? i[a] = flatMergeArrays(t, o) : typeof o == "object" && typeof t == "object" && o && t ? i[a] = mergeObjects(o, t) : i[a] = t + " " + o;
		} else i[a] = o;
	}
	for (let a in r) a in t || (i[a] = r[a]);
	return i;
}, defaultConfig = {
	twMerge: !0,
	twMergeConfig: {}
};
function createState() {
	let t = null, r = {}, i = !1;
	return {
		get cachedTwMerge() {
			return t;
		},
		set cachedTwMerge(r) {
			t = r;
		},
		get cachedTwMergeConfig() {
			return r;
		},
		set cachedTwMergeConfig(t) {
			r = t;
		},
		get didTwMergeConfigChange() {
			return i;
		},
		set didTwMergeConfigChange(t) {
			i = t;
		},
		reset() {
			t = null, r = {}, i = !1;
		}
	};
}
var state$1 = createState(), getTailwindVariants = (t) => {
	let r = (r, i) => {
		let { extend: a = null, slots: o = {}, variants: s = {}, compoundVariants: c = [], compoundSlots: l = [], defaultVariants: u = {} } = r, d = {
			...defaultConfig,
			...i
		}, f = a?.base ? cx$1(a.base, r?.base) : r?.base, p = a?.variants && !isEmptyObject(a.variants) ? mergeObjects(s, a.variants) : s, m = a?.defaultVariants && !isEmptyObject(a.defaultVariants) ? {
			...a.defaultVariants,
			...u
		} : u;
		!isEmptyObject(d.twMergeConfig) && !isEqual(d.twMergeConfig, state$1.cachedTwMergeConfig) && (state$1.didTwMergeConfigChange = !0, state$1.cachedTwMergeConfig = d.twMergeConfig);
		let h = isEmptyObject(a?.slots), g = isEmptyObject(o) ? {} : {
			base: cx$1(r?.base, h && a?.base),
			...o
		}, _ = h ? g : joinObjects({ ...a?.slots }, isEmptyObject(g) ? { base: r?.base } : g), v = isEmptyObject(a?.compoundVariants) ? c : flatMergeArrays(a?.compoundVariants, c), y = (r) => {
			if (isEmptyObject(p) && isEmptyObject(o) && h) return t(f, r?.class, r?.className)(d);
			if (v && !Array.isArray(v)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof v}`);
			if (l && !Array.isArray(l)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
			let i = (t, i = p, a = null, o = null) => {
				let s = i[t];
				if (!s || isEmptyObject(s)) return null;
				let c = o?.[t] ?? r?.[t];
				if (c === null) return null;
				let l = falsyToString(c);
				if (typeof l == "object") return null;
				let u = m?.[t];
				return s[(l ?? falsyToString(u)) || "false"];
			}, a = () => {
				if (!p) return null;
				let t = Object.keys(p), r = [];
				for (let a = 0; a < t.length; a++) {
					let o = i(t[a], p);
					o && r.push(o);
				}
				return r;
			}, s = (t, r) => {
				if (!p || typeof p != "object") return null;
				let a = [];
				for (let o in p) {
					let s = i(o, p, t, r), c = t === "base" && typeof s == "string" ? s : s && s[t];
					c && a.push(c);
				}
				return a;
			}, c = {};
			for (let t in r) {
				let i = r[t];
				i !== void 0 && (c[t] = i);
			}
			let u = (t, i) => {
				let a = typeof r?.[t] == "object" ? { [t]: r[t]?.initial } : {};
				return {
					...m,
					...c,
					...a,
					...i
				};
			}, g = (t = [], r) => {
				let i = [], a = t.length;
				for (let o = 0; o < a; o++) {
					let { class: a, className: s, ...c } = t[o], l = !0, d = u(null, r);
					for (let t in c) {
						let r = c[t], i = d[t];
						if (Array.isArray(r)) {
							if (!r.includes(i)) {
								l = !1;
								break;
							}
						} else {
							if ((r == null || r === !1) && (i == null || i === !1)) continue;
							if (i !== r) {
								l = !1;
								break;
							}
						}
					}
					l && (a && i.push(a), s && i.push(s));
				}
				return i;
			}, y = (r) => {
				let i = g(v, r);
				if (!Array.isArray(i)) return i;
				let a = {}, o = t;
				for (let t = 0; t < i.length; t++) {
					let r = i[t];
					if (typeof r == "string") a.base = o(a.base, r)(d);
					else if (typeof r == "object") for (let t in r) a[t] = o(a[t], r[t])(d);
				}
				return a;
			}, b = (t) => {
				if (l.length < 1) return null;
				let r = {}, i = u(null, t);
				for (let t = 0; t < l.length; t++) {
					let { slots: a = [], class: o, className: s, ...c } = l[t];
					if (!isEmptyObject(c)) {
						let t = !0;
						for (let r in c) {
							let a = i[r], o = c[r];
							if (a === void 0 || (Array.isArray(o) ? !o.includes(a) : o !== a)) {
								t = !1;
								break;
							}
						}
						if (!t) continue;
					}
					for (let t = 0; t < a.length; t++) {
						let i = a[t];
						r[i] || (r[i] = []), r[i].push([o, s]);
					}
				}
				return r;
			};
			if (!isEmptyObject(o) || !h) {
				let r = {};
				if (typeof _ == "object" && !isEmptyObject(_)) {
					let i = t;
					for (let t in _) r[t] = (r) => {
						let a = y(r), o = b(r);
						return i(_[t], s(t, r), a ? a[t] : void 0, o ? o[t] : void 0, r?.class, r?.className)(d);
					};
				}
				return r;
			}
			return t(f, a(), g(v), r?.class, r?.className)(d);
		};
		return y.variantKeys = (() => {
			if (!(!p || typeof p != "object")) return Object.keys(p);
		})(), y.extend = a, y.base = f, y.slots = _, y.variants = p, y.defaultVariants = m, y.compoundSlots = l, y.compoundVariants = v, y;
	};
	return {
		tv: r,
		createTV: (t) => (i, a) => r(i, a ? mergeObjects(t, a) : t)
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
}), executeMerge = (t, r) => {
	let i = cx$1(t);
	return !i || !(r?.twMerge ?? !0) ? i : ((!state$1.cachedTwMerge || state$1.didTwMergeConfigChange) && (state$1.didTwMergeConfigChange = !1, state$1.cachedTwMerge = createTwMerge(state$1.cachedTwMergeConfig)), state$1.cachedTwMerge(i) || void 0);
}, { createTV, tv } = getTailwindVariants((...t) => (r) => executeMerge(t, r));
const buttonVariants = tv({
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
var root_1$7 = /* @__PURE__ */ from_html("<a><!></a>"), root_2$16 = /* @__PURE__ */ from_html("<button><!></button>");
function Button(t, r) {
	push(r, !0);
	let i = prop(r, "variant", 3, "default"), a = prop(r, "size", 3, "default"), o = prop(r, "ref", 15, null), s = prop(r, "href", 3, void 0), c = prop(r, "type", 3, "button"), l = /* @__PURE__ */ rest_props(r, [
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
	var u = comment(), d = first_child(u), f = (t) => {
		var c = root_1$7();
		attribute_effect(c, (t) => ({
			"data-slot": "button",
			class: t,
			href: r.disabled ? void 0 : s(),
			"aria-disabled": r.disabled,
			role: r.disabled ? "link" : void 0,
			tabindex: r.disabled ? -1 : void 0,
			...l
		}), [() => cn(buttonVariants({
			variant: i(),
			size: a()
		}), r.class)]), snippet(child(c), () => r.children ?? noop$2), reset(c), bind_this(c, (t) => o(t), () => o()), append(t, c);
	}, p = (t) => {
		var s = root_2$16();
		attribute_effect(s, (t) => ({
			"data-slot": "button",
			class: t,
			type: c(),
			disabled: r.disabled,
			...l
		}), [() => cn(buttonVariants({
			variant: i(),
			size: a()
		}), r.class)]), snippet(child(s), () => r.children ?? noop$2), reset(s), bind_this(s, (t) => o(t), () => o()), append(t, s);
	};
	if_block(d, (t) => {
		s() ? t(f) : t(p, -1);
	}), append(t, u), pop();
}
var root$26 = /* @__PURE__ */ from_html("<div class=\"relative w-15 h-15 shrink-0 overflow-hidden\"><div class=\"absolute top-[18%] left-[-75%] w-[250%] py-[0.25em] pr-[1.5em] -rotate-45 bg-primary text-white text-[0.6rem] font-bold text-center shadow-md leading-none pointer-events-none\"> </div></div>");
function VersionBadge(t, r) {
	let i = prop(r, "version", 3, "main");
	var a = root$26(), o = child(a), s = child(o, !0);
	reset(o), reset(a), template_effect(() => set_text(s, i())), append(t, a);
}
function isFunction$2(t) {
	return typeof t == "function";
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
function boxWith$1(t, r) {
	let i = /* @__PURE__ */ user_derived(t);
	return r ? {
		[BoxSymbol$1]: !0,
		[isWritableSymbol$1]: !0,
		get current() {
			return get$3(i);
		},
		set current(t) {
			r(t);
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
function boxFrom$1(t) {
	return isBox$1(t) ? t : isFunction$2(t) ? boxWith$1(t) : simpleBox(t);
}
function simpleBox(t) {
	let r = /* @__PURE__ */ state(proxy(t));
	return {
		[BoxSymbol$1]: !0,
		[isWritableSymbol$1]: !0,
		get current() {
			return get$3(r);
		},
		set current(t) {
			set(r, t, !0);
		}
	};
}
function composeHandlers$1(...t) {
	return function(r) {
		for (let i of t) if (i) {
			if (r.defaultPrevented) return;
			typeof i == "function" ? i.call(this, r) : i.current?.call(this, r);
		}
	};
}
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, NEWLINE_REGEX = /\n/g, WHITESPACE_REGEX = /^\s*/, PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, COLON_REGEX = /^:\s*/, VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, SEMICOLON_REGEX = /^[;\s]*/, TRIM_REGEX = /^\s+|\s+$/g, NEWLINE = "\n", FORWARD_SLASH = "/", ASTERISK = "*", EMPTY_STRING = "", TYPE_COMMENT = "comment", TYPE_DECLARATION = "declaration";
function index(t, r) {
	if (typeof t != "string") throw TypeError("First argument must be a string");
	if (!t) return [];
	r ||= {};
	var i = 1, a = 1;
	function o(t) {
		var r = t.match(NEWLINE_REGEX);
		r && (i += r.length);
		var o = t.lastIndexOf(NEWLINE);
		a = ~o ? t.length - o : a + t.length;
	}
	function s() {
		var t = {
			line: i,
			column: a
		};
		return function(r) {
			return r.position = new c(t), d(), r;
		};
	}
	function c(t) {
		this.start = t, this.end = {
			line: i,
			column: a
		}, this.source = r.source;
	}
	c.prototype.content = t;
	function l(o) {
		var s = /* @__PURE__ */ Error(r.source + ":" + i + ":" + a + ": " + o);
		if (s.reason = o, s.filename = r.source, s.line = i, s.column = a, s.source = t, !r.silent) throw s;
	}
	function u(r) {
		var i = r.exec(t);
		if (i) {
			var a = i[0];
			return o(a), t = t.slice(a.length), i;
		}
	}
	function d() {
		u(WHITESPACE_REGEX);
	}
	function f(t) {
		var r;
		for (t ||= []; r = p();) r !== !1 && t.push(r);
		return t;
	}
	function p() {
		var r = s();
		if (!(FORWARD_SLASH != t.charAt(0) || ASTERISK != t.charAt(1))) {
			for (var i = 2; EMPTY_STRING != t.charAt(i) && (ASTERISK != t.charAt(i) || FORWARD_SLASH != t.charAt(i + 1));) ++i;
			if (i += 2, EMPTY_STRING === t.charAt(i - 1)) return l("End of comment missing");
			var c = t.slice(2, i - 2);
			return a += 2, o(c), t = t.slice(i), a += 2, r({
				type: TYPE_COMMENT,
				comment: c
			});
		}
	}
	function m() {
		var t = s(), r = u(PROPERTY_REGEX);
		if (r) {
			if (p(), !u(COLON_REGEX)) return l("property missing ':'");
			var i = u(VALUE_REGEX), a = t({
				type: TYPE_DECLARATION,
				property: trim(r[0].replace(COMMENT_REGEX, EMPTY_STRING)),
				value: i ? trim(i[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
			});
			return u(SEMICOLON_REGEX), a;
		}
	}
	function h() {
		var t = [];
		f(t);
		for (var r; r = m();) r !== !1 && (t.push(r), f(t));
		return t;
	}
	return d(), h();
}
function trim(t) {
	return t ? t.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
function StyleToObject(t, r) {
	let i = null;
	if (!t || typeof t != "string") return i;
	let a = index(t), o = typeof r == "function";
	return a.forEach((t) => {
		if (t.type !== "declaration") return;
		let { property: a, value: s } = t;
		o ? r(a, s, t) : s && (i ||= {}, i[a] = s);
	}), i;
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
	let r = [], i = "", a, o;
	for (let s of t) {
		let t = STR_SPLITTERS$1.includes(s);
		if (t === !0) {
			r.push(i), i = "", a = void 0;
			continue;
		}
		let c = isUppercase$1(s);
		if (o === !1) {
			if (a === !1 && c === !0) {
				r.push(i), i = s, a = c;
				continue;
			}
			if (a === !0 && c === !1 && i.length > 1) {
				let t = i.at(-1);
				r.push(i.slice(0, Math.max(0, i.length - 1))), i = t + s, a = c;
				continue;
			}
		}
		i += s, a = c, o = t;
	}
	return r.push(i), r;
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
	let r = {};
	function i(t, i) {
		if (t.startsWith("-moz-") || t.startsWith("-webkit-") || t.startsWith("-ms-") || t.startsWith("-o-")) {
			r[pascalCase$1(t)] = i;
			return;
		}
		if (t.startsWith("--")) {
			r[t] = i;
			return;
		}
		r[camelCase$1(t)] = i;
	}
	return StyleToObject(t, i), r;
}
function executeCallbacks$1(...t) {
	return (...r) => {
		for (let i of t) typeof i == "function" && i(...r);
	};
}
function createParser$1(t, r) {
	let i = RegExp(t, "g");
	return (t) => {
		if (typeof t != "string") throw TypeError(`expected an argument of type string, but got ${typeof t}`);
		return t.match(i) ? t.replace(i, r) : t;
	};
}
var camelToKebab$2 = createParser$1(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function styleToCSS$1(t) {
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError(`expected an argument of type object, but got ${typeof t}`);
	return Object.keys(t).map((r) => `${camelToKebab$2(r)}: ${t[r]};`).join("\n");
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
	let r = { ...t[0] };
	for (let i = 1; i < t.length; i++) {
		let a = t[i];
		if (a) {
			for (let t of Object.keys(a)) {
				let i = r[t], o = a[t], s = typeof i == "function", c = typeof o == "function";
				if (s && typeof c && isEventHandler$1(t)) r[t] = composeHandlers$1(i, o);
				else if (s && c) r[t] = executeCallbacks$1(i, o);
				else if (t === "class") {
					let a = isClassValue$1(i), s = isClassValue$1(o);
					a && s ? r[t] = clsx(i, o) : a ? r[t] = clsx(i) : s && (r[t] = clsx(o));
				} else if (t === "style") {
					let a = typeof i == "object", s = typeof o == "object", c = typeof i == "string", l = typeof o == "string";
					if (a && s) r[t] = {
						...i,
						...o
					};
					else if (a && l) {
						let a = cssToStyleObj$1(o);
						r[t] = {
							...i,
							...a
						};
					} else if (c && s) r[t] = {
						...cssToStyleObj$1(i),
						...o
					};
					else if (c && l) {
						let a = cssToStyleObj$1(i), s = cssToStyleObj$1(o);
						r[t] = {
							...a,
							...s
						};
					} else a ? r[t] = i : s ? r[t] = o : c ? r[t] = i : l && (r[t] = o);
				} else r[t] = o === void 0 ? i : o;
			}
			for (let t of Object.getOwnPropertySymbols(a)) {
				let i = r[t], o = a[t];
				r[t] = o === void 0 ? i : o;
			}
		}
	}
	return typeof r.style == "object" && (r.style = styleToString$1(r.style).replaceAll("\n", " ")), r.hidden === !1 && (r.hidden = void 0, delete r.hidden), r.disabled === !1 && (r.disabled = void 0, delete r.disabled), r;
}
const defaultWindow$2 = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function getActiveElement$4(t) {
	let r = t.activeElement;
	for (; r?.shadowRoot;) {
		let t = r.shadowRoot.activeElement;
		if (t === r) break;
		r = t;
	}
	return r;
}
var SvelteMap = class extends Map {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ state(0);
	#n = /* @__PURE__ */ state(0);
	#r = update_version || -1;
	constructor(t) {
		if (super(), t) {
			for (var [r, i] of t) super.set(r, i);
			this.#n.v = super.size;
		}
	}
	#i(t) {
		return update_version === this.#r ? /* @__PURE__ */ state(t) : source(t);
	}
	has(t) {
		var r = this.#e, i = r.get(t);
		if (i === void 0) if (super.has(t)) i = this.#i(0), r.set(t, i);
		else return get$3(this.#t), !1;
		return get$3(i), !0;
	}
	forEach(t, r) {
		this.#a(), super.forEach(t, r);
	}
	get(t) {
		var r = this.#e, i = r.get(t);
		if (i === void 0) if (super.has(t)) i = this.#i(0), r.set(t, i);
		else {
			get$3(this.#t);
			return;
		}
		return get$3(i), super.get(t);
	}
	set(t, r) {
		var i = this.#e, a = i.get(t), o = super.get(t), s = super.set(t, r), c = this.#t;
		if (a === void 0) a = this.#i(0), i.set(t, a), set(this.#n, super.size), increment(c);
		else if (o !== r) {
			increment(a);
			var l = c.reactions === null ? null : new Set(c.reactions);
			(l === null || !a.reactions?.every((t) => l.has(t))) && increment(c);
		}
		return s;
	}
	delete(t) {
		var r = this.#e, i = r.get(t), a = super.delete(t);
		return i !== void 0 && (r.delete(t), set(i, -1)), a && (set(this.#n, super.size), increment(this.#t)), a;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var t = this.#e;
			set(this.#n, 0);
			for (var r of t.values()) set(r, -1);
			increment(this.#t), t.clear();
		}
	}
	#a() {
		get$3(this.#t);
		var t = this.#e;
		if (this.#n.v !== t.size) {
			for (var r of super.keys()) if (!t.has(r)) {
				var i = this.#i(0);
				t.set(r, i);
			}
		}
		for ([, i] of this.#e) get$3(i);
	}
	keys() {
		return get$3(this.#t), super.keys();
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
		return get$3(this.#n), super.size;
	}
};
URLSearchParams, Symbol.iterator, new class {
	#e;
	#t;
	constructor(t = {}) {
		let { window: r = defaultWindow$2, document: i = r?.document } = t;
		r !== void 0 && (this.#e = i, this.#t = createSubscriber((t) => {
			let i = on(r, "focusin", t), a = on(r, "focusout", t);
			return () => {
				i(), a();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? getActiveElement$4(this.#e) : null;
	}
}();
function isFunction$1(t) {
	return typeof t == "function";
}
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
		let r = getContext(this.#t);
		return r === void 0 ? t : r;
	}
	set(t) {
		return setContext(this.#t, t);
	}
};
function runEffect$2(t, r) {
	switch (t) {
		case "post":
			user_effect(r);
			break;
		case "pre":
			user_pre_effect(r);
			break;
	}
}
function runWatcher$2(t, r, i, a = {}) {
	let { lazy: o = !1 } = a, s = !o, c = Array.isArray(t) ? [] : void 0;
	runEffect$2(r, () => {
		let r = Array.isArray(t) ? t.map((t) => t()) : t();
		if (!s) {
			s = !0, c = r;
			return;
		}
		let a = untrack(() => i(r, c));
		return c = r, a;
	});
}
function runWatcherOnce$2(t, r, i) {
	let a = effect_root(() => {
		let o = !1;
		runWatcher$2(t, r, (t, r) => {
			if (o) {
				a();
				return;
			}
			let s = i(t, r);
			return o = !0, s;
		}, { lazy: !0 });
	});
	user_effect(() => a);
}
function watch$2(t, r, i) {
	runWatcher$2(t, "post", r, i);
}
function watchPre$2(t, r, i) {
	runWatcher$2(t, "pre", r, i);
}
watch$2.pre = watchPre$2;
function watchOnce$2(t, r) {
	runWatcherOnce$2(t, "post", r);
}
function watchOncePre$2(t, r) {
	runWatcherOnce$2(t, "pre", r);
}
watchOnce$2.pre = watchOncePre$2;
function get$2(t) {
	return isFunction$1(t) ? t() : t;
}
var ElementSize = class {
	#e = {
		width: 0,
		height: 0
	};
	#t = !1;
	#n;
	#r;
	#i;
	#a = /* @__PURE__ */ user_derived(() => (get$3(this.#s)?.(), this.getSize().width));
	#o = /* @__PURE__ */ user_derived(() => (get$3(this.#s)?.(), this.getSize().height));
	#s = /* @__PURE__ */ user_derived(() => {
		let t = get$2(this.#r);
		if (t) return createSubscriber((r) => {
			if (!this.#i) return;
			let i = new this.#i.ResizeObserver((t) => {
				this.#t = !0;
				for (let r of t) {
					let t = this.#n.box === "content-box" ? r.contentBoxSize : r.borderBoxSize, i = Array.isArray(t) ? t : [t];
					this.#e.width = i.reduce((t, r) => Math.max(t, r.inlineSize), 0), this.#e.height = i.reduce((t, r) => Math.max(t, r.blockSize), 0);
				}
				r();
			});
			return i.observe(t), () => {
				this.#t = !1, i.disconnect();
			};
		});
	});
	constructor(t, r = { box: "border-box" }) {
		this.#i = r.window ?? defaultWindow$2, this.#n = r, this.#r = t, this.#e = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		let t = get$2(this.#r);
		if (!t || !this.#i) return;
		let r = t.offsetWidth, i = t.offsetHeight;
		if (this.#n.box === "border-box") return {
			width: r,
			height: i
		};
		let a = this.#i.getComputedStyle(t), o = parseFloat(a.paddingLeft) + parseFloat(a.paddingRight), s = parseFloat(a.paddingTop) + parseFloat(a.paddingBottom), c = parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth), l = parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth);
		return {
			width: r - o - c,
			height: i - s - l
		};
	}
	getSize() {
		return this.#t ? this.#e : this.calculateSize() ?? this.#e;
	}
	get current() {
		return get$3(this.#s)?.(), this.getSize();
	}
	get width() {
		return get$3(this.#a);
	}
	get height() {
		return get$3(this.#o);
	}
};
function debounce$3(t, r) {
	let i, a = null;
	return (...o) => new Promise((s) => {
		a && a(void 0), a = s, clearTimeout(i), i = setTimeout(async () => {
			let r = await t(...o);
			a &&= (a(r), null);
		}, r);
	});
}
function throttle$1(t, r) {
	let i = 0, a = null;
	return (...o) => {
		let s = Date.now();
		return i && s - i < r ? a ?? Promise.resolve(void 0) : (i = s, a = t(...o), a);
	};
}
function runResource$1(t, r, i = {}, a) {
	let { lazy: o = !1, once: s = !1, initialValue: c, debounce: l, throttle: u } = i, d = /* @__PURE__ */ state(proxy(c)), f = /* @__PURE__ */ state(!1), p = /* @__PURE__ */ state(void 0), m = /* @__PURE__ */ state(proxy([])), h = () => {
		get$3(m).forEach((t) => t()), set(m, [], !0);
	}, g = (t) => {
		set(m, [...get$3(m), t], !0);
	}, _ = async (t, i, a = !1) => {
		try {
			set(f, !0), set(p, void 0), h();
			let o = new AbortController();
			g(() => o.abort());
			let s = await r(t, i, {
				data: get$3(d),
				refetching: a,
				onCleanup: g,
				signal: o.signal
			});
			return set(d, s, !0), s;
		} catch (t) {
			t instanceof DOMException && t.name === "AbortError" || set(p, t, !0);
			return;
		} finally {
			set(f, !1);
		}
	}, v = l ? debounce$3(_, l) : u ? throttle$1(_, u) : _, y = Array.isArray(t) ? t : [t], b;
	return a((r, i) => {
		s && b || (b = r, v(Array.isArray(t) ? r : r[0], Array.isArray(t) ? i : i?.[0]));
	}, { lazy: o }), {
		get current() {
			return get$3(d);
		},
		get loading() {
			return get$3(f);
		},
		get error() {
			return get$3(p);
		},
		mutate: (t) => {
			set(d, t, !0);
		},
		refetch: (r) => {
			let i = y.map((t) => t());
			return v(Array.isArray(t) ? i : i[0], Array.isArray(t) ? i : i[0], r ?? !0);
		}
	};
}
function resource$1(t, r, i) {
	return runResource$1(t, r, i, (r, i) => {
		let a = Array.isArray(t) ? t : [t];
		watch$2(() => a.map((t) => t()), (t, i) => {
			r(t, i ?? []);
		}, i);
	});
}
function resourcePre$1(t, r, i) {
	return runResource$1(t, r, i, (r, i) => {
		let a = Array.isArray(t) ? t : [t];
		watch$2.pre(() => a.map((t) => t()), (t, i) => {
			r(t, i ?? []);
		}, i);
	});
}
resource$1.pre = resourcePre$1;
function onDestroyEffect(t) {
	user_effect(() => () => {
		t();
	});
}
function onMountEffect(t) {
	user_effect(() => untrack(() => t()));
}
function afterSleep(t, r) {
	return setTimeout(r, t);
}
function afterTick$1(t) {
	tick().then(t);
}
var ELEMENT_NODE = 1, DOCUMENT_NODE$1 = 9, DOCUMENT_FRAGMENT_NODE = 11;
function isHTMLElement$3(t) {
	return isObject$1(t) && t.nodeType === ELEMENT_NODE && typeof t.nodeName == "string";
}
function isDocument$1(t) {
	return isObject$1(t) && t.nodeType === DOCUMENT_NODE$1;
}
function isWindow$1(t) {
	return isObject$1(t) && t.constructor?.name === "VisualViewport";
}
function isNode$1(t) {
	return isObject$1(t) && t.nodeType !== void 0;
}
function isShadowRoot$1(t) {
	return isNode$1(t) && t.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in t;
}
function contains(t, r) {
	if (!t || !r || !isHTMLElement$3(t) || !isHTMLElement$3(r)) return !1;
	let i = r.getRootNode?.();
	if (t === r || t.contains(r)) return !0;
	if (i && isShadowRoot$1(i)) {
		let i = r;
		for (; i;) {
			if (t === i) return !0;
			i = i.parentNode || i.host;
		}
	}
	return !1;
}
function getDocument$1(t) {
	return isDocument$1(t) ? t : isWindow$1(t) ? t.document : t?.ownerDocument ?? document;
}
function getWindow(t) {
	return isShadowRoot$1(t) ? getWindow(t.host) : isDocument$1(t) ? t.defaultView ?? window : isHTMLElement$3(t) ? t.ownerDocument?.defaultView ?? window : window;
}
function getActiveElement$3(t) {
	let r = t.activeElement;
	for (; r?.shadowRoot;) {
		let t = r.shadowRoot.activeElement;
		if (t === r) break;
		r = t;
	}
	return r;
}
var DOMContext$1 = class {
	element;
	#e = /* @__PURE__ */ user_derived(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return get$3(this.#e);
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
	setTimeout = (t, r) => this.getWindow().setTimeout(t, r);
	clearTimeout = (t) => this.getWindow().clearTimeout(t);
};
function attachRef$1(t, r) {
	return { [createAttachmentKey()]: (i) => isBox$1(t) ? (t.current = i, untrack(() => r?.(i)), () => {
		"isConnected" in i && i.isConnected || (t.current = null, r?.(null));
	}) : (t(i), untrack(() => r?.(i)), () => {
		"isConnected" in i && i.isConnected || (t(null), r?.(null));
	}) };
}
function boolToStr(t) {
	return t ? "true" : "false";
}
function getDataOpenClosed(t) {
	return t ? "open" : "closed";
}
function getDataTransitionAttrs(t) {
	return t === "starting" ? { "data-starting-style": "" } : t === "ending" ? { "data-ending-style": "" } : {};
}
var BitsAttrs = class {
	#e;
	#t;
	attrs;
	constructor(t) {
		this.#e = t.getVariant ? t.getVariant() : null, this.#t = this.#e ? `data-${this.#e}-` : `data-${t.component}-`, this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(t.parts.map((t) => [t, this.getAttr(t)]));
	}
	getAttr(t, r) {
		return r ? `data-${r}-${t}` : `${this.#t}${t}`;
	}
	selector(t, r) {
		return `[${this.getAttr(t, r)}]`;
	}
};
function createBitsAttrs(t) {
	let r = new BitsAttrs(t);
	return {
		...r.attrs,
		selector: r.selector,
		getAttr: r.getAttr
	};
}
const isBrowser$1 = typeof document < "u", isIOS = getIsIOS();
function getIsIOS() {
	return isBrowser$1 && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function isHTMLElement$2(t) {
	return t instanceof HTMLElement;
}
function isElement(t) {
	return t instanceof Element;
}
function isElementOrSVGElement(t) {
	return t instanceof Element || t instanceof SVGElement;
}
function isTouch(t) {
	return t.pointerType === "touch";
}
function isFocusVisible(t) {
	return t.matches(":focus-visible");
}
function isNotNull(t) {
	return t !== null;
}
var AnimationsComplete = class {
	#e;
	#t = null;
	#n = null;
	#r = 0;
	constructor(t) {
		this.#e = t, onDestroyEffect(() => this.#i());
	}
	#i() {
		this.#t !== null && (window.cancelAnimationFrame(this.#t), this.#t = null), this.#n?.disconnect(), this.#n = null, this.#r++;
	}
	run(t) {
		this.#i();
		let r = this.#e.ref.current;
		if (!r) return;
		if (typeof r.getAnimations != "function") {
			this.#a(t);
			return;
		}
		let i = this.#r, a = () => {
			i === this.#r && this.#a(t);
		}, o = () => {
			if (i !== this.#r) return;
			let t = r.getAnimations();
			if (t.length === 0) {
				a();
				return;
			}
			Promise.all(t.map((t) => t.finished)).then(() => {
				a();
			}).catch(() => {
				if (i === this.#r) {
					if (r.getAnimations().some((t) => t.pending || t.playState !== "finished")) {
						o();
						return;
					}
					a();
				}
			});
		}, s = () => {
			this.#t = window.requestAnimationFrame(() => {
				this.#t = null, o();
			});
		};
		if (!this.#e.afterTick.current) {
			s();
			return;
		}
		this.#t = window.requestAnimationFrame(() => {
			this.#t = null;
			let t = "data-starting-style";
			if (!r.hasAttribute(t)) {
				s();
				return;
			}
			this.#n = new MutationObserver(() => {
				i === this.#r && (r.hasAttribute(t) || (this.#n?.disconnect(), this.#n = null, s()));
			}), this.#n.observe(r, {
				attributes: !0,
				attributeFilter: [t]
			});
		});
	}
	#a(t) {
		let r = () => {
			t();
		};
		this.#e.afterTick ? afterTick$1(r) : r();
	}
}, PresenceManager = class {
	#e;
	#t;
	#n;
	#r = /* @__PURE__ */ state(!1);
	#i = /* @__PURE__ */ state(void 0);
	#a = !1;
	#o = null;
	constructor(t) {
		this.#e = t, set(this.#r, t.open.current, !0), this.#t = t.enabled ?? !0, this.#n = new AnimationsComplete({
			ref: this.#e.ref,
			afterTick: this.#e.open
		}), onDestroyEffect(() => this.#s()), watch$2(() => this.#e.open.current, (t) => {
			if (!this.#a) {
				this.#a = !0;
				return;
			}
			if (this.#s(), !t && this.#e.shouldSkipExitAnimation?.()) {
				set(this.#r, !1), set(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			if (t && set(this.#r, !0), set(this.#i, t ? "starting" : "ending", !0), t && (this.#o = window.requestAnimationFrame(() => {
				this.#o = null, this.#e.open.current && set(this.#i, void 0);
			})), !this.#t) {
				t || set(this.#r, !1), set(this.#i, void 0), this.#e.onComplete?.();
				return;
			}
			this.#n.run(() => {
				t === this.#e.open.current && (this.#e.open.current || set(this.#r, !1), set(this.#i, void 0), this.#e.onComplete?.());
			});
		});
	}
	get shouldRender() {
		return get$3(this.#r);
	}
	get transitionStatus() {
		return get$3(this.#i);
	}
	#s() {
		this.#o !== null && (window.cancelAnimationFrame(this.#o), this.#o = null);
	}
};
function noop$1() {}
function createId(t, r) {
	return r === void 0 ? `bits-${t}` : `bits-${t}-${r}`;
}
function Portal_consumer(t, r) {
	var i = comment();
	key(first_child(i), () => r.children, (t) => {
		var i = comment();
		snippet(first_child(i), () => r.children ?? noop$2), append(t, i);
	}), append(t, i);
}
const BitsConfigContext = new Context$1("BitsConfig");
function getBitsConfig() {
	let t = new BitsConfigState(null, {});
	return BitsConfigContext.getOr(t).opts;
}
var BitsConfigState = class {
	opts;
	constructor(t, r) {
		let i = createConfigResolver(t, r);
		this.opts = {
			defaultPortalTo: i((t) => t.defaultPortalTo),
			defaultLocale: i((t) => t.defaultLocale)
		};
	}
};
function createConfigResolver(t, r) {
	return (i) => boxWith$1(() => {
		let a = i(r)?.current;
		if (a !== void 0) return a;
		if (t !== null) return i(t.opts)?.current;
	});
}
function createPropResolver(t, r) {
	return (i) => {
		let a = getBitsConfig();
		return boxWith$1(() => {
			let o = i();
			if (o !== void 0) return o;
			let s = t(a).current;
			return s === void 0 ? r : s;
		});
	};
}
const resolvePortalToProp = createPropResolver((t) => t.defaultPortalTo, "body");
function Portal(t, r) {
	push(r, !0);
	let i = resolvePortalToProp(() => r.to), a = getAllContexts(), o = /* @__PURE__ */ user_derived(s);
	function s() {
		if (!isBrowser$1 || r.disabled) return null;
		let t = null;
		return t = typeof i.current == "string" ? document.querySelector(i.current) : i.current, t;
	}
	let c;
	function l() {
		c &&= (unmount(c), null);
	}
	watch$2([() => get$3(o), () => r.disabled], ([t, i]) => {
		if (!t || i) {
			l();
			return;
		}
		return c = mount(Portal_consumer, {
			target: t,
			props: { children: r.children },
			context: a
		}), () => {
			l();
		};
	});
	var u = comment(), d = first_child(u), f = (t) => {
		var i = comment();
		snippet(first_child(i), () => r.children ?? noop$2), append(t, i);
	};
	if_block(d, (t) => {
		r.disabled && t(f);
	}), append(t, u), pop();
}
var CustomEventDispatcher = class {
	eventName;
	options;
	constructor(t, r = {
		bubbles: !0,
		cancelable: !0
	}) {
		this.eventName = t, this.options = r;
	}
	createEvent(t) {
		return new CustomEvent(this.eventName, {
			...this.options,
			detail: t
		});
	}
	dispatch(t, r) {
		let i = this.createEvent(r);
		return t.dispatchEvent(i), i;
	}
	listen(t, r, i) {
		return on(t, this.eventName, (t) => {
			r(t);
		}, i);
	}
};
function debounce$2(t, r = 500) {
	let i = null, a = (...a) => {
		i !== null && clearTimeout(i), i = setTimeout(() => {
			t(...a);
		}, r);
	};
	return a.destroy = () => {
		i !== null && (clearTimeout(i), i = null);
	}, a;
}
function isOrContainsTarget(t, r) {
	return t === r || t.contains(r);
}
function getOwnerDocument(t) {
	return t?.ownerDocument ?? document;
}
function isClickTrulyOutside(t, r) {
	let { clientX: i, clientY: a } = t, o = r.getBoundingClientRect();
	return i < o.left || i > o.right || a < o.top || a > o.bottom;
}
function getTabbableCandidates(t) {
	let r = [], i = getDocument$1(t).createTreeWalker(t, NodeFilter.SHOW_ELEMENT, { acceptNode: (t) => {
		let r = t.tagName === "INPUT" && t.type === "hidden";
		return t.disabled || t.hidden || r ? NodeFilter.FILTER_SKIP : t.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; i.nextNode();) r.push(i.currentNode);
	return r;
}
var candidateSelectors = [
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
], candidateSelector = /* @__PURE__ */ candidateSelectors.join(","), NoElement = typeof Element > "u", matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, getRootNode = !NoElement && Element.prototype.getRootNode ? function(t) {
	return t?.getRootNode?.call(t);
} : function(t) {
	return t?.ownerDocument;
}, _isInert = function(t, r) {
	r === void 0 && (r = !0);
	var i = t?.getAttribute?.call(t, "inert");
	return i === "" || i === "true" || r && t && (typeof t.closest == "function" ? t.closest("[inert]") : _isInert(t.parentNode));
}, isContentEditable = function(t) {
	var r = t?.getAttribute?.call(t, "contenteditable");
	return r === "" || r === "true";
}, getCandidates = function(t, r, i) {
	if (_isInert(t)) return [];
	var a = Array.prototype.slice.apply(t.querySelectorAll(candidateSelector));
	return r && matches.call(t, candidateSelector) && a.unshift(t), a = a.filter(i), a;
}, _getCandidatesIteratively = function(t, r, i) {
	for (var a = [], o = Array.from(t); o.length;) {
		var s = o.shift();
		if (!_isInert(s, !1)) if (s.tagName === "SLOT") {
			var c = s.assignedElements(), l = _getCandidatesIteratively(c.length ? c : s.children, !0, i);
			i.flatten ? a.push.apply(a, l) : a.push({
				scopeParent: s,
				candidates: l
			});
		} else {
			matches.call(s, candidateSelector) && i.filter(s) && (r || !t.includes(s)) && a.push(s);
			var u = s.shadowRoot || typeof i.getShadowRoot == "function" && i.getShadowRoot(s), d = !_isInert(u, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
			if (u && d) {
				var f = _getCandidatesIteratively(u === !0 ? s.children : u.children, !0, i);
				i.flatten ? a.push.apply(a, f) : a.push({
					scopeParent: s,
					candidates: f
				});
			} else o.unshift.apply(o, s.children);
		}
	}
	return a;
}, hasTabIndex = function(t) {
	return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, getTabIndex = function(t) {
	if (!t) throw Error("No node provided");
	return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || isContentEditable(t)) && !hasTabIndex(t) ? 0 : t.tabIndex;
}, getSortOrderTabIndex = function(t, r) {
	var i = getTabIndex(t);
	return i < 0 && r && !hasTabIndex(t) ? 0 : i;
}, sortOrderedTabbables = function(t, r) {
	return t.tabIndex === r.tabIndex ? t.documentOrder - r.documentOrder : t.tabIndex - r.tabIndex;
}, isInput = function(t) {
	return t.tagName === "INPUT";
}, isHiddenInput = function(t) {
	return isInput(t) && t.type === "hidden";
}, isDetailsWithSummary = function(t) {
	return t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(t) {
		return t.tagName === "SUMMARY";
	});
}, getCheckedRadio = function(t, r) {
	for (var i = 0; i < t.length; i++) if (t[i].checked && t[i].form === r) return t[i];
}, isTabbableRadio = function(t) {
	if (!t.name) return !0;
	var r = t.form || getRootNode(t), i = function(t) {
		return r.querySelectorAll("input[type=\"radio\"][name=\"" + t + "\"]");
	}, a;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") a = i(window.CSS.escape(t.name));
	else try {
		a = i(t.name);
	} catch (t) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", t.message), !1;
	}
	var o = getCheckedRadio(a, t.form);
	return !o || o === t;
}, isRadio = function(t) {
	return isInput(t) && t.type === "radio";
}, isNonTabbableRadio = function(t) {
	return isRadio(t) && !isTabbableRadio(t);
}, isNodeAttached = function(t) {
	var r = t && getRootNode(t), i = r?.host, a = !1;
	if (r && r !== t) {
		var o, s, c;
		for (a = !!((o = i) != null && (s = o.ownerDocument) != null && s.contains(i) || t != null && (c = t.ownerDocument) != null && c.contains(t)); !a && i;) {
			var l, u;
			r = getRootNode(i), i = r?.host, a = !!((l = i) != null && (u = l.ownerDocument) != null && u.contains(i));
		}
	}
	return a;
}, isZeroArea = function(t) {
	var r = t.getBoundingClientRect(), i = r.width, a = r.height;
	return i === 0 && a === 0;
}, isHidden = function(t, r) {
	var i = r.displayCheck, a = r.getShadowRoot;
	if (i === "full-native" && "checkVisibility" in t) return !t.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	if (getComputedStyle(t).visibility === "hidden") return !0;
	var o = matches.call(t, "details>summary:first-of-type") ? t.parentElement : t;
	if (matches.call(o, "details:not([open]) *")) return !0;
	if (!i || i === "full" || i === "full-native" || i === "legacy-full") {
		if (typeof a == "function") {
			for (var s = t; t;) {
				var c = t.parentElement, l = getRootNode(t);
				if (c && !c.shadowRoot && a(c) === !0) return isZeroArea(t);
				t = t.assignedSlot ? t.assignedSlot : !c && l !== t.ownerDocument ? l.host : c;
			}
			t = s;
		}
		if (isNodeAttached(t)) return !t.getClientRects().length;
		if (i !== "legacy-full") return !0;
	} else if (i === "non-zero-area") return isZeroArea(t);
	return !1;
}, isDisabledFromFieldset = function(t) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName)) for (var r = t.parentElement; r;) {
		if (r.tagName === "FIELDSET" && r.disabled) {
			for (var i = 0; i < r.children.length; i++) {
				var a = r.children.item(i);
				if (a.tagName === "LEGEND") return matches.call(r, "fieldset[disabled] *") ? !0 : !a.contains(t);
			}
			return !0;
		}
		r = r.parentElement;
	}
	return !1;
}, isNodeMatchingSelectorFocusable = function(t, r) {
	return !(r.disabled || isHiddenInput(r) || isHidden(r, t) || isDetailsWithSummary(r) || isDisabledFromFieldset(r));
}, isNodeMatchingSelectorTabbable = function(t, r) {
	return !(isNonTabbableRadio(r) || getTabIndex(r) < 0 || !isNodeMatchingSelectorFocusable(t, r));
}, isShadowRootTabbable = function(t) {
	var r = parseInt(t.getAttribute("tabindex"), 10);
	return !!(isNaN(r) || r >= 0);
}, _sortByOrder = function(t) {
	var r = [], i = [];
	return t.forEach(function(t, a) {
		var o = !!t.scopeParent, s = o ? t.scopeParent : t, c = getSortOrderTabIndex(s, o), l = o ? _sortByOrder(t.candidates) : s;
		c === 0 ? o ? r.push.apply(r, l) : r.push(s) : i.push({
			documentOrder: a,
			tabIndex: c,
			item: t,
			isScope: o,
			content: l
		});
	}), i.sort(sortOrderedTabbables).reduce(function(t, r) {
		return r.isScope ? t.push.apply(t, r.content) : t.push(r.content), t;
	}, []).concat(r);
}, tabbable = function(t, r) {
	return r ||= {}, _sortByOrder(r.getShadowRoot ? _getCandidatesIteratively([t], r.includeContainer, {
		filter: isNodeMatchingSelectorTabbable.bind(null, r),
		flatten: !1,
		getShadowRoot: r.getShadowRoot,
		shadowRootFilter: isShadowRootTabbable
	}) : getCandidates(t, r.includeContainer, isNodeMatchingSelectorTabbable.bind(null, r)));
}, focusable = function(t, r) {
	return r ||= {}, r.getShadowRoot ? _getCandidatesIteratively([t], r.includeContainer, {
		filter: isNodeMatchingSelectorFocusable.bind(null, r),
		flatten: !0,
		getShadowRoot: r.getShadowRoot
	}) : getCandidates(t, r.includeContainer, isNodeMatchingSelectorFocusable.bind(null, r));
}, focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe:not([inert]):not([inert] *)").join(","), isFocusable = function(t, r) {
	if (r ||= {}, !t) throw Error("No node provided");
	return matches.call(t, focusableCandidateSelector) === !1 ? !1 : isNodeMatchingSelectorFocusable(r, t);
};
new Context$1("Menu.Root"), new Context$1("Menu.Root | Menu.Sub"), new Context$1("Menu.Content"), new Context$1("Menu.Group | Menu.RadioGroup"), new Context$1("Menu.RadioGroup"), new Context$1("Menu.CheckboxGroup"), new CustomEventDispatcher("bitsmenuopen", {
	bubbles: !1,
	cancelable: !0
}), createBitsAttrs({
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
var DismissibleLayerState = class t {
	static create(r) {
		return new t(r);
	}
	opts;
	#e;
	#t;
	#n = { pointerdown: !1 };
	#r = !1;
	#i = !1;
	#a = void 0;
	#o;
	#s = noop$1;
	constructor(t) {
		this.opts = t, this.#t = t.interactOutsideBehavior, this.#e = t.onInteractOutside, this.#o = t.onFocusOutside, user_effect(() => {
			this.#a = getOwnerDocument(this.opts.ref.current);
		});
		let r = noop$1, i = () => {
			this.#g(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), r();
		};
		watch$2([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!(!this.opts.enabled.current || !this.opts.ref.current)) return afterSleep(1, () => {
				this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), r(), r = this.#l());
			}), i;
		}), onDestroyEffect(() => {
			this.#g.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), r();
		});
	}
	#c = (t) => {
		t.defaultPrevented || this.opts.ref.current && afterTick$1(() => {
			!this.opts.ref.current || this.#h(t.target) || t.target && !this.#i && this.#o.current?.(t);
		});
	};
	#l() {
		return executeCallbacks$1(on(this.#a, "pointerdown", executeCallbacks$1(this.#f, this.#m), { capture: !0 }), on(this.#a, "pointerdown", executeCallbacks$1(this.#p, this.#d)), on(this.#a, "focusin", this.#c));
	}
	#u = (t) => {
		let r = t;
		r.defaultPrevented && (r = createWrappedEvent(t)), this.#e.current(t);
	};
	#d = debounce$2((t) => {
		if (!this.opts.ref.current) {
			this.#s();
			return;
		}
		let r = this.opts.isValidEvent.current(t, this.opts.ref.current) || isValidEvent(t, this.opts.ref.current);
		if (!this.#r || this.#_() || !r) {
			this.#s();
			return;
		}
		let i = t;
		if (i.defaultPrevented && (i = createWrappedEvent(i)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
			this.#s();
			return;
		}
		t.pointerType === "touch" ? (this.#s(), this.#s = on(this.#a, "click", this.#u, { once: !0 })) : this.#e.current(i);
	}, 10);
	#f = (t) => {
		this.#n[t.type] = !0;
	};
	#p = (t) => {
		this.#n[t.type] = !1;
	};
	#m = () => {
		this.opts.ref.current && (this.#r = isResponsibleLayer(this.opts.ref.current));
	};
	#h = (t) => this.opts.ref.current ? isOrContainsTarget(this.opts.ref.current, t) : !1;
	#g = debounce$2(() => {
		for (let t in this.#n) this.#n[t] = !1;
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
function getTopMostDismissableLayer(t = [...globalThis.bitsDismissableLayers]) {
	return t.findLast(([t, { current: r }]) => r === "close" || r === "ignore");
}
function isResponsibleLayer(t) {
	let r = [...globalThis.bitsDismissableLayers], i = getTopMostDismissableLayer(r);
	if (i) return i[0].opts.ref.current === t;
	let [a] = r[0];
	return a.opts.ref.current === t;
}
function isValidEvent(t, r) {
	let i = t.target;
	if (!isElementOrSVGElement(i)) return !1;
	let a = !!i.closest("[data-context-menu-trigger]"), o = !!r.closest("[data-context-menu-content]");
	return "button" in t && t.button > 0 && !a ? !1 : "button" in t && t.button === 0 && a && o ? !0 : a && o ? !1 : getOwnerDocument(i).documentElement.contains(i) && !isOrContainsTarget(r, i) && isClickTrulyOutside(t, r);
}
function createWrappedEvent(t) {
	let r = t.currentTarget, i = t.target, a;
	a = t instanceof PointerEvent ? new PointerEvent(t.type, t) : new PointerEvent("pointerdown", t);
	let o = !1;
	return new Proxy(a, { get: (a, s) => s === "currentTarget" ? r : s === "target" ? i : s === "preventDefault" ? () => {
		o = !0, typeof a.preventDefault == "function" && a.preventDefault();
	} : s === "defaultPrevented" ? o : s in a ? a[s] : t[s] });
}
function Dismissible_layer(t, r) {
	push(r, !0);
	let i = prop(r, "interactOutsideBehavior", 3, "close"), a = prop(r, "onInteractOutside", 3, noop$1), o = prop(r, "onFocusOutside", 3, noop$1), s = prop(r, "isValidEvent", 3, () => !1), c = DismissibleLayerState.create({
		id: boxWith$1(() => r.id),
		interactOutsideBehavior: boxWith$1(() => i()),
		onInteractOutside: boxWith$1(() => a()),
		enabled: boxWith$1(() => r.enabled),
		onFocusOutside: boxWith$1(() => o()),
		isValidEvent: boxWith$1(() => s()),
		ref: r.ref
	});
	var l = comment();
	snippet(first_child(l), () => r.children ?? noop$2, () => ({ props: c.props })), append(t, l), pop();
}
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var EscapeLayerState = class t {
	static create(r) {
		return new t(r);
	}
	opts;
	domContext;
	constructor(t) {
		this.opts = t, this.domContext = new DOMContext$1(this.opts.ref);
		let r = noop$1;
		watch$2(() => t.enabled.current, (i) => (i && (globalThis.bitsEscapeLayers.set(this, t.escapeKeydownBehavior), r = this.#e()), () => {
			r(), globalThis.bitsEscapeLayers.delete(this);
		}));
	}
	#e = () => on(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
	#t = (t) => {
		if (t.key !== "Escape" || !isResponsibleEscapeLayer(this)) return;
		let r = new KeyboardEvent(t.type, t);
		t.preventDefault();
		let i = this.opts.escapeKeydownBehavior.current;
		i !== "close" && i !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(r);
	};
};
function isResponsibleEscapeLayer(t) {
	let r = [...globalThis.bitsEscapeLayers], i = r.findLast(([t, { current: r }]) => r === "close" || r === "ignore");
	if (i) return i[0] === t;
	let [a] = r[0];
	return a === t;
}
function Escape_layer(t, r) {
	push(r, !0);
	let i = prop(r, "escapeKeydownBehavior", 3, "close"), a = prop(r, "onEscapeKeydown", 3, noop$1);
	EscapeLayerState.create({
		escapeKeydownBehavior: boxWith$1(() => i()),
		onEscapeKeydown: boxWith$1(() => a()),
		enabled: boxWith$1(() => r.enabled),
		ref: r.ref
	});
	var o = comment();
	snippet(first_child(o), () => r.children ?? noop$2), append(t, o), pop();
}
var FocusScopeManager = class t {
	static instance;
	#e = simpleBox([]);
	#t = /* @__PURE__ */ new WeakMap();
	#n = /* @__PURE__ */ new WeakMap();
	static getInstance() {
		return this.instance ||= new t(), this.instance;
	}
	register(t) {
		let r = this.getActive();
		r && r !== t && r.pause();
		let i = document.activeElement;
		i && i !== document.body && this.#n.set(t, i), this.#e.current = this.#e.current.filter((r) => r !== t), this.#e.current.unshift(t);
	}
	unregister(t) {
		this.#e.current = this.#e.current.filter((r) => r !== t);
		let r = this.getActive();
		r && r.resume();
	}
	getActive() {
		return this.#e.current[0];
	}
	setFocusMemory(t, r) {
		this.#t.set(t, r);
	}
	getFocusMemory(t) {
		return this.#t.get(t);
	}
	isActiveScope(t) {
		return this.getActive() === t;
	}
	setPreFocusMemory(t, r) {
		this.#n.set(t, r);
	}
	getPreFocusMemory(t) {
		return this.#n.get(t);
	}
	clearPreFocusMemory(t) {
		this.#n.delete(t);
	}
}, FocusScope = class t {
	#e = !1;
	#t = null;
	#n = FocusScopeManager.getInstance();
	#r = [];
	#i;
	constructor(t) {
		this.#i = t;
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
		for (let t of this.#r) t();
		this.#r = [];
	}
	mount(t) {
		this.#t && this.unmount(), this.#t = t, this.#n.register(this), this.#c(), this.#o();
	}
	unmount() {
		this.#t &&= (this.#a(), this.#s(), this.#n.unregister(this), this.#n.clearPreFocusMemory(this), null);
	}
	#o() {
		if (!this.#t) return;
		let t = new CustomEvent("focusScope.onOpenAutoFocus", {
			bubbles: !1,
			cancelable: !0
		});
		this.#i.onOpenAutoFocus.current(t), t.defaultPrevented || requestAnimationFrame(() => {
			if (!this.#t) return;
			let t = this.#u();
			t ? (t.focus(), this.#n.setFocusMemory(this, t)) : this.#t.focus();
		});
	}
	#s() {
		let t = new CustomEvent("focusScope.onCloseAutoFocus", {
			bubbles: !1,
			cancelable: !0
		});
		if (this.#i.onCloseAutoFocus.current?.(t), !t.defaultPrevented) {
			let t = this.#n.getPreFocusMemory(this);
			if (t && document.contains(t)) try {
				t.focus();
			} catch {
				document.body.focus();
			}
		}
	}
	#c() {
		if (!this.#t || !this.#i.trap.current) return;
		let t = this.#t, r = t.ownerDocument;
		this.#r.push(on(r, "focusin", (r) => {
			if (this.#e || !this.#n.isActiveScope(this)) return;
			let i = r.target;
			if (i) if (t.contains(i)) this.#n.setFocusMemory(this, i);
			else {
				let i = this.#n.getFocusMemory(this);
				if (i && t.contains(i) && isFocusable(i)) r.preventDefault(), i.focus();
				else {
					let r = this.#u(), i = this.#d()[0];
					(r || i || t).focus();
				}
			}
		}, { capture: !0 }), on(t, "keydown", (t) => {
			if (!this.#i.loop || this.#e || t.key !== "Tab" || !this.#n.isActiveScope(this)) return;
			let i = this.#l();
			if (i.length === 0) return;
			let a = i[0], o = i[i.length - 1];
			!t.shiftKey && r.activeElement === o ? (t.preventDefault(), a.focus()) : t.shiftKey && r.activeElement === a && (t.preventDefault(), o.focus());
		}));
		let i = new MutationObserver(() => {
			let r = this.#n.getFocusMemory(this);
			if (r && !t.contains(r)) {
				let r = this.#u(), i = this.#d()[0], a = r || i;
				a ? (a.focus(), this.#n.setFocusMemory(this, a)) : t.focus();
			}
		});
		i.observe(t, {
			childList: !0,
			subtree: !0
		}), this.#r.push(() => i.disconnect());
	}
	#l() {
		return this.#t ? tabbable(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	#u() {
		return this.#l()[0] || null;
	}
	#d() {
		return this.#t ? focusable(this.#t, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	static use(r) {
		let i = null;
		return watch$2([() => r.ref.current, () => r.enabled.current], ([a, o]) => {
			a && o ? (i ||= new t(r), i.mount(a)) : i &&= (i.unmount(), null);
		}), onDestroyEffect(() => {
			i?.unmount();
		}), { get props() {
			return { tabindex: -1 };
		} };
	}
};
function Focus_scope(t, r) {
	push(r, !0);
	let i = prop(r, "enabled", 3, !1), a = prop(r, "trapFocus", 3, !1), o = prop(r, "loop", 3, !1), s = prop(r, "onCloseAutoFocus", 3, noop$1), c = prop(r, "onOpenAutoFocus", 3, noop$1), l = FocusScope.use({
		enabled: boxWith$1(() => i()),
		trap: boxWith$1(() => a()),
		loop: o(),
		onCloseAutoFocus: boxWith$1(() => s()),
		onOpenAutoFocus: boxWith$1(() => c()),
		ref: r.ref
	});
	var u = comment();
	snippet(first_child(u), () => r.focusScope ?? noop$2, () => ({ props: l.props })), append(t, u), pop();
}
var noopPointer = () => {};
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var TextSelectionLayerState = class t {
	static create(r) {
		return new t(r);
	}
	opts;
	domContext;
	#e = noop$1;
	#t = !1;
	#n = noopPointer;
	#r = noopPointer;
	constructor(t) {
		this.opts = t, this.domContext = new DOMContext$1(t.ref);
		let r = noop$1;
		watch$2(() => [
			this.opts.enabled.current,
			this.opts.onPointerDown.current,
			this.opts.onPointerUp.current
		], ([t, i, a]) => (this.#t = t, this.#n = i, this.#r = a, t && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), r(), r = this.#i()), () => {
			this.#t = !1, r(), this.#s(), globalThis.bitsTextSelectionLayers.delete(this);
		}));
	}
	#i() {
		return executeCallbacks$1(on(this.domContext.getDocument(), "pointerdown", this.#o), on(this.domContext.getDocument(), "pointerup", composeHandlers$1(this.#s, this.#a)));
	}
	#a = (t) => {
		this.#r(t);
	};
	#o = (t) => {
		let r = this.opts.ref.current, i = t.target;
		!isHTMLElement$2(r) || !isHTMLElement$2(i) || !this.#t || !isHighestLayer(this) || !contains(r, i) || (this.#n(t), !t.defaultPrevented && (this.#e = preventTextSelectionOverflow(r, this.domContext.getDocument().body)));
	};
	#s = () => {
		this.#e(), this.#e = noop$1;
	};
}, getUserSelect = (t) => t.style.userSelect || t.style.webkitUserSelect;
function preventTextSelectionOverflow(t, r) {
	let i = getUserSelect(r), a = getUserSelect(t);
	return setUserSelect(r, "none"), setUserSelect(t, "text"), () => {
		setUserSelect(r, i), setUserSelect(t, a);
	};
}
function setUserSelect(t, r) {
	t.style.userSelect = r, t.style.webkitUserSelect = r;
}
function isHighestLayer(t) {
	let r = [...globalThis.bitsTextSelectionLayers];
	if (!r.length) return !1;
	let i = r.at(-1);
	return i ? i[0] === t : !1;
}
function Text_selection_layer(t, r) {
	push(r, !0);
	let i = prop(r, "preventOverflowTextSelection", 3, !0), a = prop(r, "onPointerDown", 3, noop$1), o = prop(r, "onPointerUp", 3, noop$1);
	TextSelectionLayerState.create({
		id: boxWith$1(() => r.id),
		onPointerDown: boxWith$1(() => a()),
		onPointerUp: boxWith$1(() => o()),
		enabled: boxWith$1(() => r.enabled && i()),
		ref: r.ref
	});
	var s = comment();
	snippet(first_child(s), () => r.children ?? noop$2), append(t, s), pop();
}
globalThis.bitsIdCounter ??= { current: 0 };
function useId(t = "bits") {
	return globalThis.bitsIdCounter.current++, `${t}-${globalThis.bitsIdCounter.current}`;
}
var SharedState = class {
	#e;
	#t = 0;
	#n = /* @__PURE__ */ state();
	#r;
	constructor(t) {
		this.#e = t;
	}
	#i() {
		--this.#t, this.#r && this.#t <= 0 && (this.#r(), set(this.#n, void 0), this.#r = void 0);
	}
	get(...t) {
		return this.#t += 1, get$3(this.#n) === void 0 && (this.#r = effect_root(() => {
			set(this.#n, this.#e(...t), !0);
		})), user_effect(() => () => {
			this.#i();
		}), get$3(this.#n);
	}
}, lockMap = new SvelteMap(), initialBodyStyle = /* @__PURE__ */ state(null), stopTouchMoveListener = null, cleanupTimeoutId = null, isInCleanupTransition = !1, anyLocked = boxWith$1(() => {
	for (let t of lockMap.values()) if (t) return !0;
	return !1;
}), cleanupScheduledAt = null, bodyLockStackCount = new SharedState(() => {
	function t() {
		document.body.setAttribute("style", get$3(initialBodyStyle) ?? ""), document.body.style.removeProperty("--scrollbar-width"), isIOS && stopTouchMoveListener?.(), set(initialBodyStyle, null);
	}
	function r() {
		cleanupTimeoutId !== null && (window.clearTimeout(cleanupTimeoutId), cleanupTimeoutId = null);
	}
	function i(t, i) {
		r(), isInCleanupTransition = !0, cleanupScheduledAt = Date.now();
		let a = cleanupScheduledAt, o = () => {
			cleanupTimeoutId = null, cleanupScheduledAt === a && (isAnyLocked(lockMap) ? isInCleanupTransition = !1 : (isInCleanupTransition = !1, i()));
		}, s = t === null ? 24 : t;
		cleanupTimeoutId = window.setTimeout(o, s);
	}
	function a() {
		get$3(initialBodyStyle) === null && lockMap.size === 0 && !isInCleanupTransition && set(initialBodyStyle, document.body.getAttribute("style"), !0);
	}
	return watch$2(() => anyLocked.current, () => {
		if (!anyLocked.current) return;
		a(), isInCleanupTransition = !1;
		let t = getComputedStyle(document.documentElement), r = getComputedStyle(document.body), i = t.scrollbarGutter?.includes("stable") || r.scrollbarGutter?.includes("stable"), o = window.innerWidth - document.documentElement.clientWidth, s = {
			padding: Number.parseInt(r.paddingRight ?? "0", 10) + o,
			margin: Number.parseInt(r.marginRight ?? "0", 10)
		};
		o > 0 && !i && (document.body.style.paddingRight = `${s.padding}px`, document.body.style.marginRight = `${s.margin}px`, document.body.style.setProperty("--scrollbar-width", `${o}px`)), document.body.style.overflow = "hidden", isIOS && (stopTouchMoveListener = on(document, "touchmove", (t) => {
			t.target === document.documentElement && (t.touches.length > 1 || t.preventDefault());
		}, { passive: !1 })), afterTick$1(() => {
			document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
		});
	}), onDestroyEffect(() => () => {
		stopTouchMoveListener?.();
	}), {
		get lockMap() {
			return lockMap;
		},
		resetBodyStyle: t,
		scheduleCleanupIfNoNewLocks: i,
		cancelPendingCleanup: r,
		ensureInitialStyleCaptured: a
	};
}), BodyScrollLock = class {
	#e = useId();
	#t;
	#n = () => null;
	#r;
	locked;
	constructor(t, r = () => null) {
		this.#t = t, this.#n = r, this.#r = bodyLockStackCount.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = boxWith$1(() => this.#r.lockMap.get(this.#e) ?? !1, (t) => this.#r.lockMap.set(this.#e, t)), onDestroyEffect(() => {
			if (this.#r.lockMap.delete(this.#e), isAnyLocked(this.#r.lockMap)) return;
			let t = this.#n();
			this.#r.scheduleCleanupIfNoNewLocks(t, () => {
				this.#r.resetBodyStyle();
			});
		}));
	}
};
function isAnyLocked(t) {
	for (let [r, i] of t) if (i) return !0;
	return !1;
}
function Scroll_lock(t, r) {
	push(r, !0);
	let i = prop(r, "preventScroll", 3, !0), a = prop(r, "restoreScrollDelay", 3, null);
	i() && new BodyScrollLock(i(), () => a()), pop();
}
var avatarAttrs = createBitsAttrs({
	component: "avatar",
	parts: [
		"root",
		"image",
		"fallback"
	]
}), AvatarRootContext = new Context$1("Avatar.Root"), AvatarRootState = class t {
	static create(r) {
		return AvatarRootContext.set(new t(r));
	}
	opts;
	domContext;
	attachment;
	constructor(t) {
		this.opts = t, this.domContext = new DOMContext$1(this.opts.ref), this.loadImage = this.loadImage.bind(this), this.attachment = attachRef$1(this.opts.ref);
	}
	loadImage(t, r, i) {
		if (this.opts.loadingStatus.current === "loaded") return;
		let a, o = new Image();
		return o.src = t, r !== void 0 && (o.crossOrigin = r), i && (o.referrerPolicy = i), this.opts.loadingStatus.current = "loading", o.onload = () => {
			a = this.domContext.setTimeout(() => {
				this.opts.loadingStatus.current = "loaded";
			}, this.opts.delayMs.current);
		}, o.onerror = () => {
			this.opts.loadingStatus.current = "error";
		}, () => {
			a && this.domContext.clearTimeout(a);
		};
	}
	#e = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		[avatarAttrs.root]: "",
		"data-status": this.opts.loadingStatus.current,
		...this.attachment
	}));
	get props() {
		return get$3(this.#e);
	}
	set props(t) {
		set(this.#e, t);
	}
}, AvatarImageState = class t {
	static create(r) {
		return new t(r, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(t, r) {
		this.opts = t, this.root = r, this.attachment = attachRef$1(this.opts.ref), watch$2.pre([() => this.opts.src.current, () => this.opts.crossOrigin.current], ([t, r]) => {
			if (!t) {
				this.root.opts.loadingStatus.current = "error";
				return;
			}
			this.root.loadImage(t, r, this.opts.referrerPolicy.current);
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
		return get$3(this.#e);
	}
	set props(t) {
		set(this.#e, t);
	}
}, AvatarFallbackState = class t {
	static create(r) {
		return new t(r, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(t, r) {
		this.opts = t, this.root = r, this.attachment = attachRef$1(this.opts.ref);
	}
	#e = /* @__PURE__ */ user_derived(() => this.root.opts.loadingStatus.current === "loaded" ? { display: "none" } : void 0);
	get style() {
		return get$3(this.#e);
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
		return get$3(this.#t);
	}
	set props(t) {
		set(this.#t, t);
	}
}, root_2$15 = /* @__PURE__ */ from_html("<div><!></div>");
function Avatar$1(t, r) {
	let i = props_id();
	push(r, !0);
	let a = prop(r, "delayMs", 3, 0), o = prop(r, "loadingStatus", 15, "loading"), s = prop(r, "id", 19, () => createId(i)), c = prop(r, "ref", 15, null), l = /* @__PURE__ */ rest_props(r, [
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
	]), u = AvatarRootState.create({
		delayMs: boxWith$1(() => a()),
		loadingStatus: boxWith$1(() => o(), (t) => {
			o() !== t && (o(t), r.onLoadingStatusChange?.(t));
		}),
		id: boxWith$1(() => s()),
		ref: boxWith$1(() => c(), (t) => c(t))
	}), d = /* @__PURE__ */ user_derived(() => mergeProps$1(l, u.props));
	var f = comment(), p = first_child(f), m = (t) => {
		var i = comment();
		snippet(first_child(i), () => r.child, () => ({ props: get$3(d) })), append(t, i);
	}, h = (t) => {
		var i = root_2$15();
		attribute_effect(i, () => ({ ...get$3(d) })), snippet(child(i), () => r.children ?? noop$2), reset(i), append(t, i);
	};
	if_block(p, (t) => {
		r.child ? t(m) : t(h, -1);
	}), append(t, f), pop();
}
var root_2$14 = /* @__PURE__ */ from_html("<img/>");
function Avatar_image$1(t, r) {
	let i = props_id();
	push(r, !0);
	let a = prop(r, "id", 19, () => createId(i)), o = prop(r, "ref", 15, null), s = prop(r, "crossorigin", 3, void 0), c = prop(r, "referrerpolicy", 3, void 0), l = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"src",
		"child",
		"id",
		"ref",
		"crossorigin",
		"referrerpolicy"
	]), u = AvatarImageState.create({
		src: boxWith$1(() => r.src),
		id: boxWith$1(() => a()),
		ref: boxWith$1(() => o(), (t) => o(t)),
		crossOrigin: boxWith$1(() => s()),
		referrerPolicy: boxWith$1(() => c())
	}), d = /* @__PURE__ */ user_derived(() => mergeProps$1(l, u.props));
	var f = comment(), p = first_child(f), m = (t) => {
		var i = comment();
		snippet(first_child(i), () => r.child, () => ({ props: get$3(d) })), append(t, i);
	}, h = (t) => {
		var i = root_2$14();
		attribute_effect(i, () => ({
			...get$3(d),
			src: r.src
		})), replay_events(i), append(t, i);
	};
	if_block(p, (t) => {
		r.child ? t(m) : t(h, -1);
	}), append(t, f), pop();
}
var root_2$13 = /* @__PURE__ */ from_html("<span><!></span>");
function Avatar_fallback$1(t, r) {
	let i = props_id();
	push(r, !0);
	let a = prop(r, "id", 19, () => createId(i)), o = prop(r, "ref", 15, null), s = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref"
	]), c = AvatarFallbackState.create({
		id: boxWith$1(() => a()),
		ref: boxWith$1(() => o(), (t) => o(t))
	}), l = /* @__PURE__ */ user_derived(() => mergeProps$1(s, c.props));
	var u = comment(), d = first_child(u), f = (t) => {
		var i = comment();
		snippet(first_child(i), () => r.child, () => ({ props: get$3(l) })), append(t, i);
	}, p = (t) => {
		var i = root_2$13();
		attribute_effect(i, () => ({ ...get$3(l) })), snippet(child(i), () => r.children ?? noop$2), reset(i), append(t, i);
	};
	if_block(d, (t) => {
		r.child ? t(f) : t(p, -1);
	}), append(t, u), pop();
}
var sides = [
	"top",
	"right",
	"bottom",
	"left"
], min = Math.min, max = Math.max, round = Math.round, floor = Math.floor, createCoords = (t) => ({
	x: t,
	y: t
}), oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function clamp(t, r, i) {
	return max(t, min(r, i));
}
function evaluate(t, r) {
	return typeof t == "function" ? t(r) : t;
}
function getSide$1(t) {
	return t.split("-")[0];
}
function getAlignment(t) {
	return t.split("-")[1];
}
function getOppositeAxis(t) {
	return t === "x" ? "y" : "x";
}
function getAxisLength(t) {
	return t === "y" ? "height" : "width";
}
function getSideAxis(t) {
	let r = t[0];
	return r === "t" || r === "b" ? "y" : "x";
}
function getAlignmentAxis(t) {
	return getOppositeAxis(getSideAxis(t));
}
function getAlignmentSides(t, r, i) {
	i === void 0 && (i = !1);
	let a = getAlignment(t), o = getAlignmentAxis(t), s = getAxisLength(o), c = o === "x" ? a === (i ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
	return r.reference[s] > r.floating[s] && (c = getOppositePlacement(c)), [c, getOppositePlacement(c)];
}
function getExpandedPlacements(t) {
	let r = getOppositePlacement(t);
	return [
		getOppositeAlignmentPlacement(t),
		r,
		getOppositeAlignmentPlacement(r)
	];
}
function getOppositeAlignmentPlacement(t) {
	return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
var lrPlacement = ["left", "right"], rlPlacement = ["right", "left"], tbPlacement = ["top", "bottom"], btPlacement = ["bottom", "top"];
function getSideList(t, r, i) {
	switch (t) {
		case "top":
		case "bottom": return i ? r ? rlPlacement : lrPlacement : r ? lrPlacement : rlPlacement;
		case "left":
		case "right": return r ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(t, r, i, a) {
	let o = getAlignment(t), s = getSideList(getSide$1(t), i === "start", a);
	return o && (s = s.map((t) => t + "-" + o), r && (s = s.concat(s.map(getOppositeAlignmentPlacement)))), s;
}
function getOppositePlacement(t) {
	let r = getSide$1(t);
	return oppositeSideMap[r] + t.slice(r.length);
}
function expandPaddingObject(t) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...t
	};
}
function getPaddingObject(t) {
	return typeof t == "number" ? {
		top: t,
		right: t,
		bottom: t,
		left: t
	} : expandPaddingObject(t);
}
function rectToClientRect(t) {
	let { x: r, y: i, width: a, height: o } = t;
	return {
		width: a,
		height: o,
		top: i,
		left: r,
		right: r + a,
		bottom: i + o,
		x: r,
		y: i
	};
}
function computeCoordsFromPlacement(t, r, i) {
	let { reference: a, floating: o } = t, s = getSideAxis(r), c = getAlignmentAxis(r), l = getAxisLength(c), u = getSide$1(r), d = s === "y", f = a.x + a.width / 2 - o.width / 2, p = a.y + a.height / 2 - o.height / 2, m = a[l] / 2 - o[l] / 2, h;
	switch (u) {
		case "top":
			h = {
				x: f,
				y: a.y - o.height
			};
			break;
		case "bottom":
			h = {
				x: f,
				y: a.y + a.height
			};
			break;
		case "right":
			h = {
				x: a.x + a.width,
				y: p
			};
			break;
		case "left":
			h = {
				x: a.x - o.width,
				y: p
			};
			break;
		default: h = {
			x: a.x,
			y: a.y
		};
	}
	switch (getAlignment(r)) {
		case "start":
			h[c] -= m * (i && d ? -1 : 1);
			break;
		case "end":
			h[c] += m * (i && d ? -1 : 1);
			break;
	}
	return h;
}
async function detectOverflow(t, r) {
	r === void 0 && (r = {});
	let { x: i, y: a, platform: o, rects: s, elements: c, strategy: l } = t, { boundary: u = "clippingAncestors", rootBoundary: d = "viewport", elementContext: f = "floating", altBoundary: p = !1, padding: m = 0 } = evaluate(r, t), h = getPaddingObject(m), g = c[p ? f === "floating" ? "reference" : "floating" : f], _ = rectToClientRect(await o.getClippingRect({
		element: await (o.isElement == null ? void 0 : o.isElement(g)) ?? !0 ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(c.floating)),
		boundary: u,
		rootBoundary: d,
		strategy: l
	})), v = f === "floating" ? {
		x: i,
		y: a,
		width: s.floating.width,
		height: s.floating.height
	} : s.reference, y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c.floating)), b = await (o.isElement == null ? void 0 : o.isElement(y)) && await (o.getScale == null ? void 0 : o.getScale(y)) || {
		x: 1,
		y: 1
	}, x = rectToClientRect(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: c,
		rect: v,
		offsetParent: y,
		strategy: l
	}) : v);
	return {
		top: (_.top - x.top + h.top) / b.y,
		bottom: (x.bottom - _.bottom + h.bottom) / b.y,
		left: (_.left - x.left + h.left) / b.x,
		right: (x.right - _.right + h.right) / b.x
	};
}
var MAX_RESET_COUNT = 50, computePosition$1 = async (t, r, i) => {
	let { placement: a = "bottom", strategy: o = "absolute", middleware: s = [], platform: c } = i, l = c.detectOverflow ? c : {
		...c,
		detectOverflow
	}, u = await (c.isRTL == null ? void 0 : c.isRTL(r)), d = await c.getElementRects({
		reference: t,
		floating: r,
		strategy: o
	}), { x: f, y: p } = computeCoordsFromPlacement(d, a, u), m = a, h = 0, g = {};
	for (let i = 0; i < s.length; i++) {
		let _ = s[i];
		if (!_) continue;
		let { name: v, fn: y } = _, { x: b, y: x, data: S, reset: C } = await y({
			x: f,
			y: p,
			initialPlacement: a,
			placement: m,
			strategy: o,
			middlewareData: g,
			rects: d,
			platform: l,
			elements: {
				reference: t,
				floating: r
			}
		});
		f = b ?? f, p = x ?? p, g[v] = {
			...g[v],
			...S
		}, C && h < MAX_RESET_COUNT && (h++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (d = C.rects === !0 ? await c.getElementRects({
			reference: t,
			floating: r,
			strategy: o
		}) : C.rects), {x: f, y: p} = computeCoordsFromPlacement(d, m, u)), i = -1);
	}
	return {
		x: f,
		y: p,
		placement: m,
		strategy: o,
		middlewareData: g
	};
}, arrow$1 = (t) => ({
	name: "arrow",
	options: t,
	async fn(r) {
		let { x: i, y: a, placement: o, rects: s, platform: c, elements: l, middlewareData: u } = r, { element: d, padding: f = 0 } = evaluate(t, r) || {};
		if (d == null) return {};
		let p = getPaddingObject(f), m = {
			x: i,
			y: a
		}, h = getAlignmentAxis(o), g = getAxisLength(h), _ = await c.getDimensions(d), v = h === "y", y = v ? "top" : "left", b = v ? "bottom" : "right", x = v ? "clientHeight" : "clientWidth", S = s.reference[g] + s.reference[h] - m[h] - s.floating[g], C = m[h] - s.reference[h], w = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(d)), T = w ? w[x] : 0;
		(!T || !await (c.isElement == null ? void 0 : c.isElement(w))) && (T = l.floating[x] || s.floating[g]);
		let E = S / 2 - C / 2, D = T / 2 - _[g] / 2 - 1, O = min(p[y], D), k = min(p[b], D), A = O, j = T - _[g] - k, M = T / 2 - _[g] / 2 + E, N = clamp(A, M, j), P = !u.arrow && getAlignment(o) != null && M !== N && s.reference[g] / 2 - (M < A ? O : k) - _[g] / 2 < 0, F = P ? M < A ? M - A : M - j : 0;
		return {
			[h]: m[h] + F,
			data: {
				[h]: N,
				centerOffset: M - N - F,
				...P && { alignmentOffset: F }
			},
			reset: P
		};
	}
}), flip$2 = function(t) {
	return t === void 0 && (t = {}), {
		name: "flip",
		options: t,
		async fn(r) {
			var i;
			let { placement: a, middlewareData: o, rects: s, initialPlacement: c, platform: l, elements: u } = r, { mainAxis: d = !0, crossAxis: f = !0, fallbackPlacements: p, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: h = "none", flipAlignment: g = !0, ..._ } = evaluate(t, r);
			if ((i = o.arrow) != null && i.alignmentOffset) return {};
			let v = getSide$1(a), y = getSideAxis(c), b = getSide$1(c) === c, x = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), S = p || (b || !g ? [getOppositePlacement(c)] : getExpandedPlacements(c)), C = h !== "none";
			!p && C && S.push(...getOppositeAxisPlacements(c, g, h, x));
			let w = [c, ...S], T = await l.detectOverflow(r, _), E = [], D = o.flip?.overflows || [];
			if (d && E.push(T[v]), f) {
				let t = getAlignmentSides(a, s, x);
				E.push(T[t[0]], T[t[1]]);
			}
			if (D = [...D, {
				placement: a,
				overflows: E
			}], !E.every((t) => t <= 0)) {
				let t = (o.flip?.index || 0) + 1, r = w[t];
				if (r && (!(f === "alignment" && y !== getSideAxis(r)) || D.every((t) => getSideAxis(t.placement) === y ? t.overflows[0] > 0 : !0))) return {
					data: {
						index: t,
						overflows: D
					},
					reset: { placement: r }
				};
				let i = D.filter((t) => t.overflows[0] <= 0).sort((t, r) => t.overflows[1] - r.overflows[1])[0]?.placement;
				if (!i) switch (m) {
					case "bestFit": {
						let t = D.filter((t) => {
							if (C) {
								let r = getSideAxis(t.placement);
								return r === y || r === "y";
							}
							return !0;
						}).map((t) => [t.placement, t.overflows.filter((t) => t > 0).reduce((t, r) => t + r, 0)]).sort((t, r) => t[1] - r[1])[0]?.[0];
						t && (i = t);
						break;
					}
					case "initialPlacement":
						i = c;
						break;
				}
				if (a !== i) return { reset: { placement: i } };
			}
			return {};
		}
	};
};
function getSideOffsets(t, r) {
	return {
		top: t.top - r.height,
		right: t.right - r.width,
		bottom: t.bottom - r.height,
		left: t.left - r.width
	};
}
function isAnySideFullyClipped(t) {
	return sides.some((r) => t[r] >= 0);
}
var hide$1 = function(t) {
	return t === void 0 && (t = {}), {
		name: "hide",
		options: t,
		async fn(r) {
			let { rects: i, platform: a } = r, { strategy: o = "referenceHidden", ...s } = evaluate(t, r);
			switch (o) {
				case "referenceHidden": {
					let t = getSideOffsets(await a.detectOverflow(r, {
						...s,
						elementContext: "reference"
					}), i.reference);
					return { data: {
						referenceHiddenOffsets: t,
						referenceHidden: isAnySideFullyClipped(t)
					} };
				}
				case "escaped": {
					let t = getSideOffsets(await a.detectOverflow(r, {
						...s,
						altBoundary: !0
					}), i.floating);
					return { data: {
						escapedOffsets: t,
						escaped: isAnySideFullyClipped(t)
					} };
				}
				default: return {};
			}
		}
	};
}, originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(t, r) {
	let { placement: i, platform: a, elements: o } = t, s = await (a.isRTL == null ? void 0 : a.isRTL(o.floating)), c = getSide$1(i), l = getAlignment(i), u = getSideAxis(i) === "y", d = originSides.has(c) ? -1 : 1, f = s && u ? -1 : 1, p = evaluate(r, t), { mainAxis: m, crossAxis: h, alignmentAxis: g } = typeof p == "number" ? {
		mainAxis: p,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: p.mainAxis || 0,
		crossAxis: p.crossAxis || 0,
		alignmentAxis: p.alignmentAxis
	};
	return l && typeof g == "number" && (h = l === "end" ? g * -1 : g), u ? {
		x: h * f,
		y: m * d
	} : {
		x: m * d,
		y: h * f
	};
}
var offset$1 = function(t) {
	return t === void 0 && (t = 0), {
		name: "offset",
		options: t,
		async fn(r) {
			var i;
			let { x: a, y: o, placement: s, middlewareData: c } = r, l = await convertValueToCoords(r, t);
			return s === c.offset?.placement && (i = c.arrow) != null && i.alignmentOffset ? {} : {
				x: a + l.x,
				y: o + l.y,
				data: {
					...l,
					placement: s
				}
			};
		}
	};
}, shift$1 = function(t) {
	return t === void 0 && (t = {}), {
		name: "shift",
		options: t,
		async fn(r) {
			let { x: i, y: a, placement: o, platform: s } = r, { mainAxis: c = !0, crossAxis: l = !1, limiter: u = { fn: (t) => {
				let { x: r, y: i } = t;
				return {
					x: r,
					y: i
				};
			} }, ...d } = evaluate(t, r), f = {
				x: i,
				y: a
			}, p = await s.detectOverflow(r, d), m = getSideAxis(getSide$1(o)), h = getOppositeAxis(m), g = f[h], _ = f[m];
			if (c) {
				let t = h === "y" ? "top" : "left", r = h === "y" ? "bottom" : "right", i = g + p[t], a = g - p[r];
				g = clamp(i, g, a);
			}
			if (l) {
				let t = m === "y" ? "top" : "left", r = m === "y" ? "bottom" : "right", i = _ + p[t], a = _ - p[r];
				_ = clamp(i, _, a);
			}
			let v = u.fn({
				...r,
				[h]: g,
				[m]: _
			});
			return {
				...v,
				data: {
					x: v.x - i,
					y: v.y - a,
					enabled: {
						[h]: c,
						[m]: l
					}
				}
			};
		}
	};
}, limitShift$1 = function(t) {
	return t === void 0 && (t = {}), {
		options: t,
		fn(r) {
			let { x: i, y: a, placement: o, rects: s, middlewareData: c } = r, { offset: l = 0, mainAxis: u = !0, crossAxis: d = !0 } = evaluate(t, r), f = {
				x: i,
				y: a
			}, p = getSideAxis(o), m = getOppositeAxis(p), h = f[m], g = f[p], _ = evaluate(l, r), v = typeof _ == "number" ? {
				mainAxis: _,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				..._
			};
			if (u) {
				let t = m === "y" ? "height" : "width", r = s.reference[m] - s.floating[t] + v.mainAxis, i = s.reference[m] + s.reference[t] - v.mainAxis;
				h < r ? h = r : h > i && (h = i);
			}
			if (d) {
				let t = m === "y" ? "width" : "height", r = originSides.has(getSide$1(o)), i = s.reference[p] - s.floating[t] + (r && c.offset?.[p] || 0) + (r ? 0 : v.crossAxis), a = s.reference[p] + s.reference[t] + (r ? 0 : c.offset?.[p] || 0) - (r ? v.crossAxis : 0);
				g < i ? g = i : g > a && (g = a);
			}
			return {
				[m]: h,
				[p]: g
			};
		}
	};
}, size$1 = function(t) {
	return t === void 0 && (t = {}), {
		name: "size",
		options: t,
		async fn(r) {
			var i, a;
			let { placement: o, rects: s, platform: c, elements: l } = r, { apply: u = () => {}, ...d } = evaluate(t, r), f = await c.detectOverflow(r, d), p = getSide$1(o), m = getAlignment(o), h = getSideAxis(o) === "y", { width: g, height: _ } = s.floating, v, y;
			p === "top" || p === "bottom" ? (v = p, y = m === (await (c.isRTL == null ? void 0 : c.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (y = p, v = m === "end" ? "top" : "bottom");
			let b = _ - f.top - f.bottom, x = g - f.left - f.right, S = min(_ - f[v], b), C = min(g - f[y], x), w = !r.middlewareData.shift, T = S, E = C;
			if ((i = r.middlewareData.shift) != null && i.enabled.x && (E = x), (a = r.middlewareData.shift) != null && a.enabled.y && (T = b), w && !m) {
				let t = max(f.left, 0), r = max(f.right, 0), i = max(f.top, 0), a = max(f.bottom, 0);
				h ? E = g - 2 * (t !== 0 || r !== 0 ? t + r : max(f.left, f.right)) : T = _ - 2 * (i !== 0 || a !== 0 ? i + a : max(f.top, f.bottom));
			}
			await u({
				...r,
				availableWidth: E,
				availableHeight: T
			});
			let D = await c.getDimensions(l.floating);
			return g !== D.width || _ !== D.height ? { reset: { rects: !0 } } : {};
		}
	};
};
function hasWindow() {
	return typeof window < "u";
}
function getNodeName(t) {
	return isNode(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function getWindow$1(t) {
	var r;
	return (t == null || (r = t.ownerDocument) == null ? void 0 : r.defaultView) || window;
}
function getDocumentElement(t) {
	return ((isNode(t) ? t.ownerDocument : t.document) || window.document)?.documentElement;
}
function isNode(t) {
	return hasWindow() ? t instanceof Node || t instanceof getWindow$1(t).Node : !1;
}
function isElement$1(t) {
	return hasWindow() ? t instanceof Element || t instanceof getWindow$1(t).Element : !1;
}
function isHTMLElement$1(t) {
	return hasWindow() ? t instanceof HTMLElement || t instanceof getWindow$1(t).HTMLElement : !1;
}
function isShadowRoot(t) {
	return !hasWindow() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof getWindow$1(t).ShadowRoot;
}
function isOverflowElement(t) {
	let { overflow: r, overflowX: i, overflowY: a, display: o } = getComputedStyle$1(t);
	return /auto|scroll|overlay|hidden|clip/.test(r + a + i) && o !== "inline" && o !== "contents";
}
function isTableElement(t) {
	return /^(table|td|th)$/.test(getNodeName(t));
}
function isTopLayer(t) {
	try {
		if (t.matches(":popover-open")) return !0;
	} catch {}
	try {
		return t.matches(":modal");
	} catch {
		return !1;
	}
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/, containRe = /paint|layout|strict|content/, isNotNone = (t) => !!t && t !== "none", isWebKitValue;
function isContainingBlock(t) {
	let r = isElement$1(t) ? getComputedStyle$1(t) : t;
	return isNotNone(r.transform) || isNotNone(r.translate) || isNotNone(r.scale) || isNotNone(r.rotate) || isNotNone(r.perspective) || !isWebKit() && (isNotNone(r.backdropFilter) || isNotNone(r.filter)) || willChangeRe.test(r.willChange || "") || containRe.test(r.contain || "");
}
function getContainingBlock(t) {
	let r = getParentNode(t);
	for (; isHTMLElement$1(r) && !isLastTraversableNode(r);) {
		if (isContainingBlock(r)) return r;
		if (isTopLayer(r)) return null;
		r = getParentNode(r);
	}
	return null;
}
function isWebKit() {
	return isWebKitValue ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), isWebKitValue;
}
function isLastTraversableNode(t) {
	return /^(html|body|#document)$/.test(getNodeName(t));
}
function getComputedStyle$1(t) {
	return getWindow$1(t).getComputedStyle(t);
}
function getNodeScroll(t) {
	return isElement$1(t) ? {
		scrollLeft: t.scrollLeft,
		scrollTop: t.scrollTop
	} : {
		scrollLeft: t.scrollX,
		scrollTop: t.scrollY
	};
}
function getParentNode(t) {
	if (getNodeName(t) === "html") return t;
	let r = t.assignedSlot || t.parentNode || isShadowRoot(t) && t.host || getDocumentElement(t);
	return isShadowRoot(r) ? r.host : r;
}
function getNearestOverflowAncestor(t) {
	let r = getParentNode(t);
	return isLastTraversableNode(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : isHTMLElement$1(r) && isOverflowElement(r) ? r : getNearestOverflowAncestor(r);
}
function getOverflowAncestors(t, r, i) {
	r === void 0 && (r = []), i === void 0 && (i = !0);
	let a = getNearestOverflowAncestor(t), o = a === t.ownerDocument?.body, s = getWindow$1(a);
	if (o) {
		let t = getFrameElement(s);
		return r.concat(s, s.visualViewport || [], isOverflowElement(a) ? a : [], t && i ? getOverflowAncestors(t) : []);
	} else return r.concat(a, getOverflowAncestors(a, [], i));
}
function getFrameElement(t) {
	return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function getCssDimensions(t) {
	let r = getComputedStyle$1(t), i = parseFloat(r.width) || 0, a = parseFloat(r.height) || 0, o = isHTMLElement$1(t), s = o ? t.offsetWidth : i, c = o ? t.offsetHeight : a, l = round(i) !== s || round(a) !== c;
	return l && (i = s, a = c), {
		width: i,
		height: a,
		$: l
	};
}
function unwrapElement(t) {
	return isElement$1(t) ? t : t.contextElement;
}
function getScale(t) {
	let r = unwrapElement(t);
	if (!isHTMLElement$1(r)) return createCoords(1);
	let i = r.getBoundingClientRect(), { width: a, height: o, $: s } = getCssDimensions(r), c = (s ? round(i.width) : i.width) / a, l = (s ? round(i.height) : i.height) / o;
	return (!c || !Number.isFinite(c)) && (c = 1), (!l || !Number.isFinite(l)) && (l = 1), {
		x: c,
		y: l
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(t) {
	let r = getWindow$1(t);
	return !isWebKit() || !r.visualViewport ? noOffsets : {
		x: r.visualViewport.offsetLeft,
		y: r.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(t, r, i) {
	return r === void 0 && (r = !1), !i || r && i !== getWindow$1(t) ? !1 : r;
}
function getBoundingClientRect(t, r, i, a) {
	r === void 0 && (r = !1), i === void 0 && (i = !1);
	let o = t.getBoundingClientRect(), s = unwrapElement(t), c = createCoords(1);
	r && (a ? isElement$1(a) && (c = getScale(a)) : c = getScale(t));
	let l = shouldAddVisualOffsets(s, i, a) ? getVisualOffsets(s) : createCoords(0), u = (o.left + l.x) / c.x, d = (o.top + l.y) / c.y, f = o.width / c.x, p = o.height / c.y;
	if (s) {
		let t = getWindow$1(s), r = a && isElement$1(a) ? getWindow$1(a) : a, i = t, o = getFrameElement(i);
		for (; o && a && r !== i;) {
			let t = getScale(o), r = o.getBoundingClientRect(), a = getComputedStyle$1(o), s = r.left + (o.clientLeft + parseFloat(a.paddingLeft)) * t.x, c = r.top + (o.clientTop + parseFloat(a.paddingTop)) * t.y;
			u *= t.x, d *= t.y, f *= t.x, p *= t.y, u += s, d += c, i = getWindow$1(o), o = getFrameElement(i);
		}
	}
	return rectToClientRect({
		width: f,
		height: p,
		x: u,
		y: d
	});
}
function getWindowScrollBarX(t, r) {
	let i = getNodeScroll(t).scrollLeft;
	return r ? r.left + i : getBoundingClientRect(getDocumentElement(t)).left + i;
}
function getHTMLOffset(t, r) {
	let i = t.getBoundingClientRect();
	return {
		x: i.left + r.scrollLeft - getWindowScrollBarX(t, i),
		y: i.top + r.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(t) {
	let { elements: r, rect: i, offsetParent: a, strategy: o } = t, s = o === "fixed", c = getDocumentElement(a), l = r ? isTopLayer(r.floating) : !1;
	if (a === c || l && s) return i;
	let u = {
		scrollLeft: 0,
		scrollTop: 0
	}, d = createCoords(1), f = createCoords(0), p = isHTMLElement$1(a);
	if ((p || !p && !s) && ((getNodeName(a) !== "body" || isOverflowElement(c)) && (u = getNodeScroll(a)), p)) {
		let t = getBoundingClientRect(a);
		d = getScale(a), f.x = t.x + a.clientLeft, f.y = t.y + a.clientTop;
	}
	let m = c && !p && !s ? getHTMLOffset(c, u) : createCoords(0);
	return {
		width: i.width * d.x,
		height: i.height * d.y,
		x: i.x * d.x - u.scrollLeft * d.x + f.x + m.x,
		y: i.y * d.y - u.scrollTop * d.y + f.y + m.y
	};
}
function getClientRects(t) {
	return Array.from(t.getClientRects());
}
function getDocumentRect(t) {
	let r = getDocumentElement(t), i = getNodeScroll(t), a = t.ownerDocument.body, o = max(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), s = max(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight), c = -i.scrollLeft + getWindowScrollBarX(t), l = -i.scrollTop;
	return getComputedStyle$1(a).direction === "rtl" && (c += max(r.clientWidth, a.clientWidth) - o), {
		width: o,
		height: s,
		x: c,
		y: l
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(t, r) {
	let i = getWindow$1(t), a = getDocumentElement(t), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		s = o.width, c = o.height;
		let t = isWebKit();
		(!t || t && r === "fixed") && (l = o.offsetLeft, u = o.offsetTop);
	}
	let d = getWindowScrollBarX(a);
	if (d <= 0) {
		let t = a.ownerDocument, r = t.body, i = getComputedStyle(r), o = t.compatMode === "CSS1Compat" && parseFloat(i.marginLeft) + parseFloat(i.marginRight) || 0, c = Math.abs(a.clientWidth - r.clientWidth - o);
		c <= SCROLLBAR_MAX && (s -= c);
	} else d <= SCROLLBAR_MAX && (s += d);
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function getInnerBoundingClientRect(t, r) {
	let i = getBoundingClientRect(t, !0, r === "fixed"), a = i.top + t.clientTop, o = i.left + t.clientLeft, s = isHTMLElement$1(t) ? getScale(t) : createCoords(1);
	return {
		width: t.clientWidth * s.x,
		height: t.clientHeight * s.y,
		x: o * s.x,
		y: a * s.y
	};
}
function getClientRectFromClippingAncestor(t, r, i) {
	let a;
	if (r === "viewport") a = getViewportRect(t, i);
	else if (r === "document") a = getDocumentRect(getDocumentElement(t));
	else if (isElement$1(r)) a = getInnerBoundingClientRect(r, i);
	else {
		let i = getVisualOffsets(t);
		a = {
			x: r.x - i.x,
			y: r.y - i.y,
			width: r.width,
			height: r.height
		};
	}
	return rectToClientRect(a);
}
function hasFixedPositionAncestor(t, r) {
	let i = getParentNode(t);
	return i === r || !isElement$1(i) || isLastTraversableNode(i) ? !1 : getComputedStyle$1(i).position === "fixed" || hasFixedPositionAncestor(i, r);
}
function getClippingElementAncestors(t, r) {
	let i = r.get(t);
	if (i) return i;
	let a = getOverflowAncestors(t, [], !1).filter((t) => isElement$1(t) && getNodeName(t) !== "body"), o = null, s = getComputedStyle$1(t).position === "fixed", c = s ? getParentNode(t) : t;
	for (; isElement$1(c) && !isLastTraversableNode(c);) {
		let r = getComputedStyle$1(c), i = isContainingBlock(c);
		!i && r.position === "fixed" && (o = null), (s ? !i && !o : !i && r.position === "static" && o && (o.position === "absolute" || o.position === "fixed") || isOverflowElement(c) && !i && hasFixedPositionAncestor(t, c)) ? a = a.filter((t) => t !== c) : o = r, c = getParentNode(c);
	}
	return r.set(t, a), a;
}
function getClippingRect(t) {
	let { element: r, boundary: i, rootBoundary: a, strategy: o } = t, s = [...i === "clippingAncestors" ? isTopLayer(r) ? [] : getClippingElementAncestors(r, this._c) : [].concat(i), a], c = getClientRectFromClippingAncestor(r, s[0], o), l = c.top, u = c.right, d = c.bottom, f = c.left;
	for (let t = 1; t < s.length; t++) {
		let i = getClientRectFromClippingAncestor(r, s[t], o);
		l = max(i.top, l), u = min(i.right, u), d = min(i.bottom, d), f = max(i.left, f);
	}
	return {
		width: u - f,
		height: d - l,
		x: f,
		y: l
	};
}
function getDimensions(t) {
	let { width: r, height: i } = getCssDimensions(t);
	return {
		width: r,
		height: i
	};
}
function getRectRelativeToOffsetParent(t, r, i) {
	let a = isHTMLElement$1(r), o = getDocumentElement(r), s = i === "fixed", c = getBoundingClientRect(t, !0, s, r), l = {
		scrollLeft: 0,
		scrollTop: 0
	}, u = createCoords(0);
	function d() {
		u.x = getWindowScrollBarX(o);
	}
	if (a || !a && !s) if ((getNodeName(r) !== "body" || isOverflowElement(o)) && (l = getNodeScroll(r)), a) {
		let t = getBoundingClientRect(r, !0, s, r);
		u.x = t.x + r.clientLeft, u.y = t.y + r.clientTop;
	} else o && d();
	s && !a && o && d();
	let f = o && !a && !s ? getHTMLOffset(o, l) : createCoords(0);
	return {
		x: c.left + l.scrollLeft - u.x - f.x,
		y: c.top + l.scrollTop - u.y - f.y,
		width: c.width,
		height: c.height
	};
}
function isStaticPositioned(t) {
	return getComputedStyle$1(t).position === "static";
}
function getTrueOffsetParent(t, r) {
	if (!isHTMLElement$1(t) || getComputedStyle$1(t).position === "fixed") return null;
	if (r) return r(t);
	let i = t.offsetParent;
	return getDocumentElement(t) === i && (i = i.ownerDocument.body), i;
}
function getOffsetParent(t, r) {
	let i = getWindow$1(t);
	if (isTopLayer(t)) return i;
	if (!isHTMLElement$1(t)) {
		let r = getParentNode(t);
		for (; r && !isLastTraversableNode(r);) {
			if (isElement$1(r) && !isStaticPositioned(r)) return r;
			r = getParentNode(r);
		}
		return i;
	}
	let a = getTrueOffsetParent(t, r);
	for (; a && isTableElement(a) && isStaticPositioned(a);) a = getTrueOffsetParent(a, r);
	return a && isLastTraversableNode(a) && isStaticPositioned(a) && !isContainingBlock(a) ? i : a || getContainingBlock(t) || i;
}
var getElementRects = async function(t) {
	let r = this.getOffsetParent || getOffsetParent, i = this.getDimensions, a = await i(t.floating);
	return {
		reference: getRectRelativeToOffsetParent(t.reference, await r(t.floating), t.strategy),
		floating: {
			x: 0,
			y: 0,
			width: a.width,
			height: a.height
		}
	};
};
function isRTL(t) {
	return getComputedStyle$1(t).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement: isElement$1,
	isRTL
};
function rectsAreEqual(t, r) {
	return t.x === r.x && t.y === r.y && t.width === r.width && t.height === r.height;
}
function observeMove(t, r) {
	let i = null, a, o = getDocumentElement(t);
	function s() {
		var t;
		clearTimeout(a), (t = i) == null || t.disconnect(), i = null;
	}
	function c(l, u) {
		l === void 0 && (l = !1), u === void 0 && (u = 1), s();
		let d = t.getBoundingClientRect(), { left: f, top: p, width: m, height: h } = d;
		if (l || r(), !m || !h) return;
		let g = floor(p), _ = floor(o.clientWidth - (f + m)), v = floor(o.clientHeight - (p + h)), y = floor(f), b = {
			rootMargin: -g + "px " + -_ + "px " + -v + "px " + -y + "px",
			threshold: max(0, min(1, u)) || 1
		}, x = !0;
		function S(r) {
			let i = r[0].intersectionRatio;
			if (i !== u) {
				if (!x) return c();
				i ? c(!1, i) : a = setTimeout(() => {
					c(!1, 1e-7);
				}, 1e3);
			}
			i === 1 && !rectsAreEqual(d, t.getBoundingClientRect()) && c(), x = !1;
		}
		try {
			i = new IntersectionObserver(S, {
				...b,
				root: o.ownerDocument
			});
		} catch {
			i = new IntersectionObserver(S, b);
		}
		i.observe(t);
	}
	return c(!0), s;
}
function autoUpdate(t, r, i, a) {
	a === void 0 && (a = {});
	let { ancestorScroll: o = !0, ancestorResize: s = !0, elementResize: c = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: u = !1 } = a, d = unwrapElement(t), f = o || s ? [...d ? getOverflowAncestors(d) : [], ...r ? getOverflowAncestors(r) : []] : [];
	f.forEach((t) => {
		o && t.addEventListener("scroll", i, { passive: !0 }), s && t.addEventListener("resize", i);
	});
	let p = d && l ? observeMove(d, i) : null, m = -1, h = null;
	c && (h = new ResizeObserver((t) => {
		let [a] = t;
		a && a.target === d && h && r && (h.unobserve(r), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
			var t;
			(t = h) == null || t.observe(r);
		})), i();
	}), d && !u && h.observe(d), r && h.observe(r));
	let g, _ = u ? getBoundingClientRect(t) : null;
	u && v();
	function v() {
		let r = getBoundingClientRect(t);
		_ && !rectsAreEqual(_, r) && i(), _ = r, g = requestAnimationFrame(v);
	}
	return i(), () => {
		var t;
		f.forEach((t) => {
			o && t.removeEventListener("scroll", i), s && t.removeEventListener("resize", i);
		}), p?.(), (t = h) == null || t.disconnect(), h = null, u && cancelAnimationFrame(g);
	};
}
var offset = offset$1, shift = shift$1, flip$1 = flip$2, size = size$1, hide = hide$1, arrow = arrow$1, limitShift = limitShift$1, computePosition = (t, r, i) => {
	let a = /* @__PURE__ */ new Map(), o = {
		platform,
		...i
	}, s = {
		...o.platform,
		_c: a
	};
	return computePosition$1(t, r, {
		...o,
		platform: s
	});
};
function get$1(t) {
	return typeof t == "function" ? t() : t;
}
function getDPR(t) {
	return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(t, r) {
	let i = getDPR(t);
	return Math.round(r * i) / i;
}
function getFloatingContentCSSVars(t) {
	return {
		[`--bits-${t}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
		[`--bits-${t}-content-available-width`]: "var(--bits-floating-available-width)",
		[`--bits-${t}-content-available-height`]: "var(--bits-floating-available-height)",
		[`--bits-${t}-anchor-width`]: "var(--bits-floating-anchor-width)",
		[`--bits-${t}-anchor-height`]: "var(--bits-floating-anchor-height)"
	};
}
function useFloating(t) {
	let r = t.whileElementsMounted, i = /* @__PURE__ */ user_derived(() => get$1(t.open) ?? !0), a = /* @__PURE__ */ user_derived(() => get$1(t.middleware)), o = /* @__PURE__ */ user_derived(() => get$1(t.transform) ?? !0), s = /* @__PURE__ */ user_derived(() => get$1(t.placement) ?? "bottom"), c = /* @__PURE__ */ user_derived(() => get$1(t.strategy) ?? "absolute"), l = /* @__PURE__ */ user_derived(() => get$1(t.sideOffset) ?? 0), u = /* @__PURE__ */ user_derived(() => get$1(t.alignOffset) ?? 0), d = t.reference, f = /* @__PURE__ */ state(0), p = /* @__PURE__ */ state(0), m = simpleBox(null), h = /* @__PURE__ */ state(proxy(get$3(c))), g = /* @__PURE__ */ state(proxy(get$3(s))), _ = /* @__PURE__ */ state(proxy({})), v = /* @__PURE__ */ state(!1), y = !1, b = 0, x = /* @__PURE__ */ user_derived(() => {
		let t = m.current ? roundByDPR(m.current, get$3(f)) : get$3(f), r = m.current ? roundByDPR(m.current, get$3(p)) : get$3(p);
		return get$3(o) ? {
			position: get$3(h),
			left: "0",
			top: "0",
			transform: `translate(${t}px, ${r}px)`,
			...m.current && getDPR(m.current) >= 1.5 && { willChange: "transform" }
		} : {
			position: get$3(h),
			left: `${t}px`,
			top: `${r}px`
		};
	}), S;
	function C() {
		if (d.current === null || m.current === null) return;
		let t = d.current, r = m.current, o = ++b;
		computePosition(t, r, {
			middleware: get$3(a),
			placement: get$3(s),
			strategy: get$3(c)
		}).then((a) => {
			if (o === b && !(d.current !== t || m.current !== r)) {
				if (isReferenceHidden(t)) {
					set(_, {
						...get$3(_),
						hide: {
							...get$3(_).hide,
							referenceHidden: !0
						}
					}, !0);
					return;
				}
				if (!get$3(i) && get$3(f) !== 0 && get$3(p) !== 0) {
					let t = Math.max(Math.abs(get$3(l)), Math.abs(get$3(u)), 15);
					if (a.x <= t && a.y <= t) return;
				}
				set(f, a.x, !0), set(p, a.y, !0), set(h, a.strategy, !0), set(g, a.placement, !0), set(_, a.middlewareData, !0), set(v, !0);
			}
		});
	}
	function w() {
		typeof S == "function" && (S(), S = void 0), b++;
	}
	function T() {
		if (w(), r === void 0) {
			C();
			return;
		}
		get$3(i) && (d.current === null || m.current === null || (S = r(d.current, m.current, C)));
	}
	function E() {
		!get$3(i) && m.current === null && set(v, !1);
	}
	function D() {
		return [
			get$3(a),
			get$3(s),
			get$3(c),
			get$3(l),
			get$3(u),
			get$3(i)
		];
	}
	return user_effect(() => {
		r === void 0 && get$3(i) && C();
	}), user_effect(T), user_effect(() => {
		if (r !== void 0) {
			if (D(), !get$3(i)) {
				y = !1;
				return;
			}
			if (!get$3(v)) {
				y = !1;
				return;
			}
			if (!y) {
				y = !0;
				return;
			}
			C();
		}
	}), user_effect(E), user_effect(() => w), {
		floating: m,
		reference: d,
		get strategy() {
			return get$3(h);
		},
		get placement() {
			return get$3(g);
		},
		get middlewareData() {
			return get$3(_);
		},
		get isPositioned() {
			return get$3(v);
		},
		get floatingStyles() {
			return get$3(x);
		},
		get update() {
			return C;
		}
	};
}
function isReferenceHidden(t) {
	return t instanceof Element ? !t.isConnected || t instanceof HTMLElement && t.hidden ? !0 : t.getClientRects().length === 0 : !1;
}
var OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, FloatingRootContext = new Context$1("Floating.Root"), FloatingContentContext = new Context$1("Floating.Content"), FloatingTooltipRootContext = new Context$1("Floating.Root"), FloatingRootState = class t {
	static create(r = !1) {
		return r ? FloatingTooltipRootContext.set(new t()) : FloatingRootContext.set(new t());
	}
	anchorNode = simpleBox(null);
	customAnchorNode = simpleBox(null);
	triggerNode = simpleBox(null);
	constructor() {
		user_effect(() => {
			this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
		});
	}
}, FloatingContentState = class t {
	static create(r, i = !1) {
		return i ? FloatingContentContext.set(new t(r, FloatingTooltipRootContext.get())) : FloatingContentContext.set(new t(r, FloatingRootContext.get()));
	}
	opts;
	root;
	contentRef = simpleBox(null);
	wrapperRef = simpleBox(null);
	arrowRef = simpleBox(null);
	contentAttachment = attachRef$1(this.contentRef);
	wrapperAttachment = attachRef$1(this.wrapperRef);
	arrowAttachment = attachRef$1(this.arrowRef);
	arrowId = simpleBox(useId());
	#e = /* @__PURE__ */ user_derived(() => {
		if (typeof this.opts.style == "string") return cssToStyleObj$1(this.opts.style);
		if (!this.opts.style) return {};
	});
	#t = void 0;
	#n = new ElementSize(() => this.arrowRef.current ?? void 0);
	#r = /* @__PURE__ */ user_derived(() => this.#n?.width ?? 0);
	#i = /* @__PURE__ */ user_derived(() => this.#n?.height ?? 0);
	#a = /* @__PURE__ */ user_derived(() => this.opts.side?.current + (this.opts.align.current === "center" ? "" : `-${this.opts.align.current}`));
	#o = /* @__PURE__ */ user_derived(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
	#s = /* @__PURE__ */ user_derived(() => get$3(this.#o).length > 0);
	get hasExplicitBoundaries() {
		return get$3(this.#s);
	}
	set hasExplicitBoundaries(t) {
		set(this.#s, t);
	}
	#c = /* @__PURE__ */ user_derived(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: get$3(this.#o).filter(isNotNull),
		altBoundary: this.hasExplicitBoundaries
	}));
	get detectOverflowOptions() {
		return get$3(this.#c);
	}
	set detectOverflowOptions(t) {
		set(this.#c, t);
	}
	#l = /* @__PURE__ */ state(void 0);
	#u = /* @__PURE__ */ state(void 0);
	#d = /* @__PURE__ */ state(void 0);
	#f = /* @__PURE__ */ state(void 0);
	#p = /* @__PURE__ */ user_derived(() => [
		offset({
			mainAxis: this.opts.sideOffset.current + get$3(this.#i),
			alignmentAxis: this.opts.alignOffset.current
		}),
		this.opts.avoidCollisions.current && shift({
			mainAxis: !0,
			crossAxis: !1,
			limiter: this.opts.sticky.current === "partial" ? limitShift() : void 0,
			...this.detectOverflowOptions
		}),
		this.opts.avoidCollisions.current && flip$1({ ...this.detectOverflowOptions }),
		size({
			...this.detectOverflowOptions,
			apply: ({ rects: t, availableWidth: r, availableHeight: i }) => {
				let { width: a, height: o } = t.reference;
				set(this.#l, r, !0), set(this.#u, i, !0), set(this.#d, a, !0), set(this.#f, o, !0);
			}
		}),
		this.arrowRef.current && arrow({
			element: this.arrowRef.current,
			padding: this.opts.arrowPadding.current
		}),
		transformOrigin({
			arrowWidth: get$3(this.#r),
			arrowHeight: get$3(this.#i)
		}),
		this.opts.hideWhenDetached.current && hide({
			strategy: "referenceHidden",
			...this.detectOverflowOptions
		})
	].filter(Boolean));
	get middleware() {
		return get$3(this.#p);
	}
	set middleware(t) {
		set(this.#p, t);
	}
	floating;
	#m = /* @__PURE__ */ user_derived(() => getSideFromPlacement(this.floating.placement));
	get placedSide() {
		return get$3(this.#m);
	}
	set placedSide(t) {
		set(this.#m, t);
	}
	#h = /* @__PURE__ */ user_derived(() => getAlignFromPlacement(this.floating.placement));
	get placedAlign() {
		return get$3(this.#h);
	}
	set placedAlign(t) {
		set(this.#h, t);
	}
	#g = /* @__PURE__ */ user_derived(() => this.floating.middlewareData.arrow?.x ?? 0);
	get arrowX() {
		return get$3(this.#g);
	}
	set arrowX(t) {
		set(this.#g, t);
	}
	#_ = /* @__PURE__ */ user_derived(() => this.floating.middlewareData.arrow?.y ?? 0);
	get arrowY() {
		return get$3(this.#_);
	}
	set arrowY(t) {
		set(this.#_, t);
	}
	#v = /* @__PURE__ */ user_derived(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
	get cannotCenterArrow() {
		return get$3(this.#v);
	}
	set cannotCenterArrow(t) {
		set(this.#v, t);
	}
	#y = /* @__PURE__ */ state();
	get contentZIndex() {
		return get$3(this.#y);
	}
	set contentZIndex(t) {
		set(this.#y, t, !0);
	}
	#b = /* @__PURE__ */ user_derived(() => OPPOSITE_SIDE[this.placedSide]);
	get arrowBaseSide() {
		return get$3(this.#b);
	}
	set arrowBaseSide(t) {
		set(this.#b, t);
	}
	#x = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.wrapperId.current,
		"data-bits-floating-content-wrapper": "",
		style: {
			...this.floating.floatingStyles,
			transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: this.contentZIndex,
			"--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
			"--bits-floating-available-width": `${get$3(this.#l)}px`,
			"--bits-floating-available-height": `${get$3(this.#u)}px`,
			"--bits-floating-anchor-width": `${get$3(this.#d)}px`,
			"--bits-floating-anchor-height": `${get$3(this.#f)}px`,
			...this.floating.middlewareData.hide?.referenceHidden && {
				visibility: "hidden",
				"pointer-events": "none"
			},
			...get$3(this.#e)
		},
		dir: this.opts.dir.current,
		...this.wrapperAttachment
	}));
	get wrapperProps() {
		return get$3(this.#x);
	}
	set wrapperProps(t) {
		set(this.#x, t);
	}
	#S = /* @__PURE__ */ user_derived(() => ({
		"data-side": this.placedSide,
		"data-align": this.placedAlign,
		style: styleToString$1({ ...get$3(this.#e) }),
		...this.contentAttachment
	}));
	get props() {
		return get$3(this.#S);
	}
	set props(t) {
		set(this.#S, t);
	}
	#C = /* @__PURE__ */ user_derived(() => ({
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
		return get$3(this.#C);
	}
	set arrowStyle(t) {
		set(this.#C, t);
	}
	constructor(t, r) {
		this.opts = t, this.root = r, this.#t = t.updatePositionStrategy, t.customAnchor && (this.root.customAnchorNode.current = t.customAnchor.current), watch$2(() => t.customAnchor.current, (t) => {
			this.root.customAnchorNode.current = t;
		}), this.floating = useFloating({
			strategy: () => this.opts.strategy.current,
			placement: () => get$3(this.#a),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...t) => autoUpdate(...t, { animationFrame: this.#t?.current === "always" }),
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		}), user_effect(() => {
			this.floating.isPositioned && this.opts.onPlaced?.current();
		}), watch$2(() => this.contentRef.current, (t) => {
			if (!t || !this.opts.enabled.current) return;
			let r = getWindow(t), i = r.requestAnimationFrame(() => {
				if (this.contentRef.current !== t || !this.opts.enabled.current) return;
				let i = r.getComputedStyle(t).zIndex;
				i !== this.contentZIndex && (this.contentZIndex = i);
			});
			return () => {
				r.cancelAnimationFrame(i);
			};
		}), user_effect(() => {
			this.floating.floating.current = this.wrapperRef.current;
		});
	}
}, FloatingAnchorState = class t {
	static create(r, i = !1) {
		return i ? new t(r, FloatingTooltipRootContext.get()) : new t(r, FloatingRootContext.get());
	}
	opts;
	root;
	constructor(t, r) {
		this.opts = t, this.root = r, t.virtualEl && t.virtualEl.current ? r.triggerNode = boxFrom$1(t.virtualEl.current) : r.triggerNode = t.ref;
	}
};
function transformOrigin(t) {
	return {
		name: "transformOrigin",
		options: t,
		fn(r) {
			let { placement: i, rects: a, middlewareData: o } = r, s = o.arrow?.centerOffset !== 0, c = s ? 0 : t.arrowWidth, l = s ? 0 : t.arrowHeight, [u, d] = getSideAndAlignFromPlacement(i), f = {
				start: "0%",
				center: "50%",
				end: "100%"
			}[d], p = (o.arrow?.x ?? 0) + c / 2, m = (o.arrow?.y ?? 0) + l / 2, h = "", g = "";
			return u === "bottom" ? (h = s ? f : `${p}px`, g = `${-l}px`) : u === "top" ? (h = s ? f : `${p}px`, g = `${a.floating.height + l}px`) : u === "right" ? (h = `${-l}px`, g = s ? f : `${m}px`) : u === "left" && (h = `${a.floating.width + l}px`, g = s ? f : `${m}px`), { data: {
				x: h,
				y: g
			} };
		}
	};
}
function getSideAndAlignFromPlacement(t) {
	let [r, i = "center"] = t.split("-");
	return [r, i];
}
function getSideFromPlacement(t) {
	return getSideAndAlignFromPlacement(t)[0];
}
function getAlignFromPlacement(t) {
	return getSideAndAlignFromPlacement(t)[1];
}
function Floating_layer(t, r) {
	push(r, !0);
	let i = prop(r, "tooltip", 3, !1);
	FloatingRootState.create(i());
	var a = comment();
	snippet(first_child(a), () => r.children ?? noop$2), append(t, a), pop();
}
function Floating_layer_anchor(t, r) {
	push(r, !0);
	let i = prop(r, "tooltip", 3, !1);
	FloatingAnchorState.create({
		id: boxWith$1(() => r.id),
		virtualEl: boxWith$1(() => r.virtualEl),
		ref: r.ref
	}, i());
	var a = comment();
	snippet(first_child(a), () => r.children ?? noop$2), append(t, a), pop();
}
function Floating_layer_content(t, r) {
	push(r, !0);
	let i = prop(r, "side", 3, "bottom"), a = prop(r, "sideOffset", 3, 0), o = prop(r, "align", 3, "center"), s = prop(r, "alignOffset", 3, 0), c = prop(r, "arrowPadding", 3, 0), l = prop(r, "avoidCollisions", 3, !0), u = prop(r, "collisionBoundary", 19, () => []), d = prop(r, "collisionPadding", 3, 0), f = prop(r, "hideWhenDetached", 3, !1), p = prop(r, "onPlaced", 3, () => {}), m = prop(r, "sticky", 3, "partial"), h = prop(r, "updatePositionStrategy", 3, "optimized"), g = prop(r, "strategy", 3, "fixed"), v = prop(r, "dir", 3, "ltr"), y = prop(r, "style", 19, () => ({})), b = prop(r, "wrapperId", 19, useId), x = prop(r, "customAnchor", 3, null), S = prop(r, "tooltip", 3, !1), C = FloatingContentState.create({
		side: boxWith$1(() => i()),
		sideOffset: boxWith$1(() => a()),
		align: boxWith$1(() => o()),
		alignOffset: boxWith$1(() => s()),
		id: boxWith$1(() => r.id),
		arrowPadding: boxWith$1(() => c()),
		avoidCollisions: boxWith$1(() => l()),
		collisionBoundary: boxWith$1(() => u()),
		collisionPadding: boxWith$1(() => d()),
		hideWhenDetached: boxWith$1(() => f()),
		onPlaced: boxWith$1(() => p()),
		sticky: boxWith$1(() => m()),
		updatePositionStrategy: boxWith$1(() => h()),
		strategy: boxWith$1(() => g()),
		dir: boxWith$1(() => v()),
		style: boxWith$1(() => y()),
		enabled: boxWith$1(() => r.enabled),
		wrapperId: boxWith$1(() => b()),
		customAnchor: boxWith$1(() => x())
	}, S()), w = /* @__PURE__ */ user_derived(() => mergeProps$1(C.wrapperProps, { style: { pointerEvents: "auto" } }));
	var T = comment();
	snippet(first_child(T), () => r.content ?? noop$2, () => ({
		props: C.props,
		wrapperProps: get$3(w)
	})), append(t, T), pop();
}
function Floating_layer_content_static(t, r) {
	push(r, !0), onMount(() => {
		r.onPlaced?.();
	});
	var i = comment();
	snippet(first_child(i), () => r.content ?? noop$2, () => ({
		props: {},
		wrapperProps: {}
	})), append(t, i), pop();
}
function Popper_content(t, r) {
	let i = prop(r, "isStatic", 3, !1), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"content",
		"isStatic",
		"onPlaced"
	]);
	var o = comment(), s = first_child(o), c = (t) => {
		Floating_layer_content_static(t, {
			get content() {
				return r.content;
			},
			get onPlaced() {
				return r.onPlaced;
			}
		});
	}, l = (t) => {
		Floating_layer_content(t, spread_props({
			get content() {
				return r.content;
			},
			get onPlaced() {
				return r.onPlaced;
			}
		}, () => a));
	};
	if_block(s, (t) => {
		i() ? t(c) : t(l, -1);
	}), append(t, o);
}
var root_1$6 = /* @__PURE__ */ from_html("<!> <!>", 1);
function Popper_layer_inner(t, r) {
	push(r, !0);
	let i = prop(r, "interactOutsideBehavior", 3, "close"), a = prop(r, "trapFocus", 3, !0), o = prop(r, "isValidEvent", 3, () => !1), s = prop(r, "customAnchor", 3, null), c = prop(r, "isStatic", 3, !1), l = prop(r, "tooltip", 3, !1), u = prop(r, "contentPointerEvents", 3, "auto"), d = /* @__PURE__ */ rest_props(r, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled.ref.tooltip.contentPointerEvents".split(".")), f = /* @__PURE__ */ user_derived(() => r.preventScroll ?? !0), p = /* @__PURE__ */ user_derived(() => r.strategy ?? (get$3(f) ? "fixed" : "absolute"));
	Popper_content(t, {
		get isStatic() {
			return c();
		},
		get id() {
			return r.id;
		},
		get side() {
			return r.side;
		},
		get sideOffset() {
			return r.sideOffset;
		},
		get align() {
			return r.align;
		},
		get alignOffset() {
			return r.alignOffset;
		},
		get arrowPadding() {
			return r.arrowPadding;
		},
		get avoidCollisions() {
			return r.avoidCollisions;
		},
		get collisionBoundary() {
			return r.collisionBoundary;
		},
		get collisionPadding() {
			return r.collisionPadding;
		},
		get sticky() {
			return r.sticky;
		},
		get hideWhenDetached() {
			return r.hideWhenDetached;
		},
		get updatePositionStrategy() {
			return r.updatePositionStrategy;
		},
		get strategy() {
			return get$3(p);
		},
		get dir() {
			return r.dir;
		},
		get wrapperId() {
			return r.wrapperId;
		},
		get style() {
			return r.style;
		},
		get onPlaced() {
			return r.onPlaced;
		},
		get customAnchor() {
			return s();
		},
		get enabled() {
			return r.enabled;
		},
		get tooltip() {
			return l();
		},
		content: (t, s) => {
			let c = () => s?.().props, l = () => s?.().wrapperProps;
			var p = root_1$6(), m = first_child(p), h = (t) => {
				Scroll_lock(t, { get preventScroll() {
					return get$3(f);
				} });
			}, g = (t) => {
				Scroll_lock(t, { get preventScroll() {
					return get$3(f);
				} });
			};
			if_block(m, (t) => {
				r.forceMount && r.enabled ? t(h) : r.forceMount || t(g, 1);
			}), Focus_scope(sibling(m, 2), {
				get onOpenAutoFocus() {
					return r.onOpenAutoFocus;
				},
				get onCloseAutoFocus() {
					return r.onCloseAutoFocus;
				},
				get loop() {
					return r.loop;
				},
				get enabled() {
					return r.enabled;
				},
				get trapFocus() {
					return a();
				},
				get forceMount() {
					return r.forceMount;
				},
				get ref() {
					return r.ref;
				},
				focusScope: (t, a) => {
					let s = () => a?.().props;
					Escape_layer(t, {
						get onEscapeKeydown() {
							return r.onEscapeKeydown;
						},
						get escapeKeydownBehavior() {
							return r.escapeKeydownBehavior;
						},
						get enabled() {
							return r.enabled;
						},
						get ref() {
							return r.ref;
						},
						children: (t, a) => {
							Dismissible_layer(t, {
								get id() {
									return r.id;
								},
								get onInteractOutside() {
									return r.onInteractOutside;
								},
								get onFocusOutside() {
									return r.onFocusOutside;
								},
								get interactOutsideBehavior() {
									return i();
								},
								get isValidEvent() {
									return o();
								},
								get enabled() {
									return r.enabled;
								},
								get ref() {
									return r.ref;
								},
								children: (t, i) => {
									let a = () => i?.().props;
									Text_selection_layer(t, {
										get id() {
											return r.id;
										},
										get preventOverflowTextSelection() {
											return r.preventOverflowTextSelection;
										},
										get onPointerDown() {
											return r.onPointerDown;
										},
										get onPointerUp() {
											return r.onPointerUp;
										},
										get enabled() {
											return r.enabled;
										},
										get ref() {
											return r.ref;
										},
										children: (t, i) => {
											var o = comment(), f = first_child(o);
											{
												let t = /* @__PURE__ */ user_derived(() => ({
													props: mergeProps$1(d, c(), a(), s(), { style: { pointerEvents: u() } }),
													wrapperProps: l()
												}));
												snippet(f, () => r.popper ?? noop$2, () => get$3(t));
											}
											append(t, o);
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
			}), append(t, p);
		},
		$$slots: { content: !0 }
	}), pop();
}
function Popper_layer(t, r) {
	let i = prop(r, "interactOutsideBehavior", 3, "close"), a = prop(r, "trapFocus", 3, !0), o = prop(r, "isValidEvent", 3, () => !1), s = prop(r, "customAnchor", 3, null), c = prop(r, "isStatic", 3, !1), l = /* @__PURE__ */ rest_props(r, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.open.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.ref.shouldRender".split("."));
	var u = comment(), d = first_child(u), f = (t) => {
		Popper_layer_inner(t, spread_props({
			get popper() {
				return r.popper;
			},
			get onEscapeKeydown() {
				return r.onEscapeKeydown;
			},
			get escapeKeydownBehavior() {
				return r.escapeKeydownBehavior;
			},
			get preventOverflowTextSelection() {
				return r.preventOverflowTextSelection;
			},
			get id() {
				return r.id;
			},
			get onPointerDown() {
				return r.onPointerDown;
			},
			get onPointerUp() {
				return r.onPointerUp;
			},
			get side() {
				return r.side;
			},
			get sideOffset() {
				return r.sideOffset;
			},
			get align() {
				return r.align;
			},
			get alignOffset() {
				return r.alignOffset;
			},
			get arrowPadding() {
				return r.arrowPadding;
			},
			get avoidCollisions() {
				return r.avoidCollisions;
			},
			get collisionBoundary() {
				return r.collisionBoundary;
			},
			get collisionPadding() {
				return r.collisionPadding;
			},
			get sticky() {
				return r.sticky;
			},
			get hideWhenDetached() {
				return r.hideWhenDetached;
			},
			get updatePositionStrategy() {
				return r.updatePositionStrategy;
			},
			get strategy() {
				return r.strategy;
			},
			get dir() {
				return r.dir;
			},
			get preventScroll() {
				return r.preventScroll;
			},
			get wrapperId() {
				return r.wrapperId;
			},
			get style() {
				return r.style;
			},
			get onPlaced() {
				return r.onPlaced;
			},
			get customAnchor() {
				return s();
			},
			get isStatic() {
				return c();
			},
			get enabled() {
				return r.open;
			},
			get onInteractOutside() {
				return r.onInteractOutside;
			},
			get onCloseAutoFocus() {
				return r.onCloseAutoFocus;
			},
			get onOpenAutoFocus() {
				return r.onOpenAutoFocus;
			},
			get interactOutsideBehavior() {
				return i();
			},
			get loop() {
				return r.loop;
			},
			get trapFocus() {
				return a();
			},
			get isValidEvent() {
				return o();
			},
			get onFocusOutside() {
				return r.onFocusOutside;
			},
			forceMount: !1,
			get ref() {
				return r.ref;
			}
		}, () => l));
	};
	if_block(d, (t) => {
		r.shouldRender && t(f);
	}), append(t, u);
}
function Popper_layer_force_mount(t, r) {
	let i = prop(r, "interactOutsideBehavior", 3, "close"), a = prop(r, "trapFocus", 3, !0), o = prop(r, "isValidEvent", 3, () => !1), s = prop(r, "customAnchor", 3, null), c = prop(r, "isStatic", 3, !1), l = /* @__PURE__ */ rest_props(r, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled".split("."));
	Popper_layer_inner(t, spread_props({
		get popper() {
			return r.popper;
		},
		get onEscapeKeydown() {
			return r.onEscapeKeydown;
		},
		get escapeKeydownBehavior() {
			return r.escapeKeydownBehavior;
		},
		get preventOverflowTextSelection() {
			return r.preventOverflowTextSelection;
		},
		get id() {
			return r.id;
		},
		get onPointerDown() {
			return r.onPointerDown;
		},
		get onPointerUp() {
			return r.onPointerUp;
		},
		get side() {
			return r.side;
		},
		get sideOffset() {
			return r.sideOffset;
		},
		get align() {
			return r.align;
		},
		get alignOffset() {
			return r.alignOffset;
		},
		get arrowPadding() {
			return r.arrowPadding;
		},
		get avoidCollisions() {
			return r.avoidCollisions;
		},
		get collisionBoundary() {
			return r.collisionBoundary;
		},
		get collisionPadding() {
			return r.collisionPadding;
		},
		get sticky() {
			return r.sticky;
		},
		get hideWhenDetached() {
			return r.hideWhenDetached;
		},
		get updatePositionStrategy() {
			return r.updatePositionStrategy;
		},
		get strategy() {
			return r.strategy;
		},
		get dir() {
			return r.dir;
		},
		get preventScroll() {
			return r.preventScroll;
		},
		get wrapperId() {
			return r.wrapperId;
		},
		get style() {
			return r.style;
		},
		get onPlaced() {
			return r.onPlaced;
		},
		get customAnchor() {
			return s();
		},
		get isStatic() {
			return c();
		},
		get enabled() {
			return r.enabled;
		},
		get onInteractOutside() {
			return r.onInteractOutside;
		},
		get onCloseAutoFocus() {
			return r.onCloseAutoFocus;
		},
		get onOpenAutoFocus() {
			return r.onOpenAutoFocus;
		},
		get interactOutsideBehavior() {
			return i();
		},
		get loop() {
			return r.loop;
		},
		get trapFocus() {
			return a();
		},
		get isValidEvent() {
			return o();
		},
		get onFocusOutside() {
			return r.onFocusOutside;
		}
	}, () => l, { forceMount: !0 }));
}
function Mounted(t, r) {
	push(r, !0);
	let i = prop(r, "mounted", 15, !1), a = prop(r, "onMountedChange", 3, noop$1);
	onMountEffect(() => (i(!0), a()(!0), () => {
		i(!1), a()(!1);
	})), pop();
}
function isPointInPolygon(t, r) {
	let [i, a] = t, o = !1, s = r.length;
	for (let t = 0, c = s - 1; t < s; c = t++) {
		let [s, l] = r[t] ?? [0, 0], [u, d] = r[c] ?? [0, 0];
		l >= a != d >= a && i <= (u - s) * (a - l) / (d - l) + s && (o = !o);
	}
	return o;
}
function isInsideRect(t, r) {
	return t[0] >= r.left && t[0] <= r.right && t[1] >= r.top && t[1] <= r.bottom;
}
function getSide(t, r) {
	let i = t.left + t.width / 2, a = t.top + t.height / 2, o = r.left + r.width / 2, s = r.top + r.height / 2, c = o - i, l = s - a;
	return Math.abs(c) > Math.abs(l) ? c > 0 ? "right" : "left" : l > 0 ? "bottom" : "top";
}
var SafePolygon = class {
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
	constructor(t) {
		this.#e = t, this.#t = t.buffer ?? 1;
		let r = t.transitIntentTimeout;
		this.#n = typeof r == "number" && r > 0 ? r : null, watch$2([
			t.triggerNode,
			t.contentNode,
			t.enabled
		], ([t, r, i]) => {
			if (!t || !r || !i) {
				this.#o = null, this.#m();
				return;
			}
			return this.#o && this.#o !== t && this.#m(), this.#o = t, [
				on(getDocument$1(t), "pointermove", (i) => {
					this.#p([i.clientX, i.clientY], t, r);
				}),
				on(t, "pointerleave", (t) => {
					let i = t.relatedTarget;
					if (isElement(i) && r.contains(i)) return;
					let a = this.#e.ignoredTargets?.() ?? [];
					isElement(i) && a.some((t) => t === i || t.contains(i)) || (this.#a = isElement(i) && a.length > 0 ? a.filter((t) => i.contains(t)) : [], this.#r = [t.clientX, t.clientY], this.#i = "content", this.#u());
				}),
				on(t, "pointerenter", () => {
					this.#m();
				}),
				on(r, "pointerenter", () => {
					this.#m();
				}),
				on(r, "pointerleave", (r) => {
					let i = r.relatedTarget;
					isElement(i) && t.contains(i) || (this.#r = [r.clientX, r.clientY], this.#i = "trigger", this.#u());
				})
			].reduce((t, r) => () => {
				t(), r();
			}, () => {});
		});
	}
	#p(t, r, i) {
		if (!this.#r || !this.#i) return;
		this.#l(), this.#f();
		let a = r.getBoundingClientRect(), o = i.getBoundingClientRect();
		if (this.#i === "content" && isInsideRect(t, o)) {
			this.#m();
			return;
		}
		if (this.#i === "trigger" && isInsideRect(t, a)) {
			this.#m();
			return;
		}
		if (this.#i === "content" && this.#a.length > 0) for (let r of this.#a) {
			let i = r.getBoundingClientRect();
			if (isInsideRect(t, i)) return;
			let o = getSide(a, i), s = this.#h(a, i, o);
			if (s && isPointInPolygon(t, s)) return;
		}
		let s = getSide(a, o), c = this.#h(a, o, s);
		if (c && isPointInPolygon(t, c)) return;
		let l = this.#i === "content" ? o : a;
		isPointInPolygon(t, this.#g(this.#r, l, s, this.#i)) || (this.#m(), this.#e.onPointerExit());
	}
	#m() {
		this.#r = null, this.#i = null, this.#a = [], this.#l(), this.#d();
	}
	#h(t, r, i) {
		let a = this.#t;
		switch (i) {
			case "top": return [
				[Math.min(t.left, r.left) - a, t.top],
				[Math.min(t.left, r.left) - a, r.bottom],
				[Math.max(t.right, r.right) + a, r.bottom],
				[Math.max(t.right, r.right) + a, t.top]
			];
			case "bottom": return [
				[Math.min(t.left, r.left) - a, t.bottom],
				[Math.min(t.left, r.left) - a, r.top],
				[Math.max(t.right, r.right) + a, r.top],
				[Math.max(t.right, r.right) + a, t.bottom]
			];
			case "left": return [
				[t.left, Math.min(t.top, r.top) - a],
				[r.right, Math.min(t.top, r.top) - a],
				[r.right, Math.max(t.bottom, r.bottom) + a],
				[t.left, Math.max(t.bottom, r.bottom) + a]
			];
			case "right": return [
				[t.right, Math.min(t.top, r.top) - a],
				[r.left, Math.min(t.top, r.top) - a],
				[r.left, Math.max(t.bottom, r.bottom) + a],
				[t.right, Math.max(t.bottom, r.bottom) + a]
			];
		}
	}
	#g(t, r, i, a) {
		let o = this.#t * 4, [s, c] = t;
		switch (a === "trigger" ? this.#_(i) : i) {
			case "top": return [
				[s - o, c + o],
				[s + o, c + o],
				[r.right + o, r.bottom],
				[r.right + o, r.top],
				[r.left - o, r.top],
				[r.left - o, r.bottom]
			];
			case "bottom": return [
				[s - o, c - o],
				[s + o, c - o],
				[r.right + o, r.top],
				[r.right + o, r.bottom],
				[r.left - o, r.bottom],
				[r.left - o, r.top]
			];
			case "left": return [
				[s + o, c - o],
				[s + o, c + o],
				[r.right, r.bottom + o],
				[r.left, r.bottom + o],
				[r.left, r.top - o],
				[r.right, r.top - o]
			];
			case "right": return [
				[s - o, c - o],
				[s - o, c + o],
				[r.left, r.bottom + o],
				[r.right, r.bottom + o],
				[r.right, r.top - o],
				[r.left, r.top - o]
			];
		}
	}
	#_(t) {
		switch (t) {
			case "top": return "bottom";
			case "bottom": return "top";
			case "left": return "right";
			case "right": return "left";
		}
	}
}, labelAttrs = createBitsAttrs({
	component: "label",
	parts: ["root"]
}), LabelRootState = class t {
	static create(r) {
		return new t(r);
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
		return get$3(this.#e);
	}
	set props(t) {
		set(this.#e, t);
	}
}, root_2$12 = /* @__PURE__ */ from_html("<label><!></label>");
function Label$1(t, r) {
	let i = props_id();
	push(r, !0);
	let a = prop(r, "id", 19, () => createId(i)), o = prop(r, "ref", 15, null), s = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref",
		"for"
	]), c = LabelRootState.create({
		id: boxWith$1(() => a()),
		ref: boxWith$1(() => o(), (t) => o(t))
	}), l = /* @__PURE__ */ user_derived(() => mergeProps$1(s, c.props, { for: r.for }));
	var u = comment(), d = first_child(u), f = (t) => {
		var i = comment();
		snippet(first_child(i), () => r.child, () => ({ props: get$3(l) })), append(t, i);
	}, p = (t) => {
		var i = root_2$12();
		attribute_effect(i, () => ({
			...get$3(l),
			for: r.for
		})), snippet(child(i), () => r.children ?? noop$2), reset(i), append(t, i);
	};
	if_block(d, (t) => {
		r.child ? t(f) : t(p, -1);
	}), append(t, u), pop();
}
var linkPreviewAttrs = createBitsAttrs({
	component: "link-preview",
	parts: ["content", "trigger"]
}), LinkPreviewRootContext = new Context$1("LinkPreview.Root"), LinkPreviewRootState = class t {
	static create(r) {
		return LinkPreviewRootContext.set(new t(r));
	}
	opts;
	#e = /* @__PURE__ */ state(!1);
	get hasSelection() {
		return get$3(this.#e);
	}
	set hasSelection(t) {
		set(this.#e, t, !0);
	}
	#t = /* @__PURE__ */ state(!1);
	get isPointerDownOnContent() {
		return get$3(this.#t);
	}
	set isPointerDownOnContent(t) {
		set(this.#t, t, !0);
	}
	#n = /* @__PURE__ */ state(!1);
	get containsSelection() {
		return get$3(this.#n);
	}
	set containsSelection(t) {
		set(this.#n, t, !0);
	}
	timeout = null;
	#r = /* @__PURE__ */ state(null);
	get contentNode() {
		return get$3(this.#r);
	}
	set contentNode(t) {
		set(this.#r, t, !0);
	}
	#i = /* @__PURE__ */ state(!1);
	get contentMounted() {
		return get$3(this.#i);
	}
	set contentMounted(t) {
		set(this.#i, t, !0);
	}
	contentPresence;
	#a = /* @__PURE__ */ state(null);
	get triggerNode() {
		return get$3(this.#a);
	}
	set triggerNode(t) {
		set(this.#a, t, !0);
	}
	isOpening = !1;
	domContext = new DOMContext$1(() => null);
	constructor(t) {
		this.opts = t, this.contentPresence = new PresenceManager({
			ref: boxWith$1(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		}), watch$2(() => this.opts.open.current, (t) => {
			if (!t) {
				this.hasSelection = !1;
				return;
			}
			if (!this.domContext) return;
			let r = on(this.domContext.getDocument(), "pointerup", () => {
				this.containsSelection = !1, this.isPointerDownOnContent = !1, afterSleep(1, () => {
					this.domContext.getDocument().getSelection()?.toString() === "" ? this.hasSelection = !1 : this.hasSelection = !0;
				});
			});
			if (!this.contentNode) return;
			let i = getTabbableCandidates(this.contentNode);
			for (let t of i) t.setAttribute("tabindex", "-1");
			return () => {
				r(), this.hasSelection = !1, this.isPointerDownOnContent = !1;
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
}, LinkPreviewTriggerState = class t {
	static create(r) {
		return new t(r, LinkPreviewRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(t, r) {
		this.opts = t, this.root = r, this.attachment = attachRef$1(this.opts.ref, (t) => this.root.triggerNode = t), this.root.domContext = new DOMContext$1(t.ref), this.onpointerenter = this.onpointerenter.bind(this), this.onpointerleave = this.onpointerleave.bind(this), this.onfocus = this.onfocus.bind(this), this.onblur = this.onblur.bind(this);
	}
	onpointerenter(t) {
		isTouch(t) || this.root.handleOpen();
	}
	onpointerleave(t) {
		isTouch(t) || (!this.root.contentMounted || !this.root.opts.open.current) && this.root.immediateClose();
	}
	onfocus(t) {
		isFocusVisible(t.currentTarget) && this.root.handleOpen();
	}
	onblur(t) {
		this.root.handleClose();
	}
	#e = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		"aria-haspopup": "dialog",
		"aria-expanded": boolToStr(this.root.opts.open.current),
		"data-state": getDataOpenClosed(this.root.opts.open.current),
		"aria-controls": this.root.contentNode?.id,
		role: "button",
		[linkPreviewAttrs.trigger]: "",
		onpointerenter: this.onpointerenter,
		onfocus: this.onfocus,
		onblur: this.onblur,
		onpointerleave: this.onpointerleave,
		...this.attachment
	}));
	get props() {
		return get$3(this.#e);
	}
	set props(t) {
		set(this.#e, t);
	}
}, LinkPreviewContentState = class t {
	static create(r) {
		return new t(r, LinkPreviewRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(t, r) {
		this.opts = t, this.root = r, this.attachment = attachRef$1(this.opts.ref, (t) => this.root.contentNode = t), this.root.domContext = new DOMContext$1(t.ref), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerenter = this.onpointerenter.bind(this), this.onfocusout = this.onfocusout.bind(this), new SafePolygon({
			triggerNode: () => this.root.triggerNode,
			contentNode: () => this.opts.ref.current,
			enabled: () => this.root.opts.open.current,
			onPointerExit: () => {
				this.root.handleClose();
			}
		}), onDestroyEffect(() => {
			this.root.clearTimeout();
		});
	}
	onpointerdown(t) {
		let r = t.target;
		isElement(r) && (t.currentTarget.contains(r) && (this.root.containsSelection = !0), this.root.hasSelection = !0, this.root.isPointerDownOnContent = !0);
	}
	onpointerenter(t) {
		isTouch(t) || this.root.handleOpen();
	}
	onfocusout(t) {
		t.preventDefault();
	}
	onInteractOutside = (t) => {
		this.opts.onInteractOutside.current(t), !t.defaultPrevented && this.root.handleClose();
	};
	onEscapeKeydown = (t) => {
		this.opts.onEscapeKeydown.current?.(t), !t.defaultPrevented && this.root.handleClose();
	};
	onOpenAutoFocus = (t) => {
		t.preventDefault();
	};
	onCloseAutoFocus = (t) => {
		t.preventDefault();
	};
	get shouldRender() {
		return this.root.contentPresence.shouldRender;
	}
	#e = /* @__PURE__ */ user_derived(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return get$3(this.#e);
	}
	set snippetProps(t) {
		set(this.#e, t);
	}
	#t = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		tabindex: -1,
		"data-state": getDataOpenClosed(this.root.opts.open.current),
		...getDataTransitionAttrs(this.root.contentPresence.transitionStatus),
		[linkPreviewAttrs.content]: "",
		onpointerdown: this.onpointerdown,
		onpointerenter: this.onpointerenter,
		onfocusout: this.onfocusout,
		...this.attachment
	}));
	get props() {
		return get$3(this.#t);
	}
	set props(t) {
		set(this.#t, t);
	}
	popperProps = {
		onInteractOutside: this.onInteractOutside,
		onEscapeKeydown: this.onEscapeKeydown,
		onOpenAutoFocus: this.onOpenAutoFocus,
		onCloseAutoFocus: this.onCloseAutoFocus
	};
};
function Link_preview(t, r) {
	push(r, !0);
	let i = prop(r, "disabled", 3, !1), a = prop(r, "open", 15, !1), o = prop(r, "onOpenChange", 3, noop$1), s = prop(r, "onOpenChangeComplete", 3, noop$1), c = prop(r, "openDelay", 3, 700), l = prop(r, "closeDelay", 3, 300);
	LinkPreviewRootState.create({
		disabled: boxWith$1(() => i()),
		open: boxWith$1(() => a(), (t) => {
			a(t), o()(t);
		}),
		openDelay: boxWith$1(() => c()),
		closeDelay: boxWith$1(() => l()),
		onOpenChangeComplete: boxWith$1(() => s())
	});
	var u = comment();
	component(first_child(u), () => Floating_layer, (t, i) => {
		i(t, {
			children: (t, i) => {
				var a = comment();
				snippet(first_child(a), () => r.children ?? noop$2), append(t, a);
			},
			$$slots: { default: !0 }
		});
	}), append(t, u), pop();
}
var root_4$4 = /* @__PURE__ */ from_html("<div><div><!></div></div>"), root_2$11 = /* @__PURE__ */ from_html("<!> <!>", 1), root_8 = /* @__PURE__ */ from_html("<div><div><!></div></div>"), root_6$1 = /* @__PURE__ */ from_html("<!> <!>", 1);
function Link_preview_content(t, r) {
	let i = props_id();
	push(r, !0);
	let a = prop(r, "id", 19, () => createId(i)), o = prop(r, "ref", 15, null), s = prop(r, "side", 3, "top"), c = prop(r, "sideOffset", 3, 0), l = prop(r, "align", 3, "center"), u = prop(r, "avoidCollisions", 3, !0), d = prop(r, "arrowPadding", 3, 0), f = prop(r, "sticky", 3, "partial"), p = prop(r, "hideWhenDetached", 3, !1), m = prop(r, "collisionPadding", 3, 0), h = prop(r, "onInteractOutside", 3, noop$1), g = prop(r, "onEscapeKeydown", 3, noop$1), v = prop(r, "forceMount", 3, !1), y = /* @__PURE__ */ rest_props(r, [
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
	]), b = LinkPreviewContentState.create({
		id: boxWith$1(() => a()),
		ref: boxWith$1(() => o(), (t) => o(t)),
		onInteractOutside: boxWith$1(() => h()),
		onEscapeKeydown: boxWith$1(() => g())
	}), x = /* @__PURE__ */ user_derived(() => ({
		side: s(),
		sideOffset: c(),
		align: l(),
		avoidCollisions: u(),
		arrowPadding: d(),
		sticky: f(),
		hideWhenDetached: p(),
		collisionPadding: m()
	})), S = /* @__PURE__ */ user_derived(() => mergeProps$1(y, get$3(x), b.props));
	var C = comment(), w = first_child(C), T = (t) => {
		Popper_layer_force_mount(t, spread_props(() => get$3(S), () => b.popperProps, {
			get ref() {
				return b.opts.ref;
			},
			get enabled() {
				return b.root.opts.open.current;
			},
			get id() {
				return a();
			},
			trapFocus: !1,
			loop: !1,
			preventScroll: !1,
			forceMount: !0,
			get shouldRender() {
				return b.shouldRender;
			},
			popper: (t, i) => {
				let a = () => i?.().props, o = () => i?.().wrapperProps, s = /* @__PURE__ */ user_derived(() => mergeProps$1(a(), { style: getFloatingContentCSSVars("link-preview") }, { style: r.style }));
				var c = root_2$11(), l = first_child(c), u = (t) => {
					var i = comment(), a = first_child(i);
					{
						let t = /* @__PURE__ */ user_derived(() => ({
							props: get$3(s),
							wrapperProps: o(),
							...b.snippetProps
						}));
						snippet(a, () => r.child, () => get$3(t));
					}
					append(t, i);
				}, d = (t) => {
					var i = root_4$4();
					attribute_effect(i, () => ({ ...o() }));
					var a = child(i);
					attribute_effect(a, () => ({ ...get$3(s) })), snippet(child(a), () => r.children ?? noop$2), reset(a), reset(i), append(t, i);
				};
				if_block(l, (t) => {
					r.child ? t(u) : t(d, -1);
				}), Mounted(sibling(l, 2), {
					get mounted() {
						return b.root.contentMounted;
					},
					set mounted(t) {
						b.root.contentMounted = t;
					}
				}), append(t, c);
			},
			$$slots: { popper: !0 }
		}));
	}, E = (t) => {
		Popper_layer(t, spread_props(() => get$3(S), () => b.popperProps, {
			get ref() {
				return b.opts.ref;
			},
			get open() {
				return b.root.opts.open.current;
			},
			get id() {
				return a();
			},
			trapFocus: !1,
			loop: !1,
			preventScroll: !1,
			forceMount: !1,
			get shouldRender() {
				return b.shouldRender;
			},
			popper: (t, i) => {
				let a = () => i?.().props, o = () => i?.().wrapperProps, s = /* @__PURE__ */ user_derived(() => mergeProps$1(a(), { style: getFloatingContentCSSVars("link-preview") }, { style: r.style }));
				var c = root_6$1(), l = first_child(c), u = (t) => {
					var i = comment(), a = first_child(i);
					{
						let t = /* @__PURE__ */ user_derived(() => ({
							props: get$3(s),
							wrapperProps: o(),
							...b.snippetProps
						}));
						snippet(a, () => r.child, () => get$3(t));
					}
					append(t, i);
				}, d = (t) => {
					var i = root_8();
					attribute_effect(i, () => ({ ...o() }));
					var a = child(i);
					attribute_effect(a, () => ({ ...get$3(s) })), snippet(child(a), () => r.children ?? noop$2), reset(a), reset(i), append(t, i);
				};
				if_block(l, (t) => {
					r.child ? t(u) : t(d, -1);
				}), Mounted(sibling(l, 2), {
					get mounted() {
						return b.root.contentMounted;
					},
					set mounted(t) {
						b.root.contentMounted = t;
					}
				}), append(t, c);
			},
			$$slots: { popper: !0 }
		}));
	};
	if_block(w, (t) => {
		v() ? t(T) : v() || t(E, 1);
	}), append(t, C), pop();
}
var root_3$3 = /* @__PURE__ */ from_html("<a><!></a>");
function Link_preview_trigger(t, r) {
	let i = props_id();
	push(r, !0);
	let a = prop(r, "ref", 15, null), o = prop(r, "id", 19, () => createId(i)), s = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"id",
		"child",
		"children"
	]), c = LinkPreviewTriggerState.create({
		id: boxWith$1(() => o()),
		ref: boxWith$1(() => a(), (t) => a(t))
	}), l = /* @__PURE__ */ user_derived(() => mergeProps$1(s, c.props));
	var u = comment();
	component(first_child(u), () => Floating_layer_anchor, (t, i) => {
		i(t, {
			get id() {
				return o();
			},
			get ref() {
				return c.opts.ref;
			},
			children: (t, i) => {
				var a = comment(), o = first_child(a), s = (t) => {
					var i = comment();
					snippet(first_child(i), () => r.child, () => ({ props: get$3(l) })), append(t, i);
				}, c = (t) => {
					var i = root_3$3();
					attribute_effect(i, () => ({ ...get$3(l) })), snippet(child(i), () => r.children ?? noop$2), reset(i), append(t, i);
				};
				if_block(o, (t) => {
					r.child ? t(s) : t(c, -1);
				}), append(t, a);
			},
			$$slots: { default: !0 }
		});
	}), append(t, u), pop();
}
function Avatar(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = prop(r, "loadingStatus", 15, "loading"), o = prop(r, "size", 3, "default"), s = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"loadingStatus",
		"size",
		"class"
	]);
	var c = comment(), l = first_child(c);
	{
		let t = /* @__PURE__ */ user_derived(() => cn("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten", r.class));
		component(l, () => Avatar$1, (r, c) => {
			c(r, spread_props({
				"data-slot": "avatar",
				get "data-size"() {
					return o();
				},
				get class() {
					return get$3(t);
				}
			}, () => s, {
				get ref() {
					return i();
				},
				set ref(t) {
					i(t);
				},
				get loadingStatus() {
					return a();
				},
				set loadingStatus(t) {
					a(t);
				}
			}));
		});
	}
	append(t, c), pop();
}
function Avatar_image(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var o = comment(), s = first_child(o);
	{
		let t = /* @__PURE__ */ user_derived(() => cn("rounded-full aspect-square size-full object-cover", r.class));
		component(s, () => Avatar_image$1, (r, o) => {
			o(r, spread_props({
				"data-slot": "avatar-image",
				get class() {
					return get$3(t);
				}
			}, () => a, {
				get ref() {
					return i();
				},
				set ref(t) {
					i(t);
				}
			}));
		});
	}
	append(t, o), pop();
}
function Avatar_fallback(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var o = comment(), s = first_child(o);
	{
		let t = /* @__PURE__ */ user_derived(() => cn("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", r.class));
		component(s, () => Avatar_fallback$1, (r, o) => {
			o(r, spread_props({
				"data-slot": "avatar-fallback",
				get class() {
					return get$3(t);
				}
			}, () => a, {
				get ref() {
					return i();
				},
				set ref(t) {
					i(t);
				}
			}));
		});
	}
	append(t, o), pop();
}
var root$25 = /* @__PURE__ */ from_html("<span><!></span>");
function Avatar_badge(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var o = root$25();
	attribute_effect(o, (t) => ({
		"data-slot": "avatar-badge",
		class: t,
		...a
	}), [() => cn("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", r.class)]), snippet(child(o), () => r.children ?? noop$2), reset(o), bind_this(o, (t) => i(t), () => i()), append(t, o), pop();
}
var root_1$5 = /* @__PURE__ */ from_html("<!> <!> <!>", 1);
function ChannelAvatar(t, r) {
	let i = prop(r, "fallbackText", 3, "Channel Logo");
	Avatar(t, {
		class: "rounded-lg",
		children: (t, a) => {
			var o = root_1$5(), s = first_child(o);
			Avatar_image(s, {
				get src() {
					return r.imgSrc;
				},
				get alt() {
					return i();
				}
			});
			var c = sibling(s, 2), l = (t) => {
				{
					let i = /* @__PURE__ */ user_derived(() => r.isConnected ? "bg-green-500" : "bg-red-500");
					Avatar_badge(t, { get class() {
						return get$3(i);
					} });
				}
			};
			if_block(c, (t) => {
				typeof r.isConnected == "boolean" && t(l);
			}), Avatar_fallback(sibling(c, 2), {
				children: (t, r) => {
					next();
					var a = text();
					template_effect(() => set_text(a, i())), append(t, a);
				},
				$$slots: { default: !0 }
			}), append(t, o);
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
function getSpecificMessage(t, r) {
	return store$1?.get(t)?.get(r);
}
/* @__NO_SIDE_EFFECTS__ */
function _stringify(t) {
	let r = typeof t;
	return r === "string" ? `"${t}"` : r === "number" || r === "bigint" || r === "boolean" ? `${t}` : r === "object" || r === "function" ? (t && Object.getPrototypeOf(t)?.constructor?.name) ?? "null" : r;
}
function _addIssue(t, r, i, a, o) {
	let s = o && "input" in o ? o.input : i.value, c = o?.expected ?? t.expects ?? null, l = o?.received ?? /* @__PURE__ */ _stringify(s), u = {
		kind: t.kind,
		type: t.type,
		input: s,
		expected: c,
		received: l,
		message: `Invalid ${r}: ${c ? `Expected ${c} but r` : "R"}eceived ${l}`,
		requirement: t.requirement,
		path: o?.path,
		issues: o?.issues,
		lang: a.lang,
		abortEarly: a.abortEarly,
		abortPipeEarly: a.abortPipeEarly
	}, d = t.kind === "schema", f = o?.message ?? t.message ?? /* @__PURE__ */ getSpecificMessage(t.reference, u.lang) ?? (d ? /* @__PURE__ */ getSchemaMessage(u.lang) : null) ?? a.message ?? /* @__PURE__ */ getGlobalMessage(u.lang);
	f !== void 0 && (u.message = typeof f == "function" ? f(u) : f), d && (i.typed = !1), i.issues ? i.issues.push(u) : i.issues = [u];
}
var _standardCache = /* @__PURE__ */ new WeakMap();
/* @__NO_SIDE_EFFECTS__ */
function _getStandardProps(t) {
	let r = _standardCache.get(t);
	return r || (r = {
		version: 1,
		vendor: "valibot",
		validate(r) {
			return t["~run"]({ value: r }, /* @__PURE__ */ getGlobalConfig());
		}
	}, _standardCache.set(t, r)), r;
}
/* @__NO_SIDE_EFFECTS__ */
function maxLength(t, r) {
	return {
		kind: "validation",
		type: "max_length",
		reference: maxLength,
		async: !1,
		expects: `<=${t}`,
		requirement: t,
		message: r,
		"~run"(t, r) {
			return t.typed && t.value.length > this.requirement && _addIssue(this, "length", t, r, { received: `${t.value.length}` }), t;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function minLength(t, r) {
	return {
		kind: "validation",
		type: "min_length",
		reference: minLength,
		async: !1,
		expects: `>=${t}`,
		requirement: t,
		message: r,
		"~run"(t, r) {
			return t.typed && t.value.length < this.requirement && _addIssue(this, "length", t, r, { received: `${t.value.length}` }), t;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function regex(t, r) {
	return {
		kind: "validation",
		type: "regex",
		reference: regex,
		async: !1,
		expects: `${t}`,
		requirement: t,
		message: r,
		"~run"(t, r) {
			return t.typed && !this.requirement.test(t.value) && _addIssue(this, "format", t, r), t;
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
		"~run"(t, r) {
			return typeof t.value == "string" ? t.typed = !0 : _addIssue(this, "type", t, r), t;
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
		"~run"(r, i) {
			for (let a of t) if (a.kind !== "metadata") {
				if (r.issues && (a.kind === "schema" || a.kind === "transformation")) {
					r.typed = !1;
					break;
				}
				(!r.issues || !i.abortEarly && !i.abortPipeEarly) && (r = a["~run"](r, i));
			}
			return r;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function safeParse(t, r, i) {
	let a = t["~run"]({ value: r }, /* @__PURE__ */ getGlobalConfig(i));
	return {
		typed: a.typed,
		success: !a.issues,
		output: a.value,
		issues: a.issues
	};
}
const fieldVariants = tv({
	base: "data-[invalid=true]:text-destructive gap-2 group/field flex w-full",
	variants: { orientation: {
		vertical: "cn-field-orientation-vertical flex-col [&>*]:w-full [&>.sr-only]:w-auto",
		horizontal: "cn-field-orientation-horizontal flex-row items-center has-[>[data-slot=field-content]]:items-start [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "cn-field-orientation-responsive flex-col @md/field-group:flex-row @md/field-group:items-center @md/field-group:has-[>[data-slot=field-content]]:items-start [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
});
var root$22 = /* @__PURE__ */ from_html("<div><!></div>");
function Field(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = prop(r, "orientation", 3, "vertical"), o = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"orientation",
		"children"
	]);
	var s = root$22();
	attribute_effect(s, (t) => ({
		role: "group",
		"data-slot": "field",
		"data-orientation": a(),
		class: t,
		...o
	}), [() => cn(fieldVariants({ orientation: a() }), r.class)]), snippet(child(s), () => r.children ?? noop$2), reset(s), bind_this(s, (t) => i(t), () => i()), append(t, s), pop();
}
var root$19 = /* @__PURE__ */ from_html("<div><!></div>");
function Field_group(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var o = root$19();
	attribute_effect(o, (t) => ({
		"data-slot": "field-group",
		class: t,
		...a
	}), [() => cn("gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col", r.class)]), snippet(child(o), () => r.children ?? noop$2), reset(o), bind_this(o, (t) => i(t), () => i()), append(t, o), pop();
}
function Label(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class"
	]);
	var o = comment(), s = first_child(o);
	{
		let t = /* @__PURE__ */ user_derived(() => cn("gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed", r.class));
		component(s, () => Label$1, (r, o) => {
			o(r, spread_props({
				"data-slot": "label",
				get class() {
					return get$3(t);
				}
			}, () => a, {
				get ref() {
					return i();
				},
				set ref(t) {
					i(t);
				}
			}));
		});
	}
	append(t, o), pop();
}
var root_1$2 = /* @__PURE__ */ from_html("<input/>"), root_2$10 = /* @__PURE__ */ from_html("<input/>");
function Input(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = prop(r, "value", 15), o = prop(r, "files", 15), s = prop(r, "data-slot", 3, "input"), c = /* @__PURE__ */ rest_props(r, [
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
	var l = comment(), u = first_child(l), d = (t) => {
		var l = root_1$2();
		attribute_effect(l, (t) => ({
			"data-slot": s(),
			class: t,
			type: "file",
			...c
		}), [() => cn("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", r.class)], void 0, void 0, void 0, !0), bind_this(l, (t) => i(t), () => i()), bind_files(l, o), bind_value(l, a), append(t, l);
	}, f = (t) => {
		var o = root_2$10();
		attribute_effect(o, (t) => ({
			"data-slot": s(),
			class: t,
			type: r.type,
			...c
		}), [() => cn("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", r.class)], void 0, void 0, void 0, !0), bind_this(o, (t) => i(t), () => i()), bind_value(o, a), append(t, o);
	};
	if_block(u, (t) => {
		r.type === "file" ? t(d) : t(f, -1);
	}), append(t, l), pop();
}
const httpGet = async (t) => fetch(t), httpPostUrlEncodedForm = async (t, r) => fetch(t, {
	method: "POST",
	redirect: "manual",
	credentials: "include",
	headers: { "Content-Type": "application/x-www-form-urlencoded" },
	body: r
});
var defaultAuthState = {
	status: !1,
	username: ""
}, createAuthStore = (t) => {
	let { subscribe: r, set: i, update: a } = writable({
		...defaultAuthState,
		...t
	});
	return {
		subscribe: r,
		set: i,
		init: (t) => i(t),
		updateStatus: (t) => a((r) => ({
			...r,
			status: t
		})),
		resetStatus: () => a((t) => ({
			...t,
			status: defaultAuthState.status
		})),
		updateUsername: (t) => a((r) => ({
			...r,
			username: t
		})),
		resetUsername: () => a((t) => ({
			...t,
			username: defaultAuthState.username
		}))
	};
}, submitSocketLogin = async (t) => new Promise((r, a) => {
	socketClient.once("login", (t) => {
		if (t.success) {
			r(t.name);
			return;
		}
		a(t.error);
	}), socketClient.emit("login", t);
}), listenSocketRank = async () => new Promise((t) => {
	socketClient.once("rank", t);
}), submitHTTPLogin = async (t) => {
	await httpPostUrlEncodedForm(new URL("/login", window.location.origin), new URLSearchParams(t));
	let r = await (await httpGet(new URL(window.location.href))).text(), i = new DOMParser().parseFromString(r, "text/html").querySelector("input[name=\"_csrf\"]");
	if (!i) {
		console.warn("login response missing csrf value");
		return;
	}
	let a = i.value;
	pageStore.updateCSRF(a);
}, submitHTTPLogout = async (t) => {
	await httpPostUrlEncodedForm(new URL("/logout", window.location.origin), new URLSearchParams(t));
};
const login = async (r, a) => {
	socketClient.disconnected && await submitSocketConnect();
	let o = submitSocketLogin({
		name: r,
		pw: a
	}), s = listenSocketRank(), c = await o, l = await s;
	if (clientStore.updateName(c), clientStore.updateLoggedIn(!0), clientStore.updateRank(l), !a) return;
	let { csrf: u } = get(pageStore);
	submitHTTPLogin({
		_csrf: u,
		name: r,
		password: a,
		remember: "on"
	});
}, logout = async () => {
	socketClient.connected && await submitSocketDisconnect();
	let { csrf: a } = get(pageStore);
	await submitHTTPLogout({ _csrf: a }), clientStore.resetName(), clientStore.resetLoggedIn(), clientStore.resetRank(), socketClient.disconnected && await submitSocketConnect();
}, authStore = createAuthStore();
var linear = (t) => t;
function cubic_in_out(t) {
	return t < .5 ? 4 * t * t * t : .5 * (2 * t - 2) ** 3 + 1;
}
function split_css_unit(t) {
	let r = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return r ? [parseFloat(r[1]), r[2] || "px"] : [t, "px"];
}
function blur(t, { delay: r = 0, duration: i = 400, easing: a = cubic_in_out, amount: o = 5, opacity: s = 0 } = {}) {
	let c = getComputedStyle(t), l = +c.opacity, u = c.filter === "none" ? "" : c.filter, d = l * (1 - s), [f, p] = split_css_unit(o);
	return {
		delay: r,
		duration: i,
		easing: a,
		css: (t, r) => `opacity: ${l - d * r}; filter: ${u} blur(${r * f}${p});`
	};
}
function fade(t, { delay: r = 0, duration: i = 400, easing: a = linear } = {}) {
	let o = +getComputedStyle(t).opacity;
	return {
		delay: r,
		duration: i,
		easing: a,
		css: (t) => `opacity: ${t * o}`
	};
}
var camelToKebab$1 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function createHugeiconSingleton(t, r) {
	let i = (t, i) => {
		let { color: a = "currentColor", size: o = 24, strokeWidth: s, absoluteStrokeWidth: c = !1, class: l = "", altIcon: u, showAlt: d = !1, ...f } = i, p = {
			xmlns: "http://www.w3.org/2000/svg",
			width: o,
			height: o,
			viewBox: "0 0 24 24",
			fill: "none",
			color: a,
			class: l,
			...f
		}, m = d && u ? u : r, h = s === void 0 ? void 0 : c ? 24 / Number(o) * s : s;
		Object.entries(p).forEach(([r, i]) => {
			t.setAttribute(camelToKebab$1(r), String(i));
		}), t.innerHTML = "", m.forEach(([r, i]) => {
			let a = document.createElementNS("http://www.w3.org/2000/svg", r), o = { ...i };
			h !== void 0 && (o["stroke-width"] = h, o.stroke = "currentColor"), Object.entries(o).forEach(([t, r]) => {
				a.setAttribute(camelToKebab$1(t), String(r));
			}), t.appendChild(a);
		});
	};
	return { render(t, r) {
		return i(t, r), {
			update(r) {
				i(t, r);
			},
			destroy() {
				t.innerHTML = "";
			}
		};
	} };
}
var root$14 = /* @__PURE__ */ from_svg("<svg></svg>");
function HugeiconsIcon(t, r) {
	push(r, !0);
	let i = prop(r, "size", 3, 24), a = prop(r, "absoluteStrokeWidth", 3, !1), o = prop(r, "color", 3, "currentColor"), s = prop(r, "showAlt", 3, !1), c = prop(r, "class", 3, ""), l = prop(r, "className", 3, ""), u = /* @__PURE__ */ rest_props(r, [
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
	]), d = /* @__PURE__ */ user_derived(() => c() || l()), f, p = /* @__PURE__ */ state(void 0), m = /* @__PURE__ */ state(void 0), h = /* @__PURE__ */ user_derived(() => ({
		size: i(),
		strokeWidth: r.strokeWidth,
		absoluteStrokeWidth: a(),
		color: o(),
		altIcon: r.altIcon,
		showAlt: s(),
		class: get$3(d)
	}));
	onMount(() => {
		if (f) return set(p, createHugeiconSingleton("HugeiconsIcon", r.icon), !0), set(m, get$3(p).render(f, get$3(h)), !0), () => {
			get$3(m)?.destroy();
		};
	}), user_effect(() => {
		get$3(p) && f && get$3(m) && get$3(m).update(get$3(h));
	});
	var g = root$14();
	attribute_effect(g, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		width: i(),
		height: i(),
		viewBox: "0 0 24 24",
		fill: "none",
		class: get$3(d),
		...u
	})), bind_this(g, (t) => f = t, () => f), append(t, g), pop();
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
], Kar = [["path", {
	d: "M11.9532 2.00004C17.5019 2.00004 22 6.47719 22 12C22 17.5229 17.5019 22 11.9532 22C-0.631103 22 -1.82658 4.01759 11.4985 5.00004C14.8499 5.24714 18.0289 8.41019 18.0289 12C18.0289 16.5 15.2348 18.5 11.4985 18.5C4.5 18.5 3.19042 8.46695 11.0021 9.00004C12.508 9.1028 14.0162 10.3432 14.0162 12C14.0162 13.9279 13 15 11.1211 15",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "1.5",
	key: "0"
}]], rZr = [
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
}]], root_1$1 = /* @__PURE__ */ from_html("<span><!></span>"), root_2$9 = /* @__PURE__ */ from_html("<span><!></span>"), root_3$2 = /* @__PURE__ */ from_html("<span><!></span>"), root_4$2 = /* @__PURE__ */ from_html("<span><!></span>"), root$13 = /* @__PURE__ */ from_html("<div><!></div>");
function AuthAvatar(t, r) {
	var i = root$13(), a = child(i), o = (t) => {
		var r = root_1$1();
		HugeiconsIcon(child(r), {
			get icon() {
				return SK;
			},
			class: "size-5 animate-spin",
			role: "status",
			"aria-label": "Loading"
		}), reset(r), transition(3, r, () => fade, () => ({ duration: 250 })), append(t, r);
	}, s = (t) => {
		var r = root_2$9();
		HugeiconsIcon(child(r), {
			get icon() {
				return ht;
			},
			class: "size-5"
		}), reset(r), transition(3, r, () => fade, () => ({ duration: 250 })), append(t, r);
	}, c = (t) => {
		var r = root_3$2();
		HugeiconsIcon(child(r), {
			get icon() {
				return TZr;
			},
			class: "size-5"
		}), reset(r), transition(3, r, () => fade, () => ({ duration: 250 })), append(t, r);
	}, l = (t) => {
		var r = root_4$2();
		HugeiconsIcon(child(r), {
			get icon() {
				return rZr;
			},
			class: "size-5"
		}), reset(r), transition(3, r, () => fade, () => ({ duration: 250 })), append(t, r);
	};
	if_block(a, (t) => {
		r.isLoading ? t(o) : r.isAnon ? t(s, 1) : r.isGuest ? t(c, 2) : t(l, -1);
	}), reset(i), append(t, i);
}
var usernameSchema = /* @__PURE__ */ pipe(/* @__PURE__ */ string(), /* @__PURE__ */ minLength(1, "Min 1 character"), /* @__PURE__ */ maxLength(20, "Max 20 characters"), /* @__PURE__ */ regex(/^[A-Za-zА-Яа-я0-9_-]+$/, "Only letters, numbers, -, or _")), passwordSchema = /* @__PURE__ */ pipe(/* @__PURE__ */ string(), /* @__PURE__ */ maxLength(100, "Max 100 characters")), root_2$8 = /* @__PURE__ */ from_html("<!> <!> <!> <!>", 1), root$12 = /* @__PURE__ */ from_html("<div class=\"w-full max-w-md ml-auto\"><form><!></form></div>");
function LoginForm(t, r) {
	push(r, !0);
	let i = () => store_get(authStore, "$authStore", a), [a, o] = setup_stores(), s = /* @__PURE__ */ user_derived(() => i().status), c = /* @__PURE__ */ user_derived(() => i().username), l = /* @__PURE__ */ user_derived(() => /* @__PURE__ */ safeParse(usernameSchema, get$3(c))), u = /* @__PURE__ */ user_derived(() => get$3(l).success), d = /* @__PURE__ */ user_derived(() => get$3(c) !== "" && !get$3(u)), f = /* @__PURE__ */ user_derived(() => get$3(l).success ? "" : get$3(l).issues.map((t) => t.message).join(", ")), p = /* @__PURE__ */ user_derived(() => i().password || ""), m = /* @__PURE__ */ user_derived(() => !get$3(u) || get$3(s)), h = /* @__PURE__ */ user_derived(() => /* @__PURE__ */ safeParse(passwordSchema, get$3(p))), g = /* @__PURE__ */ user_derived(() => get$3(h).success), _ = /* @__PURE__ */ user_derived(() => get$3(p) !== "" && !get$3(g)), v = /* @__PURE__ */ user_derived(() => get$3(h).success ? "" : get$3(h).issues.map((t) => t.message).join(", ")), y = /* @__PURE__ */ user_derived(() => get$3(s) || !get$3(u) || get$3(u) && !get$3(g)), b = async (t) => {
		if (t.preventDefault(), !get$3(y)) try {
			store_mutate(authStore, untrack(i).status = !0, untrack(i)), await new Promise((t) => setTimeout(t, 500)), await login(get$3(c), get$3(p));
		} catch (t) {
			console.error(t);
		} finally {
			store_mutate(authStore, untrack(i).status = !1, untrack(i)), store_mutate(authStore, untrack(i).username = "", untrack(i)), store_mutate(authStore, untrack(i).password = void 0, untrack(i));
		}
	};
	var x = root$12(), S = child(x);
	Field_group(child(S), {
		children: (t, r) => {
			Field(t, {
				orientation: "responsive",
				class: "flex flex-row items-center justify-end",
				children: (t, r) => {
					var a = root_2$8(), o = first_child(a);
					{
						let t = /* @__PURE__ */ user_derived(() => get$3(c) === "" && get$3(p) === ""), r = /* @__PURE__ */ user_derived(() => get$3(p) === "");
						AuthAvatar(o, {
							get isLoading() {
								return get$3(s);
							},
							get isAnon() {
								return get$3(t);
							},
							get isGuest() {
								return get$3(r);
							}
						});
					}
					var l = sibling(o, 2);
					{
						let t = /* @__PURE__ */ user_derived(() => get$3(d) ? get$3(f) : ""), r = /* @__PURE__ */ user_derived(() => cn({ "md:cursor-not-allowed": get$3(s) }));
						Input(l, {
							required: !0,
							type: "text",
							autocomplete: "name",
							placeholder: "Username",
							get "aria-invalid"() {
								return get$3(d);
							},
							get title() {
								return get$3(t);
							},
							get disabled() {
								return get$3(s);
							},
							get class() {
								return get$3(r);
							},
							get value() {
								return i().username;
							},
							set value(t) {
								store_mutate(authStore, untrack(i).username = t, untrack(i));
							}
						});
					}
					var u = sibling(l, 2);
					{
						let t = /* @__PURE__ */ user_derived(() => get$3(_) ? get$3(v) : ""), r = /* @__PURE__ */ user_derived(() => cn({ "md:cursor-not-allowed": get$3(m) }));
						Input(u, {
							name: "password",
							type: "password",
							autocomplete: "current-password",
							placeholder: "Password",
							get "aria-invalid"() {
								return get$3(_);
							},
							get title() {
								return get$3(t);
							},
							get disabled() {
								return get$3(m);
							},
							get class() {
								return get$3(r);
							},
							get value() {
								return i().password;
							},
							set value(t) {
								store_mutate(authStore, untrack(i).password = t, untrack(i));
							}
						});
					}
					var h = sibling(u, 2);
					{
						let t = /* @__PURE__ */ user_derived(() => cn({ "md:cursor-not-allowed": get$3(y) }));
						Button(h, {
							type: "submit",
							get disabled() {
								return get$3(y);
							},
							get class() {
								return get$3(t);
							},
							children: (t, r) => {
								next(), append(t, text("Login"));
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
	}), reset(S), reset(x), event("submit", S, b), append(t, x), pop(), o();
}
var root_2$7 = /* @__PURE__ */ from_html("<!> <!> <!>", 1), root$11 = /* @__PURE__ */ from_html("<div class=\"w-full max-w-md ml-auto\"><form><!></form></div>");
function LogoutForm(t, r) {
	push(r, !0);
	let i = () => store_get(authStore, "$authStore", o), a = () => store_get(clientStore, "$clientStore", o), [o, s] = setup_stores(), c = /* @__PURE__ */ user_derived(() => i().status), l = /* @__PURE__ */ user_derived(() => a().rank > 0), u = async (t) => {
		if (t.preventDefault(), !get$3(c)) try {
			store_mutate(authStore, untrack(i).status = !0, untrack(i)), await new Promise((t) => setTimeout(t, 500)), await logout();
		} catch (t) {
			console.error(t);
		} finally {
			store_mutate(authStore, untrack(i).status = !1, untrack(i)), store_mutate(authStore, untrack(i).username = "", untrack(i)), store_mutate(authStore, untrack(i).password = void 0, untrack(i));
		}
	};
	var d = root$11(), f = child(d);
	Field_group(child(f), {
		children: (t, r) => {
			Field(t, {
				orientation: "responsive",
				class: "flex flex-row items-center justify-end selection:bg-primary",
				children: (t, r) => {
					var i = root_2$7(), o = first_child(i);
					{
						let t = /* @__PURE__ */ user_derived(() => !get$3(l));
						AuthAvatar(o, {
							get isLoading() {
								return get$3(c);
							},
							isAnon: !1,
							get isGuest() {
								return get$3(t);
							}
						});
					}
					var s = sibling(o, 2);
					Label(s, {
						class: "flex-none w-auto",
						children: (t, r) => {
							next();
							var i = text();
							template_effect(() => set_text(i, a().name)), append(t, i);
						},
						$$slots: { default: !0 }
					});
					var u = sibling(s, 2);
					{
						let t = /* @__PURE__ */ user_derived(() => cn({ "md:cursor-not-allowed": get$3(c) }));
						Button(u, {
							type: "submit",
							get disabled() {
								return get$3(c);
							},
							get class() {
								return get$3(t);
							},
							children: (t, r) => {
								next(), append(t, text("Logout"));
							},
							$$slots: { default: !0 }
						});
					}
					append(t, i);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), reset(f), reset(d), event("submit", f, u), append(t, d), pop(), s();
}
function AuthForm(t, r) {
	var i = comment(), a = first_child(i), o = (t) => {
		LogoutForm(t, {});
	}, s = (t) => {
		LoginForm(t, {});
	};
	if_block(a, (t) => {
		r.isLoggedIn ? t(o) : t(s, -1);
	}), append(t, i);
}
var logoImgSrc = new URL("dist/logo.png", window.BASE_URL).toString(), root$10 = /* @__PURE__ */ from_html("<header class=\"sticky w-full flex flex-row items-center justify-start h-15 mx-auto top-0 z-50 bg-background md:bg-background/80 md:backdrop-blur-md\"><!> <div class=\"w-full flex flex-row items-center justify-between pr-6 py-5\"><!> <!></div></header>");
function Header(r, i) {
	push(i, !1);
	let a = () => store_get(appStore, "$appStore", c), o = () => store_get(socketStore, "$socketStore", c), s = () => store_get(clientStore, "$clientStore", c), [c, l] = setup_stores();
	init$1();
	var u = root$10(), d = child(u), f = (t) => {
		VersionBadge(t, { get version() {
			return a().version;
		} });
	};
	if_block(d, (t) => {
		a().version && t(f);
	});
	var p = sibling(d, 2), m = child(p);
	ChannelAvatar(m, {
		get imgSrc() {
			return logoImgSrc;
		},
		get isConnected() {
			return o().connected;
		}
	});
	var h = sibling(m, 2), g = (t) => {
		AuthForm(t, { get isLoggedIn() {
			return s().logged_in;
		} });
	}, _ = (r) => {
		Button(r, {
			get onclick() {
				return submitSocketConnect;
			},
			children: (t, r) => {
				next(), append(t, text("Reconnect"));
			},
			$$slots: { default: !0 }
		});
	};
	if_block(h, (t) => {
		o().connected ? t(g) : t(_, -1);
	}), reset(p), reset(u), append(r, u), pop(), l();
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
	let r = /* @__PURE__ */ state(proxy(t));
	return {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$3(r);
		},
		set current(t) {
			set(r, t, !0);
		}
	};
}
function boxWith(t, r) {
	let i = /* @__PURE__ */ user_derived(t);
	return r ? {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$3(i);
		},
		set current(t) {
			r(t);
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
	return Object.entries(t).reduce((t, [r, i]) => box.isBox(i) ? (box.isWritableBox(i) ? Object.defineProperty(t, r, {
		get() {
			return i.current;
		},
		set(t) {
			i.current = t;
		}
	}) : Object.defineProperty(t, r, { get() {
		return i.current;
	} }), t) : Object.assign(t, { [r]: i }), {});
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
	return function(r) {
		for (let i of t) if (i) {
			if (r.defaultPrevented) return;
			typeof i == "function" ? i.call(this, r) : i.current?.call(this, r);
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
	let r = [], i = "", a, o;
	for (let s of t) {
		let t = STR_SPLITTERS.includes(s);
		if (t === !0) {
			r.push(i), i = "", a = void 0;
			continue;
		}
		let c = isUppercase(s);
		if (o === !1) {
			if (a === !1 && c === !0) {
				r.push(i), i = s, a = c;
				continue;
			}
			if (a === !0 && c === !1 && i.length > 1) {
				let t = i.at(-1);
				r.push(i.slice(0, Math.max(0, i.length - 1))), i = t + s, a = c;
				continue;
			}
		}
		i += s, a = c, o = t;
	}
	return r.push(i), r;
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
	let r = {};
	function i(t, i) {
		if (t.startsWith("-moz-") || t.startsWith("-webkit-") || t.startsWith("-ms-") || t.startsWith("-o-")) {
			r[pascalCase(t)] = i;
			return;
		}
		if (t.startsWith("--")) {
			r[t] = i;
			return;
		}
		r[camelCase(t)] = i;
	}
	return StyleToObject(t, i), r;
}
function executeCallbacks(...t) {
	return (...r) => {
		for (let i of t) typeof i == "function" && i(...r);
	};
}
function addEventListener$1(t, r, i, a) {
	let o = Array.isArray(r) ? r : [r];
	return o.forEach((r) => t.addEventListener(r, i, a)), () => {
		o.forEach((r) => t.removeEventListener(r, i, a));
	};
}
function createParser(t, r) {
	let i = RegExp(t, "g");
	return (t) => {
		if (typeof t != "string") throw TypeError(`expected an argument of type string, but got ${typeof t}`);
		return t.match(i) ? t.replace(i, r) : t;
	};
}
var camelToKebab = createParser(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function styleToCSS(t) {
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError(`expected an argument of type object, but got ${typeof t}`);
	return Object.keys(t).map((r) => `${camelToKebab(r)}: ${t[r]};`).join("\n");
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
	let r = { ...t[0] };
	for (let i = 1; i < t.length; i++) {
		let a = t[i];
		if (a) {
			for (let t of Object.keys(a)) {
				let i = r[t], o = a[t], s = typeof i == "function", c = typeof o == "function";
				if (s && typeof c && isEventHandler(t)) r[t] = composeHandlers(i, o);
				else if (s && c) r[t] = executeCallbacks(i, o);
				else if (t === "class") {
					let a = isClassValue(i), s = isClassValue(o);
					a && s ? r[t] = clsx(i, o) : a ? r[t] = clsx(i) : s && (r[t] = clsx(o));
				} else if (t === "style") {
					let a = typeof i == "object", s = typeof o == "object", c = typeof i == "string", l = typeof o == "string";
					if (a && s) r[t] = {
						...i,
						...o
					};
					else if (a && l) {
						let a = cssToStyleObj(o);
						r[t] = {
							...i,
							...a
						};
					} else if (c && s) r[t] = {
						...cssToStyleObj(i),
						...o
					};
					else if (c && l) {
						let a = cssToStyleObj(i), s = cssToStyleObj(o);
						r[t] = {
							...a,
							...s
						};
					} else a ? r[t] = i : s ? r[t] = o : c ? r[t] = i : l && (r[t] = o);
				} else r[t] = o === void 0 ? i : o;
			}
			for (let t of Object.getOwnPropertySymbols(a)) {
				let i = r[t], o = a[t];
				r[t] = o === void 0 ? i : o;
			}
		}
	}
	return typeof r.style == "object" && (r.style = styleToString(r.style).replaceAll("\n", " ")), r.hidden !== !0 && (r.hidden = void 0, delete r.hidden), r.disabled !== !0 && (r.disabled = void 0, delete r.disabled), r;
}
const defaultWindow$1 = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function getActiveElement$2(t) {
	let r = t.activeElement;
	for (; r?.shadowRoot;) {
		let t = r.shadowRoot.activeElement;
		if (t === r) break;
		r = t;
	}
	return r;
}
new class {
	#e;
	#t;
	constructor(t = {}) {
		let { window: r = defaultWindow$1, document: i = r?.document } = t;
		r !== void 0 && (this.#e = i, this.#t = createSubscriber((t) => {
			let i = on(r, "focusin", t), a = on(r, "focusout", t);
			return () => {
				i(), a();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? getActiveElement$2(this.#e) : null;
	}
}();
function runEffect$1(t, r) {
	switch (t) {
		case "post":
			user_effect(r);
			break;
		case "pre":
			user_pre_effect(r);
			break;
	}
}
function runWatcher$1(t, r, i, a = {}) {
	let { lazy: o = !1 } = a, s = !o, c = Array.isArray(t) ? [] : void 0;
	runEffect$1(r, () => {
		let r = Array.isArray(t) ? t.map((t) => t()) : t();
		if (!s) {
			s = !0, c = r;
			return;
		}
		let a = untrack(() => i(r, c));
		return c = r, a;
	});
}
function runWatcherOnce$1(t, r, i) {
	let a = effect_root(() => {
		let o = !1;
		runWatcher$1(t, r, (t, r) => {
			if (o) {
				a();
				return;
			}
			let s = i(t, r);
			return o = !0, s;
		}, { lazy: !0 });
	});
	user_effect(() => a);
}
function watch$1(t, r, i) {
	runWatcher$1(t, "post", r, i);
}
function watchPre$1(t, r, i) {
	runWatcher$1(t, "pre", r, i);
}
watch$1.pre = watchPre$1;
function watchOnce$1(t, r) {
	runWatcherOnce$1(t, "post", r);
}
function watchOncePre$1(t, r) {
	runWatcherOnce$1(t, "pre", r);
}
watchOnce$1.pre = watchOncePre$1;
function debounce$1(t, r) {
	let i, a = null;
	return (...o) => new Promise((s) => {
		a && a(void 0), a = s, clearTimeout(i), i = setTimeout(async () => {
			let r = await t(...o);
			a &&= (a(r), null);
		}, r);
	});
}
function throttle(t, r) {
	let i = 0, a = null;
	return (...o) => {
		let s = Date.now();
		return i && s - i < r ? a ?? Promise.resolve(void 0) : (i = s, a = t(...o), a);
	};
}
function runResource(t, r, i = {}, a) {
	let { lazy: o = !1, once: s = !1, initialValue: c, debounce: l, throttle: u } = i, d = /* @__PURE__ */ state(proxy(c)), f = /* @__PURE__ */ state(!1), p = /* @__PURE__ */ state(void 0), m = /* @__PURE__ */ state(proxy([])), h = () => {
		get$3(m).forEach((t) => t()), set(m, [], !0);
	}, g = (t) => {
		set(m, [...get$3(m), t], !0);
	}, _ = async (t, i, a = !1) => {
		try {
			set(f, !0), set(p, void 0), h();
			let o = new AbortController();
			g(() => o.abort());
			let s = await r(t, i, {
				data: get$3(d),
				refetching: a,
				onCleanup: g,
				signal: o.signal
			});
			return set(d, s, !0), s;
		} catch (t) {
			t instanceof DOMException && t.name === "AbortError" || set(p, t, !0);
			return;
		} finally {
			set(f, !1);
		}
	}, v = l ? debounce$1(_, l) : u ? throttle(_, u) : _, y = Array.isArray(t) ? t : [t], b;
	return a((r, i) => {
		s && b || (b = r, v(Array.isArray(t) ? r : r[0], Array.isArray(t) ? i : i?.[0]));
	}, { lazy: o }), {
		get current() {
			return get$3(d);
		},
		get loading() {
			return get$3(f);
		},
		get error() {
			return get$3(p);
		},
		mutate: (t) => {
			set(d, t, !0);
		},
		refetch: (r) => {
			let i = y.map((t) => t());
			return v(Array.isArray(t) ? i : i[0], Array.isArray(t) ? i : i[0], r ?? !0);
		}
	};
}
function resource(t, r, i) {
	return runResource(t, r, i, (r, i) => {
		let a = Array.isArray(t) ? t : [t];
		watch$1(() => a.map((t) => t()), (t, i) => {
			r(t, i ?? []);
		}, i);
	});
}
function resourcePre(t, r, i) {
	return runResource(t, r, i, (r, i) => {
		let a = Array.isArray(t) ? t : [t];
		watch$1.pre(() => a.map((t) => t()), (t, i) => {
			r(t, i ?? []);
		}, i);
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
	let r = t.activeElement;
	for (; r?.shadowRoot;) {
		let t = r.shadowRoot.activeElement;
		if (t === r) break;
		r = t;
	}
	return r;
}
var DOMContext = class {
	element;
	#e = /* @__PURE__ */ user_derived(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return get$3(this.#e);
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
	setTimeout = (t, r) => this.getWindow().setTimeout(t, r);
	clearTimeout = (t) => this.getWindow().clearTimeout(t);
};
function attachRef(t, r) {
	return { [createAttachmentKey()]: (i) => box.isBox(t) ? (t.current = i, untrack(() => r?.(i)), () => {
		"isConnected" in i && i.isConnected || (t.current = null, r?.(null));
	}) : (t(i), untrack(() => r?.(i)), () => {
		"isConnected" in i && i.isConnected || (t(null), r?.(null));
	}) };
}
function calculateAriaValues({ layout: t, panesArray: r, pivotIndices: i }) {
	let a = 0, o = 100, s = 0, c = 0, l = i[0];
	for (let t = 0; t < r.length; t++) {
		let { maxSize: i = 100, minSize: u = 0 } = r[t].constraints;
		t === l ? (a = u, o = i) : (s += u, c += i);
	}
	return {
		valueMax: Math.min(o, 100 - s),
		valueMin: Math.max(a, 100 - c),
		valueNow: t[l]
	};
}
function assert(t, r = "Assertion failed!") {
	if (!t) throw console.error(r), Error(r);
}
function areNumbersAlmostEqual(t, r, i = 10) {
	return compareNumbersWithTolerance(t, r, i) === 0;
}
function compareNumbersWithTolerance(t, r, i = 10) {
	let a = roundTo(t, i), o = roundTo(r, i);
	return Math.sign(a - o);
}
function areArraysEqual(t, r) {
	if (t.length !== r.length) return !1;
	for (let i = 0; i < t.length; i++) if (t[i] !== r[i]) return !1;
	return !0;
}
function roundTo(t, r) {
	return Number.parseFloat(t.toFixed(r));
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
function resizePane({ paneConstraints: t, paneIndex: r, initialSize: i }) {
	let a = t[r];
	assert(a != null, "Pane constraints should not be null.");
	let { collapsedSize: o = 0, collapsible: s, maxSize: c = 100, minSize: l = 0 } = a, u = i;
	return compareNumbersWithTolerance(u, l) < 0 && (u = getAdjustedSizeForCollapsible(u, s, o, l)), u = Math.min(c, u), Number.parseFloat(u.toFixed(10));
}
function getAdjustedSizeForCollapsible(t, r, i, a) {
	return r && compareNumbersWithTolerance(t, (i + a) / 2) < 0 ? i : a;
}
function noop() {}
function updateResizeHandleAriaValues({ groupId: t, layout: r, panesArray: i, domContext: a }) {
	let o = getResizeHandleElementsForGroup(t, a);
	for (let t = 0; t < i.length - 1; t++) {
		let { valueMax: a, valueMin: s, valueNow: c } = calculateAriaValues({
			layout: r,
			panesArray: i,
			pivotIndices: [t, t + 1]
		}), l = o[t];
		if (isHTMLElement(l)) {
			let r = i[t];
			l.setAttribute("aria-controls", r.opts.id.current), l.setAttribute("aria-valuemax", `${Math.round(a)}`), l.setAttribute("aria-valuemin", `${Math.round(s)}`), l.setAttribute("aria-valuenow", c == null ? "" : `${Math.round(c)}`);
		}
	}
	return () => {
		for (let t of o) t.removeAttribute("aria-controls"), t.removeAttribute("aria-valuemax"), t.removeAttribute("aria-valuemin"), t.removeAttribute("aria-valuenow");
	};
}
function getResizeHandleElementsForGroup(t, r) {
	return isBrowser ? Array.from(r.querySelectorAll(`[data-pane-resizer-id][data-pane-group-id="${t}"]`)) : [];
}
function getResizeHandleElementIndex({ groupId: t, id: r, domContext: i }) {
	return isBrowser ? getResizeHandleElementsForGroup(t, i).findIndex((t) => t.getAttribute("data-pane-resizer-id") === r) ?? null : null;
}
function getPivotIndices({ groupId: t, dragHandleId: r, domContext: i }) {
	let a = getResizeHandleElementIndex({
		groupId: t,
		id: r,
		domContext: i
	});
	return a == null ? [-1, -1] : [a, a + 1];
}
function paneDataHelper(t, r, i) {
	let a = t.map((t) => t.constraints), o = findPaneDataIndex(t, r), s = a[o], c = o === t.length - 1 ? [o - 1, o] : [o, o + 1], l = i[o];
	return {
		...s,
		paneSize: l,
		pivotIndices: c
	};
}
function findPaneDataIndex(t, r) {
	return t.findIndex((t) => t.opts.id.current === r.opts.id.current);
}
function callPaneCallbacks(t, r, i) {
	for (let a = 0; a < r.length; a++) {
		let o = r[a], s = t[a];
		assert(s);
		let { collapsedSize: c = 0, collapsible: l } = s.constraints, u = i[s.opts.id.current];
		if (!(u == null || o !== u)) continue;
		i[s.opts.id.current] = o;
		let { onCollapse: d, onExpand: f, onResize: p } = s.callbacks;
		p?.(o, u), l && (d || f) && (f && (u == null || u === c) && o !== c && f(), d && (u == null || u !== c) && o === c && d());
	}
}
function getUnsafeDefaultLayout({ panesArray: t }) {
	let r = Array(t.length), i = t.map((t) => t.constraints), a = 0, o = 100;
	for (let s = 0; s < t.length; s++) {
		let t = i[s];
		assert(t);
		let { defaultSize: c } = t;
		c != null && (a++, r[s] = c, o -= c);
	}
	for (let s = 0; s < t.length; s++) {
		let c = i[s];
		assert(c);
		let { defaultSize: l } = c;
		if (l != null) continue;
		let u = t.length - a, d = o / u;
		a++, r[s] = d, o -= d;
	}
	return r;
}
function validatePaneGroupLayout({ layout: t, paneConstraints: r }) {
	let i = [...t], a = i.reduce((t, r) => t + r, 0);
	if (i.length !== r.length) throw Error(`Invalid ${r.length} pane layout: ${i.map((t) => `${t}%`).join(", ")}`);
	if (!areNumbersAlmostEqual(a, 100)) for (let t = 0; t < r.length; t++) {
		let r = i[t];
		assert(r != null), i[t] = 100 / a * r;
	}
	let o = 0;
	for (let t = 0; t < r.length; t++) {
		let a = i[t];
		assert(a != null);
		let s = resizePane({
			paneConstraints: r,
			paneIndex: t,
			initialSize: a
		});
		a !== s && (o += a - s, i[t] = s);
	}
	if (!areNumbersAlmostEqual(o, 0)) for (let t = 0; t < r.length; t++) {
		let a = i[t];
		assert(a != null);
		let s = a + o, c = resizePane({
			paneConstraints: r,
			paneIndex: t,
			initialSize: s
		});
		if (a !== c && (o -= c - a, i[t] = c, areNumbersAlmostEqual(o, 0))) break;
	}
	return i;
}
function getPaneGroupElement(t, r) {
	return isBrowser && r.querySelector(`[data-pane-group][data-pane-group-id="${t}"]`) || null;
}
function getResizeHandleElement(t, r) {
	return isBrowser && r.querySelector(`[data-pane-resizer-id="${t}"]`) || null;
}
function getDragOffsetPercentage({ event: t, dragHandleId: r, dir: i, initialDragState: a, domContext: o }) {
	let s = i === "horizontal", c = getResizeHandleElement(r, o);
	assert(c);
	let l = c.getAttribute("data-pane-group-id");
	assert(l);
	let { initialCursorPosition: u } = a, d = getResizeEventCursorPosition(i, t), f = getPaneGroupElement(l, o);
	assert(f);
	let p = f.getBoundingClientRect(), m = s ? p.width : p.height;
	return (d - u) / m * 100;
}
function getDeltaPercentage({ event: t, dragHandleId: r, dir: i, initialDragState: a, keyboardResizeBy: o, domContext: s }) {
	if (isKeyDown(t)) {
		let r = i === "horizontal", a = 0;
		a = t.shiftKey ? 100 : o ?? 10;
		let s = 0;
		switch (t.key) {
			case "ArrowDown":
				s = r ? 0 : a;
				break;
			case "ArrowLeft":
				s = r ? -a : 0;
				break;
			case "ArrowRight":
				s = r ? a : 0;
				break;
			case "ArrowUp":
				s = r ? 0 : -a;
				break;
			case "End":
				s = 100;
				break;
			case "Home":
				s = -100;
				break;
		}
		return s;
	} else return a == null ? 0 : getDragOffsetPercentage({
		event: t,
		dragHandleId: r,
		dir: i,
		initialDragState: a,
		domContext: s
	});
}
function getResizeEventCursorPosition(t, r) {
	let i = t === "horizontal";
	if (isMouseEvent(r)) return i ? r.clientX : r.clientY;
	if (isTouchEvent(r)) {
		let t = r.touches[0];
		return assert(t), i ? t.screenX : t.screenY;
	} else throw Error(`Unsupported event type "${r.type}"`);
}
function getResizeHandlePaneIds({ groupId: t, handleId: r, panesArray: i, domContext: a }) {
	let o = getResizeHandleElement(r, a), s = getResizeHandleElementsForGroup(t, a), c = o ? s.indexOf(o) : -1;
	return [i[c]?.opts.id.current ?? null, i[c + 1]?.opts.id.current ?? null];
}
const defaultWindow = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function getActiveElement(t) {
	let r = t.activeElement;
	for (; r?.shadowRoot;) {
		let t = r.shadowRoot.activeElement;
		if (t === r) break;
		r = t;
	}
	return r;
}
new class {
	#e;
	#t;
	constructor(t = {}) {
		let { window: r = defaultWindow, document: i = r?.document } = t;
		r !== void 0 && (this.#e = i, this.#t = createSubscriber((t) => {
			let i = on(r, "focusin", t), a = on(r, "focusout", t);
			return () => {
				i(), a();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? getActiveElement(this.#e) : null;
	}
}();
function runEffect(t, r) {
	switch (t) {
		case "post":
			user_effect(r);
			break;
		case "pre":
			user_pre_effect(r);
			break;
	}
}
function runWatcher(t, r, i, a = {}) {
	let { lazy: o = !1 } = a, s = !o, c = Array.isArray(t) ? [] : void 0;
	runEffect(r, () => {
		let r = Array.isArray(t) ? t.map((t) => t()) : t();
		if (!s) {
			s = !0, c = r;
			return;
		}
		let a = untrack(() => i(r, c));
		return c = r, a;
	});
}
function runWatcherOnce(t, r, i) {
	let a = effect_root(() => {
		let o = !1;
		runWatcher(t, r, (t, r) => {
			if (o) {
				a();
				return;
			}
			let s = i(t, r);
			return o = !0, s;
		}, { lazy: !0 });
	});
	user_effect(() => a);
}
function watch(t, r, i) {
	runWatcher(t, "post", r, i);
}
function watchPre(t, r, i) {
	runWatcher(t, "pre", r, i);
}
watch.pre = watchPre;
function watchOnce(t, r) {
	runWatcherOnce(t, "post", r);
}
function watchOncePre(t, r) {
	runWatcherOnce(t, "pre", r);
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
		let r = getContext(this.#t);
		return r === void 0 ? t : r;
	}
	set(t) {
		return setContext(this.#t, t);
	}
};
function adjustLayoutByDelta({ delta: t, layout: r, paneConstraints: i, pivotIndices: a, trigger: o }) {
	if (areNumbersAlmostEqual(t, 0)) return r;
	let s = [...r], [c, l] = a, u = 0;
	if (o === "keyboard") {
		{
			let a = t < 0 ? l : c, o = i[a];
			if (assert(o), o.collapsible) {
				let o = r[a];
				assert(o != null);
				let s = i[a];
				assert(s);
				let { collapsedSize: c = 0, minSize: l = 0 } = s;
				if (areNumbersAlmostEqual(o, c)) {
					let r = l - o;
					compareNumbersWithTolerance(r, Math.abs(t)) > 0 && (t = t < 0 ? 0 - r : r);
				}
			}
		}
		{
			let a = t < 0 ? c : l, o = i[a];
			assert(o);
			let { collapsible: s } = o;
			if (s) {
				let o = r[a];
				assert(o != null);
				let s = i[a];
				assert(s);
				let { collapsedSize: c = 0, minSize: l = 0 } = s;
				if (areNumbersAlmostEqual(o, l)) {
					let r = o - c;
					compareNumbersWithTolerance(r, Math.abs(t)) > 0 && (t = t < 0 ? 0 - r : r);
				}
			}
		}
	}
	{
		let a = t < 0 ? 1 : -1, o = t < 0 ? l : c, s = 0;
		for (;;) {
			let t = r[o];
			assert(t != null);
			let c = resizePane({
				paneConstraints: i,
				paneIndex: o,
				initialSize: 100
			}) - t;
			if (s += c, o += a, o < 0 || o >= i.length) break;
		}
		let u = Math.min(Math.abs(t), Math.abs(s));
		t = t < 0 ? 0 - u : u;
	}
	{
		let a = t < 0 ? c : l;
		for (; a >= 0 && a < i.length;) {
			let o = Math.abs(t) - Math.abs(u), c = r[a];
			assert(c != null);
			let l = c - o, d = resizePane({
				paneConstraints: i,
				paneIndex: a,
				initialSize: l
			});
			if (!areNumbersAlmostEqual(c, d) && (u += c - d, s[a] = d, u.toPrecision(3).localeCompare(Math.abs(t).toPrecision(3), void 0, { numeric: !0 }) >= 0)) break;
			t < 0 ? a-- : a++;
		}
	}
	if (areNumbersAlmostEqual(u, 0)) return r;
	{
		let a = t < 0 ? l : c, o = r[a];
		assert(o != null);
		let d = o + u, f = resizePane({
			paneConstraints: i,
			paneIndex: a,
			initialSize: d
		});
		if (s[a] = f, !areNumbersAlmostEqual(f, d)) {
			let r = d - f, a = t < 0 ? l : c;
			for (; a >= 0 && a < i.length;) {
				let o = s[a];
				assert(o != null);
				let c = o + r, l = resizePane({
					paneConstraints: i,
					paneIndex: a,
					initialSize: c
				});
				if (areNumbersAlmostEqual(o, l) || (r -= l - o, s[a] = l), areNumbersAlmostEqual(r, 0)) break;
				t > 0 ? a-- : a++;
			}
		}
	}
	return areNumbersAlmostEqual(s.reduce((t, r) => r + t, 0), 100) ? s : r;
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
function setGlobalCursorStyle(t, r) {
	if (currentState === t) return;
	currentState = t;
	let i = getCursorStyle(t);
	element === null && (element = r.createElement("style"), r.head.appendChild(element)), element.innerHTML = `*{cursor: ${i}!important;}`;
}
function computePaneFlexBoxStyle({ defaultSize: t, dragState: r, layout: i, panesArray: a, paneIndex: o, precision: s = 3 }) {
	let c = i[o], l;
	return l = c == null ? t ?? "1" : a.length === 1 ? "1" : c.toPrecision(s), {
		flexBasis: 0,
		flexGrow: l,
		flexShrink: 1,
		overflow: "hidden",
		pointerEvents: r === null ? void 0 : "none"
	};
}
function initializeStorage(t) {
	try {
		if (typeof localStorage > "u") throw TypeError("localStorage is not supported in this environment");
		t.getItem = (t) => localStorage.getItem(t), t.setItem = (t, r) => localStorage.setItem(t, r);
	} catch (r) {
		console.error(r), t.getItem = () => null, t.setItem = () => {};
	}
}
function getPaneGroupKey(t) {
	return `paneforge:${t}`;
}
function getPaneKey(t) {
	return t.map((t) => t.opts.order.current ? `${t.opts.order.current}:${JSON.stringify(t.constraints)}` : JSON.stringify(t.constraints)).sort().join(",");
}
function loadSerializedPaneGroupState(t, r) {
	try {
		let i = getPaneGroupKey(t), a = r.getItem(i), o = JSON.parse(a || "");
		if (typeof o == "object" && o) return o;
	} catch {}
	return null;
}
function loadPaneGroupState(t, r, i) {
	return (loadSerializedPaneGroupState(t, i) || {})[getPaneKey(r)] || null;
}
function savePaneGroupState(t, r, i, a, o) {
	let s = getPaneGroupKey(t), c = getPaneKey(r), l = loadSerializedPaneGroupState(t, o) || {};
	l[c] = {
		expandToSizes: Object.fromEntries(i.entries()),
		layout: a
	};
	try {
		o.setItem(s, JSON.stringify(l));
	} catch (t) {
		console.error(t);
	}
}
var debounceMap = {};
function debounce(t, r = 10) {
	let i = null;
	return (...a) => {
		i !== null && clearTimeout(i), i = setTimeout(() => {
			t(...a);
		}, r);
	};
}
function updateStorageValues({ autoSaveId: t, layout: r, storage: i, panesArray: a, paneSizeBeforeCollapse: o }) {
	if (r.length === 0 || r.length !== a.length) return;
	let s = debounceMap[t];
	s ?? (s = debounce(savePaneGroupState, 100), debounceMap[t] = s);
	let c = [...a];
	s(t, c, new Map(o), r, i);
}
const defaultStorage = {
	getItem: (t) => (initializeStorage(defaultStorage), defaultStorage.getItem(t)),
	setItem: (t, r) => {
		initializeStorage(defaultStorage), defaultStorage.setItem(t, r);
	}
};
var PaneGroupContext = new Context("PaneGroup"), PaneGroupState = class t {
	static create(r) {
		return PaneGroupContext.set(new t(r));
	}
	opts;
	attachment;
	domContext;
	#e = /* @__PURE__ */ state(null);
	get dragState() {
		return get$3(this.#e);
	}
	set dragState(t) {
		set(this.#e, t);
	}
	#t = /* @__PURE__ */ state([]);
	get layout() {
		return get$3(this.#t);
	}
	set layout(t) {
		set(this.#t, t);
	}
	#n = /* @__PURE__ */ state([]);
	get panesArray() {
		return get$3(this.#n);
	}
	set panesArray(t) {
		set(this.#n, t);
	}
	#r = /* @__PURE__ */ state(!1);
	get panesArrayChanged() {
		return get$3(this.#r);
	}
	set panesArrayChanged(t) {
		set(this.#r, t, !0);
	}
	#i = /* @__PURE__ */ state(proxy({}));
	get paneIdToLastNotifiedSizeMap() {
		return get$3(this.#i);
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
			let t = this.layout, r = null;
			if (this.opts.autoSaveId.current) {
				let t = loadPaneGroupState(this.opts.autoSaveId.current, this.panesArray, this.opts.storage.current);
				t && (this.paneSizeBeforeCollapseMap = new Map(Object.entries(t.expandToSizes)), r = t.layout);
			}
			r ??= getUnsafeDefaultLayout({ panesArray: this.panesArray });
			let i = validatePaneGroupLayout({
				layout: r,
				paneConstraints: this.panesArray.map((t) => t.constraints)
			});
			areArraysEqual(t, i) || (this.layout = i, this.opts.onLayout.current?.(i), callPaneCallbacks(this.panesArray, i, this.paneIdToLastNotifiedSizeMap));
		});
	}
	setLayout = (t) => {
		this.layout = t;
	};
	registerResizeHandle = (t) => (r) => {
		r.preventDefault();
		let i = this.opts.direction.current, a = this.dragState, o = this.opts.id.current, s = this.opts.keyboardResizeBy.current, c = this.layout, l = this.panesArray, { initialLayout: u } = a ?? {}, d = this.domContext.getDocument(), f = getPivotIndices({
			groupId: o,
			dragHandleId: t,
			domContext: this.domContext
		}), p = getDeltaPercentage({
			event: r,
			dragHandleId: t,
			dir: i,
			initialDragState: a,
			keyboardResizeBy: s,
			domContext: this.domContext
		});
		if (p === 0) return;
		let m = i === "horizontal";
		d.dir === "rtl" && m && (p = -p);
		let h = l.map((t) => t.constraints), g = adjustLayoutByDelta({
			delta: p,
			layout: u ?? c,
			paneConstraints: h,
			pivotIndices: f,
			trigger: isKeyDown(r) ? "keyboard" : "mouse-or-touch"
		}), _ = !areArraysEqual(c, g);
		(isMouseEvent(r) || isTouchEvent(r)) && this.prevDelta !== p && (this.prevDelta = p, setGlobalCursorStyle(_ ? m ? "horizontal" : "vertical" : m ? p < 0 ? "horizontal-min" : "horizontal-max" : p < 0 ? "vertical-min" : "vertical-max", d)), _ && (this.setLayout(g), this.opts.onLayout.current?.(g), callPaneCallbacks(l, g, this.paneIdToLastNotifiedSizeMap));
	};
	resizePane = (t, r) => {
		let i = this.layout, a = this.panesArray, o = a.map((t) => t.constraints), { paneSize: s, pivotIndices: c } = paneDataHelper(a, t, i);
		assert(s != null);
		let l = adjustLayoutByDelta({
			delta: findPaneDataIndex(a, t) === a.length - 1 ? s - r : r - s,
			layout: i,
			paneConstraints: o,
			pivotIndices: c,
			trigger: "imperative-api"
		});
		areArraysEqual(i, l) || (this.setLayout(l), this.opts.onLayout.current?.(l), callPaneCallbacks(a, l, this.paneIdToLastNotifiedSizeMap));
	};
	startDragging = (t, r) => {
		let i = this.opts.direction.current, a = this.layout, o = getResizeHandleElement(t, this.domContext);
		assert(o);
		let s = getResizeEventCursorPosition(i, r);
		this.dragState = {
			dragHandleId: t,
			dragHandleRect: o.getBoundingClientRect(),
			initialCursorPosition: s,
			initialLayout: a
		};
	};
	stopDragging = () => {
		resetGlobalCursorStyle(), this.dragState = null;
	};
	isPaneCollapsed = (t) => {
		let r = this.panesArray, i = this.layout, { collapsedSize: a = 0, collapsible: o, paneSize: s } = paneDataHelper(r, t, i);
		return typeof s != "number" || typeof a != "number" ? !1 : o === !0 && areNumbersAlmostEqual(s, a);
	};
	expandPane = (t) => {
		let r = this.layout, i = this.panesArray;
		if (!t.constraints.collapsible) return;
		let a = i.map((t) => t.constraints), { collapsedSize: o = 0, paneSize: s, minSize: c = 0, pivotIndices: l } = paneDataHelper(i, t, r);
		if (s !== o) return;
		let u = this.paneSizeBeforeCollapseMap.get(t.opts.id.current), d = u != null && u >= c ? u : c, f = adjustLayoutByDelta({
			delta: findPaneDataIndex(i, t) === i.length - 1 ? s - d : d - s,
			layout: r,
			paneConstraints: a,
			pivotIndices: l,
			trigger: "imperative-api"
		});
		areArraysEqual(r, f) || (this.setLayout(f), this.opts.onLayout.current?.(f), callPaneCallbacks(i, f, this.paneIdToLastNotifiedSizeMap));
	};
	collapsePane = (t) => {
		let r = this.layout, i = this.panesArray;
		if (!t.constraints.collapsible) return;
		let a = i.map((t) => t.constraints), { collapsedSize: o = 0, paneSize: s, pivotIndices: c } = paneDataHelper(i, t, r);
		if (assert(s != null), s === o) return;
		this.paneSizeBeforeCollapseMap.set(t.opts.id.current, s);
		let l = adjustLayoutByDelta({
			delta: findPaneDataIndex(i, t) === i.length - 1 ? s - o : o - s,
			layout: r,
			paneConstraints: a,
			pivotIndices: c,
			trigger: "imperative-api"
		});
		areArraysEqual(r, l) || (this.layout = l, this.opts.onLayout.current?.(l), callPaneCallbacks(i, l, this.paneIdToLastNotifiedSizeMap));
	};
	getPaneSize = (t) => paneDataHelper(this.panesArray, t, this.layout).paneSize;
	getPaneStyle = (t, r) => {
		let i = this.panesArray, a = this.layout, o = this.dragState;
		return computePaneFlexBoxStyle({
			defaultSize: r,
			dragState: o,
			layout: a,
			panesArray: i,
			paneIndex: findPaneDataIndex(i, t)
		});
	};
	isPaneExpanded = (t) => {
		let { collapsedSize: r = 0, collapsible: i, paneSize: a } = paneDataHelper(this.panesArray, t, this.layout);
		return !i || a > r;
	};
	registerPane = (t) => {
		let r = [...this.panesArray, t];
		return r.sort((t, r) => {
			let i = t.opts.order.current, a = r.opts.order.current;
			return i == null && a == null ? 0 : i == null ? -1 : a == null ? 1 : i - a;
		}), this.panesArray = r, this.panesArrayChanged = !0, () => {
			let r = [...this.panesArray], i = findPaneDataIndex(this.panesArray, t);
			i < 0 || (r.splice(i, 1), this.panesArray = r, delete this.paneIdToLastNotifiedSizeMap[t.opts.id.current], this.panesArrayChanged = !0);
		};
	};
	#a = () => {
		let t = this.opts.id.current, r = getResizeHandleElementsForGroup(t, this.domContext), i = this.panesArray, a = r.map((r) => {
			let a = r.getAttribute("data-pane-resizer-id");
			if (!a) return noop;
			let [o, s] = getResizeHandlePaneIds({
				groupId: t,
				handleId: a,
				panesArray: i,
				domContext: this.domContext
			});
			if (o == null || s == null) return noop;
			let c = addEventListener$1(r, "keydown", (r) => {
				if (r.defaultPrevented || r.key !== "Enter") return;
				r.preventDefault();
				let i = this.panesArray, s = i.findIndex((t) => t.opts.id.current === o);
				if (s < 0) return;
				let c = i[s];
				assert(c);
				let l = this.layout, u = l[s], { collapsedSize: d = 0, collapsible: f, minSize: p = 0 } = c.constraints;
				if (!(u != null && f)) return;
				let m = adjustLayoutByDelta({
					delta: areNumbersAlmostEqual(u, d) ? p - u : d - u,
					layout: l,
					paneConstraints: i.map((t) => t.constraints),
					pivotIndices: getPivotIndices({
						groupId: t,
						dragHandleId: a,
						domContext: this.domContext
					}),
					trigger: "keyboard"
				});
				l !== m && (this.layout = m);
			});
			return () => {
				c();
			};
		});
		return () => {
			for (let t of a) t();
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
		return get$3(this.#o);
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
	static create(r) {
		return new t(r, PaneGroupContext.get());
	}
	opts;
	#e;
	attachment;
	domContext;
	#t = /* @__PURE__ */ user_derived(() => this.#e.dragState?.dragHandleId === this.opts.id.current);
	#n = /* @__PURE__ */ state(!1);
	resizeHandler = null;
	constructor(t, r) {
		this.opts = t, this.#e = r, this.attachment = attachRef(this.opts.ref), this.domContext = new DOMContext(this.opts.ref), user_effect(() => {
			this.opts.disabled.current ? this.resizeHandler = null : this.resizeHandler = this.#e.registerResizeHandle(this.opts.id.current);
		}), user_effect(() => {
			let t = this.opts.ref.current;
			if (!t) return;
			let r = this.opts.disabled.current, i = this.resizeHandler, a = get$3(this.#t);
			if (r || i === null || !a) return;
			let o = (t) => {
				i(t);
			}, s = (t) => {
				i(t);
			}, c = () => {
				t.blur(), this.#e.stopDragging(), this.opts.onDraggingChange.current(!1);
			}, l = this.domContext.getDocument().body, u = this.domContext.getWindow();
			return executeCallbacks(on(l, "contextmenu", c), on(l, "mousemove", o), on(l, "touchmove", o, { passive: !1 }), on(l, "mouseleave", s), on(u, "mouseup", c), on(u, "touchend", c));
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
		let r = getResizeHandleElementsForGroup(this.#e.opts.id.current, this.domContext), i = getResizeHandleElementIndex({
			groupId: this.#e.opts.id.current,
			id: this.opts.id.current,
			domContext: this.domContext
		});
		if (i === null) return;
		let a = 0;
		a = t.shiftKey ? i > 0 ? i - 1 : r.length - 1 : i + 1 < r.length ? i + 1 : 0, r[a].focus();
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
		"data-active": get$3(this.#t) ? "pointer" : get$3(this.#n) ? "keyboard" : void 0,
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
		return get$3(this.#p);
	}
	set props(t) {
		set(this.#p, t);
	}
}, PaneState = class t {
	static create(r) {
		return new t(r, PaneGroupContext.get());
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
		return get$3(this.#t);
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
		return get$3(this.#n);
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
				let r = (i) => {
					i.propertyName === "flex-grow" && (set(this.#e, ""), t.removeEventListener("transitionend", r));
				};
				t.addEventListener("transitionend", r);
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
	constructor(t, r) {
		this.opts = t, this.group = r, this.attachment = attachRef(this.opts.ref), this.domContext = new DOMContext(this.opts.ref), onMount(() => this.group.registerPane(this)), watch(() => snapshot(this.constraints), () => {
			this.group.panesArrayChanged = !0;
		});
	}
	#i = /* @__PURE__ */ user_derived(() => this.group.isPaneCollapsed(this));
	#a = /* @__PURE__ */ user_derived(() => get$3(this.#e) === "" ? get$3(this.#i) ? "collapsed" : "expanded" : get$3(this.#e));
	#o = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		style: this.group.getPaneStyle(this, this.opts.defaultSize.current),
		"data-pane": "",
		"data-pane-id": this.opts.id.current,
		"data-pane-group-id": this.group.opts.id.current,
		"data-collapsed": get$3(this.#i) ? "" : void 0,
		"data-expanded": get$3(this.#i) ? void 0 : "",
		"data-pane-state": get$3(this.#a),
		...this.attachment
	}));
	get props() {
		return get$3(this.#o);
	}
	set props(t) {
		set(this.#o, t);
	}
}, root_2$6 = /* @__PURE__ */ from_html("<div><!></div>");
function Pane_group(t, r) {
	let i = props_id();
	push(r, !0);
	let a = prop(r, "autoSaveId", 3, null), o = prop(r, "id", 3, i), s = prop(r, "keyboardResizeBy", 3, null), c = prop(r, "onLayoutChange", 3, noop), l = prop(r, "storage", 3, defaultStorage), u = prop(r, "ref", 15, null), d = /* @__PURE__ */ rest_props(r, [
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
	]), f = PaneGroupState.create({
		id: box.with(() => o() ?? i),
		ref: box.with(() => u(), (t) => u(t)),
		autoSaveId: box.with(() => a()),
		direction: box.with(() => r.direction),
		keyboardResizeBy: box.with(() => s()),
		onLayout: box.with(() => c()),
		storage: box.with(() => l())
	}), p = () => f.layout, m = f.setLayout, h = () => f.opts.id.current, g = /* @__PURE__ */ user_derived(() => mergeProps(d, f.props));
	var v = {
		getLayout: p,
		setLayout: m,
		getId: h
	}, y = comment(), b = first_child(y), x = (t) => {
		var i = comment();
		snippet(first_child(i), () => r.child, () => ({ props: get$3(g) })), append(t, i);
	}, S = (t) => {
		var i = root_2$6();
		attribute_effect(i, () => ({ ...get$3(g) })), snippet(child(i), () => r.children ?? noop$2), reset(i), append(t, i);
	};
	return if_block(b, (t) => {
		r.child ? t(x) : t(S, -1);
	}), append(t, y), pop(v);
}
var root_2$5 = /* @__PURE__ */ from_html("<div><!></div>");
function Pane(t, r) {
	let i = props_id();
	push(r, !0);
	let a = prop(r, "id", 3, i), o = prop(r, "ref", 15, null), s = prop(r, "onCollapse", 3, noop), c = prop(r, "onExpand", 3, noop), l = prop(r, "onResize", 3, noop), u = /* @__PURE__ */ rest_props(r, [
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
	]), d = PaneState.create({
		id: box.with(() => a()),
		ref: box.with(() => o(), (t) => o(t)),
		collapsedSize: box.with(() => r.collapsedSize),
		collapsible: box.with(() => r.collapsible),
		defaultSize: box.with(() => r.defaultSize),
		maxSize: box.with(() => r.maxSize),
		minSize: box.with(() => r.minSize),
		onCollapse: box.with(() => s()),
		onExpand: box.with(() => c()),
		onResize: box.with(() => l()),
		order: box.with(() => r.order)
	}), f = d.pane.collapse, p = d.pane.expand, m = d.pane.getSize, h = d.pane.isCollapsed, g = d.pane.isExpanded, v = d.pane.resize, y = d.pane.getId, b = /* @__PURE__ */ user_derived(() => mergeProps(u, d.props));
	var x = {
		collapse: f,
		expand: p,
		getSize: m,
		isCollapsed: h,
		isExpanded: g,
		resize: v,
		getId: y
	}, S = comment(), C = first_child(S), w = (t) => {
		var i = comment();
		snippet(first_child(i), () => r.child, () => ({ props: get$3(b) })), append(t, i);
	}, T = (t) => {
		var i = root_2$5();
		attribute_effect(i, () => ({ ...get$3(b) })), snippet(child(i), () => r.children ?? noop$2), reset(i), append(t, i);
	};
	return if_block(C, (t) => {
		r.child ? t(w) : t(T, -1);
	}), append(t, S), pop(x);
}
var root_2$4 = /* @__PURE__ */ from_html("<div><!></div>");
function Pane_resizer(t, r) {
	let i = props_id();
	push(r, !0);
	let a = prop(r, "id", 3, i), o = prop(r, "ref", 15, null), s = prop(r, "disabled", 3, !1), c = prop(r, "onDraggingChange", 3, noop), l = prop(r, "tabindex", 3, 0), u = /* @__PURE__ */ rest_props(r, [
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
	]), d = PaneResizerState.create({
		id: box.with(() => a()),
		ref: box.with(() => o(), (t) => o(t)),
		disabled: box.with(() => s()),
		onDraggingChange: box.with(() => c()),
		tabIndex: box.with(() => l())
	}), f = /* @__PURE__ */ user_derived(() => mergeProps(u, d.props));
	var p = comment(), m = first_child(p), h = (t) => {
		var i = comment();
		snippet(first_child(i), () => r.child, () => ({ props: get$3(f) })), append(t, i);
	}, g = (t) => {
		var i = root_2$4();
		attribute_effect(i, () => ({ ...get$3(f) })), snippet(child(i), () => r.children ?? noop$2), reset(i), append(t, i);
	};
	if_block(m, (t) => {
		r.child ? t(h) : t(g, -1);
	}), append(t, p), pop();
}
var root_2$3 = /* @__PURE__ */ from_html("<div class=\"bg-border h-6 w-1 rounded-lg z-10 flex shrink-0\"></div>");
function Resizable_handle(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = prop(r, "withHandle", 3, !1), o = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"withHandle"
	]);
	var s = comment(), c = first_child(s);
	{
		let t = /* @__PURE__ */ user_derived(() => cn("cn-resizable-handle bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[direction=vertical]:h-px data-[direction=vertical]:w-full data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:h-1 data-[direction=vertical]:after:w-full data-[direction=vertical]:after:translate-x-0 data-[direction=vertical]:after:-translate-y-1/2 [&[data-direction=vertical]>div]:rotate-90", r.class));
		component(c, () => Pane_resizer, (r, s) => {
			s(r, spread_props({
				"data-slot": "resizable-handle",
				get class() {
					return get$3(t);
				}
			}, () => o, {
				get ref() {
					return i();
				},
				set ref(t) {
					i(t);
				},
				children: (t, r) => {
					var i = comment(), o = first_child(i), s = (t) => {
						append(t, root_2$3());
					};
					if_block(o, (t) => {
						a() && t(s);
					}), append(t, i);
				},
				$$slots: { default: !0 }
			}));
		});
	}
	append(t, s), pop();
}
function Resizable_pane_group(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = prop(r, "this", 15), o = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"this",
		"class"
	]);
	var s = comment(), c = first_child(s);
	{
		let t = /* @__PURE__ */ user_derived(() => cn("cn-resizable-panel-group flex h-full w-full data-[direction=vertical]:flex-col", r.class));
		component(c, () => Pane_group, (r, s) => {
			bind_this(s(r, spread_props({
				"data-slot": "resizable-pane-group",
				get class() {
					return get$3(t);
				}
			}, () => o, {
				get ref() {
					return i();
				},
				set ref(t) {
					i(t);
				}
			})), (t) => a(t), () => a());
		});
	}
	append(t, s), pop();
}
function cubicOut(t) {
	let r = t - 1;
	return r * r * r + 1;
}
function quintOut(t) {
	return --t * t * t * t * t + 1;
}
function flip(t, { from: r, to: i }, a = {}) {
	var { delay: o = 0, duration: s = (t) => Math.sqrt(t) * 120, easing: c = cubicOut } = a, l = getComputedStyle(t), u = l.transform === "none" ? "" : l.transform, [d, f] = l.transformOrigin.split(" ").map(parseFloat);
	d /= t.clientWidth, f /= t.clientHeight;
	var p = get_zoom(t), m = t.clientWidth / i.width / p, h = t.clientHeight / i.height / p, g = r.left + r.width * d, _ = r.top + r.height * f, v = i.left + i.width * d, y = i.top + i.height * f, b = (g - v) * m, x = (_ - y) * h, S = r.width / i.width, C = r.height / i.height;
	return {
		delay: o,
		duration: typeof s == "function" ? s(Math.sqrt(b * b + x * x)) : s,
		easing: c,
		css: (t, r) => `transform: ${u} translate(${r * b}px, ${r * x}px) scale(${t + r * S}, ${t + r * C});`
	};
}
function get_zoom(t) {
	if ("currentCSSZoom" in t) return t.currentCSSZoom;
	for (var r = t, i = 1; r !== null;) i *= +getComputedStyle(r).zoom, r = r.parentElement;
	return i;
}
var root$9 = /* @__PURE__ */ from_html("<div><!></div>");
function Empty(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var o = root$9();
	attribute_effect(o, (t) => ({
		"data-slot": "empty",
		class: t,
		...a
	}), [() => cn("gap-4 rounded-xl border-dashed p-6 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance", r.class)]), snippet(child(o), () => r.children ?? noop$2), reset(o), bind_this(o, (t) => i(t), () => i()), append(t, o), pop();
}
var root$8 = /* @__PURE__ */ from_html("<div><!></div>");
function Empty_header(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var o = root$8();
	attribute_effect(o, (t) => ({
		"data-slot": "empty-header",
		class: t,
		...a
	}), [() => cn("gap-2 flex max-w-sm flex-col items-center", r.class)]), snippet(child(o), () => r.children ?? noop$2), reset(o), bind_this(o, (t) => i(t), () => i()), append(t, o), pop();
}
const emptyMediaVariants = tv({
	base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
	variants: { variant: {
		default: "bg-transparent",
		icon: "bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-4"
	} },
	defaultVariants: { variant: "default" }
});
var root$7 = /* @__PURE__ */ from_html("<div><!></div>");
function Empty_media(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = prop(r, "variant", 3, "default"), o = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children",
		"variant"
	]);
	var s = root$7();
	attribute_effect(s, (t) => ({
		"data-slot": "empty-icon",
		"data-variant": a(),
		class: t,
		...o
	}), [() => cn(emptyMediaVariants({ variant: a() }), r.class)]), snippet(child(s), () => r.children ?? noop$2), reset(s), bind_this(s, (t) => i(t), () => i()), append(t, s), pop();
}
var root$6 = /* @__PURE__ */ from_html("<div><!></div>");
function Empty_title(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var o = root$6();
	attribute_effect(o, (t) => ({
		"data-slot": "empty-title",
		class: t,
		...a
	}), [() => cn("font-heading text-sm font-medium tracking-tight", r.class)]), snippet(child(o), () => r.children ?? noop$2), reset(o), bind_this(o, (t) => i(t), () => i()), append(t, o), pop();
}
function Hover_card(t, r) {
	push(r, !0);
	let i = prop(r, "open", 15, !1), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"open"
	]);
	var o = comment();
	component(first_child(o), () => Link_preview, (t, r) => {
		r(t, spread_props(() => a, {
			get open() {
				return i();
			},
			set open(t) {
				i(t);
			}
		}));
	}), append(t, o), pop();
}
function Hover_card_portal(t, r) {
	let i = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	var a = comment();
	component(first_child(a), () => Portal, (t, r) => {
		r(t, spread_props(() => i));
	}), append(t, a);
}
function Hover_card_content(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = prop(r, "align", 3, "center"), o = prop(r, "sideOffset", 3, 4), s = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"align",
		"sideOffset",
		"portalProps"
	]);
	Hover_card_portal(t, spread_props(() => r.portalProps, {
		children: (t, c) => {
			var l = comment(), u = first_child(l);
			{
				let t = /* @__PURE__ */ user_derived(() => cn("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground w-64 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 origin-(--transform-origin) outline-hidden", r.class));
				component(u, () => Link_preview_content, (r, c) => {
					c(r, spread_props({
						"data-slot": "hover-card-content",
						get align() {
							return a();
						},
						get sideOffset() {
							return o();
						},
						get class() {
							return get$3(t);
						}
					}, () => s, {
						get ref() {
							return i();
						},
						set ref(t) {
							i(t);
						}
					}));
				});
			}
			append(t, l);
		},
		$$slots: { default: !0 }
	})), pop();
}
function Hover_card_trigger(t, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref"
	]);
	var o = comment();
	component(first_child(o), () => Link_preview_trigger, (t, r) => {
		r(t, spread_props({ "data-slot": "hover-card-trigger" }, () => a, {
			get ref() {
				return i();
			},
			set ref(t) {
				i(t);
			}
		}));
	}), append(t, o), pop();
}
var root_2$2 = /* @__PURE__ */ from_html("<!> <!>", 1), root_4$1 = /* @__PURE__ */ from_html("<p class=\"text-sm\"> </p>"), root$3 = /* @__PURE__ */ from_html("<div class=\"flex justify-between space-x-4\"><!> <div class=\"space-y-1\"><h4 class=\"text-sm font-semibold\"> </h4> <!></div></div>");
function UserCard(t, r) {
	push(r, !0);
	var i = root$3(), a = child(i), o = (t) => {
		Avatar(t, {
			children: (t, i) => {
				var a = root_2$2(), o = first_child(a);
				Avatar_image(o, { get src() {
					return r.user.profile.image;
				} }), Avatar_fallback(sibling(o, 2), {
					children: (t, r) => {
						next(), append(t, text("Profile Image"));
					},
					$$slots: { default: !0 }
				}), append(t, a);
			},
			$$slots: { default: !0 }
		});
	};
	if_block(a, (t) => {
		r.user.profile.image !== "" && t(o);
	});
	var s = sibling(a, 2), c = child(s), l = child(c, !0);
	reset(c);
	var u = sibling(c, 2), d = (t) => {
		var i = root_4$1(), a = child(i, !0);
		reset(i), template_effect(() => set_text(a, r.user.profile.text)), append(t, i);
	};
	if_block(u, (t) => {
		r.user.profile.text !== "" && t(d);
	}), reset(s), reset(i), template_effect(() => set_text(l, r.user.name)), append(t, i), pop();
}
var siteAdminStyleClass = "text-purple-600", channelAdminStyleClass = "text-red-600", moderatorStyleClass = "text-amber-600", regularStyleClass = "text-white", guestStyleClass = "text-gray-600", rankToClass = (t) => t >= 255 ? siteAdminStyleClass : t >= 3 ? channelAdminStyleClass : t == 2 ? moderatorStyleClass : t >= 1 ? regularStyleClass : guestStyleClass, root_3$1 = /* @__PURE__ */ from_html("<li><!></li>"), root_2$1 = /* @__PURE__ */ from_html("<ul class=\"overflow-auto no-scrollbar\"></ul> <!>", 1), root_9$1 = /* @__PURE__ */ from_html("<!> <!>", 1), root$2 = /* @__PURE__ */ from_html("<div><!></div>");
function Userlist(t, r) {
	push(r, !0);
	let i = () => store_get(userlistStore, "$userlistStore", a), [a, o] = setup_stores(), s = /* @__PURE__ */ user_derived(() => i().userlist), c = /* @__PURE__ */ user_derived(() => get$3(s).length > 0), l = /* @__PURE__ */ state(null);
	var u = root$2(), d = child(u), f = (t) => {
		Hover_card(t, {
			children: (t, r) => {
				var i = root_2$1(), a = first_child(i);
				each(a, 29, () => get$3(s), (t) => t.name, (t, r) => {
					var i = root_3$1();
					Hover_card_trigger(child(i), {
						children: (t, i) => {
							next();
							var a = text();
							template_effect(() => set_text(a, get$3(r).name)), append(t, a);
						},
						$$slots: { default: !0 }
					}), reset(i), template_effect((t) => set_class(i, 1, t), [() => clsx$1(cn(rankToClass(get$3(r).rank), "font-bold"))]), event("mouseenter", i, () => set(l, get$3(r), !0)), animation(i, () => flip, () => ({
						duration: 200,
						easing: quintOut
					})), transition(3, i, () => blur, () => ({ duration: 200 })), append(t, i);
				}), reset(a);
				var o = sibling(a, 2), c = (t) => {
					Hover_card_content(t, {
						children: (t, r) => {
							UserCard(t, { get user() {
								return get$3(l);
							} });
						},
						$$slots: { default: !0 }
					});
				};
				if_block(o, (t) => {
					get$3(l) && t(c);
				}), append(t, i);
			},
			$$slots: { default: !0 }
		});
	}, p = (t) => {
		Empty(t, {
			children: (t, r) => {
				Empty_header(t, {
					children: (t, r) => {
						var i = root_9$1(), a = first_child(i);
						Empty_media(a, {
							variant: "icon",
							children: (t, r) => {
								HugeiconsIcon(t, {
									get icon() {
										return Kar;
									},
									class: "size-5 motion-safe:animate-[spin_6s_linear_infinite]"
								});
							},
							$$slots: { default: !0 }
						}), Empty_title(sibling(a, 2), {
							class: "select-none",
							children: (t, r) => {
								next(), append(t, text("No users"));
							},
							$$slots: { default: !0 }
						}), append(t, i);
					},
					$$slots: { default: !0 }
				});
			},
			$$slots: { default: !0 }
		});
	};
	if_block(d, (t) => {
		get$3(c) ? t(f) : t(p, -1);
	}), reset(u), template_effect((t) => set_class(u, 1, t), [() => clsx$1(cn(r.class))]), append(t, u), pop(), o();
}
var root_2 = /* @__PURE__ */ from_html("<!> <!>", 1), root$1 = /* @__PURE__ */ from_html("<form><!></form>");
function GuestLoginForm(t, r) {
	push(r, !0);
	let i = () => store_get(authStore, "$authStore", a), [a, o] = setup_stores(), s = /* @__PURE__ */ user_derived(() => i().username), c = /* @__PURE__ */ user_derived(() => i().status), l = async (t) => {
		if (t.preventDefault(), !get$3(c)) try {
			store_mutate(authStore, untrack(i).status = !0, untrack(i)), await new Promise((t) => setTimeout(t, 500)), await login(get$3(s));
		} catch (t) {
			console.error(t);
		} finally {
			store_mutate(authStore, untrack(i).status = !1, untrack(i)), store_mutate(authStore, untrack(i).username = "", untrack(i)), store_mutate(authStore, untrack(i).password = void 0, untrack(i));
		}
	};
	var u = root$1();
	Field_group(child(u), {
		children: (t, r) => {
			Field(t, {
				orientation: "horizontal",
				class: "flex flex-row items-start justify-start gap-0",
				children: (t, r) => {
					var a = root_2(), o = first_child(a);
					{
						let t = /* @__PURE__ */ user_derived(() => get$3(s) === "");
						Button(o, {
							type: "submit",
							class: "flex-2 rounded-none border-none",
							get disabled() {
								return get$3(t);
							},
							children: (t, r) => {
								next(), append(t, text("Guest Login"));
							},
							$$slots: { default: !0 }
						});
					}
					Input(sibling(o, 2), {
						required: !0,
						class: "flex-8 rounded-none border-none",
						type: "text",
						autocomplete: "name",
						placeholder: "Username",
						get disabled() {
							return get$3(c);
						},
						get value() {
							return i().username;
						},
						set value(t) {
							store_mutate(authStore, untrack(i).username = t, untrack(i));
						}
					}), append(t, a);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), reset(u), template_effect((t) => set_class(u, 1, t), [() => clsx$1(cn(r.class))]), event("submit", u, l), append(t, u), pop(), o();
}
var root_5 = /* @__PURE__ */ from_html("<!> <!> <!>", 1), root_4 = /* @__PURE__ */ from_html("<div class=\"flex flex-col h-full\"><!> <!></div>"), root_9 = /* @__PURE__ */ from_html("<div class=\"flex flex-col h-full items-center justify-center p-6\"><span class=\"font-semibold\">Features</span></div>"), root_3 = /* @__PURE__ */ from_html("<!> <!> <!>", 1), root_12 = /* @__PURE__ */ from_html("<div class=\"flex flex-row h-full items-center justify-center p-6\"><span class=\"font-semibold\">Player</span></div>"), root_13 = /* @__PURE__ */ from_html("<div class=\"flex flex-col h-full items-center justify-center p-6\"><span class=\"font-semibold\">Playlist</span></div>"), root_11 = /* @__PURE__ */ from_html("<!> <!> <!>", 1), root_1 = /* @__PURE__ */ from_html("<!> <!> <!>", 1);
function CytubeFluidLayout(t, r) {
	push(r, !1);
	let i = () => store_get(clientStore, "$clientStore", a), [a, o] = setup_stores();
	init$1(), Resizable_pane_group(t, {
		direction: "horizontal",
		class: "w-full flex-1 border",
		children: (t, r) => {
			var a = root_1(), o = first_child(a);
			Pane(o, {
				defaultSize: 45,
				minSize: 25,
				maxSize: 50,
				children: (t, r) => {
					Resizable_pane_group(t, {
						direction: "vertical",
						class: "flex-1",
						children: (t, r) => {
							var a = root_3(), o = first_child(a);
							Pane(o, {
								defaultSize: 70,
								children: (t, r) => {
									var a = root_4(), o = child(a);
									Resizable_pane_group(o, {
										direction: "horizontal",
										children: (t, r) => {
											var i = root_5(), a = first_child(i);
											Pane(a, {
												defaultSize: 20,
												children: (t, r) => {
													Userlist(t, { class: "flex flex-col items-start justify-start h-full px-1 py-0.5" });
												},
												$$slots: { default: !0 }
											});
											var o = sibling(a, 2);
											Resizable_handle(o, {}), Pane(sibling(o, 2), {
												defaultSize: 80,
												class: "flex flex-col items-center justify-center h-full",
												children: (t, r) => {
													next(), append(t, text("Chat"));
												},
												$$slots: { default: !0 }
											}), append(t, i);
										},
										$$slots: { default: !0 }
									});
									var s = sibling(o, 2), c = (t) => {
										GuestLoginForm(t, { class: "w-full" });
									};
									if_block(s, (t) => {
										i().logged_in || t(c);
									}), reset(a), append(t, a);
								},
								$$slots: { default: !0 }
							});
							var s = sibling(o, 2);
							Resizable_handle(s, {}), Pane(sibling(s, 2), {
								defaultSize: 30,
								children: (t, r) => {
									append(t, root_9());
								},
								$$slots: { default: !0 }
							}), append(t, a);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			});
			var s = sibling(o, 2);
			Resizable_handle(s, {}), Pane(sibling(s, 2), {
				defaultSize: 65,
				minSize: 50,
				maxSize: 75,
				children: (t, r) => {
					Resizable_pane_group(t, {
						direction: "vertical",
						class: "flex-1",
						children: (t, r) => {
							var i = root_11(), a = first_child(i);
							Pane(a, {
								defaultSize: 70,
								children: (t, r) => {
									append(t, root_12());
								},
								$$slots: { default: !0 }
							});
							var o = sibling(a, 2);
							Resizable_handle(o, {}), Pane(sibling(o, 2), {
								defaultSize: 30,
								children: (t, r) => {
									append(t, root_13());
								},
								$$slots: { default: !0 }
							}), append(t, i);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			}), append(t, a);
		},
		$$slots: { default: !0 }
	}), pop(), o();
}
var root = /* @__PURE__ */ from_html("<main class=\"flex flex-col flex-1\"><!></main>");
function Main(t) {
	var r = root();
	CytubeFluidLayout(child(r), {}), reset(r), append(t, r);
}
var removeLegacyWrap = () => {
	let t = document.getElementById("wrap");
	t && t.remove();
}, removeLegacyModals = () => {
	let t = document.getElementById("useroptions");
	t && t.remove();
	let r = document.getElementById("emotelist");
	r && r.remove();
	let i = document.getElementById("channeloptions");
	i && i.remove();
	let a = document.getElementById("pmbar");
	a && a.remove();
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
	} catch (r) {
		throw t(), r;
	}
};
export { init };
