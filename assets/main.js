//#region src/channelCSS.ts
var e = (e) => {
	window.CHANNEL.css = e;
	let t = document.querySelector("#cs-csstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channelcss) return;
	let n = document.createElement("style");
	n.id = "chancss", n.textContent = e, document.head.append(n);
}, t = (t) => {
	let n = document.querySelector("#chancss");
	if (!n) {
		e(t);
		return;
	}
	n.textContent !== t && (n.remove(), e(t));
}, n = () => {
	let e = new URL("assets/index.css", window.BASE_URL), t = document.createElement("link");
	t.rel = "stylesheet", t.type = "text/css", t.href = e.toString(), document.head.appendChild(t);
}, r = (e) => {
	window.CHANNEL.js = e;
	let t = document.querySelector("#cs-jstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channeljs) return;
	let n = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>").replace(/\t/g, "    ").replace(/ /g, "&nbsp;");
	"" + encodeURIComponent(n);
	let r = document.createElement("script");
	r.id = "chanjs", r.type = "text/javascript", r.textContent = e, document.body.append(r);
}, i = (e) => {
	let t = document.querySelector("#chanjs");
	if (!t) {
		r(e);
		return;
	}
	t.textContent !== e && (t.remove(), r(e));
}, a = () => {
	window.Callbacks.channelCSSJS = function({ css: e, js: n }) {
		e && t(e), n && i(n);
	};
}, o = () => {
	let e = new URL("resources/favicon.ico", window.BASE_URL), t = document.createElement("link");
	t.href = e.toString(), t.type = "image/x-icon", t.rel = "shortcut icon", document.head.append(t);
}, s = async () => {
	a(), o(), n();
};
//#endregion
export { s as init };
