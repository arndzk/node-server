const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log('<h1>Hello World!</h1>');
    next();
})

app.get('/', (req, res) => {
    res.send("Getting Root...");
});

app.get('/profile', (req, res) => {
    res.send("Getting Profile...");
});

app.post('/profile', (req, res) => {
    console.log(req.body);
    res.send('Success!');
});

app.listen(3000);