(function() {
    'use strict';
    app.controller('portfolioController', function($scope, $routeParams) {
        var $appScope = getScope('appCtrl');
        $appScope.template.closeMenu();
        $appScope.app.pageClass = 'page-portfolio';

        var $bodyScope = angular.element(document.getElementsByTagName('body')[0]).scope();
        $bodyScope.template.headerStyle = 'black-header';

        this.name = "portfolioController";
        this.params = $routeParams;

        if ($routeParams.page)
            this.pageName = $routeParams.page;
        else
            this.pageName = 'smart-astana';

    })
})();