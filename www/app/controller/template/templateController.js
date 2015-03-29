(function() {
    'use strict';
    app.controller('templateController', function($scope) {
        this.getContact = function(){
            $("body").removeClass("has-menu");

            setTimeout(function(){
                $("body").toggleClass("has-contact");
            }, 200);

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
            }, 200);
        };
        this.closeMenu = function(){
            $("body").removeClass("has-contact");
            $("body").removeClass("has-menu");
            hideStaggeredList('#menu-list');
        }
    })
})();