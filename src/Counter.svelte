<script lang="ts">
  let count = $state(0);

  export function increment() {
    count++;
  }

  export function reset() {
    count = 0;
  }
</script>

<div class="svelte-counter">
  <p>Svelte counter: <strong>{count}</strong></p>
  <button onclick={() => count--}>-</button>
  <button onclick={() => count++}>+</button>
</div>
