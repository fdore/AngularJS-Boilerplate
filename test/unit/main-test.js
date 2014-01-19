(function (window, require) {
    "Use strict";
    var file, requireModules;
    requireModules = [];

    for (file in window.__karma__.files) {
        if (window.__karma__.files.hasOwnProperty(file)) {
            if (file.substring(file.length - 8, file.length) === '.Spec.js') {
                requireModules.push(file);
            }
        }
    }

    // Our own application including dependencies
    requireModules.push("app");
    requireModules.push('mocks');
    require({
        // !! Testacular serves files from '/base'
        baseUrl: '/base/app',

        paths: {
            angular: 'lib/angular/angular',
            mocks: 'lib/angular-mocks/angular-mocks',
            underscore: 'lib/underscore/underscore',
            'angular-route': 'lib/angular-route/angular-route',
            'controllers': 'js/controllers',
            'services': 'js/services',
            'providers': 'js/providers',
            'filters': 'js/filters',
            'directives': 'js/directives',
            'app': 'js/app'
        },

        shim: {
                underscore: {
                    exports: '_'
                },
                'angular': {
                    exports: 'angular'
                },
                'resource': {
                    deps: ['angular']
                },
                'mocks': { deps: ['angular'], 'exports': 'mocks' },
                'app': { 
                    deps: [
                        'services/services',
                        'providers/providers',
                        'directives/directives',
                        'filters/filters',
                        'controllers/controllers'                   
                        ]
            }
        },
        priority: ['angular']
    }, requireModules, function () {
        window.__karma__.start();
    }, function (err) {
    });
} (window, requirejs));
