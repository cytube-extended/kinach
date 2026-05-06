const socketClient = window.socket;
var is_array = Array.isArray, index_of = Array.prototype.indexOf, includes = Array.prototype.includes, array_from = Array.from;
Object.keys;
var define_property = Object.defineProperty, get_descriptor = Object.getOwnPropertyDescriptor, get_descriptors = Object.getOwnPropertyDescriptors, object_prototype = Object.prototype, array_prototype = Array.prototype, get_prototype_of = Object.getPrototypeOf, is_extensible = Object.isExtensible;
function is_function(n) {
	return typeof n == "function";
}
const noop = () => {};
function run(n) {
	return n();
}
function run_all(n) {
	for (var i = 0; i < n.length; i++) n[i]();
}
function deferred() {
	var n, i;
	return {
		promise: new Promise((a, o) => {
			n = a, i = o;
		}),
		resolve: n,
		reject: i
	};
}
const CLEAN = 1024, DIRTY = 2048, MAYBE_DIRTY = 4096, INERT = 8192, REACTION_RAN = 32768, DESTROYING = 1 << 25, EFFECT_TRANSPARENT = 65536, EFFECT_PRESERVED = 1 << 19, USER_EFFECT = 1 << 20, WAS_MARKED = 65536, REACTION_IS_UPDATING = 1 << 21, ERROR_VALUE = 1 << 23, STATE_SYMBOL = Symbol("$state"), LEGACY_PROPS = Symbol("legacy props"), LOADING_ATTR_SYMBOL = Symbol(""), STALE_REACTION = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), IS_XHTML = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function equals(n) {
	return n === this.v;
}
function safe_not_equal(n, i) {
	return n == n ? n !== i || typeof n == "object" && !!n || typeof n == "function" : i == i;
}
function safe_equals(n) {
	return !safe_not_equal(n, this.v);
}
function lifecycle_outside_component(n) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
function async_derived_orphan() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function effect_in_teardown(n) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function effect_in_unowned_derived() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function effect_orphan(n) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function effect_update_depth_exceeded() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function props_invalid_value(n) {
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
function set_component_context(n) {
	component_context = n;
}
function getContext(n) {
	return get_or_init_context_map("getContext").get(n);
}
function setContext(n, i) {
	return get_or_init_context_map("setContext").set(n, i), i;
}
function hasContext(n) {
	return get_or_init_context_map("hasContext").has(n);
}
function push(n, i = !1, a) {
	component_context = {
		p: component_context,
		i: !1,
		c: null,
		e: null,
		s: n,
		x: null,
		r: active_effect,
		l: legacy_mode_flag && !i ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function pop(n) {
	var i = component_context, a = i.e;
	if (a !== null) {
		i.e = null;
		for (var o of a) create_user_effect(o);
	}
	return n !== void 0 && (i.x = n), i.i = !0, component_context = i.p, n ?? {};
}
function is_runes() {
	return !legacy_mode_flag || component_context !== null && component_context.l === null;
}
function get_or_init_context_map(n) {
	return component_context === null && lifecycle_outside_component(n), component_context.c ??= new Map(get_parent_context(component_context) || void 0);
}
function get_parent_context(n) {
	let i = n.p;
	for (; i !== null;) {
		let n = i.c;
		if (n !== null) return n;
		i = i.p;
	}
	return null;
}
var micro_tasks = [];
function run_micro_tasks() {
	var n = micro_tasks;
	micro_tasks = [], run_all(n);
}
function queue_micro_task(n) {
	if (micro_tasks.length === 0 && !is_flushing_sync) {
		var i = micro_tasks;
		queueMicrotask(() => {
			i === micro_tasks && run_micro_tasks();
		});
	}
	micro_tasks.push(n);
}
function flush_tasks() {
	for (; micro_tasks.length > 0;) run_micro_tasks();
}
function derived_inert() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function hydration_mismatch(n) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function select_multiple_invalid_value() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function svelte_boundary_reset_noop() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let hydrating = !1;
function set_hydrating(n) {
	hydrating = n;
}
let hydrate_node;
function set_hydrate_node(n) {
	if (n === null) throw hydration_mismatch(), HYDRATION_ERROR;
	return hydrate_node = n;
}
function hydrate_next() {
	return set_hydrate_node(/* @__PURE__ */ get_next_sibling(hydrate_node));
}
function reset(n) {
	if (hydrating) {
		if (/* @__PURE__ */ get_next_sibling(hydrate_node) !== null) throw hydration_mismatch(), HYDRATION_ERROR;
		hydrate_node = n;
	}
}
function next(n = 1) {
	if (hydrating) {
		for (var i = n, a = hydrate_node; i--;) a = /* @__PURE__ */ get_next_sibling(a);
		hydrate_node = a;
	}
}
function skip_nodes(n = !0) {
	for (var i = 0, a = hydrate_node;;) {
		if (a.nodeType === 8) {
			var o = a.data;
			if (o === "]") {
				if (i === 0) return a;
				--i;
			} else (o === "[" || o === "[!" || o[0] === "[" && !isNaN(Number(o.slice(1)))) && (i += 1);
		}
		var s = /* @__PURE__ */ get_next_sibling(a);
		n && a.remove(), a = s;
	}
}
function read_hydration_instruction(n) {
	if (!n || n.nodeType !== 8) throw hydration_mismatch(), HYDRATION_ERROR;
	return n.data;
}
function proxy(n) {
	if (typeof n != "object" || !n || STATE_SYMBOL in n) return n;
	let a = get_prototype_of(n);
	if (a !== object_prototype && a !== array_prototype) return n;
	var o = /* @__PURE__ */ new Map(), s = is_array(n), c = /* @__PURE__ */ state(0), u = null, m = update_version, h = (n) => {
		if (update_version === m) return n();
		var i = active_reaction, a = update_version;
		set_active_reaction(null), set_update_version(m);
		var o = n();
		return set_active_reaction(i), set_update_version(a), o;
	};
	return s && o.set("length", /* @__PURE__ */ state(n.length, u)), new Proxy(n, {
		defineProperty(n, i, a) {
			(!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && state_descriptors_fixed();
			var s = o.get(i);
			return s === void 0 ? h(() => {
				var n = /* @__PURE__ */ state(a.value, u);
				return o.set(i, n), n;
			}) : set(s, a.value, !0), !0;
		},
		deleteProperty(n, i) {
			var a = o.get(i);
			if (a === void 0) {
				if (i in n) {
					let n = h(() => /* @__PURE__ */ state(UNINITIALIZED, u));
					o.set(i, n), increment(c);
				}
			} else set(a, UNINITIALIZED), increment(c);
			return !0;
		},
		get(i, a, s) {
			if (a === STATE_SYMBOL) return n;
			var c = o.get(a), d = a in i;
			if (c === void 0 && (!d || get_descriptor(i, a)?.writable) && (c = h(() => /* @__PURE__ */ state(proxy(d ? i[a] : UNINITIALIZED), u)), o.set(a, c)), c !== void 0) {
				var f = get(c);
				return f === UNINITIALIZED ? void 0 : f;
			}
			return Reflect.get(i, a, s);
		},
		getOwnPropertyDescriptor(n, i) {
			var a = Reflect.getOwnPropertyDescriptor(n, i);
			if (a && "value" in a) {
				var s = o.get(i);
				s && (a.value = get(s));
			} else if (a === void 0) {
				var c = o.get(i), l = c?.v;
				if (c !== void 0 && l !== UNINITIALIZED) return {
					enumerable: !0,
					configurable: !0,
					value: l,
					writable: !0
				};
			}
			return a;
		},
		has(n, i) {
			if (i === STATE_SYMBOL) return !0;
			var a = o.get(i), s = a !== void 0 && a.v !== UNINITIALIZED || Reflect.has(n, i);
			return (a !== void 0 || active_effect !== null && (!s || get_descriptor(n, i)?.writable)) && (a === void 0 && (a = h(() => /* @__PURE__ */ state(s ? proxy(n[i]) : UNINITIALIZED, u)), o.set(i, a)), get(a) === UNINITIALIZED) ? !1 : s;
		},
		set(n, i, a, d) {
			var f = o.get(i), p = i in n;
			if (s && i === "length") for (var m = a; m < f.v; m += 1) {
				var g = o.get(m + "");
				g === void 0 ? m in n && (g = h(() => /* @__PURE__ */ state(UNINITIALIZED, u)), o.set(m + "", g)) : set(g, UNINITIALIZED);
			}
			if (f === void 0) (!p || get_descriptor(n, i)?.writable) && (f = h(() => /* @__PURE__ */ state(void 0, u)), set(f, proxy(a)), o.set(i, f));
			else {
				p = f.v !== UNINITIALIZED;
				var _ = h(() => proxy(a));
				set(f, _);
			}
			var v = Reflect.getOwnPropertyDescriptor(n, i);
			if (v?.set && v.set.call(d, a), !p) {
				if (s && typeof i == "string") {
					var y = o.get("length"), b = Number(i);
					Number.isInteger(b) && b >= y.v && set(y, b + 1);
				}
				increment(c);
			}
			return !0;
		},
		ownKeys(n) {
			get(c);
			var i = Reflect.ownKeys(n).filter((n) => {
				var i = o.get(n);
				return i === void 0 || i.v !== UNINITIALIZED;
			});
			for (var [a, s] of o) s.v !== UNINITIALIZED && !(a in n) && i.push(a);
			return i;
		},
		setPrototypeOf() {
			state_prototype_fixed();
		}
	});
}
function get_proxied_value(n) {
	try {
		if (typeof n == "object" && n && STATE_SYMBOL in n) return n[STATE_SYMBOL];
	} catch {}
	return n;
}
function is(n, i) {
	return Object.is(get_proxied_value(n), get_proxied_value(i));
}
var $window, is_firefox, first_child_getter, next_sibling_getter;
function init_operations() {
	if ($window === void 0) {
		$window = window, document, is_firefox = /Firefox/.test(navigator.userAgent);
		var n = Element.prototype, i = Node.prototype, a = Text.prototype;
		first_child_getter = get_descriptor(i, "firstChild").get, next_sibling_getter = get_descriptor(i, "nextSibling").get, is_extensible(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), is_extensible(a) && (a.__t = void 0);
	}
}
function create_text(n = "") {
	return document.createTextNode(n);
}
/* @__NO_SIDE_EFFECTS__ */
function get_first_child(n) {
	return first_child_getter.call(n);
}
/* @__NO_SIDE_EFFECTS__ */
function get_next_sibling(n) {
	return next_sibling_getter.call(n);
}
function child(n, i) {
	if (!hydrating) return /* @__PURE__ */ get_first_child(n);
	var a = /* @__PURE__ */ get_first_child(hydrate_node);
	if (a === null) a = hydrate_node.appendChild(create_text());
	else if (i && a.nodeType !== 3) {
		var o = create_text();
		return a?.before(o), set_hydrate_node(o), o;
	}
	return i && merge_text_nodes(a), set_hydrate_node(a), a;
}
function first_child(n, i = !1) {
	if (!hydrating) {
		var a = /* @__PURE__ */ get_first_child(n);
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
function sibling(n, i = 1, a = !1) {
	let o = hydrating ? hydrate_node : n;
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
function create_element(n, i, a) {
	let o = a ? { is: a } : void 0;
	return document.createElementNS(i ?? "http://www.w3.org/1999/xhtml", n, o);
}
function merge_text_nodes(n) {
	if (n.nodeValue.length < 65536) return;
	let i = n.nextSibling;
	for (; i !== null && i.nodeType === 3;) i.remove(), n.nodeValue += i.nodeValue, i = n.nextSibling;
}
function handle_error(n) {
	var i = active_effect;
	if (i === null) return active_reaction.f |= ERROR_VALUE, n;
	if (!(i.f & 32768) && !(i.f & 4)) throw n;
	invoke_error_boundary(n, i);
}
function invoke_error_boundary(n, i) {
	for (; i !== null;) {
		if (i.f & 128) {
			if (!(i.f & 32768)) throw n;
			try {
				i.b.error(n);
				return;
			} catch (i) {
				n = i;
			}
		}
		i = i.parent;
	}
	throw n;
}
var STATUS_MASK = ~(MAYBE_DIRTY | 3072);
function set_signal_status(n, i) {
	n.f = n.f & STATUS_MASK | i;
}
function update_derived_status(n) {
	n.f & 512 || n.deps === null ? set_signal_status(n, CLEAN) : set_signal_status(n, MAYBE_DIRTY);
}
function clear_marked(n) {
	if (n !== null) for (let i of n) !(i.f & 2) || !(i.f & 65536) || (i.f ^= WAS_MARKED, clear_marked(i.deps));
}
function defer_effect(n, i, a) {
	n.f & 2048 ? i.add(n) : n.f & 4096 && a.add(n), clear_marked(n.deps), set_signal_status(n, CLEAN);
}
function subscribe_to_store(n, i, a) {
	if (n == null) return i(void 0), a && a(void 0), noop;
	let o = untrack(() => n.subscribe(i, a));
	return o.unsubscribe ? () => o.unsubscribe() : o;
}
var subscriber_queue = [];
function writable(n, i = noop) {
	let a = null, o = /* @__PURE__ */ new Set();
	function s(i) {
		if (safe_not_equal(n, i) && (n = i, a)) {
			let i = !subscriber_queue.length;
			for (let i of o) i[1](), subscriber_queue.push(i, n);
			if (i) {
				for (let n = 0; n < subscriber_queue.length; n += 2) subscriber_queue[n][0](subscriber_queue[n + 1]);
				subscriber_queue.length = 0;
			}
		}
	}
	function c(i) {
		s(i(n));
	}
	function l(l, u = noop) {
		let d = [l, u];
		return o.add(d), o.size === 1 && (a = i(s, c) || noop), l(n), () => {
			o.delete(d), o.size === 0 && a && (a(), a = null);
		};
	}
	return {
		set: s,
		update: c,
		subscribe: l
	};
}
function get$1(n) {
	let i;
	return subscribe_to_store(n, (n) => i = n)(), i;
}
var is_store_binding = !1, IS_UNMOUNTED = Symbol();
function store_get(n, i, a) {
	let o = a[i] ??= {
		store: null,
		source: /* @__PURE__ */ mutable_source(void 0),
		unsubscribe: noop
	};
	if (o.store !== n && !(IS_UNMOUNTED in a)) if (o.unsubscribe(), o.store = n ?? null, n == null) o.source.v = void 0, o.unsubscribe = noop;
	else {
		var s = !0;
		o.unsubscribe = subscribe_to_store(n, (n) => {
			s ? o.source.v = n : set(o.source, n);
		}), s = !1;
	}
	return n && IS_UNMOUNTED in a ? get$1(n) : get(o.source);
}
function setup_stores() {
	let n = {};
	function i() {
		teardown(() => {
			for (var i in n) n[i].unsubscribe();
			define_property(n, IS_UNMOUNTED, {
				enumerable: !1,
				value: !0
			});
		});
	}
	return [n, i];
}
function capture_store_binding(n) {
	var i = is_store_binding;
	try {
		return is_store_binding = !1, [n(), is_store_binding];
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
var flush_count = 0, uid = 1, Batch = class n {
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
			for (var n = !1, i = o; i.parent !== null;) {
				if (this.#u.has(i)) {
					n = !0;
					break;
				}
				i = i.parent;
			}
			if (!n) return !0;
		}
		return !1;
	}
	skip_effect(n) {
		this.#u.has(n) || this.#u.set(n, {
			d: [],
			m: []
		}), this.#d.delete(n);
	}
	unskip_effect(n, i = (n) => this.schedule(n)) {
		var a = this.#u.get(n);
		if (a) {
			this.#u.delete(n);
			for (var o of a.d) set_signal_status(o, DIRTY), i(o);
			for (o of a.m) set_signal_status(o, MAYBE_DIRTY), i(o);
		}
		this.#d.add(n);
	}
	#g() {
		if (flush_count++ > 1e3 && (batches.delete(this), infinite_loop_guard()), !this.#m()) {
			for (let n of this.#c) this.#l.delete(n), set_signal_status(n, DIRTY), this.schedule(n);
			for (let n of this.#l) set_signal_status(n, MAYBE_DIRTY), this.schedule(n);
		}
		let i = this.#o;
		this.#o = [], this.apply();
		var a = collected_effects = [], o = [], s = legacy_updates = [];
		for (let n of i) try {
			this.#_(n, a, o);
		} catch (i) {
			throw reset_all(n), i;
		}
		if (current_batch = null, s.length > 0) {
			var c = n.ensure();
			for (let n of s) c.schedule(n);
		}
		if (collected_effects = null, legacy_updates = null, this.#m() || this.#h()) {
			this.#v(o), this.#v(a);
			for (let [n, i] of this.#u) reset_branch(n, i);
		} else {
			this.#r.size === 0 && batches.delete(this), this.#c.clear(), this.#l.clear();
			for (let n of this.#e) n(this);
			this.#e.clear(), flush_queued_effects(o), flush_queued_effects(a), this.#a?.resolve();
		}
		var l = current_batch;
		if (this.#o.length > 0) {
			let n = l ??= this;
			n.#o.push(...this.#o.filter((i) => !n.#o.includes(i)));
		}
		l !== null && (batches.add(l), l.#g());
	}
	#_(n, i, a) {
		n.f ^= CLEAN;
		for (var o = n.first; o !== null;) {
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
	#v(n) {
		for (var i = 0; i < n.length; i += 1) defer_effect(n[i], this.#c, this.#l);
	}
	capture(n, i, a = !1) {
		n.v !== UNINITIALIZED && !this.previous.has(n) && this.previous.set(n, n.v), n.f & 8388608 || (this.current.set(n, [i, a]), batch_values?.set(n, i)), this.is_fork || (n.v = i);
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
		for (let n of this.#t) n(this);
		this.#t.clear(), this.#n.clear(), batches.delete(this);
	}
	register_created_effect(n) {
		this.#s.push(n);
	}
	increment(n, i) {
		let a = this.#r.get(i) ?? 0;
		if (this.#r.set(i, a + 1), n) {
			let n = this.#i.get(i) ?? 0;
			this.#i.set(i, n + 1);
		}
	}
	decrement(n, i, a) {
		let o = this.#r.get(i) ?? 0;
		if (o === 1 ? this.#r.delete(i) : this.#r.set(i, o - 1), n) {
			let n = this.#i.get(i) ?? 0;
			n === 1 ? this.#i.delete(i) : this.#i.set(i, n - 1);
		}
		this.#f || a || (this.#f = !0, queue_micro_task(() => {
			this.#f = !1, this.flush();
		}));
	}
	transfer_effects(n, i) {
		for (let i of n) this.#c.add(i);
		for (let n of i) this.#l.add(n);
		n.clear(), i.clear();
	}
	oncommit(n) {
		this.#e.add(n);
	}
	ondiscard(n) {
		this.#t.add(n);
	}
	on_fork_commit(n) {
		this.#n.add(n);
	}
	run_fork_commit_callbacks() {
		for (let n of this.#n) n(this);
		this.#n.clear();
	}
	settled() {
		return (this.#a ??= deferred()).promise;
	}
	static ensure() {
		if (current_batch === null) {
			let i = current_batch = new n();
			is_processing || (batches.add(current_batch), is_flushing_sync || queue_micro_task(() => {
				current_batch === i && i.flush();
			}));
		}
		return current_batch;
	}
	apply() {
		batch_values = null;
	}
	schedule(n) {
		if (last_scheduled_effect = n, n.b?.is_pending && n.f & 16777228 && !(n.f & 32768)) {
			n.b.defer_effect(n);
			return;
		}
		for (var i = n; i.parent !== null;) {
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
function flushSync(n) {
	var i = is_flushing_sync;
	is_flushing_sync = !0;
	try {
		var a;
		for (n && (current_batch !== null && !current_batch.is_fork && current_batch.flush(), a = n());;) {
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
	} catch (n) {
		invoke_error_boundary(n, last_scheduled_effect);
	}
}
let eager_block_effects = null;
function flush_queued_effects(n) {
	var i = n.length;
	if (i !== 0) {
		for (var a = 0; a < i;) {
			var o = n[a++];
			if (!(o.f & 24576) && is_dirty(o) && (eager_block_effects = /* @__PURE__ */ new Set(), update_effect(o), o.deps === null && o.first === null && o.nodes === null && o.teardown === null && o.ac === null && unlink_effect(o), eager_block_effects?.size > 0)) {
				old_values.clear();
				for (let n of eager_block_effects) {
					if (n.f & 24576) continue;
					let i = [n], a = n.parent;
					for (; a !== null;) eager_block_effects.has(a) && (eager_block_effects.delete(a), i.push(a)), a = a.parent;
					for (let n = i.length - 1; n >= 0; n--) {
						let a = i[n];
						a.f & 24576 || update_effect(a);
					}
				}
				eager_block_effects.clear();
			}
		}
		eager_block_effects = null;
	}
}
function mark_effects(n, i, a, o) {
	if (!a.has(n) && (a.add(n), n.reactions !== null)) for (let s of n.reactions) {
		let n = s.f;
		n & 2 ? mark_effects(s, i, a, o) : n & 4194320 && !(n & 2048) && depends_on(s, i, o) && (set_signal_status(s, DIRTY), schedule_effect(s));
	}
}
function depends_on(n, i, a) {
	let s = a.get(n);
	if (s !== void 0) return s;
	if (n.deps !== null) for (let s of n.deps) {
		if (includes.call(i, s)) return !0;
		if (s.f & 2 && depends_on(s, i, a)) return a.set(s, !0), !0;
	}
	return a.set(n, !1), !1;
}
function schedule_effect(n) {
	current_batch.schedule(n);
}
function reset_branch(n, i) {
	if (!(n.f & 32 && n.f & 1024)) {
		n.f & 2048 ? i.d.push(n) : n.f & 4096 && i.m.push(n), set_signal_status(n, CLEAN);
		for (var a = n.first; a !== null;) reset_branch(a, i), a = a.next;
	}
}
function reset_all(n) {
	set_signal_status(n, CLEAN);
	for (var i = n.first; i !== null;) reset_all(i), i = i.next;
}
function createSubscriber(n) {
	let i = 0, a = source(0), o;
	return () => {
		effect_tracking() && (get(a), render_effect(() => (i === 0 && (o = untrack(() => n(() => increment(a)))), i += 1, () => {
			queue_micro_task(() => {
				--i, i === 0 && (o?.(), o = void 0, increment(a));
			});
		})));
	};
}
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
function boundary(n, i, a, o) {
	new Boundary(n, i, a, o);
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
	constructor(n, i, a, o) {
		this.#e = n, this.#n = i, this.#r = (n) => {
			var i = active_effect;
			i.b = this, i.f |= 128, a(n);
		}, this.parent = active_effect.b, this.transform_error = o ?? this.parent?.transform_error ?? ((n) => n), this.#i = block(() => {
			if (hydrating) {
				let n = this.#t;
				hydrate_next();
				let i = n.data === "[!";
				if (n.data.startsWith("[?")) {
					let i = JSON.parse(n.data.slice(2));
					this.#_(i);
				} else i ? this.#v() : this.#g();
			} else this.#y();
		}, flags), hydrating && (this.#e = hydrate_node);
	}
	#g() {
		try {
			this.#a = branch(() => this.#r(this.#e));
		} catch (n) {
			this.error(n);
		}
	}
	#_(n) {
		let i = this.#n.failed;
		i && (this.#s = branch(() => {
			i(this.#e, () => n, () => () => {});
		}));
	}
	#v() {
		let n = this.#n.pending;
		n && (this.is_pending = !0, this.#o = branch(() => n(this.#e)), queue_micro_task(() => {
			var n = this.#c = document.createDocumentFragment(), i = create_text();
			n.append(i), this.#a = this.#x(() => branch(() => this.#r(i))), this.#u === 0 && (this.#e.before(n), this.#c = null, pause_effect(this.#o, () => {
				this.#o = null;
			}), this.#b(current_batch));
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = branch(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var n = this.#c = document.createDocumentFragment();
				move_effect(this.#a, n);
				let i = this.#n.pending;
				this.#o = branch(() => i(this.#e));
			} else this.#b(current_batch);
		} catch (n) {
			this.error(n);
		}
	}
	#b(n) {
		this.is_pending = !1, n.transfer_effects(this.#f, this.#p);
	}
	defer_effect(n) {
		defer_effect(n, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(n) {
		var i = active_effect, a = active_reaction, o = component_context;
		set_active_effect(this.#i), set_active_reaction(this.#i), set_component_context(this.#i.ctx);
		try {
			return Batch.ensure(), n();
		} catch (n) {
			return handle_error(n), null;
		} finally {
			set_active_effect(i), set_active_reaction(a), set_component_context(o);
		}
	}
	#S(n, i) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(n, i);
			return;
		}
		this.#u += n, this.#u === 0 && (this.#b(i), this.#o && pause_effect(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(n, i) {
		this.#S(n, i), this.#l += n, !(!this.#m || this.#d) && (this.#d = !0, queue_micro_task(() => {
			this.#d = !1, this.#m && internal_set(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), get(this.#m);
	}
	error(n) {
		if (!this.#n.onerror && !this.#n.failed) throw n;
		current_batch?.is_fork ? (this.#a && current_batch.skip_effect(this.#a), this.#o && current_batch.skip_effect(this.#o), this.#s && current_batch.skip_effect(this.#s), current_batch.on_fork_commit(() => {
			this.#C(n);
		})) : this.#C(n);
	}
	#C(n) {
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
		}, l = (n) => {
			try {
				s = !0, i?.(n, c), s = !1;
			} catch (n) {
				invoke_error_boundary(n, this.#i && this.#i.parent);
			}
			a && (this.#s = this.#x(() => {
				try {
					return branch(() => {
						var i = active_effect;
						i.b = this, i.f |= 128, a(this.#e, () => n, () => c);
					});
				} catch (n) {
					return invoke_error_boundary(n, this.#i.parent), null;
				}
			}));
		};
		queue_micro_task(() => {
			var i;
			try {
				i = this.transform_error(n);
			} catch (n) {
				invoke_error_boundary(n, this.#i && this.#i.parent);
				return;
			}
			typeof i == "object" && i && typeof i.then == "function" ? i.then(l, (n) => invoke_error_boundary(n, this.#i && this.#i.parent)) : l(i);
		});
	}
};
function flatten(n, i, a, o) {
	let s = is_runes() ? derived : derived_safe_equal;
	var c = n.filter((n) => !n.settled);
	if (a.length === 0 && c.length === 0) {
		o(i.map(s));
		return;
	}
	var l = active_effect, u = capture(), d = c.length === 1 ? c[0].promise : c.length > 1 ? Promise.all(c.map((n) => n.promise)) : null;
	function f(n) {
		u();
		try {
			o(n);
		} catch (n) {
			l.f & 16384 || invoke_error_boundary(n, l);
		}
		unset_context();
	}
	if (a.length === 0) {
		d.then(() => f(i.map(s)));
		return;
	}
	var p = increment_pending();
	function m() {
		Promise.all(a.map((n) => /* @__PURE__ */ async_derived(n))).then((n) => f([...i.map(s), ...n])).catch((n) => invoke_error_boundary(n, l)).finally(() => p());
	}
	d ? d.then(() => {
		u(), m(), unset_context();
	}) : m();
}
function capture() {
	var n = active_effect, i = active_reaction, a = component_context, o = current_batch;
	return function(s = !0) {
		set_active_effect(n), set_active_reaction(i), set_component_context(a), s && !(n.f & 16384) && (o?.activate(), o?.apply());
	};
}
function unset_context(n = !0) {
	set_active_effect(null), set_active_reaction(null), set_component_context(null), n && current_batch?.deactivate();
}
function increment_pending() {
	var n = active_effect, i = n.b, a = current_batch, o = i.is_rendered();
	return i.update_pending_count(1, a), a.increment(o, n), (s = !1) => {
		i.update_pending_count(-1, a), a.decrement(o, n, s);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function derived(n) {
	var i = 2 | DIRTY;
	return active_effect !== null && (active_effect.f |= EFFECT_PRESERVED), {
		ctx: component_context,
		deps: null,
		effects: null,
		equals,
		f: i,
		fn: n,
		reactions: null,
		rv: 0,
		v: UNINITIALIZED,
		wv: 0,
		parent: active_effect,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function async_derived(n, i, a) {
	let o = active_effect;
	o === null && async_derived_orphan();
	var s = void 0, c = source(UNINITIALIZED), l = !active_reaction, u = /* @__PURE__ */ new Map();
	return async_effect(() => {
		var i = active_effect, a = deferred();
		s = a.promise;
		try {
			Promise.resolve(n()).then(a.resolve, a.reject).finally(unset_context);
		} catch (n) {
			a.reject(n), unset_context();
		}
		var d = current_batch;
		if (l) {
			if (i.f & 32768) var f = increment_pending();
			if (o.b.is_rendered()) u.get(d)?.reject(STALE_REACTION), u.delete(d);
			else {
				for (let n of u.values()) n.reject(STALE_REACTION);
				u.clear();
			}
			u.set(d, a);
		}
		let p = (n, a = void 0) => {
			if (f && f(a === STALE_REACTION), !(a === STALE_REACTION || i.f & 16384)) {
				if (d.activate(), a) c.f |= ERROR_VALUE, internal_set(c, a);
				else {
					c.f & 8388608 && (c.f ^= ERROR_VALUE), internal_set(c, n);
					for (let [n, i] of u) {
						if (u.delete(n), n === d) break;
						i.reject(STALE_REACTION);
					}
				}
				d.deactivate();
			}
		};
		a.promise.then(p, (n) => p(null, n || "unknown"));
	}), teardown(() => {
		for (let n of u.values()) n.reject(STALE_REACTION);
	}), new Promise((n) => {
		function i(a) {
			function o() {
				a === s ? n(c) : i(s);
			}
			a.then(o, o);
		}
		i(s);
	});
}
/* @__NO_SIDE_EFFECTS__ */
function user_derived(n) {
	let i = /* @__PURE__ */ derived(n);
	return push_reaction_value(i), i;
}
/* @__NO_SIDE_EFFECTS__ */
function derived_safe_equal(n) {
	let i = /* @__PURE__ */ derived(n);
	return i.equals = safe_equals, i;
}
function destroy_derived_effects(n) {
	var i = n.effects;
	if (i !== null) {
		n.effects = null;
		for (var a = 0; a < i.length; a += 1) destroy_effect(i[a]);
	}
}
function execute_derived(n) {
	var i, a = active_effect, o = n.parent;
	if (!is_destroying_effect && o !== null && o.f & 24576) return derived_inert(), n.v;
	set_active_effect(o);
	try {
		n.f &= ~WAS_MARKED, destroy_derived_effects(n), i = update_reaction(n);
	} finally {
		set_active_effect(a);
	}
	return i;
}
function update_derived(n) {
	var i = execute_derived(n);
	if (!n.equals(i) && (n.wv = increment_write_version(), (!current_batch?.is_fork || n.deps === null) && (current_batch === null ? n.v = i : current_batch.capture(n, i, !0), n.deps === null))) {
		set_signal_status(n, CLEAN);
		return;
	}
	is_destroying_effect || (batch_values === null ? update_derived_status(n) : (effect_tracking() || current_batch?.is_fork) && batch_values.set(n, i));
}
function freeze_derived_effects(n) {
	if (n.effects !== null) for (let i of n.effects) (i.teardown || i.ac) && (i.teardown?.(), i.ac?.abort(STALE_REACTION), i.teardown = noop, i.ac = null, remove_reactions(i, 0), destroy_effect_children(i));
}
function unfreeze_derived_effects(n) {
	if (n.effects !== null) for (let i of n.effects) i.teardown && update_effect(i);
}
let eager_effects = /* @__PURE__ */ new Set();
const old_values = /* @__PURE__ */ new Map();
var eager_effects_deferred = !1;
function source(n, i) {
	return {
		f: 0,
		v: n,
		reactions: null,
		equals,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function state(n, i) {
	let a = source(n, i);
	return push_reaction_value(a), a;
}
/* @__NO_SIDE_EFFECTS__ */
function mutable_source(n, i = !1, a = !0) {
	let o = source(n);
	return i || (o.equals = safe_equals), legacy_mode_flag && a && component_context !== null && component_context.l !== null && (component_context.l.s ??= []).push(o), o;
}
function set(n, i, a = !1) {
	return active_reaction !== null && (!untracking || active_reaction.f & 131072) && is_runes() && active_reaction.f & 4325394 && (current_sources === null || !includes.call(current_sources, n)) && state_unsafe_mutation(), internal_set(n, a ? proxy(i) : i, legacy_updates);
}
function internal_set(n, i, a = null) {
	if (!n.equals(i)) {
		old_values.set(n, is_destroying_effect ? i : n.v);
		var o = Batch.ensure();
		if (o.capture(n, i), n.f & 2) {
			let i = n;
			n.f & 2048 && execute_derived(i), batch_values === null && update_derived_status(i);
		}
		n.wv = increment_write_version(), mark_reactions(n, DIRTY, a), is_runes() && active_effect !== null && active_effect.f & 1024 && !(active_effect.f & 96) && (untracked_writes === null ? set_untracked_writes([n]) : untracked_writes.push(n)), !o.is_fork && eager_effects.size > 0 && !eager_effects_deferred && flush_eager_effects();
	}
	return i;
}
function flush_eager_effects() {
	eager_effects_deferred = !1;
	for (let n of eager_effects) n.f & 1024 && set_signal_status(n, MAYBE_DIRTY), is_dirty(n) && update_effect(n);
	eager_effects.clear();
}
function increment(n) {
	set(n, n.v + 1);
}
function mark_reactions(n, i, a) {
	var o = n.reactions;
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
function autofocus(n, i) {
	if (i) {
		let i = document.body;
		n.autofocus = !0, queue_micro_task(() => {
			document.activeElement === i && n.focus();
		});
	}
}
var listening_to_form_reset = !1;
function add_form_reset_listener() {
	listening_to_form_reset || (listening_to_form_reset = !0, document.addEventListener("reset", (n) => {
		Promise.resolve().then(() => {
			if (!n.defaultPrevented) for (let i of n.target.elements) i.__on_r?.();
		});
	}, { capture: !0 }));
}
function without_reactive_context(n) {
	var i = active_reaction, a = active_effect;
	set_active_reaction(null), set_active_effect(null);
	try {
		return n();
	} finally {
		set_active_reaction(i), set_active_effect(a);
	}
}
var is_updating_effect = !1;
let is_destroying_effect = !1;
function set_is_destroying_effect(n) {
	is_destroying_effect = n;
}
let active_reaction = null, untracking = !1;
function set_active_reaction(n) {
	active_reaction = n;
}
let active_effect = null;
function set_active_effect(n) {
	active_effect = n;
}
let current_sources = null;
function push_reaction_value(n) {
	active_reaction !== null && (current_sources === null ? current_sources = [n] : current_sources.push(n));
}
let new_deps = null, skipped_deps = 0, untracked_writes = null;
function set_untracked_writes(n) {
	untracked_writes = n;
}
let write_version = 1;
var read_version = 0;
let update_version = read_version;
function set_update_version(n) {
	update_version = n;
}
function increment_write_version() {
	return ++write_version;
}
function is_dirty(n) {
	var i = n.f;
	if (i & 2048) return !0;
	if (i & 2 && (n.f &= ~WAS_MARKED), i & 4096) {
		for (var a = n.deps, o = a.length, s = 0; s < o; s++) {
			var c = a[s];
			if (is_dirty(c) && update_derived(c), c.wv > n.wv) return !0;
		}
		i & 512 && batch_values === null && set_signal_status(n, CLEAN);
	}
	return !1;
}
function schedule_possible_effect_self_invalidation(n, i, a = !0) {
	var s = n.reactions;
	if (s !== null && !(current_sources !== null && includes.call(current_sources, n))) for (var c = 0; c < s.length; c++) {
		var l = s[c];
		l.f & 2 ? schedule_possible_effect_self_invalidation(l, i, !1) : i === l && (a ? set_signal_status(l, DIRTY) : l.f & 1024 && set_signal_status(l, MAYBE_DIRTY), schedule_effect(l));
	}
}
function update_reaction(n) {
	var i = new_deps, a = skipped_deps, o = untracked_writes, s = active_reaction, c = current_sources, l = component_context, u = untracking, d = update_version, f = n.f;
	new_deps = null, skipped_deps = 0, untracked_writes = null, active_reaction = f & 96 ? null : n, current_sources = null, set_component_context(n.ctx), untracking = !1, update_version = ++read_version, n.ac !== null && (without_reactive_context(() => {
		n.ac.abort(STALE_REACTION);
	}), n.ac = null);
	try {
		n.f |= REACTION_IS_UPDATING;
		var p = n.fn, m = p();
		n.f |= REACTION_RAN;
		var h = n.deps, g = current_batch?.is_fork;
		if (new_deps !== null) {
			var _;
			if (g || remove_reactions(n, skipped_deps), h !== null && skipped_deps > 0) for (h.length = skipped_deps + new_deps.length, _ = 0; _ < new_deps.length; _++) h[skipped_deps + _] = new_deps[_];
			else n.deps = h = new_deps;
			if (effect_tracking() && n.f & 512) for (_ = skipped_deps; _ < h.length; _++) (h[_].reactions ??= []).push(n);
		} else !g && h !== null && skipped_deps < h.length && (remove_reactions(n, skipped_deps), h.length = skipped_deps);
		if (is_runes() && untracked_writes !== null && !untracking && h !== null && !(n.f & 6146)) for (_ = 0; _ < untracked_writes.length; _++) schedule_possible_effect_self_invalidation(untracked_writes[_], n);
		if (s !== null && s !== n) {
			if (read_version++, s.deps !== null) for (let n = 0; n < a; n += 1) s.deps[n].rv = read_version;
			if (i !== null) for (let n of i) n.rv = read_version;
			untracked_writes !== null && (o === null ? o = untracked_writes : o.push(...untracked_writes));
		}
		return n.f & 8388608 && (n.f ^= ERROR_VALUE), m;
	} catch (n) {
		return handle_error(n);
	} finally {
		n.f ^= REACTION_IS_UPDATING, new_deps = i, skipped_deps = a, untracked_writes = o, active_reaction = s, current_sources = c, set_component_context(l), untracking = u, update_version = d;
	}
}
function remove_reaction(n, i) {
	let s = i.reactions;
	if (s !== null) {
		var c = index_of.call(s, n);
		if (c !== -1) {
			var l = s.length - 1;
			l === 0 ? s = i.reactions = null : (s[c] = s[l], s.pop());
		}
	}
	if (s === null && i.f & 2 && (new_deps === null || !includes.call(new_deps, i))) {
		var u = i;
		u.f & 512 && (u.f ^= 512, u.f &= ~WAS_MARKED), u.v !== UNINITIALIZED && update_derived_status(u), freeze_derived_effects(u), remove_reactions(u, 0);
	}
}
function remove_reactions(n, i) {
	var a = n.deps;
	if (a !== null) for (var o = i; o < a.length; o++) remove_reaction(n, a[o]);
}
function update_effect(n) {
	var i = n.f;
	if (!(i & 16384)) {
		set_signal_status(n, CLEAN);
		var a = active_effect, o = is_updating_effect;
		active_effect = n, is_updating_effect = !0;
		try {
			i & 16777232 ? destroy_block_effect_children(n) : destroy_effect_children(n), execute_effect_teardown(n);
			var s = update_reaction(n);
			n.teardown = typeof s == "function" ? s : null, n.wv = write_version;
		} finally {
			is_updating_effect = o, active_effect = a;
		}
	}
}
async function tick() {
	await Promise.resolve(), flushSync();
}
function get(n) {
	var i = (n.f & 2) != 0;
	if (null?.add(n), active_reaction !== null && !untracking && !(active_effect !== null && active_effect.f & 16384) && (current_sources === null || !includes.call(current_sources, n))) {
		var a = active_reaction.deps;
		if (active_reaction.f & 2097152) n.rv < read_version && (n.rv = read_version, new_deps === null && a !== null && a[skipped_deps] === n ? skipped_deps++ : new_deps === null ? new_deps = [n] : new_deps.push(n));
		else {
			(active_reaction.deps ??= []).push(n);
			var s = n.reactions;
			s === null ? n.reactions = [active_reaction] : includes.call(s, active_reaction) || s.push(active_reaction);
		}
	}
	if (is_destroying_effect && old_values.has(n)) return old_values.get(n);
	if (i) {
		var c = n;
		if (is_destroying_effect) {
			var l = c.v;
			return (!(c.f & 1024) && c.reactions !== null || depends_on_old_values(c)) && (l = execute_derived(c)), old_values.set(c, l), l;
		}
		var u = (c.f & 512) == 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & 512) != 0), d = (c.f & REACTION_RAN) === 0;
		is_dirty(c) && (u && (c.f |= 512), update_derived(c)), u && !d && (unfreeze_derived_effects(c), reconnect(c));
	}
	if (batch_values?.has(n)) return batch_values.get(n);
	if (n.f & 8388608) throw n.v;
	return n.v;
}
function reconnect(n) {
	if (n.f |= 512, n.deps !== null) for (let i of n.deps) (i.reactions ??= []).push(n), i.f & 2 && !(i.f & 512) && (unfreeze_derived_effects(i), reconnect(i));
}
function depends_on_old_values(n) {
	if (n.v === UNINITIALIZED) return !0;
	if (n.deps === null) return !1;
	for (let i of n.deps) if (old_values.has(i) || i.f & 2 && depends_on_old_values(i)) return !0;
	return !1;
}
function untrack(n) {
	var i = untracking;
	try {
		return untracking = !0, n();
	} finally {
		untracking = i;
	}
}
function deep_read_state(n) {
	if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
		if (STATE_SYMBOL in n) deep_read(n);
		else if (!Array.isArray(n)) for (let i in n) {
			let a = n[i];
			typeof a == "object" && a && STATE_SYMBOL in a && deep_read(a);
		}
	}
}
function deep_read(n, i = /* @__PURE__ */ new Set()) {
	if (typeof n == "object" && n && !(n instanceof EventTarget) && !i.has(n)) {
		for (let a in i.add(n), n instanceof Date && n.getTime(), n) try {
			deep_read(n[a], i);
		} catch {}
		let a = get_prototype_of(n);
		if (a !== Object.prototype && a !== Array.prototype && a !== Map.prototype && a !== Set.prototype && a !== Date.prototype) {
			let i = get_descriptors(a);
			for (let a in i) {
				let o = i[a].get;
				if (o) try {
					o.call(n);
				} catch {}
			}
		}
	}
}
function validate_effect(n) {
	active_effect === null && (active_reaction === null && effect_orphan(n), effect_in_unowned_derived()), is_destroying_effect && effect_in_teardown(n);
}
function push_effect(n, i) {
	var a = i.last;
	a === null ? i.last = i.first = n : (a.next = n, n.prev = a, i.last = n);
}
function create_effect(n, i) {
	var a = active_effect;
	a !== null && a.f & 8192 && (n |= INERT);
	var o = {
		ctx: component_context,
		deps: null,
		nodes: null,
		f: n | 2560,
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
	if (n & 4) collected_effects === null ? Batch.ensure().schedule(o) : collected_effects.push(o);
	else if (i !== null) {
		try {
			update_effect(o);
		} catch (n) {
			throw destroy_effect(o), n;
		}
		s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && !(s.f & 524288) && (s = s.first, n & 16 && n & 65536 && s !== null && (s.f |= EFFECT_TRANSPARENT));
	}
	if (s !== null && (s.parent = a, a !== null && push_effect(s, a), active_reaction !== null && active_reaction.f & 2 && !(n & 64))) {
		var c = active_reaction;
		(c.effects ??= []).push(s);
	}
	return o;
}
function effect_tracking() {
	return active_reaction !== null && !untracking;
}
function teardown(n) {
	let i = create_effect(8, null);
	return set_signal_status(i, CLEAN), i.teardown = n, i;
}
function user_effect(n) {
	validate_effect("$effect");
	var i = active_effect.f;
	if (!active_reaction && i & 32 && !(i & 32768)) {
		var a = component_context;
		(a.e ??= []).push(n);
	} else return create_user_effect(n);
}
function create_user_effect(n) {
	return create_effect(4 | USER_EFFECT, n);
}
function user_pre_effect(n) {
	return validate_effect("$effect.pre"), create_effect(8 | USER_EFFECT, n);
}
function effect_root(n) {
	Batch.ensure();
	let i = create_effect(64 | EFFECT_PRESERVED, n);
	return () => {
		destroy_effect(i);
	};
}
function component_root(n) {
	Batch.ensure();
	let i = create_effect(64 | EFFECT_PRESERVED, n);
	return (n = {}) => new Promise((a) => {
		n.outro ? pause_effect(i, () => {
			destroy_effect(i), a(void 0);
		}) : (destroy_effect(i), a(void 0));
	});
}
function effect(n) {
	return create_effect(4, n);
}
function async_effect(n) {
	return create_effect(4194304 | EFFECT_PRESERVED, n);
}
function render_effect(n, i = 0) {
	return create_effect(8 | i, n);
}
function template_effect(n, i = [], a = [], o = []) {
	flatten(o, i, a, (i) => {
		create_effect(8, () => n(...i.map(get)));
	});
}
function block(n, i = 0) {
	return create_effect(16 | i, n);
}
function managed(n, i = 0) {
	return create_effect(16777216 | i, n);
}
function branch(n) {
	return create_effect(32 | EFFECT_PRESERVED, n);
}
function execute_effect_teardown(n) {
	var i = n.teardown;
	if (i !== null) {
		let n = is_destroying_effect, a = active_reaction;
		set_is_destroying_effect(!0), set_active_reaction(null);
		try {
			i.call(null);
		} finally {
			set_is_destroying_effect(n), set_active_reaction(a);
		}
	}
}
function destroy_effect_children(n, i = !1) {
	var a = n.first;
	for (n.first = n.last = null; a !== null;) {
		let n = a.ac;
		n !== null && without_reactive_context(() => {
			n.abort(STALE_REACTION);
		});
		var o = a.next;
		a.f & 64 ? a.parent = null : destroy_effect(a, i), a = o;
	}
}
function destroy_block_effect_children(n) {
	for (var i = n.first; i !== null;) {
		var a = i.next;
		i.f & 32 || destroy_effect(i), i = a;
	}
}
function destroy_effect(n, i = !0) {
	var a = !1;
	(i || n.f & 262144) && n.nodes !== null && n.nodes.end !== null && (remove_effect_dom(n.nodes.start, n.nodes.end), a = !0), set_signal_status(n, DESTROYING), destroy_effect_children(n, i && !a), remove_reactions(n, 0);
	var o = n.nodes && n.nodes.t;
	if (o !== null) for (let n of o) n.stop();
	execute_effect_teardown(n), n.f ^= DESTROYING, n.f |= 16384;
	var s = n.parent;
	s !== null && s.first !== null && unlink_effect(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = n.b = null;
}
function remove_effect_dom(n, i) {
	for (; n !== null;) {
		var a = n === i ? null : /* @__PURE__ */ get_next_sibling(n);
		n.remove(), n = a;
	}
}
function unlink_effect(n) {
	var i = n.parent, a = n.prev, o = n.next;
	a !== null && (a.next = o), o !== null && (o.prev = a), i !== null && (i.first === n && (i.first = o), i.last === n && (i.last = a));
}
function pause_effect(n, i, a = !0) {
	var o = [];
	pause_children(n, o, !0);
	var s = () => {
		a && destroy_effect(n), i && i();
	}, c = o.length;
	if (c > 0) {
		var l = () => --c || s();
		for (var u of o) u.out(l);
	} else s();
}
function pause_children(n, i, a) {
	if (!(n.f & 8192)) {
		n.f ^= INERT;
		var o = n.nodes && n.nodes.t;
		if (o !== null) for (let n of o) (n.is_global || a) && i.push(n);
		for (var s = n.first; s !== null;) {
			var c = s.next;
			if (!(s.f & 64)) {
				var l = (s.f & 65536) != 0 || (s.f & 32) != 0 && (n.f & 16) != 0;
				pause_children(s, i, l ? a : !1);
			}
			s = c;
		}
	}
}
function resume_effect(n) {
	resume_children(n, !0);
}
function resume_children(n, i) {
	if (n.f & 8192) {
		n.f ^= INERT, n.f & 1024 || (set_signal_status(n, DIRTY), Batch.ensure().schedule(n));
		for (var a = n.first; a !== null;) {
			var o = a.next, s = (a.f & 65536) != 0 || (a.f & 32) != 0;
			resume_children(a, s ? i : !1), a = o;
		}
		var c = n.nodes && n.nodes.t;
		if (c !== null) for (let n of c) (n.is_global || i) && n.in();
	}
}
function move_effect(n, i) {
	if (n.nodes) for (var a = n.nodes.start, o = n.nodes.end; a !== null;) {
		var s = a === o ? null : /* @__PURE__ */ get_next_sibling(a);
		i.append(a), a = s;
	}
}
var defaultAppState = { version: "" };
const appStore = ((n) => {
	let { subscribe: i, set: a, update: o } = writable({
		...defaultAppState,
		...n
	});
	return {
		subscribe: i,
		init: (n) => a(n),
		updateVersion: (n) => o((i) => ({
			...i,
			version: n
		})),
		resetVersion: () => o((n) => ({
			...n,
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
const clientStore = ((n) => {
	let { subscribe: i, set: a, update: o } = writable({
		...defaultClientState,
		...n
	});
	return {
		subscribe: i,
		init: (n) => a(n),
		updateName: (n) => o((i) => ({
			...i,
			name: n
		})),
		resetName: () => o((n) => ({
			...n,
			name: defaultClientState.name
		})),
		updateLoggedIn: (n) => o((i) => ({
			...i,
			logged_in: n
		})),
		resetLoggedIn: () => o((n) => ({
			...n,
			logged_in: defaultClientState.logged_in
		})),
		updateRank: (n) => o((i) => ({
			...i,
			rank: n
		})),
		resetRank: () => o((n) => ({
			...n,
			rank: defaultClientState.rank
		}))
	};
})();
var defaultPageState = { csrf: "" };
const pageStore = ((n) => {
	let { subscribe: i, set: a, update: o } = writable({
		...defaultPageState,
		...n
	});
	return {
		subscribe: i,
		init: (n) => a(n),
		updateCSRF: (n) => o((i) => ({
			...i,
			csrf: n
		})),
		resetCSRF: () => o((n) => ({
			...n,
			csrf: defaultPageState.csrf
		}))
	};
})();
var defaultSocketState = { connected: !0 };
const socketStore = ((n) => {
	let { subscribe: i, set: a, update: o } = writable({
		...defaultSocketState,
		...n
	});
	return {
		subscribe: i,
		init: (n) => a(n),
		updateConnected: (n) => o((i) => ({
			...i,
			connected: n
		})),
		resetConnected: () => o((n) => ({
			...n,
			connected: defaultSocketState.connected
		}))
	};
})();
var initClientStore = () => (clientStore.init({ ...window.CLIENT }), clientStore.subscribe((n) => {
	window.CLIENT = n;
})), initPageStore = () => {
	let n = document.getElementsByName("_csrf");
	if (!n) throw Error("no csrf collection found");
	if (n.length < 1) throw Error("no csrf elements found");
	let i = n.item(0);
	if (!i) throw Error("no csrf element found");
	let a = i.value;
	if (!a) throw Error("no csrf value found");
	pageStore.init({ csrf: a });
}, initAppStore = () => (appStore.init({ version: window.VERSION }), appStore.subscribe((n) => {
	window.VERSION = n.version;
})), initSocketStore = () => {
	socketStore.init(socketClient), socketClient.on("connect", () => socketStore.updateConnected(socketClient.connected)), socketClient.on("disconnect", () => socketStore.updateConnected(socketClient.connected));
};
const initStores = () => {
	let n = initClientStore(), i = initAppStore();
	return initPageStore(), initSocketStore(), () => {
		n(), i();
	};
};
var colorInfo = "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", legacyChatNotification = (n, i) => {
	let a = document.getElementById("messagebuffer");
	if (!a) return null;
	let o = document.createElement("div");
	return o.className = "server-msg-reconnect", o.style = `border: 1px ${i}`, o.textContent = n, a.appendChild(o), o;
};
const legacyChatInfo = (n) => legacyChatNotification(n, colorInfo), injectMainStylesheet = async () => new Promise((n, i) => {
	let a = new URL("dist/index.css", window.BASE_URL), o = document.createElement("link");
	o.rel = "stylesheet", o.type = "text/css", o.href = a.toString(), o.onload = () => requestAnimationFrame(() => n()), o.onerror = () => requestAnimationFrame(() => i()), document.head.appendChild(o);
}), removeLegacyStylesheets = () => {
	for (let n of [
		"//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css",
		"/css/sticky-footer-navbar.css",
		"/css/videojs-resolution-switcher.css",
		"/css/video-js.css",
		"/css/cytube.css"
	]) {
		let i = document.querySelector(`link[href="${n}"]`);
		if (!i) return;
		i.remove();
	}
	document.getElementById("usertheme")?.remove();
};
var setChannelJS = (n) => {
	window.CHANNEL.js = n;
	let i = document.querySelector("#cs-jstext");
	if (i && (i.value = n), window.USEROPTS.ignore_channeljs) return;
	let a = document.createElement("script");
	a.id = "chanjs", a.type = "text/javascript", a.textContent = n, document.body.append(a);
}, setChannelCSS = (n) => {
	window.CHANNEL.css = n;
	let i = document.querySelector("#cs-csstext");
	if (i && (i.value = n), window.USEROPTS.ignore_channelcss) return;
	let a = document.createElement("style");
	a.id = "chancss", a.textContent = n, document.head.append(a);
}, overrideChannelJS = (n) => {
	let i = document.querySelector("#chanjs");
	if (!i) {
		setChannelJS(n);
		return;
	}
	i.textContent !== n && (i.remove(), setChannelJS(n));
}, overrideChannelCSS = (n) => {
	let i = document.querySelector("#chancss");
	if (!i) {
		setChannelCSS(n);
		return;
	}
	i.textContent !== n && (i.remove(), setChannelCSS(n));
}, overrideCallbacks = () => {
	window.Callbacks.channelCSSJS = ({ css: n, js: i }) => {
		n && overrideChannelCSS(n), i && overrideChannelJS(i);
	};
}, overrideFavicon = () => {
	let n = new URL("dist/favicon.ico", window.BASE_URL), i = document.createElement("link");
	i.href = n.toString(), i.type = "image/x-icon", i.rel = "shortcut icon", document.head.append(i);
}, overrideStyles = async () => {
	let n = legacyChatInfo("Loading styles...");
	await injectMainStylesheet(), removeLegacyStylesheets(), n && n.remove();
};
const initOverrides = async () => {
	overrideCallbacks(), overrideFavicon(), await overrideStyles();
};
function createAttachmentKey() {
	return Symbol("@attach");
}
function is_capture_event(n) {
	return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
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
function can_delegate_event(n) {
	return DELEGATED_EVENTS.includes(n);
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
function normalize_attribute(n) {
	return n = n.toLowerCase(), ATTRIBUTE_ALIASES[n] ?? n;
}
[...DOM_BOOLEAN_ATTRIBUTES];
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(n) {
	return PASSIVE_EVENTS.includes(n);
}
const event_symbol = Symbol("events"), all_registered_events = /* @__PURE__ */ new Set(), root_event_handles = /* @__PURE__ */ new Set();
function replay_events(n) {
	if (!hydrating) return;
	n.removeAttribute("onload"), n.removeAttribute("onerror");
	let i = n.__e;
	i !== void 0 && (n.__e = void 0, queueMicrotask(() => {
		n.isConnected && n.dispatchEvent(i);
	}));
}
function create_event(n, i, a, o = {}) {
	function s(n) {
		if (o.capture || handle_event_propagation.call(i, n), !n.cancelBubble) return without_reactive_context(() => a?.call(this, n));
	}
	return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? queue_micro_task(() => {
		i.addEventListener(n, s, o);
	}) : i.addEventListener(n, s, o), s;
}
function on(n, i, a, o = {}) {
	var s = create_event(i, n, a, o);
	return () => {
		n.removeEventListener(i, s, o);
	};
}
function delegated(n, i, a) {
	(i[event_symbol] ??= {})[n] = a;
}
function delegate(n) {
	for (var i = 0; i < n.length; i++) all_registered_events.add(n[i]);
	for (var a of root_event_handles) a(n);
}
var last_propagated_event = null;
function handle_event_propagation(n) {
	var i = this, a = i.ownerDocument, o = n.type, s = n.composedPath?.() || [], l = s[0] || n.target;
	last_propagated_event = n;
	var u = 0, d = last_propagated_event === n && n[event_symbol];
	if (d) {
		var f = s.indexOf(d);
		if (f !== -1 && (i === document || i === window)) {
			n[event_symbol] = i;
			return;
		}
		var p = s.indexOf(i);
		if (p === -1) return;
		f <= p && (u = f);
	}
	if (l = s[u] || n.target, l !== i) {
		define_property(n, "currentTarget", {
			configurable: !0,
			get() {
				return l || a;
			}
		});
		var m = active_reaction, h = active_effect;
		set_active_reaction(null), set_active_effect(null);
		try {
			for (var g, _ = []; l !== null;) {
				var v = l.assignedSlot || l.parentNode || l.host || null;
				try {
					var y = l[event_symbol]?.[o];
					y != null && (!l.disabled || n.target === l) && y.call(l, n);
				} catch (n) {
					g ? _.push(n) : g = n;
				}
				if (n.cancelBubble || v === i || v === null) break;
				l = v;
			}
			if (g) {
				for (let n of _) queueMicrotask(() => {
					throw n;
				});
				throw g;
			}
		} finally {
			n[event_symbol] = i, delete n.currentTarget, set_active_reaction(m), set_active_effect(h);
		}
	}
}
var policy = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (n) => n });
function create_trusted_html(n) {
	return policy?.createHTML(n) ?? n;
}
function create_fragment_from_html(n) {
	var i = create_element("template");
	return i.innerHTML = create_trusted_html(n.replaceAll("<!>", "<!---->")), i.content;
}
function assign_nodes(n, i) {
	var a = active_effect;
	a.nodes === null && (a.nodes = {
		start: n,
		end: i,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function from_html(n, i) {
	var a = (i & 1) != 0, o = (i & 2) != 0, s, c = !n.startsWith("<!>");
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		s === void 0 && (s = create_fragment_from_html(c ? n : "<!>" + n), a || (s = /* @__PURE__ */ get_first_child(s)));
		var i = o || is_firefox ? document.importNode(s, !0) : s.cloneNode(!0);
		if (a) {
			var l = /* @__PURE__ */ get_first_child(i), u = i.lastChild;
			assign_nodes(l, u);
		} else assign_nodes(i, i);
		return i;
	};
}
function text(n = "") {
	if (!hydrating) {
		var i = create_text(n + "");
		return assign_nodes(i, i), i;
	}
	var a = hydrate_node;
	return a.nodeType === 3 ? merge_text_nodes(a) : (a.before(a = create_text()), set_hydrate_node(a)), assign_nodes(a, a), a;
}
function comment() {
	if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
	var n = document.createDocumentFragment(), i = document.createComment(""), a = create_text();
	return n.append(i, a), assign_nodes(i, a), n;
}
function append(n, i) {
	if (hydrating) {
		var a = active_effect;
		(!(a.f & 32768) || a.nodes.end === null) && (a.nodes.end = hydrate_node), hydrate_next();
		return;
	}
	n !== null && n.before(i);
}
function props_id() {
	if (hydrating && hydrate_node && hydrate_node.nodeType === 8 && hydrate_node.textContent?.startsWith("$")) {
		let n = hydrate_node.textContent.substring(1);
		return hydrate_next(), n;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function set_text(n, i) {
	var a = i == null ? "" : typeof i == "object" ? `${i}` : i;
	a !== (n.__t ??= n.nodeValue) && (n.__t = a, n.nodeValue = `${a}`);
}
function mount(n, i) {
	return _mount(n, i);
}
var listeners = /* @__PURE__ */ new Map();
function _mount(n, { target: i, anchor: a, props: o = {}, events: c, context: l, intro: u = !0, transformError: d }) {
	init_operations();
	var f = void 0, p = component_root(() => {
		var u = a ?? i.appendChild(create_text());
		boundary(u, { pending: () => {} }, (i) => {
			push({});
			var a = component_context;
			if (l && (a.c = l), c && (o.$$events = c), hydrating && assign_nodes(i, null), f = n(i, o) || {}, hydrating && (active_effect.nodes.end = hydrate_node, hydrate_node === null || hydrate_node.nodeType !== 8 || hydrate_node.data !== "]")) throw hydration_mismatch(), HYDRATION_ERROR;
			pop();
		}, d);
		var p = /* @__PURE__ */ new Set(), m = (n) => {
			for (var a = 0; a < n.length; a++) {
				var o = n[a];
				if (!p.has(o)) {
					p.add(o);
					var s = is_passive_event(o);
					for (let n of [i, document]) {
						var c = listeners.get(n);
						c === void 0 && (c = /* @__PURE__ */ new Map(), listeners.set(n, c));
						var l = c.get(o);
						l === void 0 ? (n.addEventListener(o, handle_event_propagation, { passive: s }), c.set(o, 1)) : c.set(o, l + 1);
					}
				}
			}
		};
		return m(array_from(all_registered_events)), root_event_handles.add(m), () => {
			for (var n of p) for (let a of [i, document]) {
				var o = listeners.get(a), s = o.get(n);
				--s == 0 ? (a.removeEventListener(n, handle_event_propagation), o.delete(n), o.size === 0 && listeners.delete(a)) : o.set(n, s);
			}
			root_event_handles.delete(m), u !== a && u.parentNode?.removeChild(u);
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
	constructor(n, i = !0) {
		this.anchor = n, this.#i = i;
	}
	#a = (n) => {
		if (this.#e.has(n)) {
			var i = this.#e.get(n), a = this.#t.get(i);
			if (a) resume_effect(a), this.#r.delete(i);
			else {
				var o = this.#n.get(i);
				o && (this.#t.set(i, o.effect), this.#n.delete(i), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), a = o.effect);
			}
			for (let [i, a] of this.#e) {
				if (this.#e.delete(i), i === n) break;
				let o = this.#n.get(a);
				o && (destroy_effect(o.effect), this.#n.delete(a));
			}
			for (let [n, o] of this.#t) {
				if (n === i || this.#r.has(n)) continue;
				let s = () => {
					if (Array.from(this.#e.values()).includes(n)) {
						var i = document.createDocumentFragment();
						move_effect(o, i), i.append(create_text()), this.#n.set(n, {
							effect: o,
							fragment: i
						});
					} else destroy_effect(o);
					this.#r.delete(n), this.#t.delete(n);
				};
				this.#i || !a ? (this.#r.add(n), pause_effect(o, s, !1)) : s();
			}
		}
	};
	#o = (n) => {
		this.#e.delete(n);
		let i = Array.from(this.#e.values());
		for (let [n, a] of this.#n) i.includes(n) || (destroy_effect(a.effect), this.#n.delete(n));
	};
	ensure(n, i) {
		var a = current_batch, o = should_defer_append();
		if (i && !this.#t.has(n) && !this.#n.has(n)) if (o) {
			var s = document.createDocumentFragment(), c = create_text();
			s.append(c), this.#n.set(n, {
				effect: branch(() => i(c)),
				fragment: s
			});
		} else this.#t.set(n, branch(() => i(this.anchor)));
		if (this.#e.set(a, n), o) {
			for (let [i, o] of this.#t) i === n ? a.unskip_effect(o) : a.skip_effect(o);
			for (let [i, o] of this.#n) i === n ? a.unskip_effect(o.effect) : a.skip_effect(o.effect);
			a.oncommit(this.#a), a.ondiscard(this.#o);
		} else hydrating && (this.anchor = hydrate_node), this.#a(a);
	}
};
function if_block(n, i, a = !1) {
	var o;
	hydrating && (o = hydrate_node, hydrate_next());
	var s = new BranchManager(n), c = a ? EFFECT_TRANSPARENT : 0;
	function l(n, i) {
		if (hydrating) {
			var a = read_hydration_instruction(o);
			if (n !== parseInt(a.substring(1))) {
				var c = skip_nodes();
				set_hydrate_node(c), s.anchor = c, set_hydrating(!1), s.ensure(n, i), set_hydrating(!0);
				return;
			}
		}
		s.ensure(n, i);
	}
	block(() => {
		var n = !1;
		i((i, a = 0) => {
			n = !0, l(a, i);
		}), n || l(-1, null);
	}, c);
}
function snippet(n, i, ...a) {
	var o = new BranchManager(n);
	block(() => {
		let n = i() ?? null;
		o.ensure(n, n && ((i) => n(i, ...a)));
	}, EFFECT_TRANSPARENT);
}
function component(n, i, a) {
	var o;
	hydrating && (o = hydrate_node, hydrate_next());
	var s = new BranchManager(n);
	block(() => {
		var n = i() ?? null;
		if (hydrating && read_hydration_instruction(o) === "[" != (n !== null)) {
			var c = skip_nodes();
			set_hydrate_node(c), s.anchor = c, set_hydrating(!1), s.ensure(n, n && ((i) => a(i, n))), set_hydrating(!0);
			return;
		}
		s.ensure(n, n && ((i) => a(i, n)));
	}, EFFECT_TRANSPARENT);
}
function attach(n, i) {
	var a = void 0, o;
	managed(() => {
		a !== (a = i()) && (o &&= (destroy_effect(o), null), a && (o = branch(() => {
			effect(() => a(n));
		})));
	});
}
function r(n) {
	var i, a, o = "";
	if (typeof n == "string" || typeof n == "number") o += n;
	else if (typeof n == "object") if (Array.isArray(n)) {
		var s = n.length;
		for (i = 0; i < s; i++) n[i] && (a = r(n[i])) && (o && (o += " "), o += a);
	} else for (a in n) n[a] && (o && (o += " "), o += a);
	return o;
}
function clsx() {
	for (var n, i, a = 0, o = "", s = arguments.length; a < s; a++) (n = arguments[a]) && (i = r(n)) && (o && (o += " "), o += i);
	return o;
}
function clsx$1(n) {
	return typeof n == "object" ? clsx(n) : n ?? "";
}
var whitespace = [..." 	\n\r\f\xA0\v﻿"];
function to_class(n, i, a) {
	var o = n == null ? "" : "" + n;
	if (i && (o = o ? o + " " + i : i), a) {
		for (var s of Object.keys(a)) if (a[s]) o = o ? o + " " + s : s;
		else if (o.length) for (var c = s.length, l = 0; (l = o.indexOf(s, l)) >= 0;) {
			var u = l + c;
			(l === 0 || whitespace.includes(o[l - 1])) && (u === o.length || whitespace.includes(o[u])) ? o = (l === 0 ? "" : o.substring(0, l)) + o.substring(u + 1) : l = u;
		}
	}
	return o === "" ? null : o;
}
function append_styles(n, i = !1) {
	var a = i ? " !important;" : ";", o = "";
	for (var s of Object.keys(n)) {
		var c = n[s];
		c != null && c !== "" && (o += " " + s + ": " + c + a);
	}
	return o;
}
function to_css_name(n) {
	return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function to_style(n, i) {
	if (i) {
		var a = "", o, s;
		if (Array.isArray(i) ? (o = i[0], s = i[1]) : o = i, n) {
			n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var c = !1, l = 0, u = !1, d = [];
			o && d.push(...Object.keys(o).map(to_css_name)), s && d.push(...Object.keys(s).map(to_css_name));
			var f = 0, p = -1;
			let i = n.length;
			for (var m = 0; m < i; m++) {
				var h = n[m];
				if (u ? h === "/" && n[m - 1] === "*" && (u = !1) : c ? c === h && (c = !1) : h === "/" && n[m + 1] === "*" ? u = !0 : h === "\"" || h === "'" ? c = h : h === "(" ? l++ : h === ")" && l--, !u && c === !1 && l === 0) {
					if (h === ":" && p === -1) p = m;
					else if (h === ";" || m === i - 1) {
						if (p !== -1) {
							var g = to_css_name(n.substring(f, p).trim());
							if (!d.includes(g)) {
								h !== ";" && m++;
								var _ = n.substring(f, m).trim();
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
	return n == null ? null : String(n);
}
function set_class(n, i, a, o, s, c) {
	var l = n.__className;
	if (hydrating || l !== a || l === void 0) {
		var u = to_class(a, o, c);
		(!hydrating || u !== n.getAttribute("class")) && (u == null ? n.removeAttribute("class") : i ? n.className = u : n.setAttribute("class", u)), n.__className = a;
	} else if (c && s !== c) for (var d in c) {
		var f = !!c[d];
		(s == null || f !== !!s[d]) && n.classList.toggle(d, f);
	}
	return c;
}
function update_styles(n, i = {}, a, o) {
	for (var s in a) {
		var c = a[s];
		i[s] !== c && (a[s] == null ? n.style.removeProperty(s) : n.style.setProperty(s, c, o));
	}
}
function set_style(n, i, a, o) {
	var s = n.__style;
	if (hydrating || s !== i) {
		var c = to_style(i, o);
		(!hydrating || c !== n.getAttribute("style")) && (c == null ? n.removeAttribute("style") : n.style.cssText = c), n.__style = i;
	} else o && (Array.isArray(o) ? (update_styles(n, a?.[0], o[0]), update_styles(n, a?.[1], o[1], "important")) : update_styles(n, a, o));
	return o;
}
function select_option(n, a, o = !1) {
	if (n.multiple) {
		if (a == null) return;
		if (!is_array(a)) return select_multiple_invalid_value();
		for (var s of n.options) s.selected = a.includes(get_option_value(s));
		return;
	}
	for (s of n.options) if (is(get_option_value(s), a)) {
		s.selected = !0;
		return;
	}
	(!o || a !== void 0) && (n.selectedIndex = -1);
}
function init_select(n) {
	var i = new MutationObserver(() => {
		select_option(n, n.__value);
	});
	i.observe(n, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), teardown(() => {
		i.disconnect();
	});
}
function get_option_value(n) {
	return "__value" in n ? n.__value : n.value;
}
const CLASS = Symbol("class"), STYLE = Symbol("style");
var IS_CUSTOM_ELEMENT = Symbol("is custom element"), IS_HTML = Symbol("is html"), LINK_TAG = IS_XHTML ? "link" : "LINK", INPUT_TAG = IS_XHTML ? "input" : "INPUT", OPTION_TAG = IS_XHTML ? "option" : "OPTION", SELECT_TAG = IS_XHTML ? "select" : "SELECT";
function remove_input_defaults(n) {
	if (hydrating) {
		var i = !1, a = () => {
			if (!i) {
				if (i = !0, n.hasAttribute("value")) {
					var a = n.value;
					set_attribute(n, "value", null), n.value = a;
				}
				if (n.hasAttribute("checked")) {
					var o = n.checked;
					set_attribute(n, "checked", null), n.checked = o;
				}
			}
		};
		n.__on_r = a, queue_micro_task(a), add_form_reset_listener();
	}
}
function set_selected(n, i) {
	i ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function set_attribute(n, i, a, o) {
	var s = get_attributes(n);
	hydrating && (s[i] = n.getAttribute(i), i === "src" || i === "srcset" || i === "href" && n.nodeName === LINK_TAG) || s[i] !== (s[i] = a) && (i === "loading" && (n[LOADING_ATTR_SYMBOL] = a), a == null ? n.removeAttribute(i) : typeof a != "string" && get_setters(n).includes(i) ? n[i] = a : n.setAttribute(i, a));
}
function set_attributes(n, i, a, o, s = !1, c = !1) {
	if (hydrating && s && n.nodeName === INPUT_TAG) {
		var l = n;
		(l.type === "checkbox" ? "defaultChecked" : "defaultValue") in a || remove_input_defaults(l);
	}
	var u = get_attributes(n), d = u[IS_CUSTOM_ELEMENT], f = !u[IS_HTML];
	let p = hydrating && d;
	p && set_hydrating(!1);
	var m = i || {}, h = n.nodeName === OPTION_TAG;
	for (var g in i) g in a || (a[g] = null);
	a.class ? a.class = clsx$1(a.class) : (o || a[CLASS]) && (a.class = null), a[STYLE] && (a.style ??= null);
	var _ = get_setters(n);
	for (let s in a) {
		let l = a[s];
		if (h && s === "value" && l == null) {
			n.value = n.__value = "", m[s] = l;
			continue;
		}
		if (s === "class") {
			set_class(n, n.namespaceURI === "http://www.w3.org/1999/xhtml", l, o, i?.[CLASS], a[CLASS]), m[s] = l, m[CLASS] = a[CLASS];
			continue;
		}
		if (s === "style") {
			set_style(n, l, i?.[STYLE], a[STYLE]), m[s] = l, m[STYLE] = a[STYLE];
			continue;
		}
		var v = m[s];
		if (!(l === v && !(l === void 0 && n.hasAttribute(s)))) {
			m[s] = l;
			var y = s[0] + s[1];
			if (y !== "$$") if (y === "on") {
				let i = {}, a = "$$" + s, o = s.slice(2);
				var b = can_delegate_event(o);
				if (is_capture_event(o) && (o = o.slice(0, -7), i.capture = !0), !b && v) {
					if (l != null) continue;
					n.removeEventListener(o, m[a], i), m[a] = null;
				}
				if (b) delegated(o, n, l), delegate([o]);
				else if (l != null) {
					function c(n) {
						m[s].call(this, n);
					}
					m[a] = create_event(o, n, c, i);
				}
			} else if (s === "style") set_attribute(n, s, l);
			else if (s === "autofocus") autofocus(n, !!l);
			else if (!d && (s === "__value" || s === "value" && l != null)) n.value = n.__value = l;
			else if (s === "selected" && h) set_selected(n, l);
			else {
				var x = s;
				f || (x = normalize_attribute(x));
				var S = x === "defaultValue" || x === "defaultChecked";
				if (l == null && !d && !S) if (u[s] = null, x === "value" || x === "checked") {
					let a = n, o = i === void 0;
					if (x === "value") {
						let n = a.defaultValue;
						a.removeAttribute(x), a.defaultValue = n, a.value = a.__value = o ? n : null;
					} else {
						let n = a.defaultChecked;
						a.removeAttribute(x), a.defaultChecked = n, a.checked = o ? n : !1;
					}
				} else n.removeAttribute(s);
				else S || _.includes(x) && (d || typeof l != "string") ? (n[x] = l, x in u && (u[x] = UNINITIALIZED)) : typeof l != "function" && set_attribute(n, x, l, c);
			}
		}
	}
	return p && set_hydrating(!0), m;
}
function attribute_effect(n, i, a = [], o = [], s = [], c, l = !1, u = !1) {
	flatten(s, a, o, (a) => {
		var o = void 0, s = {}, d = n.nodeName === SELECT_TAG, f = !1;
		if (managed(() => {
			var p = i(...a.map(get)), m = set_attributes(n, o, p, c, l, u);
			f && d && "value" in p && select_option(n, p.value);
			for (let n of Object.getOwnPropertySymbols(s)) p[n] || destroy_effect(s[n]);
			for (let i of Object.getOwnPropertySymbols(p)) {
				var h = p[i];
				i.description === "@attach" && (!o || h !== o[i]) && (s[i] && destroy_effect(s[i]), s[i] = branch(() => attach(n, () => h))), m[i] = h;
			}
			o = m;
		}), d) {
			var p = n;
			effect(() => {
				select_option(p, o.value, !0), init_select(p);
			});
		}
		f = !0;
	});
}
function get_attributes(n) {
	return n.__attributes ??= {
		[IS_CUSTOM_ELEMENT]: n.nodeName.includes("-"),
		[IS_HTML]: n.namespaceURI === "http://www.w3.org/1999/xhtml"
	};
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(n) {
	var i = n.getAttribute("is") || n.nodeName, a = setters_cache.get(i);
	if (a) return a;
	setters_cache.set(i, a = []);
	for (var o, s = n, c = Element.prototype; c !== s;) {
		for (var l in o = get_descriptors(s), o) o[l].set && a.push(l);
		s = get_prototype_of(s);
	}
	return a;
}
function is_bound_this(n, i) {
	return n === i || n?.[STATE_SYMBOL] === i;
}
function bind_this(n = {}, i, a, o) {
	var s = component_context.r, c = active_effect;
	return effect(() => {
		var l, u;
		return render_effect(() => {
			l = u, u = o?.() || [], untrack(() => {
				n !== a(...u) && (i(n, ...u), l && is_bound_this(a(...l), n) && i(null, ...l));
			});
		}), () => {
			let o = c;
			for (; o !== s && o.parent !== null && o.parent.f & 33554432;) o = o.parent;
			let l = () => {
				u && is_bound_this(a(...u), n) && i(null, ...u);
			}, d = o.teardown;
			o.teardown = () => {
				l(), d?.();
			};
		};
	}), n;
}
function init$1(n = !1) {
	let i = component_context, a = i.l.u;
	if (!a) return;
	let o = () => deep_read_state(i.s);
	if (n) {
		let n = 0, a = {}, s = /* @__PURE__ */ derived(() => {
			let o = !1, s = i.s;
			for (let n in s) s[n] !== a[n] && (a[n] = s[n], o = !0);
			return o && n++, n;
		});
		o = () => get(s);
	}
	a.b.length && user_pre_effect(() => {
		observe_all(i, o), run_all(a.b);
	}), user_effect(() => {
		let n = untrack(() => a.m.map(run));
		return () => {
			for (let i of n) typeof i == "function" && i();
		};
	}), a.a.length && user_effect(() => {
		observe_all(i, o), run_all(a.a);
	});
}
function observe_all(n, i) {
	if (n.l.s) for (let i of n.l.s) get(i);
	i();
}
var rest_props_handler = {
	get(n, i) {
		if (!n.exclude.includes(i)) return n.props[i];
	},
	set(n, i) {
		return !1;
	},
	getOwnPropertyDescriptor(n, i) {
		if (!n.exclude.includes(i) && i in n.props) return {
			enumerable: !0,
			configurable: !0,
			value: n.props[i]
		};
	},
	has(n, i) {
		return n.exclude.includes(i) ? !1 : i in n.props;
	},
	ownKeys(n) {
		return Reflect.ownKeys(n.props).filter((i) => !n.exclude.includes(i));
	}
};
/* @__NO_SIDE_EFFECTS__ */
function rest_props(n, i, a) {
	return new Proxy({
		props: n,
		exclude: i
	}, rest_props_handler);
}
var spread_props_handler = {
	get(n, i) {
		let a = n.props.length;
		for (; a--;) {
			let o = n.props[a];
			if (is_function(o) && (o = o()), typeof o == "object" && o && i in o) return o[i];
		}
	},
	set(n, i, a) {
		let o = n.props.length;
		for (; o--;) {
			let s = n.props[o];
			is_function(s) && (s = s());
			let c = get_descriptor(s, i);
			if (c && c.set) return c.set(a), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(n, i) {
		let a = n.props.length;
		for (; a--;) {
			let o = n.props[a];
			if (is_function(o) && (o = o()), typeof o == "object" && o && i in o) {
				let n = get_descriptor(o, i);
				return n && !n.configurable && (n.configurable = !0), n;
			}
		}
	},
	has(n, i) {
		if (i === STATE_SYMBOL || i === LEGACY_PROPS) return !1;
		for (let a of n.props) if (is_function(a) && (a = a()), a != null && i in a) return !0;
		return !1;
	},
	ownKeys(n) {
		let i = [];
		for (let a of n.props) if (is_function(a) && (a = a()), a) {
			for (let n in a) i.includes(n) || i.push(n);
			for (let n of Object.getOwnPropertySymbols(a)) i.includes(n) || i.push(n);
		}
		return i;
	}
};
function spread_props(...n) {
	return new Proxy({ props: n }, spread_props_handler);
}
function prop(n, i, a, o) {
	var s = !legacy_mode_flag || (a & 2) != 0, c = (a & 8) != 0, u = (a & 16) != 0, d = o, f = !0, p = () => (f && (f = !1, d = u ? untrack(o) : o), d);
	let m;
	if (c) {
		var h = STATE_SYMBOL in n || LEGACY_PROPS in n;
		m = get_descriptor(n, i)?.set ?? (h && i in n ? (a) => n[i] = a : void 0);
	}
	var g, _ = !1;
	c ? [g, _] = capture_store_binding(() => n[i]) : g = n[i], g === void 0 && o !== void 0 && (g = p(), m && (s && props_invalid_value(i), m(g)));
	var v = s ? () => {
		var a = n[i];
		return a === void 0 ? p() : (f = !0, a);
	} : () => {
		var a = n[i];
		return a !== void 0 && (d = void 0), a === void 0 ? d : a;
	};
	if (s && !(a & 4)) return v;
	if (m) {
		var y = n.$$legacy;
		return (function(n, i) {
			return arguments.length > 0 ? ((!s || !i || y || _) && m(i ? v() : n), n) : v();
		});
	}
	var b = !1, x = (a & 1 ? derived : derived_safe_equal)(() => (b = !1, v()));
	c && get(x);
	var S = active_effect;
	return (function(n, i) {
		if (arguments.length > 0) {
			let a = i ? get(x) : s && c ? proxy(n) : n;
			return set(x, a), b = !0, d !== void 0 && (d = a), n;
		}
		return is_destroying_effect && b || S.f & 16384 ? x.v : get(x);
	});
}
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5"), enable_legacy_mode_flag();
var root$4 = /* @__PURE__ */ from_html("<div class=\"relative w-15 h-15 shrink-0 overflow-hidden\"><div class=\"absolute top-[18%] left-[-75%] w-[250%] py-[0.25em] pr-[1.5em] -rotate-45 bg-primary text-white text-[0.6rem] font-bold text-center shadow-md leading-none pointer-events-none\"> </div></div>");
function VersionBadge(n, i) {
	let a = prop(i, "version", 3, "main");
	var o = root$4(), s = child(o), c = child(s, !0);
	reset(s), reset(o), template_effect(() => set_text(c, a())), append(n, o);
}
function isObject(n) {
	return typeof n == "object" && !!n;
}
var CLASS_VALUE_PRIMITIVE_TYPES = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function isClassValue(n) {
	return n == null || CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof n) ? !0 : Array.isArray(n) ? n.every((n) => isClassValue(n)) : typeof n == "object" ? Object.getPrototypeOf(n) === Object.prototype : !1;
}
const BoxSymbol = Symbol("box"), isWritableSymbol = Symbol("is-writable");
function boxWith(n, i) {
	let a = /* @__PURE__ */ user_derived(n);
	return i ? {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get(a);
		},
		set current(n) {
			i(n);
		}
	} : {
		[BoxSymbol]: !0,
		get current() {
			return n();
		}
	};
}
function isBox(n) {
	return isObject(n) && BoxSymbol in n;
}
function composeHandlers(...n) {
	return function(i) {
		for (let a of n) if (a) {
			if (i.defaultPrevented) return;
			typeof a == "function" ? a.call(this, i) : a.current?.call(this, i);
		}
	};
}
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, NEWLINE_REGEX = /\n/g, WHITESPACE_REGEX = /^\s*/, PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, COLON_REGEX = /^:\s*/, VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, SEMICOLON_REGEX = /^[;\s]*/, TRIM_REGEX = /^\s+|\s+$/g, NEWLINE = "\n", FORWARD_SLASH = "/", ASTERISK = "*", EMPTY_STRING = "", TYPE_COMMENT = "comment", TYPE_DECLARATION = "declaration";
function index(n, i) {
	if (typeof n != "string") throw TypeError("First argument must be a string");
	if (!n) return [];
	i ||= {};
	var a = 1, o = 1;
	function s(n) {
		var i = n.match(NEWLINE_REGEX);
		i && (a += i.length);
		var s = n.lastIndexOf(NEWLINE);
		o = ~s ? n.length - s : o + n.length;
	}
	function c() {
		var n = {
			line: a,
			column: o
		};
		return function(i) {
			return i.position = new l(n), f(), i;
		};
	}
	function l(n) {
		this.start = n, this.end = {
			line: a,
			column: o
		}, this.source = i.source;
	}
	l.prototype.content = n;
	function u(s) {
		var c = /* @__PURE__ */ Error(i.source + ":" + a + ":" + o + ": " + s);
		if (c.reason = s, c.filename = i.source, c.line = a, c.column = o, c.source = n, !i.silent) throw c;
	}
	function d(i) {
		var a = i.exec(n);
		if (a) {
			var o = a[0];
			return s(o), n = n.slice(o.length), a;
		}
	}
	function f() {
		d(WHITESPACE_REGEX);
	}
	function p(n) {
		var i;
		for (n ||= []; i = m();) i !== !1 && n.push(i);
		return n;
	}
	function m() {
		var i = c();
		if (!(FORWARD_SLASH != n.charAt(0) || ASTERISK != n.charAt(1))) {
			for (var a = 2; EMPTY_STRING != n.charAt(a) && (ASTERISK != n.charAt(a) || FORWARD_SLASH != n.charAt(a + 1));) ++a;
			if (a += 2, EMPTY_STRING === n.charAt(a - 1)) return u("End of comment missing");
			var l = n.slice(2, a - 2);
			return o += 2, s(l), n = n.slice(a), o += 2, i({
				type: TYPE_COMMENT,
				comment: l
			});
		}
	}
	function h() {
		var n = c(), i = d(PROPERTY_REGEX);
		if (i) {
			if (m(), !d(COLON_REGEX)) return u("property missing ':'");
			var a = d(VALUE_REGEX), o = n({
				type: TYPE_DECLARATION,
				property: trim(i[0].replace(COMMENT_REGEX, EMPTY_STRING)),
				value: a ? trim(a[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
			});
			return d(SEMICOLON_REGEX), o;
		}
	}
	function g() {
		var n = [];
		p(n);
		for (var i; i = h();) i !== !1 && (n.push(i), p(n));
		return n;
	}
	return f(), g();
}
function trim(n) {
	return n ? n.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
function StyleToObject(n, i) {
	let a = null;
	if (!n || typeof n != "string") return a;
	let o = index(n), s = typeof i == "function";
	return o.forEach((n) => {
		if (n.type !== "declaration") return;
		let { property: o, value: c } = n;
		s ? i(o, c, n) : c && (a ||= {}, a[o] = c);
	}), a;
}
var NUMBER_CHAR_RE = /\d/, STR_SPLITTERS = [
	"-",
	"_",
	"/",
	"."
];
function isUppercase(n = "") {
	if (!NUMBER_CHAR_RE.test(n)) return n !== n.toLowerCase();
}
function splitByCase(n) {
	let i = [], a = "", o, s;
	for (let c of n) {
		let n = STR_SPLITTERS.includes(c);
		if (n === !0) {
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
				let n = a.at(-1);
				i.push(a.slice(0, Math.max(0, a.length - 1))), a = n + c, o = l;
				continue;
			}
		}
		a += c, o = l, s = n;
	}
	return i.push(a), i;
}
function pascalCase(n) {
	return n ? splitByCase(n).map((n) => upperFirst(n)).join("") : "";
}
function camelCase(n) {
	return lowerFirst(pascalCase(n || ""));
}
function upperFirst(n) {
	return n ? n[0].toUpperCase() + n.slice(1) : "";
}
function lowerFirst(n) {
	return n ? n[0].toLowerCase() + n.slice(1) : "";
}
function cssToStyleObj(n) {
	if (!n) return {};
	let i = {};
	function a(n, a) {
		if (n.startsWith("-moz-") || n.startsWith("-webkit-") || n.startsWith("-ms-") || n.startsWith("-o-")) {
			i[pascalCase(n)] = a;
			return;
		}
		if (n.startsWith("--")) {
			i[n] = a;
			return;
		}
		i[camelCase(n)] = a;
	}
	return StyleToObject(n, a), i;
}
function executeCallbacks(...n) {
	return (...i) => {
		for (let a of n) typeof a == "function" && a(...i);
	};
}
function createParser(n, i) {
	let a = RegExp(n, "g");
	return (n) => {
		if (typeof n != "string") throw TypeError(`expected an argument of type string, but got ${typeof n}`);
		return n.match(a) ? n.replace(a, i) : n;
	};
}
var camelToKebab = createParser(/[A-Z]/, (n) => `-${n.toLowerCase()}`);
function styleToCSS(n) {
	if (!n || typeof n != "object" || Array.isArray(n)) throw TypeError(`expected an argument of type object, but got ${typeof n}`);
	return Object.keys(n).map((i) => `${camelToKebab(i)}: ${n[i]};`).join("\n");
}
function styleToString(n = {}) {
	return styleToCSS(n).replace("\n", " ");
}
var EVENT_LIST = /* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split(".");
const EVENT_LIST_SET = new Set(EVENT_LIST);
function isEventHandler(n) {
	return EVENT_LIST_SET.has(n);
}
function mergeProps(...n) {
	let i = { ...n[0] };
	for (let a = 1; a < n.length; a++) {
		let o = n[a];
		if (o) {
			for (let n of Object.keys(o)) {
				let a = i[n], s = o[n], c = typeof a == "function", l = typeof s == "function";
				if (c && typeof l && isEventHandler(n)) i[n] = composeHandlers(a, s);
				else if (c && l) i[n] = executeCallbacks(a, s);
				else if (n === "class") {
					let o = isClassValue(a), c = isClassValue(s);
					o && c ? i[n] = clsx(a, s) : o ? i[n] = clsx(a) : c && (i[n] = clsx(s));
				} else if (n === "style") {
					let o = typeof a == "object", c = typeof s == "object", l = typeof a == "string", u = typeof s == "string";
					if (o && c) i[n] = {
						...a,
						...s
					};
					else if (o && u) {
						let o = cssToStyleObj(s);
						i[n] = {
							...a,
							...o
						};
					} else if (l && c) i[n] = {
						...cssToStyleObj(a),
						...s
					};
					else if (l && u) {
						let o = cssToStyleObj(a), c = cssToStyleObj(s);
						i[n] = {
							...o,
							...c
						};
					} else o ? i[n] = a : c ? i[n] = s : l ? i[n] = a : u && (i[n] = s);
				} else i[n] = s === void 0 ? a : s;
			}
			for (let n of Object.getOwnPropertySymbols(o)) {
				let a = i[n], s = o[n];
				i[n] = s === void 0 ? a : s;
			}
		}
	}
	return typeof i.style == "object" && (i.style = styleToString(i.style).replaceAll("\n", " ")), i.hidden === !1 && (i.hidden = void 0, delete i.hidden), i.disabled === !1 && (i.disabled = void 0, delete i.disabled), i;
}
const defaultWindow = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function getActiveElement$1(n) {
	let i = n.activeElement;
	for (; i?.shadowRoot;) {
		let n = i.shadowRoot.activeElement;
		if (n === i) break;
		i = n;
	}
	return i;
}
URLSearchParams, Symbol.iterator, new class {
	#e;
	#t;
	constructor(n = {}) {
		let { window: i = defaultWindow, document: a = i?.document } = n;
		i !== void 0 && (this.#e = a, this.#t = createSubscriber((n) => {
			let a = on(i, "focusin", n), o = on(i, "focusout", n);
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
	constructor(n) {
		this.#e = n, this.#t = Symbol(n);
	}
	get key() {
		return this.#t;
	}
	exists() {
		return hasContext(this.#t);
	}
	get() {
		let n = getContext(this.#t);
		if (n === void 0) throw Error(`Context "${this.#e}" not found`);
		return n;
	}
	getOr(n) {
		let i = getContext(this.#t);
		return i === void 0 ? n : i;
	}
	set(n) {
		return setContext(this.#t, n);
	}
};
function runEffect(n, i) {
	switch (n) {
		case "post":
			user_effect(i);
			break;
		case "pre":
			user_pre_effect(i);
			break;
	}
}
function runWatcher(n, i, a, o = {}) {
	let { lazy: s = !1 } = o, c = !s, l = Array.isArray(n) ? [] : void 0;
	runEffect(i, () => {
		let i = Array.isArray(n) ? n.map((n) => n()) : n();
		if (!c) {
			c = !0, l = i;
			return;
		}
		let o = untrack(() => a(i, l));
		return l = i, o;
	});
}
function runWatcherOnce(n, i, a) {
	let o = effect_root(() => {
		let s = !1;
		runWatcher(n, i, (n, i) => {
			if (s) {
				o();
				return;
			}
			let c = a(n, i);
			return s = !0, c;
		}, { lazy: !0 });
	});
	user_effect(() => o);
}
function watch(n, i, a) {
	runWatcher(n, "post", i, a);
}
function watchPre(n, i, a) {
	runWatcher(n, "pre", i, a);
}
watch.pre = watchPre;
function watchOnce(n, i) {
	runWatcherOnce(n, "post", i);
}
function watchOncePre(n, i) {
	runWatcherOnce(n, "pre", i);
}
watchOnce.pre = watchOncePre;
function debounce(n, i) {
	let a, o = null;
	return (...s) => new Promise((c) => {
		o && o(void 0), o = c, clearTimeout(a), a = setTimeout(async () => {
			let i = await n(...s);
			o &&= (o(i), null);
		}, i);
	});
}
function throttle(n, i) {
	let a = 0, o = null;
	return (...s) => {
		let c = Date.now();
		return a && c - a < i ? o ?? Promise.resolve(void 0) : (a = c, o = n(...s), o);
	};
}
function runResource(n, i, a = {}, o) {
	let { lazy: s = !1, once: c = !1, initialValue: l, debounce: u, throttle: d } = a, f = /* @__PURE__ */ state(proxy(l)), p = /* @__PURE__ */ state(!1), m = /* @__PURE__ */ state(void 0), h = /* @__PURE__ */ state(proxy([])), g = () => {
		get(h).forEach((n) => n()), set(h, [], !0);
	}, _ = (n) => {
		set(h, [...get(h), n], !0);
	}, v = async (n, a, o = !1) => {
		try {
			set(p, !0), set(m, void 0), g();
			let s = new AbortController();
			_(() => s.abort());
			let c = await i(n, a, {
				data: get(f),
				refetching: o,
				onCleanup: _,
				signal: s.signal
			});
			return set(f, c, !0), c;
		} catch (n) {
			n instanceof DOMException && n.name === "AbortError" || set(m, n, !0);
			return;
		} finally {
			set(p, !1);
		}
	}, y = u ? debounce(v, u) : d ? throttle(v, d) : v, b = Array.isArray(n) ? n : [n], x;
	return o((i, a) => {
		c && x || (x = i, y(Array.isArray(n) ? i : i[0], Array.isArray(n) ? a : a?.[0]));
	}, { lazy: s }), {
		get current() {
			return get(f);
		},
		get loading() {
			return get(p);
		},
		get error() {
			return get(m);
		},
		mutate: (n) => {
			set(f, n, !0);
		},
		refetch: (i) => {
			let a = b.map((n) => n());
			return y(Array.isArray(n) ? a : a[0], Array.isArray(n) ? a : a[0], i ?? !0);
		}
	};
}
function resource(n, i, a) {
	return runResource(n, i, a, (i, a) => {
		let o = Array.isArray(n) ? n : [n];
		watch(() => o.map((n) => n()), (n, a) => {
			i(n, a ?? []);
		}, a);
	});
}
function resourcePre(n, i, a) {
	return runResource(n, i, a, (i, a) => {
		let o = Array.isArray(n) ? n : [n];
		watch.pre(() => o.map((n) => n()), (n, a) => {
			i(n, a ?? []);
		}, a);
	});
}
resource.pre = resourcePre;
var DOCUMENT_NODE = 9;
function isDocument(n) {
	return isObject(n) && n.nodeType === DOCUMENT_NODE;
}
function isWindow(n) {
	return isObject(n) && n.constructor?.name === "VisualViewport";
}
function getDocument(n) {
	return isDocument(n) ? n : isWindow(n) ? n.document : n?.ownerDocument ?? document;
}
function getActiveElement(n) {
	let i = n.activeElement;
	for (; i?.shadowRoot;) {
		let n = i.shadowRoot.activeElement;
		if (n === i) break;
		i = n;
	}
	return i;
}
var DOMContext = class {
	element;
	#e = /* @__PURE__ */ user_derived(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return get(this.#e);
	}
	set root(n) {
		set(this.#e, n);
	}
	constructor(n) {
		typeof n == "function" ? this.element = boxWith(n) : this.element = n;
	}
	getDocument = () => getDocument(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => getActiveElement(this.root);
	isActiveElement = (n) => n === this.getActiveElement();
	getElementById(n) {
		return this.root.getElementById(n);
	}
	querySelector = (n) => this.root ? this.root.querySelector(n) : null;
	querySelectorAll = (n) => this.root ? this.root.querySelectorAll(n) : [];
	setTimeout = (n, i) => this.getWindow().setTimeout(n, i);
	clearTimeout = (n) => this.getWindow().clearTimeout(n);
};
function attachRef(n, i) {
	return { [createAttachmentKey()]: (a) => isBox(n) ? (n.current = a, untrack(() => i?.(a)), () => {
		"isConnected" in a && a.isConnected || (n.current = null, i?.(null));
	}) : (n(a), untrack(() => i?.(a)), () => {
		"isConnected" in a && a.isConnected || (n(null), i?.(null));
	}) };
}
var BitsAttrs = class {
	#e;
	#t;
	attrs;
	constructor(n) {
		this.#e = n.getVariant ? n.getVariant() : null, this.#t = this.#e ? `data-${this.#e}-` : `data-${n.component}-`, this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(n.parts.map((n) => [n, this.getAttr(n)]));
	}
	getAttr(n, i) {
		return i ? `data-${i}-${n}` : `${this.#t}${n}`;
	}
	selector(n, i) {
		return `[${this.getAttr(n, i)}]`;
	}
};
function createBitsAttrs(n) {
	let i = new BitsAttrs(n);
	return {
		...i.attrs,
		selector: i.selector,
		getAttr: i.getAttr
	};
}
function createId(n, i) {
	return i === void 0 ? `bits-${n}` : `bits-${n}-${i}`;
}
var avatarAttrs = createBitsAttrs({
	component: "avatar",
	parts: [
		"root",
		"image",
		"fallback"
	]
}), AvatarRootContext = new Context("Avatar.Root"), AvatarRootState = class n {
	static create(i) {
		return AvatarRootContext.set(new n(i));
	}
	opts;
	domContext;
	attachment;
	constructor(n) {
		this.opts = n, this.domContext = new DOMContext(this.opts.ref), this.loadImage = this.loadImage.bind(this), this.attachment = attachRef(this.opts.ref);
	}
	loadImage(n, i, a) {
		if (this.opts.loadingStatus.current === "loaded") return;
		let o, s = new Image();
		return s.src = n, i !== void 0 && (s.crossOrigin = i), a && (s.referrerPolicy = a), this.opts.loadingStatus.current = "loading", s.onload = () => {
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
		return get(this.#e);
	}
	set props(n) {
		set(this.#e, n);
	}
}, AvatarImageState = class n {
	static create(i) {
		return new n(i, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(n, i) {
		this.opts = n, this.root = i, this.attachment = attachRef(this.opts.ref), watch.pre([() => this.opts.src.current, () => this.opts.crossOrigin.current], ([n, i]) => {
			if (!n) {
				this.root.opts.loadingStatus.current = "error";
				return;
			}
			this.root.loadImage(n, i, this.opts.referrerPolicy.current);
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
		return get(this.#e);
	}
	set props(n) {
		set(this.#e, n);
	}
}, AvatarFallbackState = class n {
	static create(i) {
		return new n(i, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(n, i) {
		this.opts = n, this.root = i, this.attachment = attachRef(this.opts.ref);
	}
	#e = /* @__PURE__ */ user_derived(() => this.root.opts.loadingStatus.current === "loaded" ? { display: "none" } : void 0);
	get style() {
		return get(this.#e);
	}
	set style(n) {
		set(this.#e, n);
	}
	#t = /* @__PURE__ */ user_derived(() => ({
		style: this.style,
		"data-status": this.root.opts.loadingStatus.current,
		[avatarAttrs.fallback]: "",
		...this.attachment
	}));
	get props() {
		return get(this.#t);
	}
	set props(n) {
		set(this.#t, n);
	}
}, root_2$2 = /* @__PURE__ */ from_html("<div><!></div>");
function Avatar$1(n, i) {
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
		loadingStatus: boxWith(() => s(), (n) => {
			s() !== n && (s(n), i.onLoadingStatusChange?.(n));
		}),
		id: boxWith(() => c()),
		ref: boxWith(() => l(), (n) => l(n))
	}), f = /* @__PURE__ */ user_derived(() => mergeProps(u, d.props));
	var p = comment(), m = first_child(p), h = (n) => {
		var a = comment();
		snippet(first_child(a), () => i.child, () => ({ props: get(f) })), append(n, a);
	}, _ = (n) => {
		var a = root_2$2();
		attribute_effect(a, () => ({ ...get(f) })), snippet(child(a), () => i.children ?? noop), reset(a), append(n, a);
	};
	if_block(m, (n) => {
		i.child ? n(h) : n(_, -1);
	}), append(n, p), pop();
}
var root_2$1 = /* @__PURE__ */ from_html("<img/>");
function Avatar_image$1(n, i) {
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
		ref: boxWith(() => s(), (n) => s(n)),
		crossOrigin: boxWith(() => c()),
		referrerPolicy: boxWith(() => l())
	}), f = /* @__PURE__ */ user_derived(() => mergeProps(u, d.props));
	var p = comment(), m = first_child(p), h = (n) => {
		var a = comment();
		snippet(first_child(a), () => i.child, () => ({ props: get(f) })), append(n, a);
	}, g = (n) => {
		var a = root_2$1();
		attribute_effect(a, () => ({
			...get(f),
			src: i.src
		})), replay_events(a), append(n, a);
	};
	if_block(m, (n) => {
		i.child ? n(h) : n(g, -1);
	}), append(n, p), pop();
}
var root_2 = /* @__PURE__ */ from_html("<span><!></span>");
function Avatar_fallback$1(n, i) {
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
		ref: boxWith(() => s(), (n) => s(n))
	}), u = /* @__PURE__ */ user_derived(() => mergeProps(c, l.props));
	var d = comment(), f = first_child(d), p = (n) => {
		var a = comment();
		snippet(first_child(a), () => i.child, () => ({ props: get(u) })), append(n, a);
	}, m = (n) => {
		var a = root_2();
		attribute_effect(a, () => ({ ...get(u) })), snippet(child(a), () => i.children ?? noop), reset(a), append(n, a);
	};
	if_block(f, (n) => {
		i.child ? n(p) : n(m, -1);
	}), append(n, d), pop();
}
var concatArrays = (n, i) => {
	let a = Array(n.length + i.length);
	for (let i = 0; i < n.length; i++) a[i] = n[i];
	for (let o = 0; o < i.length; o++) a[n.length + o] = i[o];
	return a;
}, createClassValidatorObject = (n, i) => ({
	classGroupId: n,
	validator: i
}), createClassPartObject = (n = /* @__PURE__ */ new Map(), i = null, a) => ({
	nextPart: n,
	validators: i,
	classGroupId: a
}), CLASS_PART_SEPARATOR = "-", EMPTY_CONFLICTS = [], ARBITRARY_PROPERTY_PREFIX = "arbitrary..", createClassGroupUtils = (n) => {
	let i = createClassMap(n), { conflictingClassGroups: a, conflictingClassGroupModifiers: o } = n;
	return {
		getClassGroupId: (n) => {
			if (n.startsWith("[") && n.endsWith("]")) return getGroupIdForArbitraryProperty(n);
			let a = n.split(CLASS_PART_SEPARATOR);
			return getGroupRecursive(a, a[0] === "" && a.length > 1 ? 1 : 0, i);
		},
		getConflictingClassGroupIds: (n, i) => {
			if (i) {
				let i = o[n], s = a[n];
				return i ? s ? concatArrays(s, i) : i : s || EMPTY_CONFLICTS;
			}
			return a[n] || EMPTY_CONFLICTS;
		}
	};
}, getGroupRecursive = (n, i, a) => {
	if (n.length - i === 0) return a.classGroupId;
	let o = n[i], s = a.nextPart.get(o);
	if (s) {
		let a = getGroupRecursive(n, i + 1, s);
		if (a) return a;
	}
	let c = a.validators;
	if (c === null) return;
	let l = i === 0 ? n.join(CLASS_PART_SEPARATOR) : n.slice(i).join(CLASS_PART_SEPARATOR), u = c.length;
	for (let n = 0; n < u; n++) {
		let i = c[n];
		if (i.validator(l)) return i.classGroupId;
	}
}, getGroupIdForArbitraryProperty = (n) => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let i = n.slice(1, -1), a = i.indexOf(":"), o = i.slice(0, a);
	return o ? ARBITRARY_PROPERTY_PREFIX + o : void 0;
})(), createClassMap = (n) => {
	let { theme: i, classGroups: a } = n;
	return processClassGroups(a, i);
}, processClassGroups = (n, i) => {
	let a = createClassPartObject();
	for (let o in n) {
		let s = n[o];
		processClassesRecursively(s, a, o, i);
	}
	return a;
}, processClassesRecursively = (n, i, a, o) => {
	let s = n.length;
	for (let c = 0; c < s; c++) {
		let s = n[c];
		processClassDefinition(s, i, a, o);
	}
}, processClassDefinition = (n, i, a, o) => {
	if (typeof n == "string") {
		processStringDefinition(n, i, a);
		return;
	}
	if (typeof n == "function") {
		processFunctionDefinition(n, i, a, o);
		return;
	}
	processObjectDefinition(n, i, a, o);
}, processStringDefinition = (n, i, a) => {
	let o = n === "" ? i : getPart(i, n);
	o.classGroupId = a;
}, processFunctionDefinition = (n, i, a, o) => {
	if (isThemeGetter(n)) {
		processClassesRecursively(n(o), i, a, o);
		return;
	}
	i.validators === null && (i.validators = []), i.validators.push(createClassValidatorObject(a, n));
}, processObjectDefinition = (n, i, a, o) => {
	let s = Object.entries(n), c = s.length;
	for (let n = 0; n < c; n++) {
		let [c, l] = s[n];
		processClassesRecursively(l, getPart(i, c), a, o);
	}
}, getPart = (n, i) => {
	let a = n, o = i.split(CLASS_PART_SEPARATOR), s = o.length;
	for (let n = 0; n < s; n++) {
		let i = o[n], s = a.nextPart.get(i);
		s || (s = createClassPartObject(), a.nextPart.set(i, s)), a = s;
	}
	return a;
}, isThemeGetter = (n) => "isThemeGetter" in n && n.isThemeGetter === !0, createLruCache = (n) => {
	if (n < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let i = 0, a = Object.create(null), o = Object.create(null), s = (s, c) => {
		a[s] = c, i++, i > n && (i = 0, o = a, a = Object.create(null));
	};
	return {
		get(n) {
			let i = a[n];
			if (i !== void 0) return i;
			if ((i = o[n]) !== void 0) return s(n, i), i;
		},
		set(n, i) {
			n in a ? a[n] = i : s(n, i);
		}
	};
}, IMPORTANT_MODIFIER = "!", MODIFIER_SEPARATOR = ":", EMPTY_MODIFIERS = [], createResultObject = (n, i, a, o, s) => ({
	modifiers: n,
	hasImportantModifier: i,
	baseClassName: a,
	maybePostfixModifierPosition: o,
	isExternal: s
}), createParseClassName = (n) => {
	let { prefix: i, experimentalParseClassName: a } = n, o = (n) => {
		let i = [], a = 0, o = 0, s = 0, c, l = n.length;
		for (let u = 0; u < l; u++) {
			let l = n[u];
			if (a === 0 && o === 0) {
				if (l === MODIFIER_SEPARATOR) {
					i.push(n.slice(s, u)), s = u + 1;
					continue;
				}
				if (l === "/") {
					c = u;
					continue;
				}
			}
			l === "[" ? a++ : l === "]" ? a-- : l === "(" ? o++ : l === ")" && o--;
		}
		let u = i.length === 0 ? n : n.slice(s), d = u, f = !1;
		u.endsWith(IMPORTANT_MODIFIER) ? (d = u.slice(0, -1), f = !0) : u.startsWith(IMPORTANT_MODIFIER) && (d = u.slice(1), f = !0);
		let p = c && c > s ? c - s : void 0;
		return createResultObject(i, f, d, p);
	};
	if (i) {
		let n = i + MODIFIER_SEPARATOR, a = o;
		o = (i) => i.startsWith(n) ? a(i.slice(n.length)) : createResultObject(EMPTY_MODIFIERS, !1, i, void 0, !0);
	}
	if (a) {
		let n = o;
		o = (i) => a({
			className: i,
			parseClassName: n
		});
	}
	return o;
}, createSortModifiers = (n) => {
	let i = /* @__PURE__ */ new Map();
	return n.orderSensitiveModifiers.forEach((n, a) => {
		i.set(n, 1e6 + a);
	}), (n) => {
		let a = [], o = [];
		for (let s = 0; s < n.length; s++) {
			let c = n[s], l = c[0] === "[", u = i.has(c);
			l || u ? (o.length > 0 && (o.sort(), a.push(...o), o = []), a.push(c)) : o.push(c);
		}
		return o.length > 0 && (o.sort(), a.push(...o)), a;
	};
}, createConfigUtils = (n) => ({
	cache: createLruCache(n.cacheSize),
	parseClassName: createParseClassName(n),
	sortModifiers: createSortModifiers(n),
	...createClassGroupUtils(n)
}), SPLIT_CLASSES_REGEX = /\s+/, mergeClassList = (n, i) => {
	let { parseClassName: a, getClassGroupId: o, getConflictingClassGroupIds: s, sortModifiers: c } = i, l = [], u = n.trim().split(SPLIT_CLASSES_REGEX), d = "";
	for (let n = u.length - 1; n >= 0; --n) {
		let i = u[n], { isExternal: f, modifiers: p, hasImportantModifier: m, baseClassName: h, maybePostfixModifierPosition: g } = a(i);
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
		for (let n = 0; n < S.length; ++n) {
			let i = S[n];
			l.push(b + i);
		}
		d = i + (d.length > 0 ? " " + d : d);
	}
	return d;
}, twJoin = (...n) => {
	let i = 0, a, o, s = "";
	for (; i < n.length;) (a = n[i++]) && (o = toValue(a)) && (s && (s += " "), s += o);
	return s;
}, toValue = (n) => {
	if (typeof n == "string") return n;
	let i, a = "";
	for (let o = 0; o < n.length; o++) n[o] && (i = toValue(n[o])) && (a && (a += " "), a += i);
	return a;
}, createTailwindMerge = (n, ...i) => {
	let a, o, s, c, l = (l) => (a = createConfigUtils(i.reduce((n, i) => i(n), n())), o = a.cache.get, s = a.cache.set, c = u, u(l)), u = (n) => {
		let i = o(n);
		if (i) return i;
		let c = mergeClassList(n, a);
		return s(n, c), c;
	};
	return c = l, (...n) => c(twJoin(...n));
}, fallbackThemeArr = [], fromTheme = (n) => {
	let i = (i) => i[n] || fallbackThemeArr;
	return i.isThemeGetter = !0, i;
}, arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, isFraction = (n) => fractionRegex.test(n), isNumber = (n) => !!n && !Number.isNaN(Number(n)), isInteger = (n) => !!n && Number.isInteger(Number(n)), isPercent = (n) => n.endsWith("%") && isNumber(n.slice(0, -1)), isTshirtSize = (n) => tshirtUnitRegex.test(n), isAny = () => !0, isLengthOnly = (n) => lengthUnitRegex.test(n) && !colorFunctionRegex.test(n), isNever = () => !1, isShadow = (n) => shadowRegex.test(n), isImage = (n) => imageRegex.test(n), isAnyNonArbitrary = (n) => !isArbitraryValue(n) && !isArbitraryVariable(n), isArbitrarySize = (n) => getIsArbitraryValue(n, isLabelSize, isNever), isArbitraryValue = (n) => arbitraryValueRegex.test(n), isArbitraryLength = (n) => getIsArbitraryValue(n, isLabelLength, isLengthOnly), isArbitraryNumber = (n) => getIsArbitraryValue(n, isLabelNumber, isNumber), isArbitraryWeight = (n) => getIsArbitraryValue(n, isLabelWeight, isAny), isArbitraryFamilyName = (n) => getIsArbitraryValue(n, isLabelFamilyName, isNever), isArbitraryPosition = (n) => getIsArbitraryValue(n, isLabelPosition, isNever), isArbitraryImage = (n) => getIsArbitraryValue(n, isLabelImage, isImage), isArbitraryShadow = (n) => getIsArbitraryValue(n, isLabelShadow, isShadow), isArbitraryVariable = (n) => arbitraryVariableRegex.test(n), isArbitraryVariableLength = (n) => getIsArbitraryVariable(n, isLabelLength), isArbitraryVariableFamilyName = (n) => getIsArbitraryVariable(n, isLabelFamilyName), isArbitraryVariablePosition = (n) => getIsArbitraryVariable(n, isLabelPosition), isArbitraryVariableSize = (n) => getIsArbitraryVariable(n, isLabelSize), isArbitraryVariableImage = (n) => getIsArbitraryVariable(n, isLabelImage), isArbitraryVariableShadow = (n) => getIsArbitraryVariable(n, isLabelShadow, !0), isArbitraryVariableWeight = (n) => getIsArbitraryVariable(n, isLabelWeight, !0), getIsArbitraryValue = (n, i, a) => {
	let o = arbitraryValueRegex.exec(n);
	return o ? o[1] ? i(o[1]) : a(o[2]) : !1;
}, getIsArbitraryVariable = (n, i, a = !1) => {
	let o = arbitraryVariableRegex.exec(n);
	return o ? o[1] ? i(o[1]) : a : !1;
}, isLabelPosition = (n) => n === "position" || n === "percentage", isLabelImage = (n) => n === "image" || n === "url", isLabelSize = (n) => n === "length" || n === "size" || n === "bg-size", isLabelLength = (n) => n === "length", isLabelNumber = (n) => n === "number", isLabelFamilyName = (n) => n === "family-name", isLabelWeight = (n) => n === "number" || n === "weight", isLabelShadow = (n) => n === "shadow", twMerge = /* @__PURE__ */ createTailwindMerge(() => {
	let n = fromTheme("color"), i = fromTheme("font"), a = fromTheme("text"), o = fromTheme("font-weight"), s = fromTheme("tracking"), c = fromTheme("leading"), l = fromTheme("breakpoint"), u = fromTheme("container"), d = fromTheme("spacing"), f = fromTheme("radius"), p = fromTheme("shadow"), m = fromTheme("inset-shadow"), h = fromTheme("text-shadow"), g = fromTheme("drop-shadow"), _ = fromTheme("blur"), v = fromTheme("perspective"), y = fromTheme("aspect"), b = fromTheme("ease"), x = fromTheme("animate"), S = () => [
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
		n,
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
});
function cn(...n) {
	return twMerge(clsx(n));
}
function Avatar(n, i) {
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
		let n = /* @__PURE__ */ user_derived(() => cn("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten", i.class));
		component(u, () => Avatar$1, (i, l) => {
			l(i, spread_props({
				"data-slot": "avatar",
				get "data-size"() {
					return s();
				},
				get class() {
					return get(n);
				}
			}, () => c, {
				get ref() {
					return a();
				},
				set ref(n) {
					a(n);
				},
				get loadingStatus() {
					return o();
				},
				set loadingStatus(n) {
					o(n);
				}
			}));
		});
	}
	append(n, l), pop();
}
function Avatar_image(n, i) {
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
		let n = /* @__PURE__ */ user_derived(() => cn("rounded-full aspect-square size-full object-cover", i.class));
		component(c, () => Avatar_image$1, (i, s) => {
			s(i, spread_props({
				"data-slot": "avatar-image",
				get class() {
					return get(n);
				}
			}, () => o, {
				get ref() {
					return a();
				},
				set ref(n) {
					a(n);
				}
			}));
		});
	}
	append(n, s), pop();
}
function Avatar_fallback(n, i) {
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
		let n = /* @__PURE__ */ user_derived(() => cn("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", i.class));
		component(c, () => Avatar_fallback$1, (i, s) => {
			s(i, spread_props({
				"data-slot": "avatar-fallback",
				get class() {
					return get(n);
				}
			}, () => o, {
				get ref() {
					return a();
				},
				set ref(n) {
					a(n);
				}
			}));
		});
	}
	append(n, s), pop();
}
var root$3 = /* @__PURE__ */ from_html("<span><!></span>");
function Avatar_badge(n, i) {
	push(i, !0);
	let a = prop(i, "ref", 15, null), o = /* @__PURE__ */ rest_props(i, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"class",
		"children"
	]);
	var s = root$3();
	attribute_effect(s, (n) => ({
		"data-slot": "avatar-badge",
		class: n,
		...o
	}), [() => cn("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", i.class)]), snippet(child(s), () => i.children ?? noop), reset(s), bind_this(s, (n) => a(n), () => a()), append(n, s), pop();
}
var root_1 = /* @__PURE__ */ from_html("<!> <!> <!>", 1);
function ChannelAvatar(n, i) {
	let a = prop(i, "fallbackText", 3, "Channel Logo");
	Avatar(n, {
		class: "rounded-lg",
		children: (n, o) => {
			var s = root_1(), c = first_child(s);
			Avatar_image(c, {
				get src() {
					return i.imgSrc;
				},
				get alt() {
					return a();
				}
			});
			var l = sibling(c, 2), u = (n) => {
				{
					let a = /* @__PURE__ */ user_derived(() => i.isConnected ? "bg-green-500" : "bg-red-500");
					Avatar_badge(n, { get class() {
						return get(a);
					} });
				}
			};
			if_block(l, (n) => {
				typeof i.isConnected == "boolean" && n(u);
			}), Avatar_fallback(sibling(l, 2), {
				children: (n, i) => {
					next();
					var o = text();
					template_effect(() => set_text(o, a())), append(n, o);
				},
				$$slots: { default: !0 }
			}), append(n, s);
		},
		$$slots: { default: !0 }
	});
}
var logoImgSrc = new URL("dist/logo.png", window.BASE_URL).toString(), root = /* @__PURE__ */ from_html("<header class=\"sticky w-full flex flex-row items-center justify-start h-15 mx-auto top-0 z-50 border-b bg-background md:bg-background/80 md:backdrop-blur-md\"><!> <div class=\"w-full flex flex-row items-center justify-between pr-6 py-5\"><!></div></header>");
function Header(n, i) {
	push(i, !1);
	let a = () => store_get(appStore, "$appStore", s), o = () => store_get(socketStore, "$socketStore", s), [s, c] = setup_stores();
	init$1();
	var l = root(), u = child(l), d = (n) => {
		VersionBadge(n, { get version() {
			return a().version;
		} });
	};
	if_block(u, (n) => {
		a().version && n(d);
	});
	var f = sibling(u, 2);
	ChannelAvatar(child(f), {
		get imgSrc() {
			return logoImgSrc;
		},
		get isConnected() {
			return o().connected;
		}
	}), reset(f), reset(l), append(n, l), pop(), c();
}
var upgradeBody = () => {
	document.body.classList.add("dark"), document.body.classList.add("override-theme");
}, upgradeNavbar = async () => {
	let n = document.getElementsByTagName("nav");
	if (!n) throw Error("no nav element found");
	if (n.length < 1) throw Error("no nav elements found");
	let [i] = n;
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
	let n = initStores();
	try {
		await initOverrides(), await upgradeLegacyElements();
	} catch (i) {
		throw n(), i;
	}
};
export { init };
