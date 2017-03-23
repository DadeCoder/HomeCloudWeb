var buyHouseApp = angular.module("buyHouseApp",[]);

buyHouseApp.controller('infoCtrl', function($scope, $http, $window) {

	var houseId = $window.localStorage["buyHouseId"];
	// var picUrl = $window.localStorage["picUrl"];

	// $scope.picUrl = picUrl;

	console.log(houseId);


	$http({
       url:'http://localhost:8090/api/house/getRentHouse/',
       method: 'get',  
       params:{
		'houseId':houseId,
		// 'picUrl':picUrl
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

      $scope.buy = function(){
            console.log(houseId);
            $http({
             url:'http://localhost:8090/api/house/buy/',
             method: 'get',  
             params:{
                  'houseId':houseId,
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             alert("success");
                  var pid = document.getElementById("buyBtn");
                  addClass( pid,"disabled" ); 
            }).error(function(response){
             console.log("error");
            });
      }

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
       // alert(response);
       // alert(response=='true');
       if (response == 'true') {
            // console("test");
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
                  // 'picUrl':picUrl
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             // console.log(response);
             // $scope.house = response;
             var pid = document.getElementById("focusBtn");
            addClass( pid,"disabled" ); 
            }).error(function(response){
             console.log("error");
             // console.log(response);
            });

      }

      $http({
       url:'http://localhost:8090/api/house/isOrder/',
       method: 'get',  
       params:{
            'houseId':houseId,
      },
       withCredentials: true
      }).success(function(response){
       console.log("success!");
       console.log(response);
       if (response == 'false') {
            var pid = document.getElementById("orderBtn");
            addClass( pid,"disabled" ); 
       }
      }).error(function(response){
       console.log("error");
      });

      $scope.order = function(){
            console.log(houseId);

            $http({
             url:'http://localhost:8090/api/house/order/',
             method: 'get',  
             params:{
                  'houseId':houseId,
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             var pid = document.getElementById("orderBtn");
            addClass( pid,"disabled" ); 
            }).error(function(response){
             console.log("error");
            });

      }

});
