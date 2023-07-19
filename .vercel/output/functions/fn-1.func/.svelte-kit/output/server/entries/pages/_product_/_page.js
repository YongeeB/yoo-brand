import { e as error } from "../../../chunks/index.js";
import { p as products } from "../../../chunks/products.js";
async function load({ params }) {
  const product = products.find((product2) => product2.name == params.product);
  if (product) {
    return { product };
  }
  throw error(404, "not found");
}
export {
  load
};
