module.exports = {

    app: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'project/app/style/',
            src: ['**/*.scss', '**/*.sass'],
            dest: 'cache/app',
            ext: '.css'
        }]
    },
    vendor: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'project/vendor',
            src: ['**/*.sass', '**/*.scss'],
            dest: 'cache/vendor',
            ext: '.css'
        }]
    }
};