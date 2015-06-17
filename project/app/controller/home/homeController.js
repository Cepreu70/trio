(function() {
    'use strict';
    app.controller('homeController', ['$scope', '$routeParams', '$route', function($scope, $routeParams, $route) {
        window.AdobeEdgeCounter++;

        var homeController = this;
        homeController.ready = false;

        if (window.AdobeEdgeCounter > 1){
            window.AdobeEdgeCounter = 0;
            window.location.reload(true);
        }
        var $appScope = getScope('appCtrl');
        $appScope.template.closeMenu();
        $appScope.app.pageClass = 'page-home';
        var $bodyScope = angular.element(document.getElementsByTagName('body')[0]).scope();
        $bodyScope.template.headerStyle = 'normal';

        this.name = "homeController";
        this.params = $routeParams;
        var $slider = $('.slider');
        var $description = $('.description-slider');

        $slider.slick({
            infinite: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 6000
        });

        angular.element(document).ready(function () {
            setTimeout(function(){
                AdobeEdge.loadComposition('public/edge/spheres', 'EDGE-1636752', {});
                AdobeEdge.loadComposition('public/edge/Parymide', 'EDGE-1946368', {});
                AdobeEdge.loadComposition('public/edge/stairway', 'EDGE-9038984', {});
                AdobeEdge.loadComposition('public/edge/cofee_commitee', 'EDGE-3425786', {});
            }, 1000);
        });

        // Model Phase
        var PhaseObject = function(name, description, icon){
            return {
                name: name,
                src: {
                    default: "public/img/" + icon + ".png",
                    active: "public/img/" + icon + ".png"
                },
                description: description
            }
        };
        homeController.currentPhase = 0;
        homeController.phases = [
            PhaseObject(
                'Исследование',
                'Анализ информации полученной от клиента, ее формирование путем экспериментов. Создание единой' +
                'стилистики и концепции под проект',
                'earch'
            ),
            PhaseObject(
                'Прототипирование',
                'Разработка первоначальной версии продукта. На этой фазе демонстрируются идеи, апробируются решения' +
                'связанные с пороектом. С помощью этой фазы можно понять какая концепция выглядит выигрышной.',
                'tree-paper'
            ),
            PhaseObject(
                'Визуализация',
                'Создание вижуал решения на утвержденный прототип - концепции клиентом. Доработка мелких нюансов в' +
                'дизайне',
                'pen'
            ),
            PhaseObject(
                'Техническая разработка',
                'На этом этапе происходит техническая разработка проекта. Верстка, программирование,' +
                'интеграция с административной частью сайта, тестирование.',
                'gear'
            ),
            PhaseObject(
                'Обслуживание',
                'Это дополнительная фаза включает в себя договоренность между клиентом и компанией о продолжительном' +
                'обслуживании проекта, сайта.',
                'bulb-def'
            )
        ];
        angular.element(document).ready(function () {


            $scope.$apply(function(){
                homeController.ready = true;
            });
            $description.slick({
                infinite: false,
                dots: false,
                accessibility: false,
                draggable: false
            });


        });
        homeController.goToDescription = function(index){
            $description.slick('slickGoTo', index);
            homeController.currentPhase = index;
        };


    }])
})();