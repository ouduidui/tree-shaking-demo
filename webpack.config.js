const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.js',
  },
  optimization: {
    minimize: false,
  },
  mode: 'production',
}
