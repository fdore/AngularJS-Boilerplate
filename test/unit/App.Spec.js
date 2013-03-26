define(['angular', 'app'], function(angular) { 
    describe("App: Testing Modules", function() {
    describe("App Module:", function() {
      var module, dependencies;
      
      beforeEach(function () {
        module = angular.module("App");
        dependencies = module.requires;
      });

      it("should be registered", function() {    
        expect(module).not.toBeUndefined();
      });

      describe("Dependencies:", function() {

        var hasModule = function(module) {
          return dependencies.indexOf(module) >= 0;
        };

        it("should have filters as a dependency", function() {
          expect(hasModule('App.filters')).toEqual(true);
        });

        it("should have services as a dependency", function() {
          expect(hasModule('App.services')).toEqual(true);
        });

        it("should have controllers as a dependency", function() {
          expect(hasModule('App.controllers')).toEqual(true);
        });

        it("should have directives as a dependency", function() {
          expect(hasModule('App.directives')).toEqual(true);
        });
      });
    });
  });

});