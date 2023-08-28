const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
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
    addPlant(commonName: String!, scientificName: String!, nickname: String, watering: String!): Plant
    deletePlant(plantId: ID!): Plant
    updatePlant(plantId: ID!, nickname: String, lastWaterDate: Date): Plant
  }
`;

module.exports = typeDefs;