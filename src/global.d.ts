import type { SocketClient } from "$api/socket";
import type { ClientState } from "$stores/clientStore";

export {};

interface CytubeData {
  PL_CURRENT: number;
}

interface CytubeUtils {
  scrollQueue: () => void;
}

interface CytubeCallbacks {
  channelCSSJS: (data: { css?: string; js?: string }) => void;
}

declare global {
  interface Window extends CytubeUtils, CytubeData {
    VERSION: string;
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
    Callbacks: CytubeCallbacks;
  }
}
