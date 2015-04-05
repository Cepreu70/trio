(function() {
    'use strict';
    app.controller('templateController', function($scope) {
        this.headerStyle = 'normal';
        this.getContact = function(){
            $("body").removeClass("has-menu");

            setTimeout(function(){
                $("body").toggleClass("has-contact");
            }, 100);

        };
        this.getMenu = function(){
            $("body").removeClass("has-contact");

            setTimeout(function(){
                $("body").toggleClass("has-menu");
                if ($("body").hasClass('has-menu')){
                    showStaggeredList('#menu-list');
                }else{
                    hideStaggeredList('#menu-list');
                }
            }, 100);
        };
        this.closeMenu = function(){
            $("body").removeClass("has-contact");
            $("body").removeClass("has-menu");
            hideStaggeredList('#menu-list');
        }
    })
})();