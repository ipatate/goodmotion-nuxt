export default {
  target: 'static',
  components: true,
  modules: ['@nuxt/content'],
  plugins: [],
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },
  storybook: {
    stories: ['~/stories/**/*.stories.js'],
  },
  tailwindcss: {},
  postcss: {
    // Ajouter des noms de plugins comme clé et des arguments comme valeur
    plugins: {
      'postcss-preset-env': {
        stage: 3,
      },
      'postcss-import': {},
      precss: {},
    },
    preset: {
      // Modifier les paramètres postcss-preset-env
      autoprefixer: {
        grid: true,
      },
    },
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
