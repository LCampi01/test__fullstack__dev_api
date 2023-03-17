const {Router} = require('express');
const {errorHandler} = include('routes/middlewares');
const Logger = include('helpers/logger');

class Routes {
    static configure(app) {
        Logger.info('Loading public api...');
        app.use('/public-api', require('./public-api')(Router()));
        app.use(errorHandler);
    }
}

module.exports = Routes;
