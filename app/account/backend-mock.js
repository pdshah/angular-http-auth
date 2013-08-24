/**
 * This module is used to simulate backend server for this demo application.
 */
(function () {
    'use strict';
    angular.module('angularAuthApp')
        .config(function ($provide) {
            $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
        })
        .run(function ($httpBackend) {
            var authorized = false;
            // login request's responce
            $httpBackend.whenPOST('auth/login').respond(function (method, url, data) {
                authorized = true;
                return [200];
            });

            // logout request's responce
            $httpBackend.whenPOST('auth/logout').respond(function (method, url, data) {
                authorized = false;
                return [200];
            });

            // public action request's responce
            $httpBackend.whenPOST('data/public').respond(function (method, url, data) {
                return [200, 'I have received and processed your data [' + data + '].'];
            });

            // ristricted action request's responce
            $httpBackend.whenPOST('data/protected').respond(function (method, url, data) {
                return authorized ? [200, 'This is confidential [' + data + '].'] : [401];
            });

            // otherwise
            $httpBackend.whenGET(/.*/).passThrough();
        });
}());
