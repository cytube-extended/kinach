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
    Callbacks: {
      channelCSSJS: (data: { css?: string; js?: string }) => void;
    };
  }
}
