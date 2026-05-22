<script lang="ts" module>
  const siteAdminStyleClass = "text-purple-600";
  const channelAdminStyleClass = "text-red-600";
  const moderatorStyleClass = "text-amber-600";
  const regularStyleClass = "text-white";
  const guestStyleClass = "text-gray-600";

  const rankToClass = (rank: number) => {
    if (rank >= ranks.SITERADMIN) {
      return siteAdminStyleClass;
    }

    if (rank >= ranks.ADMIN) {
      return channelAdminStyleClass;
    }

    if (rank == ranks.MODERATOR) {
      return moderatorStyleClass;
    }

    if (rank >= ranks.USER) {
      return regularStyleClass;
    }

    return guestStyleClass;
  };
</script>

<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { SpiralsIcon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import { blur } from "svelte/transition";
  import { Header, Media, Root, Title } from "$lib/components/ui/empty/index.js";
  import {
    Root as HoverCardRoot,
    Trigger as HoverCardTrigger,
    Content as HoverCardContent,
  } from "$lib/components/ui/hover-card/index.js";
  import { cn } from "$lib/utils";
  import UserCard from "./UserCard.svelte";
  import { ranks, userlistStore, type AddUserOutputSocketData } from "./userlist";

  type Props = HTMLAttributes<HTMLElement>;

  let userlist = $derived($userlistStore.userlist);
  let hasUsers = $derived(userlist.length > 0);
  let userTarget = $state<AddUserOutputSocketData | null>(null);

  let { class: className }: Props = $props();
</script>

<div class={cn(className)}>
  {#if hasUsers}
    <HoverCardRoot>
      <ul class="no-scrollbar overflow-auto">
        {#each userlist as user (user.name)}
          <li
            animate:flip={{ duration: 200, easing: quintOut }}
            transition:blur={{ duration: 200 }}
            onmouseenter={() => (userTarget = user)}
            class={cn(rankToClass(user.rank), "font-bold")}
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
