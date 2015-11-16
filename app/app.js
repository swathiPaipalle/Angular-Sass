var app = angular.module('tips', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   		when('/about', {
	      templateUrl: 'tips/about.html'
		}).

   		when('/beauty', {
	      templateUrl: 'tips/beauty.html'
		}).

		when('/cooking', {
		  templateUrl: 'tips/cooking.html'
		}).

		when('/health', {
		  templateUrl: 'tips/health.html'
		}).

		when('/', {
		  templateUrl: 'tips/home.html'
		}).
		otherwise({
	        redirectTo: '/'
      	});

}])

.directive('sideBar', function() {
    return {
        restrict: 'A',
        controller: 'SideBarController',
        templateUrl: 'tips/side-bar.html'
    };
})

.controller('SideBarController', function(){
	        
});
