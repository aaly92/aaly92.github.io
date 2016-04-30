angular.module("directives", [])
	.directive("aaNav", function()
	{
		return {
			restrict: "AE",
			scope: { 
				menuItems: "=",
				logoText: "@"
			},
			templateUrl: "views/nav.html",
		};
	})
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
		};
	})
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
		};
	})
	.directive("aaServices", function()
	{
		return {
			restrict: "AE",
			scope: { 
				profiles: "=",
			},
			templateUrl: "views/services.html",
		};
	})
	.directive("aaImageAndTextOverlay", function()
	{
		return {
			restrict: "AE",
			scope: { 
				textOverlay : "@",
				imgUrl: "@"
			},
			templateUrl: "views/imageAndTextOverlay.html",
		};
	})
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
		};
	})
	.controller('footerSectionCtrl', [ '$scope', '$sce',  function($scope, $sce){
		$scope.showSubmenu=false;
		if ($(window).width() >= 768) {
			$scope.showSubmenu = true;
		}

		$( window ).resize(function() {
			if ($(window).width() >= 768) {
				$scope.showSubmenu = true;
			} else {
				$scope.showSubmenu = false;
			}
			$scope.$apply();

		});
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


	