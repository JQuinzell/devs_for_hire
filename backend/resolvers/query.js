const users = require('../data/users')
const projects = require('../data/projects')

module.exports = {
  users: () => users,
  projects: () => projects
}
