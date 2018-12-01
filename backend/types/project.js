const { gql } = require('apollo-server')

module.exports = gql`
  #
  type project {
    id: Int!
    title: String
    manager: user
    developers: [user]
    # If anyone can see it to sign up to work on it.
    available: Boolean
    dateMade: String
    description: String
  }
`
