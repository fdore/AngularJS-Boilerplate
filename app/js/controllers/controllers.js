define([
    'angular',
    'controllers/MainController'
    ], function (angular, MainController) {
        'use strict';
        var controllers = angular.module('App.controllers', []);

        controllers.controller('MainController', MainController);
        return controllers;
    });

