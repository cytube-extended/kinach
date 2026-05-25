<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import {
    Loading03Icon,
    UserCircleIcon,
    UserIcon,
    AnonymousIcon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
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
  <span>
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
  </span>
</div>
