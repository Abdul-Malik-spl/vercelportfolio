const app = require('./data'); // or your main Express file
const serverless = require('serverless-http');

module.exports = serverless(app);

