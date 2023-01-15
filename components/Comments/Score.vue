<template>
  <div class="score-input">
    <button @click="$emit('score-changed', val + 1)">
      <nuxt-img src="plus.svg" sizes="sm:700px md:800px lg:800px" />
    </button>
    <div>
      {{ val }}
    </div>
    <button @click="$emit('score-changed', val - 1)">
      <nuxt-img src="minus.svg" sizes="sm:700px md:800px lg:800px" />
    </button>
  </div>
</template>
  
<script lang="ts">
export default {
  name: 'ScoreInput',
  emits: ['score-changed'],
  props: {
    value: Number,
  },
  data() {
    return {
      val: this.$props.value || 0,
    };
  },
  watch: {
    value(val) {
      this.val = val;
    },
  },
};
</script>