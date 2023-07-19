<script>
  export let currentTheme;
</script>

<div class={`sidebar ${currentTheme == "light" ? "light" : "dark"}`}>
  <slot />
</div>

<style>
  .sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 65%;
    max-width: 300px;
    z-index: 2;
    height: 100vh;
    display: flex;
    flex-direction: column;
    display: none;
  }

  .sidebar.light {
    background-color: var(--light);
    color: var(--dark);
  }

  .sidebar.dark {
    background-color: var(--dark);
    color: var(--light);
  }
</style>
