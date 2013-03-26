basePath = '../../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    REQUIRE,
    REQUIRE_ADAPTER,
    { pattern: 'test/unit/main-test.js', included: true },
    { pattern: 'app/lib/angular/angular.js', included: false },
    { pattern: 'app/lib/underscore/underscore-min.js', included: false },
    { pattern: 'app/lib/angular/angular-mocks.js', included: false },
    { pattern: 'test/lib/sinon/sinon.js', included: false },
    { pattern: 'app/js/**/*.js', included: false },
    { pattern: 'test/unit/**/*.js', included: false },
    { pattern: 'test/fixtures/**/*.js', included: false },
];

autoWatch = true;

browsers = ['Chrome'];

// web server port
port = 9876;

// cli runner port
runnerPort = 9100;

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};