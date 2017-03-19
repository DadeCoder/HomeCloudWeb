var conApp = angular.module("conApp",[]);

conApp.controller('imgCtrl', function($rootScope, $http, $location, $scope, $window) {


	$http.get('http://localhost:8090/api/purchaser/getImage/', {withCredentials: true}).then(function(response) {
		console.log(response.data);
		$scope.myVar = "http://127.0.0.1:8089/" + response.data;
	});

	// $scope.myVar = "../images/default.jpg";

});
