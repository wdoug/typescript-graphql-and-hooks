import React from 'react';
import {
  suspenseFallbackText,
  getQueries,
  renderWithContext,
  LoadingProvider,
  ErrorProvider,
  ApolloMockingProvider,
} from '../testUtils';
import TodoList from '../TodoList';

const { getByText } = getQueries();

describe('when loading', () => {
  beforeEach(() => {
    renderWithContext(
      <LoadingProvider>
        <TodoList />
      </LoadingProvider>,
    );
  });

  it('suspends', () => {
    expect(getByText(suspenseFallbackText)).toBeInTheDocument();
  });
});

describe('when there is a network error', () => {
  beforeEach(() => {
    renderWithContext(
      <ErrorProvider graphQLErrors={[{ message: 'network error' }]}>
        <TodoList />
      </ErrorProvider>,
    );
  });

  it('throws an error to be handled by an error boundary', () => {
    // TODO - investigate console warning
    expect(getByText(/network error/)).toBeInTheDocument();
  });
});

describe('with data', () => {
  beforeEach(() => {
    const customResolvers = {
      Query: () => ({
        todos: () => [{ text: 'write test' }, { text: 'profit' }],
      }),
    };
    renderWithContext(
      <ApolloMockingProvider customResolvers={customResolvers}>
        <TodoList />
      </ApolloMockingProvider>,
    );
  });

  it('renders the todos', () => {
    expect(getByText('write test')).toBeInTheDocument();
    expect(getByText('profit')).toBeInTheDocument();
  });
});
