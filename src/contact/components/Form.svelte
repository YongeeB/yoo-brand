<script>
  import { onMount } from "svelte";
    let inputRef;
    onMount(()=> {
        inputRef.focus();
    })
</script>

<div class="form-container">
    <form on:submit|preventDefault>
        <input type="text" placeholder="Full Name" bind:this={inputRef}/>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Message" />
        <button type="submit">send</button>
    </form>
</div>

<style>
    .form-container {
        width: 100dvw;
    }

    .form-container form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form input {
        display: block;
        width: 75%;
        max-width: 300px;
        margin-bottom: 1em;
        height: 50px;
        border-radius: 0.5em;
        padding: 5px 10px;
        box-sizing: border-box;
        font-family: "Fira Code";
        border: 1px solid black;
        outline: none;
    }

    form input:nth-child(1){
        text-transform: capitalize;
    }

    form input:not(:nth-child(3)){
        font-weight: bold;
    }

    form input:focus {
        outline: none;
        border: 1px solid var(--tertiary-color);
    }
    form button {
        width: 50px;
        height: 30px;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        background-color: var(--tertiary-color);
        transition: all .5s linear;
    }

    form button:hover {
        background-color: green;
        color: cornsilk;
    }


</style>