export default {
  target: 'static',
  components: true,
  modules: ['@nuxt/content'],
  plugins: ['~/plugins/vue-lazysizes.client.js'],
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
  // nuxt.config.js
  optimizedImages: {
    inlineImageLimit: 1000,
    responsive: {
      adapter: require('responsive-loader/sharp'),
    },
    imagesName: ({isDev}) =>
      isDev
        ? '[path][name][hash:optimized].[ext]'
        : 'img/[contenthash:7].[ext]',
    responsiveImagesName: ({isDev}) =>
      isDev
        ? '[path][name]--[width][hash:optimized].[ext]'
        : 'img/[contenthash:7]-[width].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'responsive-loader',
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  },
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
  buildModules: ['@nuxtjs/tailwindcss', '@aceforth/nuxt-optimized-images'],
  build: {
    extend(config, {isDev, isClient, loaders: {vue}}) {
      if (isClient) {
        // transforme src and srcset to data-... for lazy load
        vue.transformAssetUrls.img = ['data-src', 'src'];
        vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
      }
    },
  },
  hooks: {
    'content:file:beforeInsert': document =>
      require('./helpers/transforme-content')(document),
  },
};
