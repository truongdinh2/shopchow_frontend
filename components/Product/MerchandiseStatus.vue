<template>
  <div class="bg-slate-900 text-[13px] rounded-md px-2.5 py-0.5 text-white font-medium bg-opacity-50">
    <span v-if="merchandiseStatus == 1">Đã bán {{ merchandiseQuantity > 0 ? merchandiseQuantity + 'c' : 'hết' }} </span>
  </div>
</template>
<script lang="ts" setup>
// type merchandiseStatus = number;
// type merchandiseQuantity = number;
// interface Props {
//   msg?: string
//   labels?: string[]
// }s

interface Props {
  merchandiseStatus: number;
  merchandiseQuantity: number;
}

withDefaults(defineProps<Props>(), {
  merchandiseStatus: 1,
  merchandiseQuantity: 0,
});
</script>