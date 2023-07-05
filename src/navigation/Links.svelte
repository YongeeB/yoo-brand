<script>

  import { onMount } from "svelte";

    let pathName;

    onMount(()=>{
        pathName = window.location.pathname;
    })

</script>

<div class="links-container">
    <nav>
        <a href="/" data-sveltekit-preload-data="hover">
        <span id={pathName == "/" && "active"}>Home</span>
        </a>
        <a href="/products" data-sveltekit-preload-data="hover">
         <span id={pathName == "/products" && "active"}>Products</span>
        </a>
        <a href="/store" data-sveltekit-preload-data="hover">
         <span id={pathName == "/order" && "active"}>Order</span>
        </a>
        <a href="/contact" data-sveltekit-preload-data="hover">
         <span id={pathName == "/contact" && "active"}>Contact</span>
        </a>
    </nav>
</div>

<style>
    .links-container {
        width: 100%;
    }

    .links-container nav {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .links-container nav a {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-weight: 900;
        text-decoration: none;
        color: inherit;
        transition: color .5s ease-in-out;
        font-size: 0.75em;
    }

    .links-container nav a:hover {
        color: var(--tertiary-color);
    }

    .links-container nav a #active {
        padding: 5px;
        background-color: var(--tertiary-color);
        color: black;
        font-weight: 500;
        border-radius: 5px;
    }

</style>