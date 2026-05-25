<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib/utils";

  let {
    class: className,
    ...restProps
  }: {
    class?: ClassValue;
  } = $props();
</script>

<div class={cn("", className)} {...restProps}>
  {#each { length: 100 }, index}
    <div>
      {index} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, vitae nihil labore
      nesciunt eius tenetur nostrum exercitationem reiciendis, illum minima, doloribus distinctio aspernatur.
      Veniam sint a, explicabo dolore harum ducimus?
    </div>
  {/each}
</div>
