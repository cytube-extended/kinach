<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { portal } from "$components/common/Portal.svelte";
  import ChatLayout from "$features/chat/ChatLayout.svelte";
  import PlayerLayout from "$features/player/PlayerLayout.svelte";
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
  };

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
    defaultMainSize={md.current ? 36 : 45}
    defaultSecondarySize={md.current ? 64 : 55}
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

    <PlayerLayout
      {@attach portal(mediaTarget)}
      {reversed}
      {handlePlaylistToggle}
      {handleReverse}
      class="flex w-full flex-1 flex-col"
    />

    <ChatLayout
      {@attach portal(chatTarget)}
      {isLoggedIn}
      {handleReverse}
      {reversed}
      class="flex w-full flex-1 flex-col"
    />
  {/if}
</main>
