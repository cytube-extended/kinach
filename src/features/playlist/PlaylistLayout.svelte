<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib/utils";
  import { playlistStore } from "$stores/playlistStore";
  import PlaylistItem from "./PlaylistItem.svelte";

  let {
    class: className,
    ...restProps
  }: {
    class?: ClassValue;
  } = $props();
</script>

<div class={cn("pt-1", className)} {...restProps}>
  {#each $playlistStore.playlist as playlistItem, index (playlistItem.uid)}
    {const title = playlistItem.media.title}

    <PlaylistItem {title} />
  {/each}
</div>
