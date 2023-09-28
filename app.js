const express = require('express');
const morgan = require('morgan');

const app = express();

// MORGAN MIDDLEWARE -> TOP
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('combined'));
}

//Middleware: BODY PARSING
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello from server side');
});

module.exports = app;
