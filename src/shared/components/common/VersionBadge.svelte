<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { cn, md } from "$lib/utils";

  let {
    appVersion = "unknown",
    class: className,
    ...restProps
  }: {
    appVersion: string;
    class?: ClassValue;
  } = $props();

  let title = $derived(md.current ? `App Version: ${appVersion}` : "");
</script>

<div class={cn("relative h-15 w-15 shrink-0 overflow-hidden", className)} {...restProps}>
  <div
    class="absolute top-[18%] -left-full w-[250%] -rotate-45 bg-primary py-[0.25em] text-center text-[0.5rem] leading-none font-bold shadow-md md:left-[-75%] md:pr-6 md:text-[0.6rem]"
    {title}
  >
    {appVersion}
  </div>
</div>
