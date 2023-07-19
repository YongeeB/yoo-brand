<script>
  export let name;
  export let href;
  export let src;
</script>

<main class="app">
  <a {href}>
    <img {src} alt={name} />
  </a>
</main>

<style>
  .app {
    display: inline;
    margin: 0 1em;
  }
  .app a img {
    width: 25px;
  }
</style>
