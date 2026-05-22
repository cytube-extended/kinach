<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import {
    Loading03Icon,
    UserCircleIcon,
    UserIcon,
    AnonymousIcon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { fade } from "svelte/transition";
  import { cn } from "$lib/utils";

  let {
    class: className,
    isLoading,
    isAnon,
    isGuest,
    ...restProps
  }: {
    class?: ClassValue;
    isLoading: boolean;
    isAnon: boolean;
    isGuest: boolean;
  } = $props();
</script>

<div class={cn("", className)} {...restProps}>
  {#if isLoading}
    <span transition:fade={{ duration: 250 }}>
      <HugeiconsIcon
        icon={Loading03Icon}
        class="size-5 animate-spin"
        role="status"
        aria-label="Loading"
      />
    </span>
  {:else if isAnon}
    <span transition:fade={{ duration: 250 }}>
      <HugeiconsIcon icon={AnonymousIcon} class="size-5" />
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
