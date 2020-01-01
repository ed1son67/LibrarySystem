const proxy = require('http-proxy-middleware');
//
module.exports = function(app) {
    app.use(proxy('/api', {
        target: 'http://localhost:8081/db/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api": "/"
        },
        //  http://www.easy-mock.com'
        // cookieDomainRewrite: "http://localhost:3000"
    }));
};