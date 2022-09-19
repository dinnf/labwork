const express = require('express');
const app = express();
const port = 8080;

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

let dbConnect = require("./dbConnect");
dbConnect.connectMysql()


let userRoute = require('./routes/userRoute')
app.use('/api/users', jsonParser, userRoute)