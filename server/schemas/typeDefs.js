const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    events: [UserEvent]
  }

  type Plant {
    _id: ID
    commonName: String
    scientificName: String
    nickname: String
    img_url: String
    watering: String
    addedDate: Date
    firstWaterDate: Date
    lastWaterDate: Date
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
    addPlant(commonName: String!, scientificName: String!, nickname: String, watering: String!): Plant
    deletePlant(plantId: ID!): Plant
    updatePlant(plantId: ID!, nickname: String, lastWaterDate: Date): Plant
  }
`;

module.exports = typeDefs;