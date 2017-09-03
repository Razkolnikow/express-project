const controllers = require('../controllers/index');
const auth = require('../config/auth');

module.exports = (app) => {
  app.get('/', controllers.home.index);
  app.get('/about', controllers.home.about);
  app.get('/users/register', controllers.users.register);
  app.post('/users/create', controllers.users.create);
  app.get('/users/login', controllers.users.login);
  app.post('/users/authenticate', controllers.users.authenticate);
  app.post('/users/logout', controllers.users.logout);
  app.get('/articles/create', auth.isInRole('Admin'), controllers.articles.create);
  app.get('/users/notauthorized', controllers.users.notAuthorized);

  app.all('*', (req, res) => {
    res.status(404);
    res.send('Not found')
    res.end();
  })
}
