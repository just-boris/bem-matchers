module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'desktop.bundles/index/_index.js',
      'desktop.bundles/index/_index.bemhtml.js',
      'src/*.js',
      'test/*.spec.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
