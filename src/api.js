const express = require('express');
const app = express();

const serverless = require('serverless-http');

const router = require('./Routes/tasks.js');


/*
router.get('/home', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));
   // res.send('<H1> HEY THIS IS HOME PAGE </H1>');
})
*/

app.use('/.netlify/functions/api/tasks', router);

module.exports.handler = serverless(app);

