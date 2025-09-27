import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import ThemeToggle from "./theme";

export default function Navbar({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(true); // Mode sombre par défaut

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full mx-auto fixed top-0 dark:bg-gray-900 bg-gradient-to-br light:from-gray-300 light:via-gray-50 light:to-gray-300 bg-opacity-95 backdrop-blur-md shadow-lg z-50 border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between p-4">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold dark:text-gray-100 light:text-gray-900 flex items-center"
        >
          <span className="dark:bg-teal-400 light:bg-blue-500 dark:text-gray-900 light:text-gray-300 p-1 rounded mr-2">UnV</span>
          Ko'S<span className="dark:text-teal-300 light:text-blue-500">devs</span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'].map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a 
                href={`#${item.toLowerCase().replace(' ', '_')}`} 
                className="dark:text-gray-300 light:text-gray-900 dark:hover:text-teal-400 light:hover:text-blue-500 font-medium transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 dark:bg-teal-400 light:bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          
          <ThemeToggle></ThemeToggle>
        </div>

        {/* Bouton Burger pour mobile */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden dark:text-gray-300 light:text-gray-700 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </motion.button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.ul 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden dark:bg-gray-800 light:bg-gray-300 flex flex-col items-center space-y-4 py-6 shadow-lg"
        >
          {['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase().replace(' ', '_')}`} 
                className="dark:text-gray-300 light:text-gray-800 font-medium px-4 py-2 rounded-lg dark:hover:bg-gray-700 dark:hover:text-teal-400 light:hover:bg-gray-400 light:hover:text-blue-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}