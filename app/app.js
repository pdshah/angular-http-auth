(function () {
    'use strict';
    angular.module('angularAuthApp', ['http-auth-interceptor']).
        config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/', { 'templateUrl' : 'account/login.tpl.html', 'controller' : 'AccountCtrl' }).
                when('/public', { 'templateUrl': 'public/data.tpl.html', 'controller': 'AccountCtrl' }).
                when('/private', { 'templateUrl': 'restricted/data.tpl.html', 'controller': 'AccountCtrl' });
        }]);
}());
