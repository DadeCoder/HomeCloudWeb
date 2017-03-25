var passApp = angular.module('passApp', []);

passApp.controller('passCtrl', function($scope, $http, $window) {

	$scope.pass = function(){
		console.log($scope.house);

		var houseId = $window.localStorage["passAccess"];

		var data = {
			houseId : houseId,
			analyze : $scope.house.analyze,
			communityInfo : $scope.house.communityInfo
		}

		console.log(data);

		$http({
	     url:'http://localhost:8090/api/agent/pass/',
	     method: 'Post',  
	     data:data,
	     withCredentials: true
	    }).success(function(response){
	     console.log("success!");
	     // console.log(response);
	     alert("审核通过");
	     $window.location.href='./index.html#/rent_access';

	    }).error(function(response){
	     console.log("error");
	    });

	}

});