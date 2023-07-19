import { c as create_ssr_component, e as escape, h as null_to_empty, d as add_attribute, v as validate_component, f as each } from "./ssr.js";
import { a as Icon, h as home, b as productHunt, s as shoppingCart, c as phoneSquare, I as Icon_1 } from "./Icon.js";
const SideBar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".sidebar.svelte-1hv2jd0{position:absolute;top:0;left:0;width:65%;max-width:300px;z-index:2;height:100vh;display:flex;flex-direction:column;display:none}.sidebar.light.svelte-1hv2jd0{background-color:var(--light);color:var(--dark)}.sidebar.dark.svelte-1hv2jd0{background-color:var(--dark);color:var(--light)}",
  map: null
};
const SideBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentTheme } = $$props;
  if ($$props.currentTheme === void 0 && $$bindings.currentTheme && currentTheme !== void 0)
    $$bindings.currentTheme(currentTheme);
  $$result.css.add(css$3);
  return `<div class="${escape(null_to_empty(`sidebar ${currentTheme == "light" ? "light" : "dark"}`), true) + " svelte-1hv2jd0"}">${slots.default ? slots.default({}) : ``} </div>`;
});
const Link_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.link.svelte-yjt6w0.svelte-yjt6w0{width:100%;height:40px;list-style-type:none}.link#active.svelte-yjt6w0.svelte-yjt6w0{background-color:var(--page-color);display:flex;flex-direction:column;justify-content:center;border-radius:15px;color:black}.link#inactive.svelte-yjt6w0.svelte-yjt6w0{transition:color 1s linear}.link#inactive.svelte-yjt6w0.svelte-yjt6w0:hover{color:var(--page-color)}.link.svelte-yjt6w0 a.svelte-yjt6w0{font-family:"Source Code Pro";display:grid;font-weight:bolder;grid-template-columns:30% 70%;align-items:center}.link-icon{text-align:center;width:100%}h5#link-name.svelte-yjt6w0.svelte-yjt6w0{text-align:center;font-size:1em;font-weight:bold}',
  map: null
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { href } = $$props;
  let { icon } = $$props;
  let { pageName } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.pageName === void 0 && $$bindings.pageName && pageName !== void 0)
    $$bindings.pageName(pageName);
  $$result.css.add(css$2);
  return `<li class="link svelte-yjt6w0"${add_attribute("id", `${href == pageName ? "active" : "inactive"}`, 0)}><a${add_attribute("href", href, 0)} data-sveltekit-preload-data class="svelte-yjt6w0">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      data: icon,
      class: "link-icon",
      scale: 1.5
    },
    {},
    {}
  )} <h5 id="link-name" class="svelte-yjt6w0">${escape(name)}</h5></a> </li>`;
});
const Layout_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".links.svelte-15xye2f{display:flex;flex-direction:column;height:100%;justify-content:space-evenly}",
  map: null
};
const Layout$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    { name: "Home", href: "/", icon: home },
    {
      name: "Products",
      href: "/products",
      icon: productHunt
    },
    {
      name: "Order",
      href: "/order",
      icon: shoppingCart
    },
    {
      name: "Contact",
      href: "/contact",
      icon: phoneSquare
    }
  ];
  let pageName;
  $$result.css.add(css$1);
  return `<ul class="links svelte-15xye2f">${each(links, ({ name, href, icon }, index) => {
    return `${validate_component(Link, "Link").$$render($$result, { name, href, icon, pageName }, {}, {})}`;
  })} </ul>`;
});
const layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".theme-icon.svelte-c7itij{transform:translateY(-3em)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentTheme;
  $$result.css.add(css);
  return `${validate_component(SideBar, "SideBar").$$render($$result, { currentTheme }, {}, {
    default: () => {
      return `${validate_component(Layout$1, "Links").$$render($$result, {}, {}, {})} <div class="theme-icon svelte-c7itij">${validate_component(Icon_1, "ThemeIcon").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});
export {
  Layout as L
};
