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
            templateUrl: 'tpls/house/sell.html'
        })
        .state('rent', {
            url: '/rent',
            templateUrl: 'tpls/house/rent.html'
        })
});

sellApp.controller('rentCtrl',function($scope, $location, $window){

    $scope.redir = function(){
        $window.location.href='../login.html'; 
    }

});

sellApp.controller('sellCtrl',function($scope, $location, $window){

    $scope.redir = function(){
        $window.location.href='../login.html'; 
    }

});


