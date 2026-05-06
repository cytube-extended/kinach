import { writable } from "svelte/store";

export type ClientState = {
  guest?: boolean;
  leader: boolean;
  logged_in: boolean;
  name: string;
  rank: number;
  profile: {
    image: string;
    text: string;
  };
};

const defaultClientState: ClientState = {
  leader: false,
  logged_in: false,
  name: "",
  rank: -1,
  profile: {
    image: "",
    text: "",
  },
};

const createClientStore = (clientStateOverrides?: Partial<ClientState>) => {
  const initialClientState = {
    ...defaultClientState,
    ...clientStateOverrides,
  };

  const { subscribe, set, update } = writable<ClientState>(initialClientState);

  return {
    subscribe,
    init: (state: ClientState) => set(state),
    updateName: (name: string) => update((state) => ({ ...state, name })),
    resetName: () =>
      update((state) => ({ ...state, name: defaultClientState.name })),
    updateLoggedIn: (logged_in: boolean) =>
      update((state) => ({ ...state, logged_in })),
    resetLoggedIn: () =>
      update((state) => ({
        ...state,
        logged_in: defaultClientState.logged_in,
      })),
    updateRank: (rank: number) => update((state) => ({ ...state, rank })),
    resetRank: () =>
      update((state) => ({ ...state, rank: defaultClientState.rank })),
  };
};

export const clientStore = createClientStore();
