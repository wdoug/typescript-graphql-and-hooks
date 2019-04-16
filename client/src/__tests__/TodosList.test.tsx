import React, { Suspense } from 'react';
import { render, wait } from 'react-testing-library';
import { createClient, getQueries } from '../testUtils';
import { ApolloProvider } from 'react-apollo-hooks';
import TodoList, { GET_TODOS } from '../TodoList';

const mocks = [
  {
    request: {
      query: GET_TODOS,
      variables: {},
    },
    result: {
      data: {
        todos: [
          {
            __typeName: 'Query',
            id: 'asdf',
            text: 'an todo',
          },
        ],
      },
    },
  },
];

const { getByText } = getQueries();
const client = createClient({ mocks });

describe('happy path', () => {
  beforeEach(() => {
    const ui = <TodoList />;
    render(
      <Suspense fallback={<>Loading</>}>
        <ApolloProvider client={client}>{ui}</ApolloProvider>
      </Suspense>,
    );
  });

  it('initially shows a loading state', () => {
    expect(getByText('Loading')).toBeInTheDocument();
  });

  it('shows the expected output after loading', async () => {
    await wait(() => expect(getByText('Loading')).toBeInTheDocument());
  });
});
