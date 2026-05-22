const colorInfo = "solid cyan; background-color: rgba(18, 18, 100, 0.1); color: cyan;";
const colorError = "solid pink; background-color: rgba(100, 18, 18, 0.1); color: pink;";

const legacyChatNotification = (message: string, colorStyle: string): HTMLElement | null => {
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

export const legacyChatInfo = (message: string) => legacyChatNotification(message, colorInfo);
export const legacyChatError = (message: string) => legacyChatNotification(message, colorError);
