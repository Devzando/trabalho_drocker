const express = require('express');

const app = express();

const port = process.env.PORT || 3333;

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => console.log("server is running"));