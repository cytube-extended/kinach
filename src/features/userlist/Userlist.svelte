<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { blur } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { SpiralsIcon } from "@hugeicons/core-free-icons";
  import {
    Header,
    Media,
    Root,
    Title,
  } from "$lib/components/ui/empty/index.js";
  import { cn } from "$lib/utils";
  import { userlistStore } from "./userlist";

  type Props = HTMLAttributes<HTMLFormElement>;

  let userlist = $derived($userlistStore.userlist);
  let hasUsers = $derived(userlist.length > 0);

  let { class: className }: Props = $props();
</script>

<div class={cn(className)}>
  {#if hasUsers}
    <ul class="overflow-auto no-scrollbar">
      {#each userlist as user (user.name)}
        <li
          animate:flip={{ duration: 200, easing: quintOut }}
          transition:blur={{ duration: 200 }}
        >
          {user.name}
        </li>
      {/each}
    </ul>
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
