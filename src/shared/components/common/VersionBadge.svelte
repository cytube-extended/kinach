<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cn, isDesktop } from "$lib/utils";

  let {
    children,
    class: className,
    version = "main",
    ...restProps
  }: HTMLAttributes<HTMLDivElement> & { version?: string } = $props();

  let title = $derived(isDesktop.current ? `App Version: ${version}` : "");
</script>

<div class={cn("relative h-15 w-15 shrink-0 overflow-hidden", className)} {...restProps}>
  <div
    class="absolute top-[18%] left-[-75%] w-[250%] -rotate-45 bg-primary py-[0.25em] pr-[1.5em] text-center text-[0.6rem] leading-none font-bold shadow-md"
    {title}
  >
    {version}

    {#if children}
      {children}
    {/if}
  </div>
</div>
