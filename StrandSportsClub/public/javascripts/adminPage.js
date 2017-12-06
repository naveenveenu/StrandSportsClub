(function() {
    var app = angular.module('adminPage', []);

    app.config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('adminPage', {
            url: '/adminPage',
            controller: 'adminPageCtrl',
            templateUrl: '/views/adminPage.html'
        });
    }]);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    app.controller('adminPageCtrl', ['$scope', '$http', function($scope, $http) {
      $scope.name='';

      //For ng-if
      $scope.editName='';
      $scope.editableIndex='';
      $scope.adminBook = [];


      // to fetch from db
      fetchInfo = function(){
        $http.get('/admin/getSport', {}).then(function(res){
          $scope.adminBook = res.data;
        },
        function(err){
          console.log(err);
        });
      };

      fetchInfo();
      $scope.reset = function(){
          $scope.name=""
      }

      $scope.submit = function(name) {
        console.log(name);
        var sports = {};
        sports['name'] = name;
        console.log(sports['name']);
        $http.post('/admin/addSport', sports).then(function(res){
            console.log(res);
            fetchInfo();
            //$scope.reset();
        },function(err){
            console.log(err);
        });
      };

      $scope.saveName = function(sportName){
        console.log(sportName);
        $http.post('/admin/updateSport', {"userId" : sportName.userId}, {'name': sportName}).then(function(res){
          console.log(res);
          fetchInfo();
        },function(err){
            console.log(err);
        });
        $scope.editName = false;
        $scope.editableIndex = -1;
      };


      $scope.delete = function(userId){
        $http.post('/admin/deleteSport', {"userId" : userId}).then(function(res){
          console.log(res);
          fetchInfo();
        },function(err){
          console.log(err);
        });
      }

      $scope.setEditable = function(index){
        $scope.editName = true;
        $scope.editableIndex = index;
      };




  }]);
})();
