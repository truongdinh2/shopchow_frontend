import { useLocalStorage } from '@vueuse/core'

export default defineNuxtRouteMiddleware((to, from) => {
  // TODO: Logic auth middleware
  // if(!getCookie('access-token')) {
  //   console.log(to)
  //   return abortNavigation();
  // }
  // return navigateTo('/');
  console.log('Hello world')
})
