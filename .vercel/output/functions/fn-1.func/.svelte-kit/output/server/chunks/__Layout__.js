import { c as create_ssr_component, d as add_attribute, v as validate_component } from "./ssr.js";
import { I as Icon, p as phone, H as Header, n as navicon } from "./Theme.svelte_svelte_type_style_lang.js";
const ContactUs_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: 'section.svelte-4e1ufd header h3.svelte-4e1ufd{text-align:center;color:var(--tertiary-color);font-weight:900;font-size:crimson;font-family:"Muktha"}',
  map: null
};
const ContactUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="svelte-4e1ufd" data-svelte-h="svelte-g9ixa2"><header><h3 class="svelte-4e1ufd">Contact Us</h3></header> </section>`;
});
const Visit_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".visit-container.svelte-1ysfpew.svelte-1ysfpew{display:flex;flex-direction:column;align-items:center}.visit-container.svelte-1ysfpew .icons-box.svelte-1ysfpew{transform:translateY(-0.5em)}.visit-container.svelte-1ysfpew img.svelte-1ysfpew{width:25px;height:25px;margin-right:1.2em}",
  map: null
};
const Visit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="visit-container svelte-1ysfpew" data-svelte-h="svelte-1ij9geq"><h3>visit us on</h3> <div class="icons-box svelte-1ysfpew"><a href="https://instagram.com/yooaesthetics?igshid=MzNINGNkZWQ4Mg=="><img src="/app-icons/instagram.svg" alt="instagram" class="svelte-1ysfpew"></a> <a href="/"><img src="/app-icons/snapchat.svg" alt="snapchat" class="svelte-1ysfpew"></a> <a href="https://www.tiktok.com/@yoo_gallery?_t=8dD4UoGxDQT&_r=1"><img src="/app-icons/tiktok.svg" alt="tiktok" class="svelte-1ysfpew"></a> <a href="/"><img src="/app-icons/whatsapp.svg" alt="whatsapp" class="svelte-1ysfpew"></a></div> </div>`;
});
const Form_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '#opaque.svelte-11dv1dp.svelte-11dv1dp{position:relative;opacity:40%;z-index:-2}.center-box.svelte-11dv1dp.svelte-11dv1dp{position:absolute;inset:0;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center}.form-container.svelte-11dv1dp.svelte-11dv1dp{width:100%}.form-container.svelte-11dv1dp form.svelte-11dv1dp{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.form-container.svelte-11dv1dp form input.svelte-11dv1dp{border:1px solid var(--tertiary-color);caret-color:var(--tertiary-color);width:80%;max-width:250px;height:50px;margin-bottom:2em;border-radius:1em;padding:10px;box-sizing:border-box;font-size:16px;font-weight:bold;box-sizing:border-box;font-family:"Fira Code"}.form-container.svelte-11dv1dp form input.svelte-11dv1dp:nth-child(1){text-transform:capitalize}.form-container.svelte-11dv1dp form input.svelte-11dv1dp:focus{outline:none;border:1px solid var(green)}.form-container.svelte-11dv1dp form button.svelte-11dv1dp{border:none;padding:8px 1em;border-radius:10px;color:black;background-color:var(--tertiary-color);font-weight:bolder;font-size:0.9em;font-family:"Fira Code";transition:all .5s linear}.form-container.svelte-11dv1dp form button.svelte-11dv1dp:hover{background-color:green}@media(orientation: landscape){.center-box.svelte-11dv1dp.svelte-11dv1dp{transform:translateY(2em)}}',
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputRef;
  let { collapse } = $$props;
  if ($$props.collapse === void 0 && $$bindings.collapse && collapse !== void 0)
    $$bindings.collapse(collapse);
  $$result.css.add(css$1);
  return `<div class="center-box svelte-11dv1dp"${add_attribute("id", !collapse && "opaque", 0)}>${validate_component(ContactUs, "ContactUs").$$render($$result, {}, {}, {})} <div class="form-container svelte-11dv1dp"><form class="svelte-11dv1dp"><input type="text" placeholder="Full Name" class="svelte-11dv1dp"${add_attribute("this", inputRef, 0)}> <input type="text" placeholder="Email" class="svelte-11dv1dp"> <input type="text" placeholder="Message" class="svelte-11dv1dp"> <button class="svelte-11dv1dp" data-svelte-h="svelte-11upy20">send</button></form></div> ${validate_component(Visit, "Visit").$$render($$result, {}, {}, {})} </div>`;
});
const NavComponents_svelte_svelte_type_style_lang = "";
const __Layout___svelte_svelte_type_style_lang = "";
const css = {
  code: ".phone-box.svelte-7tfr1i{position:absolute;z-index:10;right:1em;bottom:1em;width:40px;height:40px;border-radius:50%;display:flex;justify-content:center;align-items:center;background:#000}#phone-icon{color:var(--secondary-color)}#navicon{position:relative;z-index:2;transition:color .5s linear}#navicon:hover{color:var(--tertiary-color)}",
  map: null
};
const _Layout_ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let collapse = true;
  $$result.css.add(css);
  return `<a href="tel: +2348171983663"><div class="phone-box svelte-7tfr1i">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      data: phone,
      flip: "horizontal",
      scale: 1.4,
      id: "phone-icon"
    },
    {},
    {}
  )}</div></a> ${``} <main class="container">  <div>${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Icon, "Icon").$$render($$result, { data: navicon, scale: 1.3, id: "navicon" }, {}, {})}`;
    }
  })}</div> ${validate_component(Form, "Form").$$render($$result, { collapse }, {}, {})} </main>`;
});
export {
  _Layout_ as _
};
