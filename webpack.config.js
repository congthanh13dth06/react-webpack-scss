import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

import Config from './src/config/config.json'

const isDevelopment = process.env.NODE_ENV === 'development'
const time = new Date().getTime()

export default {
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'app.js')],
  output: {
    path: path.join(__dirname, 'build'),
    filename: `assets/js/bundle.min.js?v=${time}`
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          uglifyOptions: {
            mangle: true,
          },
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
        favicon: path.join(__dirname, 'public', 'favicon.ico'),
        minify: {
          removeAttributeQoutes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  mode: process.env.NODE_ENV,
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: "/",
    compress: true,
    port: Config.APP.PORT,
    host: "localhost",
    stats: 'minimal',
    historyApiFallback: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules:true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64:10]'
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
          }
      }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `assets/css/[name].[hash].min.css`,
      chunkFilename: `assets/css/[name].[hash].min.css`
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: path.join(__dirname, 'public', 'favicon.ico'),
      minify: {
        removeAttributeQoutes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new CleanWebpackPlugin()
  ]
};
