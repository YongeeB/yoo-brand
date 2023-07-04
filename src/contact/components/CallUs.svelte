<script>
    import Icon from "svelte-awesome/components/Icon.svelte"
    import { phone } from "svelte-awesome/icons"
</script>

<div class="phoneUs-container">
    <a href="tel:+2348171983663">
    <Icon data={phone} scale={1.5} />
    </a>
</div>

<style>
    .phoneUs-container {
        position: absolute;
        right: 1em;
        top: 1em;
        width: 40px;
        height: 40px;
        background-color: var(--tertiary-background);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .phoneUs-container a {
        text-decoration: none;
        color: inherit;
        display: flex;

    }
</style>