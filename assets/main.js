//#region src/appVersionForm.ts
var e = () => {
	let e = "main", t = localStorage.getItem("appVersion"), n = typeof t == "string" && t !== "" ? t : e, r = document.getElementById("us-scriptcontrol");
	if (!r) {
		console.warn("failed to construct app version form: no container found to attach to");
		return;
	}
	let i = document.createElement("div"), a = document.createElement("label");
	a.setAttribute("for", "us-app-version-input"), a.className = "control-label", a.textContent = "Версия скриптов", a.title = "Используемая версия скриптов";
	let o = document.createElement("input");
	o.className = "form-control", o.id = "us-app-version-input", o.type = "text", o.value = n, o.placeholder = e;
	let s = document.createElement("button");
	s.className = "btn btn-sm btn-info", s.textContent = "Применить & Обновить", s.addEventListener("click", () => {
		localStorage.setItem("appVersion", o.value.trim()), location.reload();
	}), i.appendChild(a), i.appendChild(o), i.appendChild(s), r.appendChild(i);
}, t = (e) => {
	window.CHANNEL.css = e;
	let t = document.querySelector("#cs-csstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channelcss) return;
	let n = document.createElement("style");
	n.id = "chancss", n.textContent = e, document.head.append(n);
}, n = (e) => {
	let n = document.querySelector("#chancss");
	if (!n) {
		t(e);
		return;
	}
	n.textContent !== e && (n.remove(), t(e));
}, r = () => {
	let e = new URL("assets/index.css", window.BASE_URL), t = document.createElement("link");
	t.rel = "stylesheet", t.type = "text/css", t.href = e.toString(), document.head.appendChild(t);
}, i = (e) => {
	window.CHANNEL.js = e;
	let t = document.querySelector("#cs-jstext");
	if (t && (t.value = e), window.USEROPTS.ignore_channeljs) return;
	let n = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>").replace(/\t/g, "    ").replace(/ /g, "&nbsp;");
	"" + encodeURIComponent(n);
	let r = document.createElement("script");
	r.id = "chanjs", r.type = "text/javascript", r.textContent = e, document.body.append(r);
}, a = (e) => {
	let t = document.querySelector("#chanjs");
	if (!t) {
		i(e);
		return;
	}
	t.textContent !== e && (t.remove(), i(e));
}, o = () => {
	window.Callbacks.channelCSSJS = function({ css: e, js: t }) {
		e && n(e), t && a(t);
	};
}, s = () => {
	let e = new URL("resources/favicon.ico", window.BASE_URL), t = document.createElement("link");
	t.href = e.toString(), t.type = "image/x-icon", t.rel = "shortcut icon", document.head.append(t);
}, c = async () => {
	o(), s(), r(), e();
};
//#endregion
export { c as init };
