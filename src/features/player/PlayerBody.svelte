<script lang="ts">
  import { VideoOffIcon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { youtubePlayer } from "$components/common/YouTube.svelte";
  import { Button } from "$lib/components/ui/button";
  import {
    Root as EmptyRoot,
    Header as EmptyHeader,
    Media as EmptyMedia,
    Title as EmptyTitle,
  } from "$lib/components/ui/empty/index.js";
  import { Separator } from "$lib/components/ui/separator";
  import { playlistStore } from "$stores/playlistStore";
  import PlayerControls from "./PlayerControls.svelte";
  import PlayerHeader from "./PlayerHeader.svelte";

  let open = $state(true);
  let currentUid = $derived($playlistStore.currentUid);
  let currentItem = $derived($playlistStore.playlist[currentUid]);
  let currentMediaTitle = $derived(currentItem?.media?.title ?? "");
  let currentMediaId = $derived(currentItem?.media?.id ?? "");
  let currentMediaLink = $derived(
    currentItem.media.type === "yt" ? `https://youtu.be/${currentItem.media.id}` : ""
  );
  let total = $derived($playlistStore.playlist.length);
  let current = $derived($playlistStore.playlist.indexOf(currentItem) + 1);

  const togglePlayer = () => (open = !open);

  let {
    reversed,
    togglePlaylist,
    reverseLayout,
  }: {
    reversed: boolean;
    togglePlaylist: () => void;
    reverseLayout: () => void;
  } = $props();
</script>

<PlayerHeader
  {reversed}
  {reverseLayout}
  mediaLink={currentMediaLink}
  mediaTitle={currentMediaTitle}
  class="h-7 max-h-7 min-h-7 w-full gap-1 p-0.5 md:h-8 md:max-h-8 md:min-h-8 md:gap-1.5 md:p-1"
/>

<Separator />

<div class="flex-initial overflow-hidden">
  {#if open}
    <div class="flex aspect-video h-full w-full md:h-auto md:w-auto">
      <div
        class="aspect-video h-full w-full flex-initial overflow-hidden md:h-auto md:w-auto"
        {@attach youtubePlayer({
          videoId: currentMediaId,
          playerVars: { autoplay: 1, controls: 1 },
        })}
      ></div>
    </div>
  {:else}
    <EmptyRoot class="aspect-video h-full w-full md:h-auto md:w-auto">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Button variant="ghost" type="button" size="icon-xs" onclick={togglePlayer}>
            <HugeiconsIcon icon={VideoOffIcon} class="size-5 motion-safe:animate-pulse" />
          </Button>
        </EmptyMedia>
        <EmptyTitle>
          <Button
            onclick={togglePlayer}
            title="Show player"
            variant="ghost"
            type="button"
            size="lg"
            class="text-md font-semibold font-stretch-expanded select-none md:text-lg"
          >
            Player is hidden
          </Button>
        </EmptyTitle>
      </EmptyHeader>
    </EmptyRoot>
  {/if}
</div>

<Separator />

<PlayerControls
  {current}
  {total}
  {open}
  {togglePlaylist}
  {togglePlayer}
  class="h-7 max-h-7 min-h-7 w-full gap-1 p-0.5 md:h-8 md:max-h-8 md:min-h-8 md:gap-1.5 md:p-1"
/>
