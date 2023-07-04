<script>
// @ts-nocheck

  import { onMount } from "svelte";

    let inputRef;

    onMount(()=>
        inputRef.focus()
    )
</script>
<div class="form-container">
    <form on:submit|preventDefault>
        <input type="text" placeholder="Full Name" bind:this={inputRef} maxlength="100"/>
        <input type="text" placeholder="Email" maxlength="100"/>
            <input type="text" placeholder="Message" />
            <button type="submit">send</button>
        </form>
</div>


<style>
    .form-container {
        width: 100dvw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form-container form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .form-container input {
        margin-bottom: 1em;
        width: 80%;
        max-width: 300px;
        height: 40px;
        border-radius: 5px;
        padding: 5px;
        outline: none;
        font-size: 1.05em;
        letter-spacing: 0.05em;
        caret-color: green;
    }

    .form-container input:nth-child(1){
        text-transform: capitalize;
    }

    .form-container input:focus {
        border: 1px solid red;
    }

    .form-container input::placeholder {
        color: rgba(0,255,0, .7);
    }

    .form-container button {
        width: 70px;
        height: 40px;
        border-radius: 5px;
        background: rgba(0,255, 0, .7);
        color: whitesmoke;
        font-weight: bold;
        font-size: 1em;
        border: none;
        transition: background-color .5s ease;
    }

    .form-container button:hover {
        background-color: green;
    }

    
</style>