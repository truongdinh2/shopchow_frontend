<template>
  <div>Product {{ id }}</div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { id } = useRoute().params;

if (!parseInt(id)) {
  throw createError({ message: "Product not found", statusCode: 404 });
}
</script>

<style scoped></style>
