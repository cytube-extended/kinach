<script lang="ts">
  import { onMount } from "svelte";
  import Header from "$components/layout/Header.svelte";
  import Home from "$components/layout/Home.svelte";
  import LayoutEditor from "$features/editor/LayoutEditor.svelte";
  import {
    Root as TabsRoot,
    List as TabsList,
    Trigger as TabsTrigger,
    Content as TabsContent,
  } from "$lib/components/ui/tabs";
  import { fade } from "svelte/transition";

  onMount(() => {
    const prevClassNames = document.body.className;
    document.body.className = "dark override-theme min-h-screen flex flex-col";

    return () => (document.body.className = prevClassNames);
  });
</script>

<TabsRoot value="layout" class="gap-0">
  <Header>
    <div class="flex flex-row items-center justify-center">
      <TabsList>
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="layout">Layout</TabsTrigger>
      </TabsList>
    </div>
  </Header>

  <main class="flex-1 flex flex-row items-center justify-center min-h-screen">
    <TabsContent value="home">
      <Home class="flex-1 w-full min-h-screen" />
    </TabsContent>

    <TabsContent
      value="layout"
      class="flex-1 flex flex-col items-center justify-center"
    >
      <LayoutEditor class="flex-1" />
    </TabsContent>
  </main>
</TabsRoot>
