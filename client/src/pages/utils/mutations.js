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
  mutation update($start: String!, $end: String!, $title: String!){
    update(start: $start, end: $end, title: $title) {
      token
      user {
        _id
        name
        userEvent
      }
    }
  }

`