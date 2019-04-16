import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const ADD_TODO = gql`
  mutation createTodo($text: String) {
    createTodo(data: { text: $text }) {
      id
      text
    }
  }
`;

const CreateTodo: React.FC = () => {
  const [text, setText] = useState('');
  const addTodo = useMutation(ADD_TODO, {
    variables: {
      text,
    },
  });

  return (
    <form>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button
        type="submit"
        onClick={async e => {
          e.preventDefault();
          await addTodo({ refetchQueries: ['todos'] });
          setText('');
        }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default CreateTodo;
