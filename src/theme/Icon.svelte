<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import { moonO } from "svelte-awesome/icons";

  let currentTheme = "light";

  $: lightTheme = currentTheme == "light";

  const dispatch = createEventDispatcher();

  const toggleTheme = bg_color => {
    document.documentElement.setAttribute("data-theme", bg_color);
    currentTheme = bg_color;
    localStorage.setItem("theme", bg_color);
    dispatch("toggle-theme", bg_color);
  };

  onMount(() => {
    const themeColor = localStorage.getItem("theme");

    if (themeColor) {
      toggleTheme(themeColor);
      currentTheme = themeColor;
      dispatch("toggle-theme", themeColor);
    }
  });
</script>

<main class="theme-icon">
  <button on:click={() => toggleTheme(lightTheme ? "dark" : "light")}>
    <Icon data={moonO} scale={1.1} flip="horizontal" />
  </button>
</main>

<style>
  .theme-icon {
    text-align: right;
  }

  .theme-icon button {
    border: none;
    background-color: transparent;
    color: inherit;
  }
</style>
