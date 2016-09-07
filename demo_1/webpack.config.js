var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: "./app/app.js",
    output: {
      filename: "./app.build/app.build.js",
    }
  },
];
