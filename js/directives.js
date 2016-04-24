angular.module("directives", ['ngRoute'])
	.controller('mainCtrl', [ '$scope', '$sce',  function($scope, $sce){
		$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 300);
		        return false;
		      }
		    }
		  });
		});
		
		$('.navbar-collapse a').click(function (e) {
        	$('.navbar-collapse').collapse('toggle');
      	});
		$( "#nav" ).removeClass( "navWhite" );
		$( "#nav" ).addClass( "navTrans" );

		
		$(function () {
		    $(window).scroll(function () {
		        if ($(this).scrollTop() > 300) {
		            $('.arrow').fadeOut();
		        } else {
		            $('.arrow').fadeIn();
		        }
		    });
		});
	

	}])	

	.controller('digitalArtCtrl', ['$scope', '$sce',function($scope, $sce){
		$( "#nav" ).removeClass( "navTrans" );
		$( "#nav" ).addClass( "navWhite" );
		$scope.imageUrls= [
						'assets/art/001.png',
						'assets/art/002.png',
						'assets/art/003.png',
						'assets/art/004.png',
						'assets/art/005.png',
						'assets/art/006.png',
						'assets/art/007.png',
						'assets/art/008.png',
						'assets/art/009.png',
						'assets/art/010.png',
						'assets/art/011.png',
						'assets/art/012.png',
						'assets/art/016.png',
						'assets/art/017.png',
						'assets/art/018.png',
					  ]
		$scope.sketchUrls = [
						'assets/art/013.png',
						'assets/art/014.png',
						'assets/art/015.png'
		]
	}])
	
	.controller('projectsSectionCtrl', ['$scope', '$sce',function($scope, $sce){	
		$( "#nav" ).removeClass( "navTrans" );
		$( "#nav" ).addClass( "navWhite" );
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
                .when('/projects',{controller:"projectsSectionCtrl", templateUrl:'views/projects.html'})
                .when('/gameboy',{controller:"gameboyCtrl", templateUrl:"views/gameboy.html"})
                .otherwise({redirectTo:'/'});
                
     }]);
	
	