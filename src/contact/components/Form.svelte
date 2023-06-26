<script>
//@ts-nocheck
  import { onMount } from "svelte";
 import ContactUs from "./ContactUs.svelte"
  import Visit from "./Visit.svelte";

  let inputRef;
  export let collapse;

  onMount(()=> {
    inputRef.focus();
  })

</script>
<div class="center-box" id={!collapse && "opaque"}>
<ContactUs />
<div class="form-container">
    <form on:submit|preventDefault>
        <input type="text" placeholder="Full Name" bind:this={inputRef}/>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Message" />
        <button>send</button>
    </form>
</div>
<Visit />
</div>

<style>
    #opaque {
        position: relative;
        opacity: 40%;
        z-index: -2;
    }
    .center-box {
        position: absolute;
        inset: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .form-container {
        width: 100%;
    }

    .form-container form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .form-container form input {
        caret-color: var(--tertiary-color);
        width: 80%;
        max-width: 250px;
        height: 40px;
        margin-bottom: 2em;
        border-radius: 5px;
        padding: 1em;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: bolder;
        box-sizing: border-box;
    }

    .form-container form input:placeholder {
        color: var(--tertiary-color);
    }

    .form-container form input:nth-child(1){
        text-transform: capitalize;
    }

    .form-container form input:focus {
        outline: none;
        border: 1px solid var(--tertiary-color);
    }

    .form-container form button {
        border: none;
        padding: 8px 1em;
        border-radius: 5px;
        color: black;
        background-color: var(--tertiary-color);
        font-weight: bolder;
    }
</style>