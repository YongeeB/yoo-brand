import { error } from "@sveltejs/kit";

import { products } from "../../products";
export async function load({ params }) {
  const product = products.find(product => product.name == params.product);

  if (product) {
    return { product };
  }
  throw error(404, "not found");
}
