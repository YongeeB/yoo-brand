<script>
    export let src;
    export let imgSrc;
    export let name;
</script>

<a href={src}>
    <img src={imgSrc} alt={name}/>
</a>

<style>
    a {
        text-decoration: none;
        color: inherit;
        margin-right: 1em;
    }

    a img {
        width: 30px;
        height: 30px;
    }
</style>