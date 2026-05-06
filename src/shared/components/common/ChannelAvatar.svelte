<script lang="ts">
  import { Badge, Fallback, Image, Root } from "$lib/components/ui/avatar";

  interface Props {
    imgSrc: string;
    fallbackText?: string;
    isConnected?: boolean;
  }

  let { imgSrc, fallbackText = "Channel Logo", isConnected }: Props = $props();
</script>

<Root class="rounded-lg">
  <Image src={imgSrc} alt={fallbackText} />

  {#if typeof isConnected === "boolean"}
    <Badge class={isConnected ? "bg-green-500" : "bg-red-500"} />
  {/if}

  <Fallback>{fallbackText}</Fallback>
</Root>
