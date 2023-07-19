<script>
  import Image from "./Image.svelte";
  import Info from "./Info.svelte";
  import ProductCard from "./ProductCard.svelte";
  import Title from "./Title.svelte";

  export let products;
</script>

<div class="products-grid">
  {#each products as product, index (index)}
    <ProductCard>
      <Image src={product.imgSrc} name={product.name} />
      <Title name={product.name} />
      <Info content={product.info} src={"/" + product.name} />
    </ProductCard>
  {/each}
</div>

<style>
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(355px, 1fr));
    gap: 10px;
  }
</style>
