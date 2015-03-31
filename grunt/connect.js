module.exports = {
    server: {
        options: {
            hostname: 'localhost',
            port: 8000,
            base: 'www/',
            middleware: function(connect, options) {

                var middleware = [];
                var rewrite = require('connect-modrewrite');
                // 1. mod-rewrite behavior
                var rules = [
                    '!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.mp4|\\.webm|\\.gif$\\.woff|\\.ttf|\\.eot /index.html'
                ];
                middleware.push(rewrite(rules));

                // 2. original middleware behavior
                var base = options.base;
                if (!Array.isArray(base)) {
                    base = [base];
                }
                base.forEach(function(path) {
                    middleware.push(connect.static(path));
                });

                return middleware;

            },
            keepalive: true
        }
    }
};
