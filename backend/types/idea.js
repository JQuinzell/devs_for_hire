const { gql } = require("apollo-server");

module.exports = gql`
  # idea's can be made by founders and coders can view them and request to work on them
  type idea {
    title: String
    creator: founder
    workers: [coder]
  }
`;
