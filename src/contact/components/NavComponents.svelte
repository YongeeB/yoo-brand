<script>
// @ts-nocheck

  import { createEventDispatcher, onMount } from "svelte";
    import Icon from "svelte-awesome/components/Icon.svelte"
    import { moonO, home, shoppingCart, productHunt, phone,} from "svelte-awesome/icons"
    import Theme from "../../theme/Theme.svelte";

    const dispatch = createEventDispatcher()

    function collapse(){
        dispatch("collapse", true);
    }

    let currentTheme;

    function changeTheme(e){
        currentTheme = e.detail;
    }

    let pathName;

    onMount(()=>{
        pathName = window.location.pathname;
    })

    console.log(pathName)
</script>

<div class="navbar-container" id={currentTheme && currentTheme}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="collapse">
        <div on:click={collapse}>X</div>
    </div>
    <div class="links-container">
        <div id={pathName == "/" && "active"}>
        <Icon data={home} scale={2}/>
        <a href="/">home</a>
        </div>
        <div id={pathName == "/stores" && "active"}>
        <Icon data={shoppingCart} scale={2}/>
        <a href="/stores">stores</a>
        </div>
        <div id={pathName == "/products" && "active"}>
        <Icon data={productHunt} scale={2}/>
        <a href="/products">products</a>
        </div>
        <div id={pathName == "/contact" && "active"}>
        <Icon data={phone} scale={2}/>
        <a href="/contact">contact</a>
        </div>
        <div class="theme-container">
        <Theme scale={1.7} on:toggle-theme={changeTheme}/>
        </div>
    </div>
</div>

<style>
    #dark {
        background-color: var(--primary-color);
    }

    #active {
        background-color: var(--tertiary-background);
        border-radius: 1em;
        color: black;
    }
    .navbar-container {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        bottom: 0px;
        width: 50%;
        max-width: 400px;
        background-color: var(--secondary-color);
    }

    .collapse {
        position: absolute;
        right: 1em;
        top: 1em;
    }

    .collapse div {
        width: 20px;
        height: 20px; 
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        font-size: 1.15srem;
        font-family: "Fira Code";
        cursor: pointer;
    }

    .navbar-container .links-container{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;
    }

    .navbar-container .links-container div {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 50px;
        overflow: hidden;
    }

    a {
        text-transform: capitalize;
        font-weight: bolder;
        position: relative;
        text-decoration: none;
        color: inherit;
        font-size: 1.1rem;
        letter-spacing: 2px;
        align-self: center;
        transition: color .5s ease;
    }

    a:hover {
        color: var(--tertiary-color);
    }

    .theme-container {
        transform: translateX(40%);
        justify-self: right;
    }
</style>

