// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/content',
    'nuxt-auth-utils',
    'nuxt-mongoose',
  ],
  mongoose: {
    uri: process.env.MONGODB_URI,
      devtools: true,
    options: {},
    modelsDir: 'models',
  },
  css: ['~/assets/css/main.css'],
 vite: {
    server: {
        hmr: {
            clientPort: 3000
        }
    }
},
})