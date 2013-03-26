define(['controllers/MainController', 'angular', 'mocks'], function (MainController) {
    describe('TaskController', function () {
        describe('Given we have a MainController', function () {
            var controller,
                scope;

            beforeEach(module('App.controllers'));

            beforeEach(inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();

                controller = $controller(MainController, { $scope: scope });
            }));

            describe('When initializing the controller', function () {
                it("Should have its view set to 'View 1", function () {
					expect(scope.viewName).toEqual('View 1');
                });
            });
        });
    });
});