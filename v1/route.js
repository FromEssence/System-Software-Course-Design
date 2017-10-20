var api = require('./api');

var _app = null;
/// error handlers
var errorHandler404 = function(req, res, next) {
    var err = new Error('404 Not Found!');
    err.status = 404;
    next(err);
};
var errorHandler500 = function(err, req, res, next) {
    res.status(err.status || 500);
    var contentType = req.get('Content-Type');
};

module.exports = {
    init: function(app) {

        _app = app;

        // allow cros domin supports for all api request.
        _app.all("*", function(req, res, next) {
            // setting default timeout for httpserver. 10min
            res.setTimeout(10 * 60 * 1000, function() {
            });
            var reqOrigin = req.headers['origin'];
            res.set({
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials":"true",
                "Access-Control-Allow-Origin": reqOrigin,
                "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Timing-Allow-Origin": "*"
            });
            next();
        });
        //
        _app.use('/api', api);
        /// catch 404 and forward to error handler
        _app.use(errorHandler404);
        // catch 500 and other error and stop app exec.
        _app.use(errorHandler500);
    }
}