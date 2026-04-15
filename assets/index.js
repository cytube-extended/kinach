import(new URL("main.js", window.BASE_URL).toString()).then((e) => e.init().catch((e) => console.error("failed to initialize entry module: " + e))).catch((e) => console.error("failed to load entry module: " + e));
//#endregion
