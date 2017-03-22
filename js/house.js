var houseApp = angular.module("houseApp",[]);

houseApp.controller('infoCtrl', function($scope, $http, $window) {

	var houseId = $window.localStorage["houseId"];
	var picUrl = $window.localStorage["picUrl"];

	$scope.picUrl = picUrl;

	console.log(houseId);


	$http({
       url:'http://localhost:8090/api/house/get/',
       method: 'get',  
       params:{
		'houseId':houseId,
		'picUrl':picUrl
	   },
       withCredentials: true
      }).success(function(response){
       console.log("success!");
       console.log(response);
       $scope.house = response;
      }).error(function(response){
       console.log("error");
       console.log(response);
      });

	// $http.get('../data/houselist1.json')
 //         .success(function(data) {
 //         	$scope.house = data;
 //         	console.log(data);
 //         	// $scope.hno = data.length;
 //         });

 	$http({
       url:'http://localhost:8090/api/house/isFocus/',
       method: 'get',  
       params:{
            'houseId':houseId,
      },
       withCredentials: true
      }).success(function(response){
       console.log("success!");
       console.log(response);
       if (response == 'true') {
            var pid = document.getElementById("focusBtn");
            addClass( pid,"disabled" ); 
       }
      }).error(function(response){
       console.log("error");
      });

      function hasClass( elements,cName ){ 
            return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
            // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
      }; 

      function addClass( elements,cName ){ 
            if( !hasClass( elements,cName ) ){ 
                  elements.className += " " + cName; 
            }; 
      }; 

      $scope.focus = function(){
            console.log(houseId);

            $http({
             url:'http://localhost:8090/api/house/focus/',
             method: 'get',  
             params:{
                  'houseId':houseId,
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             var pid = document.getElementById("focusBtn");
            addClass( pid,"disabled" ); 
            }).error(function(response){
             console.log("error");
            });

      }

});
