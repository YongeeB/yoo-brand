/** @type {import('@sveltejs/adapter-vercel').Config} */

import { error } from "@sveltejs/kit";

import { products } from "../../products";

export const config = {
  runtime: "edge",
};

export async function load({ params }) {
  const product = products.find(product => product.name == params.product);

  if (product) {
    return { product };
  }
  throw error(404, "not found");
}
