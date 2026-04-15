export const setChannelCSS = (css: string) => {
  // Update CSS in channel object
  window.CHANNEL.css = css;

  // Update CSS in channel editor
  const CSCSSText = document.querySelector<HTMLTextAreaElement>("#cs-csstext");
  if (CSCSSText) {
    CSCSSText.value = css;
  }

  // Do not apply if user ignores channel CSS
  const ignoreChannelCSS = Boolean(window.USEROPTS.ignore_channelcss);
  if (ignoreChannelCSS) {
    return;
  }

  // Apply CSS to page (create channel CSS element in DOM)
  const newChanCSS = document.createElement("style");
  newChanCSS.id = "chancss";
  newChanCSS.textContent = css;
  document.head.append(newChanCSS);
};

export const overrideChannelCSS = (newCSS: string) => {
  // If no channel CSS element found in DOM try to create it
  const chanCSS = document.querySelector<HTMLStyleElement>("#chancss");
  if (!chanCSS) {
    setChannelCSS(newCSS);

    return;
  }

  // Only apply if new CSS has changes
  const currentCSS = chanCSS.textContent;
  const isUnique = currentCSS !== newCSS;
  if (!isUnique) {
    return;
  }

  // Remove old channel CSS element from DOM
  chanCSS.remove();
  setChannelCSS(newCSS);
};

export const injectMainStylesheet = () => {
  const url = new URL("assets/index.css", window.BASE_URL);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url.toString();

  document.head.appendChild(link);
};
