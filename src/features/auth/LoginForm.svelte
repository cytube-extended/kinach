<script lang="ts" module>
  import { maxLength, minLength, pipe, regex, safeParse, string } from "valibot";

  const USERNAME_MIN_LENGTH = 1;
  const USERNAME_MAX_LENGTH = 20;
  const PASSWORD_MAX_LENGTH = 100;

  const usernameSchema = pipe(
    string(),
    minLength(USERNAME_MIN_LENGTH, "Min 1 character"),
    maxLength(USERNAME_MAX_LENGTH, "Max 20 characters"),
    regex(/^[A-Za-zА-Яа-я0-9_-]+$/, "Only letters, numbers, -, or _")
  );

  const passwordSchema = pipe(string(), maxLength(PASSWORD_MAX_LENGTH, "Max 100 characters"));
</script>

<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Field, Group } from "$lib/components/ui/field";
  import { Input } from "$lib/components/ui/input";
  import { cn } from "$lib/utils";
  import { authStore, login } from "./auth";
  import AuthAvatar from "./AuthAvatar.svelte";

  const LOGIN_DELAY_MS = 500;

  let isSubmitting = $derived($authStore.status);

  let username = $derived($authStore.username);
  let usernameParseResult = $derived(safeParse(usernameSchema, username));
  let isValidUsername = $derived(usernameParseResult.success);
  let showUsernameError = $derived(username !== "" && !isValidUsername);
  let usernameError = $derived(
    usernameParseResult.success
      ? ""
      : usernameParseResult.issues.map(issue => issue.message).join(", ")
  );

  let password = $derived($authStore.password || "");
  let disablePassword = $derived(!isValidUsername || isSubmitting);
  let passwordParseResult = $derived(safeParse(passwordSchema, password));
  let isValidPassword = $derived(passwordParseResult.success);
  let showPasswordError = $derived(password !== "" && !isValidPassword);
  let passwordError = $derived(
    passwordParseResult.success
      ? ""
      : passwordParseResult.issues.map(issue => issue.message).join(", ")
  );

  let disableSubmit = $derived(
    isSubmitting || !isValidUsername || (isValidUsername && !isValidPassword)
  );

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    if (disableSubmit) {
      return;
    }

    try {
      $authStore.status = true;

      await new Promise(resolve => setTimeout(resolve, LOGIN_DELAY_MS));
      await login(username, password);
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
      <Field orientation="responsive" class="flex flex-row items-center justify-end">
        <AuthAvatar
          isLoading={isSubmitting}
          isAnon={username === "" && password === ""}
          isGuest={password === ""}
        />
        <Input
          required
          type="text"
          autocomplete="name"
          placeholder="Username"
          bind:value={$authStore.username}
          aria-invalid={showUsernameError}
          title={showUsernameError ? usernameError : ""}
          disabled={isSubmitting}
          class={cn({
            "md:cursor-not-allowed": isSubmitting,
          })}
        />
        <Input
          name="password"
          type="password"
          autocomplete="current-password"
          placeholder="Password"
          bind:value={$authStore.password}
          aria-invalid={showPasswordError}
          title={showPasswordError ? passwordError : ""}
          disabled={disablePassword}
          class={cn({
            "md:cursor-not-allowed": disablePassword,
          })}
        />
        <Button
          type="submit"
          disabled={disableSubmit}
          class={cn({
            "md:cursor-not-allowed": disableSubmit,
          })}
        >
          Login
        </Button>
      </Field>
    </Group>
  </form>
</div>
