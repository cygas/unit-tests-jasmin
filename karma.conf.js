module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'jasmine-matchers'],
        files: [
            './simple-calc/custom-matchers.js',
            './simple-calc/*.js',
            './simple-calc/*.spec.js'
        ],
        plugins: ['karma-jasmine', 'karma-jasmine-matchers'],
        reporters: ['dots'],
        color: true,
        singleRun: true
    });
};