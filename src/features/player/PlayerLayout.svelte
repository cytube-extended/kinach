<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { Separator } from "$lib/components/ui/separator";
  import { cn } from "$lib/utils";
  import PlayerBody from "./PlayerBody.svelte";
  import PlaylistLayout from "./PlaylistLayout.svelte";

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
  <PlayerBody {reversed} {togglePlaylist} {reverseLayout} />

  <Separator />

  <PlaylistLayout class="h-7 max-h-7 min-h-7 md:h-8 md:max-h-8 md:min-h-8" />
</div>
