<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Field, Group } from "$lib/components/ui/field";
  import { Label } from "$lib/components/ui/label";
  import { cn } from "$lib/utils";
  import { clientStore } from "$stores/clientStore";
  import { authStore, logout } from "./auth";
  import AuthAvatar from "./AuthAvatar.svelte";

  const LOGOUT_DELAY_MS = 500;

  let isSubmitting = $derived($authStore.status);
  let isUser = $derived($clientStore.rank > 0);

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    try {
      $authStore.status = true;

      await new Promise(resolve => setTimeout(resolve, LOGOUT_DELAY_MS));
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
</script>

<div class="ml-auto w-full max-w-md">
  <form onsubmit={handleSubmit}>
    <Group>
      <Field
        orientation="responsive"
        class="flex flex-row items-center justify-end selection:bg-primary"
      >
        <AuthAvatar isLoading={isSubmitting} isAnon={false} isGuest={!isUser} />
        <Label class="w-auto flex-none">
          {$clientStore.name}
        </Label>
        <Button
          type="submit"
          disabled={isSubmitting}
          class={cn({
            "md:cursor-not-allowed": isSubmitting,
          })}
        >
          Logout
        </Button>
      </Field>
    </Group>
  </form>
</div>
