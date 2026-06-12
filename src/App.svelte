<script lang="ts" module>
  const imgLogoUrl = new URL("dist/logo.png", window.BASE_URL);
  const imgLogoSrc = imgLogoUrl.toString();
</script>

<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { onMount } from "svelte";
  import Header from "$components/layout/Header.svelte";
  import Home from "$components/layout/Home.svelte";
  import { appStore } from "$stores/appStore";
  import { clientStore } from "$stores/clientStore";
  import { socketStore } from "$stores/socketStore";

  onMount(() => {
    const prevClassNames = document.body.className;
    document.body.className = "dark min-h-screen flex flex-col";

    return () => (document.body.className = prevClassNames);
  });
</script>

<Header
  {imgLogoSrc}
  appVersion={$appStore.version}
  isConnected={$socketStore.connected}
  isLoggedIn={$clientStore.logged_in}
/>
<Home isLoggedIn={$clientStore.logged_in} class="flex-1" />
