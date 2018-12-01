const { gql } = require("apollo-server");

module.exports = gql`
  # "coder" is the user that can work on founders ideas
  type coder {
    name: String
    email: String
    level: String
  }
`;
