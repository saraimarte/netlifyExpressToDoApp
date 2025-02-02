const express = require('express');
const app = express();

const serverless = require('serverless-http');

const router = require('./Routes/tasks.js');

app.use('/.netlify/functions/api/tasks', router);

module.exports.handler = serverless(app);

