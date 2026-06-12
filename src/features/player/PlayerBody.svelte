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

  let {
    currentMediaId,
    open,
    togglePlayer,
  }: {
    currentMediaId: string;
    open: boolean;
    togglePlayer: () => void;
  } = $props();
</script>

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
