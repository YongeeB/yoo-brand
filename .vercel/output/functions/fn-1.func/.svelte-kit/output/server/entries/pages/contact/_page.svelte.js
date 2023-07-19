import { c as create_ssr_component, d as add_attribute, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { a as Icon$1, p as phone, N as Name } from "../../../chunks/Icon.js";
import { L as Layout$5 } from "../../../chunks/layout.js";
const Icon_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".app.svelte-rjcs55.svelte-rjcs55{display:inline;margin:0 1em}.app.svelte-rjcs55 a img.svelte-rjcs55{width:25px}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { href } = $$props;
  let { src } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  $$result.css.add(css$5);
  return `<main class="app svelte-rjcs55"><a${add_attribute("href", href, 0)}><img${add_attribute("src", src, 0)}${add_attribute("alt", name, 0)} class="svelte-rjcs55"></a> </main>`;
});
const Layout$4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icons = [
    {
      name: "Instagram",
      imgSrc: "../../../../../app-icons/instagram.svg",
      src: "https://instagram.com/yooaesthetics?igshid=MzNINGNkZWQ4Mg=="
    },
    {
      name: "Snapchat",
      imgSrc: "../../../../../app-icons/snapchat.svg",
      src: "/"
    },
    {
      name: "TikTok",
      imgSrc: "../../../../../app-icons/tiktok.svg",
      src: "https://www.tiktok.com/@yoo_gallery?_t=8dD4UoGxDQT&_r=1"
    },
    {
      name: "Whatsapp",
      imgSrc: "../../../../../app-icons/whatsapp.svg",
      src: "/"
    }
  ];
  return `<div class="apps">${each(icons, (icon, index) => {
    return `${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        name: icon.name,
        href: icon.src,
        src: icon.imgSrc
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const Contact_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".contact-box.svelte-bslocy{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<main class="contact-box svelte-bslocy">${slots.default ? slots.default({}) : ``} </main>`;
});
const Input_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: 'input.svelte-1v2jt2q{font-weight:bold;display:block;margin:1em 0;height:40px;padding:0 10px;border-radius:5px;outline:none;box-sizing:border-box;width:100%;max-width:400px;border:1px solid black;font-family:"Zilla Slab";font-weight:bold;font-size:1em}input.svelte-1v2jt2q:focus{border:1px solid var(--page-color)}',
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { placeholder } = $$props;
  let { type } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$3);
  return `<input${add_attribute("name", name, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("type", type, 0)} class="svelte-1v2jt2q">`;
});
const Layout$3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputs = [{ name: "name", type: "text" }, { name: "email", type: "email" }];
  return `${each(inputs, ({ name, type }, index) => {
    return `${validate_component(Input, "Input").$$render($$result, { name, placeholder: name, type }, {}, {})}`;
  })}`;
});
const layout_svelte_svelte_type_style_lang$1 = "";
const css$2 = {
  code: ".form.svelte-1ol8bkh{display:flex;flex-direction:column;align-items:center}@media(768px <= width <= 1000px){.form.svelte-1ol8bkh{transform:translateX(3em)}}",
  map: null
};
const Layout$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="form svelte-1ol8bkh">${slots.default ? slots.default({}) : ``} </div>`;
});
const CallUs_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".call-us.svelte-1tz2w7h a.svelte-1tz2w7h{position:absolute;bottom:1em;right:1em;width:35px;height:35px;background-color:var(--page-color);color:black;font-weight:bold;display:flex;justify-content:center;align-items:center;border-radius:50%}",
  map: null
};
const CallUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="call-us svelte-1tz2w7h"><a href="tel:+2348171983663" class="svelte-1tz2w7h">${slots.default ? slots.default({}) : ``}</a> </div>`;
});
const Layout$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(CallUs, "CallUs").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Icon$1, "Icon").$$render(
        $$result,
        {
          data: phone,
          scale: 1.35,
          flip: "horizontal"
        },
        {},
        {}
      )}`;
    }
  })}`;
});
const layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '#brand-name.svelte-1s74ozc{font-family:"Lobster";font-size:1.7em;letter-spacing:0.1em;text-align:center;color:transparent;background:radial-gradient(var(--page-color), green);background-clip:text;-webkit-background-clip:text}textarea.svelte-1s74ozc{width:100%;height:80px;padding:5px;box-sizing:border-box;outline:none;border:1px solid inherit;border-radius:1em;font-family:"Philosopher";font-size:1em}textarea.svelte-1s74ozc::placeholder{color:black;opacity:90%}textarea.svelte-1s74ozc:focus{border:1px solid var(--page-color)}button.svelte-1s74ozc{width:50px;height:30px;margin:1em 0;border-radius:5px;border:none;background-color:var(--page-color);font-weight:bold;font-family:"Philosopher";font-size:1em}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Contact, "Contact").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Layout$5, "SideNavBar").$$render($$result, {}, {}, {})} ${validate_component(Layout$2, "Form").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Name, "Name").$$render($$result, {}, {}, {
            default: () => {
              return `<h3 id="brand-name" class="svelte-1s74ozc" data-svelte-h="svelte-193hdgu">Yoo
        <br>
        Brand</h3>`;
            }
          })} ${validate_component(Layout$3, "Inputs").$$render($$result, {}, {}, {})} <textarea placeholder="message" draggable="false" class="svelte-1s74ozc"></textarea> <button class="svelte-1s74ozc" data-svelte-h="svelte-11upy20">send</button> ${validate_component(Layout$4, "AppIcons").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Layout$1, "CallUs").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-bonrbl_START -->${$$result.title = `<title>Contact Us</title>`, ""}<!-- HEAD_svelte-bonrbl_END -->`, ""} ${validate_component(Layout, "Contact").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
