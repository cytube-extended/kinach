<script lang="ts" module>
  import type { Attachment } from "svelte/attachments";

  export type PortalTarget = HTMLElement | null;

  export const portal = (target: PortalTarget): Attachment => {
    return (el) => {
      if (!target) {
        return;
      }

      if (target) {
        target.appendChild(el);
      }

      return () => {
        if (el.parentNode) el.parentNode.removeChild(el);
      };
    };
  };
</script>

<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    target: PortalTarget;
  }

  let { target = document.body, children }: Props = $props();
</script>

<div {@attach portal(target)}>
  {#if children}
    {@render children()}
  {/if}
</div>
