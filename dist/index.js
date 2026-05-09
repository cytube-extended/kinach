//#region src/index.ts
var e = 5e3, t = "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", n = "solid pink; background-color: rgba(100, 18, 18, 0.1); color: pink;", r = (e, t) => {
	let n = document.getElementById("messagebuffer");
	if (!n) return null;
	let r = document.createElement("div");
	return r.className = "server-msg-reconnect", r.style = `border: 1px ${t}`, r.textContent = e, n.appendChild(r), r;
};
(() => {
	let i = r("Loading scripts...", t);
	import(new URL("dist/main.js", window.BASE_URL).toString()).then((e) => e.init().then(() => {
		i && i.remove();
	}).catch((e) => {
		throw Error(`failed to initialize entry module: ${e}`);
	})).catch((t) => {
		let i = `failed to load entry module: ${t}`;
		console.error(i);
		let a = r(i, n);
		a && setTimeout(a.remove, e);
	});
})();
//#endregion
