const setChannelJS = (js: string) => {
  window.CHANNEL.js = js;

  // Update JS in built-in editor field
  const CSJSText = document.querySelector<HTMLTextAreaElement>("#cs-jstext");
  if (CSJSText) {
    CSJSText.value = js;
  }

  // Do not inject JS if user ignores channel JS
  const ignoreChannelJS = Boolean(window.USEROPTS.ignore_channeljs);
  if (ignoreChannelJS) {
    return;
  }

  // Inject into page
  const newChanJS = document.createElement("script");
  newChanJS.id = "chanjs";
  newChanJS.type = "text/javascript";
  newChanJS.textContent = js;

  document.body.append(newChanJS);
};

const setChannelCSS = (css: string) => {
  window.CHANNEL.css = css;

  // Update CSS in built-in editor field
  const CSCSSText = document.querySelector<HTMLTextAreaElement>("#cs-csstext");
  if (CSCSSText) {
    CSCSSText.value = css;
  }

  // Do not inject CSS if user ignores channel CSS
  const ignoreChannelCSS = Boolean(window.USEROPTS.ignore_channelcss);
  if (ignoreChannelCSS) {
    return;
  }

  // Inject into page
  const newChanCSS = document.createElement("style");
  newChanCSS.id = "chancss";
  newChanCSS.textContent = css;

  document.head.append(newChanCSS);
};

const overrideChannelJS = (newJS: string) => {
  // If no channel JS element found in DOM try to create it
  const chanJS = document.querySelector<HTMLScriptElement>("#chanjs");
  if (!chanJS) {
    setChannelJS(newJS);

    return;
  }

  // Only apply if new JS has changes
  const currentJS = chanJS.textContent;
  const isUnique = currentJS !== newJS;
  if (!isUnique) {
    return;
  }

  // Remove old channel CSS element from DOM
  chanJS.remove();
  setChannelJS(newJS);
};

const overrideChannelCSS = (newCSS: string) => {
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

const overrideCallbacks = () => {
  window.Callbacks.channelCSSJS = ({ css, js }) => {
    if (css) {
      overrideChannelCSS(css);
    }

    if (js) {
      overrideChannelJS(js);
    }
  };
};

const overrideFavicon = () => {
  const url = new URL("dist/favicon.ico", window.BASE_URL);
  const faviconElement = document.createElement("link");

  faviconElement.href = url.toString();
  faviconElement.type = "image/x-icon";
  faviconElement.rel = "shortcut icon";

  document.head.append(faviconElement);
};

export const initOverrides = () => {
  overrideCallbacks();
  overrideFavicon();
};
