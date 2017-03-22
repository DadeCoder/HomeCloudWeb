var buyHouseApp = angular.module("buyHouseApp",[]);

buyHouseApp.controller('infoCtrl', function($scope, $http, $window) {

	var houseId = $window.localStorage["buyHouseId"];
	// var picUrl = $window.localStorage["picUrl"];

	// $scope.picUrl = picUrl;

	console.log(houseId);


	$http({
       url:'http://localhost:8090/api/house/getRentHouse/',
       method: 'get',  
       params:{
		'houseId':houseId,
		// 'picUrl':picUrl
	   },
       withCredentials: true
      }).success(function(response){
       console.log("success!");
       console.log(response);
       $scope.house = response;
      }).error(function(response){
       console.log("error");
       console.log(response);
      });

});
