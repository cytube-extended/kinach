<script lang="ts">
  import { MediaQuery } from "svelte/reactivity";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import {
    BorderNone02Icon,
    Chat01Icon,
    MinusSignIcon,
    PlusSignIcon,
    SpiralsIcon,
  } from "@hugeicons/core-free-icons";
  import {
    dndState,
    draggable,
    droppable,
    type DragDropCallbacks,
  } from "@thisux/sveltednd";
  import type { Snippet } from "svelte";
  import Grid, { GridItem } from "@appulsauce/svelte-grid";
  import SideBar from "./SideBar.svelte";
  import TemplateLayout from "./TemplateLayout.svelte";
  import FoldableLayoutItem from "./FoldableLayoutItem.svelte";
  import type { ClassValue, HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";
  import Button, {
    buttonVariants,
  } from "$lib/components/ui/button/button.svelte";
  import {
    blur,
    crossfade,
    draw,
    fade,
    fly,
    scale,
    slide,
  } from "svelte/transition";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import * as Empty from "$lib/components/ui/empty/index.js";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import { Input } from "$lib/components/ui/input";
  import * as ButtonGroup from "$lib/components/ui/button-group/index.js";

  // type Props = HTMLAttributes<HTMLDivElement> & {
  // foldRef: HTMLElement | null;
  // unfoldRef: HTMLElement | null;
  // draggingRef: HTMLElement | null;
  // unfoldedItems: Array<{
  //   ref: HTMLElement | null;
  //   x: number;
  //   y: number;
  //   w: number;
  //   h: number;
  // }>;
  // x: number;
  // y: number;
  // w: number;
  // h: number;
  // items: Snippet<
  //   [
  //     {
  //       updateCells: (data: {
  //         cells: Array<{ x: number; y: number; w: number; h: number }>;
  //       }) => void;
  //     },
  //   ]
  // >;
  // unfolded: Array<{
  //   id: string;
  //   x: number;
  //   y: number;
  //   w: number;
  //   h: number;
  // }>;
  // };

  type DragData = {
    data?: string;
    id: string;
  };

  // let foldRef = $state<HTMLElement | null>(null);
  // let unfoldRef = $state<HTMLElement | null>(null);

  // let draggingRef = $state<HTMLElement | null>(null);

  // let {
  //   class,
  //   children,
  // foldRef = $bindable<HTMLElement | null>(),
  // unfoldRef = $bindable<HTMLElement | null>(),
  // draggingRef = $bindable<HTMLElement | null>(null),
  // unfoldedItems = $bindable<
  //   Array<{
  //     ref: HTMLElement | null;
  //     x: number;
  //     y: number;
  //     w: number;
  //     h: number;
  //   }>
  // >([]),
  // x = $bindable<number>(0),
  // y = $bindable<number>(0),
  // w = $bindable<number>(0),
  // h = $bindable<number>(0),

  // items,
  // }: Props = $props();

  // let gridItems = $derived(unfoldedItems);
  // let unfoldedItems = $state<
  //   Array<{
  //     ref: HTMLElement | null;
  //     x: number;
  //     y: number;
  //     w: number;
  //     h: number;
  //   }>
  // >([]);

  const cols = 3;
  const rows = 3;

  let items = $state(
    Array.from({ length: cols * rows }).map((_, i) => ({
      x: i % cols,
      y: Math.floor(i / cols),
      w: 1,
      h: 1,
    })),
  );

  let registry = $state<string[]>([]);

  // let gridController: GridController | undefined = $state();

  // Add/Remove items: + / -

  let isGridInit = $state(true);

  let cells = $state(
    Array.from({ length: cols * rows }).map((_, i) => ({
      ref: null,
      x: i % cols,
      y: Math.floor(i / cols),
      w: 1,
      h: 1,
    })),
  );

  let sidebarHidden = $state(true);

  let {
    class: className,
    ...restProps
  }: {
    class?: ClassValue;
  } = $props();

  let open = $state(false);
  const isDesktop = new MediaQuery("(min-width: 768px)");

  interface Layout {
    name: string;
  }

  let newLayoutName = $state("");
  let layouts = $state<Layout[]>([
    { name: "Dummy Layout" },
    { name: "Test Layout" },
    { name: "Main Layout" },
  ]);
  let editLayout = $state<Layout | undefined>(undefined);

  const handleNewLayout = async (ev: Event) => {
    ev.preventDefault();

    layouts = [...layouts, { name: newLayoutName }];

    newLayoutName = "";

    open = false;
  };

  //
  // User button to add items + contorller?
  //
</script>

{#snippet emptyHeaderPlaceholder()}
  <Empty.Header>
    <Empty.Media variant="icon">
      <HugeiconsIcon icon={BorderNone02Icon} class="size-5" />
    </Empty.Media>

    <Empty.Title
      class="font-heading text-xl font-bold tracking-wide select-none"
    >
      <h1>Layout list is empty</h1>
    </Empty.Title>

    <Empty.Description>
      Create your first Layout to get started.
    </Empty.Description>
  </Empty.Header>
{/snippet}

{#snippet newLayoutForm(className?: string)}
  <form class={cn("flex flex-col gap-4", className)} onsubmit={handleNewLayout}>
    <div class="flex flex-col gap-2">
      <Label for="new-layout-name">Name</Label>

      <Input
        required
        bind:value={newLayoutName}
        type="text"
        placeholder="My new Layout"
        id="new-layout-name"
      />
    </div>

    <Button type="submit">Create</Button>
  </form>
{/snippet}

{#snippet emptyLayoutMessage()}
  {#if isDesktop.current}
    <Dialog.Root bind:open>
      <Empty.Root>
        {@render emptyHeaderPlaceholder()}

        <Dialog.Trigger class={buttonVariants({ variant: "default" })}>
          New Layout
        </Dialog.Trigger>
      </Empty.Root>

      <Dialog.Content class="sm:max-w-106.25">
        <Dialog.Header>
          <Dialog.Title>New Layout</Dialog.Title>

          <Dialog.Description>Create a new Layout.</Dialog.Description>
        </Dialog.Header>

        {@render newLayoutForm()}
      </Dialog.Content>
    </Dialog.Root>
  {:else}
    <Drawer.Root bind:open>
      <Empty.Root>
        {@render emptyHeaderPlaceholder()}

        <Drawer.Trigger class={buttonVariants({ variant: "default" })}>
          New Layout
        </Drawer.Trigger>
      </Empty.Root>

      <Drawer.Content>
        <Drawer.Header class="text-start">
          <Drawer.Title>New Layout</Drawer.Title>

          <Drawer.Description>Create a new Layout.</Drawer.Description>
        </Drawer.Header>

        {@render newLayoutForm("px-4")}

        <Drawer.Footer class="pt-2">
          <Drawer.Close class={buttonVariants({ variant: "outline" })}>
            Cancel
          </Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  {/if}
{/snippet}

<div
  class={cn("flex flex-col items-center justify-center", className)}
  {...restProps}
>
  {#if layouts.length < 1}
    <div class="flex-1">
      {@render emptyLayoutMessage()}
    </div>
  {:else if editLayout}
    {editLayout.name}
  {:else if isDesktop.current}
    <Dialog.Root bind:open>
      <div class="flex-1 flex flex-col items-center justify-center gap-4">
        <Label class="text-lg font-bold">Pick a Layout to edit</Label>

        <div class="grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-4">
          {#each layouts as layout (layout.name)}
            <Button variant="outline" onclick={() => (editLayout = layout)}>
              {layout.name}
            </Button>
          {/each}

          <Dialog.Trigger class={buttonVariants({ variant: "default" })}>
            New Layout
          </Dialog.Trigger>
        </div>
      </div>

      <Dialog.Content class="sm:max-w-106.25">
        <Dialog.Header>
          <Dialog.Title>New Layout</Dialog.Title>

          <Dialog.Description>Create a new Layout.</Dialog.Description>
        </Dialog.Header>

        {@render newLayoutForm()}
      </Dialog.Content>
    </Dialog.Root>
  {:else}
    <Drawer.Root bind:open>
      <div class="flex-1 flex flex-col items-center justify-center gap-4">
        <Label class="text-lg font-bold">Pick a Layout to edit</Label>

        <div class="grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-4">
          {#each layouts as layout (layout.name)}
            <Button variant="outline" onclick={() => (editLayout = layout)}>
              {layout.name}
            </Button>
          {/each}

          <Drawer.Trigger class={buttonVariants({ variant: "default" })}>
            New Layout
          </Drawer.Trigger>
        </div>
      </div>

      <Drawer.Content>
        <Drawer.Header class="text-start">
          <Drawer.Title>New Layout</Drawer.Title>

          <Drawer.Description>Create a new Layout.</Drawer.Description>
        </Drawer.Header>

        {@render newLayoutForm("px-4")}

        <Drawer.Footer class="pt-2">
          <Drawer.Close class={buttonVariants({ variant: "outline" })}>
            Cancel
          </Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  {/if}

  <!-- <Sheet.Root>
    <Empty.Root>
      <Empty.Header>
        <Empty.Media variant="icon">
          <HugeiconsIcon icon={BorderNone02Icon} class="size-5" />
        </Empty.Media>

        <Empty.Title
          class="font-heading text-xl font-bold tracking-wide select-none"
        >
          <h1>Layout is empty</h1>
        </Empty.Title>

        <Empty.Description>
          Create your first Layout to get started.
        </Empty.Description>
      </Empty.Header>

      <Sheet.Trigger>
        <Button>New Layout</Button>
      </Sheet.Trigger>
    </Empty.Root>

    <Sheet.Content>
      <Sheet.Header>
        <Sheet.Title class="text-center text-lg font-bold">
          <h1>Layout Panels</h1>
        </Sheet.Title>

        <Separator class="my-4" />

        <Sheet.Description
          class="flex flex-col justify-start items-start gap-4"
        >
          <Button size="lg">
            <HugeiconsIcon icon={Chat01Icon} />
            Chat
          </Button>

          <Button>Features</Button>
          <Button>Player</Button>
          <Button>Playlist</Button>
        </Sheet.Description>
      </Sheet.Header>
    </Sheet.Content>
  </Sheet.Root> -->
</div>

<!-- {#snippet foldedIcon(content: string)}
  {@const id = `folded-icon-${crypto.randomUUID().slice(0, 8)}`}

  <div
    {id}
    class="px-4 py-6 bg-primary rounded-lg cursor-move select-none"
    use:draggable={{
      container: id,
      dragData: { data: "kek" },
      callbacks: {
        onDragStart: () => (draggingRef = document.getElementById(id)),
        onDragEnd: () => (draggingRef = null),
      },
    }}
  >
    {content}
  </div>
{/snippet} -->

<!-- {#snippet unfoldedPanel(
  x: number,
  y: number,
  w: number,
  h: number,
  content: HTMLElement,
)}
  <GridItem
    {x}
    {y}
    {w}
    {h}
    resizable={true}
    class="flex flex-col items-center justify-between bg-border rounded-lg p-2"
  >
    {#snippet moveHandle({ moveStart })}
      <div
        class="flex flex-row justify-start w-full"
        role="button"
        tabindex="0"
        onpointerdown={moveStart}
      >
        <button class="cursor-move size-5">⠿</button>
      </div>
    {/snippet}

    {#snippet children()}
      <div class="w-full h-full flex flex-col items-center justify-center">
        {content}
      </div>
    {/snippet}

    {#snippet resizeHandle({ resizeStart })}
      <div
        class="flex flex-row justify-end w-full cursor-se-resize"
        role="button"
        tabindex="0"
        onpointerdown={resizeStart}
      >
        <button class="cursor-se-resize rotate-45">
          <HugeiconsIcon icon={ArrowRight01Icon} class="size-5" />
        </button>
      </div>
    {/snippet}
  </GridItem>
{/snippet} -->

<!-- {#snippet emptyCell(x: number, y: number, w: number, h: number)}
  <GridItem {x} {y} {w} {h} class="border-2 border-dashed rounded-lg">
    <div
      class="w-full h-full flex flex-col items-center justify-center text-3xl font-bold"
    >
      +
    </div>
  </GridItem>
{/snippet} -->

<!-- <div class={cn("flex-1 flex flex-row", className)}>
  {#if !sidebarHidden}
    <div
      class="flex-1 flex flex-col items-center justify-start gap-4 px-2 py-8"
      transition:fly={{ duration: 150 }}
    >
      {#if children}
        {@render children()}
      {/if}
    </div>
  {/if} -->

<!-- <div transition:fly={{ duration: 150 }} class="flex-9 flex overflow-hidden">
    <TemplateLayout class="flex-1 flex">
      <div class="flex-1 relative w-full h-full min-h-0">
        <Grid class="w-full h-full" bounds={true} cols={3} rows={3} gap={9}>
          {#each cells as cell}
            {@const { x, y, w, h } = cell}

            <GridItem {x} {y} {w} {h} movable={false} resizable={false}>
              <Button
                class="flex items-center justify-center w-full h-full"
                type="button"
                variant="ghost"
                onclick={() => {
                  sidebarHidden = !sidebarHidden;
                }}
              >
                <HugeiconsIcon class="size-8" icon={PlusSignIcon} />
              </Button>
            </GridItem>
          {/each} -->
<!-- {#if isGridInit}
          {#each items as item, index}
            {@const { x, y, w, h } = item}
            {@const id = `empty-cell-${index}`}
            {@const container = id}

            {@render emptyCell(id, x, y, w, h, container, () => {
              isGridInit = false;
            })}
          {/each}
        {:else if children}
          {@render children()}
        {/if} -->
<!-- {@render children()} -->
<!-- </Grid>
      </div>
    </TemplateLayout>
  </div> -->

<!-- {@render items({ updateCells })} -->

<!-- <SideBar
    {@attach (el) => {
      foldRef = el;
    }}
    class="flex-1 flex flex-col items-center justify-start gap-4"
  ></SideBar> -->

<!--
  <TemplateLayout class="flex-9 flex overflow-hidden">
    <div class="flex-1 relative w-full h-full min-h-0">
      <Grid
        {@attach (el: HTMLDivElement) => {
          unfoldRef = el;
        }}
        class="w-full h-full"
        bounds={true}
        cols={3}
        rows={3}
        gap={0}
      >
        {@const isEmpty = unfoldedItems.length === 0}

        {#if isEmpty}
          {#each { length: 9 }, index}
            {@const _x = index % 3}
            {@const _y = Math.floor(index / 3)}
            {@const _w = 1}
            {@const _h = 1}
            {@const id = `empty-cell-${index}`}
            {@const container = id}

            {@render emptyCell(id, _x, _y, _w, _h, container, () => {
              x = _x;
              y = _y;
              w = _w;
              h = _h;
            })}
          {/each}
        {/if}
      </Grid>
    </div>
  </TemplateLayout> -->

<!-- {#if children}
    {@render children()}
  {/if} -->
<!-- </div> -->
