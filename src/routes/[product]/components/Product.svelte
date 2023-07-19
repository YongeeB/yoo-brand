<script>
  import { onMount } from "svelte";
  let screenWidth;

  $: pageWidth = screenWidth;

  function handleResize(e) {
    screenWidth = e.target.innerWidth;
  }
  onMount(() => {
    screenWidth = window.innerWidth;

    window.addEventListener("resize", handleResize);
  });
</script>

{#if pageWidth >= 768}
  <div class="grid-768">
    <div class="invisible-box" />
    <div class="product">
      <slot />
    </div>
  </div>
{:else}
  <div class="product">
    <slot />
  </div>
{/if}

<style>
  .grid-768 {
    display: grid;
    grid-template-columns: 300px 1fr;
  }
</style>
