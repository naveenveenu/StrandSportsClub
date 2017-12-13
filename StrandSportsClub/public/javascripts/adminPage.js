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

        $scope.player_name = '';
        //For ng-if
        $scope.editName = '';
        $scope.editableIndex = '';
        $scope.adminBook = [];

        // to fetch from db
        fetchPlayer = function() {
          $http.get('/admin/getPlayer', {}).then(function(res) {
            $scope.adminBook = res.data;
          },
          function(err) {
            console.log(err);
          });
        };

        fetchPlayer();
        $scope.resetPlayer = function() {
            $scope.player_name = "";
        };
        //submit specific to player names
        $scope.submitPlayer = function(name) {
            console.log(name);
            var players = {};
            players['name'] = name;
            console.log(players['name']);
            $http.post('/admin/addPlayer', players).then(function(res) {
                console.log(res);
                fetchPlayer();
                $scope.resetPlayer();
            }, function(err) {
                console.log(err);
            });
        };

        $scope.savePlayerName = function(index) {
            $http.post('/admin/updatePlayer', { 'players': $scope.adminBook[index] }).then(function(res) {
                console.log(res);
                fetchPlayer();
            }, function(err) {
                console.log(err);
            });
            $scope.editName = false;
            $scope.editableIndex = -1;
        };


        $scope.deletePlayer = function(userId) {
            $http.post('/admin/deletePlayer', { "userId": userId }).then(function(res) {
                console.log(res);
                fetchPlayer();
            }, function(err) {
                console.log(err);
            });
        }

        $scope.setEditable = function(index) {
            $scope.editName = true;
            $scope.editableIndex = index;
        };
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
        $scope.team_name = '';
        //For ng-if
        $scope.editName = '';
        $scope.editableIndex = '';
        $scope.teamBook = [];

        // to fetch from db
        fetchTeam = function() {
          $http.get('/admin/getTeam', {}).then(function(res) {
            $scope.teamBook = res.data;
          },
          function(err) {
            console.log(err);
          });
        };

        fetchTeam();
        $scope.resetTeam = function() {
            $scope.team_name = "";
        };
        // specific to team names...
        $scope.submitTeam = function(name) {
            console.log(name);
            var teams = {};
            teams['name'] = name;
            console.log(teams['name']);
            $http.post('/admin/addTeam', teams).then(function(res) {
                console.log(res);
                fetchTeam();
                $scope.resetTeam();
            }, function(err) {
                console.log(err);
            });
        };

        $scope.saveTeamName = function(index) {
            $http.post('/admin/updateTeam', { 'teams': $scope.teamBook[index] }).then(function(res) {
                console.log(res);
                fetchTeam();
            }, function(err) {
                console.log(err);
            });
            $scope.editName = false;
            $scope.editableIndex = -1;
        };


        $scope.deleteTeam = function(userId) {
            $http.post('/admin/deleteTeam', { "userId": userId }).then(function(res) {
                console.log(res);
                fetchTeam();
            }, function(err) {
                console.log(err);
            });
        }

        $scope.setEditable = function(index) {
            $scope.editName = true;
            $scope.editableIndex = index;
        };
//+++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++



    }]);
})();
