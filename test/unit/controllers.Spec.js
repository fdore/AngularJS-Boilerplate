define(['controllers/View1Controller',
        'controllers/View2Controller',
        'angular', 
        'mocks'], function (View1Controller, View2Controller) {
    describe('Controller', function () {
        describe('Given we have a View1Controller', function () {
            var controller,
                scope;

            beforeEach(module('App.controllers'));

            beforeEach(inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();

                controller = $controller(View1Controller, { $scope: scope });
            }));

            describe('When initializing the controller', function () {
                it("Should have its view set to 'View 1", function () {
                    expect(scope.viewName).toEqual('View 1');
                });
            });
        });

        describe('Given we have a View2Controller', function () {
            var controller,
                scope;

            beforeEach(module('App.controllers'));

            beforeEach(inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();

                controller = $controller(View2Controller, { $scope: scope });
            }));

            describe('When initializing the controller', function () {
                it("Should have its view set to 'View 2", function () {
                    expect(scope.viewName).toEqual('View 2');
                });
            });
        });
    });
});