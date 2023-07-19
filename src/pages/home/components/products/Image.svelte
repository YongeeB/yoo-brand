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
    width: 90%;
    max-width: 350px;
    height: 250px;
    border-radius: 1em;
    margin: 5px 0;
    background-color: white;
  }
</style>
