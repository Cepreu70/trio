module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    localScripts: {
        files: [
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
            'www/vendor/**/*.scss'
        ],
        tasks: [
            'sass:dev',
            'cssmin'
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
