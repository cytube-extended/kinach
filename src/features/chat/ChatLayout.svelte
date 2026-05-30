<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { portal } from "$components/common/Portal.svelte";
  import GuestLoginForm from "$features/auth/GuestLoginForm.svelte";
  import Userlist from "$features/userlist/Userlist.svelte";
  import { Separator } from "$lib/components/ui/separator";
  import { cn, md } from "$lib/utils";
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

<div class={cn("overflow-hidden", className)} {...restProps}>
  <ChatHeader
    {reversed}
    {handleReverse}
    onlineCount={0}
    class="h-7 max-h-7 min-h-7 w-full gap-1 p-0.5 md:h-8 md:max-h-8 md:min-h-8 md:gap-1.5 md:p-1"
  />

  <Separator />

  <ChatBody
    {reversed}
    bind:leftPaneRef={leftChatPane}
    bind:rightPaneRef={rightChatPane}
    class="flex-16"
  />
  {#if leftChatPane && rightChatPane}
    {@const userlistTarget = reversed && md.current ? leftChatPane : rightChatPane}
    {@const messageBufferTarget = reversed && md.current ? rightChatPane : leftChatPane}

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
