// define(function(){
//     function fun1(){
//       alert("it works");
//     }

//     // fun1();
// })

define('testRequire', ['angular'], function(angular) {
	var TestApp = angular.module('TestApp',[]);

	TestApp.controller('test',function($scope){
		$scope.greeting = {
			text:"123"
		}
	})

	return TestApp;
});

