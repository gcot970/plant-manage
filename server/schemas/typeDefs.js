const { gql } = require('apollo-server-express');


const typeDefs = gql`
scalar Date

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
    addedDate: Date!
    firstWaterDate: Date!
    lastWaterDate: Date!
  }

  type UserEvent {
    _id: ID
    userId: ID
    start: Date!
    end: Date!
    title: String
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
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createUserEvent(input: UserEventInput): User
    addPlant(commonName: String!, scientificName: String!, nickname: String, watering: String!): Plant
    deletePlant(plantId: ID!): Plant
    updatePlant(plantId: ID!, nickname: String, lastWaterDate:  Date!): Plant
  }

  input UserEventInput {
    userId: ID
    start: Date!
    end: Date!
    title: String
   
  } 
`;

module.exports = typeDefs;