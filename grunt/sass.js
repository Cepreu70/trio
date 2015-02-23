module.exports = {
    // Development settings
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'www/',
            src: ['vendor/**/*.scss', 'style/**/*.scss' ],
            dest: 'assets/css',
            ext: '.css'
        }]
    }
};