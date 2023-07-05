<script>
  import { home, productHunt, shoppingCart, phoneSquare } from "svelte-awesome/icons"
  import Link from "./SideBarLink.svelte";
  import { createEventDispatcher, onMount } from "svelte";
  import Theme from "../../theme/Theme.svelte";

  let pagePath;
  let sideBarRef;
  let currentTheme;

  const dispatch = createEventDispatcher()

  onMount(()=>{
    pagePath = window.location.pathname;
    dispatch("reference", sideBarRef);
    
  })

  function changeTheme(e){
    currentTheme = e.detail;
  }

  

</script>
<div class="sidebar-container" bind:this={sideBarRef} style="display: none;" id={currentTheme == "light" ? "lightTheme" : "darkTheme"}>
    <div class="components-box">
        <Link name="Home" src="/" 
        iconName={home} {pagePath}/>
        <Link name="Product" 
        src="/product"
        iconName={productHunt} {pagePath}/>
        <Link 
        name="Order"
        src="/order" iconName={shoppingCart} {pagePath}/>
        <Link name="Contact" src="/contact" iconName={phoneSquare} {pagePath}/>
        <div class="theme-box">
            <Theme scale={2} on:toggle-theme={changeTheme}/>
        </div>
        

    </div>
</div>

<style>
    .sidebar-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        max-width: 200px;
        z-index: 10;
        display: none;
    }

    .sidebar-container#lightTheme {
        background-color: var(--primary-background);
    }

    .sidebar-container#darkTheme {
        background-color: var(--secondary-background);
    }

    .components-box {
        position: relative;
        height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .theme-box {
        display: flex;
        justify-content: flex-end;
    }

</style>