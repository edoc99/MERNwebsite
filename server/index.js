const express = require('express');

const handle = require('./handlers')

const app = express();
const port = 4000;

// routes
app.get('/', function (req, res) {
  res.json({name: "John", 
  age: 31, city: "New York"})
});

// error handler
app.use(handle.notFound);
app.use(handle.errors);
 
app.listen(port, console.log(`Server started on port ${port}`));