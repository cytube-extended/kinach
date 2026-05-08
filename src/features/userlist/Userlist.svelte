<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { blur } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { SpiralsIcon } from "@hugeicons/core-free-icons";
  import { cn } from "$lib/utils";
  import {
    Header,
    Media,
    Root,
    Title,
  } from "$lib/components/ui/empty/index.js";
  import {
    Root as HoverCardRoot,
    Trigger as HoverCardTrigger,
    Content as HoverCardContent,
  } from "$lib/components/ui/hover-card/index.js";
  import { userlistStore, type AddUserOutputSocketData } from "./userlist";
  import UserCard from "./UserCard.svelte";

  type Props = HTMLAttributes<HTMLFormElement>;

  let userlist = $derived($userlistStore.userlist);
  let hasUsers = $derived(userlist.length > 0);
  let userTarget = $state<AddUserOutputSocketData | null>(null);

  let { class: className }: Props = $props();
</script>

<div class={cn(className)}>
  {#if hasUsers}
    <HoverCardRoot>
      <ul class="overflow-auto no-scrollbar">
        {#each userlist as user (user.name)}
          <li
            animate:flip={{ duration: 200, easing: quintOut }}
            transition:blur={{ duration: 200 }}
            onmouseenter={() => (userTarget = user)}
          >
            <HoverCardTrigger>
              {user.name}
            </HoverCardTrigger>
          </li>
        {/each}
      </ul>
      {#if userTarget}
        <HoverCardContent>
          <UserCard user={userTarget} />
        </HoverCardContent>
      {/if}
    </HoverCardRoot>
  {:else}
    <Root>
      <Header>
        <Media variant="icon">
          <HugeiconsIcon
            icon={SpiralsIcon}
            class="size-5 motion-safe:animate-[spin_6s_linear_infinite]"
          />
        </Media>
        <Title class="select-none">No users</Title>
      </Header>
    </Root>
  {/if}
</div>
