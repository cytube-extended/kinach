//#region src/hello.ts
var e = async () => new Promise((e) => {
	console.log("hello world"), e();
}), t = async () => {
	await e();
};
//#endregion
export { t as init };
