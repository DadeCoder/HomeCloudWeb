var purcharApp = angular.module("purcharApp",['ui.bootstrap']);

purcharApp.controller('infoCtrl', function($scope, $http) {

	$http.get('../data/houselist.json')
         .success(function(data) {
         	// $scope.hlist = data;
         	$scope.hno = data.length;

         // $scope.data = ['aaaa','bbbb','cccc','dddd','ffff','eeee','gggg','hhhh','jjjj','ssss','yyyy','uuuu','iiii','oooo'];
         $scope.maxSize = 3; //可点击的页码个数
         $scope.numPages = data.length; //总页码数
         $scope.itemSize = 3; //每页条目数
         $scope.bigTotalItems = data.length; // bigTotalItems/items-per-page(每页最大条目数) 位总页码数
         // $scope.bigCurrentPage = 1; //初始时被选中的页码
         $scope.hlist = data.slice(0, $scope.itemSize);
            $scope.showItems = function() {
                $scope.hlist = data.slice(($scope.bigCurrentPage-1)*$scope.itemSize, ($scope.bigCurrentPage-1)*$scope.itemSize + $scope.itemSize)
            }




         	// console.log($scope.hlist); 
         }
          // $scope.setPagingData(data, page, pageSize);
    );
});

// purcharApp.controller('pageCtrl', function($scope, $http) {
	// var defaults = {
	// 		totalData:0,			//数据总条数
	// 		showData:0,				//每页显示的条数
	// 		pageCount:9,			//总页数,默认为9
	// 		current:1,				//当前第几页
	// 		prevCls:'prev',		//上一页class
	// 		nextCls:'next',		//下一页class
	// 		prevContent:'上一页',	//上一页内容
	// 		nextContent:'下一页',	//下一页内容
	// 		activeCls:'active',		//当前页选中状态
	// 		coping:false,					//首页和尾页
	// 		homePage:'首页',				//首页节点内容
	// 		endPage:'末页',				//尾页节点内容
	// 		count:3,							//当前页前后分页个数
	// 		jump:false,							//跳转到指定页数
	// 		jumpIptCls:'jump-ipt',	//文本框内容
	// 		jumpBtnCls:'jump-btn',	//跳转按钮
	// 		jumpBtn:'跳转',					//跳转按钮文本
	// 		callback:function(currPageNmu){}	//回调(参数：当前页码)
	// 	};


	// 	var options = {
 //            currentPage: 1,
 //        	numberOfPages:5,
 //        	pageCount:9
 //        }

 //        $('#p1').bootstrapPaginator(options);



    // });
