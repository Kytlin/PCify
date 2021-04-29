require("dotenv").config();
const express = require('express');
const app = express();
const path = require("path");

const data = require('./data');

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/amazon', (req, res) => {
    data().then((result) => {
        // console.log(result);
        res.render('amazon', { PCs: result });
    });
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});