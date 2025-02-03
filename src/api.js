const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
const router = require('./Routes/tasks.js');

app.use(express.json()); // This is required to parse JSON requests

// Enable CORS for all routes
app.use(cors({
    origin: 'https://frontend200.netlify.app', // Allow only your frontend
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type',
    credentials: true,
}));

// Handle preflight requests
app.options('*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "https://frontend200.netlify.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.sendStatus(200);  // Make sure OPTIONS requests return a 200 status
});

// Your routes
app.use('/.netlify/functions/api/', router);

module.exports.handler = serverless(app);
