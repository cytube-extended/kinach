<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { portal } from "$components/common/Portal.svelte";
  import GuestLoginForm from "$features/auth/GuestLoginForm.svelte";
  import { Separator } from "$lib/components/ui/separator";
  import { cn, md } from "$lib/utils";
  import ChatBody from "./ChatBody.svelte";
  import ChatForm from "./ChatForm.svelte";
  import ChatHeader from "./ChatHeader.svelte";
  import MessageBuffer from "./MessageBuffer.svelte";
  import Userlist from "./Userlist.svelte";

  let leftChatPane: HTMLElement | null = $state(null);
  let rightChatPane: HTMLElement | null = $state(null);

  let {
    isLoggedIn,
    reversed,
    reverseLayout,
    class: className,
    ...restProps
  }: {
    isLoggedIn: boolean;
    reversed: boolean;
    reverseLayout: () => void;
    class?: ClassValue;
  } = $props();
</script>

<div class={cn("overflow-hidden", className)} {...restProps}>
  <ChatHeader
    {reversed}
    {reverseLayout}
    onlineCount={0}
    class="h-8 max-h-8 min-h-8 w-full gap-1.5 p-1 md:h-10 md:max-h-10 md:min-h-10 md:w-full md:gap-2 md:p-2"
  />

  <Separator />

  <ChatBody
    {reversed}
    bind:leftPaneRef={leftChatPane}
    bind:rightPaneRef={rightChatPane}
    class="flex-16"
  />
  {#if leftChatPane && rightChatPane}
    {const userlistTarget = $derived(reversed && md.current ? leftChatPane : rightChatPane)}
    {const messageBufferTarget = $derived(reversed && md.current ? rightChatPane : leftChatPane)}

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
