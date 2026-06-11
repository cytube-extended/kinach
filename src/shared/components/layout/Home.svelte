<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { portal } from "$components/common/Portal.svelte";
  import ChatLayout from "$features/chat/ChatLayout.svelte";
  import PlayerLayout from "$features/player/PlayerLayout.svelte";
  import PlaylistLayout from "$features/playlist/PlaylistLayout.svelte";
  import { Separator } from "$lib/components/ui/separator";
  import { Pane } from "$lib/components/ui/resizable/index.js";
  import { cn, md } from "$lib/utils";
  import ResizableCytubeFluidLayout from "./ResizableCytubeFluidLayout.svelte";

  let reversed = $derived(md.current);
  let mainPane: Pane | null = $state(null);
  let secondaryPane: Pane | null = $state(null);
  let mainPaneRef: HTMLElement | null = $state(null);
  let secondaryPaneRef: HTMLElement | null = $state(null);

  const handleReverse = () => (reversed = !reversed);
  const handlePlaylistToggle = () => {
    if (!mainPane || !secondaryPane) {
      return;
    }

    if (reversed) {
      if (mainPane.isCollapsed()) {
        mainPane.expand();
        return;
      }
      mainPane.collapse();
      return;
    }

    if (secondaryPane.isCollapsed()) {
      secondaryPane.expand();
      return;
    }
    secondaryPane.collapse();
  }

  let {
    isLoggedIn,
    class: className,
    ...restProps
  }: {
    isLoggedIn: boolean;
    class?: ClassValue;
  } = $props();
</script>

<main class={cn("flex flex-col border-t", className)} {...restProps}>
  <ResizableCytubeFluidLayout
    direction={md.current ? "horizontal" : "vertical"}
    defaultMainSize={md.current ? 36 : 50}
    defaultSecondarySize={md.current ? 64 : 50}
    bind:mainPane
    bind:secondaryPane
    bind:mainPaneRef
    bind:secondaryPaneRef
    mainClass="flex"
    secondaryClass="flex"
    class="flex-1"
  />

  {#if mainPaneRef && secondaryPaneRef}
    {const mediaTarget = $derived(reversed ? secondaryPaneRef : mainPaneRef)}
    {const chatTarget = $derived(reversed ? mainPaneRef : secondaryPaneRef)}

    <div {@attach portal(mediaTarget)} class="flex w-full flex-1 flex-col">
      <PlayerLayout {reversed} {handlePlaylistToggle} {handleReverse} />

      <Separator />

      <PlaylistLayout class="h-4 max-h-4 min-h-4 md:h-6 md:max-h-6 md:min-h-6" />
    </div>

    <ChatLayout
      {@attach portal(chatTarget)}
      {isLoggedIn}
      {handleReverse}
      {reversed}
      class="flex w-full flex-1 flex-col"
    />
  {/if}
</main>
