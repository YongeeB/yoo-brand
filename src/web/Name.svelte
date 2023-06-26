<script>
// @ts-nocheck

  export let currentTheme;
</script>

<header>
    <h2 id={currentTheme && currentTheme}>
        Yoo
        <br />
        Brands
    </h2>
</header>

<style>
    header h2 {
        text-align: center;
        color: transparent;
        font-weight: 900;
        font-family: "Allura";
    }

    #dark {
        background: linear-gradient(var(--primary-background), orange, var(--primary-background));
        -webkit-background-clip: text;
        background-clip: text;
    }

    #light {
        background: linear-gradient(var(--secondary-background), orange, var(--secondary-background));
        -webkit-background-clip: text;
        background-clip: text;
    }
</style>