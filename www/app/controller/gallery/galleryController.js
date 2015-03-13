(function() {
    'use strict';
    app.controller('galleryController', ['$routeParams', function($scope, $routeParams) {

        this.init = function(){
            getScope('appCtrl').app.pageClass = 'page-gallery';
            window.scrollTo(0,0);
        };

        this.previews = [
            {
                name: 'САЙТ SMART-ASTANA',
                description: 'Типо описание для сайта будет тут, пока так пусть будет',
                imgURL: 'img/gallery/sa-preview.jpg',
                pageUrl: 'portfolio/smart-astana'
            },
            {
                name: 'САЙТ АССАМБЛЕИ НАРОДОВ КАЗАХСТАНА',
                description: 'Плавно-мобильное голосовое поле, в том числе, просветляет эффект "вау-вау".' +
                ' Гипнотический рифф диссонирует диссонансный флажолет. Септаккорд регрессийно использует' +
                ' динамический эллипсис.',
                imgURL: 'img/gallery/assembly-preview.jpg',
                pageUrl: 'portfolio/assembly'
            },
            {
                name: 'САЙТ SOLAR-ASTANA',
                description: 'Плавно-мобильное голосовое поле, в том числе, просветляет эффект "вау-вау".' +
                ' Гипнотический рифф диссонирует диссонансный флажолет. Септаккорд регрессийно использует' +
                ' динамический эллипсис.',
                imgURL: 'img/gallery/solar-preview.jpg',
                pageUrl: 'portfolio/solar'
            },
            {
                name: 'ПРИЛОЖЕНИЕ SALEM',
                description: 'Плавно-мобильное голосовое поле, в том числе, просветляет эффект "вау-вау".' +
                ' Гипнотический рифф диссонирует диссонансный флажолет. Септаккорд регрессийно использует' +
                ' динамический эллипсис.',
                imgURL: 'img/gallery/salem-preview.jpg',
                pageUrl: 'portfolio/salem'
            },
            {
                name: 'САЙТ БРК-ЛИЗИНГ',
                description: 'Плавно-мобильное голосовое поле, в том числе, просветляет эффект "вау-вау".' +
                ' Гипнотический рифф диссонирует диссонансный флажолет. Септаккорд регрессийно использует' +
                ' динамический эллипсис.',
                imgURL: 'img/gallery/brk-preview.jpg',
                pageUrl: 'portfolio/brk'
            },
            {
                name: 'САЙТ ASTANA INNOVATIONS',
                description: 'Плавно-мобильное голосовое поле, в том числе, просветляет эффект "вау-вау".' +
                ' Гипнотический рифф диссонирует диссонансный флажолет. Септаккорд регрессийно использует' +
                ' динамический эллипсис.',
                imgURL: 'img/gallery/ain-preview.jpg',
                pageUrl: 'portfolio/ain'
            },
            {
                name: 'СЕРВИС SMIPE',
                description: 'Плавно-мобильное голосовое поле, в том числе, просветляет эффект "вау-вау".' +
                ' Гипнотический рифф диссонирует диссонансный флажолет. Септаккорд регрессийно использует' +
                ' динамический эллипсис.',
                imgURL: 'img/gallery/smipe-preview.jpg',
                pageUrl: 'portfolio/smipe'
            },
            {
                name: 'САЙТ G-GLOBAL',
                description: 'Плавно-мобильное голосовое поле, в том числе, просветляет эффект "вау-вау".' +
                ' Гипнотический рифф диссонирует диссонансный флажолет. Септаккорд регрессийно использует' +
                ' динамический эллипсис.',
                imgURL: 'img/gallery/gGlobal-preview.jpg',
                pageUrl: 'portfolio/gGlobal'
            }
        ];
        this.random = function() {
            return 0.5 - Math.random();
        };
        this.name = "galleryController";
        this.params = $routeParams;
    }])
})();