<script>
  import Icon from "svelte-awesome/components/Icon.svelte";

  export let name;
  export let href;
  export let icon;

  export let pageName;
</script>

<li class="link" id={`${href == pageName ? "active" : "inactive"}`}>
  <a {href} data-sveltekit-preload-data>
    <Icon data={icon} class="link-icon" scale={1.5} />
    <h5 id="link-name">{name}</h5>
  </a>
</li>

<style>
  .link {
    width: 100%;
    height: 40px;
    list-style-type: none;
  }

  .link#active {
    background-color: var(--main-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 15px;
    color: black;
  }

  .link#inactive {
    transition: color 1s linear;
  }

  .link#inactive:hover {
    color: var(--main-color);
  }
  .link a {
    font-family: "Source Code Pro";
    display: grid;
    font-weight: bolder;
    grid-template-columns: 30% 70%;
    align-items: center;
  }

  :global(.link-icon) {
    text-align: center;
    width: 100%;
  }

  h5#link-name {
    text-align: center;
    font-size: 1em;
    font-weight: bold;
  }
</style>
