(function() {
    var app = angular.module('adminPage', []);

    app.config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('adminPage', {
            url: '/adminPage',
            controller: 'adminPageCtrl',
            templateUrl: '/views/adminPage.html'
        });
    }]);


    app.controller('adminPageCtrl', ['$scope', '$http', function($scope, $http) {
        // $scope.phoneNumber = 9964488889;
        $scope.teamName = '';

        //For ng-if
        $scope.editTeamName = '';
        $scope.editableIndex = '';
        $scope.teamsBook = [];

        // to fetch from db
        fetchTeams = function() {
            $http.get('/addTeam/getTeams', {}).then(function(res) {
                    $scope.teamsBook = res.data;
                },
                function(err) {
                    console.log(err);
                });
        };

        fetchTeams();

        $scope.submit = function() {
            var teams = {};
            teams['teamName'] = $scope.teamName;
            // $scope.addressBook.push(address); //without backend
            $http.post('/addTeam/insertTeam', teams).then(function(res) {
                console.log(res);
                fetchTeams();
            }, function(err) {
                console.log(err);
            });
            $scope.teamName = '';
        };

        $scope.delete = function(userId) {
            // $scope.addressBook.push(address); //without backend
            $http.post('/addTeam/deleteTeam', { "userId": userId }).then(function(res) {
                console.log(res);
                fetchTeams();
            }, function(err) {
                console.log(err);
            });

            // var index = $scope.addressBook.findIndex(i => (i.name === name && i.phone === phone));
            // console.log("index >>>>" +index);
            // if(index > -1){
            //   $scope.addressBook.splice(index, 1);
            // };
        };

        $scope.setEditable = function(index) {
            $scope.editTeamName = true;
            $scope.editableIndex = index;
        };

        $scope.saveName = function(index) {
            $http.post('/addTeam/updateTeam', { 'teams': $scope.teamsBook[index] }).then(function(res) {
                console.log(res);
                fetchTeams();
            }, function(err) {
                console.log(err);
            });
            $scope.editTeamName = false;
            $scope.editableIndex = -1;
        };

        // $scope.setEditDialog = function(index){
        //   $scope.editPhone = true;
        //   $scope.editableIndex = index;
        // };

    }]);
})();














//         app.controller('adminPageCtrl', ['$scope', function($scope) {
//                 $scope.teamName = '';
//                 $scope.teamsBook = [];

//                 // to fetch from db
//                 fetchContacts = function() {
//                     $http.get('/addTeam/getTeams', {}).then(function(res) {
//                             $scope.teamsBook = res.data;
//                         },
//                         function(err) {
//                             console.log(err);
//                         });
//                 };

//                 fetchContacts();


//                 $scope.submit = function() {
//                     var teams = {};
//                     teams['teamName'] = $scope.teamName;
//                     // $scope.addressBook.push(address); //without backend
//                     $http.post('/teams/addTeam', teams).then(function(res) {
//                         console.log(res);
//                         fetchContacts();
//                     }, function(err) {
//                         console.log(err);
//                     });
//                     $scope.teamName = '';
//                 };

//                 $scope.setEditable = function(index) {
//                     $scope.editName = true;
//                     $scope.editableIndex = index;
//                 };

//                 $scope.saveName = function(index) {
//                     $http.post('/teams/updateTeams', { 'teams': $scope.teamsBook[index] }).then(function(res) {
//                         console.log(res);
//                         fetchContacts();
//                     }, function(err) {
//                         console.log(err);
//                     });
//                     $scope.editName = false;
//                     $scope.editableIndex = -1;
//                 };

//                 $scope.delete = function(userId) {
//                     // $scope.addressBook.push(address); //without backend
//                     $http.post('/contact/deleteContact', { "userId": userId }).then(function(res) {
//                         console.log(res);
//                         fetchContacts();
//                     }, function(err) {
//                         console.log(err);
//                     });


//     }]);
// })();