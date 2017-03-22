var purcharApp = angular.module("purcharApp",['ui.bootstrap']);


purcharApp.controller('cdtCtrl', function($scope, $http) {

	$scope.condition = ["区域不限","售价不限","面积不限","房型不限","楼层不限"];

	$scope.gotCdt = function(event){
		remove(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[0] = event.target.getAttribute("value");
	}

	function remove(eid){
		var d0 = document.getElementById("d0"); 
		var d1 = document.getElementById("d1"); 
		var d2 = document.getElementById("d2"); 
		var d3 = document.getElementById("d3"); 
		var d4 = document.getElementById("d4"); 
		var d5 = document.getElementById("d5"); 
		var d6 = document.getElementById("d6"); 
		var d7 = document.getElementById("d7"); 
		var d8 = document.getElementById("d8");
		var d9 = document.getElementById("d9");
		var d10 = document.getElementById("d10");
		var d11 = document.getElementById("d11");
		var d12 = document.getElementById("d12");

		removeClass(d0,"text-danger");
		removeClass(d1,"text-danger");
		removeClass(d2,"text-danger");
		removeClass(d3,"text-danger");
		removeClass(d4,"text-danger");
		removeClass(d5,"text-danger");
		removeClass(d6,"text-danger");
		removeClass(d7,"text-danger");
		removeClass(d8,"text-danger");
		removeClass(d9,"text-danger");
		removeClass(d10,"text-danger");
		removeClass(d11,"text-danger");
		removeClass(d12,"text-danger");

		var did = document.getElementById(eid);
		addClass( did,"text-danger" ); 
	}

	$scope.gotCdtP = function(event){
		removeP(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[1] = event.target.getAttribute("value");
	}

	function removeP(eid){
		var p0 = document.getElementById("p0"); 
		var p1 = document.getElementById("p1"); 
		var p2 = document.getElementById("p2"); 
		var p3 = document.getElementById("p3"); 
		var p4 = document.getElementById("p4"); 
		var p5 = document.getElementById("p5"); 
		var p6 = document.getElementById("p6"); 
		var p7 = document.getElementById("p7"); 
		var p8 = document.getElementById("p8");

		removeClass(p0,"text-danger");
		removeClass(p1,"text-danger");
		removeClass(p2,"text-danger");
		removeClass(p3,"text-danger");
		removeClass(p4,"text-danger");
		removeClass(p5,"text-danger");
		removeClass(p6,"text-danger");
		removeClass(p7,"text-danger");
		removeClass(p8,"text-danger");

		var pid = document.getElementById(eid);
		addClass( pid,"text-danger" ); 
	}

	$scope.gotCdtS = function(event){
		removeS(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[2] = event.target.getAttribute("value");
	}

	function removeS(eid){
		var p0 = document.getElementById("s0"); 
		var p1 = document.getElementById("s1"); 
		var p2 = document.getElementById("s2"); 
		var p3 = document.getElementById("s3"); 
		var p4 = document.getElementById("s4"); 
		var p5 = document.getElementById("s5"); 
		var p6 = document.getElementById("s6"); 
		var p7 = document.getElementById("s7"); 

		removeClass(p0,"text-danger");
		removeClass(p1,"text-danger");
		removeClass(p2,"text-danger");
		removeClass(p3,"text-danger");
		removeClass(p4,"text-danger");
		removeClass(p5,"text-danger");
		removeClass(p6,"text-danger");
		removeClass(p7,"text-danger");

		var pid = document.getElementById(eid);
		addClass( pid,"text-danger" ); 
	}

	$scope.gotCdtT = function(event){
		removeT(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[3] = event.target.getAttribute("value");
	}

	function removeT(eid){
		var p0 = document.getElementById("t0"); 
		var p1 = document.getElementById("t1"); 
		var p2 = document.getElementById("t2"); 
		var p3 = document.getElementById("t3"); 
		var p4 = document.getElementById("t4"); 
		var p5 = document.getElementById("t5"); 
		var p6 = document.getElementById("t6"); 

		removeClass(p0,"text-danger");
		removeClass(p1,"text-danger");
		removeClass(p2,"text-danger");
		removeClass(p3,"text-danger");
		removeClass(p4,"text-danger");
		removeClass(p5,"text-danger");
		removeClass(p6,"text-danger");

		var pid = document.getElementById(eid);
		addClass( pid,"text-danger" ); 
	}

	$scope.gotCdtF = function(event){
		removeF(event.target.getAttribute("id"));
		console.log(event.target.getAttribute("value"));
		$scope.condition[4] = event.target.getAttribute("value");
	}

	function removeF(eid){
		var p0 = document.getElementById("f0"); 
		var p1 = document.getElementById("f1"); 
		var p2 = document.getElementById("f2"); 
		var p3 = document.getElementById("f3"); 

		removeClass(p0,"text-danger");
		removeClass(p1,"text-danger");
		removeClass(p2,"text-danger");
		removeClass(p3,"text-danger");

		var pid = document.getElementById(eid);
		addClass( pid,"text-danger" ); 
	}

	function hasClass( elements,cName ){ 
		return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
		// ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
	}; 

	function addClass( elements,cName ){ 
		if( !hasClass( elements,cName ) ){ 
			elements.className += " " + cName; 
		}; 
	}; 

	function removeClass( elements,cName ){ 
		if( hasClass( elements,cName ) ){ 
		elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " );
		 // replace方法是替换 
		}; 
	}; 

});

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
