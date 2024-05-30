import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state } = useContext(TodoContext);

  const filteredTodos = state.todos.filter(todo =>
    todo.task.toLowerCase().includes(state.searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
