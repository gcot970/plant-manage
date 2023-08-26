const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    events: [UserEvent]
  }

  type UserEvent {
    _id: ID
    userId: ID
    date: Date
    time: String
    event: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;