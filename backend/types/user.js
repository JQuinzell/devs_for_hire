const { gql } = require('apollo-server')

module.exports = gql`
  type user {
    id: Int!
    name: String!
    email: String!
    password: String!
    gitUrl: String
    languages: [String]
    projects: [Int]
    isPM: Boolean
    isMentor: Boolean
  }
`
