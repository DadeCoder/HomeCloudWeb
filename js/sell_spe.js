var sellApp = angular.module('sellApp', ['ui.router']);


sellApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

sellApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/sell');
    $stateProvider
        .state('sell', {
            url: '/sell',
            templateUrl: 'tpls/house/sell_spe.html'
        })
        .state('rent', {
            url: '/rent',
            templateUrl: 'tpls/house/rent_spe.html'
        })
});

sellApp.controller('rentOutCtrl',['$scope','$http','$window', function($scope, $http, $window){

    $scope.house={
        district:"",
        community:"",
        address:"",
        floor:"",
        area:"",
        houseType:"",
        rentPrice:""
    };
    

    $scope.rentOut = function(){
        var dto = {
            district:$scope.house.district,
            community:$scope.house.community,
            address:$scope.house.address,
            floor:$scope.house.floor,
            area:$scope.house.area,
            houseType:$scope.house.houseType,
            rentPrice:$scope.house.rentPrice
            // file:$scope.house.file
        }

        

        $http({
               url:'http://localhost:8090/api/house/rentOut/',
               method: 'POST',  
               headers: {'Content-type': 'application/json;charset=UTF-8'},
              //  headers: {
              //   'Content-Type': undefined
              //   // 'Content-Type': 'multipart/form-data;boundary=${bound}'
              // },
              // transformRequest: function() {
              //     var formData = new FormData();
              //     formData.append('file', $('#file')[0].files[0]);
              //     formData.append('dto', dto);
              //     return formData;
              //  },
               data: dto,
               withCredentials: true
              }).success(function(response){
               console.log("success!");
               console.log(response);

              $window.localStorage["houseId"]=response.info;

              }).error(function(response){
               console.log("error");
               console.log(response);
              });

              setTimeout(go, 500);
              function go(){ 
                $window.location.href='../upload.html';

             } 

    }
}]);


