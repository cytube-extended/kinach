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
  class={cn("flex h-6 flex-row items-center justify-start border-b px-1 py-3 md:h-7", className)}
  {...restProps}
>
  <p
    class="truncate text-sm font-stretch-ultra-condensed antialiased md:text-base md:font-stretch-normal md:subpixel-antialiased"
  >
    {title}
  </p>
</div>
