<template>
  <div class="l-header">
    <div class="fixed top-0 z-50 container mx-auto p-3 py-1.5 flex bg-color-main justify-between text-lg">
      <div class="inline-flex items-center">
        <div class="">
          <nuxt-img fit="cover" src="logo.png" width="35" height="45" alt="logo" />
        </div>
        <div class="ml-3">KakaShop</div>
        <div class="ml-3">
          <AppBadge content="Top Love" sub="new" />
        </div>
      </div>
      <div class="inline-flex items-center">
        <div>user</div>
        <div class="ml-3">
          <nuxt-img src="menu.svg" width="20" height="23" @click="onChangeOpenSide" />
        </div>
      </div>
    </div>
    <div v-if="isOpenSide" class="side-bar fixed right-0 w-3/4 bg-white h-[100vh] z-40">asd</div>
  </div>
  <div v-if="isOpenSide" class="modal-bg fixed top-0 bottom-0 right-0 left-0 z-30"></div>
</template>
  <script lang="ts" setup>
const isOpenSide = ref<boolean>(false);
const onChangeOpenSide = () => {
  console.log(`output->isOpenSide`, isOpenSide.value);
  isOpenSide.value = !isOpenSide.value;
};
watch(isOpenSide, (newVal) => {
  if (newVal) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
});
</script>
  <style lang="scss">
</style>
  