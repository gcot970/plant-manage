import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      events{
        _id
        start
        end
        title
      }
      
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

export const CALENDAR_EVENTS_QUERY = gql`
  query calendarEvents {
    userEvents {
      _id
      start
      end
      title
    }
  }
`;