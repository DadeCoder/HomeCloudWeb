/**
 * 这里是书籍列表模块  
 * @type {[type]}
 */
var bookListModule = angular.module("BookListModule", []);
bookListModule.controller('BookListCtrl', function($scope, $http, $state, $stateParams) {

    // $scope.filterOptions = {
    //     filterText: "",
    //     useExternalFilter: true
    // };
    // $scope.totalServerItems = 0;
    // $scope.pagingOptions = {
    //     pageSizes: [5, 10, 20],
    //     pageSize: 5,
    //     currentPage: 1
    // };

    // // 分页
    // $scope.setPagingData = function(data, page, pageSize) {
    //     var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
    //     $scope.books = pagedData;
    //     $scope.totalServerItems = data.length;
    //     if (!$scope.$$phase) {
    //         $scope.$apply();
    //     }
    // };

    // //这里可以根据路由上传递过来的bookType参数加载不同的数据
    // console.log($stateParams);
    // $scope.getPagedDataAsync = function(pageSize, page, searchText) {
    //     setTimeout(function() {
    //         var data;
    //         if (searchText) {
    //             var ft = searchText.toLowerCase();
    //             $http.get('../data/books' + $stateParams.bookType + '.json')
    //                 .success(function(largeLoad) {
    //                     data = largeLoad.filter(function(item) {
    //                         return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
    //                     });
    //                     $scope.setPagingData(data, page, pageSize);
    //                 });
    //         } else {
    //             $http.get('../data/books' + $stateParams.bookType + '.json')
    //                 .success(function(largeLoad) {
    //                     $scope.setPagingData(largeLoad, page, pageSize);
    //                 });
    //         }
    //     }, 100);
    // };

    // $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

    // $scope.$watch('pagingOptions', function(newVal, oldVal) {
    //     if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
    //         $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
    //     }
    // }, true);
    // $scope.$watch('filterOptions', function(newVal, oldVal) {
    //     if (newVal !== oldVal) {
    //         $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
    //     }
    // }, true);

    // $scope.gridOptions = {
    //     data: 'books',
    //     rowTemplate: '<div style="height: 100%"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
    //         '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
    //         '<div ng-cell></div>' +
    //         '</div></div>',
    //     multiSelect: false,
    //     enableCellSelection: true,
    //     enableRowSelection: false,
    //     enableCellEdit: true,
    //     enablePinning: true,
    //     columnDefs: [{
    //         field: 'index',
    //         displayName: '序号',
    //         width: 60,
    //         pinnable: false,
    //         sortable: false
    //     }, {
    //         field: 'name',
    //         displayName: '区域',
    //         enableCellEdit: true
    //     }, {
    //         field: 'author',
    //         displayName: '地址',
    //         enableCellEdit: true,
    //         width: 220
    //     }, {
    //         field: 'pubTime',
    //         displayName: '看房日期',
    //         enableCellEdit: true,
    //         width: 120
    //     }, {
    //         field: 'price',
    //         displayName: '价格',
    //         enableCellEdit: true,
    //         width: 120,
    //         cellFilter: 'currency:"￥"'
    //     }, {
    //         field: 'bookId',
    //         displayName: '详细',
    //         enableCellEdit: false,
    //         sortable: false,
    //         pinnable: false,
    //         cellTemplate: '<div><a ui-sref="bookdetail({bookId:row.getProperty(col.field)})" id="{{row.getProperty(col.field)}}">详情</a></div>'
    //     }],
    //     enablePaging: true,
    //     showFooter: true,
    //     totalServerItems: 'totalServerItems',
    //     pagingOptions: $scope.pagingOptions,
    //     filterOptions: $scope.filterOptions
    // };

    $http({
     url:'http://localhost:8090/api/house/getBeforeOrder/',
     method: 'get',  
     withCredentials: true
    }).success(function(response){
     console.log("success!");
     console.log(response);
     $scope.list = response;
     $scope.scheduleNo = $scope.list.length;
    }).error(function(response){
     console.log("error");
    });


});

bookListModule.controller('scheduleCtrl', function($scope, $http, $state, $stateParams) {

    $http({
     url:'http://localhost:8090/api/house/getAfterOrder/',
     method: 'get',  
     withCredentials: true
    }).success(function(response){
     console.log("success!");
     console.log(response);
     $scope.list = response;
     $scope.scheduleNo = $scope.list.length;
    }).error(function(response){
     console.log("error");
    });


    // $scope.list = [{age:30,name:"dade"},{age:21,name:"sinchang"},{age:21,name:"sinchang"},{age:21,name:"sinchang"},{age:21,name:"sinchang"},{age:21,name:"sinchang"},{age:21,name:"sinchang"},{age:21,name:"sinchang"}]
    // $scope.list = [];

    

    // if ($scope.scheduleNo == 0) {
    //     $scope.zero = "赶快去添加吧！";
    // }
    // else{
    //     $scope.zero = "添加更多！";
    // }

});


