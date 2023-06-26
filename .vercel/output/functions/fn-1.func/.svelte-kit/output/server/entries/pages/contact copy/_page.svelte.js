import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { _ as _Layout_ } from "../../../chunks/__Layout__.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(_Layout_, "Layout").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
