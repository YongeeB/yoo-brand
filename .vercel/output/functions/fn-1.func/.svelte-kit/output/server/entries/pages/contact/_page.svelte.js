import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header, I as Icon, n as navicon } from "../../../chunks/Theme.svelte_svelte_type_style_lang.js";
const ContactUs_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: 'section.svelte-1528ap8 header h3.svelte-1528ap8{text-align:center;color:var(--tertiary-color);font-weight:900;font-size:crimson;font-family:"Fira Code"}',
  map: null
};
const ContactUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="svelte-1528ap8" data-svelte-h="svelte-g9ixa2"><header><h3 class="svelte-1528ap8">Contact Us</h3></header> </section>`;
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
  code: "#opaque.svelte-n9ia83.svelte-n9ia83{position:relative;opacity:40%;z-index:-2}.center-box.svelte-n9ia83.svelte-n9ia83{position:absolute;inset:0;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center}.form-container.svelte-n9ia83.svelte-n9ia83{width:100%}.form-container.svelte-n9ia83 form.svelte-n9ia83{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.form-container.svelte-n9ia83 form input.svelte-n9ia83{caret-color:var(--tertiary-color);width:80%;max-width:250px;height:40px;margin-bottom:2em;border-radius:5px;padding:1em;box-sizing:border-box;font-size:16px;font-weight:bolder;box-sizing:border-box}.form-container.svelte-n9ia83 form input.svelte-n9ia83::placeholder{color:var(--tertiary-color)}.form-container.svelte-n9ia83 form input.svelte-n9ia83:nth-child(1){text-transform:capitalize}.form-container.svelte-n9ia83 form input.svelte-n9ia83:focus{outline:none;border:1px solid var(--tertiary-color)}.form-container.svelte-n9ia83 form button.svelte-n9ia83{border:none;padding:8px 1em;border-radius:5px;color:black;background-color:var(--tertiary-color);font-weight:bolder}",
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputRef;
  let { collapse } = $$props;
  if ($$props.collapse === void 0 && $$bindings.collapse && collapse !== void 0)
    $$bindings.collapse(collapse);
  $$result.css.add(css$1);
  return `<div class="center-box svelte-n9ia83"${add_attribute("id", !collapse && "opaque", 0)}>${validate_component(ContactUs, "ContactUs").$$render($$result, {}, {}, {})} <div class="form-container svelte-n9ia83"><form class="svelte-n9ia83"><input type="text" placeholder="Full Name" class="svelte-n9ia83"${add_attribute("this", inputRef, 0)}> <input type="text" placeholder="Email" class="svelte-n9ia83"> <input type="text" placeholder="Message" class="svelte-n9ia83"> <button class="svelte-n9ia83" data-svelte-h="svelte-11upy20">send</button></form></div> ${validate_component(Visit, "Visit").$$render($$result, {}, {}, {})} </div>`;
});
const NavComponents_svelte_svelte_type_style_lang = "";
const __Layout___svelte_svelte_type_style_lang = "";
const css = {
  code: ".nav-container.svelte-buwxx7{overflow:hidden}#navicon{position:relative;z-index:2;transition:color .5s linear}#navicon:hover{color:var(--tertiary-color)}",
  map: null
};
const _Layout_ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let collapse = true;
  $$result.css.add(css);
  return `<div class="nav-container svelte-buwxx7">${`<div style="display: none;"></div>`}</div> <main class="container">  <div>${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Icon, "Icon").$$render($$result, { data: navicon, scale: 1.3, id: "navicon" }, {}, {})}`;
    }
  })}</div> ${validate_component(Form, "Form").$$render($$result, { collapse }, {}, {})} </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(_Layout_, "Layout").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
