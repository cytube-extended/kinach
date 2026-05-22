import type * as main from "./main";

const notificationTimeout = 5000;
const colorInfo = "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;";
const colorError = "solid pink; background-color: rgba(100, 18, 18, 0.1); color: pink;";

const legacyChatNotification = (message: string, colorStyle: string) => {
  const chatMessage = document.createElement("div");
  chatMessage.className = "server-msg-reconnect";
  chatMessage.style = `border: 1px ${colorStyle}`;
  chatMessage.textContent = message;

  return chatMessage;
};

const loadESM = () => {
  const msgBuf = document.getElementById("messagebuffer");

  const scriptsNotification = legacyChatNotification("Loading scripts...", colorInfo);

  if (msgBuf) {
    msgBuf.appendChild(scriptsNotification);
  }

  const url = new URL("dist/main.js", window.BASE_URL);
  const modPromise: Promise<typeof main> = import(url.toString());

  modPromise
    .then(mod =>
      mod
        .init()
        .then(() => scriptsNotification.remove())
        .catch(error => {
          throw new Error(`failed to initialize entry module: ${error}`);
        })
    )
    .catch(error => {
      const errMsg = `failed to load entry module: ${error}`;

      console.error(errMsg);

      const errNotification = legacyChatNotification(errMsg, colorError);
      if (msgBuf) {
        msgBuf.appendChild(errNotification);
      }

      setTimeout(() => errNotification.remove(), notificationTimeout);
    });
};

loadESM();
