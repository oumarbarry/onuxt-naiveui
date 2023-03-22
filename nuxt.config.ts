export default defineNuxtConfig({
  typescript: { shim: false },

  experimental: { inlineSSRStyles: false },

  // css: ['@unocss/reset/tailwind.css'],

  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer']
        : ['@juggle/resize-observer'],
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : [],
    },
  },

  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    '@nuxt/devtools',
  ],

  image: {
    domains: ['https://images.unsplash.com'],
    alias: { unsplash: 'https://images.unsplash.com' },
    unsplash: {},
  },

  sourcemap: false,
})
