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