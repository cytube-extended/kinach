import { writable } from "svelte/store";
import { socketClient } from "$api/socket";

type AddUserOutputSocketEvent = "addUser";
export type AddUserOutputSocketData = {
  name: string;
  rank: number;
  profile: {
    image: string;
    text: string;
  };
  meta: {
    afk: boolean;
    muted: boolean;
  };
};

type UserLeaveOutputSocketEvent = "userLeave";
type UserLeaveOutputSocketData = { name: string };

export type UserlistState = {
  userlist: AddUserOutputSocketData[];
};

export const ranks = {
  ADMIN: 3,
  ANON: -1,
  GUEST: 0,
  MODERATOR: 2,
  SITERADMIN: 255,
  USER: 1,
} as const;
export type Rank = (typeof ranks)[keyof typeof ranks];

const defaultUserlistState: UserlistState = {
  userlist: [],
};

const createUserlistStore = (userlistStateOverrides?: Partial<UserlistState>) => {
  const initialUserlistState = {
    ...defaultUserlistState,
    ...userlistStateOverrides,
  };

  const { subscribe, set, update } = writable<UserlistState>(initialUserlistState);

  return {
    set,
    subscribe,

    addUser: (user: AddUserOutputSocketData) =>
      update(state => ({
        ...state,
        userlist: [...state.userlist, user],
      })),
    init: (state: UserlistState) => set(state),
    removeUser: (username: string) =>
      update(state => ({
        ...state,
        userlist: state.userlist.filter(user => user.name !== username),
      })),
  };
};

export const subscribeSocketAddUser = (subscribtion: (data: AddUserOutputSocketData) => void) =>
  socketClient.on<AddUserOutputSocketEvent, AddUserOutputSocketData>("addUser", subscribtion);

export const subscribeSocketUserLeave = (subscribtion: (data: UserLeaveOutputSocketData) => void) =>
  socketClient.on<UserLeaveOutputSocketEvent, UserLeaveOutputSocketData>("userLeave", subscribtion);

export const parseLegacyUserlist = () =>
  Array.from(document.body.querySelectorAll<HTMLElement>("#userlist .userlist_item"))
    .map(node => $(node))
    .map(el => ({
      meta: {
        afk: el.data("afk") || false,
        muted: (el.data("meta") && el.data("meta").muted) || false,
      },
      name: el.data("name") || "",
      profile: el.data("profile") || { image: "", text: "" },
      rank: el.data("rank") || ranks.ANON,
    }));

export const userlistStore = createUserlistStore();
