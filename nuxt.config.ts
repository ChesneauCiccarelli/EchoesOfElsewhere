// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@hypernym/nuxt-anime',
  ],
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
  googleFonts: {
    families: {
      'Golos+Text': [400, 500, 600, 700, 800, 900],
      'Major+Mono+Display': [400],
    },
  },
});
