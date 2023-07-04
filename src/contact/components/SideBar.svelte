<script>
// @ts-nocheck

  import { home, productHunt, shoppingCart, mobilePhone} from "svelte-awesome/icons"
  import Theme from "../../theme/Theme.svelte";
  import { createEventDispatcher, onMount } from "svelte";
  import Link from "./Link.svelte";

  export let currentTheme;

  const dispatch = createEventDispatcher();
  let navRef;
  let pageName;
  
  
  onMount(()=>{
    pageName = window.location.pathname;
    dispatch("reference", navRef);
  })


</script>
<div class={"nav-container" + ` ${currentTheme=="light" ? "light" : "dark"}`} bind:this={navRef}>
    <div class="link-box">
        <nav>
            <Link src="/" 
            iconName={home}
            name="Home" 
            />
            <Link 
            src="/products" iconName={productHunt} name="Products" 
            />
            <Link 
            src="/store" iconName={shoppingCart} name="Store" 
            />
            <Link 
            src="/contact" 
            iconName={mobilePhone} name="Products" 
            />
        </nav>
        <div class="theme-container">
            <Theme scale={1.8} on:toggle-theme />
        </div>
    </div>
</div>

<style>
    .nav-container {
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;
        max-width: 200px;
        z-index: 2;
    }

    .nav-container.light{
        background-color: white;
    }

    .nav-container.dark {
        background-color: black;
    }

    .link-box {
        height: 95%;
        width: 100%;
    }

    .link-box nav {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    

    .theme-container {
        position: absolute;
        right: 10px;
    }
</style>