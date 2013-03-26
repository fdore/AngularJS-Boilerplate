define(['angular'], function (angular) {

    'use strict';
    
    return requirejs(function () {
        return angular.bootstrap(window.document, ['App']);
    });
});