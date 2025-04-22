import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Articles from './components/Articles';
// Import other components...

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <Stats />
        <Articles />
        {/* Add other components */}
      </div>
    </ThemeProvider>
  );
};

export default App;