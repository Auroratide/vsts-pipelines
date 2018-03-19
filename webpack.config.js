const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [ {
  name: 'server',
  target: 'node',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'src', 'server', 'server.js'),
  output: {
    filename: 'server.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [ {
      test: /\.js$/,
      loader: ['babel-loader']
    } ]
  },
  node: {
    __dirname: false,
    __filename: false
  }
}, {
  name: 'client',
  mode: 'development',
  entry: path.join(__dirname, 'src', 'client', 'client.jsx'),
  devtool: 'eval-source-map',
  output: {
    filename: 'client.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [ {
      test: /\.css$/,
      loaders: ExtractTextPlugin.extract( {
        fallback: 'style-loader',
        use: [ {
          loader: 'css-loader',
          options: {
            importLoader: 1,
            modules: true,
            localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
          }
        }, {
          loader: 'postcss-loader'
        } ]
      } )
    }, {
      test: /\.jsx?$/,
      loader: ['babel-loader']
    } ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
} ];
