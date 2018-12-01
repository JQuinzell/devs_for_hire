const { gql } = require('apollo-server')

module.exports = gql`
  type Mutation {
    createAccount(user: UserInput): user

    createProject(
      title: String
      manager: User
      developers: [User]
      available: Boolean
      dateMade: String
      description: String
    ): project
  }
`
