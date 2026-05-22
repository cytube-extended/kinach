<script lang="ts">
  let { version = "main" }: { version?: string } = $props();
</script>

<div class="relative h-15 w-15 shrink-0 overflow-hidden">
  <div
    class="pointer-events-none absolute top-[18%] left-[-75%] w-[250%] -rotate-45 bg-primary py-[0.25em] pr-[1.5em] text-center text-[0.6rem] leading-none font-bold text-white shadow-md"
  >
    {version}
  </div>
</div>
