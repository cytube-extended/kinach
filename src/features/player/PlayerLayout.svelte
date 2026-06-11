<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { Separator } from "$lib/components/ui/separator";
  import { cn } from "$lib/utils";
  import PlayerBody from "./PlayerBody.svelte";
  import PlaylistLayout from "./PlaylistLayout.svelte";

  let {
    reversed,
    handlePlaylistToggle,
    handleReverse,
    class: className,
    ...restProps
  }: {
    reversed: boolean;
    handlePlaylistToggle: () => void;
    handleReverse: () => void;
    class?: ClassValue;
  } = $props();
</script>

<div class={cn("", className)} {...restProps}>
  <PlayerBody {reversed} {handlePlaylistToggle} {handleReverse} />

  <Separator />

  <PlaylistLayout class="h-7 max-h-7 min-h-7" />
</div>
