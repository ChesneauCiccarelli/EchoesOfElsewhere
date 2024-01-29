// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['@/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
        @import "@/scss/foundations/_variables.scss";
        @import "@/scss/foundations/_mixins.scss";`,
        },
      },
    },
  },
});
