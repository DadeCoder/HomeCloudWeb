require.config({

	//	require将data-main指定的js为根路径
	// baseUrl: "./",

    paths : {
    	"testRequire" : "../lib/testRequire",
    	"jquery": "../lib/jquery-1.9.1",
    	"angular":"../lib/angular-1.3.0.14/angular"
    },
    shim: {
        // 需要导出一个名称为 angular 的全局变量， 否则无法使用
        'angular' : { exports: 'angular' },
        // 设置 angular 的其它模块依赖 angular 核心模块
        // 'angular-route': { deps: ['angular'] }
    }

});