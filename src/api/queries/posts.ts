import { gql } from 'graphql-request'

export const allPosts = gql`
  query allPosts {
    posts {
      edges {
        node {
          databaseId
          title
          colors {
            color1
            color2
            color3
            color4
            color5
            color6
            color7
          }
          sound {
            sound {
              title
              mediaItemUrl
            }
          }
          colorsCount {
            color1Count
            color2Count
            color3Count
            color4Count
            color5Count
            color6Count
            color7Count
          }
        }
      }
    }
  }
`

export const onePost = gql`
  query onePost($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
      databaseId
      title
      colors {
        color1
        color2
        color3
        color4
        color5
        color6
        color7
      }
      sound {
        sound {
          title
          mediaItemUrl
        }
      }
      colorsCount {
        color1Count
        color2Count
        color3Count
        color4Count
        color5Count
        color6Count
        color7Count
      }
    }
  }
`

export const updatePostColorsCount = gql`
  mutation updatePostColorsCount($postId: Int!, $colorsCount: [Int!]) {
    updatePostColorsCount(
      input: { postId: $postId, colorsCount: $colorsCount }
    ) {
      postId
    }
  }
`
