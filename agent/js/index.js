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
        .state('users', {
            url: '/users', //注意这里在路由中传参数的方式
            templateUrl: 'tpls/users.html'
        })
        .state('rent_record', {
            url: '/rent_record', //注意这里在路由中传参数的方式
            templateUrl: 'tpls/rent_record.html'
        })
        .state('sell_record', {
            url: '/sell_record', //注意这里在路由中传参数的方式
            templateUrl: 'tpls/sell_record.html'
        })
        .state('data', {
            url: '/data', //注意这里在路由中传参数的方式
            templateUrl: 'tpls/data.html'
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

indexApp.controller('userCtrl', function($scope, $http, $state, $stateParams, $window) {


    toastr.options = {
        "closeButton": false, //是否显示关闭按钮
        "debug": false, //是否使用debug模式
        "positionClass": "toast-top-center",//弹出窗的位置
        "showDuration": "300",//显示的动画时间
        "hideDuration": "1000",//消失的动画时间
        "timeOut": "2000", //展现时间
        "extendedTimeOut": "1000",//加长展示时间
        "showEasing": "swing",//显示时的动画缓冲方式
        "hideEasing": "linear",//消失时的动画缓冲方式
        "showMethod": "fadeIn",//显示时的动画方式
        "hideMethod": "fadeOut" //消失时的动画方式
        };

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
     url:'http://localhost:8090/api/agent/getAllUsers/',
     method: 'get',  
     withCredentials: true
    }).success(function(response){
     console.log("success!");

     // $scope.myVar = "http://127.0.0.1:8089/" + response.data;

     for(var i=0;i<response.length;i++){
        var url = response[i].imageHeaderUrl;
        response[i].imageHeaderUrl = "http://127.0.0.1:8089/" + url;
    }

    $scope.list = response;

    console.log($scope.list);

    data = response;

    $scope.numPages = data.length; //总页码数
    $scope.bigTotalItems = data.length;
    $scope.hno = data.length;
    $scope.list = data.slice(0, $scope.itemSize);

    }).error(function(response){
     console.log("error");
    });

    $scope.delete = function(houseId){
        console.log(houseId);
        $http({
         url:'http://localhost:8090/api/agent/delete/',
         method: 'get',
         params:{
                  'userId':houseId,
               },
         withCredentials: true
        }).success(function(response){
         console.log("success!");

        toastr.success("删除成功");

        }).error(function(response){
         console.log("error");
        });
    }

    $scope.clean = function(houseId){
        console.log(houseId);
        $http({
         url:'http://localhost:8090/api/agent/clean/',
         method: 'get',
         params:{
                  'userId':houseId,
               },
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         toastr.success("还原成功");
        }).error(function(response){
         console.log("error");
        });
    }

});

indexApp.controller('RentRecordCtrl', function($scope, $http, $state, $stateParams, $window) {

    // $("#calendar1").bootstrapDatepickr({date_format: "d-m-Y"});

    // $scope.h = {
    //     date:''
    // }

    toastr.options = {
        "closeButton": false, //是否显示关闭按钮
        "debug": false, //是否使用debug模式
        "positionClass": "toast-top-center",//弹出窗的位置
        "showDuration": "300",//显示的动画时间
        "hideDuration": "1000",//消失的动画时间
        "timeOut": "2000", //展现时间
        "extendedTimeOut": "1000",//加长展示时间
        "showEasing": "swing",//显示时的动画缓冲方式
        "hideEasing": "linear",//消失时的动画缓冲方式
        "showMethod": "fadeIn",//显示时的动画方式
        "hideMethod": "fadeOut" //消失时的动画方式
        };

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
     url:'http://localhost:8090/api/agent/getRent/',
     method: 'get', 
     withCredentials: true
    }).success(function(response){
     console.log("success!");


    $scope.list = response;

    console.log($scope.list);

    data = response;

    $scope.numPages = data.length; //总页码数
    $scope.bigTotalItems = data.length;
    $scope.hno = data.length;
    $scope.list = data.slice(0, $scope.itemSize);

    }).error(function(response){
     console.log("error");
    });

    $scope.setDate = function(houseId){
        console.log(houseId);
        // console.log($scope.h.date);
        var result1 = $("#calendar1").val();  
        // console.log(result1);
        $http({
         url:'http://localhost:8090/api/agent/setDate/',
         method: 'get',
         params:{
                  'houseId':houseId,
                  'date':result1,
               },
         withCredentials: true
        }).success(function(response){
         console.log("success!");

         $("#calendar1").val("");
        toastr.success("添加成功");

        }).error(function(response){
         console.log("error");
        });
    }

});

indexApp.controller('SellRecordCtrl', function($scope, $http, $state, $stateParams, $window) {

    // $("#calendar1").bootstrapDatepickr({date_format: "d-m-Y"});

    // $scope.h = {
    //     date:''
    // }

    toastr.options = {
        "closeButton": false, //是否显示关闭按钮
        "debug": false, //是否使用debug模式
        "positionClass": "toast-top-center",//弹出窗的位置
        "showDuration": "300",//显示的动画时间
        "hideDuration": "1000",//消失的动画时间
        "timeOut": "2000", //展现时间
        "extendedTimeOut": "1000",//加长展示时间
        "showEasing": "swing",//显示时的动画缓冲方式
        "hideEasing": "linear",//消失时的动画缓冲方式
        "showMethod": "fadeIn",//显示时的动画方式
        "hideMethod": "fadeOut" //消失时的动画方式
        };

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
     url:'http://localhost:8090/api/agent/getSell/',
     method: 'get', 
     withCredentials: true
    }).success(function(response){
     console.log("success!");


    $scope.list = response;

    console.log($scope.list);

    data = response;

    $scope.numPages = data.length; //总页码数
    $scope.bigTotalItems = data.length;
    $scope.hno = data.length;
    $scope.list = data.slice(0, $scope.itemSize);

    }).error(function(response){
     console.log("error");
    });

    $scope.setDate = function(houseId){
        console.log(houseId);
        // console.log($scope.h.date);
        var result1 = $("#calendar1").val(); 
        $http({
         url:'http://localhost:8090/api/agent/setDate/',
         method: 'get',
         params:{
                  'houseId':houseId,
                  'date':result1,
               },
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         $("#calendar1").val("");
        toastr.success("添加成功");

        }).error(function(response){
         console.log("error");
        });
    }

});

indexApp.controller('dataCtrl', function($scope, $http, $window) {

    var data = [];

    $scope.maxSize = 3; //可点击的页码个数
    $scope.numPages = data.length; //总页码数
    $scope.itemSize = 5; //每页条目数
    $scope.bigTotalItems = data.length;

    $scope.list = data.slice(0, $scope.itemSize);

    $scope.showItems = function() {
        $scope.list = data.slice(($scope.bigCurrentPage-1)*$scope.itemSize, ($scope.bigCurrentPage-1)*$scope.itemSize + $scope.itemSize)
    }


    $http({
     url:'http://localhost:8090/api/agent/getDataInfo/',
     method: 'get', 
     withCredentials: true
    }).success(function(response){
     console.log("success!");

     // $scope.list = response;

    data = response;

    $scope.numPages = data.length; //总页码数
    $scope.bigTotalItems = data.length;

    $scope.list = data.slice(0, $scope.itemSize);

    console.log(response);

    }).error(function(response){
     console.log("error");
    });

});