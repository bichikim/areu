const webpackBaseConfig = require('./webpack.base.config')
const webpackMerge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals');
module.exports = webpackMerge(webpackBaseConfig, {
  output: {
    library: 'areu',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  devtool: 'source-map',
  mode: 'production',
  externals: [nodeExternals()]
})