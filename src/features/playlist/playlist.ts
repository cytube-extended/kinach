import { socketClient } from "$api/socket";

export type PlaylistMedia = {
  duration: string;
  id: string;
  meta: {};
  seconds: number;
  title: string;
  type: "yt";
};
export type PlaylistItem = {
  media: PlaylistMedia;
  queueby: string;
  temp: boolean;
  uid: number;
};
export type Playlist = Array<PlaylistItem>;

type RequestPlaylistInputSocketEvent = "requestPlaylist";
type RequestPlaylistInputSocketData = void;

type PlaylistOutputSocketEvent = "playlist";
type PlaylistSuccessOutputSocketData = Playlist;

type PlaylistOutputErrorEvent = "errorMsg";
type PlaylistOutputSocketData = {
  code: "REQ_PLAYLIST_LIMIT_REACHED";
  msg: "Get Playlist URLs is limited to 1 usage every 60 seconds.  Please try again later.";
};

type QueueOutputSocketEvent = "queue";
export type QueueOutputSocketData = {
  after: number;
  item: PlaylistItem;
};

type DeleteOutputSocketEvent = "delete";
type DeleteOutputSocketData = {
  uid: number;
};

export const requestPlaylist = async () =>
  new Promise<Playlist>((resolve, reject) => {
    socketClient.once<PlaylistOutputSocketEvent, PlaylistSuccessOutputSocketData>(
      "playlist",
      resolve
    );

    socketClient.once<PlaylistOutputErrorEvent, PlaylistOutputSocketData>("errorMsg", reject);

    socketClient.emit<RequestPlaylistInputSocketEvent, RequestPlaylistInputSocketData>(
      "requestPlaylist"
    );
  });

export const subscribeSocketQueue = (subscribtion: (data: QueueOutputSocketData) => void) =>
  socketClient.on<QueueOutputSocketEvent, QueueOutputSocketData>("queue", subscribtion);

export const subscribeSocketDelete = (subscribtion: (data: DeleteOutputSocketData) => void) =>
  socketClient.on<DeleteOutputSocketEvent, DeleteOutputSocketData>("delete", subscribtion);
