<script lang="ts">
  import LoginForm from "./LoginForm.svelte";
  import LogoutForm from "./LogoutForm.svelte";

  let { isLoggedIn }: { isLoggedIn: boolean } = $props();
</script>

{#if isLoggedIn}
  <LogoutForm />
{:else}
  <LoginForm />
{/if}
