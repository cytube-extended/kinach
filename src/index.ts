const loadESM = () => {
  const url = new URL("dist/main.js", window.BASE_URL);
  const modPromise: Promise<typeof import("./main")> = import(url.toString());

  modPromise
    .then((mod) =>
      mod
        .init()
        .catch((err) =>
          console.error("failed to initialize entry module: " + err),
        ),
    )
    .catch((err) => console.error("failed to load entry module: " + err));
};

loadESM();
