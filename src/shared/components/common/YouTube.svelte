<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib/utils";

  let {
    videoId,
    autoplay = true,
    autohide = true,
    controls = true,
    class: className,
    ...restProps
  }: {
    videoId: string;
    autoplay?: boolean;
    autohide?: boolean;
    controls?: boolean;
    class?: ClassValue;
  } = $props();

  const params = $derived({
    autohide: autohide ? "1" : "0",
    autoplay: autoplay ? "1" : "0",
    controls: controls ? "1" : "0",
    enablejsapi: "1",
  });
  const queryParams = $derived(new URLSearchParams(params).toString());

  let ytSrc = $derived(`https://www.youtube.com/embed/${videoId}?${queryParams}`);
</script>

<iframe src={ytSrc} class={cn("", className)} {...restProps}></iframe>
