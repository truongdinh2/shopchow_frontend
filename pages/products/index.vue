<template>
  <div>Product page</div>

  <section class="py-10 bg-gray-100">
    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="product of products">
        <!-- {{ product.title }} -->
        <ProductItemLT />
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'products',
});

// data alias products
const { data: products } = await useFetch('https://fakestoreapi.com/products');
</script>

<style scoped></style>
