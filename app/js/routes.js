define(['app'], function (app) {
    'use strict';

    return app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/view1', { templateUrl: 'partials/partial1.html', controller: 'MainController' });
            $routeProvider.otherwise({ redirectTo: '/view1' });
        }]);
});
