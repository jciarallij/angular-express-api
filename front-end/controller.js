var searchApp = angular.module('searchApp', []);
searchApp.controller('searchController', function($scope, $http){

	var apiUrl ="http://localhost:3000/search";
		$scope.message = "Hello, ";
		$http.get(apiUrl)
			.then(function successCallback(response){
				$scope.studentList = response.data;
				$scope.status = response.status;
		
			}, function errorCallback(response){
				$scope.result = "ERROR!!!";

			});

		$scope.search = function(){
			$http.post(apiUrl, {name: $scope.who})
			.then(function successCallback(response){
				$scope.result = response.data;
				$scope.status = response.status;
		
			}, function errorCallback(response){
				$scope.result = "ERROR!!!";

			});
		}

});