const socketClient = window.socket;
var is_array = Array.isArray, index_of = Array.prototype.indexOf, includes = Array.prototype.includes;
Array.from, Object.keys, Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor, object_prototype = Object.prototype, array_prototype = Array.prototype, get_prototype_of = Object.getPrototypeOf;
Object.isExtensible;
const noop = () => {};
function run_all(c) {
	for (var L = 0; L < c.length; L++) c[L]();
}
function deferred() {
	var c, L;
	return {
		promise: new Promise((R, z) => {
			c = R, L = z;
		}),
		resolve: c,
		reject: L
	};
}
const CLEAN = 1024, DIRTY = 2048, MAYBE_DIRTY = 4096, INERT = 8192, REACTION_RAN = 32768, DESTROYING = 1 << 25, EFFECT_TRANSPARENT = 65536, WAS_MARKED = 65536, REACTION_IS_UPDATING = 1 << 21, ERROR_VALUE = 1 << 23, STATE_SYMBOL = Symbol("$state"), STALE_REACTION = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
globalThis.document?.contentType;
function equals(c) {
	return c === this.v;
}
function safe_not_equal(c, L) {
	return c == c ? c !== L || typeof c == "object" && !!c || typeof c == "function" : L == L;
}
function effect_update_depth_exceeded() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
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
const UNINITIALIZED = Symbol();
let component_context = null;
function set_component_context(c) {
	component_context = c;
}
function is_runes() {
	return !0;
}
var micro_tasks = [];
function run_micro_tasks() {
	var c = micro_tasks;
	micro_tasks = [], run_all(c);
}
function queue_micro_task(c) {
	if (micro_tasks.length === 0 && !is_flushing_sync) {
		var L = micro_tasks;
		queueMicrotask(() => {
			L === micro_tasks && run_micro_tasks();
		});
	}
	micro_tasks.push(c);
}
function flush_tasks() {
	for (; micro_tasks.length > 0;) run_micro_tasks();
}
function derived_inert() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function proxy(c) {
	if (typeof c != "object" || !c || STATE_SYMBOL in c) return c;
	let R = get_prototype_of(c);
	if (R !== object_prototype && R !== array_prototype) return c;
	var z = /* @__PURE__ */ new Map(), W = is_array(c), G = /* @__PURE__ */ state(0), K = null, q = update_version, J = (c) => {
		if (update_version === q) return c();
		var L = active_reaction, R = update_version;
		set_active_reaction(null), set_update_version(q);
		var z = c();
		return set_active_reaction(L), set_update_version(R), z;
	};
	return W && z.set("length", /* @__PURE__ */ state(c.length, K)), new Proxy(c, {
		defineProperty(c, L, R) {
			(!("value" in R) || R.configurable === !1 || R.enumerable === !1 || R.writable === !1) && state_descriptors_fixed();
			var B = z.get(L);
			return B === void 0 ? J(() => {
				var c = /* @__PURE__ */ state(R.value, K);
				return z.set(L, c), c;
			}) : set(B, R.value, !0), !0;
		},
		deleteProperty(c, L) {
			var R = z.get(L);
			if (R === void 0) {
				if (L in c) {
					let c = J(() => /* @__PURE__ */ state(UNINITIALIZED, K));
					z.set(L, c), increment(G);
				}
			} else set(R, UNINITIALIZED), increment(G);
			return !0;
		},
		get(L, R, V) {
			if (R === STATE_SYMBOL) return c;
			var H = z.get(R), U = R in L;
			if (H === void 0 && (!U || get_descriptor(L, R)?.writable) && (H = J(() => /* @__PURE__ */ state(proxy(U ? L[R] : UNINITIALIZED), K)), z.set(R, H)), H !== void 0) {
				var W = get(H);
				return W === UNINITIALIZED ? void 0 : W;
			}
			return Reflect.get(L, R, V);
		},
		getOwnPropertyDescriptor(c, L) {
			var R = Reflect.getOwnPropertyDescriptor(c, L);
			if (R && "value" in R) {
				var B = z.get(L);
				B && (R.value = get(B));
			} else if (R === void 0) {
				var V = z.get(L), H = V?.v;
				if (V !== void 0 && H !== UNINITIALIZED) return {
					enumerable: !0,
					configurable: !0,
					value: H,
					writable: !0
				};
			}
			return R;
		},
		has(c, L) {
			if (L === STATE_SYMBOL) return !0;
			var R = z.get(L), V = R !== void 0 && R.v !== UNINITIALIZED || Reflect.has(c, L);
			return (R !== void 0 || active_effect !== null && (!V || get_descriptor(c, L)?.writable)) && (R === void 0 && (R = J(() => /* @__PURE__ */ state(V ? proxy(c[L]) : UNINITIALIZED, K)), z.set(L, R)), get(R) === UNINITIALIZED) ? !1 : V;
		},
		set(c, L, R, V) {
			var H = z.get(L), U = L in c;
			if (W && L === "length") for (var q = R; q < H.v; q += 1) {
				var Y = z.get(q + "");
				Y === void 0 ? q in c && (Y = J(() => /* @__PURE__ */ state(UNINITIALIZED, K)), z.set(q + "", Y)) : set(Y, UNINITIALIZED);
			}
			if (H === void 0) (!U || get_descriptor(c, L)?.writable) && (H = J(() => /* @__PURE__ */ state(void 0, K)), set(H, proxy(R)), z.set(L, H));
			else {
				U = H.v !== UNINITIALIZED;
				var X = J(() => proxy(R));
				set(H, X);
			}
			var Z = Reflect.getOwnPropertyDescriptor(c, L);
			if (Z?.set && Z.set.call(V, R), !U) {
				if (W && typeof L == "string") {
					var Q = z.get("length"), $ = Number(L);
					Number.isInteger($) && $ >= Q.v && set(Q, $ + 1);
				}
				increment(G);
			}
			return !0;
		},
		ownKeys(c) {
			get(G);
			var L = Reflect.ownKeys(c).filter((c) => {
				var L = z.get(c);
				return L === void 0 || L.v !== UNINITIALIZED;
			});
			for (var [R, B] of z) B.v !== UNINITIALIZED && !(R in c) && L.push(R);
			return L;
		},
		setPrototypeOf() {
			state_prototype_fixed();
		}
	});
}
var next_sibling_getter;
/* @__NO_SIDE_EFFECTS__ */
function get_next_sibling(c) {
	return next_sibling_getter.call(c);
}
function handle_error(c) {
	var L = active_effect;
	if (L === null) return active_reaction.f |= ERROR_VALUE, c;
	if (!(L.f & 32768) && !(L.f & 4)) throw c;
	invoke_error_boundary(c, L);
}
function invoke_error_boundary(c, L) {
	for (; L !== null;) {
		if (L.f & 128) {
			if (!(L.f & 32768)) throw c;
			try {
				L.b.error(c);
				return;
			} catch (L) {
				c = L;
			}
		}
		L = L.parent;
	}
	throw c;
}
var STATUS_MASK = ~(MAYBE_DIRTY | 3072);
function set_signal_status(c, L) {
	c.f = c.f & STATUS_MASK | L;
}
function update_derived_status(c) {
	c.f & 512 || c.deps === null ? set_signal_status(c, CLEAN) : set_signal_status(c, MAYBE_DIRTY);
}
function clear_marked(c) {
	if (c !== null) for (let L of c) !(L.f & 2) || !(L.f & 65536) || (L.f ^= WAS_MARKED, clear_marked(L.deps));
}
function defer_effect(c, L, R) {
	c.f & 2048 ? L.add(c) : c.f & 4096 && R.add(c), clear_marked(c.deps), set_signal_status(c, CLEAN);
}
var subscriber_queue = [];
function writable(c, L = noop) {
	let R = null, z = /* @__PURE__ */ new Set();
	function B(L) {
		if (safe_not_equal(c, L) && (c = L, R)) {
			let L = !subscriber_queue.length;
			for (let L of z) L[1](), subscriber_queue.push(L, c);
			if (L) {
				for (let c = 0; c < subscriber_queue.length; c += 2) subscriber_queue[c][0](subscriber_queue[c + 1]);
				subscriber_queue.length = 0;
			}
		}
	}
	function V(L) {
		B(L(c));
	}
	function H(H, U = noop) {
		let G = [H, U];
		return z.add(G), z.size === 1 && (R = L(B, V) || noop), H(c), () => {
			z.delete(G), z.size === 0 && R && (R(), R = null);
		};
	}
	return {
		set: B,
		update: V,
		subscribe: H
	};
}
var batches = /* @__PURE__ */ new Set();
let current_batch = null, batch_values = null;
var last_scheduled_effect = null;
let is_flushing_sync = !1;
var is_processing = !1;
let collected_effects = null, legacy_updates = null;
var flush_count = 0, uid = 1, Batch = class c {
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
		for (let R of this.#p) for (let z of R.#i.keys()) {
			for (var c = !1, L = z; L.parent !== null;) {
				if (this.#u.has(L)) {
					c = !0;
					break;
				}
				L = L.parent;
			}
			if (!c) return !0;
		}
		return !1;
	}
	skip_effect(c) {
		this.#u.has(c) || this.#u.set(c, {
			d: [],
			m: []
		}), this.#d.delete(c);
	}
	unskip_effect(c, L = (c) => this.schedule(c)) {
		var R = this.#u.get(c);
		if (R) {
			this.#u.delete(c);
			for (var z of R.d) set_signal_status(z, DIRTY), L(z);
			for (z of R.m) set_signal_status(z, MAYBE_DIRTY), L(z);
		}
		this.#d.add(c);
	}
	#g() {
		if (flush_count++ > 1e3 && (batches.delete(this), infinite_loop_guard()), !this.#m()) {
			for (let c of this.#c) this.#l.delete(c), set_signal_status(c, DIRTY), this.schedule(c);
			for (let c of this.#l) set_signal_status(c, MAYBE_DIRTY), this.schedule(c);
		}
		let L = this.#o;
		this.#o = [], this.apply();
		var R = collected_effects = [], z = [], B = legacy_updates = [];
		for (let c of L) try {
			this.#_(c, R, z);
		} catch (L) {
			throw reset_all(c), L;
		}
		if (current_batch = null, B.length > 0) {
			var V = c.ensure();
			for (let c of B) V.schedule(c);
		}
		if (collected_effects = null, legacy_updates = null, this.#m() || this.#h()) {
			this.#v(z), this.#v(R);
			for (let [c, L] of this.#u) reset_branch(c, L);
		} else {
			this.#r.size === 0 && batches.delete(this), this.#c.clear(), this.#l.clear();
			for (let c of this.#e) c(this);
			this.#e.clear(), flush_queued_effects(z), flush_queued_effects(R), this.#a?.resolve();
		}
		var H = current_batch;
		if (this.#o.length > 0) {
			let c = H ??= this;
			c.#o.push(...this.#o.filter((L) => !c.#o.includes(L)));
		}
		H !== null && (batches.add(H), H.#g());
	}
	#_(c, L, R) {
		c.f ^= CLEAN;
		for (var z = c.first; z !== null;) {
			var B = z.f, V = (B & 96) != 0;
			if (!(V && B & 1024 || B & 8192 || this.#u.has(z)) && z.fn !== null) {
				V ? z.f ^= CLEAN : B & 4 ? L.push(z) : is_dirty(z) && (B & 16 && this.#l.add(z), update_effect(z));
				var H = z.first;
				if (H !== null) {
					z = H;
					continue;
				}
			}
			for (; z !== null;) {
				var U = z.next;
				if (U !== null) {
					z = U;
					break;
				}
				z = z.parent;
			}
		}
	}
	#v(c) {
		for (var L = 0; L < c.length; L += 1) defer_effect(c[L], this.#c, this.#l);
	}
	capture(c, L, R = !1) {
		c.v !== UNINITIALIZED && !this.previous.has(c) && this.previous.set(c, c.v), c.f & 8388608 || (this.current.set(c, [L, R]), batch_values?.set(c, L)), this.is_fork || (c.v = L);
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
		for (let c of this.#t) c(this);
		this.#t.clear(), this.#n.clear(), batches.delete(this);
	}
	register_created_effect(c) {
		this.#s.push(c);
	}
	increment(c, L) {
		let R = this.#r.get(L) ?? 0;
		if (this.#r.set(L, R + 1), c) {
			let c = this.#i.get(L) ?? 0;
			this.#i.set(L, c + 1);
		}
	}
	decrement(c, L, R) {
		let z = this.#r.get(L) ?? 0;
		if (z === 1 ? this.#r.delete(L) : this.#r.set(L, z - 1), c) {
			let c = this.#i.get(L) ?? 0;
			c === 1 ? this.#i.delete(L) : this.#i.set(L, c - 1);
		}
		this.#f || R || (this.#f = !0, queue_micro_task(() => {
			this.#f = !1, this.flush();
		}));
	}
	transfer_effects(c, L) {
		for (let L of c) this.#c.add(L);
		for (let c of L) this.#l.add(c);
		c.clear(), L.clear();
	}
	oncommit(c) {
		this.#e.add(c);
	}
	ondiscard(c) {
		this.#t.add(c);
	}
	on_fork_commit(c) {
		this.#n.add(c);
	}
	run_fork_commit_callbacks() {
		for (let c of this.#n) c(this);
		this.#n.clear();
	}
	settled() {
		return (this.#a ??= deferred()).promise;
	}
	static ensure() {
		if (current_batch === null) {
			let L = current_batch = new c();
			is_processing || (batches.add(current_batch), is_flushing_sync || queue_micro_task(() => {
				current_batch === L && L.flush();
			}));
		}
		return current_batch;
	}
	apply() {
		batch_values = null;
	}
	schedule(c) {
		if (last_scheduled_effect = c, c.b?.is_pending && c.f & 16777228 && !(c.f & 32768)) {
			c.b.defer_effect(c);
			return;
		}
		for (var L = c; L.parent !== null;) {
			L = L.parent;
			var R = L.f;
			if (collected_effects !== null && L === active_effect && (active_reaction === null || !(active_reaction.f & 2))) return;
			if (R & 96) {
				if (!(R & 1024)) return;
				L.f ^= CLEAN;
			}
		}
		this.#o.push(L);
	}
};
function flushSync(c) {
	var L = is_flushing_sync;
	is_flushing_sync = !0;
	try {
		var R;
		for (c && (current_batch !== null && !current_batch.is_fork && current_batch.flush(), R = c());;) {
			if (flush_tasks(), current_batch === null) return R;
			current_batch.flush();
		}
	} finally {
		is_flushing_sync = L;
	}
}
function infinite_loop_guard() {
	try {
		effect_update_depth_exceeded();
	} catch (c) {
		invoke_error_boundary(c, last_scheduled_effect);
	}
}
let eager_block_effects = null;
function flush_queued_effects(c) {
	var L = c.length;
	if (L !== 0) {
		for (var R = 0; R < L;) {
			var z = c[R++];
			if (!(z.f & 24576) && is_dirty(z) && (eager_block_effects = /* @__PURE__ */ new Set(), update_effect(z), z.deps === null && z.first === null && z.nodes === null && z.teardown === null && z.ac === null && unlink_effect(z), eager_block_effects?.size > 0)) {
				old_values.clear();
				for (let c of eager_block_effects) {
					if (c.f & 24576) continue;
					let L = [c], R = c.parent;
					for (; R !== null;) eager_block_effects.has(R) && (eager_block_effects.delete(R), L.push(R)), R = R.parent;
					for (let c = L.length - 1; c >= 0; c--) {
						let R = L[c];
						R.f & 24576 || update_effect(R);
					}
				}
				eager_block_effects.clear();
			}
		}
		eager_block_effects = null;
	}
}
function mark_effects(c, L, R, z) {
	if (!R.has(c) && (R.add(c), c.reactions !== null)) for (let B of c.reactions) {
		let c = B.f;
		c & 2 ? mark_effects(B, L, R, z) : c & 4194320 && !(c & 2048) && depends_on(B, L, z) && (set_signal_status(B, DIRTY), schedule_effect(B));
	}
}
function depends_on(c, L, R) {
	let B = R.get(c);
	if (B !== void 0) return B;
	if (c.deps !== null) for (let B of c.deps) {
		if (includes.call(L, B)) return !0;
		if (B.f & 2 && depends_on(B, L, R)) return R.set(B, !0), !0;
	}
	return R.set(c, !1), !1;
}
function schedule_effect(c) {
	current_batch.schedule(c);
}
function reset_branch(c, L) {
	if (!(c.f & 32 && c.f & 1024)) {
		c.f & 2048 ? L.d.push(c) : c.f & 4096 && L.m.push(c), set_signal_status(c, CLEAN);
		for (var R = c.first; R !== null;) reset_branch(R, L), R = R.next;
	}
}
function reset_all(c) {
	set_signal_status(c, CLEAN);
	for (var L = c.first; L !== null;) reset_all(L), L = L.next;
}
function destroy_derived_effects(c) {
	var L = c.effects;
	if (L !== null) {
		c.effects = null;
		for (var R = 0; R < L.length; R += 1) destroy_effect(L[R]);
	}
}
function execute_derived(c) {
	var L, R = active_effect, z = c.parent;
	if (!is_destroying_effect && z !== null && z.f & 24576) return derived_inert(), c.v;
	set_active_effect(z);
	try {
		c.f &= ~WAS_MARKED, destroy_derived_effects(c), L = update_reaction(c);
	} finally {
		set_active_effect(R);
	}
	return L;
}
function update_derived(c) {
	var L = execute_derived(c);
	if (!c.equals(L) && (c.wv = increment_write_version(), (!current_batch?.is_fork || c.deps === null) && (current_batch === null ? c.v = L : current_batch.capture(c, L, !0), c.deps === null))) {
		set_signal_status(c, CLEAN);
		return;
	}
	is_destroying_effect || (batch_values === null ? update_derived_status(c) : (effect_tracking() || current_batch?.is_fork) && batch_values.set(c, L));
}
function freeze_derived_effects(c) {
	if (c.effects !== null) for (let L of c.effects) (L.teardown || L.ac) && (L.teardown?.(), L.ac?.abort(STALE_REACTION), L.teardown = noop, L.ac = null, remove_reactions(L, 0), destroy_effect_children(L));
}
function unfreeze_derived_effects(c) {
	if (c.effects !== null) for (let L of c.effects) L.teardown && update_effect(L);
}
let eager_effects = /* @__PURE__ */ new Set();
const old_values = /* @__PURE__ */ new Map();
var eager_effects_deferred = !1;
function source(c, L) {
	return {
		f: 0,
		v: c,
		reactions: null,
		equals,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function state(c, L) {
	let R = source(c, L);
	return push_reaction_value(R), R;
}
function set(c, L, R = !1) {
	return active_reaction !== null && (!untracking || active_reaction.f & 131072) && is_runes() && active_reaction.f & 4325394 && (current_sources === null || !includes.call(current_sources, c)) && state_unsafe_mutation(), internal_set(c, R ? proxy(L) : L, legacy_updates);
}
function internal_set(c, L, R = null) {
	if (!c.equals(L)) {
		old_values.set(c, is_destroying_effect ? L : c.v);
		var z = Batch.ensure();
		if (z.capture(c, L), c.f & 2) {
			let L = c;
			c.f & 2048 && execute_derived(L), batch_values === null && update_derived_status(L);
		}
		c.wv = increment_write_version(), mark_reactions(c, DIRTY, R), is_runes() && active_effect !== null && active_effect.f & 1024 && !(active_effect.f & 96) && (untracked_writes === null ? set_untracked_writes([c]) : untracked_writes.push(c)), !z.is_fork && eager_effects.size > 0 && !eager_effects_deferred && flush_eager_effects();
	}
	return L;
}
function flush_eager_effects() {
	eager_effects_deferred = !1;
	for (let c of eager_effects) c.f & 1024 && set_signal_status(c, MAYBE_DIRTY), is_dirty(c) && update_effect(c);
	eager_effects.clear();
}
function increment(c) {
	set(c, c.v + 1);
}
function mark_reactions(c, L, R) {
	var z = c.reactions;
	if (z !== null) for (var B = is_runes(), V = z.length, H = 0; H < V; H++) {
		var U = z[H], W = U.f;
		if (!(!B && U === active_effect)) {
			var G = (W & DIRTY) === 0;
			if (G && set_signal_status(U, L), W & 2) {
				var K = U;
				batch_values?.delete(K), W & 65536 || (W & 512 && (active_effect === null || !(active_effect.f & 2097152)) && (U.f |= WAS_MARKED), mark_reactions(K, MAYBE_DIRTY, R));
			} else if (G) {
				var q = U;
				W & 16 && eager_block_effects !== null && eager_block_effects.add(q), R === null ? schedule_effect(q) : R.push(q);
			}
		}
	}
}
function without_reactive_context(c) {
	var L = active_reaction, R = active_effect;
	set_active_reaction(null), set_active_effect(null);
	try {
		return c();
	} finally {
		set_active_reaction(L), set_active_effect(R);
	}
}
var is_updating_effect = !1;
let is_destroying_effect = !1;
function set_is_destroying_effect(c) {
	is_destroying_effect = c;
}
let active_reaction = null, untracking = !1;
function set_active_reaction(c) {
	active_reaction = c;
}
let active_effect = null;
function set_active_effect(c) {
	active_effect = c;
}
let current_sources = null;
function push_reaction_value(c) {
	active_reaction !== null && (current_sources === null ? current_sources = [c] : current_sources.push(c));
}
let new_deps = null, skipped_deps = 0, untracked_writes = null;
function set_untracked_writes(c) {
	untracked_writes = c;
}
let write_version = 1;
var read_version = 0;
let update_version = read_version;
function set_update_version(c) {
	update_version = c;
}
function increment_write_version() {
	return ++write_version;
}
function is_dirty(c) {
	var L = c.f;
	if (L & 2048) return !0;
	if (L & 2 && (c.f &= ~WAS_MARKED), L & 4096) {
		for (var R = c.deps, z = R.length, B = 0; B < z; B++) {
			var V = R[B];
			if (is_dirty(V) && update_derived(V), V.wv > c.wv) return !0;
		}
		L & 512 && batch_values === null && set_signal_status(c, CLEAN);
	}
	return !1;
}
function schedule_possible_effect_self_invalidation(c, L, R = !0) {
	var B = c.reactions;
	if (B !== null && !(current_sources !== null && includes.call(current_sources, c))) for (var V = 0; V < B.length; V++) {
		var H = B[V];
		H.f & 2 ? schedule_possible_effect_self_invalidation(H, L, !1) : L === H && (R ? set_signal_status(H, DIRTY) : H.f & 1024 && set_signal_status(H, MAYBE_DIRTY), schedule_effect(H));
	}
}
function update_reaction(c) {
	var L = new_deps, R = skipped_deps, z = untracked_writes, B = active_reaction, V = current_sources, H = component_context, U = untracking, W = update_version, G = c.f;
	new_deps = null, skipped_deps = 0, untracked_writes = null, active_reaction = G & 96 ? null : c, current_sources = null, set_component_context(c.ctx), untracking = !1, update_version = ++read_version, c.ac !== null && (without_reactive_context(() => {
		c.ac.abort(STALE_REACTION);
	}), c.ac = null);
	try {
		c.f |= REACTION_IS_UPDATING;
		var K = c.fn, q = K();
		c.f |= REACTION_RAN;
		var J = c.deps, Y = current_batch?.is_fork;
		if (new_deps !== null) {
			var X;
			if (Y || remove_reactions(c, skipped_deps), J !== null && skipped_deps > 0) for (J.length = skipped_deps + new_deps.length, X = 0; X < new_deps.length; X++) J[skipped_deps + X] = new_deps[X];
			else c.deps = J = new_deps;
			if (effect_tracking() && c.f & 512) for (X = skipped_deps; X < J.length; X++) (J[X].reactions ??= []).push(c);
		} else !Y && J !== null && skipped_deps < J.length && (remove_reactions(c, skipped_deps), J.length = skipped_deps);
		if (is_runes() && untracked_writes !== null && !untracking && J !== null && !(c.f & 6146)) for (X = 0; X < untracked_writes.length; X++) schedule_possible_effect_self_invalidation(untracked_writes[X], c);
		if (B !== null && B !== c) {
			if (read_version++, B.deps !== null) for (let c = 0; c < R; c += 1) B.deps[c].rv = read_version;
			if (L !== null) for (let c of L) c.rv = read_version;
			untracked_writes !== null && (z === null ? z = untracked_writes : z.push(...untracked_writes));
		}
		return c.f & 8388608 && (c.f ^= ERROR_VALUE), q;
	} catch (c) {
		return handle_error(c);
	} finally {
		c.f ^= REACTION_IS_UPDATING, new_deps = L, skipped_deps = R, untracked_writes = z, active_reaction = B, current_sources = V, set_component_context(H), untracking = U, update_version = W;
	}
}
function remove_reaction(c, L) {
	let B = L.reactions;
	if (B !== null) {
		var V = index_of.call(B, c);
		if (V !== -1) {
			var H = B.length - 1;
			H === 0 ? B = L.reactions = null : (B[V] = B[H], B.pop());
		}
	}
	if (B === null && L.f & 2 && (new_deps === null || !includes.call(new_deps, L))) {
		var U = L;
		U.f & 512 && (U.f ^= 512, U.f &= ~WAS_MARKED), U.v !== UNINITIALIZED && update_derived_status(U), freeze_derived_effects(U), remove_reactions(U, 0);
	}
}
function remove_reactions(c, L) {
	var R = c.deps;
	if (R !== null) for (var z = L; z < R.length; z++) remove_reaction(c, R[z]);
}
function update_effect(c) {
	var L = c.f;
	if (!(L & 16384)) {
		set_signal_status(c, CLEAN);
		var R = active_effect, z = is_updating_effect;
		active_effect = c, is_updating_effect = !0;
		try {
			L & 16777232 ? destroy_block_effect_children(c) : destroy_effect_children(c), execute_effect_teardown(c);
			var B = update_reaction(c);
			c.teardown = typeof B == "function" ? B : null, c.wv = write_version;
		} finally {
			is_updating_effect = z, active_effect = R;
		}
	}
}
async function tick() {
	await Promise.resolve(), flushSync();
}
function get(c) {
	var L = (c.f & 2) != 0;
	if (null?.add(c), active_reaction !== null && !untracking && !(active_effect !== null && active_effect.f & 16384) && (current_sources === null || !includes.call(current_sources, c))) {
		var R = active_reaction.deps;
		if (active_reaction.f & 2097152) c.rv < read_version && (c.rv = read_version, new_deps === null && R !== null && R[skipped_deps] === c ? skipped_deps++ : new_deps === null ? new_deps = [c] : new_deps.push(c));
		else {
			(active_reaction.deps ??= []).push(c);
			var B = c.reactions;
			B === null ? c.reactions = [active_reaction] : includes.call(B, active_reaction) || B.push(active_reaction);
		}
	}
	if (is_destroying_effect && old_values.has(c)) return old_values.get(c);
	if (L) {
		var V = c;
		if (is_destroying_effect) {
			var H = V.v;
			return (!(V.f & 1024) && V.reactions !== null || depends_on_old_values(V)) && (H = execute_derived(V)), old_values.set(V, H), H;
		}
		var U = (V.f & 512) == 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & 512) != 0), W = (V.f & REACTION_RAN) === 0;
		is_dirty(V) && (U && (V.f |= 512), update_derived(V)), U && !W && (unfreeze_derived_effects(V), reconnect(V));
	}
	if (batch_values?.has(c)) return batch_values.get(c);
	if (c.f & 8388608) throw c.v;
	return c.v;
}
function reconnect(c) {
	if (c.f |= 512, c.deps !== null) for (let L of c.deps) (L.reactions ??= []).push(c), L.f & 2 && !(L.f & 512) && (unfreeze_derived_effects(L), reconnect(L));
}
function depends_on_old_values(c) {
	if (c.v === UNINITIALIZED) return !0;
	if (c.deps === null) return !1;
	for (let L of c.deps) if (old_values.has(L) || L.f & 2 && depends_on_old_values(L)) return !0;
	return !1;
}
function effect_tracking() {
	return active_reaction !== null && !untracking;
}
function execute_effect_teardown(c) {
	var L = c.teardown;
	if (L !== null) {
		let c = is_destroying_effect, R = active_reaction;
		set_is_destroying_effect(!0), set_active_reaction(null);
		try {
			L.call(null);
		} finally {
			set_is_destroying_effect(c), set_active_reaction(R);
		}
	}
}
function destroy_effect_children(c, L = !1) {
	var R = c.first;
	for (c.first = c.last = null; R !== null;) {
		let c = R.ac;
		c !== null && without_reactive_context(() => {
			c.abort(STALE_REACTION);
		});
		var z = R.next;
		R.f & 64 ? R.parent = null : destroy_effect(R, L), R = z;
	}
}
function destroy_block_effect_children(c) {
	for (var L = c.first; L !== null;) {
		var R = L.next;
		L.f & 32 || destroy_effect(L), L = R;
	}
}
function destroy_effect(c, L = !0) {
	var R = !1;
	(L || c.f & 262144) && c.nodes !== null && c.nodes.end !== null && (remove_effect_dom(c.nodes.start, c.nodes.end), R = !0), set_signal_status(c, DESTROYING), destroy_effect_children(c, L && !R), remove_reactions(c, 0);
	var z = c.nodes && c.nodes.t;
	if (z !== null) for (let c of z) c.stop();
	execute_effect_teardown(c), c.f ^= DESTROYING, c.f |= 16384;
	var B = c.parent;
	B !== null && B.first !== null && unlink_effect(c), c.next = c.prev = c.teardown = c.ctx = c.deps = c.fn = c.nodes = c.ac = c.b = null;
}
function remove_effect_dom(c, L) {
	for (; c !== null;) {
		var R = c === L ? null : /* @__PURE__ */ get_next_sibling(c);
		c.remove(), c = R;
	}
}
function unlink_effect(c) {
	var L = c.parent, R = c.prev, z = c.next;
	R !== null && (R.next = z), z !== null && (z.prev = R), L !== null && (L.first === c && (L.first = z), L.last === c && (L.last = R));
}
function pause_children(c, L, R) {
	if (!(c.f & 8192)) {
		c.f ^= 8192;
		var z = c.nodes && c.nodes.t;
		if (z !== null) for (let c of z) (c.is_global || R) && L.push(c);
		for (var B = c.first; B !== null;) {
			var V = B.next;
			if (!(B.f & 64)) {
				var H = (B.f & 65536) != 0 || (B.f & 32) != 0 && (c.f & 16) != 0;
				pause_children(B, L, H ? R : !1);
			}
			B = V;
		}
	}
}
var defaultAppState = { version: "" };
const appStore = ((c) => {
	let { subscribe: L, set: R, update: z } = writable({
		...defaultAppState,
		...c
	});
	return {
		subscribe: L,
		init: (c) => R(c),
		updateVersion: (c) => z((L) => ({
			...L,
			version: c
		})),
		resetVersion: () => z((c) => ({
			...c,
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
const clientStore = ((c) => {
	let { subscribe: L, set: R, update: z } = writable({
		...defaultClientState,
		...c
	});
	return {
		subscribe: L,
		init: (c) => R(c),
		updateName: (c) => z((L) => ({
			...L,
			name: c
		})),
		resetName: () => z((c) => ({
			...c,
			name: defaultClientState.name
		})),
		updateLoggedIn: (c) => z((L) => ({
			...L,
			logged_in: c
		})),
		resetLoggedIn: () => z((c) => ({
			...c,
			logged_in: defaultClientState.logged_in
		})),
		updateRank: (c) => z((L) => ({
			...L,
			rank: c
		})),
		resetRank: () => z((c) => ({
			...c,
			rank: defaultClientState.rank
		}))
	};
})();
var defaultPageState = { csrf: "" };
const pageStore = ((c) => {
	let { subscribe: L, set: R, update: z } = writable({
		...defaultPageState,
		...c
	});
	return {
		subscribe: L,
		init: (c) => R(c),
		updateCSRF: (c) => z((L) => ({
			...L,
			csrf: c
		})),
		resetCSRF: () => z((c) => ({
			...c,
			csrf: defaultPageState.csrf
		}))
	};
})();
var defaultSocketState = { connected: !0 };
const socketStore = ((c) => {
	let { subscribe: L, set: R, update: z } = writable({
		...defaultSocketState,
		...c
	});
	return {
		subscribe: L,
		init: (c) => R(c),
		updateConnected: (c) => z((L) => ({
			...L,
			connected: c
		})),
		resetConnected: () => z((c) => ({
			...c,
			connected: defaultSocketState.connected
		}))
	};
})();
var initClientStore = () => (clientStore.init({ ...window.CLIENT }), clientStore.subscribe((c) => {
	window.CLIENT = c;
})), initPageStore = () => {
	let c = document.getElementsByName("_csrf");
	if (!c) throw Error("no csrf collection found");
	if (c.length < 1) throw Error("no csrf elements found");
	let L = c.item(0);
	if (!L) throw Error("no csrf element found");
	let R = L.value;
	if (!R) throw Error("no csrf value found");
	pageStore.init({ csrf: R });
}, initAppStore = () => (appStore.init({ version: window.VERSION }), appStore.subscribe((c) => {
	window.VERSION = c.version;
})), initSocketStore = () => {
	socketStore.init(socketClient), socketClient.on("connect", () => socketStore.updateConnected(socketClient.connected)), socketClient.on("disconnect", () => socketStore.updateConnected(socketClient.connected));
};
const initStores = () => {
	let c = initClientStore(), L = initAppStore();
	return initPageStore(), initSocketStore(), () => {
		c(), L();
	};
};
var colorInfo = "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", legacyChatNotification = (c, L) => {
	let R = document.getElementById("messagebuffer");
	if (!R) return null;
	let z = document.createElement("div");
	return z.className = "server-msg-reconnect", z.style = `border: 1px ${L}`, z.textContent = c, R.appendChild(z), z;
};
const legacyChatInfo = (c) => legacyChatNotification(c, colorInfo), injectMainStylesheet = async () => new Promise((c, L) => {
	let R = new URL("dist/index.css", window.BASE_URL), z = document.createElement("link");
	z.rel = "stylesheet", z.type = "text/css", z.href = R.toString(), z.onload = () => requestAnimationFrame(() => c()), z.onerror = () => requestAnimationFrame(() => L()), document.head.appendChild(z);
}), removeLegacyStylesheets = () => {
	for (let c of [
		"//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css",
		"/css/sticky-footer-navbar.css",
		"/css/videojs-resolution-switcher.css",
		"/css/video-js.css",
		"/css/cytube.css"
	]) {
		let L = document.querySelector(`link[href="${c}"]`);
		if (!L) return;
		L.remove();
	}
	document.getElementById("usertheme")?.remove();
};
var setChannelJS = (c) => {
	window.CHANNEL.js = c;
	let L = document.querySelector("#cs-jstext");
	if (L && (L.value = c), window.USEROPTS.ignore_channeljs) return;
	let R = document.createElement("script");
	R.id = "chanjs", R.type = "text/javascript", R.textContent = c, document.body.append(R);
}, setChannelCSS = (c) => {
	window.CHANNEL.css = c;
	let L = document.querySelector("#cs-csstext");
	if (L && (L.value = c), window.USEROPTS.ignore_channelcss) return;
	let R = document.createElement("style");
	R.id = "chancss", R.textContent = c, document.head.append(R);
}, overrideChannelJS = (c) => {
	let L = document.querySelector("#chanjs");
	if (!L) {
		setChannelJS(c);
		return;
	}
	L.textContent !== c && (L.remove(), setChannelJS(c));
}, overrideChannelCSS = (c) => {
	let L = document.querySelector("#chancss");
	if (!L) {
		setChannelCSS(c);
		return;
	}
	L.textContent !== c && (L.remove(), setChannelCSS(c));
}, overrideCallbacks = () => {
	window.Callbacks.channelCSSJS = ({ css: c, js: L }) => {
		c && overrideChannelCSS(c), L && overrideChannelJS(L);
	};
}, overrideFavicon = () => {
	let c = new URL("dist/favicon.ico", window.BASE_URL), L = document.createElement("link");
	L.href = c.toString(), L.type = "image/x-icon", L.rel = "shortcut icon", document.head.append(L);
}, overrideStyles = async () => {
	let c = legacyChatInfo("Loading styles...");
	await injectMainStylesheet(), removeLegacyStylesheets(), c && c.remove();
};
const initOverrides = async () => {
	overrideCallbacks(), overrideFavicon(), await overrideStyles();
};
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")], globalThis?.window?.trustedTypes;
var upgradeBody = () => {
	document.body.classList.add("dark"), document.body.classList.add("override-theme");
};
const upgradeLegacyElements = async () => {
	upgradeBody(), await tick();
}, init = async () => {
	let c = initStores();
	try {
		await initOverrides(), await upgradeLegacyElements();
	} catch (L) {
		throw c(), L;
	}
};
export { init };
