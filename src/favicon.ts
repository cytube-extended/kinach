export const overrideFavicon = () => {
  const url = new URL("resources/favicon.ico", window.BASE_URL);
  const faviconChannel = document.createElement("link");

  faviconChannel.href = url.toString();
  faviconChannel.type = "image/x-icon";

  document.head.append(faviconChannel);
};
