import { Title } from './.nuxt/components.d'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: 'ShopChow',
      meta: [
        {
          name: 'description', content: 'Shop chow'
        }
      ],
      link: [
        {
          rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
        }
      ]
    },
  },
  runtimeConfig: {
    API_KEY: process.env.API_KEY
  }
});
