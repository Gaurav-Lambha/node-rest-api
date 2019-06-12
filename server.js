const express = require('express');
const bodyParser = require('body-parser');
// Configuring the database
 const dbConfig = require('./config/database.config.js');
 const mongoose = require('mongoose');

const hostname = '127.0.0.1';
const port = 3000;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// listen for requests
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); 
    // set api routes
    require('./routes/index.js')(app);
    require('./routes/api.js')(app);
    require('./routes/custom-api.js')(app);
});

