(function() {
    'use strict';
    app.controller('homeController', ['$routeParams', function($scope, $routeParams) {
        getScope('appCtrl').app.pageClass = 'page-home';

        this.name = "homeController";
        this.params = $routeParams;

        $(document).ready(function(){
            $('.parallax').parallax();
        });
    }])
})();