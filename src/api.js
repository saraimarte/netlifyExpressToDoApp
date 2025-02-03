const express = require('express');
const cors = require('cors');

const app = express();

const serverless = require('serverless-http');

const router = require('./Routes/tasks.js');

app.use(cors({ origin: 'https://frontend200.netlify.app/*' })); 


app.use('/.netlify/functions/api/', router);

module.exports.handler = serverless(app);

