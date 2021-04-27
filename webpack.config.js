const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/app/index.js',
  devServer:{
      port: 9000,
      open: true
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HTMLWebpackPlugin({
        template: './src/index.html',
         minify:  {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true
  }
})]
  
};
