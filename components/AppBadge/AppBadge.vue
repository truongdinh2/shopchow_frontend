<template>
  <div class="relative">
    <div>{{content}}</div>
    <div class="bg-bagde absolute px-1 py-0.5 text-white rounded-full top-[-3px] right-[-30px] leading-3 border text-[12px]">{{sub}}</div>
  </div>
</template>
    
<script setup lang='ts'>
const props = defineProps({
  content:{
    type: String,
    required: true
  },
  sub:{
    type: String || Number,
  }
})
</script>
    
<style>
</style>