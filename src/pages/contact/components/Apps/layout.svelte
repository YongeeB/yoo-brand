<script>
  import Icon from "./Icon.svelte";
  let icons = [
    {
      name: "Instagram",
      imgSrc: "../../../../../app-icons/instagram.svg",
      src: "https://instagram.com/yooaesthetics?igshid=MzNINGNkZWQ4Mg==",
    },
    {
      name: "Snapchat",
      imgSrc: "../../../../../app-icons/snapchat.svg",
      src: "/",
    },
    {
      name: "TikTok",
      imgSrc: "../../../../../app-icons/tiktok.svg",
      src: "https://www.tiktok.com/@yoo_gallery?_t=8dD4UoGxDQT&_r=1",
    },
    {
      name: "Whatsapp",
      imgSrc: "../../../../../app-icons/whatsapp.svg",
      src: "/",
    },
  ];
</script>

<div class="apps">
  {#each icons as icon, index (index)}
    <Icon name={icon.name} href={icon.src} src={icon.imgSrc} />
  {/each}
</div>
