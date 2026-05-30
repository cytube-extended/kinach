<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib/utils";

  let {
    title,
    class: className,
    ...restProps
  }: {
    title: string;
    class?: ClassValue;
  } = $props();
</script>

<div
  class={cn("flex h-4 flex-row items-center justify-start border-b px-1 md:h-7 md:p-1 ", className)}
  {...restProps}
>
  <p class="truncate text-sm font-stretch-ultra-condensed md:text-base md:font-stretch-normal">
    {title}
  </p>
</div>
