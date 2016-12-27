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