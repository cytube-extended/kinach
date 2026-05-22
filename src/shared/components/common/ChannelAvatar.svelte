<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import {
    Badge as AvatarBadge,
    Fallback as AvatarFallback,
    Image as AvatarImage,
    Root as AvatarRoot,
  } from "$lib/components/ui/avatar";
  import { cn } from "$lib/utils";

  let {
    class: className,
    imgSrc,
    isConnected,
    ...restProps
  }: {
    class?: ClassValue;
    imgSrc: string;
    isConnected?: boolean;
  } = $props();

  let statusClass = $derived(isConnected ? "bg-green-500" : "bg-red-500");
  let title = $derived(isConnected ? "Socket: Connected" : "Socket: Disconnected");
</script>

<div class={cn("", className)} {...restProps}>
  <AvatarRoot class="rounded-lg">
    <AvatarImage src={imgSrc} alt="Channel Logo" />

    {#if typeof isConnected === "boolean"}
      <AvatarBadge class={statusClass} {title} />
    {/if}

    <AvatarFallback>Channel Logo</AvatarFallback>
  </AvatarRoot>
</div>
