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
    "sticky flex w-full flex-row items-center justify-between gap-4 bg-background py-4 pr-5 pl-10 md:gap-8 md:pr-8",
    className
  )}
  {...restProps}
>
  {#if $appStore.version}
    <div class="fixed top-0 left-0 flex-none">
      <VersionBadge version={$appStore.version} />
    </div>
  {/if}

  <ChannelAvatar class="flex-none" imgSrc={logoImgSrc} isConnected={$socketStore.connected} />

  {#if $socketStore.connected}
    <AuthForm class="w-4/5 flex-initial md:w-3/5 lg:w-2/5" isLoggedIn={$clientStore.logged_in} />
  {:else}
    <Button class="flex-initial" onclick={submitSocketConnect}>Reconnect</Button>
  {/if}
</header>
