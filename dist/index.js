//#region src/index.ts
var e = 5e3, t = "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;", n = "solid pink; background-color: rgba(100, 18, 18, 0.1); color: pink;", r = (e, t) => {
	let n = document.createElement("div");
	return n.className = "server-msg-reconnect", n.style = `border: 1px ${t}`, n.textContent = e, n;
};
(() => {
	let i = document.getElementById("messagebuffer"), a = r("Loading scripts...", t);
	i && i.appendChild(a), import(new URL("dist/main.js", window.BASE_URL).toString()).then((e) => e.init().then(() => a.remove()).catch((e) => {
		throw Error(`failed to initialize entry module: ${e}`);
	})).catch((t) => {
		let a = `failed to load entry module: ${t}`;
		console.error(a);
		let o = r(a, n);
		i && i.appendChild(o), setTimeout(() => o.remove(), e);
	});
})();
//#endregion
