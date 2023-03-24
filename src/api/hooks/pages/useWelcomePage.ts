import { useApi, type UseApiParams } from '../useApi'

import {
  WelcomePageQuery,
  WelcomePageQueryVariables,
} from 'types/generated/graphql'
import { welcomePage } from 'api/queries/pages'

export function useWelcomePage<TData = WelcomePageQuery>(
  {
    options,
  }: {
    options?: UseApiParams<WelcomePageQuery, Error, TData>['options']
  } = { options: undefined }
) {
  const { data, isLoading, error, isSuccess, refetch } = useApi<
    WelcomePageQuery,
    Error,
    TData
  >({
    key: ['page'],
    query: welcomePage,
    options,
  })

  return { data, isLoading, error, isSuccess, refetch }
}
