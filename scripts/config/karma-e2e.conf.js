module.exports = function (config) {
	config.set( {
		basePath: '../../',
		autoWatch: false,
		browsers: ['Chrome'],
		singleRun: true,
		files : [
        	'test/e2e/**/*.js'
    	],
		plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-scenario'    
            ],
		proxies: {
  			'/': 'http://localhost:5001/'
		},
		frameworks: ['ng-scenario'],
		junitReporter: {
  			outputFile: 'test_out/e2e.xml',
  			suite: 'e2e'
		}
	});
};