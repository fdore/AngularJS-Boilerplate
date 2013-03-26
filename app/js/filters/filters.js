define(['angular'], function () {
    'use strict';

    angular.module('App.filters', []).
        filter('interpolate', ['version', function (version) {
            return function (text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            };
        } ]);
});