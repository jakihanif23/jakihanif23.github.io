// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', 'nuxt-site-config'],

  site: {
    url: 'https://jakihanif23.github.io',
    name: 'Zaky Hanif Testandy - Fullstack Developer Portfolio',
  },

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        // Primary Meta Tags
        { name: 'author', content: 'Zaky Hanif Testandy' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://jakihanif23.github.io' },
        { property: 'og:title', content: 'Zaky Hanif Testandy - Fullstack Developer Portfolio' },
        { property: 'og:description', content: 'Portfolio of Zaky Hanif Testandy — Fullstack Developer building scalable web apps with Vue.js, Node.js, Laravel & RESTful APIs. 3+ years of enterprise experience.' },
        { property: 'og:image', content: 'https://jakihanif23.github.io/og-image.png' },
        { property: 'og:site_name', content: 'Zaky Hanif Testandy Portfolio' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://jakihanif23.github.io' },
        { name: 'twitter:title', content: 'Zaky Hanif Testandy - Fullstack Developer Portfolio' },
        { name: 'twitter:description', content: 'Portfolio of Zaky Hanif Testandy — Fullstack Developer building scalable web apps with Vue.js, Node.js, Laravel & RESTful APIs. 3+ years of enterprise experience.' },
        { name: 'twitter:image', content: 'https://jakihanif23.github.io/og-image.png' },
      ],
      link: [
        { rel: 'canonical', href: 'https://jakihanif23.github.io' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;700;800&display=swap', rel: 'stylesheet' }
      ]
    }
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  nitro: {
    preset: 'github-pages'
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: false }
})
