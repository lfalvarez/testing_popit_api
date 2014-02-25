var express = require('express'),
    popitApi  = require('popit-api');

var app = express();

// Configure the PopIt API app
var apiApp = popitApi({
   databaseName: 'testing-popit-api'
});
//
// Mount the PopIt API app at the appropriate path
app.use('/api', apiApp);
//
//   // Start to listen
app.listen(3002);
console.log("API Server listening at http://127.0.0.1:3002/api");
module.exports = app;
