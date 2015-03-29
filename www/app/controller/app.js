var app;
(function() {

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
                this.$route = $route;
                this.$location = $location;
                this.$routeParams = $routeParams;


                // Sticky menu
                this.init = function(){
                    $(window).on("scroll", function() {
                        var fromTop = $(window).scrollTop();
                        $("body").toggleClass("down", (fromTop > 100));
                    });
                };
                this.init();


            }])

        // filter for limit of maxCount object in repeat array
        .filter('maxCount', [function(){
            return function(obj, limit){
                var keys = Object.keys(obj);
                if(keys.length < 1){
                    return [];
                }

                var ret = new Object,
                    count = 0;
                angular.forEach(keys, function(key, arrayIndex){
                    if(count >= limit){
                        return false;
                    }
                    ret[key] = obj[key];
                    count++;
                });
                return ret;
            };
        }])

        // filter for randomize order elements in array for repeat
        .filter('shuffle', function() {
            var shuffledArr = [],
                shuffledLength = 0;
            return function(arr) {
                var o = arr.slice(0, arr.length);
                if (shuffledLength == arr.length) return shuffledArr;
                for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                shuffledArr = o;
                shuffledLength = o.length;
                return o;
            };
        });
})();