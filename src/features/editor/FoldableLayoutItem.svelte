<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";
  import Portal from "$components/common/Portal.svelte";
  import { GridItem } from "@appulsauce/svelte-grid";

  import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";

  type Props = HTMLAttributes<HTMLDivElement> & {
    target: HTMLElement | null;
    folded: Snippet<[{ unfold: (target: HTMLElement | null) => void }]>;
    unfolded: Snippet<
      [
        {
          fold: (target: HTMLElement | null) => void;
          position: (dimensions: {
            x: number;
            y: number;
            w: number;
            h: number;
          }) => void;
        },
      ]
    >;
  };

  let { class: className, target, folded, unfolded }: Props = $props();

  let isFolded = $state(true);
  let x = $state(0);
  let y = $state(0);
  let w = $state(0);
  let h = $state(0);

  const toggle = (t: HTMLElement | null) => {
    isFolded = !isFolded;
    target = t;
  };
</script>

{#if target}
  <div class={cn(className)}>
    <Portal {target}>
      {#if isFolded}
        {@render folded({ unfold: toggle })}
      {:else}
        <!-- {@render unfolded({ fold: toggle })} -->

        <GridItem
          {x}
          {y}
          {w}
          {h}
          resizable={true}
          class="flex flex-col items-center justify-between bg-border rounded-lg p-2"
        >
          {#snippet moveHandle({ moveStart })}
            <div
              class="flex flex-row justify-start w-full"
              role="button"
              tabindex="0"
              onpointerdown={moveStart}
            >
              <button class="cursor-move size-5">⠿</button>
            </div>
          {/snippet}

          {#snippet children()}
            <div
              class="w-full h-full flex flex-col items-center justify-center"
            >
              {@render unfolded({
                fold: toggle,
                position: ({ x: _x, y: _y, w: _w, h: _h }) => {
                  x = _x;
                  y = _y;
                  w = _w;
                  h = _h;
                },
              })}
            </div>
          {/snippet}

          {#snippet resizeHandle({ resizeStart })}
            <div
              class="flex flex-row justify-end w-full cursor-se-resize"
              role="button"
              tabindex="0"
              onpointerdown={resizeStart}
            >
              <button class="cursor-se-resize rotate-45">
                <HugeiconsIcon icon={ArrowRight01Icon} class="size-5" />
              </button>
            </div>
          {/snippet}
        </GridItem>
      {/if}
    </Portal>
  </div>
{/if}
