<script>
  import { createEventDispatcher, onMount } from "svelte";

    var startX = 0,
        startY = 0;

    const dispatch = createEventDispatcher();
    function onSwipe(direction){
        dispatch("swipe", direction);
    }

    function handleTouchStart(e){
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }

    function handleTouchEnd(e){
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;

        const deltaX = endX - startX;
        const deltaY = endY - startY;

        if(Math.abs(deltaX) > Math.abs(deltaY)) 
            onSwipe(deltaX > 0 ? "right" : "left");
        else
            onSwipe(deltaY > 0 ? "down" : "up")
    }

    
    onMount(()=> {

        document.addEventListener("touchstart", handleTouchStart);

        document.addEventListener("touchend", handleTouchEnd);
    })
</script>

<main>
    <slot></slot>
</main>