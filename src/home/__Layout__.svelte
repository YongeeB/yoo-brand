<script>
// @ts-nocheck

  import "../global.css";

  import TopBar from "../top-bar/TopBar.svelte";
  import Links from "../navigation/Links.svelte";
  import Theme from "../theme/Theme.svelte";
  import Name from "../web/Name.svelte";
  import Products from "./components/Products.svelte";
  import YooBrandInfo from "./components/YooBrandInfo.svelte";

  let currentTheme;

  const changeTheme = e => currentTheme = e.detail;


</script>
<TopBar>
    <Name {currentTheme} responsive="yes" size="1.3em" />
    <Links />
    <Theme on:toggle-theme={changeTheme} scale={1.2} />
</TopBar>
<YooBrandInfo />
<Products />

