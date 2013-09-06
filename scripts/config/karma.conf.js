module.exports = function ( config ) {
    config.set( {
        basePath: '../../',

        files: [
            { pattern: 'test/unit/main-test.js', included: true },
            { pattern: 'app/**/*.js', included: false },
            { pattern: 'test/unit/**/*.js', included: false },
            { pattern: 'test/fixtures/**/*.js', included: false },
        ],
        autoWatch: true,
        browsers: ['Chrome'],
        // web server port
        port: 9876,
        // cli runner port
        runnerPort: 9100,
        frameworks: ['jasmine', 'requirejs'],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};

