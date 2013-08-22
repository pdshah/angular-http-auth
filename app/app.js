(function () {
'use strict';
var app = angular.module('angularAuthApp', ['httpAuthInterceptor']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', { 'templateUrl' : 'account/login.tpl.html', 'controller' : 'AccountCtrl' }).
        when('/public', { 'templateUrl': 'public/data.tpl.html', 'controller': 'AccountCtrl' });
}]);
}());
