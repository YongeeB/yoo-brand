<script>
  import Name from "../../brand/Name.svelte";
  import SideNavBar from "../../side-navbar/layout.svelte";
  import AppIcons from "./components/Apps/layout.svelte";
  import Contact from "./components/Contact.svelte";
  import Inputs from "./components/Form/Inputs/layout.svelte";
  import Form from "./components/Form/layout.svelte";
  import CallUs from "./components/call-us/layout.svelte";
</script>

<Contact>
  <SideNavBar />
  <Form>
    <Name>
      <a href="/" data-sveltekit-preload-data>
        <h3 id="brand-name">Yoo Brand</h3>
      </a>
    </Name>
    <Inputs />
    <textarea placeholder="message" draggable="false" />
    <button>send</button>
    <AppIcons />
  </Form>
  <CallUs />
</Contact>

<style>
  a #brand-name {
    font-family: "Lobster";
    font-size: 1.7em;
    letter-spacing: 0.1em;
    text-align: center;
    color: transparent;
    background: radial-gradient(rgb(97, 255, 102), var(--main-color));
    background-clip: text;
    -webkit-background-clip: text;
  }
  textarea {
    width: 100%;
    height: 120px;
    padding: 5px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid inherit;
    border-radius: 1em;
    font-family: "Philosopher";
    font-size: 1em;
  }

  textarea::placeholder {
    color: black;
    opacity: 90%;
  }

  textarea:focus {
    border: 1px solid var(--main-color);
  }

  button {
    width: 50px;
    height: 30px;
    margin: 1em 0;
    border-radius: 5px;
    border: none;
    background-color: var(--main-color);
    font-weight: bold;
    font-family: "Philosopher";
    font-size: 1em;
  }
</style>
