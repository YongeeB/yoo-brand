<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Form from "./Form.svelte";
  import AppsIcons from "./apps/Icons.svelte";
  
    let contactUs_Ref;
    const dispatch = createEventDispatcher();

    onMount(()=>{
        dispatch("contact-ref", contactUs_Ref);
    })
</script>

<div class="contact-us_container" bind:this={contactUs_Ref}>
    <header>
        <a href="/">
        <h1>Yoo
            <br />   
            Brand 
        </h1>
        </a>
    </header>
    <Form />
    <h4 style="font-family: cursive">Visit us at</h4>
    <AppsIcons />
</div>

<style>
    .contact-us_container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: opacity .5s ease;
    }

    header a {
        color: inherit;
        text-decoration: inherit;
    }

    header a h1 {
        text-align: center;
        font-family: "Allura";
        transition: color 1s linear; 
        font-family: 'Caprasimo';
        font-size: 2em;
        color: transparent;
        background: radial-gradient(var(--tertiary-color), green);
        background-clip: text;
        -webkit-background-clip: text;
    }

    header a h1:hover {
        color: var(--tertiary-color);
    }

    @media(min-width: 768px) and (max-width: 1000px){
        .contact-us_container {
            transform: translateX(13%);
        }
    }

</style>