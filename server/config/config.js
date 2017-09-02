const path = require('path')

let roothPath = path.normalize(path.join(__dirname, '../../'))

module.exports = {
  development: {
    rootPath: roothPath,
    db: 'mongodb://localhost:27017/express-project-db',
    port: 1337
  },
  production: {
    rootPath: roothPath,
    db: process.env.MONGO_DB_CONN_STRING,
    port: process.env.port
  }
}
