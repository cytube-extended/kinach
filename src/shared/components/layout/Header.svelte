<script lang="ts" module>
  const logoImgURL = new URL("dist/logo.png", window.BASE_URL);
  const logoImgSrc = logoImgURL.toString();
</script>

<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { appStore } from "$stores/appStore";
  import { socketStore } from "$stores/socketStore";
  import { clientStore } from "$stores/clientStore";
  import { submitSocketConnect } from "$api/socket";
  import VersionBadge from "$components/common/VersionBadge.svelte";
  import ChannelAvatar from "$components/common/ChannelAvatar.svelte";
  import AuthForm from "$features/auth/AuthForm.svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  let {
    children,
    class: className,
    ...restProps
  }: HTMLAttributes<HTMLHeadElement> = $props();
</script>

<header
  class={cn(
    "sticky w-full flex flex-row items-center justify-between px-10 py-5 bg-background md:bg-background/80 md:backdrop-blur-md",
    className,
  )}
  {...restProps}
>
  {#if $appStore.version}
    <div class="fixed left-0 top-0">
      <VersionBadge version={$appStore.version} />
    </div>
  {/if}

  <ChannelAvatar
    class="flex-4"
    imgSrc={logoImgSrc}
    isConnected={$socketStore.connected}
  />

  {#if children}
    <div class="flex-4">
      {@render children()}
    </div>
  {/if}

  {#if $socketStore.connected}
    <AuthForm class="flex-4" isLoggedIn={$clientStore.logged_in} />
  {:else}
    <div class="flex-4 flex flex-row items-center justify-end">
      <Button class="basis-1" onclick={submitSocketConnect}>Reconnect</Button>
    </div>
  {/if}
  <!-- </div> -->
</header>
