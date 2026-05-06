<script lang="ts">
  import { fade } from "svelte/transition";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import {
    Loading03Icon,
    UserCircleIcon,
    UserIcon,
  } from "@hugeicons/core-free-icons";

  interface Props {
    isLoading: boolean;
    isGuest: boolean;
  }

  let { isLoading, isGuest }: Props = $props();
</script>

<div>
  {#if isLoading}
    <span transition:fade={{ duration: 250 }}>
      <HugeiconsIcon
        icon={Loading03Icon}
        class="size-5 animate-spin"
        role="status"
        aria-label="Loading"
      />
    </span>
  {:else if isGuest}
    <span transition:fade={{ duration: 250 }}>
      <HugeiconsIcon icon={UserIcon} class="size-5" />
    </span>
  {:else}
    <span transition:fade={{ duration: 250 }}>
      <HugeiconsIcon icon={UserCircleIcon} class="size-5" />
    </span>
  {/if}
</div>
