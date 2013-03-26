define(['angular', 'mocks'], function (angular) {
    'use strict';

    describe('directives', function () {
        var scope,
            element;
        beforeEach(module('App.directives'));
        
        describe('app-version', function () {
            beforeEach(module(function ($provide) {
                $provide.value('version', 'TEST_VER');
            }));

            it('should replace VERSION', inject(function ($compile, $rootScope) {
                scope = $rootScope;
                element = $compile('<span app-version ></span>')(scope);
                expect(element.text()).toEqual('TEST_VER');
            }));
        });
    });
});


