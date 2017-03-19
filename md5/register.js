angular.module('RegiApp',[])
	.controller('RegiCtrl',['$scope','$http','$window', function($scope, $http, $window){
		// $scope.init = function(){
		// 	$scope.customer = {
		// 		id : '',
		// 		name:'dade',
		// 		password:'123456'
		// 	}
		// }

		$scope.user={
			username:"",
			password:"",
			phoneNumber:""
		};


		// $scope.init();
		console.log("$scope.user : ")
		console.log($scope.user);

		

		// var jsonData = JSON.stringify({
		// 		"username":$scope.user.username, 
		// 		"password":$scope.user.password,
		// 		"phoneNumber":$scope.user.phoneNumber
		// 	});


		$scope.regi = function(){
			// var hash = hex_md5($scope.customer.password);
			// console.log("TEST");

			// $http.post('http://localhost:8090/api/test/regi/',{headers:jsonData}).then(function(response) {
			// 		console.log(response.data);
			// 		//$window.location.href='/index.html'; 
			// 		// $window.location.href='/register.html'; 
			// });
			var hash = hex_md5($scope.user.password);

			var dto = {
				username:$scope.user.username,
				// password:$scope.user.password,
				password:hash,
				phoneNumber:$scope.user.phoneNumber
			}

			console.log("dto: ");
			console.log(dto);

			 $http({
			   url:'http://localhost:8090/api/general/register/',
			   method: 'POST',  
			   headers: {'Content-type': 'application/json;charset=UTF-8'},
			   data: dto  
			  }).success(function(response){
			   console.log("success!");
			   console.log(response.data);
			  }).error(function(response){
			   console.log("error");
			   console.log(response);
			  });

			  setTimeout(go, 500);
			  function go(){ 
				$window.location.href='../login.html';
			 } 
			  

		}

		
	}])