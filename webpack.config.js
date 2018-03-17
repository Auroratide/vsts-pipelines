const path = require('path');

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
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [ {
      test: /\.jsx?$/,
      loader: ['babel-loader']
    } ]
  }
} ];
