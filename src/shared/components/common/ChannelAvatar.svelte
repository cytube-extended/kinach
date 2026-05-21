<script lang="ts">
  import { Badge, Fallback, Image, Root } from "$lib/components/ui/avatar";
  import { cn } from "$lib/utils";
  import type { ClassValue } from "svelte/elements";

  let {
    class: className,
    imgSrc,
    fallbackText = "Channel Logo",
    isConnected,
    ...restProps
  }: {
    class?: ClassValue;
    imgSrc: string;
    fallbackText?: string;
    isConnected?: boolean;
  } = $props();

  let statusClass = $derived(isConnected ? "bg-green-500" : "bg-red-500");
  let title = $derived(
    isConnected ? "Socket: Connected" : "Socket: Disconnected",
  );
</script>

<div class={cn("", className)} {...restProps}>
  <Root class="rounded-lg">
    <Image src={imgSrc} alt={fallbackText} />

    {#if typeof isConnected === "boolean"}
      <Badge class={statusClass} {title} />
    {/if}

    <Fallback>{fallbackText}</Fallback>
  </Root>
</div>
