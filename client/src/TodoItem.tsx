import React from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

type TodoProps = {
  todo: {
    id: string;
    text?: string | null;
    completed: boolean;
  };
};

const COMPLETE_TODO = gql`
  mutation completeTodo($id: ID!) {
    updateTodo(data: { completed: true }, where: { id: $id }) {
      text
      completed
    }
  }
`;

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const complete = useMutation(COMPLETE_TODO, {
    variables: { id: todo.id },
  });

  return (
    <div
      style={{
        textDecoration: todo.completed ? 'line-through' : '',
      }}
    >
      {todo.text}
      <button onClick={() => complete({ refetchQueries: ['todos'] })}>
        Done
      </button>
    </div>
  );
};

export default Todo;
