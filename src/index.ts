const notificationTimeout = 5000;
const colorInfo =
  "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;";
const colorError =
  "solid pink; background-color: rgba(100, 18, 18, 0.1); color: pink;";

const legacyChatNotification = (
  message: string,
  colorStyle: string,
): HTMLElement | null => {
  const msgBuf = document.getElementById("messagebuffer");
  if (!msgBuf) {
    return null;
  }

  const chatMessage = document.createElement("div");
  chatMessage.className = "server-msg-reconnect";
  chatMessage.style = `border: 1px ${colorStyle}`;
  chatMessage.textContent = message;
  msgBuf.appendChild(chatMessage);

  return chatMessage;
};

const loadESM = () => {
  const scriptsNotification = legacyChatNotification(
    "Loading scripts...",
    colorInfo,
  );
  const url = new URL("dist/main.js", window.BASE_URL);
  const modPromise: Promise<typeof import("./main")> = import(url.toString());

  modPromise
    .then((mod) =>
      mod
        .init()
        .then(() => {
          if (scriptsNotification) {
            scriptsNotification.remove();
          }
        })
        .catch((err) => {
          const modInitErrMsg = `failed to initialize entry module: ${err}`;

          console.error(modInitErrMsg);

          const modInitNotification = legacyChatNotification(
            modInitErrMsg,
            colorError,
          );

          if (modInitNotification) {
            setTimeout(modInitNotification.remove, notificationTimeout);
          }
        }),
    )
    .catch((err) => {
      const modLoadErrMsg = `failed to load entry module: ${err}`;

      console.error(modLoadErrMsg);

      const modLoadNotification = legacyChatNotification(
        modLoadErrMsg,
        colorError,
      );

      if (modLoadNotification) {
        setTimeout(modLoadNotification.remove, notificationTimeout);
      }
    });
};

loadESM();
