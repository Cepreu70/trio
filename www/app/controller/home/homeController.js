(function() {
    'use strict';
    app.controller('homeController', ['$routeParams', function($scope, $routeParams) {
        var $appScope = getScope('appCtrl');
        $appScope.template.closeMenu();
        $appScope.app.pageClass = 'page-home';

        this.name = "homeController";
        this.params = $routeParams;

        $(document).ready(function(){
            $('.parallax').parallax();
        });
    }])
})();