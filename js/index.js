var indexApp = angular.module("indexApp",[]);

indexApp.controller('topCtrl', function($rootScope, $http, $location, $scope, $window) {

	$scope.top={
		lore:"登录·注册"
	}

	$http.get('http://localhost:8090/getInfo/', {withCredentials: true}).then(function(response) {
		console.log(response.data);
		$scope.top={
			lore:response.data
		}
	});


});