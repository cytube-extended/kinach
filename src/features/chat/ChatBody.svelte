<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { Handle, Pane, PaneGroup } from "$lib/components/ui/resizable/index.js";
  import { cn } from "$lib/utils";

  let {
    reversed,
    leftPaneRef = $bindable<HTMLElement | null>(null),
    rightPaneRef = $bindable<HTMLElement | null>(null),
    class: className,
    ...restProps
  }: {
    reversed: boolean;
    leftPaneRef?: HTMLElement | null;
    rightPaneRef?: HTMLElement | null;
    class?: ClassValue;
  } = $props();
</script>

<PaneGroup direction="vertical" class={cn("", className)} {...restProps}>
  <Pane collapsible={false} defaultSize={80} class="flex">
    <PaneGroup direction="horizontal">
      <Pane
        bind:ref={leftPaneRef}
        order={1}
        defaultSize={reversed ? 20 : 80}
        maxSize={reversed ? 30 : 100}
        class="flex scrollbar-thumb-primary scrollbar-track-background overflow-y-auto!"
      />

      <Handle withHandle />

      <Pane
        bind:ref={rightPaneRef}
        order={2}
        defaultSize={reversed ? 80 : 20}
        maxSize={reversed ? 100 : 30}
        class="flex scrollbar-thumb-primary scrollbar-track-background overflow-y-auto!"
      />
    </PaneGroup>
  </Pane>
</PaneGroup>
