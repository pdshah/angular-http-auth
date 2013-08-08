'use strict';

var AccountController = ['$scope', '$http', 'authService', function ($scope, $http, authService) {
    
    $scope.publicContent = [];
    $scope.restrictedContent = [];
    
    this.authenticate = function (loginModel) {
		$http.post('auth/login').success(function() {
			authService.loginConfirmed();
		});
    };
    
    this.publicAction = function () {
		$http.post('data/public', $scope.publicData).success(function(response) {
			$scope.publicContent.push(response);
		});
    }

    this.restrictedAction = function() {
		$http.post('data/protected', $scope.restrictedData).success(function(response) {
			// this piece of code will not be executed until user is authenticated
			$scope.restrictedContent.push(response);
		});
    }

    this.logout = function() {
		$http.post('auth/logout').success(function() {
			$scope.restrictedContent = [];
		});
    }    
    return $scope.AccountController = this;
}];
    
