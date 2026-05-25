<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import {
    UserListIcon,
    ArrowDownFromLineIcon,
    ArrowLeftFromLineIcon,
    ArrowRightFromLineIcon,
    ArrowUp03Icon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { cn, md } from "$lib/utils";

  let {
    reversed,
    handleReverse,
    onlineCount = 0,
    class: className,
    ...restProps
  }: {
    reversed: boolean;
    handleReverse: () => void;
    onlineCount: number;
    class?: ClassValue;
  } = $props();
</script>

<div
  class={cn(
    "flex h-8 flex-none items-center justify-between overflow-hidden p-1",
    reversed ? "flex-row-reverse md:flex-row" : "flex-row-reverse",
    className
  )}
  {...restProps}
>
  <div class="flex flex-row items-center justify-start">
    <Button variant="outline" type="button" size="icon-xs">
      <HugeiconsIcon icon={UserListIcon} class="size-4" />
    </Button>
  </div>

  <p class="truncate">{onlineCount} online</p>

  <div class="flex flex-row items-center justify-end">
    <Button variant="outline" type="button" size="icon-xs" onclick={handleReverse}>
      {#if reversed}
        {#if md.current}
          <HugeiconsIcon icon={ArrowRightFromLineIcon} class="size-4" />
        {:else}
          <HugeiconsIcon icon={ArrowDownFromLineIcon} class="size-4" />
        {/if}
      {:else if md.current}
        <HugeiconsIcon icon={ArrowLeftFromLineIcon} class="size-4" />
      {:else}
        <HugeiconsIcon icon={ArrowUp03Icon} class="size-4" />
      {/if}
    </Button>
  </div>
</div>
