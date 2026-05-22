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
  profile: {
    image: "",
    text: "",
  },
  rank: -1,
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
    resetLoggedIn: () =>
      update(state => ({
        ...state,
        logged_in: defaultClientState.logged_in,
      })),
    resetName: () => update(state => ({ ...state, name: defaultClientState.name })),
    resetRank: () => update(state => ({ ...state, rank: defaultClientState.rank })),
    updateLoggedIn: (logged_in: boolean) => update(state => ({ ...state, logged_in })),
    updateName: (name: string) => update(state => ({ ...state, name })),
    updateRank: (rank: number) => update(state => ({ ...state, rank })),
  };
};

export const clientStore = createClientStore();
