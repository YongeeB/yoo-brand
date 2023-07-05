<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Form from "./Form.svelte";
  import AppsIcons from "./AppsIcons.svelte";
    let contactUs_Ref;
    const dispatch = createEventDispatcher();

    onMount(()=>{
        dispatch("contact-ref", contactUs_Ref);
    })
</script>

<div class="contact-us_container" bind:this={contactUs_Ref}>
    <p id="title">
        Contact Us
    </p>
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

    #title {
        color: var(--tertiary-color);
        font-weight: bolder;
        font-size: 1.5em;
        font-family: "Fira Code";
        
    }

    @media(min-width: 768px){
        .contact-us_container {
            transform: translateX(13%);
        }
    }

</style>