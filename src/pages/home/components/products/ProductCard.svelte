<main class="product-card">
  <slot />
</main>

<style>
  .product-card {
    transition: transform 0.5s ease-in;
  }

  .product-card:hover {
    transform: scale(1.01);
  }
</style>
