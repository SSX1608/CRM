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