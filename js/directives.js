angular.module("directives", [])
	.controller('mainCtrl', [ '$scope', '$sce', 'route', function($scope, $sce, $route){
		$scope.$route = $route;
		

		$scope.showSection = function(section) {
			console.log('here');
			$scope.portfolio = false;
			if(section == "portfolio"){
				$scope.portfolio = true;
				console.log('nice!')
			}
		}
		
	}])
	
	
	.controller('digitalArtCtrl', ['$scope', '$sce',function($scope, $sce, $routeParams){
		$scope.imageUrls= [
						'assets/IMG_0196.JPG',
						'assets/IMG_0225.JPG'
					  ]
		$scope.name = "digitalArtCtrl";
		$scope.params = $routeParams
	}])
	
	.config(function($routeProvider, $locationProvider) {
	  $routeProvider
	   .when('/Book/:bookId', {
	    templateUrl: 'book.html',
	    controller: 'BookController',
	    resolve: {
	      // I will cause a 1 second delay
	      delay: function($q, $timeout) {
	        var delay = $q.defer();
	        $timeout(delay.resolve, 1000);
	        return delay.promise;
	      }
	    }
	  })
	  .when('/digitalArt', {
	    templateUrl: 'views/digitalArt.html',
	    controller: 'digitalArtCtrl'
	  });
	
	});
/*
	.directive("aaDigitalart", function()
	{
		return {
			restrict: "AE",
			scope: { },
			templateUrl: "views/digitalArt.html",
			controller: "digitalArtCtrl"
		};
	})
	
*/
	
	
	
	
	
	
	
	
	
	
	

	.controller('gameboyCtrl', ['$scope', '$sce',function($scope, $sce){
		$scope.parts= [
						'back',
						'screen',
						'subscreen',
						'gameboyText',
						'joystickBack',
						'joystickH',
						'joystickV',
						'aButton',
						'bButton',
						'start',
						'select'
					  ]
		var html = ''	
		var delay=10000;
		  
		for(var i = 0; i< $scope.parts.length;i++){
			(function(index) {
				setTimeout(function(){
						html ='<div id="'+ $scope.parts[index] +'"></div>'
						addElement(html);
				}, 200 * i);
			})(i);
		}
		function addElement(html) {
			console.log(html)
		    $('#append').append(html);
		}
		
		$scope.click = function(button){
			$scope.buttonString += " + " + button;
		}
	}])
	.directive("aaGameboy", function()
	{
		return {
			restrict: "AE",
			scope: { },
			templateUrl: "views/gameboy.html",
			controller: "gameboyCtrl"
		};
	});