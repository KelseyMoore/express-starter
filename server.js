const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:4200']
};
app.use(cors(corsOptions));
// CORS controls from the security blog post
app.all('/*', (req, res, next) => {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict all access to the required domains
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,X-Access-Token,X-Key');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// implement API routes
const authorsAPI = require('./server/authors-api');
const booksAPI = require('./server/books-api');

app.use('/authors', authorsAPI);
app.use('/books', booksAPI);

// catch all other routes and return just a simple message
app.all('*', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Express Test app listening on port ${port}!`));