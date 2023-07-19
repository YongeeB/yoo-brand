<script>
  import { onMount } from "svelte";
  import ThemeIcon from "../theme/Icon.svelte";
  import SideBar from "./components/SideBar.svelte";
  import Links from "./links/Layout.svelte";

  let currentTheme;
  function theme(e) {
    currentTheme = e.detail;
  }

  let startX, startY;

  let direction;
  let screenWidth;

  function side_bar(display) {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = display;
  }

  function onSwipe(Direction) {
    direction = Direction;
    if (direction == "right" || screenWidth <= 768) {
      const form = document.querySelector(".form");
      if (form) {
        form.style.transition = "opacity .5s linear";
        form.style.opacity = 0.5;
      }

      side_bar("block");
    }
  }

  function handleTouchStart(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }

  function handleTouchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    const deltaX = endX - startX;
    const deltaY = endY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      onSwipe(deltaX > 0 ? "right" : "left");
    } else onSwipe(deltaY > 0 ? "down" : "up");
  }

  function handleOutsideClick(e) {
    const sidebar = document.querySelector(".sidebar");
    const outsideClick = !e.composedPath().includes(sidebar);

    if (outsideClick && screenWidth <= 768) {
      const form = document.querySelector(".form");
      side_bar("none");
      if (form) form.style.opacity = 1;
    }
  }

  function handleResize(e) {
    screenWidth = e.target.innerWidth;
    if (screenWidth >= 768) side_bar("block");
    else side_bar("none");
  }

  onMount(() => {
    screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      side_bar("block");
    }

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("click", handleOutsideClick);

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("click", handleOutsideClick);

      window.removeEventListener("resize", handleResize);
    };
  });
</script>

<SideBar {currentTheme}>
  <Links />
  <div class="theme-icon">
    <ThemeIcon on:toggle-theme={theme} />
  </div>
</SideBar>

<style>
  .theme-icon {
    transform: translateY(-3em);
  }
</style>
