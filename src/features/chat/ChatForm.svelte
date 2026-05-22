<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { Sent02Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { Button } from "$lib/components/ui/button";
  import { Field, Group } from "$lib/components/ui/field";
  import { Textarea } from "$lib/components/ui/textarea";
  import { cn } from "$lib/utils";

  type Props = HTMLAttributes<HTMLFormElement>;

  let message = $state("");

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    console.log(message);

    message = "";
  };

  let { class: className }: Props = $props();
</script>

<form onsubmit={handleSubmit} class={cn(className, "flex flex-row")}>
  <Group class="flex flex-1 flex-row">
    <Field orientation="horizontal" class="flex flex-1 flex-row items-start justify-start gap-0">
      <Textarea
        required
        class="h-full flex-9 resize-none rounded-none border-none"
        autocomplete="off"
        placeholder="Chat message"
        bind:value={message}
      />

      <Button type="submit" class="h-full flex-1 rounded-none border-none">
        <HugeiconsIcon icon={Sent02Icon} class="size-5" role="button" aria-label="Send" />
      </Button>
    </Field>
  </Group>
</form>
