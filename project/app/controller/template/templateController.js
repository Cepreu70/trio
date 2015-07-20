(function() {
    'use strict';
    app.controller('templateController', function($scope) {
        this.headerStyle = 'normal';

        var template = this;

        template.data = {
            name: '',
            secondName: '',
            company: '',
            theme: '',
            message: '',
            telephone: '+',
            email: ''
        };

        template.getContact = function(){
            $("body").removeClass("has-menu");
            $("body").toggleClass("has-contact");
        };
        template.getMenu = function(){
            $("body").removeClass("has-contact");
                $("body").toggleClass("has-menu");
                if ($("body").hasClass('has-menu')){
                    showStaggeredList('#menu-list');
                }else{
                    hideStaggeredList('#menu-list');
                }
        };
        template.closeMenu = function(){
            $("body").removeClass("has-contact");
            $("body").removeClass("has-menu");
            hideStaggeredList('#menu-list');
        };
        template.sendMessage = function(){
            template.getContact();
            toast('Сервер рассматривает ваше сообщение', 4000);
            $.ajax({
                type: 'POST',
                url: 'http://trio.kz/js/checkuot-phone.php',
                data: {

                        'name': template.data.name + ' ' + template.data.secondName,
                        'mail': template.data.email,
                        'text': '<p><b>компания:</b> ' + template.data.company + '</p>' +
                        '<p><b>ФИО:</b> ' + template.data.name + ' ' + template.data.secondName + '</p>' +
                        '<p><b>Сообщение:</b> ' + template.data.message + '</p>' +
                        '<p><b>Телефон:</b> ' + template.data.telephone + '</p>' +
                        '<p><b>Email:</b> ' + template.data.email + '</p>'

                }
            }).done(function(response) {
                toast('Сообщение доставлено успешно', 4000);
            });
        }
    })
})();