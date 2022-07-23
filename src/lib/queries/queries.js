import { gql } from '@apollo/client'

export const FRUITS_QUERY = gql`
query fruits{
    fruits{
      id
      fruit_name
      scientific_name
      family
      origin
    }
  }
`

export const FRUIT_QUERY = gql`
query fruit($i:ID!){
  fruit(id:$i) {
        id
        fruit_name
        scientific_name
        family
        origin
        description
        producing_countries{
            country 
        }
    }
  }
`

