import React from 'react';
import {
  suspenseFallbackText,
  getQueries,
  renderWithContext,
  wait,
} from '../testUtils';
import TodoList, { GET_TODOS } from '../TodoList';

// TODO: Replace this with this better method:
// https://medium.freecodecamp.org/a-new-approach-to-mocking-graphql-data-1ef49de3d491
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
            id: 'asdf',
            text: 'a todo',
            completed: false,
            __typename: 'Todo',
          },
        ],
      },
    },
  },
];

const { getByText } = getQueries();

describe('happy path', () => {
  beforeEach(() => {
    const ui = <TodoList />;
    renderWithContext(ui, { mocks });
  });

  it('initially shows a loading state', () => {
    expect(getByText(suspenseFallbackText)).toBeInTheDocument();
  });

  it('shows the expected output after loading', async () => {
    await wait(() => expect(getByText('a todo')).toBeInTheDocument());
  });
});
