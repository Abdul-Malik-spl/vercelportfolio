const app = require('./datas');
const serverless = require('serverless-http');

module.exports = serverless(app);
