<script lang="ts" module>
  const logoImgURL = new URL("dist/logo.png", window.BASE_URL);
  const logoImgSrc = logoImgURL.toString();
</script>

<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { submitSocketConnect } from "$api/socket";
  import ChannelAvatar from "$components/common/ChannelAvatar.svelte";
  import VersionBadge from "$components/common/VersionBadge.svelte";
  import AuthForm from "$features/auth/AuthForm.svelte";
  import { Button } from "$lib/components/ui/button";
  import { cn } from "$lib/utils";
  import { appStore } from "$stores/appStore";
  import { clientStore } from "$stores/clientStore";
  import { socketStore } from "$stores/socketStore";

  let { children, class: className, ...restProps }: HTMLAttributes<HTMLElement> = $props();
</script>

<header
  class={cn(
    "sticky top-0 z-50 mx-auto flex h-15 w-full flex-row items-center justify-start bg-background md:bg-background/80 md:backdrop-blur-md",
    className
  )}
  {...restProps}
>
  {#if $appStore.version}
    <VersionBadge version={$appStore.version} />
  {/if}

  <div class="flex w-full flex-row items-center justify-between py-5 pr-6">
    <ChannelAvatar imgSrc={logoImgSrc} isConnected={$socketStore.connected} />

    {#if $socketStore.connected}
      <AuthForm isLoggedIn={$clientStore.logged_in} />
    {:else}
      <Button onclick={submitSocketConnect}>Reconnect</Button>
    {/if}
  </div>
</header>
