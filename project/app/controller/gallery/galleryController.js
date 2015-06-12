(function() {
    app.controller('galleryController', function($routeParams, $scope, $http) {

        this.init = function(){
            var $appScope = getScope('appCtrl');
            $appScope.template.closeMenu();

            var $bodyScope = angular.element(document.getElementsByTagName('body')[0]).scope();
            $bodyScope.template.headerStyle = 'black-header';

            $appScope.app.pageClass = 'page-gallery';
            window.scrollTo(0,0);

        };

        $scope.setCategory = function(id){
            $scope.gallery.myFilter.categories = id;
        };


        this.categories = [];
        this.previews = [];

        this.server = {
            getCategories: function(){
                $http.get('db/categories.json').success(function(data) {
                    $scope.gallery.categories = data;
                });
            },
            getPreviews: function(){
                $http.get('db/gallery.json').success(function(data) {
                    $scope.gallery.previews = data;
                });
            }
        };
        this.server.getCategories();
        this.server.getPreviews();

        this.random = function() {
            return 0.5 - Math.random();
        };
        this.name = "galleryController";
        this.params = $routeParams;

        this.myFilter = {};

        if ($routeParams.category){
            this.myFilter.categories = $routeParams.category;
        }

    });
})();