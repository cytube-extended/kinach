const submitSocketConnect = async () => new Promise((e) => {
	socketClient.once("connect", () => {
		e();
	}), socketClient.connect();
}), submitSocketDisconnect = async () => new Promise((e, r) => {
	socketClient.once("disconnect", (i) => {
		if (i === "io client disconnect") {
			e();
			return;
		}
		r(i);
	}), socketClient.disconnect();
}), socketClient = window.socket;
var is_array = Array.isArray, index_of = Array.prototype.indexOf, includes = Array.prototype.includes, array_from = Array.from;
Object.keys;
var define_property = Object.defineProperty, get_descriptor = Object.getOwnPropertyDescriptor, get_descriptors = Object.getOwnPropertyDescriptors, object_prototype = Object.prototype, array_prototype = Array.prototype, get_prototype_of = Object.getPrototypeOf, is_extensible = Object.isExtensible;
function is_function(e) {
	return typeof e == "function";
}
const noop$1 = () => {};
function run(e) {
	return e();
}
function run_all(e) {
	for (var r = 0; r < e.length; r++) e[r]();
}
function deferred() {
	var e, r;
	return {
		promise: new Promise((i, a) => {
			e = i, r = a;
		}),
		resolve: e,
		reject: r
	};
}
const CLEAN = 1024, DIRTY = 2048, MAYBE_DIRTY = 4096, INERT = 8192, REACTION_RAN = 32768, DESTROYING = 1 << 25, EFFECT_TRANSPARENT = 65536, EFFECT_PRESERVED = 1 << 19, USER_EFFECT = 1 << 20, EFFECT_OFFSCREEN = 1 << 25, WAS_MARKED = 65536, REACTION_IS_UPDATING = 1 << 21, ERROR_VALUE = 1 << 23, STATE_SYMBOL = Symbol("$state"), LEGACY_PROPS = Symbol("legacy props"), LOADING_ATTR_SYMBOL = Symbol(""), STALE_REACTION = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), IS_XHTML = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function equals(e) {
	return e === this.v;
}
function safe_not_equal(e, r) {
	return e == e ? e !== r || typeof e == "object" && !!e || typeof e == "function" : r == r;
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
function each_key_duplicate(e, r, i) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
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
var empty = [];
function snapshot(e, r = !1, i = !1) {
	return clone(e, /* @__PURE__ */ new Map(), "", empty, null, i);
}
function clone(e, r, i, o, s = null, c = !1) {
	if (typeof e == "object" && e) {
		var l = r.get(e);
		if (l !== void 0) return l;
		if (e instanceof Map) return new Map(e);
		if (e instanceof Set) return new Set(e);
		if (is_array(e)) {
			var u = Array(e.length);
			r.set(e, u), s !== null && r.set(s, u);
			for (var d = 0; d < e.length; d += 1) {
				var p = e[d];
				d in e && (u[d] = clone(p, r, i, o, null, c));
			}
			return u;
		}
		if (get_prototype_of(e) === object_prototype) {
			u = {}, r.set(e, u), s !== null && r.set(s, u);
			for (var h of Object.keys(e)) u[h] = clone(e[h], r, i, o, null, c);
			return u;
		}
		if (e instanceof Date) return structuredClone(e);
		if (typeof e.toJSON == "function" && !c) return clone(e.toJSON(), r, i, o, e);
	}
	if (e instanceof EventTarget) return e;
	try {
		return structuredClone(e);
	} catch {
		return e;
	}
}
let component_context = null;
function set_component_context(e) {
	component_context = e;
}
function getContext(e) {
	return get_or_init_context_map("getContext").get(e);
}
function setContext(e, r) {
	return get_or_init_context_map("setContext").set(e, r), r;
}
function hasContext(e) {
	return get_or_init_context_map("hasContext").has(e);
}
function push(e, r = !1, i) {
	component_context = {
		p: component_context,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: active_effect,
		l: legacy_mode_flag && !r ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function pop(e) {
	var r = component_context, i = r.e;
	if (i !== null) {
		r.e = null;
		for (var a of i) create_user_effect(a);
	}
	return e !== void 0 && (r.x = e), r.i = !0, component_context = r.p, e ?? {};
}
function is_runes() {
	return !legacy_mode_flag || component_context !== null && component_context.l === null;
}
function get_or_init_context_map(e) {
	return component_context === null && lifecycle_outside_component(e), component_context.c ??= new Map(get_parent_context(component_context) || void 0);
}
function get_parent_context(e) {
	let r = e.p;
	for (; r !== null;) {
		let e = r.c;
		if (e !== null) return e;
		r = r.p;
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
		var r = micro_tasks;
		queueMicrotask(() => {
			r === micro_tasks && run_micro_tasks();
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
		for (var r = e, i = hydrate_node; r--;) i = /* @__PURE__ */ get_next_sibling(i);
		hydrate_node = i;
	}
}
function skip_nodes(e = !0) {
	for (var r = 0, i = hydrate_node;;) {
		if (i.nodeType === 8) {
			var a = i.data;
			if (a === "]") {
				if (r === 0) return i;
				--r;
			} else (a === "[" || a === "[!" || a[0] === "[" && !isNaN(Number(a.slice(1)))) && (r += 1);
		}
		var o = /* @__PURE__ */ get_next_sibling(i);
		e && i.remove(), i = o;
	}
}
function read_hydration_instruction(e) {
	if (!e || e.nodeType !== 8) throw hydration_mismatch(), HYDRATION_ERROR;
	return e.data;
}
function proxy(e) {
	if (typeof e != "object" || !e || STATE_SYMBOL in e) return e;
	let r = get_prototype_of(e);
	if (r !== object_prototype && r !== array_prototype) return e;
	var i = /* @__PURE__ */ new Map(), o = is_array(e), s = /* @__PURE__ */ state(0), c = null, l = update_version, d = (e) => {
		if (update_version === l) return e();
		var r = active_reaction, i = update_version;
		set_active_reaction(null), set_update_version(l);
		var a = e();
		return set_active_reaction(r), set_update_version(i), a;
	};
	return o && i.set("length", /* @__PURE__ */ state(e.length, c)), new Proxy(e, {
		defineProperty(e, r, a) {
			(!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && state_descriptors_fixed();
			var o = i.get(r);
			return o === void 0 ? d(() => {
				var e = /* @__PURE__ */ state(a.value, c);
				return i.set(r, e), e;
			}) : set(o, a.value, !0), !0;
		},
		deleteProperty(e, r) {
			var a = i.get(r);
			if (a === void 0) {
				if (r in e) {
					let e = d(() => /* @__PURE__ */ state(UNINITIALIZED, c));
					i.set(r, e), increment(s);
				}
			} else set(a, UNINITIALIZED), increment(s);
			return !0;
		},
		get(r, a, o) {
			if (a === STATE_SYMBOL) return e;
			var s = i.get(a), l = a in r;
			if (s === void 0 && (!l || get_descriptor(r, a)?.writable) && (s = d(() => /* @__PURE__ */ state(proxy(l ? r[a] : UNINITIALIZED), c)), i.set(a, s)), s !== void 0) {
				var f = get$1(s);
				return f === UNINITIALIZED ? void 0 : f;
			}
			return Reflect.get(r, a, o);
		},
		getOwnPropertyDescriptor(e, r) {
			var a = Reflect.getOwnPropertyDescriptor(e, r);
			if (a && "value" in a) {
				var o = i.get(r);
				o && (a.value = get$1(o));
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
		has(e, r) {
			if (r === STATE_SYMBOL) return !0;
			var a = i.get(r), o = a !== void 0 && a.v !== UNINITIALIZED || Reflect.has(e, r);
			return (a !== void 0 || active_effect !== null && (!o || get_descriptor(e, r)?.writable)) && (a === void 0 && (a = d(() => /* @__PURE__ */ state(o ? proxy(e[r]) : UNINITIALIZED, c)), i.set(r, a)), get$1(a) === UNINITIALIZED) ? !1 : o;
		},
		set(e, r, a, l) {
			var f = i.get(r), p = r in e;
			if (o && r === "length") for (var m = a; m < f.v; m += 1) {
				var h = i.get(m + "");
				h === void 0 ? m in e && (h = d(() => /* @__PURE__ */ state(UNINITIALIZED, c)), i.set(m + "", h)) : set(h, UNINITIALIZED);
			}
			if (f === void 0) (!p || get_descriptor(e, r)?.writable) && (f = d(() => /* @__PURE__ */ state(void 0, c)), set(f, proxy(a)), i.set(r, f));
			else {
				p = f.v !== UNINITIALIZED;
				var g = d(() => proxy(a));
				set(f, g);
			}
			var _ = Reflect.getOwnPropertyDescriptor(e, r);
			if (_?.set && _.set.call(l, a), !p) {
				if (o && typeof r == "string") {
					var v = i.get("length"), y = Number(r);
					Number.isInteger(y) && y >= v.v && set(v, y + 1);
				}
				increment(s);
			}
			return !0;
		},
		ownKeys(e) {
			get$1(s);
			var r = Reflect.ownKeys(e).filter((e) => {
				var r = i.get(e);
				return r === void 0 || r.v !== UNINITIALIZED;
			});
			for (var [a, o] of i) o.v !== UNINITIALIZED && !(a in e) && r.push(a);
			return r;
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
function is$1(e, r) {
	return Object.is(get_proxied_value(e), get_proxied_value(r));
}
var $window, is_firefox, first_child_getter, next_sibling_getter;
function init_operations() {
	if ($window === void 0) {
		$window = window, document, is_firefox = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, r = Node.prototype, i = Text.prototype;
		first_child_getter = get_descriptor(r, "firstChild").get, next_sibling_getter = get_descriptor(r, "nextSibling").get, is_extensible(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), is_extensible(i) && (i.__t = void 0);
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
function child(e, r) {
	if (!hydrating) return /* @__PURE__ */ get_first_child(e);
	var i = /* @__PURE__ */ get_first_child(hydrate_node);
	if (i === null) i = hydrate_node.appendChild(create_text());
	else if (r && i.nodeType !== 3) {
		var a = create_text();
		return i?.before(a), set_hydrate_node(a), a;
	}
	return r && merge_text_nodes(i), set_hydrate_node(i), i;
}
function first_child(e, r = !1) {
	if (!hydrating) {
		var i = /* @__PURE__ */ get_first_child(e);
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
function sibling(e, r = 1, i = !1) {
	let a = hydrating ? hydrate_node : e;
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
function clear_text_content(e) {
	e.textContent = "";
}
function should_defer_append() {
	return !1;
}
function create_element(e, r, i) {
	let a = i ? { is: i } : void 0;
	return document.createElementNS(r ?? "http://www.w3.org/1999/xhtml", e, a);
}
function merge_text_nodes(e) {
	if (e.nodeValue.length < 65536) return;
	let r = e.nextSibling;
	for (; r !== null && r.nodeType === 3;) r.remove(), e.nodeValue += r.nodeValue, r = e.nextSibling;
}
function handle_error(e) {
	var r = active_effect;
	if (r === null) return active_reaction.f |= ERROR_VALUE, e;
	if (!(r.f & 32768) && !(r.f & 4)) throw e;
	invoke_error_boundary(e, r);
}
function invoke_error_boundary(e, r) {
	for (; r !== null;) {
		if (r.f & 128) {
			if (!(r.f & 32768)) throw e;
			try {
				r.b.error(e);
				return;
			} catch (r) {
				e = r;
			}
		}
		r = r.parent;
	}
	throw e;
}
var STATUS_MASK = ~(MAYBE_DIRTY | 3072);
function set_signal_status(e, r) {
	e.f = e.f & STATUS_MASK | r;
}
function update_derived_status(e) {
	e.f & 512 || e.deps === null ? set_signal_status(e, CLEAN) : set_signal_status(e, MAYBE_DIRTY);
}
function clear_marked(e) {
	if (e !== null) for (let r of e) !(r.f & 2) || !(r.f & 65536) || (r.f ^= WAS_MARKED, clear_marked(r.deps));
}
function defer_effect(e, r, i) {
	e.f & 2048 ? r.add(e) : e.f & 4096 && i.add(e), clear_marked(e.deps), set_signal_status(e, CLEAN);
}
function subscribe_to_store(e, r, i) {
	if (e == null) return r(void 0), i && i(void 0), noop$1;
	let a = untrack(() => e.subscribe(r, i));
	return a.unsubscribe ? () => a.unsubscribe() : a;
}
var subscriber_queue = [];
function writable(e, r = noop$1) {
	let i = null, a = /* @__PURE__ */ new Set();
	function o(r) {
		if (safe_not_equal(e, r) && (e = r, i)) {
			let r = !subscriber_queue.length;
			for (let r of a) r[1](), subscriber_queue.push(r, e);
			if (r) {
				for (let e = 0; e < subscriber_queue.length; e += 2) subscriber_queue[e][0](subscriber_queue[e + 1]);
				subscriber_queue.length = 0;
			}
		}
	}
	function s(r) {
		o(r(e));
	}
	function c(c, l = noop$1) {
		let u = [c, l];
		return a.add(u), a.size === 1 && (i = r(o, s) || noop$1), c(e), () => {
			a.delete(u), a.size === 0 && i && (i(), i = null);
		};
	}
	return {
		set: o,
		update: s,
		subscribe: c
	};
}
function get(e) {
	let r;
	return subscribe_to_store(e, (e) => r = e)(), r;
}
let legacy_is_updating_store = !1;
var is_store_binding = !1, IS_UNMOUNTED = Symbol();
function store_get(e, r, i) {
	let a = i[r] ??= {
		store: null,
		source: /* @__PURE__ */ mutable_source(void 0),
		unsubscribe: noop$1
	};
	if (a.store !== e && !(IS_UNMOUNTED in i)) if (a.unsubscribe(), a.store = e ?? null, e == null) a.source.v = void 0, a.unsubscribe = noop$1;
	else {
		var o = !0;
		a.unsubscribe = subscribe_to_store(e, (e) => {
			o ? a.source.v = e : set(a.source, e);
		}), o = !1;
	}
	return e && IS_UNMOUNTED in i ? get(e) : get$1(a.source);
}
function setup_stores() {
	let e = {};
	function r() {
		teardown(() => {
			for (var r in e) e[r].unsubscribe();
			define_property(e, IS_UNMOUNTED, {
				enumerable: !1,
				value: !0
			});
		});
	}
	return [e, r];
}
function update_with_flag(e, r) {
	legacy_is_updating_store = !0;
	try {
		e.set(r);
	} finally {
		legacy_is_updating_store = !1;
	}
}
function store_mutate(e, r, i) {
	return update_with_flag(e, i), r;
}
function capture_store_binding(e) {
	var r = is_store_binding;
	try {
		return is_store_binding = !1, [e(), is_store_binding];
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
		for (let i of this.#p) for (let a of i.#i.keys()) {
			for (var e = !1, r = a; r.parent !== null;) {
				if (this.#u.has(r)) {
					e = !0;
					break;
				}
				r = r.parent;
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
	unskip_effect(e, r = (e) => this.schedule(e)) {
		var i = this.#u.get(e);
		if (i) {
			this.#u.delete(e);
			for (var a of i.d) set_signal_status(a, DIRTY), r(a);
			for (a of i.m) set_signal_status(a, MAYBE_DIRTY), r(a);
		}
		this.#d.add(e);
	}
	#g() {
		if (flush_count++ > 1e3 && (batches.delete(this), infinite_loop_guard()), !this.#m()) {
			for (let e of this.#c) this.#l.delete(e), set_signal_status(e, DIRTY), this.schedule(e);
			for (let e of this.#l) set_signal_status(e, MAYBE_DIRTY), this.schedule(e);
		}
		let r = this.#o;
		this.#o = [], this.apply();
		var i = collected_effects = [], a = [], o = legacy_updates = [];
		for (let e of r) try {
			this.#_(e, i, a);
		} catch (r) {
			throw reset_all(e), r;
		}
		if (current_batch = null, o.length > 0) {
			var s = e.ensure();
			for (let e of o) s.schedule(e);
		}
		if (collected_effects = null, legacy_updates = null, this.#m() || this.#h()) {
			this.#v(a), this.#v(i);
			for (let [e, r] of this.#u) reset_branch(e, r);
		} else {
			this.#r.size === 0 && batches.delete(this), this.#c.clear(), this.#l.clear();
			for (let e of this.#e) e(this);
			this.#e.clear(), flush_queued_effects(a), flush_queued_effects(i), this.#a?.resolve();
		}
		var c = current_batch;
		if (this.#o.length > 0) {
			let e = c ??= this;
			e.#o.push(...this.#o.filter((r) => !e.#o.includes(r)));
		}
		c !== null && (batches.add(c), c.#g());
	}
	#_(e, r, i) {
		e.f ^= CLEAN;
		for (var a = e.first; a !== null;) {
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
	#v(e) {
		for (var r = 0; r < e.length; r += 1) defer_effect(e[r], this.#c, this.#l);
	}
	capture(e, r, i = !1) {
		e.v !== UNINITIALIZED && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [r, i]), batch_values?.set(e, r)), this.is_fork || (e.v = r);
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
	increment(e, r) {
		let i = this.#r.get(r) ?? 0;
		if (this.#r.set(r, i + 1), e) {
			let e = this.#i.get(r) ?? 0;
			this.#i.set(r, e + 1);
		}
	}
	decrement(e, r, i) {
		let a = this.#r.get(r) ?? 0;
		if (a === 1 ? this.#r.delete(r) : this.#r.set(r, a - 1), e) {
			let e = this.#i.get(r) ?? 0;
			e === 1 ? this.#i.delete(r) : this.#i.set(r, e - 1);
		}
		this.#f || i || (this.#f = !0, queue_micro_task(() => {
			this.#f = !1, this.flush();
		}));
	}
	transfer_effects(e, r) {
		for (let r of e) this.#c.add(r);
		for (let e of r) this.#l.add(e);
		e.clear(), r.clear();
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
			let r = current_batch = new e();
			is_processing || (batches.add(current_batch), is_flushing_sync || queue_micro_task(() => {
				current_batch === r && r.flush();
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
		for (var r = e; r.parent !== null;) {
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
function flushSync(e) {
	var r = is_flushing_sync;
	is_flushing_sync = !0;
	try {
		var i;
		for (e && (current_batch !== null && !current_batch.is_fork && current_batch.flush(), i = e());;) {
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
	} catch (e) {
		invoke_error_boundary(e, last_scheduled_effect);
	}
}
let eager_block_effects = null;
function flush_queued_effects(e) {
	var r = e.length;
	if (r !== 0) {
		for (var i = 0; i < r;) {
			var a = e[i++];
			if (!(a.f & 24576) && is_dirty(a) && (eager_block_effects = /* @__PURE__ */ new Set(), update_effect(a), a.deps === null && a.first === null && a.nodes === null && a.teardown === null && a.ac === null && unlink_effect(a), eager_block_effects?.size > 0)) {
				old_values.clear();
				for (let e of eager_block_effects) {
					if (e.f & 24576) continue;
					let r = [e], i = e.parent;
					for (; i !== null;) eager_block_effects.has(i) && (eager_block_effects.delete(i), r.push(i)), i = i.parent;
					for (let e = r.length - 1; e >= 0; e--) {
						let i = r[e];
						i.f & 24576 || update_effect(i);
					}
				}
				eager_block_effects.clear();
			}
		}
		eager_block_effects = null;
	}
}
function mark_effects(e, r, i, a) {
	if (!i.has(e) && (i.add(e), e.reactions !== null)) for (let o of e.reactions) {
		let e = o.f;
		e & 2 ? mark_effects(o, r, i, a) : e & 4194320 && !(e & 2048) && depends_on(o, r, a) && (set_signal_status(o, DIRTY), schedule_effect(o));
	}
}
function depends_on(e, r, i) {
	let a = i.get(e);
	if (a !== void 0) return a;
	if (e.deps !== null) for (let a of e.deps) {
		if (includes.call(r, a)) return !0;
		if (a.f & 2 && depends_on(a, r, i)) return i.set(a, !0), !0;
	}
	return i.set(e, !1), !1;
}
function schedule_effect(e) {
	current_batch.schedule(e);
}
function reset_branch(e, r) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? r.d.push(e) : e.f & 4096 && r.m.push(e), set_signal_status(e, CLEAN);
		for (var i = e.first; i !== null;) reset_branch(i, r), i = i.next;
	}
}
function reset_all(e) {
	set_signal_status(e, CLEAN);
	for (var r = e.first; r !== null;) reset_all(r), r = r.next;
}
function createSubscriber(e) {
	let r = 0, i = source(0), a;
	return () => {
		effect_tracking() && (get$1(i), render_effect(() => (r === 0 && (a = untrack(() => e(() => increment(i)))), r += 1, () => {
			queue_micro_task(() => {
				--r, r === 0 && (a?.(), a = void 0, increment(i));
			});
		})));
	};
}
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
function boundary(e, r, i, a) {
	new Boundary(e, r, i, a);
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
	constructor(e, r, i, a) {
		this.#e = e, this.#n = r, this.#r = (e) => {
			var r = active_effect;
			r.b = this, r.f |= 128, i(e);
		}, this.parent = active_effect.b, this.transform_error = a ?? this.parent?.transform_error ?? ((e) => e), this.#i = block(() => {
			if (hydrating) {
				let e = this.#t;
				hydrate_next();
				let r = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let r = JSON.parse(e.data.slice(2));
					this.#_(r);
				} else r ? this.#v() : this.#g();
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
		let r = this.#n.failed;
		r && (this.#s = branch(() => {
			r(this.#e, () => e, () => () => {});
		}));
	}
	#v() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = branch(() => e(this.#e)), queue_micro_task(() => {
			var e = this.#c = document.createDocumentFragment(), r = create_text();
			e.append(r), this.#a = this.#x(() => branch(() => this.#r(r))), this.#u === 0 && (this.#e.before(e), this.#c = null, pause_effect(this.#o, () => {
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
				let r = this.#n.pending;
				this.#o = branch(() => r(this.#e));
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
		var r = active_effect, i = active_reaction, a = component_context;
		set_active_effect(this.#i), set_active_reaction(this.#i), set_component_context(this.#i.ctx);
		try {
			return Batch.ensure(), e();
		} catch (e) {
			return handle_error(e), null;
		} finally {
			set_active_effect(r), set_active_reaction(i), set_component_context(a);
		}
	}
	#S(e, r) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(e, r);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#b(r), this.#o && pause_effect(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, r) {
		this.#S(e, r), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, queue_micro_task(() => {
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
		}, c = (e) => {
			try {
				o = !0, r?.(e, s), o = !1;
			} catch (e) {
				invoke_error_boundary(e, this.#i && this.#i.parent);
			}
			i && (this.#s = this.#x(() => {
				try {
					return branch(() => {
						var r = active_effect;
						r.b = this, r.f |= 128, i(this.#e, () => e, () => s);
					});
				} catch (e) {
					return invoke_error_boundary(e, this.#i.parent), null;
				}
			}));
		};
		queue_micro_task(() => {
			var r;
			try {
				r = this.transform_error(e);
			} catch (e) {
				invoke_error_boundary(e, this.#i && this.#i.parent);
				return;
			}
			typeof r == "object" && r && typeof r.then == "function" ? r.then(c, (e) => invoke_error_boundary(e, this.#i && this.#i.parent)) : c(r);
		});
	}
};
function flatten(e, r, i, a) {
	let o = is_runes() ? derived : derived_safe_equal;
	var s = e.filter((e) => !e.settled);
	if (i.length === 0 && s.length === 0) {
		a(r.map(o));
		return;
	}
	var c = active_effect, l = capture(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((e) => e.promise)) : null;
	function d(e) {
		l();
		try {
			a(e);
		} catch (e) {
			c.f & 16384 || invoke_error_boundary(e, c);
		}
		unset_context();
	}
	if (i.length === 0) {
		u.then(() => d(r.map(o)));
		return;
	}
	var f = increment_pending();
	function p() {
		Promise.all(i.map((e) => /* @__PURE__ */ async_derived(e))).then((e) => d([...r.map(o), ...e])).catch((e) => invoke_error_boundary(e, c)).finally(() => f());
	}
	u ? u.then(() => {
		l(), p(), unset_context();
	}) : p();
}
function capture() {
	var e = active_effect, r = active_reaction, i = component_context, a = current_batch;
	return function(o = !0) {
		set_active_effect(e), set_active_reaction(r), set_component_context(i), o && !(e.f & 16384) && (a?.activate(), a?.apply());
	};
}
function unset_context(e = !0) {
	set_active_effect(null), set_active_reaction(null), set_component_context(null), e && current_batch?.deactivate();
}
function increment_pending() {
	var e = active_effect, r = e.b, i = current_batch, a = r.is_rendered();
	return r.update_pending_count(1, i), i.increment(a, e), (o = !1) => {
		r.update_pending_count(-1, i), i.decrement(a, e, o);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function derived(e) {
	var r = 2 | DIRTY;
	return active_effect !== null && (active_effect.f |= EFFECT_PRESERVED), {
		ctx: component_context,
		deps: null,
		effects: null,
		equals,
		f: r,
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
function async_derived(e, r, i) {
	let a = active_effect;
	a === null && async_derived_orphan();
	var o = void 0, s = source(UNINITIALIZED), c = !active_reaction, l = /* @__PURE__ */ new Map();
	return async_effect(() => {
		var r = active_effect, i = deferred();
		o = i.promise;
		try {
			Promise.resolve(e()).then(i.resolve, i.reject).finally(unset_context);
		} catch (e) {
			i.reject(e), unset_context();
		}
		var u = current_batch;
		if (c) {
			if (r.f & 32768) var d = increment_pending();
			if (a.b.is_rendered()) l.get(u)?.reject(STALE_REACTION), l.delete(u);
			else {
				for (let e of l.values()) e.reject(STALE_REACTION);
				l.clear();
			}
			l.set(u, i);
		}
		let f = (e, i = void 0) => {
			if (d && d(i === STALE_REACTION), !(i === STALE_REACTION || r.f & 16384)) {
				if (u.activate(), i) s.f |= ERROR_VALUE, internal_set(s, i);
				else {
					s.f & 8388608 && (s.f ^= ERROR_VALUE), internal_set(s, e);
					for (let [e, r] of l) {
						if (l.delete(e), e === u) break;
						r.reject(STALE_REACTION);
					}
				}
				u.deactivate();
			}
		};
		i.promise.then(f, (e) => f(null, e || "unknown"));
	}), teardown(() => {
		for (let e of l.values()) e.reject(STALE_REACTION);
	}), new Promise((e) => {
		function r(i) {
			function a() {
				i === o ? e(s) : r(o);
			}
			i.then(a, a);
		}
		r(o);
	});
}
/* @__NO_SIDE_EFFECTS__ */
function user_derived(e) {
	let r = /* @__PURE__ */ derived(e);
	return push_reaction_value(r), r;
}
/* @__NO_SIDE_EFFECTS__ */
function derived_safe_equal(e) {
	let r = /* @__PURE__ */ derived(e);
	return r.equals = safe_equals, r;
}
function destroy_derived_effects(e) {
	var r = e.effects;
	if (r !== null) {
		e.effects = null;
		for (var i = 0; i < r.length; i += 1) destroy_effect(r[i]);
	}
}
function execute_derived(e) {
	var r, i = active_effect, a = e.parent;
	if (!is_destroying_effect && a !== null && a.f & 24576) return derived_inert(), e.v;
	set_active_effect(a);
	try {
		e.f &= ~WAS_MARKED, destroy_derived_effects(e), r = update_reaction(e);
	} finally {
		set_active_effect(i);
	}
	return r;
}
function update_derived(e) {
	var r = execute_derived(e);
	if (!e.equals(r) && (e.wv = increment_write_version(), (!current_batch?.is_fork || e.deps === null) && (current_batch === null ? e.v = r : current_batch.capture(e, r, !0), e.deps === null))) {
		set_signal_status(e, CLEAN);
		return;
	}
	is_destroying_effect || (batch_values === null ? update_derived_status(e) : (effect_tracking() || current_batch?.is_fork) && batch_values.set(e, r));
}
function freeze_derived_effects(e) {
	if (e.effects !== null) for (let r of e.effects) (r.teardown || r.ac) && (r.teardown?.(), r.ac?.abort(STALE_REACTION), r.teardown = noop$1, r.ac = null, remove_reactions(r, 0), destroy_effect_children(r));
}
function unfreeze_derived_effects(e) {
	if (e.effects !== null) for (let r of e.effects) r.teardown && update_effect(r);
}
let eager_effects = /* @__PURE__ */ new Set();
const old_values = /* @__PURE__ */ new Map();
var eager_effects_deferred = !1;
function source(e, r) {
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
function state(e, r) {
	let i = source(e, r);
	return push_reaction_value(i), i;
}
/* @__NO_SIDE_EFFECTS__ */
function mutable_source(e, r = !1, i = !0) {
	let a = source(e);
	return r || (a.equals = safe_equals), legacy_mode_flag && i && component_context !== null && component_context.l !== null && (component_context.l.s ??= []).push(a), a;
}
function set(e, r, i = !1) {
	return active_reaction !== null && (!untracking || active_reaction.f & 131072) && is_runes() && active_reaction.f & 4325394 && (current_sources === null || !includes.call(current_sources, e)) && state_unsafe_mutation(), internal_set(e, i ? proxy(r) : r, legacy_updates);
}
function internal_set(e, r, i = null) {
	if (!e.equals(r)) {
		old_values.set(e, is_destroying_effect ? r : e.v);
		var a = Batch.ensure();
		if (a.capture(e, r), e.f & 2) {
			let r = e;
			e.f & 2048 && execute_derived(r), batch_values === null && update_derived_status(r);
		}
		e.wv = increment_write_version(), mark_reactions(e, DIRTY, i), is_runes() && active_effect !== null && active_effect.f & 1024 && !(active_effect.f & 96) && (untracked_writes === null ? set_untracked_writes([e]) : untracked_writes.push(e)), !a.is_fork && eager_effects.size > 0 && !eager_effects_deferred && flush_eager_effects();
	}
	return r;
}
function flush_eager_effects() {
	eager_effects_deferred = !1;
	for (let e of eager_effects) e.f & 1024 && set_signal_status(e, MAYBE_DIRTY), is_dirty(e) && update_effect(e);
	eager_effects.clear();
}
function increment(e) {
	set(e, e.v + 1);
}
function mark_reactions(e, r, i) {
	var a = e.reactions;
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
function autofocus(e, r) {
	if (r) {
		let r = document.body;
		e.autofocus = !0, queue_micro_task(() => {
			document.activeElement === r && e.focus();
		});
	}
}
var listening_to_form_reset = !1;
function add_form_reset_listener() {
	listening_to_form_reset || (listening_to_form_reset = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let r of e.target.elements) r.__on_r?.();
		});
	}, { capture: !0 }));
}
function without_reactive_context(e) {
	var r = active_reaction, i = active_effect;
	set_active_reaction(null), set_active_effect(null);
	try {
		return e();
	} finally {
		set_active_reaction(r), set_active_effect(i);
	}
}
function listen_to_event_and_reset_event(e, r, i, a = i) {
	e.addEventListener(r, () => without_reactive_context(i));
	let o = e.__on_r;
	o ? e.__on_r = () => {
		o(), a(!0);
	} : e.__on_r = () => a(!0), add_form_reset_listener();
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
	var r = e.f;
	if (r & 2048) return !0;
	if (r & 2 && (e.f &= ~WAS_MARKED), r & 4096) {
		for (var i = e.deps, a = i.length, o = 0; o < a; o++) {
			var s = i[o];
			if (is_dirty(s) && update_derived(s), s.wv > e.wv) return !0;
		}
		r & 512 && batch_values === null && set_signal_status(e, CLEAN);
	}
	return !1;
}
function schedule_possible_effect_self_invalidation(e, r, i = !0) {
	var a = e.reactions;
	if (a !== null && !(current_sources !== null && includes.call(current_sources, e))) for (var o = 0; o < a.length; o++) {
		var c = a[o];
		c.f & 2 ? schedule_possible_effect_self_invalidation(c, r, !1) : r === c && (i ? set_signal_status(c, DIRTY) : c.f & 1024 && set_signal_status(c, MAYBE_DIRTY), schedule_effect(c));
	}
}
function update_reaction(e) {
	var r = new_deps, i = skipped_deps, a = untracked_writes, o = active_reaction, s = current_sources, c = component_context, l = untracking, u = update_version, d = e.f;
	new_deps = null, skipped_deps = 0, untracked_writes = null, active_reaction = d & 96 ? null : e, current_sources = null, set_component_context(e.ctx), untracking = !1, update_version = ++read_version, e.ac !== null && (without_reactive_context(() => {
		e.ac.abort(STALE_REACTION);
	}), e.ac = null);
	try {
		e.f |= REACTION_IS_UPDATING;
		var f = e.fn, p = f();
		e.f |= REACTION_RAN;
		var m = e.deps, h = current_batch?.is_fork;
		if (new_deps !== null) {
			var g;
			if (h || remove_reactions(e, skipped_deps), m !== null && skipped_deps > 0) for (m.length = skipped_deps + new_deps.length, g = 0; g < new_deps.length; g++) m[skipped_deps + g] = new_deps[g];
			else e.deps = m = new_deps;
			if (effect_tracking() && e.f & 512) for (g = skipped_deps; g < m.length; g++) (m[g].reactions ??= []).push(e);
		} else !h && m !== null && skipped_deps < m.length && (remove_reactions(e, skipped_deps), m.length = skipped_deps);
		if (is_runes() && untracked_writes !== null && !untracking && m !== null && !(e.f & 6146)) for (g = 0; g < untracked_writes.length; g++) schedule_possible_effect_self_invalidation(untracked_writes[g], e);
		if (o !== null && o !== e) {
			if (read_version++, o.deps !== null) for (let e = 0; e < i; e += 1) o.deps[e].rv = read_version;
			if (r !== null) for (let e of r) e.rv = read_version;
			untracked_writes !== null && (a === null ? a = untracked_writes : a.push(...untracked_writes));
		}
		return e.f & 8388608 && (e.f ^= ERROR_VALUE), p;
	} catch (e) {
		return handle_error(e);
	} finally {
		e.f ^= REACTION_IS_UPDATING, new_deps = r, skipped_deps = i, untracked_writes = a, active_reaction = o, current_sources = s, set_component_context(c), untracking = l, update_version = u;
	}
}
function remove_reaction(e, r) {
	let i = r.reactions;
	if (i !== null) {
		var a = index_of.call(i, e);
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
function remove_reactions(e, r) {
	var i = e.deps;
	if (i !== null) for (var a = r; a < i.length; a++) remove_reaction(e, i[a]);
}
function update_effect(e) {
	var r = e.f;
	if (!(r & 16384)) {
		set_signal_status(e, CLEAN);
		var i = active_effect, a = is_updating_effect;
		active_effect = e, is_updating_effect = !0;
		try {
			r & 16777232 ? destroy_block_effect_children(e) : destroy_effect_children(e), execute_effect_teardown(e);
			var o = update_reaction(e);
			e.teardown = typeof o == "function" ? o : null, e.wv = write_version;
		} finally {
			is_updating_effect = a, active_effect = i;
		}
	}
}
async function tick() {
	await Promise.resolve(), flushSync();
}
function get$1(e) {
	var r = (e.f & 2) != 0;
	if (null?.add(e), active_reaction !== null && !untracking && !(active_effect !== null && active_effect.f & 16384) && (current_sources === null || !includes.call(current_sources, e))) {
		var i = active_reaction.deps;
		if (active_reaction.f & 2097152) e.rv < read_version && (e.rv = read_version, new_deps === null && i !== null && i[skipped_deps] === e ? skipped_deps++ : new_deps === null ? new_deps = [e] : new_deps.push(e));
		else {
			(active_reaction.deps ??= []).push(e);
			var a = e.reactions;
			a === null ? e.reactions = [active_reaction] : includes.call(a, active_reaction) || a.push(active_reaction);
		}
	}
	if (is_destroying_effect && old_values.has(e)) return old_values.get(e);
	if (r) {
		var o = e;
		if (is_destroying_effect) {
			var c = o.v;
			return (!(o.f & 1024) && o.reactions !== null || depends_on_old_values(o)) && (c = execute_derived(o)), old_values.set(o, c), c;
		}
		var l = (o.f & 512) == 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & 512) != 0), u = (o.f & REACTION_RAN) === 0;
		is_dirty(o) && (l && (o.f |= 512), update_derived(o)), l && !u && (unfreeze_derived_effects(o), reconnect(o));
	}
	if (batch_values?.has(e)) return batch_values.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function reconnect(e) {
	if (e.f |= 512, e.deps !== null) for (let r of e.deps) (r.reactions ??= []).push(e), r.f & 2 && !(r.f & 512) && (unfreeze_derived_effects(r), reconnect(r));
}
function depends_on_old_values(e) {
	if (e.v === UNINITIALIZED) return !0;
	if (e.deps === null) return !1;
	for (let r of e.deps) if (old_values.has(r) || r.f & 2 && depends_on_old_values(r)) return !0;
	return !1;
}
function untrack(e) {
	var r = untracking;
	try {
		return untracking = !0, e();
	} finally {
		untracking = r;
	}
}
function deep_read_state(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (STATE_SYMBOL in e) deep_read(e);
		else if (!Array.isArray(e)) for (let r in e) {
			let i = e[r];
			typeof i == "object" && i && STATE_SYMBOL in i && deep_read(i);
		}
	}
}
function deep_read(e, r = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !r.has(e)) {
		for (let i in r.add(e), e instanceof Date && e.getTime(), e) try {
			deep_read(e[i], r);
		} catch {}
		let i = get_prototype_of(e);
		if (i !== Object.prototype && i !== Array.prototype && i !== Map.prototype && i !== Set.prototype && i !== Date.prototype) {
			let r = get_descriptors(i);
			for (let i in r) {
				let a = r[i].get;
				if (a) try {
					a.call(e);
				} catch {}
			}
		}
	}
}
function validate_effect(e) {
	active_effect === null && (active_reaction === null && effect_orphan(e), effect_in_unowned_derived()), is_destroying_effect && effect_in_teardown(e);
}
function push_effect(e, r) {
	var i = r.last;
	i === null ? r.last = r.first = e : (i.next = e, e.prev = i, r.last = e);
}
function create_effect(e, r) {
	var i = active_effect;
	i !== null && i.f & 8192 && (e |= INERT);
	var a = {
		ctx: component_context,
		deps: null,
		nodes: null,
		f: e | 2560,
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
	if (e & 4) collected_effects === null ? Batch.ensure().schedule(a) : collected_effects.push(a);
	else if (r !== null) {
		try {
			update_effect(a);
		} catch (e) {
			throw destroy_effect(a), e;
		}
		o.deps === null && o.teardown === null && o.nodes === null && o.first === o.last && !(o.f & 524288) && (o = o.first, e & 16 && e & 65536 && o !== null && (o.f |= EFFECT_TRANSPARENT));
	}
	if (o !== null && (o.parent = i, i !== null && push_effect(o, i), active_reaction !== null && active_reaction.f & 2 && !(e & 64))) {
		var s = active_reaction;
		(s.effects ??= []).push(o);
	}
	return a;
}
function effect_tracking() {
	return active_reaction !== null && !untracking;
}
function teardown(e) {
	let r = create_effect(8, null);
	return set_signal_status(r, CLEAN), r.teardown = e, r;
}
function user_effect(e) {
	validate_effect("$effect");
	var r = active_effect.f;
	if (!active_reaction && r & 32 && !(r & 32768)) {
		var i = component_context;
		(i.e ??= []).push(e);
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
	let r = create_effect(64 | EFFECT_PRESERVED, e);
	return () => {
		destroy_effect(r);
	};
}
function component_root(e) {
	Batch.ensure();
	let r = create_effect(64 | EFFECT_PRESERVED, e);
	return (e = {}) => new Promise((i) => {
		e.outro ? pause_effect(r, () => {
			destroy_effect(r), i(void 0);
		}) : (destroy_effect(r), i(void 0));
	});
}
function effect(e) {
	return create_effect(4, e);
}
function async_effect(e) {
	return create_effect(4194304 | EFFECT_PRESERVED, e);
}
function render_effect(e, r = 0) {
	return create_effect(8 | r, e);
}
function template_effect(e, r = [], i = [], a = []) {
	flatten(a, r, i, (r) => {
		create_effect(8, () => e(...r.map(get$1)));
	});
}
function block(e, r = 0) {
	return create_effect(16 | r, e);
}
function managed(e, r = 0) {
	return create_effect(16777216 | r, e);
}
function branch(e) {
	return create_effect(32 | EFFECT_PRESERVED, e);
}
function execute_effect_teardown(e) {
	var r = e.teardown;
	if (r !== null) {
		let e = is_destroying_effect, i = active_reaction;
		set_is_destroying_effect(!0), set_active_reaction(null);
		try {
			r.call(null);
		} finally {
			set_is_destroying_effect(e), set_active_reaction(i);
		}
	}
}
function destroy_effect_children(e, r = !1) {
	var i = e.first;
	for (e.first = e.last = null; i !== null;) {
		let e = i.ac;
		e !== null && without_reactive_context(() => {
			e.abort(STALE_REACTION);
		});
		var a = i.next;
		i.f & 64 ? i.parent = null : destroy_effect(i, r), i = a;
	}
}
function destroy_block_effect_children(e) {
	for (var r = e.first; r !== null;) {
		var i = r.next;
		r.f & 32 || destroy_effect(r), r = i;
	}
}
function destroy_effect(e, r = !0) {
	var i = !1;
	(r || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (remove_effect_dom(e.nodes.start, e.nodes.end), i = !0), set_signal_status(e, DESTROYING), destroy_effect_children(e, r && !i), remove_reactions(e, 0);
	var a = e.nodes && e.nodes.t;
	if (a !== null) for (let e of a) e.stop();
	execute_effect_teardown(e), e.f ^= DESTROYING, e.f |= 16384;
	var o = e.parent;
	o !== null && o.first !== null && unlink_effect(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function remove_effect_dom(e, r) {
	for (; e !== null;) {
		var i = e === r ? null : /* @__PURE__ */ get_next_sibling(e);
		e.remove(), e = i;
	}
}
function unlink_effect(e) {
	var r = e.parent, i = e.prev, a = e.next;
	i !== null && (i.next = a), a !== null && (a.prev = i), r !== null && (r.first === e && (r.first = a), r.last === e && (r.last = i));
}
function pause_effect(e, r, i = !0) {
	var a = [];
	pause_children(e, a, !0);
	var o = () => {
		i && destroy_effect(e), r && r();
	}, s = a.length;
	if (s > 0) {
		var c = () => --s || o();
		for (var l of a) l.out(c);
	} else o();
}
function pause_children(e, r, i) {
	if (!(e.f & 8192)) {
		e.f ^= INERT;
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || i) && r.push(e);
		for (var o = e.first; o !== null;) {
			var s = o.next;
			if (!(o.f & 64)) {
				var c = (o.f & 65536) != 0 || (o.f & 32) != 0 && (e.f & 16) != 0;
				pause_children(o, r, c ? i : !1);
			}
			o = s;
		}
	}
}
function resume_effect(e) {
	resume_children(e, !0);
}
function resume_children(e, r) {
	if (e.f & 8192) {
		e.f ^= INERT, e.f & 1024 || (set_signal_status(e, DIRTY), Batch.ensure().schedule(e));
		for (var i = e.first; i !== null;) {
			var a = i.next, o = (i.f & 65536) != 0 || (i.f & 32) != 0;
			resume_children(i, o ? r : !1), i = a;
		}
		var s = e.nodes && e.nodes.t;
		if (s !== null) for (let e of s) (e.is_global || r) && e.in();
	}
}
function move_effect(e, r) {
	if (e.nodes) for (var i = e.nodes.start, a = e.nodes.end; i !== null;) {
		var o = i === a ? null : /* @__PURE__ */ get_next_sibling(i);
		r.append(i), i = o;
	}
}
var defaultUserlistState = { userlist: [] }, createUserlistStore = (e) => {
	let { subscribe: r, set: i, update: a } = writable({
		...defaultUserlistState,
		...e
	});
	return {
		subscribe: r,
		set: i,
		init: (e) => i(e),
		addUser: (e) => a((r) => ({
			...r,
			userlist: [...r.userlist, e]
		})),
		removeUser: (e) => a((r) => ({
			...r,
			userlist: [...r.userlist.filter((r) => r.name !== e)]
		}))
	};
};
const subscribeSocketAddUser = (e) => socketClient.on("addUser", e), subscribeSocketUserLeave = (e) => socketClient.on("userLeave", e), parseLegacyUserlist = () => Array.from(document.body.querySelectorAll("#userlist .userlist_item")).map((e) => $(e)).map((e) => ({
	name: e.data("name") || "",
	rank: e.data("rank") || -1,
	profile: e.data("profile") || {
		image: "",
		text: ""
	},
	meta: {
		afk: e.data("afk") || !1,
		muted: e.data("meta") && e.data("meta").muted || !1
	}
})), userlistStore = createUserlistStore();
var defaultAppState = { version: "" };
const appStore = ((e) => {
	let { subscribe: r, set: i, update: a } = writable({
		...defaultAppState,
		...e
	});
	return {
		subscribe: r,
		init: (e) => i(e),
		updateVersion: (e) => a((r) => ({
			...r,
			version: e
		})),
		resetVersion: () => a((e) => ({
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
	let { subscribe: r, set: i, update: a } = writable({
		...defaultClientState,
		...e
	});
	return {
		subscribe: r,
		init: (e) => i(e),
		updateName: (e) => a((r) => ({
			...r,
			name: e
		})),
		resetName: () => a((e) => ({
			...e,
			name: defaultClientState.name
		})),
		updateLoggedIn: (e) => a((r) => ({
			...r,
			logged_in: e
		})),
		resetLoggedIn: () => a((e) => ({
			...e,
			logged_in: defaultClientState.logged_in
		})),
		updateRank: (e) => a((r) => ({
			...r,
			rank: e
		})),
		resetRank: () => a((e) => ({
			...e,
			rank: defaultClientState.rank
		}))
	};
})();
var defaultPageState = { csrf: "" };
const pageStore = ((e) => {
	let { subscribe: r, set: i, update: a } = writable({
		...defaultPageState,
		...e
	});
	return {
		subscribe: r,
		init: (e) => i(e),
		updateCSRF: (e) => a((r) => ({
			...r,
			csrf: e
		})),
		resetCSRF: () => a((e) => ({
			...e,
			csrf: defaultPageState.csrf
		}))
	};
})();
var defaultSocketState = { connected: !0 };
const socketStore = ((e) => {
	let { subscribe: r, set: i, update: a } = writable({
		...defaultSocketState,
		...e
	});
	return {
		subscribe: r,
		init: (e) => i(e),
		updateConnected: (e) => a((r) => ({
			...r,
			connected: e
		})),
		resetConnected: () => a((e) => ({
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
	let r = e.item(0);
	if (!r) throw Error("no csrf element found");
	let i = r.value;
	if (!i) throw Error("no csrf value found");
	pageStore.init({ csrf: i });
}, initAppStore = () => (appStore.init({ version: window.VERSION }), appStore.subscribe((e) => {
	window.VERSION = e.version;
})), initSocketStore = () => {
	socketStore.init(socketClient), socketClient.on("connect", () => socketStore.updateConnected(socketClient.connected)), socketClient.on("disconnect", () => socketStore.updateConnected(socketClient.connected));
}, initUserlistStore = () => {
	let e = parseLegacyUserlist();
	userlistStore.init({ userlist: e }), subscribeSocketAddUser(userlistStore.addUser), subscribeSocketUserLeave(({ name: e }) => userlistStore.removeUser(e));
};
const initStores = () => {
	let e = initClientStore(), r = initAppStore();
	return initPageStore(), initSocketStore(), initUserlistStore(), () => {
		e(), r();
	};
};
var colorInfo = "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", legacyChatNotification = (e, r) => {
	let i = document.getElementById("messagebuffer");
	if (!i) return null;
	let a = document.createElement("div");
	return a.className = "server-msg-reconnect", a.style = `border: 1px ${r}`, a.textContent = e, i.appendChild(a), a;
};
const legacyChatInfo = (e) => legacyChatNotification(e, colorInfo), injectMainStylesheet = async () => new Promise((e, r) => {
	let i = new URL("dist/index.css", window.BASE_URL), a = document.createElement("link");
	a.rel = "stylesheet", a.type = "text/css", a.href = i.toString(), a.onload = () => requestAnimationFrame(() => e()), a.onerror = () => requestAnimationFrame(() => r()), document.head.appendChild(a);
}), removeLegacyStylesheets = () => {
	for (let e of [
		"//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css",
		"/css/sticky-footer-navbar.css",
		"/css/videojs-resolution-switcher.css",
		"/css/video-js.css",
		"/css/cytube.css"
	]) {
		let r = document.querySelector(`link[href="${e}"]`);
		if (!r) return;
		r.remove();
	}
	document.getElementById("usertheme")?.remove();
};
var setChannelJS = (e) => {
	window.CHANNEL.js = e;
	let r = document.querySelector("#cs-jstext");
	if (r && (r.value = e), window.USEROPTS.ignore_channeljs) return;
	let i = document.createElement("script");
	i.id = "chanjs", i.type = "text/javascript", i.textContent = e, document.body.append(i);
}, setChannelCSS = (e) => {
	window.CHANNEL.css = e;
	let r = document.querySelector("#cs-csstext");
	if (r && (r.value = e), window.USEROPTS.ignore_channelcss) return;
	let i = document.createElement("style");
	i.id = "chancss", i.textContent = e, document.head.append(i);
}, overrideChannelJS = (e) => {
	let r = document.querySelector("#chanjs");
	if (!r) {
		setChannelJS(e);
		return;
	}
	r.textContent !== e && (r.remove(), setChannelJS(e));
}, overrideChannelCSS = (e) => {
	let r = document.querySelector("#chancss");
	if (!r) {
		setChannelCSS(e);
		return;
	}
	r.textContent !== e && (r.remove(), setChannelCSS(e));
}, overrideCallbacks = () => {
	window.Callbacks.channelCSSJS = ({ css: e, js: r }) => {
		e && overrideChannelCSS(e), r && overrideChannelJS(r);
	};
}, overrideFavicon = () => {
	let e = new URL("dist/favicon.ico", window.BASE_URL), r = document.createElement("link");
	r.href = e.toString(), r.type = "image/x-icon", r.rel = "shortcut icon", document.head.append(r);
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
	let r = e.__e;
	r !== void 0 && (e.__e = void 0, queueMicrotask(() => {
		e.isConnected && e.dispatchEvent(r);
	}));
}
function create_event(e, r, i, a = {}) {
	function o(e) {
		if (a.capture || handle_event_propagation.call(r, e), !e.cancelBubble) return without_reactive_context(() => i?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? queue_micro_task(() => {
		r.addEventListener(e, o, a);
	}) : r.addEventListener(e, o, a), o;
}
function on(e, r, i, a = {}) {
	var o = create_event(r, e, i, a);
	return () => {
		e.removeEventListener(r, o, a);
	};
}
function event(e, r, i, a, o) {
	var s = {
		capture: a,
		passive: o
	}, c = create_event(e, r, i, s);
	(r === document.body || r === window || r === document || r instanceof HTMLMediaElement) && teardown(() => {
		r.removeEventListener(e, c, s);
	});
}
function delegated(e, r, i) {
	(r[event_symbol] ??= {})[e] = i;
}
function delegate(e) {
	for (var r = 0; r < e.length; r++) all_registered_events.add(e[r]);
	for (var i of root_event_handles) i(e);
}
var last_propagated_event = null;
function handle_event_propagation(e) {
	var r = this, i = r.ownerDocument, a = e.type, o = e.composedPath?.() || [], s = o[0] || e.target;
	last_propagated_event = e;
	var c = 0, u = last_propagated_event === e && e[event_symbol];
	if (u) {
		var d = o.indexOf(u);
		if (d !== -1 && (r === document || r === window)) {
			e[event_symbol] = r;
			return;
		}
		var f = o.indexOf(r);
		if (f === -1) return;
		d <= f && (c = d);
	}
	if (s = o[c] || e.target, s !== r) {
		define_property(e, "currentTarget", {
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
					v != null && (!s.disabled || e.target === s) && v.call(s, e);
				} catch (e) {
					h ? g.push(e) : h = e;
				}
				if (e.cancelBubble || _ === r || _ === null) break;
				s = _;
			}
			if (h) {
				for (let e of g) queueMicrotask(() => {
					throw e;
				});
				throw h;
			}
		} finally {
			e[event_symbol] = r, delete e.currentTarget, set_active_reaction(p), set_active_effect(m);
		}
	}
}
var policy = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function create_trusted_html(e) {
	return policy?.createHTML(e) ?? e;
}
function create_fragment_from_html(e) {
	var r = create_element("template");
	return r.innerHTML = create_trusted_html(e.replaceAll("<!>", "<!---->")), r.content;
}
function assign_nodes(e, r) {
	var i = active_effect;
	i.nodes === null && (i.nodes = {
		start: e,
		end: r,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function from_html(e, r) {
	var i = (r & 1) != 0, a = (r & 2) != 0, o, s = !e.startsWith("<!>");
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		o === void 0 && (o = create_fragment_from_html(s ? e : "<!>" + e), i || (o = /* @__PURE__ */ get_first_child(o)));
		var r = a || is_firefox ? document.importNode(o, !0) : o.cloneNode(!0);
		if (i) {
			var c = /* @__PURE__ */ get_first_child(r), l = r.lastChild;
			assign_nodes(c, l);
		} else assign_nodes(r, r);
		return r;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function from_namespace(e, r, i = "svg") {
	var a = !e.startsWith("<!>"), o = (r & 1) != 0, s = `<${i}>${a ? e : "<!>" + e}</${i}>`, c;
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		if (!c) {
			var e = /* @__PURE__ */ get_first_child(create_fragment_from_html(s));
			if (o) for (c = document.createDocumentFragment(); /* @__PURE__ */ get_first_child(e);) c.appendChild(/* @__PURE__ */ get_first_child(e));
			else c = /* @__PURE__ */ get_first_child(e);
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
function from_svg(e, r) {
	return /* @__PURE__ */ from_namespace(e, r, "svg");
}
function text(e = "") {
	if (!hydrating) {
		var r = create_text(e + "");
		return assign_nodes(r, r), r;
	}
	var i = hydrate_node;
	return i.nodeType === 3 ? merge_text_nodes(i) : (i.before(i = create_text()), set_hydrate_node(i)), assign_nodes(i, i), i;
}
function comment() {
	if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
	var e = document.createDocumentFragment(), r = document.createComment(""), i = create_text();
	return e.append(r, i), assign_nodes(r, i), e;
}
function append(e, r) {
	if (hydrating) {
		var i = active_effect;
		(!(i.f & 32768) || i.nodes.end === null) && (i.nodes.end = hydrate_node), hydrate_next();
		return;
	}
	e !== null && e.before(r);
}
function props_id() {
	if (hydrating && hydrate_node && hydrate_node.nodeType === 8 && hydrate_node.textContent?.startsWith("$")) {
		let e = hydrate_node.textContent.substring(1);
		return hydrate_next(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
let should_intro = !0;
function set_text(e, r) {
	var i = r == null ? "" : typeof r == "object" ? `${r}` : r;
	i !== (e.__t ??= e.nodeValue) && (e.__t = i, e.nodeValue = `${i}`);
}
function mount(e, r) {
	return _mount(e, r);
}
var listeners = /* @__PURE__ */ new Map();
function _mount(e, { target: r, anchor: i, props: a = {}, events: o, context: s, intro: l = !0, transformError: u }) {
	init_operations();
	var d = void 0, f = component_root(() => {
		var f = i ?? r.appendChild(create_text());
		boundary(f, { pending: () => {} }, (r) => {
			push({});
			var i = component_context;
			if (s && (i.c = s), o && (a.$$events = o), hydrating && assign_nodes(r, null), should_intro = l, d = e(r, a) || {}, should_intro = !0, hydrating && (active_effect.nodes.end = hydrate_node, hydrate_node === null || hydrate_node.nodeType !== 8 || hydrate_node.data !== "]")) throw hydration_mismatch(), HYDRATION_ERROR;
			pop();
		}, u);
		var p = /* @__PURE__ */ new Set(), m = (e) => {
			for (var i = 0; i < e.length; i++) {
				var a = e[i];
				if (!p.has(a)) {
					p.add(a);
					var o = is_passive_event(a);
					for (let e of [r, document]) {
						var s = listeners.get(e);
						s === void 0 && (s = /* @__PURE__ */ new Map(), listeners.set(e, s));
						var c = s.get(a);
						c === void 0 ? (e.addEventListener(a, handle_event_propagation, { passive: o }), s.set(a, 1)) : s.set(a, c + 1);
					}
				}
			}
		};
		return m(array_from(all_registered_events)), root_event_handles.add(m), () => {
			for (var e of p) for (let i of [r, document]) {
				var a = listeners.get(i), o = a.get(e);
				--o == 0 ? (i.removeEventListener(e, handle_event_propagation), a.delete(e), a.size === 0 && listeners.delete(i)) : a.set(e, o);
			}
			root_event_handles.delete(m), f !== i && f.parentNode?.removeChild(f);
		};
	});
	return mounted_components.set(d, f), d;
}
var mounted_components = /* @__PURE__ */ new WeakMap(), BranchManager = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, r = !0) {
		this.anchor = e, this.#i = r;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var r = this.#e.get(e), i = this.#t.get(r);
			if (i) resume_effect(i), this.#r.delete(r);
			else {
				var a = this.#n.get(r);
				a && (this.#t.set(r, a.effect), this.#n.delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), i = a.effect);
			}
			for (let [r, i] of this.#e) {
				if (this.#e.delete(r), r === e) break;
				let a = this.#n.get(i);
				a && (destroy_effect(a.effect), this.#n.delete(i));
			}
			for (let [e, a] of this.#t) {
				if (e === r || this.#r.has(e)) continue;
				let o = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var r = document.createDocumentFragment();
						move_effect(a, r), r.append(create_text()), this.#n.set(e, {
							effect: a,
							fragment: r
						});
					} else destroy_effect(a);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !i ? (this.#r.add(e), pause_effect(a, o, !1)) : o();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let r = Array.from(this.#e.values());
		for (let [e, i] of this.#n) r.includes(e) || (destroy_effect(i.effect), this.#n.delete(e));
	};
	ensure(e, r) {
		var i = current_batch, a = should_defer_append();
		if (r && !this.#t.has(e) && !this.#n.has(e)) if (a) {
			var o = document.createDocumentFragment(), s = create_text();
			o.append(s), this.#n.set(e, {
				effect: branch(() => r(s)),
				fragment: o
			});
		} else this.#t.set(e, branch(() => r(this.anchor)));
		if (this.#e.set(i, e), a) {
			for (let [r, a] of this.#t) r === e ? i.unskip_effect(a) : i.skip_effect(a);
			for (let [r, a] of this.#n) r === e ? i.unskip_effect(a.effect) : i.skip_effect(a.effect);
			i.oncommit(this.#a), i.ondiscard(this.#o);
		} else hydrating && (this.anchor = hydrate_node), this.#a(i);
	}
};
function if_block(e, r, i = !1) {
	var a;
	hydrating && (a = hydrate_node, hydrate_next());
	var o = new BranchManager(e), s = i ? EFFECT_TRANSPARENT : 0;
	function c(e, r) {
		if (hydrating) {
			var i = read_hydration_instruction(a);
			if (e !== parseInt(i.substring(1))) {
				var s = skip_nodes();
				set_hydrate_node(s), o.anchor = s, set_hydrating(!1), o.ensure(e, r), set_hydrating(!0);
				return;
			}
		}
		o.ensure(e, r);
	}
	block(() => {
		var e = !1;
		r((r, i = 0) => {
			e = !0, c(i, r);
		}), e || c(-1, null);
	}, s);
}
function pause_effects(e, r, i) {
	for (var a = [], o = r.length, s, l = r.length, u = 0; u < o; u++) {
		let i = r[u];
		pause_effect(i, () => {
			if (s) {
				if (s.pending.delete(i), s.done.add(i), s.pending.size === 0) {
					var r = e.outrogroups;
					destroy_effects(e, array_from(s.done)), r.delete(s), r.size === 0 && (e.outrogroups = null);
				}
			} else --l;
		}, !1);
	}
	if (l === 0) {
		var d = a.length === 0 && i !== null;
		if (d) {
			var f = i, p = f.parentNode;
			clear_text_content(p), p.append(f), e.items.clear();
		}
		destroy_effects(e, r, !d);
	} else s = {
		pending: new Set(r),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(s);
}
function destroy_effects(e, r, i = !0) {
	var a;
	if (e.pending.size > 0) {
		a = /* @__PURE__ */ new Set();
		for (let r of e.pending.values()) for (let i of r) a.add(e.items.get(i).e);
	}
	for (var o = 0; o < r.length; o++) {
		var s = r[o];
		a?.has(s) ? (s.f |= EFFECT_OFFSCREEN, move_effect(s, document.createDocumentFragment())) : destroy_effect(r[o], i);
	}
}
var offscreen_anchor;
function each(e, r, i, o, s, l = null) {
	var u = e, d = /* @__PURE__ */ new Map();
	if (r & 4) {
		var f = e;
		u = hydrating ? set_hydrate_node(/* @__PURE__ */ get_first_child(f)) : f.appendChild(create_text());
	}
	hydrating && hydrate_next();
	var p = null, m = /* @__PURE__ */ derived_safe_equal(() => {
		var e = i();
		return is_array(e) ? e : e == null ? [] : array_from(e);
	}), h, g = /* @__PURE__ */ new Map(), _ = !0;
	function v(e) {
		b.effect.f & 16384 || (b.pending.delete(e), b.fallback = p, reconcile(b, h, u, r, o), p !== null && (h.length === 0 ? p.f & 33554432 ? (p.f ^= EFFECT_OFFSCREEN, move(p, null, u)) : resume_effect(p) : pause_effect(p, () => {
			p = null;
		})));
	}
	function y(e) {
		b.pending.delete(e);
	}
	var b = {
		effect: block(() => {
			h = get$1(m);
			var e = h.length;
			let a = !1;
			hydrating && read_hydration_instruction(u) === "[!" != (e === 0) && (u = skip_nodes(), set_hydrate_node(u), set_hydrating(!1), a = !0);
			for (var c = /* @__PURE__ */ new Set(), f = current_batch, b = should_defer_append(), x = 0; x < e; x += 1) {
				hydrating && hydrate_node.nodeType === 8 && hydrate_node.data === "]" && (u = hydrate_node, a = !0, set_hydrating(!1));
				var S = h[x], C = o(S, x), w = _ ? null : d.get(C);
				w ? (w.v && internal_set(w.v, S), w.i && internal_set(w.i, x), b && f.unskip_effect(w.e)) : (w = create_item(d, _ ? u : offscreen_anchor ??= create_text(), S, C, x, s, r, i), _ || (w.e.f |= EFFECT_OFFSCREEN), d.set(C, w)), c.add(C);
			}
			if (e === 0 && l && !p && (_ ? p = branch(() => l(u)) : (p = branch(() => l(offscreen_anchor ??= create_text())), p.f |= EFFECT_OFFSCREEN)), e > c.size && each_key_duplicate("", "", ""), hydrating && e > 0 && set_hydrate_node(skip_nodes()), !_) if (g.set(f, c), b) {
				for (let [e, r] of d) c.has(e) || f.skip_effect(r.e);
				f.oncommit(v), f.ondiscard(y);
			} else v(f);
			a && set_hydrating(!0), get$1(m);
		}),
		flags: r,
		items: d,
		pending: g,
		outrogroups: null,
		fallback: p
	};
	_ = !1, hydrating && (u = hydrate_node);
}
function skip_to_branch(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function reconcile(e, r, i, a, o) {
	var s = (a & 8) != 0, l = r.length, u = e.items, d = skip_to_branch(e.effect.first), f, p = null, m, h = [], g = [], _, v, y, b;
	if (s) for (b = 0; b < l; b += 1) _ = r[b], v = o(_, b), y = u.get(v).e, y.f & 33554432 || (y.nodes?.a?.measure(), (m ??= /* @__PURE__ */ new Set()).add(y));
	for (b = 0; b < l; b += 1) {
		if (_ = r[b], v = o(_, b), y = u.get(v).e, e.outrogroups !== null) for (let r of e.outrogroups) r.pending.delete(y), r.done.delete(y);
		if (y.f & 8192 && (resume_effect(y), s && (y.nodes?.a?.unfix(), (m ??= /* @__PURE__ */ new Set()).delete(y))), y.f & 33554432) if (y.f ^= EFFECT_OFFSCREEN, y === d) move(y, null, i);
		else {
			var x = p ? p.next : d;
			y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), link(e, p, y), link(e, y, x), move(y, x, i), p = y, h = [], g = [], d = skip_to_branch(p.next);
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
					link(e, w.prev, T.next), link(e, p, w), link(e, T, S), d = S, p = T, --b, h = [], g = [];
				} else f.delete(y), move(y, d, i), link(e, y.prev, y.next), link(e, y, p === null ? e.effect.first : p.next), link(e, p, y), p = y;
				continue;
			}
			for (h = [], g = []; d !== null && d !== y;) (f ??= /* @__PURE__ */ new Set()).add(d), g.push(d), d = skip_to_branch(d.next);
			if (d === null) continue;
		}
		y.f & 33554432 || h.push(y), p = y, d = skip_to_branch(y.next);
	}
	if (e.outrogroups !== null) {
		for (let r of e.outrogroups) r.pending.size === 0 && (destroy_effects(e, array_from(r.done)), e.outrogroups?.delete(r));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (d !== null || f !== void 0) {
		var E = [];
		if (f !== void 0) for (y of f) y.f & 8192 || E.push(y);
		for (; d !== null;) !(d.f & 8192) && d !== e.fallback && E.push(d), d = skip_to_branch(d.next);
		var D = E.length;
		if (D > 0) {
			var O = a & 4 && l === 0 ? i : null;
			if (s) {
				for (b = 0; b < D; b += 1) E[b].nodes?.a?.measure();
				for (b = 0; b < D; b += 1) E[b].nodes?.a?.fix();
			}
			pause_effects(e, E, O);
		}
	}
	s && queue_micro_task(() => {
		if (m !== void 0) for (y of m) y.nodes?.a?.apply();
	});
}
function create_item(e, r, i, a, o, s, c, l) {
	var u = c & 1 ? c & 16 ? source(i) : /* @__PURE__ */ mutable_source(i, !1, !1) : null, d = c & 2 ? source(o) : null;
	return {
		v: u,
		i: d,
		e: branch(() => (s(r, u ?? i, d ?? o, l), () => {
			e.delete(a);
		}))
	};
}
function move(e, r, i) {
	if (e.nodes) for (var a = e.nodes.start, o = e.nodes.end, s = r && !(r.f & 33554432) ? r.nodes.start : i; a !== null;) {
		var c = /* @__PURE__ */ get_next_sibling(a);
		if (s.before(a), a === o) return;
		a = c;
	}
}
function link(e, r, i) {
	r === null ? e.effect.first = i : r.next = i, i === null ? e.effect.last = r : i.prev = r;
}
function snippet(e, r, ...i) {
	var a = new BranchManager(e);
	block(() => {
		let e = r() ?? null;
		a.ensure(e, e && ((r) => e(r, ...i)));
	}, EFFECT_TRANSPARENT);
}
function component(e, r, i) {
	var a;
	hydrating && (a = hydrate_node, hydrate_next());
	var o = new BranchManager(e);
	block(() => {
		var e = r() ?? null;
		if (hydrating && read_hydration_instruction(a) === "[" != (e !== null)) {
			var s = skip_nodes();
			set_hydrate_node(s), o.anchor = s, set_hydrating(!1), o.ensure(e, e && ((r) => i(r, e))), set_hydrating(!0);
			return;
		}
		o.ensure(e, e && ((r) => i(r, e)));
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
	raf.tasks.forEach((r) => {
		r.c(e) || (raf.tasks.delete(r), r.f());
	}), raf.tasks.size !== 0 && raf.tick(run_tasks);
}
function loop(e) {
	let r;
	return raf.tasks.size === 0 && raf.tick(run_tasks), {
		promise: new Promise((i) => {
			raf.tasks.add(r = {
				c: e,
				f: i
			});
		}),
		abort() {
			raf.tasks.delete(r);
		}
	};
}
function dispatch_event(e, r) {
	without_reactive_context(() => {
		e.dispatchEvent(new CustomEvent(r));
	});
}
function css_property_to_camelcase(e) {
	if (e === "float") return "cssFloat";
	if (e === "offset") return "cssOffset";
	if (e.startsWith("--")) return e;
	let r = e.split("-");
	return r.length === 1 ? r[0] : r[0] + r.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
function css_to_keyframe(e) {
	let r = {}, i = e.split(";");
	for (let e of i) {
		let [i, a] = e.split(":");
		if (!i || a === void 0) break;
		let o = css_property_to_camelcase(i.trim());
		r[o] = a.trim();
	}
	return r;
}
var linear$1 = (e) => e, animation_effect_override = null;
function animation(e, r, i) {
	var a = (animation_effect_override ?? active_effect).nodes, o, s, c, l = null;
	a.a ??= {
		element: e,
		measure() {
			o = this.element.getBoundingClientRect();
		},
		apply() {
			if (c?.abort(), s = this.element.getBoundingClientRect(), o.left !== s.left || o.right !== s.right || o.top !== s.top || o.bottom !== s.bottom) {
				let e = r()(this.element, {
					from: o,
					to: s
				}, i?.());
				c = animate(this.element, e, void 0, 1, () => {}, () => {
					c?.abort(), c = void 0;
				});
			}
		},
		fix() {
			if (!e.getAnimations().length) {
				var { position: r, width: i, height: a } = getComputedStyle(e);
				if (r !== "absolute" && r !== "fixed") {
					var s = e.style;
					l = {
						position: s.position,
						width: s.width,
						height: s.height,
						transform: s.transform
					}, s.position = "absolute", s.width = i, s.height = a;
					var c = e.getBoundingClientRect();
					if (o.left !== c.left || o.top !== c.top) {
						var u = `translate(${o.left - c.left}px, ${o.top - c.top}px)`;
						s.transform = s.transform ? `${s.transform} ${u}` : u;
					}
				}
			}
		},
		unfix() {
			if (l) {
				var r = e.style;
				r.position = l.position, r.width = l.width, r.height = l.height, r.transform = l.transform;
			}
		}
	}, a.a.element = e;
}
function transition(e, r, i, a) {
	var o = (e & 1) != 0, s = (e & 2) != 0, c = o && s, l = (e & 4) != 0, u = c ? "both" : o ? "in" : "out", d, f = r.inert, p = r.style.overflow, m, h;
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
		out(e) {
			if (!s) {
				e?.(), d = void 0;
				return;
			}
			r.inert = !0, h = animate(r, g(), m, 0, () => {
				dispatch_event(r, "outrostart");
			}, () => {
				dispatch_event(r, "outroend"), e?.();
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
function animate(e, r, i, a, o, s) {
	var c = a === 1;
	if (is_function(r)) {
		var l, u = !1;
		return queue_micro_task(() => {
			u || (l = animate(e, r({ direction: c ? "in" : "out" }), i, a, o, s));
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
		abort: noop$1,
		deactivate: noop$1,
		reset: noop$1,
		t: () => a
	};
	let { delay: d = 0, css: f, tick: p, easing: m = linear$1 } = r;
	var h = [];
	if (c && i === void 0 && (p && p(0, 1), f)) {
		var v = css_to_keyframe(f(0, 1));
		h.push(v, v);
	}
	var y = () => 1 - a, b = e.animate(h, {
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
			h && (e.style.overflow = "hidden"), y = () => {
				var e = b.currentTime;
				return c + l * m(e / u);
			}, p && loop(() => {
				if (b.playState !== "running") return !1;
				var e = y();
				return p(e, 1 - e), !0;
			});
		}
		b = e.animate(d, {
			duration: u,
			fill: "forwards"
		}), b.onfinish = () => {
			y = () => a, p?.(a, 1 - a), s();
		};
	}, {
		abort: () => {
			b && (b.cancel(), b.effect = null, b.onfinish = noop$1);
		},
		deactivate: () => {
			s = noop$1;
		},
		reset: () => {
			a === 0 && p?.(1, 0);
		},
		t: () => y()
	};
}
function attach(e, r) {
	var i = void 0, a;
	managed(() => {
		i !== (i = r()) && (a &&= (destroy_effect(a), null), i && (a = branch(() => {
			effect(() => i(e));
		})));
	});
}
function r$1(e) {
	var r, i, a = "";
	if (typeof e == "string" || typeof e == "number") a += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var o = e.length;
		for (r = 0; r < o; r++) e[r] && (i = r$1(e[r])) && (a && (a += " "), a += i);
	} else for (i in e) e[i] && (a && (a += " "), a += i);
	return a;
}
function clsx() {
	for (var e, r, i = 0, a = "", o = arguments.length; i < o; i++) (e = arguments[i]) && (r = r$1(e)) && (a && (a += " "), a += r);
	return a;
}
function clsx$1(e) {
	return typeof e == "object" ? clsx(e) : e ?? "";
}
var whitespace = [..." 	\n\r\f\xA0\v﻿"];
function to_class(e, r, i) {
	var a = e == null ? "" : "" + e;
	if (r && (a = a ? a + " " + r : r), i) {
		for (var o of Object.keys(i)) if (i[o]) a = a ? a + " " + o : o;
		else if (a.length) for (var s = o.length, c = 0; (c = a.indexOf(o, c)) >= 0;) {
			var l = c + s;
			(c === 0 || whitespace.includes(a[c - 1])) && (l === a.length || whitespace.includes(a[l])) ? a = (c === 0 ? "" : a.substring(0, c)) + a.substring(l + 1) : c = l;
		}
	}
	return a === "" ? null : a;
}
function append_styles(e, r = !1) {
	var i = r ? " !important;" : ";", a = "";
	for (var o of Object.keys(e)) {
		var s = e[o];
		s != null && s !== "" && (a += " " + o + ": " + s + i);
	}
	return a;
}
function to_css_name(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function to_style(e, r) {
	if (r) {
		var i = "", a, o;
		if (Array.isArray(r) ? (a = r[0], o = r[1]) : a = r, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var s = !1, c = 0, l = !1, u = [];
			a && u.push(...Object.keys(a).map(to_css_name)), o && u.push(...Object.keys(o).map(to_css_name));
			var d = 0, f = -1;
			let r = e.length;
			for (var p = 0; p < r; p++) {
				var m = e[p];
				if (l ? m === "/" && e[p - 1] === "*" && (l = !1) : s ? s === m && (s = !1) : m === "/" && e[p + 1] === "*" ? l = !0 : m === "\"" || m === "'" ? s = m : m === "(" ? c++ : m === ")" && c--, !l && s === !1 && c === 0) {
					if (m === ":" && f === -1) f = p;
					else if (m === ";" || p === r - 1) {
						if (f !== -1) {
							var h = to_css_name(e.substring(d, f).trim());
							if (!u.includes(h)) {
								m !== ";" && p++;
								var g = e.substring(d, p).trim();
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
	return e == null ? null : String(e);
}
function set_class(e, r, i, a, o, s) {
	var c = e.__className;
	if (hydrating || c !== i || c === void 0) {
		var l = to_class(i, a, s);
		(!hydrating || l !== e.getAttribute("class")) && (l == null ? e.removeAttribute("class") : r ? e.className = l : e.setAttribute("class", l)), e.__className = i;
	} else if (s && o !== s) for (var u in s) {
		var d = !!s[u];
		(o == null || d !== !!o[u]) && e.classList.toggle(u, d);
	}
	return s;
}
function update_styles(e, r = {}, i, a) {
	for (var o in i) {
		var s = i[o];
		r[o] !== s && (i[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, s, a));
	}
}
function set_style(e, r, i, a) {
	var o = e.__style;
	if (hydrating || o !== r) {
		var s = to_style(r, a);
		(!hydrating || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = r;
	} else a && (Array.isArray(a) ? (update_styles(e, i?.[0], a[0]), update_styles(e, i?.[1], a[1], "important")) : update_styles(e, i, a));
	return a;
}
function select_option(e, r, i = !1) {
	if (e.multiple) {
		if (r == null) return;
		if (!is_array(r)) return select_multiple_invalid_value();
		for (var o of e.options) o.selected = r.includes(get_option_value(o));
		return;
	}
	for (o of e.options) if (is$1(get_option_value(o), r)) {
		o.selected = !0;
		return;
	}
	(!i || r !== void 0) && (e.selectedIndex = -1);
}
function init_select(e) {
	var r = new MutationObserver(() => {
		select_option(e, e.__value);
	});
	r.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), teardown(() => {
		r.disconnect();
	});
}
function get_option_value(e) {
	return "__value" in e ? e.__value : e.value;
}
const CLASS = Symbol("class"), STYLE = Symbol("style");
var IS_CUSTOM_ELEMENT = Symbol("is custom element"), IS_HTML = Symbol("is html"), LINK_TAG = IS_XHTML ? "link" : "LINK", INPUT_TAG = IS_XHTML ? "input" : "INPUT", OPTION_TAG = IS_XHTML ? "option" : "OPTION", SELECT_TAG = IS_XHTML ? "select" : "SELECT";
function remove_input_defaults(e) {
	if (hydrating) {
		var r = !1, i = () => {
			if (!r) {
				if (r = !0, e.hasAttribute("value")) {
					var i = e.value;
					set_attribute(e, "value", null), e.value = i;
				}
				if (e.hasAttribute("checked")) {
					var a = e.checked;
					set_attribute(e, "checked", null), e.checked = a;
				}
			}
		};
		e.__on_r = i, queue_micro_task(i), add_form_reset_listener();
	}
}
function set_selected(e, r) {
	r ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function set_attribute(e, r, i, a) {
	var o = get_attributes(e);
	hydrating && (o[r] = e.getAttribute(r), r === "src" || r === "srcset" || r === "href" && e.nodeName === LINK_TAG) || o[r] !== (o[r] = i) && (r === "loading" && (e[LOADING_ATTR_SYMBOL] = i), i == null ? e.removeAttribute(r) : typeof i != "string" && get_setters(e).includes(r) ? e[r] = i : e.setAttribute(r, i));
}
function set_attributes(e, r, i, a, o = !1, s = !1) {
	if (hydrating && o && e.nodeName === INPUT_TAG) {
		var c = e;
		(c.type === "checkbox" ? "defaultChecked" : "defaultValue") in i || remove_input_defaults(c);
	}
	var l = get_attributes(e), u = l[IS_CUSTOM_ELEMENT], d = !l[IS_HTML];
	let f = hydrating && u;
	f && set_hydrating(!1);
	var p = r || {}, m = e.nodeName === OPTION_TAG;
	for (var h in r) h in i || (i[h] = null);
	i.class ? i.class = clsx$1(i.class) : (a || i[CLASS]) && (i.class = null), i[STYLE] && (i.style ??= null);
	var g = get_setters(e);
	for (let o in i) {
		let c = i[o];
		if (m && o === "value" && c == null) {
			e.value = e.__value = "", p[o] = c;
			continue;
		}
		if (o === "class") {
			set_class(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", c, a, r?.[CLASS], i[CLASS]), p[o] = c, p[CLASS] = i[CLASS];
			continue;
		}
		if (o === "style") {
			set_style(e, c, r?.[STYLE], i[STYLE]), p[o] = c, p[STYLE] = i[STYLE];
			continue;
		}
		var _ = p[o];
		if (!(c === _ && !(c === void 0 && e.hasAttribute(o)))) {
			p[o] = c;
			var v = o[0] + o[1];
			if (v !== "$$") if (v === "on") {
				let r = {}, i = "$$" + o, a = o.slice(2);
				var y = can_delegate_event(a);
				if (is_capture_event(a) && (a = a.slice(0, -7), r.capture = !0), !y && _) {
					if (c != null) continue;
					e.removeEventListener(a, p[i], r), p[i] = null;
				}
				if (y) delegated(a, e, c), delegate([a]);
				else if (c != null) {
					function s(e) {
						p[o].call(this, e);
					}
					p[i] = create_event(a, e, s, r);
				}
			} else if (o === "style") set_attribute(e, o, c);
			else if (o === "autofocus") autofocus(e, !!c);
			else if (!u && (o === "__value" || o === "value" && c != null)) e.value = e.__value = c;
			else if (o === "selected" && m) set_selected(e, c);
			else {
				var b = o;
				d || (b = normalize_attribute(b));
				var x = b === "defaultValue" || b === "defaultChecked";
				if (c == null && !u && !x) if (l[o] = null, b === "value" || b === "checked") {
					let i = e, a = r === void 0;
					if (b === "value") {
						let e = i.defaultValue;
						i.removeAttribute(b), i.defaultValue = e, i.value = i.__value = a ? e : null;
					} else {
						let e = i.defaultChecked;
						i.removeAttribute(b), i.defaultChecked = e, i.checked = a ? e : !1;
					}
				} else e.removeAttribute(o);
				else x || g.includes(b) && (u || typeof c != "string") ? (e[b] = c, b in l && (l[b] = UNINITIALIZED)) : typeof c != "function" && set_attribute(e, b, c, s);
			}
		}
	}
	return f && set_hydrating(!0), p;
}
function attribute_effect(e, r, i = [], a = [], o = [], s, c = !1, l = !1) {
	flatten(o, i, a, (i) => {
		var a = void 0, o = {}, u = e.nodeName === SELECT_TAG, d = !1;
		if (managed(() => {
			var f = r(...i.map(get$1)), p = set_attributes(e, a, f, s, c, l);
			d && u && "value" in f && select_option(e, f.value);
			for (let e of Object.getOwnPropertySymbols(o)) f[e] || destroy_effect(o[e]);
			for (let r of Object.getOwnPropertySymbols(f)) {
				var m = f[r];
				r.description === "@attach" && (!a || m !== a[r]) && (o[r] && destroy_effect(o[r]), o[r] = branch(() => attach(e, () => m))), p[r] = m;
			}
			a = p;
		}), u) {
			var f = e;
			effect(() => {
				select_option(f, a.value, !0), init_select(f);
			});
		}
		d = !0;
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
	var r = e.getAttribute("is") || e.nodeName, i = setters_cache.get(r);
	if (i) return i;
	setters_cache.set(r, i = []);
	for (var a, o = e, s = Element.prototype; s !== o;) {
		for (var c in a = get_descriptors(o), a) a[c].set && i.push(c);
		o = get_prototype_of(o);
	}
	return i;
}
function bind_value(e, r, i = r) {
	var a = /* @__PURE__ */ new WeakSet();
	listen_to_event_and_reset_event(e, "input", async (o) => {
		var s = o ? e.defaultValue : e.value;
		if (s = is_numberlike_input(e) ? to_number(s) : s, i(s), current_batch !== null && a.add(current_batch), await tick(), s !== (s = r())) {
			var c = e.selectionStart, l = e.selectionEnd, u = e.value.length;
			if (e.value = s ?? "", l !== null) {
				var d = e.value.length;
				c === l && l === u && d > u ? (e.selectionStart = d, e.selectionEnd = d) : (e.selectionStart = c, e.selectionEnd = Math.min(l, d));
			}
		}
	}), (hydrating && e.defaultValue !== e.value || untrack(r) == null && e.value) && (i(is_numberlike_input(e) ? to_number(e.value) : e.value), current_batch !== null && a.add(current_batch)), render_effect(() => {
		var i = r();
		if (e === document.activeElement) {
			var o = current_batch;
			if (a.has(o)) return;
		}
		is_numberlike_input(e) && i === to_number(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
	});
}
function is_numberlike_input(e) {
	var r = e.type;
	return r === "number" || r === "range";
}
function to_number(e) {
	return e === "" ? null : +e;
}
function bind_files(e, r, i = r) {
	listen_to_event_and_reset_event(e, "change", () => {
		i(e.files);
	}), hydrating && e.files && i(e.files), render_effect(() => {
		e.files = r();
	});
}
function is_bound_this(e, r) {
	return e === r || e?.[STATE_SYMBOL] === r;
}
function bind_this(e = {}, r, i, a) {
	var o = component_context.r, s = active_effect;
	return effect(() => {
		var c, l;
		return render_effect(() => {
			c = l, l = a?.() || [], untrack(() => {
				e !== i(...l) && (r(e, ...l), c && is_bound_this(i(...c), e) && r(null, ...c));
			});
		}), () => {
			let a = s;
			for (; a !== o && a.parent !== null && a.parent.f & 33554432;) a = a.parent;
			let c = () => {
				l && is_bound_this(i(...l), e) && r(null, ...l);
			}, u = a.teardown;
			a.teardown = () => {
				c(), u?.();
			};
		};
	}), e;
}
function init$1(e = !1) {
	let r = component_context, i = r.l.u;
	if (!i) return;
	let a = () => deep_read_state(r.s);
	if (e) {
		let e = 0, i = {}, o = /* @__PURE__ */ derived(() => {
			let a = !1, o = r.s;
			for (let e in o) o[e] !== i[e] && (i[e] = o[e], a = !0);
			return a && e++, e;
		});
		a = () => get$1(o);
	}
	i.b.length && user_pre_effect(() => {
		observe_all(r, a), run_all(i.b);
	}), user_effect(() => {
		let e = untrack(() => i.m.map(run));
		return () => {
			for (let r of e) typeof r == "function" && r();
		};
	}), i.a.length && user_effect(() => {
		observe_all(r, a), run_all(i.a);
	});
}
function observe_all(e, r) {
	if (e.l.s) for (let r of e.l.s) get$1(r);
	r();
}
var rest_props_handler = {
	get(e, r) {
		if (!e.exclude.includes(r)) return e.props[r];
	},
	set(e, r) {
		return !1;
	},
	getOwnPropertyDescriptor(e, r) {
		if (!e.exclude.includes(r) && r in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[r]
		};
	},
	has(e, r) {
		return e.exclude.includes(r) ? !1 : r in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
	}
};
/* @__NO_SIDE_EFFECTS__ */
function rest_props(e, r, i) {
	return new Proxy({
		props: e,
		exclude: r
	}, rest_props_handler);
}
var spread_props_handler = {
	get(e, r) {
		let i = e.props.length;
		for (; i--;) {
			let a = e.props[i];
			if (is_function(a) && (a = a()), typeof a == "object" && a && r in a) return a[r];
		}
	},
	set(e, r, i) {
		let a = e.props.length;
		for (; a--;) {
			let o = e.props[a];
			is_function(o) && (o = o());
			let s = get_descriptor(o, r);
			if (s && s.set) return s.set(i), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, r) {
		let i = e.props.length;
		for (; i--;) {
			let a = e.props[i];
			if (is_function(a) && (a = a()), typeof a == "object" && a && r in a) {
				let e = get_descriptor(a, r);
				return e && !e.configurable && (e.configurable = !0), e;
			}
		}
	},
	has(e, r) {
		if (r === STATE_SYMBOL || r === LEGACY_PROPS) return !1;
		for (let i of e.props) if (is_function(i) && (i = i()), i != null && r in i) return !0;
		return !1;
	},
	ownKeys(e) {
		let r = [];
		for (let i of e.props) if (is_function(i) && (i = i()), i) {
			for (let e in i) r.includes(e) || r.push(e);
			for (let e of Object.getOwnPropertySymbols(i)) r.includes(e) || r.push(e);
		}
		return r;
	}
};
function spread_props(...e) {
	return new Proxy({ props: e }, spread_props_handler);
}
function prop(e, r, i, a) {
	var o = !legacy_mode_flag || (i & 2) != 0, s = (i & 8) != 0, c = (i & 16) != 0, l = a, d = !0, f = () => (d && (d = !1, l = c ? untrack(a) : a), l);
	let p;
	if (s) {
		var m = STATE_SYMBOL in e || LEGACY_PROPS in e;
		p = get_descriptor(e, r)?.set ?? (m && r in e ? (i) => e[r] = i : void 0);
	}
	var h, g = !1;
	s ? [h, g] = capture_store_binding(() => e[r]) : h = e[r], h === void 0 && a !== void 0 && (h = f(), p && (o && props_invalid_value(r), p(h)));
	var _ = o ? () => {
		var i = e[r];
		return i === void 0 ? f() : (d = !0, i);
	} : () => {
		var i = e[r];
		return i !== void 0 && (l = void 0), i === void 0 ? l : i;
	};
	if (o && !(i & 4)) return _;
	if (p) {
		var v = e.$$legacy;
		return (function(e, r) {
			return arguments.length > 0 ? ((!o || !r || v || g) && p(r ? _() : e), e) : _();
		});
	}
	var y = !1, b = (i & 1 ? derived : derived_safe_equal)(() => (y = !1, _()));
	s && get$1(b);
	var x = active_effect;
	return (function(e, r) {
		if (arguments.length > 0) {
			let i = r ? get$1(b) : o && s ? proxy(e) : e;
			return set(b, i), y = !0, l !== void 0 && (l = i), e;
		}
		return is_destroying_effect && y || x.f & 16384 ? b.v : get$1(b);
	});
}
function onMount(e) {
	component_context === null && lifecycle_outside_component("onMount"), legacy_mode_flag && component_context.l !== null ? init_update_callbacks(component_context).m.push(e) : user_effect(() => {
		let r = untrack(e);
		if (typeof r == "function") return r;
	});
}
function init_update_callbacks(e) {
	var r = e.l;
	return r.u ??= {
		a: [],
		b: [],
		m: []
	};
}
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5"), enable_legacy_mode_flag();
var concatArrays = (e, r) => {
	let i = Array(e.length + r.length);
	for (let r = 0; r < e.length; r++) i[r] = e[r];
	for (let a = 0; a < r.length; a++) i[e.length + a] = r[a];
	return i;
}, createClassValidatorObject = (e, r) => ({
	classGroupId: e,
	validator: r
}), createClassPartObject = (e = /* @__PURE__ */ new Map(), r = null, i) => ({
	nextPart: e,
	validators: r,
	classGroupId: i
}), CLASS_PART_SEPARATOR = "-", EMPTY_CONFLICTS = [], ARBITRARY_PROPERTY_PREFIX = "arbitrary..", createClassGroupUtils = (e) => {
	let r = createClassMap(e), { conflictingClassGroups: i, conflictingClassGroupModifiers: a } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return getGroupIdForArbitraryProperty(e);
			let i = e.split(CLASS_PART_SEPARATOR);
			return getGroupRecursive(i, i[0] === "" && i.length > 1 ? 1 : 0, r);
		},
		getConflictingClassGroupIds: (e, r) => {
			if (r) {
				let r = a[e], o = i[e];
				return r ? o ? concatArrays(o, r) : r : o || EMPTY_CONFLICTS;
			}
			return i[e] || EMPTY_CONFLICTS;
		}
	};
}, getGroupRecursive = (e, r, i) => {
	if (e.length - r === 0) return i.classGroupId;
	let a = e[r], o = i.nextPart.get(a);
	if (o) {
		let i = getGroupRecursive(e, r + 1, o);
		if (i) return i;
	}
	let s = i.validators;
	if (s === null) return;
	let c = r === 0 ? e.join(CLASS_PART_SEPARATOR) : e.slice(r).join(CLASS_PART_SEPARATOR), l = s.length;
	for (let e = 0; e < l; e++) {
		let r = s[e];
		if (r.validator(c)) return r.classGroupId;
	}
}, getGroupIdForArbitraryProperty = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let r = e.slice(1, -1), i = r.indexOf(":"), a = r.slice(0, i);
	return a ? ARBITRARY_PROPERTY_PREFIX + a : void 0;
})(), createClassMap = (e) => {
	let { theme: r, classGroups: i } = e;
	return processClassGroups(i, r);
}, processClassGroups = (e, r) => {
	let i = createClassPartObject();
	for (let a in e) {
		let o = e[a];
		processClassesRecursively(o, i, a, r);
	}
	return i;
}, processClassesRecursively = (e, r, i, a) => {
	let o = e.length;
	for (let s = 0; s < o; s++) {
		let o = e[s];
		processClassDefinition(o, r, i, a);
	}
}, processClassDefinition = (e, r, i, a) => {
	if (typeof e == "string") {
		processStringDefinition(e, r, i);
		return;
	}
	if (typeof e == "function") {
		processFunctionDefinition(e, r, i, a);
		return;
	}
	processObjectDefinition(e, r, i, a);
}, processStringDefinition = (e, r, i) => {
	let a = e === "" ? r : getPart(r, e);
	a.classGroupId = i;
}, processFunctionDefinition = (e, r, i, a) => {
	if (isThemeGetter(e)) {
		processClassesRecursively(e(a), r, i, a);
		return;
	}
	r.validators === null && (r.validators = []), r.validators.push(createClassValidatorObject(i, e));
}, processObjectDefinition = (e, r, i, a) => {
	let o = Object.entries(e), s = o.length;
	for (let e = 0; e < s; e++) {
		let [s, c] = o[e];
		processClassesRecursively(c, getPart(r, s), i, a);
	}
}, getPart = (e, r) => {
	let i = e, a = r.split(CLASS_PART_SEPARATOR), o = a.length;
	for (let e = 0; e < o; e++) {
		let r = a[e], o = i.nextPart.get(r);
		o || (o = createClassPartObject(), i.nextPart.set(r, o)), i = o;
	}
	return i;
}, isThemeGetter = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, createLruCache = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let r = 0, i = Object.create(null), a = Object.create(null), o = (o, s) => {
		i[o] = s, r++, r > e && (r = 0, a = i, i = Object.create(null));
	};
	return {
		get(e) {
			let r = i[e];
			if (r !== void 0) return r;
			if ((r = a[e]) !== void 0) return o(e, r), r;
		},
		set(e, r) {
			e in i ? i[e] = r : o(e, r);
		}
	};
}, IMPORTANT_MODIFIER = "!", MODIFIER_SEPARATOR = ":", EMPTY_MODIFIERS = [], createResultObject = (e, r, i, a, o) => ({
	modifiers: e,
	hasImportantModifier: r,
	baseClassName: i,
	maybePostfixModifierPosition: a,
	isExternal: o
}), createParseClassName = (e) => {
	let { prefix: r, experimentalParseClassName: i } = e, a = (e) => {
		let r = [], i = 0, a = 0, o = 0, s, c = e.length;
		for (let l = 0; l < c; l++) {
			let c = e[l];
			if (i === 0 && a === 0) {
				if (c === MODIFIER_SEPARATOR) {
					r.push(e.slice(o, l)), o = l + 1;
					continue;
				}
				if (c === "/") {
					s = l;
					continue;
				}
			}
			c === "[" ? i++ : c === "]" ? i-- : c === "(" ? a++ : c === ")" && a--;
		}
		let l = r.length === 0 ? e : e.slice(o), u = l, d = !1;
		l.endsWith(IMPORTANT_MODIFIER) ? (u = l.slice(0, -1), d = !0) : l.startsWith(IMPORTANT_MODIFIER) && (u = l.slice(1), d = !0);
		let f = s && s > o ? s - o : void 0;
		return createResultObject(r, d, u, f);
	};
	if (r) {
		let e = r + MODIFIER_SEPARATOR, i = a;
		a = (r) => r.startsWith(e) ? i(r.slice(e.length)) : createResultObject(EMPTY_MODIFIERS, !1, r, void 0, !0);
	}
	if (i) {
		let e = a;
		a = (r) => i({
			className: r,
			parseClassName: e
		});
	}
	return a;
}, createSortModifiers = (e) => {
	let r = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, i) => {
		r.set(e, 1e6 + i);
	}), (e) => {
		let i = [], a = [];
		for (let o = 0; o < e.length; o++) {
			let s = e[o], c = s[0] === "[", l = r.has(s);
			c || l ? (a.length > 0 && (a.sort(), i.push(...a), a = []), i.push(s)) : a.push(s);
		}
		return a.length > 0 && (a.sort(), i.push(...a)), i;
	};
}, createConfigUtils = (e) => ({
	cache: createLruCache(e.cacheSize),
	parseClassName: createParseClassName(e),
	sortModifiers: createSortModifiers(e),
	...createClassGroupUtils(e)
}), SPLIT_CLASSES_REGEX = /\s+/, mergeClassList = (e, r) => {
	let { parseClassName: i, getClassGroupId: a, getConflictingClassGroupIds: o, sortModifiers: s } = r, c = [], l = e.trim().split(SPLIT_CLASSES_REGEX), u = "";
	for (let e = l.length - 1; e >= 0; --e) {
		let r = l[e], { isExternal: d, modifiers: f, hasImportantModifier: p, baseClassName: m, maybePostfixModifierPosition: h } = i(r);
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
		for (let e = 0; e < x.length; ++e) {
			let r = x[e];
			c.push(y + r);
		}
		u = r + (u.length > 0 ? " " + u : u);
	}
	return u;
}, twJoin = (...e) => {
	let r = 0, i, a, o = "";
	for (; r < e.length;) (i = e[r++]) && (a = toValue(i)) && (o && (o += " "), o += a);
	return o;
}, toValue = (e) => {
	if (typeof e == "string") return e;
	let r, i = "";
	for (let a = 0; a < e.length; a++) e[a] && (r = toValue(e[a])) && (i && (i += " "), i += r);
	return i;
}, createTailwindMerge = (e, ...r) => {
	let i, a, o, s, c = (c) => (i = createConfigUtils(r.reduce((e, r) => r(e), e())), a = i.cache.get, o = i.cache.set, s = l, l(c)), l = (e) => {
		let r = a(e);
		if (r) return r;
		let s = mergeClassList(e, i);
		return o(e, s), s;
	};
	return s = c, (...e) => s(twJoin(...e));
}, fallbackThemeArr = [], fromTheme = (e) => {
	let r = (r) => r[e] || fallbackThemeArr;
	return r.isThemeGetter = !0, r;
}, arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, isFraction = (e) => fractionRegex.test(e), isNumber = (e) => !!e && !Number.isNaN(Number(e)), isInteger = (e) => !!e && Number.isInteger(Number(e)), isPercent = (e) => e.endsWith("%") && isNumber(e.slice(0, -1)), isTshirtSize = (e) => tshirtUnitRegex.test(e), isAny = () => !0, isLengthOnly = (e) => lengthUnitRegex.test(e) && !colorFunctionRegex.test(e), isNever = () => !1, isShadow = (e) => shadowRegex.test(e), isImage = (e) => imageRegex.test(e), isAnyNonArbitrary = (e) => !isArbitraryValue(e) && !isArbitraryVariable(e), isArbitrarySize = (e) => getIsArbitraryValue(e, isLabelSize, isNever), isArbitraryValue = (e) => arbitraryValueRegex.test(e), isArbitraryLength = (e) => getIsArbitraryValue(e, isLabelLength, isLengthOnly), isArbitraryNumber = (e) => getIsArbitraryValue(e, isLabelNumber, isNumber), isArbitraryWeight = (e) => getIsArbitraryValue(e, isLabelWeight, isAny), isArbitraryFamilyName = (e) => getIsArbitraryValue(e, isLabelFamilyName, isNever), isArbitraryPosition = (e) => getIsArbitraryValue(e, isLabelPosition, isNever), isArbitraryImage = (e) => getIsArbitraryValue(e, isLabelImage, isImage), isArbitraryShadow = (e) => getIsArbitraryValue(e, isLabelShadow, isShadow), isArbitraryVariable = (e) => arbitraryVariableRegex.test(e), isArbitraryVariableLength = (e) => getIsArbitraryVariable(e, isLabelLength), isArbitraryVariableFamilyName = (e) => getIsArbitraryVariable(e, isLabelFamilyName), isArbitraryVariablePosition = (e) => getIsArbitraryVariable(e, isLabelPosition), isArbitraryVariableSize = (e) => getIsArbitraryVariable(e, isLabelSize), isArbitraryVariableImage = (e) => getIsArbitraryVariable(e, isLabelImage), isArbitraryVariableShadow = (e) => getIsArbitraryVariable(e, isLabelShadow, !0), isArbitraryVariableWeight = (e) => getIsArbitraryVariable(e, isLabelWeight, !0), getIsArbitraryValue = (e, r, i) => {
	let a = arbitraryValueRegex.exec(e);
	return a ? a[1] ? r(a[1]) : i(a[2]) : !1;
}, getIsArbitraryVariable = (e, r, i = !1) => {
	let a = arbitraryVariableRegex.exec(e);
	return a ? a[1] ? r(a[1]) : i : !1;
}, isLabelPosition = (e) => e === "position" || e === "percentage", isLabelImage = (e) => e === "image" || e === "url", isLabelSize = (e) => e === "length" || e === "size" || e === "bg-size", isLabelLength = (e) => e === "length", isLabelNumber = (e) => e === "number", isLabelFamilyName = (e) => e === "family-name", isLabelWeight = (e) => e === "number" || e === "weight", isLabelShadow = (e) => e === "shadow", getDefaultConfig = () => {
	let e = fromTheme("color"), r = fromTheme("font"), i = fromTheme("text"), a = fromTheme("font-weight"), o = fromTheme("tracking"), s = fromTheme("leading"), c = fromTheme("breakpoint"), l = fromTheme("container"), u = fromTheme("spacing"), d = fromTheme("radius"), f = fromTheme("shadow"), p = fromTheme("inset-shadow"), m = fromTheme("text-shadow"), h = fromTheme("drop-shadow"), g = fromTheme("blur"), _ = fromTheme("perspective"), v = fromTheme("aspect"), y = fromTheme("ease"), b = fromTheme("animate"), x = () => [
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
		e,
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
}, mergeConfigs = (e, { cacheSize: r, prefix: i, experimentalParseClassName: a, extend: o = {}, override: s = {} }) => (overrideProperty(e, "cacheSize", r), overrideProperty(e, "prefix", i), overrideProperty(e, "experimentalParseClassName", a), overrideConfigProperties(e.theme, s.theme), overrideConfigProperties(e.classGroups, s.classGroups), overrideConfigProperties(e.conflictingClassGroups, s.conflictingClassGroups), overrideConfigProperties(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), overrideProperty(e, "orderSensitiveModifiers", s.orderSensitiveModifiers), mergeConfigProperties(e.theme, o.theme), mergeConfigProperties(e.classGroups, o.classGroups), mergeConfigProperties(e.conflictingClassGroups, o.conflictingClassGroups), mergeConfigProperties(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), mergeArrayProperties(e, o, "orderSensitiveModifiers"), e), overrideProperty = (e, r, i) => {
	i !== void 0 && (e[r] = i);
}, overrideConfigProperties = (e, r) => {
	if (r) for (let i in r) overrideProperty(e, i, r[i]);
}, mergeConfigProperties = (e, r) => {
	if (r) for (let i in r) mergeArrayProperties(e, r, i);
}, mergeArrayProperties = (e, r, i) => {
	let a = r[i];
	a !== void 0 && (e[i] = e[i] ? e[i].concat(a) : a);
}, extendTailwindMerge = (e, ...r) => typeof e == "function" ? createTailwindMerge(getDefaultConfig, e, ...r) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), e), ...r), twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
function cn(...e) {
	return twMerge(clsx(e));
}
var SPACE_REGEX = /\s+/g, removeExtraSpaces = (e) => typeof e != "string" || !e ? e : e.replace(SPACE_REGEX, " ").trim(), cx$1 = (...e) => {
	let r = [], i = (e) => {
		if (!e && e !== 0 && e !== 0n) return;
		if (Array.isArray(e)) {
			for (let r = 0, a = e.length; r < a; r++) i(e[r]);
			return;
		}
		let a = typeof e;
		if (a === "string" || a === "number" || a === "bigint") {
			if (a === "number" && e !== e) return;
			r.push(String(e));
		} else if (a === "object") {
			let i = Object.keys(e);
			for (let a = 0, o = i.length; a < o; a++) {
				let o = i[a];
				e[o] && r.push(o);
			}
		}
	};
	for (let r = 0, a = e.length; r < a; r++) {
		let a = e[r];
		a != null && i(a);
	}
	return r.length > 0 ? removeExtraSpaces(r.join(" ")) : void 0;
}, falsyToString = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, isEmptyObject = (e) => {
	if (!e || typeof e != "object") return !0;
	for (let r in e) return !1;
	return !0;
}, isEqual = (e, r) => {
	if (e === r) return !0;
	if (!e || !r) return !1;
	let i = Object.keys(e), a = Object.keys(r);
	if (i.length !== a.length) return !1;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		if (!a.includes(s) || e[s] !== r[s]) return !1;
	}
	return !0;
}, joinObjects = (e, r) => {
	for (let i in r) if (Object.prototype.hasOwnProperty.call(r, i)) {
		let a = r[i];
		i in e ? e[i] = cx$1(e[i], a) : e[i] = a;
	}
	return e;
}, flat = (e, r) => {
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		Array.isArray(a) ? flat(a, r) : a && r.push(a);
	}
}, flatMergeArrays = (...e) => {
	let r = [];
	flat(e, r);
	let i = [];
	for (let e = 0; e < r.length; e++) r[e] && i.push(r[e]);
	return i;
}, mergeObjects = (e, r) => {
	let i = {};
	for (let a in e) {
		let o = e[a];
		if (a in r) {
			let e = r[a];
			Array.isArray(o) || Array.isArray(e) ? i[a] = flatMergeArrays(e, o) : typeof o == "object" && typeof e == "object" && o && e ? i[a] = mergeObjects(o, e) : i[a] = e + " " + o;
		} else i[a] = o;
	}
	for (let a in r) a in e || (i[a] = r[a]);
	return i;
}, defaultConfig = {
	twMerge: !0,
	twMergeConfig: {}
};
function createState() {
	let e = null, r = {}, i = !1;
	return {
		get cachedTwMerge() {
			return e;
		},
		set cachedTwMerge(r) {
			e = r;
		},
		get cachedTwMergeConfig() {
			return r;
		},
		set cachedTwMergeConfig(e) {
			r = e;
		},
		get didTwMergeConfigChange() {
			return i;
		},
		set didTwMergeConfigChange(e) {
			i = e;
		},
		reset() {
			e = null, r = {}, i = !1;
		}
	};
}
var state$1 = createState(), getTailwindVariants = (e) => {
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
			if (isEmptyObject(p) && isEmptyObject(o) && h) return e(f, r?.class, r?.className)(d);
			if (v && !Array.isArray(v)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof v}`);
			if (l && !Array.isArray(l)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
			let i = (e, i = p, a = null, o = null) => {
				let s = i[e];
				if (!s || isEmptyObject(s)) return null;
				let c = o?.[e] ?? r?.[e];
				if (c === null) return null;
				let l = falsyToString(c);
				if (typeof l == "object") return null;
				let u = m?.[e];
				return s[(l ?? falsyToString(u)) || "false"];
			}, a = () => {
				if (!p) return null;
				let e = Object.keys(p), r = [];
				for (let a = 0; a < e.length; a++) {
					let o = i(e[a], p);
					o && r.push(o);
				}
				return r;
			}, s = (e, r) => {
				if (!p || typeof p != "object") return null;
				let a = [];
				for (let o in p) {
					let s = i(o, p, e, r), c = e === "base" && typeof s == "string" ? s : s && s[e];
					c && a.push(c);
				}
				return a;
			}, c = {};
			for (let e in r) {
				let i = r[e];
				i !== void 0 && (c[e] = i);
			}
			let u = (e, i) => {
				let a = typeof r?.[e] == "object" ? { [e]: r[e]?.initial } : {};
				return {
					...m,
					...c,
					...a,
					...i
				};
			}, g = (e = [], r) => {
				let i = [], a = e.length;
				for (let o = 0; o < a; o++) {
					let { class: a, className: s, ...c } = e[o], l = !0, d = u(null, r);
					for (let e in c) {
						let r = c[e], i = d[e];
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
				let a = {}, o = e;
				for (let e = 0; e < i.length; e++) {
					let r = i[e];
					if (typeof r == "string") a.base = o(a.base, r)(d);
					else if (typeof r == "object") for (let e in r) a[e] = o(a[e], r[e])(d);
				}
				return a;
			}, b = (e) => {
				if (l.length < 1) return null;
				let r = {}, i = u(null, e);
				for (let e = 0; e < l.length; e++) {
					let { slots: a = [], class: o, className: s, ...c } = l[e];
					if (!isEmptyObject(c)) {
						let e = !0;
						for (let r in c) {
							let a = i[r], o = c[r];
							if (a === void 0 || (Array.isArray(o) ? !o.includes(a) : o !== a)) {
								e = !1;
								break;
							}
						}
						if (!e) continue;
					}
					for (let e = 0; e < a.length; e++) {
						let i = a[e];
						r[i] || (r[i] = []), r[i].push([o, s]);
					}
				}
				return r;
			};
			if (!isEmptyObject(o) || !h) {
				let r = {};
				if (typeof _ == "object" && !isEmptyObject(_)) {
					let i = e;
					for (let e in _) r[e] = (r) => {
						let a = y(r), o = b(r);
						return i(_[e], s(e, r), a ? a[e] : void 0, o ? o[e] : void 0, r?.class, r?.className)(d);
					};
				}
				return r;
			}
			return e(f, a(), g(v), r?.class, r?.className)(d);
		};
		return y.variantKeys = (() => {
			if (!(!p || typeof p != "object")) return Object.keys(p);
		})(), y.extend = a, y.base = f, y.slots = _, y.variants = p, y.defaultVariants = m, y.compoundSlots = l, y.compoundVariants = v, y;
	};
	return {
		tv: r,
		createTV: (e) => (i, a) => r(i, a ? mergeObjects(e, a) : e)
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
}), executeMerge = (e, r) => {
	let i = cx$1(e);
	return !i || !(r?.twMerge ?? !0) ? i : ((!state$1.cachedTwMerge || state$1.didTwMergeConfigChange) && (state$1.didTwMergeConfigChange = !1, state$1.cachedTwMerge = createTwMerge(state$1.cachedTwMergeConfig)), state$1.cachedTwMerge(i) || void 0);
}, { createTV, tv } = getTailwindVariants((...e) => (r) => executeMerge(e, r));
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
var root_1$7 = /* @__PURE__ */ from_html("<a><!></a>"), root_2$14 = /* @__PURE__ */ from_html("<button><!></button>");
function Button(e, r) {
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
	var u = comment(), d = first_child(u), f = (e) => {
		var c = root_1$7();
		attribute_effect(c, (e) => ({
			"data-slot": "button",
			class: e,
			href: r.disabled ? void 0 : s(),
			"aria-disabled": r.disabled,
			role: r.disabled ? "link" : void 0,
			tabindex: r.disabled ? -1 : void 0,
			...l
		}), [() => cn(buttonVariants({
			variant: i(),
			size: a()
		}), r.class)]), snippet(child(c), () => r.children ?? noop$1), reset(c), bind_this(c, (e) => o(e), () => o()), append(e, c);
	}, p = (e) => {
		var s = root_2$14();
		attribute_effect(s, (e) => ({
			"data-slot": "button",
			class: e,
			type: c(),
			disabled: r.disabled,
			...l
		}), [() => cn(buttonVariants({
			variant: i(),
			size: a()
		}), r.class)]), snippet(child(s), () => r.children ?? noop$1), reset(s), bind_this(s, (e) => o(e), () => o()), append(e, s);
	};
	if_block(d, (e) => {
		s() ? e(f) : e(p, -1);
	}), append(e, u), pop();
}
var root$25 = /* @__PURE__ */ from_html("<div class=\"relative w-15 h-15 shrink-0 overflow-hidden\"><div class=\"absolute top-[18%] left-[-75%] w-[250%] py-[0.25em] pr-[1.5em] -rotate-45 bg-primary text-white text-[0.6rem] font-bold text-center shadow-md leading-none pointer-events-none\"> </div></div>");
function VersionBadge(e, r) {
	let i = prop(r, "version", 3, "main");
	var a = root$25(), o = child(a), s = child(o, !0);
	reset(o), reset(a), template_effect(() => set_text(s, i())), append(e, a);
}
function isObject$1(e) {
	return typeof e == "object" && !!e;
}
var CLASS_VALUE_PRIMITIVE_TYPES$1 = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function isClassValue$1(e) {
	return e == null || CLASS_VALUE_PRIMITIVE_TYPES$1.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => isClassValue$1(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
const BoxSymbol$1 = Symbol("box"), isWritableSymbol$1 = Symbol("is-writable");
function boxWith$1(e, r) {
	let i = /* @__PURE__ */ user_derived(e);
	return r ? {
		[BoxSymbol$1]: !0,
		[isWritableSymbol$1]: !0,
		get current() {
			return get$1(i);
		},
		set current(e) {
			r(e);
		}
	} : {
		[BoxSymbol$1]: !0,
		get current() {
			return e();
		}
	};
}
function isBox$1(e) {
	return isObject$1(e) && BoxSymbol$1 in e;
}
function composeHandlers$1(...e) {
	return function(r) {
		for (let i of e) if (i) {
			if (r.defaultPrevented) return;
			typeof i == "function" ? i.call(this, r) : i.current?.call(this, r);
		}
	};
}
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, NEWLINE_REGEX = /\n/g, WHITESPACE_REGEX = /^\s*/, PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, COLON_REGEX = /^:\s*/, VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, SEMICOLON_REGEX = /^[;\s]*/, TRIM_REGEX = /^\s+|\s+$/g, NEWLINE = "\n", FORWARD_SLASH = "/", ASTERISK = "*", EMPTY_STRING = "", TYPE_COMMENT = "comment", TYPE_DECLARATION = "declaration";
function index(e, r) {
	if (typeof e != "string") throw TypeError("First argument must be a string");
	if (!e) return [];
	r ||= {};
	var i = 1, a = 1;
	function o(e) {
		var r = e.match(NEWLINE_REGEX);
		r && (i += r.length);
		var o = e.lastIndexOf(NEWLINE);
		a = ~o ? e.length - o : a + e.length;
	}
	function s() {
		var e = {
			line: i,
			column: a
		};
		return function(r) {
			return r.position = new c(e), d(), r;
		};
	}
	function c(e) {
		this.start = e, this.end = {
			line: i,
			column: a
		}, this.source = r.source;
	}
	c.prototype.content = e;
	function l(o) {
		var s = /* @__PURE__ */ Error(r.source + ":" + i + ":" + a + ": " + o);
		if (s.reason = o, s.filename = r.source, s.line = i, s.column = a, s.source = e, !r.silent) throw s;
	}
	function u(r) {
		var i = r.exec(e);
		if (i) {
			var a = i[0];
			return o(a), e = e.slice(a.length), i;
		}
	}
	function d() {
		u(WHITESPACE_REGEX);
	}
	function f(e) {
		var r;
		for (e ||= []; r = p();) r !== !1 && e.push(r);
		return e;
	}
	function p() {
		var r = s();
		if (!(FORWARD_SLASH != e.charAt(0) || ASTERISK != e.charAt(1))) {
			for (var i = 2; EMPTY_STRING != e.charAt(i) && (ASTERISK != e.charAt(i) || FORWARD_SLASH != e.charAt(i + 1));) ++i;
			if (i += 2, EMPTY_STRING === e.charAt(i - 1)) return l("End of comment missing");
			var c = e.slice(2, i - 2);
			return a += 2, o(c), e = e.slice(i), a += 2, r({
				type: TYPE_COMMENT,
				comment: c
			});
		}
	}
	function m() {
		var e = s(), r = u(PROPERTY_REGEX);
		if (r) {
			if (p(), !u(COLON_REGEX)) return l("property missing ':'");
			var i = u(VALUE_REGEX), a = e({
				type: TYPE_DECLARATION,
				property: trim(r[0].replace(COMMENT_REGEX, EMPTY_STRING)),
				value: i ? trim(i[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
			});
			return u(SEMICOLON_REGEX), a;
		}
	}
	function h() {
		var e = [];
		f(e);
		for (var r; r = m();) r !== !1 && (e.push(r), f(e));
		return e;
	}
	return d(), h();
}
function trim(e) {
	return e ? e.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
function StyleToObject(e, r) {
	let i = null;
	if (!e || typeof e != "string") return i;
	let a = index(e), o = typeof r == "function";
	return a.forEach((e) => {
		if (e.type !== "declaration") return;
		let { property: a, value: s } = e;
		o ? r(a, s, e) : s && (i ||= {}, i[a] = s);
	}), i;
}
var NUMBER_CHAR_RE$1 = /\d/, STR_SPLITTERS$1 = [
	"-",
	"_",
	"/",
	"."
];
function isUppercase$1(e = "") {
	if (!NUMBER_CHAR_RE$1.test(e)) return e !== e.toLowerCase();
}
function splitByCase$1(e) {
	let r = [], i = "", a, o;
	for (let s of e) {
		let e = STR_SPLITTERS$1.includes(s);
		if (e === !0) {
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
				let e = i.at(-1);
				r.push(i.slice(0, Math.max(0, i.length - 1))), i = e + s, a = c;
				continue;
			}
		}
		i += s, a = c, o = e;
	}
	return r.push(i), r;
}
function pascalCase$1(e) {
	return e ? splitByCase$1(e).map((e) => upperFirst$1(e)).join("") : "";
}
function camelCase$1(e) {
	return lowerFirst$1(pascalCase$1(e || ""));
}
function upperFirst$1(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function lowerFirst$1(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
function cssToStyleObj$1(e) {
	if (!e) return {};
	let r = {};
	function i(e, i) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			r[pascalCase$1(e)] = i;
			return;
		}
		if (e.startsWith("--")) {
			r[e] = i;
			return;
		}
		r[camelCase$1(e)] = i;
	}
	return StyleToObject(e, i), r;
}
function executeCallbacks$1(...e) {
	return (...r) => {
		for (let i of e) typeof i == "function" && i(...r);
	};
}
function createParser$1(e, r) {
	let i = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(i) ? e.replace(i, r) : e;
	};
}
var camelToKebab$2 = createParser$1(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function styleToCSS$1(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((r) => `${camelToKebab$2(r)}: ${e[r]};`).join("\n");
}
function styleToString$1(e = {}) {
	return styleToCSS$1(e).replace("\n", " ");
}
var EVENT_LIST$1 = /* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split(".");
const EVENT_LIST_SET$1 = new Set(EVENT_LIST$1);
function isEventHandler$1(e) {
	return EVENT_LIST_SET$1.has(e);
}
function mergeProps$1(...e) {
	let r = { ...e[0] };
	for (let i = 1; i < e.length; i++) {
		let a = e[i];
		if (a) {
			for (let e of Object.keys(a)) {
				let i = r[e], o = a[e], s = typeof i == "function", c = typeof o == "function";
				if (s && typeof c && isEventHandler$1(e)) r[e] = composeHandlers$1(i, o);
				else if (s && c) r[e] = executeCallbacks$1(i, o);
				else if (e === "class") {
					let a = isClassValue$1(i), s = isClassValue$1(o);
					a && s ? r[e] = clsx(i, o) : a ? r[e] = clsx(i) : s && (r[e] = clsx(o));
				} else if (e === "style") {
					let a = typeof i == "object", s = typeof o == "object", c = typeof i == "string", l = typeof o == "string";
					if (a && s) r[e] = {
						...i,
						...o
					};
					else if (a && l) {
						let a = cssToStyleObj$1(o);
						r[e] = {
							...i,
							...a
						};
					} else if (c && s) r[e] = {
						...cssToStyleObj$1(i),
						...o
					};
					else if (c && l) {
						let a = cssToStyleObj$1(i), s = cssToStyleObj$1(o);
						r[e] = {
							...a,
							...s
						};
					} else a ? r[e] = i : s ? r[e] = o : c ? r[e] = i : l && (r[e] = o);
				} else r[e] = o === void 0 ? i : o;
			}
			for (let e of Object.getOwnPropertySymbols(a)) {
				let i = r[e], o = a[e];
				r[e] = o === void 0 ? i : o;
			}
		}
	}
	return typeof r.style == "object" && (r.style = styleToString$1(r.style).replaceAll("\n", " ")), r.hidden === !1 && (r.hidden = void 0, delete r.hidden), r.disabled === !1 && (r.disabled = void 0, delete r.disabled), r;
}
const defaultWindow$2 = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function getActiveElement$4(e) {
	let r = e.activeElement;
	for (; r?.shadowRoot;) {
		let e = r.shadowRoot.activeElement;
		if (e === r) break;
		r = e;
	}
	return r;
}
URLSearchParams, Symbol.iterator, new class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: r = defaultWindow$2, document: i = r?.document } = e;
		r !== void 0 && (this.#e = i, this.#t = createSubscriber((e) => {
			let i = on(r, "focusin", e), a = on(r, "focusout", e);
			return () => {
				i(), a();
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
		let r = getContext(this.#t);
		return r === void 0 ? e : r;
	}
	set(e) {
		return setContext(this.#t, e);
	}
};
function runEffect$2(e, r) {
	switch (e) {
		case "post":
			user_effect(r);
			break;
		case "pre":
			user_pre_effect(r);
			break;
	}
}
function runWatcher$2(e, r, i, a = {}) {
	let { lazy: o = !1 } = a, s = !o, c = Array.isArray(e) ? [] : void 0;
	runEffect$2(r, () => {
		let r = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!s) {
			s = !0, c = r;
			return;
		}
		let a = untrack(() => i(r, c));
		return c = r, a;
	});
}
function runWatcherOnce$2(e, r, i) {
	let a = effect_root(() => {
		let o = !1;
		runWatcher$2(e, r, (e, r) => {
			if (o) {
				a();
				return;
			}
			let s = i(e, r);
			return o = !0, s;
		}, { lazy: !0 });
	});
	user_effect(() => a);
}
function watch$2(e, r, i) {
	runWatcher$2(e, "post", r, i);
}
function watchPre$2(e, r, i) {
	runWatcher$2(e, "pre", r, i);
}
watch$2.pre = watchPre$2;
function watchOnce$2(e, r) {
	runWatcherOnce$2(e, "post", r);
}
function watchOncePre$2(e, r) {
	runWatcherOnce$2(e, "pre", r);
}
watchOnce$2.pre = watchOncePre$2;
function debounce$2(e, r) {
	let i, a = null;
	return (...o) => new Promise((s) => {
		a && a(void 0), a = s, clearTimeout(i), i = setTimeout(async () => {
			let r = await e(...o);
			a &&= (a(r), null);
		}, r);
	});
}
function throttle$1(e, r) {
	let i = 0, a = null;
	return (...o) => {
		let s = Date.now();
		return i && s - i < r ? a ?? Promise.resolve(void 0) : (i = s, a = e(...o), a);
	};
}
function runResource$1(e, r, i = {}, a) {
	let { lazy: o = !1, once: s = !1, initialValue: c, debounce: l, throttle: u } = i, d = /* @__PURE__ */ state(proxy(c)), f = /* @__PURE__ */ state(!1), p = /* @__PURE__ */ state(void 0), m = /* @__PURE__ */ state(proxy([])), h = () => {
		get$1(m).forEach((e) => e()), set(m, [], !0);
	}, g = (e) => {
		set(m, [...get$1(m), e], !0);
	}, _ = async (e, i, a = !1) => {
		try {
			set(f, !0), set(p, void 0), h();
			let o = new AbortController();
			g(() => o.abort());
			let s = await r(e, i, {
				data: get$1(d),
				refetching: a,
				onCleanup: g,
				signal: o.signal
			});
			return set(d, s, !0), s;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || set(p, e, !0);
			return;
		} finally {
			set(f, !1);
		}
	}, v = l ? debounce$2(_, l) : u ? throttle$1(_, u) : _, y = Array.isArray(e) ? e : [e], b;
	return a((r, i) => {
		s && b || (b = r, v(Array.isArray(e) ? r : r[0], Array.isArray(e) ? i : i?.[0]));
	}, { lazy: o }), {
		get current() {
			return get$1(d);
		},
		get loading() {
			return get$1(f);
		},
		get error() {
			return get$1(p);
		},
		mutate: (e) => {
			set(d, e, !0);
		},
		refetch: (r) => {
			let i = y.map((e) => e());
			return v(Array.isArray(e) ? i : i[0], Array.isArray(e) ? i : i[0], r ?? !0);
		}
	};
}
function resource$1(e, r, i) {
	return runResource$1(e, r, i, (r, i) => {
		let a = Array.isArray(e) ? e : [e];
		watch$2(() => a.map((e) => e()), (e, i) => {
			r(e, i ?? []);
		}, i);
	});
}
function resourcePre$1(e, r, i) {
	return runResource$1(e, r, i, (r, i) => {
		let a = Array.isArray(e) ? e : [e];
		watch$2.pre(() => a.map((e) => e()), (e, i) => {
			r(e, i ?? []);
		}, i);
	});
}
resource$1.pre = resourcePre$1;
var DOCUMENT_NODE$1 = 9;
function isDocument$1(e) {
	return isObject$1(e) && e.nodeType === DOCUMENT_NODE$1;
}
function isWindow$1(e) {
	return isObject$1(e) && e.constructor?.name === "VisualViewport";
}
function getDocument$1(e) {
	return isDocument$1(e) ? e : isWindow$1(e) ? e.document : e?.ownerDocument ?? document;
}
function getActiveElement$3(e) {
	let r = e.activeElement;
	for (; r?.shadowRoot;) {
		let e = r.shadowRoot.activeElement;
		if (e === r) break;
		r = e;
	}
	return r;
}
var DOMContext$1 = class {
	element;
	#e = /* @__PURE__ */ user_derived(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return get$1(this.#e);
	}
	set root(e) {
		set(this.#e, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = boxWith$1(e) : this.element = e;
	}
	getDocument = () => getDocument$1(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => getActiveElement$3(this.root);
	isActiveElement = (e) => e === this.getActiveElement();
	getElementById(e) {
		return this.root.getElementById(e);
	}
	querySelector = (e) => this.root ? this.root.querySelector(e) : null;
	querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
	setTimeout = (e, r) => this.getWindow().setTimeout(e, r);
	clearTimeout = (e) => this.getWindow().clearTimeout(e);
};
function attachRef$1(e, r) {
	return { [createAttachmentKey()]: (i) => isBox$1(e) ? (e.current = i, untrack(() => r?.(i)), () => {
		"isConnected" in i && i.isConnected || (e.current = null, r?.(null));
	}) : (e(i), untrack(() => r?.(i)), () => {
		"isConnected" in i && i.isConnected || (e(null), r?.(null));
	}) };
}
var BitsAttrs = class {
	#e;
	#t;
	attrs;
	constructor(e) {
		this.#e = e.getVariant ? e.getVariant() : null, this.#t = this.#e ? `data-${this.#e}-` : `data-${e.component}-`, this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(e.parts.map((e) => [e, this.getAttr(e)]));
	}
	getAttr(e, r) {
		return r ? `data-${r}-${e}` : `${this.#t}${e}`;
	}
	selector(e, r) {
		return `[${this.getAttr(e, r)}]`;
	}
};
function createBitsAttrs(e) {
	let r = new BitsAttrs(e);
	return {
		...r.attrs,
		selector: r.selector,
		getAttr: r.getAttr
	};
}
function createId(e, r) {
	return r === void 0 ? `bits-${e}` : `bits-${e}-${r}`;
}
var avatarAttrs = createBitsAttrs({
	component: "avatar",
	parts: [
		"root",
		"image",
		"fallback"
	]
}), AvatarRootContext = new Context$1("Avatar.Root"), AvatarRootState = class e {
	static create(r) {
		return AvatarRootContext.set(new e(r));
	}
	opts;
	domContext;
	attachment;
	constructor(e) {
		this.opts = e, this.domContext = new DOMContext$1(this.opts.ref), this.loadImage = this.loadImage.bind(this), this.attachment = attachRef$1(this.opts.ref);
	}
	loadImage(e, r, i) {
		if (this.opts.loadingStatus.current === "loaded") return;
		let a, o = new Image();
		return o.src = e, r !== void 0 && (o.crossOrigin = r), i && (o.referrerPolicy = i), this.opts.loadingStatus.current = "loading", o.onload = () => {
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
		return get$1(this.#e);
	}
	set props(e) {
		set(this.#e, e);
	}
}, AvatarImageState = class e {
	static create(r) {
		return new e(r, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, r) {
		this.opts = e, this.root = r, this.attachment = attachRef$1(this.opts.ref), watch$2.pre([() => this.opts.src.current, () => this.opts.crossOrigin.current], ([e, r]) => {
			if (!e) {
				this.root.opts.loadingStatus.current = "error";
				return;
			}
			this.root.loadImage(e, r, this.opts.referrerPolicy.current);
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
	static create(r) {
		return new e(r, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, r) {
		this.opts = e, this.root = r, this.attachment = attachRef$1(this.opts.ref);
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
}, root_2$13 = /* @__PURE__ */ from_html("<div><!></div>");
function Avatar$1(e, r) {
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
		loadingStatus: boxWith$1(() => o(), (e) => {
			o() !== e && (o(e), r.onLoadingStatusChange?.(e));
		}),
		id: boxWith$1(() => s()),
		ref: boxWith$1(() => c(), (e) => c(e))
	}), d = /* @__PURE__ */ user_derived(() => mergeProps$1(l, u.props));
	var f = comment(), p = first_child(f), m = (e) => {
		var i = comment();
		snippet(first_child(i), () => r.child, () => ({ props: get$1(d) })), append(e, i);
	}, h = (e) => {
		var i = root_2$13();
		attribute_effect(i, () => ({ ...get$1(d) })), snippet(child(i), () => r.children ?? noop$1), reset(i), append(e, i);
	};
	if_block(p, (e) => {
		r.child ? e(m) : e(h, -1);
	}), append(e, f), pop();
}
var root_2$12 = /* @__PURE__ */ from_html("<img/>");
function Avatar_image$1(e, r) {
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
		ref: boxWith$1(() => o(), (e) => o(e)),
		crossOrigin: boxWith$1(() => s()),
		referrerPolicy: boxWith$1(() => c())
	}), d = /* @__PURE__ */ user_derived(() => mergeProps$1(l, u.props));
	var f = comment(), p = first_child(f), m = (e) => {
		var i = comment();
		snippet(first_child(i), () => r.child, () => ({ props: get$1(d) })), append(e, i);
	}, h = (e) => {
		var i = root_2$12();
		attribute_effect(i, () => ({
			...get$1(d),
			src: r.src
		})), replay_events(i), append(e, i);
	};
	if_block(p, (e) => {
		r.child ? e(m) : e(h, -1);
	}), append(e, f), pop();
}
var root_2$11 = /* @__PURE__ */ from_html("<span><!></span>");
function Avatar_fallback$1(e, r) {
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
		ref: boxWith$1(() => o(), (e) => o(e))
	}), l = /* @__PURE__ */ user_derived(() => mergeProps$1(s, c.props));
	var u = comment(), d = first_child(u), f = (e) => {
		var i = comment();
		snippet(first_child(i), () => r.child, () => ({ props: get$1(l) })), append(e, i);
	}, p = (e) => {
		var i = root_2$11();
		attribute_effect(i, () => ({ ...get$1(l) })), snippet(child(i), () => r.children ?? noop$1), reset(i), append(e, i);
	};
	if_block(d, (e) => {
		r.child ? e(f) : e(p, -1);
	}), append(e, u), pop();
}
var labelAttrs = createBitsAttrs({
	component: "label",
	parts: ["root"]
}), LabelRootState = class e {
	static create(r) {
		return new e(r);
	}
	opts;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = attachRef$1(this.opts.ref), this.onmousedown = this.onmousedown.bind(this);
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
}, root_2$10 = /* @__PURE__ */ from_html("<label><!></label>");
function Label$1(e, r) {
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
		ref: boxWith$1(() => o(), (e) => o(e))
	}), l = /* @__PURE__ */ user_derived(() => mergeProps$1(s, c.props, { for: r.for }));
	var u = comment(), d = first_child(u), f = (e) => {
		var i = comment();
		snippet(first_child(i), () => r.child, () => ({ props: get$1(l) })), append(e, i);
	}, p = (e) => {
		var i = root_2$10();
		attribute_effect(i, () => ({
			...get$1(l),
			for: r.for
		})), snippet(child(i), () => r.children ?? noop$1), reset(i), append(e, i);
	};
	if_block(d, (e) => {
		r.child ? e(f) : e(p, -1);
	}), append(e, u), pop();
}
function Avatar(e, r) {
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
		let e = /* @__PURE__ */ user_derived(() => cn("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten", r.class));
		component(l, () => Avatar$1, (r, c) => {
			c(r, spread_props({
				"data-slot": "avatar",
				get "data-size"() {
					return o();
				},
				get class() {
					return get$1(e);
				}
			}, () => s, {
				get ref() {
					return i();
				},
				set ref(e) {
					i(e);
				},
				get loadingStatus() {
					return a();
				},
				set loadingStatus(e) {
					a(e);
				}
			}));
		});
	}
	append(e, c), pop();
}
function Avatar_image(e, r) {
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
		let e = /* @__PURE__ */ user_derived(() => cn("rounded-full aspect-square size-full object-cover", r.class));
		component(s, () => Avatar_image$1, (r, o) => {
			o(r, spread_props({
				"data-slot": "avatar-image",
				get class() {
					return get$1(e);
				}
			}, () => a, {
				get ref() {
					return i();
				},
				set ref(e) {
					i(e);
				}
			}));
		});
	}
	append(e, o), pop();
}
function Avatar_fallback(e, r) {
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
		let e = /* @__PURE__ */ user_derived(() => cn("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", r.class));
		component(s, () => Avatar_fallback$1, (r, o) => {
			o(r, spread_props({
				"data-slot": "avatar-fallback",
				get class() {
					return get$1(e);
				}
			}, () => a, {
				get ref() {
					return i();
				},
				set ref(e) {
					i(e);
				}
			}));
		});
	}
	append(e, o), pop();
}
var root$24 = /* @__PURE__ */ from_html("<span><!></span>");
function Avatar_badge(e, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var o = root$24();
	attribute_effect(o, (e) => ({
		"data-slot": "avatar-badge",
		class: e,
		...a
	}), [() => cn("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", r.class)]), snippet(child(o), () => r.children ?? noop$1), reset(o), bind_this(o, (e) => i(e), () => i()), append(e, o), pop();
}
var root_1$6 = /* @__PURE__ */ from_html("<!> <!> <!>", 1);
function ChannelAvatar(e, r) {
	let i = prop(r, "fallbackText", 3, "Channel Logo");
	Avatar(e, {
		class: "rounded-lg",
		children: (e, a) => {
			var o = root_1$6(), s = first_child(o);
			Avatar_image(s, {
				get src() {
					return r.imgSrc;
				},
				get alt() {
					return i();
				}
			});
			var c = sibling(s, 2), l = (e) => {
				{
					let i = /* @__PURE__ */ user_derived(() => r.isConnected ? "bg-green-500" : "bg-red-500");
					Avatar_badge(e, { get class() {
						return get$1(i);
					} });
				}
			};
			if_block(c, (e) => {
				typeof r.isConnected == "boolean" && e(l);
			}), Avatar_fallback(sibling(c, 2), {
				children: (e, r) => {
					next();
					var a = text();
					template_effect(() => set_text(a, i())), append(e, a);
				},
				$$slots: { default: !0 }
			}), append(e, o);
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
function getSpecificMessage(e, r) {
	return store$1?.get(e)?.get(r);
}
/* @__NO_SIDE_EFFECTS__ */
function _stringify(e) {
	let r = typeof e;
	return r === "string" ? `"${e}"` : r === "number" || r === "bigint" || r === "boolean" ? `${e}` : r === "object" || r === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : r;
}
function _addIssue(e, r, i, a, o) {
	let s = o && "input" in o ? o.input : i.value, c = o?.expected ?? e.expects ?? null, l = o?.received ?? /* @__PURE__ */ _stringify(s), u = {
		kind: e.kind,
		type: e.type,
		input: s,
		expected: c,
		received: l,
		message: `Invalid ${r}: ${c ? `Expected ${c} but r` : "R"}eceived ${l}`,
		requirement: e.requirement,
		path: o?.path,
		issues: o?.issues,
		lang: a.lang,
		abortEarly: a.abortEarly,
		abortPipeEarly: a.abortPipeEarly
	}, d = e.kind === "schema", f = o?.message ?? e.message ?? /* @__PURE__ */ getSpecificMessage(e.reference, u.lang) ?? (d ? /* @__PURE__ */ getSchemaMessage(u.lang) : null) ?? a.message ?? /* @__PURE__ */ getGlobalMessage(u.lang);
	f !== void 0 && (u.message = typeof f == "function" ? f(u) : f), d && (i.typed = !1), i.issues ? i.issues.push(u) : i.issues = [u];
}
var _standardCache = /* @__PURE__ */ new WeakMap();
/* @__NO_SIDE_EFFECTS__ */
function _getStandardProps(e) {
	let r = _standardCache.get(e);
	return r || (r = {
		version: 1,
		vendor: "valibot",
		validate(r) {
			return e["~run"]({ value: r }, /* @__PURE__ */ getGlobalConfig());
		}
	}, _standardCache.set(e, r)), r;
}
/* @__NO_SIDE_EFFECTS__ */
function maxLength(e, r) {
	return {
		kind: "validation",
		type: "max_length",
		reference: maxLength,
		async: !1,
		expects: `<=${e}`,
		requirement: e,
		message: r,
		"~run"(e, r) {
			return e.typed && e.value.length > this.requirement && _addIssue(this, "length", e, r, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function minLength(e, r) {
	return {
		kind: "validation",
		type: "min_length",
		reference: minLength,
		async: !1,
		expects: `>=${e}`,
		requirement: e,
		message: r,
		"~run"(e, r) {
			return e.typed && e.value.length < this.requirement && _addIssue(this, "length", e, r, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function regex(e, r) {
	return {
		kind: "validation",
		type: "regex",
		reference: regex,
		async: !1,
		expects: `${e}`,
		requirement: e,
		message: r,
		"~run"(e, r) {
			return e.typed && !this.requirement.test(e.value) && _addIssue(this, "format", e, r), e;
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
		"~run"(e, r) {
			return typeof e.value == "string" ? e.typed = !0 : _addIssue(this, "type", e, r), e;
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
		"~run"(r, i) {
			for (let a of e) if (a.kind !== "metadata") {
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
function safeParse(e, r, i) {
	let a = e["~run"]({ value: r }, /* @__PURE__ */ getGlobalConfig(i));
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
var root$21 = /* @__PURE__ */ from_html("<div><!></div>");
function Field(e, r) {
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
	var s = root$21();
	attribute_effect(s, (e) => ({
		role: "group",
		"data-slot": "field",
		"data-orientation": a(),
		class: e,
		...o
	}), [() => cn(fieldVariants({ orientation: a() }), r.class)]), snippet(child(s), () => r.children ?? noop$1), reset(s), bind_this(s, (e) => i(e), () => i()), append(e, s), pop();
}
var root$18 = /* @__PURE__ */ from_html("<div><!></div>");
function Field_group(e, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var o = root$18();
	attribute_effect(o, (e) => ({
		"data-slot": "field-group",
		class: e,
		...a
	}), [() => cn("gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col", r.class)]), snippet(child(o), () => r.children ?? noop$1), reset(o), bind_this(o, (e) => i(e), () => i()), append(e, o), pop();
}
function Label(e, r) {
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
		let e = /* @__PURE__ */ user_derived(() => cn("gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed", r.class));
		component(s, () => Label$1, (r, o) => {
			o(r, spread_props({
				"data-slot": "label",
				get class() {
					return get$1(e);
				}
			}, () => a, {
				get ref() {
					return i();
				},
				set ref(e) {
					i(e);
				}
			}));
		});
	}
	append(e, o), pop();
}
var root_1$3 = /* @__PURE__ */ from_html("<input/>"), root_2$9 = /* @__PURE__ */ from_html("<input/>");
function Input(e, r) {
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
	var l = comment(), u = first_child(l), d = (e) => {
		var l = root_1$3();
		attribute_effect(l, (e) => ({
			"data-slot": s(),
			class: e,
			type: "file",
			...c
		}), [() => cn("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", r.class)], void 0, void 0, void 0, !0), bind_this(l, (e) => i(e), () => i()), bind_files(l, o), bind_value(l, a), append(e, l);
	}, f = (e) => {
		var o = root_2$9();
		attribute_effect(o, (e) => ({
			"data-slot": s(),
			class: e,
			type: r.type,
			...c
		}), [() => cn("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", r.class)], void 0, void 0, void 0, !0), bind_this(o, (e) => i(e), () => i()), bind_value(o, a), append(e, o);
	};
	if_block(u, (e) => {
		r.type === "file" ? e(d) : e(f, -1);
	}), append(e, l), pop();
}
const httpGet = async (e) => fetch(e), httpPostUrlEncodedForm = async (e, r) => fetch(e, {
	method: "POST",
	redirect: "manual",
	credentials: "include",
	headers: { "Content-Type": "application/x-www-form-urlencoded" },
	body: r
});
var defaultAuthState = {
	status: !1,
	username: ""
}, createAuthStore = (e) => {
	let { subscribe: r, set: i, update: a } = writable({
		...defaultAuthState,
		...e
	});
	return {
		subscribe: r,
		set: i,
		init: (e) => i(e),
		updateStatus: (e) => a((r) => ({
			...r,
			status: e
		})),
		resetStatus: () => a((e) => ({
			...e,
			status: defaultAuthState.status
		})),
		updateUsername: (e) => a((r) => ({
			...r,
			username: e
		})),
		resetUsername: () => a((e) => ({
			...e,
			username: defaultAuthState.username
		}))
	};
}, submitSocketLogin = async (e) => new Promise((r, a) => {
	socketClient.once("login", (e) => {
		if (e.success) {
			r(e.name);
			return;
		}
		a(e.error);
	}), socketClient.emit("login", e);
}), listenSocketRank = async () => new Promise((e) => {
	socketClient.once("rank", e);
}), submitHTTPLogin = async (e) => {
	await httpPostUrlEncodedForm(new URL("/login", window.location.origin), new URLSearchParams(e));
	let r = await (await httpGet(new URL(window.location.href))).text(), i = new DOMParser().parseFromString(r, "text/html").querySelector("input[name=\"_csrf\"]");
	if (!i) {
		console.warn("login response missing csrf value");
		return;
	}
	let a = i.value;
	pageStore.updateCSRF(a);
}, submitHTTPLogout = async (e) => {
	await httpPostUrlEncodedForm(new URL("/logout", window.location.origin), new URLSearchParams(e));
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
var linear = (e) => e;
function cubic_in_out(e) {
	return e < .5 ? 4 * e * e * e : .5 * (2 * e - 2) ** 3 + 1;
}
function split_css_unit(e) {
	let r = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return r ? [parseFloat(r[1]), r[2] || "px"] : [e, "px"];
}
function blur(e, { delay: r = 0, duration: i = 400, easing: a = cubic_in_out, amount: o = 5, opacity: s = 0 } = {}) {
	let c = getComputedStyle(e), l = +c.opacity, u = c.filter === "none" ? "" : c.filter, d = l * (1 - s), [f, p] = split_css_unit(o);
	return {
		delay: r,
		duration: i,
		easing: a,
		css: (e, r) => `opacity: ${l - d * r}; filter: ${u} blur(${r * f}${p});`
	};
}
function fade(e, { delay: r = 0, duration: i = 400, easing: a = linear } = {}) {
	let o = +getComputedStyle(e).opacity;
	return {
		delay: r,
		duration: i,
		easing: a,
		css: (e) => `opacity: ${e * o}`
	};
}
var camelToKebab$1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function createHugeiconSingleton(e, r) {
	let i = (e, i) => {
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
			e.setAttribute(camelToKebab$1(r), String(i));
		}), e.innerHTML = "", m.forEach(([r, i]) => {
			let a = document.createElementNS("http://www.w3.org/2000/svg", r), o = { ...i };
			h !== void 0 && (o["stroke-width"] = h, o.stroke = "currentColor"), Object.entries(o).forEach(([e, r]) => {
				a.setAttribute(camelToKebab$1(e), String(r));
			}), e.appendChild(a);
		});
	};
	return { render(e, r) {
		return i(e, r), {
			update(r) {
				i(e, r);
			},
			destroy() {
				e.innerHTML = "";
			}
		};
	} };
}
var root$13 = /* @__PURE__ */ from_svg("<svg></svg>");
function HugeiconsIcon(e, r) {
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
		class: get$1(d)
	}));
	onMount(() => {
		if (f) return set(p, createHugeiconSingleton("HugeiconsIcon", r.icon), !0), set(m, get$1(p).render(f, get$1(h)), !0), () => {
			get$1(m)?.destroy();
		};
	}), user_effect(() => {
		get$1(p) && f && get$1(m) && get$1(m).update(get$1(h));
	});
	var g = root$13();
	attribute_effect(g, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		width: i(),
		height: i(),
		viewBox: "0 0 24 24",
		fill: "none",
		class: get$1(d),
		...u
	})), bind_this(g, (e) => f = e, () => f), append(e, g), pop();
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
}]], root_1$2 = /* @__PURE__ */ from_html("<span><!></span>"), root_2$8 = /* @__PURE__ */ from_html("<span><!></span>"), root_3$1 = /* @__PURE__ */ from_html("<span><!></span>"), root_4$1 = /* @__PURE__ */ from_html("<span><!></span>"), root$12 = /* @__PURE__ */ from_html("<div><!></div>");
function AuthAvatar(e, r) {
	var i = root$12(), a = child(i), o = (e) => {
		var r = root_1$2();
		HugeiconsIcon(child(r), {
			get icon() {
				return SK;
			},
			class: "size-5 animate-spin",
			role: "status",
			"aria-label": "Loading"
		}), reset(r), transition(3, r, () => fade, () => ({ duration: 250 })), append(e, r);
	}, s = (e) => {
		var r = root_2$8();
		HugeiconsIcon(child(r), {
			get icon() {
				return ht;
			},
			class: "size-5"
		}), reset(r), transition(3, r, () => fade, () => ({ duration: 250 })), append(e, r);
	}, c = (e) => {
		var r = root_3$1();
		HugeiconsIcon(child(r), {
			get icon() {
				return TZr;
			},
			class: "size-5"
		}), reset(r), transition(3, r, () => fade, () => ({ duration: 250 })), append(e, r);
	}, l = (e) => {
		var r = root_4$1();
		HugeiconsIcon(child(r), {
			get icon() {
				return rZr;
			},
			class: "size-5"
		}), reset(r), transition(3, r, () => fade, () => ({ duration: 250 })), append(e, r);
	};
	if_block(a, (e) => {
		r.isLoading ? e(o) : r.isAnon ? e(s, 1) : r.isGuest ? e(c, 2) : e(l, -1);
	}), reset(i), append(e, i);
}
var usernameSchema = /* @__PURE__ */ pipe(/* @__PURE__ */ string(), /* @__PURE__ */ minLength(1, "Min 1 character"), /* @__PURE__ */ maxLength(20, "Max 20 characters"), /* @__PURE__ */ regex(/^[A-Za-zА-Яа-я0-9_-]+$/, "Only letters, numbers, -, or _")), passwordSchema = /* @__PURE__ */ pipe(/* @__PURE__ */ string(), /* @__PURE__ */ maxLength(100, "Max 100 characters")), root_2$7 = /* @__PURE__ */ from_html("<!> <!> <!> <!>", 1), root$11 = /* @__PURE__ */ from_html("<div class=\"w-full max-w-md ml-auto\"><form><!></form></div>");
function LoginForm(e, r) {
	push(r, !0);
	let i = () => store_get(authStore, "$authStore", a), [a, o] = setup_stores(), s = /* @__PURE__ */ user_derived(() => i().status), c = /* @__PURE__ */ user_derived(() => i().username), l = /* @__PURE__ */ user_derived(() => /* @__PURE__ */ safeParse(usernameSchema, get$1(c))), u = /* @__PURE__ */ user_derived(() => get$1(l).success), d = /* @__PURE__ */ user_derived(() => get$1(c) !== "" && !get$1(u)), f = /* @__PURE__ */ user_derived(() => get$1(l).success ? "" : get$1(l).issues.map((e) => e.message).join(", ")), p = /* @__PURE__ */ user_derived(() => i().password || ""), m = /* @__PURE__ */ user_derived(() => !get$1(u) || get$1(s)), h = /* @__PURE__ */ user_derived(() => /* @__PURE__ */ safeParse(passwordSchema, get$1(p))), g = /* @__PURE__ */ user_derived(() => get$1(h).success), _ = /* @__PURE__ */ user_derived(() => get$1(p) !== "" && !get$1(g)), v = /* @__PURE__ */ user_derived(() => get$1(h).success ? "" : get$1(h).issues.map((e) => e.message).join(", ")), y = /* @__PURE__ */ user_derived(() => get$1(s) || !get$1(u) || get$1(u) && !get$1(g)), b = async (e) => {
		if (e.preventDefault(), !get$1(y)) try {
			store_mutate(authStore, untrack(i).status = !0, untrack(i)), await new Promise((e) => setTimeout(e, 500)), await login(get$1(c), get$1(p));
		} catch (e) {
			console.error(e);
		} finally {
			store_mutate(authStore, untrack(i).status = !1, untrack(i)), store_mutate(authStore, untrack(i).username = "", untrack(i)), store_mutate(authStore, untrack(i).password = void 0, untrack(i));
		}
	};
	var x = root$11(), S = child(x);
	Field_group(child(S), {
		children: (e, r) => {
			Field(e, {
				orientation: "responsive",
				class: "flex flex-row items-center justify-end",
				children: (e, r) => {
					var a = root_2$7(), o = first_child(a);
					{
						let e = /* @__PURE__ */ user_derived(() => get$1(c) === "" && get$1(p) === ""), r = /* @__PURE__ */ user_derived(() => get$1(p) === "");
						AuthAvatar(o, {
							get isLoading() {
								return get$1(s);
							},
							get isAnon() {
								return get$1(e);
							},
							get isGuest() {
								return get$1(r);
							}
						});
					}
					var l = sibling(o, 2);
					{
						let e = /* @__PURE__ */ user_derived(() => get$1(d) ? get$1(f) : ""), r = /* @__PURE__ */ user_derived(() => cn({ "md:cursor-not-allowed": get$1(s) }));
						Input(l, {
							required: !0,
							type: "text",
							autocomplete: "name",
							placeholder: "Username",
							get "aria-invalid"() {
								return get$1(d);
							},
							get title() {
								return get$1(e);
							},
							get disabled() {
								return get$1(s);
							},
							get class() {
								return get$1(r);
							},
							get value() {
								return i().username;
							},
							set value(e) {
								store_mutate(authStore, untrack(i).username = e, untrack(i));
							}
						});
					}
					var u = sibling(l, 2);
					{
						let e = /* @__PURE__ */ user_derived(() => get$1(_) ? get$1(v) : ""), r = /* @__PURE__ */ user_derived(() => cn({ "md:cursor-not-allowed": get$1(m) }));
						Input(u, {
							name: "password",
							type: "password",
							autocomplete: "current-password",
							placeholder: "Password",
							get "aria-invalid"() {
								return get$1(_);
							},
							get title() {
								return get$1(e);
							},
							get disabled() {
								return get$1(m);
							},
							get class() {
								return get$1(r);
							},
							get value() {
								return i().password;
							},
							set value(e) {
								store_mutate(authStore, untrack(i).password = e, untrack(i));
							}
						});
					}
					var h = sibling(u, 2);
					{
						let e = /* @__PURE__ */ user_derived(() => cn({ "md:cursor-not-allowed": get$1(y) }));
						Button(h, {
							type: "submit",
							get disabled() {
								return get$1(y);
							},
							get class() {
								return get$1(e);
							},
							children: (e, r) => {
								next(), append(e, text("Login"));
							},
							$$slots: { default: !0 }
						});
					}
					append(e, a);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), reset(S), reset(x), event("submit", S, b), append(e, x), pop(), o();
}
var root_2$6 = /* @__PURE__ */ from_html("<!> <!> <!>", 1), root$10 = /* @__PURE__ */ from_html("<div class=\"w-full max-w-md ml-auto\"><form><!></form></div>");
function LogoutForm(e, r) {
	push(r, !0);
	let i = () => store_get(authStore, "$authStore", o), a = () => store_get(clientStore, "$clientStore", o), [o, s] = setup_stores(), c = /* @__PURE__ */ user_derived(() => i().status), l = /* @__PURE__ */ user_derived(() => a().rank > 0), u = async (e) => {
		if (e.preventDefault(), !get$1(c)) try {
			store_mutate(authStore, untrack(i).status = !0, untrack(i)), await new Promise((e) => setTimeout(e, 500)), await logout();
		} catch (e) {
			console.error(e);
		} finally {
			store_mutate(authStore, untrack(i).status = !1, untrack(i)), store_mutate(authStore, untrack(i).username = "", untrack(i)), store_mutate(authStore, untrack(i).password = void 0, untrack(i));
		}
	};
	var d = root$10(), f = child(d);
	Field_group(child(f), {
		children: (e, r) => {
			Field(e, {
				orientation: "responsive",
				class: "flex flex-row items-center justify-end selection:bg-primary",
				children: (e, r) => {
					var i = root_2$6(), o = first_child(i);
					{
						let e = /* @__PURE__ */ user_derived(() => !get$1(l));
						AuthAvatar(o, {
							get isLoading() {
								return get$1(c);
							},
							isAnon: !1,
							get isGuest() {
								return get$1(e);
							}
						});
					}
					var s = sibling(o, 2);
					Label(s, {
						class: "flex-none w-auto",
						children: (e, r) => {
							next();
							var i = text();
							template_effect(() => set_text(i, a().name)), append(e, i);
						},
						$$slots: { default: !0 }
					});
					var u = sibling(s, 2);
					{
						let e = /* @__PURE__ */ user_derived(() => cn({ "md:cursor-not-allowed": get$1(c) }));
						Button(u, {
							type: "submit",
							get disabled() {
								return get$1(c);
							},
							get class() {
								return get$1(e);
							},
							children: (e, r) => {
								next(), append(e, text("Logout"));
							},
							$$slots: { default: !0 }
						});
					}
					append(e, i);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), reset(f), reset(d), event("submit", f, u), append(e, d), pop(), s();
}
function AuthForm(e, r) {
	var i = comment(), a = first_child(i), o = (e) => {
		LogoutForm(e, {});
	}, s = (e) => {
		LoginForm(e, {});
	};
	if_block(a, (e) => {
		r.isLoggedIn ? e(o) : e(s, -1);
	}), append(e, i);
}
var logoImgSrc = new URL("dist/logo.png", window.BASE_URL).toString(), root$9 = /* @__PURE__ */ from_html("<header class=\"sticky w-full flex flex-row items-center justify-start h-15 mx-auto top-0 z-50 bg-background md:bg-background/80 md:backdrop-blur-md\"><!> <div class=\"w-full flex flex-row items-center justify-between pr-6 py-5\"><!> <!></div></header>");
function Header(r, i) {
	push(i, !1);
	let a = () => store_get(appStore, "$appStore", c), o = () => store_get(socketStore, "$socketStore", c), s = () => store_get(clientStore, "$clientStore", c), [c, l] = setup_stores();
	init$1();
	var u = root$9(), d = child(u), f = (e) => {
		VersionBadge(e, { get version() {
			return a().version;
		} });
	};
	if_block(d, (e) => {
		a().version && e(f);
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
	var h = sibling(m, 2), g = (e) => {
		AuthForm(e, { get isLoggedIn() {
			return s().logged_in;
		} });
	}, _ = (r) => {
		Button(r, {
			get onclick() {
				return submitSocketConnect;
			},
			children: (e, r) => {
				next(), append(e, text("Reconnect"));
			},
			$$slots: { default: !0 }
		});
	};
	if_block(h, (e) => {
		o().connected ? e(g) : e(_, -1);
	}), reset(p), reset(u), append(r, u), pop(), l();
}
function isFunction(e) {
	return typeof e == "function";
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
var BoxSymbol = Symbol("box"), isWritableSymbol = Symbol("is-writable");
function isBox(e) {
	return isObject(e) && BoxSymbol in e;
}
function isWritableBox(e) {
	return box.isBox(e) && isWritableSymbol in e;
}
function box(e) {
	let r = /* @__PURE__ */ state(proxy(e));
	return {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$1(r);
		},
		set current(e) {
			set(r, e, !0);
		}
	};
}
function boxWith(e, r) {
	let i = /* @__PURE__ */ user_derived(e);
	return r ? {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$1(i);
		},
		set current(e) {
			r(e);
		}
	} : {
		[BoxSymbol]: !0,
		get current() {
			return e();
		}
	};
}
function boxFrom(e) {
	return box.isBox(e) ? e : isFunction(e) ? box.with(e) : box(e);
}
function boxFlatten(e) {
	return Object.entries(e).reduce((e, [r, i]) => box.isBox(i) ? (box.isWritableBox(i) ? Object.defineProperty(e, r, {
		get() {
			return i.current;
		},
		set(e) {
			i.current = e;
		}
	}) : Object.defineProperty(e, r, { get() {
		return i.current;
	} }), e) : Object.assign(e, { [r]: i }), {});
}
function toReadonlyBox(e) {
	return box.isWritableBox(e) ? {
		[BoxSymbol]: !0,
		get current() {
			return e.current;
		}
	} : e;
}
box.from = boxFrom, box.with = boxWith, box.flatten = boxFlatten, box.readonly = toReadonlyBox, box.isBox = isBox, box.isWritableBox = isWritableBox;
function composeHandlers(...e) {
	return function(r) {
		for (let i of e) if (i) {
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
function isUppercase(e = "") {
	if (!NUMBER_CHAR_RE.test(e)) return e !== e.toLowerCase();
}
function splitByCase(e) {
	let r = [], i = "", a, o;
	for (let s of e) {
		let e = STR_SPLITTERS.includes(s);
		if (e === !0) {
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
				let e = i.at(-1);
				r.push(i.slice(0, Math.max(0, i.length - 1))), i = e + s, a = c;
				continue;
			}
		}
		i += s, a = c, o = e;
	}
	return r.push(i), r;
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
	let r = {};
	function i(e, i) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			r[pascalCase(e)] = i;
			return;
		}
		if (e.startsWith("--")) {
			r[e] = i;
			return;
		}
		r[camelCase(e)] = i;
	}
	return StyleToObject(e, i), r;
}
function executeCallbacks(...e) {
	return (...r) => {
		for (let i of e) typeof i == "function" && i(...r);
	};
}
function addEventListener$1(e, r, i, a) {
	let o = Array.isArray(r) ? r : [r];
	return o.forEach((r) => e.addEventListener(r, i, a)), () => {
		o.forEach((r) => e.removeEventListener(r, i, a));
	};
}
function createParser(e, r) {
	let i = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(i) ? e.replace(i, r) : e;
	};
}
var camelToKebab = createParser(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function styleToCSS(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((r) => `${camelToKebab(r)}: ${e[r]};`).join("\n");
}
function styleToString(e = {}) {
	return styleToCSS(e).replace("\n", " ");
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
function isEventHandler(e) {
	return EVENT_LIST_SET.has(e);
}
function mergeProps(...e) {
	let r = { ...e[0] };
	for (let i = 1; i < e.length; i++) {
		let a = e[i];
		if (a) {
			for (let e of Object.keys(a)) {
				let i = r[e], o = a[e], s = typeof i == "function", c = typeof o == "function";
				if (s && typeof c && isEventHandler(e)) r[e] = composeHandlers(i, o);
				else if (s && c) r[e] = executeCallbacks(i, o);
				else if (e === "class") {
					let a = isClassValue(i), s = isClassValue(o);
					a && s ? r[e] = clsx(i, o) : a ? r[e] = clsx(i) : s && (r[e] = clsx(o));
				} else if (e === "style") {
					let a = typeof i == "object", s = typeof o == "object", c = typeof i == "string", l = typeof o == "string";
					if (a && s) r[e] = {
						...i,
						...o
					};
					else if (a && l) {
						let a = cssToStyleObj(o);
						r[e] = {
							...i,
							...a
						};
					} else if (c && s) r[e] = {
						...cssToStyleObj(i),
						...o
					};
					else if (c && l) {
						let a = cssToStyleObj(i), s = cssToStyleObj(o);
						r[e] = {
							...a,
							...s
						};
					} else a ? r[e] = i : s ? r[e] = o : c ? r[e] = i : l && (r[e] = o);
				} else r[e] = o === void 0 ? i : o;
			}
			for (let e of Object.getOwnPropertySymbols(a)) {
				let i = r[e], o = a[e];
				r[e] = o === void 0 ? i : o;
			}
		}
	}
	return typeof r.style == "object" && (r.style = styleToString(r.style).replaceAll("\n", " ")), r.hidden !== !0 && (r.hidden = void 0, delete r.hidden), r.disabled !== !0 && (r.disabled = void 0, delete r.disabled), r;
}
const defaultWindow$1 = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function getActiveElement$2(e) {
	let r = e.activeElement;
	for (; r?.shadowRoot;) {
		let e = r.shadowRoot.activeElement;
		if (e === r) break;
		r = e;
	}
	return r;
}
new class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: r = defaultWindow$1, document: i = r?.document } = e;
		r !== void 0 && (this.#e = i, this.#t = createSubscriber((e) => {
			let i = on(r, "focusin", e), a = on(r, "focusout", e);
			return () => {
				i(), a();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? getActiveElement$2(this.#e) : null;
	}
}();
function runEffect$1(e, r) {
	switch (e) {
		case "post":
			user_effect(r);
			break;
		case "pre":
			user_pre_effect(r);
			break;
	}
}
function runWatcher$1(e, r, i, a = {}) {
	let { lazy: o = !1 } = a, s = !o, c = Array.isArray(e) ? [] : void 0;
	runEffect$1(r, () => {
		let r = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!s) {
			s = !0, c = r;
			return;
		}
		let a = untrack(() => i(r, c));
		return c = r, a;
	});
}
function runWatcherOnce$1(e, r, i) {
	let a = effect_root(() => {
		let o = !1;
		runWatcher$1(e, r, (e, r) => {
			if (o) {
				a();
				return;
			}
			let s = i(e, r);
			return o = !0, s;
		}, { lazy: !0 });
	});
	user_effect(() => a);
}
function watch$1(e, r, i) {
	runWatcher$1(e, "post", r, i);
}
function watchPre$1(e, r, i) {
	runWatcher$1(e, "pre", r, i);
}
watch$1.pre = watchPre$1;
function watchOnce$1(e, r) {
	runWatcherOnce$1(e, "post", r);
}
function watchOncePre$1(e, r) {
	runWatcherOnce$1(e, "pre", r);
}
watchOnce$1.pre = watchOncePre$1;
function debounce$1(e, r) {
	let i, a = null;
	return (...o) => new Promise((s) => {
		a && a(void 0), a = s, clearTimeout(i), i = setTimeout(async () => {
			let r = await e(...o);
			a &&= (a(r), null);
		}, r);
	});
}
function throttle(e, r) {
	let i = 0, a = null;
	return (...o) => {
		let s = Date.now();
		return i && s - i < r ? a ?? Promise.resolve(void 0) : (i = s, a = e(...o), a);
	};
}
function runResource(e, r, i = {}, a) {
	let { lazy: o = !1, once: s = !1, initialValue: c, debounce: l, throttle: u } = i, d = /* @__PURE__ */ state(proxy(c)), f = /* @__PURE__ */ state(!1), p = /* @__PURE__ */ state(void 0), m = /* @__PURE__ */ state(proxy([])), h = () => {
		get$1(m).forEach((e) => e()), set(m, [], !0);
	}, g = (e) => {
		set(m, [...get$1(m), e], !0);
	}, _ = async (e, i, a = !1) => {
		try {
			set(f, !0), set(p, void 0), h();
			let o = new AbortController();
			g(() => o.abort());
			let s = await r(e, i, {
				data: get$1(d),
				refetching: a,
				onCleanup: g,
				signal: o.signal
			});
			return set(d, s, !0), s;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || set(p, e, !0);
			return;
		} finally {
			set(f, !1);
		}
	}, v = l ? debounce$1(_, l) : u ? throttle(_, u) : _, y = Array.isArray(e) ? e : [e], b;
	return a((r, i) => {
		s && b || (b = r, v(Array.isArray(e) ? r : r[0], Array.isArray(e) ? i : i?.[0]));
	}, { lazy: o }), {
		get current() {
			return get$1(d);
		},
		get loading() {
			return get$1(f);
		},
		get error() {
			return get$1(p);
		},
		mutate: (e) => {
			set(d, e, !0);
		},
		refetch: (r) => {
			let i = y.map((e) => e());
			return v(Array.isArray(e) ? i : i[0], Array.isArray(e) ? i : i[0], r ?? !0);
		}
	};
}
function resource(e, r, i) {
	return runResource(e, r, i, (r, i) => {
		let a = Array.isArray(e) ? e : [e];
		watch$1(() => a.map((e) => e()), (e, i) => {
			r(e, i ?? []);
		}, i);
	});
}
function resourcePre(e, r, i) {
	return runResource(e, r, i, (r, i) => {
		let a = Array.isArray(e) ? e : [e];
		watch$1.pre(() => a.map((e) => e()), (e, i) => {
			r(e, i ?? []);
		}, i);
	});
}
resource.pre = resourcePre;
function afterTick(e) {
	tick().then(e);
}
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
function getActiveElement$1(e) {
	let r = e.activeElement;
	for (; r?.shadowRoot;) {
		let e = r.shadowRoot.activeElement;
		if (e === r) break;
		r = e;
	}
	return r;
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
		typeof e == "function" ? this.element = box.with(e) : this.element = e;
	}
	getDocument = () => getDocument(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => getActiveElement$1(this.root);
	isActiveElement = (e) => e === this.getActiveElement();
	getElementById(e) {
		return this.root.getElementById(e);
	}
	querySelector = (e) => this.root ? this.root.querySelector(e) : null;
	querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
	setTimeout = (e, r) => this.getWindow().setTimeout(e, r);
	clearTimeout = (e) => this.getWindow().clearTimeout(e);
};
function attachRef(e, r) {
	return { [createAttachmentKey()]: (i) => box.isBox(e) ? (e.current = i, untrack(() => r?.(i)), () => {
		"isConnected" in i && i.isConnected || (e.current = null, r?.(null));
	}) : (e(i), untrack(() => r?.(i)), () => {
		"isConnected" in i && i.isConnected || (e(null), r?.(null));
	}) };
}
function calculateAriaValues({ layout: e, panesArray: r, pivotIndices: i }) {
	let a = 0, o = 100, s = 0, c = 0, l = i[0];
	for (let e = 0; e < r.length; e++) {
		let { maxSize: i = 100, minSize: u = 0 } = r[e].constraints;
		e === l ? (a = u, o = i) : (s += u, c += i);
	}
	return {
		valueMax: Math.min(o, 100 - s),
		valueMin: Math.max(a, 100 - c),
		valueNow: e[l]
	};
}
function assert(e, r = "Assertion failed!") {
	if (!e) throw console.error(r), Error(r);
}
function areNumbersAlmostEqual(e, r, i = 10) {
	return compareNumbersWithTolerance(e, r, i) === 0;
}
function compareNumbersWithTolerance(e, r, i = 10) {
	let a = roundTo(e, i), o = roundTo(r, i);
	return Math.sign(a - o);
}
function areArraysEqual(e, r) {
	if (e.length !== r.length) return !1;
	for (let i = 0; i < e.length; i++) if (e[i] !== r[i]) return !1;
	return !0;
}
function roundTo(e, r) {
	return Number.parseFloat(e.toFixed(r));
}
const isBrowser = typeof document < "u";
function isHTMLElement(e) {
	return e instanceof HTMLElement;
}
function isKeyDown(e) {
	return e.type === "keydown";
}
function isMouseEvent(e) {
	return e.type.startsWith("mouse");
}
function isTouchEvent(e) {
	return e.type.startsWith("touch");
}
function resizePane({ paneConstraints: e, paneIndex: r, initialSize: i }) {
	let a = e[r];
	assert(a != null, "Pane constraints should not be null.");
	let { collapsedSize: o = 0, collapsible: s, maxSize: c = 100, minSize: l = 0 } = a, u = i;
	return compareNumbersWithTolerance(u, l) < 0 && (u = getAdjustedSizeForCollapsible(u, s, o, l)), u = Math.min(c, u), Number.parseFloat(u.toFixed(10));
}
function getAdjustedSizeForCollapsible(e, r, i, a) {
	return r && compareNumbersWithTolerance(e, (i + a) / 2) < 0 ? i : a;
}
function noop() {}
function updateResizeHandleAriaValues({ groupId: e, layout: r, panesArray: i, domContext: a }) {
	let o = getResizeHandleElementsForGroup(e, a);
	for (let e = 0; e < i.length - 1; e++) {
		let { valueMax: a, valueMin: s, valueNow: c } = calculateAriaValues({
			layout: r,
			panesArray: i,
			pivotIndices: [e, e + 1]
		}), l = o[e];
		if (isHTMLElement(l)) {
			let r = i[e];
			l.setAttribute("aria-controls", r.opts.id.current), l.setAttribute("aria-valuemax", `${Math.round(a)}`), l.setAttribute("aria-valuemin", `${Math.round(s)}`), l.setAttribute("aria-valuenow", c == null ? "" : `${Math.round(c)}`);
		}
	}
	return () => {
		for (let e of o) e.removeAttribute("aria-controls"), e.removeAttribute("aria-valuemax"), e.removeAttribute("aria-valuemin"), e.removeAttribute("aria-valuenow");
	};
}
function getResizeHandleElementsForGroup(e, r) {
	return isBrowser ? Array.from(r.querySelectorAll(`[data-pane-resizer-id][data-pane-group-id="${e}"]`)) : [];
}
function getResizeHandleElementIndex({ groupId: e, id: r, domContext: i }) {
	return isBrowser ? getResizeHandleElementsForGroup(e, i).findIndex((e) => e.getAttribute("data-pane-resizer-id") === r) ?? null : null;
}
function getPivotIndices({ groupId: e, dragHandleId: r, domContext: i }) {
	let a = getResizeHandleElementIndex({
		groupId: e,
		id: r,
		domContext: i
	});
	return a == null ? [-1, -1] : [a, a + 1];
}
function paneDataHelper(e, r, i) {
	let a = e.map((e) => e.constraints), o = findPaneDataIndex(e, r), s = a[o], c = o === e.length - 1 ? [o - 1, o] : [o, o + 1], l = i[o];
	return {
		...s,
		paneSize: l,
		pivotIndices: c
	};
}
function findPaneDataIndex(e, r) {
	return e.findIndex((e) => e.opts.id.current === r.opts.id.current);
}
function callPaneCallbacks(e, r, i) {
	for (let a = 0; a < r.length; a++) {
		let o = r[a], s = e[a];
		assert(s);
		let { collapsedSize: c = 0, collapsible: l } = s.constraints, u = i[s.opts.id.current];
		if (!(u == null || o !== u)) continue;
		i[s.opts.id.current] = o;
		let { onCollapse: d, onExpand: f, onResize: p } = s.callbacks;
		p?.(o, u), l && (d || f) && (f && (u == null || u === c) && o !== c && f(), d && (u == null || u !== c) && o === c && d());
	}
}
function getUnsafeDefaultLayout({ panesArray: e }) {
	let r = Array(e.length), i = e.map((e) => e.constraints), a = 0, o = 100;
	for (let s = 0; s < e.length; s++) {
		let e = i[s];
		assert(e);
		let { defaultSize: c } = e;
		c != null && (a++, r[s] = c, o -= c);
	}
	for (let s = 0; s < e.length; s++) {
		let c = i[s];
		assert(c);
		let { defaultSize: l } = c;
		if (l != null) continue;
		let u = e.length - a, d = o / u;
		a++, r[s] = d, o -= d;
	}
	return r;
}
function validatePaneGroupLayout({ layout: e, paneConstraints: r }) {
	let i = [...e], a = i.reduce((e, r) => e + r, 0);
	if (i.length !== r.length) throw Error(`Invalid ${r.length} pane layout: ${i.map((e) => `${e}%`).join(", ")}`);
	if (!areNumbersAlmostEqual(a, 100)) for (let e = 0; e < r.length; e++) {
		let r = i[e];
		assert(r != null), i[e] = 100 / a * r;
	}
	let o = 0;
	for (let e = 0; e < r.length; e++) {
		let a = i[e];
		assert(a != null);
		let s = resizePane({
			paneConstraints: r,
			paneIndex: e,
			initialSize: a
		});
		a !== s && (o += a - s, i[e] = s);
	}
	if (!areNumbersAlmostEqual(o, 0)) for (let e = 0; e < r.length; e++) {
		let a = i[e];
		assert(a != null);
		let s = a + o, c = resizePane({
			paneConstraints: r,
			paneIndex: e,
			initialSize: s
		});
		if (a !== c && (o -= c - a, i[e] = c, areNumbersAlmostEqual(o, 0))) break;
	}
	return i;
}
function getPaneGroupElement(e, r) {
	return isBrowser && r.querySelector(`[data-pane-group][data-pane-group-id="${e}"]`) || null;
}
function getResizeHandleElement(e, r) {
	return isBrowser && r.querySelector(`[data-pane-resizer-id="${e}"]`) || null;
}
function getDragOffsetPercentage({ event: e, dragHandleId: r, dir: i, initialDragState: a, domContext: o }) {
	let s = i === "horizontal", c = getResizeHandleElement(r, o);
	assert(c);
	let l = c.getAttribute("data-pane-group-id");
	assert(l);
	let { initialCursorPosition: u } = a, d = getResizeEventCursorPosition(i, e), f = getPaneGroupElement(l, o);
	assert(f);
	let p = f.getBoundingClientRect(), m = s ? p.width : p.height;
	return (d - u) / m * 100;
}
function getDeltaPercentage({ event: e, dragHandleId: r, dir: i, initialDragState: a, keyboardResizeBy: o, domContext: s }) {
	if (isKeyDown(e)) {
		let r = i === "horizontal", a = 0;
		a = e.shiftKey ? 100 : o ?? 10;
		let s = 0;
		switch (e.key) {
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
		event: e,
		dragHandleId: r,
		dir: i,
		initialDragState: a,
		domContext: s
	});
}
function getResizeEventCursorPosition(e, r) {
	let i = e === "horizontal";
	if (isMouseEvent(r)) return i ? r.clientX : r.clientY;
	if (isTouchEvent(r)) {
		let e = r.touches[0];
		return assert(e), i ? e.screenX : e.screenY;
	} else throw Error(`Unsupported event type "${r.type}"`);
}
function getResizeHandlePaneIds({ groupId: e, handleId: r, panesArray: i, domContext: a }) {
	let o = getResizeHandleElement(r, a), s = getResizeHandleElementsForGroup(e, a), c = o ? s.indexOf(o) : -1;
	return [i[c]?.opts.id.current ?? null, i[c + 1]?.opts.id.current ?? null];
}
const defaultWindow = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function getActiveElement(e) {
	let r = e.activeElement;
	for (; r?.shadowRoot;) {
		let e = r.shadowRoot.activeElement;
		if (e === r) break;
		r = e;
	}
	return r;
}
new class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: r = defaultWindow, document: i = r?.document } = e;
		r !== void 0 && (this.#e = i, this.#t = createSubscriber((e) => {
			let i = on(r, "focusin", e), a = on(r, "focusout", e);
			return () => {
				i(), a();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? getActiveElement(this.#e) : null;
	}
}();
function runEffect(e, r) {
	switch (e) {
		case "post":
			user_effect(r);
			break;
		case "pre":
			user_pre_effect(r);
			break;
	}
}
function runWatcher(e, r, i, a = {}) {
	let { lazy: o = !1 } = a, s = !o, c = Array.isArray(e) ? [] : void 0;
	runEffect(r, () => {
		let r = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!s) {
			s = !0, c = r;
			return;
		}
		let a = untrack(() => i(r, c));
		return c = r, a;
	});
}
function runWatcherOnce(e, r, i) {
	let a = effect_root(() => {
		let o = !1;
		runWatcher(e, r, (e, r) => {
			if (o) {
				a();
				return;
			}
			let s = i(e, r);
			return o = !0, s;
		}, { lazy: !0 });
	});
	user_effect(() => a);
}
function watch(e, r, i) {
	runWatcher(e, "post", r, i);
}
function watchPre(e, r, i) {
	runWatcher(e, "pre", r, i);
}
watch.pre = watchPre;
function watchOnce(e, r) {
	runWatcherOnce(e, "post", r);
}
function watchOncePre(e, r) {
	runWatcherOnce(e, "pre", r);
}
watchOnce.pre = watchOncePre;
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
		let r = getContext(this.#t);
		return r === void 0 ? e : r;
	}
	set(e) {
		return setContext(this.#t, e);
	}
};
function adjustLayoutByDelta({ delta: e, layout: r, paneConstraints: i, pivotIndices: a, trigger: o }) {
	if (areNumbersAlmostEqual(e, 0)) return r;
	let s = [...r], [c, l] = a, u = 0;
	if (o === "keyboard") {
		{
			let a = e < 0 ? l : c, o = i[a];
			if (assert(o), o.collapsible) {
				let o = r[a];
				assert(o != null);
				let s = i[a];
				assert(s);
				let { collapsedSize: c = 0, minSize: l = 0 } = s;
				if (areNumbersAlmostEqual(o, c)) {
					let r = l - o;
					compareNumbersWithTolerance(r, Math.abs(e)) > 0 && (e = e < 0 ? 0 - r : r);
				}
			}
		}
		{
			let a = e < 0 ? c : l, o = i[a];
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
					compareNumbersWithTolerance(r, Math.abs(e)) > 0 && (e = e < 0 ? 0 - r : r);
				}
			}
		}
	}
	{
		let a = e < 0 ? 1 : -1, o = e < 0 ? l : c, s = 0;
		for (;;) {
			let e = r[o];
			assert(e != null);
			let c = resizePane({
				paneConstraints: i,
				paneIndex: o,
				initialSize: 100
			}) - e;
			if (s += c, o += a, o < 0 || o >= i.length) break;
		}
		let u = Math.min(Math.abs(e), Math.abs(s));
		e = e < 0 ? 0 - u : u;
	}
	{
		let a = e < 0 ? c : l;
		for (; a >= 0 && a < i.length;) {
			let o = Math.abs(e) - Math.abs(u), c = r[a];
			assert(c != null);
			let l = c - o, d = resizePane({
				paneConstraints: i,
				paneIndex: a,
				initialSize: l
			});
			if (!areNumbersAlmostEqual(c, d) && (u += c - d, s[a] = d, u.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, { numeric: !0 }) >= 0)) break;
			e < 0 ? a-- : a++;
		}
	}
	if (areNumbersAlmostEqual(u, 0)) return r;
	{
		let a = e < 0 ? l : c, o = r[a];
		assert(o != null);
		let d = o + u, f = resizePane({
			paneConstraints: i,
			paneIndex: a,
			initialSize: d
		});
		if (s[a] = f, !areNumbersAlmostEqual(f, d)) {
			let r = d - f, a = e < 0 ? l : c;
			for (; a >= 0 && a < i.length;) {
				let o = s[a];
				assert(o != null);
				let c = o + r, l = resizePane({
					paneConstraints: i,
					paneIndex: a,
					initialSize: c
				});
				if (areNumbersAlmostEqual(o, l) || (r -= l - o, s[a] = l), areNumbersAlmostEqual(r, 0)) break;
				e > 0 ? a-- : a++;
			}
		}
	}
	return areNumbersAlmostEqual(s.reduce((e, r) => r + e, 0), 100) ? s : r;
}
var currentState = null, element = null;
function getCursorStyle(e) {
	switch (e) {
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
function setGlobalCursorStyle(e, r) {
	if (currentState === e) return;
	currentState = e;
	let i = getCursorStyle(e);
	element === null && (element = r.createElement("style"), r.head.appendChild(element)), element.innerHTML = `*{cursor: ${i}!important;}`;
}
function computePaneFlexBoxStyle({ defaultSize: e, dragState: r, layout: i, panesArray: a, paneIndex: o, precision: s = 3 }) {
	let c = i[o], l;
	return l = c == null ? e ?? "1" : a.length === 1 ? "1" : c.toPrecision(s), {
		flexBasis: 0,
		flexGrow: l,
		flexShrink: 1,
		overflow: "hidden",
		pointerEvents: r === null ? void 0 : "none"
	};
}
function initializeStorage(e) {
	try {
		if (typeof localStorage > "u") throw TypeError("localStorage is not supported in this environment");
		e.getItem = (e) => localStorage.getItem(e), e.setItem = (e, r) => localStorage.setItem(e, r);
	} catch (r) {
		console.error(r), e.getItem = () => null, e.setItem = () => {};
	}
}
function getPaneGroupKey(e) {
	return `paneforge:${e}`;
}
function getPaneKey(e) {
	return e.map((e) => e.opts.order.current ? `${e.opts.order.current}:${JSON.stringify(e.constraints)}` : JSON.stringify(e.constraints)).sort().join(",");
}
function loadSerializedPaneGroupState(e, r) {
	try {
		let i = getPaneGroupKey(e), a = r.getItem(i), o = JSON.parse(a || "");
		if (typeof o == "object" && o) return o;
	} catch {}
	return null;
}
function loadPaneGroupState(e, r, i) {
	return (loadSerializedPaneGroupState(e, i) || {})[getPaneKey(r)] || null;
}
function savePaneGroupState(e, r, i, a, o) {
	let s = getPaneGroupKey(e), c = getPaneKey(r), l = loadSerializedPaneGroupState(e, o) || {};
	l[c] = {
		expandToSizes: Object.fromEntries(i.entries()),
		layout: a
	};
	try {
		o.setItem(s, JSON.stringify(l));
	} catch (e) {
		console.error(e);
	}
}
var debounceMap = {};
function debounce(e, r = 10) {
	let i = null;
	return (...a) => {
		i !== null && clearTimeout(i), i = setTimeout(() => {
			e(...a);
		}, r);
	};
}
function updateStorageValues({ autoSaveId: e, layout: r, storage: i, panesArray: a, paneSizeBeforeCollapse: o }) {
	if (r.length === 0 || r.length !== a.length) return;
	let s = debounceMap[e];
	s ?? (s = debounce(savePaneGroupState, 100), debounceMap[e] = s);
	let c = [...a];
	s(e, c, new Map(o), r, i);
}
const defaultStorage = {
	getItem: (e) => (initializeStorage(defaultStorage), defaultStorage.getItem(e)),
	setItem: (e, r) => {
		initializeStorage(defaultStorage), defaultStorage.setItem(e, r);
	}
};
var PaneGroupContext = new Context("PaneGroup"), PaneGroupState = class e {
	static create(r) {
		return PaneGroupContext.set(new e(r));
	}
	opts;
	attachment;
	domContext;
	#e = /* @__PURE__ */ state(null);
	get dragState() {
		return get$1(this.#e);
	}
	set dragState(e) {
		set(this.#e, e);
	}
	#t = /* @__PURE__ */ state([]);
	get layout() {
		return get$1(this.#t);
	}
	set layout(e) {
		set(this.#t, e);
	}
	#n = /* @__PURE__ */ state([]);
	get panesArray() {
		return get$1(this.#n);
	}
	set panesArray(e) {
		set(this.#n, e);
	}
	#r = /* @__PURE__ */ state(!1);
	get panesArrayChanged() {
		return get$1(this.#r);
	}
	set panesArrayChanged(e) {
		set(this.#r, e, !0);
	}
	#i = /* @__PURE__ */ state(proxy({}));
	get paneIdToLastNotifiedSizeMap() {
		return get$1(this.#i);
	}
	set paneIdToLastNotifiedSizeMap(e) {
		set(this.#i, e, !0);
	}
	paneSizeBeforeCollapseMap = /* @__PURE__ */ new Map();
	prevDelta = 0;
	constructor(e) {
		this.opts = e, this.attachment = attachRef(this.opts.ref), this.domContext = new DOMContext(this.opts.ref), watch([
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
			let e = this.layout, r = null;
			if (this.opts.autoSaveId.current) {
				let e = loadPaneGroupState(this.opts.autoSaveId.current, this.panesArray, this.opts.storage.current);
				e && (this.paneSizeBeforeCollapseMap = new Map(Object.entries(e.expandToSizes)), r = e.layout);
			}
			r ??= getUnsafeDefaultLayout({ panesArray: this.panesArray });
			let i = validatePaneGroupLayout({
				layout: r,
				paneConstraints: this.panesArray.map((e) => e.constraints)
			});
			areArraysEqual(e, i) || (this.layout = i, this.opts.onLayout.current?.(i), callPaneCallbacks(this.panesArray, i, this.paneIdToLastNotifiedSizeMap));
		});
	}
	setLayout = (e) => {
		this.layout = e;
	};
	registerResizeHandle = (e) => (r) => {
		r.preventDefault();
		let i = this.opts.direction.current, a = this.dragState, o = this.opts.id.current, s = this.opts.keyboardResizeBy.current, c = this.layout, l = this.panesArray, { initialLayout: u } = a ?? {}, d = this.domContext.getDocument(), f = getPivotIndices({
			groupId: o,
			dragHandleId: e,
			domContext: this.domContext
		}), p = getDeltaPercentage({
			event: r,
			dragHandleId: e,
			dir: i,
			initialDragState: a,
			keyboardResizeBy: s,
			domContext: this.domContext
		});
		if (p === 0) return;
		let m = i === "horizontal";
		d.dir === "rtl" && m && (p = -p);
		let h = l.map((e) => e.constraints), g = adjustLayoutByDelta({
			delta: p,
			layout: u ?? c,
			paneConstraints: h,
			pivotIndices: f,
			trigger: isKeyDown(r) ? "keyboard" : "mouse-or-touch"
		}), _ = !areArraysEqual(c, g);
		(isMouseEvent(r) || isTouchEvent(r)) && this.prevDelta !== p && (this.prevDelta = p, setGlobalCursorStyle(_ ? m ? "horizontal" : "vertical" : m ? p < 0 ? "horizontal-min" : "horizontal-max" : p < 0 ? "vertical-min" : "vertical-max", d)), _ && (this.setLayout(g), this.opts.onLayout.current?.(g), callPaneCallbacks(l, g, this.paneIdToLastNotifiedSizeMap));
	};
	resizePane = (e, r) => {
		let i = this.layout, a = this.panesArray, o = a.map((e) => e.constraints), { paneSize: s, pivotIndices: c } = paneDataHelper(a, e, i);
		assert(s != null);
		let l = adjustLayoutByDelta({
			delta: findPaneDataIndex(a, e) === a.length - 1 ? s - r : r - s,
			layout: i,
			paneConstraints: o,
			pivotIndices: c,
			trigger: "imperative-api"
		});
		areArraysEqual(i, l) || (this.setLayout(l), this.opts.onLayout.current?.(l), callPaneCallbacks(a, l, this.paneIdToLastNotifiedSizeMap));
	};
	startDragging = (e, r) => {
		let i = this.opts.direction.current, a = this.layout, o = getResizeHandleElement(e, this.domContext);
		assert(o);
		let s = getResizeEventCursorPosition(i, r);
		this.dragState = {
			dragHandleId: e,
			dragHandleRect: o.getBoundingClientRect(),
			initialCursorPosition: s,
			initialLayout: a
		};
	};
	stopDragging = () => {
		resetGlobalCursorStyle(), this.dragState = null;
	};
	isPaneCollapsed = (e) => {
		let r = this.panesArray, i = this.layout, { collapsedSize: a = 0, collapsible: o, paneSize: s } = paneDataHelper(r, e, i);
		return typeof s != "number" || typeof a != "number" ? !1 : o === !0 && areNumbersAlmostEqual(s, a);
	};
	expandPane = (e) => {
		let r = this.layout, i = this.panesArray;
		if (!e.constraints.collapsible) return;
		let a = i.map((e) => e.constraints), { collapsedSize: o = 0, paneSize: s, minSize: c = 0, pivotIndices: l } = paneDataHelper(i, e, r);
		if (s !== o) return;
		let u = this.paneSizeBeforeCollapseMap.get(e.opts.id.current), d = u != null && u >= c ? u : c, f = adjustLayoutByDelta({
			delta: findPaneDataIndex(i, e) === i.length - 1 ? s - d : d - s,
			layout: r,
			paneConstraints: a,
			pivotIndices: l,
			trigger: "imperative-api"
		});
		areArraysEqual(r, f) || (this.setLayout(f), this.opts.onLayout.current?.(f), callPaneCallbacks(i, f, this.paneIdToLastNotifiedSizeMap));
	};
	collapsePane = (e) => {
		let r = this.layout, i = this.panesArray;
		if (!e.constraints.collapsible) return;
		let a = i.map((e) => e.constraints), { collapsedSize: o = 0, paneSize: s, pivotIndices: c } = paneDataHelper(i, e, r);
		if (assert(s != null), s === o) return;
		this.paneSizeBeforeCollapseMap.set(e.opts.id.current, s);
		let l = adjustLayoutByDelta({
			delta: findPaneDataIndex(i, e) === i.length - 1 ? s - o : o - s,
			layout: r,
			paneConstraints: a,
			pivotIndices: c,
			trigger: "imperative-api"
		});
		areArraysEqual(r, l) || (this.layout = l, this.opts.onLayout.current?.(l), callPaneCallbacks(i, l, this.paneIdToLastNotifiedSizeMap));
	};
	getPaneSize = (e) => paneDataHelper(this.panesArray, e, this.layout).paneSize;
	getPaneStyle = (e, r) => {
		let i = this.panesArray, a = this.layout, o = this.dragState;
		return computePaneFlexBoxStyle({
			defaultSize: r,
			dragState: o,
			layout: a,
			panesArray: i,
			paneIndex: findPaneDataIndex(i, e)
		});
	};
	isPaneExpanded = (e) => {
		let { collapsedSize: r = 0, collapsible: i, paneSize: a } = paneDataHelper(this.panesArray, e, this.layout);
		return !i || a > r;
	};
	registerPane = (e) => {
		let r = [...this.panesArray, e];
		return r.sort((e, r) => {
			let i = e.opts.order.current, a = r.opts.order.current;
			return i == null && a == null ? 0 : i == null ? -1 : a == null ? 1 : i - a;
		}), this.panesArray = r, this.panesArrayChanged = !0, () => {
			let r = [...this.panesArray], i = findPaneDataIndex(this.panesArray, e);
			i < 0 || (r.splice(i, 1), this.panesArray = r, delete this.paneIdToLastNotifiedSizeMap[e.opts.id.current], this.panesArrayChanged = !0);
		};
	};
	#a = () => {
		let e = this.opts.id.current, r = getResizeHandleElementsForGroup(e, this.domContext), i = this.panesArray, a = r.map((r) => {
			let a = r.getAttribute("data-pane-resizer-id");
			if (!a) return noop;
			let [o, s] = getResizeHandlePaneIds({
				groupId: e,
				handleId: a,
				panesArray: i,
				domContext: this.domContext
			});
			if (o == null || s == null) return noop;
			let c = addEventListener$1(r, "keydown", (r) => {
				if (r.defaultPrevented || r.key !== "Enter") return;
				r.preventDefault();
				let i = this.panesArray, s = i.findIndex((e) => e.opts.id.current === o);
				if (s < 0) return;
				let c = i[s];
				assert(c);
				let l = this.layout, u = l[s], { collapsedSize: d = 0, collapsible: f, minSize: p = 0 } = c.constraints;
				if (!(u != null && f)) return;
				let m = adjustLayoutByDelta({
					delta: areNumbersAlmostEqual(u, d) ? p - u : d - u,
					layout: l,
					paneConstraints: i.map((e) => e.constraints),
					pivotIndices: getPivotIndices({
						groupId: e,
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
			for (let e of a) e();
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
	set props(e) {
		set(this.#o, e);
	}
}, resizeKeys = [
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"End",
	"Home"
], PaneResizerState = class e {
	static create(r) {
		return new e(r, PaneGroupContext.get());
	}
	opts;
	#e;
	attachment;
	domContext;
	#t = /* @__PURE__ */ user_derived(() => this.#e.dragState?.dragHandleId === this.opts.id.current);
	#n = /* @__PURE__ */ state(!1);
	resizeHandler = null;
	constructor(e, r) {
		this.opts = e, this.#e = r, this.attachment = attachRef(this.opts.ref), this.domContext = new DOMContext(this.opts.ref), user_effect(() => {
			this.opts.disabled.current ? this.resizeHandler = null : this.resizeHandler = this.#e.registerResizeHandle(this.opts.id.current);
		}), user_effect(() => {
			let e = this.opts.ref.current;
			if (!e) return;
			let r = this.opts.disabled.current, i = this.resizeHandler, a = get$1(this.#t);
			if (r || i === null || !a) return;
			let o = (e) => {
				i(e);
			}, s = (e) => {
				i(e);
			}, c = () => {
				e.blur(), this.#e.stopDragging(), this.opts.onDraggingChange.current(!1);
			}, l = this.domContext.getDocument().body, u = this.domContext.getWindow();
			return executeCallbacks(on(l, "contextmenu", c), on(l, "mousemove", o), on(l, "touchmove", o, { passive: !1 }), on(l, "mouseleave", s), on(u, "mouseup", c), on(u, "touchend", c));
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
		if (resizeKeys.includes(e.key)) {
			e.preventDefault(), this.resizeHandler(e);
			return;
		}
		if (e.key !== "F6") return;
		e.preventDefault();
		let r = getResizeHandleElementsForGroup(this.#e.opts.id.current, this.domContext), i = getResizeHandleElementIndex({
			groupId: this.#e.opts.id.current,
			id: this.opts.id.current,
			domContext: this.domContext
		});
		if (i === null) return;
		let a = 0;
		a = e.shiftKey ? i > 0 ? i - 1 : r.length - 1 : i + 1 < r.length ? i + 1 : 0, r[a].focus();
	};
	#o = () => {
		set(this.#n, !1);
	};
	#s = () => {
		set(this.#n, !0);
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
	set props(e) {
		set(this.#p, e);
	}
}, PaneState = class e {
	static create(r) {
		return new e(r, PaneGroupContext.get());
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
	set callbacks(e) {
		set(this.#t, e);
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
	set constraints(e) {
		set(this.#n, e);
	}
	#r = (e) => {
		set(this.#e, e, !0), afterTick(() => {
			if (this.opts.ref.current) {
				let e = this.opts.ref.current;
				if (getComputedStyle(e).transitionDuration === "0s") {
					set(this.#e, "");
					return;
				}
				let r = (i) => {
					i.propertyName === "flex-grow" && (set(this.#e, ""), e.removeEventListener("transitionend", r));
				};
				e.addEventListener("transitionend", r);
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
		resize: (e) => this.group.resizePane(this, e),
		getId: () => this.opts.id.current
	};
	constructor(e, r) {
		this.opts = e, this.group = r, this.attachment = attachRef(this.opts.ref), this.domContext = new DOMContext(this.opts.ref), onMount(() => this.group.registerPane(this)), watch(() => snapshot(this.constraints), () => {
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
	set props(e) {
		set(this.#o, e);
	}
}, root_2$5 = /* @__PURE__ */ from_html("<div><!></div>");
function Pane_group(e, r) {
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
		ref: box.with(() => u(), (e) => u(e)),
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
	}, y = comment(), b = first_child(y), x = (e) => {
		var i = comment();
		snippet(first_child(i), () => r.child, () => ({ props: get$1(g) })), append(e, i);
	}, S = (e) => {
		var i = root_2$5();
		attribute_effect(i, () => ({ ...get$1(g) })), snippet(child(i), () => r.children ?? noop$1), reset(i), append(e, i);
	};
	return if_block(b, (e) => {
		r.child ? e(x) : e(S, -1);
	}), append(e, y), pop(v);
}
var root_2$4 = /* @__PURE__ */ from_html("<div><!></div>");
function Pane(e, r) {
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
		ref: box.with(() => o(), (e) => o(e)),
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
	}, S = comment(), C = first_child(S), w = (e) => {
		var i = comment();
		snippet(first_child(i), () => r.child, () => ({ props: get$1(b) })), append(e, i);
	}, T = (e) => {
		var i = root_2$4();
		attribute_effect(i, () => ({ ...get$1(b) })), snippet(child(i), () => r.children ?? noop$1), reset(i), append(e, i);
	};
	return if_block(C, (e) => {
		r.child ? e(w) : e(T, -1);
	}), append(e, S), pop(x);
}
var root_2$3 = /* @__PURE__ */ from_html("<div><!></div>");
function Pane_resizer(e, r) {
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
		ref: box.with(() => o(), (e) => o(e)),
		disabled: box.with(() => s()),
		onDraggingChange: box.with(() => c()),
		tabIndex: box.with(() => l())
	}), f = /* @__PURE__ */ user_derived(() => mergeProps(u, d.props));
	var p = comment(), m = first_child(p), h = (e) => {
		var i = comment();
		snippet(first_child(i), () => r.child, () => ({ props: get$1(f) })), append(e, i);
	}, g = (e) => {
		var i = root_2$3();
		attribute_effect(i, () => ({ ...get$1(f) })), snippet(child(i), () => r.children ?? noop$1), reset(i), append(e, i);
	};
	if_block(m, (e) => {
		r.child ? e(h) : e(g, -1);
	}), append(e, p), pop();
}
var root_2$2 = /* @__PURE__ */ from_html("<div class=\"bg-border h-6 w-1 rounded-lg z-10 flex shrink-0\"></div>");
function Resizable_handle(e, r) {
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
		let e = /* @__PURE__ */ user_derived(() => cn("cn-resizable-handle bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[direction=vertical]:h-px data-[direction=vertical]:w-full data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:h-1 data-[direction=vertical]:after:w-full data-[direction=vertical]:after:translate-x-0 data-[direction=vertical]:after:-translate-y-1/2 [&[data-direction=vertical]>div]:rotate-90", r.class));
		component(c, () => Pane_resizer, (r, s) => {
			s(r, spread_props({
				"data-slot": "resizable-handle",
				get class() {
					return get$1(e);
				}
			}, () => o, {
				get ref() {
					return i();
				},
				set ref(e) {
					i(e);
				},
				children: (e, r) => {
					var i = comment(), o = first_child(i), s = (e) => {
						append(e, root_2$2());
					};
					if_block(o, (e) => {
						a() && e(s);
					}), append(e, i);
				},
				$$slots: { default: !0 }
			}));
		});
	}
	append(e, s), pop();
}
function Resizable_pane_group(e, r) {
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
		let e = /* @__PURE__ */ user_derived(() => cn("cn-resizable-panel-group flex h-full w-full data-[direction=vertical]:flex-col", r.class));
		component(c, () => Pane_group, (r, s) => {
			bind_this(s(r, spread_props({
				"data-slot": "resizable-pane-group",
				get class() {
					return get$1(e);
				}
			}, () => o, {
				get ref() {
					return i();
				},
				set ref(e) {
					i(e);
				}
			})), (e) => a(e), () => a());
		});
	}
	append(e, s), pop();
}
function cubicOut(e) {
	let r = e - 1;
	return r * r * r + 1;
}
function quintOut(e) {
	return --e * e * e * e * e + 1;
}
function flip(e, { from: r, to: i }, a = {}) {
	var { delay: o = 0, duration: s = (e) => Math.sqrt(e) * 120, easing: c = cubicOut } = a, l = getComputedStyle(e), u = l.transform === "none" ? "" : l.transform, [d, f] = l.transformOrigin.split(" ").map(parseFloat);
	d /= e.clientWidth, f /= e.clientHeight;
	var p = get_zoom(e), m = e.clientWidth / i.width / p, h = e.clientHeight / i.height / p, g = r.left + r.width * d, _ = r.top + r.height * f, v = i.left + i.width * d, y = i.top + i.height * f, b = (g - v) * m, x = (_ - y) * h, S = r.width / i.width, C = r.height / i.height;
	return {
		delay: o,
		duration: typeof s == "function" ? s(Math.sqrt(b * b + x * x)) : s,
		easing: c,
		css: (e, r) => `transform: ${u} translate(${r * b}px, ${r * x}px) scale(${e + r * S}, ${e + r * C});`
	};
}
function get_zoom(e) {
	if ("currentCSSZoom" in e) return e.currentCSSZoom;
	for (var r = e, i = 1; r !== null;) i *= +getComputedStyle(r).zoom, r = r.parentElement;
	return i;
}
var root$8 = /* @__PURE__ */ from_html("<div><!></div>");
function Empty(e, r) {
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
	attribute_effect(o, (e) => ({
		"data-slot": "empty",
		class: e,
		...a
	}), [() => cn("gap-4 rounded-xl border-dashed p-6 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance", r.class)]), snippet(child(o), () => r.children ?? noop$1), reset(o), bind_this(o, (e) => i(e), () => i()), append(e, o), pop();
}
var root$7 = /* @__PURE__ */ from_html("<div><!></div>");
function Empty_header(e, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var o = root$7();
	attribute_effect(o, (e) => ({
		"data-slot": "empty-header",
		class: e,
		...a
	}), [() => cn("gap-2 flex max-w-sm flex-col items-center", r.class)]), snippet(child(o), () => r.children ?? noop$1), reset(o), bind_this(o, (e) => i(e), () => i()), append(e, o), pop();
}
const emptyMediaVariants = tv({
	base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
	variants: { variant: {
		default: "bg-transparent",
		icon: "bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-4"
	} },
	defaultVariants: { variant: "default" }
});
var root$6 = /* @__PURE__ */ from_html("<div><!></div>");
function Empty_media(e, r) {
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
	var s = root$6();
	attribute_effect(s, (e) => ({
		"data-slot": "empty-icon",
		"data-variant": a(),
		class: e,
		...o
	}), [() => cn(emptyMediaVariants({ variant: a() }), r.class)]), snippet(child(s), () => r.children ?? noop$1), reset(s), bind_this(s, (e) => i(e), () => i()), append(e, s), pop();
}
var root$5 = /* @__PURE__ */ from_html("<div><!></div>");
function Empty_title(e, r) {
	push(r, !0);
	let i = prop(r, "ref", 15, null), a = /* @__PURE__ */ rest_props(r, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var o = root$5();
	attribute_effect(o, (e) => ({
		"data-slot": "empty-title",
		class: e,
		...a
	}), [() => cn("font-heading text-sm font-medium tracking-tight", r.class)]), snippet(child(o), () => r.children ?? noop$1), reset(o), bind_this(o, (e) => i(e), () => i()), append(e, o), pop();
}
var root_2$1 = /* @__PURE__ */ from_html("<li> </li>"), root_1$1 = /* @__PURE__ */ from_html("<ul class=\"overflow-auto no-scrollbar\"></ul>"), root_5$1 = /* @__PURE__ */ from_html("<!> <!>", 1), root$2 = /* @__PURE__ */ from_html("<div><!></div>");
function Userlist(e, r) {
	push(r, !0);
	let i = () => store_get(userlistStore, "$userlistStore", a), [a, o] = setup_stores(), s = /* @__PURE__ */ user_derived(() => i().userlist), c = /* @__PURE__ */ user_derived(() => get$1(s).length > 0);
	var l = root$2(), u = child(l), d = (e) => {
		var r = root_1$1();
		each(r, 29, () => get$1(s), (e) => e.name, (e, r) => {
			var i = root_2$1(), a = child(i, !0);
			reset(i), template_effect(() => set_text(a, get$1(r).name)), animation(i, () => flip, () => ({
				duration: 200,
				easing: quintOut
			})), transition(3, i, () => blur, () => ({ duration: 200 })), append(e, i);
		}), reset(r), append(e, r);
	}, f = (e) => {
		Empty(e, {
			children: (e, r) => {
				Empty_header(e, {
					children: (e, r) => {
						var i = root_5$1(), a = first_child(i);
						Empty_media(a, {
							variant: "icon",
							children: (e, r) => {
								HugeiconsIcon(e, {
									get icon() {
										return Kar;
									},
									class: "size-5 motion-safe:animate-[spin_6s_linear_infinite]"
								});
							},
							$$slots: { default: !0 }
						}), Empty_title(sibling(a, 2), {
							class: "select-none",
							children: (e, r) => {
								next(), append(e, text("No users"));
							},
							$$slots: { default: !0 }
						}), append(e, i);
					},
					$$slots: { default: !0 }
				});
			},
			$$slots: { default: !0 }
		});
	};
	if_block(u, (e) => {
		get$1(c) ? e(d) : e(f, -1);
	}), reset(l), template_effect((e) => set_class(l, 1, e), [() => clsx$1(cn(r.class))]), append(e, l), pop(), o();
}
var root_2 = /* @__PURE__ */ from_html("<!> <!>", 1), root$1 = /* @__PURE__ */ from_html("<form><!></form>");
function GuestLoginForm(e, r) {
	push(r, !0);
	let i = () => store_get(authStore, "$authStore", a), [a, o] = setup_stores(), s = /* @__PURE__ */ user_derived(() => i().username), c = /* @__PURE__ */ user_derived(() => i().status), l = async (e) => {
		if (e.preventDefault(), !get$1(c)) try {
			store_mutate(authStore, untrack(i).status = !0, untrack(i)), await new Promise((e) => setTimeout(e, 500)), await login(get$1(s));
		} catch (e) {
			console.error(e);
		} finally {
			store_mutate(authStore, untrack(i).status = !1, untrack(i)), store_mutate(authStore, untrack(i).username = "", untrack(i)), store_mutate(authStore, untrack(i).password = void 0, untrack(i));
		}
	};
	var u = root$1();
	Field_group(child(u), {
		children: (e, r) => {
			Field(e, {
				orientation: "horizontal",
				class: "flex flex-row items-start justify-start gap-0",
				children: (e, r) => {
					var a = root_2(), o = first_child(a);
					{
						let e = /* @__PURE__ */ user_derived(() => get$1(s) === "");
						Button(o, {
							type: "submit",
							class: "flex-2 rounded-none border-none",
							get disabled() {
								return get$1(e);
							},
							children: (e, r) => {
								next(), append(e, text("Guest Login"));
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
							return get$1(c);
						},
						get value() {
							return i().username;
						},
						set value(e) {
							store_mutate(authStore, untrack(i).username = e, untrack(i));
						}
					}), append(e, a);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), reset(u), template_effect((e) => set_class(u, 1, e), [() => clsx$1(cn(r.class))]), event("submit", u, l), append(e, u), pop(), o();
}
var root_5 = /* @__PURE__ */ from_html("<!> <!> <!>", 1), root_4 = /* @__PURE__ */ from_html("<div class=\"flex flex-col h-full\"><!> <!></div>"), root_9 = /* @__PURE__ */ from_html("<div class=\"flex flex-col h-full items-center justify-center p-6\"><span class=\"font-semibold\">Features</span></div>"), root_3 = /* @__PURE__ */ from_html("<!> <!> <!>", 1), root_12 = /* @__PURE__ */ from_html("<div class=\"flex flex-row h-full items-center justify-center p-6\"><span class=\"font-semibold\">Player</span></div>"), root_13 = /* @__PURE__ */ from_html("<div class=\"flex flex-col h-full items-center justify-center p-6\"><span class=\"font-semibold\">Playlist</span></div>"), root_11 = /* @__PURE__ */ from_html("<!> <!> <!>", 1), root_1 = /* @__PURE__ */ from_html("<!> <!> <!>", 1);
function CytubeFluidLayout(e, r) {
	push(r, !1);
	let i = () => store_get(clientStore, "$clientStore", a), [a, o] = setup_stores();
	init$1(), Resizable_pane_group(e, {
		direction: "horizontal",
		class: "w-full flex-1 border",
		children: (e, r) => {
			var a = root_1(), o = first_child(a);
			Pane(o, {
				defaultSize: 45,
				minSize: 25,
				maxSize: 50,
				children: (e, r) => {
					Resizable_pane_group(e, {
						direction: "vertical",
						class: "flex-1",
						children: (e, r) => {
							var a = root_3(), o = first_child(a);
							Pane(o, {
								defaultSize: 70,
								children: (e, r) => {
									var a = root_4(), o = child(a);
									Resizable_pane_group(o, {
										direction: "horizontal",
										children: (e, r) => {
											var i = root_5(), a = first_child(i);
											Pane(a, {
												defaultSize: 20,
												children: (e, r) => {
													Userlist(e, { class: "flex flex-col items-start justify-start h-full px-1 py-0.5" });
												},
												$$slots: { default: !0 }
											});
											var o = sibling(a, 2);
											Resizable_handle(o, {}), Pane(sibling(o, 2), {
												defaultSize: 80,
												class: "flex flex-col items-center justify-center h-full",
												children: (e, r) => {
													next(), append(e, text("Chat"));
												},
												$$slots: { default: !0 }
											}), append(e, i);
										},
										$$slots: { default: !0 }
									});
									var s = sibling(o, 2), c = (e) => {
										GuestLoginForm(e, { class: "w-full" });
									};
									if_block(s, (e) => {
										i().logged_in || e(c);
									}), reset(a), append(e, a);
								},
								$$slots: { default: !0 }
							});
							var s = sibling(o, 2);
							Resizable_handle(s, {}), Pane(sibling(s, 2), {
								defaultSize: 30,
								children: (e, r) => {
									append(e, root_9());
								},
								$$slots: { default: !0 }
							}), append(e, a);
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
				children: (e, r) => {
					Resizable_pane_group(e, {
						direction: "vertical",
						class: "flex-1",
						children: (e, r) => {
							var i = root_11(), a = first_child(i);
							Pane(a, {
								defaultSize: 70,
								children: (e, r) => {
									append(e, root_12());
								},
								$$slots: { default: !0 }
							});
							var o = sibling(a, 2);
							Resizable_handle(o, {}), Pane(sibling(o, 2), {
								defaultSize: 30,
								children: (e, r) => {
									append(e, root_13());
								},
								$$slots: { default: !0 }
							}), append(e, i);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			}), append(e, a);
		},
		$$slots: { default: !0 }
	}), pop(), o();
}
var root = /* @__PURE__ */ from_html("<main class=\"flex flex-col flex-1\"><!></main>");
function Main(e) {
	var r = root();
	CytubeFluidLayout(child(r), {}), reset(r), append(e, r);
}
var removeLegacyWrap = () => {
	let e = document.getElementById("wrap");
	e && e.remove();
}, removeLegacyModals = () => {
	let e = document.getElementById("useroptions");
	e && e.remove();
	let r = document.getElementById("emotelist");
	r && r.remove();
	let i = document.getElementById("channeloptions");
	i && i.remove();
	let a = document.getElementById("pmbar");
	a && a.remove();
}, removeLegacyFooter = () => {
	let e = document.getElementById("footer");
	e && e.remove();
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
	let e = initStores();
	try {
		await initOverrides(), await upgradeLegacyElements();
	} catch (r) {
		throw e(), r;
	}
};
export { init };
