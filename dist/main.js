const socketClient = window.socket;
Array.isArray, Array.prototype.indexOf, Array.prototype.includes, Array.from, Object.prototype, Array.prototype;
const noop = () => {};
new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), globalThis.document?.contentType;
function safe_not_equal(e, C) {
	return e == e ? e !== C || typeof e == "object" && !!e || typeof e == "function" : C == C;
}
var subscriber_queue = [];
function writable(e, E = noop) {
	let D = null, O = /* @__PURE__ */ new Set();
	function k(C) {
		if (safe_not_equal(e, C) && (e = C, D)) {
			let C = !subscriber_queue.length;
			for (let C of O) C[1](), subscriber_queue.push(C, e);
			if (C) {
				for (let e = 0; e < subscriber_queue.length; e += 2) subscriber_queue[e][0](subscriber_queue[e + 1]);
				subscriber_queue.length = 0;
			}
		}
	}
	function A(C) {
		k(C(e));
	}
	function j(w, T = noop) {
		let j = [w, T];
		return O.add(j), O.size === 1 && (D = E(k, A) || noop), w(e), () => {
			O.delete(j), O.size === 0 && D && (D(), D = null);
		};
	}
	return {
		set: k,
		update: A,
		subscribe: j
	};
}
var defaultAppState = { version: "" };
const appStore = ((e) => {
	let { subscribe: C, set: w, update: T } = writable({
		...defaultAppState,
		...e
	});
	return {
		subscribe: C,
		init: (e) => w(e),
		updateVersion: (e) => T((C) => ({
			...C,
			version: e
		})),
		resetVersion: () => T((e) => ({
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
	let { subscribe: C, set: w, update: T } = writable({
		...defaultClientState,
		...e
	});
	return {
		subscribe: C,
		init: (e) => w(e),
		updateName: (e) => T((C) => ({
			...C,
			name: e
		})),
		resetName: () => T((e) => ({
			...e,
			name: defaultClientState.name
		})),
		updateLoggedIn: (e) => T((C) => ({
			...C,
			logged_in: e
		})),
		resetLoggedIn: () => T((e) => ({
			...e,
			logged_in: defaultClientState.logged_in
		})),
		updateRank: (e) => T((C) => ({
			...C,
			rank: e
		})),
		resetRank: () => T((e) => ({
			...e,
			rank: defaultClientState.rank
		}))
	};
})();
var defaultPageState = { csrf: "" };
const pageStore = ((e) => {
	let { subscribe: C, set: w, update: T } = writable({
		...defaultPageState,
		...e
	});
	return {
		subscribe: C,
		init: (e) => w(e),
		updateCSRF: (e) => T((C) => ({
			...C,
			csrf: e
		})),
		resetCSRF: () => T((e) => ({
			...e,
			csrf: defaultPageState.csrf
		}))
	};
})();
var defaultSocketState = { connected: !0 };
const socketStore = ((e) => {
	let { subscribe: C, set: w, update: T } = writable({
		...defaultSocketState,
		...e
	});
	return {
		subscribe: C,
		init: (e) => w(e),
		updateConnected: (e) => T((C) => ({
			...C,
			connected: e
		})),
		resetConnected: () => T((e) => ({
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
	let C = e.item(0);
	if (!C) throw Error("no csrf element found");
	let w = C.value;
	if (!w) throw Error("no csrf value found");
	pageStore.init({ csrf: w });
}, initAppStore = () => (appStore.init({ version: window.VERSION }), appStore.subscribe((e) => {
	window.VERSION = e.version;
})), initSocketStore = () => {
	socketStore.init(socketClient), socketClient.on("connect", () => socketStore.updateConnected(socketClient.connected)), socketClient.on("disconnect", () => socketStore.updateConnected(socketClient.connected));
};
const initStores = () => {
	let e = initClientStore(), C = initAppStore();
	return initPageStore(), initSocketStore(), () => {
		e(), C();
	};
};
var colorInfo = "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", legacyChatNotification = (e, C) => {
	let w = document.getElementById("messagebuffer");
	if (!w) return null;
	let T = document.createElement("div");
	return T.className = "server-msg-reconnect", T.style = `border: 1px ${C}`, T.textContent = e, w.appendChild(T), T;
};
const legacyChatInfo = (e) => legacyChatNotification(e, colorInfo), injectMainStylesheet = async () => new Promise((e, C) => {
	let w = new URL("dist/index.css", window.BASE_URL), T = document.createElement("link");
	T.rel = "stylesheet", T.type = "text/css", T.href = w.toString(), T.onload = () => requestAnimationFrame(() => e()), T.onerror = () => requestAnimationFrame(() => C()), document.head.appendChild(T);
}), removeLegacyStylesheets = () => {
	for (let e of [
		"//code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css",
		"/css/sticky-footer-navbar.css",
		"/css/videojs-resolution-switcher.css",
		"/css/video-js.css",
		"/css/cytube.css"
	]) {
		let C = document.querySelector(`link[href="${e}"]`);
		if (!C) return;
		C.remove();
	}
	document.getElementById("usertheme")?.remove();
};
var setChannelJS = (e) => {
	window.CHANNEL.js = e;
	let C = document.querySelector("#cs-jstext");
	if (C && (C.value = e), window.USEROPTS.ignore_channeljs) return;
	let w = document.createElement("script");
	w.id = "chanjs", w.type = "text/javascript", w.textContent = e, document.body.append(w);
}, setChannelCSS = (e) => {
	window.CHANNEL.css = e;
	let C = document.querySelector("#cs-csstext");
	if (C && (C.value = e), window.USEROPTS.ignore_channelcss) return;
	let w = document.createElement("style");
	w.id = "chancss", w.textContent = e, document.head.append(w);
}, overrideChannelJS = (e) => {
	let C = document.querySelector("#chanjs");
	if (!C) {
		setChannelJS(e);
		return;
	}
	C.textContent !== e && (C.remove(), setChannelJS(e));
}, overrideChannelCSS = (e) => {
	let C = document.querySelector("#chancss");
	if (!C) {
		setChannelCSS(e);
		return;
	}
	C.textContent !== e && (C.remove(), setChannelCSS(e));
}, overrideCallbacks = () => {
	window.Callbacks.channelCSSJS = ({ css: e, js: C }) => {
		e && overrideChannelCSS(e), C && overrideChannelJS(C);
	};
}, overrideFavicon = () => {
	let e = new URL("dist/favicon.ico", window.BASE_URL), C = document.createElement("link");
	C.href = e.toString(), C.type = "image/x-icon", C.rel = "shortcut icon", document.head.append(C);
}, overrideStyles = async () => {
	let e = legacyChatInfo("Loading styles...");
	await injectMainStylesheet(), removeLegacyStylesheets(), e && e.remove();
};
const initOverrides = async () => {
	overrideCallbacks(), overrideFavicon(), await overrideStyles();
}, init = async () => {
	let e = initStores();
	try {
		await initOverrides();
	} catch (C) {
		throw e(), C;
	}
};
export { init };
