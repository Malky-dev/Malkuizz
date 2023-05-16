//webpack.config.js
const path = require('path')
const webpack = require('webpack')

module.exports = () => { 
  return {
    "mode": "none",
    entry: path.join(__dirname, 'public', 'src', 'app.tsx'),
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'main.js'
    },
    devServer: {
      port: 8000
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        }
      ]
    },
    resolve: {
      "extensions": [ ".js", ".json", ".ts", ".tsx", ".jsx"]
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