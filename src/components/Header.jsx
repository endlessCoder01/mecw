import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { Link } from 'react-router-dom' 
import Logo from '../images/LOGO (2).png'

const Header = () => {
  const { isDark, setIsDark } = useTheme()

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full z-50 ${
        isDark ? 'bg-gray-900' : 'bg-primary'
      } transition-colors duration-300`}
    >
<div className="container mx-3 px-4 py-5 flex justify-between items-center">
  <motion.img
    src={Logo} 
    alt="Logo"
    className="h-12 w-auto" 
  />
  
  <motion.h1 
    whileHover={{ scale: 1.05 }}
    className="text-white text-2xl font-bold -ml-2" // Use negative margin-left
  >
    Ministry of Environment, Climate & Wildlife
  </motion.h1>
  
  <nav className="hidden md:flex space-x-6">
    {['Home', 'News','Blog', 'Contact'].map((item) => (
      <motion.div key={item} whileHover={{ scale: 1.1 }}>
        <Link
          to={`/${item.toLowerCase()}`}
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
  )
}

export default Header
