const { gql } = require('apollo-server')

module.exports = gql`
  input User {
    id: ID
    name: String
    email: String
    password: String
    gitUrl: String
    languages: [String]
    isPM: Boolean
    isMentor: Boolean
  }

  type Mutation {
    createAccount(
      id: ID
      name: String
      email: String
      password: String
      gitUrl: String
      languages: [String]
      isPM: Boolean
      isMentor: Boolean
    ): user

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
