const { gql } = require("apollo-server");

module.exports = gql`
  # Founders can post ideas and work with coders
  type founder {
    name: String
    email: String
    ideas: [idea]
  }
`;
