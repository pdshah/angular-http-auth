'use strict';

describe('Account controller', function () {
    var scope, ctrl, $httpBackend;
    describe('authenticate function', function () {
        beforeEach(inject(function ($injector) {
            
            // Set up the mock http service responses
            $httpBackend = $injector.get('$httpBackend');
            
            // backend definition common for all tests
            $httpBackend.when('POST', '/auth.py').respond({ userId: 'userX' }, { 'A-Token': 'xxx' });

            // Get hold of a scope (i.e. the root scope)
            $rootScope = $injector.get('$rootScope');
            
            // The $controller service is used to create instances of controllers
            var $controller = $injector.get('$controller');

            createController = function () {
                return $controller('AccountController', { '$scope': $rootScope });
            };
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should redirect correctly for login success', function () {
            // Test Success
        });
    });
});
