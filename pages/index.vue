<template>
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <ProductItemLT />
    <ProductItemLT />
    <ProductItemLT />
  </div>
  <p>{{ $myPlugin() }}</p>
  <ChatBox />
</template>

<script setup lang="ts">
import { useCounter } from '@/stores/counter';
import ChatBox from '@/components/Comments/ChatBox.vue';

const counter = useCounter();
</script>

<style scoped></style>
