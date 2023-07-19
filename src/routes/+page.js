/** @type {import('@sveltejs/adapter-vercel').Config} */
import { products } from "../products";

export const config = {
  runtime: "edge",
};
export async function load() {
  return {
    products,
  };
}
