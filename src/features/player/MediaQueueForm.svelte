<script lang="ts">
  import { PlusSignIcon, PinIcon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import Button, { buttonVariants } from "$lib/components/ui/button/button.svelte";
  import {
    Root as DialogRoot,
    Trigger as DialogTrigger,
    Content as DialogContent,
    Header as DialogHeader,
    Title as DialogTitle,
    Description as DialogDescription,
    Footer as DialogFooter,
  } from "$lib/components/ui/dialog";
  import {
    Root as DrawerRoot,
    Trigger as DrawerTrigger,
    Content as DrawerContent,
    Header as DrawerHeader,
    Title as DrawerTitle,
    Description as DrawerDescription,
    Footer as DrawerFooter,
    Close as DrawerClose,
  } from "$lib/components/ui/drawer";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import Toggle from "$lib/components/ui/toggle/toggle.svelte";
  import { md } from "$lib/utils";

  let open = $state(false);
  let videoUrl = $state("");

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    open = false;
  };
</script>

{#if md.current}
  <DialogRoot bind:open>
    <DialogTrigger
      type="button"
      class={buttonVariants({ variant: "ghost", size: md.current ? "icon-sm" : "icon-xs" })}
    >
      <HugeiconsIcon icon={PlusSignIcon} class="size-4 md:size-5" />
    </DialogTrigger>

    <DialogContent>
      <DialogHeader>
        <DialogTitle>Video URL</DialogTitle>
        <DialogDescription>Provide a video URL to add it to the playlist queue.</DialogDescription>
      </DialogHeader>

      <form class="flex flex-col gap-4" onsubmit={handleSubmit}>
        <div class="flex flex-col gap-2">
          <Label>Video URL</Label>
          <Input
            bind:value={videoUrl}
            type="text"
            placeholder="https://youtu.be/E4WlUXrJgy4"
            required
          />
        </div>

        <DialogFooter>
          <div class="flex flex-row items-center justify-between gap-4">
            <Toggle
              aria-label="Toggle pin"
              size="default"
              variant="outline"
              class="flex-1 data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-white data-[state=on]:*:[svg]:stroke-white"
            >
              <HugeiconsIcon icon={PinIcon} class="size-4 md:size-5" />
              Pin
            </Toggle>

            <Button type="submit" variant="outline" class="flex-1" disabled>Add Next</Button>
            <Button type="submit" class="flex-1">Add Last</Button>
          </div>
        </DialogFooter>
      </form>
    </DialogContent>
  </DialogRoot>
{:else}
  <DrawerRoot bind:open>
    <DrawerTrigger
      type="button"
      class={buttonVariants({ variant: "ghost", size: md.current ? "icon-sm" : "icon-xs" })}
    >
      <HugeiconsIcon icon={PlusSignIcon} class="size-4 md:size-5" />
    </DrawerTrigger>

    <DrawerContent>
      <DrawerHeader class="text-start">
        <DrawerTitle>Add video</DrawerTitle>
        <DrawerDescription>Provide a video URL to add it to the playlist queue.</DrawerDescription>
      </DrawerHeader>

      <form class="flex flex-col gap-4 px-4" onsubmit={handleSubmit}>
        <div class="flex flex-col gap-2">
          <Label>Video URL</Label>
          <Input
            bind:value={videoUrl}
            type="text"
            placeholder="https://youtu.be/E4WlUXrJgy4"
            required
          />
        </div>

        <div class="flex flex-row items-center justify-between gap-4">
          <Toggle
            aria-label="Toggle pin"
            size="default"
            variant="outline"
            class="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-white data-[state=on]:*:[svg]:stroke-white"
          >
            <HugeiconsIcon icon={PinIcon} class="size-4 md:size-5" />
            Pin
          </Toggle>

          <Button type="submit" variant="outline" class="flex-1" disabled>Add Next</Button>
          <Button type="submit" class="flex-1">Add Last</Button>
        </div>
      </form>

      <DrawerFooter class="pt-4">
        <DrawerClose class={buttonVariants({ variant: "outline" })}>Close</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </DrawerRoot>
{/if}
