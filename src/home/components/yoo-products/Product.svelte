<script>

    import Lazy from "svelte-lazy"

    export let product;

    const [, png] = product.imgSrc.split(".");
    const [yoo, name] = product.name.split(" ");

</script>

<div class="product-card">
    <Lazy class="lazy-container">
            <img src={product.imgSrc} alt={product.name} id={png == "png" && png}>
     </Lazy>
    <p id="product-name">
        <span style="font-family: Allura; font-size: 1.3em;">{yoo} </span>{name}
    </p>
    <p id="product-info">
        {product.info.substr(0, 300) + "..."}
        <li><a href="/">see more</a></li>
    </p>
</div>

<style>
    
    .product-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform .3s linear;
        
    }

    .product-card:hover {
        transform: scale(1.01);
    }

    li {
        list-style-type: none;
    }

    :global(.lazy-container){
        width: 100%;
        display: flex;
        justify-content: center;
    }


    #png {
        background-color: white;

    }


    .product-card img {
        width: 90%;
        max-width: 400px;
        height: 250px;
        border-radius: 20px;
    }

    .product-card #product-name {
        color: var(--tertiary-color);
        font-size: 1.5em;
        font-weight: 900;
        transition: color .5s ease;
        font-family: "Mukta";
    }

    .product-card #product-name:hover {
        color: greenyellow;
    }

    .product-card #product-info {
        transform: translateY(-20px);
        text-align: center;
        line-height: 1.8em;
        font-family: "Fira Code";
        font-size: 1em;
        padding: 0 2em;
    }

    .product-card #product-info::first-letter {
        font-family: "Allura";
        font-size: 2em;
    }

    .product-card #product-info a {
        color: green;
        text-decoration: none;
        transition: color .5s ease;
        font-size: 1em;
    }

    .product-card #product-info a:hover {
        color: green;
    }

    
</style>