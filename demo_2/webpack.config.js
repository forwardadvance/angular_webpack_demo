var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: "./app/app.js",
    output: {
      filename: "./app.build/app.build.js",
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader' }
      ]
    }
  },
  {
    entry: './app/app.scss',
    output: {
      filename: './app.build/app.build.styles.js'
    },
    resolve: {
      extensions: ['', '.scss']
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style", "css!sass")
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("./app.build/app.build.css")
    ]
  },
  {
    entry: './app/specs.js',
    output: {
      filename: './specs.build/specs.build.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader' }
      ]
    }
  }
];
