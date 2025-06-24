// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/content',
    'nuxt-auth-utils',
    'nuxt-mongoose',
    'nuxt-file-storage',
  ],
  mongoose: {
    uri: process.env.MONGODB_URI,
      devtools: true,
    options: {},
    modelsDir: 'models',
  },
  css: ['~/assets/css/main.css'],
   fileStorage: {
        // enter the absolute path to the location of your storage
        mount: process.env.mount,
   },
})