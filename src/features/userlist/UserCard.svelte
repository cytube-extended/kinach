<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { Root, Image, Fallback } from "$lib/components/ui/avatar/index.js";
  import { cn } from "$lib/utils";

  let {
    username,
    description,
    imgSrc,
    class: className,
    ...restProps
  }: {
    username: string;
    description?: string;
    imgSrc?: string;
    class?: ClassValue;
  } = $props();
</script>

<div class={cn("flex justify-between space-x-4", className)} {...restProps}>
  {#if imgSrc !== ""}
    <Root>
      <Image src={imgSrc} />
      <Fallback>Profile Image</Fallback>
    </Root>
  {/if}

  <div class="space-y-1">
    <h4 class="text-sm font-semibold">{username}</h4>

    {#if description !== ""}
      <p class="text-sm">{description}</p>
    {/if}
  </div>
</div>
