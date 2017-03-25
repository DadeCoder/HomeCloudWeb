var loginApp = angular.module("loginApp",[]);

loginApp.config(function($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});


loginApp.controller('navigation', function($rootScope, $http, $location, $scope, $window) {

			
			$scope.login = function() {

				var hash = hex_md5($scope.credentials.password);

				var h = {authorization : "Basic "
				+ btoa($scope.credentials.username + ":" + hash)
				};

				console.log(hash);
				console.log(h);

				$http.get('http://localhost:8090/login/',{withCredentials: true,headers : h})
					.success(function(response) {
						console.log(response.data);
						// $window.location.href='/test_spring_sec.html'; 
						$window.location.href='./index.html'; 
					})
					.error(function(response) {
						alert("Wrong account or password"); 
					});

			};
		});