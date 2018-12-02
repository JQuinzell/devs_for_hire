const Query = require('./query')
let users = require('../data/users')
let projects = require('../data/projects')

module.exports = {
  Query,
  Mutation: {
    createAccount: (_, args) => {
      users.push(args)
      return args
    },
    createProject: (_, args) => {
      projects.push(args)
      return args
    }
  },
  Project: {
    manager: project => users.find(user => user.id === project.managerID),
    developers: project =>
      project.developerIDs.map(id => users.find(user => user.id === id))
  },
  User: {
    projects: user =>
      user.projectIDs.map(id => projects.find(project => project.id === id)),
    managedProjects: user =>
      user.projectIDs.map(id =>
        projects.find(project => project.managerID === user.id)
      )
  }
}
