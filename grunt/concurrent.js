module.exports = {

    // Опции
    options: {
        limit: 3
    },

    // Задачи разработки
    devFirst: [
        'sass:dev',
        'uglify:vendor',
        'uglify:local'
    ],
    devSecond: [
        'cssmin'
    ],
    devThird: [
        'postcss'
    ]

};