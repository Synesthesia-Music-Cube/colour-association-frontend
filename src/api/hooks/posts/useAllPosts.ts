import { useApi, type UseApiParams } from '../useApi'

import { AllPostsQuery } from 'types/generated/graphql'
import { allPosts } from 'api/queries/posts'

export function useAllPosts<TData = AllPostsQuery>(
  {
    options,
  }: {
    options?: UseApiParams<AllPostsQuery, Error, TData>['options']
  } = { options: undefined }
) {
  const { data, isLoading, error, isSuccess, refetch } = useApi<
    AllPostsQuery,
    Error,
    TData
  >({
    key: ['posts'],
    query: allPosts,
    options,
  })

  return { data, isLoading, error, isSuccess, refetch }
}
