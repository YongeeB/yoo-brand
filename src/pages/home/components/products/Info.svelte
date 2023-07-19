<script>
  export let content;
  export let src;
</script>

<main class="info">
  <p id="content">
    {content.substr(0, 300) + "..."}
    <a href={src}>
      <span>see more</span>
    </a>
  </p>
</main>

<style>
  .info p {
    text-align: center;
    padding: 0 10px;
    line-height: 2em;
    font-family: "Source Code Pro";
  }

  .info #content a span {
    color: green;
    cursor: pointer;
  }
</style>
