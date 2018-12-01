const { gql } = require('apollo-server')

module.exports = gql`
  type Project {
    id: Int!
    title: String
    manager: User
    developers: [User]
    # If anyone can see it to sign up to work on it.
    available: Boolean
    dateMade: String
    description: String
  }
`
