import React, { Suspense } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import TodoList from './TodoList';
import './App.css';
import CreateTodo from './CreateTodo';

const SERVER_URL = 'http://localhost:4000';

const client = new ApolloClient({
  uri: SERVER_URL,
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>todos</h1>
        <CreateTodo />
        <TodoList />
      </Suspense>
    </ApolloProvider>
  );
};

export default App;
