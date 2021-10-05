const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'public'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src'),
};

// Webpack configuration
module.exports = (env) => (
  {
    mode: 'production',
    performance: { hints: false },
    entry: path.join(paths.JS, 'website.jsx'),
    output: {
      filename: '[name].bundle.js',
      publicPath: '/',
      path: path.resolve(__dirname, 'public'),
    },
    devServer: {
      host: 'localhost',
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(paths.SRC, 'index.html'),
      }),
      new MiniCssExtractPlugin({ filename: 'style.css' }),
      new StyleLintPlugin({
        configFile: '.stylelintrc.json',
        context: 'src',
        syntax: 'scss',
        files: '**/*.scss',
      }),
      ...(env.development ? [] : [new Dotenv()]),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                import: false,
                modules: true,
              },
            },
          ],
          include: /\.module\.css$/,
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
          exclude: /\.module\.css$/,
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                import: false,
                modules: true,
                camelCase: true,
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          // options: {
          //   cache: './.eslint-loader-cache',
          // }
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    // Enable importing JS files without specifying their's extenstion
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  }
);
