var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
		.when("/users", {
			templateUrl: "static/partials/customize_users.html"
		})
		.when("/list", {
			templateUrl: "static/partials/user_list.html"
		})
		.otherwise({
			redirectTo: "/users"
		});
});

app.factory("userFactory", [function(){
	var factory = {};
	var users = [
		{firstName: "Stunna", lastName: "Greatest", lang: "Java"},
		{firstName: "Billy", lastName: "Madison", lang: "Ruby"},
	];

	//Passes the user list to controller
	factory.index = function(callback){
		callback(users);
	}

	factory.create = function(user){
		users.push(user);
	}

	factory.delete = function($index){
		users.splice($index, 1);
	}
	return factory;
}]);

app.controller("customController", ['$scope','userFactory', function($scope, userFactory){
	function setUsers(data){
		$scope.users = data;
		$scope.newUser = {};
	}

	$scope.users = [];

	//Retrieves user list
	userFactory.index(setUsers);

	$scope.create = function(){
		userFactory.create($scope.newUser);
		$scope.newUser = {}; //Resets form
	}

	$scope.delete = function($index){
		userFactory.delete($index);
	}
}]);

app.controller("userListController", ['$scope','userFactory', function($scope, userFactory){
	function setUsers(data){
		$scope.users = data;
	}

	$scope.users = [];

	userFactory.index(setUsers);
}]);