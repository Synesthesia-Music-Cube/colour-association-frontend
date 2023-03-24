import { GraphQLClient, Variables } from 'graphql-request'

export const fetcher = async <T = any, V = Variables>(
  query: string,
  variables: V | undefined
) => {
  const graphQLClient = new GraphQLClient('https://honzanemecek.cz/graphql')

  return await graphQLClient.request<T, Variables>(
    query,
    variables as Variables | undefined
  )
}
