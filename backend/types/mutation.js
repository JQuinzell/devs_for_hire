const { gql } = require('apollo-server')

module.exports = gql`
  type Mutation {
    createAccount(user: UserInput): User

    createProject(
      title: String
      # manager: User
      # developers: [User]
      available: Boolean
      dateMade: String
      description: String
    ): project
  }
`
