module.exports = {
    options: {
        map: true,
        processors: [
            require('autoprefixer-core')({browsers: 'last 3 version'}).postcss,
            require('csswring').postcss
        ]
    },
    dist: {
        src: 'www/app.css'
    }
};