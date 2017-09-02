const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

module.exports = (config, app) => {
  app.set('view engine', 'pug');
  app.set('views', config.rootPath + 'server/views');

  app.use(express.static(config.rootPath + 'public'));
}
