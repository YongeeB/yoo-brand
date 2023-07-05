<script>

  export let currentTheme;
  export let responsive;
  export let size;
</script>

<header>
    <a href="/">
    <h2 class={`${currentTheme} ${responsive=="yes" && "responsive"}`} style={`font-size: ${size ? size : "normal"};`}>
        
        Yoo
        <br />
        Brands
    </h2>
</a>
</header>

<style>
    header a {
        text-decoration: none;
    }
    header h2 {
        text-align: center;
        color: transparent;
        font-weight: 900;
        font-family: "Allura";
        margin-right: 1em;
    }

    .dark {
        background: linear-gradient(var(--primary-background), var(--tertiary-background), var(--primary-background));
        -webkit-background-clip: text;
        background-clip: text;
    }

    .light {
        background: linear-gradient(var(--secondary-background), var(--tertiary-background), var(--secondary-background));
        -webkit-background-clip: text;
        background-clip: text;
    }

    @media(max-width: 650px){
        .responsive {
            display: none;
        }

    }
</style>