var searchApp = angular.module('searchApp', []);
searchApp.controller('searchController', function($scope, $http){

	

	$scope.search = function(){
		// $scope.message = "Hello, Josh";

		var apiUrl ="http://localhost:3000/search";

		$http.post(apiUrl, {name : $scope.name})
			.then(function successCallback(response){
				$scope.result = response.data.message;
				$scope.status = response.status;
		
			}, function errorCallback(response){
				$scope.result = "ERROR!!!";

			});

		
				





			// .success(function(result, status){
				// if(result.message == "Success"){
				// 	$scope.result = "Congratulations! You connected to the webserver!"
				// 	$scope.status = status;
				// } else {
				// 	$scope.status = status;
				// }
				// // $scope.status = status;
				// // $scope.result = result;
			// });

	}

});