<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { portal } from "$components/common/Portal.svelte";
  import GuestLoginForm from "$features/auth/GuestLoginForm.svelte";
  import Userlist from "$features/userlist/Userlist.svelte";
  import { Separator } from "$lib/components/ui/separator";
  import { cn } from "$lib/utils";
  import ChatBody from "./ChatBody.svelte";
  import ChatForm from "./ChatForm.svelte";
  import ChatHeader from "./ChatHeader.svelte";
  import MessageBuffer from "./MessageBuffer.svelte";

  let leftChatPane: HTMLElement | null = $state(null);
  let rightChatPane: HTMLElement | null = $state(null);

  let {
    isLoggedIn,
    reversed,
    handleReverse,
    class: className,
    ...restProps
  }: {
    isLoggedIn: boolean;
    reversed: boolean;
    handleReverse: () => void;
    class?: ClassValue;
  } = $props();
</script>

<div class={cn("", className)} {...restProps}>
  <ChatHeader {reversed} {handleReverse} onlineCount={0} />

  <Separator />

  <ChatBody
    {reversed}
    bind:leftPaneRef={leftChatPane}
    bind:rightPaneRef={rightChatPane}
    class="flex-9"
  />

  {#if leftChatPane && rightChatPane}
    {@const userlistTarget = reversed ? leftChatPane : rightChatPane}
    {@const messageBufferTarget = reversed ? rightChatPane : leftChatPane}

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
