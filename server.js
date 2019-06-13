const express = require('express');
const bodyParser = require('body-parser');
// Database Configuring
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

// Router Configuring
const indexRouter = require('./routes/Index.js');
const apiRouter = require('./routes/Api.js');

// Middleware Configuring
const authMiddleware = require('./server/app-middleware.js');

// Server Configuring
const hostname = '127.0.0.1';
const port = 3000;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.log('Could not connect to DB.', err);
    process.exit();
});


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Application Level Middleware
app.use(authMiddleware);

//Error-handling middleware
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });
// set api routes
app.use('/', indexRouter);
// Api You Can access after Authorization || Authentication Key
app.use('/api', apiRouter);

// listen for requests
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);   
});

