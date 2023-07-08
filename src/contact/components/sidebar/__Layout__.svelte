<script>
  import Links from "./Links.svelte";
  import Theme from "../../../theme/Theme.svelte";

  let currentTheme;

  function changeTheme(e){
    currentTheme = e.detail;
  }

</script>
<Links {currentTheme} on:reference>
    <Theme scale={2} on:toggle-theme={changeTheme} />
</Links>