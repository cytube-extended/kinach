var notificationTimeout = 5e3, colorInfo = "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", colorError = "solid pink; background-color: rgba(100, 18, 18, 0.1); color: pink;", legacyChatNotification = (e, t) => {
	let n = document.getElementById("messagebuffer");
	if (!n) return null;
	let r = document.createElement("div");
	return r.className = "server-msg-reconnect", r.style = `border: 1px ${t}`, r.textContent = e, n.appendChild(r), r;
};
(() => {
	let i = legacyChatNotification("Loading scripts...", colorInfo);
	import(new URL("dist/main.js", window.BASE_URL).toString()).then((e) => e.init().then(() => {
		i && i.remove();
	}).catch((e) => {
		throw Error(`failed to initialize entry module: ${e}`);
	})).catch((t) => {
		let i = `failed to load entry module: ${t}`;
		console.error(i);
		let a = legacyChatNotification(i, colorError);
		a && setTimeout(a.remove, notificationTimeout);
	});
})();
