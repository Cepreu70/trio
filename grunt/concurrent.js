module.exports = {

    // Максимальное количество задач выполняющихся одновременно ( зависит от количества ядер процессора )
    options: {
        limit: 5
    },

    //Потоки задач, в одном потоке задачи могут выполняться одновременно.
    stream1: [
        'sass:app',
        'sass:vendor',
        'sync:view',
        'uglify:app',
        'uglify:vendor'
    ],

    stream2: [
        'cssmin:app',
        'cssmin:vendor',
        'sync:public',
        'preprocess'
    ],

    stream3:[
        'sync:db',
        'clean:cache',
        'autoprefixer:app',
        'autoprefixer:vendor'
    ]

};