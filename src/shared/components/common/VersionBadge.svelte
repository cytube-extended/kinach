<script lang="ts">
  let { version = "main" }: { version?: string } = $props();
</script>

<div class="relative w-15 h-15 shrink-0 overflow-hidden">
  <div
    class="absolute top-[18%] left-[-75%] w-[250%] py-[0.25em] pr-[1.5em] -rotate-45 bg-primary text-white text-[0.6rem] font-bold text-center shadow-md leading-none pointer-events-none"
  >
    {version}
  </div>
</div>
