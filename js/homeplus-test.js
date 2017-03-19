var test = angular.module("test",[]);

test.controller("hello",['$scope',function HelloAng($scope){

	$scope.greeting = {
		text:'Hello angular'
	};

}]);


test.directive("dir",function(){

	return {
		restrict:'E',
		template:'<div>hello directive</div>',
		replace:true
	}

});

test.controller("mo",['$scope',function mo($scope){

	$scope.greeting = {
		text:'default text'
	};

}]);

test.controller("common",['$scope',function common($scope){
	$scope.com = function(){
		alert("common");
	}
}]);

test.controller("pri1",['$scope',function pri1($scope){
	$scope.test1 = function(){
		alert("test1");
	}
}]);

test.controller("pri2",['$scope',function pri2($scope){

	$scope.test2 = function(){
		alert("test2");
	}

}]);

test.controller("GreetCrtl",['$scope','$rootScope',function greetCtrl($scope,$rootScope){

	$scope.name = "world";
	$rootScope.department = "angular";

}]);

test.controller("ListCtrl",['$scope','$rootScope',function listCtrl($scope,$rootScope){

		$scope.names = ['Igor','Misko','Vojta'];

}]);

test.controller("user",['$scope',function user($scope){

	$scope.userInfo = {
		email:"",
		password:""
	};

	$scope.getFormatData = function(){
		console.log($scope.userInfo);
	};

	$scope.setFormatData = function(){
		$scope.userInfo = {
			email:"",
			password:""
		};
	}

}]);

test.controller("userInfo",['$scope', function userInfo($scope){

	$scope.userInfo = {
		email:"email",
		password:"password"
	};


}]);

















