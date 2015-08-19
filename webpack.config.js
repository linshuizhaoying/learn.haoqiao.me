module.exports = {
  entry: "./public/javascripts/src/components/main.js",
  output: {
    path: "./public/javascripts/build/",
    filename: "vueApp.js"
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue" },
      { test: /\.jade/, loader: "template-html-loader" }
    ]
  },
  devtool: 'source-map'
}