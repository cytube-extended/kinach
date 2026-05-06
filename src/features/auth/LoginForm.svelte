<script lang="ts" module>
  import {
    maxLength,
    minLength,
    pipe,
    regex,
    safeParse,
    string,
  } from "valibot";

  const usernameSchema = pipe(
    string(),
    minLength(1, "Min 1 character"),
    maxLength(20, "Max 20 characters"),
    regex(/^[A-Za-zА-Яа-я0-9_-]+$/, "Only letters, numbers, -, or _"),
  );

  const passwordSchema = pipe(string(), maxLength(100, "Max 100 characters"));
</script>

<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Field, Group } from "$lib/components/ui/field";
  import { Input } from "$lib/components/ui/input";
  import { login } from "./auth";
  import AuthAvatar from "./AuthAvatar.svelte";

  let isSubmitting = $state(false);

  let username = $state("");
  let usernameParseResult = $derived(safeParse(usernameSchema, username));
  let isValidUsername = $derived(usernameParseResult.success);
  let showUsernameError = $derived(username !== "" && !isValidUsername);
  const usernameError = $derived(
    !usernameParseResult.success
      ? usernameParseResult.issues.map((i) => i.message).join(", ")
      : "",
  );

  let password = $state("");
  let disablePassword = $derived(!isValidUsername || isSubmitting);
  let passwordParseResult = $derived(safeParse(passwordSchema, password));
  let isValidPassword = $derived(passwordParseResult.success);
  let showPasswordError = $derived(password !== "" && !isValidPassword);
  let passwordError = $derived(
    !passwordParseResult.success
      ? passwordParseResult.issues.map((i) => i.message).join(", ")
      : "",
  );

  let disableSubmit = $derived(
    isSubmitting || !isValidUsername || (isValidUsername && !isValidPassword),
  );

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    if (disableSubmit) {
      return;
    }

    try {
      isSubmitting = true;

      await new Promise((resolve) => setTimeout(resolve, 500));
      await login(username, password);
    } catch (err: unknown) {
      // TODO: Show alert?
      console.error(err);
    } finally {
      isSubmitting = false;
    }
  };
</script>

<div class="w-full max-w-md ml-auto">
  <form onsubmit={handleSubmit}>
    <Group>
      <Field
        orientation="responsive"
        class="flex flex-row items-center justify-end selection:bg-primary"
      >
        <AuthAvatar isLoading={isSubmitting} isGuest={password === ""} />
        <Input
          required
          id="login-username-input"
          type="text"
          autocomplete="name"
          placeholder="Username"
          bind:value={username}
          aria-invalid={showUsernameError}
          title={showUsernameError ? usernameError : ""}
          disabled={isSubmitting}
        />
        <Input
          name="password"
          type="password"
          autocomplete="current-password"
          placeholder="Password"
          bind:value={password}
          aria-invalid={showPasswordError}
          title={showPasswordError ? passwordError : ""}
          disabled={disablePassword}
        />
        <Button type="submit" disabled={disableSubmit}>Login</Button>
      </Field>
    </Group>
  </form>
</div>
