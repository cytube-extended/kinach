<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import {
    Loading03Icon,
    UserCircleIcon,
    UserIcon,
    AnonymousIcon,
  } from "@hugeicons/core-free-icons";

  let {
    isLoading,
    isAnon,
    isGuest,
  }: {
    isLoading: boolean;
    isAnon: boolean;
    isGuest: boolean;
  } = $props();
</script>

<div>
  {#if isLoading}
    <HugeiconsIcon
      icon={Loading03Icon}
      class="size-5 animate-spin"
      role="status"
      aria-label="Loading"
    />
  {:else if isAnon}
    <HugeiconsIcon icon={AnonymousIcon} class="size-5" />
  {:else if isGuest}
    <HugeiconsIcon icon={UserIcon} class="size-5" />
  {:else}
    <HugeiconsIcon icon={UserCircleIcon} class="size-5" />
  {/if}
</div>
