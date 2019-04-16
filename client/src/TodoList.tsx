import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { TodosQuery } from './generated/graphql';
import Todo from './TodoItem';

export const GET_TODOS = gql`
  query todos {
    todos(orderBy: createdAt_DESC) {
      id
      text
      completed
    }
  }
`;

const TodosList: React.FC = () => {
  const { data, error } = useQuery<TodosQuery>(GET_TODOS, {
    suspend: true,
  });
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <ul>
      {data &&
        data.todos.map(todo => (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
    </ul>
  );
};

export default TodosList;
