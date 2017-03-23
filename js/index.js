var indexApp = angular.module("indexApp",[]); 

indexApp.controller('topCtrl', function($rootScope, $http, $location, $scope, $window) {


	console.log("index");

	// $scope.data = {
	// 	users : 32,
	// 	sellHouses:21,
	// 	rentHouses:11,
	// 	doneCases:1
	// }

	$http({
       url:'http://localhost:8090/api/general/getInfo/',
       method: 'get', 
      }).success(function(response){
       console.log("success!");
       console.log(response);
       $scope.data = response;
      }).error(function(response){
       console.log("error");
      });


});