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

type VoteskipInputSocketEvent = "voteskip";
type VoteskipInputSocketData = void;

type VoteskipOutputSocketEvent = "voteskip";
type VoteskipOutputSocketData = { count: number; need: number };

type SetCurrentOutputSocketEvent = "setCurrent";
type SetCurrentOutputSocketData = number;

type ChangeMediaOutputSocketEvent = "changeMedia";
type ChangeMediaOutputSocketData = PlaylistMedia & {
  currentTime: number;
  paused: boolean;
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

export const subscribeSetCurrent = (subscribtion: (data: SetCurrentOutputSocketData) => void) =>
  socketClient.on<SetCurrentOutputSocketEvent, SetCurrentOutputSocketData>(
    "setCurrent",
    subscribtion
  );
export const unsubscribeSetCurrent = (subscribtion: (data: SetCurrentOutputSocketData) => void) =>
  socketClient.off<SetCurrentOutputSocketEvent, typeof subscribtion>("setCurrent", subscribtion);

export const subscribeChangeMedia = (subscribtion: (data: ChangeMediaOutputSocketData) => void) =>
  socketClient.on<ChangeMediaOutputSocketEvent, ChangeMediaOutputSocketData>(
    "changeMedia",
    subscribtion
  );
export const unsubscribeChangeMedia = (subscribtion: (data: ChangeMediaOutputSocketData) => void) =>
  socketClient.off<ChangeMediaOutputSocketEvent, typeof subscribtion>("changeMedia", subscribtion);

export const subscribeVoteskip = (subscribtion: (data: VoteskipOutputSocketData) => void) =>
  socketClient.on<VoteskipOutputSocketEvent, VoteskipOutputSocketData>("voteskip", subscribtion);
export const unsubscribeVoteskip = (subscribtion: (data: VoteskipOutputSocketData) => void) =>
  socketClient.off<VoteskipOutputSocketEvent, typeof subscribtion>("voteskip", subscribtion);

export const voteskip = () =>
  socketClient.emit<VoteskipInputSocketEvent, VoteskipInputSocketData>("voteskip");
