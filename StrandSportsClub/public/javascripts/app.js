(function(){
  var app = angular.module("sportsClub",['ui.router', 'mainPage', 'fixtures', 'standings', 'teams', 'adminPage']);

  app.controller('mainCtrl',['$scope', '$state', function($scope, $state){
    $state.go('mainPage');
  }]);
})();




// (function() {

//     var app = angular.module('sportsClub', []);

//     app.controller('mainCtrl', ['$scope', '$http', '$q', '$state', function($scope, $http, $q, $state) {
//         $scope.name = 'World';
//     }]);

//     app.controller('SecuredAppController', ['$scope', 'AuthService', 'user', 'mailUserMap', '$state', function($scope, AuthService, user, mailUserMap, $state) {
//         $scope.user = user;
//         AuthService.setUser(user);
//         $scope.mailUserMap = mailUserMap;
//         $scope.selectedMenu = 'dashboard';

//         $scope.logout = function() {
//             AuthService.logout().then(function() {
//                 $scope.user = null;
//                 $state.go('unsecured');
//             })
//         }


//         $scope.getNameFromMail = function(mail){
//           if($scope.mailUserMap[mail])
//             return $scope.mailUserMap[mail]
//           return mail;
//         };

//     }]);


//     app.config(['$stateProvider', function($stateProvider) {
//         $stateProvider.state('secured', {
//             abstract: true,
//             controller: 'SecuredAppController',
//             resolve: {
//                 user: function(AuthService, $state, $location) {
//                     return AuthService.fetchUser()
//                         .then(function(user) {
//                             return user;
//                         }, function(error) {
//                             $state.go('unsecured');
//                         })
//                 },
//                 mailUserMap: function(AuthService, $state, $location) {
//                     return AuthService.fetchMailUserMap()
//                         .then(function(map) {
//                             return map;
//                         }, function(error) {
//                             $state.go('unsecured');
//                         })
//                 },
//             },
//             templateUrl: 'views/secured-template.html'
//         })

//         var unsecuredTemplate = 'views/mainPage.html';
//         $stateProvider.state('unsecured', {
//             url: '/',
//             templateUrl: unsecuredTemplate
//         });
//     }]);

// })();
