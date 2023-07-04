<script>
// @ts-nocheck

  import { onMount } from "svelte";

// @ts-nocheck

  import Name from "../../web/Name.svelte";
  import Form from "./Form.svelte";
  import VisitUs from "./VisitUs.svelte";
  
  export let currentTheme;
  export let fade;

  let pageTheme;

  onMount(()=>{
    pageTheme = localStorage.getItem("theme");
    const html = document.querySelector("html")
    html.dataset.theme = pageTheme
  })

  
  

</script>
<main>
    <div class={"center-box " + `${fade ? "fade" : "unfade"} `}>
        <Name currentTheme={currentTheme ? currentTheme : pageTheme} responsive="no" size="2em" />
        <Form />
        <VisitUs />
    </div>
</main>

<style>
    .center-box {
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .center-box.fade {
        opacity: 50%;
    }

    .center-box.unfade {
        opacity: 100%;
    }

    @media(min-width: 768px){
        .center-box {
            transform: translateX(100px);
        }
    }

    @media(orientation: landscape){
        .center-box {
            transform: translateY(2em);
        }
    }
</style>