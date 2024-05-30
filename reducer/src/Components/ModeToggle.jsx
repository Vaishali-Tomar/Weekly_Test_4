import React from 'react';

const ModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-100 rounded"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ModeToggle;
