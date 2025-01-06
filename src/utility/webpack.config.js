// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // Other webpack config
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_KEY': JSON.stringify(process.env.REACT_APP_API_KEY),
    }),
  ],
};
