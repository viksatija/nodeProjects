const express = require('express');

//Create an app
const app = express();
app.get('/', (req, res) => {
    res.send('Sample Node App Running\n');
});

//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);