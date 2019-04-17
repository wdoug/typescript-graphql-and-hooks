import { useQuery } from 'react-apollo-hooks';
import { DocumentNode } from 'graphql';

export function useCustomQuery<T>(query: DocumentNode, args?: Object) {
  const result = useQuery<T>(query, {
    suspend: true,
    ...args,
  });

  if (result.error) {
    throw result.error;
  }

  return result;
}
