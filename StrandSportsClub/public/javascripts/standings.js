(function() {
    var app = angular.module('standings', []);

    app.config(["$stateProvider", function($stateProvider) {
        $stateProvider.state('standings', {
            url: "/standings",
            controller: "standingsCtrl",
            templateUrl: "/views/standings.html"
        });
    }]);

    app.controller('standingsCtrl', ["$scope", '$http', function($scope, $http) {
        $scope.team="";
        $scope.ties="";
        $scope.wins="";
        $scope.losses="";
        $scope.points="";

        fetchContacts= function(){
            $http.get('/addTeam/getTeams', {}).then(function(res) {
                $scope.addressBook = res.data;
            },
            function(err) {
                console.log(err);
            });
        };
        fetchContacts();


        $scope.submit = function(){
            var teams = {};
            teams['teamName'] = $scope.teamName;
            // address.phone = $scope.phone;
            // $scope.addressBook.push(address); //without backend
            $http.post('/contact/addContact', address).then(function(res){
                console.log(res);
                fetchContacts();
            },function(err){
            console.log(err);
        });
        $scope.teamName='';
        $scope.phone='';
    };


        
    }]);

})();