<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { Field, Group } from "$lib/components/ui/field";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { cn } from "$lib/utils";
  import { authStore, login } from "./auth";

  type Props = HTMLAttributes<HTMLFormElement>;

  let username = $derived($authStore.username);
  let isSubmitting = $derived($authStore.status);

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    try {
      $authStore.status = true;

      await new Promise((resolve) => setTimeout(resolve, 500));
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

  let { class: className }: Props = $props();
</script>

<form onsubmit={handleSubmit} class={cn(className)}>
  <Group>
    <Field
      orientation="horizontal"
      class="flex flex-row items-start justify-start gap-0"
    >
      <Button
        type="submit"
        class="flex-2 rounded-none border-none"
        disabled={$authStore.username === ""}
      >
        Guest Login
      </Button>

      <Input
        required
        class="flex-8 rounded-none border-none"
        type="text"
        autocomplete="name"
        placeholder="Username"
        bind:value={$authStore.username}
        disabled={isSubmitting}
      />
    </Field>
  </Group>
</form>
