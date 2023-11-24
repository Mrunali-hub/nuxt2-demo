// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
  alias:{
    "@": resolve(__dirname, "/")
  },
  css:["~/assests/main.scss"],

  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  generate: {
    routes: [
      '/contact',  // Add your routes here
    ],
  },
  router: {
    base: '/', // Replace 'repository-name' with your GitHub repository name
  },
  
})
