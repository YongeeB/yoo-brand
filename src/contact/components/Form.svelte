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
        height: 50px;
        margin-bottom: 2em;
        border-radius: 1em;
        padding: 10px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: bold;
        box-sizing: border-box;
        font-family: "Fira Code";
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
        border-radius: 10px;
        color: black;
        background-color: var(--tertiary-color);
        font-weight: bolder;
        font-size: 0.9em;
        font-family: "Fira Code";
        transition: all .5s linear;
    }

    .form-container form button:hover{
        background-color: green;
    }

    @media(orientation: landscape){
        .center-box {
            transform: translateY(2em);
        }
    }
</style>