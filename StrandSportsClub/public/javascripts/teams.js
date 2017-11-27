(function(){
	var app = angular.module('teams', []);

	app.config(["$stateProvider", function($stateProvider){
		$stateProvider.state('teams', {
			url: "/teams",
			controller: "teamsCtrl",
			templateUrl: "/views/teams.html"   
		});
	}]);

	app.controller('teamsCtrl', ["$scope", function($scope){

	}]);

})();