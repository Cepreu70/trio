(function() {
    'use strict';
    app.controller('galleryController', ['$routeParams', function($scope, $routeParams) {
        getScope('appCtrl').app.pageClass = 'page-gallery';

        this.name = "galleryController";
        this.params = $routeParams;
    }])
})();