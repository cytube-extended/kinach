<script lang="ts" module>
  const DEFAULT_PANE_SIZE = 50;
</script>

<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { Handle, Pane, PaneGroup } from "$lib/components/ui/resizable/index.js";
  import { cn } from "$lib/utils";

  let {
    class: className,
    direction,
    defaultMainSize = DEFAULT_PANE_SIZE,
    defaultSecondarySize = DEFAULT_PANE_SIZE,
    mainPaneRef = $bindable<HTMLElement | null>(null),
    secondaryPaneRef = $bindable<HTMLElement | null>(null),
    mainClass: mainClassName,
    secondaryClass: secondaryClassName,
    ...restProps
  }: {
    class?: ClassValue;
    direction: "horizontal" | "vertical";
    defaultMainSize: number;
    defaultSecondarySize: number;
    mainPaneRef?: HTMLElement | null;
    secondaryPaneRef?: HTMLElement | null;
    mainClass?: ClassValue;
    secondaryClass?: ClassValue;
  } = $props();
</script>

<PaneGroup {direction} class={cn("", className)} {...restProps}>
  <Pane
    bind:ref={mainPaneRef}
    defaultSize={defaultMainSize}
    order={1}
    collapsible
    class={cn("", mainClassName)}
  />

  <Handle withHandle />

  <Pane
    bind:ref={secondaryPaneRef}
    defaultSize={defaultSecondarySize}
    order={2}
    collapsible
    class={cn("", secondaryClassName)}
  />
</PaneGroup>
