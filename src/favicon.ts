export const overrideFavicon = () => {
  const url = new URL("resources/favicon.ico", window.BASE_URL);
  const faviconElement = document.createElement("link");

  faviconElement.href = url.toString();
  faviconElement.type = "image/x-icon";
  faviconElement.rel = "shortcut icon";

  document.head.append(faviconElement);
};
