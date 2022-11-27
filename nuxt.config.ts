// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@pinia/nuxt"],
  app: {
    head: {
      title: "ShopChow",
      meta: [
        {
          name: "description",
          content: "Shop chow",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded",
        },
      ],
    },
  },
  css: ['@/assets/style/style.scss'], 
  tailwindcss: {
    cssPath: '@/assets/vendor/tailwind.css',
  },
  runtimeConfig: {
    API_KEY: process.env.API_KEY,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/abstracts/_variables.scss";'
        }
      }
    }
  }
});
