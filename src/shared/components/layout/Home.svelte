<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { portal } from "$components/common/Portal.svelte";
  import ChatLayout from "$features/chat/ChatLayout.svelte";
  import PlayerLayout from "$features/player/PlayerLayout.svelte";
  import PlaylistLayout from "$features/playlist/PlaylistLayout.svelte";
  import { Separator } from "$lib/components/ui/separator";
  import { cn, md } from "$lib/utils";
  import ResizableCytubeFluidLayout from "./ResizableCytubeFluidLayout.svelte";

  let reversed = $derived(md.current);
  let mainPaneRef: HTMLElement | null = $state(null);
  let secondaryPaneRef: HTMLElement | null = $state(null);

  const handleReverse = () => (reversed = !reversed);

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
    bind:mainPaneRef
    bind:secondaryPaneRef
    mainClass="flex"
    secondaryClass="flex"
    defaultMainSize={md.current ? 36 : 45}
    defaultSecondarySize={md.current ? 64 : 55}
    class="flex-1"
  />

  {#if mainPaneRef && secondaryPaneRef}
    {@const playerTarget = reversed ? secondaryPaneRef : mainPaneRef}
    {@const chatTarget = reversed ? mainPaneRef : secondaryPaneRef}

    <div {@attach portal(playerTarget)} class="flex w-full flex-1 flex-col">
      <PlayerLayout {reversed} {handleReverse} />

      <Separator />

      <PlaylistLayout class="h-6 max-h-6 min-h-6" />
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
