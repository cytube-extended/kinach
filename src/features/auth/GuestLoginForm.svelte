<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { Button } from "$lib/components/ui/button";
  import { Field, Group } from "$lib/components/ui/field";
  import { Input } from "$lib/components/ui/input";
  import { cn, md } from "$lib/utils";
  import { authStore, login } from "./auth";

  const LOGIN_ANIMATION_DELAY_MS = 500;

  let username = $derived($authStore.username);
  let isSubmitting = $derived($authStore.status);

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    try {
      $authStore.status = true;

      if (md.current) {
        await new Promise(resolve => setTimeout(resolve, LOGIN_ANIMATION_DELAY_MS));
      }

      await login(username);
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

<form onsubmit={handleSubmit} class={cn("", className)} {...restProps}>
  <Group>
    <Field orientation="horizontal" class="flex flex-row items-start justify-start gap-0">
      <Button type="submit" class="flex-2 rounded-none border-none" disabled={username === ""}>
        Guest Login
      </Button>

      <Input
        required
        class="flex-8 rounded-none border-none text-sm font-stretch-condensed md:text-base md:font-stretch-normal"
        type="text"
        autocomplete="name"
        placeholder="Username"
        bind:value={$authStore.username}
        disabled={isSubmitting}
      />
    </Field>
  </Group>
</form>
