module.exports = {
    options: {
        map: true,
        processors: [
            require('autoprefixer-core')({browsers: 'last 2 versions'}).postcss,
            require('csswring').postcss
        ]
    },
    dist: {
        src: 'www/app.css'
    }
};