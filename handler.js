const handler = require('serverless-express/handler')
var directus = require('directus/dist/app');
var app = directus.default();
module.exports.handler = handler(app);