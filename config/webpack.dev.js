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
    preLoaders: [{
      test: /\.tsx?$/,
      loader: 'tslint',
      include: APP_DIR
    }],
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['babel', 'ts'],
      include: APP_DIR
    },
    {
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: APP_DIR
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }
  ]
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
    extensions: ['', '.jsx', '.js', '.tsx', '.ts'],
    alias : {
      "ui" : path.resolve('./frontend/ui'),
      "mdl" : path.resolve('./public/bower_components/material-design-lite/src'),
      "ajax" : path.resolve('./frontend/services/ajax'),
      "promises-service" : path.resolve('./frontend/services/promises'),
      "application-store" : path.resolve('./frontend/flux'),
      "repository-store" : path.resolve('./frontend/flux/repositories'),
      "shared" : path.resolve('./frontend/components/shared')
    }
  },
  ts : {
    compilerOptions : {
      "noEmit": false,
      "noEmitHelpers" : true
    }
  }
};
