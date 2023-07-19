<script>
  export let src;
  export let name;
</script>

<div class="image-box">
  <img {src} alt={name} />
</div>

<style>
  .image-box {
    display: flex;
    justify-content: center;
  }

  .image-box img {
    width: 350px;
    max-width: 90%;
    height: 250px;
    border-radius: 1em;
    margin: 5px 0;
    background-color: white;
  }
</style>
