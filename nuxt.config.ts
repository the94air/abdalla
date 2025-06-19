// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  debug: false,
  devtools: { enabled: false },
  experimental: {
    headNext: true,
    typedPages: true,
  },
  ssr: true,
  nitro: {
    preset: "github_pages",
  },
  components: [{ path: "@/components", pathPrefix: false }],
  css: ["@unocss/reset/tailwind.css"],
  modules: ["@unocss/nuxt", "@nuxtjs/color-mode"],
  app: {
    baseURL: "/",
    rootAttrs: {
      class: "h-full",
    },
    head: {
      htmlAttrs: {
        lang: "en",
      },
      script: [
        process.env.NODE_ENV === "production"
          ? {
              defer: true,
              src: "https://tics.abdalla.sd/script.js",
              "data-website-id": "559a58d2-2f34-408a-8179-f700237c3e93",
            }
          : undefined,
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "/favicon.ico?v=4.1",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://api.fontshare.com/v2/css?f[]=clash-display@500,600&display=swap",
        },
      ],
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
  vite: {
    vue: {
      features: {
        propsDestructure: true,
      },
    },
  },
  colorMode: {
    hid: "color-mode-script",
    globalName: "__COLOR_MODE__",
    classSuffix: "",
    storageKey: "color-mode",
  },
  compatibilityDate: "2024-07-27",
});
