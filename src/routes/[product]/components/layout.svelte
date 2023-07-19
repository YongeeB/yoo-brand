<script>
  import Product from "./Product.svelte";
  import Name from "../../../brand/Name.svelte";
  import About from "./About.svelte";
  import SideNavBar from "../../../side-navbar/layout.svelte";
  export let name;
  export let info;
</script>

<Product>
  <SideNavBar />
  <Name>
    <h1 class="product-name m10">{name}</h1>
  </Name>
  <About {info} />
</Product>

<style>
  .product-name {
    font-family: "Philosopher";

    width: 100%;
    text-align: center;
    color: var(--page-color);
  }
</style>
