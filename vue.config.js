const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  publicPath: "/",
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
    name: "PurpleSphynx Portfolio App",
    //themeColor: "#27A369",
    //msTileColor: "#E5E5E5",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "default",
    manifestOptions: {
      name: "PurpleSphynx Portfolio App",
      short_name: "PSP App",
      display: "standalone",
      //theme_color: "#27A369",
      //background_color: "#E5E5E5",
      start_url: ".",
      icons: [
        {
          src: "./img/icons/android-chrome-192x192.png",
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
  lintOnSave: false,
};
