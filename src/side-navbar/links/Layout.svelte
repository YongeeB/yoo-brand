<script>
  import {
    home,
    productHunt,
    shoppingCart,
    phoneSquare,
  } from "svelte-awesome/icons";
  import ThemeIcon from "../../theme/Icon.svelte";
  import Link from "./Link.svelte";
  import { createEventDispatcher, onMount } from "svelte";
  const links = [
    {
      name: "Home",
      href: "/",
      icon: home,
    },
    {
      name: "Products",
      href: "/products",
      icon: productHunt,
    },
    {
      name: "Order",
      href: "/order",
      icon: shoppingCart,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: phoneSquare,
    },
  ];

  let pageName;
  const dispatch = createEventDispatcher();

  let currentTheme;
  function theme(e) {
    currentTheme = e.detail;
    dispatch("toggle-theme", e.detail);
  }

  onMount(() => {
    pageName = window.location.pathname;
  });
</script>

<ul class="links">
  {#each links as { name, href, icon }, index (index)}
    <Link {name} {href} {icon} {pageName} />
  {/each}
  <ThemeIcon on:toggle-theme={theme} />
</ul>

<style>
  .links {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
  }
</style>
