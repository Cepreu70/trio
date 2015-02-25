(function() {
    'use strict';
    app.controller('portfolioController', ['$routeParams', function($scope, $routeParams) {
        getScope('appCtrl').app.pageClass = 'page-portfolio';

        this.name = "portfolioController";
        this.params = $routeParams;
    }])
})();