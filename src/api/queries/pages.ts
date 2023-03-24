import { gql } from 'graphql-request'

export const welcomePage = gql`
  query welcomePage {
    page(id: 60, idType: DATABASE_ID) {
      title
      content
    }
  }
`
