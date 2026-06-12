<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import {
    UserListIcon,
    ArrowBigRightDashIcon,
    ArrowBigLeftDashIcon,
    ArrowBigDownDashIcon,
    ArrowBigUpDashIcon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { cn, md } from "$lib/utils";

  let {
    reversed,
    reverseLayout,
    onlineCount = 0,
    class: className,
    ...restProps
  }: {
    reversed: boolean;
    reverseLayout: () => void;
    onlineCount: number;
    class?: ClassValue;
  } = $props();
</script>

<div
  class={cn(
    "flex flex-none items-center justify-between overflow-hidden",
    reversed ? "flex-row-reverse md:flex-row" : "flex-row-reverse",
    className
  )}
  {...restProps}
>
  <div class="flex flex-row items-center justify-start">
    <Button variant="ghost" type="button" size={md.current ? "icon-sm" : "icon-xs"}>
      <HugeiconsIcon icon={UserListIcon} class="size-4 md:size-5" />
    </Button>
  </div>

  <p
    class="flex-auto truncate text-center text-sm font-stretch-ultra-condensed antialiased md:text-base md:font-stretch-normal md:subpixel-antialiased"
  >
    {onlineCount} online
  </p>

  <div class="flex flex-row items-center justify-end">
    <Button
      variant="ghost"
      type="button"
      size={md.current ? "icon-sm" : "icon-xs"}
      onclick={reverseLayout}
    >
      {#if reversed}
        {#if md.current}
          <HugeiconsIcon icon={ArrowBigRightDashIcon} class="size-4 md:size-5" />
        {:else}
          <HugeiconsIcon icon={ArrowBigDownDashIcon} class="size-4 md:size-5" />
        {/if}
      {:else if md.current}
        <HugeiconsIcon icon={ArrowBigLeftDashIcon} class="size-4 md:size-5" />
      {:else}
        <HugeiconsIcon icon={ArrowBigUpDashIcon} class="size-4 md:size-5" />
      {/if}
    </Button>
  </div>
</div>
