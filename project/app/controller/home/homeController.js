(function() {
    'use strict';
    app.controller('homeController', ['$routeParams', function($scope, $routeParams) {
        var $appScope = getScope('appCtrl');
        $appScope.template.closeMenu();
        $appScope.app.pageClass = 'page-home';

        var $bodyScope = angular.element(document.getElementsByTagName('body')[0]).scope();
        $bodyScope.template.headerStyle = 'normal';

        this.name = "homeController";
        this.params = $routeParams;

        $('.slider').slick({
            infinite: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 6000
        });

        AdobeEdge.loadComposition('public/edge/Parymide', 'EDGE-1946368', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "914px",
            height: "720px"
        }, {dom: [ ]}, {dom: [ ]});

        //AdobeEdge.loadComposition('public/edge/cofee_commitee', 'EDGE-3425786', {
        //    scaleToFit: "none",
        //    centerStage: "none",
        //    minW: "0",
        //    maxW: "undefined",
        //    width: "1832px",
        //    height: "720px"
        //}, {"dom":{}}, {"dom":{}});

        //AdobeEdge.loadComposition('public/edge/stairway', 'EDGE-9038984', {
        //    scaleToFit: "none",
        //    centerStage: "none",
        //    minW: "0",
        //    maxW: "undefined",
        //    width: "1336px",
        //    height: "720px"
        //}, {"dom":{}}, {"dom":{}});

    }])
})();