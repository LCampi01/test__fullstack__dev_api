const pkg = require('../../package.json');
const publicApi = require('./publicApi');
const components = require('./components');
const {
    PORT
} = process.env;

module.exports = {
    openapi: '3.0.2',
    info: {
        title: pkg.description,
        version: pkg.version
    },
    servers: [
        {url: `http://localhost:${PORT}`, description: 'Local dev server'}
    ],
    security: [
        {bearerAuth: []}
    ],
    paths: {
        ...publicApi
    },
    components
};
