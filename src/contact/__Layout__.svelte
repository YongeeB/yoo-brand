<script>
// @ts-nocheck
    import CallUs from "./components/CallUs.svelte";
    import SwipeDetector from "./components/SwipeDetector.svelte";
    import SideBar from "./components/SideBar.svelte";
    import ContactUs from "./components/ContactYooBrand.svelte";
    import { onMount } from "svelte";


    let navRef;
    let currentTheme;
    let fade;

    const handleRef = e => navRef = e.detail;

    const handleTheme = e => currentTheme = e.detail;

    const SwipeRight = e => fade = e.detail;

    const handleOutsideClick = e => fade = e.detail;

    onMount(()=> currentTheme = localStorage.getItem("theme"))

    
</script>

<main>
    <CallUs />
    <SwipeDetector {navRef} on:swipe-right={SwipeRight} on:outside-click={handleOutsideClick}>
        <SideBar on:reference={handleRef} {currentTheme} on:toggle-theme={handleTheme} />
    </SwipeDetector>
    <ContactUs {currentTheme} {fade} />
</main>
