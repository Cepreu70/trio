## Vendor

## Принцип работы
**Ничего не нужно подключать в html вручную**  

Команда
```cli
grunt
```
собирает все js, css(sass, scss) файлы из текущей папки, объдиняет их в один и ложит в папку www с именами vendor.js и vendor.css,
которые уже заблаговременно подключенны в точке входа приложения.  

*P.S Grunt watch, также следит за этой папкой и выполняет нужные действия автоматически*

## Как добавить библиотеку

Библиотеки подключаются по алфавитному признаку, называйте папку с префиксом в виде числа, чтобы модули были подключены
в верном порядке.  
*например:*  
*../vendor/1.angular*  
*../vendor/2.angular-translate*  

В данном примере файлы будут подключены в правильной последовательности и ошибки не будет.

## Список используемых библиотек

- [Angular](https://code.angularjs.org/1.4.0/docs/api) - Javascript MV* Framework.
- [Angular-modules](2.angular-modules) - Модули на ангулярю
- [JQuery](https://jquery.com/) - Javascript MV* Framework.
- [Font-awesome](http://fortawesome.github.io/Font-Awesome) - Иконочные шрифты Font-Awesome.
- [Underscore](http://underscorejs.org/) - Готовые хелперы для работы с объектами, массивами, коллекциям в js.
- [MaterializeCSS](http://materializecss.com/) - Material Design Bootstrap-like framework.
- [JQuery-parallax](https://github.com/alumbo/jquery.parallax-scroll/) - Плавный паралакс скроллинг.
- [d3](http://d3js.org/) - Библиотека для динамичных и не только svg представлений.
- [slick](http://kenwheeler.github.io/slick/) - Готовый плагин для создания слайдера типа "карусель".
- [adobeEdge](http://www.adobe.com/devnet-docs/edgeanimate/api/current/index.html) - Плагин для работы API AdobeEdge
 для HTML анимаций на главной странице.

## PS
Папки помеченные(edited) были измененны в рамках этого проекта, обновление файлов плагина на "заводские"
может что-нибудь сломать.