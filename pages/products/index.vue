<template>
<<<<<<< HEAD
<div>product deitail</div>
</template>

<script setup>
=======
  <div class="p-3 md:p-6">
    <TopPage />
    <div>
      <button @click="handleSubmit" class="block shadow text-xs md:text-sm py-1.5 px-5 bg-slate-200 hover:bg-slate-100 focus:shadow-outline focus:outline-none text-gray-800 rounded"> Trang chủ</button>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
>>>>>>> 552cb5e (complete/product-item)
// definePageMeta({
//   layout: 'products',
// });

// data alias products
// const { data: products } = await useFetch('https://fakestoreapi.com/products');
<<<<<<< HEAD
=======
const handleSubmit = () => {
  router.push({path:'/'})
};
>>>>>>> 552cb5e (complete/product-item)
</script>

<style scoped></style>
