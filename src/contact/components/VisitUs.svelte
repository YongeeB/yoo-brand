<script>
  import App from "./App.svelte";

  const baseUrl = "/app-icons";

</script>

<div class="visit-us">
        <p>Visit us on</p>
</div>

<div class="app-Container">
    <App iconSrc={baseUrl + "/instagram.svg"} iconName="Instagram" link="https://instagram.com/yooaesthetics?igshid=MzNINGNkZWQ4Mg==" />

    <App iconSrc={baseUrl + "/snapchat.svg"} iconName="Snapchat" link="/" />

    <App iconSrc={baseUrl + "/tiktok.svg"} iconName="TikTok" link="https://www.tiktok.com/@yoo_gallery?_t=8dD4UoGxDQT&_r=1" />

    <App iconSrc={baseUrl + "/whatsapp.svg"} iconName="WhatsApp" link="/" />
</div>

<style>
    .app-Container {
        height: 40px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .visit-us p {
        font-size: 1.2em;
        font-weight: bold;
        font-family: cursive;
    }
</style>
