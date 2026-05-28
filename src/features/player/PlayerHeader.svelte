<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import {
    CopyIcon,
    ArrowLeftFromLineIcon,
    ArrowRightFromLineIcon,
    ArrowDownFromLineIcon,
    ArrowUp03Icon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { cn, md } from "$lib/utils";

  let {
    reversed,
    handleReverse,
    mediaTitle,
    class: className,
    ...restProps
  }: {
    reversed: boolean;
    handleReverse: () => void;
    mediaTitle?: string;
    class?: ClassValue;
  } = $props();

  const handleCopy = () => navigator.clipboard.writeText(mediaTitle ?? "");
</script>

<div
  class={cn(
    "flex h-8 items-center justify-between gap-4 overflow-hidden p-1",
    reversed ? "flex-row" : "flew-row md:flex-row-reverse",
    className
  )}
  {...restProps}
>
  <div class="flex flex-1 flex-row items-center justify-start">
    <Button variant="outline" type="button" size="icon-xs" onclick={handleReverse}>
      {#if reversed}
        {#if md.current}
          <HugeiconsIcon icon={ArrowLeftFromLineIcon} class="size-4" />
        {:else}
          <HugeiconsIcon icon={ArrowUp03Icon} class="size-4" />
        {/if}
      {:else if md.current}
        <HugeiconsIcon icon={ArrowRightFromLineIcon} class="size-4" />
      {:else}
        <HugeiconsIcon icon={ArrowDownFromLineIcon} class="size-4" />
      {/if}
    </Button>
  </div>

  <p class="flex-auto truncate" title={mediaTitle}>{mediaTitle}</p>

  <div class="flex flex-1 flex-row items-center justify-end">
    <Button
      variant="outline"
      type="button"
      size="icon-xs"
      title="Copy video title"
      onclick={handleCopy}
    >
      <HugeiconsIcon icon={CopyIcon} class="size-4" />
    </Button>
  </div>
</div>
