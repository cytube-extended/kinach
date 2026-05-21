<script lang="ts">
  import FoldableLayoutItem from "$features/editor/FoldableLayoutItem.svelte";
  import LayoutEditor from "$features/editor/LayoutEditor.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { draggable } from "@thisux/sveltednd";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib/utils";
  import CytubeFluidLayout from "./CytubeFluidLayout.svelte";

  // let foldRef: HTMLElement | null = $state(null);
  // let unfoldRef: HTMLElement | null = $state(null);

  // let x = $state(0);
  // let y = $state(0);
  // let w = $state(0);
  // let h = $state(0);

  // let cells: Array<{
  //   ref: HTMLElement | null;
  //   x: number;
  //   y: number;
  //   w: number;
  //   h: number;
  // }> = $state([]);

  let {
    class: className,
    ...restProps
  }: {
    class?: ClassValue;
  } = $props();
</script>

{#snippet foldedIcon(content: string)}
  <Button class="py-8 px-6">
    {content}
  </Button>
{/snippet}

<!-- {#snippet unfoldedPanel(cells: Array<{ id: string; x: number; y: number; w: number; h: number }>)}
  {#each cells as cell}
    {@const { id, x, y, w, h } = cell}

    {#if }

    {/if}
  {/each}
{/snippet} -->

<!-- <div class={cn("", className)} {...restProps}> -->
<CytubeFluidLayout class={className} {...restProps} />
<!-- <LayoutEditor> -->
<!-- {@render foldedIcon("Chat")}
    {@render foldedIcon("Features")}
    {@render foldedIcon("Player")}
    {@render foldedIcon("Playlist")} -->
<!-- </LayoutEditor> -->
<!-- <LayoutEditor bind:foldRef bind:unfoldRef bind:x bind:y bind:w bind:h>
    <FoldableLayoutItem target={foldRef}>
      {#snippet folded({ unfold })}
        {@const id = "chat"}
        {@const content = "CH"}

        <div
          {id}
          class="px-4 py-6 bg-primary rounded-lg cursor-move select-none"
          use:draggable={{
            container: id,
            dragData: { data: "kek" },
            callbacks: {
              onDragEnd: () => {
                unfold(unfoldRef);
              },
            },
          }}
        >
          {content}
        </div>
      {/snippet}

      {#snippet unfolded({ fold, position })}
        {@const content = "Chat"}

        <div
          {@attach (el) => {
            position({ x, y, w, h });
          }}
        >
          {content}
        </div>
      {/snippet}
    </FoldableLayoutItem>
  </LayoutEditor> -->
<!-- </div> -->
