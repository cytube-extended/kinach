<script lang="ts">
  import { appStore } from "$stores/appStore";
  import VersionBadge from "$components/common/VersionBadge.svelte";
</script>

<header
  class="sticky w-full flex flex-row items-center justify-start h-15 mx-auto top-0 z-50 border-b bg-background md:bg-background/80 md:backdrop-blur-md"
>
  {#if $appStore.version}
    <VersionBadge version={$appStore.version} />
  {/if}
</header>
