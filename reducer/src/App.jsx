import React, { useState, useEffect } from 'react';
import { TodoProvider } from './contexts/TodoContext';
import SearchBar from './Components/SearchBar';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import ModeToggle from './Components/ModeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <TodoProvider>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-green-600' : 'bg-gray-100 text-white'} p-4`}>
        <div className="container mx-auto max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Todo Application</h1>
            <ModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <SearchBar />
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
