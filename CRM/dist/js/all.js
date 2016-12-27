/**
 * Created by qingyun on 16/11/30.
 */
angular.module('crmApp',['ionic','crmApp.login','crmApp.tabs','crmApp.customerVisitController','crmApp.customerManage','crmApp.reportQuery','crmApp.personal']).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state("login",{
        url:"/login",
        // abstract:true,
        templateUrl:"login.html",
        controller:'loginController'
    }).state("tabs",{
        url:"/tabs",
        // abstract:true,
        templateUrl:"tabs.html",
        controller:'tabsController'

    });
    $urlRouterProvider.otherwise('/login');
}]);
/**
 * Created by qingyun on 16/11/30.
 */
angular.module('crmApp.customerManage',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.customerManage',{
        url:'/customerManage',
        views:{
            'tabs-customerManage':{
                templateUrl:'customerManage.html',
                controller:'customerManageController'
            }
        }
    });
}]).controller('customerManageController',['$scope',function ($scope) {

}]);
/**
 * Created by qingyun on 16/11/30.
 */
angular.module('crmApp.customerVisitController',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.customerVisit',{
        url:'/customerVisit',
        views:{
            'tabs-customerVisit':{
                templateUrl:'customerVisit.html',
                controller:'customerVisitController'
            }
        }
    });
}]).controller('customerVisitController',['$scope',function ($scope) {

}]);
/**
 * Created by Administrator on 2016/12/26.
 */
angular.module('crmApp.login',[]).controller('loginController',['$scope','$location','$ionicViewSwitcher','$ionicPopup','$state',function ($scope,$location,$ionicViewSwitcher,$ionicPopup,$state) {
    $scope.$on('$stateChangeSuccess',function (evt,current,previous) {
        var update_wx_title = function(title) {
            var body = document.getElementsByTagName('body')[0];
            document.title = title;
            var iframe = document.createElement("iframe");
            iframe.setAttribute("src", "../empty.png");
            iframe.addEventListener('load', function() {
                setTimeout(function() {
                    // iframe.removeEventListener('load');
                    document.body.removeChild(iframe);
                });
            });
            document.body.appendChild(iframe);
        };
        switch (current.url){
            case '/login':
                update_wx_title("登录");
                break;

        }
    });

    $scope.loginPage={
        login:login,
        makeCall:makeCall
    };

    function login() {
    $state.go('tabs');
    // $location.path('tabs/customerVisit');
    // $ionicViewSwitcher.nextDirection("forward");
    }
    function makeCall() {
        var myPopup = $ionicPopup.show({
            cssClass:'myOrder',
            template:'您确认要打服务电话吗?',
            scope: $scope,
            buttons: [
                { text: '取消',
                    type: ''
                },
                {
                    text: '确定',
                    type: '',
                    onTap: function(e) {
                       console.log('调用电话功能！');
                    }
                }
            ]
        });
    }
}]);
/**
 * Created by qingyun on 16/11/30.
 */
angular.module('crmApp.personal',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.personal',{
        url:'/personal',
        views:{
            'tabs-personal':{
                templateUrl:'personal.html',
                controller:'personalController'
            }
        }
    });
}]).controller('personalController',['$scope',function ($scope) {

}]);
/**
 * Created by qingyun on 16/11/30.
 */
angular.module('crmApp.reportQuery',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.reportQuery',{
        url:'/reportQuery',
        views:{
            'tabs-reportQuery':{
                templateUrl:'reportQuery.html',
                controller:'reportQueryController'
            }
        }
    });
}]).controller('reportQueryController',['$scope',function ($scope) {

}]);
/**
 * Created by qingyun on 16/11/30.
 */
angular.module('crmApp.tabs',[]).controller('tabsController',['$scope',function ($scope) {
    $scope.$on('$stateChangeSuccess',function (evt,current,previous) {
        var update_wx_title = function(title) {
            var body = document.getElementsByTagName('body')[0];
            document.title = title;
            var iframe = document.createElement("iframe");
            iframe.setAttribute("src", "../empty.png");
            iframe.addEventListener('load', function() {
                setTimeout(function() {
                    // iframe.removeEventListener('load');
                    document.body.removeChild(iframe);
                });
            });
            document.body.appendChild(iframe);
        };
        switch (current.url){
            case '/customerVisit':
                update_wx_title("客户拜访");
                break;
            case '/customerManage':
                update_wx_title("客户管理");
                break;
            case '/reportQuery':
                update_wx_title("报表查询");
                break;
            case '/personal':
                update_wx_title("个人中心");
                break;
        }


    });
}]);