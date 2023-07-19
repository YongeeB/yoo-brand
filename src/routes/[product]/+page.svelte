<script>
  import "../../global.css";
  import Product from "./components/layout.svelte";

  export let data;

  const { name, info } = data.product;
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>

<Product {name} {info} />
