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
  }
}
