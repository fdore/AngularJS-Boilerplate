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
    requireModules.push('sinon');
    require({
        // !! Testacular serves files from '/base'
        baseUrl: '/base/app/js',

        paths: {
            angular: '../lib/angular/angular',
            resource: 'lib/angular/angular-resource',
            mocks: '../lib/angular/angular-mocks',
            sinon: '../../test/lib/sinon/sinon',
            underscore: '../lib/underscore/underscore-min'
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
                'app': { deps: [
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
