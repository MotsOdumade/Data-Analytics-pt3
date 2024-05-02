
const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');

const app = express();

// HTTP server
const httpServer = http.createServer(app);
const HTTP_PORT = 3000;

// Define your Express routes here
app.get('/v1.1/data-analytics/resources', (req, res) => {
    res.send("instead, we'll use this process to share html, css and javascript files with the client");
});






httpServer.listen(HTTP_PORT, () => {
    console.log(`HTTP Server is running on port ${HTTP_PORT}`);
});















