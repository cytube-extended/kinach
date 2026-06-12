<script lang="ts" module>
  const togglePane = (pane: Pane) => (pane.isCollapsed() ? pane.expand() : pane.collapse());
</script>

<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { portal } from "$components/common/Portal.svelte";
  import ChatLayout from "$features/chat/ChatLayout.svelte";
  import PlayerLayout from "$features/player/PlayerLayout.svelte";
  import { Pane } from "$lib/components/ui/resizable/index.js";
  import { cn, md } from "$lib/utils";
  import ResizableCytubeFluidLayout from "./ResizableCytubeFluidLayout.svelte";

  let reversed = $state(md.current);
  let mainPane: Pane | null = $state(null);
  let secondaryPane: Pane | null = $state(null);
  let mainPaneRef: HTMLElement | null = $state(null);
  let secondaryPaneRef: HTMLElement | null = $state(null);

  const reverseLayout = () => (reversed = !reversed);
  const togglePlaylist = () => {
    if (!mainPane || !secondaryPane) {
      return;
    }

    if (reversed) {
      togglePane(mainPane);
    } else {
      togglePane(secondaryPane);
    }
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
    defaultMainSize={md.current ? 36 : 48.5}
    defaultSecondarySize={md.current ? 64 : 51.5}
    bind:mainPane
    bind:secondaryPane
    bind:mainPaneRef
    bind:secondaryPaneRef
    mainClass="flex"
    secondaryClass="flex"
    class="flex-1"
  />

  {#if mainPaneRef && secondaryPaneRef}
    <PlayerLayout
      {@attach portal(reversed ? secondaryPaneRef : mainPaneRef)}
      {reversed}
      {togglePlaylist}
      {reverseLayout}
      class="flex w-full flex-1 flex-col"
    />

    <ChatLayout
      {@attach portal(reversed ? mainPaneRef : secondaryPaneRef)}
      {isLoggedIn}
      {reverseLayout}
      {reversed}
      class="flex w-full flex-1 flex-col"
    />
  {/if}
</main>
