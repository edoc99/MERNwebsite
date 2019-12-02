const express = require('express')

const app = express()
const port = 4000

// routes
app.get('/', function (req, res) {
  res.json({name: "John", 
  age: 31, city: "New York"})
})

// error handler
app.use((req, res, next) =>{
    const err = new Error('Not found');
    err.status = 404;

    next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        err: err.message || 'Something went wrong'
    })
})
 
app.listen(port, console.log(`Server started on port ${port}`))