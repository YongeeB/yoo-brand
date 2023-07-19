<script>
  import { onMount } from "svelte";

  export let name;
  export let placeholder;
  export let type;

  onMount(() => {
    let input = document.querySelector("input");
    input.focus();
    input.style.textTransform = "capitalize";
  });
</script>

<input {name} {placeholder} {type} />

<style>
  input {
    font-weight: bold;
    display: block;
    margin: 1em 0;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;
    width: 100%;
    max-width: 400px;
    border: 1px solid black;
    font-family: "Zilla Slab";
    font-weight: bold;
    font-size: 1em;
  }

  input:focus {
    border: 1px solid var(--page-color);
  }
</style>
