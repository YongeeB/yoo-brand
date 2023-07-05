<script>
    import Icon from "svelte-awesome/components/Icon.svelte"
    import { phone } from "svelte-awesome/icons"
</script>

<div class="phone-container">
    <a href="tel:+2348171983663">
        <Icon data={phone} scale={1.2}/>
    </a>
    
</div>

<style>
    .phone-container {
        position: absolute;
        right: 1em;
        bottom: 1em;
        width: 40px;
        height: 40px;
        background: green;
        color: cornsilk;
        border-radius: 50%;
    }

    .phone-container a {
        display: flex;
        height: inherit;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: inherit;
    }
</style>