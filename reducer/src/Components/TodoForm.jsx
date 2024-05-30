import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), task } });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Add new todo..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
};

export default TodoForm;
