import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Articles from './components/Articles';
import ActionTips from './components/ActionTips';
import Newsletter from './components/Newsletter';
import Resources from './components/Resources';
import Testimonials from './components/Testimonials';
import Wildlife from './components/Wildlife';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <Stats />
        <Articles />
        <ActionTips />
        <Newsletter />
        <Resources />
        <Testimonials />
        <Wildlife />
      </div>
    </ThemeProvider>
  );
};

export default App;