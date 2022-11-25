<template>
  <div>Product page</div>

  <div class="grid grid-cols-4 gap-5">
    <div v-for="product of products">
      {{ product.title }}
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

// data alias products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
