const { gql } = require('apollo-server')

module.exports = gql`
    type user {
        id: ID!
        name: String!
        email: String!
        password: String!
        gitUrl: String
        languages: [String]
        isPM: Boolean
        isMentor: Boolean
    }
`
