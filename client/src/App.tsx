import React, { Suspense } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const SERVER_URL = 'http://localhost:4000';

const client = new ApolloClient({
  uri: SERVER_URL,
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <h1>todos</h1>
          <CreateTodo />
          <TodoList />
        </Suspense>
      </ErrorBoundary>
    </ApolloProvider>
  );
};

export default App;
