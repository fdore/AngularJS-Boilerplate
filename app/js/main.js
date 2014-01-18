requirejs.config({
    baseUrl: 'js',

    paths: {
        underscore: '../lib/underscore/underscore',
        angular: '../lib/angular/angular',
        'angular-route': '../lib/angular-route/angular-route'
       
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
            '../lib/jquery/jquery',
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
