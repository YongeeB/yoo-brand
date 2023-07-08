<script>
  import SwipeDetector from "./components/SwipeDetector.svelte";
  import SideBar from "./components/sidebar/__Layout__.svelte";
  import { onMount } from "svelte";
  import ContactUs from "./components/contact-us/__Layout__.svelte";
  import PhoneUs from "./components/PhoneUs.svelte";
  import { fade } from "svelte/transition";

  let direction;
  let sideBarRef;
  let pageWidth;
  let contactRef;

  function side_bar(display){
    sideBarRef.style.display = display;
  }

  function handleDirection(e){
    direction = e.detail;
    
    if(direction == "right") {
        side_bar("block")
        contactRef.style.opacity = 0.5;
        console.log(contactRef)
    }
  }

  function navRef(ref){
    sideBarRef = ref.detail;
  }

  function windowResize(){
    pageWidth = window.innerWidth;

    (pageWidth >= 768 || direction == "right") ? side_bar("block") :
    side_bar("none");
        
  }

  function handleOutsideClick(e){
     let outsideClick = !e.composedPath().includes(sideBarRef);

     if(outsideClick && pageWidth < 768){
        sideBarRef.style.display = "none";
        contactRef.style.opacity = 1;
     }
  }

  function handleContactRef(ref){
    contactRef = ref.detail;
  }

  onMount(()=>{
    pageWidth = window.innerWidth;

    console.log(sideBarRef)

    if(pageWidth >= 768){ 
        side_bar("block");
        contactRef.style.opacity = 1;
    }

    window.addEventListener("resize", windowResize);

    document.addEventListener("click", handleOutsideClick)
  })

</script>

<div in:fade="{{duration: 2500}}">
<SwipeDetector on:swipe={handleDirection}>
    <SideBar on:reference={navRef}/>
</SwipeDetector>
<ContactUs on:contact-ref={handleContactRef}/>
<PhoneUs />
</div>

