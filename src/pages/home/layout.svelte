<script>
  import Name from "../../brand/Name.svelte";
  import NavBar from "../../navbar/layout.svelte";
  import ThemeIcon from "../../theme/Icon.svelte";
  import AboutBrand from "./components/AboutBrand.svelte";
  import Yoo from "./components/Yoo.svelte";
  import Links from "./components/links/layout.svelte";
  import Products from "./components/products/layout.svelte";

  export let products;

  let windowSrc = "/";
</script>

<Yoo>
  <NavBar>
    <Name>
      <h5 style="text-align: center">
        Yoo
        <br />
        Brand
      </h5>
    </Name>
    <Links {windowSrc} />
    <ThemeIcon />
  </NavBar>
  <AboutBrand />
  <Products {products} />
</Yoo>

<style>
  h5 {
    font-family: "Lobster";
    font-weight: bold;
    color: transparent;
    background: radial-gradient(var(--page-color), green);
    background-clip: text;
    -webkit-background-clip: text;
  }
  @media (min-width: 500px) {
    h5 {
      font-size: 1.2em;
    }
  }
</style>
