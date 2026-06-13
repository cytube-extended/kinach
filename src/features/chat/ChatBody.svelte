<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { Handle, Pane, PaneGroup } from "$lib/components/ui/resizable/index.js";
  import { cn, md } from "$lib/utils";

  let {
    reversed,
    leftPane = $bindable<Pane | null>(null),
    rightPane = $bindable<Pane | null>(null),
    leftPaneRef = $bindable<HTMLElement | null>(null),
    rightPaneRef = $bindable<HTMLElement | null>(null),
    class: className,
    ...restProps
  }: {
    reversed: boolean;
    leftPane: Pane | null;
    rightPane: Pane | null;
    leftPaneRef?: HTMLElement | null;
    rightPaneRef?: HTMLElement | null;
    class?: ClassValue;
  } = $props();
</script>

<PaneGroup direction="vertical" class={cn("", className)} {...restProps}>
  <Pane collapsible={false} defaultSize={80} class="flex">
    <PaneGroup direction="horizontal">
      <Pane
        collapsible
        bind:this={leftPane}
        bind:ref={leftPaneRef}
        order={1}
        defaultSize={reversed && md.current ? 20 : 80}
        maxSize={reversed && md.current ? 30 : 100}
        class="flex scrollbar-thumb-primary scrollbar-track-background overflow-y-auto!"
      />

      <Handle withHandle />

      <Pane
        collapsible
        bind:this={rightPane}
        bind:ref={rightPaneRef}
        order={2}
        defaultSize={reversed && md.current ? 80 : 20}
        maxSize={reversed && md.current ? 100 : 30}
        class="flex scrollbar-thumb-primary scrollbar-track-background overflow-y-auto!"
      />
    </PaneGroup>
  </Pane>
</PaneGroup>
