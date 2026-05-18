// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt', '@nuxtjs/color-mode',
  ],
  ssr: true,
  components: [{ path: '@/components', pathPrefix: false }],
  devtools: { enabled: false },
  app: {
    baseURL: '/',
    rootAttrs: {
      class: 'h-full',
    },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      script: [
        process.env.NODE_ENV === 'production'
          ? {
              'defer': true,
              'src': 'https://tics.abdalla.sd/script.js',
              'data-website-id': '1de16c5b-c058-4cef-a814-d41b0f13bd8e',
            }
          : undefined,
      ],
      link: [
        {
          rel: 'shortcut icon',
          href: '/favicon.ico?v=4.1',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://api.fontshare.com/v2/css?f[]=clash-display@500,600&display=swap',
        },
      ],
    },
  },
  css: ['@unocss/reset/tailwind.css'],
  colorMode: {
    globalName: '__COLOR_MODE__',
    storageKey: 'color-mode',
  },
  experimental: {
    typedPages: true,
  },
  compatibilityDate: '2024-07-27',
  nitro: {
    preset: 'github_pages',
  },
  vite: {
    vue: {
      features: {
        propsDestructure: true,
      },
    },
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  }, telemetry: false,
  debug: false,
})
