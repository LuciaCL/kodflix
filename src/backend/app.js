const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const getShows = require('./shows.js');
const pathToBuildFolder = '../../build';
const db = require('./db');

//app.get('/rest/shows', (req, res) => res.send(getShows()));

db.connect().then(dbo => {
    app.get('/rest/shows', (req, res) => {
        dbo.collection('shows').find({}).toArray((err, results) => {
            if (err) throw err;
            res.send(results);
        });
    });

    app.use(express.static(path.join(__dirname, pathToBuildFolder)));
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, pathToBuildFolder, 'index.html'));
    });
});

