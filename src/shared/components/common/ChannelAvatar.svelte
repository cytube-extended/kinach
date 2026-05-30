<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import {
    Badge as AvatarBadge,
    Fallback as AvatarFallback,
    Image as AvatarImage,
    Root as AvatarRoot,
  } from "$lib/components/ui/avatar";
  import { cn, md } from "$lib/utils";

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

  let title = $derived(isConnected ? "Socket: Connected" : "Socket: Disconnected");
</script>

<div class={cn("", className)} {...restProps}>
  <AvatarRoot size={md.current ? "default" : "sm"} class="rounded-lg">
    <AvatarImage src={imgSrc} alt="Channel Logo" />

    {#if typeof isConnected === "boolean"}
      <AvatarBadge {title} class={cn(isConnected ? "bg-green-500" : "bg-red-500")} />
    {/if}

    <AvatarFallback>Channel Logo</AvatarFallback>
  </AvatarRoot>
</div>
