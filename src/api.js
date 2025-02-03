const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
const router = require('./Routes/tasks.js');

app.use(express.json());

app.use(cors({
    origin: 'https://frontend200.netlify.app',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type',
    credentials: true,
}));

app.options('*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "https://frontend200.netlify.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.sendStatus(200);
});

// Make sure the route is correctly mounted
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
