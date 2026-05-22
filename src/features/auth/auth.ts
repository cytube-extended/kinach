import { get, writable } from "svelte/store";
import { httpGet, httpPostUrlEncodedForm } from "$api/http";
import { socketClient, submitSocketConnect, submitSocketDisconnect } from "$api/socket";
import { clientStore } from "$stores/clientStore";
import { pageStore } from "$stores/pageStore";

export type AuthState = {
  status: boolean;
  username: string;
  password?: string;
};

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
type LoginOutputSocketData = LoginSuccessOutputSocketData | LoginErrorOutputSocketData;

type RankOutputSocketEvent = "rank";
type RankOutputSocketData = number;

const defaultAuthState: AuthState = {
  status: false,
  username: "",
};

const createAuthStore = (authStateOverrides?: Partial<AuthState>) => {
  const initialAuthState = {
    ...defaultAuthState,
    ...authStateOverrides,
  };

  const { subscribe, set, update } = writable<AuthState>(initialAuthState);

  return {
    set,
    subscribe,

    init: (state: AuthState) => set(state),
    resetStatus: () => update(state => ({ ...state, status: defaultAuthState.status })),
    resetUsername: () => update(state => ({ ...state, username: defaultAuthState.username })),
    updateStatus: (status: boolean) => update(state => ({ ...state, status })),
    updateUsername: (username: string) => update(state => ({ ...state, username })),
  };
};

const submitSocketLogin = async (input: LoginInputSocketData): Promise<string> =>
  new Promise((resolve, reject) => {
    socketClient.once<LoginOutputSocketEvent, LoginOutputSocketData>("login", output => {
      if (output.success) {
        resolve(output.name);

        return;
      }

      reject(output.error);
    });

    socketClient.emit<LoginInputSocketEvent, LoginInputSocketData>("login", input);
  });

const listenSocketRank = async (): Promise<number> =>
  new Promise(resolve => {
    socketClient.once<RankOutputSocketEvent, RankOutputSocketData>("rank", resolve);
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

export const authStore = createAuthStore();
