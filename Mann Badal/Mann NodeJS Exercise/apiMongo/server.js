const express = require('express');
const app = express();
const dbConnect = require("./dbConnect");
var bodyParser = require('body-parser')
const port = 8080;
let userRoute = require('./routes/userRoute');
var jsonParser = bodyParser.json()

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api/users',jsonParser, userRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
