import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Header from './Header';
import Hero from './Hero';
import Stats from './Stats';
import Articles from './Articles';
import ActionTips from './ActionTips';
import Newsletter from './Newsletter';
import Resources from './Resources';
import Testimonials from './Testimonials';
import Wildlife from './Wildlife';
import Footer from './Footer';


const MainView = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-cream dark:bg-gray-500 transition-colors duration-500">
        <Header />
        <Hero />
        <Stats />
        <Articles />
        <ActionTips />
        <Newsletter />
        {/* <Resources /> */}
        <Testimonials />
        <Wildlife />
        <Footer/>
    

      </div>
    </ThemeProvider>
  );
};

export default MainView;