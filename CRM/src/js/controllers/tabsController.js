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