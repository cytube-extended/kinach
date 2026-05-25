<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { submitSocketConnect } from "$api/socket";
  import ChannelAvatar from "$components/common/ChannelAvatar.svelte";
  import VersionBadge from "$components/common/VersionBadge.svelte";
  import AuthForm from "$features/auth/AuthForm.svelte";
  import { Button } from "$lib/components/ui/button";
  import { cn } from "$lib/utils";

  const handleReconnect = submitSocketConnect;

  let {
    appVersion,
    imgLogoSrc,
    isConnected,
    isLoggedIn,
    class: className,
    ...restProps
  }: {
    appVersion: string;
    imgLogoSrc: string;
    isConnected: boolean;
    isLoggedIn: boolean;
    class?: ClassValue;
  } = $props();
</script>

<header
  class={cn(
    "sticky top-0 flex w-full flex-row items-center justify-between gap-4 bg-background py-4 pr-5 pl-10 md:gap-8 md:pr-8",
    className
  )}
  {...restProps}
>
  <div class="fixed top-0 left-0 flex-none">
    <VersionBadge {appVersion} />
  </div>

  <ChannelAvatar class="flex-none" imgSrc={imgLogoSrc} {isConnected} />

  {#if isConnected}
    <AuthForm class="w-4/5 flex-initial md:w-3/5 lg:w-2/5" {isLoggedIn} />
  {:else}
    <Button class="flex-initial" onclick={handleReconnect}>Reconnect</Button>
  {/if}
</header>
