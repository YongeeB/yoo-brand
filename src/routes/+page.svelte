<script>
  import "../global.css";
  import YooBrand from "../pages/home/layout.svelte";

  export let data;
</script>

<svelte:head>
  <title>Yoo Brand</title>
</svelte:head>

<YooBrand products={data.products} />
