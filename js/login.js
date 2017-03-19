var loginApp = angular.module("loginApp",[]);

loginApp.config(function($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});


loginApp.controller('navigation', function($rootScope, $http, $location, $scope, $window) {

			
			$scope.login = function() {

				var hash = hex_md5($scope.credentials.password);

				// var h = {authorization : "Basic "
				// + btoa($scope.credentials.username + ":" + $scope.credentials.password)
				// };

				var h = {authorization : "Basic "
				+ btoa($scope.credentials.username + ":" + hash)
				};

				//console.log($scope.credentials.username);
				//console.log($scope.credentials.password);
				console.log(h);

				$http.get('http://localhost:8090/login/',{withCredentials: true,headers : h}).then(function(response) {
					console.log(response.data);
					// $window.location.href='/test_spring_sec.html'; 
					$window.location.href='/index_spe.html'; 
				});

			};
		});