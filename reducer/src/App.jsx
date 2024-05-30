import React from 'react';
import { TodoProvider } from './contexts/TodoContext';
import SearchBar from './Components/SearchBar';
import Todoform from './Components/TodoForm';
import TodoList from './Components/TodoList';
import ModeToggle from './Components/ModeToggle';

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <div className="container mx-auto max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Todo Application</h1>
            <ModeToggle />
          </div>
          <SearchBar />
          <Todoform />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
