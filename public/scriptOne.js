 
  	var apphook = angular.module('myapp',  {
 	  setup: function() {
 	    // setup for module name 
 	    console.log("Inside setup function . . .");
 	  },
 	  teardown: function() {
 	    //teardown for module name
 	    console.log("Inside teardown function . . .");
 	  }
 	});
 	
 	//angular controller
 	apphook.controller('myController', ['$scope', '$location', 'myOwnService', function($scope, $location, myOwnService){
 		console.log("Entered in mycontroller . . . . " + $location.absUrl());
 		
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


