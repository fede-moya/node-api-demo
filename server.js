'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = process.env.BACKEND_PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1> Hello from host: ' + os.hostname() + '</h1>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
