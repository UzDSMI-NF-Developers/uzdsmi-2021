export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    crawler: false
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "O'zbekiston davlat san'at va madaniyat instituti Nukus filiali | uzdsmi-nf.uz",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "O'zbekiston davlat san'at va madaniyat instituti Nukus filialining rasmiy veb-sayti" },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Uzdsmi-NF' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://uzdsmi-nf.uz/logo.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://uzdsmi-nf.uz/logo.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'UzdsmiNF',
      },
    ],
    link: [
      { rel: 'icon', href: '/logo.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&display=swap' },
    ],
    script: [
      {
        src: '/accessibility.min.js',
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/i18n',
    { src: '~/plugins/vue-awesome-swiper.js', mode: 'client' },
    '@/plugins/global-components.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/date-fns',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'en', iso: 'en-US', file: 'en.js' },
          { code: 'ru', iso: 'ru-RU', file: 'ru.js' },
          { code: 'uz', iso: 'uz-UZ', file: 'uz.js' },
        ],
        defaultLocale: 'uz',
        strategy: 'prefix_except_default',
        seo: false,
        lazy: true,
        langDir: 'i18n/',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  dateFns: {
    locales: ['en-US', 'ru', 'uz'],
    defaultLocale: 'uz',
  },
}
