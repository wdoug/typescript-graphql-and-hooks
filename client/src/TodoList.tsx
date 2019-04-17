import React from 'react';
import gql from 'graphql-tag';
import { useCustomQuery } from './utils';
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
  const { data } = useCustomQuery<TodosQuery>(GET_TODOS);

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
