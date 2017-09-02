module.exports = (app) => {
  app.get('/', function (req, res) {
    console.log('MongoDb ready!');
    res.render('index');
  });

  app.all('*', (req, res) => {
    res.status(404);
    res.send('Not found')
    res.end();
  })
}
