<script lang="ts" module>
  const MAX_CHAT_MESSAGE_LENGTH = 320;
</script>

<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { Sent02Icon, CrazyIcon, Attachment02Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { quintIn } from "svelte/easing";
  import { scale } from "svelte/transition";
  import {
    Root as InputGroupRoot,
    Addon as InputGroupAddon,
    Button as InputGroupButton,
    Textarea as InputGroupTextarea,
    Text as InputGroupText,
  } from "$lib/components/ui/input-group/index.js";
  import { Separator } from "$lib/components/ui/separator";
  import { cn, md } from "$lib/utils";

  let message = $state("");

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();

    console.log(message);

    message = "";
  };

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    console.log(message);

    message = "";
  };

  let { class: className, ...restProps }: { class?: ClassValue } = $props();
</script>

<form onsubmit={handleSubmit} class={cn("flex", className)} {...restProps}>
  <InputGroupRoot class="flex-1 rounded-none border-none">
    <InputGroupTextarea
      bind:value={message}
      onkeydown={handleKeydown}
      maxlength={MAX_CHAT_MESSAGE_LENGTH}
      placeholder="Chat message"
      class="max-h-48 text-base font-stretch-ultra-condensed md:text-sm md:font-stretch-normal"
    />

    <InputGroupAddon align="block-end" class="flex flex-row justify-end">
      <InputGroupButton type="button" variant="outline" size={md.current ? "icon-sm" : "icon-xs"}>
        <HugeiconsIcon icon={Attachment02Icon} class="size-4 md:size-5" />
      </InputGroupButton>

      <Separator orientation="vertical" />

      <InputGroupText>
        {const current = $derived(MAX_CHAT_MESSAGE_LENGTH - message.length)}
        {const isWarning = $derived(current < MAX_CHAT_MESSAGE_LENGTH * 0.25)}
        {const isMax = $derived(current === 0)}

        <span
          class="transition-colors duration-1000 data-[is-warning=true]:font-bold data-[is-warning=true]:text-amber-400 data-[is-warning=true]:data-[is-max=true]:font-extrabold data-[is-warning=true]:data-[is-max=true]:text-destructive"
          data-is-warning={isWarning}
          data-is-max={isMax}
        >
          {#if isWarning}
            {#key current}
              <p
                in:scale={{
                  easing: quintIn,
                  duration: 80,
                  start: 1.2,
                  opacity: 1,
                }}
              >
                {current}
              </p>
            {/key}
          {:else}
            <p>{current}</p>
          {/if}
        </span>
        / {MAX_CHAT_MESSAGE_LENGTH}
      </InputGroupText>

      <InputGroupButton
        type="button"
        variant="outline"
        class="ms-auto"
        size={md.current ? "icon-sm" : "icon-xs"}
      >
        <HugeiconsIcon icon={CrazyIcon} class="size-4 md:size-5" />
      </InputGroupButton>

      <Separator orientation="vertical" />

      <InputGroupButton type="submit" variant="default" size={md.current ? "icon-sm" : "icon-xs"}>
        <HugeiconsIcon icon={Sent02Icon} class="size-4 md:size-5" />
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroupRoot>
</form>
