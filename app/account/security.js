(function () {
    'use strict';
    var app = angular.module('angularAuthApp');
    app.controller('AccountCtrl', ['$scope', '$http', 'authService', function ($scope, $http, authService) {
        $scope.publicContent = [];
        $scope.restrictedContent = [];

        this.authenticate = function (loginModel) {
            $http.post('auth/login', loginModel).success(function () {
                authService.loginConfirmed();
            });
        };

        this.publicAction = function () {
            $http.post('data/public', $scope.publicData).success(function (response) {
                $scope.publicContent.push(response);
            });
        };

        this.restrictedAction = function () {
            $http.post('data/protected', $scope.restrictedData).success(function (response) {
                // this piece of code will not be executed until user is authenticated
                $scope.restrictedContent.push(response);
            });
        };

        this.logout = function () {
            $http.post('auth/logout').success(function () {
                $scope.restrictedContent = [];
            });
        };
        $scope.AccountCtrl = this;
        return $scope.AccountCtrl;
    }]);

    /**
    * This directive will find itself inside HTML as a class,
    * and will remove that class, so CSS will remove loading image and show app content.
    * It is also responsible for showing/hiding login form.
    */
    app.directive('restricted', ['$location', function ($location) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                scope.$on('event:auth-loginRequired', function () {
                    scope.$apply(function () { $location.path("/route"); });
                });
                scope.$on('event:auth-loginConfirmed', function () {
                    main.show();
                    login.slideUp();
                });
            }
        }
    }]);
}());
