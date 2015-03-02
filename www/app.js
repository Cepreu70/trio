var getScope = function(nameCtrl) {
    return angular.element(document.getElementById(nameCtrl)).scope();
}, app;

!function(angular) {
    "use strict";
    app = angular.module("ngApp", [ "ngRoute", "ngAnimate" ]).config([ "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
        $routeProvider.when("/", {
            templateUrl: "app/view/home/home.html",
            controller: "homeController"
        }).when("/gallery", {
            templateUrl: "app/view/gallery/gallery.html",
            controller: "galleryController"
        }).when("/portfolio", {
            templateUrl: "app/view/portfolio/portfolio.html",
            controller: "portfolioController"
        }), $locationProvider.html5Mode(!0);
    } ]).controller("appCtrl", [ "$route", "$routeParams", "$location", function($scope, $route, $routeParams, $location) {
        $scope.pageClass = "page-home", $scope.firstLaunch = !0, this.$route = $route, this.$location = $location, 
        this.$routeParams = $routeParams;
    } ]);
}(window.angular), function() {
    "use strict";
    app.controller("galleryController", [ "$routeParams", function($scope, $routeParams) {
        getScope("appCtrl").app.pageClass = "page-gallery", this.name = "galleryController", 
        this.params = $routeParams;
    } ]);
}(), function() {
    "use strict";
    app.controller("homeController", [ "$routeParams", function($scope, $routeParams) {
        getScope("appCtrl").app.pageClass = "page-home", this.name = "homeController", this.params = $routeParams, 
        $(document).ready(function() {
            $(".parallax").parallax();
        });
    } ]);
}(), function() {
    "use strict";
    app.controller("portfolioController", [ "$routeParams", function($scope, $routeParams) {
        getScope("appCtrl").app.pageClass = "page-portfolio", this.name = "portfolioController", 
        this.params = $routeParams;
    } ]);
}();