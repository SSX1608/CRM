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