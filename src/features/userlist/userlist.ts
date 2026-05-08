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

const defaultUserlistState: UserlistState = {
  userlist: [],
};

const createUserlistStore = (
  userlistStateOverrides?: Partial<UserlistState>,
) => {
  const initialUserlistState = {
    ...defaultUserlistState,
    ...userlistStateOverrides,
  };

  const { subscribe, set, update } =
    writable<UserlistState>(initialUserlistState);

  return {
    subscribe,
    set,
    init: (state: UserlistState) => set(state),
    addUser: (user: AddUserOutputSocketData) =>
      update((state) => ({
        ...state,
        userlist: [...state.userlist, user],
      })),
    removeUser: (username: string) =>
      update((state) => ({
        ...state,
        userlist: [...state.userlist.filter((user) => user.name !== username)],
      })),
  };
};

export const subscribeSocketAddUser = (
  subscribtion: (data: AddUserOutputSocketData) => void,
) =>
  socketClient.on<AddUserOutputSocketEvent, AddUserOutputSocketData>(
    "addUser",
    subscribtion,
  );

export const subscribeSocketUserLeave = (
  subscribtion: (data: UserLeaveOutputSocketData) => void,
) =>
  socketClient.on<UserLeaveOutputSocketEvent, UserLeaveOutputSocketData>(
    "userLeave",
    subscribtion,
  );

export const parseLegacyUserlist = () =>
  Array.from(
    document.body.querySelectorAll<HTMLElement>("#userlist .userlist_item"),
  )
    .map((node) => $(node))
    .map((el) => ({
      name: el.data("name") || "",
      rank: el.data("rank") || -1,
      profile: el.data("profile") || { image: "", text: "" },
      meta: {
        afk: el.data("afk") || false,
        muted: (el.data("meta") && el.data("meta").muted) || false,
      },
    }));

export const userlistStore = createUserlistStore();
