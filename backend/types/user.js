const { gql } = require('apollo-server')

module.exports = gql`
  type User {
    id: ID
    name: String
    email: String
    password: String
    gitUrl: String
    languages: [String]
    isProjectManager: Boolean
    isDeveloper: Boolean
    isMentor: Boolean
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
    gitUrl: String
    isProjectManager: Boolean
    isDeveloper: Boolean
    isMentor: Boolean
  }
`
