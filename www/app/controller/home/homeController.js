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

    }])
})();