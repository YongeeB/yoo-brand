<script>
// @ts-nocheck

    export let iconSrc;
    export let iconName;
    export let link;

</script>
    <a href={link}>
    <img src={iconSrc} alt={iconName}/>
    </a>

<style>
    a {
        text-decoration: none;
    }
    a img {
        width: 30px;
        height: 30px;
        margin-right: 2em;
    }
</style>