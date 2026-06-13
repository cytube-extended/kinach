export const getYoutubeVideoId = (url: string): string | null => {
  const YOUTUBE_VIDEO_ID_REGEX = new RegExp(
    /(?:youtube(?:-nocookie)?\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|shorts|live)\/|\S*?[?&]v=)|youtu\.be\/)(?<id>[a-zA-Z0-9_-]{11})/
  );

  const match = url.match(YOUTUBE_VIDEO_ID_REGEX);
  if (!match || !match.groups || !match.groups.id) {
    return null;
  }

  return match.groups.id;
};
