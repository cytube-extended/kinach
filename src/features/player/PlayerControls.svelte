<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import {
    UnavailableIcon,
    Film02Icon,
    NextIcon,
    Playlist01Icon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { voteskip } from "$features/playlist/playlist";
  import Button from "$lib/components/ui/button/button.svelte";
  import { cn, md } from "$lib/utils";
  import { voteskipStore } from "$stores/voteskipStore";
  import MediaQueueForm from "./MediaQueueForm.svelte";

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
    handlePlaylistToggle,
    handlePlayerToggle,
    class: className,
    ...restProps
  }: {
    current: number;
    total: number;
    open: boolean;
    handlePlaylistToggle: () => void;
    handlePlayerToggle: () => void;
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
  <div class="flex flex-1 flex-row items-center justify-start gap-1.5">
    <MediaQueueForm />

    {#if !md.current}
      <Button variant="outline" type="button" size="icon-xs" onclick={handlePlaylistToggle}>
        <HugeiconsIcon icon={Playlist01Icon} class="size-4" />
      </Button>
    {/if}
  </div>

  <div class="flex-auto text-center">{current} / {total} items</div>

  <div class="flex flex-1 flex-row items-center justify-end gap-1 md:gap-1.5">
    <Button variant="outline" type="button" size="icon-xs" onclick={handlePlayerToggle}>
      {#if open}
        <HugeiconsIcon icon={UnavailableIcon} class="size-4" />
      {:else}
        <HugeiconsIcon icon={Film02Icon} class="size-4" />
      {/if}
    </Button>

    <Button
      variant="outline"
      type="button"
      size={$voteskipStore.count > 0 ? "xs" : "icon-xs"}
      onclick={handleVoteskip}
      disabled={skipped}
    >
      {#if $voteskipStore.count > 0}
        {$voteskipStore.count} / {$voteskipStore.need}
      {/if}
      <HugeiconsIcon icon={NextIcon} class="size-4" />
    </Button>
  </div>
</div>
