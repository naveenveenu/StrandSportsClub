(function(){
  var app = angular.module('fixtures', []);

  app.config(['$stateProvider', function($stateProvider){
    $stateProvider.state('fixtures', {
      url : '/fixtures',
      controller : 'fixturesCtrl',
      templateUrl : '/views/fixtures.html'
    });
  }]);

  app.controller('fixturesCtrl', ['$scope', function($scope){
  
  }]);


})();