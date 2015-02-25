module.exports = {
    vendor: {
        options: {
            beautify: true,
            mangle: false
        },
        src: ['www/vendor/**/*.js'],
        dest: 'www/vendor.js'
    },
    local: {
        options: {
            beautify: true,
            mangle: false
        },
        src: ['www/app/helper/**/*.js', 'www/app/data/**/*.js', 'www/app/config/**/*.js', 'www/app/models/**/*.js', 'www/app/controller/**/*.js'],
        dest: 'www/app.js'
    }
};