<script>
  export let name;
</script>

<h3 id="title">{name}</h3>

<style>
  #title {
    font-family: "Lobster";
    letter-spacing: 0.3em;
    text-align: center;
    color: green;
    transition: all 0.5s linear;
  }

  #title:hover {
    color: red;
  }
</style>
