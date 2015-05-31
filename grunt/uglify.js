module.exports = {
    app: {
        options: {
            beautify: true,
            mangle: false,
            compress: false
        },
        src: ['project/config/**/*.js', 'project/helpers/**/*.js', 'project/app/controller/**/*.js'],
        dest: 'www/app.js'
    },
    vendor: {
        options: {
            beautify: true,
            mangle: false,
            compress: false
        },
        src: ['project/vendor/**/*.js'],
        dest: 'www/vendor.js'
    }
};