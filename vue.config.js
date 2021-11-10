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
