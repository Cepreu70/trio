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
            telephone: '',
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
                url: 'https://mandrillapp.com/api/1.0/messages/send.json',
                data: {
                    'key': 'QXY_O5_ZRIXYljkTI2u0IQ',
                    'message':
                    {
                        'from_email': 'info@trio.kz',
                        'to': [
                            {
                                'email': 'PogorelowMax@gmail.com',
                                'name': 'Заявка',
                                'type': 'to'
                            }
                        ],
                        'autotext': 'true',
                        'subject': 'Форма связаться!',
                        'html': '<p><b>компания:</b> ' + template.data.company + '</p>' +
                        '<p><b>ФИО:</b> ' + template.data.name + ' ' + template.data.secondName + '</p>' +
                        '<p><b>email:</b> ' + template.data.email + '</p>' +
                        '<p><b>Сообщение:</b> ' + template.data.message + '</p>' +
                        '<p><b>Телефон:</b> ' + template.data.telephone + '</p>' +
                        '<p><b>Email:</b> ' + template.data.email + '</p>'
                    }

                }
            }).done(function(response) {
                $.ajax({
                    type: 'POST',
                    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
                    data: {
                        'key': 'QXY_O5_ZRIXYljkTI2u0IQ',
                        'message':
                        {

                            'from_email': 'info@trio.kz',
                            'to': [
                                {
                                    'email': template.data.email,
                                    'name': 'Заявка',
                                    'type': 'to'
                                }
                            ],
                            'autotext': 'true',
                            'subject': 'Ваша заявка рассматривается',
                            'html': 'Спасибо мы приняли вашу заявку, ожидайте мы с вами свяжемся!'
                        }

                    },
                    success: function(){
                        toast('Сообщение доставлено успешно', 4000);
                        console.log(response); // if you're into that sorta thing
                    },
                    error: function(){
                        toast('Ваше сообщение не прошло проверку', 4000);
                    }
                });
            });
        }
    })
})();