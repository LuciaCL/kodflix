const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const getShows = require('./shows.js');
const pathToBuildFolder = '../../build';

app.get('/rest/shows', (req, res) => res.send(getShows()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(express.static(path.join(__dirname, pathToBuildFolder)));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, pathToBuildFolder, 'index.html'));
});