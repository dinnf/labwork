const express = require('express')
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
var calculatorRoute = require('./routes/calculatorRoute');
const app = express()
const port = 3000



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app
  listening at
  http://localhost:${port}`)
})

app.use('/calculator', calculatorRoute)

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);