<script lang="ts" module>
  export const youtubePlayer =
    (params: Options): Attachment<HTMLElement> =>
    el => {
      const player = createYoutubePlayer(el, params);

      return () => {
        player.destroy();
      };
    };
</script>

<script lang="ts">
  import type { Attachment } from "svelte/attachments";
  import type { ClassValue } from "svelte/elements";
  import type { Options } from "youtube-player/dist/types";
  import createYoutubePlayer from "youtube-player";
  import { cn } from "$lib/utils";

  let {
    videoId,
    playerVars,
    class: className,
    ...restProps
  }: {
    class?: ClassValue;
  } & Options = $props();
</script>

<div
  {@attach youtubePlayer({
    videoId,
    playerVars,
  })}
  class={cn("", className)}
  {...restProps}
></div>
