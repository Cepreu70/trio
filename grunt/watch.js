module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    templateHTML: {
        files: [
            'project/app/view/**'
        ],
        tasks: [
            'preprocess',
            'sync:view'
        ]
    },

    publicData: {
        files: [
            'project/public/**'
        ],
        tasks: [
            'sync:public'
        ]
    },

    DB: {
        files: [
            'project/db/**'
        ],
        tasks: [
            'sync:db'
        ]
    },

    appScripts: {
        files: [
            'project/**/*.js'
        ],
        tasks: [
            'uglify:app'
        ]
    },

    vendorScripts: {
        files: [
            'project/vendor/**/*.js'
        ],
        tasks: [
            'uglify:vendor'
        ]
    },

    appStyles: {
        files: [
            'project/app/style/**/*.scss', 'project/app/style/**/*.css', 'project/app/style/**/*.sass'
        ],
        tasks: [
            'sass:app',
            'cssmin:app',
            'clean:cache',
            'autoprefixer:app'
        ]
    },

    vendorStyles: {
        files: [
            'project/vendor/**/*.css', 'project/vendor/**/*/sass', 'project/vendor/**/*/scss'
        ],
        tasks: [
            'sass:vendor',
            'cssmin:vendor',
            'clean:cache',
            'autoprefixer:vendor'
        ]
    }
};
