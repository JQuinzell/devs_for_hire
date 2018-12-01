const users = require('../data/users')
const projects = require('../data/projects')

module.exports = {
  users: () => users,
  projects: () => projects,
  findUser: (_, args) => {
    const user = users.find(u => u.name === args.name)
    return user
  },
  findProject: (_, args) => {
    const project = projects.find(p => p.id === args.id)
    return project
  }
}
