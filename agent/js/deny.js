var denyApp = angular.module('denyApp', []);

denyApp.controller('denyCtrl', function($scope, $http, $window) {

	$scope.deny = function(){
		console.log($scope.house);

		var houseId = $window.localStorage["denyAccess"];

		var data = {
			houseId : houseId,
			denyInfo : $scope.house.denyInfo
		}

		console.log(data);

		$http({
	     url:'http://localhost:8090/api/agent/deny/',
	     method: 'Post',  
	     data:data,
	     withCredentials: true
	    }).success(function(response){
	     console.log("success!");
	     // console.log(response);
	     alert("已审核：不通过");
	     $window.location.href='./index.html';

	    }).error(function(response){
	     console.log("error");
	    });

	}

});