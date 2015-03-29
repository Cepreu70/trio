(function() {
    'use strict';
    app.controller('portfolioController', ['$routeParams', function($scope, $routeParams) {
        var $appScope = getScope('appCtrl');
        $appScope.template.closeMenu();
        $appScope.app.pageClass = 'page-portfolio';

        this.name = "portfolioController";
        this.params = $routeParams;
    }])
})();