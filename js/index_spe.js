var indexApp = angular.module("indexApp",[]); 

indexApp.controller('topCtrl', function($rootScope, $http, $location, $scope, $window) {


	console.log("index_Spe");

      $scope.top = {
            lore : ''
       }

	// $scope.data = {
	// 	users : 32,
	// 	sellHouses:21,
	// 	rentHouses:11,
	// 	doneCases:1
	// }

	$http({
       url:'http://localhost:8090/api/general/getInfoSpe/',
       method: 'get', 
       withCredentials: true
      }).success(function(response){
       console.log("success!");
       console.log(response);
       $scope.data = response;
       $scope.top = {
            lore : response.name
       }
      }).error(function(response){
       console.log("error");
      });


});