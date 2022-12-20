<template>
  <div class="l-header">
    <div class="fixed top-0 z-50 mx-auto p-3 py-1.5 flex bg-color-main justify-between text-lg w-full md:px-5">
      <div class="inline-flex items-center">
        <div class="">
          <nuxt-img fit="cover" src="logo.png" width="35" height="45" alt="logo" />
        </div>
        <div class="ml-3 md:ml-4 lg:ml-5">
          <NuxtLink to="/"> KakaShop </NuxtLink>
        </div>
        <div class="ml-3 md:ml-4 lg:ml-10">
          <NuxtLink to="/top-love">
            <AppBadge content="Top Love" sub="new" />
          </NuxtLink>
        </div>
        <div class="hidden lg:block md:ml-4 lg:ml-10">
          <NuxtLink to="/tu-thiet-ke"> Tạo thiết kế </NuxtLink>
        </div>
        <div class="hidden lg:block ml-3 md:ml-4 lg:ml-10">
          <NuxtLink to="/tro-choi"> Game giảm giá </NuxtLink>
        </div>
      </div>
      <div class="inline-flex items-center">
        <div class="mr-2 md:mr-3 lg:mr-4">
          <NuxtLink to="/gio-hang">
            <AppBadge :sub="productAmount">
              <nuxt-img class="" src="gio-hang.svg" sizes="sm:350px md:370px lg:400px" />
            </AppBadge>
          </NuxtLink>
        </div>
        <div class="ml-3 mt-[1px]">
          <nuxt-img class="lg:hidden" src="menu.svg" sizes="sm:700px md:800px lg:800px" @click="onChangeOpenSide" />
          <NuxtLink class="hidden lg:block" to="/tai-khoan" v-if="isLogin">
            <div class="text-center lg:block lg:h-8 lg:w-8 rounded-full bg-slate-300">t</div>
          </NuxtLink>
          <NuxtLink class="hidden lg:block" to="/login" v-else>Đăng nhập</NuxtLink>
        </div>
      </div>
    </div>
    <div v-if="isOpenSide" class="side-bar fixed right-0 w-3/4 bg-sidebar h-[100vh] z-40 px-7 py-6 flex flex-col">
      <div class="text-lg">
        <NuxtLink class="flex items-center mt-2" to="/top-love"><nuxt-img class="" src="logo.png" width="20" height="23" /><span class="ml-2">Top love</span></NuxtLink>
        <NuxtLink class="flex items-center mt-4" to="/tu-thiet-ke"><nuxt-img class="" src="logo.png" width="20" height="23" /><span class="ml-2">Tự thiết kế</span></NuxtLink>
        <NuxtLink class="flex items-center mt-4" to="/tro-choi"><nuxt-img class="" src="logo.png" width="20" height="23" /><span class="ml-2">Game</span></NuxtLink>
        <NuxtLink class="flex items-center mt-4" to="/tai-khoan"><nuxt-img class="" src="logo.png" width="20" height="23" /><span class="ml-2">Tài khoản</span></NuxtLink>
      </div>
    </div>
  </div>
  <div v-if="isOpenSide" @click="isOpenSide = !isOpenSide" class="modal-bg fixed top-0 bottom-0 right-0 left-0 z-30"></div>
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
// san-pham
const productAmount = ref<number>(6);
// login
const isLogin = ref<boolean>(false);
const onClickOutside = () => {};
</script>
<style lang="scss">
</style>
  