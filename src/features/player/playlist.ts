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

type QueueInputSocketEvent = "queue";
type QueueInputSocketData = {
  id: string;
  type: "yt";
  pos: "end" | "next";
  temp: boolean;
};

type QueueOutputSocketEvent = "queue";
type QueueOutputSocketData = {
  item: PlaylistItem;
  after: number | "prepend" | "append";
};

type QueueOutputErrorEvent = "queueFail";
type QueueOutputErrorData = {
  msg: string;
  link: string;
  id: string;
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

export const queue = async (input: QueueInputSocketData) =>
  new Promise<QueueOutputSocketData>((resolve, reject) => {
    socketClient.once<QueueOutputSocketEvent, QueueOutputSocketData>("queue", resolve);
    socketClient.once<QueueOutputErrorEvent, QueueOutputErrorData>("queueFail", reject);
    socketClient.emit<QueueInputSocketEvent, QueueInputSocketData>("queue", input);
  });

// Input
// ["queue", { id: "kR9be_KhqvE", type: "yt", pos: "end", temp: true }];

// Output
// [
//   "queue",
//   {
//     item: {
//       media: {
//         id: "kR9be_KhqvE",
//         title: "ロシア語単語小テスト 【本に関する言葉5】Контрольная работа　 #vtuber #風見カプラ",
//         seconds: 4246,
//         duration: "01:10:46",
//         type: "yt",
//         meta: {},
//       },
//       uid: 0,
//       temp: true,
//       queueby: "basevich",
//     },
//     after: "prepend",
//   },
// ];

// Fail
// [
//   ("queueFail",
//   {
//     msg: "Video does not exist or is private",
//     link: "http://youtu.be/kR9be_Khqv",
//     id: "kR9be_Khqv",
//   }),
// ];
