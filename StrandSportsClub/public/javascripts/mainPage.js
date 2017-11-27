(function() {
    var app = angular.module('mainPage', []);

    app.config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('mainPage', {
            url: '/mainPage',
            controller: 'mainPageCtrl',
            templateUrl: '/views/mainPage.html'
        });
    }]);

    app.controller('mainPageCtrl', ['$scope', function($scope) {

    }]);


})();