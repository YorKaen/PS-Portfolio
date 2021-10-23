const ImageminPlugin = require("imagemin-webpack-plugin").default;
const path = require("path");

module.exports = {
  lintOnSave: false,
  assetsDir: "assets",
  publicPath: "/PS-Portfolio/",
  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
  },

  configureWebpack: {
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== "production",
        pngquant: {
          quality: "80-95",
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.pug$/,
          oneOf: [
            {
              resourceQuery: /^\?vue/,
              use: ["pug-plain-loader"],
            },
            {
              use: ["raw-loader", "pug-plain-loader"],
            },
          ],
        },
      ],
    },
  },

  pwa: {
    workboxPluginMode: "InjectManifest",
	workboxOptions:{
      swSrc: "src/registerServiceWorker.js",
      skipWaiting: true
	},
    name: "PurpleSphynx Portfolio",
    //themeColor: "#27A369",
    //msTileColor: "#E5E5E5",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "default",
    manifestOptions: {
      name: "PurpleSphynx Portfolio",
      short_name: "PSP",
      display: "standalone",
      //theme_color: "#27A369",
      //background_color: "#E5E5E5",
      start_url: "./",
      icons: [
        {
          src: "./favicon.ico",
          sizes: "32x32",
          type: "image/x-icon",
          purpose: "any",
        },
        {
          src: "./android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "./img/icons/android-chrome-maskable-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./img/icons/android-chrome-maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [],
    },
  },
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/assets/scss/project/mymixins.scss"),
      ],
    });
}
