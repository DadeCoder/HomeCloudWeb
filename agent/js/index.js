var indexApp = angular.module('indexApp', ['ui.router','ui.bootstrap']);

indexApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});


indexApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index', //注意这里在路由中传参数的方式
            templateUrl: 'tpls/info.html'
        })
        .state('rent_access', {
            url: '/rent_access', //注意这里在路由中传参数的方式
            templateUrl: 'tpls/rent_access.html'
        })
        .state('sell_access', {
            url: '/sell_access', //注意这里在路由中传参数的方式
            templateUrl: 'tpls/sell_access.html'
        })
});

indexApp.controller('rentCtrl', function($scope, $http, $state, $stateParams, $window) {

	var data = [];

    $scope.maxSize = 3; //可点击的页码个数
    $scope.numPages = data.length; //总页码数
    $scope.itemSize = 3; //每页条目数
    $scope.bigTotalItems = data.length;

    $scope.hno = data.length;

    $scope.list = data.slice(0, $scope.itemSize);

    $scope.showItems = function() {
        $scope.list = data.slice(($scope.bigCurrentPage-1)*$scope.itemSize, ($scope.bigCurrentPage-1)*$scope.itemSize + $scope.itemSize)
    }

    $http({
     url:'http://localhost:8090/api/agent/getRentAccess/',
     method: 'get',  
     withCredentials: true
    }).success(function(response){
     console.log("success!");
     console.log(response);
     $scope.list = response;

    data = response;

    $scope.numPages = data.length; //总页码数
    $scope.bigTotalItems = data.length;
    $scope.hno = data.length;
    $scope.list = data.slice(0, $scope.itemSize);

    }).error(function(response){
     console.log("error");
    });

    $scope.denyAccess = function(houseId){
		console.log(houseId);
		$window.localStorage["denyAccess"]=houseId;
		$window.location.href='./deny.html';
	}

	$scope.passAccess = function(houseId){
		console.log(houseId);
		$window.localStorage["passAccess"]=houseId;
		$window.location.href='./passAccess.html';
	}


});

indexApp.controller('sellCtrl', function($scope, $http, $state, $stateParams, $window) {

	var data = [];

    $scope.maxSize = 3; //可点击的页码个数
    $scope.numPages = data.length; //总页码数
    $scope.itemSize = 3; //每页条目数
    $scope.bigTotalItems = data.length;

    $scope.hno = data.length;

    $scope.list = data.slice(0, $scope.itemSize);

    $scope.showItems = function() {
        $scope.list = data.slice(($scope.bigCurrentPage-1)*$scope.itemSize, ($scope.bigCurrentPage-1)*$scope.itemSize + $scope.itemSize)
    }

    $http({
     url:'http://localhost:8090/api/agent/getSellAccess/',
     method: 'get',  
     withCredentials: true
    }).success(function(response){
     console.log("success!");
     console.log(response);
     $scope.list = response;

    data = response;

    $scope.numPages = data.length; //总页码数
    $scope.bigTotalItems = data.length;
    $scope.hno = data.length;
    $scope.list = data.slice(0, $scope.itemSize);

    }).error(function(response){
     console.log("error");
    });

    $scope.denyAccess = function(houseId){
		console.log(houseId);
		$window.localStorage["denyAccess"]=houseId;
		$window.location.href='./deny.html';
	}

	$scope.passAccess = function(houseId){
		console.log(houseId);
		$window.localStorage["passAccess"]=houseId;
		$window.location.href='./passAccess.html';
	}


});