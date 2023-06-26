<script>
// @ts-nocheck

  import "../global.css";
  import Header from "../header/Header.svelte";
  import Icon from "svelte-awesome/components/Icon.svelte"
  import { navicon, phone } from "svelte-awesome/icons"
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
<a href="tel: +2348171983663">
<div class="phone-box">
    <Icon data={phone} flip="horizontal" scale={1.4} id="phone-icon" />
</div>
</a>

{#if !collapse}
    <NavComponents on:collapse={handleCollapse}/>
{/if}

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

    .phone-box {
        position: absolute;
        z-index: 10;
        right: 1em;
        top: 1em;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000;
    }
    :global(#phone-icon){
        color: var(--secondary-color);
    }
    :global(#navicon){
        position: relative;
        z-index: 2;
        transition: color .5s linear;
    }
    :global(#navicon:hover){
        color: var(--tertiary-color);
    }
</style>