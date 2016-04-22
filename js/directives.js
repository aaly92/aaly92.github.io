angular.module("directives", ['ngRoute'])
	.controller('mainCtrl', [ '$scope', '$sce',  function($scope, $sce){
		console.log('main');	

	}])	

	.controller('digitalArtCtrl', ['$scope', '$sce',function($scope, $sce){
		$scope.imageUrls= [
						'assets/IMG_0196.JPG',
						'assets/IMG_0225.JPG'
					  ]
	}])

	.controller('aboutSectionsCtrl', ['$scope', '$sce',function($scope, $sce){	
		console.log('about');	
		$('html, body').animate({
		    scrollTop: $("#about").offset().top
		}, 1000);
	}])

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
	})

	
	
	.config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/digitalArt',{controller:"digitalArtCtrl", templateUrl:'views/digitalArt.html'})
                .when('/',{controller:"mainCtrl", templateUrl:'views/mainSections.html'})
                .when('/about',{controller:"aboutSectionsCtrl", templateUrl:'views/mainSections.html'})
                .otherwise({redirectTo:'/'});
                ;
     }]);
	
	