const { gql } = require('apollo-server');

const typeDefs = gql`
  # The Pod Schema
  type Pod {
      id: ID!
      name: String
      address: String
      url: String
  }

  type Query {
      pods: [Pod]!
      pod(id: ID!): Pod
      podName(name: String!): Pod
  }
`;

module.exports = typeDefs;