bookListModule.controller('dataSellCtrl', function($scope, $http, $state, $stateParams) {
        $scope.new = {
            price:''
        }

        getData = function(){
            $http({
             url:'http://localhost:8090/api/purchaser/getSell/',
             method: 'get',  
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             $scope.hlist = response;
            }).error(function(response){
             console.log("error");
            });
        };

        getData();

        function hasClass( elements,cName ){ 
            return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
            // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
      }; 

      function addClass( elements,cName ){ 
            if( !hasClass( elements,cName ) ){ 
                  elements.className += " " + cName; 
            }; 
      }; 

      $scope.stopSell = function(houseId){

            $http({
             url:'http://localhost:8090/api/house/stopSell/',
             method: 'get',  
             params:{
                  'houseId':houseId,
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
                var pid = document.getElementById("stopBtn");
                addClass( pid,"disabled" ); 
            }).error(function(response){
             console.log("error");
            });
      }

      $scope.newBtn = function(houseId){

            console.log($scope.new.price);

            $http({
             url:'http://localhost:8090/api/house/changePrice/',
             method: 'get',  
             params:{
                  'houseId':houseId,
                  'price':$scope.new.price
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             $scope.new = {
                price : ''
             }
             getData();
            }).error(function(response){
             console.log("error");
            });

      }


});

bookListModule.controller('dataRentCtrl', function($scope, $http, $state, $stateParams) {
        $scope.new = {
            price:''
        }

        getData = function(){
            $http({
             url:'http://localhost:8090/api/purchaser/getRent/',
             method: 'get',  
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             $scope.hlist = response;
            }).error(function(response){
             console.log("error");
            });
        };

        getData();

        function hasClass( elements,cName ){ 
            return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
            // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
      }; 

      function addClass( elements,cName ){ 
            if( !hasClass( elements,cName ) ){ 
                  elements.className += " " + cName; 
            }; 
      }; 

      $scope.stopRent = function(houseId){

            $http({
             url:'http://localhost:8090/api/house/stopRent/',
             method: 'get',  
             params:{
                  'houseId':houseId,
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
                var pid = document.getElementById("stopBtn");
                addClass( pid,"disabled" ); 
            }).error(function(response){
             console.log("error");
            });
      }

      $scope.newBtn = function(houseId){

            console.log($scope.new.price);

            $http({
             url:'http://localhost:8090/api/house/changePrice/',
             method: 'get',  
             params:{
                  'houseId':houseId,
                  'price':$scope.new.price
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             $scope.new = {
                price : ''
             }
             getData();
            }).error(function(response){
             console.log("error");
            });

      }
});

bookListModule.controller('dataPwdCtrl', function($scope, $http, $state, $stateParams, $window) {
        $scope.user = {
            oldPwd:'',
        }

      $scope.newPwd = function(){

            var oldhash = hex_md5($scope.user.oldPwd);
            var newhash = hex_md5($scope.password);

            console.log($scope.user.oldPwd);
            console.log($scope.password);

            $http({
             url:'http://localhost:8090/api/purchaser/newPwd/',
             method: 'get',  
             params:{
                  'oldhash':oldhash,
                  'newhash':newhash
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");

            if (response == 'false') {
                alert("旧密码不正确");
            }
            else{
                $window.location.href='../../login.html';
            }

             // $scope.user = {
             //        oldPwd : '',
             //        newPwd : ''
             //     }

            }).error(function(response){
             console.log("error");
            });

      }
});

bookListModule.controller('dataNickCtrl', function($scope, $http, $state, $stateParams) {
        $scope.user = {
            old:'',
            nick:''
        }

        getData = function(){
            $http({
             url:'http://localhost:8090/api/purchaser/getNick/',
             method: 'get',  
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             // console.log(response);
             $scope.user = {
                old : response
             }
            }).error(function(response){
             console.log("error");
            });
        };

        getData();

      $scope.newNick = function(){

            $http({
             url:'http://localhost:8090/api/purchaser/newNick/',
             method: 'get',  
             params:{
                  'nick':$scope.user.nick
               },
             withCredentials: true
            }).success(function(response){
             console.log("success!");
             if (response == 'true') {
                 getData();
            }else{
                alert("该名称已存在！");
            }
             $scope.user = {
                    nick : ''
                 }
            }).error(function(response){
             console.log("error");
            });

      }
});

bookListModule.controller('focusRentOutCtrl', function($scope, $http, $state, $stateParams) {
    // $scope.hlist = [{pic:"pic",name:"Rent",size:20,price:20}];

    getData = function(){
        $http({
         url:'http://localhost:8090/api/purchaser/getAllRent/',
         method: 'get',  
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         // console.log(response);
         $scope.hlist = response;
        }).error(function(response){
         console.log("error");
        });
    };

    getData();

});

bookListModule.controller('focusRentCtrl', function($scope, $http, $state, $stateParams, $window) {
    // $scope.hlist = [{pic:"pic",name:"Rent",size:20,price:20}];
    getData = function(){
        $http({
         url:'http://localhost:8090/api/house/getFocusRent/',
         method: 'get',  
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         // console.log(response);
         $scope.hlist = response;
        }).error(function(response){
         console.log("error");
        });
    };

    getData();

    $scope.getRentHouse = function(houseId){
        console.log(houseId);
        $window.localStorage["rentHouseId"]=houseId;
        $window.location.href='../rentHouse.html';
    }

});

bookListModule.controller('focusSellCtrl', function($scope, $http, $state, $stateParams) {
    // $scope.hlist = [{pic:"pic",name:"Sell",size:20,price:20},{pic:"pic",name:"name",size:20,price:20},{pic:"pic",name:"name",size:20,price:20},{pic:"pic",name:"name",size:20,price:20}];

    getData = function(){
        $http({
         url:'http://localhost:8090/api/purchaser/getAllSell/',
         method: 'get',  
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         // console.log(response);
         $scope.hlist = response;
        }).error(function(response){
         console.log("error");
        });
    };

    getData();



});

bookListModule.controller('focusBuyCtrl', function($scope, $http, $state, $stateParams,$window) {
    // $scope.hlist = [{pic:"pic",name:"Rent",size:20,price:20}];
    getData = function(){
        $http({
         url:'http://localhost:8090/api/house/getFocusSell/',
         method: 'get',  
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         // console.log(response);
         $scope.hlist = response;
        }).error(function(response){
         console.log("error");
        });
    };

    getData();

    $scope.getSellHouse = function(houseId){
        console.log(houseId);
        $window.localStorage["rentHouseId"]=houseId;
        $window.location.href='../buyHouse.html';
    }


});

bookListModule.controller('indexAllCtrl', function($scope, $http, $state, $stateParams, $window) {
    // $scope.ilist = [{pic:"pic",name:"All",size:20,price:20}];
    getData = function(){
        $http({
         url:'http://localhost:8090/api/house/getPriceAll/',
         method: 'get',  
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         console.log(response);
         $scope.ilist = response;
        }).error(function(response){
         console.log("error");
        });
    };

    getData();

    $scope.getRentHouse = function(houseId){
        console.log(houseId);
        $window.localStorage["rentHouseId"]=houseId;
        $window.location.href='../rentHouse.html';
    }

});

bookListModule.controller('indexUpCtrl', function($scope, $http, $state, $stateParams, $window) {
    // $scope.ilist = [{pic:"pic",name:"Up",size:20,price:20}];

    getData = function(){
        $http({
         url:'http://localhost:8090/api/house/getPriceUp/',
         method: 'get',  
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         console.log(response);
         $scope.ilist = response;
        }).error(function(response){
         console.log("error");
        });
    };

    getData();

    $scope.getRentHouse = function(houseId){
        console.log(houseId);
        $window.localStorage["rentHouseId"]=houseId;
        $window.location.href='../rentHouse.html';
    }


});

bookListModule.controller('indexDownCtrl', function($scope, $http, $state, $stateParams, $window) {
    // $scope.ilist = [{pic:"pic",name:"Down",size:20,price:20}];

    getData = function(){
        $http({
         url:'http://localhost:8090/api/house/getPriceDown/',
         method: 'get',  
         withCredentials: true
        }).success(function(response){
         console.log("success!");
         console.log(response);
         $scope.ilist = response;
        }).error(function(response){
         console.log("error");
        });
    };

    getData();

    $scope.getRentHouse = function(houseId){
        console.log(houseId);
        $window.localStorage["rentHouseId"]=houseId;
        $window.location.href='../rentHouse.html';
    }

});

bookListModule.controller('imgCtrl', function($scope, $http, $state, $stateParams) {
    $http.get('http://localhost:8090/api/purchaser/getImage/', {withCredentials: true}).then(function(response) {
        console.log(response.data);
        $scope.myVar = "http://127.0.0.1:8089/" + response.data;
    });

     // $scope.myVar = "http://127.0.0.1:8089/default.jpg";

});

/**
 * 这里是书籍详情模块
 * @type {[type]}
 */
var bookDetailModule = angular.module("BookDetailModule", []);
bookDetailModule.controller('BookDetailCtrl', function($scope, $http, $state, $stateParams) {
    console.log($stateParams);
    //请模仿上面的代码，用$http到后台获取数据，把这里的例子实现完整
    
});
