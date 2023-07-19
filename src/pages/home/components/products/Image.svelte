<script>
  import Lazy from "svelte-lazy";
  export let src;
  export let name;
</script>

<div class="image-box">
  <Lazy>
    <img {src} alt={name} />
  </Lazy>
</div>

<style>
  .image-box {
    display: flex;
    justify-content: center;
  }

  .image-box img {
    width: 350px;
    max-width: 95%;
    height: 250px;
    border-radius: 1em;
    margin: 5px 0;
    background-color: white;
  }
</style>
