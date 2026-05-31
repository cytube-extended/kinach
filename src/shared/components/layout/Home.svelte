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
    defaultMainSize={md.current ? 36 : 50}
    defaultSecondarySize={md.current ? 64 : 50}
    class="flex-1"
  />

  {#if mainPaneRef && secondaryPaneRef}
    {const mediaTarget = $derived(reversed ? secondaryPaneRef : mainPaneRef)}
    {const chatTarget = $derived(reversed ? mainPaneRef : secondaryPaneRef)}

    <div {@attach portal(mediaTarget)} class="flex w-full flex-1 flex-col">
      <PlayerLayout {reversed} {handleReverse} />

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
