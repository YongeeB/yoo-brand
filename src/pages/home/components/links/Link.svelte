<script>
  export let name;
  export let src;
  export let windowSrc;
</script>

<li class="link" id={`${windowSrc == src ? "active" : "inactive"}`}>
  <a class="link-box" href={src} data-sveltekit-preload-data>
    <h5>{name}</h5>
  </a>
</li>

<style>
  .link {
    font-family: "Zilla Slab";
    font-weight: bold;
  }
  .link#active {
    background-color: var(--main-color);
    padding: 5px;
    border-radius: 5px;
    color: var(--dark);
  }

  .link#inactive {
    transition: color 0.5s linear;
  }

  .link#inactive:hover {
    color: var(--main-color);
  }

  .link .link-box h5 {
    text-transform: capitalize;
  }
</style>
