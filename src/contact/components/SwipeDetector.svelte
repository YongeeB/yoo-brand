<script>
// @ts-nocheck

    import { createEventDispatcher, onMount} from "svelte";

    export let navRef;

    var direction;

    let startX = 0, 
        startY = 0;

    let width;

    const dispatch = createEventDispatcher();

    const onSwipe = direction => direction;

    function handleTouchStart(event){
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    }

    function handleTouchEnd(event){
        const endX = event.changedTouches[0].clientX;
        const endY = event.changedTouches[0].clientY;

        const deltaX = endX - startX;
        const deltaY = endY - startY;

        if(Math.abs(deltaX) > Math.abs(deltaY))direction = onSwipe(deltaX > 0 ? "right" : "left");
        else
        direction = onSwipe(deltaY > 0 ? "down" : "up");
        direction == "right" && dispatch("swipe-right", true)
    }

    function handleOutsideClick(e){
        const outsideElem = !e.composedPath().includes(navRef);
        if(outsideElem){
            direction = "none";
            dispatch("outside-click", false);
        }
    }

    function handleResize(){
        width = window.innerWidth;
    }

    onMount(()=>{

        width = window.innerWidth;

        document.addEventListener("touchstart", handleTouchStart);

        document.addEventListener("touchend", handleTouchEnd);

        document.addEventListener("click", handleOutsideClick)

        window.addEventListener("resize", handleResize)

    })
    
</script>

<main>
    {#if direction == "right" || width >= 768}
        <slot>
        </slot>
    {/if}
</main>