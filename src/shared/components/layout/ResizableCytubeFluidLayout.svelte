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
    mainPane = $bindable<Pane | null>(null),
    secondaryPane = $bindable<Pane | null>(null),
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
    mainPane: Pane | null;
    secondaryPane: Pane | null;
    mainPaneRef?: HTMLElement | null;
    secondaryPaneRef?: HTMLElement | null;
    mainClass?: ClassValue;
    secondaryClass?: ClassValue;
  } = $props();
</script>

<PaneGroup {direction} class={cn("", className)} {...restProps}>
  <Pane
    bind:this={mainPane}
    bind:ref={mainPaneRef}
    defaultSize={defaultMainSize}
    order={1}
    collapsible
    class={cn("", mainClassName)}
  />

  <Handle withHandle />

  <Pane
    bind:this={secondaryPane}
    bind:ref={secondaryPaneRef}
    defaultSize={defaultSecondarySize}
    order={2}
    collapsible
    class={cn("", secondaryClassName)}
  />
</PaneGroup>
