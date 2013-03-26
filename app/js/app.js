define(['angular'], function (angular) {
    'use strict';

    // Declare app level module which depends on filters, and services
    return angular.module('App', [
		'App.services',
		'App.directives',
		'App.providers',
		'App.filters',
		'App.controllers'
	]);
});
