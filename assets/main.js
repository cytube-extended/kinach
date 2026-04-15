//#region src/hello.ts
var e = async () => new Promise((e) => {
	console.log("hello world"), alert("build success"), e();
}), t = async () => {
	await e();
};
//#endregion
export { t as init };
