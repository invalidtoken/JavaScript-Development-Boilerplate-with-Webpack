let path = require("path");

module.exports = {
  entry: {
    index : ["@babel/polyfill","./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: '[name]-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer : {
    contentBase : path.resolve(__dirname, "public"),
    publicPath : "/scripts/"
  },
  devtool : "source-map"
};
