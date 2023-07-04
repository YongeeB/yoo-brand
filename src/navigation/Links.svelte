<script>
// @ts-nocheck

  import { onMount } from "svelte";

    let pathName;

    onMount(()=>{
        pathName = window.location.pathname;
    })

</script>

<div class="links-container">
    <nav>
        <a href="/" id={pathName == "/" && "active"}>Home</a>
        <a href="/products" id={pathName == "/products" && "active"}>Products</a>
        <a href="/store" id={pathName == "/store" && "active"}>Store</a>
        <a href="/contact" id={pathName == "/contact" && "active"}>Contact</a>
    </nav>
</div>

<style>
    .links-container {
        flex-grow: 2;
    }

    .links-container nav {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .links-container nav a {
        font-weight: 900;
        text-decoration: none;
        color: inherit;
        transition: color .5s ease-in-out;
        font-size: 1em;
    }

    .links-container nav a:hover {
        color: var(--tertiary-color);
    }

    .links-container nav #active {
        padding: 5px;
        background-color: var(--tertiary-color);
        color: black;
        font-weight: 500;
        border-radius: 5px;
    }

</style>