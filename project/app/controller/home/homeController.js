(function() {
    'use strict';
    app.controller('homeController', ['$scope', '$routeParams', '$route', function($scope, $routeParams, $route) {
        window.AdobeEdgeCounter++;

        if (window.AdobeEdgeCounter > 1){
            window.AdobeEdgeCounter = 0;
            window.location.reload(true);
        }
        var $appScope = getScope('appCtrl');
        $appScope.template.closeMenu();
        $appScope.app.pageClass = 'page-home';
        var $bodyScope = angular.element(document.getElementsByTagName('body')[0]).scope();
        $bodyScope.template.headerStyle = 'normal';

        this.name = "homeController";
        this.params = $routeParams;
        var $slider = $('.slider');
        $slider.slick({
            infinite: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 6000
        });
        angular.element(document).ready(function () {
            setTimeout(function(){
                AdobeEdge.loadComposition('public/edge/spheres', 'EDGE-1636752', {});
                AdobeEdge.loadComposition('public/edge/Parymide', 'EDGE-1946368', {});
                AdobeEdge.loadComposition('public/edge/stairway', 'EDGE-9038984', {});
                AdobeEdge.loadComposition('public/edge/cofee_commitee', 'EDGE-3425786', {});
            }, 1000);
        });


    }])
})();