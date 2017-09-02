let controllers = require('../controllers/index');

module.exports = (app) => {
  app.get('/', controllers.home.index);
  app.get('/about', controllers.home.about);

  app.all('*', (req, res) => {
    res.status(404);
    res.send('Not found')
    res.end();
  })
}
