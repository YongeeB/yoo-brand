<script>
// @ts-nocheck

  import "../global.css";
  import Header from "../header/Header.svelte";
  import Icon from "svelte-awesome/components/Icon.svelte"
  import { navicon } from "svelte-awesome/icons"
  import Form from "./components/Form.svelte";
  import NavComponents from "./components/NavComponents.svelte";

  let collapse = true;

  function handleClick(){
    collapse = false;
  }

  function handleCollapse(e){
    collapse = e.detail;
  }

</script>
<div class="nav-container">
{#if collapse}
   <div style="display: none;"></div>
    {:else}
    <NavComponents on:collapse={handleCollapse}/>
    {/if}
</div>
<main class="container">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={handleClick}>
    <Header>
        <Icon data={navicon} scale={1.3} id="navicon"/>
    </Header>
    </div>
    <Form {collapse}/>
</main>

<style>
    .nav-container {
        overflow: hidden;
    }
    :global(#navicon){
        /* background-color: red; */
        position: relative;
        z-index: 2;
        transition: color .5s linear;
    }
    :global(#navicon:hover){
        color: var(--tertiary-color);
    }
</style>