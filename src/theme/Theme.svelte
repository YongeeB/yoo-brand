<script>

    import {createEventDispatcher, onMount} from "svelte";
    import Icon from "svelte-awesome/components/Icon.svelte"
    import { moonO } from "svelte-awesome/icons"

    export let scale;

    let currentTheme = "light";

    $: whiteTheme = currentTheme == "light";

    const dispatch = createEventDispatcher();

    onMount(()=> {
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme) {
            setTheme(savedTheme);
            currentTheme = savedTheme
        }
    })
    
    function setTheme(theme){
        document.documentElement.setAttribute("data-theme", theme);
        currentTheme = theme;
        localStorage.setItem("theme", theme);
        dispatch("toggle-theme", theme);
    }


</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="theme" on:click={whiteTheme ? ()=> setTheme("dark") : ()=> setTheme("light")}>
    <Icon data={moonO} scale={scale} flip="horizontal" class="theme-icon" />
</div>

<style>
 :global(:root[data-theme="dark"]) {
  background-color: var(--secondary-background);
  color: var(--secondary-color);
}

:global(:root[data-theme="light"]) {
  background-color: var(--primary-background);
  color: var(--primary-color);
}

:global(.theme-icon){
    transition: color .5s ease-in;
    color: gold;
}

:global(.theme-icon:hover){
    color: blue;
}


</style>