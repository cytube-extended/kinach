<script lang="ts">
  import {
    Handle,
    Pane,
    PaneGroup,
  } from "$lib/components/ui/resizable/index.js";
  import GuestLoginForm from "$features/auth/GuestLoginForm.svelte";
  import { clientStore } from "$stores/clientStore";
</script>

<PaneGroup direction="horizontal" class="w-full flex-1 border">
  <Pane defaultSize={45} minSize={25} maxSize={50}>
    <PaneGroup direction="vertical" class="flex-1">
      <Pane defaultSize={70}>
        <div class="flex flex-col h-full">
          <div class="flex flex-col items-center justify-center h-full">
            Chat
          </div>
          {#if !$clientStore.logged_in}
            <GuestLoginForm class="w-full" />
          {/if}
        </div>
      </Pane>

      <Handle />

      <Pane defaultSize={30}>
        <div class="flex flex-col h-full items-center justify-center p-6">
          <span class="font-semibold">Features</span>
        </div>
      </Pane>
    </PaneGroup>
  </Pane>

  <Handle />

  <Pane defaultSize={65} minSize={50} maxSize={75}>
    <PaneGroup direction="vertical" class="flex-1">
      <Pane defaultSize={70}>
        <div class="flex flex-row h-full items-center justify-center p-6">
          <span class="font-semibold">Player</span>
        </div>
      </Pane>
      <Handle />
      <Pane defaultSize={30}>
        <div class="flex flex-col h-full items-center justify-center p-6">
          <span class="font-semibold">Playlist</span>
        </div>
      </Pane>
    </PaneGroup>
  </Pane>
</PaneGroup>
