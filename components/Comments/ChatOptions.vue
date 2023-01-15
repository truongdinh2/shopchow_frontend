<template>
  <div class="flex items-center justify-center">
    <button v-if="show" @click="$emit('delete')" class="px-2 py-1 flex items-center font-medium space-x-2 text-soft-red hover:text-pale-red">
      <nuxt-img src="delete.svg" sizes="sm:700px md:800px lg:800px" />
      <span>Delete</span>
    </button>
    <button v-if="show" @click="$emit('edit')" class="px-2 py-1 flex items-center font-medium space-x-2 text-moderate-blue hover:text-greyish-blue">
      <nuxt-img src="edit.svg" sizes="sm:700px md:800px lg:800px" />
      <span>Edit</span>
    </button>
    <button class="px-2 py-1 flex items-center font-medium space-x-2 text-moderate-blue hover:text-greyish-blue" @click="$emit('reply')" v-else>
      <nuxt-img src="reply.svg" sizes="sm:700px md:800px lg:800px" />
      <span>Reply</span>
    </button>
  </div>
</template>
  
<script lang="ts">
export default {
  props: ['show'],
  emits: ['delete', 'edit', 'reply'],
};
</script>