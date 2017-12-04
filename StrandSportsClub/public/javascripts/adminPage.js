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
      $scope.team = '';
    //For ng-if
      $scope.edit_team ='';
      $scope.editable_index='';
      $scope.team_book = [];

    // to fetch from db
    fetchTeams = function(){
      $http.get('/team/getTeams', {}).then(function(res){
        $scope.team_book = res.data;
      },
      function(err){
        console.log(err);
      });
    };

    fetchTeams();
    $scope.reset = function() {
      $scope.team ='';
    };

    $scope.submit = function(team){
      console.log(team);
      var teams = {};
      teams['name'] = team;
      $http.post('/team/addTeam', teams).then(function(res){
          console.log(res);
          fetchTeams();
          $scope.reset();
      },function(err){
          console.log(err);
      });
    };

    $scope.delete = function(userId){
      // $scope.addressBook.push(address); //without backend
      $http.post('/team/deleteTeam', {"userId" : userId}).then(function(res){
          console.log(res);
          fetchTeams();
      },function(err){
          console.log(err);
      });

      // var index = $scope.addressBook.findIndex(i => (i.name === name && i.phone === phone));
      // console.log("index >>>>" +index);
      // if(index > -1){
      //   $scope.addressBook.splice(index, 1);
      // };
    };

    $scope.saveName = function(team){
      $http.post('/team/updateTeams', {'team': team}).then(function(res){
        console.log(res);
        fetchTeams();
      },function(err){
          console.log(err);
      });
      $scope.edit_team = false;
      $scope.editableI_index = -1;
    };


  }]);
})();
