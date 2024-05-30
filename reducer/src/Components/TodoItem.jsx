import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h3 className="font-bold text-lg">{todo.task}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Due Date: {todo.dueDate}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Priority: {todo.priority}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Notes: {todo.notes}</p>
      </div>
      <button
        onClick={handleDelete}
        className="ml-4 p-2 bg-red-500 text-white rounded shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
