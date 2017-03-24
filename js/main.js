// require(["testRequire"]);
require(["jquery"],function($){
    $(function(){
        $( "#result" ).html( "Hello World!" ); 
    })
});

// require(["testRequire"]);
// require(['jquery']);
// require(['angular']);

require(['testRequire'], function(app){
    angular.bootstrap(document, ['TestApp']);
});
