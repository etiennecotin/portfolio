// import path from 'path';
// import fs from 'fs';

import dotenv from 'dotenv'

dotenv.config()

const netlifyEnv = process.env.NODE_ENV
const isDevEnv = netlifyEnv === 'development'
const isProdEnv = netlifyEnv === 'production'

// const websiteUrl = process.env.BASE_URL || 'http://localhost:3000'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  /*
   ** Environnement variables shared for the client and server-side
   */
  env: {
    datoToken: process.env.DATO_TOKEN,
    isDevEnv,
    isProdEnv,
    netlifyEnv: process.env.NETLIFY_ENV,
  },
  publicRuntimeConfig: {
    datoToken: process.env.DATO_TOKEN,
  },
  privateRuntimeConfig: {
    datoToken: process.env.DATO_TOKEN,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Etienne Cotin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  styleResources: {
    scss: ['~/assets/scss/_variables.scss'],
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/app.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/components/icons'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // Simple usage
    '@nuxtjs/dotenv',
    'nuxt-font-loader',
  ],

  generate: {
    fallback: '404.html',
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],

  fontLoader: {
    // Paste a google link here
    url:
      'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap',
    // Enable options
    prefetch: true,
    preconnect: true,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    },
  },
}
