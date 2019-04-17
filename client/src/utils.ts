import { useQuery, QueryHookOptions } from 'react-apollo-hooks';
import { OperationVariables } from 'apollo-client';
import { DocumentNode } from 'graphql';

export function useCustomQuery<
  TData,
  TVariables = OperationVariables,
  TCache = object
>(
  query: DocumentNode,
  {
    suspend = true,
    throwNetworkError = true,
    ...otherArgs
  }: QueryHookOptions<TVariables, TCache> & {
    throwNetworkError?: boolean;
  } = {},
) {
  const result = useQuery<TData, TVariables, TCache>(query, {
    suspend,
    ...otherArgs,
  });

  if (throwNetworkError && result.error) {
    throw result.error;
  }

  return result;
}
