<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import {
    UnavailableIcon,
    Film02Icon,
    NextIcon,
    Playlist01Icon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { cn, md } from "$lib/utils";
  import { voteskipStore } from "$stores/voteskipStore";
  import MediaQueueForm from "./MediaQueueForm.svelte";
  import { voteskip } from "./playlist";

  let skipped = $state(false);

  const handleVoteskip = () => {
    if (skipped) {
      return;
    }

    voteskip();

    skipped = true;
  };

  let {
    current,
    total,
    open,
    togglePlaylist,
    togglePlayer,
    class: className,
    ...restProps
  }: {
    current: number;
    total: number;
    open: boolean;
    togglePlaylist: () => void;
    togglePlayer: () => void;
    class?: ClassValue;
  } = $props();

  $effect(() => {
    if ($voteskipStore.count === 0) {
      skipped = false;
    }
  });
</script>

<div
  class={cn("flex flex-row items-center justify-between overflow-hidden", className)}
  {...restProps}
>
  <div class="flex flex-1 flex-row items-center justify-start gap-1.5 md:gap-2">
    <MediaQueueForm />

    {#if !md.current}
      <Button
        variant="ghost"
        type="button"
        size={md.current ? "icon-sm" : "icon-xs"}
        onclick={togglePlaylist}
      >
        <HugeiconsIcon icon={Playlist01Icon} class="size-4 md:size-5" />
      </Button>
    {/if}
  </div>

  <div
    class="flex-auto truncate text-center text-sm font-stretch-ultra-condensed antialiased md:text-base md:font-stretch-normal md:subpixel-antialiased"
  >
    {current} / {total} items
  </div>

  <div class="flex flex-1 flex-row items-center justify-end gap-1.5 md:gap-2">
    <Button
      variant="ghost"
      type="button"
      size={md.current ? "icon-sm" : "icon-xs"}
      onclick={togglePlayer}
    >
      {#if open}
        <HugeiconsIcon icon={UnavailableIcon} class="size-4 md:size-5" />
      {:else}
        <HugeiconsIcon icon={Film02Icon} class="size-4 md:size-5" />
      {/if}
    </Button>

    <Button
      variant="ghost"
      type="button"
      size={$voteskipStore.count > 0
        ? md.current
          ? "sm"
          : "xs"
        : md.current
          ? "icon-sm"
          : "icon-xs"}
      onclick={handleVoteskip}
      disabled={skipped}
    >
      {#if $voteskipStore.count > 0}
        {$voteskipStore.count} / {$voteskipStore.need}
      {/if}
      <HugeiconsIcon icon={NextIcon} class="size-4 md:size-5" />
    </Button>
  </div>
</div>
