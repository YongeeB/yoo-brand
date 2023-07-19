<script>
  import Input from "./Input.svelte";
  let inputs = [
    {
      name: "name",
      type: "text",
    },
    {
      name: "email",
      type: "email",
    },
  ];
</script>

{#each inputs as { name, type }, index (index)}
  <Input {name} placeholder={name} {type} />
{/each}
