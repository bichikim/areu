const WebpackBaseConfig = require('./webpack.base.config')
const WebpackMerge = require('webpack-merge')
// const nodeExternals = require('webpack-node-externals');
// WebpackBaseConfig.output.libraryTarget = 'umd' // module mode

module.exports = WebpackMerge(WebpackBaseConfig, {
  output: {
    library: 'areu',
    libraryTarget: 'umd',
  },
  mode: 'production',
  devtool: 'source-map',
  /**
   * externals see
   * @link https://www.npmjs.com/package/webpack-node-externals
   */
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
})