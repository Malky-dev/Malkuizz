"use strict";

// deps

  // natives
  const { join } = require('path')

  // externals
  const webpack = require('webpack')

// modules

module.exports = () => {
  return {
    "mode": "none",
    "entry": join(__dirname, 'public', 'src', 'index.tsx'),
    "output": {
      "path": join(__dirname, 'public'),
      "libraryTarget": "umd",
      "filename": 'main.js'
    },
    "module": {
      "rules": [
        {
          "test": /\.tsx?$/,
          "exclude": /node_modules/,
          "loader": "ts-loader"
        }
      ]
    },
    resolve: {
      "extensions": [ ".json", ".ts", ".tsx", ".js", ".jsx" ]
    },
    plugins:[
      new webpack.DefinePlugin({
        "process.env": {
          "NODE_ENV": JSON.stringify("production")
        }
      })
    ]
  }
}