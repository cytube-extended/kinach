import { get } from "svelte/store";
import { clientStore } from "$stores/clientStore";
import { pageStore } from "$stores/pageStore";
import { httpGet, httpPostUrlEncodedForm } from "$api/http";
import {
  socketClient,
  submitSocketConnect,
  submitSocketDisconnect,
} from "$api/socket";

type LoginHTTPData = {
  _csrf: string;
  name: string;
  password: string;
  remember?: "on";
};

type LogoutHTTPData = {
  _csrf: string;
};

type LoginInputSocketEvent = "login";
type LoginInputSocketData = {
  name: string;
  pw?: string;
};

type LoginOutputSocketEvent = "login";
type LoginSuccessOutputSocketData = {
  success: true;
  name: string;
};
type LoginErrorOutputSocketData = {
  success: false;
  error: string;
};
type LoginOutputSocketData =
  | LoginSuccessOutputSocketData
  | LoginErrorOutputSocketData;

type RankOutputSocketEvent = "rank";
type RankOutputSocketData = number;

const submitSocketLogin = async (data: LoginInputSocketData): Promise<string> =>
  new Promise((resolve, reject) => {
    socketClient.once<LoginOutputSocketEvent, LoginOutputSocketData>(
      "login",
      (data) => {
        if (data.success) {
          resolve(data.name);

          return;
        }

        reject(data.error);
      },
    );

    socketClient.emit<LoginInputSocketEvent, LoginInputSocketData>(
      "login",
      data,
    );
  });

const listenSocketRank = async (): Promise<number> =>
  new Promise((resolve) => {
    socketClient.once<RankOutputSocketEvent, RankOutputSocketData>(
      "rank",
      resolve,
    );
  });

const submitHTTPLogin = async (data: LoginHTTPData) => {
  const loginUrl = new URL("/login", window.location.origin);
  const loginBody = new URLSearchParams(data);

  await httpPostUrlEncodedForm(loginUrl, loginBody);

  const pageUrl = new URL(window.location.href);
  const pageResponse = await httpGet(pageUrl);
  const pageText = await pageResponse.text();
  const pageParser = new DOMParser();
  const pageDOM = pageParser.parseFromString(pageText, "text/html");
  const csrfEl = pageDOM.querySelector<HTMLInputElement>('input[name="_csrf"]');

  if (!csrfEl) {
    console.warn("login response missing csrf value");
    return;
  }

  const csrf = csrfEl.value;
  pageStore.updateCSRF(csrf);
};

const submitHTTPLogout = async (data: LogoutHTTPData) => {
  const url = new URL("/logout", window.location.origin);
  const body = new URLSearchParams(data);

  await httpPostUrlEncodedForm(url, body);
};

export const login = async (username: string, password?: string) => {
  if (socketClient.disconnected) {
    await submitSocketConnect();
  }

  const loginPromise = submitSocketLogin({ name: username, pw: password });
  const rankPromise = listenSocketRank();

  const loggedUsername = await loginPromise;
  const rank = await rankPromise;

  clientStore.updateName(loggedUsername);
  clientStore.updateLoggedIn(true);
  clientStore.updateRank(rank);

  if (!password) {
    return;
  }

  const { csrf } = get(pageStore);
  submitHTTPLogin({ _csrf: csrf, name: username, password, remember: "on" });
};

export const logout = async () => {
  if (socketClient.connected) {
    await submitSocketDisconnect();
  }

  const { csrf } = get(pageStore);
  await submitHTTPLogout({ _csrf: csrf });

  clientStore.resetName();
  clientStore.resetLoggedIn();
  clientStore.resetRank();

  if (socketClient.disconnected) {
    await submitSocketConnect();
  }
};
