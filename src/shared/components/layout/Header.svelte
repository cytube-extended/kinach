<script lang="ts" module>
  const logoImgURL = new URL("dist/logo.png", window.BASE_URL);
  const logoImgSrc = logoImgURL.toString();
</script>

<script lang="ts">
  import { appStore } from "$stores/appStore";
  import { socketStore } from "$stores/socketStore";
  import VersionBadge from "$components/common/VersionBadge.svelte";
  import ChannelAvatar from "$components/common/ChannelAvatar.svelte";
</script>

<header
  class="sticky w-full flex flex-row items-center justify-start h-15 mx-auto top-0 z-50 border-b bg-background md:bg-background/80 md:backdrop-blur-md"
>
  {#if $appStore.version}
    <VersionBadge version={$appStore.version} />
  {/if}

  <div class="w-full flex flex-row items-center justify-between pr-6 py-5">
    <ChannelAvatar imgSrc={logoImgSrc} isConnected={$socketStore.connected} />
  </div>
</header>
