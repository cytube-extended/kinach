<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { submitSocketConnect } from "$api/socket";
  import ChannelAvatar from "$components/common/ChannelAvatar.svelte";
  import VersionBadge from "$components/common/VersionBadge.svelte";
  import AuthForm from "$features/auth/AuthForm.svelte";
  import { Button } from "$lib/components/ui/button";
  import { cn, md } from "$lib/utils";

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
    "sticky top-0 flex w-full flex-row items-center justify-between gap-1.5 bg-background py-2 pr-1.5 pl-6 md:gap-3 md:py-4 md:pr-8 md:pl-10",
    className
  )}
  {...restProps}
>
  <div class="fixed top-0 left-0 flex-none">
    <VersionBadge {appVersion} />
  </div>

  <Button variant="ghost" size="icon-sm" class="flex-none" onclick={() => location.assign("/")}>
    <ChannelAvatar imgSrc={imgLogoSrc} {isConnected} />
  </Button>

  {#if isConnected}
    <AuthForm class="w-full flex-initial md:w-3/5 lg:w-2/5" {isLoggedIn} />
  {:else}
    <Button size={md.current ? "default" : "sm"} onclick={handleReconnect} class="flex-initial">
      Reconnect
    </Button>
  {/if}
</header>
