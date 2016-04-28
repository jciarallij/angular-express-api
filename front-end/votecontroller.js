var votingApp = angular.module('votingApp', []);
votingApp.controller('voteController', function($scope, $http){

	var URL = "http://10.150.51.180:3100/search";
	var voteUrl = "http://10.150.51.180:3100/vote";

	$scope.heroOne = {};
	$scope.heroTwo = {};

	$scope.voteOne = function(){
		var postData = {};
		postData.winner = $scope.heroOne;
		postData.loser = $scope.heroTwo;
		$http.post(voteUrl, {winner: postData.winner, loser: postData.loser}).then(
		function(response){
			console.log(response);
		},
		function(error){

		});
	}

	$scope.voteTwo = function(){
		var postData = {};
		postData.winner = $scope.heroTwo;
		postData.loser = $scope.heroOne;
		$http.post(voteUrl, {winner: postData.winner, loser: postData.loser}).then(
		function(response){
			console.log(response);
		},
		function(error){

		});
	}

	$http.get(URL).then(
		function(response){
			console.log(response);
			var ndx1 = Math.floor(Math.random() * response.data.length);
			var ndx2 = Math.floor(Math.random() * response.data.length);
			while(Math.abs(ndx1 - ndx2) < 5){
				ndx2 = Math.floor(Math.random() * response.data.length);
			}

			$scope.heroOne = response.data[ndx1];
			$scope.heroTwo = response.data[ndx2];
		},
		function(error){

		});



	$scope.message = "Hero ";
});