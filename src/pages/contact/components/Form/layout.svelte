<div class="form">
  <slot />
</div>

<style>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (768px <= width <= 1000px) {
    .form {
      transform: translateX(3em);
    }
  }
</style>
