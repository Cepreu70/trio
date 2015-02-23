var appTrio = angular.module("app", [ "ngRoute", "ngAnimate" ]);

!function() {
    appTrio.config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "app/view/home/home.html",
            controller: "homeController",
            animation: "first"
        }).when("/portfolio", {
            templateUrl: "app/view/portfolio/portfolio.html",
            controller: "portfolioController",
            animation: "second"
        }).when("/gallery", {
            templateUrl: "app/view/gallery/gallery.html",
            controller: "galleryController",
            animation: "third"
        });
    });
}(), function() {
    appTrio.controller("galleryController", function($scope) {
        $scope.pageClass = "page-gallery";
    });
}(), function() {
    appTrio.controller("homeController", function($scope) {
        $scope.pageClass = "page-home";
    });
}(), function() {
    appTrio.controller("portfolioController", function($scope) {
        $scope.pageClass = "page-portfolio";
    });
}();