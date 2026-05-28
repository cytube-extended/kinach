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

<div class={cn("truncate", className)} {...restProps}>
  {title}
</div>
