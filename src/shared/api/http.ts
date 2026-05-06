export const httpGet = async (url: URL) => fetch(url);

export const httpPostUrlEncodedForm = async (url: URL, body: URLSearchParams) =>
  fetch(url, {
    method: "POST",
    redirect: "manual",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
