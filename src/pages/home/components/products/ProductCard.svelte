<main class="product-card">
  <slot />
</main>

<style>
  .product-card {
    box-sizing: border-box;
    transition: transform 0.5s ease-in;
  }

  .product-card:hover {
    transform: scale(1.01);
  }
</style>
