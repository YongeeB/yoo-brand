<script>
// @ts-nocheck

  import Header from "../header/Header.svelte";
  import Links from "../navigation/Links.svelte";
  import Theme from "../theme/Theme.svelte";
  import Name from "../web/Name.svelte";
  import Products from "./components/Products.svelte";
  import YooBrandInfo from "./components/YooBrandInfo.svelte";

  let currentTheme;

  const changeTheme = e => currentTheme = e.detail;


</script>
<Header>
    <Name {currentTheme}/>
    <Links />
    <Theme on:toggle-theme={changeTheme} scale={1.2}/>
</Header>
<YooBrandInfo />
<Products />

