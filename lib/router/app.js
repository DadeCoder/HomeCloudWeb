//  // Setting configuration for application
// var routingApp = angular.module('routingApp', ['ngRoute'])
//     routingApp.config(function ($routeProvider) {
//         $routeProvider.when('/hello', {
//             controller: helloCtrl,
//             templateUrl: 'hello.html'
//         }).when('/about', {
//             controller: aboutCtrl,
//             templateUrl: 'about.html'
//         });
        
//     })
//     // Ignore code below. This is usually in seperate html files
//     .run(function ($templateCache){
//         $templateCache.put('hello.html', '<h1>{{message}}!</h1>');
//         $templateCache.put('about.html', '<h1>About</h1><p>{{description}}</p>');
//     });

var app= angular.module('routingApp', ['ui.router']);
    // Setting configuration for application

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('hello', {
        url: '/hello',
        controller: helloCtrl,
        templateUrl: 'hello.html'
    })
    .state('about', {
        url: '/about',
        controller: aboutCtrl,
        templateUrl: 'about.html'
    });
  
}])
// Ignore code below. This is usually in seperate html files
.run(function ($templateCache){
    $templateCache.put('hello.html', '<h1>{{message}}!</h1>');
    $templateCache.put('about.html', '<h1>About</h1><p>{{description}}</p>');
});