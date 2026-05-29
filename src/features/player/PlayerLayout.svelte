<script lang="ts">
  import { VideoOffIcon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { get } from "svelte/store";
  import { youtubePlayer } from "$components/common/YouTube.svelte";
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

  let currentIndex = $derived(get(playlistStore).currentIndex);
  let currentItem = $derived(get(playlistStore).playlist[currentIndex]);
  let currentMediaTitle = $derived(currentItem?.media?.title ?? "");
  let currentMediaId = $derived(currentItem?.media?.id ?? "");

  let open = $state(true);

  const handlePlayerToggle = () => (open = !open);

  let {
    reversed,
    handleReverse,
  }: {
    reversed: boolean;
    handleReverse: () => void;
  } = $props();
</script>

<PlayerHeader {reversed} mediaTitle={currentMediaTitle} {handleReverse} />

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
          <HugeiconsIcon icon={VideoOffIcon} class="size-5 motion-safe:animate-pulse" />
        </EmptyMedia>
        <EmptyTitle class="text-md font-semibold font-stretch-expanded select-none">
          Player is hidden
        </EmptyTitle>
      </EmptyHeader>
    </EmptyRoot>
  {/if}
</div>

<Separator />

<PlayerControls {open} {handlePlayerToggle} class="w-full" />
