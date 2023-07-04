<script>
    import Product from "./Product.svelte";
    import {PRODUCTS} from "./Products"
</script>

<div class="products-container">
    {#each PRODUCTS as product,index (index)}
    <Product {product} />
    {/each} 
</div>

<style>
    .products-container {
        display: grid;
        justify-content: center;
        align-content: center;
        grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
        gap: 10px;
    }
</style>