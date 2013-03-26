define(['angular'], function (angular) {
    'use strict';

    var directives = angular.module('App.directives', [])
                        .directive('appVersion', ['version', function (version) {
                            return function (scope, elm, attrs) {
                                elm.text(version);
                            };
                        } ]);

    return directives;
});

