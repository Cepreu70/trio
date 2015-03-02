var app;
(function(angular) {

    'use strict';

    app = angular.module('ngApp', ['ngRoute', 'ngAnimate'])
        .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'app/view/home/home.html',
                        controller: 'homeController'
                    })
                    .when('/gallery', {
                        templateUrl: 'app/view/gallery/gallery.html',
                        controller: 'galleryController'
                    })
                    .when('/portfolio', {
                        templateUrl: 'app/view/portfolio/portfolio.html',
                        controller: 'portfolioController'
                    });
                $locationProvider.html5Mode(true);
            }])

        .controller('appCtrl', ['$route', '$routeParams', '$location',
            function($scope, $route, $routeParams, $location) {
                $scope.pageClass = 'page-home';
                $scope.firstLaunch = true;
                this.$route = $route;
                this.$location = $location;
                this.$routeParams = $routeParams;
            }])

})(window.angular);