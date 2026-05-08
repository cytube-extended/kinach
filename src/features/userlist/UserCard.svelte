<script lang="ts">
  import { Root, Image, Fallback } from "$lib/components/ui/avatar/index.js";
  import { type AddUserOutputSocketData } from "./userlist";

  let { user }: { user: AddUserOutputSocketData } = $props();
</script>

<div class="flex justify-between space-x-4">
  {#if user.profile.image !== ""}
    <Root>
      <Image src={user.profile.image} />
      <Fallback>Profile Image</Fallback>
    </Root>
  {/if}

  <div class="space-y-1">
    <h4 class="text-sm font-semibold">{user.name}</h4>

    {#if user.profile.text !== ""}
      <p class="text-sm">{user.profile.text}</p>
    {/if}
  </div>
</div>
