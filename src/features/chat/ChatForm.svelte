<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { Sent02Icon, CrazyIcon, Attachment02Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import {
    Root as InputGroupRoot,
    Addon as InputGroupAddon,
    Button as InputGroupButton,
  } from "$lib/components/ui/input-group/index.js";
  import { Separator } from "$lib/components/ui/separator";
  import { cn, lg } from "$lib/utils";

  let message = $state("");

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    console.log(message);

    message = "";
  };

  let { class: className, ...restProps }: { class?: ClassValue } = $props();
</script>

<form onsubmit={handleSubmit} class={cn("flex", className)} {...restProps}>
  <InputGroupRoot class="flex h-full flex-1 flex-col justify-end rounded-none border-none">
    <textarea
      data-slot="input-group-control"
      class="flex field-sizing-fixed h-full w-full flex-1 resize-none rounded-none border-none bg-transparent px-4 py-2 text-base ring-0 outline-none"
      placeholder="Chat message"
      bind:value={message}
    ></textarea>

    <InputGroupAddon align="block-end" class="flex flex-row justify-end">
      <InputGroupButton size={lg.current ? "sm" : "icon-sm"} variant="outline" type="button">
        <HugeiconsIcon icon={Attachment02Icon} class="size-5" />
        {#if lg.current}
          Files
        {/if}
      </InputGroupButton>

      <InputGroupButton
        class="ms-auto"
        size={lg.current ? "sm" : "icon-sm"}
        variant="outline"
        type="button"
      >
        <HugeiconsIcon icon={CrazyIcon} class="size-5" />
        {#if lg.current}
          Emotes
        {/if}
      </InputGroupButton>

      <Separator orientation="vertical" />

      <InputGroupButton size={lg.current ? "sm" : "icon-sm"} variant="default" type="submit">
        <HugeiconsIcon icon={Sent02Icon} class="size-5" />
        {#if lg.current}
          Send
        {/if}
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroupRoot>
</form>
