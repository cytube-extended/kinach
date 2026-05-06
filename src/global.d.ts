import type { SocketClient } from "$api/socket";
import type { ClientState } from "$stores/clientStore";

export {};

declare global {
  interface Window {
    APP_VERSION: string;
    BASE_URL: string;
    CHANNEL: {
      css?: string;
      js?: string;
    };
    USEROPTS: {
      ignore_channelcss?: boolean;
      ignore_channeljs?: boolean;
    };
    CLIENT: ClientState;
    socket: SocketClient;
    Callbacks: {
      channelCSSJS: (data: { css?: string; js?: string }) => void;
    };
  }
}
