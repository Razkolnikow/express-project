let homeController = require('./home-controller.js')
let usersController = require('./users-controller.js')
let articlesController = require('./articles-controller.js')

module.exports = {
  home: homeController,
  users: usersController,
  articles: articlesController
}
