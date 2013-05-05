define([
    'angular',
    'controllers/View1Controller',
    'controllers/View2Controller'
    ], function (angular, View1Controller, View2Controller) {
        'use strict';
        var controllers = angular.module('App.controllers', []);

        controllers.controller('View1Controller', View1Controller);
        controllers.controller('View2Controller', View2Controller);
        return controllers;
    });

