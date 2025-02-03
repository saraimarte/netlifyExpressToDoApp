const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
const router = require('./Routes/tasks.js');


app.use(cors()); 


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://frontend200.netlify.app'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); 
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/.netlify/functions/api/', router);

module.exports.handler = serverless(app);

