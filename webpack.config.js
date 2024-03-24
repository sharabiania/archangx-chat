const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // Hot Module Reload (Replacement) "use npm run dev"
  devServer: {
    // The `hot` option is to use the webpack-dev-server in combination with the hot module replacement API.
    hot: 'only',
  },

  plugins: [
    // Copy the index.html to dist, fixes all the linked scripts and css filenames
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Webpack Plugin', // you can set the title of the page
    }),
    // Copy the css files to the dist folder
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      // to be able to do import './css/styls.css'
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // to be able to do import yellow from './images/robot.jpg'
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },     
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line      
      `...`,
      // Minimize the CSS files
      new CssMinimizerPlugin(),      
    ],
  },
};