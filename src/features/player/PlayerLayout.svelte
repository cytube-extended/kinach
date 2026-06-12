<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { Separator } from "$lib/components/ui/separator";
  import { cn } from "$lib/utils";
  import { playlistStore } from "$stores/playlistStore";
  import MediaControls from "./MediaControls.svelte";
  import PlayerBody from "./PlayerBody.svelte";
  import PlayerHeader from "./PlayerHeader.svelte";
  import PlaylistLayout from "./PlaylistLayout.svelte";

  let open = $state(true);
  let currentUid = $derived($playlistStore.currentUid);
  let currentItem = $derived($playlistStore.playlist[currentUid]);
  let currentMediaTitle = $derived(currentItem.media.title ?? "");
  let currentMediaId = $derived(currentItem.media.id ?? "");
  let isYT = $derived(currentItem.media.type === "yt");
  let currentMediaLink = $derived(isYT ? `https://youtu.be/${currentItem.media.id}` : "");
  let youtubeThumbnailURL = $derived(
    isYT ? `https://img.youtube.com/vi/${currentItem.media.id}/maxresdefault.jpg` : ""
  );
  let total = $derived($playlistStore.playlist.length);
  let current = $derived($playlistStore.playlist.indexOf(currentItem) + 1);

  const togglePlayer = () => (open = !open);

  let {
    reversed,
    togglePlaylist,
    reverseLayout,
    class: className,
    ...restProps
  }: {
    reversed: boolean;
    togglePlaylist: () => void;
    reverseLayout: () => void;
    class?: ClassValue;
  } = $props();
</script>

<div class={cn("", className)} {...restProps}>
  <PlayerHeader
    {reversed}
    {reverseLayout}
    {youtubeThumbnailURL}
    mediaLink={currentMediaLink}
    mediaTitle={currentMediaTitle}
    class="h-8 max-h-8 min-h-8 w-full gap-1.5 p-1 md:h-10 md:max-h-10 md:min-h-10 md:w-full md:gap-2 md:p-2"
  />

  <Separator />

  <PlayerBody {currentMediaId} {open} {togglePlayer} />

  <Separator />

  <MediaControls
    {current}
    {total}
    {open}
    {togglePlaylist}
    {togglePlayer}
    class="h-8 max-h-8 min-h-8 w-full gap-1.5 p-1 md:h-10 md:max-h-10 md:min-h-10 md:w-full md:gap-2 md:p-2"
  />

  <Separator />

  <PlaylistLayout class="h-7 max-h-7 min-h-7 md:h-8 md:max-h-8 md:min-h-8" />
</div>
