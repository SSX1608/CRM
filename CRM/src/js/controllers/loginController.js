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