'use strict';

import gql from 'graphql-tag';

export const userFields = gql `
  fragment userFields on user {
    id
    name
  }
`;

export type User = {
  id: number;
  name: string
};

export type Query = {
  users: User[];
};

export const Users = gql`
  query {
    users{
      ...userFields
    }
  }
  ${userFields}
  `;

export const addUser = gql`
  mutation addUser($name: String!) {
    addUser(name: $name) {
      ...userFields
    }
  }
  ${userFields}
  `;

export const removeUser = gql`
  mutation removeUser($id:String!) {
    removeUser(id: $id){
      ...userFields
    }
  }
  ${userFields}`;

export const updateUser = gql`
  mutation updateUser($id: String!, $name: String!) {
    updateUser(id: $id, name: $name) {
      ...userFields
    }
  }
  ${userFields}`;
