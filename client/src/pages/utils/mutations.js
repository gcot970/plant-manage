import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;
export const UPDATE_USER = gql`
mutation Mutation($input: UserEventInput) {
  createUserEvent(input: $input) {
    events {
      end
      start
      title
    }
  }
}
`

export const ADD_PLANT = gql`
  mutation addPlant(
    $commonName: String
    $scientificName: String
    $nickname: String
    $watering: String
    $userId: ID
  ) {
    addPlant(
      commonName: $commonName
      scientificName: $scientificName
      nickname: $nickname
      watering: $watering
      userId: $userID
    ) {
      _id
      commonName
      scientificName
      nickname
      watering
      addedDate
      firstWaterDate
      lastWaterDate
    }
  }
`;

export const DELETE_PLANT = gql`
  mutation deletePlant($plantId: ID!) {
    deletePlant(plantId: $plantId) {
      _id
    }
  }
`;

export const UPDATE_PLANT = gql`
  mutation updatePlant($plantId: ID!, $nickname: String, $lastWaterDate: Date) {
    updatePlant(plantId: $plantId, nickname: $nickname, lastWaterDate: $lastWaterDate) {
      _id
      nickname
      lastWaterDate
    }
  }
`;