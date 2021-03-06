module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/moment/moment.js',
      'bower_components/d3/d3.js',
      'bower_components/p5.js/lib/p5.js',
      'bower_components/p5.js/lib/addons/p5.dom.js',
      'js/test/*.js',
      'specs/*.js'
    ],
    exclude: [],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
};
