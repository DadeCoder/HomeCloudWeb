var houseApp = angular.module("houseApp",[]);

houseApp.controller('infoCtrl', function($scope, $http, $window) {

	var houseId = $window.localStorage["houseId"];
	var picUrl = $window.localStorage["picUrl"];

	$scope.picUrl = picUrl;

	console.log(houseId);


	$http({
       url:'http://localhost:8090/api/house/get/',
       method: 'get',  
       params:{
		'houseId':houseId
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

	// $http.get('../data/houselist1.json')
 //         .success(function(data) {
 //         	$scope.house = data;
 //         	console.log(data);
 //         	// $scope.hno = data.length;
 //         });

});
