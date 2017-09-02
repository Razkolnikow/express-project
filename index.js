const express = require('express');

let app = express();

let isDev = true;
let prodVar = isDev? false : process.env.NODE_ENV;

let env = prodVar || 'development';
let config = require('./server/config/config.js')[env];
require('./server/config/database')(config);
require('./server/config/express')(config, app);
require('./server/config/routes')(app);
require('./server/config/passport')();
// console.log(config);

app.listen(config.port);
console.log('Express ready!');
