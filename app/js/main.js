requirejs.config({
    baseUrl: 'js',

    paths: {
        underscore: '../lib/underscore/underscore-min',
        angular: '../lib/angular/angular'
        //, resource: 'lib/angular/angular-resource',
       
    },

    shim: {
        underscore: {
            exports: '_'
        },
        'angular': {
            exports: 'angular'
        },
        'states': {
            deps: ['angular'],
            exports: 'states'
        }
    },
    priority: [
		'angular'
	]
});

requirejs(['angular',
            'app',
            'underscore',
            'routes',
            '../lib/jquery/jquery.min',
            'services/services',
            'providers/providers',
            'directives/directives',
            'filters/filters',
            'controllers/controllers'
           ], function (angular, app, _) {
               angular.element(document).ready(function () {
                   angular.bootstrap(document, ['App']);
                   document.getElementsByTagName('html')[0].dataset.ngApp = 'App';
               });

           });