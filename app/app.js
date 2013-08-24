(function () {
    'use strict';
    angular.module('angularAuthApp', ['httpAuthInterceptor']).
        config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/', { 'templateUrl' : 'account/login.tpl.html', 'controller' : 'AccountCtrl' }).
                when('/public', { 'templateUrl': 'public/data.tpl.html', 'controller': 'AccountCtrl' });
        }]);
}());
