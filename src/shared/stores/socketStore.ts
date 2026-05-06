import { writable } from "svelte/store";

export type SocketState = {
  connected: boolean;
};

const defaultSocketState: SocketState = {
  connected: true,
};

const createSocketStore = (socketStateOverrides?: Partial<SocketState>) => {
  const initialSocketState = {
    ...defaultSocketState,
    ...socketStateOverrides,
  };

  const { subscribe, set, update } = writable<SocketState>(initialSocketState);

  return {
    subscribe,
    init: (state: SocketState) => set(state),
    updateConnected: (connected: boolean) =>
      update((state) => ({ ...state, connected })),
    resetConnected: () =>
      update((state) => ({
        ...state,
        connected: defaultSocketState.connected,
      })),
  };
};

export const socketStore = createSocketStore();
