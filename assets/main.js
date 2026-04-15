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
}, n = (e) => {
	window.CHANNEL.js = e;
	let t = document.querySelector("#cs-jstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channeljs) return;
	let n = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>").replace(/\t/g, "    ").replace(/ /g, "&nbsp;");
	"" + encodeURIComponent(n);
	let r = document.createElement("script");
	r.id = "chanjs", r.type = "text/javascript", r.textContent = e, document.body.append(r);
}, r = (e) => {
	let t = document.querySelector("#chanjs");
	if (!t) {
		n(e);
		return;
	}
	t.textContent !== e && (t.remove(), n(e));
}, i = () => {
	window.Callbacks.channelCSSJS = function({ css: e, js: n }) {
		e && t(e), n && r(n);
	};
}, a = async () => {
	i();
};
//#endregion
export { a as init };
