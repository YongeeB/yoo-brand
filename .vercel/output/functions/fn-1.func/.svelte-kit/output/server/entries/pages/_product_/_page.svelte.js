import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { N as Name } from "../../../chunks/Icon.js";
import { L as Layout$1 } from "../../../chunks/layout.js";
const Product_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".grid-768.svelte-1vd5xsa{display:grid;grid-template-columns:300px 1fr}",
  map: null
};
const Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageWidth;
  let screenWidth;
  $$result.css.add(css$2);
  pageWidth = screenWidth;
  return `${pageWidth >= 768 ? `<div class="grid-768 svelte-1vd5xsa"><div class="invisible-box"></div> <div class="product">${slots.default ? slots.default({}) : ``}</div></div>` : `<div class="product">${slots.default ? slots.default({}) : ``}</div>`}`;
});
const About_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'p#info.svelte-1wq2nzy{line-height:2em;font-family:"Zilla Slab";font-weight:bold}',
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { info } = $$props;
  if ($$props.info === void 0 && $$bindings.info && info !== void 0)
    $$bindings.info(info);
  $$result.css.add(css$1);
  return `<p id="info" class="m10 svelte-1wq2nzy">${escape(info)} </p>`;
});
const layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.product-name.svelte-110u9da{font-family:"Lobster";letter-spacing:0.2em;width:100%;text-align:center;color:var(--page-color)}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { info } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.info === void 0 && $$bindings.info && info !== void 0)
    $$bindings.info(info);
  $$result.css.add(css);
  return `${validate_component(Product, "Product").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Layout$1, "SideNavBar").$$render($$result, {}, {}, {})} ${validate_component(Name, "Name").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="product-name m10 svelte-110u9da">${escape(name)}</h1>`;
        }
      })} ${validate_component(About, "About").$$render($$result, { info }, {}, {})}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { name, info } = data.product;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-pmictq_START -->${$$result.title = `<title>${escape(name)}</title>`, ""}<!-- HEAD_svelte-pmictq_END -->`, ""} ${validate_component(Layout, "Product").$$render($$result, { name, info }, {}, {})}`;
});
export {
  Page as default
};
