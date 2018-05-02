const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

app.use(express.static('static'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//Set Port
const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));