const express = require('express');

let app = express();

let isDev = true;
let prodVar = isDev? false : process.env.NODE_ENV;

let env = prodVar || 'development';
let config = require('./server/config/config.js')[env];
require('./server/config/database')(config);
require('./server/config/express')(config, app);
// console.log(config);

require('./server/config/routes')(app);

app.listen(config.port);
console.log('Express ready!');
