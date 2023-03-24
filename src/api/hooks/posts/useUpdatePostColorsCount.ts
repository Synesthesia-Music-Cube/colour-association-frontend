import { useApiMutation } from '../useApi'

import { UpdatePostColorsCountMutationVariables } from 'types/generated/graphql'
import { updatePostColorsCount } from 'api/queries/posts'

export function useUpdatePostColorsCount<
  TData = UpdatePostColorsCountMutationVariables
>(
  postId: UpdatePostColorsCountMutationVariables['postId'],
  colorsCount: UpdatePostColorsCountMutationVariables['colorsCount']
) {
  const { mutate, data, error } = useApiMutation<
    UpdatePostColorsCountMutationVariables,
    Error,
    TData
  >({
    key: ['updatePostColorsCount'],
    query: updatePostColorsCount,
    variables: { postId, colorsCount },
  })

  return { data, error, mutate }
}
