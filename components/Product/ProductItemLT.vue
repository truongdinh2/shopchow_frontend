<script setup lang="ts">
import MerchandiseStatus from './MerchandiseStatus.vue';
// const router = useRouter();
// const userEmail = computed(() => {
//   return store.state.userEmail;
// });
type ProductState = {
  pid: string;
  pname: string;
  brand: string;
  price: number;
  pdesc: string;
  thumbnail: string;
  pic: string;
  quantity: number;
};
const subtotal = ref(0);
const discountType = ref<string | number>(1);
const products = reactive([] as Array<ProductState>);

const sortedProducts = products.sort((a, b) => {
  if (a.pname < b.pname) {
    return -1;
  }
  if (a.pname > b.pname) {
    return 1;
  }
  return 0;
});
const formatMoney = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};
const removeProduct = (pid: string) => {
  // const query = 'http://' + config.apiServer + ':' + config.port + '/api/cart/del/' + pid + '/' + accId.value;
  // axios.get(query);
  location.reload();
};
const tacgia = ref('Nguyễn đình trường');
const model = ref(2.3);
</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!-- <section class="py-10 bg-gray-100">
    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> -->
  <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
    <a href="#">
      <div class="relative flex items-end h-52">
        <div class="absolute top-0 left-[-1px]">
          <MerchandiseStatus :merchandiseStatus="1" :merchandise-quantity="1" />
        </div>
        <div class="absolute top-0.5 right-[-1px]">
          <!-- <MerchandiseStatus :merchandiseStatus="1" :merchandise-quantity="1" /> -->
          <div class="text-[12px] font-medium min-h-[18px] min-w-[18px] bg-red-500 px-1 py-0.5 text-white rounded-full leading-[11px] border text-center">new</div>
          <!-- <div v-if="sub" class=" top-[-20%] right-[-30%] bg-bagde min-h-[18px] min-w-[18px] absolute px-1 py-0.5 text-white rounded-full leading-[11px] border text-[12px] text-center">{{sub}}</div> -->
        </div>
        <!-- <img src="https://i.imgur.com/GIeyjWd.jpg" class="img-fluid rounded-start" /> -->
        <!-- <img src="https://i.imgur.com/GIeyjWd.jpg" alt="Hotel Photo" /> -->
        <nuxt-img class="h-full mx-auto" src="anh-ao-mau.png" fit="contain" height="150" />
        <!-- <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          <button class="text-sm">Add to cart</button>
        </div> -->
      </div>

      <div class="mt-1 p-2 pb-1">
        <p class="text-slate-700 uppercase text-base font-medium mb-0.5">Stephen Chow</p>
        <div class="flex justify-between items-center">
          <span class="text-base font-semibold">{{ formatMoney(300000) }}</span>
          <span v-if="discountType == 1" class="text-sm line-through text-red-500">{{ formatMoney(300000) }}</span>
          <span v-if="discountType == 2" class="text-sm line-through text-red-500">giam 30%</span>
        </div>
        <p class="mt-1.5 text-[11px] d-webkit-box text-slate-400 overflow-hidden text-ellipsis">Đoạn giới thiệu sơ qua. Dài quá thì see more. dĐoạn giới thiệu sơ qua. Dài quá thì see more...</p>
        <div class="flex gap-x-2 mt-2.5">
          <nuxt-img class="img-small" @click="" src="anh-1-beau.jpg" width="25" height="25" />
          <nuxt-img class="img-small" @click="" src="anh-1-beau.jpg" width="25" height="25" />
          <nuxt-img class="img-small" @click="" src="anh-1-beau.jpg" width="25" height="25" />
        </div>
        <div v-if="tacgia" class="mt-2.5 flex items-center">
          <img class="mr-4" src="@/assets/images/tagia-icon.svg" alt="tacgia" />
          <span class="text-xs text-gray-400 capitalize">{{ tacgia }}</span>
        </div>
        <!-- <div class="mt-2">
          <q-rating v-model="model" max="5" size="1em" color="yellow" icon="star_border" icon-selected="star" icon-half="star_half" no-dimming readonly />
          <span class="ml-3 text-xs text-gray-500">{{model  }}</span>
        </div> -->
      </div>
    </a>
  </article>
  <!-- </div>
  </section> -->
</template>

<style scoped></style>