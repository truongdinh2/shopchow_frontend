<template>
  <div>Hello world</div>
  <p data-testid="counter-values">
    Counter: {{ counter.n }}. Double: {{ counter.double }}
  </p>

  <p>Increment the Store:</p>

  <button class="btn" @click="counter.increment()" data-testid="increment">
    +1
  </button>
  <button class="btn" @click="counter.increment(10)">+10</button>
  <button class="btn" @click="counter.increment(100)">+100</button>
  <button class="btn" @click="counter.n++">Direct Increment</button>

  <p>{{ $myPlugin() }}</p>
</template>

<script setup lang="ts">
import { useCounter } from "@/stores/counter";
const { data } = useFetch("/api/psy");

const counter = useCounter();
</script>

<style scoped></style>
