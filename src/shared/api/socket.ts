import type { Socket } from "socket.io-client";

export type SocketClient = typeof Socket & {
  emit: <E extends string, D>(event: E, data?: D) => SocketIOClient.Emitter;
  on: <E extends string, D>(event: E, response?: (data: D) => void) => SocketIOClient.Emitter;
  off: <E extends string, F extends Function>(event: E, fn?: F) => SocketIOClient.Emitter;
  once: <E extends string, D>(event: E, response?: (data: D) => void) => SocketIOClient.Emitter;
};

type SocketConnectOutputEvent = "connect";
type SocketConnectOutputData = void;

type SocketDisconnectOutputEvent = "disconnect";
type SocketDisconnectOutputData =
  | "transport error"
  | "transport close"
  | "ping timeout"
  | "io server disconnect"
  | SocketDisconnectOutputDataSuccess;
type SocketDisconnectOutputDataSuccess = "io client disconnect";

export const submitSocketConnect = async () =>
  new Promise<void>(resolve => {
    socketClient.once<SocketConnectOutputEvent, SocketConnectOutputData>("connect", resolve);

    socketClient.connect();
  });

export const submitSocketDisconnect = async () =>
  new Promise<void>((resolve, reject) => {
    socketClient.once<SocketDisconnectOutputEvent, SocketDisconnectOutputData>(
      "disconnect",
      reason => {
        const success: SocketDisconnectOutputDataSuccess = "io client disconnect";

        if (reason === success) {
          resolve();

          return;
        }

        reject(reason);
      }
    );

    socketClient.disconnect();
  });

export const socketClient: SocketClient = window.socket;
