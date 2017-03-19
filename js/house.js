var houseApp = angular.module("houseApp",[]);

houseApp.controller('infoCtrl', function($scope, $http) {

	$http.get('../data/houselist1.json')
         .success(function(data) {
         	$scope.house = data;
         	console.log(data);
         	// $scope.hno = data.length;
         });

});