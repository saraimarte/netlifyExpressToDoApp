const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
const router = require('./Routes/tasks.js');

// Enable CORS for all routes
app.use(cors()); 

app.use('/.netlify/functions/api/', router);

module.exports.handler = serverless(app);


//'https://backend200.netlify.app/.netlify/functions/api/' from origin
// 'https://frontend200.netlify.app' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' 
// header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.