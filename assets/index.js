import(new URL("main.js", "https://cdn.jsdelivr.net/gh/cytube-extended/kinach@dev/assets/").toString()).then((e) => e.init().catch((e) => console.error("failed to initialize entry module: " + e))).catch((e) => console.error("failed to load entry module: " + e));
//#endregion
