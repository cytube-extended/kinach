export const setChannelJS = (js: string) => {
  // Update JS in channel object
  window.CHANNEL.js = js;

  // Update JS in channel editor
  const CSJSText = document.querySelector<HTMLTextAreaElement>("#cs-jstext");
  if (CSJSText) {
    CSJSText.value = js;
  }

  // Do not apply if user ignores channel JS
  const ignoreChannelJS = Boolean(window.USEROPTS.ignore_channeljs);
  if (ignoreChannelJS) {
    return;
  }

  // Apply JS to page (create channel JS element in DOM)
  const newChanJS = document.createElement("script");
  newChanJS.id = "chanjs";
  newChanJS.type = "text/javascript";
  newChanJS.textContent = js;
  document.body.append(newChanJS);
};

export const overrideChannelJS = (newJS: string) => {
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
