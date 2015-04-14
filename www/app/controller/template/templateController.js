(function() {
    'use strict';
    app.controller('templateController', function($scope) {
        this.headerStyle = 'normal';
        this.getContact = function(){
            $("body").removeClass("has-menu");
            $("body").toggleClass("has-contact");


        };
        this.getMenu = function(){
            $("body").removeClass("has-contact");
                $("body").toggleClass("has-menu");
                if ($("body").hasClass('has-menu')){
                    showStaggeredList('#menu-list');
                }else{
                    hideStaggeredList('#menu-list');
                }
        };
        this.closeMenu = function(){
            $("body").removeClass("has-contact");
            $("body").removeClass("has-menu");
            hideStaggeredList('#menu-list');
        }
    })
})();