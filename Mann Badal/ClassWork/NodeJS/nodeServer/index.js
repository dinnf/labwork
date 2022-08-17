const { request, response } = require('express');
const express = require('express');
const app = express();
app.listen(3000, ()=> console.log('Server Started at port 3000'));

app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.post('/api', (request, response) => {
    console.log('Got a request in server side');
	console.log(request.body);
});
