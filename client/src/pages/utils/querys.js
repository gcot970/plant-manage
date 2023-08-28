import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      
    }
  }
`;

export const PLANT_QUERY = gql`
  query myPlants {
    myPlants {
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