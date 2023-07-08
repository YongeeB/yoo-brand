<script>
     import Icon from "svelte-awesome/components/Icon.svelte";

    export let iconName;
    export let src;
    export let name;
    export let pagePath;

</script>

<div class="link-box" id={pagePath == src ? "active" : ""}>
    <a href={src} data-sveltekit-preload-data="hover">
    <Icon data={iconName} id="icon" />
    <h3 id="name">{name}</h3>
    </a>
</div>

<style>
    .link-box {
        display: flex;
        flex-direction: row;
    }

    .link-box#active {
        background: var(--tertiary-color);
        color: black;
        border-radius: 1em;
    }

    .link-box a {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-decoration: none;
        color: inherit;
        transition: color .5s linear;
    }

    .link-box:not(#active) a:hover {
        color: var(--tertiary-color);
    }

    .link-box a #name {
        flex-basis: 70%;
        text-align: center;
        font-size: 17px;
        font-weight: bolder;
    }

    :global(#icon){
        flex-basis: 30%;
        height: 30px;
    }
</style>