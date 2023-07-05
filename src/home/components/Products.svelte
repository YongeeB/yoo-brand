<script>
    import {fade} from "svelte/transition"
    import Product from "./Product.svelte";
    import {PRODUCTS} from "./Products"
</script>

<div class="products-container" out:fade="{{
    duration: 500
}}">
    {#each PRODUCTS as product,index (index)}
    <Product {product} />
    {/each} 
</div>

<style>
    .products-container {
        display: grid;
        justify-content: center;
        align-content: center;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 5px;
    }
</style>