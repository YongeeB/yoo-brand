<script>
  import Link from "./Link.svelte";
  export let windowSrc;

  const links = [
    {
      name: "home",
      src: "/",
    },
    {
      name: "products",
      src: "/products",
    },
    {
      name: "order",
      src: "/order",
    },
    {
      name: "contact",
      src: "/contact",
    },
  ];
</script>

<nav class="links-container">
  <ul>
    {#each links as link}
      <Link name={link.name} src={link.src} {windowSrc} />
    {/each}
  </ul>
</nav>

<style>
  .links-container ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
  }
</style>
