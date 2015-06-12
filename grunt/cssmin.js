module.exports = {
    app: {
        files: {
            'www/app.css': ['cache/app/**/*.css']
        }
    },
    vendor: {
        files: {
            'www/vendor.css': ['cache/vendor/**/*.css', 'project/vendor/**/*.css']
        }
    }

};