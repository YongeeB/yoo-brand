<main class="product-card">
  <slot />
</main>

<style>
  .product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.5s ease-in;
  }

  .product-card:hover {
    transform: scale(1.01);
  }
</style>
