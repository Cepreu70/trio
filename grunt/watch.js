module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    localScripts: {
        files: [
            'www/app/helper/**/*.js',
            'www/app/controller/**/*.js',
            'www/app/models/**/*.js',
            'www/app/data/**/*.js',
            'www/app/config/**/*.js'
        ],
        tasks: [
            'uglify:local'
        ]
    },

    vendorScripts: {
        files: [
            'www/vendor/**/*.js'
        ],
        tasks: [
            'uglify:vendor'
        ]
    },

    styles: {
        files: [
            'www/style/**/*.scss',
            'www/vendor/**/*.scss',
            'www/vendor/**/*.css'
        ],
        tasks: [
            'sass:dev',
            'cssmin',
            'postcss'
        ]
    },
    html: {
        files: [
            'www/**/*.html'
        ],
        tasks: [

        ]
    }
};
