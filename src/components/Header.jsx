import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-router-dom'; // Import Link for routing
import Logo from '../images/LOGO (2).png'; // Import the logo

const Header = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full z-50 ${isDark ? 'bg-gray-900' : 'bg-primary'} transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <motion.img
          src={Logo} // Use the imported logo
          alt="Logo"
          className="h-10 w-auto" // Adjust height as needed
        />
        
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-white text-2xl font-bold"
        >
          Ministry of Environment, Climate & Wildlife
        </motion.h1>
        
        <nav className="hidden md:flex space-x-6">
          {['Home', 'News', 'Resources', 'Blog', 'Contact'].map((item) => (
            <motion.div key={item} whileHover={{ scale: 1.1 }}>
              <Link
                to={`/${item.toLowerCase()}`} // Create links dynamically (e.g. /home, /news)
                className="text-white hover:text-gray-200 cursor-pointer"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-opacity-20 hover:bg-white"
        >
          {isDark ? (
            <Sun className="text-white w-6 h-6" />
          ) : (
            <Moon className="text-white w-6 h-6" />
          )}
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;