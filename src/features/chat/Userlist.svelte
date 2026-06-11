<script lang="ts" module>
  const siteAdminStyleClass = "text-purple-600";
  const channelAdminStyleClass = "text-red-600";
  const moderatorStyleClass = "text-amber-600";
  const regularStyleClass = "text-white";
  const guestStyleClass = "text-gray-600";

  const rankToClass = (rank: number): ClassValue => {
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
  import type { ClassValue } from "svelte/elements";
  import { SpiralsIcon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import { blur } from "svelte/transition";
  import {
    Root as EmptyRoot,
    Header as EmptyHeader,
    Media as EmptyMedia,
    Title as EmptyTitle,
  } from "$lib/components/ui/empty/index.js";
  import {
    Root as HoverCardRoot,
    Trigger as HoverCardTrigger,
    Content as HoverCardContent,
  } from "$lib/components/ui/hover-card/index.js";
  import { cn } from "$lib/utils";
  import UserCard from "./UserCard.svelte";
  import { ranks, userlistStore, type AddUserOutputSocketData } from "./userlist";

  let userlist = $derived($userlistStore.userlist);
  let hasUsers = $derived(userlist.length > 0);
  let userTarget = $state<AddUserOutputSocketData | null>(null);

  let { class: className, ...restProps }: { class?: ClassValue } = $props();
</script>

<div class={cn("flex", className)} {...restProps}>
  {#if hasUsers}
    <HoverCardRoot>
      <ul class="no-scrollbar overflow-auto">
        {#each userlist as user (user.name)}
          <li
            animate:flip={{ duration: 200, easing: quintOut }}
            transition:blur={{ duration: 200 }}
            onmouseenter={() => (userTarget = user)}
            class={cn(
              "text-sm font-bold font-stretch-condensed md:text-base md:font-extrabold md:font-stretch-normal",
              rankToClass(user.rank)
            )}
          >
            <HoverCardTrigger>
              {user.name}
            </HoverCardTrigger>
          </li>
        {/each}
      </ul>
      {#if userTarget}
        {const username = $derived(userTarget.name)}
        {const description = $derived(userTarget.profile.text)}
        {const imgSrc = $derived(userTarget.profile.image)}

        <HoverCardContent>
          <UserCard {username} {description} {imgSrc} />
        </HoverCardContent>
      {/if}
    </HoverCardRoot>
  {:else}
    <EmptyRoot class="flex-1">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <HugeiconsIcon
            icon={SpiralsIcon}
            class="size-5 motion-safe:animate-[spin_6s_linear_infinite]"
          />
        </EmptyMedia>
        <EmptyTitle class="select-none">No users</EmptyTitle>
      </EmptyHeader>
    </EmptyRoot>
  {/if}
</div>
