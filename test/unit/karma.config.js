/**
 * @author Bichi Kim <bichi@live.co.kr> <bichi@pjfactory.com>
 */
const webpack = require('../../build/webpack.test.config.js')
module.exports = function(config) {
  config.set({
    browsers: ['ChromeWithoutSecurity'],
    frameworks: ['mocha', 'chai'],
    reporters: ['coverage'],
    files: [
      {pattern: '../../src/**/*.spec.js', watched: false},
    ],
    exclude: [
      '../../src/**/*.spec.skip.js',
    ],
    preprocessors: {
      '../../src/**/*.js': ['webpack', 'sourcemap'],
      '../../src/**/*.ts': ['webpack', 'sourcemap'],
      //'': ['webpack', 'sourcemap', 'coverage'],
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'html', subdir: 'html'},
        {type: 'lcovonly', subdir: 'lcov'},
        {type: 'cobertura', subdir: 'cobertura'},
        {type: 'text-summary'},
      ],
    },
    webpack,
    webpackMiddleware: {
      noInfo: true,
    },
    logLevel: config.LOG_INFO,
    colors: true,
    customLaunchers: {
      ChromeWithoutSecurity: {
        base: 'Chrome',
        flags: ['--disable-web-security'],
      },
    },
    mime: {
      'text/x-typescript': ['ts'],
    },
  })
}
