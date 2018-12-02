const { gql } = require('apollo-server')

module.exports = gql`
  type Mutation {
    createAccount(user: UserInput): User
    joinProject(project: String, user: String): Project
    createProject(
      title: String
      # manager: User
      # developers: [User]
      available: Boolean
      dateMade: String
      description: String
    ): Project
  }
`
