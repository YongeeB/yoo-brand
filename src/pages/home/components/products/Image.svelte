<script>
  import Lazy from "svelte-lazy";
  export let src;
  export let name;
</script>

<Lazy class="image-box">
  <img {src} alt={name} />
</Lazy>

<style>
  :global(.image-box) {
    display: flex;
    justify-content: center;
    margin: 0 1.2em;
  }

  :global(.image-box img) {
    margin: 0 auto;
    width: 350px;
    max-width: 100%;
    height: 250px;
    border-radius: 1em;
    margin: 5px 0;
    background-color: white;
  }
</style>
