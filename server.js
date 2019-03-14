const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Getting Root...");
});

app.get('/profile', (req, res) => {
    res.send("Getting Profile...");
});

app.post('/profile', (req, res) => {
    const user = {
        name: 'Johnny',
        surname: 'Five'
    }
    res.send(user);
});

app.listen(3000);