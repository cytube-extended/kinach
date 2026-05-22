<script lang="ts" module>
  const BODY_CLASSNAMES = "dark override-theme min-h-screen flex flex-col";
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import Header from "$components/layout/Header.svelte";
  import Home from "$components/layout/Home.svelte";

  onMount(() => {
    const prevClassNames = document.body.className;
    document.body.className = BODY_CLASSNAMES;

    return () => (document.body.className = prevClassNames);
  });
</script>

<Header />
<Home />
