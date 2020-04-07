const path = require('path')

const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const magicImporter = require('node-sass-magic-importer')

module.exports = {
  entry: {
    main: ['./assets/js/mandelbrot.js', './assets/scss/skins/waveui.scss'],
  },
  output: {
    filename: 'js/waveui.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/waveui.css',
    }),
    new CopyPlugin([
      {
        from: './assets/img/**/*',
        to: './img',
        flatten: true,
      },
      {
        from: './assets/favicon.ico',
        to: '.',
      },
    ]),
  ],
  resolve: {
    // fix issues with duplicate dependencies in linked modules
    symlinks: false,
    modules: [path.resolve('node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')()],
              sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: magicImporter(),
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
}
