const express = require('express');

let app = express();

app.set('view engine', 'pug');
app.set('views', './server/views');

let isDev = true;
let prodVar = isDev? false : process.env.NODE_ENV;

let env = prodVar || 'development';
let config = require('./server/config/config.js')[env];
let dbConfig = require('./server/config/database')(config);
// console.log(config);

app.get('/', function (req, res) {

  console.log('MongoDb ready!');
  res.render('index');
})

app.use(express.static('public'));

app.listen(config.port);
console.log('Express ready!');
