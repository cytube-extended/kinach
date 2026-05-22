<script lang="ts">
  import GuestLoginForm from "$features/auth/GuestLoginForm.svelte";
  import ChatForm from "$features/chat/ChatForm.svelte";
  import Userlist from "$features/userlist/Userlist.svelte";
  import { Handle, Pane, PaneGroup } from "$lib/components/ui/resizable/index.js";
  import { clientStore } from "$stores/clientStore";
</script>

<PaneGroup direction="horizontal" class="w-full flex-1 border">
  <Pane defaultSize={45} minSize={25} maxSize={50}>
    <PaneGroup direction="vertical" class="flex-1">
      <Pane defaultSize={70}>
        <PaneGroup direction="vertical" class="flex h-full flex-col">
          <Pane defaultSize={90}>
            <PaneGroup direction="horizontal">
              <Pane defaultSize={20}>
                <Userlist class="flex h-full flex-col items-start justify-start px-1 py-0.5" />
              </Pane>

              <Handle />

              <Pane defaultSize={80} class="flex h-full flex-col items-center justify-center">
                Chat
              </Pane>
            </PaneGroup>
          </Pane>

          <Handle />

          {#if $clientStore.logged_in}
            <Pane defaultSize={10} minSize={10} maxSize={80} class="flex">
              <ChatForm class="flex-1 flex-row" />
            </Pane>
          {:else}
            <GuestLoginForm class="w-full" />
          {/if}
        </PaneGroup>
      </Pane>

      <Handle />

      <Pane defaultSize={30}>
        <div class="flex h-full flex-col items-center justify-center p-6">
          <span class="font-semibold">Features</span>
        </div>
      </Pane>
    </PaneGroup>
  </Pane>

  <Handle />

  <Pane defaultSize={65} minSize={50} maxSize={75}>
    <PaneGroup direction="vertical" class="flex-1">
      <Pane defaultSize={70}>
        <div class="flex h-full flex-row items-center justify-center p-6">
          <span class="font-semibold">Player</span>
        </div>
      </Pane>
      <Handle />
      <Pane defaultSize={30}>
        <div class="flex h-full flex-col items-center justify-center p-6">
          <span class="font-semibold">Playlist</span>
        </div>
      </Pane>
    </PaneGroup>
  </Pane>
</PaneGroup>
