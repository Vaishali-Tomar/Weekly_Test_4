import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
  };

  return (
    <div className="mb-2 p-2 border border-gray-300 rounded shadow-sm flex justify-between items-center">
      <span>{todo.task}</span>
      <button onClick={handleDelete} className="text-red-500 hover:text-red-700">Delete</button>
    </div>
  );
};

export default TodoItem;
