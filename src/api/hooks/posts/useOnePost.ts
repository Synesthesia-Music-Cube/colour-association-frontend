import { useApi, type UseApiParams } from '../useApi'

import { OnePostQuery, OnePostQueryVariables } from 'types/generated/graphql'
import { onePost } from 'api/queries/posts'

export function useOnePost<TData = OnePostQuery>(
  id: OnePostQueryVariables['id'],
  {
    options,
  }: {
    options?: UseApiParams<OnePostQuery, Error, TData>['options']
  } = { options: undefined }
) {
  const { data, isLoading, error, isSuccess, refetch } = useApi<
    OnePostQuery,
    Error,
    TData
  >({
    key: ['post'],
    query: onePost,
    options,
    variables: { id },
  })

  return { data, isLoading, error, isSuccess, refetch }
}
