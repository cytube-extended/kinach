<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { UnavailableIcon, Film02Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { cn } from "$lib/utils";

  let {
    open,
    handlePlayerToggle,
    class: className,
    ...restProps
  }: {
    open: boolean;
    handlePlayerToggle: () => void;
    class?: ClassValue;
  } = $props();
</script>

<div
  class={cn("flex h-8 flex-row items-center justify-between gap-4 overflow-hidden p-1", className)}
  {...restProps}
>
  <div class="flex flex-1 flex-row items-center justify-start"></div>

  <div class="flex-auto"></div>

  <div class="flex flex-1 flex-row items-center justify-end">
    <Button variant="outline" type="button" size="icon-xs" onclick={handlePlayerToggle}>
      {#if open}
        <HugeiconsIcon icon={UnavailableIcon} class="size-4" />
      {:else}
        <HugeiconsIcon icon={Film02Icon} class="size-4" />
      {/if}
    </Button>
  </div>
</div>
