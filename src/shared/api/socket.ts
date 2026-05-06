import type { Socket } from "socket.io-client";

export type SocketClient = typeof Socket & {
  emit: <E, D>(event: E, data?: D) => void;
  on: <E, D>(event: E, response?: (data: D) => void) => void;
  once: <E, D>(event: E, response?: (data: D) => void) => void;
};

type SocketConnectOutputEvent = "connect";
type SocketConnectOutputData = null;

type SocketDisconnectOutputEvent = "disconnect";
type SocketDisconnectOutputData =
  | "transport error"
  | "transport close"
  | "ping timeout"
  | "io server disconnect"
  | SocketDisconnectOutputDataSuccess;
type SocketDisconnectOutputDataSuccess = "io client disconnect";

export const submitSocketConnect = async () =>
  new Promise<void>((resolve) => {
    socketClient.once<SocketConnectOutputEvent, SocketConnectOutputData>(
      "connect",
      () => {
        resolve();
      },
    );

    socketClient.connect();
  });

export const submitSocketDisconnect = async () =>
  new Promise<void>((resolve, reject) => {
    socketClient.once<SocketDisconnectOutputEvent, SocketDisconnectOutputData>(
      "disconnect",
      (reason) => {
        const success: SocketDisconnectOutputDataSuccess =
          "io client disconnect";

        if (reason === success) {
          resolve();

          return;
        }

        reject(reason);
      },
    );

    socketClient.disconnect();
  });

export const socketClient: SocketClient = window.socket;
