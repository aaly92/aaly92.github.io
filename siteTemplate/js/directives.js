angular.module("directives", [])

	.controller('navCtrl', [ '$scope', '$sce',  function($scope, $sce){

	}])
	.directive("aaNav", function()
	{
		return {
			restrict: "AE",
			scope: { 
				menuItems: "=",
				logoText: "@"
			},
			templateUrl: "views/nav.html",
			controller: "navCtrl"
		};
	})


	.controller('bannerCtrl', [ '$scope', '$sce',  function($scope, $sce){

	}])
	.directive("aaBanner", function()
	{
		return {
			restrict: "AE",
			scope: { 
				backgroundUrl : "@",
				bannerTextHeader : "@",
				bannerTextSubheader : "@"
			},
			templateUrl: "views/banner.html",
			controller: "bannerCtrl"
		};
	})
	
	.controller('aboutCtrl', [ '$scope', '$sce',  function($scope, $sce){

	}])
	.directive("aaAbout", function()
	{
		return {
			restrict: "AE",
			scope: { 
				header : "@",
				paragraph: "@",
				imgs: "=",
			},
			templateUrl: "views/about.html",
			controller: "aboutCtrl"
		};
	})
	
	.controller('teamCtrl', [ '$scope', '$sce',  function($scope, $sce){

	}])
	
	.directive("aaTeam", function()
	{
		return {
			restrict: "AE",
			scope: { 
				profiles: "=",
			},
			templateUrl: "views/team.html",
			controller: "teamCtrl"
		};
	})
	
	
	.controller('hoverImageCtrl', [ '$scope', '$sce',  function($scope, $sce){

	}])
	.directive("aaHoverImage", function()
	{
		return {
			restrict: "AE",
			scope: { 
				hoverText : "@",
				imgUrl: "@"
			},
			templateUrl: "views/hoverImage.html",
			controller: "hoverImageCtrl"
		};
	})
	
	.controller('imageAndTextCtrl', [ '$scope', '$sce',  function($scope, $sce){
		
	}])
	.directive("aaImageAndText", function()
	{
		return {
			restrict: "AE",
			scope: { 
				header : "@",
				description: "@",
				imgUrl: "@"
			},
			templateUrl: "views/imageAndText.html",
			controller: "imageAndTextCtrl"
		};
	})

	.controller('footerSectionCtrl', [ '$scope', '$sce',  function($scope, $sce){
		$scope.showSubmenu=false;

		$scope.toggle = function() {
			$scope.showSubmenu = !$scope.showSubmenu;
		}
	}])
	.directive("aaFooterSection", function()
	{
		return {
			restrict: "AE",
			scope: { 
				sectionName:"@",
				menuItems:"="
			},
			templateUrl: "views/footerSection.html",
			controller: "footerSectionCtrl"
		};
	});


	