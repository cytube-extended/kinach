<script lang="ts">
  import { PlusSignIcon, PinIcon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { fade } from "svelte/transition";
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";
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
  import { getYoutubeVideoId } from "$services/youtube";
  import { queue } from "./playlist";

  let open = $state(false);
  let videoUrl = $state("");
  let youtubeVideoId = $derived(getYoutubeVideoId(videoUrl));

  const queueVideo = async () => {
    if (!youtubeVideoId) {
      console.error("No video ID");
      return;
    }

    const result = await queue({
      id: youtubeVideoId,
      type: "yt",
      pos: "end",
      temp: true,
    });

    console.log(result);
  };

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    try {
      await queueVideo();
    } catch (error) {
      console.error(error);
      return;
    }

    videoUrl = "";
    open = false;
  };
</script>

{#snippet input()}
  <div class="flex flex-col gap-2">
    <Label>Video URL</Label>
    <Input
      bind:value={videoUrl}
      type="text"
      placeholder="https://youtu.be/E4WlUXrJgy4"
      title="Enter video URL"
      required
    />
  </div>
{/snippet}

{#snippet thumbnail()}
  {#if youtubeVideoId}
    <div transition:fade>
      <AspectRatio ratio={16 / 9} class="rounded-lg bg-muted">
        <img
          src={`https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`}
          alt="YouTube Video Thumbnail"
          class="h-full w-full rounded-lg object-cover"
        />
      </AspectRatio>
    </div>
  {/if}
{/snippet}

{#snippet controls()}
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

    <Button
      type="submit"
      variant="outline"
      title="Queue to the next position in the playlist"
      class="flex-1"
      disabled>Add Next</Button
    >
    <Button type="submit" variant="default" title="Queue to the end of the playlist" class="flex-1">
      Add Last
    </Button>
  </div>
{/snippet}

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
        {@render input()}
        {@render thumbnail()}

        <DialogFooter>
          {@render controls()}
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
        {@render input()}
        {@render thumbnail()}
        {@render controls()}
      </form>

      <DrawerFooter class="pt-4">
        <DrawerClose class={buttonVariants({ variant: "outline" })}>Close</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </DrawerRoot>
{/if}
