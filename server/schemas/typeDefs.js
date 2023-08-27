const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    events: [UserEvent]
  }

  type UserEvent {
    _id: ID
    userId: ID
    date: String
    time: String
    event: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    userEvents: [UserEvent]
  }

  type Mutation {
    adduser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createUserEvent(input: UserEventInput): UserEvent
  }

  input UserEventInput {
    userId: ID
    date: String
    time: String
    event: String
  }
`;

module.exports = typeDefs;