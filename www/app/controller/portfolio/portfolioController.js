(function() {

    app.controller('portfolioController', function($scope, $routeParams, $http, $location) {
        var $appScope = getScope('appCtrl');
        $appScope.template.closeMenu();
        $appScope.app.pageClass = 'page-portfolio';

        var $bodyScope = angular.element(document.getElementsByTagName('body')[0]).scope();
        $bodyScope.template.headerStyle = 'black-header';

        this.name = "portfolioController";
        this.params = $routeParams;

        this.categories = [];
        this.previews = [];

        this.currentPreview = {};
        this.previousPreview = {};
        this.nextPreview = {};
        window.scrollTo(0,0);
        this.navigate = function(url, param){
            $('#navigation-panel').addClass('to-' + param);
            $location.search("page="+ url);

        };

        this.server = {
            getCategories: function(){
                $http.get('db/categories.json').success(function(data) {
                    $scope.portfolio.categories = data;
                });
            },
            getPreviews: function(){
                $http.get('db/gallery.json').success(function(data) {
                    $scope.portfolio.previews = data;
                    $scope.portfolio.currentPreview = _.findWhere($scope.portfolio.previews, { pageUrl: $scope.portfolio.pageName });

                    if ($scope.portfolio.previews.indexOf($scope.portfolio.currentPreview) == 0){
                        $scope.portfolio.previousPreview = $scope.portfolio.previews[$scope.portfolio.previews.length - 1];
                    }else{
                        $scope.portfolio.previousPreview = $scope.portfolio.previews[$scope.portfolio.previews.indexOf($scope.portfolio.currentPreview) - 1];
                    }

                    if ($scope.portfolio.previews.indexOf($scope.portfolio.currentPreview) == $scope.portfolio.previews.length - 1){
                        $scope.portfolio.nextPreview = $scope.portfolio.previews[0];
                    }else{
                        $scope.portfolio.nextPreview = $scope.portfolio.previews[$scope.portfolio.previews.indexOf($scope.portfolio.currentPreview) + 1];
                    }

                });
            }
        };

        this.server.getCategories();
        this.server.getPreviews();


        if ($routeParams.page)
            this.pageName = $routeParams.page;
        else
            this.pageName = 'smart-astana';

    })
})();