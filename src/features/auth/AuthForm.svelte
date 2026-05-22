<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import LoginForm from "./LoginForm.svelte";
  import LogoutForm from "./LogoutForm.svelte";

  let {
    class: className,
    isLoggedIn,
    ...restProps
  }: {
    class?: ClassValue;
    isLoggedIn: boolean;
  } = $props();
</script>

{#if isLoggedIn}
  <LogoutForm class={className} {...restProps} />
{:else}
  <LoginForm class={className} {...restProps} />
{/if}
