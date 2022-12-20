<template>
  <div class="relative h-[28px]">
    <div>{{content}}<slot></slot></div>
    <div v-if="sub" class="bg-bagde min-h-[18px] min-w-[18px] absolute px-1 py-0.5 text-white rounded-full top-[-19%] right-[-38%] leading-3 border text-[12px] text-center">{{sub}}</div>
  </div>
</template>
    
<script setup lang='ts'>
const props = defineProps({
  content:{
    type: [String, Number],
  },
  sub:{
    type: [String, Number],
  }
})
</script>
    
<style>
</style>