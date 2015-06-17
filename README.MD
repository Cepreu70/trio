# Trio.kz
TRIO оф. сайт

## Структура проекта
- [grunt](grunt) - папка с параметрами сборки grunt
- [project](project) - папка с проектом

## Начальное окружение
Установите и настройте:

1. [Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (Windows - [Git Bash](http://git-scm.com/download/win)).

2. [Npm](https://nodejs.org/download/) (Windows требует [python 2.7.x](https://www.python.org/downloads/), версия важна).

3. [Bower](https://www.npmjs.com/package/bower) (глобально, как пакет npm).

4. [Grunt-cli](https://www.npmjs.com/package/grunt-cli) (глобально, как пакет npm).



## Первый запуск
После настройке окружения, запустите команду.
```cli
$ npm i
```
Npm установит все nodeJS модули в папку node_modules.

```cli
$ bower i
```
Bower установит все зависимости в папку bower_components.  
**P.S** Если вы добавили новую зависимость, необходимоые файлы библиотек необходимо поместить в [project/vendor](project/vendor), структура и способ размещения описан в [project/vendor](project/vendor)


```cli
$ grunt
```
Планировщик задач grunt соберет проект из папки [project](project) в версию для просмотра [www](www).


##Запуск

Чтобы посмотреть сайт, необходимо запустить http сервер, доступный по адресу [http://localhost:8000/](http://localhost:8000/) при помощи команды:
```cli
$ grunt server
```

## Работа
Перед тем как начать что-то менять запустите 'watcher', программу, которая следит за файлами и автоматически собирает проект в тех местах, где вы внесли изменения.
Запустить watcher, можно командой
```cli
$ grunt watch
```

Если в Chrome установлено расширение [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei), страница также
будет автоматически перезагружена при любых внесенных изменениях.


## Технологии
[AngularJS ~1.4.0](https://code.angularjs.org/1.4.0/docs/api),
[Npm (NodeJS)](https://nodejs.org/),
[Grunt](http://gruntjs.com/),
[Bower](http://bower.io/),
[SASS](http://sass-lang.com/),

## Лицензия
...