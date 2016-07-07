var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.join(__dirname, '..', 'frontend');
var tsconfig = require('../tsconfig.json');
var tsOptions = tsconfig.compilerOptions;
tsOptions.noEmit = false;
module.exports = {
  debug: true,
  devtool: 'eval',
  entry: {
    'app' : './frontend/index.tsx'
  },
  module: {
    // preLoaders: [{
    //   test: /\.tsx?$/,
    //   loader: 'tslint',
    //   include: APP_DIR
    // }],
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['babel', 'ts'],
      include: APP_DIR
    }]
  },
  output: {
    filename: '../public/[name].bundle.js',
    path: __dirname
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: [path.resolve('../frontend')],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts'],
    alias : {}
  },
  ts : {
    compilerOptions : {
      "noEmit": false,
    }
  }
};
