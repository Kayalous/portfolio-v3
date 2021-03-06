export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Abdulrhman Elkayal's Portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A personal portfolio for Abdulrhman Elkyal.' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Abdulrhman Elkayal's Portfolio"
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: "https://www.elkayal.me/img/preview.jpeg"
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;800&family=Fira+Sans+Extra+Condensed:wght@600;900&family=Josefin+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/particles.js', mode: 'client'},
    {src: '@/plugins/vue-js-modal.js', mode: 'client'},
    {src: '@/plugins/validator.js', mode: 'client'},
    {src: '@/plugins/tween-height.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
    '@nuxt/image',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',

    '@nuxt/content',

    '@nuxt/image',


  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
