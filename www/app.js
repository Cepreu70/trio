var getScope = function(nameCtrl) {
    return angular.element(document.getElementById(nameCtrl)).scope();
}, app;

!function() {
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
        $scope.pageClass = "page-home", this.$route = $route, this.$location = $location, 
        this.$routeParams = $routeParams, this.init = function() {
            {
                var $header = $(".header");
                $header.before($header.clone().addClass("sticky z-depth-1"));
            }
            $(window).on("scroll", function() {
                var fromTop = $(window).scrollTop();
                $("body").toggleClass("down", fromTop > 100);
            });
        }, this.init();
    } ]).filter("maxCount", [ function() {
        return function(obj, limit) {
            var keys = Object.keys(obj);
            if (keys.length < 1) return [];
            var ret = new Object(), count = 0;
            return angular.forEach(keys, function(key) {
                return count >= limit ? !1 : (ret[key] = obj[key], void count++);
            }), ret;
        };
    } ]).filter("shuffle", function() {
        var shuffledArr = [], shuffledLength = 0;
        return function(arr) {
            var o = arr.slice(0, arr.length);
            if (shuffledLength == arr.length) return shuffledArr;
            for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], 
            o[j] = x) ;
            return shuffledArr = o, shuffledLength = o.length, o;
        };
    });
}(), function() {
    "use strict";
    app.controller("galleryController", [ "$routeParams", function($scope, $routeParams) {
        this.init = function() {
            getScope("appCtrl").app.pageClass = "page-gallery", window.scrollTo(0, 0);
        }, this.previews = [ {
            name: "САЙТ SMART-ASTANA",
            description: "Типо описание для сайта будет тут, пока так пусть будет",
            imgURL: "img/gallery/sa-preview.jpg",
            pageUrl: "portfolio/smart-astana"
        }, {
            name: "САЙТ АССАМБЛЕИ НАРОДОВ КАЗАХСТАНА",
            description: 'Плавно-мобильное голосовое поле, в том числе, просветляет эффект "вау-вау". Гипнотический рифф диссонирует диссонансный флажолет. Септаккорд регрессийно использует динамический эллипсис.',
            imgURL: "img/gallery/assembly-preview.jpg",
            pageUrl: "portfolio/assembly"
        }, {
            name: "САЙТ SOLAR-ASTANA",
            description: 'Плавно-мобильное голосовое поле, в том числе, просветляет эффект "вау-вау". Гипнотический рифф диссонирует диссонансный флажолет. Септаккорд регрессийно использует динамический эллипсис.',
            imgURL: "img/gallery/solar-preview.jpg",
            pageUrl: "portfolio/solar"
        }, {
            name: "ПРИЛОЖЕНИЕ SALEM",
            description: 'Плавно-мобильное голосовое поле, в том числе, просветляет эффект "вау-вау". Гипнотический рифф диссонирует диссонансный флажолет. Септаккорд регрессийно использует динамический эллипсис.',
            imgURL: "img/gallery/salem-preview.jpg",
            pageUrl: "portfolio/salem"
        }, {
            name: "САЙТ БРК-ЛИЗИНГ",
            description: 'Плавно-мобильное голосовое поле, в том числе, просветляет эффект "вау-вау". Гипнотический рифф диссонирует диссонансный флажолет. Септаккорд регрессийно использует динамический эллипсис.',
            imgURL: "img/gallery/brk-preview.jpg",
            pageUrl: "portfolio/brk"
        }, {
            name: "САЙТ ASTANA INNOVATIONS",
            description: 'Плавно-мобильное голосовое поле, в том числе, просветляет эффект "вау-вау". Гипнотический рифф диссонирует диссонансный флажолет. Септаккорд регрессийно использует динамический эллипсис.',
            imgURL: "img/gallery/ain-preview.jpg",
            pageUrl: "portfolio/ain"
        }, {
            name: "СЕРВИС SMIPE",
            description: 'Плавно-мобильное голосовое поле, в том числе, просветляет эффект "вау-вау". Гипнотический рифф диссонирует диссонансный флажолет. Септаккорд регрессийно использует динамический эллипсис.',
            imgURL: "img/gallery/smipe-preview.jpg",
            pageUrl: "portfolio/smipe"
        }, {
            name: "САЙТ G-GLOBAL",
            description: 'Плавно-мобильное голосовое поле, в том числе, просветляет эффект "вау-вау". Гипнотический рифф диссонирует диссонансный флажолет. Септаккорд регрессийно использует динамический эллипсис.',
            imgURL: "img/gallery/gGlobal-preview.jpg",
            pageUrl: "portfolio/gGlobal"
        } ], this.random = function() {
            return .5 - Math.random();
        }, this.name = "galleryController", this.params = $routeParams;
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