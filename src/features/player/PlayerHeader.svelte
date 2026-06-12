<script lang="ts" module>
  const COPY_ANIMATION_DURATION = 1000;
</script>

<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import {
    CopyLinkIcon,
    ArrowBigRightDashIcon,
    ArrowBigLeftDashIcon,
    ArrowBigDownDashIcon,
    ArrowBigUpDashIcon,
    CopyIcon,
    CheckIcon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { cn, md } from "$lib/utils";

  let titleCopied = $state(false);
  let linkCopied = $state(false);

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

  const handleCopyTitle = async () => {
    if (!mediaTitle) {
      return;
    }

    if (mediaTitle === "") {
      return;
    }

    await navigator.clipboard.writeText(mediaTitle);
    titleCopied = true;

    setTimeout(() => (titleCopied = false), COPY_ANIMATION_DURATION);
  };

  const handleCopyLink = async () => {
    if (!mediaLink) {
      return;
    }

    if (mediaLink === "") {
      return;
    }

    await navigator.clipboard.writeText(mediaLink);
    linkCopied = true;

    setTimeout(() => (linkCopied = false), COPY_ANIMATION_DURATION);
  };
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
    <Button
      variant="ghost"
      type="button"
      size={md.current ? "icon-sm" : "icon-xs"}
      onclick={reverseLayout}
    >
      {#if reversed}
        {#if md.current}
          <HugeiconsIcon icon={ArrowBigLeftDashIcon} class="size-4 md:size-5" />
        {:else}
          <HugeiconsIcon icon={ArrowBigUpDashIcon} class="size-4 md:size-5" />
        {/if}
      {:else if md.current}
        <HugeiconsIcon icon={ArrowBigRightDashIcon} class="size-4 md:size-5" />
      {:else}
        <HugeiconsIcon icon={ArrowBigDownDashIcon} class="size-4 md:size-5" />
      {/if}
    </Button>
  </div>

  <p
    class="flex-auto truncate text-center text-sm font-stretch-ultra-condensed antialiased md:text-base md:font-stretch-normal md:subpixel-antialiased"
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
    {#if mediaTitle !== ""}
      <Button
        variant="ghost"
        type="button"
        size={md.current ? "icon-sm" : "icon-xs"}
        title="Copy video title"
        onclick={handleCopyTitle}
      >
        {#if titleCopied}
          <HugeiconsIcon icon={CheckIcon} class="size-4 text-green-500 md:size-5" />
        {:else}
          <HugeiconsIcon icon={CopyIcon} class="size-4 md:size-5" />
        {/if}
      </Button>
    {/if}

    {#if mediaLink !== ""}
      <Button
        variant="ghost"
        type="button"
        size={md.current ? "icon-sm" : "icon-xs"}
        title="Copy video link"
        onclick={handleCopyLink}
      >
        {#if linkCopied}
          <HugeiconsIcon icon={CheckIcon} class="size-4 text-green-500 md:size-5" />
        {:else}
          <HugeiconsIcon icon={CopyLinkIcon} class="size-4 md:size-5" />
        {/if}
      </Button>
    {/if}
  </div>
</div>
