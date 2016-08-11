(function () {
    "use strict";
    angular.module('chatApp').config(function ($routeProvider,$locationProvider) {
        $routeProvider.when('/', {
            templateUrl: '/template/pages/chat.html',
            controler: 'ChatCtrl'
        }).when('/chat', {
            templateUrl: '/template/pages/chat.html',
            controler:'ChatCtrl'
        });
    });
})();
