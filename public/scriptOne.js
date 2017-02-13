 
  	var apphook = angular.module('myapp',  ['ngRoute']);

	
apphook.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) { 

	//$locationProvider.html5Mode(true);
	console.log("Inside config() . . . . ");
	$routeProvider
		.when('/', { 
			templateUrl : 'pages/home.html'  , controller : 'mainController'
		})
		.when('/about', {
			templateUrl : 'pages/about.html'  , controller : 'aboutController'
		})
		.when('/contact', {
			templateUrl : 'pages/contact.html' , controller : 'contactController'
		})	
		.when('/404', {templateUrl : 'pages/404.html'}); //how to test?

		// $routeProvider.otherwise( {templateUrl : 'pages/404.html'} );


}]);

 	//angular controller
 	apphook.controller('myController', ['$scope', '$location', 'myOwnService', function($scope, $location, myOwnService){
 		console.log("Entered in mycontroller . . . . " + $location.absUrl());

 		$scope.message = "All come and see the angular View";
 		
 		$scope.getfullName  = function(){
	 		var fn = document.getElementById('fname').value 
	 		var ln = document.getElementById('lname').value 
	 		console.log("fn=" + fn + " ln=" + ln);
	 		$scope.fullname = fn + ' ' + ln;
	 		$scope.getHello($scope.fullname); //this is a critical line

	 	};


	 	$scope.getHello = function(fullname){
	 		$scope.HelloUser = myOwnService.sayHello(fullname);
	 	};
	 	$scope.getBye = function(fullname){
	 		$scope.ByeUser = myOwnService.sayBye(fullname);
	 	}

 		
 	}]);

	//3 more controllers
 	apphook.controller('mainController', ['$scope', function($scope){
 		console.log("Inside main controller");
 		$scope.message = "MainController in Home page";
 	}])
 	.controller('aboutController', ['$scope', function($scope){
 		console.log("Inside about controller");
 		$scope.message = "AboutController in About page";
 	}])
 	.controller('contactController', ['$scope', function($scope){
 		console.log("Inside contact controller");
 		$scope.message = "contactController in Contact page";
 		
 	}]);


 	//angular service
 	apphook.factory('myOwnService', ['$window', function($window){
 		return {
 			sayHello: function(person) {
 				console.log("person " + person);
 				$window.document.getElementById("showsHello").style.display = "block";
 				return "service: Hi " + person;
 			 },
 			
 			 sayBye: function(person) {
 				//$window.location.href = "http://google.com";
 				$window.document.getElementById("showsHello").style.display = "none";
 				return "service: Bye " + person;
 				
 			 }
 		};
 	}])


