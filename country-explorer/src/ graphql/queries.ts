// graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
      capital
      currency
      continent {
        name
      }
    }
  }
`;
