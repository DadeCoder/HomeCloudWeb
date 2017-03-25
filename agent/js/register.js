angular.module('RegiApp',[])
	.controller('RegiCtrl',['$scope','$http','$window', function($scope, $http, $window){

		$scope.user={
			username:"",
			password:"",
			phoneNumber:""
		};


		// $scope.init();
		console.log("$scope.user : ")
		console.log($scope.user);


		$scope.regi = function(){

			var hash = hex_md5($scope.user.password);

			var dto = {
				username:$scope.user.username,
				password:hash,
				phoneNumber:$scope.user.phoneNumber
			}

			console.log("dto: ");
			console.log(dto);

			 $http({
			   url:'http://localhost:8090/api/sys/register/',
			   method: 'POST',  
			   headers: {'Content-type': 'application/json;charset=UTF-8'},
			   data: dto  
			  }).success(function(response){
			   console.log("success!");
			   console.log(response);
			  }).error(function(response){
			   console.log("error");
			   console.log(response);
			  });

			  setTimeout(go, 500);
			  function go(){ 
				$window.location.href='./login.html';
			 } 
			  

		}

		
	}])