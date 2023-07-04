<script>
// @ts-nocheck

  import { onMount } from "svelte";
  import Icon from "svelte-awesome/components/Icon.svelte"

    export let src;
    export let iconName;
    export let name;

    let pageName = window.location.pathname;

    console.log(pageName, src)
    console.log(pageName==src)
</script>

<div class="link-container" id={pageName == src && "active"}>
    <Icon data={iconName} class="icon" />
    <a href={src}>{name}</a>
</div>

<style>
    .link-container {
        display: grid;
        grid-template-columns: 30% 70%;
        height: 30px;
        justify-content: space-around;
        align-content: center;
        width: 100%;
    }

    #active {
        background-color: var(--tertiary-background);
        border-radius: 1em;
        padding: 1em;
    }

     #active:hover {
        background: var(--tertiary-color);
     }

    .link-container a{
        text-decoration: none;
        color: inherit;
        font-size: 1.5em;
        text-align: center;
        font-weight: bolder;
        transition: color .5s linear;
    }

    

    .link-container a:hover {
        color: var(--tertiary-color);
    }

    :global(.icon){
        height: 30px;
        align-self: center;
        width: 100%;
    }
</style>
