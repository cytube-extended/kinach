<script lang="ts" module>
  import type { Snippet } from "svelte";
  import type { Attachment } from "svelte/attachments";

  export const portal =
    (target: HTMLElement | null): Attachment =>
    el => {
      if (target) {
        target.appendChild(el);

        return () => {
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
        };
      }
    };
</script>

<script lang="ts">
  let {
    target = document.body,
    children,
  }: {
    target: HTMLElement | null;
    children?: Snippet<[]>;
  } = $props();
</script>

<div {@attach portal(target)}>
  {#if children}
    {@render children()}
  {/if}
</div>
