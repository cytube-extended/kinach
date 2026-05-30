<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { Sent02Icon, CrazyIcon, Attachment02Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import {
    Root as InputGroupRoot,
    Addon as InputGroupAddon,
    Button as InputGroupButton,
    Textarea as InputGroupTextarea,
  } from "$lib/components/ui/input-group/index.js";
  import { Separator } from "$lib/components/ui/separator";
  import { cn, md } from "$lib/utils";

  let message = $state("");

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
      placeholder="Chat message"
      class="max-h-48 text-base font-stretch-ultra-condensed md:text-sm md:font-stretch-normal"
    />

    <InputGroupAddon align="block-end" class="flex flex-row justify-end">
      <InputGroupButton type="button" variant="outline" size={md.current ? "icon-sm" : "icon-xs"}>
        <HugeiconsIcon icon={Attachment02Icon} class="size-4 md:size-5" />
      </InputGroupButton>

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
