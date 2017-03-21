var uploadApp = angular.module('uploadApp', []);

uploadApp.controller('uploadCtrl',['$scope','$http','$window', function($scope, $http, $window){

	
	function initFileInput(ctrlName) {      
       var control = $('#' + ctrlName);   
       control.fileinput({  
           language: 'zh', //设置语言  
           showUpload: false, //是否显示上传按钮  
           showRemove:true,  
           dropZoneEnabled: false,  
           showCaption: true,//是否显示标题  
           allowedPreviewTypes: ['image'],  
              allowedFileTypes: ['image'],  
              allowedFileExtensions:  ['jpg', 'png'],   // 限制文件类型
              maxFileSize : 2000,  
              maxFileCount: 1,  
              uploadAsync: false, //同步上传  
              //initialPreview: [   
                      //预览图片的设置  
                //      "<img src='http://127.0.0.1:8080/NewsManageSys/plugin/umeditor1_2_2/jsp/upload/20161030/55061                  477813913474.jpg' class='file-preview-image' alt='肖像图片' title='肖像图片'>",  
              //],  
             
       })
    }

    initFileInput("file");   

	 $scope.upload = function(){

	 	$http({
               url:'http://localhost:8090/api/house/upload/',
               method: 'POST',  
               // headers: {'Content-type': 'application/json;charset=UTF-8'},
               headers: {
                'Content-Type': undefined
                // 'Content-Type': 'multipart/form-data;boundary=${bound}'
              },
              transformRequest: function() {
                  var formData = new FormData();
                  formData.append('file', $('#file')[0].files[0]);
                  // formData.append('dto', dto);
                  return formData;
               },
               // data: dto,
               withCredentials: true
              }).success(function(response){
               console.log("success!");
               console.log(response);

              $window.localStorage["picUrl"]=response;

              }).error(function(response){
               console.log("error");
               console.log(response);
              });

              setTimeout(go, 500);
              function go(){ 
                $window.location.href='../house.html';

             } 

	 }

}]);

