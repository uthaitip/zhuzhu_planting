// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      
    },
  },
  css: [
    '~/assets/css/main.css',
    '@flaticon/flaticon-uicons/css/all/all.css'
  ],
  components: [{ path: "./components", prefix: "" }],
  // devtools: { enabled: true },

})
