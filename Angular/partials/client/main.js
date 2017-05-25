var app = angular.module("myApp", ["ngRoute"]);

//Routes
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