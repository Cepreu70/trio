var appTrio = angular.module('app', ['ngRoute', 'ngAnimate']);
(function(){

// define our application and pull in ngRoute and ngAnimate

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
    appTrio.config(function($routeProvider, $locationProvider) {

        $routeProvider

            // home page
            .when('/', {
                templateUrl: 'app/view/home/home.html',
                controller: 'homeController',
                animation: 'first'
            })

            // about page
            .when('/portfolio', {
                templateUrl: 'app/view/portfolio/portfolio.html',
                controller: 'portfolioController',
                animation: 'second'
            })

            // contact page
            .when('/gallery', {
                templateUrl: 'app/view/gallery/gallery.html',
                controller: 'galleryController',
                animation: 'third'
            });

    });

})();