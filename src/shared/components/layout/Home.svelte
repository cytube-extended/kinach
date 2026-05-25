<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { portal } from "$components/common/Portal.svelte";
  import GuestLoginForm from "$features/auth/GuestLoginForm.svelte";
  import ChatForm from "$features/chat/ChatForm.svelte";
  import ChatHeader from "$features/chat/ChatHeader.svelte";
  import ChatLayout from "$features/chat/ChatLayout.svelte";
  import MessageBuffer from "$features/chat/MessageBuffer.svelte";
  import Userlist from "$features/userlist/Userlist.svelte";
  import { Separator } from "$lib/components/ui/separator";
  import { cn, md } from "$lib/utils";
  import ResizableCytubeFluidLayout from "./ResizableCytubeFluidLayout.svelte";

  let reversed = $derived(md.current);
  let isDesktopReversed = $derived(md.current && reversed);
  let mainPaneRef: HTMLElement | null = $state(null);
  let secondaryPaneRef: HTMLElement | null = $state(null);
  let leftChatPane: HTMLElement | null = $state(null);
  let rightChatPane: HTMLElement | null = $state(null);

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
    defaultMainSize={md.current ? 36 : 25}
    defaultSecondarySize={md.current ? 64 : 75}
    class="flex-1"
  />

  {#if mainPaneRef && secondaryPaneRef}
    {@const playerTarget = reversed ? secondaryPaneRef : mainPaneRef}
    {@const chatTarget = reversed ? mainPaneRef : secondaryPaneRef}

    <div {@attach portal(playerTarget)} class="flex-1">Player</div>

    <div {@attach portal(chatTarget)} class="flex flex-1 flex-col">
      <ChatHeader reversed={isDesktopReversed} onReverse={handleReverse} onlineCount={0} />

      <Separator />

      <ChatLayout
        reversed={isDesktopReversed}
        bind:leftPaneRef={leftChatPane}
        bind:rightPaneRef={rightChatPane}
        class="flex-9"
      />

      {#if leftChatPane && rightChatPane}
        {@const userlistTarget = isDesktopReversed ? leftChatPane : rightChatPane}
        {@const messageBufferTarget = isDesktopReversed ? rightChatPane : leftChatPane}

        <Userlist {@attach portal(userlistTarget)} class="flex-1" />
        <MessageBuffer {@attach portal(messageBufferTarget)} class="flex-1" />
      {/if}

      <Separator />

      {#if isLoggedIn}
        <ChatForm class="flex h-full flex-3 flex-col justify-end" />
      {:else}
        <GuestLoginForm class="w-full flex-none" />
      {/if}
    </div>
  {/if}
</main>
