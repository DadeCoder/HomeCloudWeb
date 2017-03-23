var routerApp = angular.module('routerApp', ['ui.router', 'ngGrid', 'BookListModule', 'BookDetailModule']);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams
    这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams 
 * @return {[type]}
 */
routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/8');
    $stateProvider
        .state('index', {
            url: '/{bookType:[0]{1,4}}',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/bookList.html'
                },
                'booktype@index': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@index': {
                    templateUrl: 'tpls/manager-index.html'
                }
            }
        })
        .state('schedule', {
            url: '/{bookType:[1]{1,4}}',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@schedule': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@schedule': {
                    templateUrl: 'tpls/manager-schedule.html'
                }
            }
        })
        .state('focus', {
            url: '/{bookType:[2]{1,4}}',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@focus': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@focus': {
                    templateUrl: 'tpls/manager-focus.html'
                }
            }
        })
        .state('record', {
            url: '/{bookType:[3]{1,4}}',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@record': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@record': {
                    templateUrl: 'tpls/manager-record.html'
                }
            }
        })
        .state('data', {
            url: '/{bookType:[4]{1,4}}',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@data': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@data': {
                    templateUrl: 'tpls/manager-data.html'
                }
            }
        })
        .state('focus-buy', {
            url: '/{bookType:[5]{1,4}}',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@focus-buy': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@focus-buy': {
                    templateUrl: 'tpls/manager-focus-buy.html'
                }
            }
        })
        .state('focus-sell', {
            url: '/{bookType:[6]{1,4}}',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@focus-sell': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@focus-sell': {
                    templateUrl: 'tpls/manager-focus-sell.html'
                }
            }
        })
        .state('focus-rent', {
            url: '/{bookType:[7]{1,4}}',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@focus-rent': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@focus-rent': {
                    templateUrl: 'tpls/manager-focus-rent.html'
                }
            }
        })
        .state('index-all', {
            url: '/{bookType:[8]{1,4}}',
            views: { //注意这里的写法，当 一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@index-all': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@index-all': {
                    templateUrl: 'tpls/manager-index-all.html'
                }
            }
        })
        .state('index-up', {
            url: '/{bookType:[9]{1,4}}',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@index-up': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@index-up': {
                    templateUrl: 'tpls/manager-index-up.html'
                }
            }
        })
        .state('index-down', {
            url: '/{bookType:[10]{1,4}}',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@index-down': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@index-down': {
                    templateUrl: 'tpls/manager-index-down.html'
                }
            }
        })
        .state('data-rent', {
            url: '/data-rent',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@data-rent': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@data-rent': {
                    templateUrl: 'tpls/manager-data-rent.html'
                }
            }
        })
        .state('data-sell', {
            url: '/data-sell',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@data-sell': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@data-sell': {
                    templateUrl: 'tpls/manager-data-sell.html'
                }
            }
        })
        .state('data-nick', {
            url: '/data-nick',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@data-nick': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@data-nick': {
                    templateUrl: 'tpls/manager-data-nick.html'
                }
            }
        })
        .state('data-pwd', {
            url: '/data-pwd',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@data-pwd': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@data-pwd': {
                    templateUrl: 'tpls/manager-data-password.html'
                }
            }
        })
        .state('focus-rent-out', {
            url: '/focus-rent-out',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@focus-rent-out': {
                    templateUrl: 'tpls/bookType.html'
                },
                'bookgrid@focus-rent-out': {
                    templateUrl: 'tpls/manager-focus.html'
                }
            }
        })
        .state('addbook', {
            url: '/addbook',
            templateUrl: 'tpls/addBookForm.html'
        })
        .state('bookdetail', {
            url: '/bookdetail/:bookId', //注意这里在路由中传参数的方式
            templateUrl: 'tpls/bookDetail.html'
        })
});
