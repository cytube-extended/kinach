<script lang="ts">
  import LoginForm from "./LoginForm.svelte";
  import LogoutForm from "./LogoutForm.svelte";
  import type { ClassValue } from "svelte/elements";

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
