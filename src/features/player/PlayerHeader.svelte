<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import {
    CopyLinkIcon,
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
    reverseLayout,
    mediaLink,
    mediaTitle,
    class: className,
    ...restProps
  }: {
    reversed: boolean;
    reverseLayout: () => void;
    mediaLink?: string;
    mediaTitle?: string;
    class?: ClassValue;
  } = $props();

  const handleCopyLink = () => navigator.clipboard.writeText(mediaLink ?? "");
</script>

<div
  class={cn(
    "flex items-center justify-between overflow-hidden",
    reversed ? "flex-row" : "flew-row md:flex-row-reverse",
    className
  )}
  {...restProps}
>
  <div
    class={cn(
      "flex flex-1 flex-row items-center",
      reversed ? "justify-start" : "justify-start md:justify-end"
    )}
  >
    <Button variant="outline" type="button" size="icon-xs" onclick={reverseLayout}>
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

  <p
    class="flex-auto truncate text-sm font-stretch-ultra-condensed md:text-base md:font-stretch-normal"
    title={mediaTitle}
  >
    {mediaTitle}
  </p>

  <div
    class={cn(
      "flex flex-1 flex-row items-center",
      reversed ? "justify-end" : "justify-end md:justify-start"
    )}
  >
    {#if mediaLink !== ""}
      <Button
        variant="outline"
        type="button"
        size="icon-xs"
        title="Copy video link"
        onclick={handleCopyLink}
      >
        <HugeiconsIcon icon={CopyLinkIcon} class="size-4" />
      </Button>
    {/if}
  </div>
</div>
