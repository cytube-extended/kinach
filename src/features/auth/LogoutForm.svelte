<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { Logout02Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { Button } from "$lib/components/ui/button";
  import { Field, Group } from "$lib/components/ui/field";
  import { Label } from "$lib/components/ui/label";
  import { cn, lg, md } from "$lib/utils";
  import { clientStore } from "$stores/clientStore";
  import { authStore, logout } from "./auth";
  import AuthAvatar from "./AuthAvatar.svelte";

  const LOGOUT_ANIMATION_DELAY_MS = 500;

  let isSubmitting = $derived($authStore.status);
  let isUser = $derived($clientStore.rank > 0);

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    try {
      $authStore.status = true;

      if (md.current) {
        await new Promise(resolve => setTimeout(resolve, LOGOUT_ANIMATION_DELAY_MS));
      }

      await logout();
    } catch (err: unknown) {
      // TODO: Show alert?
      console.error(err);
    } finally {
      $authStore.status = false;
      $authStore.username = "";
      $authStore.password = undefined;
    }
  };

  let {
    class: className,
    ...restProps
  }: {
    class?: ClassValue;
  } = $props();
</script>

<div class={cn("", className)} {...restProps}>
  <form onsubmit={handleSubmit}>
    <Group>
      <Field
        orientation="horizontal"
        class="flex flex-row items-center justify-end gap-1.5 selection:bg-primary md:gap-2"
      >
        {#if lg.current}
          <AuthAvatar isLoading={isSubmitting} isAnon={false} isGuest={!isUser} />
          <Label class="w-auto flex-none">
            {$clientStore.name}
          </Label>
        {/if}

        <Button
          type="submit"
          variant={md.current ? "outline" : "ghost"}
          disabled={isSubmitting}
          size={md.current ? "default" : "icon-xs"}
          class={cn({
            "md:cursor-not-allowed": isSubmitting,
          })}
        >
          {#if md.current}
            Logout
          {:else}
            <HugeiconsIcon icon={Logout02Icon} class="size-4" />
          {/if}
        </Button>
      </Field>
    </Group>
  </form>
</div>
