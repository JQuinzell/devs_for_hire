const { gql } = require('apollo-server');

module.exports = gql`
  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }
`
